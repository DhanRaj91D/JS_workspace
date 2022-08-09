// closer is a function with its lexical scope 
// when we return function from any function it returns not only that function but also its lexical environment


//example 

function x(){
    var a = 7;
    function y() {
        console.log(a);
    }
    return y; // this not only returning the function y but its lexical scope also 

}

var z = x(); 

console.log(z)

z();// now function x no longer exists but function y returned is carrying its lexical scope thats why it still remember value of a
