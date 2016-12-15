$(function() {
	var key=0;//当前
	var prev=0;//定义一个变量，用于保存上一屏，就是要消失的那一屏
	//打开网页就要进入一屏 
	outIn();
	$(document).mousewheel(function(event,delta){
		//鼠标向下滚动，delta为-1，向上滚动，delta为1
		if($('.box').is(':animated')){
			console.log('已经有动画在执行了');
		}
		else{
			key=key-delta;
			if(key<0){
				key=0
			}
			if(key>5){
				key=5
			}
			if(key==5){
				$('.box').stop().animate({top:-430+'%'}, 700);
			}
			else{
				$('.box').stop().animate({top:-key*100+'%'}, 700);
				//对应的角标也要随之改变
				$('.nav li').eq(key).addClass('current').siblings().removeClass('current');
			}
		}
		outIn();
		//当前这一屏完成后，将会在下一屏出现时消失
		prev=key;//要消失的一屏
	})

	//鼠标点击
	var arr=['蓝金祛痘美肤堂','经营项目','产品一览','治疗方案','案例',''];
	$('.nav li').bind({
		mouseover:function(){
			var tag=$('<span>'+arr[$(this).index()]+'</span>');
			$(this).append(tag);
		},
		mouseout:function(){
			$(this).children('span').remove();
		},
		click:function(){
			$(this).addClass('current').siblings().removeClass('current');
			$('.box').stop().animate({top:-($(this).index())*100+'%'}, 700);
			var index=$(this).index();
			key=index;	
			outIn();
			//当前这一屏完成后，将会在下一屏出现时消失
			prev=key;//要消失的一屏
		}
	})
	
	$('.menu li').click(function(event) {
		var index=$(this).index();
		$('.box').stop().animate({top:-($(this).index())*100+'%'}, 700);
		$('.nav li').eq($(this).index()).addClass('current').siblings().removeClass('current');
		key=index;
		outIn();
		//当前这一屏完成后，将会在下一屏出现时消失
		prev=key;//要消失的一屏
	});

	//定义一个动画进入和消失的功能
	function outIn(){
		//进入一个，出去一个
		//当前的进入  key
		//屏幕消失的叫做prev
		$('.low').eq(prev).addClass('comeout');
		$('.low').eq(key).removeClass('comeout');
	}
});