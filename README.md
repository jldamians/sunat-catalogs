### `Instalación y uso`

```console
npm install --save sunat-catalogs
```
```js
const Catalogs = require('sunat-catalogs');
```

### `Atributos Estáticos (Statics Attributes)`

`Todos los catálogos definidos en la sección "Definición de Catálogos", tendrán los siguientes atributos estáticos, los cuales nos permitiran acceder a los metadatos del catálogo.`

`Atributo` | `Descripción`
:- | :-
`numeroCat` | `Número de catálogo`
`tituloCat` | `Título del catálogo`
`nombreCat` | `Nombre del catálogo definida por la agencia`
`agenciaCat` | `Agencia del catálogo`
`uriCat` | `URI del catálogo`

```javascript
const { TipoTributo } = require('sunat-catalogs');

console.log(TipoTributo.numeroCat); 
// Resultado: 05

console.log(TipoTributo.tituloCat); 
// Resultado: Código de tipos de tributos y otros conceptos

console.log(TipoTributo.nombreCat); 
// Resultado: Codigo de tributos

console.log(TipoTributo.agenciaCat); 
// Resultado: PE:SUNAT

console.log(TipoTributo.uriCat); 
// Resultado: urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05

console.log(`Catálogo Nro. ${TipoTributo.numeroCat} - ${TipoTributo.tituloCat}`);
// Resultado: Catálogo Nro. 05 - Código de tipos de tributos y otros conceptos
```

**`IMPORTANTE:`**`Los métodos estáticos se llaman sin crear instancias de su clase y tampoco son invocables cuando se instancia la clase.`

### `Funciones`

`Todos los catálogos definidos en la sección "Definición de Catálogos", tendrán definida la función`**`descripcion()`**`para acceder a la descripción de los códigos de los catálogos.`**`Cada catálogo también cuenta con funciones propias.`**

```javascript
const { TipoTributo } = require('sunat-catalogs');

const tributo = new TipoTributo(TipoTributo.ICBPER);

console.log(tributo.descripcion());
// Resultado: Impuesto al Consumo de las bolsas de plástico

console.log(tributo.nombre());
// Resultado: ICBPER

console.log(tributo.categoria());
// Resultado: S

console.log(tributo.codigo());
// Resultado: OTH
```

### Definición de Catálogos

#### `Catálogo Nro. 01 - Código de Tipo de Documento`

Para este catálogo se ha definido la clase de nombre  **`TipoDocumeto`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del tipo de documento

```javascript
const { TipoDocumento } = require('sunat-catalogs');

const documento = new TipoDocumento(TipoDocumento.FA);

console.log(documento.descripcion());
// Resultado: Factura
```

En la siguiente tabla se describen las constantes disponibles:

Constante |Código |Descripción
----------|-------|-------------------------------
FA        |01     |Factura
BV        |03     |Boleta de Venta
NC        |07     |Nota de Crédito
ND        |08     |Nota de Débito
GRR       |09     |Guía de Remisión Remitente
CPER      |20     |Comprobante de Retención
GRT       |31     |Guía de Remisión Transportista
CPEP      |40     |Comprobante de Percepción

#### `Catálogo Nro. 02 - Código de Tipo de Monedas`

Para este catálogo se ha definido la clase de nombre  **`TipoMoneda`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del tipo de moneda

```javascript
const { TipoMoneda } = require('sunat-catalogs');

const moneda = new TipoMoneda(TipoMoneda.SOL);

console.log(moneda.descripcion());
// Resultado: Sol
```

En la siguiente tabla se describen las constantes disponibles:

Constante |Código | Descripción
----------|-------|-------------
SOL       |PEN    |Sol
DOLAR     |USD    |US Dollar
EURO      |EUR    |Euro

#### `Catálogo Nro. 03 - Códigos de Tipo de Unidad de Medida`

Para este catálogo se ha definido la clase de nombre  **`TipoUnidadMedida`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del tipo de unidad de medida

```javascript
const { TipoUnidadMedida } = require('sunat-catalogs');

const medida = new TipoUnidadMedida(TipoUnidadMedida.UNIDAD_INTERNACIONAL);

console.log(medida.descripcion());
// Resultado: Número de unidades internacionales
```

En la siguiente tabla se describen las constantes disponibles:

Constante              |Código | Descripción
-----------------------|-------|-------------
UNIDAD_INTERNACIONAL   |NIU    |Número de unidades internacionales
UNIDAD_MEDIDA_ACORDADA |ZZ     |Unidad de medida acordada entre dos partes

#### `Catálogo Nro. 04 - Código de País`

Para este catálogo se ha definido la clase de nombre  **`Pais`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del país

