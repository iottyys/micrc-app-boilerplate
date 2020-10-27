'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const module = ctx.params.module;
    const serverRender = require(`../public/${module}/umi.server`);
    const htmlTmpl = await ctx.view.render('index.html', { module });

    const { error, html } = await serverRender({
      path: ctx.url,
      initialData: {},
      htmlTemplate: htmlTmpl,
    });

    if (error) {
      ctx.logger.error(
        'SSR Error. Fallback to CSR',
        error,
        ctx.url
      );
    }

    ctx.type = 'text/html';
    ctx.status = 200;
    ctx.body = html;
  }
}

module.exports = HomeController;
