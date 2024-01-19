import axios from 'axios';
import Notiflix from 'notiflix';

const BASE_URL = 'https://veligorska-cinsultation-contacts.onrender.com/api';

const refs = {
  form: document.querySelector('.modal-cons-form'),
};

const { user_name, user_surname, user_mail, user_phone } = refs.form.elements;

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
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
    surname: user_surname.value === '' ? 'no surname' : user_surname.value,
    email: user_mail.value,
    phone: user_phone.value,
  };
  try {
    await axios.post(`${BASE_URL}/contacts`, userData);
    Notiflix.Report.success('Ваші дані відправлено! ', '', 'ОК');
    refs.form.reset();
  } catch (err) {
    Notiflix.Report.failure(
      `${err.response.data.message}`,
      '',
      'Редагувати дані',
      { width: '350px', titleMaxLength: 100 }
    );
  }
}
