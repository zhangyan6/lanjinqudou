$(document).ready(function(){

    userJs.init();
});

var userJs = {
    loginRedirect:'',
    wid:$(window).width(),
    hei:$(window).height(),
    init:function() {
        var self = this;
        self.loginClick();
        self.bindDtmm();
        self.bindForget();
        self.bindYzm();
        self.bindDtmmBind();
        self.submitBindMobile();
        self.bindLogin();
        self.forgetTo2();
        self.forgetTo3();
        self.zcTo2();
        self.forgetToMail();
        self.sendBindMail();
        self.weiboLogin();
        self.snsRegist();
        //self.qqLogin();
        self.snsSendValidate();
        self.snsBind();

    },
    user_id : '',
    userMobile:'',
    userEmail:'',
    oOpts:'',
    qqParas:'',
    pageOpenId:'',
    weiboUserInfo:'',
    snsType:'',
    snsBindRedirect:'',
    redirectUser:function(){
        if(userJs.loginRedirect==''){
            window.location.reload();
        } else {
            window.location.href=userJs.loginRedirect;
        }
    },
    bindRedirect:function(){
        if(userJs.snsBindRedirect==''){
            window.location.reload();
        } else {
            window.location.href=userJs.snsBindRedirect;
        }
    },
    //qqLogin:function(){
    //    if($('.loginExit').hasClass('disnone')){
    //        if(QC.Login.check()) {//如果已登录
    //
    //            QC.Login.getMe(function (openId, accessToken) {
    //                userJs.qqParas = {'access_token':accessToken,'oauth_consumer_key':userJs.oOpts.appId,'openid':openId,'format':'json'};
    //                QC.api('get_user_info', userJs.qqParas)
    //                    .success(function(s){
    //                        userJs.snsType = 1;
    //                        userJs.pageOpenId = userJs.qqParas.openid;
    //                        userJs.snsLogin(1,userJs.qqParas.openid, s.data.nickname);
    //
    //                        //alert("获取用户信息成功！当前用户昵称为："+s.data.nickname);
    //                    }).error(function(f){
    //                        //失败回调
    //                        alert("获取用户信息失败！");
    //                    })
    //                //alert(["当前登录用户的", "openId为：" + openId, "accessToken为：" + accessToken].join("\n"));
    //            });
    //        }
    //    }
    //
    //},
    weiboLogin:function(){
        $('.weiboLogin').click(function(){
            var status = WB2.checkLogin();
            if(status){
                userJs.getWbUserData(function(o){
                    userJs.snsType = 2;
                    userJs.weiboUserInfo = o;
                    userJs.pageOpenId = o.idstr;
                    userJs.snsLogin(2, o.idstr,o.screen_name);

                })
            } else {
                WB2.login(function() {
                    userJs.getWbUserData(function(o){
                        userJs.snsType = 2;
                        userJs.weiboUserInfo = o;
                        userJs.pageOpenId = o.idstr;
                        userJs.snsLogin(2, o.idstr,o.screen_name);

                    })
                });
            }

        })
    },

    snsLogin:function(type,openId,nickname){
        $.ajax({
            "type": "POST",
            "url": Inoherb_Config.shop_prefix+"/Login/getSnsInfo",
            dataType: "jsonp",
            jsonp: "callback",
            "data": {
                'openId':openId,'type':type,'nickname':nickname
            },
            "success": function (jsonp) {
                userJs.redirectUser();
                //if (jsonp.status == 1) {
                //    userJs.redirectUser();
                //} else {
                //    $('.user-login').hide();
                //    $('.snsLogin').show();
                //}
            }
        })
    },
    snsBind:function(){
        $('.bd-zhmm-btn').click(function(){
            $('.bd-zhmm-btn').unbind('click');

            var data;
            //if($('.bd-sj').hasClass('radio-on')){

                data = {'username':$('.bindSnsMobile').val(),'password':$('.bindSnsValidate').val(),'snsType':userJs.snsType,'openId':userJs.pageOpenId}
            //} else {
            //    data = {'type':2,'username':$('.bindSnsUsername').val(),'password':$('.bindSnsPassword').val(),'code':$('.bindSnsCode'),'snsType':userJs.snsType,'openId':userJs.pageOpenId}
            //}
                if(checkMobileLength('.bindSnsMobile')) {
                    $.ajax({
                        "type": "POST",
                        "url": Inoherb_Config.shop_prefix + "/login/snsBindUser",
                        dataType: "jsonp",
                        jsonp: "callback",
                        jsonpCallback: "success_jsonpCallback",
                        "data": data,
                        "success": function (jsonp) {
                            if (jsonp.status == 1) {
                                userJs.bindRedirect();
                            } else {
                                userJs.snsBind();
                                alert(jsonp.msg)
                            }

                        }
                    })
                } else {
                    userJs.snsBind();
                }
        })
    },

    snsRegist:function(){
        $('.bdZcSubmit').click(function(){

            $('.bdZcSubmit').unbind('click');
            if($('.agree-img').is(':checked')){
                if(checkMobileLength('#bdRegistUsername') ){
                    if($('#bdRegistPassword').val() == $('#bdRegistPasswordRepeat').val()){
                        $.ajax({
                            "type": "POST",
                            "url": Inoherb_Config.shop_prefix+"/regist/regist",
                            dataType : "jsonp",
                            jsonp: "callback",
                            jsonpCallback: "success_jsonpCallback",
                            "data": {
                                'username': $('#bdRegistUsername').val(),
                                'password': $('#bdRegistPassword').val(),
                                'snsType':userJs.snsType,
                                'openId':userJs.pageOpenId,
                                'code': $('#bdRegisCode').val()
                            },
                            "success": function (jsonp) {
                                if (jsonp.status == 1) {
                                    userJs.redirectUser();

                                } else {
                                    alert(jsonp.msg)
                                }
                            }
                        })
                    } else {
                        userJs.snsRegist();
                        alert ("两次输入密码不一致");
                    }

                }
            } else {
                userJs.snsRegist();
                alert('请先阅读并同意用户协议');
            }
        })

    },
    snsRegistValidate:function(){
        $('.bd-zc-yzm-btn').click(function (){
            unBindYzbtn('.bd-zc-yzm-btn');
            if(checkMobileLength('#bdRegistUsername')){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix + "/regist/makeZcYzm",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {'username': $('#bdRegistUsername').val()},
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {

                            cntdown(".bd-zc-yzm-btn", 60);
                            //alert('验证码已发送');
                        } else if (jsonp.status == 3) {
                            bindYzbtn('.bd-zc-yzm-btn');
                            alert('手机号已被注册');
                        }else if (jsonp.status==4){
                            bindYzbtn('.bd-zc-yzm-btn');
                            alert('请不要频繁的申请验证码，一分钟后再试');
                        }else if (jsonp.status==6){
                            bindYzbtn('.bd-zc-yzm-btn');
                            alert('非常抱歉，您今天验证码请求次数已超过限制');
                        } else {
                            bindYzbtn('.bd-zc-yzm-btn');
                            alert('发送失败');
                        }
                    }
                })
            }else{
                bindYzbtn('.bd-zc-yzm-btn');
            }

        })
    },
    snsSendValidate:function(){
        $('.hq-dtmm-sns').click(function () {

            unBindYzbtn('.hq-dtmm-sns');
            if(checkMobileLength('.bindSnsMobile')){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix + "/Login/bindSnsCode",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {'username': $('.bindSnsMobile').val()},
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {
                            cntdown(".hq-dtmm-sns", 60);
                            //alert('动态密码已发送');
                        } else if (jsonp.status == 3) {
                            bindYzbtn('.hq-dtmm-sns');
                            alert('用户不存在');
                        }else if (jsonp.status==4){
                            bindYzbtn('.hq-dtmm-sbs');
                            alert('请不要频繁的申请验证码，一分钟后再试');
                        }else if (jsonp.status==6){
                            bindYzbtn('.hq-dtmm-sbs');
                            alert('非常抱歉，您今天验证码请求次数已超过限制');
                        } else {
                            bindYzbtn('.hq-dtmm-sns');
                            alert('发送失败');
                        }
                    }
                })
            } else {
                bindYzbtn('.hq-dtmm-sns');
            };

        })
    },
    loginClick:function() {
        var self = this;
        $('.mediacoop-btn').click(function(){
            $('.mediacoop-tc').show()
        });

        $('.cg-btn').click(function(){
            $('.cg-tc').show()
        });

        $('.mediacoop-box .close').click(function () {
            $('.mediacoop-tc').hide()
            $('.cg-tc').hide()
        });


        $('.login-close').click(function () {
            $('.login-bg input').val('');
            $('.login-bg').hide()
        });
        $('.cancelBind').click(function(){
            $('.login-bg').hide();

        })
        $('.zc-close').click(function () {
            $('.zc-bg input').val('')
            $('.zc-bg').hide()
        });
        $('.select-sex>li').click(function () {
            $(this).find('img').attr('src', '/Assets/Shop/images/login/choose.png');
            $(this).siblings().find('img').attr('src', '/Assets/Shop/images/login/unchoose.png');
        });

        $('.gt-select>ul>li').click(function () {
            if ($(this).hasClass('commu-on')) {
                $(this).removeClass('commu-on');
                $(this).find('img').attr('src', '/Assets/Shop/images/login/unchoose.png');
            }
            else {
                $(this).addClass('commu-on');
                $(this).find('img').attr('src', '/Assets/Shop/images/login/choose.png');
            }
        });
        $('.password-xs-44').click(function () {
            if ($(this).hasClass('password-on')) {
                $(this).removeClass('password-on');
                $(this).find('img').attr('src', '/Assets/Shop/images/login/unchoose2.png');
                $(this).parent('li').find('input').attr('type', 'password')
            }
            else {
                $(this).addClass('password-on');
                $(this).find('img').attr('src', '/Assets/Shop/images/login/choose2.png');
                $(this).parent('li').find('input').attr('type', 'text')
            }
        });
        $('.password-xs').click(function () {
            if ($(this).hasClass('password-on')) {
                $(this).removeClass('password-on');
                $(this).find('img').attr('src', '/Assets/Shop/images/login/unchoose2.png');
                $(this).parent('li').find('input').attr('type', 'password')
                $('.confirm-password').attr('type', 'password')
            }
            else {
                $(this).addClass('password-on');
                $(this).find('img').attr('src', '/Assets/Shop/images/login/choose2.png');
                $(this).parent('li').find('input').attr('type', 'text')
                $('.confirm-password').attr('type', 'text')
            }
        });
        $('.tip-choose').click(function () {
            if ($(this).hasClass('rule-on')) {
                $(this).removeClass('rule-on');
                $(this).attr('src', '/Assets/Shop/images/login/unchoose2.png');
            }
            else {
                $(this).addClass('rule-on');
                $(this).attr('src', 'images/choose2.png');
            }
        });
        $('.wszl-select li').click(function () {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $(this).find('ul').hide();
            }
            else {
                $(this).find('ul').show();
                $(this).siblings().find('ul').hide();
                $(this).siblings().removeClass('on');
                $(this).addClass('on')
            }

        });
        $('.mychoose li').click(function () {
            var year = $(this).html()
            $(this).parents('ul').siblings('p').html(year)
        })
        $('.loginType>p').click(function () {
            $(this).find('img').attr('src', '/Assets/Common/images/login/radio-on.png');
            $(this).siblings().find('img').attr('src', '/Assets/Common/images/login/radio-off.png');
            $(this).addClass('radio-on');
            $(this).siblings().removeClass('radio-on')
            if ($('.loginType .sj').hasClass('radio-on')) {
                $('.type-phone').show();
                $('.type-normal').hide();

            }
            else {
                $('.type-phone').hide();
                $('.type-normal').show();
                $(this).addClass('radio-on')
            }


        })

        $('.bd-zhmm-title span').click(function(){
            $(this).siblings().removeClass('bd-zhmm-title-on');
            $(this).addClass('bd-zhmm-title-on');
            if($('.bd-zhmm-title-on').attr('data-type') == 1){
                $('.bd-zhmm-main').show();
                $('.bd-zc-mainbox').hide();
            } else {
                $('.bd-zc-mainbox').show();
                $('.bd-zhmm-main').hide();
            }
        })

        $('.check-radio>p').click(function(){
            $(this).find('img').attr('src', '/Assets/Common/images/login/radio-on.png');
            $(this).siblings().find('img').attr('src', '/Assets/Common/images/login/radio-off.png');
        });
        $('.bd-sj').click(function(){
            $('.bd-zhmm-tel').show()
            $('.bd-zhmm-pt').hide()
        });
        $('.bd-pt').click(function(){
            $('.bd-zhmm-tel').hide()
            $('.bd-zhmm-pt').show()
        });

        $('.loginButton').click(function () {
            $('.username').val($.cookie('name'));
            var currentUrl = window.location.href;
            $.cookie('snsRedirect', currentUrl);
            $('.user-login').show();
        });

        $('.lc-2-choose> span').click(function () {
            $(this).find('img').attr('src', '/Assets/Common/images/login/radio-on.png');
            $(this).siblings().find('img').attr('src', '/Assets/Common/images/login/radio-off.png');
        });
        $('.choose-tel-radio').click(function () {
            $('.lc-2-tel').show();
            $('.lc-2-email').hide();
        })
        $('.choose-email-radio').click(function () {
            $('.lc-2-tel').hide();
            $('.lc-2-email').show();
        })


        $('.loginExit').click(function () {
            //if(userJs.snsType == 1){
                //QC.Login.signOut();
            //} else if (userJs.snsType == 2){
            //    WB2.logout(function() {
            //    });
            //}
            $.ajax({
                "type": "POST",
                "url": Inoherb_Config.shop_prefix+"/Login/exitLogin",
                dataType: "jsonp",
                jsonp: "callback",
                //jsonpCallback:"success_jsonpCallback",
                "data": {

                },
                "success": function (jsonp) {
                    if (jsonp.status == 1) {
                        window.location.href='/';
                    }
                }
            })

        })
        $('.registBtn').click(function () {
            $('.user-login').hide();
            $('.user-login input').val('');
            var currentUrl = window.location.href;
            $.cookie('snsRedirect', currentUrl);
            $('.zcStep1').show();

        })
        $('#backToLogin').click(function () {
            $('.zcStep1').hide();
            $('.zcStep1 input').val('');
            $('.user-login').show();
        })



        $('#findPassword').click(function () {
            $('.user-login').hide();
            $('.user-login input').val('');
            $('.forget1').show();
        })


        $('#fgtSubmit').click(function(){
            if($('#newPassword').val() == $('#repeatNewPassword').val()){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix+"/login/newPassword",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {
                        'id':userJs.user_id,
                        'password': $('#newPassword').val()
                    },
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {
                            $('.forget-password input').val('');
                            $('.forget3').hide();
                            $('.forget4').show();
                            redirectCntdown('.forgetCntDown',3);
                        }

                    }
                })
            } else {
                alert('两次密码不同');
            }

        })
        $('.Bto1').click(function () {
            $('.forget2').hide();
            $('.forget2 input').val('');
            userJs.forgetTo2();
            $('.forget1').show();
        })
        $('.go-shopping-btn,.zcStep2 .zc-close-reload,.login-close-bind,.snsLogin .login-close').click(function(){
            userJs.redirectUser();
        })
        $('#forgetSuccess').click(function(){
            userJs.redirectUser();
        })
        //$('.qqLogin').click(function(){
        //    QC.Login.showPopup(userJs.oOpts);
        //})


        $('#FgtToRegist').click(function(){
            $('.forget1').hide();
            $('.forget1 input').val();
            $('.zcStep1').show();
        })
        $('.changeYzmPic').click(function(){
            var key = $(this).attr('dataKey');
            userJs.changeVaPic(key);
            //var key = $(this).attr('dataKey');
            //var url = '/Login/makeVerifyPic';
            //$.ajax({
            //    "type": "POST",
            //    "url":url,
            //    "data":{'key':key},
            //    "success":function(data){
            //        $('.inputYzm .'+key+'Class').replaceWith(data);
            //    }
            //})
        })
    },
    zcTo2:function(){
        $('.zcStep1 .tel-zc-btn').click(function () {
            $('.zcStep1 .tel-zc-btn').unbind('click');
            $('.zcStep1 .tel-zc-btn').html('注册中');
                if($('.agree-img').is(':checked')){
                    if(checkMobileLength('#registUsername') ){
                        if(checkPassword('#registPassword')){
                            if($('#registPassword').val() == $('#registPasswordRepeat').val()){
                                $.ajax({
                                    "type": "POST",
                                    "url": Inoherb_Config.shop_prefix+"/regist/regist",
                                    dataType : "jsonp",
                                    jsonp: "callback",
                                    jsonpCallback: "success_jsonpCallback",
                                    "data": {
                                        'username': $('#registUsername').val(),
                                        'password': $('#registPassword').val(),
                                        'code': $('#regisCode').val()
                                    },
                                    "success": function (jsonp) {
                                        if (jsonp.status == 1) {
                                            userJs.user_id=jsonp.user.id;
                                            $('.zcStep1 input').val('');
                                            $('.zcStep1').hide()
                                            $('.zcStep2').show()

                                        } else {
                                            userJs.zcTo2();
                                            $('.zcStep1 .tel-zc-btn').html('同意协议并注册');
                                            alert(jsonp.msg)
                                        }

                                    }
                                })
                            } else {
                                userJs.zcTo2();
                                $('.zcStep1 .tel-zc-btn').html('同意协议并注册');
                                alert ("两次输入密码不一致");
                            }
                        } else {
                            userJs.zcTo2();
                            $('.zcStep1 .tel-zc-btn').html('同意协议并注册');
                        }


                    } else {
                        $('.zcStep1 .tel-zc-btn').html('同意协议并注册');
                        userJs.zcTo2();
                    }
                } else {
                    $('.zcStep1 .tel-zc-btn').html('同意协议并注册');
                    userJs.zcTo2();
                    alert('请先阅读并同意用户协议');
                }


        })
    },
    sendBindMail:function(){
        $('.btn-bd-email').click(function(){
            var email=$('#bindMail').val();
                if(CheckMail(email)){
                    $.ajax({
                        "type": "POST",
                        "url": Inoherb_Config.shop_prefix+"/safety/emailYzZwei",
                        dataType: "jsonp",
                        jsonp: "callback",
                        jsonpCallback: "success_jsonpCallback",
                        "data": {'email': email},
                        "success": function (data) {
                            if(data.status=='1'){
                                $('#mailUser').val(data.mailHidden)
                                $('#mailUrl').html(data.mailUrl);
                                $('#mailUrl').attr('href',data.mailUrl);
                                $('.emailSendSuccess').show();
                            } else {
                                alert('发送失败');
                            }
                        }
                    });

                }

        })
    },
    getWbUserData:function(callback) {
        WB2.anyWhere(function (W) {
            W.parseCMD(
                "/account/get_uid.json",
                function (s, b) {
                    if (!!b) {
                        getData(W, s);
                    }else{
                        alert("授权失败或错误");
                    }
                },
                {},
                {method: 'GET'}
            );
        });
        function getData(W, S) {
            W.parseCMD(
                "/users/show.json",
                function (sResult, bStatus) {
                    if (!!bStatus && !!callback) {
                        callback.call(this,sResult);
                    }
                },
                {'uid': S.uid},
                {method: 'GET'}
            );
        }
    },
    forgetTo2:function(){
        $('#FtoS2').click(function () {
            if($('#forgetUsername').val()!=''||$('#forgetUsername').val()!=null){
                $('#FtoS2').unbind('click');
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix+"/login/forget",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {
                        'username': $('#forgetUsername').val(),
                        'code': $('#forgetCode').val()
                    },
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {
                            $('.lc-2-tel p:eq(0)').html(jsonp.user.username);
                            $('.lc-2-tel p:eq(1)').html(jsonp.user.EnMobile);
                            $('.lc-2-email p:eq(0)').html(jsonp.user.username);
                            $('.lc-2-email p:eq(1)').html(jsonp.user.email);
                            userJs.user_id = jsonp.user.id;
                            userJs.userMobile = jsonp.user.mobile;
                            userJs.userEmail = jsonp.user.email;
                            $('.forget1').hide();
                            $('.forget2').show();
                        } else {
                            userJs.forgetTo2();
                            userJs.changeVaPic('forget');
                            alert(jsonp.msg)
                        }

                    }
                })
            } else {
                alert('登陆名不能为空');
            }

        })

    },
    forgetTo3:function(){
        $('#FtoS3').click(function () {
            $('#FtoS3').unbind('click');
            $.ajax({
                "type": "POST",
                "url": Inoherb_Config.shop_prefix+"/login/checkFgtCode",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "success_jsonpCallback",
                "data": {
                    'username': userJs.userMobile,
                    'forgetCode': $('#smsFgtCode').val()
                },
                "success": function (jsonp) {
                    if (jsonp.status == 1) {
                        $('.forget2').hide();
                        $('.forget3').show();
                    } else {
                        userJs.forgetTo3();
                        alert(jsonp.msg);

                    }
                }
            })
        })
    },
    forgetToMail:function(){
      $('.FtoMail').click(function(){
          $('.FtoMail').unbind('click');
              if(userJs.userEmail != '' || userJs.userEmail!=null){
                  $.ajax({
                      "type": "POST",
                      "url": Inoherb_Config.shop_prefix+"/Login/resetPasswordMail",
                      dataType : "jsonp",
                      jsonp: "callback",
                      "data": {
                          'userId': userJs.user_id,
                          'email': userJs.userEmail
                      },
                      "success": function (jsonp) {
                          if (jsonp.status == 1) {
                              var infohtml = '您好，相宜本草已经向您的邮箱'+userJs.userEmail+'发送“找回密码”邮件，请查收！';
                              $('.lc-2-getemail p').html(infohtml);
                              $('#mailLogin').attr('href',jsonp.mailLogin);
                              $('.mailSuccess').show();

                          } else {

                              userJs.forgetToMail();
                              alert(jsonp.msg)
                          }
                      }
                  })
              } else {
                  userJs.forgetToMail();
                alert('您还没有绑定过邮箱');
              }
      })
    },
    bindLogin:function(){
        $('.btn-login-click').click(function () {
            $('.btn-login-click').unbind('click');
            $('.btn-login-click').html('登录中');
            var loginType = $('.loginType .radio-on').attr('dataType');
            var remember
            if ($('#remember' + loginType).is(':checked')) {
                remember = 1
            } else {
                remember = 2
            }
            if(checkMobileLength('.username'+loginType)){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix+"/Login/login",
                    dataType : "jsonp",
                    jsonp: "callback",
                    "data": {
                        'username': $('.username' + loginType).val(),
                        'password': $('.password' + loginType).val(),
                        'code':$('#loginVerifyCode').val(),
                        'type': loginType,
                        'remember': remember
                    },
                    "success": function (jsonp) {
                        ETCore.log(jsonp);
                        if (jsonp.status == 1) {
                            if(typeof(jsonp.user.crm_id) != 'undefined') {
                                if(jsonp.user.mobile == '' ||jsonp.user.mobile==null){
                                    if(confirm('您尚未绑定手机，是否现在去绑定')){
                                        userJs.user_id = jsonp.user.id;
                                        $('.user-login').hide();
                                        $('.bindphone').show();
                                    } else {
                                        userJs.redirectUser();
                                    }
                                } else {
                                    userJs.redirectUser();
                                }
                            } else {
                                userJs.redirectUser();
                            }
                        } else {
                            userJs.changeVaPic('login');
                            $('.btn-login-click').html('登录');
                            userJs.bindLogin();
                            alert(jsonp.msg)
                        }
                    }
                })
            }


        })

    },
    changeVaPic:function(key){
        var url = '/VerifyMake/makeVerify?key='+key+'&date='+Math.random();
        $('.inputYzm .'+key+'Class').attr('src',url);
    },
    bindDtmm:function() {
        $('.hq-dtmm-login').click(function () {

            unBindYzbtn('.hq-dtmm-login');
            if(checkMobileLength('.username1')){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix + "/Login/makeTemporyPassword",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {'username': $('.username1').val()},
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {
                            cntdown(".hq-dtmm-login", 60);
                            //alert('动态密码已发送');
                        } else if (jsonp.status == 3) {
                            bindYzbtn('.hq-dtmm-login');
                            alert('用户不存在');
                        }else if (jsonp.status==4){
                            bindYzbtn('.hq-dtmm-login');
                            alert('请不要频繁的申请验证码，一分钟后再试');
                        }else if (jsonp.status==6){
                            bindYzbtn('.hq-dtmm-login');
                            alert('非常抱歉，您今天验证码请求次数已超过限制');
                        } else {
                            bindYzbtn('.hq-dtmm-login');
                            alert('发送失败');
                        }
                    }
                })
            } else {
                bindYzbtn('.hq-dtmm-login');
            };

        })
    },
    bindDtmmBind:function() {
        $('.hq-dtmm-bind').click(function () {

            unBindYzbtn('.hq-dtmm-bind');
            if(checkMobileLength('#bindMobile')){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix + "/Login/makeBindCode",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {'username': $('#bindMobile').val()},
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {
                            cntdown(".hq-dtmm-bind", 60);
                            //alert('动态密码已发送');
                        } else if (jsonp.status == 3) {
                            bindYzbtn('.hq-dtmm-bind');
                            alert('您已经是相宜会员，可通过手机号码进行快捷登录');
                        }else if (jsonp.status==4){
                            bindYzbtn('.hq-dtmm-bind');
                            alert('请不要频繁的申请验证码，一分钟后再试');
                        }else if (jsonp.status==6){
                            bindYzbtn('.hq-dtmm-bind');
                            alert('非常抱歉，您今天验证码请求次数已超过限制');
                        } else {
                            bindYzbtn('.hq-dtmm-bind');
                            alert('发送失败');
                        }
                    }
                })
            } else {
                bindYzbtn('.hq-dtmm-bind');
            };

        })
    },
    submitBindMobile:function(){
        $('.bd-tel-btn').click(function () {
            if($('#bindMobileCode').val().length>0&&$('#bindMobile').val().length>0){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix+"/login/bindMobile",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {
                        'id':userJs.user_id,
                        'mobile':$('#bindMobile').val(),
                        'code': $('#bindMobileCode').val()
                    },
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {
                            alert('动态密码错误');
                        } else if(jsonp.status == 2){
                            alert('动态密码超时');
                        } else if(jsonp.status == 3){
                            alert('手机绑定成功');
                            userJs.redirectUser();
                        }

                    }
                })
            } else {
                alert('请不要忘记填写信息');
            }
        })
    },
    bindYzm:function() {
        $('.zc-yzm-btn').click(function (){
            unBindYzbtn('.zc-yzm-btn');
            if(checkMobileLength('#registUsername')){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix + "/regist/makeZcYzm",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {'username': $('#registUsername').val()},
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {

                            cntdown(".zc-yzm-btn", 60);
                            //alert('验证码已发送');
                        } else if (jsonp.status == 3) {
                            bindYzbtn('.zc-yzm-btn');
                            alert('您已经是相宜会员，可通过手机号码进行快捷登录');
                        }else if (jsonp.status==4){
                            bindYzbtn('.zc-yzm-btn');
                            alert('请不要频繁的申请验证码，一分钟后再试');
                        }else if (jsonp.status==6){
                            bindYzbtn('.zc-yzm-btn');
                            alert('非常抱歉，您今天验证码请求次数已超过限制');
                        } else {
                            bindYzbtn('.zc-yzm-btn');
                            alert('发送失败');
                        }
                    }
                })
            }else{
                bindYzbtn('.zc-yzm-btn');
            }

        })
    },
    bindForget:function(){
        $('.forgetCodeButton').click(function(){
            unBindYzbtn(".forgetCodeButton");
            if(userJs.userMobile != '' || userJs.userMobile!=null){
                $.ajax({
                    "type": "POST",
                    "url": Inoherb_Config.shop_prefix+"/login/makeFgtYzm",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "success_jsonpCallback",
                    "data": {'username': userJs.userMobile},
                    "success": function (jsonp) {
                        if (jsonp.status == 1) {

                            cntdown(".forgetCodeButton", 60);
                            //alert('验证码已发送');
                        } else if (jsonp.status ==3){
                            bindYzbtn('.forgetCodeButton');
                            alert('用户不存在');
                        }else if (jsonp.status==4){
                            bindYzbtn('.forgetCodeButton');
                            alert('请不要频繁的申请验证码，一分钟后再试');
                        }else if (jsonp.status==6){
                            bindYzbtn('.forgetCodeButton');
                            alert('非常抱歉，您今天验证码请求次数已超过限制');
                        } else {
                            bindYzbtn('.forgetCodeButton');
                            alert('发送失败');
                        }

                    }
                })
            } else {
                alert('您还没有绑定手机号')
                bindYzbtn('.forgetCodeButton');
            };

        })
    }

};
function unBindYzbtn(classname) {
    $(classname).unbind('click');
    $(classname).html("60秒后重发");
}

