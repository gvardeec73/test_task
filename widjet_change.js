let CartVidjets = document.querySelectorAll(".ec-cart-widget");
let Select = document.querySelector(".dl-param-select");
let Label = document.querySelector(".label");
for (let CartVidjet of CartVidjets) {
  console.log(CartVidjet);
}
console.log(Select);
console.log(Label);
console.log(Select.value);

Select.onchange = function () {
  let newSelectValue = Select.value;
  console.log(newSelectValue);
  Label.textContent = newSelectValue;
  for (let CartVidjet of CartVidjets) {
    let dataLayout = CartVidjet.getAttribute("data-layout");
    if (newSelectValue === dataLayout) {
      CartVidjet.classList.remove("invisible");
    } else {
      CartVidjet.classList.add("invisible");
    }
  }
};
