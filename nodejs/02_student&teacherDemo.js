var http = require('http')

var server = http.createServer(function(req, resp){
    // 传入的路径是/student/十位学号
        //或者 /teacher/六位工号
        //然后表面查询这个号码并返回
    var userurl = req.url
    resp.writeHead(200, {"Content-Type":"text/html;charset=UTF8"})
    var path = userurl.substring(0,9)
    if (path == '/student/') {
        if(/^\d{10}$/.test(userurl.substring(9))){
            resp.end("欢迎同学!"+ userurl.substring(9))
        } else {
            resp.end("学生学号不存在!")
        }
    } else if(path == '/teacher/') {
        if(/^\d{6}$/.test(userurl.substring(9))){
            resp.end("欢迎教师!"+ userurl.substring(9))
        } else {
            resp.end("教师工号不存在!")
        }
    } else {
        resp.end("您输入的地址有误")
    }
}).listen(3000, '127.0.0.1')