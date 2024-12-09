import {
  bd as ft,
  a5 as P,
  be as yt,
  ak as v,
  bf as ht,
  bg as mt,
  aV as Y,
  aj as _t,
  ab as s,
  bc as gt,
  a8 as re,
  aX as bt,
  b0 as vt,
  al as Pt,
  aR as wt,
  b8 as Ot,
  b5 as D,
  b6 as U,
  b7 as xt,
  b9 as St,
  ba as jt,
  ah as de,
  b2 as Tt,
  bh as Et,
  ac as At,
  bi as Ct,
} from "./index-7dc28fc3.js";
import { R as pe } from "./ReferralBanner-ab5b9eec.js";
import { g as Nt, A as Rt } from "./token-color-d1e432e6.js";
function Mt(e = {}) {
  const { onConnect: t, onDisconnect: r } = e,
    a = ft(e);
  P.useEffect(
    () =>
      yt(a, {
        onChange(n, o) {
          if (
            (o.status === "reconnecting" ||
              (o.status === "connecting" && o.address === void 0)) &&
            n.status === "connected"
          ) {
            const {
                address: i,
                addresses: l,
                chain: c,
                chainId: O,
                connector: m,
              } = n,
              x = o.status === "reconnecting" || o.status === void 0;
            t == null ||
              t({
                address: i,
                addresses: l,
                chain: c,
                chainId: O,
                connector: m,
                isReconnected: x,
              });
          } else
            o.status === "connected" &&
              n.status === "disconnected" &&
              (r == null || r());
        },
      }),
    [a, t, r]
  );
}
var It = function (t, r, a) {
  var n = document.head || document.getElementsByTagName("head")[0],
    o = document.createElement("script");
  typeof r == "function" && ((a = r), (r = {})),
    (r = r || {}),
    (a = a || function () {}),
    (o.type = r.type || "text/javascript"),
    (o.charset = r.charset || "utf8"),
    (o.async = "async" in r ? !!r.async : !0),
    (o.src = t),
    r.attrs && Lt(o, r.attrs),
    r.text && (o.text = "" + r.text);
  var i = "onload" in o ? fe : kt;
  i(o, a), o.onload || fe(o, a), n.appendChild(o);
};
function Lt(e, t) {
  for (var r in t) e.setAttribute(r, t[r]);
}
function fe(e, t) {
  (e.onload = function () {
    (this.onerror = this.onload = null), t(null, e);
  }),
    (e.onerror = function () {
      (this.onerror = this.onload = null),
        t(new Error("Failed to load " + this.src), e);
    });
}
function kt(e, t) {
  e.onreadystatechange = function () {
    (this.readyState != "complete" && this.readyState != "loaded") ||
      ((this.onreadystatechange = null), t(null, e));
  };
}
var $t = function (t) {
  return Dt(t) && !Ut(t);
};
function Dt(e) {
  return !!e && typeof e == "object";
}
function Ut(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || zt(e);
}
var Vt = typeof Symbol == "function" && Symbol.for,
  Ht = Vt ? Symbol.for("react.element") : 60103;
