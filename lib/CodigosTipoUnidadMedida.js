"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoUnidadMedida extends Catalogo{
  constructor(codigo) {
    const datos = {
      'NIU': {
        descripcion: 'Número de unidades internacionales',
      },
      'ZZ': {
        descripcion: 'Unidad de medida acordada entre dos partes',
      },
    };

    super(datos, codigo);
  }

  static get NIU() {
    return "NIU";
  }
  static get ZZ() {
    return "ZZ";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "03";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Códigos de Tipo de Unidad de Medida Comercial";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Tipo de Unidad de Medida";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "United Nations Economic Commission for Europe";
  }

  /**
   * Obtener el identificador del catálogo
   * @return {String}
   */
  static get idCat() {
    return "UN/ECE rec 20";
  }
}

module.exports = CodigosTipoUnidadMedida;
