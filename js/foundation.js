$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 620);
        return false;
      }
    }
  });
});

$(document).ready(function() {

	$('#bottomPanel').click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});

	$('.expandAll').click(function() {
		$('.panel-collapse').each(function() {
			if ($(this).hasClass('collapse')) {
				$(this).collapse('toggle');
			}
		});
	});
	$('.collapseAll').click(function() {
		$('.panel-collapse').each(function() {
			if ($(this).hasClass('in')) {
				$(this).collapse('toggle');
			}
		});
	});

	$('#missionLink').click(function() {
		$('html, body').animate({
			scrollTop: $('#missionStatement').offset().top - 75
		}, 500);
	});

	$('#listLink').click(function() {
		$('html, body').animate({
			scrollTop: $('#criteria').offset().top - 75
		}, 500);
	});

	$('#faqLink').click(function() {
		$('html, body').animate({
			scrollTop: $('#faq').offset().top - 75
		}, 500);
	});

	$('.toTop').click(function() {
		$('html, body').animate({scrollTop: 0}, 500);
	});


	$.ajaxSetup({
		async: false
	});

});