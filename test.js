// CLASSES

class Rectangle {
	constructor(props = {height: 0, width: 0}) {
		this.height = props.height;
		this.width = props.width;
	};

	calcArea() {
		return this.width * this.height;
	};
};

class ColoredRectangleWithText extends Rectangle {
	constructor(props = {height: 0, width: 0, text: '', bgColor: '#fff'}) {
		super({height: props.height, width: props.width}); //Вызывает конструктор родителя. !Всегда первой строкой!
		this.text = props.text;
		this.bgColor = props.bgColor;
	};
	showMyProps() {
		console.log(`Text: ${this.text}, bgColor: ${this.bgColor}, height: ${this.height}, width: ${this.width}`);
	};
};

const r = new Rectangle({height: 10, width: 20});

const rc = new ColoredRectangleWithText({
	height: 100,
	width: 200,
	text: 'qwerqwerqwer', 
	bgColor: '#123123'
});

console.log(rc.showMyProps());

console.log(r.calcArea());