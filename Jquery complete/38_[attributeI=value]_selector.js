$(document).ready(function() {
    // Select all <a> elements with href ending in ".pdf"
    $("a[href|='doc']").css("color", "red");
});