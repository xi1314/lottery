jQuery(function ($) {
    $(document).ready(function () {
        var user = getUrlParam("user");
        $("p.user").html(user);
    });
});