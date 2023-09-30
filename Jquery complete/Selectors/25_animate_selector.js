// $(selector).animate({properties}, duration, easing, complete);
$(document).ready(function(){
    $("#animateButton").click(function(){$("#animatedDiv").animate({
            width: "200px",
            opacity: 0.5
        }, 1000); // 1000 milliseconds (1 second) duration
    });
});