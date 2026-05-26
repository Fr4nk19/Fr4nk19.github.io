# Campos nuevos: new vs old

Total de campos nuevos detectados: **375**

## Resumen por schema

| Schema | Campos nuevos |
|---|---:|
| `fe-eret` | 96 |
| `fe-eges` | 77 |
| `fe-eop` | 47 |
| `fe-cd` | 34 |
| `fe-fex` | 24 |
| `fe-nd` | 24 |
| `fe-nc` | 17 |
| `fe-fse` | 14 |
| `fe-cl` | 10 |
| `fe-cr` | 10 |
| `fe-ccf` | 6 |
| `fe-f` | 5 |
| `fe-nr` | 4 |
| `fe-dcl` | 3 |
| `invalidacion-schema` | 3 |
| `contingencia-schema` | 1 |

## Detalle

### contingencia-schema

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `emisor.codPuntoVentaMH` | `string|null` | si | Código del Punto de Venta (Emisor) Asignado por el MH |

### fe-ccf

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Receptor) |
| `ventaTercero.codDomiciliado` | `integer|null` | si | Domicilio Fiscal |
| `resumen.ivaPerci` | `number` | si | IVA Percibido |
| `resumen.ivaRete` | `number` | si | IVA Retenido |
| `resumen.observaciones` | `string|null` | si | Observaciones |

### fe-cd

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `emisor` | `object` | si | Emisor/Donatario |
| `emisor.tipoDocumento` | `string` | si | Tipo de documento de identificación (Emisor)  |
| `emisor.numDocumento` | `string` | si | Número de documento de Identificación (Emisor) |
| `emisor.nrc` | `string|null` | si | NRC (Emisor) |
| `emisor.nombre` | `string` | si | Nombre (Emisor) |
| `emisor.codActividad` | `string` | si | Código de Actividad Económica (Emisor) |
| `emisor.descActividad` | `string` | si | Actividad Económica (Emisor) |
| `emisor.nombreComercial` | `string|null` | si | Nombre Comercial (Emisor) |
| `emisor.direccion` | `object` | si | Dirección (Emisor) |
| `emisor.direccion.departamento` | `string` | si | Dirección Departamento (Emisor) |
| `emisor.direccion.municipio` | `string` | si | Dirección Municipio (Emisor) |
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `emisor.direccion.complemento` | `string` | si | Dirección complemento (Emisor) |
| `emisor.telefono` | `string` | si | Teléfono (Emisor) |
| `emisor.correo` | `string` | si | Correo electrónico (Emisor) |
| `emisor.codEstable` | `string|null` | si | Código del establecimiento asignado por el contribuyente |
| `emisor.codPuntoVenta` | `string|null` | si | Código del Punto de Venta (Emisor) asignado por el contribuyente |
| `receptor` | `object` | si | Receptor/Donante |
| `receptor.tipoDocumento` | `string` | si | Tipo de documento de identificación (Receptor) |
| `receptor.numDocumento` | `string` | si | Número de documento de Identificación (Receptor) |
| `receptor.nrc` | `string|null` | si | NRC (Receptor) |
| `receptor.nombre` | `string` | si | Nombre (Receptor) |
| `receptor.codActividad` | `string|null` | si | Código de Actividad Económica (Receptor) |
| `receptor.descActividad` | `string|null` | si | Actividad Económica (Receptor) |
| `receptor.direccion` | `null|object` | si | Dirección (Receptor) |
| `receptor.direccion.departamento` | `string` | si | Dirección Departamento (Emisor) |
| `receptor.direccion.municipio` | `string` | si | Dirección Municipio (Receptor) |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Receptor) |
| `receptor.direccion.complemento` | `string` | si | Dirección complemento (Receptor) |
| `receptor.telefono` | `null|string` | si | Teléfono (Receptor) |
| `receptor.correo` | `null|string` | si | Correo electrónico (Receptor) |
| `receptor.codDomiciliado` | `integer` | si | Domicilio Fiscal |
| `receptor.codPais` | `string` | si | Codigo de país de nacionalidad del (Receptor) |
| `cuerpoDocumento[].tipoDepreciacion` | `number` | si | Depreciación |

