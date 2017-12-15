
document.getElementById("result").value = 0;

var numbers = document.querySelectorAll("div>.number")

for(var i = 0; i < numbers.length; i++){
	numbers[i].addEventListener("click",F1);

}


function F1(){
	var n = this.innerHTML;
	var r = document.getElementById("result").value;
	r += n;
	if(r[0] === "0" &&  r.indexOf('.') === -1){
		r = r.substring(1)
	
	}
	if(r.split('.').length > 2){
		return false;
	}		
	document.getElementById("result").value = r;
}


var actions = document.querySelectorAll("div>.action")
for(var i = 0; i < actions.length; i++){
	actions[i].addEventListener("click",F2);
}


function F2(){
	a = parseFloat(document.getElementById("result").value);
	action = this.innerHTML;
	document.getElementById("result").value = "";
 	
 }

 function equal(){		
 	b = parseFloat(document.getElementById("result").value);
 	if(action === "+"){
 		var r = a + b;
 		document.getElementById("result").value = r;
 	}
 	else if(action === "-"){
 		r = a - b;
 		document.getElementById("result").value = r;
 	}
 	else if(action === "*"){
 		r = a * b;
 		document.getElementById("result").value = r;
 	}
 	else if(action === "/"){
 		r = a / b;
 		document.getElementById("result").value = r;
 	}

 };



 function C(){
 	document.getElementById("result").value = 0;
 };


 function undo(){
 	var r = document.getElementById("result").value;
 	r = r.substring(0,r.length-1);
 	document.getElementById("result").value = r;
 };
 

 function Bin(){
 	var r = Number(document.getElementById("result").value);
 	var n = r.toString(2);
 	document.getElementById("result").value = n;
 };

 function Sqrt(){
 	var r = document.getElementById("result").value;
 	r = Math.sqrt(r);
 	document.getElementById("result").value = r;
 };


 function Pow2(){
 	var r = document.getElementById("result").value;
 	r = Math.pow(r,2);
 	document.getElementById("result").value = r;
 };

function Pow3(){
 	var r = document.getElementById("result").value;
 	r = Math.pow(r,3);
 	document.getElementById("result").value = r;
 }; 


function acos(){
 	var r = document.getElementById("result").value;
 	r = Math.acos(r);
 	document.getElementById("result").value = r;
 };

 function asin(){
 	var r = document.getElementById("result").value;
 	r = Math.asin(r);
 	document.getElementById("result").value = r;
 };


function atan(){
 	var r = document.getElementById("result").value;
 	r = Math.atan(r);
 	document.getElementById("result").value = r;
 };


 function exp(){
 	var r = document.getElementById("result").value;
 	r = Math.exp(r);
 	document.getElementById("result").value = r;
 };


function round(){
 	var r = document.getElementById("result").value;
 	r = Math.round(r);
 	document.getElementById("result").value = r;
 };


 function E(){
 	var r = document.getElementById("result").value;
 	r = Math.E;
 	document.getElementById("result").value = r;
 };


function LN10(){
 	var r = document.getElementById("result").value;
 	r = Math.LN10;
 	document.getElementById("result").value = r;
 };


 function PI(){
 	var r = document.getElementById("result").value;
 	r = Math.PI;
 	document.getElementById("result").value = r;
 };


function sin(){
 	var r = document.getElementById("result").value;
 	r = Math.sin(r);
 	document.getElementById("result").value = r;
 };


 function cos(){
 	var r = document.getElementById("result").value;
 	r = Math.cos(r);
 	document.getElementById("result").value = r;
 };


function abs(){
 	var r = document.getElementById("result").value;
 	r = Math.abs(r);
 	document.getElementById("result").value = r;
 };


 function Log(){
 	var r = document.getElementById("result").value;
 	r = Math.log(r);
 	document.getElementById("result").value = r;
 };