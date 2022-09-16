function post(){
 var x = document.getElementById('nav-DayTwo')
 if (x.style.display === "block") {
    x.style.display = "none";
 } else{
    x.style.display = "none"
}  
}

function prev(){
 var x = document.getElementById('nav-DayThree')
 if (x.style.display === "block") {
    x.style.display = "none";
 } else{
    x.style.display = "none"
}
}

function better(){
  var x = document.getElementById('nav-DayTwo')
  if (x.style.display === "block") {
    x.style.display = "none";
  } else{
    x.style.display = "none"
  }  
}

function sick(){
 var x = document.getElementById('nav-DayFour')
 if (x.style.display === "block") {
    x.style.display = "none";
 } else{
    x.style.display = "none"
}  
}
function trial(){
  var x = document.getElementById('nav-DayOne')
  if(x.style = "active"){
  post();
  prev();
  sick();    
  }
}
function hideOne() {
 trial();
 var x = document.getElementById('nav-DayOne');
 if(x.style.display === "none"){
  x.style.display = "block";
 }
}

function hide(){
  var x = document.getElementById('nav-DayOne')
  if (x.style.display === "block") {
    x.style.display = "none";
  } else{
    x.style.display = "none"
  }
}

function hideTwo() {
  hide();
  prev();
  sick();
 var x = document.getElementById('nav-DayTwo');
 if(x.style.display === "none"){
  x.style.display = "block";
 }
}

function hideThree(){
 hide();
 better();
 sick();
 var x = document.getElementById('nav-DayThree');
 if(x.style.display === "none"){
  x.style.display = "block";
 }
}

function hideFour(){
  hide();
  prev();
 var x = document.getElementById('nav-DayFour');
 if(x.style.display === "none"){
  x.style.display = "block";
 }
}