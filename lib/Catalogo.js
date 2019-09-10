"use strict";

const _hasOwnProperty = (object, prop) => {
  return Object.prototype.hasOwnProperty.call(object, prop);
};

class Catalogo {
  /**
   * Verificar la existencia del código
   * @param {String} codigo
   */
  static existe(codigo) {
    const hasOwnProperty = _hasOwnProperty(this.datos, codigo);

    if (hasOwnProperty === true) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Obtener información del catálogo
   * @param {String} codigo
   * @param {String} campo
   */
  static informacion(codigo, campo) {
    if (this.existe(codigo) === true) {
      return this.datos[codigo][campo];
    } else {
      throw new Error(`${this.catalogo()}, el código no existe: ${codigo}`);
    }
  }
}

module.exports = Catalogo;