### fe-cl

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion.fusion` | `string|null` | si | Fusiónes y otros |
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `receptor.tipoDocumento` | `string` | si | Tipo de documento de identificación (Receptor) |
| `receptor.numDocumento` | `string` | si | Número de documento de Identificación (Receptor) |
| `receptor.codDomiciliado` | `integer` | si | Domicilio Fiscal |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Receptor) |
| `cuerpoDocumento[].fechaEmision` | `string` | si | Fecha de generación del Documento relacionado |
| `cuerpoDocumento[].observaciones` | `string|null` | si | Observaciones por ítem |
| `resumen.exportacion` | `number` | si | Total de Operaciones Exportación |
| `resumen.observaciones` | `string|null` | si | Observaciones |

### fe-cr

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion.fusion` | `string|null` | no | Fusiónes y otros |
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `emisor.codEstable` | `string|null` | si | Código del establecimiento asignado por el contribuyente |
| `emisor.codPuntoVenta` | `string|null` | si | Código del Punto de Venta (Emisor) asignado por el contribuyente |
| `receptor.direccion.distrito` | `string` | si | Dirección: Distrito (Receptor) |
| `cuerpoDocumento[].tipoGeneracion` | `null|integer` | si | Tipo de generación del documento relacionado |
| `resumen.totalIva` | `number` | si | IVA 13% |
| `resumen.totalIvaRetenido` | `number` | si | Total IVA Retenido |
| `resumen.totalLetras` | `null|string` | si | Valor en letras |
| `resumen.observaciones` | `string|null` | si | Observaciones |

### fe-dcl

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `emisor.puntoVenta` | `string|null` | si | Codigo del punto de venta:(Emisor) asignado por el contribuyente |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |

