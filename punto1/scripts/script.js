

function botones( p){
	let op = p.value;

	let num1 = document.getElementById('numuno').value;
    let num2 = document.getElementById('numdos').value;
	
	switch(op) {
  
  case "SUMAR":
    if(isNaN(num1) || isNaN(num2)){
		window.alert("ingrese numeros validos ")
		
    } else if( num1.length==0 || num2.length==0){
		window.alert("llene los campos")
		}
	else{
	let result= parseInt(num1)+parseInt(num2)
    document.getElementById('resultado').innerHTML =result;}
    break;
  
  
  case "RESTAR":
   if(isNaN(num1) || isNaN(num2)){
		window.alert("ingrese numeros validos ")
		
    } else if( num1.length==0 || num2.length==0){
		window.alert("llene los campos")
		}
	else{
	let result= parseInt(num1)-parseInt(num2)
    document.getElementById('resultado').innerHTML =result;}
    break;
	
	
	
	case "MULTIPLICAR":
   if(isNaN(num1) || isNaN(num2)){
		window.alert("ingrese numeros validos ")
		
    } else if( num1.length==0 || num2.length==0){
		window.alert("llene los campos")
		}
	else{
	let result= parseInt(num1)*parseInt(num2)
    document.getElementById('resultado').innerHTML =result;}
    break;
	
	
	case "DIVIDIR":
   if(isNaN(num1) || isNaN(num2)){
		window.alert("ingrese numeros validos ")
		
    } else if( num1.length==0 || num2.length==0){
		window.alert("llene los campos")
		}
	else{
	let result= parseInt(num1)/parseInt(num2)
    document.getElementById('resultado').innerHTML =result;}
    break;
	
	
	case "POTENCIA":
   if(isNaN(num1) || isNaN(num2)){
		window.alert("ingrese numeros validos ")
		
    } else if( num1.length==0 || num2.length==0){
		window.alert("llene los campos")
		}
	else{
	let result= Math.pow(parseInt(num1),parseInt(num2));
    document.getElementById('resultado').innerHTML =result;}
    break;
	
	
	
    
}
	

}

