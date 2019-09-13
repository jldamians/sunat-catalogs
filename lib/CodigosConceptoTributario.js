"use strict";

const Catalogo = require('./Catalogo');

class CodigosConceptoTributario extends Catalogo{
  constructor(codigo) {
    const datos = {
      '7000': {
        descripcion: 'Gastos Art. 37 Renta:  Número de Placa',
      },
      '7001': {
        descripcion: 'Créditos Hipotecarios: Tipo de préstamo',
      },
      '7002': {
        descripcion: 'Créditos Hipotecarios: Indicador de Primera Vivienda',
      },
      '7003': {
        descripcion: 'Créditos Hipotecarios: Partida Registral',
      },
      '7004': {
        descripcion: 'Créditos Hipotecarios: Número de contrato',
      },
      '7005': {
        descripcion: 'Créditos Hipotecarios: Fecha de otorgamiento del crédito',
      },
      '7006': {
        descripcion: 'Créditos Hipotecarios: Dirección del predio - Código de ubigeo',
      },
      '7007': {
        descripcion: 'Créditos Hipotecarios: Dirección del predio - Dirección completa',
      },
      '7008': {
        descripcion: 'Créditos Hipotecarios: Dirección del predio - Urbanización',
      },
      '7009': {
        descripcion: 'Créditos Hipotecarios: Dirección del predio - Provincia',
      },
      '7010': {
        descripcion: 'Créditos Hipotecarios: Dirección del predio - Distrito',
      },
      '7011': {
        descripcion: 'Créditos Hipotecarios: Dirección del predio - Departamento',
      },
    };

    super(datos, codigo);
  }

  static get GTOS_RENTA_NRO_PLACA() {
    return "7000";
  }
  static get CRED_HIPOTECARIO_TIPO_PRESTAMO() {
    return "7001";
  }
  static get CRED_HIPOTECARIO_PRIMERA_VIVIENDA() {
    return "7002";
  }
  static get CRED_HIPOTECARIO_PARTIDA_REGISTRAL() {
    return "7003";
  }
  static get CRED_HIPOTECARIO_NRO_CONTRATO() {
    return "7004";
  }
  static get CRED_HIPOTECARIO_FECHA_OTORGAMIENTO() {
    return "7005";
  }
  static get CRED_HIPOTECARIO_UBIGEO() {
    return "7006";
  }
  static get CRED_HIPOTECARIO_DIRECCION() {
    return "7007";
  }
  static get CRED_HIPOTECARIO_URBANIZACION() {
    return "7008";
  }
  static get CRED_HIPOTECARIO_PROVINCIA() {
    return "7009";
  }
  static get CRED_HIPOTECARIO_DISTRITO() {
    return "7010";
  }
  static get CRED_HIPOTECARIO_DEPARTAMENTO() {
    return "7011";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "55";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Códigos de Identificación del Concepto Tributario";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Propiedad del item";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }
}

module.exports = CodigosConceptoTributario;
