/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-cssanimations-iepp-cssclasses-testprop-testallprops-domprefixes-load
 */
window.Modernizr = (function (a, b, c) { function A(a, b) { const c = a.charAt(0).toUpperCase() + a.substr(1); const d = (`${a} ${n.join(`${c} `)}${c}`).split(' '); return z(d, b); } function z(a, b) { for (const d in a) if (k[a[d]] !== c) return b == 'pfx' ? a[d] : !0; return !1; } function y(a, b) { return !!~(`${a}`).indexOf(b); } function x(a, b) { return typeof a === b; } function w(a, b) { return v(prefixes.join(`${a};`) + (b || '')); } function v(a) { k.cssText = a; } const d = '2.0.6'; const e = {}; const f = !0; const g = b.documentElement; const h = b.head || b.getElementsByTagName('head')[0]; const i = 'modernizr'; let j = b.createElement(i); var k = j.style; let l; const m = Object.prototype.toString; var n = 'Webkit Moz O ms Khtml'.split(' '); const o = {}; const p = {}; const q = {}; const r = []; let s; const t = {}.hasOwnProperty; let u; !x(t, c) && !x(t.call, c) ? u = function (a, b) { return t.call(a, b); } : u = function (a, b) { return b in a && x(a.constructor.prototype[b], c); }, o.cssanimations = function () { return A('animationName'); }; for (const B in o)u(o, B) && (s = B.toLowerCase(), e[s] = o[B](), r.push((e[s] ? '' : 'no-') + s)); v(''), j = l = null, a.attachEvent && (function () { const a = b.createElement('div'); a.innerHTML = '<elem></elem>'; return a.childNodes.length !== 1; }()) && (function (a, b) { function s(a) { let b = -1; while (++b < g)a.createElement(f[b]); }a.iepp = a.iepp || {}; const d = a.iepp; const e = d.html5elements || 'abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video'; var f = e.split('|'); var g = f.length; const h = new RegExp(`(^|\\s)(${e})`, 'gi'); const i = new RegExp(`<(/*)(${e})`, 'gi'); const j = /^\s*[\{\}]\s*$/; const k = new RegExp(`(^|[^\\n]*?\\s)(${e})([^\\n]*)({[\\n\\w\\W]*?})`, 'gi'); const l = b.createDocumentFragment(); const m = b.documentElement; const n = m.firstChild; const o = b.createElement('body'); const p = b.createElement('style'); const q = /print|all/; let r; d.getCSS = function (a, b) { if (`${a}` === c) return ''; let e = -1; const f = a.length; let g; const h = []; while (++e < f) { g = a[e]; if (g.disabled) continue; b = g.media || b, q.test(b) && h.push(d.getCSS(g.imports, b), g.cssText), b = 'all'; } return h.join(''); }, d.parseCSS = function (a) { const b = []; let c; while ((c = k.exec(a)) != null)b.push(((j.exec(c[1]) ? '\n' : c[1]) + c[2] + c[3]).replace(h, '$1.iepp_$2') + c[4]); return b.join('\n'); }, d.writeHTML = function () { let a = -1; r = r || b.body; while (++a < g) { const c = b.getElementsByTagName(f[a]); const d = c.length; let e = -1; while (++e < d)c[e].className.indexOf('iepp_') < 0 && (c[e].className += ` iepp_${f[a]}`); }l.appendChild(r), m.appendChild(o), o.className = r.className, o.id = r.id, o.innerHTML = r.innerHTML.replace(i, '<$1font'); }, d._beforePrint = function () { p.styleSheet.cssText = d.parseCSS(d.getCSS(b.styleSheets, 'all')), d.writeHTML(); }, d.restoreHTML = function () { o.innerHTML = '', m.removeChild(o), m.appendChild(r); }, d._afterPrint = function () { d.restoreHTML(), p.styleSheet.cssText = ''; }, s(b), s(l); d.disablePP || (n.insertBefore(p, n.firstChild), p.media = 'print', p.className = 'iepp-printshim', a.attachEvent('onbeforeprint', d._beforePrint), a.attachEvent('onafterprint', d._afterPrint)); }(a, b)), e._version = d, e._domPrefixes = n, e.testProp = function (a) { return z([a]); }, e.testAllProps = A, g.className = g.className.replace(/\bno-js\b/, '') + (f ? ` js ${r.join(' ')}` : ''); return e; }(this, this.document)), (function (a, b, c) { function k(a) { return !a || a == 'loaded' || a == 'complete'; } function j() { let a = 1; let b = -1; while (p.length - ++b) if (p[b].s && !(a = p[b].r)) break; a && g(); } function i(a) { const c = b.createElement('script'); let d; c.src = a.s, c.onreadystatechange = c.onload = function () { !d && k(c.readyState) && (d = 1, j(), c.onload = c.onreadystatechange = null); }, m(() => { d || (d = 1, j()); }, H.errorTimeout), a.e ? c.onload() : n.parentNode.insertBefore(c, n); } function h(a) { const c = b.createElement('link'); let d; c.href = a.s, c.rel = 'stylesheet', c.type = 'text/css'; if (!a.e && (w || r)) { var e = function (a) { m(() => { if (!d) try { a.sheet.cssRules.length ? (d = 1, j()) : e(a); } catch (b) { b.code == 1e3 || b.message == 'security' || b.message == 'denied' ? (d = 1, m(() => { j(); }, 0)) : e(a); } }, 0); }; e(c); } else c.onload = function () { d || (d = 1, m(() => { j(); }, 0)); }, a.e && c.onload(); m(() => { d || (d = 1, j()); }, H.errorTimeout), !a.e && n.parentNode.insertBefore(c, n); } function g() { const a = p.shift(); q = 1, a ? a.t ? m(() => { a.t == 'c' ? h(a) : i(a); }, 0) : (a(), j()) : q = 0; } function f(a, c, d, e, f, h) { function i() { !o && k(l.readyState) && (r.r = o = 1, !q && j(), l.onload = l.onreadystatechange = null, m(() => { u.removeChild(l); }, 0)); } var l = b.createElement(a); var o = 0; var r = { t: d, s: c, e: h }; l.src = l.data = c, !s && (l.style.display = 'none'), l.width = l.height = '0', a != 'object' && (l.type = d), l.onload = l.onreadystatechange = i, a == 'img' ? l.onerror = i : a == 'script' && (l.onerror = function () { r.e = r.r = 1, g(); }), p.splice(e, 0, r), u.insertBefore(l, s ? null : n), m(() => { o || (u.removeChild(l), r.r = r.e = o = 1, j()); }, H.errorTimeout); } function e(a, b, c) { const d = b == 'c' ? z : y; q = 0, b = b || 'j', C(a) ? f(d, a, b, this.i++, l, c) : (p.splice(this.i++, 0, a), p.length == 1 && g()); return this; } function d() { const a = H; a.loader = { load: e, i: 0 }; return a; } var l = b.documentElement; var m = a.setTimeout; var n = b.getElementsByTagName('script')[0]; const o = {}.toString; var p = []; var q = 0; var r = 'MozAppearance' in l.style; var s = r && !!b.createRange().compareNode; const t = r && !s; var u = s ? l : n.parentNode; const v = a.opera && o.call(a.opera) == '[object Opera]'; var w = 'webkitAppearance' in l.style; const x = w && 'async' in b.createElement('script'); var y = r ? 'object' : v || x ? 'img' : 'script'; var z = w ? 'img' : y; const A = Array.isArray || function (a) { return o.call(a) == '[object Array]'; }; const B = function (a) { return Object(a) === a; }; var C = function (a) { return typeof a === 'string'; }; const D = function (a) { return o.call(a) == '[object Function]'; }; const E = []; const F = {}; let G; let H; H = function (a) { function f(a) { const b = a.split('!'); const c = E.length; const d = b.pop(); const e = b.length; let f = { url: d, origUrl: d, prefixes: b }; let g; let h; for (h = 0; h < e; h++)g = F[b[h]], g && (f = g(f)); for (h = 0; h < c; h++)f = E[h](f); return f; } function e(a, b, e, g, h) { const i = f(a); const j = i.autoCallback; if (!i.bypass) { b && (b = D(b) ? b : b[a] || b[g] || b[a.split('/').pop().split('?')[0]]); if (i.instead) return i.instead(a, b, e, g, h); e.load(i.url, i.forceCSS || !i.forceJS && /css$/.test(i.url) ? 'c' : c, i.noexec), (D(b) || D(j)) && e.load(() => { d(), b && b(i.origUrl, h, g), j && j(i.origUrl, h, g); }); } } function b(a, b) { function c(a) { if (C(a))e(a, h, b, 0, d); else if (B(a)) for (i in a)a.hasOwnProperty(i) && e(a[i], h, b, i, d); } var d = !!a.test; const f = d ? a.yep : a.nope; const g = a.load || a.both; var h = a.callback; let i; c(f), c(g), a.complete && b.load(a.complete); } let g; let h; const i = this.yepnope.loader; if (C(a))e(a, 0, i, 0); else if (A(a)) for (g = 0; g < a.length; g++)h = a[g], C(h) ? e(h, 0, i, 0) : A(h) ? H(h) : B(h) && b(h, i); else B(a) && b(a, i); }, H.addPrefix = function (a, b) { F[a] = b; }, H.addFilter = function (a) { E.push(a); }, H.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', G = function () { b.removeEventListener('DOMContentLoaded', G, 0), b.readyState = 'complete'; }, 0)), a.yepnope = d(); }(this, this.document)), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)); };