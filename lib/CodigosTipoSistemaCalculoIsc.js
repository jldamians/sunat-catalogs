"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoSistemaCalculoIsc extends Catalogo{
  static get datos() {
    return {
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
   * Obtener el nombre del catálogo
   */
  static catalogo() {
    return 'Catálogo Nro. 08 - Código de Tipos de Sistema de Cálculo del ISC';
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosTipoSistemaCalculoIsc;
