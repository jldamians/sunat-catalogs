"use strict";

const Catalogo = require('./Catalogo');

class CodigosPais extends Catalogo{
  static get datos() {
    return {
      'PE': {
        descripcion: 'Perú',
      },
    };
  }

  static get PE() {
    return "PE";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static catalogo() {
    return 'Catálogo Nro. 04 - Código de País';
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosPais;
