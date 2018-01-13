const fs = require('fs')
// fs.writeFile('1.txt')
fs.readFile('笔记.txt', (err, data) => {
    if(err) {
        console.log('读取文件失败')
    } else {
        console.log('读取成功!')
        console.log(data)
    }
})
fs.writeFile('write.txt', '啊♂?', err => {
    if (err) {
        console.log('写入失败')
    } else {
        console.log('写入成功')
    }
})