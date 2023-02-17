// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

decrementButton.addEventListener("click", onTargetBtnDecrementClick);

incrementButton.addEventListener("click", onTargetBtnIncrementClick);

function onTargetBtnDecrementClick () {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
  //  console.log(counterValue);
}

function onTargetBtnIncrementClick() {
  counterValue += 1;
    valueSpan.textContent = counterValue;
   //  console.log(counterValue);
}