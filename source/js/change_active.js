const loc = window.location.pathname

$('.navigation li a').each(function() {
    $(this).toggleClass('active', $(this).attr('href') == loc);
})