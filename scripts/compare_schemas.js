const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const addedCsvPath = path.join(root, 'campos_nuevos_new_vs_old.csv');
const changesCsvPath = path.join(root, 'cambios_schema_new_vs_old.csv');
const changesMdPath = path.join(root, 'cambios_schema_new_vs_old.md');

const constraintKeys = [
  'const',
  'enum',
  'format',
  'pattern',
  'minLength',
  'maxLength',
  'minimum',
  'maximum',
  'exclusiveMinimum',
  'exclusiveMaximum',
  'multipleOf',
  'minItems',
  'maxItems',
  'uniqueItems',
  'additionalProperties'
];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        value += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(value);
      value = '';
    } else if (char === '\n') {
      row.push(value);
      rows.push(row);
      row = [];
      value = '';
    } else if (char !== '\r') {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  const headers = rows.shift().map((header) => header.replace(/^\uFEFF/, ''));
  return rows
    .filter((entry) => entry.length === headers.length)
    .map((entry) => Object.fromEntries(headers.map((header, index) => [header, entry[index] || ''])));
}

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

function flattenSchema(schema) {
  const fields = new Map();

  function visit(node, currentPath, isRequired) {
    if (!node || typeof node !== 'object' || !currentPath) return;

    fields.set(currentPath, fieldFromSchema(node, isRequired));

    const requiredChildren = new Set(Array.isArray(node.required) ? node.required : []);

    if (node.properties && typeof node.properties === 'object') {
      for (const [name, child] of Object.entries(node.properties)) {
        const childPath = currentPath ? `${currentPath}.${name}` : name;
        visit(child, childPath, requiredChildren.has(name));
      }
    }

    if (node.items && typeof node.items === 'object') {
      const itemPath = `${currentPath}[]`;
      visit(node.items, itemPath, true);
    }
  }

  const requiredRoot = new Set(Array.isArray(schema.required) ? schema.required : []);
  for (const [name, child] of Object.entries(schema.properties || {})) {
    visit(child, name, requiredRoot.has(name));
  }

  return fields;
}

function compareFields(schema, newFile, oldFile) {
  const newFields = flattenSchema(readJson(newFile));
  const oldFields = flattenSchema(readJson(oldFile));
  const paths = [...new Set([...newFields.keys(), ...oldFields.keys()])].sort();
  const changes = [];

  for (const fieldPath of paths) {
    const next = newFields.get(fieldPath);
    const prev = oldFields.get(fieldPath);

    if (!prev && next) {
      changes.push({
        schema,
        new_file: newFile,
        old_file: oldFile,
        path: fieldPath,
        change_type: 'agregado',
        property: 'campo',
        old_value: '',
        new_value: summarizeField(next),
        description: next.description
      });
      continue;
    }

    if (prev && !next) {
      changes.push({
        schema,
        new_file: newFile,
        old_file: oldFile,
        path: fieldPath,
        change_type: 'eliminado',
        property: 'campo',
        old_value: summarizeField(prev),
        new_value: '',
        description: prev.description
      });
      continue;
    }

    for (const property of ['type', 'required', 'description']) {
      if (prev[property] !== next[property]) {
        changes.push({
          schema,
          new_file: newFile,
          old_file: oldFile,
          path: fieldPath,
          change_type: property === 'required' ? 'requerido_modificado' : `${property}_modificado`,
          property,
          old_value: prev[property],
          new_value: next[property],
          description: next.description || prev.description
        });
      }
    }

    for (const key of constraintKeys) {
      const oldValue = stringifyValue(prev.constraints[key]);
      const newValue = stringifyValue(next.constraints[key]);
      if (oldValue !== newValue) {
        changes.push({
          schema,
          new_file: newFile,
          old_file: oldFile,
          path: fieldPath,
          change_type: 'restriccion_modificada',
          property: key,
          old_value: oldValue,
          new_value: newValue,
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

function writeCsv(rows) {
  const headers = ['schema', 'new_file', 'old_file', 'path', 'change_type', 'property', 'old_value', 'new_value', 'description'];
  const body = rows.map((row) => headers.map((header) => quoteCsv(row[header])).join(',')).join('\n');
  fs.writeFileSync(changesCsvPath, `${headers.join(',')}\n${body}\n`, 'utf8');
}

function writeMarkdown(rows) {
  const bySchema = groupBy(rows, 'schema');
  const byType = groupBy(rows, 'change_type');
  const lines = [
    '# Cambios de schemas: new vs old',
    '',
    'Comparacion de campos existentes, campos agregados y campos eliminados entre los JSON Schema nuevos y antiguos.',
    '',
    '## Resumen por tipo de cambio',
    '',
    '| Tipo de cambio | Cantidad |',
    '|---|---:|',
    ...Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([name, count]) => `| \`${name}\` | ${count} |`),
    '',
    '## Resumen por schema',
    '',
    '| Schema | Cambios |',
    '|---|---:|',
    ...Object.entries(bySchema).sort((a, b) => b[1] - a[1]).map(([name, count]) => `| \`${name}\` | ${count} |`),
    '',
    '## Detalle',
    ''
  ];

  for (const schema of Object.keys(bySchema).sort()) {
    lines.push(`### ${schema}`, '');
    lines.push('| Campo | Cambio | Propiedad | Old | New |');
    lines.push('|---|---|---|---|---|');
    for (const row of rows.filter((entry) => entry.schema === schema)) {
      lines.push(`| \`${row.path}\` | \`${row.change_type}\` | \`${row.property}\` | ${stringifyValue(row.old_value).replaceAll('|', '\\|')} | ${stringifyValue(row.new_value).replaceAll('|', '\\|')} |`);
    }
    lines.push('');
  }

  fs.writeFileSync(changesMdPath, lines.join('\n'), 'utf8');
}

function main() {
  const mapping = new Map();
  for (const row of parseCsv(fs.readFileSync(addedCsvPath, 'utf8'))) {
    if (row.old_file === '(sin equivalente old)') continue;
    mapping.set(row.schema, {
      newFile: row.new_file,
      oldFile: row.old_file
    });
  }

  const changes = [];
  for (const [schema, files] of [...mapping.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    changes.push(...compareFields(schema, files.newFile, files.oldFile));
  }

  writeCsv(changes);
  writeMarkdown(changes);

  console.log(JSON.stringify({
    schemas: mapping.size,
    changes: changes.length,
    byType: groupBy(changes, 'change_type'),
    bySchema: groupBy(changes, 'schema')
  }, null, 2));
}

main();
