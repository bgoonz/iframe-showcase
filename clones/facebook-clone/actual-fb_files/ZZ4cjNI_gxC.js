if (self.CavalryLogger) {
  CavalryLogger.start_js(["Cv+X9UJ"]);
}

__d(
  "StoriesTrayCreateTile_imageUris.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayCreateTile_imageUris",
      selections: [
        {
          alias: "profilePicture",
          args: [
            { kind: "Literal", name: "height", value: 150 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 150 },
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
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesIsBucketEmpty_buckets.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "useStoriesIsBucketEmpty_buckets",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
          kind: "LinkedField",
          name: "unified_stories",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "expiration_time",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesIsUploadingQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { kind: "Literal", name: "find", value: "loading" },
          { kind: "Literal", name: "first", value: 1 },
        ],
        b = {
          alias: null,
          args: null,
          concreteType: "StoryCardStoryInfo",
          kind: "LinkedField",
          name: "story_card_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "thread_status",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "useStoriesIsUploadingQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: "buckets",
                      args: a,
                      concreteType: "UserToUnifiedStoryBucketsConnection",
                      kind: "LinkedField",
                      name: "unified_stories_buckets",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "UserToUnifiedStoryBucketsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "UnifiedStoryBucketToUnifiedStoriesConnection",
                                  kind: "LinkedField",
                                  name: "unified_stories",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "UnifiedStoryBucketToUnifiedStoriesEdge",
                                      kind: "LinkedField",
                                      name: "edges",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Story",
                                          kind: "LinkedField",
                                          name: "node",
                                          plural: !1,
                                          selections: [b],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'unified_stories_buckets(find:"loading",first:1)',
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "useStoriesIsUploadingQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                c,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: "buckets",
                      args: a,
                      concreteType: "UserToUnifiedStoryBucketsConnection",
                      kind: "LinkedField",
                      name: "unified_stories_buckets",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "UserToUnifiedStoryBucketsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                c,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "UnifiedStoryBucketToUnifiedStoriesConnection",
                                  kind: "LinkedField",
                                  name: "unified_stories",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "UnifiedStoryBucketToUnifiedStoriesEdge",
                                      kind: "LinkedField",
                                      name: "edges",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Story",
                                          kind: "LinkedField",
                                          name: "node",
                                          plural: !1,
                                          selections: [b, d],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                d,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'unified_stories_buckets(find:"loading",first:1)',
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
                d,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4219706934725785",
          metadata: {},
          name: "useStoriesIsUploadingQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardOverlayPositioner_bounds.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardOverlayPositioner_bounds",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "x",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "y",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "rotation",
          storageKey: null,
        },
      ],
      type: "StoryOverlayRectangle",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useThrottledComet",
  ["CometThrottle", "react", "useLayoutEffect_SAFE_FOR_SSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useMemo,
      j = b.useRef;
    function a(a, b) {
      b === void 0 && (b = 100);
      var d = j(a);
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          d.current = a;
        },
        [a]
      );
      var e = i(
        function () {
          return c("CometThrottle")(function () {
            var a = arguments;
            return d.current == null ? void 0 : d.current.apply(d, a);
          }, b);
        },
        [b]
      );
      h(function () {
        e.cancel();
      }, []);
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesActorContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { actorID: null, actorName: null };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "StoriesActorProvider.react",
  ["StoriesActorContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.actorID,
        d = a.actorName;
      a = a.children;
      var e = i(
        function () {
          return { actorID: b, actorName: d };
        },
        [b, d]
      );
      return h.jsx(c("StoriesActorContext").Provider, {
        value: e,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTrayCreateTile.react",
  [
    "fbt",
    "ix",
    "CometBackgroundImage.react",
    "CometPressable.react",
    "CometRelay",
    "QuickPerformanceLogger",
    "StoriesConstants",
    "StoriesGating",
    "StoriesModuleStoryCreateLoadTtiWwwQPLEvent",
    "StoriesRatioBox.react",
    "StoriesTrayCreateTile_imageUris.graphql",
    "TetraIcon.react",
    "TetraText.react",
    "XCometStoriesCreateControllerRouteBuilder",
    "fbicon",
    "react",
    "requireDeferred",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useCallback,
      m = c("requireDeferred")("ODS").__setRef("StoriesTrayCreateTile.react"),
      n = {
        backgroundGradient: { backgroundImage: "mm8kr34x" },
        bottom: {
          backgroundColor: "cwj9ozl2",
          display: "j83agx80",
          flexShrink: "pfnyh3mw",
          justifyContent: "taijpn5t",
          paddingTop: "dhxd5tqv",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "f10w8fjw",
          paddingStart: "dati1w0a",
          position: "l9j0dhe7",
        },
        button: {
          appearance: "dwo3fsh8",
          borderStyle: "ow4ym5g4",
          borderWidth: "auili1gw",
          boxSizing: "rq0escxv",
          cursor: "nhd2j8a9",
          marginBottom: "oygrvhab",
          marginEnd: "cxmmr5t8",
          marginStart: "hcukyx3x",
          marginTop: "kvgmc6g5",
          paddingBottom: "qt6c0cv9",
          paddingEnd: "rz4wbd8a",
          paddingStart: "a8nywdso",
          paddingTop: "jb3vyjys",
          position: "l9j0dhe7",
          textAlign: "i1ao9s8h",
          zIndex: "du4w35lb",
          backgroundColor: "tdjehn4e",
          borderTopStartRadius: "fni8adji",
          borderTopEndRadius: "hgaippwi",
          borderBottomEndRadius: "fykbt5ly",
          borderBottomStartRadius: "ns4ygwem",
          boxShadow: "sbcfpzgs",
          display: "a8c37x1j",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
          ":active": { transform: "lsqurvkf" },
        },
        buttonFocused: { filter: "b0gio0x4" },
        circle: {
          alignItems: "bp9cbjyn",
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "qavdm89g",
          borderTopEndRadius: "gsh9l1b6",
          borderBottomEndRadius: "lwukve8w",
          borderBottomStartRadius: "jpyiy761",
          display: "j83agx80",
          height: "qypqp5cg",
          justifyContent: "taijpn5t",
          position: "pmk7jnqg",
          top: "hc5seken",
          width: "q676j6op",
        },
        contentWrapper: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          position: "l9j0dhe7",
        },
        full: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        imageContainer: {
          height: "datstx6m",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          transformOrigin: "fi2e5rcv",
          transitionDuration: "ebpj63zs",
          transitionProperty: "flx89l3n",
          transitionTimingFunction: "sgqwj88q",
        },
        imageZoomedIn: { transform: "dzpjd0bq" },
        plusButton: {
          alignItems: "bp9cbjyn",
          backgroundColor: "is6700om",
          borderTopStartRadius: "qavdm89g",
          borderTopEndRadius: "gsh9l1b6",
          borderBottomEndRadius: "lwukve8w",
          borderBottomStartRadius: "jpyiy761",
          display: "j83agx80",
          height: "k7cz35w2",
          justifyContent: "taijpn5t",
          width: "bsnbvmp4",
        },
        pointerEventsNone: { pointerEvents: "hzruof5a" },
        root: { position: "l9j0dhe7" },
      };
    function a(a) {
      var e = a.aspectRatio;
      e = e === void 0 ? 9 / 16 : e;
      var f = a.fragmentProp,
        g = a.numLines,
        o = g === void 0 ? 3 : g;
      g = a.passthroughProps;
      a = a.isFromTray;
      var p = a === void 0 ? !0 : a;
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("StoriesTrayCreateTile_imageUris.graphql")),
        f
      );
      var q = p
          ? d("StoriesGating").shouldShowBigTile()
            ? d("StoriesConstants").BIG_TILE_ASPECT_RATIO
            : e
          : e,
        r =
          a == null ? void 0 : (f = a.profilePicture) == null ? void 0 : f.uri;
      e = c("XCometStoriesCreateControllerRouteBuilder").buildURL({});
      var s = h._("Create Story");
      a = l(function () {
        c("QuickPerformanceLogger").markerEnd(
          c("StoriesModuleStoryCreateLoadTtiWwwQPLEvent"),
          4
        ),
          c("QuickPerformanceLogger").markerStart(
            c("StoriesModuleStoryCreateLoadTtiWwwQPLEvent")
          ),
          m.onReady(function (a) {
            a.bumpEntityKey(
              4329,
              "fb_stories_web",
              "stories_tray.create_story_tile",
              1
            );
          });
      }, []);
      return k.jsx("div", {
        className: c("stylex")(n.root),
        children: k.jsx(c("CometPressable.react"), {
          display: "inline",
          label: s,
          linkProps: { passthroughProps: g, url: e },
          onPress: a,
          overlayDisabled: !0,
          suppressHydrationWarning: !0,
          testid: void 0,
          xstyle: function (a) {
            var b = a.focused;
            a = a.hovered;
            return [n.button, (b || a) && n.buttonFocused];
          },
          children: function (a) {
            var b = a.focused;
            a = a.hovered;
            return k.jsx(c("StoriesRatioBox.react"), {
              height: 1,
              width: q,
              children: k.jsxs("div", {
                className: c("stylex")(n.contentWrapper),
                children: [
                  k.jsx("div", {
                    className: c("stylex")(
                      n.imageContainer,
                      (b || a) && n.imageZoomedIn
                    ),
                    children:
                      r != null &&
                      k.jsx(c("CometBackgroundImage.react"), { src: r }),
                  }),
                  r != null &&
                    k.jsx("div", {
                      className: c("stylex")(n.backgroundGradient, n.full),
                    }),
                  k.jsxs("div", {
                    className: c("stylex")(n.bottom),
                    children: [
                      k.jsx("div", {
                        className: c("stylex")(n.circle),
                        children: k.jsx("div", {
                          className: c("stylex")(n.plusButton),
                          children: k.jsx(c("TetraIcon.react"), {
                            color: "white",
                            icon: d("fbicon")._(i("483770"), 24),
                          }),
                        }),
                      }),
                      k.jsx("div", {
                        className: c("stylex")(n.pointerEventsNone),
                        children: k.jsx(c("TetraText.react"), {
                          align: "center",
                          color: "primary",
                          numberOfLines: o,
                          type: p ? "bodyLink4" : "bodyLink3",
                          children: s,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesIsBucketEmpty",
  ["CometRelay", "react", "useStoriesIsBucketEmpty_buckets.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j = h !== void 0 ? h : (h = b("useStoriesIsBucketEmpty_buckets.graphql"));
    function a(a) {
      var b = d("CometRelay").useFragment(j, a);
      function c(a, b) {
        if (a == null) return !0;
        a =
          a == null
            ? void 0
            : (a = a.unified_stories) == null
            ? void 0
            : a.edges;
        if (a == null) return !0;
        a = a.map(function (a) {
          return a == null ? void 0 : a.node;
        });
        if (a != null) {
          a = a.some(function (a) {
            a = a == null ? void 0 : a.expiration_time;
            return a == null || a > b;
          });
          return !a;
        }
        return !0;
      }
      return i(
        function (a, d) {
          var e =
            b == null
              ? void 0
              : b.find(function (b) {
                  return (b == null ? void 0 : b.id) === a;
                });
          return (d = c(e, (e = d) != null ? e : Date.now() / 1e3)) != null
            ? d
            : !0;
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesIsUploading",
  ["CometRelay", "react", "useStoriesIsUploadingQuery.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = d("react");
    var i = c.useEffect,
      j = c.useState;
    function a(a) {
      var c = d("CometRelay").useLazyLoadQuery(
          h !== void 0 ? h : (h = b("useStoriesIsUploadingQuery.graphql")),
          {},
          { fetchPolicy: "store-only" }
        ),
        e = j(!1),
        f = e[0],
        g = e[1],
        l = k(c);
      i(
        function () {
          l && g(!0), f && !l && (a && a(), g(!1));
        },
        [f, a, l]
      );
      return l;
    }
    function k(a) {
      a =
        a == null
          ? void 0
          : (a = a.me) == null
          ? void 0
          : (a = a.buckets) == null
          ? void 0
          : a.edges;
      return a && a.length === 1 ? l(a[0]) : !1;
    }
    function l(a) {
      var b = !1;
      a =
        a == null
          ? void 0
          : (a = a.node) == null
          ? void 0
          : (a = a.unified_stories) == null
          ? void 0
          : a.edges;
      if (a != null) {
        a = a.map(function (a) {
          return a == null ? void 0 : a.node;
        });
        a != null &&
          a.forEach(function (a) {
            a =
              a == null
                ? void 0
                : (a = a.story_card_info) == null
                ? void 0
                : a.thread_status;
            a === "PENDING" && (b = !0);
          });
      }
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesEnums",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { BLACK: "black", DEFAULT: "default" };
    b = {
      FRIEND_BUCKET: "FRIEND_BUCKET",
      SELF_BUCKET: "SELF_BUCKET",
      UNSELECTED: "UNSELECTED",
    };
    c = {
      BL_TR: "BL_TR",
      BOTTOM_TOP: "BOTTOM_TOP",
      BR_TL: "BR_TL",
      LEFT_RIGHT: "LEFT_RIGHT",
      RIGHT_LEFT: "RIGHT_LEFT",
      TL_BR: "TL_BR",
      TOP_BOTTOM: "TOP_BOTTOM",
      TR_BL: "TR_BL",
    };
    d = {
      ANGER: "\ud83d\ude21",
      HAHA: "\ud83d\ude06",
      LIKE: "\ud83d\udc4d",
      LOVE: "\u2764\ufe0f",
      SORRY: "\ud83d\ude22",
      SUPPORT: "\ud83e\udd17",
      WOW: "\ud83d\ude2e",
    };
    e = {
      NEXT_BUCKET: "next-bucket",
      NEXT_CARD: "next-card",
      PREV_BUCKET: "prev-bucket",
      PREV_CARD: "prev-card",
      STAY_HERE: "stay_here",
    };
    var g = {
        AVAILABLE_WIDTH_RATIO: (240 - 2 * 12) / 240,
        BACKGROUND_COLOR_BLUE: "#79A6FF",
        BACOGROUND_COLOR_SLATE: "#EAEFF2",
        CHILD_PADDING_RATIO: 0.05,
        DEFAULT_OPTION_WIDTH_RATIO: 0.5,
        FIVE_OPTION_STAR_RATING: "FIVE_OPTION_STAR_RATING",
        IG_LEFT_TEXT_COLOR: "#13bda6",
        IG_RIGHT_TEXT_COLOR: "#F36B7F",
        IG_TWO_OPTION_COMBINED: "IG_TWO_OPTION_COMBINED",
        MINIMUM_LABEL_WIDTH_RATIO: 0.31,
        OVERFLOW_CHILD_PADDING_RATIO: 20 / 240,
        TEXT_BIG_HEIGHT_RATIO: 40 / 72,
        TEXT_BIG_MAX_FONT_SIZE_RATIO: 30 / 240,
        TEXT_BIG_MIN_FONT_SIZE_RATIO: 20 / 240,
        TEXT_BIG_RATIO: 40 / 240,
        TEXT_COLOR_GREY: "#5F6673",
        TEXT_ONLY_FONT_SIZE_RATIO: 20 / 240,
        TEXT_SMALL_HEIGHT_RATIO: 25 / 72,
        TEXT_SMALL_MAX_FONT_SIZE_RATIO: 20 / 240,
        TEXT_SMALL_MIN_FONT_SIZE_RATIO: 12 / 240,
        TEXT_SMALL_RATIO: 25 / 240,
        TEXT_WITH_PERCENT_FONT_SIZE_RATIO: 12 / 240,
        TWO_OPTION_COMBINED: "TWO_OPTION_COMBINED",
        VOTE_COUNT_FONT_SIZE_RATIO: 32 / 240,
        VOTE_OPTION_MAX_WIDTH_RATIO: 0.75,
      },
      h = { THREE_COLUMN: "THREE_COLUMN", TWO_COLUMN: "TWO_COLUMN" },
      i = { OTHER: "OTHER", OWNED_SELF: "OWNED_SELF" },
      j = {
        DELETE: "DELETE",
        DELETE_STORY_AND_BLOCK_MEMBER: "DELETE_STORY_AND_BLOCK_MEMBER",
        MUTE_CARD_OWNER: "MUTE_CARD_OWNER",
        REPORT_TO_GROUP_ADMINS: "REPORT_TO_GROUP_ADMINS",
        UNFOLLOW_PAGE: "UNFOLLOW_PAGE",
      },
      k = {
        ADMINED_ADDITIONAL_PROFILE_STORY: "ADMINED_ADDITIONAL_PROFILE_STORY",
        ARCHIVED_STORY: "ARCHIVED_STORY",
        BIRTHDAY_STORY: "BIRTHDAY_STORY",
        CREW_STORY: "CREW_STORY",
        EVENT_STORY: "EVENT_STORY",
        GOODWILL_GENERATED_STORY: "GOODWILL_GENERATED_STORY",
        GOODWILL_STORY: "GOODWILL_STORY",
        GROUP_STORY: "GROUP_STORY",
        HIGHLIGHTED_STORY: "HIGHLIGHTED_STORY",
        LIVE_STORY: "LIVE_STORY",
        M_GROUP_STORY: "M_GROUP_STORY",
        NULL_STATE_STORY: "NULL_STATE_STORY",
        PAGE_STORY: "PAGE_STORY",
        PROFILE_PLUS_STORY: "PROFILE_PLUS_STORY",
        PROMOTION_STORY: "PROMOTION_STORY",
        SHARED_PAGE_STORY: "SHARED_PAGE_STORY",
        STORY: "STORY",
        TOPIC_STORY: "TOPIC_STORY",
        UNKNOWN: "UNKNOWN",
        WAS_LIVE: "WAS_LIVE",
      },
      l = { PHOTO: "Photo", VIDEO: "Video" },
      m = {
        EXTERNAL_SONG: "StoryOverlayExternalSong",
        INTERACTIVE_STICKER: "StoryOverlayReactionSticker",
        LINK_STICKER: "StoryOverlayLinkSticker",
        LIVE_VIDEO: "StoryOverlayLiveVideo",
        POLL_STICKER: "StoryOverlayPollSticker",
        PRODUCT_STICKER: "StoryOverlayProductSticker",
        RESHARED_CONTENT: "StoryOverlayResharedContent",
        RESHARED_POST: "StoryOverlayResharedPost",
        TAG_STICKER: "StoryOverlayTagSticker",
      },
      n = { ANIMATIONS_INTERVAL_THROTTLE: 300, HOLD_DELAY: 1e3 },
      o = {
        LOCATION: "LOCATION",
        PAGE: "PAGE",
        PEOPLE: "PEOPLE",
        PRODUCT: "PRODUCT",
      },
      p = {
        DARK_MODE: "dark_mode",
        DARK15: "dark_15",
        DARK30: "dark_30",
        DEFAULT: "default",
      },
      q = { DEFAULT: "default", SLIDE_UP: "slide_up" },
      r = {
        PAGE_TRANSITION: "PAGE_TRANSITION",
        USER: "USER",
        USER_TRANSITION: "USER_TRANSITION",
      },
      s = { JUST_VOTED: "JUST_VOTED", RESULTS: "RESULTS", VOTING: "VOTING" };
    f.BACKGROUND_STYLE = a;
    f.EMPTY_BUCKET_TYPES = b;
    f.GRADIENT_DIRECTION = c;
    f.LIGHTWEIGHT_REACTION_UNICODES = d;
    f.NAV_DIRECTIONS = e;
    f.POLL_STICKER = g;
    f.RECTANGULAR_TILE_TYPES = h;
    f.STORIES_BUCKETS_INDEXER_TYPES = i;
    f.STORIES_OPTION_TYPES = j;
    f.STORY_CARD_TYPES = k;
    f.STORY_MEDIA_TYPES = l;
    f.STORY_OVERLAY_TYPES = m;
    f.STORY_REACTION_STICKERS_CONSTANTS = n;
    f.TAG_STICKER_TYPES = o;
    f.VIEWER_THEME = p;
    f.VIEWERSHEET_ANIMATION = q;
    f.VIEWERSHEET_STYLE = r;
    f.VOTING_PHASES = s;
  },
  66
);
__d(
  "StoriesCardOverlayPositioner.react",
  ["CometRelay", "StoriesCardOverlayPositioner_bounds.graphql", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var c = a.bounds,
        e = a.children,
        f = a.containerHeight;
      a = a.containerWidth;
      c = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesCardOverlayPositioner_bounds.graphql")),
        c
      );
      if (c != null) {
        var g = c.height,
          j = c.rotation,
          k = c.width,
          l = c.x;
        c = c.y;
        if (
          typeof g === "number" &&
          typeof k === "number" &&
          typeof j === "number" &&
          typeof l === "number" &&
          typeof c === "number"
        ) {
          if (c > 1 || l > 1) return null;
          g = g * f;
          f = k * a;
          k = c * 100;
          a = l * 100;
          c = {
            height: g + "px",
            left: a + "%",
            position: "absolute",
            top: k + "%",
            width: f + "px",
          };
          l = {
            height: "100%",
            transform: "rotate(" + j + "deg)",
            width: "100%",
          };
          return i.jsx("div", {
            className: "storiesCardOverlay/root",
            style: c,
            children: i.jsx("div", {
              className: "storiesCardOverlay/rotation",
              style: l,
              children: e,
            }),
          });
        }
      }
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesLoggerHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case "PAGE_STORY":
          return "PAGE_STORY";
        case "GROUP_STORY":
          return "GROUP_STORY";
        case "EVENT_STORY":
          return "EVENT_STORY";
        case "BIRTHDAY_STORY":
          return "BIRTHDAY_STORY";
        case "CREW_STORY":
          return "CREW_STORY";
        case "GOODWILL_STORY":
          return "GOODWILL_STORY";
        case "GOODWILL_GENERATED_STORY":
          return "GOODWILL_GENERATED_STORY";
        case "STORY":
          return "STORY";
        case "PROFILE_PLUS_STORY":
          return "PROFILE_PLUS_STORY";
        case "ADMINED_ADDITIONAL_PROFILE_STORY":
          return "ADMINED_ADDITIONAL_PROFILE_STORY";
      }
      return null;
    }
    function b(a) {
      var b = "unknown";
      a === "Photo"
        ? (b = "photo")
        : a === "Video"
        ? (b = "video")
        : a === "live" && (b = "live");
      return b;
    }
    function c(a, b, c, d, e) {
      e === void 0 && (e = !1);
      if (e) return "end_card";
      switch (b) {
        case "Page":
          return "page";
        case "Event":
          return "event";
        case "User":
          return c === a ? "self" : d ? "friend" : "followee";
        case "Group":
          return "group";
        case "StoryPromotionOwner":
          return "promotion";
        default:
          return "null";
      }
    }
    f.getCameraPostType = a;
    f.getLoggingMediaType = b;
    f.getOwnerType = c;
  },
  66
);
__d(
  "StoriesLoggingConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      ACTION_SOURCE: {
        ARCHIVE: "archive",
        FACEBOOK_CHAT_TAB: "facebook_chat_tab",
        MESSENGER_DOT_COM: "messenger_dot_com",
        NOTIFICATION: "notification",
        PAGE_PROFILE: "page_profile",
        POST_HEADER: "post_header_actor_photo",
        STORIES_HOME: "stories_home",
        THINGS_YOU_SHOULD_DO: "things_you_should_do",
        TODAY_IN: "today_in",
        TRAY: "story_tray",
        UNKNOWN: "unknown",
        VIEWER: "viewer",
      },
      ACTION_TYPE: {
        CLICK_EMOJI_REPLY_BUTTON: "click_emoji_reply_button",
        CLICK_GIF_REPLY_BUTTON: "click_gif_reply_button",
        CLICK_STICKER_REPLY_BUTTON: "click_sticker_reply_button",
        CLOSE_STORY: "close_story",
        DELETE_MEDIA: "delete_media_attempted",
        OPEN_LINK: "open_link",
        OPEN_MEDIA: "open_media",
        OPEN_SEEN_SUMMARY: "open_seen_summary",
        OPEN_STORY: "open_story",
        PAUSE_STORY: "pause_story",
        REACTION_STICKER_INTERACTED: "reaction_sticker_interacted",
        REPLY_ATTEMPT_COMPLETED: "reply_attempt_completed",
        REPLY_SENT_WHEN_SMART_REPLY_SHOWN: "reply_sent_when_smart_reply_shown",
        SEND_REPLY_ATTEMPT: "attempt_to_send_reply",
        SEND_STORY_FAILED: "send_story_failed",
        SEND_STORY_SUCCEEDED: "send_story_succeed",
        SMART_REPLY_IMPRESSION: "smart_reply_impression",
        STORY_MEDIA_VIEW: "story_media_view",
        STORY_NAVIGATION: "story_navigation",
        TRAY_LOAD: "story_tray_load",
        UNPAUSE_STORY: "unpause_story",
        VISIT_PAGE: "fb_stories_visit_page",
      },
      CLOSE_STORY_GESTURE: {
        AUTO_EXIT: "auto_exit",
        BACK_BUTTON_EXIT: "back_button_exit",
        BLUR_BACKGROUND: "blur_background",
        CLOSE_BUTTON_EXIT: "close_button_exit",
        KEYBOARD_EXIT: "keyboard_exit",
      },
      FB_STORIES_IMPRESSION: 75,
      FB_STORIES_TIMESPENT: 76,
      IMPRESSION_DEDUPLICATION_TIME: 6e4,
      LIVE_IN_STORIES_EVENTS: {
        STORY_LIVE_PAGE_CTA_IMPRESSION: "story_live_page_cta_impression",
        STORY_LIVE_PAGE_CTA_TAP: "story_live_page_cta_tap",
        STORY_LIVE_PROFILE_CTA_IMPRESSION: "story_live_profile_cta_impression",
        STORY_LIVE_PROFILE_CTA_TAP: "story_live_profile_cta_tap",
        STORY_LIVE_STICKER_IMPRESSION: "story_live_sticker_impression",
        STORY_LIVE_STICKER_TAP: "story_live_sticker_tap",
        STORY_LIVE_TRAY_DROPDOWN_CLICK: "story_live_tray_dropdown_click",
        STORY_LIVE_TRAY_DROPDOWN_IMPRESSION:
          "story_live_tray_dropdown_impression",
        STORY_LIVE_VIEWER_DROPDOWN_CLICK: "story_live_viewer_dropdown_click",
        STORY_LIVE_VIEWER_DROPDOWN_IMPRESSION:
          "story_live_viewer_dropdown_impression",
      },
      NAVIGATION_GESTURE: {
        AUTO_JUMP: "auto_jump",
        NAVIGATE_AWAY: "navigate_away",
        SWIPE_LEFT: "swipe_left",
        SWIPE_RIGHT: "swipe_right",
        TAP_BACKWARD: "tap_backward",
        TAP_FORWARD: "tap_forward",
        VIEWER_SHEET: "viewer_sheet",
      },
      STORY_REPLY_TYPE: {
        STICKER: "Sticker",
        TEXT_SUGGESTION: "TextSuggestion",
      },
      STORY_TYPE: {
        EVENT_STORY: "event",
        FOLLOWEE_STORY: "followee",
        FRIEND_STORY: "friend",
        GROUP_STORY: "group",
        MISSING_STORY_DATA: "missingStoryData",
        PAGE_STORY: "page",
        SELF_STORY: "self",
        STORY_PROMOTION: "promotion",
      },
      TIMESPENT_MINIMUM_TIME: 500,
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "StoriesPauseReasons",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "BUCKET_TRANSITION";
    b = "BUCKET_REFRESH";
    c = "BUG_DIALOG";
    d = "CARD_CHANGE";
    e = "CARD_TRANSITION_INITIATED";
    var g = "CLICK_ADD_STORY",
      h = "CLICK_ARCHIVE_RESHARE_BUTTON",
      i = "CLICK_EMOJI_SELECTOR",
      j = "CLICK_GIF_SELECTOR",
      k = "CLICK_ON_OVERLAY_STICKER",
      l = "CLICK_PAUSE_ICON",
      m = "CLICK_SEE_MORE_LONG_TEXT",
      n = "CLICK_STICKER_SELECTOR",
      o = "CONFIRMATION_DIALOG",
      p = "EXTENDED_VIEWER",
      q = "FOCUSE_ON_INPUT",
      r = "HOVER_ON_ARCHIVE_RESHARE_BUTTON",
      s = "HOVER_ON_OVERLAY_STICKER",
      t = "HOVER_ON_PAUSE_OVERLAY",
      u = "HOVER_ON_RATING_STICKER",
      v = "HOVER_ON_REACTION_ICON",
      w = "HOVER_ON_SHARE_BUTTON",
      x = "HOVER_ON_SONG_STICKER",
      y = "JEWEL",
      z = "KEYBOARD",
      A = "LWR_PLAYBACK",
      B = "MENU",
      C = "MESSAGE_VIEWER",
      D = "MOUSE_CLICK_AND_HOLD",
      E = "MOUSE_ENTER_POLL_STICKER",
      F = "REPORT_DIALOG",
      G = "SETTINGS_DIALOG",
      H = "TILE_GRID_BUTTON",
      I = "VIDEO_PLAYBACK",
      J = "VIEWER_SHEET_OVERLAY",
      K = "VISIBILITY_CHANGE",
      L = "WATCH_BROADCAST_CTA";
    f.BUCKET_TRANSITION = a;
    f.BUCKET_REFRESH = b;
    f.BUG_DIALOG = c;
    f.CARD_CHANGE = d;
    f.CARD_TRANSITION_INITIATED = e;
    f.CLICK_ADD_STORY = g;
    f.CLICK_ARCHIVE_RESHARE_BUTTON = h;
    f.CLICK_EMOJI_SELECTOR = i;
    f.CLICK_GIF_SELECTOR = j;
    f.CLICK_ON_OVERLAY_STICKER = k;
    f.CLICK_PAUSE_ICON = l;
    f.CLICK_SEE_MORE_LONG_TEXT = m;
    f.CLICK_STICKER_SELECTOR = n;
    f.CONFIRMATION_DIALOG = o;
    f.EXTENDED_VIEWER = p;
    f.FOCUSE_ON_INPUT = q;
    f.HOVER_ON_ARCHIVE_RESHARE_BUTTON = r;
    f.HOVER_ON_OVERLAY_STICKER = s;
    f.HOVER_ON_PAUSE_OVERLAY = t;
    f.HOVER_ON_RATING_STICKER = u;
    f.HOVER_ON_REACTION_ICON = v;
    f.HOVER_ON_SHARE_BUTTON = w;
    f.HOVER_ON_SONG_STICKER = x;
    f.JEWEL = y;
    f.KEYBOARD = z;
    f.LWR_PLAYBACK = A;
    f.MENU = B;
    f.MESSAGE_VIEWER = C;
    f.MOUSE_CLICK_AND_HOLD = D;
    f.MOUSE_ENTER_POLL_STICKER = E;
    f.REPORT_DIALOG = F;
    f.SETTINGS_DIALOG = G;
    f.TILE_GRID_BUTTON = H;
    f.VIDEO_PLAYBACK = I;
    f.VIEWER_SHEET_OVERLAY = J;
    f.VISIBILITY_CHANGE = K;
    f.WATCH_BROADCAST_CTA = L;
  },
  66
);
__d(
  "StoriesUniqueID",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "js_",
      h = 36,
      i = 0;
    function a() {
      return g + (i++).toString(h);
    }
    f["default"] = a;
  },
  66
);
__d(
  "useThrottledImpl",
  ["cr:1708227"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1708227");
  },
  98
);
__d(
  "useThrottled",
  ["useThrottledImpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f.exports = c("useThrottledImpl");
  },
  34
);
__d(
  "StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent",
  ["cr:6450"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:6450");
  },
  98
);
__d(
  "StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(13249850);
    g["default"] = a;
  },
  98
);
