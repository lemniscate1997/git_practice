$(() => {
    $(window).scroll(function (scroll) {
        if($(window).scrollTop() != 0) {
            $('.my-nav').css({
                "box-shadow": "0 0 12px 0 #888888"
            });
            $('.my-btn').css({
                "color": "#FFF",
                "background-color": "#0052CC"
            });
            $('.nav-slogan').hide();
        } else {
            $('.my-nav').css({
                "box-shadow": ""
            });
            $('.my-btn').css({
                "background-color": "#FFF",
                "color": "#0052CC"
            });
            $('.nav-slogan').show();
        }
    });
})