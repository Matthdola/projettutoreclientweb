$(function() {"use strict";

	if ($("#owl-carousel .item").length > 1) {
		$("#owl-carousel").owlCarousel({
			center : true,
			loop : true,
			margin : 45,
			responsive : {
				0 : {
					items : 1
				},
				768 : {
					items : 3,
					margin : 20
				},
				992 : {
					items : 3
				},
				1200 : {
					items : 3
				}

			},
			dots : true,
			nav : true
			//	navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		});
	}

	$(' a[data-id^="#"]').bind('click.smoothscroll', function(e) {
		e.preventDefault();
		var target = $(this).attr("data-id");
		var $target = $(target);
		var goto = parseInt($target.offset().top) - parseInt(0)
		$('html, body').stop().animate({
			'scrollTop' : goto
		}, 1000, 'swing', function() {
		});
	});
	
	
		$('.menu-btn').on('click',function(){
			if($(window).width() < 767){
			$('.navigation').slideToggle();
			}
		})
	

});
