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
createTableFromList('body', 3, ['wild', 'words', 'went', 'wilfully', 'wherever', 'wily', 'whales', 'would', 'waste', 'water']);