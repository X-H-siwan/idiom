; /* OTmpa.js */
var more_timer;

function clearTimer() {
    if (more_timer) {
        clearTimeout(more_timer);
        more_timer = null;
    }
}

function showMoreLogin() {
    clearTimer();
    var target = document.getElementById("more_login");
    var parent = document.getElementById("more");
    target.style.display = "block";
    target.style.top = (parent.offsetTop + 34) + "px";
    target.style.left = (parent.offsetLeft - 80) + "px";
}

function hideMoreLogin() {
    if (more_timer == null) {
        clearTimeout(more_timer);
        more_timer = setTimeout(function() {
            document.getElementById("more_login").style.display = "none";
            more_timer = null;
        }, 500);
    }
}

function moreOver() { clearTimer(); }

function moreOut() { hideMoreLogin(); }; /* 14gNQd.js */
$.fn.extend({
    guess: function() {
        var self = this;
        self.find('.caicy_input').click(function() {
            if ($('#caicy_select_div', self).css('display') === 'none') { return; }
            var pre_select_index = $(this).data('select_index');
            if (pre_select_index !== '') {
                $('#caicy_select_' + pre_select_index, self).removeClass('selected');
                $('#caicy_select_' + pre_select_index, self).html($(this).html());
                $(this).data('select_index', '');
                $(this).html('');
            }
            checkAnswer();
        });
        $('#caicy_daan', self).click(function() {
            var the_answer = $('#the_answer', self).val();
            var i = 0;
            $('.caicy_input', self).each(function() {
                $(this).html(the_answer[i]);
                i++;
            });
            $('.caicy_input', self).removeClass('error');
            $('.caicy_input', self).addClass('right');
            $('.caicy_status', self).removeClass('status_cha');
            $('.caicy_status', self).addClass('status_gou');
            $('#caicy_select_div', self).hide();
            $('#caicy_right_div', self).show();
        });
        $('#caicy_reset', self).click(function() {
            var i = 0,
                pre_select_index;
            $('.caicy_input', self).each(function() {
                pre_select_index = $('#caicy_input_' + i, self).data('select_index');
                if (pre_select_index !== '') {
                    $('#caicy_select_' + pre_select_index, self).removeClass('selected');
                    $('#caicy_select_' + pre_select_index, self).html($('#caicy_input_' + i, self).html());
                }
                $(this).data('select_index', '');
                $(this).html('');
                i++;
            });
            $('.caicy_input', self).removeClass('error');
            $('.caicy_status', self).removeClass('status_cha');
        });
        $('#caicy_tishi', self).click(function() { $('#tishi', self).show(); });
        $('#caicy_hint', self).click(function() {
            var count = $(this).data('count');
            if (count >= 2) {
                $.popup.show({ message: '你的提示已经用光了', timeout: 2000, type: "error" });
            } else {
                var the_answer = $('#the_answer', self).val();
                var i = 0,
                    index;
                $('.caicy_input', self).each(function() {
                    if ($(this).html() !== the_answer[i]) { index = i; return; }
                    i++;
                });
                //if(i>3){return;}
                var pre_select_index = $('#caicy_input_' + index, self).data('select_index');
                if (pre_select_index !== '') {
                    $('#caicy_select_' + pre_select_index, self).removeClass('selected');
                    $('#caicy_select_' + pre_select_index, self).html($('#caicy_input_' + index, self).html());
                }
                var hint = the_answer[index];
                var is_hinted = false;
                $('.caicy_select', self).each(function() {
                    if (is_hinted === true) { return; }
                    if (hint === $(this).html()) {
                        $('#caicy_input_' + index, self).html(hint);
                        $('#caicy_input_' + index, self).data('select_index', $(this).data('index'));
                        $(this).addClass('selected');
                        $(this).html('');
                        is_hinted = true;
                        return;
                    }
                });
                $('.caicy_input', self).each(function() {
                    if (is_hinted === true) { return; }
                    if (hint === $(this).html()) {
                        $('#caicy_input_' + index, self).html(hint);
                        $('#caicy_input_' + index, self).data('select_index', $(this).data('select_index'));
                        $(this).data('select_index', '');
                        $(this).html('');
                        is_hinted = true;
                        return;
                    }
                });
                if (is_hinted) { $(this).data('count', parseInt(count) + 1); }
                checkAnswer();
            }
        });
        self.find('.caicy_select').click(function() {
            if ($(this).hasClass('selected')) { return; }
            var j = 0,
                index, is_empty = false;
            $('.caicy_input', self).each(function() {
                if (is_empty === true) { return; }
                if ($(this).html() === '') {
                    index = j;
                    is_empty = true;
                    return;
                }
                j++;
            });
            //if(j>3){return;}
            $('#caicy_input_' + index, self).data('select_index', $(this).data('index'));
            $('#caicy_input_' + index, self).html($(this).html());
            $(this).addClass('selected');
            $(this).html('');
            checkAnswer();
        });

        function checkAnswer() {
            var is_finished = true;
            $('.caicy_input', self).each(function() { if ($(this).html() === '') { is_finished = false; } });
            if (is_finished) {
                var the_answer = $('#the_answer', self).val();
                var i = 0,
                    is_right = true;
                $('.caicy_input', self).each(function() {
                    if ($(this).html() !== the_answer[i]) {
                        $(this).addClass('error');
                        is_right = false;
                    } else {
                        $(this).removeClass('error');
                    }
                    i++;
                });
                if (is_right === true) {
                    $('.caicy_input', self).removeClass('error');
                    $('.caicy_input', self).addClass('right');
                    $('.caicy_status', self).removeClass('status_cha');
                    $('.caicy_status', self).addClass('status_gou');
                    //$('#caicy_act_div',self).hide();
                    $('#caicy_select_div', self).hide();
                    $('#caicy_right_div', self).show();
                } else {
                    $('.caicy_status', self).removeClass('status_gou');
                    $('.caicy_status', self).addClass('status_cha');
                }
            } else {
                $('.caicy_input', self).removeClass('error');
            }
        }
        //$('#see_more_btn',self).click(function(){
        //	$('#caicy_see_more',self).show();
        //	window.location.href="#see_more";
        //});
    }
});; /* XnqlF.js */
jQuery.setTimeout = function(expression, timeout) {
    if (typeof expression == "function") { var $this = arguments[2]; var $arguments = Array.prototype.slice.call(arguments, 3); var $expression = function() { expression.apply($this, $arguments); }; return window.setTimeout($expression, timeout); } else
        return window.setTimeout(expression, timeout);
};
(function($) {
    $.popup = {
        defaults: { message: "", type: "information", timeout: -1, effect: "slide", template: null },
        show: function(options) {
            if ($.popup.timeout != null) {
                window.clearTimeout($.popup.timeout);
                $.popup.timeout = null;
            }
            if (typeof options == "string")
                options = { message: options };
            var settings = $.extend({}, $.popup.defaults, options);
            if (settings.template == null) {
                var popup = "<table class='popup'><tr>";
                popup += "<td class='popup-inner'>" + settings.message + "</td></tr></table>";
                $(".popup").remove();
                $("body").append(popup);
                settings.template = ".popup";
            } else if (settings.message != "")
                $(settings.template + " .popup-inner").html(settings.message);
            var left = ($(window).width() - $(settings.template).width()) / 2;
            var top = ($(window).height() - $(settings.template).height()) / 2 - 60;
            if (left < 0)
                left = 0;
            if (top < 10)
                top = 10;
            $(settings.template).css({ "left": left, "top": top, "opacity": 1.0, "display": "none" });
            $(settings.template).fadeIn("fast");
            if (settings.timeout > 0)
                $.popup.timeout = $.setTimeout($.popup.hide, settings.timeout, window, { effect: settings.effect, template: settings.template });
        },
        hide: function(options) {
            var settings = $.extend({}, $.popup.defaults, options);
            if (settings.template == null)
                settings.template = ".popup";
            if (settings.effect == "fade")
                $(settings.template).fadeOut("slow", function() { $(this).hide(); });
            else
                $(settings.template).animate({ "left": 0, "opacity": 0.0 }, "slow", "swing", function() { $(this).hide(); });
        },
        timeout: null
    }
})(jQuery);; /* YaX8c.js */
(function($) {
    $.fn.isSquare = function() {
        return $(this).each(function() {
            $.extend($.easing, { easeOutSine: function(x, t, b, c, d) { return c * Math.sin(t / d * (Math.PI / 2)) + b; } });
            $(this).slides({ pause: 250000000000, play: 5000, slideSpeed: 750, hoverPause: true, paginationClass: 'slides_pagination', slideEasing: 'easeOutSine' });
        });
    };
})(jQuery);

