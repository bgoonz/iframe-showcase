if (self.CavalryLogger) {
  CavalryLogger.start_js(["EaFRor8"]);
}

__d(
  "deepCompare",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      if (a === b) return !0;
      if (!(a instanceof Object) || !(b instanceof Object)) return !1;
      if (a.constructor !== b.constructor) return !1;
      if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return !1;
        var c = {},
          d = 0;
        for (var e = 0, f = a.length; e < f; e++) {
          var h = d;
          for (var i = 0, j = b.length; i < j && h === d; i++) {
            if (c[i]) continue;
            g(a[e], b[i]) && ((c[i] = !0), d++);
          }
        }
        return d === a.length;
      } else {
        h = a;
        i = b;
        for (var k in h) {
          if (!Object.prototype.hasOwnProperty.call(h, k)) continue;
          if (!Object.prototype.hasOwnProperty.call(i, k)) return !1;
          if (h[k] === i[k]) continue;
          if (typeof h[k] !== "object") return !1;
          if (!g(h[k], i[k])) return !1;
        }
        for (k in i)
          if (
            Object.prototype.hasOwnProperty.call(i, k) &&
            !Object.prototype.hasOwnProperty.call(h, k)
          )
            return !1;
      }
      return !0;
    }
    f["default"] = g;
  },
  66
);
__d(
  "InstantGamesButton.react",
  [
    "cx",
    "Image.react",
    "ShimButton.react",
    "emptyFunction",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a =
            this.props.icon == null
              ? null
              : i.jsx(c("Image.react"), {
                  className: "o3lre8g0",
                  src: this.props.icon,
                }),
          b =
            (this.props.darkMode === !0 ? "_9udh" : "") +
            (this.props.isDeEmphasized === !0 ? " _9udi" : "") +
            (this.props.isDisabled === !0 ? " _8kap" : "") +
            (this.props.isComet !== !0 ? " _8kaq" : "") +
            (this.props.isComet === !0 ? " _9udj" : "") +
            (this.props.isSecondary === !0 ? " _9udk" : "");
        return i.jsxs(c("ShimButton.react"), {
          className: c("joinClasses")("_1afk", b, this.props.className),
          "data-testid": void 0,
          onClick:
            this.props.isDisabled === !0
              ? c("emptyFunction")
              : this.props.onClick,
          children: [a, this.props.title],
        });
      };
      return b;
    })(i.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "DeferredCloseButton.react",
  [
    "CometPlaceholder.react",
    "XUISpinner.react",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferred")("CloseButton.react").__setRef(
          "DeferredCloseButton.react"
        )
      );
    function a(a) {
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: h.jsx(c("XUISpinner.react"), {}),
        children: h.jsx(i, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useForceUpdate",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useReducer;
    function a() {
      var a = h(function (a) {
        return a + 1;
      }, 0);
      a[0];
      a = a[1];
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCopyText",
  [
    "DateConsts",
    "clearTimeout",
    "react",
    "requireDeferred",
    "setTimeout",
    "useForceUpdate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState,
      l = c("requireDeferred")("Clipboard").__setRef("useCopyText"),
      m = null;
    l.onReady(function (a) {
      m = a;
    });
    function a(a) {
      var b = a.onCopyPress,
        e = a.value;
      a = k(!1);
      var f = a[0],
        g = a[1],
        n = j(null),
        o = m != null && m.isSupported(),
        p = m,
        q = c("useForceUpdate")();
      i(
        function () {
          if (p == null)
            if (m == null) return l.onReady(q).remove;
            else q();
        },
        [p, q]
      );
      a = h(
        function () {
          b != null && b();
          if (o && typeof e === "string") {
            var a;
            a = (a = m) == null ? void 0 : a.copy(e);
            a === !0 &&
              (g(!0),
              c("clearTimeout")(n.current),
              (n.current = c("setTimeout")(function () {
                g(!1);
              }, 0.75 * d("DateConsts").MS_PER_SEC)));
          }
        },
        [b, n, e, o]
      );
      return [o, f, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometGamesPlayerMoreActionsDropdown.react",
  [
    "fbt",
    "CometMenu.react",
    "CometMenuItem.react",
    "CometPopover.react",
    "react",
    "useCopyText",
    "useLaunchFRXFlow",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.appID,
        d = a.fbGGURL,
        e = a.onClose;
      a = c("useLaunchFRXFlow")({
        content_id: b,
        entry_point: "DEVELOPER_FEEDBACK_BUTTON",
        location: "INSTANT_GAMES",
        trigger_event_type: "REPORT_BUTTON_CLICKED",
      });
      var f = a[0];
      a = a[1];
      b = c("useLaunchFRXFlow")({
        content_id: b,
        entry_point: "REPORT_BUTTON",
        location: "INSTANT_GAMES",
        trigger_event_type: "REPORT_BUTTON_CLICKED",
      });
      var g = b[0];
      b = b[1];
      var j = c("useCopyText")({ value: d }),
        k = j[0];
      j[1];
      var l = j[2];
      return i.jsx(c("CometPopover.react"), {
        role: "menu",
        children: i.jsxs(c("CometMenu.react"), {
          size: "full",
          children: [
            i.jsx(c("CometMenuItem.react"), {
              onClick: function () {
                e(), f({});
              },
              primaryText: h._("Give Game Feedback"),
              ref: a,
            }),
            i.jsx(c("CometMenuItem.react"), {
              onClick: function () {
                e(), g({});
              },
              primaryText: h._("Report to Facebook"),
              ref: b,
            }),
            d != null && k
              ? i.jsx(c("CometMenuItem.react"), {
                  onClick: function () {
                    e(), l();
                  },
                  primaryText: h._("Copy Link to Game"),
                })
              : null,
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "differenceSets",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = new Set();
      for (
        var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
        e < c;
        e++
      )
        d[e - 1] = arguments[e];
      FIRST: for (
        var f = a,
          g = Array.isArray(f),
          h = 0,
          f = g
            ? f
            : f[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var i;
        if (g) {
          if (h >= f.length) break;
          i = f[h++];
        } else {
          h = f.next();
          if (h.done) break;
          i = h.value;
        }
        var j = i;
        for (var k = 0; k < d.length; k++) {
          var l = d[k];
          if (l.has(j)) continue FIRST;
        }
        b.add(j);
      }
      return b;
    }
    f["default"] = a;
  },
  66
);
