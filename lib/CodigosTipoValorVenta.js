"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoValorVenta extends Catalogo{
  static get datos() {
    return {
      '01': {
        descripcion: 'Gravado',
      },
      '02': {
        descripcion: 'Exonerado',
      },
      '03': {
        descripcion: 'Inafecto',
      },
      '04': {
        descripcion: 'Exportación',
      },
      '05': {
        descripcion: 'Gratuitas',
      },
    };
  }

  static get GRAVADO() {
    return "01";
  }
  static get EXONERADO() {
    return "02";
  }
  static get INAFECTO() {
    return "03";
  }
  static get EXPORTACION() {
    return "04";
  }
  static get GRATUITO() {
    return "05";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numero() {
    return "11";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Códigos de tipo de valor de venta (Resumen diario de boletas y notas)";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Códigos de Tipo de Valor de Venta";
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
}

module.exports = CodigosTipoValorVenta;
