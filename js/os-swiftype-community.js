/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($, window, undefined) {
    "$:nomunge";
    var str_hashchange = "hashchange",
        doc = document,
        fake_onhashchange, special = $.event.special,
        doc_mode = doc.documentMode,
        supports_onhashchange = "on" + str_hashchange in window && (doc_mode === undefined || doc_mode > 7);

    function get_fragment(url) {
        url = url || location.href;
        return "#" + url.replace(/^[^#]*#?(.*)$/, "$1")
    }
    $.fn[str_hashchange] = function(fn) {
        return fn ? this.bind(str_hashchange, fn) : this.trigger(str_hashchange)
    };
    $.fn[str_hashchange].delay = 50;
    special[str_hashchange] = $.extend(special[str_hashchange], {
        setup: function() {
            if (supports_onhashchange) return false;
            $(fake_onhashchange.start)
        },
        teardown: function() {
            if (supports_onhashchange) return false;
            $(fake_onhashchange.stop)
        }
    });
    fake_onhashchange = function() {
        var self = {},
            timeout_id, last_hash = get_fragment(),
            fn_retval = function(val) {
                return val
            },
            history_set = fn_retval,
            history_get = fn_retval;
        self.start = function() {
            timeout_id || poll()
        };
        self.stop = function() {
            timeout_id && clearTimeout(timeout_id);
            timeout_id = undefined
        };

        function poll() {
            var hash = get_fragment(),
                history_hash =
                history_get(last_hash);
            if (hash !== last_hash) {
                history_set(last_hash = hash, history_hash);
                $(window).trigger(str_hashchange)
            } else if (history_hash !== last_hash) location.href = location.href.replace(/#.*/, "") + history_hash;
            timeout_id = setTimeout(poll, $.fn[str_hashchange].delay)
        }
        $.browser.msie && !supports_onhashchange && function() {
            var iframe, iframe_src;
            self.start = function() {
                if (!iframe) {
                    iframe_src = $.fn[str_hashchange].src;
                    iframe_src = iframe_src && iframe_src + get_fragment();
                    iframe = $('<iframe tabindex="-1" title="empty"/>').hide().one("load",
                        function() {
                            iframe_src || history_set(get_fragment());
                            poll()
                        }).attr("src", iframe_src || "javascript:0").insertAfter("body")[0].contentWindow;
                    doc.onpropertychange = function() {
                        try {
                            if (event.propertyName === "title") iframe.document.title = doc.title
                        } catch (e) {}
                    }
                }
            };
            self.stop = fn_retval;
            history_get = function() {
                return get_fragment(iframe.location.href)
            };
            history_set = function(hash, history_hash) {
                var iframe_doc = iframe.document,
                    domain = $.fn[str_hashchange].domain;
                if (hash !== history_hash) {
                    iframe_doc.title = doc.title;
                    iframe_doc.open();
                    domain && iframe_doc.write('<script>document.domain="' + domain + '"\x3c/script>');
                    iframe_doc.close();
                    iframe.location.hash = hash
                }
            }
        }();
        return self
    }()
})(jQuery, this);



! function(e) {
    function t(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    var n = function(e) {
        var t, n, i = {};
        if ("" === e) return {};
        for (t = 0; t < e.length; t += 1) n = e[t].split("="), 2 === n.length && (i[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")));
        return i
    };
    e.queryParams = function() {
        return n(window.location.search.substr(1).split("&"))
    }, e.hashParams = function() {
        return n(window.location.hash.substr(1).split("&"))
    }, window.Swiftype = window.Swiftype || {}, Swiftype.root_url = Swiftype.root_url || "https://api.swiftype.com", Swiftype.pingUrl = function(e, t) {
        var n = setTimeout(t, 350),
            i = new Image;
        return i.onload = i.onerror = function() {
            clearTimeout(n), t()
        }, i.src = e, !1
    }, Swiftype.pingSearchResultClick = function(t, n, i) {
        var a = {
                t: (new Date).getTime(),
                engine_key: t,
                doc_id: n,
                q: Swiftype.currentQuery
            },
            s = Swiftype.root_url + "/api/v1/public/analytics/pc?" + e.param(a);
        Swiftype.pingUrl(s, i)
    }, e.fn.swiftypeSearch = function(t) {
        var t = e.extend({}, e.fn.swiftypeSearch.defaults, t);
        return this.each(function() {
            var n = e(this),
                i = e.meta ? e.extend({}, t, n.data()) : t;
            n.data("swiftype-config-search", i), n.selectedCallback = function(t) {
                return function(n) {
                    var a = e(this);
                    n.preventDefault(), Swiftype.pingSearchResultClick(i.engineKey, t.id, function() {
                        window.location = a.attr("href")
                    })
                }
            }, n.registerResult = function(t, i) {
                t.data("swiftype-item", i), e("a", t).click(n.selectedCallback(i))
            }, n.getContentCache = function() {
                return e("#" + r)
            };
            var a = e(i.resultContainingElement),
                s = a.html(),
                r = "st-content-cache",
                o = n.getContentCache(),
                c = function(e, t) {
                    location.hash = "stq=" + encodeURIComponent(e) + "&stp=" + t
                },
                l = function(t, n) {
                    function c(e) {
                        if (void 0 !== e) {
                            var t = e;
                            return "function" == typeof t && (t = t.call()), t
                        }
                        return void 0
                    }
                    n = e.extend({
                        page: 1
                    }, n);
                    var l = {};
                    o.length || (a.after("<div id='" + r + "' style='display: none;'></div>"), o.html(s).hide()), i.loadingFunction(t, a), Swiftype.currentQuery = t, l.q = t, l.engine_key = i.engineKey, l.page = n.page, l.per_page = i.perPage, l.search_fields = c(i.searchFields), l.fetch_fields = c(i.fetchFields), l.facets = c(i.facets), l.filters = c(i.filters), l.document_types = c(i.documentTypes), l.functional_boosts = c(i.functionalBoosts), l.sort_field = c(i.sortField), l.sort_direction = c(i.sortDirection), l.spelling = c(i.spelling), e.getJSON(Swiftype.root_url + "/api/v1/public/engines/search.json?callback=?", l).success(d)
                };
            e(window).hashchange(function() {
                var t = e.hashParams(),
                    i = e.queryParams();
                if (t.stq || i.tag) l(t.stq, {
                    page: t.stp
                });
                else {
                    var s = n.getContentCache();
                    s.length && (a.html(s.html()), s.remove())
                }
            });
            var u = n.parents("form");
            u && u.bind("submit", function(e) {
                e.preventDefault();
                var t = n.val();
                c(t, 1)
            }), e(document).on("click", "[data-hash][data-page]", function(t) {
                t.preventDefault();
                var n = e(this);
                c(e.hashParams().stq, n.data("page"))
            }), e(document).on("click", "[data-hash][data-spelling-suggestion]", function(t) {
                t.preventDefault();
                var n = e(this);
                c(n.data("spelling-suggestion"), 1)
            });
            var d = function(e) {
                "function" == typeof i.preRenderFunction && i.preRenderFunction.call(n, e), i.renderResultsFunction(n.getContext(), e), "function" == typeof i.postRenderFunction && i.postRenderFunction.call(n, e)
            };
            n.getContext = function() {
                return {
                    config: i,
                    resultContainer: a,
                    registerResult: n.registerResult
                }
            }, e(window).hashchange()
        })
    };
    var i = function(t, n) {
            var i, a = -1,
                s = t.config;
            e.each(n, function(e, t) {
                t.num_pages > a && (i = e, a = t.num_pages)
            });
            var r = n[i].current_page,
                o = n[i].num_pages;
            e(s.renderPaginationForType(i, r, o)).appendTo(t.resultContainer)
        },
        a = function(t, n) {
            var a = t.resultContainer,
                s = t.config;
            a.html(""), e.each(n.records, function(n, i) {
                e.each(i, function(i, r) {
                    t.registerResult(e(s.renderFunction(n, r)).appendTo(a), r)
                })
            }), i(t, n.info)
        },
        s = function(e, n) {
            return '<div class="st-result"><h3 class="title"><a href="' + n.url + '" class="st-search-result-link">' + t(n.title) + "</a></h3></div>"
        },
        r = function(e, t) {
            t.html('<p class="st-loading-message">loading...</p>')
        },
        o = function(t) {
            var n = 0,
                i = this.getContext().resultContainer,
                a = null;
            t.info && e.each(t.info, function(e, t) {
                n += t.total_result_count, t.spelling_suggestion && (a = t.spelling_suggestion.text)
            }), 0 === n && i.html("<div id='st-no-results' class='st-no-results'><div class='row'><div class='span12 bold bot20'>Your search did not match any documents.</div><div class='span12'>Search tips:</div><div class='span12'>•&nbsp; Make sure all words are spelled correctly.</div><div class='span12'>•&nbsp; Make your search more general</div><div class='span12'>•&nbsp; Try different words that mean the same thing</div></div></div>"), null !== a && i.append('<div class="st-spelling-suggestion">Did you mean <a href="#" data-hash="true" data-spelling-suggestion="' + a + '">' + a + "</a>?</div>")
        },
        c = function(e, t, n) {
            var i, a, s = '<div class="st-page">';
            return 1 != t && (i = t - 1, s = s + '<a href="#" class="st-prev" data-hash="true" data-page="' + i + '">&laquo; previous</a>'), n > t && (a = t + 1, s = s + '<a href="#" class="st-next" data-hash="true" data-page="' + a + '">next &raquo;</a>'), s += "</div>"
        };
    e.fn.swiftypeSearch.defaults = {
        attachTo: void 0,
        documentTypes: void 0,
        facets: void 0,
        filters: void 0,
        engineKey: void 0,
        searchFields: void 0,
        functionalBoosts: void 0,
        sortField: void 0,
        sortDirection: void 0,
        fetchFields: void 0,
        preRenderFunction: void 0,
        postRenderFunction: o,
        loadingFunction: r,
        renderResultsFunction: a,
        renderFunction: s,
        renderPaginationForType: c,
        perPage: 10,
        spelling: "strict"
    }
}(jQuery);



(function($) {
    var queryParser = function(a) {
        var i, p, b = {};
        if (a === "") return {};
        for (i = 0; i < a.length; i += 1) {
            p = a[i].split("=");
            if (p.length === 2) b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "))
        }
        return b
    };
    $.queryParams = function() {
        return queryParser(window.location.search.substr(1).split("&"))
    };
    $.hashParams = function() {
        return queryParser(window.location.hash.substr(1).split("&"))
    };
    var ident = 0;
    window.Swiftype = window.Swiftype || {};
    Swiftype.root_url = Swiftype.root_url || "https://api.swiftype.com";
    Swiftype.pingUrl = function(endpoint,
        callback) {
        var to = setTimeout(callback, 350);
        var img = new Image;
        img.onload = img.onerror = function() {
            clearTimeout(to);
            callback()
        };
        img.src = endpoint;
        return false
    };
    Swiftype.pingAutoSelection = function(engineKey, docId, value, callback) {
        var params = {
            t: (new Date).getTime(),
            engine_key: engineKey,
            doc_id: docId,
            prefix: value
        };
        var url = Swiftype.root_url + "/api/v1/public/analytics/pas?" + $.param(params);
        Swiftype.pingUrl(url, callback)
    };
    Swiftype.findSelectedSection = function() {
        var sectionText = $.hashParams().sts;
        if (!sectionText) return;

        function normalizeText(str) {
            var out = str.replace(/\s+/g, "");
            out = out.toLowerCase();
            return out
        }
        sectionText = normalizeText(sectionText);
        $("h1, h2, h3, h4, h5, h6").each(function(idx) {
            $this = $(this);
            if (normalizeText($this.text()).indexOf(sectionText) >= 0) {
                this.scrollIntoView(true);
                return false
            }
        })
    };
    Swiftype.htmlEscape = Swiftype.htmlEscape || function htmlEscape(str) {
        return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    };
    $.fn.swiftype = function(options) {
        Swiftype.findSelectedSection();
        var options = $.extend({}, $.fn.swiftype.defaults, options);
        return this.each(function() {
            var $this = $(this);
            var config = $.meta ? $.extend({}, options, $this.data()) : options;
            $this.attr("autocomplete", "off");
            $this.data("swiftype-config-autocomplete", config);
            $this.submitted = false;
            $this.cache = new LRUCache(10);
            $this.emptyQueries = [];
            $this.isEmpty = function(query) {
                return $.inArray(normalize(query), this.emptyQueries) >= 0
            };
            $this.addEmpty = function(query) {
                $this.emptyQueries.unshift(normalize(query))
            };
            var styles = config.dropdownStylesFunction($this);
            var $swiftypeWidget = $('<div class="swiftype-widget" />');
            var $listContainer = $("<div />").addClass(config.suggestionListClass).appendTo($swiftypeWidget).css(styles).hide();
            $swiftypeWidget.appendTo(config.autocompleteContainingElement);
            var $list = $("<" + config.suggestionListType + " />").appendTo($listContainer);
            $this.data("swiftype-list", $list);
            $this.abortCurrent = function() {
                if ($this.currentRequest) $this.currentRequest.abort()
            };
            $this.showList = function() {
                if (handleFunctionParam(config.disableAutocomplete) ===
                    false) $listContainer.show()
            };
            $this.hideList = function(sync) {
                if (sync) $listContainer.hide();
                else setTimeout(function() {
                    $listContainer.hide()
                }, 10)
            };
            $this.focused = function() {
                return $this.is(":focus")
            };
            $this.submitting = function() {
                $this.submitted = true
            };
            $this.listResults = function() {
                return $(config.resultListSelector, $list)
            };
            $this.activeResult = function() {
                return $this.listResults().filter("." + config.activeItemClass).first()
            };
            $this.prevResult = function() {
                var list = $this.listResults(),
                    currentIdx = list.index($this.activeResult()),
                    nextIdx = currentIdx - 1,
                    next = list.eq(nextIdx);
                $this.listResults().removeClass(config.activeItemClass);
                if (nextIdx >= 0) next.addClass(config.activeItemClass)
            };
            $this.nextResult = function() {
                var list = $this.listResults(),
                    currentIdx = list.index($this.activeResult()),
                    nextIdx = currentIdx + 1,
                    next = list.eq(nextIdx);
                $this.listResults().removeClass(config.activeItemClass);
                if (nextIdx >= 0) next.addClass(config.activeItemClass)
            };
            $this.selectedCallback = function(data) {
                return function() {
                    var value = $this.val(),
                        callback = function() {
                            config.onComplete(data,
                                value)
                        };
                    Swiftype.pingAutoSelection(config.engineKey, data["id"], value, callback)
                }
            };
            $this.registerResult = function($element, data) {
                $element.data("swiftype-item", data);
                $element.click($this.selectedCallback(data)).mouseover(function() {
                    $this.listResults().removeClass(config.activeItemClass);
                    $element.addClass(config.activeItemClass)
                })
            };
            $this.getContext = function() {
                return {
                    config: config,
                    list: $list,
                    registerResult: $this.registerResult
                }
            };
            var typingDelayPointer;
            var suppressKey = false;
            $this.lastValue = "";
            $this.keyup(function(event) {
                if (suppressKey) {
                    suppressKey =
                        false;
                    return
                }
                if (event.which > 36 && event.which < 41 || event.which == 16) return;
                if (config.typingDelay > 0) {
                    clearTimeout(typingDelayPointer);
                    typingDelayPointer = setTimeout(function() {
                        processInput($this)
                    }, config.typingDelay)
                } else processInput($this)
            });
            $this.styleDropdown = function() {
                $listContainer.css(config.dropdownStylesFunction($this))
            };
            $(window).resize(function(event) {
                $this.styleDropdown()
            });
            $this.keydown(function(event) {
                $this.styleDropdown();
                var $active = $this.activeResult();
                switch (event.which) {
                    case 13:
                        if ($active.length !==
                            0 && $list.is(":visible")) {
                            event.preventDefault();
                            $this.selectedCallback($active.data("swiftype-item"))()
                        } else if ($this.currentRequest) $this.submitting();
                        $this.hideList();
                        suppressKey = true;
                        break;
                    case 38:
                        event.preventDefault();
                        if ($active.length === 0) $this.listResults().last().addClass(config.activeItemClass);
                        else $this.prevResult();
                        break;
                    case 40:
                        event.preventDefault();
                        if ($active.length === 0) $this.listResults().first().addClass(config.activeItemClass);
                        else if ($active != $this.listResults().last()) $this.nextResult();
                        break;
                    case 27:
                        $this.hideList();
                        suppressKey = true;
                        break;
                    default:
                        $this.submitted = false;
                        break
                }
            });
            $this.keypress(function(event) {
                if (event.which == 13 && $this.activeResult().length > 0) event.preventDefault()
            });
            var mouseDown = false;
            var blurWait = false;
            $(document).bind("mousedown.swiftype" + ++ident, function() {
                mouseDown = true
            });
            $(document).bind("mouseup.swiftype" + ident, function() {
                mouseDown = false;
                if (blurWait) {
                    blurWait = false;
                    $this.hideList()
                }
            });
            $this.blur(function() {
                if (mouseDown) blurWait = true;
                else $this.hideList()
            });
            $this.focus(function() {
                setTimeout(function() {
                    $this.select()
                }, 10);
                if ($this.listResults().filter(":not(." + config.noResultsClass + ")").length > 0) $this.showList()
            })
        })
    };
    var normalize = function(str) {
        return $.trim(str).toLowerCase()
    };
    var callRemote = function($this, term) {
        $this.abortCurrent();
        var params = {},
            config = $this.data("swiftype-config-autocomplete");
        params["q"] = term;
        params["engine_key"] = config.engineKey;
        params["search_fields"] = handleFunctionParam(config.searchFields);
        params["fetch_fields"] = handleFunctionParam(config.fetchFields);
        params["filters"] = handleFunctionParam(config.filters);
        params["document_types"] = handleFunctionParam(config.documentTypes);
        params["functional_boosts"] = handleFunctionParam(config.functionalBoosts);
        params["sort_field"] = handleFunctionParam(config.sortField);
        params["sort_direction"] = handleFunctionParam(config.sortDirection);
        params["per_page"] = config.resultLimit;
        var endpoint = Swiftype.root_url + "/api/v1/public/engines/suggest.json";
        $this.currentRequest = $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: endpoint,
            data: params
        }).success(function(data) {
            var norm =
                normalize(term);
            if (data.record_count > 0) $this.cache.put(norm, data.records);
            else {
                $this.addEmpty(norm);
                $this.data("swiftype-list").empty();
                $this.hideList();
                return
            }
            processData($this, data.records, term)
        })
    };
    var getResults = function($this, term) {
        var norm = normalize(term);
        if ($this.isEmpty(norm)) {
            $this.data("swiftype-list").empty();
            $this.hideList();
            return
        }
        var cached = $this.cache.get(norm);
        if (cached) processData($this, cached, term);
        else callRemote($this, term)
    };
    var processInput = function($this) {
        var term = $this.val();
        if (term === $this.lastValue) return;
        $this.lastValue = term;
        if ($.trim(term) === "") {
            $this.data("swiftype-list").empty();
            $this.hideList();
            return
        }
        if (typeof $this.data("swiftype-config-autocomplete").engineKey !== "undefined") getResults($this, term)
    };
    var processData = function($this, data, term) {
        var $list = $this.data("swiftype-list"),
            config = $this.data("swiftype-config-autocomplete");
        $list.empty();
        $this.hideList(true);
        config.resultRenderFunction($this.getContext(), data);
        var totalItems = $this.listResults().length;
        if (totalItems >
            0 && $this.focused() || config.noResultsMessage !== undefined)
            if ($this.submitted) $this.submitted = false;
            else $this.showList()
    };
    var defaultResultRenderFunction = function(ctx, results) {
        var $list = ctx.list,
            config = ctx.config;
        $.each(results, function(document_type, items) {
            $.each(items, function(idx, item) {
                ctx.registerResult($("<li>" + config.renderFunction(document_type, item) + "</li>").appendTo($list), item)
            })
        })
    };
    var defaultRenderFunction = function(document_type, item) {
        return '<p class="title">' + Swiftype.htmlEscape(item["title"]) +
            "</p>"
    };
    var defaultOnComplete = function(item, prefix) {
        window.location = item["url"]
    };
    var defaultDropdownStylesFunction = function($this) {
        var config = $this.data("swiftype-config-autocomplete");
        var $attachEl = config.attachTo ? $(config.attachTo) : $this;
        var offset = $attachEl.offset();
        var styles = {
            "position": "absolute",
            "z-index": 9999,
            "top": offset.top + $attachEl.outerHeight() + 1,
            "left": offset.left
        };
        if (config.setWidth) styles["width"] = $attachEl.outerWidth() - 2;
        return styles
    };
    var handleFunctionParam = function(field) {
        if (field !==
            undefined) {
            var evald = field;
            if (typeof evald === "function") evald = evald.call();
            return evald
        }
        return undefined
    };

    function LRUCache(limit) {
        this.size = 0;
        this.limit = limit;
        this._keymap = {}
    }
    LRUCache.prototype.put = function(key, value) {
        var entry = {
            key: key,
            value: value
        };
        this._keymap[key] = entry;
        if (this.tail) {
            this.tail.newer = entry;
            entry.older = this.tail
        } else this.head = entry;
        this.tail = entry;
        if (this.size === this.limit) return this.shift();
        else this.size++
    };
    LRUCache.prototype.shift = function() {
        var entry = this.head;
        if (entry) {
            if (this.head.newer) {
                this.head =
                    this.head.newer;
                this.head.older = undefined
            } else this.head = undefined;
            entry.newer = entry.older = undefined;
            delete this._keymap[entry.key]
        }
        return entry
    };
    LRUCache.prototype.get = function(key, returnEntry) {
        var entry = this._keymap[key];
        if (entry === undefined) return;
        if (entry === this.tail) return entry.value;
        if (entry.newer) {
            if (entry === this.head) this.head = entry.newer;
            entry.newer.older = entry.older
        }
        if (entry.older) entry.older.newer = entry.newer;
        entry.newer = undefined;
        entry.older = this.tail;
        if (this.tail) this.tail.newer = entry;
        this.tail = entry;
        return returnEntry ? entry : entry.value
    };
    LRUCache.prototype.remove = function(key) {
        var entry = this._keymap[key];
        if (!entry) return;
        delete this._keymap[entry.key];
        if (entry.newer && entry.older) {
            entry.older.newer = entry.newer;
            entry.newer.older = entry.older
        } else if (entry.newer) {
            entry.newer.older = undefined;
            this.head = entry.newer
        } else if (entry.older) {
            entry.older.newer = undefined;
            this.tail = entry.older
        } else this.head = this.tail = undefined;
        this.size--;
        return entry.value
    };
    LRUCache.prototype.clear = function() {
        this.head =
            this.tail = undefined;
        this.size = 0;
        this._keymap = {}
    };
    if (typeof Object.keys === "function") LRUCache.prototype.keys = function() {
        return Object.keys(this._keymap)
    };
    else LRUCache.prototype.keys = function() {
        var keys = [];
        for (var k in this._keymap) keys.push(k);
        return keys
    };
    $.fn.swiftype.defaults = {
        activeItemClass: "active",
        attachTo: undefined,
        documentTypes: undefined,
        filters: undefined,
        engineKey: undefined,
        searchFields: undefined,
        functionalBoosts: undefined,
        sortField: undefined,
        sortDirection: undefined,
        fetchFields: undefined,
        noResultsClass: "noResults",
        noResultsMessage: undefined,
        onComplete: defaultOnComplete,
        resultRenderFunction: defaultResultRenderFunction,
        renderFunction: defaultRenderFunction,
        dropdownStylesFunction: defaultDropdownStylesFunction,
        resultLimit: undefined,
        suggestionListType: "ul",
        suggestionListClass: "autocomplete",
        resultListSelector: "li",
        setWidth: true,
        typingDelay: 80,
        disableAutocomplete: false,
        autocompleteContainingElement: "body"
    }
})(jQuery);




function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function htmlEscape(str) {
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var customRendererSearch = function(documentType, item) {
    var snippet = item.highlight['body'];
    if (snippet === undefined) {
        snippet = item['body'].substring(0, 300);
    }
    var out = '<div class="st-result"><h4 class="title"><a href="' + item['url'] + '" class="st-search-result-link">' + item['title'] + '</a></h4><div class="st-metadata"><span class="st-url">' + item['url'] + '</span><span class="st-snippet">' + snippet + '</span></div></div>';

    return out;
};

var customRenderAutoComplete = function(document_type, item) {
    var out = '<p class="title">' + item['title'] + '</p>';
    if (item.highlight.sections) {
        var i = '<span class="section">' + item.highlight.sections + "</span>";
        out = out.concat('<p class="sections">' + i + "</p>");
    }

    return out;
};

var reloadResults = function() {
    $(window).hashchange();
};

var searchConfig = {
    type: undefined,
    tags: undefined
};

var readFilters = function() {
    if (getParameterByName('tag') !== '') {
        return {
            page: {
                type: window.searchConfig.type,
                tags: getParameterByName('tag')
            }
        };
    } else {
        return {
            page: {
                type: window.searchConfig.type
            }
        };

    }
};


/** st init **/
$(function() {

    if($.queryParams().active !== undefined){

            var activeFilter = $.queryParams().active;
            var $this = $("[data-filter-type='" + activeFilter+"']");
            
            $(".st-search .link-tab").removeClass("active");
            $this.addClass("active");
            window.searchConfig.type = activeFilter;
            reloadResults();
    }
    
    $('.st-search .link-tab').on('click', function(e) {
        e.preventDefault();

        var dataType = $(this).attr('data-filter-type');

        $('.st-search .link-tab').removeClass('active');
        $(this).addClass('active');

        if (dataType !== 'all') {
            window.searchConfig.type = dataType;
        } else {
            window.searchConfig.type = undefined;
        };
        reloadResults();
    });

    $(".st-search-input").keydown(function(ev) {
        if (ev.which === 13 && !$('.autocomplete li.active').is(':visible')) {
            window.location = '/search/#stq=' + $(this).val() + '&stp=1';
            $(".st-search-input-big").val($(this).val());
        };
    });

    $(".st-search-input-big").keydown(function(ev) {
        if (ev.which === 13 && !$('.autocomplete li.active').is(':visible')) {
            if ($(this).val().indexOf('tag:') === -1) {
                ev.preventDefault();
                if ($.queryParams.tag !== undefined) {
                    window.location = '/search/#stq=' + $(this).val() + '&stp=1';
                } else {
                    window.location.hash = '#stq=' + $(this).val() + '&stp=1';
                    $(".st-search-input").val($(this).val());
                    $('.searchQueryHolder').html(htmlEscape($.hashParams().stq));
                };
            };

        };
    });

    if ($.hashParams().stq !== "") {
        $(".st-search-input").val($.hashParams().stq);
        $(".st-search-input-big").val($.hashParams().stq);
    };

    $('.st-search-input').swiftypeSearch({
        resultContainingElement: '.st-results-container',
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        renderFunction: customRendererSearch,
        perPage: 10,
        resultPageURL: '/community/st_search.aspx',
        filters: readFilters
    });


});
