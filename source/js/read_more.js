/*----- Load more on Home and Portfolio pages -----*/
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

/*----- Load more on Blog page -----*/
$(document).ready(function() {
    $("#toggle_blog").click(function() {
        var elem = $("#toggle_blog").html();
        if (elem == '<i class="fas fa-angle-down"></i>') {
            //Stuff to do when btn is in the read more state
            $("#toggle_blog").html('<i class="fas fa-angle-up"></i>');
            $(".hidden").slideDown();
            $(".hidden").addClass("flex");
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle_blog").html('<i class="fas fa-angle-down"></i>');
            $(".hidden").slideUp();
        }
    });
});