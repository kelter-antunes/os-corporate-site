/*
 * jQuery Panel Slider plugin v0.0.1
 * https://github.com/eduardomb/jquery-panelslider
 */
(function($) {
    'use strict';

    var $body = $('body'),
        _sliding = false;

    function _slideIn(panel, options) {
        var panelWidth = $(window).width(),
            bodyAnimation = {
                'overflow-x': 'hidden'
            },
            panelAnimation = {};

        if (panel.is(':visible') || _sliding) {
            return;
        }

        _sliding = true;
        panel.addClass('ps-active-panel').css({
            position: 'fixed',
            top: '50px',
            height: '100%',
            'overflow-y': 'auto',
            'z-index': 99
        });
        panel.data(options);

        switch (options.side) {
            case 'left':
                panel.css({
                    left: '-' + panelWidth + 'px',
                    right: 'auto'
                });
                /* bodyAnimation['margin-left'] = '+=' + panelWidth;*/
                panelAnimation.left = '+=' + panelWidth;
                break;

            case 'right':
                panel.css({
                    left: 'auto',
                    right: '-' + panelWidth + 'px'
                });
                /* bodyAnimation['margin-left'] = '-=' + panelWidth; */
                panelAnimation.right = '+=' + panelWidth;
                break;
        }

        $body.css({
            'overflow': 'hidden'
        });
        panel.show().animate({
            'right': '-' + panelWidth,
            leaveTransforms: true,
            useTranslate3d: true
        }, options.duration, 'jswing', function() {
            _sliding = false;
        });
    }

    $.panelslider = function(element, options) {
        var active = $('.ps-active-panel');
        var defaults = {
            side: 'left', // panel side: left or right
            duration: 1000, // Transition duration in miliseconds
            clickClose: true // If true closes panel when clicking outside it
        };

        options = $.extend({}, defaults, options);

        // If another panel is opened, close it before opening the new one
        if (active.is(':visible') && active[0] != element[0]) {
            $.panelslider.close(function() {
                _slideIn(element, options);
            });
        } else if (!active.length || active.is(':hidden')) {
            _slideIn(element, options);
        }
    };

    $.panelslider.close = function(callback) {
        var active = $('.ps-active-panel'),
            duration = active.data('duration'),
            panelWidth = $(window).width(),
            bodyAnimation = {
                'overflow-x': 'auto'
            },
            panelAnimation = {};

        if (!active.length || active.is(':hidden') || _sliding) {
            return;
        }

        _sliding = true;

        switch (active.data('side')) {
            case 'left':
                /*bodyAnimation['margin-left'] = '-=' + panelWidth;*/
                panelAnimation.left = '-=' + panelWidth;
                break;

            case 'right':
                /*bodyAnimation['margin-left'] = '+=' + panelWidth;*/
                panelAnimation.right = '-=' + panelWidth;
                break;
        }

        active.animate({
            'right': '-' + panelWidth,
            leaveTransforms: true,
            useTranslate3d: true
        }, duration, 'jswing');
        $body.animate(bodyAnimation, duration, function() {
            $body.css({
                'overflow': 'auto'
            });
            active.hide();
            active.removeClass('ps-active-panel');
            _sliding = false;
            $(window).trigger("panelClose");
        });
    };

    // Bind click outside panel and ESC key to close panel if clickClose is true
    $(document).bind('click keyup', function(e) {
        var active = $('.ps-active-panel');

        if (e.type == 'keyup' && e.keyCode != 27) {
            return;
        }

        if (active.is(':visible') && active.data('clickClose')) {
            $.panelslider.close();
        }
    });

    // Prevent click on panel to close it
    $(document).on('click', '.ps-active-panel', function(e) {
        e.stopPropagation();
    });

    $.fn.panelslider = function(options) {
        this.click(function(e) {
            var active = $('.ps-active-panel');
            var selector = this.getAttribute('href');
            var linkHref = selector;
            selector = selector.replace('!', '');
            var panel = $(selector);

            // Close panel if it is already opened otherwise open it
            if (active.is(':visible') && panel[0] == active[0]) {
                $.panelslider.close();
            } else {
                $.panelslider(panel, options);
            }


            e.preventDefault();
            e.stopPropagation();

            $(":animated").promise().done(function() {
                window.location.hash = linkHref;
            });

        });

        return this;
    };
})(jQuery);