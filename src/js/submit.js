import axios from 'axios';

const BASE_URL = 'https://veligorska-cinsultation-contacts.onrender.com/api';

const refs = {
  form: document.querySelector('.modal-cons-form'),
};

const { user_name, user_surname, user_mail, user_phone } = refs.form.elements;

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
  evt.preventDefault();
  console.log(evt);

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

  // const response = await axios.post(`${BASE_URL}/contacts`, userData);
  // try {
  //   console.log(response.data);
  // } catch (err) {
  //   console.log('ggg', err);
  // }

  try {
    const response = await axios.post(`${BASE_URL}/contacts`, userData);
    console.log(response.data);
  } catch (err) {
    alert(err.request.response);
    console.log(err.request.response);
  }

  refs.form.reset();
}
