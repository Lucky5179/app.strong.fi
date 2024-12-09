import {
  a5 as c,
  a6 as u,
  a7 as l,
  bb as U,
  ab as o,
  b1 as Y,
  aT as _,
  aU as M,
  bc as V,
  ad as m,
  a8 as G,
  aZ as y,
  af as R,
  ag as W,
} from "./index-7dc28fc3.js";
import { c as H, a as Z, b as k, d as J, e as q } from "./index-22c73b31.js";
function C() {
  return (
    (C =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    C.apply(this, arguments)
  );
}
function K(e, i) {
  if (e == null) return {};
  var n = Q(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (t = a[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]);
  }
  return n;
}
function Q(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    a;
  for (a = 0; a < t.length; a++)
    (r = t[a]), !(i.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var $ = c.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    a = r === void 0 ? 24 : r,
    s = K(e, ["color", "size"]);
  return u.createElement(
    "svg",
    C(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s
    ),
    u.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    u.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })
  );
});
$.propTypes = { color: l.string, size: l.oneOfType([l.string, l.number]) };
$.displayName = "CheckCircle";
const X = $;
function L() {
  return (
    (L =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    L.apply(this, arguments)
  );
}
function ee(e, i) {
  if (e == null) return {};
  var n = te(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (t = a[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]);
  }
  return n;
}
function te(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    a;
  for (a = 0; a < t.length; a++)
    (r = t[a]), !(i.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var P = c.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    a = r === void 0 ? 24 : r,
    s = ee(e, ["color", "size"]);
  return u.createElement(
    "svg",
    L(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s
    ),
    u.createElement("polyline", { points: "20 6 9 17 4 12" })
  );
});
P.propTypes = { color: l.string, size: l.oneOfType([l.string, l.number]) };
P.displayName = "Check";
const re = P;
function S() {
  return (
    (S =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    S.apply(this, arguments)
  );
}
function ne(e, i) {
  if (e == null) return {};
  var n = ie(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (t = a[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]);
  }
  return n;
}
function ie(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    a;
  for (a = 0; a < t.length; a++)
    (r = t[a]), !(i.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var N = c.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    a = r === void 0 ? 24 : r,
    s = ne(e, ["color", "size"]);
  return u.createElement(
    "svg",
    S(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s
    ),
    u.createElement("path", {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    }),
    u.createElement("rect", {
      x: "8",
      y: "2",
      width: "8",
      height: "4",
      rx: "1",
      ry: "1",
    })
  );
});
N.propTypes = { color: l.string, size: l.oneOfType([l.string, l.number]) };
N.displayName = "Clipboard";
const ae = N;
function z() {
  return (
    (z =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    z.apply(this, arguments)
  );
}
function oe(e, i) {
  if (e == null) return {};
  var n = se(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (t = a[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]);
  }
  return n;
}
function se(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    a;
  for (a = 0; a < t.length; a++)
    (r = t[a]), !(i.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var T = c.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    a = r === void 0 ? 24 : r,
    s = oe(e, ["color", "size"]);
  return u.createElement(
    "svg",
    z(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s
    ),
    u.createElement("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
    }),
    u.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    })
  );
});
T.propTypes = { color: l.string, size: l.oneOfType([l.string, l.number]) };
T.displayName = "Edit";
const le = T;
function E() {
  return (
    (E =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    E.apply(this, arguments)
  );
}
function ce(e, i) {
  if (e == null) return {};
  var n = de(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (t = a[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]);
  }
  return n;
}
function de(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    a;
  for (a = 0; a < t.length; a++)
    (r = t[a]), !(i.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var I = c.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    a = r === void 0 ? 24 : r,
    s = ce(e, ["color", "size"]);
  return u.createElement(
    "svg",
    E(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s
    ),
    u.createElement("path", {
      d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    })
  );
});
I.propTypes = { color: l.string, size: l.oneOfType([l.string, l.number]) };
I.displayName = "Twitter";
const ue = I;
function A(e = "") {
  const [i, n] = c.useState(""),
    [t, r] = c.useState({ validLength: !1, validChars: !1, available: !1 }),
    [a, s] = c.useState(!1);
  c.useEffect(() => {
    e && (n(e), p(e));
  }, [e]);
  const p = async (d) => {
      const x = /^[a-zA-Z0-9-]+$/gm;
      if (!d) return r({ validLength: !1, validChars: !1, available: !1 });
      const j = await H(d),
        f = await U(d);
      s(!0),
        r({
          validLength: d.length >= 3 && d.length <= 20,
          validChars: !!d.match(x),
          available: !j && !f,
        }),
        s(!1);
    },
    g = (d) => {
      n(d.target.value), p(d.target.value);
    },
    h = Object.values(t).every((d) => d);
  return {
    inputValue: i,
    validSlug: t,
    validSlugLoading: a,
    onSlugChange: g,
    isValidSlug: h,
  };
}
function O({ valid: e }) {
  return o.jsx("div", {
    className: Y(
      "h-5 w-5 overflow-hidden flex items-center justify-center rounded-full border border-gray-500 border-opacity-30 dark:border-gray-200 dark:border-opacity-15 transition-colors duration-200",
      e && "bg-green-500 border-none"
    ),
    children: o.jsx(_, {
      children:
        e &&
        o.jsx(M.div, {
          initial: { opacity: 0, x: -15 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 15 },
          children: o.jsx(re, { size: 12, strokeWidth: 4, color: "white" }),
        }),
    }),
  });
}
function B({ validSlug: e }) {
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("p", { className: "body2", children: "Your code must..." }),
      o.jsxs("div", {
        className: "flex flex-col gap-2 mt-1 mb-4",
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              o.jsx(O, { valid: e.validLength }),
              o.jsx("span", {
                className: "body2",
                children: "have between 3 and 20 characters",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              o.jsx(O, { valid: e.validChars }),
              o.jsx("span", {
                className: "body2",
                children: "only include letters, numbers and dashes",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              o.jsx(O, { valid: e.available }),
              o.jsx("span", {
                className: "body2",
                children: "be available. get creative here!",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function D({ value: e, onChange: i }) {
  return o.jsxs("div", {
    className:
      "flex items-center gap-1 rounded-md bg-background-light dark:bg-background-dark border border-gray-200 border-opacity-20 p-2 text-sm max-w-[500px]",
    children: [
      o.jsxs("label", {
        htmlFor: "slug",
        className: "text-gray-400 dark:text-gray-500 font-medium",
        children: [window.location.host, "/"],
      }),
      o.jsx("input", {
        type: "text",
        className:
          "bg-transparent focus:ring-0 focus:outline-none focus:border-gray-500 flex-1",
        id: "slug",
        value: e,
        onChange: i,
      }),
    ],
  });
}
function F({ show: e }) {
  return o.jsx(_, {
    children:
      e &&
      o.jsx(M.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className:
          "bg-green-500 text-white p-4 rounded-lg absolute top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center",
        children: o.jsx(X, { size: 64 }),
      }),
  });
}
function fe({ isOpen: e, close: i, onSubmit: n, showSuccess: t }) {
  const {
    inputValue: r,
    validSlug: a,
    validSlugLoading: s,
    onSlugChange: p,
    isValidSlug: g,
  } = A();
  return o.jsxs(V, {
    isOpen: e,
    onClose: i,
    title: "Create your referral link",
    subtitle: `You can create a referral link to share to your friends and earn
        Droplets! Just enter your custom code and click the button.`,
    className: "relative",
    children: [
      o.jsx(F, { show: t }),
      o.jsx(B, { validSlug: a }),
      o.jsx(D, { value: r, onChange: p }),
      o.jsx("p", {
        className: "body2 text-xs mt-2",
        children:
          "In order to create the link, you will need to sign a message. Don't worry, it's free!",
      }),
      o.jsx(m, {
        disabled: s || !g,
        className: "mt-4",
        color: "primary",
        onClick: () => n(r),
        children: "Finish!",
      }),
    ],
  });
}
function pe({
  isOpen: e,
  close: i,
  onSubmit: n,
  defaultSlug: t,
  showSuccess: r,
}) {
  const {
    inputValue: a,
    validSlug: s,
    validSlugLoading: p,
    onSlugChange: g,
    isValidSlug: h,
  } = A(t);
  return o.jsxs(V, {
    isOpen: e,
    onClose: i,
    title: "Edit your referral link",
    subtitle: "Pssst... keep in mind that your old link will stop working.",
    className: "relative",
    children: [
      o.jsx(F, { show: r }),
      o.jsx(B, { validSlug: s }),
      o.jsx(D, { value: a, onChange: g }),
      o.jsx("p", {
        className: "body2 text-xs mt-2",
        children:
          "In order to edit the link, you will need to sign a message. Don't worry, it's free!",
      }),
      o.jsx(m, {
        disabled: p || !h,
        className: "mt-4",
        color: "primary",
        onClick: () => {
          (p || !h) && n(a);
        },
        children: "Finish!",
      }),
    ],
  });
}
function me() {
  const e = G(),
    [i, n] = c.useState(""),
    [t, r] = c.useState(!1),
    [a, s] = c.useState(!1),
    [p, g] = c.useState(!1);
  c.useEffect(() => {
    (async () => {
      if (!e || !e.address) return;
      const b = await Z(e.address);
      b && n(k(b));
    })();
  }, [e]);
  const h = () => {
    navigator.clipboard.writeText(i), y.success("Link copied to clipboard");
  };
  if (!e) return null;
  const d = async (f) => {
      const w = await R(W, {
        message: "Sign this message to create your referral link",
      });
      try {
        (await J(f, w))
          ? (n(k(f)),
            g(!0),
            setTimeout(() => {
              r(!1), g(!1);
            }, 2e3))
          : y.error("Your referral link could not be created");
      } catch (v) {
        console.error(v), y.error("An error ocurred");
      }
    },
    x = async (f) => {
      const w = await R(W, {
        message: "Sign this message to edit your referral link",
      });
      try {
        (await q(f, w))
          ? (n(k(f)),
            g(!0),
            setTimeout(() => {
              s(!1), g(!1);
            }, 2e3))
          : y.error(
              "Your referral link could not be edited. It will stay the same as before."
            );
      } catch (v) {
        console.error(v), y.error("An error ocurred");
      }
    },
    j = async () => {
      let f = "https://twitter.com/intent/tweet?text=";
      (f +=
        encodeURIComponent(`I am using @StreamDefi to earn yield and Droplets on my deposits 🚀

Deposit now with the link below.

`)),
        (f += `&url=${i}`),
        window.open(f, "_blank");
    };
  return o.jsxs(o.Fragment, {
    children: [
      i
        ? o.jsxs(o.Fragment, {
            children: [
              o.jsxs(m, {
                variant: "outlined",
                onClick: h,
                children: [o.jsx(ae, { size: 14 }), "Copy link"],
              }),
              o.jsxs(m, {
                variant: "outlined",
                onClick: () => s(!0),
                children: [o.jsx(le, { size: 14 }), "Edit link"],
              }),
              o.jsxs(m, {
                variant: "outlined",
                onClick: j,
                children: [o.jsx(ue, { size: 14 }), "Share!"],
              }),
            ],
          })
        : o.jsx(m, {
            variant: "outlined",
            onClick: () => r(!0),
            children: "Create your referral link",
          }),
      o.jsx(fe, { isOpen: t, close: () => r(!1), onSubmit: d, showSuccess: p }),
      o.jsx(pe, {
        isOpen: a,
        close: () => s(!1),
        onSubmit: x,
        defaultSlug: i.split("/").pop(),
        showSuccess: p,
      }),
    ],
  });
}
export { me as G };
