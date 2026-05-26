const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const newDir = path.join(root, 'svfe-json-schemas-new');
const oldDir = path.join(root, 'svfe-json-schemas-old');
const addedCsvPath = path.join(root, 'campos_nuevos_new_vs_old.csv');
const changesCsvPath = path.join(root, 'cambios_schema_new_vs_old.csv');
const changesMdPath = path.join(root, 'cambios_schema_new_vs_old.md');
const addedMdPath = path.join(root, 'campos_nuevos_new_vs_old.md');

const schemaNames = {
  'fe-f': 'Factura Electrónica',
  'fe-fc': 'Factura Electrónica',
  'fe-ccf': 'Comprobante de Crédito Fiscal',
  'fe-nc': 'Nota de Crédito Electrónica',
  'fe-nd': 'Nota de Débito Electrónica',
  'fe-nr': 'Nota de Remisión Electrónica',
  'fe-cr': 'Comprobante de Retención',
  'fe-cl': 'Comprobante de Liquidación',
  'fe-dcl': 'Documento Contable de Liquidación',
  'fe-fex': 'Factura de Exportación',
  'fe-fse': 'Factura Sujeto Excluido',
  'fe-cd': 'Comprobante de Donación',
  'contingencia-schema': 'Evento de Contingencia',
  'anulacion-schema': 'Evento de Invalidación (anulación)',
  'invalidacion-schema': 'Evento de Invalidación',
  'fe-eret': 'Evento de Retorno',
  'fe-eop': 'Evento de Operaciones Especiales',
  'fe-eges': 'Evento de Gestión'
};

const oldToNewMapping = {
  'fe-fc': 'fe-f',
  'anulacion-schema': 'invalidacion-schema'
};

const constraintKeys = [
  'const', 'enum', 'format', 'pattern',
  'minLength', 'maxLength', 'minimum', 'maximum',
  'exclusiveMinimum', 'exclusiveMaximum', 'multipleOf',
  'minItems', 'maxItems', 'uniqueItems', 'additionalProperties'
];

function quoteCsv(value) {
  return `"${String(value ?? '').replace(/"/g, '""')}"`;
}

function stringifyValue(value) {
  if (value === undefined) return '';
  if (Array.isArray(value)) return JSON.stringify(value);
  if (value && typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function normalizeType(type) {
  return Array.isArray(type) ? type.map(String).join('|') : stringifyValue(type);
}

function toRelative(absPath) {
  return path.relative(root, absPath).replace(/\\/g, '/');
}

function baseKey(filename) {
  return filename.replace(/-v\d+\.json$/, '');
}

function discoverSchemas(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...discoverSchemas(full));
    } else if (entry.name.endsWith('.json')) {
      result.push({ file: full, relative: toRelative(full), base: baseKey(entry.name) });
    }
  }
  return result;
}

function buildMapping() {
  const newSchemas = discoverSchemas(newDir);
  const oldSchemas = discoverSchemas(oldDir);
  const oldByBase = new Map(oldSchemas.map((s) => [s.base, s]));

  return newSchemas.map((ns) => {
    const lookupKey = Object.entries(oldToNewMapping).find(([, v]) => v === ns.base)?.[0] || ns.base;
    const os = oldByBase.get(lookupKey) || oldByBase.get(ns.base);
    return {
      schema: ns.base,
      label: schemaNames[ns.base] || ns.base,
      newFile: ns.relative,
      oldFile: os ? os.relative : null
    };
  });
}

function fieldFromSchema(schema, required) {
  const constraints = {};
  for (const key of constraintKeys) {
    if (schema && Object.prototype.hasOwnProperty.call(schema, key)) {
      constraints[key] = schema[key];
    }
  }
  return {
    type: normalizeType(schema?.type),
    required: required ? 'si' : 'no',
    description: schema?.description || '',
    constraints
  };
}

function summarizeField(field) {
  const constraints = constraintKeys
    .filter((key) => field.constraints[key] !== undefined)
    .map((key) => `${key}=${stringifyValue(field.constraints[key])}`)
    .join('; ');
  return [
    `tipo=${field.type || '(sin tipo)'}`,
    `requerido=${field.required}`,
    field.description ? `descripcion=${field.description}` : '',
    constraints ? `restricciones=${constraints}` : ''
  ].filter(Boolean).join(' | ');
}

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
}

