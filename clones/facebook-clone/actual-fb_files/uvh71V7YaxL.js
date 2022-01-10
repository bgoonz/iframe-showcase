if (self.CavalryLogger) {
  CavalryLogger.start_js(["y5Dm2wl"]);
}

__d(
  "AdPreferencesElementDivider.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", { className: "ihqw7lf3" });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MemoryLoggerBase",
  [
    "CurrentUser",
    "MemoryLoggerConfigWebSitevarConfig",
    "MemoryUtils",
    "ODS",
    "URI",
    "gkx",
    "performanceNow",
    "regeneratorRuntime",
    "requireDeferred",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i = -1,
      j = -1,
      k = null,
      l = -1,
      m = c("requireDeferred")("LogWebMemoryUsageFalcoEvent").__setRef(
        "MemoryLoggerBase"
      ),
      n = c("CurrentUser").getAppID(),
      o =
        c("MemoryLoggerConfigWebSitevarConfig").measurement_interval_minutes *
        60 *
        1e3,
      p = 10 * 1e3;
    function q() {
      return Math.max(p, -Math.log(Math.random()) * o);
    }
    function r() {
      var a = q();
      c("setTimeoutAcrossTransitions")(function () {
        return b("regeneratorRuntime").async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  a.next = 2;
                  return b("regeneratorRuntime").awrap(t());
                case 2:
                  r();
                case 3:
                case "end":
                  return a.stop();
              }
          },
          null,
          this
        );
      }, a);
    }
    function s(a) {
      a = new (c("URI"))(a);
      var b = a.getQueryData();
      b = b.ref;
      a.setFragment("").setQueryData({ ref: b });
      return a.toString();
    }
    function t() {
      var a, e, f, g, o, p, q;
      return b("regeneratorRuntime").async(
        function (r) {
          while (1)
            switch ((r.prev = r.next)) {
              case 0:
                a = s(document.URL);
                e = d("MemoryUtils").getCurrentMemory();
                f = e.usedJSHeapSize;
                g = null;
                if (!d("MemoryUtils").isMeasureMemoryOriginTrialSupported()) {
                  r.next = 9;
                  break;
                }
                r.next = 7;
                return b("regeneratorRuntime").awrap(
                  window.performance.measureMemory()
                );
              case 7:
                (o = r.sent), (g = o.bytes);
              case 9:
                (p = c("performanceNow")()),
                  (q = Math.round(p / (1e3 * 60))),
                  m.onReady(function (b) {
                    b.log(function () {
                      return {
                        app_id: n,
                        accurate_js_heap_size: g != null ? String(g) : null,
                        previous_uri: k,
                        current_uri: a,
                        minute: String(q),
                        previous_used_js_heap_size: String(l),
                        used_js_heap_size: String(f),
                        navigation_count: String(i),
                        news_feed_count: String(j),
                        script_path: h,
                      };
                    });
                  });
              case 12:
              case "end":
                return r.stop();
            }
        },
        null,
        this
      );
    }
    a = {
      init: function (a) {
        h = a.scriptPath;
        if (o <= 0) return;
        if (d("MemoryUtils").isMemoryAPISupported()) {
          c("gkx")("1994902");
          a = d("MemoryUtils").isMeasureMemoryOriginTrialSupported()
            ? "experimental"
            : "hit";
          d("ODS").bumpEntityKey(2966, "browser_memory_logger", a);
          r();
        } else d("ODS").bumpEntityKey(2966, "browser_memory_logger", "miss");
      },
      setNavigationCount: function (a) {
        i = a;
      },
      setNewsFeedCount: function (a) {
        j = a;
      },
      setPreviousUri: function (a) {
        k = s(a);
      },
      setPreviousUsedJSHeapSize: function (a) {
        l = a;
      },
      setScriptPath: function (a) {
        h = a;
      },
      getCurrentUsedJSHeapSize: function () {
        var a = d("MemoryUtils").getCurrentMemory();
        return (a = a.usedJSHeapSize) != null ? a : -1;
      },
    };
    e = a;
    g["default"] = e;
  },
  98
);
__d(
  "CometMemoryLogger",
  ["MemoryLoggerBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !1;
    a = {
      getCurrentUsedJSHeapSize: function () {
        return c("MemoryLoggerBase").getCurrentUsedJSHeapSize();
      },
      init: function () {
        if (h) return;
        h = !0;
        c("MemoryLoggerBase").init({ scriptPath: null });
        c("MemoryLoggerBase").setNavigationCount(0);
      },
      setNavigationCount: function (a) {
        c("MemoryLoggerBase").setNavigationCount(a);
      },
      setNewsFeedCount: function (a) {
        c("MemoryLoggerBase").setNewsFeedCount(a);
      },
      setPreviousUri: function (a) {
        c("MemoryLoggerBase").setPreviousUri(a);
      },
      setPreviousUsedJSHeapSize: function (a) {
        c("MemoryLoggerBase").setPreviousUsedJSHeapSize(a);
      },
    };
    g["default"] = a;
  },
  98
);
