function clickListner(value){
    document.getElementById("inp").value=document.getElementById("inp").value + value;
}

function clearScreen(){
    document.getElementById("inp").value="";
}

function claculate(){
    let val=document.getElementById("inp").value;
    document.getElementById("inp").value=eval(val);
    
}

function backspace(){
    let val =document.getElementById("inp").value
    alert(val.pop());
    document.getElementById("inp").value=val;
}