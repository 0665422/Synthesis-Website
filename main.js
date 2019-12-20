// JavaScript source code

// Sets width of timeline line



function keepTimelineCentered() {
    var lineWidth = $(".timeline-line").width();
    var lineMargin = ($(window).width() - lineWidth) / 2;
    $(".timeline-line").css("margin-right", lineMargin + "px");
    $(".timeline-line").css("margin-left", lineMargin + "px");
}

// aligns the event
function eventPosition() {

    $('#event').each(function () {
        var circleWidth = $("#event #circle svg").width();
        var dateWidth = $("#event #date").width();
        var textWidth = $("#event #text").width();

        var eventWidth = $(window).width() - ($(window).width() / 2 - circleWidth / 2 - dateWidth);

        //media active variable width
        var mediaPadding = 20;
        var mediaWidth = eventWidth - dateWidth - circleWidth - textWidth;
        $("#event #media").css("width", mediaWidth + "px");
        //creates whitespace on sides
        var imgWidth = mediaWidth - 2 * mediaPadding;
        $("#event #media img").css("width", imgWidth + "px");

        var yearFontSize = circleWidth - 8;
        $("#event #date h3").css("font-size", yearFontSize + "px");
        var titleFontSize = yearFontSize + 8;
        $("#event #text h3").css("font-size", titleFontSize + "px");   
    });
    
}


    

$("document").ready(function () {

    keepTimelineCentered();
    eventPosition();

    $(window).resize(function () {
        keepTimelineCentered();
        eventPosition();
    });
});

