"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoMoneda extends Catalogo{
  static get datos() {
    return {
      'PEN': {
        descripcion: 'Sol',
      },
      'USD': {
        descripcion: 'US Dollar',
      },
      'EUR': {
        descripcion: 'Euro',
      },
    };
  }

  static get PEN() {
    return "PEN";
  }
  static get USD() {
    return "USD";
  }
  static get EUR() {
    return "EUR";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static catalogo() {
    return 'Catálogo Nro. 02 - Código de Tipo de Moneda';
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosTipoMoneda;
