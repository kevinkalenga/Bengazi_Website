const listes = document.querySelector(".list-nav");
const burger = document.querySelector(".burger");
const items = document.querySelectorAll(".item-nav");
console.log(listes);
console.log(burger);
console.log(items);

burger.addEventListener("click", () => {
  listes.classList.toggle("active");
});
items.forEach((item) => {
  item.addEventListener("click", () => {
    listes.classList.remove("active");
    //listes.classList.toggle("active");
  });
});
