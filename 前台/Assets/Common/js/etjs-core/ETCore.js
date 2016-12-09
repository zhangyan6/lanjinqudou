ETCore={
    log:function(str){
        var alertFallback = true;
        if (typeof console === "undefined" || typeof console.log === "undefined") {
            console = {};
            if (alertFallback) {
                console.log = function(str) {
                    alert(str);
                };
            } else {
                console.log = function() {};
            }
        }
        else {
            console.log(str);
        }
    },
    del:function(url){
       if (confirm("确认删除该记录吗?")){
           window.location.href=url;
       }
    },

    ban:function(url){
        if (confirm("确认修改该状态吗?")){
            window.location.href=url;
        }
    },

    confrim:function(url){
        if (confirm("确认修改该记录吗?")){

            window.location.href=url;
        }
    },
    redirect:function(url){
        window.location.href = url;
    }
}