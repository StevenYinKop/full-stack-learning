var mongoClient = require('mongodb').MongoClient;

function _connect(callback) {
    mongoClient.connect('mongodb://localhost:27017/', function (err, client) {
        if (err) {
            console.log(err)
            throw err
        }
        // var db = client.db('student')
        callback(err, client)
    })
}

exports.insertOne = function (dbName, collectionName, json, callback) {
    _connect(function (err, client) {
        var db = client.db(dbName)
        db.collection(collectionName).insertOne(json, function (err, result) {
            callback(err, result)
            client.close();
        })
    })
}

exports.find = find

// function find(dbName, collectionName, json, callback) {
//     find(dbName,collectionName,json,{},callback)
// }

function find(dbName, collectionName, json, callback, limit_skip) {
    var result = []
    var limit, skip
    console.log(arguments)
    if (arguments.length != 5) {
        limit = 0
        skip = 0
        // callback('arguments`s length must be 5!', null)
    }

    // console.log(typeof limit_skip == )
    json = json || {}
    _connect(function (err, client) {
        if (err) {
            callback(err, null)
        }
        var db = client.db(dbName)
        var cursor = db.collection(collectionName).find(json)
        cursor.each(function (err, doc) {
            if(err){
                callback('', null)
            }
            if (doc) {
                result.push(doc)
            } else {
                callback(null, result)
            }
        })
    })
}