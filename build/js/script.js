'use strict';

(function () {
  var KEYCODE = {
    esc: 27
  };
  var link = document.querySelector('.page-header__contacts-button');
  var popup = document.querySelector('.modal');
  var close = popup.querySelector('.modal__close');
  var form = popup.querySelector('.modal__form');
  var userName = popup.querySelector('#call-name');
  var phone = popup.querySelector('#call-phone');
  var message = popup.querySelector('#call-question');
  var isStorageSupport = true;
  var storage = {};


  try {
    storage.name = localStorage.getItem('name');
    storage.phone = localStorage.getItem('phone');
    storage.message = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal--show');

    if (storage.name) {
      userName.value = storage.name;
      phone.value = storage.phone;
      message.value = storage.message;
      message.focus();
    } else {
      userName.focus();
    }
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal--show');
  });

  form.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('name', userName.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('message', message.value);
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE.esc) {
      evt.preventDefault();
      if (popup.classList.contains('modal--show')) {
        popup.classList.remove('modal--show');
      }
    }
  });

  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      popup.classList.remove('modal--show');
    }
  });
})();
