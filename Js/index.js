$(function() {
	$(window).scroll(function(event){
		// console.log('bạn vua cuộn chuột đên đây');
		// console.log($('html,body').scrollTop());
		var vitri = $('html,body').scrollTop();
		if(vitri >= 400) {
			$('.logovamenu').addClass('biendoi');
		}
		else{
			$('.logovamenu').removeClass('biendoi');
		}
	});;
	$('.back-top').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: 0}, 1000);
		/* Act on the event */
	});
	$('.logovamenu ul li:nth-child(1) a').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.header').offset().top}, 900,);
		/* Act on the event */
	});;
	$('.logovamenu ul li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.content2').offset().top}, 900,);
		/* Act on the event */
	});;
	$('.logovamenu ul li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.content3').offset().top}, 900,);
		/* Act on the event */
	});;
	$('.logovamenu ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.footer').offset().top}, 900,);
		/* Act on the event */
	});;
}); 