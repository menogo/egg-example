// only read at development mode, will override default
exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
}

// 数据库连接配置
exports.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg-sequelize-doc-default-unittest'
}