```javascript
const { Pais } = require('sunat-catalogs');

const pais = new Pais(Pais.PERU);

console.log(pais.descripcion());
// Resultado: Perú
```

En la siguiente tabla se describen las constantes disponibles:

Constante |Codigo | Descripción
----------|-------|-------------
PERU      |PE     |Perú

#### `Catálogo Nro. 05 - Código de Tipos de Tributos`

Para este catálogo se ha definido la clase de nombre  **`TipoTributo`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del tipo de tributo
 - `nombre()`- Permite obtener el nombre del tipo de tributo
 - `categoria()`- Permite obtener la categoría del tipo de tributo
 - `codigo()`- Permite obtener el código internacional del tipo de tributo

```javascript
const { TipoTributo } = require('sunat-catalogs');

const tributo = new TipoTributo(TipoTributo.IGV);

console.log(tributo.descripcion());
// Resultado: IGV Impuesto General a las Ventas

console.log(tributo.nombre());
// Resultado: IGV

console.log(tributo.categoria());
// Resultado: S

console.log(tributo.codigo());
// Resultado: VAT
```

En la siguiente tabla se describen las constantes disponibles:

Constante |Código |Descripción
----------|-------|----------------------------------------------
IGV       |1000   |Impuesto General a las Ventas
IVAP      |1016   |Impuesto a la Venta Arroz Pilado
ISC       |2000   |Impuesto al Consumo de las Bolsas de Plástico
ICBPER    |7152   |Impuesto a la Bolsa Plastica
EXP       |9995   |Exportación
GRA       |9996   |Gratuito
EXO       |9997   |Exonerado
INA       |9998   |Inafecto
OTROS     |9999   |Otros Tributos

#### `Catálogo Nro. 06 - Código de Tipo de Documento de Identidad`

Para este catálogo se ha definido la clase de nombre  **`TipoDocumentoIdentidad`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del documento de identidad

```javascript
const { TipoDocumentoIdentidad } = require('sunat-catalogs');

const documento = new TipoDocumentoIdentidad(TipoDocumentoIdentidad.DNI);

console.log(documento.descripcion());
// Resultado: Documento Nacional de Identidad
```

En la siguiente tabla se describen las constantes disponibles:

Constante          |Código |Descripción
-------------------|-------|----------------------------------------------
NO_DOMICILIADO     |0      |DOC.TRIB.NO.DOM.SIN.RUC
DNI                |1      |Documento Nacional de Identidad
CARNET_EXTRANJERIA |4      |Carnet de extranjería
RUC                |6      |Registro Unico de Contributentes
PASAPORTE          |7      |Pasaporte
TIN                |C      |TIN - Doc Trib PP.NN
IN                 |D      |IN - Doc Trib PP. JJ
TAM                |E      |TAM - Tarjeta Andina de Migración

#### `Catálogo Nro. 07 - Código de Tipo de Afectación del IGV`

Para este catálogo se ha definido la clase de nombre  **`TipoAfectacionIgv`**, la misma que cuenta con las siguientes funciones:

- `descripcion()`- Permite obtener la descripción del tipo de afectación
- `codTributo(onerosa)`- Permite obtener el código del tributo relacionado al tipo de afectación
  - `onerosa`- Definir como `true` si la operación es onerosa y `false` si la operación es gratuita

```javascript
const { TipoAfectacionIgv } = require('sunat-catalogs');

const afectacion = new TipoAfectacionIgv(TipoAfectacionIgv.GRAVADO_IVAP);

console.log(afectacion.descripcion());
// Resultado: Gravado - IVAP

console.log(afectacion.codTributo(true));
// Resultado: 1016

console.log(afectacion.codTributo(false));
// Resultado: 9996
```

En la siguiente tabla se describen las constantes disponibles:

