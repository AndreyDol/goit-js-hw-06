// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

input.addEventListener("input", textChangeSize);

function textChangeSize(e) {
   // console.log(input.value);
textSpan.style.fontSize = input.value+"px";
}