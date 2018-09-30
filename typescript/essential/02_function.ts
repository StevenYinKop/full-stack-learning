function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1,2));
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

var myMinus = function(x: number, y: number): number {
  return x - y;
}
console.log(myMinus(4,5));
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

var myMultiply: (x:number, y:number) => number = function(x, y) {
  return x * y;
}
console.log(myMultiply(2,5));
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

var getName: (firstname: string, lastname?:string) => string =function (firstname, lastname){
  return firstname + " " + lastname;
}
console.log(getName('Steven', 'Yin'));
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

var printInfo = function(...infos: Array<string>) {
  return infos;
}
console.log(printInfo('steven', 'paul', 'jack', 'min'));
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

var people = {
  name: ['steven', 'paul', 'jack', 'min'],
  getName: function():Function {
    return ():string => {
      var i = Math.floor(Math.random()*4);
      return name[i];
    }
  }
}
console.log('箭头函数: ', people.getName());
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

function attr(name: string):string;
function attr(age: number):number;
function attr(arg: any):any {
  if(arg && typeof arg === 'string') {
    console.log('姓名', arg);
  } else {
    console.log('年龄', arg);
  }
}
