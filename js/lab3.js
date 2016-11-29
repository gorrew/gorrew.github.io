let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let dt = document.getElementById('dt');
dt.addEventListener('click', function(event){
    drawT();
});

let drawT = function(){
    let click = 0;
canvas.addEventListener('click', function(event) {
    let rect = canvas.getBoundingClientRect();
    
    click++;
    
    if (click === 1) {
        x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x1, y1, 1, 1);
        context.beginPath();
        context.moveTo(x1, y1);
    } 
    
    if (click === 2) {
        x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x2, y2, 1, 1);
        context.lineTo(x2, y2);
    }
    
    if (click === 3) {
        x3 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y3 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x3, y3, 1, 1);
        context.lineTo(x3, y3);
        context.closePath();
        context.stroke();
    }
});
}

let dr = document.getElementById('dr');
dr.addEventListener('click', function(event){
    drawR();
});

let drawR = function(){
    let click = 0;
    canvas.addEventListener('click', function(event){
        let rect = canvas.getBoundingClientRect();
        click++;
        
        if(click === 1){
        x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x1, y1, 1, 1);
        context.beginPath();    
        }
        if (click === 2) {
        x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.rect(x1,y1,x2-x1,y2-y1);
        context.stroke(); 
    }
    })
}
let dc = document.getElementById('dc');
dc.addEventListener('click', function(event){
    drawC();
});

let drawC = function(){
    let click = 0;
    canvas.addEventListener('click', function(event){
     let rect = canvas.getBoundingClientRect();
        click++;
        if (click === 1){
            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x1, y1, 1, 1);
        context.beginPath();  
        }
       if (click === 2) {
          
        x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        let r = Math.sqrt(Math.pow((x2 - x1),2) +Math.pow((y2 -y1),2));   
        context.arc(x1,y1,r,0,2*Math.PI);
        context.stroke();
       }
    })
}

let cc = document.getElementById('cc');
cc.addEventListener('click', function(event){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
})
cc.addEventListener('mouseover', function(event){
    let wtd = document.getElementById('wtd');
    wtd.innerHTML = "Click to Clear Canvas"
})
cc.addEventListener('click', function(event){
    let wtd = document.getElementById('wtd');
    wtd.innerHTML = "Done!"
})