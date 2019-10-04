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
  static get numeroCat() {
    return "16";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de tipo de precio de venta unitario";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Tipo de Precio";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }

  esOneroso() {
    let oneroso;

    if (this._codigoCat === CodigosTipoPrecioVentaUnitario.PRECIO_UNITARIO) {
      oneroso = true;
    } else if (this._codigoCat === CodigosTipoPrecioVentaUnitario.VALOR_REFERENCIAL_UNITARIO) {
      oneroso = false;
    } else {
      throw new Error(
        `Catálogo Nro. ${this.constructor.numeroCat} - ${this.constructor.tituloCat}, el código "${this._codigoCat}" no corresponde a un precio unitario oneroso o gratuito`
      );
    }

    return oneroso;
  }
}

module.exports = CodigosTipoPrecioVentaUnitario;
