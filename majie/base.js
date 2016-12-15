(function(){

//顶端adver渐隐
	
function FadeAdver(args){
	for(var i in args){
			this[i] = args[i];	
		}	
		this.speed = args.speed ? args.speed : 5000;	//间隔时间默认5秒
		this.sTime = args.sTime ? args.sTime : 500;	//渐进时间，默认1秒
		this.load();
		this.start();
}

FadeAdver.prototype ={
	constructor : this,
	load : function(){
		var _this = this;
		this.num = 0;	//计时器
		this.mNum = this.num+1;	//轮播计时
		this.len = this.divs.length;					
		
		//所有div设置absolute并排好index
		this.divs.each(function(num){
			var z_index = 50-num;
			$(this).css({
				"position" : "absolute",
				"left" : 0,
				"top" : 0,
				"z-index" : z_index,
				"display" : "none"	
			})
		});
		
		$(this.divs[0]).show();
		
		//所有div设置absolute并排好index
		
			
		this.btns.each(function(num){
			$(this).mouseover(function(){
				_this.show(num);	
				_this.stop();				
			}).mouseout(function(){
				_this.start();	
			});	
		});
		
		//左右按钮的使用
		if(!!this.preBtn && !!this.nextBtn){
			this.preBtn.css("z-index",60);
			this.preBtn.click(function(){
				var num = _this.num - 1;
				if(num < 0){
					num = _this.len-1;		
				}	
				_this.show(num);
			});	
			this.nextBtn.css("z-index",60);
			this.nextBtn.click(function(){
				var num = _this.num + 1;
				if(num >= _this.len){
					num = 0;		
				}	
				_this.show(num);
			});	
		}
		
		this.divs.each(function(num){
			$(this).mouseover(function(){					
				_this.stop();				
			}).mouseout(function(){
				_this.start();	
			});	
		});
	},
	show : function(num){
		if(num == this.num) return;	//同一个返回
		
		
		var _this = this;
		this.flag  = false;	//关闭控制开关
		this.btns.each(function(i){
			if(i == num){
				$(this).addClass("hover");	
			}else{
				$(this).removeClass("hover");	
			}				
		});
				
		$(this.divs[this.num]).fadeOut(this.sTime);	//旧的淡出
						
		$(this.divs[num]).fadeIn(_this.sTime);		//新的淡入
		_this.num = num;	
		_this.mNum = num+1;			
				
	},
	start : function(){
		var _this = this;					
		this.interval = setInterval(function(){					
			if(_this.mNum >= _this.len){
				_this.mNum = 0;
			}						
			_this.show(_this.mNum);								
		},this.speed);
	},
	stop : function(){
		clearInterval(this.interval);
	}	
};

window.FadeAdver = FadeAdver;
//顶端adver	

//ChangeDiv切换效果
function ChangeDiv(args){
	for(var i in args){
		this[i] = args[i];	
	}	
	this.type = this.type ? this.type : "mouseover";
	this.load();
}

ChangeDiv.prototype = {
	constructor : this,
	load : function(){
		var _this = this;
		this.btns.each(function(num){
			if(_this.type == "click"){
				$(this).click(function(){
					_this.change(num)	
				});		
			}else{
				$(this).mouseover(function(){
					_this.change(num)	
				});		
			}			
		});	
	},
	change : function(num){
		var _this = this;
		
		this.btns.each(function(n){
			if(n ==num){
				$(this).addClass("hover");		
			}else{
				$(this).removeClass("hover");		
			}				
		});
		
		this.divs.each(function(n){
			if(n ==num){
				$(this).addClass("show");		
			}else{
				$(this).removeClass("show");		
			}				
		});
	}	
};

window.ChangeDiv = ChangeDiv;
//ChangeDiv切换效果

//清除所有input的value
	function ClearValue(forms){
		this.forms = forms;
		this.load();	
	}
	
	ClearValue.prototype = {
		constructor : this,
		load : function(){
			var _this = this;			
			this.forms.each(function(){
				_this.clearValue($(this));	
			});
		},
		clearValue : function(fm){			
			this.inputs = $("input.text,input.keyword",fm);
			this.textarea = $("textarea",fm);
			var _this = this;
			var dValues = [];	
			var aValues = [];		
			this.inputs.each(function(n){
				dValues[n] = $(_this.inputs[n]).val();
			});
			this.textarea.each(function(n){
				aValues[n] = $(_this.textarea[n]).html();
			});
						
			this.inputs.each(function(n){
				$(this).focus(function(){
					if($(this).val() == dValues[n]){
						$(this).val("");	
						$(this).removeClass("text_hover");
					}
				});	
				$(this).blur(function(){
					if($(this).val() == ""){
						$(this).val(dValues[n]);	
						$(this).removeClass("text_hover");
					}else{
						$(this).addClass("text_hover");	
					}
				});
			});	
			this.textarea.each(function(n){
				$(this).focus(function(){
					if($(this).html() == aValues[n]){
						$(this).html("");	
						$(this).removeClass("text_hover");
					}
				});	
				$(this).blur(function(){
					if($(this).html() == ""){
						$(this).html(aValues[n]);	
						$(this).removeClass("text_hover");
					}else{
						$(this).addClass("text_hover");		
					}
				});	
			});
		}	
	};
	
	window.ClearValue = ClearValue;
	//清除所有input的value

})();

