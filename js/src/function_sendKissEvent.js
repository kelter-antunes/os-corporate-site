function sendKissEvent(e) {
		parent.parent.postMessage('kissEvent',"*");
}

$(function() {
	sendKissEvent();
});