Constante                       |Código |Descripción
--------------------------------|-------|--------------------------------------------
GRAVADO_ONEROSA                 |10     |Gravado - Operación Onerosa
GRAVADO_PREMIO                  |11     |Gravado - Retiro por premio
GRAVADO_DONACION                |12     |Gravado - Retiro por donación
GRAVADO_RETIRO                  |13     |Gravado - Retiro 
GRAVADO_PUBLICIDAD              |14     |Gravado - Retiro por publicidad
GRAVADO_BONIFICACIONES          |15     |Gravado - Bonificaciones
GRAVADO_ENTREGA_TRABAJADORES    |16     |Gravado - Retiro por entrega a trabajadores
GRAVADO_IVAP                    |17     |Gravado - IVAP
EXONERADO_ONEROSA               |20     |Exonerado - Operación Onerosa
EXONERADO_GRATUITA              |21     |Exonerado - Transferencia gratuita
INAFECTO_ONEROSA                |30     |Inafecto - Operación Onerosa
INAFECTO_BONIFICACION           |31     |Inafecto - Retiro por Bonificación
INAFECTO_RETIRO                 |32     |Inafecto - Retiro
INAFECTO_MUESTRAS_MEDICAS       |33     |Inafecto - Retiro por Muestras Médicas
INAFECTO_CONVENIO_COLECTIVO     |34     |Inafecto - Retiro por Convenio Colectivo
INAFECTO_PREMIO                 |35     |Inafecto - Retiro por premio
INAFECTO_PUBLICIDAD             |36     |Inafecto - Retiro por publicidad
INAFECTO_GRATUITA               |37     |Inafecto - Transferencia gratuita
EXPORTACION                     |40     |Exportación de Bienes o Servicios

#### `Catálogo Nro. 08 - Código de Tipos de Sistema de Cálculo del ISC`

Para este catálogo se ha definido la clase de nombre  **`TipoSistemaIsc`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del tipo de sistema de cálculo

```javascript
const { TipoSistemaIsc } = require('sunat-catalogs');

const documento = new TipoSistemaIsc(TipoSistemaIsc.SISTEMA_VALOR);

console.log(documento.descripcion());
// Resultado: Sistema al valor
```

En la siguiente tabla se describen las constantes disponibles:

Constante               |Código |Descripción
------------------------|-------|---------------------------------------
SISTEMA_VALOR           |01     |Sistema al valor
APLICACION_MONTO_FIJO   |02     |Aplicación del monto fijo
SISTEMA_PRECIO_PUBLICO  |03     |Sistema de precios de venta al público

#### `Catálogo Nro. 09 - Códigos de Tipo de Nota de Crédito`

Para este catálogo se ha definido la clase de nombre  **`TipoNotaCredito`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del tipo de nota de crédito

```javascript
const { TipoNotaCredito } = require('sunat-catalogs');

const nc = new TipoNotaCredito(TipoNotaCredito.ANULACION_OPERACION);

console.log(nc.descripcion());
// Resultado: Anulación de la operación
```

En la siguiente tabla se describen las constantes disponibles:

Constante                     |Código |Descripción
------------------------------|-------|---------------------------------------
ANULACION_OPERACION           |01     |Anulación de la operación
ANULACION_ERROR_RUC           |02     |Anulación por error en el RUC
CORRECCION_ERROR_DESCRIPCION  |03     |Corrección por error en la descripción
DESCUENTO_GLOBAL              |04     |Descuento global
DESCUENTO_ITEM                |05     |Descuento por ítem
DEVOLUCION_TOTAL              |06     |Devolución total
DEVOLUCION_ITEM               |07     |Devolución por ítem
BONIFICACION                  |08     |Bonificación
DISMINUCION_VALOR             |09     |Disminución en el valor
OTROS_CONCEPTOS               |10     |Otros Conceptos
AJUSTES_OPERACION_EXPORTACION |11     |Ajustes de operaciones de exportación
AJUSTES_AFECTOS_IVAP          |12     |Ajustes afectos al IVAP

#### `Catálogo Nro. 10 - Códigos de Tipo de Nota de Débito`

Para este catálogo se ha definido la clase de nombre  **`TipoNotaDebito`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del tipo de nota de débito

```javascript
const { TipoNotaDebito } = require('sunat-catalogs');

const nd = new TipoNotaDebito(TipoNotaDebito.INTERESES_MORA);

console.log(nd.descripcion());
// Resultado: Intereses por mora
```

En la siguiente tabla se describen las constantes disponibles:

Constante                     |Código |Descripción
------------------------------|-------|---------------------------------------
INTERESES_MORA                |01     |Intereses por mora
AUMENTO_VALOR                 |02     |Aumento en el valor
PENALIDADES                   |03     |Penalidades/ otros conceptos
AJUSTES_OPERACION_EXPORTACION |11     |Ajustes de operaciones de exportación
AJUSTES_AFECTOS_IVAP          |12     |Ajustes afectos al IVAP

#### `Catálogo Nro. 12 - Código de Documentos Relacionados`

Para este catálogo se ha definido la clase de nombre  **`DocumentoRelacionado`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del documento relacionado

```javascript
const { DocumentoRelacionado } = require('sunat-catalogs');

const documento = new DocumentoRelacionado(DocumentoRelacionado.FA_ANTICIPO);

console.log(documento.descripcion());
// Resultado: Factura - emitida por anticipos
```

En la siguiente tabla se describen las constantes disponibles:

