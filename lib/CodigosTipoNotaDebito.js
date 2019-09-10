"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoNotaDebito extends Catalogo{
  static get datos() {
    return {
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
   * Obtener el nombre del catálogo
   */
  static catalogo() {
    return 'Catálogo Nro. 10 - Códigos de Tipo de Nota de Débito Electrónica';
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosTipoNotaDebito;
