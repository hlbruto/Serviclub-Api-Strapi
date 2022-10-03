'use strict';

/**
 * trabajador service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trabajador.trabajador');
