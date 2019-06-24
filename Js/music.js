$(function() {
	$('.logovamenu a:nth-child(4)').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.footer').offset().top}, 900,);
		/* Act on the event */
	});;

	$('.back-top').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: 0}, 1000);
		/* Act on the event */
	});
});
new WOW().init();