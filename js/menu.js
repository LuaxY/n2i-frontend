var Menu = {
  test : false,
}
$(function() {

  $height = $(window).height();

  //Menu

  var objects = ['#btnMenu5', '#btnMenu1', '#btnMenu2', '#btnMenu3', '#btnMenu4', '#btnMenu6'];
  TweenMax.staggerTo(objects, 0.5, {width:"100%",opacity:"1", ease: Back.easeOut.config(1.7)}, 0.07);

  //Button 1
  //popUpLogin
  Menu.test = false;
  $('#btnMenu1').on('click', function(){
    //TweenMax.to(".Menu.test", 0.2, {ease: Power4.easeOut, opacity:"0.8"});
    $('.contentLogin').fadeIn();
    TweenMax.to(".contentLogin", 1 , {ease: Elastic.easeOut.config(1.2, 0.3), css:{scaleX:1, scaleY:1, opacity : 1}});
    Menu.test = true;
  });

  $('#filtre').on('click', function(){
    if(Menu.test == true){
        TweenMax.to(".contentLogin", 1 , {ease: Elastic.easeIn.config(1.2, 0.7), css:{scaleX:0.5, scaleY:0.5, opacity : 0}});
        Menu.test = false;
    }
  });

  $('#coToIns').on('click', function(){
    $('#popUpLogin1').fadeOut("400", function(){
        $('#popUpLogin2').fadeIn("500");
    });

  });

  $('#insToCo').on('click', function(){
    $('#popUpLogin2').fadeOut("400", function(){
        $('#popUpLogin1').fadeIn("500");
    });

  });

  //Over
  if($height >= 641){
    $('#btnMenu1').mouseover(function(){
      TweenMax.to("#btnMenu1", 0.3, {ease: Power4.easeOut, width:"110%"});
    });

    $('#btnMenu1').mouseout(function(){
      TweenMax.to("#btnMenu1", 0.4, {ease: Power4.easeOut, width:"100%"});
    });
  };

  //Over
  if($height >= 641){
    $('#btnMenu6').mouseover(function(){
      TweenMax.to("#btnMenu6", 0.3, {ease: Power4.easeOut, width:"110%"});
    });

    $('#btnMenu6').mouseout(function(){
      TweenMax.to("#btnMenu6", 0.4, {ease: Power4.easeOut, width:"100%"});
    });
  };


  //Button 2
  $('#btnMenu2').on('click', function(){
    $('.content').fadeOut();
    $('.contentMap').fadeOut();
    $('.contentSeriousGame').fadeOut();
    $('.contentBoiteIdee').fadeOut();
    $('.contentDon').fadeIn();
  });
  //Over
  if($height >= 641){
    $('#btnMenu2').mouseover(function(){
      TweenMax.to("#btnMenu2", 0.3, {ease: Power4.easeOut, width:"110%"});
    });

    $('#btnMenu2').mouseout(function(){
      TweenMax.to("#btnMenu2", 0.4, {ease: Power4.easeOut, width:"100%"});
    });
  };

  //Over
  if($height >= 641){
    $('#btnMenu3').mouseover(function(){
      TweenMax.to("#btnMenu3", 0.3, {ease: Power4.easeOut, width:"110%"});
    });

    $('#btnMenu3').mouseout(function(){
      TweenMax.to("#btnMenu3", 0.4, {ease: Power4.easeOut, width:"100%"});
    });
  };


  //button 4
  $('#btnMenu4').on('click', function(){
    $('.content').fadeOut();
    $('.contentDon').fadeOut();
    $('.contentMap').fadeOut();
    $('.contentBoiteIdee').fadeOut();
    $('.contentSeriousGame').fadeIn();
  });

  $('#btnMenu5').on('click', function(){
    $('.contentDon').fadeOut();
    $('.contentMap').fadeOut();
    $('.contentSeriousGame').fadeOut();
    $('.contentBoiteIdee').fadeOut();
    $('.content').fadeIn();
  });

  $('#btnMenu6').on('click', function(){
    $('.contentDon').fadeOut();
    $('.contentMap').fadeOut();
    $('.contentSeriousGame').fadeOut();
    $('.content').fadeIn();
    $('.contentBoiteIdee').fadeIn();
  });
  //Over
  if($height >= 641){
    $('#btnMenu4').mouseover(function(){
      TweenMax.to("#btnMenu4", 0.3, {ease: Power4.easeOut, width:"110%"});
    });

    $('#btnMenu4').mouseout(function(){
      TweenMax.to("#btnMenu4", 0.4, {ease: Power4.easeOut, width:"100%"});
    });
  };

  //Over
  if($height >= 641){
    $('#btnMenu5').mouseover(function(){
      TweenMax.to("#btnMenu5", 0.3, {ease: Power4.easeOut, width:"110%"});
    });

    $('#btnMenu5').mouseout(function(){
      TweenMax.to("#btnMenu5", 0.4, {ease: Power4.easeOut, width:"100%"});
    });
  };
});
