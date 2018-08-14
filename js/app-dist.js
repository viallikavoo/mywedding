

function FastClick(a, b) {
	"use strict";

	function c(a, b) {
		return function() {
			return a.apply(b, arguments)
		}
	}
	var d;
	if (b = b || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = b.touchBoundary || 10, this.layer = a, this.tapDelay = b.tapDelay || 200, !FastClick.notNeeded(a)) {
		for (var e = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], f = this, g = 0, h = e.length; h > g; g++) f[e[g]] = c(f[e[g]], f);
		deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
			var e = Node.prototype.removeEventListener;
			"click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
		}, a.addEventListener = function(b, c, d) {
			var e = Node.prototype.addEventListener;
			"click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
				a.propagationStopped || c(a)
			}), d) : e.call(a, b, c, d)
		}), "function" == typeof a.onclick && (d = a.onclick, a.addEventListener("click", function(a) {
			d(a)
		}, !1), a.onclick = null)
	}
}! function(a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	function c(a) {
		var b = a.length,
			c = _.type(a);
		return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	function d(a, b, c) {
		if (_.isFunction(b)) return _.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return _.grep(a, function(a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (hb.test(b)) return _.filter(b, a, c);
			b = _.filter(b, a)
		}
		return _.grep(a, function(a) {
			return U.call(b, a) >= 0 !== c
		})
	}

	function e(a, b) {
		for (;
			(a = a[b]) && 1 !== a.nodeType;);
		return a
	}

	function f(a) {
		var b = ob[a] = {};
		return _.each(a.match(nb) || [], function(a, c) {
			b[c] = !0
		}), b
	}

	function g() {
		Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
	}

	function h() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = _.expando + Math.random()
	}

	function i(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType)
			if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c
				} catch (e) {}
				sb.set(a, b, c)
			} else c = void 0;
		return c
	}

	function j() {
		return !0
	}

	function k() {
		return !1
	}

	function l() {
		try {
			return Z.activeElement
		} catch (a) {}
	}

	function m(a, b) {
		return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function n(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function o(a) {
		var b = Kb.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function p(a, b) {
		for (var c = 0, d = a.length; d > c; c++) rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
	}

	function q(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for (e in j)
					for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
			}
			sb.hasData(a) && (h = sb.access(a), i = _.extend({}, h), sb.set(b, i))
		}
	}

	function r(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
	}

	function s(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}

	function t(b, c) {
		var d, e = _(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
		return e.detach(), f
	}

	function u(a) {
		var b = Z,
			c = Ob[a];
		return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), c
	}

	function v(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function w(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}

	function x(a, b) {
		if (b in a) return b;
		for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--;)
			if (b = Xb[e] + c, b in a) return b;
		return d
	}

	function y(a, b, c) {
		var d = Tb.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function z(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wb[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
		return g
	}

	function A(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = Rb(a),
			g = "border-box" === _.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e)) return e;
			d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function B(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function C(a, b, c, d, e) {
		return new C.prototype.init(a, b, c, d, e)
	}

	function D() {
		return setTimeout(function() {
			Yb = void 0
		}), Yb = _.now()
	}

	function E(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wb[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function F(a, b, c) {
		for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function G(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this,
			m = {},
			n = a.style,
			o = a.nodeType && xb(a),
			p = rb.get(a, "fxshow");
		c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
			h.unqueued || i()
		}), h.unqueued++, l.always(function() {
			l.always(function() {
				h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
			n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], $b.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
					if ("show" !== e || !p || void 0 === p[d]) continue;
					o = !0
				}
				m[d] = p && p[d] || _.style(a, d)
			} else j = void 0;
		if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
		else {
			p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
				_(a).hide()
			}), l.done(function() {
				var b;
				rb.remove(a, "fxshow");
				for (b in m) _.style(a, b, m[b])
			});
			for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function H(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function I(a, b, c) {
		var d, e, f = 0,
			g = bc.length,
			h = _.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: _.extend({}, b),
				opts: _.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: Yb || D(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (H(k, j.opts.specialEasing); g > f; f++)
			if (d = bc[f].call(j, a, k, j.opts)) return d;
		return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	function J(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(nb) || [];
			if (_.isFunction(c))
				for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function K(a, b, c, d) {
		function e(h) {
			var i;
			return f[h] = !0, _.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}), i
		}
		var f = {},
			g = a === vc;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}

	function L(a, b) {
		var c, d, e = _.ajaxSettings.flatOptions || {};
		for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && _.extend(!0, a, d), a
	}

	function M(a, b, c) {
		for (var d, e, f, g, h = a.contents, i = a.dataTypes;
			"*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d)
			for (e in h)
				if (h[e] && h[e].test(d)) {
					i.unshift(e);
					break
				}
		if (i[0] in c) f = i[0];
		else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function N(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}

	function O(a, b, c, d) {
		var e;
		if (_.isArray(b)) _.each(b, function(b, e) {
			c || zc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== _.type(b)) d(a, b);
		else
			for (e in b) O(a + "[" + e + "]", b[e], c, d)
	}

	function P(a) {
		return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	var Q = [],
		R = Q.slice,
		S = Q.concat,
		T = Q.push,
		U = Q.indexOf,
		V = {},
		W = V.toString,
		X = V.hasOwnProperty,
		Y = {},
		Z = a.document,
		$ = "2.1.1",
		_ = function(a, b) {
			return new _.fn.init(a, b)
		},
		ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		bb = /^-ms-/,
		cb = /-([\da-z])/gi,
		db = function(a, b) {
			return b.toUpperCase()
		};
	_.fn = _.prototype = {
		jquery: $,
		constructor: _,
		selector: "",
		length: 0,
		toArray: function() {
			return R.call(this)
		},
		get: function(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
		},
		pushStack: function(a) {
			var b = _.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function(a, b) {
			return _.each(this, a, b)
		},
		map: function(a) {
			return this.pushStack(_.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(R.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: T,
		sort: Q.sort,
		splice: Q.splice
	}, _.extend = _.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (a = arguments[h]))
				for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, _.extend({
		expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		noop: function() {},
		isFunction: function(a) {
			return "function" === _.type(a)
		},
		isArray: Array.isArray,
		isWindow: function(a) {
			return null != a && a === a.window
		},
		isNumeric: function(a) {
			return !_.isArray(a) && a - parseFloat(a) >= 0
		},
		isPlainObject: function(a) {
			return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
		},
		globalEval: function(a) {
			var b, c = eval;
			a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function(a) {
			return a.replace(bb, "ms-").replace(cb, db)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b, d) {
			var e, f = 0,
				g = a.length,
				h = c(a);
			if (d) {
				if (h)
					for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
				else
					for (f in a)
						if (e = b.apply(a[f], d), e === !1) break
			} else if (h)
				for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
			else
				for (f in a)
					if (e = b.call(a[f], f, a[f]), e === !1) break;
			return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(ab, "")
		},
		makeArray: function(a, b) {
			var d = b || [];
			return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
		},
		inArray: function(a, b, c) {
			return null == b ? -1 : U.call(b, a, c)
		},
		merge: function(a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function(a, b, d) {
			var e, f = 0,
				g = a.length,
				h = c(a),
				i = [];
			if (h)
				for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
			else
				for (f in a) e = b(a[f], f, d), null != e && i.push(e);
			return S.apply([], i)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, d, e;
			return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
				return a.apply(b || this, d.concat(R.call(arguments)))
			}, e.guid = a.guid = a.guid || _.guid++, e) : void 0
		},
		now: Date.now,
		support: Y
	}), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
		V["[object " + b + "]"] = b.toLowerCase()
	});
	var eb = function(a) {
		function b(a, b, c, d) {
			var e, f, g, h, i, j, l, n, o, p;
			if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
			if (1 !== (h = b.nodeType) && 9 !== h) return [];
			if (I && !d) {
				if (e = sb.exec(a))
					if (g = e[1]) {
						if (9 === h) {
							if (f = b.getElementById(g), !f || !f.parentNode) return c;
							if (f.id === g) return c.push(f), c
						} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
					} else {
						if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
						if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
					}
				if (v.qsa && (!J || !J.test(a))) {
					if (n = l = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
						for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
						o = tb.test(a) && k(b.parentNode) || b, p = j.join(",")
					}
					if (p) try {
						return _.apply(c, o.querySelectorAll(p)), c
					} catch (q) {} finally {
						l || b.removeAttribute("id")
					}
				}
			}
			return B(a.replace(ib, "$1"), b, c, d)
		}

		function c() {
			function a(c, d) {
				return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
			}
			var b = [];
			return a
		}

		function d(a) {
			return a[N] = !0, a
		}

		function e(a) {
			var b = G.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function f(a, b) {
			for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
		}

		function g(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
			if (d) return d;
			if (c)
				for (; c = c.nextSibling;)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function h(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function i(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function j(a) {
			return d(function(b) {
				return b = +b, d(function(c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function k(a) {
			return a && typeof a.getElementsByTagName !== V && a
		}

		function l() {}

		function m(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function n(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = Q++;
			return b.first ? function(b, c, f) {
				for (; b = b[d];)
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function(b, c, g) {
				var h, i, j = [P, f];
				if (g) {
					for (; b = b[d];)
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					for (; b = b[d];)
						if (1 === b.nodeType || e) {
							if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g)) return !0
						}
			}
		}

		function o(a) {
			return a.length > 1 ? function(b, c, d) {
				for (var e = a.length; e--;)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function p(a, c, d) {
			for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
			return d
		}

		function q(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function r(a, b, c, e, f, g) {
			return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					r = d || p(b || "*", h.nodeType ? [h] : h, []),
					s = !a || !d && b ? r : q(r, m, a, h, i),
					t = c ? f || (d ? a : o || e) ? [] : g : s;
				if (c && c(s, t, h, i), e)
					for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
				if (d) {
					if (f || a) {
						if (f) {
							for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
							f(null, t = [], j, i)
						}
						for (k = t.length; k--;)(l = t[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
					}
				} else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : _.apply(g, t)
			})
		}

		function s(a) {
			for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
					return a === b
				}, g, !0), j = n(function(a) {
					return bb.call(b, a) > -1
				}, g, !0), k = [function(a, c, d) {
					return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
				}]; e > h; h++)
				if (c = w.relative[a[h].type]) k = [n(o(k), c)];
				else {
					if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
						for (d = ++h; e > d && !w.relative[a[d].type]; d++);
						return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
							value: " " === a[h - 2].type ? "*" : ""
						})).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
					}
					k.push(c)
				}
			return o(k)
		}

		function t(a, c) {
			var e = c.length > 0,
				f = a.length > 0,
				g = function(d, g, h, i, j) {
					var k, l, m, n = 0,
						o = "0",
						p = d && [],
						r = [],
						s = C,
						t = d || f && w.find.TAG("*", j),
						u = P += null == s ? 1 : Math.random() || .1,
						v = t.length;
					for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
						if (f && k) {
							for (l = 0; m = a[l++];)
								if (m(k, g, h)) {
									i.push(k);
									break
								}
							j && (P = u)
						}
						e && ((k = !m && k) && n--, d && p.push(k))
					}
					if (n += o, e && o !== n) {
						for (l = 0; m = c[l++];) m(p, r, g, h);
						if (d) {
							if (n > 0)
								for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
							r = q(r)
						}
						_.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
					}
					return j && (P = u, C = s), p
				};
			return e ? d(g) : g
		}
		var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
			O = a.document,
			P = 0,
			Q = 0,
			R = c(),
			S = c(),
			T = c(),
			U = function(a, b) {
				return a === b && (E = !0), 0
			},
			V = "undefined",
			W = 1 << 31,
			X = {}.hasOwnProperty,
			Y = [],
			Z = Y.pop,
			$ = Y.push,
			_ = Y.push,
			ab = Y.slice,
			bb = Y.indexOf || function(a) {
				for (var b = 0, c = this.length; c > b; b++)
					if (this[b] === a) return b;
				return -1
			},
			cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			db = "[\\x20\\t\\r\\n\\f]",
			eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			fb = eb.replace("w", "w#"),
			gb = "\\[" + db + "*(" + eb + ")(?:" + db + "*([*^$|!~]?=)" + db + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fb + "))|)" + db + "*\\]",
			hb = ":(" + eb + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + gb + ")*)|.*)\\)|)",
			ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$", "g"),
			jb = new RegExp("^" + db + "*," + db + "*"),
			kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"),
			lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]", "g"),
			mb = new RegExp(hb),
			nb = new RegExp("^" + fb + "$"),
			ob = {
				ID: new RegExp("^#(" + eb + ")"),
				CLASS: new RegExp("^\\.(" + eb + ")"),
				TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + gb),
				PSEUDO: new RegExp("^" + hb),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + cb + ")$", "i"),
				needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)", "i")
			},
			pb = /^(?:input|select|textarea|button)$/i,
			qb = /^h\d$/i,
			rb = /^[^{]+\{\s*\[native \w/,
			sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			tb = /[+~]/,
			ub = /'|\\/g,
			vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)", "ig"),
			wb = function(a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			};
		try {
			_.apply(Y = ab.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
		} catch (xb) {
			_ = {
				apply: Y.length ? function(a, b) {
					$.apply(a, ab.call(b))
				} : function(a, b) {
					for (var c = a.length, d = 0; a[c++] = b[d++];);
					a.length = c - 1
				}
			}
		}
		v = b.support = {}, y = b.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, F = b.setDocument = function(a) {
			var b, c = a ? a.ownerDocument || a : O,
				d = c.defaultView;
			return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !y(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
				F()
			}, !1) : d.attachEvent && d.attachEvent("onunload", function() {
				F()
			})), v.attributes = e(function(a) {
				return a.className = "i", !a.getAttribute("className")
			}), v.getElementsByTagName = e(function(a) {
				return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
			}), v.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
				return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
			}), v.getById = e(function(a) {
				return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
			}), v.getById ? (w.find.ID = function(a, b) {
				if (typeof b.getElementById !== V && I) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, w.filter.ID = function(a) {
				var b = a.replace(vb, wb);
				return function(a) {
					return a.getAttribute("id") === b
				}
			}) : (delete w.find.ID, w.filter.ID = function(a) {
				var b = a.replace(vb, wb);
				return function(a) {
					var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), w.find.TAG = v.getElementsByTagName ? function(a, b) {
				return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
			} : function(a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					for (; c = f[e++];) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, w.find.CLASS = v.getElementsByClassName && function(a, b) {
				return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
			}, K = [], J = [], (v.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
				a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
			}), e(function(a) {
				var b = c.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
			})), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
				v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", hb)
			}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function(a, b) {
				if (b)
					for (; b = b.parentNode;)
						if (b === a) return !0;
				return !1
			}, U = b ? function(a, b) {
				if (a === b) return E = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
			} : function(a, b) {
				if (a === b) return E = !0, 0;
				var d, e = 0,
					f = a.parentNode,
					h = b.parentNode,
					i = [a],
					j = [b];
				if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
				if (f === h) return g(a, b);
				for (d = a; d = d.parentNode;) i.unshift(d);
				for (d = b; d = d.parentNode;) j.unshift(d);
				for (; i[e] === j[e];) e++;
				return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
			}, c) : G
		}, b.matches = function(a, c) {
			return b(a, null, null, c)
		}, b.matchesSelector = function(a, c) {
			if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
				var d = L.call(a, c);
				if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return b(c, G, null, [a]).length > 0
		}, b.contains = function(a, b) {
			return (a.ownerDocument || a) !== G && F(a), M(a, b)
		}, b.attr = function(a, b) {
			(a.ownerDocument || a) !== G && F(a);
			var c = w.attrHandle[b.toLowerCase()],
				d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
			return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}, b.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, b.uniqueSort = function(a) {
			var b, c = [],
				d = 0,
				e = 0;
			if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
				for (; b = a[e++];) b === a[e] && (d = c.push(e));
				for (; d--;) a.splice(c[d], 1)
			}
			return D = null, a
		}, x = b.getText = function(a) {
			var b, c = "",
				d = 0,
				e = a.nodeType;
			if (e) {
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
				} else if (3 === e || 4 === e) return a.nodeValue
			} else
				for (; b = a[d++];) c += x(b);
			return c
		}, w = b.selectors = {
			cacheLength: 50,
			createPseudo: d,
			match: ob,
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
				ATTR: function(a) {
					return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
				},
				PSEUDO: function(a) {
					var b, c = !a[6] && a[2];
					return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function(a) {
					var b = a.replace(vb, wb).toLowerCase();
					return "*" === a ? function() {
						return !0
					} : function(a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function(a) {
					var b = R[a + " "];
					return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
						return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
					})
				},
				ATTR: function(a, c, d) {
					return function(e) {
						var f = b.attr(e, a);
						return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
					}
				},
				CHILD: function(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function(a) {
						return !!a.parentNode
					} : function(b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if (q) {
							if (f) {
								for (; p;) {
									for (l = b; l = l[p];)
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [P, n, m];
										break
									}
							} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
							else
								for (;
									(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function(a, c) {
					var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
					return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
						for (var d, e = f(a, c), g = e.length; g--;) d = bb.call(a, e[g]), a[d] = !(b[d] = e[g])
					}) : function(a) {
						return f(a, 0, e)
					}) : f
				}
			},
			pseudos: {
				not: d(function(a) {
					var b = [],
						c = [],
						e = A(a.replace(ib, "$1"));
					return e[N] ? d(function(a, b, c, d) {
						for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function(a, d, f) {
						return b[0] = a, e(b, null, f, c), !c.pop()
					}
				}),
				has: d(function(a) {
					return function(c) {
						return b(a, c).length > 0
					}
				}),
				contains: d(function(a) {
					return function(b) {
						return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
					}
				}),
				lang: d(function(a) {
					return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(),
						function(b) {
							var c;
							do
								if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function(b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function(a) {
					return a === H
				},
				focus: function(a) {
					return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function(a) {
					return a.disabled === !1
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function(a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function(a) {
					return !w.pseudos.empty(a)
				},
				header: function(a) {
					return qb.test(a.nodeName)
				},
				input: function(a) {
					return pb.test(a.nodeName)
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function(a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: j(function() {
					return [0]
				}),
				last: j(function(a, b) {
					return [b - 1]
				}),
				eq: j(function(a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: j(function(a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: j(function(a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: j(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: j(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for (u in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[u] = h(u);
		for (u in {
				submit: !0,
				reset: !0
			}) w.pseudos[u] = i(u);
		return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
			var d, e, f, g, h, i, j, k = S[a + " "];
			if (k) return c ? 0 : k.slice(0);
			for (h = a, i = [], j = w.preFilter; h;) {
				(!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({
					value: d,
					type: e[0].replace(ib, " ")
				}), h = h.slice(d.length));
				for (g in w.filter) !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
					value: d,
					type: g,
					matches: e
				}), h = h.slice(d.length));
				if (!d) break
			}
			return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
		}, A = b.compile = function(a, b) {
			var c, d = [],
				e = [],
				f = T[a + " "];
			if (!f) {
				for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
				f = T(a, t(e, d)), f.selector = a
			}
			return f
		}, B = b.select = function(a, b, c, d) {
			var e, f, g, h, i, j = "function" == typeof a && a,
				l = !d && z(a = j.selector || a);
			if (c = c || [], 1 === l.length) {
				if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
					if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
					j && (b = b.parentNode), a = a.slice(f.shift().value.length)
				}
				for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
					if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
						if (f.splice(e, 1), a = d.length && m(f), !a) return _.apply(c, d), c;
						break
					}
			}
			return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
		}, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
			return 1 & a.compareDocumentPosition(G.createElement("div"))
		}), e(function(a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || f("type|href|height|width", function(a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), v.attributes && e(function(a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || f("value", function(a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), e(function(a) {
			return null == a.getAttribute("disabled")
		}) || f(cb, function(a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), b
	}(a);
	_.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
	var fb = _.expr.match.needsContext,
		gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		hb = /^.[^:#\[\.,]*$/;
	_.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
			return 1 === a.nodeType
		}))
	}, _.fn.extend({
		find: function(a) {
			var b, c = this.length,
				d = [],
				e = this;
			if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
				for (b = 0; c > b; b++)
					if (_.contains(e[b], this)) return !0
			}));
			for (b = 0; c > b; b++) _.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
		},
		filter: function(a) {
			return this.pushStack(d(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(d(this, a || [], !0))
		},
		is: function(a) {
			return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
		}
	});
	var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		kb = _.fn.init = function(a, b) {
			var c, d;
			if (!a) return this;
			if ("string" == typeof a) {
				if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
				if (c[1]) {
					if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), gb.test(c[1]) && _.isPlainObject(b))
						for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
		};
	kb.prototype = _.fn, ib = _(Z);
	var lb = /^(?:parents|prev(?:Until|All))/,
		mb = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	_.extend({
		dir: function(a, b, c) {
			for (var d = [], e = void 0 !== c;
				(a = a[b]) && 9 !== a.nodeType;)
				if (1 === a.nodeType) {
					if (e && _(a).is(c)) break;
					d.push(a)
				}
			return d
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), _.fn.extend({
		has: function(a) {
			var b = _(a, this),
				c = b.length;
			return this.filter(function() {
				for (var a = 0; c > a; a++)
					if (_.contains(this, b[a])) return !0
			})
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? _.unique(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), _.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return _.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return _.dir(a, "parentNode", c)
		},
		next: function(a) {
			return e(a, "nextSibling")
		},
		prev: function(a) {
			return e(a, "previousSibling")
		},
		nextAll: function(a) {
			return _.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return _.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return _.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return _.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return _.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return _.sibling(a.firstChild)
		},
		contents: function(a) {
			return a.contentDocument || _.merge([], a.childNodes)
		}
	}, function(a, b) {
		_.fn[a] = function(c, d) {
			var e = _.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var nb = /\S+/g,
		ob = {};
	_.Callbacks = function(a) {
		a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
		var b, c, d, e, g, h, i = [],
			j = !a.once && [],
			k = function(f) {
				for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
					if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
						b = !1;
						break
					}
				d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
			},
			l = {
				add: function() {
					if (i) {
						var c = i.length;
						! function f(b) {
							_.each(b, function(b, c) {
								var d = _.type(c);
								"function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
							})
						}(arguments), d ? g = i.length : b && (e = c, k(b))
					}
					return this
				},
				remove: function() {
					return i && _.each(arguments, function(a, b) {
						for (var c;
							(c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
					}), this
				},
				has: function(a) {
					return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
				},
				empty: function() {
					return i = [], g = 0, this
				},
				disable: function() {
					return i = j = b = void 0, this
				},
				disabled: function() {
					return !i
				},
				lock: function() {
					return j = void 0, b || l.disable(), this
				},
				locked: function() {
					return !j
				},
				fireWith: function(a, b) {
					return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
				},
				fire: function() {
					return l.fireWith(this, arguments), this
				},
				fired: function() {
					return !!c
				}
			};
		return l
	}, _.extend({
		Deferred: function(a) {
			var b = [
					["resolve", "done", _.Callbacks("once memory"), "resolved"],
					["reject", "fail", _.Callbacks("once memory"), "rejected"],
					["notify", "progress", _.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return _.Deferred(function(c) {
							_.each(b, function(b, f) {
								var g = _.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = g && g.apply(this, arguments);
									a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? _.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, _.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b, c, d, e = 0,
				f = R.call(arguments),
				g = f.length,
				h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
				i = 1 === h ? a : _.Deferred(),
				j = function(a, c, d) {
					return function(e) {
						c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
					}
				};
			if (g > 1)
				for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f), i.promise()
		}
	});
	var pb;
	_.fn.ready = function(a) {
		return _.ready.promise().done(a), this
	}, _.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? _.readyWait++ : _.ready(!0)
		},
		ready: function(a) {
			(a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
		}
	}), _.ready.promise = function(b) {
		return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pb.promise(b)
	}, _.ready.promise();
	var qb = _.access = function(a, b, c, d, e, f, g) {
		var h = 0,
			i = a.length,
			j = null == c;
		if ("object" === _.type(c)) {
			e = !0;
			for (h in c) _.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
				return j.call(_(a), c)
			})), b))
			for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	_.acceptData = function(a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	}, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
		key: function(a) {
			if (!h.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if (!c) {
				c = h.uid++;
				try {
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				} catch (d) {
					b[this.expando] = c, _.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function(a, b, c) {
			var d, e = this.key(a),
				f = this.cache[e];
			if ("string" == typeof b) f[b] = c;
			else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
			else
				for (d in b) f[d] = b[d];
			return f
		},
		get: function(a, b) {
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access: function(a, b, c) {
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function(a, b) {
			var c, d, e, f = this.key(a),
				g = this.cache[f];
			if (void 0 === b) this.cache[f] = {};
			else {
				_.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(nb) || [])), c = d.length;
				for (; c--;) delete g[d[c]]
			}
		},
		hasData: function(a) {
			return !_.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard: function(a) {
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var rb = new h,
		sb = new h,
		tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		ub = /([A-Z])/g;
	_.extend({
		hasData: function(a) {
			return sb.hasData(a) || rb.hasData(a)
		},
		data: function(a, b, c) {
			return sb.access(a, b, c)
		},
		removeData: function(a, b) {
			sb.remove(a, b)
		},
		_data: function(a, b, c) {
			return rb.access(a, b, c)
		},
		_removeData: function(a, b) {
			rb.remove(a, b)
		}
	}), _.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
					for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
					rb.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				sb.set(this, a)
			}) : qb(this, function(b) {
				var c, d = _.camelCase(a);
				if (f && void 0 === b) {
					if (c = sb.get(f, a), void 0 !== c) return c;
					if (c = sb.get(f, d), void 0 !== c) return c;
					if (c = i(f, d, void 0), void 0 !== c) return c
				} else this.each(function() {
					var c = sb.get(this, d);
					sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function(a) {
			return this.each(function() {
				sb.remove(this, a)
			})
		}
	}), _.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = _.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = _._queueHooks(a, b),
				g = function() {
					_.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return rb.get(a, c) || rb.access(a, c, {
				empty: _.Callbacks("once memory").add(function() {
					rb.remove(a, [b + "queue", c])
				})
			})
		}
	}), _.fn.extend({
		queue: function(a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
				var c = _.queue(this, a, b);
				_._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				_.dequeue(this, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			var c, d = 1,
				e = _.Deferred(),
				f = this,
				g = this.length,
				h = function() {
					--d || e.resolveWith(f, [f])
				};
			for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = rb.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		wb = ["Top", "Right", "Bottom", "Left"],
		xb = function(a, b) {
			return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
		},
		yb = /^(?:checkbox|radio)$/i;
	! function() {
		var a = Z.createDocumentFragment(),
			b = a.appendChild(Z.createElement("div")),
			c = Z.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var zb = "undefined";
	Y.focusinBubbles = "onfocusin" in a;
	var Ab = /^key/,
		Bb = /^(?:mouse|pointer|contextmenu)|click/,
		Cb = /^(?:focusinfocus|focusoutblur)$/,
		Db = /^([^.]*)(?:\.(.+)|)$/;
	_.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
			if (q)
				for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
						return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
					}), b = (b || "").match(nb) || [""], j = b.length; j--;) h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
					type: n,
					origType: p,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && _.expr.match.needsContext.test(e),
					namespace: o.join(".")
				}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
			if (q && (i = q.events)) {
				for (b = (b || "").match(nb) || [""], j = b.length; j--;)
					if (h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
					} else
						for (n in i) _.event.remove(a, n + b[j], c, d, !0);
				_.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"))
			}
		},
		trigger: function(b, c, d, e) {
			var f, g, h, i, j, k, l, m = [d || Z],
				n = X.call(b, "type") ? b.type : b,
				o = X.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
				if (!e && !l.noBubble && !_.isWindow(d)) {
					for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
					h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
				}
				for (f = 0;
					(g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
				return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
			}
		},
		dispatch: function(a) {
			a = _.event.fix(a);
			var b, c, d, e, f, g = [],
				h = R.call(arguments),
				i = (rb.get(this, "events") || {})[a.type] || [],
				j = _.event.special[a.type] || {};
			if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
				for (g = _.event.handlers.call(this, a, i), b = 0;
					(e = g[b++]) && !a.isPropagationStopped();)
					for (a.currentTarget = e.elem, c = 0;
						(f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
				return j.postDispatch && j.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i !== this; i = i.parentNode || this)
					if (i.disabled !== !0 || "click" !== a.type) {
						for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
						d.length && g.push({
							elem: i,
							handlers: d
						})
					}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var c, d, e, f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		fix: function(a) {
			if (a[_.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
			return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== l() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === l() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(a) {
					return _.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = _.extend(new _.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, _.removeEvent = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, _.Event = function(a, b) {
		return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
	}, _.Event.prototype = {
		isDefaultPrevented: k,
		isPropagationStopped: k,
		isImmediatePropagationStopped: k,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, _.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		_.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), Y.focusinBubbles || _.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
			_.event.simulate(b, a.target, _.event.fix(a), !0)
		};
		_.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = rb.access(d, b);
				e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = rb.access(d, b) - 1;
				e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b))
			}
		}
	}), _.fn.extend({
		on: function(a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (g in a) this.on(g, b, c, a[g], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
			else if (!d) return this;
			return 1 === e && (f = d, d = function(a) {
				return _().off(a), f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
				_.event.add(this, a, d, c, b)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
				_.event.remove(this, a, c, b)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				_.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? _.event.trigger(a, b, c, !0) : void 0
		}
	});
	var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Fb = /<([\w:]+)/,
		Gb = /<|&#?\w+;/,
		Hb = /<(?:script|style|link)/i,
		Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Jb = /^$|\/(?:java|ecma)script/i,
		Kb = /^true\/(.*)/,
		Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Mb = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, _.extend({
		clone: function(a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = _.contains(a.ownerDocument, a);
			if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
				for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
			if (b)
				if (c)
					for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
				else q(a, h);
			return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
		},
		buildFragment: function(a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
				if (e = a[m], e || 0 === e)
					if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
					else if (Gb.test(e)) {
				for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
				_.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
			} else l.push(b.createTextNode(e));
			for (k.textContent = "", m = 0; e = l[m++];)
				if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
					for (j = 0; e = f[j++];) Jb.test(e.type || "") && c.push(e);
			return k
		},
		cleanData: function(a) {
			for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
					if (b.events)
						for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
					rb.cache[e] && delete rb.cache[e]
				}
				delete sb.cache[c[sb.expando]]
			}
		}
	}), _.fn.extend({
		text: function(a) {
			return qb(this, function(a) {
				return void 0 === a ? _.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = m(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = m(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function(a, b) {
			for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return _.clone(this, a, b)
			})
		},
		html: function(a) {
			return qb(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Eb, "<$1></$2>");
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = arguments[0];
			return this.domManip(arguments, function(b) {
				a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b) {
			a = S.apply([], a);
			var c, d, e, f, g, h, i = 0,
				j = this.length,
				k = this,
				l = j - 1,
				m = a[0],
				p = _.isFunction(m);
			if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m)) return this.each(function(c) {
				var d = k.eq(c);
				p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
			});
			if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
				if (f)
					for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
			}
			return this
		}
	}), _.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		_.fn[a] = function(a) {
			for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var Nb, Ob = {},
		Pb = /^margin/,
		Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"),
		Rb = function(a) {
			return a.ownerDocument.defaultView.getComputedStyle(a, null)
		};
	! function() {
		function b() {
			g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
			var b = a.getComputedStyle(g, null);
			c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
		}
		var c, d, e = Z.documentElement,
			f = Z.createElement("div"),
			g = Z.createElement("div");
		g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
			pixelPosition: function() {
				return b(), c
			},
			boxSizingReliable: function() {
				return null == d && b(), d
			},
			reliableMarginRight: function() {
				var b, c = g.appendChild(Z.createElement("div"));
				return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), b
			}
		}))
	}(), _.swap = function(a, b, c, d) {
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var Sb = /^(none|table(?!-c[ea]).+)/,
		Tb = new RegExp("^(" + vb + ")(.*)$", "i"),
		Ub = new RegExp("^([+-])=(" + vb + ")", "i"),
		Vb = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Wb = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Xb = ["Webkit", "O", "Moz", "ms"];
	_.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = v(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = _.camelCase(b),
					i = a.style;
				return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = _.camelCase(b);
			return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
		}
	}), _.each(["height", "width"], function(a, b) {
		_.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
					return A(a, b, d)
				}) : A(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && Rb(a);
				return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
		return b ? _.swap(a, {
			display: "inline-block"
		}, v, [a, "marginRight"]) : void 0
	}), _.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		_.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Pb.test(a) || (_.cssHooks[a + b].set = y)
	}), _.fn.extend({
		css: function(a, b) {
			return qb(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if (_.isArray(b)) {
					for (d = Rb(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function() {
			return B(this, !0)
		},
		hide: function() {
			return B(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				xb(this) ? _(this).show() : _(this).hide()
			})
		}
	}), _.Tween = C, C.prototype = {
		constructor: C,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = C.propHooks[this.prop];
			return a && a.get ? a.get(this) : C.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = C.propHooks[this.prop];
			return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
		}
	}, C.prototype.init.prototype = C.prototype, C.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function(a) {
				_.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, _.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, _.fx = C.prototype.init, _.fx.step = {};
	var Yb, Zb, $b = /^(?:toggle|show|hide)$/,
		_b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"),
		ac = /queueHooks$/,
		bc = [G],
		cc = {
			"*": [function(a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = _b.exec(b),
					f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
					g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};
	_.Animation = _.extend(I, {
			tweener: function(a, b) {
				_.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b)
			},
			prefilter: function(a, b) {
				b ? bc.unshift(a) : bc.push(a)
			}
		}), _.speed = function(a, b, c) {
			var d = a && "object" == typeof a ? _.extend({}, a) : {
				complete: c || !c && b || _.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !_.isFunction(b) && b
			};
			return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
				_.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
			}, d
		}, _.fn.extend({
			fadeTo: function(a, b, c, d) {
				return this.filter(xb).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function(a, b, c, d) {
				var e = _.isEmptyObject(a),
					f = _.speed(b, c, d),
					g = function() {
						var b = I(this, _.extend({}, a), f);
						(e || rb.get(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function(a, b, c) {
				var d = function(a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = _.timers,
						g = rb.get(this);
					if (e) g[e] && g[e].stop && d(g[e]);
					else
						for (e in g) g[e] && g[e].stop && ac.test(e) && d(g[e]);
					for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					(b || !c) && _.dequeue(this, a)
				})
			},
			finish: function(a) {
				return a !== !1 && (a = a || "fx"), this.each(function() {
					var b, c = rb.get(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = _.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), _.each(["toggle", "show", "hide"], function(a, b) {
			var c = _.fn[b];
			_.fn[b] = function(a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
			}
		}), _.each({
			slideDown: E("show"),
			slideUp: E("hide"),
			slideToggle: E("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(a, b) {
			_.fn[a] = function(a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), _.timers = [], _.fx.tick = function() {
			var a, b = 0,
				c = _.timers;
			for (Yb = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
			c.length || _.fx.stop(), Yb = void 0
		}, _.fx.timer = function(a) {
			_.timers.push(a), a() ? _.fx.start() : _.timers.pop()
		}, _.fx.interval = 13, _.fx.start = function() {
			Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
		}, _.fx.stop = function() {
			clearInterval(Zb), Zb = null
		}, _.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, _.fn.delay = function(a, b) {
			return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		function() {
			var a = Z.createElement("input"),
				b = Z.createElement("select"),
				c = b.appendChild(Z.createElement("option"));
			a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
		}();
	var dc, ec, fc = _.expr.attrHandle;
	_.fn.extend({
		attr: function(a, b) {
			return qb(this, _.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				_.removeAttr(this, a)
			})
		}
	}), _.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(nb);
			if (f && 1 === a.nodeType)
				for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), ec = {
		set: function(a, b, c) {
			return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = fc[b] || _.find.attr;
		fc[b] = function(a, b, d) {
			var e, f;
			return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f), e
		}
	});
	var gc = /^(?:input|select|textarea|button)$/i;
	_.fn.extend({
		prop: function(a, b) {
			return qb(this, _.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return this.each(function() {
				delete this[_.propFix[a] || a]
			})
		}
	}), _.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(a, b, c) {
			var d, e, f, g = a.nodeType;
			return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}), Y.optSelected || (_.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		}
	}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		_.propFix[this.toLowerCase()] = this
	});
	var hc = /[\t\r\n\f]/g;
	_.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h = "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (_.isFunction(a)) return this.each(function(b) {
				_(this).addClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(nb) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
						for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = _.trim(d), c.className !== g && (c.className = g)
					}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (_.isFunction(a)) return this.each(function(b) {
				_(this).removeClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(nb) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
						for (f = 0; e = b[f++];)
							for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
						g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
					}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
				_(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function() {
				if ("string" === c)
					for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				else(c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	});
	var ic = /\r/g;
	_.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0];
			return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
				var e;
				1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
					return null == a ? "" : a + ""
				})), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
			})) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)) : void 0
		}
	}), _.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = _.find.attr(a, "value");
					return null != b ? b : _.trim(_.text(a))
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
							if (b = _(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function(a, b) {
					for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), _.each(["radio", "checkbox"], function() {
		_.valHooks[this] = {
			set: function(a, b) {
				return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
			}
		}, Y.checkOn || (_.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		_.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), _.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var jc = _.now(),
		kc = /\?/;
	_.parseJSON = function(a) {
		return JSON.parse(a + "")
	}, _.parseXML = function(a) {
		var b, c;
		if (!a || "string" != typeof a) return null;
		try {
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		} catch (d) {
			b = void 0
		}
		return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
	};
	var lc, mc, nc = /#.*$/,
		oc = /([?&])_=[^&]*/,
		pc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rc = /^(?:GET|HEAD)$/,
		sc = /^\/\//,
		tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		uc = {},
		vc = {},
		wc = "*/".concat("*");
	try {
		mc = location.href
	} catch (xc) {
		mc = Z.createElement("a"), mc.href = "", mc = mc.href
	}
	lc = tc.exec(mc.toLowerCase()) || [], _.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: mc,
			type: "GET",
			isLocal: qc.test(lc[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": wc,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": _.parseJSON,
				"text xml": _.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
		},
		ajaxPrefilter: J(uc),
		ajaxTransport: J(vc),
		ajax: function(a, b) {
			function c(a, b, c, g) {
				var i, k, r, s, u, w = b;
				2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
				m = l.context || l,
				n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
				o = _.Deferred(),
				p = _.Callbacks("once memory"),
				q = l.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === t) {
							if (!g)
								for (g = {}; b = pc.exec(f);) g[b[1].toLowerCase()] = b[2];
							b = g[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === t ? f : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function(a) {
						return t || (l.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a)
							if (2 > t)
								for (b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function(a) {
						var b = a || u;
						return d && d.abort(b), c(0, b), this
					}
				};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || mc) + "").replace(nc, "").replace(sc, lc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = tc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === lc[1] && i[2] === lc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (lc[3] || ("http:" === lc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(uc, l, b, v), 2 === t) return v;
			j = l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !rc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = oc.test(e) ? e.replace(oc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : l.accepts["*"]);
			for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
			if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for (k in {
					success: 1,
					error: 1,
					complete: 1
				}) v[k](l[k]);
			if (d = K(vc, l, b, v)) {
				v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
					v.abort("timeout")
				}, l.timeout));
				try {
					t = 1, d.send(r, c)
				} catch (w) {
					if (!(2 > t)) throw w;
					c(-1, w)
				}
			} else c(-1, "No Transport");
			return v
		},
		getJSON: function(a, b, c) {
			return _.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return _.get(a, void 0, b, "script")
		}
	}), _.each(["get", "post"], function(a, b) {
		_[b] = function(a, c, d, e) {
			return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		_.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), _._evalUrl = function(a) {
		return _.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, _.fn.extend({
		wrapAll: function(a) {
			var b;
			return _.isFunction(a) ? this.each(function(b) {
				_(this).wrapAll(a.call(this, b))
			}) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
				for (var a = this; a.firstElementChild;) a = a.firstElementChild;
				return a
			}).append(this)), this)
		},
		wrapInner: function(a) {
			return this.each(_.isFunction(a) ? function(b) {
				_(this).wrapInner(a.call(this, b))
			} : function() {
				var b = _(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = _.isFunction(a);
			return this.each(function(c) {
				_(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				_.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
			}).end()
		}
	}), _.expr.filters.hidden = function(a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, _.expr.filters.visible = function(a) {
		return !_.expr.filters.hidden(a)
	};
	var yc = /%20/g,
		zc = /\[\]$/,
		Ac = /\r?\n/g,
		Bc = /^(?:submit|button|image|reset|file)$/i,
		Cc = /^(?:input|select|textarea|keygen)/i;
	_.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
			e(this.name, this.value)
		});
		else
			for (c in a) O(c, a[c], b, e);
		return d.join("&").replace(yc, "+")
	}, _.fn.extend({
		serialize: function() {
			return _.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = _.prop(this, "elements");
				return a ? _.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !_(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !yb.test(a))
			}).map(function(a, b) {
				var c = _(this).val();
				return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(Ac, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(Ac, "\r\n")
				}
			}).get()
		}
	}), _.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (a) {}
	};
	var Dc = 0,
		Ec = {},
		Fc = {
			0: 200,
			1223: 204
		},
		Gc = _.ajaxSettings.xhr();
	a.ActiveXObject && _(a).on("unload", function() {
		for (var a in Ec) Ec[a]()
	}), Y.cors = !!Gc && "withCredentials" in Gc, Y.ajax = Gc = !!Gc, _.ajaxTransport(function(a) {
		var b;
		return Y.cors || Gc && !a.crossDomain ? {
			send: function(c, d) {
				var e, f = a.xhr(),
					g = ++Dc;
				if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (e in a.xhrFields) f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for (e in c) f.setRequestHeader(e, c[e]);
				b = function(a) {
					return function() {
						b && (delete Ec[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Fc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
							text: f.responseText
						} : void 0, f.getAllResponseHeaders()))
					}
				}, f.onload = b(), f.onerror = b("error"), b = Ec[g] = b("abort");
				try {
					f.send(a.hasContent && a.data || null)
				} catch (h) {
					if (b) throw h
				}
			},
			abort: function() {
				b && b()
			}
		} : void 0
	}), _.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(a) {
				return _.globalEval(a), a
			}
		}
	}), _.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), _.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c;
			return {
				send: function(d, e) {
					b = _("<script>").prop({
						async: !0,
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function(a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), Z.head.appendChild(b[0])
				},
				abort: function() {
					c && c()
				}
			}
		}
	});
	var Hc = [],
		Ic = /(=)\?(?=&|$)|\?\?/;
	_.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Hc.pop() || _.expando + "_" + jc++;
			return this[a] = !0, a
		}
	}), _.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Ic.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ic.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ic, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || _.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Hc.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), _.parseHTML = function(a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || Z;
		var d = gb.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
	};
	var Jc = _.fn.load;
	_.fn.load = function(a, b, c) {
		if ("string" != typeof a && Jc) return Jc.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
			url: a,
			type: e,
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
		}).complete(c && function(a, b) {
			g.each(c, f || [a.responseText, b, a])
		}), this
	}, _.expr.filters.animated = function(a) {
		return _.grep(_.timers, function(b) {
			return a === b.elem
		}).length
	};
	var Kc = a.document.documentElement;
	_.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = _.css(a, "position"),
				l = _(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, _.fn.extend({
		offset: function(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function(b) {
				_.offset.setOffset(this, a, b)
			});
			var b, c, d = this[0],
				e = {
					top: 0,
					left: 0
				},
				f = d && d.ownerDocument;
			return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {
				top: e.top + c.pageYOffset - b.clientTop,
				left: e.left + c.pageXOffset - b.clientLeft
			}) : e) : void 0
		},
		position: function() {
			if (this[0]) {
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - d.top - _.css(c, "marginTop", !0),
					left: b.left - d.left - _.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || Kc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
				return a || Kc
			})
		}
	}), _.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(b, c) {
		var d = "pageYOffset" === c;
		_.fn[b] = function(e) {
			return qb(this, function(b, e, f) {
				var g = P(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), _.each(["top", "left"], function(a, b) {
		_.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
			return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
		})
	}), _.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		_.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			_.fn[d] = function(d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return qb(this, function(b, c, d) {
					var e;
					return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), _.fn.size = function() {
		return this.length
	}, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return _
	});
	var Lc = a.jQuery,
		Mc = a.$;
	return _.noConflict = function(b) {
		return a.$ === _ && (a.$ = Mc), b && a.jQuery === _ && (a.jQuery = Lc), _
	}, typeof b === zb && (a.jQuery = a.$ = _), _
}),
function(a, b, c, d) {
	"use strict";

	function e(a) {
		return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), a
	}
	var f = function(b) {
		for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
	};
	f(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), a(function() {
		"undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
	});
	var g = function(b, d) {
			if ("string" == typeof b) {
				if (d) {
					var e;
					if (d.jquery) {
						if (e = d[0], !e) return d
					} else e = d;
					return a(e.querySelectorAll(b))
				}
				return a(c.querySelectorAll(b))
			}
			return a(b, d)
		},
		h = function(a) {
			var b = [];
			return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), b.push(this.name), b.join("-")
		},
		i = function(a) {
			for (var b = a.split("-"), c = b.length, d = []; c--;) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
			return d.reverse().join("-")
		},
		j = function(b, c) {
			var d = this,
				e = !g(this).data(this.attr_name(!0));
			return g(this.scope).is("[" + this.attr_name() + "]") ? (g(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))), e && this.events(this.scope)) : g("[" + this.attr_name() + "]", this.scope).each(function() {
				var e = !g(this).data(d.attr_name(!0) + "-init");
				g(this).data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))), e && d.events(this)
			}), "string" == typeof b ? this[b].call(this, c) : void 0
		},
		k = function(a, b) {
			function c() {
				b(a[0])
			}

			function d() {
				if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
					var a = this.attr("src"),
						b = a.match(/\?/) ? "&" : "?";
					b += "random=" + (new Date).getTime(), this.attr("src", a + b)
				}
			}
			return a.attr("src") ? void(a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
		};
	b.matchMedia = b.matchMedia || function(a) {
			var b, c = a.documentElement,
				d = c.firstElementChild || c.firstChild,
				e = a.createElement("body"),
				f = a.createElement("div");
			return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
				function(a) {
					return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
						matches: b,
						media: a
					}
				}
		}(c),
		function() {
			function a() {
				c && (f(a), h && jQuery.fx.tick())
			}
			for (var c, d = 0, e = ["webkit", "moz"], f = b.requestAnimationFrame, g = b.cancelAnimationFrame, h = "undefined" != typeof jQuery.fx; d < e.length && !f; d++) f = b[e[d] + "RequestAnimationFrame"], g = g || b[e[d] + "CancelAnimationFrame"] || b[e[d] + "CancelRequestAnimationFrame"];
			f ? (b.requestAnimationFrame = f, b.cancelAnimationFrame = g, h && (jQuery.fx.timer = function(b) {
				b() && jQuery.timers.push(b) && !c && (c = !0, a())
			}, jQuery.fx.stop = function() {
				c = !1
			})) : (b.requestAnimationFrame = function(a) {
				var c = (new Date).getTime(),
					e = Math.max(0, 16 - (c - d)),
					f = b.setTimeout(function() {
						a(c + e)
					}, e);
				return d = c + e, f
			}, b.cancelAnimationFrame = function(a) {
				clearTimeout(a)
			})
		}(jQuery), b.Foundation = {
			name: "Foundation",
			version: "5.3.1",
			media_queries: {
				small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
			},
			stylesheet: a("<style></style>").appendTo("head")[0].sheet,
			global: {
				namespace: d
			},
			init: function(a, b, c, d, e) {
				var f = [a, c, d, e],
					h = [];
				if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, this.set_namespace(), b && "string" == typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f));
				else
					for (var i in this.libs) h.push(this.init_lib(i, b));
				return a
			},
			init_lib: function(b, c) {
				return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c), this.libs[b].init.apply(this.libs[b], c))) : function() {}
			},
			patch: function(a) {
				a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S
			},
			inherit: function(a, b) {
				for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
			},
			set_namespace: function() {
				var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
				this.global.namespace = b === d || /false/i.test(b) ? "" : b
			},
			libs: {},
			utils: {
				S: g,
				throttle: function(a, b) {
					var c = null;
					return function() {
						var d = this,
							e = arguments;
						null == c && (c = setTimeout(function() {
							a.apply(d, e), c = null
						}, b))
					}
				},
				debounce: function(a, b, c) {
					var d, e;
					return function() {
						var f = this,
							g = arguments,
							h = function() {
								d = null, c || (e = a.apply(f, g))
							},
							i = c && !d;
						return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
					}
				},
				data_options: function(b, c) {
					function d(a) {
						return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
					}

					function e(b) {
						return "string" == typeof b ? a.trim(b) : b
					}
					c = c || "options";
					var f, g, h, i = {},
						j = function(a) {
							var b = Foundation.global.namespace;
							return a.data(b.length > 0 ? b + "-" + c : c)
						},
						k = j(b);
					if ("object" == typeof k) return k;
					for (h = (k || ":").split(";"), f = h.length; f--;) g = h[f].split(":"), g = [g[0], g.slice(1).join(":")], /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (g[1] = -1 === g[1].indexOf(".") ? parseInt(g[1], 10) : parseFloat(g[1])), 2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
					return i
				},
				register_media: function(b, c) {
					Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
				},
				add_custom_rule: function(a, b) {
					if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
					else {
						var c = Foundation.media_queries[b];
						c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
					}
				},
				image_loaded: function(a, b) {
					var c = this,
						d = a.length;
					0 === d && b(a), a.each(function() {
						k(c.S(this), function() {
							d -= 1, 0 === d && b(a)
						})
					})
				},
				random_str: function() {
					return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
				}
			}
		}, a.fn.foundation = function() {
			var a = Array.prototype.slice.call(arguments, 0);
			return this.each(function() {
				return Foundation.init.apply(Foundation, [this].concat(a)), this
			})
		}
}(jQuery, window, window.document),
function(a, b) {
	"use strict";
	Foundation.libs.interchange = {
		name: "interchange",
		version: "5.3.3",
		cache: {},
		images_loaded: !1,
		nodes_loaded: !1,
		settings: {
			load_attr: "interchange",
			named_queries: {
				"default": "only screen",
				small: Foundation.media_queries.small,
				medium: Foundation.media_queries.medium,
				large: Foundation.media_queries.large,
				xlarge: Foundation.media_queries.xlarge,
				xxlarge: Foundation.media_queries.xxlarge,
				landscape: "only screen and (orientation: landscape)",
				portrait: "only screen and (orientation: portrait)",
				retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
			},
			directives: {
				replace: function(b, c, d) {
					if (/IMG/.test(b[0].nodeName)) {
						var e = b[0].src;
						if (new RegExp(c, "i").test(e)) return;
						return b[0].src = c, d(b[0].src)
					}
					var f = b.data(this.data_attr + "-last-path"),
						g = this;
					if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
						b.html(a), b.data(g.data_attr + "-last-path", c), d()
					})
				}
			}
		},
		init: function(b, c, d) {
			Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes")
		},
		get_media_hash: function() {
			var a = "";
			for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
			return a
		},
		events: function() {
			var c, d = this;
			return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
				var a = d.get_media_hash();
				a !== c && d.resize(), c = a
			}, 50)), this
		},
		resize: function() {
			var b = this.cache;
			if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
			for (var c in b)
				if (b.hasOwnProperty(c)) {
					var d = this.results(c, b[c]);
					d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function() {
						if (arguments[0] instanceof Array) var a = arguments[0];
						else var a = Array.prototype.slice.call(arguments, 0);
						d.el.trigger(d.scenario[1], a)
					})
				}
		},
		results: function(a, b) {
			var c = b.length;
			if (c > 0)
				for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--;) {
					var e, f = b[c][2];
					if (e = matchMedia(this.settings.named_queries.hasOwnProperty(f) ? this.settings.named_queries[f] : f), e.matches) return {
						el: d,
						scenario: b[c]
					}
				}
			return !1
		},
		load: function(a, b) {
			return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), this["cached_" + a]
		},
		update_images: function() {
			var a = this.S("img[" + this.data_attr + "]"),
				b = a.length,
				c = b,
				d = 0,
				e = this.data_attr;
			for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--;) {
				if (d++, a[c]) {
					var f = a[c].getAttribute(e) || "";
					f.length > 0 && this.cached_images.push(a[c])
				}
				d === b && (this.images_loaded = !0, this.enhance("images"))
			}
			return this
		},
		update_nodes: function() {
			var a = this.S("[" + this.data_attr + "]").not("img"),
				b = a.length,
				c = b,
				d = 0,
				e = this.data_attr;
			for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--;) {
				d++;
				var f = a[c].getAttribute(e) || "";
				f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, this.enhance("nodes"))
			}
			return this
		},
		enhance: function(c) {
			for (var d = this["cached_" + c].length; d--;) this.object(a(this["cached_" + c][d]));
			return a(b).trigger("resize").trigger("resize.fndtn.interchange")
		},
		convert_directive: function(a) {
			var b = this.trim(a);
			return b.length > 0 ? b : "replace"
		},
		parse_scenario: function(a) {
			var b = a[0].match(/(.+),\s*(\w+)\s*$/),
				c = a[1];
			if (b) var d = b[1],
				e = b[2];
			else var f = a[0].split(/,\s*$/),
				d = f[0],
				e = "";
			return [this.trim(d), this.convert_directive(e), this.trim(c)]
		},
		object: function(a) {
			var b = this.parse_data_attr(a),
				c = [],
				d = b.length;
			if (d > 0)
				for (; d--;) {
					var e = b[d].split(/\((.*?)(\))$/);
					if (e.length > 1) {
						var f = this.parse_scenario(e);
						c.push(f)
					}
				}
			return this.store(a, c)
		},
		store: function(a, b) {
			var c = this.random_str(),
				d = a.data(this.add_namespace("uuid", !0));
			return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), this.cache[c] = b)
		},
		trim: function(b) {
			return "string" == typeof b ? a.trim(b) : b
		},
		set_data_attr: function(a) {
			return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
		},
		parse_data_attr: function(a) {
			for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--;) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
			return d
		},
		reflow: function() {
			this.load("images", !0), this.load("nodes", !0)
		}
	}
}(jQuery, window, window.document),
function() {
	var a = [].indexOf || function(a) {
			for (var b = 0, c = this.length; c > b; b++)
				if (b in this && this[b] === a) return b;
			return -1
		},
		b = [].slice;
	! function(a, b) {
		return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(c) {
			return b(c, a)
		}) : b(a.jQuery, a)
	}(window, function(c, d) {
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
		return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
			horizontal: {},
			vertical: {}
		}, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function() {
			function a(a) {
				var b = this;
				this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
					x: a.scrollLeft(),
					y: a.scrollTop()
				}, this.waypoints = {
					horizontal: {},
					vertical: {}
				}, this.element[j] = this.id, k[this.id] = this, a.bind(p, function() {
					var a;
					return b.didScroll || l ? void 0 : (b.didScroll = !0, a = function() {
						return b.doScroll(), b.didScroll = !1
					}, d.setTimeout(a, c[t].settings.scrollThrottle))
				}), a.bind(o, function() {
					var a;
					return b.didResize ? void 0 : (b.didResize = !0, a = function() {
						return c[t]("refresh"), b.didResize = !1
					}, d.setTimeout(a, c[t].settings.resizeThrottle))
				})
			}
			return a.prototype.doScroll = function() {
				var a, b = this;
				return a = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				}, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function(a, d) {
					var e, f, g;
					return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function(a, b) {
						var c, e;
						return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
					}), g.sort(function(a, b) {
						return a.offset - b.offset
					}), f || g.reverse(), c.each(g, function(a, b) {
						return b.options.continuous || a === g.length - 1 ? b.trigger([e]) : void 0
					})
				}), this.oldScroll = {
					x: a.horizontal.newScroll,
					y: a.vertical.newScroll
				}
			}, a.prototype.refresh = function() {
				var a, b, d, e = this;
				return d = c.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
					horizontal: {
						contextOffset: d ? 0 : b.left,
						contextScroll: d ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: d ? 0 : b.top,
						contextScroll: d ? 0 : this.oldScroll.y,
						contextDimension: d ? c[t]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				}, c.each(a, function(a, b) {
					return c.each(e.waypoints[a], function(a, d) {
						var e, f, g, h, i;
						return e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, d.options.onlyOnScroll && null != g || !d.enabled ? void 0 : null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
					})
				})
			}, a.prototype.checkEmpty = function() {
				return c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([o, p].join(" ")), delete k[this.id]) : void 0
			}, a
		}(), g = function() {
			function a(a, b, d) {
				var e, f;
				"bottom-in-view" === d.offset && (d.offset = function() {
					var a;
					return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
				}), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = this.element[r]) ? f : [], e.push(this.id), this.element[r] = e
			}
			return a.prototype.trigger = function(a) {
				return this.enabled ? (null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0) : void 0
			}, a.prototype.disable = function() {
				return this.enabled = !1
			}, a.prototype.enable = function() {
				return this.context.refresh(), this.enabled = !0
			}, a.prototype.destroy = function() {
				return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
			}, a.getWaypointsByElement = function(a) {
				var b, d;
				return (d = a[r]) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function(a) {
					return b[a]
				})) : []
			}, a
		}(), n = {
			init: function(a, b) {
				var d;
				return b = c.extend({}, c.fn[s].defaults, b), null == (d = b.handler) && (b.handler = a), this.each(function() {
					var a, d, e, h;
					return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e[0][j]], d || (d = new f(e)), new g(a, d, b)
				}), c[t]("refresh"), this
			},
			disable: function() {
				return n._invoke.call(this, "disable")
			},
			enable: function() {
				return n._invoke.call(this, "enable")
			},
			destroy: function() {
				return n._invoke.call(this, "destroy")
			},
			prev: function(a, b) {
				return n._traverse.call(this, a, b, function(a, b, c) {
					return b > 0 ? a.push(c[b - 1]) : void 0
				})
			},
			next: function(a, b) {
				return n._traverse.call(this, a, b, function(a, b, c) {
					return b < c.length - 1 ? a.push(c[b + 1]) : void 0
				})
			},
			_traverse: function(a, b, e) {
				var f, g;
				return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function() {
					var b;
					return b = c.inArray(this, g[a]), e(f, b, g[a])
				}), this.pushStack(f)
			},
			_invoke: function(a) {
				return this.each(function() {
					var b;
					return b = g.getWaypointsByElement(this), c.each(b, function(b, c) {
						return c[a](), !0
					})
				}), this
			}
		}, c.fn[s] = function() {
			var a, d;
			return d = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [null, d]) : c.error(d ? "The " + d + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
		}, c.fn[s].defaults = {
			context: d,
			continuous: !0,
			enabled: !0,
			horizontal: !1,
			offset: 0,
			triggerOnce: !1
		}, m = {
			refresh: function() {
				return c.each(k, function(a, b) {
					return b.refresh()
				})
			},
			viewportHeight: function() {
				var a;
				return null != (a = d.innerHeight) ? a : e.height()
			},
			aggregate: function(a) {
				var b, d, e;
				return b = h, a && (b = null != (e = k[c(a)[0][j]]) ? e.waypoints : void 0), b ? (d = {
					horizontal: [],
					vertical: []
				}, c.each(d, function(a, e) {
					return c.each(b[a], function(a, b) {
						return e.push(b)
					}), e.sort(function(a, b) {
						return a.offset - b.offset
					}), d[a] = c.map(e, function(a) {
						return a.element
					}), d[a] = c.unique(d[a])
				}), d) : []
			},
			above: function(a) {
				return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
					return b.offset <= a.oldScroll.y
				})
			},
			below: function(a) {
				return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
					return b.offset > a.oldScroll.y
				})
			},
			left: function(a) {
				return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
					return b.offset <= a.oldScroll.x
				})
			},
			right: function(a) {
				return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
					return b.offset > a.oldScroll.x
				})
			},
			enable: function() {
				return m._invoke("enable")
			},
			disable: function() {
				return m._invoke("disable")
			},
			destroy: function() {
				return m._invoke("destroy")
			},
			extendFn: function(a, b) {
				return n[a] = b
			},
			_invoke: function(a) {
				var b;
				return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function(b, c) {
					return c[a](), !0
				})
			},
			_filter: function(a, b, d) {
				var e, f;
				return (e = k[c(a)[0][j]]) ? (f = [], c.each(e.waypoints[b], function(a, b) {
					return d(e, b) ? f.push(b) : void 0
				}), f.sort(function(a, b) {
					return a.offset - b.offset
				}), c.map(f, function(a) {
					return a.element
				})) : []
			}
		}, c[t] = function() {
			var a, c;
			return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
		}, c[t].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		}, e.on("load.waypoints", function() {
			return c[t]("refresh")
		})
	})
}.call(this);
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
	deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
	deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
	deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
	deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(a) {
		"use strict";
		switch (a.nodeName.toLowerCase()) {
			case "button":
			case "select":
			case "textarea":
				if (a.disabled) return !0;
				break;
			case "input":
				if (deviceIsIOS && "file" === a.type || a.disabled) return !0;
				break;
			case "label":
			case "video":
				return !0
		}
		return /\bneedsclick\b/.test(a.className)
	}, FastClick.prototype.needsFocus = function(a) {
		"use strict";
		switch (a.nodeName.toLowerCase()) {
			case "textarea":
				return !0;
			case "select":
				return !deviceIsAndroid;
			case "input":
				switch (a.type) {
					case "button":
					case "checkbox":
					case "file":
					case "image":
					case "radio":
					case "submit":
						return !1
				}
				return !a.disabled && !a.readOnly;
			default:
				return /\bneedsfocus\b/.test(a.className)
		}
	}, FastClick.prototype.sendClick = function(a, b) {
		"use strict";
		var c, d;
		document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
	}, FastClick.prototype.determineEventType = function(a) {
		"use strict";
		return deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
	}, FastClick.prototype.focus = function(a) {
		"use strict";
		var b;
		deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
	}, FastClick.prototype.updateScrollParent = function(a) {
		"use strict";
		var b, c;
		if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
			c = a;
			do {
				if (c.scrollHeight > c.offsetHeight) {
					b = c, a.fastClickScrollParent = c;
					break
				}
				c = c.parentElement
			} while (c)
		}
		b && (b.fastClickLastScrollTop = b.scrollTop)
	}, FastClick.prototype.getTargetElementFromEventTarget = function(a) {
		"use strict";
		return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
	}, FastClick.prototype.onTouchStart = function(a) {
		"use strict";
		var b, c, d;
		if (a.targetTouches.length > 1) return !0;
		if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], deviceIsIOS) {
			if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !0;
			if (!deviceIsIOS4) {
				if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
				this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
			}
		}
		return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), !0
	}, FastClick.prototype.touchHasMoved = function(a) {
		"use strict";
		var b = a.changedTouches[0],
			c = this.touchBoundary;
		return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
	}, FastClick.prototype.onTouchMove = function(a) {
		"use strict";
		return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
	}, FastClick.prototype.findControl = function(a) {
		"use strict";
		return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
	}, FastClick.prototype.onTouchEnd = function(a) {
		"use strict";
		var b, c, d, e, f, g = this.targetElement;
		if (!this.trackingClick) return !0;
		if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
		if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = g.tagName.toLowerCase(), "label" === d) {
			if (b = this.findControl(g)) {
				if (this.focus(g), deviceIsAndroid) return !1;
				g = b
			}
		} else if (this.needsFocus(g)) return a.timeStamp - c > 100 || deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.sendClick(g, a), deviceIsIOS && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
		return deviceIsIOS && !deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
	}, FastClick.prototype.onTouchCancel = function() {
		"use strict";
		this.trackingClick = !1, this.targetElement = null
	}, FastClick.prototype.onMouse = function(a) {
		"use strict";
		return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
	}, FastClick.prototype.onClick = function(a) {
		"use strict";
		var b;
		return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
	}, FastClick.prototype.destroy = function() {
		"use strict";
		var a = this.layer;
		deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
	}, FastClick.notNeeded = function(a) {
		"use strict";
		var b, c, d;
		if ("undefined" == typeof window.ontouchstart) return !0;
		if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
			if (!deviceIsAndroid) return !0;
			if (b = document.querySelector("meta[name=viewport]")) {
				if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
				if (c > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
			}
		}
		if (deviceIsBlackBerry10 && (d = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), d[1] >= 10 && d[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
			if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
			if (document.documentElement.scrollWidth <= window.outerWidth) return !0
		}
		return "none" === a.style.msTouchAction ? !0 : !1
	}, FastClick.attach = function(a, b) {
		"use strict";
		return new FastClick(a, b)
	}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
		"use strict";
		return FastClick
	}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, ! function(a) {
		a.flexslider = function(b, c) {
			var d = a(b);
			d.vars = a.extend({}, a.flexslider.defaults, c);
			var e, f = d.vars.namespace,
				g = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
				h = ("ontouchstart" in window || g || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch,
				i = "click touchend MSPointerUp",
				j = "",
				k = "vertical" === d.vars.direction,
				l = d.vars.reverse,
				m = d.vars.itemWidth > 0,
				n = "fade" === d.vars.animation,
				o = "" !== d.vars.asNavFor,
				p = {},
				q = !0;
			a.data(b, "flexslider", d), p = {
				init: function() {
					d.animating = !1, d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10), isNaN(d.currentSlide) && (d.currentSlide = 0), d.animatingTo = d.currentSlide, d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last, d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")), d.slides = a(d.vars.selector, d), d.container = a(d.containerSelector, d), d.count = d.slides.length, d.syncExists = a(d.vars.sync).length > 0, "slide" === d.vars.animation && (d.vars.animation = "swing"), d.prop = k ? "top" : "marginLeft", d.args = {}, d.manualPause = !1, d.stopped = !1, d.started = !1, d.startTimeout = null, d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
						var a = document.createElement("div"),
							b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
						for (var c in b)
							if (void 0 !== a.style[b[c]]) return d.pfx = b[c].replace("Perspective", "").toLowerCase(), d.prop = "-" + d.pfx + "-transform", !0;
						return !1
					}(), d.ensureAnimationEnd = "", "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)), "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)), d.vars.randomize && (d.slides.sort(function() {
						return Math.round(Math.random()) - .5
					}), d.container.empty().append(d.slides)), d.doMath(), d.setup("init"), d.vars.controlNav && p.controlNav.setup(), d.vars.directionNav && p.directionNav.setup(), d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
						var b = a.keyCode;
						if (!d.animating && (39 === b || 37 === b)) {
							var c = 39 === b ? d.getTarget("next") : 37 === b ? d.getTarget("prev") : !1;
							d.flexAnimate(c, d.vars.pauseOnAction)
						}
					}), d.vars.mousewheel && d.bind("mousewheel", function(a, b) {
						a.preventDefault();
						var c = d.getTarget(0 > b ? "next" : "prev");
						d.flexAnimate(c, d.vars.pauseOnAction)
					}), d.vars.pausePlay && p.pausePlay.setup(), d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(), d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
						d.manualPlay || d.manualPause || d.pause()
					}, function() {
						d.manualPause || d.manualPlay || d.stopped || d.play()
					}), d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())), o && p.asNav.setup(), h && d.vars.touch && p.touch(), (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize), d.find("img").attr("draggable", "false"), setTimeout(function() {
						d.vars.start(d)
					}, 200)
				},
				asNav: {
					setup: function() {
						d.asNav = !0, d.animatingTo = Math.floor(d.currentSlide / d.move), d.currentItem = d.currentSlide, d.slides.removeClass(f + "active-slide").eq(d.currentItem).addClass(f + "active-slide"), g ? (b._slider = d, d.slides.each(function() {
							var b = this;
							b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function(a) {
								a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
							}, !1), b.addEventListener("MSGestureTap", function(b) {
								b.preventDefault();
								var c = a(this),
									e = c.index();
								a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
							})
						})) : d.slides.on(i, function(b) {
							b.preventDefault();
							var c = a(this),
								e = c.index(),
								g = c.offset().left - a(d).scrollLeft();
							0 >= g && c.hasClass(f + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(f + "active-slide") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
						})
					}
				},
				controlNav: {
					setup: function() {
						d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
					},
					setupPaging: function() {
						var b, c, e = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging",
							g = 1;
						if (d.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + e + '"></ol>'), d.pagingCount > 1)
							for (var h = 0; h < d.pagingCount; h++) {
								if (c = d.slides.eq(h), b = "thumbnails" === d.vars.controlNav ? '<img src="' + c.attr("data-thumb") + '"/>' : "<a>" + g + "</a>", "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
									var k = c.attr("data-thumbcaption");
									"" != k && void 0 != k && (b += '<span class="' + f + 'caption">' + k + "</span>")
								}
								d.controlNavScaffold.append("<li>" + b + "</li>"), g++
							}
						d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), d.controlNavScaffold.delegate("a, img", i, function(b) {
							if (b.preventDefault(), "" === j || j === b.type) {
								var c = a(this),
									e = d.controlNav.index(c);
								c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction))
							}
							"" === j && (j = b.type), p.setToClearWatchedEvent()
						})
					},
					setupManual: function() {
						d.controlNav = d.manualControls, p.controlNav.active(), d.controlNav.bind(i, function(b) {
							if (b.preventDefault(), "" === j || j === b.type) {
								var c = a(this),
									e = d.controlNav.index(c);
								c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction))
							}
							"" === j && (j = b.type), p.setToClearWatchedEvent()
						})
					},
					set: function() {
						var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
						d.controlNav = a("." + f + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
					},
					active: function() {
						d.controlNav.removeClass(f + "active").eq(d.animatingTo).addClass(f + "active")
					},
					update: function(b, c) {
						d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(), p.controlNav.set(), d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
					}
				},
				directionNav: {
					setup: function() {
						var b = a('<ul class="' + f + 'direction-nav"><li><a class="' + f + 'prev" href="#">' + d.vars.prevText + '</a></li><li><a class="' + f + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
						d.controlsContainer ? (a(d.controlsContainer).append(b), d.directionNav = a("." + f + "direction-nav li a", d.controlsContainer)) : (d.append(b), d.directionNav = a("." + f + "direction-nav li a", d)), p.directionNav.update(), d.directionNav.bind(i, function(b) {
							b.preventDefault();
							var c;
							("" === j || j === b.type) && (c = d.getTarget(a(this).hasClass(f + "next") ? "next" : "prev"), d.flexAnimate(c, d.vars.pauseOnAction)), "" === j && (j = b.type), p.setToClearWatchedEvent()
						})
					},
					update: function() {
						var a = f + "disabled";
						1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1") : d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex") : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + f + "prev").addClass(a).attr("tabindex", "-1") : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + f + "next").addClass(a).attr("tabindex", "-1") : d.directionNav.removeClass(a).removeAttr("tabindex")
					}
				},
				pausePlay: {
					setup: function() {
						var b = a('<div class="' + f + 'pauseplay"><a></a></div>');
						d.controlsContainer ? (d.controlsContainer.append(b), d.pausePlay = a("." + f + "pauseplay a", d.controlsContainer)) : (d.append(b), d.pausePlay = a("." + f + "pauseplay a", d)), p.pausePlay.update(d.vars.slideshow ? f + "pause" : f + "play"), d.pausePlay.bind(i, function(b) {
							b.preventDefault(), ("" === j || j === b.type) && (a(this).hasClass(f + "pause") ? (d.manualPause = !0, d.manualPlay = !1, d.pause()) : (d.manualPause = !1, d.manualPlay = !0, d.play())), "" === j && (j = b.type), p.setToClearWatchedEvent()
						})
					},
					update: function(a) {
						"play" === a ? d.pausePlay.removeClass(f + "pause").addClass(f + "play").html(d.vars.playText) : d.pausePlay.removeClass(f + "play").addClass(f + "pause").html(d.vars.pauseText)
					}
				},
				touch: function() {
					function a(a) {
						d.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (d.pause(), q = k ? d.h : d.w, s = Number(new Date), u = a.touches[0].pageX, v = a.touches[0].pageY, p = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * q : (d.currentSlide + d.cloneOffset) * q, j = k ? v : u, o = k ? u : v, b.addEventListener("touchmove", c, !1), b.addEventListener("touchend", e, !1))
					}

					function c(a) {
						u = a.touches[0].pageX, v = a.touches[0].pageY, r = k ? j - v : j - u, t = k ? Math.abs(r) < Math.abs(u - o) : Math.abs(r) < Math.abs(v - o);
						var b = 500;
						(!t || Number(new Date) - s > b) && (a.preventDefault(), !n && d.transitions && (d.vars.animationLoop || (r /= 0 === d.currentSlide && 0 > r || d.currentSlide === d.last && r > 0 ? Math.abs(r) / q + 2 : 1), d.setProps(p + r, "setTouch")))
					}

					function e() {
						if (b.removeEventListener("touchmove", c, !1), d.animatingTo === d.currentSlide && !t && null !== r) {
							var a = l ? -r : r,
								f = d.getTarget(a > 0 ? "next" : "prev");
							d.canAdvance(f) && (Number(new Date) - s < 550 && Math.abs(a) > 50 || Math.abs(a) > q / 2) ? d.flexAnimate(f, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
						}
						b.removeEventListener("touchend", e, !1), j = null, o = null, r = null, p = null
					}

					function f(a) {
						a.stopPropagation(), d.animating ? a.preventDefault() : (d.pause(), b._gesture.addPointer(a.pointerId), w = 0, q = k ? d.h : d.w, s = Number(new Date), p = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * q : (d.currentSlide + d.cloneOffset) * q)
					}

					function h(a) {
						a.stopPropagation();
						var c = a.target._slider;
						if (c) {
							var d = -a.translationX,
								e = -a.translationY;
							return w += k ? e : d, r = w, t = k ? Math.abs(w) < Math.abs(-d) : Math.abs(w) < Math.abs(-e), a.detail === a.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
								b._gesture.stop()
							}) : void((!t || Number(new Date) - s > 500) && (a.preventDefault(), !n && c.transitions && (c.vars.animationLoop || (r = w / (0 === c.currentSlide && 0 > w || c.currentSlide === c.last && w > 0 ? Math.abs(w) / q + 2 : 1)), c.setProps(p + r, "setTouch"))))
						}
					}

					function i(a) {
						a.stopPropagation();
						var b = a.target._slider;
						if (b) {
							if (b.animatingTo === b.currentSlide && !t && null !== r) {
								var c = l ? -r : r,
									d = b.getTarget(c > 0 ? "next" : "prev");
								b.canAdvance(d) && (Number(new Date) - s < 550 && Math.abs(c) > 50 || Math.abs(c) > q / 2) ? b.flexAnimate(d, b.vars.pauseOnAction) : n || b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, !0)
							}
							j = null, o = null, r = null, p = null, w = 0
						}
					}
					var j, o, p, q, r, s, t = !1,
						u = 0,
						v = 0,
						w = 0;
					g ? (b.style.msTouchAction = "none", b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", f, !1), b._slider = d, b.addEventListener("MSGestureChange", h, !1), b.addEventListener("MSGestureEnd", i, !1)) : b.addEventListener("touchstart", a, !1)
				},
				resize: function() {
					!d.animating && d.is(":visible") && (m || d.doMath(), n ? p.smoothHeight() : m ? (d.slides.width(d.computedW), d.update(d.pagingCount), d.setProps()) : k ? (d.viewport.height(d.h), d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(), d.newSlides.width(d.computedW), d.setProps(d.computedW, "setTotal")))
				},
				smoothHeight: function(a) {
					if (!k || n) {
						var b = n ? d : d.viewport;
						a ? b.animate({
							height: d.slides.eq(d.animatingTo).height()
						}, a) : b.height(d.slides.eq(d.animatingTo).height())
					}
				},
				sync: function(b) {
					var c = a(d.vars.sync).data("flexslider"),
						e = d.animatingTo;
					switch (b) {
						case "animate":
							c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
							break;
						case "play":
							c.playing || c.asNav || c.play();
							break;
						case "pause":
							c.pause()
					}
				},
				uniqueID: function(b) {
					return b.find("[id]").each(function() {
						var b = a(this);
						b.attr("id", b.attr("id") + "_clone")
					}), b
				},
				pauseInvisible: {
					visProp: null,
					init: function() {
						var a = ["webkit", "moz", "ms", "o"];
						if ("hidden" in document) return "hidden";
						for (var b = 0; b < a.length; b++) a[b] + "Hidden" in document && (p.pauseInvisible.visProp = a[b] + "Hidden");
						if (p.pauseInvisible.visProp) {
							var c = p.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
							document.addEventListener(c, function() {
								p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
							})
						}
					},
					isHidden: function() {
						return document[p.pauseInvisible.visProp] || !1
					}
				},
				setToClearWatchedEvent: function() {
					clearTimeout(e), e = setTimeout(function() {
						j = ""
					}, 3e3)
				}
			}, d.flexAnimate = function(b, c, e, g, i) {
				if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"), o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"), !d.animating && (d.canAdvance(b, i) || e) && d.is(":visible")) {
					if (o && g) {
						var j = a(d.vars.asNavFor).data("flexslider");
						if (d.atEnd = 0 === b || b === d.count - 1, j.flexAnimate(b, !0, !1, !0, i), d.direction = d.currentItem < b ? "next" : "prev", j.direction = d.direction, Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b) return d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), !1;
						d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), b = Math.floor(b / d.visible)
					}
					if (d.animating = !0, d.animatingTo = b, c && d.pause(), d.vars.before(d), d.syncExists && !i && p.sync("animate"), d.vars.controlNav && p.controlNav.active(), m || d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), d.atEnd = 0 === b || b === d.last, d.vars.directionNav && p.directionNav.update(), b === d.last && (d.vars.end(d), d.vars.animationLoop || d.pause()), n) h ? (d.slides.eq(d.currentSlide).css({
						opacity: 0,
						zIndex: 1
					}), d.slides.eq(b).css({
						opacity: 1,
						zIndex: 2
					}), d.wrapup(t)) : (d.slides.eq(d.currentSlide).css({
						zIndex: 1
					}).animate({
						opacity: 0
					}, d.vars.animationSpeed, d.vars.easing), d.slides.eq(b).css({
						zIndex: 2
					}).animate({
						opacity: 1
					}, d.vars.animationSpeed, d.vars.easing, d.wrapup));
					else {
						var q, r, s, t = k ? d.slides.filter(":first").height() : d.computedW;
						m ? (q = d.vars.itemMargin, s = (d.itemW + q) * d.move * d.animatingTo, r = s > d.limit && 1 !== d.visible ? d.limit : s) : r = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * t : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * t : l ? (d.count - 1 - b + d.cloneOffset) * t : (b + d.cloneOffset) * t, d.setProps(r, "", d.vars.animationSpeed), d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1, d.currentSlide = d.animatingTo), d.container.unbind("webkitTransitionEnd transitionend"), d.container.bind("webkitTransitionEnd transitionend", function() {
							clearTimeout(d.ensureAnimationEnd), d.wrapup(t)
						}), clearTimeout(d.ensureAnimationEnd), d.ensureAnimationEnd = setTimeout(function() {
							d.wrapup(t)
						}, d.vars.animationSpeed + 100)) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
							d.wrapup(t)
						})
					}
					d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
				}
			}, d.wrapup = function(a) {
				n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")), d.animating = !1, d.currentSlide = d.animatingTo, d.vars.after(d)
			}, d.animateSlides = function() {
				!d.animating && q && d.flexAnimate(d.getTarget("next"))
			}, d.pause = function() {
				clearInterval(d.animatedSlides), d.animatedSlides = null, d.playing = !1, d.vars.pausePlay && p.pausePlay.update("play"), d.syncExists && p.sync("pause")
			}, d.play = function() {
				d.playing && clearInterval(d.animatedSlides), d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed), d.started = d.playing = !0, d.vars.pausePlay && p.pausePlay.update("pause"), d.syncExists && p.sync("play")
			}, d.stop = function() {
				d.pause(), d.stopped = !0
			}, d.canAdvance = function(a, b) {
				var c = o ? d.pagingCount - 1 : d.last;
				return b ? !0 : o && d.currentItem === d.count - 1 && 0 === a && "prev" === d.direction ? !0 : o && 0 === d.currentItem && a === d.pagingCount - 1 && "next" !== d.direction ? !1 : a !== d.currentSlide || o ? d.vars.animationLoop ? !0 : d.atEnd && 0 === d.currentSlide && a === c && "next" !== d.direction ? !1 : d.atEnd && d.currentSlide === c && 0 === a && "next" === d.direction ? !1 : !0 : !1
			}, d.getTarget = function(a) {
				return d.direction = a, "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
			}, d.setProps = function(a, b, c) {
				var e = function() {
					var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo,
						e = function() {
							if (m) return "setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
							switch (b) {
								case "setTotal":
									return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
								case "setTouch":
									return l ? a : a;
								case "jumpEnd":
									return l ? a : d.count * a;
								case "jumpStart":
									return l ? d.count * a : a;
								default:
									return a
							}
						}();
					return -1 * e + "px"
				}();
				d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", d.container.css("-" + d.pfx + "-transition-duration", c), d.container.css("transition-duration", c)), d.args[d.prop] = e, (d.transitions || void 0 === c) && d.container.css(d.args), d.container.css("transform", e)
			}, d.setup = function(b) {
				if (n) d.slides.css({
					width: "100%",
					"float": "left",
					marginRight: "-100%",
					position: "relative"
				}), "init" === b && (h ? d.slides.css({
					opacity: 0,
					display: "block",
					webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease",
					zIndex: 1
				}).eq(d.currentSlide).css({
					opacity: 1,
					zIndex: 2
				}) : d.slides.css({
					opacity: 0,
					display: "block",
					zIndex: 1
				}).eq(d.currentSlide).css({
					zIndex: 2
				}).animate({
					opacity: 1
				}, d.vars.animationSpeed, d.vars.easing)), d.vars.smoothHeight && p.smoothHeight();
				else {
					var c, e;
					"init" === b && (d.viewport = a('<div class="' + f + 'viewport"></div>').css({
						overflow: "hidden",
						position: "relative"
					}).appendTo(d).append(d.container), d.cloneCount = 0, d.cloneOffset = 0, l && (e = a.makeArray(d.slides).reverse(), d.slides = a(e), d.container.empty().append(d.slides))), d.vars.animationLoop && !m && (d.cloneCount = 2, d.cloneOffset = 1, "init" !== b && d.container.find(".clone").remove(), p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(d.container), p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(d.container)), d.newSlides = a(d.vars.selector, d), c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset, k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
						d.newSlides.css({
							display: "block"
						}), d.doMath(), d.viewport.height(d.h), d.setProps(c * d.h, "init")
					}, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"), d.setProps(c * d.computedW, "init"), setTimeout(function() {
						d.doMath(), d.newSlides.css({
							width: d.computedW,
							"float": "left",
							display: "block"
						}), d.vars.smoothHeight && p.smoothHeight()
					}, "init" === b ? 100 : 0))
				}
				m || d.slides.removeClass(f + "active-slide").eq(d.currentSlide).addClass(f + "active-slide"), d.vars.init(d)
			}, d.doMath = function() {
				var a = d.slides.first(),
					b = d.vars.itemMargin,
					c = d.vars.minItems,
					e = d.vars.maxItems;
				d.w = void 0 === d.viewport ? d.width() : d.viewport.width(), d.h = a.height(), d.boxPadding = a.outerWidth() - a.width(), m ? (d.itemT = d.vars.itemWidth + b, d.minW = c ? c * d.itemT : d.w, d.maxW = e ? e * d.itemT - b : d.w, d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth, d.visible = Math.floor(d.w / d.itemW), d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible, d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1), d.last = d.pagingCount - 1, d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w, d.pagingCount = d.count, d.last = d.count - 1), d.computedW = d.itemW - d.boxPadding
			}, d.update = function(a, b) {
				d.doMath(), m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1), d.animatingTo = d.currentSlide), d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1, d.animatingTo -= 1), p.controlNav.update("remove", d.last))), d.vars.directionNav && p.directionNav.update()
			}, d.addSlide = function(b, c) {
				var e = a(b);
				d.count += 1, d.last = d.count - 1, k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e), d.update(c, "add"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.added(d)
			}, d.removeSlide = function(b) {
				var c = isNaN(b) ? d.slides.index(a(b)) : b;
				d.count -= 1, d.last = d.count - 1, isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(), d.doMath(), d.update(c, "remove"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.removed(d)
			}, p.init()
		}, a(window).blur(function() {
			focused = !1
		}).focus(function() {
			focused = !0
		}), a.flexslider.defaults = {
			namespace: "flex-",
			selector: ".slides > li",
			animation: "fade",
			easing: "swing",
			direction: "horizontal",
			reverse: !1,
			animationLoop: !0,
			smoothHeight: !1,
			startAt: 0,
			slideshow: !0,
			slideshowSpeed: 7e3,
			animationSpeed: 600,
			initDelay: 0,
			randomize: !1,
			thumbCaptions: !1,
			pauseOnAction: !0,
			pauseOnHover: !1,
			pauseInvisible: !0,
			useCSS: !0,
			touch: !0,
			video: !1,
			controlNav: !0,
			directionNav: !0,
			prevText: "Previous",
			nextText: "Next",
			keyboard: !0,
			multipleKeyboard: !1,
			mousewheel: !1,
			pausePlay: !1,
			pauseText: "Pause",
			playText: "Play",
			controlsContainer: "",
			manualControls: "",
			sync: "",
			asNavFor: "",
			itemWidth: 0,
			itemMargin: 0,
			minItems: 1,
			maxItems: 0,
			move: 0,
			allowOneSlide: !0,
			start: function() {},
			before: function() {},
			after: function() {},
			end: function() {},
			added: function() {},
			removed: function() {},
			init: function() {}
		}, a.fn.flexslider = function(b) {
			if (void 0 === b && (b = {}), "object" == typeof b) return this.each(function() {
				var c = a(this),
					d = b.selector ? b.selector : ".slides > li",
					e = c.find(d);
				1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
			});
			var c = a(this).data("flexslider");
			switch (b) {
				case "play":
					c.play();
					break;
				case "pause":
					c.pause();
					break;
				case "stop":
					c.stop();
					break;
				case "next":
					c.flexAnimate(c.getTarget("next"), !0);
					break;
				case "prev":
				case "previous":
					c.flexAnimate(c.getTarget("prev"), !0);
					break;
				default:
					"number" == typeof b && c.flexAnimate(b, !0)
			}
		}
	}(jQuery), ! function(a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
	}(function(a) {
		"undefined" == typeof a && "undefined" != typeof window.jQuery && (a = window.jQuery);
		var b = {
				attr: function(a, b, c) {
					var d, e = {},
						f = this.msieversion(),
						g = new RegExp("^" + b, "i");
					if ("undefined" == typeof a || "undefined" == typeof a[0]) return {};
					for (var h in a[0].attributes)
						if (d = a[0].attributes[h], "undefined" != typeof d && null !== d && (!f || f >= 8 || d.specified) && g.test(d.name)) {
							if ("undefined" != typeof c && new RegExp(c + "$", "i").test(d.name)) return !0;
							e[this.camelize(d.name.replace(b, ""))] = this.deserializeValue(d.value)
						}
					return "undefined" == typeof c ? e : !1
				},
				setAttr: function(a, b, c, d) {
					a[0].setAttribute(this.dasherize(b + c), String(d))
				},
				get: function(a, b) {
					for (var c = 0, d = (b || "").split("."); this.isObject(a) || this.isArray(a);)
						if (a = a[d[c++]], c === d.length) return a;
					return void 0
				},
				hash: function(a) {
					return String(Math.random()).substring(2, a ? a + 2 : 9)
				},
				isArray: function(a) {
					return "[object Array]" === Object.prototype.toString.call(a)
				},
				isObject: function(a) {
					return a === Object(a)
				},
				deserializeValue: function(b) {
					var c;
					try {
						return b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : isNaN(c = Number(b)) ? /^[\[\{]/.test(b) ? a.parseJSON(b) : b : c) : b
					} catch (d) {
						return b
					}
				},
				camelize: function(a) {
					return a.replace(/-+(.)?/g, function(a, b) {
						return b ? b.toUpperCase() : ""
					})
				},
				dasherize: function(a) {
					return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
				},
				msieversion: function() {
					var a = window.navigator.userAgent,
						b = a.indexOf("MSIE ");
					return b > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : 0
				}
			},
			c = {
				namespace: "data-parsley-",
				inputs: "input, textarea, select",
				excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
				priorityEnabled: !0,
				uiEnabled: !0,
				validationThreshold: 3,
				focus: "first",
				trigger: !1,
				errorClass: "parsley-error",
				successClass: "parsley-success",
				classHandler: function() {},
				errorsContainer: function() {},
				errorsWrapper: '<ul class="parsley-errors-list"></ul>',
				errorTemplate: "<li></li>"
			},
			d = function() {};
		d.prototype = {
				asyncSupport: !1,
				actualizeOptions: function() {
					return this.options = this.OptionsFactory.get(this), this
				},
				validateThroughValidator: function(a, b, c) {
					return window.ParsleyValidator.validate.apply(window.ParsleyValidator, [a, b, c])
				},
				subscribe: function(b, c) {
					return a.listenTo(this, b.toLowerCase(), c), this
				},
				unsubscribe: function(b) {
					return a.unsubscribeTo(this, b.toLowerCase()), this
				},
				reset: function() {
					if ("ParsleyForm" !== this.__class__) return a.emit("parsley:field:reset", this);
					for (var b = 0; b < this.fields.length; b++) a.emit("parsley:field:reset", this.fields[b]);
					a.emit("parsley:form:reset", this)
				},
				destroy: function() {
					if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void a.emit("parsley:field:destroy", this);
					for (var b = 0; b < this.fields.length; b++) this.fields[b].destroy();
					this.$element.removeData("Parsley"), a.emit("parsley:form:destroy", this)
				}
			},
			function() {
				var a = {},
					b = function(a) {
						this.__class__ = "Validator", this.__version__ = "1.0.0", this.options = a || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
					};
				b.prototype = {
					constructor: b,
					validate: function(a, b, c) {
						if ("string" != typeof a && "object" != typeof a) throw new Error("You must validate an object or a string");
						return "string" == typeof a || g(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
					},
					bind: function(a, b) {
						if ("object" != typeof a) throw new Error("Must bind a Constraint to an object");
						return a[this.bindingKey] = new c(b), this
					},
					unbind: function(a) {
						return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey], this)
					},
					isBinded: function(a) {
						return "undefined" != typeof a[this.bindingKey]
					},
					getBinded: function(a) {
						return this.isBinded(a) ? a[this.bindingKey] : null
					},
					_validateString: function(a, b, c) {
						var f, h = [];
						g(b) || (b = [b]);
						for (var i = 0; i < b.length; i++) {
							if (!(b[i] instanceof e)) throw new Error("You must give an Assert or an Asserts array to validate a string");
							f = b[i].check(a, c), f instanceof d && h.push(f)
						}
						return h.length ? h : !0
					},
					_validateObject: function(a, b, d) {
						if ("object" != typeof b) throw new Error("You must give a constraint to validate an object");
						return b instanceof c ? b.check(a, d) : new c(b).check(a, d)
					},
					_validateBindedObject: function(a, b) {
						return a[this.bindingKey].check(a, b)
					}
				}, b.errorCode = {
					must_be_a_string: "must_be_a_string",
					must_be_an_array: "must_be_an_array",
					must_be_a_number: "must_be_a_number",
					must_be_a_string_or_array: "must_be_a_string_or_array"
				};
				var c = function(a, b) {
					if (this.__class__ = "Constraint", this.options = b || {}, this.nodes = {}, a) try {
						this._bootstrap(a)
					} catch (c) {
						throw new Error("Should give a valid mapping object to Constraint", c, a)
					}
				};
				c.prototype = {
					constructor: c,
					check: function(a, b) {
						var c, d = {};
						for (var h in this.nodes) {
							for (var i = !1, j = this.get(h), k = g(j) ? j : [j], l = k.length - 1; l >= 0; l--) "Required" !== k[l].__class__ || (i = k[l].requiresValidation(b));
							if (this.has(h, a) || this.options.strict || i) try {
								this.has(h, this.options.strict || i ? a : void 0) || (new e).HaveProperty(h).validate(a), c = this._check(h, a[h], b), (g(c) && c.length > 0 || !g(c) && !f(c)) && (d[h] = c)
							} catch (m) {
								d[h] = m
							}
						}
						return f(d) ? !0 : d
					},
					add: function(a, b) {
						if (b instanceof e || g(b) && b[0] instanceof e) return this.nodes[a] = b, this;
						if ("object" == typeof b && !g(b)) return this.nodes[a] = b instanceof c ? b : new c(b), this;
						throw new Error("Should give an Assert, an Asserts array, a Constraint", b)
					},
					has: function(a, b) {
						return b = "undefined" != typeof b ? b : this.nodes, "undefined" != typeof b[a]
					},
					get: function(a, b) {
						return this.has(a) ? this.nodes[a] : b || null
					},
					remove: function(a) {
						var b = [];
						for (var c in this.nodes) c !== a && (b[c] = this.nodes[c]);
						return this.nodes = b, this
					},
					_bootstrap: function(a) {
						if (a instanceof c) return this.nodes = a.nodes;
						for (var b in a) this.add(b, a[b])
					},
					_check: function(a, b, d) {
						if (this.nodes[a] instanceof e) return this._checkAsserts(b, [this.nodes[a]], d);
						if (g(this.nodes[a])) return this._checkAsserts(b, this.nodes[a], d);
						if (this.nodes[a] instanceof c) return this.nodes[a].check(b, d);
						throw new Error("Invalid node", this.nodes[a])
					},
					_checkAsserts: function(a, b, c) {
						for (var d, e = [], f = 0; f < b.length; f++) d = b[f].check(a, c), "undefined" != typeof d && !0 !== d && e.push(d);
						return e
					}
				};
				var d = function(a, b, c) {
					if (this.__class__ = "Violation", !(a instanceof e)) throw new Error("Should give an assertion implementing the Assert interface");
					this.assert = a, this.value = b, "undefined" != typeof c && (this.violation = c)
				};
				d.prototype = {
					show: function() {
						var a = {
							assert: this.assert.__class__,
							value: this.value
						};
						return this.violation && (a.violation = this.violation), a
					},
					__toString: function() {
						return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
					},
					getViolation: function() {
						var a, b;
						for (a in this.violation) b = this.violation[a];
						return {
							constraint: a,
							expected: b
						}
					}
				};
				var e = function(a) {
					this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof a && this.addGroup(a)
				};
				e.prototype = {
					construct: e,
					requiresValidation: function(a) {
						return a && !this.hasGroup(a) ? !1 : !a && this.hasGroups() ? !1 : !0
					},
					check: function(a, b) {
						if (this.requiresValidation(b)) try {
							return this.validate(a, b)
						} catch (c) {
							return c
						}
					},
					hasGroup: function(a) {
						return g(a) ? this.hasOneOf(a) : "Any" === a ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" === a
					},
					hasOneOf: function(a) {
						for (var b = 0; b < a.length; b++)
							if (this.hasGroup(a[b])) return !0;
						return !1
					},
					hasGroups: function() {
						return this.groups.length > 0
					},
					addGroup: function(a) {
						return g(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a), this)
					},
					removeGroup: function(a) {
						for (var b = [], c = 0; c < this.groups.length; c++) a !== this.groups[c] && b.push(this.groups[c]);
						return this.groups = b, this
					},
					addGroups: function(a) {
						for (var b = 0; b < a.length; b++) this.addGroup(a[b]);
						return this
					},
					HaveProperty: function(a) {
						return this.__class__ = "HaveProperty", this.node = a, this.validate = function(a) {
							if ("undefined" == typeof a[this.node]) throw new d(this, a, {
								value: this.node
							});
							return !0
						}, this
					},
					Blank: function() {
						return this.__class__ = "Blank", this.validate = function(a) {
							if ("string" != typeof a) throw new d(this, a, {
								value: b.errorCode.must_be_a_string
							});
							if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
							return !0
						}, this
					},
					Callback: function(a) {
						if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof a) throw new Error("Callback must be instanciated with a function");
						return this.fn = a, this.validate = function(a) {
							var b = this.fn.apply(this, [a].concat(this.arguments));
							if (!0 !== b) throw new d(this, a, {
								result: b
							});
							return !0
						}, this
					},
					Choice: function(a) {
						if (this.__class__ = "Choice", !g(a) && "function" != typeof a) throw new Error("Choice must be instanciated with an array or a function");
						return this.list = a, this.validate = function(a) {
							for (var b = "function" == typeof this.list ? this.list() : this.list, c = 0; c < b.length; c++)
								if (a === b[c]) return !0;
							throw new d(this, a, {
								choices: b
							})
						}, this
					},
					Collection: function(a) {
						return this.__class__ = "Collection", this.constraint = "undefined" != typeof a ? a instanceof e ? a : new c(a) : !1, this.validate = function(a, c) {
							var e, h = new b,
								i = 0,
								j = {},
								k = this.groups.length ? this.groups : c;
							if (!g(a)) throw new d(this, array, {
								value: b.errorCode.must_be_an_array
							});
							for (var l = 0; l < a.length; l++) e = this.constraint ? h.validate(a[l], this.constraint, k) : h.validate(a[l], k), f(e) || (j[i] = e), i++;
							return f(j) ? !0 : j
						}, this
					},
					Count: function(a) {
						return this.__class__ = "Count", this.count = a, this.validate = function(a) {
							if (!g(a)) throw new d(this, a, {
								value: b.errorCode.must_be_an_array
							});
							var c = "function" == typeof this.count ? this.count(a) : this.count;
							if (isNaN(Number(c))) throw new Error("Count must be a valid interger", c);
							if (c !== a.length) throw new d(this, a, {
								count: c
							});
							return !0
						}, this
					},
					Email: function() {
						return this.__class__ = "Email", this.validate = function(a) {
							var c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
							if ("string" != typeof a) throw new d(this, a, {
								value: b.errorCode.must_be_a_string
							});
							if (!c.test(a)) throw new d(this, a);
							return !0
						}, this
					},
					EqualTo: function(a) {
						if (this.__class__ = "EqualTo", "undefined" == typeof a) throw new Error("EqualTo must be instanciated with a value or a function");
						return this.reference = a, this.validate = function(a) {
							var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
							if (b !== a) throw new d(this, a, {
								value: b
							});
							return !0
						}, this
					},
					GreaterThan: function(a) {
						if (this.__class__ = "GreaterThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
						return this.threshold = a, this.validate = function(a) {
							if ("" === a || isNaN(Number(a))) throw new d(this, a, {
								value: b.errorCode.must_be_a_number
							});
							if (this.threshold >= a) throw new d(this, a, {
								threshold: this.threshold
							});
							return !0
						}, this
					},
					GreaterThanOrEqual: function(a) {
						if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
						return this.threshold = a, this.validate = function(a) {
							if ("" === a || isNaN(Number(a))) throw new d(this, a, {
								value: b.errorCode.must_be_a_number
							});
							if (this.threshold > a) throw new d(this, a, {
								threshold: this.threshold
							});
							return !0
						}, this
					},
					InstanceOf: function(a) {
						if (this.__class__ = "InstanceOf", "undefined" == typeof a) throw new Error("InstanceOf must be instanciated with a value");
						return this.classRef = a, this.validate = function(a) {
							if (!0 != a instanceof this.classRef) throw new d(this, a, {
								classRef: this.classRef
							});
							return !0
						}, this
					},
					Length: function(a) {
						if (this.__class__ = "Length", !a.min && !a.max) throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
						return this.min = a.min, this.max = a.max, this.validate = function(a) {
							if ("string" != typeof a && !g(a)) throw new d(this, a, {
								value: b.errorCode.must_be_a_string_or_array
							});
							if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min) throw new d(this, a, {
								min: this.min,
								max: this.max
							});
							if ("undefined" != typeof this.max && a.length > this.max) throw new d(this, a, {
								max: this.max
							});
							if ("undefined" != typeof this.min && a.length < this.min) throw new d(this, a, {
								min: this.min
							});
							return !0
						}, this
					},
					LessThan: function(a) {
						if (this.__class__ = "LessThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
						return this.threshold = a, this.validate = function(a) {
							if ("" === a || isNaN(Number(a))) throw new d(this, a, {
								value: b.errorCode.must_be_a_number
							});
							if (this.threshold <= a) throw new d(this, a, {
								threshold: this.threshold
							});
							return !0
						}, this
					},
					LessThanOrEqual: function(a) {
						if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
						return this.threshold = a, this.validate = function(a) {
							if ("" === a || isNaN(Number(a))) throw new d(this, a, {
								value: b.errorCode.must_be_a_number
							});
							if (this.threshold < a) throw new d(this, a, {
								threshold: this.threshold
							});
							return !0
						}, this
					},
					NotNull: function() {
						return this.__class__ = "NotNull", this.validate = function(a) {
							if (null === a || "undefined" == typeof a) throw new d(this, a);
							return !0
						}, this
					},
					NotBlank: function() {
						return this.__class__ = "NotBlank", this.validate = function(a) {
							if ("string" != typeof a) throw new d(this, a, {
								value: b.errorCode.must_be_a_string
							});
							if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
							return !0
						}, this
					},
					Null: function() {
						return this.__class__ = "Null", this.validate = function(a) {
							if (null !== a) throw new d(this, a);
							return !0
						}, this
					},
					Range: function(a, b) {
						if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b) throw new Error("Range assert expects min and max values");
						return this.min = a, this.max = b, this.validate = function(a) {
							try {
								return "string" == typeof a && isNaN(Number(a)) || g(a) ? (new e).Length({
									min: this.min,
									max: this.max
								}).validate(a) : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a), !0
							} catch (b) {
								throw new d(this, a, b.violation)
							}
							return !0
						}, this
					},
					Regexp: function(a, c) {
						if (this.__class__ = "Regexp", "undefined" == typeof a) throw new Error("You must give a regexp");
						return this.regexp = a, this.flag = c || "", this.validate = function(a) {
							if ("string" != typeof a) throw new d(this, a, {
								value: b.errorCode.must_be_a_string
							});
							if (!new RegExp(this.regexp, this.flag).test(a)) throw new d(this, a, {
								regexp: this.regexp,
								flag: this.flag
							});
							return !0
						}, this
					},
					Required: function() {
						return this.__class__ = "Required", this.validate = function(a) {
							if ("undefined" == typeof a) throw new d(this, a);
							try {
								"string" == typeof a ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a) : !0 === g(a) && (new e).Length({
									min: 1
								}).validate(a)
							} catch (b) {
								throw new d(this, a)
							}
							return !0
						}, this
					},
					Unique: function(a) {
						return this.__class__ = "Unique", "object" == typeof a && (this.key = a.key), this.validate = function(a) {
							var c, e = [];
							if (!g(a)) throw new d(this, a, {
								value: b.errorCode.must_be_an_array
							});
							for (var f = 0; f < a.length; f++)
								if (c = "object" == typeof a[f] ? a[f][this.key] : a[f], "undefined" != typeof c) {
									if (-1 !== e.indexOf(c)) throw new d(this, a, {
										value: c
									});
									e.push(c)
								}
							return !0
						}, this
					}
				}, a.Assert = e, a.Validator = b, a.Violation = d, a.Constraint = c, Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
					if (null === this) throw new TypeError;
					var b = Object(this),
						c = b.length >>> 0;
					if (0 === c) return -1;
					var d = 0;
					if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && 1 / 0 != d && d != -1 / 0 && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
					for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
						if (e in b && b[e] === a) return e;
					return -1
				});
				var f = function(a) {
						for (var b in a) return !1;
						return !0
					},
					g = function(a) {
						return "[object Array]" === Object.prototype.toString.call(a)
					};
				"function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function() {
					return a
				}) : "undefined" != typeof module && module.exports ? module.exports = a : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = a
			}(), Validator = "undefined" != typeof Validator ? Validator : module.exports;
		var e = function(a, b) {
			this.__class__ = "ParsleyValidator", this.Validator = Validator, this.locale = "en", this.init(a || {}, b || {})
		};
		e.prototype = {
			init: function(b, c) {
				this.catalog = c;
				for (var d in b) this.addValidator(d, b[d].fn, b[d].priority, b[d].requirementsTransformer);
				a.emit("parsley:validator:init")
			},
			setLocale: function(a) {
				if ("undefined" == typeof this.catalog[a]) throw new Error(a + " is not available in the catalog");
				return this.locale = a, this
			},
			addCatalog: function(a, b, c) {
				return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
			},
			addMessage: function(a, b, c) {
				return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}), this.catalog[a][b.toLowerCase()] = c, this
			},
			validate: function() {
				return (new this.Validator.Validator).validate.apply(new Validator.Validator, arguments)
			},
			addValidator: function(b, c, d, e) {
				return this.validators[b.toLowerCase()] = function(b) {
					return a.extend((new Validator.Assert).Callback(c, b), {
						priority: d,
						requirementsTransformer: e
					})
				}, this
			},
			updateValidator: function(a, b, c, d) {
				return this.addValidator(a, b, c, d)
			},
			removeValidator: function(a) {
				return delete this.validators[a], this
			},
			getErrorMessage: function(a) {
				var b;
				return b = "type" === a.name ? this.catalog[this.locale][a.name][a.requirements] : this.formatMessage(this.catalog[this.locale][a.name], a.requirements), "" !== b ? b : this.catalog[this.locale].defaultMessage
			},
			formatMessage: function(a, b) {
				if ("object" == typeof b) {
					for (var c in b) a = this.formatMessage(a, b[c]);
					return a
				}
				return "string" == typeof a ? a.replace(new RegExp("%s", "i"), b) : ""
			},
			validators: {
				notblank: function() {
					return a.extend((new Validator.Assert).NotBlank(), {
						priority: 2
					})
				},
				required: function() {
					return a.extend((new Validator.Assert).Required(), {
						priority: 512
					})
				},
				type: function(b) {
					var c;
					switch (b) {
						case "email":
							c = (new Validator.Assert).Email();
							break;
						case "range":
						case "number":
							c = (new Validator.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
							break;
						case "integer":
							c = (new Validator.Assert).Regexp("^-?\\d+$");
							break;
						case "digits":
							c = (new Validator.Assert).Regexp("^\\d+$");
							break;
						case "alphanum":
							c = (new Validator.Assert).Regexp("^\\w+$", "i");
							break;
						case "url":
							c = (new Validator.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
							break;
						default:
							throw new Error("validator type `" + b + "` is not supported")
					}
					return a.extend(c, {
						priority: 256
					})
				},
				pattern: function(b) {
					var c = "";
					return /^\/.*\/(?:[gimy]*)$/.test(b) && (c = b.replace(/.*\/([gimy]*)$/, "$1"), b = b.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")), a.extend((new Validator.Assert).Regexp(b, c), {
						priority: 64
					})
				},
				minlength: function(b) {
					return a.extend((new Validator.Assert).Length({
						min: b
					}), {
						priority: 30,
						requirementsTransformer: function() {
							return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
						}
					})
				},
				maxlength: function(b) {
					return a.extend((new Validator.Assert).Length({
						max: b
					}), {
						priority: 30,
						requirementsTransformer: function() {
							return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
						}
					})
				},
				length: function(b) {
					return a.extend((new Validator.Assert).Length({
						min: b[0],
						max: b[1]
					}), {
						priority: 32
					})
				},
				mincheck: function(a) {
					return this.minlength(a)
				},
				maxcheck: function(a) {
					return this.maxlength(a)
				},
				check: function(a) {
					return this.length(a)
				},
				min: function(b) {
					return a.extend((new Validator.Assert).GreaterThanOrEqual(b), {
						priority: 30,
						requirementsTransformer: function() {
							return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
						}
					})
				},
				max: function(b) {
					return a.extend((new Validator.Assert).LessThanOrEqual(b), {
						priority: 30,
						requirementsTransformer: function() {
							return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
						}
					})
				},
				range: function(b) {
					return a.extend((new Validator.Assert).Range(b[0], b[1]), {
						priority: 32,
						requirementsTransformer: function() {
							for (var a = 0; a < b.length; a++) b[a] = "string" != typeof b[a] || isNaN(b[a]) ? b[a] : parseInt(b[a], 10);
							return b
						}
					})
				},
				equalto: function(b) {
					return a.extend((new Validator.Assert).EqualTo(b), {
						priority: 256,
						requirementsTransformer: function() {
							return a(b).length ? a(b).val() : b
						}
					})
				}
			}
		};
		var f = function() {
			this.__class__ = "ParsleyUI"
		};
		f.prototype = {
			listen: function() {
				return a.listen("parsley:form:init", this, this.setupForm), a.listen("parsley:field:init", this, this.setupField), a.listen("parsley:field:validated", this, this.reflow), a.listen("parsley:form:validated", this, this.focus), a.listen("parsley:field:reset", this, this.reset), a.listen("parsley:form:destroy", this, this.destroy), a.listen("parsley:field:destroy", this, this.destroy), this
			},
			reflow: function(a) {
				if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
					var b = this._diff(a.validationResult, a._ui.lastValidationResult);
					a._ui.lastValidationResult = a.validationResult, a._ui.validatedOnce = !0, this.manageStatusClass(a), this.manageErrorsMessages(a, b), this.actualizeTriggers(a), (b.kept.length || b.added.length) && "undefined" == typeof a._ui.failedOnce && this.manageFailingFieldTrigger(a)
				}
			},
			getErrorsMessages: function(a) {
				if (!0 === a.validationResult) return [];
				for (var b = [], c = 0; c < a.validationResult.length; c++) b.push(this._getErrorMessage(a, a.validationResult[c].assert));
				return b
			},
			manageStatusClass: function(a) {
				!0 === a.validationResult ? this._successClass(a) : a.validationResult.length > 0 ? this._errorClass(a) : this._resetClass(a)
			},
			manageErrorsMessages: function(b, c) {
				if ("undefined" == typeof b.options.errorsMessagesDisabled) {
					if ("undefined" != typeof b.options.errorMessage) return c.added.length || c.kept.length ? (0 === b._ui.$errorsWrapper.find(".parsley-custom-error-message").length && b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")), b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)) : b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
					for (var d = 0; d < c.removed.length; d++) this.removeError(b, c.removed[d].assert.name, !0);
					for (d = 0; d < c.added.length; d++) this.addError(b, c.added[d].assert.name, void 0, c.added[d].assert, !0);
					for (d = 0; d < c.kept.length; d++) this.updateError(b, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
				}
			},
			addError: function(b, c, d, e, f) {
				b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(b, e))), !0 !== f && this._errorClass(b)
			},
			updateError: function(a, b, c, d, e) {
				a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d)), !0 !== e && this._errorClass(a)
			},
			removeError: function(a, b, c) {
				a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove(), !0 !== c && this.manageStatusClass(a)
			},
			focus: function(a) {
				if (!0 === a.validationResult || "none" === a.options.focus) return a._focusedField = null;
				a._focusedField = null;
				for (var b = 0; b < a.fields.length; b++)
					if (!0 !== a.fields[b].validationResult && a.fields[b].validationResult.length > 0 && "undefined" == typeof a.fields[b].options.noFocus) {
						if ("first" === a.options.focus) return a._focusedField = a.fields[b].$element, a._focusedField.focus();
						a._focusedField = a.fields[b].$element
					}
				return null === a._focusedField ? null : a._focusedField.focus()
			},
			_getErrorMessage: function(a, b) {
				var c = b.name + "Message";
				return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
			},
			_diff: function(a, b, c) {
				for (var d = [], e = [], f = 0; f < a.length; f++) {
					for (var g = !1, h = 0; h < b.length; h++)
						if (a[f].assert.name === b[h].assert.name) {
							g = !0;
							break
						}
					g ? e.push(a[f]) : d.push(a[f])
				}
				return {
					kept: e,
					added: d,
					removed: c ? [] : this._diff(b, a, !0).added
				}
			},
			setupForm: function(b) {
				b.$element.on("submit.Parsley", !1, a.proxy(b.onSubmitValidate, b)), !1 !== b.options.uiEnabled && b.$element.attr("novalidate", "")
			},
			setupField: function(b) {
				var c = {
					active: !1
				};
				!1 !== b.options.uiEnabled && (c.active = !0, b.$element.attr(b.options.namespace + "id", b.__id__), c.$errorClassHandler = this._manageClassHandler(b), c.errorsWrapperId = "parsley-id-" + ("undefined" != typeof b.options.multiple ? "multiple-" + b.options.multiple : b.__id__), c.$errorsWrapper = a(b.options.errorsWrapper).attr("id", c.errorsWrapperId), c.lastValidationResult = [], c.validatedOnce = !1, c.validationInformationVisible = !1, b._ui = c, this._insertErrorWrapper(b), this.actualizeTriggers(b))
			},
			_manageClassHandler: function(b) {
				if ("string" == typeof b.options.classHandler && a(b.options.classHandler).length) return a(b.options.classHandler);
				var c = b.options.classHandler(b);
				return "undefined" != typeof c && c.length ? c : "undefined" == typeof b.options.multiple || b.$element.is("select") ? b.$element : b.$element.parent()
			},
			_insertErrorWrapper: function(b) {
				var c;
				if ("string" == typeof b.options.errorsContainer) {
					if (a(b.options.errorsContainer).length) return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);
					window.console && window.console.warn && window.console.warn("The errors container `" + b.options.errorsContainer + "` does not exist in DOM")
				} else "function" == typeof b.options.errorsContainer && (c = b.options.errorsContainer(b));
				return "undefined" != typeof c && c.length ? c.append(b._ui.$errorsWrapper) : "undefined" == typeof b.options.multiple ? b.$element.after(b._ui.$errorsWrapper) : b.$element.parent().after(b._ui.$errorsWrapper)
			},
			actualizeTriggers: function(b) {
				var c = this;
				if (b.options.multiple ? a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
						a(this).off(".Parsley")
					}) : b.$element.off(".Parsley"), !1 !== b.options.trigger) {
					var d = b.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
					"" !== d && (b.options.multiple ? a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
						a(this).on(d.split(" ").join(".Parsley ") + ".Parsley", !1, a.proxy("function" == typeof b.eventValidate ? b.eventValidate : c.eventValidate, b))
					}) : b.$element.on(d.split(" ").join(".Parsley ") + ".Parsley", !1, a.proxy("function" == typeof b.eventValidate ? b.eventValidate : this.eventValidate, b)))
				}
			},
			eventValidate: function(a) {
				new RegExp("key").test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
			},
			manageFailingFieldTrigger: function(b) {
				return b._ui.failedOnce = !0, b.options.multiple && a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
					return new RegExp("change", "i").test(a(this).parsley().options.trigger || "") ? void 0 : a(this).on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
				}), b.$element.is("select") && !new RegExp("change", "i").test(b.options.trigger || "") ? b.$element.on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b)) : new RegExp("keyup", "i").test(b.options.trigger || "") ? void 0 : b.$element.on("keyup.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
			},
			reset: function(b) {
				b.$element.off(".Parsley"), b.$element.off(".ParsleyFailedOnce"), "undefined" != typeof b._ui && "ParsleyForm" !== b.__class__ && (b._ui.$errorsWrapper.children().each(function() {
					a(this).remove()
				}), this._resetClass(b), b._ui.validatedOnce = !1, b._ui.lastValidationResult = [], b._ui.validationInformationVisible = !1)
			},
			destroy: function(a) {
				this.reset(a), "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(), delete a._ui)
			},
			_successClass: function(a) {
				a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
			},
			_errorClass: function(a) {
				a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
			},
			_resetClass: function(a) {
				a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
			}
		};
		var g = function(c, d, e, f) {
			this.__class__ = "OptionsFactory", this.__id__ = b.hash(4), this.formOptions = null, this.fieldOptions = null, this.staticOptions = a.extend(!0, {}, c, d, e, {
				namespace: f
			})
		};
		g.prototype = {
			get: function(a) {
				if ("undefined" == typeof a.__class__) throw new Error("Parsley Instance expected");
				switch (a.__class__) {
					case "Parsley":
						return this.staticOptions;
					case "ParsleyForm":
						return this.getFormOptions(a);
					case "ParsleyField":
					case "ParsleyFieldMultiple":
						return this.getFieldOptions(a);
					default:
						throw new Error("Instance " + a.__class__ + " is not supported")
				}
			},
			getFormOptions: function(c) {
				return this.formOptions = b.attr(c.$element, this.staticOptions.namespace), a.extend({}, this.staticOptions, this.formOptions)
			},
			getFieldOptions: function(c) {
				return this.fieldOptions = b.attr(c.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof c.parent && (this.formOptions = this.getFormOptions(c.parent)), a.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
			}
		};
		var h = function(c, d) {
			if (this.__class__ = "ParsleyForm", this.__id__ = b.hash(4), "OptionsFactory" !== b.get(d, "__class__")) throw new Error("You must give an OptionsFactory instance");
			this.OptionsFactory = d, this.$element = a(c), this.validationResult = null, this.options = this.OptionsFactory.get(this)
		};
		h.prototype = {
			onSubmitValidate: function(b) {
				return this.validate(void 0, void 0, b), !1 === this.validationResult && b instanceof a.Event && (b.stopImmediatePropagation(), b.preventDefault()), this
			},
			validate: function(b, c, d) {
				this.submitEvent = d, this.validationResult = !0;
				var e = [];
				this._refreshFields(), a.emit("parsley:form:validate", this);
				for (var f = 0; f < this.fields.length; f++)(!b || this._isFieldInGroup(this.fields[f], b)) && (e = this.fields[f].validate(c), !0 !== e && e.length > 0 && this.validationResult && (this.validationResult = !1));
				return a.emit("parsley:form:validated", this), this.validationResult
			},
			isValid: function(a, b) {
				this._refreshFields();
				for (var c = 0; c < this.fields.length; c++)
					if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b)) return !1;
				return !0
			},
			_isFieldInGroup: function(c, d) {
				return b.isArray(c.options.group) ? -1 !== a.inArray(d, c.options.group) : c.options.group === d
			},
			_refreshFields: function() {
				return this.actualizeOptions()._bindFields()
			},
			_bindFields: function() {
				var a = this;
				return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function() {
					var b = new window.Parsley(this, {}, a);
					"ParsleyField" !== b.__class__ && "ParsleyFieldMultiple" !== b.__class__ || b.$element.is(b.options.excluded) || "undefined" == typeof a.fieldsMappedById[b.__class__ + "-" + b.__id__] && (a.fieldsMappedById[b.__class__ + "-" + b.__id__] = b, a.fields.push(b))
				}), this
			}
		};
		var i = function(c, d, e, f, g) {
				if (!new RegExp("ParsleyField").test(b.get(c, "__class__"))) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
				if ("function" != typeof window.ParsleyValidator.validators[d] && "Assert" !== window.ParsleyValidator.validators[d](e).__parentClass__) throw new Error("Valid validator expected");
				var h = function(a, c) {
					return "undefined" != typeof a.options[c + "Priority"] ? a.options[c + "Priority"] : b.get(window.ParsleyValidator.validators[c](e), "priority") || 2
				};
				return f = f || h(c, d), "function" == typeof window.ParsleyValidator.validators[d](e).requirementsTransformer && (e = window.ParsleyValidator.validators[d](e).requirementsTransformer()), a.extend(window.ParsleyValidator.validators[d](e), {
					name: d,
					requirements: e,
					priority: f,
					groups: [f],
					isDomConstraint: g || b.attr(c.$element, c.options.namespace, d)
				})
			},
			j = function(c, d, e) {
				this.__class__ = "ParsleyField", this.__id__ = b.hash(4), this.$element = a(c), "undefined" != typeof e ? (this.parent = e, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = d, this.options = this.OptionsFactory.get(this)), this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
			};
		j.prototype = {
			validate: function(b) {
				return this.value = this.getValue(), a.emit("parsley:field:validate", this), a.emit("parsley:field:" + (this.isValid(b, this.value) ? "success" : "error"), this), a.emit("parsley:field:validated", this), this.validationResult
			},
			isValid: function(a, b) {
				this.refreshConstraints();
				var c = this._getConstraintsSortedPriorities();
				if (b = b || this.getValue(), 0 === b.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== a) return this.validationResult = [];
				if (!1 === this.options.priorityEnabled) return !0 === (this.validationResult = this.validateThroughValidator(b, this.constraints, "Any"));
				for (var d = 0; d < c.length; d++)
					if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d]))) return !1;
				return !0
			},
			getValue: function() {
				var a;
				return a = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof a || null === a ? "" : !0 === this.options.trimValue ? a.replace(/^\s+|\s+$/g, "") : a
			},
			refreshConstraints: function() {
				return this.actualizeOptions()._bindConstraints()
			},
			addConstraint: function(a, b, c, d) {
				if (a = a.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[a]) {
					var e = new i(this, a, b, c, d);
					"undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), this.constraintsByName[e.name] = e
				}
				return this
			},
			removeConstraint: function(a) {
				for (var b = 0; b < this.constraints.length; b++)
					if (a === this.constraints[b].name) {
						this.constraints.splice(b, 1);
						break
					}
				return this
			},
			updateConstraint: function(a, b, c) {
				return this.removeConstraint(a).addConstraint(a, b, c)
			},
			_bindConstraints: function() {
				for (var a = [], b = 0; b < this.constraints.length; b++) !1 === this.constraints[b].isDomConstraint && a.push(this.constraints[b]);
				this.constraints = a;
				for (var c in this.options) this.addConstraint(c, this.options[c]);
				return this._bindHtml5Constraints()
			},
			_bindHtml5Constraints: function() {
				(this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0);
				var a = this.$element.attr("type");
				return "undefined" == typeof a ? this : "number" === a ? this.addConstraint("type", "integer", void 0, !0) : new RegExp(a, "i").test("email url range") ? this.addConstraint("type", a, void 0, !0) : this
			},
			_isRequired: function() {
				return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
			},
			_getConstraintsSortedPriorities: function() {
				for (var a = [], b = 0; b < this.constraints.length; b++) - 1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
				return a.sort(function(a, b) {
					return b - a
				}), a
			}
		};
		var k = function() {
			this.__class__ = "ParsleyFieldMultiple"
		};
		k.prototype = {
			addElement: function(a) {
				return this.$elements.push(a), this
			},
			refreshConstraints: function() {
				var b;
				if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
				for (var c = 0; c < this.$elements.length; c++)
					if (a("html").has(this.$elements[c]).length) {
						b = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
						for (var d = 0; d < b.length; d++) this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint)
					} else this.$elements.splice(c, 1);
				return this
			},
			getValue: function() {
				if ("undefined" != typeof this.options.value) return this.options.value;
				if (this.$element.is("input[type=radio]")) return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
				if (this.$element.is("input[type=checkbox]")) {
					var b = [];
					return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
						b.push(a(this).val())
					}), b.length ? b : []
				}
				return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
			},
			_init: function(a) {
				return this.$elements = [this.$element], this.options.multiple = a, this
			}
		};
		var l = a({}),
			m = {};
		a.listen = function(a) {
			if ("undefined" == typeof m[a] && (m[a] = []), "function" == typeof arguments[1]) return m[a].push({
				fn: arguments[1]
			});
			if ("object" == typeof arguments[1] && "function" == typeof arguments[2]) return m[a].push({
				fn: arguments[2],
				ctxt: arguments[1]
			});
			throw new Error("Wrong parameters")
		}, a.listenTo = function(a, b, c) {
			if ("undefined" == typeof m[b] && (m[b] = []), !(a instanceof j || a instanceof h)) throw new Error("Must give Parsley instance");
			if ("string" != typeof b || "function" != typeof c) throw new Error("Wrong parameters");
			m[b].push({
				instance: a,
				fn: c
			})
		}, a.unsubscribe = function(a, b) {
			if ("undefined" != typeof m[a]) {
				if ("string" != typeof a || "function" != typeof b) throw new Error("Wrong arguments");
				for (var c = 0; c < m[a].length; c++)
					if (m[a][c].fn === b) return m[a].splice(c, 1)
			}
		}, a.unsubscribeTo = function(a, b) {
			if ("undefined" != typeof m[b]) {
				if (!(a instanceof j || a instanceof h)) throw new Error("Must give Parsley instance");
				for (var c = 0; c < m[b].length; c++)
					if ("undefined" != typeof m[b][c].instance && m[b][c].instance.__id__ === a.__id__) return m[b].splice(c, 1)
			}
		}, a.unsubscribeAll = function(a) {
			"undefined" != typeof m[a] && delete m[a]
		}, a.emit = function(a, b) {
			if ("undefined" != typeof m[a])
				for (var c = 0; c < m[a].length; c++)
					if ("undefined" != typeof m[a][c].instance) {
						if (b instanceof j || b instanceof h)
							if (m[a][c].instance.__id__ !== b.__id__) {
								if (m[a][c].instance instanceof h && b instanceof j)
									for (var d = 0; d < m[a][c].instance.fields.length; d++)
										if (m[a][c].instance.fields[d].__id__ === b.__id__) {
											m[a][c].fn.apply(l, Array.prototype.slice.call(arguments, 1));
											continue
										}
							} else m[a][c].fn.apply(l, Array.prototype.slice.call(arguments, 1))
					} else m[a][c].fn.apply("undefined" != typeof m[a][c].ctxt ? m[a][c].ctxt : l, Array.prototype.slice.call(arguments, 1))
		}, a.subscribed = function() {
			return m
		}, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = a.extend(window.ParsleyConfig.i18n.en || {}, {
			defaultMessage: "This value seems to be invalid.",
			type: {
				email: "This value should be a valid email.",
				url: "This value should be a valid url.",
				number: "This value should be a valid number.",
				integer: "This value should be a valid integer.",
				digits: "This value should be digits.",
				alphanum: "This value should be alphanumeric."
			},
			notblank: "This value should not be blank.",
			required: "This value is required.",
			pattern: "This value seems to be invalid.",
			min: "This value should be greater than or equal to %s.",
			max: "This value should be lower than or equal to %s.",
			range: "This value should be between %s and %s.",
			minlength: "This value is too short. It should have %s characters or more.",
			maxlength: "This value is too long. It should have %s characters or fewer.",
			length: "This value length is invalid. It should be between %s and %s characters long.",
			mincheck: "You must select at least %s choices.",
			maxcheck: "You must select %s choices or fewer.",
			check: "You must select between %s and %s choices.",
			equalto: "This value should be the same."
		}), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
		var n = function(c, d, e) {
			if (this.__class__ = "Parsley", this.__version__ = "2.0.4", this.__id__ = b.hash(4), "undefined" == typeof c) throw new Error("You must give an element");
			if ("undefined" != typeof e && "ParsleyForm" !== e.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
			return this.init(a(c), d, e)
		};
		n.prototype = {
			init: function(a, d, e) {
				if (!a.length) throw new Error("You must bind Parsley on an existing element.");
				if (this.$element = a, this.$element.data("Parsley")) {
					var f = this.$element.data("Parsley");
					return "undefined" != typeof e && (f.parent = e), f
				}
				return this.OptionsFactory = new g(c, b.get(window, "ParsleyConfig") || {}, d, this.getNamespace(d)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || b.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(e) : this.bind("parsleyField", e) : this
			},
			isMultiple: function() {
				return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
			},
			handleMultiple: function(c) {
				var d, e, f, g = this;
				if (this.options = a.extend(this.options, c ? c.OptionsFactory.get(c) : {}, b.attr(this.$element, this.options.namespace)), this.options.multiple ? e = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? e = d = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (e = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.bind("parsleyFieldMultiple", c, e || this.__id__);
				if ("undefined" == typeof e) return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
				if (e = e.replace(/(:|\.|\[|\]|\$)/g, ""), "undefined" != typeof d && a('input[name="' + d + '"]').each(function() {
						a(this).is("input[type=radio], input[type=checkbox]") && a(this).attr(g.options.namespace + "multiple", e)
					}), a("[" + this.options.namespace + "multiple=" + e + "]").length)
					for (var h = 0; h < a("[" + this.options.namespace + "multiple=" + e + "]").length; h++)
						if ("undefined" != typeof a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley")) {
							f = a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley"), this.$element.data("ParsleyFieldMultiple") || (f.addElement(this.$element), this.$element.attr(this.options.namespace + "id", f.__id__));
							break
						}
				return this.bind("parsleyField", c, e, !0), f || this.bind("parsleyFieldMultiple", c, e)
			},
			getNamespace: function(a) {
				return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof b.get(a, "namespace") ? a.namespace : "undefined" != typeof b.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : c.namespace
			},
			bind: function(c, e, f, g) {
				var i;
				switch (c) {
					case "parsleyForm":
						i = a.extend(new h(this.$element, this.OptionsFactory), new d, window.ParsleyExtend)._bindFields();
						break;
					case "parsleyField":
						i = a.extend(new j(this.$element, this.OptionsFactory, e), new d, window.ParsleyExtend);
						break;
					case "parsleyFieldMultiple":
						i = a.extend(new j(this.$element, this.OptionsFactory, e), new d, new k, window.ParsleyExtend)._init(f);
						break;
					default:
						throw new Error(c + "is not a supported Parsley type")
				}
				return "undefined" != typeof f && b.setAttr(this.$element, this.options.namespace, "multiple", f), "undefined" != typeof g ? (this.$element.data("ParsleyFieldMultiple", i), i) : (new RegExp("ParsleyF", "i").test(i.__class__) && (this.$element.data("Parsley", i), a.emit("parsley:" + ("parsleyForm" === c ? "form" : "field") + ":init", i)), i)
			}
		}, a.fn.parsley = a.fn.psly = function(b) {
			if (this.length > 1) {
				var c = [];
				return this.each(function() {
					c.push(a(this).parsley(b))
				}), c
			}
			return a(this).length ? new n(this, b) : void(window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
		}, window.ParsleyUI = "function" == typeof b.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new f).listen(), "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}), window.Parsley = window.psly = n, window.ParsleyUtils = b, window.ParsleyValidator = new e(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), !1 !== b.get(window, "ParsleyConfig.autoBind") && a(document).ready(function() {
			a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
		})
	}),
	function(a, b) {
		function c(b, c, d, e) {
			var f, g = b.text().split(c),
				h = "";
			g.length && (a(g).each(function(a, b) {
				f = "", " " === b && (f = " empty", b = "&nbsp;"), h += '<span class="' + d + (a + 1) + f + '">' + b + "</span>" + e
			}), b.empty().append(h))
		}
		a.fn.fitText = function(b, c) {
			var d = {
				minFontSize: Number.NEGATIVE_INFINITY,
				maxFontSize: Number.POSITIVE_INFINITY
			};
			return this.each(function() {
				var e = a(this),
					f = b || 1;
				c && a.extend(d, c);
				var g = function() {
					e.css("font-size", Math.max(Math.min(e.width() / (10 * f), parseFloat(d.maxFontSize)), parseFloat(d.minFontSize)))
				};
				g(), a(window).resize(g)
			})
		};
		var d = {
			init: function() {
				return this.each(function() {
					c(a(this), "", "char", "")
				})
			},
			words: function() {
				return this.each(function() {
					c(a(this), " ", "word", " ")
				})
			},
			lines: function() {
				return this.each(function() {
					var b = "eefec303079ad17405c889e092e105b0";
					c(a(this).children("br").replaceWith(b).end(), b, "line", "")
				})
			}
		};
		a.fn.lettering = function(b) {
			return b && d[b] ? d[b].apply(this, [].slice.call(arguments, 1)) : "letters" !== b && b ? (a.error("Method " + b + " does not exist on jQuery.lettering"), this) : d.init.apply(this, [].slice.call(arguments, 0))
		}, a.Arctext = function(b, c) {
			this.$el = a(c), this._init(b)
		}, a.Arctext.defaults = {
			radius: 0,
			dir: 1,
			rotate: !0,
			fitText: !1
		}, a.Arctext.prototype = {
			_init: function(b) {
				this.options = a.extend(!0, {}, a.Arctext.defaults, b), this._applyLettering(), this.$el.data("arctext", !0), this._calc(), this._rotateWord(), this._loadEvents()
			},
			_applyLettering: function() {
				this.$el.lettering(), this.options.fitText && this.$el.fitText(), this.$letters = this.$el.find("span").css("display", "inline-block")
			},
			_calc: function() {
				return -1 === this.options.radius ? !1 : (this._calcBase(), void this._calcLetters())
			},
			_calcBase: function() {
				this.dtWord = 0;
				var b = this;
				this.$letters.each(function() {
					var c = a(this),
						d = c.outerWidth(!0);
					b.dtWord += d, c.data("center", b.dtWord - d / 2)
				});
				var c = this.dtWord / 2;
				this.options.radius < c && (this.options.radius = c), this.dtArcBase = this.dtWord;
				var d = 2 * Math.asin(this.dtArcBase / (2 * this.options.radius));
				this.dtArc = this.options.radius * d
			},
			_calcLetters: function() {
				var b = this,
					c = 0;
				this.$letters.each(function() {
					var d = a(this),
						e = d.outerWidth(!0) / b.dtWord * b.dtArc,
						f = e / b.options.radius,
						g = b.options.radius * Math.cos(f / 2),
						h = Math.acos((b.dtWord / 2 - c) / b.options.radius),
						i = h + f / 2,
						j = Math.cos(i) * g,
						k = Math.sin(i) * g,
						l = c + Math.abs(b.dtWord / 2 - j - c),
						m = 0 | l - d.data("center"),
						n = 0 | b.options.radius - k,
						o = b.options.rotate ? 0 | -Math.asin(j / b.options.radius) * (180 / Math.PI) : 0;
					c = 2 * l - c, d.data({
						x: m,
						y: 1 === b.options.dir ? n : -n,
						a: 1 === b.options.dir ? o : -o
					})
				})
			},
			_rotateWord: function(b) {
				if (!this.$el.data("arctext")) return !1;
				var c = this;
				this.$letters.each(function() {
					var d = a(this),
						e = -1 === c.options.radius ? "none" : "translateX(" + d.data("x") + "px) translateY(" + d.data("y") + "px) rotate(" + d.data("a") + "deg)",
						f = b ? "all " + (b.speed || 0) + "ms " + (b.easing || "linear") : "none";
					d.css({
						"-webkit-transition": f,
						"-moz-transition": f,
						"-o-transition": f,
						"-ms-transition": f,
						transition: f
					}).css({
						"-webkit-transform": e,
						"-moz-transform": e,
						"-o-transform": e,
						"-ms-transform": e,
						transform: e
					})
				})
			},
			_loadEvents: function() {
				if (this.options.fitText) {
					var b = this;
					a(window).on("resize.arctext", function() {
						b._calc(), b._rotateWord()
					})
				}
			},
			set: function(a) {
				return a.radius || a.dir || "undefined" !== a.rotate ? (this.options.radius = a.radius || this.options.radius, this.options.dir = a.dir || this.options.dir, a.rotate !== b && (this.options.rotate = a.rotate), this._calc(), void this._rotateWord(a.animation)) : !1
			},
			destroy: function() {
				this.options.radius = -1, this._rotateWord(), this.$letters.removeData("x y a center"), this.$el.removeData("arctext"), a(window).off(".arctext")
			}
		};
		var e = function(a) {
			this.console && console.error(a)
		};
		a.fn.arctext = function(b) {
			if ("string" == typeof b) {
				var c = Array.prototype.slice.call(arguments, 1);
				this.each(function() {
					var d = a.data(this, "arctext");
					return d ? a.isFunction(d[b]) && "_" !== b.charAt(0) ? void d[b].apply(d, c) : void e("no such method '" + b + "' for arctext instance") : void e("cannot call methods on arctext prior to initialization; attempted to call method '" + b + "'")
				})
			} else this.each(function() {
				var c = a.data(this, "arctext");
				c || a.data(this, "arctext", new a.Arctext(b, this))
			});
			return this
		}
	}(jQuery),
	function(a, b) {
		"object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b()
	}(this, function() {
		"use strict";

		function a(a, b) {
			var c, d = document.createElement(a || "div");
			for (c in b) d[c] = b[c];
			return d
		}

		function b(a) {
			for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
			return a
		}

		function c(a, b, c, d) {
			var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
				f = .01 + c / d * 100,
				g = Math.max(1 - (1 - a) / b * (100 - f), a),
				h = j.substring(0, j.indexOf("Animation")).toLowerCase(),
				i = h && "-" + h + "-" || "";
			return l[e] || (m.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", m.cssRules.length), l[e] = 1), e
		}

		function d(a, b) {
			var c, d, e = a.style;
			for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < k.length; d++)
				if (c = k[d] + b, void 0 !== e[c]) return c;
			return void 0 !== e[b] ? b : void 0
		}

		function e(a, b) {
			for (var c in b) a.style[d(a, c) || c] = b[c];
			return a
		}

		function f(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = arguments[b];
				for (var d in c) void 0 === a[d] && (a[d] = c[d])
			}
			return a
		}

		function g(a, b) {
			return "string" == typeof a ? a : a[b % a.length]
		}

		function h(a) {
			this.opts = f(a || {}, h.defaults, n)
		}

		function i() {
			function c(b, c) {
				return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
			}
			m.addRule(".spin-vml", "behavior:url(#default#VML)"), h.prototype.lines = function(a, d) {
				function f() {
					return e(c("group", {
						coordsize: k + " " + k,
						coordorigin: -j + " " + -j
					}), {
						width: k,
						height: k
					})
				}

				function h(a, h, i) {
					b(m, b(e(f(), {
						rotation: 360 / d.lines * a + "deg",
						left: ~~h
					}), b(e(c("roundrect", {
						arcsize: d.corners
					}), {
						width: j,
						height: d.width,
						left: d.radius,
						top: -d.width >> 1,
						filter: i
					}), c("fill", {
						color: g(d.color, a),
						opacity: d.opacity
					}), c("stroke", {
						opacity: 0
					}))))
				}
				var i, j = d.length + d.width,
					k = 2 * j,
					l = 2 * -(d.width + d.length) + "px",
					m = e(f(), {
						position: "absolute",
						top: l,
						left: l
					});
				if (d.shadow)
					for (i = 1; i <= d.lines; i++) h(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
				for (i = 1; i <= d.lines; i++) h(i);
				return b(a, m)
			}, h.prototype.opacity = function(a, b, c, d) {
				var e = a.firstChild;
				d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
			}
		}
		var j, k = ["webkit", "Moz", "ms", "O"],
			l = {},
			m = function() {
				var c = a("style", {
					type: "text/css"
				});
				return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet
			}(),
			n = {
				lines: 12,
				length: 7,
				width: 5,
				radius: 10,
				rotate: 0,
				corners: 1,
				color: "#000",
				direction: 1,
				speed: 1,
				trail: 100,
				opacity: .25,
				fps: 20,
				zIndex: 2e9,
				className: "spinner",
				top: "50%",
				left: "50%",
				position: "absolute"
			};
		h.defaults = {}, f(h.prototype, {
			spin: function(b) {
				this.stop(); {
					var c = this,
						d = c.opts,
						f = c.el = e(a(0, {
							className: d.className
						}), {
							position: d.position,
							width: 0,
							zIndex: d.zIndex
						});
					d.radius + d.length + d.width
				}
				if (e(f, {
						left: d.left,
						top: d.top
					}), b && b.insertBefore(f, b.firstChild || null), f.setAttribute("role", "progressbar"), c.lines(f, c.opts), !j) {
					var g, h = 0,
						i = (d.lines - 1) * (1 - d.direction) / 2,
						k = d.fps,
						l = k / d.speed,
						m = (1 - d.opacity) / (l * d.trail / 100),
						n = l / d.lines;
					! function o() {
						h++;
						for (var a = 0; a < d.lines; a++) g = Math.max(1 - (h + (d.lines - a) * n) % l * m, d.opacity), c.opacity(f, a * d.direction + i, g, d);
						c.timeout = c.el && setTimeout(o, ~~(1e3 / k))
					}()
				}
				return c
			},
			stop: function() {
				var a = this.el;
				return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0), this
			},
			lines: function(d, f) {
				function h(b, c) {
					return e(a(), {
						position: "absolute",
						width: f.length + f.width + "px",
						height: f.width + "px",
						background: b,
						boxShadow: c,
						transformOrigin: "left",
						transform: "rotate(" + ~~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.radius + "px,0)",
						borderRadius: (f.corners * f.width >> 1) + "px"
					})
				}
				for (var i, k = 0, l = (f.lines - 1) * (1 - f.direction) / 2; k < f.lines; k++) i = e(a(), {
					position: "absolute",
					top: 1 + ~(f.width / 2) + "px",
					transform: f.hwaccel ? "translate3d(0,0,0)" : "",
					opacity: f.opacity,
					animation: j && c(f.opacity, f.trail, l + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"
				}), f.shadow && b(i, e(h("#000", "0 0 4px #000"), {
					top: "2px"
				})), b(d, b(i, h(g(f.color, k), "0 0 1px rgba(0,0,0,.1)")));
				return d
			},
			opacity: function(a, b, c) {
				b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
			}
		});
		var o = e(a("group"), {
			behavior: "url(#default#VML)"
		});
		return !d(o, "transform") && o.adj ? i() : j = d(o, "animation"), h
	}),
	function(a, b) {
		"object" == typeof exports ? module.exports = b(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], b) : a.Vialli = b(a.Spinner)
	}(this, function(a) {
		"use strict";

		function b(a) {
			if ("undefined" == typeof a) return void console.warn("Vialli button target must be defined.");
			a.querySelector(".vialli-label") || (a.innerHTML = '<span class="vialli-label">' + a.innerHTML + "</span>");
			var b, c = document.createElement("span");
			c.className = "vialli-spinner", a.appendChild(c);
			var d, e = {
				start: function() {
					return b || (b = g(a)), a.setAttribute("disabled", ""), a.setAttribute("data-loading", ""), clearTimeout(d), b.spin(c), this.setProgress(0), this
				},
				startAfter: function(a) {
					return clearTimeout(d), d = setTimeout(function() {
						e.start()
					}, a), this
				},
				stop: function() {
					return a.removeAttribute("disabled"), a.removeAttribute("data-loading"), clearTimeout(d), b && (d = setTimeout(function() {
						b.stop()
					}, 1e3)), this
				},
				toggle: function() {
					return this.isLoading() ? this.stop() : this.start(), this
				},
				setProgress: function(b) {
					b = Math.max(Math.min(b, 1), 0);
					var c = a.querySelector(".vialli-progress");
					0 === b && c && c.parentNode ? c.parentNode.removeChild(c) : (c || (c = document.createElement("div"), c.className = "vialli-progress", a.appendChild(c)), c.style.width = (b || 0) * a.offsetWidth + "px")
				},
				enable: function() {
					return this.stop(), this
				},
				disable: function() {
					return this.stop(), a.setAttribute("disabled", ""), this
				},
				isLoading: function() {
					return a.hasAttribute("data-loading")
				},
				remove: function() {
					clearTimeout(d), a.removeAttribute("disabled", ""), a.removeAttribute("data-loading", ""), b && (b.stop(), b = null);
					for (var c = 0, f = i.length; f > c; c++)
						if (e === i[c]) {
							i.splice(c, 1);
							break
						}
				}
			};
			return i.push(e), e
		}

		function c(a, b) {
			for (; a.parentNode && a.tagName !== b;) a = a.parentNode;
			return b === a.tagName ? a : void 0
		}

		function d(a) {
			for (var b = ["input", "textarea"], c = [], d = 0; d < b.length; d++)
				for (var e = a.getElementsByTagName(b[d]), f = 0; f < e.length; f++) e[f].hasAttribute("required") && c.push(e[f]);
			return c
		}

		function e(a, e) {
			e = e || {};
			var f = [];
			"string" == typeof a ? f = h(document.querySelectorAll(a)) : "object" == typeof a && "string" == typeof a.nodeName && (f = [a]);
			for (var g = 0, i = f.length; i > g; g++) ! function() {
				var a = f[g];
				if ("function" == typeof a.addEventListener) {
					var h = b(a),
						i = -1;
					a.addEventListener("click", function() {
						var b = !0,
							f = c(a, "FORM");
						if ("undefined" != typeof f)
							for (var g = d(f), j = 0; j < g.length; j++) "" === g[j].value.replace(/^\s+|\s+$/g, "") && (b = !1);
						b && (h.startAfter(1), "number" == typeof e.timeout && (clearTimeout(i), i = setTimeout(h.stop, e.timeout)), "function" == typeof e.callback && e.callback.apply(null, [h]))
					}, !1)
				}
			}()
		}

		function f() {
			for (var a = 0, b = i.length; b > a; a++) i[a].stop()
		}

		function g(b) {
			var c, d = b.offsetHeight;
			0 === d && (d = parseFloat(window.getComputedStyle(b).height)), d > 32 && (d *= .8), b.hasAttribute("data-spinner-size") && (d = parseInt(b.getAttribute("data-spinner-size"), 10)), b.hasAttribute("data-spinner-color") && (c = b.getAttribute("data-spinner-color"));
			var e = 12,
				f = .2 * d,
				g = .6 * f,
				h = 7 > f ? 2 : 3;
			return new a({
				color: c || "#fff",
				lines: e,
				radius: f,
				length: g,
				width: h,
				zIndex: "auto",
				top: "auto",
				left: "auto",
				className: ""
			})
		}

		function h(a) {
			for (var b = [], c = 0; c < a.length; c++) b.push(a[c]);
			return b
		}
		var i = [];
		return {
			bind: e,
			create: b,
			stopAll: f
		}
	}),
	function(a, b) {
		if (void 0 === b) return console.error("jQuery required for Vialli.jQuery");
		var c = [];
		b = b.extend(b, {
			vialli: function(b) {
				"stopAll" === b && a.stopAll()
			}
		}), b.fn = b.extend(b.fn, {
			vialli: function(d) {
				var e = c.slice.call(arguments, 1);
				return "bind" === d ? (e.unshift(b(this).selector), a.bind.apply(a, e)) : b(this).each(function() {
					var c, f = b(this);
					void 0 === d ? f.data("vialli", a.create(this)) : (c = f.data("vialli"), c[d].apply(c, e))
				}), this
			}
		})
	}(this.Vialli, this.jQuery), $(document).foundation(), FastClick.attach(document.body),
	function(a) {
		var b = function() {
			a(".cat").waypoint(function(b) {
				switch (b) {
					case "down":
						a(this).parent().addClass("peek");
						break;
					case "up":
						a(this).parent().removeClass("peek expand")
				}
			}, {
				offset: "80%"
			}).waypoint(function(b) {
				switch (b) {
					case "down":
						a(this).parent().removeClass("peek expand");
						break;
					case "up":
						a(this).parent().addClass("peek")
				}
			}, {
				offset: "10%"
			}).click(function(b) {
				b.preventDefault(), a(this).parent().toggleClass("expand")
			})
		};
		a('nav a[href!="#"]').click(function() {
			a("input#show-menu").attr("checked", !1);
			var b = a(this).attr("href").substr(1),
				c = a("#" + b).position();
			a("html,body").animate({
				scrollTop: c.top
			}, 700)
		});
		var c = a("input#show-menu");
		a(".logo-mobile").click(function() {
			1 == c.prop("checked") ? c.prop("checked", !1) : c.prop("checked", !0)
		});
		var d;
		a("a[data-modal='rsvp']").click(function(b) {
			b.preventDefault(), d = a(window).scrollTop(), a("#rsvp").addClass("open"), a("input#show-menu").attr("checked", !1), setTimeout(function() {
				a(".main-container").addClass("hide")
			}, 1e3)
		}), a("a.rsvp-close").click(function(b) {
			b.preventDefault(), a(".main-container").removeClass("hide"), a("body").scrollTop(d), a("#rsvp").removeClass("open")
		}), a("#rsvp form input").change(function() {
			var b = a(this).attr("id");
			switch (b) {
				case "going":
					a("#your-details").addClass("show"), a(".radio-group.plusone").addClass("show"), a("#your-details .your-details-going").addClass("show");
					break;
				case "not-going":
					a("#your-details").addClass("show"), a(".radio-group.plusone").removeClass("show"), a("#plusone-details").removeClass("show"), a("#your-details .your-details-going").removeClass("show");
					break;
				case "no-plusone":
					a("#plusone-details").removeClass("show");
					break;
				case "plusone":
					a("#plusone-details").addClass("show")
			}
		});
		var e = a("#rsvp button.rsvp-submit").vialli();
		a("#rsvp button.rsvp-submit").click(function(b) {
			b.preventDefault();
			var c = a("input[name=going]:checked", "#rsvp").val(),
				d = a("input[name=plusone]:checked").val(),
				e = a("#rsvp form"),
				g = !1;
			switch (c) {
				case "yes":
					g = e.parsley().validate("yes" === d ? "going-plusone" : "going");
					break;
				case "no":
					g = e.parsley().validate("not-going");
					break;
				default:
					g = e.parsley().validate("going")
			}
			g && f(c, d)
		});
		var f = function(b, c) {
				e.vialli("start");
				var d = "rsvp@singlahabib.com",
					f = a("input[name=guest-name]", "#rsvp").val(),
					g = "RSVP from " + f,
					h = "Name: " + f + "<br/>";
				"yes" === b ? (h += "Going: Yes<br/>", h += "Address: " + a("input[name=guest-address]", "#rsvp").val() + "<br/>", h += "Meal: " + a("input[name=guest-meal]:checked", "#rsvp").val() + "<br/>", a("textarea[name=guest-notes]", "#rsvp").val() && (h += "Notes: " + a("textarea[name=guest-notes]", "#rsvp").val() + "<br/>"), "yes" === c ? (h += "Plus 1: Yes<br/>", h += "Guest Name: " + a("input[name=plusone-name]", "#rsvp").val() + "<br/>", h += "Guest Meal: " + a("input[name=plusone-meal]:checked", "#rsvp").val() + "<br/>") : h += "Plus 1: No<br/>") : (h += "Going: No<br/>", a("textarea[name=guest-notes]", "#rsvp").val() && (h += "Notes: " + a("textarea[name=guest-notes]", "#rsvp").val() + "<br/>")), a.ajax({
					type: "POST",
					url: "https://mandrillapp.com/api/1.0/messages/send.json",
					data: {
						key: "444nOhDtNECZLeNBUr-8Sg",
						message: {
							from_email: d,
							from_name: f,
							headers: {
								"Reply-To": d
							},
							subject: g,
							html: h,
							to: [{
								email: d,
								name: "Caroline & Arvin",
								type: "to"
							}]
						}
					}
				}).done(function() {
					document.cookie = "rsvp=true", a.vialli("stopAll"), a("#rsvp form").addClass("hide"), a("#rsvp-thankyou").addClass("animate-in"), setTimeout(function() {
						a("a.rsvp-close").trigger("click")
					}, 1500)
				}).fail(function() {
					a.vialli("stopAll"), a("#rsvp form").hide(), a("#rsvp-error").addClass("animate-in")
				})
			},
			g = 0;
		a("a.move-it-trigger").click(function(b) {
			b.preventDefault(), g || (a(".move-it-player").append('<audio controls><source src="misc/move-it-move-it.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>').fadeIn(), g++)
		}), a("#search-text").keyup(function(b) {
			13 == b.which && this.blur(), a.extend(a.expr[":"], {
				containsi: function(a, b, c) {
					return (a.textContent || a.innerText || "").toLowerCase().indexOf((c[3] || "").toLowerCase()) >= 0
				}
			});
			var c = this.value.split(" "),
				d = a("#table-items").find("tr");
			return "" == this.value ? void d.show() : (d.hide(), void d.filter(function() {
				for (var b = a(this), d = 0; d < c.length; ++d)
					if ("" !== c[d])
						if (a.isNumeric(c[d])) {
							if (b.children(".table-number").first().text() === c[d]) return !0
						} else if (b.is(":containsi('" + c[d] + "')")) return !0;
				return !1
			}).show())
		}), a(window).bind("load", function() {
			a("h1.intro-title").arctext({
				radius: 2500
			}), a("h2.intro-title").arctext({
				radius: 1e3
			}), b(), a(".flexslider").flexslider({
				animation: "slide",
				pauseOnAction: !0,
				pauseOnHover: !0,
				useCSS: !0,
				start: function() {
					a.waypoints("refresh")
				}
			});
			var c = document.cookie.replace(/(?:(?:^|.*;\s*)rsvp\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			c && (a("#rsvp form").addClass("hide"), a("#rsvp-thankyou").addClass("animate-in")), a("body").addClass("loaded")
		})
	}(jQuery);
