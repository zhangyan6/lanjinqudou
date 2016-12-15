(function(){

})();

$(function(){
	
	//his_slide 滚动
	$('.his_slide ul').carouFredSel({
			auto : false,
			direction : "left",
			circular : false,
			infinite : false,
			prev : ".his_slide .pre",
			next : ".his_slide .next",
			scroll: 1
		});	
	
	//honor_slide 滚动
	$('.honor_slide ul').carouFredSel({
			auto : {				
					timeoutDuration: 5000
				},
			direction : "left",
			prev : ".honor_slide .pre",
			next : ".honor_slide .next",
			scroll : 1
		});	

});	