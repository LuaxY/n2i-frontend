$(function() {
  var objects = ['#btnMenu1', '#btnMenu2', '#btnMenu3', '#btnMenu4', '#btnMenu5'];
  TweenMax.staggerTo(objects, 0.5, {width:"100%",opacity:"1", ease: Back.easeOut.config(1.7)}, 0.07);

  //popUpLogin
  $('#btnMenu1').on('click', function(){
    //TweenMax.to(".test", 0.2, {ease: Power4.easeOut, opacity:"0.8"});
    $('.test').fadeIn();
    TweenMax.to(".test", 1 , {ease: Elastic.easeOut.config(1.2, 0.3), css:{scaleX:1, scaleY:1}});





    //$('#filtre').animate('display', 'block');
  });

  //Over
  $('#btnMenu1').mouseover(function(){
    TweenMax.to("#btnMenu1", 0.3, {ease: Power4.easeOut, width:"110%"});
  });

  $('#btnMenu1').mouseout(function(){
    TweenMax.to("#btnMenu1", 0.4, {ease: Power4.easeOut, width:"100%"});
  });

  //Over
  $('#btnMenu2').mouseover(function(){
    TweenMax.to("#btnMenu2", 0.3, {ease: Power4.easeOut, width:"110%"});
  });

  $('#btnMenu2').mouseout(function(){
    TweenMax.to("#btnMenu2", 0.4, {ease: Power4.easeOut, width:"100%"});
  });

  //Over
  $('#btnMenu3').mouseover(function(){
    TweenMax.to("#btnMenu3", 0.3, {ease: Power4.easeOut, width:"110%"});
  });

  $('#btnMenu3').mouseout(function(){
    TweenMax.to("#btnMenu3", 0.4, {ease: Power4.easeOut, width:"100%"});
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
