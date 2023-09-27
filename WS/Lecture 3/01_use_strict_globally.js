/* Script Mode : Use strict directive was introduced in ECMA version 5.
Purpose: The code should be executed in the strict mode.
1. Can be used at the begininig of the document.
 Example:
        "use strict"
         x=25; -------will cause an error.
         function myfn(){
         y=12; -----will cause an error.
         }
2. In strict mode , any assignment to
# a non writable property
# a get only property
# a non exsisting property
# a non existing variable
# a non existinf object
all these cases will throw error
*/
// Global usage of strict mode :
"use strict"
   x=25;
function myfun(){
   
   y=12;
}
// The code throws an error
