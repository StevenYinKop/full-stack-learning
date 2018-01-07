{
  /**
   * 修饰器是一个函数, 修改了类的行为.
   * @param {*} target 修改的类本身
   * @param {*} name  修改的属性名
   * @param {*} descriptor 该属性的表述对象
   */
  let readonly=function(target,name,descriptor){ // 限制某个属性为只读
    descriptor.writable=false; // 将可写执为false
    return descriptor
  };

  class Test{
    @readonly
    time(){ // デコレーターの実験的なサポートは将来のリリースで変更になる可能性がある機能です。'experimentalDecorators' オプションを設定してこの警告を削除します。
      return '2017-03-11'
    }
  }

  let test=new Test();

  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}


{
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  let log = type=>{
    return function(target, name, descriptor) {
      let src_method=descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target, arg);
        console.info(`log ${type}`);
      }
    }
  }
  class AD{
    @log('show')
    show(){
      console.log('ad is show');
    }
    @log('show')
    click(){
      console.log('ad is click');
    }
  }
  let ad = new AD();
  ad.show();
  ad.click();
}