function flattenSchema(schema) {
  const fields = new Map();

  function visit(node, currentPath, isRequired) {
    if (!node || typeof node !== 'object' || !currentPath) return;
    fields.set(currentPath, fieldFromSchema(node, isRequired));

    const requiredChildren = new Set(Array.isArray(node.required) ? node.required : []);
    if (node.properties && typeof node.properties === 'object') {
      for (const [name, child] of Object.entries(node.properties)) {
        visit(child, `${currentPath}.${name}`, requiredChildren.has(name));
      }
    }
    if (node.items && typeof node.items === 'object') {
      visit(node.items, `${currentPath}[]`, true);
    }
  }

  const requiredRoot = new Set(Array.isArray(schema.required) ? schema.required : []);
  for (const [name, child] of Object.entries(schema.properties || {})) {
    visit(child, name, requiredRoot.has(name));
  }
  return fields;
}

function findNewFields(schemaName, newFile, oldFile) {
  const newFields = flattenSchema(readJson(newFile));
  if (!oldFile) {
    return [...newFields.entries()].map(([fieldPath, field]) => ({
      schema: schemaName,
      new_file: newFile,
      old_file: '(sin equivalente old)',
      path: fieldPath,
      type: field.type,
      required: field.required,
      description: field.description
    }));
  }
  const oldFields = flattenSchema(readJson(oldFile));
  return [...newFields.entries()]
    .filter(([fieldPath]) => !oldFields.has(fieldPath))
    .map(([fieldPath, field]) => ({
      schema: schemaName,
      new_file: newFile,
      old_file: oldFile,
      path: fieldPath,
      type: field.type,
      required: field.required,
      description: field.description
    }));
}

function compareFields(schemaName, newFile, oldFile) {
  const newFields = flattenSchema(readJson(newFile));
  const oldFields = flattenSchema(readJson(oldFile));
  const allPaths = [...new Set([...newFields.keys(), ...oldFields.keys()])].sort();
  const changes = [];

  for (const fieldPath of allPaths) {
    const next = newFields.get(fieldPath);
    const prev = oldFields.get(fieldPath);

    if (!prev && next) {
      changes.push({
        schema: schemaName, new_file: newFile, old_file: oldFile,
        path: fieldPath, change_type: 'agregado', property: 'campo',
        old_value: '', new_value: summarizeField(next), description: next.description
      });
      continue;
    }

    if (prev && !next) {
      changes.push({
        schema: schemaName, new_file: newFile, old_file: oldFile,
        path: fieldPath, change_type: 'eliminado', property: 'campo',
        old_value: summarizeField(prev), new_value: '', description: prev.description
      });
      continue;
    }

    for (const property of ['type', 'required', 'description']) {
      if (prev[property] !== next[property]) {
        changes.push({
          schema: schemaName, new_file: newFile, old_file: oldFile,
          path: fieldPath,
          change_type: property === 'required' ? 'requerido_modificado' : `${property}_modificado`,
          property,
          old_value: prev[property], new_value: next[property],
          description: next.description || prev.description
        });
      }
    }

    for (const key of constraintKeys) {
      const oldVal = stringifyValue(prev.constraints[key]);
      const newVal = stringifyValue(next.constraints[key]);
      if (oldVal !== newVal) {
        changes.push({
          schema: schemaName, new_file: newFile, old_file: oldFile,
          path: fieldPath, change_type: 'restriccion_modificada', property: key,
          old_value: oldVal, new_value: newVal,
          description: next.description || prev.description
        });
      }
    }
  }
  return changes;
}

function groupBy(rows, key) {
  return rows.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || 0) + 1;
    return acc;
  }, {});
}

function writeAddedCsv(rows) {
  const headers = ['schema', 'new_file', 'old_file', 'path', 'type', 'required', 'description'];
  const body = rows.map((row) => headers.map((h) => quoteCsv(row[h])).join(',')).join('\n');
  fs.writeFileSync(addedCsvPath, `${headers.join(',')}\n${body}\n`, 'utf8');
}

