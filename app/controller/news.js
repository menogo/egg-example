const Controller = require('egg').Controller

class NewController extends Controller {
    async list() {

        // 在实际应用中，Controller 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service。
        // const dataList = {
        //     list: [
        //         { id: 1, title: 'this is news 1', url: '/news/1' },
        //         { id: 2, title: 'this is news 2', url: '/news/2' }
        //     ]
        // }
        // await this.ctx.render('news/list.tpl', dataList)

        
        // 数据交给Service去处理
        const ctx = this.ctx
        const page = ctx.query.page || 1
        const newList = await ctx.service.news.list(page)
        await this.ctx.render('news/list.tpl', { list: newList })
    }
}

module.exports = NewController