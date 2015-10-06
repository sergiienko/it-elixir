var $header = $('#header'),
	pos = parseFloat( $('.ba-banner').css('height') ) - 1;
$(document).scroll(function() {
	if($(this).scrollTop() > pos) {
		if(!$header.hasClass('ba-header_secondary')) {
			$header.find('.ba-logo__img').attr('src', 'img/logo_small.png');
			$header.addClass('ba-header_secondary');
		}
	}
	else {
		if($header.hasClass('ba-header_secondary')) {
			$header.find('.ba-logo__img').attr('src', 'img/logo.png');
			$header.removeClass('ba-header_secondary')
		}
	}

});
