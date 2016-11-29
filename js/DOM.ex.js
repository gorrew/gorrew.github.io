//1

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



//2
let newText = document.getElementsByTagName('pre')[0];
function Console(x) {
  newText.innerHTML = x;
}
Console("NewText");
newText.style.backgroundColor= "black";
newText.style.color= "green";

//3.1
function addToHtmlList (listId, text){
    
    let list = document.getElementById(listId);
    let li = document.createElement('li');
    li.innerHTML = text;
    list.appendChild(li);
}
addToHtmlList("ulList", "hello, testing testing!");


//3.2
function reverseHtmlList(listId){
    let revList = document.getElementById(listId);
    let li = revList.getElementsByTagName('li');
    for(var i = li.length; i--;){
        revList.appendChild(li[i]);
        
    }
}
reverseHtmlList("ulListReverse")


//3.3
function moveElement(originListId, destinationListId){
    let f = document.getElementById(originListId);
    let s = document.getElementById(destinationListId);
    f.firstElementChild.innerHTML = "Ska flyttas från list1 till List2 (Nu flyttad med js)"
    s.appendChild(f.firstElementChild);
}

moveElement("f", "s");


//3.4

function createTableFromList(parentElementId, itemsPerRow, list){
    let parentId = document.getElementById(parentElementId);
    let tb = document.createElement('table');
    let newRow = document.createElement('tr');
    let td = document.createElement('td');
    
    parentId.appendChild(tb);
    
    for(let i = 0; i < list.length; i++){
		if(i % itemsPerRow === 0) {
		    row = tb.insertRow(-1);      
		}
	let cell = row.insertCell(-1);
	cell.innerHTML = list[i];
    
}

}


//addToHtmlList("first-f", "apa");
//addToHtmlList('first-f', 'björn');
//addToHtmlList('first-f', 'delfin');
//addToHtmlList('second-s', 'clementin');
//addToHtmlList('second-s', 'dadel');
//addToHtmlList('second-s', 'fikon');
//reverseHtmlList('first-f');


//moveElement('first-f', 'second-s');
createTableFromList('body', 3, ['wild', 'words', 'went', 'wilfully', 'wherever', 'wily', 'whales', 'would', 'waste', 'water']); 









