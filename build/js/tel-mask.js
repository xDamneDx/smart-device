/*eslint-disable*/

'use strict';

(function () {
  var askUsTel = document.getElementById('ask-us-phone');
  var modalTel = document.getElementById('call-phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var askUsMask = IMask(askUsTel, maskOptions);
  var modalMask = IMask(modalTel, maskOptions);
})();
