"use strict";

const Catalogo = require('./Catalogo');

class CodigosLeyendas extends Catalogo{
  constructor(codigo) {
    const datos = {
      '1000': {
        descripcion: 'Monto en Letras',
      },
      '1002': {
        descripcion: 'TRANSFERENCIA GRATUITA DE UN BIEN Y/O SERVICIO PRESTADO GRATUITAMENTE',
      },
      '2000': {
        descripcion: 'COMPROBANTE DE PERCEPCIÓN',
      },
      '2001': {
        descripcion: 'BIENES TRANSFERIDOS EN LA AMAZONÍA REGIÓN SELVA PARA SER CONSUMIDOS EN LA MISMA',
      },
      '2002': {
        descripcion: 'SERVICIOS PRESTADOS EN LA AMAZONÍA  REGIÓN SELVA PARA SER CONSUMIDOS EN LA MISMA',
      },
      '2003': {
        descripcion: 'CONTRATOS DE CONSTRUCCIÓN EJECUTADOS  EN LA AMAZONÍA REGIÓN SELVA',
      },
      '2004': {
        descripcion: 'Agencia de Viaje - Paquete turístico',
      },
      '2005': {
        descripcion: 'Venta realizada por emisor itinerante',
      },
      '2006': {
        descripcion: 'Operación sujeta a detracción',
      },
      '2007': {
        descripcion: 'Operación sujeta al IVAP',
      },
      '2008': {
        descripcion: 'VENTA EXONERADA DEL IGV-ISC-IPM. PROHIBIDA LA VENTA FUERA DE LA ZONA COMERCIAL DE TACNA',
      },
      '2009': {
        descripcion: 'PRIMERA VENTA DE MERCANCÍA IDENTIFICABLE ENTRE USUARIOS DE LA ZONA COMERCIAL',
      },
      '2010': {
        descripcion: 'Restitucion Simplificado de Derechos Arancelarios',
      },
    };

    super(datos, codigo);
  }

  static get MONTO_LETRAS() {
    return "1000";
  }
  static get TRANSFERENCIA_GRATUITA() {
    return "1002";
  }
  static get COMPROBANTE_PERCEPCION() {
    return "2000";
  }
  static get BIENES_TRANSFERIDOS_AMAZONIA() {
    return "2001";
  }
  static get SERVICIOS_PRESTADOS_AMAZONIA() {
    return "2002";
  }
  static get CONTRATOS_CONSTRUCCION_AMAZONIA() {
    return "2003";
  }
  static get AGENCIA_VIAJE() {
    return "2004";
  }
  static get EMISOR_ITINERANTE() {
    return "2005";
  }
  static get OPERACION_DETRACCION() {
    return "2006";
  }
  static get OPERACION_IVAP() {
    return "2007";
  }
  static get VENTA_EXONERADA_TACNA() {
    return "2008";
  }
  static get PRIMERA_VENTA_ZONA_COMERCIAL() {
    return "2009";
  }
  static get DERECHOS_ARANCELARIOS() {
    return "2010";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "52";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Códigos de leyendas";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Códigos de Leyendas";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }
}

module.exports = CodigosLeyendas;
