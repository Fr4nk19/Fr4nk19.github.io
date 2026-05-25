# Cambios de schemas: new vs old

Comparacion de campos existentes, campos agregados y campos eliminados entre los JSON Schema nuevos y antiguos.

## Resumen por tipo de cambio

| Tipo de cambio | Cantidad |
|---|---:|
| `restriccion_modificada` | 501 |
| `eliminado` | 165 |
| `agregado` | 155 |
| `description_modificado` | 146 |
| `type_modificado` | 75 |
| `requerido_modificado` | 5 |

## Resumen por schema

| Schema | Cambios |
|---|---:|
| `fe-fex` | 112 |
| `fe-nd` | 108 |
| `fe-ccf` | 100 |
| `fe-nc` | 96 |
| `fe-cd` | 86 |
| `fe-f` | 82 |
| `fe-cr` | 78 |
| `invalidacion-schema` | 76 |
| `fe-nr` | 72 |
| `fe-cl` | 69 |
| `fe-fse` | 65 |
| `fe-dcl` | 64 |
| `contingencia-schema` | 39 |

## Detalle

### contingencia-schema

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `detalleDTE[].codigoGeneracion` | `description_modificado` | `description` | Codigo de generacion del documento reportado. | Codigo de generacion del documento |
| `detalleDTE[].codigoGeneracion` | `restriccion_modificada` | `pattern` | ^[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}$ |  |
| `detalleDTE[].noItem` | `restriccion_modificada` | `maxLength` | 4 |  |
| `detalleDTE[].noItem` | `restriccion_modificada` | `minimum` |  | 1 |
| `detalleDTE[].noItem` | `restriccion_modificada` | `maximum` |  | 1000 |
| `detalleDTE[].tipoDoc` | `description_modificado` | `description` | Tipo de Documento Tributario Electronico | Tipo de Documento en contingencia |
| `detalleDTE[].tipoDoc` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-5]$ |  |
| `emisor` | `description_modificado` | `description` | Informacion del emisor. | Informacion del emisor |
| `emisor.codEstableMH` | `requerido_modificado` | `required` | no | si |
| `emisor.codEstableMH` | `description_modificado` | `description` | Codigo, Numero o Identificador de establecimiento por MH | Código del establecimiento asignado por el MH |
| `emisor.codPuntoVenta` | `eliminado` | `campo` | tipo=string\|null \| requerido=no \| descripcion=Codigo, Numero o Identificador de punto de venta por Contribuyente \| restricciones=minLength=1; maxLength=15 |  |
| `emisor.codPuntoVentaMH` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) Asignado por el MH \| restricciones=minLength=4; maxLength=4 |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.nit` | `description_modificado` | `description` | NIT, sin guiones | NIT (Emisor) |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o  razón social del contribuyente (EMISOR) | Nombre (Emisor) |
| `emisor.nombre` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.nombreResponsable` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.numeroDocResponsable` | `description_modificado` | `description` | NUMERO DE DOCUMENTO DE IDENTIFICACION DEL RESPONSABLE. | NUMERO DE DOCUMENTO DE IDENTIFICACION |
| `emisor.numeroDocResponsable` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.telefono` | `description_modificado` | `description` | Numero de telefono del emisor | Telefono (Emisor) |
| `emisor.tipoDocResponsable` | `description_modificado` | `description` | Tipo documento de identificación del responsable CAT-22: 36 - NIT, 13 - DUI, 02 - Carnet de residente, 03 - PASAPORTE, 37 - OTRO | Tipo de documento de identificación |
| `emisor.tipoDocResponsable` | `restriccion_modificada` | `enum` | ["36","13","02","03","37"] |  |
| `emisor.tipoEstablecimiento` | `description_modificado` | `description` | TIPO DE ESTABLECIMIENTO (EMISOR) (QUE HA ENTRADO EN CONTINGENCIA) | TIPO DE ESTABLECIMIENTO (EMISOR) |
| `emisor.tipoEstablecimiento` | `restriccion_modificada` | `enum` | ["01","02","04","07","20"] |  |
| `identificacion` | `description_modificado` | `description` | An explanation about the purpose of this instance. | Identificación |
| `identificacion.ambiente` | `description_modificado` | `description` | Ambiente de destino: 00 - Pruebas, 01 - Produccion | Ambiente de destino |
| `identificacion.codigoGeneracion` | `description_modificado` | `description` | Debe cumplir con el estandar del UUID v4, el cual Debe ser unico por evento de contingencia (el cual no debe repetirse) longitud de 36 digitos sin guiones codigo de generacion consiste en un numero identificador inico, aleatorio y universal. | Código de Generación Evento Contingencia. |
| `identificacion.fTransmision` | `description_modificado` | `description` | Fecha de emision (formato yyyy-mm-dd) | Fecha del evento de contingencia |
| `identificacion.hTransmision` | `description_modificado` | `description` | Hora de emision | Hora del evento contigencia |
| `identificacion.version` | `description_modificado` | `description` | Version del esquema del DTE | Versión del esquema del evento |
| `identificacion.version` | `restriccion_modificada` | `const` | 3 | 4 |
| `motivo.fFin` | `description_modificado` | `description` | Fecha de finalizacion de la contingencia | Fecha fin de contingencia |
| `motivo.hFin` | `restriccion_modificada` | `pattern` | ^(0[0-9]\|1[0-9]\|2[0-3]):[0-5][0-9]:[0-5][0-9]?$ |  |
| `motivo.hInicio` | `description_modificado` | `description` | Hora inicio de la contingencia. | Hora inicio de contingencia. |
| `motivo.hInicio` | `restriccion_modificada` | `pattern` | ^(0[0-9]\|1[0-9]\|2[0-3]):[0-5][0-9]:[0-5][0-9]?$ |  |
| `motivo.tipoContingencia` | `description_modificado` | `description` | Debe seleccional del Catalogo de la Contingencias cualquiera de las 5 opciones que aplique segun el motivo. | Tipo de contingencia. |
| `motivo.tipoContingencia` | `restriccion_modificada` | `enum` | [1,2,3,4,5] |  |

