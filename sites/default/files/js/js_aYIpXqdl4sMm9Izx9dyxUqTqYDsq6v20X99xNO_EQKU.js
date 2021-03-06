/*!
 * jQuery Browser Plugin 0.0.8
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */
/*global window: false */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery.browser'], function ($) {
            return factory($);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        // Node-like environment
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function(jQuery) {
    "use strict";

    function uaMatch( ua ) {
        // If an UA is not provided, default to the current browser UA.
        if ( ua === undefined ) {
            ua = window.navigator.userAgent;
        }
        ua = ua.toLowerCase();

        var match = /(edge)\/([\w.]+)/.exec( ua ) ||
            /(opr)[\/]([\w.]+)/.exec( ua ) ||
            /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        var platform_match = /(ipad)/.exec( ua ) ||
            /(ipod)/.exec( ua ) ||
            /(iphone)/.exec( ua ) ||
            /(kindle)/.exec( ua ) ||
            /(silk)/.exec( ua ) ||
            /(android)/.exec( ua ) ||
            /(windows phone)/.exec( ua ) ||
            /(win)/.exec( ua ) ||
            /(mac)/.exec( ua ) ||
            /(linux)/.exec( ua ) ||
            /(cros)/.exec( ua ) ||
            /(playbook)/.exec( ua ) ||
            /(bb)/.exec( ua ) ||
            /(blackberry)/.exec( ua ) ||
            [];

        var browser = {},
            matched = {
                browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
                version: match[ 2 ] || match[ 4 ] || "0",
                versionNumber: match[ 4 ] || match[ 2 ] || "0",
                platform: platform_match[ 0 ] || ""
            };

        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
            browser.versionNumber = parseInt(matched.versionNumber, 10);
        }

        if ( matched.platform ) {
            browser[ matched.platform ] = true;
        }

        // These are all considered mobile platforms, meaning they run a mobile browser
        if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
            browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
            browser.mobile = true;
        }

        // These are all considered desktop platforms, meaning they run a desktop browser
        if ( browser.cros || browser.mac || browser.linux || browser.win ) {
            browser.desktop = true;
        }

        // Chrome, Opera 15+ and Safari are webkit based browsers
        if ( browser.chrome || browser.opr || browser.safari ) {
            browser.webkit = true;
        }

        // IE11 has a new token so we will assign it msie to avoid breaking changes
        // IE12 disguises itself as Chrome, but adds a new Edge token.
        if ( browser.rv || browser.edge ) {
            var ie = "msie";

            matched.browser = ie;
            browser[ie] = true;
        }

        // Blackberry browsers are marked as Safari on BlackBerry
        if ( browser.safari && browser.blackberry ) {
            var blackberry = "blackberry";

            matched.browser = blackberry;
            browser[blackberry] = true;
        }

        // Playbook browsers are marked as Safari on Playbook
        if ( browser.safari && browser.playbook ) {
            var playbook = "playbook";

            matched.browser = playbook;
            browser[playbook] = true;
        }

        // BB10 is a newer OS version of BlackBerry
        if ( browser.bb ) {
            var bb = "blackberry";

            matched.browser = bb;
            browser[bb] = true;
        }

        // Opera 15+ are identified as opr
        if ( browser.opr ) {
            var opera = "opera";

            matched.browser = opera;
            browser[opera] = true;
        }

        // Stock Android browsers are marked as Safari on Android.
        if ( browser.safari && browser.android ) {
            var android = "android";

            matched.browser = android;
            browser[android] = true;
        }

        // Kindle browsers are marked as Safari on Kindle
        if ( browser.safari && browser.kindle ) {
            var kindle = "kindle";

            matched.browser = kindle;
            browser[kindle] = true;
        }

        // Kindle Silk browsers are marked as Safari on Kindle
        if ( browser.safari && browser.silk ) {
            var silk = "silk";

            matched.browser = silk;
            browser[silk] = true;
        }

        // Assign the name and platform variable
        browser.name = matched.browser;
        browser.platform = matched.platform;
        return browser;
    }

    // Run the matching process, also assign the function to the returned object
    // for manual, jQuery-free use if desired
    window.jQBrowser = uaMatch( window.navigator.userAgent );
    window.jQBrowser.uaMatch = uaMatch;

    // Only assign to jQuery.browser if jQuery is loaded
    if ( jQuery ) {
        jQuery.browser = window.jQBrowser;
    }

    return window.jQBrowser;
}));;
/*
 *	jQuery dotdotdot 1.7.4
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var h=this,f=t(h);if("undefined"==typeof h)return!0;if(f.is(u))e.append(f);else{if(s)return!0;e.append(f),!l||f.is(d.after)||f.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==h.nodeType?o(f,n,i,d,l):r(f,n,i,d,l)),s||l&&l.detach()}}),n.addClass("is-truncated"),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var h=s(c),f=-1!==h.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":f,g=h.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=h.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),r.children().each(function(){t(this).toggle().toggle()}),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(h=i(s(c),o),l(c,h),T&&d&&t(c).parent().append(d))}else h=i(g.slice(0,v+1).join(p),o),l(c,h);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function h(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function f(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this,i=o.contents();o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){switch(o.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(o[0]);break;default:l.maxHeight=f(o)}l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=h(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(t){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);
;
/*!
 Waypoints - 4.0.0
 Copyright © 2011-2015 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
 */
(function () {
    'use strict'

    var keyCounter = 0
    var allWaypoints = {}

    /* http://imakewebthings.com/waypoints/api/waypoint */
    function Waypoint(options) {
        if (!options) {
            throw new Error('No options passed to Waypoint constructor')
        }
        if (!options.element) {
            throw new Error('No element option passed to Waypoint constructor')
        }
        if (!options.handler) {
            throw new Error('No handler option passed to Waypoint constructor')
        }


        this.key = 'waypoint-' + keyCounter
        this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
        this.element = this.options.element
        this.adapter = new Waypoint.Adapter(this.element)
        this.callback = options.handler
        this.step = options.step
        this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
        this.enabled = this.options.enabled
        this.triggerPoint = null
        this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        })
        this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

        if (Waypoint.offsetAliases[this.options.offset]) {
            this.options.offset = Waypoint.offsetAliases[this.options.offset]
        }

        this.group.add(this)
        this.context.add(this)
        allWaypoints[this.key] = this
        keyCounter += 1
    }

    /* Private */
    Waypoint.prototype.queueTrigger = function (direction) {
        this.group.queueTrigger(this, direction)
    }

    /* Private */
    Waypoint.prototype.trigger = function (args) {
        if (!this.enabled) {
            return
        }
        if (this.callback) {
            this.callback.apply(this, args)
        }
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/destroy */
    Waypoint.prototype.destroy = function () {
        this.context.remove(this)
        this.group.remove(this)
        delete allWaypoints[this.key]
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/disable */
    Waypoint.prototype.disable = function () {
        this.enabled = false
        return this
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/enable */
    Waypoint.prototype.enable = function () {
        this.context.refresh()
        this.enabled = true
        return this
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/next */
    Waypoint.prototype.next = function () {
        return this.group.next(this)
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/previous */
    Waypoint.prototype.previous = function () {
        return this.group.previous(this)
    }

    /* Private */
    Waypoint.invokeAll = function (method) {
        var allWaypointsArray = []
        for (var waypointKey in allWaypoints) {
            allWaypointsArray.push(allWaypoints[waypointKey])
        }
        for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
            allWaypointsArray[i][method]()
        }
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/destroy-all */
    Waypoint.destroyAll = function () {
        Waypoint.invokeAll('destroy')
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/disable-all */
    Waypoint.disableAll = function () {
        Waypoint.invokeAll('disable')
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/enable-all */
    Waypoint.enableAll = function () {
        Waypoint.invokeAll('enable')
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/refresh-all */
    Waypoint.refreshAll = function () {
        Waypoint.Context.refreshAll()
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/viewport-height */
    Waypoint.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/viewport-width */
    Waypoint.viewportWidth = function () {
        return document.documentElement.clientWidth
    }

    Waypoint.adapters = []

    Waypoint.defaults = {
        context: window,
        continuous: true,
        enabled: true,
        group: 'default',
        horizontal: false,
        offset: 0
    }

    Waypoint.offsetAliases = {
        'bottom-in-view': function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        'right-in-view': function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }

    window.Waypoint = Waypoint
}())
;
(function () {
    'use strict'

    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1000 / 60)
    }

    var keyCounter = 0
    var contexts = {}
    var Waypoint = window.Waypoint
    var oldWindowLoad = window.onload

    /* http://imakewebthings.com/waypoints/api/context */
    function Context(element) {
        this.element = element
        this.Adapter = Waypoint.Adapter
        this.adapter = new this.Adapter(element)
        this.key = 'waypoint-context-' + keyCounter
        this.didScroll = false
        this.didResize = false
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }
        this.waypoints = {
            vertical: {},
            horizontal: {}
        }

        element.waypointContextKey = this.key
        contexts[element.waypointContextKey] = this
        keyCounter += 1

        this.createThrottledScrollHandler()
        this.createThrottledResizeHandler()
    }

    /* Private */
    Context.prototype.add = function (waypoint) {
        var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
        this.waypoints[axis][waypoint.key] = waypoint
        this.refresh()
    }

    /* Private */
    Context.prototype.checkEmpty = function () {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
        var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
        if (horizontalEmpty && verticalEmpty) {
            this.adapter.off('.waypoints')
            delete contexts[this.key]
        }
    }

    /* Private */
    Context.prototype.createThrottledResizeHandler = function () {
        var self = this

        function resizeHandler() {
            self.handleResize()
            self.didResize = false
        }

        this.adapter.on('resize.waypoints', function () {
            if (!self.didResize) {
                self.didResize = true
                Waypoint.requestAnimationFrame(resizeHandler)
            }
        })
    }

    /* Private */
    Context.prototype.createThrottledScrollHandler = function () {
        var self = this

        function scrollHandler() {
            self.handleScroll()
            self.didScroll = false
        }

        this.adapter.on('scroll.waypoints', function () {
            if (!self.didScroll || Waypoint.isTouch) {
                self.didScroll = true
                Waypoint.requestAnimationFrame(scrollHandler)
            }
        })
    }

    /* Private */
    Context.prototype.handleResize = function () {
        Waypoint.Context.refreshAll()
    }

    /* Private */
    Context.prototype.handleScroll = function () {
        var triggeredGroups = {}
        var axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: 'right',
                backward: 'left'
            },
            vertical: {
                newScroll: Math.max(0, this.adapter.scrollTop()),
                oldScroll: this.oldScroll.y,
                forward: 'down',
                backward: 'up'
            }
        }

        for (var axisKey in axes) {
            var axis = axes[axisKey]
            var isForward = axis.newScroll > axis.oldScroll
            var direction = isForward ? axis.forward : axis.backward

            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey]


                var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
                var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
                var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
                var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint

                if (nowAfterTriggerPoint) {
                    if (waypoint.step != undefined) {
                        waypoint.step(direction)
                    }
                }

                if (crossedForward || crossedBackward) {
                    waypoint.queueTrigger(direction)
                    triggeredGroups[waypoint.group.id] = waypoint.group
                }
            }
        }


        for (var groupKey in triggeredGroups) {
            triggeredGroups[groupKey].flushTriggers()
        }

        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        }
    }

    /* Private */
    Context.prototype.innerHeight = function () {
        /*eslint-disable eqeqeq */
        if (this.element == this.element.window) {
            return Waypoint.viewportHeight()
        }
        /*eslint-enable eqeqeq */
        return this.adapter.innerHeight()
    }

    /* Private */
    Context.prototype.remove = function (waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key]
        this.checkEmpty()
    }

    /* Private */
    Context.prototype.innerWidth = function () {
        /*eslint-disable eqeqeq */
        if (this.element == this.element.window) {
            return Waypoint.viewportWidth()
        }
        /*eslint-enable eqeqeq */
        return this.adapter.innerWidth()
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-destroy */
    Context.prototype.destroy = function () {
        var allWaypoints = []
        for (var axis in this.waypoints) {
            for (var waypointKey in this.waypoints[axis]) {
                allWaypoints.push(this.waypoints[axis][waypointKey])
            }
        }
        for (var i = 0, end = allWaypoints.length; i < end; i++) {
            allWaypoints[i].destroy()
        }
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-refresh */
    Context.prototype.refresh = function () {
        /*eslint-disable eqeqeq */
        var isWindow = this.element == this.element.window
        /*eslint-enable eqeqeq */

        var contextOffset = isWindow ? undefined : this.adapter.offset()
        var triggeredGroups = {}
        var axes

        this.handleScroll()
        axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: 'right',
                backward: 'left',
                offsetProp: 'left'
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: 'down',
                backward: 'up',
                offsetProp: 'top'
            }
        }


        for (var axisKey in axes) {
            var axis = axes[axisKey]
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey]
                var adjustment = waypoint.options.offset
                var oldTriggerPoint = waypoint.triggerPoint
                var elementOffset = 0
                var freshWaypoint = oldTriggerPoint == null
                var contextModifier, wasBeforeScroll, nowAfterScroll
                var triggeredBackward, triggeredForward

                if (waypoint.element !== waypoint.element.window) {
                    elementOffset = waypoint.adapter.offset()[axis.offsetProp]
                }

                if (typeof adjustment === 'function') {
                    adjustment = adjustment.apply(waypoint)
                }
                else if (typeof adjustment === 'string') {
                    adjustment = parseFloat(adjustment)
                    if (waypoint.options.offset.indexOf('%') > -1) {
                        adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
                    }
                }


                contextModifier = axis.contextScroll - axis.contextOffset
                waypoint.triggerPoint = elementOffset + contextModifier - adjustment
                wasBeforeScroll = oldTriggerPoint < axis.oldScroll
                nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
                triggeredBackward = wasBeforeScroll && nowAfterScroll
                triggeredForward = !wasBeforeScroll && !nowAfterScroll

                if (!freshWaypoint && triggeredBackward) {
                    waypoint.queueTrigger(axis.backward)
                    triggeredGroups[waypoint.group.id] = waypoint.group
                }
                else if (!freshWaypoint && triggeredForward) {
                    waypoint.queueTrigger(axis.forward)
                    triggeredGroups[waypoint.group.id] = waypoint.group
                }
                else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
                    waypoint.queueTrigger(axis.forward)
                    triggeredGroups[waypoint.group.id] = waypoint.group
                }
            }
        }

        Waypoint.requestAnimationFrame(function () {
            for (var groupKey in triggeredGroups) {
                triggeredGroups[groupKey].flushTriggers()
            }
        })

        return this
    }

    /* Private */
    Context.findOrCreateByElement = function (element) {
        return Context.findByElement(element) || new Context(element)
    }

    /* Private */
    Context.refreshAll = function () {
        for (var contextId in contexts) {
            contexts[contextId].refresh()
        }
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-find-by-element */
    Context.findByElement = function (element) {
        return contexts[element.waypointContextKey]
    }

    window.onload = function () {
        if (oldWindowLoad) {
            oldWindowLoad()
        }
        Context.refreshAll()
    }

    Waypoint.requestAnimationFrame = function (callback) {
        var requestFn = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            requestAnimationFrameShim
        requestFn.call(window, callback)
    }
    Waypoint.Context = Context
}())
;
(function () {
    'use strict'

    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }

    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }

    var groups = {
        vertical: {},
        horizontal: {}
    }
    var Waypoint = window.Waypoint

    /* http://imakewebthings.com/waypoints/api/group */
    function Group(options) {
        this.name = options.name
        this.axis = options.axis
        this.id = this.name + '-' + this.axis
        this.waypoints = []
        this.clearTriggerQueues()
        groups[this.axis][this.name] = this
    }

    /* Private */
    Group.prototype.add = function (waypoint) {
        this.waypoints.push(waypoint)
    }

    /* Private */
    Group.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }

    /* Private */
    Group.prototype.flushTriggers = function () {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction]
            var reverse = direction === 'up' || direction === 'left'
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i]
                if (waypoint.options.continuous || i === waypoints.length - 1) {
                    waypoint.trigger([direction])
                }
            }
        }
        this.clearTriggerQueues()
    }

    /* Private */
    Group.prototype.next = function (waypoint) {
        this.waypoints.sort(byTriggerPoint)
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
        var isLast = index === this.waypoints.length - 1
        return isLast ? null : this.waypoints[index + 1]
    }

    /* Private */
    Group.prototype.previous = function (waypoint) {
        this.waypoints.sort(byTriggerPoint)
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
        return index ? this.waypoints[index - 1] : null
    }

    /* Private */
    Group.prototype.queueTrigger = function (waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }

    /* Private */
    Group.prototype.remove = function (waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
        if (index > -1) {
            this.waypoints.splice(index, 1)
        }
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/first */
    Group.prototype.first = function () {
        return this.waypoints[0]
    }

    /* Public */
    /* http://imakewebthings.com/waypoints/api/last */
    Group.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }

    /* Private */
    Group.findOrCreate = function (options) {
        return groups[options.axis][options.name] || new Group(options)
    }

    Waypoint.Group = Group
}())
;
(function () {
    'use strict'

    var $ = window.jQuery
    var Waypoint = window.Waypoint

    function JQueryAdapter(element) {
        this.$element = $(element)
    }

    $.each([
        'innerHeight',
        'innerWidth',
        'off',
        'offset',
        'on',
        'outerHeight',
        'outerWidth',
        'scrollLeft',
        'scrollTop'
    ], function (i, method) {
        JQueryAdapter.prototype[method] = function () {
            var args = Array.prototype.slice.call(arguments)
            return this.$element[method].apply(this.$element, args)
        }
    })

    $.each([
        'extend',
        'inArray',
        'isEmptyObject'
    ], function (i, method) {
        JQueryAdapter[method] = $[method]
    })

    Waypoint.adapters.push({
        name: 'jquery',
        Adapter: JQueryAdapter
    })
    Waypoint.Adapter = JQueryAdapter
}())
;
(function () {
    'use strict'

    var Waypoint = window.Waypoint

    function createExtension(framework) {
        return function () {
            var waypoints = []
            var overrides = arguments[0]

            if (framework.isFunction(arguments[0])) {
                overrides = framework.extend({}, arguments[1])
                overrides.handler = arguments[0]
            }

            this.each(function () {
                var options = framework.extend({}, overrides, {
                    element: this
                })
                if (typeof options.context === 'string') {
                    options.context = framework(this).closest(options.context)[0]
                }
                waypoints.push(new Waypoint(options))
            })

            return waypoints
        }
    }

    if (window.jQuery) {
        window.jQuery.fn.waypoint = createExtension(window.jQuery)
    }
    if (window.Zepto) {
        window.Zepto.fn.waypoint = createExtension(window.Zepto)
    }
}())
;;
/*!
 Waypoints Infinite Scroll Shortcut - 4.0.0
 Copyright © 2011-2015 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
 */
(function () {
    'use strict'

    var $ = window.jQuery
    var Waypoint = window.Waypoint

    /* http://imakewebthings.com/waypoints/shortcuts/infinite-scroll */
    function Infinite(options) {
        this.options = $.extend({}, Infinite.defaults, options)
        this.container = this.options.element
        if (this.options.container !== 'auto') {
            this.container = this.options.container
        }
        this.$container = $(this.container)
        this.reInit();
    }

    Infinite.prototype.reInit = function () {
        /**
         * line updated $(this.options.more) -> this.$container.find(this.options.more)
         * search more link in context...
         */

        this.$more = this.$container.find(this.options.more)

        if (this.$more.length) {
            this.setupHandler()
            this.waypoint = new Waypoint(this.options)
            this.destroyed = false;
        }
    }

    /* Private */
    Infinite.prototype.setupHandler = function () {

        this.options.handler = $.proxy(function () {
            var tmpURL = this.$container.find(this.options.more).attr('href'),
                $tmpMoreLink = this.$container.find(this.options.more);

            this.options.onBeforePageLoad()
            this.destroy()
            this.$container.addClass(this.options.loadingClass)

            var tmpAjaxModel = new AjaxModel({
                url: tmpURL,
                element: $tmpMoreLink,
                callback: _.bind(this.appendInfiniteItem, this)
            });
            tmpAjaxModel.execute();

        }, this)
    }

    Infinite.prototype.appendInfiniteItem = function ($pContent) {
        var $data = $pContent;
        var $newMore = $data.find(this.options.more)
        var $items = $data.find(this.options.items)

        if (!$items.length) {
            $items = $data.filter(this.options.items)
        }

        this.$container.find('.container-feed-items').append($items);
        this.$container.removeClass(this.options.loadingClass)

        if (!$newMore.length) {
            $newMore = $data.filter(this.options.more)
        }
        if ($newMore.length) {
            this.$more.replaceWith($newMore)
            this.$more = $newMore
            this.waypoint = new Waypoint(this.options)
        }
        else {
            this.$more.remove()
        }

        this.options.onAfterPageLoad($items)
    }

    /* Public */
    Infinite.prototype.destroy = function () {
        if (this.waypoint) {
            this.waypoint.destroy()
            this.destroyed = true;
        }
    }

    Infinite.prototype.refresh = function () {
        if (this.waypoint && this.destroyed == false) {
            this.destroy();
        }
        this.reInit();
    }

    Infinite.defaults = {
        container: 'auto',
        items: '.infinite-item',
        more: '.infinite-more-link',
        offset: 'bottom-in-view',
        loadingClass: 'infinite-loading',
        onBeforePageLoad: $.noop,
        onAfterPageLoad: $.noop
    }

    Waypoint.Infinite = Infinite
}())
;
;
/*!
 Waypoints Sticky Element Shortcut - 4.0.0
 Copyright © 2011-2015 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
 */
