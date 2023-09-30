$(document).ready(function(){
    var countChecked = function() {
        var n = $( "input:checked" ).length;
        $( "div" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
      };
      countChecked();
       
      $( "input[type=checkbox]" ).on( "click", countChecked );
})