### fe-ccf

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `apendice[].campo` | `restriccion_modificada` | `minLength` | 2 |  |
| `apendice[].etiqueta` | `restriccion_modificada` | `minLength` | 3 |  |
| `apendice[].valor` | `restriccion_modificada` | `minLength` | 1 |  |
| `cuerpoDocumento[].codTributo` | `restriccion_modificada` | `enum` | [null,"A8","57","90","D4","D5","25","A6"] |  |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].montoDescu` | `description_modificado` | `description` | Descuento, Bonificación, Rebajas por ítem | Descuento  por ítem |
| `cuerpoDocumento[].tipoItem` | `restriccion_modificada` | `enum` | [1,2,3,4] |  |
| `documentoRelacionado[].tipoDocumento` | `description_modificado` | `description` | Tipo de Documento Tributario Relacionado | Tipo de Documento Relacionado |
| `documentoRelacionado[].tipoDocumento` | `restriccion_modificada` | `enum` | ["04","08","09"] |  |
| `documentoRelacionado[].tipoGeneracion` | `description_modificado` | `description` | Tipo de Generación del Documento Tributario relacionado | Tipo de Generación del Documento relacionado |
| `documentoRelacionado[].tipoGeneracion` | `restriccion_modificada` | `enum` | [1,2] |  |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `emisor.codActividad` | `restriccion_modificada` | `minLength` |  | 5 |
| `emisor.codActividad` | `restriccion_modificada` | `maxLength` |  | 6 |
| `emisor.codEstable` | `restriccion_modificada` | `minLength` | 1 | 4 |
| `emisor.codEstable` | `restriccion_modificada` | `maxLength` | 10 | 4 |
| `emisor.codEstableMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.codPuntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) Asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `emisor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `emisor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `extension` | `eliminado` | `campo` | tipo=object\|null \| requerido=si \| descripcion=Extensión \| restricciones=additionalProperties=false |  |
| `extension.docuEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación de quien genera el DTE \| restricciones=minLength=1; maxLength=25 |  |
| `extension.docuRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación del responsable de la operación por parte del receptor \| restricciones=minLength=1; maxLength=25 |  |
| `extension.nombEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable que Genera el DTE \| restricciones=minLength=1; maxLength=100 |  |
| `extension.nombRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable de la operación por parte del receptor \| restricciones=minLength=1; maxLength=100 |  |
| `extension.observaciones` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maxLength=3000 |  |
| `extension.placaVehiculo` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Placa de vehículo \| restricciones=minLength=2; maxLength=10 |  |
| `identificacion.motivoContin` | `restriccion_modificada` | `maxLength` | 150 | 500 |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-03-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-03-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15} |
| `identificacion.version` | `restriccion_modificada` | `const` | 3 | 4 |
| `otrosDocumentos[].codDocAsociado` | `type_modificado` | `type` | integer | integer\|null |
| `otrosDocumentos[].descDocumento` | `restriccion_modificada` | `minLength` |  | 3 |
| `otrosDocumentos[].detalleDocumento` | `restriccion_modificada` | `minLength` |  | 3 |
| `otrosDocumentos[].medico.docIdentificacion` | `restriccion_modificada` | `minLength` | 2 | 1 |
| `otrosDocumentos[].medico.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `otrosDocumentos[].medico.nombre` | `type_modificado` | `type` | string | string\|null |
| `otrosDocumentos[].medico.nombre` | `restriccion_modificada` | `minLength` |  | 1 |
| `receptor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `receptor.codActividad` | `restriccion_modificada` | `minLength` |  | 5 |
| `receptor.codActividad` | `restriccion_modificada` | `maxLength` |  | 6 |
| `receptor.correo` | `type_modificado` | `type` | string | string\|null |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` |  | 1 |
| `receptor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `receptor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Receptor) |
| `receptor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `receptor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nrc` | `type_modificado` | `type` | string | string\|null |
| `receptor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `receptor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `receptor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `resumen.condicionOperacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `resumen.descuExenta` | `description_modificado` | `description` | Monto de Descuento, Bonificación, Rebajas y otros a ventas exentas | Descuento global a ventas exentas |
| `resumen.descuGravada` | `description_modificado` | `description` | Monto de Descuento, Bonificación, Rebajas y otros a ventas gravadas | Descuento global a ventas gravadas |
| `resumen.descuNoSuj` | `description_modificado` | `description` | Monto global de Descuento, Bonificación, Rebajas y otros a ventas no sujetas | Descuento global a ventas no sujetas |
| `resumen.ivaPerci` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA Percibido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.ivaPerci1` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=IVA Percibido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.ivaRete` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.ivaRete1` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.montoTotalOperacion` | `restriccion_modificada` | `minimum` |  | 0 |
| `resumen.montoTotalOperacion` | `restriccion_modificada` | `exclusiveMinimum` | 0 |  |
| `resumen.observaciones` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=minLength=1; maximum=3000 |
| `resumen.pagos[]` | `restriccion_modificada` | `maxLength` |  | 3 |
| `resumen.pagos[].codigo` | `type_modificado` | `type` | string | string\|null |
| `resumen.pagos[].codigo` | `restriccion_modificada` | `pattern` | ^(0[1-9]\|\|1[0-4]\|\|99)$ |  |
| `resumen.pagos[].periodo` | `restriccion_modificada` | `exclusiveMinimum` |  | 0 |
| `resumen.pagos[].plazo` | `restriccion_modificada` | `pattern` | ^0[1-3]$ |  |
| `resumen.porcentajeDescuento` | `description_modificado` | `description` | Porcentaje del monto global de Descuento, Bonificación, Rebajas y otros | Porcentaje de Descuento |
| `resumen.reteRenta` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Retención Renta \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.saldoFavor` | `restriccion_modificada` | `exclusiveMinimum` |  | -100000000000 |
| `resumen.saldoFavor` | `restriccion_modificada` | `exclusiveMaximum` | 100000000000 |  |
| `resumen.subTotalVentas` | `description_modificado` | `description` | Suma de operaciones sin impuestos | Suma de operaciones |
| `resumen.totalDescu` | `description_modificado` | `description` | Total del monto de Descuento, Bonificación, Rebajas | Total Descuentos |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 8 |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `minLength` | 2 | 1 |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `maxLength` | 150 | 300 |
| `ventaTercero.codDomiciliado` | `agregado` | `campo` |  | tipo=integer\|null \| requerido=si \| descripcion=Domicilio Fiscal |
| `ventaTercero.nit` | `type_modificado` | `type` | string | string\|null |
| `ventaTercero.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `ventaTercero.nit` | `restriccion_modificada` | `minLength` |  | 1 |
| `ventaTercero.nit` | `restriccion_modificada` | `maxLength` |  | 20 |
| `ventaTercero.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del Tercero | Nombre del Tercero |
| `ventaTercero.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `ventaTercero.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |

### fe-cd

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `apendice[].campo` | `restriccion_modificada` | `minLength` | 2 | 1 |
| `apendice[].etiqueta` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `cuerpoDocumento[].depreciacion` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Depreciación \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=1e-8 |  |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].tipoDepreciacion` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Depreciación \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `cuerpoDocumento[].tipoDonacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `cuerpoDocumento[].uniMedida` | `restriccion_modificada` | `enum` | [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,59,99] |  |
| `donante` | `eliminado` | `campo` | tipo=object \| requerido=si \| descripcion=Receptor \| restricciones=additionalProperties=false |  |
| `donante.codActividad` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código de Actividad Económica (Receptor) \| restricciones=pattern=^[0-9]{2,6}$; minLength=1; maxLength=6 |  |
| `donante.codDomiciliado` | `eliminado` | `campo` | tipo=integer \| requerido=si \| descripcion=Domicilio Fiscal \| restricciones=enum=[1,2] |  |
| `donante.codPais` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Codigo de Pais, catalogo 020 \| restricciones=enum=["9320","9539","9565","9905","9999","9303","9306","9309","9310","9315","9317","9318","9319","9324","9327","9330","9333","9336","9339","9342","9345","9348","9349","9350","9354","9357","9360","9363","9366","9372","9374","9375","9377","9378","9381","9384","9387","9390","9393","9394","9396","9399","9402","9405","9408","9411","9414","9417","9420","9423","9426","9432","9435","9438","9440","9441","9444","9446","9447","9450","9453","9456","9459","9462","9465","9468","9471","9474","9477","9480","9481","9483","9486","9487","9495","9498","9501","9504","9507","9513","9516","9519","9522","9525","9526","9528","9531","9534","9537","9540","9543","9544","9546","9549","9552","9555","9558","9561","9564","9567","9570","9573","9576","9577","9582","9585","9591","9594","9597","9600","9601","9603","9606","9609","9611","9612","9615","9618","9621","9624","9627","9633","9636","9638","9639","9642","9645","9648","9651","9660","9663","9666","9669","9672","9675","9677","9678","9679","9680","9681","9682","9683","9684","9687","9690","9691","9693","9696","9699","9702","9705","9706","9707","9708","9714","9717","9720","9722","9723","9725","9726","9727","9729","9732","9735","9738","9739","9740","9741","9744","9747","9750","9756","9758","9759","9760","9850","9862","9863","9865","9886","9898","9899","9897","9887","9571","9300","9369","9439","9510","9579","9654","9711","9736","9737","9640","9641","9673","9472","9311","9733","9541","9746","9551","9451","9338","9353","9482","9494","9524","9304","9332","9454","9457","9489","9491","9492","9523","9530","9532","9535","9542","9547","9548","9574","9598","9602","9607","9608","9623","9652","9692","9709","9712","9716","9718","9719","9751","9452","9901","9902","9903","9664","9415","9904","9514","9906","9359","9493","9521","9533","9538","9689","9713","9449","9888","9490","9527","9529","9536","9545","9568","9610","9622","9643","9667","9676","9685","9686","9688","9715","9900","9371","9376","9907"] |  |
| `donante.correo` | `eliminado` | `campo` | tipo=null\|string \| requerido=si \| descripcion=Correo electrónico (Receptor) \| restricciones=format=email; maxLength=100 |  |
| `donante.descActividad` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Actividad Económica (Receptor) \| restricciones=minLength=1; maxLength=150 |  |
| `donante.direccion` | `eliminado` | `campo` | tipo=null\|object \| requerido=si \| descripcion=Dirección (Receptor) \| restricciones=additionalProperties=false |  |
| `donante.direccion.complemento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección: complemento (Receptor) \| restricciones=minLength=1; maxLength=200 |  |
| `donante.direccion.departamento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección: Departamento (Receptor) \| restricciones=pattern=^0[1-9]\|1[0-4]$ |  |
| `donante.direccion.municipio` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección: Municipio (Receptor) \| restricciones=pattern=^[0-9]{2}$ |  |
| `donante.nombre` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Nombre, denominación o razón social del contribuyente (Receptor) \| restricciones=minLength=1; maxLength=250 |  |
| `donante.nrc` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=NRC (Receptor) \| restricciones=pattern=^[0-9]{1,8}$; minLength=2; maxLength=8 |  |
| `donante.numDocumento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación (Receptor) \| restricciones=minLength=3; maxLength=20 |  |
| `donante.telefono` | `eliminado` | `campo` | tipo=null\|string \| requerido=si \| descripcion=Teléfono (Receptor) \| restricciones=minLength=8; maxLength=30 |  |
| `donante.tipoDocumento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de documento de identificación (Receptor) \| restricciones=enum=["36","13","02","03","37"] |  |
| `donatario` | `eliminado` | `campo` | tipo=object \| requerido=si \| descripcion=Emisor \| restricciones=additionalProperties=false |  |
| `donatario.codActividad` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Código de Actividad Económica (Emisor) \| restricciones=pattern=^[0-9]{2,6}$; minLength=1; maxLength=6 |  |
| `donatario.codEstable` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el contribuyente \| restricciones=minLength=4; maxLength=4 |  |
| `donatario.codEstableMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `donatario.codPuntoVenta` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) asignado por el contribuyente \| restricciones=minLength=1; maxLength=15 |  |
| `donatario.codPuntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) Asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `donatario.correo` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Correo electrónico (Emisor) \| restricciones=format=email; minLength=3; maxLength=100 |  |
| `donatario.descActividad` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Actividad Económica (Emisor) \| restricciones=minLength=1; maxLength=150 |  |
| `donatario.direccion` | `eliminado` | `campo` | tipo=object \| requerido=si \| descripcion=Dirección (Emisor) \| restricciones=additionalProperties=false |  |
| `donatario.direccion.complemento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección complemento (Emisor) \| restricciones=minLength=1; maxLength=200 |  |
| `donatario.direccion.departamento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección Departamento (Emisor) \| restricciones=pattern=^0[1-9]\|1[0-4]$ |  |
| `donatario.direccion.municipio` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección Municipio (Emisor) \| restricciones=pattern=^[0-9]{2}$ |  |
| `donatario.nombre` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Nombre, denominación o razón social del contribuyente (Emisor) \| restricciones=minLength=1; maxLength=250 |  |
| `donatario.nombreComercial` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre Comercial (Emisor) \| restricciones=minLength=1; maxLength=150 |  |
| `donatario.nrc` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=NRC (Emisor) \| restricciones=pattern=^[0-9]{1,8}$; minLength=2; maxLength=8 |  |
| `donatario.numDocumento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación (Emisor) \| restricciones=minLength=9; maxLength=14 |  |
| `donatario.telefono` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Teléfono (Emisor) \| restricciones=minLength=8; maxLength=30 |  |
| `donatario.tipoDocumento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de documento de identificación (Emisor)  \| restricciones=enum=["36"] |  |
| `donatario.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `emisor` | `agregado` | `campo` |  | tipo=object \| requerido=si \| descripcion=Emisor/Donatario \| restricciones=additionalProperties=false |
| `emisor.codActividad` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Código de Actividad Económica (Emisor) \| restricciones=minLength=5; maxLength=6 |
| `emisor.codEstable` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el contribuyente \| restricciones=minLength=4; maxLength=4 |
| `emisor.codPuntoVenta` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) asignado por el contribuyente \| restricciones=minLength=1; maxLength=15 |
| `emisor.correo` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Correo electrónico (Emisor) \| restricciones=minLength=6; maxLength=100 |
| `emisor.descActividad` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Actividad Económica (Emisor) \| restricciones=minLength=5; maxLength=150 |
| `emisor.direccion` | `agregado` | `campo` |  | tipo=object \| requerido=si \| descripcion=Dirección (Emisor) \| restricciones=additionalProperties=false |
| `emisor.direccion.complemento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección complemento (Emisor) \| restricciones=minLength=1; maxLength=200 |
| `emisor.direccion.departamento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Departamento (Emisor) |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Municipio (Emisor) |
| `emisor.nombre` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Nombre (Emisor) \| restricciones=minLength=1; maxLength=250 |
| `emisor.nombreComercial` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Nombre Comercial (Emisor) \| restricciones=minLength=1; maxLength=150 |
| `emisor.nrc` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=NRC (Emisor) \| restricciones=minLength=2; maxLength=8 |
| `emisor.numDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación (Emisor) \| restricciones=minLength=9; maxLength=14 |
| `emisor.telefono` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Teléfono (Emisor) \| restricciones=minLength=8; maxLength=30 |
| `emisor.tipoDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Tipo de documento de identificación (Emisor)  |
| `identificacion.tipoModelo` | `restriccion_modificada` | `enum` | [1] | [1,2] |
| `identificacion.version` | `restriccion_modificada` | `const` | 1 | 2 |
| `otrosDocumentos[].codDocAsociado` | `type_modificado` | `type` | integer | integer\|null |
| `otrosDocumentos[].codDocAsociado` | `restriccion_modificada` | `enum` | [1,2] |  |
| `otrosDocumentos[].descDocumento` | `type_modificado` | `type` | string | string\|null |
| `otrosDocumentos[].descDocumento` | `restriccion_modificada` | `minLength` |  | 3 |
| `otrosDocumentos[].detalleDocumento` | `type_modificado` | `type` | string | string\|null |
| `otrosDocumentos[].detalleDocumento` | `restriccion_modificada` | `minLength` |  | 3 |
| `receptor` | `agregado` | `campo` |  | tipo=object \| requerido=si \| descripcion=Receptor/Donante \| restricciones=additionalProperties=false |
| `receptor.codActividad` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código de Actividad Económica (Receptor) \| restricciones=minLength=5; maxLength=6 |
| `receptor.codDomiciliado` | `agregado` | `campo` |  | tipo=integer \| requerido=si \| descripcion=Domicilio Fiscal |
| `receptor.codPais` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Codigo de país de nacionalidad del (Receptor) |
| `receptor.correo` | `agregado` | `campo` |  | tipo=null\|string \| requerido=si \| descripcion=Correo electrónico (Receptor) \| restricciones=minLength=6; maxLength=100 |
| `receptor.descActividad` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Actividad Económica (Receptor) \| restricciones=minLength=1; maxLength=150 |
| `receptor.direccion` | `agregado` | `campo` |  | tipo=null\|object \| requerido=si \| descripcion=Dirección (Receptor) \| restricciones=additionalProperties=false |
| `receptor.direccion.complemento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección complemento (Receptor) \| restricciones=minLength=1; maxLength=200 |
| `receptor.direccion.departamento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Departamento (Emisor) |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Receptor) |
| `receptor.direccion.municipio` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Municipio (Receptor) |
| `receptor.nombre` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Nombre (Receptor) \| restricciones=minLength=1; maxLength=250 |
| `receptor.nrc` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=NRC (Receptor) \| restricciones=minLength=2; maxLength=8 |
| `receptor.numDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación (Receptor) \| restricciones=minLength=1; maxLength=20 |
| `receptor.telefono` | `agregado` | `campo` |  | tipo=null\|string \| requerido=si \| descripcion=Teléfono (Receptor) \| restricciones=minLength=8; maxLength=30 |
| `receptor.tipoDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Tipo de documento de identificación (Receptor) |
| `resumen.pagos[].codigo` | `restriccion_modificada` | `pattern` | ^(0[1-9]\|\|1[0-4]\|\|99)$ |  |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `description_modificado` | `description` | Total en Letras | Valor en Letras |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 1 |

