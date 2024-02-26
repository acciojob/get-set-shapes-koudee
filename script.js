//complete this code
class Rectangle {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
	getArea(){
		return this.height*this.width;
	}
	getheigth(){
		return this.height;
	}
	getwidth(){
		return this.width;
	}
}

class Square extends Rectangle {
	contructor(height,width){
		super(height,width);
	}
	getPerimeter(){
		return this.width*4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
