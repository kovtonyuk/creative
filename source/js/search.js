$(function() {
    $(".nav-menu > .nav-fostrap .search .s-b").on("click", function(e) {
        e.preventDefault();
        $("html").addClass("search-exp");
        $(".s-i").focus();
    });
    $(".s-i").blur(function() {
        // Do not hide input if contains text
        if ($(".s-i").val() === "") {
            $("html").removeClass("search-exp");
        }
    });
})