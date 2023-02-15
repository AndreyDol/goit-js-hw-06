// В HTML есть пустой список ul#ingredients.
// В JavaScript есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientMark = document.querySelector("#ingredients");
//console.log(ingredientMark);

const itemIngredientsEl = ingredients.map((ingredient) => {
  const tableIngredient = document.createElement("li");
  tableIngredient.textContent = ingredient;
  tableIngredient.classList.add("item");
  return tableIngredient;
});

//console.log(itemIngredientsEl);

// + в DOM-дерево-список
ingredientMark.append(...itemIngredientsEl);
