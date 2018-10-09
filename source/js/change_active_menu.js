/*----- Main menu -----*/
$('.menu li').click(function() {
    $('.menu .active').removeClass('active');
    $(this).addClass('active');
});

/*----- Sort menu -----*/
$('.menu--sort li').click(function() {
    $('.menu--sort .active').removeClass('active');
    $(this).addClass('active');
});