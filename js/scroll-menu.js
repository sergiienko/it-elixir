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
			}
		} else {
			if ($header.hasClass(hClass)) {
				$header
					.removeClass("ba-header_shown")
				setTimeout(function() {
					$header.removeClass(hClass);
				}, 300);
			}
		}
	});

})(jQuery);
