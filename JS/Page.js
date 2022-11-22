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

function count(taken) {
  if (taken === "plus"){
    counter.innerHTML = Number(counter.innerHTML) + 1;
    carted.innerHTML = Number(carted.innerHTML) + 1;
  }
  else {
    counter.innerHTML = Number(counter.innerHTML) - 1;
    carted.innerHTML = Number(carted.innerHTML) - 1;
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
      fullImage.attributes[1].nodeValue = "";
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