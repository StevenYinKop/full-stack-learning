var express = require('express')
var app = express();
var router = require('./controller/router.js')

app.set('view engine', 'ejs')

// 路由中间件
// 路由静态页面
app.use(express.static('./public'))

app.get('/', router.showIndex)

app.get('/:albumName', router.showAlbum)
app.listen(3000)