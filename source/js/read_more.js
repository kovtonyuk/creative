$(document).ready(function() {
    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "load more") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("Load less");
            $(".hidden").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("load more");
            $(".hidden").slideUp();
        }
    });
});