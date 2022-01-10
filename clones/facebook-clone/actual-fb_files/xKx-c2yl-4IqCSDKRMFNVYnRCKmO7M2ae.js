if (self.CavalryLogger) {
  CavalryLogger.start_js(["1OFAdSd"]);
}

__d(
  "CometBookmarksAddOnUtils",
  ["ImageIconSource"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      a = a;
      var f = null;
      (d === !1 || a == null) && (f = b);
      if (f == null && a == null) return null;
      if (f != null && e !== "FOLDER")
        return {
          shape: e === "USER" || e === "PAGE" ? "circle" : "roundedRect",
          size: 36,
          source: { uri: f },
          type: "profile-photo",
        };
      else if (a != null)
        return { icon: new (c("ImageIconSource"))(a, 36, 36), type: "icon" };
      return void 0;
    }
    g.getBookmarkAddOnPrimary = a;
  },
  98
);
__d(
  "useFullViewImpressionLogger",
  [
    "BaseViewportMarginsContext",
    "getIntersectionMarginFromViewportMargin",
    "intersectionObserverEntryIsIntersecting",
    "react",
    "recoverableViolation",
    "useIntersectionObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef,
      k = new Array(20)
        .fill()
        .map(function (a, b) {
          return b / 20;
        })
        .concat(1);
    function a(a, b) {
      var d = i(c("BaseViewportMarginsContext")),
        e = j({ bottomRight: !1, hasBeenLogged: !1, topLeft: !1 }),
        f = j(!1),
        g = h(
          function (d) {
            var g = c("intersectionObserverEntryIsIntersecting")(d);
            if (!g && e.current.hasBeenLogged)
              e.current = { bottomRight: !1, hasBeenLogged: !1, topLeft: !1 };
            else if (g && !e.current.hasBeenLogged) {
              g = d.rootBounds;
              if (g == null) {
                f.current ||
                  ((f.current = !0),
                  c("recoverableViolation")(
                    "entry.rootBounds was null in useFullViewImpressionLogger",
                    "comet_feed"
                  ));
                return;
              }
              d.intersectionRatio === 1
                ? ((e.current.bottomRight = !0), (e.current.topLeft = !0))
                : (e.current.bottomRight ||
                    (e.current.bottomRight =
                      d.boundingClientRect.bottom <= g.bottom &&
                      d.boundingClientRect.right <= g.right),
                  e.current.topLeft ||
                    (e.current.topLeft =
                      d.boundingClientRect.top >= g.top &&
                      d.boundingClientRect.left >= g.left));
              if (e.current.bottomRight && e.current.topLeft) {
                var h = new Date();
                e.current.hasBeenLogged = !0;
                a.onReady(function (a) {
                  b(a, h);
                });
              }
            }
          },
          [b, a]
        );
      return c("useIntersectionObserver")(g, {
        root: null,
        rootMargin: c("getIntersectionMarginFromViewportMargin")(d),
        threshold: k,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometProfileSwitchWithLogoutMutation",
  [
    "CometProfileSwitchCleanAndLogoutUtils",
    "CometRelay",
    "JSResourceForInteraction",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("JSResourceForInteraction")(
        "CometProfileSwitchWithLogoutMutation"
      ).__setRef("useCometProfileSwitchWithLogoutMutation");
    function a(a, b, e) {
      var f = d("CometRelay").useRelayEnvironment();
      return h(
        function () {
          if (a == null) return;
          c("promiseDone")(
            i.load().then(function (c) {
              c = c.switchProfileWithLogout;
              c(
                f,
                { profileId: a },
                {
                  onCompleted: function (a) {
                    a =
                      a == null
                        ? void 0
                        : (a = a.profile_switcher_comet_login_with_logout) ==
                          null
                        ? void 0
                        : a.logout_whitelist;
                    Array.isArray(a) &&
                      d(
                        "CometProfileSwitchCleanAndLogoutUtils"
                      ).cleanAndLogoutForProfileSwitch(a, b);
                  },
                  onError: function (a) {
                    e && e(a);
                  },
                }
              );
            })
          );
        },
        [f, a, e, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometProgressivelyEnhancedComponent.react",
  ["CometPlaceholder.react", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.startTransition,
      j = e.useEffect,
      k = e.useState;
    function a(a) {
      var b = a.children,
        d = a.fallback,
        e = a.forceFallback;
      e = e === void 0 ? !1 : e;
      var f = a.shouldStartEnhanced;
      f = f === void 0 ? !1 : f;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "fallback",
        "forceFallback",
        "shouldStartEnhanced",
      ]);
      f = k(f);
      var g = f[0],
        l = f[1];
      j(
        function () {
          g ||
            i(function () {
              l(!0);
            });
        },
        [g, i]
      );
      return h.jsx(
        c("CometPlaceholder.react"),
        babelHelpers["extends"]({ fallback: d }, a, {
          children: g && !e ? b : d,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      a.forceFallback;
      a.shouldStartEnhanced;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "forceFallback",
        "shouldStartEnhanced",
      ]);
      return h.jsx(c("CometPlaceholder.react"), babelHelpers["extends"]({}, a));
    }
    b.displayName = b.name + " [from " + f.id + "]";
    d = c("gkx")("1238208") ? a : b;
    g["default"] = d;
  },
  98
);
__d(
  "isCometUFIComposerStateEmpty",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.attachment;
      a = a.inputState;
      if (b != null) return !1;
      switch (a.__type) {
        case "editor-state-based":
          return !a.editorState.getCurrentContent().hasText();
        case "plain-text":
          return !(a.text && a.text.trim().length);
        case "outline-editor-state-based":
          throw c("FBLogger")("UFIOutlineComposer").mustfixThrow(
            "Outline editor encountered within draftjs-only code. This should never happen."
          );
        default:
          return a.__type;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "setFocusOnCometUFIComposerInputState",
  ["cr:81"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:81");
  },
  98
);
__d(
  "ProductEngagementSurface",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({
      BOOKMARK_LIST: "bookmark",
      PLAZA: "plaza",
      TAB: "tab",
      COMET_RHC: "comet_rhc",
      COMET_LHC: "comet_lhc",
      COMET_MEGA_MENU: "comet_mega_menu",
      FEED: "feed",
      FBLITE: "fblite",
      GLOBAL_LIBRARY: "global_library",
    });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "useBookmarkFalcoFullViewLogger",
  [
    "CometPassiveGetRouterStateContext",
    "CometProductAttribution",
    "react",
    "requireDeferred",
    "useFullViewImpressionLogger",
    "useMinifiedProductAttribution",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef,
      k = c("requireDeferred")("WebBookmarkImpressionFalcoEvent").__setRef(
        "useBookmarkFalcoFullViewLogger"
      ),
      l = 60 * 1e3;
    function a(a, b, e, f) {
      var g = j(0),
        m = i(c("CometPassiveGetRouterStateContext")),
        n = c("useMinifiedProductAttribution")(),
        o = h(
          function () {
            return f === "comet_mega_menu"
              ? d(
                  "CometProductAttribution"
                ).getMinifiedTopMostRouteProductAttribution(m)
              : n;
          },
          [m, n, f]
        ),
        p = h(
          function (c, d) {
            d = d.getTime();
            if (d - g.current >= l && a != null) {
              g.current = d;
              var h = b == null ? void 0 : b.toString(),
                i = e == null ? void 0 : e.toString();
              c.log(function () {
                return {
                  interface_override: "comet_www",
                  item_rank: h,
                  pa: o(),
                  shortcut_count: i,
                  surface: f,
                  tracking_data: a,
                };
              });
            }
          },
          [a, b, e, o, f]
        );
      return c("useFullViewImpressionLogger")(k, p);
    }
    g["default"] = a;
  },
  98
);
