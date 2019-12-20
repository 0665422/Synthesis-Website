// JavaScript source code

// Sets width of timeline line
var lineWidth = $("#timeline-line").width();
var circleWidth = $("#circle svg").width();
var dateWidth = $("#date").width();
var textWidth = $("#text").width();
var eventWidth = $("#event").width();

function keepTimelineCentered() {
    var lineMargin = ($(window).width() - lineWidth) / 2;
    $("#timeline-line").css("margin-right", lineMargin + "px");
    $("#timeline-line").css("margin-left", lineMargin + "px");
}

// aligns the event
function eventPosition() {
    var eventMargin = ($(window).width() / 2) - circleWidth / 2 - dateWidth;
    //align to the side
    $("#event").css("margin-right", eventMargin + "px");

    //media active variable width
    var mediaWidth = $(window).width() - eventMargin - dateWidth - circleWidth - textWidth;
    $("#media img").css("width", mediaWidth + "px");

}

$("document").ready(function () {

    keepTimelineCentered();
    eventPosition();

    $(window).resize(function () {
        keepTimelineCentered();
        eventPosition();
    });
});