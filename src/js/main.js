(function($){
	window.App = window.App || {};
	App.Widgets = App.Widgets || {};
	App.Objects = App.Objects || {};
	App.Helpers = App.Helpers || {};
	App.Locale = App.Locale || {};
	App.User = App.User || {};

	/**
	 * Основной класс приложения
	 * Все методы, начинающиеся с "init" запускаются автоматически при полной загрузке страницы
 	 */
	var Application = can.Control.extend(
		{
		},
		{
			init: function () {
			},

			bootstrap: function () {
				var method;

				for (method in this) {
					if (method.length > 4 && method.substr(0, 4) === 'init') {
						this[method]();
					}
				}

				can.route.ready();
			},

			/**
			 * Навешивает контроллер на DOM элемент и возвращает его instance
			 * @param selector
			 * @param controllerName
			 * @param settings
			 * @returns {*}
			 */
			installController: function (selector, controllerName, settings) {
				settings = settings || {};
				return this.element.find(selector)[controllerName](settings).control(controllerName);
			},

			/**
			 * Инициадизация кастомных компонент вроде селектов, чекбоксов и прочего
			 */
			initCustomComponents: function () {
				FastClick.attach(document.body);


				var $root = $('.js-image'),
					$elements = $root.find('.highlight');

				$elements.on('click', function (e) {
					$elements.each(function () {
						this.classList.remove('hover');
					});

					this.classList.add('hover');
				});

				$elements.on('mouseleave', function () {
					$elements.each(function () {
						this.classList.remove('hover');
					});
				});


			}

			/*
			initWidgets: function () {
				this.installController('.js-header-menu', 'appWidgetsSearchHeader');
				this.installController('.js-header-footer', 'appWidgetsMenu', {myOption: true});
			}
			*/
		}
	);

	$(function(){
		window.application = new Application('body');
		window.application.bootstrap();
	});

}(jQuery));
