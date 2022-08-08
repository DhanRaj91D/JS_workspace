let shop = document.getElementById("shop");

let shopItemData = [
{
    id:"jfffeir",
    name: "Casual shirt",
    price:45,
    desc:" a long- or short-sleeved garment for the upper part of the body,"+
    "usually lightweight and having a collar and a front opening.",
    img:"images/img-1.jpg"
},
{
    id:"jfsfeir",
    name: "office shirt",
    price:25,
    desc:" a long- or short-sleeved garment for the upper part of the body,"+
    "usually lightweight and having a collar and a front opening.",
    img:"images/img-2.jpg"
},
{
    id:"jfefeir",
    name: "T shirt",
    price:205,
    desc:" a long- or short-sleeved garment for the upper part of the body,"+
    "usually lightweight and having a collar and a front opening.",
    img:"images/img-3.jpg"
},
{
    id:"jhffeir",
    name: "Mens shirt",
    price:105,
    desc:" a long- or short-sleeved garment for the upper part of the body,"+
    "usually lightweight and having a collar and a front opening.",
    img:"images/img-4.jpg"
},
];


let generateShop = () =>{

    return (shop.innerHTML = shopItemData.map(( x)=>{
       
        let {id ,name, price, desc, img} = x;
        
        return `
        <div class="item">
        <img width="220" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>
            ${desc}
          </p>
          <div class="price-quantity">
            <h2> ${price}</h2>
            <div class="button">
              <i class="bi bi-dash-lg"></i>
              <div class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
        `;
    }).join(""));
};

generateShop();