/*------------ HOVER Portfolio ------------*/
$(function(){
    $('.slide .img_item');

    $('.img_item').mouseover(function(){
        $(this).children('.member__description').fadeIn(500);
    });
    $('.img_item').mouseleave(function(){
        $(this).children('.member__description').fadeOut(500);
    });
});