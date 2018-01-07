console.log('_07_ES6_function')
{
    console.log('-----------------------------')
    console.log('函数默认值')
    let x = 'test'
    function foo1(x, y='yyyyy') { // 如果调用foo1时不传入第二个参数, 则会有一个默认值, 为'yyyy' , 默认值的后面不能再加没有默认值的变量
    console.log('foo1: x =',x)
    console.log('foo1: y =',y)
}
foo1(1,2)
function foo2(c, y=x) {
    console.log('foo2: c =',c)
    console.log('foo2: y =',y)
}
foo2(1)
}
{
    console.log('-----------------------------')
    console.log('rest')
    function test3(...arg){
        for(let v of arg){
          console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a');
}

{
    console.log('展开数组')
    console.log(...[1,2,4]);
    console.log('a',...[1,2,4]);
}
  
{
    console.log('箭头函数')
    let arrow = v => v*2;
    let arrow2 = () => 5;
    console.log('arrow', arrow(3));
    console.log('arrow2', arrow2());
  
}
  
{
    console.log('尾调用')
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)
    }
    fx(123)
}
  