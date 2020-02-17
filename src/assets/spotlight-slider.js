


function startTouch(t) {
        initialX = t.touches[0].clientX, initialY = t.touches[0].clientY
    }
    
    function moveTouch(t) {
        if (spotlightSlider.isPaused()) return !1;
        const e = t.target.closest("section"),
            n = e.getAttribute("data-slide");
        if (null !== initialX && null !== initialY) {
            var o = t.touches[0].clientX,
                i = t.touches[0].clientY,
                s = initialX - o,
                a = initialY - i;
            if (Math.abs(s) > Math.abs(a));
            else if (a > 0) spotlightSlider.isLastSlide() ? spotlightSlider.scroll() : spotlightSlider.goToNextSlide();
            else {
                if (1 == n) return !1;
                spotlightSlider.isTop() && spotlightSlider.addBodyClass(), spotlightSlider.goToPreviousSlide()
            }
            return initialX = null, initialY = null, !1
        }
    }! function(t) {
        "use strict";
        t.fn.jfTabs = function(e) {
            const n = t.extend({
                    toggleTabLink: !1,
                    firstTabActive: !1,
                    activeClassName: "active",
                    tabContainer: t("[data-tabcontainer]")
                }, e),
                o = t(n.tabContainer).find("[data-tabcontent]"),
                i = function(e) {
                    t(e).each(function(e, n) {
                        0 === e && t(n).addClass("active")
                    })
                };
            return this.each(function() {
                const e = t(this),
                    s = t(e).closest(n.tabContainer).find("[data-tab]");
                n.firstTabActive && (i(s), i(o)), e.on("click", function(o) {
                    o.preventDefault();
                    const i = t(e).data("tab");
                    s.not(e).removeClass("active"), n.toggleTabLink ? t(e).toggleClass("active") : t(e).addClass("active");
                    const a = t(e).closest(n.tabContainer).find("[data-tabcontent]"),
                        l = a.filter(function(t, e, n) {
                            return e.dataset.tabcontent === i
                        });
                    a.not(l).removeClass("active"), n.toggleTabLink ? l.toggleClass("active") : l.addClass("active")
                })
            })
        }
    }(jQuery);
    const elementsAnimations = {
            config: {
                animationClass: "animation-in",
                firstAnimationTimeout: 200
            },
            splitText: function(t) {
                const e = t.innerHTML,
                    n = e.split(" ");
                var o = "";
                Array.prototype.forEach.call(n, function(t, e) {
                    o += '<span class="temp">' + t + "</span> "
                }), t.innerHTML = o
            },
            createRows: function(t) {
                const e = t.querySelectorAll(".temp"),
                    n = [];
                var o = 0;
                return Array.prototype.forEach.call(e, function(t, e) {
                    const i = t.offsetTop;
                    i > o ? (n[i] = t.innerHTML, o = i) : i == o && (n[i] = n[i] + " " + t.innerHTML)
                }), n
            },
            addAnimationsAtts: function(t, e) {
                const n = e.getAttribute("data-animation-name"),
                    o = parseInt(e.getAttribute("data-animation-delay")),
                    i = parseInt(e.getAttribute("data-animation-pace"));
                var s = "",
                    a = 0;
                Array.prototype.forEach.call(t, function(t) {
                    s += '<span data-animation="' + n + '" data-delay="' + (o + i * a) + '">' + t + "</span>", a++
                }), e.innerHTML = s
            },
            parseRowsAnimations: function() {
                const t = document.querySelectorAll('[data-animation-type="rows"]');
                Array.prototype.forEach.call(t, function(t) {
                    elementsAnimations.splitText(t);
                    const e = elementsAnimations.createRows(t);
                    elementsAnimations.addAnimationsAtts(e, t)
                })
            },
            addInitalClass: function() {
                const t = document.querySelectorAll('[data-slide="1"]');
                setTimeout(function() {
                    t[0].classList.add(elementsAnimations.config.animationClass)
                }, elementsAnimations.config.firstAnimationTimeout)
            },
            init: function(t) {
                if (t) return !1;
                elementsAnimations.parseRowsAnimations(), elementsAnimations.addInitalClass()
            }
        },
        section = document.body.classList,
        screenWidth = window.innerWidth,
        isMobileDevice = function() {
            return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile")
        },
        disable = !(!(isMobileDevice && screenWidth < 768 || void 0 === section) && section.contains("path-frontpage"));
    elementsAnimations.init(disable);
    const jfUncheckModule = function() {
            "use strict";
            const t = {
                    checkBoxes: $('input[type="checkbox"]'),
                    uncheckBtn: $("input[data-uncheckall]"),
                    checkAllBtn: $("input[data-checkall]"),
                    globalCheckBtn: $("#edit-loc-tid").find("[data-checkall]")
                },
                e = function(e) {
                    const n = e.closest("form").find(t.checkBoxes);
                    $.each(n, function(t) {
                        const e = n[t];
                        $(e).is(":checked") && ($(e).prop("checked", !1), $(n).prop("disabled", !1))
                    })
                },
                n = function(e) {
                    const n = e.parent().find(t.checkBoxes),
                        o = e.parent().children().find(t.checkBoxes),
                        i = n.length > 1 ? n : o;
                    $.each(i, function(t) {
                        const n = i[t];
                        e.is(":checked") ? $(n).not(e).prop({
                            disabled: !0,
                            checked: !0
                        }) : $(n).prop({
                            disabled: !1,
                            checked: !1
                        })
                    })
                },
                o = function(e) {
                    e.is(":checked") ? ($(t.checkBoxes).prop("checked", !0), $(t.checkBoxes).not(e).prop("disabled", !0)) : ($(t.checkBoxes).prop("checked", !1), $(t.checkBoxes).prop("disabled", !1))
                },
                i = function() {
                    t.uncheckBtn.on("click", function(t) {
                        t.preventDefault(), e($(this))
                    }), t.checkAllBtn.on("change", function(t) {
                        n($(this))
                    });
                    const i = t.globalCheckBtn.last();
                    $(i).on("change", function(t) {
                        o($(this))
                    })
                };
            return {
                init: function() {
                    i()
                }
            }
        }(),
        GetLocalTime = function() {
            const t = {
                    timer: 1e3,
                    defaultTimeZone: "Europe/London"
                },
                e = !!window.MSInputMethodContext && !!document.documentMode,
                n = function() {
                    return document.querySelectorAll(".local-time")
                },
                o = function() {
                    return document.querySelector("[data-timezone]")
                },
                i = function() {
                    const e = o();
                    if (null !== e) {
                        return "" !== e.dataset.timezone ? e.dataset.timezone : t.defaultTimeZone
                    }
                },
                s = document.querySelector(".local-time");
            var a, l = s.innerHTML,
                c = parseInt(l.split(":")[0]),
                r = parseInt(l.split(":")[1]);
            const d = function() {
                    const t = new Date,
                        e = t.getDate(),
                        n = t.getMonth(),
                        o = t.getFullYear();
                    a = new Date(o, n, e, c, r), r = a.getTime() + r + 6e4, c = a.getHours();
                    const i = new Date(r);
                    return c = i.getHours(), r = i.getMinutes(), l = (c < 10 ? "0" + c : c) + ":" + (r < 10 ? "0" + r : r)
                },
                u = function() {
                    const t = i(),
                        e = new Date;
                    return new Intl.DateTimeFormat("en-gb", {
                        timeZone: t,
                        hour: "numeric",
                        minute: "numeric"
                    }).format(e)
                },
                p = function() {
                    const t = n(),
                        o = e ? d() : u(),
                        i = Array.prototype.slice.call(t);
                    Array.prototype.forEach.call(i, function(t, e) {
                        t.innerHTML = o
                    })
                };
            return {
                init: function() {
                    p(), t.timer = e ? 6e4 : 1e3, setInterval(p, t.timer)
                },
                getTimeZone: i
            }
        },
        mobileDropDown = function() {
            const t = function() {
                    return {
                        mobileTab: $("[data-dropdown]")
                    }
                }(),
                e = function() {
                    $.each(t.mobileTab, function(e) {
                        const n = t.mobileTab[e];
                        $(n).on("click", function(e) {
                            e.preventDefault(), $(t.mobileTab).not($(this)).removeClass("active"), $(this).toggleClass("active")
                        })
                    })
                };
            return {
                init: function() {
                    e()
                }
            }
        }(),
        jfModal = function() {
            "use strict";
            const t = {
                    mainEl: $('section[role="main"]'),
                    modalContent: "",
                    scrolled: 0,
                    modalTrigger: $("[data-modaltrigger]"),
                    modalContentClass: "modal--on",
                    noScrollClass: "no-scroll",
                    timeout: 300
                },
                e = function(e) {
                    const n = $(e).data("modaltrigger");
                    t.modalContent = $(document).find('[data-modalcontent="' + n + '"]'), t.scrolled = $(window).scrollTop(), $(t.mainEl).css({
                        position: "relative",
                        top: -t.scrolled
                    }), $("html, body").addClass(t.noScrollClass), $(t.modalContent).addClass(t.modalContentClass)
                },
                n = function() {
                    $(t.modalContent).removeClass(t.modalContentClass), setTimeout(function() {
                        $("html, body").removeClass(t.noScrollClass), $(t.mainEl).removeAttr("style"), $(window).scrollTop(t.scrolled), t.scrolled = 0
                    }, t.timeout)
                },
                o = function() {
                    t.modalTrigger.on("click", function(t) {
                        t.preventDefault(), t.stopPropagation(), e($(this))
                    }), $(document).on("click", ".modal", function(t) {
                        t.preventDefault(), ($(t.target).is(".btn--close") || $(t.target).is(".modal")) && n()
                    }), $(document).on("keydown", function(t) {
                        27 === t.keyCode && n()
                    })
                };
            return {
                init: function() {
                    o()
                }
            }
        }(),
        spotlightSlider = {
            config: {
                selector: null,
                noScrollClass: "no-scroll",
                animationTimeout: 600,
                startSlideTransitionTimeout: 400,
                slideAttribute: "data-slide",
                elementsAnimationClass: ".animation-in",
                elementsAnimationClassOut: ".animation-out",
                animationClass: ".slide-up",
                dotsContainerClass: ".spotlight-indicator",
                dotActiveClass: ".spotlight-indicator__bar--active",
                dotAttribute: "data-slide-target",
                scrollButtonsSelector: '[data-js="spotlightScroll"]',
                forwardClass: "next",
                backwardsClass: "prev",
                winHeight: null
            },
            slider: function() {
                return document.querySelector(spotlightSlider.config.selector)
            },
            addBodyClass: function() {
                document.body.classList.add(spotlightSlider.config.noScrollClass)
            },
            removeBodyClass: function() {
                document.body.classList.remove(spotlightSlider.config.noScrollClass)
            },
            isTop: function() {
                window.innerHeight;
                return 0 == window.pageYOffset
            },
            isPaused: function() {
                const t = Date.now();
                return t - window.time < spotlightSlider.config.animationTimeout || (window.time = t, !1)
            },
            setCurrentDot: function(t) {
                const e = spotlightSlider.getCurrentSlide(),
                    n = e.getAttribute(spotlightSlider.config.slideAttribute),
                    o = spotlightSlider.slider().querySelector(spotlightSlider.config.dotsContainerClass),
                    i = o.querySelector(spotlightSlider.config.dotActiveClass),
                    s = o.querySelector("[" + spotlightSlider.config.dotAttribute + '="' + n + '"]');
                o.classList.remove(spotlightSlider.config.forwardClass), o.classList.remove(spotlightSlider.config.backwardsClass), o.classList.add(t), i.classList.remove(spotlightSlider.config.dotActiveClass.replace(".", "")), s.classList.add(spotlightSlider.config.dotActiveClass.replace(".", ""))
            },
            getCurrentSlide: function() {
                const t = spotlightSlider.slider().querySelectorAll(spotlightSlider.config.animationClass);
                return t[t.length - 1]
            },
            isLastSlide: function() {
                const t = spotlightSlider.getCurrentSlide(),
                    e = t.nextElementSibling;
                return null === e || null === e.getAttribute(spotlightSlider.config.slideAttribute)
            },
            goToPreviousSlide: function() {
                const t = spotlightSlider.getCurrentSlide(),
                    e = t.previousElementSibling;
                null !== e.getAttribute(spotlightSlider.config.slideAttribute) && (t.classList.remove(spotlightSlider.config.elementsAnimationClass.replace(".", "")), t.classList.add(spotlightSlider.config.elementsAnimationClassOut.replace(".", "")), setTimeout(function() {
                    t.classList.remove(spotlightSlider.config.animationClass.replace(".", "")), spotlightSlider.setCurrentDot(spotlightSlider.config.backwardsClass)
                }, spotlightSlider.config.startSlideTransitionTimeout), setTimeout(function() {
                    t.classList.remove(spotlightSlider.config.elementsAnimationClassOut.replace(".", "")), e.classList.add(spotlightSlider.config.elementsAnimationClass.replace(".", ""))
                }, spotlightSlider.config.startSlideTransitionTimeout + spotlightSlider.config.animationTimeout))
            },
            goToNextSlide: function(t) {
                const e = spotlightSlider.getCurrentSlide(),
                    n = e.nextElementSibling;
                e.classList.remove(spotlightSlider.config.elementsAnimationClass.replace(".", "")), e.classList.add(spotlightSlider.config.elementsAnimationClassOut.replace(".", "")), setTimeout(function() {
                    n.classList.add(spotlightSlider.config.animationClass.replace(".", "")), spotlightSlider.setCurrentDot(spotlightSlider.config.forwardClass)
                }, spotlightSlider.config.startSlideTransitionTimeout), setTimeout(function() {
                    e.classList.remove(spotlightSlider.config.elementsAnimationClassOut.replace(".", "")), n.classList.add(spotlightSlider.config.elementsAnimationClass.replace(".", ""))
                }, spotlightSlider.config.startSlideTransitionTimeout + spotlightSlider.config.animationTimeout)
            },
            goToTop: function() {
                const t = window.innerHeight;
                $("html, body").animate({
                    scrollTop: t
                }, "slow")
            },
            scrollEvents: function(t) {
                if (t.deltaY < 0 && spotlightSlider.isTop() && spotlightSlider.addBodyClass(), spotlightSlider.isPaused()) return !1;
                t.deltaY < 0 && spotlightSlider.isTop() && spotlightSlider.goToPreviousSlide(), t.deltaY > 0 && spotlightSlider.isLastSlide() && spotlightSlider.removeBodyClass(), t.deltaY > 0 && !spotlightSlider.isLastSlide() && spotlightSlider.goToNextSlide()
            },
            scroll: function(t) {
                spotlightSlider.removeBodyClass(), spotlightSlider.goToTop()
            },
            addScrollEvents: function() {
                document.body.addEventListener("wheel", spotlightSlider.scrollEvents)
            },
            addButtonsEvents: function() {
                const t = spotlightSlider.slider().querySelectorAll(spotlightSlider.config.scrollButtonsSelector);
                Array.prototype.forEach.call(t, function(e, n) {
                    n < t.length - 1 ? e.addEventListener("click", spotlightSlider.goToNextSlide) : e.addEventListener("click", spotlightSlider.scroll)
                })
            },
            init: function(t, e) {
                if (e) return !1;
                spotlightSlider.config.selector = t, null !== spotlightSlider.slider && (spotlightSlider.addBodyClass(), spotlightSlider.addScrollEvents(), spotlightSlider.addButtonsEvents())
            }
        };
    spotlightSlider.init(".spotlight-slider", disable);
    const jfTabModule = function() {
        "use strict";
        const t = {
                locationLink: $(".child-nav__list-heading--location"),
                filterLink: $(".filter-category-list__item:not([data-dropdown])"),
                cancelBtn: $("[data-cancelbtn]"),
                countryLink: $(".tab--link")
            },
            e = function() {
                $(t.filterLink).jfTabs({
                    toggleTabLink: !0,
                    tabContainer: $(".filter-tab-wrapper")
                }), $(t.cancelBtn).on("click", function(t) {
                    t.preventDefault(), $(".filter-category-content-panel").removeClass("active"), $(".filter-category-list__item").removeClass("active")
                }), $(t.locationLink).jfTabs({
                    firstTabActive: !0,
                    tabContainer: $(".child-nav__row--location")
                }), $(t.countryLink).jfTabs()
            };
        return {
            init: function() {
                e()
            }
        }
    }();
    $(document).ready(function() {
        objectFitImages();
        var t, e, n = !1,
            o = $('[data-js="toggleNavBtn"]'),
            i = $('[data-js="toggleNavigation"]'),
            s = $('[data-js="toggleNavCloseBtn"]'),
            a = $('[data-js="toggleSecondaryNavLink"]'),
            l = $('[data-js="toggleSecondaryNav"]'),
            c = $('[data-js="toggleBackPrimary"]'),
            r = $('[data-js="toggleTertiaryNavLink"]'),
            d = $('[data-js="toggleTertiaryNav"]'),
            u = $('[data-js="toggleBackSecondary"]'),
            p = $('[data-js="toggleSearchBtn"]'),
            g = $('[data-js="toggleSearch"]'),
            h = $('[data-js="searchfield"]'),
            f = $(".ui-autocomplete-input"),
            m = $(".webchat-button"),
            v = $("#webchat-qrcode"),
            C = $('[data-js="locationNavBtn"]'),
            b = $('[data-js="locationNavContent"]'),
            S = $(".accordion__btn"),
            y = $(".accordion__panel"),
            T = $(".video-wrapper"),
            w = $("video");
        const k = function() {
            return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile")
        }();
        (sessionStorage.getItem("checked") && sessionStorage.getItem("checked").length && ($("form").not(".search-form").find('input[type="submit"]').trigger("click"), $(document).ajaxComplete(function() {
            $(".ajax-progress").remove()
        })), jfTabModule.init(), jfModal.init(), null !== document.querySelector(".local-time")) && GetLocalTime().init();
        var A = function(t, e) {
            n = !n, n ? t.addClass(e) : t.removeClass(e)
        };
        if (k && C.on("click", function(t) {
                t.preventDefault(), $(b).toggleClass("open")
            }), $("#edit-type").length) {
            var L = $("#edit-type :selected").data("category"),
                B = $("[data-category='" + L + "']");
            $(".tab__list-item").removeClass("active"), $(B).addClass("active")
        }
        $(window).on("resize", function() {
            n = !n;
            var t = $(window).width();
            t >= 1200 && x(), t <= 1200 && j()
        });
        var j = function() {
                g.hasClass("search--desktop-open") && (g.removeClass("search--desktop-open"), g.addClass("was-desktop-open")), i.hasClass("was-open") && (i.removeClass("was-open"), i.addClass("nav--open"), g.addClass("search--mobile-open")), $(".button-close").hasClass("was-open") && ($(".button-close").removeClass("was-open"), $(".button-close").addClass("button-close--open"))
            },
            x = function() {
                i.hasClass("nav--open") && (i.removeClass("nav--open"), i.addClass("was-open"), g.removeClass("search--mobile-open")), $(".button-close").hasClass("button-close--open") && ($(".button-close").removeClass("button-close--open"), $(".button-close").addClass("was-open")), g.hasClass("was-desktop-open") && (g.addClass("search--desktop-open"), g.removeClass("was-desktop-open"))
            },
            D = function(t, e, o) {
                $(e).removeClass(o);
                const i = $(t).next().find($(e));
                n ? $(i).addClass(o) : $(i).removeClass(o)
            };
        o.on("click", function(t) {
            t.preventDefault(), t.stopPropagation(), 1 == n && (n = !1), A(i, "nav--open"), $(".button-close").addClass("button-close--open"), $(".search").addClass("search--mobile-open"), $(h).focus(), $("html, body").addClass("no-scroll")
        }), s.on("click", function(t) {
            t.preventDefault(), $(document).find(".nav--open").removeClass("nav--open"), $(".button-close").removeClass("button-close--open"), $(".search").hasClass("search--mobile-open") && $(".search").removeClass("search--mobile-open"), $("html, body").removeClass("no-scroll"), n = !n
        }), $.each(a, function(t, e) {
            k && $(e).on("click", function(t) {
                t.preventDefault(), t.stopPropagation(), D(e, l, "child-nav__secondary-group--open"), i.addClass("submenu-open")
            })
        }), c.on("click", function(t) {
            k && (t.preventDefault(), t.stopPropagation(), $(this).closest(l).removeClass("child-nav__secondary-group--open"), i.removeClass("submenu-open"))
        }), $.each(r, function(t, e) {
            k && $(e).on("click", function(t) {
                t.preventDefault(), t.stopPropagation(), D(e, d, "child-nav__tertiary-group--open")
            })
        }), u.on("click", function(t) {
            k && (t.preventDefault(), t.stopPropagation(), $(this).closest(d).removeClass("child-nav__tertiary-group--open"))
        }), m.on("click", function(t) {
            t.preventDefault(), v.slideToggle()
        }), p.on("click", function(t) {
            t.preventDefault(), t.stopPropagation(), g.hasClass("search--mobile-open") && (g.removeClass("search--mobile-open"), g.addClass("mobile-was-open"), n = !n), g.toggleClass("search--desktop-open"), $(h).focus().val(""), $(f).focus().val(""), g.removeClass("was-desktop-open"), n = !1
        });
        const E = function(t) {
                return t.target.value
            },
            _ = function(t) {
                var e = document.querySelectorAll(".autocomplete-suggestion-label");
                Array.prototype.forEach.call(e, function(e) {
                    var n = e.innerHTML,
                        o = e.innerHTML.toLowerCase(),
                        i = o.indexOf(t);
                    i >= 0 && (n = n.substring(0, i) + "<span class='search-found'>" + n.substring(i, i + t.length) + "</span>" + n.substring(i + t.length), e.innerHTML = n)
                })
            };
        $(f).keyup(function(e) {
            const n = E(e);
            clearTimeout(t), $(f).val && (t = setTimeout(function() {
                console.log(n), _(n)
            }, 1e3))
        }), $(document).on("click", function(t) {
            $(t.target).closest(".search").length || $(".search").hasClass("search--desktop-open") && $(".search").removeClass("search--desktop-open")
        }), $('[data-js="spotlightScroll"]').click(function(t) {
            t.preventDefault();
            var e = $(this).attr("href");
            if ($(e).length > 0) {
                var n = $(e).offset().top;
                $("body, html").animate({
                    scrollTop: n
                }, 500)
            }
        }), $(S).click(function() {
            $(this).next(y).slideToggle(), $(this).toggleClass("active")
        }), $(".js-smooth-scroll").on("click", function(t) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
                    scrollTop: e.offset().top
                }, 700))
            }
        });
        const M = function(t) {
            $.ajax({
                url: t,
                success: function(t) {
                    t = $(t).find(".tab-container"), $(".tab-container").html(t)
                },
                error: function(t) {
                    console.log(t)
                }
            })
        };
        ! function() {
            $(".tab .tab__list-item").on("click", function(t) {
                t.preventDefault(), $(this).siblings(".active").removeClass("active"), $(this).addClass("active");
                const e = $(this).data("url");
                void 0 !== e && M(e);
                var n = $(this).attr("name"),
                    o = $(".tab-content").find("[data-tab='" + n + "']");
                if ($(".tab-content__pane").removeClass("active"), $(o).addClass("active"), $("#edit-type").length) {
                    var i = $(".tab-select").find("[data-category='" + $(this).data("category") + "']");
                    $("#edit-type").val(i.val()), $("#views-exposed-form-search-results-page-1").submit()
                }
            })
        }(), $("#tab-select").on("change", function(t) {
                $(".tab-content__pane").removeClass("active");
                var e = $(this).val();
                $("[data-tab='" + e + "']").addClass("active")
            }), $("#edit-type").on("change", function(t) {
                $("#views-exposed-form-search-results-page-1").submit()
            }), $(".owl-carousel").each(function(t, e) {
                if (window.innerWidth >= 768 && $(e).hasClass("owl-carousel-sm") && !$(e).hasClass("slider--desktop")) return !0;
                var n = $(e).height();
                $(e).find(".js_slide").each(function(t, e) {
                    var o = parseInt($(e).width()) + parseInt($(e).css("padding-left")) + parseInt($(e).css("padding-right")) + 1;
                    $(e).height();
                    $(e).css({
                        width: o + "px",
                        height: n + "px"
                    })
                }), $(e).owlCarousel({
                    autoWidth: !0,
                    dots: !0,
                    nav: !0,
                    loop: !1,
                    items: 2
                })
            }), $(".owl-carousel-1").each(function(t, e) {
                if (window.innerWidth >= 768 && $(e).hasClass("owl-carousel-sm")) return !0;
                var n = $(e).height();
                $(e).find(".js_slide").each(function(t, e) {
                    var o = parseInt($(e).width()) + parseInt($(e).css("padding-left")) + parseInt($(e).css("padding-right")) + 1;
                    $(e).height();
                    $(e).css({
                        width: o + "px",
                        height: n + "px"
                    })
                }), $(e).owlCarousel({
                    dots: !0,
                    nav: !0,
                    loop: !1,
                    responsiveClass: !0,
                    items: 1
                })
            }), window.addEventListener("resize", function() {
                const t = $(".owl-stage-outer");
                $(t).length
            }),
            function(t, e) {
                var n = e.getElementsByTagName("body")[0],
                    o = e.createElement("script"),
                    i = "IntersectionObserver" in t ? "10.19.0" : "8.17.0";
                o.async = !0, o.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + i + "/dist/lazyload.min.js", t.lazyLoadOptions = {
                    elements_selector: ".lazy"
                }, t.addEventListener("LazyLoad::Initialized", function(e) {
                    t.lazyLoadInstance = e.detail.instance
                }, !1), n.appendChild(o)
            }(window, document), videoMethods = {
                renderVideoPlayButton: function() {
                    T.has(w) && (I(), w.addClass("has-media-controls-hidden"), e = $(".video-overlay-play-button"), e.on("click", function(t) {
                        P(t)
                    }))
                }
            };
        var I = function() {
                T.append('      <svg class="video-overlay-play-button" viewBox="0 0 85 85">          <g id="Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">              <g id="T5-Sub-Category---Sector-type" transform="translate(-757.000000, -1328.000000)">                  <g id="Video" transform="translate(404.000000, 1000.000000)">                      <g id="Play-button" transform="translate(353.000000, 328.000000)">                          <circle id="Oval-2" fill="#BF0D3E" fill-rule="nonzero" cx="42.5" cy="42.5" r="42.5"></circle>                          <g id="play" transform="translate(35.000000, 25.000000)" stroke="#FFFFFF" stroke-linejoin="bevel">                              <g id="Shape">                                  <path d="M0.331730769,0.106046512 L22.1397115,17.8953488 C22.3888772,18.1439858 22.5288804,18.4813761 22.5288804,18.8331977 C22.5288804,19.1850192 22.3888772,19.5224095 22.1397115,19.7710465 L0.331730769,37.6001163 L0.331730769,0.106046512 Z" stroke-width="2.25"></path>                              </g>                          </g>                      </g>                  </g>              </g>          </g>      </svg>    ')
            },
            P = function(t) {
                var e = $(t.currentTarget).siblings().get(0),
                    n = $(e).children("video");
                n.get(0).play(), $(t.currentTarget).addClass("is-hidden"), n.removeClass("has-media-controls-hidden")
            };
        videoMethods.renderVideoPlayButton()
    });
    const elements = document.querySelectorAll("[data-slide]");
    Array.prototype.forEach.call(elements, function(t) {
        t.addEventListener("touchstart", startTouch, !1), t.addEventListener("touchmove", moveTouch, !1)
    });
    var initialX = null,
        initialY = null;
        