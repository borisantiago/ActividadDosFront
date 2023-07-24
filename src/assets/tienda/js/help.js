(function () {
    window.onload = function () {
      var preloader = document.querySelector('.cs-page-loading');
      preloader.classList.remove('active');
      setTimeout(function () {
        preloader.remove();
      }, 1000);
    };
  })();