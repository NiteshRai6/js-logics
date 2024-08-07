'use strict';


//  *** Objects ***


// 30.
// const student = {
//     name: 'John',
//     age: 25,
//     greet: function () {
//         return `Hello from ${this.name}, I lives in ${this.city}`;
//     },
//     marks: {
//         science: 98,
//         maths: 87
//     },
//     city: 'delhi'
// }
// console.log(student);
// console.log(student.name);
// console.log(student['city']);
// console.log(student.marks.science);
// console.log(student['marks']['maths']);
// student.marks.maths = 76;
// console.log(student.marks);
// console.log(student.greet());
// delete student.city;
// console.log(student);

// 31. 
// let result;
// result = new String('Apple');
// console.log(result, typeof result);
// result = new Number(5);
// console.log(result, typeof result);
// result = new Boolean(9);
// console.log(result, typeof result);
// result = new Object();
// console.log(result, typeof result);
// result = new Object({ id: 1, name: 'John' });
// console.log(result, typeof result);
// result = new Array();
// console.log(result, typeof result);
// result = new Array(2, 3, 4);
// console.log(result, typeof result);


// 32. 
// const person = {
//     id: 1,
//     name: 'John'
// }

// console.log(person.name);
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const person1 = new Person('Selena', 34);
// console.log(person1);
// const person2 = new Person('John', 23);
// console.log(person2);

// 33. 
// const person = {
//     // data property
//     name: 'John',
//     age: 23,
//     // accessor property(getter)
//     get getName() {
//         return this.name;
//     },
//     //accessor property(setter)
//     set changeName(newName) {
//         this.name = newName;
//     }
// }
// console.log(person.name);
// console.log(person.getName);
// person.changeName = 'Selena'
// console.log(person.name);

// 34.
// const fruits = {
//     id: 1,
//     name: 'Apple',
//     city: 'delhi'
// }

// Object.defineProperty(fruits, 'getName', {
//     get: function () {
//         return this.name;
//     }
// });
// console.log(fruits.getName);

// Object.defineProperty(fruits, 'changeName', {
//     set: function (newName) {
//         this.name = newName;
//     }
// });
// fruits.changeName = 'Mango';
// console.log(fruits.name);

// 35.
// function Car(name, model) {
//     this.name = name;
//     this.model = model;
//     this.city = 'New York';
// }

// const c1 = new Car('BMW', 2024);
// const c2 = new Car('Rover', 2020);

// Car.prototype.color = 'Red';

// console.log(`${c1.name} : ${c1.model} : ${c1.color}`);

// Car.prototype.drive = function () {
//     console.log(`Driving ${this.name}`);
// }
// c1.drive();
// c2.drive();

// Car.prototype.city = 'Delhi';
// console.log(`Name : ${c1.name} , City : ${c1.city}`);

// Car.prototype.color = 'Blue';
// console.log(`Name : ${c2.name} , Color : ${c2.color}`);

// Car.prototype = { color: 'Yellow' };
// console.log(`Name : ${c1.name} , Color : ${c1.color}`);
// const c3 = new Car('Audi', 2015);
// console.log(`Name : ${c3.name} , Color : ${c3.color}`);

// 36. Prototype:
// Creating Objects with Prototypes : 
// A. Using Constructor Functions :
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.greet = function () {
//     console.log(`Name is ${this.name}`);
// }
// const person1 = new Person('John');
// person1.greet();

// const result = person1.__proto__ === Person.prototype;
// console.log(result);

// const result2 = Person.prototype.isPrototypeOf(person1);
// console.log(result2);

// const result3 = person1.hasOwnProperty('name');
// console.log(result3);

// const result4 = person1.hasOwnProperty('greet');
// console.log(result4);

// In Browsers :
// console.log(Object.prototype);

// B. Using Object.create() : 
// const person = {
//     name: 'Person',
//     greet: function () {
//         console.log(`Name is ${this.name}`);
//     }
// }
// const boy = Object.create(person);
// boy.name = 'Selena';
// boy.greet();

// ES6 Classes and Prototypes :
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Name is ${this.name}`);
//     }
// }
// const person1 = new Person('John');
// person1.greet();

// const result = person1.__proto__ === Person.prototype;
// console.log(result);

// const result2 = Person.prototype.isPrototypeOf(person1);
// console.log(result2);

// const result3 = person1.hasOwnProperty('name');
// console.log(result3);

// const result4 = person1.hasOwnProperty('greet');
// console.log(result4);

// 37. Enumerable :
// const obj = {
//     a: 1,
//     b: 2
// };
// let result;
// result = obj.propertyIsEnumerable('a');
// console.log(result);
// result = obj.propertyIsEnumerable('b');
// console.log(result);

// Object.defineProperty(obj, 'c', {
//     value: 3,
//     enumerable: false
// });
// result = obj.propertyIsEnumerable('c');
// console.log(result);
// result = Object.keys(obj);
// console.log(result);
// result = Object.values(obj);
// console.log(result);
// result = Object.entries(obj);
// console.log(result);

// for (let key in obj) {
//     console.log(key);
// }

// function Test(name) {
//     this.name = name;
// }
// Test.prototype.info = function () {
//     console.log(`Name is ${this.name}`);
// }
// const test1 = new Test('John');
// test1.info();

// for (let key in test1) {
//     console.log(key);
// }
// const result = Object.keys(test1);
// console.log(result);

// 38. Custom Property :
// String.prototype.stringReverse = function () {
//     return this.split('').reverse().join('');
// }
// const str = 'apple';
// const result = str.stringReverse();
// console.log(result);

// *** End ***

