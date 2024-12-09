import {
  aj as Rs,
  bk as Yw,
  bl as Jw,
  bf as qu,
  aV as Jr,
  ak as Qw,
} from "./index-7dc28fc3.js";
var Bu = { exports: {} },
  Bn = typeof Reflect == "object" ? Reflect : null,
  hf =
    Bn && typeof Bn.apply == "function"
      ? Bn.apply
      : function (e, t, s) {
          return Function.prototype.apply.call(e, t, s);
        },
  Zo;
Bn && typeof Bn.ownKeys == "function"
  ? (Zo = Bn.ownKeys)
  : Object.getOwnPropertySymbols
  ? (Zo = function (e) {
      return Object.getOwnPropertyNames(e).concat(
        Object.getOwnPropertySymbols(e)
      );
    })
  : (Zo = function (e) {
      return Object.getOwnPropertyNames(e);
    });
function Xw(i) {
  console && console.warn && console.warn(i);
}
var Yd =
  Number.isNaN ||
  function (e) {
    return e !== e;
  };
function st() {
  st.init.call(this);
}
Bu.exports = st;
Bu.exports.once = rb;
st.EventEmitter = st;
st.prototype._events = void 0;
st.prototype._eventsCount = 0;
st.prototype._maxListeners = void 0;
var lf = 10;
function ha(i) {
  if (typeof i != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof i
    );
}
Object.defineProperty(st, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return lf;
  },
  set: function (i) {
    if (typeof i != "number" || i < 0 || Yd(i))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          i +
          "."
      );
    lf = i;
  },
});
st.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
st.prototype.setMaxListeners = function (e) {
  if (typeof e != "number" || e < 0 || Yd(e))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        e +
        "."
    );
  return (this._maxListeners = e), this;
};
function Jd(i) {
  return i._maxListeners === void 0 ? st.defaultMaxListeners : i._maxListeners;
}
st.prototype.getMaxListeners = function () {
  return Jd(this);
};
st.prototype.emit = function (e) {
  for (var t = [], s = 1; s < arguments.length; s++) t.push(arguments[s]);
  var o = e === "error",
    c = this._events;
  if (c !== void 0) o = o && c.error === void 0;
  else if (!o) return !1;
  if (o) {
    var f;
    if ((t.length > 0 && (f = t[0]), f instanceof Error)) throw f;
    var d = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw ((d.context = f), d);
  }
  var p = c[e];
  if (p === void 0) return !1;
  if (typeof p == "function") hf(p, this, t);
  else
    for (var g = p.length, v = tp(p, g), s = 0; s < g; ++s) hf(v[s], this, t);
  return !0;
};
function Qd(i, e, t, s) {
  var o, c, f;
  if (
    (ha(t),
    (c = i._events),
    c === void 0
      ? ((c = i._events = Object.create(null)), (i._eventsCount = 0))
      : (c.newListener !== void 0 &&
          (i.emit("newListener", e, t.listener ? t.listener : t),
          (c = i._events)),
        (f = c[e])),
    f === void 0)
  )
    (f = c[e] = t), ++i._eventsCount;
  else if (
    (typeof f == "function"
      ? (f = c[e] = s ? [t, f] : [f, t])
      : s
      ? f.unshift(t)
      : f.push(t),
    (o = Jd(i)),
    o > 0 && f.length > o && !f.warned)
  ) {
    f.warned = !0;
    var d = new Error(
      "Possible EventEmitter memory leak detected. " +
        f.length +
        " " +
        String(e) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (d.name = "MaxListenersExceededWarning"),
      (d.emitter = i),
      (d.type = e),
      (d.count = f.length),
      Xw(d);
  }
  return i;
}
st.prototype.addListener = function (e, t) {
  return Qd(this, e, t, !1);
};
st.prototype.on = st.prototype.addListener;
st.prototype.prependListener = function (e, t) {
  return Qd(this, e, t, !0);
};
function Zw() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function Xd(i, e, t) {
  var s = { fired: !1, wrapFn: void 0, target: i, type: e, listener: t },
    o = Zw.bind(s);
  return (o.listener = t), (s.wrapFn = o), o;
}
st.prototype.once = function (e, t) {
  return ha(t), this.on(e, Xd(this, e, t)), this;
};
st.prototype.prependOnceListener = function (e, t) {
  return ha(t), this.prependListener(e, Xd(this, e, t)), this;
};
st.prototype.removeListener = function (e, t) {
  var s, o, c, f, d;
  if ((ha(t), (o = this._events), o === void 0)) return this;
  if (((s = o[e]), s === void 0)) return this;
  if (s === t || s.listener === t)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete o[e],
        o.removeListener && this.emit("removeListener", e, s.listener || t));
  else if (typeof s != "function") {
    for (c = -1, f = s.length - 1; f >= 0; f--)
      if (s[f] === t || s[f].listener === t) {
        (d = s[f].listener), (c = f);
        break;
      }
    if (c < 0) return this;
    c === 0 ? s.shift() : eb(s, c),
      s.length === 1 && (o[e] = s[0]),
      o.removeListener !== void 0 && this.emit("removeListener", e, d || t);
  }
  return this;
};
st.prototype.off = st.prototype.removeListener;
st.prototype.removeAllListeners = function (e) {
  var t, s, o;
  if (((s = this._events), s === void 0)) return this;
  if (s.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : s[e] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete s[e]),
      this
    );
  if (arguments.length === 0) {
    var c = Object.keys(s),
      f;
    for (o = 0; o < c.length; ++o)
      (f = c[o]), f !== "removeListener" && this.removeAllListeners(f);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((t = s[e]), typeof t == "function")) this.removeListener(e, t);
  else if (t !== void 0)
    for (o = t.length - 1; o >= 0; o--) this.removeListener(e, t[o]);
  return this;
};
function Zd(i, e, t) {
  var s = i._events;
  if (s === void 0) return [];
  var o = s[e];
  return o === void 0
    ? []
    : typeof o == "function"
    ? t
      ? [o.listener || o]
      : [o]
    : t
    ? tb(o)
    : tp(o, o.length);
}
st.prototype.listeners = function (e) {
  return Zd(this, e, !0);
};
st.prototype.rawListeners = function (e) {
  return Zd(this, e, !1);
};
st.listenerCount = function (i, e) {
  return typeof i.listenerCount == "function"
    ? i.listenerCount(e)
    : ep.call(i, e);
};
st.prototype.listenerCount = ep;
function ep(i) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[i];
    if (typeof t == "function") return 1;
    if (t !== void 0) return t.length;
  }
  return 0;
}
st.prototype.eventNames = function () {
  return this._eventsCount > 0 ? Zo(this._events) : [];
};
function tp(i, e) {
  for (var t = new Array(e), s = 0; s < e; ++s) t[s] = i[s];
  return t;
}
function eb(i, e) {
  for (; e + 1 < i.length; e++) i[e] = i[e + 1];
  i.pop();
}
function tb(i) {
  for (var e = new Array(i.length), t = 0; t < e.length; ++t)
    e[t] = i[t].listener || i[t];
  return e;
}
function rb(i, e) {
  return new Promise(function (t, s) {
    function o(f) {
      i.removeListener(e, c), s(f);
    }
    function c() {
      typeof i.removeListener == "function" && i.removeListener("error", o),
        t([].slice.call(arguments));
    }
    rp(i, e, c, { once: !0 }), e !== "error" && ib(i, o, { once: !0 });
  });
}
function ib(i, e, t) {
  typeof i.on == "function" && rp(i, "error", e, t);
}
function rp(i, e, t, s) {
  if (typeof i.on == "function") s.once ? i.once(e, t) : i.on(e, t);
  else if (typeof i.addEventListener == "function")
    i.addEventListener(e, function o(c) {
      s.once && i.removeEventListener(e, o), t(c);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof i
    );
}
var Cr = Bu.exports;
const zu = Rs(Cr);
var Hu = {},
  la = {},
  Le = {},
  ip = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  function e(d, p) {
    var g = (d >>> 16) & 65535,
      v = d & 65535,
      b = (p >>> 16) & 65535,
      O = p & 65535;
    return (v * O + (((g * O + v * b) << 16) >>> 0)) | 0;
  }
  i.mul = Math.imul || e;
  function t(d, p) {
    return (d + p) | 0;
  }
  i.add = t;
  function s(d, p) {
    return (d - p) | 0;
  }
  i.sub = s;
  function o(d, p) {
    return (d << p) | (d >>> (32 - p));
  }
  i.rotl = o;
  function c(d, p) {
    return (d << (32 - p)) | (d >>> p);
  }
  i.rotr = c;
  function f(d) {
    return typeof d == "number" && isFinite(d) && Math.floor(d) === d;
  }
  (i.isInteger = Number.isInteger || f),
    (i.MAX_SAFE_INTEGER = 9007199254740991),
    (i.isSafeInteger = function (d) {
      return (
        i.isInteger(d) && d >= -i.MAX_SAFE_INTEGER && d <= i.MAX_SAFE_INTEGER
      );
    });
})(ip);
Object.defineProperty(Le, "__esModule", { value: !0 });
var np = ip;
function nb(i, e) {
  return e === void 0 && (e = 0), (((i[e + 0] << 8) | i[e + 1]) << 16) >> 16;
}
Le.readInt16BE = nb;
function sb(i, e) {
  return e === void 0 && (e = 0), ((i[e + 0] << 8) | i[e + 1]) >>> 0;
}
Le.readUint16BE = sb;
function ob(i, e) {
  return e === void 0 && (e = 0), (((i[e + 1] << 8) | i[e]) << 16) >> 16;
}
Le.readInt16LE = ob;
function ab(i, e) {
  return e === void 0 && (e = 0), ((i[e + 1] << 8) | i[e]) >>> 0;
}
Le.readUint16LE = ab;
function sp(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 8),
    (e[t + 1] = i >>> 0),
    e
  );
}
Le.writeUint16BE = sp;
Le.writeInt16BE = sp;
function op(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 0),
    (e[t + 1] = i >>> 8),
    e
  );
}
Le.writeUint16LE = op;
Le.writeInt16LE = op;
function vu(i, e) {
  return (
    e === void 0 && (e = 0),
    (i[e] << 24) | (i[e + 1] << 16) | (i[e + 2] << 8) | i[e + 3]
  );
}
Le.readInt32BE = vu;
function mu(i, e) {
  return (
    e === void 0 && (e = 0),
    ((i[e] << 24) | (i[e + 1] << 16) | (i[e + 2] << 8) | i[e + 3]) >>> 0
  );
}
Le.readUint32BE = mu;
function wu(i, e) {
  return (
    e === void 0 && (e = 0),
    (i[e + 3] << 24) | (i[e + 2] << 16) | (i[e + 1] << 8) | i[e]
  );
}
Le.readInt32LE = wu;
function bu(i, e) {
  return (
    e === void 0 && (e = 0),
    ((i[e + 3] << 24) | (i[e + 2] << 16) | (i[e + 1] << 8) | i[e]) >>> 0
  );
}
Le.readUint32LE = bu;
function ia(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 24),
    (e[t + 1] = i >>> 16),
    (e[t + 2] = i >>> 8),
    (e[t + 3] = i >>> 0),
    e
  );
}
Le.writeUint32BE = ia;
Le.writeInt32BE = ia;
function na(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 0),
    (e[t + 1] = i >>> 8),
    (e[t + 2] = i >>> 16),
    (e[t + 3] = i >>> 24),
    e
  );
}
Le.writeUint32LE = na;
Le.writeInt32LE = na;
function cb(i, e) {
  e === void 0 && (e = 0);
  var t = vu(i, e),
    s = vu(i, e + 4);
  return t * 4294967296 + s - (s >> 31) * 4294967296;
}
Le.readInt64BE = cb;
function ub(i, e) {
  e === void 0 && (e = 0);
  var t = mu(i, e),
    s = mu(i, e + 4);
  return t * 4294967296 + s;
}
Le.readUint64BE = ub;
function hb(i, e) {
  e === void 0 && (e = 0);
  var t = wu(i, e),
    s = wu(i, e + 4);
  return s * 4294967296 + t - (t >> 31) * 4294967296;
}
Le.readInt64LE = hb;
function lb(i, e) {
  e === void 0 && (e = 0);
  var t = bu(i, e),
    s = bu(i, e + 4);
  return s * 4294967296 + t;
}
Le.readUint64LE = lb;
function ap(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    ia((i / 4294967296) >>> 0, e, t),
    ia(i >>> 0, e, t + 4),
    e
  );
}
Le.writeUint64BE = ap;
Le.writeInt64BE = ap;
function cp(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    na(i >>> 0, e, t),
    na((i / 4294967296) >>> 0, e, t + 4),
    e
  );
}
Le.writeUint64LE = cp;
Le.writeInt64LE = cp;
function fb(i, e, t) {
  if ((t === void 0 && (t = 0), i % 8 !== 0))
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var s = 0, o = 1, c = i / 8 + t - 1; c >= t; c--)
    (s += e[c] * o), (o *= 256);
  return s;
}
Le.readUintBE = fb;
function db(i, e, t) {
  if ((t === void 0 && (t = 0), i % 8 !== 0))
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var s = 0, o = 1, c = t; c < t + i / 8; c++) (s += e[c] * o), (o *= 256);
  return s;
}
Le.readUintLE = db;
function pb(i, e, t, s) {
  if (
    (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
  )
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!np.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var o = 1, c = i / 8 + s - 1; c >= s; c--)
    (t[c] = (e / o) & 255), (o *= 256);
  return t;
}
Le.writeUintBE = pb;
function gb(i, e, t, s) {
  if (
    (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
  )
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!np.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var o = 1, c = s; c < s + i / 8; c++) (t[c] = (e / o) & 255), (o *= 256);
  return t;
}
Le.writeUintLE = gb;
function yb(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e);
}
Le.readFloat32BE = yb;
function vb(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e, !0);
}
Le.readFloat32LE = vb;
function mb(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e);
}
Le.readFloat64BE = mb;
function wb(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e, !0);
}
Le.readFloat64LE = wb;
function bb(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i), e;
}
Le.writeFloat32BE = bb;
function _b(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i, !0), e;
}
Le.writeFloat32LE = _b;
function Eb(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i), e;
}
Le.writeFloat64BE = Eb;
function Db(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i, !0), e;
}
Le.writeFloat64LE = Db;
var Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
function Sb(i) {
  for (var e = 0; e < i.length; e++) i[e] = 0;
  return i;
}
Tr.wipe = Sb;
Object.defineProperty(la, "__esModule", { value: !0 });
var Zt = Le,
  _u = Tr,
  Ib = 20;
function xb(i, e, t) {
  for (
    var s = 1634760805,
      o = 857760878,
      c = 2036477234,
      f = 1797285236,
      d = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
      p = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
      g = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
      v = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
      b = (t[19] << 24) | (t[18] << 16) | (t[17] << 8) | t[16],
      O = (t[23] << 24) | (t[22] << 16) | (t[21] << 8) | t[20],
      P = (t[27] << 24) | (t[26] << 16) | (t[25] << 8) | t[24],
      S = (t[31] << 24) | (t[30] << 16) | (t[29] << 8) | t[28],
      K = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
      H = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
      Z = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
      F = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
      U = s,
      I = o,
      A = c,
      C = f,
      h = d,
      _ = p,
      ee = g,
      ne = v,
      ue = b,
      ge = O,
      ye = P,
      D = S,
      R = K,
      X = H,
      J = Z,
      k = F,
      V = 0;
    V < Ib;
    V += 2
  )
    (U = (U + h) | 0),
      (R ^= U),
      (R = (R >>> (32 - 16)) | (R << 16)),
      (ue = (ue + R) | 0),
      (h ^= ue),
      (h = (h >>> (32 - 12)) | (h << 12)),
      (I = (I + _) | 0),
      (X ^= I),
      (X = (X >>> (32 - 16)) | (X << 16)),
      (ge = (ge + X) | 0),
      (_ ^= ge),
      (_ = (_ >>> (32 - 12)) | (_ << 12)),
      (A = (A + ee) | 0),
      (J ^= A),
      (J = (J >>> (32 - 16)) | (J << 16)),
      (ye = (ye + J) | 0),
      (ee ^= ye),
      (ee = (ee >>> (32 - 12)) | (ee << 12)),
      (C = (C + ne) | 0),
      (k ^= C),
      (k = (k >>> (32 - 16)) | (k << 16)),
      (D = (D + k) | 0),
      (ne ^= D),
      (ne = (ne >>> (32 - 12)) | (ne << 12)),
      (A = (A + ee) | 0),
      (J ^= A),
      (J = (J >>> (32 - 8)) | (J << 8)),
      (ye = (ye + J) | 0),
      (ee ^= ye),
      (ee = (ee >>> (32 - 7)) | (ee << 7)),
      (C = (C + ne) | 0),
      (k ^= C),
      (k = (k >>> (32 - 8)) | (k << 8)),
      (D = (D + k) | 0),
      (ne ^= D),
      (ne = (ne >>> (32 - 7)) | (ne << 7)),
      (I = (I + _) | 0),
      (X ^= I),
      (X = (X >>> (32 - 8)) | (X << 8)),
      (ge = (ge + X) | 0),
      (_ ^= ge),
      (_ = (_ >>> (32 - 7)) | (_ << 7)),
      (U = (U + h) | 0),
      (R ^= U),
      (R = (R >>> (32 - 8)) | (R << 8)),
      (ue = (ue + R) | 0),
      (h ^= ue),
      (h = (h >>> (32 - 7)) | (h << 7)),
      (U = (U + _) | 0),
      (k ^= U),
      (k = (k >>> (32 - 16)) | (k << 16)),
      (ye = (ye + k) | 0),
      (_ ^= ye),
      (_ = (_ >>> (32 - 12)) | (_ << 12)),
      (I = (I + ee) | 0),
      (R ^= I),
      (R = (R >>> (32 - 16)) | (R << 16)),
      (D = (D + R) | 0),
      (ee ^= D),
      (ee = (ee >>> (32 - 12)) | (ee << 12)),
      (A = (A + ne) | 0),
      (X ^= A),
      (X = (X >>> (32 - 16)) | (X << 16)),
      (ue = (ue + X) | 0),
      (ne ^= ue),
      (ne = (ne >>> (32 - 12)) | (ne << 12)),
      (C = (C + h) | 0),
      (J ^= C),
      (J = (J >>> (32 - 16)) | (J << 16)),
      (ge = (ge + J) | 0),
      (h ^= ge),
      (h = (h >>> (32 - 12)) | (h << 12)),
      (A = (A + ne) | 0),
      (X ^= A),
      (X = (X >>> (32 - 8)) | (X << 8)),
      (ue = (ue + X) | 0),
      (ne ^= ue),
      (ne = (ne >>> (32 - 7)) | (ne << 7)),
      (C = (C + h) | 0),
      (J ^= C),
      (J = (J >>> (32 - 8)) | (J << 8)),
      (ge = (ge + J) | 0),
      (h ^= ge),
      (h = (h >>> (32 - 7)) | (h << 7)),
      (I = (I + ee) | 0),
      (R ^= I),
      (R = (R >>> (32 - 8)) | (R << 8)),
      (D = (D + R) | 0),
      (ee ^= D),
      (ee = (ee >>> (32 - 7)) | (ee << 7)),
      (U = (U + _) | 0),
      (k ^= U),
      (k = (k >>> (32 - 8)) | (k << 8)),
      (ye = (ye + k) | 0),
      (_ ^= ye),
      (_ = (_ >>> (32 - 7)) | (_ << 7));
  Zt.writeUint32LE((U + s) | 0, i, 0),
    Zt.writeUint32LE((I + o) | 0, i, 4),
    Zt.writeUint32LE((A + c) | 0, i, 8),
    Zt.writeUint32LE((C + f) | 0, i, 12),
    Zt.writeUint32LE((h + d) | 0, i, 16),
    Zt.writeUint32LE((_ + p) | 0, i, 20),
    Zt.writeUint32LE((ee + g) | 0, i, 24),
    Zt.writeUint32LE((ne + v) | 0, i, 28),
    Zt.writeUint32LE((ue + b) | 0, i, 32),
    Zt.writeUint32LE((ge + O) | 0, i, 36),
    Zt.writeUint32LE((ye + P) | 0, i, 40),
    Zt.writeUint32LE((D + S) | 0, i, 44),
    Zt.writeUint32LE((R + K) | 0, i, 48),
    Zt.writeUint32LE((X + H) | 0, i, 52),
    Zt.writeUint32LE((J + Z) | 0, i, 56),
    Zt.writeUint32LE((k + F) | 0, i, 60);
}
function up(i, e, t, s, o) {
  if ((o === void 0 && (o = 0), i.length !== 32))
    throw new Error("ChaCha: key size must be 32 bytes");
  if (s.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var c, f;
  if (o === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    (c = new Uint8Array(16)), (f = c.length - e.length), c.set(e, f);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    (c = e), (f = o);
  }
  for (var d = new Uint8Array(64), p = 0; p < t.length; p += 64) {
    xb(d, c, i);
    for (var g = p; g < p + 64 && g < t.length; g++) s[g] = t[g] ^ d[g - p];
    Pb(c, 0, f);
  }
  return _u.wipe(d), o === 0 && _u.wipe(c), s;
}
la.streamXOR = up;
function Ob(i, e, t, s) {
  return s === void 0 && (s = 0), _u.wipe(t), up(i, e, t, t, s);
}
la.stream = Ob;
function Pb(i, e, t) {
  for (var s = 1; t--; )
    (s = (s + (i[e] & 255)) | 0), (i[e] = s & 255), (s >>>= 8), e++;
  if (s > 0) throw new Error("ChaCha: counter overflow");
}
var hp = {},
  zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
function Ab(i, e, t) {
  return (~(i - 1) & e) | ((i - 1) & t);
}
zi.select = Ab;
function Cb(i, e) {
  return (((i | 0) - (e | 0) - 1) >>> 31) & 1;
}
zi.lessOrEqual = Cb;
function lp(i, e) {
  if (i.length !== e.length) return 0;
  for (var t = 0, s = 0; s < i.length; s++) t |= i[s] ^ e[s];
  return 1 & ((t - 1) >>> 8);
}
zi.compare = lp;
function Tb(i, e) {
  return i.length === 0 || e.length === 0 ? !1 : lp(i, e) !== 0;
}
zi.equal = Tb;
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = zi,
    t = Tr;
  i.DIGEST_LENGTH = 16;
  var s = (function () {
    function f(d) {
      (this.digestLength = i.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var p = d[0] | (d[1] << 8);
      this._r[0] = p & 8191;
      var g = d[2] | (d[3] << 8);
      this._r[1] = ((p >>> 13) | (g << 3)) & 8191;
      var v = d[4] | (d[5] << 8);
      this._r[2] = ((g >>> 10) | (v << 6)) & 7939;
      var b = d[6] | (d[7] << 8);
      this._r[3] = ((v >>> 7) | (b << 9)) & 8191;
      var O = d[8] | (d[9] << 8);
      (this._r[4] = ((b >>> 4) | (O << 12)) & 255),
        (this._r[5] = (O >>> 1) & 8190);
      var P = d[10] | (d[11] << 8);
      this._r[6] = ((O >>> 14) | (P << 2)) & 8191;
      var S = d[12] | (d[13] << 8);
      this._r[7] = ((P >>> 11) | (S << 5)) & 8065;
      var K = d[14] | (d[15] << 8);
      (this._r[8] = ((S >>> 8) | (K << 8)) & 8191),
        (this._r[9] = (K >>> 5) & 127),
        (this._pad[0] = d[16] | (d[17] << 8)),
        (this._pad[1] = d[18] | (d[19] << 8)),
        (this._pad[2] = d[20] | (d[21] << 8)),
        (this._pad[3] = d[22] | (d[23] << 8)),
        (this._pad[4] = d[24] | (d[25] << 8)),
        (this._pad[5] = d[26] | (d[27] << 8)),
        (this._pad[6] = d[28] | (d[29] << 8)),
        (this._pad[7] = d[30] | (d[31] << 8));
    }
    return (
      (f.prototype._blocks = function (d, p, g) {
        for (
          var v = this._fin ? 0 : 2048,
            b = this._h[0],
            O = this._h[1],
            P = this._h[2],
            S = this._h[3],
            K = this._h[4],
            H = this._h[5],
            Z = this._h[6],
            F = this._h[7],
            U = this._h[8],
            I = this._h[9],
            A = this._r[0],
            C = this._r[1],
            h = this._r[2],
            _ = this._r[3],
            ee = this._r[4],
            ne = this._r[5],
            ue = this._r[6],
            ge = this._r[7],
            ye = this._r[8],
            D = this._r[9];
          g >= 16;

        ) {
          var R = d[p + 0] | (d[p + 1] << 8);
          b += R & 8191;
          var X = d[p + 2] | (d[p + 3] << 8);
          O += ((R >>> 13) | (X << 3)) & 8191;
          var J = d[p + 4] | (d[p + 5] << 8);
          P += ((X >>> 10) | (J << 6)) & 8191;
          var k = d[p + 6] | (d[p + 7] << 8);
          S += ((J >>> 7) | (k << 9)) & 8191;
          var V = d[p + 8] | (d[p + 9] << 8);
          (K += ((k >>> 4) | (V << 12)) & 8191), (H += (V >>> 1) & 8191);
          var te = d[p + 10] | (d[p + 11] << 8);
          Z += ((V >>> 14) | (te << 2)) & 8191;
          var ie = d[p + 12] | (d[p + 13] << 8);
          F += ((te >>> 11) | (ie << 5)) & 8191;
          var De = d[p + 14] | (d[p + 15] << 8);
          (U += ((ie >>> 8) | (De << 8)) & 8191), (I += (De >>> 5) | v);
          var oe = 0,
            Se = oe;
          (Se += b * A),
            (Se += O * (5 * D)),
            (Se += P * (5 * ye)),
            (Se += S * (5 * ge)),
            (Se += K * (5 * ue)),
            (oe = Se >>> 13),
            (Se &= 8191),
            (Se += H * (5 * ne)),
            (Se += Z * (5 * ee)),
            (Se += F * (5 * _)),
            (Se += U * (5 * h)),
            (Se += I * (5 * C)),
            (oe += Se >>> 13),
            (Se &= 8191);
          var le = oe;
          (le += b * C),
            (le += O * A),
            (le += P * (5 * D)),
            (le += S * (5 * ye)),
            (le += K * (5 * ge)),
            (oe = le >>> 13),
            (le &= 8191),
            (le += H * (5 * ue)),
            (le += Z * (5 * ne)),
            (le += F * (5 * ee)),
            (le += U * (5 * _)),
            (le += I * (5 * h)),
            (oe += le >>> 13),
            (le &= 8191);
          var Ce = oe;
          (Ce += b * h),
            (Ce += O * C),
            (Ce += P * A),
            (Ce += S * (5 * D)),
            (Ce += K * (5 * ye)),
            (oe = Ce >>> 13),
            (Ce &= 8191),
            (Ce += H * (5 * ge)),
            (Ce += Z * (5 * ue)),
            (Ce += F * (5 * ne)),
            (Ce += U * (5 * ee)),
            (Ce += I * (5 * _)),
            (oe += Ce >>> 13),
            (Ce &= 8191);
          var B = oe;
          (B += b * _),
            (B += O * h),
            (B += P * C),
            (B += S * A),
            (B += K * (5 * D)),
            (oe = B >>> 13),
            (B &= 8191),
            (B += H * (5 * ye)),
            (B += Z * (5 * ge)),
            (B += F * (5 * ue)),
            (B += U * (5 * ne)),
            (B += I * (5 * ee)),
            (oe += B >>> 13),
            (B &= 8191);
          var q = oe;
          (q += b * ee),
            (q += O * _),
            (q += P * h),
            (q += S * C),
            (q += K * A),
            (oe = q >>> 13),
            (q &= 8191),
            (q += H * (5 * D)),
            (q += Z * (5 * ye)),
            (q += F * (5 * ge)),
            (q += U * (5 * ue)),
            (q += I * (5 * ne)),
            (oe += q >>> 13),
            (q &= 8191);
          var $ = oe;
          ($ += b * ne),
            ($ += O * ee),
            ($ += P * _),
            ($ += S * h),
            ($ += K * C),
            (oe = $ >>> 13),
            ($ &= 8191),
            ($ += H * A),
            ($ += Z * (5 * D)),
            ($ += F * (5 * ye)),
            ($ += U * (5 * ge)),
            ($ += I * (5 * ue)),
            (oe += $ >>> 13),
            ($ &= 8191);
          var l = oe;
          (l += b * ue),
            (l += O * ne),
            (l += P * ee),
            (l += S * _),
            (l += K * h),
            (oe = l >>> 13),
            (l &= 8191),
            (l += H * C),
            (l += Z * A),
            (l += F * (5 * D)),
            (l += U * (5 * ye)),
            (l += I * (5 * ge)),
            (oe += l >>> 13),
            (l &= 8191);
          var T = oe;
          (T += b * ge),
            (T += O * ue),
            (T += P * ne),
            (T += S * ee),
            (T += K * _),
            (oe = T >>> 13),
            (T &= 8191),
            (T += H * h),
            (T += Z * C),
            (T += F * A),
            (T += U * (5 * D)),
            (T += I * (5 * ye)),
            (oe += T >>> 13),
            (T &= 8191);
          var se = oe;
          (se += b * ye),
            (se += O * ge),
            (se += P * ue),
            (se += S * ne),
            (se += K * ee),
            (oe = se >>> 13),
            (se &= 8191),
            (se += H * _),
            (se += Z * h),
            (se += F * C),
            (se += U * A),
            (se += I * (5 * D)),
            (oe += se >>> 13),
            (se &= 8191);
          var he = oe;
          (he += b * D),
            (he += O * ye),
            (he += P * ge),
            (he += S * ue),
            (he += K * ne),
            (oe = he >>> 13),
            (he &= 8191),
            (he += H * ee),
            (he += Z * _),
            (he += F * h),
            (he += U * C),
            (he += I * A),
            (oe += he >>> 13),
            (he &= 8191),
            (oe = ((oe << 2) + oe) | 0),
            (oe = (oe + Se) | 0),
            (Se = oe & 8191),
            (oe = oe >>> 13),
            (le += oe),
            (b = Se),
            (O = le),
            (P = Ce),
            (S = B),
            (K = q),
            (H = $),
            (Z = l),
            (F = T),
            (U = se),
            (I = he),
            (p += 16),
            (g -= 16);
        }
        (this._h[0] = b),
          (this._h[1] = O),
          (this._h[2] = P),
          (this._h[3] = S),
          (this._h[4] = K),
          (this._h[5] = H),
          (this._h[6] = Z),
          (this._h[7] = F),
          (this._h[8] = U),
          (this._h[9] = I);
      }),
      (f.prototype.finish = function (d, p) {
        p === void 0 && (p = 0);
        var g = new Uint16Array(10),
          v,
          b,
          O,
          P;
        if (this._leftover) {
          for (P = this._leftover, this._buffer[P++] = 1; P < 16; P++)
            this._buffer[P] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (v = this._h[1] >>> 13, this._h[1] &= 8191, P = 2; P < 10; P++)
          (this._h[P] += v), (v = this._h[P] >>> 13), (this._h[P] &= 8191);
        for (
          this._h[0] += v * 5,
            v = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += v,
            v = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += v,
            g[0] = this._h[0] + 5,
            v = g[0] >>> 13,
            g[0] &= 8191,
            P = 1;
          P < 10;
          P++
        )
          (g[P] = this._h[P] + v), (v = g[P] >>> 13), (g[P] &= 8191);
        for (g[9] -= 8192, b = (v ^ 1) - 1, P = 0; P < 10; P++) g[P] &= b;
        for (b = ~b, P = 0; P < 10; P++) this._h[P] = (this._h[P] & b) | g[P];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            O = this._h[0] + this._pad[0],
            this._h[0] = O & 65535,
            P = 1;
          P < 8;
          P++
        )
          (O = (((this._h[P] + this._pad[P]) | 0) + (O >>> 16)) | 0),
            (this._h[P] = O & 65535);
        return (
          (d[p + 0] = this._h[0] >>> 0),
          (d[p + 1] = this._h[0] >>> 8),
          (d[p + 2] = this._h[1] >>> 0),
          (d[p + 3] = this._h[1] >>> 8),
          (d[p + 4] = this._h[2] >>> 0),
          (d[p + 5] = this._h[2] >>> 8),
          (d[p + 6] = this._h[3] >>> 0),
          (d[p + 7] = this._h[3] >>> 8),
          (d[p + 8] = this._h[4] >>> 0),
          (d[p + 9] = this._h[4] >>> 8),
          (d[p + 10] = this._h[5] >>> 0),
          (d[p + 11] = this._h[5] >>> 8),
          (d[p + 12] = this._h[6] >>> 0),
          (d[p + 13] = this._h[6] >>> 8),
          (d[p + 14] = this._h[7] >>> 0),
          (d[p + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (f.prototype.update = function (d) {
        var p = 0,
          g = d.length,
          v;
        if (this._leftover) {
          (v = 16 - this._leftover), v > g && (v = g);
          for (var b = 0; b < v; b++)
            this._buffer[this._leftover + b] = d[p + b];
          if (((g -= v), (p += v), (this._leftover += v), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (g >= 16 &&
            ((v = g - (g % 16)), this._blocks(d, p, v), (p += v), (g -= v)),
          g)
        ) {
          for (var b = 0; b < g; b++)
            this._buffer[this._leftover + b] = d[p + b];
          this._leftover += g;
        }
        return this;
      }),
      (f.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var d = new Uint8Array(16);
        return this.finish(d), d;
      }),
      (f.prototype.clean = function () {
        return (
          t.wipe(this._buffer),
          t.wipe(this._r),
          t.wipe(this._h),
          t.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      f
    );
  })();
  i.Poly1305 = s;
  function o(f, d) {
    var p = new s(f);
    p.update(d);
    var g = p.digest();
    return p.clean(), g;
  }
  i.oneTimeAuth = o;
  function c(f, d) {
    return f.length !== i.DIGEST_LENGTH || d.length !== i.DIGEST_LENGTH
      ? !1
      : e.equal(f, d);
  }
  i.equal = c;
})(hp);
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = la,
    t = hp,
    s = Tr,
    o = Le,
    c = zi;
  (i.KEY_LENGTH = 32), (i.NONCE_LENGTH = 12), (i.TAG_LENGTH = 16);
  var f = new Uint8Array(16),
    d = (function () {
      function p(g) {
        if (
          ((this.nonceLength = i.NONCE_LENGTH),
          (this.tagLength = i.TAG_LENGTH),
          g.length !== i.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(g);
      }
      return (
        (p.prototype.seal = function (g, v, b, O) {
          if (g.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var P = new Uint8Array(16);
          P.set(g, P.length - g.length);
          var S = new Uint8Array(32);
          e.stream(this._key, P, S, 4);
          var K = v.length + this.tagLength,
            H;
          if (O) {
            if (O.length !== K)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            H = O;
          } else H = new Uint8Array(K);
          return (
            e.streamXOR(this._key, P, v, H, 4),
            this._authenticate(
              H.subarray(H.length - this.tagLength, H.length),
              S,
              H.subarray(0, H.length - this.tagLength),
              b
            ),
            s.wipe(P),
            H
          );
        }),
        (p.prototype.open = function (g, v, b, O) {
          if (g.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (v.length < this.tagLength) return null;
          var P = new Uint8Array(16);
          P.set(g, P.length - g.length);
          var S = new Uint8Array(32);
          e.stream(this._key, P, S, 4);
          var K = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              K,
              S,
              v.subarray(0, v.length - this.tagLength),
              b
            ),
            !c.equal(K, v.subarray(v.length - this.tagLength, v.length)))
          )
            return null;
          var H = v.length - this.tagLength,
            Z;
          if (O) {
            if (O.length !== H)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            Z = O;
          } else Z = new Uint8Array(H);
          return (
            e.streamXOR(
              this._key,
              P,
              v.subarray(0, v.length - this.tagLength),
              Z,
              4
            ),
            s.wipe(P),
            Z
          );
        }),
        (p.prototype.clean = function () {
          return s.wipe(this._key), this;
        }),
        (p.prototype._authenticate = function (g, v, b, O) {
          var P = new t.Poly1305(v);
          O &&
            (P.update(O),
            O.length % 16 > 0 && P.update(f.subarray(O.length % 16))),
            P.update(b),
            b.length % 16 > 0 && P.update(f.subarray(b.length % 16));
          var S = new Uint8Array(8);
          O && o.writeUint64LE(O.length, S),
            P.update(S),
            o.writeUint64LE(b.length, S),
            P.update(S);
          for (var K = P.digest(), H = 0; H < K.length; H++) g[H] = K[H];
          P.clean(), s.wipe(K), s.wipe(S);
        }),
        p
      );
    })();
  i.ChaCha20Poly1305 = d;
})(Hu);
var fp = {},
  Ns = {},
  Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
function Rb(i) {
  return (
    typeof i.saveState < "u" &&
    typeof i.restoreState < "u" &&
    typeof i.cleanSavedState < "u"
  );
}
Ku.isSerializableHash = Rb;
Object.defineProperty(Ns, "__esModule", { value: !0 });
var ii = Ku,
  Nb = zi,
  Fb = Tr,
  dp = (function () {
    function i(e, t) {
      (this._finished = !1),
        (this._inner = new e()),
        (this._outer = new e()),
        (this.blockSize = this._outer.blockSize),
        (this.digestLength = this._outer.digestLength);
      var s = new Uint8Array(this.blockSize);
      t.length > this.blockSize
        ? this._inner.update(t).finish(s).clean()
        : s.set(t);
      for (var o = 0; o < s.length; o++) s[o] ^= 54;
      this._inner.update(s);
      for (var o = 0; o < s.length; o++) s[o] ^= 106;
      this._outer.update(s),
        ii.isSerializableHash(this._inner) &&
          ii.isSerializableHash(this._outer) &&
          ((this._innerKeyedState = this._inner.saveState()),
          (this._outerKeyedState = this._outer.saveState())),
        Fb.wipe(s);
    }
    return (
      (i.prototype.reset = function () {
        if (
          !ii.isSerializableHash(this._inner) ||
          !ii.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't reset() because hash doesn't implement restoreState()"
          );
        return (
          this._inner.restoreState(this._innerKeyedState),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (i.prototype.clean = function () {
        ii.isSerializableHash(this._inner) &&
          this._inner.cleanSavedState(this._innerKeyedState),
          ii.isSerializableHash(this._outer) &&
            this._outer.cleanSavedState(this._outerKeyedState),
          this._inner.clean(),
          this._outer.clean();
      }),
      (i.prototype.update = function (e) {
        return this._inner.update(e), this;
      }),
      (i.prototype.finish = function (e) {
        return this._finished
          ? (this._outer.finish(e), this)
          : (this._inner.finish(e),
            this._outer.update(e.subarray(0, this.digestLength)).finish(e),
            (this._finished = !0),
            this);
      }),
      (i.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (i.prototype.saveState = function () {
        if (!ii.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't saveState() because hash doesn't implement it"
          );
        return this._inner.saveState();
      }),
      (i.prototype.restoreState = function (e) {
        if (
          !ii.isSerializableHash(this._inner) ||
          !ii.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't restoreState() because hash doesn't implement it"
          );
        return (
          this._inner.restoreState(e),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (i.prototype.cleanSavedState = function (e) {
        if (!ii.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't cleanSavedState() because hash doesn't implement it"
          );
        this._inner.cleanSavedState(e);
      }),
      i
    );
  })();
Ns.HMAC = dp;
function $b(i, e, t) {
  var s = new dp(i, e);
  s.update(t);
  var o = s.digest();
  return s.clean(), o;
}
Ns.hmac = $b;
Ns.equal = Nb.equal;
Object.defineProperty(fp, "__esModule", { value: !0 });
var ff = Ns,
  df = Tr,
  Lb = (function () {
    function i(e, t, s, o) {
      s === void 0 && (s = new Uint8Array(0)),
        (this._counter = new Uint8Array(1)),
        (this._hash = e),
        (this._info = o);
      var c = ff.hmac(this._hash, s, t);
      (this._hmac = new ff.HMAC(e, c)),
        (this._buffer = new Uint8Array(this._hmac.digestLength)),
        (this._bufpos = this._buffer.length);
    }
    return (
      (i.prototype._fillBuffer = function () {
        this._counter[0]++;
        var e = this._counter[0];
        if (e === 0) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
          e > 1 && this._hmac.update(this._buffer),
          this._info && this._hmac.update(this._info),
          this._hmac.update(this._counter),
          this._hmac.finish(this._buffer),
          (this._bufpos = 0);
      }),
      (i.prototype.expand = function (e) {
        for (var t = new Uint8Array(e), s = 0; s < t.length; s++)
          this._bufpos === this._buffer.length && this._fillBuffer(),
            (t[s] = this._buffer[this._bufpos++]);
        return t;
      }),
      (i.prototype.clean = function () {
        this._hmac.clean(),
          df.wipe(this._buffer),
          df.wipe(this._counter),
          (this._bufpos = 0);
      }),
      i
    );
  })(),
  Ub = (fp.HKDF = Lb),
  Kn = {},
  fa = {},
  da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
da.BrowserRandomSource = void 0;
const pf = 65536;
class Mb {
  constructor() {
    (this.isAvailable = !1), (this.isInstantiated = !1);
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e &&
      e.getRandomValues !== void 0 &&
      ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let s = 0; s < t.length; s += pf)
      this._crypto.getRandomValues(
        t.subarray(s, s + Math.min(t.length - s, pf))
      );
    return t;
  }
}
da.BrowserRandomSource = Mb;
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.NodeRandomSource = void 0;
const jb = Tr;
class qb {
  constructor() {
    if (
      ((this.isAvailable = !1), (this.isInstantiated = !1), typeof Yw < "u")
    ) {
      const e = Jw;
      e &&
        e.randomBytes &&
        ((this._crypto = e),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const s = new Uint8Array(e);
    for (let o = 0; o < s.length; o++) s[o] = t[o];
    return (0, jb.wipe)(t), s;
  }
}
pa.NodeRandomSource = qb;
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.SystemRandomSource = void 0;
const Bb = da,
  zb = pa;
class Hb {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.name = ""),
      (this._source = new Bb.BrowserRandomSource()),
      this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Browser");
      return;
    }
    if (
      ((this._source = new zb.NodeRandomSource()), this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Node");
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
fa.SystemRandomSource = Hb;
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.randomStringForEntropy =
      i.randomString =
      i.randomUint32 =
      i.randomBytes =
      i.defaultRandomSource =
        void 0);
  const e = fa,
    t = Le,
    s = Tr;
  i.defaultRandomSource = new e.SystemRandomSource();
  function o(g, v = i.defaultRandomSource) {
    return v.randomBytes(g);
  }
  i.randomBytes = o;
  function c(g = i.defaultRandomSource) {
    const v = o(4, g),
      b = (0, t.readUint32LE)(v);
    return (0, s.wipe)(v), b;
  }
  i.randomUint32 = c;
  const f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function d(g, v = f, b = i.defaultRandomSource) {
    if (v.length < 2) throw new Error("randomString charset is too short");
    if (v.length > 256) throw new Error("randomString charset is too long");
    let O = "";
    const P = v.length,
      S = 256 - (256 % P);
    for (; g > 0; ) {
      const K = o(Math.ceil((g * 256) / S), b);
      for (let H = 0; H < K.length && g > 0; H++) {
        const Z = K[H];
        Z < S && ((O += v.charAt(Z % P)), g--);
      }
      (0, s.wipe)(K);
    }
    return O;
  }
  i.randomString = d;
  function p(g, v = f, b = i.defaultRandomSource) {
    const O = Math.ceil(g / (Math.log(v.length) / Math.LN2));
    return d(O, v, b);
  }
  i.randomStringForEntropy = p;
})(Kn);
var ga = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Le,
    t = Tr;
  (i.DIGEST_LENGTH = 32), (i.BLOCK_SIZE = 64);
  var s = (function () {
    function d() {
      (this.digestLength = i.DIGEST_LENGTH),
        (this.blockSize = i.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (d.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (d.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (d.prototype.clean = function () {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }),
      (d.prototype.update = function (p, g) {
        if ((g === void 0 && (g = p.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var v = 0;
        if (((this._bytesHashed += g), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && g > 0; )
            (this._buffer[this._bufferLength++] = p[v++]), g--;
          this._bufferLength === this.blockSize &&
            (c(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          g >= this.blockSize &&
          ((v = c(this._temp, this._state, p, v, g)), (g %= this.blockSize));
          g > 0;

        )
          (this._buffer[this._bufferLength++] = p[v++]), g--;
        return this;
      }),
      (d.prototype.finish = function (p) {
        if (!this._finished) {
          var g = this._bytesHashed,
            v = this._bufferLength,
            b = (g / 536870912) | 0,
            O = g << 3,
            P = g % 64 < 56 ? 64 : 128;
          this._buffer[v] = 128;
          for (var S = v + 1; S < P - 8; S++) this._buffer[S] = 0;
          e.writeUint32BE(b, this._buffer, P - 8),
            e.writeUint32BE(O, this._buffer, P - 4),
            c(this._temp, this._state, this._buffer, 0, P),
            (this._finished = !0);
        }
        for (var S = 0; S < this.digestLength / 4; S++)
          e.writeUint32BE(this._state[S], p, S * 4);
        return this;
      }),
      (d.prototype.digest = function () {
        var p = new Uint8Array(this.digestLength);
        return this.finish(p), p;
      }),
      (d.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (d.prototype.restoreState = function (p) {
        return (
          this._state.set(p.state),
          (this._bufferLength = p.bufferLength),
          p.buffer && this._buffer.set(p.buffer),
          (this._bytesHashed = p.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (d.prototype.cleanSavedState = function (p) {
        t.wipe(p.state),
          p.buffer && t.wipe(p.buffer),
          (p.bufferLength = 0),
          (p.bytesHashed = 0);
      }),
      d
    );
  })();
  i.SHA256 = s;
  var o = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function c(d, p, g, v, b) {
    for (; b >= 64; ) {
      for (
        var O = p[0],
          P = p[1],
          S = p[2],
          K = p[3],
          H = p[4],
          Z = p[5],
          F = p[6],
          U = p[7],
          I = 0;
        I < 16;
        I++
      ) {
        var A = v + I * 4;
        d[I] = e.readUint32BE(g, A);
      }
      for (var I = 16; I < 64; I++) {
        var C = d[I - 2],
          h =
            ((C >>> 17) | (C << (32 - 17))) ^
            ((C >>> 19) | (C << (32 - 19))) ^
            (C >>> 10);
        C = d[I - 15];
        var _ =
          ((C >>> 7) | (C << (32 - 7))) ^
          ((C >>> 18) | (C << (32 - 18))) ^
          (C >>> 3);
        d[I] = ((h + d[I - 7]) | 0) + ((_ + d[I - 16]) | 0);
      }
      for (var I = 0; I < 64; I++) {
        var h =
            ((((((H >>> 6) | (H << 26)) ^
              ((H >>> 11) | (H << 21)) ^
              ((H >>> 25) | (H << 7))) +
              ((H & Z) ^ (~H & F))) |
              0) +
              ((U + ((o[I] + d[I]) | 0)) | 0)) |
            0,
          _ =
            ((((O >>> 2) | (O << (32 - 2))) ^
              ((O >>> 13) | (O << (32 - 13))) ^
              ((O >>> 22) | (O << (32 - 22)))) +
              ((O & P) ^ (O & S) ^ (P & S))) |
            0;
        (U = F),
          (F = Z),
          (Z = H),
          (H = (K + h) | 0),
          (K = S),
          (S = P),
          (P = O),
          (O = (h + _) | 0);
      }
      (p[0] += O),
        (p[1] += P),
        (p[2] += S),
        (p[3] += K),
        (p[4] += H),
        (p[5] += Z),
        (p[6] += F),
        (p[7] += U),
        (v += 64),
        (b -= 64);
    }
    return v;
  }
  function f(d) {
    var p = new s();
    p.update(d);
    var g = p.digest();
    return p.clean(), g;
  }
  i.hash = f;
})(ga);
var ku = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.sharedKey =
      i.generateKeyPair =
      i.generateKeyPairFromSeed =
      i.scalarMultBase =
      i.scalarMult =
      i.SHARED_KEY_LENGTH =
      i.SECRET_KEY_LENGTH =
      i.PUBLIC_KEY_LENGTH =
        void 0);
  const e = Kn,
    t = Tr;
  (i.PUBLIC_KEY_LENGTH = 32),
    (i.SECRET_KEY_LENGTH = 32),
    (i.SHARED_KEY_LENGTH = 32);
  function s(I) {
    const A = new Float64Array(16);
    if (I) for (let C = 0; C < I.length; C++) A[C] = I[C];
    return A;
  }
  const o = new Uint8Array(32);
  o[0] = 9;
  const c = s([56129, 1]);
  function f(I) {
    let A = 1;
    for (let C = 0; C < 16; C++) {
      let h = I[C] + A + 65535;
      (A = Math.floor(h / 65536)), (I[C] = h - A * 65536);
    }
    I[0] += A - 1 + 37 * (A - 1);
  }
  function d(I, A, C) {
    const h = ~(C - 1);
    for (let _ = 0; _ < 16; _++) {
      const ee = h & (I[_] ^ A[_]);
      (I[_] ^= ee), (A[_] ^= ee);
    }
  }
  function p(I, A) {
    const C = s(),
      h = s();
    for (let _ = 0; _ < 16; _++) h[_] = A[_];
    f(h), f(h), f(h);
    for (let _ = 0; _ < 2; _++) {
      C[0] = h[0] - 65517;
      for (let ne = 1; ne < 15; ne++)
        (C[ne] = h[ne] - 65535 - ((C[ne - 1] >> 16) & 1)), (C[ne - 1] &= 65535);
      C[15] = h[15] - 32767 - ((C[14] >> 16) & 1);
      const ee = (C[15] >> 16) & 1;
      (C[14] &= 65535), d(h, C, 1 - ee);
    }
    for (let _ = 0; _ < 16; _++)
      (I[2 * _] = h[_] & 255), (I[2 * _ + 1] = h[_] >> 8);
  }
  function g(I, A) {
    for (let C = 0; C < 16; C++) I[C] = A[2 * C] + (A[2 * C + 1] << 8);
    I[15] &= 32767;
  }
  function v(I, A, C) {
    for (let h = 0; h < 16; h++) I[h] = A[h] + C[h];
  }
  function b(I, A, C) {
    for (let h = 0; h < 16; h++) I[h] = A[h] - C[h];
  }
  function O(I, A, C) {
    let h,
      _,
      ee = 0,
      ne = 0,
      ue = 0,
      ge = 0,
      ye = 0,
      D = 0,
      R = 0,
      X = 0,
      J = 0,
      k = 0,
      V = 0,
      te = 0,
      ie = 0,
      De = 0,
      oe = 0,
      Se = 0,
      le = 0,
      Ce = 0,
      B = 0,
      q = 0,
      $ = 0,
      l = 0,
      T = 0,
      se = 0,
      he = 0,
      Ee = 0,
      ze = 0,
      ke = 0,
      Ue = 0,
      pt = 0,
      gt = 0,
      je = C[0],
      Ie = C[1],
      Ne = C[2],
      Fe = C[3],
      qe = C[4],
      Oe = C[5],
      $e = C[6],
      _e = C[7],
      Pe = C[8],
      He = C[9],
      xe = C[10],
      Ve = C[11],
      Ge = C[12],
      Ze = C[13],
      et = C[14],
      Je = C[15];
    (h = A[0]),
      (ee += h * je),
      (ne += h * Ie),
      (ue += h * Ne),
      (ge += h * Fe),
      (ye += h * qe),
      (D += h * Oe),
      (R += h * $e),
      (X += h * _e),
      (J += h * Pe),
      (k += h * He),
      (V += h * xe),
      (te += h * Ve),
      (ie += h * Ge),
      (De += h * Ze),
      (oe += h * et),
      (Se += h * Je),
      (h = A[1]),
      (ne += h * je),
      (ue += h * Ie),
      (ge += h * Ne),
      (ye += h * Fe),
      (D += h * qe),
      (R += h * Oe),
      (X += h * $e),
      (J += h * _e),
      (k += h * Pe),
      (V += h * He),
      (te += h * xe),
      (ie += h * Ve),
      (De += h * Ge),
      (oe += h * Ze),
      (Se += h * et),
      (le += h * Je),
      (h = A[2]),
      (ue += h * je),
      (ge += h * Ie),
      (ye += h * Ne),
      (D += h * Fe),
      (R += h * qe),
      (X += h * Oe),
      (J += h * $e),
      (k += h * _e),
      (V += h * Pe),
      (te += h * He),
      (ie += h * xe),
      (De += h * Ve),
      (oe += h * Ge),
      (Se += h * Ze),
      (le += h * et),
      (Ce += h * Je),
      (h = A[3]),
      (ge += h * je),
      (ye += h * Ie),
      (D += h * Ne),
      (R += h * Fe),
      (X += h * qe),
      (J += h * Oe),
      (k += h * $e),
      (V += h * _e),
      (te += h * Pe),
      (ie += h * He),
      (De += h * xe),
      (oe += h * Ve),
      (Se += h * Ge),
      (le += h * Ze),
      (Ce += h * et),
      (B += h * Je),
      (h = A[4]),
      (ye += h * je),
      (D += h * Ie),
      (R += h * Ne),
      (X += h * Fe),
      (J += h * qe),
      (k += h * Oe),
      (V += h * $e),
      (te += h * _e),
      (ie += h * Pe),
      (De += h * He),
      (oe += h * xe),
      (Se += h * Ve),
      (le += h * Ge),
      (Ce += h * Ze),
      (B += h * et),
      (q += h * Je),
      (h = A[5]),
      (D += h * je),
      (R += h * Ie),
      (X += h * Ne),
      (J += h * Fe),
      (k += h * qe),
      (V += h * Oe),
      (te += h * $e),
      (ie += h * _e),
      (De += h * Pe),
      (oe += h * He),
      (Se += h * xe),
      (le += h * Ve),
      (Ce += h * Ge),
      (B += h * Ze),
      (q += h * et),
      ($ += h * Je),
      (h = A[6]),
      (R += h * je),
      (X += h * Ie),
      (J += h * Ne),
      (k += h * Fe),
      (V += h * qe),
      (te += h * Oe),
      (ie += h * $e),
      (De += h * _e),
      (oe += h * Pe),
      (Se += h * He),
      (le += h * xe),
      (Ce += h * Ve),
      (B += h * Ge),
      (q += h * Ze),
      ($ += h * et),
      (l += h * Je),
      (h = A[7]),
      (X += h * je),
      (J += h * Ie),
      (k += h * Ne),
      (V += h * Fe),
      (te += h * qe),
      (ie += h * Oe),
      (De += h * $e),
      (oe += h * _e),
      (Se += h * Pe),
      (le += h * He),
      (Ce += h * xe),
      (B += h * Ve),
      (q += h * Ge),
      ($ += h * Ze),
      (l += h * et),
      (T += h * Je),
      (h = A[8]),
      (J += h * je),
      (k += h * Ie),
      (V += h * Ne),
      (te += h * Fe),
      (ie += h * qe),
      (De += h * Oe),
      (oe += h * $e),
      (Se += h * _e),
      (le += h * Pe),
      (Ce += h * He),
      (B += h * xe),
      (q += h * Ve),
      ($ += h * Ge),
      (l += h * Ze),
      (T += h * et),
      (se += h * Je),
      (h = A[9]),
      (k += h * je),
      (V += h * Ie),
      (te += h * Ne),
      (ie += h * Fe),
      (De += h * qe),
      (oe += h * Oe),
      (Se += h * $e),
      (le += h * _e),
      (Ce += h * Pe),
      (B += h * He),
      (q += h * xe),
      ($ += h * Ve),
      (l += h * Ge),
      (T += h * Ze),
      (se += h * et),
      (he += h * Je),
      (h = A[10]),
      (V += h * je),
      (te += h * Ie),
      (ie += h * Ne),
      (De += h * Fe),
      (oe += h * qe),
      (Se += h * Oe),
      (le += h * $e),
      (Ce += h * _e),
      (B += h * Pe),
      (q += h * He),
      ($ += h * xe),
      (l += h * Ve),
      (T += h * Ge),
      (se += h * Ze),
      (he += h * et),
      (Ee += h * Je),
      (h = A[11]),
      (te += h * je),
      (ie += h * Ie),
      (De += h * Ne),
      (oe += h * Fe),
      (Se += h * qe),
      (le += h * Oe),
      (Ce += h * $e),
      (B += h * _e),
      (q += h * Pe),
      ($ += h * He),
      (l += h * xe),
      (T += h * Ve),
      (se += h * Ge),
      (he += h * Ze),
      (Ee += h * et),
      (ze += h * Je),
      (h = A[12]),
      (ie += h * je),
      (De += h * Ie),
      (oe += h * Ne),
      (Se += h * Fe),
      (le += h * qe),
      (Ce += h * Oe),
      (B += h * $e),
      (q += h * _e),
      ($ += h * Pe),
      (l += h * He),
      (T += h * xe),
      (se += h * Ve),
      (he += h * Ge),
      (Ee += h * Ze),
      (ze += h * et),
      (ke += h * Je),
      (h = A[13]),
      (De += h * je),
      (oe += h * Ie),
      (Se += h * Ne),
      (le += h * Fe),
      (Ce += h * qe),
      (B += h * Oe),
      (q += h * $e),
      ($ += h * _e),
      (l += h * Pe),
      (T += h * He),
      (se += h * xe),
      (he += h * Ve),
      (Ee += h * Ge),
      (ze += h * Ze),
      (ke += h * et),
      (Ue += h * Je),
      (h = A[14]),
      (oe += h * je),
      (Se += h * Ie),
      (le += h * Ne),
      (Ce += h * Fe),
      (B += h * qe),
      (q += h * Oe),
      ($ += h * $e),
      (l += h * _e),
      (T += h * Pe),
      (se += h * He),
      (he += h * xe),
      (Ee += h * Ve),
      (ze += h * Ge),
      (ke += h * Ze),
      (Ue += h * et),
      (pt += h * Je),
      (h = A[15]),
      (Se += h * je),
      (le += h * Ie),
      (Ce += h * Ne),
      (B += h * Fe),
      (q += h * qe),
      ($ += h * Oe),
      (l += h * $e),
      (T += h * _e),
      (se += h * Pe),
      (he += h * He),
      (Ee += h * xe),
      (ze += h * Ve),
      (ke += h * Ge),
      (Ue += h * Ze),
      (pt += h * et),
      (gt += h * Je),
      (ee += 38 * le),
      (ne += 38 * Ce),
      (ue += 38 * B),
      (ge += 38 * q),
      (ye += 38 * $),
      (D += 38 * l),
      (R += 38 * T),
      (X += 38 * se),
      (J += 38 * he),
      (k += 38 * Ee),
      (V += 38 * ze),
      (te += 38 * ke),
      (ie += 38 * Ue),
      (De += 38 * pt),
      (oe += 38 * gt),
      (_ = 1),
      (h = ee + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ee = h - _ * 65536),
      (h = ne + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ne = h - _ * 65536),
      (h = ue + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ue = h - _ * 65536),
      (h = ge + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ge = h - _ * 65536),
      (h = ye + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ye = h - _ * 65536),
      (h = D + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (D = h - _ * 65536),
      (h = R + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (R = h - _ * 65536),
      (h = X + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (X = h - _ * 65536),
      (h = J + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (J = h - _ * 65536),
      (h = k + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (k = h - _ * 65536),
      (h = V + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (V = h - _ * 65536),
      (h = te + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (te = h - _ * 65536),
      (h = ie + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ie = h - _ * 65536),
      (h = De + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (De = h - _ * 65536),
      (h = oe + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (oe = h - _ * 65536),
      (h = Se + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (Se = h - _ * 65536),
      (ee += _ - 1 + 37 * (_ - 1)),
      (_ = 1),
      (h = ee + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ee = h - _ * 65536),
      (h = ne + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ne = h - _ * 65536),
      (h = ue + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ue = h - _ * 65536),
      (h = ge + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ge = h - _ * 65536),
      (h = ye + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ye = h - _ * 65536),
      (h = D + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (D = h - _ * 65536),
      (h = R + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (R = h - _ * 65536),
      (h = X + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (X = h - _ * 65536),
      (h = J + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (J = h - _ * 65536),
      (h = k + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (k = h - _ * 65536),
      (h = V + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (V = h - _ * 65536),
      (h = te + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (te = h - _ * 65536),
      (h = ie + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (ie = h - _ * 65536),
      (h = De + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (De = h - _ * 65536),
      (h = oe + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (oe = h - _ * 65536),
      (h = Se + _ + 65535),
      (_ = Math.floor(h / 65536)),
      (Se = h - _ * 65536),
      (ee += _ - 1 + 37 * (_ - 1)),
      (I[0] = ee),
      (I[1] = ne),
      (I[2] = ue),
      (I[3] = ge),
      (I[4] = ye),
      (I[5] = D),
      (I[6] = R),
      (I[7] = X),
      (I[8] = J),
      (I[9] = k),
      (I[10] = V),
      (I[11] = te),
      (I[12] = ie),
      (I[13] = De),
      (I[14] = oe),
      (I[15] = Se);
  }
  function P(I, A) {
    O(I, A, A);
  }
  function S(I, A) {
    const C = s();
    for (let h = 0; h < 16; h++) C[h] = A[h];
    for (let h = 253; h >= 0; h--) P(C, C), h !== 2 && h !== 4 && O(C, C, A);
    for (let h = 0; h < 16; h++) I[h] = C[h];
  }
  function K(I, A) {
    const C = new Uint8Array(32),
      h = new Float64Array(80),
      _ = s(),
      ee = s(),
      ne = s(),
      ue = s(),
      ge = s(),
      ye = s();
    for (let J = 0; J < 31; J++) C[J] = I[J];
    (C[31] = (I[31] & 127) | 64), (C[0] &= 248), g(h, A);
    for (let J = 0; J < 16; J++) ee[J] = h[J];
    _[0] = ue[0] = 1;
    for (let J = 254; J >= 0; --J) {
      const k = (C[J >>> 3] >>> (J & 7)) & 1;
      d(_, ee, k),
        d(ne, ue, k),
        v(ge, _, ne),
        b(_, _, ne),
        v(ne, ee, ue),
        b(ee, ee, ue),
        P(ue, ge),
        P(ye, _),
        O(_, ne, _),
        O(ne, ee, ge),
        v(ge, _, ne),
        b(_, _, ne),
        P(ee, _),
        b(ne, ue, ye),
        O(_, ne, c),
        v(_, _, ue),
        O(ne, ne, _),
        O(_, ue, ye),
        O(ue, ee, h),
        P(ee, ge),
        d(_, ee, k),
        d(ne, ue, k);
    }
    for (let J = 0; J < 16; J++)
      (h[J + 16] = _[J]),
        (h[J + 32] = ne[J]),
        (h[J + 48] = ee[J]),
        (h[J + 64] = ue[J]);
    const D = h.subarray(32),
      R = h.subarray(16);
    S(D, D), O(R, R, D);
    const X = new Uint8Array(32);
    return p(X, R), X;
  }
  i.scalarMult = K;
  function H(I) {
    return K(I, o);
  }
  i.scalarMultBase = H;
  function Z(I) {
    if (I.length !== i.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
    const A = new Uint8Array(I);
    return { publicKey: H(A), secretKey: A };
  }
  i.generateKeyPairFromSeed = Z;
  function F(I) {
    const A = (0, e.randomBytes)(32, I),
      C = Z(A);
    return (0, t.wipe)(A), C;
  }
  i.generateKeyPair = F;
  function U(I, A, C = !1) {
    if (I.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (A.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const h = K(I, A);
    if (C) {
      let _ = 0;
      for (let ee = 0; ee < h.length; ee++) _ |= h[ee];
      if (_ === 0) throw new Error("X25519: invalid shared key");
    }
    return h;
  }
  i.sharedKey = U;
})(ku);
function Vu(i) {
  return globalThis.Buffer != null
    ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
    : i;
}
function pp(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Vu(globalThis.Buffer.allocUnsafe(i))
    : new Uint8Array(i);
}
function Eu(i, e) {
  e || (e = i.reduce((o, c) => o + c.length, 0));
  const t = pp(e);
  let s = 0;
  for (const o of i) t.set(o, s), (s += o.length);
  return Vu(t);
}
function Kb(i, e) {
  if (i.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var c = i.charAt(o),
      f = c.charCodeAt(0);
    if (t[f] !== 255) throw new TypeError(c + " is ambiguous");
    t[f] = o;
  }
  var d = i.length,
    p = i.charAt(0),
    g = Math.log(d) / Math.log(256),
    v = Math.log(256) / Math.log(d);
  function b(S) {
    if (
      (S instanceof Uint8Array ||
        (ArrayBuffer.isView(S)
          ? (S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength))
          : Array.isArray(S) && (S = Uint8Array.from(S))),
      !(S instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0) return "";
    for (var K = 0, H = 0, Z = 0, F = S.length; Z !== F && S[Z] === 0; )
      Z++, K++;
    for (var U = ((F - Z) * v + 1) >>> 0, I = new Uint8Array(U); Z !== F; ) {
      for (
        var A = S[Z], C = 0, h = U - 1;
        (A !== 0 || C < H) && h !== -1;
        h--, C++
      )
        (A += (256 * I[h]) >>> 0), (I[h] = A % d >>> 0), (A = (A / d) >>> 0);
      if (A !== 0) throw new Error("Non-zero carry");
      (H = C), Z++;
    }
    for (var _ = U - H; _ !== U && I[_] === 0; ) _++;
    for (var ee = p.repeat(K); _ < U; ++_) ee += i.charAt(I[_]);
    return ee;
  }
  function O(S) {
    if (typeof S != "string") throw new TypeError("Expected String");
    if (S.length === 0) return new Uint8Array();
    var K = 0;
    if (S[K] !== " ") {
      for (var H = 0, Z = 0; S[K] === p; ) H++, K++;
      for (
        var F = ((S.length - K) * g + 1) >>> 0, U = new Uint8Array(F);
        S[K];

      ) {
        var I = t[S.charCodeAt(K)];
        if (I === 255) return;
        for (var A = 0, C = F - 1; (I !== 0 || A < Z) && C !== -1; C--, A++)
          (I += (d * U[C]) >>> 0),
            (U[C] = I % 256 >>> 0),
            (I = (I / 256) >>> 0);
        if (I !== 0) throw new Error("Non-zero carry");
        (Z = A), K++;
      }
      if (S[K] !== " ") {
        for (var h = F - Z; h !== F && U[h] === 0; ) h++;
        for (var _ = new Uint8Array(H + (F - h)), ee = H; h !== F; )
          _[ee++] = U[h++];
        return _;
      }
    }
  }
  function P(S) {
    var K = O(S);
    if (K) return K;
    throw new Error(`Non-${e} character`);
  }
  return { encode: b, decodeUnsafe: O, decode: P };
}
var kb = Kb,
  Vb = kb;
const Wb = (i) => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
      return i;
    if (i instanceof ArrayBuffer) return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
      return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  Gb = (i) => new TextEncoder().encode(i),
  Yb = (i) => new TextDecoder().decode(i);
class Jb {
  constructor(e, t, s) {
    (this.name = e), (this.prefix = t), (this.baseEncode = s);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Qb {
  constructor(e, t, s) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = s);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return gp(this, e);
  }
}
class Xb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return gp(this, e);
  }
  decode(e) {
    const t = e[0],
      s = this.decoders[t];
    if (s) return s.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const gp = (i, e) =>
  new Xb({
    ...(i.decoders || { [i.prefix]: i }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class Zb {
  constructor(e, t, s, o) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new Jb(e, t, s)),
      (this.decoder = new Qb(e, t, o));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ya = ({ name: i, prefix: e, encode: t, decode: s }) => new Zb(i, e, t, s),
  Fs = ({ prefix: i, name: e, alphabet: t }) => {
    const { encode: s, decode: o } = Vb(t, e);
    return ya({ prefix: i, name: e, encode: s, decode: (c) => Wb(o(c)) });
  },
  e_ = (i, e, t, s) => {
    const o = {};
    for (let v = 0; v < e.length; ++v) o[e[v]] = v;
    let c = i.length;
    for (; i[c - 1] === "="; ) --c;
    const f = new Uint8Array(((c * t) / 8) | 0);
    let d = 0,
      p = 0,
      g = 0;
    for (let v = 0; v < c; ++v) {
      const b = o[i[v]];
      if (b === void 0) throw new SyntaxError(`Non-${s} character`);
      (p = (p << t) | b),
        (d += t),
        d >= 8 && ((d -= 8), (f[g++] = 255 & (p >> d)));
    }
    if (d >= t || 255 & (p << (8 - d)))
      throw new SyntaxError("Unexpected end of data");
    return f;
  },
  t_ = (i, e, t) => {
    const s = e[e.length - 1] === "=",
      o = (1 << t) - 1;
    let c = "",
      f = 0,
      d = 0;
    for (let p = 0; p < i.length; ++p)
      for (d = (d << 8) | i[p], f += 8; f > t; )
        (f -= t), (c += e[o & (d >> f)]);
    if ((f && (c += e[o & (d << (t - f))]), s))
      for (; (c.length * t) & 7; ) c += "=";
    return c;
  },
  Yt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) =>
    ya({
      prefix: e,
      name: i,
      encode(o) {
        return t_(o, s, t);
      },
      decode(o) {
        return e_(o, s, t, i);
      },
    }),
  r_ = ya({
    prefix: "\0",
    name: "identity",
    encode: (i) => Yb(i),
    decode: (i) => Gb(i),
  }),
  i_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: r_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  n_ = Yt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  s_ = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: n_ }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  o_ = Yt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  a_ = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: o_ }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  c_ = Fs({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  u_ = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: c_ }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  h_ = Yt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  l_ = Yt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  f_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: h_, base16upper: l_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  d_ = Yt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  p_ = Yt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  g_ = Yt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  y_ = Yt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  v_ = Yt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  m_ = Yt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  w_ = Yt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  b_ = Yt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  __ = Yt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  E_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: d_,
        base32hex: v_,
        base32hexpad: w_,
        base32hexpadupper: b_,
        base32hexupper: m_,
        base32pad: g_,
        base32padupper: y_,
        base32upper: p_,
        base32z: __,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  D_ = Fs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  S_ = Fs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  I_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: D_, base36upper: S_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  x_ = Fs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  O_ = Fs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  P_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: x_, base58flickr: O_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  A_ = Yt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  C_ = Yt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  T_ = Yt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  R_ = Yt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  N_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: A_,
        base64pad: C_,
        base64url: T_,
        base64urlpad: R_,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yp = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  F_ = yp.reduce((i, e, t) => ((i[t] = e), i), []),
  $_ = yp.reduce((i, e, t) => ((i[e.codePointAt(0)] = t), i), []);
function L_(i) {
  return i.reduce((e, t) => ((e += F_[t]), e), "");
}
function U_(i) {
  const e = [];
  for (const t of i) {
    const s = $_[t.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const M_ = ya({ prefix: "🚀", name: "base256emoji", encode: L_, decode: U_ }),
  j_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: M_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
const gf = {
  ...i_,
  ...s_,
  ...a_,
  ...u_,
  ...f_,
  ...E_,
  ...I_,
  ...P_,
  ...N_,
  ...j_,
};
function vp(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: { name: i, prefix: e, encode: t },
    decoder: { decode: s },
  };
}
const yf = vp(
    "utf8",
    "u",
    (i) => "u" + new TextDecoder("utf8").decode(i),
    (i) => new TextEncoder().encode(i.substring(1))
  ),
  Yc = vp(
    "ascii",
    "a",
    (i) => {
      let e = "a";
      for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
      return e;
    },
    (i) => {
      i = i.substring(1);
      const e = pp(i.length);
      for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
      return e;
    }
  ),
  mp = {
    utf8: yf,
    "utf-8": yf,
    hex: gf.base16,
    latin1: Yc,
    ascii: Yc,
    binary: Yc,
    ...gf,
  };
function wr(i, e = "utf8") {
  const t = mp[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Vu(globalThis.Buffer.from(i, "utf-8"))
    : t.decoder.decode(`${t.prefix}${i}`);
}
function hr(i, e = "utf8") {
  const t = mp[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(i).substring(1);
}
var vf =
    (globalThis && globalThis.__spreadArray) ||
    function (i, e, t) {
      if (t || arguments.length === 2)
        for (var s = 0, o = e.length, c; s < o; s++)
          (c || !(s in e)) &&
            (c || (c = Array.prototype.slice.call(e, 0, s)), (c[s] = e[s]));
      return i.concat(c || Array.prototype.slice.call(e));
    },
  q_ = (function () {
    function i(e, t, s) {
      (this.name = e),
        (this.version = t),
        (this.os = s),
        (this.type = "browser");
    }
    return i;
  })(),
  B_ = (function () {
    function i(e) {
      (this.version = e),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return i;
  })(),
  z_ = (function () {
    function i(e, t, s, o) {
      (this.name = e),
        (this.version = t),
        (this.os = s),
        (this.bot = o),
        (this.type = "bot-device");
    }
    return i;
  })(),
  H_ = (function () {
    function i() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return i;
  })(),
  K_ = (function () {
    function i() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return i;
  })(),
  k_ =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  V_ =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  mf = 3,
  W_ = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", k_],
  ],
  wf = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function G_(i) {
  return i
    ? bf(i)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new K_()
    : typeof navigator < "u"
    ? bf(navigator.userAgent)
    : Q_();
}
function Y_(i) {
  return (
    i !== "" &&
    W_.reduce(function (e, t) {
      var s = t[0],
        o = t[1];
      if (e) return e;
      var c = o.exec(i);
      return !!c && [s, c];
    }, !1)
  );
}
function bf(i) {
  var e = Y_(i);
  if (!e) return null;
  var t = e[0],
    s = e[1];
  if (t === "searchbot") return new H_();
  var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  o
    ? o.length < mf && (o = vf(vf([], o, !0), X_(mf - o.length), !0))
    : (o = []);
  var c = o.join("."),
    f = J_(i),
    d = V_.exec(i);
  return d && d[1] ? new z_(t, c, f, d[1]) : new q_(t, c, f);
}
function J_(i) {
  for (var e = 0, t = wf.length; e < t; e++) {
    var s = wf[e],
      o = s[0],
      c = s[1],
      f = c.exec(i);
    if (f) return o;
  }
  return null;
}
function Q_() {
  var i = typeof process < "u" && process.version;
  return i ? new B_(process.version.slice(1)) : null;
}
function X_(i) {
  for (var e = [], t = 0; t < i; t++) e.push("0");
  return e;
}
var ve = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Du =
  function (i, e) {
    return (
      (Du =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, s) {
            t.__proto__ = s;
          }) ||
        function (t, s) {
          for (var o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
        }),
      Du(i, e)
    );
  };
function Z_(i, e) {
  Du(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Su = function () {
  return (
    (Su =
      Object.assign ||
      function (e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
          t = arguments[s];
          for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
        }
        return e;
      }),
    Su.apply(this, arguments)
  );
};
function eE(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) &&
      e.indexOf(s) < 0 &&
      (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      e.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, s[o]) &&
        (t[s[o]] = i[s[o]]);
  return t;
}
function tE(i, e, t, s) {
  var o = arguments.length,
    c =
      o < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
    f;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(i, e, t, s);
  else
    for (var d = i.length - 1; d >= 0; d--)
      (f = i[d]) && (c = (o < 3 ? f(c) : o > 3 ? f(e, t, c) : f(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function rE(i, e) {
  return function (t, s) {
    e(t, s, i);
  };
}
function iE(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, e);
}
function nE(i, e, t, s) {
  function o(c) {
    return c instanceof t
      ? c
      : new t(function (f) {
          f(c);
        });
  }
  return new (t || (t = Promise))(function (c, f) {
    function d(v) {
      try {
        g(s.next(v));
      } catch (b) {
        f(b);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (b) {
        f(b);
      }
    }
    function g(v) {
      v.done ? c(v.value) : o(v.value).then(d, p);
    }
    g((s = s.apply(i, e || [])).next());
  });
}
function sE(i, e) {
  var t = {
      label: 0,
      sent: function () {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: [],
    },
    s,
    o,
    c,
    f;
  return (
    (f = { next: d(0), throw: d(1), return: d(2) }),
    typeof Symbol == "function" &&
      (f[Symbol.iterator] = function () {
        return this;
      }),
    f
  );
  function d(g) {
    return function (v) {
      return p([g, v]);
    };
  }
  function p(g) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((s = 1),
          o &&
            (c =
              g[0] & 2
                ? o.return
                : g[0]
                ? o.throw || ((c = o.return) && c.call(o), 0)
                : o.next) &&
            !(c = c.call(o, g[1])).done)
        )
          return c;
        switch (((o = 0), c && (g = [g[0] & 2, c.value]), g[0])) {
          case 0:
          case 1:
            c = g;
            break;
          case 4:
            return t.label++, { value: g[1], done: !1 };
          case 5:
            t.label++, (o = g[1]), (g = [0]);
            continue;
          case 7:
            (g = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((c = t.trys),
              !(c = c.length > 0 && c[c.length - 1]) &&
                (g[0] === 6 || g[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (g[0] === 3 && (!c || (g[1] > c[0] && g[1] < c[3]))) {
              t.label = g[1];
              break;
            }
            if (g[0] === 6 && t.label < c[1]) {
              (t.label = c[1]), (c = g);
              break;
            }
            if (c && t.label < c[2]) {
              (t.label = c[2]), t.ops.push(g);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        g = e.call(i, t);
      } catch (v) {
        (g = [6, v]), (o = 0);
      } finally {
        s = c = 0;
      }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
function oE(i, e, t, s) {
  s === void 0 && (s = t), (i[s] = e[t]);
}
function aE(i, e) {
  for (var t in i) t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t]);
}
function Iu(i) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && i[e],
    s = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function () {
        return (
          i && s >= i.length && (i = void 0), { value: i && i[s++], done: !i }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function wp(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t) return i;
  var s = t.call(i),
    o,
    c = [],
    f;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; ) c.push(o.value);
  } catch (d) {
    f = { error: d };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (f) throw f.error;
    }
  }
  return c;
}
function cE() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i = i.concat(wp(arguments[e]));
  return i;
}
function uE() {
  for (var i = 0, e = 0, t = arguments.length; e < t; e++)
    i += arguments[e].length;
  for (var s = Array(i), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], f = 0, d = c.length; f < d; f++, o++)
      s[o] = c[f];
  return s;
}
function xs(i) {
  return this instanceof xs ? ((this.v = i), this) : new xs(i);
}
function hE(i, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = t.apply(i, e || []),
    o,
    c = [];
  return (
    (o = {}),
    f("next"),
    f("throw"),
    f("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function f(O) {
    s[O] &&
      (o[O] = function (P) {
        return new Promise(function (S, K) {
          c.push([O, P, S, K]) > 1 || d(O, P);
        });
      });
  }
  function d(O, P) {
    try {
      p(s[O](P));
    } catch (S) {
      b(c[0][3], S);
    }
  }
  function p(O) {
    O.value instanceof xs
      ? Promise.resolve(O.value.v).then(g, v)
      : b(c[0][2], O);
  }
  function g(O) {
    d("next", O);
  }
  function v(O) {
    d("throw", O);
  }
  function b(O, P) {
    O(P), c.shift(), c.length && d(c[0][0], c[0][1]);
  }
}
function lE(i) {
  var e, t;
  return (
    (e = {}),
    s("next"),
    s("throw", function (o) {
      throw o;
    }),
    s("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function s(o, c) {
    e[o] = i[o]
      ? function (f) {
          return (t = !t)
            ? { value: xs(i[o](f)), done: o === "return" }
            : c
            ? c(f)
            : f;
        }
      : c;
  }
}
function fE(i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = i[Symbol.asyncIterator],
    t;
  return e
    ? e.call(i)
    : ((i = typeof Iu == "function" ? Iu(i) : i[Symbol.iterator]()),
      (t = {}),
      s("next"),
      s("throw"),
      s("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function s(c) {
    t[c] =
      i[c] &&
      function (f) {
        return new Promise(function (d, p) {
          (f = i[c](f)), o(d, p, f.done, f.value);
        });
      };
  }
  function o(c, f, d, p) {
    Promise.resolve(p).then(function (g) {
      c({ value: g, done: d });
    }, f);
  }
}
function dE(i, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(i, "raw", { value: e })
      : (i.raw = e),
    i
  );
}
function pE(i) {
  if (i && i.__esModule) return i;
  var e = {};
  if (i != null)
    for (var t in i) Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
  return (e.default = i), e;
}
function gE(i) {
  return i && i.__esModule ? i : { default: i };
}
function yE(i, e) {
  if (!e.has(i))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(i);
}
function vE(i, e, t) {
  if (!e.has(i))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(i, t), t;
}
const mE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Su;
        },
        __asyncDelegator: lE,
        __asyncGenerator: hE,
        __asyncValues: fE,
        __await: xs,
        __awaiter: nE,
        __classPrivateFieldGet: yE,
        __classPrivateFieldSet: vE,
        __createBinding: oE,
        __decorate: tE,
        __exportStar: aE,
        __extends: Z_,
        __generator: sE,
        __importDefault: gE,
        __importStar: pE,
        __makeTemplateObject: dE,
        __metadata: iE,
        __param: rE,
        __read: wp,
        __rest: eE,
        __spread: cE,
        __spreadArrays: uE,
        __values: Iu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ii = qu(mE);
var Jc = {},
  gs = {},
  _f;
function wE() {
  if (_f) return gs;
  (_f = 1),
    Object.defineProperty(gs, "__esModule", { value: !0 }),
    (gs.delay = void 0);
  function i(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return (gs.delay = i), gs;
}
var sn = {},
  Qc = {},
  on = {},
  Ef;
function bE() {
  return (
    Ef ||
      ((Ef = 1),
      Object.defineProperty(on, "__esModule", { value: !0 }),
      (on.ONE_THOUSAND = on.ONE_HUNDRED = void 0),
      (on.ONE_HUNDRED = 100),
      (on.ONE_THOUSAND = 1e3)),
    on
  );
}
var Xc = {},
  Df;
function _E() {
  return (
    Df ||
      ((Df = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.ONE_YEAR =
            i.FOUR_WEEKS =
            i.THREE_WEEKS =
            i.TWO_WEEKS =
            i.ONE_WEEK =
            i.THIRTY_DAYS =
            i.SEVEN_DAYS =
            i.FIVE_DAYS =
            i.THREE_DAYS =
            i.ONE_DAY =
            i.TWENTY_FOUR_HOURS =
            i.TWELVE_HOURS =
            i.SIX_HOURS =
            i.THREE_HOURS =
            i.ONE_HOUR =
            i.SIXTY_MINUTES =
            i.THIRTY_MINUTES =
            i.TEN_MINUTES =
            i.FIVE_MINUTES =
            i.ONE_MINUTE =
            i.SIXTY_SECONDS =
            i.THIRTY_SECONDS =
            i.TEN_SECONDS =
            i.FIVE_SECONDS =
            i.ONE_SECOND =
              void 0),
          (i.ONE_SECOND = 1),
          (i.FIVE_SECONDS = 5),
          (i.TEN_SECONDS = 10),
          (i.THIRTY_SECONDS = 30),
          (i.SIXTY_SECONDS = 60),
          (i.ONE_MINUTE = i.SIXTY_SECONDS),
          (i.FIVE_MINUTES = i.ONE_MINUTE * 5),
          (i.TEN_MINUTES = i.ONE_MINUTE * 10),
          (i.THIRTY_MINUTES = i.ONE_MINUTE * 30),
          (i.SIXTY_MINUTES = i.ONE_MINUTE * 60),
          (i.ONE_HOUR = i.SIXTY_MINUTES),
          (i.THREE_HOURS = i.ONE_HOUR * 3),
          (i.SIX_HOURS = i.ONE_HOUR * 6),
          (i.TWELVE_HOURS = i.ONE_HOUR * 12),
          (i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24),
          (i.ONE_DAY = i.TWENTY_FOUR_HOURS),
          (i.THREE_DAYS = i.ONE_DAY * 3),
          (i.FIVE_DAYS = i.ONE_DAY * 5),
          (i.SEVEN_DAYS = i.ONE_DAY * 7),
          (i.THIRTY_DAYS = i.ONE_DAY * 30),
          (i.ONE_WEEK = i.SEVEN_DAYS),
          (i.TWO_WEEKS = i.ONE_WEEK * 2),
          (i.THREE_WEEKS = i.ONE_WEEK * 3),
          (i.FOUR_WEEKS = i.ONE_WEEK * 4),
          (i.ONE_YEAR = i.ONE_DAY * 365);
      })(Xc)),
    Xc
  );
}
var Sf;
function bp() {
  return (
    Sf ||
      ((Sf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        const e = Ii;
        e.__exportStar(bE(), i), e.__exportStar(_E(), i);
      })(Qc)),
    Qc
  );
}
var If;
function EE() {
  if (If) return sn;
  (If = 1),
    Object.defineProperty(sn, "__esModule", { value: !0 }),
    (sn.fromMiliseconds = sn.toMiliseconds = void 0);
  const i = bp();
  function e(s) {
    return s * i.ONE_THOUSAND;
  }
  sn.toMiliseconds = e;
  function t(s) {
    return Math.floor(s / i.ONE_THOUSAND);
  }
  return (sn.fromMiliseconds = t), sn;
}
var xf;
function DE() {
  return (
    xf ||
      ((xf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        const e = Ii;
        e.__exportStar(wE(), i), e.__exportStar(EE(), i);
      })(Jc)),
    Jc
  );
}
var $n = {},
  Of;
function SE() {
  if (Of) return $n;
  (Of = 1),
    Object.defineProperty($n, "__esModule", { value: !0 }),
    ($n.Watch = void 0);
  class i {
    constructor() {
      this.timestamps = new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const s = this.get(t);
      if (typeof s.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const o = Date.now() - s.started;
      this.timestamps.set(t, { started: s.started, elapsed: o });
    }
    get(t) {
      const s = this.timestamps.get(t);
      if (typeof s > "u") throw new Error(`No timestamp found for label: ${t}`);
      return s;
    }
    elapsed(t) {
      const s = this.get(t);
      return s.elapsed || Date.now() - s.started;
    }
  }
  return ($n.Watch = i), ($n.default = i), $n;
}
var Zc = {},
  ys = {},
  Pf;
function IE() {
  if (Pf) return ys;
  (Pf = 1),
    Object.defineProperty(ys, "__esModule", { value: !0 }),
    (ys.IWatch = void 0);
  class i {}
  return (ys.IWatch = i), ys;
}
var Af;
function xE() {
  return (
    Af ||
      ((Af = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          Ii.__exportStar(IE(), i);
      })(Zc)),
    Zc
  );
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = Ii;
  e.__exportStar(DE(), i),
    e.__exportStar(SE(), i),
    e.__exportStar(xE(), i),
    e.__exportStar(bp(), i);
})(ve);
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.getLocalStorage =
  lt.getLocalStorageOrThrow =
  lt.getCrypto =
  lt.getCryptoOrThrow =
  _p =
  lt.getLocation =
  lt.getLocationOrThrow =
  Gu =
  lt.getNavigator =
  lt.getNavigatorOrThrow =
  Wu =
  lt.getDocument =
  lt.getDocumentOrThrow =
  lt.getFromWindowOrThrow =
  lt.getFromWindow =
    void 0;
function hn(i) {
  let e;
  return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e;
}
lt.getFromWindow = hn;
function kn(i) {
  const e = hn(i);
  if (!e) throw new Error(`${i} is not defined in Window`);
  return e;
}
lt.getFromWindowOrThrow = kn;
function OE() {
  return kn("document");
}
lt.getDocumentOrThrow = OE;
function PE() {
  return hn("document");
}
var Wu = (lt.getDocument = PE);
function AE() {
  return kn("navigator");
}
lt.getNavigatorOrThrow = AE;
function CE() {
  return hn("navigator");
}
var Gu = (lt.getNavigator = CE);
function TE() {
  return kn("location");
}
lt.getLocationOrThrow = TE;
function RE() {
  return hn("location");
}
var _p = (lt.getLocation = RE);
function NE() {
  return kn("crypto");
}
lt.getCryptoOrThrow = NE;
function FE() {
  return hn("crypto");
}
lt.getCrypto = FE;
function $E() {
  return kn("localStorage");
}
lt.getLocalStorageOrThrow = $E;
function LE() {
  return hn("localStorage");
}
lt.getLocalStorage = LE;
var Yu = {};
Object.defineProperty(Yu, "__esModule", { value: !0 });
var Ep = (Yu.getWindowMetadata = void 0);
const Cf = lt;
function UE() {
  let i, e;
  try {
    (i = Cf.getDocumentOrThrow()), (e = Cf.getLocationOrThrow());
  } catch {
    return null;
  }
  function t() {
    const b = i.getElementsByTagName("link"),
      O = [];
    for (let P = 0; P < b.length; P++) {
      const S = b[P],
        K = S.getAttribute("rel");
      if (K && K.toLowerCase().indexOf("icon") > -1) {
        const H = S.getAttribute("href");
        if (H)
          if (
            H.toLowerCase().indexOf("https:") === -1 &&
            H.toLowerCase().indexOf("http:") === -1 &&
            H.indexOf("//") !== 0
          ) {
            let Z = e.protocol + "//" + e.host;
            if (H.indexOf("/") === 0) Z += H;
            else {
              const F = e.pathname.split("/");
              F.pop();
              const U = F.join("/");
              Z += U + "/" + H;
            }
            O.push(Z);
          } else if (H.indexOf("//") === 0) {
            const Z = e.protocol + H;
            O.push(Z);
          } else O.push(H);
      }
    }
    return O;
  }
  function s(...b) {
    const O = i.getElementsByTagName("meta");
    for (let P = 0; P < O.length; P++) {
      const S = O[P],
        K = ["itemprop", "property", "name"]
          .map((H) => S.getAttribute(H))
          .filter((H) => (H ? b.includes(H) : !1));
      if (K.length && K) {
        const H = S.getAttribute("content");
        if (H) return H;
      }
    }
    return "";
  }
  function o() {
    let b = s("name", "og:site_name", "og:title", "twitter:title");
    return b || (b = i.title), b;
  }
  function c() {
    return s(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const f = o(),
    d = c(),
    p = e.origin,
    g = t();
  return { description: d, url: p, icons: g, name: f };
}
Ep = Yu.getWindowMetadata = UE;
var Os = {},
  ME = (i) =>
    encodeURIComponent(i).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  Dp = "%[a-f0-9]{2}",
  Tf = new RegExp("(" + Dp + ")|([^%]+?)", "gi"),
  Rf = new RegExp("(" + Dp + ")+", "gi");
function xu(i, e) {
  try {
    return [decodeURIComponent(i.join(""))];
  } catch {}
  if (i.length === 1) return i;
  e = e || 1;
  var t = i.slice(0, e),
    s = i.slice(e);
  return Array.prototype.concat.call([], xu(t), xu(s));
}
function jE(i) {
  try {
    return decodeURIComponent(i);
  } catch {
    for (var e = i.match(Tf) || [], t = 1; t < e.length; t++)
      (i = xu(e, t).join("")), (e = i.match(Tf) || []);
    return i;
  }
}
function qE(i) {
  for (var e = { "%FE%FF": "��", "%FF%FE": "��" }, t = Rf.exec(i); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var s = jE(t[0]);
      s !== t[0] && (e[t[0]] = s);
    }
    t = Rf.exec(i);
  }
  e["%C2"] = "�";
  for (var o = Object.keys(e), c = 0; c < o.length; c++) {
    var f = o[c];
    i = i.replace(new RegExp(f, "g"), e[f]);
  }
  return i;
}
var BE = function (i) {
    if (typeof i != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof i + "`"
      );
    try {
      return (i = i.replace(/\+/g, " ")), decodeURIComponent(i);
    } catch {
      return qE(i);
    }
  },
  zE = (i, e) => {
    if (!(typeof i == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "") return [i];
    const t = i.indexOf(e);
    return t === -1 ? [i] : [i.slice(0, t), i.slice(t + e.length)];
  },
  HE = function (i, e) {
    for (
      var t = {}, s = Object.keys(i), o = Array.isArray(e), c = 0;
      c < s.length;
      c++
    ) {
      var f = s[c],
        d = i[f];
      (o ? e.indexOf(f) !== -1 : e(f, d, i)) && (t[f] = d);
    }
    return t;
  };
(function (i) {
  const e = ME,
    t = BE,
    s = zE,
    o = HE,
    c = (F) => F == null,
    f = Symbol("encodeFragmentIdentifier");
  function d(F) {
    switch (F.arrayFormat) {
      case "index":
        return (U) => (I, A) => {
          const C = I.length;
          return A === void 0 ||
            (F.skipNull && A === null) ||
            (F.skipEmptyString && A === "")
            ? I
            : A === null
            ? [...I, [v(U, F), "[", C, "]"].join("")]
            : [...I, [v(U, F), "[", v(C, F), "]=", v(A, F)].join("")];
        };
      case "bracket":
        return (U) => (I, A) =>
          A === void 0 ||
          (F.skipNull && A === null) ||
          (F.skipEmptyString && A === "")
            ? I
            : A === null
            ? [...I, [v(U, F), "[]"].join("")]
            : [...I, [v(U, F), "[]=", v(A, F)].join("")];
      case "colon-list-separator":
        return (U) => (I, A) =>
          A === void 0 ||
          (F.skipNull && A === null) ||
          (F.skipEmptyString && A === "")
            ? I
            : A === null
            ? [...I, [v(U, F), ":list="].join("")]
            : [...I, [v(U, F), ":list=", v(A, F)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const U = F.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (I) => (A, C) =>
          C === void 0 ||
          (F.skipNull && C === null) ||
          (F.skipEmptyString && C === "")
            ? A
            : ((C = C === null ? "" : C),
              A.length === 0
                ? [[v(I, F), U, v(C, F)].join("")]
                : [[A, v(C, F)].join(F.arrayFormatSeparator)]);
      }
      default:
        return (U) => (I, A) =>
          A === void 0 ||
          (F.skipNull && A === null) ||
          (F.skipEmptyString && A === "")
            ? I
            : A === null
            ? [...I, v(U, F)]
            : [...I, [v(U, F), "=", v(A, F)].join("")];
    }
  }
  function p(F) {
    let U;
    switch (F.arrayFormat) {
      case "index":
        return (I, A, C) => {
          if (
            ((U = /\[(\d*)\]$/.exec(I)), (I = I.replace(/\[\d*\]$/, "")), !U)
          ) {
            C[I] = A;
            return;
          }
          C[I] === void 0 && (C[I] = {}), (C[I][U[1]] = A);
        };
      case "bracket":
        return (I, A, C) => {
          if (((U = /(\[\])$/.exec(I)), (I = I.replace(/\[\]$/, "")), !U)) {
            C[I] = A;
            return;
          }
          if (C[I] === void 0) {
            C[I] = [A];
            return;
          }
          C[I] = [].concat(C[I], A);
        };
      case "colon-list-separator":
        return (I, A, C) => {
          if (((U = /(:list)$/.exec(I)), (I = I.replace(/:list$/, "")), !U)) {
            C[I] = A;
            return;
          }
          if (C[I] === void 0) {
            C[I] = [A];
            return;
          }
          C[I] = [].concat(C[I], A);
        };
      case "comma":
      case "separator":
        return (I, A, C) => {
          const h = typeof A == "string" && A.includes(F.arrayFormatSeparator),
            _ =
              typeof A == "string" &&
              !h &&
              b(A, F).includes(F.arrayFormatSeparator);
          A = _ ? b(A, F) : A;
          const ee =
            h || _
              ? A.split(F.arrayFormatSeparator).map((ne) => b(ne, F))
              : A === null
              ? A
              : b(A, F);
          C[I] = ee;
        };
      case "bracket-separator":
        return (I, A, C) => {
          const h = /(\[\])$/.test(I);
          if (((I = I.replace(/\[\]$/, "")), !h)) {
            C[I] = A && b(A, F);
            return;
          }
          const _ =
            A === null
              ? []
              : A.split(F.arrayFormatSeparator).map((ee) => b(ee, F));
          if (C[I] === void 0) {
            C[I] = _;
            return;
          }
          C[I] = [].concat(C[I], _);
        };
      default:
        return (I, A, C) => {
          if (C[I] === void 0) {
            C[I] = A;
            return;
          }
          C[I] = [].concat(C[I], A);
        };
    }
  }
  function g(F) {
    if (typeof F != "string" || F.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function v(F, U) {
    return U.encode ? (U.strict ? e(F) : encodeURIComponent(F)) : F;
  }
  function b(F, U) {
    return U.decode ? t(F) : F;
  }
  function O(F) {
    return Array.isArray(F)
      ? F.sort()
      : typeof F == "object"
      ? O(Object.keys(F))
          .sort((U, I) => Number(U) - Number(I))
          .map((U) => F[U])
      : F;
  }
  function P(F) {
    const U = F.indexOf("#");
    return U !== -1 && (F = F.slice(0, U)), F;
  }
  function S(F) {
    let U = "";
    const I = F.indexOf("#");
    return I !== -1 && (U = F.slice(I)), U;
  }
  function K(F) {
    F = P(F);
    const U = F.indexOf("?");
    return U === -1 ? "" : F.slice(U + 1);
  }
  function H(F, U) {
    return (
      U.parseNumbers &&
      !Number.isNaN(Number(F)) &&
      typeof F == "string" &&
      F.trim() !== ""
        ? (F = Number(F))
        : U.parseBooleans &&
          F !== null &&
          (F.toLowerCase() === "true" || F.toLowerCase() === "false") &&
          (F = F.toLowerCase() === "true"),
      F
    );
  }
  function Z(F, U) {
    (U = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      U
    )),
      g(U.arrayFormatSeparator);
    const I = p(U),
      A = Object.create(null);
    if (typeof F != "string" || ((F = F.trim().replace(/^[?#&]/, "")), !F))
      return A;
    for (const C of F.split("&")) {
      if (C === "") continue;
      let [h, _] = s(U.decode ? C.replace(/\+/g, " ") : C, "=");
      (_ =
        _ === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(U.arrayFormat)
          ? _
          : b(_, U)),
        I(b(h, U), _, A);
    }
    for (const C of Object.keys(A)) {
      const h = A[C];
      if (typeof h == "object" && h !== null)
        for (const _ of Object.keys(h)) h[_] = H(h[_], U);
      else A[C] = H(h, U);
    }
    return U.sort === !1
      ? A
      : (U.sort === !0
          ? Object.keys(A).sort()
          : Object.keys(A).sort(U.sort)
        ).reduce((C, h) => {
          const _ = A[h];
          return (
            _ && typeof _ == "object" && !Array.isArray(_)
              ? (C[h] = O(_))
              : (C[h] = _),
            C
          );
        }, Object.create(null));
  }
  (i.extract = K),
    (i.parse = Z),
    (i.stringify = (F, U) => {
      if (!F) return "";
      (U = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        U
      )),
        g(U.arrayFormatSeparator);
      const I = (_) =>
          (U.skipNull && c(F[_])) || (U.skipEmptyString && F[_] === ""),
        A = d(U),
        C = {};
      for (const _ of Object.keys(F)) I(_) || (C[_] = F[_]);
      const h = Object.keys(C);
      return (
        U.sort !== !1 && h.sort(U.sort),
        h
          .map((_) => {
            const ee = F[_];
            return ee === void 0
              ? ""
              : ee === null
              ? v(_, U)
              : Array.isArray(ee)
              ? ee.length === 0 && U.arrayFormat === "bracket-separator"
                ? v(_, U) + "[]"
                : ee.reduce(A(_), []).join("&")
              : v(_, U) + "=" + v(ee, U);
          })
          .filter((_) => _.length > 0)
          .join("&")
      );
    }),
    (i.parseUrl = (F, U) => {
      U = Object.assign({ decode: !0 }, U);
      const [I, A] = s(F, "#");
      return Object.assign(
        { url: I.split("?")[0] || "", query: Z(K(F), U) },
        U && U.parseFragmentIdentifier && A
          ? { fragmentIdentifier: b(A, U) }
          : {}
      );
    }),
    (i.stringifyUrl = (F, U) => {
      U = Object.assign({ encode: !0, strict: !0, [f]: !0 }, U);
      const I = P(F.url).split("?")[0] || "",
        A = i.extract(F.url),
        C = i.parse(A, { sort: !1 }),
        h = Object.assign(C, F.query);
      let _ = i.stringify(h, U);
      _ && (_ = `?${_}`);
      let ee = S(F.url);
      return (
        F.fragmentIdentifier &&
          (ee = `#${U[f] ? v(F.fragmentIdentifier, U) : F.fragmentIdentifier}`),
        `${I}${_}${ee}`
      );
    }),
    (i.pick = (F, U, I) => {
      I = Object.assign({ parseFragmentIdentifier: !0, [f]: !1 }, I);
      const { url: A, query: C, fragmentIdentifier: h } = i.parseUrl(F, I);
      return i.stringifyUrl(
        { url: A, query: o(C, U), fragmentIdentifier: h },
        I
      );
    }),
    (i.exclude = (F, U, I) => {
      const A = Array.isArray(U) ? (C) => !U.includes(C) : (C, h) => !U(C, h);
      return i.pick(F, A, I);
    });
})(Os);
const KE = {
    waku: {
      publish: "waku_publish",
      batchPublish: "waku_batchPublish",
      subscribe: "waku_subscribe",
      batchSubscribe: "waku_batchSubscribe",
      subscription: "waku_subscription",
      unsubscribe: "waku_unsubscribe",
      batchUnsubscribe: "waku_batchUnsubscribe",
      batchFetchMessages: "waku_batchFetchMessages",
    },
    irn: {
      publish: "irn_publish",
      batchPublish: "irn_batchPublish",
      subscribe: "irn_subscribe",
      batchSubscribe: "irn_batchSubscribe",
      subscription: "irn_subscription",
      unsubscribe: "irn_unsubscribe",
      batchUnsubscribe: "irn_batchUnsubscribe",
      batchFetchMessages: "irn_batchFetchMessages",
    },
    iridium: {
      publish: "iridium_publish",
      batchPublish: "iridium_batchPublish",
      subscribe: "iridium_subscribe",
      batchSubscribe: "iridium_batchSubscribe",
      subscription: "iridium_subscription",
      unsubscribe: "iridium_unsubscribe",
      batchUnsubscribe: "iridium_batchUnsubscribe",
      batchFetchMessages: "iridium_batchFetchMessages",
    },
  },
  kE = ":";
function VE(i) {
  const [e, t] = i.split(kE);
  return { namespace: e, reference: t };
}
function WE(i, e = []) {
  const t = [];
  return (
    Object.keys(i).forEach((s) => {
      if (e.length && !e.includes(s)) return;
      const o = i[s];
      t.push(...o.accounts);
    }),
    t
  );
}
function Sp(i, e) {
  return i.includes(":") ? [i] : e.chains || [];
}
const Ip = "base10",
  ur = "base16",
  Ou = "base64pad",
  Ju = "utf8",
  xp = 0,
  ln = 1,
  GE = 0,
  Nf = 1,
  Pu = 12,
  Qu = 32;
function YE() {
  const i = ku.generateKeyPair();
  return { privateKey: hr(i.secretKey, ur), publicKey: hr(i.publicKey, ur) };
}
function Au() {
  const i = Kn.randomBytes(Qu);
  return hr(i, ur);
}
function JE(i, e) {
  const t = ku.sharedKey(wr(i, ur), wr(e, ur), !0),
    s = new Ub(ga.SHA256, t).expand(Qu);
  return hr(s, ur);
}
function QE(i) {
  const e = ga.hash(wr(i, ur));
  return hr(e, ur);
}
function zn(i) {
  const e = ga.hash(wr(i, Ju));
  return hr(e, ur);
}
function XE(i) {
  return wr(`${i}`, Ip);
}
function $s(i) {
  return Number(hr(i, Ip));
}
function ZE(i) {
  const e = XE(typeof i.type < "u" ? i.type : xp);
  if ($s(e) === ln && typeof i.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof i.senderPublicKey < "u" ? wr(i.senderPublicKey, ur) : void 0,
    s = typeof i.iv < "u" ? wr(i.iv, ur) : Kn.randomBytes(Pu),
    o = new Hu.ChaCha20Poly1305(wr(i.symKey, ur)).seal(s, wr(i.message, Ju));
  return t3({ type: e, sealed: o, iv: s, senderPublicKey: t });
}
function e3(i) {
  const e = new Hu.ChaCha20Poly1305(wr(i.symKey, ur)),
    { sealed: t, iv: s } = sa(i.encoded),
    o = e.open(s, t);
  if (o === null) throw new Error("Failed to decrypt");
  return hr(o, Ju);
}
function t3(i) {
  if ($s(i.type) === ln) {
    if (typeof i.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return hr(Eu([i.type, i.senderPublicKey, i.iv, i.sealed]), Ou);
  }
  return hr(Eu([i.type, i.iv, i.sealed]), Ou);
}
function sa(i) {
  const e = wr(i, Ou),
    t = e.slice(GE, Nf),
    s = Nf;
  if ($s(t) === ln) {
    const d = s + Qu,
      p = d + Pu,
      g = e.slice(s, d),
      v = e.slice(d, p),
      b = e.slice(p);
    return { type: t, sealed: b, iv: v, senderPublicKey: g };
  }
  const o = s + Pu,
    c = e.slice(s, o),
    f = e.slice(o);
  return { type: t, sealed: f, iv: c };
}
function r3(i, e) {
  const t = sa(i);
  return Op({
    type: $s(t.type),
    senderPublicKey:
      typeof t.senderPublicKey < "u" ? hr(t.senderPublicKey, ur) : void 0,
    receiverPublicKey: e == null ? void 0 : e.receiverPublicKey,
  });
}
function Op(i) {
  const e = (i == null ? void 0 : i.type) || xp;
  if (e === ln) {
    if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: i == null ? void 0 : i.senderPublicKey,
    receiverPublicKey: i == null ? void 0 : i.receiverPublicKey,
  };
}
function Ff(i) {
  return (
    i.type === ln &&
    typeof i.senderPublicKey == "string" &&
    typeof i.receiverPublicKey == "string"
  );
}
var i3 = Object.defineProperty,
  $f = Object.getOwnPropertySymbols,
  n3 = Object.prototype.hasOwnProperty,
  s3 = Object.prototype.propertyIsEnumerable,
  Lf = (i, e, t) =>
    e in i
      ? i3(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Uf = (i, e) => {
    for (var t in e || (e = {})) n3.call(e, t) && Lf(i, t, e[t]);
    if ($f) for (var t of $f(e)) s3.call(e, t) && Lf(i, t, e[t]);
    return i;
  };
const o3 = "ReactNative",
  Ar = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  a3 = "js";
function Xu() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Vn() {
  return !Wu() && !!Gu() && navigator.product === o3;
}
function Wn() {
  return !Xu() && !!Gu() && !!Wu();
}
function Ls() {
  return Vn()
    ? Ar.reactNative
    : Xu()
    ? Ar.node
    : Wn()
    ? Ar.browser
    : Ar.unknown;
}
function c3() {
  var i;
  try {
    return Vn() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (i = global.Application) == null
        ? void 0
        : i.applicationId
      : void 0;
  } catch {
    return;
  }
}
function u3(i, e) {
  let t = Os.parse(i);
  return (t = Uf(Uf({}, t), e)), (i = Os.stringify(t)), i;
}
function h3() {
  return Ep() || { name: "", description: "", url: "", icons: [""] };
}
function l3() {
  if (
    Ls() === Ar.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: t, Version: s } = global.Platform;
    return [t, s].join("-");
  }
  const i = G_();
  if (i === null) return "unknown";
  const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
  return i.type === "browser"
    ? [e, i.name, i.version].join("-")
    : [e, i.version].join("-");
}
function f3() {
  var i;
  const e = Ls();
  return e === Ar.browser
    ? [e, ((i = _p()) == null ? void 0 : i.host) || "unknown"].join(":")
    : e;
}
function d3(i, e, t) {
  const s = l3(),
    o = f3();
  return [[i, e].join("-"), [a3, t].join("-"), s, o].join("/");
}
function p3({
  protocol: i,
  version: e,
  relayUrl: t,
  sdkVersion: s,
  auth: o,
  projectId: c,
  useOnCloseEvent: f,
  bundleId: d,
}) {
  const p = t.split("?"),
    g = d3(i, e, s),
    v = {
      auth: o,
      ua: g,
      projectId: c,
      useOnCloseEvent: f || void 0,
      origin: d || void 0,
    },
    b = u3(p[1] || "", v);
  return p[0] + "?" + b;
}
function cn(i, e) {
  return i.filter((t) => e.includes(t)).length === i.length;
}
function Pp(i) {
  return Object.fromEntries(i.entries());
}
function Ap(i) {
  return new Map(Object.entries(i));
}
function jn(i = ve.FIVE_MINUTES, e) {
  const t = ve.toMiliseconds(i || ve.FIVE_MINUTES);
  let s, o, c;
  return {
    resolve: (f) => {
      c && s && (clearTimeout(c), s(f));
    },
    reject: (f) => {
      c && o && (clearTimeout(c), o(f));
    },
    done: () =>
      new Promise((f, d) => {
        (c = setTimeout(() => {
          d(new Error(e));
        }, t)),
          (s = f),
          (o = d);
      }),
  };
}
function Ps(i, e, t) {
  return new Promise(async (s, o) => {
    const c = setTimeout(() => o(new Error(t)), e);
    try {
      const f = await i;
      s(f);
    } catch (f) {
      o(f);
    }
    clearTimeout(c);
  });
}
function Cp(i, e) {
  if (typeof e == "string" && e.startsWith(`${i}:`)) return e;
  if (i.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (i.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${i}`);
}
function g3(i) {
  return Cp("topic", i);
}
function y3(i) {
  return Cp("id", i);
}
function Tp(i) {
  const [e, t] = i.split(":"),
    s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") s.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) s.id = Number(t);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${t}`
    );
  return s;
}
function Pr(i, e) {
  return ve.fromMiliseconds((e || Date.now()) + ve.toMiliseconds(i));
}
function ji(i) {
  return Date.now() >= ve.toMiliseconds(i);
}
function Ft(i, e) {
  return `${i}${e ? `:${e}` : ""}`;
}
function eu(i = [], e = []) {
  return [...new Set([...i, ...e])];
}
async function v3({ id: i, topic: e, wcDeepLink: t }) {
  try {
    if (!t) return;
    const s = typeof t == "string" ? JSON.parse(t) : t;
    let o = s == null ? void 0 : s.href;
    if (typeof o != "string") return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const c = `${o}/wc?requestId=${i}&sessionTopic=${e}`,
      f = Ls();
    f === Ar.browser
      ? c.startsWith("https://")
        ? window.open(c, "_blank", "noreferrer noopener")
        : window.open(c, "_self", "noreferrer noopener")
      : f === Ar.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(c));
  } catch (s) {
    console.error(s);
  }
}
async function m3(i, e) {
  try {
    return (await i.getItem(e)) || (Wn() ? localStorage.getItem(e) : void 0);
  } catch (t) {
    console.error(t);
  }
}
const w3 = "irn";
function Cu(i) {
  return (i == null ? void 0 : i.relay) || { protocol: w3 };
}
function ea(i) {
  const e = KE[i];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${i}`);
  return e;
}
var b3 = Object.defineProperty,
  _3 = Object.defineProperties,
  E3 = Object.getOwnPropertyDescriptors,
  Mf = Object.getOwnPropertySymbols,
  D3 = Object.prototype.hasOwnProperty,
  S3 = Object.prototype.propertyIsEnumerable,
  jf = (i, e, t) =>
    e in i
      ? b3(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  I3 = (i, e) => {
    for (var t in e || (e = {})) D3.call(e, t) && jf(i, t, e[t]);
    if (Mf) for (var t of Mf(e)) S3.call(e, t) && jf(i, t, e[t]);
    return i;
  },
  x3 = (i, e) => _3(i, E3(e));
function O3(i, e = "-") {
  const t = {},
    s = "relay" + e;
  return (
    Object.keys(i).forEach((o) => {
      if (o.startsWith(s)) {
        const c = o.replace(s, ""),
          f = i[o];
        t[c] = f;
      }
    }),
    t
  );
}
function qf(i) {
  (i = i.includes("wc://") ? i.replace("wc://", "") : i),
    (i = i.includes("wc:") ? i.replace("wc:", "") : i);
  const e = i.indexOf(":"),
    t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0,
    s = i.substring(0, e),
    o = i.substring(e + 1, t).split("@"),
    c = typeof t < "u" ? i.substring(t) : "",
    f = Os.parse(c);
  return {
    protocol: s,
    topic: P3(o[0]),
    version: parseInt(o[1], 10),
    symKey: f.symKey,
    relay: O3(f),
    expiryTimestamp: f.expiryTimestamp
      ? parseInt(f.expiryTimestamp, 10)
      : void 0,
  };
}
function P3(i) {
  return i.startsWith("//") ? i.substring(2) : i;
}
function A3(i, e = "-") {
  const t = "relay",
    s = {};
  return (
    Object.keys(i).forEach((o) => {
      const c = t + e + o;
      i[o] && (s[c] = i[o]);
    }),
    s
  );
}
function C3(i) {
  return (
    `${i.protocol}:${i.topic}@${i.version}?` +
    Os.stringify(
      x3(I3({ symKey: i.symKey }, A3(i.relay)), {
        expiryTimestamp: i.expiryTimestamp,
      })
    )
  );
}
function Gn(i) {
  const e = [];
  return (
    i.forEach((t) => {
      const [s, o] = t.split(":");
      e.push(`${s}:${o}`);
    }),
    e
  );
}
function T3(i) {
  const e = [];
  return (
    Object.values(i).forEach((t) => {
      e.push(...Gn(t.accounts));
    }),
    e
  );
}
function R3(i, e) {
  const t = [];
  return (
    Object.values(i).forEach((s) => {
      Gn(s.accounts).includes(e) && t.push(...s.methods);
    }),
    t
  );
}
function N3(i, e) {
  const t = [];
  return (
    Object.values(i).forEach((s) => {
      Gn(s.accounts).includes(e) && t.push(...s.events);
    }),
    t
  );
}
function Zu(i) {
  return i.includes(":");
}
function Es(i) {
  return Zu(i) ? i.split(":")[0] : i;
}
const F3 = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  $3 = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function ae(i, e) {
  const { message: t, code: s } = $3[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function wt(i, e) {
  const { message: t, code: s } = F3[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function oi(i, e) {
  return Array.isArray(i) ? (typeof e < "u" && i.length ? i.every(e) : !0) : !1;
}
function As(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
function cr(i) {
  return typeof i > "u";
}
function Wt(i, e) {
  return e && cr(i) ? !0 : typeof i == "string" && !!i.trim().length;
}
function eh(i, e) {
  return e && cr(i) ? !0 : typeof i == "number" && !isNaN(i);
}
function L3(i, e) {
  const { requiredNamespaces: t } = e,
    s = Object.keys(i.namespaces),
    o = Object.keys(t);
  let c = !0;
  return cn(o, s)
    ? (s.forEach((f) => {
        const { accounts: d, methods: p, events: g } = i.namespaces[f],
          v = Gn(d),
          b = t[f];
        (!cn(Sp(f, b), v) || !cn(b.methods, p) || !cn(b.events, g)) && (c = !1);
      }),
      c)
    : !1;
}
function oa(i) {
  return Wt(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1;
}
function U3(i) {
  if (Wt(i, !1) && i.includes(":")) {
    const e = i.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && oa(t);
    }
  }
  return !1;
}
function M3(i) {
  if (Wt(i, !1))
    try {
      return typeof new URL(i) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function j3(i) {
  var e;
  return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey;
}
function q3(i) {
  return i == null ? void 0 : i.topic;
}
function B3(i, e) {
  let t = null;
  return (
    Wt(i == null ? void 0 : i.publicKey, !1) ||
      (t = ae(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    t
  );
}
function Bf(i) {
  let e = !0;
  return oi(i) ? i.length && (e = i.every((t) => Wt(t, !1))) : (e = !1), e;
}
function z3(i, e, t) {
  let s = null;
  return (
    oi(e) && e.length
      ? e.forEach((o) => {
          s ||
            oa(o) ||
            (s = wt(
              "UNSUPPORTED_CHAINS",
              `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : oa(i) ||
        (s = wt(
          "UNSUPPORTED_CHAINS",
          `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    s
  );
}
function H3(i, e, t) {
  let s = null;
  return (
    Object.entries(i).forEach(([o, c]) => {
      if (s) return;
      const f = z3(o, Sp(o, c), `${e} ${t}`);
      f && (s = f);
    }),
    s
  );
}
function K3(i, e) {
  let t = null;
  return (
    oi(i)
      ? i.forEach((s) => {
          t ||
            U3(s) ||
            (t = wt(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (t = wt(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    t
  );
}
function k3(i, e) {
  let t = null;
  return (
    Object.values(i).forEach((s) => {
      if (t) return;
      const o = K3(s == null ? void 0 : s.accounts, `${e} namespace`);
      o && (t = o);
    }),
    t
  );
}
function V3(i, e) {
  let t = null;
  return (
    Bf(i == null ? void 0 : i.methods)
      ? Bf(i == null ? void 0 : i.events) ||
        (t = wt(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (t = wt(
          "UNSUPPORTED_METHODS",
          `${e}, methods should be an array of strings or empty array for no methods`
        )),
    t
  );
}
function Rp(i, e) {
  let t = null;
  return (
    Object.values(i).forEach((s) => {
      if (t) return;
      const o = V3(s, `${e}, namespace`);
      o && (t = o);
    }),
    t
  );
}
function W3(i, e, t) {
  let s = null;
  if (i && As(i)) {
    const o = Rp(i, e);
    o && (s = o);
    const c = H3(i, e, t);
    c && (s = c);
  } else
    s = ae("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return s;
}
function tu(i, e) {
  let t = null;
  if (i && As(i)) {
    const s = Rp(i, e);
    s && (t = s);
    const o = k3(i, e);
    o && (t = o);
  } else
    t = ae(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return t;
}
function Np(i) {
  return Wt(i.protocol, !0);
}
function G3(i, e) {
  let t = !1;
  return (
    e && !i
      ? (t = !0)
      : i &&
        oi(i) &&
        i.length &&
        i.forEach((s) => {
          t = Np(s);
        }),
    t
  );
}
function Y3(i) {
  return typeof i == "number";
}
function mr(i) {
  return typeof i < "u" && typeof i !== null;
}
function J3(i) {
  return !(
    !i ||
    typeof i != "object" ||
    !i.code ||
    !eh(i.code, !1) ||
    !i.message ||
    !Wt(i.message, !1)
  );
}
function Q3(i) {
  return !(cr(i) || !Wt(i.method, !1));
}
function X3(i) {
  return !(
    cr(i) ||
    (cr(i.result) && cr(i.error)) ||
    !eh(i.id, !1) ||
    !Wt(i.jsonrpc, !1)
  );
}
function Z3(i) {
  return !(cr(i) || !Wt(i.name, !1));
}
function zf(i, e) {
  return !(!oa(e) || !T3(i).includes(e));
}
function eD(i, e, t) {
  return Wt(t, !1) ? R3(i, e).includes(t) : !1;
}
function tD(i, e, t) {
  return Wt(t, !1) ? N3(i, e).includes(t) : !1;
}
function Hf(i, e, t) {
  let s = null;
  const o = rD(i),
    c = iD(e),
    f = Object.keys(o),
    d = Object.keys(c),
    p = Kf(Object.keys(i)),
    g = Kf(Object.keys(e)),
    v = p.filter((b) => !g.includes(b));
  return (
    v.length &&
      (s = ae(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${v.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    cn(f, d) ||
      (s = ae(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${d.toString()}`
      )),
    Object.keys(e).forEach((b) => {
      if (!b.includes(":") || s) return;
      const O = Gn(e[b].accounts);
      O.includes(b) ||
        (s = ae(
          "NON_CONFORMING_NAMESPACES",
          `${t} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${O.toString()}`
        ));
    }),
    f.forEach((b) => {
      s ||
        (cn(o[b].methods, c[b].methods)
          ? cn(o[b].events, c[b].events) ||
            (s = ae(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces events don't satisfy namespace events for ${b}`
            ))
          : (s = ae(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces methods don't satisfy namespace methods for ${b}`
            )));
    }),
    s
  );
}
function rD(i) {
  const e = {};
  return (
    Object.keys(i).forEach((t) => {
      var s;
      t.includes(":")
        ? (e[t] = i[t])
        : (s = i[t].chains) == null ||
          s.forEach((o) => {
            e[o] = { methods: i[t].methods, events: i[t].events };
          });
    }),
    e
  );
}
function Kf(i) {
  return [...new Set(i.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function iD(i) {
  const e = {};
  return (
    Object.keys(i).forEach((t) => {
      if (t.includes(":")) e[t] = i[t];
      else {
        const s = Gn(i[t].accounts);
        s == null ||
          s.forEach((o) => {
            e[o] = {
              accounts: i[t].accounts.filter((c) => c.includes(`${o}:`)),
              methods: i[t].methods,
              events: i[t].events,
            };
          });
      }
    }),
    e
  );
}
function nD(i, e) {
  return eh(i, !1) && i <= e.max && i >= e.min;
}
function kf() {
  const i = Ls();
  return new Promise((e) => {
    switch (i) {
      case Ar.browser:
        e(sD());
        break;
      case Ar.reactNative:
        e(oD());
        break;
      case Ar.node:
        e(aD());
        break;
      default:
        e(!0);
    }
  });
}
function sD() {
  return Wn() && (navigator == null ? void 0 : navigator.onLine);
}
async function oD() {
  if (Vn() && typeof global < "u" && global != null && global.NetInfo) {
    const i = await (global == null ? void 0 : global.NetInfo.fetch());
    return i == null ? void 0 : i.isConnected;
  }
  return !0;
}
function aD() {
  return !0;
}
function cD(i) {
  switch (Ls()) {
    case Ar.browser:
      uD(i);
      break;
    case Ar.reactNative:
      hD(i);
      break;
  }
}
function uD(i) {
  !Vn() &&
    Wn() &&
    (window.addEventListener("online", () => i(!0)),
    window.addEventListener("offline", () => i(!1)));
}
function hD(i) {
  Vn() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((e) =>
        i(e == null ? void 0 : e.isConnected)
      ));
}
const ru = {};
let Vo = class {
  static get(e) {
    return ru[e];
  }
  static set(e, t) {
    ru[e] = t;
  }
  static delete(e) {
    delete ru[e];
  }
};
const lD =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  fD =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  dD = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function pD(i, e) {
  if (
    i === "__proto__" ||
    (i === "constructor" && e && typeof e == "object" && "prototype" in e)
  ) {
    gD(i);
    return;
  }
  return e;
}
function gD(i) {
  console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`);
}
function Wo(i, e = {}) {
  if (typeof i != "string") return i;
  const t = i.trim();
  if (i[0] === '"' && i.endsWith('"') && !i.includes("\\"))
    return t.slice(1, -1);
  if (t.length <= 9) {
    const s = t.toLowerCase();
    if (s === "true") return !0;
    if (s === "false") return !1;
    if (s === "undefined") return;
    if (s === "null") return null;
    if (s === "nan") return Number.NaN;
    if (s === "infinity") return Number.POSITIVE_INFINITY;
    if (s === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!dD.test(i)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return i;
  }
  try {
    if (lD.test(i) || fD.test(i)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(i, pD);
    }
    return JSON.parse(i);
  } catch (s) {
    if (e.strict) throw s;
    return i;
  }
}
function yD(i) {
  return !i || typeof i.then != "function" ? Promise.resolve(i) : i;
}
function Vt(i, ...e) {
  try {
    return yD(i(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function vD(i) {
  const e = typeof i;
  return i === null || (e !== "object" && e !== "function");
}
function mD(i) {
  const e = Object.getPrototypeOf(i);
  return !e || e.isPrototypeOf(Object);
}
function ta(i) {
  if (vD(i)) return String(i);
  if (mD(i) || Array.isArray(i)) return JSON.stringify(i);
  if (typeof i.toJSON == "function") return ta(i.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Fp() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Tu = "base64:";
function wD(i) {
  if (typeof i == "string") return i;
  Fp();
  const e = Buffer.from(i).toString("base64");
  return Tu + e;
}
function bD(i) {
  return typeof i != "string" || !i.startsWith(Tu)
    ? i
    : (Fp(), Buffer.from(i.slice(Tu.length), "base64"));
}
function vr(i) {
  return i
    ? i
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function _D(...i) {
  return vr(i.join(":"));
}
function Go(i) {
  return (i = vr(i)), i ? i + ":" : "";
}
const ED = "memory",
  DD = () => {
    const i = new Map();
    return {
      name: ED,
      options: {},
      hasItem(e) {
        return i.has(e);
      },
      getItem(e) {
        return i.get(e) ?? null;
      },
      getItemRaw(e) {
        return i.get(e) ?? null;
      },
      setItem(e, t) {
        i.set(e, t);
      },
      setItemRaw(e, t) {
        i.set(e, t);
      },
      removeItem(e) {
        i.delete(e);
      },
      getKeys() {
        return Array.from(i.keys());
      },
      clear() {
        i.clear();
      },
      dispose() {
        i.clear();
      },
    };
  };
function SD(i = {}) {
  const e = {
      mounts: { "": i.driver || DD() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    t = (g) => {
      for (const v of e.mountpoints)
        if (g.startsWith(v))
          return {
            base: v,
            relativeKey: g.slice(v.length),
            driver: e.mounts[v],
          };
      return { base: "", relativeKey: g, driver: e.mounts[""] };
    },
    s = (g, v) =>
      e.mountpoints
        .filter((b) => b.startsWith(g) || (v && g.startsWith(b)))
        .map((b) => ({
          relativeBase: g.length > b.length ? g.slice(b.length) : void 0,
          mountpoint: b,
          driver: e.mounts[b],
        })),
    o = (g, v) => {
      if (e.watching) {
        v = vr(v);
        for (const b of e.watchListeners) b(g, v);
      }
    },
    c = async () => {
      if (!e.watching) {
        e.watching = !0;
        for (const g in e.mounts) e.unwatch[g] = await Vf(e.mounts[g], o, g);
      }
    },
    f = async () => {
      if (e.watching) {
        for (const g in e.unwatch) await e.unwatch[g]();
        (e.unwatch = {}), (e.watching = !1);
      }
    },
    d = (g, v, b) => {
      const O = new Map(),
        P = (S) => {
          let K = O.get(S.base);
          return (
            K ||
              ((K = { driver: S.driver, base: S.base, items: [] }),
              O.set(S.base, K)),
            K
          );
        };
      for (const S of g) {
        const K = typeof S == "string",
          H = vr(K ? S : S.key),
          Z = K ? void 0 : S.value,
          F = K || !S.options ? v : { ...v, ...S.options },
          U = t(H);
        P(U).items.push({
          key: H,
          value: Z,
          relativeKey: U.relativeKey,
          options: F,
        });
      }
      return Promise.all([...O.values()].map((S) => b(S))).then((S) =>
        S.flat()
      );
    },
    p = {
      hasItem(g, v = {}) {
        g = vr(g);
        const { relativeKey: b, driver: O } = t(g);
        return Vt(O.hasItem, b, v);
      },
      getItem(g, v = {}) {
        g = vr(g);
        const { relativeKey: b, driver: O } = t(g);
        return Vt(O.getItem, b, v).then((P) => Wo(P));
      },
      getItems(g, v) {
        return d(g, v, (b) =>
          b.driver.getItems
            ? Vt(
                b.driver.getItems,
                b.items.map((O) => ({
                  key: O.relativeKey,
                  options: O.options,
                })),
                v
              ).then((O) =>
                O.map((P) => ({ key: _D(b.base, P.key), value: Wo(P.value) }))
              )
            : Promise.all(
                b.items.map((O) =>
                  Vt(b.driver.getItem, O.relativeKey, O.options).then((P) => ({
                    key: O.key,
                    value: Wo(P),
                  }))
                )
              )
        );
      },
      getItemRaw(g, v = {}) {
        g = vr(g);
        const { relativeKey: b, driver: O } = t(g);
        return O.getItemRaw
          ? Vt(O.getItemRaw, b, v)
          : Vt(O.getItem, b, v).then((P) => bD(P));
      },
      async setItem(g, v, b = {}) {
        if (v === void 0) return p.removeItem(g);
        g = vr(g);
        const { relativeKey: O, driver: P } = t(g);
        P.setItem &&
          (await Vt(P.setItem, O, ta(v), b), P.watch || o("update", g));
      },
      async setItems(g, v) {
        await d(g, v, async (b) => {
          if (b.driver.setItems)
            return Vt(
              b.driver.setItems,
              b.items.map((O) => ({
                key: O.relativeKey,
                value: ta(O.value),
                options: O.options,
              })),
              v
            );
          b.driver.setItem &&
            (await Promise.all(
              b.items.map((O) =>
                Vt(b.driver.setItem, O.relativeKey, ta(O.value), O.options)
              )
            ));
        });
      },
      async setItemRaw(g, v, b = {}) {
        if (v === void 0) return p.removeItem(g, b);
        g = vr(g);
        const { relativeKey: O, driver: P } = t(g);
        if (P.setItemRaw) await Vt(P.setItemRaw, O, v, b);
        else if (P.setItem) await Vt(P.setItem, O, wD(v), b);
        else return;
        P.watch || o("update", g);
      },
      async removeItem(g, v = {}) {
        typeof v == "boolean" && (v = { removeMeta: v }), (g = vr(g));
        const { relativeKey: b, driver: O } = t(g);
        O.removeItem &&
          (await Vt(O.removeItem, b, v),
          (v.removeMeta || v.removeMata) &&
            (await Vt(O.removeItem, b + "$", v)),
          O.watch || o("remove", g));
      },
      async getMeta(g, v = {}) {
        typeof v == "boolean" && (v = { nativeOnly: v }), (g = vr(g));
        const { relativeKey: b, driver: O } = t(g),
          P = Object.create(null);
        if (
          (O.getMeta && Object.assign(P, await Vt(O.getMeta, b, v)),
          !v.nativeOnly)
        ) {
          const S = await Vt(O.getItem, b + "$", v).then((K) => Wo(K));
          S &&
            typeof S == "object" &&
            (typeof S.atime == "string" && (S.atime = new Date(S.atime)),
            typeof S.mtime == "string" && (S.mtime = new Date(S.mtime)),
            Object.assign(P, S));
        }
        return P;
      },
      setMeta(g, v, b = {}) {
        return this.setItem(g + "$", v, b);
      },
      removeMeta(g, v = {}) {
        return this.removeItem(g + "$", v);
      },
      async getKeys(g, v = {}) {
        g = Go(g);
        const b = s(g, !0);
        let O = [];
        const P = [];
        for (const S of b) {
          const H = (await Vt(S.driver.getKeys, S.relativeBase, v))
            .map((Z) => S.mountpoint + vr(Z))
            .filter((Z) => !O.some((F) => Z.startsWith(F)));
          P.push(...H),
            (O = [
              S.mountpoint,
              ...O.filter((Z) => !Z.startsWith(S.mountpoint)),
            ]);
        }
        return g
          ? P.filter((S) => S.startsWith(g) && !S.endsWith("$"))
          : P.filter((S) => !S.endsWith("$"));
      },
      async clear(g, v = {}) {
        (g = Go(g)),
          await Promise.all(
            s(g, !1).map(async (b) => {
              if (b.driver.clear) return Vt(b.driver.clear, b.relativeBase, v);
              if (b.driver.removeItem) {
                const O = await b.driver.getKeys(b.relativeBase || "", v);
                return Promise.all(O.map((P) => b.driver.removeItem(P, v)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(e.mounts).map((g) => Wf(g)));
      },
      async watch(g) {
        return (
          await c(),
          e.watchListeners.push(g),
          async () => {
            (e.watchListeners = e.watchListeners.filter((v) => v !== g)),
              e.watchListeners.length === 0 && (await f());
          }
        );
      },
      async unwatch() {
        (e.watchListeners = []), await f();
      },
      mount(g, v) {
        if (((g = Go(g)), g && e.mounts[g]))
          throw new Error(`already mounted at ${g}`);
        return (
          g &&
            (e.mountpoints.push(g),
            e.mountpoints.sort((b, O) => O.length - b.length)),
          (e.mounts[g] = v),
          e.watching &&
            Promise.resolve(Vf(v, o, g))
              .then((b) => {
                e.unwatch[g] = b;
              })
              .catch(console.error),
          p
        );
      },
      async unmount(g, v = !0) {
        (g = Go(g)),
          !(!g || !e.mounts[g]) &&
            (e.watching &&
              g in e.unwatch &&
              (e.unwatch[g](), delete e.unwatch[g]),
            v && (await Wf(e.mounts[g])),
            (e.mountpoints = e.mountpoints.filter((b) => b !== g)),
            delete e.mounts[g]);
      },
      getMount(g = "") {
        g = vr(g) + ":";
        const v = t(g);
        return { driver: v.driver, base: v.base };
      },
      getMounts(g = "", v = {}) {
        return (
          (g = vr(g)),
          s(g, v.parents).map((O) => ({ driver: O.driver, base: O.mountpoint }))
        );
      },
    };
  return p;
}
function Vf(i, e, t) {
  return i.watch ? i.watch((s, o) => e(s, t + o)) : () => {};
}
async function Wf(i) {
  typeof i.dispose == "function" && (await Vt(i.dispose));
}
function fn(i) {
  return new Promise((e, t) => {
    (i.oncomplete = i.onsuccess = () => e(i.result)),
      (i.onabort = i.onerror = () => t(i.error));
  });
}
function $p(i, e) {
  const t = indexedDB.open(i);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const s = fn(t);
  return (o, c) => s.then((f) => c(f.transaction(e, o).objectStore(e)));
}
let iu;
function Us() {
  return iu || (iu = $p("keyval-store", "keyval")), iu;
}
function Gf(i, e = Us()) {
  return e("readonly", (t) => fn(t.get(i)));
}
function ID(i, e, t = Us()) {
  return t("readwrite", (s) => (s.put(e, i), fn(s.transaction)));
}
function xD(i, e = Us()) {
  return e("readwrite", (t) => (t.delete(i), fn(t.transaction)));
}
function OD(i = Us()) {
  return i("readwrite", (e) => (e.clear(), fn(e.transaction)));
}
function PD(i, e) {
  return (
    (i.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    fn(i.transaction)
  );
}
function AD(i = Us()) {
  return i("readonly", (e) => {
    if (e.getAllKeys) return fn(e.getAllKeys());
    const t = [];
    return PD(e, (s) => t.push(s.key)).then(() => t);
  });
}
const CD = (i) =>
    JSON.stringify(i, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  TD = (i) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function Ms(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return TD(i);
  } catch {
    return i;
  }
}
function un(i) {
  return typeof i == "string" ? i : CD(i) || "";
}
const RD = "idb-keyval";
var ND = (i = {}) => {
  const e = i.base && i.base.length > 0 ? `${i.base}:` : "",
    t = (o) => e + o;
  let s;
  return (
    i.dbName && i.storeName && (s = $p(i.dbName, i.storeName)),
    {
      name: RD,
      options: i,
      async hasItem(o) {
        return !(typeof (await Gf(t(o), s)) > "u");
      },
      async getItem(o) {
        return (await Gf(t(o), s)) ?? null;
      },
      setItem(o, c) {
        return ID(t(o), c, s);
      },
      removeItem(o) {
        return xD(t(o), s);
      },
      getKeys() {
        return AD(s);
      },
      clear() {
        return OD(s);
      },
    }
  );
};
const FD = "WALLET_CONNECT_V2_INDEXED_DB",
  $D = "keyvaluestorage";
let LD = class {
  constructor() {
    this.indexedDb = SD({ driver: ND({ dbName: FD, storeName: $D }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (e) => [e.key, e.value]
    );
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null) return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, un(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var nu =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ra = { exports: {} };
(function () {
  let i;
  function e() {}
  (i = e),
    (i.prototype.getItem = function (t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }),
    (i.prototype.setItem = function (t, s) {
      this[t] = String(s);
    }),
    (i.prototype.removeItem = function (t) {
      delete this[t];
    }),
    (i.prototype.clear = function () {
      const t = this;
      Object.keys(t).forEach(function (s) {
        (t[s] = void 0), delete t[s];
      });
    }),
    (i.prototype.key = function (t) {
      return (t = t || 0), Object.keys(this)[t];
    }),
    i.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof nu < "u" && nu.localStorage
      ? (ra.exports = nu.localStorage)
      : typeof window < "u" && window.localStorage
      ? (ra.exports = window.localStorage)
      : (ra.exports = new e());
})();
function UD(i) {
  var e;
  return [i[0], Ms((e = i[1]) != null ? e : "")];
}
class MD {
  constructor() {
    this.localStorage = ra.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(UD);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null) return Ms(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, un(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const jD = "wc_storage_version",
  Yf = 1,
  qD = async (i, e, t) => {
    const s = jD,
      o = await e.getItem(s);
    if (o && o >= Yf) {
      t(e);
      return;
    }
    const c = await i.getKeys();
    if (!c.length) {
      t(e);
      return;
    }
    const f = [];
    for (; c.length; ) {
      const d = c.shift();
      if (!d) continue;
      const p = d.toLowerCase();
      if (
        p.includes("wc@") ||
        p.includes("walletconnect") ||
        p.includes("wc_") ||
        p.includes("wallet_connect")
      ) {
        const g = await i.getItem(d);
        await e.setItem(d, g), f.push(d);
      }
    }
    await e.setItem(s, Yf), t(e), BD(i, f);
  },
  BD = async (i, e) => {
    e.length &&
      e.forEach(async (t) => {
        await i.removeItem(t);
      });
  };
let zD = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (t) => {
        (this.storage = t), (this.initialized = !0);
      });
    const e = new MD();
    this.storage = e;
    try {
      const t = new LD();
      qD(e, t, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, t) {
    return await this.initialize(), this.storage.setItem(e, t);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.initialized && (clearInterval(t), e());
        }, 20);
      }));
  }
};
var Yn = {},
  vs = {},
  su = {},
  ms = {};
let dn = class {};
const HD = Object.freeze(
    Object.defineProperty(
      { __proto__: null, IEvents: dn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  KD = qu(HD);
var Jf;
function kD() {
  if (Jf) return ms;
  (Jf = 1),
    Object.defineProperty(ms, "__esModule", { value: !0 }),
    (ms.IHeartBeat = void 0);
  const i = KD;
  class e extends i.IEvents {
    constructor(s) {
      super();
    }
  }
  return (ms.IHeartBeat = e), ms;
}
var Qf;
function Lp() {
  return (
    Qf ||
      ((Qf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          Ii.__exportStar(kD(), i);
      })(su)),
    su
  );
}
var ou = {},
  an = {},
  Xf;
function VD() {
  if (Xf) return an;
  (Xf = 1),
    Object.defineProperty(an, "__esModule", { value: !0 }),
    (an.HEARTBEAT_EVENTS = an.HEARTBEAT_INTERVAL = void 0);
  const i = ve;
  return (
    (an.HEARTBEAT_INTERVAL = i.FIVE_SECONDS),
    (an.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
    an
  );
}
var Zf;
function Up() {
  return (
    Zf ||
      ((Zf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          Ii.__exportStar(VD(), i);
      })(ou)),
    ou
  );
}
var ed;
function WD() {
  if (ed) return vs;
  (ed = 1),
    Object.defineProperty(vs, "__esModule", { value: !0 }),
    (vs.HeartBeat = void 0);
  const i = Ii,
    e = Cr,
    t = ve,
    s = Lp(),
    o = Up();
  class c extends s.IHeartBeat {
    constructor(d) {
      super(d),
        (this.events = new e.EventEmitter()),
        (this.interval = o.HEARTBEAT_INTERVAL),
        (this.interval =
          (d == null ? void 0 : d.interval) || o.HEARTBEAT_INTERVAL);
    }
    static init(d) {
      return i.__awaiter(this, void 0, void 0, function* () {
        const p = new c(d);
        return yield p.init(), p;
      });
    }
    init() {
      return i.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(d, p) {
      this.events.on(d, p);
    }
    once(d, p) {
      this.events.once(d, p);
    }
    off(d, p) {
      this.events.off(d, p);
    }
    removeListener(d, p) {
      this.events.removeListener(d, p);
    }
    initialize() {
      return i.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          t.toMiliseconds(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(o.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (vs.HeartBeat = c), vs;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = Ii;
  e.__exportStar(WD(), i), e.__exportStar(Lp(), i), e.__exportStar(Up(), i);
})(Yn);
function GD(i) {
  try {
    return JSON.stringify(i);
  } catch {
    return '"[Circular]"';
  }
}
var YD = JD;
function JD(i, e, t) {
  var s = (t && t.stringify) || GD,
    o = 1;
  if (typeof i == "object" && i !== null) {
    var c = e.length + o;
    if (c === 1) return i;
    var f = new Array(c);
    f[0] = s(i);
    for (var d = 1; d < c; d++) f[d] = s(e[d]);
    return f.join(" ");
  }
  if (typeof i != "string") return i;
  var p = e.length;
  if (p === 0) return i;
  for (
    var g = "", v = 1 - o, b = -1, O = (i && i.length) || 0, P = 0;
    P < O;

  ) {
    if (i.charCodeAt(P) === 37 && P + 1 < O) {
      switch (((b = b > -1 ? b : 0), i.charCodeAt(P + 1))) {
        case 100:
        case 102:
          if (v >= p || e[v] == null) break;
          b < P && (g += i.slice(b, P)), (g += Number(e[v])), (b = P + 2), P++;
          break;
        case 105:
          if (v >= p || e[v] == null) break;
          b < P && (g += i.slice(b, P)),
            (g += Math.floor(Number(e[v]))),
            (b = P + 2),
            P++;
          break;
        case 79:
        case 111:
        case 106:
          if (v >= p || e[v] === void 0) break;
          b < P && (g += i.slice(b, P));
          var S = typeof e[v];
          if (S === "string") {
            (g += "'" + e[v] + "'"), (b = P + 2), P++;
            break;
          }
          if (S === "function") {
            (g += e[v].name || "<anonymous>"), (b = P + 2), P++;
            break;
          }
          (g += s(e[v])), (b = P + 2), P++;
          break;
        case 115:
          if (v >= p) break;
          b < P && (g += i.slice(b, P)), (g += String(e[v])), (b = P + 2), P++;
          break;
        case 37:
          b < P && (g += i.slice(b, P)), (g += "%"), (b = P + 2), P++, v--;
          break;
      }
      ++v;
    }
    ++P;
  }
  return b === -1 ? i : (b < O && (g += i.slice(b)), g);
}
const td = YD;
var QD = si;
const Cs = a6().console || {},
  XD = {
    mapHttpRequest: Yo,
    mapHttpResponse: Yo,
    wrapRequestSerializer: au,
    wrapResponseSerializer: au,
    wrapErrorSerializer: au,
    req: Yo,
    res: Yo,
    err: i6,
  };
function ZD(i, e) {
  return Array.isArray(i)
    ? i.filter(function (s) {
        return s !== "!stdSerializers.err";
      })
    : i === !0
    ? Object.keys(e)
    : !1;
}
function si(i) {
  (i = i || {}), (i.browser = i.browser || {});
  const e = i.browser.transmit;
  if (e && typeof e.send != "function")
    throw Error("pino: transmit option must have a send function");
  const t = i.browser.write || Cs;
  i.browser.write && (i.browser.asObject = !0);
  const s = i.serializers || {},
    o = ZD(i.browser.serialize, s);
  let c = i.browser.serialize;
  Array.isArray(i.browser.serialize) &&
    i.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (c = !1);
  const f = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof t == "function" &&
    (t.error = t.fatal = t.warn = t.info = t.debug = t.trace = t),
    i.enabled === !1 && (i.level = "silent");
  const d = i.level || "info",
    p = Object.create(t);
  p.log || (p.log = Ts),
    Object.defineProperty(p, "levelVal", { get: v }),
    Object.defineProperty(p, "level", { get: b, set: O });
  const g = {
    transmit: e,
    serialize: o,
    asObject: i.browser.asObject,
    levels: f,
    timestamp: n6(i),
  };
  (p.levels = si.levels),
    (p.level = d),
    (p.setMaxListeners =
      p.getMaxListeners =
      p.emit =
      p.addListener =
      p.on =
      p.prependListener =
      p.once =
      p.prependOnceListener =
      p.removeListener =
      p.removeAllListeners =
      p.listeners =
      p.listenerCount =
      p.eventNames =
      p.write =
      p.flush =
        Ts),
    (p.serializers = s),
    (p._serialize = o),
    (p._stdErrSerialize = c),
    (p.child = P),
    e && (p._logEvent = Ru());
  function v() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function b() {
    return this._level;
  }
  function O(S) {
    if (S !== "silent" && !this.levels.values[S])
      throw Error("unknown level " + S);
    (this._level = S),
      Ln(g, p, "error", "log"),
      Ln(g, p, "fatal", "error"),
      Ln(g, p, "warn", "error"),
      Ln(g, p, "info", "log"),
      Ln(g, p, "debug", "log"),
      Ln(g, p, "trace", "log");
  }
  function P(S, K) {
    if (!S) throw new Error("missing bindings for child Pino");
    (K = K || {}), o && S.serializers && (K.serializers = S.serializers);
    const H = K.serializers;
    if (o && H) {
      var Z = Object.assign({}, s, H),
        F = i.browser.serialize === !0 ? Object.keys(Z) : o;
      delete S.serializers, va([S], F, Z, this._stdErrSerialize);
    }
    function U(I) {
      (this._childLevel = (I._childLevel | 0) + 1),
        (this.error = Un(I, S, "error")),
        (this.fatal = Un(I, S, "fatal")),
        (this.warn = Un(I, S, "warn")),
        (this.info = Un(I, S, "info")),
        (this.debug = Un(I, S, "debug")),
        (this.trace = Un(I, S, "trace")),
        Z && ((this.serializers = Z), (this._serialize = F)),
        e && (this._logEvent = Ru([].concat(I._logEvent.bindings, S)));
    }
    return (U.prototype = this), new U(this);
  }
  return p;
}
si.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
};
si.stdSerializers = XD;
si.stdTimeFunctions = Object.assign(
  {},
  { nullTime: Mp, epochTime: jp, unixTime: s6, isoTime: o6 }
);
function Ln(i, e, t, s) {
  const o = Object.getPrototypeOf(e);
  (e[t] =
    e.levelVal > e.levels.values[t] ? Ts : o[t] ? o[t] : Cs[t] || Cs[s] || Ts),
    e6(i, e, t);
}
function e6(i, e, t) {
  (!i.transmit && e[t] === Ts) ||
    (e[t] = (function (s) {
      return function () {
        const c = i.timestamp(),
          f = new Array(arguments.length),
          d =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === Cs
              ? Cs
              : this;
        for (var p = 0; p < f.length; p++) f[p] = arguments[p];
        if (
          (i.serialize &&
            !i.asObject &&
            va(f, this._serialize, this.serializers, this._stdErrSerialize),
          i.asObject ? s.call(d, t6(this, t, f, c)) : s.apply(d, f),
          i.transmit)
        ) {
          const g = i.transmit.level || e.level,
            v = si.levels.values[g],
            b = si.levels.values[t];
          if (b < v) return;
          r6(
            this,
            {
              ts: c,
              methodLevel: t,
              methodValue: b,
              transmitLevel: g,
              transmitValue: si.levels.values[i.transmit.level || e.level],
              send: i.transmit.send,
              val: e.levelVal,
            },
            f
          );
        }
      };
    })(e[t]));
}
function t6(i, e, t, s) {
  i._serialize && va(t, i._serialize, i.serializers, i._stdErrSerialize);
  const o = t.slice();
  let c = o[0];
  const f = {};
  s && (f.time = s), (f.level = si.levels.values[e]);
  let d = (i._childLevel | 0) + 1;
  if ((d < 1 && (d = 1), c !== null && typeof c == "object")) {
    for (; d-- && typeof o[0] == "object"; ) Object.assign(f, o.shift());
    c = o.length ? td(o.shift(), o) : void 0;
  } else typeof c == "string" && (c = td(o.shift(), o));
  return c !== void 0 && (f.msg = c), f;
}
function va(i, e, t, s) {
  for (const o in i)
    if (s && i[o] instanceof Error) i[o] = si.stdSerializers.err(i[o]);
    else if (typeof i[o] == "object" && !Array.isArray(i[o]))
      for (const c in i[o])
        e && e.indexOf(c) > -1 && c in t && (i[o][c] = t[c](i[o][c]));
}
function Un(i, e, t) {
  return function () {
    const s = new Array(1 + arguments.length);
    s[0] = e;
    for (var o = 1; o < s.length; o++) s[o] = arguments[o - 1];
    return i[t].apply(this, s);
  };
}
function r6(i, e, t) {
  const s = e.send,
    o = e.ts,
    c = e.methodLevel,
    f = e.methodValue,
    d = e.val,
    p = i._logEvent.bindings;
  va(
    t,
    i._serialize || Object.keys(i.serializers),
    i.serializers,
    i._stdErrSerialize === void 0 ? !0 : i._stdErrSerialize
  ),
    (i._logEvent.ts = o),
    (i._logEvent.messages = t.filter(function (g) {
      return p.indexOf(g) === -1;
    })),
    (i._logEvent.level.label = c),
    (i._logEvent.level.value = f),
    s(c, i._logEvent, d),
    (i._logEvent = Ru(p));
}
function Ru(i) {
  return {
    ts: 0,
    messages: [],
    bindings: i || [],
    level: { label: "", value: 0 },
  };
}
function i6(i) {
  const e = { type: i.constructor.name, msg: i.message, stack: i.stack };
  for (const t in i) e[t] === void 0 && (e[t] = i[t]);
  return e;
}
function n6(i) {
  return typeof i.timestamp == "function"
    ? i.timestamp
    : i.timestamp === !1
    ? Mp
    : jp;
}
function Yo() {
  return {};
}
function au(i) {
  return i;
}
function Ts() {}
function Mp() {
  return !1;
}
function jp() {
  return Date.now();
}
function s6() {
  return Math.round(Date.now() / 1e3);
}
function o6() {
  return new Date(Date.now()).toISOString();
}
function a6() {
  function i(e) {
    return typeof e < "u" && e;
  }
  try {
    return (
      typeof globalThis < "u" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return i(self) || i(window) || i(this) || {};
  }
}
const ma = Rs(QD),
  c6 = { level: "info" },
  js = "custom_context";
var u6 = Object.defineProperty,
  h6 = Object.defineProperties,
  l6 = Object.getOwnPropertyDescriptors,
  rd = Object.getOwnPropertySymbols,
  f6 = Object.prototype.hasOwnProperty,
  d6 = Object.prototype.propertyIsEnumerable,
  id = (i, e, t) =>
    e in i
      ? u6(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  p6 = (i, e) => {
    for (var t in e || (e = {})) f6.call(e, t) && id(i, t, e[t]);
    if (rd) for (var t of rd(e)) d6.call(e, t) && id(i, t, e[t]);
    return i;
  },
  g6 = (i, e) => h6(i, l6(e));
function wa(i) {
  return g6(p6({}, i), { level: (i == null ? void 0 : i.level) || c6.level });
}
function y6(i, e = js) {
  return i[e] || "";
}
function v6(i, e, t = js) {
  return (i[t] = e), i;
}
function br(i, e = js) {
  let t = "";
  return (
    typeof i.bindings > "u" ? (t = y6(i, e)) : (t = i.bindings().context || ""),
    t
  );
}
function m6(i, e, t = js) {
  const s = br(i, t);
  return s.trim() ? `${s}/${e}` : e;
}
function _r(i, e, t = js) {
  const s = m6(i, e, t),
    o = i.child({ context: s });
  return v6(o, s, t);
}
class w6 extends dn {
  constructor(e) {
    super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
  }
}
let b6 = class extends dn {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t), (this.records = new Map());
    }
  },
  _6 = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  E6 = class extends dn {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  D6 = class extends dn {
    constructor(e) {
      super();
    }
  },
  S6 = class {
    constructor(e, t, s, o) {
      (this.core = e), (this.logger = t), (this.name = s);
    }
  };
class I6 extends dn {
  constructor(e, t) {
    super(), (this.relayer = e), (this.logger = t);
  }
}
let x6 = class extends dn {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t);
    }
  },
  O6 = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  P6 = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  A6 = class {
    constructor(e) {
      (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  },
  C6 = class {
    constructor(e) {
      this.client = e;
    }
  };
var th = {},
  qp = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Le,
    t = Tr;
  (i.DIGEST_LENGTH = 64), (i.BLOCK_SIZE = 128);
  var s = (function () {
    function d() {
      (this.digestLength = i.DIGEST_LENGTH),
        (this.blockSize = i.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (d.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (d.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (d.prototype.clean = function () {
        t.wipe(this._buffer),
          t.wipe(this._tempHi),
          t.wipe(this._tempLo),
          this.reset();
      }),
      (d.prototype.update = function (p, g) {
        if ((g === void 0 && (g = p.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var v = 0;
        if (((this._bytesHashed += g), this._bufferLength > 0)) {
          for (; this._bufferLength < i.BLOCK_SIZE && g > 0; )
            (this._buffer[this._bufferLength++] = p[v++]), g--;
          this._bufferLength === this.blockSize &&
            (c(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          g >= this.blockSize &&
          ((v = c(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            p,
            v,
            g
          )),
          (g %= this.blockSize));
          g > 0;

        )
          (this._buffer[this._bufferLength++] = p[v++]), g--;
        return this;
      }),
      (d.prototype.finish = function (p) {
        if (!this._finished) {
          var g = this._bytesHashed,
            v = this._bufferLength,
            b = (g / 536870912) | 0,
            O = g << 3,
            P = g % 128 < 112 ? 128 : 256;
          this._buffer[v] = 128;
          for (var S = v + 1; S < P - 8; S++) this._buffer[S] = 0;
          e.writeUint32BE(b, this._buffer, P - 8),
            e.writeUint32BE(O, this._buffer, P - 4),
            c(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              P
            ),
            (this._finished = !0);
        }
        for (var S = 0; S < this.digestLength / 8; S++)
          e.writeUint32BE(this._stateHi[S], p, S * 8),
            e.writeUint32BE(this._stateLo[S], p, S * 8 + 4);
        return this;
      }),
      (d.prototype.digest = function () {
        var p = new Uint8Array(this.digestLength);
        return this.finish(p), p;
      }),
      (d.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (d.prototype.restoreState = function (p) {
        return (
          this._stateHi.set(p.stateHi),
          this._stateLo.set(p.stateLo),
          (this._bufferLength = p.bufferLength),
          p.buffer && this._buffer.set(p.buffer),
          (this._bytesHashed = p.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (d.prototype.cleanSavedState = function (p) {
        t.wipe(p.stateHi),
          t.wipe(p.stateLo),
          p.buffer && t.wipe(p.buffer),
          (p.bufferLength = 0),
          (p.bytesHashed = 0);
      }),
      d
    );
  })();
  i.SHA512 = s;
  var o = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function c(d, p, g, v, b, O, P) {
    for (
      var S = g[0],
        K = g[1],
        H = g[2],
        Z = g[3],
        F = g[4],
        U = g[5],
        I = g[6],
        A = g[7],
        C = v[0],
        h = v[1],
        _ = v[2],
        ee = v[3],
        ne = v[4],
        ue = v[5],
        ge = v[6],
        ye = v[7],
        D,
        R,
        X,
        J,
        k,
        V,
        te,
        ie;
      P >= 128;

    ) {
      for (var De = 0; De < 16; De++) {
        var oe = 8 * De + O;
        (d[De] = e.readUint32BE(b, oe)), (p[De] = e.readUint32BE(b, oe + 4));
      }
      for (var De = 0; De < 80; De++) {
        var Se = S,
          le = K,
          Ce = H,
          B = Z,
          q = F,
          $ = U,
          l = I,
          T = A,
          se = C,
          he = h,
          Ee = _,
          ze = ee,
          ke = ne,
          Ue = ue,
          pt = ge,
          gt = ye;
        if (
          ((D = A),
          (R = ye),
          (k = R & 65535),
          (V = R >>> 16),
          (te = D & 65535),
          (ie = D >>> 16),
          (D =
            ((F >>> 14) | (ne << (32 - 14))) ^
            ((F >>> 18) | (ne << (32 - 18))) ^
            ((ne >>> (41 - 32)) | (F << (32 - (41 - 32))))),
          (R =
            ((ne >>> 14) | (F << (32 - 14))) ^
            ((ne >>> 18) | (F << (32 - 18))) ^
            ((F >>> (41 - 32)) | (ne << (32 - (41 - 32))))),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (D = (F & U) ^ (~F & I)),
          (R = (ne & ue) ^ (~ne & ge)),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (D = o[De * 2]),
          (R = o[De * 2 + 1]),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (D = d[De % 16]),
          (R = p[De % 16]),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (V += k >>> 16),
          (te += V >>> 16),
          (ie += te >>> 16),
          (X = (te & 65535) | (ie << 16)),
          (J = (k & 65535) | (V << 16)),
          (D = X),
          (R = J),
          (k = R & 65535),
          (V = R >>> 16),
          (te = D & 65535),
          (ie = D >>> 16),
          (D =
            ((S >>> 28) | (C << (32 - 28))) ^
            ((C >>> (34 - 32)) | (S << (32 - (34 - 32)))) ^
            ((C >>> (39 - 32)) | (S << (32 - (39 - 32))))),
          (R =
            ((C >>> 28) | (S << (32 - 28))) ^
            ((S >>> (34 - 32)) | (C << (32 - (34 - 32)))) ^
            ((S >>> (39 - 32)) | (C << (32 - (39 - 32))))),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (D = (S & K) ^ (S & H) ^ (K & H)),
          (R = (C & h) ^ (C & _) ^ (h & _)),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (V += k >>> 16),
          (te += V >>> 16),
          (ie += te >>> 16),
          (T = (te & 65535) | (ie << 16)),
          (gt = (k & 65535) | (V << 16)),
          (D = B),
          (R = ze),
          (k = R & 65535),
          (V = R >>> 16),
          (te = D & 65535),
          (ie = D >>> 16),
          (D = X),
          (R = J),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (V += k >>> 16),
          (te += V >>> 16),
          (ie += te >>> 16),
          (B = (te & 65535) | (ie << 16)),
          (ze = (k & 65535) | (V << 16)),
          (K = Se),
          (H = le),
          (Z = Ce),
          (F = B),
          (U = q),
          (I = $),
          (A = l),
          (S = T),
          (h = se),
          (_ = he),
          (ee = Ee),
          (ne = ze),
          (ue = ke),
          (ge = Ue),
          (ye = pt),
          (C = gt),
          De % 16 === 15)
        )
          for (var oe = 0; oe < 16; oe++)
            (D = d[oe]),
              (R = p[oe]),
              (k = R & 65535),
              (V = R >>> 16),
              (te = D & 65535),
              (ie = D >>> 16),
              (D = d[(oe + 9) % 16]),
              (R = p[(oe + 9) % 16]),
              (k += R & 65535),
              (V += R >>> 16),
              (te += D & 65535),
              (ie += D >>> 16),
              (X = d[(oe + 1) % 16]),
              (J = p[(oe + 1) % 16]),
              (D =
                ((X >>> 1) | (J << (32 - 1))) ^
                ((X >>> 8) | (J << (32 - 8))) ^
                (X >>> 7)),
              (R =
                ((J >>> 1) | (X << (32 - 1))) ^
                ((J >>> 8) | (X << (32 - 8))) ^
                ((J >>> 7) | (X << (32 - 7)))),
              (k += R & 65535),
              (V += R >>> 16),
              (te += D & 65535),
              (ie += D >>> 16),
              (X = d[(oe + 14) % 16]),
              (J = p[(oe + 14) % 16]),
              (D =
                ((X >>> 19) | (J << (32 - 19))) ^
                ((J >>> (61 - 32)) | (X << (32 - (61 - 32)))) ^
                (X >>> 6)),
              (R =
                ((J >>> 19) | (X << (32 - 19))) ^
                ((X >>> (61 - 32)) | (J << (32 - (61 - 32)))) ^
                ((J >>> 6) | (X << (32 - 6)))),
              (k += R & 65535),
              (V += R >>> 16),
              (te += D & 65535),
              (ie += D >>> 16),
              (V += k >>> 16),
              (te += V >>> 16),
              (ie += te >>> 16),
              (d[oe] = (te & 65535) | (ie << 16)),
              (p[oe] = (k & 65535) | (V << 16));
      }
      (D = S),
        (R = C),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[0]),
        (R = v[0]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[0] = S = (te & 65535) | (ie << 16)),
        (v[0] = C = (k & 65535) | (V << 16)),
        (D = K),
        (R = h),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[1]),
        (R = v[1]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[1] = K = (te & 65535) | (ie << 16)),
        (v[1] = h = (k & 65535) | (V << 16)),
        (D = H),
        (R = _),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[2]),
        (R = v[2]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[2] = H = (te & 65535) | (ie << 16)),
        (v[2] = _ = (k & 65535) | (V << 16)),
        (D = Z),
        (R = ee),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[3]),
        (R = v[3]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[3] = Z = (te & 65535) | (ie << 16)),
        (v[3] = ee = (k & 65535) | (V << 16)),
        (D = F),
        (R = ne),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[4]),
        (R = v[4]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[4] = F = (te & 65535) | (ie << 16)),
        (v[4] = ne = (k & 65535) | (V << 16)),
        (D = U),
        (R = ue),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[5]),
        (R = v[5]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[5] = U = (te & 65535) | (ie << 16)),
        (v[5] = ue = (k & 65535) | (V << 16)),
        (D = I),
        (R = ge),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[6]),
        (R = v[6]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[6] = I = (te & 65535) | (ie << 16)),
        (v[6] = ge = (k & 65535) | (V << 16)),
        (D = A),
        (R = ye),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[7]),
        (R = v[7]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[7] = A = (te & 65535) | (ie << 16)),
        (v[7] = ye = (k & 65535) | (V << 16)),
        (O += 128),
        (P -= 128);
    }
    return O;
  }
  function f(d) {
    var p = new s();
    p.update(d);
    var g = p.digest();
    return p.clean(), g;
  }
  i.hash = f;
})(qp);
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.convertSecretKeyToX25519 =
      i.convertPublicKeyToX25519 =
      i.verify =
      i.sign =
      i.extractPublicKeyFromSecretKey =
      i.generateKeyPair =
      i.generateKeyPairFromSeed =
      i.SEED_LENGTH =
      i.SECRET_KEY_LENGTH =
      i.PUBLIC_KEY_LENGTH =
      i.SIGNATURE_LENGTH =
        void 0);
  const e = Kn,
    t = qp,
    s = Tr;
  (i.SIGNATURE_LENGTH = 64),
    (i.PUBLIC_KEY_LENGTH = 32),
    (i.SECRET_KEY_LENGTH = 64),
    (i.SEED_LENGTH = 32);
  function o(B) {
    const q = new Float64Array(16);
    if (B) for (let $ = 0; $ < B.length; $++) q[$] = B[$];
    return q;
  }
  const c = new Uint8Array(32);
  c[0] = 9;
  const f = o(),
    d = o([1]),
    p = o([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    g = o([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    v = o([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    b = o([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    O = o([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function P(B, q) {
    for (let $ = 0; $ < 16; $++) B[$] = q[$] | 0;
  }
  function S(B) {
    let q = 1;
    for (let $ = 0; $ < 16; $++) {
      let l = B[$] + q + 65535;
      (q = Math.floor(l / 65536)), (B[$] = l - q * 65536);
    }
    B[0] += q - 1 + 37 * (q - 1);
  }
  function K(B, q, $) {
    const l = ~($ - 1);
    for (let T = 0; T < 16; T++) {
      const se = l & (B[T] ^ q[T]);
      (B[T] ^= se), (q[T] ^= se);
    }
  }
  function H(B, q) {
    const $ = o(),
      l = o();
    for (let T = 0; T < 16; T++) l[T] = q[T];
    S(l), S(l), S(l);
    for (let T = 0; T < 2; T++) {
      $[0] = l[0] - 65517;
      for (let he = 1; he < 15; he++)
        ($[he] = l[he] - 65535 - (($[he - 1] >> 16) & 1)), ($[he - 1] &= 65535);
      $[15] = l[15] - 32767 - (($[14] >> 16) & 1);
      const se = ($[15] >> 16) & 1;
      ($[14] &= 65535), K(l, $, 1 - se);
    }
    for (let T = 0; T < 16; T++)
      (B[2 * T] = l[T] & 255), (B[2 * T + 1] = l[T] >> 8);
  }
  function Z(B, q) {
    let $ = 0;
    for (let l = 0; l < 32; l++) $ |= B[l] ^ q[l];
    return (1 & (($ - 1) >>> 8)) - 1;
  }
  function F(B, q) {
    const $ = new Uint8Array(32),
      l = new Uint8Array(32);
    return H($, B), H(l, q), Z($, l);
  }
  function U(B) {
    const q = new Uint8Array(32);
    return H(q, B), q[0] & 1;
  }
  function I(B, q) {
    for (let $ = 0; $ < 16; $++) B[$] = q[2 * $] + (q[2 * $ + 1] << 8);
    B[15] &= 32767;
  }
  function A(B, q, $) {
    for (let l = 0; l < 16; l++) B[l] = q[l] + $[l];
  }
  function C(B, q, $) {
    for (let l = 0; l < 16; l++) B[l] = q[l] - $[l];
  }
  function h(B, q, $) {
    let l,
      T,
      se = 0,
      he = 0,
      Ee = 0,
      ze = 0,
      ke = 0,
      Ue = 0,
      pt = 0,
      gt = 0,
      je = 0,
      Ie = 0,
      Ne = 0,
      Fe = 0,
      qe = 0,
      Oe = 0,
      $e = 0,
      _e = 0,
      Pe = 0,
      He = 0,
      xe = 0,
      Ve = 0,
      Ge = 0,
      Ze = 0,
      et = 0,
      Je = 0,
      tr = 0,
      lr = 0,
      Qr = 0,
      rr = 0,
      ai = 0,
      Pi = 0,
      Ki = 0,
      Dt = $[0],
      yt = $[1],
      St = $[2],
      It = $[3],
      _t = $[4],
      vt = $[5],
      $t = $[6],
      Lt = $[7],
      xt = $[8],
      Ut = $[9],
      Ot = $[10],
      Ct = $[11],
      Pt = $[12],
      ht = $[13],
      Mt = $[14],
      jt = $[15];
    (l = q[0]),
      (se += l * Dt),
      (he += l * yt),
      (Ee += l * St),
      (ze += l * It),
      (ke += l * _t),
      (Ue += l * vt),
      (pt += l * $t),
      (gt += l * Lt),
      (je += l * xt),
      (Ie += l * Ut),
      (Ne += l * Ot),
      (Fe += l * Ct),
      (qe += l * Pt),
      (Oe += l * ht),
      ($e += l * Mt),
      (_e += l * jt),
      (l = q[1]),
      (he += l * Dt),
      (Ee += l * yt),
      (ze += l * St),
      (ke += l * It),
      (Ue += l * _t),
      (pt += l * vt),
      (gt += l * $t),
      (je += l * Lt),
      (Ie += l * xt),
      (Ne += l * Ut),
      (Fe += l * Ot),
      (qe += l * Ct),
      (Oe += l * Pt),
      ($e += l * ht),
      (_e += l * Mt),
      (Pe += l * jt),
      (l = q[2]),
      (Ee += l * Dt),
      (ze += l * yt),
      (ke += l * St),
      (Ue += l * It),
      (pt += l * _t),
      (gt += l * vt),
      (je += l * $t),
      (Ie += l * Lt),
      (Ne += l * xt),
      (Fe += l * Ut),
      (qe += l * Ot),
      (Oe += l * Ct),
      ($e += l * Pt),
      (_e += l * ht),
      (Pe += l * Mt),
      (He += l * jt),
      (l = q[3]),
      (ze += l * Dt),
      (ke += l * yt),
      (Ue += l * St),
      (pt += l * It),
      (gt += l * _t),
      (je += l * vt),
      (Ie += l * $t),
      (Ne += l * Lt),
      (Fe += l * xt),
      (qe += l * Ut),
      (Oe += l * Ot),
      ($e += l * Ct),
      (_e += l * Pt),
      (Pe += l * ht),
      (He += l * Mt),
      (xe += l * jt),
      (l = q[4]),
      (ke += l * Dt),
      (Ue += l * yt),
      (pt += l * St),
      (gt += l * It),
      (je += l * _t),
      (Ie += l * vt),
      (Ne += l * $t),
      (Fe += l * Lt),
      (qe += l * xt),
      (Oe += l * Ut),
      ($e += l * Ot),
      (_e += l * Ct),
      (Pe += l * Pt),
      (He += l * ht),
      (xe += l * Mt),
      (Ve += l * jt),
      (l = q[5]),
      (Ue += l * Dt),
      (pt += l * yt),
      (gt += l * St),
      (je += l * It),
      (Ie += l * _t),
      (Ne += l * vt),
      (Fe += l * $t),
      (qe += l * Lt),
      (Oe += l * xt),
      ($e += l * Ut),
      (_e += l * Ot),
      (Pe += l * Ct),
      (He += l * Pt),
      (xe += l * ht),
      (Ve += l * Mt),
      (Ge += l * jt),
      (l = q[6]),
      (pt += l * Dt),
      (gt += l * yt),
      (je += l * St),
      (Ie += l * It),
      (Ne += l * _t),
      (Fe += l * vt),
      (qe += l * $t),
      (Oe += l * Lt),
      ($e += l * xt),
      (_e += l * Ut),
      (Pe += l * Ot),
      (He += l * Ct),
      (xe += l * Pt),
      (Ve += l * ht),
      (Ge += l * Mt),
      (Ze += l * jt),
      (l = q[7]),
      (gt += l * Dt),
      (je += l * yt),
      (Ie += l * St),
      (Ne += l * It),
      (Fe += l * _t),
      (qe += l * vt),
      (Oe += l * $t),
      ($e += l * Lt),
      (_e += l * xt),
      (Pe += l * Ut),
      (He += l * Ot),
      (xe += l * Ct),
      (Ve += l * Pt),
      (Ge += l * ht),
      (Ze += l * Mt),
      (et += l * jt),
      (l = q[8]),
      (je += l * Dt),
      (Ie += l * yt),
      (Ne += l * St),
      (Fe += l * It),
      (qe += l * _t),
      (Oe += l * vt),
      ($e += l * $t),
      (_e += l * Lt),
      (Pe += l * xt),
      (He += l * Ut),
      (xe += l * Ot),
      (Ve += l * Ct),
      (Ge += l * Pt),
      (Ze += l * ht),
      (et += l * Mt),
      (Je += l * jt),
      (l = q[9]),
      (Ie += l * Dt),
      (Ne += l * yt),
      (Fe += l * St),
      (qe += l * It),
      (Oe += l * _t),
      ($e += l * vt),
      (_e += l * $t),
      (Pe += l * Lt),
      (He += l * xt),
      (xe += l * Ut),
      (Ve += l * Ot),
      (Ge += l * Ct),
      (Ze += l * Pt),
      (et += l * ht),
      (Je += l * Mt),
      (tr += l * jt),
      (l = q[10]),
      (Ne += l * Dt),
      (Fe += l * yt),
      (qe += l * St),
      (Oe += l * It),
      ($e += l * _t),
      (_e += l * vt),
      (Pe += l * $t),
      (He += l * Lt),
      (xe += l * xt),
      (Ve += l * Ut),
      (Ge += l * Ot),
      (Ze += l * Ct),
      (et += l * Pt),
      (Je += l * ht),
      (tr += l * Mt),
      (lr += l * jt),
      (l = q[11]),
      (Fe += l * Dt),
      (qe += l * yt),
      (Oe += l * St),
      ($e += l * It),
      (_e += l * _t),
      (Pe += l * vt),
      (He += l * $t),
      (xe += l * Lt),
      (Ve += l * xt),
      (Ge += l * Ut),
      (Ze += l * Ot),
      (et += l * Ct),
      (Je += l * Pt),
      (tr += l * ht),
      (lr += l * Mt),
      (Qr += l * jt),
      (l = q[12]),
      (qe += l * Dt),
      (Oe += l * yt),
      ($e += l * St),
      (_e += l * It),
      (Pe += l * _t),
      (He += l * vt),
      (xe += l * $t),
      (Ve += l * Lt),
      (Ge += l * xt),
      (Ze += l * Ut),
      (et += l * Ot),
      (Je += l * Ct),
      (tr += l * Pt),
      (lr += l * ht),
      (Qr += l * Mt),
      (rr += l * jt),
      (l = q[13]),
      (Oe += l * Dt),
      ($e += l * yt),
      (_e += l * St),
      (Pe += l * It),
      (He += l * _t),
      (xe += l * vt),
      (Ve += l * $t),
      (Ge += l * Lt),
      (Ze += l * xt),
      (et += l * Ut),
      (Je += l * Ot),
      (tr += l * Ct),
      (lr += l * Pt),
      (Qr += l * ht),
      (rr += l * Mt),
      (ai += l * jt),
      (l = q[14]),
      ($e += l * Dt),
      (_e += l * yt),
      (Pe += l * St),
      (He += l * It),
      (xe += l * _t),
      (Ve += l * vt),
      (Ge += l * $t),
      (Ze += l * Lt),
      (et += l * xt),
      (Je += l * Ut),
      (tr += l * Ot),
      (lr += l * Ct),
      (Qr += l * Pt),
      (rr += l * ht),
      (ai += l * Mt),
      (Pi += l * jt),
      (l = q[15]),
      (_e += l * Dt),
      (Pe += l * yt),
      (He += l * St),
      (xe += l * It),
      (Ve += l * _t),
      (Ge += l * vt),
      (Ze += l * $t),
      (et += l * Lt),
      (Je += l * xt),
      (tr += l * Ut),
      (lr += l * Ot),
      (Qr += l * Ct),
      (rr += l * Pt),
      (ai += l * ht),
      (Pi += l * Mt),
      (Ki += l * jt),
      (se += 38 * Pe),
      (he += 38 * He),
      (Ee += 38 * xe),
      (ze += 38 * Ve),
      (ke += 38 * Ge),
      (Ue += 38 * Ze),
      (pt += 38 * et),
      (gt += 38 * Je),
      (je += 38 * tr),
      (Ie += 38 * lr),
      (Ne += 38 * Qr),
      (Fe += 38 * rr),
      (qe += 38 * ai),
      (Oe += 38 * Pi),
      ($e += 38 * Ki),
      (T = 1),
      (l = se + T + 65535),
      (T = Math.floor(l / 65536)),
      (se = l - T * 65536),
      (l = he + T + 65535),
      (T = Math.floor(l / 65536)),
      (he = l - T * 65536),
      (l = Ee + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ee = l - T * 65536),
      (l = ze + T + 65535),
      (T = Math.floor(l / 65536)),
      (ze = l - T * 65536),
      (l = ke + T + 65535),
      (T = Math.floor(l / 65536)),
      (ke = l - T * 65536),
      (l = Ue + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ue = l - T * 65536),
      (l = pt + T + 65535),
      (T = Math.floor(l / 65536)),
      (pt = l - T * 65536),
      (l = gt + T + 65535),
      (T = Math.floor(l / 65536)),
      (gt = l - T * 65536),
      (l = je + T + 65535),
      (T = Math.floor(l / 65536)),
      (je = l - T * 65536),
      (l = Ie + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ie = l - T * 65536),
      (l = Ne + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ne = l - T * 65536),
      (l = Fe + T + 65535),
      (T = Math.floor(l / 65536)),
      (Fe = l - T * 65536),
      (l = qe + T + 65535),
      (T = Math.floor(l / 65536)),
      (qe = l - T * 65536),
      (l = Oe + T + 65535),
      (T = Math.floor(l / 65536)),
      (Oe = l - T * 65536),
      (l = $e + T + 65535),
      (T = Math.floor(l / 65536)),
      ($e = l - T * 65536),
      (l = _e + T + 65535),
      (T = Math.floor(l / 65536)),
      (_e = l - T * 65536),
      (se += T - 1 + 37 * (T - 1)),
      (T = 1),
      (l = se + T + 65535),
      (T = Math.floor(l / 65536)),
      (se = l - T * 65536),
      (l = he + T + 65535),
      (T = Math.floor(l / 65536)),
      (he = l - T * 65536),
      (l = Ee + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ee = l - T * 65536),
      (l = ze + T + 65535),
      (T = Math.floor(l / 65536)),
      (ze = l - T * 65536),
      (l = ke + T + 65535),
      (T = Math.floor(l / 65536)),
      (ke = l - T * 65536),
      (l = Ue + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ue = l - T * 65536),
      (l = pt + T + 65535),
      (T = Math.floor(l / 65536)),
      (pt = l - T * 65536),
      (l = gt + T + 65535),
      (T = Math.floor(l / 65536)),
      (gt = l - T * 65536),
      (l = je + T + 65535),
      (T = Math.floor(l / 65536)),
      (je = l - T * 65536),
      (l = Ie + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ie = l - T * 65536),
      (l = Ne + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ne = l - T * 65536),
      (l = Fe + T + 65535),
      (T = Math.floor(l / 65536)),
      (Fe = l - T * 65536),
      (l = qe + T + 65535),
      (T = Math.floor(l / 65536)),
      (qe = l - T * 65536),
      (l = Oe + T + 65535),
      (T = Math.floor(l / 65536)),
      (Oe = l - T * 65536),
      (l = $e + T + 65535),
      (T = Math.floor(l / 65536)),
      ($e = l - T * 65536),
      (l = _e + T + 65535),
      (T = Math.floor(l / 65536)),
      (_e = l - T * 65536),
      (se += T - 1 + 37 * (T - 1)),
      (B[0] = se),
      (B[1] = he),
      (B[2] = Ee),
      (B[3] = ze),
      (B[4] = ke),
      (B[5] = Ue),
      (B[6] = pt),
      (B[7] = gt),
      (B[8] = je),
      (B[9] = Ie),
      (B[10] = Ne),
      (B[11] = Fe),
      (B[12] = qe),
      (B[13] = Oe),
      (B[14] = $e),
      (B[15] = _e);
  }
  function _(B, q) {
    h(B, q, q);
  }
  function ee(B, q) {
    const $ = o();
    let l;
    for (l = 0; l < 16; l++) $[l] = q[l];
    for (l = 253; l >= 0; l--) _($, $), l !== 2 && l !== 4 && h($, $, q);
    for (l = 0; l < 16; l++) B[l] = $[l];
  }
  function ne(B, q) {
    const $ = o();
    let l;
    for (l = 0; l < 16; l++) $[l] = q[l];
    for (l = 250; l >= 0; l--) _($, $), l !== 1 && h($, $, q);
    for (l = 0; l < 16; l++) B[l] = $[l];
  }
  function ue(B, q) {
    const $ = o(),
      l = o(),
      T = o(),
      se = o(),
      he = o(),
      Ee = o(),
      ze = o(),
      ke = o(),
      Ue = o();
    C($, B[1], B[0]),
      C(Ue, q[1], q[0]),
      h($, $, Ue),
      A(l, B[0], B[1]),
      A(Ue, q[0], q[1]),
      h(l, l, Ue),
      h(T, B[3], q[3]),
      h(T, T, g),
      h(se, B[2], q[2]),
      A(se, se, se),
      C(he, l, $),
      C(Ee, se, T),
      A(ze, se, T),
      A(ke, l, $),
      h(B[0], he, Ee),
      h(B[1], ke, ze),
      h(B[2], ze, Ee),
      h(B[3], he, ke);
  }
  function ge(B, q, $) {
    for (let l = 0; l < 4; l++) K(B[l], q[l], $);
  }
  function ye(B, q) {
    const $ = o(),
      l = o(),
      T = o();
    ee(T, q[2]), h($, q[0], T), h(l, q[1], T), H(B, l), (B[31] ^= U($) << 7);
  }
  function D(B, q, $) {
    P(B[0], f), P(B[1], d), P(B[2], d), P(B[3], f);
    for (let l = 255; l >= 0; --l) {
      const T = ($[(l / 8) | 0] >> (l & 7)) & 1;
      ge(B, q, T), ue(q, B), ue(B, B), ge(B, q, T);
    }
  }
  function R(B, q) {
    const $ = [o(), o(), o(), o()];
    P($[0], v), P($[1], b), P($[2], d), h($[3], v, b), D(B, $, q);
  }
  function X(B) {
    if (B.length !== i.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
    const q = (0, t.hash)(B);
    (q[0] &= 248), (q[31] &= 127), (q[31] |= 64);
    const $ = new Uint8Array(32),
      l = [o(), o(), o(), o()];
    R(l, q), ye($, l);
    const T = new Uint8Array(64);
    return T.set(B), T.set($, 32), { publicKey: $, secretKey: T };
  }
  i.generateKeyPairFromSeed = X;
  function J(B) {
    const q = (0, e.randomBytes)(32, B),
      $ = X(q);
    return (0, s.wipe)(q), $;
  }
  i.generateKeyPair = J;
  function k(B) {
    if (B.length !== i.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(B.subarray(32));
  }
  i.extractPublicKeyFromSecretKey = k;
  const V = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function te(B, q) {
    let $, l, T, se;
    for (l = 63; l >= 32; --l) {
      for ($ = 0, T = l - 32, se = l - 12; T < se; ++T)
        (q[T] += $ - 16 * q[l] * V[T - (l - 32)]),
          ($ = Math.floor((q[T] + 128) / 256)),
          (q[T] -= $ * 256);
      (q[T] += $), (q[l] = 0);
    }
    for ($ = 0, T = 0; T < 32; T++)
      (q[T] += $ - (q[31] >> 4) * V[T]), ($ = q[T] >> 8), (q[T] &= 255);
    for (T = 0; T < 32; T++) q[T] -= $ * V[T];
    for (l = 0; l < 32; l++) (q[l + 1] += q[l] >> 8), (B[l] = q[l] & 255);
  }
  function ie(B) {
    const q = new Float64Array(64);
    for (let $ = 0; $ < 64; $++) q[$] = B[$];
    for (let $ = 0; $ < 64; $++) B[$] = 0;
    te(B, q);
  }
  function De(B, q) {
    const $ = new Float64Array(64),
      l = [o(), o(), o(), o()],
      T = (0, t.hash)(B.subarray(0, 32));
    (T[0] &= 248), (T[31] &= 127), (T[31] |= 64);
    const se = new Uint8Array(64);
    se.set(T.subarray(32), 32);
    const he = new t.SHA512();
    he.update(se.subarray(32)), he.update(q);
    const Ee = he.digest();
    he.clean(),
      ie(Ee),
      R(l, Ee),
      ye(se, l),
      he.reset(),
      he.update(se.subarray(0, 32)),
      he.update(B.subarray(32)),
      he.update(q);
    const ze = he.digest();
    ie(ze);
    for (let ke = 0; ke < 32; ke++) $[ke] = Ee[ke];
    for (let ke = 0; ke < 32; ke++)
      for (let Ue = 0; Ue < 32; Ue++) $[ke + Ue] += ze[ke] * T[Ue];
    return te(se.subarray(32), $), se;
  }
  i.sign = De;
  function oe(B, q) {
    const $ = o(),
      l = o(),
      T = o(),
      se = o(),
      he = o(),
      Ee = o(),
      ze = o();
    return (
      P(B[2], d),
      I(B[1], q),
      _(T, B[1]),
      h(se, T, p),
      C(T, T, B[2]),
      A(se, B[2], se),
      _(he, se),
      _(Ee, he),
      h(ze, Ee, he),
      h($, ze, T),
      h($, $, se),
      ne($, $),
      h($, $, T),
      h($, $, se),
      h($, $, se),
      h(B[0], $, se),
      _(l, B[0]),
      h(l, l, se),
      F(l, T) && h(B[0], B[0], O),
      _(l, B[0]),
      h(l, l, se),
      F(l, T)
        ? -1
        : (U(B[0]) === q[31] >> 7 && C(B[0], f, B[0]), h(B[3], B[0], B[1]), 0)
    );
  }
  function Se(B, q, $) {
    const l = new Uint8Array(32),
      T = [o(), o(), o(), o()],
      se = [o(), o(), o(), o()];
    if ($.length !== i.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
    if (oe(se, B)) return !1;
    const he = new t.SHA512();
    he.update($.subarray(0, 32)), he.update(B), he.update(q);
    const Ee = he.digest();
    return (
      ie(Ee), D(T, se, Ee), R(se, $.subarray(32)), ue(T, se), ye(l, T), !Z($, l)
    );
  }
  i.verify = Se;
  function le(B) {
    let q = [o(), o(), o(), o()];
    if (oe(q, B)) throw new Error("Ed25519: invalid public key");
    let $ = o(),
      l = o(),
      T = q[1];
    A($, d, T), C(l, d, T), ee(l, l), h($, $, l);
    let se = new Uint8Array(32);
    return H(se, $), se;
  }
  i.convertPublicKeyToX25519 = le;
  function Ce(B) {
    const q = (0, t.hash)(B.subarray(0, 32));
    (q[0] &= 248), (q[31] &= 127), (q[31] |= 64);
    const $ = new Uint8Array(q.subarray(0, 32));
    return (0, s.wipe)(q), $;
  }
  i.convertSecretKeyToX25519 = Ce;
})(th);
const T6 = "EdDSA",
  R6 = "JWT",
  Bp = ".",
  zp = "base64url",
  N6 = "utf8",
  F6 = "utf8",
  $6 = ":",
  L6 = "did",
  U6 = "key",
  nd = "base58btc",
  M6 = "z",
  j6 = "K36",
  q6 = 32;
function aa(i) {
  return hr(wr(un(i), N6), zp);
}
function Hp(i) {
  const e = wr(j6, nd),
    t = M6 + hr(Eu([e, i]), nd);
  return [L6, U6, t].join($6);
}
function B6(i) {
  return hr(i, zp);
}
function z6(i) {
  return wr([aa(i.header), aa(i.payload)].join(Bp), F6);
}
function H6(i) {
  return [aa(i.header), aa(i.payload), B6(i.signature)].join(Bp);
}
function sd(i = Kn.randomBytes(q6)) {
  return th.generateKeyPairFromSeed(i);
}
async function K6(i, e, t, s, o = ve.fromMiliseconds(Date.now())) {
  const c = { alg: T6, typ: R6 },
    f = Hp(s.publicKey),
    d = o + t,
    p = { iss: f, sub: i, aud: e, iat: o, exp: d },
    g = z6({ header: c, payload: p }),
    v = th.sign(s.secretKey, g);
  return H6({ header: c, payload: p, signature: v });
}
const k6 = "PARSE_ERROR",
  V6 = "INVALID_REQUEST",
  W6 = "METHOD_NOT_FOUND",
  G6 = "INVALID_PARAMS",
  Kp = "INTERNAL_ERROR",
  rh = "SERVER_ERROR",
  Y6 = [-32700, -32600, -32601, -32602, -32603],
  Is = {
    [k6]: { code: -32700, message: "Parse error" },
    [V6]: { code: -32600, message: "Invalid Request" },
    [W6]: { code: -32601, message: "Method not found" },
    [G6]: { code: -32602, message: "Invalid params" },
    [Kp]: { code: -32603, message: "Internal error" },
    [rh]: { code: -32e3, message: "Server error" },
  },
  kp = rh;
function J6(i) {
  return Y6.includes(i);
}
function od(i) {
  return Object.keys(Is).includes(i) ? Is[i] : Is[kp];
}
function Q6(i) {
  const e = Object.values(Is).find((t) => t.code === i);
  return e || Is[kp];
}
function Vp(i, e, t) {
  return i.message.includes("getaddrinfo ENOTFOUND") ||
    i.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${t} RPC url at ${e}`)
    : i;
}
var Wp = {},
  wi = {},
  ad;
function X6() {
  if (ad) return wi;
  (ad = 1),
    Object.defineProperty(wi, "__esModule", { value: !0 }),
    (wi.isBrowserCryptoAvailable =
      wi.getSubtleCrypto =
      wi.getBrowerCrypto =
        void 0);
  function i() {
    return (
      (Jr === null || Jr === void 0 ? void 0 : Jr.crypto) ||
      (Jr === null || Jr === void 0 ? void 0 : Jr.msCrypto) ||
      {}
    );
  }
  wi.getBrowerCrypto = i;
  function e() {
    const s = i();
    return s.subtle || s.webkitSubtle;
  }
  wi.getSubtleCrypto = e;
  function t() {
    return !!i() && !!e();
  }
  return (wi.isBrowserCryptoAvailable = t), wi;
}
var bi = {},
  cd;
function Z6() {
  if (cd) return bi;
  (cd = 1),
    Object.defineProperty(bi, "__esModule", { value: !0 }),
    (bi.isBrowser = bi.isNode = bi.isReactNative = void 0);
  function i() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  bi.isReactNative = i;
  function e() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  bi.isNode = e;
  function t() {
    return !i() && !e();
  }
  return (bi.isBrowser = t), bi;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = Ii;
  e.__exportStar(X6(), i), e.__exportStar(Z6(), i);
})(Wp);
function ih(i = 3) {
  const e = Date.now() * Math.pow(10, i),
    t = Math.floor(Math.random() * Math.pow(10, i));
  return e + t;
}
function Gp(i = 6) {
  return BigInt(ih(i));
}
function Hn(i, e, t) {
  return { id: t || ih(), jsonrpc: "2.0", method: i, params: e };
}
function ba(i, e) {
  return { id: i, jsonrpc: "2.0", result: e };
}
function _a(i, e, t) {
  return { id: i, jsonrpc: "2.0", error: e2(e, t) };
}
function e2(i, e) {
  return typeof i > "u"
    ? od(Kp)
    : (typeof i == "string" &&
        (i = Object.assign(Object.assign({}, od(rh)), { message: i })),
      typeof e < "u" && (i.data = e),
      J6(i.code) && (i = Q6(i.code)),
      i);
}
class t2 {}
class r2 extends t2 {
  constructor() {
    super();
  }
}
class i2 extends r2 {
  constructor(e) {
    super();
  }
}
const n2 = "^https?:",
  s2 = "^wss?:";
function o2(i) {
  const e = i.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length)) return e[0];
}
function Yp(i, e) {
  const t = o2(i);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function ud(i) {
  return Yp(i, n2);
}
function hd(i) {
  return Yp(i, s2);
}
function a2(i) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(i);
}
function Jp(i) {
  return (
    typeof i == "object" && "id" in i && "jsonrpc" in i && i.jsonrpc === "2.0"
  );
}
function nh(i) {
  return Jp(i) && "method" in i;
}
function Ea(i) {
  return Jp(i) && (Si(i) || Yr(i));
}
function Si(i) {
  return "result" in i;
}
function Yr(i) {
  return "error" in i;
}
class xi extends i2 {
  constructor(e) {
    super(e),
      (this.events = new Cr.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(e)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(
      Hn(e.method, e.params || [], e.id || Gp().toString()),
      t
    );
  }
  async requestStrict(e, t) {
    return new Promise(async (s, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (c) {
          o(c);
        }
      this.events.on(`${e.id}`, (c) => {
        Yr(c) ? o(c.error) : s(c.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (c) {
        o(c);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e),
      Ea(e)
        ? this.events.emit(`${e.id}`, e)
        : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e &&
      e.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${e.code} ${
            e.reason ? `(${e.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    (this.connection === e && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof e == "string" &&
        (await this.connection.open(e), (e = this.connection)),
      (this.connection = this.setConnection(e)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (e) => this.onPayload(e)),
      this.connection.on("close", (e) => this.onClose(e)),
      this.connection.on("error", (e) => this.events.emit("error", e)),
      this.connection.on("register_error", (e) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
const c2 = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  u2 = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  ld = (i) => i.split("?")[0],
  fd = 10,
  h2 = c2();
let l2 = class {
  constructor(e) {
    if (
      ((this.url = e),
      (this.events = new Cr.EventEmitter()),
      (this.registering = !1),
      !hd(e))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (s) => {
        this.onClose(s), e();
      }),
        this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(un(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!hd(e))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (c) => {
            this.resetMaxListeners(), o(c);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return o(
                  new Error("WebSocket connection is missing or invalid")
                );
              s(this.socket);
            });
        })
      );
    }
    return (
      (this.url = e),
      (this.registering = !0),
      new Promise((t, s) => {
        const o = new URLSearchParams(e).get("origin"),
          c = Wp.isReactNative()
            ? { headers: { origin: o } }
            : { rejectUnauthorized: !a2(e) },
          f = new h2(e, [], c);
        u2()
          ? (f.onerror = (d) => {
              const p = d;
              s(this.emitError(p.error));
            })
          : f.on("error", (d) => {
              s(this.emitError(d));
            }),
          (f.onopen = () => {
            this.onOpen(f), t(f);
          });
      })
    );
  }
  onOpen(e) {
    (e.onmessage = (t) => this.onPayload(t)),
      (e.onclose = (t) => this.onClose(t)),
      (this.socket = e),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(e) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? Ms(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t),
      o = s.message || s.toString(),
      c = _a(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return Vp(e, ld(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > fd && this.events.setMaxListeners(fd);
  }
  emitError(e) {
    const t = this.parseError(
      new Error(
        (e == null ? void 0 : e.message) ||
          `WebSocket connection failed for host: ${ld(this.url)}`
      )
    );
    return this.events.emit("register_error", t), t;
  }
};
var ca = { exports: {} };
ca.exports;
(function (i, e) {
  var t = 200,
    s = "__lodash_hash_undefined__",
    o = 1,
    c = 2,
    f = 9007199254740991,
    d = "[object Arguments]",
    p = "[object Array]",
    g = "[object AsyncFunction]",
    v = "[object Boolean]",
    b = "[object Date]",
    O = "[object Error]",
    P = "[object Function]",
    S = "[object GeneratorFunction]",
    K = "[object Map]",
    H = "[object Number]",
    Z = "[object Null]",
    F = "[object Object]",
    U = "[object Promise]",
    I = "[object Proxy]",
    A = "[object RegExp]",
    C = "[object Set]",
    h = "[object String]",
    _ = "[object Symbol]",
    ee = "[object Undefined]",
    ne = "[object WeakMap]",
    ue = "[object ArrayBuffer]",
    ge = "[object DataView]",
    ye = "[object Float32Array]",
    D = "[object Float64Array]",
    R = "[object Int8Array]",
    X = "[object Int16Array]",
    J = "[object Int32Array]",
    k = "[object Uint8Array]",
    V = "[object Uint8ClampedArray]",
    te = "[object Uint16Array]",
    ie = "[object Uint32Array]",
    De = /[\\^$.*+?()[\]{}|]/g,
    oe = /^\[object .+?Constructor\]$/,
    Se = /^(?:0|[1-9]\d*)$/,
    le = {};
  (le[ye] =
    le[D] =
    le[R] =
    le[X] =
    le[J] =
    le[k] =
    le[V] =
    le[te] =
    le[ie] =
      !0),
    (le[d] =
      le[p] =
      le[ue] =
      le[v] =
      le[ge] =
      le[b] =
      le[O] =
      le[P] =
      le[K] =
      le[H] =
      le[F] =
      le[A] =
      le[C] =
      le[h] =
      le[ne] =
        !1);
  var Ce = typeof Jr == "object" && Jr && Jr.Object === Object && Jr,
    B = typeof self == "object" && self && self.Object === Object && self,
    q = Ce || B || Function("return this")(),
    $ = e && !e.nodeType && e,
    l = $ && !0 && i && !i.nodeType && i,
    T = l && l.exports === $,
    se = T && Ce.process,
    he = (function () {
      try {
        return se && se.binding && se.binding("util");
      } catch {}
    })(),
    Ee = he && he.isTypedArray;
  function ze(E, L) {
    for (
      var Q = -1, fe = E == null ? 0 : E.length, at = 0, Te = [];
      ++Q < fe;

    ) {
      var ft = E[Q];
      L(ft, Q, E) && (Te[at++] = ft);
    }
    return Te;
  }
  function ke(E, L) {
    for (var Q = -1, fe = L.length, at = E.length; ++Q < fe; ) E[at + Q] = L[Q];
    return E;
  }
  function Ue(E, L) {
    for (var Q = -1, fe = E == null ? 0 : E.length; ++Q < fe; )
      if (L(E[Q], Q, E)) return !0;
    return !1;
  }
  function pt(E, L) {
    for (var Q = -1, fe = Array(E); ++Q < E; ) fe[Q] = L(Q);
    return fe;
  }
  function gt(E) {
    return function (L) {
      return E(L);
    };
  }
  function je(E, L) {
    return E.has(L);
  }
  function Ie(E, L) {
    return E == null ? void 0 : E[L];
  }
  function Ne(E) {
    var L = -1,
      Q = Array(E.size);
    return (
      E.forEach(function (fe, at) {
        Q[++L] = [at, fe];
      }),
      Q
    );
  }
  function Fe(E, L) {
    return function (Q) {
      return E(L(Q));
    };
  }
  function qe(E) {
    var L = -1,
      Q = Array(E.size);
    return (
      E.forEach(function (fe) {
        Q[++L] = fe;
      }),
      Q
    );
  }
  var Oe = Array.prototype,
    $e = Function.prototype,
    _e = Object.prototype,
    Pe = q["__core-js_shared__"],
    He = $e.toString,
    xe = _e.hasOwnProperty,
    Ve = (function () {
      var E = /[^.]+$/.exec((Pe && Pe.keys && Pe.keys.IE_PROTO) || "");
      return E ? "Symbol(src)_1." + E : "";
    })(),
    Ge = _e.toString,
    Ze = RegExp(
      "^" +
        He.call(xe)
          .replace(De, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    et = T ? q.Buffer : void 0,
    Je = q.Symbol,
    tr = q.Uint8Array,
    lr = _e.propertyIsEnumerable,
    Qr = Oe.splice,
    rr = Je ? Je.toStringTag : void 0,
    ai = Object.getOwnPropertySymbols,
    Pi = et ? et.isBuffer : void 0,
    Ki = Fe(Object.keys, Object),
    Dt = Er(q, "DataView"),
    yt = Er(q, "Map"),
    St = Er(q, "Promise"),
    It = Er(q, "Set"),
    _t = Er(q, "WeakMap"),
    vt = Er(Object, "create"),
    $t = ui(Dt),
    Lt = ui(yt),
    xt = ui(St),
    Ut = ui(It),
    Ot = ui(_t),
    Ct = Je ? Je.prototype : void 0,
    Pt = Ct ? Ct.valueOf : void 0;
  function ht(E) {
    var L = -1,
      Q = E == null ? 0 : E.length;
    for (this.clear(); ++L < Q; ) {
      var fe = E[L];
      this.set(fe[0], fe[1]);
    }
  }
  function Mt() {
    (this.__data__ = vt ? vt(null) : {}), (this.size = 0);
  }
  function jt(E) {
    var L = this.has(E) && delete this.__data__[E];
    return (this.size -= L ? 1 : 0), L;
  }
  function Ia(E) {
    var L = this.__data__;
    if (vt) {
      var Q = L[E];
      return Q === s ? void 0 : Q;
    }
    return xe.call(L, E) ? L[E] : void 0;
  }
  function xa(E) {
    var L = this.__data__;
    return vt ? L[E] !== void 0 : xe.call(L, E);
  }
  function Oa(E, L) {
    var Q = this.__data__;
    return (
      (this.size += this.has(E) ? 0 : 1),
      (Q[E] = vt && L === void 0 ? s : L),
      this
    );
  }
  (ht.prototype.clear = Mt),
    (ht.prototype.delete = jt),
    (ht.prototype.get = Ia),
    (ht.prototype.has = xa),
    (ht.prototype.set = Oa);
  function Rr(E) {
    var L = -1,
      Q = E == null ? 0 : E.length;
    for (this.clear(); ++L < Q; ) {
      var fe = E[L];
      this.set(fe[0], fe[1]);
    }
  }
  function Pa() {
    (this.__data__ = []), (this.size = 0);
  }
  function Aa(E) {
    var L = this.__data__,
      Q = ki(L, E);
    if (Q < 0) return !1;
    var fe = L.length - 1;
    return Q == fe ? L.pop() : Qr.call(L, Q, 1), --this.size, !0;
  }
  function Ca(E) {
    var L = this.__data__,
      Q = ki(L, E);
    return Q < 0 ? void 0 : L[Q][1];
  }
  function Ta(E) {
    return ki(this.__data__, E) > -1;
  }
  function Ra(E, L) {
    var Q = this.__data__,
      fe = ki(Q, E);
    return fe < 0 ? (++this.size, Q.push([E, L])) : (Q[fe][1] = L), this;
  }
  (Rr.prototype.clear = Pa),
    (Rr.prototype.delete = Aa),
    (Rr.prototype.get = Ca),
    (Rr.prototype.has = Ta),
    (Rr.prototype.set = Ra);
  function ci(E) {
    var L = -1,
      Q = E == null ? 0 : E.length;
    for (this.clear(); ++L < Q; ) {
      var fe = E[L];
      this.set(fe[0], fe[1]);
    }
  }
  function gn() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ht(),
        map: new (yt || Rr)(),
        string: new ht(),
      });
  }
  function Na(E) {
    var L = Ai(this, E).delete(E);
    return (this.size -= L ? 1 : 0), L;
  }
  function yn(E) {
    return Ai(this, E).get(E);
  }
  function Fa(E) {
    return Ai(this, E).has(E);
  }
  function $a(E, L) {
    var Q = Ai(this, E),
      fe = Q.size;
    return Q.set(E, L), (this.size += Q.size == fe ? 0 : 1), this;
  }
  (ci.prototype.clear = gn),
    (ci.prototype.delete = Na),
    (ci.prototype.get = yn),
    (ci.prototype.has = Fa),
    (ci.prototype.set = $a);
  function vn(E) {
    var L = -1,
      Q = E == null ? 0 : E.length;
    for (this.__data__ = new ci(); ++L < Q; ) this.add(E[L]);
  }
  function Bs(E) {
    return this.__data__.set(E, s), this;
  }
  function zs(E) {
    return this.__data__.has(E);
  }
  (vn.prototype.add = vn.prototype.push = Bs), (vn.prototype.has = zs);
  function zr(E) {
    var L = (this.__data__ = new Rr(E));
    this.size = L.size;
  }
  function La() {
    (this.__data__ = new Rr()), (this.size = 0);
  }
  function Ua(E) {
    var L = this.__data__,
      Q = L.delete(E);
    return (this.size = L.size), Q;
  }
  function Ma(E) {
    return this.__data__.get(E);
  }
  function ja(E) {
    return this.__data__.has(E);
  }
  function Hs(E, L) {
    var Q = this.__data__;
    if (Q instanceof Rr) {
      var fe = Q.__data__;
      if (!yt || fe.length < t - 1)
        return fe.push([E, L]), (this.size = ++Q.size), this;
      Q = this.__data__ = new ci(fe);
    }
    return Q.set(E, L), (this.size = Q.size), this;
  }
  (zr.prototype.clear = La),
    (zr.prototype.delete = Ua),
    (zr.prototype.get = Ma),
    (zr.prototype.has = ja),
    (zr.prototype.set = Hs);
  function Ks(E, L) {
    var Q = bn(E),
      fe = !Q && ro(E),
      at = !Q && !fe && Xn(E),
      Te = !Q && !fe && !at && so(E),
      ft = Q || fe || at || Te,
      qt = ft ? pt(E.length, String) : [],
      Qe = qt.length;
    for (var ct in E)
      (L || xe.call(E, ct)) &&
        !(
          ft &&
          (ct == "length" ||
            (at && (ct == "offset" || ct == "parent")) ||
            (Te &&
              (ct == "buffer" || ct == "byteLength" || ct == "byteOffset")) ||
            Qs(ct, Qe))
        ) &&
        qt.push(ct);
    return qt;
  }
  function ki(E, L) {
    for (var Q = E.length; Q--; ) if (to(E[Q][0], L)) return Q;
    return -1;
  }
  function Jn(E, L, Q) {
    var fe = L(E);
    return bn(E) ? fe : ke(fe, Q(E));
  }
  function Vi(E) {
    return E == null
      ? E === void 0
        ? ee
        : Z
      : rr && rr in Object(E)
      ? Ys(E)
      : za(E);
  }
  function Qn(E) {
    return Gi(E) && Vi(E) == d;
  }
  function Wi(E, L, Q, fe, at) {
    return E === L
      ? !0
      : E == null || L == null || (!Gi(E) && !Gi(L))
      ? E !== E && L !== L
      : ks(E, L, Q, fe, Wi, at);
  }
  function ks(E, L, Q, fe, at, Te) {
    var ft = bn(E),
      qt = bn(L),
      Qe = ft ? p : Xr(E),
      ct = qt ? p : Xr(L);
    (Qe = Qe == d ? F : Qe), (ct = ct == d ? F : ct);
    var Tt = Qe == F,
      fr = ct == F,
      Bt = Qe == ct;
    if (Bt && Xn(E)) {
      if (!Xn(L)) return !1;
      (ft = !0), (Tt = !1);
    }
    if (Bt && !Tt)
      return (
        Te || (Te = new zr()),
        ft || so(E) ? mn(E, L, Q, fe, at, Te) : Ba(E, L, Qe, Q, fe, at, Te)
      );
    if (!(Q & o)) {
      var dt = Tt && xe.call(E, "__wrapped__"),
        ir = fr && xe.call(L, "__wrapped__");
      if (dt || ir) {
        var Hr = dt ? E.value() : E,
          Nr = ir ? L.value() : L;
        return Te || (Te = new zr()), at(Hr, Nr, Q, fe, Te);
      }
    }
    return Bt ? (Te || (Te = new zr()), Gs(E, L, Q, fe, at, Te)) : !1;
  }
  function qa(E) {
    if (!no(E) || Zs(E)) return !1;
    var L = _n(E) ? Ze : oe;
    return L.test(ui(E));
  }
  function Vs(E) {
    return Gi(E) && io(E.length) && !!le[Vi(E)];
  }
  function Ws(E) {
    if (!eo(E)) return Ki(E);
    var L = [];
    for (var Q in Object(E)) xe.call(E, Q) && Q != "constructor" && L.push(Q);
    return L;
  }
  function mn(E, L, Q, fe, at, Te) {
    var ft = Q & o,
      qt = E.length,
      Qe = L.length;
    if (qt != Qe && !(ft && Qe > qt)) return !1;
    var ct = Te.get(E);
    if (ct && Te.get(L)) return ct == L;
    var Tt = -1,
      fr = !0,
      Bt = Q & c ? new vn() : void 0;
    for (Te.set(E, L), Te.set(L, E); ++Tt < qt; ) {
      var dt = E[Tt],
        ir = L[Tt];
      if (fe) var Hr = ft ? fe(ir, dt, Tt, L, E, Te) : fe(dt, ir, Tt, E, L, Te);
      if (Hr !== void 0) {
        if (Hr) continue;
        fr = !1;
        break;
      }
      if (Bt) {
        if (
          !Ue(L, function (Nr, Zr) {
            if (!je(Bt, Zr) && (dt === Nr || at(dt, Nr, Q, fe, Te)))
              return Bt.push(Zr);
          })
        ) {
          fr = !1;
          break;
        }
      } else if (!(dt === ir || at(dt, ir, Q, fe, Te))) {
        fr = !1;
        break;
      }
    }
    return Te.delete(E), Te.delete(L), fr;
  }
  function Ba(E, L, Q, fe, at, Te, ft) {
    switch (Q) {
      case ge:
        if (E.byteLength != L.byteLength || E.byteOffset != L.byteOffset)
          return !1;
        (E = E.buffer), (L = L.buffer);
      case ue:
        return !(E.byteLength != L.byteLength || !Te(new tr(E), new tr(L)));
      case v:
      case b:
      case H:
        return to(+E, +L);
      case O:
        return E.name == L.name && E.message == L.message;
      case A:
      case h:
        return E == L + "";
      case K:
        var qt = Ne;
      case C:
        var Qe = fe & o;
        if ((qt || (qt = qe), E.size != L.size && !Qe)) return !1;
        var ct = ft.get(E);
        if (ct) return ct == L;
        (fe |= c), ft.set(E, L);
        var Tt = mn(qt(E), qt(L), fe, at, Te, ft);
        return ft.delete(E), Tt;
      case _:
        if (Pt) return Pt.call(E) == Pt.call(L);
    }
    return !1;
  }
  function Gs(E, L, Q, fe, at, Te) {
    var ft = Q & o,
      qt = wn(E),
      Qe = qt.length,
      ct = wn(L),
      Tt = ct.length;
    if (Qe != Tt && !ft) return !1;
    for (var fr = Qe; fr--; ) {
      var Bt = qt[fr];
      if (!(ft ? Bt in L : xe.call(L, Bt))) return !1;
    }
    var dt = Te.get(E);
    if (dt && Te.get(L)) return dt == L;
    var ir = !0;
    Te.set(E, L), Te.set(L, E);
    for (var Hr = ft; ++fr < Qe; ) {
      Bt = qt[fr];
      var Nr = E[Bt],
        Zr = L[Bt];
      if (fe) var Zn = ft ? fe(Zr, Nr, Bt, L, E, Te) : fe(Nr, Zr, Bt, E, L, Te);
      if (!(Zn === void 0 ? Nr === Zr || at(Nr, Zr, Q, fe, Te) : Zn)) {
        ir = !1;
        break;
      }
      Hr || (Hr = Bt == "constructor");
    }
    if (ir && !Hr) {
      var Yi = E.constructor,
        Kt = L.constructor;
      Yi != Kt &&
        "constructor" in E &&
        "constructor" in L &&
        !(
          typeof Yi == "function" &&
          Yi instanceof Yi &&
          typeof Kt == "function" &&
          Kt instanceof Kt
        ) &&
        (ir = !1);
    }
    return Te.delete(E), Te.delete(L), ir;
  }
  function wn(E) {
    return Jn(E, ka, Js);
  }
  function Ai(E, L) {
    var Q = E.__data__;
    return Xs(L) ? Q[typeof L == "string" ? "string" : "hash"] : Q.map;
  }
  function Er(E, L) {
    var Q = Ie(E, L);
    return qa(Q) ? Q : void 0;
  }
  function Ys(E) {
    var L = xe.call(E, rr),
      Q = E[rr];
    try {
      E[rr] = void 0;
      var fe = !0;
    } catch {}
    var at = Ge.call(E);
    return fe && (L ? (E[rr] = Q) : delete E[rr]), at;
  }
  var Js = ai
      ? function (E) {
          return E == null
            ? []
            : ((E = Object(E)),
              ze(ai(E), function (L) {
                return lr.call(E, L);
              }));
        }
      : ot,
    Xr = Vi;
  ((Dt && Xr(new Dt(new ArrayBuffer(1))) != ge) ||
    (yt && Xr(new yt()) != K) ||
    (St && Xr(St.resolve()) != U) ||
    (It && Xr(new It()) != C) ||
    (_t && Xr(new _t()) != ne)) &&
    (Xr = function (E) {
      var L = Vi(E),
        Q = L == F ? E.constructor : void 0,
        fe = Q ? ui(Q) : "";
      if (fe)
        switch (fe) {
          case $t:
            return ge;
          case Lt:
            return K;
          case xt:
            return U;
          case Ut:
            return C;
          case Ot:
            return ne;
        }
      return L;
    });
  function Qs(E, L) {
    return (
      (L = L ?? f),
      !!L &&
        (typeof E == "number" || Se.test(E)) &&
        E > -1 &&
        E % 1 == 0 &&
        E < L
    );
  }
  function Xs(E) {
    var L = typeof E;
    return L == "string" || L == "number" || L == "symbol" || L == "boolean"
      ? E !== "__proto__"
      : E === null;
  }
  function Zs(E) {
    return !!Ve && Ve in E;
  }
  function eo(E) {
    var L = E && E.constructor,
      Q = (typeof L == "function" && L.prototype) || _e;
    return E === Q;
  }
  function za(E) {
    return Ge.call(E);
  }
  function ui(E) {
    if (E != null) {
      try {
        return He.call(E);
      } catch {}
      try {
        return E + "";
      } catch {}
    }
    return "";
  }
  function to(E, L) {
    return E === L || (E !== E && L !== L);
  }
  var ro = Qn(
      (function () {
        return arguments;
      })()
    )
      ? Qn
      : function (E) {
          return Gi(E) && xe.call(E, "callee") && !lr.call(E, "callee");
        },
    bn = Array.isArray;
  function Ha(E) {
    return E != null && io(E.length) && !_n(E);
  }
  var Xn = Pi || nt;
  function Ka(E, L) {
    return Wi(E, L);
  }
  function _n(E) {
    if (!no(E)) return !1;
    var L = Vi(E);
    return L == P || L == S || L == g || L == I;
  }
  function io(E) {
    return typeof E == "number" && E > -1 && E % 1 == 0 && E <= f;
  }
  function no(E) {
    var L = typeof E;
    return E != null && (L == "object" || L == "function");
  }
  function Gi(E) {
    return E != null && typeof E == "object";
  }
  var so = Ee ? gt(Ee) : Vs;
  function ka(E) {
    return Ha(E) ? Ks(E) : Ws(E);
  }
  function ot() {
    return [];
  }
  function nt() {
    return !1;
  }
  i.exports = Ka;
})(ca, ca.exports);
var f2 = ca.exports;
const d2 = Rs(f2);
function p2(i, e) {
  return (
    (e = e || {}),
    new Promise(function (t, s) {
      var o = new XMLHttpRequest(),
        c = [],
        f = [],
        d = {},
        p = function () {
          return {
            ok: ((o.status / 100) | 0) == 2,
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function () {
              return Promise.resolve(o.responseText);
            },
            json: function () {
              return Promise.resolve(o.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: p,
            headers: {
              keys: function () {
                return c;
              },
              entries: function () {
                return f;
              },
              get: function (v) {
                return d[v.toLowerCase()];
              },
              has: function (v) {
                return v.toLowerCase() in d;
              },
            },
          };
        };
      for (var g in (o.open(e.method || "get", i, !0),
      (o.onload = function () {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (v, b, O) {
            c.push((b = b.toLowerCase())),
              f.push([b, O]),
              (d[b] = d[b] ? d[b] + "," + O : O);
          }),
          t(p());
      }),
      (o.onerror = s),
      (o.withCredentials = e.credentials == "include"),
      e.headers))
        o.setRequestHeader(g, e.headers[g]);
      o.send(e.body || null);
    })
  );
}
const g2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: p2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dd = qu(g2);
var y2 = self.fetch || (self.fetch = dd.default || dd);
const v2 = Rs(y2);
function m2(i, e) {
  if (i.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var c = i.charAt(o),
      f = c.charCodeAt(0);
    if (t[f] !== 255) throw new TypeError(c + " is ambiguous");
    t[f] = o;
  }
  var d = i.length,
    p = i.charAt(0),
    g = Math.log(d) / Math.log(256),
    v = Math.log(256) / Math.log(d);
  function b(S) {
    if (
      (S instanceof Uint8Array ||
        (ArrayBuffer.isView(S)
          ? (S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength))
          : Array.isArray(S) && (S = Uint8Array.from(S))),
      !(S instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0) return "";
    for (var K = 0, H = 0, Z = 0, F = S.length; Z !== F && S[Z] === 0; )
      Z++, K++;
    for (var U = ((F - Z) * v + 1) >>> 0, I = new Uint8Array(U); Z !== F; ) {
      for (
        var A = S[Z], C = 0, h = U - 1;
        (A !== 0 || C < H) && h !== -1;
        h--, C++
      )
        (A += (256 * I[h]) >>> 0), (I[h] = A % d >>> 0), (A = (A / d) >>> 0);
      if (A !== 0) throw new Error("Non-zero carry");
      (H = C), Z++;
    }
    for (var _ = U - H; _ !== U && I[_] === 0; ) _++;
    for (var ee = p.repeat(K); _ < U; ++_) ee += i.charAt(I[_]);
    return ee;
  }
  function O(S) {
    if (typeof S != "string") throw new TypeError("Expected String");
    if (S.length === 0) return new Uint8Array();
    var K = 0;
    if (S[K] !== " ") {
      for (var H = 0, Z = 0; S[K] === p; ) H++, K++;
      for (
        var F = ((S.length - K) * g + 1) >>> 0, U = new Uint8Array(F);
        S[K];

      ) {
        var I = t[S.charCodeAt(K)];
        if (I === 255) return;
        for (var A = 0, C = F - 1; (I !== 0 || A < Z) && C !== -1; C--, A++)
          (I += (d * U[C]) >>> 0),
            (U[C] = I % 256 >>> 0),
            (I = (I / 256) >>> 0);
        if (I !== 0) throw new Error("Non-zero carry");
        (Z = A), K++;
      }
      if (S[K] !== " ") {
        for (var h = F - Z; h !== F && U[h] === 0; ) h++;
        for (var _ = new Uint8Array(H + (F - h)), ee = H; h !== F; )
          _[ee++] = U[h++];
        return _;
      }
    }
  }
  function P(S) {
    var K = O(S);
    if (K) return K;
    throw new Error(`Non-${e} character`);
  }
  return { encode: b, decodeUnsafe: O, decode: P };
}
var w2 = m2,
  b2 = w2;
const Qp = (i) => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
      return i;
    if (i instanceof ArrayBuffer) return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
      return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  _2 = (i) => new TextEncoder().encode(i),
  E2 = (i) => new TextDecoder().decode(i);
class D2 {
  constructor(e, t, s) {
    (this.name = e), (this.prefix = t), (this.baseEncode = s);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class S2 {
  constructor(e, t, s) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = s);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Xp(this, e);
  }
}
class I2 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Xp(this, e);
  }
  decode(e) {
    const t = e[0],
      s = this.decoders[t];
    if (s) return s.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Xp = (i, e) =>
  new I2({
    ...(i.decoders || { [i.prefix]: i }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class x2 {
  constructor(e, t, s, o) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new D2(e, t, s)),
      (this.decoder = new S2(e, t, o));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Da = ({ name: i, prefix: e, encode: t, decode: s }) => new x2(i, e, t, s),
  qs = ({ prefix: i, name: e, alphabet: t }) => {
    const { encode: s, decode: o } = b2(t, e);
    return Da({ prefix: i, name: e, encode: s, decode: (c) => Qp(o(c)) });
  },
  O2 = (i, e, t, s) => {
    const o = {};
    for (let v = 0; v < e.length; ++v) o[e[v]] = v;
    let c = i.length;
    for (; i[c - 1] === "="; ) --c;
    const f = new Uint8Array(((c * t) / 8) | 0);
    let d = 0,
      p = 0,
      g = 0;
    for (let v = 0; v < c; ++v) {
      const b = o[i[v]];
      if (b === void 0) throw new SyntaxError(`Non-${s} character`);
      (p = (p << t) | b),
        (d += t),
        d >= 8 && ((d -= 8), (f[g++] = 255 & (p >> d)));
    }
    if (d >= t || 255 & (p << (8 - d)))
      throw new SyntaxError("Unexpected end of data");
    return f;
  },
  P2 = (i, e, t) => {
    const s = e[e.length - 1] === "=",
      o = (1 << t) - 1;
    let c = "",
      f = 0,
      d = 0;
    for (let p = 0; p < i.length; ++p)
      for (d = (d << 8) | i[p], f += 8; f > t; )
        (f -= t), (c += e[o & (d >> f)]);
    if ((f && (c += e[o & (d << (t - f))]), s))
      for (; (c.length * t) & 7; ) c += "=";
    return c;
  },
  Jt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) =>
    Da({
      prefix: e,
      name: i,
      encode(o) {
        return P2(o, s, t);
      },
      decode(o) {
        return O2(o, s, t, i);
      },
    }),
  A2 = Da({
    prefix: "\0",
    name: "identity",
    encode: (i) => E2(i),
    decode: (i) => _2(i),
  });
var C2 = Object.freeze({ __proto__: null, identity: A2 });
const T2 = Jt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var R2 = Object.freeze({ __proto__: null, base2: T2 });
const N2 = Jt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var F2 = Object.freeze({ __proto__: null, base8: N2 });
const $2 = qs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var L2 = Object.freeze({ __proto__: null, base10: $2 });
const U2 = Jt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  M2 = Jt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var j2 = Object.freeze({ __proto__: null, base16: U2, base16upper: M2 });
const q2 = Jt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  B2 = Jt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  z2 = Jt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  H2 = Jt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  K2 = Jt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  k2 = Jt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  V2 = Jt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  W2 = Jt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  G2 = Jt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var Y2 = Object.freeze({
  __proto__: null,
  base32: q2,
  base32upper: B2,
  base32pad: z2,
  base32padupper: H2,
  base32hex: K2,
  base32hexupper: k2,
  base32hexpad: V2,
  base32hexpadupper: W2,
  base32z: G2,
});
const J2 = qs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  Q2 = qs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var X2 = Object.freeze({ __proto__: null, base36: J2, base36upper: Q2 });
const Z2 = qs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  eS = qs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var tS = Object.freeze({ __proto__: null, base58btc: Z2, base58flickr: eS });
const rS = Jt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  iS = Jt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  nS = Jt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  sS = Jt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var oS = Object.freeze({
  __proto__: null,
  base64: rS,
  base64pad: iS,
  base64url: nS,
  base64urlpad: sS,
});
const Zp = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  aS = Zp.reduce((i, e, t) => ((i[t] = e), i), []),
  cS = Zp.reduce((i, e, t) => ((i[e.codePointAt(0)] = t), i), []);
function uS(i) {
  return i.reduce((e, t) => ((e += aS[t]), e), "");
}
function hS(i) {
  const e = [];
  for (const t of i) {
    const s = cS[t.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const lS = Da({ prefix: "🚀", name: "base256emoji", encode: uS, decode: hS });
var fS = Object.freeze({ __proto__: null, base256emoji: lS }),
  dS = eg,
  pd = 128,
  pS = 127,
  gS = ~pS,
  yS = Math.pow(2, 31);
function eg(i, e, t) {
  (e = e || []), (t = t || 0);
  for (var s = t; i >= yS; ) (e[t++] = (i & 255) | pd), (i /= 128);
  for (; i & gS; ) (e[t++] = (i & 255) | pd), (i >>>= 7);
  return (e[t] = i | 0), (eg.bytes = t - s + 1), e;
}
var vS = Nu,
  mS = 128,
  gd = 127;
function Nu(i, s) {
  var t = 0,
    s = s || 0,
    o = 0,
    c = s,
    f,
    d = i.length;
  do {
    if (c >= d)
      throw ((Nu.bytes = 0), new RangeError("Could not decode varint"));
    (f = i[c++]),
      (t += o < 28 ? (f & gd) << o : (f & gd) * Math.pow(2, o)),
      (o += 7);
  } while (f >= mS);
  return (Nu.bytes = c - s), t;
}
var wS = Math.pow(2, 7),
  bS = Math.pow(2, 14),
  _S = Math.pow(2, 21),
  ES = Math.pow(2, 28),
  DS = Math.pow(2, 35),
  SS = Math.pow(2, 42),
  IS = Math.pow(2, 49),
  xS = Math.pow(2, 56),
  OS = Math.pow(2, 63),
  PS = function (i) {
    return i < wS
      ? 1
      : i < bS
      ? 2
      : i < _S
      ? 3
      : i < ES
      ? 4
      : i < DS
      ? 5
      : i < SS
      ? 6
      : i < IS
      ? 7
      : i < xS
      ? 8
      : i < OS
      ? 9
      : 10;
  },
  AS = { encode: dS, decode: vS, encodingLength: PS },
  tg = AS;
const yd = (i, e, t = 0) => (tg.encode(i, e, t), e),
  vd = (i) => tg.encodingLength(i),
  Fu = (i, e) => {
    const t = e.byteLength,
      s = vd(i),
      o = s + vd(t),
      c = new Uint8Array(o + t);
    return yd(i, c, 0), yd(t, c, s), c.set(e, o), new CS(i, t, e, c);
  };
class CS {
  constructor(e, t, s, o) {
    (this.code = e), (this.size = t), (this.digest = s), (this.bytes = o);
  }
}
const rg = ({ name: i, code: e, encode: t }) => new TS(i, e, t);
class TS {
  constructor(e, t, s) {
    (this.name = e), (this.code = t), (this.encode = s);
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array
        ? Fu(this.code, t)
        : t.then((s) => Fu(this.code, s));
    } else throw Error("Unknown type, must be binary type");
  }
}
const ig = (i) => async (e) => new Uint8Array(await crypto.subtle.digest(i, e)),
  RS = rg({ name: "sha2-256", code: 18, encode: ig("SHA-256") }),
  NS = rg({ name: "sha2-512", code: 19, encode: ig("SHA-512") });
var FS = Object.freeze({ __proto__: null, sha256: RS, sha512: NS });
const ng = 0,
  $S = "identity",
  sg = Qp,
  LS = (i) => Fu(ng, sg(i)),
  US = { code: ng, name: $S, encode: sg, digest: LS };
var MS = Object.freeze({ __proto__: null, identity: US });
new TextEncoder(), new TextDecoder();
const md = {
  ...C2,
  ...R2,
  ...F2,
  ...L2,
  ...j2,
  ...Y2,
  ...X2,
  ...tS,
  ...oS,
  ...fS,
};
({ ...FS, ...MS });
function og(i) {
  return globalThis.Buffer != null
    ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
    : i;
}
function jS(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? og(globalThis.Buffer.allocUnsafe(i))
    : new Uint8Array(i);
}
function ag(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: { name: i, prefix: e, encode: t },
    decoder: { decode: s },
  };
}
const wd = ag(
    "utf8",
    "u",
    (i) => "u" + new TextDecoder("utf8").decode(i),
    (i) => new TextEncoder().encode(i.substring(1))
  ),
  cu = ag(
    "ascii",
    "a",
    (i) => {
      let e = "a";
      for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
      return e;
    },
    (i) => {
      i = i.substring(1);
      const e = jS(i.length);
      for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
      return e;
    }
  ),
  qS = {
    utf8: wd,
    "utf-8": wd,
    hex: md.base16,
    latin1: cu,
    ascii: cu,
    binary: cu,
    ...md,
  };
function BS(i, e = "utf8") {
  const t = qS[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? og(globalThis.Buffer.from(i, "utf-8"))
    : t.decoder.decode(`${t.prefix}${i}`);
}
const cg = "wc",
  zS = 2,
  sh = "core",
  qi = `${cg}@2:${sh}:`,
  HS = { name: sh, logger: "error" },
  KS = { database: ":memory:" },
  kS = "crypto",
  bd = "client_ed25519_seed",
  VS = ve.ONE_DAY,
  WS = "keychain",
  GS = "0.3",
  YS = "messages",
  JS = "0.3",
  QS = ve.SIX_HOURS,
  XS = "publisher",
  ug = "irn",
  ZS = "error",
  hg = "wss://relay.walletconnect.com",
  _d = "wss://relay.walletconnect.org",
  eI = "relayer",
  er = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  tI = "_subscription",
  _i = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  rI = ve.ONE_SECOND,
  iI = "2.11.2",
  nI = 1e4,
  sI = "0.3",
  oI = "WALLETCONNECT_CLIENT_ID",
  Gr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  aI = "subscription",
  cI = "0.3",
  uI = ve.FIVE_SECONDS * 1e3,
  hI = "pairing",
  lI = "0.3",
  ws = {
    wc_pairingDelete: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Ds = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  ni = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  fI = "history",
  dI = "0.3",
  pI = "expirer",
  Br = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  gI = "0.3",
  uu = "verify-api",
  qn = "https://verify.walletconnect.com",
  $u = "https://verify.walletconnect.org",
  yI = [qn, $u],
  vI = "echo",
  mI = "https://echo.walletconnect.com";
class wI {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.keychain = new Map()),
      (this.name = WS),
      (this.version = GS),
      (this.initialized = !1),
      (this.storagePrefix = qi),
      (this.init = async () => {
        if (!this.initialized) {
          const s = await this.getKeyChain();
          typeof s < "u" && (this.keychain = s), (this.initialized = !0);
        }
      }),
      (this.has = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.set = async (s, o) => {
        this.isInitialized(), this.keychain.set(s, o), await this.persist();
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.keychain.get(s);
        if (typeof o > "u") {
          const { message: c } = ae("NO_MATCHING_KEY", `${this.name}: ${s}`);
          throw new Error(c);
        }
        return o;
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.keychain.delete(s), await this.persist();
      }),
      (this.core = e),
      (this.logger = _r(t, this.name));
  }
  get context() {
    return br(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Pp(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Ap(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class bI {
  constructor(e, t, s) {
    (this.core = e),
      (this.logger = t),
      (this.name = kS),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o))),
      (this.getClientId = async () => {
        this.isInitialized();
        const o = await this.getClientSeed(),
          c = sd(o);
        return Hp(c.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const o = YE();
        return this.setPrivateKey(o.publicKey, o.privateKey);
      }),
      (this.signJWT = async (o) => {
        this.isInitialized();
        const c = await this.getClientSeed(),
          f = sd(c),
          d = Au();
        return await K6(d, o, VS, f);
      }),
      (this.generateSharedKey = (o, c, f) => {
        this.isInitialized();
        const d = this.getPrivateKey(o),
          p = JE(d, c);
        return this.setSymKey(p, f);
      }),
      (this.setSymKey = async (o, c) => {
        this.isInitialized();
        const f = c || QE(o);
        return await this.keychain.set(f, o), f;
      }),
      (this.deleteKeyPair = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.deleteSymKey = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.encode = async (o, c, f) => {
        this.isInitialized();
        const d = Op(f),
          p = un(c);
        if (Ff(d)) {
          const O = d.senderPublicKey,
            P = d.receiverPublicKey;
          o = await this.generateSharedKey(O, P);
        }
        const g = this.getSymKey(o),
          { type: v, senderPublicKey: b } = d;
        return ZE({ type: v, symKey: g, message: p, senderPublicKey: b });
      }),
      (this.decode = async (o, c, f) => {
        this.isInitialized();
        const d = r3(c, f);
        if (Ff(d)) {
          const p = d.receiverPublicKey,
            g = d.senderPublicKey;
          o = await this.generateSharedKey(p, g);
        }
        try {
          const p = this.getSymKey(o),
            g = e3({ symKey: p, encoded: c });
          return Ms(g);
        } catch (p) {
          this.logger.error(
            `Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(p);
        }
      }),
      (this.getPayloadType = (o) => {
        const c = sa(o);
        return $s(c.type);
      }),
      (this.getPayloadSenderPublicKey = (o) => {
        const c = sa(o);
        return c.senderPublicKey ? hr(c.senderPublicKey, ur) : void 0;
      }),
      (this.core = e),
      (this.logger = _r(t, this.name)),
      (this.keychain = s || new wI(this.core, this.logger));
  }
  get context() {
    return br(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(bd);
    } catch {
      (e = Au()), await this.keychain.set(bd, e);
    }
    return BS(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class _I extends _6 {
  constructor(e, t) {
    super(e, t),
      (this.logger = e),
      (this.core = t),
      (this.messages = new Map()),
      (this.name = YS),
      (this.version = JS),
      (this.initialized = !1),
      (this.storagePrefix = qi),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const s = await this.getRelayerMessages();
            typeof s < "u" && (this.messages = s),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (s) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(s);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (s, o) => {
        this.isInitialized();
        const c = zn(o);
        let f = this.messages.get(s);
        return (
          typeof f > "u" && (f = {}),
          typeof f[c] < "u" ||
            ((f[c] = o), this.messages.set(s, f), await this.persist()),
          c
        );
      }),
      (this.get = (s) => {
        this.isInitialized();
        let o = this.messages.get(s);
        return typeof o > "u" && (o = {}), o;
      }),
      (this.has = (s, o) => {
        this.isInitialized();
        const c = this.get(s),
          f = zn(o);
        return typeof c[f] < "u";
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.messages.delete(s), await this.persist();
      }),
      (this.logger = _r(e, this.name)),
      (this.core = t);
  }
  get context() {
    return br(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Pp(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Ap(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class EI extends E6 {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.events = new Cr.EventEmitter()),
      (this.name = XS),
      (this.queue = new Map()),
      (this.publishTimeout = ve.toMiliseconds(ve.TEN_SECONDS * 2)),
      (this.needsTransportRestart = !1),
      (this.publish = async (s, o, c) => {
        var f;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: s, message: o, opts: c },
          });
        try {
          const d = (c == null ? void 0 : c.ttl) || QS,
            p = Cu(c),
            g = (c == null ? void 0 : c.prompt) || !1,
            v = (c == null ? void 0 : c.tag) || 0,
            b = (c == null ? void 0 : c.id) || Gp().toString(),
            O = {
              topic: s,
              message: o,
              opts: { ttl: d, relay: p, prompt: g, tag: v, id: b },
            },
            P = setTimeout(() => this.queue.set(b, O), this.publishTimeout);
          try {
            await await Ps(
              this.rpcPublish(s, o, d, p, g, v, b),
              this.publishTimeout,
              `Failed to publish payload, please try again. id:${b} tag:${v}`
            ),
              this.removeRequestFromQueue(b),
              this.relayer.events.emit(er.publish, O);
          } catch (S) {
            if (
              (this.logger.debug("Publishing Payload stalled"),
              (this.needsTransportRestart = !0),
              (f = c == null ? void 0 : c.internal) != null &&
                f.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(b), S);
            return;
          } finally {
            clearTimeout(P);
          }
          this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: s, message: o, opts: c },
            });
        } catch (d) {
          throw (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(d),
            d)
          );
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.relayer = e),
      (this.logger = _r(t, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return br(this.logger);
  }
  rpcPublish(e, t, s, o, c, f, d) {
    var p, g, v, b;
    const O = {
      method: ea(o.protocol).publish,
      params: { topic: e, message: t, ttl: s, prompt: c, tag: f },
      id: d,
    };
    return (
      cr((p = O.params) == null ? void 0 : p.prompt) &&
        ((g = O.params) == null || delete g.prompt),
      cr((v = O.params) == null ? void 0 : v.tag) &&
        ((b = O.params) == null || delete b.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: O }),
      this.relayer.request(O)
    );
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: s, opts: o } = e;
      await this.publish(t, s, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Yn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(er.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(er.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
  }
}
class DI {
  constructor() {
    (this.map = new Map()),
      (this.set = (e, t) => {
        const s = this.get(e);
        this.exists(e, t) || this.map.set(e, [...s, t]);
      }),
      (this.get = (e) => this.map.get(e) || []),
      (this.exists = (e, t) => this.get(e).includes(t)),
      (this.delete = (e, t) => {
        if (typeof t > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const s = this.get(e);
        if (!this.exists(e, t)) return;
        const o = s.filter((c) => c !== t);
        if (!o.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, o);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var SI = Object.defineProperty,
  II = Object.defineProperties,
  xI = Object.getOwnPropertyDescriptors,
  Ed = Object.getOwnPropertySymbols,
  OI = Object.prototype.hasOwnProperty,
  PI = Object.prototype.propertyIsEnumerable,
  Dd = (i, e, t) =>
    e in i
      ? SI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  bs = (i, e) => {
    for (var t in e || (e = {})) OI.call(e, t) && Dd(i, t, e[t]);
    if (Ed) for (var t of Ed(e)) PI.call(e, t) && Dd(i, t, e[t]);
    return i;
  },
  hu = (i, e) => II(i, xI(e));
class AI extends I6 {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.subscriptions = new Map()),
      (this.topicMap = new DI()),
      (this.events = new Cr.EventEmitter()),
      (this.name = aI),
      (this.version = cI),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = qi),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: s, opts: o },
          });
        try {
          const c = Cu(o),
            f = { topic: s, relay: c };
          this.pending.set(s, f);
          const d = await this.rpcSubscribe(s, c);
          return (
            this.onSubscribe(d, f),
            this.logger.debug("Successfully Subscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: s, opts: o },
            }),
            d
          );
        } catch (c) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(c),
            c)
          );
        }
      }),
      (this.unsubscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (o == null ? void 0 : o.id) < "u"
            ? await this.unsubscribeById(s, o.id, o)
            : await this.unsubscribeByTopic(s, o);
      }),
      (this.isSubscribed = async (s) => {
        if (this.topics.includes(s)) return !0;
        const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
        return await new Promise((c, f) => {
          const d = new ve.Watch();
          d.start(o);
          const p = setInterval(() => {
            !this.pending.has(s) &&
              this.topics.includes(s) &&
              (clearInterval(p), d.stop(o), c(!0)),
              d.elapsed(o) >= uI &&
                (clearInterval(p),
                d.stop(o),
                f(new Error("Subscription resolution timeout")));
          }, this.pollingInterval);
        }).catch(() => !1);
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = e),
      (this.logger = _r(t, this.name)),
      (this.clientId = "");
  }
  get context() {
    return br(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let s = !1;
    try {
      s = this.getSubscription(e).topic === t;
    } catch {}
    return s;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (o) => await this.unsubscribeById(e, o, t)));
  }
  async unsubscribeById(e, t, s) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: e, id: t, opts: s },
      });
    try {
      const o = Cu(s);
      await this.rpcUnsubscribe(e, t, o);
      const c = wt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, c),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: e, id: t, opts: s },
        });
    } catch (o) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(o),
        o)
      );
    }
  }
  async rpcSubscribe(e, t) {
    const s = { method: ea(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await Ps(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(er.connection_stalled);
    }
    return zn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay,
      s = {
        method: ea(t.protocol).batchSubscribe,
        params: { topics: e.map((o) => o.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await Ps(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"),
        this.relayer.events.emit(er.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, s) {
    const o = {
      method: ea(s.protocol).unsubscribe,
      params: { topic: e, id: t },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: o }),
      this.relayer.request(o)
    );
  }
  onSubscribe(e, t) {
    this.setSubscription(e, hu(bs({}, t), { id: e })),
      this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length &&
      e.forEach((t) => {
        this.setSubscription(t.id, bs({}, t)), this.pending.delete(t.topic);
      });
  }
  async onUnsubscribe(e, t, s) {
    this.events.removeAllListeners(t),
      this.hasSubscription(t, e) && this.deleteSubscription(t, s),
      await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) ||
      (this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: t,
      }),
      this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, bs({}, t)),
      this.topicMap.set(t.topic, e),
      this.events.emit(Gr.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: t,
      });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e),
      this.topicMap.delete(s.topic, e),
      this.events.emit(Gr.deleted, hu(bs({}, s), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Gr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Gr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(t),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(t))
        );
      }
      (this.cached = e),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    oi(t) &&
      this.onBatchSubscribe(t.map((s, o) => hu(bs({}, e[o]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }),
      await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Yn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(er.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(er.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(Gr.created, async (e) => {
        const t = Gr.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      }),
      this.events.on(Gr.deleted, async (e) => {
        const t = Gr.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.restartInProgress || (clearInterval(t), e());
        }, this.pollingInterval);
      }));
  }
}
var CI = Object.defineProperty,
  Sd = Object.getOwnPropertySymbols,
  TI = Object.prototype.hasOwnProperty,
  RI = Object.prototype.propertyIsEnumerable,
  Id = (i, e, t) =>
    e in i
      ? CI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  NI = (i, e) => {
    for (var t in e || (e = {})) TI.call(e, t) && Id(i, t, e[t]);
    if (Sd) for (var t of Sd(e)) RI.call(e, t) && Id(i, t, e[t]);
    return i;
  };
class FI extends D6 {
  constructor(e) {
    super(e),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new Cr.EventEmitter()),
      (this.name = eI),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.requestsInFlight = new Map()),
      (this.request = async (t) => {
        this.logger.debug("Publishing Request Payload");
        const s = t.id;
        try {
          await this.toEstablishConnection();
          const o = this.provider.request(t);
          return (
            this.requestsInFlight.set(s, { promise: o, request: t }), await o
          );
        } catch (o) {
          throw (
            (this.logger.debug("Failed to Publish Request"),
            this.logger.error(o),
            o)
          );
        } finally {
          this.requestsInFlight.delete(s);
        }
      }),
      (this.onPayloadHandler = (t) => {
        this.onProviderPayload(t);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(er.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (t) => {
        this.logger.error(t),
          this.events.emit(er.error, t),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(_i.payload, this.onPayloadHandler),
          this.provider.on(_i.connect, this.onConnectHandler),
          this.provider.on(_i.disconnect, this.onDisconnectHandler),
          this.provider.on(_i.error, this.onProviderErrorHandler);
      }),
      (this.core = e.core),
      (this.logger =
        typeof e.logger < "u" && typeof e.logger != "string"
          ? _r(e.logger, this.name)
          : ma(wa({ level: e.logger || ZS }))),
      (this.messages = new _I(this.logger, e.core)),
      (this.subscriber = new AI(this, this.logger)),
      (this.publisher = new EI(this, this.logger)),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || hg),
      (this.projectId = e.projectId),
      (this.bundleId = c3()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${_d}...`
      ),
        await this.restartTransport(_d);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, nI);
  }
  get context() {
    return br(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, s) {
    this.isInitialized(),
      await this.publisher.publish(e, t, s),
      await this.recordMessageEvent({
        topic: e,
        message: t,
        publishedAt: Date.now(),
      });
  }
  async subscribe(e, t) {
    var s;
    this.isInitialized();
    let o =
      ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
    if (o) return o;
    let c;
    const f = (d) => {
      d.topic === e && (this.subscriber.off(Gr.created, f), c());
    };
    return (
      await Promise.all([
        new Promise((d) => {
          (c = d), this.subscriber.on(Gr.created, f);
        }),
        new Promise(async (d) => {
          (o = await this.subscriber.subscribe(e, t)), d();
        }),
      ]),
      o
    );
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.requestsInFlight.size > 0 &&
      (this.logger.debug(
        "Waiting for all in-flight requests to finish before closing transport..."
      ),
      this.requestsInFlight.forEach(async (e) => {
        await e.promise;
      })),
      (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await Ps(
            this.provider.disconnect(),
            1e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(e) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      e &&
        e !== this.relayUrl &&
        ((this.relayUrl = e),
        await this.transportClose(),
        await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((t) => {
            if (!this.initialized) return t();
            this.subscriber.once(Gr.resubscribed, () => {
              t();
            });
          }),
          new Promise(async (t, s) => {
            try {
              await Ps(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`
              );
            } catch (o) {
              s(o);
              return;
            }
            t();
          }),
        ]);
      } catch (t) {
        this.logger.error(t);
        const s = t;
        if (!this.isConnectionStalled(s.message)) throw t;
        this.provider.events.emit(_i.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1),
          (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = e || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await kf()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new xi(
      new l2(
        p3({
          sdkVersion: iI,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: e,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: s } = e;
    await this.messages.set(t, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: s } = e;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!(await this.subscriber.isSubscribed(t)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0
      );
    const o = this.messages.has(t, s);
    return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o;
  }
  async onProviderPayload(e) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: e }),
      nh(e))
    ) {
      if (!e.method.endsWith(tI)) return;
      const t = e.params,
        { topic: s, message: o, publishedAt: c } = t.data,
        f = { topic: s, message: o, publishedAt: c };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(NI({ type: "event", event: t.id }, f)),
        this.events.emit(t.id, f),
        await this.acknowledgePayload(e),
        await this.onMessageEvent(f);
    } else Ea(e) && this.events.emit(er.message_ack, e);
  }
  async onMessageEvent(e) {
    (await this.shouldIgnoreMessageEvent(e)) ||
      (this.events.emit(er.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = ba(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(_i.payload, this.onPayloadHandler),
      this.provider.off(_i.connect, this.onConnectHandler),
      this.provider.off(_i.disconnect, this.onDisconnectHandler),
      this.provider.off(_i.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(er.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await kf();
    cD(async (t) => {
      this.initialized &&
        e !== t &&
        ((e = t),
        t
          ? await this.restartTransport().catch((s) => this.logger.error(s))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(er.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info("attemptToReconnect called. Connecting..."),
      setTimeout(async () => {
        await this.restartTransport().catch((e) => this.logger.error(e));
      }, ve.toMiliseconds(rI)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var $I = Object.defineProperty,
  xd = Object.getOwnPropertySymbols,
  LI = Object.prototype.hasOwnProperty,
  UI = Object.prototype.propertyIsEnumerable,
  Od = (i, e, t) =>
    e in i
      ? $I(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Pd = (i, e) => {
    for (var t in e || (e = {})) LI.call(e, t) && Od(i, t, e[t]);
    if (xd) for (var t of xd(e)) UI.call(e, t) && Od(i, t, e[t]);
    return i;
  };
class Sa extends S6 {
  constructor(e, t, s, o = qi, c = void 0) {
    super(e, t, s, o),
      (this.core = e),
      (this.logger = t),
      (this.name = s),
      (this.map = new Map()),
      (this.version = sI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = qi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((f) => {
            this.getKey && f !== null && !cr(f)
              ? this.map.set(this.getKey(f), f)
              : j3(f)
              ? this.map.set(f.id, f)
              : q3(f) && this.map.set(f.topic, f);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (f, d) => {
        this.isInitialized(),
          this.map.has(f)
            ? await this.update(f, d)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: f,
                value: d,
              }),
              this.map.set(f, d),
              await this.persist());
      }),
      (this.get = (f) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: f }),
        this.getData(f)
      )),
      (this.getAll = (f) => (
        this.isInitialized(),
        f
          ? this.values.filter((d) =>
              Object.keys(f).every((p) => d2(d[p], f[p]))
            )
          : this.values
      )),
      (this.update = async (f, d) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: f,
            update: d,
          });
        const p = Pd(Pd({}, this.getData(f)), d);
        this.map.set(f, p), await this.persist();
      }),
      (this.delete = async (f, d) => {
        this.isInitialized(),
          this.map.has(f) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: f,
              reason: d,
            }),
            this.map.delete(f),
            await this.persist());
      }),
      (this.logger = _r(t, this.name)),
      (this.storagePrefix = o),
      (this.getKey = c);
  }
  get context() {
    return br(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(s), new Error(s));
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class MI {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.name = hI),
      (this.version = lI),
      (this.events = new zu()),
      (this.initialized = !1),
      (this.storagePrefix = qi),
      (this.ignoredPayloadTypes = [ln]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: s }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...s]),
          ]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const s = Au(),
          o = await this.core.crypto.setSymKey(s),
          c = Pr(ve.FIVE_MINUTES),
          f = { protocol: ug },
          d = { topic: o, expiry: c, relay: f, active: !1 },
          p = C3({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: o,
            symKey: s,
            relay: f,
            expiryTimestamp: c,
          });
        return (
          await this.pairings.set(o, d),
          await this.core.relayer.subscribe(o),
          this.core.expirer.set(o, c),
          { topic: o, uri: p }
        );
      }),
      (this.pair = async (s) => {
        this.isInitialized(), this.isValidPair(s);
        const { topic: o, symKey: c, relay: f, expiryTimestamp: d } = qf(s.uri);
        let p;
        if (
          this.pairings.keys.includes(o) &&
          ((p = this.pairings.get(o)), p.active)
        )
          throw new Error(
            `Pairing already exists: ${o}. Please try again with a new connection URI.`
          );
        const g = d || Pr(ve.FIVE_MINUTES),
          v = { topic: o, relay: f, expiry: g, active: !1 };
        return (
          await this.pairings.set(o, v),
          this.core.expirer.set(o, g),
          s.activatePairing && (await this.activate({ topic: o })),
          this.events.emit(Ds.create, v),
          this.core.crypto.keychain.has(o) ||
            (await this.core.crypto.setSymKey(c, o),
            await this.core.relayer.subscribe(o, { relay: f })),
          v
        );
      }),
      (this.activate = async ({ topic: s }) => {
        this.isInitialized();
        const o = Pr(ve.THIRTY_DAYS);
        await this.pairings.update(s, { active: !0, expiry: o }),
          this.core.expirer.set(s, o);
      }),
      (this.ping = async (s) => {
        this.isInitialized(), await this.isValidPing(s);
        const { topic: o } = s;
        if (this.pairings.keys.includes(o)) {
          const c = await this.sendRequest(o, "wc_pairingPing", {}),
            { done: f, resolve: d, reject: p } = jn();
          this.events.once(Ft("pairing_ping", c), ({ error: g }) => {
            g ? p(g) : d();
          }),
            await f();
        }
      }),
      (this.updateExpiry = async ({ topic: s, expiry: o }) => {
        this.isInitialized(), await this.pairings.update(s, { expiry: o });
      }),
      (this.updateMetadata = async ({ topic: s, metadata: o }) => {
        this.isInitialized(),
          await this.pairings.update(s, { peerMetadata: o });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (s) => {
        this.isInitialized(), await this.isValidDisconnect(s);
        const { topic: o } = s;
        this.pairings.keys.includes(o) &&
          (await this.sendRequest(
            o,
            "wc_pairingDelete",
            wt("USER_DISCONNECTED")
          ),
          await this.deletePairing(o));
      }),
      (this.sendRequest = async (s, o, c) => {
        const f = Hn(o, c),
          d = await this.core.crypto.encode(s, f),
          p = ws[o].req;
        return (
          this.core.history.set(s, f), this.core.relayer.publish(s, d, p), f.id
        );
      }),
      (this.sendResult = async (s, o, c) => {
        const f = ba(s, c),
          d = await this.core.crypto.encode(o, f),
          p = await this.core.history.get(o, s),
          g = ws[p.request.method].res;
        await this.core.relayer.publish(o, d, g),
          await this.core.history.resolve(f);
      }),
      (this.sendError = async (s, o, c) => {
        const f = _a(s, c),
          d = await this.core.crypto.encode(o, f),
          p = await this.core.history.get(o, s),
          g = ws[p.request.method]
            ? ws[p.request.method].res
            : ws.unregistered_method.res;
        await this.core.relayer.publish(o, d, g),
          await this.core.history.resolve(f);
      }),
      (this.deletePairing = async (s, o) => {
        await this.core.relayer.unsubscribe(s),
          await Promise.all([
            this.pairings.delete(s, wt("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(s),
            o ? Promise.resolve() : this.core.expirer.del(s),
          ]);
      }),
      (this.cleanup = async () => {
        const s = this.pairings.getAll().filter((o) => ji(o.expiry));
        await Promise.all(s.map((o) => this.deletePairing(o.topic)));
      }),
      (this.onRelayEventRequest = (s) => {
        const { topic: o, payload: c } = s;
        switch (c.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(o, c);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(o, c);
          default:
            return this.onUnknownRpcMethodRequest(o, c);
        }
      }),
      (this.onRelayEventResponse = async (s) => {
        const { topic: o, payload: c } = s,
          f = (await this.core.history.get(o, c.id)).request.method;
        switch (f) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(o, c);
          default:
            return this.onUnknownRpcMethodResponse(f);
        }
      }),
      (this.onPairingPingRequest = async (s, o) => {
        const { id: c } = o;
        try {
          this.isValidPing({ topic: s }),
            await this.sendResult(c, s, !0),
            this.events.emit(Ds.ping, { id: c, topic: s });
        } catch (f) {
          await this.sendError(c, s, f), this.logger.error(f);
        }
      }),
      (this.onPairingPingResponse = (s, o) => {
        const { id: c } = o;
        setTimeout(() => {
          Si(o)
            ? this.events.emit(Ft("pairing_ping", c), {})
            : Yr(o) &&
              this.events.emit(Ft("pairing_ping", c), { error: o.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (s, o) => {
        const { id: c } = o;
        try {
          this.isValidDisconnect({ topic: s }),
            await this.deletePairing(s),
            this.events.emit(Ds.delete, { id: c, topic: s });
        } catch (f) {
          await this.sendError(c, s, f), this.logger.error(f);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (s, o) => {
        const { id: c, method: f } = o;
        try {
          if (this.registeredMethods.includes(f)) return;
          const d = wt("WC_METHOD_UNSUPPORTED", f);
          await this.sendError(c, s, d), this.logger.error(d);
        } catch (d) {
          await this.sendError(c, s, d), this.logger.error(d);
        }
      }),
      (this.onUnknownRpcMethodResponse = (s) => {
        this.registeredMethods.includes(s) ||
          this.logger.error(wt("WC_METHOD_UNSUPPORTED", s));
      }),
      (this.isValidPair = (s) => {
        var o;
        if (!mr(s)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `pair() params: ${s}`
          );
          throw new Error(f);
        }
        if (!M3(s.uri)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `pair() uri: ${s.uri}`
          );
          throw new Error(f);
        }
        const c = qf(s.uri);
        if (!((o = c == null ? void 0 : c.relay) != null && o.protocol)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(f);
        }
        if (!(c != null && c.symKey)) {
          const { message: f } = ae("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(f);
        }
        if (
          c != null &&
          c.expiryTimestamp &&
          ve.toMiliseconds(c == null ? void 0 : c.expiryTimestamp) < Date.now()
        ) {
          const { message: f } = ae(
            "EXPIRED",
            "pair() URI has expired. Please try again with a new connection URI."
          );
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (s) => {
        if (!mr(s)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `ping() params: ${s}`
          );
          throw new Error(c);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidDisconnect = async (s) => {
        if (!mr(s)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `disconnect() params: ${s}`
          );
          throw new Error(c);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidPairingTopic = async (s) => {
        if (!Wt(s, !1)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${s}`
          );
          throw new Error(o);
        }
        if (!this.pairings.keys.includes(s)) {
          const { message: o } = ae(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${s}`
          );
          throw new Error(o);
        }
        if (ji(this.pairings.get(s).expiry)) {
          await this.deletePairing(s);
          const { message: o } = ae("EXPIRED", `pairing topic: ${s}`);
          throw new Error(o);
        }
      }),
      (this.core = e),
      (this.logger = _r(t, this.name)),
      (this.pairings = new Sa(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return br(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(er.message, async (e) => {
      const { topic: t, message: s } = e;
      if (
        !this.pairings.keys.includes(t) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))
      )
        return;
      const o = await this.core.crypto.decode(t, s);
      try {
        nh(o)
          ? (this.core.history.set(t, o),
            this.onRelayEventRequest({ topic: t, payload: o }))
          : Ea(o) &&
            (await this.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: t, payload: o }),
            this.core.history.delete(t, o.id));
      } catch (c) {
        this.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Br.expired, async (e) => {
      const { topic: t } = Tp(e.target);
      t &&
        this.pairings.keys.includes(t) &&
        (await this.deletePairing(t, !0),
        this.events.emit(Ds.expire, { topic: t }));
    });
  }
}
class jI extends b6 {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.records = new Map()),
      (this.events = new Cr.EventEmitter()),
      (this.name = fI),
      (this.version = dI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = qi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.records.set(s.id, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (s, o, c) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: s,
            request: o,
            chainId: c,
          }),
          this.records.has(o.id))
        )
          return;
        const f = {
          id: o.id,
          topic: s,
          request: { method: o.method, params: o.params || null },
          chainId: c,
          expiry: Pr(ve.THIRTY_DAYS),
        };
        this.records.set(f.id, f), this.events.emit(ni.created, f);
      }),
      (this.resolve = async (s) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: s }),
          !this.records.has(s.id))
        )
          return;
        const o = await this.getRecord(s.id);
        typeof o.response > "u" &&
          ((o.response = Yr(s) ? { error: s.error } : { result: s.result }),
          this.records.set(o.id, o),
          this.events.emit(ni.updated, o));
      }),
      (this.get = async (s, o) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: s, id: o }),
        await this.getRecord(o)
      )),
      (this.delete = (s, o) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: o }),
          this.values.forEach((c) => {
            if (c.topic === s) {
              if (typeof o < "u" && c.id !== o) return;
              this.records.delete(c.id), this.events.emit(ni.deleted, c);
            }
          });
      }),
      (this.exists = async (s, o) => (
        this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === s : !1
      )),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = _r(t, this.name));
  }
  get context() {
    return br(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return (
      this.values.forEach((t) => {
        if (typeof t.response < "u") return;
        const s = {
          topic: t.topic,
          request: Hn(t.request.method, t.request.params, t.id),
          chainId: t.chainId,
        };
        return e.push(s);
      }),
      e
    );
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(ni.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(ni.created, (e) => {
      const t = ni.created;
      this.logger.info(`Emitting ${t}`),
        this.logger.debug({ type: "event", event: t, record: e }),
        this.persist();
    }),
      this.events.on(ni.updated, (e) => {
        const t = ni.updated;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e }),
          this.persist();
      }),
      this.events.on(ni.deleted, (e) => {
        const t = ni.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e }),
          this.persist();
      }),
      this.core.heartbeat.on(Yn.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ve.toMiliseconds(e.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${e.id}`),
          this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class qI extends x6 {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.expirations = new Map()),
      (this.events = new Cr.EventEmitter()),
      (this.name = pI),
      (this.version = gI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = qi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.expirations.set(s.target, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (s) => {
        try {
          const o = this.formatTarget(s);
          return typeof this.getExpiration(o) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (s, o) => {
        this.isInitialized();
        const c = this.formatTarget(s),
          f = { target: c, expiry: o };
        this.expirations.set(c, f),
          this.checkExpiry(c, f),
          this.events.emit(Br.created, { target: c, expiration: f });
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.formatTarget(s);
        return this.getExpiration(o);
      }),
      (this.del = (s) => {
        if ((this.isInitialized(), this.has(s))) {
          const o = this.formatTarget(s),
            c = this.getExpiration(o);
          this.expirations.delete(o),
            this.events.emit(Br.deleted, { target: o, expiration: c });
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = _r(t, this.name));
  }
  get context() {
    return br(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return g3(e);
    if (typeof e == "number") return y3(e);
    const { message: t } = ae("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Br.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(s), new Error(s));
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: s } = t;
    ve.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e),
      this.events.emit(Br.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Yn.HEARTBEAT_EVENTS.pulse, () =>
      this.checkExpirations()
    ),
      this.events.on(Br.created, (e) => {
        const t = Br.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(Br.expired, (e) => {
        const t = Br.expired;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(Br.deleted, (e) => {
        const t = Br.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class BI extends O6 {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.name = uu),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (s) => {
        if (this.verifyDisabled || Vn() || !Wn()) return;
        const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        this.verifyUrl !== o && this.removeIframe(), (this.verifyUrl = o);
        try {
          await this.createIframe();
        } catch (c) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(c);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = $u);
          try {
            await this.createIframe();
          } catch (c) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(c),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (s) => {
        this.initialized
          ? this.sendPost(s.attestationId)
          : (this.addToQueue(s.attestationId), await this.init());
      }),
      (this.resolve = async (s) => {
        if (this.isDevEnv) return "";
        const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        let c;
        try {
          c = await this.fetchAttestation(s.attestationId, o);
        } catch (f) {
          this.logger.info(
            `failed to resolve attestation: ${s.attestationId} from url: ${o}`
          ),
            this.logger.info(f),
            (c = await this.fetchAttestation(s.attestationId, $u));
        }
        return c;
      }),
      (this.fetchAttestation = async (s, o) => {
        this.logger.info(`resolving attestation: ${s} from url: ${o}`);
        const c = this.startAbortTimer(ve.ONE_SECOND * 2),
          f = await fetch(`${o}/attestation/${s}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(c), f.status === 200 ? await f.json() : void 0;
      }),
      (this.addToQueue = (s) => {
        this.queue.push(s);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((s) => this.sendPost(s)), (this.queue = []));
      }),
      (this.sendPost = (s) => {
        var o;
        try {
          if (!this.iframe) return;
          (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"),
            this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let s;
        const o = (c) => {
          c.data === "verify_ready" &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener("message", o),
            s());
        };
        await Promise.race([
          new Promise((c) => {
            if (document.getElementById(uu)) return c();
            window.addEventListener("message", o);
            const f = document.createElement("iframe");
            (f.id = uu),
              (f.src = `${this.verifyUrl}/${this.projectId}`),
              (f.style.display = "none"),
              document.body.append(f),
              (this.iframe = f),
              (s = c);
          }),
          new Promise((c, f) =>
            setTimeout(() => {
              window.removeEventListener("message", o),
                f("verify iframe load timeout");
            }, ve.toMiliseconds(ve.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (s) => {
        let o = s || qn;
        return (
          yI.includes(o) ||
            (this.logger.info(
              `verify url: ${o}, not included in trusted list, assigning default: ${qn}`
            ),
            (o = qn)),
          o
        );
      }),
      (this.logger = _r(t, this.name)),
      (this.verifyUrl = qn),
      (this.abortController = new AbortController()),
      (this.isDevEnv = Xu() && {}.IS_VITEST);
  }
  get context() {
    return br(this.logger);
  }
  startAbortTimer(e) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), ve.toMiliseconds(e))
    );
  }
}
class zI extends P6 {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.context = vI),
      (this.registerDeviceToken = async (s) => {
        const {
            clientId: o,
            token: c,
            notificationType: f,
            enableEncrypted: d = !1,
          } = s,
          p = `${mI}/${this.projectId}/clients`;
        await v2(p, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_id: o,
            type: f,
            token: c,
            always_raw: d,
          }),
        });
      }),
      (this.logger = _r(t, this.context));
  }
}
var HI = Object.defineProperty,
  Ad = Object.getOwnPropertySymbols,
  KI = Object.prototype.hasOwnProperty,
  kI = Object.prototype.propertyIsEnumerable,
  Cd = (i, e, t) =>
    e in i
      ? HI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Td = (i, e) => {
    for (var t in e || (e = {})) KI.call(e, t) && Cd(i, t, e[t]);
    if (Ad) for (var t of Ad(e)) kI.call(e, t) && Cd(i, t, e[t]);
    return i;
  };
class oh extends w6 {
  constructor(e) {
    super(e),
      (this.protocol = cg),
      (this.version = zS),
      (this.name = sh),
      (this.events = new Cr.EventEmitter()),
      (this.initialized = !1),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.projectId = e == null ? void 0 : e.projectId),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || hg),
      (this.customStoragePrefix =
        e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "");
    const t =
      typeof (e == null ? void 0 : e.logger) < "u" &&
      typeof (e == null ? void 0 : e.logger) != "string"
        ? e.logger
        : ma(wa({ level: (e == null ? void 0 : e.logger) || HS.logger }));
    (this.logger = _r(t, this.name)),
      (this.heartbeat = new Yn.HeartBeat()),
      (this.crypto = new bI(
        this,
        this.logger,
        e == null ? void 0 : e.keychain
      )),
      (this.history = new jI(this, this.logger)),
      (this.expirer = new qI(this, this.logger)),
      (this.storage =
        e != null && e.storage
          ? e.storage
          : new zD(Td(Td({}, KS), e == null ? void 0 : e.storageOptions))),
      (this.relayer = new FI({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new MI(this, this.logger)),
      (this.verify = new BI(this.projectId || "", this.logger)),
      (this.echoClient = new zI(this.projectId || "", this.logger));
  }
  static async init(e) {
    const t = new oh(e);
    await t.initialize();
    const s = await t.crypto.getClientId();
    return await t.storage.setItem(oI, s), t;
  }
  get context() {
    return br(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (e) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          e
        ),
        this.logger.error(e.message),
        e)
      );
    }
  }
}
const VI = oh,
  lg = "wc",
  fg = 2,
  dg = "client",
  ah = `${lg}@${fg}:${dg}:`,
  lu = {
    name: dg,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  Rd = "WALLETCONNECT_DEEPLINK_CHOICE",
  WI = "proposal",
  pg = "Proposal expired",
  GI = "session",
  Jo = ve.SEVEN_DAYS,
  YI = "engine",
  Ei = {
    wc_sessionPropose: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  fu = { min: ve.FIVE_MINUTES, max: ve.SEVEN_DAYS },
  Di = { idle: "IDLE", active: "ACTIVE" },
  JI = "request",
  QI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var XI = Object.defineProperty,
  ZI = Object.defineProperties,
  e5 = Object.getOwnPropertyDescriptors,
  Nd = Object.getOwnPropertySymbols,
  t5 = Object.prototype.hasOwnProperty,
  r5 = Object.prototype.propertyIsEnumerable,
  Fd = (i, e, t) =>
    e in i
      ? XI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  ar = (i, e) => {
    for (var t in e || (e = {})) t5.call(e, t) && Fd(i, t, e[t]);
    if (Nd) for (var t of Nd(e)) r5.call(e, t) && Fd(i, t, e[t]);
    return i;
  },
  Mn = (i, e) => ZI(i, e5(e));
class i5 extends C6 {
  constructor(e) {
    super(e),
      (this.name = YI),
      (this.events = new zu()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [ln]),
      (this.requestQueue = { state: Di.idle, queue: [] }),
      (this.sessionRequestQueue = { state: Di.idle, queue: [] }),
      (this.requestQueueDelay = ve.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(Ei) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, ve.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (t) => {
        await this.isInitialized();
        const s = Mn(ar({}, t), {
          requiredNamespaces: t.requiredNamespaces || {},
          optionalNamespaces: t.optionalNamespaces || {},
        });
        await this.isValidConnect(s);
        const {
          pairingTopic: o,
          requiredNamespaces: c,
          optionalNamespaces: f,
          sessionProperties: d,
          relays: p,
        } = s;
        let g = o,
          v,
          b = !1;
        if (
          (g && (b = this.client.core.pairing.pairings.get(g).active), !g || !b)
        ) {
          const { topic: I, uri: A } = await this.client.core.pairing.create();
          (g = I), (v = A);
        }
        const O = await this.client.core.crypto.generateKeyPair(),
          P = Ei.wc_sessionPropose.req.ttl || ve.FIVE_MINUTES,
          S = Pr(P),
          K = ar(
            {
              requiredNamespaces: c,
              optionalNamespaces: f,
              relays: p ?? [{ protocol: ug }],
              proposer: { publicKey: O, metadata: this.client.metadata },
              expiryTimestamp: S,
            },
            d && { sessionProperties: d }
          ),
          { reject: H, resolve: Z, done: F } = jn(P, pg);
        if (
          (this.events.once(
            Ft("session_connect"),
            async ({ error: I, session: A }) => {
              if (I) H(I);
              else if (A) {
                A.self.publicKey = O;
                const C = Mn(ar({}, A), {
                  requiredNamespaces: K.requiredNamespaces,
                  optionalNamespaces: K.optionalNamespaces,
                });
                await this.client.session.set(A.topic, C),
                  await this.setExpiry(A.topic, A.expiry),
                  g &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: g,
                      metadata: A.peer.metadata,
                    })),
                  Z(C);
              }
            }
          ),
          !g)
        ) {
          const { message: I } = ae(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${g}`
          );
          throw new Error(I);
        }
        const U = await this.sendRequest({
          topic: g,
          method: "wc_sessionPropose",
          params: K,
          throwOnFailedPublish: !0,
        });
        return (
          await this.setProposal(U, ar({ id: U }, K)), { uri: v, approval: F }
        );
      }),
      (this.pair = async (t) => (
        await this.isInitialized(), await this.client.core.pairing.pair(t)
      )),
      (this.approve = async (t) => {
        await this.isInitialized(), await this.isValidApprove(t);
        const {
            id: s,
            relayProtocol: o,
            namespaces: c,
            sessionProperties: f,
          } = t,
          d = this.client.proposal.get(s);
        let {
          pairingTopic: p,
          proposer: g,
          requiredNamespaces: v,
          optionalNamespaces: b,
        } = d;
        p = p || "";
        const O = await this.client.core.crypto.generateKeyPair(),
          P = g.publicKey,
          S = await this.client.core.crypto.generateSharedKey(O, P);
        p &&
          s &&
          (await this.client.core.pairing.updateMetadata({
            topic: p,
            metadata: g.metadata,
          }),
          await this.sendResult({
            id: s,
            topic: p,
            result: { relay: { protocol: o ?? "irn" }, responderPublicKey: O },
          }),
          await this.client.proposal.delete(s, wt("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: p }));
        const K = ar(
          {
            relay: { protocol: o ?? "irn" },
            namespaces: c,
            pairingTopic: p,
            controller: { publicKey: O, metadata: this.client.metadata },
            expiry: Pr(Jo),
          },
          f && { sessionProperties: f }
        );
        await this.client.core.relayer.subscribe(S);
        const H = Mn(ar({}, K), {
          topic: S,
          requiredNamespaces: v,
          optionalNamespaces: b,
          pairingTopic: p,
          acknowledged: !1,
          self: K.controller,
          peer: { publicKey: g.publicKey, metadata: g.metadata },
          controller: O,
        });
        await this.client.session.set(S, H);
        try {
          await this.sendRequest({
            topic: S,
            method: "wc_sessionSettle",
            params: K,
            throwOnFailedPublish: !0,
          });
        } catch (Z) {
          throw (
            (this.client.logger.error(Z),
            this.client.session.delete(S, wt("USER_DISCONNECTED")),
            await this.client.core.relayer.unsubscribe(S),
            Z)
          );
        }
        return (
          await this.setExpiry(S, Pr(Jo)),
          {
            topic: S,
            acknowledged: () =>
              new Promise((Z) =>
                setTimeout(() => Z(this.client.session.get(S)), 500)
              ),
          }
        );
      }),
      (this.reject = async (t) => {
        await this.isInitialized(), await this.isValidReject(t);
        const { id: s, reason: o } = t,
          { pairingTopic: c } = this.client.proposal.get(s);
        c &&
          (await this.sendError(s, c, o),
          await this.client.proposal.delete(s, wt("USER_DISCONNECTED")));
      }),
      (this.update = async (t) => {
        await this.isInitialized(), await this.isValidUpdate(t);
        const { topic: s, namespaces: o } = t,
          c = await this.sendRequest({
            topic: s,
            method: "wc_sessionUpdate",
            params: { namespaces: o },
          }),
          { done: f, resolve: d, reject: p } = jn();
        return (
          this.events.once(Ft("session_update", c), ({ error: g }) => {
            g ? p(g) : d();
          }),
          await this.client.session.update(s, { namespaces: o }),
          { acknowledged: f }
        );
      }),
      (this.extend = async (t) => {
        await this.isInitialized(), await this.isValidExtend(t);
        const { topic: s } = t,
          o = await this.sendRequest({
            topic: s,
            method: "wc_sessionExtend",
            params: {},
          }),
          { done: c, resolve: f, reject: d } = jn();
        return (
          this.events.once(Ft("session_extend", o), ({ error: p }) => {
            p ? d(p) : f();
          }),
          await this.setExpiry(s, Pr(Jo)),
          { acknowledged: c }
        );
      }),
      (this.request = async (t) => {
        await this.isInitialized(), await this.isValidRequest(t);
        const {
            chainId: s,
            request: o,
            topic: c,
            expiry: f = Ei.wc_sessionRequest.req.ttl,
          } = t,
          d = ih(),
          {
            done: p,
            resolve: g,
            reject: v,
          } = jn(f, "Request expired. Please try again.");
        return (
          this.events.once(
            Ft("session_request", d),
            ({ error: b, result: O }) => {
              b ? v(b) : g(O);
            }
          ),
          await Promise.all([
            new Promise(async (b) => {
              await this.sendRequest({
                clientRpcId: d,
                topic: c,
                method: "wc_sessionRequest",
                params: {
                  request: Mn(ar({}, o), { expiryTimestamp: Pr(f) }),
                  chainId: s,
                },
                expiry: f,
                throwOnFailedPublish: !0,
              }).catch((O) => v(O)),
                this.client.events.emit("session_request_sent", {
                  topic: c,
                  request: o,
                  chainId: s,
                  id: d,
                }),
                b();
            }),
            new Promise(async (b) => {
              const O = await m3(this.client.core.storage, Rd);
              v3({ id: d, topic: c, wcDeepLink: O }), b();
            }),
            p(),
          ]).then((b) => b[2])
        );
      }),
      (this.respond = async (t) => {
        await this.isInitialized(), await this.isValidRespond(t);
        const { topic: s, response: o } = t,
          { id: c } = o;
        Si(o)
          ? await this.sendResult({
              id: c,
              topic: s,
              result: o.result,
              throwOnFailedPublish: !0,
            })
          : Yr(o) && (await this.sendError(c, s, o.error)),
          this.cleanupAfterResponse(t);
      }),
      (this.ping = async (t) => {
        await this.isInitialized(), await this.isValidPing(t);
        const { topic: s } = t;
        if (this.client.session.keys.includes(s)) {
          const o = await this.sendRequest({
              topic: s,
              method: "wc_sessionPing",
              params: {},
            }),
            { done: c, resolve: f, reject: d } = jn();
          this.events.once(Ft("session_ping", o), ({ error: p }) => {
            p ? d(p) : f();
          }),
            await c();
        } else
          this.client.core.pairing.pairings.keys.includes(s) &&
            (await this.client.core.pairing.ping({ topic: s }));
      }),
      (this.emit = async (t) => {
        await this.isInitialized(), await this.isValidEmit(t);
        const { topic: s, event: o, chainId: c } = t;
        await this.sendRequest({
          topic: s,
          method: "wc_sessionEvent",
          params: { event: o, chainId: c },
        });
      }),
      (this.disconnect = async (t) => {
        await this.isInitialized(), await this.isValidDisconnect(t);
        const { topic: s } = t;
        if (this.client.session.keys.includes(s))
          await this.sendRequest({
            topic: s,
            method: "wc_sessionDelete",
            params: wt("USER_DISCONNECTED"),
            throwOnFailedPublish: !0,
          }),
            await this.deleteSession({ topic: s, emitEvent: !1 });
        else if (this.client.core.pairing.pairings.keys.includes(s))
          await this.client.core.pairing.disconnect({ topic: s });
        else {
          const { message: o } = ae(
            "MISMATCHED_TOPIC",
            `Session or pairing topic not found: ${s}`
          );
          throw new Error(o);
        }
      }),
      (this.find = (t) => (
        this.isInitialized(),
        this.client.session.getAll().filter((s) => L3(s, t))
      )),
      (this.getPendingSessionRequests = () =>
        this.client.pendingRequest.getAll()),
      (this.cleanupDuplicatePairings = async (t) => {
        if (t.pairingTopic)
          try {
            const s = this.client.core.pairing.pairings.get(t.pairingTopic),
              o = this.client.core.pairing.pairings.getAll().filter((c) => {
                var f, d;
                return (
                  ((f = c.peerMetadata) == null ? void 0 : f.url) &&
                  ((d = c.peerMetadata) == null ? void 0 : d.url) ===
                    t.peer.metadata.url &&
                  c.topic &&
                  c.topic !== s.topic
                );
              });
            if (o.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${o.length} duplicate pairing(s)`
            ),
              await Promise.all(
                o.map((c) =>
                  this.client.core.pairing.disconnect({ topic: c.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (s) {
            this.client.logger.error(s);
          }
      }),
      (this.deleteSession = async (t) => {
        const {
            topic: s,
            expirerHasDeleted: o = !1,
            emitEvent: c = !0,
            id: f = 0,
          } = t,
          { self: d } = this.client.session.get(s);
        await this.client.core.relayer.unsubscribe(s),
          await this.client.session.delete(s, wt("USER_DISCONNECTED")),
          this.client.core.crypto.keychain.has(d.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(d.publicKey)),
          this.client.core.crypto.keychain.has(s) &&
            (await this.client.core.crypto.deleteSymKey(s)),
          o || this.client.core.expirer.del(s),
          this.client.core.storage
            .removeItem(Rd)
            .catch((p) => this.client.logger.warn(p)),
          this.getPendingSessionRequests().forEach((p) => {
            p.topic === s &&
              this.deletePendingSessionRequest(p.id, wt("USER_DISCONNECTED"));
          }),
          c && this.client.events.emit("session_delete", { id: f, topic: s });
      }),
      (this.deleteProposal = async (t, s) => {
        await Promise.all([
          this.client.proposal.delete(t, wt("USER_DISCONNECTED")),
          s ? Promise.resolve() : this.client.core.expirer.del(t),
        ]);
      }),
      (this.deletePendingSessionRequest = async (t, s, o = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(t, s),
          o ? Promise.resolve() : this.client.core.expirer.del(t),
        ]),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((c) => c.id !== t)),
          o &&
            ((this.sessionRequestQueue.state = Di.idle),
            this.client.events.emit("session_request_expire", { id: t }));
      }),
      (this.setExpiry = async (t, s) => {
        this.client.session.keys.includes(t) &&
          (await this.client.session.update(t, { expiry: s })),
          this.client.core.expirer.set(t, s);
      }),
      (this.setProposal = async (t, s) => {
        await this.client.proposal.set(t, s),
          this.client.core.expirer.set(t, Pr(Ei.wc_sessionPropose.req.ttl));
      }),
      (this.setPendingSessionRequest = async (t) => {
        const { id: s, topic: o, params: c, verifyContext: f } = t,
          d = c.request.expiryTimestamp || Pr(Ei.wc_sessionRequest.req.ttl);
        await this.client.pendingRequest.set(s, {
          id: s,
          topic: o,
          params: c,
          verifyContext: f,
        }),
          d && this.client.core.expirer.set(s, d);
      }),
      (this.sendRequest = async (t) => {
        const {
            topic: s,
            method: o,
            params: c,
            expiry: f,
            relayRpcId: d,
            clientRpcId: p,
            throwOnFailedPublish: g,
          } = t,
          v = Hn(o, c, p);
        if (Wn() && QI.includes(o)) {
          const P = zn(JSON.stringify(v));
          this.client.core.verify.register({ attestationId: P });
        }
        const b = await this.client.core.crypto.encode(s, v),
          O = Ei[o].req;
        return (
          f && (O.ttl = f),
          d && (O.id = d),
          this.client.core.history.set(s, v),
          g
            ? ((O.internal = Mn(ar({}, O.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(s, b, O))
            : this.client.core.relayer
                .publish(s, b, O)
                .catch((P) => this.client.logger.error(P)),
          v.id
        );
      }),
      (this.sendResult = async (t) => {
        const { id: s, topic: o, result: c, throwOnFailedPublish: f } = t,
          d = ba(s, c),
          p = await this.client.core.crypto.encode(o, d),
          g = await this.client.core.history.get(o, s),
          v = Ei[g.request.method].res;
        f
          ? ((v.internal = Mn(ar({}, v.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(o, p, v))
          : this.client.core.relayer
              .publish(o, p, v)
              .catch((b) => this.client.logger.error(b)),
          await this.client.core.history.resolve(d);
      }),
      (this.sendError = async (t, s, o) => {
        const c = _a(t, o),
          f = await this.client.core.crypto.encode(s, c),
          d = await this.client.core.history.get(s, t),
          p = Ei[d.request.method].res;
        this.client.core.relayer.publish(s, f, p),
          await this.client.core.history.resolve(c);
      }),
      (this.cleanup = async () => {
        const t = [],
          s = [];
        this.client.session.getAll().forEach((o) => {
          let c = !1;
          ji(o.expiry) && (c = !0),
            this.client.core.crypto.keychain.has(o.topic) || (c = !0),
            c && t.push(o.topic);
        }),
          this.client.proposal.getAll().forEach((o) => {
            ji(o.expiryTimestamp) && s.push(o.id);
          }),
          await Promise.all([
            ...t.map((o) => this.deleteSession({ topic: o })),
            ...s.map((o) => this.deleteProposal(o)),
          ]);
      }),
      (this.onRelayEventRequest = async (t) => {
        this.requestQueue.queue.push(t), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === Di.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = Di.active;
          const t = this.requestQueue.queue.shift();
          if (t)
            try {
              this.processRequest(t),
                await new Promise((s) => setTimeout(s, 300));
            } catch (s) {
              this.client.logger.warn(s);
            }
        }
        this.requestQueue.state = Di.idle;
      }),
      (this.processRequest = (t) => {
        const { topic: s, payload: o } = t,
          c = o.method;
        switch (c) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(s, o);
          case "wc_sessionPing":
            return this.onSessionPingRequest(s, o);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequest(s, o);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(s, o);
          default:
            return this.client.logger.info(`Unsupported request method ${c}`);
        }
      }),
      (this.onRelayEventResponse = async (t) => {
        const { topic: s, payload: o } = t,
          c = (await this.client.core.history.get(s, o.id)).request.method;
        switch (c) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(s, o);
          case "wc_sessionPing":
            return this.onSessionPingResponse(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(s, o);
          default:
            return this.client.logger.info(`Unsupported response method ${c}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (t) => {
        const { topic: s } = t,
          { message: o } = ae(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(o);
      }),
      (this.onSessionProposeRequest = async (t, s) => {
        const { params: o, id: c } = s;
        try {
          this.isValidConnect(ar({}, s.params));
          const f = o.expiryTimestamp || Pr(Ei.wc_sessionPropose.req.ttl),
            d = ar({ id: c, pairingTopic: t, expiryTimestamp: f }, o);
          await this.setProposal(c, d);
          const p = zn(JSON.stringify(s)),
            g = await this.getVerifyContext(p, d.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: c,
            params: d,
            verifyContext: g,
          });
        } catch (f) {
          await this.sendError(c, t, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionProposeResponse = async (t, s) => {
        const { id: o } = s;
        if (Si(s)) {
          const { result: c } = s;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: c,
          });
          const f = this.client.proposal.get(o);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: f,
          });
          const d = f.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: d,
          });
          const p = c.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: p,
          });
          const g = await this.client.core.crypto.generateSharedKey(d, p);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: g,
          });
          const v = await this.client.core.relayer.subscribe(g);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: v,
          }),
            await this.client.core.pairing.activate({ topic: t });
        } else
          Yr(s) &&
            (await this.client.proposal.delete(o, wt("USER_DISCONNECTED")),
            this.events.emit(Ft("session_connect"), { error: s.error }));
      }),
      (this.onSessionSettleRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          this.isValidSessionSettleRequest(c);
          const {
              relay: f,
              controller: d,
              expiry: p,
              namespaces: g,
              sessionProperties: v,
              pairingTopic: b,
            } = s.params,
            O = ar(
              {
                topic: t,
                relay: f,
                expiry: p,
                namespaces: g,
                acknowledged: !0,
                pairingTopic: b,
                requiredNamespaces: {},
                optionalNamespaces: {},
                controller: d.publicKey,
                self: { publicKey: "", metadata: this.client.metadata },
                peer: { publicKey: d.publicKey, metadata: d.metadata },
              },
              v && { sessionProperties: v }
            );
          await this.sendResult({ id: s.id, topic: t, result: !0 }),
            this.events.emit(Ft("session_connect"), { session: O }),
            this.cleanupDuplicatePairings(O);
        } catch (f) {
          await this.sendError(o, t, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionSettleResponse = async (t, s) => {
        const { id: o } = s;
        Si(s)
          ? (await this.client.session.update(t, { acknowledged: !0 }),
            this.events.emit(Ft("session_approve", o), {}))
          : Yr(s) &&
            (await this.client.session.delete(t, wt("USER_DISCONNECTED")),
            this.events.emit(Ft("session_approve", o), { error: s.error }));
      }),
      (this.onSessionUpdateRequest = async (t, s) => {
        const { params: o, id: c } = s;
        try {
          const f = `${t}_session_update`,
            d = Vo.get(f);
          if (d && this.isRequestOutOfSync(d, c)) {
            this.client.logger.info(`Discarding out of sync request - ${c}`);
            return;
          }
          this.isValidUpdate(ar({ topic: t }, o)),
            await this.client.session.update(t, { namespaces: o.namespaces }),
            await this.sendResult({ id: c, topic: t, result: !0 }),
            this.client.events.emit("session_update", {
              id: c,
              topic: t,
              params: o,
            }),
            Vo.set(f, c);
        } catch (f) {
          await this.sendError(c, t, f), this.client.logger.error(f);
        }
      }),
      (this.isRequestOutOfSync = (t, s) =>
        parseInt(s.toString().slice(0, -3)) <=
        parseInt(t.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit(Ft("session_update", o), {})
          : Yr(s) &&
            this.events.emit(Ft("session_update", o), { error: s.error });
      }),
      (this.onSessionExtendRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidExtend({ topic: t }),
            await this.setExpiry(t, Pr(Jo)),
            await this.sendResult({ id: o, topic: t, result: !0 }),
            this.client.events.emit("session_extend", { id: o, topic: t });
        } catch (c) {
          await this.sendError(o, t, c), this.client.logger.error(c);
        }
      }),
      (this.onSessionExtendResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit(Ft("session_extend", o), {})
          : Yr(s) &&
            this.events.emit(Ft("session_extend", o), { error: s.error });
      }),
      (this.onSessionPingRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidPing({ topic: t }),
            await this.sendResult({ id: o, topic: t, result: !0 }),
            this.client.events.emit("session_ping", { id: o, topic: t });
        } catch (c) {
          await this.sendError(o, t, c), this.client.logger.error(c);
        }
      }),
      (this.onSessionPingResponse = (t, s) => {
        const { id: o } = s;
        setTimeout(() => {
          Si(s)
            ? this.events.emit(Ft("session_ping", o), {})
            : Yr(s) &&
              this.events.emit(Ft("session_ping", o), { error: s.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidDisconnect({ topic: t, reason: s.params }),
            await Promise.all([
              new Promise((c) => {
                this.client.core.relayer.once(er.publish, async () => {
                  c(await this.deleteSession({ topic: t, id: o }));
                });
              }),
              this.sendResult({ id: o, topic: t, result: !0 }),
              this.cleanupPendingSentRequestsForTopic({
                topic: t,
                error: wt("USER_DISCONNECTED"),
              }),
            ]);
        } catch (c) {
          this.client.logger.error(c);
        }
      }),
      (this.onSessionRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          this.isValidRequest(ar({ topic: t }, c));
          const f = zn(JSON.stringify(Hn("wc_sessionRequest", c, o))),
            d = this.client.session.get(t),
            p = await this.getVerifyContext(f, d.peer.metadata),
            g = { id: o, topic: t, params: c, verifyContext: p };
          await this.setPendingSessionRequest(g),
            this.addSessionRequestToSessionRequestQueue(g),
            this.processSessionRequestQueue();
        } catch (f) {
          await this.sendError(o, t, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionRequestResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit(Ft("session_request", o), { result: s.result })
          : Yr(s) &&
            this.events.emit(Ft("session_request", o), { error: s.error });
      }),
      (this.onSessionEventRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          const f = `${t}_session_event_${c.event.name}`,
            d = Vo.get(f);
          if (d && this.isRequestOutOfSync(d, o)) {
            this.client.logger.info(`Discarding out of sync request - ${o}`);
            return;
          }
          this.isValidEmit(ar({ topic: t }, c)),
            this.client.events.emit("session_event", {
              id: o,
              topic: t,
              params: c,
            }),
            Vo.set(f, o);
        } catch (f) {
          await this.sendError(o, t, f), this.client.logger.error(f);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (t) => {
        this.sessionRequestQueue.queue.push(t);
      }),
      (this.cleanupAfterResponse = (t) => {
        this.deletePendingSessionRequest(t.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = Di.idle),
              this.processSessionRequestQueue();
          }, ve.toMiliseconds(this.requestQueueDelay));
      }),
      (this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: s }) => {
        const o = this.client.core.history.pending;
        o.length > 0 &&
          o
            .filter(
              (c) => c.topic === t && c.request.method === "wc_sessionRequest"
            )
            .forEach((c) => {
              this.events.emit(Ft("session_request", c.request.id), {
                error: s,
              });
            });
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === Di.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const t = this.sessionRequestQueue.queue[0];
        if (!t) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = Di.active),
            this.client.events.emit("session_request", t);
        } catch (s) {
          this.client.logger.error(s);
        }
      }),
      (this.onPairingCreated = (t) => {
        if (t.active) return;
        const s = this.client.proposal
          .getAll()
          .find((o) => o.pairingTopic === t.topic);
        s &&
          this.onSessionProposeRequest(
            t.topic,
            Hn(
              "wc_sessionPropose",
              {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties,
              },
              s.id
            )
          );
      }),
      (this.isValidConnect = async (t) => {
        if (!mr(t)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(t)}`
          );
          throw new Error(p);
        }
        const {
          pairingTopic: s,
          requiredNamespaces: o,
          optionalNamespaces: c,
          sessionProperties: f,
          relays: d,
        } = t;
        if ((cr(s) || (await this.isValidPairingTopic(s)), !G3(d, !0))) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `connect() relays: ${d}`
          );
          throw new Error(p);
        }
        !cr(o) &&
          As(o) !== 0 &&
          this.validateNamespaces(o, "requiredNamespaces"),
          !cr(c) &&
            As(c) !== 0 &&
            this.validateNamespaces(c, "optionalNamespaces"),
          cr(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.validateNamespaces = (t, s) => {
        const o = W3(t, "connect()", s);
        if (o) throw new Error(o.message);
      }),
      (this.isValidApprove = async (t) => {
        if (!mr(t))
          throw new Error(
            ae("MISSING_OR_INVALID", `approve() params: ${t}`).message
          );
        const {
          id: s,
          namespaces: o,
          relayProtocol: c,
          sessionProperties: f,
        } = t;
        await this.isValidProposalId(s);
        const d = this.client.proposal.get(s),
          p = tu(o, "approve()");
        if (p) throw new Error(p.message);
        const g = Hf(d.requiredNamespaces, o, "approve()");
        if (g) throw new Error(g.message);
        if (!Wt(c, !0)) {
          const { message: v } = ae(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${c}`
          );
          throw new Error(v);
        }
        cr(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.isValidReject = async (t) => {
        if (!mr(t)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `reject() params: ${t}`
          );
          throw new Error(c);
        }
        const { id: s, reason: o } = t;
        if ((await this.isValidProposalId(s), !J3(o))) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(o)}`
          );
          throw new Error(c);
        }
      }),
      (this.isValidSessionSettleRequest = (t) => {
        if (!mr(t)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${t}`
          );
          throw new Error(g);
        }
        const { relay: s, controller: o, namespaces: c, expiry: f } = t;
        if (!Np(s)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(g);
        }
        const d = B3(o, "onSessionSettleRequest()");
        if (d) throw new Error(d.message);
        const p = tu(c, "onSessionSettleRequest()");
        if (p) throw new Error(p.message);
        if (ji(f)) {
          const { message: g } = ae("EXPIRED", "onSessionSettleRequest()");
          throw new Error(g);
        }
      }),
      (this.isValidUpdate = async (t) => {
        if (!mr(t)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `update() params: ${t}`
          );
          throw new Error(p);
        }
        const { topic: s, namespaces: o } = t;
        await this.isValidSessionTopic(s);
        const c = this.client.session.get(s),
          f = tu(o, "update()");
        if (f) throw new Error(f.message);
        const d = Hf(c.requiredNamespaces, o, "update()");
        if (d) throw new Error(d.message);
      }),
      (this.isValidExtend = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `extend() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionTopic(s);
      }),
      (this.isValidRequest = async (t) => {
        if (!mr(t)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() params: ${t}`
          );
          throw new Error(p);
        }
        const { topic: s, request: o, chainId: c, expiry: f } = t;
        await this.isValidSessionTopic(s);
        const { namespaces: d } = this.client.session.get(s);
        if (!zf(d, c)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() chainId: ${c}`
          );
          throw new Error(p);
        }
        if (!Q3(o)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(o)}`
          );
          throw new Error(p);
        }
        if (!eD(d, c, o.method)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() method: ${o.method}`
          );
          throw new Error(p);
        }
        if (f && !nD(f, fu)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() expiry: ${f}. Expiry must be a number (in seconds) between ${fu.min} and ${fu.max}`
          );
          throw new Error(p);
        }
      }),
      (this.isValidRespond = async (t) => {
        var s;
        if (!mr(t)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `respond() params: ${t}`
          );
          throw new Error(f);
        }
        const { topic: o, response: c } = t;
        try {
          await this.isValidSessionTopic(o);
        } catch (f) {
          throw (
            ((s = t == null ? void 0 : t.response) != null &&
              s.id &&
              this.cleanupAfterResponse(t),
            f)
          );
        }
        if (!X3(c)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(c)}`
          );
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `ping() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.isValidEmit = async (t) => {
        if (!mr(t)) {
          const { message: d } = ae(
            "MISSING_OR_INVALID",
            `emit() params: ${t}`
          );
          throw new Error(d);
        }
        const { topic: s, event: o, chainId: c } = t;
        await this.isValidSessionTopic(s);
        const { namespaces: f } = this.client.session.get(s);
        if (!zf(f, c)) {
          const { message: d } = ae(
            "MISSING_OR_INVALID",
            `emit() chainId: ${c}`
          );
          throw new Error(d);
        }
        if (!Z3(o)) {
          const { message: d } = ae(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(d);
        }
        if (!tD(f, c, o.name)) {
          const { message: d } = ae(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(d);
        }
      }),
      (this.isValidDisconnect = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `disconnect() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.getVerifyContext = async (t, s) => {
        const o = {
          verified: {
            verifyUrl: s.verifyUrl || qn,
            validation: "UNKNOWN",
            origin: s.url || "",
          },
        };
        try {
          const c = await this.client.core.verify.resolve({
            attestationId: t,
            verifyUrl: s.verifyUrl,
          });
          c &&
            ((o.verified.origin = c.origin),
            (o.verified.isScam = c.isScam),
            (o.verified.validation =
              c.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
        } catch (c) {
          this.client.logger.info(c);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o
        );
      }),
      (this.validateSessionProps = (t, s) => {
        Object.values(t).forEach((o) => {
          if (!Wt(o, !1)) {
            const { message: c } = ae(
              "MISSING_OR_INVALID",
              `${s} must be in Record<string, string> format. Received: ${JSON.stringify(
                o
              )}`
            );
            throw new Error(c);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(er.message, async (e) => {
      const { topic: t, message: s } = e;
      if (
        this.ignoredPayloadTypes.includes(
          this.client.core.crypto.getPayloadType(s)
        )
      )
        return;
      const o = await this.client.core.crypto.decode(t, s);
      try {
        nh(o)
          ? (this.client.core.history.set(t, o),
            this.onRelayEventRequest({ topic: t, payload: o }))
          : Ea(o)
          ? (await this.client.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: t, payload: o }),
            this.client.core.history.delete(t, o.id))
          : this.onRelayEventUnknownPayload({ topic: t, payload: o });
      } catch (c) {
        this.client.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Br.expired, async (e) => {
      const { topic: t, id: s } = Tp(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, ae("EXPIRED"), !0);
      t
        ? this.client.session.keys.includes(t) &&
          (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
          this.client.events.emit("session_expire", { topic: t }))
        : s &&
          (await this.deleteProposal(s, !0),
          this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ds.create, (e) =>
      this.onPairingCreated(e)
    );
  }
  isValidPairingTopic(e) {
    if (!Wt(e, !1)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (ji(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = ae("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!Wt(e, !1)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (ji(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: t } = ae("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session topic does not exist in keychain: ${e}`
      );
      throw (await this.deleteSession({ topic: e }), new Error(t));
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Wt(e, !1)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    } else {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!Y3(e)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (ji(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: t } = ae("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class n5 extends Sa {
  constructor(e, t) {
    super(e, t, WI, ah), (this.core = e), (this.logger = t);
  }
}
let s5 = class extends Sa {
  constructor(e, t) {
    super(e, t, GI, ah), (this.core = e), (this.logger = t);
  }
};
class o5 extends Sa {
  constructor(e, t) {
    super(e, t, JI, ah, (s) => s.id), (this.core = e), (this.logger = t);
  }
}
let a5 = class gg extends A6 {
  constructor(e) {
    super(e),
      (this.protocol = lg),
      (this.version = fg),
      (this.name = lu.name),
      (this.events = new Cr.EventEmitter()),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.removeAllListeners = (s) => this.events.removeAllListeners(s)),
      (this.connect = async (s) => {
        try {
          return await this.engine.connect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.pair = async (s) => {
        try {
          return await this.engine.pair(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.approve = async (s) => {
        try {
          return await this.engine.approve(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.reject = async (s) => {
        try {
          return await this.engine.reject(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.update = async (s) => {
        try {
          return await this.engine.update(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.extend = async (s) => {
        try {
          return await this.engine.extend(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.request = async (s) => {
        try {
          return await this.engine.request(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.respond = async (s) => {
        try {
          return await this.engine.respond(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.ping = async (s) => {
        try {
          return await this.engine.ping(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.emit = async (s) => {
        try {
          return await this.engine.emit(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.disconnect = async (s) => {
        try {
          return await this.engine.disconnect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.find = (s) => {
        try {
          return this.engine.find(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = (e == null ? void 0 : e.name) || lu.name),
      (this.metadata = (e == null ? void 0 : e.metadata) || h3());
    const t =
      typeof (e == null ? void 0 : e.logger) < "u" &&
      typeof (e == null ? void 0 : e.logger) != "string"
        ? e.logger
        : ma(wa({ level: (e == null ? void 0 : e.logger) || lu.logger }));
    (this.core = (e == null ? void 0 : e.core) || new VI(e)),
      (this.logger = _r(t, this.name)),
      (this.session = new s5(this.core, this.logger)),
      (this.proposal = new n5(this.core, this.logger)),
      (this.pendingRequest = new o5(this.core, this.logger)),
      (this.engine = new i5(this));
  }
  static async init(e) {
    const t = new gg(e);
    return await t.initialize(), t;
  }
  get context() {
    return br(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(e.message),
        e)
      );
    }
  }
};
var Lu = { exports: {} };
(function (i, e) {
  var t = typeof self < "u" ? self : Jr,
    s = (function () {
      function c() {
        (this.fetch = !1), (this.DOMException = t.DOMException);
      }
      return (c.prototype = t), new c();
    })();
  (function (c) {
    (function (f) {
      var d = {
        searchParams: "URLSearchParams" in c,
        iterable: "Symbol" in c && "iterator" in Symbol,
        blob:
          "FileReader" in c &&
          "Blob" in c &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in c,
        arrayBuffer: "ArrayBuffer" in c,
      };
      function p(D) {
        return D && DataView.prototype.isPrototypeOf(D);
      }
      if (d.arrayBuffer)
        var g = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          v =
            ArrayBuffer.isView ||
            function (D) {
              return D && g.indexOf(Object.prototype.toString.call(D)) > -1;
            };
      function b(D) {
        if (
          (typeof D != "string" && (D = String(D)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(D))
        )
          throw new TypeError("Invalid character in header field name");
        return D.toLowerCase();
      }
      function O(D) {
        return typeof D != "string" && (D = String(D)), D;
      }
      function P(D) {
        var R = {
          next: function () {
            var X = D.shift();
            return { done: X === void 0, value: X };
          },
        };
        return (
          d.iterable &&
            (R[Symbol.iterator] = function () {
              return R;
            }),
          R
        );
      }
      function S(D) {
        (this.map = {}),
          D instanceof S
            ? D.forEach(function (R, X) {
                this.append(X, R);
              }, this)
            : Array.isArray(D)
            ? D.forEach(function (R) {
                this.append(R[0], R[1]);
              }, this)
            : D &&
              Object.getOwnPropertyNames(D).forEach(function (R) {
                this.append(R, D[R]);
              }, this);
      }
      (S.prototype.append = function (D, R) {
        (D = b(D)), (R = O(R));
        var X = this.map[D];
        this.map[D] = X ? X + ", " + R : R;
      }),
        (S.prototype.delete = function (D) {
          delete this.map[b(D)];
        }),
        (S.prototype.get = function (D) {
          return (D = b(D)), this.has(D) ? this.map[D] : null;
        }),
        (S.prototype.has = function (D) {
          return this.map.hasOwnProperty(b(D));
        }),
        (S.prototype.set = function (D, R) {
          this.map[b(D)] = O(R);
        }),
        (S.prototype.forEach = function (D, R) {
          for (var X in this.map)
            this.map.hasOwnProperty(X) && D.call(R, this.map[X], X, this);
        }),
        (S.prototype.keys = function () {
          var D = [];
          return (
            this.forEach(function (R, X) {
              D.push(X);
            }),
            P(D)
          );
        }),
        (S.prototype.values = function () {
          var D = [];
          return (
            this.forEach(function (R) {
              D.push(R);
            }),
            P(D)
          );
        }),
        (S.prototype.entries = function () {
          var D = [];
          return (
            this.forEach(function (R, X) {
              D.push([X, R]);
            }),
            P(D)
          );
        }),
        d.iterable && (S.prototype[Symbol.iterator] = S.prototype.entries);
      function K(D) {
        if (D.bodyUsed) return Promise.reject(new TypeError("Already read"));
        D.bodyUsed = !0;
      }
      function H(D) {
        return new Promise(function (R, X) {
          (D.onload = function () {
            R(D.result);
          }),
            (D.onerror = function () {
              X(D.error);
            });
        });
      }
      function Z(D) {
        var R = new FileReader(),
          X = H(R);
        return R.readAsArrayBuffer(D), X;
      }
      function F(D) {
        var R = new FileReader(),
          X = H(R);
        return R.readAsText(D), X;
      }
      function U(D) {
        for (
          var R = new Uint8Array(D), X = new Array(R.length), J = 0;
          J < R.length;
          J++
        )
          X[J] = String.fromCharCode(R[J]);
        return X.join("");
      }
      function I(D) {
        if (D.slice) return D.slice(0);
        var R = new Uint8Array(D.byteLength);
        return R.set(new Uint8Array(D)), R.buffer;
      }
      function A() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (D) {
            (this._bodyInit = D),
              D
                ? typeof D == "string"
                  ? (this._bodyText = D)
                  : d.blob && Blob.prototype.isPrototypeOf(D)
                  ? (this._bodyBlob = D)
                  : d.formData && FormData.prototype.isPrototypeOf(D)
                  ? (this._bodyFormData = D)
                  : d.searchParams && URLSearchParams.prototype.isPrototypeOf(D)
                  ? (this._bodyText = D.toString())
                  : d.arrayBuffer && d.blob && p(D)
                  ? ((this._bodyArrayBuffer = I(D.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : d.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(D) || v(D))
                  ? (this._bodyArrayBuffer = I(D))
                  : (this._bodyText = D = Object.prototype.toString.call(D))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof D == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : d.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(D) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          d.blob &&
            ((this.blob = function () {
              var D = K(this);
              if (D) return D;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? K(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(Z);
            })),
          (this.text = function () {
            var D = K(this);
            if (D) return D;
            if (this._bodyBlob) return F(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(U(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          d.formData &&
            (this.formData = function () {
              return this.text().then(ee);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var C = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function h(D) {
        var R = D.toUpperCase();
        return C.indexOf(R) > -1 ? R : D;
      }
      function _(D, R) {
        R = R || {};
        var X = R.body;
        if (D instanceof _) {
          if (D.bodyUsed) throw new TypeError("Already read");
          (this.url = D.url),
            (this.credentials = D.credentials),
            R.headers || (this.headers = new S(D.headers)),
            (this.method = D.method),
            (this.mode = D.mode),
            (this.signal = D.signal),
            !X && D._bodyInit != null && ((X = D._bodyInit), (D.bodyUsed = !0));
        } else this.url = String(D);
        if (
          ((this.credentials =
            R.credentials || this.credentials || "same-origin"),
          (R.headers || !this.headers) && (this.headers = new S(R.headers)),
          (this.method = h(R.method || this.method || "GET")),
          (this.mode = R.mode || this.mode || null),
          (this.signal = R.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && X)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(X);
      }
      _.prototype.clone = function () {
        return new _(this, { body: this._bodyInit });
      };
      function ee(D) {
        var R = new FormData();
        return (
          D.trim()
            .split("&")
            .forEach(function (X) {
              if (X) {
                var J = X.split("="),
                  k = J.shift().replace(/\+/g, " "),
                  V = J.join("=").replace(/\+/g, " ");
                R.append(decodeURIComponent(k), decodeURIComponent(V));
              }
            }),
          R
        );
      }
      function ne(D) {
        var R = new S(),
          X = D.replace(/\r?\n[\t ]+/g, " ");
        return (
          X.split(/\r?\n/).forEach(function (J) {
            var k = J.split(":"),
              V = k.shift().trim();
            if (V) {
              var te = k.join(":").trim();
              R.append(V, te);
            }
          }),
          R
        );
      }
      A.call(_.prototype);
      function ue(D, R) {
        R || (R = {}),
          (this.type = "default"),
          (this.status = R.status === void 0 ? 200 : R.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in R ? R.statusText : "OK"),
          (this.headers = new S(R.headers)),
          (this.url = R.url || ""),
          this._initBody(D);
      }
      A.call(ue.prototype),
        (ue.prototype.clone = function () {
          return new ue(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new S(this.headers),
            url: this.url,
          });
        }),
        (ue.error = function () {
          var D = new ue(null, { status: 0, statusText: "" });
          return (D.type = "error"), D;
        });
      var ge = [301, 302, 303, 307, 308];
      (ue.redirect = function (D, R) {
        if (ge.indexOf(R) === -1) throw new RangeError("Invalid status code");
        return new ue(null, { status: R, headers: { location: D } });
      }),
        (f.DOMException = c.DOMException);
      try {
        new f.DOMException();
      } catch {
        (f.DOMException = function (R, X) {
          (this.message = R), (this.name = X);
          var J = Error(R);
          this.stack = J.stack;
        }),
          (f.DOMException.prototype = Object.create(Error.prototype)),
          (f.DOMException.prototype.constructor = f.DOMException);
      }
      function ye(D, R) {
        return new Promise(function (X, J) {
          var k = new _(D, R);
          if (k.signal && k.signal.aborted)
            return J(new f.DOMException("Aborted", "AbortError"));
          var V = new XMLHttpRequest();
          function te() {
            V.abort();
          }
          (V.onload = function () {
            var ie = {
              status: V.status,
              statusText: V.statusText,
              headers: ne(V.getAllResponseHeaders() || ""),
            };
            ie.url =
              "responseURL" in V
                ? V.responseURL
                : ie.headers.get("X-Request-URL");
            var De = "response" in V ? V.response : V.responseText;
            X(new ue(De, ie));
          }),
            (V.onerror = function () {
              J(new TypeError("Network request failed"));
            }),
            (V.ontimeout = function () {
              J(new TypeError("Network request failed"));
            }),
            (V.onabort = function () {
              J(new f.DOMException("Aborted", "AbortError"));
            }),
            V.open(k.method, k.url, !0),
            k.credentials === "include"
              ? (V.withCredentials = !0)
              : k.credentials === "omit" && (V.withCredentials = !1),
            "responseType" in V && d.blob && (V.responseType = "blob"),
            k.headers.forEach(function (ie, De) {
              V.setRequestHeader(De, ie);
            }),
            k.signal &&
              (k.signal.addEventListener("abort", te),
              (V.onreadystatechange = function () {
                V.readyState === 4 && k.signal.removeEventListener("abort", te);
              })),
            V.send(typeof k._bodyInit > "u" ? null : k._bodyInit);
        });
      }
      return (
        (ye.polyfill = !0),
        c.fetch ||
          ((c.fetch = ye), (c.Headers = S), (c.Request = _), (c.Response = ue)),
        (f.Headers = S),
        (f.Request = _),
        (f.Response = ue),
        (f.fetch = ye),
        Object.defineProperty(f, "__esModule", { value: !0 }),
        f
      );
    })({});
  })(s),
    (s.fetch.ponyfill = !0),
    delete s.fetch.polyfill;
  var o = s;
  (e = o.fetch),
    (e.default = o.fetch),
    (e.fetch = o.fetch),
    (e.Headers = o.Headers),
    (e.Request = o.Request),
    (e.Response = o.Response),
    (i.exports = e);
})(Lu, Lu.exports);
var c5 = Lu.exports;
const $d = Rs(c5),
  u5 = { Accept: "application/json", "Content-Type": "application/json" },
  h5 = "POST",
  Ld = { headers: u5, method: h5 },
  Ud = 10;
class Hi {
  constructor(e, t = !1) {
    if (
      ((this.url = e),
      (this.disableProviderPing = t),
      (this.events = new Cr.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !ud(e))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    (this.url = e), (this.disableProviderPing = t);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e, t) {
    this.isAvailable || (await this.register());
    try {
      const s = un(e),
        c = await (
          await $d(this.url, Object.assign(Object.assign({}, Ld), { body: s }))
        ).json();
      this.onPayload({ data: c });
    } catch (s) {
      this.onError(e.id, s);
    }
  }
  async register(e = this.url) {
    if (!ud(e))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (c) => {
            this.resetMaxListeners(), o(c);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return o(new Error("HTTP connection is missing or invalid"));
              s();
            });
        })
      );
    }
    (this.url = e), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const t = un({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await $d(e, Object.assign(Object.assign({}, Ld), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const s = this.parseError(t);
      throw (this.events.emit("register_error", s), this.onClose(), s);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? Ms(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t),
      o = s.message || s.toString(),
      c = _a(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return Vp(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ud && this.events.setMaxListeners(Ud);
  }
}
const Md = "error",
  l5 = "wss://relay.walletconnect.com",
  f5 = "wc",
  d5 = "universal_provider",
  jd = `${f5}@2:${d5}:`,
  p5 = "https://rpc.walletconnect.com/v1/",
  Oi = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var _s =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Uu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (i, e) {
  (function () {
    var t,
      s = "4.17.21",
      o = 200,
      c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      f = "Expected a function",
      d = "Invalid `variable` option passed into `_.template`",
      p = "__lodash_hash_undefined__",
      g = 500,
      v = "__lodash_placeholder__",
      b = 1,
      O = 2,
      P = 4,
      S = 1,
      K = 2,
      H = 1,
      Z = 2,
      F = 4,
      U = 8,
      I = 16,
      A = 32,
      C = 64,
      h = 128,
      _ = 256,
      ee = 512,
      ne = 30,
      ue = "...",
      ge = 800,
      ye = 16,
      D = 1,
      R = 2,
      X = 3,
      J = 1 / 0,
      k = 9007199254740991,
      V = 17976931348623157e292,
      te = 0 / 0,
      ie = 4294967295,
      De = ie - 1,
      oe = ie >>> 1,
      Se = [
        ["ary", h],
        ["bind", H],
        ["bindKey", Z],
        ["curry", U],
        ["curryRight", I],
        ["flip", ee],
        ["partial", A],
        ["partialRight", C],
        ["rearg", _],
      ],
      le = "[object Arguments]",
      Ce = "[object Array]",
      B = "[object AsyncFunction]",
      q = "[object Boolean]",
      $ = "[object Date]",
      l = "[object DOMException]",
      T = "[object Error]",
      se = "[object Function]",
      he = "[object GeneratorFunction]",
      Ee = "[object Map]",
      ze = "[object Number]",
      ke = "[object Null]",
      Ue = "[object Object]",
      pt = "[object Promise]",
      gt = "[object Proxy]",
      je = "[object RegExp]",
      Ie = "[object Set]",
      Ne = "[object String]",
      Fe = "[object Symbol]",
      qe = "[object Undefined]",
      Oe = "[object WeakMap]",
      $e = "[object WeakSet]",
      _e = "[object ArrayBuffer]",
      Pe = "[object DataView]",
      He = "[object Float32Array]",
      xe = "[object Float64Array]",
      Ve = "[object Int8Array]",
      Ge = "[object Int16Array]",
      Ze = "[object Int32Array]",
      et = "[object Uint8Array]",
      Je = "[object Uint8ClampedArray]",
      tr = "[object Uint16Array]",
      lr = "[object Uint32Array]",
      Qr = /\b__p \+= '';/g,
      rr = /\b(__p \+=) '' \+/g,
      ai = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Pi = /&(?:amp|lt|gt|quot|#39);/g,
      Ki = /[&<>"']/g,
      Dt = RegExp(Pi.source),
      yt = RegExp(Ki.source),
      St = /<%-([\s\S]+?)%>/g,
      It = /<%([\s\S]+?)%>/g,
      _t = /<%=([\s\S]+?)%>/g,
      vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      $t = /^\w*$/,
      Lt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      xt = /[\\^$.*+?()[\]{}|]/g,
      Ut = RegExp(xt.source),
      Ot = /^\s+/,
      Ct = /\s/,
      Pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      ht = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Mt = /,? & /,
      jt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Ia = /[()=,{}\[\]\/\s]/,
      xa = /\\(\\)?/g,
      Oa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Rr = /\w*$/,
      Pa = /^[-+]0x[0-9a-f]+$/i,
      Aa = /^0b[01]+$/i,
      Ca = /^\[object .+?Constructor\]$/,
      Ta = /^0o[0-7]+$/i,
      Ra = /^(?:0|[1-9]\d*)$/,
      ci = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      gn = /($^)/,
      Na = /['\n\r\u2028\u2029\\]/g,
      yn = "\\ud800-\\udfff",
      Fa = "\\u0300-\\u036f",
      $a = "\\ufe20-\\ufe2f",
      vn = "\\u20d0-\\u20ff",
      Bs = Fa + $a + vn,
      zs = "\\u2700-\\u27bf",
      zr = "a-z\\xdf-\\xf6\\xf8-\\xff",
      La = "\\xac\\xb1\\xd7\\xf7",
      Ua = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Ma = "\\u2000-\\u206f",
      ja =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      Hs = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      Ks = "\\ufe0e\\ufe0f",
      ki = La + Ua + Ma + ja,
      Jn = "['’]",
      Vi = "[" + yn + "]",
      Qn = "[" + ki + "]",
      Wi = "[" + Bs + "]",
      ks = "\\d+",
      qa = "[" + zs + "]",
      Vs = "[" + zr + "]",
      Ws = "[^" + yn + ki + ks + zs + zr + Hs + "]",
      mn = "\\ud83c[\\udffb-\\udfff]",
      Ba = "(?:" + Wi + "|" + mn + ")",
      Gs = "[^" + yn + "]",
      wn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ai = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Er = "[" + Hs + "]",
      Ys = "\\u200d",
      Js = "(?:" + Vs + "|" + Ws + ")",
      Xr = "(?:" + Er + "|" + Ws + ")",
      Qs = "(?:" + Jn + "(?:d|ll|m|re|s|t|ve))?",
      Xs = "(?:" + Jn + "(?:D|LL|M|RE|S|T|VE))?",
      Zs = Ba + "?",
      eo = "[" + Ks + "]?",
      za = "(?:" + Ys + "(?:" + [Gs, wn, Ai].join("|") + ")" + eo + Zs + ")*",
      ui = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      to = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      ro = eo + Zs + za,
      bn = "(?:" + [qa, wn, Ai].join("|") + ")" + ro,
      Ha = "(?:" + [Gs + Wi + "?", Wi, wn, Ai, Vi].join("|") + ")",
      Xn = RegExp(Jn, "g"),
      Ka = RegExp(Wi, "g"),
      _n = RegExp(mn + "(?=" + mn + ")|" + Ha + ro, "g"),
      io = RegExp(
        [
          Er + "?" + Vs + "+" + Qs + "(?=" + [Qn, Er, "$"].join("|") + ")",
          Xr + "+" + Xs + "(?=" + [Qn, Er + Js, "$"].join("|") + ")",
          Er + "?" + Js + "+" + Qs,
          Er + "+" + Xs,
          to,
          ui,
          ks,
          bn,
        ].join("|"),
        "g"
      ),
      no = RegExp("[" + Ys + yn + Bs + Ks + "]"),
      Gi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      so = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      ka = -1,
      ot = {};
    (ot[He] =
      ot[xe] =
      ot[Ve] =
      ot[Ge] =
      ot[Ze] =
      ot[et] =
      ot[Je] =
      ot[tr] =
      ot[lr] =
        !0),
      (ot[le] =
        ot[Ce] =
        ot[_e] =
        ot[q] =
        ot[Pe] =
        ot[$] =
        ot[T] =
        ot[se] =
        ot[Ee] =
        ot[ze] =
        ot[Ue] =
        ot[je] =
        ot[Ie] =
        ot[Ne] =
        ot[Oe] =
          !1);
    var nt = {};
    (nt[le] =
      nt[Ce] =
      nt[_e] =
      nt[Pe] =
      nt[q] =
      nt[$] =
      nt[He] =
      nt[xe] =
      nt[Ve] =
      nt[Ge] =
      nt[Ze] =
      nt[Ee] =
      nt[ze] =
      nt[Ue] =
      nt[je] =
      nt[Ie] =
      nt[Ne] =
      nt[Fe] =
      nt[et] =
      nt[Je] =
      nt[tr] =
      nt[lr] =
        !0),
      (nt[T] = nt[se] = nt[Oe] = !1);
    var E = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      Q = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      fe = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      at = parseFloat,
      Te = parseInt,
      ft = typeof _s == "object" && _s && _s.Object === Object && _s,
      qt = typeof self == "object" && self && self.Object === Object && self,
      Qe = ft || qt || Function("return this")(),
      ct = e && !e.nodeType && e,
      Tt = ct && !0 && i && !i.nodeType && i,
      fr = Tt && Tt.exports === ct,
      Bt = fr && ft.process,
      dt = (function () {
        try {
          var M = Tt && Tt.require && Tt.require("util").types;
          return M || (Bt && Bt.binding && Bt.binding("util"));
        } catch {}
      })(),
      ir = dt && dt.isArrayBuffer,
      Hr = dt && dt.isDate,
      Nr = dt && dt.isMap,
      Zr = dt && dt.isRegExp,
      Zn = dt && dt.isSet,
      Yi = dt && dt.isTypedArray;
    function Kt(M, W, z) {
      switch (z.length) {
        case 0:
          return M.call(W);
        case 1:
          return M.call(W, z[0]);
        case 2:
          return M.call(W, z[0], z[1]);
        case 3:
          return M.call(W, z[0], z[1], z[2]);
      }
      return M.apply(W, z);
    }
    function mg(M, W, z, de) {
      for (var Ae = -1, tt = M == null ? 0 : M.length; ++Ae < tt; ) {
        var zt = M[Ae];
        W(de, zt, z(zt), M);
      }
      return de;
    }
    function Fr(M, W) {
      for (
        var z = -1, de = M == null ? 0 : M.length;
        ++z < de && W(M[z], z, M) !== !1;

      );
      return M;
    }
    function wg(M, W) {
      for (var z = M == null ? 0 : M.length; z-- && W(M[z], z, M) !== !1; );
      return M;
    }
    function hh(M, W) {
      for (var z = -1, de = M == null ? 0 : M.length; ++z < de; )
        if (!W(M[z], z, M)) return !1;
      return !0;
    }
    function Ci(M, W) {
      for (
        var z = -1, de = M == null ? 0 : M.length, Ae = 0, tt = [];
        ++z < de;

      ) {
        var zt = M[z];
        W(zt, z, M) && (tt[Ae++] = zt);
      }
      return tt;
    }
    function oo(M, W) {
      var z = M == null ? 0 : M.length;
      return !!z && En(M, W, 0) > -1;
    }
    function Va(M, W, z) {
      for (var de = -1, Ae = M == null ? 0 : M.length; ++de < Ae; )
        if (z(W, M[de])) return !0;
      return !1;
    }
    function mt(M, W) {
      for (
        var z = -1, de = M == null ? 0 : M.length, Ae = Array(de);
        ++z < de;

      )
        Ae[z] = W(M[z], z, M);
      return Ae;
    }
    function Ti(M, W) {
      for (var z = -1, de = W.length, Ae = M.length; ++z < de; )
        M[Ae + z] = W[z];
      return M;
    }
    function Wa(M, W, z, de) {
      var Ae = -1,
        tt = M == null ? 0 : M.length;
      for (de && tt && (z = M[++Ae]); ++Ae < tt; ) z = W(z, M[Ae], Ae, M);
      return z;
    }
    function bg(M, W, z, de) {
      var Ae = M == null ? 0 : M.length;
      for (de && Ae && (z = M[--Ae]); Ae--; ) z = W(z, M[Ae], Ae, M);
      return z;
    }
    function Ga(M, W) {
      for (var z = -1, de = M == null ? 0 : M.length; ++z < de; )
        if (W(M[z], z, M)) return !0;
      return !1;
    }
    var _g = Ya("length");
    function Eg(M) {
      return M.split("");
    }
    function Dg(M) {
      return M.match(jt) || [];
    }
    function lh(M, W, z) {
      var de;
      return (
        z(M, function (Ae, tt, zt) {
          if (W(Ae, tt, zt)) return (de = tt), !1;
        }),
        de
      );
    }
    function ao(M, W, z, de) {
      for (var Ae = M.length, tt = z + (de ? 1 : -1); de ? tt-- : ++tt < Ae; )
        if (W(M[tt], tt, M)) return tt;
      return -1;
    }
    function En(M, W, z) {
      return W === W ? $g(M, W, z) : ao(M, fh, z);
    }
    function Sg(M, W, z, de) {
      for (var Ae = z - 1, tt = M.length; ++Ae < tt; )
        if (de(M[Ae], W)) return Ae;
      return -1;
    }
    function fh(M) {
      return M !== M;
    }
    function dh(M, W) {
      var z = M == null ? 0 : M.length;
      return z ? Qa(M, W) / z : te;
    }
    function Ya(M) {
      return function (W) {
        return W == null ? t : W[M];
      };
    }
    function Ja(M) {
      return function (W) {
        return M == null ? t : M[W];
      };
    }
    function ph(M, W, z, de, Ae) {
      return (
        Ae(M, function (tt, zt, ut) {
          z = de ? ((de = !1), tt) : W(z, tt, zt, ut);
        }),
        z
      );
    }
    function Ig(M, W) {
      var z = M.length;
      for (M.sort(W); z--; ) M[z] = M[z].value;
      return M;
    }
    function Qa(M, W) {
      for (var z, de = -1, Ae = M.length; ++de < Ae; ) {
        var tt = W(M[de]);
        tt !== t && (z = z === t ? tt : z + tt);
      }
      return z;
    }
    function Xa(M, W) {
      for (var z = -1, de = Array(M); ++z < M; ) de[z] = W(z);
      return de;
    }
    function xg(M, W) {
      return mt(W, function (z) {
        return [z, M[z]];
      });
    }
    function gh(M) {
      return M && M.slice(0, wh(M) + 1).replace(Ot, "");
    }
    function Dr(M) {
      return function (W) {
        return M(W);
      };
    }
    function Za(M, W) {
      return mt(W, function (z) {
        return M[z];
      });
    }
    function es(M, W) {
      return M.has(W);
    }
    function yh(M, W) {
      for (var z = -1, de = M.length; ++z < de && En(W, M[z], 0) > -1; );
      return z;
    }
    function vh(M, W) {
      for (var z = M.length; z-- && En(W, M[z], 0) > -1; );
      return z;
    }
    function Og(M, W) {
      for (var z = M.length, de = 0; z--; ) M[z] === W && ++de;
      return de;
    }
    var Pg = Ja(E),
      Ag = Ja(L);
    function Cg(M) {
      return "\\" + fe[M];
    }
    function Tg(M, W) {
      return M == null ? t : M[W];
    }
    function Dn(M) {
      return no.test(M);
    }
    function Rg(M) {
      return Gi.test(M);
    }
    function Ng(M) {
      for (var W, z = []; !(W = M.next()).done; ) z.push(W.value);
      return z;
    }
    function ec(M) {
      var W = -1,
        z = Array(M.size);
      return (
        M.forEach(function (de, Ae) {
          z[++W] = [Ae, de];
        }),
        z
      );
    }
    function mh(M, W) {
      return function (z) {
        return M(W(z));
      };
    }
    function Ri(M, W) {
      for (var z = -1, de = M.length, Ae = 0, tt = []; ++z < de; ) {
        var zt = M[z];
        (zt === W || zt === v) && ((M[z] = v), (tt[Ae++] = z));
      }
      return tt;
    }
    function co(M) {
      var W = -1,
        z = Array(M.size);
      return (
        M.forEach(function (de) {
          z[++W] = de;
        }),
        z
      );
    }
    function Fg(M) {
      var W = -1,
        z = Array(M.size);
      return (
        M.forEach(function (de) {
          z[++W] = [de, de];
        }),
        z
      );
    }
    function $g(M, W, z) {
      for (var de = z - 1, Ae = M.length; ++de < Ae; )
        if (M[de] === W) return de;
      return -1;
    }
    function Lg(M, W, z) {
      for (var de = z + 1; de--; ) if (M[de] === W) return de;
      return de;
    }
    function Sn(M) {
      return Dn(M) ? Mg(M) : _g(M);
    }
    function Kr(M) {
      return Dn(M) ? jg(M) : Eg(M);
    }
    function wh(M) {
      for (var W = M.length; W-- && Ct.test(M.charAt(W)); );
      return W;
    }
    var Ug = Ja(Q);
    function Mg(M) {
      for (var W = (_n.lastIndex = 0); _n.test(M); ) ++W;
      return W;
    }
    function jg(M) {
      return M.match(_n) || [];
    }
    function qg(M) {
      return M.match(io) || [];
    }
    var Bg = function M(W) {
        W = W == null ? Qe : In.defaults(Qe.Object(), W, In.pick(Qe, so));
        var z = W.Array,
          de = W.Date,
          Ae = W.Error,
          tt = W.Function,
          zt = W.Math,
          ut = W.Object,
          tc = W.RegExp,
          zg = W.String,
          $r = W.TypeError,
          uo = z.prototype,
          Hg = tt.prototype,
          xn = ut.prototype,
          ho = W["__core-js_shared__"],
          lo = Hg.toString,
          it = xn.hasOwnProperty,
          Kg = 0,
          bh = (function () {
            var r = /[^.]+$/.exec((ho && ho.keys && ho.keys.IE_PROTO) || "");
            return r ? "Symbol(src)_1." + r : "";
          })(),
          fo = xn.toString,
          kg = lo.call(ut),
          Vg = Qe._,
          Wg = tc(
            "^" +
              lo
                .call(it)
                .replace(xt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          po = fr ? W.Buffer : t,
          Ni = W.Symbol,
          go = W.Uint8Array,
          _h = po ? po.allocUnsafe : t,
          yo = mh(ut.getPrototypeOf, ut),
          Eh = ut.create,
          Dh = xn.propertyIsEnumerable,
          vo = uo.splice,
          Sh = Ni ? Ni.isConcatSpreadable : t,
          ts = Ni ? Ni.iterator : t,
          Ji = Ni ? Ni.toStringTag : t,
          mo = (function () {
            try {
              var r = tn(ut, "defineProperty");
              return r({}, "", {}), r;
            } catch {}
          })(),
          Gg = W.clearTimeout !== Qe.clearTimeout && W.clearTimeout,
          Yg = de && de.now !== Qe.Date.now && de.now,
          Jg = W.setTimeout !== Qe.setTimeout && W.setTimeout,
          wo = zt.ceil,
          bo = zt.floor,
          rc = ut.getOwnPropertySymbols,
          Qg = po ? po.isBuffer : t,
          Ih = W.isFinite,
          Xg = uo.join,
          Zg = mh(ut.keys, ut),
          Ht = zt.max,
          Qt = zt.min,
          e0 = de.now,
          t0 = W.parseInt,
          xh = zt.random,
          r0 = uo.reverse,
          ic = tn(W, "DataView"),
          rs = tn(W, "Map"),
          nc = tn(W, "Promise"),
          On = tn(W, "Set"),
          is = tn(W, "WeakMap"),
          ns = tn(ut, "create"),
          _o = is && new is(),
          Pn = {},
          i0 = rn(ic),
          n0 = rn(rs),
          s0 = rn(nc),
          o0 = rn(On),
          a0 = rn(is),
          Eo = Ni ? Ni.prototype : t,
          ss = Eo ? Eo.valueOf : t,
          Oh = Eo ? Eo.toString : t;
        function m(r) {
          if (At(r) && !Re(r) && !(r instanceof Ye)) {
            if (r instanceof Lr) return r;
            if (it.call(r, "__wrapped__")) return Pl(r);
          }
          return new Lr(r);
        }
        var An = (function () {
          function r() {}
          return function (n) {
            if (!Et(n)) return {};
            if (Eh) return Eh(n);
            r.prototype = n;
            var a = new r();
            return (r.prototype = t), a;
          };
        })();
        function Do() {}
        function Lr(r, n) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!n),
            (this.__index__ = 0),
            (this.__values__ = t);
        }
        (m.templateSettings = {
          escape: St,
          evaluate: It,
          interpolate: _t,
          variable: "",
          imports: { _: m },
        }),
          (m.prototype = Do.prototype),
          (m.prototype.constructor = m),
          (Lr.prototype = An(Do.prototype)),
          (Lr.prototype.constructor = Lr);
        function Ye(r) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = ie),
            (this.__views__ = []);
        }
        function c0() {
          var r = new Ye(this.__wrapped__);
          return (
            (r.__actions__ = dr(this.__actions__)),
            (r.__dir__ = this.__dir__),
            (r.__filtered__ = this.__filtered__),
            (r.__iteratees__ = dr(this.__iteratees__)),
            (r.__takeCount__ = this.__takeCount__),
            (r.__views__ = dr(this.__views__)),
            r
          );
        }
        function u0() {
          if (this.__filtered__) {
            var r = new Ye(this);
            (r.__dir__ = -1), (r.__filtered__ = !0);
          } else (r = this.clone()), (r.__dir__ *= -1);
          return r;
        }
        function h0() {
          var r = this.__wrapped__.value(),
            n = this.__dir__,
            a = Re(r),
            u = n < 0,
            y = a ? r.length : 0,
            w = Ey(0, y, this.__views__),
            x = w.start,
            N = w.end,
            j = N - x,
            G = u ? N : x - 1,
            Y = this.__iteratees__,
            re = Y.length,
            ce = 0,
            pe = Qt(j, this.__takeCount__);
          if (!a || (!u && y == j && pe == j)) return Qh(r, this.__actions__);
          var we = [];
          e: for (; j-- && ce < pe; ) {
            G += n;
            for (var Be = -1, be = r[G]; ++Be < re; ) {
              var We = Y[Be],
                Xe = We.iteratee,
                xr = We.type,
                or = Xe(be);
              if (xr == R) be = or;
              else if (!or) {
                if (xr == D) continue e;
                break e;
              }
            }
            we[ce++] = be;
          }
          return we;
        }
        (Ye.prototype = An(Do.prototype)), (Ye.prototype.constructor = Ye);
        function Qi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var u = r[n];
            this.set(u[0], u[1]);
          }
        }
        function l0() {
          (this.__data__ = ns ? ns(null) : {}), (this.size = 0);
        }
        function f0(r) {
          var n = this.has(r) && delete this.__data__[r];
          return (this.size -= n ? 1 : 0), n;
        }
        function d0(r) {
          var n = this.__data__;
          if (ns) {
            var a = n[r];
            return a === p ? t : a;
          }
          return it.call(n, r) ? n[r] : t;
        }
        function p0(r) {
          var n = this.__data__;
          return ns ? n[r] !== t : it.call(n, r);
        }
        function g0(r, n) {
          var a = this.__data__;
          return (
            (this.size += this.has(r) ? 0 : 1),
            (a[r] = ns && n === t ? p : n),
            this
          );
        }
        (Qi.prototype.clear = l0),
          (Qi.prototype.delete = f0),
          (Qi.prototype.get = d0),
          (Qi.prototype.has = p0),
          (Qi.prototype.set = g0);
        function hi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var u = r[n];
            this.set(u[0], u[1]);
          }
        }
        function y0() {
          (this.__data__ = []), (this.size = 0);
        }
        function v0(r) {
          var n = this.__data__,
            a = So(n, r);
          if (a < 0) return !1;
          var u = n.length - 1;
          return a == u ? n.pop() : vo.call(n, a, 1), --this.size, !0;
        }
        function m0(r) {
          var n = this.__data__,
            a = So(n, r);
          return a < 0 ? t : n[a][1];
        }
        function w0(r) {
          return So(this.__data__, r) > -1;
        }
        function b0(r, n) {
          var a = this.__data__,
            u = So(a, r);
          return u < 0 ? (++this.size, a.push([r, n])) : (a[u][1] = n), this;
        }
        (hi.prototype.clear = y0),
          (hi.prototype.delete = v0),
          (hi.prototype.get = m0),
          (hi.prototype.has = w0),
          (hi.prototype.set = b0);
        function li(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var u = r[n];
            this.set(u[0], u[1]);
          }
        }
        function _0() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Qi(),
              map: new (rs || hi)(),
              string: new Qi(),
            });
        }
        function E0(r) {
          var n = Lo(this, r).delete(r);
          return (this.size -= n ? 1 : 0), n;
        }
        function D0(r) {
          return Lo(this, r).get(r);
        }
        function S0(r) {
          return Lo(this, r).has(r);
        }
        function I0(r, n) {
          var a = Lo(this, r),
            u = a.size;
          return a.set(r, n), (this.size += a.size == u ? 0 : 1), this;
        }
        (li.prototype.clear = _0),
          (li.prototype.delete = E0),
          (li.prototype.get = D0),
          (li.prototype.has = S0),
          (li.prototype.set = I0);
        function Xi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.__data__ = new li(); ++n < a; ) this.add(r[n]);
        }
        function x0(r) {
          return this.__data__.set(r, p), this;
        }
        function O0(r) {
          return this.__data__.has(r);
        }
        (Xi.prototype.add = Xi.prototype.push = x0), (Xi.prototype.has = O0);
        function kr(r) {
          var n = (this.__data__ = new hi(r));
          this.size = n.size;
        }
        function P0() {
          (this.__data__ = new hi()), (this.size = 0);
        }
        function A0(r) {
          var n = this.__data__,
            a = n.delete(r);
          return (this.size = n.size), a;
        }
        function C0(r) {
          return this.__data__.get(r);
        }
        function T0(r) {
          return this.__data__.has(r);
        }
        function R0(r, n) {
          var a = this.__data__;
          if (a instanceof hi) {
            var u = a.__data__;
            if (!rs || u.length < o - 1)
              return u.push([r, n]), (this.size = ++a.size), this;
            a = this.__data__ = new li(u);
          }
          return a.set(r, n), (this.size = a.size), this;
        }
        (kr.prototype.clear = P0),
          (kr.prototype.delete = A0),
          (kr.prototype.get = C0),
          (kr.prototype.has = T0),
          (kr.prototype.set = R0);
        function Ph(r, n) {
          var a = Re(r),
            u = !a && nn(r),
            y = !a && !u && Mi(r),
            w = !a && !u && !y && Nn(r),
            x = a || u || y || w,
            N = x ? Xa(r.length, zg) : [],
            j = N.length;
          for (var G in r)
            (n || it.call(r, G)) &&
              !(
                x &&
                (G == "length" ||
                  (y && (G == "offset" || G == "parent")) ||
                  (w &&
                    (G == "buffer" ||
                      G == "byteLength" ||
                      G == "byteOffset")) ||
                  gi(G, j))
              ) &&
              N.push(G);
          return N;
        }
        function Ah(r) {
          var n = r.length;
          return n ? r[gc(0, n - 1)] : t;
        }
        function N0(r, n) {
          return Uo(dr(r), Zi(n, 0, r.length));
        }
        function F0(r) {
          return Uo(dr(r));
        }
        function sc(r, n, a) {
          ((a !== t && !Vr(r[n], a)) || (a === t && !(n in r))) && fi(r, n, a);
        }
        function os(r, n, a) {
          var u = r[n];
          (!(it.call(r, n) && Vr(u, a)) || (a === t && !(n in r))) &&
            fi(r, n, a);
        }
        function So(r, n) {
          for (var a = r.length; a--; ) if (Vr(r[a][0], n)) return a;
          return -1;
        }
        function $0(r, n, a, u) {
          return (
            Fi(r, function (y, w, x) {
              n(u, y, a(y), x);
            }),
            u
          );
        }
        function Ch(r, n) {
          return r && ti(n, kt(n), r);
        }
        function L0(r, n) {
          return r && ti(n, gr(n), r);
        }
        function fi(r, n, a) {
          n == "__proto__" && mo
            ? mo(r, n, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0,
              })
            : (r[n] = a);
        }
        function oc(r, n) {
          for (var a = -1, u = n.length, y = z(u), w = r == null; ++a < u; )
            y[a] = w ? t : qc(r, n[a]);
          return y;
        }
        function Zi(r, n, a) {
          return (
            r === r &&
              (a !== t && (r = r <= a ? r : a),
              n !== t && (r = r >= n ? r : n)),
            r
          );
        }
        function Ur(r, n, a, u, y, w) {
          var x,
            N = n & b,
            j = n & O,
            G = n & P;
          if ((a && (x = y ? a(r, u, y, w) : a(r)), x !== t)) return x;
          if (!Et(r)) return r;
          var Y = Re(r);
          if (Y) {
            if (((x = Sy(r)), !N)) return dr(r, x);
          } else {
            var re = Xt(r),
              ce = re == se || re == he;
            if (Mi(r)) return el(r, N);
            if (re == Ue || re == le || (ce && !y)) {
              if (((x = j || ce ? {} : wl(r)), !N))
                return j ? dy(r, L0(x, r)) : fy(r, Ch(x, r));
            } else {
              if (!nt[re]) return y ? r : {};
              x = Iy(r, re, N);
            }
          }
          w || (w = new kr());
          var pe = w.get(r);
          if (pe) return pe;
          w.set(r, x),
            Gl(r)
              ? r.forEach(function (be) {
                  x.add(Ur(be, n, a, be, r, w));
                })
              : Vl(r) &&
                r.forEach(function (be, We) {
                  x.set(We, Ur(be, n, a, We, r, w));
                });
          var we = G ? (j ? xc : Ic) : j ? gr : kt,
            Be = Y ? t : we(r);
          return (
            Fr(Be || r, function (be, We) {
              Be && ((We = be), (be = r[We])),
                os(x, We, Ur(be, n, a, We, r, w));
            }),
            x
          );
        }
        function U0(r) {
          var n = kt(r);
          return function (a) {
            return Th(a, r, n);
          };
        }
        function Th(r, n, a) {
          var u = a.length;
          if (r == null) return !u;
          for (r = ut(r); u--; ) {
            var y = a[u],
              w = n[y],
              x = r[y];
            if ((x === t && !(y in r)) || !w(x)) return !1;
          }
          return !0;
        }
        function Rh(r, n, a) {
          if (typeof r != "function") throw new $r(f);
          return ds(function () {
            r.apply(t, a);
          }, n);
        }
        function as(r, n, a, u) {
          var y = -1,
            w = oo,
            x = !0,
            N = r.length,
            j = [],
            G = n.length;
          if (!N) return j;
          a && (n = mt(n, Dr(a))),
            u
              ? ((w = Va), (x = !1))
              : n.length >= o && ((w = es), (x = !1), (n = new Xi(n)));
          e: for (; ++y < N; ) {
            var Y = r[y],
              re = a == null ? Y : a(Y);
            if (((Y = u || Y !== 0 ? Y : 0), x && re === re)) {
              for (var ce = G; ce--; ) if (n[ce] === re) continue e;
              j.push(Y);
            } else w(n, re, u) || j.push(Y);
          }
          return j;
        }
        var Fi = sl(ei),
          Nh = sl(cc, !0);
        function M0(r, n) {
          var a = !0;
          return (
            Fi(r, function (u, y, w) {
              return (a = !!n(u, y, w)), a;
            }),
            a
          );
        }
        function Io(r, n, a) {
          for (var u = -1, y = r.length; ++u < y; ) {
            var w = r[u],
              x = n(w);
            if (x != null && (N === t ? x === x && !Ir(x) : a(x, N)))
              var N = x,
                j = w;
          }
          return j;
        }
        function j0(r, n, a, u) {
          var y = r.length;
          for (
            a = Me(a),
              a < 0 && (a = -a > y ? 0 : y + a),
              u = u === t || u > y ? y : Me(u),
              u < 0 && (u += y),
              u = a > u ? 0 : Jl(u);
            a < u;

          )
            r[a++] = n;
          return r;
        }
        function Fh(r, n) {
          var a = [];
          return (
            Fi(r, function (u, y, w) {
              n(u, y, w) && a.push(u);
            }),
            a
          );
        }
        function Gt(r, n, a, u, y) {
          var w = -1,
            x = r.length;
          for (a || (a = Oy), y || (y = []); ++w < x; ) {
            var N = r[w];
            n > 0 && a(N)
              ? n > 1
                ? Gt(N, n - 1, a, u, y)
                : Ti(y, N)
              : u || (y[y.length] = N);
          }
          return y;
        }
        var ac = ol(),
          $h = ol(!0);
        function ei(r, n) {
          return r && ac(r, n, kt);
        }
        function cc(r, n) {
          return r && $h(r, n, kt);
        }
        function xo(r, n) {
          return Ci(n, function (a) {
            return yi(r[a]);
          });
        }
        function en(r, n) {
          n = Li(n, r);
          for (var a = 0, u = n.length; r != null && a < u; ) r = r[ri(n[a++])];
          return a && a == u ? r : t;
        }
        function Lh(r, n, a) {
          var u = n(r);
          return Re(r) ? u : Ti(u, a(r));
        }
        function nr(r) {
          return r == null
            ? r === t
              ? qe
              : ke
            : Ji && Ji in ut(r)
            ? _y(r)
            : Fy(r);
        }
        function uc(r, n) {
          return r > n;
        }
        function q0(r, n) {
          return r != null && it.call(r, n);
        }
        function B0(r, n) {
          return r != null && n in ut(r);
        }
        function z0(r, n, a) {
          return r >= Qt(n, a) && r < Ht(n, a);
        }
        function hc(r, n, a) {
          for (
            var u = a ? Va : oo,
              y = r[0].length,
              w = r.length,
              x = w,
              N = z(w),
              j = 1 / 0,
              G = [];
            x--;

          ) {
            var Y = r[x];
            x && n && (Y = mt(Y, Dr(n))),
              (j = Qt(Y.length, j)),
              (N[x] =
                !a && (n || (y >= 120 && Y.length >= 120))
                  ? new Xi(x && Y)
                  : t);
          }
          Y = r[0];
          var re = -1,
            ce = N[0];
          e: for (; ++re < y && G.length < j; ) {
            var pe = Y[re],
              we = n ? n(pe) : pe;
            if (
              ((pe = a || pe !== 0 ? pe : 0), !(ce ? es(ce, we) : u(G, we, a)))
            ) {
              for (x = w; --x; ) {
                var Be = N[x];
                if (!(Be ? es(Be, we) : u(r[x], we, a))) continue e;
              }
              ce && ce.push(we), G.push(pe);
            }
          }
          return G;
        }
        function H0(r, n, a, u) {
          return (
            ei(r, function (y, w, x) {
              n(u, a(y), w, x);
            }),
            u
          );
        }
        function cs(r, n, a) {
          (n = Li(n, r)), (r = Dl(r, n));
          var u = r == null ? r : r[ri(jr(n))];
          return u == null ? t : Kt(u, r, a);
        }
        function Uh(r) {
          return At(r) && nr(r) == le;
        }
        function K0(r) {
          return At(r) && nr(r) == _e;
        }
        function k0(r) {
          return At(r) && nr(r) == $;
        }
        function us(r, n, a, u, y) {
          return r === n
            ? !0
            : r == null || n == null || (!At(r) && !At(n))
            ? r !== r && n !== n
            : V0(r, n, a, u, us, y);
        }
        function V0(r, n, a, u, y, w) {
          var x = Re(r),
            N = Re(n),
            j = x ? Ce : Xt(r),
            G = N ? Ce : Xt(n);
          (j = j == le ? Ue : j), (G = G == le ? Ue : G);
          var Y = j == Ue,
            re = G == Ue,
            ce = j == G;
          if (ce && Mi(r)) {
            if (!Mi(n)) return !1;
            (x = !0), (Y = !1);
          }
          if (ce && !Y)
            return (
              w || (w = new kr()),
              x || Nn(r) ? yl(r, n, a, u, y, w) : wy(r, n, j, a, u, y, w)
            );
          if (!(a & S)) {
            var pe = Y && it.call(r, "__wrapped__"),
              we = re && it.call(n, "__wrapped__");
            if (pe || we) {
              var Be = pe ? r.value() : r,
                be = we ? n.value() : n;
              return w || (w = new kr()), y(Be, be, a, u, w);
            }
          }
          return ce ? (w || (w = new kr()), by(r, n, a, u, y, w)) : !1;
        }
        function W0(r) {
          return At(r) && Xt(r) == Ee;
        }
        function lc(r, n, a, u) {
          var y = a.length,
            w = y,
            x = !u;
          if (r == null) return !w;
          for (r = ut(r); y--; ) {
            var N = a[y];
            if (x && N[2] ? N[1] !== r[N[0]] : !(N[0] in r)) return !1;
          }
          for (; ++y < w; ) {
            N = a[y];
            var j = N[0],
              G = r[j],
              Y = N[1];
            if (x && N[2]) {
              if (G === t && !(j in r)) return !1;
            } else {
              var re = new kr();
              if (u) var ce = u(G, Y, j, r, n, re);
              if (!(ce === t ? us(Y, G, S | K, u, re) : ce)) return !1;
            }
          }
          return !0;
        }
        function Mh(r) {
          if (!Et(r) || Ay(r)) return !1;
          var n = yi(r) ? Wg : Ca;
          return n.test(rn(r));
        }
        function G0(r) {
          return At(r) && nr(r) == je;
        }
        function Y0(r) {
          return At(r) && Xt(r) == Ie;
        }
        function J0(r) {
          return At(r) && Ho(r.length) && !!ot[nr(r)];
        }
        function jh(r) {
          return typeof r == "function"
            ? r
            : r == null
            ? yr
            : typeof r == "object"
            ? Re(r)
              ? zh(r[0], r[1])
              : Bh(r)
            : cf(r);
        }
        function fc(r) {
          if (!fs(r)) return Zg(r);
          var n = [];
          for (var a in ut(r)) it.call(r, a) && a != "constructor" && n.push(a);
          return n;
        }
        function Q0(r) {
          if (!Et(r)) return Ny(r);
          var n = fs(r),
            a = [];
          for (var u in r)
            (u == "constructor" && (n || !it.call(r, u))) || a.push(u);
          return a;
        }
        function dc(r, n) {
          return r < n;
        }
        function qh(r, n) {
          var a = -1,
            u = pr(r) ? z(r.length) : [];
          return (
            Fi(r, function (y, w, x) {
              u[++a] = n(y, w, x);
            }),
            u
          );
        }
        function Bh(r) {
          var n = Pc(r);
          return n.length == 1 && n[0][2]
            ? _l(n[0][0], n[0][1])
            : function (a) {
                return a === r || lc(a, r, n);
              };
        }
        function zh(r, n) {
          return Cc(r) && bl(n)
            ? _l(ri(r), n)
            : function (a) {
                var u = qc(a, r);
                return u === t && u === n ? Bc(a, r) : us(n, u, S | K);
              };
        }
        function Oo(r, n, a, u, y) {
          r !== n &&
            ac(
              n,
              function (w, x) {
                if ((y || (y = new kr()), Et(w))) X0(r, n, x, a, Oo, u, y);
                else {
                  var N = u ? u(Rc(r, x), w, x + "", r, n, y) : t;
                  N === t && (N = w), sc(r, x, N);
                }
              },
              gr
            );
        }
        function X0(r, n, a, u, y, w, x) {
          var N = Rc(r, a),
            j = Rc(n, a),
            G = x.get(j);
          if (G) {
            sc(r, a, G);
            return;
          }
          var Y = w ? w(N, j, a + "", r, n, x) : t,
            re = Y === t;
          if (re) {
            var ce = Re(j),
              pe = !ce && Mi(j),
              we = !ce && !pe && Nn(j);
            (Y = j),
              ce || pe || we
                ? Re(N)
                  ? (Y = N)
                  : Rt(N)
                  ? (Y = dr(N))
                  : pe
                  ? ((re = !1), (Y = el(j, !0)))
                  : we
                  ? ((re = !1), (Y = tl(j, !0)))
                  : (Y = [])
                : ps(j) || nn(j)
                ? ((Y = N),
                  nn(N) ? (Y = Ql(N)) : (!Et(N) || yi(N)) && (Y = wl(j)))
                : (re = !1);
          }
          re && (x.set(j, Y), y(Y, j, u, w, x), x.delete(j)), sc(r, a, Y);
        }
        function Hh(r, n) {
          var a = r.length;
          if (a) return (n += n < 0 ? a : 0), gi(n, a) ? r[n] : t;
        }
        function Kh(r, n, a) {
          n.length
            ? (n = mt(n, function (w) {
                return Re(w)
                  ? function (x) {
                      return en(x, w.length === 1 ? w[0] : w);
                    }
                  : w;
              }))
            : (n = [yr]);
          var u = -1;
          n = mt(n, Dr(me()));
          var y = qh(r, function (w, x, N) {
            var j = mt(n, function (G) {
              return G(w);
            });
            return { criteria: j, index: ++u, value: w };
          });
          return Ig(y, function (w, x) {
            return ly(w, x, a);
          });
        }
        function Z0(r, n) {
          return kh(r, n, function (a, u) {
            return Bc(r, u);
          });
        }
        function kh(r, n, a) {
          for (var u = -1, y = n.length, w = {}; ++u < y; ) {
            var x = n[u],
              N = en(r, x);
            a(N, x) && hs(w, Li(x, r), N);
          }
          return w;
        }
        function ey(r) {
          return function (n) {
            return en(n, r);
          };
        }
        function pc(r, n, a, u) {
          var y = u ? Sg : En,
            w = -1,
            x = n.length,
            N = r;
          for (r === n && (n = dr(n)), a && (N = mt(r, Dr(a))); ++w < x; )
            for (
              var j = 0, G = n[w], Y = a ? a(G) : G;
              (j = y(N, Y, j, u)) > -1;

            )
              N !== r && vo.call(N, j, 1), vo.call(r, j, 1);
          return r;
        }
        function Vh(r, n) {
          for (var a = r ? n.length : 0, u = a - 1; a--; ) {
            var y = n[a];
            if (a == u || y !== w) {
              var w = y;
              gi(y) ? vo.call(r, y, 1) : mc(r, y);
            }
          }
          return r;
        }
        function gc(r, n) {
          return r + bo(xh() * (n - r + 1));
        }
        function ty(r, n, a, u) {
          for (var y = -1, w = Ht(wo((n - r) / (a || 1)), 0), x = z(w); w--; )
            (x[u ? w : ++y] = r), (r += a);
          return x;
        }
        function yc(r, n) {
          var a = "";
          if (!r || n < 1 || n > k) return a;
          do n % 2 && (a += r), (n = bo(n / 2)), n && (r += r);
          while (n);
          return a;
        }
        function Ke(r, n) {
          return Nc(El(r, n, yr), r + "");
        }
        function ry(r) {
          return Ah(Fn(r));
        }
        function iy(r, n) {
          var a = Fn(r);
          return Uo(a, Zi(n, 0, a.length));
        }
        function hs(r, n, a, u) {
          if (!Et(r)) return r;
          n = Li(n, r);
          for (
            var y = -1, w = n.length, x = w - 1, N = r;
            N != null && ++y < w;

          ) {
            var j = ri(n[y]),
              G = a;
            if (j === "__proto__" || j === "constructor" || j === "prototype")
              return r;
            if (y != x) {
              var Y = N[j];
              (G = u ? u(Y, j, N) : t),
                G === t && (G = Et(Y) ? Y : gi(n[y + 1]) ? [] : {});
            }
            os(N, j, G), (N = N[j]);
          }
          return r;
        }
        var Wh = _o
            ? function (r, n) {
                return _o.set(r, n), r;
              }
            : yr,
          ny = mo
            ? function (r, n) {
                return mo(r, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Hc(n),
                  writable: !0,
                });
              }
            : yr;
        function sy(r) {
          return Uo(Fn(r));
        }
        function Mr(r, n, a) {
          var u = -1,
            y = r.length;
          n < 0 && (n = -n > y ? 0 : y + n),
            (a = a > y ? y : a),
            a < 0 && (a += y),
            (y = n > a ? 0 : (a - n) >>> 0),
            (n >>>= 0);
          for (var w = z(y); ++u < y; ) w[u] = r[u + n];
          return w;
        }
        function oy(r, n) {
          var a;
          return (
            Fi(r, function (u, y, w) {
              return (a = n(u, y, w)), !a;
            }),
            !!a
          );
        }
        function Po(r, n, a) {
          var u = 0,
            y = r == null ? u : r.length;
          if (typeof n == "number" && n === n && y <= oe) {
            for (; u < y; ) {
              var w = (u + y) >>> 1,
                x = r[w];
              x !== null && !Ir(x) && (a ? x <= n : x < n)
                ? (u = w + 1)
                : (y = w);
            }
            return y;
          }
          return vc(r, n, yr, a);
        }
        function vc(r, n, a, u) {
          var y = 0,
            w = r == null ? 0 : r.length;
          if (w === 0) return 0;
          n = a(n);
          for (
            var x = n !== n, N = n === null, j = Ir(n), G = n === t;
            y < w;

          ) {
            var Y = bo((y + w) / 2),
              re = a(r[Y]),
              ce = re !== t,
              pe = re === null,
              we = re === re,
              Be = Ir(re);
            if (x) var be = u || we;
            else
              G
                ? (be = we && (u || ce))
                : N
                ? (be = we && ce && (u || !pe))
                : j
                ? (be = we && ce && !pe && (u || !Be))
                : pe || Be
                ? (be = !1)
                : (be = u ? re <= n : re < n);
            be ? (y = Y + 1) : (w = Y);
          }
          return Qt(w, De);
        }
        function Gh(r, n) {
          for (var a = -1, u = r.length, y = 0, w = []; ++a < u; ) {
            var x = r[a],
              N = n ? n(x) : x;
            if (!a || !Vr(N, j)) {
              var j = N;
              w[y++] = x === 0 ? 0 : x;
            }
          }
          return w;
        }
        function Yh(r) {
          return typeof r == "number" ? r : Ir(r) ? te : +r;
        }
        function Sr(r) {
          if (typeof r == "string") return r;
          if (Re(r)) return mt(r, Sr) + "";
          if (Ir(r)) return Oh ? Oh.call(r) : "";
          var n = r + "";
          return n == "0" && 1 / r == -J ? "-0" : n;
        }
        function $i(r, n, a) {
          var u = -1,
            y = oo,
            w = r.length,
            x = !0,
            N = [],
            j = N;
          if (a) (x = !1), (y = Va);
          else if (w >= o) {
            var G = n ? null : vy(r);
            if (G) return co(G);
            (x = !1), (y = es), (j = new Xi());
          } else j = n ? [] : N;
          e: for (; ++u < w; ) {
            var Y = r[u],
              re = n ? n(Y) : Y;
            if (((Y = a || Y !== 0 ? Y : 0), x && re === re)) {
              for (var ce = j.length; ce--; ) if (j[ce] === re) continue e;
              n && j.push(re), N.push(Y);
            } else y(j, re, a) || (j !== N && j.push(re), N.push(Y));
          }
          return N;
        }
        function mc(r, n) {
          return (
            (n = Li(n, r)), (r = Dl(r, n)), r == null || delete r[ri(jr(n))]
          );
        }
        function Jh(r, n, a, u) {
          return hs(r, n, a(en(r, n)), u);
        }
        function Ao(r, n, a, u) {
          for (
            var y = r.length, w = u ? y : -1;
            (u ? w-- : ++w < y) && n(r[w], w, r);

          );
          return a
            ? Mr(r, u ? 0 : w, u ? w + 1 : y)
            : Mr(r, u ? w + 1 : 0, u ? y : w);
        }
        function Qh(r, n) {
          var a = r;
          return (
            a instanceof Ye && (a = a.value()),
            Wa(
              n,
              function (u, y) {
                return y.func.apply(y.thisArg, Ti([u], y.args));
              },
              a
            )
          );
        }
        function wc(r, n, a) {
          var u = r.length;
          if (u < 2) return u ? $i(r[0]) : [];
          for (var y = -1, w = z(u); ++y < u; )
            for (var x = r[y], N = -1; ++N < u; )
              N != y && (w[y] = as(w[y] || x, r[N], n, a));
          return $i(Gt(w, 1), n, a);
        }
        function Xh(r, n, a) {
          for (var u = -1, y = r.length, w = n.length, x = {}; ++u < y; ) {
            var N = u < w ? n[u] : t;
            a(x, r[u], N);
          }
          return x;
        }
        function bc(r) {
          return Rt(r) ? r : [];
        }
        function _c(r) {
          return typeof r == "function" ? r : yr;
        }
        function Li(r, n) {
          return Re(r) ? r : Cc(r, n) ? [r] : Ol(rt(r));
        }
        var ay = Ke;
        function Ui(r, n, a) {
          var u = r.length;
          return (a = a === t ? u : a), !n && a >= u ? r : Mr(r, n, a);
        }
        var Zh =
          Gg ||
          function (r) {
            return Qe.clearTimeout(r);
          };
        function el(r, n) {
          if (n) return r.slice();
          var a = r.length,
            u = _h ? _h(a) : new r.constructor(a);
          return r.copy(u), u;
        }
        function Ec(r) {
          var n = new r.constructor(r.byteLength);
          return new go(n).set(new go(r)), n;
        }
        function cy(r, n) {
          var a = n ? Ec(r.buffer) : r.buffer;
          return new r.constructor(a, r.byteOffset, r.byteLength);
        }
        function uy(r) {
          var n = new r.constructor(r.source, Rr.exec(r));
          return (n.lastIndex = r.lastIndex), n;
        }
        function hy(r) {
          return ss ? ut(ss.call(r)) : {};
        }
        function tl(r, n) {
          var a = n ? Ec(r.buffer) : r.buffer;
          return new r.constructor(a, r.byteOffset, r.length);
        }
        function rl(r, n) {
          if (r !== n) {
            var a = r !== t,
              u = r === null,
              y = r === r,
              w = Ir(r),
              x = n !== t,
              N = n === null,
              j = n === n,
              G = Ir(n);
            if (
              (!N && !G && !w && r > n) ||
              (w && x && j && !N && !G) ||
              (u && x && j) ||
              (!a && j) ||
              !y
            )
              return 1;
            if (
              (!u && !w && !G && r < n) ||
              (G && a && y && !u && !w) ||
              (N && a && y) ||
              (!x && y) ||
              !j
            )
              return -1;
          }
          return 0;
        }
        function ly(r, n, a) {
          for (
            var u = -1,
              y = r.criteria,
              w = n.criteria,
              x = y.length,
              N = a.length;
            ++u < x;

          ) {
            var j = rl(y[u], w[u]);
            if (j) {
              if (u >= N) return j;
              var G = a[u];
              return j * (G == "desc" ? -1 : 1);
            }
          }
          return r.index - n.index;
        }
        function il(r, n, a, u) {
          for (
            var y = -1,
              w = r.length,
              x = a.length,
              N = -1,
              j = n.length,
              G = Ht(w - x, 0),
              Y = z(j + G),
              re = !u;
            ++N < j;

          )
            Y[N] = n[N];
          for (; ++y < x; ) (re || y < w) && (Y[a[y]] = r[y]);
          for (; G--; ) Y[N++] = r[y++];
          return Y;
        }
        function nl(r, n, a, u) {
          for (
            var y = -1,
              w = r.length,
              x = -1,
              N = a.length,
              j = -1,
              G = n.length,
              Y = Ht(w - N, 0),
              re = z(Y + G),
              ce = !u;
            ++y < Y;

          )
            re[y] = r[y];
          for (var pe = y; ++j < G; ) re[pe + j] = n[j];
          for (; ++x < N; ) (ce || y < w) && (re[pe + a[x]] = r[y++]);
          return re;
        }
        function dr(r, n) {
          var a = -1,
            u = r.length;
          for (n || (n = z(u)); ++a < u; ) n[a] = r[a];
          return n;
        }
        function ti(r, n, a, u) {
          var y = !a;
          a || (a = {});
          for (var w = -1, x = n.length; ++w < x; ) {
            var N = n[w],
              j = u ? u(a[N], r[N], N, a, r) : t;
            j === t && (j = r[N]), y ? fi(a, N, j) : os(a, N, j);
          }
          return a;
        }
        function fy(r, n) {
          return ti(r, Ac(r), n);
        }
        function dy(r, n) {
          return ti(r, vl(r), n);
        }
        function Co(r, n) {
          return function (a, u) {
            var y = Re(a) ? mg : $0,
              w = n ? n() : {};
            return y(a, r, me(u, 2), w);
          };
        }
        function Cn(r) {
          return Ke(function (n, a) {
            var u = -1,
              y = a.length,
              w = y > 1 ? a[y - 1] : t,
              x = y > 2 ? a[2] : t;
            for (
              w = r.length > 3 && typeof w == "function" ? (y--, w) : t,
                x && sr(a[0], a[1], x) && ((w = y < 3 ? t : w), (y = 1)),
                n = ut(n);
              ++u < y;

            ) {
              var N = a[u];
              N && r(n, N, u, w);
            }
            return n;
          });
        }
        function sl(r, n) {
          return function (a, u) {
            if (a == null) return a;
            if (!pr(a)) return r(a, u);
            for (
              var y = a.length, w = n ? y : -1, x = ut(a);
              (n ? w-- : ++w < y) && u(x[w], w, x) !== !1;

            );
            return a;
          };
        }
        function ol(r) {
          return function (n, a, u) {
            for (var y = -1, w = ut(n), x = u(n), N = x.length; N--; ) {
              var j = x[r ? N : ++y];
              if (a(w[j], j, w) === !1) break;
            }
            return n;
          };
        }
        function py(r, n, a) {
          var u = n & H,
            y = ls(r);
          function w() {
            var x = this && this !== Qe && this instanceof w ? y : r;
            return x.apply(u ? a : this, arguments);
          }
          return w;
        }
        function al(r) {
          return function (n) {
            n = rt(n);
            var a = Dn(n) ? Kr(n) : t,
              u = a ? a[0] : n.charAt(0),
              y = a ? Ui(a, 1).join("") : n.slice(1);
            return u[r]() + y;
          };
        }
        function Tn(r) {
          return function (n) {
            return Wa(of(sf(n).replace(Xn, "")), r, "");
          };
        }
        function ls(r) {
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new r();
              case 1:
                return new r(n[0]);
              case 2:
                return new r(n[0], n[1]);
              case 3:
                return new r(n[0], n[1], n[2]);
              case 4:
                return new r(n[0], n[1], n[2], n[3]);
              case 5:
                return new r(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new r(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new r(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var a = An(r.prototype),
              u = r.apply(a, n);
            return Et(u) ? u : a;
          };
        }
        function gy(r, n, a) {
          var u = ls(r);
          function y() {
            for (var w = arguments.length, x = z(w), N = w, j = Rn(y); N--; )
              x[N] = arguments[N];
            var G = w < 3 && x[0] !== j && x[w - 1] !== j ? [] : Ri(x, j);
            if (((w -= G.length), w < a))
              return fl(r, n, To, y.placeholder, t, x, G, t, t, a - w);
            var Y = this && this !== Qe && this instanceof y ? u : r;
            return Kt(Y, this, x);
          }
          return y;
        }
        function cl(r) {
          return function (n, a, u) {
            var y = ut(n);
            if (!pr(n)) {
              var w = me(a, 3);
              (n = kt(n)),
                (a = function (N) {
                  return w(y[N], N, y);
                });
            }
            var x = r(n, a, u);
            return x > -1 ? y[w ? n[x] : x] : t;
          };
        }
        function ul(r) {
          return pi(function (n) {
            var a = n.length,
              u = a,
              y = Lr.prototype.thru;
            for (r && n.reverse(); u--; ) {
              var w = n[u];
              if (typeof w != "function") throw new $r(f);
              if (y && !x && $o(w) == "wrapper") var x = new Lr([], !0);
            }
            for (u = x ? u : a; ++u < a; ) {
              w = n[u];
              var N = $o(w),
                j = N == "wrapper" ? Oc(w) : t;
              j &&
              Tc(j[0]) &&
              j[1] == (h | U | A | _) &&
              !j[4].length &&
              j[9] == 1
                ? (x = x[$o(j[0])].apply(x, j[3]))
                : (x = w.length == 1 && Tc(w) ? x[N]() : x.thru(w));
            }
            return function () {
              var G = arguments,
                Y = G[0];
              if (x && G.length == 1 && Re(Y)) return x.plant(Y).value();
              for (var re = 0, ce = a ? n[re].apply(this, G) : Y; ++re < a; )
                ce = n[re].call(this, ce);
              return ce;
            };
          });
        }
        function To(r, n, a, u, y, w, x, N, j, G) {
          var Y = n & h,
            re = n & H,
            ce = n & Z,
            pe = n & (U | I),
            we = n & ee,
            Be = ce ? t : ls(r);
          function be() {
            for (var We = arguments.length, Xe = z(We), xr = We; xr--; )
              Xe[xr] = arguments[xr];
            if (pe)
              var or = Rn(be),
                Or = Og(Xe, or);
            if (
              (u && (Xe = il(Xe, u, y, pe)),
              w && (Xe = nl(Xe, w, x, pe)),
              (We -= Or),
              pe && We < G)
            ) {
              var Nt = Ri(Xe, or);
              return fl(r, n, To, be.placeholder, a, Xe, Nt, N, j, G - We);
            }
            var Wr = re ? a : this,
              mi = ce ? Wr[r] : r;
            return (
              (We = Xe.length),
              N ? (Xe = $y(Xe, N)) : we && We > 1 && Xe.reverse(),
              Y && j < We && (Xe.length = j),
              this && this !== Qe && this instanceof be && (mi = Be || ls(mi)),
              mi.apply(Wr, Xe)
            );
          }
          return be;
        }
        function hl(r, n) {
          return function (a, u) {
            return H0(a, r, n(u), {});
          };
        }
        function Ro(r, n) {
          return function (a, u) {
            var y;
            if (a === t && u === t) return n;
            if ((a !== t && (y = a), u !== t)) {
              if (y === t) return u;
              typeof a == "string" || typeof u == "string"
                ? ((a = Sr(a)), (u = Sr(u)))
                : ((a = Yh(a)), (u = Yh(u))),
                (y = r(a, u));
            }
            return y;
          };
        }
        function Dc(r) {
          return pi(function (n) {
            return (
              (n = mt(n, Dr(me()))),
              Ke(function (a) {
                var u = this;
                return r(n, function (y) {
                  return Kt(y, u, a);
                });
              })
            );
          });
        }
        function No(r, n) {
          n = n === t ? " " : Sr(n);
          var a = n.length;
          if (a < 2) return a ? yc(n, r) : n;
          var u = yc(n, wo(r / Sn(n)));
          return Dn(n) ? Ui(Kr(u), 0, r).join("") : u.slice(0, r);
        }
        function yy(r, n, a, u) {
          var y = n & H,
            w = ls(r);
          function x() {
            for (
              var N = -1,
                j = arguments.length,
                G = -1,
                Y = u.length,
                re = z(Y + j),
                ce = this && this !== Qe && this instanceof x ? w : r;
              ++G < Y;

            )
              re[G] = u[G];
            for (; j--; ) re[G++] = arguments[++N];
            return Kt(ce, y ? a : this, re);
          }
          return x;
        }
        function ll(r) {
          return function (n, a, u) {
            return (
              u && typeof u != "number" && sr(n, a, u) && (a = u = t),
              (n = vi(n)),
              a === t ? ((a = n), (n = 0)) : (a = vi(a)),
              (u = u === t ? (n < a ? 1 : -1) : vi(u)),
              ty(n, a, u, r)
            );
          };
        }
        function Fo(r) {
          return function (n, a) {
            return (
              (typeof n == "string" && typeof a == "string") ||
                ((n = qr(n)), (a = qr(a))),
              r(n, a)
            );
          };
        }
        function fl(r, n, a, u, y, w, x, N, j, G) {
          var Y = n & U,
            re = Y ? x : t,
            ce = Y ? t : x,
            pe = Y ? w : t,
            we = Y ? t : w;
          (n |= Y ? A : C), (n &= ~(Y ? C : A)), n & F || (n &= ~(H | Z));
          var Be = [r, n, y, pe, re, we, ce, N, j, G],
            be = a.apply(t, Be);
          return Tc(r) && Sl(be, Be), (be.placeholder = u), Il(be, r, n);
        }
        function Sc(r) {
          var n = zt[r];
          return function (a, u) {
            if (
              ((a = qr(a)), (u = u == null ? 0 : Qt(Me(u), 292)), u && Ih(a))
            ) {
              var y = (rt(a) + "e").split("e"),
                w = n(y[0] + "e" + (+y[1] + u));
              return (
                (y = (rt(w) + "e").split("e")), +(y[0] + "e" + (+y[1] - u))
              );
            }
            return n(a);
          };
        }
        var vy =
          On && 1 / co(new On([, -0]))[1] == J
            ? function (r) {
                return new On(r);
              }
            : Vc;
        function dl(r) {
          return function (n) {
            var a = Xt(n);
            return a == Ee ? ec(n) : a == Ie ? Fg(n) : xg(n, r(n));
          };
        }
        function di(r, n, a, u, y, w, x, N) {
          var j = n & Z;
          if (!j && typeof r != "function") throw new $r(f);
          var G = u ? u.length : 0;
          if (
            (G || ((n &= ~(A | C)), (u = y = t)),
            (x = x === t ? x : Ht(Me(x), 0)),
            (N = N === t ? N : Me(N)),
            (G -= y ? y.length : 0),
            n & C)
          ) {
            var Y = u,
              re = y;
            u = y = t;
          }
          var ce = j ? t : Oc(r),
            pe = [r, n, a, u, y, Y, re, w, x, N];
          if (
            (ce && Ry(pe, ce),
            (r = pe[0]),
            (n = pe[1]),
            (a = pe[2]),
            (u = pe[3]),
            (y = pe[4]),
            (N = pe[9] = pe[9] === t ? (j ? 0 : r.length) : Ht(pe[9] - G, 0)),
            !N && n & (U | I) && (n &= ~(U | I)),
            !n || n == H)
          )
            var we = py(r, n, a);
          else
            n == U || n == I
              ? (we = gy(r, n, N))
              : (n == A || n == (H | A)) && !y.length
              ? (we = yy(r, n, a, u))
              : (we = To.apply(t, pe));
          var Be = ce ? Wh : Sl;
          return Il(Be(we, pe), r, n);
        }
        function pl(r, n, a, u) {
          return r === t || (Vr(r, xn[a]) && !it.call(u, a)) ? n : r;
        }
        function gl(r, n, a, u, y, w) {
          return (
            Et(r) && Et(n) && (w.set(n, r), Oo(r, n, t, gl, w), w.delete(n)), r
          );
        }
        function my(r) {
          return ps(r) ? t : r;
        }
        function yl(r, n, a, u, y, w) {
          var x = a & S,
            N = r.length,
            j = n.length;
          if (N != j && !(x && j > N)) return !1;
          var G = w.get(r),
            Y = w.get(n);
          if (G && Y) return G == n && Y == r;
          var re = -1,
            ce = !0,
            pe = a & K ? new Xi() : t;
          for (w.set(r, n), w.set(n, r); ++re < N; ) {
            var we = r[re],
              Be = n[re];
            if (u) var be = x ? u(Be, we, re, n, r, w) : u(we, Be, re, r, n, w);
            if (be !== t) {
              if (be) continue;
              ce = !1;
              break;
            }
            if (pe) {
              if (
                !Ga(n, function (We, Xe) {
                  if (!es(pe, Xe) && (we === We || y(we, We, a, u, w)))
                    return pe.push(Xe);
                })
              ) {
                ce = !1;
                break;
              }
            } else if (!(we === Be || y(we, Be, a, u, w))) {
              ce = !1;
              break;
            }
          }
          return w.delete(r), w.delete(n), ce;
        }
        function wy(r, n, a, u, y, w, x) {
          switch (a) {
            case Pe:
              if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
                return !1;
              (r = r.buffer), (n = n.buffer);
            case _e:
              return !(
                r.byteLength != n.byteLength || !w(new go(r), new go(n))
              );
            case q:
            case $:
            case ze:
              return Vr(+r, +n);
            case T:
              return r.name == n.name && r.message == n.message;
            case je:
            case Ne:
              return r == n + "";
            case Ee:
              var N = ec;
            case Ie:
              var j = u & S;
              if ((N || (N = co), r.size != n.size && !j)) return !1;
              var G = x.get(r);
              if (G) return G == n;
              (u |= K), x.set(r, n);
              var Y = yl(N(r), N(n), u, y, w, x);
              return x.delete(r), Y;
            case Fe:
              if (ss) return ss.call(r) == ss.call(n);
          }
          return !1;
        }
        function by(r, n, a, u, y, w) {
          var x = a & S,
            N = Ic(r),
            j = N.length,
            G = Ic(n),
            Y = G.length;
          if (j != Y && !x) return !1;
          for (var re = j; re--; ) {
            var ce = N[re];
            if (!(x ? ce in n : it.call(n, ce))) return !1;
          }
          var pe = w.get(r),
            we = w.get(n);
          if (pe && we) return pe == n && we == r;
          var Be = !0;
          w.set(r, n), w.set(n, r);
          for (var be = x; ++re < j; ) {
            ce = N[re];
            var We = r[ce],
              Xe = n[ce];
            if (u) var xr = x ? u(Xe, We, ce, n, r, w) : u(We, Xe, ce, r, n, w);
            if (!(xr === t ? We === Xe || y(We, Xe, a, u, w) : xr)) {
              Be = !1;
              break;
            }
            be || (be = ce == "constructor");
          }
          if (Be && !be) {
            var or = r.constructor,
              Or = n.constructor;
            or != Or &&
              "constructor" in r &&
              "constructor" in n &&
              !(
                typeof or == "function" &&
                or instanceof or &&
                typeof Or == "function" &&
                Or instanceof Or
              ) &&
              (Be = !1);
          }
          return w.delete(r), w.delete(n), Be;
        }
        function pi(r) {
          return Nc(El(r, t, Tl), r + "");
        }
        function Ic(r) {
          return Lh(r, kt, Ac);
        }
        function xc(r) {
          return Lh(r, gr, vl);
        }
        var Oc = _o
          ? function (r) {
              return _o.get(r);
            }
          : Vc;
        function $o(r) {
          for (
            var n = r.name + "", a = Pn[n], u = it.call(Pn, n) ? a.length : 0;
            u--;

          ) {
            var y = a[u],
              w = y.func;
            if (w == null || w == r) return y.name;
          }
          return n;
        }
        function Rn(r) {
          var n = it.call(m, "placeholder") ? m : r;
          return n.placeholder;
        }
        function me() {
          var r = m.iteratee || Kc;
          return (
            (r = r === Kc ? jh : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          );
        }
        function Lo(r, n) {
          var a = r.__data__;
          return Py(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
        }
        function Pc(r) {
          for (var n = kt(r), a = n.length; a--; ) {
            var u = n[a],
              y = r[u];
            n[a] = [u, y, bl(y)];
          }
          return n;
        }
        function tn(r, n) {
          var a = Tg(r, n);
          return Mh(a) ? a : t;
        }
        function _y(r) {
          var n = it.call(r, Ji),
            a = r[Ji];
          try {
            r[Ji] = t;
            var u = !0;
          } catch {}
          var y = fo.call(r);
          return u && (n ? (r[Ji] = a) : delete r[Ji]), y;
        }
        var Ac = rc
            ? function (r) {
                return r == null
                  ? []
                  : ((r = ut(r)),
                    Ci(rc(r), function (n) {
                      return Dh.call(r, n);
                    }));
              }
            : Wc,
          vl = rc
            ? function (r) {
                for (var n = []; r; ) Ti(n, Ac(r)), (r = yo(r));
                return n;
              }
            : Wc,
          Xt = nr;
        ((ic && Xt(new ic(new ArrayBuffer(1))) != Pe) ||
          (rs && Xt(new rs()) != Ee) ||
          (nc && Xt(nc.resolve()) != pt) ||
          (On && Xt(new On()) != Ie) ||
          (is && Xt(new is()) != Oe)) &&
          (Xt = function (r) {
            var n = nr(r),
              a = n == Ue ? r.constructor : t,
              u = a ? rn(a) : "";
            if (u)
              switch (u) {
                case i0:
                  return Pe;
                case n0:
                  return Ee;
                case s0:
                  return pt;
                case o0:
                  return Ie;
                case a0:
                  return Oe;
              }
            return n;
          });
        function Ey(r, n, a) {
          for (var u = -1, y = a.length; ++u < y; ) {
            var w = a[u],
              x = w.size;
            switch (w.type) {
              case "drop":
                r += x;
                break;
              case "dropRight":
                n -= x;
                break;
              case "take":
                n = Qt(n, r + x);
                break;
              case "takeRight":
                r = Ht(r, n - x);
                break;
            }
          }
          return { start: r, end: n };
        }
        function Dy(r) {
          var n = r.match(ht);
          return n ? n[1].split(Mt) : [];
        }
        function ml(r, n, a) {
          n = Li(n, r);
          for (var u = -1, y = n.length, w = !1; ++u < y; ) {
            var x = ri(n[u]);
            if (!(w = r != null && a(r, x))) break;
            r = r[x];
          }
          return w || ++u != y
            ? w
            : ((y = r == null ? 0 : r.length),
              !!y && Ho(y) && gi(x, y) && (Re(r) || nn(r)));
        }
        function Sy(r) {
          var n = r.length,
            a = new r.constructor(n);
          return (
            n &&
              typeof r[0] == "string" &&
              it.call(r, "index") &&
              ((a.index = r.index), (a.input = r.input)),
            a
          );
        }
        function wl(r) {
          return typeof r.constructor == "function" && !fs(r) ? An(yo(r)) : {};
        }
        function Iy(r, n, a) {
          var u = r.constructor;
          switch (n) {
            case _e:
              return Ec(r);
            case q:
            case $:
              return new u(+r);
            case Pe:
              return cy(r, a);
            case He:
            case xe:
            case Ve:
            case Ge:
            case Ze:
            case et:
            case Je:
            case tr:
            case lr:
              return tl(r, a);
            case Ee:
              return new u();
            case ze:
            case Ne:
              return new u(r);
            case je:
              return uy(r);
            case Ie:
              return new u();
            case Fe:
              return hy(r);
          }
        }
        function xy(r, n) {
          var a = n.length;
          if (!a) return r;
          var u = a - 1;
          return (
            (n[u] = (a > 1 ? "& " : "") + n[u]),
            (n = n.join(a > 2 ? ", " : " ")),
            r.replace(
              Pt,
              `{
/* [wrapped with ` +
                n +
                `] */
`
            )
          );
        }
        function Oy(r) {
          return Re(r) || nn(r) || !!(Sh && r && r[Sh]);
        }
        function gi(r, n) {
          var a = typeof r;
          return (
            (n = n ?? k),
            !!n &&
              (a == "number" || (a != "symbol" && Ra.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < n
          );
        }
        function sr(r, n, a) {
          if (!Et(a)) return !1;
          var u = typeof n;
          return (
            u == "number" ? pr(a) && gi(n, a.length) : u == "string" && n in a
          )
            ? Vr(a[n], r)
            : !1;
        }
        function Cc(r, n) {
          if (Re(r)) return !1;
          var a = typeof r;
          return a == "number" ||
            a == "symbol" ||
            a == "boolean" ||
            r == null ||
            Ir(r)
            ? !0
            : $t.test(r) || !vt.test(r) || (n != null && r in ut(n));
        }
        function Py(r) {
          var n = typeof r;
          return n == "string" ||
            n == "number" ||
            n == "symbol" ||
            n == "boolean"
            ? r !== "__proto__"
            : r === null;
        }
        function Tc(r) {
          var n = $o(r),
            a = m[n];
          if (typeof a != "function" || !(n in Ye.prototype)) return !1;
          if (r === a) return !0;
          var u = Oc(a);
          return !!u && r === u[0];
        }
        function Ay(r) {
          return !!bh && bh in r;
        }
        var Cy = ho ? yi : Gc;
        function fs(r) {
          var n = r && r.constructor,
            a = (typeof n == "function" && n.prototype) || xn;
          return r === a;
        }
        function bl(r) {
          return r === r && !Et(r);
        }
        function _l(r, n) {
          return function (a) {
            return a == null ? !1 : a[r] === n && (n !== t || r in ut(a));
          };
        }
        function Ty(r) {
          var n = Bo(r, function (u) {
              return a.size === g && a.clear(), u;
            }),
            a = n.cache;
          return n;
        }
        function Ry(r, n) {
          var a = r[1],
            u = n[1],
            y = a | u,
            w = y < (H | Z | h),
            x =
              (u == h && a == U) ||
              (u == h && a == _ && r[7].length <= n[8]) ||
              (u == (h | _) && n[7].length <= n[8] && a == U);
          if (!(w || x)) return r;
          u & H && ((r[2] = n[2]), (y |= a & H ? 0 : F));
          var N = n[3];
          if (N) {
            var j = r[3];
            (r[3] = j ? il(j, N, n[4]) : N), (r[4] = j ? Ri(r[3], v) : n[4]);
          }
          return (
            (N = n[5]),
            N &&
              ((j = r[5]),
              (r[5] = j ? nl(j, N, n[6]) : N),
              (r[6] = j ? Ri(r[5], v) : n[6])),
            (N = n[7]),
            N && (r[7] = N),
            u & h && (r[8] = r[8] == null ? n[8] : Qt(r[8], n[8])),
            r[9] == null && (r[9] = n[9]),
            (r[0] = n[0]),
            (r[1] = y),
            r
          );
        }
        function Ny(r) {
          var n = [];
          if (r != null) for (var a in ut(r)) n.push(a);
          return n;
        }
        function Fy(r) {
          return fo.call(r);
        }
        function El(r, n, a) {
          return (
            (n = Ht(n === t ? r.length - 1 : n, 0)),
            function () {
              for (
                var u = arguments, y = -1, w = Ht(u.length - n, 0), x = z(w);
                ++y < w;

              )
                x[y] = u[n + y];
              y = -1;
              for (var N = z(n + 1); ++y < n; ) N[y] = u[y];
              return (N[n] = a(x)), Kt(r, this, N);
            }
          );
        }
        function Dl(r, n) {
          return n.length < 2 ? r : en(r, Mr(n, 0, -1));
        }
        function $y(r, n) {
          for (var a = r.length, u = Qt(n.length, a), y = dr(r); u--; ) {
            var w = n[u];
            r[u] = gi(w, a) ? y[w] : t;
          }
          return r;
        }
        function Rc(r, n) {
          if (
            !(n === "constructor" && typeof r[n] == "function") &&
            n != "__proto__"
          )
            return r[n];
        }
        var Sl = xl(Wh),
          ds =
            Jg ||
            function (r, n) {
              return Qe.setTimeout(r, n);
            },
          Nc = xl(ny);
        function Il(r, n, a) {
          var u = n + "";
          return Nc(r, xy(u, Ly(Dy(u), a)));
        }
        function xl(r) {
          var n = 0,
            a = 0;
          return function () {
            var u = e0(),
              y = ye - (u - a);
            if (((a = u), y > 0)) {
              if (++n >= ge) return arguments[0];
            } else n = 0;
            return r.apply(t, arguments);
          };
        }
        function Uo(r, n) {
          var a = -1,
            u = r.length,
            y = u - 1;
          for (n = n === t ? u : n; ++a < n; ) {
            var w = gc(a, y),
              x = r[w];
            (r[w] = r[a]), (r[a] = x);
          }
          return (r.length = n), r;
        }
        var Ol = Ty(function (r) {
          var n = [];
          return (
            r.charCodeAt(0) === 46 && n.push(""),
            r.replace(Lt, function (a, u, y, w) {
              n.push(y ? w.replace(xa, "$1") : u || a);
            }),
            n
          );
        });
        function ri(r) {
          if (typeof r == "string" || Ir(r)) return r;
          var n = r + "";
          return n == "0" && 1 / r == -J ? "-0" : n;
        }
        function rn(r) {
          if (r != null) {
            try {
              return lo.call(r);
            } catch {}
            try {
              return r + "";
            } catch {}
          }
          return "";
        }
        function Ly(r, n) {
          return (
            Fr(Se, function (a) {
              var u = "_." + a[0];
              n & a[1] && !oo(r, u) && r.push(u);
            }),
            r.sort()
          );
        }
        function Pl(r) {
          if (r instanceof Ye) return r.clone();
          var n = new Lr(r.__wrapped__, r.__chain__);
          return (
            (n.__actions__ = dr(r.__actions__)),
            (n.__index__ = r.__index__),
            (n.__values__ = r.__values__),
            n
          );
        }
        function Uy(r, n, a) {
          (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = Ht(Me(n), 0));
          var u = r == null ? 0 : r.length;
          if (!u || n < 1) return [];
          for (var y = 0, w = 0, x = z(wo(u / n)); y < u; )
            x[w++] = Mr(r, y, (y += n));
          return x;
        }
        function My(r) {
          for (
            var n = -1, a = r == null ? 0 : r.length, u = 0, y = [];
            ++n < a;

          ) {
            var w = r[n];
            w && (y[u++] = w);
          }
          return y;
        }
        function jy() {
          var r = arguments.length;
          if (!r) return [];
          for (var n = z(r - 1), a = arguments[0], u = r; u--; )
            n[u - 1] = arguments[u];
          return Ti(Re(a) ? dr(a) : [a], Gt(n, 1));
        }
        var qy = Ke(function (r, n) {
            return Rt(r) ? as(r, Gt(n, 1, Rt, !0)) : [];
          }),
          By = Ke(function (r, n) {
            var a = jr(n);
            return (
              Rt(a) && (a = t), Rt(r) ? as(r, Gt(n, 1, Rt, !0), me(a, 2)) : []
            );
          }),
          zy = Ke(function (r, n) {
            var a = jr(n);
            return Rt(a) && (a = t), Rt(r) ? as(r, Gt(n, 1, Rt, !0), t, a) : [];
          });
        function Hy(r, n, a) {
          var u = r == null ? 0 : r.length;
          return u
            ? ((n = a || n === t ? 1 : Me(n)), Mr(r, n < 0 ? 0 : n, u))
            : [];
        }
        function Ky(r, n, a) {
          var u = r == null ? 0 : r.length;
          return u
            ? ((n = a || n === t ? 1 : Me(n)),
              (n = u - n),
              Mr(r, 0, n < 0 ? 0 : n))
            : [];
        }
        function ky(r, n) {
          return r && r.length ? Ao(r, me(n, 3), !0, !0) : [];
        }
        function Vy(r, n) {
          return r && r.length ? Ao(r, me(n, 3), !0) : [];
        }
        function Wy(r, n, a, u) {
          var y = r == null ? 0 : r.length;
          return y
            ? (a && typeof a != "number" && sr(r, n, a) && ((a = 0), (u = y)),
              j0(r, n, a, u))
            : [];
        }
        function Al(r, n, a) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var y = a == null ? 0 : Me(a);
          return y < 0 && (y = Ht(u + y, 0)), ao(r, me(n, 3), y);
        }
        function Cl(r, n, a) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var y = u - 1;
          return (
            a !== t && ((y = Me(a)), (y = a < 0 ? Ht(u + y, 0) : Qt(y, u - 1))),
            ao(r, me(n, 3), y, !0)
          );
        }
        function Tl(r) {
          var n = r == null ? 0 : r.length;
          return n ? Gt(r, 1) : [];
        }
        function Gy(r) {
          var n = r == null ? 0 : r.length;
          return n ? Gt(r, J) : [];
        }
        function Yy(r, n) {
          var a = r == null ? 0 : r.length;
          return a ? ((n = n === t ? 1 : Me(n)), Gt(r, n)) : [];
        }
        function Jy(r) {
          for (var n = -1, a = r == null ? 0 : r.length, u = {}; ++n < a; ) {
            var y = r[n];
            u[y[0]] = y[1];
          }
          return u;
        }
        function Rl(r) {
          return r && r.length ? r[0] : t;
        }
        function Qy(r, n, a) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var y = a == null ? 0 : Me(a);
          return y < 0 && (y = Ht(u + y, 0)), En(r, n, y);
        }
        function Xy(r) {
          var n = r == null ? 0 : r.length;
          return n ? Mr(r, 0, -1) : [];
        }
        var Zy = Ke(function (r) {
            var n = mt(r, bc);
            return n.length && n[0] === r[0] ? hc(n) : [];
          }),
          ev = Ke(function (r) {
            var n = jr(r),
              a = mt(r, bc);
            return (
              n === jr(a) ? (n = t) : a.pop(),
              a.length && a[0] === r[0] ? hc(a, me(n, 2)) : []
            );
          }),
          tv = Ke(function (r) {
            var n = jr(r),
              a = mt(r, bc);
            return (
              (n = typeof n == "function" ? n : t),
              n && a.pop(),
              a.length && a[0] === r[0] ? hc(a, t, n) : []
            );
          });
        function rv(r, n) {
          return r == null ? "" : Xg.call(r, n);
        }
        function jr(r) {
          var n = r == null ? 0 : r.length;
          return n ? r[n - 1] : t;
        }
        function iv(r, n, a) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var y = u;
          return (
            a !== t && ((y = Me(a)), (y = y < 0 ? Ht(u + y, 0) : Qt(y, u - 1))),
            n === n ? Lg(r, n, y) : ao(r, fh, y, !0)
          );
        }
        function nv(r, n) {
          return r && r.length ? Hh(r, Me(n)) : t;
        }
        var sv = Ke(Nl);
        function Nl(r, n) {
          return r && r.length && n && n.length ? pc(r, n) : r;
        }
        function ov(r, n, a) {
          return r && r.length && n && n.length ? pc(r, n, me(a, 2)) : r;
        }
        function av(r, n, a) {
          return r && r.length && n && n.length ? pc(r, n, t, a) : r;
        }
        var cv = pi(function (r, n) {
          var a = r == null ? 0 : r.length,
            u = oc(r, n);
          return (
            Vh(
              r,
              mt(n, function (y) {
                return gi(y, a) ? +y : y;
              }).sort(rl)
            ),
            u
          );
        });
        function uv(r, n) {
          var a = [];
          if (!(r && r.length)) return a;
          var u = -1,
            y = [],
            w = r.length;
          for (n = me(n, 3); ++u < w; ) {
            var x = r[u];
            n(x, u, r) && (a.push(x), y.push(u));
          }
          return Vh(r, y), a;
        }
        function Fc(r) {
          return r == null ? r : r0.call(r);
        }
        function hv(r, n, a) {
          var u = r == null ? 0 : r.length;
          return u
            ? (a && typeof a != "number" && sr(r, n, a)
                ? ((n = 0), (a = u))
                : ((n = n == null ? 0 : Me(n)), (a = a === t ? u : Me(a))),
              Mr(r, n, a))
            : [];
        }
        function lv(r, n) {
          return Po(r, n);
        }
        function fv(r, n, a) {
          return vc(r, n, me(a, 2));
        }
        function dv(r, n) {
          var a = r == null ? 0 : r.length;
          if (a) {
            var u = Po(r, n);
            if (u < a && Vr(r[u], n)) return u;
          }
          return -1;
        }
        function pv(r, n) {
          return Po(r, n, !0);
        }
        function gv(r, n, a) {
          return vc(r, n, me(a, 2), !0);
        }
        function yv(r, n) {
          var a = r == null ? 0 : r.length;
          if (a) {
            var u = Po(r, n, !0) - 1;
            if (Vr(r[u], n)) return u;
          }
          return -1;
        }
        function vv(r) {
          return r && r.length ? Gh(r) : [];
        }
        function mv(r, n) {
          return r && r.length ? Gh(r, me(n, 2)) : [];
        }
        function wv(r) {
          var n = r == null ? 0 : r.length;
          return n ? Mr(r, 1, n) : [];
        }
        function bv(r, n, a) {
          return r && r.length
            ? ((n = a || n === t ? 1 : Me(n)), Mr(r, 0, n < 0 ? 0 : n))
            : [];
        }
        function _v(r, n, a) {
          var u = r == null ? 0 : r.length;
          return u
            ? ((n = a || n === t ? 1 : Me(n)),
              (n = u - n),
              Mr(r, n < 0 ? 0 : n, u))
            : [];
        }
        function Ev(r, n) {
          return r && r.length ? Ao(r, me(n, 3), !1, !0) : [];
        }
        function Dv(r, n) {
          return r && r.length ? Ao(r, me(n, 3)) : [];
        }
        var Sv = Ke(function (r) {
            return $i(Gt(r, 1, Rt, !0));
          }),
          Iv = Ke(function (r) {
            var n = jr(r);
            return Rt(n) && (n = t), $i(Gt(r, 1, Rt, !0), me(n, 2));
          }),
          xv = Ke(function (r) {
            var n = jr(r);
            return (
              (n = typeof n == "function" ? n : t), $i(Gt(r, 1, Rt, !0), t, n)
            );
          });
        function Ov(r) {
          return r && r.length ? $i(r) : [];
        }
        function Pv(r, n) {
          return r && r.length ? $i(r, me(n, 2)) : [];
        }
        function Av(r, n) {
          return (
            (n = typeof n == "function" ? n : t),
            r && r.length ? $i(r, t, n) : []
          );
        }
        function $c(r) {
          if (!(r && r.length)) return [];
          var n = 0;
          return (
            (r = Ci(r, function (a) {
              if (Rt(a)) return (n = Ht(a.length, n)), !0;
            })),
            Xa(n, function (a) {
              return mt(r, Ya(a));
            })
          );
        }
        function Fl(r, n) {
          if (!(r && r.length)) return [];
          var a = $c(r);
          return n == null
            ? a
            : mt(a, function (u) {
                return Kt(n, t, u);
              });
        }
        var Cv = Ke(function (r, n) {
            return Rt(r) ? as(r, n) : [];
          }),
          Tv = Ke(function (r) {
            return wc(Ci(r, Rt));
          }),
          Rv = Ke(function (r) {
            var n = jr(r);
            return Rt(n) && (n = t), wc(Ci(r, Rt), me(n, 2));
          }),
          Nv = Ke(function (r) {
            var n = jr(r);
            return (n = typeof n == "function" ? n : t), wc(Ci(r, Rt), t, n);
          }),
          Fv = Ke($c);
        function $v(r, n) {
          return Xh(r || [], n || [], os);
        }
        function Lv(r, n) {
          return Xh(r || [], n || [], hs);
        }
        var Uv = Ke(function (r) {
          var n = r.length,
            a = n > 1 ? r[n - 1] : t;
          return (a = typeof a == "function" ? (r.pop(), a) : t), Fl(r, a);
        });
        function $l(r) {
          var n = m(r);
          return (n.__chain__ = !0), n;
        }
        function Mv(r, n) {
          return n(r), r;
        }
        function Mo(r, n) {
          return n(r);
        }
        var jv = pi(function (r) {
          var n = r.length,
            a = n ? r[0] : 0,
            u = this.__wrapped__,
            y = function (w) {
              return oc(w, r);
            };
          return n > 1 ||
            this.__actions__.length ||
            !(u instanceof Ye) ||
            !gi(a)
            ? this.thru(y)
            : ((u = u.slice(a, +a + (n ? 1 : 0))),
              u.__actions__.push({ func: Mo, args: [y], thisArg: t }),
              new Lr(u, this.__chain__).thru(function (w) {
                return n && !w.length && w.push(t), w;
              }));
        });
        function qv() {
          return $l(this);
        }
        function Bv() {
          return new Lr(this.value(), this.__chain__);
        }
        function zv() {
          this.__values__ === t && (this.__values__ = Yl(this.value()));
          var r = this.__index__ >= this.__values__.length,
            n = r ? t : this.__values__[this.__index__++];
          return { done: r, value: n };
        }
        function Hv() {
          return this;
        }
        function Kv(r) {
          for (var n, a = this; a instanceof Do; ) {
            var u = Pl(a);
            (u.__index__ = 0),
              (u.__values__ = t),
              n ? (y.__wrapped__ = u) : (n = u);
            var y = u;
            a = a.__wrapped__;
          }
          return (y.__wrapped__ = r), n;
        }
        function kv() {
          var r = this.__wrapped__;
          if (r instanceof Ye) {
            var n = r;
            return (
              this.__actions__.length && (n = new Ye(this)),
              (n = n.reverse()),
              n.__actions__.push({ func: Mo, args: [Fc], thisArg: t }),
              new Lr(n, this.__chain__)
            );
          }
          return this.thru(Fc);
        }
        function Vv() {
          return Qh(this.__wrapped__, this.__actions__);
        }
        var Wv = Co(function (r, n, a) {
          it.call(r, a) ? ++r[a] : fi(r, a, 1);
        });
        function Gv(r, n, a) {
          var u = Re(r) ? hh : M0;
          return a && sr(r, n, a) && (n = t), u(r, me(n, 3));
        }
        function Yv(r, n) {
          var a = Re(r) ? Ci : Fh;
          return a(r, me(n, 3));
        }
        var Jv = cl(Al),
          Qv = cl(Cl);
        function Xv(r, n) {
          return Gt(jo(r, n), 1);
        }
        function Zv(r, n) {
          return Gt(jo(r, n), J);
        }
        function e1(r, n, a) {
          return (a = a === t ? 1 : Me(a)), Gt(jo(r, n), a);
        }
        function Ll(r, n) {
          var a = Re(r) ? Fr : Fi;
          return a(r, me(n, 3));
        }
        function Ul(r, n) {
          var a = Re(r) ? wg : Nh;
          return a(r, me(n, 3));
        }
        var t1 = Co(function (r, n, a) {
          it.call(r, a) ? r[a].push(n) : fi(r, a, [n]);
        });
        function r1(r, n, a, u) {
          (r = pr(r) ? r : Fn(r)), (a = a && !u ? Me(a) : 0);
          var y = r.length;
          return (
            a < 0 && (a = Ht(y + a, 0)),
            Ko(r) ? a <= y && r.indexOf(n, a) > -1 : !!y && En(r, n, a) > -1
          );
        }
        var i1 = Ke(function (r, n, a) {
            var u = -1,
              y = typeof n == "function",
              w = pr(r) ? z(r.length) : [];
            return (
              Fi(r, function (x) {
                w[++u] = y ? Kt(n, x, a) : cs(x, n, a);
              }),
              w
            );
          }),
          n1 = Co(function (r, n, a) {
            fi(r, a, n);
          });
        function jo(r, n) {
          var a = Re(r) ? mt : qh;
          return a(r, me(n, 3));
        }
        function s1(r, n, a, u) {
          return r == null
            ? []
            : (Re(n) || (n = n == null ? [] : [n]),
              (a = u ? t : a),
              Re(a) || (a = a == null ? [] : [a]),
              Kh(r, n, a));
        }
        var o1 = Co(
          function (r, n, a) {
            r[a ? 0 : 1].push(n);
          },
          function () {
            return [[], []];
          }
        );
        function a1(r, n, a) {
          var u = Re(r) ? Wa : ph,
            y = arguments.length < 3;
          return u(r, me(n, 4), a, y, Fi);
        }
        function c1(r, n, a) {
          var u = Re(r) ? bg : ph,
            y = arguments.length < 3;
          return u(r, me(n, 4), a, y, Nh);
        }
        function u1(r, n) {
          var a = Re(r) ? Ci : Fh;
          return a(r, zo(me(n, 3)));
        }
        function h1(r) {
          var n = Re(r) ? Ah : ry;
          return n(r);
        }
        function l1(r, n, a) {
          (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = Me(n));
          var u = Re(r) ? N0 : iy;
          return u(r, n);
        }
        function f1(r) {
          var n = Re(r) ? F0 : sy;
          return n(r);
        }
        function d1(r) {
          if (r == null) return 0;
          if (pr(r)) return Ko(r) ? Sn(r) : r.length;
          var n = Xt(r);
          return n == Ee || n == Ie ? r.size : fc(r).length;
        }
        function p1(r, n, a) {
          var u = Re(r) ? Ga : oy;
          return a && sr(r, n, a) && (n = t), u(r, me(n, 3));
        }
        var g1 = Ke(function (r, n) {
            if (r == null) return [];
            var a = n.length;
            return (
              a > 1 && sr(r, n[0], n[1])
                ? (n = [])
                : a > 2 && sr(n[0], n[1], n[2]) && (n = [n[0]]),
              Kh(r, Gt(n, 1), [])
            );
          }),
          qo =
            Yg ||
            function () {
              return Qe.Date.now();
            };
        function y1(r, n) {
          if (typeof n != "function") throw new $r(f);
          return (
            (r = Me(r)),
            function () {
              if (--r < 1) return n.apply(this, arguments);
            }
          );
        }
        function Ml(r, n, a) {
          return (
            (n = a ? t : n),
            (n = r && n == null ? r.length : n),
            di(r, h, t, t, t, t, n)
          );
        }
        function jl(r, n) {
          var a;
          if (typeof n != "function") throw new $r(f);
          return (
            (r = Me(r)),
            function () {
              return (
                --r > 0 && (a = n.apply(this, arguments)), r <= 1 && (n = t), a
              );
            }
          );
        }
        var Lc = Ke(function (r, n, a) {
            var u = H;
            if (a.length) {
              var y = Ri(a, Rn(Lc));
              u |= A;
            }
            return di(r, u, n, a, y);
          }),
          ql = Ke(function (r, n, a) {
            var u = H | Z;
            if (a.length) {
              var y = Ri(a, Rn(ql));
              u |= A;
            }
            return di(n, u, r, a, y);
          });
        function Bl(r, n, a) {
          n = a ? t : n;
          var u = di(r, U, t, t, t, t, t, n);
          return (u.placeholder = Bl.placeholder), u;
        }
        function zl(r, n, a) {
          n = a ? t : n;
          var u = di(r, I, t, t, t, t, t, n);
          return (u.placeholder = zl.placeholder), u;
        }
        function Hl(r, n, a) {
          var u,
            y,
            w,
            x,
            N,
            j,
            G = 0,
            Y = !1,
            re = !1,
            ce = !0;
          if (typeof r != "function") throw new $r(f);
          (n = qr(n) || 0),
            Et(a) &&
              ((Y = !!a.leading),
              (re = "maxWait" in a),
              (w = re ? Ht(qr(a.maxWait) || 0, n) : w),
              (ce = "trailing" in a ? !!a.trailing : ce));
          function pe(Nt) {
            var Wr = u,
              mi = y;
            return (u = y = t), (G = Nt), (x = r.apply(mi, Wr)), x;
          }
          function we(Nt) {
            return (G = Nt), (N = ds(We, n)), Y ? pe(Nt) : x;
          }
          function Be(Nt) {
            var Wr = Nt - j,
              mi = Nt - G,
              uf = n - Wr;
            return re ? Qt(uf, w - mi) : uf;
          }
          function be(Nt) {
            var Wr = Nt - j,
              mi = Nt - G;
            return j === t || Wr >= n || Wr < 0 || (re && mi >= w);
          }
          function We() {
            var Nt = qo();
            if (be(Nt)) return Xe(Nt);
            N = ds(We, Be(Nt));
          }
          function Xe(Nt) {
            return (N = t), ce && u ? pe(Nt) : ((u = y = t), x);
          }
          function xr() {
            N !== t && Zh(N), (G = 0), (u = j = y = N = t);
          }
          function or() {
            return N === t ? x : Xe(qo());
          }
          function Or() {
            var Nt = qo(),
              Wr = be(Nt);
            if (((u = arguments), (y = this), (j = Nt), Wr)) {
              if (N === t) return we(j);
              if (re) return Zh(N), (N = ds(We, n)), pe(j);
            }
            return N === t && (N = ds(We, n)), x;
          }
          return (Or.cancel = xr), (Or.flush = or), Or;
        }
        var v1 = Ke(function (r, n) {
            return Rh(r, 1, n);
          }),
          m1 = Ke(function (r, n, a) {
            return Rh(r, qr(n) || 0, a);
          });
        function w1(r) {
          return di(r, ee);
        }
        function Bo(r, n) {
          if (typeof r != "function" || (n != null && typeof n != "function"))
            throw new $r(f);
          var a = function () {
            var u = arguments,
              y = n ? n.apply(this, u) : u[0],
              w = a.cache;
            if (w.has(y)) return w.get(y);
            var x = r.apply(this, u);
            return (a.cache = w.set(y, x) || w), x;
          };
          return (a.cache = new (Bo.Cache || li)()), a;
        }
        Bo.Cache = li;
        function zo(r) {
          if (typeof r != "function") throw new $r(f);
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !r.call(this);
              case 1:
                return !r.call(this, n[0]);
              case 2:
                return !r.call(this, n[0], n[1]);
              case 3:
                return !r.call(this, n[0], n[1], n[2]);
            }
            return !r.apply(this, n);
          };
        }
        function b1(r) {
          return jl(2, r);
        }
        var _1 = ay(function (r, n) {
            n =
              n.length == 1 && Re(n[0])
                ? mt(n[0], Dr(me()))
                : mt(Gt(n, 1), Dr(me()));
            var a = n.length;
            return Ke(function (u) {
              for (var y = -1, w = Qt(u.length, a); ++y < w; )
                u[y] = n[y].call(this, u[y]);
              return Kt(r, this, u);
            });
          }),
          Uc = Ke(function (r, n) {
            var a = Ri(n, Rn(Uc));
            return di(r, A, t, n, a);
          }),
          Kl = Ke(function (r, n) {
            var a = Ri(n, Rn(Kl));
            return di(r, C, t, n, a);
          }),
          E1 = pi(function (r, n) {
            return di(r, _, t, t, t, n);
          });
        function D1(r, n) {
          if (typeof r != "function") throw new $r(f);
          return (n = n === t ? n : Me(n)), Ke(r, n);
        }
        function S1(r, n) {
          if (typeof r != "function") throw new $r(f);
          return (
            (n = n == null ? 0 : Ht(Me(n), 0)),
            Ke(function (a) {
              var u = a[n],
                y = Ui(a, 0, n);
              return u && Ti(y, u), Kt(r, this, y);
            })
          );
        }
        function I1(r, n, a) {
          var u = !0,
            y = !0;
          if (typeof r != "function") throw new $r(f);
          return (
            Et(a) &&
              ((u = "leading" in a ? !!a.leading : u),
              (y = "trailing" in a ? !!a.trailing : y)),
            Hl(r, n, { leading: u, maxWait: n, trailing: y })
          );
        }
        function x1(r) {
          return Ml(r, 1);
        }
        function O1(r, n) {
          return Uc(_c(n), r);
        }
        function P1() {
          if (!arguments.length) return [];
          var r = arguments[0];
          return Re(r) ? r : [r];
        }
        function A1(r) {
          return Ur(r, P);
        }
        function C1(r, n) {
          return (n = typeof n == "function" ? n : t), Ur(r, P, n);
        }
        function T1(r) {
          return Ur(r, b | P);
        }
        function R1(r, n) {
          return (n = typeof n == "function" ? n : t), Ur(r, b | P, n);
        }
        function N1(r, n) {
          return n == null || Th(r, n, kt(n));
        }
        function Vr(r, n) {
          return r === n || (r !== r && n !== n);
        }
        var F1 = Fo(uc),
          $1 = Fo(function (r, n) {
            return r >= n;
          }),
          nn = Uh(
            (function () {
              return arguments;
            })()
          )
            ? Uh
            : function (r) {
                return At(r) && it.call(r, "callee") && !Dh.call(r, "callee");
              },
          Re = z.isArray,
          L1 = ir ? Dr(ir) : K0;
        function pr(r) {
          return r != null && Ho(r.length) && !yi(r);
        }
        function Rt(r) {
          return At(r) && pr(r);
        }
        function U1(r) {
          return r === !0 || r === !1 || (At(r) && nr(r) == q);
        }
        var Mi = Qg || Gc,
          M1 = Hr ? Dr(Hr) : k0;
        function j1(r) {
          return At(r) && r.nodeType === 1 && !ps(r);
        }
        function q1(r) {
          if (r == null) return !0;
          if (
            pr(r) &&
            (Re(r) ||
              typeof r == "string" ||
              typeof r.splice == "function" ||
              Mi(r) ||
              Nn(r) ||
              nn(r))
          )
            return !r.length;
          var n = Xt(r);
          if (n == Ee || n == Ie) return !r.size;
          if (fs(r)) return !fc(r).length;
          for (var a in r) if (it.call(r, a)) return !1;
          return !0;
        }
        function B1(r, n) {
          return us(r, n);
        }
        function z1(r, n, a) {
          a = typeof a == "function" ? a : t;
          var u = a ? a(r, n) : t;
          return u === t ? us(r, n, t, a) : !!u;
        }
        function Mc(r) {
          if (!At(r)) return !1;
          var n = nr(r);
          return (
            n == T ||
            n == l ||
            (typeof r.message == "string" &&
              typeof r.name == "string" &&
              !ps(r))
          );
        }
        function H1(r) {
          return typeof r == "number" && Ih(r);
        }
        function yi(r) {
          if (!Et(r)) return !1;
          var n = nr(r);
          return n == se || n == he || n == B || n == gt;
        }
        function kl(r) {
          return typeof r == "number" && r == Me(r);
        }
        function Ho(r) {
          return typeof r == "number" && r > -1 && r % 1 == 0 && r <= k;
        }
        function Et(r) {
          var n = typeof r;
          return r != null && (n == "object" || n == "function");
        }
        function At(r) {
          return r != null && typeof r == "object";
        }
        var Vl = Nr ? Dr(Nr) : W0;
        function K1(r, n) {
          return r === n || lc(r, n, Pc(n));
        }
        function k1(r, n, a) {
          return (a = typeof a == "function" ? a : t), lc(r, n, Pc(n), a);
        }
        function V1(r) {
          return Wl(r) && r != +r;
        }
        function W1(r) {
          if (Cy(r)) throw new Ae(c);
          return Mh(r);
        }
        function G1(r) {
          return r === null;
        }
        function Y1(r) {
          return r == null;
        }
        function Wl(r) {
          return typeof r == "number" || (At(r) && nr(r) == ze);
        }
        function ps(r) {
          if (!At(r) || nr(r) != Ue) return !1;
          var n = yo(r);
          if (n === null) return !0;
          var a = it.call(n, "constructor") && n.constructor;
          return typeof a == "function" && a instanceof a && lo.call(a) == kg;
        }
        var jc = Zr ? Dr(Zr) : G0;
        function J1(r) {
          return kl(r) && r >= -k && r <= k;
        }
        var Gl = Zn ? Dr(Zn) : Y0;
        function Ko(r) {
          return typeof r == "string" || (!Re(r) && At(r) && nr(r) == Ne);
        }
        function Ir(r) {
          return typeof r == "symbol" || (At(r) && nr(r) == Fe);
        }
        var Nn = Yi ? Dr(Yi) : J0;
        function Q1(r) {
          return r === t;
        }
        function X1(r) {
          return At(r) && Xt(r) == Oe;
        }
        function Z1(r) {
          return At(r) && nr(r) == $e;
        }
        var em = Fo(dc),
          tm = Fo(function (r, n) {
            return r <= n;
          });
        function Yl(r) {
          if (!r) return [];
          if (pr(r)) return Ko(r) ? Kr(r) : dr(r);
          if (ts && r[ts]) return Ng(r[ts]());
          var n = Xt(r),
            a = n == Ee ? ec : n == Ie ? co : Fn;
          return a(r);
        }
        function vi(r) {
          if (!r) return r === 0 ? r : 0;
          if (((r = qr(r)), r === J || r === -J)) {
            var n = r < 0 ? -1 : 1;
            return n * V;
          }
          return r === r ? r : 0;
        }
        function Me(r) {
          var n = vi(r),
            a = n % 1;
          return n === n ? (a ? n - a : n) : 0;
        }
        function Jl(r) {
          return r ? Zi(Me(r), 0, ie) : 0;
        }
        function qr(r) {
          if (typeof r == "number") return r;
          if (Ir(r)) return te;
          if (Et(r)) {
            var n = typeof r.valueOf == "function" ? r.valueOf() : r;
            r = Et(n) ? n + "" : n;
          }
          if (typeof r != "string") return r === 0 ? r : +r;
          r = gh(r);
          var a = Aa.test(r);
          return a || Ta.test(r)
            ? Te(r.slice(2), a ? 2 : 8)
            : Pa.test(r)
            ? te
            : +r;
        }
        function Ql(r) {
          return ti(r, gr(r));
        }
        function rm(r) {
          return r ? Zi(Me(r), -k, k) : r === 0 ? r : 0;
        }
        function rt(r) {
          return r == null ? "" : Sr(r);
        }
        var im = Cn(function (r, n) {
            if (fs(n) || pr(n)) {
              ti(n, kt(n), r);
              return;
            }
            for (var a in n) it.call(n, a) && os(r, a, n[a]);
          }),
          Xl = Cn(function (r, n) {
            ti(n, gr(n), r);
          }),
          ko = Cn(function (r, n, a, u) {
            ti(n, gr(n), r, u);
          }),
          nm = Cn(function (r, n, a, u) {
            ti(n, kt(n), r, u);
          }),
          sm = pi(oc);
        function om(r, n) {
          var a = An(r);
          return n == null ? a : Ch(a, n);
        }
        var am = Ke(function (r, n) {
            r = ut(r);
            var a = -1,
              u = n.length,
              y = u > 2 ? n[2] : t;
            for (y && sr(n[0], n[1], y) && (u = 1); ++a < u; )
              for (var w = n[a], x = gr(w), N = -1, j = x.length; ++N < j; ) {
                var G = x[N],
                  Y = r[G];
                (Y === t || (Vr(Y, xn[G]) && !it.call(r, G))) && (r[G] = w[G]);
              }
            return r;
          }),
          cm = Ke(function (r) {
            return r.push(t, gl), Kt(Zl, t, r);
          });
        function um(r, n) {
          return lh(r, me(n, 3), ei);
        }
        function hm(r, n) {
          return lh(r, me(n, 3), cc);
        }
        function lm(r, n) {
          return r == null ? r : ac(r, me(n, 3), gr);
        }
        function fm(r, n) {
          return r == null ? r : $h(r, me(n, 3), gr);
        }
        function dm(r, n) {
          return r && ei(r, me(n, 3));
        }
        function pm(r, n) {
          return r && cc(r, me(n, 3));
        }
        function gm(r) {
          return r == null ? [] : xo(r, kt(r));
        }
        function ym(r) {
          return r == null ? [] : xo(r, gr(r));
        }
        function qc(r, n, a) {
          var u = r == null ? t : en(r, n);
          return u === t ? a : u;
        }
        function vm(r, n) {
          return r != null && ml(r, n, q0);
        }
        function Bc(r, n) {
          return r != null && ml(r, n, B0);
        }
        var mm = hl(function (r, n, a) {
            n != null && typeof n.toString != "function" && (n = fo.call(n)),
              (r[n] = a);
          }, Hc(yr)),
          wm = hl(function (r, n, a) {
            n != null && typeof n.toString != "function" && (n = fo.call(n)),
              it.call(r, n) ? r[n].push(a) : (r[n] = [a]);
          }, me),
          bm = Ke(cs);
        function kt(r) {
          return pr(r) ? Ph(r) : fc(r);
        }
        function gr(r) {
          return pr(r) ? Ph(r, !0) : Q0(r);
        }
        function _m(r, n) {
          var a = {};
          return (
            (n = me(n, 3)),
            ei(r, function (u, y, w) {
              fi(a, n(u, y, w), u);
            }),
            a
          );
        }
        function Em(r, n) {
          var a = {};
          return (
            (n = me(n, 3)),
            ei(r, function (u, y, w) {
              fi(a, y, n(u, y, w));
            }),
            a
          );
        }
        var Dm = Cn(function (r, n, a) {
            Oo(r, n, a);
          }),
          Zl = Cn(function (r, n, a, u) {
            Oo(r, n, a, u);
          }),
          Sm = pi(function (r, n) {
            var a = {};
            if (r == null) return a;
            var u = !1;
            (n = mt(n, function (w) {
              return (w = Li(w, r)), u || (u = w.length > 1), w;
            })),
              ti(r, xc(r), a),
              u && (a = Ur(a, b | O | P, my));
            for (var y = n.length; y--; ) mc(a, n[y]);
            return a;
          });
        function Im(r, n) {
          return ef(r, zo(me(n)));
        }
        var xm = pi(function (r, n) {
          return r == null ? {} : Z0(r, n);
        });
        function ef(r, n) {
          if (r == null) return {};
          var a = mt(xc(r), function (u) {
            return [u];
          });
          return (
            (n = me(n)),
            kh(r, a, function (u, y) {
              return n(u, y[0]);
            })
          );
        }
        function Om(r, n, a) {
          n = Li(n, r);
          var u = -1,
            y = n.length;
          for (y || ((y = 1), (r = t)); ++u < y; ) {
            var w = r == null ? t : r[ri(n[u])];
            w === t && ((u = y), (w = a)), (r = yi(w) ? w.call(r) : w);
          }
          return r;
        }
        function Pm(r, n, a) {
          return r == null ? r : hs(r, n, a);
        }
        function Am(r, n, a, u) {
          return (
            (u = typeof u == "function" ? u : t), r == null ? r : hs(r, n, a, u)
          );
        }
        var tf = dl(kt),
          rf = dl(gr);
        function Cm(r, n, a) {
          var u = Re(r),
            y = u || Mi(r) || Nn(r);
          if (((n = me(n, 4)), a == null)) {
            var w = r && r.constructor;
            y
              ? (a = u ? new w() : [])
              : Et(r)
              ? (a = yi(w) ? An(yo(r)) : {})
              : (a = {});
          }
          return (
            (y ? Fr : ei)(r, function (x, N, j) {
              return n(a, x, N, j);
            }),
            a
          );
        }
        function Tm(r, n) {
          return r == null ? !0 : mc(r, n);
        }
        function Rm(r, n, a) {
          return r == null ? r : Jh(r, n, _c(a));
        }
        function Nm(r, n, a, u) {
          return (
            (u = typeof u == "function" ? u : t),
            r == null ? r : Jh(r, n, _c(a), u)
          );
        }
        function Fn(r) {
          return r == null ? [] : Za(r, kt(r));
        }
        function Fm(r) {
          return r == null ? [] : Za(r, gr(r));
        }
        function $m(r, n, a) {
          return (
            a === t && ((a = n), (n = t)),
            a !== t && ((a = qr(a)), (a = a === a ? a : 0)),
            n !== t && ((n = qr(n)), (n = n === n ? n : 0)),
            Zi(qr(r), n, a)
          );
        }
        function Lm(r, n, a) {
          return (
            (n = vi(n)),
            a === t ? ((a = n), (n = 0)) : (a = vi(a)),
            (r = qr(r)),
            z0(r, n, a)
          );
        }
        function Um(r, n, a) {
          if (
            (a && typeof a != "boolean" && sr(r, n, a) && (n = a = t),
            a === t &&
              (typeof n == "boolean"
                ? ((a = n), (n = t))
                : typeof r == "boolean" && ((a = r), (r = t))),
            r === t && n === t
              ? ((r = 0), (n = 1))
              : ((r = vi(r)), n === t ? ((n = r), (r = 0)) : (n = vi(n))),
            r > n)
          ) {
            var u = r;
            (r = n), (n = u);
          }
          if (a || r % 1 || n % 1) {
            var y = xh();
            return Qt(r + y * (n - r + at("1e-" + ((y + "").length - 1))), n);
          }
          return gc(r, n);
        }
        var Mm = Tn(function (r, n, a) {
          return (n = n.toLowerCase()), r + (a ? nf(n) : n);
        });
        function nf(r) {
          return zc(rt(r).toLowerCase());
        }
        function sf(r) {
          return (r = rt(r)), r && r.replace(ci, Pg).replace(Ka, "");
        }
        function jm(r, n, a) {
          (r = rt(r)), (n = Sr(n));
          var u = r.length;
          a = a === t ? u : Zi(Me(a), 0, u);
          var y = a;
          return (a -= n.length), a >= 0 && r.slice(a, y) == n;
        }
        function qm(r) {
          return (r = rt(r)), r && yt.test(r) ? r.replace(Ki, Ag) : r;
        }
        function Bm(r) {
          return (r = rt(r)), r && Ut.test(r) ? r.replace(xt, "\\$&") : r;
        }
        var zm = Tn(function (r, n, a) {
            return r + (a ? "-" : "") + n.toLowerCase();
          }),
          Hm = Tn(function (r, n, a) {
            return r + (a ? " " : "") + n.toLowerCase();
          }),
          Km = al("toLowerCase");
        function km(r, n, a) {
          (r = rt(r)), (n = Me(n));
          var u = n ? Sn(r) : 0;
          if (!n || u >= n) return r;
          var y = (n - u) / 2;
          return No(bo(y), a) + r + No(wo(y), a);
        }
        function Vm(r, n, a) {
          (r = rt(r)), (n = Me(n));
          var u = n ? Sn(r) : 0;
          return n && u < n ? r + No(n - u, a) : r;
        }
        function Wm(r, n, a) {
          (r = rt(r)), (n = Me(n));
          var u = n ? Sn(r) : 0;
          return n && u < n ? No(n - u, a) + r : r;
        }
        function Gm(r, n, a) {
          return (
            a || n == null ? (n = 0) : n && (n = +n),
            t0(rt(r).replace(Ot, ""), n || 0)
          );
        }
        function Ym(r, n, a) {
          return (
            (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = Me(n)), yc(rt(r), n)
          );
        }
        function Jm() {
          var r = arguments,
            n = rt(r[0]);
          return r.length < 3 ? n : n.replace(r[1], r[2]);
        }
        var Qm = Tn(function (r, n, a) {
          return r + (a ? "_" : "") + n.toLowerCase();
        });
        function Xm(r, n, a) {
          return (
            a && typeof a != "number" && sr(r, n, a) && (n = a = t),
            (a = a === t ? ie : a >>> 0),
            a
              ? ((r = rt(r)),
                r &&
                (typeof n == "string" || (n != null && !jc(n))) &&
                ((n = Sr(n)), !n && Dn(r))
                  ? Ui(Kr(r), 0, a)
                  : r.split(n, a))
              : []
          );
        }
        var Zm = Tn(function (r, n, a) {
          return r + (a ? " " : "") + zc(n);
        });
        function ew(r, n, a) {
          return (
            (r = rt(r)),
            (a = a == null ? 0 : Zi(Me(a), 0, r.length)),
            (n = Sr(n)),
            r.slice(a, a + n.length) == n
          );
        }
        function tw(r, n, a) {
          var u = m.templateSettings;
          a && sr(r, n, a) && (n = t), (r = rt(r)), (n = ko({}, n, u, pl));
          var y = ko({}, n.imports, u.imports, pl),
            w = kt(y),
            x = Za(y, w),
            N,
            j,
            G = 0,
            Y = n.interpolate || gn,
            re = "__p += '",
            ce = tc(
              (n.escape || gn).source +
                "|" +
                Y.source +
                "|" +
                (Y === _t ? Oa : gn).source +
                "|" +
                (n.evaluate || gn).source +
                "|$",
              "g"
            ),
            pe =
              "//# sourceURL=" +
              (it.call(n, "sourceURL")
                ? (n.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++ka + "]") +
              `
`;
          r.replace(ce, function (be, We, Xe, xr, or, Or) {
            return (
              Xe || (Xe = xr),
              (re += r.slice(G, Or).replace(Na, Cg)),
              We &&
                ((N = !0),
                (re +=
                  `' +
__e(` +
                  We +
                  `) +
'`)),
              or &&
                ((j = !0),
                (re +=
                  `';
` +
                  or +
                  `;
__p += '`)),
              Xe &&
                (re +=
                  `' +
((__t = (` +
                  Xe +
                  `)) == null ? '' : __t) +
'`),
              (G = Or + be.length),
              be
            );
          }),
            (re += `';
`);
          var we = it.call(n, "variable") && n.variable;
          if (!we)
            re =
              `with (obj) {
` +
              re +
              `
}
`;
          else if (Ia.test(we)) throw new Ae(d);
          (re = (j ? re.replace(Qr, "") : re)
            .replace(rr, "$1")
            .replace(ai, "$1;")),
            (re =
              "function(" +
              (we || "obj") +
              `) {
` +
              (we
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (N ? ", __e = _.escape" : "") +
              (j
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              re +
              `return __p
}`);
          var Be = af(function () {
            return tt(w, pe + "return " + re).apply(t, x);
          });
          if (((Be.source = re), Mc(Be))) throw Be;
          return Be;
        }
        function rw(r) {
          return rt(r).toLowerCase();
        }
        function iw(r) {
          return rt(r).toUpperCase();
        }
        function nw(r, n, a) {
          if (((r = rt(r)), r && (a || n === t))) return gh(r);
          if (!r || !(n = Sr(n))) return r;
          var u = Kr(r),
            y = Kr(n),
            w = yh(u, y),
            x = vh(u, y) + 1;
          return Ui(u, w, x).join("");
        }
        function sw(r, n, a) {
          if (((r = rt(r)), r && (a || n === t))) return r.slice(0, wh(r) + 1);
          if (!r || !(n = Sr(n))) return r;
          var u = Kr(r),
            y = vh(u, Kr(n)) + 1;
          return Ui(u, 0, y).join("");
        }
        function ow(r, n, a) {
          if (((r = rt(r)), r && (a || n === t))) return r.replace(Ot, "");
          if (!r || !(n = Sr(n))) return r;
          var u = Kr(r),
            y = yh(u, Kr(n));
          return Ui(u, y).join("");
        }
        function aw(r, n) {
          var a = ne,
            u = ue;
          if (Et(n)) {
            var y = "separator" in n ? n.separator : y;
            (a = "length" in n ? Me(n.length) : a),
              (u = "omission" in n ? Sr(n.omission) : u);
          }
          r = rt(r);
          var w = r.length;
          if (Dn(r)) {
            var x = Kr(r);
            w = x.length;
          }
          if (a >= w) return r;
          var N = a - Sn(u);
          if (N < 1) return u;
          var j = x ? Ui(x, 0, N).join("") : r.slice(0, N);
          if (y === t) return j + u;
          if ((x && (N += j.length - N), jc(y))) {
            if (r.slice(N).search(y)) {
              var G,
                Y = j;
              for (
                y.global || (y = tc(y.source, rt(Rr.exec(y)) + "g")),
                  y.lastIndex = 0;
                (G = y.exec(Y));

              )
                var re = G.index;
              j = j.slice(0, re === t ? N : re);
            }
          } else if (r.indexOf(Sr(y), N) != N) {
            var ce = j.lastIndexOf(y);
            ce > -1 && (j = j.slice(0, ce));
          }
          return j + u;
        }
        function cw(r) {
          return (r = rt(r)), r && Dt.test(r) ? r.replace(Pi, Ug) : r;
        }
        var uw = Tn(function (r, n, a) {
            return r + (a ? " " : "") + n.toUpperCase();
          }),
          zc = al("toUpperCase");
        function of(r, n, a) {
          return (
            (r = rt(r)),
            (n = a ? t : n),
            n === t ? (Rg(r) ? qg(r) : Dg(r)) : r.match(n) || []
          );
        }
        var af = Ke(function (r, n) {
            try {
              return Kt(r, t, n);
            } catch (a) {
              return Mc(a) ? a : new Ae(a);
            }
          }),
          hw = pi(function (r, n) {
            return (
              Fr(n, function (a) {
                (a = ri(a)), fi(r, a, Lc(r[a], r));
              }),
              r
            );
          });
        function lw(r) {
          var n = r == null ? 0 : r.length,
            a = me();
          return (
            (r = n
              ? mt(r, function (u) {
                  if (typeof u[1] != "function") throw new $r(f);
                  return [a(u[0]), u[1]];
                })
              : []),
            Ke(function (u) {
              for (var y = -1; ++y < n; ) {
                var w = r[y];
                if (Kt(w[0], this, u)) return Kt(w[1], this, u);
              }
            })
          );
        }
        function fw(r) {
          return U0(Ur(r, b));
        }
        function Hc(r) {
          return function () {
            return r;
          };
        }
        function dw(r, n) {
          return r == null || r !== r ? n : r;
        }
        var pw = ul(),
          gw = ul(!0);
        function yr(r) {
          return r;
        }
        function Kc(r) {
          return jh(typeof r == "function" ? r : Ur(r, b));
        }
        function yw(r) {
          return Bh(Ur(r, b));
        }
        function vw(r, n) {
          return zh(r, Ur(n, b));
        }
        var mw = Ke(function (r, n) {
            return function (a) {
              return cs(a, r, n);
            };
          }),
          ww = Ke(function (r, n) {
            return function (a) {
              return cs(r, a, n);
            };
          });
        function kc(r, n, a) {
          var u = kt(n),
            y = xo(n, u);
          a == null &&
            !(Et(n) && (y.length || !u.length)) &&
            ((a = n), (n = r), (r = this), (y = xo(n, kt(n))));
          var w = !(Et(a) && "chain" in a) || !!a.chain,
            x = yi(r);
          return (
            Fr(y, function (N) {
              var j = n[N];
              (r[N] = j),
                x &&
                  (r.prototype[N] = function () {
                    var G = this.__chain__;
                    if (w || G) {
                      var Y = r(this.__wrapped__),
                        re = (Y.__actions__ = dr(this.__actions__));
                      return (
                        re.push({ func: j, args: arguments, thisArg: r }),
                        (Y.__chain__ = G),
                        Y
                      );
                    }
                    return j.apply(r, Ti([this.value()], arguments));
                  });
            }),
            r
          );
        }
        function bw() {
          return Qe._ === this && (Qe._ = Vg), this;
        }
        function Vc() {}
        function _w(r) {
          return (
            (r = Me(r)),
            Ke(function (n) {
              return Hh(n, r);
            })
          );
        }
        var Ew = Dc(mt),
          Dw = Dc(hh),
          Sw = Dc(Ga);
        function cf(r) {
          return Cc(r) ? Ya(ri(r)) : ey(r);
        }
        function Iw(r) {
          return function (n) {
            return r == null ? t : en(r, n);
          };
        }
        var xw = ll(),
          Ow = ll(!0);
        function Wc() {
          return [];
        }
        function Gc() {
          return !1;
        }
        function Pw() {
          return {};
        }
        function Aw() {
          return "";
        }
        function Cw() {
          return !0;
        }
        function Tw(r, n) {
          if (((r = Me(r)), r < 1 || r > k)) return [];
          var a = ie,
            u = Qt(r, ie);
          (n = me(n)), (r -= ie);
          for (var y = Xa(u, n); ++a < r; ) n(a);
          return y;
        }
        function Rw(r) {
          return Re(r) ? mt(r, ri) : Ir(r) ? [r] : dr(Ol(rt(r)));
        }
        function Nw(r) {
          var n = ++Kg;
          return rt(r) + n;
        }
        var Fw = Ro(function (r, n) {
            return r + n;
          }, 0),
          $w = Sc("ceil"),
          Lw = Ro(function (r, n) {
            return r / n;
          }, 1),
          Uw = Sc("floor");
        function Mw(r) {
          return r && r.length ? Io(r, yr, uc) : t;
        }
        function jw(r, n) {
          return r && r.length ? Io(r, me(n, 2), uc) : t;
        }
        function qw(r) {
          return dh(r, yr);
        }
        function Bw(r, n) {
          return dh(r, me(n, 2));
        }
        function zw(r) {
          return r && r.length ? Io(r, yr, dc) : t;
        }
        function Hw(r, n) {
          return r && r.length ? Io(r, me(n, 2), dc) : t;
        }
        var Kw = Ro(function (r, n) {
            return r * n;
          }, 1),
          kw = Sc("round"),
          Vw = Ro(function (r, n) {
            return r - n;
          }, 0);
        function Ww(r) {
          return r && r.length ? Qa(r, yr) : 0;
        }
        function Gw(r, n) {
          return r && r.length ? Qa(r, me(n, 2)) : 0;
        }
        return (
          (m.after = y1),
          (m.ary = Ml),
          (m.assign = im),
          (m.assignIn = Xl),
          (m.assignInWith = ko),
          (m.assignWith = nm),
          (m.at = sm),
          (m.before = jl),
          (m.bind = Lc),
          (m.bindAll = hw),
          (m.bindKey = ql),
          (m.castArray = P1),
          (m.chain = $l),
          (m.chunk = Uy),
          (m.compact = My),
          (m.concat = jy),
          (m.cond = lw),
          (m.conforms = fw),
          (m.constant = Hc),
          (m.countBy = Wv),
          (m.create = om),
          (m.curry = Bl),
          (m.curryRight = zl),
          (m.debounce = Hl),
          (m.defaults = am),
          (m.defaultsDeep = cm),
          (m.defer = v1),
          (m.delay = m1),
          (m.difference = qy),
          (m.differenceBy = By),
          (m.differenceWith = zy),
          (m.drop = Hy),
          (m.dropRight = Ky),
          (m.dropRightWhile = ky),
          (m.dropWhile = Vy),
          (m.fill = Wy),
          (m.filter = Yv),
          (m.flatMap = Xv),
          (m.flatMapDeep = Zv),
          (m.flatMapDepth = e1),
          (m.flatten = Tl),
          (m.flattenDeep = Gy),
          (m.flattenDepth = Yy),
          (m.flip = w1),
          (m.flow = pw),
          (m.flowRight = gw),
          (m.fromPairs = Jy),
          (m.functions = gm),
          (m.functionsIn = ym),
          (m.groupBy = t1),
          (m.initial = Xy),
          (m.intersection = Zy),
          (m.intersectionBy = ev),
          (m.intersectionWith = tv),
          (m.invert = mm),
          (m.invertBy = wm),
          (m.invokeMap = i1),
          (m.iteratee = Kc),
          (m.keyBy = n1),
          (m.keys = kt),
          (m.keysIn = gr),
          (m.map = jo),
          (m.mapKeys = _m),
          (m.mapValues = Em),
          (m.matches = yw),
          (m.matchesProperty = vw),
          (m.memoize = Bo),
          (m.merge = Dm),
          (m.mergeWith = Zl),
          (m.method = mw),
          (m.methodOf = ww),
          (m.mixin = kc),
          (m.negate = zo),
          (m.nthArg = _w),
          (m.omit = Sm),
          (m.omitBy = Im),
          (m.once = b1),
          (m.orderBy = s1),
          (m.over = Ew),
          (m.overArgs = _1),
          (m.overEvery = Dw),
          (m.overSome = Sw),
          (m.partial = Uc),
          (m.partialRight = Kl),
          (m.partition = o1),
          (m.pick = xm),
          (m.pickBy = ef),
          (m.property = cf),
          (m.propertyOf = Iw),
          (m.pull = sv),
          (m.pullAll = Nl),
          (m.pullAllBy = ov),
          (m.pullAllWith = av),
          (m.pullAt = cv),
          (m.range = xw),
          (m.rangeRight = Ow),
          (m.rearg = E1),
          (m.reject = u1),
          (m.remove = uv),
          (m.rest = D1),
          (m.reverse = Fc),
          (m.sampleSize = l1),
          (m.set = Pm),
          (m.setWith = Am),
          (m.shuffle = f1),
          (m.slice = hv),
          (m.sortBy = g1),
          (m.sortedUniq = vv),
          (m.sortedUniqBy = mv),
          (m.split = Xm),
          (m.spread = S1),
          (m.tail = wv),
          (m.take = bv),
          (m.takeRight = _v),
          (m.takeRightWhile = Ev),
          (m.takeWhile = Dv),
          (m.tap = Mv),
          (m.throttle = I1),
          (m.thru = Mo),
          (m.toArray = Yl),
          (m.toPairs = tf),
          (m.toPairsIn = rf),
          (m.toPath = Rw),
          (m.toPlainObject = Ql),
          (m.transform = Cm),
          (m.unary = x1),
          (m.union = Sv),
          (m.unionBy = Iv),
          (m.unionWith = xv),
          (m.uniq = Ov),
          (m.uniqBy = Pv),
          (m.uniqWith = Av),
          (m.unset = Tm),
          (m.unzip = $c),
          (m.unzipWith = Fl),
          (m.update = Rm),
          (m.updateWith = Nm),
          (m.values = Fn),
          (m.valuesIn = Fm),
          (m.without = Cv),
          (m.words = of),
          (m.wrap = O1),
          (m.xor = Tv),
          (m.xorBy = Rv),
          (m.xorWith = Nv),
          (m.zip = Fv),
          (m.zipObject = $v),
          (m.zipObjectDeep = Lv),
          (m.zipWith = Uv),
          (m.entries = tf),
          (m.entriesIn = rf),
          (m.extend = Xl),
          (m.extendWith = ko),
          kc(m, m),
          (m.add = Fw),
          (m.attempt = af),
          (m.camelCase = Mm),
          (m.capitalize = nf),
          (m.ceil = $w),
          (m.clamp = $m),
          (m.clone = A1),
          (m.cloneDeep = T1),
          (m.cloneDeepWith = R1),
          (m.cloneWith = C1),
          (m.conformsTo = N1),
          (m.deburr = sf),
          (m.defaultTo = dw),
          (m.divide = Lw),
          (m.endsWith = jm),
          (m.eq = Vr),
          (m.escape = qm),
          (m.escapeRegExp = Bm),
          (m.every = Gv),
          (m.find = Jv),
          (m.findIndex = Al),
          (m.findKey = um),
          (m.findLast = Qv),
          (m.findLastIndex = Cl),
          (m.findLastKey = hm),
          (m.floor = Uw),
          (m.forEach = Ll),
          (m.forEachRight = Ul),
          (m.forIn = lm),
          (m.forInRight = fm),
          (m.forOwn = dm),
          (m.forOwnRight = pm),
          (m.get = qc),
          (m.gt = F1),
          (m.gte = $1),
          (m.has = vm),
          (m.hasIn = Bc),
          (m.head = Rl),
          (m.identity = yr),
          (m.includes = r1),
          (m.indexOf = Qy),
          (m.inRange = Lm),
          (m.invoke = bm),
          (m.isArguments = nn),
          (m.isArray = Re),
          (m.isArrayBuffer = L1),
          (m.isArrayLike = pr),
          (m.isArrayLikeObject = Rt),
          (m.isBoolean = U1),
          (m.isBuffer = Mi),
          (m.isDate = M1),
          (m.isElement = j1),
          (m.isEmpty = q1),
          (m.isEqual = B1),
          (m.isEqualWith = z1),
          (m.isError = Mc),
          (m.isFinite = H1),
          (m.isFunction = yi),
          (m.isInteger = kl),
          (m.isLength = Ho),
          (m.isMap = Vl),
          (m.isMatch = K1),
          (m.isMatchWith = k1),
          (m.isNaN = V1),
          (m.isNative = W1),
          (m.isNil = Y1),
          (m.isNull = G1),
          (m.isNumber = Wl),
          (m.isObject = Et),
          (m.isObjectLike = At),
          (m.isPlainObject = ps),
          (m.isRegExp = jc),
          (m.isSafeInteger = J1),
          (m.isSet = Gl),
          (m.isString = Ko),
          (m.isSymbol = Ir),
          (m.isTypedArray = Nn),
          (m.isUndefined = Q1),
          (m.isWeakMap = X1),
          (m.isWeakSet = Z1),
          (m.join = rv),
          (m.kebabCase = zm),
          (m.last = jr),
          (m.lastIndexOf = iv),
          (m.lowerCase = Hm),
          (m.lowerFirst = Km),
          (m.lt = em),
          (m.lte = tm),
          (m.max = Mw),
          (m.maxBy = jw),
          (m.mean = qw),
          (m.meanBy = Bw),
          (m.min = zw),
          (m.minBy = Hw),
          (m.stubArray = Wc),
          (m.stubFalse = Gc),
          (m.stubObject = Pw),
          (m.stubString = Aw),
          (m.stubTrue = Cw),
          (m.multiply = Kw),
          (m.nth = nv),
          (m.noConflict = bw),
          (m.noop = Vc),
          (m.now = qo),
          (m.pad = km),
          (m.padEnd = Vm),
          (m.padStart = Wm),
          (m.parseInt = Gm),
          (m.random = Um),
          (m.reduce = a1),
          (m.reduceRight = c1),
          (m.repeat = Ym),
          (m.replace = Jm),
          (m.result = Om),
          (m.round = kw),
          (m.runInContext = M),
          (m.sample = h1),
          (m.size = d1),
          (m.snakeCase = Qm),
          (m.some = p1),
          (m.sortedIndex = lv),
          (m.sortedIndexBy = fv),
          (m.sortedIndexOf = dv),
          (m.sortedLastIndex = pv),
          (m.sortedLastIndexBy = gv),
          (m.sortedLastIndexOf = yv),
          (m.startCase = Zm),
          (m.startsWith = ew),
          (m.subtract = Vw),
          (m.sum = Ww),
          (m.sumBy = Gw),
          (m.template = tw),
          (m.times = Tw),
          (m.toFinite = vi),
          (m.toInteger = Me),
          (m.toLength = Jl),
          (m.toLower = rw),
          (m.toNumber = qr),
          (m.toSafeInteger = rm),
          (m.toString = rt),
          (m.toUpper = iw),
          (m.trim = nw),
          (m.trimEnd = sw),
          (m.trimStart = ow),
          (m.truncate = aw),
          (m.unescape = cw),
          (m.uniqueId = Nw),
          (m.upperCase = uw),
          (m.upperFirst = zc),
          (m.each = Ll),
          (m.eachRight = Ul),
          (m.first = Rl),
          kc(
            m,
            (function () {
              var r = {};
              return (
                ei(m, function (n, a) {
                  it.call(m.prototype, a) || (r[a] = n);
                }),
                r
              );
            })(),
            { chain: !1 }
          ),
          (m.VERSION = s),
          Fr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (r) {
              m[r].placeholder = m;
            }
          ),
          Fr(["drop", "take"], function (r, n) {
            (Ye.prototype[r] = function (a) {
              a = a === t ? 1 : Ht(Me(a), 0);
              var u = this.__filtered__ && !n ? new Ye(this) : this.clone();
              return (
                u.__filtered__
                  ? (u.__takeCount__ = Qt(a, u.__takeCount__))
                  : u.__views__.push({
                      size: Qt(a, ie),
                      type: r + (u.__dir__ < 0 ? "Right" : ""),
                    }),
                u
              );
            }),
              (Ye.prototype[r + "Right"] = function (a) {
                return this.reverse()[r](a).reverse();
              });
          }),
          Fr(["filter", "map", "takeWhile"], function (r, n) {
            var a = n + 1,
              u = a == D || a == X;
            Ye.prototype[r] = function (y) {
              var w = this.clone();
              return (
                w.__iteratees__.push({ iteratee: me(y, 3), type: a }),
                (w.__filtered__ = w.__filtered__ || u),
                w
              );
            };
          }),
          Fr(["head", "last"], function (r, n) {
            var a = "take" + (n ? "Right" : "");
            Ye.prototype[r] = function () {
              return this[a](1).value()[0];
            };
          }),
          Fr(["initial", "tail"], function (r, n) {
            var a = "drop" + (n ? "" : "Right");
            Ye.prototype[r] = function () {
              return this.__filtered__ ? new Ye(this) : this[a](1);
            };
          }),
          (Ye.prototype.compact = function () {
            return this.filter(yr);
          }),
          (Ye.prototype.find = function (r) {
            return this.filter(r).head();
          }),
          (Ye.prototype.findLast = function (r) {
            return this.reverse().find(r);
          }),
          (Ye.prototype.invokeMap = Ke(function (r, n) {
            return typeof r == "function"
              ? new Ye(this)
              : this.map(function (a) {
                  return cs(a, r, n);
                });
          })),
          (Ye.prototype.reject = function (r) {
            return this.filter(zo(me(r)));
          }),
          (Ye.prototype.slice = function (r, n) {
            r = Me(r);
            var a = this;
            return a.__filtered__ && (r > 0 || n < 0)
              ? new Ye(a)
              : (r < 0 ? (a = a.takeRight(-r)) : r && (a = a.drop(r)),
                n !== t &&
                  ((n = Me(n)), (a = n < 0 ? a.dropRight(-n) : a.take(n - r))),
                a);
          }),
          (Ye.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse();
          }),
          (Ye.prototype.toArray = function () {
            return this.take(ie);
          }),
          ei(Ye.prototype, function (r, n) {
            var a = /^(?:filter|find|map|reject)|While$/.test(n),
              u = /^(?:head|last)$/.test(n),
              y = m[u ? "take" + (n == "last" ? "Right" : "") : n],
              w = u || /^find/.test(n);
            y &&
              (m.prototype[n] = function () {
                var x = this.__wrapped__,
                  N = u ? [1] : arguments,
                  j = x instanceof Ye,
                  G = N[0],
                  Y = j || Re(x),
                  re = function (We) {
                    var Xe = y.apply(m, Ti([We], N));
                    return u && ce ? Xe[0] : Xe;
                  };
                Y &&
                  a &&
                  typeof G == "function" &&
                  G.length != 1 &&
                  (j = Y = !1);
                var ce = this.__chain__,
                  pe = !!this.__actions__.length,
                  we = w && !ce,
                  Be = j && !pe;
                if (!w && Y) {
                  x = Be ? x : new Ye(this);
                  var be = r.apply(x, N);
                  return (
                    be.__actions__.push({ func: Mo, args: [re], thisArg: t }),
                    new Lr(be, ce)
                  );
                }
                return we && Be
                  ? r.apply(this, N)
                  : ((be = this.thru(re)),
                    we ? (u ? be.value()[0] : be.value()) : be);
              });
          }),
          Fr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (r) {
              var n = uo[r],
                a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru",
                u = /^(?:pop|shift)$/.test(r);
              m.prototype[r] = function () {
                var y = arguments;
                if (u && !this.__chain__) {
                  var w = this.value();
                  return n.apply(Re(w) ? w : [], y);
                }
                return this[a](function (x) {
                  return n.apply(Re(x) ? x : [], y);
                });
              };
            }
          ),
          ei(Ye.prototype, function (r, n) {
            var a = m[n];
            if (a) {
              var u = a.name + "";
              it.call(Pn, u) || (Pn[u] = []), Pn[u].push({ name: n, func: a });
            }
          }),
          (Pn[To(t, Z).name] = [{ name: "wrapper", func: t }]),
          (Ye.prototype.clone = c0),
          (Ye.prototype.reverse = u0),
          (Ye.prototype.value = h0),
          (m.prototype.at = jv),
          (m.prototype.chain = qv),
          (m.prototype.commit = Bv),
          (m.prototype.next = zv),
          (m.prototype.plant = Kv),
          (m.prototype.reverse = kv),
          (m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = Vv),
          (m.prototype.first = m.prototype.head),
          ts && (m.prototype[ts] = Hv),
          m
        );
      },
      In = Bg();
    Tt ? (((Tt.exports = In)._ = In), (ct._ = In)) : (Qe._ = In);
  }).call(_s);
})(Uu, Uu.exports);
var g5 = Object.defineProperty,
  y5 = Object.defineProperties,
  v5 = Object.getOwnPropertyDescriptors,
  qd = Object.getOwnPropertySymbols,
  m5 = Object.prototype.hasOwnProperty,
  w5 = Object.prototype.propertyIsEnumerable,
  Bd = (i, e, t) =>
    e in i
      ? g5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Qo = (i, e) => {
    for (var t in e || (e = {})) m5.call(e, t) && Bd(i, t, e[t]);
    if (qd) for (var t of qd(e)) w5.call(e, t) && Bd(i, t, e[t]);
    return i;
  },
  b5 = (i, e) => y5(i, v5(e));
function Bi(i, e, t) {
  var s;
  const o = VE(i);
  return (
    ((s = e.rpcMap) == null ? void 0 : s[o.reference]) ||
    `${p5}?chainId=${o.namespace}:${o.reference}&projectId=${t}`
  );
}
function pn(i) {
  return i.includes(":") ? i.split(":")[1] : i;
}
function yg(i) {
  return i.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function _5(i, e) {
  const t = Object.keys(e.namespaces).filter((o) => o.includes(i));
  if (!t.length) return [];
  const s = [];
  return (
    t.forEach((o) => {
      const c = e.namespaces[o].accounts;
      s.push(...c);
    }),
    s
  );
}
function zd(i = {}, e = {}) {
  const t = Hd(i),
    s = Hd(e);
  return Uu.exports.merge(t, s);
}
function Hd(i) {
  var e, t, s, o;
  const c = {};
  if (!As(i)) return c;
  for (const [f, d] of Object.entries(i)) {
    const p = Zu(f) ? [f] : d.chains,
      g = d.methods || [],
      v = d.events || [],
      b = d.rpcMap || {},
      O = Es(f);
    c[O] = b5(Qo(Qo({}, c[O]), d), {
      chains: eu(p, (e = c[O]) == null ? void 0 : e.chains),
      methods: eu(g, (t = c[O]) == null ? void 0 : t.methods),
      events: eu(v, (s = c[O]) == null ? void 0 : s.events),
      rpcMap: Qo(Qo({}, b), (o = c[O]) == null ? void 0 : o.rpcMap),
    });
  }
  return c;
}
function E5(i) {
  return i.includes(":") ? i.split(":")[2] : i;
}
function D5(i) {
  const e = {};
  for (const [t, s] of Object.entries(i)) {
    const o = s.methods || [],
      c = s.events || [],
      f = s.accounts || [],
      d = Zu(t) ? [t] : s.chains ? s.chains : yg(s.accounts);
    e[t] = { chains: d, methods: o, events: c, accounts: f };
  }
  return e;
}
function du(i) {
  return typeof i == "number"
    ? i
    : i.includes("0x")
    ? parseInt(i, 16)
    : ((i = i.includes(":") ? i.split(":")[1] : i),
      isNaN(Number(i)) ? i : Number(i));
}
const vg = {},
  bt = (i) => vg[i],
  pu = (i, e) => {
    vg[i] = e;
  };
class S5 {
  constructor(e) {
    (this.name = "polkadot"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || Bi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Hi(s, bt("disableProviderPing")));
  }
}
class I5 {
  constructor(e) {
    (this.name = "eip155"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(e.request.method)
      ? await this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
      (this.chainId = parseInt(e)),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const s =
      t || Bi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Hi(s, bt("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = parseInt(pn(t));
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const e = this.chainId,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, s;
    let o = e.request.params
      ? (t = e.request.params[0]) == null
        ? void 0
        : t.chainId
      : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const c = parseInt(o, 16);
    if (this.isChainApproved(c)) this.setDefaultChain(`${c}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: e.topic,
        request: { method: e.request.method, params: [{ chainId: o }] },
        chainId: (s = this.namespace.chains) == null ? void 0 : s[0],
      }),
        this.setDefaultChain(`${c}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
}
class x5 {
  constructor(e) {
    (this.name = "solana"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || Bi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Hi(s, bt("disableProviderPing")));
  }
}
class O5 {
  constructor(e) {
    (this.name = "cosmos"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        Oi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || Bi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Hi(s, bt("disableProviderPing")));
  }
}
class P5 {
  constructor(e) {
    (this.name = "cip34"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        Oi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        const s = this.getCardanoRPCUrl(t),
          o = pn(t);
        e[o] = this.createHttpProvider(o, s);
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t) return t[e];
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || this.getCardanoRPCUrl(e);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Hi(s, bt("disableProviderPing")));
  }
}
class A5 {
  constructor(e) {
    (this.name = "elrond"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || Bi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Hi(s, bt("disableProviderPing")));
  }
}
class C5 {
  constructor(e) {
    (this.name = "multiversx"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || Bi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Hi(s, bt("disableProviderPing")));
  }
}
class T5 {
  constructor(e) {
    (this.name = "near"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (((this.chainId = e), !this.httpProviders[e])) {
      const s = t || Bi(`${this.name}:${e}`, this.namespace);
      if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, s);
    }
    this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        e[t] = this.createHttpProvider(
          t,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || Bi(e, this.namespace);
    return typeof s > "u"
      ? void 0
      : new xi(new Hi(s, bt("disableProviderPing")));
  }
}
var R5 = Object.defineProperty,
  N5 = Object.defineProperties,
  F5 = Object.getOwnPropertyDescriptors,
  Kd = Object.getOwnPropertySymbols,
  $5 = Object.prototype.hasOwnProperty,
  L5 = Object.prototype.propertyIsEnumerable,
  kd = (i, e, t) =>
    e in i
      ? R5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Xo = (i, e) => {
    for (var t in e || (e = {})) $5.call(e, t) && kd(i, t, e[t]);
    if (Kd) for (var t of Kd(e)) L5.call(e, t) && kd(i, t, e[t]);
    return i;
  },
  gu = (i, e) => N5(i, F5(e));
class ch {
  constructor(e) {
    (this.events = new zu()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = e),
      (this.logger =
        typeof (e == null ? void 0 : e.logger) < "u" &&
        typeof (e == null ? void 0 : e.logger) != "string"
          ? e.logger
          : ma(wa({ level: (e == null ? void 0 : e.logger) || Md }))),
      (this.disableProviderPing =
        (e == null ? void 0 : e.disableProviderPing) || !1);
  }
  static async init(e) {
    const t = new ch(e);
    return await t.initialize(), t;
  }
  async request(e, t, s) {
    const [o, c] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(o).request({
      request: Xo({}, e),
      chainId: `${o}:${c}`,
      topic: this.session.topic,
      expiry: s,
    });
  }
  sendAsync(e, t, s, o) {
    const c = new Date().getTime();
    this.request(e, s, o)
      .then((f) => t(null, ba(c, f)))
      .catch((f) => t(f, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (e = this.session) == null ? void 0 : e.topic,
      reason: wt("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(e),
      await this.cleanupPendingPairings(),
      !e.skipPairing)
    )
      return await this.pair(e.pairingTopic);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: o } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      s && ((this.uri = s), this.events.emit("display_uri", s)),
        await o()
          .then((c) => {
            this.session = c;
            const f = D5(c.namespaces);
            (this.namespaces = zd(this.namespaces, f)),
              this.persist("namespaces", this.namespaces);
          })
          .catch((c) => {
            if (c.message !== pg) throw c;
            t++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session) return;
      const [s, o] = this.validateChain(e);
      this.getProvider(s).setDefaultChain(o, t);
    } catch (s) {
      if (!/Please call connect/.test(s.message)) throw s;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (oi(t)) {
      for (const s of t)
        e.deletePairings
          ? this.client.core.expirer.set(s.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const e = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[e])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await a5.init({
        logger: this.providerOpts.logger || Md,
        relayUrl: this.providerOpts.relayUrl || l5,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const e = [
      ...new Set(Object.keys(this.session.namespaces).map((t) => Es(t))),
    ];
    pu("client", this.client),
      pu("events", this.events),
      pu("disableProviderPing", this.disableProviderPing),
      e.forEach((t) => {
        if (!this.session) return;
        const s = _5(t, this.session),
          o = yg(s),
          c = zd(this.namespaces, this.optionalNamespaces),
          f = gu(Xo({}, c[t]), { accounts: s, chains: o });
        switch (t) {
          case "eip155":
            this.rpcProviders[t] = new I5({ namespace: f });
            break;
          case "solana":
            this.rpcProviders[t] = new x5({ namespace: f });
            break;
          case "cosmos":
            this.rpcProviders[t] = new O5({ namespace: f });
            break;
          case "polkadot":
            this.rpcProviders[t] = new S5({ namespace: f });
            break;
          case "cip34":
            this.rpcProviders[t] = new P5({ namespace: f });
            break;
          case "elrond":
            this.rpcProviders[t] = new A5({ namespace: f });
            break;
          case "multiversx":
            this.rpcProviders[t] = new C5({ namespace: f });
            break;
          case "near":
            this.rpcProviders[t] = new T5({ namespace: f });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }),
      this.client.on("session_event", (e) => {
        const { params: t } = e,
          { event: s } = t;
        if (s.name === "accountsChanged") {
          const o = s.data;
          o && oi(o) && this.events.emit("accountsChanged", o.map(E5));
        } else if (s.name === "chainChanged") {
          const o = t.chainId,
            c = t.event.data,
            f = Es(o),
            d = du(o) !== du(c) ? `${f}:${du(c)}` : o;
          this.onChainChanged(d);
        } else this.events.emit(s.name, s.data);
        this.events.emit("session_event", e);
      }),
      this.client.on("session_update", ({ topic: e, params: t }) => {
        var s;
        const { namespaces: o } = t,
          c = (s = this.client) == null ? void 0 : s.session.get(e);
        (this.session = gu(Xo({}, c), { namespaces: o })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: e, params: t });
      }),
      this.client.on("session_delete", async (e) => {
        await this.cleanup(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            gu(Xo({}, wt("USER_DISCONNECTED")), { data: e.topic })
          );
      }),
      this.on(Oi.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(e, !0);
      });
  }
  getProvider(e) {
    if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
    return this.rpcProviders[e];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace(
        (t = this.session) == null ? void 0 : t.namespaces[e]
      );
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: s, sessionProperties: o } = e;
    t && Object.keys(t).length && (this.namespaces = t),
      s && Object.keys(s).length && (this.optionalNamespaces = s),
      (this.sessionProperties = o),
      this.persist("namespaces", t),
      this.persist("optionalNamespaces", s);
  }
  validateChain(e) {
    const [t, s] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, s];
    if (
      t &&
      !Object.keys(this.namespaces || {})
        .map((f) => Es(f))
        .includes(t)
    )
      throw new Error(
        `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
      );
    if (t && s) return [t, s];
    const o = Es(Object.keys(this.namespaces)[0]),
      c = this.rpcProviders[o].getDefaultChain();
    return [o, c];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    if (!this.namespaces) return;
    const [s, o] = this.validateChain(e);
    o &&
      (t || this.getProvider(s).setDefaultChain(o),
      this.namespaces[s]
        ? (this.namespaces[s].defaultChain = o)
        : this.namespaces[`${s}:${o}`]
        ? (this.namespaces[`${s}:${o}`].defaultChain = o)
        : (this.namespaces[`${s}:${o}`] = { defaultChain: o }),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", o));
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${jd}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${jd}/${e}`);
  }
}
const U5 = ch,
  M5 = "wc",
  j5 = "ethereum_provider",
  q5 = `${M5}@2:${j5}:`,
  B5 = "https://rpc.walletconnect.com/v1/",
  Mu = ["eth_sendTransaction", "personal_sign"],
  z5 = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  ju = ["chainChanged", "accountsChanged"],
  H5 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var K5 = Object.defineProperty,
  k5 = Object.defineProperties,
  V5 = Object.getOwnPropertyDescriptors,
  Vd = Object.getOwnPropertySymbols,
  W5 = Object.prototype.hasOwnProperty,
  G5 = Object.prototype.propertyIsEnumerable,
  Wd = (i, e, t) =>
    e in i
      ? K5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Ss = (i, e) => {
    for (var t in e || (e = {})) W5.call(e, t) && Wd(i, t, e[t]);
    if (Vd) for (var t of Vd(e)) G5.call(e, t) && Wd(i, t, e[t]);
    return i;
  },
  Gd = (i, e) => k5(i, V5(e));
function ua(i) {
  return Number(i[0].split(":")[1]);
}
function yu(i) {
  return `0x${i.toString(16)}`;
}
function Y5(i) {
  const {
    chains: e,
    optionalChains: t,
    methods: s,
    optionalMethods: o,
    events: c,
    optionalEvents: f,
    rpcMap: d,
  } = i;
  if (!oi(e)) throw new Error("Invalid chains");
  const p = {
      chains: e,
      methods: s || Mu,
      events: c || ju,
      rpcMap: Ss({}, e.length ? { [ua(e)]: d[ua(e)] } : {}),
    },
    g = c == null ? void 0 : c.filter((P) => !ju.includes(P)),
    v = s == null ? void 0 : s.filter((P) => !Mu.includes(P));
  if (!t && !f && !o && !(g != null && g.length) && !(v != null && v.length))
    return { required: e.length ? p : void 0 };
  const b =
      ((g == null ? void 0 : g.length) && (v == null ? void 0 : v.length)) ||
      !t,
    O = {
      chains: [...new Set(b ? p.chains.concat(t || []) : t)],
      methods: [...new Set(p.methods.concat(o != null && o.length ? o : z5))],
      events: [...new Set(p.events.concat(f != null && f.length ? f : H5))],
      rpcMap: d,
    };
  return { required: e.length ? p : void 0, optional: t.length ? O : void 0 };
}
class uh {
  constructor() {
    (this.events = new Cr.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = q5),
      (this.on = (e, t) => (this.events.on(e, t), this)),
      (this.once = (e, t) => (this.events.once(e, t), this)),
      (this.removeListener = (e, t) => (
        this.events.removeListener(e, t), this
      )),
      (this.off = (e, t) => (this.events.off(e, t), this)),
      (this.parseAccount = (e) =>
        this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(e) {
    const t = new uh();
    return await t.initialize(e), t;
  }
  async request(e, t) {
    return await this.signer.request(e, this.formatChainId(this.chainId), t);
  }
  sendAsync(e, t, s) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: s } = Y5(this.rpc);
    try {
      const o = await new Promise(async (f, d) => {
        var p;
        this.rpc.showQrModal &&
          ((p = this.modal) == null ||
            p.subscribeModal((g) => {
              !g.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                d(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              Gd(
                Ss(
                  { namespaces: Ss({}, t && { [this.namespace]: t }) },
                  s && { optionalNamespaces: { [this.namespace]: s } }
                ),
                { pairingTopic: e == null ? void 0 : e.pairingTopic }
              )
            )
            .then((g) => {
              f(g);
            })
            .catch((g) => {
              d(new Error(g.message));
            });
      });
      if (!o) return;
      const c = WE(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c),
        this.setAccounts(c),
        this.events.emit("connect", { chainId: yu(this.chainId) });
    } catch (o) {
      throw (this.signer.logger.error(o), o);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e,
        { event: s } = t;
      s.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(s.data)),
          this.events.emit("accountsChanged", this.accounts))
        : s.name === "chainChanged"
        ? this.setChainId(this.formatChainId(s.data))
        : this.events.emit(s.name, s.data),
        this.events.emit("session_event", e);
    }),
      this.signer.on("chainChanged", (e) => {
        const t = parseInt(e);
        (this.chainId = t),
          this.events.emit("chainChanged", yu(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (e) => {
        this.events.emit("session_update", e);
      }),
      this.signer.on("session_delete", (e) => {
        this.reset(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            Gd(Ss({}, wt("USER_DISCONNECTED")), {
              data: e.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (e) => {
        var t, s;
        this.rpc.showQrModal &&
          ((t = this.modal) == null || t.closeModal(),
          (s = this.modal) == null || s.openModal({ uri: e })),
          this.events.emit("display_uri", e);
      });
  }
  switchEthereumChain(e) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: e.toString(16) }],
    });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e
      .filter((s) => this.isCompatibleChainId(s))
      .map((s) => this.parseChainId(s));
    t.length &&
      ((this.chainId = t[0]),
      this.events.emit("chainChanged", yu(this.chainId)),
      this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      (this.chainId = t), this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, s, o] = e.split(":");
    return { chainId: `${t}:${s}`, address: o };
  }
  setAccounts(e) {
    (this.accounts = e
      .filter(
        (t) =>
          this.parseChainId(this.parseAccountId(t).chainId) === this.chainId
      )
      .map((t) => this.parseAccountId(t).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, s;
    const o = (t = e == null ? void 0 : e.chains) != null ? t : [],
      c = (s = e == null ? void 0 : e.optionalChains) != null ? s : [],
      f = o.concat(c);
    if (!f.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const d = o.length ? (e == null ? void 0 : e.methods) || Mu : [],
      p = o.length ? (e == null ? void 0 : e.events) || ju : [],
      g = (e == null ? void 0 : e.optionalMethods) || [],
      v = (e == null ? void 0 : e.optionalEvents) || [],
      b = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(f, e.projectId),
      O = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return {
      chains: o == null ? void 0 : o.map((P) => this.formatChainId(P)),
      optionalChains: c.map((P) => this.formatChainId(P)),
      methods: d,
      events: p,
      optionalMethods: g,
      optionalEvents: v,
      rpcMap: b,
      showQrModal: !!(e != null && e.showQrModal),
      qrModalOptions: O,
      projectId: e.projectId,
      metadata: e.metadata,
    };
  }
  buildRpcMap(e, t) {
    const s = {};
    return (
      e.forEach((o) => {
        s[o] = this.getRpcUrl(o, t);
      }),
      s
    );
  }
  async initialize(e) {
    if (
      ((this.rpc = this.getRpcConfig(e)),
      (this.chainId = this.rpc.chains.length
        ? ua(this.rpc.chains)
        : ua(this.rpc.optionalChains)),
      (this.signer = await U5.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: e.disableProviderPing,
        relayUrl: e.relayUrl,
        storageOptions: e.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let t;
      try {
        const { WalletConnectModal: s } = await Qw(
          () => import("./index-fa74aa8a.js").then((o) => o.i),
          [
            "assets/index-fa74aa8a.js",
            "assets/index-7dc28fc3.js",
            "assets/index-dd3cd586.css",
          ]
        );
        t = s;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (t)
        try {
          this.modal = new t(
            Ss({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
          );
        } catch (s) {
          throw (
            (this.signer.logger.error(s),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: t, optionalChains: s, rpcMap: o } = e;
    t &&
      oi(t) &&
      ((this.rpc.chains = t.map((c) => this.formatChainId(c))),
      t.forEach((c) => {
        this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
      })),
      s &&
        oi(s) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains =
          s == null ? void 0 : s.map((c) => this.formatChainId(c))),
        s.forEach((c) => {
          this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
        }));
  }
  getRpcUrl(e, t) {
    var s;
    return (
      ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) ||
      `${B5}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const e = await this.signer.client.core.storage.getItem(
        `${this.STORAGE_KEY}/chainId`
      ),
      t = this.session.namespaces[`${this.namespace}:${e}`]
        ? this.session.namespaces[`${this.namespace}:${e}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(
      e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts
    ),
      this.setAccounts(t == null ? void 0 : t.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String
      ? [this.parseAccount(e)]
      : e.map((t) => this.parseAccount(t));
  }
}
const dx = uh;
export {
  dx as EthereumProvider,
  H5 as OPTIONAL_EVENTS,
  z5 as OPTIONAL_METHODS,
  ju as REQUIRED_EVENTS,
  Mu as REQUIRED_METHODS,
  uh as default,
};
