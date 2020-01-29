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
        //date and title alignment
        var yearFontSize = circleWidth * 0.56;
        $("#event #date h3").css("font-size", yearFontSize + "px");
        var yearPadding = (circleWidth - $("#event #text h3").height()) / 2;
        $("#event #date h3").css("padding-top", yearPadding + "px");
        var titleFontSize = yearFontSize * 1.3;
        $("#event #text h3").css("font-size", titleFontSize + "px"); 
        $(".trump-call").css("top", $(".zelensky-call").height());
        //timeline height
        $(".timeline-line").css("height", ($(".timeline").height() + 100) + "px")
    });
    
}

//makes speedometer responsive to the change of the width.
function speedometerFlexibility() {
    var gauge_width = 160;

    $(".gauge").css("width", gauge_width + "px");
    $(".gauge").css("height", (gauge_width / 2) + "px");

    $(".needle").css("width", (gauge_width * 0.39) + "px");
    $(".needle").css("height", (gauge_width * 0.035) + "px");
    $(".needle").css("border-bottom-right-radius", (gauge_width * 0.025) + "px");
    $(".needle").css("border-top-right-radius", (gauge_width * 0.035) + "px");
    $(".needle").css("bottom", (gauge_width * 0.02) + "px");
    $(".needle").css("left", (gauge_width * 0.1) + "px");
    $(".needle").css("box-shadow", "0 " + (gauge_width * 0.01) + "px " + (gauge_width * 0.01) + "px " + (gauge_width * 0.005) + "px rgba(0, 0, 0, 0.38)");
}

function identifySpeedometer(target) {
        console.log("anim-" + $("body").attr('class') + "-" + $(target).parents().attr("class"));
        var animation = "anim-" + $("body").attr('class') + "-" + $(target).parents().attr("class");
        $($(target).children().eq(1)).addClass(animation);
}


$("document").ready(function () {

    keepTimelineCentered();
    eventPosition();
    speedometerFlexibility();
    identifySpeedometer($(".gauge")[0]);
    identifySpeedometer($(".gauge")[1]);
    identifySpeedometer($(".gauge")[2]);
    

    $(window).resize(function () {
        keepTimelineCentered();
        eventPosition();
        speedometerFlexibility();
    });
});