let myPromise = new Promise(function(myResolve, myReject)
{
    //"Producing Code" (May take some time)
    myResolve();
    myReject();
}
);
// "Consuming code" (Must wait for a fullfilled Promise)
myPromise.then(
    function(value){
        /*Code if Successful */
    },
    function(error){
        /*Code if some error*/
    }
);