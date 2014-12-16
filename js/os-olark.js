var olarkOSDetails;
$(document).ready(function() {
	olark('api.visitor.getDetails', function(dets) {

		olarkOSDetails = dets;
	});


	function olarkProgress() {
		olark('api.visitor.getDetails', function(dets) {
			olarkOSDetails = dets;
		});

		if(olarkOSDetails !== undefined){
			var minutesInPage = Math.floor(olarkOSDetails.secondsSpentOnCurrentPage / 60);

			if (minutesInPage >= 1) {
				olark('api.chat.updateVisitorStatus', {
					snippet: 'Spent ' + minutesInPage + ' minute(s) in current page'
				});
			} else {
				olark('api.chat.updateVisitorStatus', {
					snippet: 'Spent less than a minute in current page'
				});
			}

		}
/*
		var isGoogleGA = (pathName.indexOf('/offer/ga/web-application-development/') !== -1);
		var isMADP = (pathName.indexOf('/platform/madp/') !== -1);
		var isPlatform = (pathName.indexOf('/platform/') !== -1);
		var isSolutions = (pathName.indexOf('/solutions/') !== -1);


		if ( isGoogleGA || isMADP || isPlatform || isSolutions ) {
			olark('api.chat.sendNotificationToOperator', {body: 'visitor landed on the billing page'});
		}

		*/


		window.setTimeout(olarkProgress, 1000);
	}
	olarkProgress();
});



/* PAGES TO TRACK
- http://www.outsystems.com/offer/ga/web-application-development/
- http://www.outsystems.com/platform/
- http://www.outsystems.com/platform/madp/
- http://www.outsystems.com/solutions/banking/
- http://www.outsystems.com/solutions/insurance/
- http://www.outsystems.com/solutions/healthcare/
- http://www.outsystems.com/solutions/pharmaceutical-and-biotech/
- http://www.outsystems.com/solutions/retail/
- http://www.outsystems.com/solutions/all-industries/
*/
