// JavaScript source code

// Sets width of timeline line
var lineWidth = $(".timeline-line").width()

function keepTimelineCentered() {
    var lineMargin = ($(window).width() - lineWidth) / 2;
    $(".timeline-line").css("margin-right", lineMargin + "px");
    $(".timeline-line").css("margin-left", lineMargin + "px");
}

$("document").ready(function () {

    keepTimelineCentered();

    $(window).resize(function () {
        keepTimelineCentered();
    });
});