function writeChangesCsv(rows) {
  const headers = ['schema', 'new_file', 'old_file', 'path', 'change_type', 'property', 'old_value', 'new_value', 'description'];
  const body = rows.map((row) => headers.map((h) => quoteCsv(row[h])).join(',')).join('\n');
  fs.writeFileSync(changesCsvPath, `${headers.join(',')}\n${body}\n`, 'utf8');
}

function writeAddedMarkdown(rows) {
  const bySchema = groupBy(rows, 'schema');
  const lines = [
    '# Campos nuevos: new vs old',
    '',
    `Total de campos nuevos detectados: **${rows.length}**`,
    '',
    '## Resumen por schema',
    '',
    '| Schema | Campos nuevos |',
    '|---|---:|',
    ...Object.entries(bySchema).sort((a, b) => b[1] - a[1]).map(([n, c]) => `| \`${n}\` | ${c} |`),
    '',
    '## Detalle',
    ''
  ];
  for (const schema of Object.keys(bySchema).sort()) {
    lines.push(`### ${schema}`, '');
    lines.push('| Campo | Tipo | Requerido | Descripción |');
    lines.push('|---|---|---|---|');
    for (const row of rows.filter((r) => r.schema === schema)) {
      lines.push(`| \`${row.path}\` | \`${row.type}\` | ${row.required} | ${(row.description || '').replaceAll('|', '\\|')} |`);
    }
    lines.push('');
  }
  fs.writeFileSync(addedMdPath, lines.join('\n'), 'utf8');
}

function writeChangesMarkdown(rows) {
  const bySchema = groupBy(rows, 'schema');
  const byType = groupBy(rows, 'change_type');
  const lines = [
    '# Cambios de schemas: new vs old',
    '',
    'Comparación de campos existentes, campos agregados y campos eliminados entre los JSON Schema nuevos y antiguos.',
    '',
    '## Resumen por tipo de cambio',
    '',
    '| Tipo de cambio | Cantidad |',
    '|---|---:|',
    ...Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([n, c]) => `| \`${n}\` | ${c} |`),
    '',
    '## Resumen por schema',
    '',
    '| Schema | Cambios |',
    '|---|---:|',
    ...Object.entries(bySchema).sort((a, b) => b[1] - a[1]).map(([n, c]) => `| \`${n}\` | ${c} |`),
    '',
    '## Detalle',
    ''
  ];
  for (const schema of Object.keys(bySchema).sort()) {
    lines.push(`### ${schema}`, '');
    lines.push('| Campo | Cambio | Propiedad | Old | New |');
    lines.push('|---|---|---|---|---|');
    for (const row of rows.filter((r) => r.schema === schema)) {
      lines.push(`| \`${row.path}\` | \`${row.change_type}\` | \`${row.property}\` | ${stringifyValue(row.old_value).replaceAll('|', '\\|')} | ${stringifyValue(row.new_value).replaceAll('|', '\\|')} |`);
    }
    lines.push('');
  }
  fs.writeFileSync(changesMdPath, lines.join('\n'), 'utf8');
}

function main() {
  const mapping = buildMapping();
  console.log('Schema mapping:');
  for (const m of mapping) {
    console.log(`  ${m.schema}: ${m.newFile} -> ${m.oldFile || '(nuevo)'}`);
  }

  const addedRows = [];
  const changeRows = [];

  for (const m of mapping.sort((a, b) => a.schema.localeCompare(b.schema))) {
    addedRows.push(...findNewFields(m.schema, m.newFile, m.oldFile));
    if (m.oldFile) {
      changeRows.push(...compareFields(m.schema, m.newFile, m.oldFile));
    }
  }

  writeAddedCsv(addedRows);
  writeAddedMarkdown(addedRows);
  writeChangesCsv(changeRows);
  writeChangesMarkdown(changeRows);

  const summary = {
    schemas_compared: mapping.length,
    schemas_with_old: mapping.filter((m) => m.oldFile).length,
    schemas_new_only: mapping.filter((m) => !m.oldFile).length,
    new_fields: addedRows.length,
    total_changes: changeRows.length,
    by_change_type: groupBy(changeRows, 'change_type'),
    by_schema: groupBy(changeRows, 'schema')
  };
  console.log('\nResults:', JSON.stringify(summary, null, 2));
}

main();
