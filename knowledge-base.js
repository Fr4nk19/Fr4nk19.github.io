window.KNOWLEDGE_BASE = [
  {
    id: "eventos_nuevos",
    keywords: ["evento","eventos","nuevos","retorno","operaciones especiales","gestion","fe-eret","fe-eop","fe-eges","que hay nuevo","novedades","cambios principales"],
    question: "Cuales son los nuevos eventos en la version 2.0?",
    answer: "La Normativa DTE v2.0 introduce 3 nuevos eventos que no existian en la version anterior:\n\n1. **Evento de Retorno (fe-eret)**: Mensaje de datos firmado para documentar retornos de bienes. Aplica a FE, FEXE y FSEE. Plazo maximo de 3 meses desde la fecha del sello de recepcion del DTE.\n\n2. **Evento de Operaciones Especiales (fe-eop)**: Para informar operaciones documentadas con Facturas Simplificadas o Comprobantes de Control Interno.\n\n3. **Evento de Gestion (fe-eges)**: Nuevo evento para gestion administrativa de documentos.\n\nEstos 3 eventos tienen schemas JSON completamente nuevos sin equivalente en la version anterior.",
    category: "nuevos_eventos"
  },
  {
    id: "evento_retorno",
    keywords: ["retorno","devolucion","reembolso","depositos","envases","empaques","fe-eret","evento retorno","aplicar retorno"],
    question: "Como funciona el Evento de Retorno?",
    answer: "El **Evento de Retorno** es un mensaje de datos firmado que se genera por retornos de bienes en operaciones amparadas en DTE.\n\n**Cuando usarlo:**\n- Reembolsos\n- Recuperacion de depositos de envases o empaques\n- Para FEXE: disminucion en la exportacion y del Remanente de Credito Fiscal\n- Para FSEE: disminucion de la compra\n\n**Documentos aplicables:** FE, FEXE, FSEE\n\n**Condiciones:**\n- Maximo 50 DTE del mismo tipo en documentos relacionados\n- Todos los DTE relacionados deben tener mismo Emisor, Receptor y Tercero\n- La suma de eventos de retorno no puede exceder el valor del DTE original\n- Plazo maximo: 3 meses desde la fecha del sello de recepcion\n- Solo aplica a DTE con sello de recepcion (no a transitorios)\n- Puede transmitirse en contingencia\n\n**Excepcion de plazo:** Para actividades economicas 01282, 21001, 46484 o 47721, el plazo se extiende a 2 anos.",
    category: "nuevos_eventos"
  },
  {
    id: "evento_operaciones_especiales",
    keywords: ["operaciones especiales","fe-eop","factura simplificada","comprobante control interno","eoe","simplificadas"],
    question: "Como funciona el Evento de Operaciones Especiales?",
    answer: "El **Evento de Operaciones Especiales (EOE)** permite informar operaciones documentadas con:\n\na) Facturas Simplificadas (art. 107 inc. cuarto CT)\nb) Comprobantes de Control Interno (art. 113 CT)\n\n**Condiciones:**\n1. Transmision con Modelo Previo y tipo normal\n2. Documentos de venta a cuenta de terceros los informa el mandante\n3. Cada documento solo puede informarse una vez\n4. Documentos anulados se informan separados, llenando el campo 'Codigo de generacion del EOE de Referencia'\n5. Maximo 500 items por evento\n6. Facturas Simplificadas: solo por rangos (Doc. Del y Doc. Al)\n7. Comprobantes de Control Interno: por rangos o uno a uno (no mezclar)\n8. Precios sin IVA\n9. Si se detalla uno a uno, cantidad = 1\n10. Si se detalla por rangos, campos Documento origen y Fecha del documento origen = null",
    category: "nuevos_eventos"
  },
  {
    id: "invalidacion_cambios",
    keywords: ["invalidacion","anulacion","invalidar","anular","anulacion-schema","invalidacion-schema","plazos invalidacion","plazo"],
    question: "Que cambio en el Evento de Invalidacion?",
    answer: "El evento de invalidacion reemplaza al antiguo 'anulacion-schema'. Cambios principales:\n\n**Estructura:** El schema paso de `anulacion-schema-v2` a `invalidacion-schema-v3` con campos actualizados.\n\n**Plazos actualizados:**\n- **CCFE, NCE, NDE, CRE, CLE, DCLE, NRE, CDE, EOE, ER:** Plazo de 10 dias habiles del mes siguiente al periodo tributario en que obtuvo sello de recepcion.\n- **FE, FEXE, FSEE:** Plazo de 3 meses desde el sello de recepcion.\n\n**Nuevas reglas:**\n- Si tipo de invalidacion es 1 o 3, primero debe generar y transmitir el documento de reemplazo (excepto NCE, CLE, ER y EOE).\n- Si tipo es 2 (rescindir), el campo 'codigo de generacion del documento que reemplaza' debe ser null.\n- Se puede invalidar EOE y ER (nuevos eventos).\n- No se puede invalidar FSEE o FE/FEXE si tiene Evento de Retorno activo (primero invalidar el ER).",
    category: "invalidacion"
  },
  {
    id: "contingencia",
    keywords: ["contingencia","contingente","fuerza mayor","diferido","offline","sin conexion","fuera de linea","modelo diferido"],
    question: "Como funciona el Evento de Contingencia?",
    answer: "La contingencia aplica cuando por fuerza mayor no se puede transmitir DTE a la Administracion Tributaria.\n\n**Documentos que pueden emitirse en contingencia:** FE, CCFE, NRE, NCE, NDE, CRE, FEXE, FSEE y Evento de Retorno.\n\n**Campos especiales al generar en contingencia:**\n- Modelo de Facturacion: 2 (Diferido)\n- Tipo de Transmision: 2 (Por Contingencia)\n- Tipo de Contingencia: segun catalogo CAT005\n\n**Proceso (3 momentos):**\n1. **Momento 1:** Ocurre la fuerza mayor, aplicar politica de reintentos, operar con sistema de respaldo\n2. **Momento 2:** Superada la causa, transmitir Evento de Contingencia en maximo 24 horas. Informar hasta 1000 codigos de generacion de DTE transitorios.\n3. **Momento 3:** Una vez recibido el sello del evento, transmitir los DTE en lote dentro de 72 horas.\n\n**Importante:** No cambiar los campos de contingencia al transmitir los DTE para obtener sello.",
    category: "contingencia"
  },
  {
    id: "fusiones",
    keywords: ["fusiones","fusion","absorbente","absorbido","fusionado","campo fusiones","fusiones y otros"],
    question: "Que es el campo Fusiones y otros?",
    answer: "El campo **'Fusiones y otros'** es nuevo en la v2.0 y es de uso exclusivo para contribuyentes absorbentes de otras sociedades que legalmente continuan con las obligaciones del contribuyente absorbido.\n\n**Requisito previo:** Reportar a la Administracion Tributaria antes de usar este campo.\n\n**Uso:** El absorbente ingresa el NIT del fusionado en este campo, segun 3 casos:\n\n1. **Absorbido es Emisor:** El absorbente pone su NIT como Emisor, y el NIT del absorbido en 'Fusiones y otros'\n2. **Absorbido es Receptor:** El absorbente pone su NIT como Receptor, y el NIT del absorbido en 'Fusiones y otros'\n3. **Absorbido es Tercero:** El absorbente pone su NIT como Tercero, y el NIT del absorbido en 'Fusiones y otros'\n\nEn todos los casos se mantienen los demas campos del DTE original.",
    category: "nuevos_campos"
  },
  {
    id: "compra_terceros",
    keywords: ["compra terceros","compra por cuenta","compra cuenta terceros","seccion compra","terceros compra"],
    question: "Que es la nueva seccion de Compra por cuenta de terceros?",
    answer: "La seccion **'Compra por cuenta de terceros'** es nueva en la v2.0 y aplica exclusivamente a la **Factura de Exportacion Electronica (FEXE)**.\n\nPermite describir la informacion del tercero por cuenta de quien se esta realizando la compra en una operacion de exportacion.\n\nEsta seccion complementa la ya existente 'Venta por cuenta de terceros' que aplica en FE, CCFE, NCE, NDE y FEXE.",
    category: "nuevos_campos"
  },
  {
    id: "venta_terceros",
    keywords: ["venta terceros","venta cuenta terceros","mandante","comisionista","tercero","nit tercero","seccion terceros"],
    question: "Como funciona la Venta por cuenta de terceros?",
    answer: "La seccion 'Venta a cuenta de terceros' permite documentar ventas que el emisor realiza por cuenta de sus mandantes.\n\n**Aplica a:** FE, CCFE, NRE, NCE, NDE, FEXE y Evento de Retorno.\n\n**Campos:** NIT por cuenta de terceros, Nombre/razon social del Tercero, Domicilio Fiscal.\n\n**Reglas:**\n1. Solo un mandante por DTE (un NIT, un nombre)\n2. No mezclar ventas propias con ventas a cuenta de terceros en un mismo DTE\n3. Si hay varios mandantes, emitir DTE separados\n4. Cuando no aplique, enviar la seccion con null\n\n**Relacion con CLE:** El Comprobante de Liquidacion solo acepta DTE que tengan esta seccion llena. El tercero del DTE sera el receptor en el CLE.",
    category: "terceros"
  },
  {
    id: "documentos_relacionados",
    keywords: ["documentos relacionados","relacionados","seccion relacionados","relacionar","maximo documentos","items relacionados"],
    question: "Como funciona la seccion de Documentos Relacionados?",
    answer: "Permite referenciar documentos emitidos previamente que originen un documento posterior.\n\n**Limites:** Maximo 50 documentos, sumando hasta 2000 items entre todos.\n\n**Aplica a:** FE, CCFE, NRE, NCE, NDE, FEXE y Evento de Retorno.\n\n**Obligatoria para:** NCE, NDE y Evento de Retorno.\n**Opcional para:** FE, CCFE, NRE, FEXE (cuando la operacion no lo requiera, enviar null).\n\n**Campos:**\n1. Tipo de Documento Tributario Relacionado (codigo segun catalogo)\n2. Tipo de Generacion (1=fisico, 2=electronico)\n3. Numero de documento (codigo de generacion si es electronico, correlativo si es fisico)\n4. Fecha de Generacion\n\n**Regla importante:** Los 50 documentos relacionados deben ser del mismo tipo (no mezclar CCFE con CRE en una misma NCE).",
    category: "documentos_relacionados"
  },
  {
    id: "tributos_catalogo",
    keywords: ["tributos","catalogo tributos","iva","fovial","cotrans","impuesto","codigo tributo","cat-015","tributo","turismo"],
    question: "Como se aplica el Catalogo de Tributos?",
    answer: "El catalogo de tributos (CAT-015) se divide en 3 secciones:\n\n**Seccion 1 - Por item, reflejados en resumen:**\n- 20: IVA 13% (CCFE, NRE, NCE, NDE, CLE)\n- C3: IVA Exportaciones 0% (NRE, FEXE, CLE)\n- 59: Turismo alojamiento 5%\n- 71: Turismo salida aerea $7.00\n- D1: FOVIAL $0.20/galon\n- C8: COTRANS $0.10/galon\n\nAplican tambien a EOE y Evento de Retorno (nuevo en v2.0).\n\n**Seccion 2 - Por item, reflejados en cuerpo:**\n- A8: Impuesto Especial Combustible\n- 57: Impuesto industria de Cemento\n- 90: Impuesto primera matricula\n- A6: Impuesto ad-valorem armas\n\nSe detallan como item independiente con Tipo de item = 4.\n\n**Seccion 3 - Informativos:** Impuestos especificos ad-valorem (bebidas, tabaco, etc). Solo informativos, no afectan valores del documento.",
    category: "tributos"
  },
  {
    id: "numero_control",
    keywords: ["numero control","numero de control","dte-01","dte-03","estructura control","31 caracteres","correlativo"],
    question: "Como se estructura el Numero de Control?",
    answer: "El Numero de Control tiene 31 caracteres (incluyendo guiones) y 4 secciones:\n\n1. **Seccion 1:** Letras 'DTE' (mayusculas)\n2. **Seccion 2:** Codigo de tipo de documento (segun CAT-002). Ej: 01=Factura, 03=CCF\n3. **Seccion 3:** 8 digitos alfanumericos:\n   - Posiciones 1-4: Codigo de establecimiento (M/B/S/P + 3 numeros). Ej: M001, S044\n   - Posiciones 5-8: Codigo punto de venta (P + 3 numeros). Ej: P025\n4. **Seccion 4:** 15 digitos numericos secuenciales\n\n**Ejemplos:**\n- `DTE-01-M001P025-000000000000001` (Factura)\n- `DTE-03-M001P025-000000000000001` (CCF)\n\n**Regla:** No debe repetirse en un ano calendario. Al agotarse, reinicia en 1.",
    category: "estructura"
  },
  {
    id: "cargos_abonos",
    keywords: ["cargos","abonos","base imponible","no afectan","cargo abono","pagos no afectos"],
    question: "Como funcionan los Cargos/Abonos que no afectan la base imponible?",
    answer: "Estos valores no estan sujetos a impuestos y se suman o restan hasta el campo 'Total a Pagar'.\n\n**Aplica a:** FE, CCFE, FEXE, NCE, NDE y Evento de Retorno.\n\n**Reglas:**\n- Para ingresar valores > $0.0, debe existir al menos un item con valor > $0.0 como venta gravada, exenta o no sujeta\n- Se ingresan como un item mas en el cuerpo del documento\n- Valores positivos = cargo al cliente (suma al total)\n- Valores negativos = devolucion/saldo a favor (resta al total)\n\n**Llenado del item:**\n- Cantidad: 1\n- Unidad de Medida: 99\n- Precio Unitario: $0.00\n- Todas las ventas: $0.00\n- Codigo del Tributo: null\n- Campo Cargos/Abonos: valor positivo o negativo\n\nLa sumatoria se refleja en 'Total Cargos/Abonos que no afectan la base imponible' en resumen.",
    category: "campos_especiales"
  },
  {
    id: "descuentos",
    keywords: ["descuento","descuentos","descuento global","descuento item","rebaja","bonificacion","descuento por item","monto global"],
    question: "Como se aplican los descuentos en los DTE?",
    answer: "Existen 4 formas de manejar descuentos:\n\n**1. Descuento por item:** En la seccion cuerpo, se resta al resultado de precio x cantidad. Cuando no aplique, enviar $0.00.\n\n**2. Descuento Global:** En la seccion resumen de FE, CCFE, NRE, FEXE y FSEE. Campos: 'Descuento global a ventas exentas', 'no sujetas' y 'gravadas'. Aplica a disminuciones generales (pronto pago, fidelidad, promociones, subsidios, etc.).\n\n**3. Porcentaje de Descuento:** Campo informativo en resumen. Solo el numero sin simbolo %. Ej: 10.\n\n**4. Total de Descuento:** Campo informativo = suma de descuentos por item + descuentos globales.\n\n**Nota importante para NCE, NDE y ER:** Cuando se relacionen documentos con descuentos globales, estos deben detallarse en el campo 'descuento por item'.",
    category: "campos_especiales"
  },
  {
    id: "otros_docs_asociados",
    keywords: ["otros documentos","asociados","medico","transportista","poliza","seguro","contrato","resolucion","documentos asociados"],
    question: "Como funciona la seccion Otros Documentos Asociados?",
    answer: "Permite anexar informacion no tributaria relevante para la operacion.\n\n**Aplica a:** FE, CCFE, FEXE y CDE.\n\n**Codigos de documento asociado:**\n1. **Emisor:** Contratos, resoluciones del emisor\n2. **Receptor:** Contratos, polizas del receptor\n3. **Medico:** NIT, nombre y codigo de servicio (catalogo 010)\n4. **Transportista:** Modo de transporte, identificacion, conductor (solo FEXE)\n\n**Limites:**\n- FE y CCFE: maximo 10 lineas\n- FEXE: maximo 20 lineas\n- CDE: solo codigos 1 y 2, requiere al menos un registro del Donatario (Emisor) con resolucion de calificacion.",
    category: "campos_especiales"
  },
  {
    id: "modelo_facturacion",
    keywords: ["modelo facturacion","modelo previo","modelo diferido","tipo transmision","transmision normal","como funciona facturacion"],
    question: "Cuales son los modelos de facturacion?",
    answer: "Existen 2 modelos de facturacion:\n\n**1. Modelo Previo (normal):**\n- El emisor genera el documento JSON con firma electronica\n- Lo envia a la Administracion Tributaria ANTES de entregarlo al receptor\n- Si cumple validaciones, recibe el 'Sello de Recepcion' (calidad de DTE)\n- Si no cumple, se rechaza con detalle de errores\n\n**2. Modelo Diferido:**\n- Se habilita por autorizacion previa o fuerza mayor\n- El emisor genera el documento con estado transitorio\n- Entrega al receptor SIN sello de recepcion\n- Posteriormente transmite para obtener el sello\n- Incluye la transmision por contingencia\n\n**Tipos de transmision:**\n- 1: Normal\n- 2: Por Contingencia",
    category: "general"
  },
  {
    id: "firma_electronica",
    keywords: ["firma","firma electronica","firmar","firmado","proceso firma"],
    question: "A que documentos aplica la firma electronica?",
    answer: "La firma electronica aplica a todos los documentos fiscales del Codigo Tributario:\n\n**DTE:**\n- Comprobante de Credito Fiscal Electronico\n- Nota de Credito Electronica\n- Nota de Debito Electronica\n- Nota de Remision Electronica\n- Comprobante de Retencion Electronico\n- Factura Electronica\n- Comprobante de Liquidacion Electronico\n- Documento Contable de Liquidacion Electronico\n- Factura de Exportacion Electronica\n- Factura de Sujeto Excluido Electronica\n- Comprobante de Donacion Electronico\n\n**Eventos (v2.0):**\n- Evento de Invalidacion\n- Evento de Contingencia\n- Evento de Operaciones Especiales (nuevo)\n- Evento de Retorno (nuevo)",
    category: "general"
  },
  {
    id: "schemas_estructura",
    keywords: ["estructura","secciones","seccion","partes dte","que secciones","como se divide"],
    question: "Cuales son las secciones de un DTE?",
    answer: "Cada DTE se divide en las siguientes secciones:\n\n1. **Identificacion:** Generales del documento (obligatoria)\n2. **Documentos Relacionados:** Referencias a documentos previos (FE, CCFE, NRE, NCE, NDE, FEXE, ER)\n3. **Emisor:** Datos del emisor (obligatoria)\n4. **Receptor:** Datos del receptor\n5. **Otros Documentos Asociados:** Info no tributaria (contratos, medicos, transporte)\n6. **Venta por cuenta de terceros:** Info del mandante (FE, CCFE, NCE, NDE, FEXE, ER)\n7. **Compra por cuenta de terceros:** Info del tercero comprador (solo FEXE - nuevo v2.0)\n8. **Cuerpo del documento:** Detalle de items (obligatoria)\n9. **Resumen:** Totales consolidados (obligatoria, excepto DCLE)\n10. **Extension:** Datos del responsable DCLE\n11. **Apendice:** Informacion adicional (opcional)\n12. **Sello de Recepcion:** Codigo del MH (no es campo del DTE)",
    category: "estructura"
  },
  {
    id: "tipos_dte",
    keywords: ["tipos dte","tipos documento","cuantos documentos","lista dte","que documentos existen","tipos de documento"],
    question: "Cuales son los tipos de DTE?",
    answer: "Existen 11 tipos de Documentos Tributarios Electronicos:\n\n| # | Codigo | DTE | Abreviatura |\n|---|--------|-----|-------------|\n| 1 | 01 | Factura Electronica | FE |\n| 2 | 03 | Comprobante de Credito Fiscal Electronico | CCFE |\n| 3 | 04 | Nota de Remision Electronica | NRE |\n| 4 | 05 | Nota de Credito Electronica | NCE |\n| 5 | 06 | Nota de Debito Electronica | NDE |\n| 6 | 07 | Comprobante de Retencion Electronico | CRE |\n| 7 | 08 | Comprobante de Liquidacion Electronico | CLE |\n| 8 | 09 | Documento Contable de Liquidacion Electronico | DCLE |\n| 9 | 11 | Factura de Exportacion Electronica | FEXE |\n| 10 | 14 | Factura de Sujeto Excluido Electronica | FSEE |\n| 11 | 15 | Comprobante de Donacion Electronico | CDE |\n\nAdemas existen 4 eventos: Invalidacion, Contingencia, Retorno (nuevo) y Operaciones Especiales (nuevo).",
    category: "general"
  },
  {
    id: "cambios_nce_nde",
    keywords: ["nota credito","nota debito","nce","nde","cambios nota","ajuste","ajustar"],
    question: "Que cambios hay en NCE y NDE?",
    answer: "Las Notas de Credito (NCE v4) y Notas de Debito (NDE v4) tienen cambios significativos en la v2.0:\n\n**Cambios en estructura (schema):**\n- Pasaron de v3 a v4\n- Se detectaron 96 cambios en NCE y 108 en NDE\n- Incluyen campos de IVA Retenido, IVA 13% e IVA Percibido en el cuerpo\n- Actualizacion de restricciones (enum, pattern, longitudes)\n- Nuevos campos agregados y algunos eliminados\n\n**Uso para ajustes:**\n- Pueden relacionar hasta 50 documentos del mismo tipo\n- En el cuerpo se detallan los items a ajustar por cada documento relacionado\n- Maximo 2000 items entre todos los documentos\n- Los descuentos globales del documento original se trasladan como 'descuento por item'\n- Para ajustar con descuentos globales del CCFE original, estos se calculan proporcionalmente por item",
    category: "cambios_schemas"
  },
  {
    id: "cambios_ccf",
    keywords: ["credito fiscal","ccf","ccfe","cambios ccf","fe-ccf"],
    question: "Que cambios tiene el Comprobante de Credito Fiscal?",
    answer: "El CCFE paso de v3 a v4 con **100 cambios detectados** entre ambas versiones.\n\nPrincipales cambios:\n- Actualizacion de restricciones en campos (enum, pattern, longitudes)\n- Nuevos campos agregados (ej: distrito en direccion emisor)\n- Campos eliminados de la version anterior\n- Modificaciones en tipos de datos\n- Actualizacion de descripciones\n\nEl CCFE mantiene todas sus secciones: Identificacion, Documentos Relacionados, Emisor, Receptor, Otros Docs Asociados, Venta cuenta de terceros, Cuerpo del documento, Resumen y Apendice.\n\nArchivo nuevo: `fe-ccf-v4.json`\nArchivo anterior: `fe-ccf-v3.json`",
    category: "cambios_schemas"
  },
  {
    id: "cambios_factura",
    keywords: ["factura","factura electronica","fe-f","fe-fc","cambios factura"],
    question: "Que cambios tiene la Factura Electronica?",
    answer: "La Factura Electronica paso de `fe-fc-v1.json` a `fe-f-v2.json` (cambio de nomenclatura) con **82 cambios detectados**.\n\nPrincipales cambios:\n- Renombramiento del schema (fe-fc -> fe-f)\n- Actualizacion de restricciones y validaciones\n- Nuevos campos y campos eliminados\n- Campo 'Cargos/Abonos que no afectan la base imponible'\n- Seccion 'Documentos Relacionados' actualizada\n- Seccion 'Venta por cuenta de terceros' actualizada\n\nLa FE puede invalidarse dentro de 3 meses desde el sello de recepcion. Si tiene Evento de Retorno activo, primero debe invalidarse el ER.",
    category: "cambios_schemas"
  },
  {
    id: "cambios_fex",
    keywords: ["exportacion","factura exportacion","fexe","fe-fex","cambios exportacion"],
    question: "Que cambios tiene la Factura de Exportacion?",
    answer: "La FEXE paso de v1 a v3 con **112 cambios detectados** (la mayor cantidad de cambios de todos los schemas).\n\nCambios principales:\n- Nueva seccion 'Compra por cuenta de terceros' (exclusiva de FEXE)\n- Actualizacion de la seccion Otros Documentos Asociados (incluye transportista)\n- Nuevos campos y restricciones actualizadas\n- El Evento de Retorno aplica a FEXE con condiciones especiales:\n  - Los campos Pais, Regimen, Recinto y Tipo de Exportacion del ER deben coincidir con la FEXE\n  - Para actividades 01282, 21001, 46484 o 47721, plazo de retorno es 2 anos\n- No puede invalidarse si tiene ER activo\n\nArchivo nuevo: `fe-fex-v3.json`\nArchivo anterior: `fe-fex-v1.json`",
    category: "cambios_schemas"
  },
  {
    id: "invalidar_con_relacionados",
    keywords: ["invalidar relacionado","invalidacion relacionado","invalidar ccf con nota","invalidar con retorno","como invalidar"],
    question: "Como se invalida un DTE que tiene documentos relacionados?",
    answer: "Reglas para invalidar DTE con documentos relacionados:\n\n- **FE/FEXE/FSEE con Evento de Retorno activo:** Primero debe invalidar el ER, luego puede invalidar el DTE.\n- **CCFE con NCE o NDE activa:** Primero debe invalidar la Nota de Credito o Debito.\n- **CRE con NCE o NDE activa:** Primero debe invalidar la NCE o NDE.\n- **FE/CCFE/NRE/FEXE con documento relacionado (NR, CLE, DCL):** NO es necesario invalidar el documento relacionado para invalidar el DTE.\n- **FE/CCFE/NRE relacionado a CRE:** Puede invalidarse sin invalidar el CRE.\n- **CLE:** No es necesario invalidar los documentos informados. Despues de invalidar, los documentos quedan disponibles para un nuevo CLE.\n- **EOE y ER:** Se invalidan referenciando solo el codigo de generacion, con campo de reemplazo = null.",
    category: "invalidacion"
  },
  {
    id: "pagos",
    keywords: ["pago","pagos","forma de pago","condicion pago","plazo pago","cuota","plazos pago"],
    question: "Como se ingresa la informacion de pagos?",
    answer: "La seccion de pagos se encuentra en el resumen de FE, CCFE, FEXE y FSEE.\n\n**Campos principales:**\n- Condicion de la operacion: Contado (1), Credito (2), Otro (3)\n- Forma de pago: Efectivo, cheque, transferencia, tarjeta, etc.\n- Monto por forma de pago\n- Plazo (solo para credito)\n- Periodo (solo para credito)\n\n**Reglas:**\n- Si es contado, la suma de montos de todas las formas de pago debe ser igual al Total a Pagar\n- Si es credito, se detallan las condiciones del credito (plazo y periodo)\n- Puede combinarse varias formas de pago en una misma operacion\n- Para FSEE aplican reglas especificas segun tipo de pago",
    category: "campos_especiales"
  },
  {
    id: "redondeos",
    keywords: ["redondeo","holgura","tolerancia","decimal","centavos","precision","redondear"],
    question: "Como funcionan los redondeos y holguras?",
    answer: "La Administracion Tributaria define reglas de redondeo y holgura para los calculos en DTE:\n\n**Redondeo:** Los valores monetarios se redondean a 2 decimales siguiendo las reglas matematicas estandar.\n\n**Holgura:** Es la tolerancia permitida en las diferencias de calculo. La Administracion Tributaria define un margen de holgura para que pequenas diferencias de centavos causadas por el redondeo no generen rechazo del DTE.\n\nEsto es especialmente importante en:\n- Calculo de IVA por item vs IVA total\n- Descuentos aplicados por item\n- Sumatoria de tributos\n- Totales del resumen vs suma del cuerpo",
    category: "general"
  },
  {
    id: "representacion_grafica",
    keywords: ["representacion grafica","version legible","imprimir","pdf","visualizar","mostrar","formato impresion"],
    question: "Que es la Representacion Grafica?",
    answer: "Es la version legible e interpretada del DTE, en formato idoneo para visualizacion digital.\n\n**Medios de entrega:** Correo electronico, mensajeria instantanea, web service de descarga, bluetooth, y excepcionalmente impresion.\n\n**Clasificacion de campos (Normativa Anexo II):**\n- **A:** Deben presentarse siempre\n- **B:** Se presentan segun la operacion especifica\n- **C:** No requeridos, pero el contribuyente puede incluirlos\n- **D:** Si se llenan deben mostrarse; si no se usan, mostrar el nombre del campo con un guion\n\n**El diseno es libre:** El contribuyente puede incorporar logos, marcas y slogans. Debe tener correspondencia con la informacion transmitida al MH.",
    category: "general"
  },
  {
    id: "sello_recepcion",
    keywords: ["sello","sello recepcion","sello de recepcion","codigo generacion","validado","estado","consulta"],
    question: "Que es el Sello de Recepcion?",
    answer: "El **Sello de Recepcion** es un codigo encriptado que el Ministerio de Hacienda envia por cada DTE/evento que cumple con las validaciones de estructura de datos.\n\n**Proceso:**\n1. El emisor transmite el documento JSON firmado\n2. La Administracion Tributaria verifica la estructura de datos\n3. Si cumple: otorga Sello de Recepcion (el documento adquiere calidad de DTE)\n4. Si no cumple: rechaza con detalle de errores para correccion\n\n**Consulta publica:** Cualquier usuario puede consultar el estado de un DTE usando el Codigo de Generacion en el portal oficial del MH.\n\n**Importante:** El Sello de Recepcion debe incluirse en la Representacion Grafica del DTE.",
    category: "general"
  },
  {
    id: "comprobante_liquidacion",
    keywords: ["liquidacion","cle","comprobante liquidacion","mandante","comisionista","informar dte"],
    question: "Como funciona el Comprobante de Liquidacion (CLE)?",
    answer: "El CLE documenta las ventas realizadas por un comisionista a cuenta de un mandante.\n\n**Reglas principales:**\n1. Solo acepta DTE que tengan informacion en 'Venta a cuenta de terceros'\n2. El tercero del DTE sera el receptor en el CLE\n3. Se ingresan valores del resumen del DTE (no items individuales)\n4. Los DTE deben corresponder al periodo tributario del CLE\n5. Cada DTE solo puede referenciarse una vez y en un solo CLE\n6. Excepcion: DTE invalidados pueden aparecer dos veces (activo + invalidado)\n7. FE/FEXE invalidadas: se registran en el periodo de la invalidacion con la fecha de generacion original\n8. CCFE, NCE, NDE, ER invalidados: se registran segun fecha de generacion\n9. Debe detallar los tributos de seccion 1 aplicados en el DTE informado",
    category: "estructura"
  },
  {
    id: "schemas_cambios_resumen",
    keywords: ["resumen cambios","cuantos cambios","estadisticas","total cambios","que cambio mas"],
    question: "Cual es el resumen de cambios entre schemas old y new?",
    answer: "**Resumen de la comparacion de schemas:**\n\n- **16 schemas** analizados en total\n- **3 schemas completamente nuevos** (sin equivalente old):\n  - fe-eret (Evento de Retorno)\n  - fe-eop (Evento de Operaciones Especiales)\n  - fe-eges (Evento de Gestion)\n\n- **13 schemas con cambios** respecto a la version anterior\n- **1,047 cambios totales** detectados\n- **375 campos nuevos**\n\n**Por tipo de cambio:**\n- 501 restricciones modificadas\n- 165 campos eliminados\n- 155 campos agregados\n- 146 descripciones modificadas\n- 75 tipos modificados\n- 5 cambios de requerido\n\n**Schemas con mas cambios:**\n1. fe-fex (Exportacion): 112\n2. fe-nd (Nota Debito): 108\n3. fe-ccf (Credito Fiscal): 100\n4. fe-nc (Nota Credito): 96",
    category: "cambios_schemas"
  },
  {
    id: "donacion",
    keywords: ["donacion","comprobante donacion","cde","donatario","donante","fe-cd"],
    question: "Que cambios tiene el Comprobante de Donacion?",
    answer: "El Comprobante de Donacion (CDE) paso de v1 a v2 con **86 cambios detectados**.\n\nEl CDE documenta donaciones donde:\n- **Donatario** = Emisor del documento\n- **Donante** = Receptor del documento\n\n**Seccion Otros Documentos Asociados en CDE:**\n- Solo permite codigos 1 (Emisor) y 2 (Receptor)\n- Requiere al menos un registro del Donatario (Emisor) con la resolucion de calificacion como sujeto excluido\n\nArchivo nuevo: `fe-cd-v2.json`\nArchivo anterior: `fe-cd-v1.json`",
    category: "cambios_schemas"
  }
];
