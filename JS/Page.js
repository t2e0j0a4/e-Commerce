let navigations = document.querySelector("nav ul");
let menu = document.querySelector("#menu");
let closemenu = document.querySelector("#close");

menu.addEventListener("click", () => {
  navigations.classList.add("left");
});

closemenu.addEventListener("click", () => {
  navigations.classList.remove("left");
});

let counter = document.querySelector("#counter");
let carted = document.querySelector("#carted");
counter.innerHTML = 0;

document.querySelector("#minus").disabled = true;

function count(taken) {
  if (taken === "plus"){
    counter.innerHTML = Number(counter.innerHTML) + 1;
    document.querySelector("#minus").disabled = false;
  }
  else {
    if (Number(counter.innerHTML) === 1){
      document.querySelector("#minus").disabled = true;
    }
    counter.innerHTML = Number(counter.innerHTML) - 1;
  }
}

navigations.addEventListener("mouseleave",()=>{
  navigations.classList.remove("left");
})

let thumbnails = Array.from(document.querySelectorAll(".thumbnail"));
let fullImage = document.querySelector("#fullPreview");

thumbnails.map((each)=>{
  each.addEventListener("click",()=>{
    thumbnails.forEach((nail)=>{
      nail.classList.remove("active");
      fullImage.attributes[1].nodeValue = `${each.attributes[1].textContent}`.replace('-thumbnail','');
    })
    each.classList.add("active");
    fullImage.attributes[1].nodeValue = `${each.attributes[1].textContent}`.replace('-thumbnail','');
  })
})

window.addEventListener("scroll",()=>{
  if (window.scrollY >= 0.01) {
    navigations.classList.remove("left")
  }
})

// Cart

let cart = document.querySelector("#cart");

let cartShow = document.querySelector(".cartShow");

let cartClose = document.querySelector("#cartClose");

cart.addEventListener("click",()=>{
  cartShow.classList.toggle("flex");
})

cartClose.addEventListener("click",()=>{
  cartShow.classList.remove("flex");
})

let cartList = document.querySelector("#cartList");

let emptyCartList = document.createElement('div')
emptyCartList.classList.add("emptyCartList");
emptyCartList.textContent = "Your Cart is Empty";

let filledCartList = document.createElement('div');
filledCartList.classList.add("filledCartList");

let filledCartData = document.createElement('div');
filledCartData.classList.add("filledCartData");

let filledCartDataImage = document.createElement('img');
filledCartDataImage.classList.add("filledCartDataImage");
filledCartDataImage.setAttribute('src','../images/image-product-1-thumbnail.jpg');
filledCartDataImage.setAttribute('alt','CheckoutImage');

let filledCartDataContent = document.createElement('div');
filledCartDataContent.classList.add("filledCartDataContent")
let title = document.createElement('span');
title.classList.add("checkoutTitle")
title.textContent = "Fall Limited Edition Sneakers";
let price = document.createElement('div');
price.classList.add("coPrice")

let disPrice = document.createElement('span');
disPrice.classList.add("disPrice");
disPrice.innerHTML = `$125 X ${Number(carted.innerHTML)}`;
let checkoutPrice = document.createElement('span');
checkoutPrice.classList.add("checkoutPrice");
checkoutPrice.innerHTML = `$${125 * Number(carted.innerHTML)}`;

price.append(disPrice , checkoutPrice)

filledCartDataContent.append(title,price)

let deleteItem = document.createElement('img');
deleteItem.classList.add("deleteItem");
deleteItem.setAttribute('src','../images/icon-delete.svg');
deleteItem.setAttribute('alt','CheckoutDelete');

filledCartData.append(filledCartDataImage,filledCartDataContent,deleteItem);

let cartButton = document.createElement('button');
cartButton.setAttribute('type','button');
cartButton.innerText = "Checkout"
cartButton.classList.add("checkout");
filledCartList.append(filledCartData,cartButton);

cartList.append(emptyCartList)

function addToCart(){
  carted.innerHTML = Number(counter.innerHTML);
  disPrice.innerHTML = `$125 X ${carted.innerHTML}`;
  checkoutPrice.innerHTML = `$${125 * Number(carted.innerHTML)}`;
  if (Number(carted.innerHTML) !== 0){
    cartList.append(filledCartList);
    cartList.removeChild(emptyCartList);
  }
}

function showCart() {
  if (Number(carted.innerHTML) !== 0){
    cartList.append(filledCartList);
    cartList.removeChild(emptyCartList);
  }
}

const deleteCartItem = () => {
  cartList.append(emptyCartList);
  cartList.removeChild(filledCartList);
  carted.innerHTML = 0
}

deleteItem.onclick = ()=>deleteCartItem();