$(function() {
    var objects = "#btnMenu1, #btnMenu2, #btnMenu3, #btnMenu4, #btnMenu5";
    TweenMax.staggerTo(objects, 0.5, {width: "100%", ease: Back.easeOut.config(1.7)}, 0.07);

    //popUpLogin
    $('#btnMenu1').on('click', function () {
        $('#connect-form').fadeIn();
        TweenMax.to("#popUpLogin", 1, {ease: Elastic.easeOut.config(1.2, 0.3), css: {scaleX: 1.3, scaleY: 1.3}});
    });

    $('#coToIns').on('click', function () {
        TweenMax.to("#connexion", 1, {rotationY: '+=180'});
    });

    //Button 2
    $('#btnMenu2').on('click', function () {
        $('.content').fadeOut();
        $('.contentMap').fadeOut();
        $('.contentSeriousGame').fadeOut();
        $('.contentDon').fadeIn();
    });

    //button 3
    $('#btnMenu3').on('click', function () {
        $('.content').fadeOut();
        $('.contentSeriousGame').fadeOut();
        $('.contentDon').fadeOut();
        $('.contentMap').fadeIn();
    });

    //button 4
    $('#btnMenu4').on('click', function () {
        $('.content').fadeOut();
        $('.contentDon').fadeOut();
        $('.contentMap').fadeOut();
        $('.contentSeriousGame').fadeIn();
    });

});