// A function which takes other function as argument or return functions called higher order function 

//for example if we have radius of circle and we want to find diameter circumference and 
//area of that circle then instead of writing different function for ean=ch operation 
//we can create one higher order function

const radius=[1, 2, 3, 4]

const area= function name(radius) {
    return Math.PI * radius *radius;
}

const diameter =function(radius) {
    return 2*radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const calculate = function (radius, logic) {
    const output=[]
    for(let i = 0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));