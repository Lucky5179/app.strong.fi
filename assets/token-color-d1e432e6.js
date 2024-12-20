import { a5 as f, a6 as a, a7 as l } from "./index-7dc28fc3.js";
function s() {
  return (
    (s =
      Object.assign ||
      function (e) {
        for (var o = 1; o < arguments.length; o++) {
          var t = arguments[o];
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }
        return e;
      }),
    s.apply(this, arguments)
  );
}
function u(e, o) {
  if (e == null) return {};
  var t = g(e, o),
    r,
    n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      (r = i[n]),
        !(o.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (t[r] = e[r]);
  }
  return t;
}
function g(e, o) {
  if (e == null) return {};
  var t = {},
    r = Object.keys(e),
    n,
    i;
  for (i = 0; i < r.length; i++)
    (n = r[i]), !(o.indexOf(n) >= 0) && (t[n] = e[n]);
  return t;
}
var c = f.forwardRef(function (e, o) {
  var t = e.color,
    r = t === void 0 ? "currentColor" : t,
    n = e.size,
    i = n === void 0 ? 24 : n,
    p = u(e, ["color", "size"]);
  return a.createElement(
    "svg",
    s(
      {
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      p
    ),
    a.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    a.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    a.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  );
});
c.propTypes = { color: l.string, size: l.oneOfType([l.string, l.number]) };
c.displayName = "AlertCircle";
const m = c,
  y = { HodlwBTC: "#F79413", HodlwETH: "#627EEA", LevUSDC: "#00ADE6" },
  h = (e) => y[e] || "#000000";
export { m as A, h as g };
