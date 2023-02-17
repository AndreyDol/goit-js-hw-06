// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controls = document.querySelector("#controls");
const inputNumber = controls.querySelector("input");
const dataCreate = controls.querySelector("[data-create]");
const dataDestroy = controls.querySelector("[data-destroy]");

const boxesDiv = document.querySelector("#boxes");
dataCreate.addEventListener("click", createBox);
dataDestroy.addEventListener("click", destroyBoxes);

function createBox(event) {
  console.log(inputNumber.value);
createBoxes(inputNumber.value);
}

// Функція, яка створює boxes

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = 30 + i * 10 + "px";
    boxEl.style.height = 30 + i * 10 + "px";
    const colorRamdom = getRandomHexColor();
    boxEl.style.backgroundColor = colorRamdom;
    boxEl.style.margin = "10px";
    //добавляє текст, номер кольру
    boxEl.style.fontSize = i*2 + 7 + "px";
    boxEl.innerHTML = `<p>${colorRamdom}<p`;
// 	parent.appendChild(p) вложить другий елемент, (треба його попередньо створити)
//додає в HTML
    boxesDiv.append(boxEl);
  //console.log(boxEl);
  }
}

// Колбек-функція, яка видаляє всі створенні елементи div

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
