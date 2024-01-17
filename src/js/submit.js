const refs = {
  form: document.querySelector('.modal-cons-form'),
};

const { user_name, user_surname, user_mail, user_phone } = refs.form.elements;

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  if (
    user_name.value === '' ||
    user_mail.value === '' ||
    user_phone.value === ''
  ) {
    return alert('Заповніть всі поля форми!');
  }
  const userData = {
    name: user_name.value,
    surname: user_surname.value,
    email: user_mail.value,
    phone: user_phone.value,
  };

  refs.form.reset();
}
