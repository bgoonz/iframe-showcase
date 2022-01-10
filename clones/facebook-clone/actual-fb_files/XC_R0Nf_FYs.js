if (self.CavalryLogger) {
  CavalryLogger.start_js(["BN5kMAv"]);
}

__d(
  "CometImmersivePhotoIcon_photo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometImmersivePhotoIcon_photo",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "immersive_photo_encodings",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "projection_type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Photo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "BaseResponsiveGrid.react",
  [
    "BaseContainerQueryElement.react",
    "CometAspectRatioContainer.react",
    "CometSuspenseList.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        card: {
          boxSizing: "rq0escxv",
          flexBasis: "rj1gh0hx",
          flexGrow: "buofh1pr",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
        },
        container: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          flexWrap: "lhclo0ds",
        },
        filler: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        fixedHeightContainer: {
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        innerRoot: { position: "l9j0dhe7" },
        outerRoot: { overflowX: "ni8dbmo4", overflowY: "stjgntxs" },
        placeholder: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          justifyContent: "taijpn5t",
        },
        sizer: { display: "q9uorilb" },
        sizerRow: {
          fontSize: "ppxdyopm",
          lineHeight: "soycq5t1",
          whiteSpace: "g0qnabr5",
        },
      };
    function a(a) {
      var b = a.children,
        d = a.horizontalGap,
        e = a.verticalGap,
        f = e === void 0 ? d : e,
        g = a.lastRowFiller;
      e = a.revealOrder;
      var j = a.minWidth,
        k = h.Children.map(b, function (a, b) {
          return h.jsx(
            "div",
            {
              className: c("stylex")(i.card),
              style: { minWidth: j + d, padding: f / 2 + "px " + d / 2 + "px" },
              children: a,
            },
            b
          );
        });
      e != null &&
        (k = h.jsx(c("CometSuspenseList.react"), {
          revealOrder: e,
          children: k,
        }));
      e = h.jsxs("div", {
        className: c("stylex")(
          i.container,
          a.maxRows != null && i.fixedHeightContainer
        ),
        style: { margin: -f / 2 + "px " + -d / 2 + "px" },
        children: [
          k,
          Array.from({ length: 16 }).map(function (a, b) {
            return h.jsx(
              "div",
              {
                className: c("stylex")(i.card, i.placeholder),
                style: { minWidth: j + d, padding: "0 " + d / 2 + "px" },
                children: h.jsx("div", {
                  className: c("stylex")(i.filler),
                  style: {
                    bottom: f / 2,
                    left: d / 2,
                    right: d / 2,
                    top: f / 2,
                  },
                  children: typeof g === "function" ? g(b) : g,
                }),
              },
              "filler" + b
            );
          }),
        ],
      });
      if (typeof a.maxRows === "number" && a.rowHeight != null) {
        k = a.maxRows;
        a = a.rowHeight;
        var l = a.aspectRatios,
          m = l === void 0 ? [] : l;
        l = a.staticHeights;
        var n = l === void 0 ? [] : l,
          o = j + d;
        return h.jsx("div", {
          className: c("stylex")(i.outerRoot),
          style: {
            margin: -f + "px " + -d + "px",
            padding: f + "px " + d + "px",
          },
          children: h.jsxs("div", {
            className: c("stylex")(i.innerRoot),
            children: [
              Array.from({ length: k }).map(function (a, e) {
                return (
                  b.length > e &&
                  h.jsxs(
                    "div",
                    {
                      className: c("stylex")(i.sizerRow),
                      children: [
                        Array.from({ length: 19 }).map(function (a, f) {
                          return (
                            b.length > e * (f + 1) &&
                            h.jsx(
                              c("BaseContainerQueryElement.react"),
                              {
                                breakpoint: (f + 2) * o - d,
                                inverseToContainer: !0,
                                maxWidth:
                                  "calc((100% + " +
                                  d +
                                  "px) / " +
                                  (f + 1) +
                                  ")",
                                minWidth: 0,
                                xstyle: i.sizer,
                                children: h.jsxs("div", {
                                  style: { padding: "0 " + d / 2 + "px" },
                                  children: [
                                    e > 0 &&
                                      h.jsx("div", {
                                        style: { maxHeight: 8 },
                                        children: h.jsx(
                                          c("CometAspectRatioContainer.react"),
                                          { aspectRatio: 1 / 8 }
                                        ),
                                      }),
                                    m.map(function (a, b) {
                                      return h.jsx(
                                        c("CometAspectRatioContainer.react"),
                                        { aspectRatio: a },
                                        b
                                      );
                                    }),
                                    n.map(function (a, b) {
                                      return h.jsx(
                                        "div",
                                        {
                                          style: { maxHeight: a },
                                          children: h.jsx(
                                            c(
                                              "CometAspectRatioContainer.react"
                                            ),
                                            { aspectRatio: 1 / a }
                                          ),
                                        },
                                        b
                                      );
                                    }),
                                  ],
                                }),
                              },
                              f
                            )
                          );
                        }),
                        b.length > e * 20 &&
                          h.jsxs(c("BaseContainerQueryElement.react"), {
                            breakpoint: 20 * o - d - 0.1,
                            maxWidth: "5%",
                            minWidth: 0,
                            xstyle: i.sizer,
                            children: [
                              m.map(function (a, b) {
                                return h.jsx(
                                  c("CometAspectRatioContainer.react"),
                                  { aspectRatio: a },
                                  b
                                );
                              }),
                              n.map(function (a, b) {
                                return h.jsx(
                                  "div",
                                  {
                                    style: { maxHeight: a },
                                    children: h.jsx(
                                      c("CometAspectRatioContainer.react"),
                                      { aspectRatio: 1 / a }
                                    ),
                                  },
                                  b
                                );
                              }),
                            ],
                          }),
                      ],
                    },
                    e
                  )
                );
              }),
              e,
            ],
          }),
        });
      }
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometImmersivePhotoIcon.react",
  [
    "ix",
    "CometImmersivePhotoIcon_photo.graphql",
    "CometRelay",
    "TetraIcon.react",
    "fbicon",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometImmersivePhotoIcon_photo.graphql")),
        a.photo
      );
      if (a == null) return null;
      a = c("orEmptyArray")(a.immersive_photo_encodings);
      if (
        a.some(function (a) {
          a = a.projection_type;
          return a === "tiled_cubemap";
        })
      )
        return j.jsx(c("TetraIcon.react"), {
          color: "white",
          icon: d("fbicon")._(h("1247931"), 24),
        });
      else if (
        a.some(function (a) {
          a = a.projection_type;
          return a === "three_d";
        })
      )
        return j.jsx(c("TetraIcon.react"), {
          color: "white",
          icon: d("fbicon")._(h("1243982"), 24),
        });
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometCollectionRootContainer.react",
  ["CometResponsiveColumns.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { container: { marginTop: "tr9rh885", minHeight: "q6o897ci" } };
    function a(a) {
      a = a.children;
      return h.jsx(d("CometResponsiveColumns.react").Container, {
        containerWidth: "DEFAULT",
        xstyle: i.container,
        children: h.jsx(d("CometResponsiveColumns.react").Column, {
          columnType: "FULL",
          children: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometPhotoGlimmerGridItem.react",
  ["BaseGlimmer.react", "CometAspectRatioContainer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.index;
      return h.jsx(c("CometAspectRatioContainer.react"), {
        aspectRatio: 1,
        children: h.jsx(c("BaseGlimmer.react"), {
          className: "k4urcfbm datstx6m",
          index: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometAppCollectionGrid.react",
  [
    "BaseResponsiveGrid.react",
    "ProfileCometPhotoGlimmerGridItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.lastRowFiller;
      a = a === void 0 ? i : a;
      return h.jsx(c("BaseResponsiveGrid.react"), {
        horizontalGap: 8,
        lastRowFiller: a,
        minWidth: 160,
        revealOrder: "forwards",
        verticalGap: 8,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var i = function (a) {
      return h.jsx(c("ProfileCometPhotoGlimmerGridItem.react"), { index: a });
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometCollectionGlimmerGridItem.react",
  [
    "BaseGlimmer.react",
    "CometAspectRatioContainer.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(c("CometColumn.react"), {
        spacing: 16,
        children: [
          h.jsx(c("CometColumnItem.react"), {
            children: h.jsx(c("CometAspectRatioContainer.react"), {
              aspectRatio: 1,
              children: h.jsx(c("BaseGlimmer.react"), {
                className:
                  "k4urcfbm datstx6m l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: a.index,
              }),
            }),
          }),
          h.jsxs(c("CometColumn.react"), {
            spacing: 4,
            children: [
              h.jsx(c("CometColumnItem.react"), {
                children: h.jsx(c("BaseGlimmer.react"), {
                  className:
                    "f3pi7oek omj01hu3 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                  index: a.index,
                }),
              }),
              h.jsx(c("CometColumnItem.react"), {
                children: h.jsx(c("BaseGlimmer.react"), {
                  className:
                    "f8ljpb73 rwwlwajf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                  index: a.index,
                }),
              }),
            ],
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
  "ProfileCometAppCollectionGlimmer.react",
  [
    "BaseLoadingStateElement.react",
    "ProfileCometAppCollectionGrid.react",
    "ProfileCometCollectionGlimmerGridItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 4;
    function a(a) {
      return h.jsx(c("BaseLoadingStateElement.react"), {
        children: h.jsx(c("ProfileCometAppCollectionGrid.react"), {
          lastRowFiller: function (a) {
            return h.jsx(c("ProfileCometCollectionGlimmerGridItem.react"), {
              index: a,
            });
          },
          children: Array.from(
            new Array(((a = a.itemCount) != null ? a : 0) || 8),
            function (a, b) {
              return h.jsx(
                c("ProfileCometCollectionGlimmerGridItem.react"),
                { index: b % i },
                b
              );
            }
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometAppSectionGlimmer.react",
  [
    "BaseGlimmer.react",
    "BaseLoadingStateElement.react",
    "CometCard.react",
    "ProfileCometAppCollectionGlimmer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("BaseLoadingStateElement.react"), {
        children: h.jsx("div", {
          className: "sjgh65i0",
          children: h.jsx(c("CometCard.react"), {
            background: "white",
            dropShadow: 1,
            children: h.jsxs("div", {
              className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
              children: [
                h.jsx(c("BaseGlimmer.react"), {
                  className:
                    "k5ud4834 c9zspvje mudddibn lsl2245n hqlzco19 o3c63hce lit7pgxp",
                  index: 0,
                }),
                h.jsxs("div", {
                  className: "c9zspvje j83agx80",
                  children: [
                    h.jsx(c("BaseGlimmer.react"), {
                      className:
                        "nxfmr2wi hcukyx3x bi6gxh9e nhadk0th aov4n071 jnigpg78 lsl2245n hqlzco19 o3c63hce lit7pgxp",
                      index: 1,
                    }),
                    h.jsx(c("BaseGlimmer.react"), {
                      className:
                        "nxfmr2wi hcukyx3x bi6gxh9e nhadk0th aov4n071 jnigpg78 lsl2245n hqlzco19 o3c63hce lit7pgxp",
                      index: 2,
                    }),
                    h.jsx(c("BaseGlimmer.react"), {
                      className:
                        "nxfmr2wi hcukyx3x bi6gxh9e nhadk0th aov4n071 jnigpg78 lsl2245n hqlzco19 o3c63hce lit7pgxp",
                      index: 3,
                    }),
                  ],
                }),
                h.jsx(c("ProfileCometAppCollectionGlimmer.react"), {}),
              ],
            }),
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
  "ProfileCometVNextTabsUtils",
  ["qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = ["ABOUT", "LIVE_VIDEOS", "MENTIONS", "PHOTOS", "VIDEOS"];
    function a(a) {
      return h.includes(a);
    }
    d = (b = c("qex")._("121")) != null ? b : !1;
    f = (e = c("qex")._("120")) != null ? e : !1;
    g.isVNextTab = a;
    g.showVNextTabs = d;
    g.showManageSectionsFromAboutCollection = f;
  },
  98
);
