$(document).ready(function(){
    JPlaceHolder.init();
    myJs.init();
    if(navigator.userAgent.indexOf("MSIE")>0){
        if(navigator.userAgent.indexOf("MSIE 7.0")>0){
            $('.pagebox').width(($('.pagebox a').length+1)*30+$('.pagebox span').width()+27);
        }
    }

});


var JPlaceHolder = {
    //检测
    _check : function(){
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init : function(){
        if(!this._check()){
            this.fix();
        }
    },
    //修复
    fix : function(){
        jQuery(':input[placeholder]').each(function(index, element) {
            var self = $(this), txt = self.attr('placeholder');
            self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
            var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
            var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:$(this).height(), lineHeight:$(this).height()+'px', paddingLeft:paddingleft, color:'#aaa',width:$(this).width(),overflow:'hidden',fontSize:'12px'}).appendTo(self.parent());
            self.focusin(function(e) {
                holder.hide();
            }).focusout(function(e) {
                if(!self.val()){
                    holder.show();
                }
            });
            holder.click(function(e) {
                holder.hide();
                self.focus();
            });
        });
    }
};


var myJs = {
    wid:$(window).width(),
    hei:$(window).height(),
    init:function() {
        var self = this;
        self.mySize();
        self.myHover();
        self.mySwiper();
        self.myAni();
        self.myClick();
        $('.myitem .proimg').css({'min-height':$('.myitem .probg').width()});
        $('.box-type2').css({'min-height':self.hei});
        if(document.getElementById('bigimg')!=null){
            $("#bigimg").imagezoom();
        }
        self.myAddbuy();
        $('.video-tc .video-box').height($('.video-tc').height()-300);
    },
    myAddbuy:function(){
        $('.btnCart').click(function(event){
            // 元素以及其他一些变量
            var eleFlyElement = document.querySelector("#flyItem"),
                eleShopCart = document.querySelector("#shopCart");
            var numberItem = 0;
            // 抛物线运动
            var myParabola = funParabola(eleFlyElement, eleShopCart, {
                speed: 400, //抛物线速度
                curvature: 0.0008, //控制抛物线弧度
                complete: function() {
                    $(eleFlyElement).css('visibility','hidden');
                    if($('.right-on').css('display')=='none'){
                        $('.right-on').show();
                        $('.right-off').hide();
                    }
                    $('.right-bar .num').show();
                    var num = parseInt($('.right-bar .num').html())+1;
                    $('.right-bar .num').html(num).show();
                }
            });

            // 滚动大小
            var scrollLeft = $(window).scrollLeft() || $('body').scrollLeft() || 0,
                scrollTop = $(window).scrollTop() || $('body').scrollTop() || 0;
            $(eleFlyElement).css('left', event.clientX + scrollLeft + "px");
            $(eleFlyElement).css('top', event.clientY + scrollTop + "px");
            $(eleFlyElement).css('visibility', 'visible');

            // 需要重定位
            myParabola.position().move();
        });
    },
    myClick:function(){
        var self = this;
        $('.video-swipe li>div').click(function(){
            $('.video-tc').show();
            $('body').css({overflowY:'hidden'})
        });
        $('.video-tc .close').click(function(){
            $('.video-tc').hide();
            $('body').css({overflowY:'auto'})
        });
        $('.skin-tc .close').click(function(){
            $('.skin-tc').hide();
            $('.tcbg').hide();
        });
        $('.skin-start').click(function(){
            $('.tcbg').show();
            $('.skin-tc').show();
        });
        $('.cooptc .qr-btn').click(function(){
            $('.cooptc').hide();
            $('.tcbg').hide();
        });
        //$('.cooptc .close').click(function(){
        //    $('.cooptc').hide();
        //    $('.tcbg').hide();
        //});
        $('.coop .content .chose li a').click(function(){
            $(this).parents('li').siblings().removeClass('on');
            $(this).parents('li').addClass('on');
        })
        $('.skin-tc .switch li').click(function(){
            var html = $(this).html();
            $(this).parents('.chose').find('span').html(html);
            $(this).parents('ul').hide();
            $(this).parents('.chose').find('i').removeClass('up');
        });
        $('.stores .switch li').click(function(){
            var html = $(this).html();
            $(this).parents('.chose').find('span').html(html);
            $(this).parents('ul').hide();
            $(this).parents('.chose').find('i').removeClass('up');
        });
        $('.skin-tc .chose>div').click(function(){
            if(!$(this).parents('.chose').hasClass('dis')){
                $(this).siblings('ul').toggle();
                if($(this).find('i').hasClass('up')){
                    $(this).find('i').removeClass('up');
                }else{
                    $(this).parents('.chose').siblings('.chose').find('ul').hide();
                    $(this).parents('.chose').siblings('.chose').find('i').removeClass('up');
                    $(this).find('i').addClass('up');
                }
            }
        });

        $('.stores .chose>div').click(function(){
            if(!$(this).parents('.chose').hasClass('dis')){
                $(this).siblings('ul').toggle();
                if($(this).find('i').hasClass('up')){
                    $(this).find('i').removeClass('up');
                }else{
                    $(this).parents('.chose').siblings('.chose').find('ul').hide();
                    $(this).parents('.chose').siblings('.chose').find('i').removeClass('up');
                    $(this).find('i').addClass('up');
                }
            }
        });
        $('.hr ul li .td>a').click(function(){
            if($(this).parents('li').hasClass('on')){
                $(this).parents('li').removeClass('on');
                $(this).parents('li').find('.more').animate({height: "toggle"},300);
            }else{
                $('.hr ul .on .more').animate({height:"toggle"},300);
                $('.hr ul li').removeClass('on');
                $(this).parents('li').addClass('on');
                $(this).parents('li').find('.more').animate({height: "toggle"},300);
            }
        });
        $('.help .left .btn').click(function(){
            $('.help .left .btn .off').show();
            $('.help .left .btn .on').hide();
            $(this).find('.off').hide();
            $(this).find('.on').show();
        });
        $('.skin-tc .city ul li').click(function(){
            $('.skin-tc .city ul li').removeClass('on');
            $(this).addClass('on');
        });
        $('.tip a').click(function(){
            $(this).find('.onbtn').show();
            $(this).find('.onbtn').fadeOut(1000)
        });
        $('.det-add').click(function(){
            if($('.right-bar').hasClass('det-right-bar')){
                $('.right-bar .num').show();
            }
            var num = parseInt($('.right-bar .num').html())+1;
            $('.right-bar .num').html(num).show();
        });
        $('.tip .add').click(function(){
            if($('.right-bar').hasClass('det-right-bar')){
                $('.right-bar .num').show();
            }
            var num = parseInt($('.right-bar .num').html())+1;
            $('.right-bar .num').html(num).show();
        });
        $('.right-bar .small').click(function(){
            $('.right-bar .right-off').show();
            $('.right-bar .right-on').hide();
        });
        $('.right-bar .right-off').click(function(){
            $('.right-bar .right-on').show();
            $('.right-bar .right-off').hide();
        });
        $('.gotop').click(function () {
            $('body,html').animate({scrollTop:0},100);
        });
        $('.le2,.le3').click(function(){
            $(this).find('.jt').toggle();
            $(this).find('.jt2').toggle();
            $(this).next().toggle();
        });
        $(".page .pre ,.page .next").click(function(){
            $(this).parents('.page').find('.off').show();
            $(this).parents('.page').find('.on').hide();
            $(this).find('.on').show();
            $(this).find('.off').hide();
        });

        $('.storylist li').click(function(){
            if(!($(this).find('.st5txt').hasClass('read'))){
                $(this).find('.st5txt').addClass('read');
            }
            var html = '<div class="letter"><div class="close"><img src="'+IMG_PREFIX+'/close.png" /></div><div class="letter-info">';
            $(".story").append(html+$(this).children().children(".readcontent").html()+'</div></div>');
            $('.letter .close').click(function(){
                $(this).parent().remove();
                $('.blankzhe').hide();
                $('body').css({overflowY:'auto'});

            });

            $('.letter').show();
            $('.blankzhe').show();
            $('body').css({overflowY:'hidden'})
        });
        $('.newlist li').click(function(){
            if(!($(this).find('.st5txt').hasClass('read'))){
                $(this).find('.st5txt').addClass('read');
            }
            $(".letter .letter-info").html($(this).children().children(".readcontent").html());
            $('.letter').show();
            $('.blankzhe').show();
            $('body').css({overflowY:'hidden'})
        });
        $('.medialist li').click(function(){
            if(!($(this).find('.st5txt').hasClass('read'))){
                $(this).find('.st5txt').addClass('read');
            }
            $(".letter .letter-info").html($(this).children().children(".readcontent").html());
            $('.letter').show();
            $('.blankzhe').show();
            $('body').css({overflowY:'hidden'})
        });
        $('.letter .close').click(function(){
            $('.letter').hide();
            $('.blankzhe').hide();
            $('body').css({overflowY:'auto'})
        });
        $('.detail .small-img li').click(function(){
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
            $('.detail #bigimg').attr('src',$(this).find('img').attr('src'));
            $('.detail #bigimg').attr('rel',$(this).find('img').attr('data-big'));
        });
        $('.detail .top-left .co,.detail .top-left .zan').click(function(){
            $(this).find('.dt-on').show();
            $(this).find('.dt-on').fadeOut(1000);
        });
        $('.detail .top-right .size ul li').click(function(){
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
        });
        $('.detail .top-right .amount a').click(function(){
            if($(this).hasClass('plus')){
                var num = parseInt($('.detail .top-right .amount input').val())+1;
                $('.detail .top-right .amount input').val(num);
            }else if($(this).hasClass('minus')){
                var num = parseInt($('.detail .top-right .amount input').val())-1;
                if(num<1){
                    num = 1;
                }
                $('.detail .top-right .amount input').val(num);
            }
        });
        $('.det-choose a').click(function(){
            $('.det-choose a').removeClass('click');
            $(this).addClass('click');
            $('.det-choose .on').hide();
            $('.det-choose .off').show();
            $(this).find('.off').hide();
            $(this).find('.on').show();
        });

    },
    mySize:function(){
        var self = this;
        $('.bar').width(self.wid);
        $(window).resize(function(){
            var wid = $(window).width();
            var hei = $(window).height();
            $('.bar').width(wid);
        });
    },
    myAni:function(){
        $('.cloud').animate({left:'-5%'},10000,function(){
            $('.cloud').animate({left:'0'},10000)
        });
        setInterval(function(){
            $('.cloud').animate({left:'-5%'},10000,function(){
                $('.cloud').animate({left:'0'},10000)
            })
        },20000);

        $('.mountain').animate({'left':'-10%'},20000).animate({'left':'0'},20000);
        setInterval(function(){
            $('.mountain').animate({'left':'-10%'},20000).animate({'left':'0'},20000);
        },44000);

        $('.flower1').fadeToggle(2000);
        $('.flower2').fadeToggle(2000);
        setInterval(function(){
            $('.flower1').fadeToggle(2000);
            $('.flower2').fadeToggle(2000);
        },5000)
    },
    myHover:function(){
        var self = this;

        $('.video .video-swipe li>div').hover(function(){
            $(this).find('.hover').fadeIn(500)
        },function(){
            $(this).find('.hover').fadeOut(500)
        });
        $('.cart .suggest-pro .part ul li').hover(function(){
            $(this).find('.tip').addClass('disblock');
        },function(){
            $(this).find('.tip').removeClass('disblock');
        });

        $('.menu a').hover(function(){
            $(this).find('.on').hide();
            $(this).find('.off').show();
        },function(){
            $(this).find('.off').hide();
            $(this).find('.on').show();
        });

        $('.mall a').hover(function(){
            $('.topbg').stop().animate({opacity:1},200);
            $(this).find('.bar').show();
            $('.bar').offset({left:0});
        },function(){
            $('.topbg').stop().animate({opacity:0.9},200);
            $(this).find('.bar').hide()
        });

        $('.type ul li').hover(function(){
            $('.type ul li>img').hide();
            $(this).children('img').show();
            $(this).find('.btfly').fadeIn(500);
            $(this).siblings().find('.btfly').fadeOut(500);
            var i = $(this).index();
            $('#main-pager li a').eq(i).trigger("click");
        });

        $('.box-bot td img').hover(function(){
            $(this).parents('td').find('img').toggle();
        },function(){
            $(this).parents('td').find('img').toggle();
        });

        $('.main-swipe li>div,.list-item li').hover(function(){
            $(this).find('.tip').addClass('disblock');
        },function(){
            $(this).find('.tip').removeClass('disblock');
        });
        $('.main-swipe li>div>img,.list-item li>img').click(function(){
            window.open('/mall/detail')
        });

        $('.right-bar ul li').hover(function(){
            $(this).find('img').toggle();
        },function(){
            $(this).find('img').toggle();
        });

        $('.list-order ul li').hover(function(){
            $(this).addClass('on')
        },function(){
            $(this).removeClass('on')
        });

        $('.story .story-left li').mouseenter(function(){
            var i = $(this).index();
            $('.story li .circle').removeClass('on');
            $(this).find('.circle').addClass('on');
            $('.story .st-right>div').fadeOut(300);
            $('.story .st-right>div').eq(i).fadeIn(300);
        });
    },
    mySwiper:function(){
        var self = this;
        var t1swipe = new Swiper('.table1-swipe',{
            slidesPerView : 2,
            slidesOffsetBefore : 0,
            spaceBetween : 0,
            loop:true,
            onlyExternal:true,
            onSwiperCreated: function(swiper){
                $('.table1-swipe .swiper-slide').hover(function(){
                    $(this).find('.tip').addClass('disblock');
                },function(){
                    $(this).find('.tip').removeClass('disblock');
                });
            }
        });
        $('.prevt1').click(function(e){
            e.preventDefault();
            t1swipe.swipePrev();
        });
        $('.nextt1').click(function(e){
            e.preventDefault();
            t1swipe.swipeNext();
        });
        var tinyswipe = new Swiper('.tiny-swipe',{
            slidesPerView : 4,
            loop:true,
            onlyExternal:true,
            onSlideChangeStart: function () {
                var big = $('.story .tiny-swipe .swiper-slide-active .tiny').attr('data-big');
                var title = $('.story .tiny-swipe .swiper-slide-active .tiny').attr('alt');
                $('.story .bigimg img').attr('src',big);
                $('.story .bigimg span').text(title);
            }
        });
        $('.story .prev').click(function(e){
            e.preventDefault();
            tinyswipe.swipePrev();
        });
        $('.story .next').click(function(e){
            e.preventDefault();
            tinyswipe.swipeNext();
        });

        var usswipe = new Swiper('.us-swipe',{
            slidesPerView : 3,
            loop:true,
            tdFlow: {
                depth: 300,
                rotate : 0,
                shadows : false
            },
            onlyExternal:true,
            onSlideChangeStart: function () {
                $('.us-swipe .swiper-slide').removeClass('big');
                $('.us-swipe .swiper-slide-active').next().addClass('big');
            }
        });
        $('.prevus').click(function(e){
            e.preventDefault();
            usswipe.swipePrev();
        });
        $('.nextus').click(function(e){
            e.preventDefault();
            usswipe.swipeNext();
        });

        var mlswipe = new Swiper('.ml-swipe',{
            slidesPerView : 4,
            slidesOffsetBefore : 0,
            spaceBetween : 0,
            loop:true,
            onlyExternal:true,
            onSwiperCreated: function(swiper){
                $('.detail .ml-swipe .swiper-slide').hover(function(){
                    $(this).find('.tip').addClass('disblock');
                },function(){
                    $(this).find('.tip').removeClass('disblock');
                });
            }
        });
        $('.prevml').click(function(e){
            e.preventDefault();
            mlswipe.swipePrev();
        });
        $('.nextml').click(function(e){
            e.preventDefault();
            mlswipe.swipeNext();
        });
        var klswipe = new Swiper('.kl-swipe',{
            slidesPerView : 4,
            slidesOffsetBefore : 0,
            spaceBetween : 0,
            loop:true,
            onlyExternal:true,
            onSwiperCreated: function(swiper){
                $('.detail .kl-swipe .swiper-slide').hover(function(){
                    $(this).find('.tip').addClass('disblock');
                },function(){
                    $(this).find('.tip').removeClass('disblock');
                });
            }
        });
        $('.prevkl').click(function(e){
            e.preventDefault();
            klswipe.swipePrev();
        });
        $('.nextkl').click(function(e){
            e.preventDefault();
            klswipe.swipeNext();
        });
        var ver1 = new Swiper('.ver1',{
            mode : 'vertical',
            slidesPerView : 3,
            mousewheelControl : true,
            slidesOffsetBefore : 0,
            spaceBetween : 0,
            loop:true,
            onlyExternal:true,
            onSwiperCreated: function(swiper){
                $('.detail .ver1 .swiper-slide').hover(function(){
                    $(this).find('.tip').addClass('disblock');
                },function(){
                    $(this).find('.tip').removeClass('disblock');
                });
            }
        });
        $('.pr1').click(function(e){
            e.preventDefault();
            ver1.swipePrev();
        });
        $('.ne1').click(function(e){
            e.preventDefault();
            ver1.swipeNext();
        });
        var ver2 = new Swiper('.ver2',{
            mode : 'vertical',
            slidesPerView : 3,
            mousewheelControl : true,
            slidesOffsetBefore : 0,
            spaceBetween : 0,
            loop:true,
            onlyExternal:true,
            onSwiperCreated: function(swiper){
                $('.detail .ver2 .swiper-slide').hover(function(){
                    $(this).find('.tip').addClass('disblock');
                },function(){
                    $(this).find('.tip').removeClass('disblock');
                });
            }
        });
        $('.pr2').click(function(e){
            e.preventDefault();
            ver2.swipePrev();
        });
        $('.ne2').click(function(e){
            e.preventDefault();
            ver2.swipeNext();
        });
        var ver3 = new Swiper('.ver3',{
            mode : 'vertical',
            slidesPerView : 3,
            mousewheelControl : true,
            slidesOffsetBefore : 0,
            spaceBetween : 0,
            loop:true,
            onlyExternal:true,
            onSwiperCreated: function(swiper){
                $('.detail .ver3 .swiper-slide').hover(function(){
                    $(this).find('.tip').addClass('disblock');
                },function(){
                    $(this).find('.tip').removeClass('disblock');
                });
            }
        });
        $('.pr3').click(function(e){
            e.preventDefault();
            ver3.swipePrev();
        });
        $('.ne3').click(function(e){
            e.preventDefault();
            ver3.swipeNext();
        });
        var xilieswipe = new Swiper('.xilie-swipe',{
            mode : 'vertical',
            slidesPerView : 5,
            mousewheelControl : true,
            slidesOffsetBefore : 0,
            spaceBetween : 0,
            loop:true,
            onlyExternal:true
        });
        $('.prevxl').click(function(e){
            e.preventDefault();
            xilieswipe.swipePrev();
        });
        $('.nextxl').click(function(e){
            e.preventDefault();
            xilieswipe.swipeNext();
        });
        //setTimeout(function(){
        //    $('#video-swipe').show()
        //},100);

        $("#video-swipe").responsiveSlides({
            auto:false,
            nav:true,
            navContainer:".choosepage",
            prevText: "",
            nextText: ""
        });
        $('.video_panel').show()

        $("#brand-swipe").responsiveSlides({
            pager: true,
            speed: 300,
            pause: true,
            manualControls: '#brand-pager'
        });

        $("#st4-swipe").responsiveSlides({
            pager: true,
            speed: 300,
            manualControls: '#st4-pager'
        });
        $("#main-swipe").responsiveSlides({
            pager: false,
            speed: 300,
            auto:false,
            nav: true,
            manualControls: '#main-pager',
            after: function () {
                var i = $('.main-swipe').find('.rslides2_on').index();
                $('.type ul li>img').hide();
                $('.type ul li').eq(i).children('img').show();
                $('.type ul li').eq(i).find('.btfly').fadeIn(300);
                $('.type ul li').eq(i).siblings().find('.btfly').fadeOut(300);
            }
        });
    }
};