Constante           |Código |Descripción
--------------------|-------|------------------------------------------------
FA_CORREGIR_RUC     |01     |Factura - emitida para corregir error en el RUC
FA_ANTICIPO         |02     |Factura - emitida por anticipos
BV_ANTICIPO         |03     |Boleta de Venta - emitida por anticipos
TICKET_SALIDA_ENAPU |04     |Ticket de Salida - ENAPU
CODIGO_SCOP         |05     |Código SCOP
OTROS               |99     |Otros

#### `Catálogo Nro. 16 - Código de Tipo de Precio de Venta (TipoPrecioVenta)`

Para este catálogo se ha definido la clase de nombre  **`DocumentoRelacionado`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del documento relacionado

```javascript
const { DocumentoRelacionado } = require('sunat-catalogs');

const documento = new DocumentoRelacionado(DocumentoRelacionado.FA_ANTICIPO);

console.log(documento.descripcion());
// Resultado: Factura - emitida por anticipos
```

En la siguiente tabla se describen las constantes disponibles:

Constante                  |Código |Descripción
---------------------------|-------|------------------------------------------------------
PRECIO_UNITARIO            |01     |Precio unitario (incluye el IGV)
VALOR_REFERENCIAL_UNITARIO |02     |Valor referencial unitario en operaciones no onerosas (Gratuitas)
TARIFAS_REGULADAS          |03     |Tarifas reguladas

#### `Catálogo Nro. 19 - Código de Estado del Ítem`

Para este catálogo se ha definido la clase de nombre  **`EstadoItem`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del estado de ítem

```javascript
const { EstadoItem } = require('sunat-catalogs');

const estado = new EstadoItem(EstadoItem.ADICIONAR);

console.log(estado.descripcion());
// Resultado: Adicionar
```

En la siguiente tabla se describen las constantes disponibles:

Constante |Código |Descripción
----------|-------|------------
ADICIONAR |1      |Adicionar
MODIFICAR |2      |Modificar
ANULADO   |3      |Anulado

#### `Catálogo Nro. 22 - Código de Regimen de Percepciones`

Para este catálogo se ha definido la clase de nombre  **`RegimenPercepcion`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción de la percepción
 - `tasa()`- Permite obtener la tasa de percepción

```javascript
const { RegimenPercepcion } = require('sunat-catalogs');

const percepcion = new RegimenPercepcion(RegimenPercepcion.VENTA_INTERNA);

console.log(percepcion.descripcion());
// Resultado: Percepción venta interna

console.log(percepcion.tasa());
// Resultado: 2.00
```

En la siguiente tabla se describen las constantes disponibles:

Constante               |Código |Descripción
------------------------|-------|------------------------------------------------------
VENTA_INTERNA           |01     |Percepción venta interna
ADQUISICION_COMBUSTIBLE |02     |Percepción a la adquisición de combustible
TASA_ESPECIAL           |03     |Percepción realizada al agente de percepción con tasa especial

#### `Catálogo Nro. 23 - Código de Regimen de Retenciones`

Para este catálogo se ha definido la clase de nombre  **`RegimenRetencion`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción de la retención
 - `tasa()`- Permite obtener la tasa de retención

```javascript
const { RegimenRetencion } = require('sunat-catalogs');

const retencion = new RegimenRetencion(RegimenRetencion.TASA_3);

console.log(retencion.descripcion());
// Resultado: Tasa 3%

console.log(retencion.tasa());
// Resultado: 3.00
```

En la siguiente tabla se describen las constantes disponibles:

Constante |Código |Descripción
----------|-------|------------
TASA_3    |01     |Tasa 3%
TASA_6    |02     |Tasa 6%

#### `Catálogo Nro. 51 - Códigos de Tipo de Operación`

Para este catálogo se ha definido la clase de nombre  **`TipoOperacion`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del tipo de operación

```javascript
const { TipoOperacion } = require('sunat-catalogs');

const operacion = new TipoOperacion(TipoOperacion.VENTA_INTERNA);

console.log(operacion.descripcion());
// Resultado: Venta interna
```

En la siguiente tabla se describen las constantes disponibles:

