"use strict";

function _hasOwnProperty() {
  return Object.prototype.hasOwnProperty.call(this.datosCat, this.codigoCat);
};

/**
 * Obtener una descripción completa del catálogo
 */
function _catalogo() {
  return `Catálogo Nro. ${this.constructor.numeroCat} - ${this.constructor.tituloCat}`;
}

class Catalogo {
  constructor(datos, codigo) {
    this._datos = datos;
    this._codigo = codigo;
  }

  get datosCat() {
    return this._datos;
  }

  get codigoCat() {
    return this._codigo;
  }

  /**
   * Obtener el uri del catálogo
   */
  static get uriCat() {
    return `urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo${this.numeroCat}`;
  }

  /**
   * Verificar la existencia del código
   */
  existe() {
    const existeCodigoCatalogo = _hasOwnProperty.bind(this);

    if (existeCodigoCatalogo() === true) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Obtener información del catálogo
   * @param {String} campo
   */
  informacion(campo) {
    const catalogo = _catalogo.bind(this);

    if (this.existe() === true) {
      return this.datosCat[this.codigoCat][campo];
    } else {
      throw new Error(`${catalogo()}, el código no existe: ${this.codigoCat}`);
    }
  }

  /**
   * Obtener la descripción relacionado aL codigo
   */
  descripcion() {
    return this.informacion('descripcion');
  }
}

module.exports = Catalogo;
