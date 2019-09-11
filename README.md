
## `Instalación y uso`

```
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
`uri` | `URI del catálogo`

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

## `Definición de Catálogos`
### *`Catálogo Nro. 01 - Código de Tipo de Documento`*
`Constante` | `Descripción`
:- | :-
`TipoDocumento.FA` | `Factura`
`TipoDocumento.BV` | `Boleta de Venta`
`TipoDocumento.NC` | `Nota de Crédito`
`TipoDocumento.ND` | `Nota de Débito`
`TipoDocumento.GRR` | `Guía de Remisión Remitente`
`TipoDocumento.CPER` | `Comprobante de Retención`
`TipoDocumento.GRT` | `Guía de Remisión Transportista`
`TipoDocumento.CPEP` | `Comprobante de Percepción`
### *`Catálogo Nro. 02 - Código de Tipo de Monedas`*
`Constante` | `Descripción`
:- | :-
`TipoMoneda.PEN` | `Sol`
`TipoMoneda.USD` | `US Dollar`
`TipoMoneda.EUR` | `Euro`
### *`Catálogo Nro. 05 - Código de Tipos de Tributos`*
`Constante` | `Descripción`
:- | :-
`TipoTributo.IGV` | `Impuesto General a las Ventas`
`TipoTributo.IVAP` | `Impuesto a la Venta Arroz Pilado`
`TipoTributo.ISC` | `Impuesto al Consumo de las Bolsas de Plástico`
`TipoTributo.ICBPER` | `Impuesto a la Bolsa Plastica`
`TipoTributo.EXP` | `Exportación`
`TipoTributo.GRA` | `Gratuito`
`TipoTributo.EXO` | `Exonerado`
`TipoTributo.INA` | `Inafecto`
`TipoTributo.OTROS` | `Otros Tributos`
### *`Catálogo Nro. 07 - Código de Tipo de Afectación del IGV`*
`Constante` | `Descripción`
:- | :-
`TipoAfectacionIgv.GRAVADO_ONEROSA` | `Gravado - Operación Onerosa`
`TipoAfectacionIgv.GRAVADO_PREMIO` | `Gravado - Retiro por premio`
`TipoAfectacionIgv.GRAVADO_DONACION` | `Gravado - Retiro por donación`
`TipoAfectacionIgv.GRAVADO_RETIRO` | `Gravado - Retiro `
`TipoAfectacionIgv.GRAVADO_PUBLICIDAD` | `Gravado - Retiro por publicidad`
`TipoAfectacionIgv.GRAVADO_BONIFICACIONES` | `Gravado - Bonificaciones`
`TipoAfectacionIgv.GRAVADO_ENTREGA_TRABAJADORES` | `Gravado - Retiro por entrega a trabajadores`
`TipoAfectacionIgv.GRAVADO_IVAP` | `Gravado - IVAP`
`TipoAfectacionIgv.EXONERADO_ONEROSA` | `Exonerado - Operación Onerosa`
`TipoAfectacionIgv.EXONERADO_GRATUITA` | `Exonerado - Transferencia gratuita`
`TipoAfectacionIgv.INAFECTO_ONEROSA` | `Inafecto - Operación Onerosa`
`TipoAfectacionIgv.INAFECTO_BONIFICACION` | `Inafecto - Retiro por Bonificación`
`TipoAfectacionIgv.INAFECTO_RETIRO` | `Inafecto - Retiro`
`TipoAfectacionIgv.INAFECTO_MUESTRAS_MEDICAS` | `Inafecto - Retiro por Muestras Médicas`
`TipoAfectacionIgv.INAFECTO_CONVENIO_COLECTIVO` | `Inafecto - Retiro por Convenio Colectivo`
`TipoAfectacionIgv.INAFECTO_PREMIO` | `Inafecto - Retiro por premio`
`TipoAfectacionIgv.INAFECTO_PUBLICIDAD` | `Inafecto - Retiro por publicidad`
`TipoAfectacionIgv.INAFECTO_GRATUITA` | `Inafecto - Transferencia gratuita`
`TipoAfectacionIgv.EXPORTACION` | `Exportación de Bienes o Servicios`
### *`Catálogo Nro. 08 - Código de Tipos de Sistema de Cálculo del ISC`*
`Constante` | `Descripción`
:- | :-
`TipoSistemaIsc.SISTEMA_VALOR` | `Sistema al valor`
`TipoSistemaIsc.APLICACION_MONTO_FIJO` | `Aplicación del monto fijo`
`TipoSistemaIsc.SISTEMA_PRECIO_PUBLICO` | `Sistema de precios de venta al público`
### *`Catálogo Nro. 22 - Código de Regimen de Percepciones`*
`Constante` | `Descripción`
:- | :-
`RegimenPercepcion.VENTA_INTERNA` | `Percepción venta interna`
`RegimenPercepcion.ADQUISICION_COMBUSTIBLE` | `Percepción a la adquisición de combustible`
`RegimenPercepcion.TASA_ESPECIAL` | `Percepción realizada al agente de percepción con tasa especial`
### *`Catálogo Nro. 23 - Código de Regimen de Retenciones`*
`Constante` | `Descripción`
:- | :-
`RegimenRetencion.TASA_3` | `Tasa 3%`
`RegimenRetencion.TASA_6` | `Tasa 6%`
