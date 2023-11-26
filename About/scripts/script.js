const approchButtons = document.querySelector(".approch__buttons");
const approchButton = document.querySelector(".approch__button");

approchButtons.addEventListener("mouseover", function(){
    approchButton.classList.remove("approch__active");
})

approchButtons.addEventListener("mouseout", function(){
    approchButton.classList.add("approch__active");
})