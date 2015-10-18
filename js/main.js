;(function($) {

	$(function() {

		$(".ba-menu-toggle").click(function() {

			$(document.body).toggleClass("ba-menu-open");
		});

		$(".ba-menu-overlay").click(function() {

			$(document.body).toggleClass("ba-menu-open");
		});
	});

})(jQuery);
