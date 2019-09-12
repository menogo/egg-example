// 写业务的时候，不可避免的需要有配置文件，框架提供了强大的配置合并管理功能：
// 支持按环境变量加载不同的配置文件，如 config.local.js， config.prod.js 等等。
// 应用/插件/框架都可以配置自己的配置文件，框架将按顺序合并加载。
// 具体合并逻辑可参见配置文件。

exports.keys = 'ababab'

// add view config
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}

// 添加 news 的配置项
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

// add middleware robot
exports.middleware = [
    'robot'
]

// robot's configurations
exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i,
    ]
}

// 数据库连接配置
exports.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg-sequelize-doc-default',
    username: 'root',
    password: 'dd'
}