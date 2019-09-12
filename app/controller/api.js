const Controller = require('egg').Controller

class ApiController extends Controller {
    async product() {
        this.ctx.body = 'some product';
    }

    async about() {
        this.ctx.body = {
            content: 'some about'
        };
    }
}

module.exports = ApiController