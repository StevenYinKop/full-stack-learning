var express = require('express');
var app = express();

var db = require('./model/db.js')

app.get('/insertOne', function(req, res){
    db.insertOne('person', 'student', {'name': 'student01'}, function(err, result){
        if(err) {
            console.log('插入失败')
            throw err
        }
        res.send("插入成功!!")
    })

})


app.listen(3000)