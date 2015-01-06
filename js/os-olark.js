var olarkOSDetails;

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


function olarkProgress() {
    olark('api.visitor.getDetails', function(dets) {
        olarkOSDetails = dets;
    });

    if (olarkOSDetails !== undefined) {
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

    window.setTimeout(olarkProgress, 1000);
}

$(document).ready(function() {

    try {
        olark('api.visitor.getDetails', function(dets) {

            olarkOSDetails = dets;
        });

        olarkProgress();

        var userEmail = KM.i();
        if (IsEmail(userEmail)) {
            olark('api.visitor.updateEmailAddress', {
                emailAddress: userEmail
            });
        }

    } catch (e) {

    }


});
