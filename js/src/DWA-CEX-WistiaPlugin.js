Wistia.plugin("dwa_cex", function(video, options) {
    var buckets, percentWatched, pushEvent, triggerPercent, _fn, _i, _len, _ref;
    if (options == null) {
        options = {};
    }
    buckets = [];
    percentWatched = function() {
        var bucket, watched, _i, _len;
        watched = 0;
        for (_i = 0, _len = buckets.length; _i < _len; _i++) {
            bucket = buckets[_i];
            if (bucket) {
                watched += 1;
            }
        }
        return watched / buckets.length;
    };
    video.ready(function() {
        var i, s, _i, _j, _ref, _ref1, _results;
        for (i = _i = 0, _ref = Math.floor(video.duration()); 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
            buckets.push(false);
        }
        buckets[0] = true;
        if (video.state() === 'playing') {
            _results = [];
            for (s = _j = 0, _ref1 = Math.floor(video.time()); 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; s = 0 <= _ref1 ? ++_j : --_j) {
                _results.push(buckets[s] = true);
            }
            return _results;
        }
    });
    video.bind("secondchange", function(s) {
        return buckets[s] = true;
    });




    pushEvent = function(action, name, id) {

        if (id == 'k25yv07jjj') {
            // #13 Conversion Name: OS MADP - Video - The “Yes” Platform from OutSystems.
            var ebRand = Math.random() + '';
            ebRand = ebRand * 1000000;
            //document.write('<scr' + 'ipt src="HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=677085&amp;rnd=' + ebRand + '"></scr' + 'ipt>');

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=677085&amp;rnd=" + ebRand; 
            document.body.appendChild(script);

        } else if (id == 'cylzp3c4b6') {
            // #9 Conversion Name: OS MADP - Video - Deploy Automatically
            var ebRand = Math.random() + '';
            ebRand = ebRand * 1000000;
            document.write('<scr' + 'ipt src="HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=677081&amp;rnd=' + ebRand + '"></scr' + 'ipt>');

        } else if (id == 'kyfexwxc7w') {
            // #8 Conversion Name: OS MADP - Video - Change Continuously
            var ebRand = Math.random() + '';
            ebRand = ebRand * 1000000;
            document.write('<scr' + 'ipt src="HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=677082&amp;rnd=' + ebRand + '"></scr' + 'ipt>');

        } else if (id == 'n4a6wudc6t') {
            // #11 Conversion Name: OS MADP - Video - Manage Centrally
            var ebRand = Math.random() + '';
            ebRand = ebRand * 1000000;
            document.write('<scr' + 'ipt src="HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=677083&amp;rnd=' + ebRand + '"></scr' + 'ipt>');

        } else if (id == '67sdl1xgu9') {
            // #10 Conversion Name: OS MADP - Video - Develop Visually
            var ebRand = Math.random() + '';
            ebRand = ebRand * 1000000;
            document.write('<scr' + 'ipt src="HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=677080&amp;rnd=' + ebRand + '"></scr' + 'ipt>');

        }

    };

    _ref = [.25, .5, .75, 1];
    _fn = function(triggerPercent) {
        return video.bind("secondchange", function(s) {
            var name = video.name();
            var percent;
            percent = percentWatched();
            if (buckets.length > 0 && percent >= triggerPercent) {
                //pushEvent("" + (Math.round(triggerPercent * 100)) + "percentwatched", name, video.hashedId());
                return this.unbind;
            }
        });
    };
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        triggerPercent = _ref[_i];
        _fn(triggerPercent);
    }
    video.bind("secondchange", function(s) {
        if (buckets.length > 0) {
            return video.trigger("percentwatched", percentWatched());
        } else {
            return video.trigger("percentwatched", 0);
        }
    });
    video.bind("play", function() {
        var name = video.name();
        var push = pushEvent("played", name, video.hashedId());
        return this.unbind;
    });

    return {
        buckets: buckets,
        percentWatched: percentWatched,
        pushEvent: pushEvent
    };
});
