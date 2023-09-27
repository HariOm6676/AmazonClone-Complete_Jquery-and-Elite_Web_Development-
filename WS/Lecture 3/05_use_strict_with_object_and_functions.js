"use strict"
var y=25;
var x={
    prop1: 10,
    prop2: 20,
    prop3: 30
};
// delete y; -- This will give an error as we cannot delete a variable
 // Now let us create a function and try this out:
  function fn(arg1,arg2)
  {
    console.log("Hello");
  }
//   delete fn;  -- This also gives an error

// Let us try to figure out whether we can use duplicate arguments or not:
function fn(arg1,arg2)
{
  console.log("Hello");
}
// The answer is No