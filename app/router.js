module.exports = app => {
    const { router, controller } = app
    
    router.get('/', controller.home.index)
    router.get('/news', controller.news.list)
    
    router.resources('users', '/users', controller.users)


    // [egg.js 解决路由映射过多的两种方案]https://blog.csdn.net/u010365819/article/details/84345349
    // 使用 egg-router-plus
    // 一种是：直接在 app/router.js 里使用 Namespace
    router.namespace('/sub')
        .get('/test', controller.api.product)

    // 一种是：拆分成单独文件
    require('./routes/api.js')(app)
}
