const Controller = require('egg').Controller

function toInt(str) {
    if (typeof str === 'number') return str
    if (!str) return str
    return parseInt(str, 10) || 0
}

class UserController extends Controller {
    async index() {
        const ctx = this.ctx
        console.log('======')
        console.log('this.ctx.model =>', this.ctx.model)
        console.log('this.ctx =>', this.ctx)
        console.log('this =>', this)
        console.log('this.ctx.req =>', ctx.req)
        console.log('this.ctx.query =>', ctx.query)
        console.log('this.ctx.params =>', ctx.params)
        console.log('this.ctx.cookies =>', ctx.cookies)
        console.log('======')
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) }
        ctx.body = await ctx.model.User.findAll(query)
    }

    async show() {
        const ctx = this.ctx
        ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id))
    }
}

module.exports = UserController