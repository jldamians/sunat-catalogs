"use strict";

const TipoTributo = require('./CodigosTipoTributo');

const Catalogo = require('./Catalogo');

class CodigosTipoAfectacionIgv extends Catalogo{
  constructor(codigo) {
    const datos = {
      '10': {
        descripcion: 'Gravado - Operación Onerosa',
        onerosa: TipoTributo.IGV,
      },
      '11': {
        descripcion: 'Gravado - Retiro por premio',
        noOnerosa: TipoTributo.GRA,
      },
      '12': {
        descripcion: 'Gravado - Retiro por donación',
        noOnerosa: TipoTributo.GRA,
      },
      '13': {
        descripcion: 'Gravado - Retiro ',
        noOnerosa: TipoTributo.GRA,
      },
      '14': {
        descripcion: 'Gravado - Retiro por publicidad',
        noOnerosa: TipoTributo.GRA,
      },
      '15': {
        descripcion: 'Gravado - Bonificaciones',
        noOnerosa: TipoTributo.GRA,
      },
      '16': {
        descripcion: 'Gravado - Retiro por entrega a trabajadores',
        noOnerosa: TipoTributo.GRA,
      },
      '17': {
        descripcion: 'Gravado - IVAP',
        onerosa: TipoTributo.IVAP,
        noOnerosa: TipoTributo.GRA,
      },
      '20': {
        descripcion: 'Exonerado - Operación Onerosa',
        onerosa: TipoTributo.EXO,
      },
      '21': {
        descripcion: 'Exonerado - Transferencia gratuita',
        onerosa: TipoTributo.GRA,
      },
      '30': {
        descripcion: 'Inafecto - Operación Onerosa',
        onerosa: TipoTributo.INA,
      },
      '31': {
        descripcion: 'Inafecto - Retiro por Bonificación',
        onerosa: TipoTributo.GRA,
      },
      '32': {
        descripcion: 'Inafecto - Retiro',
        onerosa: TipoTributo.GRA,
      },
      '33': {
        descripcion: 'Inafecto - Retiro por Muestras Médicas',
        onerosa: TipoTributo.GRA,
      },
      '34': {
        descripcion: 'Inafecto - Retiro por Convenio Colectivo',
        onerosa: TipoTributo.GRA,
      },
      '35': {
        descripcion: 'Inafecto - Retiro por premio',
        onerosa: TipoTributo.GRA,
      },
      '36': {
        descripcion: 'Inafecto - Retiro por publicidad',
        onerosa: TipoTributo.GRA,
      },
      '37': {
        descripcion: 'Inafecto - Transferencia gratuita',
        onerosa: TipoTributo.GRA,
      },
      '40': {
        descripcion: 'Exportación de Bienes o Servicios',
        onerosa: TipoTributo.EXP,
        noOnerosa: TipoTributo.GRA,
      },
    };

    super(datos, codigo);
  }

  static get GRAVADO_ONEROSA() {
    return "10";
  }
  static get GRAVADO_PREMIO() {
    return "11";
  }
  static get GRAVADO_DONACION() {
    return "12";
  }
  static get GRAVADO_RETIRO() {
    return "13";
  }
  static get GRAVADO_PUBLICIDAD() {
    return "14";
  }
  static get GRAVADO_BONIFICACIONES() {
    return "15";
  }
  static get GRAVADO_ENTREGA_TRABAJADORES() {
    return "16";
  }
  static get GRAVADO_IVAP() {
    return "17";
  }
  static get EXONERADO_ONEROSA() {
    return "20";
  }
  static get EXONERADO_GRATUITA() {
    return "21";
  }
  static get INAFECTO_ONEROSA() {
    return "30";
  }
  static get INAFECTO_BONIFICACION() {
    return "31";
  }
  static get INAFECTO_RETIRO() {
    return "32";
  }
  static get INAFECTO_MUESTRAS_MEDICAS() {
    return "33";
  }
  static get INAFECTO_CONVENIO_COLECTIVO() {
    return "34";
  }
  static get INAFECTO_PREMIO() {
    return "35";
  }
  static get INAFECTO_PUBLICIDAD() {
    return "36";
  }
  static get INAFECTO_GRATUITA() {
    return "37";
  }
  static get EXPORTACION() {
    return "40";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "07";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de tipo de afectación del IGV";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Afectacion del IGV";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }

  codTributo(onerosa=false) {
    let codTributo;

    if (onerosa === true) {
      try {
        codTributo = super.informacion('onerosa');
      } catch (error) {
        throw new Error(`El código no corresponde a un tributo oneroso: ${error.message}`);
      }
    } else {
      try {
        codTributo = super.informacion('noOnerosa');
      } catch (error) {
        throw new Error(`El código no corresponde a un tributo NO oneroso: ${error.message}`);
      }
    }

    return codTributo;
  }
}

module.exports = CodigosTipoAfectacionIgv;
