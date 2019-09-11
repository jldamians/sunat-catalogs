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
  static get numero() {
    return "04";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de país";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Country";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agencia() {
    return "United Nations Economic Commission for Europe";
  }

  /**
   * Obtener la descripción relacionado a un código
   */
  descripcion() {
    return super.informacion('descripcion');
  }
}

module.exports = CodigosPais;
