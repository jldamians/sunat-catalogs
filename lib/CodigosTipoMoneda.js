"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoMoneda extends Catalogo{
  constructor(codigo) {
    const datos = {
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

    super(datos, codigo);
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
   */
  descripcion() {
    return super.informacion('descripcion');
  }
}

module.exports = CodigosTipoMoneda;