(function () {
    'use strict'

    var $ = window.jQuery
    var Waypoint = window.Waypoint

    /* http://imakewebthings.com/waypoints/shortcuts/sticky-elements */
    function Sticky(options) {
        this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options)
        this.element = this.options.element
        this.$element = $(this.element)
        this.createWrapper()
        this.createWaypoint()
    }

    /* Private */
    Sticky.prototype.createWaypoint = function () {
        var originalHandler = this.options.handler;
        this.options = $.extend({useWrapperHeight: true}, this.options);

        this.waypoint = new Waypoint($.extend(this.options, {
            element: this.wrapper,
            handler: $.proxy(function (direction) {
                var shouldBeStuck = this.options.direction.indexOf(direction) > -1
                var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : ''

                if(this.options.useWrapperHeight) this.$wrapper.height(wrapperHeight)
                this.$element.toggleClass(this.options.stuckClass, shouldBeStuck)

                if (originalHandler) {
                    originalHandler.call(this, direction)
                }
            }, this)
        }))
    }

    /* Private */
    Sticky.prototype.createWrapper = function () {
        if (this.options.wrapper) {
            this.$element.wrap(this.options.wrapper)
        }
        this.$wrapper = this.$element.parent()
        this.wrapper = this.$wrapper[0]
    }

    /* Public */
    Sticky.prototype.destroy = function () {
        if (this.$element.parent()[0] === this.wrapper) {
            this.waypoint.destroy()
            this.$element.removeClass(this.options.stuckClass)
            if (this.options.wrapper) {
                this.$element.unwrap()
            }
        }
    }

    Sticky.defaults = {
        wrapper: '<div class="sticky-wrapper" />',
        stuckClass: 'stuck',
        direction: 'down right'
    }

    Waypoint.Sticky = Sticky
}())
;;
/*!
Waypoints Inview Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
(function() {
  'use strict'

  function noop() {}

  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/shortcuts/inview */
  function Inview(options) {
    this.options = Waypoint.Adapter.extend({}, Inview.defaults, options)
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints = []
    this.element = this.options.element
    this.createWaypoints()
  }

  /* Private */
  Inview.prototype.createWaypoints = function() {
    var configs = {
      vertical: [{
        down: 'enter',
        up: 'exited',
        offset: '100%'
      }, {
        down: 'entered',
        up: 'exit',
        offset: 'bottom-in-view'
      }, {
        down: 'exit',
        up: 'entered',
        offset: 0
      }, {
        down: 'exited',
        up: 'enter',
        offset: function() {
          return -this.adapter.outerHeight()
        }
      }],
      horizontal: [{
        right: 'enter',
        left: 'exited',
        offset: '100%'
      }, {
        right: 'entered',
        left: 'exit',
        offset: 'right-in-view'
      }, {
        right: 'exit',
        left: 'entered',
        offset: 0
      }, {
        right: 'exited',
        left: 'enter',
        offset: function() {
          return -this.adapter.outerWidth()
        }
      }]
    }

    for (var i = 0, end = configs[this.axis].length; i < end; i++) {
      var config = configs[this.axis][i]
      this.createWaypoint(config)
    }
  }

  /* Private */
  Inview.prototype.createWaypoint = function(config) {
    var self = this
    this.waypoints.push(new Waypoint({
      context: this.options.context,
      element: this.options.element,
      enabled: this.options.enabled,
      handler: (function(config) {
        return function(direction) {
          self.options[config[direction]].call(self, direction)
        }
      }(config)),
      offset: config.offset,
      horizontal: this.options.horizontal
    }))
  }

  /* Public */
  Inview.prototype.destroy = function() {
    for (var i = 0, end = this.waypoints.length; i < end; i++) {
      this.waypoints[i].destroy()
    }
    this.waypoints = []
  }

  Inview.prototype.disable = function() {
    for (var i = 0, end = this.waypoints.length; i < end; i++) {
      this.waypoints[i].disable()
    }
  }

  Inview.prototype.enable = function() {
    for (var i = 0, end = this.waypoints.length; i < end; i++) {
      this.waypoints[i].enable()
    }
  }

  Inview.defaults = {
    context: window,
    enabled: true,
    enter: noop,
    entered: noop,
    exit: noop,
    exited: noop
  }

  Waypoint.Inview = Inview
}())
;;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.4.2
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery.browser'], factory);
    }
    if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.timeago = function (timestamp) {
        if (timestamp instanceof Date) {
            return inWords(timestamp);
        } else if (typeof timestamp === "string") {
            return inWords($.timeago.parse(timestamp));
        } else if (typeof timestamp === "number") {
            return inWords(new Date(timestamp));
        } else {
            return inWords($.timeago.datetime(timestamp));
        }
    };
    var $t = $.timeago;

    $.extend($.timeago, {
        settings: {
            refreshMillis: 60000,
            allowPast: true,
            allowFuture: false,
            localeTitle: false,
            cutoff: 0,
            strings: {
                inPast: 'any moment now',
                prefixAgo: "vor",
                prefixFromNow: "in",
                suffixAgo: "",
                suffixFromNow: "",
                seconds: "wenigen Sekunden",
                minute: "etwa einer Minute",
                minutes: "%d Minuten",
                hour: "etwa einer Stunde",
                hours: "%d Stunden",
                day: "etwa einem Tag",
                days: "%d Tagen",
                month: "etwa einem Monat",
                months: "%d Monaten",
                year: "etwa einem Jahr",
                years: "%d Jahren",
                wordSeparator: " ",
                numbers: []
            }
        },

        inWords: function (distanceMillis) {
            if (!this.settings.allowPast && !this.settings.allowFuture) {
                throw 'timeago allowPast and allowFuture settings can not both be set to false.';
            }

            var $l = this.settings.strings;
            var prefix = $l.prefixAgo;
            var suffix = $l.suffixAgo;
            if (this.settings.allowFuture) {
                if (distanceMillis < 0) {
                    prefix = $l.prefixFromNow;
                    suffix = $l.suffixFromNow;
                }
            }

            if (!this.settings.allowPast && distanceMillis >= 0) {
                return this.settings.strings.inPast;
            }

            var seconds = Math.abs(distanceMillis) / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var years = days / 365;

            function substitute(stringOrFunction, number) {
                var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
                var value = ($l.numbers && $l.numbers[number]) || number;
                return string.replace(/%d/i, value);
            }

            var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
                seconds < 90 && substitute($l.minute, 1) ||
                minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
                minutes < 90 && substitute($l.hour, 1) ||
                hours < 24 && substitute($l.hours, Math.round(hours)) ||
                hours < 42 && substitute($l.day, 1) ||
                days < 30 && substitute($l.days, Math.round(days)) ||
                days < 45 && substitute($l.month, 1) ||
                days < 365 && substitute($l.months, Math.round(days / 30)) ||
                years < 1.5 && substitute($l.year, 1) ||
                substitute($l.years, Math.round(years));

            var separator = $l.wordSeparator || "";
            if ($l.wordSeparator === undefined) {
                separator = " ";
            }
            return $.trim([prefix, words, suffix].join(separator));
        },

        parse: function (iso8601) {
            var s = $.trim(iso8601);
            s = s.replace(/\.\d+/, ""); // remove milliseconds
            s = s.replace(/-/, "/").replace(/-/, "/");
            s = s.replace(/T/, " ").replace(/Z/, " UTC");
            s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
            s = s.replace(/([\+\-]\d\d)$/, " $100"); // +09 -> +0900
            return new Date(s);
        },
        datetime: function (elem) {
            var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
            return $t.parse(iso8601);
        },
        isTime: function (elem) {
            // jQuery's `is()` doesn't play well with HTML5 in IE
            return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
        }
    });

    // functions that can be called via $(el).timeago('action')
    // init is default when no action is given
    // functions are called with context of a single element
    var functions = {
        init: function () {
            var refresh_el = $.proxy(refresh, this);
            refresh_el();
            var $s = $t.settings;
            if ($s.refreshMillis > 0) {
                this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
            }
        },
        update: function (time) {
            var parsedTime = $t.parse(time);
            $(this).data('timeago', {datetime: parsedTime});
            if ($t.settings.localeTitle) $(this).attr("title", parsedTime.toLocaleString());
            refresh.apply(this);
        },
        updateFromDOM: function () {
            $(this).data('timeago', {datetime: $t.parse($t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title"))});
            refresh.apply(this);
        },
        dispose: function () {
            if (this._timeagoInterval) {
                window.clearInterval(this._timeagoInterval);
                this._timeagoInterval = null;
            }
        }
    };

    $.fn.timeago = function (action, options) {
        var fn = action ? functions[action] : functions.init;
        if (!fn) {
            throw new Error("Unknown function name '" + action + "' for timeago");
        }
        // each over objects here and call the requested function
        this.each(function () {
            fn.call(this, options);
        });
        return this;
    };

    function refresh() {
        //check if it's still visible
        if (!$.contains(document.documentElement, this)) {
            //stop if it has been removed
            $(this).timeago("dispose");
            return this;
        }

        var data = prepareData(this);
        var $s = $t.settings;

        if (!isNaN(data.datetime)) {
            if ($s.cutoff == 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
                $(this).text(inWords(data.datetime));
            }
        }
        return this;
    }

    function prepareData(element) {
        element = $(element);
        if (!element.data("timeago")) {
            element.data("timeago", {datetime: $t.datetime(element)});
            var text = $.trim(element.text());
            if ($t.settings.localeTitle) {
                element.attr("title", element.data('timeago').datetime.toLocaleString());
            } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
                element.attr("title", text);
            }
        }
        return element.data("timeago");
    }

    function inWords(date) {
        return $t.inWords(distance(date));
    }

    function distance(date) {
        return (new Date().getTime() - date.getTime());
    }

    // fix for IE6 suckage
    document.createElement("abbr");
    document.createElement("time");
}));
;
/**
 * Swiper 3.1.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: August 22, 2015
 */
