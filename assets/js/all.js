/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    var n = []
      , i = Object.getPrototypeOf
      , o = n.slice
      , r = n.flat ? function(t) {
        return n.flat.call(t)
    }
    : function(t) {
        return n.concat.apply([], t)
    }
      , s = n.push
      , a = n.indexOf
      , l = {}
      , c = l.toString
      , u = l.hasOwnProperty
      , d = u.toString
      , p = d.call(Object)
      , h = {}
      , f = function(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , g = function(t) {
        return null != t && t === t.window
    }
      , m = t.document
      , v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function y(t, e, n) {
        var i, o, r = (n = n || m).createElement("script");
        if (r.text = t,
        e)
            for (i in v)
                (o = e[i] || e.getAttribute && e.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
    }
    var w = "3.5.1"
      , x = function(t, e) {
        return new x.fn.init(t,e)
    };
    function T(t) {
        var e = !!t && "length"in t && t.length
          , n = b(t);
        return !f(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = x.merge(this.constructor(), t);
            return e.prevObject = this,
            e
        },
        each: function(t) {
            return x.each(this, t)
        },
        map: function(t) {
            return this.pushStack(x.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, function(t, e) {
                return (e + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(x.grep(this, function(t, e) {
                return e % 2
            }))
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    x.extend = x.fn.extend = function() {
        var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || f(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    i = t[e],
                    "__proto__" !== e && s !== i && (c && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[e],
                    r = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {},
                    o = !1,
                    s[e] = x.extend(c, r, i)) : void 0 !== i && (s[e] = i));
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== c.call(t) || (e = i(t)) && ("function" != typeof (n = u.call(e, "constructor") && e.constructor) || d.call(n) !== p))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        globalEval: function(t, e, n) {
            y(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function(t, e) {
            var n, i = 0;
            if (T(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                    ;
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break;
            return t
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (T(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)),
            n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : a.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++)
                t[o++] = e[i];
            return t.length = o,
            t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++)
                !e(t[o], o) !== s && i.push(t[o]);
            return i
        },
        map: function(t, e, n) {
            var i, o, s = 0, a = [];
            if (T(t))
                for (i = t.length; s < i; s++)
                    null != (o = e(t[s], s, n)) && a.push(o);
            else
                for (s in t)
                    null != (o = e(t[s], s, n)) && a.push(o);
            return r(a)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
    x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    });
    var C = function(t) {
        var e, n, i, o, r, s, a, l, c, u, d, p, h, f, g, m, v, y, b, w = "sizzle" + 1 * new Date, x = t.document, T = 0, C = 0, _ = lt(), S = lt(), E = lt(), k = lt(), A = function(t, e) {
            return t === e && (d = !0),
            0
        }, D = {}.hasOwnProperty, I = [], $ = I.pop, P = I.push, L = I.push, N = I.slice, O = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", j = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]", F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), q = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), W = new RegExp("^" + M + "*," + M + "*"), U = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + H + "$"), Y = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + j),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, G = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), nt = function(t, e) {
            var n = "0x" + t.slice(1) - 65536;
            return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ot = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, rt = function() {
            p()
        }, st = wt(function(t) {
            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(I = N.call(x.childNodes), x.childNodes),
            I[x.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: I.length ? function(t, e) {
                    P.apply(t, N.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        function at(t, e, i, o) {
            var r, a, c, u, d, f, v, y = e && e.ownerDocument, x = e ? e.nodeType : 9;
            if (i = i || [],
            "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x)
                return i;
            if (!o && (p(e),
            e = e || h,
            g)) {
                if (11 !== x && (d = J.exec(t)))
                    if (r = d[1]) {
                        if (9 === x) {
                            if (!(c = e.getElementById(r)))
                                return i;
                            if (c.id === r)
                                return i.push(c),
                                i
                        } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r)
                            return i.push(c),
                            i
                    } else {
                        if (d[2])
                            return L.apply(i, e.getElementsByTagName(t)),
                            i;
                        if ((r = d[3]) && n.getElementsByClassName && e.getElementsByClassName)
                            return L.apply(i, e.getElementsByClassName(r)),
                            i
                    }
                if (n.qsa && !k[t + " "] && (!m || !m.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                    if (v = t,
                    y = e,
                    1 === x && (z.test(t) || U.test(t))) {
                        for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(it, ot) : e.setAttribute("id", u = w)),
                        a = (f = s(t)).length; a--; )
                            f[a] = (u ? "#" + u : ":scope") + " " + bt(f[a]);
                        v = f.join(",")
                    }
                    try {
                        return L.apply(i, y.querySelectorAll(v)),
                        i
                    } catch (e) {
                        k(t, !0)
                    } finally {
                        u === w && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(q, "$1"), e, i, o)
        }
        function lt() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                e[n + " "] = o
            }
        }
        function ct(t) {
            return t[w] = !0,
            t
        }
        function ut(t) {
            var e = h.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function dt(t, e) {
            for (var n = t.split("|"), o = n.length; o--; )
                i.attrHandle[n[o]] = e
        }
        function pt(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function ht(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function ft(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function gt(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function mt(t) {
            return ct(function(e) {
                return e = +e,
                ct(function(n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--; )
                        n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = at.support = {},
        r = at.isXML = function(t) {
            var e = t.namespaceURI
              , n = (t.ownerDocument || t).documentElement;
            return !G.test(e || n && n.nodeName || "HTML")
        }
        ,
        p = at.setDocument = function(t) {
            var e, o, s = t ? t.ownerDocument || t : x;
            return s != h && 9 === s.nodeType && s.documentElement && (f = (h = s).documentElement,
            g = !r(h),
            x != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", rt, !1) : o.attachEvent && o.attachEvent("onunload", rt)),
            n.scope = ut(function(t) {
                return f.appendChild(t).appendChild(h.createElement("div")),
                void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
            }),
            n.attributes = ut(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            n.getElementsByTagName = ut(function(t) {
                return t.appendChild(h.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Z.test(h.getElementsByClassName),
            n.getById = ut(function(t) {
                return f.appendChild(t).id = w,
                !h.getElementsByName || !h.getElementsByName(w).length
            }),
            n.getById ? (i.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ,
            i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n, i, o, r = e.getElementById(t);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === t)
                            return [r];
                        for (o = e.getElementsByName(t),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === t)
                                return [r]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && g)
                    return e.getElementsByClassName(t)
            }
            ,
            v = [],
            m = [],
            (n.qsa = Z.test(h.querySelectorAll)) && (ut(function(t) {
                var e;
                f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + R + ")"),
                t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                (e = h.createElement("input")).setAttribute("name", ""),
                t.appendChild(e),
                t.querySelectorAll("[name='']").length || m.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                t.querySelectorAll(":checked").length || m.push(":checked"),
                t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"),
                t.querySelectorAll("\\\f"),
                m.push("[\\r\\n\\f]")
            }),
            ut(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = h.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                f.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function(t) {
                n.disconnectedMatch = y.call(t, "*"),
                y.call(t, "[s!='']:x"),
                v.push("!=", F)
            }),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            e = Z.test(f.compareDocumentPosition),
            b = e || Z.test(f.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            A = e ? function(t, e) {
                if (t === e)
                    return d = !0,
                    0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == h || t.ownerDocument == x && b(x, t) ? -1 : e == h || e.ownerDocument == x && b(x, e) ? 1 : u ? O(u, t) - O(u, e) : 0 : 4 & i ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return d = !0,
                    0;
                var n, i = 0, o = t.parentNode, r = e.parentNode, s = [t], a = [e];
                if (!o || !r)
                    return t == h ? -1 : e == h ? 1 : o ? -1 : r ? 1 : u ? O(u, t) - O(u, e) : 0;
                if (o === r)
                    return pt(t, e);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? pt(s[i], a[i]) : s[i] == x ? -1 : a[i] == x ? 1 : 0
            }
            ),
            h
        }
        ,
        at.matches = function(t, e) {
            return at(t, null, null, e)
        }
        ,
        at.matchesSelector = function(t, e) {
            if (p(t),
            n.matchesSelector && g && !k[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e)))
                try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (t) {
                    k(e, !0)
                }
            return 0 < at(e, h, null, [t]).length
        }
        ,
        at.contains = function(t, e) {
            return (t.ownerDocument || t) != h && p(t),
            b(t, e)
        }
        ,
        at.attr = function(t, e) {
            (t.ownerDocument || t) != h && p(t);
            var o = i.attrHandle[e.toLowerCase()]
              , r = o && D.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
            return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }
        ,
        at.escape = function(t) {
            return (t + "").replace(it, ot)
        }
        ,
        at.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        at.uniqueSort = function(t) {
            var e, i = [], o = 0, r = 0;
            if (d = !n.detectDuplicates,
            u = !n.sortStable && t.slice(0),
            t.sort(A),
            d) {
                for (; e = t[r++]; )
                    e === t[r] && (o = i.push(r));
                for (; o--; )
                    t.splice(i[o], 1)
            }
            return u = null,
            t
        }
        ,
        o = at.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += o(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += o(e);
            return n
        }
        ,
        (i = at.selectors = {
            cacheLength: 50,
            createPseudo: ct,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(et, nt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = _[t + " "];
                    return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && _(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, e, n) {
                    return function(i) {
                        var o = at.attr(i, t);
                        return null == o ? "!=" === e : !e || (o += "",
                        "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && -1 < o.indexOf(n) : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? -1 < (" " + o.replace(B, " ") + " ").indexOf(n) : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3)
                      , s = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, l) {
                        var c, u, d, p, h, f, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (r) {
                                for (; g; ) {
                                    for (p = e; p = p[g]; )
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (b = (h = (c = (u = (d = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === T && c[1]) && c[2],
                                p = h && m.childNodes[h]; p = ++h && p && p[g] || (b = h = 0) || f.pop(); )
                                    if (1 === p.nodeType && ++b && p === e) {
                                        u[t] = [T, h, b];
                                        break
                                    }
                            } else if (y && (b = h = (c = (u = (d = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === T && c[1]),
                            !1 === b)
                                for (; (p = ++h && p && p[g] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [T, b]),
                                p !== e)); )
                                    ;
                            return (b -= o) === i || b % i == 0 && 0 <= b / i
                        }
                    }
                },
                PSEUDO: function(t, e) {
                    var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                    return o[w] ? o(e) : 1 < o.length ? (n = [t, t, "", e],
                    i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function(t, n) {
                        for (var i, r = o(t, e), s = r.length; s--; )
                            t[i = O(t, r[s])] = !(n[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: ct(function(t) {
                    var e = []
                      , n = []
                      , i = a(t.replace(q, "$1"));
                    return i[w] ? ct(function(t, e, n, o) {
                        for (var r, s = i(t, null, o, []), a = t.length; a--; )
                            (r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, o, r) {
                        return e[0] = t,
                        i(e, null, r, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: ct(function(t) {
                    return function(e) {
                        return 0 < at(t, e).length
                    }
                }),
                contains: ct(function(t) {
                    return t = t.replace(et, nt),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: ct(function(t) {
                    return V.test(t || "") || at.error("unsupported lang: " + t),
                    t = t.replace(et, nt).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === f
                },
                focus: function(t) {
                    return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: gt(!1),
                disabled: gt(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !i.pseudos.empty(t)
                },
                header: function(t) {
                    return Q.test(t.nodeName)
                },
                input: function(t) {
                    return K.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: mt(function() {
                    return [0]
                }),
                last: mt(function(t, e) {
                    return [e - 1]
                }),
                eq: mt(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: mt(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: mt(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: mt(function(t, e, n) {
                    for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i; )
                        t.push(i);
                    return t
                }),
                gt: mt(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[e] = ht(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            i.pseudos[e] = ft(e);
        function yt() {}
        function bt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++)
                i += t[e].value;
            return i
        }
        function wt(t, e, n) {
            var i = e.dir
              , o = e.next
              , r = o || i
              , s = n && "parentNode" === r
              , a = C++;
            return e.first ? function(e, n, o) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || s)
                        return t(e, n, o);
                return !1
            }
            : function(e, n, l) {
                var c, u, d, p = [T, a];
                if (l) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || s) && t(e, n, l))
                            return !0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || s)
                            if (u = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}),
                            o && o === e.nodeName.toLowerCase())
                                e = e[i] || e;
                            else {
                                if ((c = u[r]) && c[0] === T && c[1] === a)
                                    return p[2] = c[2];
                                if ((u[r] = p)[2] = t(e, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function xt(t) {
            return 1 < t.length ? function(e, n, i) {
                for (var o = t.length; o--; )
                    if (!t[o](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function Tt(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
                (r = t[a]) && (n && !n(r, i, o) || (s.push(r),
                c && e.push(a)));
            return s
        }
        function Ct(t, e, n, i, o, r) {
            return i && !i[w] && (i = Ct(i)),
            o && !o[w] && (o = Ct(o, r)),
            ct(function(r, s, a, l) {
                var c, u, d, p = [], h = [], f = s.length, g = r || function(t, e, n) {
                    for (var i = 0, o = e.length; i < o; i++)
                        at(t, e[i], n);
                    return n
                }(e || "*", a.nodeType ? [a] : a, []), m = !t || !r && e ? g : Tt(g, p, t, a, l), v = n ? o || (r ? t : f || i) ? [] : s : m;
                if (n && n(m, v, a, l),
                i)
                    for (c = Tt(v, h),
                    i(c, [], a, l),
                    u = c.length; u--; )
                        (d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (c = [],
                            u = v.length; u--; )
                                (d = v[u]) && c.push(m[u] = d);
                            o(null, v = [], c, l)
                        }
                        for (u = v.length; u--; )
                            (d = v[u]) && -1 < (c = o ? O(r, d) : p[u]) && (r[c] = !(s[c] = d))
                    }
                } else
                    v = Tt(v === s ? v.splice(f, v.length) : v),
                    o ? o(null, s, v, l) : L.apply(s, v)
            })
        }
        function _t(t) {
            for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = wt(function(t) {
                return t === e
            }, a, !0), d = wt(function(t) {
                return -1 < O(e, t)
            }, a, !0), p = [function(t, n, i) {
                var o = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : d(t, n, i));
                return e = null,
                o
            }
            ]; l < r; l++)
                if (n = i.relative[t[l].type])
                    p = [wt(xt(p), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                        for (o = ++l; o < r && !i.relative[t[o].type]; o++)
                            ;
                        return Ct(1 < l && xt(p), 1 < l && bt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), n, l < o && _t(t.slice(l, o)), o < r && _t(t = t.slice(o)), o < r && bt(t))
                    }
                    p.push(n)
                }
            return xt(p)
        }
        return yt.prototype = i.filters = i.pseudos,
        i.setFilters = new yt,
        s = at.tokenize = function(t, e) {
            var n, o, r, s, a, l, c, u = S[t + " "];
            if (u)
                return e ? 0 : u.slice(0);
            for (a = t,
            l = [],
            c = i.preFilter; a; ) {
                for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                l.push(r = [])),
                n = !1,
                (o = U.exec(a)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(q, " ")
                }),
                a = a.slice(n.length)),
                i.filter)
                    !(o = Y[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return e ? a.length : a ? at.error(t) : S(t, l).slice(0)
        }
        ,
        a = at.compile = function(t, e) {
            var n, o, r, a, l, u, d = [], f = [], m = E[t + " "];
            if (!m) {
                for (e || (e = s(t)),
                n = e.length; n--; )
                    (m = _t(e[n]))[w] ? d.push(m) : f.push(m);
                (m = E(t, (o = f,
                a = 0 < (r = d).length,
                l = 0 < o.length,
                u = function(t, e, n, s, u) {
                    var d, f, m, v = 0, y = "0", b = t && [], w = [], x = c, C = t || l && i.find.TAG("*", u), _ = T += null == x ? 1 : Math.random() || .1, S = C.length;
                    for (u && (c = e == h || e || u); y !== S && null != (d = C[y]); y++) {
                        if (l && d) {
                            for (f = 0,
                            e || d.ownerDocument == h || (p(d),
                            n = !g); m = o[f++]; )
                                if (m(d, e || h, n)) {
                                    s.push(d);
                                    break
                                }
                            u && (T = _)
                        }
                        a && ((d = !m && d) && v--,
                        t && b.push(d))
                    }
                    if (v += y,
                    a && y !== v) {
                        for (f = 0; m = r[f++]; )
                            m(b, w, e, n);
                        if (t) {
                            if (0 < v)
                                for (; y--; )
                                    b[y] || w[y] || (w[y] = $.call(s));
                            w = Tt(w)
                        }
                        L.apply(s, w),
                        u && !t && 0 < w.length && 1 < v + r.length && at.uniqueSort(s)
                    }
                    return u && (T = _,
                    c = x),
                    b
                }
                ,
                a ? ct(u) : u))).selector = t
            }
            return m
        }
        ,
        l = at.select = function(t, e, n, o) {
            var r, l, c, u, d, p = "function" == typeof t && t, h = !o && s(t = p.selector || t);
            if (n = n || [],
            1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0]))
                        return n;
                    p && (e = e.parentNode),
                    t = t.slice(l.shift().value.length)
                }
                for (r = Y.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r],
                !i.relative[u = c.type]); )
                    if ((d = i.find[u]) && (o = d(c.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                        if (l.splice(r, 1),
                        !(t = o.length && bt(l)))
                            return L.apply(n, o),
                            n;
                        break
                    }
            }
            return (p || a(t, h))(o, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e),
            n
        }
        ,
        n.sortStable = w.split("").sort(A).join("") === w,
        n.detectDuplicates = !!d,
        p(),
        n.sortDetached = ut(function(t) {
            return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
        }),
        ut(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || dt("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ut(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || dt("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        ut(function(t) {
            return null == t.getAttribute("disabled")
        }) || dt(R, function(t, e, n) {
            var i;
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        at
    }(t);
    x.find = C,
    x.expr = C.selectors,
    x.expr[":"] = x.expr.pseudos,
    x.uniqueSort = x.unique = C.uniqueSort,
    x.text = C.getText,
    x.isXMLDoc = C.isXML,
    x.contains = C.contains,
    x.escapeSelector = C.escape;
    var _ = function(t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (o && x(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
      , S = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , E = x.expr.match.needsContext;
    function k(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(t, e, n) {
        return f(e) ? x.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? x.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? x.grep(t, function(t) {
            return -1 < a.call(e, t) !== n
        }) : x.filter(e, t, n)
    }
    x.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? x.find.matchesSelector(i, t) ? [i] : [] : x.find.matches(t, x.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    x.fn.extend({
        find: function(t) {
            var e, n, i = this.length, o = this;
            if ("string" != typeof t)
                return this.pushStack(x(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (x.contains(o[e], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            e = 0; e < i; e++)
                x.find(t, o[e], n);
            return 1 < i ? x.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(D(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(D(this, t || [], !0))
        },
        is: function(t) {
            return !!D(this, "string" == typeof t && E.test(t) ? x(t) : t || [], !1).length
        }
    });
    var I, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(t, e, n) {
        var i, o;
        if (!t)
            return this;
        if (n = n || I,
        "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : $.exec(t)) || !i[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof x ? e[0] : e,
                x.merge(this, x.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : m, !0)),
                A.test(i[1]) && x.isPlainObject(e))
                    for (i in e)
                        f(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (o = m.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return t.nodeType ? (this[0] = t,
        this.length = 1,
        this) : f(t) ? void 0 !== n.ready ? n.ready(t) : t(x) : x.makeArray(t, this)
    }
    ).prototype = x.fn,
    I = x(m);
    var P = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function N(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    x.fn.extend({
        has: function(t) {
            var e = x(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (x.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof t && x(t);
            if (!E.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? x.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? a.call(x(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    x.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return _(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return _(t, "parentNode", n)
        },
        next: function(t) {
            return N(t, "nextSibling")
        },
        prev: function(t) {
            return N(t, "previousSibling")
        },
        nextAll: function(t) {
            return _(t, "nextSibling")
        },
        prevAll: function(t) {
            return _(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return _(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return _(t, "previousSibling", n)
        },
        siblings: function(t) {
            return S((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return S(t.firstChild)
        },
        contents: function(t) {
            return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (k(t, "template") && (t = t.content || t),
            x.merge([], t.childNodes))
        }
    }, function(t, e) {
        x.fn[t] = function(n, i) {
            var o = x.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = x.filter(i, o)),
            1 < this.length && (L[t] || x.uniqueSort(o),
            P.test(t) && o.reverse()),
            this.pushStack(o)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;
    function R(t) {
        return t
    }
    function M(t) {
        throw t
    }
    function H(t, e, n, i) {
        var o;
        try {
            t && f(o = t.promise) ? o.call(t).done(e).fail(n) : t && f(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    x.Callbacks = function(t) {
        var e, n;
        t = "string" == typeof t ? (e = t,
        n = {},
        x.each(e.match(O) || [], function(t, e) {
            n[e] = !0
        }),
        n) : x.extend({}, t);
        var i, o, r, s, a = [], l = [], c = -1, u = function() {
            for (s = s || t.once,
            r = i = !0; l.length; c = -1)
                for (o = l.shift(); ++c < a.length; )
                    !1 === a[c].apply(o[0], o[1]) && t.stopOnFalse && (c = a.length,
                    o = !1);
            t.memory || (o = !1),
            i = !1,
            s && (a = o ? [] : "")
        }, d = {
            add: function() {
                return a && (o && !i && (c = a.length - 1,
                l.push(o)),
                function e(n) {
                    x.each(n, function(n, i) {
                        f(i) ? t.unique && d.has(i) || a.push(i) : i && i.length && "string" !== b(i) && e(i)
                    })
                }(arguments),
                o && !i && u()),
                this
            },
            remove: function() {
                return x.each(arguments, function(t, e) {
                    for (var n; -1 < (n = x.inArray(e, a, n)); )
                        a.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(t) {
                return t ? -1 < x.inArray(t, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return s = l = [],
                a = o = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = l = [],
                o || i || (a = o = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(t, e) {
                return s || (e = [t, (e = e || []).slice ? e.slice() : e],
                l.push(e),
                i || u()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return d
    }
    ,
    x.extend({
        Deferred: function(e) {
            var n = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , o = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(t) {
                    return o.then(null, t)
                },
                pipe: function() {
                    var t = arguments;
                    return x.Deferred(function(e) {
                        x.each(n, function(n, i) {
                            var o = f(t[i[4]]) && t[i[4]];
                            r[i[1]](function() {
                                var t = o && o.apply(this, arguments);
                                t && f(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                then: function(e, i, o) {
                    var r = 0;
                    function s(e, n, i, o) {
                        return function() {
                            var a = this
                              , l = arguments
                              , c = function() {
                                var t, c;
                                if (!(e < r)) {
                                    if ((t = i.apply(a, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                    f(c) ? o ? c.call(t, s(r, n, R, o), s(r, n, M, o)) : (r++,
                                    c.call(t, s(r, n, R, o), s(r, n, M, o), s(r, n, R, n.notifyWith))) : (i !== R && (a = void 0,
                                    l = [t]),
                                    (o || n.resolveWith)(a, l))
                                }
                            }
                              , u = o ? c : function() {
                                try {
                                    c()
                                } catch (t) {
                                    x.Deferred.exceptionHook && x.Deferred.exceptionHook(t, u.stackTrace),
                                    r <= e + 1 && (i !== M && (a = void 0,
                                    l = [t]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            e ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()),
                            t.setTimeout(u))
                        }
                    }
                    return x.Deferred(function(t) {
                        n[0][3].add(s(0, t, f(o) ? o : R, t.notifyWith)),
                        n[1][3].add(s(0, t, f(e) ? e : R)),
                        n[2][3].add(s(0, t, f(i) ? i : M))
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? x.extend(t, o) : o
                }
            }
              , r = {};
            return x.each(n, function(t, e) {
                var s = e[2]
                  , a = e[5];
                o[e[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(e[3].fire),
                r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[e[0] + "With"] = s.fireWith
            }),
            o.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(t) {
            var e = arguments.length
              , n = e
              , i = Array(n)
              , r = o.call(arguments)
              , s = x.Deferred()
              , a = function(t) {
                return function(n) {
                    i[t] = this,
                    r[t] = 1 < arguments.length ? o.call(arguments) : n,
                    --e || s.resolveWith(i, r)
                }
            };
            if (e <= 1 && (H(t, s.done(a(n)).resolve, s.reject, !e),
            "pending" === s.state() || f(r[n] && r[n].then)))
                return s.then();
            for (; n--; )
                H(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && j.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }
    ,
    x.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = x.Deferred();
    function B() {
        m.removeEventListener("DOMContentLoaded", B),
        t.removeEventListener("load", B),
        x.ready()
    }
    x.fn.ready = function(t) {
        return F.then(t).catch(function(t) {
            x.readyException(t)
        }),
        this
    }
    ,
    x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0) !== t && 0 < --x.readyWait || F.resolveWith(m, [x])
        }
    }),
    x.ready.then = F.then,
    "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(x.ready) : (m.addEventListener("DOMContentLoaded", B),
    t.addEventListener("load", B));
    var q = function(t, e, n, i, o, r, s) {
        var a = 0
          , l = t.length
          , c = null == n;
        if ("object" === b(n))
            for (a in o = !0,
            n)
                q(t, e, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0,
        f(i) || (s = !0),
        c && (s ? (e.call(t, i),
        e = null) : (c = e,
        e = function(t, e, n) {
            return c.call(x(t), n)
        }
        )),
        e))
            for (; a < l; a++)
                e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
    }
      , W = /^-ms-/
      , U = /-([a-z])/g;
    function z(t, e) {
        return e.toUpperCase()
    }
    function X(t) {
        return t.replace(W, "ms-").replace(U, z)
    }
    var V = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    function Y() {
        this.expando = x.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            V(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e)
                o[X(e)] = n;
            else
                for (i in e)
                    o[X(i)] = e[i];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(X) : (e = X(e))in i ? [e] : e.match(O) || []).length;
                    for (; n--; )
                        delete i[e[n]]
                }
                (void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !x.isEmptyObject(e)
        }
    };
    var G = new Y
      , K = new Y
      , Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function J(t, e, n) {
        var i, o;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Q.test(o) ? JSON.parse(o) : o)
                } catch (t) {}
                K.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    x.extend({
        hasData: function(t) {
            return K.hasData(t) || G.hasData(t)
        },
        data: function(t, e, n) {
            return K.access(t, e, n)
        },
        removeData: function(t, e) {
            K.remove(t, e)
        },
        _data: function(t, e, n) {
            return G.access(t, e, n)
        },
        _removeData: function(t, e) {
            G.remove(t, e)
        }
    }),
    x.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = K.get(r),
                1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)),
                        J(r, i, o[i]));
                    G.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                K.set(this, t)
            }) : q(this, function(e) {
                var n;
                if (r && void 0 === e)
                    return void 0 !== (n = K.get(r, t)) ? n : void 0 !== (n = J(r, t)) ? n : void 0;
                this.each(function() {
                    K.set(this, t, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                K.remove(this, t)
            })
        }
    }),
    x.extend({
        queue: function(t, e, n) {
            var i;
            if (t)
                return e = (e || "fx") + "queue",
                i = G.get(t, e),
                n && (!i || Array.isArray(n) ? i = G.access(t, e, x.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = x.queue(t, e)
              , i = n.length
              , o = n.shift()
              , r = x._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === e && n.unshift("inprogress"),
            delete r.stop,
            o.call(t, function() {
                x.dequeue(t, e)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return G.get(t, n) || G.access(t, n, {
                empty: x.Callbacks("once memory").add(function() {
                    G.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? x.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = x.queue(this, t, e);
                x._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && x.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                x.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, o = x.Deferred(), r = this, s = this.length, a = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; s--; )
                (n = G.get(r[s], t + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            o.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$","i")
      , nt = ["Top", "Right", "Bottom", "Left"]
      , it = m.documentElement
      , ot = function(t) {
        return x.contains(t.ownerDocument, t)
    }
      , rt = {
        composed: !0
    };
    it.getRootNode && (ot = function(t) {
        return x.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
    }
    );
    var st = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === x.css(t, "display")
    };
    function at(t, e, n, i) {
        var o, r, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return x.css(t, e, "")
        }
        , l = a(), c = n && n[3] || (x.cssNumber[e] ? "" : "px"), u = t.nodeType && (x.cssNumber[e] || "px" !== c && +l) && et.exec(x.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; s--; )
                x.style(t, e, u + c),
                (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                u /= r;
            u *= 2,
            x.style(t, e, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = o)),
        o
    }
    var lt = {};
    function ct(t, e) {
        for (var n, i, o, r, s, a, l, c = [], u = 0, d = t.length; u < d; u++)
            (i = t[u]).style && (n = i.style.display,
            e ? ("none" === n && (c[u] = G.get(i, "display") || null,
            c[u] || (i.style.display = "")),
            "" === i.style.display && st(i) && (c[u] = (l = s = r = void 0,
            s = (o = i).ownerDocument,
            a = o.nodeName,
            (l = lt[a]) || (r = s.body.appendChild(s.createElement(a)),
            l = x.css(r, "display"),
            r.parentNode.removeChild(r),
            "none" === l && (l = "block"),
            lt[a] = l)))) : "none" !== n && (c[u] = "none",
            G.set(i, "display", n)));
        for (u = 0; u < d; u++)
            null != c[u] && (t[u].style.display = c[u]);
        return t
    }
    x.fn.extend({
        show: function() {
            return ct(this, !0)
        },
        hide: function() {
            return ct(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                st(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var ut, dt, pt = /^(?:checkbox|radio)$/i, ht = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ft = /^$|^module$|\/(?:java|ecma)script/i;
    ut = m.createDocumentFragment().appendChild(m.createElement("div")),
    (dt = m.createElement("input")).setAttribute("type", "radio"),
    dt.setAttribute("checked", "checked"),
    dt.setAttribute("name", "t"),
    ut.appendChild(dt),
    h.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ut.innerHTML = "<textarea>x</textarea>",
    h.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue,
    ut.innerHTML = "<option></option>",
    h.option = !!ut.lastChild;
    var gt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function mt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
        void 0 === e || e && k(t, e) ? x.merge([t], n) : n
    }
    function vt(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
            G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"))
    }
    gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead,
    gt.th = gt.td,
    h.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var yt = /<|&#?\w+;/;
    function bt(t, e, n, i, o) {
        for (var r, s, a, l, c, u, d = e.createDocumentFragment(), p = [], h = 0, f = t.length; h < f; h++)
            if ((r = t[h]) || 0 === r)
                if ("object" === b(r))
                    x.merge(p, r.nodeType ? [r] : r);
                else if (yt.test(r)) {
                    for (s = s || d.appendChild(e.createElement("div")),
                    a = (ht.exec(r) || ["", ""])[1].toLowerCase(),
                    l = gt[a] || gt._default,
                    s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    x.merge(p, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    p.push(e.createTextNode(r));
        for (d.textContent = "",
        h = 0; r = p[h++]; )
            if (i && -1 < x.inArray(r, i))
                o && o.push(r);
            else if (c = ot(r),
            s = mt(d.appendChild(r), "script"),
            c && vt(s),
            n)
                for (u = 0; r = s[u++]; )
                    ft.test(r.type || "") && n.push(r);
        return d
    }
    var wt = /^key/
      , xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Tt = /^([^.]*)(?:\.(.+)|)/;
    function Ct() {
        return !0
    }
    function _t() {
        return !1
    }
    function St(t, e) {
        return t === function() {
            try {
                return m.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }
    function Et(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            e)
                Et(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = _t;
        else if (!o)
            return t;
        return 1 === r && (s = o,
        (o = function(t) {
            return x().off(t),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = x.guid++)),
        t.each(function() {
            x.event.add(this, e, o, i, n)
        })
    }
    function kt(t, e, n) {
        n ? (G.set(t, e, !1),
        x.event.add(t, e, {
            namespace: !1,
            handler: function(t) {
                var i, r, s = G.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (s.length)
                        (x.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (s = o.call(arguments),
                    G.set(this, e, s),
                    i = n(this, e),
                    this[e](),
                    s !== (r = G.get(this, e)) || i ? G.set(this, e, !1) : r = {},
                    s !== r)
                        return t.stopImmediatePropagation(),
                        t.preventDefault(),
                        r.value
                } else
                    s.length && (G.set(this, e, {
                        value: x.event.trigger(x.extend(s[0], x.Event.prototype), s.slice(1), this)
                    }),
                    t.stopImmediatePropagation())
            }
        })) : void 0 === G.get(t, e) && x.event.add(t, e, Ct)
    }
    x.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, d, p, h, f, g, m = G.get(t);
            if (V(t))
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && x.find.matchesSelector(it, o),
                n.guid || (n.guid = x.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (s = m.handle) || (s = m.handle = function(e) {
                    return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(O) || [""]).length; c--; )
                    h = g = (a = Tt.exec(e[c]) || [])[1],
                    f = (a[2] || "").split(".").sort(),
                    h && (d = x.event.special[h] || {},
                    h = (o ? d.delegateType : d.bindType) || h,
                    d = x.event.special[h] || {},
                    u = x.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && x.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, r),
                    (p = l[h]) || ((p = l[h] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(h, s)),
                    d.add && (d.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    x.event.global[h] = !0)
        },
        remove: function(t, e, n, i, o) {
            var r, s, a, l, c, u, d, p, h, f, g, m = G.hasData(t) && G.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(O) || [""]).length; c--; )
                    if (h = g = (a = Tt.exec(e[c]) || [])[1],
                    f = (a[2] || "").split(".").sort(),
                    h) {
                        for (d = x.event.special[h] || {},
                        p = l[h = (i ? d.delegateType : d.bindType) || h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = p.length; r--; )
                            u = p[r],
                            !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1),
                            u.selector && p.delegateCount--,
                            d.remove && d.remove.call(t, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(t, f, m.handle) || x.removeEvent(t, h, m.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            x.event.remove(t, h + e[c], n, i, !0);
                x.isEmptyObject(l) && G.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, o, r, s, a = new Array(arguments.length), l = x.event.fix(t), c = (G.get(this, "events") || Object.create(null))[l.type] || [], u = x.event.special[l.type] || {};
            for (a[0] = l,
            e = 1; e < arguments.length; e++)
                a[e] = arguments[e];
            if (l.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = x.event.handlers.call(this, l, c),
                e = 0; (o = s[e++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r,
                        l.data = r.data,
                        void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(),
                        l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, s, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (r = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? -1 < x(o, this).index(c) : x.find(o, this, null, [c]).length),
                            s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this,
            l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(x.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: f(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[x.expando] ? t : new x.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return pt.test(e.type) && e.click && k(e, "input") && kt(e, "click", Ct),
                    !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return pt.test(e.type) && e.click && k(e, "input") && kt(e, "click"),
                    !0
                },
                _default: function(t) {
                    var e = t.target;
                    return pt.test(e.type) && e.click && k(e, "input") && G.get(e, "click") || k(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    x.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    x.Event = function(t, e) {
        if (!(this instanceof x.Event))
            return new x.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : _t,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && x.extend(this, e),
        this.timeStamp = t && t.timeStamp || Date.now(),
        this[x.expando] = !0
    }
    ,
    x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: _t,
        isPropagationStopped: _t,
        isImmediatePropagationStopped: _t,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Ct,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Ct,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Ct,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && xt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, x.event.addProp),
    x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        x.event.special[t] = {
            setup: function() {
                return kt(this, t, St),
                !1
            },
            trigger: function() {
                return kt(this, t),
                !0
            },
            delegateType: e
        }
    }),
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        x.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget, o = t.handleObj;
                return i && (i === this || x.contains(this, i)) || (t.type = o.origType,
                n = o.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    x.fn.extend({
        on: function(t, e, n, i) {
            return Et(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return Et(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e,
            e = void 0),
            !1 === n && (n = _t),
            this.each(function() {
                x.event.remove(this, t, n, e)
            })
        }
    });
    var At = /<script|<style|<link/i
      , Dt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function $t(t, e) {
        return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t
    }
    function Pt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function Lt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
        t
    }
    function Nt(t, e) {
        var n, i, o, r, s, a;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (a = G.get(t).events))
                for (o in G.remove(e, "handle events"),
                a)
                    for (n = 0,
                    i = a[o].length; n < i; n++)
                        x.event.add(e, o, a[o][n]);
            K.hasData(t) && (r = K.access(t),
            s = x.extend({}, r),
            K.set(e, s))
        }
    }
    function Ot(t, e, n, i) {
        e = r(e);
        var o, s, a, l, c, u, d = 0, p = t.length, g = p - 1, m = e[0], v = f(m);
        if (v || 1 < p && "string" == typeof m && !h.checkClone && Dt.test(m))
            return t.each(function(o) {
                var r = t.eq(o);
                v && (e[0] = m.call(this, o, r.html())),
                Ot(r, e, n, i)
            });
        if (p && (s = (o = bt(e, t[0].ownerDocument, !1, t, i)).firstChild,
        1 === o.childNodes.length && (o = s),
        s || i)) {
            for (l = (a = x.map(mt(o, "script"), Pt)).length; d < p; d++)
                c = o,
                d !== g && (c = x.clone(c, !0, !0),
                l && x.merge(a, mt(c, "script"))),
                n.call(t[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                x.map(a, Lt),
                d = 0; d < l; d++)
                    c = a[d],
                    ft.test(c.type || "") && !G.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, u) : y(c.textContent.replace(It, ""), c, u))
        }
        return t
    }
    function Rt(t, e, n) {
        for (var i, o = e ? x.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || x.cleanData(mt(i)),
            i.parentNode && (n && ot(i) && vt(mt(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    x.extend({
        htmlPrefilter: function(t) {
            return t
        },
        clone: function(t, e, n) {
            var i, o, r, s, a, l, c, u = t.cloneNode(!0), d = ot(t);
            if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t)))
                for (s = mt(u),
                i = 0,
                o = (r = mt(t)).length; i < o; i++)
                    a = r[i],
                    "input" === (c = (l = s[i]).nodeName.toLowerCase()) && pt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (r = r || mt(t),
                    s = s || mt(u),
                    i = 0,
                    o = r.length; i < o; i++)
                        Nt(r[i], s[i]);
                else
                    Nt(t, u);
            return 0 < (s = mt(u, "script")).length && vt(s, !d && mt(t, "script")),
            u
        },
        cleanData: function(t) {
            for (var e, n, i, o = x.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (V(n)) {
                    if (e = n[G.expando]) {
                        if (e.events)
                            for (i in e.events)
                                o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
                        n[G.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    x.fn.extend({
        detach: function(t) {
            return Rt(this, t, !0)
        },
        remove: function(t) {
            return Rt(this, t)
        },
        text: function(t) {
            return q(this, function(t) {
                return void 0 === t ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return Ot(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return Ot(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = $t(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return Ot(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return Ot(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (x.cleanData(mt(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return x.clone(this, t, e)
            })
        },
        html: function(t) {
            return q(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !At.test(t) && !gt[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = x.htmlPrefilter(t);
                    try {
                        for (; n < i; n++)
                            1 === (e = this[n] || {}).nodeType && (x.cleanData(mt(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return Ot(this, arguments, function(e) {
                var n = this.parentNode;
                x.inArray(this, t) < 0 && (x.cleanData(mt(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        x.fn[t] = function(t) {
            for (var n, i = [], o = x(t), r = o.length - 1, a = 0; a <= r; a++)
                n = a === r ? this : this.clone(!0),
                x(o[a])[e](n),
                s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Mt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$","i")
      , Ht = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    }
      , jt = function(t, e, n) {
        var i, o, r = {};
        for (o in e)
            r[o] = t.style[o],
            t.style[o] = e[o];
        for (o in i = n.call(t),
        e)
            t.style[o] = r[o];
        return i
    }
      , Ft = new RegExp(nt.join("|"),"i");
    function Bt(t, e, n) {
        var i, o, r, s, a = t.style;
        return (n = n || Ht(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || ot(t) || (s = x.style(t, e)),
        !h.pixelBoxStyles() && Mt.test(s) && Ft.test(e) && (i = a.width,
        o = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = o,
        a.maxWidth = r)),
        void 0 !== s ? s + "" : s
    }
    function qt(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                it.appendChild(c).appendChild(u);
                var e = t.getComputedStyle(u);
                i = "1%" !== e.top,
                l = 12 === n(e.marginLeft),
                u.style.right = "60%",
                s = 36 === n(e.right),
                o = 36 === n(e.width),
                u.style.position = "absolute",
                r = 12 === n(u.offsetWidth / 3),
                it.removeChild(c),
                u = null
            }
        }
        function n(t) {
            return Math.round(parseFloat(t))
        }
        var i, o, r, s, a, l, c = m.createElement("div"), u = m.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === u.style.backgroundClip,
        x.extend(h, {
            boxSizingReliable: function() {
                return e(),
                o
            },
            pixelBoxStyles: function() {
                return e(),
                s
            },
            pixelPosition: function() {
                return e(),
                i
            },
            reliableMarginLeft: function() {
                return e(),
                l
            },
            scrollboxSize: function() {
                return e(),
                r
            },
            reliableTrDimensions: function() {
                var e, n, i, o;
                return null == a && (e = m.createElement("table"),
                n = m.createElement("tr"),
                i = m.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                n.style.height = "1px",
                i.style.height = "9px",
                it.appendChild(e).appendChild(n).appendChild(i),
                o = t.getComputedStyle(n),
                a = 3 < parseInt(o.height),
                it.removeChild(e)),
                a
            }
        }))
    }();
    var Wt = ["Webkit", "Moz", "ms"]
      , Ut = m.createElement("div").style
      , zt = {};
    function Xt(t) {
        return x.cssProps[t] || zt[t] || (t in Ut ? t : zt[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = Wt.length; n--; )
                if ((t = Wt[n] + e)in Ut)
                    return t
        }(t) || t)
    }
    var Vt = /^(none|table(?!-c[ea]).+)/
      , Yt = /^--/
      , Gt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Kt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Qt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
    function Zt(t, e, n, i, o, r) {
        var s = "width" === e ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += x.css(t, n + nt[s], !0, o)),
            i ? ("content" === n && (l -= x.css(t, "padding" + nt[s], !0, o)),
            "margin" !== n && (l -= x.css(t, "border" + nt[s] + "Width", !0, o))) : (l += x.css(t, "padding" + nt[s], !0, o),
            "padding" !== n ? l += x.css(t, "border" + nt[s] + "Width", !0, o) : a += x.css(t, "border" + nt[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0),
        l
    }
    function Jt(t, e, n) {
        var i = Ht(t)
          , o = (!h.boxSizingReliable() || n) && "border-box" === x.css(t, "boxSizing", !1, i)
          , r = o
          , s = Bt(t, e, i)
          , a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Mt.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!h.boxSizingReliable() && o || !h.reliableTrDimensions() && k(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(t, "display", !1, i)) && t.getClientRects().length && (o = "border-box" === x.css(t, "boxSizing", !1, i),
        (r = a in t) && (s = t[a])),
        (s = parseFloat(s) || 0) + Zt(t, e, n || (o ? "border" : "content"), r, i, s) + "px"
    }
    function te(t, e, n, i, o) {
        return new te.prototype.init(t,e,n,i,o)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Bt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = X(e), l = Yt.test(e), c = t.style;
                if (l || (e = Xt(a)),
                s = x.cssHooks[e] || x.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e];
                "string" == (r = typeof n) && (o = et.exec(n)) && o[1] && (n = at(t, e, o),
                r = "number"),
                null != n && n == n && ("number" !== r || l || (n += o && o[3] || (x.cssNumber[a] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
            }
        },
        css: function(t, e, n, i) {
            var o, r, s, a = X(e);
            return Yt.test(e) || (e = Xt(a)),
            (s = x.cssHooks[e] || x.cssHooks[a]) && "get"in s && (o = s.get(t, !0, n)),
            void 0 === o && (o = Bt(t, e, i)),
            "normal" === o && e in Kt && (o = Kt[e]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    x.each(["height", "width"], function(t, e) {
        x.cssHooks[e] = {
            get: function(t, n, i) {
                if (n)
                    return !Vt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Jt(t, e, i) : jt(t, Gt, function() {
                        return Jt(t, e, i)
                    })
            },
            set: function(t, n, i) {
                var o, r = Ht(t), s = !h.scrollboxSize() && "absolute" === r.position, a = (s || i) && "border-box" === x.css(t, "boxSizing", !1, r), l = i ? Zt(t, e, i, a, r) : 0;
                return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Zt(t, e, "border", !1, r) - .5)),
                l && (o = et.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n,
                n = x.css(t, e)),
                Qt(0, n, l)
            }
        }
    }),
    x.cssHooks.marginLeft = qt(h.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(Bt(t, "marginLeft")) || t.getBoundingClientRect().left - jt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        x.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    o[t + nt[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        "margin" !== t && (x.cssHooks[t + e].set = Qt)
    }),
    x.fn.extend({
        css: function(t, e) {
            return q(this, function(t, e, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(e)) {
                    for (i = Ht(t),
                    o = e.length; s < o; s++)
                        r[e[s]] = x.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? x.style(t, e, n) : x.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }),
    ((x.Tween = te).prototype = {
        constructor: te,
        init: function(t, e, n, i, o, r) {
            this.elem = t,
            this.prop = n,
            this.easing = o || x.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = te.propHooks[this.prop];
            return t && t.get ? t.get(this) : te.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = te.propHooks[this.prop];
            return this.options.duration ? this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : te.propHooks._default.set(this),
            this
        }
    }).init.prototype = te.prototype,
    (te.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !x.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = te.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    x.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    x.fx = te.prototype.init,
    x.fx.step = {};
    var ee, ne, ie, oe, re = /^(?:toggle|show|hide)$/, se = /queueHooks$/;
    function ae() {
        ne && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ae) : t.setTimeout(ae, x.fx.interval),
        x.fx.tick())
    }
    function le() {
        return t.setTimeout(function() {
            ee = void 0
        }),
        ee = Date.now()
    }
    function ce(t, e) {
        var n, i = 0, o = {
            height: t
        };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
            o["margin" + (n = nt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t),
        o
    }
    function ue(t, e, n) {
        for (var i, o = (de.tweeners[e] || []).concat(de.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, e, t))
                return i
    }
    function de(t, e, n) {
        var i, o, r = 0, s = de.prefilters.length, a = x.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var e = ee || le(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)
                c.tweens[r].run(i);
            return a.notifyWith(t, [c, i, n]),
            i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]),
            a.resolveWith(t, [c]),
            !1)
        }, c = a.promise({
            elem: t,
            props: x.extend({}, e),
            opts: x.extend(!0, {
                specialEasing: {},
                easing: x.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: ee || le(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = x.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0
                  , i = e ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    c.tweens[n].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]),
                a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                this
            }
        }), u = c.props;
        for (function(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (o = e[i = X(n)],
                r = t[n],
                Array.isArray(r) && (o = r[1],
                r = t[n] = r[0]),
                n !== i && (t[i] = r,
                delete t[n]),
                (s = x.cssHooks[i]) && "expand"in s)
                    for (n in r = s.expand(r),
                    delete t[i],
                    r)
                        n in t || (t[n] = r[n],
                        e[n] = o);
                else
                    e[i] = o
        }(u, c.opts.specialEasing); r < s; r++)
            if (i = de.prefilters[r].call(c, t, u, c.opts))
                return f(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                i;
        return x.map(u, ue, c),
        f(c.opts.start) && c.opts.start.call(t, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        x.fx.timer(x.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    x.Animation = x.extend(de, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return at(n.elem, t, et.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            f(t) ? (e = t,
            t = ["*"]) : t = t.match(O);
            for (var n, i = 0, o = t.length; i < o; i++)
                n = t[i],
                de.tweeners[n] = de.tweeners[n] || [],
                de.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var i, o, r, s, a, l, c, u, d = "width"in e || "height"in e, p = this, h = {}, f = t.style, g = t.nodeType && st(t), m = G.get(t, "fxshow");
            for (i in n.queue || (null == (s = x._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            p.always(function() {
                p.always(function() {
                    s.unqueued--,
                    x.queue(t, "fx").length || s.empty.fire()
                })
            })),
            e)
                if (o = e[i],
                re.test(o)) {
                    if (delete e[i],
                    r = r || "toggle" === o,
                    o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    h[i] = m && m[i] || x.style(t, i)
                }
            if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(h))
                for (i in d && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (c = m && m.display) && (c = G.get(t, "display")),
                "none" === (u = x.css(t, "display")) && (c ? u = c : (ct([t], !0),
                c = t.style.display || c,
                u = x.css(t, "display"),
                ct([t]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(t, "float") && (l || (p.done(function() {
                    f.display = c
                }),
                null == c && (u = f.display,
                c = "none" === u ? "" : u)),
                f.display = "inline-block")),
                n.overflow && (f.overflow = "hidden",
                p.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                })),
                l = !1,
                h)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = G.access(t, "fxshow", {
                        display: c
                    }),
                    r && (m.hidden = !g),
                    g && ct([t], !0),
                    p.done(function() {
                        for (i in g || ct([t]),
                        G.remove(t, "fxshow"),
                        h)
                            x.style(t, i, h[i])
                    })),
                    l = ue(g ? m[i] : 0, i, p),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(t, e) {
            e ? de.prefilters.unshift(t) : de.prefilters.push(t)
        }
    }),
    x.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? x.extend({}, t) : {
            complete: n || !n && e || f(t) && t,
            duration: t,
            easing: n && e || e && !f(e) && e
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            f(i.old) && i.old.call(this),
            i.queue && x.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    x.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = x.isEmptyObject(t)
              , r = x.speed(e, n, i)
              , s = function() {
                var e = de(this, x.extend({}, t), r);
                (o || G.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = void 0),
            e && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , o = null != t && t + "queueHooks"
                  , r = x.timers
                  , s = G.get(this);
                if (o)
                    s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && se.test(o) && i(s[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                    e = !1,
                    r.splice(o, 1));
                !e && n || x.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = G.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = x.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                x.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < s; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    x.each(["toggle", "show", "hide"], function(t, e) {
        var n = x.fn[e];
        x.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ce(e, !0), t, i, o)
        }
    }),
    x.each({
        slideDown: ce("show"),
        slideUp: ce("hide"),
        slideToggle: ce("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        x.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    x.timers = [],
    x.fx.tick = function() {
        var t, e = 0, n = x.timers;
        for (ee = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || x.fx.stop(),
        ee = void 0
    }
    ,
    x.fx.timer = function(t) {
        x.timers.push(t),
        x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        ne || (ne = !0,
        ae())
    }
    ,
    x.fx.stop = function() {
        ne = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fn.delay = function(e, n) {
        return e = x.fx && x.fx.speeds[e] || e,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(o)
            }
        })
    }
    ,
    ie = m.createElement("input"),
    oe = m.createElement("select").appendChild(m.createElement("option")),
    ie.type = "checkbox",
    h.checkOn = "" !== ie.value,
    h.optSelected = oe.selected,
    (ie = m.createElement("input")).value = "t",
    ie.type = "radio",
    h.radioValue = "t" === ie.value;
    var pe, he = x.expr.attrHandle;
    x.fn.extend({
        attr: function(t, e) {
            return q(this, x.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                x.removeAttr(this, t)
            })
        }
    }),
    x.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === t.getAttribute ? x.prop(t, e, n) : (1 === r && x.isXMLDoc(t) || (o = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? pe : void 0)),
                void 0 !== n ? null === n ? void x.removeAttr(t, e) : o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                n) : o && "get"in o && null !== (i = o.get(t, e)) ? i : null == (i = x.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!h.radioValue && "radio" === e && k(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0, o = e && e.match(O);
            if (o && 1 === t.nodeType)
                for (; n = o[i++]; )
                    t.removeAttribute(n)
        }
    }),
    pe = {
        set: function(t, e, n) {
            return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = he[e] || x.find.attr;
        he[e] = function(t, e, i) {
            var o, r, s = e.toLowerCase();
            return i || (r = he[s],
            he[s] = o,
            o = null != n(t, e, i) ? s : null,
            he[s] = r),
            o
        }
    });
    var fe = /^(?:input|select|textarea|button)$/i
      , ge = /^(?:a|area)$/i;
    function me(t) {
        return (t.match(O) || []).join(" ")
    }
    function ve(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function ye(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
    }
    x.fn.extend({
        prop: function(t, e) {
            return q(this, x.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[x.propFix[t] || t]
            })
        }
    }),
    x.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && x.isXMLDoc(t) || (e = x.propFix[e] || e,
                o = x.propHooks[e]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = x.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : fe.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (x.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a, l = 0;
            if (f(t))
                return this.each(function(e) {
                    x(this).addClass(t.call(this, e, ve(this)))
                });
            if ((e = ye(t)).length)
                for (; n = this[l++]; )
                    if (o = ve(n),
                    i = 1 === n.nodeType && " " + me(o) + " ") {
                        for (s = 0; r = e[s++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = me(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a, l = 0;
            if (f(t))
                return this.each(function(e) {
                    x(this).removeClass(t.call(this, e, ve(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = ye(t)).length)
                for (; n = this[l++]; )
                    if (o = ve(n),
                    i = 1 === n.nodeType && " " + me(o) + " ") {
                        for (s = 0; r = e[s++]; )
                            for (; -1 < i.indexOf(" " + r + " "); )
                                i = i.replace(" " + r + " ", " ");
                        o !== (a = me(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t
              , i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : f(t) ? this.each(function(n) {
                x(this).toggleClass(t.call(this, n, ve(this), e), e)
            }) : this.each(function() {
                var e, o, r, s;
                if (i)
                    for (o = 0,
                    r = x(this),
                    s = ye(t); e = s[o++]; )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || ((e = ve(this)) && G.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + me(ve(n)) + " ").indexOf(e))
                    return !0;
            return !1
        }
    });
    var be = /\r/g;
    x.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = f(t),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? t.call(this, n, x(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(be, "") : null == n ? "" : n : void 0
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = x.find.attr(t, "value");
                    return null != e ? e : me(x.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, o = t.options, r = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (e = x(n).val(),
                            s)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = x.makeArray(e), s = o.length; s--; )
                        ((i = o[s]).selected = -1 < x.inArray(x.valHooks.option.get(i), r)) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = -1 < x.inArray(x(t).val(), e)
            }
        },
        h.checkOn || (x.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    }),
    h.focusin = "onfocusin"in t;
    var we = /^(?:focusinfocus|focusoutblur)$/
      , xe = function(t) {
        t.stopPropagation()
    };
    x.extend(x.event, {
        trigger: function(e, n, i, o) {
            var r, s, a, l, c, d, p, h, v = [i || m], y = u.call(e, "type") ? e.type : e, b = u.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = h = a = i = i || m,
            3 !== i.nodeType && 8 !== i.nodeType && !we.test(y + x.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(),
            b.sort()),
            c = y.indexOf(":") < 0 && "on" + y,
            (e = e[x.expando] ? e : new x.Event(y,"object" == typeof e && e)).isTrigger = o ? 2 : 3,
            e.namespace = b.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = i),
            n = null == n ? [e] : x.makeArray(n, [e]),
            p = x.event.special[y] || {},
            o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !g(i)) {
                    for (l = p.delegateType || y,
                    we.test(l + y) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        a = s;
                    a === (i.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0; (s = v[r++]) && !e.isPropagationStopped(); )
                    h = s,
                    e.type = 1 < r ? l : p.bindType || y,
                    (d = (G.get(s, "events") || Object.create(null))[e.type] && G.get(s, "handle")) && d.apply(s, n),
                    (d = c && s[c]) && d.apply && V(s) && (e.result = d.apply(s, n),
                    !1 === e.result && e.preventDefault());
                return e.type = y,
                o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !V(i) || c && f(i[y]) && !g(i) && ((a = i[c]) && (i[c] = null),
                x.event.triggered = y,
                e.isPropagationStopped() && h.addEventListener(y, xe),
                i[y](),
                e.isPropagationStopped() && h.removeEventListener(y, xe),
                x.event.triggered = void 0,
                a && (i[c] = a)),
                e.result
            }
        },
        simulate: function(t, e, n) {
            var i = x.extend(new x.Event, n, {
                type: t,
                isSimulated: !0
            });
            x.event.trigger(i, null, e)
        }
    }),
    x.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                x.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return x.event.trigger(t, e, n, !0)
        }
    }),
    h.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            x.event.simulate(e, t.target, x.event.fix(t))
        };
        x.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this
                  , o = G.access(i, e);
                o || i.addEventListener(t, n, !0),
                G.access(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this
                  , o = G.access(i, e) - 1;
                o ? G.access(i, e, o) : (i.removeEventListener(t, n, !0),
                G.remove(i, e))
            }
        }
    });
    var Te = t.location
      , Ce = {
        guid: Date.now()
    }
      , _e = /\?/;
    x.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e),
        n
    }
    ;
    var Se = /\[\]$/
      , Ee = /\r?\n/g
      , ke = /^(?:submit|button|image|reset|file)$/i
      , Ae = /^(?:input|select|textarea|keygen)/i;
    function De(t, e, n, i) {
        var o;
        if (Array.isArray(e))
            x.each(e, function(e, o) {
                n || Se.test(t) ? i(t, o) : De(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
        else if (n || "object" !== b(e))
            i(t, e);
        else
            for (o in e)
                De(t + "[" + o + "]", e[o], n, i)
    }
    x.param = function(t, e) {
        var n, i = [], o = function(t, e) {
            var n = f(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == t)
            return "";
        if (Array.isArray(t) || t.jquery && !x.isPlainObject(t))
            x.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (n in t)
                De(n, t[n], e, o);
        return i.join("&")
    }
    ,
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = x.prop(this, "elements");
                return t ? x.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !x(this).is(":disabled") && Ae.test(this.nodeName) && !ke.test(t) && (this.checked || !pt.test(t))
            }).map(function(t, e) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ee, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ee, "\r\n")
                }
            }).get()
        }
    });
    var Ie = /%20/g
      , $e = /#.*$/
      , Pe = /([?&])_=[^&]*/
      , Le = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ne = /^(?:GET|HEAD)$/
      , Oe = /^\/\//
      , Re = {}
      , Me = {}
      , He = "*/".concat("*")
      , je = m.createElement("a");
    function Fe(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, o = 0, r = e.toLowerCase().match(O) || [];
            if (f(n))
                for (; i = r[o++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function Be(t, e, n, i) {
        var o = {}
          , r = t === Me;
        function s(a) {
            var l;
            return o[a] = !0,
            x.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            l
        }
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }
    function qe(t, e) {
        var n, i, o = x.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && x.extend(!0, t, i),
        t
    }
    je.href = Te.href,
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Te.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": He,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? qe(qe(t, x.ajaxSettings), e) : qe(x.ajaxSettings, t)
        },
        ajaxPrefilter: Fe(Re),
        ajaxTransport: Fe(Me),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = void 0),
            n = n || {};
            var i, o, r, s, a, l, c, u, d, p, h = x.ajaxSetup({}, n), f = h.context || h, g = h.context && (f.nodeType || f.jquery) ? x(f) : x.event, v = x.Deferred(), y = x.Callbacks("once memory"), b = h.statusCode || {}, w = {}, T = {}, C = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (c) {
                        if (!s)
                            for (s = {}; e = Le.exec(r); )
                                s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                        e = s[t.toLowerCase() + " "]
                    }
                    return null == e ? null : e.join(", ")
                },
                getAllResponseHeaders: function() {
                    return c ? r : null
                },
                setRequestHeader: function(t, e) {
                    return null == c && (t = T[t.toLowerCase()] = T[t.toLowerCase()] || t,
                    w[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == c && (h.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (c)
                            _.always(t[_.status]);
                        else
                            for (e in t)
                                b[e] = [b[e], t[e]];
                    return this
                },
                abort: function(t) {
                    var e = t || C;
                    return i && i.abort(e),
                    S(0, e),
                    this
                }
            };
            if (v.promise(_),
            h.url = ((e || h.url || Te.href) + "").replace(Oe, Te.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [""],
            null == h.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = je.protocol + "//" + je.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)),
            Be(Re, h, n, _),
            c)
                return _;
            for (d in (u = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Ne.test(h.type),
            o = h.url.replace($e, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ie, "+")) : (p = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (_e.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Pe, "$1"),
            p = (_e.test(o) ? "&" : "?") + "_=" + Ce.guid++ + p),
            h.url = o + p),
            h.ifModified && (x.lastModified[o] && _.setRequestHeader("If-Modified-Since", x.lastModified[o]),
            x.etag[o] && _.setRequestHeader("If-None-Match", x.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && _.setRequestHeader("Content-Type", h.contentType),
            _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + He + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                _.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, _, h) || c))
                return _.abort();
            if (C = "abort",
            y.add(h.complete),
            _.done(h.success),
            _.fail(h.error),
            i = Be(Me, h, n, _)) {
                if (_.readyState = 1,
                u && g.trigger("ajaxSend", [_, h]),
                c)
                    return _;
                h.async && 0 < h.timeout && (a = t.setTimeout(function() {
                    _.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(w, S)
                } catch (e) {
                    if (c)
                        throw e;
                    S(-1, e)
                }
            } else
                S(-1, "No Transport");
            function S(e, n, s, l) {
                var d, p, m, w, T, C = n;
                c || (c = !0,
                a && t.clearTimeout(a),
                i = void 0,
                r = l || "",
                _.readyState = 0 < e ? 4 : 0,
                d = 200 <= e && e < 300 || 304 === e,
                s && (w = function(t, e, n) {
                    for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(h, _, s)),
                !d && -1 < x.inArray("script", h.dataTypes) && (h.converters["text script"] = function() {}
                ),
                w = function(t, e, n, i) {
                    var o, r, s, a, l, c = {}, u = t.dataTypes.slice();
                    if (u[1])
                        for (s in t.converters)
                            c[s.toLowerCase()] = t.converters[s];
                    for (r = u.shift(); r; )
                        if (t.responseFields[r] && (n[t.responseFields[r]] = e),
                        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        l = r,
                        r = u.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && t.throws)
                                        e = s(e);
                                    else
                                        try {
                                            e = s(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: s ? t : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(h, w, _, d),
                d ? (h.ifModified && ((T = _.getResponseHeader("Last-Modified")) && (x.lastModified[o] = T),
                (T = _.getResponseHeader("etag")) && (x.etag[o] = T)),
                204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state,
                p = w.data,
                d = !(m = w.error))) : (m = C,
                !e && C || (C = "error",
                e < 0 && (e = 0))),
                _.status = e,
                _.statusText = (n || C) + "",
                d ? v.resolveWith(f, [p, C, _]) : v.rejectWith(f, [_, C, m]),
                _.statusCode(b),
                b = void 0,
                u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [_, h, d ? p : m]),
                y.fireWith(f, [_, C]),
                u && (g.trigger("ajaxComplete", [_, h]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(t, e, n) {
            return x.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return x.get(t, void 0, e, "script")
        }
    }),
    x.each(["get", "post"], function(t, e) {
        x[e] = function(t, n, i, o) {
            return f(n) && (o = o || i,
            i = n,
            n = void 0),
            x.ajax(x.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, x.isPlainObject(t) && t))
        }
    }),
    x.ajaxPrefilter(function(t) {
        var e;
        for (e in t.headers)
            "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }),
    x._evalUrl = function(t, e, n) {
        return x.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                x.globalEval(t, e, n)
            }
        })
    }
    ,
    x.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (f(t) && (t = t.call(this[0])),
            e = x(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this
        },
        wrapInner: function(t) {
            return f(t) ? this.each(function(e) {
                x(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = x(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = f(t);
            return this.each(function(n) {
                x(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                x(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    x.expr.pseudos.hidden = function(t) {
        return !x.expr.pseudos.visible(t)
    }
    ,
    x.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    x.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var We = {
        0: 200,
        1223: 204
    }
      , Ue = x.ajaxSettings.xhr();
    h.cors = !!Ue && "withCredentials"in Ue,
    h.ajax = Ue = !!Ue,
    x.ajaxTransport(function(e) {
        var n, i;
        if (h.cors || Ue && !e.crossDomain)
            return {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (s in e.xhrFields)
                            a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        a.setRequestHeader(s, o[s]);
                    n = function(t) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (o) {
                        if (n)
                            throw o
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    x.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return x.globalEval(t),
                t
            }
        }
    }),
    x.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    x.ajaxTransport("script", function(t) {
        var e, n;
        if (t.crossDomain || t.scriptAttrs)
            return {
                send: function(i, o) {
                    e = x("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(),
                        n = null,
                        t && o("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    m.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var ze, Xe = [], Ve = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Xe.pop() || x.expando + "_" + Ce.guid++;
            return this[t] = !0,
            t
        }
    }),
    x.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, s, a = !1 !== e.jsonp && (Ve.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return o = e.jsonpCallback = f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Ve, "$1" + o) : !1 !== e.jsonp && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
            e.converters["script json"] = function() {
                return s || x.error(o + " was not called"),
                s[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = t[o],
            t[o] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === r ? x(t).removeProp(o) : t[o] = r,
                e[o] && (e.jsonpCallback = n.jsonpCallback,
                Xe.push(o)),
                s && f(r) && r(s[0]),
                s = r = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = ((ze = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === ze.childNodes.length),
    x.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
        e = !1),
        e || (h.createHTMLDocument ? ((i = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href,
        e.head.appendChild(i)) : e = m),
        r = !n && [],
        (o = A.exec(t)) ? [e.createElement(o[1])] : (o = bt([t], e, r),
        r && r.length && x(r).remove(),
        x.merge([], o.childNodes)));
        var i, o, r
    }
    ,
    x.fn.load = function(t, e, n) {
        var i, o, r, s = this, a = t.indexOf(" ");
        return -1 < a && (i = me(t.slice(a)),
        t = t.slice(0, a)),
        f(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (o = "POST"),
        0 < s.length && x.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            s.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, r || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    x.expr.pseudos.animated = function(t) {
        return x.grep(x.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    x.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, s, a, l, c = x.css(t, "position"), u = x(t), d = {};
            "static" === c && (t.style.position = "relative"),
            a = u.offset(),
            r = x.css(t, "top"),
            l = x.css(t, "left"),
            ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top,
            o = i.left) : (s = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            f(e) && (e = e.call(t, n, x.extend({}, a))),
            null != e.top && (d.top = e.top - a.top + s),
            null != e.left && (d.left = e.left - a.left + o),
            "using"in e ? e.using.call(t, d) : ("number" == typeof d.top && (d.top += "px"),
            "number" == typeof d.left && (d.left += "px"),
            u.css(d))
        }
    },
    x.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    x.offset.setOffset(this, t, e)
                });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === x.css(i, "position"))
                    e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(),
                    n = i.ownerDocument,
                    t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position"); )
                        t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((o = x(t).offset()).top += x.css(t, "borderTopWidth", !0),
                    o.left += x.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - o.top - x.css(i, "marginTop", !0),
                    left: e.left - o.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === x.css(t, "position"); )
                    t = t.offsetParent;
                return t || it
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        x.fn[t] = function(i) {
            return q(this, function(t, i, o) {
                var r;
                if (g(t) ? r = t : 9 === t.nodeType && (r = t.defaultView),
                void 0 === o)
                    return r ? r[e] : t[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
            }, t, i, arguments.length)
        }
    }),
    x.each(["top", "left"], function(t, e) {
        x.cssHooks[e] = qt(h.pixelPosition, function(t, n) {
            if (n)
                return n = Bt(t, e),
                Mt.test(n) ? x(t).position()[e] + "px" : n
        })
    }),
    x.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        x.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            x.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o)
                  , a = n || (!0 === o || !0 === r ? "margin" : "border");
                return q(this, function(e, n, o) {
                    var r;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? x.css(e, n, a) : x.style(e, n, o, a)
                }, e, s ? o : void 0, s)
            }
        })
    }),
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        x.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    x.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        x.fn[e] = function(t, n) {
            return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
        }
    });
    var Ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    x.proxy = function(t, e) {
        var n, i, r;
        if ("string" == typeof e && (n = t[e],
        e = t,
        t = n),
        f(t))
            return i = o.call(arguments, 2),
            (r = function() {
                return t.apply(e || this, i.concat(o.call(arguments)))
            }
            ).guid = t.guid = t.guid || x.guid++,
            r
    }
    ,
    x.holdReady = function(t) {
        t ? x.readyWait++ : x.ready(!0)
    }
    ,
    x.isArray = Array.isArray,
    x.parseJSON = JSON.parse,
    x.nodeName = k,
    x.isFunction = f,
    x.isWindow = g,
    x.camelCase = X,
    x.type = b,
    x.now = Date.now,
    x.isNumeric = function(t) {
        var e = x.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }
    ,
    x.trim = function(t) {
        return null == t ? "" : (t + "").replace(Ye, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    });
    var Ge = t.jQuery
      , Ke = t.$;
    return x.noConflict = function(e) {
        return t.$ === x && (t.$ = Ke),
        e && t.jQuery === x && (t.jQuery = Ge),
        x
    }
    ,
    void 0 === e && (t.jQuery = t.$ = x),
    x
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function() {
    "use strict";
    function t(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }
    function e(t, e) {
        if (1 !== t.nodeType)
            return [];
        var n = getComputedStyle(t, null);
        return e ? n[e] : n
    }
    function n(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
    function i(t) {
        if (!t)
            return document.body;
        switch (t.nodeName) {
        case "HTML":
        case "BODY":
            return t.ownerDocument.body;
        case "#document":
            return t.body
        }
        var o = e(t)
          , r = o.overflow
          , s = o.overflowX
          , a = o.overflowY;
        return /(auto|scroll)/.test(r + a + s) ? t : i(n(t))
    }
    function o(t) {
        var n = t && t.offsetParent
          , i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === e(n, "position") ? o(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }
    function r(t) {
        return null === t.parentNode ? t : r(t.parentNode)
    }
    function s(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? t : e
          , a = n ? e : t
          , l = document.createRange();
        l.setStart(i, 0),
        l.setEnd(a, 0);
        var c = l.commonAncestorContainer;
        if (t !== c && e !== c || i.contains(a))
            return function(t) {
                var e = t.nodeName;
                return "BODY" !== e && ("HTML" === e || o(t.firstElementChild) === t)
            }(c) ? c : o(c);
        var u = r(t);
        return u.host ? s(u.host, e) : s(t, r(e).host)
    }
    function a(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e]
        }
        return t[e]
    }
    function l(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = a(e, "top")
          , o = a(e, "left")
          , r = n ? -1 : 1;
        return t.top += i * r,
        t.bottom += i * r,
        t.left += o * r,
        t.right += o * r,
        t
    }
    function c(t, e) {
        var n = "x" === e ? "Left" : "Top"
          , i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }
    function u(t, e, n, i) {
        return M(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], U() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }
    function d() {
        var t = document.body
          , e = document.documentElement
          , n = U() && getComputedStyle(e);
        return {
            height: u("Height", t, e, n),
            width: u("Width", t, e, n)
        }
    }
    function p(t) {
        return Y({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }
    function h(t) {
        var n = {};
        if (U())
            try {
                n = t.getBoundingClientRect();
                var i = a(t, "top")
                  , o = a(t, "left");
                n.top += i,
                n.left += o,
                n.bottom += i,
                n.right += o
            } catch (t) {}
        else
            n = t.getBoundingClientRect();
        var r = {
            left: n.left,
            top: n.top,
            width: n.right - n.left,
            height: n.bottom - n.top
        }
          , s = "HTML" === t.nodeName ? d() : {}
          , l = s.width || t.clientWidth || r.right - r.left
          , u = s.height || t.clientHeight || r.bottom - r.top
          , h = t.offsetWidth - l
          , f = t.offsetHeight - u;
        if (h || f) {
            var g = e(t);
            h -= c(g, "x"),
            f -= c(g, "y"),
            r.width -= h,
            r.height -= f
        }
        return p(r)
    }
    function f(t, n) {
        var o = U()
          , r = "HTML" === n.nodeName
          , s = h(t)
          , a = h(n)
          , c = i(t)
          , u = e(n)
          , d = parseFloat(u.borderTopWidth, 10)
          , f = parseFloat(u.borderLeftWidth, 10)
          , g = p({
            top: s.top - a.top - d,
            left: s.left - a.left - f,
            width: s.width,
            height: s.height
        });
        if (g.marginTop = 0,
        g.marginLeft = 0,
        !o && r) {
            var m = parseFloat(u.marginTop, 10)
              , v = parseFloat(u.marginLeft, 10);
            g.top -= d - m,
            g.bottom -= d - m,
            g.left -= f - v,
            g.right -= f - v,
            g.marginTop = m,
            g.marginLeft = v
        }
        return (o ? n.contains(c) : n === c && "BODY" !== c.nodeName) && (g = l(g, n)),
        g
    }
    function g(t) {
        var e = t.ownerDocument.documentElement
          , n = f(t, e)
          , i = M(e.clientWidth, window.innerWidth || 0)
          , o = M(e.clientHeight, window.innerHeight || 0)
          , r = a(e)
          , s = a(e, "left");
        return p({
            top: r - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: o
        })
    }
    function m(t) {
        var i = t.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === e(t, "position") || m(n(t)))
    }
    function v(t, e, o, r) {
        var a = {
            top: 0,
            left: 0
        }
          , l = s(t, e);
        if ("viewport" === r)
            a = g(l);
        else {
            var c;
            "scrollParent" === r ? "BODY" === (c = i(n(e))).nodeName && (c = t.ownerDocument.documentElement) : c = "window" === r ? t.ownerDocument.documentElement : r;
            var u = f(c, l);
            if ("HTML" !== c.nodeName || m(l))
                a = u;
            else {
                var p = d()
                  , h = p.height
                  , v = p.width;
                a.top += u.top - u.marginTop,
                a.bottom = h + u.top,
                a.left += u.left - u.marginLeft,
                a.right = v + u.left
            }
        }
        return a.left += o,
        a.top += o,
        a.right -= o,
        a.bottom -= o,
        a
    }
    function y(t, e, n, i, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var s = v(n, i, r, o)
          , a = {
            top: {
                width: s.width,
                height: e.top - s.top
            },
            right: {
                width: s.right - e.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - e.bottom
            },
            left: {
                width: e.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map(function(t) {
            return Y({
                key: t
            }, a[t], {
                area: function(t) {
                    return t.width * t.height
                }(a[t])
            })
        }).sort(function(t, e) {
            return e.area - t.area
        })
          , c = l.filter(function(t) {
            var e = t.width
              , i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight
        })
          , u = 0 < c.length ? c[0].key : l[0].key
          , d = t.split("-")[1];
        return u + (d ? "-" + d : "")
    }
    function b(t, e, n) {
        return f(n, s(e, n))
    }
    function w(t) {
        var e = getComputedStyle(t)
          , n = parseFloat(e.marginTop) + parseFloat(e.marginBottom)
          , i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }
    function x(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }
    function T(t, e, n) {
        n = n.split("-")[0];
        var i = w(t)
          , o = {
            width: i.width,
            height: i.height
        }
          , r = -1 !== ["right", "left"].indexOf(n)
          , s = r ? "top" : "left"
          , a = r ? "left" : "top"
          , l = r ? "height" : "width"
          , c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2,
        o[a] = n === a ? e[a] - i[c] : e[x(a)],
        o
    }
    function C(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
    function _(e, n, i) {
        return (void 0 === i ? e : e.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex)
                return t.findIndex(function(t) {
                    return t[e] === n
                });
            var i = C(t, function(t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(e, "name", i))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = e.function || e.fn;
            e.enabled && t(i) && (n.offsets.popper = p(n.offsets.popper),
            n.offsets.reference = p(n.offsets.reference),
            n = i(n, e))
        }),
        n
    }
    function S(t, e) {
        return t.some(function(t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }
    function E(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
            var o = e[i]
              , r = o ? "" + o + n : t;
            if (void 0 !== document.body.style[r])
                return r
        }
        return null
    }
    function k(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }
    function A(t, e, n, o) {
        n.updateBound = o,
        k(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = i(t);
        return function t(e, n, o, r) {
            var s = "BODY" === e.nodeName
              , a = s ? e.ownerDocument.defaultView : e;
            a.addEventListener(n, o, {
                passive: !0
            }),
            s || t(i(a.parentNode), n, o, r),
            r.push(a)
        }(r, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = r,
        n.eventsEnabled = !0,
        n
    }
    function D() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (t = this.reference,
        e = this.state,
        k(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e))
    }
    function I(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function $(t, e) {
        Object.keys(e).forEach(function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && I(e[n]) && (i = "px"),
            t.style[n] = e[n] + i
        })
    }
    function P(t, e, n) {
        var i = C(t, function(t) {
            return t.name === e
        })
          , o = !!i && t.some(function(t) {
            return t.name === n && t.enabled && t.order < i.order
        });
        if (!o) {
            var r = "`" + e + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    function L(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = K.indexOf(t)
          , i = K.slice(n + 1).concat(K.slice(0, n));
        return e ? i.reverse() : i
    }
    function N(t, e, n, i) {
        var o = [0, 0]
          , r = -1 !== ["right", "left"].indexOf(i)
          , s = t.split(/(\+|\-)/).map(function(t) {
            return t.trim()
        })
          , a = s.indexOf(C(s, function(t) {
            return -1 !== t.search(/,|\s/)
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return (c = c.map(function(t, i) {
            var o = (1 === i ? !r : r) ? "height" : "width"
              , s = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                s = !0,
                t) : s ? (t[t.length - 1] += e,
                s = !1,
                t) : t.concat(e)
            }, []).map(function(t) {
                return function(t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , r = +o[1]
                      , s = o[2];
                    if (!r)
                        return t;
                    if (0 === s.indexOf("%")) {
                        var a;
                        switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                        }
                        return p(a)[e] / 100 * r
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? M(document.documentElement.clientHeight, window.innerHeight || 0) : M(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                }(t, o, e, n)
            })
        })).forEach(function(t, e) {
            t.forEach(function(n, i) {
                I(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }),
        o
    }
    for (var O = Math.min, R = Math.floor, M = Math.max, H = "undefined" != typeof window && "undefined" != typeof document, j = ["Edge", "Trident", "Firefox"], F = 0, B = 0; B < j.length; B += 1)
        if (H && 0 <= navigator.userAgent.indexOf(j[B])) {
            F = 1;
            break
        }
    var q, W = H && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            window.Promise.resolve().then(function() {
                e = !1,
                t()
            }))
        }
    }
    : function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            setTimeout(function() {
                e = !1,
                t()
            }, F))
        }
    }
    , U = function() {
        return null == q && (q = -1 !== navigator.appVersion.indexOf("MSIE 10")),
        q
    }, z = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }, X = function() {
        function t(t, e) {
            for (var n, i = 0; i < e.length; i++)
                (n = e[i]).enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }(), V = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }, Y = Object.assign || function(t) {
        for (var e, n = 1; n < arguments.length; n++)
            for (var i in e = arguments[n])
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
    }
    , G = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], K = G.slice(3), Q = "flip", Z = "clockwise", J = "counterclockwise", tt = function() {
        function e(n, i) {
            var o = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            z(this, e),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(o.update)
            }
            ,
            this.update = W(this.update.bind(this)),
            this.options = Y({}, e.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = n && n.jquery ? n[0] : n,
            this.popper = i && i.jquery ? i[0] : i,
            this.options.modifiers = {},
            Object.keys(Y({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) {
                o.options.modifiers[t] = Y({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                return Y({
                    name: t
                }, o.options.modifiers[t])
            }).sort(function(t, e) {
                return t.order - e.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && t(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
            }),
            this.update();
            var s = this.options.eventsEnabled;
            s && this.enableEventListeners(),
            this.state.eventsEnabled = s
        }
        return X(e, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var t = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        t.offsets.reference = b(this.state, this.popper, this.reference),
                        t.placement = y(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        t.originalPlacement = t.placement,
                        t.offsets.popper = T(this.popper, t.offsets.reference, t.placement),
                        t.offsets.popper.position = "absolute",
                        t = _(this.modifiers, t),
                        this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
                        this.options.onCreate(t))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    S(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.left = "",
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style[E("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return D.call(this)
            }
        }]),
        e
    }();
    return tt.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
    tt.placements = G,
    tt.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement
                      , n = e.split("-")[0]
                      , i = e.split("-")[1];
                    if (i) {
                        var o = t.offsets
                          , r = o.reference
                          , s = o.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , u = {
                            start: V({}, l, r[l]),
                            end: V({}, l, r[l] + r[c] - s[c])
                        };
                        t.offsets.popper = Y({}, s, u[i])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var n, i = e.offset, o = t.placement, r = t.offsets, s = r.popper, a = r.reference, l = o.split("-")[0];
                    return n = I(+i) ? [+i, 0] : N(i, s, a, l),
                    "left" === l ? (s.top += n[0],
                    s.left -= n[1]) : "right" === l ? (s.top += n[0],
                    s.left += n[1]) : "top" === l ? (s.left += n[0],
                    s.top -= n[1]) : "bottom" === l && (s.left += n[0],
                    s.top += n[1]),
                    t.popper = s,
                    t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.boundariesElement || o(t.instance.popper);
                    t.instance.reference === n && (n = o(n));
                    var i = v(t.instance.popper, t.instance.reference, e.padding, n);
                    e.boundaries = i;
                    var r = e.priority
                      , s = t.offsets.popper
                      , a = {
                        primary: function(t) {
                            var n = s[t];
                            return s[t] < i[t] && !e.escapeWithReference && (n = M(s[t], i[t])),
                            V({}, t, n)
                        },
                        secondary: function(t) {
                            var n = "right" === t ? "left" : "top"
                              , o = s[n];
                            return s[t] > i[t] && !e.escapeWithReference && (o = O(s[n], i[t] - ("right" === t ? s.width : s.height))),
                            V({}, n, o)
                        }
                    };
                    return r.forEach(function(t) {
                        var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        s = Y({}, s, a[e](t))
                    }),
                    t.offsets.popper = s,
                    t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets
                      , n = e.popper
                      , i = e.reference
                      , o = t.placement.split("-")[0]
                      , r = R
                      , s = -1 !== ["top", "bottom"].indexOf(o)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
                    n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
                    t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, n) {
                    var i;
                    if (!P(t.instance.modifiers, "arrow", "keepTogether"))
                        return t;
                    var o = n.element;
                    if ("string" == typeof o) {
                        if (!(o = t.instance.popper.querySelector(o)))
                            return t
                    } else if (!t.instance.popper.contains(o))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        t;
                    var r = t.placement.split("-")[0]
                      , s = t.offsets
                      , a = s.popper
                      , l = s.reference
                      , c = -1 !== ["left", "right"].indexOf(r)
                      , u = c ? "height" : "width"
                      , d = c ? "Top" : "Left"
                      , h = d.toLowerCase()
                      , f = c ? "left" : "top"
                      , g = c ? "bottom" : "right"
                      , m = w(o)[u];
                    l[g] - m < a[h] && (t.offsets.popper[h] -= a[h] - (l[g] - m)),
                    l[h] + m > a[g] && (t.offsets.popper[h] += l[h] + m - a[g]),
                    t.offsets.popper = p(t.offsets.popper);
                    var v = l[h] + l[u] / 2 - m / 2
                      , y = e(t.instance.popper)
                      , b = parseFloat(y["margin" + d], 10)
                      , x = parseFloat(y["border" + d + "Width"], 10)
                      , T = v - t.offsets.popper[h] - b - x;
                    return T = M(O(a[u] - m, T), 0),
                    t.arrowElement = o,
                    t.offsets.arrow = (V(i = {}, h, Math.round(T)),
                    V(i, f, ""),
                    i),
                    t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (S(t.instance.modifiers, "inner"))
                        return t;
                    if (t.flipped && t.placement === t.originalPlacement)
                        return t;
                    var n = v(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement)
                      , i = t.placement.split("-")[0]
                      , o = x(i)
                      , r = t.placement.split("-")[1] || ""
                      , s = [];
                    switch (e.behavior) {
                    case Q:
                        s = [i, o];
                        break;
                    case Z:
                        s = L(i);
                        break;
                    case J:
                        s = L(i, !0);
                        break;
                    default:
                        s = e.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1)
                            return t;
                        i = t.placement.split("-")[0],
                        o = x(i);
                        var c = t.offsets.popper
                          , u = t.offsets.reference
                          , d = R
                          , p = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom)
                          , h = d(c.left) < d(n.left)
                          , f = d(c.right) > d(n.right)
                          , g = d(c.top) < d(n.top)
                          , m = d(c.bottom) > d(n.bottom)
                          , v = "left" === i && h || "right" === i && f || "top" === i && g || "bottom" === i && m
                          , y = -1 !== ["top", "bottom"].indexOf(i)
                          , b = !!e.flipVariations && (y && "start" === r && h || y && "end" === r && f || !y && "start" === r && g || !y && "end" === r && m);
                        (p || v || b) && (t.flipped = !0,
                        (p || v) && (i = s[l + 1]),
                        b && (r = function(t) {
                            return "end" === t ? "start" : "start" === t ? "end" : t
                        }(r)),
                        t.placement = i + (r ? "-" + r : ""),
                        t.offsets.popper = Y({}, t.offsets.popper, T(t.instance.popper, t.offsets.reference, t.placement)),
                        t = _(t.instance.modifiers, t, "flip"))
                    }),
                    t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement
                      , n = e.split("-")[0]
                      , i = t.offsets
                      , o = i.popper
                      , r = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0),
                    t.placement = x(e),
                    t.offsets.popper = p(o),
                    t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!P(t.instance.modifiers, "hide", "preventOverflow"))
                        return t;
                    var e = t.offsets.reference
                      , n = C(t.instance.modifiers, function(t) {
                        return "preventOverflow" === t.name
                    }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide)
                            return t;
                        t.hide = !0,
                        t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide)
                            return t;
                        t.hide = !1,
                        t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.x
                      , i = e.y
                      , r = t.offsets.popper
                      , s = C(t.instance.modifiers, function(t) {
                        return "applyStyle" === t.name
                    }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, c = void 0 === s ? e.gpuAcceleration : s, u = h(o(t.instance.popper)), d = {
                        position: r.position
                    }, p = {
                        left: R(r.left),
                        top: R(r.top),
                        bottom: R(r.bottom),
                        right: R(r.right)
                    }, f = "bottom" === n ? "top" : "bottom", g = "right" === i ? "left" : "right", m = E("transform");
                    if (l = "bottom" == f ? -u.height + p.bottom : p.top,
                    a = "right" == g ? -u.width + p.right : p.left,
                    c && m)
                        d[m] = "translate3d(" + a + "px, " + l + "px, 0)",
                        d[f] = 0,
                        d[g] = 0,
                        d.willChange = "transform";
                    else {
                        var v = "bottom" == f ? -1 : 1
                          , y = "right" == g ? -1 : 1;
                        d[f] = l * v,
                        d[g] = a * y,
                        d.willChange = f + ", " + g
                    }
                    var b = {
                        "x-placement": t.placement
                    };
                    return t.attributes = Y({}, b, t.attributes),
                    t.styles = Y({}, d, t.styles),
                    t.arrowStyles = Y({}, t.offsets.arrow, t.arrowStyles),
                    t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    return $(t.instance.popper, t.styles),
                    function(t, e) {
                        Object.keys(e).forEach(function(n) {
                            !1 === e[n] ? t.removeAttribute(n) : t.setAttribute(n, e[n])
                        })
                    }(t.instance.popper, t.attributes),
                    t.arrowElement && Object.keys(t.arrowStyles).length && $(t.arrowElement, t.arrowStyles),
                    t
                },
                onLoad: function(t, e, n, i, o) {
                    var r = b(0, e, t)
                      , s = y(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s),
                    $(e, {
                        position: "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    },
    tt
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function o(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function r() {
        return (r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e,
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var s, a, l, c, u, d, p, h, f, g, m, v, y, b, w, x, T, C, _ = function(t) {
        var e = !1;
        var n = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function(e) {
                var n, i = e.getAttribute("data-target");
                i && "#" !== i || (i = e.getAttribute("href") || ""),
                "#" === i.charAt(0) && (n = i,
                i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return t(document).find(i).length > 0 ? i : null
                } catch (t) {
                    return null
                }
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(n) {
                t(n).trigger(e.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(e)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, i) {
                for (var o in i)
                    if (Object.prototype.hasOwnProperty.call(i, o)) {
                        var r = i[o]
                          , s = e[o]
                          , a = s && n.isElement(s) ? "element" : (l = s,
                        {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                        if (!new RegExp(r).test(a))
                            throw new Error(t.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + r + '".')
                    }
                var l
            }
        };
        return e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend"
        },
        t.fn.emulateTransitionEnd = function(e) {
            var i = this
              , o = !1;
            return t(this).one(n.TRANSITION_END, function() {
                o = !0
            }),
            setTimeout(function() {
                o || n.triggerTransitionEnd(i)
            }, e),
            this
        }
        ,
        n.supportsTransitionEnd() && (t.event.special[n.TRANSITION_END] = {
            bindType: e.end,
            delegateType: e.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        }),
        n
    }(e), S = (a = "alert",
    c = "." + (l = "bs.alert"),
    u = (s = e).fn[a],
    d = {
        CLOSE: "close" + c,
        CLOSED: "closed" + c,
        CLICK_DATA_API: "click" + c + ".data-api"
    },
    "alert",
    "fade",
    "show",
    p = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.close = function(t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        e.dispose = function() {
            s.removeData(this._element, l),
            this._element = null
        }
        ,
        e._getRootElement = function(t) {
            var e = _.getSelectorFromElement(t)
              , n = !1;
            return e && (n = s(e)[0]),
            n || (n = s(t).closest(".alert")[0]),
            n
        }
        ,
        e._triggerCloseEvent = function(t) {
            var e = s.Event(d.CLOSE);
            return s(t).trigger(e),
            e
        }
        ,
        e._removeElement = function(t) {
            var e = this;
            s(t).removeClass("show"),
            _.supportsTransitionEnd() && s(t).hasClass("fade") ? s(t).one(_.TRANSITION_END, function(n) {
                return e._destroyElement(t, n)
            }).emulateTransitionEnd(150) : this._destroyElement(t)
        }
        ,
        e._destroyElement = function(t) {
            s(t).detach().trigger(d.CLOSED).remove()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var n = s(this)
                  , i = n.data(l);
                i || (i = new t(this),
                n.data(l, i)),
                "close" === e && i[e](this)
            })
        }
        ,
        t._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        o(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }]),
        t
    }(),
    s(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
    s.fn[a] = p._jQueryInterface,
    s.fn[a].Constructor = p,
    s.fn[a].noConflict = function() {
        return s.fn[a] = u,
        p._jQueryInterface
    }
    ,
    p), E = (f = "button",
    m = "." + (g = "bs.button"),
    v = ".data-api",
    y = (h = e).fn[f],
    b = "active",
    "btn",
    "focus",
    w = '[data-toggle^="button"]',
    '[data-toggle="buttons"]',
    "input",
    ".active",
    x = ".btn",
    T = {
        CLICK_DATA_API: "click" + m + v,
        FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
    },
    C = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.toggle = function() {
            var t = !0
              , e = !0
              , n = h(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = h(this._element).find("input")[0];
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && h(this._element).hasClass(b))
                            t = !1;
                        else {
                            var o = h(n).find(".active")[0];
                            o && h(o).removeClass(b)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !h(this._element).hasClass(b),
                        h(i).trigger("change")
                    }
                    i.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !h(this._element).hasClass(b)),
            t && h(this._element).toggleClass(b)
        }
        ,
        e.dispose = function() {
            h.removeData(this._element, g),
            this._element = null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var n = h(this).data(g);
                n || (n = new t(this),
                h(this).data(g, n)),
                "toggle" === e && n[e]()
            })
        }
        ,
        o(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }]),
        t
    }(),
    h(document).on(T.CLICK_DATA_API, w, function(t) {
        t.preventDefault();
        var e = t.target;
        h(e).hasClass("btn") || (e = h(e).closest(x)),
        C._jQueryInterface.call(h(e), "toggle")
    }).on(T.FOCUS_BLUR_DATA_API, w, function(t) {
        var e = h(t.target).closest(x)[0];
        h(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }),
    h.fn[f] = C._jQueryInterface,
    h.fn[f].Constructor = C,
    h.fn[f].noConflict = function() {
        return h.fn[f] = y,
        C._jQueryInterface
    }
    ,
    C), k = function(t) {
        var e = "carousel"
          , n = "bs.carousel"
          , i = "." + n
          , s = t.fn[e]
          , a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , c = "next"
          , u = "prev"
          , d = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , p = "active"
          , h = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , f = function() {
            function s(e, n) {
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this._config = this._getConfig(n),
                this._element = t(e)[0],
                this._indicatorsElement = t(this._element).find(h.INDICATORS)[0],
                this._addEventListeners()
            }
            var f = s.prototype;
            return f.next = function() {
                this._isSliding || this._slide(c)
            }
            ,
            f.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }
            ,
            f.prev = function() {
                this._isSliding || this._slide(u)
            }
            ,
            f.pause = function(e) {
                e || (this._isPaused = !0),
                t(this._element).find(h.NEXT_PREV)[0] && _.supportsTransitionEnd() && (_.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            f.cycle = function(t) {
                t || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            ,
            f.to = function(e) {
                var n = this;
                this._activeElement = t(this._element).find(h.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding)
                        t(this._element).one(d.SLID, function() {
                            return n.to(e)
                        });
                    else {
                        if (i === e)
                            return this.pause(),
                            void this.cycle();
                        var o = e > i ? c : u;
                        this._slide(o, this._items[e])
                    }
            }
            ,
            f.dispose = function() {
                t(this._element).off(i),
                t.removeData(this._element, n),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            f._getConfig = function(t) {
                return t = r({}, a, t),
                _.typeCheckConfig(e, t, l),
                t
            }
            ,
            f._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(d.KEYDOWN, function(t) {
                    return e._keydown(t)
                }),
                "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(d.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }),
                "ontouchstart"in document.documentElement && t(this._element).on(d.TOUCHEND, function() {
                    e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }
            ,
            f._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                    case 37:
                        t.preventDefault(),
                        this.prev();
                        break;
                    case 39:
                        t.preventDefault(),
                        this.next()
                    }
            }
            ,
            f._getItemIndex = function(e) {
                return this._items = t.makeArray(t(e).parent().find(h.ITEM)),
                this._items.indexOf(e)
            }
            ,
            f._getItemByDirection = function(t, e) {
                var n = t === c
                  , i = t === u
                  , o = this._getItemIndex(e)
                  , r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap)
                    return e;
                var s = (o + (t === u ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }
            ,
            f._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e)
                  , o = this._getItemIndex(t(this._element).find(h.ACTIVE_ITEM)[0])
                  , r = t.Event(d.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: o,
                    to: i
                });
                return t(this._element).trigger(r),
                r
            }
            ,
            f._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    t(this._indicatorsElement).find(h.ACTIVE).removeClass(p);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(p)
                }
            }
            ,
            f._slide = function(e, n) {
                var i, o, r, s = this, a = t(this._element).find(h.ACTIVE_ITEM)[0], l = this._getItemIndex(a), u = n || a && this._getItemByDirection(e, a), f = this._getItemIndex(u), g = Boolean(this._interval);
                if (e === c ? (i = "carousel-item-left",
                o = "carousel-item-next",
                r = "left") : (i = "carousel-item-right",
                o = "carousel-item-prev",
                r = "right"),
                u && t(u).hasClass(p))
                    this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
                    this._isSliding = !0,
                    g && this.pause(),
                    this._setActiveIndicatorElement(u);
                    var m = t.Event(d.SLID, {
                        relatedTarget: u,
                        direction: r,
                        from: l,
                        to: f
                    });
                    _.supportsTransitionEnd() && t(this._element).hasClass("slide") ? (t(u).addClass(o),
                    _.reflow(u),
                    t(a).addClass(i),
                    t(u).addClass(i),
                    t(a).one(_.TRANSITION_END, function() {
                        t(u).removeClass(i + " " + o).addClass(p),
                        t(a).removeClass(p + " " + o + " " + i),
                        s._isSliding = !1,
                        setTimeout(function() {
                            return t(s._element).trigger(m)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (t(a).removeClass(p),
                    t(u).addClass(p),
                    this._isSliding = !1,
                    t(this._element).trigger(m)),
                    g && this.cycle()
                }
            }
            ,
            s._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n)
                      , o = r({}, a, t(this).data());
                    "object" == typeof e && (o = r({}, o, e));
                    var l = "string" == typeof e ? e : o.slide;
                    if (i || (i = new s(this,o),
                    t(this).data(n, i)),
                    "number" == typeof e)
                        i.to(e);
                    else if ("string" == typeof l) {
                        if (void 0 === i[l])
                            throw new TypeError('No method named "' + l + '"');
                        i[l]()
                    } else
                        o.interval && (i.pause(),
                        i.cycle())
                })
            }
            ,
            s._dataApiClickHandler = function(e) {
                var i = _.getSelectorFromElement(this);
                if (i) {
                    var o = t(i)[0];
                    if (o && t(o).hasClass("carousel")) {
                        var a = r({}, t(o).data(), t(this).data())
                          , l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1),
                        s._jQueryInterface.call(t(o), a),
                        l && t(o).data(n).to(l),
                        e.preventDefault()
                    }
                }
            }
            ,
            o(s, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            s
        }();
        return t(document).on(d.CLICK_DATA_API, h.DATA_SLIDE, f._dataApiClickHandler),
        t(window).on(d.LOAD_DATA_API, function() {
            t(h.DATA_RIDE).each(function() {
                var e = t(this);
                f._jQueryInterface.call(e, e.data())
            })
        }),
        t.fn[e] = f._jQueryInterface,
        t.fn[e].Constructor = f,
        t.fn[e].noConflict = function() {
            return t.fn[e] = s,
            f._jQueryInterface
        }
        ,
        f
    }(e), A = function(t) {
        var e = "collapse"
          , n = "bs.collapse"
          , i = "." + n
          , s = t.fn[e]
          , a = {
            toggle: !0,
            parent: ""
        }
          , l = {
            toggle: "boolean",
            parent: "(string|element)"
        }
          , c = {
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , u = "show"
          , d = "collapse"
          , p = "collapsing"
          , h = "collapsed"
          , f = "width"
          , g = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , m = function() {
            function i(e, n) {
                this._isTransitioning = !1,
                this._element = e,
                this._config = this._getConfig(n),
                this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = t(g.DATA_TOGGLE), o = 0; o < i.length; o++) {
                    var r = i[o]
                      , s = _.getSelectorFromElement(r);
                    null !== s && t(s).filter(e).length > 0 && (this._selector = s,
                    this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var s = i.prototype;
            return s.toggle = function() {
                t(this._element).hasClass(u) ? this.hide() : this.show()
            }
            ,
            s.show = function() {
                var e, o, r = this;
                if (!(this._isTransitioning || t(this._element).hasClass(u) || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null),
                e && (o = t(e).not(this._selector).data(n)) && o._isTransitioning))) {
                    var s = t.Event(c.SHOW);
                    if (t(this._element).trigger(s),
                    !s.isDefaultPrevented()) {
                        e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"),
                        o || t(e).data(n, null));
                        var a = this._getDimension();
                        t(this._element).removeClass(d).addClass(p),
                        this._element.style[a] = 0,
                        this._triggerArray.length > 0 && t(this._triggerArray).removeClass(h).attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                        var l = function() {
                            t(r._element).removeClass(p).addClass(d).addClass(u),
                            r._element.style[a] = "",
                            r.setTransitioning(!1),
                            t(r._element).trigger(c.SHOWN)
                        };
                        if (_.supportsTransitionEnd()) {
                            var f = "scroll" + (a[0].toUpperCase() + a.slice(1));
                            t(this._element).one(_.TRANSITION_END, l).emulateTransitionEnd(600),
                            this._element.style[a] = this._element[f] + "px"
                        } else
                            l()
                    }
                }
            }
            ,
            s.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(u)) {
                    var n = t.Event(c.HIDE);
                    if (t(this._element).trigger(n),
                    !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                        _.reflow(this._element),
                        t(this._element).addClass(p).removeClass(d).removeClass(u),
                        this._triggerArray.length > 0)
                            for (var o = 0; o < this._triggerArray.length; o++) {
                                var r = this._triggerArray[o]
                                  , s = _.getSelectorFromElement(r);
                                null !== s && (t(s).hasClass(u) || t(r).addClass(h).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0);
                        var a = function() {
                            e.setTransitioning(!1),
                            t(e._element).removeClass(p).addClass(d).trigger(c.HIDDEN)
                        };
                        this._element.style[i] = "",
                        _.supportsTransitionEnd() ? t(this._element).one(_.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                    }
                }
            }
            ,
            s.setTransitioning = function(t) {
                this._isTransitioning = t
            }
            ,
            s.dispose = function() {
                t.removeData(this._element, n),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            s._getConfig = function(t) {
                return (t = r({}, a, t)).toggle = Boolean(t.toggle),
                _.typeCheckConfig(e, t, l),
                t
            }
            ,
            s._getDimension = function() {
                return t(this._element).hasClass(f) ? f : "height"
            }
            ,
            s._getParent = function() {
                var e = this
                  , n = null;
                _.isElement(this._config.parent) ? (n = this._config.parent,
                void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return t(n).find(o).each(function(t, n) {
                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                }),
                n
            }
            ,
            s._addAriaAndCollapsedClass = function(e, n) {
                if (e) {
                    var i = t(e).hasClass(u);
                    n.length > 0 && t(n).toggleClass(h, !i).attr("aria-expanded", i)
                }
            }
            ,
            i._getTargetFromElement = function(e) {
                var n = _.getSelectorFromElement(e);
                return n ? t(n)[0] : null
            }
            ,
            i._jQueryInterface = function(e) {
                return this.each(function() {
                    var o = t(this)
                      , s = o.data(n)
                      , l = r({}, a, o.data(), "object" == typeof e && e);
                    if (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                    s || (s = new i(this,l),
                    o.data(n, s)),
                    "string" == typeof e) {
                        if (void 0 === s[e])
                            throw new TypeError('No method named "' + e + '"');
                        s[e]()
                    }
                })
            }
            ,
            o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            i
        }();
        return t(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this)
              , o = _.getSelectorFromElement(this);
            t(o).each(function() {
                var e = t(this)
                  , o = e.data(n) ? "toggle" : i.data();
                m._jQueryInterface.call(e, o)
            })
        }),
        t.fn[e] = m._jQueryInterface,
        t.fn[e].Constructor = m,
        t.fn[e].noConflict = function() {
            return t.fn[e] = s,
            m._jQueryInterface
        }
        ,
        m
    }(e), D = function(t) {
        var e = "dropdown"
          , i = "bs.dropdown"
          , s = "." + i
          , a = ".data-api"
          , l = t.fn[e]
          , c = new RegExp("38|40|27")
          , u = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            CLICK: "click" + s,
            CLICK_DATA_API: "click" + s + a,
            KEYDOWN_DATA_API: "keydown" + s + a,
            KEYUP_DATA_API: "keyup" + s + a
        }
          , d = "disabled"
          , p = "show"
          , h = "dropup"
          , f = "dropdown-menu-right"
          , g = '[data-toggle="dropdown"]'
          , m = ".dropdown-menu"
          , v = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        }
          , y = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
        }
          , b = function() {
            function a(t, e) {
                this._element = t,
                this._popper = null,
                this._config = this._getConfig(e),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar(),
                this._addEventListeners()
            }
            var l = a.prototype;
            return l.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(d)) {
                    var e = a._getParentFromElement(this._element)
                      , i = t(this._menu).hasClass(p);
                    if (a._clearMenus(),
                    !i) {
                        var o = {
                            relatedTarget: this._element
                        }
                          , r = t.Event(u.SHOW, o);
                        if (t(e).trigger(r),
                        !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n)
                                    throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var s = this._element;
                                t(e).hasClass(h) && (t(this._menu).hasClass("dropdown-menu-left") || t(this._menu).hasClass(f)) && (s = e),
                                "scrollParent" !== this._config.boundary && t(e).addClass("position-static"),
                                this._popper = new n(s,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === t(e).closest(".navbar-nav").length && t("body").children().on("mouseover", null, t.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            t(this._menu).toggleClass(p),
                            t(e).toggleClass(p).trigger(t.Event(u.SHOWN, o))
                        }
                    }
                }
            }
            ,
            l.dispose = function() {
                t.removeData(this._element, i),
                t(this._element).off(s),
                this._element = null,
                this._menu = null,
                null !== this._popper && (this._popper.destroy(),
                this._popper = null)
            }
            ,
            l.update = function() {
                this._inNavbar = this._detectNavbar(),
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            l._addEventListeners = function() {
                var e = this;
                t(this._element).on(u.CLICK, function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    e.toggle()
                })
            }
            ,
            l._getConfig = function(n) {
                return n = r({}, this.constructor.Default, t(this._element).data(), n),
                _.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
            }
            ,
            l._getMenuElement = function() {
                if (!this._menu) {
                    var e = a._getParentFromElement(this._element);
                    this._menu = t(e).find(m)[0]
                }
                return this._menu
            }
            ,
            l._getPlacement = function() {
                var e = t(this._element).parent()
                  , n = "bottom-start";
                return e.hasClass(h) ? (n = "top-start",
                t(this._menu).hasClass(f) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(f) && (n = "bottom-end"),
                n
            }
            ,
            l._detectNavbar = function() {
                return t(this._element).closest(".navbar").length > 0
            }
            ,
            l._getPopperConfig = function() {
                var t = this
                  , e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}),
                    e
                }
                : e.offset = this._config.offset,
                {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                }
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(i);
                    if (n || (n = new a(this,"object" == typeof e ? e : null),
                    t(this).data(i, n)),
                    "string" == typeof e) {
                        if (void 0 === n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            a._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = t.makeArray(t(g)), o = 0; o < n.length; o++) {
                        var r = a._getParentFromElement(n[o])
                          , s = t(n[o]).data(i)
                          , l = {
                            relatedTarget: n[o]
                        };
                        if (s) {
                            var c = s._menu;
                            if (t(r).hasClass(p) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                var d = t.Event(u.HIDE, l);
                                t(r).trigger(d),
                                d.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                n[o].setAttribute("aria-expanded", "false"),
                                t(c).removeClass(p),
                                t(r).removeClass(p).trigger(t.Event(u.HIDDEN, l)))
                            }
                        }
                    }
            }
            ,
            a._getParentFromElement = function(e) {
                var n, i = _.getSelectorFromElement(e);
                return i && (n = t(i)[0]),
                n || e.parentNode
            }
            ,
            a._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(m).length)) : c.test(e.which)) && (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(d))) {
                    var n = a._getParentFromElement(this)
                      , i = t(n).hasClass(p);
                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var o = t(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                        if (0 !== o.length) {
                            var r = o.indexOf(e.target);
                            38 === e.which && r > 0 && r--,
                            40 === e.which && r < o.length - 1 && r++,
                            r < 0 && (r = 0),
                            o[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var s = t(n).find(g)[0];
                            t(s).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }
            ,
            o(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return v
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return y
                }
            }]),
            a
        }();
        return t(document).on(u.KEYDOWN_DATA_API, g, b._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, m, b._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, b._clearMenus).on(u.CLICK_DATA_API, g, function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            b._jQueryInterface.call(t(this), "toggle")
        }).on(u.CLICK_DATA_API, ".dropdown form", function(t) {
            t.stopPropagation()
        }),
        t.fn[e] = b._jQueryInterface,
        t.fn[e].Constructor = b,
        t.fn[e].noConflict = function() {
            return t.fn[e] = l,
            b._jQueryInterface
        }
        ,
        b
    }(e), I = function(t) {
        var e = "bs.modal"
          , n = "." + e
          , i = t.fn.modal
          , s = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , a = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , l = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            FOCUSIN: "focusin" + n,
            RESIZE: "resize" + n,
            CLICK_DISMISS: "click.dismiss" + n,
            KEYDOWN_DISMISS: "keydown.dismiss" + n,
            MOUSEUP_DISMISS: "mouseup.dismiss" + n,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
            CLICK_DATA_API: "click" + n + ".data-api"
        }
          , c = "modal-open"
          , u = "fade"
          , d = "show"
          , p = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }
          , h = function() {
            function i(e, n) {
                this._config = this._getConfig(n),
                this._element = e,
                this._dialog = t(e).find(p.DIALOG)[0],
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._originalBodyPadding = 0,
                this._scrollbarWidth = 0
            }
            var h = i.prototype;
            return h.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            ,
            h.show = function(e) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    _.supportsTransitionEnd() && t(this._element).hasClass(u) && (this._isTransitioning = !0);
                    var i = t.Event(l.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i),
                    this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(c),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(l.CLICK_DISMISS, p.DATA_DISMISS, function(t) {
                        return n.hide(t)
                    }),
                    t(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(l.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }
            ,
            h.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(),
                !this._isTransitioning && this._isShown) {
                    var i = t.Event(l.HIDE);
                    if (t(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = _.supportsTransitionEnd() && t(this._element).hasClass(u);
                        o && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(document).off(l.FOCUSIN),
                        t(this._element).removeClass(d),
                        t(this._element).off(l.CLICK_DISMISS),
                        t(this._dialog).off(l.MOUSEDOWN_DISMISS),
                        o ? t(this._element).one(_.TRANSITION_END, function(t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }
            ,
            h.dispose = function() {
                t.removeData(this._element, e),
                t(window, document, this._element, this._backdrop).off(n),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._scrollbarWidth = null
            }
            ,
            h.handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            h._getConfig = function(t) {
                return t = r({}, s, t),
                _.typeCheckConfig("modal", t, a),
                t
            }
            ,
            h._showElement = function(e) {
                var n = this
                  , i = _.supportsTransitionEnd() && t(this._element).hasClass(u);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.scrollTop = 0,
                i && _.reflow(this._element),
                t(this._element).addClass(d),
                this._config.focus && this._enforceFocus();
                var o = t.Event(l.SHOWN, {
                    relatedTarget: e
                })
                  , r = function() {
                    n._config.focus && n._element.focus(),
                    n._isTransitioning = !1,
                    t(n._element).trigger(o)
                };
                i ? t(this._dialog).one(_.TRANSITION_END, r).emulateTransitionEnd(300) : r()
            }
            ,
            h._enforceFocus = function() {
                var e = this;
                t(document).off(l.FOCUSIN).on(l.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }
            ,
            h._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(),
                    e.hide())
                }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
            }
            ,
            h._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(l.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(l.RESIZE)
            }
            ,
            h._hideModal = function() {
                var e = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._isTransitioning = !1,
                this._showBackdrop(function() {
                    t(document.body).removeClass(c),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(l.HIDDEN)
                })
            }
            ,
            h._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            h._showBackdrop = function(e) {
                var n = this
                  , i = t(this._element).hasClass(u) ? u : "";
                if (this._isShown && this._config.backdrop) {
                    var o = _.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = "modal-backdrop",
                    i && t(this._backdrop).addClass(i),
                    t(this._backdrop).appendTo(document.body),
                    t(this._element).on(l.CLICK_DISMISS, function(t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }),
                    o && _.reflow(this._backdrop),
                    t(this._backdrop).addClass(d),
                    !e)
                        return;
                    if (!o)
                        return void e();
                    t(this._backdrop).one(_.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(d);
                    var r = function() {
                        n._removeBackdrop(),
                        e && e()
                    };
                    _.supportsTransitionEnd() && t(this._element).hasClass(u) ? t(this._backdrop).one(_.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                } else
                    e && e()
            }
            ,
            h._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            h._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            h._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            h._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    t(p.FIXED_CONTENT).each(function(n, i) {
                        var o = t(i)[0].style.paddingRight
                          , r = t(i).css("padding-right");
                        t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }),
                    t(p.STICKY_CONTENT).each(function(n, i) {
                        var o = t(i)[0].style.marginRight
                          , r = t(i).css("margin-right");
                        t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    }),
                    t(p.NAVBAR_TOGGLER).each(function(n, i) {
                        var o = t(i)[0].style.marginRight
                          , r = t(i).css("margin-right");
                        t(i).data("margin-right", o).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight
                      , i = t("body").css("padding-right");
                    t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }
            ,
            h._resetScrollbar = function() {
                t(p.FIXED_CONTENT).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    void 0 !== i && t(n).css("padding-right", i).removeData("padding-right")
                }),
                t(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var e = t("body").data("padding-right");
                void 0 !== e && t("body").css("padding-right", e).removeData("padding-right")
            }
            ,
            h._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure",
                document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t),
                e
            }
            ,
            i._jQueryInterface = function(n, o) {
                return this.each(function() {
                    var s = t(this).data(e)
                      , a = r({}, i.Default, t(this).data(), "object" == typeof n && n);
                    if (s || (s = new i(this,a),
                    t(this).data(e, s)),
                    "string" == typeof n) {
                        if (void 0 === s[n])
                            throw new TypeError('No method named "' + n + '"');
                        s[n](o)
                    } else
                        a.show && s.show(o)
                })
            }
            ,
            o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return s
                }
            }]),
            i
        }();
        return t(document).on(l.CLICK_DATA_API, p.DATA_TOGGLE, function(n) {
            var i, o = this, s = _.getSelectorFromElement(this);
            s && (i = t(s)[0]);
            var a = t(i).data(e) ? "toggle" : r({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
            var c = t(i).one(l.SHOW, function(e) {
                e.isDefaultPrevented() || c.one(l.HIDDEN, function() {
                    t(o).is(":visible") && o.focus()
                })
            });
            h._jQueryInterface.call(t(i), a, this)
        }),
        t.fn.modal = h._jQueryInterface,
        t.fn.modal.Constructor = h,
        t.fn.modal.noConflict = function() {
            return t.fn.modal = i,
            h._jQueryInterface
        }
        ,
        h
    }(e), $ = function(t) {
        var e = "tooltip"
          , i = "bs.tooltip"
          , s = "." + i
          , a = t.fn[e]
          , l = new RegExp("(^|\\s)bs-tooltip\\S+","g")
          , c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }
          , u = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
          , d = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }
          , p = "show"
          , h = "out"
          , f = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            INSERTED: "inserted" + s,
            CLICK: "click" + s,
            FOCUSIN: "focusin" + s,
            FOCUSOUT: "focusout" + s,
            MOUSEENTER: "mouseenter" + s,
            MOUSELEAVE: "mouseleave" + s
        }
          , g = "fade"
          , m = "show"
          , v = "hover"
          , y = "focus"
          , b = function() {
            function a(t, e) {
                if (void 0 === n)
                    throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this.element = t,
                this.config = this._getConfig(e),
                this.tip = null,
                this._setListeners()
            }
            var b = a.prototype;
            return b.enable = function() {
                this._isEnabled = !0
            }
            ,
            b.disable = function() {
                this._isEnabled = !1
            }
            ,
            b.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            b.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY
                          , i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        t(e.currentTarget).data(n, i)),
                        i._activeTrigger.click = !i._activeTrigger.click,
                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(m))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }
            ,
            b.dispose = function() {
                clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && t(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                null !== this._popper && this._popper.destroy(),
                this._popper = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            b.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var o = t.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !o)
                        return;
                    var r = this.getTipElement()
                      , s = _.getUID(this.constructor.NAME);
                    r.setAttribute("id", s),
                    this.element.setAttribute("aria-describedby", s),
                    this.setContent(),
                    this.config.animation && t(r).addClass(g);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                      , c = this._getAttachment(l);
                    this.addAttachmentClass(c);
                    var u = !1 === this.config.container ? document.body : t(this.config.container);
                    t(r).data(this.constructor.DATA_KEY, this),
                    t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(u),
                    t(this.element).trigger(this.constructor.Event.INSERTED),
                    this._popper = new n(this.element,r,{
                        placement: c,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }),
                    t(r).addClass(m),
                    "ontouchstart"in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                    var d = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null,
                        t(e.element).trigger(e.constructor.Event.SHOWN),
                        n === h && e._leave(null, e)
                    };
                    _.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(_.TRANSITION_END, d).emulateTransitionEnd(a._TRANSITION_DURATION) : d()
                }
            }
            ,
            b.hide = function(e) {
                var n = this
                  , i = this.getTipElement()
                  , o = t.Event(this.constructor.Event.HIDE)
                  , r = function() {
                    n._hoverState !== p && i.parentNode && i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e()
                };
                t(this.element).trigger(o),
                o.isDefaultPrevented() || (t(i).removeClass(m),
                "ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger[y] = !1,
                this._activeTrigger[v] = !1,
                _.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(_.TRANSITION_END, r).emulateTransitionEnd(150) : r(),
                this._hoverState = "")
            }
            ,
            b.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            b.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            b.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }
            ,
            b.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0],
                this.tip
            }
            ,
            b.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".tooltip-inner"), this.getTitle()),
                e.removeClass(g + " " + m)
            }
            ,
            b.setElementContent = function(e, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
            }
            ,
            b.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                t
            }
            ,
            b._getAttachment = function(t) {
                return u[t.toUpperCase()]
            }
            ,
            b._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n)
                        t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                            return e.toggle(t)
                        });
                    else if ("manual" !== n) {
                        var i = n === v ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                          , o = n === v ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(o, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                    t(e.element).closest(".modal").on("hide.bs.modal", function() {
                        return e.hide()
                    })
                }),
                this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            b._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            b._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusin" === e.type ? y : v] = !0),
                t(n.getTipElement()).hasClass(m) || n._hoverState === p ? n._hoverState = p : (clearTimeout(n._timeout),
                n._hoverState = p,
                n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === p && n.show()
                }, n.config.delay.show) : n.show())
            }
            ,
            b._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusout" === e.type ? y : v] = !1),
                n._isWithActiveTrigger() || (clearTimeout(n._timeout),
                n._hoverState = h,
                n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    n._hoverState === h && n.hide()
                }, n.config.delay.hide) : n.hide())
            }
            ,
            b._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return !0;
                return !1
            }
            ,
            b._getConfig = function(n) {
                return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content && (n.content = n.content.toString()),
                _.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
            }
            ,
            b._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }
            ,
            b._cleanTipClass = function() {
                var e = t(this.getTipElement())
                  , n = e.attr("class").match(l);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }
            ,
            b._handlePopperPlacementChange = function(t) {
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement))
            }
            ,
            b._fixTransition = function() {
                var e = this.getTipElement()
                  , n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(g),
                this.config.animation = !1,
                this.hide(),
                this.show(),
                this.config.animation = n)
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(i)
                      , o = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this,o),
                    t(this).data(i, n)),
                    "string" == typeof e)) {
                        if (void 0 === n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            o(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return d
                }
            }, {
                key: "NAME",
                get: function() {
                    return e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "Event",
                get: function() {
                    return f
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return s
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return c
                }
            }]),
            a
        }();
        return t.fn[e] = b._jQueryInterface,
        t.fn[e].Constructor = b,
        t.fn[e].noConflict = function() {
            return t.fn[e] = a,
            b._jQueryInterface
        }
        ,
        b
    }(e), P = function(t) {
        var e = "popover"
          , n = "bs.popover"
          , i = "." + n
          , s = t.fn[e]
          , a = new RegExp("(^|\\s)bs-popover\\S+","g")
          , l = r({}, $.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
          , c = r({}, $.DefaultType, {
            content: "(string|element|function)"
        })
          , u = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
        }
          , d = function(r) {
            var s, d;
            function p() {
                return r.apply(this, arguments) || this
            }
            d = r,
            (s = p).prototype = Object.create(d.prototype),
            s.prototype.constructor = s,
            s.__proto__ = d;
            var h = p.prototype;
            return h.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            h.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }
            ,
            h.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0],
                this.tip
            }
            ,
            h.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(".popover-body"), n),
                e.removeClass("fade show")
            }
            ,
            h._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }
            ,
            h._cleanTipClass = function() {
                var e = t(this.getTipElement())
                  , n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }
            ,
            p._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n)
                      , o = "object" == typeof e ? e : null;
                    if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this,o),
                    t(this).data(n, i)),
                    "string" == typeof e)) {
                        if (void 0 === i[e])
                            throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            o(p, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }, {
                key: "NAME",
                get: function() {
                    return e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return n
                }
            }, {
                key: "Event",
                get: function() {
                    return u
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return c
                }
            }]),
            p
        }($);
        return t.fn[e] = d._jQueryInterface,
        t.fn[e].Constructor = d,
        t.fn[e].noConflict = function() {
            return t.fn[e] = s,
            d._jQueryInterface
        }
        ,
        d
    }(e), L = function(t) {
        var e = "scrollspy"
          , n = "bs.scrollspy"
          , i = "." + n
          , s = t.fn[e]
          , a = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , l = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , c = {
            ACTIVATE: "activate" + i,
            SCROLL: "scroll" + i,
            LOAD_DATA_API: "load" + i + ".data-api"
        }
          , u = "active"
          , d = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , p = "position"
          , h = function() {
            function s(e, n) {
                var i = this;
                this._element = e,
                this._scrollElement = "BODY" === e.tagName ? window : e,
                this._config = this._getConfig(n),
                this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS,
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                t(this._scrollElement).on(c.SCROLL, function(t) {
                    return i._process(t)
                }),
                this.refresh(),
                this._process()
            }
            var h = s.prototype;
            return h.refresh = function() {
                var e = this
                  , n = this._scrollElement === this._scrollElement.window ? "offset" : p
                  , i = "auto" === this._config.method ? n : this._config.method
                  , o = i === p ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight(),
                t.makeArray(t(this._selector)).map(function(e) {
                    var n, r = _.getSelectorFromElement(e);
                    if (r && (n = t(r)[0]),
                    n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height)
                            return [t(n)[i]().top + o, r]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]),
                    e._targets.push(t[1])
                })
            }
            ,
            h.dispose = function() {
                t.removeData(this._element, n),
                t(this._scrollElement).off(i),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            h._getConfig = function(n) {
                if ("string" != typeof (n = r({}, a, n)).target) {
                    var i = t(n.target).attr("id");
                    i || (i = _.getUID(e),
                    t(n.target).attr("id", i)),
                    n.target = "#" + i
                }
                return _.typeCheckConfig(e, n, l),
                n
            }
            ,
            h._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ,
            h._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            h._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ,
            h._process = function() {
                var t = this._getScrollTop() + this._config.offset
                  , e = this._getScrollHeight()
                  , n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(),
                t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null,
                        void this._clear();
                    for (var o = this._offsets.length; o--; )
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
            ,
            h._activate = function(e) {
                this._activeTarget = e,
                this._clear();
                var n = this._selector.split(",");
                n = n.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var i = t(n.join(","));
                i.hasClass("dropdown-item") ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u),
                i.addClass(u)) : (i.addClass(u),
                i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u),
                i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)),
                t(this._scrollElement).trigger(c.ACTIVATE, {
                    relatedTarget: e
                })
            }
            ,
            h._clear = function() {
                t(this._selector).filter(d.ACTIVE).removeClass(u)
            }
            ,
            s._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n);
                    if (i || (i = new s(this,"object" == typeof e && e),
                    t(this).data(n, i)),
                    "string" == typeof e) {
                        if (void 0 === i[e])
                            throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            o(s, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            s
        }();
        return t(window).on(c.LOAD_DATA_API, function() {
            for (var e = t.makeArray(t(d.DATA_SPY)), n = e.length; n--; ) {
                var i = t(e[n]);
                h._jQueryInterface.call(i, i.data())
            }
        }),
        t.fn[e] = h._jQueryInterface,
        t.fn[e].Constructor = h,
        t.fn[e].noConflict = function() {
            return t.fn[e] = s,
            h._jQueryInterface
        }
        ,
        h
    }(e), N = function(t) {
        var e = "bs.tab"
          , n = "." + e
          , i = t.fn.tab
          , r = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK_DATA_API: "click.bs.tab.data-api"
        }
          , s = "active"
          , a = "show"
          , l = ".active"
          , c = "> li > .active"
          , u = function() {
            function n(t) {
                this._element = t
            }
            var i = n.prototype;
            return i.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s) || t(this._element).hasClass("disabled"))) {
                    var n, i, o = t(this._element).closest(".nav, .list-group")[0], a = _.getSelectorFromElement(this._element);
                    if (o) {
                        var u = "UL" === o.nodeName ? c : l;
                        i = (i = t.makeArray(t(o).find(u)))[i.length - 1]
                    }
                    var d = t.Event(r.HIDE, {
                        relatedTarget: this._element
                    })
                      , p = t.Event(r.SHOW, {
                        relatedTarget: i
                    });
                    if (i && t(i).trigger(d),
                    t(this._element).trigger(p),
                    !p.isDefaultPrevented() && !d.isDefaultPrevented()) {
                        a && (n = t(a)[0]),
                        this._activate(this._element, o);
                        var h = function() {
                            var n = t.Event(r.HIDDEN, {
                                relatedTarget: e._element
                            })
                              , o = t.Event(r.SHOWN, {
                                relatedTarget: i
                            });
                            t(i).trigger(n),
                            t(e._element).trigger(o)
                        };
                        n ? this._activate(n, n.parentNode, h) : h()
                    }
                }
            }
            ,
            i.dispose = function() {
                t.removeData(this._element, e),
                this._element = null
            }
            ,
            i._activate = function(e, n, i) {
                var o = this
                  , r = ("UL" === n.nodeName ? t(n).find(c) : t(n).children(l))[0]
                  , s = i && _.supportsTransitionEnd() && r && t(r).hasClass("fade")
                  , a = function() {
                    return o._transitionComplete(e, r, i)
                };
                r && s ? t(r).one(_.TRANSITION_END, a).emulateTransitionEnd(150) : a()
            }
            ,
            i._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(a + " " + s);
                    var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    o && t(o).removeClass(s),
                    "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(s),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                _.reflow(e),
                t(e).addClass(a),
                e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var r = t(e).closest(".dropdown")[0];
                    r && t(r).find(".dropdown-toggle").addClass(s),
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }
            ,
            n._jQueryInterface = function(i) {
                return this.each(function() {
                    var o = t(this)
                      , r = o.data(e);
                    if (r || (r = new n(this),
                    o.data(e, r)),
                    "string" == typeof i) {
                        if (void 0 === r[i])
                            throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }
            ,
            o(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]),
            n
        }();
        return t(document).on(r.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
            e.preventDefault(),
            u._jQueryInterface.call(t(this), "show")
        }),
        t.fn.tab = u._jQueryInterface,
        t.fn.tab.Constructor = u,
        t.fn.tab.noConflict = function() {
            return t.fn.tab = i,
            u._jQueryInterface
        }
        ,
        u
    }(e);
    !function(t) {
        if (void 0 === t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
    t.Util = _,
    t.Alert = S,
    t.Button = E,
    t.Carousel = k,
    t.Collapse = A,
    t.Dropdown = D,
    t.Modal = I,
    t.Popover = P,
    t.Scrollspy = L,
    t.Tab = N,
    t.Tooltip = $,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], e);
    else if ("undefined" != typeof exports)
        e(module, exports);
    else {
        var n = {
            exports: {}
        };
        e(n, n.exports),
        t.WOW = n.exports
    }
}(this, function(t, e) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        return e.indexOf(t) >= 0
    }
    function o(t, e, n) {
        null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
    }
    function r(t, e, n) {
        null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s, a, l = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }(), c = window.WeakMap || window.MozWeakMap || function() {
        function t() {
            n(this, t),
            this.keys = [],
            this.values = []
        }
        return l(t, [{
            key: "get",
            value: function(t) {
                for (var e = 0; e < this.keys.length; e++) {
                    if (this.keys[e] === t)
                        return this.values[e]
                }
            }
        }, {
            key: "set",
            value: function(t, e) {
                for (var n = 0; n < this.keys.length; n++) {
                    if (this.keys[n] === t)
                        return this.values[n] = e,
                        this
                }
                return this.keys.push(t),
                this.values.push(e),
                this
            }
        }]),
        t
    }(), u = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (a = s = function() {
        function t() {
            n(this, t),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return l(t, [{
            key: "observe",
            value: function() {}
        }]),
        t
    }(),
    s.notSupported = !0,
    a), d = window.getComputedStyle || function(t) {
        var e = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(n) {
                "float" === n && (n = "styleFloat"),
                e.test(n) && n.replace(e, function(t, e) {
                    return e.toUpperCase()
                });
                var i = t.currentStyle;
                return (null != i ? i[n] : void 0) || null
            }
        }
    }
    , p = function() {
        function t() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            n(this, t),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            },
            this.animate = "requestAnimationFrame"in window ? function(t) {
                return window.requestAnimationFrame(t)
            }
            : function(t) {
                return t()
            }
            ,
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = function(t, e) {
                for (var n in e)
                    if (null == t[n]) {
                        var i = e[n];
                        t[n] = i
                    }
                return t
            }(e, this.defaults),
            null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = function(t) {
                var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1]
                  , n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2]
                  , i = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
                  , o = void 0;
                return null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t,
                o
            }(this.config.boxClass)
        }
        return l(t, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement,
                i(document.readyState, ["interactive", "complete"]) ? this.start() : o(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var t = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var e = 0; e < this.boxes.length; e++) {
                            var n = this.boxes[e];
                            this.applyStyle(n, !0)
                        }
                (this.disabled() || (o(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                o(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) && new u(function(e) {
                    for (var n = 0; n < e.length; n++)
                        for (var i = e[n], o = 0; o < i.addedNodes.length; o++) {
                            var r = i.addedNodes[o];
                            t.doSync(r)
                        }
                }
                ).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0,
                r(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                r(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                u.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(t) {
                if (null != t || (t = this.element),
                1 === t.nodeType)
                    for (var e = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass), n = 0; n < e.length; n++) {
                        var o = e[n];
                        i(o, this.all) || (this.boxes.push(o),
                        this.all.push(o),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(o, !0),
                        this.scrolled = !0)
                    }
            }
        }, {
            key: "show",
            value: function(t) {
                return this.applyStyle(t),
                t.className = t.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(t),
                function(t, e) {
                    null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) && t["on" + e]()
                }(t, this.wowEvent),
                o(t, "animationend", this.resetAnimation),
                o(t, "oanimationend", this.resetAnimation),
                o(t, "webkitAnimationEnd", this.resetAnimation),
                o(t, "MSAnimationEnd", this.resetAnimation),
                t
            }
        }, {
            key: "applyStyle",
            value: function(t, e) {
                var n = this
                  , i = t.getAttribute("data-wow-duration")
                  , o = t.getAttribute("data-wow-delay")
                  , r = t.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return n.customStyle(t, e, i, o, r)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var t = 0; t < this.boxes.length; t++) {
                    this.boxes[t].style.visibility = "visible"
                }
            }
        }, {
            key: "resetAnimation",
            value: function(t) {
                if (t.type.toLowerCase().indexOf("animationend") >= 0) {
                    var e = t.target || t.srcElement;
                    e.className = e.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(t, e, n, i, o) {
                return e && this.cacheAnimationName(t),
                t.style.visibility = e ? "hidden" : "visible",
                n && this.vendorSet(t.style, {
                    animationDuration: n
                }),
                i && this.vendorSet(t.style, {
                    animationDelay: i
                }),
                o && this.vendorSet(t.style, {
                    animationIterationCount: o
                }),
                this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }),
                t
            }
        }, {
            key: "vendorSet",
            value: function(t, e) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var i = e[n];
                        t["" + n] = i;
                        for (var o = 0; o < this.vendors.length; o++) {
                            t["" + this.vendors[o] + n.charAt(0).toUpperCase() + n.substr(1)] = i
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function(t, e) {
                for (var n = d(t), i = n.getPropertyCSSValue(e), o = 0; o < this.vendors.length; o++) {
                    var r = this.vendors[o];
                    i = i || n.getPropertyCSSValue("-" + r + "-" + e)
                }
                return i
            }
        }, {
            key: "animationName",
            value: function(t) {
                var e = void 0;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (n) {
                    e = d(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }
        }, {
            key: "cacheAnimationName",
            value: function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }
        }, {
            key: "cachedAnimationName",
            value: function(t) {
                return this.animationNameCache.get(t)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var t = [], e = 0; e < this.boxes.length; e++) {
                        var n = this.boxes[e];
                        if (n) {
                            if (this.isVisible(n)) {
                                this.show(n);
                                continue
                            }
                            t.push(n)
                        }
                    }
                    this.boxes = t,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(t) {
                for (; void 0 === t.offsetTop; )
                    t = t.parentNode;
                for (var e = t.offsetTop; t.offsetParent; )
                    e += (t = t.offsetParent).offsetTop;
                return e
            }
        }, {
            key: "isVisible",
            value: function(t) {
                var e = t.getAttribute("data-wow-offset") || this.config.offset
                  , n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , i = n + Math.min(this.element.clientHeight, "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight) - e
                  , o = this.offsetTop(t)
                  , r = o + t.clientHeight;
                return i >= o && r >= n
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && (t = navigator.userAgent,
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t));
                var t
            }
        }]),
        t
    }();
    e.default = p,
    t.exports = e.default
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(n, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(n),
                appendDots: t(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, n) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(r, r.initials),
            r.activeBreakpoint = null,
            r.animType = null,
            r.animProp = null,
            r.breakpoints = [],
            r.breakpointSettings = [],
            r.cssTransitions = !1,
            r.focussed = !1,
            r.interrupted = !1,
            r.hidden = "hidden",
            r.paused = !0,
            r.positionProp = null,
            r.respondTo = null,
            r.rowCount = 1,
            r.shouldClick = !0,
            r.$slider = t(n),
            r.$slidesCache = null,
            r.transformType = null,
            r.transitionType = null,
            r.visibilityChange = "visibilitychange",
            r.windowWidth = 0,
            r.windowTimer = null,
            o = t(n).data("slick") || {},
            r.options = t.extend({}, r.defaults, i, o),
            r.currentSlide = r.options.initialSlide,
            r.originalSettings = r.options,
            void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
            r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
            r.visibilityChange = "webkitvisibilitychange"),
            r.autoPlay = t.proxy(r.autoPlay, r),
            r.autoPlayClear = t.proxy(r.autoPlayClear, r),
            r.autoPlayIterator = t.proxy(r.autoPlayIterator, r),
            r.changeSlide = t.proxy(r.changeSlide, r),
            r.clickHandler = t.proxy(r.clickHandler, r),
            r.selectHandler = t.proxy(r.selectHandler, r),
            r.setPosition = t.proxy(r.setPosition, r),
            r.swipeHandler = t.proxy(r.swipeHandler, r),
            r.dragHandler = t.proxy(r.dragHandler, r),
            r.keyHandler = t.proxy(r.keyHandler, r),
            r.instanceUid = e++,
            r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            r.registerBreakpoints(),
            r.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
        var o = this;
        if ("boolean" == typeof n)
            i = n,
            n = null;
        else if (n < 0 || n >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof n ? 0 === n && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : i ? t(e).insertBefore(o.$slides.eq(n)) : t(e).insertAfter(o.$slides.eq(n)) : !0 === i ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(e, n) {
            t(n).attr("data-slick-index", e)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, n) {
        var i = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === o.options.vertical ? (i[o.animType] = "translate(" + t + "px, 0px)",
                o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + t + "px)",
                o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(),
        e = Math.ceil(e),
        !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)",
        o.$slideTrack.css(i),
        n && setTimeout(function() {
            o.disableTransition(),
            n.call()
        }, o.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)),
        e
    }
    ,
    e.prototype.asNavFor = function(e) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var n = t(this).slick("getSlick");
            n.unslicked || n.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , n = {};
        !1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            n = t("<ul />").addClass(i.options.dotsClass),
            e = 0; e <= i.getDotCount(); e += 1)
                n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = n.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, n) {
            t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = t * s + (e * a.options.slidesPerRow + n);
                        r.get(u) && c.appendChild(r.get(u))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, n) {
        var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in o = null,
            s.breakpoints)
                s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = o) : (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e),
            a = o),
            e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    e.prototype.changeSlide = function(e, n) {
        var i, o, r = this, s = t(e.currentTarget);
        switch (s.is("a") && e.preventDefault(),
        s.is("li") || (s = s.closest("li")),
        i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
            break;
        case "next":
            o = 0 === i ? r.options.slidesToScroll : i,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
            break;
        case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n),
            s.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, n;
        if (n = 0,
        t > (e = this.getNavigableIndexes())[e.length - 1])
            t = e[e.length - 1];
        else
            for (var i in e) {
                if (t < e[i]) {
                    t = n;
                    break
                }
                n = e[i]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var n = this;
        n.autoPlayClear(),
        n.touchObject = {},
        n.cleanUpEvents(),
        t(".slick-cloned", n.$slider).detach(),
        n.$dots && n.$dots.remove(),
        n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
        n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
        n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.detach(),
        n.$list.detach(),
        n.$slider.append(n.$slides)),
        n.cleanUpRows(),
        n.$slider.removeClass("slick-slider"),
        n.$slider.removeClass("slick-initialized"),
        n.$slider.removeClass("slick-dotted"),
        n.unslicked = !0,
        e || n.$slider.trigger("destroy", [n])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , n = {};
        n[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(t).css({
            zIndex: n.options.zIndex
        }),
        n.$slides.eq(t).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t),
        n.$slides.eq(t).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }),
        e && setTimeout(function() {
            n.disableTransition(t),
            e.call()
        }, n.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) {
            n.stopImmediatePropagation();
            var i = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = i.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , n = 0
          , i = 0;
        if (!0 === t.options.infinite)
            for (; e < t.slideCount; )
                ++i,
                e = n + t.options.slidesToScroll,
                n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            i = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++i,
                e = n + t.options.slidesToScroll,
                n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return i - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, n, i, o = this, r = 0;
        return o.slideOffset = 0,
        n = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        r = n * o.options.slidesToShow * -1),
        o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1,
        r = (o.options.slidesToShow - (t - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        r = o.slideCount % o.options.slidesToScroll * n * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        r = (t + o.options.slidesToShow - o.slideCount) * n),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        r = 0),
        !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + r,
        !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow),
        e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1),
        e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        e += (o.$list.width() - i.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = this, n = 0, i = 0, o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll,
        i = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); n < t; )
            o.push(n),
            n = i + e.options.slidesToScroll,
            i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(o, r) {
            if (r.offsetLeft - n + t(r).outerWidth() / 2 > -1 * i.swipeLeft)
                return e = r,
                !1
        }),
        Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var n = this;
        t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"),
        n.buildRows(),
        n.buildOut(),
        n.setProps(),
        n.startLoad(),
        n.loadSlider(),
        n.initializeEvents(),
        n.updateArrows(),
        n.updateDots(),
        n.checkResponsive(!0),
        n.focusHandler()),
        e && n.$slider.trigger("init", [n]),
        !0 === n.options.accessibility && n.initADA(),
        n.options.autoplay && (n.paused = !1,
        n.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        e.$slideTrack.attr("role", "listbox"),
        e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + n
            })
        }),
        null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(n) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + n,
                id: "slick-slide" + e.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        var e, n, i = this;
        function o(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this)
                  , n = t(this).attr("data-lazy")
                  , o = document.createElement("img");
                o.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        i.$slider.trigger("lazyLoaded", [i, e, n])
                    })
                }
                ,
                o.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    i.$slider.trigger("lazyLoadError", [i, e, n])
                }
                ,
                o.src = n
            })
        }
        !0 === i.options.centerMode ? !0 === i.options.infinite ? n = (e = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (e = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)),
        n = i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (e = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide,
        n = Math.ceil(e + i.options.slidesToShow),
        !0 === i.options.fade && (e > 0 && e--,
        n <= i.slideCount && n++)),
        o(i.$slider.find(".slick-slide").slice(e, n)),
        i.slideCount <= i.options.slidesToShow ? o(i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? o(i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && o(i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]),
        e.animating = !1,
        e.setPosition(),
        e.swipeLeft = null,
        e.options.autoplay && e.autoPlay(),
        !0 === e.options.accessibility && e.initADA())
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var n, i, o, r = this, s = t("img[data-lazy]", r.$slider);
        s.length ? (n = s.first(),
        i = n.attr("data-lazy"),
        (o = document.createElement("img")).onload = function() {
            n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, n, i]),
            r.progressiveLazyLoad()
        }
        ,
        o.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, n, i]),
            r.progressiveLazyLoad())
        }
        ,
        o.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    e.prototype.refresh = function(e) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        n = o.currentSlide,
        o.destroy(!0),
        t.extend(o, o.initials, {
            currentSlide: n
        }),
        o.init(),
        e || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, n, i, o = this, r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            for (e in o.respondTo = o.options.respondTo || "window",
            r)
                if (i = o.breakpoints.length - 1,
                n = r[e].breakpoint,
                r.hasOwnProperty(e)) {
                    for (; i >= 0; )
                        o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1),
                        i--;
                    o.breakpoints.push(n),
                    o.breakpointSettings[n] = r[e].settings
                }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
        var i = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t,
        i.slideCount < 1 || t < 0 || t > i.slideCount - 1)
            return !1;
        i.unload(),
        !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, n, i = this, o = {};
        !0 === i.options.rtl && (t = -t),
        e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px",
        o[i.positionProp] = t,
        !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {},
        !1 === i.cssTransitions ? (o[i.animType] = "translate(" + e + ", " + n + ")",
        i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)",
        i.$slideTrack.css(o)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, n = this;
        n.$slides.each(function(i, o) {
            e = n.slideWidth * i * -1,
            !0 === n.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }),
        n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, n, i, o, r, s = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (i = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0],
        o = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
        "single" === r)
            s.options[i] = o;
        else if ("multiple" === r)
            t.each(i, function(t, e) {
                s.options[t] = e
            });
        else if ("responsive" === r)
            for (n in o)
                if ("array" !== t.type(s.options.responsive))
                    s.options.responsive = [o[n]];
                else {
                    for (e = s.options.responsive.length - 1; e >= 0; )
                        s.options.responsive[e].breakpoint === o[n].breakpoint && s.options.responsive.splice(e, 1),
                        e--;
                    s.options.responsive.push(o[n])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, n, i, o, r = this;
        n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(t).addClass("slick-current"),
        !0 === r.options.centerMode ? (e = Math.floor(r.options.slidesToShow / 2),
        !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + t,
        n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === t ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
        r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
        i = !0 === r.options.infinite ? r.options.slidesToShow + t : t,
        r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite && !1 === o.options.fade && (n = null,
        o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            e = o.slideCount; e > o.slideCount - i; e -= 1)
                n = e - 1,
                t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i; e += 1)
                n = e,
                t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(t) {
        t || this.autoPlay(),
        this.interrupted = t
    }
    ,
    e.prototype.selectHandler = function(e) {
        var n = this
          , i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , o = parseInt(i.attr("data-slick-index"));
        if (o || (o = 0),
        n.slideCount <= n.options.slidesToShow)
            return n.setSlideClasses(o),
            void n.asNavFor(o);
        n.slideHandler(o)
    }
    ,
    e.prototype.slideHandler = function(t, e, n) {
        var i, o, r, s, a, l, c = this;
        if (e = e || !1,
        (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow))
            if (!1 === e && c.asNavFor(t),
            i = t,
            a = c.getLeft(i),
            s = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (i = c.currentSlide,
                !0 !== n ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (i = c.currentSlide,
                !0 !== n ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                r = c.currentSlide,
                c.currentSlide = o,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== n ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function() {
                        c.postSlide(o)
                    })) : c.postSlide(o),
                    void c.animateHeight();
                !0 !== n ? c.animateSlide(a, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, n, i, o = this;
        return t = o.touchObject.startX - o.touchObject.curX,
        e = o.touchObject.startY - o.touchObject.curY,
        n = Math.atan2(e, t),
        (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
        i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, n, i = this;
        if (i.dragging = !1,
        i.interrupted = !1,
        i.shouldClick = !(i.touchObject.swipeLength > 10),
        void 0 === i.touchObject.curX)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(e),
            i.touchObject = {},
            i.$slider.trigger("swipe", [i, n]))
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, n, i, o, r, s = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!s.dragging || r && 1 !== r.length) && (e = s.getLeft(s.currentSlide),
        s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
        s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
        s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
        !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
        "vertical" !== (n = s.swipeDirection()) ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(),
        o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
        !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
        i = s.touchObject.swipeLength,
        s.touchObject.edgeHit = !1,
        !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction,
        s.touchObject.edgeHit = !0),
        !1 === s.options.vertical ? s.swipeLeft = e + i * o : s.swipeLeft = e + i * (s.$list.height() / s.listWidth) * o,
        !0 === s.options.verticalSwiping && (s.swipeLeft = e + i * o),
        !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null,
        !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e, n = this;
        if (n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return n.touchObject = {},
            !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        n.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }
    ,
    t.fn.slick = function() {
        var t, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof o || void 0 === o ? i[t].slick = new e(i[t],o) : n = i[t].slick[o].apply(i[t].slick, r),
            void 0 !== n)
                return n;
        return i
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    "use strict";
    function e(t) {
        return "%" == t[t.length - 1]
    }
    function n(t, e, n) {
        function i(t, e) {
            var n = r.createShader(t);
            if (r.shaderSource(n, e),
            r.compileShader(n),
            !r.getShaderParameter(n, r.COMPILE_STATUS))
                throw new Error("compile error: " + r.getShaderInfoLog(n));
            return n
        }
        var o = {};
        if (o.id = r.createProgram(),
        r.attachShader(o.id, i(r.VERTEX_SHADER, t)),
        r.attachShader(o.id, i(r.FRAGMENT_SHADER, e)),
        r.linkProgram(o.id),
        !r.getProgramParameter(o.id, r.LINK_STATUS))
            throw new Error("link error: " + r.getProgramInfoLog(o.id));
        o.uniforms = {},
        o.locations = {},
        r.useProgram(o.id),
        r.enableVertexAttribArray(0);
        for (var s, a, l = /uniform (\w+) (\w+)/g, c = t + e; null != (s = l.exec(c)); )
            a = s[2],
            o.locations[a] = r.getUniformLocation(o.id, a);
        return o
    }
    function i(t, e) {
        r.activeTexture(r.TEXTURE0 + (e || 0)),
        r.bindTexture(r.TEXTURE_2D, t)
    }
    function o(t) {
        var e = /url\(["']?([^"']*)["']?\)/.exec(t);
        return null == e ? null : e[1]
    }
    var r, s = t(window), a = function() {
        function t(t, e) {
            var i = "OES_texture_" + t
              , o = i + "_linear"
              , r = o in n
              , s = [i];
            return r && s.push(o),
            {
                type: e,
                linearSupport: r,
                extensions: s
            }
        }
        var e = document.createElement("canvas");
        if (!(r = e.getContext("webgl") || e.getContext("experimental-webgl")))
            return null;
        var n = {};
        if (["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear"].forEach(function(t) {
            var e = r.getExtension(t);
            e && (n[t] = e)
        }),
        !n.OES_texture_float)
            return null;
        var i = [];
        i.push(t("float", r.FLOAT)),
        n.OES_texture_half_float && i.push(t("half_float", n.OES_texture_half_float.HALF_FLOAT_OES));
        var o = r.createTexture()
          , s = r.createFramebuffer();
        r.bindFramebuffer(r.FRAMEBUFFER, s),
        r.bindTexture(r.TEXTURE_2D, o),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
        for (var a = null, l = 0; l < i.length; l++)
            if (r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, 32, 32, 0, r.RGBA, i[l].type, null),
            r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, o, 0),
            r.checkFramebufferStatus(r.FRAMEBUFFER) === r.FRAMEBUFFER_COMPLETE) {
                a = i[l];
                break
            }
        return a
    }(), l = function(t, e) {
        try {
            return new ImageData(t,e)
        } catch (n) {
            return document.createElement("canvas").getContext("2d").createImageData(t, e)
        }
    }(32, 32);
    t("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");
    var c = function(e, n) {
        var i = this;
        this.$el = t(e),
        this.interactive = n.interactive,
        this.resolution = n.resolution,
        this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]),
        this.perturbance = n.perturbance,
        this.dropRadius = n.dropRadius,
        this.crossOrigin = n.crossOrigin,
        this.imageUrl = n.imageUrl;
        var o = document.createElement("canvas");
        o.width = this.$el.innerWidth(),
        o.height = this.$el.innerHeight(),
        this.canvas = o,
        this.$canvas = t(o),
        this.$canvas.css({
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
        }),
        this.$el.addClass("jquery-ripples").append(o),
        this.context = r = o.getContext("webgl") || o.getContext("experimental-webgl"),
        a.extensions.forEach(function(t) {
            r.getExtension(t)
        }),
        t(window).on("resize", function() {
            var t = i.$el.innerWidth()
              , e = i.$el.innerHeight();
            t == i.canvas.width && e == i.canvas.height || (o.width = t,
            o.height = e)
        }),
        this.textures = [],
        this.framebuffers = [],
        this.bufferWriteIndex = 0,
        this.bufferReadIndex = 1;
        for (var s = 0; s < 2; s++) {
            var l = r.createTexture()
              , c = r.createFramebuffer();
            r.bindFramebuffer(r.FRAMEBUFFER, c),
            c.width = this.resolution,
            c.height = this.resolution,
            r.bindTexture(r.TEXTURE_2D, l),
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, a.linearSupport ? r.LINEAR : r.NEAREST),
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, a.linearSupport ? r.LINEAR : r.NEAREST),
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
            r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, this.resolution, this.resolution, 0, r.RGBA, a.type, null),
            r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, l, 0),
            this.textures.push(l),
            this.framebuffers.push(c)
        }
        this.quad = r.createBuffer(),
        r.bindBuffer(r.ARRAY_BUFFER, this.quad),
        r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), r.STATIC_DRAW),
        this.initShaders(),
        this.initTexture(),
        this.setTransparentTexture(),
        this.loadImage(),
        r.clearColor(0, 0, 0, 0),
        r.blendFunc(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA),
        this.visible = !0,
        this.running = !0,
        this.inited = !0,
        this.setupPointerEvents(),
        requestAnimationFrame(function t() {
            i.step(),
            requestAnimationFrame(t)
        })
    };
    c.DEFAULTS = {
        imageUrl: null,
        resolution: 256,
        dropRadius: 20,
        perturbance: .03,
        interactive: !0,
        crossOrigin: ""
    },
    c.prototype = {
        setupPointerEvents: function() {
            function t(t, n) {
                e.visible && e.running && e.interactive && e.dropAtPointer(t, e.dropRadius * (n ? 1.5 : 1), n ? .14 : .01)
            }
            var e = this;
            this.$el.on("mousemove.ripples", function(e) {
                t(e)
            }).on("touchmove.ripples, touchstart.ripples", function(e) {
                for (var n = e.originalEvent.changedTouches, i = 0; i < n.length; i++)
                    t(n[i])
            }).on("mousedown.ripples", function(e) {
                t(e, !0)
            })
        },
        loadImage: function() {
            var t = this;
            r = this.context;
            var e = this.imageUrl || o(this.originalCssBackgroundImage) || o(this.$el.css("backgroundImage"));
            if (e != this.imageSource) {
                if (this.imageSource = e,
                !this.imageSource)
                    return void this.setTransparentTexture();
                var n = new Image;
                n.onload = function() {
                    function e(t) {
                        return 0 == (t & t - 1)
                    }
                    r = t.context;
                    var i = e(n.width) && e(n.height) ? r.REPEAT : r.CLAMP_TO_EDGE;
                    r.bindTexture(r.TEXTURE_2D, t.backgroundTexture),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, i),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, i),
                    r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, n),
                    t.backgroundWidth = n.width,
                    t.backgroundHeight = n.height,
                    t.hideCssBackground()
                }
                ,
                n.onerror = function() {
                    r = t.context,
                    t.setTransparentTexture()
                }
                ,
                n.crossOrigin = function(t) {
                    return t.match(/^data:/)
                }(this.imageSource) ? null : this.crossOrigin,
                n.src = this.imageSource
            }
        },
        step: function() {
            r = this.context,
            this.visible && (this.computeTextureBoundaries(),
            this.running && this.update(),
            this.render())
        },
        drawQuad: function() {
            r.bindBuffer(r.ARRAY_BUFFER, this.quad),
            r.vertexAttribPointer(0, 2, r.FLOAT, !1, 0, 0),
            r.drawArrays(r.TRIANGLE_FAN, 0, 4)
        },
        render: function() {
            r.bindFramebuffer(r.FRAMEBUFFER, null),
            r.viewport(0, 0, this.canvas.width, this.canvas.height),
            r.enable(r.BLEND),
            r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
            r.useProgram(this.renderProgram.id),
            i(this.backgroundTexture, 0),
            i(this.textures[0], 1),
            r.uniform1f(this.renderProgram.locations.perturbance, this.perturbance),
            r.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft),
            r.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight),
            r.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio),
            r.uniform1i(this.renderProgram.locations.samplerBackground, 0),
            r.uniform1i(this.renderProgram.locations.samplerRipples, 1),
            this.drawQuad(),
            r.disable(r.BLEND)
        },
        update: function() {
            r.viewport(0, 0, this.resolution, this.resolution),
            r.bindFramebuffer(r.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]),
            i(this.textures[this.bufferReadIndex]),
            r.useProgram(this.updateProgram.id),
            this.drawQuad(),
            this.swapBufferIndices()
        },
        swapBufferIndices: function() {
            this.bufferWriteIndex = 1 - this.bufferWriteIndex,
            this.bufferReadIndex = 1 - this.bufferReadIndex
        },
        computeTextureBoundaries: function() {
            var t, n = this.$el.css("background-size"), i = this.$el.css("background-attachment"), o = function(t) {
                var e = t.split(" ");
                if (1 !== e.length)
                    return e.map(function(e) {
                        switch (t) {
                        case "center":
                            return "50%";
                        case "top":
                        case "left":
                            return "0";
                        case "right":
                        case "bottom":
                            return "100%";
                        default:
                            return e
                        }
                    });
                switch (t) {
                case "center":
                    return ["50%", "50%"];
                case "top":
                    return ["50%", "0"];
                case "bottom":
                    return ["50%", "100%"];
                case "left":
                    return ["0", "50%"];
                case "right":
                    return ["100%", "50%"];
                default:
                    return [t, "50%"]
                }
            }(this.$el.css("background-position"));
            if ("fixed" == i ? ((t = {
                left: window.pageXOffset,
                top: window.pageYOffset
            }).width = s.width(),
            t.height = s.height()) : ((t = this.$el.offset()).width = this.$el.innerWidth(),
            t.height = this.$el.innerHeight()),
            "cover" == n)
                var r = Math.max(t.width / this.backgroundWidth, t.height / this.backgroundHeight)
                  , a = this.backgroundWidth * r
                  , l = this.backgroundHeight * r;
            else if ("contain" == n)
                r = Math.min(t.width / this.backgroundWidth, t.height / this.backgroundHeight),
                a = this.backgroundWidth * r,
                l = this.backgroundHeight * r;
            else {
                a = (n = n.split(" "))[0] || "",
                l = n[1] || a;
                e(a) ? a = t.width * parseFloat(a) / 100 : "auto" != a && (a = parseFloat(a)),
                e(l) ? l = t.height * parseFloat(l) / 100 : "auto" != l && (l = parseFloat(l)),
                "auto" == a && "auto" == l ? (a = this.backgroundWidth,
                l = this.backgroundHeight) : ("auto" == a && (a = this.backgroundWidth * (l / this.backgroundHeight)),
                "auto" == l && (l = this.backgroundHeight * (a / this.backgroundWidth)))
            }
            var c = o[0]
              , u = o[1];
            c = e(c) ? t.left + (t.width - a) * parseFloat(c) / 100 : t.left + parseFloat(c),
            u = e(u) ? t.top + (t.height - l) * parseFloat(u) / 100 : t.top + parseFloat(u);
            var d = this.$el.offset();
            this.renderProgram.uniforms.topLeft = new Float32Array([(d.left - c) / a, (d.top - u) / l]),
            this.renderProgram.uniforms.bottomRight = new Float32Array([this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / a, this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / l]);
            var p = Math.max(this.canvas.width, this.canvas.height);
            this.renderProgram.uniforms.containerRatio = new Float32Array([this.canvas.width / p, this.canvas.height / p])
        },
        initShaders: function() {
            var t = ["attribute vec2 vertex;", "varying vec2 coord;", "void main() {", "coord = vertex * 0.5 + 0.5;", "gl_Position = vec4(vertex, 0.0, 1.0);", "}"].join("\n");
            this.dropProgram = n(t, ["precision highp float;", "const float PI = 3.141592653589793;", "uniform sampler2D texture;", "uniform vec2 center;", "uniform float radius;", "uniform float strength;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);", "drop = 0.5 - cos(drop * PI) * 0.5;", "info.r += drop * strength;", "gl_FragColor = info;", "}"].join("\n")),
            this.updateProgram = n(t, ["precision highp float;", "uniform sampler2D texture;", "uniform vec2 delta;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "vec2 dx = vec2(delta.x, 0.0);", "vec2 dy = vec2(0.0, delta.y);", "float average = (", "texture2D(texture, coord - dx).r +", "texture2D(texture, coord - dy).r +", "texture2D(texture, coord + dx).r +", "texture2D(texture, coord + dy).r", ") * 0.25;", "info.g += (average - info.r) * 2.0;", "info.g *= 0.995;", "info.r += info.g;", "gl_FragColor = info;", "}"].join("\n")),
            r.uniform2fv(this.updateProgram.locations.delta, this.textureDelta),
            this.renderProgram = n(["precision highp float;", "attribute vec2 vertex;", "uniform vec2 topLeft;", "uniform vec2 bottomRight;", "uniform vec2 containerRatio;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);", "backgroundCoord.y = 1.0 - backgroundCoord.y;", "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;", "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);", "}"].join("\n"), ["precision highp float;", "uniform sampler2D samplerBackground;", "uniform sampler2D samplerRipples;", "uniform vec2 delta;", "uniform float perturbance;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "float height = texture2D(samplerRipples, ripplesCoord).r;", "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;", "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;", "vec3 dx = vec3(delta.x, heightX - height, 0.0);", "vec3 dy = vec3(0.0, heightY - height, delta.y);", "vec2 offset = -normalize(cross(dy, dx)).xz;", "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);", "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;", "}"].join("\n")),
            r.uniform2fv(this.renderProgram.locations.delta, this.textureDelta)
        },
        initTexture: function() {
            this.backgroundTexture = r.createTexture(),
            r.bindTexture(r.TEXTURE_2D, this.backgroundTexture),
            r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, 1),
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR)
        },
        setTransparentTexture: function() {
            r.bindTexture(r.TEXTURE_2D, this.backgroundTexture),
            r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, l)
        },
        hideCssBackground: function() {
            var t = this.$el[0].style.backgroundImage;
            "none" != t && (this.originalInlineCss = t,
            this.originalCssBackgroundImage = this.$el.css("backgroundImage"),
            this.$el.css("backgroundImage", "none"))
        },
        restoreCssBackground: function() {
            this.$el.css("backgroundImage", this.originalInlineCss || "")
        },
        dropAtPointer: function(t, e, n) {
            var i = parseInt(this.$el.css("border-left-width")) || 0
              , o = parseInt(this.$el.css("border-top-width")) || 0;
            this.drop(t.pageX - this.$el.offset().left - i, t.pageY - this.$el.offset().top - o, e, n)
        },
        drop: function(t, e, n, o) {
            r = this.context;
            var s = this.$el.innerWidth()
              , a = this.$el.innerHeight()
              , l = Math.max(s, a);
            n /= l;
            var c = new Float32Array([(2 * t - s) / l, (a - 2 * e) / l]);
            r.viewport(0, 0, this.resolution, this.resolution),
            r.bindFramebuffer(r.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]),
            i(this.textures[this.bufferReadIndex]),
            r.useProgram(this.dropProgram.id),
            r.uniform2fv(this.dropProgram.locations.center, c),
            r.uniform1f(this.dropProgram.locations.radius, n),
            r.uniform1f(this.dropProgram.locations.strength, o),
            this.drawQuad(),
            this.swapBufferIndices()
        },
        destroy: function() {
            this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"),
            this.$canvas.remove(),
            this.restoreCssBackground()
        },
        show: function() {
            this.visible = !0,
            this.$canvas.show(),
            this.hideCssBackground()
        },
        hide: function() {
            this.visible = !1,
            this.$canvas.hide(),
            this.restoreCssBackground()
        },
        pause: function() {
            this.running = !1
        },
        play: function() {
            this.running = !0
        },
        set: function(t, e) {
            switch (t) {
            case "dropRadius":
            case "perturbance":
            case "interactive":
            case "crossOrigin":
                this[t] = e;
                break;
            case "imageUrl":
                this.imageUrl = e,
                this.loadImage()
            }
        }
    };
    var u = t.fn.ripples;
    t.fn.ripples = function(e) {
        if (!a)
            throw new Error("Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");
        var n = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
        return this.each(function() {
            var i = t(this)
              , o = i.data("ripples")
              , r = t.extend({}, c.DEFAULTS, i.data(), "object" == typeof e && e);
            (o || "string" != typeof e) && (o ? "string" == typeof e && c.prototype[e].apply(o, n) : i.data("ripples", o = new c(this,r)))
        })
    }
    ,
    t.fn.ripples.Constructor = c,
    t.fn.ripples.noConflict = function() {
        return t.fn.ripples = u,
        this
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        t(e, window, document)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window, document) : t(jQuery, window, document)
}(function(t, e, n, i) {
    "use strict";
    var o = "intlTelInput"
      , r = 1
      , s = {
        allowDropdown: !0,
        autoHideDialCode: !0,
        autoPlaceholder: "polite",
        customPlaceholder: null,
        dropdownContainer: "",
        excludeCountries: [],
        formatOnDisplay: !0,
        geoIpLookup: null,
        hiddenInput: "",
        initialCountry: "",
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: ["us", "gb"],
        separateDialCode: !1,
        utilsScript: ""
    }
      , a = 38
      , l = 40
      , c = 13
      , u = 27
      , d = 43
      , p = 65
      , h = 90
      , f = 32
      , g = 9
      , m = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
    function v(e, n) {
        this.telInput = t(e),
        this.options = t.extend({}, s, n),
        this.ns = "." + o + r++,
        this.isGoodBrowser = Boolean(e.setSelectionRange),
        this.hadInitialPlaceholder = Boolean(t(e).attr("placeholder"))
    }
    t(e).on("load", function() {
        t.fn[o].windowLoaded = !0
    }),
    v.prototype = {
        _init: function() {
            return this.options.nationalMode && (this.options.autoHideDialCode = !1),
            this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1),
            this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            this.isMobile && (t("body").addClass("iti-mobile"),
            this.options.dropdownContainer || (this.options.dropdownContainer = "body")),
            this.autoCountryDeferred = new t.Deferred,
            this.utilsScriptDeferred = new t.Deferred,
            this.selectedCountryData = {},
            this._processCountryData(),
            this._generateMarkup(),
            this._setInitialState(),
            this._initListeners(),
            this._initRequests(),
            [this.autoCountryDeferred, this.utilsScriptDeferred]
        },
        _processCountryData: function() {
            this._processAllCountries(),
            this._processCountryCodes(),
            this._processPreferredCountries()
        },
        _addCountryCode: function(t, e, n) {
            e in this.countryCodes || (this.countryCodes[e] = []);
            var i = n || 0;
            this.countryCodes[e][i] = t
        },
        _processAllCountries: function() {
            if (this.options.onlyCountries.length) {
                var t = this.options.onlyCountries.map(function(t) {
                    return t.toLowerCase()
                });
                this.countries = y.filter(function(e) {
                    return t.indexOf(e.iso2) > -1
                })
            } else if (this.options.excludeCountries.length) {
                var e = this.options.excludeCountries.map(function(t) {
                    return t.toLowerCase()
                });
                this.countries = y.filter(function(t) {
                    return -1 === e.indexOf(t.iso2)
                })
            } else
                this.countries = y
        },
        _processCountryCodes: function() {
            this.countryCodes = {};
            for (var t = 0; t < this.countries.length; t++) {
                var e = this.countries[t];
                if (this._addCountryCode(e.iso2, e.dialCode, e.priority),
                e.areaCodes)
                    for (var n = 0; n < e.areaCodes.length; n++)
                        this._addCountryCode(e.iso2, e.dialCode + e.areaCodes[n])
            }
        },
        _processPreferredCountries: function() {
            this.preferredCountries = [];
            for (var t = 0; t < this.options.preferredCountries.length; t++) {
                var e = this.options.preferredCountries[t].toLowerCase()
                  , n = this._getCountryData(e, !1, !0);
                n && this.preferredCountries.push(n)
            }
        },
        _generateMarkup: function() {
            this.telInput.attr("autocomplete", "off");
            var e = "intl-tel-input";
            this.options.allowDropdown && (e += " allow-dropdown"),
            this.options.separateDialCode && (e += " separate-dial-code"),
            this.telInput.wrap(t("<div>", {
                class: e
            })),
            this.flagsContainer = t("<div>", {
                class: "flag-container"
            }).insertBefore(this.telInput);
            var n = t("<div>", {
                class: "selected-flag"
            });
            n.appendTo(this.flagsContainer),
            this.selectedFlagInner = t("<div>", {
                class: "iti-flag"
            }).appendTo(n),
            this.options.separateDialCode && (this.selectedDialCode = t("<div>", {
                class: "selected-dial-code"
            }).appendTo(n)),
            this.options.allowDropdown ? (n.attr("tabindex", "0"),
            t("<div>", {
                class: "iti-arrow"
            }).appendTo(n),
            this.countryList = t("<ul>", {
                class: "country-list hide"
            }),
            this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"),
            t("<li>", {
                class: "divider"
            }).appendTo(this.countryList)),
            this._appendListItems(this.countries, ""),
            this.countryListItems = this.countryList.children(".country"),
            this.options.dropdownContainer ? this.dropdown = t("<div>", {
                class: "intl-tel-input iti-container"
            }).append(this.countryList) : this.countryList.appendTo(this.flagsContainer)) : this.countryListItems = t(),
            this.options.hiddenInput && (this.hiddenInput = t("<input>", {
                type: "hidden",
                name: this.options.hiddenInput
            }).insertBefore(this.telInput))
        },
        _appendListItems: function(t, e) {
            for (var n = "", i = 0; i < t.length; i++) {
                var o = t[i];
                n += "<li class='country " + e + "' data-dial-code='" + o.dialCode + "' data-country-code='" + o.iso2 + "'>",
                n += "<div class='flag-box'><div class='iti-flag " + o.iso2 + "'></div></div>",
                n += "<span class='country-name'>" + o.name + "</span>",
                n += "<span class='dial-code'>+" + o.dialCode + "</span>",
                n += "</li>"
            }
            this.countryList.append(n)
        },
        _setInitialState: function() {
            var t = this.telInput.val();
            this._getDialCode(t) && (!this._isRegionlessNanp(t) || this.options.nationalMode && !this.options.initialCountry) ? this._updateFlagFromNumber(t) : "auto" !== this.options.initialCountry && (this.options.initialCountry ? this._setFlag(this.options.initialCountry.toLowerCase()) : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2,
            t || this._setFlag(this.defaultCountry)),
            t || this.options.nationalMode || this.options.autoHideDialCode || this.options.separateDialCode || this.telInput.val("+" + this.selectedCountryData.dialCode)),
            t && this._updateValFromNumber(t)
        },
        _initListeners: function() {
            this._initKeyListeners(),
            this.options.autoHideDialCode && this._initFocusListeners(),
            this.options.allowDropdown && this._initDropdownListeners(),
            this.hiddenInput && this._initHiddenInputListener()
        },
        _initHiddenInputListener: function() {
            var t = this
              , e = this.telInput.closest("form");
            e.length && e.submit(function() {
                t.hiddenInput.val(t.getNumber())
            })
        },
        _initDropdownListeners: function() {
            var t = this
              , e = this.telInput.closest("label");
            e.length && e.on("click" + this.ns, function(e) {
                t.countryList.hasClass("hide") ? t.telInput.focus() : e.preventDefault()
            }),
            this.selectedFlagInner.parent().on("click" + this.ns, function(e) {
                !t.countryList.hasClass("hide") || t.telInput.prop("disabled") || t.telInput.prop("readonly") || t._showDropdown()
            }),
            this.flagsContainer.on("keydown" + t.ns, function(e) {
                !t.countryList.hasClass("hide") || e.which != a && e.which != l && e.which != f && e.which != c || (e.preventDefault(),
                e.stopPropagation(),
                t._showDropdown()),
                e.which == g && t._closeDropdown()
            })
        },
        _initRequests: function() {
            var n = this;
            this.options.utilsScript ? t.fn[o].windowLoaded ? t.fn[o].loadUtils(this.options.utilsScript, this.utilsScriptDeferred) : t(e).on("load", function() {
                t.fn[o].loadUtils(n.options.utilsScript, n.utilsScriptDeferred)
            }) : this.utilsScriptDeferred.resolve(),
            "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.autoCountryDeferred.resolve()
        },
        _loadAutoCountry: function() {
            t.fn[o].autoCountry ? this.handleAutoCountry() : t.fn[o].startedLoadingAutoCountry || (t.fn[o].startedLoadingAutoCountry = !0,
            "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(e) {
                t.fn[o].autoCountry = e.toLowerCase(),
                setTimeout(function() {
                    t(".intl-tel-input input").intlTelInput("handleAutoCountry")
                })
            }))
        },
        _initKeyListeners: function() {
            var t = this;
            this.telInput.on("keyup" + this.ns, function() {
                t._updateFlagFromNumber(t.telInput.val()) && t._triggerCountryChange()
            }),
            this.telInput.on("cut" + this.ns + " paste" + this.ns, function() {
                setTimeout(function() {
                    t._updateFlagFromNumber(t.telInput.val()) && t._triggerCountryChange()
                })
            })
        },
        _cap: function(t) {
            var e = this.telInput.attr("maxlength");
            return e && t.length > e ? t.substr(0, e) : t
        },
        _initFocusListeners: function() {
            var e = this;
            this.telInput.on("mousedown" + this.ns, function(t) {
                e.telInput.is(":focus") || e.telInput.val() || (t.preventDefault(),
                e.telInput.focus())
            }),
            this.telInput.on("focus" + this.ns, function(t) {
                e.telInput.val() || e.telInput.prop("readonly") || !e.selectedCountryData.dialCode || (e.telInput.val("+" + e.selectedCountryData.dialCode),
                e.telInput.one("keypress.plus" + e.ns, function(t) {
                    t.which == d && e.telInput.val("")
                }),
                setTimeout(function() {
                    var t = e.telInput[0];
                    if (e.isGoodBrowser) {
                        var n = e.telInput.val().length;
                        t.setSelectionRange(n, n)
                    }
                }))
            });
            var n = this.telInput.prop("form");
            n && t(n).on("submit" + this.ns, function() {
                e._removeEmptyDialCode()
            }),
            this.telInput.on("blur" + this.ns, function() {
                e._removeEmptyDialCode()
            })
        },
        _removeEmptyDialCode: function() {
            var t = this.telInput.val();
            if ("+" == t.charAt(0)) {
                var e = this._getNumeric(t);
                e && this.selectedCountryData.dialCode != e || this.telInput.val("")
            }
            this.telInput.off("keypress.plus" + this.ns)
        },
        _getNumeric: function(t) {
            return t.replace(/\D/g, "")
        },
        _showDropdown: function() {
            this._setDropdownPosition();
            var t = this.countryList.children(".active");
            t.length && (this._highlightListItem(t),
            this._scrollTo(t)),
            this._bindDropdownListeners(),
            this.selectedFlagInner.children(".iti-arrow").addClass("up"),
            this.telInput.trigger("open:countrydropdown")
        },
        _setDropdownPosition: function() {
            var n = this;
            if (this.options.dropdownContainer && this.dropdown.appendTo(this.options.dropdownContainer),
            this.dropdownHeight = this.countryList.removeClass("hide").outerHeight(),
            !this.isMobile) {
                var i = this.telInput.offset()
                  , o = i.top
                  , r = t(e).scrollTop()
                  , s = o + this.telInput.outerHeight() + this.dropdownHeight < r + t(e).height()
                  , a = o - this.dropdownHeight > r;
                if (this.countryList.toggleClass("dropup", !s && a),
                this.options.dropdownContainer) {
                    var l = !s && a ? 0 : this.telInput.innerHeight();
                    this.dropdown.css({
                        top: o + l,
                        left: i.left
                    }),
                    t(e).on("scroll" + this.ns, function() {
                        n._closeDropdown()
                    })
                }
            }
        },
        _bindDropdownListeners: function() {
            var e = this;
            this.countryList.on("mouseover" + this.ns, ".country", function(n) {
                e._highlightListItem(t(this))
            }),
            this.countryList.on("click" + this.ns, ".country", function(n) {
                e._selectListItem(t(this))
            });
            var i = !0;
            t("html").on("click" + this.ns, function(t) {
                i || e._closeDropdown(),
                i = !1
            });
            var o = ""
              , r = null;
            t(n).on("keydown" + this.ns, function(t) {
                t.preventDefault(),
                t.which == a || t.which == l ? e._handleUpDownKey(t.which) : t.which == c ? e._handleEnterKey() : t.which == u ? e._closeDropdown() : (t.which >= p && t.which <= h || t.which == f) && (r && clearTimeout(r),
                o += String.fromCharCode(t.which),
                e._searchForCountry(o),
                r = setTimeout(function() {
                    o = ""
                }, 1e3))
            })
        },
        _handleUpDownKey: function(t) {
            var e = this.countryList.children(".highlight").first()
              , n = t == a ? e.prev() : e.next();
            n.length && (n.hasClass("divider") && (n = t == a ? n.prev() : n.next()),
            this._highlightListItem(n),
            this._scrollTo(n))
        },
        _handleEnterKey: function() {
            var t = this.countryList.children(".highlight").first();
            t.length && this._selectListItem(t)
        },
        _searchForCountry: function(t) {
            for (var e = 0; e < this.countries.length; e++)
                if (this._startsWith(this.countries[e].name, t)) {
                    var n = this.countryList.children("[data-country-code=" + this.countries[e].iso2 + "]").not(".preferred");
                    this._highlightListItem(n),
                    this._scrollTo(n, !0);
                    break
                }
        },
        _startsWith: function(t, e) {
            return t.substr(0, e.length).toUpperCase() == e
        },
        _updateValFromNumber: function(t) {
            if (this.options.formatOnDisplay && e.intlTelInputUtils && this.selectedCountryData) {
                var n = this.options.separateDialCode || !this.options.nationalMode && "+" == t.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL;
                t = intlTelInputUtils.formatNumber(t, this.selectedCountryData.iso2, n)
            }
            t = this._beforeSetNumber(t),
            this.telInput.val(t)
        },
        _updateFlagFromNumber: function(e) {
            e && this.options.nationalMode && "1" == this.selectedCountryData.dialCode && "+" != e.charAt(0) && ("1" != e.charAt(0) && (e = "1" + e),
            e = "+" + e);
            var n = this._getDialCode(e)
              , i = null
              , o = this._getNumeric(e);
            if (n) {
                var r = this.countryCodes[this._getNumeric(n)]
                  , s = t.inArray(this.selectedCountryData.iso2, r) > -1
                  , a = "+1" == n && o.length >= 4;
                if ((!("1" == this.selectedCountryData.dialCode) || !this._isRegionlessNanp(o)) && (!s || a))
                    for (var l = 0; l < r.length; l++)
                        if (r[l]) {
                            i = r[l];
                            break
                        }
            } else
                "+" == e.charAt(0) && o.length ? i = "" : e && "+" != e || (i = this.defaultCountry);
            return null !== i && this._setFlag(i)
        },
        _isRegionlessNanp: function(e) {
            var n = this._getNumeric(e);
            if ("1" == n.charAt(0)) {
                var i = n.substr(1, 3);
                return t.inArray(i, m) > -1
            }
            return !1
        },
        _highlightListItem: function(t) {
            this.countryListItems.removeClass("highlight"),
            t.addClass("highlight")
        },
        _getCountryData: function(t, e, n) {
            for (var i = e ? y : this.countries, o = 0; o < i.length; o++)
                if (i[o].iso2 == t)
                    return i[o];
            if (n)
                return null;
            throw new Error("No country data for '" + t + "'")
        },
        _setFlag: function(t) {
            var e = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {},
            this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2),
            this.selectedFlagInner.attr("class", "iti-flag " + t);
            var n = t ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown";
            if (this.selectedFlagInner.parent().attr("title", n),
            this.options.separateDialCode) {
                var i = this.selectedCountryData.dialCode ? "+" + this.selectedCountryData.dialCode : ""
                  , o = this.telInput.parent();
                e.dialCode && o.removeClass("iti-sdc-" + (e.dialCode.length + 1)),
                i && o.addClass("iti-sdc-" + i.length),
                this.selectedDialCode.text(i)
            }
            return this._updatePlaceholder(),
            this.countryListItems.removeClass("active"),
            t && this.countryListItems.find(".iti-flag." + t).first().closest(".country").addClass("active"),
            e.iso2 !== t
        },
        _updatePlaceholder: function() {
            var t = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && (!0 === this.options.autoPlaceholder || "polite" === this.options.autoPlaceholder);
            if (e.intlTelInputUtils && t) {
                var n = intlTelInputUtils.numberType[this.options.placeholderNumberType]
                  , i = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, n) : "";
                i = this._beforeSetNumber(i),
                "function" == typeof this.options.customPlaceholder && (i = this.options.customPlaceholder(i, this.selectedCountryData)),
                this.telInput.attr("placeholder", i)
            }
        },
        _selectListItem: function(t) {
            var e = this._setFlag(t.attr("data-country-code"));
            if (this._closeDropdown(),
            this._updateDialCode(t.attr("data-dial-code"), !0),
            this.telInput.focus(),
            this.isGoodBrowser) {
                var n = this.telInput.val().length;
                this.telInput[0].setSelectionRange(n, n)
            }
            e && this._triggerCountryChange()
        },
        _closeDropdown: function() {
            this.countryList.addClass("hide"),
            this.selectedFlagInner.children(".iti-arrow").removeClass("up"),
            t(n).off(this.ns),
            t("html").off(this.ns),
            this.countryList.off(this.ns),
            this.options.dropdownContainer && (this.isMobile || t(e).off("scroll" + this.ns),
            this.dropdown.detach()),
            this.telInput.trigger("close:countrydropdown")
        },
        _scrollTo: function(t, e) {
            var n = this.countryList
              , i = n.height()
              , o = n.offset().top
              , r = o + i
              , s = t.outerHeight()
              , a = t.offset().top
              , l = a + s
              , c = a - o + n.scrollTop()
              , u = i / 2 - s / 2;
            if (a < o)
                e && (c -= u),
                n.scrollTop(c);
            else if (l > r) {
                e && (c += u);
                var d = i - s;
                n.scrollTop(c - d)
            }
        },
        _updateDialCode: function(t, e) {
            var n, i = this.telInput.val();
            if (t = "+" + t,
            "+" == i.charAt(0)) {
                var o = this._getDialCode(i);
                n = o ? i.replace(o, t) : t
            } else {
                if (this.options.nationalMode || this.options.separateDialCode)
                    return;
                if (i)
                    n = t + i;
                else {
                    if (!e && this.options.autoHideDialCode)
                        return;
                    n = t
                }
            }
            this.telInput.val(n)
        },
        _getDialCode: function(e) {
            var n = "";
            if ("+" == e.charAt(0))
                for (var i = "", o = 0; o < e.length; o++) {
                    var r = e.charAt(o);
                    if (t.isNumeric(r) && (i += r,
                    this.countryCodes[i] && (n = e.substr(0, o + 1)),
                    4 == i.length))
                        break
                }
            return n
        },
        _getFullNumber: function() {
            var e = t.trim(this.telInput.val())
              , n = this.selectedCountryData.dialCode
              , i = this._getNumeric(e)
              , o = "1" == i.charAt(0) ? i : "1" + i;
            return (this.options.separateDialCode ? "+" + n : "+" != e.charAt(0) && "1" != e.charAt(0) && n && "1" == n.charAt(0) && 4 == n.length && n != o.substr(0, 4) ? n.substr(1) : "") + e
        },
        _beforeSetNumber: function(t) {
            if (this.options.separateDialCode) {
                var e = this._getDialCode(t);
                if (e) {
                    null !== this.selectedCountryData.areaCodes && (e = "+" + this.selectedCountryData.dialCode);
                    var n = " " === t[e.length] || "-" === t[e.length] ? e.length + 1 : e.length;
                    t = t.substr(n)
                }
            }
            return this._cap(t)
        },
        _triggerCountryChange: function() {
            this.telInput.trigger("countrychange", this.selectedCountryData)
        },
        handleAutoCountry: function() {
            "auto" === this.options.initialCountry && (this.defaultCountry = t.fn[o].autoCountry,
            this.telInput.val() || this.setCountry(this.defaultCountry),
            this.autoCountryDeferred.resolve())
        },
        handleUtils: function() {
            e.intlTelInputUtils && (this.telInput.val() && this._updateValFromNumber(this.telInput.val()),
            this._updatePlaceholder()),
            this.utilsScriptDeferred.resolve()
        },
        destroy: function() {
            if (this.allowDropdown && (this._closeDropdown(),
            this.selectedFlagInner.parent().off(this.ns),
            this.telInput.closest("label").off(this.ns)),
            this.options.autoHideDialCode) {
                var e = this.telInput.prop("form");
                e && t(e).off(this.ns)
            }
            this.telInput.off(this.ns),
            this.telInput.parent().before(this.telInput).remove()
        },
        getExtension: function() {
            return e.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
        },
        getNumber: function(t) {
            return e.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._getFullNumber(), this.selectedCountryData.iso2, t) : ""
        },
        getNumberType: function() {
            return e.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
        },
        getSelectedCountryData: function() {
            return this.selectedCountryData
        },
        getValidationError: function() {
            return e.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._getFullNumber(), this.selectedCountryData.iso2) : -99
        },
        isValidNumber: function() {
            var n = t.trim(this._getFullNumber())
              , i = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
            return e.intlTelInputUtils ? intlTelInputUtils.isValidNumber(n, i) : null
        },
        setCountry: function(t) {
            t = t.toLowerCase(),
            this.selectedFlagInner.hasClass(t) || (this._setFlag(t),
            this._updateDialCode(this.selectedCountryData.dialCode, !1),
            this._triggerCountryChange())
        },
        setNumber: function(t) {
            var e = this._updateFlagFromNumber(t);
            this._updateValFromNumber(t),
            e && this._triggerCountryChange()
        },
        setPlaceholderNumberType: function(t) {
            this.options.placeholderNumberType = t,
            this._updatePlaceholder()
        }
    },
    t.fn[o] = function(e) {
        var n, r = arguments;
        if (e === i || "object" == typeof e) {
            var s = [];
            return this.each(function() {
                if (!t.data(this, "plugin_" + o)) {
                    var n = new v(this,e)
                      , i = n._init();
                    s.push(i[0]),
                    s.push(i[1]),
                    t.data(this, "plugin_" + o, n)
                }
            }),
            t.when.apply(null, s)
        }
        if ("string" == typeof e && "_" !== e[0])
            return this.each(function() {
                var i = t.data(this, "plugin_" + o);
                i instanceof v && "function" == typeof i[e] && (n = i[e].apply(i, Array.prototype.slice.call(r, 1))),
                "destroy" === e && t.data(this, "plugin_" + o, null)
            }),
            n !== i ? n : this
    }
    ,
    t.fn[o].getCountryData = function() {
        return y
    }
    ,
    t.fn[o].loadUtils = function(e, n) {
        t.fn[o].loadedUtilsScript ? n && n.resolve() : (t.fn[o].loadedUtilsScript = !0,
        t.ajax({
            type: "GET",
            url: e,
            complete: function() {
                t(".intl-tel-input input").intlTelInput("handleUtils")
            },
            dataType: "script",
            cache: !0
        }))
    }
    ,
    t.fn[o].defaults = s,
    t.fn[o].version = "12.1.0";
    for (var y = [["Afghanistan", "af", "93"], ["Aland Islands", "ax", "358", 1], ["Albania ", "al", "355"], ["Algeria", "dz", "213"], ["American Samoa", "as", "1684"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia ", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria ", "at", "43"], ["Azerbaijan", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain", "bh", "973"], ["Bangladesh", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus", "by", "375"], ["Belgium", "be", "32"], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan ", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina ", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria ", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Cambodia ", "kh", "855"], ["Cameroon ", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic", "cf", "236"], ["Chad", "td", "235"], ["Chile", "cl", "56"], ["China", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros ", "km", "269"], ["Congo", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Cote d'Ivoire", "ci", "225"], ["Croatia", "hr", "385"], ["Cuba", "cu", "53"], ["Curacao", "cw", "599", 0], ["Cyprus", "cy", "357"], ["Czech Republic", "cz", "420"], ["Denmark", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic", "do", "1", 2, ["809", "829", "849"]], ["DR Congo", "cd", "243"], ["Ecuador", "ec", "593"], ["Egypt", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands", "fk", "500"], ["Faroe Islands", "fo", "298"], ["Fiji", "fj", "679"], ["Finland", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana ", "gf", "594"], ["French Polynesia", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia", "ge", "995"], ["Germany", "de", "49"], ["Ghana", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece", "gr", "30"], ["Greenland", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea", "gn", "224"], ["Guinea-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong", "hk", "852"], ["Hungary", "hu", "36"], ["Iceland", "is", "354"], ["India", "in", "91"], ["Indonesia", "id", "62"], ["Iran ", "ir", "98"], ["Iraq ", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel", "il", "972"], ["Italy", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan ", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan ", "jo", "962"], ["Kazakhstan", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait", "kw", "965"], ["Kyrgyzstan ", "kg", "996"], ["Laos", "la", "856"], ["Latvia", "lv", "371"], ["Lebanon", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau", "mo", "853"], ["Macedonia", "mk", "389"], ["Madagascar", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania", "mr", "222"], ["Mauritius", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia", "mn", "976"], ["Montenegro", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco", "ma", "212", 0], ["Mozambique", "mz", "258"], ["Myanmar", "mm", "95"], ["Namibia", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Netherlands", "nl", "31"], ["New Caledonia", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway", "no", "47", 0], ["Oman", "om", "968"], ["Pakistan ", "pk", "92"], ["Palau", "pw", "680"], ["Palestine", "ps", "970"], ["Panama", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Philippines", "ph", "63"], ["Poland ", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar", "qa", "974"], ["Reunion", "re", "262", 0], ["Romania ", "ro", "40"], ["Russia", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthelemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin", "mf", "590", 2], ["Saint Pierre and Miquelon", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["Sao Tome and Principe", "st", "239"], ["Saudi Arabia", "sa", "966"], ["Senegal", "sn", "221"], ["Serbia", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia", "sk", "421"], ["Slovenia", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia", "so", "252"], ["South Africa", "za", "27"], ["South Korea", "kr", "82"], ["South Sudan", "ss", "211"], ["Spain ", "es", "34"], ["Sri Lanka ", "lk", "94"], ["Sudan", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden", "se", "46"], ["Switzerland", "ch", "41"], ["Syria ", "sy", "963"], ["Taiwan", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia", "tn", "216"], ["Turkey", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine", "ua", "380"], ["United Arab Emirates", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Wallis and Futuna", "wf", "681"], ["Western Sahara", "eh", "212", 1], ["Yemen", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"]], b = 0; b < y.length; b++) {
        var w = y[b];
        y[b] = {
            name: w[0],
            iso2: w[1],
            dialCode: w[2],
            priority: w[3] || 0,
            areaCodes: w[4] || null
        }
    }
}),
function(t, e, n, i) {
    "use strict";
    function o(t, e) {
        var i, o, r, s = [], a = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(),
        e = e || {},
        t && t.data && (e = h(t.data.options, e)),
        i = e.$target || n(t.currentTarget).trigger("blur"),
        (r = n.fancybox.getInstance()) && r.$trigger && r.$trigger.is(i) || (e.selector ? s = n(e.selector) : (o = i.attr("data-fancybox") || "") ? s = (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]') : s = [i],
        (a = n(s).index(i)) < 0 && (a = 0),
        (r = n.fancybox.open(s, e, a)).$trigger = i))
    }
    if (t.console = t.console || {
        info: function(t) {}
    },
    n) {
        if (n.fn.fancybox)
            return void console.info("fancyBox already initialized");
        var r = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            preventCaptionOverlap: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {
                preload: !1
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                format: "",
                autoStart: !0
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 3e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            },
            wheel: "auto",
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function(t, e) {
                return "image" === t.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                preventCaptionOverlap: !1,
                idleTime: !1,
                clickContent: function(t, e) {
                    return "image" === t.type && "toggleControls"
                },
                clickSlide: function(t, e) {
                    return "image" === t.type ? "toggleControls" : "close"
                },
                dblclickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                dblclickSlide: function(t, e) {
                    return "image" === t.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schlie&szlig;en",
                    NEXT: "Weiter",
                    PREV: "Zur&uuml;ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Vergr&ouml;&szlig;ern"
                }
            }
        }
          , s = n(t)
          , a = n(e)
          , l = 0
          , c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
          , u = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        }
          , d = function() {
            var t, n = e.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in i)
                if (void 0 !== n.style[t])
                    return i[t];
            return "transitionend"
        }()
          , p = function(t) {
            return t && t.length && t[0].offsetHeight
        }
          , h = function(t, e) {
            var i = n.extend(!0, {}, t, e);
            return n.each(e, function(t, e) {
                n.isArray(e) && (i[t] = e)
            }),
            i
        }
          , f = function(t) {
            var i, o;
            return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"),
            i = {
                x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                y: t.getBoundingClientRect().top + t.offsetHeight / 2
            },
            o = e.elementFromPoint(i.x, i.y) === t,
            n(".fancybox-container").css("pointer-events", ""),
            o)
        }
          , g = function(t, e, i) {
            var o = this;
            o.opts = h({
                index: i
            }, n.fancybox.defaults),
            n.isPlainObject(e) && (o.opts = h(o.opts, e)),
            n.fancybox.isMobile && (o.opts = h(o.opts, o.opts.mobile)),
            o.id = o.opts.id || ++l,
            o.currIndex = parseInt(o.opts.index, 10) || 0,
            o.prevIndex = null,
            o.prevPos = null,
            o.currPos = 0,
            o.firstRun = !0,
            o.group = [],
            o.slides = {},
            o.addContent(t),
            o.group.length && o.init()
        };
        n.extend(g.prototype, {
            init: function() {
                var i, o, r = this, s = r.group[r.currIndex].opts;
                s.closeExisting && n.fancybox.close(!0),
                n("body").addClass("fancybox-active"),
                !n.fancybox.getInstance() && !1 !== s.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                n("body").addClass("compensate-for-scrollbar")),
                o = "",
                n.each(s.buttons, function(t, e) {
                    o += s.btnTpl[e] || ""
                }),
                i = n(r.translate(r, s.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(s.baseClass).data("FancyBox", r).appendTo(s.parentEl),
                r.$refs = {
                    container: i
                },
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                    r.$refs[t] = i.find(".fancybox-" + t)
                }),
                r.trigger("onInit"),
                r.activate(),
                r.jumpTo(r.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    return void 0 === n[e] ? t : n[e]
                })
            },
            addContent: function(t) {
                var e, i = this, o = n.makeArray(t);
                n.each(o, function(t, e) {
                    var o, r, s, a, l, c = {}, u = {};
                    n.isPlainObject(e) ? (c = e,
                    u = e.opts || e) : "object" === n.type(e) && n(e).length ? (u = (o = n(e)).data() || {},
                    (u = n.extend(!0, {}, u, u.options)).$orig = o,
                    c.src = i.opts.src || u.src || o.attr("href"),
                    c.type || c.src || (c.type = "inline",
                    c.src = e)) : c = {
                        type: "html",
                        src: e + ""
                    },
                    c.opts = n.extend(!0, {}, i.opts, u),
                    n.isArray(u.buttons) && (c.opts.buttons = u.buttons),
                    n.fancybox.isMobile && c.opts.mobile && (c.opts = h(c.opts, c.opts.mobile)),
                    r = c.type || c.opts.type,
                    a = c.src || "",
                    !r && a && ((s = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (r = "video",
                    c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (r = "iframe",
                    c = n.extend(!0, c, {
                        contentType: "pdf",
                        opts: {
                            iframe: {
                                preload: !1
                            }
                        }
                    })) : "#" === a.charAt(0) && (r = "inline")),
                    r ? c.type = r : i.trigger("objectNeedsType", c),
                    c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type),
                    c.index = i.group.length,
                    "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1),
                    "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn),
                    c.$thumb = c.opts.$thumb || null,
                    c.opts.$trigger && c.index === i.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"),
                    c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
                    c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")),
                    c.$thumb && !c.$thumb.length && (c.$thumb = null),
                    c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null),
                    "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [i, c])),
                    "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(e, [i, c])),
                    c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""),
                    "ajax" === c.type && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(),
                    c.opts.filter = l.shift())),
                    c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })),
                    i.group.push(c)
                }),
                Object.keys(i.slides).length && (i.updateControls(),
                (e = i.Thumbs) && e.isActive && (e.create(),
                e.focus()))
            },
            addEvents: function() {
                var e = this;
                e.removeEvents(),
                e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                    e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }),
                s.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId),
                    e.requestId = c(function() {
                        e.update(t)
                    })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                    setTimeout(function() {
                        e.$refs.stage.show(),
                        e.update(t)
                    }, n.fancybox.isMobile ? 600 : 250))
                }),
                a.on("keydown.fb", function(t) {
                    var i = (n.fancybox ? n.fancybox.getInstance() : null).current
                      , o = t.keyCode || t.which;
                    if (9 != o)
                        return !i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select") ? void 0 : 8 === o || 27 === o ? (t.preventDefault(),
                        void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(),
                        void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(),
                        void e.next()) : void e.trigger("afterKeydown", t, o);
                    i.opts.trapFocus && e.focus(t)
                }),
                e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0,
                a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                    e.idleSecondsCounter = 0,
                    e.isIdle && e.showControls(),
                    e.isIdle = !1
                }),
                e.idleInterval = t.setInterval(function() {
                    ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0,
                    e.idleSecondsCounter = 0,
                    e.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                s.off("orientationchange.fb resize.fb"),
                a.off("keydown.fb .fb-idle"),
                this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                e.idleInterval && (t.clearInterval(e.idleInterval),
                e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e) {
                var i, o, r, s, a, l, c, u, d, h = this, f = h.group.length;
                if (!(h.isDragging || h.isClosing || h.isAnimating && h.firstRun)) {
                    if (t = parseInt(t, 10),
                    !(r = h.current ? h.current.opts.loop : h.opts.loop) && (t < 0 || t >= f))
                        return !1;
                    if (i = h.firstRun = !Object.keys(h.slides).length,
                    a = h.current,
                    h.prevIndex = h.currIndex,
                    h.prevPos = h.currPos,
                    s = h.createSlide(t),
                    f > 1 && ((r || s.index < f - 1) && h.createSlide(t + 1),
                    (r || s.index > 0) && h.createSlide(t - 1)),
                    h.current = s,
                    h.currIndex = s.index,
                    h.currPos = s.pos,
                    h.trigger("beforeShow", i),
                    h.updateControls(),
                    s.forcedDuration = void 0,
                    n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[i ? "animationDuration" : "transitionDuration"],
                    e = parseInt(e, 10),
                    o = h.isMoved(s),
                    s.$slide.addClass("fancybox-slide--current"),
                    i)
                        return s.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"),
                        h.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                        h.loadSlide(s),
                        void h.preload("image");
                    l = n.fancybox.getTranslate(a.$slide),
                    c = n.fancybox.getTranslate(h.$refs.stage),
                    n.each(h.slides, function(t, e) {
                        n.fancybox.stop(e.$slide, !0)
                    }),
                    a.pos !== s.pos && (a.isComplete = !1),
                    a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                    o ? (d = l.left - (a.pos * l.width + a.pos * a.opts.gutter),
                    n.each(h.slides, function(t, i) {
                        i.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var o = i.pos * l.width + i.pos * i.opts.gutter;
                        n.fancybox.setTranslate(i.$slide, {
                            top: 0,
                            left: o - c.left + d
                        }),
                        i.pos !== s.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > s.pos ? "next" : "previous")),
                        p(i.$slide),
                        n.fancybox.animate(i.$slide, {
                            top: 0,
                            left: (i.pos - s.pos) * l.width + (i.pos - s.pos) * i.opts.gutter
                        }, e, function() {
                            i.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous"),
                            i.pos === h.currPos && h.complete()
                        })
                    })) : e && s.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect,
                    a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")),
                    n.fancybox.animate(a.$slide, u, e, function() {
                        a.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)),
                    s.isLoaded ? h.revealContent(s) : h.loadSlide(s),
                    h.preload("image")
                }
            },
            createSlide: function(t) {
                var e, i, o = this;
                return i = (i = t % o.group.length) < 0 ? o.group.length + i : i,
                !o.slides[t] && o.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),
                o.slides[t] = n.extend(!0, {}, o.group[i], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }),
                o.updateSlide(o.slides[t])),
                o.slides[t]
            },
            scaleToActual: function(t, e, i) {
                var o, r, s, a, l, c = this, u = c.current, d = u.$content, p = n.fancybox.getTranslate(u.$slide).width, h = n.fancybox.getTranslate(u.$slide).height, f = u.width, g = u.height;
                c.isAnimating || c.isMoved() || !d || "image" != u.type || !u.isLoaded || u.hasError || (c.isAnimating = !0,
                n.fancybox.stop(d),
                t = void 0 === t ? .5 * p : t,
                e = void 0 === e ? .5 * h : e,
                (o = n.fancybox.getTranslate(d)).top -= n.fancybox.getTranslate(u.$slide).top,
                o.left -= n.fancybox.getTranslate(u.$slide).left,
                a = f / o.width,
                l = g / o.height,
                r = .5 * p - .5 * f,
                s = .5 * h - .5 * g,
                f > p && ((r = o.left * a - (t * a - t)) > 0 && (r = 0),
                r < p - f && (r = p - f)),
                g > h && ((s = o.top * l - (e * l - e)) > 0 && (s = 0),
                s < h - g && (s = h - g)),
                c.updateCursor(f, g),
                n.fancybox.animate(d, {
                    top: s,
                    left: r,
                    scaleX: a,
                    scaleY: l
                }, i || 366, function() {
                    c.isAnimating = !1
                }),
                c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, i = this, o = i.current, r = o.$content;
                i.isAnimating || i.isMoved() || !r || "image" != o.type || !o.isLoaded || o.hasError || (i.isAnimating = !0,
                n.fancybox.stop(r),
                e = i.getFitPos(o),
                i.updateCursor(e.width, e.height),
                n.fancybox.animate(r, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / r.width(),
                    scaleY: e.height / r.height()
                }, t || 366, function() {
                    i.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, i, o, r, s = t.$content, a = t.$slide, l = t.width || t.opts.width, c = t.height || t.opts.height, u = {};
                return !!(t.isLoaded && s && s.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width,
                i = n.fancybox.getTranslate(this.$refs.stage).height,
                e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")),
                i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")),
                l && c || (l = e,
                c = i),
                (l *= o = Math.min(1, e / l, i / c)) > e - .5 && (l = e),
                (c *= o) > i - .5 && (c = i),
                "image" === t.type ? (u.top = Math.floor(.5 * (i - c)) + parseFloat(a.css("paddingTop")),
                u.left = Math.floor(.5 * (e - l)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (c > l / (r = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / r : l > c * r && (l = c * r)),
                u.width = l,
                u.height = c,
                u)
            },
            update: function(t) {
                var e = this;
                n.each(e.slides, function(n, i) {
                    e.updateSlide(i, t)
                })
            },
            updateSlide: function(t, e) {
                var i = this
                  , o = t && t.$content
                  , r = t.width || t.opts.width
                  , s = t.height || t.opts.height
                  , a = t.$slide;
                i.adjustCaption(t),
                o && (r || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(o),
                n.fancybox.setTranslate(o, i.getFitPos(t)),
                t.pos === i.currPos && (i.isAnimating = !1,
                i.updateCursor())),
                i.adjustLayout(t),
                a.length && (a.trigger("refresh"),
                t.pos === i.currPos && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)),
                i.trigger("onUpdate", t, e)
            },
            centerSlide: function(t) {
                var e = this
                  , i = e.current
                  , o = i.$slide;
                !e.isClosing && i && (o.siblings().css({
                    transform: "",
                    opacity: ""
                }),
                o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                n.fancybox.animate(o, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, void 0 === t ? 0 : t, function() {
                    o.css({
                        transform: "",
                        opacity: ""
                    }),
                    i.isComplete || e.complete()
                }, !1))
            },
            isMoved: function(t) {
                var e, i, o = t || this.current;
                return !!o && (i = n.fancybox.getTranslate(this.$refs.stage),
                e = n.fancybox.getTranslate(o.$slide),
                !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - i.top) > .5 || Math.abs(e.left - i.left) > .5))
            },
            updateCursor: function(t, e) {
                var i, o, r = this, s = r.current, a = r.$refs.container;
                s && !r.isClosing && r.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                o = !!(i = r.canPan(t, e)) || r.isZoomable(),
                a.toggleClass("fancybox-is-zoomable", o),
                n("[data-fancybox-zoom]").prop("disabled", !o),
                i ? a.addClass("fancybox-can-pan") : o && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? a.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || r.group.length > 1) && "video" !== s.contentType && a.addClass("fancybox-can-swipe"))
            },
            isZoomable: function() {
                var t, e = this, n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded)
                        return !0;
                    if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height))
                        return !0
                }
                return !1
            },
            isScaledDown: function(t, e) {
                var i = !1
                  , o = this.current
                  , r = o.$content;
                return void 0 !== t && void 0 !== e ? i = t < o.width && e < o.height : r && (i = (i = n.fancybox.getTranslate(r)).width < o.width && i.height < o.height),
                i
            },
            canPan: function(t, e) {
                var i = this.current
                  , o = null
                  , r = !1;
                return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (r = this.getFitPos(i),
                void 0 !== t && void 0 !== e ? o = {
                    width: t,
                    height: e
                } : i.isComplete && (o = n.fancybox.getTranslate(i.$content)),
                o && r && (r = Math.abs(o.width - r.width) > 1.5 || Math.abs(o.height - r.height) > 1.5)),
                r
            },
            loadSlide: function(t) {
                var e, i, o, r = this;
                if (!t.isLoading && !t.isLoaded) {
                    if (t.isLoading = !0,
                    !1 === r.trigger("beforeLoad", t))
                        return t.isLoading = !1,
                        !1;
                    switch (e = t.type,
                    (i = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass),
                    e) {
                    case "image":
                        r.setImage(t);
                        break;
                    case "iframe":
                        r.setIframe(t);
                        break;
                    case "html":
                        r.setContent(t, t.src || t.content);
                        break;
                    case "video":
                        r.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                        break;
                    case "inline":
                        n(t.src).length ? r.setContent(t, n(t.src)) : r.setError(t);
                        break;
                    case "ajax":
                        r.showLoading(t),
                        o = n.ajax(n.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, n) {
                                "success" === n && r.setContent(t, e)
                            },
                            error: function(e, n) {
                                e && "abort" !== n && r.setError(t)
                            }
                        })),
                        i.one("onReset", function() {
                            o.abort()
                        });
                        break;
                    default:
                        r.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var i, o = this;
                setTimeout(function() {
                    var e = t.$image;
                    o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t)
                }, 50),
                o.checkSrcset(t),
                t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),
                !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width,
                t.height = t.opts.height,
                (i = e.createElement("img")).onerror = function() {
                    n(this).remove(),
                    t.$ghost = null
                }
                ,
                i.onload = function() {
                    o.afterLoad(t)
                }
                ,
                t.$ghost = n(i).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)),
                o.setBigImage(t)
            },
            checkSrcset: function(e) {
                var n, i, o, r, s = e.opts.srcset || e.opts.image.srcset;
                if (s) {
                    o = t.devicePixelRatio || 1,
                    r = t.innerWidth * o,
                    (i = s.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var i = parseInt(t.substring(0, t.length - 1), 10);
                            if (0 === n)
                                return e.url = t;
                            i && (e.value = i,
                            e.postfix = t[t.length - 1])
                        }),
                        e
                    })).sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var a = 0; a < i.length; a++) {
                        var l = i[a];
                        if ("w" === l.postfix && l.value >= r || "x" === l.postfix && l.value >= o) {
                            n = l;
                            break
                        }
                    }
                    !n && i.length && (n = i[i.length - 1]),
                    n && (e.src = n.url,
                    e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value,
                    e.width = n.value),
                    e.opts.srcset = s)
                }
            },
            setBigImage: function(t) {
                var i = this
                  , o = e.createElement("img")
                  , r = n(o);
                t.$image = r.one("error", function() {
                    i.setError(t)
                }).one("load", function() {
                    var e;
                    t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight),
                    i.afterLoad(t)),
                    i.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"),
                    r.attr("sizes", e).attr("srcset", t.opts.srcset)),
                    t.$ghost && setTimeout(function() {
                        t.$ghost && !i.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                    i.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                (o.complete || "complete" == o.readyState) && r.naturalWidth && r.naturalHeight ? r.trigger("load") : o.error && r.trigger("error")
            },
            resolveImageSlideSize: function(t, e, n) {
                var i = parseInt(t.opts.width, 10)
                  , o = parseInt(t.opts.height, 10);
                t.width = e,
                t.height = n,
                i > 0 && (t.width = i,
                t.height = Math.floor(i * n / e)),
                o > 0 && (t.width = Math.floor(o * e / n),
                t.height = o)
            },
            setIframe: function(t) {
                var e, i = this, o = t.opts.iframe, r = t.$slide;
                t.$content = n('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(r),
                r.addClass("fancybox-slide--" + t.contentType),
                t.$iframe = e = n(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(t.$content),
                o.preload ? (i.showLoading(t),
                e.on("load.fb error.fb", function(e) {
                    this.isReady = 1,
                    t.$slide.trigger("refresh"),
                    i.afterLoad(t)
                }),
                r.on("refresh.fb", function() {
                    var n, i = t.$content, s = o.css.width, a = o.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            n = e.contents().find("body")
                        } catch (t) {}
                        n && n.length && n.children().length && (r.css("overflow", "visible"),
                        i.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }),
                        void 0 === s && (s = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))),
                        i.css("width", s || "").css("max-width", ""),
                        void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))),
                        i.css("height", a || ""),
                        r.css("overflow", "auto")),
                        i.removeClass("fancybox-is-hidden")
                    }
                })) : i.afterLoad(t),
                e.attr("src", t.src),
                r.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).off("refresh.fb").empty(),
                    t.isLoaded = !1,
                    t.isRevealed = !1
                })
            },
            setContent: function(t, e) {
                var i = this;
                i.isClosing || (i.hideLoading(t),
                t.$content && n.fancybox.stop(t.$content),
                t.$slide.empty(),
                function(t) {
                    return t && t.hasOwnProperty && t instanceof n
                }(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                t.$placeholder = n("<div>").hide().insertAfter(e),
                e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                t.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"),
                    t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),
                    t.$placeholder = null),
                    t.$smallBtn && (t.$smallBtn.remove(),
                    t.$smallBtn = null),
                    t.hasError || (n(this).empty(),
                    t.isLoaded = !1,
                    t.isRevealed = !1)
                }),
                n(e).appendTo(t.$slide),
                n(e).is("video,audio") && (n(e).addClass("fancybox-video"),
                n(e).wrap("<div></div>"),
                t.contentType = "video",
                t.opts.width = t.opts.width || n(e).attr("width"),
                t.opts.height = t.opts.height || n(e).attr("height")),
                t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),
                t.$content.siblings().hide(),
                t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                t.$content.addClass("fancybox-content"),
                t.$slide.addClass("fancybox-slide--" + t.contentType),
                i.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0,
                t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"),
                t.contentType = "html",
                this.setContent(t, this.translate(t, t.opts.errorTpl)),
                t.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(t) {
                var e = this;
                (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function(t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(),
                delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1,
                t.isLoaded = !0,
                e.trigger("afterLoad", t),
                e.hideLoading(t),
                !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(),
                    !0
                }),
                "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                e.adjustCaption(t),
                e.adjustLayout(t),
                t.pos === e.currPos && e.updateCursor(),
                e.revealContent(t))
            },
            adjustCaption: function(t) {
                var e, n = this, i = t || n.current, o = i.opts.caption, r = i.opts.preventCaptionOverlap, s = n.$refs.caption, a = !1;
                s.toggleClass("fancybox-caption--separate", r),
                r && o && o.length && (i.pos !== n.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(o),
                a = e.outerHeight(!0),
                e.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)),
                i.$slide.css("padding-bottom", a || ""))
            },
            adjustLayout: function(t) {
                var e, n, i, o, r = t || this.current;
                r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""),
                r.$content.outerHeight() > r.$slide.height() + .5 && (i = r.$slide[0].style["padding-bottom"],
                o = r.$slide.css("padding-bottom"),
                parseFloat(o) > 0 && (e = r.$slide[0].scrollHeight,
                r.$slide.css("padding-bottom", 0),
                Math.abs(e - r.$slide[0].scrollHeight) < 1 && (n = o),
                r.$slide.css("padding-bottom", i))),
                r.$content.css("margin-bottom", n))
            },
            revealContent: function(t) {
                var e, i, o, r, s = this, a = t.$slide, l = !1, c = !1, u = s.isMoved(t), d = t.isRevealed;
                return t.isRevealed = !0,
                e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"],
                o = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"],
                o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10),
                !u && t.pos === s.currPos && o || (e = !1),
                "zoom" === e && (t.pos === s.currPos && o && "image" === t.type && !t.hasError && (c = s.getThumbPos(t)) ? l = s.getFitPos(t) : e = "fade"),
                "zoom" === e ? (s.isAnimating = !0,
                l.scaleX = l.width / c.width,
                l.scaleY = l.height / c.height,
                "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - c.width / c.height) > .1),
                r && (c.opacity = .1,
                l.opacity = 1),
                n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c),
                p(t.$content),
                void n.fancybox.animate(t.$content, l, o, function() {
                    s.isAnimating = !1,
                    s.complete()
                })) : (s.updateSlide(t),
                e ? (n.fancybox.stop(a),
                i = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e,
                a.addClass(i).removeClass("fancybox-slide--current"),
                t.$content.removeClass("fancybox-is-hidden"),
                p(a),
                "image" !== t.type && t.$content.hide().show(0),
                void n.fancybox.animate(a, "fancybox-slide--current", o, function() {
                    a.removeClass(i).css({
                        transform: "",
                        opacity: ""
                    }),
                    t.pos === s.currPos && s.complete()
                }, !0)) : (t.$content.removeClass("fancybox-is-hidden"),
                d || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"),
                void (t.pos === s.currPos && s.complete())))
            },
            getThumbPos: function(t) {
                var e, i, o, r, s, a = !1, l = t.$thumb;
                return !(!l || !f(l[0])) && (e = n.fancybox.getTranslate(l),
                i = parseFloat(l.css("border-top-width") || 0),
                o = parseFloat(l.css("border-right-width") || 0),
                r = parseFloat(l.css("border-bottom-width") || 0),
                s = parseFloat(l.css("border-left-width") || 0),
                a = {
                    top: e.top + i,
                    left: e.left + s,
                    width: e.width - o - s,
                    height: e.height - i - r,
                    scaleX: 1,
                    scaleY: 1
                },
                e.width > 0 && e.height > 0 && a)
            },
            complete: function() {
                var t, e = this, i = e.current, o = {};
                !e.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0,
                i.$slide.siblings().trigger("onReset"),
                e.preload("inline"),
                p(i.$slide),
                i.$slide.addClass("fancybox-slide--complete"),
                n.each(e.slides, function(t, i) {
                    i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide),
                    i.$slide.off().remove())
                }),
                e.slides = o),
                e.isAnimating = !1,
                e.updateCursor(),
                e.trigger("afterShow"),
                i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    e.next()
                }),
                i.opts.autoFocus && "html" === i.contentType && ((t = i.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)),
                i.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function(t) {
                var e, n, i = this;
                i.group.length < 2 || (n = i.slides[i.currPos + 1],
                (e = i.slides[i.currPos - 1]) && e.type === t && i.loadSlide(e),
                n && n.type === t && i.loadSlide(n))
            },
            focus: function(t, i) {
                var o, r, s = this, a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                s.isClosing || ((o = (o = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")).filter(a).filter(function() {
                    return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                })).length ? (r = o.index(e.activeElement),
                t && t.shiftKey ? (r < 0 || 0 == r) && (t.preventDefault(),
                o.eq(o.length - 1).trigger("focus")) : (r < 0 || r == o.length - 1) && (t && t.preventDefault(),
                o.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"),
                    e.removeEvents(),
                    e.isVisible = !1)
                }),
                t.isVisible = !0,
                (t.current || t.isIdle) && (t.update(),
                t.updateControls()),
                t.trigger("onActivate"),
                t.addEvents()
            },
            close: function(t, e) {
                var i, o, r, s, a, l, u, d = this, h = d.current, f = function() {
                    d.cleanUp(t)
                };
                return !(d.isClosing || (d.isClosing = !0,
                !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1,
                c(function() {
                    d.update()
                }),
                1) : (d.removeEvents(),
                r = h.$content,
                i = h.opts.animationEffect,
                o = n.isNumeric(e) ? e : i ? h.opts.animationDuration : 0,
                h.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                !0 !== t ? n.fancybox.stop(h.$slide) : i = !1,
                h.$slide.siblings().trigger("onReset").remove(),
                o && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"),
                d.hideLoading(h),
                d.hideControls(!0),
                d.updateCursor(),
                "zoom" !== i || r && o && "image" === h.type && !d.isMoved() && !h.hasError && (u = d.getThumbPos(h)) || (i = "fade"),
                "zoom" === i ? (n.fancybox.stop(r),
                s = n.fancybox.getTranslate(r),
                l = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / u.width,
                    scaleY: s.height / u.height,
                    width: u.width,
                    height: u.height
                },
                a = h.opts.zoomOpacity,
                "auto" == a && (a = Math.abs(h.width / h.height - u.width / u.height) > .1),
                a && (u.opacity = 0),
                n.fancybox.setTranslate(r, l),
                p(r),
                n.fancybox.animate(r, u, o, f),
                0) : (i && o ? n.fancybox.animate(h.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, f) : !0 === t ? setTimeout(f, o) : f(),
                0))))
            },
            cleanUp: function(e) {
                var i, o, r, s = this, a = s.current.opts.$orig;
                s.current.$slide.trigger("onReset"),
                s.$refs.container.empty().remove(),
                s.trigger("afterClose", e),
                s.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = s.$trigger),
                a && a.length && (o = t.scrollX,
                r = t.scrollY,
                a.trigger("focus"),
                n("html, body").scrollTop(r).scrollLeft(o))),
                s.current = null,
                (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"),
                n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var i, o = Array.prototype.slice.call(arguments, 1), r = this, s = e && e.opts ? e : r.current;
                if (s ? o.unshift(s) : s = r,
                o.unshift(r),
                n.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, o)),
                !1 === i)
                    return i;
                "afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", o) : a.trigger(t + ".fb", o)
            },
            updateControls: function() {
                var t = this
                  , i = t.current
                  , o = i.index
                  , r = t.$refs.container
                  , s = t.$refs.caption
                  , a = i.opts.caption;
                i.$slide.trigger("refresh"),
                a && a.length ? (t.$caption = s,
                s.children().eq(0).html(a)) : t.$caption = null,
                t.hasHiddenControls || t.isIdle || t.showControls(),
                r.find("[data-fancybox-count]").html(t.group.length),
                r.find("[data-fancybox-index]").html(o + 1),
                r.find("[data-fancybox-prev]").prop("disabled", !i.opts.loop && o <= 0),
                r.find("[data-fancybox-next]").prop("disabled", !i.opts.loop && o >= t.group.length - 1),
                "image" === i.type ? r.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", i.opts.image.src || i.src).show() : i.opts.toolbar && r.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
            },
            hideControls: function(t) {
                var e = ["infobar", "toolbar", "nav"];
                !t && this.current.opts.preventCaptionOverlap || e.push("caption"),
                this.$refs.container.removeClass(e.map(function(t) {
                    return "fancybox-show-" + t
                }).join(" ")),
                this.hasHiddenControls = !0
            },
            showControls: function() {
                var t = this
                  , e = t.current ? t.current.opts : t.opts
                  , n = t.$refs.container;
                t.hasHiddenControls = !1,
                t.idleSecondsCounter = 0,
                n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
            },
            toggleControls: function() {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }),
        n.fancybox = {
            version: "3.5.7",
            defaults: r,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                  , i = Array.prototype.slice.call(arguments, 1);
                return e instanceof g && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i),
                e)
            },
            open: function(t, e, n) {
                return new g(t,e,n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(),
                !0 === t && this.close(t))
            },
            destroy: function() {
                this.close(!0),
                a.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                return !(!t || !t.length) && {
                    top: (e = t[0].getBoundingClientRect()).top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                }
            },
            setTranslate: function(t, e) {
                var n = ""
                  , i = {};
                if (t && e)
                    return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px",
                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                    void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                    n.length && (i.transform = n),
                    void 0 !== e.opacity && (i.opacity = e.opacity),
                    void 0 !== e.width && (i.width = e.width),
                    void 0 !== e.height && (i.height = e.height),
                    t.css(i)
            },
            animate: function(t, e, i, o, r) {
                var s, a = this;
                n.isFunction(i) && (o = i,
                i = null),
                a.stop(t),
                s = a.getTranslate(t),
                t.on(d, function(l) {
                    (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(t),
                    n.isNumeric(i) && t.css("transition-duration", ""),
                    n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && a.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: s.width * e.scaleX,
                        height: s.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== r && t.removeClass(e),
                    n.isFunction(o) && o(l))
                }),
                n.isNumeric(i) && t.css("transition-duration", i + "ms"),
                n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width,
                delete e.height,
                t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")),
                n.fancybox.setTranslate(t, e)) : t.addClass(e),
                t.data("timer", setTimeout(function() {
                    t.trigger(d)
                }, i + 33))
            },
            stop: function(t, e) {
                t && t.length && (clearTimeout(t.data("timer")),
                e && t.trigger(d),
                t.off(d).css("transition-duration", ""),
                t.parent().removeClass("fancybox-is-scaling"))
            }
        },
        n.fn.fancybox = function(t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, o) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, o),
            this
        }
        ,
        a.on("click.fb-start", "[data-fancybox]", o),
        a.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
            n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: n(this)
            })
        }),
        function() {
            var t = null;
            a.on("mousedown mouseup focus blur", ".fancybox-button", function(e) {
                switch (e.type) {
                case "mousedown":
                    t = n(this);
                    break;
                case "mouseup":
                    t = null;
                    break;
                case "focusin":
                    n(".fancybox-button").removeClass("fancybox-focus"),
                    n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                    break;
                case "focusout":
                    n(".fancybox-button").removeClass("fancybox-focus")
                }
            })
        }()
    }
}(window, document, jQuery),
function(t) {
    "use strict";
    var e = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    }
      , n = function(e, n, i) {
        if (e)
            return i = i || "",
            "object" === t.type(i) && (i = t.param(i, !0)),
            t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }),
            i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i),
            e
    };
    t(document).on("objectNeedsType.fb", function(i, o, r) {
        var s, a, l, c, u, d, p, h = r.src || "", f = !1;
        s = t.extend(!0, {}, e, r.opts.media),
        t.each(s, function(e, i) {
            if (l = h.match(i.matcher)) {
                if (f = i.type,
                p = e,
                d = {},
                i.paramPlace && l[i.paramPlace]) {
                    "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)),
                    u = u.split("&");
                    for (var o = 0; o < u.length; ++o) {
                        var s = u[o].split("=", 2);
                        2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return c = t.extend(!0, {}, i.params, r.opts[e], d),
                h = "function" === t.type(i.url) ? i.url.call(this, l, c, r) : n(i.url, l, c),
                a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, r) : n(i.thumb, l),
                "youtube" === e ? h = h.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, i) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                }) : "vimeo" === e && (h = h.replace("&%23", "#")),
                !1
            }
        }),
        f ? (r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = a),
        "iframe" === f && (r.opts = t.extend(!0, r.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })),
        t.extend(r, {
            type: f,
            src: h,
            origSrc: r.src,
            contentSource: p,
            contentType: "image" === f ? "image" : "gmap_place" == p || "gmap_search" == p ? "map" : "video"
        })) : h && (r.type = r.opts.defaultType)
    });
    var i = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, n = this;
            this[t].loaded ? setTimeout(function() {
                n.done(t)
            }) : this[t].loading || (this[t].loading = !0,
            (e = document.createElement("script")).type = "text/javascript",
            e.src = this[t].src,
            "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                n[t].loaded = !0,
                n.done(t)
            }
            : e.onload = function() {
                n[t].loaded = !0,
                n.done(t)
            }
            ,
            document.body.appendChild(e))
        },
        done: function(e) {
            var n, i;
            "youtube" === e && delete window.onYouTubeIframeAPIReady,
            (n = t.fancybox.getInstance()) && (i = n.current.$content.find("iframe"),
            "youtube" === e && void 0 !== YT && YT ? new YT.Player(i.attr("id"),{
                events: {
                    onStateChange: function(t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function() {
                n.next()
            }))
        }
    };
    t(document).on({
        "afterShow.fb": function(t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
        }
    })
}(jQuery),
function(t, e, n) {
    "use strict";
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
        return t.setTimeout(e, 1e3 / 60)
    }
      , o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
        t.clearTimeout(e)
    }
      , r = function(e) {
        var n = [];
        for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e])
            e[i].pageX ? n.push({
                x: e[i].pageX,
                y: e[i].pageY
            }) : e[i].clientX && n.push({
                x: e[i].clientX,
                y: e[i].clientY
            });
        return n
    }
      , s = function(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }
      , a = function(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable"))
            return !0;
        for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++)
            if ("data-fancybox-" === i[e].nodeName.substr(0, 14))
                return !0;
        return !1
    }
      , l = function(e) {
        var n = t.getComputedStyle(e)["overflow-y"]
          , i = t.getComputedStyle(e)["overflow-x"]
          , o = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight
          , r = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
        return o || r
    }
      , c = function(t) {
        for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")); )
            ;
        return e
    }
      , u = function(t) {
        var e = this;
        e.instance = t,
        e.$bg = t.$refs.bg,
        e.$stage = t.$refs.stage,
        e.$container = t.$refs.container,
        e.destroy(),
        e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
    u.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (o(t.requestId),
        t.requestId = null),
        t.tapped && (clearTimeout(t.tapped),
        t.tapped = null)
    }
    ,
    u.prototype.ontouchstart = function(i) {
        var o = this
          , l = n(i.target)
          , u = o.instance
          , d = u.current
          , p = d.$slide
          , h = d.$content
          , f = "touchstart" == i.type;
        if (f && o.$container.off("mousedown.fb.touch"),
        (!i.originalEvent || 2 != i.originalEvent.button) && p.length && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!d || u.isAnimating || d.$slide.hasClass("fancybox-animated"))
                return i.stopPropagation(),
                void i.preventDefault();
            o.realPoints = o.startPoints = r(i),
            o.startPoints.length && (d.touch && i.stopPropagation(),
            o.startEvent = i,
            o.canTap = !0,
            o.$target = l,
            o.$content = h,
            o.opts = d.opts.touch,
            o.isPanning = !1,
            o.isSwiping = !1,
            o.isZooming = !1,
            o.isScrolling = !1,
            o.canPan = u.canPan(),
            o.startTime = (new Date).getTime(),
            o.distanceX = o.distanceY = o.distance = 0,
            o.canvasWidth = Math.round(p[0].clientWidth),
            o.canvasHeight = Math.round(p[0].clientHeight),
            o.contentLastPos = null,
            o.contentStartPos = n.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0
            },
            o.sliderStartPos = n.fancybox.getTranslate(p),
            o.stagePos = n.fancybox.getTranslate(u.$refs.stage),
            o.sliderStartPos.top -= o.stagePos.top,
            o.sliderStartPos.left -= o.stagePos.left,
            o.contentStartPos.top -= o.stagePos.top,
            o.contentStartPos.left -= o.stagePos.left,
            n(e).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")),
            n.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0),
            ((o.opts || o.canPan) && (l.is(o.$stage) || o.$stage.find(l).length) || (l.is(".fancybox-image") && i.preventDefault(),
            n.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (o.isScrollable = c(l) || c(l.parent()),
            n.fancybox.isMobile && o.isScrollable || i.preventDefault(),
            (1 === o.startPoints.length || d.hasError) && (o.canPan ? (n.fancybox.stop(o.$content),
            o.isPanning = !0) : o.isSwiping = !0,
            o.$container.addClass("fancybox-is-grabbing")),
            2 === o.startPoints.length && "image" === d.type && (d.isLoaded || d.$ghost) && (o.canTap = !1,
            o.isSwiping = !1,
            o.isPanning = !1,
            o.isZooming = !0,
            n.fancybox.stop(o.$content),
            o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft(),
            o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop(),
            o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width,
            o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height,
            o.startDistanceBetweenFingers = s(o.startPoints[0], o.startPoints[1]))))
        }
    }
    ,
    u.prototype.onscroll = function(t) {
        this.isScrolling = !0,
        e.removeEventListener("scroll", this.onscroll, !0)
    }
    ,
    u.prototype.ontouchmove = function(t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = r(t),
        void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(),
        e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"),
        e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"),
        e.distance = s(e.newPoints[0], e.startPoints[0]),
        e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }
    ,
    u.prototype.onSwipe = function(e) {
        var r, s = this, a = s.instance, l = s.isSwiping, c = s.sliderStartPos.left || 0;
        if (!0 !== l)
            "x" == l && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX),
            s.sliderLastPos = {
                top: "x" == l ? 0 : s.sliderStartPos.top + s.distanceY,
                left: c
            },
            s.requestId && (o(s.requestId),
            s.requestId = null),
            s.requestId = i(function() {
                s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
                    var i = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + i * s.canvasWidth + i * e.opts.gutter
                    })
                }),
                s.$container.addClass("fancybox-is-sliding"))
            });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1,
            a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
            s.isSwiping = r > 45 && r < 135 ? "y" : "x"),
            "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
                return void (s.isScrolling = !0);
            a.isDragging = s.isSwiping,
            s.startPoints = s.newPoints,
            n.each(a.slides, function(t, e) {
                var i, o;
                n.fancybox.stop(e.$slide),
                i = n.fancybox.getTranslate(e.$slide),
                o = n.fancybox.getTranslate(a.$refs.stage),
                e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }),
                e.pos === a.current.pos && (s.sliderStartPos.top = i.top - o.top,
                s.sliderStartPos.left = i.left - o.left),
                n.fancybox.setTranslate(e.$slide, {
                    top: i.top - o.top,
                    left: i.left - o.left
                })
            }),
            a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
        }
    }
    ,
    u.prototype.onPan = function() {
        var t = this;
        s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1,
        t.contentLastPos = t.limitMovement(),
        t.requestId && o(t.requestId),
        t.requestId = i(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }
    ,
    u.prototype.limitMovement = function() {
        var t, e, n, i, o, r, s = this, a = s.canvasWidth, l = s.canvasHeight, c = s.distanceX, u = s.distanceY, d = s.contentStartPos, p = d.left, h = d.top, f = d.width, g = d.height;
        return o = f > a ? p + c : p,
        r = h + u,
        t = Math.max(0, .5 * a - .5 * f),
        e = Math.max(0, .5 * l - .5 * g),
        n = Math.min(a - f, .5 * a - .5 * f),
        i = Math.min(l - g, .5 * l - .5 * g),
        c > 0 && o > t && (o = t - 1 + Math.pow(-t + p + c, .8) || 0),
        c < 0 && o < n && (o = n + 1 - Math.pow(n - p - c, .8) || 0),
        u > 0 && r > e && (r = e - 1 + Math.pow(-e + h + u, .8) || 0),
        u < 0 && r < i && (r = i + 1 - Math.pow(i - h - u, .8) || 0),
        {
            top: r,
            left: o
        }
    }
    ,
    u.prototype.limitPosition = function(t, e, n, i) {
        var o = this.canvasWidth
          , r = this.canvasHeight;
        return n > o ? t = (t = t > 0 ? 0 : t) < o - n ? o - n : t : t = Math.max(0, o / 2 - n / 2),
        i > r ? e = (e = e > 0 ? 0 : e) < r - i ? r - i : e : e = Math.max(0, r / 2 - i / 2),
        {
            top: e,
            left: t
        }
    }
    ,
    u.prototype.onZoom = function() {
        var e = this
          , r = e.contentStartPos
          , a = r.width
          , l = r.height
          , c = r.left
          , u = r.top
          , d = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers
          , p = Math.floor(a * d)
          , h = Math.floor(l * d)
          , f = (a - p) * e.percentageOfImageAtPinchPointX
          , g = (l - h) * e.percentageOfImageAtPinchPointY
          , m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft()
          , v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop()
          , y = m - e.centerPointStartX
          , b = {
            top: u + (g + (v - e.centerPointStartY)),
            left: c + (f + y),
            scaleX: d,
            scaleY: d
        };
        e.canTap = !1,
        e.newWidth = p,
        e.newHeight = h,
        e.contentLastPos = b,
        e.requestId && o(e.requestId),
        e.requestId = i(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }
    ,
    u.prototype.ontouchend = function(t) {
        var i = this
          , s = i.isSwiping
          , a = i.isPanning
          , l = i.isZooming
          , c = i.isScrolling;
        if (i.endPoints = r(t),
        i.dMs = Math.max((new Date).getTime() - i.startTime, 1),
        i.$container.removeClass("fancybox-is-grabbing"),
        n(e).off(".fb.touch"),
        e.removeEventListener("scroll", i.onscroll, !0),
        i.requestId && (o(i.requestId),
        i.requestId = null),
        i.isSwiping = !1,
        i.isPanning = !1,
        i.isZooming = !1,
        i.isScrolling = !1,
        i.instance.isDragging = !1,
        i.canTap)
            return i.onTap(t);
        i.speed = 100,
        i.velocityX = i.distanceX / i.dMs * .5,
        i.velocityY = i.distanceY / i.dMs * .5,
        a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(s, c)
    }
    ,
    u.prototype.endSwiping = function(t, e) {
        var i = this
          , o = !1
          , r = i.instance.group.length
          , s = Math.abs(i.distanceX)
          , a = "x" == t && r > 1 && (i.dMs > 130 && s > 10 || s > 50);
        i.sliderLastPos = null,
        "y" == t && !e && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 200),
        o = i.instance.close(!0, 250)) : a && i.distanceX > 0 ? o = i.instance.previous(300) : a && i.distanceX < 0 && (o = i.instance.next(300)),
        !1 !== o || "x" != t && "y" != t || i.instance.centerSlide(200),
        i.$container.removeClass("fancybox-is-sliding")
    }
    ,
    u.prototype.endPanning = function() {
        var t, e, i, o = this;
        o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left,
        e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX,
        e = o.contentLastPos.top + 500 * o.velocityY),
        (i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width,
        i.height = o.contentStartPos.height,
        n.fancybox.animate(o.$content, i, 366))
    }
    ,
    u.prototype.endZooming = function() {
        var t, e, i, o, r = this, s = r.instance.current, a = r.newWidth, l = r.newHeight;
        r.contentLastPos && (t = r.contentLastPos.left,
        o = {
            top: e = r.contentLastPos.top,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        },
        n.fancybox.setTranslate(r.$content, o),
        a < r.canvasWidth && l < r.canvasHeight ? r.instance.scaleToFit(150) : a > s.width || l > s.height ? r.instance.scaleToActual(r.centerPointStartX, r.centerPointStartY, 150) : (i = r.limitPosition(t, e, a, l),
        n.fancybox.animate(r.$content, i, 150)))
    }
    ,
    u.prototype.onTap = function(e) {
        var i, o = this, s = n(e.target), a = o.instance, l = a.current, c = e && r(e) || o.startPoints, u = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0, d = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0, p = function(t) {
            var i = l.opts[t];
            if (n.isFunction(i) && (i = i.apply(a, [l, e])),
            i)
                switch (i) {
                case "close":
                    a.close(o.startEvent);
                    break;
                case "toggleControls":
                    a.toggleControls();
                    break;
                case "next":
                    a.next();
                    break;
                case "nextOrClose":
                    a.group.length > 1 ? a.next() : a.close(o.startEvent);
                    break;
                case "zoom":
                    "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(u, d) : a.group.length < 2 && a.close(o.startEvent))
                }
        };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(u > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                i = "Outside";
            else if (s.is(".fancybox-slide"))
                i = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length)
                    return;
                i = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped),
                o.tapped = null,
                Math.abs(u - o.tapX) > 50 || Math.abs(d - o.tapY) > 50)
                    return this;
                p("dblclick" + i)
            } else
                o.tapX = u,
                o.tapY = d,
                l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? o.tapped = setTimeout(function() {
                    o.tapped = null,
                    a.isAnimating || p("click" + i)
                }, 500) : p("click" + i);
            return this
        }
    }
    ,
    n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new u(e))
    }).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function(t) {
        this.instance = t,
        this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this
              , n = t.instance
              , i = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }),
            n.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function(t) {
            var n = this
              , i = n.instance
              , o = i.current;
            o && (!0 === t || o.opts.loop || i.currIndex < i.group.length - 1) ? n.isActive && "video" !== o.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, o.opts.slideShow.speed),
            n.timer = setTimeout(function() {
                i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
            }, o.opts.slideShow.speed)) : (n.stop(),
            i.idleSecondsCounter = 0,
            i.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer),
            t.timer = null,
            t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function() {
            var t = this
              , e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
            t.isActive = !0,
            e.isComplete && t.set(!0),
            t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var t = this
              , e = t.instance.current;
            t.clear(),
            t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
            t.isActive = !1,
            t.instance.trigger("onSlideShowChange", !1),
            t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var i = e && e.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(n, i, o, r, s) {
            var a = i && i.SlideShow;
            !a || !o.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (r.preventDefault(),
            a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }),
    e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance()
          , i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set())
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, i = 0; i < e.length; i++) {
            var o = e[i];
            if (o && o[1]in t) {
                for (var r = 0; r < o.length; r++)
                    n[e[0][r]] = o[r];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var i = {
            request: function(e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[n.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement,
                this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }),
        e(t).on(n.fullscreenchange, function() {
            var t = i.isFullscreen()
              , n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1,
            n.update(!0, !0, 0),
            n.isComplete || n.complete()),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function(t, e) {
            n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                i.toggle()
            }),
            e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(),
            e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            e && e.FullScreen && 70 === o && (i.preventDefault(),
            e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var i = function(t) {
        this.init(t)
    };
    e.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this
              , n = t.group
              , i = 0;
            e.instance = t,
            e.opts = n[t.currIndex].opts.thumbs,
            t.Thumbs = e,
            e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var o = 0, r = n.length; o < r && (n[o].thumb && i++,
            !(i > 1)); o++)
                ;
            i > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                e.toggle()
            }),
            e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, i = this, o = i.instance, r = i.opts.parentEl, s = [];
            i.$grid || (i.$grid = e('<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(r).addBack().filter(r)),
            i.$grid.on("click", "a", function() {
                o.jumpTo(e(this).attr("data-index"))
            })),
            i.$list || (i.$list = e('<div class="' + n + '__list">').appendTo(i.$grid)),
            e.each(o.group, function(e, n) {
                (t = n.thumb) || "image" !== n.type || (t = n.src),
                s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }),
            i.$list[0].innerHTML = s.join(""),
            "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right"), 10) + o.group.length * i.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, n, i = this, o = i.$list, r = i.$grid;
            i.instance.current && (n = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(),
            "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - e.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + n.top
            }, t) : "x" === i.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - e.outerWidth())) && o.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
            t.isVisible ? (t.$grid || t.create(),
            t.instance.trigger("onThumbsShow"),
            t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
            t.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && ((n = new i(e)).isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            var r = e && e.Thumbs;
            r && r.isActive && 71 === o && (i.preventDefault(),
            r.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }),
    e(t).on("click", "[data-fancybox-share]", function() {
        var t, n, i = e.fancybox.getInstance(), o = i.current || null;
        o && ("function" === e.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [i, o])),
        n = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, function(t) {
                return e[t]
            })
        }(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""),
        e.fancybox.open({
            src: i.translate(i, n),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    i.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }),
                    e.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(t, e, n) {
    "use strict";
    function i() {
        var e = t.location.hash.substr(1)
          , n = e.split("-")
          , i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
            hash: e,
            index: i < 1 ? 1 : i,
            gallery: n.join("-")
        }
    }
    function o(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }
    function r(t) {
        var e, n;
        return !!t && ("" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }
    ),
    n(function() {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function(t, e) {
                var n, o;
                !1 !== e.group[e.currIndex].opts.hash && (n = i(),
                (o = r(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, i, o, s) {
                var a;
                o && !1 !== o.opts.hash && (a = r(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (o.index + 1) : ""),
                t.location.hash !== "#" + i.currentHash && (s && !i.origHash && (i.origHash = t.location.hash),
                i.hashTimer && clearTimeout(i.hashTimer),
                i.hashTimer = setTimeout(function() {
                    "replaceState"in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash),
                    s && (i.hasCreatedHistory = !0)) : t.location.hash = i.currentHash,
                    i.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(n, i, o) {
                o && !1 !== o.opts.hash && (clearTimeout(i.hashTimer),
                i.currentHash && i.hasCreatedHistory ? t.history.back() : i.currentHash && ("replaceState"in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : t.location.hash = i.origHash),
                i.currentHash = null)
            }
        }),
        n(t).on("hashchange.fb", function() {
            var t = i()
              , e = null;
            n.each(n(".fancybox-container").get().reverse(), function(t, i) {
                var o = n(i).data("FancyBox");
                if (o && o.currentHash)
                    return e = o,
                    !1
            }),
            e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null,
            e.close()) : "" !== t.gallery && o(t)
        }),
        setTimeout(function() {
            n.fancybox.getInstance() || o(i())
        }, 50))
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, i) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var i = e.current
                  , o = (new Date).getTime();
                e.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (t.preventDefault(),
                t.stopPropagation(),
                i.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t,
                o - n < 250 || (n = o,
                e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);

//hover
$(function() {
    $(".btn-6").on("mouseenter", function(t) {
        var n = $(this).offset()
          , e = t.pageX - n.left
          , f = t.pageY - n.top;
        $(this).find("span").css({
            top: f,
            left: e
        })
    }).on("mouseout", function(t) {
        var n = $(this).offset()
          , e = t.pageX - n.left
          , f = t.pageY - n.top;
        $(this).find("span").css({
            top: f,
            left: e
        })
    }),
    $("[href=#]").click(function() {
        return !1
    })
});
