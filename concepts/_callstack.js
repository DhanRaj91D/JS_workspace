//Java script is single threaded language 

// when one function get called it internally call's function two and 
//function two internally calls function three 
//but as java is single threaded language it need to understand which function 
//is get initially called and which function is waiting for execution of which function 
//to do that JS maintain Call Stack

function one() {
    console.log("In one. Calling two.");
    two();
  }
  
  function two() {
    console.log("In two. Calling three.");
    three();
  }
  
  function three() {
    console.log("In three");
  }
  
  one();