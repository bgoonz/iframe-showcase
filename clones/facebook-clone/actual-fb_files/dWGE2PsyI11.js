if (self.CavalryLogger) {
  CavalryLogger.start_js(["RAKuH6W"]);
}

__d(
  "CometQuickPromotionHeaderComponent.react",
  [
    "ix",
    "CometAspectRatioContainer.react",
    "CometIconLogoFlat.react",
    "CometImage.react",
    "CometImageFromIXValue.react",
    "CometTintedIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
    "stylex",
    "unrecoverableViolation",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 500,
      k = 94,
      l =
        "/images/assets_DO_NOT_HARDCODE/charitable_giving_assets/FacebookLogo_light-4x.png",
      m =
        "/images/assets_DO_NOT_HARDCODE/charitable_giving_assets/FacebookLogo_dark-4x.png",
      n = {
        facebookLogo: { marginStart: "fop5sh7t" },
        fullBleedHeader: {
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
        },
        fullBleedHeaderContent: {
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        fullBleedHeaderImage: { height: "datstx6m", width: "k4urcfbm" },
        fullBleedIcon: {
          paddingStart: "dati1w0a",
          paddingTop: "pybr56ya",
          paddingBottom: "f10w8fjw",
          position: "pmk7jnqg",
          start: "j9ispegn",
        },
        fullBleedIconPadTop24: {
          paddingStart: "dati1w0a",
          paddingTop: "bjjx79mm",
          paddingBottom: "jbae33se",
          position: "pmk7jnqg",
          start: "j9ispegn",
        },
        fullBleedMenu: {
          end: "n7fi1qx3",
          paddingEnd: "hv4rvrfc",
          paddingTop: "pybr56ya",
          paddingBottom: "f10w8fjw",
          position: "pmk7jnqg",
        },
        header: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "i1fnvgqd",
          marginEnd: "wkznzc2l",
          marginStart: "dhix69tm",
          paddingTop: "pybr56ya",
        },
        headerIconPlaceHolder: { width: "odw8uiq3" },
        headerTitle: { alignItems: "bp9cbjyn", display: "j83agx80" },
        headerTitleImage: { marginEnd: "oi9244e8" },
        image: {
          alignItems: "bp9cbjyn",
          display: "pq6dq46d",
          justifyContent: "taijpn5t",
          paddingTop: "discj3wi",
          width: "k4urcfbm",
        },
        imageHeader: { alignItems: "ll8tlv6m" },
        insetHeaderImage: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "datstx6m",
          width: "k4urcfbm",
        },
        insetHeaderImageContainer: {
          paddingTop: "jb3vyjys",
          paddingEnd: "d1544ag0",
          paddingBottom: "qt6c0cv9",
          paddingStart: "tw6a2znq",
        },
        insetImageHeaderContent: {
          display: "j83agx80",
          paddingTop: "cxgpxx05",
          paddingEnd: "dflh9lhu",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
        },
        insetImageIcon: {
          flexGrow: "buofh1pr",
          paddingTop: "ipjc6fyt",
          paddingEnd: "ph5uu5jm",
          paddingBottom: "qt6c0cv9",
          paddingStart: "b3onmgus",
        },
        insetImageSmallIcon: {
          paddingTop: "ipjc6fyt",
          paddingEnd: "n8tt0mok",
          paddingBottom: "qt6c0cv9",
          paddingStart: "hyh9befq",
        },
        menu: { display: "nc684nl6", marginTop: "aahdfvyu" },
        video: {
          marginEnd: "wkznzc2l",
          marginStart: "dhix69tm",
          marginTop: "ourw01k9",
        },
      };
    function a(a) {
      var b = a.header,
        e = a.headerContextComponent,
        f = a.isLargeCenterImageQP;
      a = a.isLongTextQP;
      var g = c("useCurrentDisplayMode")() === "dark",
        j,
        k = b == null ? void 0 : b.faviconType,
        p = n.fullBleedIcon;
      if (k === "vote")
        j = i.jsx(c("CometImageFromIXValue.react"), { source: h("1669083") });
      else if (k === "facebook_logo") {
        var q = g ? m : l;
        j = i.jsx("div", {
          className: c("stylex")(n.facebookLogo),
          children: i.jsx(c("CometImage.react"), {
            height: 32,
            src: q,
            width: 122,
          }),
        });
      } else if (k === "facebook_monogram_wordmark")
        (b == null ? void 0 : b.type) === "fullbleed"
          ? (j = g
              ? i.jsx(c("CometImage.react"), { src: h("1969816") })
              : i.jsx(c("CometImage.react"), { src: h("1969818") }))
          : (j = g
              ? i.jsx(c("CometImage.react"), { src: h("1960581") })
              : i.jsx(c("CometImage.react"), { src: h("1960583") }));
      else if (k === "facebook_family_lockup")
        (j = g
          ? i.jsx(c("CometImage.react"), { src: h("1988479") })
          : i.jsx(c("CometImage.react"), { src: h("1988481") })),
          (b == null ? void 0 : b.type) === "inset_image"
            ? (j = i.jsx("div", {
                className: c("stylex")(n.insetImageSmallIcon),
                children: j,
              }))
            : (b == null ? void 0 : b.type) === "fullbleed" &&
              (p = n.fullBleedIconPadTop24);
      else if (k === "garden_logo")
        ((b == null ? void 0 : b.animation) !== null || f === !1) &&
          (p = n.fullBleedIconPadTop24),
          (j = g
            ? i.jsx(c("CometImage.react"), { src: h("1988479") })
            : i.jsx(c("CometImage.react"), { src: h("1988481") }));
      else
        switch (b == null ? void 0 : b.faviconColor) {
          case "WHITE":
            j = i.jsx(c("CometTintedIcon.react"), {
              color: "fds-white",
              icon: d("fbicon")._(h("869053"), 32),
            });
            break;
          case "BLACK":
            j = i.jsx(c("CometTintedIcon.react"), {
              color: "fds-black",
              icon: d("fbicon")._(h("869053"), 32),
            });
            break;
          case "DISABLED":
            j = i.jsx("div", {
              className: c("stylex")(n.headerIconPlaceHolder),
            });
            break;
          case "BLUE":
          default:
            j = i.jsx(c("CometIconLogoFlat.react"), { size: 32 });
        }
      q = i.jsx("span", { className: c("stylex")(n.menu), children: e });
      if (b == null || a)
        return i.jsxs("div", {
          className: c("stylex")(n.header),
          children: [
            j,
            (b == null ? void 0 : b.dismissDisabled) === !0 ? null : q,
          ],
        });
      k = b.faviconURI;
      g = b.title;
      if (g != null) {
        return i.jsxs("div", {
          className: c("stylex")(n.header),
          children: [
            i.jsxs("div", {
              className: c("stylex")(n.headerTitle),
              children: [
                k != null &&
                  i.jsx(c("CometImage.react"), {
                    alt: "qp-favicon-image",
                    src: k,
                    width: 36,
                    xstyle: n.headerTitleImage,
                  }),
                i.jsx(c("TetraText.react"), {
                  color: (a = b.titleColor) != null ? a : "secondary",
                  type: "headlineEmphasized3",
                  children: g,
                }),
              ],
            }),
            q,
          ],
        });
      }
      k = b.imageUri;
      if (
        k == null &&
        b.illustrationComponent == null &&
        b.video == null &&
        b.customMediaRenderer == null
      )
        return i.jsxs("div", {
          className: c("stylex")(n.header),
          children: [j, q],
        });
      if (
        b.type === "center" ||
        b.type === "center_rounded" ||
        (b.type === "fullbleed" && Boolean(f))
      ) {
        a = 60;
        g = b.imageHeight != null ? b.imageHeight : a;
        q = b.imageWidth != null ? b.imageWidth : a;
        return i.jsxs("div", {
          className: c("stylex")(n.header, n.imageHeader),
          children: [
            i.jsx("div", { className: c("stylex")(p), children: j }),
            (a = b.animation) != null
              ? a
              : k == null
              ? null
              : i.jsx("span", {
                  className: c("stylex")(n.image),
                  children: i.jsx("div", {
                    style:
                      b.type === "center_rounded"
                        ? {
                            borderRadius: g / 2,
                            height: g,
                            overflow: "hidden",
                            width: q,
                          }
                        : {},
                    children: i.jsx(c("CometImage.react"), {
                      alt: "",
                      height: Boolean(f) ? void 0 : g,
                      src: k,
                      width: Boolean(f) ? 160 : q,
                    }),
                  }),
                }),
            b.dismissDisabled === !0
              ? i.jsx("div", {
                  className: c("stylex")(n.headerIconPlaceHolder),
                })
              : i.jsx("span", { className: c("stylex")(n.menu), children: e }),
          ],
        });
      } else if (b.type === "fullbleed")
        if (b.video == null) {
          return i.jsxs("div", {
            className:
              b.animation != null ? null : c("stylex")(n.fullBleedHeader),
            children: [
              b.illustrationComponent == null
                ? k == null
                  ? null
                  : (a = b.animation) != null
                  ? a
                  : b.imageResizingDisabled === !0
                  ? i.jsx(c("CometImage.react"), {
                      alt: "",
                      src: k,
                      xstyle: n.fullBleedHeaderImage,
                    })
                  : i.jsx(c("CometAspectRatioContainer.react"), {
                      aspectRatio: o(b.imageWidth, b.imageHeight),
                      children:
                        (g = b.animation) != null
                          ? g
                          : i.jsx(c("CometImage.react"), {
                              alt: "",
                              src: k,
                              xstyle: n.fullBleedHeaderImage,
                            }),
                    })
                : b.illustrationComponent,
              i.jsxs("div", {
                className: c("stylex")(n.fullBleedHeaderContent),
                children: [
                  i.jsx("div", { className: c("stylex")(p), children: j }),
                  b.dismissDisabled === !0
                    ? null
                    : i.jsx("span", {
                        className: c("stylex")(n.fullBleedMenu),
                        children: e,
                      }),
                ],
              }),
            ],
          });
        } else
          return i.jsxs("div", {
            className:
              b.animation != null && b.video != null
                ? null
                : c("stylex")(n.fullBleedHeader),
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("div", {
                    className: c("stylex")(n.fullBleedIcon),
                    children: j,
                  }),
                  b.dismissDisabled === !0
                    ? null
                    : i.jsx("span", {
                        className: c("stylex")(n.fullBleedMenu),
                        children: e,
                      }),
                ],
              }),
              i.jsx("div", {
                className: c("stylex")(n.video),
                children: b.video,
              }),
            ],
          });
      else if (b.type === "inset_image") {
        return i.jsxs("div", {
          children: [
            i.jsxs("div", {
              className: c("stylex")(n.insetImageHeaderContent),
              children: [
                i.jsx("div", {
                  className: c("stylex")(n.insetImageIcon),
                  children: i.jsx("div", { children: j }),
                }),
                b.dismissDisabled === !0 ? null : i.jsx("div", { children: e }),
              ],
            }),
            (f = b.customMediaRenderer) != null
              ? f
              : k == null
              ? null
              : i.jsx("div", {
                  className: c("stylex")(n.insetHeaderImageContainer),
                  children: i.jsx(c("CometAspectRatioContainer.react"), {
                    aspectRatio: o(b.imageWidth, b.imageHeight),
                    children:
                      (q = b.animation) != null
                        ? q
                        : i.jsx(c("CometImage.react"), {
                            alt: "",
                            src: k,
                            xstyle: n.insetHeaderImage,
                          }),
                  }),
                }),
          ],
        });
      }
      throw c("unrecoverableViolation")(
        "header and header type must have been provided.",
        "comet_qp"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function o(a, b) {
      a = (a = a) != null ? a : j;
      b = (b = b) != null ? b : k;
      return a / b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometQuickPromotionComponent.react",
  [
    "fbt",
    "ix",
    "CometFeedStoryMenuSection.react",
    "CometImage.react",
    "CometQuickPromotionHeaderComponent.react",
    "CometQuickPromotionLoggerContext.react",
    "CometQuickPromotionMenuContext.react",
    "TetraButtonGroup.react",
    "TetraCircleButton.react",
    "TetraIcon.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "fbicon",
    "gkx",
    "react",
    "stylex",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = b.useState,
      n = 60,
      o = 100,
      p = c("gkx")("1299319"),
      q = [
        "277090830243452",
        "test_long_qp_id_1234",
        "194697461145337",
        "1726705827450314",
        "809458079784624",
        "282632069744492",
        "398405854865301",
        "695693951068272",
        "1573616852835635",
        "446669793313702",
        "925251304945090",
        "452420379402946",
        "2618632638442774",
        "487846589255292",
      ],
      r = ["277090830243452", "809458079784624"],
      s = ["2465588690151000", "357798291438501", "2245482295567576"];
    function a(a) {
      var b,
        e,
        f = m(!1),
        g = f[0],
        t = f[1];
      f = a.content;
      var u = a.context,
        v = a.footer,
        w = a.header,
        x = a.isInHScroll,
        y = a.loggingData,
        z = a.onDismiss,
        A = a.templateParams,
        B = l(c("CometQuickPromotionLoggerContext.react")),
        C = l(c("CometQuickPromotionMenuContext.react"));
      b = (b = C == null ? void 0 : C.feedUnitID) != null ? b : null;
      C = (C = C == null ? void 0 : C.location) != null ? C : null;
      var D = y == null ? void 0 : y.promotion_id,
        E = y == null ? void 0 : y.instance_log_data,
        F = y == null ? void 0 : y.extra_client_data;
      y = k(
        function () {
          B != null && B.logAction && B.logAction("dismiss", D, E, F),
            z && z(),
            t(!0);
        },
        [F, E, B, z, D]
      );
      var G = b != null && C != null,
        H = c("useVisibilityObserver")({
          onVisible: k(
            function () {
              B != null && B.logImpression && B.logImpression(D, E, F);
            },
            [F, E, B, D]
          ),
        });
      if (g) return null;
      g = (w == null ? void 0 : w.type) === "fullbleed";
      y = { icon: d("fbicon")._(i("478233"), 20), onPress: y, size: 32 };
      e = G
        ? j.jsx(c("CometFeedStoryMenuSection.react"), {
            color:
              (e = w == null ? void 0 : w.contextComponentColor) != null
                ? e
                : "primary",
            feedLocation: C,
            id: b,
            serializedFRTPIdentifiers: null,
            storyDebugInfo: null,
          })
        : g
        ? j.jsx(
            c("TetraCircleButton.react"),
            babelHelpers["extends"]({}, y, {
              color: "white",
              label: h._("Close"),
              type: "dark-overlay",
            })
          )
        : j.jsx(
            c("TetraIcon.react"),
            babelHelpers["extends"](
              { "aria-label": h._("Close"), color: "secondary" },
              y
            )
          );
      C = {};
      b = !1;
      if (v != null) {
        g = v.direction;
        var I = v.dismissOnClick;
        y = v.paddingTop;
        var J = v.primary,
          K = v.secondary,
          L = v.wrap;
        y != null && (C.paddingTop = y);
        g != null && (C.direction = g);
        if (J != null) {
          b = !0;
          C.paddingHorizontal = 16;
          C.primary = babelHelpers["extends"]({}, J, {
            onPress: function (a) {
              B != null && B.logAction && B.logAction("primary", D, E, F),
                J.onPress && J.onPress(a),
                I != null && I.primary === !0 && (z && z(), t(!0));
            },
            reduceEmphasis: (y = J.reduceEmphasis) != null ? y : !0,
          });
        }
        K != null &&
          ((b = !0),
          (C.paddingHorizontal = 16),
          (C.secondary = babelHelpers["extends"]({}, K, {
            onPress: function (a) {
              B != null && B.logAction && B.logAction("secondary", D, E, F),
                K.onPress && K.onPress(a),
                I != null && I.secondary === !0 && (z && z(), t(!0));
            },
          })));
        L != null && (C.wrap = L);
      }
      g = v == null ? void 0 : v.content;
      y = v == null ? void 0 : v.extraMarginTop;
      L = v == null ? void 0 : v.smallMarginTop;
      y =
        g != null
          ? j.jsx("div", {
              className: c("stylex").dedupe(
                {
                  "margin-end-1": "wkznzc2l",
                  "margin-start-1": "dhix69tm",
                  "margin-top-1": "n1l5q3vz",
                },
                y != null && y ? { "margin-top-1": "tr9rh885" } : null,
                L != null ? { "margin-top-1": "kvgmc6g5" } : null
              ),
              children: j.jsx(c("TetraText.react"), {
                color: "secondary",
                type: "body4",
                children: g,
              }),
            })
          : null;
      L = q.indexOf(D) > -1;
      g = r.indexOf(D) > -1;
      var M = s.indexOf(D) > -1,
        N = null;
      if (A !== null && A !== void 0) {
        A = A.get("footer_icon");
        switch (A) {
          case "privacy":
            N = j.jsx("div", {
              className: "p8fzw8mz j83agx80",
              children: j.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(i("497243"), 12),
              }),
            });
            break;
          case "profile_switch":
            N = j.jsx("div", {
              className: "p8fzw8mz j83agx80",
              children: j.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(i("1521755"), 12),
              }),
            });
        }
      }
      A =
        (v == null ? void 0 : v.bottom_content_text) === void 0 ||
        (v == null ? void 0 : v.bottom_content_text) === null
          ? null
          : j.jsxs("div", {
              className:
                "tw6a2znq d1544ag0 f10w8fjw taijpn5t btwxx1t3 j83agx80 bp9cbjyn",
              children: [
                N,
                j.jsx(c("TetraText.react"), {
                  type: "meta3",
                  children: v == null ? void 0 : v.bottom_content_text,
                }),
              ],
            });
      return j.jsxs("div", {
        className: "k4urcfbm",
        ref: G ? null : H,
        children: [
          a.secondaryHeader,
          j.jsx(c("CometQuickPromotionHeaderComponent.react"), {
            header: w,
            headerContextComponent: e,
            isLargeCenterImageQP: M,
            isLongTextQP: L,
          }),
          u != null
            ? j.jsxs(j.Fragment, {
                children: [
                  j.jsxs("div", {
                    className: c("stylex").dedupe(
                      {
                        "display-1": "j83agx80",
                        "margin-top-1": "tr9rh885",
                        "margin-end-1": "wkznzc2l",
                        "margin-bottom-1": "oygrvhab",
                        "margin-start-1": "dhix69tm",
                        "white-space-1": "ii04i59q",
                      },
                      p ? { "display-1": "a8c37x1j" } : null,
                      !b && A == null && f == null
                        ? { "margin-bottom-1": "sjgh65i0" }
                        : null
                    ),
                    children: [
                      (N = a.contentTitleOverride) != null
                        ? N
                        : j.jsx(c("TetraTextPairing.react"), {
                            body: u.subtitle,
                            headline: u.title,
                            level: 2,
                          }),
                      w != null && L
                        ? w.animation != null
                          ? w.animation
                          : w.imageUri != null
                          ? j.jsx("div", {
                              className: c("stylex").dedupe(
                                g ? {} : { "padding-start-1": "d6emx29t" },
                                g ? { "padding-start-1": "gxklfzlk" } : null
                              ),
                              children: j.jsx(c("CometImage.react"), {
                                alt: "",
                                src: w.imageUri,
                                width: g ? o : n,
                              }),
                            })
                          : null
                        : null,
                    ],
                  }),
                  (G = u.socialContext) != null ? G : null,
                ],
              })
            : null,
          f != null
            ? j.jsx("div", {
                className: c("stylex").dedupe(
                  x !== !0
                    ? {
                        "margin-top-1": "kvgmc6g5",
                        "margin-end-1": "wkznzc2l",
                        "margin-bottom-1": "oygrvhab",
                        "margin-start-1": "dhix69tm",
                      }
                    : {},
                  u != null ? { "margin-top-1": "tr9rh885" } : null
                ),
                children: f,
              })
            : null,
          v != null &&
          Object.keys(v).length > 0 &&
          !(
            Object.keys(v).length === 1 &&
            (v == null ? void 0 : v.bottom_content_text) != null
          )
            ? j.jsxs("div", {
                className: "f10w8fjw",
                children: [
                  y,
                  j.jsx(
                    c("TetraButtonGroup.react"),
                    babelHelpers["extends"]({}, C)
                  ),
                ],
              })
            : null,
          A,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
