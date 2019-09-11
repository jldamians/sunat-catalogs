"use strict";

const Catalogo = require('./Catalogo');

class CodigosRegimenPercepcion extends Catalogo{
  constructor(codigo) {
    const datos = {
      '01': {
        descripcion: 'Percepción Venta Interna',
        tasa: 2.0,
      },
      '02': {
        descripcion: 'Percepción a la adquisición de combustible',
        tasa: 1.0,
      },
      '03': {
        descripcion: 'Percepción realizada al agente de percepción con tasa especial',
        tasa: 0.5,
      },
    };

    super(datos, codigo);
  }

  static get VENTA_INTERNA() {
    return "01";
  }
  static get ADQUISICION_COMBUSTIBLE() {
    return "02";
  }
  static get TASA_ESPECIAL() {
    return "03";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "22";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de regimen de percepciones";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Código de Regimen de Percepciones";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }

  /**
   * Obtener la tasa relacionado a un código
   */
  tasa() {
    return super.informacion('tasa');
  }
}

module.exports = CodigosRegimenPercepcion;
