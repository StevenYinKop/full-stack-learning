console.log('_06_ES6_Array')
{
    console.log('-----------------------------')
    console.log('Array.of')
    let arr = Array.of(1,2,3,4,5,6) // 将一组数据转换为一个数组
    console.log('arr:', arr)
    
    let empty = Array.of() // 如果不传入参数, 则生成一个新的数组
    console.log('empty:', empty)
}
{
    console.log('-----------------------------')
    console.log('Array.from')
    let p = document.querySelectorAll('p'); // 获得所有的标签p的dom节点
    console.log('p', p)
    //1
    let pArr = Array.from(p) // 传入一个参数时, 将一个集合转换为数组
    console.log('pArr', pArr)
    pArr.forEach(item => console.log(item.textContent)) // forEach对数组进行遍历
    //2
    console.log(Array.from([1,3,5], item => item*2)) // 传入两个参数时, 第一个参数时需要转换为数组的内容, 第二个参数则是在转换成数组之前, 需要进行的操作,比如这里的将原数组的各个元素*2后再返回一个新的数组
}
{
    console.log('-----------------------------')
    console.log('fill')
    let arr = [1,'a',undefined, true, 5]
    console.log('fill all elements to 7: ', arr.fill(7)) // fill 方法进行填充操作, 将数组中的元素全部填充为某个值
    console.log('fill the elements to 8 from the index 1 to 3 (index >= 1 && index < 3)', arr.fill(8, 1, 3)); // 将数组中索引从1~3(左闭右开)的元素填充为某个值
}
{
    console.log('-----------------------------')
    console.log('keys()')
    let arr = ['a', 20, true, 3]
    for(let index of arr.keys()){ // 获得数组的索引的集合
        console.log('keys: ', index)
    }
    console.log('values()')
    for(let value of arr.values()){ // 获得索引的值得集合
        console.log('values: ', value)
    }
    console.log('entries()')
    for(let entry of arr.entries()){ // 获得索引的键值对的集合
        console.log('entries: ', entry)
    }
}
{
    console.log('-----------------------------')
    console.log('copyWithin')
    console.log('[1,2,3,4,5,6,7].copyWithin(1,3,5) = ',[1,2,3,4,5,6,7].copyWithin(1,3,5)) // [1,4,5,4,5,6,7]
    console.log('[1,2,3,4,5,6,7].copyWithin(4,3,5) = ',[1,2,3,4,5,6,7].copyWithin(4,3,5)) // [1,2,3,4,4,5,7]
}
{
    console.log('-----------------------------')
    console.log('find()')
    let arr = ['a','d','b','e','c','f']
    console.log('arr.find()',arr.find(item => item=='a'||item=='e')) // find()方法会去寻找数组中满足函数要求的值, 从左往右找到第一个满足条件的就停止, 并且返回这个值
    console.log('arr.findIndex()',arr.findIndex(item => item=='a'||item=='e')) // find()方法会去寻找数组中满足函数要求的索引, 从左往右找到第一个满足条件的就停止, 并且返回这个值的索引
}
{
    console.log('-----------------------------')
    console.log('includes()')
    let arr = [5,1,2,true,NaN,5,6]
    console.log('arr.includes(5) = ' , arr.includes(5))
    console.log('arr.includes(NaN) = ' , arr.includes(NaN))
}
