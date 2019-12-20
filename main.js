// JavaScript source code

// Sets width of timeline line
var lineWidth = $(".timeline-line").width();
var circleWidth = $(".circle svg").width();
var dateWidth = $(".date").width();

function keepTimelineCentered() {
    var lineMargin = ($(window).width() - lineWidth) / 2;
    $(".timeline-line").css("margin-right", lineMargin + "px");
    $(".timeline-line").css("margin-left", lineMargin + "px");
}

// aligns the event
function eventPosition() {
    var eventMargin = ($(window).width() / 2) - circleWidth / 2 - dateWidth - 20;
    //align to the side
    $(".event").css("margin-right", eventMargin + "px");

    $(".text").css("margin-right", (circleWidth + dateWidth + 40) + "px");

    $(".circle").css("right", dateWidth + 20 + "px");
}

$("document").ready(function () {

    keepTimelineCentered();
    eventPosition();

    $(window).resize(function () {
        keepTimelineCentered();
        eventPosition();
    });
});