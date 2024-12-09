import {
  a5 as O,
  a6 as ye,
  a7 as be,
  ab as t,
  ad as te,
  aR as je,
  aS as ze,
  aT as Be,
  aU as Ce,
  aj as Ye,
  aV as Qe,
  aW as $e,
  a8 as Re,
  aX as ke,
  aY as qe,
  aZ as $,
  al as we,
  a_ as A,
  a$ as G,
  b0 as Fe,
  b1 as He,
  aa as Ge,
  a9 as Xe,
  b2 as Ze,
  b3 as Je,
  ac as We,
  b4 as Ke,
  b5 as ge,
  b6 as ve,
  b7 as et,
  b8 as _e,
  b9 as tt,
  ba as nt,
} from "./index-7dc28fc3.js";
import { g as Ne, A as Oe } from "./token-color-d1e432e6.js";
import { C as Ve } from "./chevron-left-4b788cbe.js";
import { a as rt, b as at } from "./index-22c73b31.js";
function Se() {
  return (
    (Se =
      Object.assign ||
      function (f) {
        for (var w = 1; w < arguments.length; w++) {
          var x = arguments[w];
          for (var g in x)
            Object.prototype.hasOwnProperty.call(x, g) && (f[g] = x[g]);
        }
        return f;
      }),
    Se.apply(this, arguments)
  );
}
function it(f, w) {
  if (f == null) return {};
  var x = ot(f, w),
    g,
    b;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(f);
    for (b = 0; b < d.length; b++)
      (g = d[b]),
        !(w.indexOf(g) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(f, g) &&
          (x[g] = f[g]);
  }
  return x;
}
function ot(f, w) {
  if (f == null) return {};
  var x = {},
    g = Object.keys(f),
    b,
    d;
  for (d = 0; d < g.length; d++)
    (b = g[d]), !(w.indexOf(b) >= 0) && (x[b] = f[b]);
  return x;
}
var Te = O.forwardRef(function (f, w) {
  var x = f.color,
    g = x === void 0 ? "currentColor" : x,
    b = f.size,
    d = b === void 0 ? 24 : b,
    h = it(f, ["color", "size"]);
  return ye.createElement(
    "svg",
    Se(
      {
        ref: w,
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: d,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: g,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      h
    ),
    ye.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    }),
    ye.createElement("polyline", { points: "15 3 21 3 21 9" }),
    ye.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  );
});
Te.propTypes = { color: be.string, size: be.oneOfType([be.string, be.number]) };
Te.displayName = "ExternalLink";
const st = Te,
  lt = {
    LevUSDC:
      "This is a vault which takes advantage of non-directional trades to earn high yield. This strategy simultaneously goes long and short, allowing it to collect funding from the short while not being exposed to directional downside.",
    HodlwETH:
      "This is a vault which takes advantage of non-directional trades to earn high yield. This strategy simultaneously goes long and short, allowing it to collect funding from the short while not being exposed to directional downside. Unlike the USDC vault, initial wETH is not hedged out, allowing profits from the strategy to DCA into ETH, creating in-kind yield.",
    HodlwBTC:
      "This is a vault which takes advantage of non-directional trades to earn high yield. This strategy simultaneously goes long and short, allowing it to collect funding from the short while not being exposed to directional downside. Unlike the USDC vault, initial wBTC is not hedged out, allowing profits from the strategy to DCA into BTC, creating in-kind yield.",
  },
  ct = {
    weth: "hodlweth",
    eth: "hodlweth",
    rbtc: "hodlwbtc",
    wrbtc: "hodlwbtc",
  };
