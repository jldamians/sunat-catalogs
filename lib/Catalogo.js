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
 */
function _existe() {
  const hasOwnProperty = _hasOwnProperty(this.datos, this.codigo);

  if (hasOwnProperty === true) {
    return true;
  } else {
    return false;
  }
}

class Catalogo {
  constructor(datos, codigo) {
    this._datos = datos;
    this._codigo = codigo;
  }

  get datos() {
    return this._datos;
  }

  get codigo() {
    return this._codigo;
  }

  /**
   * Obtener el uri del catálogo
   */
  static get uri() {
    return `urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo${this.numero}`;
  }

  /**
   * Obtener información del catálogo
   * @param {String} campo
   */
  informacion(campo) {
    const existe = _existe.bind(this);

    const catalogo = _catalogo.bind(this);

    if (existe() === true) {
      return this.datos[this.codigo][campo];
    } else {
      throw new Error(`${catalogo()}, el código no existe: ${this.codigo}`);
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
