$(function() {
    var objects = "#btnMenu1, #btnMenu2, #btnMenu3, #btnMenu4, #btnMenu5";
    TweenMax.staggerTo(objects, 0.5, {width: "300px", ease: Back.easeOut.config(0.7)}, 0.07);

    //popUpLogin
    $('#btnMenu1').on('click', function() {
        $('#connect-form').fadeIn();
        TweenMax.to("#popUpLogin", 1, {ease: Elastic.easeOut.config(1.2, 0.3), css:{scaleX:1, scaleY:1}});
    });

    $(objects).hover(function () {
        TweenMax.to($(this), 0.2, {ease: Power4.easeOut, width: "300px"});
    }, function () {
        TweenMax.to($(this), 0.2, {ease: Power4.easeOut, width: "250px"});
    });
});
