/*----- Main menu -----*/
$('.menu li').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
});

/*----- Sort menu -----*/
$('.menu--sort li').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
});