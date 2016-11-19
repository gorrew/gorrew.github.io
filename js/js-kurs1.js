//Övning 2a.a

var val =prompt("ett nr mellan 1 -10");

if  (val >=1 && val <=10){
    console.log("Bra");
}
else
    {
        console.log("Fel värde");
    }
///////////////////////////////////////////

//Övning 2a.b

var myVal = 3;
var yourVal = prompt("Gissa mitt tal mellan 1 - 10" )
if (myVal == yourVal){
    console.log("Bra jobbat!!!");
}
else{console.log("Du suger!");}
///////////////////////////////////////////

//Övning 2a.c

var val = prompt("välj 1 2 eller 3")
switch(val)
    {
    case "1":
            console.log("Grattis du vann bara 1k");
            break;
            
    case "2":
            console.log("Grattis du vann bara 2k");
            break;
                  
    case "3":
            console.log("Grattis du vann maxvinst på 3k");
            break;
            
            default:
            break;
            }

/////////////////////////////////////////

//Övnings Doc

//Övning A
var cel;
var far =451;
cel = (far - 32)* 5/9;
console.log("Fahrenheit 451 till Celsius blir " + cel + " grader");
////////////////////////////////////////

//Övning B

var name = prompt("Hej! Vad heter du?");
var country = promt("Vilket land kommer du från?");
var color= prompt("Vilken färg gillar du mest?");
console.log("Välkommen " + name + "  som är från " + country + " och gillar färgen " + color);
////////////////////////////////////////

//Övning D
for (i=0; i<101; i++){
    console.log(i);
}

for (i=0; i<101; i = i +2){
    console.log(i);
}

////////////////////////////////////////


//Övning bok chapter 2.1

var tag = "#";
for (tag; tag.length<8; tag+="#"){
    console.log(tag)
}
    
//Övning bok chapter 2.2
for (var i = 1; i<101; i++){
	var text ="";
    if (i%3 ===0)
        text += "fizz";
    if (i%5===0)
        text +="buzz"
        
        console.log(i + " " + text)	
       
}


