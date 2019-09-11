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
   * Obtener el número del catálogo
   */
  static get numero() {
    return "02";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de tipo de monedas";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Tipos de Moneda";
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

module.exports = CodigosTipoMoneda;
