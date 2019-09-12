module.exports = app => {
    const { router, controller } = app

    router.namespace('/api')
        .get('/about', controller.api.about)
}
