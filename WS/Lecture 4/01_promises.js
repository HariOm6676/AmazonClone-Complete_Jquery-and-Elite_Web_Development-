/* Promises: It is a java script object that link producing cade and consuming code.*/
// Asynchronus: function running in parllel with other functions.
// Promises: A Promise is a JS onject that links producing and consuming code.
// Producing code is a code that take some time while the consuming code is that must wait for the result.
// async() and await() :
// Async makes a function written a promise and await() makes a function wait for the promise.
setTimeout(myfun,3000);
function myfun(){
    console.log("Hi");
}