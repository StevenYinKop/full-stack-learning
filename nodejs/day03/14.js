var express = require("express");

var app = express();

app.engine('jade', require('jade').__express);
app.set("view engine","jade");

app.get("/",function(req,res){
    console.log(req.ip);
    res.render("xixi");
});

app.listen(3000);