### fe-eges

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion` | `object` | si | Identificación |
| `identificacion.version` | `integer` | si | Versión |
| `identificacion.ambiente` | `string` | si | Ambiente de destino |
| `identificacion.codigoGeneracion` | `string` | si | Código de Generación |
| `identificacion.tipoEvento` | `string` | si | Tipo de Evento |
| `identificacion.fecEmi` | `string` | si | Fecha del evento |
| `identificacion.horEmi` | `string` | si | Hora del evento |
| `identificacion.fusion` | `string|null` | si | Fusiones y otros |
| `identificacion.tipoMoneda` | `string` | si | Tipo de Moneda |
| `emisor` | `object` | si | Información del Emisor |
| `emisor.nit` | `string` | si | NIT (Emisor) |
| `emisor.nombre` | `string` | si | Nombre (Emisor) |
| `emisor.codEstableMH` | `string` | si | Código del establecimiento asignado por el MH |
| `emisor.codEstable` | `string|null` | no | Código del establecimiento asignado por el contribuyente (Opcional) |
| `emisor.codPuntoVentaMH` | `string` | si | Código del Punto de Venta (Emisor) asignado por el MH |
| `emisor.codPuntoVenta` | `string|null` | no | Código del Punto de Venta (Emisor) asignado por el contribuyente (Opcional) |
| `documento` | `object|null` | si | Informacion del Documento a aplicar el evento |
| `documento.tipoDte` | `string` | si | Tipo de DTE |
| `documento.tipoGeneracion` | `integer` | si | Tipo de Generacion del Documento Tributario relacionado |
| `documento.numeroDocumento` | `string` | si | Numero de documento tributario relacionado |
| `documento.fecEmi` | `string` | si | Fecha del evento |
| `documento.numeroDocumentoC` | `string|null` | si | Numero del documento de complemento |
| `documento.tipoDocumento` | `string|null` | si | Tipo de documento de identificación (Receptor) |
| `documento.numDocumento` | `string|null` | si | Número de documento de Identificación (Receptor) |
| `documento.nombre` | `string|null` | si | Nombre (Receptor) |
| `documento.telefono` | `string|null` | no | Teléfono (Receptor) (Opcional) |
| `documento.correo` | `string|null` | si | Correo electrónico (Receptor) |
| `ventaTercero` | `object|null` | si | Ventas por Cuenta de Terceros |
| `ventaTercero.nit` | `string|null` | si | NIT por cuenta de Terceros |
| `ventaTercero.nombre` | `string|null` | si | Nombre, denominación o razón social del Tercero |
| `ventaTercero.codDomiciliado` | `integer|null` | si | Domicilio Fiscal |
| `cuerpoDocumento` | `array` | si | Cuerpo del Documento |
| `cuerpoDocumento[]` | `object` | si |  |
| `cuerpoDocumento[].numItem` | `integer` | si | N° de ítem |
| `cuerpoDocumento[].tipoItem` | `integer` | si | Tipo de ítem |
| `cuerpoDocumento[].cantidad` | `number` | si | Cantidad |
| `cuerpoDocumento[].codigo` | `string|null` | si | codigo |
| `cuerpoDocumento[].uniMedida` | `integer` | si | Unidad de Medida |
| `cuerpoDocumento[].descripcion` | `string|null` | si | Descripcion |
| `cuerpoDocumento[].codigoS` | `string|null` | si | Codigo del bien en sustitución |
| `cuerpoDocumento[].descripcionS` | `string|null` | si | Descripcion del bien en sustitución |
| `cuerpoDocumento[].precioUni` | `number` | si | Precio Unitario |
| `cuerpoDocumento[].montoDescu` | `number` | si | Descuento por ítem |
| `cuerpoDocumento[].ventaNoSuj` | `number` | si | Ventas no Sujetas |
| `cuerpoDocumento[].ventaExenta` | `number` | si | Ventas Exentas |
| `cuerpoDocumento[].ventaGravada` | `number` | si | Ventas Gravadas |
| `cuerpoDocumento[].noGravado` | `number` | si | Cargos/Abonos que no afectan la base imponible |
| `resumen` | `object` | si | Resumen |
| `resumen.totalNoSuj` | `number` | si | Total de Operaciones no Sujetas |
| `resumen.totalExenta` | `number` | si | Total de Operaciones exentas |
| `resumen.totalGravada` | `number` | si | Suma de Operaciones sin Impuestos |
| `resumen.subTotalVentas` | `number` | si | Suma de Operaciones sin Impuestos |
| `resumen.seguro` | `number` | si | Seguro |
| `resumen.flete` | `number` | si | Flete |
| `resumen.subTotal` | `number` | si | Subtotal |
| `resumen.totalNoGravado` | `number` | si | Total Cargos/Abonos que no afectan la base imponible |
| `resumen.montoTotalOperacion` | `number` | si | Monto Total de la Operación |
| `resumen.totalLetras` | `string|null` | si | Valor en Letras |
| `resumen.pagos` | `array|null` | si | Pagos |
| `resumen.pagos[]` | `object` | si |  |
| `resumen.pagos[].plazo` | `string` | si | Plazo |
| `resumen.pagos[].periodo` | `number` | si | Período de plazo |
| `resumen.fecha` | `string` | si | Fecha de vencimiento de la garantia |
| `motivo` | `object` | si | Datos del motivo de Anulacion |
| `motivo.tipoAnulacion` | `integer` | si | Tipo de Gestion |
| `motivo.motivoAnulacion` | `string` | si | Motivo de anulacion |
| `motivo.nombreResponsable` | `string` | si | Nombre de la persona responsable de anular el DTE |
| `motivo.tipDocResponsable` | `integer` | si | Tipo documento de identificación: 1 - NIT, 2 - DUI, 3 - Carnet de residente, 4 - PASAPORTE, 5 - OTRO |
| `motivo.numDocResponsable` | `string` | si | Número de documento de identificación  |
| `motivo.nombreSolicita` | `string` | si | Nombre de la persona que solicita anular el DTE |
| `motivo.tipDocSolicita` | `integer` | si | Tipo documento de identificación solicitante: 1 - NIT, 2 - DUI, 3 - Carnet de residente, 4 - PASAPORTE, 5 - OTRO |
| `motivo.numDocSolicita` | `string` | si | Número de documento de identificación solicitante. |
| `apendice` | `array|null` | si | Apéndice |
| `apendice[]` | `object` | si |  |
| `apendice[].campo` | `string` | si | Nombre del campo |
| `apendice[].etiqueta` | `string` | si | Descripción |
| `apendice[].valor` | `string` | si | Valor/Dato |

### fe-eop

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion` | `object` | si | Identificación |
| `identificacion.version` | `integer` | si | Versión |
| `identificacion.ambiente` | `string` | si | Ambiente de destino |
| `identificacion.tipoModelo` | `integer` | si | Modelo de Facturación |
| `identificacion.tipoOperacion` | `integer` | si | Tipo de Transmisión |
| `identificacion.tipoEvento` | `string` | si | Tipo de evento |
| `identificacion.codigoGeneracion` | `string` | si | Código de Generación |
| `identificacion.fecEmi` | `string` | si | Fecha del Evento |
| `identificacion.horEmi` | `string` | si | Hora del Evento |
| `identificacion.tipoMoneda` | `string` | si | Tipo de Moneda |
| `emisor` | `object` | si | Información del Emisor |
| `emisor.nit` | `string` | si | NIT (Emisor) |
| `emisor.nombre` | `string` | si | Nombre (Emisor) |
| `cuerpoDocumento` | `array` | si | Cuerpo del Documento |
| `cuerpoDocumento[]` | `object` | si |  |
| `cuerpoDocumento[].numItem` | `integer` | si | N° de ítem |
| `cuerpoDocumento[].codigoGeneracionRef` | `string|null` | si | Código de generación del EOE de Referencia |
| `cuerpoDocumento[].tipoDocumento` | `string` | si | Tipo de documento |
| `cuerpoDocumento[].numDocumento` | `string|null` | si | Documento origen |
| `cuerpoDocumento[].fechaEmision` | `string|null` | si | Fecha documento origen |
| `cuerpoDocumento[].cantidad` | `integer` | si | Cantidad |
| `cuerpoDocumento[].descripcion` | `string` | si | Descripcion |
| `cuerpoDocumento[].docDel` | `string|null` | si | Doc. Del |
| `cuerpoDocumento[].docAl` | `string|null` | si | Doc. Al |
| `cuerpoDocumento[].precioUni` | `number` | si | Precio Unitario |
| `cuerpoDocumento[].ventaNoSuj` | `number` | si | Ventas no Sujetas |
| `cuerpoDocumento[].ventaExenta` | `number` | si | Ventas Exentas |
| `cuerpoDocumento[].ventaGravada` | `number` | si | Ventas Gravadas |
| `cuerpoDocumento[].tributos` | `array|null` | si | Código del Tributo |
| `cuerpoDocumento[].tributos[]` | `string` | si |  |
| `resumen` | `object` | si | Resumen |
| `resumen.totalNoSuj` | `number` | si | Total de Operaciones no Sujetas |
| `resumen.totalExenta` | `number` | si | Total de Operaciones exentas |
| `resumen.totalGravada` | `number` | si | Suma de Operaciones sin Impuestos |
| `resumen.subTotal` | `number` | si | Sub-total |
| `resumen.tributos` | `array|null` | si | Resumen Código de Tributo |
| `resumen.tributos[]` | `object` | si |  |
| `resumen.tributos[].codigo` | `string` | si | Resumen Código de Tributo |
| `resumen.tributos[].descripcion` | `string` | si | Nombre del Tributo |
| `resumen.tributos[].valor` | `number` | si | Valor del Tributo |
| `resumen.total` | `number` | si | Total |
| `resumen.totalLetras` | `string|null` | si | Valor en Letras |
| `apendice` | `array|null` | si | Apéndice |
| `apendice[]` | `object` | si |  |
| `apendice[].campo` | `string` | si | Nombre del campo |
| `apendice[].etiqueta` | `string` | si | Descripción |
| `apendice[].valor` | `string` | si | Valor/Dato |

