const url = require('url')

let str = 'https://www.baidu.com/s?wd=node&rsv_spt=1&rsv_iqid=0x871641a100020cb3&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=4&rsv_sug2=0&inputT=326&rsv_sug4=326'

console.log(url.parse(str, true))
