var express = require('express')
var app = express();
var router = require('./controller/router.js')

app.set('view engine', 'ejs')

// 路由中间件
// 路由静态页面
app.use(express.static('./public'))
app.use(express.static('./uploads'))

console.log('app.get')
app.get('/', router.showIndex)

app.get('/:albumName', router.showAlbum)

// app.get()
app.listen(3000)