### fe-cl

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `apendice[].campo` | `restriccion_modificada` | `minLength` |  | 1 |
| `apendice[].etiqueta` | `restriccion_modificada` | `minLength` |  | 1 |
| `apendice[].valor` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].exportaciones` | `description_modificado` | `description` | Ventas Gravadas | Exportaciones |
| `cuerpoDocumento[].fechaEmision` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Fecha de generación del Documento relacionado \| restricciones=format=date |
| `cuerpoDocumento[].fechaGeneracion` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Fecha de generación del  relacionado \| restricciones=format=date |  |
| `cuerpoDocumento[].obsItem` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Observaciones por ítem \| restricciones=minLength=3; maxLength=3000 |  |
| `cuerpoDocumento[].observaciones` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Observaciones por ítem \| restricciones=minLength=1; maxLength=1000 |
| `cuerpoDocumento[].tipoDte` | `description_modificado` | `description` | Tipo de ítem | Tipo de Documento Relacionado |
| `cuerpoDocumento[].tipoDte` | `restriccion_modificada` | `enum` | ["01","03","05","06","11"] |  |
| `cuerpoDocumento[].tipoGeneracion` | `description_modificado` | `description` | Tipo de generación del documento | Tipo de generación del Documento relacionado |
| `cuerpoDocumento[].tipoGeneracion` | `restriccion_modificada` | `enum` | [1,2] |  |
| `cuerpoDocumento[].tributos` | `description_modificado` | `description` | Tributo sujeto a cálculo de IVA | Código del tributo |
| `cuerpoDocumento[].tributos[]` | `restriccion_modificada` | `enum` | [null,"20","C3","59","71","D1","C8","D5","D4"] |  |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `emisor.codEstableMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.codPuntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) Asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nit` | `restriccion_modificada` | `maxLength` | 14 |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nombreComercial` | `restriccion_modificada` | `minLength` |  | 2 |
| `emisor.nrc` | `type_modificado` | `type` | string | string\|null |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.telefono` | `type_modificado` | `type` | string | string\|null |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `extension` | `eliminado` | `campo` | tipo=object\|null \| requerido=si \| descripcion=Extensión \| restricciones=additionalProperties=false |  |
| `extension.docuEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación de quien genera el DTE \| restricciones=minLength=5; maxLength=25 |  |
| `extension.docuRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación del responsable de la operación por parte del receptor \| restricciones=minLength=5; maxLength=25 |  |
| `extension.nombEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable que Genera el DTE \| restricciones=minLength=5; maxLength=100 |  |
| `extension.nombRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable de la operación por parte del receptor \| restricciones=minLength=5; maxLength=100 |  |
| `extension.observaciones` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maxLength=3000 |  |
| `identificacion.fusion` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Fusiónes y otros \| restricciones=pattern=^([0-9]{14}\|[0-9]{9})$ |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-08-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-08-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15}$ |
| `identificacion.version` | `restriccion_modificada` | `const` | 1 | 2 |
| `receptor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `receptor.codDomiciliado` | `agregado` | `campo` |  | tipo=integer \| requerido=si \| descripcion=Domicilio Fiscal |
| `receptor.correo` | `type_modificado` | `type` | string | string\|null |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` |  | 6 |
| `receptor.direccion.complemento` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `receptor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Receptor) |
| `receptor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `receptor.nit` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=NIT (Receptor) \| restricciones=pattern=^([0-9]{14}\|[0-9]{9})$ |  |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nombreComercial` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `receptor.nrc` | `type_modificado` | `type` | string | string\|null |
| `receptor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `receptor.numDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación (Receptor) \| restricciones=minLength=1; maxLength=20 |
| `receptor.tipoDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Tipo de documento de identificación (Receptor) |
| `resumen.condicionOperacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `resumen.exportacion` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Total de Operaciones Exportación \| restricciones=exclusiveMinimum=-100000000000; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.ivaPerci` | `description_modificado` | `description` | IVA Percibido liquidado | IVA Percibido |
| `resumen.observaciones` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=minLength=1; maxLength=3000 |
| `resumen.subTotalVentas` | `description_modificado` | `description` | Suma de operaciones sin impuestos | Suma de operaciones |
| `resumen.total` | `description_modificado` | `description` | Total a Pagar | Total |
| `resumen.total` | `restriccion_modificada` | `minimum` |  | 0 |
| `resumen.total` | `restriccion_modificada` | `exclusiveMinimum` | -100000000000 |  |
| `resumen.totalExportacion` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Total de Operaciones Exportación \| restricciones=exclusiveMinimum=-100000000000; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `description_modificado` | `description` | Total en Letras | Valor en Letras |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 1 |
| `resumen.tributos[].codigo` | `restriccion_modificada` | `enum` | [null,"20","C3","59","71","D1","C8","D5","D4"] |  |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `minLength` | 2 | 1 |

### fe-cr

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `apendice[].campo` | `type_modificado` | `type` | string | string\|null |
| `apendice[].campo` | `restriccion_modificada` | `minLength` | 2 | 1 |
| `apendice[].etiqueta` | `type_modificado` | `type` | string | string\|null |
| `apendice[].etiqueta` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `apendice[].valor` | `type_modificado` | `type` | string | string\|null |
| `cuerpoDocumento[].codigoRetencionMH` | `restriccion_modificada` | `enum` | ["22","C4","C9"] |  |
| `cuerpoDocumento[].descripcion` | `type_modificado` | `type` | string | string\|null |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].fechaEmision` | `type_modificado` | `type` | string | null\|string |
| `cuerpoDocumento[].fechaEmision` | `description_modificado` | `description` | Fecha de generación del  relacionado | Fecha de generación del documento relacionado |
| `cuerpoDocumento[].ivaRetenido` | `restriccion_modificada` | `minimum` | 0.01 |  |
| `cuerpoDocumento[].ivaRetenido` | `restriccion_modificada` | `exclusiveMinimum` |  | 0 |
| `cuerpoDocumento[].montoSujetoGrav` | `restriccion_modificada` | `minimum` | 1 |  |
| `cuerpoDocumento[].montoSujetoGrav` | `restriccion_modificada` | `exclusiveMinimum` |  | 0 |
| `cuerpoDocumento[].numDocumento` | `type_modificado` | `type` | string | null\|string |
| `cuerpoDocumento[].tipoDoc` | `eliminado` | `campo` | tipo=integer \| requerido=si \| descripcion=Tipo de generación del documento \| restricciones=enum=[1,2] |  |
| `cuerpoDocumento[].tipoDte` | `type_modificado` | `type` | string | null\|string |
| `cuerpoDocumento[].tipoDte` | `description_modificado` | `description` | Tipo de Documento Tributario Relacionado | Tipo de Documento Relacionado |
| `cuerpoDocumento[].tipoDte` | `restriccion_modificada` | `enum` | ["14","03","01"] |  |
| `cuerpoDocumento[].tipoGeneracion` | `agregado` | `campo` |  | tipo=null\|integer \| requerido=si \| descripcion=Tipo de generación del documento relacionado |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{5,6}$ |  |
| `emisor.codEstable` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el contribuyente \| restricciones=minLength=4; maxLength=4 |
| `emisor.codPuntoVenta` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) asignado por el contribuyente \| restricciones=minLength=1; maxLength=15 |
| `emisor.codigo` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el contribuyente \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.codigoMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `emisor.direccion.complemento` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nrc` | `type_modificado` | `type` | string | string\|null |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `emisor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `emisor.puntoVenta` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) asignado por el contribuyente \| restricciones=minLength=1; maxLength=15 |  |
| `emisor.puntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) Asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.telefono` | `restriccion_modificada` | `pattern` | ^[A-Z0-9]{8,30}$ |  |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","20"] |  |
| `extension` | `eliminado` | `campo` | tipo=object\|null \| requerido=si \| descripcion=Extensión \| restricciones=additionalProperties=false |  |
| `extension.docuEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación de quien genera el DTE \| restricciones=minLength=5; maxLength=25 |  |
| `extension.docuRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación del responsable de la operación por parte del receptor \| restricciones=minLength=5; maxLength=25 |  |
| `extension.nombEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable que Genera el DTE \| restricciones=minLength=5; maxLength=100 |  |
| `extension.nombRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable de la operación por parte del receptor \| restricciones=minLength=5; maxLength=100 |  |
| `extension.observaciones` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maxLength=3000 |  |
| `identificacion.fusion` | `agregado` | `campo` |  | tipo=string\|null \| requerido=no \| descripcion=Fusiónes y otros |
| `identificacion.motivoContin` | `type_modificado` | `type` | null | string\|null |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-07-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-07-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15}$ |
| `identificacion.tipoContingencia` | `type_modificado` | `type` | null | integer\|null |
| `identificacion.tipoModelo` | `restriccion_modificada` | `const` | 1 |  |
| `identificacion.tipoOperacion` | `restriccion_modificada` | `const` | 1 |  |
| `identificacion.version` | `restriccion_modificada` | `const` | 1 | 2 |
| `receptor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{5,6}$ |  |
| `receptor.correo` | `type_modificado` | `type` | string | string\|null |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` |  | 6 |
| `receptor.direccion.complemento` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `receptor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `receptor.direccion.departamento` | `restriccion_modificada` | `minLength` | 2 |  |
| `receptor.direccion.departamento` | `restriccion_modificada` | `maxLength` | 2 |  |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección: Distrito (Receptor) |
| `receptor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `receptor.numDocumento` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `receptor.telefono` | `restriccion_modificada` | `pattern` | ^[0-9+;]{8,30}$ |  |
| `receptor.tipoDocumento` | `restriccion_modificada` | `enum` | ["36","13","37","03","02"] |  |
| `resumen.observaciones` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=minLength=1; maxLength=3000 |
| `resumen.totalIVAretenido` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Total IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.totalIVAretenidoLetras` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Valor en letras \| restricciones=maxLength=200 |  |
| `resumen.totalIva` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA 13% \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.totalIvaRetenido` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Total IVA Retenido \| restricciones=exclusiveMinimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.totalLetras` | `agregado` | `campo` |  | tipo=null\|string \| requerido=si \| descripcion=Valor en letras \| restricciones=minLength=1; maxLength=200 |
| `resumen.totalSujetoRetencion` | `restriccion_modificada` | `minimum` | 0 |  |
| `resumen.totalSujetoRetencion` | `restriccion_modificada` | `exclusiveMinimum` |  | 0 |

### fe-dcl

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `cuerpoDocumento.cantidadDoc` | `restriccion_modificada` | `exclusiveMaximum` | 100000000000 | 1000000000 |
| `cuerpoDocumento.cantidadDoc` | `restriccion_modificada` | `multipleOf` | 1 |  |
| `cuerpoDocumento.iva` | `restriccion_modificada` | `multipleOf` | 1e-8 | 0.01 |
| `cuerpoDocumento.montoSinPercepcion` | `type_modificado` | `type` | number | number\|null |
| `cuerpoDocumento.observaciones` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento.observaciones` | `restriccion_modificada` | `maxLength` | 200 | 1000 |
| `cuerpoDocumento.periodoLiquidacionFechaFin` | `restriccion_modificada` | `minLength` | 1 |  |
| `cuerpoDocumento.periodoLiquidacionFechaFin` | `restriccion_modificada` | `maxLength` | 200 |  |
| `cuerpoDocumento.periodoLiquidacionFechaInicio` | `restriccion_modificada` | `minLength` | 1 |  |
| `cuerpoDocumento.periodoLiquidacionFechaInicio` | `restriccion_modificada` | `maxLength` | 200 |  |
| `cuerpoDocumento.porcentComision` | `type_modificado` | `type` | string\|null | number |
| `cuerpoDocumento.porcentComision` | `restriccion_modificada` | `minLength` | 1 |  |
| `cuerpoDocumento.porcentComision` | `restriccion_modificada` | `maxLength` | 100 |  |
| `cuerpoDocumento.porcentComision` | `restriccion_modificada` | `minimum` |  | 0 |
| `cuerpoDocumento.porcentComision` | `restriccion_modificada` | `maximum` |  | 100 |
| `cuerpoDocumento.porcentComision` | `restriccion_modificada` | `multipleOf` |  | 0.01 |
| `cuerpoDocumento.totalLetras` | `restriccion_modificada` | `minLength` | 8 | 1 |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `emisor.codigo` | `description_modificado` | `description` | Codigo del establecimiento donde se genera el DTE  | Codigo del establecimiento asignado por el contribuyente  |
| `emisor.codigoMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Codigo del establecimiento donde se genera el DTE \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `emisor.direccion.complemento` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |
| `emisor.nombreComercial` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `emisor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `emisor.puntoVenta` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Codigo del punto de venta:(Emisor) asignado por el contribuyente \| restricciones=minLength=1; maxLength=15 |
| `emisor.puntoVentaContri` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Codigo del punto de venta donde se genera el DTE que el contribuyente emisor maneja internamente \| restricciones=minLength=1; maxLength=15 |  |
| `emisor.puntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Codigo de Identificacion del  Punto de Venta (Emisor) Asignado por el  MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.telefono` | `restriccion_modificada` | `pattern` | ^[0-9+;]{8,8}$ |  |
| `emisor.telefono` | `restriccion_modificada` | `maxLength` | 8 | 30 |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `extension.docuEntrega` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `extension.nombEntrega` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-09-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-09-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15} |
| `identificacion.version` | `restriccion_modificada` | `const` | 1 | 2 |
| `receptor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `receptor.codigoMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` |  | 6 |
| `receptor.descActividad` | `description_modificado` | `description` | Actividad Económica (Receptor) | Act. Económica (Receptor) |
| `receptor.direccion` | `type_modificado` | `type` | object | object\|null |
| `receptor.direccion` | `description_modificado` | `description` | Dirección (Receptor) | Dirección (Emisor) |
| `receptor.direccion.complemento` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `receptor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `receptor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `receptor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nombreComercial` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `receptor.nrc` | `type_modificado` | `type` | string | string\|null |
| `receptor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `receptor.puntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `receptor.telefono` | `restriccion_modificada` | `pattern` | ^[0-9+;]{8,8}$ |  |
| `receptor.telefono` | `restriccion_modificada` | `maxLength` | 8 | 30 |
| `receptor.tipoEstablecimiento` | `restriccion_modificada` | `enum` | ["01","02","04","07","20"] |  |

### fe-f

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `cuerpoDocumento[].codTributo` | `restriccion_modificada` | `enum` | [null,"A8","57","90","D4","D5","25","A6"] |  |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].montoDescu` | `description_modificado` | `description` | Descuento, Bonificación, Rebajas por ítem | Descuento por ítem |
| `cuerpoDocumento[].tipoItem` | `restriccion_modificada` | `enum` | [1,2,3,4] |  |
| `documentoRelacionado` | `restriccion_modificada` | `maxItems` | 10 | 50 |
| `documentoRelacionado[].tipoDocumento` | `description_modificado` | `description` | Tipo de Documento Tributario Relacionado | Tipo de Documento Relacionado |
| `documentoRelacionado[].tipoDocumento` | `restriccion_modificada` | `enum` | ["04","09"] |  |
| `documentoRelacionado[].tipoGeneracion` | `description_modificado` | `description` | Tipo de Generación del Documento Tributario relacionado | Tipo de Generación del Documento Relacionado |
| `documentoRelacionado[].tipoGeneracion` | `restriccion_modificada` | `enum` | [1,2] |  |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `emisor.codEstableMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.codPuntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nombreComercial` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `extension` | `eliminado` | `campo` | tipo=object\|null \| requerido=si \| descripcion=Extensión \| restricciones=additionalProperties=false |  |
| `extension.docuEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación de quien genera el DTE \| restricciones=minLength=5; maxLength=25 |  |
| `extension.docuRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación del responsable de la operación por parte del receptor \| restricciones=minLength=5; maxLength=25 |  |
| `extension.nombEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable que Genera el DTE \| restricciones=minLength=5; maxLength=100 |  |
| `extension.nombRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable de la operación por parte del receptor \| restricciones=minLength=5; maxLength=100 |  |
| `extension.observaciones` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maxLength=3000 |  |
| `extension.placaVehiculo` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Placa de vehículo \| restricciones=maxLength=10 |  |
| `identificacion.motivoContin` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `identificacion.motivoContin` | `restriccion_modificada` | `maxLength` | 150 | 500 |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-01-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-01-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15} |
| `identificacion.version` | `restriccion_modificada` | `const` | 1 | 2 |
| `otrosDocumentos[].codDocAsociado` | `type_modificado` | `type` | integer | integer\|null |
| `otrosDocumentos[].descDocumento` | `restriccion_modificada` | `minimum` |  | 3 |
| `otrosDocumentos[].detalleDocumento` | `restriccion_modificada` | `minimum` |  | 3 |
| `otrosDocumentos[].medico.docIdentificacion` | `restriccion_modificada` | `minLength` | 2 | 1 |
| `otrosDocumentos[].medico.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `otrosDocumentos[].medico.nombre` | `type_modificado` | `type` | string | string\|null |
| `otrosDocumentos[].medico.nombre` | `restriccion_modificada` | `minimum` |  | 1 |
| `otrosDocumentos[].medico.tipoServicio` | `type_modificado` | `type` | number | number\|null |
| `receptor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` |  | 6 |
| `receptor.direccion.complemento` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `receptor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Receptor) |
| `receptor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `receptor.numDocumento` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `receptor.tipoDocumento` | `restriccion_modificada` | `enum` | [null,"36","13","02","03","37"] |  |
| `resumen.condicionOperacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `resumen.descuExenta` | `description_modificado` | `description` | Monto global de Descuento, Bonificación, Rebajas y otros a ventas exentas | Descuento global a ventas exentas |
| `resumen.descuGravada` | `description_modificado` | `description` | Monto global de Descuento, Bonificación, Rebajas y otros a ventas gravadas | Descuento global a ventas gravadas |
| `resumen.descuNoSuj` | `description_modificado` | `description` | Monto global de Descuento, Bonificación, Rebajas y otros a ventas no sujetas | Descuento global a ventas no sujetas |
| `resumen.ivaRete` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.ivaRete1` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.observaciones` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=minLength=1; maxLength=3000 |
| `resumen.pagos[].codigo` | `type_modificado` | `type` | string | string\|null |
| `resumen.pagos[].codigo` | `restriccion_modificada` | `pattern` | ^(0[1-9]\|\|1[0-4]\|\|99)$ |  |
| `resumen.pagos[].periodo` | `restriccion_modificada` | `exclusiveMinimum` |  | 0 |
| `resumen.pagos[].plazo` | `restriccion_modificada` | `pattern` | ^0[1-3]$ |  |
| `resumen.porcentajeDescuento` | `description_modificado` | `description` | Porcentaje del monto global de Descuento, Bonificación, Rebajas y otros | Porcentaje de Descuento |
| `resumen.reteRenta` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Retención Renta \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.saldoFavor` | `restriccion_modificada` | `exclusiveMinimum` |  | -100000000000 |
| `resumen.saldoFavor` | `restriccion_modificada` | `exclusiveMaximum` | 100000000000 |  |
| `resumen.subTotalVentas` | `description_modificado` | `description` | Suma de operaciones sin impuestos | Suma de operaciones |
| `resumen.totalDescu` | `description_modificado` | `description` | Total del monto de Descuento, Bonificación, Rebajas | Total de Descuentos |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `description_modificado` | `description` | Valor en Letras | Valor en Condicion de la Operacion |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 1 |
| `resumen.tributos[].codigo` | `restriccion_modificada` | `enum` | ["C3","59","71","D1","C8","C5","C6","C7","D5","19","28","31","32","33","34","35","36","37","38","39","42","43","44","50","51","52","53","54","55","58","77","78","79","85","86","91","92","A1","A5","A7","A9"] |  |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `minLength` | 2 | 1 |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `maxLength` | 150 | 300 |
| `ventaTercero.codDomiciliado` | `agregado` | `campo` |  | tipo=integer\|null \| requerido=si \| descripcion=Domicilio Fiscal |
| `ventaTercero.nit` | `type_modificado` | `type` | string | string\|null |
| `ventaTercero.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `ventaTercero.nit` | `restriccion_modificada` | `minLength` |  | 1 |
| `ventaTercero.nit` | `restriccion_modificada` | `maxLength` |  | 20 |
| `ventaTercero.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del Tercero | Nombre del Tercero |

### fe-fex

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `apendice` | `description_modificado` | `description` | Apéndice | Sección Apéndice |
| `apendice[].campo` | `restriccion_modificada` | `minLength` |  | 1 |
| `apendice[].etiqueta` | `restriccion_modificada` | `minLength` |  | 1 |
| `apendice[].valor` | `restriccion_modificada` | `minLength` |  | 1 |
| `compraTercero` | `agregado` | `campo` |  | tipo=object\|null \| requerido=si \| descripcion=Compras por cuenta de terceros \| restricciones=additionalProperties=false |
| `compraTercero.nombre` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Nombre del Tercero \| restricciones=minLength=1; maxLength=250 |
| `compraTercero.numDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación del Tercero \| restricciones=minLength=1; maxLength=20 |
| `cuerpoDocumento[].codTributo` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Tributo sujeto a cálculo de IVA \| restricciones=minLength=2; maxLength=2 |
| `cuerpoDocumento[].codigo` | `restriccion_modificada` | `maxLength` | 200 | 25 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].montoDescu` | `description_modificado` | `description` | Descuento, Bonificación, Rebajas por ítem | Descuento por ítem |
| `cuerpoDocumento[].noGravado` | `description_modificado` | `description` | Cargos / Abonos que no afectan la base imponible | Cargos/Abonos que no afectan la base imponible |
| `cuerpoDocumento[].numeroDocumento` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Número de Documento Relacionado \| restricciones=minimum=1; maximum=36 |
| `cuerpoDocumento[].precioUni` | `restriccion_modificada` | `minimum` |  | 0 |
| `cuerpoDocumento[].tipoItem` | `agregado` | `campo` |  | tipo=integer \| requerido=si \| descripcion=Tipo de ítem |
| `documentoRelacionado` | `agregado` | `campo` |  | tipo=array\|null \| requerido=si \| descripcion=Documentos Relacionados \| restricciones=minItems=1; maxItems=50 |
| `documentoRelacionado[]` | `agregado` | `campo` |  | tipo=object \| requerido=si \| restricciones=additionalProperties=false |
| `documentoRelacionado[].fechaEmision` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Fecha de Generación del Documento Relacionado \| restricciones=format=date |
| `documentoRelacionado[].numeroDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Número de documento relacionado \| restricciones=minLength=1; maxLength=36 |
| `documentoRelacionado[].tipoDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Tipo de Documento Relacionado |
| `documentoRelacionado[].tipoGeneracion` | `agregado` | `campo` |  | tipo=integer \| requerido=si \| descripcion=Tipo de Generación del Documento relacionado |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `emisor.codEstableMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.codPuntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) Asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `emisor.descActividad` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.departamento` | `restriccion_modificada` | `minLength` |  | 1 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `maxLength` |  | 2 |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.direccion.municipio` | `restriccion_modificada` | `minLength` |  | 1 |
| `emisor.direccion.municipio` | `restriccion_modificada` | `maxLength` |  | 2 |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nit` | `restriccion_modificada` | `maxLength` | 14 |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nombreComercial` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.regimen` | `restriccion_modificada` | `minLength` |  | 1 |
| `emisor.regimen` | `restriccion_modificada` | `maxLength` |  | 13 |
| `emisor.regimen` | `restriccion_modificada` | `maximum` | 13 |  |
| `emisor.telefono` | `type_modificado` | `type` | string | string\|null |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `emisor.tipoItemExpor` | `description_modificado` | `description` | Tipo de ítem | Tipo de exportación |
| `emisor.tipoItemExpor` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `emisor.tipoRegimen` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Tipo Régimen |
| `identificacion.motivoContigencia` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Motivo de Contingencia \| restricciones=minLength=1; maxLength=500 |  |
| `identificacion.motivoContin` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Motivo de Contingencia \| restricciones=minLength=1; maxLength=500 |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-11-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-11-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15}$ |
| `identificacion.version` | `restriccion_modificada` | `const` | 1 | 3 |
| `otrosDocumentos[].codDocAsociado` | `type_modificado` | `type` | integer | integer\|null |
| `otrosDocumentos[].codDocAsociado` | `restriccion_modificada` | `enum` | [1,2,3,4] |  |
| `otrosDocumentos[].descDocumento` | `restriccion_modificada` | `minLength` |  | 3 |
| `otrosDocumentos[].detalleDocumento` | `restriccion_modificada` | `minLength` |  | 3 |
| `otrosDocumentos[].modoTransp` | `restriccion_modificada` | `enum` | [null,1,2,3,4,5,6,7] |  |
| `otrosDocumentos[].modoTransp` | `restriccion_modificada` | `maximum` | 4 | 7 |
| `otrosDocumentos[].numConductor` | `description_modificado` | `description` | N documento de identificación del Conductor | Numero de documento de identificación del Conductor |
| `receptor` | `type_modificado` | `type` | object\|null | object |
| `receptor.codPais` | `restriccion_modificada` | `enum` | ["9320","9539","9565","9905","9999","9303","9306","9309","9310","9315","9317","9318","9319","9324","9327","9330","9333","9336","9339","9342","9345","9348","9349","9350","9354","9357","9360","9363","9366","9372","9374","9375","9377","9378","9381","9384","9387","9390","9393","9394","9396","9399","9402","9405","9408","9411","9414","9417","9420","9423","9426","9432","9435","9438","9440","9441","9444","9446","9447","9450","9453","9456","9459","9462","9465","9468","9471","9474","9477","9480","9481","9483","9486","9487","9495","9498","9501","9504","9507","9513","9516","9519","9522","9525","9526","9528","9531","9534","9537","9540","9543","9544","9546","9549","9552","9555","9558","9561","9564","9567","9570","9573","9576","9577","9582","9585","9591","9594","9597","9600","9601","9603","9606","9609","9611","9612","9615","9618","9621","9624","9627","9633","9636","9638","9639","9642","9645","9648","9651","9660","9663","9666","9669","9672","9675","9677","9678","9679","9680","9681","9682","9683","9684","9687","9690","9691","9693","9696","9699","9702","9705","9706","9707","9708","9714","9717","9720","9722","9723","9725","9726","9727","9729","9732","9735","9738","9739","9740","9741","9744","9747","9750","9756","9758","9759","9760","9850","9862","9863","9865","9886","9898","9899","9897","9887","9571","9300","9369","9439","9510","9579","9654","9711","9736","9737","9640","9641","9673","9472","9311","9733","9541","9746","9551","9451","9338","9353","9482","9494","9524","9304","9332","9454","9457","9489","9491","9492","9523","9530","9532","9535","9542","9547","9548","9574","9598","9602","9607","9608","9623","9652","9692","9709","9712","9716","9718","9719","9751","9452","9901","9902","9903","9664","9415","9904","9514","9906","9359","9493","9521","9533","9538","9689","9713","9449","9888","9490","9527","9529","9536","9545","9568","9610","9622","9643","9667","9676","9685","9686","9688","9715","9900","9371","9376","9907"] |  |
| `receptor.complemento` | `description_modificado` | `description` | Colocar las especificaciones de la direccion | Dirección complemento |
| `receptor.complemento` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `receptor.complemento` | `restriccion_modificada` | `maxLength` | 300 | 200 |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nombreComercial` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre Comercial (Receptor) |
| `receptor.numDocumento` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `receptor.telefono` | `restriccion_modificada` | `maxLength` | 50 | 30 |
| `receptor.tipoDocumento` | `restriccion_modificada` | `enum` | ["36","13","02","03","37"] |  |
| `receptor.tipoDocumento` | `restriccion_modificada` | `minLength` |  | 2 |
| `receptor.tipoDocumento` | `restriccion_modificada` | `maxLength` |  | 2 |
| `receptor.tipoPersona` | `description_modificado` | `description` | tipo de persona Juridica o persona natural | Tipo de Receptor |
| `receptor.tipoPersona` | `restriccion_modificada` | `enum` | [1,2] |  |
| `resumen` | `restriccion_modificada` | `minItems` |  | 1 |
| `resumen` | `restriccion_modificada` | `maxItems` |  | 1 |
| `resumen.codIncoterms` | `restriccion_modificada` | `maxLength` |  | 2 |
| `resumen.condicionOperacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `resumen.descIncoterms` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `resumen.descuGravada` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Descuento global a ventas gravadas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.descuento` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Monto global de Descuento, Bonificación, Rebajas y otros a ventas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.montoTotalOperacion` | `restriccion_modificada` | `minimum` |  | 0 |
| `resumen.montoTotalOperacion` | `restriccion_modificada` | `exclusiveMinimum` | 0 |  |
| `resumen.numPagoElectronico` | `restriccion_modificada` | `minLength` |  | 1 |
| `resumen.observaciones` | `restriccion_modificada` | `minLength` |  | 1 |
| `resumen.observaciones` | `restriccion_modificada` | `maxLength` | 500 | 3000 |
| `resumen.pagos[].codigo` | `type_modificado` | `type` | string | string\|null |
| `resumen.pagos[].codigo` | `restriccion_modificada` | `pattern` | ^(0[1-9]\|\|1[0-4]\|\|99)$ |  |
| `resumen.pagos[].periodo` | `restriccion_modificada` | `exclusiveMinimum` |  | 0 |
| `resumen.pagos[].plazo` | `restriccion_modificada` | `pattern` | ^0[1-3]$ |  |
| `resumen.porcentajeDescuento` | `description_modificado` | `description` | Porcentaje del monto global de Descuento, Bonificación, Rebajas y otros | Porcentaje de Descuento |
| `resumen.saldoFavor` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Saldo a Favor \| restricciones=exclusiveMinimum=-100000000000; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.seguro` | `type_modificado` | `type` | number\|null | number |
| `resumen.totalDescu` | `description_modificado` | `description` | Total del monto de Descuento, Bonificación, Rebajas | Total de Descuentos |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `description_modificado` | `description` | Total en Letras | Valor en Letras |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 1 |
| `resumen.totalNoGravado` | `description_modificado` | `description` | Total Cargos / Abonos que no afectan la base imponible | Total Cargos/Abonos que no afectan la base imponible |
| `resumen.totalNoOnerosas` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Transferencias de bienes no onerosas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.totalPagar` | `description_modificado` | `description` | Total a Pagar | Total a pagar |
| `resumen.tributos` | `agregado` | `campo` |  | tipo=array\|null \| requerido=si \| descripcion=Resumen Codigo de Tributos \| restricciones=uniqueItems=true |
| `resumen.tributos[]` | `agregado` | `campo` |  | tipo=object \| requerido=si \| restricciones=additionalProperties=false |
| `resumen.tributos[].codigo` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Resumen Código de Tributo \| restricciones=minLength=2; maxLength=2 |
| `resumen.tributos[].descripcion` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Nombre del Tributo \| restricciones=minLength=1; maxLength=300 |
| `resumen.tributos[].valor` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Valor del Tributo \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `ventaTercero.codDomiciliado` | `agregado` | `campo` |  | tipo=integer\|null \| requerido=si \| descripcion=Domicilio Fiscal |
| `ventaTercero.nit` | `type_modificado` | `type` | string | string\|null |
| `ventaTercero.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `ventaTercero.nit` | `restriccion_modificada` | `minLength` |  | 1 |
| `ventaTercero.nit` | `restriccion_modificada` | `maxLength` |  | 20 |
| `ventaTercero.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del Tercero | Nombre, denominaci del Tercero |

### fe-fse

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `cuerpoDocumento[].compra` | `description_modificado` | `description` | Ventas | Compras |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].montoDescu` | `description_modificado` | `description` | Descuento, Bonificación, Rebajas por ítem | Descuento por ítem |
| `cuerpoDocumento[].tipoItem` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `cuerpoDocumento[].uniMedida` | `restriccion_modificada` | `enum` | [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,59,99] |  |
| `cuerpoDocumento[].uniMedida` | `restriccion_modificada` | `minimum` |  | 1 |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `emisor.codActividad` | `restriccion_modificada` | `minLength` |  | 5 |
| `emisor.codActividad` | `restriccion_modificada` | `maxLength` |  | 6 |
| `emisor.codEstable` | `restriccion_modificada` | `minLength` | 1 | 4 |
| `emisor.codEstable` | `restriccion_modificada` | `maxLength` | 10 | 4 |
| `emisor.codEstableMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.codPuntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) Asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `emisor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `emisor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-14-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-14-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15}$ |
| `identificacion.version` | `restriccion_modificada` | `const` | 1 | 2 |
| `receptor` | `agregado` | `campo` |  | tipo=object \| requerido=si \| descripcion=Sujeto Excluido (Receptor) \| restricciones=additionalProperties=false |
| `receptor.codActividad` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código de Actividad Económica (Receptor) |
| `receptor.correo` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Correo electrónico (Receptor) \| restricciones=minLength=6; maxLength=100 |
| `receptor.descActividad` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Actividad Económica (Receptor) \| restricciones=minLength=5; maxLength=150 |
| `receptor.direccion` | `agregado` | `campo` |  | tipo=object \| requerido=si \| descripcion=Dirección (Receptor) \| restricciones=additionalProperties=false |
| `receptor.direccion.complemento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección: complemento (Receptor) \| restricciones=minLength=1; maxLength=200 |
| `receptor.direccion.departamento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección: Departamento (Receptor) |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Receptor) |
| `receptor.direccion.municipio` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección: Municipio (Receptor) |
| `receptor.nombre` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Nombre (Receptor) \| restricciones=minLength=1; maxLength=250 |
| `receptor.numDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación (Receptor) \| restricciones=minLength=1; maxLength=20 |
| `receptor.telefono` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Teléfono (Receptor) \| restricciones=minLength=8; maxLength=30 |
| `receptor.tipoDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Tipo de documento de identificación (Receptor) |
| `resumen.condicionOperacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `resumen.descu` | `description_modificado` | `description` | Monto global de Descuento, Bonificación, Rebajas y otros al total de operaciones. | Descuento global al total de operaciones. |
| `resumen.ivaRete1` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.observaciones` | `restriccion_modificada` | `minLength` |  | 1 |
| `resumen.pagos[].codigo` | `type_modificado` | `type` | string | string\|null |
| `resumen.pagos[].codigo` | `restriccion_modificada` | `pattern` | ^(0[1-9]\|\|1[0-4]\|\|99)$ |  |
| `resumen.pagos[].plazo` | `restriccion_modificada` | `enum` | [null,"01","02","03"] |  |
| `resumen.pagos[].plazo` | `restriccion_modificada` | `pattern` | ^0[1-3]$ |  |
| `resumen.totalDescu` | `type_modificado` | `type` | number\|null | number |
| `resumen.totalDescu` | `description_modificado` | `description` | Total del monto de Descuento, Bonificación, Rebajas | Total de Descuentos |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `description_modificado` | `description` | Total en Letras | Valor en Letras |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 1 |
| `sujetoExcluido` | `eliminado` | `campo` | tipo=object \| requerido=si \| descripcion=Receptor \| restricciones=additionalProperties=false |  |
| `sujetoExcluido.codActividad` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código de Actividad Económica (Receptor) \| restricciones=pattern=^[0-9]{2,6}$ |  |
| `sujetoExcluido.correo` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Correo electrónico (Receptor) \| restricciones=format=email; maxLength=100 |  |
| `sujetoExcluido.descActividad` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Actividad Económica (Receptor) \| restricciones=minLength=1; maxLength=150 |  |
| `sujetoExcluido.direccion` | `eliminado` | `campo` | tipo=object \| requerido=si \| descripcion=Dirección (Receptor) \| restricciones=additionalProperties=false |  |
| `sujetoExcluido.direccion.complemento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección: complemento (Receptor) \| restricciones=minLength=1; maxLength=200 |  |
| `sujetoExcluido.direccion.departamento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección: Departamento (Receptor) \| restricciones=pattern=^0[1-9]\|1[0-4]$ |  |
| `sujetoExcluido.direccion.municipio` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Dirección: Municipio (Receptor) \| restricciones=pattern=^[0-9]{2}$ |  |
| `sujetoExcluido.nombre` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Nombre, denominación o razón social del contribuyente (Receptor) \| restricciones=minLength=1; maxLength=250 |  |
| `sujetoExcluido.numDocumento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación (Receptor) \| restricciones=minLength=1; maxLength=20 |  |
| `sujetoExcluido.telefono` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Teléfono (Receptor) \| restricciones=minLength=8; maxLength=30 |  |
| `sujetoExcluido.tipoDocumento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de documento de identificación (Receptor) \| restricciones=enum=["36","13","02","03","37"] |  |

### fe-nc

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `cuerpoDocumento[].codTributo` | `description_modificado` | `description` | Tributo sujeto a cálculo de IVA | Tributo sujeto a cálculo de IVA. |
| `cuerpoDocumento[].codTributo` | `restriccion_modificada` | `enum` | [null,"A8","57","90","D4","D5","25","A6"] |  |
| `cuerpoDocumento[].descripcion` | `type_modificado` | `type` | string\|null | string |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].ivaPerci` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA percibido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `cuerpoDocumento[].ivaRete` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion= IVA retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `cuerpoDocumento[].montoDescu` | `description_modificado` | `description` | Descuento, Bonificación, Rebajas por ítem | Descuento por ítem |
| `cuerpoDocumento[].noGravado` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Cargos/Abonos que no afectan la base imponible \| restricciones=exclusiveMinimum=-100000000000; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `cuerpoDocumento[].precioUni` | `restriccion_modificada` | `minimum` |  | 0 |
| `cuerpoDocumento[].tipoItem` | `restriccion_modificada` | `enum` | [1,2,3,4] |  |
| `cuerpoDocumento[].totalIva` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA 13% \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `documentoRelacionado[].tipoDocumento` | `description_modificado` | `description` | Tipo de Documento Tributario Relacionado | Tipo de Documento Relacionado |
| `documentoRelacionado[].tipoDocumento` | `restriccion_modificada` | `enum` | ["03","07"] |  |
| `documentoRelacionado[].tipoGeneracion` | `description_modificado` | `description` | Tipo de Generación del Documento Tributario relacionado | Tipo de Generación del Documento relacionado |
| `documentoRelacionado[].tipoGeneracion` | `restriccion_modificada` | `enum` | [1,2] |  |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `emisor.codActividad` | `restriccion_modificada` | `minLength` |  | 5 |
| `emisor.codActividad` | `restriccion_modificada` | `maxLength` |  | 6 |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |
| `emisor.nrc` | `type_modificado` | `type` | string | string\|null |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `emisor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `extension` | `eliminado` | `campo` | tipo=object\|null \| requerido=si \| descripcion=Extensión \| restricciones=additionalProperties=false |  |
| `extension.docuEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación de quien genera el DTE \| restricciones=minLength=1; maxLength=25 |  |
| `extension.docuRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación del responsable de la operación por parte del receptor \| restricciones=minLength=1; maxLength=25 |  |
| `extension.nombEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable que Genera el DTE \| restricciones=minLength=1; maxLength=100 |  |
| `extension.nombRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable de la operación por parte del receptor \| restricciones=minLength=1; maxLength=100 |  |
| `extension.observaciones` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maxLength=3000 |  |
| `identificacion.fusion` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Fusiónes y otros \| restricciones=pattern=^(?!([0-9])\1+$)(?!0{7})([0-9]{14}\|[0-9]{9})$ |
| `identificacion.motivoContin` | `restriccion_modificada` | `maxLength` | 150 | 500 |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-05-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-05-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15}$ |
| `identificacion.version` | `restriccion_modificada` | `const` | 3 | 4 |
| `receptor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `receptor.codActividad` | `restriccion_modificada` | `minLength` |  | 5 |
| `receptor.codActividad` | `restriccion_modificada` | `maxLength` |  | 6 |
| `receptor.correo` | `type_modificado` | `type` | string | string\|null |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` |  | 1 |
| `receptor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `receptor.direccion.complemento` | `description_modificado` | `description` | Dirección: complemento (Receptor) | Dirección complemento (Receptor) |
| `receptor.direccion.departamento` | `description_modificado` | `description` | Dirección: Departamento (Receptor) | Dirección Departamento (Receptor) |
| `receptor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Receptor) |
| `receptor.direccion.municipio` | `description_modificado` | `description` | Dirección: Municipio (Receptor) | Dirección Municipio (Receptor) |
| `receptor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `receptor.nit` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=NIT (Receptor) \| restricciones=pattern=^([0-9]{14}\|[0-9]{9})$ |  |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nrc` | `type_modificado` | `type` | string | string\|null |
| `receptor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `receptor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `receptor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `receptor.numDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Número de documento de Identificacion (Receptor) \| restricciones=minLength=1; maxLength=20 |
| `receptor.tipoDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Tipo de Documento identificacion (Receptor) |
| `resumen.codigoRetencionMH` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código retención MH \| restricciones=maximum=2 |
| `resumen.condicionOperacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `resumen.descuExenta` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Monto global de Descuento, Bonificación, Rebajas y otros a ventas exentas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.descuGravada` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Monto global de Descuento, Bonificación, Rebajas y otros a ventas gravadas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.descuNoSuj` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Monto global de Descuento, Bonificación, Rebajas y otros a ventas no sujetas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.ivaPerci` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA Percibido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.ivaPerci1` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=IVA Percibido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.ivaRete` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.ivaRete1` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.montoTotalOperacion` | `restriccion_modificada` | `minimum` |  | 0 |
| `resumen.montoTotalOperacion` | `restriccion_modificada` | `exclusiveMinimum` | 0 |  |
| `resumen.observaciones` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maximum=3000 |
| `resumen.reteRenta` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Retención Renta \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.subTotal` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Sub-Total \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.subTotalVentas` | `restriccion_modificada` | `minimum` |  | 0 |
| `resumen.totalDescu` | `description_modificado` | `description` | Total del monto de Descuento, Bonificación, Rebajas | Total de Descuento |
| `resumen.totalIva` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA 13% \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 8 |
| `resumen.totalNoGravado` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Total Cargos/Abonos que no afectan la base imponible \| restricciones=exclusiveMinimum=-100000000000; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.totalPagar` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Total a Pagar \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `minLength` | 2 | 1 |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `maxLength` | 150 | 300 |
| `ventaTercero.codDomiciliado` | `agregado` | `campo` |  | tipo=integer\|null \| requerido=si \| descripcion=Domicilio Fiscal |
| `ventaTercero.nit` | `type_modificado` | `type` | string | string\|null |
| `ventaTercero.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `ventaTercero.nit` | `restriccion_modificada` | `minLength` |  | 1 |
| `ventaTercero.nit` | `restriccion_modificada` | `maxLength` |  | 20 |
| `ventaTercero.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del Tercero | Nombre del Tercero |
| `ventaTercero.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `ventaTercero.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |

### fe-nd

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `cuerpoDocumento[].` | `agregado` | `campo` |  | tipo=array\|null \| requerido=si \| descripcion=Código del Tributo \| restricciones=minItems=1; uniqueItems=true |
| `cuerpoDocumento[].[]` | `agregado` | `campo` |  | tipo=string \| requerido=si \| restricciones=minLength=2; maxLength=2 |
| `cuerpoDocumento[].codTributo` | `restriccion_modificada` | `enum` | [null,"A8","57","90","D4","D5","25","A6"] |  |
| `cuerpoDocumento[].descripcion` | `type_modificado` | `type` | string\|null | string |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].ivaPerci` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA percibido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `cuerpoDocumento[].ivaRete` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion= IVA retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `cuerpoDocumento[].montoDescu` | `description_modificado` | `description` | Descuento, Bonificación, Rebajas por ítem | Descuento por ítem |
| `cuerpoDocumento[].noGravado` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Cargos/Abonos que no afectan la base imponible \| restricciones=exclusiveMinimum=-100000000000; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `cuerpoDocumento[].precioUni` | `restriccion_modificada` | `minimum` |  | 0 |
| `cuerpoDocumento[].tipoItem` | `restriccion_modificada` | `enum` | [1,2,3,4] |  |
| `cuerpoDocumento[].totalIva` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA 13% \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=1e-8 |
| `cuerpoDocumento[].tributos` | `eliminado` | `campo` | tipo=array\|null \| requerido=si \| descripcion=Código del Tributo \| restricciones=minItems=1; uniqueItems=true |  |
| `cuerpoDocumento[].tributos[]` | `eliminado` | `campo` | tipo=string \| requerido=si \| restricciones=minLength=2; maxLength=2 |  |
| `documentoRelacionado[].tipoDocumento` | `description_modificado` | `description` | Tipo de Documento Tributario Relacionado | Tipo de Documento Relacionado |
| `documentoRelacionado[].tipoDocumento` | `restriccion_modificada` | `enum` | ["03","07"] |  |
| `documentoRelacionado[].tipoGeneracion` | `description_modificado` | `description` | Tipo de Generación del Documento Tributario relacionado | Tipo de Generación del Documento relacionado |
| `documentoRelacionado[].tipoGeneracion` | `restriccion_modificada` | `enum` | [1,2] |  |
| `emisor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `emisor.codActividad` | `restriccion_modificada` | `minLength` |  | 5 |
| `emisor.codActividad` | `restriccion_modificada` | `maxLength` |  | 6 |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |
| `emisor.nrc` | `type_modificado` | `type` | string | string\|null |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `emisor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `emisor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `emisor.telefono` | `type_modificado` | `type` | string\|null | string |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `extension` | `eliminado` | `campo` | tipo=object\|null \| requerido=si \| descripcion=Extensión \| restricciones=additionalProperties=false |  |
| `extension.docuEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación de quien genera el DTE \| restricciones=minLength=1; maxLength=25 |  |
| `extension.docuRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación del responsable de la operación por parte del receptor \| restricciones=minLength=1; maxLength=25 |  |
| `extension.nombEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable que Genera el DTE \| restricciones=minLength=1; maxLength=100 |  |
| `extension.nombRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable de la operación por parte del receptor \| restricciones=minLength=1; maxLength=100 |  |
| `extension.observaciones` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maxLength=3000 |  |
| `identificacion.codigoGeneracion` | `restriccion_modificada` | `pattern` | ^[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}$ | ^(?!.*[
])[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}$ |
| `identificacion.fusion` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Fusiónes y otros \| restricciones=pattern=^(?!.*[
])([0-9]{14}\|[0-9]{9})$ |
| `identificacion.horEmi` | `restriccion_modificada` | `pattern` | ^(0[0-9]\|1[0-9]\|2[0-3]):[0-5][0-9]:[0-5][0-9]?$ | ^(?!.*[
])(0[0-9]\|1[0-9]\|2[0-3]):[0-5][0-9]:[0-5][0-9]?$ |
| `identificacion.motivoContin` | `restriccion_modificada` | `maxLength` | 150 | 500 |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-06-[A-Z0-9]{8}-[0-9]{15}$ | ^(?!.*[
])DTE-06-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15}$ |
| `identificacion.version` | `restriccion_modificada` | `const` | 3 | 4 |
| `receptor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `receptor.correo` | `type_modificado` | `type` | string | string\|null |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` |  | 1 |
| `receptor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `receptor.direccion.complemento` | `description_modificado` | `description` | Dirección: complemento (Receptor) | Dirección complemento (Receptor) |
| `receptor.direccion.departamento` | `description_modificado` | `description` | Dirección: Departamento (Receptor) | Dirección Departamento (Receptor) |
| `receptor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Receptor) |
| `receptor.direccion.municipio` | `description_modificado` | `description` | Dirección: Municipio (Receptor) | Dirección Municipio (Receptor) |
| `receptor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `receptor.nit` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=NIT (Receptor) \| restricciones=pattern=^([0-9]{14}\|[0-9]{9})$ |  |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nrc` | `type_modificado` | `type` | string | string\|null |
| `receptor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `receptor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `receptor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `receptor.numDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Número de documento de Identificación (Receptor) \| restricciones=minLength=1; maxLength=20 |
| `receptor.tipoDocumento` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Tipo de documento de identificación (Receptor) |
| `resumen.` | `agregado` | `campo` |  | tipo=array\|null \| requerido=si \| descripcion=Resumen de  \| restricciones=uniqueItems=true |
| `resumen.[]` | `agregado` | `campo` |  | tipo=object \| requerido=si \| restricciones=additionalProperties=false |
| `resumen.[].codigo` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Resumen Código de Tributo \| restricciones=minLength=2; maxLength=2 |
| `resumen.[].descripcion` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Nombre del Tributo \| restricciones=minLength=1; maxLength=300 |
| `resumen.[].valor` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Valor del Tributo \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.codigoRetencionMH` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Código retención MH \| restricciones=maximum=2 |
| `resumen.condicionOperacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
| `resumen.descuExenta` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Monto global de Descuento, Bonificación, Rebajas y otros a ventas exentas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.descuGravada` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Monto global de Descuento, Bonificación, Rebajas y otros a ventas gravadas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.descuNoSuj` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Monto global de Descuento, Bonificación, Rebajas y otros a ventas no sujetas \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.ivaPerci` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA Percibido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.ivaPerci1` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=IVA Percibido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.ivaRete` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.ivaRete1` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=IVA Retenido \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.montoTotalOperacion` | `restriccion_modificada` | `minimum` |  | 0 |
| `resumen.montoTotalOperacion` | `restriccion_modificada` | `exclusiveMinimum` | 0 |  |
| `resumen.observaciones` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maximum=3000 |
| `resumen.reteRenta` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Retención Renta \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.subTotal` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Sub-Total \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `resumen.subTotalVentas` | `restriccion_modificada` | `minimum` |  | 0 |
| `resumen.totalDescu` | `description_modificado` | `description` | Total del monto de Descuento, Bonificación, Rebajas | Total de Descuento |
| `resumen.totalIva` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=IVA 13% \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 8 |
| `resumen.totalNoGravado` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Total Cargos/Abonos que no afectan la base imponible \| restricciones=exclusiveMinimum=-100000000000; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.totalPagar` | `agregado` | `campo` |  | tipo=number \| requerido=si \| descripcion=Total a Pagar \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |
| `resumen.tributos` | `eliminado` | `campo` | tipo=array\|null \| requerido=si \| descripcion=Resumen de tributos \| restricciones=uniqueItems=true |  |
| `resumen.tributos[]` | `eliminado` | `campo` | tipo=object \| requerido=si \| restricciones=additionalProperties=false |  |
| `resumen.tributos[].codigo` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Resumen Código de Tributo \| restricciones=minLength=2; maxLength=2 |  |
| `resumen.tributos[].descripcion` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Nombre del Tributo \| restricciones=minLength=2; maxLength=150 |  |
| `resumen.tributos[].valor` | `eliminado` | `campo` | tipo=number \| requerido=si \| descripcion=Valor del Tributo \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `ventaTercero.codDomiciliado` | `agregado` | `campo` |  | tipo=integer\|null \| requerido=si \| descripcion=Domicilio Fiscal |
| `ventaTercero.nit` | `type_modificado` | `type` | string | string\|null |
| `ventaTercero.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `ventaTercero.nit` | `restriccion_modificada` | `minLength` |  | 1 |
| `ventaTercero.nit` | `restriccion_modificada` | `maxLength` |  | 20 |
| `ventaTercero.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del Tercero | Nombre del Tercero |
| `ventaTercero.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `ventaTercero.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |

