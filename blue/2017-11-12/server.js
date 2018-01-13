//http模块
const http = require('http')
//socket.io模块
const io = require('socket.io')
//1, 创建http服务,
let httpServer = http.createServer();
httpServer.listen(80)
//2, 创建WebSocket服务
let wsServer = io.listen(httpServer);
wsServer.on('connection', function(sock){
    sock.on('a', function(num1, num2){
        console.log('num1:', num1) 
        console.log('num2:', num2) 
    })
})