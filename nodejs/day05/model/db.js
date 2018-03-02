var mongoClient = require('mongodb').MongoClient;

function _connect(callback) {
    mongoClient.connect('mongodb://localhost:27017/',function(err, client){
        if(err) {
            console.log(err)
            throw err
        }
        // var db = client.db('student')
        callback(err, client)
    })
}

exports.insertOne = function (dbName, collectionName, json, callback) {
    _connect(function(err, client){
        var db = client.db(dbName)
        db.collection(collectionName).insertOne(json, function(err, result){
            callback(err, result)
            client.close();
        })
    })
}

exports.find = function (dbName, collectionName, json, args, callback) {
    
}