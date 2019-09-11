"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoNotaDebito extends Catalogo{
  constructor(codigo) {
    const datos = {
      '01': {
        descripcion: 'Intereses por mora',
      },
      '02': {
        descripcion: 'Aumento en el valor',
      },
      '03': {
        descripcion: 'Penalidades/ otros conceptos',
      },
      '11': {
        descripcion: 'Ajustes de operaciones de exportación',
      },
      '12': {
        descripcion: 'Ajustes afectos al IVAP',
      },
    };

    super(datos, codigo);
  }

  static get INTERESES_MORA() {
    return "01";
  }
  static get AUMENTO_VALOR() {
    return "02";
  }
  static get PENALIDADES() {
    return "03";
  }
  static get AJUSTES_OPERACION_EXPORTACION() {
    return "11";
  }
  static get AJUSTES_AFECTOS_IVAP() {
    return "12";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numero() {
    return "10";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Códigos de tipo de nota de débito electrónica";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Tipo de nota de debito";
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

module.exports = CodigosTipoNotaDebito;
