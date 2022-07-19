function clickhandler(){
   var msg= document.getElementById('txb').value;
   document.getElementById('txb1').value=msg;
}

function clickhandler1(){
   var msg= document.getElementById('txb1').value;
   document.getElementById('txb2').value=msg;
}
function clickhandler2(){
   document.getElementById('txb1').value=msg;
   document.getElementById('txb').value=msg;
}

function resethandler(){
   document.getElementById('txb').value="";
   document.getElementById('txb1').value="";
   document.getElementById('txb2').value="";
}