$(document).ready(function(){
    $('.form').hide();
    $('.btn-down').click(function(){
        $(this).toggleClass('opened').toggleClass('closed').next().slideToggle(600);
        if($(this).hasClass('opened')) {
            $(this).html('<i class="fa fa-angle-up"></i>');
        }
        else {
            $(this).html('<i class="fa fa-angle-down"></i>');
        }
    });
});