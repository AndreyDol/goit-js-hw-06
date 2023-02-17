// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

//Для генерации случайного цвета 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const bodyColorInSpan = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");
buttonChangeColor.addEventListener("click", changeColor);
 
function changeColor(event) {
  const bgColorRamdom = getRandomHexColor();
  body.style.backgroundColor = bgColorRamdom;
  bodyColorInSpan.textContent = bgColorRamdom;
buttonChangeColor.style.backgroundColor = getRandomHexColor();
}