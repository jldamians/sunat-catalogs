"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoDocumento extends Catalogo{
  constructor(codigo) {
    const datos = {
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

    super(datos, codigo);
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
   * Obtener el número del catálogo
   */
  static get numero() {
    return "01";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de tipo de documento";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Tipo de Documento";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agencia() {
    return "PE:SUNAT";
  }
}

module.exports = CodigosTipoDocumento;
