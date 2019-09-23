"use strict";

function _hasOwnProperty(objeto, campo) {
  return Object.prototype.hasOwnProperty.call(objeto, campo);
}

class Catalogo {
  constructor(datosCat, codigoCat) {
    const existeCodigoCat = _hasOwnProperty(datosCat, codigoCat);

    if (existeCodigoCat === false) {
      throw new Error(
        `Catálogo Nro. ${this.constructor.numeroCat} - ${this.constructor.tituloCat}, el código "${codigoCat}" no existe`
      );
    }

    this._datosCat = datosCat;
    this._codigoCat = codigoCat;
  }

  get datosCat() {
    return this._datosCat;
  }

  get codigoCat() {
    return this._codigoCat;
  }

  /**
   * Obtener el uri del catálogo
   */
  static get uriCat() {
    return `urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo${this.numeroCat}`;
  }

  /**
   * Obtener información del catálogo
   * @param {String} campo
   */
  informacion(campo) {
    const elemento = this.datosCat[this.codigoCat];

    const existeCampo = _hasOwnProperty(elemento, campo);

    if (existeCampo === true) {
      return elemento[campo];
    } else {
      throw new Error(`El campo "${campo}" no existe`);
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
