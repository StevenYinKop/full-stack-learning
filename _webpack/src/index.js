// var obj = require('./a.js')
// require('./a.css')
// require('./a.scss')
// var str = obj.str
// console.log(str)
const testEsLint = "Hello ESLint";
require('@babel/polyfill')
const testFn = () => {
	console.log('this is es6');
}
testFn();
@connect
class A {
  a = 1;
}
function* a() {
  yield 1;
}

console.log("examples".includes("a"))

function connect(clz) {
  console.log(clz)
}