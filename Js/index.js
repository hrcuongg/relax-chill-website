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
});