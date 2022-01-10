if (self.CavalryLogger) {
  CavalryLogger.start_js(["r32YOkL"]);
}

__d(
  "StoriesTrayTileView_LWRAnimations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayTileView_LWRAnimations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesTrayTileReactionIconWrapper_LWRAnimations",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayTileView_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStoriesDropdown",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayTileView_bucket",
      selections: [
        {
          condition: "shouldEnableLiveInStoriesDropdown",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesTrayTileWatchLivePopover_bucket",
            },
          ],
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
  "StoriesTrayTileView_coverVideo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayTileView_coverVideo",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesTrayTileVideoAutoPlayerWrapper_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayTileView_warningScreen.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayTileView_warningScreen",
      selections: [
        {
          args: null,
          documentName: "StoriesTrayTileView_warningScreen",
          fragmentName: "CometWarningScreenOverlay_data",
          fragmentPropName: "data",
          kind: "ModuleImport",
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayUtils",
  ["StoriesLoggingConstants", "XCometStoriesControllerRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      e === void 0 && (e = c("StoriesLoggingConstants").ACTION_SOURCE.TRAY);
      d = {
        bucket_count: d,
        bucket_id: a,
        card_id: b === null ? void 0 : b,
        source: e,
      };
      return c("XCometStoriesControllerRouteBuilder").buildURL(d);
    }
    g.getBucketURL = a;
  },
  98
);
__d(
  "StoriesTrayTileAvatar.react",
  ["fbt", "CometLoadingAnimation.react", "TetraText.react", "react", "stylex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children,
        d = a.hasNew,
        e = a.isLiveStreaming;
      e = e === void 0 ? !1 : e;
      var f = a.isOpaqueBackground;
      a = a.isUploading;
      a = a === void 0 ? !1 : a;
      var g = h._("LIVE");
      return i.jsxs("div", {
        className: c("stylex").dedupe(
          {
            "align-items-1": "bp9cbjyn",
            "background-color-1": "rnr61an3",
            "border-top-start-radius-1": "qavdm89g",
            "border-top-end-radius-1": "gsh9l1b6",
            "border-bottom-end-radius-1": "lwukve8w",
            "border-bottom-start-radius-1": "jpyiy761",
            "box-sizing-1": "rq0escxv",
            "display-1": "j83agx80",
            "height-1": "qypqp5cg",
            "justify-content-1": "taijpn5t",
            "overflow-x-1": "ni8dbmo4",
            "overflow-y-1": "stjgntxs",
            "width-1": "q676j6op",
          },
          f === !0 ? { "background-color-1": "cwj9ozl2" } : null,
          b != null
            ? {
                "border-top-style-0.4": "goun2846",
                "border-end-style-0.4": "ccm00jje",
                "border-bottom-style-0.4": "s44p3ltw",
                "border-start-style-0.4": "mk2mc5f4",
                "border-top-width-0.4": "bharnk5q",
                "border-end-width-0.4": "n5w6wilu",
                "border-bottom-width-0.4": "axcgnzup",
                "border-start-width-0.4": "peup4ujy",
              }
            : null,
          d === !0 && !a
            ? {
                "border-top-color-0.4": "ng4oes9w",
                "border-end-color-0.4": "epui8hbc",
                "border-bottom-color-0.4": "nxp5a7ae",
                "border-start-color-0.4": "og13rbbo",
              }
            : null,
          d !== !0 && !a
            ? {
                "border-top-color-0.4": "hd23q7wb",
                "border-end-color-0.4": "qz5c9aoe",
                "border-bottom-color-0.4": "a1yigdvo",
                "border-start-color-0.4": "mlvimuxf",
              }
            : null,
          a && !e
            ? {
                "border-top-color-0.4": "jgf7e1nu",
                "border-end-color-0.4": "r7dfy6xl",
                "border-bottom-color-0.4": "d06cv69u",
                "border-start-color-0.4": "cdcbzqsl",
              }
            : null,
          e
            ? {
                "border-top-color-0.4": "n7p45sc1",
                "border-end-color-0.4": "cclxv6gs",
                "border-bottom-color-0.4": "oz1w3mh7",
                "border-start-color-0.4": "sagyg5b6",
              }
            : null
        ),
        children: [
          a &&
            !e &&
            i.jsx("div", {
              className:
                "p2c9wqcs kr520xx4 j9ispegn pmk7jnqg taijpn5t datstx6m n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn",
              children: i.jsx("div", {
                className: "gmg15wdm cxbc2wzk l9j0dhe7",
                children: i.jsx(c("CometLoadingAnimation.react"), { size: 40 }),
              }),
            }),
          b,
          e &&
            i.jsx("div", {
              className:
                "brl5nffy oqcyycmt re5koujm pmk7jnqg e9o6kcyi e5nlhep0 ihtri3yf ecm0bbzt be3nqp5n qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj l44iypv3",
              children: i.jsx(c("TetraText.react"), {
                color: "white",
                numberOfLines: 1,
                type: "meta4",
                children: g,
              }),
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
  "cometValidateAsElementRect",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return typeof a === "object"
        ? {
            bottom:
              typeof (a == null ? void 0 : a.bottom) === "number"
                ? a.bottom
                : 0,
            height:
              typeof (a == null ? void 0 : a.height) === "number"
                ? a.height
                : 0,
            left:
              typeof (a == null ? void 0 : a.left) === "number" ? a.left : 0,
            right:
              typeof (a == null ? void 0 : a.right) === "number" ? a.right : 0,
            top: typeof (a == null ? void 0 : a.top) === "number" ? a.top : 0,
            width:
              typeof (a == null ? void 0 : a.width) === "number" ? a.width : 0,
          }
        : { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 };
    }
    f["default"] = a;
  },
  66
);
__d(
  "StoriesTrayTileView.react",
  [
    "CometBackgroundImage.react",
    "CometLazyPopoverTrigger.react",
    "CometPressable.react",
    "CometRelay",
    "JSResourceForInteraction",
    "StoriesConstants",
    "StoriesGating",
    "StoriesRatioBox.react",
    "StoriesTrayTileView_LWRAnimations.graphql",
    "StoriesTrayTileView_bucket.graphql",
    "StoriesTrayTileView_coverVideo.graphql",
    "StoriesTrayTileView_warningScreen.graphql",
    "TetraText.react",
    "cometValidateAsElementRect",
    "cr:10227",
    "cr:10696",
    "cr:567",
    "react",
    "requireDeferred",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l = d("react"),
      m = d("react").useRef,
      n = c("requireDeferred")("ODS").__setRef("StoriesTrayTileView.react"),
      o = c("JSResourceForInteraction")(
        "StoriesTrayTileWatchLivePopover.react"
      ).__setRef("StoriesTrayTileView.react"),
      p = 12,
      q = 8,
      r = 46,
      s = {
        avatarWrapper: {
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        background: {
          transformOrigin: "fi2e5rcv",
          transitionDuration: "ebpj63zs",
          transitionProperty: "flx89l3n",
          transitionTimingFunction: "sgqwj88q",
        },
        backgroundFocused: { transform: "dzpjd0bq" },
        boxShadow: { boxShadow: "sbcfpzgs" },
        button: {
          appearance: "dwo3fsh8",
          backgroundColor: "g5ia77u1",
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
          display: "a8c37x1j",
          width: "k4urcfbm",
          ":active": { transform: "lsqurvkf" },
        },
        buttonFocused: { filter: "b0gio0x4" },
        coverImageFilter: { backgroundImage: "mm8kr34x" },
        emptyCoverImageFilter: { backgroundImage: "p2rvn0aa" },
        full: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        light: { opacity: "qwwmc0zo" },
        outline: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          borderTop: "opwvks06",
          borderEnd: "hop1g133",
          borderBottom: "linmgsc8",
          borderStart: "t63ysoy8",
          borderTopStartRadius: "fni8adji",
          borderTopEndRadius: "hgaippwi",
          borderBottomEndRadius: "fykbt5ly",
          borderBottomStartRadius: "ns4ygwem",
          pointerEvents: "hzruof5a",
        },
        pointerEventsNone: { pointerEvents: "hzruof5a" },
        previewImageFilter: { filter: "dh1zb4fo" },
        reactionIconWrapper: {
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          paddingTop: "cxgpxx05",
          paddingEnd: "dflh9lhu",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
          position: "pmk7jnqg",
        },
        root: { position: "l9j0dhe7" },
        textWrapper: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          position: "pmk7jnqg",
          textAlign: "hzawbc8m",
          width: "k4urcfbm",
        },
        tile: {
          backgroundColor: "tdjehn4e",
          borderTopStartRadius: "fni8adji",
          borderTopEndRadius: "hgaippwi",
          borderBottomEndRadius: "fykbt5ly",
          borderBottomStartRadius: "ns4ygwem",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        warningScreenContainer: { zIndex: "du4w35lb" },
      },
      t = function (a) {
        var b = a.showOutline
          ? l.jsx("div", { className: c("stylex")(s.outline) })
          : null;
        return l.jsxs("div", {
          className: c("stylex")(s.root),
          children: [a.children, b],
        });
      };
    function a(a) {
      var e = a.animations,
        f = a.aspectRatio;
      f = f === void 0 ? d("StoriesConstants").DEFAULT_ASPECT_RATIO : f;
      var g = a.avatar,
        u = a.avatarInteractable,
        v = u === void 0 ? !1 : u,
        w = a.backgroundColor,
        x = a.bucketUrl,
        y = a.coverImage;
      u = a.coverVideo;
      var z = a.disabled,
        A = a.disablePreloadOnMouseHover,
        B = a.disablePreloadOnRender,
        C = a.hasReactionIcon;
      C = C === void 0 ? !1 : C;
      var D = a.isFirstVideoBucket,
        E = D === void 0 ? !1 : D;
      D = a.isUploading;
      D = D === void 0 ? !1 : D;
      var F = a.label,
        G = a.numLines,
        H = G === void 0 ? 3 : G,
        I = a.onPress,
        J = a.onPressIn;
      G = a.passthroughProps;
      var K = a.showOutline;
      K = K === void 0 ? !1 : K;
      var L = a.showShadow,
        M = L === void 0 ? !0 : L;
      L = a.small;
      L = L === void 0 ? !1 : L;
      var aa = a.storyId,
        N = a.canViewerReply;
      N = N === void 0 ? !1 : N;
      var O = a.text,
        P = a.theme;
      P = P === void 0 ? "dark" : P;
      var Q = a.warningScreenNode,
        R = a.isLiveStreaming,
        S = R === void 0 ? !1 : R;
      R = a.bucket;
      var T = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("StoriesTrayTileView_warningScreen.graphql")),
          Q
        ),
        U = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("StoriesTrayTileView_coverVideo.graphql")),
          u
        );
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("StoriesTrayTileView_LWRAnimations.graphql")),
        e
      );
      Q = d("CometRelay").useFragment(
        k !== void 0 ? k : (k = b("StoriesTrayTileView_bucket.graphql")),
        R
      );
      var ba = d("StoriesGating").shouldShowBigTile()
          ? d("StoriesConstants").BIG_TILE_ASPECT_RATIO
          : f,
        V = d("StoriesGating").shouldUseSmallerFont() ? !0 : L,
        W = C
          ? { padding: V ? q : p, paddingRight: r }
          : { padding: V ? q : p },
        X =
          g != null
            ? l.jsx("div", {
                className: c("stylex")(
                  s.avatarWrapper,
                  !v && s.pointerEventsNone
                ),
                style: W,
                children: g,
              })
            : null,
        Y = m(null),
        ca = l.jsx("div", {
          className: c("stylex")(D && s.emptyCoverImageFilter, s.full),
        });
      u =
        b("cr:567") != null && N
          ? l.jsx("div", {
              className: c("stylex")(s.reactionIconWrapper),
              children: l.jsx(b("cr:567"), { animations: a, storyId: aa }),
            })
          : null;
      var Z = function (a) {
        return l.jsxs(c("StoriesRatioBox.react"), {
          height: 1,
          width: ba,
          children: [
            y != null
              ? l.jsxs("div", {
                  className: c("stylex")(
                    s.background,
                    ((a == null ? void 0 : a.hovered) ||
                      ((a == null ? void 0 : a.focused) &&
                        (a == null ? void 0 : a.focusVisible))) &&
                      s.backgroundFocused,
                    s.full
                  ),
                  style: { backgroundColor: w },
                  children: [
                    d("StoriesGating").shouldEnableVideoAutoplay() &&
                    E &&
                    U != null &&
                    b("cr:10227") != null
                      ? l.jsx(b("cr:10227"), { coverImage: y, video: U })
                      : E && U != null && b("cr:10696") != null
                      ? l.jsx(b("cr:10696"), { coverImage: y, video: U })
                      : l.jsx(c("CometBackgroundImage.react"), { src: y }),
                    T != null &&
                      l.jsx("div", {
                        className: c("stylex")(
                          s.full,
                          s.warningScreenContainer
                        ),
                        children: l.jsx(d("CometRelay").MatchContainer, {
                          match: T,
                          props: {
                            alwaysShowCoverComponent: !0,
                            alwaysShowDetails: !1,
                            alwaysUseSmallLayout: !0,
                            data: T,
                            mediaUri: (a = y) != null ? a : "",
                            surface: "story_tray",
                            url: x,
                          },
                        }),
                      }),
                    l.jsx("div", {
                      className: c("stylex")([
                        s.coverImageFilter,
                        s.full,
                        d("StoriesGating").shouldUsePreviewFilter() &&
                          s.previewImageFilter,
                      ]),
                    }),
                  ],
                })
              : ca,
            O != null
              ? l.jsx("div", {
                  className: c("stylex")(s.textWrapper, s.pointerEventsNone),
                  style: W,
                  children: V
                    ? l.jsx(c("TetraText.react"), {
                        color: "white",
                        numberOfLines: H,
                        type: "bodyLink4",
                        children: O,
                      })
                    : l.jsx(c("TetraText.react"), {
                        color: "white",
                        numberOfLines: H,
                        type: "bodyLink3",
                        children: O,
                      }),
                })
              : null,
            v ? null : X,
          ],
        });
      };
      if (x != null || I != null) {
        e = babelHelpers["extends"]({}, G, {
          getTilePosition: function () {
            var a;
            return c("cometValidateAsElementRect")(
              (a = Y.current) == null ? void 0 : a.getBoundingClientRect()
            );
          },
        });
        var da = {
            passthroughProps: e,
            prefetchQueries: A !== !0,
            preload: B !== !0,
            traceParams: { navigation_source: "stories_tray_tile" },
            url: x,
          },
          $ = function (a) {
            n.onReady(function (a) {
              a.bumpEntityKey(
                4329,
                "fb_stories_web",
                "stories_tray_pog_click",
                1
              );
            }),
              I && I(a);
          };
        R = function (a, b) {
          a === void 0 && (a = null);
          return l.jsx(c("CometPressable.react"), {
            disabled: z,
            display: "inline",
            label: F != null ? F : void 0,
            linkProps:
              d("StoriesGating").shouldEnableLiveInStoriesDropdown() && S
                ? void 0
                : da,
            onPress: function (a) {
              $ && $(a), b && b();
            },
            onPressIn: J,
            overlayDisabled: !0,
            ref: a,
            suppressHydrationWarning: !0,
            xstyle: function (a) {
              var b = a.focused,
                c = a.focusVisible;
              a = a.hovered;
              return [
                s.tile,
                s.button,
                (a || (b && c)) && s.buttonFocused,
                M && s.boxShadow,
              ];
            },
            children: Z,
          });
        };
        return l.jsx("div", {
          ref: Y,
          children: l.jsxs(t, {
            showOutline: K,
            children: [
              d("StoriesGating").shouldEnableLiveInStoriesDropdown() && S
                ? l.jsx(c("CometLazyPopoverTrigger.react"), {
                    popoverProps: { bucket: Q, viewStoryUrl: x },
                    popoverResource: o,
                    children: R,
                  })
                : R(),
              v ? X : null,
              C ? u : null,
            ],
          }),
        });
      } else
        return l.jsx(t, {
          showOutline: K,
          children: l.jsxs("div", {
            className: c("stylex")(
              s.tile,
              M && s.boxShadow,
              P === "light" && s.light
            ),
            children: [Z(), v ? X : null, C ? u : null],
          }),
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTrayTileGlimmer.react",
  [
    "BaseGlimmer.react",
    "StoriesTrayTileAvatar.react",
    "StoriesTrayTileView.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.aspectRatio;
      a = a.index;
      a = a === void 0 ? 0 : a;
      return h.jsx(c("BaseGlimmer.react"), {
        className: "stjgntxs ni8dbmo4 ns4ygwem fykbt5ly hgaippwi fni8adji",
        index: a,
        children: h.jsx(c("StoriesTrayTileView.react"), {
          aspectRatio: b,
          avatar: h.jsx(c("StoriesTrayTileAvatar.react"), {}),
          showShadow: !1,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesModuleStoryOpenViewerFromStoriesHomeQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(13239835);
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedInlineComposerPressableProfilePic_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedInlineComposerPressableProfilePic_profile",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedInlineComposerProfilePic_profile",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
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
  "CometFeedInlineComposerProfilePic_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedInlineComposerProfilePic_profile",
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
      ],
      type: "Profile",
      abstractKey: "__isProfile",
    };
    e.exports = a;
  },
  null
);
__d(
  "FeedInlineComposerFeelingSprout_sprout.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FeedInlineComposerFeelingSprout_sprout",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CometComposerMinutiaeSprout",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "usePostInProgress",
  ["ifRequireable", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;
    function a() {
      var a = h(null),
        b = a[0],
        d = a[1];
      a = function (a) {
        c("ifRequireable")(
          "getPlainTextFromDeferredDraftEditorState",
          function (b) {
            if (a == null ? void 0 : a.editorState) {
              b = b(a == null ? void 0 : a.editorState);
              var c = b != null && b.trim() !== "";
              d(c ? b : null);
            }
          }
        );
      };
      return { postPlainText: b, updatePostPlainText: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedInlineComposerProfilePic.react",
  [
    "ix",
    "CometFeedInlineComposerProfilePic_profile.graphql",
    "CometImageIcon_DEPRECATED.react",
    "CometRelay",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = a.profile$key;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometFeedInlineComposerProfilePic_profile.graphql")),
        a
      );
      if (a == null || a.id == null)
        return c("recoverableViolation")(
          "Unable to fetch profile for composer profile pic",
          "comet_composer"
        );
      a = a == null ? void 0 : (a = a.profile_picture) == null ? void 0 : a.uri;
      return j.jsx(c("CometImageIcon_DEPRECATED.react"), {
        size: 40,
        src: a != null ? a : h("762679"),
        style: "circle",
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedInlineComposerPressableProfilePic.react",
  [
    "fbt",
    "CometFeedInlineComposerPressableProfilePic_profile.graphql",
    "CometFeedInlineComposerProfilePic.react",
    "CometPressable.react",
    "CometRelay",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = { profilePic: { display: "j83agx80", marginEnd: "oi9244e8" } };
    function a(a) {
      a = a.profile$key;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometFeedInlineComposerPressableProfilePic_profile.graphql"
            )),
        a
      );
      if (a == null)
        return c("recoverableViolation")(
          "Unable to fetch profile for composer profile pic",
          "comet_composer"
        );
      var e = a == null ? void 0 : a.url;
      return j.jsx(c("CometPressable.react"), {
        "aria-label":
          (a == null ? void 0 : a.name) != null
            ? h._("{userName}'s Timeline", [
                h._param("userName", a == null ? void 0 : a.name),
              ])
            : h._("Profile"),
        display: "inline",
        linkProps: { routeTarget: "self", url: e },
        overlayRadius: "50%",
        xstyle: k.profilePic,
        children: j.jsx(c("CometFeedInlineComposerProfilePic.react"), {
          profile$key: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedInlineComposerSprout.react",
  [
    "CometImage.react",
    "CometPressable.react",
    "CometRefineRef",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          alignItems: "bp9cbjyn",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          display: "j83agx80",
          flexBasis: "rj1gh0hx",
          flexGrow: "buofh1pr",
          flexShrink: "g5gj957u",
          justifyContent: "taijpn5t",
          minWidth: "idt9hxom",
          paddingTop: "cxgpxx05",
          paddingEnd: "dflh9lhu",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
        },
        sprout: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          lineHeight: "dfwzkoeu",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        sproutIcon: {
          display: "pq6dq46d",
          flexGrow: "kb5gq1qc",
          flexShrink: "pfnyh3mw",
          marginEnd: "oi9244e8",
        },
      };
    function a(a) {
      var b = a.imageSrc,
        d = a.label,
        e = a.onHoverIn,
        f = a.onHoverOut,
        g = a.onPress,
        j = a.onPressIn,
        k = a.testid;
      k = a.triggerRef;
      return h.jsx(c("CometPressable.react"), {
        display: "block",
        onHoverIn: e,
        onHoverOut: f,
        onPress: g,
        onPressIn: j,
        ref: c("CometRefineRef")(k),
        testid: void 0,
        xstyle: i.root,
        children: h.jsxs("div", {
          className: c("stylex")(i.sprout),
          children: [
            h.jsx("span", {
              className: c("stylex")(i.sproutIcon),
              children: h.jsx(c("CometImage.react"), {
                height: 24,
                src: b,
                width: 24,
              }),
            }),
            h.jsx(c("TetraText.react"), {
              color: "secondary",
              numberOfLines: 1,
              type: "bodyLink3",
              children: d,
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
  "TextInputButton.react",
  [
    "CometBadge.react",
    "CometLineClamp.react",
    "CometPressable.react",
    "TetraIcon.react",
    "TetraProfilePhoto.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 40,
      j = {
        badge: {
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          display: "j83agx80",
          end: "yftcgz6f",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "pmk7jnqg",
          top: "kr520xx4",
        },
        icon: { height: "gl3lb2sf", marginEnd: "fv0vnmcu" },
        linkLabel: {
          color: "m9osqain",
          fontSize: "a5q79mjw",
          hyphens: "gy2v8mqq",
          overflowWrap: "jm1wdb64",
          width: "k4urcfbm",
          wordBreak: "qv66sw1b",
        },
        linkLabelPlaceholder: { color: "oo9gr5id" },
        linkLabelPreserveNewlines: { whiteSpace: "ii04i59q" },
        profile: {
          display: "j83agx80",
          marginEnd: "fv0vnmcu",
          marginStart: "fop5sh7t",
        },
        profileDisabled: { opacity: "akz8cqyu" },
        root: {
          alignItems: "bp9cbjyn",
          backgroundColor: "b3i9ofy5",
          borderTopStartRadius: "orhb3f3m",
          borderTopEndRadius: "czkt41v7",
          borderBottomEndRadius: "fmqxjp7s",
          borderBottomStartRadius: "emzo65vh",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          flexGrow: "buofh1pr",
          height: "qypqp5cg",
          justifyContent: "jifvfom9",
          paddingEnd: "d1544ag0",
          paddingStart: "tw6a2znq",
          position: "l9j0dhe7",
        },
        rootMultiLine: {
          height: "idiwt2bm",
          minHeight: "kbf60n1y",
          paddingTop: "cxgpxx05",
          paddingEnd: "d1544ag0",
          paddingBottom: "sj5x9vvc",
          paddingStart: "tw6a2znq",
        },
        selected: { backgroundColor: "oo1teu6h" },
      };
    function a(a, b) {
      var d = a.disabled;
      d = d === void 0 ? !1 : d;
      var e = a.hasNewContentBadge;
      e = e === void 0 ? !1 : e;
      var f = a.image,
        g = a.isUserEnteredPreviewText;
      g = g === void 0 ? !1 : g;
      var k = a.label,
        l = a.labelMaxLines;
      l = l === void 0 ? 2 : l;
      var m = a.linkProps,
        n = a.onHoverIn,
        o = a.onHoverOut,
        p = a.onPress,
        q = a.onPressIn,
        r = a.preserveLabelNewlines;
      r = r === void 0 ? !1 : r;
      var s = a.selected,
        t = s === void 0 ? !1 : s;
      s = a.testid;
      s = a.testOnly_pressed;
      a = null;
      e &&
        (a = h.jsx("div", {
          className: c("stylex")(j.badge),
          children: h.jsx(c("CometBadge.react"), {
            border: "white",
            color: d ? "gray" : "blue",
            isProfileBadge: !0,
            size: 6,
          }),
        }));
      e = null;
      if (f != null)
        if (f.type === "icon") {
          var u = t === !0 ? "highlight" : null;
          e = h.jsx("div", {
            className: c("stylex")(j.icon),
            children: h.jsx(c("TetraIcon.react"), {
              color: d ? "disabled" : (u = u) != null ? u : "primary",
              icon: f.icon,
              size: 16,
            }),
          });
        } else
          f.type === "profile-photo" &&
            f.source != null &&
            (e = h.jsx("div", {
              className: c("stylex")(j.profile, d && j.profileDisabled),
              children: h.jsx(c("TetraProfilePhoto.react"), {
                shape: "circle",
                size: 28,
                source: f.source,
              }),
            }));
      u = h.jsx("div", {
        className: c("stylex")(
          j.linkLabel,
          g === !0 && j.linkLabelPlaceholder,
          r === !0 && j.linkLabelPreserveNewlines
        ),
        children: h.jsx(c("CometLineClamp.react"), { lines: l, children: k }),
      });
      return h.jsxs(c("CometPressable.react"), {
        disabled: d,
        display: "inline",
        linkProps: m,
        onHoverIn: n,
        onHoverOut: o,
        onPress: d ? void 0 : p,
        onPressIn: d ? void 0 : q,
        overlayRadius: i / 2,
        ref: b,
        testOnly_pressed: s,
        testid: void 0,
        xstyle: function () {
          return [j.root, j.rootMultiLine, t === !0 && j.selected];
        },
        children: [a, e, u],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "FeedInlineComposerFeelingSprout.react",
  [
    "fbt",
    "ix",
    "CometFeedInlineComposerSprout.react",
    "FeedInlineComposerFeelingSprout_sprout.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    j !== void 0
      ? j
      : (j = b("FeedInlineComposerFeelingSprout_sprout.graphql"));
    function a(a) {
      var b = a.onHoverIn,
        d = a.onHoverOut,
        e = a.onPressIn,
        f = a.showComposerDialog;
      a = a.triggerRef;
      return k.jsx(c("CometFeedInlineComposerSprout.react"), {
        imageSrc: i("1260648"),
        label: h._("Feeling/Activity"),
        onHoverIn: b,
        onHoverOut: d,
        onPress: function () {
          return f({ pushedPageOnLoad: "feeling" });
        },
        onPressIn: e,
        triggerRef: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FeedInlineComposerTaggingSprout.react",
  ["fbt", "ix", "CometFeedInlineComposerSprout.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.label,
        d = a.onHoverIn,
        e = a.onHoverOut,
        f = a.onPressIn,
        g = a.showComposerDialog;
      a = a.triggerRef;
      return j.jsx(c("CometFeedInlineComposerSprout.react"), {
        imageSrc: i("1260655"),
        label: (b = b) != null ? b : h._("Tag Friends"),
        onHoverIn: d,
        onHoverOut: e,
        onPress: function () {
          return g({ pushedPageOnLoad: "with_tagger" });
        },
        onPressIn: f,
        triggerRef: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "InlineComposerLiveProducerSprout.react",
  [
    "fbt",
    "ix",
    "CometFeedInlineComposerSprout.react",
    "XCometLiveProducerControllerRouteBuilder",
    "react",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback;
    function a(a) {
      a = a.triggerRef;
      var b = c("useCometRouterDispatcher")(),
        d = k(
          function () {
            if (b != null) {
              var a = c("XCometLiveProducerControllerRouteBuilder").buildURL({
                entry_point: "feedx_sprouts",
                source: "CAMERA",
              });
              b.go(a, {});
            }
          },
          [b]
        );
      return j.jsx(c("CometFeedInlineComposerSprout.react"), {
        imageSrc: i("1223965"),
        label: h._("Live Video"),
        onPress: d,
        testid: void 0,
        triggerRef: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4339748059446297",
        metadata: {},
        name: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6486001464747158",
        metadata: {},
        name: "StoriesSuspenseNavigationPaneRootWithEntryPointQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesGatingEntrypoint.entrypointutils",
  ["WebPixelRatio", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b, e, f;
      b = (b = c("qex")._("1946570")) != null ? b : !1;
      e = (e = c("qex")._("114")) != null ? e : !1;
      f = (f = c("qex")._("545")) != null ? f : !1;
      return {
        blur: d("WebPixelRatio").get() * 10,
        bucketID: a || "",
        initialBucketID: a || "",
        initialLoad: !0,
        scale: d("WebPixelRatio").get(),
        shouldEnableLiveInStories: e,
        shouldEnableLiveInStoriesDropdown: f,
        showSuggestedStickerReplies: b,
      };
    }
    g.getContentPaneParams = a;
  },
  98
);
__d(
  "StoriesCometSuspenseSingleBucketRootWithEntryPoint.entrypoint",
  [
    "JSResourceForInteraction",
    "StoriesGatingEntrypoint.entrypointutils",
    "StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.routeParams.bucket_id;
        a = a.routeProps.bucket_id_from_card_id;
        c = d("StoriesGatingEntrypoint.entrypointutils").getContentPaneParams(
          (c = c) != null ? c : a
        );
        return {
          queries: {
            storiesSuspenseContentPaneRootReference: {
              parameters: b(
                "StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"
              ),
              variables: c,
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "StoriesCometSuspenseSingleBucketRootWithEntryPoint.react"
      ).__setRef(
        "StoriesCometSuspenseSingleBucketRootWithEntryPoint.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "FBUnifiedStoriesTrayType",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum").Mirrored([
      "AUTOPLAY_NOTIFICATION_TRAY",
      "FEED_PROFILE_TRAY",
      "FEED_UNITS_PAGINATION",
      "GROUPS_STORIES_TRAY",
      "MONTAGE",
      "PERMALINK",
      "PORTAL_TRAY",
      "SUGGESTED_STORIES",
      "SUGGESTED_STORIES_FOR_HYBRID_TRAY",
      "TOP_OF_FEED_TRAY",
      "TOP_OF_FEED_TRAY_SHUFFLE",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "FBUnifiedStoriesTrayTypeUtils.facebook",
  ["$InternalEnumUtils", "FBUnifiedStoriesTrayType"],
  function (a, b, c, d, e, f, g) {
    a = d("$InternalEnumUtils").createToJSEnum(c("FBUnifiedStoriesTrayType"));
    b = d("$InternalEnumUtils").createFromJSEnum(c("FBUnifiedStoriesTrayType"));
    g.toJSEnum = a;
    g.fromJSEnum = b;
  },
  98
);
__d(
  "StoriesCometSuspenseRoot.entrypoint",
  [
    "FBUnifiedStoriesTrayTypeUtils.facebook",
    "JSResourceForInteraction",
    "StoriesGatingEntrypoint.entrypointutils",
    "StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters",
    "StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters",
    "WebPixelRatio",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var e = a.passthroughProps,
          f = a.routeParams;
        a = a.routeProps;
        var g = f.bucket_id;
        a = a.buckets_count;
        var h = c("gkx")("377");
        f = (f == null ? void 0 : f.source) === "story_tray";
        e = d("FBUnifiedStoriesTrayTypeUtils.facebook").fromJSEnum(
          (e = e == null ? void 0 : e.storiesTrayType) != null
            ? e
            : "TOP_OF_FEED_TRAY"
        );
        f = {
          bucketsCount: (a = a) != null ? a : 9,
          extendedViewerInitialBucketID: (a = g) != null ? a : "",
          includeInitialBucket: g !== "" && g !== null && h && !f,
          pinnedIDs: [(a = g) != null ? a : ""],
          scale: d("WebPixelRatio").get(),
          showExtendedViewerOverlay: h,
          storiesTrayType: e,
        };
        a = d("StoriesGatingEntrypoint.entrypointutils").getContentPaneParams(
          g
        );
        return {
          queries: {
            storiesSuspenseContentPaneRootReference: {
              parameters: b(
                "StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"
              ),
              variables: a,
            },
            storiesSuspenseNavigationPaneRootReference: {
              parameters: b(
                "StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters"
              ),
              variables: f,
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "StoriesCometSuspenseRoot.react"
      ).__setRef("StoriesCometSuspenseRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
