"use strict";

const Ubigeos = require('ubigeos');

const Catalogo = require('./Catalogo');

class CodigosCargosDescuentos extends Catalogo {
  constructor(codigo) {
    const datos = {};

    const ubigeo = Ubigeos(codigo);

    datos[codigo] = {
      descripcion: `${ubigeo.region} - ${ubigeo.province} - ${ubigeo.district}`,
      distrito: ubigeo.district,
      provincia: ubigeo.province,
      departamento: ubigeo.region,
    };

    super(datos, codigo);
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "13";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de ubicación geográfica";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Ubigeos";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }

  /**
   * Obtenerl el nombre del distrito
   */
  distrito() {
    return super.informacion('distrito');
  }

  /**
   * Obtenerl el nombre de la provincia
   */
  provincia() {
    return super.informacion('provincia');
  }

  /**
   * Obtenerl el nombre del departamento
   */
  departamento() {
    return super.informacion('departamento');
  }
}

module.exports = CodigosCargosDescuentos;
