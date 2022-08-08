

// global scope 
//You can use this variable or value anywhere 
//it is found on window object 

//function scope 
//variable declared in function can only be accessible in function only  
//old var keyword use function scope 

//Block scope 
//this scope is variable declared in curly braces cannot be accessed outside of it 
//if let and const in blocked scope then they only come in blocked scope var not work in blocked scope it any how come under global scope 

// {
//     let a=20;
//     var f=11;
//     const b= 10;
// }

//if let and const not in blocked scope then they create other script scope 
//they will not come under window scope but they are globally accessible 

let c=20;
const d= 10;
var e=11;

//function get stored in global scope

function demo() {
    var a=11;
}
function myFunction() {
  var carName = "Volvo";   // Function Scope
  console.log(carName)
}
console.log(c)


