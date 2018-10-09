var fActive = '';

function filterPortfolioItems(item){
    if(fActive != item){
        $('div').filter('.'+item).slideDown();
        $('div').filter(':not(.'+item+')').slideUp();
        fActive = item;
    }
}

$('.f-logo').click(function(){ filterPortfolioItems('logo'); });
$('.f-mobile_app').click(function(){ filterPortfolioItems('mobile_app'); });
$('.f-wordpress').click(function(){ filterPortfolioItems('wordpress'); });
$('.f-web_design').click(function(){ filterPortfolioItems('web_design'); });
$('.f-ui_ux').click(function(){ filterPortfolioItems('ui_ux'); });
$('.f-branding').click(function(){ filterPortfolioItems('branding'); });

$('.f-all').click(function(){
    $('div').slideDown();
    fActive = 'all';
});

