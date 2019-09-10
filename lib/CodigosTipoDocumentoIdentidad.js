"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoDocumentoIdentidad extends Catalogo{
  static get datos() {
    return {
      '0': {
        descripcion: 'DOC.TRIB.NO.DOM.SIN.RUC'
      },
      '1': {
        descripcion: 'Documento Nacional de Identidad'
      },
      '4': {
        descripcion: 'Carnet de extranjería'
      },
      '6': {
        descripcion: 'Registro Unico de Contributentes'
      },
      '7': {
        descripcion: 'Pasaporte'
      },
      'A': {
        descripcion: 'Cédula Diplomática de identidad'
      },
      'B': {
        descripcion: 'DOC.IDENT.PAIS.RESIDENCIA-NO.D'
      },
      'C': {
        descripcion: 'Tax Identification Number - TIN – Doc Trib PP.NN'
      },
      'D': {
        descripcion: 'Identification Number - IN – Doc Trib PP. JJ'
      },
      'E': {
        descripcion: 'TAM- Tarjeta Andina de Migración'
      },
    };
  }

  static get NO_DOMICILIADO() {
    return "0";
  }

  static get DNI() {
    return "1";
  }

  static get CARNET_EXTRANJERIA() {
    return "4";
  }

  static get RUC() {
    return "6";
  }

  static get PASAPORTE() {
    return "7";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static catalogo() {
    return 'Catálogo Nro. 06 - Código de Tipo de Documento de Identidad';
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosTipoDocumentoIdentidad;
