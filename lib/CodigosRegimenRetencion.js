"use strict";

const Catalogo = require('./Catalogo');

class CodigosRegimenRetencion extends Catalogo{
  constructor(codigo) {
    const datos = {
      '01': {
        descripcion: 'Tasa 3%',
        tasa: 3.0,
      },
      '02': {
        descripcion: 'Tasa 6%',
        tasa: 6.0,
      },
    };

    super(datos, codigo);
  }

  static get TASA_3() {
    return "01";
  }
  static get TASA_6() {
    return "02";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numero() {
    return "23";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de regimen de retenciones";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Código de Regimen de Retenciones";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agencia() {
    return "PE:SUNAT";
  }

  /**
   * Obtener la tasa relacionado a un código
   */
  tasa() {
    return super.informacion('tasa');
  }
}

module.exports = CodigosRegimenRetencion;
