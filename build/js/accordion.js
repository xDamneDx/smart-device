'use strict';

(function () {
  var checkboxNav = document.querySelector('.nav__input');
  var checkboxContacts = document.querySelector('.contacts__input');

  checkboxNav.addEventListener('change', function () {
    checkboxContacts.checked = !checkboxNav.checked;
  });
  checkboxContacts.addEventListener('change', function () {
    checkboxNav.checked = !checkboxContacts.checked;
  });
})();
