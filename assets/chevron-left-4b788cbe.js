import { a5 as c, a6 as l, a7 as a } from "./index-7dc28fc3.js";
function s() {
  return (
    (s =
      Object.assign ||
      function (e) {
        for (var o = 1; o < arguments.length; o++) {
          var r = arguments[o];
          for (var t in r)
            Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        }
        return e;
      }),
    s.apply(this, arguments)
  );
}
function v(e, o) {
  if (e == null) return {};
  var r = u(e, o),
    t,
    n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      (t = i[n]),
        !(o.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (r[t] = e[t]);
  }
  return r;
}
function u(e, o) {
  if (e == null) return {};
  var r = {},
    t = Object.keys(e),
    n,
    i;
  for (i = 0; i < t.length; i++)
    (n = t[i]), !(o.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
var f = c.forwardRef(function (e, o) {
  var r = e.color,
    t = r === void 0 ? "currentColor" : r,
    n = e.size,
    i = n === void 0 ? 24 : n,
    p = v(e, ["color", "size"]);
  return l.createElement(
    "svg",
    s(
      {
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      p
    ),
    l.createElement("polyline", { points: "15 18 9 12 15 6" })
  );
});
f.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
f.displayName = "ChevronLeft";
const h = f;
export { h as C };
