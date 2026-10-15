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

  // Contoh hasil: tab (tanpa JavaScript semua contoh tampil berurutan)
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.demo-tabs [role="tab"]'));

  if (tabs.length) {
    var panels = tabs.map(function (tab) {
      return document.getElementById(tab.getAttribute('aria-controls'));
    });

    var show = function (index, focus) {
      tabs.forEach(function (tab, i) {
        var on = i === index;
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.tabIndex = on ? 0 : -1;
        if (panels[i]) panels[i].hidden = !on;
      });
      if (focus) tabs[index].focus();
    };

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        show(i, false);
      });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = tabs.length - 1;
        if (next !== null) {
          e.preventDefault();
          show(next, true);
        }
      });
    });

    show(0, false);
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
