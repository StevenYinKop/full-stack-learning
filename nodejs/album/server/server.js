var http = require('http')
var util = require('util')
var fs = require('fs')
// var { errorPage } = require('../util/pageutils')

http.createServer(function(req, resp){
    if(req.url == '/'){
        fs.readFile('../index.ejs',function(err, data){
            if (err) {
                
            }
            resp.end(data)
        });
    } else {
        fs.readFile(req.url, function(err, data) {
          if(err) {
              
          }  
        })
    }

}).listen(8080, '127.0.0.1')