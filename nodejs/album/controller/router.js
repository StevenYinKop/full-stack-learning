var file = require('../models/file')

exports.showIndex = function (req, res) {
    // 查询根目录下所有文件夹
    console.log('showIndex')
    file.getAllAlbums(function (result) {
        res.render('index', {
            "albums": result,
        })
    })
}
exports.showAlbum = function (req, res) {
    file.getAllPicsFromSingleAlbums(req.params.albumName, function (result) {
        res.render('detail', {
            "albumName": req.params.albumName,
            "images": result,
        })
    })
    // res.send('AlbumName='+req.params.albumName+'')
}