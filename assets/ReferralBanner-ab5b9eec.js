import {
  a5 as d,
  a6 as f,
  a7 as i,
  a8 as m,
  ab as o,
  al as u,
  ad as g,
  ae as h,
} from "./index-7dc28fc3.js";
import { G as x } from "./GenerateReferralLinkButton-53a50dfc.js";
function l() {
  return (
    (l =
      Object.assign ||
      function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }
        return e;
      }),
    l.apply(this, arguments)
  );
}
function v(e, n) {
  if (e == null) return {};
  var t = y(e, n),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      (r = s[a]),
        !(n.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (t[r] = e[r]);
  }
  return t;
}
function y(e, n) {
  if (e == null) return {};
  var t = {},
    r = Object.keys(e),
    a,
    s;
  for (s = 0; s < r.length; s++)
    (a = r[s]), !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var c = d.forwardRef(function (e, n) {
  var t = e.color,
    r = t === void 0 ? "currentColor" : t,
    a = e.size,
    s = a === void 0 ? 24 : a,
    p = v(e, ["color", "size"]);
  return f.createElement(
    "svg",
    l(
      {
        ref: n,
        xmlns: "http://www.w3.org/2000/svg",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      p
    ),
    f.createElement("polyline", { points: "9 18 15 12 9 6" })
  );
});
c.propTypes = { color: i.string, size: i.oneOfType([i.string, i.number]) };
c.displayName = "ChevronRight";
const j = c,
  O = ({ title: e, seeReferrals: n = !0 }) => {
    const t = m(),
      r = n && t.isConnected;
    return o.jsxs("div", {
      className:
        "card p-5 pb-4 w-full bg-gradient-primary dark:bg-dark-gradient-primary",
      children: [
        o.jsx("h2", { className: "text-xl font-normal", children: e }),
        o.jsx("p", {
          className: "mt-1 mb-4 text-sm body2",
          children: "Invite your friends and earn fees and Droplets",
        }),
        o.jsxs("div", {
          className:
            "grid grid-cols-2 lg:flex lg:flex-row items-stretch md:items-start gap-2 mb-2 justify-start w-full",
          children: [
            r &&
              o.jsx(u, {
                to: "/my-referrals",
                children: o.jsxs(g, {
                  variant: "outlined",
                  className: "w-full",
                  children: [
                    "View my referrals",
                    o.jsx(j, {
                      size: 18,
                      className: "text-gray-500 dark:text-gray-300",
                    }),
                  ],
                }),
              }),
            t.isConnected ? o.jsx(x, {}) : o.jsx(h, {}),
          ],
        }),
      ],
    });
  };
export { O as R };