function _cntdown(button, time) {
    return function() {
        cntdown(button, time);
    }
}

function cntdown(button, time) {

    var self = this;
    var downString = "秒后重发";
    time = time - 1;
    $(button).html(time + downString);
    if(time == 0) {
        bindYzbtn(button);
    } else {
        setTimeout(_cntdown(button, time),1000);
    }
}
function bindYzbtn(button){
    if(button == '.hq-dtmm-login'){
        $('.hq-dtmm-login').html("获取验证码");
        userJs.bindDtmm();
    } else if (button == '.zc-yzm-btn'){
        $('.zc-yzm-btn').html("获取验证码");
        userJs.bindYzm();
    } else if (button == '.forgetCodeButton'){
        $('.forgetCodeButton').html("获取验证码");
        userJs.bindForget();
    } else if(button == '.hq-dtmm-bind'){
        $('.hq-dtmm-bind').html("获取验证码");
        userJs.bindDtmmBind();
    } else if (button == '.bd-zc-yzm-btn'){
        $('.bd-zc-yzm-btn').html("获取验证码");
        userJs.snsRegistValidate();
    } else if(button == '.hq-dtmm-sns'){
        $('.hq-dtmm-sns').html("获取验证码");
        userJs.snsSendValidate();
    }
}
function checkMobileLength(selecter){
    var mobile = $(selecter).val();
    if(selecter == '.username2'){
        if(mobile.length>0){
            return true;
        } else {
            alert('请输入账号');
            return false;
        }
    } else {
        var regu = /^1(3[0-9]|4[57]|5[0-35-9]|7[0-9]|8[0-9])\d{8}$/;
        var re = new RegExp(regu);
        if (re.test(mobile) && mobile != '') {
            return true;
        } else {
            alert('请输入正确的手机号码');
            return false;
        }
    }

}
function _redirectCntdown(button, time) {
    return function() {
        redirectCntdown(button, time);
    }
}
function redirectCntdown(button,time){
    var downString = "秒后，自动返回";
    time = time - 1;
    $(button).html(time + downString);
    if(time == 0 ){
        window.location.href='/';
    } else {
        setTimeout(_redirectCntdown(button, time),1000);
    }
}
function CheckMail(mail) {
    var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(mail)) {
        return true;
    }    else {
        alert('您的电子邮件格式不正确');
        return false;}
}
function checkPassword(selecter){
    var password = $(selecter).val();
    var regu = /(?![a-z]+$|[0-9]+$)^[a-zA-Z0-9]{8,}$/;
    var re = new RegExp(regu);
    if (re.test(password) && password != '') {
        return true;
    } else {
        alert('密码需为长度不少于8位的数字、字母组合');
        return false;
    }
}