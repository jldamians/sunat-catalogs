"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoAfectacionIgv extends Catalogo{
  constructor(codigo) {
    const datos = {
      '10': {
        descripcion: 'Gravado - Operación Onerosa',
      },
      '11': {
        descripcion: 'Gravado - Retiro por premio',
      },
      '12': {
        descripcion: 'Gravado - Retiro por donación',
      },
      '13': {
        descripcion: 'Gravado - Retiro ',
      },
      '14': {
        descripcion: 'Gravado - Retiro por publicidad',
      },
      '15': {
        descripcion: 'Gravado - Bonificaciones',
      },
      '16': {
        descripcion: 'Gravado - Retiro por entrega a trabajadores',
      },
      '17': {
        descripcion: 'Gravado - IVAP',
      },
      '20': {
        descripcion: 'Exonerado - Operación Onerosa',
      },
      '21': {
        descripcion: 'Exonerado - Transferencia gratuita',
      },
      '30': {
        descripcion: 'Inafecto - Operación Onerosa',
      },
      '31': {
        descripcion: 'Inafecto - Retiro por Bonificación',
      },
      '32': {
        descripcion: 'Inafecto - Retiro',
      },
      '33': {
        descripcion: 'Inafecto - Retiro por Muestras Médicas',
      },
      '34': {
        descripcion: 'Inafecto - Retiro por Convenio Colectivo',
      },
      '35': {
        descripcion: 'Inafecto - Retiro por premio',
      },
      '36': {
        descripcion: 'Inafecto - Retiro por publicidad',
      },
      '37': {
        descripcion: 'Inafecto - Transferencia gratuita',
      },
      '40': {
        descripcion: 'Exportación de Bienes o Servicios',
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
}

module.exports = CodigosTipoAfectacionIgv;
