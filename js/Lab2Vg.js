/* För att skapa objekt ska man kunna skriva:
new Polygon(points);
-- points ska vara en lista med objekt: {x, y}
*/

/* Metoder:
area() - räknar ut arean
move(dx, dy) - flyttar figuren en sträcka i x-led och en i y-led
points() - returnerar en lista med alla punkter som objektet har, varje punkt ska vara ett objekt med egenskaperna x och y.
boundingBox
*/

function Polygon(xy){
	this.xy = xy;
	this.points = function(){
		console.log(this.xy);
		return xy;
		};
		
	this.move = function(dx, dy){
		//console.log(xy[3].x);
		let xyList = [];
	
		for(let i in xy){
		//console.log(xy[i].x);
		this.x = xy[i].x += dx; //xy[i].x = xy[i].x + dx;
		this.y = xy[i].y += dy;
		//console.log(this.x, this.y);
		xyList.push({x:this.x, y:this.y});
		}
		//console.log(xyList);
		//return xyList;
	};

	this.area = function (){
		let X = [];
		let Y = [];
		
		for(let i in xy){
			X.push(xy[i].x);
			Y.push(xy[i].y);
		}
		
		let numPoints = xy.length;
        area = 0;
        j = numPoints - 1;
		
        for (i = 0; i < numPoints; i++) {
            area = area + (X[j] + X[i]) * (Y[j] - Y[i]);
            j = i;
        }
        if (area < 0) {
            area *= -1;
        }
        return area / 2;	
	};
	
	this.boundingBox = function(){
		//du vill ha minsta x, y största x, y
		let X = [];
		let Y = [];
		
		for(let i in xy){
			X.push(xy[i].x);
			Y.push(xy[i].y);
		}
		
		let minX = X.reduce(function(a, b) {
			return Math.min(a, b);
		});
		let minY = Y.reduce(function(a, b) {
			return Math.min(a, b);
		});
		//console.log(minX, minY);
		
		let maxX = X.reduce(function(a, b) {
			return Math.max(a, b);
		});
		let maxY = Y.reduce(function(a, b) {
			return Math.max(a, b);
		});
        
        //samma som ovan fast kortare kod.
        /*	X.sort(function(a, b){return a-b});
		Y.sort(function(a, b){return a-b});
		//console.log(X);
		let minX = X[0];
		let minY = Y[0];
		X.reverse();
		Y.reverse();
		let maxX = X[0];
		let maxY = Y[0];
		//console.log(minX,minY,maxX,maxY);
		rek = new Rectangle(minX,minY,maxX,maxY);
		return rek;*/
        
		//console.log(maxX, maxY);
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
		
		//console.log([xy1Point,xy2Point,xy3Point,xy4Point]);
		return [xy1Point,xy2Point,xy3Point,xy4Point];
	};
}






let polly = new Polygon([{x: 1, y: 4}, {x: 2, y: 2}, {x: 7, y: 2}, {x: 4, y: 6}]);

//polly.move(1, 5); //Varför ändrar den värdet.
polly.points();
polly.boundingBox();
//fig2.move(1, 3);  // flytta polygonen ett steg i x-led och 3 steg i y-led
// avståndet ska vara: 4-0-1-1 == 2
// rita en figur för att testa!

//console.log('Är polly en polygon? ' + (polly instanceof Polygon));