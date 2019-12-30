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
        //baseline CSS (for flexibiliy)
        //for left
        $(".left").css("text-align", "right");
        $(".left #text p").css("padding-right", "20px");
        $(".left #text h3").css("padding-right", "20px");
        $(".left #date h3").css("padding-left", "20px");
        //for right
        $(".right").css("text-align", "left");
        $(".right #text p").css("padding-left", "20px");
        $(".right #text h3").css("padding-left", "20px");
        $(".right #date h3").css("padding-right", "20px");

        var circleWidth = $("#event #circle img").width();
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
        $("#event #media img").css("left", mediaPadding + "px"); //"left" acts as margin, but for absolute positioned element
        //same for videos
        $("#event #media video").css("width", imgWidth + "px");
        $("#event #media video").css("left", mediaPadding + "px");

        var yearFontSize = circleWidth - 14;
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