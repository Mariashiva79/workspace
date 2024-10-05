let user;
const pi = 3.14;
let a = 1;
let b = 2;
let z = a + b;
console.log(z);
let user1 = 'Marta';
let saludo = 'Hello, ';
let saludo_cliente = saludo + user1;
console.log(saludo_cliente);

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  contact() {
    return `To adopt ${this.name} call the number 5551155`;
  }
}
let mei = new Dog('Mei', 5);
console.log(mei.contact());
