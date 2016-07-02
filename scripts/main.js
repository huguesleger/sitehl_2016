//#main-home
	var homeHeight = $(window).height();
	$('#home .item').css('height',homeHeight);

	$(window).resize(function(){'use strict',
		$('#home .item').css('height',homeHeight);
	});


//Scroll Menu
$(window).on('scroll', function(){
	if( $(window).scrollTop()>homeHeight ){
		$('.main').addClass('navbar-fixed-top');
	} else {
		$('.main').removeClass('navbar-fixed-top');
	}

});



// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 0}, 800);
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   300;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 0}, 800);
		return false;
	});



	//Initiat WOW JS
	new WOW().init();



	// btn Scroll

	// $(function () {
	// 		$('.btn-scroll-down, .animate-down').bind("click", function () {
	// 				$('html, body').animate({ scrollTop: $(document.getElementsByTagName('header')).height() }, 600);
	// 				return false;
	// 		});
	// 		$('#scrollToTop').bind("click", function () {
	// 				$('html, body').animate({ scrollTop: 0 }, 1200);
	// 				return false;
	// 		});
	// });
