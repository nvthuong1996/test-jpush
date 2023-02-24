! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.MTpushInterface = e() : t.MTpushInterface = e()
}(self, (() => (() => {
    var t = {
            452: function(t, e, n) {
                var i;
                t.exports = (i = n(249), n(269), n(214), n(888), n(109), function() {
                    var t = i,
                        e = t.lib.BlockCipher,
                        n = t.algo,
                        s = [],
                        a = [],
                        r = [],
                        o = [],
                        c = [],
                        h = [],
                        l = [],
                        d = [],
                        u = [],
                        f = [];
                    ! function() {
                        for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                        var n = 0,
                            i = 0;
                        for (e = 0; e < 256; e++) {
                            var _ = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                            _ = _ >>> 8 ^ 255 & _ ^ 99, s[n] = _, a[_] = n;
                            var p = t[n],
                                m = t[p],
                                g = t[m],
                                b = 257 * t[_] ^ 16843008 * _;
                            r[n] = b << 24 | b >>> 8, o[n] = b << 16 | b >>> 16, c[n] = b << 8 | b >>> 24, h[n] = b, b = 16843009 * g ^ 65537 * m ^ 257 * p ^ 16843008 * n, l[_] = b << 24 | b >>> 8, d[_] = b << 16 | b >>> 16, u[_] = b << 8 | b >>> 24, f[_] = b, n ? (n = p ^ t[t[t[g ^ p]]], i ^= t[t[i]]) : n = i = 1
                        }
                    }();
                    var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                        p = n.AES = e.extend({
                            _doReset: function() {
                                if (!this._nRounds || this._keyPriorReset !== this._key) {
                                    for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, i = 4 * ((this._nRounds = n + 6) + 1), a = this._keySchedule = [], r = 0; r < i; r++) r < n ? a[r] = e[r] : (h = a[r - 1], r % n ? n > 6 && r % n == 4 && (h = s[h >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & h]) : (h = s[(h = h << 8 | h >>> 24) >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & h], h ^= _[r / n | 0] << 24), a[r] = a[r - n] ^ h);
                                    for (var o = this._invKeySchedule = [], c = 0; c < i; c++) {
                                        if (r = i - c, c % 4) var h = a[r];
                                        else h = a[r - 4];
                                        o[c] = c < 4 || r <= 4 ? h : l[s[h >>> 24]] ^ d[s[h >>> 16 & 255]] ^ u[s[h >>> 8 & 255]] ^ f[s[255 & h]]
                                    }
                                }
                            },
                            encryptBlock: function(t, e) {
                                this._doCryptBlock(t, e, this._keySchedule, r, o, c, h, s)
                            },
                            decryptBlock: function(t, e) {
                                var n = t[e + 1];
                                t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, l, d, u, f, a), n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n
                            },
                            _doCryptBlock: function(t, e, n, i, s, a, r, o) {
                                for (var c = this._nRounds, h = t[e] ^ n[0], l = t[e + 1] ^ n[1], d = t[e + 2] ^ n[2], u = t[e + 3] ^ n[3], f = 4, _ = 1; _ < c; _++) {
                                    var p = i[h >>> 24] ^ s[l >>> 16 & 255] ^ a[d >>> 8 & 255] ^ r[255 & u] ^ n[f++],
                                        m = i[l >>> 24] ^ s[d >>> 16 & 255] ^ a[u >>> 8 & 255] ^ r[255 & h] ^ n[f++],
                                        g = i[d >>> 24] ^ s[u >>> 16 & 255] ^ a[h >>> 8 & 255] ^ r[255 & l] ^ n[f++],
                                        b = i[u >>> 24] ^ s[h >>> 16 & 255] ^ a[l >>> 8 & 255] ^ r[255 & d] ^ n[f++];
                                    h = p, l = m, d = g, u = b
                                }
                                p = (o[h >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[d >>> 8 & 255] << 8 | o[255 & u]) ^ n[f++], m = (o[l >>> 24] << 24 | o[d >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & h]) ^ n[f++], g = (o[d >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[h >>> 8 & 255] << 8 | o[255 & l]) ^ n[f++], b = (o[u >>> 24] << 24 | o[h >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & d]) ^ n[f++], t[e] = p, t[e + 1] = m, t[e + 2] = g, t[e + 3] = b
                            },
                            keySize: 8
                        });
                    t.AES = e._createHelper(p)
                }(), i.AES)
            },
            109: function(t, e, n) {
                var i;
                t.exports = (i = n(249), n(888), void(i.lib.Cipher || function(t) {
                    var e = i,
                        n = e.lib,
                        s = n.Base,
                        a = n.WordArray,
                        r = n.BufferedBlockAlgorithm,
                        o = e.enc,
                        c = (o.Utf8, o.Base64),
                        h = e.algo.EvpKDF,
                        l = n.Cipher = r.extend({
                            cfg: s.extend(),
                            createEncryptor: function(t, e) {
                                return this.create(this._ENC_XFORM_MODE, t, e)
                            },
                            createDecryptor: function(t, e) {
                                return this.create(this._DEC_XFORM_MODE, t, e)
                            },
                            init: function(t, e, n) {
                                this.cfg = this.cfg.extend(n), this._xformMode = t, this._key = e, this.reset()
                            },
                            reset: function() {
                                r.reset.call(this), this._doReset()
                            },
                            process: function(t) {
                                return this._append(t), this._process()
                            },
                            finalize: function(t) {
                                return t && this._append(t), this._doFinalize()
                            },
                            keySize: 4,
                            ivSize: 4,
                            _ENC_XFORM_MODE: 1,
                            _DEC_XFORM_MODE: 2,
                            _createHelper: function() {
                                function t(t) {
                                    return "string" == typeof t ? w : g
                                }
                                return function(e) {
                                    return {
                                        encrypt: function(n, i, s) {
                                            return t(i).encrypt(e, n, i, s)
                                        },
                                        decrypt: function(n, i, s) {
                                            return t(i).decrypt(e, n, i, s)
                                        }
                                    }
                                }
                            }()
                        }),
                        d = (n.StreamCipher = l.extend({
                            _doFinalize: function() {
                                return this._process(!0)
                            },
                            blockSize: 1
                        }), e.mode = {}),
                        u = n.BlockCipherMode = s.extend({
                            createEncryptor: function(t, e) {
                                return this.Encryptor.create(t, e)
                            },
                            createDecryptor: function(t, e) {
                                return this.Decryptor.create(t, e)
                            },
                            init: function(t, e) {
                                this._cipher = t, this._iv = e
                            }
                        }),
                        f = d.CBC = function() {
                            var e = u.extend();

                            function n(e, n, i) {
                                var s, a = this._iv;
                                a ? (s = a, this._iv = t) : s = this._prevBlock;
                                for (var r = 0; r < i; r++) e[n + r] ^= s[r]
                            }
                            return e.Encryptor = e.extend({
                                processBlock: function(t, e) {
                                    var i = this._cipher,
                                        s = i.blockSize;
                                    n.call(this, t, e, s), i.encryptBlock(t, e), this._prevBlock = t.slice(e, e + s)
                                }
                            }), e.Decryptor = e.extend({
                                processBlock: function(t, e) {
                                    var i = this._cipher,
                                        s = i.blockSize,
                                        a = t.slice(e, e + s);
                                    i.decryptBlock(t, e), n.call(this, t, e, s), this._prevBlock = a
                                }
                            }), e
                        }(),
                        _ = (e.pad = {}).Pkcs7 = {
                            pad: function(t, e) {
                                for (var n = 4 * e, i = n - t.sigBytes % n, s = i << 24 | i << 16 | i << 8 | i, r = [], o = 0; o < i; o += 4) r.push(s);
                                var c = a.create(r, i);
                                t.concat(c)
                            },
                            unpad: function(t) {
                                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                                t.sigBytes -= e
                            }
                        },
                        p = (n.BlockCipher = l.extend({
                            cfg: l.cfg.extend({
                                mode: f,
                                padding: _
                            }),
                            reset: function() {
                                var t;
                                l.reset.call(this);
                                var e = this.cfg,
                                    n = e.iv,
                                    i = e.mode;
                                this._xformMode == this._ENC_XFORM_MODE ? t = i.createEncryptor : (t = i.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t ? this._mode.init(this, n && n.words) : (this._mode = t.call(i, this, n && n.words), this._mode.__creator = t)
                            },
                            _doProcessBlock: function(t, e) {
                                this._mode.processBlock(t, e)
                            },
                            _doFinalize: function() {
                                var t, e = this.cfg.padding;
                                return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), e.unpad(t)), t
                            },
                            blockSize: 4
                        }), n.CipherParams = s.extend({
                            init: function(t) {
                                this.mixIn(t)
                            },
                            toString: function(t) {
                                return (t || this.formatter).stringify(this)
                            }
                        })),
                        m = (e.format = {}).OpenSSL = {
                            stringify: function(t) {
                                var e = t.ciphertext,
                                    n = t.salt;
                                return (n ? a.create([1398893684, 1701076831]).concat(n).concat(e) : e).toString(c)
                            },
                            parse: function(t) {
                                var e, n = c.parse(t),
                                    i = n.words;
                                return 1398893684 == i[0] && 1701076831 == i[1] && (e = a.create(i.slice(2, 4)), i.splice(0, 4), n.sigBytes -= 16), p.create({
                                    ciphertext: n,
                                    salt: e
                                })
                            }
                        },
                        g = n.SerializableCipher = s.extend({
                            cfg: s.extend({
                                format: m
                            }),
                            encrypt: function(t, e, n, i) {
                                i = this.cfg.extend(i);
                                var s = t.createEncryptor(n, i),
                                    a = s.finalize(e),
                                    r = s.cfg;
                                return p.create({
                                    ciphertext: a,
                                    key: n,
                                    iv: r.iv,
                                    algorithm: t,
                                    mode: r.mode,
                                    padding: r.padding,
                                    blockSize: t.blockSize,
                                    formatter: i.format
                                })
                            },
                            decrypt: function(t, e, n, i) {
                                return i = this.cfg.extend(i), e = this._parse(e, i.format), t.createDecryptor(n, i).finalize(e.ciphertext)
                            },
                            _parse: function(t, e) {
                                return "string" == typeof t ? e.parse(t, this) : t
                            }
                        }),
                        b = (e.kdf = {}).OpenSSL = {
                            execute: function(t, e, n, i) {
                                i || (i = a.random(8));
                                var s = h.create({
                                        keySize: e + n
                                    }).compute(t, i),
                                    r = a.create(s.words.slice(e), 4 * n);
                                return s.sigBytes = 4 * e, p.create({
                                    key: s,
                                    iv: r,
                                    salt: i
                                })
                            }
                        },
                        w = n.PasswordBasedCipher = g.extend({
                            cfg: g.cfg.extend({
                                kdf: b
                            }),
                            encrypt: function(t, e, n, i) {
                                var s = (i = this.cfg.extend(i)).kdf.execute(n, t.keySize, t.ivSize);
                                i.iv = s.iv;
                                var a = g.encrypt.call(this, t, e, s.key, i);
                                return a.mixIn(s), a
                            },
                            decrypt: function(t, e, n, i) {
                                i = this.cfg.extend(i), e = this._parse(e, i.format);
                                var s = i.kdf.execute(n, t.keySize, t.ivSize, e.salt);
                                return i.iv = s.iv, g.decrypt.call(this, t, e, s.key, i)
                            }
                        })
                }()))
            },
            249: function(t, e, n) {
                var i;
                t.exports = (i = i || function(t, e) {
                    var i;
                    if ("undefined" != typeof window && window.crypto && (i = window.crypto), "undefined" != typeof self && self.crypto && (i = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (i = globalThis.crypto), !i && "undefined" != typeof window && window.msCrypto && (i = window.msCrypto), !i && void 0 !== n.g && n.g.crypto && (i = n.g.crypto), !i) try {
                        i = n(480)
                    } catch (t) {}
                    var s = function() {
                            if (i) {
                                if ("function" == typeof i.getRandomValues) try {
                                    return i.getRandomValues(new Uint32Array(1))[0]
                                } catch (t) {}
                                if ("function" == typeof i.randomBytes) try {
                                    return i.randomBytes(4).readInt32LE()
                                } catch (t) {}
                            }
                            throw new Error("Native crypto module could not be used to get secure random number.")
                        },
                        a = Object.create || function() {
                            function t() {}
                            return function(e) {
                                var n;
                                return t.prototype = e, n = new t, t.prototype = null, n
                            }
                        }(),
                        r = {},
                        o = r.lib = {},
                        c = o.Base = {
                            extend: function(t) {
                                var e = a(this);
                                return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                                    e.$super.init.apply(this, arguments)
                                }), e.init.prototype = e, e.$super = this, e
                            },
                            create: function() {
                                var t = this.extend();
                                return t.init.apply(t, arguments), t
                            },
                            init: function() {},
                            mixIn: function(t) {
                                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                                t.hasOwnProperty("toString") && (this.toString = t.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        },
                        h = o.WordArray = c.extend({
                            init: function(t, n) {
                                t = this.words = t || [], this.sigBytes = n != e ? n : 4 * t.length
                            },
                            toString: function(t) {
                                return (t || d).stringify(this)
                            },
                            concat: function(t) {
                                var e = this.words,
                                    n = t.words,
                                    i = this.sigBytes,
                                    s = t.sigBytes;
                                if (this.clamp(), i % 4)
                                    for (var a = 0; a < s; a++) {
                                        var r = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                                        e[i + a >>> 2] |= r << 24 - (i + a) % 4 * 8
                                    } else
                                        for (var o = 0; o < s; o += 4) e[i + o >>> 2] = n[o >>> 2];
                                return this.sigBytes += s, this
                            },
                            clamp: function() {
                                var e = this.words,
                                    n = this.sigBytes;
                                e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
                            },
                            clone: function() {
                                var t = c.clone.call(this);
                                return t.words = this.words.slice(0), t
                            },
                            random: function(t) {
                                for (var e = [], n = 0; n < t; n += 4) e.push(s());
                                return new h.init(e, t)
                            }
                        }),
                        l = r.enc = {},
                        d = l.Hex = {
                            stringify: function(t) {
                                for (var e = t.words, n = t.sigBytes, i = [], s = 0; s < n; s++) {
                                    var a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                    i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16))
                                }
                                return i.join("")
                            },
                            parse: function(t) {
                                for (var e = t.length, n = [], i = 0; i < e; i += 2) n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return new h.init(n, e / 2)
                            }
                        },
                        u = l.Latin1 = {
                            stringify: function(t) {
                                for (var e = t.words, n = t.sigBytes, i = [], s = 0; s < n; s++) {
                                    var a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                    i.push(String.fromCharCode(a))
                                }
                                return i.join("")
                            },
                            parse: function(t) {
                                for (var e = t.length, n = [], i = 0; i < e; i++) n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                                return new h.init(n, e)
                            }
                        },
                        f = l.Utf8 = {
                            stringify: function(t) {
                                try {
                                    return decodeURIComponent(escape(u.stringify(t)))
                                } catch (t) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(t) {
                                return u.parse(unescape(encodeURIComponent(t)))
                            }
                        },
                        _ = o.BufferedBlockAlgorithm = c.extend({
                            reset: function() {
                                this._data = new h.init, this._nDataBytes = 0
                            },
                            _append: function(t) {
                                "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                            },
                            _process: function(e) {
                                var n, i = this._data,
                                    s = i.words,
                                    a = i.sigBytes,
                                    r = this.blockSize,
                                    o = a / (4 * r),
                                    c = (o = e ? t.ceil(o) : t.max((0 | o) - this._minBufferSize, 0)) * r,
                                    l = t.min(4 * c, a);
                                if (c) {
                                    for (var d = 0; d < c; d += r) this._doProcessBlock(s, d);
                                    n = s.splice(0, c), i.sigBytes -= l
                                }
                                return new h.init(n, l)
                            },
                            clone: function() {
                                var t = c.clone.call(this);
                                return t._data = this._data.clone(), t
                            },
                            _minBufferSize: 0
                        }),
                        p = (o.Hasher = _.extend({
                            cfg: c.extend(),
                            init: function(t) {
                                this.cfg = this.cfg.extend(t), this.reset()
                            },
                            reset: function() {
                                _.reset.call(this), this._doReset()
                            },
                            update: function(t) {
                                return this._append(t), this._process(), this
                            },
                            finalize: function(t) {
                                return t && this._append(t), this._doFinalize()
                            },
                            blockSize: 16,
                            _createHelper: function(t) {
                                return function(e, n) {
                                    return new t.init(n).finalize(e)
                                }
                            },
                            _createHmacHelper: function(t) {
                                return function(e, n) {
                                    return new p.HMAC.init(t, n).finalize(e)
                                }
                            }
                        }), r.algo = {});
                    return r
                }(Math), i)
            },
            269: function(t, e, n) {
                var i;
                t.exports = (i = n(249), function() {
                    var t = i,
                        e = t.lib.WordArray;

                    function n(t, n, i) {
                        for (var s = [], a = 0, r = 0; r < n; r++)
                            if (r % 4) {
                                var o = i[t.charCodeAt(r - 1)] << r % 4 * 2 | i[t.charCodeAt(r)] >>> 6 - r % 4 * 2;
                                s[a >>> 2] |= o << 24 - a % 4 * 8, a++
                            } return e.create(s, a)
                    }
                    t.enc.Base64 = {
                        stringify: function(t) {
                            var e = t.words,
                                n = t.sigBytes,
                                i = this._map;
                            t.clamp();
                            for (var s = [], a = 0; a < n; a += 3)
                                for (var r = (e[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | e[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, o = 0; o < 4 && a + .75 * o < n; o++) s.push(i.charAt(r >>> 6 * (3 - o) & 63));
                            var c = i.charAt(64);
                            if (c)
                                for (; s.length % 4;) s.push(c);
                            return s.join("")
                        },
                        parse: function(t) {
                            var e = t.length,
                                i = this._map,
                                s = this._reverseMap;
                            if (!s) {
                                s = this._reverseMap = [];
                                for (var a = 0; a < i.length; a++) s[i.charCodeAt(a)] = a
                            }
                            var r = i.charAt(64);
                            if (r) {
                                var o = t.indexOf(r); - 1 !== o && (e = o)
                            }
                            return n(t, e, s)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(), i.enc.Base64)
            },
            743: function(t, e, n) {
                var i;
                t.exports = (i = n(249), i.enc.Utf8)
            },
            888: function(t, e, n) {
                var i, s, a, r, o, c, h, l;
                t.exports = (l = n(249), n(783), n(824), s = (i = l).lib, a = s.Base, r = s.WordArray, o = i.algo, c = o.MD5, h = o.EvpKDF = a.extend({
                    cfg: a.extend({
                        keySize: 4,
                        hasher: c,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var n, i = this.cfg, s = i.hasher.create(), a = r.create(), o = a.words, c = i.keySize, h = i.iterations; o.length < c;) {
                            n && s.update(n), n = s.update(t).finalize(e), s.reset();
                            for (var l = 1; l < h; l++) n = s.finalize(n), s.reset();
                            a.concat(n)
                        }
                        return a.sigBytes = 4 * c, a
                    }
                }), i.EvpKDF = function(t, e, n) {
                    return h.create(n).compute(t, e)
                }, l.EvpKDF)
            },
            824: function(t, e, n) {
                var i, s, a, r;
                t.exports = (i = n(249), a = (s = i).lib.Base, r = s.enc.Utf8, void(s.algo.HMAC = a.extend({
                    init: function(t, e) {
                        t = this._hasher = new t.init, "string" == typeof e && (e = r.parse(e));
                        var n = t.blockSize,
                            i = 4 * n;
                        e.sigBytes > i && (e = t.finalize(e)), e.clamp();
                        for (var s = this._oKey = e.clone(), a = this._iKey = e.clone(), o = s.words, c = a.words, h = 0; h < n; h++) o[h] ^= 1549556828, c[h] ^= 909522486;
                        s.sigBytes = a.sigBytes = i, this.reset()
                    },
                    reset: function() {
                        var t = this._hasher;
                        t.reset(), t.update(this._iKey)
                    },
                    update: function(t) {
                        return this._hasher.update(t), this
                    },
                    finalize: function(t) {
                        var e = this._hasher,
                            n = e.finalize(t);
                        return e.reset(), e.finalize(this._oKey.clone().concat(n))
                    }
                })))
            },
            214: function(t, e, n) {
                var i;
                t.exports = (i = n(249), function(t) {
                    var e = i,
                        n = e.lib,
                        s = n.WordArray,
                        a = n.Hasher,
                        r = e.algo,
                        o = [];
                    ! function() {
                        for (var e = 0; e < 64; e++) o[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
                    }();
                    var c = r.MD5 = a.extend({
                        _doReset: function() {
                            this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                        },
                        _doProcessBlock: function(t, e) {
                            for (var n = 0; n < 16; n++) {
                                var i = e + n,
                                    s = t[i];
                                t[i] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                            }
                            var a = this._hash.words,
                                r = t[e + 0],
                                c = t[e + 1],
                                f = t[e + 2],
                                _ = t[e + 3],
                                p = t[e + 4],
                                m = t[e + 5],
                                g = t[e + 6],
                                b = t[e + 7],
                                w = t[e + 8],
                                v = t[e + 9],
                                y = t[e + 10],
                                k = t[e + 11],
                                E = t[e + 12],
                                C = t[e + 13],
                                S = t[e + 14],
                                x = t[e + 15],
                                I = a[0],
                                A = a[1],
                                T = a[2],
                                R = a[3];
                            I = h(I, A, T, R, r, 7, o[0]), R = h(R, I, A, T, c, 12, o[1]), T = h(T, R, I, A, f, 17, o[2]), A = h(A, T, R, I, _, 22, o[3]), I = h(I, A, T, R, p, 7, o[4]), R = h(R, I, A, T, m, 12, o[5]), T = h(T, R, I, A, g, 17, o[6]), A = h(A, T, R, I, b, 22, o[7]), I = h(I, A, T, R, w, 7, o[8]), R = h(R, I, A, T, v, 12, o[9]), T = h(T, R, I, A, y, 17, o[10]), A = h(A, T, R, I, k, 22, o[11]), I = h(I, A, T, R, E, 7, o[12]), R = h(R, I, A, T, C, 12, o[13]), T = h(T, R, I, A, S, 17, o[14]), I = l(I, A = h(A, T, R, I, x, 22, o[15]), T, R, c, 5, o[16]), R = l(R, I, A, T, g, 9, o[17]), T = l(T, R, I, A, k, 14, o[18]), A = l(A, T, R, I, r, 20, o[19]), I = l(I, A, T, R, m, 5, o[20]), R = l(R, I, A, T, y, 9, o[21]), T = l(T, R, I, A, x, 14, o[22]), A = l(A, T, R, I, p, 20, o[23]), I = l(I, A, T, R, v, 5, o[24]), R = l(R, I, A, T, S, 9, o[25]), T = l(T, R, I, A, _, 14, o[26]), A = l(A, T, R, I, w, 20, o[27]), I = l(I, A, T, R, C, 5, o[28]), R = l(R, I, A, T, f, 9, o[29]), T = l(T, R, I, A, b, 14, o[30]), I = d(I, A = l(A, T, R, I, E, 20, o[31]), T, R, m, 4, o[32]), R = d(R, I, A, T, w, 11, o[33]), T = d(T, R, I, A, k, 16, o[34]), A = d(A, T, R, I, S, 23, o[35]), I = d(I, A, T, R, c, 4, o[36]), R = d(R, I, A, T, p, 11, o[37]), T = d(T, R, I, A, b, 16, o[38]), A = d(A, T, R, I, y, 23, o[39]), I = d(I, A, T, R, C, 4, o[40]), R = d(R, I, A, T, r, 11, o[41]), T = d(T, R, I, A, _, 16, o[42]), A = d(A, T, R, I, g, 23, o[43]), I = d(I, A, T, R, v, 4, o[44]), R = d(R, I, A, T, E, 11, o[45]), T = d(T, R, I, A, x, 16, o[46]), I = u(I, A = d(A, T, R, I, f, 23, o[47]), T, R, r, 6, o[48]), R = u(R, I, A, T, b, 10, o[49]), T = u(T, R, I, A, S, 15, o[50]), A = u(A, T, R, I, m, 21, o[51]), I = u(I, A, T, R, E, 6, o[52]), R = u(R, I, A, T, _, 10, o[53]), T = u(T, R, I, A, y, 15, o[54]), A = u(A, T, R, I, c, 21, o[55]), I = u(I, A, T, R, w, 6, o[56]), R = u(R, I, A, T, x, 10, o[57]), T = u(T, R, I, A, g, 15, o[58]), A = u(A, T, R, I, C, 21, o[59]), I = u(I, A, T, R, p, 6, o[60]), R = u(R, I, A, T, k, 10, o[61]), T = u(T, R, I, A, f, 15, o[62]), A = u(A, T, R, I, v, 21, o[63]), a[0] = a[0] + I | 0, a[1] = a[1] + A | 0, a[2] = a[2] + T | 0, a[3] = a[3] + R | 0
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                n = e.words,
                                i = 8 * this._nDataBytes,
                                s = 8 * e.sigBytes;
                            n[s >>> 5] |= 128 << 24 - s % 32;
                            var a = t.floor(i / 4294967296),
                                r = i;
                            n[15 + (s + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[14 + (s + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), e.sigBytes = 4 * (n.length + 1), this._process();
                            for (var o = this._hash, c = o.words, h = 0; h < 4; h++) {
                                var l = c[h];
                                c[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                            }
                            return o
                        },
                        clone: function() {
                            var t = a.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });

                    function h(t, e, n, i, s, a, r) {
                        var o = t + (e & n | ~e & i) + s + r;
                        return (o << a | o >>> 32 - a) + e
                    }

                    function l(t, e, n, i, s, a, r) {
                        var o = t + (e & i | n & ~i) + s + r;
                        return (o << a | o >>> 32 - a) + e
                    }

                    function d(t, e, n, i, s, a, r) {
                        var o = t + (e ^ n ^ i) + s + r;
                        return (o << a | o >>> 32 - a) + e
                    }

                    function u(t, e, n, i, s, a, r) {
                        var o = t + (n ^ (e | ~i)) + s + r;
                        return (o << a | o >>> 32 - a) + e
                    }
                    e.MD5 = a._createHelper(c), e.HmacMD5 = a._createHmacHelper(c)
                }(Math), i.MD5)
            },
            783: function(t, e, n) {
                var i, s, a, r, o, c, h, l;
                t.exports = (l = n(249), s = (i = l).lib, a = s.WordArray, r = s.Hasher, o = i.algo, c = [], h = o.SHA1 = r.extend({
                    _doReset: function() {
                        this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, i = n[0], s = n[1], a = n[2], r = n[3], o = n[4], h = 0; h < 80; h++) {
                            if (h < 16) c[h] = 0 | t[e + h];
                            else {
                                var l = c[h - 3] ^ c[h - 8] ^ c[h - 14] ^ c[h - 16];
                                c[h] = l << 1 | l >>> 31
                            }
                            var d = (i << 5 | i >>> 27) + o + c[h];
                            d += h < 20 ? 1518500249 + (s & a | ~s & r) : h < 40 ? 1859775393 + (s ^ a ^ r) : h < 60 ? (s & a | s & r | a & r) - 1894007588 : (s ^ a ^ r) - 899497514, o = r, r = a, a = s << 30 | s >>> 2, s = i, i = d
                        }
                        n[0] = n[0] + i | 0, n[1] = n[1] + s | 0, n[2] = n[2] + a | 0, n[3] = n[3] + r | 0, n[4] = n[4] + o | 0
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            e = t.words,
                            n = 8 * this._nDataBytes,
                            i = 8 * t.sigBytes;
                        return e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), e[15 + (i + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    }
                }), i.SHA1 = r._createHelper(h), i.HmacSHA1 = r._createHmacHelper(h), l.SHA1)
            },
            480: () => {}
        },
        e = {};

    function n(i) {
        var s = e[i];
        if (void 0 !== s) return s.exports;
        var a = e[i] = {
            exports: {}
        };
        return t[i].call(a.exports, a, a.exports, n), a.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var i = {};
    return (() => {
        "use strict";
        n.d(i, {
            default: () => Si
        });
        var t = n(214),
            e = n.n(t),
            s = n(269),
            a = n.n(s),
            r = n(743),
            o = n.n(r);

        function c(t) {
            let e = t.length;
            for (; --e >= 0;) t[e] = 0
        }
        const h = 256,
            l = 286,
            d = 30,
            u = 15,
            f = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
            _ = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
            p = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
            m = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            g = new Array(576);
        c(g);
        const b = new Array(60);
        c(b);
        const w = new Array(512);
        c(w);
        const v = new Array(256);
        c(v);
        const y = new Array(29);
        c(y);
        const k = new Array(d);

        function E(t, e, n, i, s) {
            this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = i, this.max_length = s, this.has_stree = t && t.length
        }
        let C, S, x;

        function I(t, e) {
            this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
        }
        c(k);
        const A = t => t < 256 ? w[t] : w[256 + (t >>> 7)],
            T = (t, e) => {
                t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
            },
            R = (t, e, n) => {
                t.bi_valid > 16 - n ? (t.bi_buf |= e << t.bi_valid & 65535, T(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += n - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n)
            },
            O = (t, e, n) => {
                R(t, n[2 * e], n[2 * e + 1])
            },
            D = (t, e) => {
                let n = 0;
                do {
                    n |= 1 & t, t >>>= 1, n <<= 1
                } while (--e > 0);
                return n >>> 1
            },
            N = (t, e, n) => {
                const i = new Array(16);
                let s, a, r = 0;
                for (s = 1; s <= u; s++) i[s] = r = r + n[s - 1] << 1;
                for (a = 0; a <= e; a++) {
                    let e = t[2 * a + 1];
                    0 !== e && (t[2 * a] = D(i[e]++, e))
                }
            },
            z = t => {
                let e;
                for (e = 0; e < l; e++) t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < d; e++) t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
                t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
            },
            U = t => {
                t.bi_valid > 8 ? T(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
            },
            B = (t, e, n, i) => {
                const s = 2 * e,
                    a = 2 * n;
                return t[s] < t[a] || t[s] === t[a] && i[e] <= i[n]
            },
            M = (t, e, n) => {
                const i = t.heap[n];
                let s = n << 1;
                for (; s <= t.heap_len && (s < t.heap_len && B(e, t.heap[s + 1], t.heap[s], t.depth) && s++, !B(e, i, t.heap[s], t.depth));) t.heap[n] = t.heap[s], n = s, s <<= 1;
                t.heap[n] = i
            },
            P = (t, e, n) => {
                let i, s, a, r, o = 0;
                if (0 !== t.last_lit)
                    do {
                        i = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1], s = t.pending_buf[t.l_buf + o], o++, 0 === i ? O(t, s, e) : (a = v[s], O(t, a + h + 1, e), r = f[a], 0 !== r && (s -= y[a], R(t, s, r)), i--, a = A(i), O(t, a, n), r = _[a], 0 !== r && (i -= k[a], R(t, i, r)))
                    } while (o < t.last_lit);
                O(t, 256, e)
            },
            F = (t, e) => {
                const n = e.dyn_tree,
                    i = e.stat_desc.static_tree,
                    s = e.stat_desc.has_stree,
                    a = e.stat_desc.elems;
                let r, o, c, h = -1;
                for (t.heap_len = 0, t.heap_max = 573, r = 0; r < a; r++) 0 !== n[2 * r] ? (t.heap[++t.heap_len] = h = r, t.depth[r] = 0) : n[2 * r + 1] = 0;
                for (; t.heap_len < 2;) c = t.heap[++t.heap_len] = h < 2 ? ++h : 0, n[2 * c] = 1, t.depth[c] = 0, t.opt_len--, s && (t.static_len -= i[2 * c + 1]);
                for (e.max_code = h, r = t.heap_len >> 1; r >= 1; r--) M(t, n, r);
                c = a;
                do {
                    r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], M(t, n, 1), o = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = o, n[2 * c] = n[2 * r] + n[2 * o], t.depth[c] = (t.depth[r] >= t.depth[o] ? t.depth[r] : t.depth[o]) + 1, n[2 * r + 1] = n[2 * o + 1] = c, t.heap[1] = c++, M(t, n, 1)
                } while (t.heap_len >= 2);
                t.heap[--t.heap_max] = t.heap[1], ((t, e) => {
                    const n = e.dyn_tree,
                        i = e.max_code,
                        s = e.stat_desc.static_tree,
                        a = e.stat_desc.has_stree,
                        r = e.stat_desc.extra_bits,
                        o = e.stat_desc.extra_base,
                        c = e.stat_desc.max_length;
                    let h, l, d, f, _, p, m = 0;
                    for (f = 0; f <= u; f++) t.bl_count[f] = 0;
                    for (n[2 * t.heap[t.heap_max] + 1] = 0, h = t.heap_max + 1; h < 573; h++) l = t.heap[h], f = n[2 * n[2 * l + 1] + 1] + 1, f > c && (f = c, m++), n[2 * l + 1] = f, l > i || (t.bl_count[f]++, _ = 0, l >= o && (_ = r[l - o]), p = n[2 * l], t.opt_len += p * (f + _), a && (t.static_len += p * (s[2 * l + 1] + _)));
                    if (0 !== m) {
                        do {
                            for (f = c - 1; 0 === t.bl_count[f];) f--;
                            t.bl_count[f]--, t.bl_count[f + 1] += 2, t.bl_count[c]--, m -= 2
                        } while (m > 0);
                        for (f = c; 0 !== f; f--)
                            for (l = t.bl_count[f]; 0 !== l;) d = t.heap[--h], d > i || (n[2 * d + 1] !== f && (t.opt_len += (f - n[2 * d + 1]) * n[2 * d], n[2 * d + 1] = f), l--)
                    }
                })(t, e), N(n, h, t.bl_count)
            },
            L = (t, e, n) => {
                let i, s, a = -1,
                    r = e[1],
                    o = 0,
                    c = 7,
                    h = 4;
                for (0 === r && (c = 138, h = 3), e[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) s = r, r = e[2 * (i + 1) + 1], ++o < c && s === r || (o < h ? t.bl_tree[2 * s] += o : 0 !== s ? (s !== a && t.bl_tree[2 * s]++, t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, o = 0, a = s, 0 === r ? (c = 138, h = 3) : s === r ? (c = 6, h = 3) : (c = 7, h = 4))
            },
            Z = (t, e, n) => {
                let i, s, a = -1,
                    r = e[1],
                    o = 0,
                    c = 7,
                    h = 4;
                for (0 === r && (c = 138, h = 3), i = 0; i <= n; i++)
                    if (s = r, r = e[2 * (i + 1) + 1], !(++o < c && s === r)) {
                        if (o < h)
                            do {
                                O(t, s, t.bl_tree)
                            } while (0 != --o);
                        else 0 !== s ? (s !== a && (O(t, s, t.bl_tree), o--), O(t, 16, t.bl_tree), R(t, o - 3, 2)) : o <= 10 ? (O(t, 17, t.bl_tree), R(t, o - 3, 3)) : (O(t, 18, t.bl_tree), R(t, o - 11, 7));
                        o = 0, a = s, 0 === r ? (c = 138, h = 3) : s === r ? (c = 6, h = 3) : (c = 7, h = 4)
                    }
            };
        let H = !1;
        const W = (t, e, n, i) => {
            R(t, 0 + (i ? 1 : 0), 3), ((t, e, n, i) => {
                U(t), i && (T(t, n), T(t, ~n)), t.pending_buf.set(t.window.subarray(e, e + n), t.pending), t.pending += n
            })(t, e, n, !0)
        };
        var j = (t, e, n, i) => {
                let s, a, r = 0;
                t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = (t => {
                    let e, n = 4093624447;
                    for (e = 0; e <= 31; e++, n >>>= 1)
                        if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
                    if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
                    for (e = 32; e < h; e++)
                        if (0 !== t.dyn_ltree[2 * e]) return 1;
                    return 0
                })(t)), F(t, t.l_desc), F(t, t.d_desc), r = (t => {
                    let e;
                    for (L(t, t.dyn_ltree, t.l_desc.max_code), L(t, t.dyn_dtree, t.d_desc.max_code), F(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * m[e] + 1]; e--);
                    return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                })(t), s = t.opt_len + 3 + 7 >>> 3, a = t.static_len + 3 + 7 >>> 3, a <= s && (s = a)) : s = a = n + 5, n + 4 <= s && -1 !== e ? W(t, e, n, i) : 4 === t.strategy || a === s ? (R(t, 2 + (i ? 1 : 0), 3), P(t, g, b)) : (R(t, 4 + (i ? 1 : 0), 3), ((t, e, n, i) => {
                    let s;
                    for (R(t, e - 257, 5), R(t, n - 1, 5), R(t, i - 4, 4), s = 0; s < i; s++) R(t, t.bl_tree[2 * m[s] + 1], 3);
                    Z(t, t.dyn_ltree, e - 1), Z(t, t.dyn_dtree, n - 1)
                })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, r + 1), P(t, t.dyn_ltree, t.dyn_dtree)), z(t), i && U(t)
            },
            K = {
                _tr_init: t => {
                    H || ((() => {
                        let t, e, n, i, s;
                        const a = new Array(16);
                        for (n = 0, i = 0; i < 28; i++)
                            for (y[i] = n, t = 0; t < 1 << f[i]; t++) v[n++] = i;
                        for (v[n - 1] = i, s = 0, i = 0; i < 16; i++)
                            for (k[i] = s, t = 0; t < 1 << _[i]; t++) w[s++] = i;
                        for (s >>= 7; i < d; i++)
                            for (k[i] = s << 7, t = 0; t < 1 << _[i] - 7; t++) w[256 + s++] = i;
                        for (e = 0; e <= u; e++) a[e] = 0;
                        for (t = 0; t <= 143;) g[2 * t + 1] = 8, t++, a[8]++;
                        for (; t <= 255;) g[2 * t + 1] = 9, t++, a[9]++;
                        for (; t <= 279;) g[2 * t + 1] = 7, t++, a[7]++;
                        for (; t <= 287;) g[2 * t + 1] = 8, t++, a[8]++;
                        for (N(g, 287, a), t = 0; t < d; t++) b[2 * t + 1] = 5, b[2 * t] = D(t, 5);
                        C = new E(g, f, 257, l, u), S = new E(b, _, 0, d, u), x = new E(new Array(0), p, 0, 19, 7)
                    })(), H = !0), t.l_desc = new I(t.dyn_ltree, C), t.d_desc = new I(t.dyn_dtree, S), t.bl_desc = new I(t.bl_tree, x), t.bi_buf = 0, t.bi_valid = 0, z(t)
                },
                _tr_stored_block: W,
                _tr_flush_block: j,
                _tr_tally: (t, e, n) => (t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (v[n] + h + 1)]++, t.dyn_dtree[2 * A(e)]++), t.last_lit === t.lit_bufsize - 1),
                _tr_align: t => {
                    R(t, 2, 3), O(t, 256, g), (t => {
                        16 === t.bi_valid ? (T(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
                    })(t)
                }
            };
        var G = (t, e, n, i) => {
            let s = 65535 & t | 0,
                a = t >>> 16 & 65535 | 0,
                r = 0;
            for (; 0 !== n;) {
                r = n > 2e3 ? 2e3 : n, n -= r;
                do {
                    s = s + e[i++] | 0, a = a + s | 0
                } while (--r);
                s %= 65521, a %= 65521
            }
            return s | a << 16 | 0
        };
        const V = new Uint32Array((() => {
            let t, e = [];
            for (var n = 0; n < 256; n++) {
                t = n;
                for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                e[n] = t
            }
            return e
        })());
        var J = (t, e, n, i) => {
                const s = V,
                    a = i + n;
                t ^= -1;
                for (let n = i; n < a; n++) t = t >>> 8 ^ s[255 & (t ^ e[n])];
                return -1 ^ t
            },
            X = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            },
            $ = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_MEM_ERROR: -4,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            };
        const {
            _tr_init: Y,
            _tr_stored_block: Q,
            _tr_flush_block: q,
            _tr_tally: tt,
            _tr_align: et
        } = K, {
            Z_NO_FLUSH: nt,
            Z_PARTIAL_FLUSH: it,
            Z_FULL_FLUSH: st,
            Z_FINISH: at,
            Z_BLOCK: rt,
            Z_OK: ot,
            Z_STREAM_END: ct,
            Z_STREAM_ERROR: ht,
            Z_DATA_ERROR: lt,
            Z_BUF_ERROR: dt,
            Z_DEFAULT_COMPRESSION: ut,
            Z_FILTERED: ft,
            Z_HUFFMAN_ONLY: _t,
            Z_RLE: pt,
            Z_FIXED: mt,
            Z_DEFAULT_STRATEGY: gt,
            Z_UNKNOWN: bt,
            Z_DEFLATED: wt
        } = $, vt = 258, yt = 262, kt = 103, Et = 113, Ct = 666, St = (t, e) => (t.msg = X[e], e), xt = t => (t << 1) - (t > 4 ? 9 : 0), It = t => {
            let e = t.length;
            for (; --e >= 0;) t[e] = 0
        };
        let At = (t, e, n) => (e << t.hash_shift ^ n) & t.hash_mask;
        const Tt = t => {
                const e = t.state;
                let n = e.pending;
                n > t.avail_out && (n = t.avail_out), 0 !== n && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + n), t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0))
            },
            Rt = (t, e) => {
                q(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, Tt(t.strm)
            },
            Ot = (t, e) => {
                t.pending_buf[t.pending++] = e
            },
            Dt = (t, e) => {
                t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
            },
            Nt = (t, e, n, i) => {
                let s = t.avail_in;
                return s > i && (s = i), 0 === s ? 0 : (t.avail_in -= s, e.set(t.input.subarray(t.next_in, t.next_in + s), n), 1 === t.state.wrap ? t.adler = G(t.adler, e, s, n) : 2 === t.state.wrap && (t.adler = J(t.adler, e, s, n)), t.next_in += s, t.total_in += s, s)
            },
            zt = (t, e) => {
                let n, i, s = t.max_chain_length,
                    a = t.strstart,
                    r = t.prev_length,
                    o = t.nice_match;
                const c = t.strstart > t.w_size - yt ? t.strstart - (t.w_size - yt) : 0,
                    h = t.window,
                    l = t.w_mask,
                    d = t.prev,
                    u = t.strstart + vt;
                let f = h[a + r - 1],
                    _ = h[a + r];
                t.prev_length >= t.good_match && (s >>= 2), o > t.lookahead && (o = t.lookahead);
                do {
                    if (n = e, h[n + r] === _ && h[n + r - 1] === f && h[n] === h[a] && h[++n] === h[a + 1]) {
                        a += 2, n++;
                        do {} while (h[++a] === h[++n] && h[++a] === h[++n] && h[++a] === h[++n] && h[++a] === h[++n] && h[++a] === h[++n] && h[++a] === h[++n] && h[++a] === h[++n] && h[++a] === h[++n] && a < u);
                        if (i = vt - (u - a), a = u - vt, i > r) {
                            if (t.match_start = e, r = i, i >= o) break;
                            f = h[a + r - 1], _ = h[a + r]
                        }
                    }
                } while ((e = d[e & l]) > c && 0 != --s);
                return r <= t.lookahead ? r : t.lookahead
            },
            Ut = t => {
                const e = t.w_size;
                let n, i, s, a, r;
                do {
                    if (a = t.window_size - t.lookahead - t.strstart, t.strstart >= e + (e - yt)) {
                        t.window.set(t.window.subarray(e, e + e), 0), t.match_start -= e, t.strstart -= e, t.block_start -= e, i = t.hash_size, n = i;
                        do {
                            s = t.head[--n], t.head[n] = s >= e ? s - e : 0
                        } while (--i);
                        i = e, n = i;
                        do {
                            s = t.prev[--n], t.prev[n] = s >= e ? s - e : 0
                        } while (--i);
                        a += e
                    }
                    if (0 === t.strm.avail_in) break;
                    if (i = Nt(t.strm, t.window, t.strstart + t.lookahead, a), t.lookahead += i, t.lookahead + t.insert >= 3)
                        for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = At(t, t.ins_h, t.window[r + 1]); t.insert && (t.ins_h = At(t, t.ins_h, t.window[r + 3 - 1]), t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < 3)););
                } while (t.lookahead < yt && 0 !== t.strm.avail_in)
            },
            Bt = (t, e) => {
                let n, i;
                for (;;) {
                    if (t.lookahead < yt) {
                        if (Ut(t), t.lookahead < yt && e === nt) return 1;
                        if (0 === t.lookahead) break
                    }
                    if (n = 0, t.lookahead >= 3 && (t.ins_h = At(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - yt && (t.match_length = zt(t, n)), t.match_length >= 3)
                        if (i = tt(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                            t.match_length--;
                            do {
                                t.strstart++, t.ins_h = At(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                            } while (0 != --t.match_length);
                            t.strstart++
                        } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = At(t, t.ins_h, t.window[t.strstart + 1]);
                    else i = tt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                    if (i && (Rt(t, !1), 0 === t.strm.avail_out)) return 1
                }
                return t.insert = t.strstart < 2 ? t.strstart : 2, e === at ? (Rt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Rt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
            },
            Mt = (t, e) => {
                let n, i, s;
                for (;;) {
                    if (t.lookahead < yt) {
                        if (Ut(t), t.lookahead < yt && e === nt) return 1;
                        if (0 === t.lookahead) break
                    }
                    if (n = 0, t.lookahead >= 3 && (t.ins_h = At(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - yt && (t.match_length = zt(t, n), t.match_length <= 5 && (t.strategy === ft || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
                        s = t.strstart + t.lookahead - 3, i = tt(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                        do {
                            ++t.strstart <= s && (t.ins_h = At(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                        } while (0 != --t.prev_length);
                        if (t.match_available = 0, t.match_length = 2, t.strstart++, i && (Rt(t, !1), 0 === t.strm.avail_out)) return 1
                    } else if (t.match_available) {
                        if (i = tt(t, 0, t.window[t.strstart - 1]), i && Rt(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1
                    } else t.match_available = 1, t.strstart++, t.lookahead--
                }
                return t.match_available && (i = tt(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, e === at ? (Rt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Rt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
            };

        function Pt(t, e, n, i, s) {
            this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = i, this.func = s
        }
        const Ft = [new Pt(0, 0, 0, 0, ((t, e) => {
            let n = 65535;
            for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
                if (t.lookahead <= 1) {
                    if (Ut(t), 0 === t.lookahead && e === nt) return 1;
                    if (0 === t.lookahead) break
                }
                t.strstart += t.lookahead, t.lookahead = 0;
                const i = t.block_start + n;
                if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, Rt(t, !1), 0 === t.strm.avail_out)) return 1;
                if (t.strstart - t.block_start >= t.w_size - yt && (Rt(t, !1), 0 === t.strm.avail_out)) return 1
            }
            return t.insert = 0, e === at ? (Rt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && (Rt(t, !1), t.strm.avail_out), 1)
        })), new Pt(4, 4, 8, 4, Bt), new Pt(4, 5, 16, 8, Bt), new Pt(4, 6, 32, 32, Bt), new Pt(4, 4, 16, 16, Mt), new Pt(8, 16, 32, 32, Mt), new Pt(8, 16, 128, 128, Mt), new Pt(8, 32, 128, 256, Mt), new Pt(32, 128, 258, 1024, Mt), new Pt(32, 258, 258, 4096, Mt)];

        function Lt() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = wt, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), It(this.dyn_ltree), It(this.dyn_dtree), It(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), It(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), It(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
        }
        const Zt = t => {
                if (!t || !t.state) return St(t, ht);
                t.total_in = t.total_out = 0, t.data_type = bt;
                const e = t.state;
                return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? 42 : Et, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = nt, Y(e), ot
            },
            Ht = t => {
                const e = Zt(t);
                var n;
                return e === ot && ((n = t.state).window_size = 2 * n.w_size, It(n.head), n.max_lazy_match = Ft[n.level].max_lazy, n.good_match = Ft[n.level].good_length, n.nice_match = Ft[n.level].nice_length, n.max_chain_length = Ft[n.level].max_chain, n.strstart = 0, n.block_start = 0, n.lookahead = 0, n.insert = 0, n.match_length = n.prev_length = 2, n.match_available = 0, n.ins_h = 0), e
            },
            Wt = (t, e, n, i, s, a) => {
                if (!t) return ht;
                let r = 1;
                if (e === ut && (e = 6), i < 0 ? (r = 0, i = -i) : i > 15 && (r = 2, i -= 16), s < 1 || s > 9 || n !== wt || i < 8 || i > 15 || e < 0 || e > 9 || a < 0 || a > mt) return St(t, ht);
                8 === i && (i = 9);
                const o = new Lt;
                return t.state = o, o.strm = t, o.wrap = r, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = s + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << s + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = e, o.strategy = a, o.method = n, Ht(t)
            };
        var jt = {
            deflateInit: (t, e) => Wt(t, e, wt, 15, 8, gt),
            deflateInit2: Wt,
            deflateReset: Ht,
            deflateResetKeep: Zt,
            deflateSetHeader: (t, e) => t && t.state ? 2 !== t.state.wrap ? ht : (t.state.gzhead = e, ot) : ht,
            deflate: (t, e) => {
                let n, i;
                if (!t || !t.state || e > rt || e < 0) return t ? St(t, ht) : ht;
                const s = t.state;
                if (!t.output || !t.input && 0 !== t.avail_in || s.status === Ct && e !== at) return St(t, 0 === t.avail_out ? dt : ht);
                s.strm = t;
                const a = s.last_flush;
                if (s.last_flush = e, 42 === s.status)
                    if (2 === s.wrap) t.adler = 0, Ot(s, 31), Ot(s, 139), Ot(s, 8), s.gzhead ? (Ot(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), Ot(s, 255 & s.gzhead.time), Ot(s, s.gzhead.time >> 8 & 255), Ot(s, s.gzhead.time >> 16 & 255), Ot(s, s.gzhead.time >> 24 & 255), Ot(s, 9 === s.level ? 2 : s.strategy >= _t || s.level < 2 ? 4 : 0), Ot(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (Ot(s, 255 & s.gzhead.extra.length), Ot(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (t.adler = J(t.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = 69) : (Ot(s, 0), Ot(s, 0), Ot(s, 0), Ot(s, 0), Ot(s, 0), Ot(s, 9 === s.level ? 2 : s.strategy >= _t || s.level < 2 ? 4 : 0), Ot(s, 3), s.status = Et);
                    else {
                        let e = wt + (s.w_bits - 8 << 4) << 8,
                            n = -1;
                        n = s.strategy >= _t || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3, e |= n << 6, 0 !== s.strstart && (e |= 32), e += 31 - e % 31, s.status = Et, Dt(s, e), 0 !== s.strstart && (Dt(s, t.adler >>> 16), Dt(s, 65535 & t.adler)), t.adler = 1
                    } if (69 === s.status)
                    if (s.gzhead.extra) {
                        for (n = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > n && (t.adler = J(t.adler, s.pending_buf, s.pending - n, n)), Tt(t), n = s.pending, s.pending !== s.pending_buf_size));) Ot(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
                        s.gzhead.hcrc && s.pending > n && (t.adler = J(t.adler, s.pending_buf, s.pending - n, n)), s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = 73)
                    } else s.status = 73;
                if (73 === s.status)
                    if (s.gzhead.name) {
                        n = s.pending;
                        do {
                            if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > n && (t.adler = J(t.adler, s.pending_buf, s.pending - n, n)), Tt(t), n = s.pending, s.pending === s.pending_buf_size)) {
                                i = 1;
                                break
                            }
                            i = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, Ot(s, i)
                        } while (0 !== i);
                        s.gzhead.hcrc && s.pending > n && (t.adler = J(t.adler, s.pending_buf, s.pending - n, n)), 0 === i && (s.gzindex = 0, s.status = 91)
                    } else s.status = 91;
                if (91 === s.status)
                    if (s.gzhead.comment) {
                        n = s.pending;
                        do {
                            if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > n && (t.adler = J(t.adler, s.pending_buf, s.pending - n, n)), Tt(t), n = s.pending, s.pending === s.pending_buf_size)) {
                                i = 1;
                                break
                            }
                            i = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, Ot(s, i)
                        } while (0 !== i);
                        s.gzhead.hcrc && s.pending > n && (t.adler = J(t.adler, s.pending_buf, s.pending - n, n)), 0 === i && (s.status = kt)
                    } else s.status = kt;
                if (s.status === kt && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && Tt(t), s.pending + 2 <= s.pending_buf_size && (Ot(s, 255 & t.adler), Ot(s, t.adler >> 8 & 255), t.adler = 0, s.status = Et)) : s.status = Et), 0 !== s.pending) {
                    if (Tt(t), 0 === t.avail_out) return s.last_flush = -1, ot
                } else if (0 === t.avail_in && xt(e) <= xt(a) && e !== at) return St(t, dt);
                if (s.status === Ct && 0 !== t.avail_in) return St(t, dt);
                if (0 !== t.avail_in || 0 !== s.lookahead || e !== nt && s.status !== Ct) {
                    let n = s.strategy === _t ? ((t, e) => {
                        let n;
                        for (;;) {
                            if (0 === t.lookahead && (Ut(t), 0 === t.lookahead)) {
                                if (e === nt) return 1;
                                break
                            }
                            if (t.match_length = 0, n = tt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (Rt(t, !1), 0 === t.strm.avail_out)) return 1
                        }
                        return t.insert = 0, e === at ? (Rt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Rt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                    })(s, e) : s.strategy === pt ? ((t, e) => {
                        let n, i, s, a;
                        const r = t.window;
                        for (;;) {
                            if (t.lookahead <= vt) {
                                if (Ut(t), t.lookahead <= vt && e === nt) return 1;
                                if (0 === t.lookahead) break
                            }
                            if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (s = t.strstart - 1, i = r[s], i === r[++s] && i === r[++s] && i === r[++s])) {
                                a = t.strstart + vt;
                                do {} while (i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && s < a);
                                t.match_length = vt - (a - s), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                            }
                            if (t.match_length >= 3 ? (n = tt(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = tt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (Rt(t, !1), 0 === t.strm.avail_out)) return 1
                        }
                        return t.insert = 0, e === at ? (Rt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Rt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                    })(s, e) : Ft[s.level].func(s, e);
                    if (3 !== n && 4 !== n || (s.status = Ct), 1 === n || 3 === n) return 0 === t.avail_out && (s.last_flush = -1), ot;
                    if (2 === n && (e === it ? et(s) : e !== rt && (Q(s, 0, 0, !1), e === st && (It(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), Tt(t), 0 === t.avail_out)) return s.last_flush = -1, ot
                }
                return e !== at ? ot : s.wrap <= 0 ? ct : (2 === s.wrap ? (Ot(s, 255 & t.adler), Ot(s, t.adler >> 8 & 255), Ot(s, t.adler >> 16 & 255), Ot(s, t.adler >> 24 & 255), Ot(s, 255 & t.total_in), Ot(s, t.total_in >> 8 & 255), Ot(s, t.total_in >> 16 & 255), Ot(s, t.total_in >> 24 & 255)) : (Dt(s, t.adler >>> 16), Dt(s, 65535 & t.adler)), Tt(t), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? ot : ct)
            },
            deflateEnd: t => {
                if (!t || !t.state) return ht;
                const e = t.state.status;
                return 42 !== e && 69 !== e && 73 !== e && 91 !== e && e !== kt && e !== Et && e !== Ct ? St(t, ht) : (t.state = null, e === Et ? St(t, lt) : ot)
            },
            deflateSetDictionary: (t, e) => {
                let n = e.length;
                if (!t || !t.state) return ht;
                const i = t.state,
                    s = i.wrap;
                if (2 === s || 1 === s && 42 !== i.status || i.lookahead) return ht;
                if (1 === s && (t.adler = G(t.adler, e, n, 0)), i.wrap = 0, n >= i.w_size) {
                    0 === s && (It(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
                    let t = new Uint8Array(i.w_size);
                    t.set(e.subarray(n - i.w_size, n), 0), e = t, n = i.w_size
                }
                const a = t.avail_in,
                    r = t.next_in,
                    o = t.input;
                for (t.avail_in = n, t.next_in = 0, t.input = e, Ut(i); i.lookahead >= 3;) {
                    let t = i.strstart,
                        e = i.lookahead - 2;
                    do {
                        i.ins_h = At(i, i.ins_h, i.window[t + 3 - 1]), i.prev[t & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = t, t++
                    } while (--e);
                    i.strstart = t, i.lookahead = 2, Ut(i)
                }
                return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = 2, i.match_available = 0, t.next_in = r, t.input = o, t.avail_in = a, i.wrap = s, ot
            },
            deflateInfo: "pako deflate (from Nodeca project)"
        };
        const Kt = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
        var Gt = function(t) {
                const e = Array.prototype.slice.call(arguments, 1);
                for (; e.length;) {
                    const n = e.shift();
                    if (n) {
                        if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                        for (const e in n) Kt(n, e) && (t[e] = n[e])
                    }
                }
                return t
            },
            Vt = t => {
                let e = 0;
                for (let n = 0, i = t.length; n < i; n++) e += t[n].length;
                const n = new Uint8Array(e);
                for (let e = 0, i = 0, s = t.length; e < s; e++) {
                    let s = t[e];
                    n.set(s, i), i += s.length
                }
                return n
            };
        let Jt = !0;
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (t) {
            Jt = !1
        }
        const Xt = new Uint8Array(256);
        for (let t = 0; t < 256; t++) Xt[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
        Xt[254] = Xt[254] = 1;
        var $t = t => {
                if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(t);
                let e, n, i, s, a, r = t.length,
                    o = 0;
                for (s = 0; s < r; s++) n = t.charCodeAt(s), 55296 == (64512 & n) && s + 1 < r && (i = t.charCodeAt(s + 1), 56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), s++)), o += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
                for (e = new Uint8Array(o), a = 0, s = 0; a < o; s++) n = t.charCodeAt(s), 55296 == (64512 & n) && s + 1 < r && (i = t.charCodeAt(s + 1), 56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), s++)), n < 128 ? e[a++] = n : n < 2048 ? (e[a++] = 192 | n >>> 6, e[a++] = 128 | 63 & n) : n < 65536 ? (e[a++] = 224 | n >>> 12, e[a++] = 128 | n >>> 6 & 63, e[a++] = 128 | 63 & n) : (e[a++] = 240 | n >>> 18, e[a++] = 128 | n >>> 12 & 63, e[a++] = 128 | n >>> 6 & 63, e[a++] = 128 | 63 & n);
                return e
            },
            Yt = (t, e) => {
                const n = e || t.length;
                if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return (new TextDecoder).decode(t.subarray(0, e));
                let i, s;
                const a = new Array(2 * n);
                for (s = 0, i = 0; i < n;) {
                    let e = t[i++];
                    if (e < 128) {
                        a[s++] = e;
                        continue
                    }
                    let r = Xt[e];
                    if (r > 4) a[s++] = 65533, i += r - 1;
                    else {
                        for (e &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && i < n;) e = e << 6 | 63 & t[i++], r--;
                        r > 1 ? a[s++] = 65533 : e < 65536 ? a[s++] = e : (e -= 65536, a[s++] = 55296 | e >> 10 & 1023, a[s++] = 56320 | 1023 & e)
                    }
                }
                return ((t, e) => {
                    if (e < 65534 && t.subarray && Jt) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                    let n = "";
                    for (let i = 0; i < e; i++) n += String.fromCharCode(t[i]);
                    return n
                })(a, s)
            },
            Qt = (t, e) => {
                (e = e || t.length) > t.length && (e = t.length);
                let n = e - 1;
                for (; n >= 0 && 128 == (192 & t[n]);) n--;
                return n < 0 || 0 === n ? e : n + Xt[t[n]] > e ? n : e
            };
        var qt = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        };
        const te = Object.prototype.toString,
            {
                Z_NO_FLUSH: ee,
                Z_SYNC_FLUSH: ne,
                Z_FULL_FLUSH: ie,
                Z_FINISH: se,
                Z_OK: ae,
                Z_STREAM_END: re,
                Z_DEFAULT_COMPRESSION: oe,
                Z_DEFAULT_STRATEGY: ce,
                Z_DEFLATED: he
            } = $;

        function le(t) {
            this.options = Gt({
                level: oe,
                method: he,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: ce
            }, t || {});
            let e = this.options;
            e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new qt, this.strm.avail_out = 0;
            let n = jt.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
            if (n !== ae) throw new Error(X[n]);
            if (e.header && jt.deflateSetHeader(this.strm, e.header), e.dictionary) {
                let t;
                if (t = "string" == typeof e.dictionary ? $t(e.dictionary) : "[object ArrayBuffer]" === te.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, n = jt.deflateSetDictionary(this.strm, t), n !== ae) throw new Error(X[n]);
                this._dict_set = !0
            }
        }

        function de(t, e) {
            const n = new le(e);
            if (n.push(t, !0), n.err) throw n.msg || X[n.err];
            return n.result
        }
        le.prototype.push = function(t, e) {
            const n = this.strm,
                i = this.options.chunkSize;
            let s, a;
            if (this.ended) return !1;
            for (a = e === ~~e ? e : !0 === e ? se : ee, "string" == typeof t ? n.input = $t(t) : "[object ArrayBuffer]" === te.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;;)
                if (0 === n.avail_out && (n.output = new Uint8Array(i), n.next_out = 0, n.avail_out = i), (a === ne || a === ie) && n.avail_out <= 6) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                else {
                    if (s = jt.deflate(n, a), s === re) return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)), s = jt.deflateEnd(this.strm), this.onEnd(s), this.ended = !0, s === ae;
                    if (0 !== n.avail_out) {
                        if (a > 0 && n.next_out > 0) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                        else if (0 === n.avail_in) break
                    } else this.onData(n.output)
                } return !0
        }, le.prototype.onData = function(t) {
            this.chunks.push(t)
        }, le.prototype.onEnd = function(t) {
            t === ae && (this.result = Vt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
        };
        var ue = {
            Deflate: le,
            deflate: de,
            deflateRaw: function(t, e) {
                return (e = e || {}).raw = !0, de(t, e)
            },
            gzip: function(t, e) {
                return (e = e || {}).gzip = !0, de(t, e)
            },
            constants: $
        };
        var fe = function(t, e) {
            let n, i, s, a, r, o, c, h, l, d, u, f, _, p, m, g, b, w, v, y, k, E, C, S;
            const x = t.state;
            n = t.next_in, C = t.input, i = n + (t.avail_in - 5), s = t.next_out, S = t.output, a = s - (e - t.avail_out), r = s + (t.avail_out - 257), o = x.dmax, c = x.wsize, h = x.whave, l = x.wnext, d = x.window, u = x.hold, f = x.bits, _ = x.lencode, p = x.distcode, m = (1 << x.lenbits) - 1, g = (1 << x.distbits) - 1;
            t: do {
                f < 15 && (u += C[n++] << f, f += 8, u += C[n++] << f, f += 8), b = _[u & m];
                e: for (;;) {
                    if (w = b >>> 24, u >>>= w, f -= w, w = b >>> 16 & 255, 0 === w) S[s++] = 65535 & b;
                    else {
                        if (!(16 & w)) {
                            if (0 == (64 & w)) {
                                b = _[(65535 & b) + (u & (1 << w) - 1)];
                                continue e
                            }
                            if (32 & w) {
                                x.mode = 12;
                                break t
                            }
                            t.msg = "invalid literal/length code", x.mode = 30;
                            break t
                        }
                        v = 65535 & b, w &= 15, w && (f < w && (u += C[n++] << f, f += 8), v += u & (1 << w) - 1, u >>>= w, f -= w), f < 15 && (u += C[n++] << f, f += 8, u += C[n++] << f, f += 8), b = p[u & g];
                        n: for (;;) {
                            if (w = b >>> 24, u >>>= w, f -= w, w = b >>> 16 & 255, !(16 & w)) {
                                if (0 == (64 & w)) {
                                    b = p[(65535 & b) + (u & (1 << w) - 1)];
                                    continue n
                                }
                                t.msg = "invalid distance code", x.mode = 30;
                                break t
                            }
                            if (y = 65535 & b, w &= 15, f < w && (u += C[n++] << f, f += 8, f < w && (u += C[n++] << f, f += 8)), y += u & (1 << w) - 1, y > o) {
                                t.msg = "invalid distance too far back", x.mode = 30;
                                break t
                            }
                            if (u >>>= w, f -= w, w = s - a, y > w) {
                                if (w = y - w, w > h && x.sane) {
                                    t.msg = "invalid distance too far back", x.mode = 30;
                                    break t
                                }
                                if (k = 0, E = d, 0 === l) {
                                    if (k += c - w, w < v) {
                                        v -= w;
                                        do {
                                            S[s++] = d[k++]
                                        } while (--w);
                                        k = s - y, E = S
                                    }
                                } else if (l < w) {
                                    if (k += c + l - w, w -= l, w < v) {
                                        v -= w;
                                        do {
                                            S[s++] = d[k++]
                                        } while (--w);
                                        if (k = 0, l < v) {
                                            w = l, v -= w;
                                            do {
                                                S[s++] = d[k++]
                                            } while (--w);
                                            k = s - y, E = S
                                        }
                                    }
                                } else if (k += l - w, w < v) {
                                    v -= w;
                                    do {
                                        S[s++] = d[k++]
                                    } while (--w);
                                    k = s - y, E = S
                                }
                                for (; v > 2;) S[s++] = E[k++], S[s++] = E[k++], S[s++] = E[k++], v -= 3;
                                v && (S[s++] = E[k++], v > 1 && (S[s++] = E[k++]))
                            } else {
                                k = s - y;
                                do {
                                    S[s++] = S[k++], S[s++] = S[k++], S[s++] = S[k++], v -= 3
                                } while (v > 2);
                                v && (S[s++] = S[k++], v > 1 && (S[s++] = S[k++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (n < i && s < r);
            v = f >> 3, n -= v, f -= v << 3, u &= (1 << f) - 1, t.next_in = n, t.next_out = s, t.avail_in = n < i ? i - n + 5 : 5 - (n - i), t.avail_out = s < r ? r - s + 257 : 257 - (s - r), x.hold = u, x.bits = f
        };
        const _e = 15,
            pe = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
            me = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
            ge = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
            be = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
        var we = (t, e, n, i, s, a, r, o) => {
            const c = o.bits;
            let h, l, d, u, f, _, p = 0,
                m = 0,
                g = 0,
                b = 0,
                w = 0,
                v = 0,
                y = 0,
                k = 0,
                E = 0,
                C = 0,
                S = null,
                x = 0;
            const I = new Uint16Array(16),
                A = new Uint16Array(16);
            let T, R, O, D = null,
                N = 0;
            for (p = 0; p <= _e; p++) I[p] = 0;
            for (m = 0; m < i; m++) I[e[n + m]]++;
            for (w = c, b = _e; b >= 1 && 0 === I[b]; b--);
            if (w > b && (w = b), 0 === b) return s[a++] = 20971520, s[a++] = 20971520, o.bits = 1, 0;
            for (g = 1; g < b && 0 === I[g]; g++);
            for (w < g && (w = g), k = 1, p = 1; p <= _e; p++)
                if (k <<= 1, k -= I[p], k < 0) return -1;
            if (k > 0 && (0 === t || 1 !== b)) return -1;
            for (A[1] = 0, p = 1; p < _e; p++) A[p + 1] = A[p] + I[p];
            for (m = 0; m < i; m++) 0 !== e[n + m] && (r[A[e[n + m]]++] = m);
            if (0 === t ? (S = D = r, _ = 19) : 1 === t ? (S = pe, x -= 257, D = me, N -= 257, _ = 256) : (S = ge, D = be, _ = -1), C = 0, m = 0, p = g, f = a, v = w, y = 0, d = -1, E = 1 << w, u = E - 1, 1 === t && E > 852 || 2 === t && E > 592) return 1;
            for (;;) {
                T = p - y, r[m] < _ ? (R = 0, O = r[m]) : r[m] > _ ? (R = D[N + r[m]], O = S[x + r[m]]) : (R = 96, O = 0), h = 1 << p - y, l = 1 << v, g = l;
                do {
                    l -= h, s[f + (C >> y) + l] = T << 24 | R << 16 | O | 0
                } while (0 !== l);
                for (h = 1 << p - 1; C & h;) h >>= 1;
                if (0 !== h ? (C &= h - 1, C += h) : C = 0, m++, 0 == --I[p]) {
                    if (p === b) break;
                    p = e[n + r[m]]
                }
                if (p > w && (C & u) !== d) {
                    for (0 === y && (y = w), f += g, v = p - y, k = 1 << v; v + y < b && (k -= I[v + y], !(k <= 0));) v++, k <<= 1;
                    if (E += 1 << v, 1 === t && E > 852 || 2 === t && E > 592) return 1;
                    d = C & u, s[d] = w << 24 | v << 16 | f - a | 0
                }
            }
            return 0 !== C && (s[f + C] = p - y << 24 | 64 << 16 | 0), o.bits = w, 0
        };
        const {
            Z_FINISH: ve,
            Z_BLOCK: ye,
            Z_TREES: ke,
            Z_OK: Ee,
            Z_STREAM_END: Ce,
            Z_NEED_DICT: Se,
            Z_STREAM_ERROR: xe,
            Z_DATA_ERROR: Ie,
            Z_MEM_ERROR: Ae,
            Z_BUF_ERROR: Te,
            Z_DEFLATED: Re
        } = $, Oe = 12, De = 30, Ne = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);

        function ze() {
            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
        }
        const Ue = t => {
                if (!t || !t.state) return xe;
                const e = t.state;
                return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = 1, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(852), e.distcode = e.distdyn = new Int32Array(592), e.sane = 1, e.back = -1, Ee
            },
            Be = t => {
                if (!t || !t.state) return xe;
                const e = t.state;
                return e.wsize = 0, e.whave = 0, e.wnext = 0, Ue(t)
            },
            Me = (t, e) => {
                let n;
                if (!t || !t.state) return xe;
                const i = t.state;
                return e < 0 ? (n = 0, e = -e) : (n = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? xe : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = n, i.wbits = e, Be(t))
            },
            Pe = (t, e) => {
                if (!t) return xe;
                const n = new ze;
                t.state = n, n.window = null;
                const i = Me(t, e);
                return i !== Ee && (t.state = null), i
            };
        let Fe, Le, Ze = !0;
        const He = t => {
                if (Ze) {
                    Fe = new Int32Array(512), Le = new Int32Array(32);
                    let e = 0;
                    for (; e < 144;) t.lens[e++] = 8;
                    for (; e < 256;) t.lens[e++] = 9;
                    for (; e < 280;) t.lens[e++] = 7;
                    for (; e < 288;) t.lens[e++] = 8;
                    for (we(1, t.lens, 0, 288, Fe, 0, t.work, {
                            bits: 9
                        }), e = 0; e < 32;) t.lens[e++] = 5;
                    we(2, t.lens, 0, 32, Le, 0, t.work, {
                        bits: 5
                    }), Ze = !1
                }
                t.lencode = Fe, t.lenbits = 9, t.distcode = Le, t.distbits = 5
            },
            We = (t, e, n, i) => {
                let s;
                const a = t.state;
                return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), i >= a.wsize ? (a.window.set(e.subarray(n - a.wsize, n), 0), a.wnext = 0, a.whave = a.wsize) : (s = a.wsize - a.wnext, s > i && (s = i), a.window.set(e.subarray(n - i, n - i + s), a.wnext), (i -= s) ? (a.window.set(e.subarray(n - i, n), 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))), 0
            };
        var je = {
            inflateReset: Be,
            inflateReset2: Me,
            inflateResetKeep: Ue,
            inflateInit: t => Pe(t, 15),
            inflateInit2: Pe,
            inflate: (t, e) => {
                let n, i, s, a, r, o, c, h, l, d, u, f, _, p, m, g, b, w, v, y, k, E, C = 0;
                const S = new Uint8Array(4);
                let x, I;
                const A = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return xe;
                n = t.state, n.mode === Oe && (n.mode = 13), r = t.next_out, s = t.output, c = t.avail_out, a = t.next_in, i = t.input, o = t.avail_in, h = n.hold, l = n.bits, d = o, u = c, E = Ee;
                t: for (;;) switch (n.mode) {
                    case 1:
                        if (0 === n.wrap) {
                            n.mode = 13;
                            break
                        }
                        for (; l < 16;) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        if (2 & n.wrap && 35615 === h) {
                            n.check = 0, S[0] = 255 & h, S[1] = h >>> 8 & 255, n.check = J(n.check, S, 2, 0), h = 0, l = 0, n.mode = 2;
                            break
                        }
                        if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
                            t.msg = "incorrect header check", n.mode = De;
                            break
                        }
                        if ((15 & h) !== Re) {
                            t.msg = "unknown compression method", n.mode = De;
                            break
                        }
                        if (h >>>= 4, l -= 4, k = 8 + (15 & h), 0 === n.wbits) n.wbits = k;
                        else if (k > n.wbits) {
                            t.msg = "invalid window size", n.mode = De;
                            break
                        }
                        n.dmax = 1 << n.wbits, t.adler = n.check = 1, n.mode = 512 & h ? 10 : Oe, h = 0, l = 0;
                        break;
                    case 2:
                        for (; l < 16;) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        if (n.flags = h, (255 & n.flags) !== Re) {
                            t.msg = "unknown compression method", n.mode = De;
                            break
                        }
                        if (57344 & n.flags) {
                            t.msg = "unknown header flags set", n.mode = De;
                            break
                        }
                        n.head && (n.head.text = h >> 8 & 1), 512 & n.flags && (S[0] = 255 & h, S[1] = h >>> 8 & 255, n.check = J(n.check, S, 2, 0)), h = 0, l = 0, n.mode = 3;
                    case 3:
                        for (; l < 32;) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        n.head && (n.head.time = h), 512 & n.flags && (S[0] = 255 & h, S[1] = h >>> 8 & 255, S[2] = h >>> 16 & 255, S[3] = h >>> 24 & 255, n.check = J(n.check, S, 4, 0)), h = 0, l = 0, n.mode = 4;
                    case 4:
                        for (; l < 16;) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        n.head && (n.head.xflags = 255 & h, n.head.os = h >> 8), 512 & n.flags && (S[0] = 255 & h, S[1] = h >>> 8 & 255, n.check = J(n.check, S, 2, 0)), h = 0, l = 0, n.mode = 5;
                    case 5:
                        if (1024 & n.flags) {
                            for (; l < 16;) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            n.length = h, n.head && (n.head.extra_len = h), 512 & n.flags && (S[0] = 255 & h, S[1] = h >>> 8 & 255, n.check = J(n.check, S, 2, 0)), h = 0, l = 0
                        } else n.head && (n.head.extra = null);
                        n.mode = 6;
                    case 6:
                        if (1024 & n.flags && (f = n.length, f > o && (f = o), f && (n.head && (k = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(i.subarray(a, a + f), k)), 512 & n.flags && (n.check = J(n.check, i, f, a)), o -= f, a += f, n.length -= f), n.length)) break t;
                        n.length = 0, n.mode = 7;
                    case 7:
                        if (2048 & n.flags) {
                            if (0 === o) break t;
                            f = 0;
                            do {
                                k = i[a + f++], n.head && k && n.length < 65536 && (n.head.name += String.fromCharCode(k))
                            } while (k && f < o);
                            if (512 & n.flags && (n.check = J(n.check, i, f, a)), o -= f, a += f, k) break t
                        } else n.head && (n.head.name = null);
                        n.length = 0, n.mode = 8;
                    case 8:
                        if (4096 & n.flags) {
                            if (0 === o) break t;
                            f = 0;
                            do {
                                k = i[a + f++], n.head && k && n.length < 65536 && (n.head.comment += String.fromCharCode(k))
                            } while (k && f < o);
                            if (512 & n.flags && (n.check = J(n.check, i, f, a)), o -= f, a += f, k) break t
                        } else n.head && (n.head.comment = null);
                        n.mode = 9;
                    case 9:
                        if (512 & n.flags) {
                            for (; l < 16;) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            if (h !== (65535 & n.check)) {
                                t.msg = "header crc mismatch", n.mode = De;
                                break
                            }
                            h = 0, l = 0
                        }
                        n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = Oe;
                        break;
                    case 10:
                        for (; l < 32;) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        t.adler = n.check = Ne(h), h = 0, l = 0, n.mode = 11;
                    case 11:
                        if (0 === n.havedict) return t.next_out = r, t.avail_out = c, t.next_in = a, t.avail_in = o, n.hold = h, n.bits = l, Se;
                        t.adler = n.check = 1, n.mode = Oe;
                    case Oe:
                        if (e === ye || e === ke) break t;
                    case 13:
                        if (n.last) {
                            h >>>= 7 & l, l -= 7 & l, n.mode = 27;
                            break
                        }
                        for (; l < 3;) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        switch (n.last = 1 & h, h >>>= 1, l -= 1, 3 & h) {
                            case 0:
                                n.mode = 14;
                                break;
                            case 1:
                                if (He(n), n.mode = 20, e === ke) {
                                    h >>>= 2, l -= 2;
                                    break t
                                }
                                break;
                            case 2:
                                n.mode = 17;
                                break;
                            case 3:
                                t.msg = "invalid block type", n.mode = De
                        }
                        h >>>= 2, l -= 2;
                        break;
                    case 14:
                        for (h >>>= 7 & l, l -= 7 & l; l < 32;) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        if ((65535 & h) != (h >>> 16 ^ 65535)) {
                            t.msg = "invalid stored block lengths", n.mode = De;
                            break
                        }
                        if (n.length = 65535 & h, h = 0, l = 0, n.mode = 15, e === ke) break t;
                    case 15:
                        n.mode = 16;
                    case 16:
                        if (f = n.length, f) {
                            if (f > o && (f = o), f > c && (f = c), 0 === f) break t;
                            s.set(i.subarray(a, a + f), r), o -= f, a += f, c -= f, r += f, n.length -= f;
                            break
                        }
                        n.mode = Oe;
                        break;
                    case 17:
                        for (; l < 14;) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        if (n.nlen = 257 + (31 & h), h >>>= 5, l -= 5, n.ndist = 1 + (31 & h), h >>>= 5, l -= 5, n.ncode = 4 + (15 & h), h >>>= 4, l -= 4, n.nlen > 286 || n.ndist > 30) {
                            t.msg = "too many length or distance symbols", n.mode = De;
                            break
                        }
                        n.have = 0, n.mode = 18;
                    case 18:
                        for (; n.have < n.ncode;) {
                            for (; l < 3;) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            n.lens[A[n.have++]] = 7 & h, h >>>= 3, l -= 3
                        }
                        for (; n.have < 19;) n.lens[A[n.have++]] = 0;
                        if (n.lencode = n.lendyn, n.lenbits = 7, x = {
                                bits: n.lenbits
                            }, E = we(0, n.lens, 0, 19, n.lencode, 0, n.work, x), n.lenbits = x.bits, E) {
                            t.msg = "invalid code lengths set", n.mode = De;
                            break
                        }
                        n.have = 0, n.mode = 19;
                    case 19:
                        for (; n.have < n.nlen + n.ndist;) {
                            for (; C = n.lencode[h & (1 << n.lenbits) - 1], m = C >>> 24, g = C >>> 16 & 255, b = 65535 & C, !(m <= l);) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            if (b < 16) h >>>= m, l -= m, n.lens[n.have++] = b;
                            else {
                                if (16 === b) {
                                    for (I = m + 2; l < I;) {
                                        if (0 === o) break t;
                                        o--, h += i[a++] << l, l += 8
                                    }
                                    if (h >>>= m, l -= m, 0 === n.have) {
                                        t.msg = "invalid bit length repeat", n.mode = De;
                                        break
                                    }
                                    k = n.lens[n.have - 1], f = 3 + (3 & h), h >>>= 2, l -= 2
                                } else if (17 === b) {
                                    for (I = m + 3; l < I;) {
                                        if (0 === o) break t;
                                        o--, h += i[a++] << l, l += 8
                                    }
                                    h >>>= m, l -= m, k = 0, f = 3 + (7 & h), h >>>= 3, l -= 3
                                } else {
                                    for (I = m + 7; l < I;) {
                                        if (0 === o) break t;
                                        o--, h += i[a++] << l, l += 8
                                    }
                                    h >>>= m, l -= m, k = 0, f = 11 + (127 & h), h >>>= 7, l -= 7
                                }
                                if (n.have + f > n.nlen + n.ndist) {
                                    t.msg = "invalid bit length repeat", n.mode = De;
                                    break
                                }
                                for (; f--;) n.lens[n.have++] = k
                            }
                        }
                        if (n.mode === De) break;
                        if (0 === n.lens[256]) {
                            t.msg = "invalid code -- missing end-of-block", n.mode = De;
                            break
                        }
                        if (n.lenbits = 9, x = {
                                bits: n.lenbits
                            }, E = we(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, x), n.lenbits = x.bits, E) {
                            t.msg = "invalid literal/lengths set", n.mode = De;
                            break
                        }
                        if (n.distbits = 6, n.distcode = n.distdyn, x = {
                                bits: n.distbits
                            }, E = we(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, x), n.distbits = x.bits, E) {
                            t.msg = "invalid distances set", n.mode = De;
                            break
                        }
                        if (n.mode = 20, e === ke) break t;
                    case 20:
                        n.mode = 21;
                    case 21:
                        if (o >= 6 && c >= 258) {
                            t.next_out = r, t.avail_out = c, t.next_in = a, t.avail_in = o, n.hold = h, n.bits = l, fe(t, u), r = t.next_out, s = t.output, c = t.avail_out, a = t.next_in, i = t.input, o = t.avail_in, h = n.hold, l = n.bits, n.mode === Oe && (n.back = -1);
                            break
                        }
                        for (n.back = 0; C = n.lencode[h & (1 << n.lenbits) - 1], m = C >>> 24, g = C >>> 16 & 255, b = 65535 & C, !(m <= l);) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        if (g && 0 == (240 & g)) {
                            for (w = m, v = g, y = b; C = n.lencode[y + ((h & (1 << w + v) - 1) >> w)], m = C >>> 24, g = C >>> 16 & 255, b = 65535 & C, !(w + m <= l);) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            h >>>= w, l -= w, n.back += w
                        }
                        if (h >>>= m, l -= m, n.back += m, n.length = b, 0 === g) {
                            n.mode = 26;
                            break
                        }
                        if (32 & g) {
                            n.back = -1, n.mode = Oe;
                            break
                        }
                        if (64 & g) {
                            t.msg = "invalid literal/length code", n.mode = De;
                            break
                        }
                        n.extra = 15 & g, n.mode = 22;
                    case 22:
                        if (n.extra) {
                            for (I = n.extra; l < I;) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            n.length += h & (1 << n.extra) - 1, h >>>= n.extra, l -= n.extra, n.back += n.extra
                        }
                        n.was = n.length, n.mode = 23;
                    case 23:
                        for (; C = n.distcode[h & (1 << n.distbits) - 1], m = C >>> 24, g = C >>> 16 & 255, b = 65535 & C, !(m <= l);) {
                            if (0 === o) break t;
                            o--, h += i[a++] << l, l += 8
                        }
                        if (0 == (240 & g)) {
                            for (w = m, v = g, y = b; C = n.distcode[y + ((h & (1 << w + v) - 1) >> w)], m = C >>> 24, g = C >>> 16 & 255, b = 65535 & C, !(w + m <= l);) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            h >>>= w, l -= w, n.back += w
                        }
                        if (h >>>= m, l -= m, n.back += m, 64 & g) {
                            t.msg = "invalid distance code", n.mode = De;
                            break
                        }
                        n.offset = b, n.extra = 15 & g, n.mode = 24;
                    case 24:
                        if (n.extra) {
                            for (I = n.extra; l < I;) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            n.offset += h & (1 << n.extra) - 1, h >>>= n.extra, l -= n.extra, n.back += n.extra
                        }
                        if (n.offset > n.dmax) {
                            t.msg = "invalid distance too far back", n.mode = De;
                            break
                        }
                        n.mode = 25;
                    case 25:
                        if (0 === c) break t;
                        if (f = u - c, n.offset > f) {
                            if (f = n.offset - f, f > n.whave && n.sane) {
                                t.msg = "invalid distance too far back", n.mode = De;
                                break
                            }
                            f > n.wnext ? (f -= n.wnext, _ = n.wsize - f) : _ = n.wnext - f, f > n.length && (f = n.length), p = n.window
                        } else p = s, _ = r - n.offset, f = n.length;
                        f > c && (f = c), c -= f, n.length -= f;
                        do {
                            s[r++] = p[_++]
                        } while (--f);
                        0 === n.length && (n.mode = 21);
                        break;
                    case 26:
                        if (0 === c) break t;
                        s[r++] = n.length, c--, n.mode = 21;
                        break;
                    case 27:
                        if (n.wrap) {
                            for (; l < 32;) {
                                if (0 === o) break t;
                                o--, h |= i[a++] << l, l += 8
                            }
                            if (u -= c, t.total_out += u, n.total += u, u && (t.adler = n.check = n.flags ? J(n.check, s, u, r - u) : G(n.check, s, u, r - u)), u = c, (n.flags ? h : Ne(h)) !== n.check) {
                                t.msg = "incorrect data check", n.mode = De;
                                break
                            }
                            h = 0, l = 0
                        }
                        n.mode = 28;
                    case 28:
                        if (n.wrap && n.flags) {
                            for (; l < 32;) {
                                if (0 === o) break t;
                                o--, h += i[a++] << l, l += 8
                            }
                            if (h !== (4294967295 & n.total)) {
                                t.msg = "incorrect length check", n.mode = De;
                                break
                            }
                            h = 0, l = 0
                        }
                        n.mode = 29;
                    case 29:
                        E = Ce;
                        break t;
                    case De:
                        E = Ie;
                        break t;
                    case 31:
                        return Ae;
                    default:
                        return xe
                }
                return t.next_out = r, t.avail_out = c, t.next_in = a, t.avail_in = o, n.hold = h, n.bits = l, (n.wsize || u !== t.avail_out && n.mode < De && (n.mode < 27 || e !== ve)) && We(t, t.output, t.next_out, u - t.avail_out), d -= t.avail_in, u -= t.avail_out, t.total_in += d, t.total_out += u, n.total += u, n.wrap && u && (t.adler = n.check = n.flags ? J(n.check, s, u, t.next_out - u) : G(n.check, s, u, t.next_out - u)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === Oe ? 128 : 0) + (20 === n.mode || 15 === n.mode ? 256 : 0), (0 === d && 0 === u || e === ve) && E === Ee && (E = Te), E
            },
            inflateEnd: t => {
                if (!t || !t.state) return xe;
                let e = t.state;
                return e.window && (e.window = null), t.state = null, Ee
            },
            inflateGetHeader: (t, e) => {
                if (!t || !t.state) return xe;
                const n = t.state;
                return 0 == (2 & n.wrap) ? xe : (n.head = e, e.done = !1, Ee)
            },
            inflateSetDictionary: (t, e) => {
                const n = e.length;
                let i, s, a;
                return t && t.state ? (i = t.state, 0 !== i.wrap && 11 !== i.mode ? xe : 11 === i.mode && (s = 1, s = G(s, e, n, 0), s !== i.check) ? Ie : (a = We(t, e, n, n), a ? (i.mode = 31, Ae) : (i.havedict = 1, Ee))) : xe
            },
            inflateInfo: "pako inflate (from Nodeca project)"
        };
        var Ke = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
        };
        const Ge = Object.prototype.toString,
            {
                Z_NO_FLUSH: Ve,
                Z_FINISH: Je,
                Z_OK: Xe,
                Z_STREAM_END: $e,
                Z_NEED_DICT: Ye,
                Z_STREAM_ERROR: Qe,
                Z_DATA_ERROR: qe,
                Z_MEM_ERROR: tn
            } = $;

        function en(t) {
            this.options = Gt({
                chunkSize: 65536,
                windowBits: 15,
                to: ""
            }, t || {});
            const e = this.options;
            e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new qt, this.strm.avail_out = 0;
            let n = je.inflateInit2(this.strm, e.windowBits);
            if (n !== Xe) throw new Error(X[n]);
            if (this.header = new Ke, je.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = $t(e.dictionary) : "[object ArrayBuffer]" === Ge.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (n = je.inflateSetDictionary(this.strm, e.dictionary), n !== Xe))) throw new Error(X[n])
        }

        function nn(t, e) {
            const n = new en(e);
            if (n.push(t), n.err) throw n.msg || X[n.err];
            return n.result
        }
        en.prototype.push = function(t, e) {
            const n = this.strm,
                i = this.options.chunkSize,
                s = this.options.dictionary;
            let a, r, o;
            if (this.ended) return !1;
            for (r = e === ~~e ? e : !0 === e ? Je : Ve, "[object ArrayBuffer]" === Ge.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;;) {
                for (0 === n.avail_out && (n.output = new Uint8Array(i), n.next_out = 0, n.avail_out = i), a = je.inflate(n, r), a === Ye && s && (a = je.inflateSetDictionary(n, s), a === Xe ? a = je.inflate(n, r) : a === qe && (a = Ye)); n.avail_in > 0 && a === $e && n.state.wrap > 0 && 0 !== t[n.next_in];) je.inflateReset(n), a = je.inflate(n, r);
                switch (a) {
                    case Qe:
                    case qe:
                    case Ye:
                    case tn:
                        return this.onEnd(a), this.ended = !0, !1
                }
                if (o = n.avail_out, n.next_out && (0 === n.avail_out || a === $e))
                    if ("string" === this.options.to) {
                        let t = Qt(n.output, n.next_out),
                            e = n.next_out - t,
                            s = Yt(n.output, t);
                        n.next_out = e, n.avail_out = i - e, e && n.output.set(n.output.subarray(t, t + e), 0), this.onData(s)
                    } else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
                if (a !== Xe || 0 !== o) {
                    if (a === $e) return a = je.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
                    if (0 === n.avail_in) break
                }
            }
            return !0
        }, en.prototype.onData = function(t) {
            this.chunks.push(t)
        }, en.prototype.onEnd = function(t) {
            t === Xe && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Vt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
        };
        var sn = {
            Inflate: en,
            inflate: nn,
            inflateRaw: function(t, e) {
                return (e = e || {}).raw = !0, nn(t, e)
            },
            ungzip: nn,
            constants: $
        };
        const {
            Deflate: an,
            deflate: rn,
            deflateRaw: on,
            gzip: cn
        } = ue, {
            Inflate: hn,
            inflate: ln,
            inflateRaw: dn,
            ungzip: un
        } = sn;
        var fn = cn,
            _n = n(783),
            pn = n.n(_n),
            mn = n(452),
            gn = n.n(mn);

        function bn(t) {
            return function(t) {
                const e = t.length,
                    n = new Uint8Array(e);
                for (let i = 0, s = e; i < s; ++i) n[i] = t.charCodeAt(i);
                return n
            }(function(t, e = !1) {
                return e ? atob(t) : o().stringify(a().parse(t))
            }((t + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), !0))
        }

        function wn(t) {
            return yn((e = t, String.fromCharCode.apply(null, Array.from(new Uint8Array(e)))), !0);
            var e
        }

        function vn(t, e) {
            var n, i;
            "object" == typeof e && (e = JSON.parse(JSON.stringify(e))), null === (i = null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === n ? void 0 : n.controller) || void 0 === i || i.postMessage({
                code: t,
                msg: e
            })
        }

        function yn(t, e = !1) {
            return e ? btoa(t) : a().stringify(o().parse(t))
        }

        function kn(t) {
            return o().parse("string" != typeof t ? JSON.stringify(t) : t)
        }

        function En(t) {
            return pn()(t).toString()
        }

        function Cn(t, n, i) {
            i = i || "";
            const s = function() {
                let t = "";
                for (let e = 0; e < 16; e++) t += Math.floor(16 * Math.random()).toString(16);
                return t
            }();
            var r, o;
            const c = function(t, e, n = "iop203040506aPk!") {
                    return gn().encrypt("string" == typeof t ? a().parse(t) : t, kn(e), {
                        iv: kn(n)
                    })
                }(wn(("string" != typeof(r = i) && (r = JSON.stringify(r)), fn(r, o))), s).ciphertext,
                h = En(t + function(t) {
                    return e()(t).toString()
                }(n) + En(c));
            return {
                authorization: yn(t + ":" + h + ":" + s),
                body: (l = c, bn(a().stringify(l))).buffer
            };
            var l
        }
        const Sn = {
            cache: "no-cache",
            headers: {},
            redirect: "follow",
            mode: "cors"
        };

        function xn(t, e = "POST", n, i, s = "json") {
            var a;
            const r = i || {};
            const o = Object.assign(Sn, {
                method: e
            });
            Object.keys(Sn.headers || {}).length > 0 && (o.headers = Sn.headers);
            const c = Object.assign(o, r);
            if (c.method = null === (a = c.method) || void 0 === a ? void 0 : a.toUpperCase(), "GET" === c.method) {
                if (n) {
                    let e = "";
                    const i = /([?&])_=[^&]*/,
                        s = /\?/;
                    "object" == typeof n && (e = function(t) {
                        let e = "";
                        for (const n in t) t.hasOwnProperty(n) && (e += n + "=" + encodeURIComponent(t[n]) + "&");
                        return e.slice(0, -1)
                    }(n)), t = i.test(t) ? t.replace(i, "$1" + e) : t + (s.test(t) ? "&" : "?") + e
                }
            } else [FormData, ArrayBuffer, Blob].filter((t => n instanceof t)).length > 0 ? c.body = n : (c.headers = Object.assign({
                "Content-Type": "application/json"
            }, c.headers), n && (c.body = "string" == typeof n ? n : JSON.stringify(n)));
            return fetch(t, c).then((t => {
                const {
                    status: e
                } = t;
                if (e >= 200 && e < 400) {
                    let e;
                    switch (s) {
                        case "json":
                            e = new Promise((e => {
                                t.text().then((t => {
                                    try {
                                        e(JSON.parse(t))
                                    } catch (n) {
                                        e(t)
                                    }
                                }))
                            }));
                            break;
                        case "text":
                            e = t.text();
                            break;
                        case "blob":
                            e = t.blob();
                            break;
                        case "arraybuffer":
                            e = t.arrayBuffer();
                            break;
                        default:
                            e = t.json()
                    }
                    return e
                }
                return Promise.reject(t)
            })).catch((t => Promise.reject(t)))
        }
        const In = {
                get: (t, e, n, i) => xn(t, "GET", e, n, i),
                post: (t, e, n, i) => xn(t, "POST", e, n, i),
                put: (t, e, n, i) => xn(t, "PUT", e, n, i),
                delete: (t, e, n, i) => xn(t, "DELETE", e, n, i),
                fetch: xn,
                defaults: Sn
            },
            An = {
                baseUrl: "",
                uid: "",
                passwd: ""
            };

        function Tn(t) {
            An.baseUrl = t
        }

        function Rn(t, e) {
            return An.uid = t, An.passwd = e, An
        }

        function On(t, e, n) {
            if (An.uid && An.passwd) {
                const i = Cn(An.uid, An.passwd, n),
                    s = t.includes("http") ? t : An.baseUrl + t;
                return In[e](s, i.body, {
                    headers: {
                        Authorization: "Basic " + i.authorization
                    }
                })
            }
            return Promise.reject("uid or passwd Empty")
        }
        const Dn = (t, e) => On(t, "post", e),
            Nn = {
                subscribeSuccess: "/v1/subscribe",
                auth: "/v1/auth",
                option: "/v1/notification_subscribe",
                tagalias: "/v1/webdevices",
                unsubscribe: "/v1/unsubscribe",
                safariSubscribe: "/v1/safari/subscribe"
            };

        function zn() {
            var t;
            const e = (null === (t = mi.data) || void 0 === t ? void 0 : t.website_push_id) || "web.cn.jiguang";
            return {
                data: window.safari.pushNotification.permission(e),
                id: e
            }
        }

        function Un(t, e) {
            Dn(t, {
                endpoint: e.endpoint,
                keys: {
                    p256dh: wn(e.getKey("p256dh")),
                    auth: wn(e.getKey("auth"))
                }
            })
        }

        function Bn(t, e, n, i = (() => {}), s = !1, a = {
            title: "I am testing"
        }) {
            var r;
            let o = !1;
            if ("safari" in window && "pushNotification" in window.safari) {
                o = !0;
                const t = zn();
                t.data.deviceToken && Dn(Nn.safariSubscribe, {
                    appkey: null === (r = mi.userOption) || void 0 === r ? void 0 : r.appkey,
                    device_token: t.data.deviceToken
                })
            }
            t.pushManager ? t.pushManager.getSubscription().then((r => {
                r ? (i(!0), s && Dn(n, {
                    pushInfo: {
                        endpoint: r.endpoint,
                        keys: {
                            p256dh: wn(r.getKey("p256dh")),
                            auth: wn(r.getKey("auth"))
                        }
                    },
                    pushData: a
                }), Un(n, r)) : t.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: bn(e)
                }).then((t => {
                    i(!0), Un(n, t)
                })).catch((t => {}))
            })).catch((t => {
                i(!1, t)
            })) : i(o)
        }
        const Mn = {
            SDK_VERSION: "1.0.0",
            LOG_TAG_PREFIX: "[MTush-P]",
            REQUEST: {
                WS_URL: "ws://" + "https://conn.webpush.theengagelab.com".split("//")[1],
                WS_SUPPORT: !0,
                WS_HEART_BEAT: 12e4,
                WS_RECONNECT_PERIOD: 1e4,
                WS_RESP_TIMEOUT: 3e4,
                WS_RETRY_TIMES: 3,
                POLLING_URL: "",
                POLLING_SUPPORT: !1,
                POLLING_TIME_OUT: 15e3
            },
            CMD: {
                INIT: "init",
                HEART_BEAT: "heartbeat",
                MESSAGE_RECIVER: "msgrecv",
                PUSH: "push"
            },
            EVENT: {
                OPEN: "open",
                MESSAGE: "message",
                SEND: "send",
                DISCONNECT: "disconnect",
                NOT_SUPPORT: "not_supoort"
            }
        };
        var Pn;

        function Fn(t) {
            return "string" != typeof t || (!t || 0 == t.length)
        }

        function Ln() {
            let t = !0;
            if (window.navigator) {
                if (t = window.navigator.onLine, "boolean" == typeof t) return t;
                t = !0
            }
            return t
        }! function(t) {
            let e = !1;
            const n = Mn.LOG_TAG_PREFIX;
            t.setDebugMode = function(i) {
                t.d(n, `setDebugMode:${i}`), e = i
            }, t.d = function(t, e) {}, t.dd = function(t, n) {
                e && window.console
            }, t.ww = function(t, e) {
                window.console
            }, t.ee = function(t, e) {
                window.console
            }
        }(Pn || (Pn = {}));
        const Zn = 0,
            Hn = 1e3,
            Wn = {
                INITING: 1001,
                CONFIG_INVALID: 1002,
                INIT_FAILED: 1003,
                INIT_TIME_OUT: 1004,
                NETWORK_ERROR: 1005,
                NOT_SUPPORT: 1006
            };

        function jn(t) {
            let e = "";
            switch (t) {
                case Zn:
                    e = "success";
                    break;
                case Hn:
                    e = "unknown error";
                    break;
                case Wn.INITING:
                    e = "initing , please try again later";
                    break;
                case Wn.CONFIG_INVALID:
                    e = "invalid config";
                    break;
                case Wn.INIT_FAILED:
                    e = "init failed";
                    break;
                case Wn.INIT_TIME_OUT:
                    e = "init timeout";
                    break;
                case Wn.NETWORK_ERROR:
                    e = "network error"
            }
            return e
        }

        function Kn(t, e) {
            return {
                code: t,
                message: jn(t),
                content: e
            }
        }
        class Gn {
            constructor(t) {
                this.success = t.success, this.fail = t.fail
            }
            onSuccess(t) {
                this.success && "function" == typeof this.success && this.success(t)
            }
            onFail(t) {
                this.fail && "function" == typeof this.fail && this.fail(t)
            }
        }
        var Vn;
        ! function(t) {
            t[t.Initial = 0] = "Initial", t[t.Connecting = 1] = "Connecting", t[t.Connected = 2] = "Connected", t[t.Closing = 3] = "Closing", t[t.Closed = 4] = "Closed"
        }(Vn || (Vn = {}));
        class Jn extends class {
            constructor() {
                this.sConnectionState = Vn.Initial
            }
            getConnectState() {
                return this.sConnectionState
            }
        } {
            constructor(t) {
                super(), this.mUrl = t
            }
            connect() {
                Pn.d("WebSocketConnection", `${location.hostname} try to connect websocket:${this.mUrl}`), this.mWebSocket = new WebSocket(this.mUrl), this.mWebSocket.onopen = this.onOpen.bind(this), this.mWebSocket.onclose = this.onClose.bind(this), this.mWebSocket.onmessage = this.onMessage.bind(this)
            }
            disconnect() {
                this.mWebSocket.close()
            }
            onOpen(t) {
                this.onopen(t)
            }
            onMessage(t) {
                this.onmessage(t)
            }
            onClose(t) {
                this.onclose(t)
            }
            sendMessage(t) {
                this.mWebSocket.send(t)
            }
            getConnectState() {
                if (this.mWebSocket) switch (this.mWebSocket.readyState) {
                    case WebSocket.CLOSED:
                        this.sConnectionState = Vn.Closed;
                        break;
                    case WebSocket.CLOSING:
                        this.sConnectionState = Vn.Closing;
                        break;
                    case WebSocket.CONNECTING:
                        this.sConnectionState = Vn.Connecting;
                        break;
                    case WebSocket.OPEN:
                        this.sConnectionState = Vn.Connected
                }
                return this.sConnectionState
            }
        }
        const Xn = "ConnectionController";
        class $n {
            constructor(t = "") {
                this.mAutoDiscon = !0, this.mDataCache = "", this.url = "", this._onOpen = this._onOpen.bind(this), this._onMessage = this._onMessage.bind(this), this._onClose = this._onClose.bind(this), this.sendMessage = this.sendMessage.bind(this), this.setupConnection = this.setupConnection.bind(this), this.url = t
            }
            setupConnection() {
                Mn.REQUEST.WS_SUPPORT && "undefined" != typeof WebSocket ? (this.mConnection = new Jn(this.url || Mn.REQUEST.WS_URL), this.mConnection.onopen = this._onOpen, this.mConnection.onmessage = this._onMessage, this.mConnection.onclose = this._onClose, this.mAutoDiscon = !0, Pn.dd(Xn, "start connecting"), this.mConnection.connect()) : this.onEvent({
                    name: Mn.EVENT.NOT_SUPPORT
                })
            }
            _isConnect() {
                return this.mConnection && (this.mConnection.getConnectState() === Vn.Connected || this.mConnection.getConnectState() === Vn.Connecting)
            }
            _onOpen(t) {
                Pn.dd(Xn, "connection is opened"), this._sendEvent(Mn.EVENT.OPEN, t.event), this.sendMessage(this.mDataCache)
            }
            _onMessage(t) {
                Pn.d(Xn, "connection is receive message"), this._sendEvent(Mn.EVENT.MESSAGE, t.data)
            }
            _onClose(t) {
                Pn.dd(Xn, "connection close " + (this.mAutoDiscon ? "auto" : "manually")), this.mAutoDiscon && this._scheduleReConnect(), this._sendEvent(Mn.EVENT.DISCONNECT, t)
            }
            _sendEvent(t, e) {
                this.onEvent && this.onEvent({
                    name: t,
                    data: e
                })
            }
            sendMessage(t) {
                Fn(t) || (this.mConnection.getConnectState() === Vn.Connected ? (this.mConnection.sendMessage(t), this.mDataCache = "", this._sendEvent(Mn.EVENT.SEND, t)) : this.mDataCache = t)
            }
            _scheduleReConnect() {
                var t;
                (t = Mn.REQUEST.WS_RECONNECT_PERIOD, new Promise((e => setTimeout(e, t)))).then((() => {
                    this.mAutoDiscon && (Ln() ? (Pn.dd(Xn, "do reconnect"), this.setupConnection()) : this._scheduleReConnect())
                }))
            }
            disconnect() {
                Pn.d(Xn, "disconnect"), this.mAutoDiscon = !1, this._isConnect() && this.mConnection.disconnect()
            }
            reConnect() {
                Pn.d(Xn, "reconnect"), this.mAutoDiscon = !0, this._isConnect() ? this.mConnection.disconnect() : this.setupConnection()
            }
        }
        class Yn {
            constructor(t) {
                this.mInitConfig = t
            }
            setCmd(t) {
                return this.mCmd = t, this
            }
            setSid(t) {
                return this.mSid = t, this
            }
            setUserInfo(t) {
                return this.mUserInfo = t, this
            }
            setPushMsgArray(t) {
                return this.mMsgArr = t, this
            }
            build() {
                let t;
                switch (this.mCmd) {
                    case Mn.CMD.INIT:
                        t = this.mInitConfig.auth;
                        break;
                    case Mn.CMD.HEART_BEAT:
                        t = {
                            r: this.mUserInfo.regid,
                            u: this.mInitConfig.auth.is_temporary
                        };
                        break;
                    case Mn.CMD.MESSAGE_RECIVER:
                        t = {
                            r: this.mUserInfo.regid,
                            m: this.mMsgArr.map((t => t.msg_id))
                        }
                }
                let e = 0;
                this.mSid ? e = this.mSid + 2 : (e = Yn.sid, Yn.sid > 1e8 ? Yn.sid = 0 : Yn.sid = Yn.sid + 4);
                return {
                    cmd: this.mCmd,
                    sid: e,
                    time: Math.round(Date.now() / 1e3),
                    body: t ? JSON.stringify(t) : ""
                }
            }
        }
        Yn.sid = 0;
        const Qn = "Channel";
        class qn {
            constructor() {
                this.mDataCache = {}, this.mMsgChache = {}
            }
            init(t) {
                this.mInitConfig = t, this.mConnectionController || (this.mConnectionController = new $n(t.webSocketUrl), this.mConnectionController.onEvent = this.onEvent.bind(this)), this.mConnectionController.setupConnection()
            }
            onEvent(t) {
                if (Pn.d(Qn, "onEvent:" + t.name), t.name == Mn.EVENT.DISCONNECT) {
                    const t = this,
                        e = Object.keys(t.mDataCache);
                    e.length > 0 && e.forEach((e => {
                        const n = t.mDataCache[e];
                        n && (n.cleanRespTimeout(), delete t.mDataCache[e])
                    }))
                }
                if (t.name == Mn.EVENT.MESSAGE) {
                    const e = JSON.parse(t.data),
                        n = e.cmd;
                    Pn.dd(Qn, `---<- cmd:${n}, data:${t.data}`), n == Mn.CMD.HEART_BEAT && (e.body = JSON.stringify({
                        code: 0
                    }));
                    const i = JSON.parse(e.body);
                    if (n == Mn.CMD.PUSH) {
                        const t = this._filterPushArr(e.sid, i.d);
                        if (!(t.length > 0)) return;
                        e.body = t
                    }
                    const s = this.mDataCache[e.sid + ""];
                    s && (s.cleanRespTimeout(), delete this.mDataCache[e.sid + ""], 0 !== i.code ? s.fail && s.fail(i) : s.hook ? s.hook(e, s.success) : s.success && s.success(i)), t.data = e
                }
                this.onevent(t)
            }
            _filterPushArr(t, e) {
                if (!e) return [];
                const n = e.map((t => JSON.parse(t)));
                this.send(Mn.CMD.MESSAGE_RECIVER, new Yn(this.mInitConfig).setCmd(Mn.CMD.MESSAGE_RECIVER).setSid(t).setUserInfo(this.mUserInfo).setPushMsgArray(n).build());
                const i = n.map((t => t.msg_id)),
                    s = this.mMsgChache[this.mUserInfo.regid];
                let a = [];
                if (s) {
                    for (let t = 0; t < i.length; t++) {
                        const e = i[t];
                        s.indexOf(e) < 0 ? (s.push(e), a.push(n[t])) : Pn.dd(Qn, "filter repeat msgid:" + e)
                    }
                    this.mMsgChache[this.mUserInfo.regid] = s
                } else this.mMsgChache[this.mUserInfo.regid] = i, a = n;
                return a
            }
            send(t, e) {
                Pn.dd(Qn, `---\x3e- cmd:${t}, data:${JSON.stringify(e)}`), this.mConnectionController.sendMessage(JSON.stringify(e))
            }
            updateUserInfo(t) {
                this.mUserInfo = t
            }
            stop() {
                this.mConnectionController && this.mConnectionController.disconnect()
            }
            reConnect() {
                this.mConnectionController && this.mConnectionController.reConnect()
            }
        }
        class ti {
            constructor(t) {
                this.mChannel = t, this.mTimes = 1
            }
            setCmd(t) {
                return this.mCmd = t, this
            }
            setData(t) {
                return this.mData = t, this
            }
            onSuccess(t) {
                return "function" == typeof t && (this.success = t), this
            }
            onFail(t) {
                return "function" == typeof t && (this.fail = t), this
            }
            onTimeout(t) {
                if ("function" == typeof t) {
                    this.timeout = t;
                    const e = this;
                    this.respTimeoutTaskId = setTimeout((function() {
                        e.respTimeoutTask()
                    }), Mn.REQUEST.WS_RESP_TIMEOUT)
                }
                return this
            }
            addHook(t) {
                return "function" == typeof t && (this.hook = t), this
            }
            respTimeoutTask() {
                if (this.mTimes < Mn.REQUEST.WS_RETRY_TIMES) {
                    this.mChannel.send(this.mCmd, this.mData), this.mTimes++;
                    const t = this;
                    this.respTimeoutTaskId = setTimeout((function() {
                        t.respTimeoutTask()
                    }), Mn.REQUEST.WS_RESP_TIMEOUT)
                } else this.timeout && this.timeout({
                    rid: this.mRid,
                    data: this.mData,
                    response_timeout: !0
                }), delete this.mChannel.mDataCache[this.mRid];
                return this
            }
            cleanRespTimeout() {
                return this.respTimeoutTaskId && clearTimeout(this.respTimeoutTaskId), this
            }
            send() {
                if (this.mCmd && this.mData) return this.mRid = this.mData.sid + 2 + "", this.mChannel.send(this.mCmd, this.mData), this.mChannel.mDataCache[this.mRid] = this, this;
                Pn.d("MsgBuilder", "send fail，event and data can not empty")
            }
        }
        const ei = "MTpushInterface.mtPush";
        class ni {
            constructor() {
                this.mInitStatu = ni.INIT_FAIL, this.mAutoDiscon = !0, this.mIsNeedInit = !1
            }
            init(t, e) {
                if (Pn.setDebugMode(t.debugMode || !1), this.mInitStatu == ni.INIT_ING) return void e.onFail(Kn(Wn.INITING));
                const n = t.auth,
                    i = n.is_temporary;
                !n || Fn(n.appkey) || Fn(n.random_str) || Fn(n.signature) || Fn(n.user_str) || Fn(i) || "t" !== i && "n" !== i || !n.timestamp || "number" != typeof n.timestamp ? e.onFail(Kn(Wn.CONFIG_INVALID)) : (t.is_temporary = i, Ln() ? (Pn.dd(ei, "action:init - sdkVersion:" + Mn.SDK_VERSION), this.mInitCallback = e, t.sdkVersion = Mn.SDK_VERSION, this.mInitConfig = t, this.mChannel || (this.mChannel = new qn, this.mChannel.onevent = this._addEventListen.bind(this)), this.mInitStatu == ni.INIT_SUCC ? (this.mIsNeedInit = !0, this.stopPush()) : (this.mChannel.init(this.mInitConfig), this.mAutoDiscon = !0), this.mInitStatu = ni.INIT_ING) : e.onFail(Kn(Wn.NETWORK_ERROR)))
            }
            _init() {
                const t = this;
                new ti(this.mChannel).setCmd(Mn.CMD.INIT).setData(new Yn(this.mInitConfig).setCmd(Mn.CMD.INIT).build()).onSuccess((function(e) {
                    t.mInitStatu = ni.INIT_SUCC, t.mUserInfo = e, t.mInitConfig.getInitInfo && t.mInitConfig.getInitInfo(e), t.mChannel.updateUserInfo(t.mUserInfo), t.mInitCallback && (t.mInitCallback.onSuccess(Kn(Zn)), t.mInitCallback = void 0), t._startHeartBeat()
                })).onFail((function(e) {
                    t._initFail(Kn(Wn.INIT_FAILED, e))
                })).onTimeout((function() {
                    t._initFail(Kn(Wn.INIT_TIME_OUT))
                })).send()
            }
            _initFail(t) {
                this.stopPush(), this.mInitCallback ? (Pn.ww(ei, "init fail:" + JSON.stringify(t)), this.mInitCallback.onFail(t), this.mInitCallback = void 0) : this.mDisconnetFn && (Pn.ww(ei, "invalid reconnect,close"), this.mDisconnetFn())
            }
            onMsgReceive(t) {
                this.mMsgReceiveFn = t
            }
            onDisconnect(t) {
                this.mDisconnetFn = t
            }
            getRegistrationID() {
                return this.mUserInfo ? this.mUserInfo.regid : ""
            }
            stopPush() {
                this.mAutoDiscon = !1, Yn.sid = 0, this._stopHearBeat(), this.mChannel && this.mChannel.stop(), this.mInitStatu = ni.INIT_FAIL, this.mUserInfo = null
            }
            _addEventListen(t) {
                if (t) {
                    if (Pn.d(ei, "event:" + t.name), t.name == Mn.EVENT.NOT_SUPPORT) return this._initFail(Kn(Hn, "do not support websocket")), void(this.mInitStatu = ni.INIT_FAIL);
                    if (t.name != Mn.EVENT.OPEN) {
                        if (t.name == Mn.EVENT.DISCONNECT) {
                            if (Yn.sid = 0, this._stopHearBeat(), this.mIsNeedInit && !this.mAutoDiscon) return Pn.dd(ei, "reinit."), this.mChannel.init(this.mInitConfig), this.mIsNeedInit = !1, void(this.mAutoDiscon = !0);
                            if (!this.mUserInfo && this.mAutoDiscon) return void this._initFail(Kn(Wn.NETWORK_ERROR))
                        }
                        if (t.name == Mn.EVENT.MESSAGE) {
                            if (t.data.cmd == Mn.CMD.PUSH) {
                                const e = t.data.body;
                                if (this.mMsgReceiveFn) return void this.mMsgReceiveFn({
                                    messages: e
                                })
                            }
                        }
                    } else this._init()
                }
            }
            _startHeartBeat() {
                this.mHeartTimeOut && clearTimeout(this.mHeartTimeOut), this.mHeartTimeOut = setTimeout((() => {
                    this._heartBeat()
                }), Mn.REQUEST.WS_HEART_BEAT)
            }
            _heartBeat() {
                const t = this;
                new ti(this.mChannel).setCmd(Mn.CMD.HEART_BEAT).setData(new Yn(this.mInitConfig).setCmd(Mn.CMD.HEART_BEAT).setUserInfo(this.mUserInfo).build()).onSuccess((function() {
                    t._startHeartBeat()
                })).onFail((function() {
                    t._reconnect()
                })).onTimeout((function() {
                    t._reconnect()
                })).send()
            }
            _reconnect() {
                Pn.ww(ei, "wrong heartbeat,try reconnect"), this._stopHearBeat(), this.mChannel.reConnect()
            }
            _stopHearBeat() {
                this.mHeartTimeOut && (clearTimeout(this.mHeartTimeOut), this.mHeartTimeOut = void 0)
            }
            _resetHeartBeat() {
                this.mHeartTimeOut && (clearTimeout(this.mHeartTimeOut), this._startHeartBeat())
            }
        }
        ni.INIT_SUCC = "INITSUCC", ni.INIT_ING = "INITING", ni.INIT_FAIL = "INITFAIL";
        const ii = new ni,
            si = {
                init: function(t) {
                    try {
                        ii.init(t, new Gn(t))
                    } catch (e) {
                        Pn.ww(ei, "init fail：" + e), t.fail(Kn(Hn))
                    }
                },
                onMsgReceive: function(t) {
                    "function" == typeof t && (Pn.dd(ei, "set onMsgReceive"), ii.onMsgReceive(t))
                },
                onDisconnect: function(t) {
                    "function" == typeof t && (Pn.dd(ei, "set onDisconnect"), ii.onDisconnect(t))
                },
                stopPush: function() {
                    Pn.dd(ei, "stopPush"), ii.stopPush()
                },
                getRegistrationID() {
                    const t = ii.getRegistrationID();
                    return Pn.dd(ei, "getRegistrationID:" + t), t
                },
                mtpush: ii
            };

        function ai(t) {
            return t ? ` style="color:${t};"` : ""
        }
        const ri = {
            position: "left",
            title: "",
            titleColor: "",
            text: "",
            textColor: "",
            confirm: "",
            confirmColor: "",
            confirmBgc: "",
            cancel: "",
            cancelColor: "",
            src: ""
        };

        function oi(t, e = (() => {}), n = (() => {})) {
            const i = Object.assign(ri, t);
            i.position = {
                left: "left:0",
                center: "left:50%;transform:translate(-50%,0)",
                right: "right:0"
            } [t.position] || "left:0";
            let s = (i.confirmColor ? `color:${i.confirmColor};` : "") + (i.confirmBgc ? `background-color:${i.confirmBgc};` : "");
            s = s ? ` style="${s}"` : "";
            const a = `<img src="${i.src||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAh1BMVEUAAAAsa/8sbP9FXP8lYf8sa/8sa/8ra/8sa/8ra/8sa/8sa/8sa/8sa/8sa/8sa/8rZf8sa/8sa/8sa/8sa/8sa/8sbP8ra/8sa/8sa/8oav8sa/8maP8sa/8rbP8sa/8sa/8sa/8oaP8rbP8sa/8ra/8ra/8ta/8sav8mav8sa/8ra/8taf/cU0AXAAAALXRSTlMA1tMCBMzQPsgzF76Zc25nCrqsW7e0jnpgTB8cDcXBr4BWEKeiY0Y5KhNqUiIjzI9vAAABjUlEQVRIx+2VW3OCMBCFOZAAIje5iYqKeNf+/9/X3RpKsZlOpn3qjN+D2dnk5OSsD1haJqGU4cUyZmGDsE+m5zsfH/iNoeAOFKvlDFgYChIgsqw5cDSN0Dv8GCKo/ESVZygmvaVfBc/nTxR0zYXIS3yy3QnurWnPG5/PeZA3vr3EiJJdbjzkxdOrUdCWk7BwOvcCIQKv3fDBmv/IKRVfPJYucOChtwA29AyF2LFkTtU1A+SQI6TXprTGAEIqBhraAg+jK4Cq717I70Krx9c543BOq6Y1oce+qWb0EKdTup/PjxXkMWPXCohVLwM40JHi0s4zzRrIH/6ZakmA8ggyuFsacrIg4wCQqmPDpYZHBo5OIDYAj9yF3WeQMf/yALW0j9fHMhq198BZLyDvg6ZNEa56wQooNG0XcPSCFPC/dx2oTPqtl+AlMBFELoxwYyWQMMT/ncPfWdaroTBhhnIoTJBAymvHKU3IgFp96g5Gghpwj02XuMDOSCC2UGTCMiJQiuxqGSLyvZT7XFj/g3cZFxJZ+tXnmgAAAABJRU5ErkJggg=="}"/>\n  <h3${ai(i.titleColor)}>${i.title}</h3>\n  <p class="notic-user-tip-data"${ai(i.textColor)}>${i.text}</p>\n  <div class="button-warp">\n    <span class="web-push-tip-cancel" ${ai(i.cancelColor)}>${i.cancel}</span><span class="confirm" ${s}>${i.confirm}</span>\n  </div>`;
            ! function(t) {
                const e = document.createElement("style");
                e.appendChild(document.createTextNode(t)), document.getElementsByTagName("head")[0].appendChild(e)
            }(".notic-user-tip-warp {\n  width: 378px;\n  min-height: 134px;\n  background: #ffffff;\n  box-shadow: 0px 24px 24px -6px rgba(37, 48, 68, 0.14), 0px 2px 6px 0px rgba(37, 48, 68, 0.12);\n  border-radius: 4px;\n  position: absolute;\n  padding: 20px 20px 20px 72px;\n  top: 0;\n}\n.notic-user-tip-warp.notic-user-tip-warp-hide{display:none}\n.notic-user-tip-warp > img {\n  position: absolute;\n  width: 40px;\n  left: 16px;\n  top: 20px;\n}\n.notic-user-tip-warp > h3 {\n  font-size: 14px;\n  color: #000;\n  line-height: 18px;\n  padding-bottom: 2px;\n  font-weight: bolder;\n}\n.notic-user-tip-warp > .notic-user-tip-data {\n  font-size: 14px;\n  line-height: 22px;\n  color: #666;\n  min-height: 44px;\n  overflow: hidden;\n  padding-bottom: 16px;\n  word-spacing: pre-wrap;\n}\n.notic-user-tip-warp > .button-warp {\n  text-align: right;\n}\n.notic-user-tip-warp > .button-warp > span {\n  display: inline-block;\n  height: 32px;\n  line-height: 32px;\n  border-radius: 3px;\n  padding: 0 16px;\n  margin-left: 8px;\n  color: #cccccc;\n  cursor: pointer;\n}\n.notic-user-tip-warp > .button-warp > .confirm {\n  color: #fff;\n  background: #2c6bff;\n}");
            const r = document.createElement("div");

            function o(t = !1) {
                t ? r.classList.add("notic-user-tip-warp-hide") : r.classList.remove("notic-user-tip-warp-hide")
            }
            return r.className = "notic-user-tip-warp notic-user-tip-warp-hide", r.style.cssText = i.position, r.innerHTML = a, document.body.appendChild(r), r.addEventListener("click", (t => {
                const i = t.target.classList;
                i.contains("confirm") && (e(), o(!0)), i.contains("web-push-tip-cancel") && (n(), o(!0))
            })), o
        }
        const ci = ["active_launch", "active_terminate"];

        function hi(t) {
            const e = Number(localStorage.getItem(t) || "0");
            return isNaN(e) ? 0 : e
        }

        function li(t, e = "", n = !1) {
            var i, s, a, r;
            if (mi.data && mi.userOption) {
                const o = mi;
                let c = !1;
                if (t.forEach((t => {
                        const e = (new Date).getTime() / 1e3 | 0;
                        t.type && ci.includes(t.type) && (e - hi(t.type) < 30 && (c = !0), localStorage.setItem(t.type, e.toString())), t.itime = e, t.msg_id && (t.msg_id = t.msg_id.toString())
                    })), c) return;
                const h = {
                    platform: "b",
                    uid: null === (i = o.data) || void 0 === i ? void 0 : i.uid,
                    app_key: null === (s = o.userOption) || void 0 === s ? void 0 : s.appkey,
                    channel: e,
                    content: t
                };
                return n ? {
                    url: null === (a = mi.userOption) || void 0 === a ? void 0 : a.report_url,
                    data: h
                } : Dn((null === (r = mi.userOption) || void 0 === r ? void 0 : r.report_url) || "", h)
            }
        }
        const di = {
            mtPush: {
                code: 0,
                msg: ""
            },
            webPush: {
                code: 0,
                msg: ""
            }
        };

        function ui() {
            return di.mtPush = {
                INITSUCC: {
                    code: 1,
                    msg: "The Aurora push channel is initialized！"
                },
                INIT_ING: {
                    code: -1,
                    msg: "The Aurora push channel is being initialized. Please try again later！"
                },
                INIT_FAIL: {
                    code: 0,
                    msg: "Aurora push channel initialization failed or stopped！"
                }
            } [si.mtpush.mInitStatu] || {
                code: 0,
                msg: ""
            }, JSON.parse(JSON.stringify(di))
        }

        function fi(t, e = (() => {})) {
            const n = t.visit || 0,
                i = t.delay || 0,
                s = Number(window.localStorage.getItem("subscriptionVisit") || 0);
            s > n - 1 ? i > 0 ? setTimeout(e, 1e3 * i) : e() : window.localStorage.setItem("subscriptionVisit", (s + 1).toString())
        }

        function _i(t = (() => {}), e, n) {
            function i(e, n, i) {
                e < 1 && (e = 0, n = "web push notification unavailable"), di.webPush.code = e, di.webPush.msg = n, t(e, n, i)
            }! function(t = (() => {}), e) {
                null != window.PushManager || null != navigator.serviceWorker ? "serviceWorker" in navigator ? navigator.serviceWorker.register(e || "/sw.min.1.0.0.js").then((function(e) {
                    const n = e.installing;
                    n ? n.addEventListener("statechange", (function(n) {
                        var i;
                        "activated" === (null === (i = n.target) || void 0 === i ? void 0 : i.state) && t(!0, e)
                    })) : t(!0, e)
                })).catch((function(e) {
                    t(!1, e)
                })) : t(!1, "serviceWorker http is not supported") : t(!1, "The browser does not support subscription push")
            }(((t, s) => {
                function a(t, n) {
                    1 === t ? Bn(s, e.VAPIDPublicKey, Nn.subscribeSuccess, (e => {
                        let s = -6,
                            a = "Message subscription failed！";
                        e && (s = 0, a = "Message subscription succeeded！"), i(t + s, n + a)
                    })) : i(t, n)
                }

                function r() {
                    ! function(t = gi) {
                        var e;
                        let n = "web.cn.jiguang";
                        const i = mi.userOption,
                            s = ((null == i ? void 0 : i.safari_url) || (null == i ? void 0 : i.baseUrl)) + "/webpush";

                        function a() {
                            const t = zn(),
                                e = t.data;
                            n = t.id, r(e)
                        }

                        function r(e) {
                            var i, o;
                            "default" === e.permission ? (li([{
                                type: "ntf_status",
                                result: 0
                            }]), window.safari.pushNotification.requestPermission(s, n, {
                                appkey: null === (i = mi.userOption) || void 0 === i ? void 0 : i.appkey,
                                uid: null === (o = mi.data) || void 0 === o ? void 0 : o.uid.toString()
                            }, r)) : (document.body.removeEventListener("click", a), bi(e.permission, t), "denied" === e.permission ? li([{
                                type: "ntf_status",
                                result: 2
                            }]) : li([{
                                type: "ntf_status",
                                result: 1
                            }]))
                        }
                        if ("safari" in window && "pushNotification" in window.safari) try {
                            a()
                        } catch (t) {
                            document.body.addEventListener("click", a)
                        } else li([{
                            type: "ntf_status",
                            result: 0
                        }]), null === (e = Notification.requestPermission()) || void 0 === e || e.then((function(e) {
                            bi(e, t), "denied" === e ? (li([{
                                type: "ntf_status",
                                result: 2
                            }]), Dn(Nn.unsubscribe)) : li([{
                                type: "ntf_status",
                                result: 1
                            }])
                        }))
                    }(((t, e) => {
                        a(t, e)
                    }))
                }
                t ? wi(((t, e) => {
                    1 === t ? a(t, e) : 3 === t ? Dn(Nn.option, {
                        appkey: n.appkey
                    }).then((t => {
                        const e = t.subscribe_config || {};
                        if (2 === t.subscribe_type) {
                            const t = oi(e, r);
                            fi(e, (() => {
                                t()
                            }))
                        } else 3 === t.subscribe_type ? n.custom ? n.custom(r) : r() : fi(e, r)
                    })) : i(t, e)
                })) : i(-2, "ServiceWorker registration failed", s)
            }), e.swUrl)
        }

        function pi() {}
        const mi = {
            data: null,
            userOption: null
        };
        const gi = (t, e) => {};

        function bi(t, e = gi) {
            switch (t) {
                case "granted":
                    e(1, "Notification Available");
                    break;
                case "denied":
                    e(2, "Notification Permission disabled");
                    break;
                default:
                    e(3, "Notification The permission has not been confirmed")
            }
        }

        function wi(t = gi) {
            if ("undefined" == typeof Notification) return void t(0, "Browser not supported Notification API");
            bi(Notification.permission, t)
        }

        function vi(t, e, n = {}) {
            if ("granted" === Notification.permission) {
                const i = new Notification(t, e);
                n && n.msg_id && li([{
                    type: "msg_status",
                    msg_id: n.msg_id,
                    result: 3018
                }], "MTPush"), i.addEventListener("click", (t => {
                    n && n.msg_id && li([{
                        type: "msg_status",
                        msg_id: n.msg_id,
                        result: 3002
                    }], "MTPush");
                    const e = t.target.data;
                    (null == e ? void 0 : e.url) && window.open((e.url + "/path/index.html"))
                }))
            }
        }
        window.addEventListener("unload", (() => {
            const t = li([{
                type: "active_terminate",
                duration: (e = "active_launch", (new Date).getTime() / 1e3 - hi(e) | 0)
            }], "", !0);
            var e;
            t && vn(9999, t)
        }));
        let yi = () => {};

        function ki(t, e) {
            "function" == typeof yi && yi({
                data: t,
                type: e
            })
        }
        navigator.serviceWorker.addEventListener("message", (t => {
            ki(t.data, 1)
        })), si.onMsgReceive((t => {
            t.messages && t.messages.length > 0 && t.messages.forEach((t => {
                var e;
                !(e = t.ntf_or_msg) || 1 !== e && 3 !== e || vi(t.title, function(t) {
                    const e = Object.assign({}, t),
                        n = ["content", "extras", "msg_id", "ntf_or_msg", "title"];
                    return void 0 !== t.content && (e.body = t.content, n.forEach((t => {
                        delete e[t]
                    }))), e
                }(t), t)
            })), ki(t, 0)
        }));
        const Ei = {
                customClickReport(t, e = "MTPush") {
                    li([{
                        type: "msg_status",
                        msg_id: t,
                        result: 3028
                    }], e = "W3Push" !== e ? "MTPush" : e)
                },
                init: function(t) {
                    1 === ui().mtPush.code && mi.data && i(mi.data), t.report_url = t.report_url || "https://webpushstat.api.engagelab.cc/v3/report";
                    const e = t.baseUrl || "https://conn.webpush.theengagelab.com";
                    t.baseUrl = e, mi.userOption = t;
                    const n = t.is_temporary || "n";

                    function i(e) {
                        const n = Rn(e.uid.toString(), e.passwd);
                        mi.data = e, vn(100, {
                            infoData: n,
                            userInfoData: mi
                        });
                        const i = (new Date).getTimezoneOffset() / -60 | 0;
                        li([{
                            type: "active_launch"
                        }, {
                            type: "oversea_info",
                            time_zone: i > 0 ? "+" + i : i.toString(),
                            lang: navigator.language,
                            contry: ""
                        }, {
                            type: "web_info",
                            device_info: {
                                sdk_version: "1.0.0",
                                time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone
                            }
                        }]), t.canGetInfo && t.canGetInfo(e), "t" !== t.is_temporary && function(t, e) {
                            _i(e.webPushcallback, {
                                VAPIDPublicKey: t.vapid_pubkey,
                                swUrl: e.swUrl
                            }, e)
                        }(e, t)
                    }
                    Tn(e),
                        function(t, e, n, i = "n") {
                            return In.get(t, {
                                user_str: e,
                                appkey: n,
                                is_temporary: i
                            })
                        }(e + Nn.auth, t.user_str, t.appkey, n).then((s => {
                            const a = (t.baseUrl || e).split("//");
                            let r = "https:" === a[0] ? "wss://" : "ws://";
                            r += a[1];
                            let o = !0;
                            si.init({
                                webSocketUrl: t.webSocketUrl || r,
                                auth: Object.assign(Object.assign({}, s), {
                                    is_temporary: n
                                }),
                                success: t.success || pi,
                                fail: t.fail || pi,
                                getInitInfo(t) {
                                    o || (i(t), o = !0)
                                }
                            })
                        }))
                },
                getPushAuthority: ui,
                getRegistrationID: si.getRegistrationID,
                getWebPermission: () => Notification.permission,
                mtPush: si,
                onMsgReceive: t => {
                    yi = t
                },
                webPush: {
                    displayNotification: vi,
                    permission: wi,
                    init: _i
                },
                setTagsAlias(t) {
                    function e(t, e) {
                        if (t) throw new Error(e)
                    }
                    if (mi.userOption) {
                        const n = mi.userOption;
                        e(!t.tags, "The tags attribute is missing"), e(!t.alias, "The alias attribute is missing"), e(!!(t.alias && t.alias.length > 40), "The alias can be up to 40 characters in length"), e(t.alias.length > 1e3, "You can set up to 1,000 tags at a time"), t.tags.forEach((t => {
                            e(t.length > 40, "The tag can be up to 40 characters in length")
                        })), Dn(Nn.tagalias, Object.assign({
                            temporary: "t" === n.is_temporary,
                            appkey: n.appkey
                        }, t))
                    }
                },
                unSubscribe: () => Dn(Nn.unsubscribe)
            },
            Ci = {
                url: "",
                id: ""
            };
        location.search.slice(1).split("&").forEach((t => {
            const e = t.split("=");
            2 === e.length && "webpush_safari_url" === e[0] && (Ci.url = e[1]), 2 === e.length && "msg_id" === e[0] && (Ci.id = e[1])
        })), Ci.url && Ci.id && (vn(6666, {
            msg_id: Ci.id
        }), window.location.href = Ci.url);
        const Si = Ei
    })(), i = i.default
})()));
