async function getData() {
  console.log(" 1st statement");
  const response = await fetch("https://api.github.com/users"); // here we are getting promise from fetch 
  console.log("Before json resolved");
  const data = await response.json(); // here also await returning promise 
  console.log("After json resolved")
  return data;
}

console.log("Before function call")
const users = getData();
console.log("After function call")
console.log(users);
users.then(d => console.log(d))// after promise get resolved then we are getting 
console.log("Byeee");
