// 块级变量, 离开作用域后变量都会无效
function test(){
  // for(let i=1;i<3;i++){
  //   console.log(i);
  // }
  // console.log(i);
  let a = 1; //  
  // let a = 2;
}

function last(){
  const PI=3.1415926;
  const k={
    a:1
  }
  k.b=3;
  console.log(PI,k);
}


// test();
last();
