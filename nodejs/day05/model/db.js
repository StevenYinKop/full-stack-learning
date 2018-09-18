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

function find(dbName, collectionName, json, callback, skip) {
    if (arguments.length == 3) {
        callback = json
    }
    var result = []
    console.log('arguments: ', arguments[4])
    skip = parseInt(arguments[4].page)
    console.log('skip: ', skip)
    // console.log(typeof skip == )
    json = json || {}
    _connect(function (err, client) {
        if (err) {
            callback(err, null)
        }
        var db = client.db(dbName)
        var cursor = db.collection(collectionName).find(json).limit(10).skip(skip)
        cursor.each(function (err, doc) {
            if (err) {
                callback('', null)
            }
            if (doc) {
                result.push(doc)
            } else {
                callback(null, result)
            }
        })
        client.close()
    })
}

exports.delete = function (dbName, collectionName, json, callback) {
    json = json || {}
    _connect(function (err, client) {
        if (err) {
            callback(err)
        }
        var db = client.db(dbName)
        db.collection(collectionName).deleteMany(json, function (err, results) {
            // console.log('deleteMany: ', results)
            if (err) {
                callback(err)
                return
            }
            callback(results)
            client.close()
        })
    })
}

exports.update = function (dbName, collectionName, condition, modifyData, callback) {
    condition = condition || {}
    modifyData = modifyData || {}
    _connect(function (err, client) {
        if (err) {
            callback(err)
        }
        var db = client.db(dbName)
        db.collection(collectionName).updateMany(
            condition,
            modifyData, 
            function (err, results) {
            // console.log('deleteMany: ', results)
            callback(err, results)
            client.close()
        })
    })
}