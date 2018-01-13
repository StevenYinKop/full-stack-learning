const mysql = require('mysql')

const db = mysql.createPool({host:'localhost' ,user:'root' ,password: '123456', database:'my_first_db'})// 可以创建连接池访问, 默认十个请求数
// const db = mysql.createConnection({host:'localhost' ,user:'root' ,password: '123456', database:'my_first_db'})// 连接数据库
db.query('SELECT * FROM tb_user', (err, data ) => { // SQL文和查询后的回调
    if (err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data)) // 如果查询成功则返回数据的json
    }
})