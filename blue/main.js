/** 
 * html->js use()
 * js->js require
 */

 /**
  * node的模块化
  1.没有define
  2.有exports.require,module
  3.引用自定义模块时有两种方式: 
    a) 放到node_modules中(官方推荐)
    b) 引用时前面加上./
  */
let a1 = require('./1.js')
let a2 = require('./2.js')

console.log('a1 + a2 = ',a1.a+a2.b)