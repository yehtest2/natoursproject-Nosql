/* eslint-disable*/
import '@babel/polyfill';
import { dispalyMap } from './mapbox';
import { login, logout } from './login';
import { data, Signup } from './signup';
import { updateData, updateSettings } from './updateData';
import { bookTour } from './scripe';
import { showAlert } from './alert';

const mapbox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const SignForm = document.querySelector('.form--sign');
const logOutBtn = document.querySelector('.nav__el--logout');
const updatefrom = document.querySelector('.form-user-data');
const userpasswordfrom = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');
console.log(SignForm);
if (mapbox) {
  const locations = JSON.parse(
    document.getElementById('map').dataset.locations
  );
  dispalyMap(locations);
}
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email);
    login(email, password);
  });
}
if (SignForm) {
  SignForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;
    const PasswordConfrim = document.getElementById('PasswordConfrim').value;
    console.log(name, email, role, password, PasswordConfrim);
    Signup(name, email, role, password, PasswordConfrim);
  });
}
if (logOutBtn) logOutBtn.addEventListener('click', logout);
if (updatefrom)
  updatefrom.addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating....';

    const form = new FormData();
    form.append('email', document.getElementById('email').value);
    form.append('name', document.getElementById('name').value);
    form.append('photo', document.getElementById('photo').files[0]);

    console.log(email);
    updateSettings(form, 'data');
    document.getElementById('email').value = ' ';
  });
if (userpasswordfrom)
  userpasswordfrom.addEventListener('submit', async function(e) {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating....';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { password, passwordConfirm, passwordCurrent },
      'password'
    );
    document.querySelector('.btn--save-password').textContent = 'Update over';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
    document.getElementById('password-current').value = '';
  });
if (bookBtn) {
  bookBtn.addEventListener('click', e => {
    e.target.textContent = '...Process';
    const tourId = e.target.dataset.tourId;
    console.log(tourId);
    bookTour(tourId);
  });
}
const alertm = document.querySelector('body').dataset.alert;
console.log(alertm);
console.log('123');
if (alertm) {
  console.log('123');
  showAlert('success', alertm);
}
