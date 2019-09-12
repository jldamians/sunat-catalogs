"use strict";

const Catalogo = require('./Catalogo');

class CodigosDocumentosRelacionadosTributarios extends Catalogo{
  constructor(codigo) {
    const datos = {
      '01': {
        descripcion: 'Factura - emitida para corregir error en el RUC',
      },
      '02': {
        descripcion: 'Factura - emitida por anticipos',
      },
      '03': {
        descripcion: 'Boleta de Venta - emitida por anticipos',
      },
      '04': {
        descripcion: 'Ticket de Salida - ENAPU',
      },
      '05': {
        descripcion: 'Código SCOP',
      },
      '99': {
        descripcion: 'Otros',
      },
    };

    super(datos, codigo);
  }

  static get FA_CORREGIR_RUC() {
    return "01";
  }
  static get FA_ANTICIPO() {
    return "02";
  }
  static get BV_ANTICIPO() {
    return "03";
  }
  static get TICKET_SALIDA_ENAPU() {
    return "04";
  }
  static get CODIGO_SCOP() {
    return "05";
  }
  static get OTROS() {
    return "99";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "12";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de documentos relacionados tributarios";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Documento Relacionado";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }
}

module.exports = CodigosDocumentosRelacionadosTributarios;
