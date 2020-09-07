$(function(){
	$(document).on("click", '.menu_mobile_btn',function(e){
		e.preventDefault();
		$('header').toggleClass('mobile_menu');
		 
		if(!$('header').hasClass("mobile_menu")) {
			$(this).find('i').attr("class", 'fa fa-bars burger-menu')
		} else {
			$(this).find('i').attr("class","fa fa-times burger-menu")
		} 
	});

	$(document).on("click", '.sub-mod', function(e){
		e.preventDefault();
		$(".menu-inners").toggle();
		 
	});
})

