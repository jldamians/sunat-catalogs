"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoPrecioVentaUnitario extends Catalogo{
  constructor(codigo) {
    const datos = {
      '01': {
        descripcion: 'Precio unitario (incluye el IGV)',
      },
      '02': {
        descripcion: 'Valor referencial unitario en operaciones no onerosas (Gratuitas)',
      },
      '03': {
        descripcion: 'Tarifas reguladas',
      },
    };

    super(datos, codigo);
  }

  static get PRECIO_UNITARIO() {
    return "01";
  }
  static get VALOR_REFERENCIAL_UNITARIO() {
    return "02";
  }
  static get TARIFAS_REGULADAS() {
    return "03";
  }

    /**
   * Obtener el número del catálogo
   */
  static get numero() {
    return "16";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de tipo de precio de venta unitario";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Tipo de Precio";
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

module.exports = CodigosTipoPrecioVentaUnitario;
