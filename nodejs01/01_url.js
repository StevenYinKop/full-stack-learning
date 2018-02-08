var http = require('http');
var url = require('url')

http.createServer(function (req, resp) {
    // url.parse将req.url分成很多部分, 
    // host. post, pathname, path, query
    // 如果url.parse()的第二个参数为true, 就可以把查询对象变成对象, 通过调用属性得到值
    console.log('req', req)

    var parsed = url.parse(req.url)
    var path = parsed.pathname
    
    console.log('parsed', parsed)
    console.log('path', path)

    resp.end()
}).listen(3000,'127.0.0.1')