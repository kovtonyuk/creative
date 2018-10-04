var lang = {
    "ui": "90%",
    "html": "95%",
    "javascript": "70%",
    "php": "50%",
    "web_design": "85%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

    var delay = 700;

    setTimeout(function() {
        $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);

    multiply++;

});