var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();


app.get("/", function (req, res) {
    var url = 'mongodb://localhost:27017/';
    MongoClient.connect(url, function (err, client) {
        console.log('connect', client)
        // 高版本的mongo中, 回调函数的第二个参数不再是db了, 而是client所以要手动选择数据库.
        var db = client.db('firstmongoDb')
        if (err) {
            console.log('connection error! ',err);
            throw err;
        }
        console.log('Connected success !!');
        db.collection('person').insertOne({
            "name": "lisi",
            "age": 24,
        }, function (err, result) {
            if (err) {
                console.log('insert error',err);
                throw err;
            }
            console.log('insert Success')
            client.close();
        });
    });
});


app.listen(3000);