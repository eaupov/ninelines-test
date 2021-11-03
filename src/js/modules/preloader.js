import Preloader from 'ninelines-preloader';

Preloader.init('/images/preloader.svg')
    .then(() => {
        document.querySelector('.preloader').style.display = 'none';
        $(window).on('load', showPage());
    });