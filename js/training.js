'use strict';

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// const alina = new User('Alina', 17);
// const alex = new User('Alex', 20);

// function showThis (a, b) {
//     console.log(this);
//     function sum(){
//         return this.a + this.b;
//     }
// }

// const obj ={
//     a: 20,
//     b: 3,
//     sum: function(){
//         console.log(this);
//     }
// };

// function sayName(){
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user);
// sayName.apply(user);

// function count(num){
//     return this * num;
// }

// const double = count.bind(2);

// class Rectangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     calcArea (){
//         return this.height*this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor){
//         super();
//     }
// }

// const square = new Rectangle(10, 10);
//1 
// обычная функция: this = window but with strict it will turn out undefined
// context in objects is the object itself
// this is a new example of an object

// const log = function (a, b, ...rest){
//     console.log(a, b, rest);
// }

const person = {
    name: 'alice',
    tel: '+380980398981'
};

