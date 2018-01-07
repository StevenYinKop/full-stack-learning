console.log('_12_ES6_class')
{
    console.log('-----------------------------')
    console.log('类的基本定义和生成实例')
    class Parent{
        constructor(name='yinzf'){ // 构造方法给了一个默认值, 如果new的时候不加参数, 则默认用构造给定的默认值
            this.name = name;
        }
    }
    let parent = new Parent('yinzf2')
    console.log('parent: ', parent)
}
{
    console.log('-----------------------------')
    console.log('继承')
    class Parent{
        constructor(name='yinzf'){ // 构造方法给了一个默认值, 如果new的时候不加参数, 则默认用构造给定的默认值
            this.name = name;
        }
    }

    class Child extends Parent{ // 这里没有写构造方法,所以默认构造是
        /*constructor(){
            super()
        }*/
    }
    console.log('class Child extends Parent, new Child()=>',new Child())
}
{
    console.log('-----------------------------')
    console.log('继承参数传递')
    class Parent{
        constructor(name='yinzf'){ // 构造方法给了一个默认值, 如果new的时候不加参数, 则默认用构造给定的默认值
            this.name = name;
        }
    }
    
    class Child extends Parent{
        constructor(type='child->type'){
            super('from child'); // super必须写在构造方法的第一行, 下面再进行其他的操作, 如果不写super默认首先执行super操作
            this.type = type;
        }
    }
    console.log('class Child extends Parent, new Child()=>',new Child())
}
{
    console.log('-----------------------------')
    console.log('getter, setter')
    class Parent{
        constructor(name = 'yinzf'){
            this.name = name
        }
        get name2() {return this.name}
        set name2(value) {this.name = value}
    }
    let v = new Parent()
    console.log('setter : ' , v.name2) // 相当于调用了get方法
    v.name2 = 'name2' // 相当于调用了set方法
    console.log('getter : ' , v.name2)
}
{
    console.log('-----------------------------')
    console.log('static method')
    class Parent{
        constructor(name = 'yinzf'){
            this.name = name
        }
        static foo() {
            console.log('im a static method called foo()')
        }
    }
    console.log('Parent.foo(): ' )
    Parent.foo()

}
{
    console.log('-----------------------------')
    console.log('static vars')
    class Parent{
        constructor(name = 'yinzf'){
            this.name = name
        }
    }
    // 定义静态变量没有static关键字, 直接用类名.变量名就可以了
    Parent.v1= 'v11'
    console.log('Parent.v1', Parent.v1)
}