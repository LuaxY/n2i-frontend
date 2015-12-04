var Animation = {
    init : function(){
        $('.introButton').on('mouseover', function(){
            TweenMax.to($(this), 0.2, {'border-bottom-width' : '5px', ease:Back.easeInOut});
        });
        $('.introButton').on('mouseout', function(){
            TweenMax.to($(this), 0.2, {'border-bottom-width' : '3px', ease:Back.easeInOut});
        });
        $('.introButton').on('click', function(){
            TweenMax.to('.intro', 0.8, {css : {'scaleX' : '2','scaleY' : '2',  opacity : 0} , ease: Back.easeInOut.config(3)});
            TweenMax.to('.layout', 0.8,  {'opacity' : 0 , ease: Back.easeInOut.config(1)});
            TweenMax.to('.scene', 0.8, {css : {'scaleX' : '1','scaleY' : '1'} , ease: Power4.easeOut, delay : 0.5, onComplete : function(){
                TweenMax.to('.logo', 0.8, {top: 0 , ease: Bounce.easeOut});
                TweenMax.set('.intro', {height: 0});
                TweenMax.set('.layout', {height: 0});

            }});
        });
    }
}