; /* cHGel.js */
(function(a) {
    a.fn.slides = function(b) {
        return b = a.extend({}, a.fn.slides.option, b), this.each(function() {
            function w(g, h, i) {
                if (!p && o) {
                    p = !0, b.animationStart(n + 1);
                    switch (g) {
                        case "next":
                            l = n, k = n + 1, k = e === k ? 0 : k, r = f * 2, g = -f * 2, n = k;
                            break;
                        case "prev":
                            l = n, k = n - 1, k = k === -1 ? e - 1 : k, r = 0, g = 0, n = k;
                            break;
                        case "pagination":
                            k = parseInt(i, 10), l = a("." + b.paginationClass + " li." + b.currentClass + " a", c).attr("href").match("[^#/]+$"), k > l ? (r = f * 2, g = -f * 2) : (r = 0, g = 0), n = k
                    }
                    h === "fade" ? b.crossfade ? d.children(":eq(" + k + ")", c).css({ zIndex: 10 }).fadeIn(b.fadeSpeed, b.fadeEasing, function() { b.autoHeight ? d.animate({ height: d.children(":eq(" + k + ")", c).outerHeight() }, b.autoHeightSpeed, function() { d.children(":eq(" + l + ")", c).css({ display: "none", zIndex: 0 }), d.children(":eq(" + k + ")", c).css({ zIndex: 0 }), b.animationComplete(k + 1), p = !1 }) : (d.children(":eq(" + l + ")", c).css({ display: "none", zIndex: 0 }), d.children(":eq(" + k + ")", c).css({ zIndex: 0 }), b.animationComplete(k + 1), p = !1) }) : d.children(":eq(" + l + ")", c).fadeOut(b.fadeSpeed, b.fadeEasing, function() { b.autoHeight ? d.animate({ height: d.children(":eq(" + k + ")", c).outerHeight() }, b.autoHeightSpeed, function() { d.children(":eq(" + k + ")", c).fadeIn(b.fadeSpeed, b.fadeEasing) }) : d.children(":eq(" + k + ")", c).fadeIn(b.fadeSpeed, b.fadeEasing, function() { a.browser.msie && a(this).get(0).style.removeAttribute("filter") }), b.animationComplete(k + 1), p = !1 }) : (d.children(":eq(" + k + ")").css({ left: r, display: "block" }), b.autoHeight ? d.animate({ left: g, height: d.children(":eq(" + k + ")").outerHeight() }, b.slideSpeed, b.slideEasing, function() { d.css({ left: -f }), d.children(":eq(" + k + ")").css({ left: f, zIndex: 5 }), d.children(":eq(" + l + ")").css({ left: f, display: "none", zIndex: 0 }), b.animationComplete(k + 1), p = !1 }) : d.animate({ left: g }, b.slideSpeed, b.slideEasing, function() { d.css({ left: -f }), d.children(":eq(" + k + ")").css({ left: f, zIndex: 5 }), d.children(":eq(" + l + ")").css({ left: f, display: "none", zIndex: 0 }), b.animationComplete(k + 1), p = !1 })), b.pagination && (a("." + b.paginationClass + " li." + b.currentClass, c).removeClass(b.currentClass), a("." + b.paginationClass + " li:eq(" + k + ")", c).addClass(b.currentClass))
                }
            }

            function x() { clearInterval(c.data("interval")) }

            function y() { b.pause ? (clearTimeout(c.data("pause")), clearInterval(c.data("interval")), u = setTimeout(function() { clearTimeout(c.data("pause")), v = setInterval(function() { w("next", i) }, b.play), c.data("interval", v) }, b.pause), c.data("pause", u)) : x() }
            a("." + b.container, a(this)).children().wrapAll('<div class="slides_control"/>');
            var c = a(this),
                d = a(".slides_control", c),
                d2 = a(".course_img_wrap", c),
                e = d.children().size(),
                f = d.children().outerWidth(),
                g = d.children().outerHeight(),
                h = b.start - 1,
                i = b.effect.indexOf(",") < 0 ? b.effect : b.effect.replace(" ", "").split(",")[0],
                j = b.effect.indexOf(",") < 0 ? i : b.effect.replace(" ", "").split(",")[1],
                k = 0,
                l = 0,
                m = 0,
                n = 0,
                o, p, q, r, s, t, u, v;
            if (e < 2) return a("." + b.container, a(this)).fadeIn(b.fadeSpeed, b.fadeEasing, function() { o = !0, b.slidesLoaded() }), a("." + b.next + ", ." + b.prev).fadeOut(0), !1;
            if (e < 2) return;
            h < 0 && (h = 0), h > e && (h = e - 1), b.start && (n = h), b.randomize && d.randomize(), a("." + b.container, c).css({ overflow: "hidden", position: "relative" }), d.children().css({ position: "absolute", top: 0, left: d.children().outerWidth(), zIndex: 0, display: "none" }), d.css({ position: "relative", width: f * 3, height: g, left: -f }), a("." + b.container, c).css({ display: "block" }), b.autoHeight && (d.children().css({ height: "auto" }), d.animate({ height: d.children(":eq(" + h + ")").outerHeight() }, b.autoHeightSpeed));
            if (b.preload && d.find("img:eq(" + h + ")").length) {
                a("." + b.container, c).css({ background: "url(" + b.preloadImage + ") no-repeat 50% 50%" });
                var z = d.find("img:eq(" + h + ")").attr("src") + "?" + (new Date).getTime();
                a("img", c).parent().attr("class") != "slides_control" ? t = d.children(":eq(0)")[0].tagName.toLowerCase() : t = d.find("img:eq(" + h + ")"), d.find("img:eq(" + h + ")").attr("src", z).load(function() { d.find(t + ":eq(" + h + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function() { a(this).css({ zIndex: 5 }), a("." + b.container, c).css({ background: "" }), o = !0, b.slidesLoaded() }) })
            } else d.children(":eq(" + h + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function() { o = !0, b.slidesLoaded() });
            b.bigTarget && (d.children().css({ cursor: "pointer" }), d.children().click(function() { return w("next", i), !1 })), b.hoverPause && b.play && (d2.bind("mouseover", function() { x() }), d2.bind("mouseleave", function() { y() })), b.generateNextPrev && (a("." + b.container, c).after('<a href="#" class="' + b.prev + '">Prev</a>'), a("." + b.prev, c).after('<a href="#" class="' + b.next + '">Next</a>')), a("." + b.next, c).click(function(a) { a.preventDefault(), b.play && y(), w("next", i) }), a("." + b.prev, c).click(function(a) { a.preventDefault(), b.play && y(), w("prev", i) }), b.generatePagination ? (b.prependPagination ? c.prepend("<ul class=" + b.paginationClass + "></ul>") : c.append("<ul class=" + b.paginationClass + "></ul>"), d.children().each(function() { a("." + b.paginationClass, c).append('<li><a href="#' + m + '">' + (m + 1) + "</a></li>"), m++ })) : a("." + b.paginationClass + " li a", c).each(function() { a(this).attr("href", "#" + m), m++ }), a("." + b.paginationClass + " li:eq(" + h + ")", c).addClass(b.currentClass), a("." + b.paginationClass + " li a", c).click(function() { return b.play && y(), q = a(this).attr("href").match("[^#/]+$"), n != q && w("pagination", j, q), !1 }), a("a.link", c).click(function() { return b.play && y(), q = a(this).attr("href").match("[^#/]+$") - 1, n != q && w("pagination", j, q), !1 }), b.play && (v = setInterval(function() { w("next", i) }, b.play), c.data("interval", v))
        })
    }, a.fn.slides.option = { preload: !1, preloadImage: "/img/loading.gif", container: "slides_container", generateNextPrev: !1, next: "next", prev: "prev", pagination: !0, generatePagination: !0, prependPagination: !1, paginationClass: "pagination", currentClass: "current", fadeSpeed: 350, fadeEasing: "", slideSpeed: 350, slideEasing: "", start: 1, effect: "slide", crossfade: !1, randomize: !1, play: 0, pause: 0, hoverPause: !1, autoHeight: !1, autoHeightSpeed: 350, bigTarget: !1, animationStart: function() {}, animationComplete: function() {}, slidesLoaded: function() {} }, a.fn.randomize = function(b) {
        function c() { return Math.round(Math.random()) - .5 }
        return a(this).each(function() {
            var d = a(this),
                e = d.children(),
                f = e.length;
            if (f > 1) {
                e.hide();
                var g = [];
                for (i = 0; i < f; i++) g[g.length] = i;
                g = g.sort(c), a.each(g, function(a, c) {
                    var f = e.eq(c),
                        g = f.clone(!0);
                    g.show().appendTo(d), b !== undefined && b(f, g), f.remove()
                })
            }
        })
    }
})(jQuery);