Constante                                         |Código |Descripción
--------------------------------------------------|-------|-------------------------------------------
VENTA_INTERNA                                     |0101   |Venta interna
VENTA_INTERNA_GASTOS_DEDUCIBLES                   |0112   |Sustenta gastos deducibles PPNN
VENTA_INTERNA_NRUS                                |0113   |NRUS
EXPORTACION_BIENES                                |0200   |Exportación de Bienes
EXPORTACION_SERVICIOS_INTEGRAMENTE_PAIS           |0201   |Prestación servicios realizados íntegramente en el país
EXPORTACION_SERVICIOS_HOSPEDAJE_NO_DOMICILIADO    |0202   |Prestación de servicios de hospedaje no domiciliado
EXPORTACION_SERVICIOS_TRANSPORTE_NAVIERAS         |0203   |Transporte de navieras
EXPORTACION_SERVICIOS_NAVES_AERONAVES_EXTRANJERAS |0204   |Servicios  a naves y aeronaves de bandera extranjera
EXPORTACION_SERVICIOS_PAQUETE_TURISTICO           |0205   |Servicios que conformen un paquete turístico
EXPORTACION_SERVICIOS_TRANSPORTE_CARGA            |0206   |Servicios complementarios al transporte de carga
EXPORTACION_SERVICIOS_SUMINISTRO_ELECTRICO_ZED    |0207   |Suministro de energía eléctrica domiciliados en ZED
EXPORTACION_SERVICIOS_PARCIALMENTE_EXTRANJERO     |0208   |Prestación servicios realizados parcialmente en el extranjero
OPERACIONES_CARTA_PORTE_AEREO                     |0301   |Operaciones con carta de porte aéreo
OPERACIONES_TRANSPORTE_FERROVIARIO                |0302   |Operaciones de transporte ferroviario de pasajeros
OPERACIONES_REGALIA_PETROLEO                      |0303   |Operaciones de pago de regalía petrolera
VENTA_NO_DOMICILIADA_NO_CALIFICA_EXPORTACION      |0401   |Ventas no domiciliados que no califican como exportación
OPERACION_DETRACCION                              |1001   |Operación sujeta a detracción
OPERACION_DETRACCION_RECURSOS_HIDROBIOLOGICOS     |1002   |Recursos hidrobiológicos
OPERACION_DETRACCION_TRANSPORTE_PASAJEROS         |1003   |Servicios de transporte pasajeros
OPERACION_DETRACCION_TRANSPORTE_CARGA             |1004   |Servicios de transporte carga
OPERACION_PERCEPCION                              |2001   |Operación sujeta a percepción

#### `Catálogo Nro. 53 - Códigos de Cargos o Descuentos`

Para este catálogo se ha definido la clase de nombre  **`CargoDescuento`**, la misma que cuenta con las siguientes funciones:

 - `descripcion()`- Permite obtener la descripción del cargo o descuento
 - `indicador()`- Permite saber si el código corresponde a un cargo (true) o un descuento (false)
 - `nivel()`- Permite obtener el nivel relacionado al código (item o global)
 - `esCargoDet()`- Determina si corresponde a un cargo por detalle (true o false)
 - `esDescuentoDet()`- Determina si corresponde a un descuento por detalle (true o false)
 - `esCargoGlb()`- Determina si corresponde a un cargo global (true o false)
 - `esDescuentoGlb()`- Determina si corresponde a un descuento global (true o false)

```javascript
const { CargoDescuento } = require('sunat-catalogs');

const operacion = new CargoDescuento(CargoDescuento.DCTOS_ITEM_AFECTA_BASE_IGV_IVAP);

console.log(operacion.descripcion());
// Resultado: Descuentos que afectan la base imponible del IGV/IVAP
```

En la siguiente tabla se describen las constantes disponibles:

Constante                             |Código |Descripción
--------------------------------------|-------|-------------------------------------------
DCTOS_ITEM_AFECTA_BASE_IGV_IVAP       |00     |Descuentos que afectan la base imponible del IGV/IVAP
DCTOS_ITEM_NO_AFECTA_BASE_IGV_IVAP    |01     |Descuentos que no afectan la base imponible del IGV/IVAP
DCTOS_GLOBAL_AFECTA_BASE_IGV_IVAP     |02     |Descuentos globales que afectan la base imponible del IGV/IVAP
DCTOS_GLOBAL_NO_AFECTA_BASE_IGV_IVAP  |03     |Descuentos globales que no afectan la base imponible del IGV/IVAP
CARGOS_ITEM_AFECTA_BASE_IGV_IVAP      |47     |Cargos que afectan la base imponible del IGV/IVAP
CARGOS_ITEM_NO_AFECTA_BASE_IGV_IVAP   |48     |Cargos que no afectan la base imponible del IGV/IVAP
CARGOS_GLOBAL_AFECTA_BASE_IGV_IVAP    |49     |Cargos globales que afectan la base imponible del IGV/IVAP
CARGOS_GLOBAL_NO_AFECTA_BASE_IGV_IVAP |50     |Cargos globales que no afectan la base imponible del IGV/IVAP
