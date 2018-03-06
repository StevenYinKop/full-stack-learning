// 留言册
var express = require('express');
var formidable = require('formidable')
var app = express();

var db = require('./model/db.js')

// 加载末班引擎
app.set("view engine", "ejs")

app.use(express.static("./public"))

// 显示留言列表
app.get("/", function (req, res, next) {
    res.render("index")
})

app.post("/dopost", function (req, res, next) {
    var form = new formidable.IncomingForm()
    console.log('dopost', form)
    form.parse(req, function (err, fields, files) {
        console.log('parse -> files', files)
        db.insertOne("leaves", "messages",
            {
                "name": fields.name,
                "content": fields.content
            },
            function (err, result) {
                if (err) {
                    res.json({ "success": false })
                    return
                }
                res.json({ "success": true })
            })
    })
})
app.listen(3000)