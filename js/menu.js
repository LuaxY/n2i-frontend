$(function() {
  //Menu
  var objects = ['#btnMenu1', '#btnMenu2', '#btnMenu3', '#btnMenu4', '#btnMenu5'];
  TweenMax.staggerTo(objects, 0.5, {width:"100%",opacity:"1", ease: Back.easeOut.config(1.7)}, 0.07);

  //Button 1
  //popUpLogin
  var test = false;
  $('#btnMenu1').on('click', function(){
    //TweenMax.to(".test", 0.2, {ease: Power4.easeOut, opacity:"0.8"});
    $('.contentLogin').fadeIn();
    TweenMax.to(".contentLogin", 1 , {ease: Elastic.easeOut.config(1.2, 0.3), css:{scaleX:1, scaleY:1}});
    test = true;
  });

  $('#filtre').on('click', function(){
    if(test == true){
        $('.contentLogin').fadeOut();
        test = false;
    }
  });

  $('#coToIns').on('click', function(){
    $('#popUpLogin1').fadeOut("400", function(){
        $('#popUpLogin2').fadeIn("500");
    });

  });

  //Over
  $('#btnMenu1').mouseover(function(){
    TweenMax.to("#btnMenu1", 0.3, {ease: Power4.easeOut, width:"110%"});
  });

  $('#btnMenu1').mouseout(function(){
    TweenMax.to("#btnMenu1", 0.4, {ease: Power4.easeOut, width:"100%"});
  });


  //Button 2
  $('#btnMenu2').on('click', function(){
    $('.content').fadeOut();
    $('.contentMap').fadeOut();
    $('.contentSeriousGame').fadeOut();
    $('.contentDon').fadeIn();
  });
  //Over
  $('#btnMenu2').mouseover(function(){
    TweenMax.to("#btnMenu2", 0.3, {ease: Power4.easeOut, width:"110%"});
  });

  $('#btnMenu2').mouseout(function(){
    TweenMax.to("#btnMenu2", 0.4, {ease: Power4.easeOut, width:"100%"});
  });

  //button 3
  $('#btnMenu3').on('click', function(){
    $('.content').fadeOut();
    $('.contentSeriousGame').fadeOut();
    $('.contentDon').fadeOut();
    $('.contentMap').fadeIn();
  });
  //Over
  $('#btnMenu3').mouseover(function(){
    TweenMax.to("#btnMenu3", 0.3, {ease: Power4.easeOut, width:"110%"});
  });

  $('#btnMenu3').mouseout(function(){
    TweenMax.to("#btnMenu3", 0.4, {ease: Power4.easeOut, width:"100%"});
  });

  //button 4
  $('#btnMenu4').on('click', function(){
    $('.content').fadeOut();
    $('.contentDon').fadeOut();
    $('.contentMap').fadeOut();
    $('.contentSeriousGame').fadeIn();
  });
  //Over
  $('#btnMenu4').mouseover(function(){
    TweenMax.to("#btnMenu4", 0.3, {ease: Power4.easeOut, width:"110%"});
  });

  $('#btnMenu4').mouseout(function(){
    TweenMax.to("#btnMenu4", 0.4, {ease: Power4.easeOut, width:"100%"});
  });

  //Over
  $('#btnMenu5').mouseover(function(){
    TweenMax.to("#btnMenu5", 0.3, {ease: Power4.easeOut, width:"110%"});
  });

  $('#btnMenu5').mouseout(function(){
    TweenMax.to("#btnMenu5", 0.4, {ease: Power4.easeOut, width:"100%"});
  });
});
