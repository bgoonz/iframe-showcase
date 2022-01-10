if (self.CavalryLogger) {
  CavalryLogger.start_js(["pmWxso0"]);
}

__d(
  "CometSelectMenuTrigger.react",
  [
    "fbt",
    "BaseContextualLayer.react",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "CometMenu.react",
    "CometMenuItemSelectable.react",
    "FocusInertRegion.react",
    "FocusWithinHandler.react",
    "clearTimeout",
    "focusScopeQueries",
    "react",
    "setTimeout",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef,
      n = b.useState,
      o = 1e3,
      p = { hideOutline: { outline: "lzcic4wl" } };
    function q(a, b) {
      return a + "__" + (b != null ? b : "0");
    }
    function a(a) {
      var b = a.children,
        e = a.disabled;
      e = e === void 0 ? !1 : e;
      var f = a.onChange,
        g = a.options,
        r = a.selectedValue,
        s = a.size;
      s = s === void 0 ? "normal" : s;
      var t = a.truncate;
      t = t === void 0 ? !0 : t;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "disabled",
        "onChange",
        "options",
        "selectedValue",
        "size",
        "truncate",
      ]);
      var u = n(!1),
        v = u[0],
        w = u[1],
        x = v && g.length > 0,
        y = c("useCometUniqueID")();
      u = c("useCometUniqueID")();
      v = c("useCometUniqueID")();
      var z = n(null),
        A = z[0],
        B = z[1],
        C = m(null),
        D = j(function () {
          return w(!0);
        }, []),
        E = j(function () {
          B(null), w(!1);
        }, []);
      z = j(
        function (a) {
          a || E();
        },
        [E]
      );
      var F = j(
          function () {
            if (x) A != null && f(A), E();
            else {
              var a;
              B((a = r) != null ? a : null);
              D();
            }
          },
          [A, x, f, E, D, r]
        ),
        G = g.filter(function (a) {
          return !a.disabled;
        }),
        H = l(
          function () {
            return [
              {
                command: { key: c("CometKeys").ENTER },
                description: h._("Select item"),
                handler: function () {},
                triggerOnKeyup: !0,
              },
            ].concat(
              x
                ? [
                    {
                      command: { key: c("CometKeys").ESCAPE },
                      description: h._("Close suggestions"),
                      handler: function () {
                        x && E();
                      },
                    },
                  ]
                : [],
              [
                {
                  command: { key: c("CometKeys").DOWN },
                  description: h._("Next item"),
                  handler: function () {
                    if (G.length > 0) {
                      var a = G.findIndex(function (a) {
                        return a.value === A;
                      });
                      if (A == null || a === -1) {
                        var b;
                        B((b = r) != null ? b : G[0].value);
                      } else
                        a === G.length - 1 ? B(G[0].value) : B(G[a + 1].value);
                      D();
                    }
                  },
                },
                {
                  command: { key: c("CometKeys").UP },
                  description: h._("Previous item"),
                  handler: function () {
                    if (G.length > 0) {
                      var a = G.findIndex(function (a) {
                        return a.value === A;
                      });
                      if (A == null || a === -1) {
                        var b;
                        B((b = r) != null ? b : G[G.length - 1].value);
                      } else
                        a === 0 ? B(G[G.length - 1].value) : B(G[a - 1].value);
                      D();
                    }
                  },
                },
                {
                  command: { alt: !0, key: c("CometKeys").DOWN },
                  description: h._("Show suggestions"),
                  handler: D,
                },
                {
                  command: { alt: !0, key: c("CometKeys").UP },
                  description: h._("Close suggestions"),
                  handler: E,
                },
                {
                  command: { key: c("CometKeys").HOME },
                  description: h._("First item"),
                  handler: function () {
                    x && B(G[0].value);
                  },
                },
                {
                  command: { key: c("CometKeys").END },
                  description: h._("Last item"),
                  handler: function () {
                    x && B(G[G.length - 1].value);
                  },
                },
              ]
            );
          },
          [D, A, E, r, x, G]
        ),
        I = m(null),
        J = m(""),
        K = j(
          function (a) {
            if (
              J.current === "" &&
              (a.code === "Backspace" || a.code === "Clear" || a.key === " ")
            )
              return;
            if (
              !(
                a.key.length === 1 ||
                a.code === "Backspace" ||
                a.code === "Clear"
              ) ||
              a.altKey ||
              a.ctrlKey ||
              a.metaKey
            )
              return;
            a.code === "Backspace" || a.code === "Clear"
              ? (J.current = J.current.substring(0, J.current.length - 1))
              : (J.current += a.key.toLocaleLowerCase());
            a.preventDefault();
            I.current != null && c("clearTimeout")(I.current);
            I.current = c("setTimeout")(function () {
              (J.current = ""), (I.current = null);
            }, o);
            a = G.findIndex(function (a) {
              return a.value === A;
            });
            a = a === -1 ? 0 : a;
            for (var b = 0; b < G.length; b++) {
              var d = (b + a) % G.length;
              d = G[d];
              if (
                d.label.toString().toLocaleLowerCase().startsWith(J.current)
              ) {
                x || D();
                B(d.value);
                return;
              }
            }
          },
          [A, G, x, D]
        );
      k(
        function () {
          var a = C.current;
          if (a != null) {
            a.addEventListener("keydown", K);
            return function () {
              a.removeEventListener("keydown", K);
            };
          }
        },
        [K]
      );
      var L = g.findIndex(function (a) {
        return a.value === A;
      });
      return i.jsx(c("FocusWithinHandler.react"), {
        onFocusChange: z,
        children: i.jsxs(c("CometComponentWithKeyCommands.react"), {
          commandConfigs: H,
          children: [
            b(
              C,
              {
                "aria-activedescendant":
                  x && A != null && L !== -1 ? q(y, L) : void 0,
                "aria-controls": x ? u : void 0,
                "aria-expanded": x,
                disabled: e,
                id: v,
                onPress: F,
                role: "combobox",
                xstyle: [A != null && p.hideOutline],
              },
              x
            ),
            x &&
              i.jsx(
                c("BaseContextualLayer.react"),
                babelHelpers["extends"]({}, a, {
                  contextRef: C,
                  children: i.jsx(c("FocusInertRegion.react"), {
                    focusQuery: d("focusScopeQueries").tabbableScopeQuery,
                    children: i.jsx(c("CometMenu.react"), {
                      id: u,
                      role: "listbox",
                      size: s,
                      truncate: t,
                      children: g.map(function (a, b) {
                        return i.jsx(
                          c("CometMenuItemSelectable.react"),
                          {
                            "aria-disabled": a.disabled,
                            "aria-posinset": b,
                            "aria-selected": a.value === r,
                            "aria-setsize": g.length,
                            bodyColor: a.bodyColor,
                            bodyText: a.bodyText,
                            disabled: a.disabled,
                            icon: a.icon,
                            iconStyle: "contained_small_icon",
                            id: q(y, b),
                            isSelected: a.value === r,
                            onClick: function () {
                              f(a.value), E();
                            },
                            preventClosingMenuOnSelect: !0,
                            primaryText: a.label,
                            role: "option",
                            secondaryColor: a.secondaryColor,
                            secondaryText: a.secondaryText,
                            testid: void 0,
                            visuallyFocused: a.value === A,
                          },
                          a.value
                        );
                      }),
                    }),
                  }),
                })
              ),
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
  "CometSelect.react",
  [
    "ix",
    "CometPressable.react",
    "CometScreenReaderText.react",
    "CometSelectMenuTrigger.react",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo,
      k = {
        button: {
          appearance: "dwo3fsh8",
          borderStyle: "ow4ym5g4",
          borderWidth: "auili1gw",
          marginBottom: "oygrvhab",
          marginEnd: "cxmmr5t8",
          marginStart: "hcukyx3x",
          marginTop: "kvgmc6g5",
          position: "l9j0dhe7",
          zIndex: "du4w35lb",
          alignItems: "bp9cbjyn",
          backgroundColor: "tdjehn4e",
          borderTopStartRadius: "beltcj47",
          borderTopEndRadius: "p86d2i9g",
          borderBottomEndRadius: "aot14ch1",
          borderBottomStartRadius: "kzx2olss",
          boxSizing: "rq0escxv",
          cursor: "nhd2j8a9",
          justifyContent: "i1fnvgqd",
          paddingBottom: "osnr6wyh",
          paddingEnd: "d1544ag0",
          paddingStart: "tw6a2znq",
          paddingTop: "jktsbyx5",
          textAlign: "hzawbc8m",
        },
        buttonDisabled: { cursor: "rj84mg9z" },
        buttonExpanded: { minWidth: "oqhjfihn" },
        icon: { lineHeight: "soycq5t1", marginStart: "h676nmdw" },
        leftIcon: { lineHeight: "soycq5t1", marginEnd: "oi9244e8" },
      };
    function a(a) {
      var b = a["aria-describedby"],
        e = a["aria-label"];
      a.aux;
      var f = a.defaultLabel,
        g = a.disabled,
        l = g === void 0 ? !1 : g;
      g = a.expanded;
      var m = g === void 0 ? !1 : g;
      g = a.focusable;
      var n = g === void 0 ? !0 : g,
        o = a.icon,
        p = a.labelLineLimit;
      g = a.testid;
      var q = babelHelpers.objectWithoutPropertiesLoose(a, [
          "aria-describedby",
          "aria-label",
          "aux",
          "defaultLabel",
          "disabled",
          "expanded",
          "focusable",
          "icon",
          "labelLineLimit",
          "testid",
        ]),
        r = j(
          function () {
            var a = q.options.find(function (a) {
              return a.value === q.selectedValue;
            });
            return a != null ? a.label : (a = f) != null ? a : "";
          },
          [f, q.options, q.selectedValue]
        );
      return i.jsx(
        c("CometSelectMenuTrigger.react"),
        babelHelpers["extends"]({}, q, {
          disabled: l,
          children: function (a, f) {
            var g = f.xstyle;
            f = babelHelpers.objectWithoutPropertiesLoose(f, ["xstyle"]);
            return i.jsxs(
              c("CometPressable.react"),
              babelHelpers["extends"]({}, f, {
                "aria-describedby": b,
                "aria-haspopup": "listbox",
                expanding: !0,
                focusable: n,
                ref: a,
                testid: void 0,
                xstyle: [
                  k.button,
                  m && k.buttonExpanded,
                  l && k.buttonDisabled,
                  g,
                ],
                children: [
                  o &&
                    i.jsx("div", {
                      className: c("stylex")(k.leftIcon),
                      children: i.jsx(
                        c("TetraIcon.react"),
                        babelHelpers["extends"]({}, o, {
                          color: l ? "disabled" : "primary",
                        })
                      ),
                    }),
                  e != null &&
                    i.jsx(c("CometScreenReaderText.react"), { text: e }),
                  i.jsx(c("TetraText.react"), {
                    color: l ? "disabled" : null,
                    numberOfLines: p,
                    type: "bodyLink3",
                    children: r,
                  }),
                  i.jsx("div", {
                    className: c("stylex")(k.icon),
                    children: i.jsx(c("TetraIcon.react"), {
                      color: l ? "disabled" : "primary",
                      icon: d("fbicon")._(h("481882"), 16),
                    }),
                  }),
                ],
              })
            );
          },
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometStarRatingSingleStar.react",
  ["ix", "CometTintedIcon.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = j(a.size);
      return i.jsx(c("CometTintedIcon.react"), { color: a.color, icon: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      switch (a) {
        case 12:
          return d("fbicon")._(h("479321"), 12);
        case 16:
          return d("fbicon")._(h("479324"), 16);
        case 20:
          return d("fbicon")._(h("479327"), 20);
        case 24:
          return d("fbicon")._(h("479330"), 24);
        case 32:
          return d("fbicon")._(h("660688"), 32);
        default:
          return d("fbicon")._(h("479327"), 20);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometStarRating.react",
  ["fbt", "CometStarRatingSingleStar.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.filledColor,
        d = b === void 0 ? "fds-yellow-20" : b;
      b = a.maxRating;
      b = b === void 0 ? 5 : b;
      var e = a.rating;
      a = a.size;
      var f = a === void 0 ? 20 : a;
      return i.jsx("div", {
        "aria-label": h._("{current rating} out of {maximum rating} rating", [
          h._param("current rating", e),
          h._param("maximum rating", b),
        ]),
        className: "pq6dq46d",
        role: "img",
        children: Array(b)
          .fill()
          .map(function (a, b) {
            return i.jsxs(
              "div",
              {
                className: "l9j0dhe7 hytbnt81 j5wkysh0 j83agx80",
                children: [
                  i.jsx(c("CometStarRatingSingleStar.react"), {
                    color: "fds-gray-30",
                    size: f,
                  }),
                  i.jsx("div", {
                    className:
                      "kr520xx4 j9ispegn pmk7jnqg stjgntxs ni8dbmo4 datstx6m j83agx80",
                    style: {
                      width: Math.max(0, Math.min(1, e - b)) * 100 + "%",
                    },
                    children: i.jsx(c("CometStarRatingSingleStar.react"), {
                      color: d,
                      size: f,
                    }),
                  }),
                ],
              },
              b
            );
          }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "usePaymentsCometCheckout",
  [
    "CometCardedDialogLoadingState.react",
    "JSResourceForInteraction",
    "react",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback,
      j = c("JSResourceForInteraction")(
        "PaymentsCometCheckoutDialog.react"
      ).__setRef("usePaymentsCometCheckout");
    function a(a) {
      var b = a.onClose,
        d = babelHelpers.objectWithoutPropertiesLoose(a, ["onClose"]);
      a = c("useCometLazyDialog")(j, function () {
        return h.jsx(c("CometCardedDialogLoadingState.react"), {});
      });
      var e = a[0];
      a = a[1];
      var f = i(
        function () {
          e(babelHelpers["extends"]({}, d, { onClose: b }), b);
        },
        [b, d, e]
      );
      return [f, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "XCometGroupAdminSchedulePostsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/groups/{idorvanity}/scheduled_posts/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometGroupsTabEngageControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/groups/feed/",
      Object.freeze({ inline_composer_post: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
