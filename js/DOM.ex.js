let first = document.getElementById('first');
first.innerHTML = "Ändrad!!!";


let ultag = document.getElementsByTagName('ul')[0];
ultag.style.backgroundColor = "blue";

let toRemove = document.getElementById('removeMe');
ultag.removeChild(toRemove);


let primes = document.getElementsByClassName('prime');

for(let i = 0; i< primes.length; i++){
    
    primes[i].style.fontWeight = 'bold';
    primes[i].style.backgroundColor = 'yellow';
}

let newRow = document.createElement('tr');
let td1 = document.createElement('td');
td1.innerHTML = "11";
td1.className = 'prime';

let table = document.getElementsByTagName('table')[0];
table.appendChild(newRow);
newRow.appendChild(td1);


let ol = document.getElementsByTagName('ol')[0];






let newText = document.getElementsByTagName('pre')[0];
function Console(x) {
  newText.innerHTML = x;
}
Console("NewText");
newText.style.backgroundColor= "black";
newText.style.color= "green";


function addToHtmlList (listId, text){
    
    let list = document.getElementById('ulList');
    let li = document.createElement('li');
    li.innerHTML = text;
    list.appendChild(li);
}
addToHtmlList("ulList", "hello, testing testing!");



function reverseHtmlList(){
    
}
