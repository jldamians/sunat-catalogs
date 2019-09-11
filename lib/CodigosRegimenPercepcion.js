"use strict";

const Catalogo = require('./Catalogo');

class CodigosRegimenPercepcion extends Catalogo{
  static get datos() {
    return {
      '01': {
        descripcion: 'Percepción Venta Interna',
        tasa: 2.0,
      },
      '02': {
        descripcion: 'Percepción a la adquisición de combustible',
        tasa: 1.0,
      },
      '03': {
        descripcion: 'Percepción realizada al agente de percepción con tasa especial',
        tasa: 0.5,
      },
    };
  }

  static get VENTA_INTERNA() {
    return "01";
  }
  static get ADQUISICION_COMBUSTIBLE() {
    return "02";
  }
  static get TASA_ESPECIAL() {
    return "03";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numero() {
    return "22";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de regimen de percepciones";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Código de Regimen de Percepciones";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agencia() {
    return "PE:SUNAT";
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }

  /**
   * Obtener la tasa relacionado a un código
   * @param {String} codigo
   */
  static tasa(codigo) {
    return super.informacion(codigo, 'tasa');
  }
}

module.exports = CodigosRegimenPercepcion;