### fe-nr

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `cuerpoDocumento[].codTributo` | `restriccion_modificada` | `enum` | [null,"A8","57","90","D4","D5","25","A6"] |  |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `minLength` |  | 1 |
| `cuerpoDocumento[].descripcion` | `restriccion_modificada` | `maxLength` | 1000 | 1500 |
| `cuerpoDocumento[].montoDescu` | `description_modificado` | `description` | Descuento, Bonificación, Rebajas por ítem | Descuento por ítem |
| `cuerpoDocumento[].precioUni` | `restriccion_modificada` | `minimum` |  | 0 |
| `cuerpoDocumento[].tipoItem` | `restriccion_modificada` | `enum` | [1,2,3,4] |  |
| `documentoRelacionado[].tipoDocumento` | `description_modificado` | `description` | Tipo de Documento Tributario Relacionado | Tipo de Documento Relacionado |
| `documentoRelacionado[].tipoDocumento` | `restriccion_modificada` | `enum` | ["01","03"] | ["01","03","11"] |
| `documentoRelacionado[].tipoGeneracion` | `description_modificado` | `description` | Tipo de Generación del Documento Tributario relacionado | Tipo de Generación del Documento relacionado |
| `emisor.codActividad` | `restriccion_modificada` | `minLength` |  | 5 |
| `emisor.codActividad` | `restriccion_modificada` | `maxLength` |  | 6 |
| `emisor.codEstable` | `description_modificado` | `description` | Código del establecimiento asignado por el contribuyente | Código del establecimiento asignado por el contribuyente. |
| `emisor.codEstable` | `restriccion_modificada` | `minLength` | 1 | 4 |
| `emisor.codEstable` | `restriccion_modificada` | `maxLength` | 10 | 4 |
| `emisor.codEstableMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del establecimiento asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.codPuntoVentaMH` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Código del Punto de Venta (Emisor) Asignado por el MH \| restricciones=minLength=4; maxLength=4 |  |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 6 |
| `emisor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `emisor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `emisor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `emisor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Emisor) | Nombre (Emisor) |
| `emisor.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |
| `emisor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ | ^[0-9]{2,8}$ |
| `emisor.nrc` | `restriccion_modificada` | `minLength` |  | 2 |
| `emisor.nrc` | `restriccion_modificada` | `maxLength` |  | 8 |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo de establecimiento (Emisor) \| restricciones=enum=["01","02","04","07","20"] |  |
| `extension` | `eliminado` | `campo` | tipo=object\|null \| requerido=si \| descripcion=Extensión \| restricciones=additionalProperties=false |  |
| `extension.docuEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación de quien genera el DTE \| restricciones=minLength=1; maxLength=25 |  |
| `extension.docuRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Documento de identificación del responsable de la operación por parte del receptor \| restricciones=minLength=1; maxLength=25 |  |
| `extension.nombEntrega` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable que Genera el DTE \| restricciones=minLength=1; maxLength=100 |  |
| `extension.nombRecibe` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre del responsable de la operación por parte del receptor \| restricciones=minLength=1; maxLength=100 |  |
| `extension.observaciones` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maxLength=3000 |  |
| `identificacion.motivoContin` | `restriccion_modificada` | `maxLength` | 150 | 500 |
| `identificacion.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-04-[A-Z0-9]{8}-[0-9]{15}$ | ^DTE-04-(M\|B\|S\|P)([0-9]{3})(P)([0-9]{3})-[0-9]{15}$ |
| `identificacion.version` | `restriccion_modificada` | `const` | 3 | 4 |
| `receptor.codActividad` | `type_modificado` | `type` | string\|null | string |
| `receptor.codActividad` | `restriccion_modificada` | `pattern` | ^[0-9]{2,6}$ |  |
| `receptor.correo` | `type_modificado` | `type` | string | string\|null |
| `receptor.correo` | `restriccion_modificada` | `format` | email |  |
| `receptor.correo` | `restriccion_modificada` | `minLength` |  | 6 |
| `receptor.descActividad` | `type_modificado` | `type` | string\|null | string |
| `receptor.descActividad` | `restriccion_modificada` | `minLength` | 1 | 5 |
| `receptor.direccion` | `type_modificado` | `type` | object | null\|object |
| `receptor.direccion.departamento` | `restriccion_modificada` | `pattern` | ^0[1-9]\|1[0-4]$ |  |
| `receptor.direccion.distrito` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Dirección Distrito (Emisor) |
| `receptor.direccion.municipio` | `restriccion_modificada` | `pattern` | ^[0-9]{2}$ |  |
| `receptor.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del contribuyente (Receptor) | Nombre (Receptor) |
| `receptor.nrc` | `restriccion_modificada` | `pattern` | ^[0-9]{1,8}$ |  |
| `receptor.numDocumento` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `receptor.tipoDocumento` | `restriccion_modificada` | `enum` | ["36","13","02","03","37"] |  |
| `resumen.descuExenta` | `description_modificado` | `description` | Monto global de Descuento, Bonificación, Rebajas y otros a ventas exentas | Descuento global ventas exentas |
| `resumen.descuGravada` | `description_modificado` | `description` | Monto global de Descuento, Bonificación, Rebajas y otros a ventas gravadas | Descuento global ventas gravadas |
| `resumen.descuNoSuj` | `description_modificado` | `description` | Monto global de Descuento, Bonificación, Rebajas y otros a ventas no sujetas | Descuento global ventas no sujetas |
| `resumen.observaciones` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Observaciones \| restricciones=maxLength=3000 |
| `resumen.porcentajeDescuento` | `type_modificado` | `type` | number\|null | number |
| `resumen.porcentajeDescuento` | `description_modificado` | `description` | Porcentaje del monto global de Descuento, Bonificación, Rebajas y otros | Porcentaje de Descuento |
| `resumen.subTotalVentas` | `description_modificado` | `description` | Suma de operaciones sin impuestos | Suma de operaciones |
| `resumen.totalDescu` | `description_modificado` | `description` | Total del monto de Descuento, Bonificación, Rebajas | Total de descuento |
| `resumen.totalLetras` | `type_modificado` | `type` | string | string\|null |
| `resumen.totalLetras` | `restriccion_modificada` | `minLength` |  | 1 |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `minLength` | 2 | 1 |
| `resumen.tributos[].descripcion` | `restriccion_modificada` | `maxLength` | 150 | 300 |
| `ventaTercero.codDomiciliado` | `agregado` | `campo` |  | tipo=integer\|null \| requerido=si \| descripcion=Domicilio Fiscal |
| `ventaTercero.nit` | `type_modificado` | `type` | string | string\|null |
| `ventaTercero.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `ventaTercero.nit` | `restriccion_modificada` | `minLength` |  | 1 |
| `ventaTercero.nit` | `restriccion_modificada` | `maxLength` | 14 | 20 |
| `ventaTercero.nombre` | `description_modificado` | `description` | Nombre, denominación o razón social del Tercero | Nombre del Tercero |
| `ventaTercero.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |

