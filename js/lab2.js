/* För att skapa objekt ska man kunna skriva:
new Circle(centerX, centerY, radius);
new Triangle(x1, y1, x2, y2, x3, y3);
new Rectangle(x1, y1, x2, y2);
*/

/* Gemensamma metoder för Cirkel, Triangel och Rektangel:
area() - räknar ut arean
move(dx, dy) - flyttar figuren en sträcka i x-led och en i y-led
points() - returnerar en lista med alla punkter som objektet har, varje punkt ska vara ett objekt med egenskaperna x och y.
*/

/* Cirklar och rektanglar ska ha en gemensam funktion:
distanceTo(figur)
*/

/* Cirklar och trianglar ska ha en gemensam funktion:
boundingBox() - returnerar en Rectangle som är den minsta rektangel som innehåller figuren
*/

function Circle (x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.area = function(){
		//arean av en cirkel = pi * r^2
		let a = Math.PI * radius*radius;
		return a;
	};
	this.move= function(dx,dy){
		this.x += dx; //this.x = this.x + dx;
		this.y += dy; //this.y = this.y + dy;
	};
	this.points = function(){
		var xyPoint = {
			x: this.x,
			y: this.y
		}; 
		return [xyPoint];
	};
	this.distanceTo = function(otherCircle){
		let distance = Math.sqrt(Math.pow((this.x - otherCircle.x),2) +Math.pow((this.y - otherCircle.y),2)) - (this.radius + otherCircle.radius);
		console.log(distance);
		if(distance <0){
			distance *= -1;
			return 0;
		}
		console.log(distance);
	return distance;
	};
	
	this.boundingBox = function(){
		let x1 = this.x - this.radius;
		let x2 = this.x + this.radius;
		let y1 = this.y - this.radius;
		let y2 = this.y + this.radius;
		rek = new Rectangle(x1,y1,x2,y2);
		return rek;
	};
}

function Triangle (x1,y1,x2,y2, x3, y3){
	this.x1 = x1; 
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.x3 = x3;
	this.y3 = y3;
	this.area = function(){
		let a = (x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2)) / 2;
		 if (a < 0) {
            a *= -1;
        }
        return a;
	};
	
	this.move= function(dx,dy){
		this.x1 += dx;// this.x1 = this.x1 + dx;
		this.y1 += dy; 
		this.x2 += dx;
		this.y2 += dy;
		this.x3 += dx;
		this.y3 += dy;
	};
	
	this.points = function(){
		var xy1Point = {
			x: this.x1,
			y: this.y1
		};
		var xy2Point = {
			x: this.x2,
			y: this.y2
		};
		var xy3Point = {
			x: this.x3,
			y: this.y3
		};
		
		return [xy1Point,xy2Point,xy3Point];
	};
	this.boundingBox = function(){
		let minX= Math.min(this.x1,this.x2,this.x3);
		let minY= Math.min(this.y1,this.y2,this.y3);
		let maxX= Math.max(this.x1,this.x2,this.x3);
		let maxY= Math.max(this.y1,this.y2,this.y3);
		rek = new Rectangle(minX,minY,maxX,maxY);
		return rek;
	};
	
}

function Rectangle(x1, y1, x2, y2){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.x3 = x2;
	this.y3 = y1;
	this.x4 = x1;
	this.y4 = y2;
	
	this.area = function(){ 
		let x = x2 - x1; 	//alternativ this.x3 - x1;
		let y = y2 - y1;
		let a = x * y;
	return a;
	};
	
	this.move= function(dx,dy){
	this.x1 += dx;
	this.y1 += dy;
	this.x2 += dx;
	this.y2 += dy;
	};
	
	this.points = function(){
		var xy1Point = {
			x: this.x1,
			y: this.y1
		};
		var xy2Point = {
			x: this.x2,
			y: this.y2
		};
		var xy3Point = {
			x: this.x3,
			y: this.y3
		};
		var xy4Point = {
			x: this.x4,
			y: this.y4
		};
		
		console.log([xy1Point,xy2Point,xy3Point,xy4Point]);
		return [xy1Point,xy2Point,xy3Point,xy4Point];
	};
	
	this.distanceTo = function(otherRectangle){
		let midX = (this.x1 + this.x3) / 2;
		console.log(midX);
		let midY = (this.y1 + this.y2) / 2;
		console.log(midY);
		let otherMidX = (otherRectangle.x1 + otherRectangle.x3) / 2;
		console.log(midX);
		let otherMidY = (otherRectangle.y1 + otherRectangle.y2) / 2;
		
		distance = Math.sqrt(Math.pow(midX - otherMidX,2) + Math.pow(midY - otherMidY,2));
		console.log(distance);
		return distance;
	};
}


let Circle1 = new Circle(3, 3, 30);
let Circle2 = new Circle(0, 0, 60);
//Circle1.area();
//Circle1.points();
//Circle1.distanceTo(Circle2);
Circle1.boundingBox();
//rek.points();


let Triangle1 = new Triangle(15, 15, 30, 40, 45, 15); 
//Triangle1.area();
//Triangle1.move(3, 4);
//Triangle1.points();


let Rectangle1 = new Rectangle(0, 0, 10, 10);
let Rectangle2 = new Rectangle(10, 10, 20, 20);
Rectangle1.distanceTo(Rectangle2);
//Rectangle1.area();
//Rectangle1.points();

/*let fig1 = new Circle(0, 0, 1);  // cirkel vid position (0,0) med radien 1
let fig2 = new Circle(4, 4, 1);
fig2.move(0, -4);  // flytta cirkel till (4,0)
let distance = fig1.distanceTo(fig2);
// avståndet ska vara: 4-0-1-1 == 2
// rita en figur för att testa!

console.log('Är fig1 en cirkel? ' + (fig1 instanceof Circle));*/




