'use strict';

(function () {
  var accordionItems = document.querySelectorAll('.accordion');
  var accordionPanes = document.querySelectorAll('.accordion__pane');

  var DEFAULT = {
    accordion: 2
  };

  var addClass = function (element, className) {
    element.classList.add(className);
  };

  var removeClass = function (element, className) {
    element.classList.remove(className);
  };

  var hidePane = function (button, pane) {
    addClass(button, 'accordion__toggle--inactive');
    addClass(pane, 'accordion__pane--hidden');
  };

  var showPane = function (button, pane) {
    removeClass(button, 'accordion__toggle--inactive');
    removeClass(pane, 'accordion__pane--hidden');
  };

  var activeByDefault = function (numberOfPane) {
    var defaultAccordion = accordionItems[numberOfPane - 1];
    var defaultAccordiontoggle = defaultAccordion.querySelector('.accordion__toggle');
    var defaultAccordionPane = defaultAccordion.querySelector('.accordion__pane');
    if (defaultAccordion) {
      showPane(defaultAccordiontoggle, defaultAccordionPane);
    }
  };

  var toggleAccordion = function (evt) {
    // accordionPanes.forEach(function (accordionPane) {
    Array.prototype.forEach.call(accordionPanes, function (accordionPane) {
      var button = accordionPane.previousElementSibling.querySelector('.accordion__toggle');
      if (button === evt.target && !button.classList.contains('accordion__toggle--inactive') || button !== evt.target) {
        hidePane(button, accordionPane);
      } else if (button === evt.target) {
        showPane(button, accordionPane);
      }
    });
  };

  // accordionItems.forEach(function (accordion) {
  Array.prototype.forEach.call(accordionItems, function (accordion) {
    var accordionToggleButton = accordion.querySelector('.accordion__toggle');
    var accordionPane = accordion.querySelector('.accordion__pane');
    hidePane(accordionToggleButton, accordionPane);
    accordionToggleButton.addEventListener('click', toggleAccordion);
  });

  activeByDefault(DEFAULT.accordion);
})();

/*eslint-disable*/

'use strict';

(function () {
  var maskedInputs = document.querySelectorAll('input[data-inputmask]');

  var applyMask = function () {
    // maskedInputs.forEach(function (input) {
    Array.prototype.forEach.call(maskedInputs, function (input) {
      var maskOption = {
        mask: input.getAttribute('data-inputmask')
      };
      IMask(input, maskOption);
    });
  };

  applyMask();

})();

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

  var openPopup = function () {
    popup.classList.add('modal--show');
    document.body.classList.add('disable-scroll');
  };

  var closePopup = function () {
    popup.classList.remove('modal--show');
    document.body.classList.remove('disable-scroll');
  };

  try {
    storage.name = localStorage.getItem('name');
    storage.phone = localStorage.getItem('phone');
    storage.message = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();

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
    closePopup();
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
        closePopup();
      }
    }
  });

  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      closePopup();
    }
  });
})();
