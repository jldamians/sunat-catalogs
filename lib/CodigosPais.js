"use strict";

const Catalogo = require('./Catalogo');

class CodigosPais extends Catalogo{
  constructor(codigo) {
    const datos = {
      'PE': {
        descripcion: 'Perú',
      },
    };

    super(datos, codigo);
  }

  static get PE() {
    return "PE";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "04";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de país";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Country";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "United Nations Economic Commission for Europe";
  }
}

module.exports = CodigosPais;
