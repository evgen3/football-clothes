$(function () {
	FastClick.attach(document.body);


	var $root = $('.clothes-image'),
		$highlight = $root.find('.clothes-image__highlight'),
		$caption = $root.find('.clothes-image__caption'),
		$button = $root.find('.clothes-image__button'),
		visibleAll = false;

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

		if (visibleAll)
			return;

		$highlight.removeClass('is-active');
		$highlight.filter('[data-type=' + type + ']').addClass('is-active');

		$caption.removeClass('is-active');
		$caption.filter('[data-type=' + type + ']').addClass('is-active');
	});

	$highlight.on('mouseleave', function () {
		if (visibleAll)
			return;
		
		$highlight.removeClass('is-active');
		$caption.removeClass('is-active');
	});

	$button.on('click', function (e) {
		var $t = $(this);
		e.preventDefault();

		if (visibleAll) {
			$highlight.removeClass('is-active');
			$caption.removeClass('is-active');
			visibleAll = false;
			$t.text($t.data('text'));
			$t.removeClass('is-active');
		} else {
			$highlight.addClass('is-active');
			$caption.addClass('is-active');
			visibleAll = true;
			$t.text($t.data('text-active'));
			$t.addClass('is-active');
		}


	});
});
