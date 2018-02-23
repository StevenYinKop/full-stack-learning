exports.showIndex = function(req, res) {
    res.render('index',{
        "albums":["aa","bb", "cc"]
    })
}

exports.showAlbum = function(req, res) {
    res.send('AlbumName='+req.params.albumName+'')
}