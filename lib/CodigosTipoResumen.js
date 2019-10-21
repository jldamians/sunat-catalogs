"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoResumen extends Catalogo{
  constructor(codigo) {
    const datos = {
      'RA': {
        descripcion: 'Comunicación de Baja',
      },
      'RC': {
        descripcion: 'Resumen Diario',
      },
      'RR': {
        descripcion: 'Resumen de Reversión',
      },
    };

    super(datos, codigo);
  }

  static get RA() {
    return "RA";
  }
  static get RC() {
    return "RC";
  }
  static get RR() {
    return "RR";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "00";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de tipo de resumen";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Tipo de Resumen";
  }
}

module.exports = CodigosTipoResumen;
