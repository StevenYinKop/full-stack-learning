var express = require('express');
var app = express();

var db = require('./model/db.js')

app.get('/insertOne', function (req, res) {
    for (var i = 0; i <= 100; i++) {
        db.insertOne('person', 'student', { 'name': 'student0' + i }, function (err, result) {
            if (err) {
                console.log('插入失败')
                throw err
            }
            // res.send("插入成功!!")
        })
    }

})
app.get('/find', function (req, res) {
    var page = req.query.page
    db.find('person', 'student', {}, function (err, result) {
        res.json({ "result": result })
    }, { page })
})

app.get('/delete', function (req, res) {
    var name = req.query.name
    db.delete('person', 'student', { "name": name }, function (err, result) {
        if (err) {
            res.send(err)
            return
        }
        res.json({ "result": result })
    })
})
app.get('/update', function (req, res) {
    var name = req.query.name
    db.update('person', 'student', 
    { "name": name },
    { $set: {name: "student0000"}}, function (err, result) {
        if (err) {
            res.send(err)
            return
        }
        res.json({ "result": result })
    })
})


app.listen(3000)