"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoNotaCredito extends Catalogo{
  static get datos() {
    return {
      '01': {
        descripcion: 'Anulación de la operación',
      },
      '02': {
        descripcion: 'Anulación por error en el RUC',
      },
      '03': {
        descripcion: 'Corrección por error en la descripción',
      },
      '04': {
        descripcion: 'Descuento global',
      },
      '05': {
        descripcion: 'Descuento por ítem',
      },
      '06': {
        descripcion: 'Devolución total',
      },
      '07': {
        descripcion: 'Devolución por ítem',
      },
      '08': {
        descripcion: 'Bonificación',
      },
      '09': {
        descripcion: 'Disminución en el valor',
      },
      '10': {
        descripcion: 'Otros Conceptos',
      },
      '11': {
        descripcion: 'Ajustes de operaciones de exportación',
      },
      '12': {
        descripcion: 'Ajustes afectos al IVAP',
      },
    };
  }

  static get ANULACION_OPERACION() {
    return "01";
  }
  static get ANULACION_ERROR_RUC() {
    return "02";
  }
  static get CORRECCION_ERROR_DESCRIPCION() {
    return "03";
  }
  static get DESCUENTO_GLOBAL() {
    return "04";
  }
  static get DESCUENTO_ITEM() {
    return "05";
  }
  static get DEVOLUCION_TOTAL() {
    return "06";
  }
  static get DEVOLUCION_ITEM() {
    return "07";
  }
  static get BONIFICACION() {
    return "08";
  }
  static get DISMINUCION_VALOR() {
    return "09";
  }
  static get OTROS_CONCEPTOR() {
    return "10";
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
    return 'Catálogo Nro. 09 - Códigos de Tipo de Nota de Crédito Electrónica';
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosTipoNotaCredito;
