import Share from 'ninelines-sharing';
import html2canvas from 'html2canvas';

if (document.querySelector('[data-social]')) {
	const list = document.querySelectorAll('[data-social]');

	Array.prototype.forEach.call(list, (item) => {
		item.addEventListener('click', (e) => {
			const social = e.currentTarget.dataset.social;
			const url = location.origin + location.pathname;
			$("#share__img").html($("#summary .section__hello__left").clone());
			html2canvas(document.querySelector("#share__img")).then(canvas => {
				var img = new Image();
				img.src = canvas.toDataURL("image/png");
				$('meta[property=og\\:image]').attr('content', img.src);
				document.body.appendChild(img)
			});

			Share[social](url);
		});
	});
}
