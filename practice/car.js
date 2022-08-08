class car {
    constructor(
        name,
        brand,
        price,
        manufacturing_year,
        city,
        state,
        contry

    ){
    this.name=name,
    this.brand=brand,
    this.price=price,
    this.manufacturing_year=manufacturing_year,
    this.plant_adress=new plant_adress(city,state,contry)
    }
}

const car1 = new car("i20","hundai",1000000,2021,"pune","maharashtra","India");

console.log(car1)