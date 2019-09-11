"use strict";

const Catalogo = require('./Catalogo');

class CodigosEstadoItem extends Catalogo{
  constructor(codigo) {
    const datos = {
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

    super(datos, codigo);
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
   * Obtener el número del catálogo
   */
  static get numero() {
    return "19";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de estado del ítem (resumen diario)";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Código de Estado del Ítem";
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

module.exports = CodigosEstadoItem;
