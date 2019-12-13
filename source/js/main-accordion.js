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
    Array.prototype.forEach.call(accordionPanes, function (accordionPane) {
      var button = accordionPane.closest('.accordion').querySelector('.accordion__toggle');
      if (button === evt.target && !button.classList.contains('accordion__toggle--inactive') || button !== evt.target) {
        hidePane(button, accordionPane);
      } else if (button === evt.target) {
        showPane(button, accordionPane);
      }
    });
  };

  Array.prototype.forEach.call(accordionItems, function (accordion) {
    var accordionToggleButton = accordion.querySelector('.accordion__toggle');
    var accordionPane = accordion.querySelector('.accordion__pane');
    hidePane(accordionToggleButton, accordionPane);
    accordionToggleButton.addEventListener('click', toggleAccordion);
  });

  activeByDefault(DEFAULT.accordion);
})();
