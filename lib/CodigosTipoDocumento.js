"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoDocumento extends Catalogo{
  static get datos() {
    return {
      '01': {
        descripcion: 'Factura',
      },
      '03': {
        descripcion: 'Boleta de venta',
      },
      '07': {
        descripcion: 'Nota de crédito',
      },
      '08': {
        descripcion: 'Nota de débito',
      },
      '09': {
        descripcion: 'Guía de remisión remitente',
      },
      '20': {
        descripcion: 'Comprobante de retención',
      },
      '31': {
        descripcion: 'Guía de remisión transportista',
      },
      '40': {
        descripcion: 'Comprobante de percepción',
      },
    };
  }

  static get FA() {
    return "01";
  }
  static get BV() {
    return "03";
  }
  static get NC() {
    return "07";
  }
  static get ND() {
    return "08";
  }
  static get GRR() {
    return "09";
  }
  static get CPER() {
    return "20";
  }
  static get GRT() {
    return "31";
  }
  static get CPEP() {
    return "40";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static catalogo() {
    return 'Catálogo Nro. 01 - Código de Tipo de Documento';
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosTipoDocumento;
