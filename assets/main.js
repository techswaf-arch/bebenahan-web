(function () {
  'use strict';

  // Meja di beranda: berantakan <-> rapi
  var desk = document.getElementById('meja');
  var toggle = document.getElementById('benahi');

  if (desk && toggle) {
    var names = desk.querySelectorAll('.sheet__name');

    toggle.addEventListener('click', function () {
      var tidy = desk.classList.toggle('is-tidy');
      names.forEach(function (el) {
        el.textContent = tidy ? el.dataset.tidy : el.dataset.messy;
      });
      toggle.textContent = tidy ? 'Acak lagi' : 'Benahi';
    });
  }

  // Salin alamat email
  var copyBtn = document.getElementById('salin');
  var addr = document.getElementById('alamat');
  var info = document.getElementById('salin-info');

  if (copyBtn && addr && navigator.clipboard && navigator.clipboard.writeText) {
    copyBtn.hidden = false;
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(addr.textContent.trim()).then(function () {
        copyBtn.textContent = 'Tersalin';
        if (info) info.textContent = 'Alamat email tersalin';
        setTimeout(function () {
          copyBtn.textContent = 'Salin alamat';
          if (info) info.textContent = '';
        }, 2000);
      });
    });
  }
})();