$(function(){
	
	new ClearValue($("form"));	//清除默认文字

	//顶部微信展示
	$(".head_wxbtn").hover(function(){
		$(".wx_code").show();	
	},function(){
		$(".wx_code").hide();	
	});
	
	//banner 轮播图
	new FadeAdver({
		btns : $(".banner .btns span"),
		divs : $(".banner .pics li"),
		speed : 5000	
	});
	
	//客服代码
	if($(".keifu").length != 0){
		
		var KF = $(".keifu");
		var wkbox = $(".keifu_box");
		var kf_close = $(".keifu .keifu_close");
		var icon_keifu = $(".icon_keifu");
		var kH = wkbox.height();
		var kW = wkbox.width();
		var wH = $(window).height();
		KF.css({height:kH});
		icon_keifu.css("top",parseInt((kH-100)/2));
		var KF_top = (wH-kH)/2;
		if(KF_top<0) KF_top=0;
		KF.css("top",KF_top);
		$(kf_close).click(function(){
			KF.animate({width:"0"},200,function(){
				wkbox.hide();
				icon_keifu.show();
				KF.animate({width:26},300);		
			});	
		});
		$(icon_keifu).click(function(){
				$(this).hide();
				wkbox.show();
				KF.animate({width:kW},200);
		});
		
		KF.hide();
		$(kf_close).click();
		setTimeout(function(){
			KF.show();	
		},300);
			
	}
	
	
	//child_nav 二级页面的导航处理JS
	if($(".child_nav").length != 0){
		
		function childFixed(){	//二级nav的浮动
			if($(window).scrollTop() >= 765){
				$(".child_nav").addClass("child_fixed");
				$(".child_zw").show();	
			}else{
				$(".child_nav").removeClass("child_fixed");		
				$(".child_zw").hide();
			}
		}
		
		childFixed();
		$(window).scroll(function(){
			childFixed();	
		});
		
		function GoPos(num){	//跳转函数
			var pos = $(".floor_pos");
			var top = $(pos[num]).offset().top;
			
			if(num == 1){
				top = top-20;	
			}
			
			$(".child_nav a").removeClass("hover");
			$($(".child_nav a")[num]).addClass("hover");			
			
			$(document.documentElement).animate({
				scrollTop : top	
			},300);		
			$(document.body).animate({
				scrollTop : top	
			},300);					
			
		}	
		
		function CkPos(){	//位置监测
			var _wt = $(window).scrollTop();
			var _topArr=[];
			$(".floor_pos").each(function(num){			
				_topArr[num] = $(this).offset().top;					
			});
			
			for(var i = 0 ; i <= _topArr.length; i ++){
				if(_wt >= _topArr[i]){
					
					$(".child_nav a").removeClass("hover");
					$($(".child_nav a")[i]).addClass("hover");
						
				}
			}
					
		}
		
		CkPos();	
		$(window).scroll(function(){
			CkPos();	
		});
		
		$(".child_nav a").each(function(num){
			$(this).click(function(){			
				GoPos(num);	
			});
		});
		
			
	}

});	