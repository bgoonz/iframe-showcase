if (self.CavalryLogger) {
  CavalryLogger.start_js(["w3tDS6K"]);
}

__d(
  "MqttEnv",
  ["killswitch"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = Object.freeze({
      mqtt_waterfall_log_client_sampling: 1,
      mqtt_ws_polling_enabled: 3,
      mqtt_lp_use_fetch: 9,
      mqtt_fast_lp: 11,
      mqtt_lp_no_delay: 12,
      mqtt_enable_publish_over_polling: 13,
    });
    b = (function () {
      var a = b.prototype;
      a.random = function () {
        return this.$1 != null ? this.$1() : Math.random();
      };
      a.isUserLoggedInNow = function () {
        return this.$2 != null ? this.$2() : !0;
      };
      a.clearTimeout = (function (a) {
        function b(b) {
          return a.apply(this, arguments);
        }
        b.toString = function () {
          return a.toString();
        };
        return b;
      })(function (a) {
        if (this.$3 != null) {
          this.$3(a);
          return;
        }
        clearTimeout(a);
      });
      a.setTimeout = (function (a) {
        function b(b, c) {
          return a.apply(this, arguments);
        }
        b.toString = function () {
          return a.toString();
        };
        return b;
      })(function (a, b) {
        for (
          var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
          e < c;
          e++
        )
          d[e - 2] = arguments[e];
        return this.$4 != null
          ? this.$4.apply(null, arguments)
          : setTimeout.apply(null, arguments);
      });
      a.getLoggerInstance = function () {
        return this.$5 != null ? this.$5() : h.getInstance();
      };
      a.genGk = function (a) {
        return this.$6 != null ? this.$6(a) : !1;
      };
      a.killswitch = function (a) {
        return this.$7 != null ? this.$7(a) : c("killswitch")(a);
      };
      a.createSocket = function (a, b) {
        return this.$8 != null ? this.$8(a, b) : new WebSocket(a);
      };
      a.scheduleCallback = function (a) {
        return this.$9 != null ? this.$9(a) : a();
      };
      a.scheduleLoggingCallback = function (a) {
        return this.$10 != null ? this.$10(a) : a();
      };
      a.configRead = function (a, b) {
        return this.$11 != null ? this.$11(a, b) : b;
      };
      a.configWrite = function (a, b) {
        this.$12 != null && this.$12(a, b);
      };
      function b() {
        (this.$1 = null),
          (this.$2 = null),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = null),
          (this.$6 = null),
          (this.$7 = null),
          (this.$8 = null),
          (this.$9 = null),
          (this.$10 = null),
          (this.$11 = null),
          (this.$12 = null);
      }
      a.initialize = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$6 = f),
          (this.$7 = l),
          (this.$8 = g),
          (this.$9 = h),
          (this.$10 = i),
          (this.$11 = j),
          (this.$12 = k);
      };
      return b;
    })();
    var h = (function () {
      function a() {}
      a.getInstance = function () {
        return new a();
      };
      var b = a.prototype;
      b.setAppId = function (a) {};
      b.eventLogConnect = function (a) {};
      b.eventLogPull = function (a) {};
      b.eventLogPullFinish = function (a) {};
      b.eventLogDisconnect = function (a) {};
      b.eventLogOutgoingPublish = function (a) {};
      b.eventLogIncomingPublish = function (a) {};
      b.eventLogPublishTimeout = function (a) {};
      b.eventLogMiscellaneousError = function (a) {};
      b.logIfLoggedOut = function () {};
      b.logError = function (a) {};
      b.logErrorWarn = function (a) {};
      b.logWarn = function (a) {};
      b.debugTrace = function (a) {};
      b.bumpCounter = function (a) {};
      return a;
    })();
    d = new b();
    g.MqttGkNames = a;
    g.Env = d;
  },
  98
);
__d(
  "IrisSubscribeChecker",
  ["MqttEnv"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = (function () {
      function a(a) {
        this.$1 = g.getLoggerInstance();
        this.$2 = null;
        this.$3 = !1;
        this.$4 = !1;
        this.$5 = !1;
        this.$6 = !0;
        this.$7 = 0;
        this.$8 = a;
        if (typeof window !== "undefined") {
          a = window.location.hostname;
          (a === "m.facebook.com" ||
            a === "mobile.facebook.com" ||
            a === "mtouch.facebook.com") &&
            (this.$6 = !1);
        }
      }
      var b = a.prototype;
      b.start = function () {
        this.$6 = !0;
      };
      b.stop = function () {
        (this.$6 = !1), this.$9();
      };
      b.onConnectAttempt = function () {};
      b.onConnectFailure = function () {
        this.$9();
      };
      b.onConnected = function () {
        var a = this;
        this.$7++;
        this.$9();
        this.$3 = !1;
        this.$4 = !1;
        this.$5 = !1;
        this.$6 &&
          (this.$2 = g.setTimeout(function () {
            a.$10();
          }, 8e3));
      };
      b.onConnectSuccess = function () {};
      b.onConnectionLost = function () {
        this.$9();
      };
      b.onSubscribe = function (a) {
        a === "/t_ms" && (this.$3 = !0);
      };
      b.onUnsubscribe = function (a) {};
      b.onPublish = function (a) {
        (a === "/messenger_sync_get_diffs" ||
          a === "/messenger_sync_create_queue") &&
          ((this.$4 = !0), this.$3 && ((this.$5 = !0), this.$9()));
      };
      b.onMessage = function (a) {};
      b.onWSFatal = function () {};
      b.$9 = function () {
        this.$2 && (g.clearTimeout(this.$2), (this.$2 = null));
      };
      b.$10 = function () {
        if (this.$4 === !1) {
          var a =
            this.$7 == 1 ? "no_iris_session_initialConnect" : "no_iris_session";
          this.$1.bumpCounter(a);
          this.$1.eventLogMiscellaneousError({ errorMessage: a });
          this.$8()
            ? this.$1.bumpCounter(a + ".withProvider")
            : this.$1.bumpCounter(a + ".withoutProvider");
          this.$3 === !0
            ? this.$1.bumpCounter(a + ".withTopicSubscribe")
            : this.$1.bumpCounter(a + ".withoutTopicSubscribe");
        }
        this.$3 === !1 && this.$1.bumpCounter("no_iris_topic_subscribe");
        this.$3 === !0 &&
          this.$4 === !0 &&
          this.$5 === !1 &&
          this.$1.bumpCounter("session_before_topic_subscribe");
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "MqttAnalyticsHook",
  ["MqttEnv"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = (function () {
      function a() {
        (this.$1 = g.getLoggerInstance()),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = 0),
          this.$1.bumpCounter("session_start"),
          g.isUserLoggedInNow() || this.$1.bumpCounter("session_start.logout");
      }
      var b = a.prototype;
      b.onConnectAttempt = function () {
        this.$1.bumpCounter("ws_connect_attempt");
      };
      b.onConnectFailure = function () {
        this.$3++, this.$1.bumpCounter("ws_connect_failure");
      };
      b.onConnected = function () {
        this.$1.bumpCounter("ws_connect_connected");
      };
      b.onConnectSuccess = function () {
        this.$2 === 0 && this.$1.bumpCounter("ws_connect_first_success"),
          this.$2++,
          this.$1.bumpCounter("ws_connect_success");
      };
      b.onConnectionLost = function () {
        this.$1.bumpCounter("ws_disconnect");
      };
      b.onSubscribe = function (a) {};
      b.onUnsubscribe = function (a) {};
      b.onPublish = function (a) {
        this.$1.bumpCounter("ws_publish." + a);
      };
      b.onMessage = function (a) {
        this.$1.bumpCounter("message_arrived." + a);
      };
      b.onWSFatal = function () {
        this.$1.bumpCounter("ws_fatal");
      };
      b.onPollRequestSent = function () {
        this.$1.bumpCounter("polling_request_send");
      };
      b.onPollRequestSuccess = function () {
        this.$1.bumpCounter("polling_request_succeed"),
          this.$4 === 0 && this.$1.bumpCounter("polling_first_success"),
          this.$4++;
      };
      b.onPollResponse = function (a) {
        this.$1.bumpCounter("lp.message_arrived." + a);
      };
      b.onPollFinish = function () {
        this.$1.bumpCounter("polling_request_finish");
      };
      b.onPollRequestFailed = function (a) {
        this.$1.bumpCounter("polling_request_failed"),
          this.$1.bumpCounter("polling_request_failed_" + a),
          this.$5++;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "MqttConnectionHookCollection",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Set();
      }
      var b = a.prototype;
      b.addHook = function (a) {
        this.$1.add(a);
      };
      b.removeHook = function (a) {
        this.$1["delete"](a);
      };
      b.onConnectAttempt = function () {
        this.$1.forEach(function (a) {
          a.onConnectAttempt();
        });
      };
      b.onConnectFailure = function () {
        this.$1.forEach(function (a) {
          a.onConnectFailure();
        });
      };
      b.onConnected = function () {
        this.$1.forEach(function (a) {
          a.onConnected();
        });
      };
      b.onConnectSuccess = function () {
        this.$1.forEach(function (a) {
          a.onConnectSuccess();
        });
      };
      b.onConnectionLost = function () {
        this.$1.forEach(function (a) {
          a.onConnectionLost();
        });
      };
      b.onSubscribe = function (a) {
        this.$1.forEach(function (b) {
          b.onSubscribe(a);
        });
      };
      b.onUnsubscribe = function (a) {
        this.$1.forEach(function (b) {
          b.onUnsubscribe(a);
        });
      };
      b.onPublish = function (a) {
        this.$1.forEach(function (b) {
          b.onPublish(a);
        });
      };
      b.onMessage = function (a) {
        this.$1.forEach(function (b) {
          b.onMessage(a);
        });
      };
      b.onWSFatal = function () {
        this.$1.forEach(function (a) {
          a.onWSFatal();
        });
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MqttProtocolUtils",
  ["MqttEnv"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      if (a == null) return b;
      var c = new Uint8Array(a.length + b.length);
      c.set(a);
      c.set(b, a.length);
      return c;
    }
    function b(a, b) {
      b = b;
      var c = 0,
        d = 1,
        e;
      do {
        if (b === a.length) return null;
        e = a[b++];
        c += (e & 127) * d;
        d *= 128;
      } while ((e & 128) !== 0);
      return { value: c, offset: b };
    }
    function c(a) {
      a = a;
      var b = new Array(1);
      for (var c = 0; c < 4; c++) {
        var d = a % 128;
        a >>= 7;
        if (a > 0) b[c] = d | 128;
        else {
          b[c] = d;
          break;
        }
      }
      return b;
    }
    function h(a, b, c) {
      c = c;
      b[c++] = a >> 8;
      b[c++] = a % 256;
      return c;
    }
    function e(a, b) {
      return 256 * a[b] + a[b + 1];
    }
    function g(a) {
      var b = 0;
      for (var c = 0, d = a.length; c < d; c++) {
        var e = a.charCodeAt(c);
        e < 128
          ? (b += 1)
          : e < 2048
          ? (b += 2)
          : e >= 55296 && e <= 56319
          ? ((b += 4), c++)
          : (b += 3);
      }
      return b;
    }
    function i(a, b, c, d) {
      d = h(b, c, d);
      j(a, c, d);
      return d + b;
    }
    function j(a, b, c) {
      c = c;
      for (var d = 0, e = a.length; d < e; d++) {
        var f = a.charCodeAt(d);
        f < 128
          ? (b[c++] = f)
          : f < 2048
          ? ((b[c++] = 192 | (f >> 6)), (b[c++] = 128 | (f & 63)))
          : f < 55296 || f >= 57344
          ? ((b[c++] = 224 | (f >> 12)),
            (b[c++] = 128 | ((f >> 6) & 63)),
            (b[c++] = 128 | (f & 63)))
          : ((f = 65536 + (((f & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
            (b[c++] = 240 | (f >> 18)),
            (b[c++] = 128 | ((f >> 12) & 63)),
            (b[c++] = 128 | ((f >> 6) & 63)),
            (b[c++] = 128 | (f & 63)));
      }
    }
    function k(a, b, c) {
      var d = [],
        e = b,
        f = 0;
      while (e < b + c) {
        var g = a[e++];
        if (g < 128) d[f++] = String.fromCharCode(g);
        else if (g > 191 && g < 224) {
          var h = a[e++];
          d[f++] = String.fromCharCode(((g & 31) << 6) | (h & 63));
        } else if (g > 239 && g < 365) {
          h = a[e++];
          var i = a[e++],
            j = a[e++];
          h =
            (((g & 7) << 18) | ((h & 63) << 12) | ((i & 63) << 6) | (j & 63)) -
            65536;
          d[f++] = String.fromCharCode(55296 + (h >> 10));
          d[f++] = String.fromCharCode(56320 + (h & 1023));
        } else {
          i = a[e++];
          j = a[e++];
          d[f++] = String.fromCharCode(
            ((g & 15) << 12) | ((i & 63) << 6) | (j & 63)
          );
        }
      }
      return d.join("");
    }
    var l = (function () {
      function a(a, b, c, d) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$5 = c),
          (this.$6 = d),
          (this.$4 = !1);
      }
      var b = a.prototype;
      b.$7 = function () {
        var a = this;
        this.$4
          ? ((this.$4 = !1),
            this.$5(),
            (this.$3 = d("MqttEnv").Env.setTimeout(function () {
              a.$7();
            }, this.$2() * 1e3)))
          : this.$6();
      };
      b.reset = function () {
        var a = this;
        this.$4 = !0;
        this.$3 && (d("MqttEnv").Env.clearTimeout(this.$3), (this.$3 = null));
        var b = this.$1() * 1e3;
        b > 0 &&
          (this.$3 = d("MqttEnv").Env.setTimeout(function () {
            a.$7();
          }, b));
      };
      b.cancel = function () {
        this.$3 && (d("MqttEnv").Env.clearTimeout(this.$3), (this.$3 = null));
      };
      return a;
    })();
    f.exports = {
      UTF8Length: g,
      convertStringToUTF8: j,
      concatBuffers: a,
      decodeMultiByteInt: b,
      convertUTF8ToString: k,
      encodeMultiByteInt: c,
      writeUInt16BE: h,
      readUInt16BE: e,
      writeString: i,
      Pinger: l,
    };
  },
  34
);
__d(
  "MqttUtils",
  ["MqttEnv"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env,
      h = {
        endpointWithSessionId: function (a, b) {
          return h.endpointWithExtraParameter(a, "sid", b.toString());
        },
        endpointWithExtraParameters: function (a, b) {
          var c = a;
          b.forEach(function (a, b, d) {
            c = h.endpointWithExtraParameter(c, b, a);
          });
          return c;
        },
        endpointWithExtraParameter: function (a, b, c) {
          if (a.indexOf("?") > 0) return a + "&" + b + "=" + c;
          else return a + "?" + b + "=" + c;
        },
        generateSessionId: function () {
          return Math.floor(g.random() * Number.MAX_SAFE_INTEGER);
        },
        promiseDone: function (a, b, c) {
          var d = arguments.length > 1 ? a.then(b, c) : a;
          d.then(null, function (a) {
            g.setTimeout(function () {
              if (a instanceof Error) throw a;
              else throw new Error("promiseDone");
            }, 0);
          });
        },
        promiseDoneWithTimeout: function (a, b, c, d) {
          var e = !1;
          g.setTimeout(function () {
            e || ((e = !0), c(new Error("promise timeout")));
          }, d);
          h.promiseDone(
            a,
            function (a) {
              e || ((e = !0), b(a));
            },
            function (a) {
              e || ((e = !0), c(a));
            }
          );
        },
        sprintf: function (a) {
          for (
            var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
            d < b;
            d++
          )
            c[d - 1] = arguments[d];
          var e = 0;
          return a.replace(/%s/g, function () {
            return String(c[e++]);
          });
        },
        hasWSSupport: function () {
          return (
            "WebSocket" in a &&
            a.WebSocket != null &&
            "CLOSING" in a.WebSocket.prototype
          );
        },
        getWSAvailability: function () {
          var b = "";
          if ("WebSocket" in a && a.WebSocket !== null) b += "W";
          else return "none";
          "CLOSING" in a.WebSocket.prototype && (b += "C");
          return b;
        },
      };
    e.exports = h;
  },
  null
);
__d(
  "MqttProtocolCodec",
  ["MqttProtocolUtils", "MqttUtils"],
  function (a, b, c, d, e, f) {
    var g = (c = b("MqttProtocolUtils")).UTF8Length,
      h = c.convertStringToUTF8,
      i = c.convertUTF8ToString,
      j = c.decodeMultiByteInt,
      k = c.encodeMultiByteInt,
      l = c.readUInt16BE,
      m = c.writeString,
      n = c.writeUInt16BE,
      o = b("MqttUtils").sprintf,
      p = Object.freeze({
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14,
      }),
      q = [0, 6, 77, 81, 73, 115, 100, 112, 3];
    function r(a, b) {
      b = b;
      var c = b,
        d = a[b],
        e = d >> 4;
      b += 1;
      var f = j(a, b);
      if (f == null) return { wireMessage: null, position: c };
      b = f.offset;
      f = b + f.value;
      if (f > a.length) return { wireMessage: null, position: c };
      var g;
      switch (e) {
        case p.CONNACK:
          c = a[b++];
          c = !!(c & 1);
          var h = a[b++];
          g = new u(c, h);
          break;
        case p.PUBLISH:
          c = d & 15;
          h = (c >> 1) & 3;
          d = l(a, b);
          b += 2;
          var k = i(a, b, d);
          b += d;
          d = null;
          h === 1 && ((d = l(a, b)), (b += 2));
          var m = w.createWithBytes(a.subarray(b, f)),
            n = (c & 1) === 1;
          c = (c & 8) === 8;
          g = new x(k, m, h, d, n, c);
          break;
        case p.PINGREQ:
          g = new s("PINGREQ");
          break;
        case p.PINGRESP:
          g = new s("PINGRESP");
          break;
        case p.PUBACK:
        case p.UNSUBACK:
          k = l(a, b);
          g = new v(e === p.PUBACK ? "PUBACK" : "UNSUBACK", k);
          break;
        case p.SUBACK:
          m = l(a, b);
          b += 2;
          h = a.subarray(b, f);
          g = new t(m, h);
          break;
        default:
          throw new Error(o("Invalid MQTT message type %s.", e));
      }
      return { wireMessage: g, position: f };
    }
    function a(a) {
      var b = [],
        c = 0;
      while (c < a.length) {
        var d = r(a, c),
          e = d.wireMessage;
        c = d.position;
        if (e) b.push(e);
        else break;
      }
      d = null;
      c < a.length && (d = a.subarray(c));
      return { messages: b, remaining: d };
    }
    d = (function () {
      "use strict";
      function a(a) {
        this.messageType = p[a];
      }
      var b = a.prototype;
      b.encode = function () {
        throw new TypeError("Cannot abstract class WireMessage");
      };
      return a;
    })();
    var s = (function (b) {
      "use strict";
      babelHelpers.inheritsLoose(a, b);
      function a(a) {
        return b.call(this, a) || this;
      }
      var c = a.prototype;
      c.encode = function () {
        var a = new ArrayBuffer(2),
          b = new Uint8Array(a);
        b[0] = (this.messageType & 15) << 4;
        return a;
      };
      return a;
    })(d);
    f = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, "DISCONNECT") || this;
      }
      var c = b.prototype;
      c.encode = function () {
        var a = (this.messageType & 15) << 4,
          b = new ArrayBuffer(2),
          c = new Uint8Array(b);
        c[0] = a;
        c.set(k(0), 1);
        return b;
      };
      return b;
    })(d);
    var t = (function (b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          var d;
          d = b.call(this, "SUBACK") || this;
          d.messageIdentifier = a;
          d.returnCode = c;
          return d;
        }
        return a;
      })(d),
      u = (function (b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          var d;
          d = b.call(this, "CONNACK") || this;
          d.sessionPresent = a;
          d.returnCode = c;
          return d;
        }
        return a;
      })(d),
      v = (function (b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          a = b.call(this, a) || this;
          a.messageIdentifier = c;
          return a;
        }
        var c = a.prototype;
        c.encode = function () {
          var a = (this.messageType & 15) << 4,
            b = 2,
            c = k(b),
            d = c.length + 1;
          b = new ArrayBuffer(b + d);
          var e = new Uint8Array(b);
          e[0] = a;
          e.set(c, 1);
          d = n(this.messageIdentifier, e, d);
          return b;
        };
        return a;
      })(d);
    c = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this, "CONNECT") || this;
        d.clientId = b;
        d.connectOptions = c;
        return d;
      }
      var c = b.prototype;
      c.encode = function () {
        var a = (this.messageType & 15) << 4,
          b = q.length + 3;
        b += g(this.clientId) + 2;
        b += g(this.connectOptions.userName) + 2;
        var c = k(b);
        b = new ArrayBuffer(1 + c.length + b);
        var d = new Uint8Array(b);
        d[0] = a;
        a = 1;
        d.set(c, 1);
        a += c.length;
        d.set(q, a);
        a += q.length;
        c = 2 | 128;
        d[a++] = c;
        a = n(this.connectOptions.getKeepAliveIntervalSeconds(), d, a);
        a = m(this.clientId, g(this.clientId), d, a);
        a = m(
          this.connectOptions.userName,
          g(this.connectOptions.userName),
          d,
          a
        );
        return b;
      };
      return b;
    })(d);
    b = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e) {
        var f;
        f = a.call(this, b) || this;
        f.topic = c;
        if ((d < 0 && d > 1) || (d === 1 && e == null))
          throw new TypeError(
            o("Argument Invalid. qos: %s messageType: %s.", d, b)
          );
        f.qos = d;
        f.messageIdentifier = e;
        return f;
      }
      var c = b.prototype;
      c.encode = function () {
        var a = (this.messageType & 15) << 4;
        a |= 2;
        var b = g(this.topic),
          c = 2 + b + 2;
        this.messageType === p.SUBSCRIBE && (c += 1);
        var d = k(c);
        c = new ArrayBuffer(1 + d.length + c);
        var e = new Uint8Array(c);
        e[0] = a;
        a = 1;
        e.set(d, 1);
        a += d.length;
        this.messageIdentifier != null && (a = n(this.messageIdentifier, e, a));
        a = m(this.topic, b, e, a);
        this.messageType === p.SUBSCRIBE &&
          this.qos != null &&
          (e[a++] = this.qos);
        return c;
      };
      return b;
    })(d);
    var w = (function () {
        "use strict";
        function a(a, b) {
          (this.payloadString = a), (this.payloadBytes = b);
        }
        a.createWithString = function (b) {
          var c = new Uint8Array(new ArrayBuffer(g(b)));
          h(b, c, 0);
          return new a(b, c);
        };
        a.createWithBytes = function (b) {
          var c = i(b, 0, b.length);
          return new a(c, b);
        };
        var b = a.prototype;
        b.string = function () {
          return this.payloadString;
        };
        b.bytes = function () {
          return this.payloadBytes;
        };
        return a;
      })(),
      x = (function (b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, d, e, f, g) {
          var h;
          h = b.call(this, "PUBLISH") || this;
          h.topic = a;
          h.payloadMessage = c;
          h.qos = d;
          h.messageIdentifier = e;
          h.retained = f != null ? f : !1;
          h.duplicate = g != null ? g : !1;
          if (h.qos === 1 && h.messageIdentifier == null)
            throw new TypeError(
              "Argument Invalid. messageIdentifier: null and qos: 1"
            );
          return h;
        }
        var c = a.prototype;
        c.encode = function () {
          var a = (this.messageType & 15) << 4;
          this.duplicate && (a |= 8);
          a = a |= this.qos << 1;
          this.retained && a != 1;
          var b = g(this.topic),
            c = b + 2,
            d = this.qos === 0 ? 0 : 2;
          c += d;
          d = this.payloadMessage.bytes();
          c += d.byteLength;
          var e = k(c);
          c = new ArrayBuffer(1 + e.length + c);
          var f = new Uint8Array(c);
          f[0] = a;
          f.set(e, 1);
          a = 1 + e.length;
          a = m(this.topic, b, f, a);
          this.qos !== 0 &&
            this.messageIdentifier != null &&
            (a = n(this.messageIdentifier, f, a));
          f.set(d, a);
          return c;
        };
        return a;
      })(d);
    e.exports = {
      MESSAGE_TYPE: p,
      WireMessage: {
        Base: d,
        PubAckUnsubAck: v,
        Ping: s,
        ConnAck: u,
        Connect: c,
        Disconnect: f,
        Subscription: b,
        Publish: x,
      },
      createMessageWithString: w.createWithString,
      decodeMessage: r,
      decodeByteMessages: a,
    };
  },
  null
);
__d(
  "MqttTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b) {
      (this.errorCode = a), (this.errorMessage = b);
    };
    b = function (a, b) {
      (this.mqttError = a), (this.connAck = b);
    };
    c = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        d === void 0 && (d = null);
        c = a.call(this, c) || this;
        c.isRecoverable = b;
        c.originalError = d;
        return c;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f.MqttError = a;
    f.ConnectFailure = b;
    f.MqttChannelError = c;
  },
  66
);
__d(
  "MqttProtocolClient",
  [
    "MqttEnv",
    "MqttProtocolCodec",
    "MqttProtocolUtils",
    "MqttTypes",
    "gkx",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 30,
      i = 6e4,
      j = {
        SOCKET_ERROR: new (d("MqttTypes").MqttError)(1, "Socket error"),
        SOCKET_MESSAGE: new (d("MqttTypes").MqttError)(
          2,
          "Unable to parse invalid socket message"
        ),
        INVALID_DATA_TYPE: new (d("MqttTypes").MqttError)(
          3,
          "Received non-arraybuffer from socket."
        ),
        CONNECT_TIMEOUT: new (d("MqttTypes").MqttError)(4, "Connect timed out"),
        CONNACK_FAILURE: new (d("MqttTypes").MqttError)(
          5,
          "Connection failure due to connack"
        ),
        PING_TIMEOUT: new (d("MqttTypes").MqttError)(6, "Ping timeout"),
        APP_DISCONNECT: new (d("MqttTypes").MqttError)(
          7,
          "Disconnect initiated by app"
        ),
        SERVER_DISCONNECT: new (d("MqttTypes").MqttError)(
          8,
          "Disconnect message sent my server"
        ),
        SOCKET_CLOSE: new (d("MqttTypes").MqttError)(
          9,
          "Socket connection closed"
        ),
      };
    a = (function () {
      function a(a) {
        (this.$3 = a),
          (this.$2 = {
            userName: "",
            mqttVersion: 3,
            getKeepAliveIntervalSeconds: function () {
              return 10;
            },
            getKeepAliveTimeoutSeconds: function () {
              return 10;
            },
            ignoreSubProtocol: !1,
            onConnectSuccess: function () {},
            onConnectFailure: function (a) {},
            onConnection: function () {},
            onConnectionError: function (a) {},
            onConnectionLost: function (a) {},
            onMessageArrived: function (a, b, c) {},
            onMessageDelivered: function (a, b) {},
          }),
          (this.$1 = "mqttwsclient"),
          (this.$4 = 0),
          (this.$5 = !1),
          (this.$9 = d("MqttEnv").Env.getLoggerInstance());
      }
      var b = a.prototype;
      b.connect = function (a) {
        var b,
          e = this;
        if (this.$5)
          throw new Error("Invalid state: connect - already connected");
        this.$2 = a;
        this.setConnected(!1);
        this.$7 != null &&
          (d("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null));
        b = (b = c("qex")._("525")) != null ? b : h;
        this.$7 = d("MqttEnv").Env.setTimeout(function () {
          e.$9.bumpCounter("protocol.error.connect.timeout"),
            e.$11(j.CONNECT_TIMEOUT);
        }, b * 1e3);
        this.$6 = d("MqttEnv").Env.createSocket(this.$3);
        this.$6.binaryType = "arraybuffer";
        this.$6.onopen = function () {
          e.setConnected(!0),
            e.$12(new (d("MqttProtocolCodec").WireMessage.Connect)(e.$1, a)),
            a.onConnection();
        };
        this.$6.onmessage = function (a) {
          a = a.data;
          if (!(a instanceof ArrayBuffer)) {
            e.$9.bumpCounter("protocol.error.onmessage.type");
            e.$11(j.INVALID_DATA_TYPE);
            return;
          }
          try {
            a = new Uint8Array(a);
            e.$10 != null &&
              ((a = d("MqttProtocolUtils").concatBuffers(e.$10, a)),
              e.$9.bumpCounter("protocol.debug.usingMessagesBuffer"),
              delete e.$10,
              (e.$10 = null));
            a = d("MqttProtocolCodec").decodeByteMessages(a);
            var b = a.messages;
            e.$10 = a.remaining;
            for (var a = 0; a < b.length; a++) e.handleMessage(b[a]);
          } catch (a) {
            (e.$10 = null),
              e.$9.logError(a, j.SOCKET_MESSAGE.errorMessage),
              e.$9.bumpCounter("protocol.error.onmessage.parse"),
              e.$11(j.SOCKET_MESSAGE);
          }
        };
        this.$6.onerror = function (a) {
          e.$9.bumpCounter("protocol.error.socket"), e.$11(j.SOCKET_ERROR);
        };
        this.$6.onclose = function (a) {
          e.$9.bumpCounter("protocol.socket.close"), e.$11(j.SOCKET_CLOSE);
        };
        this.$8 != null && this.$8.cancel();
        this.$8 = new (d("MqttProtocolUtils").Pinger)(
          a.getKeepAliveIntervalSeconds,
          a.getKeepAliveTimeoutSeconds,
          this.$12.bind(
            this,
            new (d("MqttProtocolCodec").WireMessage.Ping)("PINGREQ")
          ),
          this.$11.bind(this, j.PING_TIMEOUT)
        );
      };
      b.$13 = function () {
        this.setConnected(!1),
          this.$8 != null && this.$8.cancel(),
          this.$7 != null &&
            (d("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null)),
          this.$6 != null &&
            ((this.$6.onopen = function (a) {}),
            (this.$6.onmessage = function (a) {}),
            (this.$6.onerror = function (a) {}),
            (this.$6.onclose = function (a) {}),
            this.$6.readyState === this.$6.OPEN && this.$6.close(),
            delete this.$6,
            (this.$6 = null)),
          (this.$2.onConnectSuccess = function () {}),
          (this.$2.onConnectFailure = function (a) {}),
          (this.$2.onConnection = function () {}),
          (this.$2.onConnectionError = function (a) {}),
          (this.$2.onConnectionLost = function (a) {}),
          (this.$2.onMessageArrived = function (a, b, c) {}),
          (this.$2.onMessageDelivered = function (a, b) {});
      };
      b.disconnect = function () {
        if (
          this.$6 == null ||
          this.$6.readyState !== this.$6.OPEN ||
          !this.$5
        ) {
          this.$13();
          return;
        }
        this.$12(new (d("MqttProtocolCodec").WireMessage.Disconnect)());
        this.$9.bumpCounter("protocol.debug.disconnect");
        this.$11(j.APP_DISCONNECT);
      };
      b.isConnected = function () {
        return this.$5;
      };
      b.setConnected = function (a) {
        this.$5 = a;
      };
      b.subscribe = function (a) {
        if (!this.$5) {
          this.$9.bumpCounter("protocol.error.subscribe.notconnected");
          throw new Error("Invalid state: subscribe - not connected");
        }
        this.$9.bumpCounter("protocol.subscribe." + a);
        a = new (d("MqttProtocolCodec").WireMessage.Subscription)(
          "SUBSCRIBE",
          a,
          0,
          this.$14()
        );
        this.$12(a);
      };
      b.unsubscribe = function (a) {
        if (!this.$5) {
          this.$9.bumpCounter("protocol.error.unsubscribe.notconnected");
          throw new Error("Invalid state: unsubscribe - not connected");
        }
        this.$9.bumpCounter("protocol.unsubscribe." + a);
        a = new (d("MqttProtocolCodec").WireMessage.Subscription)(
          "UNSUBSCRIBE",
          a,
          0,
          this.$14()
        );
        this.$12(a);
      };
      b.publish = function (a, b, c) {
        this.$5 || this.$9.bumpCounter("protocol.error.publish.notconnected");
        this.$9.bumpCounter("protocol.publish." + a);
        var e = this.$14();
        a = new (d("MqttProtocolCodec").WireMessage.Publish)(
          a,
          d("MqttProtocolCodec").createMessageWithString(b),
          c,
          e
        );
        this.$12(a);
        return e;
      };
      b.$14 = function () {
        ++this.$4 === i && (this.$4 = 1);
        return this.$4;
      };
      b.$11 = function (a, b) {
        c("gkx")("1163") &&
          this.$9.bumpCounter(
            "protocol.debug.disconnect.internal.experiment." + a.errorCode
          );
        this.$9.bumpCounter("protocol.debug.disconnect.internal");
        var e = this.$5,
          f = this.$2,
          g = f.onConnectionLost,
          h = f.onConnectFailure;
        this.setConnected(!1);
        this.$13();
        e
          ? d("MqttEnv").Env.scheduleCallback(function () {
              g(a);
            })
          : d("MqttEnv").Env.scheduleCallback(function () {
              h(new (d("MqttTypes").ConnectFailure)(a, b != null ? b : -1));
            });
      };
      b.$12 = function (a) {
        var b = this.$6;
        if (b == null) return;
        if (b.readyState != b.OPEN) return;
        b.send(a.encode());
      };
      b.handleMessage = function (a) {
        var b = this;
        switch (a.messageType) {
          case d("MqttProtocolCodec").MESSAGE_TYPE.CONNACK:
            this.$7 != null &&
              (d("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null));
            if (a instanceof d("MqttProtocolCodec").WireMessage.ConnAck) {
              var c = a;
              if (c.returnCode !== 0) {
                this.$9.bumpCounter("protocol.error.connack.invalidreturncode");
                this.setConnected(!1);
                this.$11(j.CONNACK_FAILURE, c.returnCode);
                return;
              }
              d("MqttEnv").Env.scheduleCallback(function () {
                b.$2.onConnectSuccess();
              });
              this.$8 != null && this.$8.reset();
            }
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.PUBLISH:
            if (a instanceof d("MqttProtocolCodec").WireMessage.Publish) {
              var e = a;
              d("MqttEnv").Env.scheduleCallback(function () {
                b.$2.onMessageArrived(
                  e.topic,
                  e.payloadMessage.payloadString,
                  e.qos
                );
              });
              c = e.messageIdentifier;
              this.$9.bumpCounter("protocol.publish.received");
              if (e.qos === 1 && c != null) {
                c = new (d("MqttProtocolCodec").WireMessage.PubAckUnsubAck)(
                  "PUBACK",
                  c
                );
                this.$12(c);
              }
            }
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.PUBACK:
            if (
              a instanceof d("MqttProtocolCodec").WireMessage.PubAckUnsubAck
            ) {
              c = a;
              var f = c.messageIdentifier;
              this.$9.bumpCounter("protocol.puback.received");
              d("MqttEnv").Env.scheduleCallback(function () {
                b.$2.onMessageDelivered("", f);
              });
            }
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.PINGRESP:
            this.$8 != null && this.$8.reset();
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.DISCONNECT:
            this.$11(j.SERVER_DISCONNECT);
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.SUBACK:
            this.$9.bumpCounter("protocol.suback.received");
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.UNSUBACK:
            this.$9.bumpCounter("protocol.unsuback.received");
            break;
          default:
            this.$9.logError(
              new Error(
                "MqttProtocolClient: Received unhandled message type: " +
                  a.messageType
              ),
              "Received unhandled message type"
            );
            this.$9.bumpCounter("protocol.error.handlemessage.unsupportedtype");
            break;
        }
      };
      return a;
    })();
    f.exports = a;
  },
  34
);
__d(
  "MqttPublishListener",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      NOT_CONNECTED: "NOT_CONNECTED",
      PUBLISH_ERROR: "PUBLISH_ERROR",
      QUEUED: "QUEUED",
      SENT: "SENT",
      ACKED: "ACKED",
      NOT_ACKED: "NOT_ACKED",
    });
    f.MqttPublishEvent = a;
  },
  66
);
__d(
  "MqttUserName",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, d, e, f, g, h, i) {
        h === void 0 && (h = null),
          i === void 0 && (i = ""),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = d),
          (this.$4 = e),
          (this.$5 = f),
          (this.$6 = g),
          (this.$7 = c("gkx")("1166607")
            ? !1
            : typeof document === "object" &&
              document &&
              document.hasFocus &&
              document.hasFocus()),
          (this.$8 = h),
          (this.$9 = i);
      }
      var b = a.prototype;
      b.gen = function (a, b, d, e) {
        e === void 0 && (e = []);
        var f = c("gkx")("1166607") ? !1 : this.$7;
        a = {
          u: this.$1,
          s: a,
          cp: this.$3,
          ecp: this.$2,
          chat_on: this.$6,
          fg: f,
          d: this.$4,
          ct: "websocket",
          mqtt_sid: "",
          aid: this.$5,
          st: b,
          pm: d,
          dc: "",
          no_auto_fg: !0,
          gas: this.$8,
          pack: e,
          php_override: this.$9,
        };
        return JSON.stringify(a);
      };
      b.setForegroundState = function (a) {
        this.$7 = a;
      };
      b.setChatVisibility = function (a) {
        this.$6 = a;
      };
      b.getEndpointCapabilities = function () {
        return this.$2;
      };
      b.getDeviceId = function () {
        return this.$4;
      };
      b.setEndpointCapabilities = function (a) {
        this.$2 = a;
      };
      b.getIsGuestAuthStringPresent = function () {
        return this.$8 !== null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttConnection",
  [
    "MqttConnectionHookCollection",
    "MqttEnv",
    "MqttProtocolClient",
    "MqttPublishListener",
    "MqttTypes",
    "MqttUserName",
    "MqttUtils",
    "Promise",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 10,
      i = "publish",
      j = "subscribe",
      k = "unsubscribe",
      l = "/rtc_multi",
      m = function (a) {},
      n = 18e4,
      o = 5 * 1e3,
      p = 15,
      q = 21;
    a = (function () {
      function a() {
        var a = this;
        this.$36 = function () {
          return a.$18;
        };
        this.$37 = function () {
          return a.$19;
        };
        this.$8 = !1;
        this.$10 = d("MqttEnv").Env.getLoggerInstance();
        this.$11 = "Disconnected";
        this.$15 = new Set();
        this.$21 = new Map();
        this.$12 = 0;
        this.$13 = 0;
        this.$14 = 0;
        this.$8 = !1;
        this.$5 = "";
        this.$6 = new (c("MqttUserName"))("", 0, 1, "", 0, !0);
        this.$9 = 0;
        this.$16 = 0;
        this.$17 = !1;
        this.$7 = null;
        var b = function () {};
        this.$1 = b;
        this.$2 = b;
        this.$3 = b;
        this.$22 = !1;
        this.$23 = !1;
        this.$24 = new (c("MqttConnectionHookCollection"))();
        this.$4 = function () {
          return [];
        };
        this.$18 = h;
        this.$19 = h;
        this.$20 = !1;
      }
      var e = a.prototype;
      e.run = function (a) {
        var b = this,
          d = a.onStateChange,
          e = a.onJSError,
          f = a.onMessageReceived,
          g = a.endpoint,
          i = a.mqttUserName,
          j = a.subscribedTopics;
        a = a.extraConnectMessageProvider;
        if (this.$8) {
          this.$10.debugTrace("run", "Run called while in running state.");
          return;
        }
        this.$1 = d;
        this.$3 = f;
        this.$5 = g;
        this.$6 = i;
        this.$8 = !0;
        this.$12 = 0;
        this.$13 = 0;
        this.$2 = e || m;
        j &&
          j.forEach(function (a) {
            return b.$15.add(a);
          });
        this.$4 = a;
        this.$18 = (d = c("qex")._("523")) != null ? d : h;
        this.$19 = (f = c("qex")._("524")) != null ? f : h;
        this.$25();
        this.$26();
      };
      e.shutdown = function () {
        this.$27(),
          this.$28("shutdown"),
          (this.$8 = !1),
          this.$10.debugTrace("shutdown", "Shutdown");
      };
      e.subscribe = function (a) {
        this.$15.add(a);
        this.ensureConnected(j) && this.$29(a);
        return !0;
      };
      e.publish = function (a, e, f, g) {
        if (!this.$20 && a == l) {
          var h;
          this.$20 = !0;
          this.$18 = (h = c("qex")._("166")) != null ? h : this.$19;
          this.$19 = (h = c("qex")._("337")) != null ? h : this.$19;
        }
        var j = { resolve: function () {}, reject: function (a) {} };
        g != null && (j.listener = g);
        h = new (b("Promise"))(function (a, b) {
          (j.resolve = a), (j.reject = b);
        });
        var k = this.ensureConnected(i);
        !k
          ? (g == null
              ? void 0
              : g.onEvent(
                  d("MqttPublishListener").MqttPublishEvent.NOT_CONNECTED
                ),
            j.reject(new Error("Client disconnected")))
          : this.$30(a, e, f, j);
        return h;
      };
      e.unsubscribe = function (a) {
        this.$15["delete"](a);
        this.ensureConnected(k) && this.$31(a);
        return !0;
      };
      e.addHook = function (a) {
        this.$24.addHook(a);
      };
      e.removeHook = function (a) {
        this.$24.removeHook(a);
      };
      e.isRunning = function () {
        return this.$8;
      };
      e.getSessionId = function () {
        return this.$9;
      };
      e.hasFatal = function () {
        return this.$22;
      };
      e.hasConnectSuccess = function () {
        return this.$23;
      };
      e.canPublish = function () {
        return this.ensureConnected("canPublish");
      };
      e.ensureConnected = function (a) {
        return !this.$8 || this.$7 == null || !this.$7.isConnected() ? !1 : !0;
      };
      e.connectionState = function () {
        return this.$11;
      };
      e.mqttStateFromConnectionState = function (a) {
        switch (a) {
          case "Connecting":
          case "TransportConnected":
            return "Connecting";
          case "Connected":
            return "Connected";
          case "Disconnected":
            return "Disconnected";
        }
        throw new Error("Unknown state " + a);
      };
      e.testOnlyGetSubscribedTopics = function () {
        return this.$15;
      };
      e.$25 = function () {
        var a = this;
        typeof window !== "undefined" &&
          window.addEventListener("unload", function (b) {
            return a.$32(b);
          });
      };
      e.$32 = function (a) {
        this.publish("/browser_close", "{}", 0);
      };
      e.$27 = function () {
        this.$8 &&
          this.$7 != null &&
          (this.$33("Disconnected"),
          this.$7 != null && this.$7.disconnect(),
          (this.$7 = null));
      };
      e.$34 = function (a) {
        if (
          this.$11 === "Connected" &&
          a === "Disconnected" &&
          this.$16 === 0
        ) {
          this.$16 = Date.now();
          return;
        }
        if (a === "Connecting" && this.$16 !== 0 && !this.$17) {
          this.$10.bumpCounter("protocol.reconnectstarted");
          this.$17 = !0;
          return;
        }
        if (a === "Connected" && this.$16 !== 0) {
          a = Date.now() - this.$16;
          switch (Math.floor(a / 3e4)) {
            case 0:
              this.$10.bumpCounter("protocol.reconnectedwithin30s");
              break;
            case 1:
              this.$10.bumpCounter("protocol.reconnectedwithin60s");
              break;
            case 2:
              this.$10.bumpCounter("protocol.reconnectedwithin90s");
              break;
            case 3:
              this.$10.bumpCounter("protocol.reconnectedwithin120s");
              break;
            default:
              this.$10.bumpCounter("protocol.reconnectedmorethan120s");
              break;
          }
          this.$16 = 0;
          this.$17 = !1;
          return;
        }
      };
      e.$33 = function (a) {
        a !== this.$11 && (this.$34(a), (this.$11 = a), this.$1(a));
      };
      e.$26 = function () {
        var a = this;
        if (!this.$8) return;
        this.$33("Connecting");
        var b = Date.now();
        this.$9 = c("MqttUtils").generateSessionId();
        var e = Array.from(this.$15),
          f = c("MqttUtils").endpointWithSessionId(this.$5, this.$9);
        f = c("MqttUtils").endpointWithExtraParameter(
          f,
          "cid",
          this.$6.getDeviceId()
        );
        try {
          this.$7 = new (c("MqttProtocolClient"))(f);
          var g = this.$35(),
            h = g.map(function (a) {
              return a.topic;
            });
          f = this.$6.gen(this.$9, e, g);
          this.$7 != null &&
            ((this.$13 += 1),
            this.$7.connect({
              userName: f,
              mqttVersion: 3,
              getKeepAliveIntervalSeconds: this.$36,
              getKeepAliveTimeoutSeconds: this.$37,
              ignoreSubProtocol: !0,
              onConnectFailure: function (c) {
                return a.$38(c, b, e, h);
              },
              onConnectSuccess: function () {
                return a.$39(b, e, h);
              },
              onConnection: function () {
                return a.$40(g, e);
              },
              onConnectionError: function (b) {
                return a.$41(b);
              },
              onConnectionLost: function (b) {
                return a.$42(b);
              },
              onMessageArrived: function (b, c, d) {
                return a.$43(b, c, d);
              },
              onMessageDelivered: function (b, c) {
                return a.$44(b, c);
              },
            }),
            this.$10.bumpCounter("protocol.connectattempt"),
            this.$24.onConnectAttempt(),
            this.$6.getIsGuestAuthStringPresent() &&
              this.$10.bumpCounter("guestAuthentication.connectattempt"));
        } catch (a) {
          this.$10.bumpCounter("js_error_in_init_exception"),
            this.$33("Disconnected"),
            this.$45(!1, !1, b, e, [], 14, a.message),
            a && this.$10.logErrorWarn(a, "ws_js_error"),
            this.$24.onWSFatal(),
            this.$46(
              new (d("MqttTypes").MqttChannelError)(!1, "ws_js_error", a),
              "client_init"
            );
        }
      };
      e.$35 = function () {
        var a = this.$4(),
          b = 65536;
        a = a.map(function (a) {
          a.messageId = b--;
          return a;
        });
        return a;
      };
      e.$29 = function (a) {
        try {
          if (this.$7 != null) {
            this.$7.subscribe(a);
            this.$10.debugTrace("_doSubscribe", "Subscribing to " + a);
            this.$24.onSubscribe(a);
            this.$10.bumpCounter("protocol.subscribe");
            return !0;
          }
        } catch (b) {
          this.$10.logError(b, "Exception subscribing"),
            this.$10.bumpCounter("subscribe_exception." + a),
            this.$10.bumpCounter("protocol.subscribe.error");
        }
        return !1;
      };
      e.$31 = function (a) {
        try {
          if (this.$7 != null) {
            this.$7.unsubscribe(a);
            this.$10.debugTrace("_doUnsubscribe", "Unsubscribing to " + a);
            this.$24.onUnsubscribe(a);
            this.$10.bumpCounter("protocol.unsubscribe");
            return !0;
          }
        } catch (b) {
          this.$10.logError(b, "Exception unsubscribing"),
            this.$10.bumpCounter("unsubscribe_exception." + a),
            this.$10.bumpCounter("protocol.unsubscribe.error");
        }
        return !1;
      };
      e.$30 = function (a, b, c, e) {
        if (this.$7 != null)
          try {
            b = this.$7.publish(a, b, c);
            this.$10.bumpCounter("protocol.publish");
            var f = b != null ? b : "null";
            this.$10.debugTrace(
              "_doPublish",
              "publish " + a + " with messageId:" + f + " qos:" + c
            );
            this.$24.onPublish(a);
            (f = e.listener) == null
              ? void 0
              : f.onEvent(d("MqttPublishListener").MqttPublishEvent.SENT);
            b != null ? this.$21.set(b, e) : e.resolve();
            return !0;
          } catch (b) {
            this.$10.logError(b, "Exception publishing");
            this.$10.bumpCounter("publish_exception." + a);
            e.reject(b);
            this.$10.bumpCounter("protocol.publish.error");
            return !1;
          }
        else return !1;
      };
      e.$47 = function (a) {
        var b = this;
        a === void 0 && (a = null);
        if (!this.$8) return;
        this.$27();
        this.$28("reconnect");
        this.$48();
        this.$9 = -1;
        this.$14 = 0;
        a =
          a != null
            ? a
            : Math.pow(2, Math.min(this.$12, 6)) *
              (1e3 + d("MqttEnv").Env.random() * 200);
        this.$10.debugTrace("_scheduleReconnect", "Reconnect in " + a + " ms");
        d("MqttEnv").Env.setTimeout(function () {
          b.$26();
        }, a);
        this.$12 += 1;
      };
      e.$48 = function () {
        var a = Date.now() - this.$14,
          b = this.$14 !== 0 && a > o,
          c = this.$12 > p;
        (b || c) && (this.$12 = 0);
        this.$14 !== 0 && a <= o && this.$10.bumpCounter("short_lived_session");
        c && this.$10.bumpCounter("connection_attempt_limit");
      };
      e.$45 = function (a, b, c, d, e, f, g) {
        this.$10.eventLogConnect({
          sessionID: this.$9,
          connectionStatus: a,
          connectionState: this.mqttStateFromConnectionState(this.$11),
          ackReceived: b,
          duration: Date.now() - c,
          hostname: this.$5,
          attemptNumber: this.$13,
          subscribedTopics: d,
          publishes: e,
          errorCode: f,
          errorMessage: g,
        }),
          a && (this.$13 = 0);
      };
      e.$38 = function (a, b, c, d) {
        var e = a.mqttError,
          f = e.errorMessage;
        this.$10.debugTrace("connect", "Connect failed " + f);
        this.$10.bumpCounter("protocol.onconnectfailure");
        this.$24.onConnectFailure();
        this.$6.getIsGuestAuthStringPresent() &&
          this.$10.bumpCounter("guestAuthentication.onconnectfailure");
        this.$45(!1, a.connAck != -1, b, c, d, e.errorCode, f);
        if (a.connAck != null) {
          this.$10.bumpCounter("protocol.connect_failure." + a.connAck);
          if (a.connAck === q) {
            this.$47(n);
            return;
          }
        }
        this.$47();
      };
      e.$40 = function (a, b) {
        var c = this;
        this.$10.bumpCounter("protocol.onconnection");
        this.$10.debugTrace("Connect", "Socket established");
        this.$24.onConnected();
        this.$6.getIsGuestAuthStringPresent() &&
          this.$10.bumpCounter("guestAuthentication.onconnection");
        b.forEach(function (a) {
          c.$24.onSubscribe(a);
        });
        a.forEach(function (a) {
          c.$24.onPublish(a.topic);
        });
        this.$33("TransportConnected");
      };
      e.$39 = function (a, b, c) {
        this.$10.bumpCounter("protocol.onconnectsuccess"),
          this.$10.debugTrace("connect", "Connect success"),
          this.$6.getIsGuestAuthStringPresent() &&
            this.$10.bumpCounter("guestAuthentication.onconnectsucess"),
          this.$24.onConnectSuccess(),
          (this.$23 = !0),
          this.$33("Connected"),
          this.$45(!0, !0, a, b, c),
          this.$49(b),
          (this.$14 = Date.now());
      };
      e.$42 = function (a) {
        this.$10.bumpCounter("protocol.onconnectionlost"),
          a.errorCode &&
            this.$10.eventLogDisconnect({
              sessionID: this.$9,
              errorCode: a.errorCode,
              errorMessage: a.errorMessage,
              duration: Date.now() - this.$14,
            }),
          this.$10.debugTrace("connect", "connection lost"),
          this.$24.onConnectionLost(),
          this.$6.getIsGuestAuthStringPresent() &&
            this.$10.bumpCounter("guestAuthentication.onconnectionlost"),
          this.$47();
      };
      e.$41 = function (a) {};
      e.$43 = function (a, b, c) {
        this.$10.bumpCounter("protocol.onmessagearrived");
        this.$6.getIsGuestAuthStringPresent() &&
          this.$10.bumpCounter("guestAuthentication.onmessagearrived");
        this.$10.debugTrace("onMessageArrived", "Message received on " + a);
        this.$24.onMessage(a);
        try {
          this.$3(a, b, c);
        } catch (b) {
          this.$10.logError(b, "Listener threw error"),
            this.$10.bumpCounter("listener_error." + a);
        }
      };
      e.$44 = function (a, b) {
        this.$10.bumpCounter("protocol.onmessagedelivered");
        a = b != null ? b : "null";
        this.$10.debugTrace(
          "onMessageDelivered",
          "Delivered Message {ID: " + a + "}"
        );
        if (b == null) return;
        a = this.$21.get(b);
        if (a == null) {
          this.$10.bumpCounter("protocol.message_with_unknown_id");
          return;
        }
        this.$21["delete"](b);
        (b = a.listener) == null
          ? void 0
          : b.onEvent(d("MqttPublishListener").MqttPublishEvent.ACKED);
        a.resolve();
      };
      e.$28 = function (a) {
        this.$10.bumpCounter("protocol.fail_all_unacked_publishes." + a),
          this.$21.forEach(function (b, c, e) {
            (c = b.listener) == null
              ? void 0
              : c.onEvent(d("MqttPublishListener").MqttPublishEvent.NOT_ACKED);
            b.reject(new Error(a));
          }),
          this.$21.clear();
      };
      e.$49 = function (a) {
        var b = this,
          c = new Set(a);
        c.forEach(function (a) {
          b.$15.has(a) || b.unsubscribe(a);
        });
        a = new Set(this.$15);
        a.forEach(function (a) {
          c.has(a) || b.subscribe(a);
        });
      };
      e.$46 = function (a, b) {
        try {
          this.$10.bumpCounter("js_error_in_init");
          this.$10.bumpCounter(b + ".error");
          this.$22 = !0;
          var c = a ? a.message : "error";
          this.$10.debugTrace("onError", b + ": " + c);
          this.$2(a);
        } catch (a) {
          this.$10.bumpCounter("js_error_in_error_logging"),
            this.$10.logError(a, "JS error while trying to log previous error");
        }
      };
      return a;
    })();
    f.exports = a;
  },
  34
);
__d(
  "isFastRefreshEnabledForCurrentDomain",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "MqttChannel",
  [
    "ChannelClientID",
    "IrisSubscribeChecker",
    "MqttAnalyticsHook",
    "MqttConnection",
    "MqttEnv",
    "MqttPublishListener",
    "MqttPublishTimeoutConfig",
    "MqttUserName",
    "MqttUtils",
    "Promise",
    "isFastRefreshEnabledForCurrentDomain",
    "promiseDone",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env,
      h = b("MqttEnv").MqttGkNames,
      i = b("MqttPublishListener").MqttPublishEvent,
      j = b("MqttPublishTimeoutConfig").mqttPublishTimeoutMs || 60 * 1e3;
    a = (function () {
      function a(a) {
        var c = this,
          d = a.endpoint,
          e = a.pollingEndpoint,
          f = a.userFbid,
          h = a.appId,
          i = a.initialSubscribedTopics,
          j = a.capabilities,
          k = a.clientCapabilities,
          l = a.chatVisibility;
        l = l === void 0 ? !0 : l;
        var m = a.guestAuthString;
        m = m === void 0 ? null : m;
        a = a.phpOverride;
        a = a === void 0 ? "" : a;
        this.$10 = g.getLoggerInstance();
        this.$10.setAppId(h);
        this.$11 = new (b("MqttUserName"))(
          f,
          j,
          k,
          b("ChannelClientID").getID(),
          h,
          l,
          m,
          a
        );
        this.$1 = d;
        this.$2 = e;
        this.$5 = "Disconnected";
        this.$7 = "LPInactive";
        this.$6 = "Disconnected";
        this.$3 = [];
        this.$4 = new Set();
        this.$8 = new Map();
        this.$9 = new (b("MqttConnection"))();
        this.$12 = null;
        this.$15 = new (b("MqttAnalyticsHook"))();
        this.$14 = new Map();
        this.$13 = [];
        if (
          !g.isUserLoggedInNow() &&
          !b("isFastRefreshEnabledForCurrentDomain")() &&
          (m == null || m == "")
        ) {
          this.$10.bumpCounter("logged_out_init");
          return;
        }
        this.$9.addHook(this.$15);
        this.$9.addHook(
          new (b("IrisSubscribeChecker"))(function () {
            return c.$4.size > 0;
          })
        );
        this.$16(i);
        this.$17();
        this.$10.logIfLoggedOut();
      }
      var c = a.prototype;
      c.$16 = function (a) {
        var c = this;
        if (this.$9.isRunning()) {
          this.$18("run", "Connection started calling run again");
          return;
        }
        if (g.genGk(h.mqtt_ws_polling_enabled)) {
          var d = g.killswitch("MQTT_WS_FORCE_LONG_POLLING");
          if (d) {
            this.$18(
              "MqttChannel",
              "Websocket disabled, will do long polling only"
            );
            return;
          } else if (!b("MqttUtils").hasWSSupport()) {
            this.$18(
              "MqttChannel",
              "Websocket Unavailable, will do long polling only"
            );
            this.$10.bumpCounter("ws_unavailable_polling");
            return;
          }
        }
        this.$9.run({
          onStateChange: function (a) {
            c.$19(a);
          },
          onJSError: function (a) {
            c.$20(a);
          },
          onMessageReceived: function (a, b, d) {
            c.$21(a, b, d);
          },
          endpoint: this.$1,
          mqttUserName: this.$11,
          subscribedTopics: a,
          extraConnectMessageProvider: function () {
            return c.$22();
          },
        });
      };
      c.shutdown = function () {
        this.$9 && this.$9.shutdown();
      };
      c.publish = function (a, c, d) {
        d === void 0 && (d = { qos: 1, skipBuffer: !1 });
        var e;
        d.qos === 0
          ? (e = this.$23(a, c, d.listener))
          : (e = this.$24(a, c, d));
        b("MqttUtils").promiseDone(
          e,
          function () {},
          function (a) {
            (a = d.listener) == null ? void 0 : a.onEvent(i.PUBLISH_ERROR);
          }
        );
        return e;
      };
      c.$23 = function (a, b, c) {
        return this.$25(a, b, 0, c);
      };
      c.$24 = function (a, c, d) {
        var e = { resolve: function () {}, reject: function (a) {} },
          f = new (b("Promise"))(function (a, b) {
            (e.resolve = a), (e.reject = b);
          }),
          h = g.random();
        a = {
          topic: a,
          payload: c,
          options: d,
          ack: e,
          publishToken: h,
          timeoutId: null,
        };
        if (d.skipBuffer)
          if (this.$9.connectionState() === "Connecting") {
            this.$13.push(a);
            (c = d.listener) == null ? void 0 : c.onEvent(i.QUEUED);
          } else this.$26(a);
        else {
          a.timeoutId = this.$27(h);
          this.$14.set(h, a);
          (c = d.listener) == null ? void 0 : c.onEvent(i.QUEUED);
          this.$28(a);
        }
        return f;
      };
      c.$26 = function (a) {
        b("MqttUtils").promiseDone(
          this.$25(a.topic, a.payload, a.options.qos, a.options.listener),
          function () {
            a.ack.resolve();
          },
          function (b) {
            a.ack.reject(b);
          }
        );
      };
      c.$28 = function (a) {
        var c = this;
        b("MqttUtils").promiseDone(
          this.$25(a.topic, a.payload, a.options.qos, a.options.listener),
          function () {
            return c.$29(a);
          },
          function (a) {}
        );
      };
      c.$25 = function (a, c, d, e) {
        var f = this,
          g,
          h,
          j = this.getConnectionState(),
          k = Date.now();
        !this.$9.canPublish() && this.$12 && this.$12.canPublish()
          ? ((g = this.$12.publish(a, c, d)),
            (h = "lp"),
            e != null &&
              (g = g.then(function () {
                return e.onEvent(i.SENT);
              })),
            this.$10.bumpCounter("try_publish_lp"))
          : ((g = this.$9.publish(a, c, d, e)),
            (h = "ws"),
            this.$10.bumpCounter("try_publish_ws"));
        b("promiseDone")(
          g,
          function () {
            f.$10.eventLogOutgoingPublish({
              sessionID: f.$9.getSessionId(),
              topic: a,
              qos: d,
              payloadSizeBytes: c.length * 2,
              success: !0,
              protocol: h,
              errorMessage: null,
              connectionState: j,
              startTime: k,
            });
          },
          function (b) {
            f.$10.eventLogOutgoingPublish({
              sessionID: f.$9.getSessionId(),
              topic: a,
              qos: d,
              payloadSizeBytes: c.length * 2,
              success: !1,
              protocol: h,
              errorMessage: b.toString(),
              connectionState: j,
              startTime: k,
            });
          }
        );
        return g;
      };
      c.subscribe = function (a, b) {
        var c = this;
        this.$9.subscribe(a);
        var d = this.$8.get(a);
        !d ? ((d = [b]), this.$8.set(a, d)) : d.push(b);
        return function () {
          var d = c.$8.get(a) || [];
          d = d.filter(function (a) {
            return a !== b;
          });
          c.$8.set(a, d);
          d.length === 0 && c.unsubscribeAll(a);
        };
      };
      c.subscribeChannelEvents = function (a) {
        this.$3.push(a);
      };
      c.unsubscribeChannelEvents = function (a) {
        a = this.$3.indexOf(a);
        a > -1 && this.$3.splice(a, 1);
      };
      c.registerExtraConnectPayloadProvider = function (a) {
        var b = this;
        this.$18("MqttChannel", "registerExtraConnectPayloadProvider called");
        this.$4.add(a);
        if (this.$9.isRunning()) {
          a = a.getPublishMessages();
          a.forEach(function (a) {
            b.publish(a.topic, a.payload, { qos: a.qos, skipBuffer: !0 });
          });
        }
      };
      c.unregisterExtraConnectPayloadProvider = function (a) {
        this.$4["delete"](a);
      };
      c.unsubscribeAll = function (a) {
        this.$9.unsubscribe(a), this.$8["delete"](a);
      };
      c.getConnectionState = function () {
        return this.$5;
      };
      c.getLongPollingStatus = function () {
        return this.$7;
      };
      c.getEndpoint = function () {
        return this.$1;
      };
      c.addHook = function (a) {
        this.$9.addHook(a);
      };
      c.removeHook = function (a) {
        this.$9.removeHook(a);
      };
      c.testOnlyMessageReceived = function (a, b) {
        this.$21(a, b, -1);
      };
      c.$30 = function (a) {
        var b = this.$14.get(a);
        b != null && b.timeoutId != null && g.clearTimeout(b.timeoutId);
        this.$14["delete"](a);
      };
      c.$27 = function (a) {
        var b = this;
        a = g.setTimeout(
          function (a) {
            var c = b.$14.get(a);
            if (!c) return;
            var d = c.topic;
            b.$10.bumpCounter("publish_timeout." + d);
            b.$10.debugTrace(
              "publish_timeout",
              "Timeout publishing topic: " + d + " publishToken: " + a
            );
            b.$10.eventLogPublishTimeout({ topic: d });
            b.$30(a);
            c.ack.reject(new Error("Publish Timed Out"));
          },
          j,
          a
        );
        return a;
      };
      c.$29 = function (a) {
        var b = a.publishToken,
          c = this.$14.get(b);
        if (!c) return;
        this.$30(b);
        a.ack.resolve();
        this.$10.debugTrace(
          "publish_success",
          "Topic: " + a.topic + " publishToken: " + a.publishToken
        );
        this.$10.bumpCounter("publish_success." + a.topic);
      };
      c.$21 = function (a, b, c) {
        var d = this.$8.get(a);
        this.$10.eventLogIncomingPublish({
          sessionID: this.$9.getSessionId(),
          topic: a,
          connectionState: this.getConnectionState(),
          qos: c,
          payloadSizeBytes: b.length * 2,
        });
        if (!d)
          this.$10.debugTrace(
            "_onMessageReceived",
            a + " being dropped, no listeners"
          );
        else
          for (
            var c = d,
              a = Array.isArray(c),
              d = 0,
              c = a
                ? c
                : c[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var e;
            if (a) {
              if (d >= c.length) break;
              e = c[d++];
            } else {
              d = c.next();
              if (d.done) break;
              e = d.value;
            }
            e = e;
            try {
              e(b);
            } catch (a) {
              this.$10.logError(a, "Listener exception"),
                this.$10.bumpCounter("listener_error");
            }
          }
      };
      c.$20 = function (a) {
        if (g.genGk(h.mqtt_ws_polling_enabled)) {
          a.isRecoverable
            ? this.$10.bumpCounter("recoverable_error_skipped")
            : this.$10.bumpCounter("unrecoverable_error_skipped");
          return;
        }
        a.isRecoverable
          ? this.$10.bumpCounter("recoverable_error_not_skipped")
          : this.$10.bumpCounter("unrecoverable_error_not_skipped");
        this.$31(a);
      };
      c.$32 = function (a) {
        this.$31(a);
      };
      c.$31 = function (a) {
        for (
          var b = this.$3,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e.onJSError && e.onJSError(a);
        }
      };
      c.$33 = function () {
        var a = this;
        this.$13.forEach(function (b) {
          a.$26(b);
        });
        this.$13 = [];
        this.$14.forEach(function (b, c, d) {
          a.$28(b);
        });
      };
      c.$19 = function (a) {
        a === "Connecting"
          ? (this.$13.forEach(function (a) {
              a.ack.reject(new Error("Client Reconnecting"));
            }),
            (this.$13 = []))
          : a === "TransportConnected" && this.$33(),
          this.$18("_changeState", "Connection state = " + a),
          this.$34(a, this.$7);
      };
      c.$35 = function (a, b) {
        this.$12 && this.$12.canPublish() && this.$33(),
          this.$18(
            "_changeLPStatus",
            "LP status = " + a + ", LP Request status = " + b
          ),
          this.$34(this.$6, a);
      };
      c.$34 = function (a, b) {
        var c = this.$9.mqttStateFromConnectionState(a);
        this.$12 && this.$12.canPublish() && (c = "Connected");
        this.$6 = a;
        (c !== this.$5 || b != this.$7) &&
          ((this.$5 = c), (this.$7 = b), this.$36(c));
      };
      c.$36 = function (a) {
        for (
          var b = this.$3,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e.onMQTTStateChanged(a);
        }
      };
      c.$22 = function () {
        var a = this,
          b = [];
        this.$4.forEach(function (c) {
          try {
            c = c.getPublishMessages();
            Array.prototype.push.apply(b, c);
          } catch (b) {
            a.$10.logError(b, "ConnectPayload provider exception"),
              a.$10.bumpCounter("connectPayloadProvider_error");
          }
        });
        return b;
      };
      c.$17 = function () {
        var a = this;
        g.genGk(h.mqtt_ws_polling_enabled) &&
          this.$2 &&
          this.$2 != "" &&
          b("requireDeferred")("MqttLongPollingRunner")
            .__setRef("MqttChannel")
            .onReady(function (b) {
              b = new b(
                a.$2,
                a.$11,
                a.$9.hasFatal(),
                a.$9.hasConnectSuccess(),
                function (b, c, d) {
                  return a.$21(b, c, d);
                },
                function () {
                  return Array.from(a.$8.keys());
                },
                function () {
                  return a.$22();
                },
                function (b) {
                  a.$32(b);
                },
                function (b, c) {
                  a.$35(b, c);
                }
              );
              b.start();
              a.$9.addHook(b);
              b.addHook(a.$15);
              a.$12 = b;
              a.$10.debugTrace("MqttChannel", "longPollingRunner loaded");
            });
      };
      c.$18 = function (a, b) {
        this.$10.debugTrace(a, "Mqtt channel: " + b);
      };
      c.setForegroundState = function (a) {
        this.$11 && this.$11.setForegroundState(a);
      };
      c.setChatVisibility = function (a) {
        this.$11 && this.$11.setChatVisibility(a);
      };
      c.getEndpointCapabilities = function () {
        return this.$11.getEndpointCapabilities();
      };
      c.setEndpointCapabilities = function (a) {
        this.$11.setEndpointCapabilities(a);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "MqttUnifiedClientConnectFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744057");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_connect", a);
    e.exports = c;
  },
  null
);
__d(
  "MqttUnifiedClientDisconnectFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744058");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_disconnect", a);
    e.exports = c;
  },
  null
);
__d(
  "MqttUnifiedClientIncomingPublishFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744059");
    c = b("FalcoLoggerInternal").create(
      "mqtt_unified_client_incoming_publish",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "MqttUnifiedClientOutgoingPublishFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744060");
    c = b("FalcoLoggerInternal").create(
      "mqtt_unified_client_outgoing_publish",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "MqttWsClientTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:MqttWsClientLoggerConfig");
  },
  null
);
__d(
  "MqttLogger",
  [
    "ChannelClientID",
    "FBLogger",
    "Log",
    "LogHistory",
    "MqttEnv",
    "MqttUnifiedClientConnectFalcoEvent",
    "MqttUnifiedClientDisconnectFalcoEvent",
    "MqttUnifiedClientIncomingPublishFalcoEvent",
    "MqttUnifiedClientOutgoingPublishFalcoEvent",
    "MqttUtils",
    "MqttWsClientTypedLoggerLite",
    "ODS",
    "Random",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "mqtt_client",
      i = 100,
      j = 5e3,
      k = null,
      l = {
        CONNECT: "mqtt_client_connect",
        DISCONNECT: "mqtt_client_disconnect",
        PUBLISH: "mqtt_client_publish",
        CLIENT_ERROR: "mqtt_client_error",
        PUBLISH_TIMEOUT: "mqtt_qos1_publish_timeout",
        SOCKET_DISCONNECT: "mqtt_protocol_error",
      },
      m = {
        CONNECT: "connect",
        DISCONNECT: "disconnect",
        OUTGOING_PUBLISH: "outgoing_publish",
        INCOMING_PUBLISH: "incoming_publish",
      };
    a = (function () {
      a.getInstance = function () {
        k || (k = new a());
        return k;
      };
      function a() {
        (this.$1 = d("LogHistory").getInstance(h)),
          (this.$2 = 0),
          (this.$3 = c("gkx")("778292")),
          (this.$4 = Date.now()),
          (this.$5 = c("ChannelClientID").getID());
      }
      var b = a.prototype;
      b.setAppId = function (a) {
        this.$2 === 0 && (this.$2 = a);
      };
      b.eventLogConnect = function (a) {
        var b = a.sessionID,
          e = a.connectionStatus,
          f = a.connectionState,
          g = a.ackReceived,
          h = a.duration,
          i = a.hostname,
          j = a.attemptNumber,
          k = a.subscribedTopics,
          n = a.publishes,
          o = a.errorCode;
        a = a.errorMessage;
        var p = e ? "success" : "failed";
        this.bumpCounter(l.CONNECT + "." + p);
        p = {
          device_id: this.$5,
          session_id: b,
          logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
          href: window.location.hostname,
          connection_status: e,
          duration: h,
          hostname: i,
          feature_availability: c("MqttUtils").getWSAvailability(),
          attempt_number: j,
          subscribed_topics: k,
          publishes: n,
          error_code: o,
          error_message: a,
        };
        var q = {
          event_type: m.CONNECT,
          acked: g,
          attempt_number: j.toString(),
          connection_state: f,
          client_type: "WEBSOCKET",
          duration: h.toString(),
          error: a,
          session_id: b.toString(),
        };
        this.$6(l.CONNECT, p);
        this.$7(function () {
          c("MqttUnifiedClientConnectFalcoEvent").log(function () {
            return q;
          });
        });
      };
      b.eventLogPull = function (a) {
        var b = a.pullEventName,
          c = a.sessionID,
          e = a.status,
          f = a.duration,
          g = a.hostname;
        a = a.errorMessage;
        c = {
          device_id: this.$5,
          session_id: c,
          logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
          href: window.location.hostname,
          connection_status: e,
          duration: f,
          hostname: g,
          error_message: a,
        };
        this.$6(b, c);
      };
      b.eventLogPullFinish = function (a) {
        var b = a.pullEventName,
          c = a.sessionID,
          e = a.duration,
          f = a.errorMessage,
          g = a.publishReceived;
        a = a.publishSent;
        c = {
          device_id: this.$5,
          session_id: c,
          logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
          href: window.location.hostname,
          duration: e,
          error_message: f,
          publish_received: g,
          publish_sent: a,
        };
        this.$6(b, c);
      };
      b.eventLogDisconnect = function (a) {
        var b = a.sessionID,
          d = a.errorCode,
          e = a.errorMessage;
        a = a.duration;
        this.bumpCounter(l.DISCONNECT);
        d = {
          device_id: this.$5,
          session_id: b,
          href: window.location.hostname,
          duration: a,
          error_code: d,
          error_message: e,
        };
        var f = {
          event_type: m.DISCONNECT,
          connection_state: "Disconnected",
          client_type: "WEBSOCKET",
          duration: a.toString(),
          error: e,
          session_id: b.toString(),
        };
        this.$6(l.DISCONNECT, d);
        this.$7(function () {
          c("MqttUnifiedClientDisconnectFalcoEvent").log(function () {
            return f;
          });
        });
      };
      b.eventLogOutgoingPublish = function (a) {
        var b = a.sessionID,
          e = a.topic,
          f = a.qos,
          g = a.payloadSizeBytes,
          h = a.success,
          i = a.protocol,
          k = a.errorMessage,
          n = a.connectionState;
        a = a.startTime;
        this.bumpCounter(l.PUBLISH + "." + e);
        i = {
          device_id: this.$5,
          href: window.location.hostname,
          topic: e,
          qos: f,
          payload_size_bytes: g,
          success: h ? 1 : 0,
          protocol: i,
          error_message: k,
        };
        var o = {
          event_type: m.OUTGOING_PUBLISH,
          session_id: b.toString(),
          topic: e,
          client_type: "WEBSOCKET",
          connection_state: n,
          qos: f.toString(),
          acked: f == 1 ? h : null,
          duration: (Date.now() - a).toString(),
          error: k,
          payload_size: g.toString(),
        };
        d("Random").coinflip(j) && this.$6(l.PUBLISH, i, j);
        this.$7(function () {
          c("MqttUnifiedClientOutgoingPublishFalcoEvent").log(function () {
            return o;
          });
        });
      };
      b.eventLogIncomingPublish = function (a) {
        var b = a.sessionID,
          d = a.topic,
          e = a.connectionState,
          f = a.qos;
        a = a.payloadSizeBytes;
        var g = {
          event_type: m.INCOMING_PUBLISH,
          session_id: b.toString(),
          topic: d,
          client_type: "WEBSOCKET",
          connection_state: e,
          qos: f.toString(),
          payload_size: a.toString(),
        };
        b = d == "/webrtc" || d == "/rtc_multi";
        this.$8(
          function () {
            c("MqttUnifiedClientIncomingPublishFalcoEvent").log(function () {
              return g;
            });
          },
          20,
          b
        );
      };
      b.logError = function (a, b) {
        var e = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          try {
            c("FBLogger")(h).catching(a).mustfix(b);
          } catch (a) {}
        });
      };
      b.eventLogPublishTimeout = function (a) {
        a = a.topic;
        a = { device_id: this.$5, href: window.location.hostname, topic: a };
        this.$6(l.PUBLISH_TIMEOUT, a);
      };
      b.eventLogMiscellaneousError = function (a) {
        a = a.errorMessage;
        a = {
          device_id: this.$5,
          logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
          href: window.location.hostname,
          error_message: a,
          time_passed: Date.now() - this.$4,
        };
        this.$6(l.CLIENT_ERROR, a);
      };
      b.logIfLoggedOut = function () {
        if (!c("gkx")("1186990") || d("MqttEnv").Env.isUserLoggedInNow())
          return;
        var a = {
          logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
          href: window.location.href,
          error_message: "Not logged in",
          time_passed: Date.now() - this.$4,
        };
        this.$6(l.CLIENT_ERROR, a);
      };
      b.logErrorWarn = function (a, b) {
        var e = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          try {
            c("FBLogger")(h).catching(a).warn(b);
          } catch (a) {}
        });
      };
      b.logWarn = function (a, b) {
        var c = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          try {
            c.$1.warn(a, b);
          } catch (a) {}
        });
      };
      b.debugTrace = function (a, b) {
        var c = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          try {
            c.$1.debug(a, b);
          } catch (a) {}
        });
      };
      b.bumpCounter = function (a) {
        var b = this;
        if (!d("Random").coinflip(i)) return;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          b.$2 !== 0 &&
            d("ODS").bumpEntityKey(2966, "mqtt_ws_client", b.$2 + "." + a, i),
            d("ODS").bumpEntityKey(2966, "mqtt_ws_client", a, i);
        });
      };
      b.$6 = function (a, b, e) {
        var f = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          b.event_type = a;
          b.app_id = f.$2;
          b.online = f.$9();
          var d = JSON.stringify(b);
          f.$1.log(a, d, { weight: e });
          a !== l.DISCONNECT && c("MqttWsClientTypedLoggerLite").log(b);
        });
      };
      b.$8 = function (a, b, e) {
        b !== 0
          ? (e = c("gkx")("1272991") && (e == !0 || d("Random").coinflip(b)))
          : (e = c("gkx")("1272991"));
        e && d("MqttEnv").Env.scheduleCallback(a);
      };
      b.$7 = function (a) {
        this.$8(a, 0, !1);
      };
      b.$9 = function () {
        return window.navigator && window.navigator.onLine !== void 0
          ? window.navigator.onLine
          : !1;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttEnvInitializer",
  [
    "CurrentUser",
    "MqttEnv",
    "MqttLogger",
    "Random",
    "WebStorage",
    "clearTimeout",
    "gkx",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "mqtt:",
      i = {
        genGk: function (a) {
          switch (a) {
            case d("MqttEnv").MqttGkNames.mqtt_waterfall_log_client_sampling:
              return c("gkx")("832242");
            case d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled:
              return !0;
            case d("MqttEnv").MqttGkNames.mqtt_lp_use_fetch:
              return c("gkx")("945829");
            case d("MqttEnv").MqttGkNames.mqtt_fast_lp:
              return c("gkx")("1001007");
            case d("MqttEnv").MqttGkNames.mqtt_lp_no_delay:
              return c("gkx")("1066746");
            case d("MqttEnv").MqttGkNames.mqtt_enable_publish_over_polling:
              return c("gkx")("968609");
            default:
              c("MqttLogger")
                .getInstance()
                .logError(new Error("unknown gk"), "Unknown GK value " + a);
              return !1;
          }
        },
        initialize: function () {
          d("MqttEnv").Env.initialize(
            c("Random").random,
            c("CurrentUser").isLoggedInNow,
            c("clearTimeout"),
            c("setTimeoutAcrossTransitions"),
            function () {
              return c("MqttLogger").getInstance();
            },
            i.genGk,
            null,
            null,
            null,
            function (a, b) {
              var d = c("WebStorage").getLocalStorage();
              if (d) {
                d = d.getItem(h + a);
                if (d != null) return d;
              }
              return b;
            },
            function (a, b) {
              var d = c("WebStorage").getLocalStorage();
              d &&
                (b == null
                  ? d.removeItem(h + a)
                  : c("WebStorage").setItemGuarded(d, h + a, b));
            }
          );
        },
      };
    f.exports = i;
  },
  34
);
__d(
  "FBMqttChannel",
  ["MqttChannel", "MqttEnvInitializer", "MqttWebConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    b("MqttEnvInitializer").initialize();
    e.exports = new (b("MqttChannel"))({
      endpoint: (a = b("MqttWebConfig")).endpoint,
      pollingEndpoint: a.pollingEndpoint,
      userFbid: a.fbid,
      appId: a.appID,
      initialSubscribedTopics: a.subscribedTopics,
      capabilities: a.capabilities,
      clientCapabilities: a.clientCapabilities,
      chatVisibility: a.chatVisibility,
    });
  },
  null
);
