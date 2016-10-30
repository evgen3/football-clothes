$(function () {
	FastClick.attach(document.body);


	var $root = $('.clothes-image'),
		$highlight = $root.find('.clothes-image__highlight'),
		$caption = $root.find('.clothes-image__caption');

	/*$elements.on('click', function (e) {
		$elements.each(function () {
			var $t = $(this);

			$t.removeClass('hover');
		});

		this.classList.add('hover');
	});*/

	$highlight.on('mouseenter', function () {
		var $t = $(this),
			type = $t.data('type');

		$highlight.removeClass('is-active');
		$highlight.filter('[data-type=' + type + ']').addClass('is-active');

		$caption.removeClass('is-active');
		$caption.filter('[data-type=' + type + ']').addClass('is-active');
	});

	$highlight.on('mouseleave', function () {
		$highlight.removeClass('is-active');
		$caption.removeClass('is-active');
	});
});
