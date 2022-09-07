'use strict';

/**
 * foo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::foo.foo');
