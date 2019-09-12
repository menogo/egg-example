// 框架提供了一种快速扩展的方式，只需在 app/extend 目录下提供扩展脚本即可，具体参见扩展 https://eggjs.org/zh-cn/basics/extend.html。
const moment = require('moment')
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow()