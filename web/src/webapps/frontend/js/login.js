
jQuery(function ($) {






});

$(document).ready(function () {
    var message = getUrlParam("message");
    alert("message" + message);
    $("#message").html(message);
});

window.onload = function(){
    var message = getUrlParam("message");
    alert("message" + message);
    $("#message").html(message);
}

function checkinput(f){
    var sfnum = f.sfnum.value;
    var sfname = f.sfname.value;
    if(sfnum ==  null || sfnum == ''||sfname == null || sfname == ''){
        $("#message").html("&nbsp&nbsp&nbsp工号或姓名不能为空");
        return false;   }
    return true;
}