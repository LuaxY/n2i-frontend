$(function() {
  var objects = ['#btnMenu1', '#btnMenu2', '#btnMenu3', '#btnMenu4', '#btnMenu5'];
  TweenMax.staggerTo(objects, 0.5, {width:"100%",opacity:"1", ease: Back.easeOut.config(1.7)}, 0.07);
});
