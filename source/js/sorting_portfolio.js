$('[data-id]').click(function(){
    var items = $('.portfolio__wrapper div');
    var id = $(this).attr('data-id');
    items.hide();
    $('.'+id).show();
});