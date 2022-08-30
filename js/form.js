const form = document.querySelector('#form');
const nameInput = document.querySelector('#formName');
const phoneInput = document.querySelector('#formPhone');
const msgInput = document.querySelector("#formMsg");
const inputsForm = document.querySelectorAll(".form-input")

form.addEventListener('submit', handleSignup);

    function handleSignup(evt) { 
    evt.preventDefault();

  const nameInputValue = nameInput.value;
  const phoneInputValue = phoneInput.value;
  const msgInputValue = msgInput.value;
  const formInfo = {
    name: nameInputValue,
    phone: phoneInputValue,
    massage: msgInputValue
  }

  localStorage.setItem("formInfo", JSON.stringify(formInfo));
  document.location.reload();

  }
if (localStorage.getItem("formInfo")) {
  const formInfoData = JSON.parse(localStorage.getItem("formInfo"));
  const { name, phone, massage } = formInfoData;
}


form.onsubmit = function () {
  emptyInputs = Array.from(inputsForm).filter(input => input.value === '');

    inputsForm.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            
        } else {
            input.classList.remove('error');
        }
    
})

    if (emptyInputs.length !== 0) {
        alert('Заполните все поля!!!');
            return false;
    } else {       
        (emptyInputs.length === 0); 
         alert('Ваш вопрос отправлен!Спасибо,за отзыв!');
                 return false;

};
}
    


