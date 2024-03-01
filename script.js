//complete this code
class Rectangle {
	constructor(height, width){
		this._height = height;
		this._width = width;
	}
	getArea(){
		return this._height*this._width;
	}
	get heigth(){
		return this._height;
	}
	get width(){
		return this._width;
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
