'use strict'
// CLASSES

// class Rectangle {
// 	constructor(props = {height: 0, width: 0}) {
// 		this.height = props.height;
// 		this.width = props.width;
// 	};

// 	calcArea() {
// 		return this.width * this.height;
// 	};
// };

// class ColoredRectangleWithText extends Rectangle {
// 	constructor(props = {height: 0, width: 0, text: '', bgColor: '#fff'}) {
// 		super({height: props.height, width: props.width}); //Вызывает конструктор родителя. !Всегда первой строкой!
// 		this.text = props.text;
// 		this.bgColor = props.bgColor;
// 	};
// 	showMyProps() {
// 		console.log(`Text: ${this.text}, bgColor: ${this.bgColor}, height: ${this.height}, width: ${this.width}`);
// 	};
// };

// const r = new Rectangle({height: 10, width: 20});

// const rc = new ColoredRectangleWithText({
// 	height: 100,
// 	width: 200,
// 	text: 'qwerqwerqwer', 
// 	bgColor: '#123123'
// });

// console.log(rc.showMyProps());

// console.log(r.calcArea());

//This

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(sum());
// }
// showThis(2, 5);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };
// obj.sum();

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log("hello! " + this.name);
// 	};
// }
// let vova = new User('Vova', 13)

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
// 	return this*num;
// }

// const double = count.bind(3);
// console.log(double(5))
// console.log(double(13))



// 1) Обычная функция: this = window, но если use strict - underfind
// 2) Контекст у методов объекта - сам объект
// 3) This в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');
// btn.addEventListener('click', (e) => {
// 	e.target.style.backgroundColor = 'black';
// });

// const obj = {
// 	num: 5,
// 	sayNumber: function() {
// 		const say = () => {
// 			console.log(this.num);
// 		};

// 		say();
// 	}
// }
// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(5))



// const log = function(a, b, ...rest) {
// 	console.log(a, b, rest);
// }
// log('basic', 'rest', 'operator', 'usage');



// function calcOrDouble(number, basis = 2) {
// 	console.log(number*basis);
// }
// calcOrDouble(2);