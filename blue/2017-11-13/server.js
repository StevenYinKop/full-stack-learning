const http = require('http');// 系统提供的模块
const fs = require('fs')
let server = http.createServer(function(req, resp) {
    console.log('req', req.url)
    console.log('resp', resp)
    fs.readFile(`www${req.url}`, (err, data)=> {
        if (err) {
            console.log('读取失败')
            fs.readFile('www/error_page.html', (err, data)=> {
                if (err) {
                    resp.write('404')
                } else {
                    resp.write(data)
                }
                resp.end()
            })
        } else {
            resp.write(data)
            resp.end()
        }
    })
    // resp.write('write???')
    // resp.end()
})
server.listen(8765)

// console.log('server: ', server)