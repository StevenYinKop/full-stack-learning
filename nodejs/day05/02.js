var express = require('express');
var app = express();

var db = require('./model/db.js')

app.get('/insertOne', function(req, res){
    for(var i = 8; i<=100; i++){
        db.insertOne('person', 'student', {'name': 'student0'+i}, function(err, result){
            if(err) {
                console.log('插入失败')
                throw err
            }
            // res.send("插入成功!!")
        })
    }

})
app.get('/find', function(req, res){
    var page = req.query.page
    db.find('person', 'student', {}, function(err, result){
        res.json({"result":result})
    })
})


app.listen(3000)