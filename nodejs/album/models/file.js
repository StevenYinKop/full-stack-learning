var fs = require('fs')

exports.getAllAlbums = function getAllAlbums(callback) {
    fs.readdir('./uploads', function (err, files) {
        iterator([], files, 0, function (result) {
            callback(result)
        });
    })
    return
}

exports.getAllPicsFromSingleAlbums = function getAllPicsFromSingleAlbums(path, callback) {
    var dirpath = './uploads/' + path
    fs.readdir(dirpath, function (err, files) {
        if (err) {
            console.log(err)
            return
        }
        // console.log(files)
        var arr = [];
        (function iteratorPic(i) {
            if (i == files.length) {
                callback(arr)
                return
            }
            fs.stat(dirpath + '/' + files[i], function (err, stats) {
                if (err) {
                    console.log(err)
                }
                if (stats.isFile) {
                    arr.push(files[i])
                    iteratorPic(i + 1)
                }
            })
        })(0)
    })
}

function iterator(arr, files, i, callback) {
    if (i == files.length) {
        // console.info(arr)
        callback(arr)
        return
    }
    fs.stat('./uploads/' + files[i], function (err, stats) {
        if (err) {
            console.log(err)
            return
        }
        if (stats.isDirectory) {
            arr.push(files[i])
            iterator(arr, files, i + 1, callback)
        }
    })
}
