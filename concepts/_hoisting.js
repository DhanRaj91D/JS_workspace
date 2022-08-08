//In java script even before first line of code get executed memory is get allocated to all variable and function 

console.log(a)//memory get allocated to a but not initialized thats why showing undefined
getName() // while reserving the memory for function JS engine stores whole function thats why we can access it 

var a =10 ; 

function getName() {
    console.log("Dhanraj");
}

//if you use let and const it follows concept of temporal dead zone

// console.log(aa); // in case of let and const you cannot access them before as it follows tdz so they will gve you
                    // error like cannot access them before initializing 
// console.log(bb);

//If you stored function in const or let then that function also follows TDZ 

let aa= 11;
const bb= 11;

