window.addEventListener('load', function (event) {
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            canvas.width = 600;
            canvas.height = 400;
            let wtd = document.getElementById('wtd');
            let selectColor = document.getElementById('color');
            let inputColor = document.getElementById('input-color');
            let addColor = document.getElementById('add-color');
            let hexColors = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';
            let userHex;
            let jsonObj = [];
    
            //Not working buttons
            let ifj = document.getElementById('ifj');
            ifj.addEventListener('mouseover', function (event) {
                wtd.innerHTML = "Sorry! Import From JSON Doesn't Work Yet!";
            })
            let dp = document.getElementById('dp');
            dp.addEventListener('mouseover', function (event) {
                    wtd.innerHTML = "Sorry! Draw Polygon Doesn't Work Yet!";
                })
            
            //Json
            let etj = document.getElementById('etj');
            let jsonText = document.getElementById('jsonText');
            etj.addEventListener('mouseover', function(event){
                wtd.innerHTML ="Click to get JSON";
            }); 
    
            etj.addEventListener('click', function(event){
                
                let text ="";
                for(i = 0; i < jsonObj.length; i++){
                  let jsobjs = JSON.stringify(jsonObj[i], null, 2)  
                  text +=jsobjs;
                }
                jsonText.innerHTML = text;
            })
            
      //input color
            let okColor;
            inputColor.addEventListener('keyup', function (event) {
                    if (inputColor.value.match(hexColors) !== null) {
                        okColor = true;
                        wtd.innerHTML = "valid color";
                        addColor.disabled=false;
                    }
                    else if (inputColor.value.match(hexColors) == null || inputColor.value == "") {
                        okColor = false;
                       
                        wtd.innerHTML = "Not Valid";
                         addColor.disabled=true;
                    }
                
                })
                // Add Color to list
            addColor.addEventListener('click', function (event) {
                    if (okColor === true) {
                        userHex = inputColor.value.toLowerCase();
                        let newOption = document.createElement('option');
                        newOption.value = userHex;
                        newOption.innerHTML = userHex;
                        selectColor.appendChild(newOption);
                        wtd.innerHTML = "Color Added To List";
                        
                    }
                    else {
                        wtd.innerHTML = "NO NO NO"
                    }
                })
                //Choose Color from list
            function getColor() {
                let c = document.getElementById('color').value;
                return c;
            }
            selectColor.addEventListener('change', function (event) {
                    context.strokeStyle = getColor();
                })
                // Draw Triangle
            let dt = document.getElementById('dt');
            dt.addEventListener('click', function (event) {
                drawT();
            });
            dt.addEventListener('mouseover', function (event) {
                wtd.innerHTML = "Draw Triangle with three clicks on the canvas";
            })
            let gordon = [];
            let drawT = function () {
                    let click = 0;
                    canvas.addEventListener('click', function dtl(event) {
                        let rect = canvas.getBoundingClientRect();
                        click++;
                        if (click === 1) {
                            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                            y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                            context.fillRect(x1, y1, 1, 1);
                            context.beginPath();
                            context.moveTo(x1, y1);
                            wtd.innerHTML = "Two more clicks to finnish a triangle";
                            cancelBtn(dtl);
                        }
                        if (click === 2) {
                            x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                            y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                            context.fillRect(x2, y2, 1, 1);
                            context.lineTo(x2, y2);
                            wtd.innerHTML = "One more click now!";
                            cancelBtn(dtl);
                        }
                        if (click === 3) {
                            x3 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                            y3 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                            context.fillRect(x3, y3, 1, 1);
                            context.lineTo(x3, y3);
                            context.closePath();
                            context.stroke();
                            wtd.innerHTML = "There you go!";

                            jsonObj.push({ x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3 });
                        }
                    });
                }
            
            // Draw Rectangle
            let dr = document.getElementById('dr');
            dr.addEventListener('click', function (event) {
                drawR();
            });
            dr.addEventListener('mouseover', function (event) {
                wtd.innerHTML = "Draw Rectangle with two clicks on the canvas";
            })
            let drawR = function () {
                    let click = 0;
                    canvas.addEventListener('click', function drl(event) {
                        let rect = canvas.getBoundingClientRect();
                        click++;
                        if (click === 1) {
                            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                            y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                            context.fillRect(x1, y1, 1, 1);
                            context.beginPath();
                            wtd.innerHTML = "One more click now!";
                            cancelBtn(drl);
                        }
                        if (click === 2) {
                            x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                            y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                            context.rect(x1, y1, x2 - x1, y2 - y1);
                            context.stroke();
                            wtd.innerHTML = "There you go!";
                            jsonObj.push({ x1: x1, y1: y1, x2: x2, y2: y2});
                        }
                    })
                }
                // Draw Circle
            let dc = document.getElementById('dc');
           
            dc.addEventListener('click', function (event) {
                drawC();
            });
            dc.addEventListener('mouseover', function (event) {
                wtd.innerHTML = "Draw a circle with two clicks!";
            })
            let drawC = function () {
                    let click = 0;
                    canvas.addEventListener('click', function dcl(event) {
                        let rect = canvas.getBoundingClientRect();
                        click++;
                        if (click === 1) {
                            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                            y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                            context.fillRect(x1, y1, 1, 1);
                            context.beginPath();
                            wtd.innerHTML = "One more click now!";
                            cancelBtn(dcl);
                        }
                        if (click === 2) {
                            x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                            y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                            let r = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
                            context.arc(x1, y1, r, 0, 2 * Math.PI);
                            context.stroke();
                            wtd.innerHTML = "There you go!";
                            jsonObj.push({ x1: x1, y1: y1, x2: x2, y2: y2});
                        }
                    })
                }
                //Clear Canvas
            let cc = document.getElementById('cc');
            cc.addEventListener('click', function (event) {
                context.clearRect(0, 0, canvas.width, canvas.height);
            })
            cc.addEventListener('mouseover', function (event) {
                let wtd = document.getElementById('wtd');
                wtd.innerHTML = "Click to Clear Canvas"
            })
            cc.addEventListener('click', function (event) {
                let wtd = document.getElementById('wtd');
                wtd.innerHTML = "Done!"
            })
            
            //cancel drawing
            let cd = document.getElementById('cd');
            
             cd.addEventListener('mouseover', function(event){
                wtd.innerHTML ="Click to cancel drawing";
            });        
    
            function cancelBtn(funC) {
                cd.addEventListener('click', function (event) {
                    canvas.removeEventListener('click', funC);
                })
            }
            //Menu
            function myFunction() {
                document.getElementById("myDropdown").classList.toggle("show");
            }
            window.onclick = function (event) {
                if (!event.target.matches('.dropbtn')) {
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                }
            }
        })