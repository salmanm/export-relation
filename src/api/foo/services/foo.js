'use strict';

/**
 * foo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::foo.foo');
