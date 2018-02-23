var express = require("express");
var bodyParser = require('body-parser')

var app = express();

// 模板引擎
app.set("view engine","ejs");

app.get("/",function(req,res){
     res.render("form");
});

// bodyParser API
// 用来解析post请求的body内容
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/",function(req,res){
    console.log(req.body);
});

app.listen(3000);