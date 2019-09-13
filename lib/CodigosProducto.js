"use strict";

const Catalogo = require('./Catalogo');

class CodigosProducto extends Catalogo{
  constructor(codigo) {
    const datos = {};

    super(datos, codigo);
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "25";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de producto SUNAT";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Item Classification";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "GS1 US";
  }

  /**
   * Obtener el identificador del catálogo
   * @return {String}
   */
  static get idCat() {
    return "UNSPSC";
  }
}

module.exports = CodigosProducto;
