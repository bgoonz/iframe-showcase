if (self.CavalryLogger) {
  CavalryLogger.start_js(["R9aqEAa"]);
}

__d(
  "CometEntityHeaderStickyBottomRow_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometEntityHeaderStickyBottomRow_entity",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useBaseEntityHeaderProfile_profile",
        },
      ],
      type: "Profile",
      abstractKey: "__isProfile",
    };
    e.exports = a;
  },
  null
);
__d(
  "useBaseEntityHeaderProfile_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "useBaseEntityHeaderProfile_profile",
      selections: [
        {
          alias: "profile_picture_for_sticky_bar",
          args: [
            { kind: "Literal", name: "height", value: 40 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 40 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
          ],
          type: "Entity",
          abstractKey: "__isEntity",
        },
      ],
      type: "Profile",
      abstractKey: "__isProfile",
    };
    e.exports = a;
  },
  null
);
__d(
  "useCurrentRouteEntityKey",
  ["getCometEntityKey", "react", "useCurrentRoute"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a() {
      var a = c("useCurrentRoute")(),
        b = h(
          function () {
            return a ? c("getCometEntityKey")(a) : null;
          },
          [a]
        );
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityHeaderStickyBar.react",
  ["BaseRow.react", "BaseRowItem.react", "CometBase.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useImperativeHandle,
      k = b.useRef,
      l = {
        container: {
          transitionDuration: "ijkhr0an",
          transitionProperty: "flx89l3n",
          transitionTimingFunction: "nna1d5md",
        },
        containerSticky: { transform: "i9k17dj3" },
        fadeInTransition: {
          transitionDuration: "c0paw9va",
          transitionProperty: "l23jz15m",
          transitionTimingFunction: "d4752i1f",
        },
        fadeOutTransition: {
          transitionDuration: "dvqrsczn",
          transitionProperty: "l23jz15m",
          transitionTimingFunction: "d4752i1f",
        },
        primaryRow: {
          minHeight: "pxsmfnpt",
          opacity: "pedkr2u6",
          visibility: "n1dktuyu",
        },
        primaryRowSticky: { opacity: "b5wmifdl", visibility: "kr9hpln1" },
        root: {
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
        },
        stickyRow: {
          height: "datstx6m",
          opacity: "b5wmifdl",
          position: "pmk7jnqg",
          top: "i42f9fw1",
          visibility: "kr9hpln1",
          width: "k4urcfbm",
        },
        stickyRowSticky: { opacity: "pedkr2u6", visibility: "n1dktuyu" },
      };
    function m(a, b, c) {
      b(!c)
        .split(/\s+/)
        .filter(Boolean)
        .forEach(function (b) {
          return a.classList.remove(b);
        }),
        b(c)
          .split(/\s+/)
          .filter(Boolean)
          .forEach(function (b) {
            return a.classList.add(b);
          });
    }
    function a(a, b) {
      var d = a.initialSticky;
      d = d === void 0 ? !1 : d;
      var e = a.isStickyExpanding;
      e = e === void 0 ? !1 : e;
      var f = a.primaryContent,
        g = a.stickyContent,
        n = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "initialSticky",
        "isStickyExpanding",
        "primaryContent",
        "stickyContent",
        "xstyle",
      ]);
      var o = k(d),
        p = k(),
        q = k(),
        r = k(),
        s = k(),
        t = function () {
          p.current != null &&
            (window.cancelAnimationFrame(p.current), (p.current = null));
        };
      j(b, function () {
        return {
          setSticky: function (a) {
            (o.current = a),
              t(),
              (p.current = window.requestAnimationFrame(function () {
                p.current = null;
                var b = q.current;
                b != null &&
                  m(
                    b,
                    function (a) {
                      return c("stylex")(a && l.containerSticky);
                    },
                    a
                  );
                b = r.current;
                b != null &&
                  m(
                    b,
                    function (a) {
                      return c("stylex")(
                        a && l.primaryRowSticky,
                        a ? l.fadeInTransition : l.fadeOutTransition
                      );
                    },
                    a
                  );
                b = s.current;
                b != null &&
                  m(
                    b,
                    function (a) {
                      return c("stylex")(
                        a && l.stickyRowSticky,
                        a ? l.fadeOutTransition : l.fadeInTransition
                      );
                    },
                    a
                  );
              }));
          },
        };
      });
      i(function () {
        return t;
      }, []);
      return h.jsx(
        c("CometBase.react"),
        babelHelpers["extends"]({}, a, {
          xstyle: [l.root, n],
          children: h.jsxs(c("CometBase.react"), {
            ref: q,
            xstyle: [l.container, o.current && l.containerSticky],
            children: [
              h.jsx(c("BaseRow.react"), {
                ref: r,
                xstyle: [
                  l.primaryRow,
                  o.current && l.primaryRowSticky,
                  o.current ? l.fadeInTransition : l.fadeOutTransition,
                ],
                children: h.jsx(c("BaseRowItem.react"), {
                  expanding: !0,
                  children: f,
                }),
              }),
              h.jsx(c("BaseRow.react"), {
                ref: s,
                xstyle: [
                  l.stickyRow,
                  o.current && l.stickyRowSticky,
                  o.current ? l.fadeOutTransition : l.fadeInTransition,
                ],
                children: h.jsx(c("BaseRowItem.react"), {
                  expanding: e,
                  verticalAlign: "center",
                  children: g,
                }),
              }),
            ],
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "useCometEntityStickyHeaderHeadline",
  ["TetraListCell.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useState;
    function a(a) {
      var b = a.headline,
        d = a.linkProps,
        e = a.onPress,
        f = a.onStickyChange,
        g = a.paddingHorizontal,
        l = a.profilePhoto,
        m = a.profilePhotoShape,
        n = a.url;
      a = j(!1);
      var o = a[0],
        p = a[1];
      a = function (a) {
        p(a), f && f(a);
      };
      var q = i(
        function () {
          return babelHelpers["extends"](
            { preventLocalNavigation: !0, url: n },
            d
          );
        },
        [d, n]
      );
      l = h.jsx(c("TetraListCell.react"), {
        addOnPrimary:
          l != null
            ? { shape: m, size: 40, source: { uri: l }, type: "profile-photo" }
            : void 0,
        headline: b,
        headlineLineLimit: 1,
        level: 3,
        linkProps: q,
        onPress: (m = e) != null ? m : k,
        paddingHorizontal: g,
      });
      return { headline: l, isSticky: o, onStickyChange: a };
    }
    function k(a) {
      a.preventDefault(), scrollTo({ behavior: "smooth", left: 0, top: 0 });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useResizeObserverLoopLimitSafeCallbackWrapper",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = i(null),
        c = function (c, d, e) {
          b.current != null && window.cancelAnimationFrame(b.current),
            (b.current = window.requestAnimationFrame(function () {
              a(c, d, e);
            }));
        };
      h(function () {
        return function () {
          b.current != null && window.cancelAnimationFrame(b.current);
        };
      }, []);
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometEntityStickyHeaderResizeObserver",
  [
    "react",
    "useResizeObserver",
    "useResizeObserverLoopLimitSafeCallbackWrapper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useRef,
      i = b.useState;
    function a(a) {
      a = a.topOffset;
      a = a === void 0 ? 0 : a;
      var b = h(),
        d = i(0),
        e = d[0],
        f = d[1];
      d = c("useResizeObserver")(
        c("useResizeObserverLoopLimitSafeCallbackWrapper")(function (a) {
          e !== a.height && f(a.height);
        })
      );
      return { resizeObserverRef: d, stickyHeaderRef: b, topOffset: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityStickyHeader.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "BaseStickyHeader.react",
    "CometEntityHeaderResponsiveRow.react",
    "CometEntityHeaderStickyBar.react",
    "react",
    "useCometEntityStickyHeaderHeadline",
    "useCometEntityStickyHeaderResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef,
      j = {
        headerHiddenByDefault: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "do00u71z",
          justifyContent: "bkfpd7mw",
        },
        headerHiddenByDefaultNotSticky: {
          pointerEvents: "hzruof5a",
          visibility: "kr9hpln1",
          zIndex: "enjifjd9",
        },
        headerHiddenByDefaultSticky: {
          position: "poy2od1o",
          width: "k4urcfbm",
        },
        row: {
          backgroundColor: "cddn0xzi",
          boxShadow: "dsne8k7f",
          flexShrink: "pfnyh3mw",
        },
      };
    function a(a) {
      var b = a.headline,
        d = a.headlineLinkProps,
        e = a.headlineOnPress,
        f = a.hiddenByDefault;
      f = f === void 0 ? !1 : f;
      var g = a.onStickyChange,
        k = a.paddingHorizontal,
        l = a.primaryContent,
        m = a.profilePhoto,
        n = a.profilePhotoShape,
        o = a.secondaryContent,
        p = a.topOffset;
      a = a.url;
      var q = i();
      b = c("useCometEntityStickyHeaderHeadline")({
        headline: b,
        linkProps: d,
        onPress: e,
        onStickyChange: function (a) {
          q.current != null && q.current.setSticky(a), g && g(a);
        },
        paddingHorizontal: k,
        profilePhoto: m,
        profilePhotoShape: n,
        url: a,
      });
      d = b.headline;
      e = b.isSticky;
      k = b.onStickyChange;
      m = c("useCometEntityStickyHeaderResizeObserver")({ topOffset: p });
      n = m.resizeObserverRef;
      a = m.stickyHeaderRef;
      b = m.topOffset;
      return h.jsx(c("BaseStickyHeader.react"), {
        onStickyChange: k,
        ref: a,
        topOffset: b,
        xstyle: [
          f && j.headerHiddenByDefault,
          f &&
            (e
              ? j.headerHiddenByDefaultSticky
              : j.headerHiddenByDefaultNotSticky),
        ],
        children: h.jsx(c("CometEntityHeaderResponsiveRow.react"), {
          ref: n,
          xstyle: j.row,
          children: h.jsxs(c("BaseRow.react"), {
            verticalAlign: "center",
            children: [
              h.jsx(c("BaseRowItem.react"), {
                expanding: !0,
                children: h.jsx(c("CometEntityHeaderStickyBar.react"), {
                  primaryContent: l,
                  ref: q,
                  stickyContent: h.jsx(c("BaseRow.react"), {
                    align: "start",
                    children: h.jsx(c("BaseRowItem.react"), { children: d }),
                  }),
                }),
              }),
              o != null &&
                h.jsx(c("BaseRowItem.react"), {
                  verticalAlign: "center",
                  children: typeof o === "function" ? o({ sticky: e }) : o,
                }),
            ],
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useBaseEntityHeaderProfile",
  ["RelayHooks", "react", "useBaseEntityHeaderProfile_profile.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    function a(a) {
      var c;
      a = d("RelayHooks").useFragment(
        h !== void 0
          ? h
          : (h = b("useBaseEntityHeaderProfile_profile.graphql")),
        a
      );
      c = (c = a.profile_picture_for_sticky_bar) == null ? void 0 : c.uri;
      var e;
      switch (a.__typename) {
        case "Page":
        case "User":
        case "Hashtag":
          e = "circle";
          break;
        default:
          e = "roundedRect";
      }
      a = a.url;
      return { profilePhoto: c, profilePhotoShape: e, url: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityHeaderStickyBottomRow.react",
  [
    "CometEntityHeaderStickyBottomRow_entity.graphql",
    "CometEntityStickyHeader.react",
    "CometRelay",
    "react",
    "recoverableViolation",
    "useBaseEntityHeaderProfile",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.entity,
        f = a.headline,
        g = a.paddingHorizontal;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "entity",
        "headline",
        "paddingHorizontal",
      ]);
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometEntityHeaderStickyBottomRow_entity.graphql")),
        e
      );
      var j = c("useBaseEntityHeaderProfile")(e);
      f = (f = f) != null ? f : e.name;
      if (f == null)
        return c("recoverableViolation")(
          "Name of the entity cannot be null",
          "comet_ui"
        );
      e = babelHelpers["extends"]({}, a, j, {
        headline: f,
        paddingHorizontal: g,
      });
      return i.jsx(
        c("CometEntityStickyHeader.react"),
        babelHelpers["extends"]({}, e)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTab.react",
  [
    "CometFocusGroupContext",
    "CometNonBreakingSpace.react",
    "CometPressable.react",
    "CometTextWithIcon.react",
    "ReactDOMComet",
    "TetraIcon.react",
    "TetraText.react",
    "react",
    "stylex",
    "useIntersectionObserver",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useRef,
      l = b.useState,
      m = {
        icon: { lineHeight: "soycq5t1" },
        iconEnd: { marginStart: "kkf49tns" },
        iconStart: { marginEnd: "cgat1ltu" },
        pressable: {
          appearance: "dwo3fsh8",
          borderStyle: "ow4ym5g4",
          borderWidth: "auili1gw",
          marginBottom: "oygrvhab",
          marginEnd: "cxmmr5t8",
          marginStart: "hcukyx3x",
          marginTop: "kvgmc6g5",
          paddingBottom: "qt6c0cv9",
          paddingEnd: "rz4wbd8a",
          paddingStart: "a8nywdso",
          paddingTop: "jb3vyjys",
          textAlign: "i1ao9s8h",
          backgroundColor: "g5ia77u1",
          backgroundImage: "mf7ej076",
          boxSizing: "rq0escxv",
          color: "gmql0nx0",
          cursor: "nhd2j8a9",
          position: "l9j0dhe7",
          textDecoration: "esuyzwwr",
          display: "j83agx80",
          zIndex: "tkr6xdv7",
        },
        selected: {
          borderTopEndRadius: "akjuzmll",
          borderTopStartRadius: "bub6lnnc",
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          height: "pmqtw6m8",
          position: "pmk7jnqg",
          start: "j9ispegn",
        },
        tab: {
          alignItems: "bp9cbjyn",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexShrink: "pfnyh3mw",
          minHeight: "frgo5egb",
          position: "l9j0dhe7",
        },
      };
    function a(a, b) {
      var e = a.badge,
        f = a.containerRef,
        g = a.highlightColor,
        n = a.icon,
        o = a.iconColor;
      o = o === void 0 ? "secondary" : o;
      var p = a.iconLocation;
      p = p === void 0 ? "right" : p;
      var q = a.iconSize;
      q = q === void 0 ? 16 : q;
      var r = a.label,
        s = a.labelIsHidden;
      s = s === void 0 ? !1 : s;
      var t = a.onHidden,
        u = a.pressableXStyle,
        v = a.reduceEmphasis;
      v = v === void 0 ? !1 : v;
      var w = a.selected;
      w = w === void 0 ? !1 : w;
      var x = a.tabRef,
        y = a.underlineColor,
        z = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "badge",
        "containerRef",
        "highlightColor",
        "icon",
        "iconColor",
        "iconLocation",
        "iconSize",
        "label",
        "labelIsHidden",
        "onHidden",
        "pressableXStyle",
        "reduceEmphasis",
        "selected",
        "tabRef",
        "underlineColor",
        "xstyle",
      ]);
      var A = l(!0),
        B = A[0],
        C = A[1],
        D = k(t);
      D.current = t;
      A = j(c("CometFocusGroupContext"));
      t = A.FocusItem;
      A = i(function (a) {
        var b = a.intersectionRatio;
        d("ReactDOMComet").flushSync(function () {
          var a = b < 0.5;
          C(a);
          D.current && D.current(a);
        });
      }, []);
      A = c("useIntersectionObserver")(A, {
        root: f
          ? function () {
              return f.current;
            }
          : null,
        threshold: 0.5,
      });
      e =
        !s && e != null
          ? typeof e === "number"
            ? h.jsxs(h.Fragment, {
                children: [
                  r,
                  h.jsx(c("CometNonBreakingSpace.react"), { size: 0.5 }),
                  h.jsx(c("TetraText.react"), {
                    color: w ? "highlight" : "secondary",
                    type: "body4",
                    children: e,
                  }),
                ],
              })
            : h.jsx(c("CometTextWithIcon.react"), { iconAfter: e, children: r })
          : s
          ? null
          : r;
      w &&
        g != null &&
        (e = h.jsx("span", { style: { color: g }, children: e }));
      v
        ? (e = h.jsx(c("TetraText.react"), {
            color: w ? "highlight" : "secondary",
            type: "body3",
            children: e,
          }))
        : (e = h.jsx(c("TetraText.react"), {
            color: w ? "highlight" : "secondary",
            type: "bodyLink3",
            children: e,
          }));
      g =
        n != null && p === "left"
          ? h.jsx("div", {
              className: c("stylex")(m.icon, !s && m.iconStart),
              children: h.jsx(c("TetraIcon.react"), {
                color: w ? "highlight" : o,
                icon: n,
                size: q,
              }),
            })
          : null;
      v =
        n != null && p === "right"
          ? h.jsx("div", {
              className: c("stylex")(m.icon, (g != null || !s) && m.iconEnd),
              children: h.jsx(c("TetraIcon.react"), {
                color: w ? "highlight" : o,
                icon: n,
                size: q,
              }),
            })
          : null;
      p = c("useMergeRefs")(A, b, x);
      o = h.jsxs("div", {
        className: c("stylex")(m.tab, z),
        ref: p,
        children: [
          g,
          e,
          v,
          h.jsx("div", {
            className: c("stylex")(w && m.selected),
            style: { backgroundColor: w ? y : void 0 },
          }),
        ],
      });
      if (a.onPress != null || a.linkProps != null) {
        n = h.jsx(
          c("CometPressable.react"),
          babelHelpers["extends"]({}, a, {
            "aria-hidden": B,
            "aria-selected": w,
            disabled: B,
            display: "inline",
            focusable: !B,
            label: s ? r : void 0,
            overlayDisabled: w,
            ref: p,
            role: "tab",
            xstyle: [m.pressable, u],
            children: o,
          })
        );
        return t && !B ? h.jsx(t, { children: n }) : n;
      }
      return o;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "TriangleDownFilled20.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { viewBox: "0 0 20 20", width: "1em", height: "1em" },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometTabs.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometDeferredPopoverTrigger.react",
    "CometFocusGroup.react",
    "CometKeys",
    "CometTab.react",
    "CometVisualCompletionAttributes",
    "CurrentLocale",
    "SVGIcon",
    "TriangleDownFilled20.svg.react",
    "focusScopeQueries",
    "mergeRefs",
    "react",
    "requireDeferred",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState,
      n =
        c("requireDeferred")("CometTabMenu.react").__setRef("CometTabs.react"),
      o = {
        heightGetter: { lineHeight: "soycq5t1", position: "l9j0dhe7" },
        heightSetter: {
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          visibility: "kr9hpln1",
        },
        moreTab: {
          height: "cb02d2ww",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        moreWrapper: {
          display: "q9uorilb",
          height: "cb02d2ww",
          position: "l9j0dhe7",
          verticalAlign: "j1lvzwm4",
        },
        moreWrapperAdaptive: {
          height: "r9glsfau",
          maxHeight: "gbic8f20",
          minHeight: "tgvbjcpo",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        root: {
          height: "cb02d2ww",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
          width: "k4urcfbm",
          zIndex: "du4w35lb",
        },
        tab: {
          display: "pq6dq46d",
          float: "bzsjyuwj",
          height: "cb02d2ww",
          verticalAlign: "j1lvzwm4",
        },
        tabsContainer: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
      },
      p = {
        default: { width: "t4ae4g2e" },
        englishOrShorter: { width: "ae0w7mvl" },
      },
      q = [
        "en_US",
        "en_GB",
        "nl_NL",
        "vi_VN",
        "af_ZA",
        "fy_NL",
        "kk_KZ",
        "cs_CZ",
        "sw_KE",
        "it_IT",
        "pt_BR",
        "pt_PT",
        "bg_BG",
        "hr_HR",
        "nn_NO",
        "es_ES",
        "es_LA",
        "fr_FR",
        "ca_ES",
        "fr_CA",
        "si_LK",
        "sr_RS",
        "nb_NO",
        "sv_SE",
        "zh_HK",
        "zh_TW",
        "he_IL",
        "ne_NP",
        "eo_EO",
      ];
    function a(a) {
      var b = a.heightXStyle,
        e = a.maxHeightXStyle,
        f = a.tabs,
        g = a.maxTabs,
        t = g === void 0 ? f.length : g,
        u = a.menuSize,
        v = a.moreTabStyles,
        w = a.moreTabXStyle,
        x = a.moreWrapperXStyle,
        y = a.tabsContainerStyle;
      g = a.truncateMenu;
      var z = g === void 0 ? !1 : g,
        A = a.onMoreTabPress,
        B = l(null),
        C = l([]),
        D = l(null);
      g = m(function () {
        return Array.from({ length: f.length })
          .map(function (a, b) {
            return b;
          })
          .filter(function (a) {
            return a >= t;
          });
      });
      var E = g[0],
        F = g[1],
        G = t < f.length ? f.slice(0, t) : f,
        H = t >= f.length,
        I = k(
          function () {
            return E.some(function (a) {
              return (a = f[a]) == null ? void 0 : a.selected;
            });
          },
          [E, f]
        ),
        J = j(
          function (a, f) {
            a = c("mergeRefs")(a, D, function (a) {
              (a == null ? void 0 : a.parentElement) != null &&
                a.parentElement instanceof HTMLElement &&
                (a.parentElement.tabIndex = 0);
            });
            var g = [
              {
                command: { key: c("CometKeys").DOWN },
                description: h._("Open Menu"),
                handler: f,
              },
            ];
            return i.jsx(c("CometComponentWithKeyCommands.react"), {
              commandConfigs: g,
              xstyle: [
                o.moreWrapper,
                p["default"],
                q.includes(c("CurrentLocale").get()) && p.englishOrShorter,
                b,
                H && o.moreWrapperAdaptive,
                x,
                e,
              ],
              children: i.jsx(
                c("CometTab.react"),
                babelHelpers["extends"]({}, v, {
                  "aria-haspopup": "menu",
                  icon: d("SVGIcon").svgIcon(
                    c("TriangleDownFilled20.svg.react")
                  ),
                  iconSize: 16,
                  label: h._("More"),
                  onPress: function () {
                    f(), A && A();
                  },
                  pressableXStyle: [o.moreTab, b],
                  ref: a,
                  role: "tab",
                  selected: I,
                  testid: void 0,
                  xstyle: w,
                })
              ),
            });
          },
          [H, b, I, e, v, w, x, A]
        );
      return i.jsx(c("CometFocusGroup.react"), {
        hideArrowSignifiers: !0,
        orientation: "horizontal",
        preventScrollOnFocus: !0,
        role: "tablist",
        tabScopeQuery: d("focusScopeQueries").tabbableScopeQuery,
        wrap: !0,
        children: function (a) {
          return i.jsx(
            "div",
            babelHelpers["extends"](
              { className: c("stylex")(o.root, a, b), role: "tablist" },
              c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
              {
                children: i.jsxs("div", {
                  className: c("stylex")(o.heightGetter),
                  children: [
                    H &&
                      i.jsx("div", {
                        className: c("stylex")(o.heightSetter),
                        children: G.map(function (a, b) {
                          a.linkProps;
                          a.onPress;
                          a = babelHelpers.objectWithoutPropertiesLoose(a, [
                            "linkProps",
                            "onPress",
                          ]);
                          return i.createElement(
                            c("CometTab.react"),
                            babelHelpers["extends"]({}, a, {
                              key: b + "tab",
                              ref: function (a) {
                                return (C.current[b] = a);
                              },
                              role: "tab",
                              selected: a.selected,
                              xstyle: [o.tab, a.xstyle],
                            })
                          );
                        }),
                      }),
                    i.jsxs("div", {
                      className: c("stylex")(o.tabsContainer, y),
                      children: [
                        i.jsx(c("CometDeferredPopoverTrigger.react"), {
                          popoverProps: {
                            menuItems: E.map(function (a) {
                              return f[a];
                            }).filter(Boolean),
                            menuSize: u,
                            truncate: z,
                          },
                          popoverResource: n,
                          children: J,
                        }),
                        G.map(function (a, b) {
                          return i.createElement(
                            c("CometTab.react"),
                            babelHelpers["extends"]({}, a, {
                              containerRef: B,
                              key: b + "tab",
                              onHidden: function (a) {
                                F(function (c) {
                                  return a ? r(c, b) : s(c, b);
                                });
                              },
                              pressableXStyle: o.tab,
                              ref: function (a) {
                                return (C.current[b] = a);
                              },
                              role: "tab",
                              selected: a.selected,
                            })
                          );
                        }),
                      ],
                    }),
                  ],
                }),
              }
            )
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function r(a, b) {
      return a.includes(b)
        ? a
        : [].concat(a, [b]).sort(function (a, b) {
            return a - b;
          });
    }
    function s(a, b) {
      return a.includes(b)
        ? a.filter(function (a) {
            return a !== b;
          })
        : a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityHeaderTabs.react",
  ["CometTabs.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        entityHeaderTab: {
          height: "cb02d2ww",
          paddingEnd: "hv4rvrfc",
          paddingStart: "dati1w0a",
        },
      };
    function a(a) {
      var b = a.maxTabs,
        d = a.onMoreTabPress;
      a = a.tabs;
      return h.jsx(c("CometTabs.react"), {
        maxTabs: b,
        moreTabStyles: {
          overlayOffset: { bottom: -4, left: 0, right: 0, top: -4 },
          overlayRadius: 6,
          underlineColor: "var(--accent)",
        },
        moreTabXStyle: i.entityHeaderTab,
        onMoreTabPress: d,
        tabs: a.map(function (a) {
          return babelHelpers["extends"]({}, a, {
            overlayOffset: { bottom: -4, left: 0, right: 0, top: -4 },
            overlayRadius: 6,
            underlineColor: "var(--accent)",
            xstyle: i.entityHeaderTab,
          });
        }),
        truncateMenu: !0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityHeaderTabBar.react",
  ["CometEntityHeaderTabs.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.maxTabs,
        d = a.tabs;
      a = a.tabsRouteTarget;
      var e = a === void 0 ? "self" : a,
        f = d.findIndex(function (a) {
          return a.isActive();
        });
      a = d.map(function (a, b) {
        a.isActive;
        var c = a.linkProps;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "isActive",
          "linkProps",
        ]);
        return c
          ? babelHelpers["extends"]({}, a, {
              linkProps: babelHelpers["extends"]({}, c, { routeTarget: e }),
              selected: b === f,
            })
          : babelHelpers["extends"]({}, a, { selected: b === f });
      });
      return h.jsx(c("CometEntityHeaderTabs.react"), { maxTabs: b, tabs: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchEntityScopedTypeaheadDialogFallback",
  ["CometCardedDialogLoadingState.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { anchor: { minHeight: "asz1e59d" } };
    a = function (a) {
      return h.jsx(c("CometCardedDialogLoadingState.react"), {
        anchorXStyle: i.anchor,
        onClose: a,
      });
    };
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometResultsTypeaheadDialogTriggerClickHandler",
  [
    "cometSearchEntityScopedTypeaheadDialogFallback",
    "react",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b, d) {
      a = c("useCometEntryPointDialog")(
        a,
        { entityID: b },
        "button",
        c("cometSearchEntityScopedTypeaheadDialogFallback")
      );
      var e = a[0],
        f = a[1],
        g = a[2],
        i = a[3];
      a = a[4];
      var j = h(
        function () {
          e({ entityID: b }, function () {}, "comet.search_scoped." + d);
        },
        [b, e, d]
      );
      return [j, f, g, i, a];
    }
    g["default"] = a;
  },
  98
);