### invalidacion-schema

| Campo | Cambio | Propiedad | Old | New |
|---|---|---|---|---|
| `documento.codigoGeneracion` | `description_modificado` | `description` | Codigo Generacion | Codigo de generacion del DTE |
| `documento.codigoGeneracion` | `restriccion_modificada` | `pattern` | ^[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}$ |  |
| `documento.codigoGeneracionR` | `description_modificado` | `description` | Codigo Generacion que reemplaza | Codigo Generación del documento que reemplaza al invalidado |
| `documento.codigoGeneracionR` | `restriccion_modificada` | `pattern` | ^[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}$ |  |
| `documento.correo` | `type_modificado` | `type` | string | string\|null |
| `documento.correo` | `requerido_modificado` | `required` | no | si |
| `documento.correo` | `restriccion_modificada` | `format` | email |  |
| `documento.fecEmi` | `description_modificado` | `description` | Fecha de emision (formato yyyy-mm-dd) | Fecha de generación del DTE |
| `documento.montoIva` | `eliminado` | `campo` | tipo=number\|null \| requerido=si \| descripcion=Monto IVA \| restricciones=minimum=0; exclusiveMaximum=100000000000; multipleOf=0.01 |  |
| `documento.nombre` | `type_modificado` | `type` | string | string\|null |
| `documento.nombre` | `description_modificado` | `description` | Nombre/Denominacion/Razon social | Nombre (Receptor) |
| `documento.nombre` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `documento.nombre` | `restriccion_modificada` | `maxLength` | 200 | 250 |
| `documento.numDocumento` | `type_modificado` | `type` | string | string\|null |
| `documento.numDocumento` | `description_modificado` | `description` | Número de documento de Identificación  | Número de documento de Identificación (Receptor) |
| `documento.numDocumento` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `documento.numeroControl` | `type_modificado` | `type` | string | string\|null |
| `documento.numeroControl` | `description_modificado` | `description` | Numero control | Numero de Control del DTE |
| `documento.numeroControl` | `restriccion_modificada` | `pattern` | ^DTE-0[0-9]\|1[0-2]-[A-Z0-9]{8}-[0-9]{15}$ |  |
| `documento.selloRecibido` | `restriccion_modificada` | `pattern` | ^[A-Z0-9]{40}$ |  |
| `documento.telefono` | `requerido_modificado` | `required` | no | si |
| `documento.telefono` | `description_modificado` | `description` | Numero de telefono del receptor | Teléfono (Receptor) |
| `documento.telefono` | `restriccion_modificada` | `pattern` | ^[0-9+;]{8,50}$ |  |
| `documento.telefono` | `restriccion_modificada` | `maxLength` | 50 | 30 |
| `documento.tipoDocumento` | `type_modificado` | `type` | string | string\|null |
| `documento.tipoDocumento` | `description_modificado` | `description` | Tipo documento de identificación CAT-22: 36 - NIT, 13 - DUI, 02 - Carnet de residente, 03 - PASAPORTE, 37 - OTRO | Tipo documento de identificación (receptor) |
| `documento.tipoDocumento` | `restriccion_modificada` | `enum` | ["36","13","02","03","37"] |  |
| `documento.tipoDte` | `description_modificado` | `description` | Tipo de documento | Tipo DTE |
| `documento.tipoDte` | `restriccion_modificada` | `enum` | ["01","03","04","05","06","07","08","09","10","11","14","15"] |  |
| `documento.tipoDte` | `restriccion_modificada` | `pattern` | ^0[0-9]\|1[0-5]$ |  |
| `emisor.codEstable` | `description_modificado` | `description` | Codigo, Numero o Identificador de establecimiento por Contribuyente | Codigo del estalecimiento asignado por el Contribuyente |
| `emisor.codEstableMH` | `type_modificado` | `type` | string\|null | string |
| `emisor.codEstableMH` | `requerido_modificado` | `required` | no | si |
| `emisor.codEstableMH` | `description_modificado` | `description` | Codigo, Numero o Identificador de establecimiento por MH | Codigo del establecimiento asignado por el MH |
| `emisor.codPuntoVenta` | `description_modificado` | `description` | Codigo, Numero o Identificador de punto de venta por Contribuyente | Codigo del Punto de Venta (Emisor) asignado por Contribuyente |
| `emisor.codPuntoVentaMH` | `type_modificado` | `type` | string\|null | string |
| `emisor.codPuntoVentaMH` | `requerido_modificado` | `required` | no | si |
| `emisor.codPuntoVentaMH` | `description_modificado` | `description` | Codigo, Numero o Identificador de punto de venta por MH | Codigo del Punto de venta (Emisor) asignado por el MH |
| `emisor.correo` | `description_modificado` | `description` | Correo electronico del emisor | Correo electronico (Emisor) |
| `emisor.correo` | `restriccion_modificada` | `format` | email |  |
| `emisor.correo` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.nit` | `description_modificado` | `description` | NIT, sin guiones | NIT (Emisor) |
| `emisor.nit` | `restriccion_modificada` | `pattern` | ^([0-9]{14}\|[0-9]{9})$ |  |
| `emisor.nomEstablecimiento` | `eliminado` | `campo` | tipo=string\|null \| requerido=si \| descripcion=Nombre de establecimiento \| restricciones=minLength=3; maxLength=150 |  |
| `emisor.nombre` | `description_modificado` | `description` | Nombre/Denominacion/Razon social | Nombre (Emisor) |
| `emisor.nombre` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `emisor.telefono` | `type_modificado` | `type` | string\|null | string |
| `emisor.telefono` | `description_modificado` | `description` | Numero de telefono del emisor | Teléfono (Emisor) |
| `emisor.telefono` | `restriccion_modificada` | `pattern` | ^[0-9+;]{8,26}$ |  |
| `emisor.telefono` | `restriccion_modificada` | `maxLength` | 26 | 30 |
| `emisor.tipoEstablecimiento` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Tipo establecimiento donde se emite documento \| restricciones=enum=["01","02","04","07","20"] |  |
| `identificacion.ambiente` | `description_modificado` | `description` | Ambiente de destino: 00 - Pruebas, 01 - Produccion | Ambiente de destino |
| `identificacion.fecAnula` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Fecha de invalidacion (formato yyyy-mm-dd) \| restricciones=format=date |  |
| `identificacion.fecEmi` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Fecha del Evento  \| restricciones=format=date |
| `identificacion.fusion` | `agregado` | `campo` |  | tipo=string\|null \| requerido=si \| descripcion=Fusiónes y otros \| restricciones=pattern=^([0-9]{14}\|[0-9]{9})$ |
| `identificacion.horAnula` | `eliminado` | `campo` | tipo=string \| requerido=si \| descripcion=Hora de invalidacion \| restricciones=pattern=^(0[0-9]\|1[0-9]\|2[0-3]):[0-5][0-9]:[0-5][0-9]?$ |  |
| `identificacion.horEmi` | `agregado` | `campo` |  | tipo=string \| requerido=si \| descripcion=Hora del Evento \| restricciones=pattern=^(0[0-9]\|1[0-9]\|2[0-3]):[0-5][0-9]:[0-5][0-9]?$ |
| `identificacion.version` | `description_modificado` | `description` | Version del esquema | Versión |
| `identificacion.version` | `restriccion_modificada` | `const` | 2 | 3 |
| `motivo.motivoAnulacion` | `description_modificado` | `description` | Motivo de invalidacion | Motivo |
| `motivo.motivoAnulacion` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `motivo.motivoAnulacion` | `restriccion_modificada` | `maxLength` | 250 | 200 |
| `motivo.nombreResponsable` | `description_modificado` | `description` | Nombre de la persona responsable de invalidar el DTE | Nombre de quien realiza el evento |
| `motivo.nombreResponsable` | `restriccion_modificada` | `minLength` | 5 |  |
| `motivo.nombreResponsable` | `restriccion_modificada` | `minimum` |  | 1 |
| `motivo.nombreSolicita` | `description_modificado` | `description` | Nombre de la persona que solicita invalidar el DTE | Nombre de quien solicita el evento |
| `motivo.nombreSolicita` | `restriccion_modificada` | `minLength` | 5 | 1 |
| `motivo.numDocResponsable` | `description_modificado` | `description` | Número de documento de identificación  | Número de documento de identificación de quien realiza el evento  |
| `motivo.numDocResponsable` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `motivo.numDocSolicita` | `description_modificado` | `description` | Número de documento de identificación solicitante. | Número de identificación de quien solicita el evento |
| `motivo.numDocSolicita` | `restriccion_modificada` | `minLength` | 3 | 1 |
| `motivo.tipDocResponsable` | `description_modificado` | `description` | Tipo documento de identificación CAT-22: 36 - NIT, 13 - DUI, 02 - Carnet de residente, 03 - PASAPORTE, 37 - OTRO | Tipo documento de identificación de quien realiza el evento |
| `motivo.tipDocResponsable` | `restriccion_modificada` | `enum` | ["36","13","02","03","37"] |  |
| `motivo.tipDocSolicita` | `description_modificado` | `description` | Tipo documento de identificación solicitante CAT-22: 36 - NIT, 13 - DUI, 02 - Carnet de residente, 03 - PASAPORTE, 37 - OTRO | Tipo documento de identificación de quien solicita el evento |
| `motivo.tipDocSolicita` | `restriccion_modificada` | `enum` | ["36","13","02","03","37"] |  |
| `motivo.tipoAnulacion` | `restriccion_modificada` | `enum` | [1,2,3] |  |
