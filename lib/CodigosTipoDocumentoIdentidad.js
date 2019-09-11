"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoDocumentoIdentidad extends Catalogo{
  constructor(codigo) {
    const datos = {
      '0': {
        descripcion: 'DOC.TRIB.NO.DOM.SIN.RUC',
      },
      '1': {
        descripcion: 'Documento Nacional de Identidad',
      },
      '4': {
        descripcion: 'Carnet de extranjería',
      },
      '6': {
        descripcion: 'Registro Unico de Contributentes',
      },
      '7': {
        descripcion: 'Pasaporte',
      },
      'A': {
        descripcion: 'Cédula Diplomática de identidad',
      },
      'B': {
        descripcion: 'DOC.IDENT.PAIS.RESIDENCIA-NO.D',
      },
      'C': {
        descripcion: 'Tax Identification Number - TIN – Doc Trib PP.NN',
      },
      'D': {
        descripcion: 'Identification Number - IN – Doc Trib PP. JJ',
      },
      'E': {
        descripcion: 'TAM- Tarjeta Andina de Migración',
      },
    };

    super(datos, codigo);
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
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "06";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de tipo de documento de identidad";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Documento de Identidad";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }
}

module.exports = CodigosTipoDocumentoIdentidad;
