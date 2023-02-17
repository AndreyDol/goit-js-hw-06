// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const output = document.querySelector("#name-output");
const input = document.querySelector("#name-input");
input.addEventListener("input", inputOn);

function inputOn(event) {
   // console.log(input.value); 
    if (input.value === "") output.textContent = "Anonymous"; else output.textContent = input.value;
}