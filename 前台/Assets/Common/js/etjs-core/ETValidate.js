ETValidate={
    isMobile:function(mobile){
        var regu = /^1(3[0-9]|4[57]|5[0-35-9]|7[0-9]|8[0-9])\d{8}$/;
        var re = new RegExp(regu);

        if (re.test(mobile) && mobile != '') {
            return true;
        } else {
            return false;
        }
    },

    isPhoneNo:function(phoneNo){
        var regu = /^\(?0\d{2}\)?[- ]?\d{8}|0\d{2}[- ]?\d{8}|\d{8}$/;
        var re = new RegExp(regu);

        if (re.test(phoneNo) && phoneNo != '') {
            return true;
        } else {
            return false;
        }
    }
};