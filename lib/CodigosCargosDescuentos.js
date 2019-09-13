"use strict";

const Catalogo = require('./Catalogo');

class CodigosCargosDescuentos extends Catalogo{
  constructor(codigo) {
    const datos = {
      '00': {
        descripcion: 'Descuentos que afectan la base imponible del IGV/IVAP',
        indicador: false,
      },
      '01': {
        descripcion: 'Descuentos que no afectan la base imponible del IGV/IVAP',
        indicador: false,
      },
      '02': {
        descripcion: 'Descuentos globales que afectan la base imponible del IGV/IVAP',
        indicador: false,
      },
      '03': {
        descripcion: 'Descuentos globales que no afectan la base imponible del IGV/IVAP',
        indicador: false,
      },
      '47': {
        descripcion: 'Cargos que afectan la base imponible del IGV/IVAP',
        indicador: true,
      },
      '48': {
        descripcion: 'Cargos que no afectan la base imponible del IGV/IVAP',
        indicador: true,
      },
      '49': {
        descripcion: 'Cargos globales que afectan la base imponible del IGV/IVAP',
        indicador: true,
      },
      '50': {
        descripcion: 'Cargos globales que no afectan la base imponible del IGV/IVAP',
        indicador: true,
      },
    };

    super(datos, codigo);
  }

  static get DCTOS_ITEM_AFECTA_BASE_IGV_IVAP() {
    return "00";
  }
  static get DCTOS_ITEM_NO_AFECTA_BASE_IGV_IVAP() {
    return "01";
  }
  static get DCTOS_GLOBAL_AFECTA_BASE_IGV_IVAP() {
    return "02";
  }
  static get DCTOS_GLOBAL_NO_AFECTA_BASE_IGV_IVAP() {
    return "03";
  }
  static get CARGOS_ITEM_AFECTA_BASE_IGV_IVAP() {
    return "47";
  }
  static get CARGOS_ITEM_NO_AFECTA_BASE_IGV_IVAP() {
    return "48";
  }
  static get CARGOS_GLOBAL_AFECTA_BASE_IGV_IVAP() {
    return "49";
  }
  static get CARGOS_GLOBAL_NO_AFECTA_BASE_IGV_IVAP() {
    return "50";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "53";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Códigos de cargos o descuentos";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Cargo/descuento";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }

  /**
   * Obtenerl el indicador de descuento (false) o cargo (true)
   */
  indicador() {
    return super.informacion('indicador');
  }
}

module.exports = CodigosCargosDescuentos;
