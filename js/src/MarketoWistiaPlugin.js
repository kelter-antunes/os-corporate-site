Wistia.plugin("marketo", function(video, options) {
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
    if (window.Munchkin != null) {
      if (action == "Conversion") {
        // associateLead
      }
      return Munchkin.munchkinFunction('visitWebPage', {
        url: '/video_tracked/' + action, params: 'path=' + document.location.pathname + '&videoAction=' + action + '&videoName=' + name + '&videoId=' + id
      });
    } else {
      if (typeof console !== "undefined" && console !== null) {
        console.log("Could not send data to marketo because Munchkin is defined.");
      }
    }
  };
  _ref = [.25, .5, .75, 1];
  _fn = function(triggerPercent) {
    return video.bind("secondchange", function(s) {
      var name = video.name();
      var percent;
      percent = percentWatched();
      if (buckets.length > 0 && percent >= triggerPercent) {
        pushEvent("" + (Math.round(triggerPercent * 100)) + "percentwatched", name, video.hashedId());
        video.trigger("pushedtomarketo", "percentwatched", triggerPercent);
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
    var vid = video.trigger("pushedtomarketo", "play");
    return this.unbind;
  });
  video.bind("conversion", function() {
    var name = video.name();
    pushEvent("Conversion (" + name + ")", name, video.hashedId());
    video.trigger("pushedtomarketo", "conversion");
    return this.unbind;
  });
  return {
    buckets: buckets,
    percentWatched: percentWatched,
    pushEvent: pushEvent
  };
});