function sayHello(name){
    console.log("Hello: "+name);   // We connot use document.console.log, windows.console.log and etc because every object is not availiable outside the browser environment.
                                    // We can still use global.console.log
}
sayHello("Harry");
// console.log(window);  // This can also be not used

/*
Text:

*/