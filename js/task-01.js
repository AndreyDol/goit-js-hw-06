
//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в
//категории (всех вложенных в него <li>).

const categories = document.querySelector("#categories");
//console.log(categories);
const items = categories.querySelectorAll(".item");
//console.log(items);

console.log(`Number of categories: ${items.length}`);

for (let item of items) {   
console.log(`Category: ${item.querySelector("h2").textContent}`);
console.log(`Elements: ${item.querySelectorAll("li").length}`);
 }