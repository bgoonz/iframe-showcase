if (self.CavalryLogger) {
  CavalryLogger.start_js(["UC3MxV1"]);
}

__d(
  "CometLeftRailBreadcrumbLink.react",
  ["CometLink.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.isCurrentPage;
      b = b === void 0 ? !1 : b;
      a = a.linkInfo;
      var d = "secondary",
        e = a.url != null || a.onPress != null,
        f = a.replace != null ? a.replace : !1;
      e = e
        ? h.jsx(c("CometLink.react"), {
            "aria-current": b ? "page" : void 0,
            color: d,
            href: a.url,
            onClick: a.onPress,
            replace: f,
            target: f === !0 ? "_self" : void 0,
            weight: "normal",
            children: a.label,
          })
        : a.label;
      return h.jsx(c("TetraText.react"), {
        color: d,
        type: "meta3",
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometLeftRailBreadcrumbs.react",
  [
    "fbt",
    "CometLeftRailBreadcrumbLink.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.breadcrumbs;
      a = a.label;
      var d = " \u203a ",
        e = b.map(function (a, e) {
          return i.jsxs(
            i.Fragment,
            {
              children: [
                e === 0
                  ? null
                  : i.jsx(c("TetraText.react"), {
                      color: "tertiary",
                      type: "meta3",
                      children: d,
                    }),
                i.jsx(c("CometLeftRailBreadcrumbLink.react"), {
                  isCurrentPage: e === b.length - 1,
                  linkInfo: a,
                }),
              ],
            },
            e
          );
        });
      return i.jsx("div", {
        "aria-label": (a = a) != null ? a : h._("Breadcrumb"),
        "data-testid": void 0,
        role: "navigation",
        suppressHydrationWarning: !c("gkx")("708253"),
        children: i.jsx(c("TetraTextPairing.react"), { body: e, level: 2 }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometLeftRailAndMainContentContainer.react",
  [
    "BaseHeadingContext",
    "BaseRow.react",
    "BaseRowItem.react",
    "CometLeftRailLayoutContext",
    "CometLeftRailPrimaryContext",
    "CometRouterFocusRegion.react",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        container: {
          display: "j83agx80",
          flexGrow: "buofh1pr",
          minHeight: "dp1hu0rb",
          position: "l9j0dhe7",
          zIndex: "du4w35lb",
        },
        containerWithMinWidth: { minWidth: "ka73uehy" },
        contentArea: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          minHeight: "dp1hu0rb",
          minWidth: "hpfvmrgz",
          position: "l9j0dhe7",
          zIndex: "du4w35lb",
        },
        contentAreaWithLeftRailPrimary: {
          "@media (max-width: 899px)": { display: "hlyrhctz" },
        },
        hideLeftRail: { display: "mkhogb32" },
        leftRail: {
          flexShrink: "pfnyh3mw",
          minHeight: "dp1hu0rb",
          overflowAnchor: "rek2kq2y",
          width: "o36gj0jk",
          zIndex: "tkr6xdv7",
        },
        leftRailPrimaryResponsive: {
          "@media (max-width: 900px)": { width: "oali7pvx" },
        },
        leftRailSecondaryResponsive: {
          "@media (max-width: 900px)": { display: "ahb00how" },
        },
        mainContent: { display: "j83agx80", minHeight: "dp1hu0rb" },
      };
    function a(a) {
      var b = a.hideLeftRail;
      b = b === void 0 ? !1 : b;
      var d = a.isLeftRailResponsive;
      d = d === void 0 ? !1 : d;
      var e = a.leftRailContent,
        f = a.leftRailHeading,
        g = a.leftRailPrimary;
      g = g === void 0 ? !1 : g;
      var k = a.leftRailRole;
      k = k === void 0 ? "navigation" : k;
      var l = a.mainContent,
        m = a.mainContentHeading;
      a = a.testid;
      a = i(c("BaseHeadingContext"));
      a = h.jsx("div", {
        className: c("stylex")(
          j.contentArea,
          g === !0 && j.contentAreaWithLeftRailPrimary
        ),
        children: h.jsx(c("CometLeftRailLayoutContext").Provider, {
          value: !0,
          children: h.jsx(c("BaseHeadingContext").Provider, {
            value: a + 1,
            children: l,
          }),
        }),
      });
      l = k === "main";
      return h.jsx(c("BaseRow.react"), {
        align: "start",
        testid: void 0,
        xstyle: [j.container, !d && j.containerWithMinWidth],
        children: h.jsxs(c("CometLeftRailPrimaryContext").Provider, {
          value: g,
          children: [
            h.jsx(c("BaseRowItem.react"), {
              "aria-label": f,
              role: k,
              suppressHydrationWarning: !c("gkx")("708253"),
              xstyle: [
                j.leftRail,
                d && !l && j.leftRailSecondaryResponsive,
                d && l && j.leftRailPrimaryResponsive,
                b && j.hideLeftRail,
              ],
              children: l
                ? h.jsx(c("CometRouterFocusRegion.react"), { children: e })
                : e,
            }),
            h.jsx(c("BaseRowItem.react"), {
              "aria-label": m,
              expanding: !0,
              role: l ? "complementary" : "main",
              suppressHydrationWarning: !c("gkx")("708253"),
              xstyle: j.mainContent,
              children: l
                ? a
                : h.jsx(c("CometRouterFocusRegion.react"), { children: a }),
            }),
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
  "CometLeftRailListItemSeparator.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.marginHorizontal;
      b = b === void 0 ? 12 : b;
      a = a.marginVertical;
      a = a === void 0 ? 8 : a;
      return h.jsx("div", {
        className: "s1tcr66n",
        role: "separator",
        style: { margin: a + "px " + b + "px" },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometLeftRailComponent.react",
  [
    "BaseHeadingContext",
    "CometBase.react",
    "CometLeftRailListItemSeparator.react",
    "CometLeftRailPrimaryContext",
    "CometRouteRenderType",
    "CometScrollView.react",
    "gkx",
    "react",
    "stylex",
    "useIsLoggedOut",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useState,
      l = c("gkx")("708253"),
      m = c("gkx")("1217157"),
      n = c("gkx")("1745416"),
      o = {
        headerOnGemini: { marginTop: "ourw01k9" },
        leftRailContainer: {
          backgroundColor: "hybvsw6c",
          boxSizing: "cjfnh4rs",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          minHeight: "dp1hu0rb",
          position: "l9j0dhe7",
          top: "kr520xx4",
          width: "o36gj0jk",
          "@media (max-width: 899px)": {
            height: "spg0vajj",
            position: "aip8ia32",
          },
          "@media (min-width: 900px)": {
            maxHeight: "so2p5rfc",
            position: "hxa2dpaq",
          },
        },
        leftRailContainerInBizWeb: {
          backgroundColor: "hybvsw6c",
          boxSizing: "cjfnh4rs",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          minHeight: "dp1hu0rb",
          position: "l9j0dhe7",
          top: "kr520xx4",
          width: "o36gj0jk",
        },
        leftRailContainerInDialog: {
          top: "kr520xx4",
          "@media (max-width: 899px)": {
            minHeight: "pnfry9he",
            position: "ow71b3p4",
          },
          "@media (min-width: 900px)": {
            minHeight: "wrtwqps9",
            position: "owhy4gn4",
          },
        },
        leftRailContainerPermalink: {
          top: "be9z9djy",
          "@media (max-width: 899px)": {
            height: "jyyn76af",
            position: "aip8ia32",
          },
          "@media (min-width: 900px)": { position: "hxa2dpaq" },
        },
        leftRailContainerPermalinkBlue: {
          top: "t38bcc6f",
          "@media (max-width: 899px)": { position: "aip8ia32" },
          "@media (min-width: 900px)": { position: "hxa2dpaq" },
        },
        leftRailContainerPermalinkBlueLoggedOut: {
          top: "kr520xx4",
          "@media (max-width: 899px)": {
            minHeight: "pnfry9he",
            position: "ow71b3p4",
          },
          "@media (min-width: 900px)": {
            minHeight: "wrtwqps9",
            position: "owhy4gn4",
          },
        },
        leftRailContainerPushViewHeader: {
          boxShadow: "q0erg9cb",
          flexShrink: "pfnyh3mw",
          height: "byvelhso",
        },
        leftRailPrimaryContainer: {
          "@media (max-width: 899px)": {
            height: "spskuzq3",
            position: "ow71b3p4",
            top: "iy36qjp1",
          },
        },
        leftRailPrimaryShadow: {
          "@media (max-width: 899px)": { display: "hlyrhctz" },
        },
        leftRailShadow: {
          backgroundImage: "kd0sc8dh",
          backgroundRepeat: "sl8jk4me",
          backgroundSize: "ie5zihkj",
          bottom: "i09qtzwb",
          end: "rm3jng1j",
          pointerEvents: "hzruof5a",
          position: "pmk7jnqg",
          top: "kr520xx4",
          width: "c0wkt4kp",
        },
        primaryNav: { marginTop: "aov4n071" },
        primaryNavExpanding: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
        },
        primaryNavWithSearch: { marginTop: "aahdfvyu" },
        scrollDropShadow: {
          borderBottom: "s1tcr66n",
          marginEnd: "wkznzc2l",
          marginStart: "dhix69tm",
        },
        search: { marginBottom: "n851cfcs", marginTop: "aahdfvyu" },
        stickyNavWithoutHeader: { marginTop: "aov4n071" },
        stickyNavWithoutSearch: { marginBottom: "n851cfcs" },
      };
    function a(a) {
      var b = a.footer,
        e = a.header,
        f = a.isCometLeftRailInDialog;
      f = f === void 0 ? !1 : f;
      var g = a.isNonCometLeftRailWithoutTopSpacing;
      g = g === void 0 ? !1 : g;
      var p = a.onLeftRailScroll,
        q = a.primaryNav,
        r = a.primaryNavExpanding;
      r = r === void 0 ? !1 : r;
      var s = a.search,
        t = a.secondaryNav,
        u = a.shouldHidePushViewHeader;
      u = u === void 0 ? !1 : u;
      var v = a.stickyNav,
        w = a.testid;
      w = a.xstyle;
      a = c("useIsLoggedOut")();
      var x = j(c("BaseHeadingContext")),
        y = d("CometRouteRenderType").useIsPushView(),
        z = j(c("CometLeftRailPrimaryContext")),
        A = k(!1),
        B = A[0],
        C = A[1];
      A = i(
        function (a) {
          p && p(a), C(!0);
        },
        [p]
      );
      var D = i(function () {
        C(!1);
      }, []);
      return h.jsxs("div", {
        className: c("stylex")(
          n ? o.leftRailContainerInBizWeb : o.leftRailContainer,
          !y && l && o.leftRailContainerPermalink,
          !y && !l && !g && !n && o.leftRailContainerPermalinkBlue,
          !y && !l && a && o.leftRailContainerPermalinkBlueLoggedOut,
          z === !0 && o.leftRailPrimaryContainer,
          f === !0 && o.leftRailContainerInDialog,
          w
        ),
        "data-testid": void 0,
        children: [
          y &&
            !u &&
            h.jsx("div", {
              className: c("stylex")(o.leftRailContainerPushViewHeader),
            }),
          m
            ? h.jsx(c("CometBase.react"), {
                xstyle: o.headerOnGemini,
                children: e,
              })
            : e,
          v != null &&
            h.jsx(c("CometBase.react"), {
              xstyle: [
                e == null && o.stickyNavWithoutHeader,
                s == null && o.stickyNavWithoutSearch,
              ],
              children: v,
            }),
          s != null &&
            h.jsx(c("CometBase.react"), { xstyle: o.search, children: s }),
          (e != null || s != null || v != null) &&
            B &&
            h.jsx("div", { className: c("stylex")(o.scrollDropShadow) }),
          h.jsx(c("CometScrollView.react"), {
            onScroll: A,
            onScrollTop: D,
            showsHorizontalScrollIndicator: !1,
            children: h.jsxs(c("BaseHeadingContext").Provider, {
              value: x + 1,
              children: [
                q != null &&
                  h.jsx("div", {
                    className: c("stylex")(
                      e != null && s == null && o.primaryNav,
                      e != null && s != null && o.primaryNavWithSearch,
                      r && o.primaryNavExpanding
                    ),
                    children: q,
                  }),
                q != null && t != null
                  ? h.jsx(c("CometLeftRailListItemSeparator.react"), {})
                  : null,
                t,
              ],
            }),
          }),
          b,
          h.jsx("div", {
            className: c("stylex")(
              o.leftRailShadow,
              z === !0 && o.leftRailPrimaryShadow
            ),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMiniShopPDPContainer.react",
  [
    "CometErrorBoundary.react",
    "GHLSurfaceContainerContext",
    "MarketplaceCriticalErrorMessage.react",
    "MarketplacePDPMediaViewerSetImageContext",
    "MiniShopContext",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useRef,
      k = {
        desktopPadding: { paddingEnd: "gpl4oick", paddingStart: "gm7ombtx" },
        header: {
          position: "pmk7jnqg",
          start: "j9ispegn",
          width: "ina5je9e",
          zIndex: "tkr6xdv7",
        },
        inner: {
          display: "j83agx80",
          paddingTop: "discj3wi",
          width: "k4urcfbm",
          "@media (max-width: 899px)": { flexDirection: "psu0lv52" },
        },
        lhc: {
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        pivotsContainer: { flexBasis: "d8ncny3e", width: "k4urcfbm" },
        rhc: {
          flexBasis: "o387gat7",
          flexShrink: "pfnyh3mw",
          height: "datstx6m",
          "@media (min-width: 900px)": { paddingStart: "ozdf5g9x" },
        },
        root: {
          backgroundColor: "cwj9ozl2",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          maxWidth: "owwhemhu",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          "@media (max-width: 899px)": {
            height: "spskuzq3",
            overflowX: "j4adptuz",
            overflowY: "pvmvtzch",
          },
        },
        topPaddingForHeader: { paddingTop: "tul83o3m" },
      };
    function a(a) {
      var b = a.header,
        e = a.mediaViewer,
        f = a.pivots;
      a = a.rightColumn;
      var g = j(null),
        l = f != null,
        m = i(c("MiniShopContext"));
      m = m.isOnMobile;
      return h.jsx(
        d("MarketplacePDPMediaViewerSetImageContext").SetImageContextProvider,
        {
          children: h.jsx("div", {
            className: c("stylex")([k.root, !m && k.desktopPadding]),
            ref: g,
            children: h.jsxs(c("GHLSurfaceContainerContext").Provider, {
              value: g,
              children: [
                b != null &&
                  h.jsx("div", {
                    className: c("stylex")(k.header),
                    children: b,
                  }),
                h.jsxs("div", {
                  className: c("stylex")(
                    k.inner,
                    b != null && k.topPaddingForHeader
                  ),
                  children: [
                    h.jsx("div", {
                      className: c("stylex")(k.lhc),
                      children: h.jsx(c("CometErrorBoundary.react"), {
                        children: e,
                      }),
                    }),
                    h.jsx("div", {
                      className: c("stylex")(k.rhc),
                      children: h.jsx(c("CometErrorBoundary.react"), {
                        fallback: function () {
                          return h.jsx(
                            c("MarketplaceCriticalErrorMessage.react"),
                            {}
                          );
                        },
                        children: a,
                      }),
                    }),
                  ],
                }),
                l &&
                  h.jsx("div", {
                    className: c("stylex")(k.pivotsContainer),
                    children: f,
                  }),
              ],
            }),
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MiniShopPDPAdminContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { isAdmin: !1 };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "CometSearchScopedTypeahead.react",
  [
    "BaseTypeahead.react",
    "CometSearchScopedTypeaheadInputStrategy.react",
    "CometSearchScopedTypeaheadStyles",
    "CometTypeaheadLayoutContextualStrategy.react",
    "react",
    "useStable",
    "withSearchCometTypeaheadBaseNavigationDecorator",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = {
        12: { paddingEnd: "d1544ag0", paddingStart: "tw6a2znq" },
        16: { paddingEnd: "hv4rvrfc", paddingStart: "dati1w0a" },
      };
    function a(a) {
      var b = a.paddingHorizontal,
        e = b === void 0 ? 16 : b;
      b = babelHelpers.objectWithoutPropertiesLoose(a, ["paddingHorizontal"]);
      a = i(
        function () {
          return {
            inputXStyle: [
              d("CometSearchScopedTypeaheadStyles").typeaheadInput,
              j[e],
            ],
            viewXStyle_DO_NOT_USE: d("CometSearchScopedTypeaheadStyles")
              .typeaheadView,
          };
        },
        [e]
      );
      var f = c("useStable")(function () {
        return c("withSearchCometTypeaheadBaseNavigationDecorator")(
          c("BaseTypeahead.react")
        );
      });
      return h.jsx(
        f,
        babelHelpers["extends"]({}, b, {
          inputStrategyRenderer: c(
            "CometSearchScopedTypeaheadInputStrategy.react"
          ),
          layoutStrategyRenderer: c(
            "CometTypeaheadLayoutContextualStrategy.react"
          ),
          xstyles: a,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometPageVanityControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/{vanity}/", Object.freeze({ ref: "" }), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
