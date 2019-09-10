"use strict";

const Catalogo = require('./Catalogo');

class CodigosEstadoItem extends Catalogo{
  static get datos() {
    return {
      '1': {
        descripcion: 'Adicionar',
      },
      '2': {
        descripcion: 'Modificar',
      },
      '3': {
        descripcion: 'Anulado',
      },
    };
  }

  static get ADICIONAR() {
    return "1";
  }
  static get MODIFICAR() {
    return "2";
  }
  static get ANULADO() {
    return "3";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static catalogo() {
    return 'Catálogo Nro. 19 - Códigos de Estado del Ítem';
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosEstadoItem;