### fe-eret

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion` | `object` | si | Identificación |
| `identificacion.version` | `integer` | si | Versión |
| `identificacion.ambiente` | `string` | si | Ambiente de destino |
| `identificacion.tipoModelo` | `number` | si | Modelo de Facturación |
| `identificacion.tipoOperacion` | `integer` | si | Tipo de Transmisión |
| `identificacion.tipoEvento` | `string` | si | Tipo de Evento |
| `identificacion.tipoContingencia` | `integer|null` | si | Tipo de Contingencia |
| `identificacion.motivoContin` | `string|null` | si | Motivo de Contingencia |
| `identificacion.codigoGeneracion` | `string` | si | Código de Generación |
| `identificacion.fecEmi` | `string` | si | Fecha de Generación |
| `identificacion.horEmi` | `string` | si | Hora de Generación |
| `identificacion.fusion` | `string|null` | si | Fusiones y otros |
| `identificacion.tipoMoneda` | `string` | si | Tipo de Moneda |
| `documentoRelacionado` | `array` | si | Documentos Relacionados |
| `documentoRelacionado[]` | `object` | si |  |
| `documentoRelacionado[].tipoDocumento` | `string` | si | Tipo de DTE |
| `documentoRelacionado[].codigoGeneracion` | `string` | si | Código de Generación del DTE |
| `documentoRelacionado[].fechaEmision` | `string` | si | Fecha de Generación del DTE |
| `emisor` | `object` | si | Información del Emisor |
| `emisor.nit` | `string` | si | NIT (Emisor) |
| `emisor.nombre` | `string` | si | Nombre (Emisor) |
| `emisor.codEstableMH` | `string` | si | Código del establecimiento asignado por el MH |
| `emisor.codEstable` | `string|null` | si | Código del establecimiento asignado por el contribuyente |
| `emisor.codPuntoVentaMH` | `string` | si | Código del Punto de Venta (Emisor) asignado por el MH |
| `emisor.codPuntoVenta` | `string|null` | si | Código del Punto de Venta (Emisor) asignado por el contribuyente |
| `emisor.recintoFiscal` | `string|null` | si | Recinto Fiscal |
| `emisor.tipoRegimen` | `string|null` | si | Tipo de Regimen |
| `emisor.regimen` | `string|null` | si | Régimen de exportación |
| `emisor.tipoItemExpor` | `integer|null` | si | Tipo de exportacion |
| `documento` | `object|null` | si | Información del documento |
| `documento.tipoDocumento` | `string|null` | si | Tipo de documento de identificación (Receptor) |
| `documento.numDocumento` | `null|string` | si | Número de documento de Identificación (Receptor) |
| `documento.nombre` | `null|string` | si | Nombre (Receptor) |
| `documento.codPais` | `null|string` | si | Código de país (receptor) |
| `documento.nombrePais` | `null|string` | si | País destino de la exportación (receptor) |
| `documento.telefono` | `null|string` | si | Teléfono (Receptor) |
| `documento.correo` | `null|string` | si | Correo electrónico (Receptor) |
| `ventaTercero` | `object|null` | si | Ventas por Cuenta de Terceros |
| `ventaTercero.nit` | `string|null` | si | NIT por Cuenta de Terceros |
| `ventaTercero.nombre` | `string|null` | si | Nombre, denominación o razón social del Tercero |
| `ventaTercero.codDomiciliado` | `integer|null` | si | Domicilio Fiscal |
| `compraTercero` | `object|null` | si | Información de Compras por cuenta de terceros |
| `compraTercero.numDocumento` | `string|null` | si | Número de documento de Identificación del tercero |
| `compraTercero.nombre` | `string|null` | si | Nombre del Tercero |
| `cuerpoDocumento` | `array` | si | Cuerpo del Documento |
| `cuerpoDocumento[]` | `object` | si |  |
| `cuerpoDocumento[].numItem` | `integer` | si | N° de ítem |
| `cuerpoDocumento[].tipoItem` | `integer` | si | Tipo de ítem |
| `cuerpoDocumento[].codigoGeneracion` | `string` | si | Código de Generación del DTE |
| `cuerpoDocumento[].cantidad` | `number` | si | Cantidad |
| `cuerpoDocumento[].precioUni` | `number` | si | Precio Unitario |
| `cuerpoDocumento[].descripcion` | `string` | si | Descripcion |
| `cuerpoDocumento[].codigo` | `string|null` | no | Código |
| `cuerpoDocumento[].uniMedida` | `integer` | no | Unidad de Medida |
| `cuerpoDocumento[].montoDescu` | `number` | si | Descuento por ítem |
| `cuerpoDocumento[].codTributo` | `string|null` | si | Tributo sujeto a cálculo de IVA |
| `cuerpoDocumento[].ventaNoSuj` | `number` | si | Ventas no Sujetas |
| `cuerpoDocumento[].ventaExenta` | `number` | si | Ventas Exentas |
| `cuerpoDocumento[].ventaGravada` | `number` | si | Ventas Gravadas |
| `cuerpoDocumento[].compra` | `number` | si | Ventas |
| `cuerpoDocumento[].tributos` | `array|null` | si | Código del Tributo |
| `cuerpoDocumento[].tributos[]` | `string|null` | si |  |
| `cuerpoDocumento[].psv` | `number` | si | Precio Sugerido de Venta |
| `cuerpoDocumento[].ivaItem` | `number` | si | IVA por ítem |
| `cuerpoDocumento[].noGravado` | `number` | si | Cargos/Abonos que no afectan la base imponible |
| `cuerpoDocumento[].seguro` | `number` | si | Seguro |
| `cuerpoDocumento[].flete` | `number` | si | Flete |
| `cuerpoDocumento[].ivaRete` | `number` | si | IVA Retenido |
| `cuerpoDocumento[].reteRenta` | `number` | si | Retención Renta |
| `resumen` | `object` | si | Resumen |
| `resumen.totalNoSuj` | `number` | si | Total de Operaciones no Sujetas |
| `resumen.totalExenta` | `number` | si | Total de Operaciones exentas |
| `resumen.totalGravada` | `number` | si | Total de Operaciones Gravadas |
| `resumen.totalCompraExcluidos` | `number` | si | Total Compras a Sujetos Excluidos  |
| `resumen.subTotalVentas` | `number` | si | Suma de Operaciones sin Impuestos |
| `resumen.tributos` | `array|null` | si | Resumen Código de Tributo |
| `resumen.tributos[]` | `object` | si |  |
| `resumen.tributos[].codigo` | `string` | si | Resumen Código de Tributo |
| `resumen.tributos[].descripcion` | `string` | si | Nombre del Tributo |
| `resumen.tributos[].valor` | `number` | si | Valor del Tributo |
| `resumen.totalSeguro` | `number|null` | si | Seguro |
| `resumen.totalFlete` | `number|null` | si | Flete |
| `resumen.montoTotalOperacion` | `number` | si | Monto Total de la Operación |
| `resumen.ivaRete` | `number` | si | IVA Retenido |
| `resumen.reteRenta` | `number|null` | si | Retencion Renta |
| `resumen.totalNoGravado` | `number` | si | Total Cargos/Abonos que no afectan la base imponible |
| `resumen.totalPagar` | `number` | si | Total a Pagar |
| `resumen.totalLetras` | `string|null` | si | Valor en Letras |
| `resumen.totalNoOnerosas` | `number` | si | Transferencias de bienes no onerosas |
| `resumen.totalIva` | `number` | si | IVA 13% |
| `resumen.saldoFavor` | `number` | si | Saldo a Favor |
| `apendice` | `array|null` | si | Apéndice |
| `apendice[]` | `object` | si |  |
| `apendice[].campo` | `string` | si | Nombre del campo |
| `apendice[].etiqueta` | `string` | si | Descripción |
| `apendice[].valor` | `string` | si | Valor/Dato |

### fe-f

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Receptor) |
| `ventaTercero.codDomiciliado` | `integer|null` | si | Domicilio Fiscal |
| `resumen.ivaRete` | `number` | si | IVA Retenido |
| `resumen.observaciones` | `string|null` | si | Observaciones |

### fe-fex

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion.motivoContin` | `string|null` | si | Motivo de Contingencia |
| `documentoRelacionado` | `array|null` | si | Documentos Relacionados |
| `documentoRelacionado[]` | `object` | si |  |
| `documentoRelacionado[].tipoDocumento` | `string` | si | Tipo de Documento Relacionado |
| `documentoRelacionado[].tipoGeneracion` | `integer` | si | Tipo de Generación del Documento relacionado |
| `documentoRelacionado[].numeroDocumento` | `string` | si | Número de documento relacionado |
| `documentoRelacionado[].fechaEmision` | `string` | si | Fecha de Generación del Documento Relacionado |
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `emisor.tipoRegimen` | `string|null` | si | Tipo Régimen |
| `ventaTercero.codDomiciliado` | `integer|null` | si | Domicilio Fiscal |
| `compraTercero` | `object|null` | si | Compras por cuenta de terceros |
| `compraTercero.numDocumento` | `string` | si | Número de documento de Identificación del Tercero |
| `compraTercero.nombre` | `string` | si | Nombre del Tercero |
| `cuerpoDocumento[].tipoItem` | `integer` | si | Tipo de ítem |
| `cuerpoDocumento[].numeroDocumento` | `string|null` | si | Número de Documento Relacionado |
| `cuerpoDocumento[].codTributo` | `string|null` | si | Tributo sujeto a cálculo de IVA |
| `resumen.descuGravada` | `number` | si | Descuento global a ventas gravadas |
| `resumen.tributos` | `array|null` | si | Resumen Codigo de Tributos |
| `resumen.tributos[]` | `object` | si |  |
| `resumen.tributos[].codigo` | `string` | si | Resumen Código de Tributo |
| `resumen.tributos[].descripcion` | `string` | si | Nombre del Tributo |
| `resumen.tributos[].valor` | `number` | si | Valor del Tributo |
| `resumen.totalNoOnerosas` | `number` | si | Transferencias de bienes no onerosas |
| `resumen.saldoFavor` | `number` | si | Saldo a Favor |

### fe-fse

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `receptor` | `object` | si | Sujeto Excluido (Receptor) |
| `receptor.tipoDocumento` | `string` | si | Tipo de documento de identificación (Receptor) |
| `receptor.numDocumento` | `string` | si | Número de documento de Identificación (Receptor) |
| `receptor.nombre` | `string` | si | Nombre (Receptor) |
| `receptor.codActividad` | `string|null` | si | Código de Actividad Económica (Receptor) |
| `receptor.descActividad` | `string|null` | si | Actividad Económica (Receptor) |
| `receptor.direccion` | `object` | si | Dirección (Receptor) |
| `receptor.direccion.departamento` | `string` | si | Dirección: Departamento (Receptor) |
| `receptor.direccion.municipio` | `string` | si | Dirección: Municipio (Receptor) |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Receptor) |
| `receptor.direccion.complemento` | `string` | si | Dirección: complemento (Receptor) |
| `receptor.telefono` | `string|null` | si | Teléfono (Receptor) |
| `receptor.correo` | `string|null` | si | Correo electrónico (Receptor) |

### fe-nc

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion.fusion` | `string|null` | si | Fusiónes y otros |
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `receptor.tipoDocumento` | `string` | si | Tipo de Documento identificacion (Receptor) |
| `receptor.numDocumento` | `string` | si | Número de documento de Identificacion (Receptor) |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Receptor) |
| `ventaTercero.codDomiciliado` | `integer|null` | si | Domicilio Fiscal |
| `cuerpoDocumento[].noGravado` | `number` | si | Cargos/Abonos que no afectan la base imponible |
| `cuerpoDocumento[].ivaPerci` | `number` | si | IVA percibido |
| `cuerpoDocumento[].totalIva` | `number` | si | IVA 13% |
| `cuerpoDocumento[].ivaRete` | `number` | si |  IVA retenido |
| `resumen.ivaPerci` | `number` | si | IVA Percibido |
| `resumen.totalIva` | `number` | si | IVA 13% |
| `resumen.ivaRete` | `number` | si | IVA Retenido |
| `resumen.totalNoGravado` | `number` | si | Total Cargos/Abonos que no afectan la base imponible |
| `resumen.totalPagar` | `number` | si | Total a Pagar |
| `resumen.observaciones` | `string|null` | si | Observaciones |
| `resumen.codigoRetencionMH` | `string|null` | si | Código retención MH |

### fe-nd

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion.fusion` | `string|null` | si | Fusiónes y otros |
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `receptor.tipoDocumento` | `string` | si | Tipo de documento de identificación (Receptor) |
| `receptor.numDocumento` | `string` | si | Número de documento de Identificación (Receptor) |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Receptor) |
| `ventaTercero.codDomiciliado` | `integer|null` | si | Domicilio Fiscal |
| `cuerpoDocumento[].` | `array|null` | si | Código del Tributo |
| `cuerpoDocumento[].[]` | `string` | si |  |
| `cuerpoDocumento[].noGravado` | `number` | si | Cargos/Abonos que no afectan la base imponible |
| `cuerpoDocumento[].ivaPerci` | `number` | si | IVA percibido |
| `cuerpoDocumento[].totalIva` | `number` | si | IVA 13% |
| `cuerpoDocumento[].ivaRete` | `number` | si |  IVA retenido |
| `resumen.` | `array|null` | si | Resumen de  |
| `resumen.[]` | `object` | si |  |
| `resumen.[].codigo` | `string` | si | Resumen Código de Tributo |
| `resumen.[].descripcion` | `string` | si | Nombre del Tributo |
| `resumen.[].valor` | `number` | si | Valor del Tributo |
| `resumen.ivaPerci` | `number` | si | IVA Percibido |
| `resumen.totalIva` | `number` | si | IVA 13% |
| `resumen.ivaRete` | `number` | si | IVA Retenido |
| `resumen.totalNoGravado` | `number` | si | Total Cargos/Abonos que no afectan la base imponible |
| `resumen.totalPagar` | `number` | si | Total a Pagar |
| `resumen.observaciones` | `string|null` | si | Observaciones |
| `resumen.codigoRetencionMH` | `string|null` | si | Código retención MH |

### fe-nr

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `emisor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `receptor.direccion.distrito` | `string` | si | Dirección Distrito (Emisor) |
| `ventaTercero.codDomiciliado` | `integer|null` | si | Domicilio Fiscal |
| `resumen.observaciones` | `string|null` | si | Observaciones |

### invalidacion-schema

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `identificacion.fecEmi` | `string` | si | Fecha del Evento  |
| `identificacion.horEmi` | `string` | si | Hora del Evento |
| `identificacion.fusion` | `string|null` | si | Fusiónes y otros |
