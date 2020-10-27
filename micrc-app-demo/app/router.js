'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/overview', 302);
  router.get('/overview', controller.overview.index);
  router.get('/overview/*', controller.overview.index);
  router.get('/modules/:module', controller.home.index);
  router.get('/modules/:module/*', controller.home.index);
};
