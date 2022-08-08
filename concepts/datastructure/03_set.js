const city=["pune","satara","mumbai","surat","indor","bhopal","kalkatta","chandigadh"];

const setOfCitys = new Set(city);
console.log(setOfCitys)

let itr = setOfCitys.values(); //you can iterate over sate like this

console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

console.log(setOfCitys.size) //you can find the size of set using this attribute 

console.log(setOfCitys.has("pune")) // by this method you can find out that if this element is present in set or not

setOfCitys.add("khed") //using this function you can add element to end of set 
console.log(setOfCitys)

setOfCitys.delete("indor")// by using this function you csn delete that element from set 
console.log(setOfCitys)


