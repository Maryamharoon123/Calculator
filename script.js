function addition(){
  
    const num1 =document.getElementById("num1").value;
    const num2 =document.getElementById("num2").value;
    document.getElementById("finalresult").innerHTML = Number(num1) + Number(num2); 
}


function  subtraction(){
    const num1 =document.getElementById("num1").value;
    const num2 =document.getElementById("num2").value;
    document.getElementById("finalresult").innerHTML = Number(num1) - Number(num2); 
    
}

function multiplication(){
    const num1 =document.getElementById("num1").value;
    const num2 =document.getElementById("num2").value;
    document.getElementById("finalresult").innerHTML = Number(num1) * Number(num2); 

}

function division(){
    const num1 =document.getElementById("num1").value;
    const num2 =document.getElementById("num2").value;
    document.getElementById("finalresult").innerHTML = Number(num1) / Number(num2); 

}