function ut(f) {
  const w = O.useRef(null),
    [x, g] = O.useState(!1),
    [b, d] = O.useState(f.tokenSelection);
  O.useEffect(() => {
    const s = (o) => {
      w.current && !w.current.contains(o.target) && g(!1);
    };
    return (
      document.addEventListener("click", s),
      () => {
        document.removeEventListener("click", s);
      }
    );
  }, [w]);
  const h = (s) => {
      f.onTokenSelectionChange(s), d(s), g(!1);
    },
    e = () => {
      g((s) => !s);
    },
    n = f.optionLabels[b];
  return t.jsxs("div", {
    className: "relative",
    ref: w,
    children: [
      t.jsxs(te, {
        onClick: e,
        color: "neutral",
        variant: "outlined",
        children: [
          t.jsx("img", {
            src: je(ct[n.toLowerCase()], "svg"),
            alt: n,
            className: "w-4 h-4 rounded-full",
          }),
          n,
          t.jsx(ze, { className: "w-4 h-4" }),
        ],
      }),
      t.jsx(Be, {
        children:
          x &&
          t.jsx(Ce.div, {
            className:
              "absolute z-10 mt-1 bg-background-light dark:bg-background-dark divide-y divide-gray-200 dark:divide-opacity-10 rounded-lg shadow w-44",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.15, ease: "easeInOut" },
            children: t.jsx("ul", {
              className: "py-2 text-sm",
              children: Object.values(Pe).map((s) =>
                t.jsx(
                  "li",
                  {
                    children: t.jsx("a", {
                      className:
                        "block px-4 py-2 hover:bg-primary hover:dark:bg-primary-hover cursor-pointer",
                      onClick: () => h(s),
                      children: f.optionLabels[s],
                    }),
                  },
                  s
                )
              ),
            }),
          }),
      }),
    ],
  });
}
var Le = { exports: {} };
(function (f, w) {
  (function (x, g) {
    f.exports = g(O);
  })(typeof self < "u" ? self : Qe, function (x) {
    return (function (g) {
      var b = {};
      function d(h) {
        if (b[h]) return b[h].exports;
        var e = (b[h] = { i: h, l: !1, exports: {} });
        return g[h].call(e.exports, e, e.exports, d), (e.l = !0), e.exports;
      }
      return (
        (d.m = g),
        (d.c = b),
        (d.d = function (h, e, n) {
          d.o(h, e) || Object.defineProperty(h, e, { enumerable: !0, get: n });
        }),
        (d.r = function (h) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(h, "__esModule", { value: !0 });
        }),
        (d.t = function (h, e) {
          if (
            (1 & e && (h = d(h)),
            8 & e || (4 & e && typeof h == "object" && h && h.__esModule))
          )
            return h;
          var n = Object.create(null);
          if (
            (d.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: h }),
            2 & e && typeof h != "string")
          )
            for (var s in h)
              d.d(
                n,
                s,
                function (o) {
                  return h[o];
                }.bind(null, s)
              );
          return n;
        }),
        (d.n = function (h) {
          var e =
            h && h.__esModule
              ? function () {
                  return h.default;
                }
              : function () {
                  return h;
                };
          return d.d(e, "a", e), e;
        }),
        (d.o = function (h, e) {
          return Object.prototype.hasOwnProperty.call(h, e);
        }),
        (d.p = ""),
        d((d.s = 2))
      );
    })([
      function (g, b) {
        g.exports = x;
      },
      function (g, b, d) {
        var h = {
          linear: function (e, n, s, o) {
            return ((s - n) * e) / o + n;
          },
          easeInQuad: function (e, n, s, o) {
            return (s - n) * (e /= o) * e + n;
          },
          easeOutQuad: function (e, n, s, o) {
            return -(s - n) * (e /= o) * (e - 2) + n;
          },
          easeInOutQuad: function (e, n, s, o) {
            var c = s - n;
            return (e /= o / 2) < 1
              ? (c / 2) * e * e + n
              : (-c / 2) * (--e * (e - 2) - 1) + n;
          },
          easeInCubic: function (e, n, s, o) {
            return (s - n) * (e /= o) * e * e + n;
          },
          easeOutCubic: function (e, n, s, o) {
            return (s - n) * ((e = e / o - 1) * e * e + 1) + n;
          },
          easeInOutCubic: function (e, n, s, o) {
            var c = s - n;
            return (e /= o / 2) < 1
              ? (c / 2) * e * e * e + n
              : (c / 2) * ((e -= 2) * e * e + 2) + n;
          },
          easeInQuart: function (e, n, s, o) {
            return (s - n) * (e /= o) * e * e * e + n;
          },
          easeOutQuart: function (e, n, s, o) {
            return -(s - n) * ((e = e / o - 1) * e * e * e - 1) + n;
          },
          easeInOutQuart: function (e, n, s, o) {
            var c = s - n;
            return (e /= o / 2) < 1
              ? (c / 2) * e * e * e * e + n
              : (-c / 2) * ((e -= 2) * e * e * e - 2) + n;
          },
          easeInQuint: function (e, n, s, o) {
            return (s - n) * (e /= o) * e * e * e * e + n;
          },
          easeOutQuint: function (e, n, s, o) {
            return (s - n) * ((e = e / o - 1) * e * e * e * e + 1) + n;
          },
          easeInOutQuint: function (e, n, s, o) {
            var c = s - n;
            return (e /= o / 2) < 1
              ? (c / 2) * e * e * e * e * e + n
              : (c / 2) * ((e -= 2) * e * e * e * e + 2) + n;
          },
          easeInSine: function (e, n, s, o) {
            var c = s - n;
            return -c * Math.cos((e / o) * (Math.PI / 2)) + c + n;
          },
          easeOutSine: function (e, n, s, o) {
            return (s - n) * Math.sin((e / o) * (Math.PI / 2)) + n;
          },
          easeInOutSine: function (e, n, s, o) {
            return (-(s - n) / 2) * (Math.cos((Math.PI * e) / o) - 1) + n;
          },
          easeInExpo: function (e, n, s, o) {
            return e == 0 ? n : (s - n) * Math.pow(2, 10 * (e / o - 1)) + n;
          },
          easeOutExpo: function (e, n, s, o) {
            var c = s - n;
            return e == o ? n + c : c * (1 - Math.pow(2, (-10 * e) / o)) + n;
          },
          easeInOutExpo: function (e, n, s, o) {
            var c = s - n;
            return e === 0
              ? n
              : e === o
              ? n + c
              : (e /= o / 2) < 1
              ? (c / 2) * Math.pow(2, 10 * (e - 1)) + n
              : (c / 2) * (2 - Math.pow(2, -10 * --e)) + n;
          },
          easeInCirc: function (e, n, s, o) {
            return -(s - n) * (Math.sqrt(1 - (e /= o) * e) - 1) + n;
          },
          easeOutCirc: function (e, n, s, o) {
            return (s - n) * Math.sqrt(1 - (e = e / o - 1) * e) + n;
          },
          easeInOutCirc: function (e, n, s, o) {
            var c = s - n;
            return (e /= o / 2) < 1
              ? (-c / 2) * (Math.sqrt(1 - e * e) - 1) + n
              : (c / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
          },
          easeInElastic: function (e, n, s, o) {
            var c,
              m,
              v,
              p = s - n;
            return (
              (v = 1.70158),
              e === 0
                ? n
                : (e /= o) == 1
                ? n + p
                : ((m = 0) || (m = 0.3 * o),
                  (c = p) < Math.abs(p)
                    ? ((c = p), (v = m / 4))
                    : (v = (m / (2 * Math.PI)) * Math.asin(p / c)),
                  -c *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e * o - v) * (2 * Math.PI)) / m) +
                    n)
            );
          },
          easeOutElastic: function (e, n, s, o) {
            var c,
              m,
              v,
              p = s - n;
            return (
              (v = 1.70158),
              e === 0
                ? n
                : (e /= o) == 1
                ? n + p
                : ((m = 0) || (m = 0.3 * o),
                  (c = p) < Math.abs(p)
                    ? ((c = p), (v = m / 4))
                    : (v = (m / (2 * Math.PI)) * Math.asin(p / c)),
                  c *
                    Math.pow(2, -10 * e) *
                    Math.sin(((e * o - v) * (2 * Math.PI)) / m) +
                    p +
                    n)
            );
          },
          easeInOutElastic: function (e, n, s, o) {
            var c,
              m,
              v,
              p = s - n;
            return (
              (v = 1.70158),
              e === 0
                ? n
                : (e /= o / 2) == 2
                ? n + p
                : ((m = 0) || (m = o * 0.44999999999999996),
                  (c = p) < Math.abs(p)
                    ? ((c = p), (v = m / 4))
                    : (v = (m / (2 * Math.PI)) * Math.asin(p / c)),
                  e < 1
                    ? c *
                        Math.pow(2, 10 * (e -= 1)) *
                        Math.sin(((e * o - v) * (2 * Math.PI)) / m) *
                        -0.5 +
                      n
                    : c *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e * o - v) * (2 * Math.PI)) / m) *
                        0.5 +
                      p +
                      n)
            );
          },
          easeInBack: function (e, n, s, o, c) {
            return (
              c === void 0 && (c = 1.70158),
              (s - n) * (e /= o) * e * ((c + 1) * e - c) + n
            );
          },
          easeOutBack: function (e, n, s, o, c) {
            return (
              c === void 0 && (c = 1.70158),
              (s - n) * ((e = e / o - 1) * e * ((c + 1) * e + c) + 1) + n
            );
          },
          easeInOutBack: function (e, n, s, o, c) {
            var m = s - n;
            return (
              c === void 0 && (c = 1.70158),
              (e /= o / 2) < 1
                ? (m / 2) * (e * e * ((1 + (c *= 1.525)) * e - c)) + n
                : (m / 2) * ((e -= 2) * e * ((1 + (c *= 1.525)) * e + c) + 2) +
                  n
            );
          },
          easeInBounce: function (e, n, s, o) {
            var c = s - n;
            return c - h.easeOutBounce(o - e, 0, c, o) + n;
          },
          easeOutBounce: function (e, n, s, o) {
            var c = s - n;
            return (e /= o) < 0.36363636363636365
              ? c * (7.5625 * e * e) + n
              : e < 0.7272727272727273
              ? c * (7.5625 * (e -= 0.5454545454545454) * e + 0.75) + n
              : e < 0.9090909090909091
              ? c * (7.5625 * (e -= 0.8181818181818182) * e + 0.9375) + n
              : c * (7.5625 * (e -= 0.9545454545454546) * e + 0.984375) + n;
          },
          easeInOutBounce: function (e, n, s, o) {
            var c = s - n;
            return e < o / 2
              ? 0.5 * h.easeInBounce(2 * e, 0, c, o) + n
              : 0.5 * h.easeOutBounce(2 * e - o, 0, c, o) + 0.5 * c + n;
          },
        };
        g.exports = h;
      },
      function (g, b, d) {
        g.exports = d(3);
      },
      function (g, b, d) {
        d.r(b),
          d.d(b, "ReactConfetti", function () {
            return ie;
          });
        var h,
          e,
          n = d(0),
          s = d.n(n),
          o = d(1),
          c = d.n(o);
        function m(r, i) {
          return r + Math.random() * (i - r);
        }
        function v(r, i) {
          for (var l = 0; l < i.length; l++) {
            var a = i[l];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(r, a.key, a);
          }
        }
        function p(r, i, l) {
          return (
            i in r
              ? Object.defineProperty(r, i, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (r[i] = l),
            r
          );
        }
        (function (r) {
          (r[(r.Circle = 0)] = "Circle"),
            (r[(r.Square = 1)] = "Square"),
            (r[(r.Strip = 2)] = "Strip");
        })(h || (h = {})),
          (function (r) {
            (r[(r.Positive = 1)] = "Positive"),
              (r[(r.Negative = -1)] = "Negative");
          })(e || (e = {}));
        var F = (function () {
          function r(a, j, u, y) {
            (function (de, he) {
              if (!(de instanceof he))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
              p(this, "context", void 0),
              p(this, "radius", void 0),
              p(this, "x", void 0),
              p(this, "y", void 0),
              p(this, "w", void 0),
              p(this, "h", void 0),
              p(this, "vx", void 0),
              p(this, "vy", void 0),
              p(this, "shape", void 0),
              p(this, "angle", void 0),
              p(this, "angularSpin", void 0),
              p(this, "color", void 0),
              p(this, "rotateY", void 0),
              p(this, "rotationDirection", void 0),
              p(this, "getOptions", void 0),
              (this.getOptions = j);
            var S,
              C,
              N = this.getOptions(),
              z = N.colors,
              B = N.initialVelocityX,
              R = N.initialVelocityY;
            (this.context = a),
              (this.x = u),
              (this.y = y),
              (this.w = m(5, 20)),
              (this.h = m(5, 20)),
              (this.radius = m(5, 10)),
              (this.vx = typeof B == "number" ? m(-B, B) : m(B.min, B.max)),
              (this.vy = typeof R == "number" ? m(-R, 0) : m(R.min, R.max)),
              (this.shape =
                ((S = 0),
                (C = 2),
                Math.floor(S + Math.random() * (C - S + 1)))),
              (this.angle = (m(0, 360) * Math.PI) / 180),
              (this.angularSpin = m(-0.2, 0.2)),
              (this.color = z[Math.floor(Math.random() * z.length)]),
              (this.rotateY = m(0, 1)),
              (this.rotationDirection = m(0, 1) ? e.Positive : e.Negative);
          }
          var i, l;
          return (
            (i = r),
            (l = [
              {
                key: "update",
                value: function () {
                  var a = this.getOptions(),
                    j = a.gravity,
                    u = a.wind,
                    y = a.friction,
                    S = a.opacity,
                    C = a.drawShape;
                  (this.x += this.vx),
                    (this.y += this.vy),
                    (this.vy += j),
                    (this.vx += u),
                    (this.vx *= y),
                    (this.vy *= y),
                    this.rotateY >= 1 && this.rotationDirection === e.Positive
                      ? (this.rotationDirection = e.Negative)
                      : this.rotateY <= -1 &&
                        this.rotationDirection === e.Negative &&
                        (this.rotationDirection = e.Positive);
                  var N = 0.1 * this.rotationDirection;
                  if (
                    ((this.rotateY += N),
                    (this.angle += this.angularSpin),
                    this.context.save(),
                    this.context.translate(this.x, this.y),
                    this.context.rotate(this.angle),
                    this.context.scale(1, this.rotateY),
                    this.context.rotate(this.angle),
                    this.context.beginPath(),
                    (this.context.fillStyle = this.color),
                    (this.context.strokeStyle = this.color),
                    (this.context.globalAlpha = S),
                    (this.context.lineCap = "round"),
                    (this.context.lineWidth = 2),
                    C && typeof C == "function")
                  )
                    C.call(this, this.context);
                  else
                    switch (this.shape) {
                      case h.Circle:
                        this.context.beginPath(),
                          this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                          this.context.fill();
                        break;
                      case h.Square:
                        this.context.fillRect(
                          -this.w / 2,
                          -this.h / 2,
                          this.w,
                          this.h
                        );
                        break;
                      case h.Strip:
                        this.context.fillRect(
                          -this.w / 6,
                          -this.h / 2,
                          this.w / 3,
                          this.h
                        );
                    }
                  this.context.closePath(), this.context.restore();
                },
              },
            ]) && v(i.prototype, l),
            r
          );
        })();
        function T(r, i, l) {
          return (
            i in r
              ? Object.defineProperty(r, i, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (r[i] = l),
            r
          );
        }
        var I = function r(i, l) {
          var a = this;
          (function (u, y) {
            if (!(u instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            T(this, "canvas", void 0),
            T(this, "context", void 0),
            T(this, "getOptions", void 0),
            T(this, "x", 0),
            T(this, "y", 0),
            T(this, "w", 0),
            T(this, "h", 0),
            T(this, "lastNumberOfPieces", 0),
            T(this, "tweenInitTime", Date.now()),
            T(this, "particles", []),
            T(this, "particlesGenerated", 0),
            T(this, "removeParticleAt", function (u) {
              a.particles.splice(u, 1);
            }),
            T(this, "getParticle", function () {
              var u = m(a.x, a.w + a.x),
                y = m(a.y, a.h + a.y);
              return new F(a.context, a.getOptions, u, y);
            }),
            T(this, "animate", function () {
              var u = a.canvas,
                y = a.context,
                S = a.particlesGenerated,
                C = a.lastNumberOfPieces,
                N = a.getOptions(),
                z = N.run,
                B = N.recycle,
                R = N.numberOfPieces,
                de = N.debug,
                he = N.tweenFunction,
                fe = N.tweenDuration;
              if (!z) return !1;
              var pe = a.particles.length,
                X = B ? pe : S,
                oe = Date.now();
              if (X < R) {
                C !== R && ((a.tweenInitTime = oe), (a.lastNumberOfPieces = R));
                for (
                  var De = a.tweenInitTime,
                    Ue = he(oe - De > fe ? fe : Math.max(0, oe - De), X, R, fe),
                    Ae = Math.round(Ue - X),
                    Ee = 0;
                  Ee < Ae;
                  Ee++
                )
                  a.particles.push(a.getParticle());
                a.particlesGenerated += Ae;
              }
              return (
                de &&
                  ((y.font = "12px sans-serif"),
                  (y.fillStyle = "#333"),
                  (y.textAlign = "right"),
                  y.fillText(
                    "Particles: ".concat(pe),
                    u.width - 10,
                    u.height - 20
                  )),
                a.particles.forEach(function (me, Me) {
                  me.update(),
                    (me.y > u.height ||
                      me.y < -100 ||
                      me.x > u.width + 100 ||
                      me.x < -100) &&
                      (B && X <= R
                        ? (a.particles[Me] = a.getParticle())
                        : a.removeParticleAt(Me));
                }),
                pe > 0 || X < R
              );
            }),
            (this.canvas = i);
          var j = this.canvas.getContext("2d");
          if (!j) throw new Error("Could not get canvas context");
          (this.context = j), (this.getOptions = l);
        };
        function M(r, i) {
          var l = Object.keys(r);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(r);
            i &&
              (a = a.filter(function (j) {
                return Object.getOwnPropertyDescriptor(r, j).enumerable;
              })),
              l.push.apply(l, a);
          }
          return l;
        }
        function q(r) {
          for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i] != null ? arguments[i] : {};
            i % 2
              ? M(Object(l), !0).forEach(function (a) {
                  P(r, a, l[a]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
              : M(Object(l)).forEach(function (a) {
                  Object.defineProperty(
                    r,
                    a,
                    Object.getOwnPropertyDescriptor(l, a)
                  );
                });
          }
          return r;
        }
        function E(r, i) {
          for (var l = 0; l < i.length; l++) {
            var a = i[l];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(r, a.key, a);
          }
        }
        function P(r, i, l) {
          return (
            i in r
              ? Object.defineProperty(r, i, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (r[i] = l),
            r
          );
        }
        var W = {
            width: typeof window < "u" ? window.innerWidth : 300,
            height: typeof window < "u" ? window.innerHeight : 200,
            numberOfPieces: 200,
            friction: 0.99,
            wind: 0,
            gravity: 0.1,
            initialVelocityX: 4,
            initialVelocityY: 10,
            colors: [
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFEB3B",
              "#FFC107",
              "#FF9800",
              "#FF5722",
              "#795548",
            ],
            opacity: 1,
            debug: !1,
            tweenFunction: c.a.easeInOutQuad,
            tweenDuration: 5e3,
            recycle: !0,
            run: !0,
          },
          Z = (function () {
            function r(a, j) {
              var u = this;
              (function (S, C) {
                if (!(S instanceof C))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
                P(this, "canvas", void 0),
                P(this, "context", void 0),
                P(this, "_options", void 0),
                P(this, "generator", void 0),
                P(this, "rafId", void 0),
                P(this, "setOptionsWithDefaults", function (S) {
                  var C = {
                    confettiSource: { x: 0, y: 0, w: u.canvas.width, h: 0 },
                  };
                  (u._options = q(q(q({}, C), W), S)),
                    Object.assign(u, S.confettiSource);
                }),
                P(this, "update", function () {
                  var S = u.options,
                    C = S.run,
                    N = S.onConfettiComplete,
                    z = u.canvas,
                    B = u.context;
                  C &&
                    ((B.fillStyle = "white"),
                    B.clearRect(0, 0, z.width, z.height)),
                    u.generator.animate()
                      ? (u.rafId = requestAnimationFrame(u.update))
                      : (N &&
                          typeof N == "function" &&
                          u.generator.particlesGenerated > 0 &&
                          N.call(u, u),
                        (u._options.run = !1));
                }),
                P(this, "reset", function () {
                  u.generator &&
                    u.generator.particlesGenerated > 0 &&
                    ((u.generator.particlesGenerated = 0),
                    (u.generator.particles = []),
                    (u.generator.lastNumberOfPieces = 0));
                }),
                P(this, "stop", function () {
                  (u.options = { run: !1 }),
                    u.rafId &&
                      (cancelAnimationFrame(u.rafId), (u.rafId = void 0));
                }),
                (this.canvas = a);
              var y = this.canvas.getContext("2d");
              if (!y) throw new Error("Could not get canvas context");
              (this.context = y),
                (this.generator = new I(this.canvas, function () {
                  return u.options;
                })),
                (this.options = j),
                this.update();
            }
            var i, l;
            return (
              (i = r),
              (l = [
                {
                  key: "options",
                  get: function () {
                    return this._options;
                  },
                  set: function (a) {
                    var j = this._options && this._options.run,
                      u = this._options && this._options.recycle;
                    this.setOptionsWithDefaults(a),
                      this.generator &&
                        (Object.assign(
                          this.generator,
                          this.options.confettiSource
                        ),
                        typeof a.recycle == "boolean" &&
                          a.recycle &&
                          u === !1 &&
                          (this.generator.lastNumberOfPieces =
                            this.generator.particles.length)),
                      typeof a.run == "boolean" &&
                        a.run &&
                        j === !1 &&
                        this.update();
                  },
                },
              ]) && E(i.prototype, l),
              r
            );
          })();
        function V(r) {
          return (
            (function (i) {
              if (Array.isArray(i)) return J(i);
            })(r) ||
            (function (i) {
              if (typeof Symbol < "u" && Symbol.iterator in Object(i))
                return Array.from(i);
            })(r) ||
            U(r) ||
            (function () {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function H(r) {
          return (H =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (i) {
                  return typeof i;
                }
              : function (i) {
                  return i &&
                    typeof Symbol == "function" &&
                    i.constructor === Symbol &&
                    i !== Symbol.prototype
                    ? "symbol"
                    : typeof i;
                })(r);
        }
        function _() {
          return (_ =
            Object.assign ||
            function (r) {
              for (var i = 1; i < arguments.length; i++) {
                var l = arguments[i];
                for (var a in l)
                  Object.prototype.hasOwnProperty.call(l, a) && (r[a] = l[a]);
              }
              return r;
            }).apply(this, arguments);
        }
        function L(r, i) {
          var l = Object.keys(r);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(r);
            i &&
              (a = a.filter(function (j) {
                return Object.getOwnPropertyDescriptor(r, j).enumerable;
              })),
              l.push.apply(l, a);
          }
          return l;
        }
        function D(r) {
          for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i] != null ? arguments[i] : {};
            i % 2
              ? L(Object(l), !0).forEach(function (a) {
                  k(r, a, l[a]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
              : L(Object(l)).forEach(function (a) {
                  Object.defineProperty(
                    r,
                    a,
                    Object.getOwnPropertyDescriptor(l, a)
                  );
                });
          }
          return r;
        }
        function Y(r, i) {
          return (
            (function (l) {
              if (Array.isArray(l)) return l;
            })(r) ||
            (function (l, a) {
              if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(l)))) {
                var j = [],
                  u = !0,
                  y = !1,
                  S = void 0;
                try {
                  for (
                    var C, N = l[Symbol.iterator]();
                    !(u = (C = N.next()).done) &&
                    (j.push(C.value), !a || j.length !== a);
                    u = !0
                  );
                } catch (z) {
                  (y = !0), (S = z);
                } finally {
                  try {
                    u || N.return == null || N.return();
                  } finally {
                    if (y) throw S;
                  }
                }
                return j;
              }
            })(r, i) ||
            U(r, i) ||
            (function () {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function U(r, i) {
          if (r) {
            if (typeof r == "string") return J(r, i);
            var l = Object.prototype.toString.call(r).slice(8, -1);
            return (
              l === "Object" && r.constructor && (l = r.constructor.name),
              l === "Map" || l === "Set"
                ? Array.from(r)
                : l === "Arguments" ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
                ? J(r, i)
                : void 0
            );
          }
        }
        function J(r, i) {
          (i == null || i > r.length) && (i = r.length);
          for (var l = 0, a = new Array(i); l < i; l++) a[l] = r[l];
          return a;
        }
        function ne(r, i) {
          if (!(r instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function K(r, i) {
          for (var l = 0; l < i.length; l++) {
            var a = i[l];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(r, a.key, a);
          }
        }
        function re(r, i) {
          return (re =
            Object.setPrototypeOf ||
            function (l, a) {
              return (l.__proto__ = a), l;
            })(r, i);
        }
        function le(r) {
          var i = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })();
          return function () {
            var l,
              a = ce(r);
            if (i) {
              var j = ce(this).constructor;
              l = Reflect.construct(a, arguments, j);
            } else l = a.apply(this, arguments);
            return xe(this, l);
          };
        }
        function xe(r, i) {
          return !i || (H(i) !== "object" && typeof i != "function")
            ? ee(r)
            : i;
        }
        function ee(r) {
          if (r === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return r;
        }
        function ce(r) {
          return (ce = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (i) {
                return i.__proto__ || Object.getPrototypeOf(i);
              })(r);
        }
        function k(r, i, l) {
          return (
            i in r
              ? Object.defineProperty(r, i, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (r[i] = l),
            r
          );
        }
        var ue = s.a.createRef(),
          Q = (function (r) {
            (function (u, y) {
              if (typeof y != "function" && y !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (u.prototype = Object.create(y && y.prototype, {
                constructor: { value: u, writable: !0, configurable: !0 },
              })),
                y && re(u, y);
            })(j, r);
            var i,
              l,
              a = le(j);
            function j(u) {
              var y;
              ne(this, j);
              for (
                var S = arguments.length,
                  C = new Array(S > 1 ? S - 1 : 0),
                  N = 1;
                N < S;
                N++
              )
                C[N - 1] = arguments[N];
              return (
                k(
                  ee((y = a.call.apply(a, [this, u].concat(C)))),
                  "canvas",
                  s.a.createRef()
                ),
                k(ee(y), "confetti", void 0),
                (y.canvas = u.canvasRef || ue),
                y
              );
            }
            return (
              (i = j),
              (l = [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.canvas.current) {
                      var u = ae(this.props)[0];
                      this.confetti = new Z(this.canvas.current, u);
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var u = ae(this.props)[0];
                    this.confetti && (this.confetti.options = u);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.confetti && this.confetti.stop(),
                      (this.confetti = void 0);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var u = Y(ae(this.props), 2),
                      y = u[0],
                      S = u[1],
                      C = D(
                        {
                          zIndex: 2,
                          position: "absolute",
                          pointerEvents: "none",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        },
                        S.style
                      );
                    return s.a.createElement(
                      "canvas",
                      _(
                        { width: y.width, height: y.height, ref: this.canvas },
                        S,
                        { style: C }
                      )
                    );
                  },
                },
              ]) && K(i.prototype, l),
              j
            );
          })(n.Component);
        function ae(r) {
          var i = {},
            l = {},
            a = [].concat(V(Object.keys(W)), [
              "confettiSource",
              "drawShape",
              "onConfettiComplete",
            ]),
            j = ["canvasRef"];
          for (var u in r) {
            var y = r[u];
            a.includes(u)
              ? (i[u] = y)
              : j.includes(u)
              ? (j[u] = y)
              : (l[u] = y);
          }
          return [i, l, {}];
        }
        k(Q, "defaultProps", D({}, W)), k(Q, "displayName", "ReactConfetti");
        var ie = s.a.forwardRef(function (r, i) {
          return s.a.createElement(Q, _({ canvasRef: i }, r));
        });
        b.default = ie;
      },
    ]).default;
  });
})(Le);
var dt = Le.exports;
const ht = Ye(dt);
function ft({ show: f, close: w }) {
  return t.jsx(ht, {
    width: window.innerWidth,
    height: window.innerHeight,
    recycle: !1,
    numberOfPieces: f ? 1600 : 0,
    gravity: 0.2,
    colors: ["#00ADE6", "#045579"],
    onConfettiComplete: (x) => {
      w(), x == null || x.reset();
    },
  });
}
const Ie = { WETH: "ETH", WRBTC: "RBTC" };
function pt({
  vault: f,
  userTokenBalance: w,
  tokenSelection: x,
  setTokenSelection: g,
  canInteract: b,
  refetchUserData: d,
}) {
  const { info: h, setIsOpen: e } = $e(),
    n = Re(),
    { getCurrentChainFromVault: s } = ke(),
    [o, c] = O.useState(""),
    [m, v] = O.useState(!1),
    p = (V) => {
      c(V.target.value);
    },
    F = () => {
      c(w);
    },
    T = async () => {
      if ((v(!1), d(), h ? qe(h.amount, h.vaultSymbol, n.chainId) : !1)) e(!0);
      else {
        const H = await rt(n.address);
        let _ = "https://twitter.com/intent/tweet?text=";
        const L = await at(H || "");
        (_ +=
          encodeURIComponent(`I just deposited in the ${f.symbol} vault on @StreamDefi 🚀

Deposit now with the link below.`)),
          (_ += `&url=${L}`),
          $(
            () =>
              t.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [
                  t.jsx("a", {
                    href: _,
                    className: "underline underline-offset-2 text-primary",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "Share on Twitter!",
                  }),
                  t.jsxs("span", {
                    className: "body2",
                    children: [
                      "If you don't have a referral link, we recommend you",
                      " ",
                      t.jsx(we, { to: "/", children: "generate one" }),
                      " so you get rewards for people who use your link.",
                    ],
                  }),
                ],
              }),
            { duration: 1e4 }
          );
      }
    },
    I = o && +o > 0 && +o <= +w,
    M = s(f),
    q = M.vault_token,
    E = M.underlying_token,
    P = Ne(f.symbol),
    W = Ie[E.ticker],
    Z = async () => {
      $.error(
        "Deposit is disabled. Strong is currently in withdraw-only mode until further notice."
      );
    };
  return t.jsxs(Ce.div, {
    className: "px-4 py-6",
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.2, easings: "easeInOut" },
    children: [
      t.jsx("p", { className: "body2", children: "You will deposit:" }),
      t.jsxs("div", {
        className: "relative w-full mt-2",
        children: [
          t.jsx("input", {
            type: "text",
            className:
              "w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-opacity-10 p-5 text-lg focus:ring-0 focus:outline-none focus:border-gray-300",
            placeholder: "0.00",
            value: o,
            onChange: p,
          }),
          t.jsxs("div", {
            className:
              "absolute top-0 bottom-0 right-5 flex items-center justify-center gap-2",
            children: [
              t.jsx("p", {
                onClick: F,
                className: "text-gray-400 cursor-pointer",
                children: "MAX",
              }),
              W
                ? t.jsx(ut, {
                    optionLabels: { native: W, underlying: E.ticker },
                    tokenSelection: x,
                    onTokenSelectionChange: g,
                  })
                : t.jsxs(t.Fragment, {
                    children: [
                      t.jsx("img", {
                        src: je(f.symbol.toLowerCase(), "svg"),
                        alt: f.symbol,
                        className: "w-6 h-6 ml-2 rounded-full",
                      }),
                      t.jsx("p", {
                        className: "text-gray-900 dark:text-gray-100",
                        children: E.ticker,
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
      t.jsxs("p", {
        className: "body2 ml-2 mt-2 text-sm",
        children: [
          "Available balance: ",
          w,
          " ",
          (W && (x === Pe.NATIVE ? W : E.ticker)) || E.ticker,
        ],
      }),
      t.jsxs("p", {
        className: "body2 ml-2 mt-2 text-sm",
        children: [
          "The vault token for this strategy is",
          " ",
          t.jsx("span", {
            style: { color: P },
            className: "font-medium",
            children: q.ticker,
          }),
        ],
      }),
      t.jsx(te, {
        variant: "outlined",
        color: "primary",
        className: "p-3 w-full text-xl mt-6",
        onClick: Z,
        disabled: !I || !b,
        children: t.jsx("p", {
          className: "text-center w-full",
          children: "Deposit",
        }),
      }),
      t.jsx(ft, { show: m, close: T }),
    ],
  });
}
function mt({
  vault: f,
  claimableBalance: w,
  userBalanceInUnderlying: x,
  vaultTokenTicker: g,
  baseTokenTicker: b,
  instantWithdrawAmount: d,
  canInteract: h,
  queuedWithdrawal: e,
  refetchUserData: n,
}) {
  const {
      redeemVaultTokens: s,
      getClaimableBalance: o,
      getVaultTokenPrice: c,
      getCurrentChainFromVault: m,
    } = ke(),
    [v, p] = O.useState(""),
    [F, T] = O.useState(0),
    [I, M] = O.useState(A.STANDARD),
    [q, E] = O.useState(!1);
  O.useEffect(() => {
    c(f).then(T);
  }, [f]);
  const P = (D) => {
      p(D.target.value);
    },
    W = () => {
      p(I === A.STANDARD ? x : d);
    },
    Z = async (D, Y, U) => {
      if (!h) return $.error("You are not allowed to interact with the vault");
      if (!v && Y != G.COMPLETE) return $.error("Please enter a valid amount");
      if (D === 0 && Y != G.COMPLETE)
        return $.error("Please enter an amount greater than 0");
      if (U !== void 0 && D - 1 >= U)
        return $.error("You don't have enough balance");
      if ((await o(f)) > 0 && Y != G.COMPLETE)
        return $.error("Please complete your previous withdraw");
    },
    V = async (D, Y) => {
      const U = +(v || "0");
      if (await Z(U, D, Y)) return;
      const ne = $.loading("Waiting for transaction...", {
        position: "bottom-right",
      });
      try {
        const K = U / F,
          re = D === G.INSTANT ? U : K;
        await s(f, re, D);
        const le =
          D === G.COMPLETE
            ? "Withdraw completed"
            : D === G.INITIATE
            ? "Withdraw initiated"
            : "Withdraw successful";
        $.success(le, { id: ne }), n(), p("");
      } catch (K) {
        console.error(K), $.error("Withdraw failed", { id: ne });
      }
    },
    H = O.useMemo(
      () =>
        I === A.STANDARD
          ? v && +v > 0 && +v <= +x && h
          : v && +v > 0 && +v <= +d && h,
      [v, x, d, I]
    ),
    _ = m(f),
    L = Ne(f.symbol);
  return t.jsxs(Ce.div, {
    className: "px-4 py-6",
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.2, easings: "easeInOut" },
    children: [
      t.jsxs("div", {
        className:
          "flex justify-between divide-x divide-gray-200 dark:divide-opacity-20",
        children: [
          t.jsx("p", {
            onClick: () => M(A.STANDARD),
            className: `flex-1 text-center cursor-pointer bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 p-4 rounded-l-lg transition-colors ${
              I === A.STANDARD ? "bg-opacity-90 dark:bg-opacity-90" : ""
            }`,
            style: { color: I === A.STANDARD ? L : "#a3a3a3" },
            children: "Standard",
          }),
          t.jsx("p", {
            onClick: () => M(A.INSTANT),
            className: `flex-1 text-center cursor-pointer bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 p-4 rounded-r-lg transition-colors ${
              I === A.INSTANT ? "bg-opacity-90 dark:bg-opacity-90" : ""
            }`,
            style: { color: I === A.INSTANT ? L : "#a3a3a3" },
            children: "Instant",
          }),
        ],
      }),
      t.jsxs("div", {
        className: "relative mt-1 mb-4",
        children: [
          t.jsx("p", {
            className:
              "text-xs text-gray-400 underline underline-offset-2 font-medium w-fit",
            onMouseEnter: () => E(!0),
            onMouseLeave: () => E(!1),
            children: "What's this?",
          }),
          q &&
            t.jsxs("p", {
              className:
                "absolute bottom-0 translate-y-full max-w-[400px] max-h-[300px] p-2  bg-background-light dark:bg-background-dark border border-gray-200 border-opacity-20 z-20 text-xs rounded-lg",
              onMouseEnter: () => E(!0),
              onMouseLeave: () => E(!1),
              children: [
                t.jsx("span", {
                  className: "underline underline-offset-2",
                  children: "Standard Withdraw:",
                }),
                " ",
                "Withdraw your funds from the vault. It takes two steps: first, you initiate the withdraw. Then, in the future rounds, you complete the withdraw to receive your funds.",
                t.jsx("br", {}),
                t.jsx("br", {}),
                t.jsx("span", {
                  className: "underline underline-offset-2",
                  children: "Instant Withdraw:",
                }),
                " ",
                "During the deposit round, you can instantly withdraw your funds if you need them.",
                t.jsx("br", {}),
                t.jsx("br", {}),
                t.jsx("span", {
                  className: "underline underline-offset-2",
                  children: "Complete Withdraw:",
                }),
                " ",
                "If you have any funds to claim, you will be able to complete the withdraw to receive them. Note you must completely claim before you can initiate another withdraw",
              ],
            }),
        ],
      }),
      t.jsxs("p", {
        className: "body2",
        children: [
          "You will ",
          I === A.STANDARD ? "initiate " : "",
          "withdraw:",
        ],
      }),
      t.jsxs("div", {
        className: "mt-2",
        children: [
          t.jsxs("div", {
            className: "relative w-full",
            children: [
              t.jsx("input", {
                type: "text",
                className:
                  "w-full rounded-t-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-opacity-10 p-5 text-lg focus:ring-0 focus:outline-none focus:border-gray-500",
                placeholder: "0.00",
                value: v,
                onChange: P,
              }),
              t.jsxs("div", {
                className:
                  "absolute top-0 bottom-0 right-5 flex items-center justify-center gap-2",
                children: [
                  t.jsx("p", {
                    onClick: W,
                    className: "text-gray-400 cursor-pointer",
                    children: "MAX",
                  }),
                  t.jsx("img", {
                    src: je(f.symbol.toLowerCase(), "svg"),
                    alt: f.symbol,
                    className: "w-6 h-6 ml-2 rounded-full",
                  }),
                  t.jsx("p", {
                    className: "text-gray-100",
                    children: _.underlying_token.ticker,
                  }),
                ],
              }),
            ],
          }),
          I === A.STANDARD &&
            t.jsx("div", {
              className:
                "w-full p-3 rounded-b-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-opacity-10 border-t-0",
              children: t.jsxs("p", {
                className: "body2",
                children: [
                  v || 1,
                  " ",
                  b,
                  " ≈",
                  " ",
                  (parseFloat(v || "1") / F).toFixed(2),
                  " ",
                  g,
                ],
              }),
            }),
        ],
      }),
      t.jsxs("p", {
        className: "body2 ml-2 mt-4 text-sm",
        children: [
          "Available balance:",
          " ",
          I === A.STANDARD ? x : d,
          " ",
          _.underlying_token.ticker,
        ],
      }),
      t.jsxs("p", {
        className: "body2 ml-2 mt-2 text-sm font-bold",
        children: [
          "The vault token for this strategy is",
          " ",
          t.jsx("span", {
            style: { color: L },
            className: "font-bold",
            children: g,
          }),
        ],
      }),
      t.jsx(te, {
        variant: "outlined",
        color: "primary",
        className: "p-3 w-full text-xl mt-6",
        onClick: () => {
          I === A.STANDARD ? V(G.INITIATE, +x) : V(G.INSTANT, +d);
        },
        disabled: !H || !h,
        children: t.jsx("p", {
          className: "text-center w-full",
          children: I === A.STANDARD ? "Queue Withdraw" : "Withdraw",
        }),
      }),
      I === A.STANDARD &&
        parseFloat(w) > 0 &&
        t.jsxs("div", {
          className: "mt-6",
          children: [
            t.jsx("p", { children: "You will complete withdraw:" }),
            t.jsx(te, {
              variant: "outlined",
              color: "primary",
              className: "p-3 w-full text-xl mt-2",
              onClick: () => V(G.COMPLETE),
              children: t.jsxs("p", {
                className: "text-center w-full",
                children: [
                  "Receive",
                  " ",
                  Number(w) === 0 ? "0" : w,
                  " ",
                  Ie[b] || b,
                ],
              }),
            }),
          ],
        }),
      e !== "0" &&
        parseFloat(w) === 0 &&
        t.jsxs("p", {
          className: "body2 mt-4 text-sm",
          children: [
            "You have",
            " ",
            t.jsx("span", { style: { color: L }, children: e }),
            " ",
            _.underlying_token.ticker,
            " queued for withdraw. You will be able to complete the withdraw on the next round.",
          ],
        }),
    ],
  });
}
function gt({ active: f, onClick: w, color: x, text: g }) {
  return t.jsx("div", {
    onClick: w,
    className: He(
      "flex-1 p-4 flex items-center justify-center body2",
      f
        ? "bg-transparent"
        : "bg-background-light dark:bg-background-dark text-gray-400 border-b border-gray-200 dark:border-opacity-10"
    ),
    style: { color: f ? x : "" },
    children: g,
  });
}
function xt({
  vault: f,
  userTokenBalance: w,
  userBalanceInUnderlying: x,
  userShareBalance: g,
  userClaimableBalance: b,
  instantWithdrawAmount: d,
  tokenSelection: h,
  setTokenSelection: e,
  isWhitelisted: n,
  queuedWithdrawal: s,
  refetchUserData: o,
}) {
  const [c, m] = O.useState("withdraw"),
    { theme: v } = Fe(),
    { getCurrentChainFromVault: p } = ke(),
    F = p(f),
    { ticker: T } = F.vault_token,
    I = Ne(f.symbol),
    { ticker: M } = F.underlying_token;
  return t.jsx("div", {
    className: "h-full",
    children: t.jsxs("div", {
      className: "card w-full p-0 mb-auto overflow-visible",
      style: {
        background: `linear-gradient(to bottom, ${I + "19"}, ${
          v === "dark" ? "#08090E" : "#FAFAFA"
        } 45%)`,
      },
      children: [
        t.jsx("div", {
          className:
            "flex divide-x divide-gray-200 dark:divide-opacity-10 cursor-pointer rounded-t-2xl overflow-hidden",
          children: t.jsx(gt, {
            active: c === "withdraw",
            onClick: () => m("withdraw"),
            color: I,
            text: "Withdraw",
          }),
        }),
        t.jsxs(Be, {
          children: [
            c === "deposit" &&
              t.jsx(pt, {
                vault: f,
                userTokenBalance: w,
                tokenSelection: h,
                setTokenSelection: e,
                canInteract: n,
                refetchUserData: o,
              }),
            c === "withdraw" &&
              t.jsx(mt, {
                vault: f,
                userBalanceInUnderlying: x,
                userShareBalance: g,
                claimableBalance: b,
                vaultTokenTicker: T,
                baseTokenTicker: M,
                canInteract: n,
                instantWithdrawAmount: d,
                queuedWithdrawal: s,
                refetchUserData: o,
              }),
          ],
        }),
      ],
    }),
  });
}
function yt() {
  return t.jsx(We, {
    children: t.jsxs("div", {
      className: "space-y-6",
      children: [
        t.jsx(we, {
          to: "/",
          className: "inline-flex",
          children: t.jsxs(te, {
            variant: "outlined",
            className: "rounded-full py-2 px-5",
            children: [t.jsx(Ve, { size: 18 }), "Back to vaults"],
          }),
        }),
        t.jsxs("div", {
          className:
            "grid md:grid-cols-2 gap-6 animate-pulse pointer-events-none",
          children: [
            t.jsxs("div", {
              className: "flex-1 space-y-6",
              children: [
                t.jsx("div", {
                  className: "flex items-center w-full",
                  children: t.jsxs("div", {
                    className: "flex gap-4 items-center",
                    children: [
                      t.jsx("div", {
                        className:
                          "w-12 h-12 bg-gray-300 dark:bg-neutral-800 rounded-full",
                      }),
                      t.jsx("div", {
                        className:
                          "h-8 w-40 bg-gray-300 dark:bg-neutral-800 rounded-full",
                      }),
                    ],
                  }),
                }),
                t.jsx("div", {
                  className:
                    "bg-gray-300 dark:bg-neutral-800 w-full h-56 rounded-2xl",
                }),
              ],
            }),
            t.jsx("div", {
              className: "h-full",
              children: t.jsx("div", {
                className:
                  "bg-gray-300 dark:bg-neutral-800 w-full rounded-2xl h-full",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function se(f, w) {
  const x = Math.pow(10, w);
  return Math.floor(f * x) / x;
}
var Pe = ((f) => ((f.NATIVE = "native"), (f.UNDERLYING = "underlying"), f))(
  Pe || {}
);
function kt() {
  var l, a, j;
  const { name: f } = Ge(),
    { theme: w } = Fe(),
    x = Xe(),
    [g, b] = O.useState(!0),
    d = Re(),
    {
      isWhitelisted: h,
      getTokenBalance: e,
      getLockedValue: n,
      getTokenSupply: s,
      getClaimableBalance: o,
      getQueuedWithdrawal: c,
      getUserBalanceInBaseToken: m,
      getInstantWithdrawAmount: v,
      getUnrealizedBalance: p,
      getCurrentChainFromVault: F,
      getUserShares: T,
    } = ke(),
    [I, M] = O.useState(!0),
    [q, E] = O.useState(0),
    [P, W] = O.useState(0),
    [Z, V] = O.useState("0"),
    [H, _] = O.useState("0"),
    [L, D] = O.useState("0"),
    [Y, U] = O.useState("0"),
    [J, ne] = O.useState("0"),
    [K, re] = O.useState("0"),
    [le, xe] = O.useState("0"),
    [ee, ce] = O.useState("underlying"),
    { vault: k } = Ze(f),
    ue = O.useCallback(async () => {
      if (k) {
        M(!0);
        try {
          const u = F(k);
          if (!u) {
            x("/");
            return;
          }
          const y = await h(k);
          b(y);
          const S = await n(k);
          W(S);
          const C = await s(u.vault_token);
          E(C);
          let N = 0;
          const z = ee === "underlying",
            { ticker: B } = u.underlying_token,
            R = Ie[B];
          N = await e(u.underlying_token, !R || z);
          const de = await T(k);
          ne(de.toString());
          const he = await m(k);
          re(he.toString());
          const fe = await p(k);
          _(fe.toString());
          const pe = await c(k);
          U(pe);
          const X = await v(k),
            oe = await o(k);
          u.underlying_token.ticker === "USDC"
            ? (V(se(N, 2).toFixed(2)),
              D(se(oe, 2).toFixed(2)),
              xe(se(X, 2).toFixed(2)))
            : (V(se(N, 6).toFixed(6)),
              D(se(oe, 6).toFixed(6)),
              xe(se(X, 6).toFixed(6)));
        } catch (u) {
          console.log(u), d.isConnected && x("/");
        }
        M(!1);
      }
    }, [d.address, ee, k == null ? void 0 : k.symbol, d.chainId]);
  if (
    (O.useEffect(() => {
      ue();
    }, [ue]),
    !k)
  )
    return null;
  const Q = F(k);
  if (!Q) return null;
  const ae = Q.vault_address,
    { ticker: ie } = Q.vault_token,
    r = Ne(k.symbol),
    i =
      ((a = (l = d.chain) == null ? void 0 : l.blockExplorers) == null
        ? void 0
        : a.default.url) ||
      ((j = Je.blockExplorers) == null ? void 0 : j.default.url);
  return t.jsx(We, {
    children: I
      ? t.jsx(yt, {})
      : t.jsxs("div", {
          className: "space-y-6",
          children: [
            t.jsx(we, {
              to: "/",
              className: "inline-flex",
              children: t.jsxs(te, {
                variant: "outlined",
                className: "rounded-full py-2 px-5",
                children: [t.jsx(Ve, { size: 18 }), "Back to vaults"],
              }),
            }),
            t.jsxs("div", {
              className:
                "card flex gap-4 items-center border-error w-full text-error py-4 px-6",
              children: [
                t.jsx(Oe, { className: "text-error", size: 20 }),
                t.jsxs("div", {
                  className: "-mt-1",
                  children: [
                    t.jsx("p", {
                      className: "text-xl",
                      children: "Strong is in withdraw-only mode",
                    }),
                    t.jsx("p", {
                      children:
                        "Strong will be in withdraw-only mode until further notice.",
                    }),
                  ],
                }),
              ],
            }),
            d.isConnected &&
              !g &&
              t.jsxs("div", {
                className:
                  "card flex gap-4 items-center border-error w-full text-error py-4 px-6",
                children: [
                  t.jsx(Oe, { className: "text-error", size: 20 }),
                  t.jsxs("div", {
                    className: "-mt-1",
                    children: [
                      t.jsx("p", {
                        className: "text-xl",
                        children: "Authorization Error",
                      }),
                      t.jsxs("p", {
                        children: [
                          "You are not whitelisted.",
                          " ",
                          t.jsx(we, {
                            to: "mailto:hi@streamprotocol.money",
                            className: "font-medium",
                            children: "Contact us",
                          }),
                          " ",
                          "to get access to this vault",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            !d.isConnected &&
              t.jsxs("div", {
                className:
                  "card flex gap-4 items-center border-error w-full text-error py-4 px-6",
                children: [
                  t.jsx(Oe, { className: "text-error", size: 20 }),
                  t.jsx("div", {
                    children: t.jsx("p", {
                      children:
                        "Please connect your wallet to interact with this vault",
                    }),
                  }),
                ],
              }),
            t.jsxs("div", {
              className: "grid md:grid-cols-2 gap-6",
              children: [
                t.jsxs("div", {
                  className: "flex-1 space-y-6",
                  children: [
                    t.jsxs("div", {
                      className: "flex justify-between w-full",
                      children: [
                        t.jsxs("div", {
                          className: "flex gap-4 items-center",
                          children: [
                            t.jsx("img", {
                              src: je(k.symbol.toLowerCase(), "svg"),
                              alt: k.symbol,
                              className: "w-12 h-12 rounded-full",
                            }),
                            t.jsx("h2", { children: ie }),
                          ],
                        }),
                        t.jsxs(te, {
                          variant: "outlined",
                          onClick: () =>
                            window.open(`${i}/address/${ae}`, "_blank"),
                          children: [
                            t.jsx("span", {
                              className:
                                "underline underline-offset-2 text-gray-400",
                              children: Ke(ae),
                            }),
                            t.jsx(st, { size: 18, className: "text-gray-400" }),
                          ],
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "card flex-col p-0",
                      style: {
                        background: `linear-gradient(to top, ${r + "19"}, ${
                          w === "dark" ? "#08090E" : "#FAFAFA"
                        } 45%)`,
                      },
                      children: [
                        t.jsxs("div", {
                          className:
                            "flex border-b border-gray-200 dark:border-opacity-10",
                          children: [
                            t.jsxs("div", {
                              className:
                                "flex-1 flex-col items-center border-r border-gray-200 dark:border-opacity-10 px-6 py-5",
                              children: [
                                t.jsxs("div", {
                                  className: "flex items-end gap-2",
                                  children: [
                                    t.jsx("p", {
                                      className: "font-medium text-3xl",
                                      children: ge(
                                        Number(
                                          ve(
                                            et(
                                              BigInt(k.tvl),
                                              k.deployments.ethereum
                                                .underlying_token.decimals
                                            ),
                                            2
                                          )
                                        )
                                      ),
                                    }),
                                    " ",
                                    t.jsx("p", {
                                      className: "text-gray-500 text-md",
                                      children: _e[k.symbol],
                                    }),
                                  ],
                                }),
                                t.jsx("p", {
                                  className:
                                    "text-gray-500 dark:text-gray-400 font-extralight",
                                  children: "Total Locked Value",
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "px-6 py-5 flex-col items-center",
                              style: { color: r },
                              children: [
                                t.jsxs("p", {
                                  className: "text-3xl",
                                  children: [Q.apy, "%"],
                                }),
                                t.jsx("p", {
                                  className: "font-extralight",
                                  children: "Estimated Yield",
                                }),
                              ],
                            }),
                          ],
                        }),
                        t.jsx("div", {
                          className:
                            "flex border-b border-gray-200 dark:border-opacity-10",
                          children: t.jsxs("div", {
                            className:
                              "flex-1 flex-col items-center border-r border-gray-200 dark:border-opacity-10 px-6 py-5",
                            children: [
                              t.jsxs("div", {
                                className: "flex items-end gap-2",
                                children: [
                                  t.jsx("p", {
                                    className: "font-medium text-3xl",
                                    children: ge(P),
                                  }),
                                  " ",
                                  t.jsx("p", {
                                    className: "text-gray-500 text-md",
                                    children: _e[k.symbol],
                                  }),
                                ],
                              }),
                              t.jsxs("p", {
                                className:
                                  "text-gray-500 dark:text-gray-400 font-extralight",
                                children: [
                                  "Locked Value in",
                                  " ",
                                  tt(d.chainId || 1),
                                ],
                              }),
                            ],
                          }),
                        }),
                        t.jsxs("div", {
                          className: "px-6 py-5",
                          children: [
                            d.isConnected &&
                              t.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  t.jsx("p", {
                                    className:
                                      "text-gray-500 dark:text-gray-400 font-extralight",
                                    children: "Your Balance",
                                  }),
                                  t.jsxs("p", {
                                    children: [
                                      ge(ve(J.toString(), 2)),
                                      " ",
                                      ie,
                                      " ",
                                      H !== "0" &&
                                        t.jsxs(t.Fragment, {
                                          children: [
                                            "|",
                                            " ",
                                            ge(ve(H, 2)),
                                            " ",
                                            Q.underlying_token.ticker,
                                            " ",
                                            "(Unrealized)",
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            t.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                t.jsx("p", {
                                  className:
                                    "text-gray-500 dark:text-gray-400 font-extralight",
                                  children: "Queued Withdrawals",
                                }),
                                t.jsxs("p", {
                                  children: [Y, " ", Q.underlying_token.ticker],
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                t.jsx("p", {
                                  className:
                                    "text-gray-500 dark:text-gray-400 font-extralight",
                                  children: "Circulating Vault Token",
                                }),
                                t.jsxs("p", {
                                  children: [
                                    nt(ge(ve(q.toString(), 2))),
                                    " ",
                                    ie,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    t.jsx("p", { className: "body2", children: lt[k.symbol] }),
                  ],
                }),
                t.jsx(xt, {
                  vault: k,
                  userTokenBalance: Z,
                  userBalanceInUnderlying: K,
                  userShareBalance: J,
                  userClaimableBalance: L,
                  instantWithdrawAmount: le,
                  tokenSelection: ee,
                  setTokenSelection: ce,
                  isWhitelisted: g,
                  queuedWithdrawal: Y,
                  refetchUserData: ue,
                }),
              ],
            }),
          ],
        }),
  });
}
export { Pe as TokenSelection, kt as default };
