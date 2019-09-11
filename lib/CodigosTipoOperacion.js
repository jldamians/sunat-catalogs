"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoOperacion extends Catalogo{
  static get datos() {
    return {
      '0101': {
        descripcion: 'Venta interna',
      },
      '0112': {
        descripcion: 'Venta Interna - Sustenta Gastos Deducibles Persona Natural',
      },
      '0113': {
        descripcion: 'Venta Interna - NRUS',
      },
      '0200': {
        descripcion: 'Exportación de Bienes',
      },
      '0201': {
        descripcion: 'Exportación de Servicios - Prestación servicios realizados íntegramente en el país',
      },
      '0202': {
        descripcion: 'Exportación de Servicios - Prestación de servicios de hospedaje No Domiciliado',
      },
      '0203': {
        descripcion: 'Exportación de Servicios - Transporte de navieras',
      },
      '0204': {
        descripcion: 'Exportación de Servicios - Servicios  a naves y aeronaves de bandera extranjera',
      },
      '0205': {
        descripcion: 'Exportación de Servicios - Servicios que conformen un Paquete Turístico',
      },
      '0206': {
        descripcion: 'Exportación de Servicios - Servicios complementarios al transporte de carga',
      },
      '0207': {
        descripcion: 'Exportación de Servicios - Suministro de energía eléctrica a favor de sujetos domiciliados en ZED',
      },
      '0208': {
        descripcion: 'Exportación de Servicios - Prestación servicios realizados parcialmente en el extranjero',
      },
      '0301': {
        descripcion: 'Operaciones con Carta de porte aéreo (emitidas en el ámbito nacional)',
      },
      '0302': {
        descripcion: 'Operaciones de Transporte ferroviario de pasajeros',
      },
      '0303': {
        descripcion: 'Operaciones de Pago de regalía petrolera',
      },
      '0401': {
        descripcion: 'Ventas no domiciliados que no califican como exportación',
      },
      '1001': {
        descripcion: 'Operación Sujeta a Detracción',
      },
      '1002': {
        descripcion: 'Operación Sujeta a Detracción - Recursos Hidrobiológicos',
      },
      '1003': {
        descripcion: 'Operación Sujeta a Detracción - Servicios de Transporte Pasajeros',
      },
      '1004': {
        descripcion: 'Operación Sujeta a Detracción - Servicios de Transporte Carga',
      },
      '2001': {
        descripcion: 'Operación Sujeta a Percepción',
      },
    };
  }

  static get VENTA_INTERNA() {
    return "0101";
  }
  static get VENTA_INTERNA_GASTOS_DEDUCIBLES() {
    return "0112";
  }
  static get VENTA_INTERNA_NRUS() {
    return "0113";
  }
  static get EXPORTACION_BIENES() {
    return "0200";
  }
  static get EXPORTACION_SERVICIOS_INTEGRAMENTE_PAIS() {
    return "0201";
  }
  static get EXPORTACION_SERVICIOS_HOSPEDAJE_NO_DOMICILIADO() {
    return "0202";
  }
  static get EXPORTACION_SERVICIOS_TRANSPORTE_NAVIERAS() {
    return "0203";
  }
  static get EXPORTACION_SERVICIOS_NAVES_AERONAVES_EXTRANJERAS() {
    return "0204";
  }
  static get EXPORTACION_SERVICIOS_PAQUETE_TURISTICO() {
    return "0205";
  }
  static get EXPORTACION_SERVICIOS_TRANSPORTE_CARGA() {
    return "0206";
  }
  static get EXPORTACION_SERVICIOS_SUMINISTRO_ELECTRICO_ZED() {
    return "0207";
  }
  static get EXPORTACION_SERVICIOS_PARCIALMENTE_EXTRANJERO() {
    return "0208";
  }
  static get OPERACIONES_CARTA_PORTE_AEREO() {
    return "0301";
  }
  static get OPERACIONES_TRANSPORTE_FERROVIARIO() {
    return "0302";
  }
  static get OPERACIONES_REGALIA_PETROLEO() {
    return "0303";
  }
  static get VENTA_NO_DOMICILIADA_NO_CALIFICA_EXPORTACION() {
    return "0401";
  }
  static get OPERACION_DETRACCION() {
    return "1001";
  }
  static get OPERACION_DETRACCION_RECURSOS_HIDROBIOLOGICOS() {
    return "1002";
  }
  static get OPERACION_DETRACCION_TRANSPORTE_PASAJEROS() {
    return "1003";
  }
  static get OPERACION_DETRACCION_TRANSPORTE_CARGA() {
    return "1004";
  }
  static get OPERACION_PERCEPCION() {
    return "2001";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numero() {
    return "51";
  }

  /**
   * Obtener el título del catálogo
   */
  static get titulo() {
    return "Código de tipo de operación";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombre() {
    return "Tipo de Operacion";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agencia() {
    return "PE:SUNAT";
  }

  /**
   * Obtener la descripción relacionado a un código
   * @param {String} codigo
   */
  static descripcion(codigo) {
    return super.informacion(codigo, 'descripcion');
  }
}

module.exports = CodigosTipoOperacion;
