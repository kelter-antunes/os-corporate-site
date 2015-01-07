/*
 *   marketo listener for current page context, context is now used to track events in kissmetrics
 *   this piece of code sends the actual page to the form iframe, this context is added to an hidden attribute in the form
 *   that will be stored in the lead details, this attribute will change uppon every form submition, but now it's only taken into consideration
 *   in the first form submission, to inform KiSSmetrics where the signup occured.
 *
 *   this is the listener code, this js is injected in the iframe via Google Tag Manager
 *
 */

//#####CHILD (iframe)
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child IFrame window
eventer(messageEvent, function(e) {

    parentData = JSON.parse(e.data);
    //console.log(parentData);

    if (parentData.origin === 'website') {
        $('input[name=' + parentData.input + ']').val(parentData.currPageContext);

    };



}, false);
