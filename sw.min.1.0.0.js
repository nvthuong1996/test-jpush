(() => {
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
                        h = [],
                        l = [],
                        c = [],
                        d = [],
                        _ = [],
                        f = [];
                    ! function() {
                        for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                        var n = 0,
                            i = 0;
                        for (e = 0; e < 256; e++) {
                            var u = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                            u = u >>> 8 ^ 255 & u ^ 99, s[n] = u, a[u] = n;
                            var m = t[n],
                                p = t[m],
                                g = t[p],
                                w = 257 * t[u] ^ 16843008 * u;
                            r[n] = w << 24 | w >>> 8, o[n] = w << 16 | w >>> 16, h[n] = w << 8 | w >>> 24, l[n] = w, w = 16843009 * g ^ 65537 * p ^ 257 * m ^ 16843008 * n, c[u] = w << 24 | w >>> 8, d[u] = w << 16 | w >>> 16, _[u] = w << 8 | w >>> 24, f[u] = w, n ? (n = m ^ t[t[t[g ^ m]]], i ^= t[t[i]]) : n = i = 1
                        }
                    }();
                    var u = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                        m = n.AES = e.extend({
                            _doReset: function() {
                                if (!this._nRounds || this._keyPriorReset !== this._key) {
                                    for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, i = 4 * ((this._nRounds = n + 6) + 1), a = this._keySchedule = [], r = 0; r < i; r++) r < n ? a[r] = e[r] : (l = a[r - 1], r % n ? n > 6 && r % n == 4 && (l = s[l >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & l]) : (l = s[(l = l << 8 | l >>> 24) >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & l], l ^= u[r / n | 0] << 24), a[r] = a[r - n] ^ l);
                                    for (var o = this._invKeySchedule = [], h = 0; h < i; h++) {
                                        if (r = i - h, h % 4) var l = a[r];
                                        else l = a[r - 4];
                                        o[h] = h < 4 || r <= 4 ? l : c[s[l >>> 24]] ^ d[s[l >>> 16 & 255]] ^ _[s[l >>> 8 & 255]] ^ f[s[255 & l]]
                                    }
                                }
                            },
                            encryptBlock: function(t, e) {
                                this._doCryptBlock(t, e, this._keySchedule, r, o, h, l, s)
                            },
                            decryptBlock: function(t, e) {
                                var n = t[e + 1];
                                t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, c, d, _, f, a), n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n
                            },
                            _doCryptBlock: function(t, e, n, i, s, a, r, o) {
                                for (var h = this._nRounds, l = t[e] ^ n[0], c = t[e + 1] ^ n[1], d = t[e + 2] ^ n[2], _ = t[e + 3] ^ n[3], f = 4, u = 1; u < h; u++) {
                                    var m = i[l >>> 24] ^ s[c >>> 16 & 255] ^ a[d >>> 8 & 255] ^ r[255 & _] ^ n[f++],
                                        p = i[c >>> 24] ^ s[d >>> 16 & 255] ^ a[_ >>> 8 & 255] ^ r[255 & l] ^ n[f++],
                                        g = i[d >>> 24] ^ s[_ >>> 16 & 255] ^ a[l >>> 8 & 255] ^ r[255 & c] ^ n[f++],
                                        w = i[_ >>> 24] ^ s[l >>> 16 & 255] ^ a[c >>> 8 & 255] ^ r[255 & d] ^ n[f++];
                                    l = m, c = p, d = g, _ = w
                                }
                                m = (o[l >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[d >>> 8 & 255] << 8 | o[255 & _]) ^ n[f++], p = (o[c >>> 24] << 24 | o[d >>> 16 & 255] << 16 | o[_ >>> 8 & 255] << 8 | o[255 & l]) ^ n[f++], g = (o[d >>> 24] << 24 | o[_ >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & c]) ^ n[f++], w = (o[_ >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & d]) ^ n[f++], t[e] = m, t[e + 1] = p, t[e + 2] = g, t[e + 3] = w
                            },
                            keySize: 8
                        });
                    t.AES = e._createHelper(m)
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
                        h = (o.Utf8, o.Base64),
                        l = e.algo.EvpKDF,
                        c = n.Cipher = r.extend({
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
                                    return "string" == typeof t ? b : g
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
                        d = (n.StreamCipher = c.extend({
                            _doFinalize: function() {
                                return this._process(!0)
                            },
                            blockSize: 1
                        }), e.mode = {}),
                        _ = n.BlockCipherMode = s.extend({
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
                            var e = _.extend();

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
                        u = (e.pad = {}).Pkcs7 = {
                            pad: function(t, e) {
                                for (var n = 4 * e, i = n - t.sigBytes % n, s = i << 24 | i << 16 | i << 8 | i, r = [], o = 0; o < i; o += 4) r.push(s);
                                var h = a.create(r, i);
                                t.concat(h)
                            },
                            unpad: function(t) {
                                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                                t.sigBytes -= e
                            }
                        },
                        m = (n.BlockCipher = c.extend({
                            cfg: c.cfg.extend({
                                mode: f,
                                padding: u
                            }),
                            reset: function() {
                                var t;
                                c.reset.call(this);
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
                        p = (e.format = {}).OpenSSL = {
                            stringify: function(t) {
                                var e = t.ciphertext,
                                    n = t.salt;
                                return (n ? a.create([1398893684, 1701076831]).concat(n).concat(e) : e).toString(h)
                            },
                            parse: function(t) {
                                var e, n = h.parse(t),
                                    i = n.words;
                                return 1398893684 == i[0] && 1701076831 == i[1] && (e = a.create(i.slice(2, 4)), i.splice(0, 4), n.sigBytes -= 16), m.create({
                                    ciphertext: n,
                                    salt: e
                                })
                            }
                        },
                        g = n.SerializableCipher = s.extend({
                            cfg: s.extend({
                                format: p
                            }),
                            encrypt: function(t, e, n, i) {
                                i = this.cfg.extend(i);
                                var s = t.createEncryptor(n, i),
                                    a = s.finalize(e),
                                    r = s.cfg;
                                return m.create({
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
                        w = (e.kdf = {}).OpenSSL = {
                            execute: function(t, e, n, i) {
                                i || (i = a.random(8));
                                var s = l.create({
                                        keySize: e + n
                                    }).compute(t, i),
                                    r = a.create(s.words.slice(e), 4 * n);
                                return s.sigBytes = 4 * e, m.create({
                                    key: s,
                                    iv: r,
                                    salt: i
                                })
                            }
                        },
                        b = n.PasswordBasedCipher = g.extend({
                            cfg: g.cfg.extend({
                                kdf: w
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
                        h = o.Base = {
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
                        l = o.WordArray = h.extend({
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
                                var t = h.clone.call(this);
                                return t.words = this.words.slice(0), t
                            },
                            random: function(t) {
                                for (var e = [], n = 0; n < t; n += 4) e.push(s());
                                return new l.init(e, t)
                            }
                        }),
                        c = r.enc = {},
                        d = c.Hex = {
                            stringify: function(t) {
                                for (var e = t.words, n = t.sigBytes, i = [], s = 0; s < n; s++) {
                                    var a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                    i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16))
                                }
                                return i.join("")
                            },
                            parse: function(t) {
                                for (var e = t.length, n = [], i = 0; i < e; i += 2) n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return new l.init(n, e / 2)
                            }
                        },
                        _ = c.Latin1 = {
                            stringify: function(t) {
                                for (var e = t.words, n = t.sigBytes, i = [], s = 0; s < n; s++) {
                                    var a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                    i.push(String.fromCharCode(a))
                                }
                                return i.join("")
                            },
                            parse: function(t) {
                                for (var e = t.length, n = [], i = 0; i < e; i++) n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                                return new l.init(n, e)
                            }
                        },
                        f = c.Utf8 = {
                            stringify: function(t) {
                                try {
                                    return decodeURIComponent(escape(_.stringify(t)))
                                } catch (t) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(t) {
                                return _.parse(unescape(encodeURIComponent(t)))
                            }
                        },
                        u = o.BufferedBlockAlgorithm = h.extend({
                            reset: function() {
                                this._data = new l.init, this._nDataBytes = 0
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
                                    h = (o = e ? t.ceil(o) : t.max((0 | o) - this._minBufferSize, 0)) * r,
                                    c = t.min(4 * h, a);
                                if (h) {
                                    for (var d = 0; d < h; d += r) this._doProcessBlock(s, d);
                                    n = s.splice(0, h), i.sigBytes -= c
                                }
                                return new l.init(n, c)
                            },
                            clone: function() {
                                var t = h.clone.call(this);
                                return t._data = this._data.clone(), t
                            },
                            _minBufferSize: 0
                        }),
                        m = (o.Hasher = u.extend({
                            cfg: h.extend(),
                            init: function(t) {
                                this.cfg = this.cfg.extend(t), this.reset()
                            },
                            reset: function() {
                                u.reset.call(this), this._doReset()
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
                                    return new m.HMAC.init(t, n).finalize(e)
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
                            var h = i.charAt(64);
                            if (h)
                                for (; s.length % 4;) s.push(h);
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
                var i, s, a, r, o, h, l, c;
                t.exports = (c = n(249), n(783), n(824), s = (i = c).lib, a = s.Base, r = s.WordArray, o = i.algo, h = o.MD5, l = o.EvpKDF = a.extend({
                    cfg: a.extend({
                        keySize: 4,
                        hasher: h,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var n, i = this.cfg, s = i.hasher.create(), a = r.create(), o = a.words, h = i.keySize, l = i.iterations; o.length < h;) {
                            n && s.update(n), n = s.update(t).finalize(e), s.reset();
                            for (var c = 1; c < l; c++) n = s.finalize(n), s.reset();
                            a.concat(n)
                        }
                        return a.sigBytes = 4 * h, a
                    }
                }), i.EvpKDF = function(t, e, n) {
                    return l.create(n).compute(t, e)
                }, c.EvpKDF)
            },
            824: function(t, e, n) {
                var i, s, a, r;
                t.exports = (i = n(249), a = (s = i).lib.Base, r = s.enc.Utf8, void(s.algo.HMAC = a.extend({
                    init: function(t, e) {
                        t = this._hasher = new t.init, "string" == typeof e && (e = r.parse(e));
                        var n = t.blockSize,
                            i = 4 * n;
                        e.sigBytes > i && (e = t.finalize(e)), e.clamp();
                        for (var s = this._oKey = e.clone(), a = this._iKey = e.clone(), o = s.words, h = a.words, l = 0; l < n; l++) o[l] ^= 1549556828, h[l] ^= 909522486;
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
                    var h = r.MD5 = a.extend({
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
                                h = t[e + 1],
                                f = t[e + 2],
                                u = t[e + 3],
                                m = t[e + 4],
                                p = t[e + 5],
                                g = t[e + 6],
                                w = t[e + 7],
                                b = t[e + 8],
                                v = t[e + 9],
                                y = t[e + 10],
                                k = t[e + 11],
                                E = t[e + 12],
                                C = t[e + 13],
                                S = t[e + 14],
                                x = t[e + 15],
                                I = a[0],
                                T = a[1],
                                A = a[2],
                                R = a[3];
                            I = l(I, T, A, R, r, 7, o[0]), R = l(R, I, T, A, h, 12, o[1]), A = l(A, R, I, T, f, 17, o[2]), T = l(T, A, R, I, u, 22, o[3]), I = l(I, T, A, R, m, 7, o[4]), R = l(R, I, T, A, p, 12, o[5]), A = l(A, R, I, T, g, 17, o[6]), T = l(T, A, R, I, w, 22, o[7]), I = l(I, T, A, R, b, 7, o[8]), R = l(R, I, T, A, v, 12, o[9]), A = l(A, R, I, T, y, 17, o[10]), T = l(T, A, R, I, k, 22, o[11]), I = l(I, T, A, R, E, 7, o[12]), R = l(R, I, T, A, C, 12, o[13]), A = l(A, R, I, T, S, 17, o[14]), I = c(I, T = l(T, A, R, I, x, 22, o[15]), A, R, h, 5, o[16]), R = c(R, I, T, A, g, 9, o[17]), A = c(A, R, I, T, k, 14, o[18]), T = c(T, A, R, I, r, 20, o[19]), I = c(I, T, A, R, p, 5, o[20]), R = c(R, I, T, A, y, 9, o[21]), A = c(A, R, I, T, x, 14, o[22]), T = c(T, A, R, I, m, 20, o[23]), I = c(I, T, A, R, v, 5, o[24]), R = c(R, I, T, A, S, 9, o[25]), A = c(A, R, I, T, u, 14, o[26]), T = c(T, A, R, I, b, 20, o[27]), I = c(I, T, A, R, C, 5, o[28]), R = c(R, I, T, A, f, 9, o[29]), A = c(A, R, I, T, w, 14, o[30]), I = d(I, T = c(T, A, R, I, E, 20, o[31]), A, R, p, 4, o[32]), R = d(R, I, T, A, b, 11, o[33]), A = d(A, R, I, T, k, 16, o[34]), T = d(T, A, R, I, S, 23, o[35]), I = d(I, T, A, R, h, 4, o[36]), R = d(R, I, T, A, m, 11, o[37]), A = d(A, R, I, T, w, 16, o[38]), T = d(T, A, R, I, y, 23, o[39]), I = d(I, T, A, R, C, 4, o[40]), R = d(R, I, T, A, r, 11, o[41]), A = d(A, R, I, T, u, 16, o[42]), T = d(T, A, R, I, g, 23, o[43]), I = d(I, T, A, R, v, 4, o[44]), R = d(R, I, T, A, E, 11, o[45]), A = d(A, R, I, T, x, 16, o[46]), I = _(I, T = d(T, A, R, I, f, 23, o[47]), A, R, r, 6, o[48]), R = _(R, I, T, A, w, 10, o[49]), A = _(A, R, I, T, S, 15, o[50]), T = _(T, A, R, I, p, 21, o[51]), I = _(I, T, A, R, E, 6, o[52]), R = _(R, I, T, A, u, 10, o[53]), A = _(A, R, I, T, y, 15, o[54]), T = _(T, A, R, I, h, 21, o[55]), I = _(I, T, A, R, b, 6, o[56]), R = _(R, I, T, A, x, 10, o[57]), A = _(A, R, I, T, g, 15, o[58]), T = _(T, A, R, I, C, 21, o[59]), I = _(I, T, A, R, m, 6, o[60]), R = _(R, I, T, A, k, 10, o[61]), A = _(A, R, I, T, f, 15, o[62]), T = _(T, A, R, I, v, 21, o[63]), a[0] = a[0] + I | 0, a[1] = a[1] + T | 0, a[2] = a[2] + A | 0, a[3] = a[3] + R | 0
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
                            for (var o = this._hash, h = o.words, l = 0; l < 4; l++) {
                                var c = h[l];
                                h[l] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                            }
                            return o
                        },
                        clone: function() {
                            var t = a.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });

                    function l(t, e, n, i, s, a, r) {
                        var o = t + (e & n | ~e & i) + s + r;
                        return (o << a | o >>> 32 - a) + e
                    }

                    function c(t, e, n, i, s, a, r) {
                        var o = t + (e & i | n & ~i) + s + r;
                        return (o << a | o >>> 32 - a) + e
                    }

                    function d(t, e, n, i, s, a, r) {
                        var o = t + (e ^ n ^ i) + s + r;
                        return (o << a | o >>> 32 - a) + e
                    }

                    function _(t, e, n, i, s, a, r) {
                        var o = t + (n ^ (e | ~i)) + s + r;
                        return (o << a | o >>> 32 - a) + e
                    }
                    e.MD5 = a._createHelper(h), e.HmacMD5 = a._createHmacHelper(h)
                }(Math), i.MD5)
            },
            783: function(t, e, n) {
                var i, s, a, r, o, h, l, c;
                t.exports = (c = n(249), s = (i = c).lib, a = s.WordArray, r = s.Hasher, o = i.algo, h = [], l = o.SHA1 = r.extend({
                    _doReset: function() {
                        this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, i = n[0], s = n[1], a = n[2], r = n[3], o = n[4], l = 0; l < 80; l++) {
                            if (l < 16) h[l] = 0 | t[e + l];
                            else {
                                var c = h[l - 3] ^ h[l - 8] ^ h[l - 14] ^ h[l - 16];
                                h[l] = c << 1 | c >>> 31
                            }
                            var d = (i << 5 | i >>> 27) + o + h[l];
                            d += l < 20 ? 1518500249 + (s & a | ~s & r) : l < 40 ? 1859775393 + (s ^ a ^ r) : l < 60 ? (s & a | s & r | a & r) - 1894007588 : (s ^ a ^ r) - 899497514, o = r, r = a, a = s << 30 | s >>> 2, s = i, i = d
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
                }), i.SHA1 = r._createHelper(l), i.HmacSHA1 = r._createHmacHelper(l), c.SHA1)
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
    }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";
        const t = {
            cache: "no-cache",
            headers: {},
            redirect: "follow",
            mode: "cors"
        };

        function e(e, n = "POST", i, s, a = "json") {
            var r;
            const o = s || {};
            const h = Object.assign(t, {
                method: n
            });
            Object.keys(t.headers || {}).length > 0 && (h.headers = t.headers);
            const l = Object.assign(h, o);
            if (l.method = null === (r = l.method) || void 0 === r ? void 0 : r.toUpperCase(), "GET" === l.method) {
                if (i) {
                    let t = "";
                    const n = /([?&])_=[^&]*/,
                        s = /\?/;
                    "object" == typeof i && (t = function(t) {
                        let e = "";
                        for (const n in t) t.hasOwnProperty(n) && (e += n + "=" + encodeURIComponent(t[n]) + "&");
                        return e.slice(0, -1)
                    }(i)), e = n.test(e) ? e.replace(n, "$1" + t) : e + (s.test(e) ? "&" : "?") + t
                }
            } else [FormData, ArrayBuffer, Blob].filter((t => i instanceof t)).length > 0 ? l.body = i : (l.headers = Object.assign({
                "Content-Type": "application/json"
            }, l.headers), i && (l.body = "string" == typeof i ? i : JSON.stringify(i)));
            return fetch(e, l).then((t => {
                const {
                    status: e
                } = t;
                if (e >= 200 && e < 400) {
                    let e;
                    switch (a) {
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
        const i = {
            get: (t, n, i, s) => e(t, "GET", n, i, s),
            post: (t, n, i, s) => e(t, "POST", n, i, s),
            put: (t, n, i, s) => e(t, "PUT", n, i, s),
            delete: (t, n, i, s) => e(t, "DELETE", n, i, s),
            fetch: e,
            defaults: t
        };
        var s = n(214),
            a = n.n(s),
            r = n(269),
            o = n.n(r),
            h = n(743),
            l = n.n(h);

        function c(t) {
            let e = t.length;
            for (; --e >= 0;) t[e] = 0
        }
        const d = 256,
            _ = 286,
            f = 30,
            u = 15,
            m = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
            p = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
            g = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
            w = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            b = new Array(576);
        c(b);
        const v = new Array(60);
        c(v);
        const y = new Array(512);
        c(y);
        const k = new Array(256);
        c(k);
        const E = new Array(29);
        c(E);
        const C = new Array(f);

        function S(t, e, n, i, s) {
            this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = i, this.max_length = s, this.has_stree = t && t.length
        }
        let x, I, T;

        function A(t, e) {
            this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
        }
        c(C);
        const R = t => t < 256 ? y[t] : y[256 + (t >>> 7)],
            z = (t, e) => {
                t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
            },
            D = (t, e, n) => {
                t.bi_valid > 16 - n ? (t.bi_buf |= e << t.bi_valid & 65535, z(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += n - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n)
            },
            O = (t, e, n) => {
                D(t, n[2 * e], n[2 * e + 1])
            },
            N = (t, e) => {
                let n = 0;
                do {
                    n |= 1 & t, t >>>= 1, n <<= 1
                } while (--e > 0);
                return n >>> 1
            },
            U = (t, e, n) => {
                const i = new Array(16);
                let s, a, r = 0;
                for (s = 1; s <= u; s++) i[s] = r = r + n[s - 1] << 1;
                for (a = 0; a <= e; a++) {
                    let e = t[2 * a + 1];
                    0 !== e && (t[2 * a] = N(i[e]++, e))
                }
            },
            B = t => {
                let e;
                for (e = 0; e < _; e++) t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < f; e++) t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
                t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
            },
            M = t => {
                t.bi_valid > 8 ? z(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
            },
            F = (t, e, n, i) => {
                const s = 2 * e,
                    a = 2 * n;
                return t[s] < t[a] || t[s] === t[a] && i[e] <= i[n]
            },
            L = (t, e, n) => {
                const i = t.heap[n];
                let s = n << 1;
                for (; s <= t.heap_len && (s < t.heap_len && F(e, t.heap[s + 1], t.heap[s], t.depth) && s++, !F(e, i, t.heap[s], t.depth));) t.heap[n] = t.heap[s], n = s, s <<= 1;
                t.heap[n] = i
            },
            P = (t, e, n) => {
                let i, s, a, r, o = 0;
                if (0 !== t.last_lit)
                    do {
                        i = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1], s = t.pending_buf[t.l_buf + o], o++, 0 === i ? O(t, s, e) : (a = k[s], O(t, a + d + 1, e), r = m[a], 0 !== r && (s -= E[a], D(t, s, r)), i--, a = R(i), O(t, a, n), r = p[a], 0 !== r && (i -= C[a], D(t, i, r)))
                    } while (o < t.last_lit);
                O(t, 256, e)
            },
            Z = (t, e) => {
                const n = e.dyn_tree,
                    i = e.stat_desc.static_tree,
                    s = e.stat_desc.has_stree,
                    a = e.stat_desc.elems;
                let r, o, h, l = -1;
                for (t.heap_len = 0, t.heap_max = 573, r = 0; r < a; r++) 0 !== n[2 * r] ? (t.heap[++t.heap_len] = l = r, t.depth[r] = 0) : n[2 * r + 1] = 0;
                for (; t.heap_len < 2;) h = t.heap[++t.heap_len] = l < 2 ? ++l : 0, n[2 * h] = 1, t.depth[h] = 0, t.opt_len--, s && (t.static_len -= i[2 * h + 1]);
                for (e.max_code = l, r = t.heap_len >> 1; r >= 1; r--) L(t, n, r);
                h = a;
                do {
                    r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], L(t, n, 1), o = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = o, n[2 * h] = n[2 * r] + n[2 * o], t.depth[h] = (t.depth[r] >= t.depth[o] ? t.depth[r] : t.depth[o]) + 1, n[2 * r + 1] = n[2 * o + 1] = h, t.heap[1] = h++, L(t, n, 1)
                } while (t.heap_len >= 2);
                t.heap[--t.heap_max] = t.heap[1], ((t, e) => {
                    const n = e.dyn_tree,
                        i = e.max_code,
                        s = e.stat_desc.static_tree,
                        a = e.stat_desc.has_stree,
                        r = e.stat_desc.extra_bits,
                        o = e.stat_desc.extra_base,
                        h = e.stat_desc.max_length;
                    let l, c, d, _, f, m, p = 0;
                    for (_ = 0; _ <= u; _++) t.bl_count[_] = 0;
                    for (n[2 * t.heap[t.heap_max] + 1] = 0, l = t.heap_max + 1; l < 573; l++) c = t.heap[l], _ = n[2 * n[2 * c + 1] + 1] + 1, _ > h && (_ = h, p++), n[2 * c + 1] = _, c > i || (t.bl_count[_]++, f = 0, c >= o && (f = r[c - o]), m = n[2 * c], t.opt_len += m * (_ + f), a && (t.static_len += m * (s[2 * c + 1] + f)));
                    if (0 !== p) {
                        do {
                            for (_ = h - 1; 0 === t.bl_count[_];) _--;
                            t.bl_count[_]--, t.bl_count[_ + 1] += 2, t.bl_count[h]--, p -= 2
                        } while (p > 0);
                        for (_ = h; 0 !== _; _--)
                            for (c = t.bl_count[_]; 0 !== c;) d = t.heap[--l], d > i || (n[2 * d + 1] !== _ && (t.opt_len += (_ - n[2 * d + 1]) * n[2 * d], n[2 * d + 1] = _), c--)
                    }
                })(t, e), U(n, l, t.bl_count)
            },
            H = (t, e, n) => {
                let i, s, a = -1,
                    r = e[1],
                    o = 0,
                    h = 7,
                    l = 4;
                for (0 === r && (h = 138, l = 3), e[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) s = r, r = e[2 * (i + 1) + 1], ++o < h && s === r || (o < l ? t.bl_tree[2 * s] += o : 0 !== s ? (s !== a && t.bl_tree[2 * s]++, t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, o = 0, a = s, 0 === r ? (h = 138, l = 3) : s === r ? (h = 6, l = 3) : (h = 7, l = 4))
            },
            W = (t, e, n) => {
                let i, s, a = -1,
                    r = e[1],
                    o = 0,
                    h = 7,
                    l = 4;
                for (0 === r && (h = 138, l = 3), i = 0; i <= n; i++)
                    if (s = r, r = e[2 * (i + 1) + 1], !(++o < h && s === r)) {
                        if (o < l)
                            do {
                                O(t, s, t.bl_tree)
                            } while (0 != --o);
                        else 0 !== s ? (s !== a && (O(t, s, t.bl_tree), o--), O(t, 16, t.bl_tree), D(t, o - 3, 2)) : o <= 10 ? (O(t, 17, t.bl_tree), D(t, o - 3, 3)) : (O(t, 18, t.bl_tree), D(t, o - 11, 7));
                        o = 0, a = s, 0 === r ? (h = 138, l = 3) : s === r ? (h = 6, l = 3) : (h = 7, l = 4)
                    }
            };
        let j = !1;
        const G = (t, e, n, i) => {
            D(t, 0 + (i ? 1 : 0), 3), ((t, e, n, i) => {
                M(t), i && (z(t, n), z(t, ~n)), t.pending_buf.set(t.window.subarray(e, e + n), t.pending), t.pending += n
            })(t, e, n, !0)
        };
        var K = (t, e, n, i) => {
                let s, a, r = 0;
                t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = (t => {
                    let e, n = 4093624447;
                    for (e = 0; e <= 31; e++, n >>>= 1)
                        if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
                    if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
                    for (e = 32; e < d; e++)
                        if (0 !== t.dyn_ltree[2 * e]) return 1;
                    return 0
                })(t)), Z(t, t.l_desc), Z(t, t.d_desc), r = (t => {
                    let e;
                    for (H(t, t.dyn_ltree, t.l_desc.max_code), H(t, t.dyn_dtree, t.d_desc.max_code), Z(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * w[e] + 1]; e--);
                    return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                })(t), s = t.opt_len + 3 + 7 >>> 3, a = t.static_len + 3 + 7 >>> 3, a <= s && (s = a)) : s = a = n + 5, n + 4 <= s && -1 !== e ? G(t, e, n, i) : 4 === t.strategy || a === s ? (D(t, 2 + (i ? 1 : 0), 3), P(t, b, v)) : (D(t, 4 + (i ? 1 : 0), 3), ((t, e, n, i) => {
                    let s;
                    for (D(t, e - 257, 5), D(t, n - 1, 5), D(t, i - 4, 4), s = 0; s < i; s++) D(t, t.bl_tree[2 * w[s] + 1], 3);
                    W(t, t.dyn_ltree, e - 1), W(t, t.dyn_dtree, n - 1)
                })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, r + 1), P(t, t.dyn_ltree, t.dyn_dtree)), B(t), i && M(t)
            },
            V = {
                _tr_init: t => {
                    j || ((() => {
                        let t, e, n, i, s;
                        const a = new Array(16);
                        for (n = 0, i = 0; i < 28; i++)
                            for (E[i] = n, t = 0; t < 1 << m[i]; t++) k[n++] = i;
                        for (k[n - 1] = i, s = 0, i = 0; i < 16; i++)
                            for (C[i] = s, t = 0; t < 1 << p[i]; t++) y[s++] = i;
                        for (s >>= 7; i < f; i++)
                            for (C[i] = s << 7, t = 0; t < 1 << p[i] - 7; t++) y[256 + s++] = i;
                        for (e = 0; e <= u; e++) a[e] = 0;
                        for (t = 0; t <= 143;) b[2 * t + 1] = 8, t++, a[8]++;
                        for (; t <= 255;) b[2 * t + 1] = 9, t++, a[9]++;
                        for (; t <= 279;) b[2 * t + 1] = 7, t++, a[7]++;
                        for (; t <= 287;) b[2 * t + 1] = 8, t++, a[8]++;
                        for (U(b, 287, a), t = 0; t < f; t++) v[2 * t + 1] = 5, v[2 * t] = N(t, 5);
                        x = new S(b, m, 257, _, u), I = new S(v, p, 0, f, u), T = new S(new Array(0), g, 0, 19, 7)
                    })(), j = !0), t.l_desc = new A(t.dyn_ltree, x), t.d_desc = new A(t.dyn_dtree, I), t.bl_desc = new A(t.bl_tree, T), t.bi_buf = 0, t.bi_valid = 0, B(t)
                },
                _tr_stored_block: G,
                _tr_flush_block: K,
                _tr_tally: (t, e, n) => (t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (k[n] + d + 1)]++, t.dyn_dtree[2 * R(e)]++), t.last_lit === t.lit_bufsize - 1),
                _tr_align: t => {
                    D(t, 2, 3), O(t, 256, b), (t => {
                        16 === t.bi_valid ? (z(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
                    })(t)
                }
            };
        var J = (t, e, n, i) => {
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
        const X = new Uint32Array((() => {
            let t, e = [];
            for (var n = 0; n < 256; n++) {
                t = n;
                for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                e[n] = t
            }
            return e
        })());
        var Y = (t, e, n, i) => {
                const s = X,
                    a = i + n;
                t ^= -1;
                for (let n = i; n < a; n++) t = t >>> 8 ^ s[255 & (t ^ e[n])];
                return -1 ^ t
            },
            $ = {
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
            Q = {
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
            _tr_init: q,
            _tr_stored_block: tt,
            _tr_flush_block: et,
            _tr_tally: nt,
            _tr_align: it
        } = V, {
            Z_NO_FLUSH: st,
            Z_PARTIAL_FLUSH: at,
            Z_FULL_FLUSH: rt,
            Z_FINISH: ot,
            Z_BLOCK: ht,
            Z_OK: lt,
            Z_STREAM_END: ct,
            Z_STREAM_ERROR: dt,
            Z_DATA_ERROR: _t,
            Z_BUF_ERROR: ft,
            Z_DEFAULT_COMPRESSION: ut,
            Z_FILTERED: mt,
            Z_HUFFMAN_ONLY: pt,
            Z_RLE: gt,
            Z_FIXED: wt,
            Z_DEFAULT_STRATEGY: bt,
            Z_UNKNOWN: vt,
            Z_DEFLATED: yt
        } = Q, kt = 258, Et = 262, Ct = 103, St = 113, xt = 666, It = (t, e) => (t.msg = $[e], e), Tt = t => (t << 1) - (t > 4 ? 9 : 0), At = t => {
            let e = t.length;
            for (; --e >= 0;) t[e] = 0
        };
        let Rt = (t, e, n) => (e << t.hash_shift ^ n) & t.hash_mask;
        const zt = t => {
                const e = t.state;
                let n = e.pending;
                n > t.avail_out && (n = t.avail_out), 0 !== n && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + n), t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0))
            },
            Dt = (t, e) => {
                et(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, zt(t.strm)
            },
            Ot = (t, e) => {
                t.pending_buf[t.pending++] = e
            },
            Nt = (t, e) => {
                t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
            },
            Ut = (t, e, n, i) => {
                let s = t.avail_in;
                return s > i && (s = i), 0 === s ? 0 : (t.avail_in -= s, e.set(t.input.subarray(t.next_in, t.next_in + s), n), 1 === t.state.wrap ? t.adler = J(t.adler, e, s, n) : 2 === t.state.wrap && (t.adler = Y(t.adler, e, s, n)), t.next_in += s, t.total_in += s, s)
            },
            Bt = (t, e) => {
                let n, i, s = t.max_chain_length,
                    a = t.strstart,
                    r = t.prev_length,
                    o = t.nice_match;
                const h = t.strstart > t.w_size - Et ? t.strstart - (t.w_size - Et) : 0,
                    l = t.window,
                    c = t.w_mask,
                    d = t.prev,
                    _ = t.strstart + kt;
                let f = l[a + r - 1],
                    u = l[a + r];
                t.prev_length >= t.good_match && (s >>= 2), o > t.lookahead && (o = t.lookahead);
                do {
                    if (n = e, l[n + r] === u && l[n + r - 1] === f && l[n] === l[a] && l[++n] === l[a + 1]) {
                        a += 2, n++;
                        do {} while (l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && a < _);
                        if (i = kt - (_ - a), a = _ - kt, i > r) {
                            if (t.match_start = e, r = i, i >= o) break;
                            f = l[a + r - 1], u = l[a + r]
                        }
                    }
                } while ((e = d[e & c]) > h && 0 != --s);
                return r <= t.lookahead ? r : t.lookahead
            },
            Mt = t => {
                const e = t.w_size;
                let n, i, s, a, r;
                do {
                    if (a = t.window_size - t.lookahead - t.strstart, t.strstart >= e + (e - Et)) {
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
                    if (i = Ut(t.strm, t.window, t.strstart + t.lookahead, a), t.lookahead += i, t.lookahead + t.insert >= 3)
                        for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = Rt(t, t.ins_h, t.window[r + 1]); t.insert && (t.ins_h = Rt(t, t.ins_h, t.window[r + 3 - 1]), t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < 3)););
                } while (t.lookahead < Et && 0 !== t.strm.avail_in)
            },
            Ft = (t, e) => {
                let n, i;
                for (;;) {
                    if (t.lookahead < Et) {
                        if (Mt(t), t.lookahead < Et && e === st) return 1;
                        if (0 === t.lookahead) break
                    }
                    if (n = 0, t.lookahead >= 3 && (t.ins_h = Rt(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - Et && (t.match_length = Bt(t, n)), t.match_length >= 3)
                        if (i = nt(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                            t.match_length--;
                            do {
                                t.strstart++, t.ins_h = Rt(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                            } while (0 != --t.match_length);
                            t.strstart++
                        } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = Rt(t, t.ins_h, t.window[t.strstart + 1]);
                    else i = nt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                    if (i && (Dt(t, !1), 0 === t.strm.avail_out)) return 1
                }
                return t.insert = t.strstart < 2 ? t.strstart : 2, e === ot ? (Dt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Dt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
            },
            Lt = (t, e) => {
                let n, i, s;
                for (;;) {
                    if (t.lookahead < Et) {
                        if (Mt(t), t.lookahead < Et && e === st) return 1;
                        if (0 === t.lookahead) break
                    }
                    if (n = 0, t.lookahead >= 3 && (t.ins_h = Rt(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - Et && (t.match_length = Bt(t, n), t.match_length <= 5 && (t.strategy === mt || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
                        s = t.strstart + t.lookahead - 3, i = nt(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                        do {
                            ++t.strstart <= s && (t.ins_h = Rt(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                        } while (0 != --t.prev_length);
                        if (t.match_available = 0, t.match_length = 2, t.strstart++, i && (Dt(t, !1), 0 === t.strm.avail_out)) return 1
                    } else if (t.match_available) {
                        if (i = nt(t, 0, t.window[t.strstart - 1]), i && Dt(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1
                    } else t.match_available = 1, t.strstart++, t.lookahead--
                }
                return t.match_available && (i = nt(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, e === ot ? (Dt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Dt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
            };

        function Pt(t, e, n, i, s) {
            this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = i, this.func = s
        }
        const Zt = [new Pt(0, 0, 0, 0, ((t, e) => {
            let n = 65535;
            for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
                if (t.lookahead <= 1) {
                    if (Mt(t), 0 === t.lookahead && e === st) return 1;
                    if (0 === t.lookahead) break
                }
                t.strstart += t.lookahead, t.lookahead = 0;
                const i = t.block_start + n;
                if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, Dt(t, !1), 0 === t.strm.avail_out)) return 1;
                if (t.strstart - t.block_start >= t.w_size - Et && (Dt(t, !1), 0 === t.strm.avail_out)) return 1
            }
            return t.insert = 0, e === ot ? (Dt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && (Dt(t, !1), t.strm.avail_out), 1)
        })), new Pt(4, 4, 8, 4, Ft), new Pt(4, 5, 16, 8, Ft), new Pt(4, 6, 32, 32, Ft), new Pt(4, 4, 16, 16, Lt), new Pt(8, 16, 32, 32, Lt), new Pt(8, 16, 128, 128, Lt), new Pt(8, 32, 128, 256, Lt), new Pt(32, 128, 258, 1024, Lt), new Pt(32, 258, 258, 4096, Lt)];

        function Ht() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = yt, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), At(this.dyn_ltree), At(this.dyn_dtree), At(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), At(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), At(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
        }
        const Wt = t => {
                if (!t || !t.state) return It(t, dt);
                t.total_in = t.total_out = 0, t.data_type = vt;
                const e = t.state;
                return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? 42 : St, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = st, q(e), lt
            },
            jt = t => {
                const e = Wt(t);
                var n;
                return e === lt && ((n = t.state).window_size = 2 * n.w_size, At(n.head), n.max_lazy_match = Zt[n.level].max_lazy, n.good_match = Zt[n.level].good_length, n.nice_match = Zt[n.level].nice_length, n.max_chain_length = Zt[n.level].max_chain, n.strstart = 0, n.block_start = 0, n.lookahead = 0, n.insert = 0, n.match_length = n.prev_length = 2, n.match_available = 0, n.ins_h = 0), e
            },
            Gt = (t, e, n, i, s, a) => {
                if (!t) return dt;
                let r = 1;
                if (e === ut && (e = 6), i < 0 ? (r = 0, i = -i) : i > 15 && (r = 2, i -= 16), s < 1 || s > 9 || n !== yt || i < 8 || i > 15 || e < 0 || e > 9 || a < 0 || a > wt) return It(t, dt);
                8 === i && (i = 9);
                const o = new Ht;
                return t.state = o, o.strm = t, o.wrap = r, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = s + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << s + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = e, o.strategy = a, o.method = n, jt(t)
            };
        var Kt = {
            deflateInit: (t, e) => Gt(t, e, yt, 15, 8, bt),
            deflateInit2: Gt,
            deflateReset: jt,
            deflateResetKeep: Wt,
            deflateSetHeader: (t, e) => t && t.state ? 2 !== t.state.wrap ? dt : (t.state.gzhead = e, lt) : dt,
            deflate: (t, e) => {
                let n, i;
                if (!t || !t.state || e > ht || e < 0) return t ? It(t, dt) : dt;
                const s = t.state;
                if (!t.output || !t.input && 0 !== t.avail_in || s.status === xt && e !== ot) return It(t, 0 === t.avail_out ? ft : dt);
                s.strm = t;
                const a = s.last_flush;
                if (s.last_flush = e, 42 === s.status)
                    if (2 === s.wrap) t.adler = 0, Ot(s, 31), Ot(s, 139), Ot(s, 8), s.gzhead ? (Ot(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), Ot(s, 255 & s.gzhead.time), Ot(s, s.gzhead.time >> 8 & 255), Ot(s, s.gzhead.time >> 16 & 255), Ot(s, s.gzhead.time >> 24 & 255), Ot(s, 9 === s.level ? 2 : s.strategy >= pt || s.level < 2 ? 4 : 0), Ot(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (Ot(s, 255 & s.gzhead.extra.length), Ot(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (t.adler = Y(t.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = 69) : (Ot(s, 0), Ot(s, 0), Ot(s, 0), Ot(s, 0), Ot(s, 0), Ot(s, 9 === s.level ? 2 : s.strategy >= pt || s.level < 2 ? 4 : 0), Ot(s, 3), s.status = St);
                    else {
                        let e = yt + (s.w_bits - 8 << 4) << 8,
                            n = -1;
                        n = s.strategy >= pt || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3, e |= n << 6, 0 !== s.strstart && (e |= 32), e += 31 - e % 31, s.status = St, Nt(s, e), 0 !== s.strstart && (Nt(s, t.adler >>> 16), Nt(s, 65535 & t.adler)), t.adler = 1
                    } if (69 === s.status)
                    if (s.gzhead.extra) {
                        for (n = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > n && (t.adler = Y(t.adler, s.pending_buf, s.pending - n, n)), zt(t), n = s.pending, s.pending !== s.pending_buf_size));) Ot(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
                        s.gzhead.hcrc && s.pending > n && (t.adler = Y(t.adler, s.pending_buf, s.pending - n, n)), s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = 73)
                    } else s.status = 73;
                if (73 === s.status)
                    if (s.gzhead.name) {
                        n = s.pending;
                        do {
                            if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > n && (t.adler = Y(t.adler, s.pending_buf, s.pending - n, n)), zt(t), n = s.pending, s.pending === s.pending_buf_size)) {
                                i = 1;
                                break
                            }
                            i = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, Ot(s, i)
                        } while (0 !== i);
                        s.gzhead.hcrc && s.pending > n && (t.adler = Y(t.adler, s.pending_buf, s.pending - n, n)), 0 === i && (s.gzindex = 0, s.status = 91)
                    } else s.status = 91;
                if (91 === s.status)
                    if (s.gzhead.comment) {
                        n = s.pending;
                        do {
                            if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > n && (t.adler = Y(t.adler, s.pending_buf, s.pending - n, n)), zt(t), n = s.pending, s.pending === s.pending_buf_size)) {
                                i = 1;
                                break
                            }
                            i = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, Ot(s, i)
                        } while (0 !== i);
                        s.gzhead.hcrc && s.pending > n && (t.adler = Y(t.adler, s.pending_buf, s.pending - n, n)), 0 === i && (s.status = Ct)
                    } else s.status = Ct;
                if (s.status === Ct && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && zt(t), s.pending + 2 <= s.pending_buf_size && (Ot(s, 255 & t.adler), Ot(s, t.adler >> 8 & 255), t.adler = 0, s.status = St)) : s.status = St), 0 !== s.pending) {
                    if (zt(t), 0 === t.avail_out) return s.last_flush = -1, lt
                } else if (0 === t.avail_in && Tt(e) <= Tt(a) && e !== ot) return It(t, ft);
                if (s.status === xt && 0 !== t.avail_in) return It(t, ft);
                if (0 !== t.avail_in || 0 !== s.lookahead || e !== st && s.status !== xt) {
                    let n = s.strategy === pt ? ((t, e) => {
                        let n;
                        for (;;) {
                            if (0 === t.lookahead && (Mt(t), 0 === t.lookahead)) {
                                if (e === st) return 1;
                                break
                            }
                            if (t.match_length = 0, n = nt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (Dt(t, !1), 0 === t.strm.avail_out)) return 1
                        }
                        return t.insert = 0, e === ot ? (Dt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Dt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                    })(s, e) : s.strategy === gt ? ((t, e) => {
                        let n, i, s, a;
                        const r = t.window;
                        for (;;) {
                            if (t.lookahead <= kt) {
                                if (Mt(t), t.lookahead <= kt && e === st) return 1;
                                if (0 === t.lookahead) break
                            }
                            if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (s = t.strstart - 1, i = r[s], i === r[++s] && i === r[++s] && i === r[++s])) {
                                a = t.strstart + kt;
                                do {} while (i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && s < a);
                                t.match_length = kt - (a - s), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                            }
                            if (t.match_length >= 3 ? (n = nt(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = nt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (Dt(t, !1), 0 === t.strm.avail_out)) return 1
                        }
                        return t.insert = 0, e === ot ? (Dt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Dt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                    })(s, e) : Zt[s.level].func(s, e);
                    if (3 !== n && 4 !== n || (s.status = xt), 1 === n || 3 === n) return 0 === t.avail_out && (s.last_flush = -1), lt;
                    if (2 === n && (e === at ? it(s) : e !== ht && (tt(s, 0, 0, !1), e === rt && (At(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), zt(t), 0 === t.avail_out)) return s.last_flush = -1, lt
                }
                return e !== ot ? lt : s.wrap <= 0 ? ct : (2 === s.wrap ? (Ot(s, 255 & t.adler), Ot(s, t.adler >> 8 & 255), Ot(s, t.adler >> 16 & 255), Ot(s, t.adler >> 24 & 255), Ot(s, 255 & t.total_in), Ot(s, t.total_in >> 8 & 255), Ot(s, t.total_in >> 16 & 255), Ot(s, t.total_in >> 24 & 255)) : (Nt(s, t.adler >>> 16), Nt(s, 65535 & t.adler)), zt(t), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? lt : ct)
            },
            deflateEnd: t => {
                if (!t || !t.state) return dt;
                const e = t.state.status;
                return 42 !== e && 69 !== e && 73 !== e && 91 !== e && e !== Ct && e !== St && e !== xt ? It(t, dt) : (t.state = null, e === St ? It(t, _t) : lt)
            },
            deflateSetDictionary: (t, e) => {
                let n = e.length;
                if (!t || !t.state) return dt;
                const i = t.state,
                    s = i.wrap;
                if (2 === s || 1 === s && 42 !== i.status || i.lookahead) return dt;
                if (1 === s && (t.adler = J(t.adler, e, n, 0)), i.wrap = 0, n >= i.w_size) {
                    0 === s && (At(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
                    let t = new Uint8Array(i.w_size);
                    t.set(e.subarray(n - i.w_size, n), 0), e = t, n = i.w_size
                }
                const a = t.avail_in,
                    r = t.next_in,
                    o = t.input;
                for (t.avail_in = n, t.next_in = 0, t.input = e, Mt(i); i.lookahead >= 3;) {
                    let t = i.strstart,
                        e = i.lookahead - 2;
                    do {
                        i.ins_h = Rt(i, i.ins_h, i.window[t + 3 - 1]), i.prev[t & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = t, t++
                    } while (--e);
                    i.strstart = t, i.lookahead = 2, Mt(i)
                }
                return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = 2, i.match_available = 0, t.next_in = r, t.input = o, t.avail_in = a, i.wrap = s, lt
            },
            deflateInfo: "pako deflate (from Nodeca project)"
        };
        const Vt = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
        var Jt = function(t) {
                const e = Array.prototype.slice.call(arguments, 1);
                for (; e.length;) {
                    const n = e.shift();
                    if (n) {
                        if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                        for (const e in n) Vt(n, e) && (t[e] = n[e])
                    }
                }
                return t
            },
            Xt = t => {
                let e = 0;
                for (let n = 0, i = t.length; n < i; n++) e += t[n].length;
                const n = new Uint8Array(e);
                for (let e = 0, i = 0, s = t.length; e < s; e++) {
                    let s = t[e];
                    n.set(s, i), i += s.length
                }
                return n
            };
        let Yt = !0;
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (t) {
            Yt = !1
        }
        const $t = new Uint8Array(256);
        for (let t = 0; t < 256; t++) $t[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
        $t[254] = $t[254] = 1;
        var Qt = t => {
                if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(t);
                let e, n, i, s, a, r = t.length,
                    o = 0;
                for (s = 0; s < r; s++) n = t.charCodeAt(s), 55296 == (64512 & n) && s + 1 < r && (i = t.charCodeAt(s + 1), 56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), s++)), o += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
                for (e = new Uint8Array(o), a = 0, s = 0; a < o; s++) n = t.charCodeAt(s), 55296 == (64512 & n) && s + 1 < r && (i = t.charCodeAt(s + 1), 56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), s++)), n < 128 ? e[a++] = n : n < 2048 ? (e[a++] = 192 | n >>> 6, e[a++] = 128 | 63 & n) : n < 65536 ? (e[a++] = 224 | n >>> 12, e[a++] = 128 | n >>> 6 & 63, e[a++] = 128 | 63 & n) : (e[a++] = 240 | n >>> 18, e[a++] = 128 | n >>> 12 & 63, e[a++] = 128 | n >>> 6 & 63, e[a++] = 128 | 63 & n);
                return e
            },
            qt = (t, e) => {
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
                    let r = $t[e];
                    if (r > 4) a[s++] = 65533, i += r - 1;
                    else {
                        for (e &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && i < n;) e = e << 6 | 63 & t[i++], r--;
                        r > 1 ? a[s++] = 65533 : e < 65536 ? a[s++] = e : (e -= 65536, a[s++] = 55296 | e >> 10 & 1023, a[s++] = 56320 | 1023 & e)
                    }
                }
                return ((t, e) => {
                    if (e < 65534 && t.subarray && Yt) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                    let n = "";
                    for (let i = 0; i < e; i++) n += String.fromCharCode(t[i]);
                    return n
                })(a, s)
            },
            te = (t, e) => {
                (e = e || t.length) > t.length && (e = t.length);
                let n = e - 1;
                for (; n >= 0 && 128 == (192 & t[n]);) n--;
                return n < 0 || 0 === n ? e : n + $t[t[n]] > e ? n : e
            };
        var ee = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        };
        const ne = Object.prototype.toString,
            {
                Z_NO_FLUSH: ie,
                Z_SYNC_FLUSH: se,
                Z_FULL_FLUSH: ae,
                Z_FINISH: re,
                Z_OK: oe,
                Z_STREAM_END: he,
                Z_DEFAULT_COMPRESSION: le,
                Z_DEFAULT_STRATEGY: ce,
                Z_DEFLATED: de
            } = Q;

        function _e(t) {
            this.options = Jt({
                level: le,
                method: de,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: ce
            }, t || {});
            let e = this.options;
            e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ee, this.strm.avail_out = 0;
            let n = Kt.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
            if (n !== oe) throw new Error($[n]);
            if (e.header && Kt.deflateSetHeader(this.strm, e.header), e.dictionary) {
                let t;
                if (t = "string" == typeof e.dictionary ? Qt(e.dictionary) : "[object ArrayBuffer]" === ne.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, n = Kt.deflateSetDictionary(this.strm, t), n !== oe) throw new Error($[n]);
                this._dict_set = !0
            }
        }

        function fe(t, e) {
            const n = new _e(e);
            if (n.push(t, !0), n.err) throw n.msg || $[n.err];
            return n.result
        }
        _e.prototype.push = function(t, e) {
            const n = this.strm,
                i = this.options.chunkSize;
            let s, a;
            if (this.ended) return !1;
            for (a = e === ~~e ? e : !0 === e ? re : ie, "string" == typeof t ? n.input = Qt(t) : "[object ArrayBuffer]" === ne.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;;)
                if (0 === n.avail_out && (n.output = new Uint8Array(i), n.next_out = 0, n.avail_out = i), (a === se || a === ae) && n.avail_out <= 6) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                else {
                    if (s = Kt.deflate(n, a), s === he) return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)), s = Kt.deflateEnd(this.strm), this.onEnd(s), this.ended = !0, s === oe;
                    if (0 !== n.avail_out) {
                        if (a > 0 && n.next_out > 0) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                        else if (0 === n.avail_in) break
                    } else this.onData(n.output)
                } return !0
        }, _e.prototype.onData = function(t) {
            this.chunks.push(t)
        }, _e.prototype.onEnd = function(t) {
            t === oe && (this.result = Xt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
        };
        var ue = {
            Deflate: _e,
            deflate: fe,
            deflateRaw: function(t, e) {
                return (e = e || {}).raw = !0, fe(t, e)
            },
            gzip: function(t, e) {
                return (e = e || {}).gzip = !0, fe(t, e)
            },
            constants: Q
        };
        var me = function(t, e) {
            let n, i, s, a, r, o, h, l, c, d, _, f, u, m, p, g, w, b, v, y, k, E, C, S;
            const x = t.state;
            n = t.next_in, C = t.input, i = n + (t.avail_in - 5), s = t.next_out, S = t.output, a = s - (e - t.avail_out), r = s + (t.avail_out - 257), o = x.dmax, h = x.wsize, l = x.whave, c = x.wnext, d = x.window, _ = x.hold, f = x.bits, u = x.lencode, m = x.distcode, p = (1 << x.lenbits) - 1, g = (1 << x.distbits) - 1;
            t: do {
                f < 15 && (_ += C[n++] << f, f += 8, _ += C[n++] << f, f += 8), w = u[_ & p];
                e: for (;;) {
                    if (b = w >>> 24, _ >>>= b, f -= b, b = w >>> 16 & 255, 0 === b) S[s++] = 65535 & w;
                    else {
                        if (!(16 & b)) {
                            if (0 == (64 & b)) {
                                w = u[(65535 & w) + (_ & (1 << b) - 1)];
                                continue e
                            }
                            if (32 & b) {
                                x.mode = 12;
                                break t
                            }
                            t.msg = "invalid literal/length code", x.mode = 30;
                            break t
                        }
                        v = 65535 & w, b &= 15, b && (f < b && (_ += C[n++] << f, f += 8), v += _ & (1 << b) - 1, _ >>>= b, f -= b), f < 15 && (_ += C[n++] << f, f += 8, _ += C[n++] << f, f += 8), w = m[_ & g];
                        n: for (;;) {
                            if (b = w >>> 24, _ >>>= b, f -= b, b = w >>> 16 & 255, !(16 & b)) {
                                if (0 == (64 & b)) {
                                    w = m[(65535 & w) + (_ & (1 << b) - 1)];
                                    continue n
                                }
                                t.msg = "invalid distance code", x.mode = 30;
                                break t
                            }
                            if (y = 65535 & w, b &= 15, f < b && (_ += C[n++] << f, f += 8, f < b && (_ += C[n++] << f, f += 8)), y += _ & (1 << b) - 1, y > o) {
                                t.msg = "invalid distance too far back", x.mode = 30;
                                break t
                            }
                            if (_ >>>= b, f -= b, b = s - a, y > b) {
                                if (b = y - b, b > l && x.sane) {
                                    t.msg = "invalid distance too far back", x.mode = 30;
                                    break t
                                }
                                if (k = 0, E = d, 0 === c) {
                                    if (k += h - b, b < v) {
                                        v -= b;
                                        do {
                                            S[s++] = d[k++]
                                        } while (--b);
                                        k = s - y, E = S
                                    }
                                } else if (c < b) {
                                    if (k += h + c - b, b -= c, b < v) {
                                        v -= b;
                                        do {
                                            S[s++] = d[k++]
                                        } while (--b);
                                        if (k = 0, c < v) {
                                            b = c, v -= b;
                                            do {
                                                S[s++] = d[k++]
                                            } while (--b);
                                            k = s - y, E = S
                                        }
                                    }
                                } else if (k += c - b, b < v) {
                                    v -= b;
                                    do {
                                        S[s++] = d[k++]
                                    } while (--b);
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
            v = f >> 3, n -= v, f -= v << 3, _ &= (1 << f) - 1, t.next_in = n, t.next_out = s, t.avail_in = n < i ? i - n + 5 : 5 - (n - i), t.avail_out = s < r ? r - s + 257 : 257 - (s - r), x.hold = _, x.bits = f
        };
        const pe = 15,
            ge = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
            we = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
            be = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
            ve = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
        var ye = (t, e, n, i, s, a, r, o) => {
            const h = o.bits;
            let l, c, d, _, f, u, m = 0,
                p = 0,
                g = 0,
                w = 0,
                b = 0,
                v = 0,
                y = 0,
                k = 0,
                E = 0,
                C = 0,
                S = null,
                x = 0;
            const I = new Uint16Array(16),
                T = new Uint16Array(16);
            let A, R, z, D = null,
                O = 0;
            for (m = 0; m <= pe; m++) I[m] = 0;
            for (p = 0; p < i; p++) I[e[n + p]]++;
            for (b = h, w = pe; w >= 1 && 0 === I[w]; w--);
            if (b > w && (b = w), 0 === w) return s[a++] = 20971520, s[a++] = 20971520, o.bits = 1, 0;
            for (g = 1; g < w && 0 === I[g]; g++);
            for (b < g && (b = g), k = 1, m = 1; m <= pe; m++)
                if (k <<= 1, k -= I[m], k < 0) return -1;
            if (k > 0 && (0 === t || 1 !== w)) return -1;
            for (T[1] = 0, m = 1; m < pe; m++) T[m + 1] = T[m] + I[m];
            for (p = 0; p < i; p++) 0 !== e[n + p] && (r[T[e[n + p]]++] = p);
            if (0 === t ? (S = D = r, u = 19) : 1 === t ? (S = ge, x -= 257, D = we, O -= 257, u = 256) : (S = be, D = ve, u = -1), C = 0, p = 0, m = g, f = a, v = b, y = 0, d = -1, E = 1 << b, _ = E - 1, 1 === t && E > 852 || 2 === t && E > 592) return 1;
            for (;;) {
                A = m - y, r[p] < u ? (R = 0, z = r[p]) : r[p] > u ? (R = D[O + r[p]], z = S[x + r[p]]) : (R = 96, z = 0), l = 1 << m - y, c = 1 << v, g = c;
                do {
                    c -= l, s[f + (C >> y) + c] = A << 24 | R << 16 | z | 0
                } while (0 !== c);
                for (l = 1 << m - 1; C & l;) l >>= 1;
                if (0 !== l ? (C &= l - 1, C += l) : C = 0, p++, 0 == --I[m]) {
                    if (m === w) break;
                    m = e[n + r[p]]
                }
                if (m > b && (C & _) !== d) {
                    for (0 === y && (y = b), f += g, v = m - y, k = 1 << v; v + y < w && (k -= I[v + y], !(k <= 0));) v++, k <<= 1;
                    if (E += 1 << v, 1 === t && E > 852 || 2 === t && E > 592) return 1;
                    d = C & _, s[d] = b << 24 | v << 16 | f - a | 0
                }
            }
            return 0 !== C && (s[f + C] = m - y << 24 | 64 << 16 | 0), o.bits = b, 0
        };
        const {
            Z_FINISH: ke,
            Z_BLOCK: Ee,
            Z_TREES: Ce,
            Z_OK: Se,
            Z_STREAM_END: xe,
            Z_NEED_DICT: Ie,
            Z_STREAM_ERROR: Te,
            Z_DATA_ERROR: Ae,
            Z_MEM_ERROR: Re,
            Z_BUF_ERROR: ze,
            Z_DEFLATED: De
        } = Q, Oe = 12, Ne = 30, Ue = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);

        function Be() {
            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
        }
        const Me = t => {
                if (!t || !t.state) return Te;
                const e = t.state;
                return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = 1, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(852), e.distcode = e.distdyn = new Int32Array(592), e.sane = 1, e.back = -1, Se
            },
            Fe = t => {
                if (!t || !t.state) return Te;
                const e = t.state;
                return e.wsize = 0, e.whave = 0, e.wnext = 0, Me(t)
            },
            Le = (t, e) => {
                let n;
                if (!t || !t.state) return Te;
                const i = t.state;
                return e < 0 ? (n = 0, e = -e) : (n = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Te : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = n, i.wbits = e, Fe(t))
            },
            Pe = (t, e) => {
                if (!t) return Te;
                const n = new Be;
                t.state = n, n.window = null;
                const i = Le(t, e);
                return i !== Se && (t.state = null), i
            };
        let Ze, He, We = !0;
        const je = t => {
                if (We) {
                    Ze = new Int32Array(512), He = new Int32Array(32);
                    let e = 0;
                    for (; e < 144;) t.lens[e++] = 8;
                    for (; e < 256;) t.lens[e++] = 9;
                    for (; e < 280;) t.lens[e++] = 7;
                    for (; e < 288;) t.lens[e++] = 8;
                    for (ye(1, t.lens, 0, 288, Ze, 0, t.work, {
                            bits: 9
                        }), e = 0; e < 32;) t.lens[e++] = 5;
                    ye(2, t.lens, 0, 32, He, 0, t.work, {
                        bits: 5
                    }), We = !1
                }
                t.lencode = Ze, t.lenbits = 9, t.distcode = He, t.distbits = 5
            },
            Ge = (t, e, n, i) => {
                let s;
                const a = t.state;
                return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), i >= a.wsize ? (a.window.set(e.subarray(n - a.wsize, n), 0), a.wnext = 0, a.whave = a.wsize) : (s = a.wsize - a.wnext, s > i && (s = i), a.window.set(e.subarray(n - i, n - i + s), a.wnext), (i -= s) ? (a.window.set(e.subarray(n - i, n), 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))), 0
            };
        var Ke = {
            inflateReset: Fe,
            inflateReset2: Le,
            inflateResetKeep: Me,
            inflateInit: t => Pe(t, 15),
            inflateInit2: Pe,
            inflate: (t, e) => {
                let n, i, s, a, r, o, h, l, c, d, _, f, u, m, p, g, w, b, v, y, k, E, C = 0;
                const S = new Uint8Array(4);
                let x, I;
                const T = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return Te;
                n = t.state, n.mode === Oe && (n.mode = 13), r = t.next_out, s = t.output, h = t.avail_out, a = t.next_in, i = t.input, o = t.avail_in, l = n.hold, c = n.bits, d = o, _ = h, E = Se;
                t: for (;;) switch (n.mode) {
                    case 1:
                        if (0 === n.wrap) {
                            n.mode = 13;
                            break
                        }
                        for (; c < 16;) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        if (2 & n.wrap && 35615 === l) {
                            n.check = 0, S[0] = 255 & l, S[1] = l >>> 8 & 255, n.check = Y(n.check, S, 2, 0), l = 0, c = 0, n.mode = 2;
                            break
                        }
                        if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & l) << 8) + (l >> 8)) % 31) {
                            t.msg = "incorrect header check", n.mode = Ne;
                            break
                        }
                        if ((15 & l) !== De) {
                            t.msg = "unknown compression method", n.mode = Ne;
                            break
                        }
                        if (l >>>= 4, c -= 4, k = 8 + (15 & l), 0 === n.wbits) n.wbits = k;
                        else if (k > n.wbits) {
                            t.msg = "invalid window size", n.mode = Ne;
                            break
                        }
                        n.dmax = 1 << n.wbits, t.adler = n.check = 1, n.mode = 512 & l ? 10 : Oe, l = 0, c = 0;
                        break;
                    case 2:
                        for (; c < 16;) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        if (n.flags = l, (255 & n.flags) !== De) {
                            t.msg = "unknown compression method", n.mode = Ne;
                            break
                        }
                        if (57344 & n.flags) {
                            t.msg = "unknown header flags set", n.mode = Ne;
                            break
                        }
                        n.head && (n.head.text = l >> 8 & 1), 512 & n.flags && (S[0] = 255 & l, S[1] = l >>> 8 & 255, n.check = Y(n.check, S, 2, 0)), l = 0, c = 0, n.mode = 3;
                    case 3:
                        for (; c < 32;) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        n.head && (n.head.time = l), 512 & n.flags && (S[0] = 255 & l, S[1] = l >>> 8 & 255, S[2] = l >>> 16 & 255, S[3] = l >>> 24 & 255, n.check = Y(n.check, S, 4, 0)), l = 0, c = 0, n.mode = 4;
                    case 4:
                        for (; c < 16;) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        n.head && (n.head.xflags = 255 & l, n.head.os = l >> 8), 512 & n.flags && (S[0] = 255 & l, S[1] = l >>> 8 & 255, n.check = Y(n.check, S, 2, 0)), l = 0, c = 0, n.mode = 5;
                    case 5:
                        if (1024 & n.flags) {
                            for (; c < 16;) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            n.length = l, n.head && (n.head.extra_len = l), 512 & n.flags && (S[0] = 255 & l, S[1] = l >>> 8 & 255, n.check = Y(n.check, S, 2, 0)), l = 0, c = 0
                        } else n.head && (n.head.extra = null);
                        n.mode = 6;
                    case 6:
                        if (1024 & n.flags && (f = n.length, f > o && (f = o), f && (n.head && (k = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(i.subarray(a, a + f), k)), 512 & n.flags && (n.check = Y(n.check, i, f, a)), o -= f, a += f, n.length -= f), n.length)) break t;
                        n.length = 0, n.mode = 7;
                    case 7:
                        if (2048 & n.flags) {
                            if (0 === o) break t;
                            f = 0;
                            do {
                                k = i[a + f++], n.head && k && n.length < 65536 && (n.head.name += String.fromCharCode(k))
                            } while (k && f < o);
                            if (512 & n.flags && (n.check = Y(n.check, i, f, a)), o -= f, a += f, k) break t
                        } else n.head && (n.head.name = null);
                        n.length = 0, n.mode = 8;
                    case 8:
                        if (4096 & n.flags) {
                            if (0 === o) break t;
                            f = 0;
                            do {
                                k = i[a + f++], n.head && k && n.length < 65536 && (n.head.comment += String.fromCharCode(k))
                            } while (k && f < o);
                            if (512 & n.flags && (n.check = Y(n.check, i, f, a)), o -= f, a += f, k) break t
                        } else n.head && (n.head.comment = null);
                        n.mode = 9;
                    case 9:
                        if (512 & n.flags) {
                            for (; c < 16;) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            if (l !== (65535 & n.check)) {
                                t.msg = "header crc mismatch", n.mode = Ne;
                                break
                            }
                            l = 0, c = 0
                        }
                        n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = Oe;
                        break;
                    case 10:
                        for (; c < 32;) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        t.adler = n.check = Ue(l), l = 0, c = 0, n.mode = 11;
                    case 11:
                        if (0 === n.havedict) return t.next_out = r, t.avail_out = h, t.next_in = a, t.avail_in = o, n.hold = l, n.bits = c, Ie;
                        t.adler = n.check = 1, n.mode = Oe;
                    case Oe:
                        if (e === Ee || e === Ce) break t;
                    case 13:
                        if (n.last) {
                            l >>>= 7 & c, c -= 7 & c, n.mode = 27;
                            break
                        }
                        for (; c < 3;) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        switch (n.last = 1 & l, l >>>= 1, c -= 1, 3 & l) {
                            case 0:
                                n.mode = 14;
                                break;
                            case 1:
                                if (je(n), n.mode = 20, e === Ce) {
                                    l >>>= 2, c -= 2;
                                    break t
                                }
                                break;
                            case 2:
                                n.mode = 17;
                                break;
                            case 3:
                                t.msg = "invalid block type", n.mode = Ne
                        }
                        l >>>= 2, c -= 2;
                        break;
                    case 14:
                        for (l >>>= 7 & c, c -= 7 & c; c < 32;) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        if ((65535 & l) != (l >>> 16 ^ 65535)) {
                            t.msg = "invalid stored block lengths", n.mode = Ne;
                            break
                        }
                        if (n.length = 65535 & l, l = 0, c = 0, n.mode = 15, e === Ce) break t;
                    case 15:
                        n.mode = 16;
                    case 16:
                        if (f = n.length, f) {
                            if (f > o && (f = o), f > h && (f = h), 0 === f) break t;
                            s.set(i.subarray(a, a + f), r), o -= f, a += f, h -= f, r += f, n.length -= f;
                            break
                        }
                        n.mode = Oe;
                        break;
                    case 17:
                        for (; c < 14;) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        if (n.nlen = 257 + (31 & l), l >>>= 5, c -= 5, n.ndist = 1 + (31 & l), l >>>= 5, c -= 5, n.ncode = 4 + (15 & l), l >>>= 4, c -= 4, n.nlen > 286 || n.ndist > 30) {
                            t.msg = "too many length or distance symbols", n.mode = Ne;
                            break
                        }
                        n.have = 0, n.mode = 18;
                    case 18:
                        for (; n.have < n.ncode;) {
                            for (; c < 3;) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            n.lens[T[n.have++]] = 7 & l, l >>>= 3, c -= 3
                        }
                        for (; n.have < 19;) n.lens[T[n.have++]] = 0;
                        if (n.lencode = n.lendyn, n.lenbits = 7, x = {
                                bits: n.lenbits
                            }, E = ye(0, n.lens, 0, 19, n.lencode, 0, n.work, x), n.lenbits = x.bits, E) {
                            t.msg = "invalid code lengths set", n.mode = Ne;
                            break
                        }
                        n.have = 0, n.mode = 19;
                    case 19:
                        for (; n.have < n.nlen + n.ndist;) {
                            for (; C = n.lencode[l & (1 << n.lenbits) - 1], p = C >>> 24, g = C >>> 16 & 255, w = 65535 & C, !(p <= c);) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            if (w < 16) l >>>= p, c -= p, n.lens[n.have++] = w;
                            else {
                                if (16 === w) {
                                    for (I = p + 2; c < I;) {
                                        if (0 === o) break t;
                                        o--, l += i[a++] << c, c += 8
                                    }
                                    if (l >>>= p, c -= p, 0 === n.have) {
                                        t.msg = "invalid bit length repeat", n.mode = Ne;
                                        break
                                    }
                                    k = n.lens[n.have - 1], f = 3 + (3 & l), l >>>= 2, c -= 2
                                } else if (17 === w) {
                                    for (I = p + 3; c < I;) {
                                        if (0 === o) break t;
                                        o--, l += i[a++] << c, c += 8
                                    }
                                    l >>>= p, c -= p, k = 0, f = 3 + (7 & l), l >>>= 3, c -= 3
                                } else {
                                    for (I = p + 7; c < I;) {
                                        if (0 === o) break t;
                                        o--, l += i[a++] << c, c += 8
                                    }
                                    l >>>= p, c -= p, k = 0, f = 11 + (127 & l), l >>>= 7, c -= 7
                                }
                                if (n.have + f > n.nlen + n.ndist) {
                                    t.msg = "invalid bit length repeat", n.mode = Ne;
                                    break
                                }
                                for (; f--;) n.lens[n.have++] = k
                            }
                        }
                        if (n.mode === Ne) break;
                        if (0 === n.lens[256]) {
                            t.msg = "invalid code -- missing end-of-block", n.mode = Ne;
                            break
                        }
                        if (n.lenbits = 9, x = {
                                bits: n.lenbits
                            }, E = ye(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, x), n.lenbits = x.bits, E) {
                            t.msg = "invalid literal/lengths set", n.mode = Ne;
                            break
                        }
                        if (n.distbits = 6, n.distcode = n.distdyn, x = {
                                bits: n.distbits
                            }, E = ye(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, x), n.distbits = x.bits, E) {
                            t.msg = "invalid distances set", n.mode = Ne;
                            break
                        }
                        if (n.mode = 20, e === Ce) break t;
                    case 20:
                        n.mode = 21;
                    case 21:
                        if (o >= 6 && h >= 258) {
                            t.next_out = r, t.avail_out = h, t.next_in = a, t.avail_in = o, n.hold = l, n.bits = c, me(t, _), r = t.next_out, s = t.output, h = t.avail_out, a = t.next_in, i = t.input, o = t.avail_in, l = n.hold, c = n.bits, n.mode === Oe && (n.back = -1);
                            break
                        }
                        for (n.back = 0; C = n.lencode[l & (1 << n.lenbits) - 1], p = C >>> 24, g = C >>> 16 & 255, w = 65535 & C, !(p <= c);) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        if (g && 0 == (240 & g)) {
                            for (b = p, v = g, y = w; C = n.lencode[y + ((l & (1 << b + v) - 1) >> b)], p = C >>> 24, g = C >>> 16 & 255, w = 65535 & C, !(b + p <= c);) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            l >>>= b, c -= b, n.back += b
                        }
                        if (l >>>= p, c -= p, n.back += p, n.length = w, 0 === g) {
                            n.mode = 26;
                            break
                        }
                        if (32 & g) {
                            n.back = -1, n.mode = Oe;
                            break
                        }
                        if (64 & g) {
                            t.msg = "invalid literal/length code", n.mode = Ne;
                            break
                        }
                        n.extra = 15 & g, n.mode = 22;
                    case 22:
                        if (n.extra) {
                            for (I = n.extra; c < I;) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            n.length += l & (1 << n.extra) - 1, l >>>= n.extra, c -= n.extra, n.back += n.extra
                        }
                        n.was = n.length, n.mode = 23;
                    case 23:
                        for (; C = n.distcode[l & (1 << n.distbits) - 1], p = C >>> 24, g = C >>> 16 & 255, w = 65535 & C, !(p <= c);) {
                            if (0 === o) break t;
                            o--, l += i[a++] << c, c += 8
                        }
                        if (0 == (240 & g)) {
                            for (b = p, v = g, y = w; C = n.distcode[y + ((l & (1 << b + v) - 1) >> b)], p = C >>> 24, g = C >>> 16 & 255, w = 65535 & C, !(b + p <= c);) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            l >>>= b, c -= b, n.back += b
                        }
                        if (l >>>= p, c -= p, n.back += p, 64 & g) {
                            t.msg = "invalid distance code", n.mode = Ne;
                            break
                        }
                        n.offset = w, n.extra = 15 & g, n.mode = 24;
                    case 24:
                        if (n.extra) {
                            for (I = n.extra; c < I;) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            n.offset += l & (1 << n.extra) - 1, l >>>= n.extra, c -= n.extra, n.back += n.extra
                        }
                        if (n.offset > n.dmax) {
                            t.msg = "invalid distance too far back", n.mode = Ne;
                            break
                        }
                        n.mode = 25;
                    case 25:
                        if (0 === h) break t;
                        if (f = _ - h, n.offset > f) {
                            if (f = n.offset - f, f > n.whave && n.sane) {
                                t.msg = "invalid distance too far back", n.mode = Ne;
                                break
                            }
                            f > n.wnext ? (f -= n.wnext, u = n.wsize - f) : u = n.wnext - f, f > n.length && (f = n.length), m = n.window
                        } else m = s, u = r - n.offset, f = n.length;
                        f > h && (f = h), h -= f, n.length -= f;
                        do {
                            s[r++] = m[u++]
                        } while (--f);
                        0 === n.length && (n.mode = 21);
                        break;
                    case 26:
                        if (0 === h) break t;
                        s[r++] = n.length, h--, n.mode = 21;
                        break;
                    case 27:
                        if (n.wrap) {
                            for (; c < 32;) {
                                if (0 === o) break t;
                                o--, l |= i[a++] << c, c += 8
                            }
                            if (_ -= h, t.total_out += _, n.total += _, _ && (t.adler = n.check = n.flags ? Y(n.check, s, _, r - _) : J(n.check, s, _, r - _)), _ = h, (n.flags ? l : Ue(l)) !== n.check) {
                                t.msg = "incorrect data check", n.mode = Ne;
                                break
                            }
                            l = 0, c = 0
                        }
                        n.mode = 28;
                    case 28:
                        if (n.wrap && n.flags) {
                            for (; c < 32;) {
                                if (0 === o) break t;
                                o--, l += i[a++] << c, c += 8
                            }
                            if (l !== (4294967295 & n.total)) {
                                t.msg = "incorrect length check", n.mode = Ne;
                                break
                            }
                            l = 0, c = 0
                        }
                        n.mode = 29;
                    case 29:
                        E = xe;
                        break t;
                    case Ne:
                        E = Ae;
                        break t;
                    case 31:
                        return Re;
                    default:
                        return Te
                }
                return t.next_out = r, t.avail_out = h, t.next_in = a, t.avail_in = o, n.hold = l, n.bits = c, (n.wsize || _ !== t.avail_out && n.mode < Ne && (n.mode < 27 || e !== ke)) && Ge(t, t.output, t.next_out, _ - t.avail_out), d -= t.avail_in, _ -= t.avail_out, t.total_in += d, t.total_out += _, n.total += _, n.wrap && _ && (t.adler = n.check = n.flags ? Y(n.check, s, _, t.next_out - _) : J(n.check, s, _, t.next_out - _)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === Oe ? 128 : 0) + (20 === n.mode || 15 === n.mode ? 256 : 0), (0 === d && 0 === _ || e === ke) && E === Se && (E = ze), E
            },
            inflateEnd: t => {
                if (!t || !t.state) return Te;
                let e = t.state;
                return e.window && (e.window = null), t.state = null, Se
            },
            inflateGetHeader: (t, e) => {
                if (!t || !t.state) return Te;
                const n = t.state;
                return 0 == (2 & n.wrap) ? Te : (n.head = e, e.done = !1, Se)
            },
            inflateSetDictionary: (t, e) => {
                const n = e.length;
                let i, s, a;
                return t && t.state ? (i = t.state, 0 !== i.wrap && 11 !== i.mode ? Te : 11 === i.mode && (s = 1, s = J(s, e, n, 0), s !== i.check) ? Ae : (a = Ge(t, e, n, n), a ? (i.mode = 31, Re) : (i.havedict = 1, Se))) : Te
            },
            inflateInfo: "pako inflate (from Nodeca project)"
        };
        var Ve = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
        };
        const Je = Object.prototype.toString,
            {
                Z_NO_FLUSH: Xe,
                Z_FINISH: Ye,
                Z_OK: $e,
                Z_STREAM_END: Qe,
                Z_NEED_DICT: qe,
                Z_STREAM_ERROR: tn,
                Z_DATA_ERROR: en,
                Z_MEM_ERROR: nn
            } = Q;

        function sn(t) {
            this.options = Jt({
                chunkSize: 65536,
                windowBits: 15,
                to: ""
            }, t || {});
            const e = this.options;
            e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ee, this.strm.avail_out = 0;
            let n = Ke.inflateInit2(this.strm, e.windowBits);
            if (n !== $e) throw new Error($[n]);
            if (this.header = new Ve, Ke.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = Qt(e.dictionary) : "[object ArrayBuffer]" === Je.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (n = Ke.inflateSetDictionary(this.strm, e.dictionary), n !== $e))) throw new Error($[n])
        }

        function an(t, e) {
            const n = new sn(e);
            if (n.push(t), n.err) throw n.msg || $[n.err];
            return n.result
        }
        sn.prototype.push = function(t, e) {
            const n = this.strm,
                i = this.options.chunkSize,
                s = this.options.dictionary;
            let a, r, o;
            if (this.ended) return !1;
            for (r = e === ~~e ? e : !0 === e ? Ye : Xe, "[object ArrayBuffer]" === Je.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;;) {
                for (0 === n.avail_out && (n.output = new Uint8Array(i), n.next_out = 0, n.avail_out = i), a = Ke.inflate(n, r), a === qe && s && (a = Ke.inflateSetDictionary(n, s), a === $e ? a = Ke.inflate(n, r) : a === en && (a = qe)); n.avail_in > 0 && a === Qe && n.state.wrap > 0 && 0 !== t[n.next_in];) Ke.inflateReset(n), a = Ke.inflate(n, r);
                switch (a) {
                    case tn:
                    case en:
                    case qe:
                    case nn:
                        return this.onEnd(a), this.ended = !0, !1
                }
                if (o = n.avail_out, n.next_out && (0 === n.avail_out || a === Qe))
                    if ("string" === this.options.to) {
                        let t = te(n.output, n.next_out),
                            e = n.next_out - t,
                            s = qt(n.output, t);
                        n.next_out = e, n.avail_out = i - e, e && n.output.set(n.output.subarray(t, t + e), 0), this.onData(s)
                    } else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
                if (a !== $e || 0 !== o) {
                    if (a === Qe) return a = Ke.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
                    if (0 === n.avail_in) break
                }
            }
            return !0
        }, sn.prototype.onData = function(t) {
            this.chunks.push(t)
        }, sn.prototype.onEnd = function(t) {
            t === $e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Xt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
        };
        var rn = {
            Inflate: sn,
            inflate: an,
            inflateRaw: function(t, e) {
                return (e = e || {}).raw = !0, an(t, e)
            },
            ungzip: an,
            constants: Q
        };
        const {
            Deflate: on,
            deflate: hn,
            deflateRaw: ln,
            gzip: cn
        } = ue, {
            Inflate: dn,
            inflate: _n,
            inflateRaw: fn,
            ungzip: un
        } = rn;
        var mn = cn,
            pn = n(783),
            gn = n.n(pn),
            wn = n(452),
            bn = n.n(wn);

        function vn(t) {
            return function(t) {
                const e = t.length,
                    n = new Uint8Array(e);
                for (let i = 0, s = e; i < s; ++i) n[i] = t.charCodeAt(i);
                return n
            }(function(t, e = !1) {
                return e ? atob(t) : l().stringify(o().parse(t))
            }((t + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), !0))
        }

        function yn(t) {
            return kn((e = t, String.fromCharCode.apply(null, Array.from(new Uint8Array(e)))), !0);
            var e
        }

        function kn(t, e = !1) {
            return e ? btoa(t) : o().stringify(l().parse(t))
        }

        function En(t) {
            return l().parse("string" != typeof t ? JSON.stringify(t) : t)
        }

        function Cn(t) {
            return gn()(t).toString()
        }

        function Sn(t, e, n) {
            n = n || "";
            const i = function() {
                let t = "";
                for (let e = 0; e < 16; e++) t += Math.floor(16 * Math.random()).toString(16);
                return t
            }();
            var s, r;
            const h = function(t, e, n = "iop203040506aPk!") {
                    return bn().encrypt("string" == typeof t ? o().parse(t) : t, En(e), {
                        iv: En(n)
                    })
                }(yn(("string" != typeof(s = n) && (s = JSON.stringify(s)), mn(s, r))), i).ciphertext,
                l = Cn(t + function(t) {
                    return a()(t).toString()
                }(e) + Cn(h));
            return {
                authorization: kn(t + ":" + l + ":" + i),
                body: (c = h, vn(o().stringify(c))).buffer
            };
            var c
        }
        const xn = {
            baseUrl: "",
            uid: "",
            passwd: ""
        };

        function In(t, e, n) {
            if (xn.uid && xn.passwd) {
                const s = Sn(xn.uid, xn.passwd, n),
                    a = t.includes("http") ? t : xn.baseUrl + t;
                return i[e](a, s.body, {
                    headers: {
                        Authorization: "Basic " + s.authorization
                    }
                })
            }
            return Promise.reject("uid or passwd Empty")
        }
        const Tn = (t, e) => In(t, "post", e);
        const An = {
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
        var Rn;

        function zn(t) {
            return "string" != typeof t || (!t || 0 == t.length)
        }

        function Dn() {
            let t = !0;
            if (window.navigator) {
                if (t = window.navigator.onLine, "boolean" == typeof t) return t;
                t = !0
            }
            return t
        }! function(t) {
            let e = !1;
            const n = An.LOG_TAG_PREFIX;
            t.setDebugMode = function(i) {
                t.d(n, `setDebugMode:${i}`), e = i
            }, t.d = function(t, e) {}, t.dd = function(t, n) {
                e && window.console
            }, t.ww = function(t, e) {
                window.console
            }, t.ee = function(t, e) {
                window.console
            }
        }(Rn || (Rn = {}));
        const On = 0,
            Nn = 1e3,
            Un = {
                INITING: 1001,
                CONFIG_INVALID: 1002,
                INIT_FAILED: 1003,
                INIT_TIME_OUT: 1004,
                NETWORK_ERROR: 1005,
                NOT_SUPPORT: 1006
            };

        function Bn(t) {
            let e = "";
            switch (t) {
                case On:
                    e = "success";
                    break;
                case Nn:
                    e = "unknown error";
                    break;
                case Un.INITING:
                    e = "initing , please try again later";
                    break;
                case Un.CONFIG_INVALID:
                    e = "invalid config";
                    break;
                case Un.INIT_FAILED:
                    e = "init failed";
                    break;
                case Un.INIT_TIME_OUT:
                    e = "init timeout";
                    break;
                case Un.NETWORK_ERROR:
                    e = "network error"
            }
            return e
        }

        function Mn(t, e) {
            return {
                code: t,
                message: Bn(t),
                content: e
            }
        }
        var Fn;
        ! function(t) {
            t[t.Initial = 0] = "Initial", t[t.Connecting = 1] = "Connecting", t[t.Connected = 2] = "Connected", t[t.Closing = 3] = "Closing", t[t.Closed = 4] = "Closed"
        }(Fn || (Fn = {}));
        class Ln extends class {
            constructor() {
                this.sConnectionState = Fn.Initial
            }
            getConnectState() {
                return this.sConnectionState
            }
        } {
            constructor(t) {
                super(), this.mUrl = t
            }
            connect() {
                Rn.d("WebSocketConnection", `${location.hostname} try to connect websocket:${this.mUrl}`), this.mWebSocket = new WebSocket(this.mUrl), this.mWebSocket.onopen = this.onOpen.bind(this), this.mWebSocket.onclose = this.onClose.bind(this), this.mWebSocket.onmessage = this.onMessage.bind(this)
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
                        this.sConnectionState = Fn.Closed;
                        break;
                    case WebSocket.CLOSING:
                        this.sConnectionState = Fn.Closing;
                        break;
                    case WebSocket.CONNECTING:
                        this.sConnectionState = Fn.Connecting;
                        break;
                    case WebSocket.OPEN:
                        this.sConnectionState = Fn.Connected
                }
                return this.sConnectionState
            }
        }
        const Pn = "ConnectionController";
        class Zn {
            constructor(t = "") {
                this.mAutoDiscon = !0, this.mDataCache = "", this.url = "", this._onOpen = this._onOpen.bind(this), this._onMessage = this._onMessage.bind(this), this._onClose = this._onClose.bind(this), this.sendMessage = this.sendMessage.bind(this), this.setupConnection = this.setupConnection.bind(this), this.url = t
            }
            setupConnection() {
                An.REQUEST.WS_SUPPORT && "undefined" != typeof WebSocket ? (this.mConnection = new Ln(this.url || An.REQUEST.WS_URL), this.mConnection.onopen = this._onOpen, this.mConnection.onmessage = this._onMessage, this.mConnection.onclose = this._onClose, this.mAutoDiscon = !0, Rn.dd(Pn, "start connecting"), this.mConnection.connect()) : this.onEvent({
                    name: An.EVENT.NOT_SUPPORT
                })
            }
            _isConnect() {
                return this.mConnection && (this.mConnection.getConnectState() === Fn.Connected || this.mConnection.getConnectState() === Fn.Connecting)
            }
            _onOpen(t) {
                Rn.dd(Pn, "connection is opened"), this._sendEvent(An.EVENT.OPEN, t.event), this.sendMessage(this.mDataCache)
            }
            _onMessage(t) {
                Rn.d(Pn, "connection is receive message"), this._sendEvent(An.EVENT.MESSAGE, t.data)
            }
            _onClose(t) {
                Rn.dd(Pn, "connection close " + (this.mAutoDiscon ? "auto" : "manually")), this.mAutoDiscon && this._scheduleReConnect(), this._sendEvent(An.EVENT.DISCONNECT, t)
            }
            _sendEvent(t, e) {
                this.onEvent && this.onEvent({
                    name: t,
                    data: e
                })
            }
            sendMessage(t) {
                zn(t) || (this.mConnection.getConnectState() === Fn.Connected ? (this.mConnection.sendMessage(t), this.mDataCache = "", this._sendEvent(An.EVENT.SEND, t)) : this.mDataCache = t)
            }
            _scheduleReConnect() {
                var t;
                (t = An.REQUEST.WS_RECONNECT_PERIOD, new Promise((e => setTimeout(e, t)))).then((() => {
                    this.mAutoDiscon && (Dn() ? (Rn.dd(Pn, "do reconnect"), this.setupConnection()) : this._scheduleReConnect())
                }))
            }
            disconnect() {
                Rn.d(Pn, "disconnect"), this.mAutoDiscon = !1, this._isConnect() && this.mConnection.disconnect()
            }
            reConnect() {
                Rn.d(Pn, "reconnect"), this.mAutoDiscon = !0, this._isConnect() ? this.mConnection.disconnect() : this.setupConnection()
            }
        }
        class Hn {
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
                    case An.CMD.INIT:
                        t = this.mInitConfig.auth;
                        break;
                    case An.CMD.HEART_BEAT:
                        t = {
                            r: this.mUserInfo.regid,
                            u: this.mInitConfig.auth.is_temporary
                        };
                        break;
                    case An.CMD.MESSAGE_RECIVER:
                        t = {
                            r: this.mUserInfo.regid,
                            m: this.mMsgArr.map((t => t.msg_id))
                        }
                }
                let e = 0;
                this.mSid ? e = this.mSid + 2 : (e = Hn.sid, Hn.sid > 1e8 ? Hn.sid = 0 : Hn.sid = Hn.sid + 4);
                return {
                    cmd: this.mCmd,
                    sid: e,
                    time: Math.round(Date.now() / 1e3),
                    body: t ? JSON.stringify(t) : ""
                }
            }
        }
        Hn.sid = 0;
        const Wn = "Channel";
        class jn {
            constructor() {
                this.mDataCache = {}, this.mMsgChache = {}
            }
            init(t) {
                this.mInitConfig = t, this.mConnectionController || (this.mConnectionController = new Zn(t.webSocketUrl), this.mConnectionController.onEvent = this.onEvent.bind(this)), this.mConnectionController.setupConnection()
            }
            onEvent(t) {
                if (Rn.d(Wn, "onEvent:" + t.name), t.name == An.EVENT.DISCONNECT) {
                    const t = this,
                        e = Object.keys(t.mDataCache);
                    e.length > 0 && e.forEach((e => {
                        const n = t.mDataCache[e];
                        n && (n.cleanRespTimeout(), delete t.mDataCache[e])
                    }))
                }
                if (t.name == An.EVENT.MESSAGE) {
                    const e = JSON.parse(t.data),
                        n = e.cmd;
                    Rn.dd(Wn, `---<- cmd:${n}, data:${t.data}`), n == An.CMD.HEART_BEAT && (e.body = JSON.stringify({
                        code: 0
                    }));
                    const i = JSON.parse(e.body);
                    if (n == An.CMD.PUSH) {
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
                this.send(An.CMD.MESSAGE_RECIVER, new Hn(this.mInitConfig).setCmd(An.CMD.MESSAGE_RECIVER).setSid(t).setUserInfo(this.mUserInfo).setPushMsgArray(n).build());
                const i = n.map((t => t.msg_id)),
                    s = this.mMsgChache[this.mUserInfo.regid];
                let a = [];
                if (s) {
                    for (let t = 0; t < i.length; t++) {
                        const e = i[t];
                        s.indexOf(e) < 0 ? (s.push(e), a.push(n[t])) : Rn.dd(Wn, "filter repeat msgid:" + e)
                    }
                    this.mMsgChache[this.mUserInfo.regid] = s
                } else this.mMsgChache[this.mUserInfo.regid] = i, a = n;
                return a
            }
            send(t, e) {
                Rn.dd(Wn, `---\x3e- cmd:${t}, data:${JSON.stringify(e)}`), this.mConnectionController.sendMessage(JSON.stringify(e))
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
        class Gn {
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
                    }), An.REQUEST.WS_RESP_TIMEOUT)
                }
                return this
            }
            addHook(t) {
                return "function" == typeof t && (this.hook = t), this
            }
            respTimeoutTask() {
                if (this.mTimes < An.REQUEST.WS_RETRY_TIMES) {
                    this.mChannel.send(this.mCmd, this.mData), this.mTimes++;
                    const t = this;
                    this.respTimeoutTaskId = setTimeout((function() {
                        t.respTimeoutTask()
                    }), An.REQUEST.WS_RESP_TIMEOUT)
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
                Rn.d("MsgBuilder", "send fail，event and data can not empty")
            }
        }
        const Kn = "MTpushInterface.mtPush";
        class Vn {
            constructor() {
                this.mInitStatu = Vn.INIT_FAIL, this.mAutoDiscon = !0, this.mIsNeedInit = !1
            }
            init(t, e) {
                if (Rn.setDebugMode(t.debugMode || !1), this.mInitStatu == Vn.INIT_ING) return void e.onFail(Mn(Un.INITING));
                const n = t.auth,
                    i = n.is_temporary;
                !n || zn(n.appkey) || zn(n.random_str) || zn(n.signature) || zn(n.user_str) || zn(i) || "t" !== i && "n" !== i || !n.timestamp || "number" != typeof n.timestamp ? e.onFail(Mn(Un.CONFIG_INVALID)) : (t.is_temporary = i, Dn() ? (Rn.dd(Kn, "action:init - sdkVersion:" + An.SDK_VERSION), this.mInitCallback = e, t.sdkVersion = An.SDK_VERSION, this.mInitConfig = t, this.mChannel || (this.mChannel = new jn, this.mChannel.onevent = this._addEventListen.bind(this)), this.mInitStatu == Vn.INIT_SUCC ? (this.mIsNeedInit = !0, this.stopPush()) : (this.mChannel.init(this.mInitConfig), this.mAutoDiscon = !0), this.mInitStatu = Vn.INIT_ING) : e.onFail(Mn(Un.NETWORK_ERROR)))
            }
            _init() {
                const t = this;
                new Gn(this.mChannel).setCmd(An.CMD.INIT).setData(new Hn(this.mInitConfig).setCmd(An.CMD.INIT).build()).onSuccess((function(e) {
                    t.mInitStatu = Vn.INIT_SUCC, t.mUserInfo = e, t.mInitConfig.getInitInfo && t.mInitConfig.getInitInfo(e), t.mChannel.updateUserInfo(t.mUserInfo), t.mInitCallback && (t.mInitCallback.onSuccess(Mn(On)), t.mInitCallback = void 0), t._startHeartBeat()
                })).onFail((function(e) {
                    t._initFail(Mn(Un.INIT_FAILED, e))
                })).onTimeout((function() {
                    t._initFail(Mn(Un.INIT_TIME_OUT))
                })).send()
            }
            _initFail(t) {
                this.stopPush(), this.mInitCallback ? (Rn.ww(Kn, "init fail:" + JSON.stringify(t)), this.mInitCallback.onFail(t), this.mInitCallback = void 0) : this.mDisconnetFn && (Rn.ww(Kn, "invalid reconnect,close"), this.mDisconnetFn())
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
                this.mAutoDiscon = !1, Hn.sid = 0, this._stopHearBeat(), this.mChannel && this.mChannel.stop(), this.mInitStatu = Vn.INIT_FAIL, this.mUserInfo = null
            }
            _addEventListen(t) {
                if (t) {
                    if (Rn.d(Kn, "event:" + t.name), t.name == An.EVENT.NOT_SUPPORT) return this._initFail(Mn(Nn, "do not support websocket")), void(this.mInitStatu = Vn.INIT_FAIL);
                    if (t.name != An.EVENT.OPEN) {
                        if (t.name == An.EVENT.DISCONNECT) {
                            if (Hn.sid = 0, this._stopHearBeat(), this.mIsNeedInit && !this.mAutoDiscon) return Rn.dd(Kn, "reinit."), this.mChannel.init(this.mInitConfig), this.mIsNeedInit = !1, void(this.mAutoDiscon = !0);
                            if (!this.mUserInfo && this.mAutoDiscon) return void this._initFail(Mn(Un.NETWORK_ERROR))
                        }
                        if (t.name == An.EVENT.MESSAGE) {
                            if (t.data.cmd == An.CMD.PUSH) {
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
                }), An.REQUEST.WS_HEART_BEAT)
            }
            _heartBeat() {
                const t = this;
                new Gn(this.mChannel).setCmd(An.CMD.HEART_BEAT).setData(new Hn(this.mInitConfig).setCmd(An.CMD.HEART_BEAT).setUserInfo(this.mUserInfo).build()).onSuccess((function() {
                    t._startHeartBeat()
                })).onFail((function() {
                    t._reconnect()
                })).onTimeout((function() {
                    t._reconnect()
                })).send()
            }
            _reconnect() {
                Rn.ww(Kn, "wrong heartbeat,try reconnect"), this._stopHearBeat(), this.mChannel.reConnect()
            }
            _stopHearBeat() {
                this.mHeartTimeOut && (clearTimeout(this.mHeartTimeOut), this.mHeartTimeOut = void 0)
            }
            _resetHeartBeat() {
                this.mHeartTimeOut && (clearTimeout(this.mHeartTimeOut), this._startHeartBeat())
            }
        }
        Vn.INIT_SUCC = "INITSUCC", Vn.INIT_ING = "INITING", Vn.INIT_FAIL = "INITFAIL";
        new Vn;
        let Jn = {};

        function Xn(t) {
            var e, n, i;
            const s = Jn;
            if (s.data && s.userOption) {
                t.forEach((t => {
                    const e = (new Date).getTime() / 1e3 | 0;
                    t.itime = e, t.msg_id && (t.msg_id = t.msg_id.toString())
                }));
                const a = {
                    platform: "b",
                    uid: null === (e = s.data) || void 0 === e ? void 0 : e.uid,
                    app_key: null === (n = s.userOption) || void 0 === n ? void 0 : n.appkey,
                    channel: "W3Push",
                    content: t
                };
                return Tn(null === (i = s.userOption) || void 0 === i ? void 0 : i.report_url, a)
            }
        }
        const Yn = self;
        Yn.addEventListener("install", (function() {
            Yn.skipWaiting()
        })), Yn.addEventListener("message", (function(t) {
            const e = t.data || {
                code: 0,
                msg: {}
            };
            var n, i, s;
            100 === e.code && (Jn = e.msg.userInfoData, s = e.msg.infoData.baseUrl, xn.baseUrl = s, n = e.msg.infoData.uid, i = e.msg.infoData.passwd, xn.uid = n, xn.passwd = i), 9999 === e.code && Tn(e.msg.url, e.msg.data), 6666 === t.data.code && Xn([{
                type: "msg_status",
                msg_id: e.msg.msgid,
                result: 3018
            }])
        })), Yn.addEventListener("activate", (function() {
            return self.clients.claim()
        })), Yn.addEventListener("notificationclick", (function(t) {
            var e, n;
            Xn([{
                type: "msg_status",
                msg_id: t.notification.tag,
                result: 3002
            }]), (null === (e = t.notification.data) || void 0 === e ? void 0 : e.url) && (t.notification.close(), t.waitUntil(self.clients.openWindow(null === (n = t.notification.data) || void 0 === n ? void 0 : n.url + "/path/index1.html")))
        })), Yn.addEventListener("notificationclose", (function(t) {})), Yn.addEventListener("push", (function(t) {
            if (!t.data) return;
            const e = t.data.json();
            if (Xn([{
                    type: "msg_status",
                    msg_id: e.tag,
                    result: 3001
                }]), Yn.clients.matchAll().then((t => {
                    t && t.length && t.forEach((t => {
                        t.postMessage(e)
                    }))
                })), (n = e.data.ntf_or_msg) && (1 === n || 3 === n)) {
                Xn([{
                    type: "msg_status",
                    msg_id: e.tag,
                    result: 3018
                }]);
                const n = Yn.registration.showNotification(e.title, e);
                t.waitUntil(n)
            }
            var n
        }))
    })()
})();
