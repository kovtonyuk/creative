/*------------ HOVER Portfolio ------------*/
$(function(){
    $('.portfolio__wrapper .portfolio__item');

    $('.portfolio__item').mouseover(function(){
        $(this).children('.portfolio__description').fadeIn(500);
    });
    $('.portfolio__item').mouseleave(function(){
        $(this).children('.portfolio__description').fadeOut(500);
    });
});