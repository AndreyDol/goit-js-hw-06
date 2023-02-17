// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");
form.addEventListener("submit", verifySubmitInput);

function verifySubmitInput(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;
  //или так:
  // const {
  //   elements: { email, password },
  // } = event.currentTarget;
  //console.log(email.value, password.value);
  //проверка на незаполненные поля
  if (email.value === "" || password.value === "")
      return alert("Please fill in all the fields!");
   //создаем объект 
    const submitData = { email: email.value, password: password.value, };
    console.log(submitData);
    //сброс значений формы
    event.currentTarget.reset();
}