(function () {
    'use strict';
    var $;
    /*===========================
    Swiper
    ===========================*/
    var Swiper = function (container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);

        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            // autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            // Free mode
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            // Parallax
            parallax: false,
            // Scrollbar
            scrollbar: null,
            scrollbarHide: true,
            // Keyboard Mousewheel
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            // Hash Navigation
            hashnav: false,
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            // Pagination
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Next/prev buttons
            nextButton: null,
            prevButton: null,
            // Progress
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Lazy Loading
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingOnTransitionStart: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            // Control
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            // Swiping/no swiping
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            // NS
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slidePrevClass: 'swiper-slide-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationHiddenClass: 'swiper-pagination-hidden',
            // Observer
            observer: false,
            observeParents: false,
            // Accessibility
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // Callbacks
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            */
        
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        
        params = params || {};
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        
        // Swiper
        var s = this;
        
        // Version
        s.version = '3.1.0';
        
        // Params
        s.params = params;
        
        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
            $ = Dom7;
        }  
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            }
            else {
                $ = Dom7;
            }
            if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;
        
        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            s.container.each(function () {
                new Swiper(this, params);
            });
            return;
        }
        
        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        
        s.classNames.push('swiper-container-' + s.params.direction);
        
        if (s.params.freeMode) {
            s.classNames.push('swiper-container-free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push('swiper-container-no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push('swiper-container-3d');
            }
            else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push('swiper-container-' + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
            s.params.setWrapperSize = false;
        }
        if (s.params.effect === 'fade') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        
        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        
        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        
        // Pagination
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.paginationClickable) {
                s.paginationContainer.addClass('swiper-pagination-clickable');
            }
        }
        
        // Is Horizontal
        function isH() {
            return s.params.direction === 'horizontal';
        }
        
        // RTL
        s.rtl = isH() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push('swiper-container-rtl');
        }
        
        // Wrong RTL support
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        
        // Columns
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push('swiper-container-multirow');
        }
        
        // Check for Android
        if (s.device.android) {
            s.classNames.push('swiper-container-android');
        }
        
        // Add classes
        s.container.addClass(s.classNames.join(' '));
        
        // Translate
        s.translate = 0;
        
        // Progress
        s.progress = 0;
        
        // Velocity
        s.velocity = 0;
        
        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
        };
        
        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }  
        /*=========================
          Set grab cursor
          ===========================*/
        if (s.params.grabCursor) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = '-webkit-grab';
            s.container[0].style.cursor = '-moz-grab';
            s.container[0].style.cursor = 'grab';
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        
        s.loadImage = function (imgElement, src, checkForComplete, callback) {
            var image;
            function onReady () {
                if (callback) callback();
            }

            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    image.src = src;
                } else {
                    onReady();
                }
        
            } else {//image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), true, _onReady);
            }
        };
        
        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                }
                else {
                    if (!s.isEnd) {
                        s._slideNext();
                    }
                    else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                        }
                        else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, s.params.autoplay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            }
            else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    }
                    else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return (-s.snapGrid[0]);
        };
        s.maxTranslate = function () {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            }
            else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            }
            else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && isH() || height === 0 && !isH()) {
                return;
            }
            
            //Subtract paddings
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
            
            // Store values
            s.width = width;
            s.height = height;
            s.size = isH() ? s.width : s.height;
        };
        
        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
        
            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
        
            s.virtualSize = -spaceBetween;
            // reset margins
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
            else s.slides.css({marginRight: '', marginBottom: ''});
        
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                }
                else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
            }
        
            // Calc slides
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    // Set slides order
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide
                            .css({
                                '-webkit-box-ordinal-group': newSlideOrderIndex,
                                '-moz-box-ordinal-group': newSlideOrderIndex,
                                '-ms-flex-order': newSlideOrderIndex,
                                '-webkit-order': newSlideOrderIndex,
                                'order': newSlideOrderIndex
                            });
                    }
                    else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide
                        .css({
                            'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                        })
                        .attr('data-swiper-column', column)
                        .attr('data-swiper-row', row);
        
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = isH() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                }
                else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);
        
                    if (isH()) {
                        s.slides[i].style.width = slideSize + 'px';
                    }
                    else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
        
        
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                }
                else {
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
        
                s.virtualSize += slideSize + spaceBetween;
        
                prevSlideSize = slideSize;
        
                index ++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
        
            var newSlidesGrid;
        
            if (
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (isH()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
            }
        
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
        
            // Remove last grid elements depending on width
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) > Math.floor(s.snapGrid[s.snapGrid.length - 1])) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];
        
            if (s.params.spaceBetween !== 0) {
                if (isH()) {
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                    else s.slides.css({marginRight: spaceBetween + 'px'});
                }
                else s.slides.css({marginBottom: spaceBetween + 'px'});
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = isH() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };
        
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
        
            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;
        
            // Visible Slides
            var containerBox = s.container[0].getBoundingClientRect();
            var sideBefore = isH() ? 'left' : 'top';
            var sideAfter = isH() ? 'right' : 'bottom';
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible =
                        (slideBefore >= 0 && slideBefore < s.size) ||
                        (slideAfter > 0 && slideAfter <= s.size) ||
                        (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            }
            else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd) s.emit('onReachEnd', s);
        
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i ++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    }
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                }
                else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            // Normalize slideIndex
            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            // for (i = 0; i < s.slidesGrid.length; i++) {
                // if (- translate >= s.slidesGrid[i]) {
                    // newActiveIndex = i;
                // }
            // }
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
        
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
        };
        
        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            // Active classes
            activeSlide.addClass(s.params.slideActiveClass);
            activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
        
            // Pagination
            if (s.bullets && s.bullets.length > 0) {
                s.bullets.removeClass(s.params.bulletActiveClass);
                var bulletIndex;
                if (s.params.loop) {
                    bulletIndex = Math.ceil(s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup;
                    if (bulletIndex > s.slides.length - 1 - s.loopedSlides * 2) {
                        bulletIndex = bulletIndex - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (bulletIndex > s.bullets.length - 1) bulletIndex = bulletIndex - s.bullets.length;
                }
                else {
                    if (typeof s.snapIndex !== 'undefined') {
                        bulletIndex = s.snapIndex;
                    }
                    else {
                        bulletIndex = s.activeIndex || 0;
                    }
                }
                if (s.paginationContainer.length > 1) {
                    s.bullets.each(function () {
                        if ($(this).index() === bulletIndex) $(this).addClass(s.params.bulletActiveClass);
                    });
                }
                else {
                    s.bullets.eq(bulletIndex).addClass(s.params.bulletActiveClass);
                }
            }
        
            // Next/active buttons
            if (!s.params.loop) {
                if (s.params.prevButton) {
                    if (s.isBeginning) {
                        $(s.params.prevButton).addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable($(s.params.prevButton));
                    }
                    else {
                        $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable($(s.params.prevButton));
                    }
                }
                if (s.params.nextButton) {
                    if (s.isEnd) {
                        $(s.params.nextButton).addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable($(s.params.nextButton));
                    }
                    else {
                        $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable($(s.params.nextButton));
                    }
                }
            }
        };
        
        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var bulletsHTML = '';
                var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                for (var i = 0; i < numberOfBullets; i++) {
                    if (s.params.paginationBulletRender) {
                        bulletsHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
                    }
                    else {
                        bulletsHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                    }
                }
                s.paginationContainer.html(bulletsHTML);
                s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                    s.a11y.initPagination();
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            function forceSetTranslate() {
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated, newTranslate;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                }
                else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    }
                    else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
        
            }
        };
        
        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            // Disable locks on resize
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;

            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    s.slideTo(s.slides.length - 1, 0, false, true);
                }
                else {
                    s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            // Return locks after resize
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
        };
        
        /*=========================
          Events
          ===========================*/
        
        //Define Touch Events
        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
        if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
        else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        s.touchEvents = {
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : desktopEvents[0],
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
        };
        
        
        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        
        // Attach/detach events
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
        
            var moveCapture = s.params.nested ? true : false;
        
            //Touch Events
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            }
            else {
                if (s.support.touch) {
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
                }
                if (params.simulateTouch && !s.device.ios && !s.device.android) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
        
            // Next, Prev, Index
            if (s.params.nextButton) {
                $(s.params.nextButton)[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) $(s.params.nextButton)[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton) {
                $(s.params.prevButton)[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) $(s.params.prevButton)[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                $(s.paginationContainer)[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) $(s.paginationContainer)[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
        
            // Prevent Links Clicks
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function (detach) {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };
        
        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        // Clicks
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };
        
        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                }
                else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;
                    else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }
        
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            }
            else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex;
                if (s.params.loop) {
                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
                    if (slideToIndex > s.slides.length - s.params.slidesPerView) {
                        s.fixLoop();
                        slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]').eq(0).index();
                        setTimeout(function () {
                            s.slideTo(slideToIndex);
                        }, 0);
                    }
                    else if (slideToIndex < s.params.slidesPerView - 1) {
                        s.fixLoop();
                        var duplicatedSlides = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]');
                        slideToIndex = duplicatedSlides.eq(duplicatedSlides.length - 1).index();
                        setTimeout(function () {
                            s.slideTo(slideToIndex);
                        }, 0);
                    }
                    else {
                        s.slideTo(slideToIndex);
                    }
                }
                else {
                    s.slideTo(slideToIndex);
                }
            }
        };
        
        var isTouched,
            isMoved,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,
            // Form elements to match
            formElements = 'input, select, textarea, button',
            // Last click time
            lastClickTime = Date.now(), clickTimeout,
            //Velocities
            velocities = [],
            allowMomentumBounce;
        
        // Animating Flag
        s.animating = false;
        
        // Touches information
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        
        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }
        
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            
            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
        
            isTouched = true;
            isMoved = false;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };
        
        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) return;
            if (s.params.onlyExternal) {
                // isMoved = true;
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
        
            s.emit('onTouchMove', s, e);
        
            if (e.targetTouches && e.targetTouches.length > 1) return;
        
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
            if (typeof isScrolling === 'undefined') {
                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                isScrolling = isH() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling)  {
                isTouched = false;
                return;
            }
            if (!startMoving && s.browser.ieTouch) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
        
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    }
                    else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                //Grab Cursor
                if (s.params.grabCursor) {
                    s.container[0].style.cursor = 'move';
                    s.container[0].style.cursor = '-webkit-grabbing';
                    s.container[0].style.cursor = '-moz-grabbin';
                    s.container[0].style.cursor = 'grabbing';
                }
            }
            isMoved = true;
        
            var diff = s.touches.diff = isH() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
            
            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;
        
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
        
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
        
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
        
            if (!s.params.followFinger) return;
        
            // Threshold
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = isH() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                }
                else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
            // Update active index in free mode
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                //Velocity
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[isH() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[isH() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            // Update progress
            s.updateProgress(currentTranslate);
            // Update translate
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            s.emit('onTouchEnd', s, e);
            if (!isTouched) return;
            //Return Grab Cursor
            if (s.params.grabCursor && isMoved && isTouched) {
                s.container[0].style.cursor = 'move';
                s.container[0].style.cursor = '-webkit-grab';
                s.container[0].style.cursor = '-moz-grab';
                s.container[0].style.cursor = 'grab';
            }
        
            // Time diff
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
        
            // Tap, doubleTap, Click
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
        
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
        
            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);
        
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
        
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            }
            else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    }
                    else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
        
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
        
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < 0.02) {
                            s.velocity = 0;
                        }
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
        
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
        
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = - newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.maxTranslate();
                        }
                    }
                    else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.minTranslate();
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
        
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = - newPosition;
                    }
                    //Fix duration
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        }
                        else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
        
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);
        
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
        
                    } else {
                        s.updateProgress(newPosition);
                    }
        
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
        
            // Find current slide
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                }
                else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
        
            // Find current slide size
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
        
            if (timeDiff > s.params.longSwipesMs) {
                // Long touches
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
        
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
            }
            else {
                // Short swipes
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
        
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
        
            var translate = - s.snapGrid[s.snapIndex];
        
            // Stop autoplay
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                }
                else {
                    s.stopAutoplay();
                }
            }
            // Update progress
            s.updateProgress(translate);
        
            // Normalize slideIndex
            for (var i = 0; i < s.slidesGrid.length; i++) {
                if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex ) return false;
            }
        
            // Update Index
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
        
            if (translate === s.translate) {
                s.updateClasses();
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
            var translateX = isH() ? translate : 0, translateY = isH() ? 0 : translate;
            if (speed === 0) {
                s.setWrapperTransition(0);
                s.setWrapperTranslate(translate);
                s.onTransitionEnd(runCallbacks);
            }
            else {
                s.setWrapperTransition(speed);
                s.setWrapperTranslate(translate);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
        
            }
        
            return true;
        };
        
        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                }
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                }
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };
        
        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0, y = 0, z = 0;
            if (isH()) {
                x = s.rtl ? -translate : translate;
            }
            else {
                y = translate;
            }
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
        
            s.translate = isH() ? x : y;
        
            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };
        
        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
        
            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
        
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
        
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
        
            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = isH() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };
        
        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            // create an observer instance
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });
        
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
        
            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
        
            // Observe container
            initObserver(s.container[0], {childList: false});
        
            // Observe wrapper
            initObserver(s.wrapper[0], {attributes: false});
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function () {
            // Remove duplicated slides
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        
            var slides = s.wrapper.children('.' + s.params.slideClass);
        
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
        
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
        
            var prependSlides = [], appendSlides = [], i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            //Fix For Positive Oversliding
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            }
            else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            }
            else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
        
            if (s.params.loop) {
                s.createLoop();
            }
        
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            }
            else {
                s.slideTo(newActiveIndex, 0, false);
            }
        
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };
        

        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!isH()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ?
                                Math.max(1 - Math.abs(slide[0].progress), 0) :
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide
                            .css({
                                opacity: slideOpacity
                            })
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
        
                    }
        
                },
                setTransition: function (duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function () {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (isH()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({height: s.width + 'px'});
                        }
                        else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0, ty = 0, tz = 0;
                        if (i % 4 === 0) {
                            tx = - round * 4 * s.size;
                            tz = 0;
                        }
                        else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = - round * 4 * s.size;
                        }
                        else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        }
                        else if ((i - 3) % 4 === 0) {
                            tx = - s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
                        
                        if (!isH()) {
                            ty = tx;
                            tx = 0;
                        }
                        
                        var transform = 'rotateX(' + (isH() ? 0 : -slideAngle) + 'deg) rotateY(' + (isH() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            //Set shadows
                            var shadowBefore = isH() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = isH() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (isH() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (isH() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            var shadowOpacity = slide[0].progress;
                            if (shadowBefore.length) shadowBefore[0].style.opacity = -slide[0].progress;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = slide[0].progress;
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
                        
                    if (s.params.cube.shadow) {
                        if (isH()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }
                        else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (isH() ? 0 : wrapperRotate) + 'deg) rotateY(' + (isH() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !isH()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function () {
                    var transform = s.translate;
                    var center = isH() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = isH() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    //Each slide offset from center
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
        
                        var rotateY = isH() ? rotate * offsetMultiplier : 0;
                        var rotateX = isH() ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
        
                        var translateY = isH() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = isH() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
        
                        //Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            //Set shadows
                            var shadowBefore = isH() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = isH() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (isH() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (isH() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
        
                    //Set correct perspective for IE10
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };

        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function (index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;
                
                var slide = s.slides.eq(index);
                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
                    img.add(slide[0]);
                }
                if (img.length === 0) return;
        
                img.each(function () {
                    var _img = $(this);
                    _img.addClass('swiper-lazy-loading');
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src');
                    s.loadImage(_img[0], (src || background), false, function () {
                        if (background) {
                            _img.css('background-image', 'url(' + background + ')');
                            _img.removeAttr('data-background');
                        }
                        else {
                            _img.attr('src', src);
                            _img.removeAttr('data-src');
                        }
                            
                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
                        slide.find('.swiper-lazy-preloader, .preloader').remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            }
                            else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
                    
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
                    
            },
            load: function () {
                var i;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                }
                else {
                    if (s.params.slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        s.lazy.loadImageInSlide(s.activeIndex);    
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (s.params.slidesPerView > 1) {
                        // Next Slides
                        for (i = s.activeIndex + s.params.slidesPerView; i < s.activeIndex + s.params.slidesPerView + s.params.slidesPerView; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        // Prev Slides
                        for (i = s.activeIndex - s.params.slidesPerView; i < s.activeIndex ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
        
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function () {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function () {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        

        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            set: function () {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = isH() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
                
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
        
                if (isH()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                }
                else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
        
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                }
                else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function () {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
                
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && isH()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    }
                    else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                }
                else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    }
                    else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (isH()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    }
                    else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');   
                    }
                    sb.drag[0].style.width = newSize + 'px';
                }
                else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    }
                    else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');   
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function (duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };

        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function (x, y) {
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1, i3;
                var l = this.x.length;
        
                this.interpolate = function (x2) {
                    if (!x2) return 0;
        
                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
        
                    // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
        
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    };
                })();
            },
            //xxx: for now i will just save one spline function to to 
            getInterpolateFunction: function(c){
                if(!s.controller.spline) s.controller.spline = s.params.loop ? 
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function (translate, byController) {
               var controlled = s.params.control;
               var multiplier, controlledTranslate;
               function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance 
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
                        
                    if(!controlledTranslate || s.params.controlBy === 'container'){
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
                   
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
               }
               if (s.isArray(controlled)) {
                   for (var i = 0; i < controlled.length; i++) {
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                           setControlledTranslate(controlled[i]);
                       }
                   }
               }
               else if (controlled instanceof Swiper && byController !== controlled) {
        
                   setControlledTranslate(controlled);
               }
            },
            setTransition: function (duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function(){
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
                            
                        });
                    }
                }
                if (s.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                }
                else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };

        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            init: function () {
                if (!s.params.hashnav) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (!hash) return;
                var speed = 0;
                for (var i = 0, length = s.slides.length; i < length; i++) {
                    var slide = s.slides.eq(i);
                    var slideHash = slide.attr('data-hash');
                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                        var index = slide.index();
                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                    }
                }
            },
            setHash: function () {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
            }
        };

        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!s.params.allowSwipeToNext && (isH() && kc === 39 || !isH() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (isH() && kc === 37 || !isH() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + s.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + s.height],
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
                ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
        
                }
                if (!inView) return;
            }
            if (isH()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
            }
            else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
        }
        s.disableKeyboardControl = function () {
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            $(document).on('keydown', handleKeyboard);
        };
        

        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        if (s.params.mousewheelControl) {
            try {
                new window.WheelEvent('wheel');
                s.mousewheel.event = 'wheel';
            } catch (e) {}
        
            if (!s.mousewheel.event && document.onmousewheel !== undefined) {
                s.mousewheel.event = 'mousewheel';
            }
            if (!s.mousewheel.event) {
                s.mousewheel.event = 'DOMMouseScroll';
            }
        }
        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var we = s.mousewheel.event;
            var delta = 0;
            //Opera & IE
            if (e.detail) delta = -e.detail;
            //WebKits
            else if (we === 'mousewheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (isH()) {
                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX;
                        else return;
                    }
                    else {
                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                        else return;
                    }
                }
                else {
                    delta = e.wheelDelta;
                }
            }
            //Old FireFox
            else if (we === 'DOMMouseScroll') delta = -e.detail;
            //New FireFox
            else if (we === 'wheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (isH()) {
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX;
                        else return;
                    }
                    else {
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                        else return;
                    }
                }
                else {
                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX : - e.deltaY;
                }
            }
        
            if (s.params.mousewheelInvert) delta = -delta;
        
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                    else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
        
            }
            else {
                //Freemode or scrollContainer:
        
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
        
                if (position > 0) position = 0;
                if (position < s.maxTranslate()) position = s.maxTranslate();
        
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
        
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                }
        
                // Return page scroll on edge positions
                if (position === 0 || position === s.maxTranslate()) return;
            }
            if (s.params.autoplay) s.stopAutoplay();
        
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            s.container.off(s.mousewheel.event, handleMousewheel);
            return true;
        };
        
        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            s.container.on(s.mousewheel.event, handleMousewheel);
            return true;
        };

        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            }
            else {
                if (isH()) {
                    pX = p;
                    pY = '0';
                }
                else {
                    pY = p;
                    pX = '0';
                }
            }
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress + '%';
            }
            else {
                pX = pX * progress + 'px' ;
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            }
            else {
                pY = pY * progress + 'px' ;
            }
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }   
        s.parallax = {
            setTranslate: function () {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);
                    
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function (duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        

        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };

        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName (eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                }
                else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {
        
        };
        s.emit = function (eventName) {
            // Trigger callbacks
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            // Trigger events
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            // Trigger plugins
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                // Remove all handlers for such event
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function () {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };

        // Accessibility tools
        s.a11y = {
            makeFocusable: function ($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function ($el, role) {
                $el.attr('role', role);
                return $el;
            },
        
            addLabel: function ($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
        
            disable: function ($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
        
            enable: function ($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
        
            onEnterKey: function (event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                }
                else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
        
            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
        
            notify: function (message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function () {
                // Setup accessibility
                if (s.params.nextButton) {
                    var nextButton = $(s.params.nextButton);
                    s.a11y.makeFocusable(nextButton);
                    s.a11y.addRole(nextButton, 'button');
                    s.a11y.addLabel(nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton) {
                    var prevButton = $(s.params.prevButton);
                    s.a11y.makeFocusable(prevButton);
                    s.a11y.addRole(prevButton, 'button');
                    s.a11y.addLabel(prevButton, s.params.prevSlideMessage);
                }
        
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function () {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function () {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };
        

        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            }
            else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };
        
        // Cleanup dynamic styles
        s.cleanupStyles = function () {
            // Container
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
        
            // Wrapper
            s.wrapper.removeAttr('style');
        
            // Slides
            if (s.slides && s.slides.length) {
                s.slides
                    .removeClass([
                      s.params.slideVisibleClass,
                      s.params.slideActiveClass,
                      s.params.slideNextClass,
                      s.params.slidePrevClass
                    ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }

            // Pagination/Bullets
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
        
            // Buttons
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
        
            // Scrollbar
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };
        
        // Destroy
        s.destroy = function (deleteInstance, cleanupStyles) {
            // Detach evebts
            s.detachEvents();
            // Stop autoplay
            s.stopAutoplay();
            // Destroy loop
            if (s.params.loop) {
                s.destroyLoop();
            }
            // Cleanup styles
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            // Disconnect observer
            s.disconnectObservers();
            // Disable keyboard/mousewheel
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            // Disable a11y
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            // Destroy callback
            s.emit('onDestroy');
            // Delete instance
            if (deleteInstance !== false) s = null;
        };
        
        s.init();
        

    
        // Return swiper instance
        return s;
    };
    

    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: (function () {
            var ua = navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function () {
            var ua = navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),
    
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),
    
            flexbox: (function () {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            })(),
    
            observer: (function () {
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
            })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };
    

    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
    	if (window[swiperDomPlugins[i]]) {
    		addLibraryPlugin(window[swiperDomPlugins[i]]);
    	}
    }
    // Required DOM Plugins
    var domLib;
    if (typeof Dom7 === 'undefined') {
    	domLib = window.Dom7 || window.Zepto || window.jQuery;
    }
    else {
    	domLib = Dom7;
    }

    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }
    
    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
    }

    window.Swiper = Swiper;
})();
/*===========================
Swiper AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Swiper;
    });
};
/*!
 * jQuery Browser Plugin 0.0.8
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */!function(a){"function"==typeof define&&define.amd?define(["jquery.browser"],function(b){return a(b)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){"use strict";function b(a){void 0===a&&(a=window.navigator.userAgent),a=a.toLowerCase();var b=/(edge)\/([\w.]+)/.exec(a)||/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(ipod)/.exec(a)||/(iphone)/.exec(a)||/(kindle)/.exec(a)||/(silk)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||/(playbook)/.exec(a)||/(bb)/.exec(a)||/(blackberry)/.exec(a)||[],d={},e={browser:b[5]||b[3]||b[1]||"",version:b[2]||b[4]||"0",versionNumber:b[4]||b[2]||"0",platform:c[0]||""};if(e.browser&&(d[e.browser]=!0,d.version=e.version,d.versionNumber=parseInt(e.versionNumber,10)),e.platform&&(d[e.platform]=!0),(d.android||d.bb||d.blackberry||d.ipad||d.iphone||d.ipod||d.kindle||d.playbook||d.silk||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv||d.edge){var f="msie";e.browser=f,d[f]=!0}if(d.safari&&d.blackberry){var g="blackberry";e.browser=g,d[g]=!0}if(d.safari&&d.playbook){var h="playbook";e.browser=h,d[h]=!0}if(d.bb){var i="blackberry";e.browser=i,d[i]=!0}if(d.opr){var j="opera";e.browser=j,d[j]=!0}if(d.safari&&d.android){var k="android";e.browser=k,d[k]=!0}if(d.safari&&d.kindle){var l="kindle";e.browser=l,d[l]=!0}if(d.safari&&d.silk){var m="silk";e.browser=m,d[m]=!0}return d.name=e.browser,d.platform=e.platform,d}return window.jQBrowser=b(window.navigator.userAgent),window.jQBrowser.uaMatch=b,a&&(a.browser=window.jQBrowser),window.jQBrowser});;
/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
;
/**
 * @file
 * Progress bar.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *   The id for the progress bar.
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      '</div>';
  };

  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * Method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * @example
   * pb = new Drupal.ProgressBar('myProgressBar');
   * some_element.appendChild(pb.element);
   *
   * @constructor
   *
   * @param {string} id
   *   The id for the progressbar.
   * @param {function} updateCallback
   *   Callback to run on update.
   * @param {string} method
   *   HTTP method to use.
   * @param {function} errorCallback
   *   Callback to call on error.
   */
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after
    // users
    // have completed their current activity and not interrupt the screen
    // reader.
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, /** @lends Drupal.ProgressBar# */{

    /**
     * Set the percentage and status message for the progressbar.
     *
     * @param {number} percentage
     *   The progress percentage.
     * @param {string} message
     *   The message to show the user.
     * @param {string} label
     *   The text for the progressbar label.
     */
    setProgress: function (percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },

    /**
     * Start monitoring progress via Ajax.
     *
     * @param {string} uri
     *   The URI to use for monitoring.
     * @param {number} delay
     *   The delay for calling the monitoring URI.
     */
    startMonitoring: function (uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },

    /**
     * Stop monitoring progress via Ajax.
     */
    stopMonitoring: function () {
      clearTimeout(this.timer);
      // This allows monitoring to be stopped from within the callback.
      this.uri = null;
    },

    /**
     * Request progress data from server.
     */
    sendPing: function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        // When doing a post request, you need non-null data. Otherwise a
        // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        }
        else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function (progress) {
            // Display errors.
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            // Update display.
            pb.setProgress(progress.percentage, progress.message, progress.label);
            // Schedule next timer.
            pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
          },
          error: function (xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },

    /**
     * Display errors on the page.
     *
     * @param {string} string
     *   The error message to show the user.
     */
    displayError: function (string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });

})(jQuery, Drupal);
;
(function (Drupal) {

  'use strict';

  /**
   * Call picturefill so newly added responsive images are processed.
   */
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function () {
      if (window.picturefill) {
        window.picturefill();
      }
    }
  };

})(Drupal);
;
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function ($, window, Drupal, drupalSettings) {

  'use strict';

  /**
   * Attaches the Ajax behavior to each Ajax form element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Initialize all {@link Drupal.Ajax} objects declared in
   *   `drupalSettings.ajax` or initialize {@link Drupal.Ajax} objects from
   *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
   * @prop {Drupal~behaviorDetach} detach
   *   During `unload` remove all {@link Drupal.Ajax} objects related to
   *   the removed content.
   */
  Drupal.behaviors.AJAX = {
    attach: function (context, settings) {

      function loadAjaxBehavior(base) {
        var element_settings = settings.ajax[base];
        if (typeof element_settings.selector === 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).once('drupal-ajax').each(function () {
          element_settings.element = this;
          element_settings.base = base;
          Drupal.ajax(element_settings);
        });
      }

      // Load all Ajax behaviors specified in the settings.
      for (var base in settings.ajax) {
        if (settings.ajax.hasOwnProperty(base)) {
          loadAjaxBehavior(base);
        }
      }

      // Bind Ajax behaviors to all items showing the class.
      $('.use-ajax').once('ajax').each(function () {
        var element_settings = {};
        // Clicked links look better with the throbber than the progress bar.
        element_settings.progress = {type: 'throbber'};

        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.
        var href = $(this).attr('href');
        if (href) {
          element_settings.url = href;
          element_settings.event = 'click';
        }
        element_settings.dialogType = $(this).data('dialog-type');
        element_settings.dialog = $(this).data('dialog-options');
        element_settings.base = $(this).attr('id');
        element_settings.element = this;
        Drupal.ajax(element_settings);
      });

      // This class means to submit the form to the action using Ajax.
      $('.use-ajax-submit').once('ajax').each(function () {
        var element_settings = {};

        // Ajax submits specified in this manner automatically submit to the
        // normal form action.
        element_settings.url = $(this.form).attr('action');
        // Form submit button clicks need to tell the form what was clicked so
        // it gets passed in the POST request.
        element_settings.setClick = true;
        // Form buttons use the 'click' event rather than mousedown.
        element_settings.event = 'click';
        // Clicked form buttons look better with the throbber than the progress
        // bar.
        element_settings.progress = {type: 'throbber'};
        element_settings.base = $(this).attr('id');
        element_settings.element = this;

        Drupal.ajax(element_settings);
      });
    },

    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          // Set this to null and allow garbage collection to reclaim
          // the memory.
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  /**
   * Extends Error to provide handling for Errors in Ajax.
   *
   * @constructor
   *
   * @augments Error
   *
   * @param {XMLHttpRequest} xmlhttp
   *   XMLHttpRequest object used for the failed request.
   * @param {string} uri
   *   The URI where the error occurred.
   * @param {string} customMessage
   *   The custom message.
   */
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {

    var statusCode;
    var statusText;
    var pathText;
    var responseText;
    var readyStateText;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xmlhttp.status});
    }
    else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    pathText = '\n' + Drupal.t('Path: !uri', {'!uri': uri});
    statusText = '';
    // In some cases, when statusCode === 0, xmlhttp.statusText may not be
    // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
    // catch that and the test causes an exception. So we need to catch the
    // exception here.
    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {'!statusText': $.trim(xmlhttp.statusText)});
    }
    catch (e) {
      // Empty.
    }

    responseText = '';
    // Again, we don't have a way to know for sure whether accessing
    // xmlhttp.responseText is going to throw an exception. So we'll catch it.
    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': $.trim(xmlhttp.responseText)});
    }
    catch (e) {
      // Empty.
    }

    // Make the responseText more readable by stripping HTML tags and newlines.
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    // We don't need readyState except for status == 0.
    readyStateText = xmlhttp.status === 0 ? ('\n' + Drupal.t('ReadyState: !readyState', {'!readyState': xmlhttp.readyState})) : '';

    customMessage = customMessage ? ('\n' + Drupal.t('CustomMessage: !customMessage', {'!customMessage': customMessage})) : '';

    /**
     * Formatted and translated error message.
     *
     * @type {string}
     */
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    /**
     * Used by some browsers to display a more accurate stack trace.
     *
     * @type {string}
     */
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  /**
   * Provides Ajax page updating via jQuery $.ajax.
   *
   * This function is designed to improve developer experience by wrapping the
   * initialization of {@link Drupal.Ajax} objects and storing all created
   * objects in the {@link Drupal.ajax.instances} array.
   *
   * @example
   * Drupal.behaviors.myCustomAJAXStuff = {
   *   attach: function (context, settings) {
   *
   *     var ajaxSettings = {
   *       url: 'my/url/path',
   *       // If the old version of Drupal.ajax() needs to be used those
   *       // properties can be added
   *       base: 'myBase',
   *       element: $(context).find('.someElement')
   *     };
   *
   *     var myAjaxObject = Drupal.ajax(ajaxSettings);
   *
   *     // Declare a new Ajax command specifically for this Ajax object.
   *     myAjaxObject.commands.insert = function (ajax, response, status) {
   *       $('#my-wrapper').append(response.data);
   *       alert('New content was appended to #my-wrapper');
   *     };
   *
   *     // This command will remove this Ajax object from the page.
   *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
   *       Drupal.ajax.instances[this.instanceIndex] = null;
   *     };
   *
   *     // Programmatically trigger the Ajax request.
   *     myAjaxObject.execute();
   *   }
   * };
   *
   * @param {object} settings
   *   The settings object passed to {@link Drupal.Ajax} constructor.
   * @param {string} [settings.base]
   *   Base is passed to {@link Drupal.Ajax} constructor as the 'base'
   *   parameter.
   * @param {HTMLElement} [settings.element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   *
   * @return {Drupal.Ajax}
   *   The created Ajax object.
   *
   * @see Drupal.AjaxCommands
   */
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    // Map those config keys to variables for the old Drupal.ajax function.
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    // By default do not display progress for ajax calls without an element.
    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  /**
   * Contains all created Ajax objects.
   *
   * @type {Array.<Drupal.Ajax|null>}
   */
  Drupal.ajax.instances = [];

  /**
   * List all objects where the associated element is not in the DOM
   *
   * This method ignores {@link Drupal.Ajax} objects not bound to DOM elements
   * when created with {@link Drupal.ajax}.
   *
   * @return {Array.<Drupal.Ajax>}
   *   The list of expired {@link Drupal.Ajax} objects.
   */
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  /**
   * Settings for an Ajax object.
   *
   * @typedef {object} Drupal.Ajax~element_settings
   *
   * @prop {string} url
   *   Target of the Ajax request.
   * @prop {?string} [event]
   *   Event bound to settings.element which will trigger the Ajax request.
   * @prop {bool} [keypress=true]
   *   Triggers a request on keypress events.
   * @prop {?string} selector
   *   jQuery selector targeting the element to bind events to or used with
   *   {@link Drupal.AjaxCommands}.
   * @prop {string} [effect='none']
   *   Name of the jQuery method to use for displaying new Ajax content.
   * @prop {string|number} [speed='none']
   *   Speed with which to apply the effect.
   * @prop {string} [method]
   *   Name of the jQuery method used to insert new content in the targeted
   *   element.
   * @prop {object} [progress]
   *   Settings for the display of a user-friendly loader.
   * @prop {string} [progress.type='throbber']
   *   Type of progress element, core provides `'bar'`, `'throbber'` and
   *   `'fullscreen'`.
   * @prop {string} [progress.message=Drupal.t('Please wait...')]
   *   Custom message to be used with the bar indicator.
   * @prop {object} [submit]
   *   Extra data to be sent with the Ajax request.
   * @prop {bool} [submit.js=true]
   *   Allows the PHP side to know this comes from an Ajax request.
   * @prop {object} [dialog]
   *   Options for {@link Drupal.dialog}.
   * @prop {string} [dialogType]
   *   One of `'modal'` or `'dialog'`.
   * @prop {string} [prevent]
   *   List of events on which to stop default action and stop propagation.
   */

  /**
   * Ajax constructor.
   *
   * The Ajax request returns an array of commands encoded in JSON, which is
   * then executed to make any changes that are necessary to the page.
   *
   * Drupal uses this file to enhance form elements with `#ajax['url']` and
   * `#ajax['wrapper']` properties. If set, this file will automatically be
   * included to provide Ajax capabilities.
   *
   * @constructor
   *
   * @param {string} [base]
   *   Base parameter of {@link Drupal.Ajax} constructor
   * @param {HTMLElement} [element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   * @param {Drupal.Ajax~element_settings} element_settings
   *   Settings for this Ajax object.
   */
  Drupal.Ajax = function (base, element, element_settings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, element_settings);

    /**
     * @type {Drupal.AjaxCommands}
     */
    this.commands = new Drupal.AjaxCommands();

    /**
     * @type {bool|number}
     */
    this.instanceIndex = false;

    // @todo Remove this after refactoring the PHP code to:
    //   - Call this 'selector'.
    //   - Include the '#' for ID-based selectors.
    //   - Support non-ID-based selectors.
    if (this.wrapper) {

      /**
       * @type {string}
       */
      this.wrapper = '#' + this.wrapper;
    }

    /**
     * @type {HTMLElement}
     */
    this.element = element;

    /**
     * @type {Drupal.Ajax~element_settings}
     */
    this.element_settings = element_settings;

    // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
    // bind Ajax to links as well.
    if (this.element && this.element.form) {

      /**
       * @type {jQuery}
       */
      this.$form = $(this.element.form);
    }

    // If no Ajax callback URL was given, use the link href or form action.
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      }
      else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
    // the server detect when it needs to degrade gracefully.
    // There are four scenarios to check for:
    // 1. /nojs/
    // 2. /nojs$ - The end of a URL string.
    // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
    // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#myfragment).
    var originalUrl = this.url;

    /**
     * Processed Ajax URL.
     *
     * @type {string}
     */
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');
    // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
    // version.
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    // Set the options for the ajaxSubmit function.
    // The 'this' variable will not persist inside of the options object.
    var ajax = this;

    /**
     * Options for the jQuery.ajax function.
     *
     * @name Drupal.Ajax#options
     *
     * @type {object}
     *
     * @prop {string} url
     *   Ajax URL to be called.
     * @prop {object} data
     *   Ajax payload.
     * @prop {function} beforeSerialize
     *   Implement jQuery beforeSerialize function to call
     *   {@link Drupal.Ajax#beforeSerialize}.
     * @prop {function} beforeSubmit
     *   Implement jQuery beforeSubmit function to call
     *   {@link Drupal.Ajax#beforeSubmit}.
     * @prop {function} beforeSend
     *   Implement jQuery beforeSend function to call
     *   {@link Drupal.Ajax#beforeSend}.
     * @prop {function} success
     *   Implement jQuery success function to call
     *   {@link Drupal.Ajax#success}.
     * @prop {function} complete
     *   Implement jQuery success function to clean up ajax state and trigger an
     *   error if needed.
     * @prop {string} dataType='json'
     *   Type of the response expected.
     * @prop {string} type='POST'
     *   HTTP method to use for the Ajax request.
     */
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function (element_settings, options) {
        return ajax.beforeSerialize(element_settings, options);
      },
      beforeSubmit: function (form_values, element_settings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(form_values, element_settings, options);
      },
      beforeSend: function (xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function (response, status, xmlhttprequest) {
        // Sanity check for browser support (object expected).
        // When using iFrame uploads, responses must be returned as a string.
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        // Prior to invoking the response's commands, verify that they can be
        // trusted by checking for a response header. See
        // \Drupal\Core\EventSubscriber\AjaxResponseSubscriber for details.
        // - Empty responses are harmless so can bypass verification. This
        //   avoids an alert message for server-generated no-op responses that
        //   skip Ajax rendering.
        // - Ajax objects with trusted URLs (e.g., ones defined server-side via
        //   #ajax) can bypass header verification. This is especially useful
        //   for Ajax with multipart forms. Because IFRAME transport is used,
        //   the response headers cannot be accessed for verification.
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function (xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      type: 'POST'
    };

    if (element_settings.dialog) {
      ajax.options.data.dialogOptions = element_settings.dialog;
    }

    // Ensure that we have a valid URL by adding ? when no query parameter is
    // yet available, otherwise append using &.
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    }
    else {
      ajax.options.url += '&';
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=drupal_' + (element_settings.dialogType || 'ajax');

    // Bind the ajaxSubmit function to the element event.
    $(ajax.element).on(element_settings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {'!url': ajax.url}));
      }
      return ajax.eventResponse(this, event);
    });

    // If necessary, enable keyboard submission so that Ajax behaviors
    // can be triggered through keyboard input as well as e.g. a mousedown
    // action.
    if (element_settings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    // If necessary, prevent the browser default action of an additional event.
    // For example, prevent the browser default action of a click, even if the
    // Ajax behavior binds to mousedown.
    if (element_settings.prevent) {
      $(ajax.element).on(element_settings.prevent, false);
    }
  };

  /**
   * URL query attribute to indicate the wrapper used to render a request.
   *
   * The wrapper format determines how the HTML is wrapped, for example in a
   * modal dialog.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  /**
   * Request parameter to indicate that a request is a Drupal Ajax request.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  /**
   * Execute the ajax request.
   *
   * Allows developers to execute an Ajax request manually without specifying
   * an event to respond to.
   *
   * @return {object}
   *   Returns the jQuery.Deferred object underlying the Ajax request. If
   *   pre-serialization fails, the Deferred will be returned in the rejected
   *   state.
   */
  Drupal.Ajax.prototype.execute = function () {
    // Do not perform another ajax command if one is already in progress.
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      // Return the jqXHR so that external code can hook into the Deferred API.
      return $.ajax(this.options);
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);
      // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
      // so that calling code can take appropriate action.
      return $.Deferred().reject();
    }
  };

  /**
   * Handle a key press.
   *
   * The Ajax object will, if instructed, bind to a key press response. This
   * will test to see if the key press is valid to trigger this event and
   * if it is, trigger it for us and prevent other keypresses from triggering.
   * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
   * and 32. RETURN is often used to submit a form when in a textfield, and
   * SPACE is often used to activate an element without submitting.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Detect enter key and space bar and allow the standard response for them,
    // except for form elements of type 'text', 'tel', 'number' and 'textarea',
    // where the spacebar activation causes inappropriate activation if
    // #ajax['keypress'] is TRUE. On a text-type widget a space should always
    // be a space.
    if (event.which === 13 || (event.which === 32 && element.type !== 'text' &&
      element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number')) {
      event.preventDefault();
      event.stopPropagation();
      $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    }
  };

  /**
   * Handle an event that triggers an Ajax response.
   *
   * When an event that triggers an Ajax response happens, this method will
   * perform the actual Ajax call. It is bound to the event using
   * bind() in the constructor, and it uses the options specified on the
   * Ajax object.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Do not perform another Ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        // If setClick is set, we must set this to ensure that the button's
        // value is passed.
        if (ajax.setClick) {
          // Mark the clicked button. 'form.clk' is a special variable for
          // ajaxSubmit that tells the system which element got clicked to
          // trigger the submit. Without it there would be no 'op' or
          // equivalent.
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      }
      else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  /**
   * Handler for the form serialization.
   *
   * Runs before the beforeSend() handler (see below), and unlike that one, runs
   * before field data is collected.
   *
   * @param {object} [element]
   *   Ajax object's `element_settings`.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Allow detaching behaviors to update field values before collecting them.
    // This is only needed when field values are added to the POST data, so only
    // when there is a form such that this.$form.ajaxSubmit() is used instead of
    // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
    // isn't called, but don't rely on that: explicitly check this.$form.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    // Inform Drupal that this is an AJAX request.
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    // Allow Drupal to return new JavaScript and CSS files to load without
    // returning the ones already loaded.
    // @see \Drupal\Core\Theme\AjaxBasePageNegotiator
    // @see \Drupal\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
    // @see system_js_settings_alter()
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  /**
   * Modify form values prior to form submission.
   *
   * @param {Array.<object>} form_values
   *   Processed form values.
   * @param {jQuery} element
   *   The form node as a jQuery object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSubmit = function (form_values, element, options) {
    // This function is left empty to make it simple to override for modules
    // that wish to add functionality here.
  };

  /**
   * Prepare the Ajax request before it is sent.
   *
   * @param {XMLHttpRequest} xmlhttprequest
   *   Native Ajax object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    // For forms without file inputs, the jQuery Form plugin serializes the
    // form values, and then calls jQuery's $.ajax() function, which invokes
    // this handler. In this circumstance, options.extraData is never used. For
    // forms with file inputs, the jQuery Form plugin uses the browser's normal
    // form submission mechanism, but captures the response in a hidden IFRAME.
    // In this circumstance, it calls this handler first, and then appends
    // hidden fields to the form to submit the values in options.extraData.
    // There is no simple way to know which submission mechanism will be used,
    // so we add to extraData regardless, and allow it to be ignored in the
    // former case.
    if (this.$form) {
      options.extraData = options.extraData || {};

      // Let the server know when the IFRAME submission mechanism is used. The
      // server can use this information to wrap the JSON response in a
      // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
      options.extraData.ajax_iframe_upload = '1';

      // The triggering element is about to be disabled (see below), but if it
      // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
      // that value is included in the submission. As per above, submissions
      // that use $.ajax() are already serialized prior to the element being
      // disabled, so this is only needed for IFRAME submissions.
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    // Disable the element that received the change to prevent user interface
    // interaction while the Ajax request is in progress. ajax.ajaxing prevents
    // the element from triggering a new request, but does not prevent the user
    // from changing its value.
    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    // Insert progress indicator.
    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  /**
   * Sets the progress bar progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the fullscreen progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    // If the focus hasn't be changed by the ajax commands, try to refocus the
    // triggering element or one of its parents if that element does not exist
    // anymore.
    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    // Reattach behaviors, if they were detached in beforeSerialize(). The
    // attachBehaviors() called on the new content from processing the response
    // commands is not sufficient, because behaviors from the entire form need
    // to be reattached.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    // Remove any response-specific settings so they don't get used on the next
    // call by mistake.
    this.settings = null;
  };

  /**
   * Build an effect object to apply an effect when adding new HTML.
   *
   * @param {object} response
   *   Drupal Ajax response.
   * @param {string} [response.effect]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   * @param {string|number} [response.speed]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   *
   * @return {object}
   *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
   *   properties.
   */
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    }
    else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    }
    else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  /**
   * Handler for the form redirection error.
   *
   * @param {object} xmlhttprequest
   *   Native XMLHttpRequest object.
   * @param {string} uri
   *   Ajax Request URI.
   * @param {string} [customMessage]
   *   Extra message to print with the Ajax error.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    // Undo hide.
    $(this.wrapper).show();
    // Re-enable the element.
    $(this.element).prop('disabled', false);
    // Reattach behaviors, if they were detached in beforeSerialize().
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  /**
   * @typedef {object} Drupal.AjaxCommands~commandDefinition
   *
   * @prop {string} command
   * @prop {string} [method]
   * @prop {string} [selector]
   * @prop {string} [data]
   * @prop {object} [settings]
   * @prop {bool} [asterisk]
   * @prop {string} [text]
   * @prop {string} [title]
   * @prop {string} [url]
   * @prop {object} [argument]
   * @prop {string} [name]
   * @prop {string} [value]
   * @prop {string} [old]
   * @prop {string} [new]
   * @prop {bool} [merge]
   * @prop {Array} [args]
   *
   * @see Drupal.AjaxCommands
   */

  /**
   * Provide a series of commands that the client will perform.
   *
   * @constructor
   */
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {

    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   A optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    insert: function (ajax, response, status) {
      // Get information from the response. If it is not there, default to
      // our presets.
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings;

      // We don't know what response.data contains: it might be a string of text
      // without HTML, so don't rely on jQuery correctly interpreting
      // $(response.data) as new HTML rather than a CSS selector. Also, if
      // response.data contains top-level text nodes, they get lost with either
      // $(response.data) or $('<div></div>').replaceWith(response.data).
      var $new_content_wrapped = $('<div></div>').html(response.data);
      var $new_content = $new_content_wrapped.contents();

      // For legacy reasons, the effects processing code assumes that
      // $new_content consists of a single top-level element. Also, it has not
      // been sufficiently tested whether attachBehaviors() can be successfully
      // called with a context object that includes top-level text nodes.
      // However, to give developers full control of the HTML appearing in the
      // page, and to enable Ajax content to be inserted in places where <div>
      // elements are not allowed (e.g., within <table>, <tr>, and <span>
      // parents), we check if the new content satisfies the requirement
      // of a single top-level element, and only use the container <div> created
      // above when it doesn't. For more information, please see
      // https://www.drupal.org/node/736066.
      if ($new_content.length !== 1 || $new_content.get(0).nodeType !== 1) {
        $new_content = $new_content_wrapped;
      }

      // If removing content from the wrapper, detach behaviors first.
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      // Add the new content to the page.
      $wrapper[method]($new_content);

      // Immediately hide the new content if we're using any effects.
      if (effect.showEffect !== 'show') {
        $new_content.hide();
      }

      // Determine which effect to use and what content will receive the
      // effect, then show the new content.
      if ($new_content.find('.ajax-new-content').length > 0) {
        $new_content.find('.ajax-new-content').hide();
        $new_content.show();
        $new_content.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      }
      else if (effect.showEffect !== 'show') {
        $new_content[effect.showEffect](effect.showSpeed);
      }

      // Attach all JavaScript behaviors to the new content, if it was
      // successfully added to the page, this if statement allows
      // `#ajax['wrapper']` to be optional.
      if ($new_content.parents('html').length > 0) {
        // Apply any settings from the returned JSON if available.
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($new_content.get(0), settings);
      }
    },

    /**
     * Command to remove a chunk from the page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    remove: function (ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      })
        .remove();
    },

    /**
     * Command to mark a chunk changed.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response object from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {bool} [response.asterisk]
     *   An optional CSS selector. If specified, an asterisk will be
     *   appended to the HTML inside the provided selector.
     * @param {number} [status]
     *   The request status.
     */
    changed: function (ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },

    /**
     * Command to provide an alert.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} response.text
     *   The text that will be displayed in an alert dialog.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    alert: function (ajax, response, status) {
      window.alert(response.text, response.title);
    },

    /**
     * Command to set the window.location, redirecting the browser.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    redirect: function (ajax, response, status) {
      window.location = response.url;
    },

    /**
     * Command to provide the jQuery css() function.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} response.argument
     *   An array of key/value pairs to set in the CSS for the selector.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    css: function (ajax, response, status) {
      $(response.selector).css(response.argument);
    },

    /**
     * Command to set the settings used for other commands in this response.
     *
     * This method will also remove expired `drupalSettings.ajax` settings.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {bool} response.merge
     *   Determines whether the additional settings should be merged to the
     *   global settings.
     * @param {object} response.settings
     *   Contains additional settings to add to the global settings.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    settings: function (ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      // Clean up drupalSettings.ajax.
      Drupal.ajax.expired().forEach(function (instance) {
        // If the Ajax object has been created through drupalSettings.ajax
        // it will have a selector. When there is no selector the object
        // has been initialized with a special class name picked up by the
        // Ajax behavior.
        if (instance.selector) {
          var selector = instance.selector.replace('#', '');
          if (ajaxSettings && selector in ajaxSettings) {
            delete ajaxSettings[selector];
          }
        }
      });

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      }
      else {
        ajax.settings = response.settings;
      }
    },

    /**
     * Command to attach data using jQuery's data API.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.name
     *   The name or key (in the key value pair) of the data attached to this
     *   selector.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {string|object} response.value
     *   The value of to be attached.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    data: function (ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },

    /**
     * Command to apply a jQuery method.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.args
     *   An array of arguments to the jQuery method, if any.
     * @param {string} response.method
     *   The jQuery method to invoke.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    invoke: function (ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, response.args);
    },

    /**
     * Command to restripe a table.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    restripe: function (ajax, response, status) {
      // :even and :odd are reversed because jQuery counts from 0 and
      // we count from 1, so we're out of sync.
      // Match immediate children of the parent element to allow nesting.
      $(response.selector).find('> tbody > tr:visible, > tr:visible')
        .removeClass('odd even')
        .filter(':even').addClass('odd').end()
        .filter(':odd').addClass('even');
    },

    /**
     * Command to update a form's build ID.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.old
     *   The old form build ID.
     * @param {string} response.new
     *   The new form build ID.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    update_build_id: function (ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },

    /**
     * Command to add css.
     *
     * Uses the proprietary addImport method if available as browsers which
     * support that method ignore @import statements in dynamically added
     * stylesheets.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   A string that contains the styles to be added.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_css: function (ajax, response, status) {
      // Add the styles in the normal way.
      $('head').prepend(response.data);
      // Add imports in the styles using the addImport method if available.
      var match;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };

})(jQuery, window, Drupal, drupalSettings);
;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
// Define View Manager to manage view states
window.BM = window.BM || {};

// BM.views hold all references to existing views
BM.views = BM.views || {};
BM.models = BM.models || {};

// Close existing view
BM.closeView = function (name) {
  if (typeof BM.views[name] !== 'undefined') {
    // Cleanup view
    // Remove all of the view's delegated events
    BM.views[name].undelegateEvents();
    // Remove view from the DOM
    BM.views[name].remove();
    // Removes all callbacks on view
    BM.views[name].off();

    if (typeof BM.views[name].close === 'function') {
      BM.views[name].close();
    }
  }
};

// BM.createView always cleans up existing view before
// creating a new one.
// callback function always return a new view instance
BM.createView = function (name, pComponent) {
  BM.closeView(name);
  BM.views[name] = pComponent;
  return BM.views[name];
};

// BM.reuseView always returns existing view. Otherwise it
// execute callback function to return new view
// callback function always return a new view instance
BM.reuseView = function (name, pComponent) {
  if (typeof BM.views[name] !== 'undefined') {
    return BM.views[name];
  }

  BM.views[name] = pComponent;
  return BM.views[name];
};

/**
 * MODELS
 */

BM.clearModel = function (name) {
  if (typeof BM.models[name] !== 'undefined') {

    // Cleanup model
    BM.models[name].clear();

    if (typeof BM.views[name].destroy === 'function') {
      BM.views[name].destroy();
    }
  }
};

/**
 * Create Model
 * @param name
 * @param pModel
 * @returns {BackboneModel}
 */

BM.createModel = function (name, pModel) {
  BM.clearModel(name);
  BM.models[name] = pModel;
  return BM.models[name];
};

/**
 * ReuseModel
 * @param name
 * @param pModel
 * @returns {BackboneModel}
 */

BM.reuseModel = function (name, pModel) {
  if (typeof BM.models[name] !== 'undefined') {
    return BM.models[name];
  }

  BM.models[name] = pModel;
  return BM.models[name];
};
;
(function ($, Drupal, drupalSettings, Backbone, window) {

    "use strict";

    window.BurdaInfinite = {
        views: {
            base: {}
        },
        managers: {},
        models: {
            base: {}
        }
    };

    Drupal.behaviors.burdaInfinite = {
        attach: function (context) {
            var $context = $(context);

            $('body').once(ViewIds.mainView).each(function () {
                var mainView = new MainView({el: $context, id: ViewIds.mainView});
                BM.reuseView(ViewIds.mainView, mainView);
            });
        }
    };

})(jQuery, Drupal, drupalSettings, Backbone, window);
;
(function ($, Drupal) {

    "use strict";

    /**
     * Override thunder ad logic
     */
    Drupal.behaviors.place_ads = {
        attach: function (context, settings) {

        }
    };

    function setTags(settings){

    }

})(jQuery, Drupal);
;
var AppConfig = {
    //searchApiUrl: '/themes/custom/infinite/dummy-content/lazy-loading-article.html',
    searchApiUrl: '/suche',
    padding: 10,
    feedTrackingOffset: 150,
    gtmEventName: 'gtm_event',
    gtmIndexEvent: 'gtm_index_event',
    gtmIndexPosEvent: 'gtm_index_pos_event',
    initialLocation: '/',
    initialAdsc: {},
    ad_fag: 'fag',
    ad_orbyd: 'orbyd',
    initialDocumentTitle: document.title
}
;
var ViewIds = {
  mainView: "mainView",
  menuMainView: "menuMainView",
  menuSidebarView: "menuSidebarView",
  dynamicView: "dynamicView",
  modalSearchView: "modalSearchView"
}
;
var ModelIds = {
  adscModel: "adscModel",
  menuSidebarModel: "menuSidebarModel",
  infiniteViewsModel: "infiniteViewsModel",
  modalSearchModel: "modalSearchModel",
  deviceModel: "deviceModel",
  pageOffsetsModel: "pageOffsetsModel"
}
;
var ManagerIds = {
  trackingManager: "trackingManager",
  scrollManager: "scrollManager"
}
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.managers.TrackingManager = Backbone.View.extend({
        scrollTopPos: 0,
        initialLocation: "",
        gtmEventName: "",
        gtmIndexEvent: "",
        gtmIndexPosEvent: "",
        initialize: function (pOptions) {

            _.extend(this, pOptions);

            if (!this.model.has('initialLocation') || !this.model.has('gtmEventName') || !this.model.has('gtmIndexEvent') || !this.model.has('gtmIndexPosEvent')) {
                throw new Error("TrackingManager Model Error > initialLocation | gtmEventName | gtmIndexEvent | gtmIndexPosEvent > needed");
            }

            this.initialLocation = this.model.get('initialLocation');
            this.gtmEventName = TrackingManager.gtmEventName = this.model.get('gtmEventName');
            this.gtmIndexEvent = this.model.get('gtmIndexEvent');
            this.gtmIndexPosEvent = this.model.get('gtmIndexPosEvent');
            this.scrollTopPos = $(window).scrollTop();

            this.listenTo(this.infiniteModel, 'change:inview', _.debounce(this.inviewChangeHandler, 10), this);
            this.initBaseElements();
            this.parseTrackingElements(this.$el);


            //parse on lazyloading
            this.listenTo(this.infiniteModel, 'change:infiniteBlock', function (pModel) {
                if (pModel.get('type') === 'infiniteBlockView' && pModel.get('initialDOMItem') === false) {
                    this.parseTrackingElements(pModel.get('el'));
                }
            }, this);

        },
        inviewChangeHandler: function (pModel) {
            if (this.scrollTopPos == $(window).scrollTop() || pModel.get('el').data('no-track') === true) return;

            var $tmpElement = pModel.get('el'),
                tmpInviewModel = pModel.get('inview'),
                tmpHistoryURL = $tmpElement.data('history-url'),
                tmpIndex = ($('.region-infinite-block').not('.region-infinite-block[data-no-track="true"]').index($tmpElement) + 1).toString(), //$tmpElement.parent('.infinite-item').addBack()
                tmpTrackingObject = {};

            if (tmpInviewModel.state == 'enter') {
                /**
                 * track pageView
                 */
                if (!_.isUndefined(tmpHistoryURL) && pModel.get('scrollDepthTracked') != true && pModel.get('initialDOMItem') != true) {
                    TrackingManager.trackPageView(tmpHistoryURL);
                }

                if (pModel.get('scrollDepthTracked') != true) {
                    tmpTrackingObject.event = tmpTrackingObject.category = 'scroll_depth';
                    tmpTrackingObject.depth = 'index_' + tmpIndex;
                    tmpTrackingObject.location = TrackingManager.getLocationType(this.initialLocation);

                    TrackingManager.trackEvent(tmpTrackingObject);
                    pModel.set('scrollDepthTracked', true);
                }
            }

            this.scrollTopPos = $(window).scrollTop();
        },
        initBaseElements: function () {
            $('#menu-open-btn', this.$el).click(function () {
                TrackingManager.trackEvent({category: 'click', action: 'menu_sidebar', label: 'open'});
            });

            $('#menu-sidebar .icon-close', this.$el).click(function () {
                TrackingManager.trackEvent({category: 'click', action: 'menu_sidebar', label: 'close'});
            });

            $('#menu-sidebar .menu-item a', this.$el).click(function (pEvent) {
                var $tmpItem = $(pEvent.currentTarget),
                    tmpText = $tmpItem.text();
                TrackingManager.trackEvent({category: 'click', action: 'menu_sidebar', label: tmpText});
            });

            $('#menu-sidebar .logo', this.$el).click(function (pEvent) {
                TrackingManager.trackEvent({category: 'click', action: 'menu_sidebar', label: 'logo'});
            });

            $('#menu-main-navigation .logo', this.$el).click(function (pEvent) {
                TrackingManager.trackEvent({category: 'click', action: 'main_navigation', label: 'logo'});
            });

            $('#header-home .logo', this.$el).click(function (pEvent) {
                TrackingManager.trackEvent({category: 'click', action: 'header_home', label: 'logo'});
            });

            $('#menu-main-navigation .menu-item a', this.$el).click(function (pEvent) {
                var $tmpItem = $(pEvent.currentTarget),
                    tmpText = $tmpItem.text();
                TrackingManager.trackEvent({category: 'click', action: 'main_navigation', label: tmpText});
            });

            $('#menu-submenu-navigation .menu-item a', this.$el).click(function (pEvent) {
                var $tmpItem = $(pEvent.currentTarget),
                    tmpText = $tmpItem.text();
                TrackingManager.trackEvent({category: 'click', action: 'sub_navigation', label: tmpText});
            });
        },
        parseTrackingElements: function ($pContainer) {
            var tmpSelector = '',
                $tmpItems = [];

            /**
             * Presenter Full
             */
            $tmpItems = $pContainer.find('.teaser-full-content');
            if ($tmpItems.length > 0) $tmpItems.unbind('click', this.onPresenterFullClickHandler).bind('click', $.proxy(this.onPresenterFullClickHandler, this));

            /**
             * Presenter Half
             */
            tmpSelector = '.region-presenter .teaser-landscape-medium > .img-container, .region-presenter .teaser-landscape-medium .text-headline';
            $tmpItems = $pContainer.find(tmpSelector).addBack().filter(tmpSelector);
            if ($tmpItems.length > 0) $tmpItems.unbind('click', this.onPresenterHalfClickHandler).bind('click', $.proxy(this.onPresenterHalfClickHandler, this));

            /**
             * Socials
             */
            $tmpItems = $pContainer.find('.item-social');
            if ($tmpItems.length > 0) $tmpItems.unbind('click', this.onSocialsClickHandler).bind('click', $.proxy(this.onSocialsClickHandler, this));

            /**
             * Authors
             */
            $tmpItems = $pContainer.find('.author[data-internal-url]');
            if ($tmpItems.length > 0) $tmpItems.unbind('click', this.onAuthorClickHandler).bind('click', $.proxy(this.onAuthorClickHandler, this));

            /**
             * Horizontal Teaser Block
             */
            tmpSelector = '.region-teaser-list-horizontal .teaser';
            $tmpItems = $pContainer.find(tmpSelector).addBack().filter(tmpSelector);
            if ($tmpItems.length > 0) $tmpItems.unbind('click', this.onTeaserHorizontalClickHandler).bind('click', $.proxy(this.onTeaserHorizontalClickHandler, this));

            /**
             * Feed Teaser
             */
            tmpSelector = '.region-teaser-list .img-container, .region-teaser-list .text-headline';
            $tmpItems = $pContainer.find(tmpSelector).addBack().filter(tmpSelector);
            if ($tmpItems.length > 0) $tmpItems.unbind('click', this.onFeedTeaserClickHandler).bind('click', $.proxy(this.onFeedTeaserClickHandler, this));

            /**
             * Teaser Category Link
             */
            tmpSelector = '.caption-teaser .text-category';
            $tmpItems = $pContainer.find(tmpSelector);
            if ($tmpItems.length > 0) $tmpItems.unbind('click', this.onTeaserCategoryClickHandler).bind('click', $.proxy(this.onTeaserCategoryClickHandler, this));

            /**
             * Products
             */
            $tmpItems = $pContainer.find('[data-view-type="productsView"]');
            $.each($tmpItems, $.proxy(function (pIndex, $pItem) {
                this.onProductsHandler($pItem);
            }, this));
        },
        onFeedTeaserClickHandler: function (pEvent) {
            var $tmpItem = $(pEvent.currentTarget).parents('.teaser'),
                tmpIndex = ($tmpItem.parents('.region-feed').find('.region-teaser-list .teaser').index($tmpItem) + 1),
                tmpTrackingObject = {
                    event: this.gtmIndexEvent,
                    category: 'teaser',
                    action: 'feed_teaser',
                    index: 'index_' + tmpIndex
                };

            if ($tmpItem.parents('[data-view-type]').data('view-type') != 'feedTeaserView') return;
            TrackingManager.trackEvent(tmpTrackingObject);
        },
        onTeaserCategoryClickHandler: function (pEvent) {
            var $tmpItem = $(pEvent.currentTarget),
                tmpText = $tmpItem.text();

            TrackingManager.trackEvent({
                category: 'click',
                action: 'teaser_category',
                label: tmpText,
                location: TrackingManager.getLocationType()
            });
        },
        onPresenterFullClickHandler: function (pEvent) {
            var $tmpItem = $(pEvent.currentTarget),
                tmpIndex = ($('.region-presenter').index($tmpItem) + 1),
                tmpTrackingObject = {
                    event: this.gtmIndexEvent,
                    category: 'teaser',
                    action: 'presenter_full',
                    index: 'index_' + tmpIndex
                };

            TrackingManager.trackEvent(tmpTrackingObject);
        },
        onPresenterHalfClickHandler: function (pEvent) {
            var $tmpItem = $(pEvent.currentTarget).parent('.teaser-landscape-medium'),
                tmpIndex = ($('.region-presenter .teaser-landscape-medium').index($tmpItem) + 1),
                tmpTrackingObject = {
                    event: this.gtmIndexEvent,
                    category: 'teaser',
                    action: 'presenter_half',
                    index: 'index_' + tmpIndex
                };

            TrackingManager.trackEvent(tmpTrackingObject);
        },
        onTeaserHorizontalClickHandler: function (pEvent) {
            var $tmpItem = $(pEvent.currentTarget),
                tmpIndex = ($('.region-teaser-list-horizontal').index($tmpItem.parents('.region-teaser-list-horizontal')) + 1),
                tmpItemIndex = ($tmpItem.index() + 1),
                tmpTrackingObject = {
                    event: this.gtmIndexPosEvent,
                    category: 'teaser',
                    action: 'presenter_multi',
                    index: 'index_' + tmpIndex,
                    pos: 'pos_' + tmpItemIndex
                };

            TrackingManager.trackEvent(tmpTrackingObject);
        },
        onSocialsClickHandler: function (pEvent) {
            var $tmpItem = $(pEvent.currentTarget),
                tmpTrackingObject = {category: 'social_media_buttons'},
                tmpAction = TrackingManager.getItemType($tmpItem);

            tmpTrackingObject.action = tmpAction;
            tmpTrackingObject.label = $tmpItem.find('[data-social-type]').addBack().filter('[data-social-type]').data('social-type');

            TrackingManager.trackEvent(tmpTrackingObject);
        },
        onAuthorClickHandler: function (pEvent) {
            var $tmpItem = $(pEvent.currentTarget),
                tmpTrackingObject = {category: 'author'};

            tmpTrackingObject.action = $tmpItem.find('.text-author span').text();
            tmpTrackingObject.label = TrackingManager.getItemType($tmpItem);

            TrackingManager.trackEvent(tmpTrackingObject);
        },
        onProductsHandler: function ($pContainer, pOptions) {
            var $tmpContainer = $($pContainer),
                $tmpProductItems = $tmpContainer.find('.item-product'),
                tmpOptions = _.extend({provider: 'tracdelight', list: 'Product Widget'}, pOptions),
                tmpItemData = {},
                tmpItemsData = [];

            if ($tmpProductItems.length == 0) return;

            $.each($tmpProductItems, function (pIndex, pItem) {
                var $tmpProductItem = $(pItem),
                    tmpSKU = $tmpProductItem.data('sku') || '',
                    tmpTitle = $tmpProductItem.data('title') || '',
                    tmpBrand = $tmpProductItem.data('brand') || '',
                    tmpPrice = $tmpProductItem.data('price') || '',
                    tmpShop = $tmpProductItem.data('shop') || '',
                    tmpCurrency = $tmpProductItem.data('currency') || '';

                /**
                 * Impression Data
                 * @type {{name: *, id: *, price: *, brand: *, position: *}}
                 */
                tmpItemData = {
                    category: tmpShop,
                    list: tmpOptions.list,
                    name: tmpTitle,
                    id: tmpSKU,
                    price: tmpPrice,
                    brand: tmpBrand,
                    position: (pIndex + 1)
                }

                tmpItemsData.push(tmpItemData);

                /**
                 * Click Data
                 */
                $tmpProductItem.unbind('click.enhanced_ecommerce').bind('click.enhanced_ecommerce', {clickData: tmpItemData}, $.proxy(function (pEvent) {
                    var tmpData = pEvent.data.clickData;
                    TrackingManager.trackEcommerce(tmpData, 'productClick');
                }, this));
            });

            TrackingManager.trackEcommerce(tmpItemsData, 'impressions');
        }
    }, {
        trackEvent: function (pTrackingObject, pUseCurrentPath) {
            var tmpUseCurrentPath = pUseCurrentPath != undefined ? pUseCurrentPath : true,
                tmpTrackingObject = pTrackingObject,
                tmpCurrentPath = TrackingManager.getCurrentPath();

            tmpTrackingObject = _.extend({
                'event': TrackingManager.gtmEventName,
                'location': tmpCurrentPath,
                'value': ''
            }, tmpTrackingObject);

            if (typeof window.dataLayer != "undefined") {
                window.dataLayer.push(tmpTrackingObject);
                console.log(">> trackEvent >>", tmpTrackingObject);
            } else {
                console.log("No Google Tag Manager available");
            }
        },
        trackPageView: function (pPath) {
            var tmpPath = pPath.replace(/([^:]\/)\/+/g, "$1");

            if (typeof window.dataLayer != "undefined") {
                window.dataLayer.push({event: 'page_view', 'location': tmpPath});
                console.log(">> trackPageView >>", document.title, tmpPath);
            } else {
                console.log("No Google Tag Manager available");
            }
        },
        trackIVW: function (iamDataObject) {
            if (window.iam_data == undefined) return;

            iamDataObject = iamDataObject || window.iam_data;
            iom.c(iamDataObject, 1);
        },
        trackEcommerce: function (pData, pType) {
            var tmpTrackingObject = {}

            switch (pType) {
                case 'impressions':
                    tmpTrackingObject.ecommerce = {
                        'impressions': pData
                    }
                    break;
                case 'productClick':
                    tmpTrackingObject.event = 'productClick';
                    tmpTrackingObject.ecommerce = {
                        'click': {
                            'products': [pData]
                        }
                    }
                    break;
                default:
                    return;
            }


            if (typeof window.dataLayer != "undefined") {
                window.dataLayer.push(tmpTrackingObject);
                console.log(">>> ecommerce", tmpTrackingObject);
            } else {
                console.log("No Google Tag Manager available");
            }
        },
        getCurrentPath: function () {
            return Backbone.history.location.pathname;
        },
        getItemType: function ($pItem) {
            var tmpAction = "";

            if ($pItem.parents('[data-view-type]').length > 0) {
                tmpAction = $pItem.parents('[data-view-type]').data('view-type').replace('TeaserView', '').replace('View', '');

                if ($pItem.parents('.region-presenter').length > 0) {
                    tmpAction += '_presenter';
                } else if ($pItem.parents('.teaser').length > 0) {
                    tmpAction += '_teaser';
                } else if ($pItem.parents('.item-media').length > 0) {
                    tmpAction += '_media';
                } else if ($pItem.parents('.socials-horizontal-bar').length > 0) {
                    tmpAction += '_horizontal_bar';
                } else if ($pItem.parents('.socials-vertical-bar').length > 0) {
                    tmpAction += '_vertical_bar';
                }
            } else {
                if ($pItem.parents('#header-home').length > 0) {
                    tmpAction = 'header';
                } else if ($pItem.parents('#menu-sidebar').length > 0) {
                    tmpAction = 'sidebar';
                } else if ($pItem.parents('.region-presenter').length > 0) {
                    tmpAction = 'presenter';
                }
            }

            return tmpAction;
        },
        getLocationType: function (pDefault) {
            var tmpLocation = pDefault;

            if ($('#modal-search').hasClass('is_search_enabled')) {
                tmpLocation = '/search_overlay'
            } else if ($('body').hasClass('page-article')) {
                tmpLocation = '/article';
            } else if (_.isUndefined(tmpLocation)) {
                tmpLocation = TrackingManager.getCurrentPath();
            }

            return tmpLocation;
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.TrackingManager = BurdaInfinite.managers.TrackingManager.extend({
        initialize: function (pOptions) {
            BurdaInfinite.managers.TrackingManager.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.managers.ScrollManager = Backbone.View.extend({
        scrollTopAdSettings: 0,
        scrollTopUrl: 0,
        initialize: function (pOptions) {
            _.extend(this, pOptions);

            if (!Backbone.History.started && _.isFunction(history.pushState)) Backbone.history.start({pushState: true});

            this.scrollTopAdSettings = $(window).scrollTop();
            this.scrollTopUrl = $(window).scrollTop();
            //this.listenTo(this.infiniteModel, 'change:inview', _.debounce(this.urlChangeHandler, 10), this);
            //this.listenTo(this.infiniteModel, 'change:inview', _.debounce(this.adSettingsChangeHandler, 10), this);
            this.listenTo(this.infiniteModel, 'change:inview', this.onInviewChangeHandler, this);
        },
        onInviewChangeHandler: function (pModel) {
            this.adSettingsChangeHandler(pModel);
            this.urlChangeHandler(pModel);
        },
        adSettingsChangeHandler: function (pModel) {
            if (this.scrollTopAdSettings == $(window).scrollTop()) return;

            var $tmpElement = pModel.get('el'),
                tmpInviewModel = pModel.get('inview');

            if (tmpInviewModel.state == 'enter' || tmpInviewModel.state == 'exit' && tmpInviewModel.direction == 'up') {
                this.adscModel.setByElement($tmpElement);
            }

            this.scrollTopAdSettings = $(window).scrollTop();
        },
        urlChangeHandler: function (pModel) {
            if (this.scrollTopUrl == $(window).scrollTop()) return;

            var $tmpElement = pModel.get('el'),
                tmpInviewModel = pModel.get('inview'),
                tmpHistoryURL = $tmpElement.data('history-url'),
                tmpDocumentTitle = '';

            if (tmpInviewModel.state == 'enter' || tmpInviewModel.state == 'exit') {

                if (!_.isUndefined(tmpHistoryURL) && !_.isEmpty(tmpHistoryURL)) {
                    ScrollManager.pushHistory(tmpHistoryURL, {replace: true});
                    tmpDocumentTitle = $tmpElement.data('history-title');

                    if (!_.isUndefined(tmpDocumentTitle) && !_.isEmpty(tmpDocumentTitle)) {
                        document.title = decodeURIComponent(tmpDocumentTitle);
                    }
                }
            }

            this.scrollTopUrl = $(window).scrollTop();
        }
    }, {
        pushHistory: function (pURL, pSettings) {
            //console.log(">>> pushHistory", pURL);
            var pushStateSupported = _.isFunction(history.pushState);
            if (pushStateSupported) {
                Backbone.history.navigate(pURL, pSettings);
            }
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.ScrollManager = BurdaInfinite.managers.ScrollManager.extend({
        initialize: function (pOptions) {
            BurdaInfinite.managers.ScrollManager.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.base.BaseModel = Backbone.Model.extend({
        defaults: {
            inviewEnabled: true
        },
        initialize: function (pModel, pOptions) {
            _.extend(this, pOptions);
        },
        inviewEnable: function (pState) {
            this.set('inviewEnabled', pState);
        },
        hasItems: function() {
            return false;
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseModel = BurdaInfinite.models.base.BaseModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.base.BaseModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.base.BaseCollectionModel = BaseModel.extend({
        initialize: function (pAttributes, pOptions) {
            BaseModel.prototype.initialize.call(this, pAttributes, pOptions);

            /**
             * Collection in Collection is not possible >:/
             * We need the 'items' property here
             */
            this.set('items', new Backbone.Collection());

            this.listenTo(this.getItems(), 'all', function (pType, pModel) {
                this.trigger(pType, pModel);
            }, this);
        },
        add: function (pItems, pOptions) {
            this.getItems().add(pItems, pOptions);
        },
        getModel: function (pId) {
            return this.getItems().get(pId);
        },
        getItems: function () {
            return this.get('items');
        },
        hasItems: function () {
            return this.has('items') && this.getItems().length > 0;
        },
        at: function (pIndex) {
            return this.getItems().at(pIndex);
        },
        reset: function (pDestroyItems) {
            var tmpDestroyItems = pDestroyItems || false;

            if (tmpDestroyItems) this.destroyItems();
            this.getItems().reset();
        },
        destroyItems: function (pItems) {
            var tmpItems = pItems || this.getItems();

            _.each(tmpItems.models, _.bind(function (pModel, pIndex) {
                if (pModel.hasItems()) {
                    this.destroyItems(pModel.get('items'));
                }

                if (pModel.has('view') && _.isFunction(pModel.get('view').destroy)) {
                    pModel.get('view').destroy();
                }
            }, this))
        },
        inviewEnable: function (pState, pCollection) {
            var tmpCollection = pCollection || this.getItems();

            _.each(tmpCollection.models, function (pModel, pIndex) {
                pModel.set('inviewEnabled', pState);

                if (pModel.hasItems()) {
                    this.inviewEnable(pState, pModel.get('items'));
                }
            }, this);
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseCollectionModel = BurdaInfinite.models.base.BaseCollectionModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.base.BaseCollectionModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.AjaxModel = Backbone.Model.extend({
        defaults: {
            url: '',
            base: false,
            element: null,
            callback: $.noop,
            progress: {
                type: null
            }
        },
        ajax: null,
        settings: null,
        initialize: function (pSettings) {
            this.settings = _.extend(this.defaults, pSettings);
            this.ajax = Drupal.ajax(this.settings);

            //caching enabled
            //this.ajax.options.type = "GET";

            this.ajax.commands.insert = $.proxy(function (ajax, response, status) {
                var method = response.method || ajax.method;
                var new_content_wrapped = $('<div></div>').html(response.data);
                var new_content = new_content_wrapped.contents();
                if (new_content.length !== 1 || new_content.get(0).nodeType !== 1) {
                    new_content = new_content_wrapped;
                }

                if (method == 'append') {
                    $('body').append(new_content);
                } else {
                    this.settings.callback(new_content);
                }
            }, this);

            // This command will remove this Ajax object from the page.
            this.ajax.commands.destroyObject = function (ajax, response, status) {
                Drupal.ajax.instances[this.instanceIndex] = null;
            };
        },
        execute: function () {
            this.ajax.execute();
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.AjaxModel = BurdaInfinite.models.AjaxModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.AjaxModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.PageOffsetsModel = Backbone.Model.extend({
        initialize: function (pOptions) {
            /**
             * Collection in Collection is not possible >:/
             * We need the 'items' property here
             */

            /**
             * check if this is obsolete
             * function calculateOffset(edge) {
             * var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
             * @type {{top: number, right: number, left: number, bottom: number}}
             */

            this.defaultPageOffset = {top: 0, right: 0, left: 0, bottom: 0};
            this.set('items', new Backbone.Collection());
            this.add({id: 'offsetPage', $el: {}, active: false, offsets: this.defaultPageOffset});
            this.add({id: 'offsetToolbar', $el: {}, active: false, offsets: this.defaultPageOffset}, {silent: true});
            this.add({id: 'offsetMenuMain', $el: {}, active: false, offsets: this.defaultPageOffset}, {silent: true});

            _.extend(this, pOptions);

            this.listenTo(this.getItems(), 'change:offsets change:active', _.throttle(this.onCalculatePageHandler, 50, this), this);
        },
        onCalculatePageHandler: function (pModel) {
            if (pModel.id == "offsetPage") return;

            var tmpPageModel = this.getModel('offsetPage'),
                tmpPageRelevants = this.getPageRelevantItems();

            /**
             * Only top gap at this moment
             * TODO: dynamic left / top / right / bottom gaps
             */
            var tmpPageOffsets = _.reduce(tmpPageRelevants, _.bind(function (pMemo, pNum) {
                var tmpOffsets = pNum.get('offsets'),
                    tmpOffsets_2 = pMemo;

                if (!_.has(tmpOffsets_2, 'top')) tmpOffsets_2 = this.defaultPageOffset;

                if (tmpOffsets.height != undefined) {
                    tmpOffsets.top = tmpOffsets.height;
                }

                if (tmpOffsets_2.height != undefined) {
                    tmpOffsets_2.top = tmpOffsets_2.height;
                }

                return {
                    top: tmpOffsets.top + tmpOffsets_2.top,
                    left: tmpOffsets.left + tmpOffsets_2.left,
                    right: tmpOffsets.right + tmpOffsets_2.right,
                    bottom: tmpOffsets.bottom + tmpOffsets_2.bottom
                };
            }, this), this.defaultPageOffset);


            tmpPageModel.set('offsets', tmpPageOffsets);
        },
        add: function (pModel, pOptions) {
            var tmpOptions = _.extend(pOptions || {}, {merge: true}),
                tmpModel = this.getItems().add(pModel, tmpOptions);

            tmpModel.set('active', true);
        },
        deactivate: function (pModel, pOptions) {
            if (!pModel) return;

            this.getModel(pModel.id).set('active', false);
        },
        remove: function (pModel, pOptions) {
            var tmpOptions = _.extend(pOptions || {}, {merge: true});
            this.deactivate(pModel, pOptions);
            this.getItems().remove(pModel, tmpOptions);
        },
        getPageRelevantItems: function () {
            var tmpItems = [];

            _.find(this.getItems().models, function (pModel) {
                if (pModel.attributes.pageRelevant === true && pModel.attributes.active === true) {
                    tmpItems.push(pModel);
                }
            });

            return tmpItems;
        },
        getItems: function () {
            return this.get('items');
        },
        getModel: function (pModelId) {
            return this.getItems().get(pModelId);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.PageOffsetsModel = BurdaInfinite.models.PageOffsetsModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.PageOffsetsModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.DeviceModel = Backbone.Model.extend({
        isActive: false,
        breakpoints: {},
        breakpointValues: [],
        breakpointKeys: [],
        deviceBreakpointValues: [],
        deviceBreakpointKeys: [],
        deviceMapping: {},
        deviceValues: [],
        deviceKeys: [],
        currentBreakpoint: {},
        lastBreakpoint: {},
        lastDeviceBreakpoint: {},
        useWhatsapp: ((navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i)) ? true : false),
        initialize: function (pAttributes, pOptions) {
            Backbone.Model.prototype.initialize.call(this, pAttributes, pOptions);

            this.breakpoints = pOptions.Breakpoints;
            this.breakpointValues = _.values(this.breakpoints);
            this.breakpointKeys = _.keys(this.breakpoints);

            this.deviceMapping = pOptions.DeviceMapping;
            this.deviceValues = _.values(this.deviceMapping);
            this.deviceKeys = _.keys(this.deviceMapping);
            this.deviceBreakpointValues = [];
            this.deviceBreakpointKeys = [];

            this.set('breakpoints', new Backbone.Collection());
            this.set('deviceBreakpoints', new Backbone.Collection());

            this.createBreakpoints();
            this.createDeviceBreakpoints();
            this.checkActiveBreakpoint();
            this.checkActiveDevice();

            $(window).resize(_.bind(_.debounce(function () {
                this.checkActiveBreakpoint();
                this.checkActiveDevice();
            }, 200), this));

            if(this.getBreakpoints().length > 0) this.isActive = true;
        },
        createBreakpoints: function () {
            var tmpModelItem = {},
                tmpMinVal = 0,
                tmpMaxVal = 0,
                tmpKey = "";

            _.each(this.breakpointValues, _.bind(function (pVal, pIndex) {
                tmpKey = this.breakpointKeys[pIndex];
                tmpMinVal = pVal;
                tmpModelItem = {
                    id: tmpKey,
                    min_width: tmpMinVal,
                    active: false
                };

                if (pIndex < this.breakpointValues.length - 1) {
                    tmpMaxVal = (this.breakpointValues[pIndex + 1] - 1);
                    tmpModelItem.max_width = tmpMaxVal;
                }

                this.getBreakpoints().add(tmpModelItem);
            }, this));
        },
        createDeviceBreakpoints: function () {
            var tmpModelItem = {},
                tmpKey = "",
                tmpNextKey;


            this.deviceBreakpointValues = [];
            this.deviceBreakpointKeys = [];
            _.each(this.deviceValues, _.bind(function (pVal, pIndex) {
                tmpKey = this.deviceKeys[pIndex];
                tmpModelItem = {
                    id: tmpKey,
                    min_width: this.getBreakpoints().get(pVal).get('min_width'),
                    active: false,
                    mapping: pVal
                };

                if (pIndex < this.deviceValues.length - 1) {
                    tmpNextKey = (this.deviceValues[pIndex + 1]);
                    tmpModelItem.max_width = parseInt(this.getBreakpoints().get(tmpNextKey).get('min_width')) - 1;
                }

                this.deviceBreakpointValues.push(tmpModelItem.min_width);
                this.deviceBreakpointKeys.push(tmpKey);
                this.getDeviceBreakpoints().add(tmpModelItem);
            }, this));

        },
        checkActiveBreakpoint: function () {
            var tmpSize = {width: $(window).width(), height: $(window).height()},
                tmpKey = "",
                tmpBreakpoint = null,
                tmpValues = _.clone(this.breakpointValues).reverse(),
                tmpKeys = _.clone(this.breakpointKeys).reverse();

            /**
             * reset active state
             */
            _.each(this.getBreakpoints().models, _.bind(function (pItem) {
                if (pItem.has('active')) pItem.set({active: false}, {silent: true});
            }, this));

            /**
             * set active state
             */
            _.every(tmpValues, _.bind(function (pVal, pIndex) {
                if (tmpSize.width >= pVal) {
                    tmpKey = tmpKeys[pIndex];
                    tmpBreakpoint = this.getBreakpoints().get(tmpKey);
                    tmpBreakpoint.set({active: true}, {silent: true});
                    if (tmpBreakpoint.id != this.lastBreakpoint.id) {
                        this.getBreakpoints().trigger('change:active');
                    }
                    this.lastBreakpoint = tmpBreakpoint;
                }
                return tmpSize.width < pVal;
            }, this));
        },
        checkActiveDevice: function () {
            var tmpSize = {width: $(window).width(), height: $(window).height()},
                tmpValues = _.clone(this.deviceBreakpointValues).reverse(),
                tmpKeys = _.clone(this.deviceBreakpointKeys).reverse(),
                tmpBreakpoint = null,
                tmpKey = "";

            /**
             * reset active state
             */
            _.each(this.getDeviceBreakpoints().models, _.bind(function (pItem) {
                if (pItem.has('active')) pItem.set({active: false}, {silent: true});
            }, this));

            /**
             * set active state
             */
            _.every(tmpValues, _.bind(function (pVal, pIndex) {
                if (tmpSize.width >= pVal) {
                    tmpKey = tmpKeys[pIndex];

                    tmpBreakpoint = this.getDeviceBreakpoints().get(tmpKey);
                    tmpBreakpoint.set({active: true}, {silent: true});
                    if (tmpBreakpoint.id != this.lastDeviceBreakpoint.id) {
                        this.getDeviceBreakpoints().trigger('change:active', tmpBreakpoint);
                    }
                    this.lastDeviceBreakpoint = tmpBreakpoint;
                }
                return tmpSize.width < pVal;
            }, this));
        },
        getBreakpoints: function () {
            return this.get('breakpoints');
        },
        getDeviceBreakpoints: function () {
            return this.get('deviceBreakpoints');
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.DeviceModel = BurdaInfinite.models.DeviceModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.DeviceModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.AdscModel = Backbone.Model.extend({
        defaults: function () {
            return {
                render: false,
                adsc: this.getCurrentAdscInfos()
            }
        },
        initialize: function (pAttributes, pOptions) {
            if (this.get('render') == true) {
                this.listenTo(this, 'change:adsc', this.render, this);
            } else {
                this.listenTo(this, 'change:render:true', this.render, this);
            }
        },
        setByElement: function ($pElement) {
            var tmpAdUnit_1 = $pElement.data('adsc-adunit1') || '',
                tmpAdUnit_2 = $pElement.data('adsc-adunit2') || '',
                tmpAdUnit_3 = $pElement.data('adsc-adunit3') || '',
                tmpAdkeyWord = $pElement.data('adsc-keyword') || '',
                tmpCurrentAdsc = _.clone(this.get('adsc'));

            //important tag
            if(tmpAdUnit_1 != '') {
                tmpCurrentAdsc.adsc_adunit1 = tmpAdUnit_1;
            }

            tmpCurrentAdsc.adsc_adunit2 = tmpAdUnit_2;
            tmpCurrentAdsc.adsc_adunit3 = tmpAdUnit_3;
            tmpCurrentAdsc.adsc_keyword = tmpAdkeyWord;

            console.log(">>> tmpCurrentAdsc", tmpCurrentAdsc);

            this.set('adsc', tmpCurrentAdsc);
        },
        render: function (pModel) {
            var tmpAttributes = {};

            if (!_.isUndefined(pModel)) {
                tmpAttributes = pModel.changed;
            } else {
                tmpAttributes = this.defaults().adsc;
            }

            _.each(tmpAttributes, function (pKey, pValue) {
                window[pValue] = pKey;
                console.log("ADSC DYNAMIC MODEL", pValue, pKey);
            });

        },
        checkSet: function (pModel) {
            var tmpModel = pModel || this;
            this.set(tmpModel.attributes);

            if (this.hasChanged()) {
                this.render(this);
            }
        },
        getCurrentAdscInfos: function () {
            return {
                'adsc_adunit1': window.adunit1,
                'adsc_adunit2': window.adunit2,
                'adsc_adunit3': window.adunit3,
                'adsc_keyword': window.adkeyword,
                'adsc_mode': window.adsc_mode,
                'adsc_mobile': window.admobile,
                'adsc_device': window.addevice
            }
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.AdscModel = BurdaInfinite.models.AdscModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.AdscModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.base.BaseView = Backbone.View.extend({
        enabled: true,
        deviceModel: null,
        initialize: function (pOptions) {
            _.extend(this, pOptions || {});

            if (pOptions.initialDOMItem === true) return; //mainView is an BaseView -> parsed all internal / extern / etc objects

            this.updateInternalURL(this.$el);
            this.updateExternalURL(this.$el);
            this.updateTimeAgo(this.$el);
            this.loadResponsiveImages(this.$el);
            this.updateSocials(this.$el);
            this.updateBtnActions(this.$el);
        },
        updateSocials: function ($pContainer) {
            /**
             * Whatsapp
             */
            if (this.deviceModel != undefined && this.deviceModel.useWhatsapp) {
                $pContainer.find('.icon-whatsapp').addClass('active');
                $pContainer.find('.icon-whatsapp').css('display', 'inline-flex');
            }

            $pContainer.find('.icon-pinterest[data-url]').unbind('click.socialsPinterest').bind('click.socialsPinterest', $.proxy(function (pEvent) {
                var $tmpItem = $(pEvent.currentTarget),
                    tmpURL = $tmpItem.data('url'),
                    tmpMedia = $tmpItem.data('media-url').replace(/\?itok=([^&]$|[^&]*)/i, ""),
                    tmpDescription = $tmpItem.data('description'),
                    tmpPinterestDefaultURL = 'https://pinterest.com/pin/create/button/';

                if (typeof PinUtils != 'undefined') {
                    PinUtils.pinOne({
                        url: tmpURL,
                        media: tmpMedia,
                        description: tmpDescription
                    });
                } else {
                    tmpPinterestDefaultURL += '?url=' + encodeURIComponent(tmpURL);
                    tmpPinterestDefaultURL += '&media=' + encodeURIComponent(tmpMedia);
                    tmpPinterestDefaultURL += '&description=' + encodeURIComponent(tmpDescription);

                    this.disableBeforeUnloadHandler();
                    window.open(tmpPinterestDefaultURL, '_blank');
                }

                return false;
            }, this));

            $pContainer.find('.icon-facebook[data-url]').unbind('click.socialsFacebook').bind('click.socialsFacebook', $.proxy(function (pEvent) {
                var $tmpItem = $(pEvent.currentTarget),
                    tmpURL = $tmpItem.data('url'),
                    tmpMedia = $tmpItem.data('media-url') || '',
                    tmpMediaSource = $tmpItem.data('media-source') || '',
                    tmpDescription = $tmpItem.data('description') || '',
                    tmpFacebookURL = 'https://www.facebook.com/sharer/sharer.php?m2w&u=',
                    $tmpItemMedia = [],
                    $tmpArticleHeadline = [];

                if (typeof FB != 'undefined') {

                    /**
                     * If shareName empty check if articleHeadline available
                     */
                    $tmpItemMedia = $tmpItem.parents('.item-media');
                    if (tmpDescription == '' && $tmpItemMedia.length > 0) {
                        $tmpArticleHeadline = $tmpItem.parents('.item-content--article').find('h1');
                        if ($tmpArticleHeadline.length > 0) {
                            tmpDescription = $tmpArticleHeadline.text();
                        }
                    }

                    var fbParams = {
                        method: 'feed',
                        caption: window.location.hostname,
                        name: tmpDescription,
                        link: tmpURL
                    };

                    if (tmpMedia != "") fbParams.picture = decodeURIComponent(tmpMedia);

                    FB.ui(fbParams);
                } else {
                    this.disableBeforeUnloadHandler();
                    window.open(tmpFacebookURL + encodeURIComponent(tmpURL), '_blank');
                }

                return false;
            }, this));

            $pContainer.find('.icon-email[data-url]').unbind('click.socialsEmail').bind('click.socialsEmail', $.proxy(function (pEvent) {
                var $tmpItem = $(pEvent.currentTarget),
                    tmpURL = $tmpItem.data('url'),
                    tmpDescription = encodeURIComponent($tmpItem.data('description')),
                    tmpEmailSubject = encodeURIComponent($tmpItem.data('email-subject')),
                    tmpEmailShareText = encodeURIComponent($tmpItem.data('email-share-text')),
                    tmpSpacer = encodeURIComponent("\r\n\r\n"),
                    tmpEmailURL = "mailto:?subject=" + tmpEmailSubject + " " + tmpDescription + "&body="
                        + tmpEmailShareText
                        + tmpSpacer
                        + tmpDescription
                        + tmpSpacer
                        + tmpURL;

                this.disableBeforeUnloadHandler();
                window.open(tmpEmailURL, '_top');
                return false;
            }, this));

            //$pContainer.find('.icon-twitter[data-url]').unbind('click.socialsTwitter').bind('click.socialsTwitter', $.proxy(function (pEvent) {
            //    var $tmpItem = $(pEvent.currentTarget),
            //        tmpURL = $tmpItem.data('url'),
            //        tmpDescription = encodeURIComponent($tmpItem.data('description')),
            //        tmpShareVia = encodeURIComponent($tmpItem.data('share-via')),
            //        tmpTwitterURL = 'https://twitter.com/intent/tweet?text=',
            //        tmpShareURL = tmpTwitterURL + tmpDescription + ' ' + tmpURL + ' ' + tmpShareVia;
            //
            //    this.disableBeforeUnloadHandler();
            //    window.open(tmpShareURL, '_blank');
            //    return false;
            //}, this));
        },
        updateBtnActions: function ($pContainer) {
            $pContainer.find('[data-btn-action]').unbind('click.btnAction').bind('click.btnAction', function (pEvent) {
                var tmpAction = $(this).data('btn-action'),
                    tmpValue = $(this).data('btn-action-value'),
                    tmpTarget = $(this).data('target'),
                    $tmpTarget = [];

                if (tmpTarget != "") $tmpTarget = $(this).parents(tmpTarget);
                if ($tmpTarget.length <= 0) $tmpTarget = $('body');

                if (tmpAction != "" && tmpValue != "") {
                    switch (tmpAction) {
                        case 'class-extend':
                            $tmpTarget.toggleClass(tmpValue);
                            $(this).toggleClass('is-active');
                            break;
                    }
                }
            });
        },
        updateTimeAgo: function ($pContainer) {
            $pContainer.find('.text-timestamp').timeago();
        },
        loadResponsiveImages: function ($pContainer) {
            if (typeof picturefill == "undefined") return;
            picturefill({reevaluate: true});
        },
        updateInternalURL: function ($pContainer) {
            var $internalUrls = $pContainer.find('[data-internal-url]').addBack().filter('[data-internal-url]');

            $internalUrls
              .unbind('click.updateInternalURL')
              .bind('click.updateInternalURL',
                $.proxy(function (pEvent) {
                  var $tmpElement = $(pEvent.currentTarget),
                    url = $tmpElement.attr('data-internal-url'),
                    target = $tmpElement.attr('data-target');

                  if (target) {
                    window.open(url, target);
                  } else {
                    location.href = url;
                  }
                }, this));

            // Prevent click event of contained clickable elements from bubbling up.
            $internalUrls
              .find('[data-internal-url], [data-external-url]')
              .unbind('click.updateInternalURLNoBubbling')
              .bind('click.updateInternalURLNoBubbling',
                $.proxy(function (pEvent) {
                  pEvent.stopPropagation();
                }, this));
        },
        updateExternalURL: function ($pContainer) {
            var $externalUrls = $pContainer.find('[data-external-url]').addBack().filter('[data-external-url]');

            $externalUrls
              .unbind('click.updateExternalURL')
              .bind('click.updateExternalURL',
                $.proxy(function (pEvent) {
                  var $tmpElement = $(pEvent.currentTarget),
                    url = $tmpElement.attr('data-external-url'),
                    target = $tmpElement.attr('data-target') || 'blank';

                  window.open(url, target);
                }, this));

            // Prevent click event of contained clickable elements from bubbling up.
            $externalUrls
              .find('[data-internal-url], [data-external-url]')
              .unbind('click.updateExternalURLNoBubbling')
              .bind('click.updateExternalURLNoBubbling',
                $.proxy(function (pEvent) {
                  pEvent.stopPropagation();
                }, this));
        },
        disableBeforeUnloadHandler: function () {
            window.allowBeforeUnload = false;
            _.delay(function () {
                window.allowBeforeUnload = true;
            }, 100);
        },
        enableView: function () {
            this.enabled = true;
        },
        disableView: function () {
            this.enabled = false;
        },
        destroy: function () {
            BaseInviewView.prototype.destroy.call(this);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseView = BurdaInfinite.views.base.BaseView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.base.BaseView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.base.BaseInviewView = BaseView.extend({
        inview: null,
        initialize: function (pOptions) {
            BaseView.prototype.initialize.call(this, pOptions);
        },
        delegateInview: function () {
            //this.model.set('inview', 'init');
            //console.log(">>> delegateInview");

            if (this.inview != null) this.inview.destroy();

            this.inview = new Waypoint.Inview({
                element: this.$el,
                exited: _.bind(function (direction) {
                    //console.log('Exited triggered with direction ' + direction)
                    this.model.set('inview', {state: 'exited', direction: direction});
                    this.onExitedHandler(direction);
                }, this),
                exit: _.bind(function (direction) {
                    //console.log('Exit triggered with direction ' + direction)
                    this.model.set('inview', {state: 'exit', direction: direction});
                    this.onExitHandler(direction);
                }, this),
                entered: _.bind(function (direction) {
                    //console.log('Entered triggered with direction ' + direction)
                    this.model.set('inview', {state: 'entered', direction: direction});
                    this.onEnteredHandler(direction);
                }, this),
                enter: _.bind(function (direction) {
                    this.$el.addClass('in');
                    _.delay(_.bind(function () {
                        //console.log('Enter triggered with direction ' + direction)
                        this.model.set('inview', {state: 'enter', direction: direction});
                        this.onEnterHandler(direction);
                    }, this), 10);
                }, this)
            })
        },
        onExitedHandler: function (pDirection) {
            this.model.inviewEnable(false);
        },
        onExitHandler: function (pDirection) {
        },
        onEnteredHandler: function (pDirection) {
        },
        onEnterHandler: function (pDirection) {
            this.model.inviewEnable(true);
        },
        destroy: function () {
            if (this.inview != null) this.inview.destroy();
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseInviewView = BurdaInfinite.views.base.BaseInviewView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.base.BaseInviewView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.base.BaseDynamicView = BaseInviewView.extend({
        type: 'baseDynamicView',
        initialCall: false,
        initialize: function (pOptions) {
            BaseInviewView.prototype.initialize.call(this, pOptions);

            this.parseInfiniteView(this.$el, {initialCall: this.initialCall});
        },
        parseInfiniteView: function (pContainer, pSettings) {
            var tmpSettings = _.extend({modelList: this.model, initialCall: false}, pSettings);
            var $tmpContainer = $(pContainer),
                $tmpViewTypes = [];

            if (this.$el[0] == $tmpContainer[0] || tmpSettings.initialCall) {
                $tmpViewTypes = $tmpContainer.find("[data-view-type]").not($tmpContainer.find('[data-view-type] [data-view-type]'));
            } else {
                $tmpViewTypes = $tmpContainer.find("[data-view-type]").addBack().not($tmpContainer.find('[data-view-type]'));
            }

            if ($tmpViewTypes.length > 0) {

                $.each($tmpViewTypes, $.proxy(function (pIndex, pItem) {
                    tmpSettings.el = $(pItem);
                    this.createDynamicItem(tmpSettings);
                }, this));

            } else if (tmpSettings.initialCall == false && _.isUndefined($tmpContainer.data('view-type'))) {
                /**
                 * if no data-type found -> create abstractView -> internal / external / etc / listener
                 */
                tmpSettings.el = $tmpContainer;
                this.createDynamicItem(tmpSettings);
            }
        },
        createDynamicItem: function (pSettings) {
            var $tmpItem = pSettings.el,
                tmpViewType = $tmpItem.data('view-type'),
                tmpModel = new BaseDynamicViewModel();

            pSettings.modelList.add(tmpModel);

            tmpModel.createDynamicItem({
                el: $tmpItem,
                type: tmpViewType,
                initialDOMItem: $tmpItem.parents('.region-feed').length <= 0,
                'infiniteBlock': tmpViewType == 'infiniteBlockView'
            }, {deviceModel: this.deviceModel});

            $tmpItem.data('infiniteModel', tmpModel);
        },
        destroy: function () {
            BaseView.prototype.destroy.call(this);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseDynamicView = BurdaInfinite.views.base.BaseDynamicView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.base.BaseDynamicView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.base.BaseDynamicViewModel = BaseCollectionModel.extend({
        defaults: {
            el: [],
            infiniteBlock: false,
            initialDOMItem: true
        },
        initialize: function (pModel, pOptions) {
            BaseCollectionModel.prototype.initialize.call(this, pModel, pOptions);

            if (!_.isUndefined(pModel)) {
                this.createDynamicItem(pModel);
            }
        },
        createDynamicItem: function (pModel, pOptions) {
            var tmpView = {},
                tmpAdscModel,
                $tmpElement = pModel.el,
                tmpType = pModel.type,
                tmpSettings = {
                    model: this,
                    el: $tmpElement,
                    context: $tmpElement.closest('[data-view-context]').length > 0 ?
                        $tmpElement.closest('[data-view-context]') : $(window)
                };

            if (!_.isUndefined(pOptions) && !_.isUndefined(pOptions.deviceModel)) {
                tmpSettings.deviceModel = pOptions.deviceModel;
            }

            //console.log(">>> createView", tmpType);

            switch (tmpType) {
                case 'feedView':
                    tmpView = new BaseFeedView(tmpSettings);
                    break;
                case 'infiniteBlockView':
                    tmpView = new InfiniteBlockView(tmpSettings);
                    tmpView.delegateInview(); //active inview functions
                    break;
                case 'articleView':
                    tmpView = new ArticleView(tmpSettings);
                    break;
                case 'stickyView':
                    tmpView = new StickyView(tmpSettings);
                    break;
                case 'galleryView':
                    tmpView = new GalleryView(tmpSettings);
                    break;
                case 'marketingView':

                    //dynamic adsc model
                    if($tmpElement.parents('[data-adsc-keyword]').length > 0) {
                        tmpAdscModel = new AdscModel();
                        tmpAdscModel.setByElement($tmpElement.parents('[data-adsc-keyword]'));
                        tmpSettings.dynamicAdscModel = tmpAdscModel;
                    }

                    tmpView = new MarketingView(tmpSettings);
                    break;
                case 'listSwipeableView':
                    tmpView = new BaseListSwipeableView(tmpSettings);
                    break;
                case 'newsletterView':
                    tmpView = new BaseNewsletterView(tmpSettings);
                    break;
                case 'productsView':
                    tmpView = new ProductsView(tmpSettings);
                    break;
                default:
                    tmpView = new BaseView(tmpSettings);
                    break;
            }

            this.set(pModel);
            this.set('view', tmpView);
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseDynamicViewModel = BurdaInfinite.models.base.BaseDynamicViewModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.base.BaseDynamicViewModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.base.BaseFeedView = BaseDynamicView.extend({
        context: $(window),
        $feedItemsContainer: {},
        lastInfiniteItem: {},
        preloader: null,
        infinite: null,
        initFeed: true,
        onBeforeLoadCallback: $.noop,
        onAfterLoadCallback: $.noop,
        initialize: function (pOptions) {
            BaseDynamicView.prototype.initialize.call(this, pOptions);

            this.context = $(this.context); //force jquery element
            this.$feedItemsContainer = this.$el.find('.container-feed-items');
            /**
             * auto init
             */
            if (this.initFeed) this.rebuildFeed();

            this.listenTo(this.model, "change:is_disabled", this.onDisableHandler);
            this.listenTo(this.model, "reset", this.onResetHandler, this);
        },
        rebuildFeed: function () {
            if (this.infinite !== null) this.infinite.destroy();

            this.infinite = new Waypoint.Infinite({
                context: this.context[0],
                element: this.$el,
                onBeforePageLoad: _.bind(this.onBeforeLoad, this),
                onAfterPageLoad: _.bind(this.onAfterLoad, this),
                offset: function () {
                    return (this.context.innerHeight() * 2) - this.adapter.outerHeight();
                }
            });
        },
        onBeforeLoad: function () {
            this.lastInfiniteItem = this.$el.find('.infinite-item:last').length > 0 ? this.$el.find('.infinite-item:last') : this.$el;
            if (this.preloader != null) this.preloader.hide(true, true);
            this.preloader = new SpinnerCubeView({el: this.lastInfiniteItem});
            this.onBeforeLoadCallback(this.lastInfiniteItem);
        },
        onAfterLoad: function (pItem) {
            //console.log("loading done", " View >> ", this.id || this.$el.attr('id') || this.$el.attr('class'));

            if (this.preloader != null) this.preloader.hide(true, true);
            this.onAfterLoadCallback($(pItem));
            this.parseInfiniteView($(pItem), {modelList: this.model, parseItemRoot: false});
        },
        onDisableHandler: function (pDisabled) {
            //console.log("AbstractFeedView onDisableHandler", " View >> ", this.id, pDisabled);
            if (this.infinite == null || this.infinite.waypoint == undefined) return;

            if (pDisabled) {
                this.infinite.waypoint.disable();
            } else {
                this.infinite.waypoint.enable();
            }
        },
        onResetHandler: function () {
            this.clear();
        },
        appendElement: function (pElement) {
            this.$feedItemsContainer.append(pElement).fadeIn();

            if (this.infinite == null) {
                this.rebuildFeed();
            } else {
                this.refresh();
            }
        },
        refresh: function () {
            this.infinite.refresh();
        },
        clear: function () {
            this.$feedItemsContainer.empty();
            if (this.infinite != null) {
                this.infinite.destroy();
            }
        },
        destroy: function () {
            this.infinite.destroy();
            BaseDynamicView.prototype.destroy.call(this);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseFeedView = BurdaInfinite.views.base.BaseFeedView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.base.BaseFeedView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

  "use strict";

  BurdaInfinite.views.base.BaseSidebar = Backbone.View.extend({
    classStateOpen: "sidebar-open",
    classElementOpen: "open",
    events: {
      "click .icon-close": function (pEvent) {
        this.clickHandler(pEvent, 'close');
      }
    },
    initialize: function (pOptions) {
      _.extend(this, pOptions || {});
      this.listenTo(this.model, "change:is_open", this.stateChangedHandler);
    },
    clickHandler: function (pEvent, pType) {
      switch (pType) {
        case 'close':
          this.open(false);
          break;
      }
    },
    stateChangedHandler: function (pModel) {
      this.open(pModel.get('is_open'));
    },
    open: function (pBool) {
      this.model.set('is_open', pBool);
      $('body').toggleClass(this.classStateOpen, pBool);
      this.$el.toggleClass(this.classElementOpen, pBool);
    }
  });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

  "use strict";

  window.BaseSidebar = BurdaInfinite.views.base.BaseSidebar.extend({
    initialize: function (pOptions) {
      BurdaInfinite.views.base.BaseSidebar.prototype.initialize.call(this, pOptions);
    }
  });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.base.BaseSidebarModel = Backbone.Model.extend({
        defaults: {
            "is_open": false
        },
        initialize: function (pOptions) {

        },
        toggleOpenState: function () {
            this.set('is_open', !this.get('is_open'));
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseSidebarModel = BurdaInfinite.models.base.BaseSidebarModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.base.BaseSidebarModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.base.BaseNewsletterView = BaseView.extend({
        events: {
            "submit": "formSubmit"
        },
        apiInitialized: false,
        settings: null,
        permissions: null,
        $formView: null,
        $successView: null,
        $privacyView: null,
        $alerts: null,
        initialize: function (pOptions) {
            //TODO need dynamic settings
            this.settings = {
                client: 673096,
                groupId: 57,
                env: "production"
            };

            this.$el.hide();
            this.permissions = BaseNewsletterView.permissions;
            //remove this after the dynamic settings
            if (this.$el.hasClass('instyle-men')) this.settings.groupId = 60;
            if (this.$el.data('newsletter-group-id')) this.settings.groupId = this.$el.data('newsletter-group-id');
            BaseView.prototype.initialize.call(this, pOptions);

            this.createView();
            this.initializeApi();
            this.delegateEvents();

            if (!_.isNull(this.permissions)) {
                this.ready();
            }
        },
        initializeApi: function () {
            if (!_.isUndefined(window.thsixtyQ)) return;

            window.thsixtyQ = window.thsixtyQ || [];
            window.thsixtyQ.push(['init', {config: {env: this.settings.env}}]);

            window.thsixtyQ.push(['permissions.get', {
                success: _.bind(function (pPermissions) {
                    //TODO remove this after prod permissions fix
                    if (pPermissions.privacy) {
                        pPermissions.datenschutzeinwilligung = pPermissions.privacy;
                    }

                    BaseNewsletterView.permissions = pPermissions;
                    this.permissions = pPermissions;
                    this.ready();
                }, this),
                error: _.bind(function (pErr) {
                    console.log("PERMISSIONS ERROR", pErr);
                }, this)
            }]);

            var th = document.createElement('script');
            th.type = 'text/javascript';
            th.async = true;
            th.src = "//d2528hoa8g0iaj.cloudfront.net/thsixty.min.js";
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(th, s);

        },
        createView: function () {
            this.$formView = this.$el.find('.container-form');
            this.$alerts = this.$el.find('.container-alerts');
            this.$successView = this.$el.find('.container-success');
            this.$privacyView = this.$el.find('.container-privacy');
        },
        ready: function () {
            //console.log("PERMISSIONS", this.permissions);

            this.$formView.find('.privacy-link').unbind('click.privacy_open').bind('click.privacy_open', $.proxy(function () {
                //this.$privacyView.fadeIn(350);
                this.setViewState(BaseNewsletterView.STATE_PRIVACY);
                return false;
            }, this));

            this.$privacyView.find('.icon-close').unbind('click.privacy_close').bind('click.privacy_close', $.proxy(function () {
                //this.$privacyView.fadeOut(350);
                this.setViewState(BaseNewsletterView.STATE_INITIAL);
            }, this));

            this.$privacyView.find('.container-content-dynamic').empty().append($(this.permissions.datenschutzeinwilligung.markup.text_body));
            this.$el.show();
        },
        formSubmit: function (pEvent) {
            var tmpValid = true,
                tmpField = null,
                tmpVal = "",
                tmpAgreementVal = "",
                $tmpItem = {},
                tmpData = {
                    client: this.settings.client,
                    groups: [this.settings.groupId],
                    agreements: [],
                    user: {}
                };

            this.removeAlerts();

            /**
             * collect field values
             */
            _.each(BaseNewsletterView.fields, function (pVal, pKey) {
                tmpField = this.formField(pKey);
                if (tmpField.length) {
                    tmpVal = tmpField.val();
                    tmpData.user[pKey] = tmpVal;

                    if (tmpVal == '' && tmpField.attr('required')) {
                        this.addAlert('danger', pKey, 'Das Feld ist erforderlich.');
                        tmpValid = false;
                        return false;
                    }
                }
            }, this);

            _.each(this.$formView.find('[name="agreements[]"]'), function (pItem, pIndex) {
                $tmpItem = $(pItem);
                if ($tmpItem.is(':checked')) {
                    tmpAgreementVal = $tmpItem.val();
                    if (tmpAgreementVal == 'datenschutzeinwilligung') {
                        tmpData.extra = {acquia_id: $.cookie('tc_ptid')};
                    }

                    if (this.permissions[tmpAgreementVal] !== undefined && this.permissions[tmpAgreementVal].version !== undefined) {
                        tmpData.agreements.push({
                            'name': tmpAgreementVal,
                            'version': this.permissions[tmpAgreementVal].version
                        });
                    }
                } else if ($tmpItem.attr('required')) {
                    this.setValidationState($tmpItem, 'has-error');
                    this.addAlert('danger', null, 'Die Auswahl ist erforderlich.');
                    tmpValid = false;
                    return false;
                }
            }, this);

            if (tmpVal) this.send(tmpData);
            return false;
        },
        send: function (pData) {
            window.thsixtyQ.push(['newsletter.subscribe', {
                params: pData,
                success: $.proxy(function () {
                    //this.$formView.fadeOut(350);
                    //this.$successView.fadeIn(350);
                    this.setViewState(BaseNewsletterView.STATE_SUCCESS);

                    if(typeof TrackingManager != 'undefined') {
                        TrackingManager.trackEvent({category: 'newsletter', action: 'success'});
                    }
                }, this),
                error: $.proxy(function (err) {
                    var responseData = BaseNewsletterView.responseInterpreter(err);
                    this.addAlert('danger', responseData.field, responseData.message);

                    if(typeof TrackingManager != 'undefined') {
                        TrackingManager.trackEvent({category: 'newsletter', action: 'error'});
                    }
                }, this)
            }]);
        },
        setViewState: function (pState) {
            this.$el.removeClass(BaseNewsletterView.STATE_PRIVACY + ' ' + BaseNewsletterView.STATE_SUCCESS);

            switch (pState) {
                case BaseNewsletterView.STATE_SUCCESS:
                case BaseNewsletterView.STATE_PRIVACY:
                    this.$el.addClass(pState);
                    break;
            }
        },
        setValidationState: function ($pEl, pState) {
            $pEl.parents('.form-group').addClass(pState);
        },
        formField: function (pName) {
            return this.$formView.find('[name="' + pName + '"]');
        },
        addAlert: function (pType, pField, pMessage) {
            var tmpAlertString = "";

            if (pType == 'danger' && pField !== undefined) this.setValidationState(this.formField(pField), 'has-error');

            tmpAlertString = '<div class="alert alert-' + pType + '" role="alert">' + pMessage + '</div>';
            this.$alerts.append(tmpAlertString);
        },
        removeAlerts: function () {
            this.$alerts.empty();
            this.$el.find('.form-group').removeClass('has-error');
        },
        destroy: function () {

        }
    }, {
        STATE_INITIAL: 'state-initial',
        STATE_PRIVACY: 'state-privacy',
        STATE_SUCCESS: 'state-success',
        permissions: null,
        fields: {
            salutation: null,
            firstname: null,
            lastname: null,
            postalcode: null,
            city: null,
            birthday: null,
            email: null
        },
        responseInterpreter: function (responseData) {
            var interpretedResponse = {
                code: responseData.code,
                field: null,
                message: null
            };

            switch (responseData.code) {
                case 'EmailCannotBeEmpty':
                    interpretedResponse.field = 'email';
                    interpretedResponse.message = 'Die E-Mail-Adresse ist erforderlich.';
                    break;
                case 'InvalidEmail':
                    interpretedResponse.field = 'email';
                    interpretedResponse.message = 'Die E-Mail-Adresse muss gültig sein.';
                    break;
                default:
                    interpretedResponse.message = responseData.code.replace(/([A-Z])/g, ' $1');
                    break;
            }

            return interpretedResponse;
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseNewsletterView = BurdaInfinite.views.base.BaseNewsletterView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.base.BaseNewsletterView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.base.BaseListSwipeableView = BaseView.extend({
        $swiperContainer: [],
        swiperApi: null,
        isMobileMode: false,
        settings: {
            selector: '.swipeable--horizontal',
            slidesPerView: 'auto',
            wrapperClass: 'swipeable__wrapper',
            slideClass: 'swipeable__item',
            grabCursor: true
        },
        initialize: function (pOptions) {
            BaseView.prototype.initialize.call(this, pOptions);

            this.createView();

            if (!_.isUndefined(this.deviceModel) && this.deviceModel.isActive) {
                this.onDeviceBreakpointHandler(this.deviceModel.getDeviceBreakpoints().findWhere({active: true}));
                this.listenTo(this.deviceModel.getDeviceBreakpoints(), 'change:active', this.onDeviceBreakpointHandler, this);
            }
        },
        createView: function () {
            this.$swiperContainer = this.$el.find('.container-content')
        },
        updateViews: function () {
            this.swiperApi = this.$swiperContainer.swiper(this.settings);
            this.$swiperContainer.data('swiperApi', this.swiperApi);
        },
        removeSwiper: function () {
            this.$swiperContainer.data('swiperApi').destroy(true, true);
            this.$swiperContainer.removeData('swiperApi');
        },
        onDeviceBreakpointHandler: function (pModel) {
            this.breakpointDeviceModel = pModel;

            if (pModel.id == 'smartphone' && this.isMobileMode == false) {
                this.isMobileMode = true;
                this.updateViews();
            } else if (pModel.id != 'smartphone' && this.isMobileMode) {
                this.isMobileMode = false;
                this.removeSwiper();
            }
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.BaseListSwipeableView = BurdaInfinite.views.base.BaseListSwipeableView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.base.BaseListSwipeableView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.MainView = Backbone.View.extend({
        adscModel: {},
        menuSidebarModel: {},
        modalSearchModel: {},
        pageOffsetsModel: {},
        infiniteViewsModel: {},
        deviceModel: {},

        trackingManager: {},
        scrollManager: {},

        menuMainView: {},
        menuSidebarView: {},
        infiniteView: {},
        modalSearchView: {},

        events: {},
        initialize: function (pOptions) {
            _.extend(this, pOptions);

            $.timeago.settings.localeTitle = true;
            if (_.isFunction(history.pushState)) Backbone.history.start({pushState: true});
            AppConfig.initialLocation = Backbone.history.location.pathname + Backbone.history.location.search;
            //TFM.Debug.start();

            this.initBeforeUnloadBehavior();
            this.initAdBehavior();
            this.delegateEvents();
            this.createModels();
            this.createManagers();
            this.createViews();

            /**
             * Infinite Model Helper
             */
            this.listenTo(this.infiniteViewsModel, 'update', _.debounce(function (pType) {
                console.info("global infiniteModel", this.infiniteViewsModel);
            }, 100, true), this);

            /**
             * adjust sidebar if toolbar activated / displayed
             */
            setTimeout(_(function () {
                if (typeof Drupal.toolbar !== "undefined" && typeof Drupal.toolbar.models.toolbarModel !== "undefined") {
                    Backbone.listenTo(Drupal.toolbar.models.toolbarModel, 'change:offsets', _(this.onToolbarHandler).bind(this));
                }
            }).bind(this));
        },
        initBeforeUnloadBehavior: function () {
            /**
             * fix the page reload problems
             */

            if ($('body').hasClass('page-article')) {
                window.allowBeforeUnload = true;
                window.onbeforeunload = function (pEvent) {
                    if (!window.allowBeforeUnload) return;

                    Waypoint.disableAll();

                    $('body').css({
                        top: $(window).scrollTop() * -1 + 'px',
                        left: $(window).scrollLeft() * -1 + 'px'
                    })
                    window.scrollTo(0, 0);
                }
            }
        },
        createModels: function () {
            this.adscModel = new AdscModel(); //{render: true}
            this.menuSidebarModel = new BaseSidebarModel();
            this.infiniteViewsModel = new BaseCollectionModel();
            this.modalSearchModel = new ModalSearchModel();
            this.pageOffsetsModel = new PageOffsetsModel();
            this.deviceModel = new DeviceModel({}, JSON.parse(this.$el.find('[data-breakpoint-settings]').text()));

            /**
             * Backbone Manager - push Models
             */
            BM.reuseModel(ModelIds.adscModel, this.adscModel);
            BM.reuseModel(ModelIds.menuSidebarModel, this.menuSidebarModel);
            BM.reuseModel(ModelIds.infiniteViewsModel, this.infiniteViewsModel);
            BM.reuseModel(ModelIds.modalSearchModel, this.modalSearchModel);
            BM.reuseModel(ModelIds.pageOffsetsModel, this.pageOffsetsModel);
            BM.reuseModel(ModelIds.deviceModel, this.deviceModel);
        },
        createManagers: function () {
            /**
             * TrackingManager
             */
            this.trackingManager = new TrackingManager({
                id: ManagerIds.trackingManager,
                el: this.$el,
                infiniteModel: this.infiniteViewsModel,
                model: new Backbone.Model({
                    initialLocation: AppConfig.initialLocation,
                    gtmEventName: AppConfig.gtmEventName,
                    gtmIndexEvent: AppConfig.gtmIndexEvent,
                    gtmIndexPosEvent: AppConfig.gtmIndexPosEvent
                })
            });

            /**
             * ScrollManager
             */
            this.scrollManager = new ScrollManager({
                id: ManagerIds.scrollManager,
                el: this.$el,
                infiniteModel: this.infiniteViewsModel,
                adscModel: this.adscModel,
                model: new Backbone.Model({
                    initialLocation: AppConfig.initialLocation,
                    initialAdsc: AppConfig.initialAdsc
                })
            });

            BM.reuseView(ManagerIds.trackingManager, this.trackingManager);
            BM.reuseView(ManagerIds.scrollManager, this.scrollManager);
        },
        createViews: function () {

            /**
             * MainMenuView
             */
            this.menuMainView = new MenuMainView({
                id: ViewIds.menuMainView,
                el: $('#menu-main-navigation', this.$el)
            });

            /**
             * MenuSidebarView
             */
            this.menuSidebarView = new MenuSidebarView({
                id: ViewIds.menuSidebarView,
                el: $('#menu-sidebar', this.$el),
                model: this.menuSidebarModel
            });

            /**
             * InfiniteView - parse and create views by data-view-type
             */
            this.infiniteView = new BaseDynamicView({
                id: ViewIds.infiniteView,
                el: this.$el,
                model: this.infiniteViewsModel,
                deviceModel: this.deviceModel,
                initialCall: true
            });

            /**
             * ModalSearchView
             */
            this.modalSearchView = new ModalSearchView({
                id: ViewIds.modalSearchView,
                el: this.$el.find('#modal-search'),
                model: this.modalSearchModel,
                infiniteModel: this.infiniteViewsModel
            });

            /**
             * Backbone Manager - push Views
             */
            BM.reuseView(ViewIds.menuMainView, this.menuMainView);
            BM.reuseView(ViewIds.menuSidebarView, this.menuSidebarView);
            BM.reuseView(ViewIds.infiniteView, this.infiniteView);
            BM.reuseView(ViewIds.modalSearchView, this.modalSearchView);
        },
        initAdBehavior: function () {
            var onAdRendered = function (e) {
                var $tmpMarketingView = $(e.detail.container).parents('[data-view-type="marketingView"]'),
                    tmpInfiniteModel = $tmpMarketingView.data('infiniteModel'),
                    tmpView;

                console.log(">>> onAdRendered", e.detail);

                if (!_.isUndefined(tmpInfiniteModel) && tmpInfiniteModel.has('view')) {
                    tmpView = tmpInfiniteModel.get('view');
                    tmpView.setModel(e.detail);
                }
            };

            //window.addEventListener('adReceived', onAdReceived, false);
            window.addEventListener('adRendered', onAdRendered, false);
        },
        onToolbarHandler: function (pModel, pAttr) {
            pModel.set('orientation', 'horizontal');
            this.pageOffsetsModel.add({id: 'offsetToolbar', offsets: pAttr, pageRelevant: true});
        }
    });
})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.MainView = BurdaInfinite.views.MainView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.MainView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.InfiniteBlockView = BaseDynamicView.extend({
        initialize: function (pOptions) {
            BaseDynamicView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.InfiniteBlockView = BurdaInfinite.views.InfiniteBlockView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.InfiniteBlockView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.MenuMainView = Backbone.View.extend({
        events: {
            "click #menu-open-btn": function (pEvent) {
                this.clickHandler(pEvent, 'toggle-sidebar');
            },
            "click #search-open-btn": function (pEvent) {
                this.clickHandler(pEvent, 'search-open');
            }
        },
        $subMenu: {},
        offsetTop: 0,
        pageOffsetsModel: {},
        modalSearchModel: {},
        menuSidebarModel: {},
        deviceModel: null,
        breakpointDeviceModel: null,
        isMobileMode: false,
        initialize: function (pOptions) {
            _.defaults(this, pOptions || {});

            this.pageOffsetsModel = BM.reuseModel(ModelIds.pageOffsetsModel);
            this.modalSearchModel = BM.reuseModel(ModelIds.modalSearchModel);
            this.menuSidebarModel = BM.reuseModel(ModelIds.menuSidebarModel);
            this.deviceModel = BM.reuseModel(ModelIds.deviceModel);

            this.delegateEvents();
            this.createViews();
            _.delay(_.bind(this.createByContext, this), 10);

            if (this.deviceModel.isActive) {
                this.listenTo(this.deviceModel.getDeviceBreakpoints(), 'change:active', this.onDeviceBreakpointHandler, this);

                //shitty drupal 8 js-menu-active
                _.delay(_.bind(function () {
                    this.onDeviceBreakpointHandler(this.deviceModel.getDeviceBreakpoints().findWhere({active: true}));
                }, this), 20);
            }

            this.listenTo(this.pageOffsetsModel.getModel('offsetToolbar'), 'change', this.onToolbarHandler, this);
            this.listenTo(this.modalSearchModel, 'change:is_open', function (pModel) {
                this.onModalSearchHandler(pModel, 'is_open');
            }, this);

            this.listenTo(this.modalSearchModel, 'sync', function (pModel) {
                this.onModalSearchHandler(pModel, 'sync');
            }, this);
        },
        createViews: function () {
            this.$subMenu = $('#menu-submenu-navigation');
        },
        createByContext: function (pSettings) {

            var tmpSettings = _.extend({
                context: $(window)[0],
                element: this.$el,
                handler: _.bind(this.onStickyHandler, this),
                offset: _.bind(function () {
                    return this.offsetTop;
                }, this)
            }, pSettings);


            if (this.sticky !== undefined) {
                this.clearStickiness();
            }

            this.sticky = new Waypoint.Sticky(tmpSettings);
        },
        onStickyHandler: function () {
            if (this.$el.hasClass('stuck')) {
                this.$el.css('top', this.offsetTop);
                this.activateOffset();
            } else {
                this.$el.css('top', '');
                this.deactivateOffset();
            }
        },
        onToolbarHandler: function (pModel) {
            this.offsetTop = pModel.get('offsets').top;
            this.sticky.waypoint.context.refresh()
            this.onStickyHandler();
        },
        onModalSearchHandler: function (pModel, pType) {
            var tmpIsOpen = pModel.get('is_open'),
                tmpSettings = {};

            /**
             * Destroy on modal open
             * Create and show by search sync
             * Create by modal close
             */

            if (pType == 'is_open') {

                if (tmpIsOpen) {
                    this.clearStickiness();
                } else {
                    this.$el.css('top', '');
                    this.createByContext(tmpSettings);
                }

            } else if ('sync') {
                tmpSettings.context = BM.reuseView(ViewIds.modalSearchView).$el;
                tmpSettings.offset = 2500;
                this.createByContext(tmpSettings);
            }
        },
        clickHandler: function (pEvent, pType) {
            if (pType == 'toggle-sidebar') {
                this.menuSidebarModel.toggleOpenState();
            } else if ('search-open') {
                if (!this.modalSearchModel.get('is_open')) {
                    this.modalSearchModel.set('is_open', true);
                }
            }
        },
        clearStickiness: function () {
            this.sticky.destroy();
            this.onStickyHandler();
        },
        activateOffset: function () {
            //console.log(">>> activateOffset");
            this.pageOffsetsModel.add(this.getOffsetManagerModel());
        },
        deactivateOffset: function () {
            //console.log(">>> deactivateOffset");
            this.pageOffsetsModel.deactivate(this.getOffsetManagerModel());
        },
        getOffsetManagerModel: function () {
            var tmpPosition = this.$el.position(),
                tmpElementHeight = this.$el.outerHeight(true);

            return {
                id: 'offsetMenuMain',
                pageRelevant: true,
                $el: this.$el,
                offsets: {
                    top: tmpPosition.top,
                    left: 0,
                    right: 0,
                    bottom: tmpPosition.top + tmpElementHeight,
                    height: tmpElementHeight
                },
            };
        },
        bindMobileListener: function () {
            var $tmpActiveItem = this.$subMenu.find('.is-active');

            $tmpActiveItem.off('click').on('click', $.proxy(function (pEvent) {
                pEvent.preventDefault();

                this.$subMenu.toggleClass('is-open', '');
                return false;
            }, this));
        },
        unbindMobileListener: function () {
            var $tmpActiveItem = this.$subMenu.find('.is-active');
            this.$subMenu.removeClass('is-open');
            $tmpActiveItem.off('click');
        },
        onDeviceBreakpointHandler: function (pModel) {
            this.breakpointDeviceModel = pModel;

            if (pModel.id == 'smartphone' && this.isMobileMode == false) {
                this.isMobileMode = true;
                this.bindMobileListener();
            } else if (pModel.id != 'smartphone' && this.isMobileMode) {
                this.isMobileMode = false;
                this.unbindMobileListener();
            }
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.MenuMainView = BurdaInfinite.views.MenuMainView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.MenuMainView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.MenuSidebarView = BaseSidebar.extend({
        pageOffsetsModel: {},
        initialize: function (pOptions) {
            BaseSidebar.prototype.initialize.call(this, pOptions);

            this.pageOffsetsModel = BM.reuseModel(ModelIds.pageOffsetsModel);
            this.listenTo(this.pageOffsetsModel.getModel("offsetToolbar"), 'change', this.adjustPlacement, this);
            this.listenTo(this.model, 'change:is_open', this.onStateHandler, this);
        },
        adjustPlacement: function (pModel) {
            this.$el.css('padding-top', pModel.get('offsets').top);
        },
        onStateHandler: function () {
            var tmpIsOpen = this.model.get('is_open'),
                $tmpBody = $('body'),
                tmpTop = 0, tmpLeft = 0;

            if (tmpIsOpen) {
                Waypoint.disableAll();
                $tmpBody.css({
                    top: $(window).scrollTop() * -1 + 'px',
                    left: $(window).scrollLeft() * -1 + 'px'
                }).addClass('no-scroll');
            } else {
                tmpTop = parseInt($tmpBody.css('top'), 10);
                tmpLeft = parseInt($tmpBody.css('left'), 10);
                $tmpBody.css({top: ''}).removeClass('no-scroll');
                window.scrollTo(tmpLeft * -1, tmpTop * -1);

                Waypoint.enableAll();
                $(window).trigger('resize');
            }
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.MenuSidebarView = BurdaInfinite.views.MenuSidebarView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.MenuSidebarView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.ModalSearchView = BaseView.extend({
        id: 'modal-search',
        events: {
            "keyup #modal-search-input": "onInputChangeHandler",
            "click .close": "close"
        },
        offsetsPageModel: {},
        pageOffsetsModel: {},
        feedModel: {},
        feedView: {},
        $feed: {},
        $searchInputField: {},
        isSearchEnabled: false,
        initialize: function (pOptions) {
            BaseView.prototype.initialize.call(this, pOptions);

            this.delegateEvents();
            this.createView();

            this.pageOffsetsModel = BM.reuseModel(ModelIds.pageOffsetsModel);
            this.offsetsPageModel = this.pageOffsetsModel.getModel('offsetPage');
            this.feedModel = this.$feed.data('infiniteModel');
            this.feedView = this.feedModel.get('view');

            this.listenTo(this.offsetsPageModel, 'change:offsets', this.onOffsetHandler, this);
            this.listenTo(this.model, 'change:is_open', this.onStateHandler, this);
            this.listenTo(this.model, 'request', this.clearFeed, this);
            this.listenTo(this.model, 'sync', this.renderFeed, this);
        },
        createView: function () {
            this.$feed = $('#feed-modal-search', this.$el);
            this.$searchInputField = this.$el.find('#modal-search-input');
        },
        onOffsetHandler: function () {
            //console.log(this.id, ">>>>onOffsetHandler", this.offsetsPageModel.get('offsets').top, this.$el[0]);
            this.$el.css('padding-top', this.offsetsPageModel.get('offsets').top);
        },
        clearFeed: function () {
            this.model.reset();
            this.feedModel.reset(true);
        },
        renderFeed: function (pModel) {
            var $tmpElement = this.model.at(0).get('el');
            $tmpElement.fadeTo(0, 0);
            $tmpElement.stop().delay(350).fadeTo(350, 1);

            this.preloader.hide(true, true);
            this.feedView.appendElement($tmpElement);
            this.feedView.onAfterLoad($tmpElement);
            this.activateScrollBehavior();
        },
        onInputChangeHandler: function (pEvent) {
            var tmpStringLength = this.$searchInputField.val().length,
                tmpMinCharLength = parseInt(this.$searchInputField.data('min-char-length'));

            if (tmpStringLength >= tmpMinCharLength && this.isSearchEnabled == false) {
                this.isSearchEnabled = true;
                this.$el.toggleClass('is_search_enabled', this.isSearchEnabled);
            } else if (tmpStringLength < tmpMinCharLength) {
                this.isSearchEnabled = false;
                this.$el.toggleClass('is_search_enabled', this.isSearchEnabled);
            }

            this.$el.find('.message-char-length .char-count').text(Math.max(0, (tmpMinCharLength - tmpStringLength)));
            this.$el.toggleClass('is_info_char', (tmpStringLength > 0 && tmpStringLength < tmpMinCharLength));
        },
        onStateHandler: function (pModel, pIsOpen) {
            if (pIsOpen) {
                this.onOpenHandler();
            } else {
                this.onCloseHandler();
            }

            //TODO check if we need this
            //this.feedModel.set('is_disabled', !pIsOpen);
        },
        onOpenHandler: function () {
            //Waypoint.destroyAll();
            this.enableBindings();
            this.$el.modal('show');
            setTimeout($.proxy(function () {
                this.$searchInputField.trigger('focus');
            }, this), 350);
        },
        onCloseHandler: function () {
            this.disableBindings();
            this.activateScrollBehavior();
            this.$el.modal('hide');
            this.$searchInputField.focusout();
            setTimeout($.proxy(function () {
                this.clear();
            }, this), 350);
        },
        onKeyHandler: function (pEvent) {
            switch (pEvent.which) {
                case 27 :
                    this.close();
                    break;
                case 13 :
                    if (this.isSearchEnabled) this.search();
                    break;
            }
        },
        activateScrollBehavior: function () {
            this.deactivateScrollBehavior();
            $("#search-open-btn").on('click', $.proxy(this.scrollToInput, this));
        },
        deactivateScrollBehavior: function () {
            $("#search-open-btn").on('off', this.scrollToInput, this);
        },
        enableBindings: function () {
            this.disableBindings();
            $(window).on('keyup', $.proxy(this.onKeyHandler, this));
        },
        disableBindings: function () {
            $(window).off('keyup', this.onKeyHandler, this);
        },
        search: function (pVal) {
            var tmpSearchString = pVal || this.$searchInputField.val();

            if (this.preloader != undefined) this.preloader.destroy();
            this.preloader = new BurdaInfinite.views.SpinnerCubeView({el: this.$el});
            this.model.fetch(tmpSearchString);
        },
        scrollToInput: function () {
            this.$el.animate({scrollTop: (this.$searchInputField.offset().top)}, {
                duration: 'slow',
                complete: $.proxy(function () {
                    this.$searchInputField.trigger('focus');
                }, this)
            });
        },
        clear: function () {
            this.clearFeed();
            this.$searchInputField.val('');
            this.onInputChangeHandler();
        },
        close: function () {
            this.model.set('is_open', false);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.ModalSearchView = BurdaInfinite.views.ModalSearchView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.ModalSearchView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.models.ModalSearchModel = BaseCollectionModel.extend({
        defaults: {
            is_open: false,
        },
        ajaxModel: null,
        url: AppConfig.searchApiUrl,
        initialize: function (pOptions) {
            BaseCollectionModel.prototype.initialize.call(this, pOptions);
        },
        fetch: function (pString, pOptions) {
            //_.extend(pOptions, {reset: true, traditional: true});
            //return Backbone.Model.prototype.fetch.apply(this, arguments);

            if (this.ajaxModel != null) this.ajaxModel.destroy();
            this.ajaxModel = new AjaxModel({
                url: this.url + '?fulltext=' + pString,
                callback: _.bind(this.parse, this)
            });

            this.trigger('request', this);
            this.ajaxModel.execute();
        },
        parse: function (pAjaxContent) {
            var $tmpItem = $(pAjaxContent).find('.infinite-item').addBack().filter('.infinite-item');
            this.getItems().add({'el': $tmpItem});

            this.trigger('sync', this);
        },
        toggleOpenState: function () {
            this.set('is_open', !this.get('is_open'));
        }
    });


})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.ModalSearchModel = BurdaInfinite.models.ModalSearchModel.extend({
        initialize: function (pAttributes, pOptions) {
            BurdaInfinite.models.ModalSearchModel.prototype.initialize.call(this, pAttributes, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.ArticleView = BaseDynamicView.extend({
        initialize: function (pOptions) {
            BaseDynamicView.prototype.initialize.call(this, pOptions);

            this.renderParagraphSocials();
        },
        renderParagraphSocials: function () {
            if (typeof twttr != 'undefined') {
                twttr.widgets.load(
                    this.$el[0]
                );
            }

            if (typeof PinUtils != 'undefined') {
                PinUtils.build(this.$el[0]);
            }

            if (typeof instgrm != 'undefined') {
                instgrm.Embeds.process();
            }

            if (typeof tracdelight != "undefined") {
                window.tracdelight.then(_.bind(function (td) {
                    td.parse(this.$el[0]);
                }, this)).catch(function (err) {
                    console.error("Tracdelight Error", err);
                });
            }

        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.ArticleView = BurdaInfinite.views.ArticleView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.ArticleView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.GalleryView = BaseView.extend({
        mediaId: null,
        initialize: function (pOptions) {
            BaseView.prototype.initialize.call(this, pOptions);

            this.mediaId = this.$el.data('media-id').toString();
            this.createView();
        },
        createView: function () {
            var $tmpSwiper = this.$el.swiper({
                speed: parseInt($.browser.version, 10) <= 9 ? 0 : 350,
                keyboardControl: false,
                loop: true,
                spaceBetween: 10,
                lazyLoading: false,
                lazyLoadingInPrevNext: true,
                lazyLoadingOnTransitionStart: true,
                preloadImages: true,
                setWrapperSize: true,
                runCallbacksOnInit: false,
                grabCursor: true,
                onSlideChangeStart: $.proxy(function (pSwiper, pEvent) {
                    var tmpCurrentIndex = this.getCurrentIndex(pSwiper);
                    this.el.find('.text-item-count span').text(tmpCurrentIndex);
                    this.resizeContent(pSwiper);

                    if (typeof TrackingManager != 'undefined') {
                        TrackingManager.trackIVW();
                        TrackingManager.trackPageView(Backbone.history.location.pathname + '/gallery_' + this.mediaId);
                        TrackingManager.trackEvent({
                            category: 'click',
                            action: 'gallery',
                            label: this.mediaId
                        });
                    }
                }, this)
            });


            this.updateSocials(this.$el.find('.swiper-slide-duplicate'));
            this.resizeContent($tmpSwiper);
            this.fitImages($tmpSwiper);

            $(window).on('resize', $.proxy(function (pEvent) {
                _.delay(_.bind(function () {
                    this.resizeContent($tmpSwiper);
                    this.fitImages($tmpSwiper);
                }, this), 10);
            }, this));

            this.$el.data('api', $tmpSwiper);
            this.$el.find('.swiper-button-prev').on('click', function () {
                $tmpSwiper.slidePrev();
            });
            this.$el.find('.swiper-button-next').on('click', function () {
                $tmpSwiper.slideNext();
            });
        },
        getCurrentIndex: function (pSwiperApi) {
            var tmpSliderItems = $(pSwiperApi.container).find('.swiper-slide').not('.swiper-slide-duplicate'),
                tmpActiveSlide = pSwiperApi.activeIndex;

            if (tmpActiveSlide > tmpSliderItems.length) {
                tmpActiveSlide = Math.abs(tmpSliderItems.length - tmpActiveSlide);
            } else if (tmpActiveSlide == 0) {
                tmpActiveSlide = tmpSliderItems.length;
            }

            return Math.max(1, tmpActiveSlide - tmpSliderItems.slice(0, tmpActiveSlide).filter('.ads-container-gallery').length);
        },
        resizeContent: function (pSwiper) {
            var $tmpGalleryWrapper = $(pSwiper.container).find('.swiper-wrapper'),
                $tmpCurrentElement = $tmpGalleryWrapper.find('.swiper-slide-active'),
                tmpHeight = $tmpCurrentElement.find('.img-container').outerHeight(true) + $tmpCurrentElement.find('.caption').outerHeight(true);

            $tmpGalleryWrapper.height(tmpHeight);
        },
        fitImages: function (pSwiper) {
            //orientation render bug :(
            //if ($.browser.chrome || $.browser.android) {
            this.$el.find('img').height(this.$el.find('.img-container').eq(0).outerHeight(true));
            //}
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.GalleryView = BurdaInfinite.views.GalleryView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.GalleryView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.StickyView = BaseDynamicView.extend({
        pageOffsetsModel: {},
        offsetsPageModel: {},
        context: null,
        sticky: null,
        stickyStop: null,
        hasAd: false,
        posTop: 0,
        offsetTop: 0,
        height: 0,
        contentHeight: 0,
        lastBreakpoint: '',
        elementBreakpoints: [],
        initialize: function (pOptions) {
            BaseDynamicView.prototype.initialize.call(this, pOptions);

            this.pageOffsetsModel = BM.reuseModel(ModelIds.pageOffsetsModel);
            this.offsetsPageModel = this.pageOffsetsModel.getModel('offsetPage');
            this.offsetTop = this.offsetsPageModel.get('offsets').top;
            this.posTop = Math.floor(this.$el.offset().top);
            this.height = Math.floor(this.$el.height());
            this.elementBreakpoints = $(this.$el.data('breakpoints')).toArray();
            this.hasAd = this.$el.find('.ad-container').length > 0;

            /**
             * default breakpoints
             */
            if (this.elementBreakpoints.length <= 0) this.elementBreakpoints.push('tablet', 'desktop');
            this.breakpointDeviceModel = this.deviceModel.getDeviceBreakpoints().findWhere({active: true});

            this.listenTo(this.offsetsPageModel, 'change:offsets', this.onOffsetHandler, this);
            this.listenTo(this.model, 'change:inviewEnabled', this.onEnabledHandler, this);
            this.listenTo(this.model, 'change:contentHeight', this.onContentHeightHandler, this);
            this.listenTo(this.deviceModel.getDeviceBreakpoints(), 'change:active', this.onDeviceBreakpointHandler, this);

            //TODO check if throttle or debounce is better
            $(this.context).bind('scroll.sticky', _.bind(_.throttle(function () {
                this.onCheckHandler();
            }, 500), this));

            window.addEventListener('adRendered', _.bind(this.onAdRenderedHandler, this), false);

            this.updateView();
        },
        updateView: function () {
            var tmpCurrentBreakpoint = this.breakpointDeviceModel.id;

            if (this.elementBreakpoints.indexOf(tmpCurrentBreakpoint) >= 0 && this.lastBreakpoint != tmpCurrentBreakpoint) {
                this.createStickiness();
            } else if (this.sticky != null) {
                this.removeStickiness();
            }

            this.lastBreakpoint = tmpCurrentBreakpoint;
        },
        createStickiness: function () {
            if (this.sticky !== null) {
                this.removeStickiness();
            }

            this.sticky = new Waypoint.Sticky({
                context: this.context[0],
                element: this.$el,
                useWrapperHeight: false,
                wrapper: false,
                handler: _.bind(this.onStickyHandler, this),
                offset: _.bind(function () {
                    return this.offsetTop + AppConfig.padding;
                }, this)
            });

            this.stickyStop = new Waypoint({
                context: this.context[0],
                element: this.$el.parent(),
                handler: _.bind(function (pDirection) {

                    if (pDirection == 'down') {
                        this.$el.addClass('stuck-stop');
                    } else if (pDirection == 'up') {
                        this.$el.removeClass('stuck-stop');
                    }
                }, this),
                offset: _.bind(function () {
                    //remove .parent() if no wrapper exists
                    return -(this.$el.parent().outerHeight() - (this.height + this.offsetTop + AppConfig.padding));
                }, this)
            });
        },
        refresh: function () {
            if (this.sticky == null) return;

            this.sticky.waypoint.context.refresh();
            this.stickyStop.context.refresh();
        },
        removeStickiness: function () {
            this.sticky.destroy();
            this.stickyStop.destroy();
            this.sticky = null;
            this.stickyStop = null;
            this.$el.removeClass('stuck-stop');
            this.onStickyHandler();
        },
        onStickyHandler: function (pDirection) {
            if (this.$el.hasClass('stuck')) {
                this.$el.css('top', this.offsetTop + AppConfig.padding);
            } else {
                this.$el.css('top', '');
            }
        },
        onDeviceBreakpointHandler: function (pModel) {
            this.breakpointDeviceModel = pModel;
            this.updateView();
        },
        onCheckHandler: function (pDirection) {
            if (this.sticky == null || this.enabled == false) return;

            var tmpHeight = Math.floor(this.$el.height()),
                tmpPosTop;

            if (tmpHeight == 0) return;

            //if (this.$el.parent('.sticky-wrapper').length > 0) {
            //    tmpPosTop = Math.floor(this.$el.parent('.sticky-wrapper').offset().top);
            //} else {
            //}
            tmpPosTop = Math.floor(this.$el.offset().top);

            if (this.posTop == tmpPosTop && this.height == tmpHeight) return;

            this.posTop = tmpPosTop;
            this.height = tmpHeight;
            this.refresh();
        },
        onOffsetHandler: function (pModel) {
            this.offsetTop = pModel.get('offsets').top;
            if (this.stickyStop != null) this.stickyStop.context.refresh();
            this.onStickyHandler();
        },
        onAdRenderedHandler: function () {
            if (this.hasAd) this.onCheckHandler();
        },
        onEnabledHandler: function (pModel) {
            if (pModel != this.model) return; //event bubbling

            if (pModel.get('inviewEnabled') == true) {
                this.enableView();
            } else {
                this.disableView();
            }
        },
        onContentHeightHandler: function (pModel) {
            this.onCheckHandler();
        },
        enableView: function () {
            BaseDynamicView.prototype.enableView();

            if (this.sticky == null) return;
            this.sticky.waypoint.enable();
            this.stickyStop.enable();
        },
        disableView: function () {
            BaseDynamicView.prototype.disableView();

            if (this.sticky == null) return;
            this.sticky.waypoint.disable();
            this.stickyStop.disable();
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.StickyView = BurdaInfinite.views.StickyView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.StickyView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.ProductsView = BaseView.extend({
        $products: [],
        $productHeadlines: [],
        initialize: function (pOptions) {
            BaseView.prototype.initialize.call(this, pOptions);

            this.$products = this.$el.find('.item-product');
            this.$productHeadlines = this.$products.find('.text-headline');
            this.checkText();
        },
        checkText: function () {
            this.$productHeadlines.dotdotdot();
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.ProductsView = BurdaInfinite.views.ProductsView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.ProductsView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.MarketingView = BaseView.extend({
        $adSlotContainer: [],
        $dynamicIframe: [],
        marketingSlotId: '',
        adProvider: null,
        marketingSettings: null,
        breakpointDeviceModel: null,
        dynamicAdscModel: null,
        adModel: null,
        globalAdscModel: null,
        showByModel: false,
        initialized: false,
        enabled: true,
        currentAdClass: "",
        adType: "",
        adFormat: "",
        initialize: function (pOptions) {
            BaseView.prototype.initialize.call(this, pOptions);

            if(!drupalSettings.hasOwnProperty('AdProvider')  || !drupalSettings.hasOwnProperty('AdvertisingSlots')) {
                console.log("marketingView needs drupalSettings.AdProvider && drupalSettings.AdvertisingSlots settings")
                return;
            }

            this.configureView();
            this.hide();

            this.breakpointDeviceModel = this.deviceModel.getDeviceBreakpoints().findWhere({active: true});

            this.listenTo(this.deviceModel.getDeviceBreakpoints(), 'change:active', this.onDeviceBreakpointHandler, this);
            this.listenTo(this.model, 'change:inviewEnabled', this.onEnabledHandler, this);
            this.buildAd();
        },
        configureView: function () {
            this.adProvider = drupalSettings.AdProvider;
            //this.adProvider = AppConfig.ad_orbyd;

            this.globalAdscModel = BM.reuseModel(ModelIds.adscModel);
            this.$adSlotContainer = this.$el.find(".ad-container");
            this.marketingSlotId = this.$adSlotContainer.attr('id');
            if (_.has(drupalSettings.AdvertisingSlots, this.marketingSlotId)) {
                this.marketingSettings = drupalSettings.AdvertisingSlots[this.marketingSlotId];
            }
        },
        buildAd: function () {
            this.adType = this.breakpointDeviceModel.id;
            this.adFormat = this.marketingSettings[this.adType];
            this.$adSlotContainer.empty();

            if (this.adFormat == undefined || this.adFormat == '') return;

            if (this.adProvider == AppConfig.ad_orbyd) {
                //i want the TFM API back :((( tfm ftw!! sounds sad/mad but it's true
                this.createOrbydAd();
                this.initialized = true;
            } else if (this.adProvider == AppConfig.ad_fag && typeof TFM != "undefined") {
                //TODO change this after tfm API change
                this.globalAdscModel.checkSet(this.dynamicAdscModel);
                TFM.Tag.getAdTag(this.adFormat, this.marketingSlotId);
                this.initialized = true;
            }
        },
        updateView: function () {
            var tmpPrefix = 'ad-';

            this.$el.removeClass(tmpPrefix + this.currentAdClass).addClass(tmpPrefix + this.adModel.type);

            if (!this.adModel.isFiller && !this.adModel.isEmpty) {
                this.showByModel = true;
                this.show();
            } else {
                this.removeFixHeight();
                this.showByModel = false;
                this.hide();
            }

            this.currentAdClass = tmpPrefix + this.adModel.type;
        },
        createOrbydAd: function (pSettings) {

            var tmpAdURL = '//cdn-tags.orbyd.com/' + this.adFormat.toString(),
                tmpAdscModel = {},
                tmpReferer = window.location.host + AppConfig.initialLocation,
                tmpDataStr = '';

            this.$dynamicIframe = document.createElement('iframe');
            this.$dynamicIframe.src = 'about:blank';
            this.$dynamicIframe.seamless = "";
            this.$dynamicIframe.scrolling = "no";
            this.$dynamicIframe.frameBorder = "0";
            this.$dynamicIframe.marginWidth = "0";
            this.$dynamicIframe.marginHeight = "0";
            this.$dynamicIframe.width = "0";
            this.$dynamicIframe.height = "0";
            this.$dynamicIframe.allowtransparency = "true";

            this.$adSlotContainer.append(this.$dynamicIframe);

            if (this.dynamicAdscModel == undefined || this.dynamicAdscModel == null) {
                tmpAdscModel = this.globalAdscModel;
            } else {
                tmpAdscModel = this.dynamicAdscModel;
            }

            tmpDataStr = 'adunit1=' + tmpAdscModel.get('adsc').adsc_adunit1;
            tmpDataStr += '&adunit2=' + tmpAdscModel.get('adsc').adsc_adunit2;
            tmpDataStr += '&adunit3=' + tmpAdscModel.get('adsc').adsc_adunit3;
            tmpDataStr += '&keyword=' + tmpAdscModel.get('adsc').adsc_keyword;

            var content = '<!DOCTYPE html>'
                + '<head>'
                + '<body>'
                + '<script type="text/javascript">'
                + 'var aplus_passback = "";'
                + 'var aplus_data = "' + tmpDataStr + '";'
                + 'var aplus_clickurl = "";'
                + 'var aplus_referrer = "' + tmpReferer + '";'
                + '<\/script>'
                + '<script type="text/javascript" src="' + tmpAdURL + '">'
                + '<\/script>'
                + '</body></html>';

            //console.log(">>> AD aplus_data", tmpDataStr, this.adFormat.toString(), this.$el);

            this.$dynamicIframe.contentWindow.contents = content;
            this.$dynamicIframe.src = 'javascript:window["contents"]';

            $(this.$dynamicIframe).load(_.bind(function (pEvent) {
                var tmpIFrameWidth = $(this.$dynamicIframe).contents().width(),
                    tmpIFrameHeight = $(this.$dynamicIframe).contents().height();

                $(this.$dynamicIframe).css({'height': tmpIFrameHeight, 'width': tmpIFrameWidth});
                this.$adSlotContainer.height(tmpIFrameHeight);

                //ad-shizzl bug ://
                //todo check this after orbyd-fix | > 0
                if (tmpIFrameHeight > 20) {
                    this.show();
                } else {
                    this.hide();
                }
            }, this));

        },
        onDeviceBreakpointHandler: function (pModel) {
            this.breakpointDeviceModel = pModel;
            this.removeFixHeight();
            if (this.enabled === true) this.buildAd();
        },
        onEnabledHandler: function (pModel) {
            if (pModel != this.model) return; //event bubbling

            if (pModel.get('inviewEnabled') == true) {
                this.enableView();
            } else {
                this.disableView();
            }
        },
        enableView: function () {
            if (this.enabled) return;

            if (this.adProvider == AppConfig.ad_fag && !_.isNull(this.adModel)) {
                if (this.$el.hasClass('ad-bsad')) return;

                this.buildAd();
                this.updateView();
            } else if (this.adProvider == AppConfig.ad_orbyd) {
                this.buildAd();
            }
            this.enabled = true;
        },
        disableView: function () {
            if (this.$el.hasClass('ad-bsad') || !this.enabled) return;

            if (this.$el.hasClass('region-full-content') && tmpHeight != 0) {
                var tmpHeight = this.$adSlotContainer.height();
                this.$adSlotContainer.css('height', this.$adSlotContainer.height());
                this.$adSlotContainer.empty();
            } else {
                this.hide();
                this.$adSlotContainer.empty();
            }

            this.enabled = false;
        },
        removeFixHeight: function () {
            if (this.$adSlotContainer.prop("style")["height"] !== '') this.$adSlotContainer.css('height', 'auto');
        },
        show: function () {
            this.$el.removeClass('ad-inactive').addClass('ad-active');
            this.model.set('contentHeight', this.$el.height());
            Waypoint.refreshAll();
        },
        hide: function () {
            this.$el.removeClass('ad-active').addClass('ad-inactive');
            this.model.set('contentHeight', 0);
        },
        setModel: function (pAdModel) {
            this.adModel = pAdModel;
            this.updateView();
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.MarketingView = BurdaInfinite.views.MarketingView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.MarketingView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    BurdaInfinite.views.SpinnerCubeView = Backbone.View.extend({

        height: 0,
        hidden: false,
        $template: {},
        preRenderCallback: {},
        template: _.template('<div class="spinner-container">'
            + '<div class="spinner spinner-cube">'
            + '<div class="spinner-cube-item-1 spinner-cube-item"></div>'
            + '<div class="spinner-cube-item-2 spinner-cube-item"></div>'
            + '<div class="spinner-cube-item-4 spinner-cube-item"></div>'
            + '<div class="spinner-cube-item-3 spinner-cube-item"></div>'
            + '</div>'
            + '</div>'),

        initialize: function (pSettings) {
            _.extend(this, pSettings);

            this.render();
            if (!this.hidden) this.show();
        },
        render: function () {
            if (typeof this.preRenderCallback === 'function') {
                this.$template = this.preRenderCallback($(this.template()));
            } else {
                this.$template = $(this.template()).appendTo(this.$el);
            }

            //this.height = this.$template.height();
            //this.$template.css('height', 0);
            //this.$template.css('opacity', 0);
            return this;
        },
        show: function (pAnimated) {
            this.$template.addClass('in');
            //var tmpDuration = pAnimated == false ? 0 : 350;
            //this.$template.stop().animate({opacity: 1, height: this.height}, {
            //    duration: tmpDuration,
            //    easing: 'easeInOutCubic'
            //});
        },
        hide: function (pAnimated, pRemove) {
            this.$template.removeClass('in');

            //var tmpDuration = pAnimated == false ? 0 : 350,
            //    tmpRemove = pRemove || false;
            //
            //this.$template.stop().animate({opacity: 0}, {duration: tmpDuration, easing: 'easeInOutCubic'});
            //this.$template.animate({height: 0}, {
            //    duration: tmpDuration,
            //    easing: 'easeInOutCubic',
            //    complete: $.proxy(function () {
            //        if (tmpRemove) this.destroy();
            //    }, this)
            //});
        },
        destroy: function () {
            this.$template.remove();
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

    "use strict";

    window.SpinnerCubeView = BurdaInfinite.views.SpinnerCubeView.extend({
        initialize: function (pOptions) {
            BurdaInfinite.views.SpinnerCubeView.prototype.initialize.call(this, pOptions);
        }
    });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
;
