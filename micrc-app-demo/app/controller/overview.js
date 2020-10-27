'use strict';

const Controller = require('egg').Controller;

class OverviewController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.view.render('overview.html');
    ctx.type = 'text/html';
    ctx.status = 200;
  }
}

module.exports = OverviewController;
