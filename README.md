## `Instalación y uso`

```console
npm install --save sunat-catalogs
```
```js
const { Catalogos } = require('sunat-catalogs');
```

## `Atributos Estáticos (Statics Attributes)`

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

console.log(TipoTributo.uri); 
// Resultado: urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05

console.log(`Catálogo Nro. ${TipoTributo.numeroCat} - ${TipoTributo.tituloCat}`);
// Resultado: Catálogo Nro. 05 - Código de tipos de tributos y otros conceptos
```

**`IMPORTANTE:`**`Los métodos estáticos se llaman sin crear instancias de su clase y tampoco son invocables cuando se instancia la clase.`

## `Funciones`

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

## Definición de Catálogos

### `Catálogo Nro. 01 - Código de Tipo de Documento (TipoDocumento)`

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

### `Catálogo Nro. 02 - Código de Tipo de Monedas (TipoMoneda)`

Constante |Codigo | Descripción
----------|-------|-------------
PEN       |PEN    |Sol
USD       |USD    |US Dollar
EUR       |EUR    |Euro

### `Catálogo Nro. 05 - Código de Tipos de Tributos (TipoTributo)`

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

### `Catálogo Nro. 07 - Código de Tipo de Afectación del IGV (TipoAfectacionIgv)`

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

### `Catálogo Nro. 08 - Código de Tipos de Sistema de Cálculo del ISC (TipoSistemaIsc)`

Constante               |Código |Descripción
------------------------|-------|---------------------------------------
SISTEMA_VALOR           |01     |Sistema al valor
APLICACION_MONTO_FIJO   |02     |Aplicación del monto fijo
SISTEMA_PRECIO_PUBLICO  |03     |Sistema de precios de venta al público

### `Catálogo Nro. 22 - Código de Regimen de Percepciones (RegimenPercepcion)`

Constante               |Código |Descripción
------------------------|-------|------------------------------------------------------
VENTA_INTERNA           |01     |Percepción venta interna
ADQUISICION_COMBUSTIBLE |02     |Percepción a la adquisición de combustible
TASA_ESPECIAL           |03     |Percepción realizada al agente de percepción con tasa especial

### `Catálogo Nro. 23 - Código de Regimen de Retenciones (RegimenRetencion)`

Constante |Código |Descripción
----------|-------|------------
TASA_3    |01     |Tasa 3%
TASA_6    |02     |Tasa 6%