function zt(e) {
  return e.$$typeof === Ht;
}
function Bt(e) {
  return Array.isArray(e) ? [] : {};
}
function M(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? A(Bt(e), e, t) : e;
}
function Ft(e, t, r) {
  return e.concat(t).map(function (a) {
    return M(a, r);
  });
}
function Wt(e, t) {
  if (!t.customMerge) return A;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : A;
}
function Kt(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function ye(e) {
  return Object.keys(e).concat(Kt(e));
}
function we(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Xt(e, t) {
  return (
    we(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function Yt(e, t, r) {
  var a = {};
  return (
    r.isMergeableObject(e) &&
      ye(e).forEach(function (n) {
        a[n] = M(e[n], r);
      }),
    ye(t).forEach(function (n) {
      Xt(e, n) ||
        (we(e, n) && r.isMergeableObject(t[n])
          ? (a[n] = Wt(n, r)(e[n], t[n], r))
          : (a[n] = M(t[n], r)));
    }),
    a
  );
}
function A(e, t, r) {
  (r = r || {}),
    (r.arrayMerge = r.arrayMerge || Ft),
    (r.isMergeableObject = r.isMergeableObject || $t),
    (r.cloneUnlessOtherwiseSpecified = M);
  var a = Array.isArray(t),
    n = Array.isArray(e),
    o = a === n;
  return o ? (a ? r.arrayMerge(e, t, r) : Yt(e, t, r)) : M(t, r);
}
A.all = function (t, r) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function (a, n) {
    return A(a, n, r);
  }, {});
};
var Jt = A,
  Oe = Jt,
  qt = Object.create,
  H = Object.defineProperty,
  Zt = Object.getOwnPropertyDescriptor,
  Qt = Object.getOwnPropertyNames,
  Gt = Object.getPrototypeOf,
  er = Object.prototype.hasOwnProperty,
  tr = (e, t) => {
    for (var r in t) H(e, r, { get: t[r], enumerable: !0 });
  },
  xe = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of Qt(t))
        !er.call(e, n) &&
          n !== r &&
          H(e, n, {
            get: () => t[n],
            enumerable: !(a = Zt(t, n)) || a.enumerable,
          });
    return e;
  },
  ae = (e, t, r) => (
    (r = e != null ? qt(Gt(e)) : {}),
    xe(
      t || !e || !e.__esModule
        ? H(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  rr = (e) => xe(H({}, "__esModule", { value: !0 }), e),
  Se = {};
tr(Se, {
  callPlayer: () => gr,
  getConfig: () => mr,
  getSDK: () => hr,
  isBlobUrl: () => vr,
  isMediaStream: () => br,
  lazy: () => or,
  omit: () => _r,
  parseEndTime: () => pr,
  parseStartTime: () => dr,
  queryString: () => yr,
  randomString: () => fr,
  supportsWebKitPresentationMode: () => Pr,
});
var z = rr(Se),
  ar = ae(P),
  nr = ae(It),
  sr = ae(Oe);
const or = (e) =>
    ar.default.lazy(async () => {
      const t = await e();
      return typeof t.default == "function" ? t : t.default;
    }),
  ir = /[?&#](?:start|t)=([0-9hms]+)/,
  lr = /[?&#]end=([0-9hms]+)/,
  Q = /(\d+)(h|m|s)/g,
  cr = /^\d+$/;
function je(e, t) {
  if (e instanceof Array) return;
  const r = e.match(t);
  if (r) {
    const a = r[1];
    if (a.match(Q)) return ur(a);
    if (cr.test(a)) return parseInt(a);
  }
}
function ur(e) {
  let t = 0,
    r = Q.exec(e);
  for (; r !== null; ) {
    const [, a, n] = r;
    n === "h" && (t += parseInt(a, 10) * 60 * 60),
      n === "m" && (t += parseInt(a, 10) * 60),
      n === "s" && (t += parseInt(a, 10)),
      (r = Q.exec(e));
  }
  return t;
}
function dr(e) {
  return je(e, ir);
}
function pr(e) {
  return je(e, lr);
}
function fr() {
  return Math.random().toString(36).substr(2, 5);
}
function yr(e) {
  return Object.keys(e)
    .map((t) => `${t}=${e[t]}`)
    .join("&");
}
function J(e) {
  return window[e]
    ? window[e]
    : window.exports && window.exports[e]
    ? window.exports[e]
    : window.module && window.module.exports && window.module.exports[e]
    ? window.module.exports[e]
    : null;
}
const j = {},
  hr = function (t, r, a = null, n = () => !0, o = nr.default) {
    const i = J(r);
    return i && n(i)
      ? Promise.resolve(i)
      : new Promise((l, c) => {
          if (j[t]) {
            j[t].push({ resolve: l, reject: c });
            return;
          }
          j[t] = [{ resolve: l, reject: c }];
          const O = (m) => {
            j[t].forEach((x) => x.resolve(m));
          };
          if (a) {
            const m = window[a];
            window[a] = function () {
              m && m(), O(J(r));
            };
          }
          o(t, (m) => {
            m
              ? (j[t].forEach((x) => x.reject(m)), (j[t] = null))
              : a || O(J(r));
          });
        });
  };
function mr(e, t) {
  return (0, sr.default)(t.config, e.config);
}
function _r(e, ...t) {
  const r = [].concat(...t),
    a = {},
    n = Object.keys(e);
  for (const o of n) r.indexOf(o) === -1 && (a[o] = e[o]);
  return a;
}
function gr(e, ...t) {
  if (!this.player || !this.player[e]) {
    let r = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;
    return (
      this.player
        ? this.player[e] || (r += "The method was not available")
        : (r += "The player was not available"),
      console.warn(r, "font-weight: bold", ""),
      null
    );
  }
  return this.player[e](...t);
}
function br(e) {
  return (
    typeof window < "u" &&
    typeof window.MediaStream < "u" &&
    e instanceof window.MediaStream
  );
}
function vr(e) {
  return /^blob:/.test(e);
}
function Pr(e = document.createElement("video")) {
  const t = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return (
    e.webkitSupportsPresentationMode &&
    typeof e.webkitSetPresentationMode == "function" &&
    t
  );
}
var ne = Object.defineProperty,
  wr = Object.getOwnPropertyDescriptor,
  Or = Object.getOwnPropertyNames,
  xr = Object.prototype.hasOwnProperty,
  Sr = (e, t) => {
    for (var r in t) ne(e, r, { get: t[r], enumerable: !0 });
  },
  jr = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of Or(t))
        !xr.call(e, n) &&
          n !== r &&
          ne(e, n, {
            get: () => t[n],
            enumerable: !(a = wr(t, n)) || a.enumerable,
          });
    return e;
  },
  Tr = (e) => jr(ne({}, "__esModule", { value: !0 }), e),
  Te = {};
Sr(Te, {
  AUDIO_EXTENSIONS: () => se,
  DASH_EXTENSIONS: () => He,
  FLV_EXTENSIONS: () => ze,
  HLS_EXTENSIONS: () => ie,
  MATCH_URL_DAILYMOTION: () => $e,
  MATCH_URL_FACEBOOK: () => Ne,
  MATCH_URL_FACEBOOK_WATCH: () => Re,
  MATCH_URL_KALTURA: () => Ve,
  MATCH_URL_MIXCLOUD: () => De,
  MATCH_URL_MUX: () => Ce,
  MATCH_URL_SOUNDCLOUD: () => Ee,
  MATCH_URL_STREAMABLE: () => Me,
  MATCH_URL_TWITCH_CHANNEL: () => ke,
  MATCH_URL_TWITCH_VIDEO: () => Le,
  MATCH_URL_VIDYARD: () => Ue,
  MATCH_URL_VIMEO: () => Ae,
  MATCH_URL_WISTIA: () => Ie,
  MATCH_URL_YOUTUBE: () => G,
  VIDEO_EXTENSIONS: () => oe,
  canPlay: () => Ar,
});
var Er = Tr(Te),
  he = z;
const G =
    /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
  Ee = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
  Ae = /vimeo\.com\/(?!progressive_redirect).+/,
  Ce = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
  Ne =
    /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
  Re = /^https?:\/\/fb\.watch\/.+$/,
  Me = /streamable\.com\/([a-z0-9]+)$/,
  Ie = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
  Le = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
  ke = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
  $e =
    /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
  De = /mixcloud\.com\/([^/]+\/[^/]+)/,
  Ue = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
  Ve =
    /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
  se = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
  oe = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
  ie = /\.(m3u8)($|\?)/i,
  He = /\.(mpd)($|\?)/i,
  ze = /\.(flv)($|\?)/i,
  ee = (e) => {
    if (e instanceof Array) {
      for (const t of e)
        if ((typeof t == "string" && ee(t)) || ee(t.src)) return !0;
      return !1;
    }
    return (0, he.isMediaStream)(e) || (0, he.isBlobUrl)(e)
      ? !0
      : se.test(e) || oe.test(e) || ie.test(e) || He.test(e) || ze.test(e);
  },
  Ar = {
    youtube: (e) =>
      e instanceof Array ? e.every((t) => G.test(t)) : G.test(e),
    soundcloud: (e) => Ee.test(e) && !se.test(e),
    vimeo: (e) => Ae.test(e) && !oe.test(e) && !ie.test(e),
    mux: (e) => Ce.test(e),
    facebook: (e) => Ne.test(e) || Re.test(e),
    streamable: (e) => Me.test(e),
    wistia: (e) => Ie.test(e),
    twitch: (e) => Le.test(e) || ke.test(e),
    dailymotion: (e) => $e.test(e),
    mixcloud: (e) => De.test(e),
    vidyard: (e) => Ue.test(e),
    kaltura: (e) => Ve.test(e),
    file: ee,
  };
var le = Object.defineProperty,
  Cr = Object.getOwnPropertyDescriptor,
  Nr = Object.getOwnPropertyNames,
  Rr = Object.prototype.hasOwnProperty,
  Mr = (e, t) => {
    for (var r in t) le(e, r, { get: t[r], enumerable: !0 });
  },
  Ir = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of Nr(t))
        !Rr.call(e, n) &&
          n !== r &&
          le(e, n, {
            get: () => t[n],
            enumerable: !(a = Cr(t, n)) || a.enumerable,
          });
    return e;
  },
  Lr = (e) => Ir(le({}, "__esModule", { value: !0 }), e),
  Be = {};
Mr(Be, { default: () => $r });
var kr = Lr(Be),
  b = z,
  _ = Er,
  $r = [
    {
      key: "youtube",
      name: "YouTube",
      canPlay: _.canPlay.youtube,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./YouTube-3fe91c0a.js").then((e) => e.Y),
          [
            "assets/YouTube-3fe91c0a.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "soundcloud",
      name: "SoundCloud",
      canPlay: _.canPlay.soundcloud,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./SoundCloud-60f0ff80.js").then((e) => e.S),
          [
            "assets/SoundCloud-60f0ff80.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "vimeo",
      name: "Vimeo",
      canPlay: _.canPlay.vimeo,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Vimeo-cbd1d2d3.js").then((e) => e.V),
          [
            "assets/Vimeo-cbd1d2d3.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "mux",
      name: "Mux",
      canPlay: _.canPlay.mux,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Mux-126cc6a2.js").then((e) => e.M),
          [
            "assets/Mux-126cc6a2.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "facebook",
      name: "Facebook",
      canPlay: _.canPlay.facebook,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Facebook-da93b78d.js").then((e) => e.F),
          [
            "assets/Facebook-da93b78d.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "streamable",
      name: "Streamable",
      canPlay: _.canPlay.streamable,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Streamable-11b04888.js").then((e) => e.S),
          [
            "assets/Streamable-11b04888.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "wistia",
      name: "Wistia",
      canPlay: _.canPlay.wistia,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Wistia-0d7797fc.js").then((e) => e.W),
          [
            "assets/Wistia-0d7797fc.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "twitch",
      name: "Twitch",
      canPlay: _.canPlay.twitch,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Twitch-555817ea.js").then((e) => e.T),
          [
            "assets/Twitch-555817ea.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "dailymotion",
      name: "DailyMotion",
      canPlay: _.canPlay.dailymotion,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./DailyMotion-51017dd3.js").then((e) => e.D),
          [
            "assets/DailyMotion-51017dd3.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "mixcloud",
      name: "Mixcloud",
      canPlay: _.canPlay.mixcloud,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Mixcloud-15abd60e.js").then((e) => e.M),
          [
            "assets/Mixcloud-15abd60e.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "vidyard",
      name: "Vidyard",
      canPlay: _.canPlay.vidyard,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Vidyard-51f5a60c.js").then((e) => e.V),
          [
            "assets/Vidyard-51f5a60c.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "kaltura",
      name: "Kaltura",
      canPlay: _.canPlay.kaltura,
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./Kaltura-d0ff80f8.js").then((e) => e.K),
          [
            "assets/Kaltura-d0ff80f8.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
    {
      key: "file",
      name: "FilePlayer",
      canPlay: _.canPlay.file,
      canEnablePIP: (e) =>
        _.canPlay.file(e) &&
        (document.pictureInPictureEnabled ||
          (0, b.supportsWebKitPresentationMode)()) &&
        !_.AUDIO_EXTENSIONS.test(e),
      lazyPlayer: (0, b.lazy)(() =>
        v(
          () => import("./FilePlayer-69e48856.js").then((e) => e.F),
          [
            "assets/FilePlayer-69e48856.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        )
      ),
    },
  ],
  me =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function Dr(e, t) {
  return !!(e === t || (me(e) && me(t)));
}
function Ur(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!Dr(e[r], t[r])) return !1;
  return !0;
}
function Vr(e, t) {
  t === void 0 && (t = Ur);
  var r,
    a = [],
    n,
    o = !1;
  function i() {
    for (var l = [], c = 0; c < arguments.length; c++) l[c] = arguments[c];
    return (
      (o && r === this && t(l, a)) ||
        ((n = e.apply(this, l)), (o = !0), (r = this), (a = l)),
      n
    );
  }
  return i;
}
const Hr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zr = ht(Hr);
var Br = typeof Element < "u",
  Fr = typeof Map == "function",
  Wr = typeof Set == "function",
  Kr = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function V(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, a, n;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (a = r; a-- !== 0; ) if (!V(e[a], t[a])) return !1;
      return !0;
    }
    var o;
    if (Fr && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(a = o.next()).done; )
        if (!t.has(a.value[0])) return !1;
      for (o = e.entries(); !(a = o.next()).done; )
        if (!V(a.value[1], t.get(a.value[0]))) return !1;
      return !0;
    }
    if (Wr && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(a = o.next()).done; )
        if (!t.has(a.value[0])) return !1;
      return !0;
    }
    if (Kr && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (a = r; a-- !== 0; ) if (e[a] !== t[a]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((n = Object.keys(e)), (r = n.length), r !== Object.keys(t).length))
      return !1;
    for (a = r; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, n[a])) return !1;
    if (Br && e instanceof Element) return !1;
    for (a = r; a-- !== 0; )
      if (
        !(
          (n[a] === "_owner" || n[a] === "__v" || n[a] === "__o") &&
          e.$$typeof
        ) &&
        !V(e[n[a]], t[n[a]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Fe = function (t, r) {
    try {
      return V(t, r);
    } catch (a) {
      if ((a.message || "").match(/stack|recursion/i))
        return (
          console.warn("react-fast-compare cannot handle circular refs"), !1
        );
      throw a;
    }
  },
  Xr = Object.create,
  B = Object.defineProperty,
  Yr = Object.getOwnPropertyDescriptor,
  Jr = Object.getOwnPropertyNames,
  qr = Object.getPrototypeOf,
  Zr = Object.prototype.hasOwnProperty,
  Qr = (e, t) => {
    for (var r in t) B(e, r, { get: t[r], enumerable: !0 });
  },
  We = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of Jr(t))
        !Zr.call(e, n) &&
          n !== r &&
          B(e, n, {
            get: () => t[n],
            enumerable: !(a = Yr(t, n)) || a.enumerable,
          });
    return e;
  },
  Gr = (e, t, r) => (
    (r = e != null ? Xr(qr(e)) : {}),
    We(
      t || !e || !e.__esModule
        ? B(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  ea = (e) => We(B({}, "__esModule", { value: !0 }), e),
  Ke = {};
Qr(Ke, { defaultProps: () => aa, propTypes: () => ra });
var Xe = ea(Ke),
  ta = Gr(mt);
const {
    string: f,
    bool: g,
    number: T,
    array: q,
    oneOfType: C,
    shape: w,
    object: h,
    func: p,
    node: _e,
  } = ta.default,
  ra = {
    url: C([f, q, h]),
    playing: g,
    loop: g,
    controls: g,
    volume: T,
    muted: g,
    playbackRate: T,
    width: C([f, T]),
    height: C([f, T]),
    style: h,
    progressInterval: T,
    playsinline: g,
    pip: g,
    stopOnUnmount: g,
    light: C([g, f, h]),
    playIcon: _e,
    previewTabIndex: T,
    previewAriaLabel: f,
    fallback: _e,
    oEmbedUrl: f,
    wrapper: C([f, p, w({ render: p.isRequired })]),
    config: w({
      soundcloud: w({ options: h }),
      youtube: w({ playerVars: h, embedOptions: h, onUnstarted: p }),
      facebook: w({ appId: f, version: f, playerId: f, attributes: h }),
      dailymotion: w({ params: h }),
      vimeo: w({ playerOptions: h, title: f }),
      mux: w({ attributes: h, version: f }),
      file: w({
        attributes: h,
        tracks: q,
        forceVideo: g,
        forceAudio: g,
        forceHLS: g,
        forceSafariHLS: g,
        forceDisableHls: g,
        forceDASH: g,
        forceFLV: g,
        hlsOptions: h,
        hlsVersion: f,
        dashVersion: f,
        flvVersion: f,
      }),
      wistia: w({ options: h, playerId: f, customControls: q }),
      mixcloud: w({ options: h }),
      twitch: w({ options: h, playerId: f }),
      vidyard: w({ options: h }),
    }),
    onReady: p,
    onStart: p,
    onPlay: p,
    onPause: p,
    onBuffer: p,
    onBufferEnd: p,
    onEnded: p,
    onError: p,
    onDuration: p,
    onSeek: p,
    onPlaybackRateChange: p,
    onPlaybackQualityChange: p,
    onProgress: p,
    onClickPreview: p,
    onEnablePIP: p,
    onDisablePIP: p,
  },
  y = () => {},
  aa = {
    playing: !1,
    loop: !1,
    controls: !1,
    volume: null,
    muted: !1,
    playbackRate: 1,
    width: "640px",
    height: "360px",
    style: {},
    progressInterval: 1e3,
    playsinline: !1,
    pip: !1,
    stopOnUnmount: !0,
    light: !1,
    fallback: null,
    wrapper: "div",
    previewTabIndex: 0,
    previewAriaLabel: "",
    oEmbedUrl: "https://noembed.com/embed?url={url}",
    config: {
      soundcloud: {
        options: {
          visual: !0,
          buying: !1,
          liking: !1,
          download: !1,
          sharing: !1,
          show_comments: !1,
          show_playcount: !1,
        },
      },
      youtube: {
        playerVars: {
          playsinline: 1,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
        embedOptions: {},
        onUnstarted: y,
      },
      facebook: {
        appId: "1309697205772819",
        version: "v3.3",
        playerId: null,
        attributes: {},
      },
      dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
      vimeo: {
        playerOptions: { autopause: !1, byline: !1, portrait: !1, title: !1 },
        title: null,
      },
      mux: { attributes: {}, version: "2" },
      file: {
        attributes: {},
        tracks: [],
        forceVideo: !1,
        forceAudio: !1,
        forceHLS: !1,
        forceDASH: !1,
        forceFLV: !1,
        hlsOptions: {},
        hlsVersion: "1.1.4",
        dashVersion: "3.1.3",
        flvVersion: "1.5.0",
        forceDisableHls: !1,
      },
      wistia: { options: {}, playerId: null, customControls: null },
      mixcloud: { options: { hide_cover: 1 } },
      twitch: { options: {}, playerId: null },
      vidyard: { options: {} },
    },
    onReady: y,
    onStart: y,
    onPlay: y,
    onPause: y,
    onBuffer: y,
    onBufferEnd: y,
    onEnded: y,
    onError: y,
    onDuration: y,
    onSeek: y,
    onPlaybackRateChange: y,
    onPlaybackQualityChange: y,
    onProgress: y,
    onClickPreview: y,
    onEnablePIP: y,
    onDisablePIP: y,
  };
var na = Object.create,
  I = Object.defineProperty,
  sa = Object.getOwnPropertyDescriptor,
  oa = Object.getOwnPropertyNames,
  ia = Object.getPrototypeOf,
  la = Object.prototype.hasOwnProperty,
  ca = (e, t, r) =>
    t in e
      ? I(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ua = (e, t) => {
    for (var r in t) I(e, r, { get: t[r], enumerable: !0 });
  },
  Ye = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of oa(t))
        !la.call(e, n) &&
          n !== r &&
          I(e, n, {
            get: () => t[n],
            enumerable: !(a = sa(t, n)) || a.enumerable,
          });
    return e;
  },
  Je = (e, t, r) => (
    (r = e != null ? na(ia(e)) : {}),
    Ye(
      t || !e || !e.__esModule
        ? I(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  da = (e) => Ye(I({}, "__esModule", { value: !0 }), e),
  d = (e, t, r) => (ca(e, typeof t != "symbol" ? t + "" : t, r), r),
  qe = {};
ua(qe, { default: () => F });
var pa = da(qe),
  ge = Je(P),
  fa = Je(Fe),
  Ze = Xe,
  ya = z;
const ha = 5e3;
class F extends ge.Component {
  constructor() {
    super(...arguments),
      d(this, "mounted", !1),
      d(this, "isReady", !1),
      d(this, "isPlaying", !1),
      d(this, "isLoading", !0),
      d(this, "loadOnReady", null),
      d(this, "startOnPlay", !0),
      d(this, "seekOnPlay", null),
      d(this, "onDurationCalled", !1),
      d(this, "handlePlayerMount", (t) => {
        if (this.player) {
          this.progress();
          return;
        }
        (this.player = t), this.player.load(this.props.url), this.progress();
      }),
      d(this, "getInternalPlayer", (t) =>
        this.player ? this.player[t] : null
      ),
      d(this, "progress", () => {
        if (this.props.url && this.player && this.isReady) {
          const t = this.getCurrentTime() || 0,
            r = this.getSecondsLoaded(),
            a = this.getDuration();
          if (a) {
            const n = { playedSeconds: t, played: t / a };
            r !== null && ((n.loadedSeconds = r), (n.loaded = r / a)),
              (n.playedSeconds !== this.prevPlayed ||
                n.loadedSeconds !== this.prevLoaded) &&
                this.props.onProgress(n),
              (this.prevPlayed = n.playedSeconds),
              (this.prevLoaded = n.loadedSeconds);
          }
        }
        this.progressTimeout = setTimeout(
          this.progress,
          this.props.progressFrequency || this.props.progressInterval
        );
      }),
      d(this, "handleReady", () => {
        if (!this.mounted) return;
        (this.isReady = !0), (this.isLoading = !1);
        const { onReady: t, playing: r, volume: a, muted: n } = this.props;
        t(),
          !n && a !== null && this.player.setVolume(a),
          this.loadOnReady
            ? (this.player.load(this.loadOnReady, !0),
              (this.loadOnReady = null))
            : r && this.player.play(),
          this.handleDurationCheck();
      }),
      d(this, "handlePlay", () => {
        (this.isPlaying = !0), (this.isLoading = !1);
        const { onStart: t, onPlay: r, playbackRate: a } = this.props;
        this.startOnPlay &&
          (this.player.setPlaybackRate &&
            a !== 1 &&
            this.player.setPlaybackRate(a),
          t(),
          (this.startOnPlay = !1)),
          r(),
          this.seekOnPlay &&
            (this.seekTo(this.seekOnPlay), (this.seekOnPlay = null)),
          this.handleDurationCheck();
      }),
      d(this, "handlePause", (t) => {
        (this.isPlaying = !1), this.isLoading || this.props.onPause(t);
      }),
      d(this, "handleEnded", () => {
        const { activePlayer: t, loop: r, onEnded: a } = this.props;
        t.loopOnEnded && r && this.seekTo(0), r || ((this.isPlaying = !1), a());
      }),
      d(this, "handleError", (...t) => {
        (this.isLoading = !1), this.props.onError(...t);
      }),
      d(this, "handleDurationCheck", () => {
        clearTimeout(this.durationCheckTimeout);
        const t = this.getDuration();
        t
          ? this.onDurationCalled ||
            (this.props.onDuration(t), (this.onDurationCalled = !0))
          : (this.durationCheckTimeout = setTimeout(
              this.handleDurationCheck,
              100
            ));
      }),
      d(this, "handleLoaded", () => {
        this.isLoading = !1;
      });
  }
  componentDidMount() {
    this.mounted = !0;
  }
  componentWillUnmount() {
    clearTimeout(this.progressTimeout),
      clearTimeout(this.durationCheckTimeout),
      this.isReady &&
        this.props.stopOnUnmount &&
        (this.player.stop(),
        this.player.disablePIP && this.player.disablePIP()),
      (this.mounted = !1);
  }
  componentDidUpdate(t) {
    if (!this.player) return;
    const {
      url: r,
      playing: a,
      volume: n,
      muted: o,
      playbackRate: i,
      pip: l,
      loop: c,
      activePlayer: O,
      disableDeferredLoading: m,
    } = this.props;
    if (!(0, fa.default)(t.url, r)) {
      if (this.isLoading && !O.forceLoad && !m && !(0, ya.isMediaStream)(r)) {
        console.warn(
          `ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`
        ),
          (this.loadOnReady = r);
        return;
      }
      (this.isLoading = !0),
        (this.startOnPlay = !0),
        (this.onDurationCalled = !1),
        this.player.load(r, this.isReady);
    }
    !t.playing && a && !this.isPlaying && this.player.play(),
      t.playing && !a && this.isPlaying && this.player.pause(),
      !t.pip && l && this.player.enablePIP && this.player.enablePIP(),
      t.pip && !l && this.player.disablePIP && this.player.disablePIP(),
      t.volume !== n && n !== null && this.player.setVolume(n),
      t.muted !== o &&
        (o
          ? this.player.mute()
          : (this.player.unmute(),
            n !== null && setTimeout(() => this.player.setVolume(n)))),
      t.playbackRate !== i &&
        this.player.setPlaybackRate &&
        this.player.setPlaybackRate(i),
      t.loop !== c && this.player.setLoop && this.player.setLoop(c);
  }
  getDuration() {
    return this.isReady ? this.player.getDuration() : null;
  }
  getCurrentTime() {
    return this.isReady ? this.player.getCurrentTime() : null;
  }
  getSecondsLoaded() {
    return this.isReady ? this.player.getSecondsLoaded() : null;
  }
  seekTo(t, r, a) {
    if (!this.isReady) {
      t !== 0 &&
        ((this.seekOnPlay = t),
        setTimeout(() => {
          this.seekOnPlay = null;
        }, ha));
      return;
    }
    if (r ? r === "fraction" : t > 0 && t < 1) {
      const o = this.player.getDuration();
      if (!o) {
        console.warn(
          "ReactPlayer: could not seek using fraction – duration not yet available"
        );
        return;
      }
      this.player.seekTo(o * t, a);
      return;
    }
    this.player.seekTo(t, a);
  }
  render() {
    const t = this.props.activePlayer;
    return t
      ? ge.default.createElement(t, {
          ...this.props,
          onMount: this.handlePlayerMount,
          onReady: this.handleReady,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onEnded: this.handleEnded,
          onLoaded: this.handleLoaded,
          onError: this.handleError,
        })
      : null;
  }
}
d(F, "displayName", "Player");
d(F, "propTypes", Ze.propTypes);
d(F, "defaultProps", Ze.defaultProps);
var ma = Object.create,
  L = Object.defineProperty,
  _a = Object.getOwnPropertyDescriptor,
  ga = Object.getOwnPropertyNames,
  ba = Object.getPrototypeOf,
  va = Object.prototype.hasOwnProperty,
  Pa = (e, t, r) =>
    t in e
      ? L(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  wa = (e, t) => {
    for (var r in t) L(e, r, { get: t[r], enumerable: !0 });
  },
  Qe = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of ga(t))
        !va.call(e, n) &&
          n !== r &&
          L(e, n, {
            get: () => t[n],
            enumerable: !(a = _a(t, n)) || a.enumerable,
          });
    return e;
  },
  k = (e, t, r) => (
    (r = e != null ? ma(ba(e)) : {}),
    Qe(
      t || !e || !e.__esModule
        ? L(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Oa = (e) => Qe(L({}, "__esModule", { value: !0 }), e),
  u = (e, t, r) => (Pa(e, typeof t != "symbol" ? t + "" : t, r), r),
  Ge = {};
wa(Ge, { createReactPlayer: () => Ra });
var xa = Oa(Ge),
  E = k(P),
  Sa = k(Oe),
  Z = k(zr),
  be = k(Fe),
  R = Xe,
  et = z,
  ja = k(pa);
const Ta = (0, et.lazy)(() =>
    v(
      () => import("./Preview-a5383814.js").then((e) => e.P),
      [
        "assets/Preview-a5383814.js",
        "assets/index-7dc28fc3.js",
        "assets/index-dd3cd586.css",
      ]
    )
  ),
  Ea = typeof window < "u" && window.document && typeof document < "u",
  Aa = typeof Y < "u" && Y.window && Y.window.document,
  Ca = Object.keys(R.propTypes),
  Na = Ea || Aa ? E.Suspense : () => null,
  N = [],
  Ra = (e, t) => {
    var r;
    return (
      (r = class extends E.Component {
        constructor() {
          super(...arguments),
            u(this, "state", { showPreview: !!this.props.light }),
            u(this, "references", {
              wrapper: (a) => {
                this.wrapper = a;
              },
              player: (a) => {
                this.player = a;
              },
            }),
            u(this, "handleClickPreview", (a) => {
              this.setState({ showPreview: !1 }), this.props.onClickPreview(a);
            }),
            u(this, "showPreview", () => {
              this.setState({ showPreview: !0 });
            }),
            u(this, "getDuration", () =>
              this.player ? this.player.getDuration() : null
            ),
            u(this, "getCurrentTime", () =>
              this.player ? this.player.getCurrentTime() : null
            ),
            u(this, "getSecondsLoaded", () =>
              this.player ? this.player.getSecondsLoaded() : null
            ),
            u(this, "getInternalPlayer", (a = "player") =>
              this.player ? this.player.getInternalPlayer(a) : null
            ),
            u(this, "seekTo", (a, n, o) => {
              if (!this.player) return null;
              this.player.seekTo(a, n, o);
            }),
            u(this, "handleReady", () => {
              this.props.onReady(this);
            }),
            u(
              this,
              "getActivePlayer",
              (0, Z.default)((a) => {
                for (const n of [...N, ...e]) if (n.canPlay(a)) return n;
                return t || null;
              })
            ),
            u(
              this,
              "getConfig",
              (0, Z.default)((a, n) => {
                const { config: o } = this.props;
                return Sa.default.all([
                  R.defaultProps.config,
                  R.defaultProps.config[n] || {},
                  o,
                  o[n] || {},
                ]);
              })
            ),
            u(
              this,
              "getAttributes",
              (0, Z.default)((a) => (0, et.omit)(this.props, Ca))
            ),
            u(this, "renderActivePlayer", (a) => {
              if (!a) return null;
              const n = this.getActivePlayer(a);
              if (!n) return null;
              const o = this.getConfig(a, n.key);
              return E.default.createElement(ja.default, {
                ...this.props,
                key: n.key,
                ref: this.references.player,
                config: o,
                activePlayer: n.lazyPlayer || n,
                onReady: this.handleReady,
              });
            });
        }
        shouldComponentUpdate(a, n) {
          return (
            !(0, be.default)(this.props, a) || !(0, be.default)(this.state, n)
          );
        }
        componentDidUpdate(a) {
          const { light: n } = this.props;
          !a.light && n && this.setState({ showPreview: !0 }),
            a.light && !n && this.setState({ showPreview: !1 });
        }
        renderPreview(a) {
          if (!a) return null;
          const {
            light: n,
            playIcon: o,
            previewTabIndex: i,
            oEmbedUrl: l,
            previewAriaLabel: c,
          } = this.props;
          return E.default.createElement(Ta, {
            url: a,
            light: n,
            playIcon: o,
            previewTabIndex: i,
            previewAriaLabel: c,
            oEmbedUrl: l,
            onClick: this.handleClickPreview,
          });
        }
        render() {
          const {
              url: a,
              style: n,
              width: o,
              height: i,
              fallback: l,
              wrapper: c,
            } = this.props,
            { showPreview: O } = this.state,
            m = this.getAttributes(a),
            x = typeof c == "string" ? this.references.wrapper : void 0;
          return E.default.createElement(
            c,
            { ref: x, style: { ...n, width: o, height: i }, ...m },
            E.default.createElement(
              Na,
              { fallback: l },
              O ? this.renderPreview(a) : this.renderActivePlayer(a)
            )
          );
        }
      }),
      u(r, "displayName", "ReactPlayer"),
      u(r, "propTypes", R.propTypes),
      u(r, "defaultProps", R.defaultProps),
      u(r, "addCustomPlayer", (a) => {
        N.push(a);
      }),
      u(r, "removeCustomPlayers", () => {
        N.length = 0;
      }),
      u(r, "canPlay", (a) => {
        for (const n of [...N, ...e]) if (n.canPlay(a)) return !0;
        return !1;
      }),
      u(r, "canEnablePIP", (a) => {
        for (const n of [...N, ...e])
          if (n.canEnablePIP && n.canEnablePIP(a)) return !0;
        return !1;
      }),
      r
    );
  };
var Ma = Object.create,
  W = Object.defineProperty,
  Ia = Object.getOwnPropertyDescriptor,
  La = Object.getOwnPropertyNames,
  ka = Object.getPrototypeOf,
  $a = Object.prototype.hasOwnProperty,
  Da = (e, t) => {
    for (var r in t) W(e, r, { get: t[r], enumerable: !0 });
  },
  tt = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of La(t))
        !$a.call(e, n) &&
          n !== r &&
          W(e, n, {
            get: () => t[n],
            enumerable: !(a = Ia(t, n)) || a.enumerable,
          });
    return e;
  },
  Ua = (e, t, r) => (
    (r = e != null ? Ma(ka(e)) : {}),
    tt(
      t || !e || !e.__esModule
        ? W(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Va = (e) => tt(W({}, "__esModule", { value: !0 }), e),
  rt = {};
Da(rt, { default: () => Fa });
var Ha = Va(rt),
  te = Ua(kr),
  za = xa;
const Ba = te.default[te.default.length - 1];
var Fa = (0, za.createReactPlayer)(te.default, Ba);
const Wa = _t(Ha);
function Ka() {
  return s.jsx("div", {
    className: "w-full h-360px bg-neutral-600 animate-pulse",
  });
}
function Xa({ isOpen: e, onClose: t }) {
  return s.jsx(gt, {
    title: "How does Strong work?",
    isOpen: e,
    onClose: t,
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    children: s.jsx(Wa, {
      width: "100%",
      url: "https://www.youtube.com/watch?v=vlPgD1y5BBk",
      playsinline: !0,
      stopOnUnmount: !0,
      config: { youtube: { playerVars: { autoplay: 1, controls: 1 } } },
      fallback: s.jsx(Ka, {}),
    }),
  });
}
function Ya() {
  return s.jsxs("div", {
    className:
      "card space-y-4 p-0 flex-1 w-full animate-pulse pointer-events-none",
    style: { background: "linear-gradient(to bottom, #eee19, #0B0C11 45%)" },
    children: [
      s.jsxs("div", {
        className: "flex justify-between items-center p-6 pb-0",
        children: [
          s.jsx("div", {
            className: "w-14 h-14 rounded-full bg-gray-200 dark:bg-neutral-800",
          }),
          s.jsx("div", {
            className:
              "mb-1 h-12 rounded-full w-36 bg-gray-200 dark:bg-neutral-800",
          }),
        ],
      }),
      s.jsx("div", {
        className: "px-6 pt-2 pb-4",
        children: s.jsx("div", {
          className: "h-8 bg-gray-200 dark:bg-neutral-800 rounded-full",
        }),
      }),
      s.jsxs("div", {
        className:
          "flex flex-col justify-between items-start p-6 border-y border-gray-200 dark:border-opacity-10",
        children: [
          s.jsx("div", {
            className: "flex gap-2 items-end",
            children: s.jsx("div", {
              className:
                "h-8 bg-gray-200 dark:bg-neutral-800 rounded-full w-48 mb-2",
            }),
          }),
          s.jsx("div", {
            className: "h-4 bg-gray-200 dark:bg-neutral-800 rounded-full w-28",
          }),
        ],
      }),
      s.jsxs("div", {
        className: "p-6 pt-2",
        children: [
          s.jsx("div", {
            className: "flex justify-between",
            children: s.jsx("p", {
              className:
                "w-32 h-6 bg-gray-200 dark:bg-neutral-800 rounded-full",
            }),
          }),
          s.jsx("div", {
            className:
              "bg-gray-200 dark:bg-neutral-800 bg-opacity-25 h-1.5 w-full my-4 rounded-md overflow-hidden",
          }),
          s.jsx("div", {
            className: "flex justify-between",
            children: s.jsx("p", {
              className:
                "w-32 h-6 bg-gray-200 dark:bg-neutral-800 rounded-full",
            }),
          }),
        ],
      }),
    ],
  });
}
function Ja({ vault: e }) {
  const [t, r] = P.useState(!0),
    { chain: a, isConnected: n, address: o } = re(),
    [i, l] = P.useState(0),
    [c, O] = P.useState(0),
    [m, x] = P.useState(0),
    [at, ce] = P.useState(!1),
    {
      getLockedValue: nt,
      getTokenSupply: st,
      getUserBalanceInBaseToken: ot,
      getCurrentChainFromVault: ue,
    } = bt(),
    { theme: it } = vt();
  if (
    (P.useEffect(() => {
      (async () => {
        r(!0), ce(!1), l(0);
        try {
          const $ = ue(e);
          if (!$) {
            r(!1);
            return;
          }
          if ((ce(!0), a)) {
            const pt = await ot(e);
            x(pt);
          }
          const ut = await nt(e);
          O(Number(ut));
          const dt = await st($.vault_token);
          l(Number(dt));
        } catch ($) {
          console.log($);
        }
        r(!1);
      })();
    }, [a, o]),
    t)
  )
    return s.jsx(Ya, {});
  const K = !t && a && !at,
    lt = a || { id: 1 },
    S = ue(e);
  if (!S) return null;
  const { ticker: ct } = S == null ? void 0 : S.vault_token,
    X = Nt(e.symbol);
  return s.jsx(s.Fragment, {
    children: s.jsx(Pt, {
      style: { pointerEvents: K ? "none" : "auto", opacity: K ? 0.7 : 1 },
      to: "/vault/" + e.symbol,
      children: s.jsxs("div", {
        className:
          "card space-y-4 p-0 transition-all hover:-translate-y-1.5 duration-200",
        style: {
          background: `linear-gradient(to bottom, ${X + "19"}, ${
            it === "dark" ? "#08090E" : "#FAFAFA"
          } 45%)`,
        },
        children: [
          s.jsxs("div", {
            className: "flex items-center p-6 pb-0 gap-3",
            children: [
              s.jsx("img", {
                src: wt(e.symbol.toLowerCase(), "svg"),
                alt: "",
                className: "w-12 h-12 rounded-full",
              }),
              s.jsx("h2", { className: "", children: Ot[e.symbol] }),
              s.jsx("div", {
                className:
                  "flex flex-col items-start mb-1 py-2 rounded-full px-6 font-light ml-auto truncate",
                style: { backgroundColor: X + "19", color: X },
                children: s.jsxs("p", {
                  className: "text-2xl",
                  children: [S.apy, "% APY"],
                }),
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "flex flex-col justify-between items-start p-6 border-y border-gray-200 dark:border-opacity-10",
            children: [
              s.jsxs("div", {
                className: "flex gap-2 items-end",
                children: [
                  s.jsx("h2", {
                    children: D(
                      Number(
                        U(
                          xt(
                            BigInt(e.tvl),
                            e.deployments.ethereum.underlying_token.decimals
                          ),
                          2
                        )
                      )
                    ),
                  }),
                  s.jsx("p", {
                    className: "body1 text-gray-500",
                    children: S.underlying_token.ticker,
                  }),
                ],
              }),
              s.jsx("p", {
                className: "body2 text-gray-400",
                children: "Total Locked Value",
              }),
            ],
          }),
          K
            ? s.jsx("div", {
                className: "flex flex-col justify-between items-start p-6 pt-2",
                children: s.jsx("div", {
                  className: "flex gap-2 items-end",
                  children: s.jsxs("h2", {
                    className: "text-gray-400 text-lg",
                    children: [
                      "Not available on ",
                      a == null ? void 0 : a.name,
                    ],
                  }),
                }),
              })
            : s.jsxs(s.Fragment, {
                children: [
                  s.jsxs("div", {
                    className:
                      "flex flex-col justify-between items-start p-6 pt-2 border-b border-gray-200 dark:border-opacity-10",
                    children: [
                      s.jsxs("div", {
                        className: "flex gap-2 items-end",
                        children: [
                          s.jsx("h2", {
                            className: "text-gray-400",
                            children: D(Number(U(c.toString(), 2))),
                          }),
                          s.jsx("p", {
                            className: "body1 text-gray-500",
                            children: S.underlying_token.ticker,
                          }),
                        ],
                      }),
                      s.jsxs("p", {
                        className: "body2 text-gray-400",
                        children: ["Locked Value in ", St(lt.id)],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-6 pt-2",
                    children: [
                      n &&
                        s.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            s.jsx("p", {
                              className: "text-gray-400",
                              children: "Your Balance",
                            }),
                            s.jsxs("p", {
                              children: [
                                D(U(m.toString(), 2)),
                                " ",
                                S.underlying_token.ticker,
                              ],
                            }),
                          ],
                        }),
                      s.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          s.jsx("p", {
                            className: "text-gray-400",
                            children: "Circulating Vault Token",
                          }),
                          s.jsxs("p", {
                            children: [jt(D(U(i.toString(), 2))), " ", ct],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
        ],
      }),
    }),
  });
}
const ve = "has-connected-wallet",
  Pe = "first-time-toast",
  qa = 3 * 1e3,
  Za = 8 * 1e3,
  Qa = 32;
function Ga() {
  const e = re();
  Mt({
    onConnect() {
      localStorage.setItem(ve, "true");
    },
  });
  const t = () => {
    const r = document.getElementById("navbar-connect-btn");
    r == null || r.click(), de.dismiss(Pe);
  };
  P.useEffect(() => {
    const r = localStorage.getItem(ve);
    e.isConnected ||
      r ||
      setTimeout(() => {
        de(
          s.jsxs("p", {
            className: "text-sm",
            children: [
              "Pssst... First time here? ",
              s.jsx("br", {}),
              s.jsx("span", {
                className:
                  "underline underline-offset-2 font-medium text-primary cursor-pointer animate",
                onClick: t,
                children: "Connect your wallet",
              }),
              " ",
              "to deposit",
            ],
          }),
          {
            position: "top-right",
            style: { marginTop: "60px", zIndex: 10, fontSize: `${Qa}px` },
            duration: Za,
            id: Pe,
            icon: "👋",
          }
        );
      }, qa);
  }, []);
}
var en = typeof window < "u",
  tn = function (e, t) {
    return t !== void 0 ? t : en ? window.matchMedia(e).matches : !1;
  },
  rn = function (e, t) {
    var r = P.useState(tn(e, t)),
      a = r[0],
      n = r[1];
    return (
      P.useEffect(
        function () {
          var o = !0,
            i = window.matchMedia(e),
            l = function () {
              o && n(!!i.matches);
            };
          return (
            i.addEventListener("change", l),
            n(i.matches),
            function () {
              (o = !1), i.removeEventListener("change", l);
            }
          );
        },
        [e]
      ),
      a
    );
  };
const an = rn;
function nn() {
  var l;
  const e = re(),
    { vaults: t, isLoading: r } = Tt(),
    [a, n] = P.useState(!1),
    { open: o } = Et();
  Ga();
  const i = an("(max-width: 768px)");
  return s.jsxs(At, {
    children: [
      s.jsxs("div", {
        className:
          "card flex gap-4 items-center border-error w-full text-error py-4 px-6",
        children: [
          s.jsx(Rt, { className: "text-error", size: 20 }),
          s.jsxs("div", {
            className: "-mt-1",
            children: [
              s.jsx("p", {
                className: "text-xl",
                children: "Strong is in withdraw-only mode",
              }),
              s.jsx("p", {
                children:
                  "Strong will be in withdraw-only mode until further notice.",
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: [
          s.jsxs("div", {
            className: "mb-4 mt-2",
            children: [
              s.jsx("h1", {
                className: "mb-1",
                children: "Welcome to Strong!",
              }),
              e.isConnected
                ? s.jsx(s.Fragment, {
                    children:
                      t &&
                      s.jsxs("p", {
                        className: "body2",
                        children: [
                          "Currently viewing ",
                          (l = e.chain) == null ? void 0 : l.name,
                          " vaults.",
                          " ",
                          s.jsx("span", {
                            className:
                              "text-sm text-gray-400 dark:text-gray-500 font-medium underline underline-offset-2 cursor-pointer",
                            onClick: () => o({ view: "Networks" }),
                            children: "Switch Network",
                          }),
                        ],
                      }),
                  })
                : s.jsx("p", {
                    className: "body2",
                    children:
                      "Connect your wallet to interact with vaults and start earning Droplets.",
                  }),
              s.jsx("div", {
                className: "mt-4",
                children: s.jsx(Ct, { showLabelOnPoints: !0 }),
              }),
            ],
          }),
          e.isConnected &&
            !i &&
            s.jsx(pe, { title: "Join our Referral Program!" }),
        ],
      }),
      s.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        children: !r && t.map((c) => s.jsx(Ja, { vault: c }, c.symbol)),
      }),
      i && s.jsx(pe, { title: "Join our Referral Program!" }),
      s.jsx(Xa, { isOpen: a, onClose: () => n(!1) }),
    ],
  });
}
const un = Object.freeze(
  Object.defineProperty({ __proto__: null, default: nn }, Symbol.toStringTag, {
    value: "Module",
  })
);
export { un as H, Er as p, z as u };
