// var obj = require('./a.js')
// require('./a.css')
// require('./a.scss')
// var str = obj.str
// console.log(str)
const testFn = () => {
	console.log('this is es6');
}
testFn();
@connect
class A {
  a = 1;
}

function connect(clz) {
  console.log(clz)
}