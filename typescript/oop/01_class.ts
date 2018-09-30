class Person {

  constructor() {
    console.log('constructor')
  }

  name;

  eat() {
    console.log('eating');
  }
}

var p = new Person()

p.eat()