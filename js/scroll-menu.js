;(function($){

	var $header = $("#header"),
		hClass = "ba-header_secondary",
		pos = parseFloat( $(".ba-banner").css("height") ) - 1;

	$(document).scroll(function() {
		if($(this).scrollTop() > pos) {
			if (!$header.hasClass(hClass)) {
				$header
					.addClass("ba-header_secondary")
					.addClass("ba-header_shown")
					.find(".ba-logo__img")
						.attr("src", "img/logo-middle.svg");

				if ($(".ba-menu-toggle").css("display") !== "none") {
					$(".ba-nav").prependTo($(document.body));
				}
			}
		} else {
			if ($header.hasClass(hClass)) {
				$header
					.removeClass("ba-header_shown")
				setTimeout(function() {
					$header
						.removeClass(hClass)
						.find(".ba-logo__img")
							.attr("src", "img/logo.svg");

					if ($(".ba-menu-toggle").css("display") !== "none") {
						$header.find(".ba-logo").after($(".ba-nav"));
					}
				}, 300);
			}
		}
	});

})(jQuery);
