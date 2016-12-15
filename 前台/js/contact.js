(function(){

})();

$(function(){
	
	//ctw_tabs 切换
	new ChangeDiv({
		btns : $(".ctw_tabs .handle a"),
		divs : $(".ctw_con"),
		type : "click"		
	});
	
	//电子地址
	$(".mp").mouseover(function(){
		$(this).find(".feng").show();	
	}).mouseout(function(){
		$(this).find(".feng").hide();

	});	

});	