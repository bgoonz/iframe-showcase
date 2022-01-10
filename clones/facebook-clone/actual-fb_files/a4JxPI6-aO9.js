if (self.CavalryLogger) {
  CavalryLogger.start_js(["q9dQCG6"]);
}

__d(
  "BaseTextInput_DEPRECATED.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var c = a.disabled;
      c = c === void 0 ? !1 : c;
      var d = a.type;
      d = d === void 0 ? "text" : d;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["disabled", "type"]);
      return h.jsx(
        "input",
        babelHelpers["extends"]({}, a, { disabled: c, ref: b, type: d })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "cometTypeaheadMouseUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a != null && (a.ctrlKey || a.metaKey || a.shiftKey);
    }
    f.hasModifierKeyPressed = a;
  },
  66
);
__d(
  "CometInternalTypeaheadStateContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      activeEntries: [],
      highlightedEntry: null,
      highlightedEntrySource: null,
      isOpened: !1,
    });
    g["default"] = b;
  },
  98
);
__d(
  "useCometInternalTypeaheadState",
  ["CometInternalTypeaheadStateContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometInternalTypeaheadStateContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometInternalTypeaheadFetchHandler",
  ["react", "useCometInternalTypeaheadFetch", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect;
    function a(a) {
      var b = a.loggingProvider,
        d = a.queryString,
        e = a.traceProvider;
      a = c("useCometInternalTypeaheadState")();
      var f = a.activeEntries,
        g = a.isOpened;
      a = c("useCometInternalTypeaheadFetch")();
      var j = a.fetch;
      a = h(
        function () {
          function a(a, c) {
            var d = null;
            b != null &&
              (d = b.addEvent(
                { action: "keystroke", entries: f, queryString: a },
                "useCometInternalTypeaheadFetchHandler"
              ));
            d =
              d != null
                ? { loggingEventTrace: d, perfTraceAPI: c, query: a }
                : { perfTraceAPI: c, query: a };
            j(d);
          }
          var c = d.trimLeft();
          if (!g) return;
          e
            ? e.trace(function (b) {
                return a(c, b);
              }, c)
            : a(c);
        },
        [f, j, g, b, d, e]
      );
      i(a, [g, d]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometInternalTypeaheadOnAbandonLoggingHandler",
  ["react", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.callback,
        d = a.loggingProvider,
        e = a.queryString;
      a = c("useCometInternalTypeaheadState")();
      var f = a.activeEntries;
      return h(
        function () {
          d != null &&
            d.isSessionActive() &&
            (d.addEvent(
              { action: "abandon", entries: f, queryString: e },
              "useCometInternalTypeaheadOnAbandonLoggingHandler"
            ),
            d.endSession()),
            b && b();
        },
        [f, d, b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometInternalTypeaheadOnEnterLoggingHandler",
  ["react", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.loggingProvider,
        d = a.onEnter,
        e = a.queryString;
      a = c("useCometInternalTypeaheadState")();
      var f = a.activeEntries,
        g = a.highlightedEntry;
      return h(
        function () {
          g != null &&
            b &&
            b.addEvent(
              { action: "click", entries: f, entry: g, queryString: e },
              "useCometInternalTypeaheadOnEnterLoggingHandler:without_highlightedEntry"
            ),
            g == null &&
              b &&
              b.addEvent(
                { action: "enter", entries: f, queryString: e },
                "useCometInternalTypeaheadOnEnterLoggingHandler:with_highlightedEntry"
              ),
            b && b.endSession(),
            d && d();
        },
        [f, g, b, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometInternalTypeaheadOnFocusLoggingHandler",
  ["react", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.loggingProvider,
        d = a.onFocus,
        e = a.queryString;
      a = c("useCometInternalTypeaheadState")();
      var f = a.activeEntries;
      return h(
        function () {
          b != null &&
            (b.startSession(),
            b.addEvent(
              { action: "typeahead_appeared", entries: f, queryString: e },
              "useCometInternalTypeaheadOnFocusLoggingHandler"
            )),
            d && d();
        },
        [f, b, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometInternalTypeaheadOnPressEntryLoggingHandler",
  ["react", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.loggingProvider,
        d = a.onPressEntry,
        e = a.queryString;
      a = c("useCometInternalTypeaheadState")();
      var f = a.activeEntries;
      return h(
        function (a, c) {
          b != null &&
            (b.addEvent(
              { action: "click", entries: f, entry: a, queryString: e },
              "useCometInternalTypeaheadOnPressEntryLoggingHandler"
            ),
            b.endSession()),
            d && d(a, c);
        },
        [f, b, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadInputRefs",
  ["mergeRefs", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useMemo,
      i = b.useRef;
    function a(a) {
      var b = i(null),
        d = h(
          function () {
            return c("mergeRefs")(b, a);
          },
          [b, a]
        );
      return { composedRef: d, inputRef: b };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometInternalTypeahead.react",
  [
    "cometTypeaheadMouseUtils",
    "emptyFunction",
    "react",
    "useCometInternalTypeaheadFetchHandler",
    "useCometInternalTypeaheadOnAbandonLoggingHandler",
    "useCometInternalTypeaheadOnEnterLoggingHandler",
    "useCometInternalTypeaheadOnFocusLoggingHandler",
    "useCometInternalTypeaheadOnPressEntryLoggingHandler",
    "useCometInternalTypeaheadState",
    "useCometTypeaheadInputRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a, b) {
      var e = a.layoutStrategyRenderer,
        f = a.loggingProvider,
        g = a.onEnter,
        j = a.onFocus,
        k = a.onPressEntry,
        l = a.onSelectFreeformQuery,
        m = a.onShiftTab,
        n = a.onTab,
        o = a.queryString,
        p = a.traceProvider;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "layoutStrategyRenderer",
        "loggingProvider",
        "onEnter",
        "onFocus",
        "onPressEntry",
        "onSelectFreeformQuery",
        "onShiftTab",
        "onTab",
        "queryString",
        "traceProvider",
      ]);
      b = c("useCometTypeaheadInputRefs")(b);
      var q = b.composedRef,
        r = b.inputRef;
      b = c("useCometInternalTypeaheadState")();
      var s = b.highlightedEntry;
      c("useCometInternalTypeaheadFetchHandler")({
        loggingProvider: f,
        queryString: o,
        traceProvider: p,
      });
      b = c("useCometInternalTypeaheadOnEnterLoggingHandler")({
        loggingProvider: f,
        onEnter: i(
          function () {
            s != null ? k && k(s) : l && l(o), g && g();
          },
          [s, g, k, l, o]
        ),
        queryString: o,
      });
      j = c("useCometInternalTypeaheadOnFocusLoggingHandler")({
        loggingProvider: f,
        onFocus: j,
        queryString: o,
      });
      var t = c("useCometInternalTypeaheadOnPressEntryLoggingHandler")({
        loggingProvider: f,
        onPressEntry: i(
          function (a, b) {
            if (d("cometTypeaheadMouseUtils").hasModifierKeyPressed(b)) {
              r.current && r.current.focus();
              return;
            }
            k && k(a);
          },
          [r, k]
        ),
        queryString: o,
      });
      m = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
        callback: m,
        loggingProvider: f,
        queryString: o,
      });
      n = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
        callback: n,
        loggingProvider: f,
        queryString: o,
      });
      var u = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
        callback: c("emptyFunction"),
        loggingProvider: f,
        queryString: o,
      });
      f = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
        callback: c("emptyFunction"),
        loggingProvider: f,
        queryString: o,
      });
      return h.jsx(
        e,
        babelHelpers["extends"]({}, a, {
          onAbandonTypeahead_DO_NOT_USE: f,
          onClick: c("emptyFunction"),
          onEnter: b,
          onFocus: j,
          onHighlightEntry: a.onHighlightEntry,
          onOutsideClick: u,
          onPressEntry: t,
          onShiftTab: m,
          onTab: n,
          queryString: o,
          ref: q,
          traceProvider: p,
          xstyles: a.xstyles,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometInternalTypeaheadStateDispatcherContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "useCometInternalTypeaheadStateDispatcher",
  ["CometInternalTypeaheadStateDispatcherContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometInternalTypeaheadStateDispatcherContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "TypeaheadLoggingFetchRequestFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1880031");
    c = b("FalcoLoggerInternal").create("typeahead_logging_fetch_request", a);
    e.exports = c;
  },
  null
);
__d(
  "CometTypeaheadVolumeLoggingProvider",
  ["TypeaheadLoggingFetchRequestFalcoEvent", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function () {
      return Math.random().toString();
    };
    a = (function () {
      function a(a) {
        (this.$2 = null), (this.$1 = a), (this.$2 = h());
      }
      var b = a.prototype;
      b.getContext = function () {
        return this.$1;
      };
      b.getSessionID = function () {
        this.$2 == null &&
          c("recoverableViolation")(
            "Logging sessionID requested from " +
              this.getContext() +
              " surface does not exist.",
            "search"
          );
        return this.$2;
      };
      b.logRequest = function (a) {
        var b = {
          context: this.getContext(),
          requestType: a,
          sessionID: this.getSessionID(),
        };
        c("TypeaheadLoggingFetchRequestFalcoEvent").log(function () {
          return { fetchRequest: b };
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadVolumeLoggingProvider",
  ["CometTypeaheadVolumeLoggingProvider", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      a === void 0 && (a = "UNKNOWN");
      return h(
        function () {
          return new (c("CometTypeaheadVolumeLoggingProvider"))(a);
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometInternalTypeaheadFetchProvider",
  [
    "CometInternalTypeaheadFetchContext",
    "orEmptyArray",
    "react",
    "useCometInternalTypeaheadStateDispatcher",
    "useCometTypeaheadDataSourceFetch",
    "useCometTypeaheadVolumeLoggingProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.dataSource,
        e = a.dataSourceFetchConfigParams,
        f = a.loggingContext,
        g = a.onFetchEntries_DO_NOT_USE,
        k = a.traceProvider;
      a = c("useCometInternalTypeaheadStateDispatcher")();
      var l = a.dispatchActiveEntries,
        m = c("useCometTypeaheadVolumeLoggingProvider")(f);
      a = c("useCometTypeaheadDataSourceFetch")({
        dataSource: d,
        dataSourceFetchConfigParams: e,
        onResolvePayload: i(
          function (a, b) {
            a = a.entries;
            var d = b.isTraceComplete;
            b = b.source;
            l(c("orEmptyArray")(a));
            m.logRequest(o);
            g && g(a);
            k &&
              !k.isResolved() &&
              d &&
              (b === "cache" && a.length >= k.getEntriesCountForVisualComplete()
                ? k.setEndReason("max_suggestions_reached")
                : b === "network"
                ? k.setEndReason("all_queries_completed")
                : b === "network-no-results" &&
                  k.setEndReason("all_queries_completed_no_network_results"),
              k.resolve());
          },
          [l, g, k]
        ),
      });
      f = a[0];
      var n = f.isLoading,
        o = f.source,
        p = a[1],
        q = a[2];
      d = j(
        function () {
          return { fetch: p, isLoading: n, refetch: q, source: o };
        },
        [p, n, q, o]
      );
      return h.jsx(c("CometInternalTypeaheadFetchContext").Provider, {
        value: d,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometInternalTypeaheadStateProvider",
  [
    "CometInternalTypeaheadStateContext",
    "CometInternalTypeaheadStateDispatcherContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo,
      k = b.useState,
      l = b.useEffect,
      m = b.useRef,
      n = [];
    function a(a) {
      var b = a.children,
        d = a.emptyEntries_DO_NOT_USE,
        e = d === void 0 ? n : d,
        f = a.onClose,
        g = a.onOpen;
      d = k(!1);
      var o = d[0],
        p = d[1];
      a = k(null);
      var q = a[0],
        r = a[1];
      d = k(null);
      var s = d[0],
        t = d[1];
      a = k(e);
      var u = a[0],
        v = a[1],
        w = m(e);
      l(
        function () {
          if (w.current === e) return;
          w.current = e;
          v(function (a) {
            return a.length ? a : e;
          });
        },
        [v, w, e]
      );
      var x = i(
          function (a) {
            v(function (b) {
              b = Array.isArray(a) ? a : a(b);
              return b.length > 0 ? b : w.current;
            });
          },
          [v, w]
        ),
        y = i(function (a) {
          var b = a.entry;
          a = a.source;
          r(b);
          t(a);
        }, []),
        z = i(
          function (a) {
            if (a === o) return;
            p(a);
            a ? g && g() : f && f();
          },
          [o, f, g]
        );
      d = j(
        function () {
          return {
            dispatchActiveEntries: x,
            dispatchHighlightedEntry: y,
            dispatchIsOpened: z,
          };
        },
        [x, y, z]
      );
      a = j(
        function () {
          return {
            activeEntries: u,
            highlightedEntry: q,
            highlightedEntrySource: s,
            isOpened: o,
          };
        },
        [u, q, s, o]
      );
      return h.jsx(c("CometInternalTypeaheadStateDispatcherContext").Provider, {
        value: d,
        children: h.jsx(c("CometInternalTypeaheadStateContext").Provider, {
          value: a,
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry",
  ["react", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = b.shouldQueryStringFollowHighlightedEntry;
      return h.forwardRef(function (b, e) {
        var f = b.queryString;
        b = babelHelpers.objectWithoutPropertiesLoose(b, ["queryString"]);
        var g = c("useCometInternalTypeaheadState")(),
          i = g.highlightedEntry;
        g = g.highlightedEntrySource;
        g = d && g === "keyboard" && i != null ? i.getLabel() : f;
        return h.jsx(
          a,
          babelHelpers["extends"]({}, b, { queryString: g, ref: e })
        );
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseTypeahead.react",
  [
    "CometHeroInteractionContextPassthrough.react",
    "CometInternalTypeahead.react",
    "CometInternalTypeaheadFetchProvider",
    "CometInternalTypeaheadStateProvider",
    "emptyFunction",
    "react",
    "withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo;
    function a(a, b) {
      var d = a.inputStrategyRenderer,
        e = a.dataSource,
        f = a.dataSourceFetchConfigParams,
        g = a.decorators,
        k = g === void 0 ? [] : g;
      g = a.emptyEntries_DO_NOT_USE;
      var l = a.label,
        m = a.placeholder,
        n = a.onBackspace;
      n = n === void 0 ? c("emptyFunction") : n;
      var o = a.onBlur;
      o = o === void 0 ? c("emptyFunction") : o;
      var p = a.onEnter;
      p = p === void 0 ? c("emptyFunction") : p;
      var q = a.onEscape;
      q = q === void 0 ? c("emptyFunction") : q;
      var r = a.onFetchEntries_DO_NOT_USE,
        s = a.onFocus;
      s = s === void 0 ? c("emptyFunction") : s;
      var t = a.onOpen,
        u = a.onChange,
        v = a.onClose,
        w = a.onPressEntry,
        x = a.viewRole;
      x = x === void 0 ? "listbox" : x;
      var y = a.shouldQueryStringFollowHighlightedEntry,
        z = y === void 0 ? !0 : y;
      y = a.shouldQueryStringUpdateFromSelectedEntryOnClick;
      var A = y === void 0 ? !0 : y;
      y = a.traceProvider;
      var B = a.viewStrategyRenderer,
        C = a.loggingContext;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "inputStrategyRenderer",
        "dataSource",
        "dataSourceFetchConfigParams",
        "decorators",
        "emptyEntries_DO_NOT_USE",
        "label",
        "placeholder",
        "onBackspace",
        "onBlur",
        "onEnter",
        "onEscape",
        "onFetchEntries_DO_NOT_USE",
        "onFocus",
        "onOpen",
        "onChange",
        "onClose",
        "onPressEntry",
        "viewRole",
        "shouldQueryStringFollowHighlightedEntry",
        "shouldQueryStringUpdateFromSelectedEntryOnClick",
        "traceProvider",
        "viewStrategyRenderer",
        "loggingContext",
      ]);
      var D = j(
          function () {
            var a = c("CometInternalTypeahead.react");
            k.forEach(function (b) {
              var c = b.decorate;
              b = b.params;
              a = c(a, b);
            });
            return a;
          },
          [k]
        ),
        E = i(
          function (a) {
            A && u(a.getLabel()), w && w(a);
          },
          [u, w, A]
        );
      l = l == null && m != null ? m : l;
      var F = j(
        function () {
          return c(
            "withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry"
          )(d, { shouldQueryStringFollowHighlightedEntry: z });
        },
        [d, z]
      );
      return h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
        clear: !0,
        children: h.jsx(c("CometInternalTypeaheadStateProvider"), {
          emptyEntries_DO_NOT_USE: g,
          onClose: v,
          onOpen: t,
          children: h.jsx(c("CometInternalTypeaheadFetchProvider"), {
            dataSource: e,
            dataSourceFetchConfigParams: f,
            loggingContext: C,
            onFetchEntries_DO_NOT_USE: r,
            traceProvider: y,
            children: h.jsx(
              D,
              babelHelpers["extends"]({}, a, {
                inputStrategyRenderer: F,
                label: l,
                onBackspace: n,
                onBlur: o,
                onChange: u,
                onDownArrow: c("emptyFunction"),
                onEnter: p,
                onEscape: q,
                onFocus: s,
                onHighlightEntry: c("emptyFunction"),
                onPressEntry: E,
                onShiftTab: c("emptyFunction"),
                onTab: c("emptyFunction"),
                onUpArrow: c("emptyFunction"),
                placeholder: m,
                ref: b,
                traceProvider: y,
                viewRole: x,
                viewStrategyRenderer: B,
              })
            ),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometTypeaheadProgressGlimmer.react",
  ["CometProgressRingIndeterminate.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className: "taijpn5t pi1r6xr4 buofh1pr j83agx80 bp9cbjyn",
        children: h.jsx(c("CometProgressRingIndeterminate.react"), {
          color: "disabled",
          size: 24,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadHelperText.react",
  ["TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.text;
      return h.jsx("div", {
        className: "aov4n071",
        children: h.jsx(c("TetraTextPairing.react"), {
          level: 4,
          meta: a,
          metaColor: "secondary",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadHightlightBoldTransform.react",
  ["TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.segment.content;
      return h.jsx(c("TetraText.react"), { type: "bodyLink3", children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadHightlightNormalTransform.react",
  ["TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.segment.content;
      return h.jsx(c("TetraText.react"), { type: "body3", children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "mayHaveConnectedCharacters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return (
        a.match(
          /[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1A20-\u1AAF\u1B00-\u1B7F\u1B80-\u1BBF\u1BC0-\u1BFF\u1C00-\u1C4F\u1CC0-\u1CCF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA8E0-\uA8FF\uA930-\uA95F\uA980-\uA9DF\uA9E0-\uA9FF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAAE0-\uAAFF\uABC0-\uABFF\u0600-\u06FF\u0750–\u077F\u08A0–\u08FF\uFB50–\uFDFF\uFE70–\uFEFF\u4e00-\u9faf\u0D80-\u0DFF\u0E80-\u0EFF]/
        ) != null
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "cometTypeaheadHighlightUtils",
  ["escapeRegex", "mayHaveConnectedCharacters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, d) {
      if (c("mayHaveConnectedCharacters")(b))
        return [{ content: b, isMatched: !1 }];
      a = c("escapeRegex")(a);
      a = new RegExp("( " + a.split(/\s+/).join("| ") + ")", "gi");
      b = " " + b;
      var e = [],
        f = 0,
        g = null;
      while (!0) {
        g = a.exec(b);
        if (g == null) break;
        var h = b.substring(f, g.index);
        f === 0 && (h = h.trimLeft());
        e.push({ content: h, isMatched: !d });
        h = g[0];
        g.index === 0 && (h = h.trimLeft());
        f = g.index + g[0].length;
        e.push({ content: h, isMatched: d });
      }
      h = b.substring(f, b.length);
      e.push({ content: h, isMatched: !d });
      return e;
    }
    function a(a, b) {
      return h(a, b, !0);
    }
    function b(a, b) {
      return h(a, b, !1);
    }
    g.highlightMatch = a;
    g.highlightNonMatch = b;
  },
  98
);
__d(
  "CometTypeaheadHighlight.react",
  [
    "CometTypeaheadHightlightBoldTransform.react",
    "CometTypeaheadHightlightNormalTransform.react",
    "cometTypeaheadHighlightUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        e = a.content,
        f = a.query;
      a = a.strategy;
      if (f == null || e == null) return null;
      var g = null;
      switch (a) {
        case "match":
          g = d("cometTypeaheadHighlightUtils").highlightMatch;
          break;
        case "non-match":
          g = d("cometTypeaheadHighlightUtils").highlightNonMatch;
          break;
        default:
      }
      return g
        ? b(
            h.jsx(h.Fragment, {
              children: g(f, e).map(function (a, b) {
                return a.isMatched
                  ? h.jsx(
                      c("CometTypeaheadHightlightBoldTransform.react"),
                      { segment: a },
                      String(b)
                    )
                  : h.jsx(
                      c("CometTypeaheadHightlightNormalTransform.react"),
                      { segment: a },
                      String(b)
                    );
              }),
            })
          )
        : b(
            h.jsx(c("CometTypeaheadHightlightNormalTransform.react"), {
              segment: { content: e, isMatched: !1 },
            })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadFocusLockRegion.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.children;
      a = a.xstyle;
      var d = i(function (a) {
        a.preventDefault();
      }, []);
      return h.jsx("div", {
        className: c("stylex")(a),
        onMouseDown: d,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadInputStrategyOnBlurHandler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onBlur;
      return h(
        function () {
          b && b();
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadInputStrategyOnFocusHandler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        c = a.onFocus;
      return h(
        function () {
          b.current != null && b.current.select(), c && c();
        },
        [b, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadInputHandlers",
  [
    "useCometTypeaheadInputStrategyOnBlurHandler",
    "useCometTypeaheadInputStrategyOnFocusHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.inputRef,
        d = a.onBlur,
        e = a.onFocus;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "inputRef",
        "onBlur",
        "onFocus",
      ]);
      b = c("useCometTypeaheadInputStrategyOnFocusHandler")({
        inputRef: b,
        onFocus: e,
      });
      e = c("useCometTypeaheadInputStrategyOnBlurHandler")({ onBlur: d });
      return babelHelpers["extends"]({}, a, { onBlur: e, onFocus: b });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadInputStrategyOnChangeHandler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onChange;
      return h(
        function (a) {
          var c = a.target.value;
          b && b(c, a);
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadInputStrategyEventListener.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "react",
    "useCometTypeaheadInputHandlers",
    "useCometTypeaheadInputRefs",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo,
      k = { root: { width: "k4urcfbm" } };
    function a(a, b) {
      var d = a.children,
        e = a.isInline,
        f = a.onBackspace,
        g = a.onDownArrow,
        l = a.onEnter,
        m = a.onEscape,
        n = a.onShiftTab,
        o = a.onTab,
        p = a.onUpArrow;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "isInline",
        "onBackspace",
        "onDownArrow",
        "onEnter",
        "onEscape",
        "onShiftTab",
        "onTab",
        "onUpArrow",
      ]);
      var q = j(
        function () {
          return [
            {
              command: { key: c("CometKeys").DELETE },
              description: h._("Remove last character from input query."),
              handler: function () {
                return f && f();
              },
              isHiddenCommand: !0,
              shouldPreventDefault: !1,
              triggerFromInputs: !0,
            },
            {
              command: { key: c("CometKeys").DOWN },
              description: h._("Next suggestion"),
              handler: function () {
                return g && g();
              },
              triggerFromInputs: !0,
            },
            {
              command: { key: c("CometKeys").UP },
              description: h._("Previous suggestion"),
              handler: function () {
                return p && p();
              },
              triggerFromInputs: !0,
            },
            {
              command: { key: c("CometKeys").ESCAPE },
              description: h._("Close suggestions"),
              handler: function () {
                return m && m();
              },
              triggerFromInputs: !0,
            },
            {
              command: { key: c("CometKeys").ENTER },
              description: h._("Select suggestion"),
              handler: function () {
                return l && l();
              },
              triggerFromInputs: !0,
            },
            {
              command: { key: c("CometKeys").TAB },
              description: h._("Leave input"),
              handler: function () {
                return o && o();
              },
              isHiddenCommand: !0,
              shouldPreventDefault: !1,
              shouldStopPropagation: !1,
              triggerFromInputs: !0,
            },
            {
              command: { key: c("CometKeys").TAB, shift: !0 },
              description: h._("Leave input"),
              handler: function () {
                return n && n();
              },
              isHiddenCommand: !0,
              shouldPreventDefault: !1,
              shouldStopPropagation: !1,
              triggerFromInputs: !0,
            },
          ];
        },
        [f, g, l, m, n, o, p]
      );
      b = c("useCometTypeaheadInputRefs")(b);
      var r = b.composedRef;
      b = b.inputRef;
      b = c("useCometTypeaheadInputHandlers")(
        babelHelpers["extends"]({ inputRef: b }, a)
      );
      return i.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: q,
        elementType: e === !0 ? "span" : "div",
        xstyle: k.root,
        children: d(r, b),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "cometTypeaheadInputWebkitStyles",
  [],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      default: {
        WebkitAppearance: "aj8hi1zk",
        "::-webkit-search-decoration": { appearance: "r4fl40cc" },
        "::-webkit-search-cancel-button": { appearance: "kd8v7px7" },
        "::-webkit-search-results-button": { appearance: "m07ooulj" },
        "::-webkit-search-results-decoration": { appearance: "mzan44vs" },
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometTypeaheadInputRoundedStrategy.react",
  [
    "ix",
    "CometRoundedTextInput.react",
    "TetraIcon.react",
    "cometTypeaheadInputWebkitStyles",
    "fbicon",
    "react",
    "useCometTypeaheadInputDirection",
    "useCometTypeaheadInputStrategyOnChangeHandler",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a, b) {
      var e = a.ariaProps;
      a.description;
      a.errorMessage;
      a.id;
      var f = a.name,
        g = a.inputEndContent,
        j = a.inputStartContent,
        k = a.inputExtraProps;
      k = k === void 0 ? {} : k;
      var l = k.hideIconOnFocus;
      l = l === void 0 ? !1 : l;
      var m = k.hideIconAnimation;
      m = m === void 0 ? !1 : m;
      var n = k.icon;
      n =
        n === void 0
          ? i.jsx(c("TetraIcon.react"), {
              color: "secondary",
              icon: d("fbicon")._(h("491282"), 16),
              size: 16,
            })
          : n;
      var o = k.size;
      k = k.xstyle;
      k = k === void 0 ? {} : k;
      var p = a.isDisabled,
        q = a.onChange,
        r = a.label;
      r = r === void 0 ? "" : r;
      var s = a.queryString,
        t = a.testid;
      t = babelHelpers.objectWithoutPropertiesLoose(a, [
        "ariaProps",
        "description",
        "errorMessage",
        "id",
        "name",
        "inputEndContent",
        "inputStartContent",
        "inputExtraProps",
        "isDisabled",
        "onChange",
        "label",
        "queryString",
        "testid",
      ]);
      a = c("useCometTypeaheadInputDirection")({ queryString: s });
      q = c("useCometTypeaheadInputStrategyOnChangeHandler")({ onChange: q });
      return i.jsxs("div", {
        className: "k4urcfbm j83agx80 bp9cbjyn",
        children: [
          j,
          i.jsx(
            c("CometRoundedTextInput.react"),
            babelHelpers["extends"]({}, e, t, {
              autoComplete: "off",
              "data-testid": void 0,
              dir: a,
              disabled: p,
              hideIconAnimation: m,
              hideIconOnFocus: l,
              icon: n,
              label: r,
              name: f,
              onChange: q,
              ref: b,
              size: o,
              spellCheck: !1,
              suppressHydrationWarning: !0,
              type: "search",
              value: s,
              xstyle: [k, c("cometTypeaheadInputWebkitStyles")["default"]],
            })
          ),
          g,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyOnBlurHandler",
  ["react", "useCometInternalTypeaheadStateDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onBlur;
      a = c("useCometInternalTypeaheadStateDispatcher")();
      var d = a.dispatchHighlightedEntry;
      return h(
        function () {
          d({ entry: null, source: null }), b && b();
        },
        [d, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyOnChangeHandler",
  ["react", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onChange,
        d = a.onHighlightEntry;
      a = c("useCometInternalTypeaheadState")();
      var e = a.highlightedEntry;
      return h(
        function (a, c) {
          e != null && d(null, "keyboard"), b && b(a, c);
        },
        [e, b, d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometInternalTypeaheadKeyboardNavigation",
  [
    "cometTypeaheadKeyboardNavigationUtils",
    "react",
    "useCometInternalTypeaheadState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a() {
      var a = c("useCometInternalTypeaheadState")(),
        b = a.activeEntries;
      a = a.highlightedEntry;
      var e = a != null ? a.getKey() : null;
      a = h(
        function (a) {
          return d("cometTypeaheadKeyboardNavigationUtils").moveDown(
            b,
            e,
            function (b) {
              a(b, "keyboard");
            }
          );
        },
        [e, b]
      );
      var f = h(
        function (a) {
          return d("cometTypeaheadKeyboardNavigationUtils").moveUp(
            b,
            e,
            function (b) {
              a(b, "keyboard");
            }
          );
        },
        [e, b]
      );
      return { onKeyboardDownArrow: a, onKeyboardUpArrow: f };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyOnDownArrowHandler",
  ["react", "useCometInternalTypeaheadKeyboardNavigation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onDownArrow,
        d = a.onHighlightEntry;
      a = c("useCometInternalTypeaheadKeyboardNavigation")();
      var e = a.onKeyboardDownArrow;
      return h(
        function () {
          e(d), b && b();
        },
        [b, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyOnEnterHandler",
  ["react", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        d = a.onEnter;
      a = c("useCometInternalTypeaheadState")();
      var e = a.highlightedEntry,
        f = a.highlightedEntrySource,
        g = b.current;
      return h(
        function () {
          var a;
          a = (a = g == null ? void 0 : g.value) != null ? a : "";
          var b = e != null && f === "keyboard";
          if (a.trim().length === 0 && !b) return;
          d && d();
        },
        [g, e, f, d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyOnHighlightEntryHandler",
  ["react", "useCometInternalTypeaheadStateDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onHighlightEntry;
      a = c("useCometInternalTypeaheadStateDispatcher")();
      var d = a.dispatchHighlightedEntry;
      return h(
        function (a, c) {
          d({ entry: a, source: c }), b && b(a, c);
        },
        [d, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyOnOutsideClickHandler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        c = a.onOutsideClick;
      return h(
        function () {
          if (b.current === document.activeElement) return;
          c && c();
        },
        [b, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyOnPressEntryHandler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onPressEntry;
      return h(
        function (a, c) {
          b(a, c);
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyOnUpArrowHandler",
  ["react", "useCometInternalTypeaheadKeyboardNavigation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onHighlightEntry,
        d = a.onUpArrow;
      a = c("useCometInternalTypeaheadKeyboardNavigation")();
      var e = a.onKeyboardUpArrow;
      return h(
        function () {
          e(b), d && d();
        },
        [b, e, d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutStrategyStyles",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo,
      i = {
        defaultLayout: {
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          width: "k4urcfbm",
        },
        stateDisabled: {},
        stateError: {},
        stateOpened: {},
        stateWarning: {},
      };
    function a(a) {
      var b = a.isDisabled,
        c = b === void 0 ? !1 : b;
      b = a.isError;
      var d = b === void 0 ? !1 : b;
      b = a.isOpened;
      var e = b === void 0 ? !1 : b;
      b = a.isWarning;
      var f = b === void 0 ? !1 : b;
      b = a.xstyles;
      var g = b.inputXStyle,
        j = b.layoutOpenedXStyle,
        k = b.layoutXStyle,
        l = b.viewXStyle_DO_NOT_USE;
      a = h(
        function () {
          return {
            inputXStyle: g,
            layoutXStyle: [
              i.defaultLayout,
              k,
              e && j,
              c && i.stateDisabled,
              e && i.stateOpened,
              d && i.stateError,
              f && i.stateWarning,
            ],
            viewXStyle_DO_NOT_USE: [l],
          };
        },
        [g, c, d, e, f, j, k, l]
      );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadViewStrategyOutsideClickListener",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect;
    function a(a, b) {
      var c = h(
        function (c) {
          var d = a.current;
          c = c.target;
          d != null && c instanceof Node && !d.contains(c) && b();
        },
        [a, b]
      );
      i(
        function () {
          document.addEventListener("click", c);
          return function () {
            document.removeEventListener("click", c);
          };
        },
        [c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadViewStrategyEventListener.react",
  ["react", "useCometTypeaheadViewStrategyOutsideClickListener"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useRef;
    function a(a) {
      var b = a.children;
      a = a.onOutsideClick;
      var d = h(null);
      c("useCometTypeaheadViewStrategyOutsideClickListener")(d, a);
      return b(d);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "cometHandleHighlightDropOnMouseLeave",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function () {
        a(null, "mouse");
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometTypeaheadInternalLayoutContextualStrategy.react",
  [
    "CometContextualLayer.react",
    "CometTypeaheadInputStrategyEventListener.react",
    "CometTypeaheadViewStrategyEventListener.react",
    "cometHandleHighlightDropOnMouseLeave",
    "react",
    "stylex",
    "useCometInternalTypeaheadState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef,
      j = { helperText: { marginTop: "aov4n071" } };
    function a(a, b) {
      var d = a.contextualProps;
      d = d === void 0 ? {} : d;
      var e = d.align;
      e = e === void 0 ? "stretch" : e;
      var f = d.position;
      f = f === void 0 ? "below" : f;
      d = babelHelpers.objectWithoutPropertiesLoose(d, ["align", "position"]);
      var g = a.extraLayoutProps,
        k = g.ariaProps,
        l = k.ariaDescribedByProps,
        m = k.ariaInputProps,
        n = k.ariaViewProps;
      k = g.helperTextComponent;
      var o = g.isLoading;
      g = g.isOpened;
      var p = a.inputStrategyRenderer,
        q = a.label,
        r = a.onBackspace,
        s = a.onBlur,
        t = a.onFocus,
        u = a.onClick,
        v = a.onDownArrow,
        w = a.onEnter,
        x = a.onEscape,
        y = a.onShiftTab,
        z = a.onTab,
        A = a.onUpArrow,
        B = a.queryString,
        C = a.viewStrategyRenderer,
        D = a.xstyles,
        E = babelHelpers.objectWithoutPropertiesLoose(a, [
          "contextualProps",
          "extraLayoutProps",
          "inputStrategyRenderer",
          "label",
          "onBackspace",
          "onBlur",
          "onFocus",
          "onClick",
          "onDownArrow",
          "onEnter",
          "onEscape",
          "onShiftTab",
          "onTab",
          "onUpArrow",
          "queryString",
          "viewStrategyRenderer",
          "xstyles",
        ]);
      a = i(null);
      var F = i(null),
        G = F.current,
        H = c("useCometInternalTypeaheadState")(),
        I = H.activeEntries,
        J = H.highlightedEntry,
        K = c("cometHandleHighlightDropOnMouseLeave")(E.onHighlightEntry);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            className: c("stylex")(D == null ? void 0 : D.layoutXStyle),
            ref: F,
            children: h.jsx("div", {
              className: c("stylex")(D == null ? void 0 : D.inputXStyle),
              children: h.jsx(
                c("CometTypeaheadInputStrategyEventListener.react"),
                {
                  onBackspace: r,
                  onBlur: s,
                  onChange: E.onChange,
                  onClick: u,
                  onDownArrow: v,
                  onEnter: w,
                  onEscape: x,
                  onFocus: t,
                  onShiftTab: y,
                  onTab: z,
                  onUpArrow: A,
                  ref: b,
                  children: function (a, b) {
                    return h.jsx(
                      p,
                      babelHelpers["extends"]({}, b, {
                        ariaProps: m,
                        autoFocus: E.autoFocus,
                        id: E.id,
                        inputEndContent: E.inputEndContent,
                        inputExtraProps: E.inputExtraProps,
                        inputStartContent: E.inputStartContent,
                        isDisabled: E.isDisabled,
                        label: q,
                        placeholder: E.placeholder,
                        queryString: B,
                        ref: a,
                        testid: void 0,
                      })
                    );
                  },
                }
              ),
            }),
          }),
          k != null &&
            h.jsx(
              "div",
              babelHelpers["extends"](
                { className: c("stylex")(j.helperText) },
                l,
                { children: k }
              )
            ),
          G &&
            g &&
            h.jsx(
              c("CometContextualLayer.react"),
              babelHelpers["extends"]({}, d, {
                align: e,
                context_DEPRECATED: G,
                position: f,
                ref: a,
                children: h.jsx(
                  c("CometTypeaheadViewStrategyEventListener.react"),
                  {
                    onOutsideClick: E.onOutsideClick,
                    children: function (a) {
                      return h.jsx("div", {
                        className: c("stylex")(
                          D == null ? void 0 : D.viewXStyle_DO_NOT_USE
                        ),
                        onMouseLeave: K,
                        ref: a,
                        children: h.jsx(C, {
                          ariaProps: n,
                          entries: I,
                          highlightedEntry: J,
                          isLoading: o,
                          onAbandonTypeahead_DO_NOT_USE:
                            E.onAbandonTypeahead_DO_NOT_USE,
                          onHighlightEntry: E.onHighlightEntry,
                          onPressEntry: E.onPressEntry,
                          queryString: B,
                        }),
                      });
                    },
                  }
                ),
              })
            ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "useCometTypeaheadInternalLayoutInlineStrategyHandlers",
  [
    "react",
    "useCometTypeaheadLayoutStrategyOnBlurHandler",
    "useCometTypeaheadLayoutStrategyOnChangeHandler",
    "useCometTypeaheadLayoutStrategyOnDownArrowHandler",
    "useCometTypeaheadLayoutStrategyOnEnterHandler",
    "useCometTypeaheadLayoutStrategyOnHighlightEntryHandler",
    "useCometTypeaheadLayoutStrategyOnOutsideClickHandler",
    "useCometTypeaheadLayoutStrategyOnPressEntryHandler",
    "useCometTypeaheadLayoutStrategyOnUpArrowHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        d = a.onBlur,
        e = a.onChange,
        f = a.onDownArrow,
        g = a.onEnter,
        i = a.onEscape,
        j = a.onHighlightEntry,
        k = a.onOutsideClick,
        l = a.onPressEntry;
      a = a.onUpArrow;
      j = c("useCometTypeaheadLayoutStrategyOnHighlightEntryHandler")({
        onHighlightEntry: j,
      });
      d = c("useCometTypeaheadLayoutStrategyOnBlurHandler")({ onBlur: d });
      var m = c("useCometTypeaheadLayoutStrategyOnChangeHandler")({
        onChange: e,
        onHighlightEntry: j,
      });
      e = c("useCometTypeaheadLayoutStrategyOnEnterHandler")({
        inputRef: b,
        onEnter: g,
      });
      g = h(
        function () {
          m(""), i && i();
        },
        [m, i]
      );
      f = c("useCometTypeaheadLayoutStrategyOnDownArrowHandler")({
        onDownArrow: f,
        onHighlightEntry: j,
      });
      a = c("useCometTypeaheadLayoutStrategyOnUpArrowHandler")({
        onHighlightEntry: j,
        onUpArrow: a,
      });
      l = c("useCometTypeaheadLayoutStrategyOnPressEntryHandler")({
        onPressEntry: l,
      });
      b = c("useCometTypeaheadLayoutStrategyOnOutsideClickHandler")({
        inputRef: b,
        onOutsideClick: k,
      });
      return {
        onBlur: d,
        onChange: m,
        onDownArrow: f,
        onEnter: e,
        onEscape: g,
        onHighlightEntry: j,
        onOutsideClick: b,
        onPressEntry: l,
        onUpArrow: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadInternalLayoutContextualStrategyHandlers",
  [
    "react",
    "useCometInternalTypeaheadState",
    "useCometInternalTypeaheadStateDispatcher",
    "useCometTypeaheadInternalLayoutInlineStrategyHandlers",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        d = a.onAbandonTypeahead_DO_NOT_USE,
        e = a.onClick,
        f = a.onOutsideClick,
        g = a.onShiftTab,
        i = a.onTab,
        j = babelHelpers.objectWithoutPropertiesLoose(a, [
          "inputRef",
          "onAbandonTypeahead_DO_NOT_USE",
          "onClick",
          "onOutsideClick",
          "onShiftTab",
          "onTab",
        ]);
      a = c("useCometInternalTypeaheadState")();
      var k = a.isOpened;
      a = c("useCometInternalTypeaheadStateDispatcher")();
      var l = a.dispatchIsOpened;
      a = h(
        function () {
          l(!1), f && f();
        },
        [l, f]
      );
      b = c("useCometTypeaheadInternalLayoutInlineStrategyHandlers")(
        babelHelpers["extends"]({ inputRef: b, onOutsideClick: a }, j)
      );
      a = b.onBlur;
      var m = b.onChange,
        n = b.onDownArrow,
        o = b.onEnter,
        p = b.onEscape,
        q = b.onHighlightEntry,
        r = b.onOutsideClick,
        s = b.onPressEntry,
        t = b.onUpArrow;
      b = h(
        function () {
          l(!1), d && d();
        },
        [l, d]
      );
      var u = h(
          function () {
            l(!0), e && e();
          },
          [l, e]
        ),
        v = h(
          function (a, b) {
            l(!0), m && m(a, b);
          },
          [l, m]
        ),
        w = h(
          function () {
            k ? n && n() : l(!0);
          },
          [l, k, n]
        ),
        x = h(
          function () {
            l(!1), o && o();
          },
          [l, o]
        ),
        y = h(
          function () {
            k ? (l(!1), j.onEscape && j.onEscape()) : p && p();
          },
          [l, j, k, p]
        ),
        z = h(
          function (a, b) {
            l(!1), s && s(a, b);
          },
          [l, s]
        ),
        A = h(
          function () {
            l(!1), g && g();
          },
          [l, g]
        ),
        B = h(
          function () {
            l(!1), i && i();
          },
          [l, i]
        ),
        C = h(
          function () {
            !k ? l(!0) : t && t();
          },
          [l, k, t]
        );
      return {
        onAbandonTypeahead_DO_NOT_USE: b,
        onBlur: a,
        onChange: v,
        onClick: u,
        onDownArrow: w,
        onEnter: x,
        onEscape: y,
        onHighlightEntry: q,
        onOutsideClick: r,
        onPressEntry: z,
        onShiftTab: A,
        onTab: B,
        onUpArrow: C,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadLayoutContextualStrategy.react",
  [
    "CometTypeaheadHelperText.react",
    "CometTypeaheadInternalLayoutContextualStrategy.react",
    "react",
    "useCometInternalTypeaheadFetch",
    "useCometInternalTypeaheadState",
    "useCometTypeaheadInputRefs",
    "useCometTypeaheadInternalLayoutContextualStrategyHandlers",
    "useCometTypeaheadLayoutContextualStrategyARIAProps",
    "useCometTypeaheadLayoutStrategyStyles",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        view: {
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          boxShadow: "o55z2nyb",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          marginTop: "rs0gx3tq",
          width: "k4urcfbm",
        },
      };
    function a(a, b) {
      var d = a.extraLayoutProps;
      d = d === void 0 ? {} : d;
      var e = d.afterViewContent;
      d = d.beforeViewContent;
      var f = a.helperText,
        g = a.label,
        j = a.onAbandonTypeahead_DO_NOT_USE,
        k = a.onBlur,
        l = a.onChange,
        m = a.onClick,
        n = a.onDownArrow,
        o = a.onEnter,
        p = a.onEscape,
        q = a.onHighlightEntry,
        r = a.onOutsideClick,
        s = a.onPressEntry,
        t = a.onShiftTab,
        u = a.onTab,
        v = a.onUpArrow,
        w = a.viewRole,
        x = a.xstyles;
      x = x === void 0 ? {} : x;
      var y = x.viewXStyle_DO_NOT_USE;
      x = babelHelpers.objectWithoutPropertiesLoose(x, [
        "viewXStyle_DO_NOT_USE",
      ]);
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "extraLayoutProps",
        "helperText",
        "label",
        "onAbandonTypeahead_DO_NOT_USE",
        "onBlur",
        "onChange",
        "onClick",
        "onDownArrow",
        "onEnter",
        "onEscape",
        "onHighlightEntry",
        "onOutsideClick",
        "onPressEntry",
        "onShiftTab",
        "onTab",
        "onUpArrow",
        "viewRole",
        "xstyles",
      ]);
      var z = c("useCometInternalTypeaheadFetch")();
      z = z.isLoading;
      var A = c("useCometInternalTypeaheadState")(),
        B = A.activeEntries,
        C = A.highlightedEntry;
      A = A.isOpened;
      b = c("useCometTypeaheadInputRefs")(b);
      var D = b.composedRef;
      b = b.inputRef;
      b = c("useCometTypeaheadInternalLayoutContextualStrategyHandlers")({
        inputRef: b,
        onAbandonTypeahead_DO_NOT_USE: j,
        onBlur: k,
        onChange: l,
        onClick: m,
        onDownArrow: n,
        onEnter: o,
        onEscape: p,
        onHighlightEntry: q,
        onOutsideClick: r,
        onPressEntry: s,
        onShiftTab: t,
        onTab: u,
        onUpArrow: v,
      });
      j = c("useCometTypeaheadLayoutContextualStrategyARIAProps")({
        activeEntries: B,
        helperText: f,
        highlightedEntry: C,
        inputLabel: g,
        isOpened: A,
        viewRole: w,
      });
      k = c("useCometTypeaheadLayoutStrategyStyles")({
        isOpened: A,
        xstyles: babelHelpers["extends"](
          { viewXStyle_DO_NOT_USE: [i.view, y] },
          x
        ),
      });
      return h.jsx(
        c("CometTypeaheadInternalLayoutContextualStrategy.react"),
        babelHelpers["extends"]({}, a, b, {
          extraLayoutProps: {
            afterViewContent: e,
            ariaProps: j,
            beforeViewContent: d,
            helperTextComponent:
              f != null
                ? h.jsx(c("CometTypeaheadHelperText.react"), { text: f })
                : null,
            isLoading: z,
            isOpened: A,
          },
          helperText: f,
          label: g,
          ref: D,
          viewRole: w,
          xstyles: k,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometTypeaheadViewItemIcon.react",
  ["ix", "TetraIcon.react", "fbicon", "react", "stylex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.isActive;
      a = a.type;
      return i.jsx("div", {
        className: c("stylex").dedupe(
          {
            "align-items-1": "bp9cbjyn",
            "background-color-1": "qsy8amke",
            "border-top-start-radius-1": "n00je7tq",
            "border-top-end-radius-1": "arfg74bv",
            "border-bottom-end-radius-1": "qs9ysxi8",
            "border-bottom-start-radius-1": "k77z8yql",
            "display-1": "j83agx80",
            "height-1": "tv7at329",
            "justify-content-1": "taijpn5t",
            "width-1": "thwo4zme",
          },
          b ? { "background-color-1": "cwj9ozl2" } : null
        ),
        children:
          a === "typed"
            ? i.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(h("491282"), 16),
                size: 16,
              })
            : i.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(h("478801"), 20),
                size: 20,
              }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadKeywordViewItem.react",
  [
    "CometTypeaheadHighlight.react",
    "CometTypeaheadViewItem.react",
    "CometTypeaheadViewItemIcon.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entry,
        d = a.isActive,
        e = a.queryString;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "entry",
        "isActive",
        "queryString",
      ]);
      return h.jsx(
        c("CometTypeaheadViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          isActive: d,
          itemStartContent: h.jsx(c("CometTypeaheadViewItemIcon.react"), {
            isActive: d,
            type: "typed",
          }),
          children: h.jsx(c("CometTypeaheadHighlight.react"), {
            content: b.getLabel(),
            query: e,
            strategy: "non-match",
            children: function (a) {
              return h.jsx(c("TetraText.react"), {
                numberOfLines: 1,
                type: "body3",
                children: a,
              });
            },
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadViewItemResolver.react",
  ["CometTypeaheadKeywordViewItem.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      var b = a.children,
        d = a.entry,
        e = a.entryMappings;
      a = a.fallbackViewItem;
      a = a === void 0 ? c("CometTypeaheadKeywordViewItem.react") : a;
      e = e.find(function (a) {
        a = a.resolver;
        return a(d);
      });
      if (e) {
        var f = e.viewItem;
        e = e.viewItemProps;
        return b(f, e);
      }
      return b(a);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadEmptyState",
  ["react", "useCometInternalTypeaheadFetch"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
      i = b.useState;
    function a() {
      var a = i(!0),
        b = a[0],
        d = a[1];
      a = c("useCometInternalTypeaheadFetch")();
      var e = a.isLoading;
      a = a.source;
      h(
        function () {
          e && d(!1);
        },
        [e]
      );
      a = ["all", "network"].includes(a);
      return !((a && b) || e);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadViewEmptyState.react",
  ["TetraText.react", "react", "stylex", "useCometTypeaheadEmptyState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "tv7at329",
          justifyContent: "taijpn5t",
        },
      };
    function a(a) {
      var b = a.children;
      a = a.xstyle;
      var d = c("useCometTypeaheadEmptyState")();
      return d
        ? h.jsx("div", {
            "aria-live": "polite",
            className: c("stylex")(i.root, a),
            children: h.jsx(c("TetraText.react"), {
              color: "tertiary",
              numberOfLines: 1,
              type: "body3",
              children: b,
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadRecentViewItem.react",
  [
    "CometTypeaheadViewItem.react",
    "CometTypeaheadViewItemIcon.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entry,
        d = a.isActive;
      a.queryString;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "entry",
        "isActive",
        "queryString",
      ]);
      return h.jsx(
        c("CometTypeaheadViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          isActive: d,
          itemStartContent: h.jsx(c("CometTypeaheadViewItemIcon.react"), {
            isActive: d,
            type: "recent",
          }),
          children: h.jsx(c("TetraText.react"), {
            numberOfLines: 2,
            type: "body3",
            children: (a = b.getLabel()) != null ? a : "",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadViewListStrategy",
  [
    "CometTypeaheadProgressGlimmer.react",
    "CometTypeaheadViewListStrategy.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.emptyStateContent,
        d = a.extraViewProps,
        e = a.nullstateContent,
        f = a.viewItemStrategyRenderer,
        g = a.viewListStrategyRenderer,
        j = g === void 0 ? c("CometTypeaheadViewListStrategy.react") : g,
        k = a.viewXStyle;
      return i(
        function (a) {
          var g = a.entries,
            i = a.isLoading,
            l = a.queryString;
          a = babelHelpers.objectWithoutPropertiesLoose(a, [
            "entries",
            "isLoading",
            "queryString",
          ]);
          if (l.length === 0 && e != null) return e;
          return g.length === 0 && b != null
            ? b
            : h.jsxs("div", {
                className: c("stylex")([k]),
                children: [
                  h.jsx(
                    j,
                    babelHelpers["extends"]({}, a, {
                      entries: g,
                      extraViewProps: d,
                      isLoading: !1,
                      queryString: l,
                      viewItemStrategyRenderer: f,
                    })
                  ),
                  i && h.jsx(c("CometTypeaheadProgressGlimmer.react"), {}),
                ],
              });
        },
        [b, d, e, f, k]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSearchTypeaheadBaseViewRecentEmptyState.react",
  ["fbt", "CometTypeaheadViewEmptyState.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx(c("CometTypeaheadViewEmptyState.react"), {
        children: h._("No recent searches"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSearchScopedTypeaheadStyles",
  [],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      typeaheadInput: { alignItems: "bp9cbjyn", display: "j83agx80" },
      typeaheadView: {
        borderBottomEndRadius: "uo3d90p7",
        borderBottomStartRadius: "l82x9zwi",
        borderBottomWidth: "afxsp9o4",
        borderTopColor: "ke985yof",
        borderEndColor: "b2m76dm3",
        borderBottomColor: "grkpwi79",
        borderStartColor: "nksai4kh",
        borderEndWidth: "ed0hlay0",
        borderStartWidth: "jcgfde61",
        borderTopStyle: "goun2846",
        borderEndStyle: "ccm00jje",
        borderBottomStyle: "s44p3ltw",
        borderStartStyle: "mk2mc5f4",
        borderTopEndRadius: "h905i5nu",
        borderTopStartRadius: "monazrh9",
        borderTopWidth: "rt8b4zig",
        boxShadow: "s99qchmh",
        paddingTop: "cxgpxx05",
        paddingEnd: "dflh9lhu",
        paddingBottom: "sj5x9vvc",
        paddingStart: "scb9dxdr",
      },
    };
    b = a.typeaheadInput;
    c = a.typeaheadView;
    g.typeaheadInput = b;
    g.typeaheadView = c;
  },
  98
);
__d(
  "CometSearchScopedTypeaheadInputStrategy.react",
  [
    "CometSearchEventEmitterContext",
    "CometTypeaheadInputRoundedStrategy.react",
    "react",
    "useCometTypeaheadInputRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect;
    function a(a, b) {
      var d = a.inputExtraProps,
        e = a.onChange;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "inputExtraProps",
        "onChange",
      ]);
      var f = i(c("CometSearchEventEmitterContext")),
        g = f.subscribeToScopedSearchTypeaheadFocus;
      f = c("useCometTypeaheadInputRefs")(b);
      b = f.composedRef;
      f = f.inputRef;
      var k = f.current;
      j(
        function () {
          var a = g(function () {
            if (k == null) return;
            k.focus();
            k.value = "";
            e("");
          });
          return function () {
            a();
          };
        },
        [k, e, g]
      );
      return h.jsx(
        c("CometTypeaheadInputRoundedStrategy.react"),
        babelHelpers["extends"]({}, a, {
          inputExtraProps: babelHelpers["extends"]({}, d, { size: "medium" }),
          onChange: e,
          ref: b,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
