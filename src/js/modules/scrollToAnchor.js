import header from '../components/header';
import helpers from '../helpers';

/**
* Модуль "Плавный переход к якорю"
*/
const init = () => {
	helpers.$document.on('click.anchor', '.js-to-anchor', (e) => {
		e.preventDefault();
		e.stopPropagation();

		const id = $(e.currentTarget).attr('href');
		const speed = $(e.currentTarget).data('speed') || 500;
		const offset = helpers.$header.css('position') === 'fixed' || helpers.$header.css('position') === 'absolute' ? -helpers.$header.outerHeight(true) : 0;

		helpers.scrollTo($(id), speed, offset);
		$(e.currentTarget).addClass('active');
		if($('.header__burger').css('display')=='block'){
			header.closeMenu().then(() => {
				$('.js-burger').removeClass('is-active');
				helpers.scrollTo($(id), speed, offset);
			});
		}
	});
};

const destroy = () => {
	helpers.$document.off('.anchor');
};

export default {
	init,
	destroy,
};
