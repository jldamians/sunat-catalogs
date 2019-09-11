"use strict";

const _hasOwnProperty = (object, prop) => {
  return Object.prototype.hasOwnProperty.call(object, prop);
};

/**
 * Obtener una descripción completa del catálogo
 */
function _catalogo() {
  return `Catálogo Nro. ${this.numero} - ${this.titulo}`;
}

/**
 * Verificar la existencia del código
 * @param {String} codigo
 */
function _existe(codigo) {
  const hasOwnProperty = _hasOwnProperty(this.datos, codigo);

  if (hasOwnProperty === true) {
    return true;
  } else {
    return false;
  }
}

class Catalogo {
  /**
   * Obtener información del catálogo
   * @param {String} codigo
   * @param {String} campo
   */
  static informacion(codigo, campo) {
    const existe = _existe.bind(this);

    const catalogo = _catalogo.bind(this);

    if (existe(codigo) === true) {
      return this.datos[codigo][campo];
    } else {
      throw new Error(`${catalogo()}, el código no existe: ${codigo}`);
    }
  }

  /**
   * Obtener el uri del catálogo
   */
  static get uri() {
    return `urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo${this.numero}`;
  }
}

module.exports = Catalogo;
