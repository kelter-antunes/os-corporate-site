/*
*   marketo listener for current page context, context is now used to track events in kissmetrics
*   this piece of code sends the actual page to the form iframe, this context is added to an hidden attribute in the form
*   that will be stored in the lead details, this attribute will change uppon every form submition, but now it's only taken into consideration
*   in the first form submission, to inform KiSSmetrics where the signup occured.
*
*   this is the listener code, this js is injected in the iframe via Google Tag Manager
*
*/



//#####PARENT (page)
var receiver = document.getElementById('mkto_frame').contentWindow;



//#####CHILD (iframe)
// Here "addEventListener" is for standards-compliant web browsers and "attachEvent" is for IE Browsers.
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];

// Now...
// if 
//    "attachEvent", then we need to select "onmessage" as the event. 
// if 
//    "addEventListener", then we need to select "message" as the event

var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child IFrame window
eventer(messageEvent, function (e) {
       console.log(e.data);
       // Do whatever you want to do with the data got from IFrame in Parent form.
}, false);
