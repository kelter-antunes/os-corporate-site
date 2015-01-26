$(function() {
    try {
        var userEmail = KM.i();
        if (IsEmail(userEmail)) {
            __insp.push(['tagSession', {
                email: "john@example.com"
            }]);
        }

    } catch (e) {

    }

});
