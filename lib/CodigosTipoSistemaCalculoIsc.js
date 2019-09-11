"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoSistemaCalculoIsc extends Catalogo{
  constructor(codigo) {
    const datos = {
      '01': {
        descripcion: 'Sistema al valor (Apéndice IV, lit. A – T.U.O IGV e ISC)',
      },
      '02': {
        descripcion: 'Aplicación del Monto Fijo ( Sistema específico, bienes en el apéndice III, Apéndice IV, lit. B – T.U.O IGV e ISC)',
      },
      '03': {
        descripcion: 'Sistema de Precios de Venta al Público (Apéndice IV, lit. C – T.U.O IGV e ISC)',
      },
    };

    super(datos, codigo);
  }

  static get SISTEMA_VALOR() {
    return "01";
  }
  static get APLICACION_MONTO_FIJO() {
    return "02";
  }
  static get SISTEMA_PRECIO_PUBLICO() {
    return "03";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numero() {
    return "08";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de tipos de sistema de cálculo del ISC";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Calculo del ISC";
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

module.exports = CodigosTipoSistemaCalculoIsc;
