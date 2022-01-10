if (self.CavalryLogger) {
  CavalryLogger.start_js(["GwCOamB"]);
}

__d(
  "CometFeedVideoPlayerPlaceholder_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedVideoPlayerPlaceholder_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerCometFeedThumbnail_video",
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
  "VideoPlayerCometFeedThumbnail_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerCometFeedThumbnail_video",
      selections: [
        {
          alias: "thumbnailImage",
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
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
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerCometFeedStoryControls_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerCometFeedStoryControls_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerCometFeedStoryControlsImplLive_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerCometFeedStoryControlsImplNotLive_video",
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
  "CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react",
  [
    "BaseButtonOrLink_DEPRECATED.react",
    "CometImage.react",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        image: { height: "qypqp5cg", width: "q676j6op" },
        interactiveArea: {
          height: "datstx6m",
          position: "pmk7jnqg",
          start: "j9ispegn",
          width: "k4urcfbm",
        },
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          position: "l9j0dhe7",
          textAlign: "hzawbc8m",
        },
        smallImage: { height: "jnigpg78", width: "odw8uiq3" },
        smallText: {
          lineHeight: "jiuqdcnw",
          paddingStart: "b3onmgus",
          position: "l9j0dhe7",
          whiteSpace: "g0qnabr5",
        },
        text: {
          lineHeight: "jiuqdcnw",
          paddingStart: "tw6a2znq",
          position: "l9j0dhe7",
          whiteSpace: "g0qnabr5",
        },
        textLinkDisplay: { marginTop: "aahdfvyu", maxWidth: "nlp0uwpm" },
      };
    function a(a) {
      var b = a.buttonSize;
      b = b === void 0 ? "large" : b;
      var d = a.iconImageUri,
        e = a.label,
        f = a.linkDisplay,
        g = a.title,
        j = a.triggerRef;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "buttonSize",
        "iconImageUri",
        "label",
        "linkDisplay",
        "title",
        "triggerRef",
      ]);
      return b === "small"
        ? h.jsxs("div", {
            className: c("stylex")(i.root),
            children: [
              h.jsx(c("CometImage.react"), {
                alt: e,
                src: d,
                xstyle: i.smallImage,
              }),
              h.jsx("div", {
                className: c("stylex")(i.smallText),
                children: h.jsx(c("TetraText.react"), {
                  color: "white",
                  type: "body4",
                  children: g,
                }),
              }),
              h.jsx(
                c("BaseButtonOrLink_DEPRECATED.react"),
                babelHelpers["extends"]({}, a, {
                  label: e,
                  ref: j,
                  xstyle: i.interactiveArea,
                })
              ),
            ],
          })
        : h.jsxs("div", {
            className: c("stylex")(i.root),
            children: [
              h.jsx(c("CometImage.react"), { alt: e, src: d, xstyle: i.image }),
              h.jsxs("div", {
                className: c("stylex")(i.text),
                children: [
                  h.jsx(c("TetraText.react"), {
                    color: "white",
                    type: "headlineEmphasized3",
                    children: g,
                  }),
                  f != null && b !== "large_without_link"
                    ? h.jsx("div", {
                        className: c("stylex")(i.textLinkDisplay),
                        children: h.jsx(c("TetraText.react"), {
                          color: "white",
                          numberOfLines: 1,
                          type: "headline3",
                          children: f,
                        }),
                      })
                    : null,
                ],
              }),
              h.jsx(
                c("BaseButtonOrLink_DEPRECATED.react"),
                babelHelpers["extends"]({}, a, {
                  label: e,
                  ref: j,
                  xstyle: i.interactiveArea,
                })
              ),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWithThumbnail.react",
  [
    "CometImage.react",
    "CometVisualCompletionAttributes",
    "VideoPlayerHooks",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState,
      k = {
        root: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "taijpn5t",
        },
        thumbnail: { height: "datstx6m", width: "dbpd2lw6" },
      };
    function a(a) {
      a = a.src;
      var b = d("VideoPlayerHooks").useVideoPlaybackEnded(),
        e = d("VideoPlayerHooks").usePaused(),
        f = j(!1),
        g = f[0],
        l = f[1];
      i(
        function () {
          e || l(!0);
        },
        [e]
      );
      return !b && g
        ? null
        : h.jsx(
            "div",
            babelHelpers["extends"](
              { className: c("stylex")(k.root) },
              c("CometVisualCompletionAttributes").IGNORE,
              {
                children: h.jsx(c("CometImage.react"), {
                  src: a,
                  xstyle: k.thumbnail,
                }),
              }
            )
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCometFeedThumbnail.react",
  [
    "CometRelay",
    "VideoPlayerCometFeedThumbnail_video.graphql",
    "VideoPlayerWithThumbnail.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerCometFeedThumbnail_video.graphql")),
        a
      );
      a = a == null ? void 0 : (a = a.thumbnailImage) == null ? void 0 : a.uri;
      return a == null
        ? null
        : i.jsx(c("VideoPlayerWithThumbnail.react"), { src: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedVideoPlayerPlaceholder.react",
  [
    "fbt",
    "CometFeedVideoPlayerPlaceholder_video.graphql",
    "CometPressable.react",
    "CometRelay",
    "VideoPlayerCometFeedThumbnail.react",
    "VideoPlayerPlayButton.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = {
        pressable: {
          cursor: "nhd2j8a9",
          display: "a8c37x1j",
          pointerEvents: "mrt03zmi",
        },
        root: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          pointerEvents: "hzruof5a",
        },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometFeedVideoPlayerPlaceholder_video.graphql")),
        a.video
      );
      e = j.jsxs(j.Fragment, {
        children: [
          j.jsx(c("VideoPlayerCometFeedThumbnail.react"), { video: e }),
          j.jsx(c("VideoPlayerPlayButton.react"), { isVisible: !0 }),
        ],
      });
      return typeof a.onClick === "function"
        ? j.jsx(c("CometPressable.react"), {
            display: "block",
            label: h._("Play video"),
            onPress: a.onClick,
            overlayDisabled: !0,
            xstyle: [k.root, k.pressable],
            children: e,
          })
        : j.jsx("div", { className: c("stylex")(k.root), children: e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useIsCastingEnabled",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("1607539");
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerInteractionHintOverlay.react",
  ["CometVisualCompletionAttributes", "TetraText.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.interaction,
        d = a.isVisible;
      a = a.shiftHintOverlayLabel;
      return b == null || !b.overlayLabel
        ? null
        : h.jsx(
            "div",
            babelHelpers["extends"](
              {
                className: c("stylex").dedupe(
                  {
                    "bottom-1": "lqox9ss9",
                    "cursor-1": "nhd2j8a9",
                    "display-1": "q9uorilb",
                    "pointer-events-1": "hzruof5a",
                    "position-1": "pmk7jnqg",
                    "start-1": "kfkz5moi",
                    "text-shadow-1": "jy2njvef",
                    "transform-0.1": "cj5g2342",
                    "user-select-1": "abiwlrkh",
                    "white-space-1": "g0qnabr5",
                  },
                  d
                    ? null
                    : {
                        "pointer-events-1": "hzruof5a",
                        "visibility-1": "kr9hpln1",
                      },
                  a === !0
                    ? {
                        "bottom-1": "lfi1tu6t",
                        "start-1": "timu3f6w",
                        "z-index-1": "g7nl5sj3",
                      }
                    : null
                ),
              },
              c("CometVisualCompletionAttributes").IGNORE,
              {
                children: h.jsx(c("TetraText.react"), {
                  color: "secondaryOnMedia",
                  type: "bodyLink3",
                  children: b.overlayLabel,
                }),
              }
            )
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWatchAndScrollOverlay.react",
  ["fbt", "CometPressable.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        playButton: {
          alignItems: "bp9cbjyn",
          backgroundColor: "d6rk862h",
          display: "j83agx80",
          height: "datstx6m",
          justifyContent: "taijpn5t",
          width: "k4urcfbm",
        },
      };
    function a(a) {
      a = a.onPress;
      return i.jsx(c("CometPressable.react"), {
        display: "block",
        expanding: !0,
        label: h._("Play video"),
        onPress: a,
        overlayDisabled: !0,
        xstyle: j.playButton,
        children: i.jsx(c("TetraText.react"), {
          color: "white",
          type: "bodyLink3",
          children: h._("Now Playing"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useNavigateToTahoe",
  ["cr:1206952"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1206952");
  },
  98
);
__d(
  "useVideoPlayerClickToTahoeInteraction",
  [
    "fbt",
    "CometAdPreviewContext",
    "CometProductTagFunnelIDContext",
    "CometSetWatchAndScrollVideoContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "CometWarningScreenContext",
    "VideoPlayerHooks",
    "getAggregatedStoryTrackingNodeIndex",
    "gkx",
    "react",
    "useCometPreloader",
    "useFeedClickEventHandler",
    "useNavigateToTahoe",
    "usePlayerOriginRouteTracePolicy",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = d("react");
    var i = b.useCallback,
      j = b.useContext;
    function a(a) {
      var b = a.allowInteractionWhenVideoIsNotAlreadyPlaying,
        e = a.caller,
        f = a.channelEntryPoint,
        g = a.channelID,
        k = a.landingPageType,
        l = a.onClick,
        m = a.playerOrigin,
        n = a.playerSuborigin,
        o = a.reactionVideoChannelType,
        p = a.subOrigin;
      a = a.videoTahoeUrl;
      var q = d("CometAdPreviewContext").useCometAdPreviewContext(),
        r = j(c("CometTrackingCodeContext")),
        s = j(c("CometTrackingNodesContext")),
        t = j(c("CometProductTagFunnelIDContext")),
        u = d("CometWarningScreenContext").useIsOverlayShown(),
        v = d("CometWarningScreenContext").useHasOverlay();
      s = c("getAggregatedStoryTrackingNodeIndex")(s);
      var w = d("VideoPlayerHooks").useVideoPlayerInitialTracePolicy(),
        x = c("usePlayerOriginRouteTracePolicy")();
      f = c("useNavigateToTahoe")({
        href: a,
        passthroughProps: {
          bypassAutoplaySettings: !0,
          caller: e,
          channelEntryPoint: f,
          channelID: g,
          index: s,
          initialTracePolicy: (e = w) != null ? e : x,
          landingPageType: k,
          origOverlayShown: u,
          overlayExists: v,
          playerOrigin: m,
          playerSubOrigin: p,
          playerSuborigin: n,
          productTagFunnelID: t,
          reactionVideoChannelType: o,
          trackingCode: r,
        },
      });
      var y = f[0];
      g = f[1];
      s = f[2];
      w = f[3];
      var z = j(c("CometSetWatchAndScrollVideoContext")),
        A = c("gkx")("3017");
      e = i(
        function () {
          y(), l && l(), A && z(null);
        },
        [y, l, A, z]
      );
      x = c("useFeedClickEventHandler")(e);
      k = d("VideoPlayerHooks").usePlaying();
      u = (b === !0 || k) && a != null;
      v = c("useCometPreloader")("button", g, s, w);
      m = v[0];
      p = v[1];
      n = v[2];
      t = m;
      o = p;
      r = n;
      return q
        ? null
        : u
        ? {
            ariaLabel: h._("Click to expand"),
            handler: x,
            onMouseEnter: t,
            onMouseLeave: o,
            onPressStart: r,
            overlayLabel: h._("Click to expand"),
          }
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerDefaultClickInteraction",
  [
    "VideoPlayerHooks",
    "gkx",
    "useVideoPlayerClickToPlayInteraction",
    "useVideoPlayerClickToTahoeInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.caller,
        e = a.channelEntryPoint,
        f = a.channelID,
        g = a.landingPageType,
        h = a.onClick,
        i = a.reactionVideoChannelType,
        j = a.shouldUnmute,
        k = a.subOrigin;
      a = a.videoTahoeUrl;
      var l = d("VideoPlayerHooks").useAutoplayGatingResult();
      j = c("useVideoPlayerClickToPlayInteraction")({ shouldUnmute: j });
      b = c("useVideoPlayerClickToTahoeInteraction")({
        allowInteractionWhenVideoIsNotAlreadyPlaying: !0,
        caller: b,
        channelEntryPoint: e,
        channelID: f,
        landingPageType: g,
        onClick: h,
        reactionVideoChannelType: i,
        subOrigin: k,
        videoTahoeUrl: a,
      });
      return l === "disabled_for_premium_music_videos" &&
        c("gkx")("1584155") &&
        c("gkx")("1936225")
        ? b
        : j;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCometFeedStoryControls.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometSetWatchAndScrollVideoContext",
    "CometWatchAndScrollControlNUXContext",
    "VideoPlayerCometFeedStoryControls_video.graphql",
    "VideoPlayerCometWatchInjectionControl.react",
    "VideoPlayerHooks",
    "VideoPlayerNavigateToTahoeOrFullScreenControl.react",
    "cr:1875194",
    "deferredLoadComponent",
    "emptyFunction",
    "gkx",
    "react",
    "requireDeferred",
    "useIsCastingEnabled",
    "usePlayerOriginRouteTracePolicy",
    "useVideoPlayerBigPlayButtonOverlay",
    "useVideoPlayerDefaultClickInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo,
      l = e.useState,
      m = (e = b("cr:1875194")) != null ? e : c("emptyFunction"),
      n = c("deferredLoadComponent")(
        c("requireDeferred")(
          "VideoPlayerCometFeedStoryControlsImplLive.react"
        ).__setRef("VideoPlayerCometFeedStoryControls.react")
      ),
      o = c("deferredLoadComponent")(
        c("requireDeferred")(
          "VideoPlayerCometFeedStoryControlsImplNotLive.react"
        ).__setRef("VideoPlayerCometFeedStoryControls.react")
      );
    function a(a) {
      var e = a.disablePlaybackControls,
        f = a.isAdVideo,
        g = a.isCastControlDisabled,
        p = a.isVisible,
        q = a.isWatchAndScrollDisabled,
        r = a.onUserInteraction,
        s = a.reactionVideoChannelType,
        t = a.shouldEnableWatchInjection,
        u = a.shouldHideExpandControl,
        v = a.shouldHideRewindControls,
        w = a.shouldUnmute,
        x = a.subOrigin,
        y = a.video,
        z = a.videoTahoeUrl;
      a = a.videoWatchUrl;
      y = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerCometFeedStoryControls_video.graphql")),
        y
      );
      var A = m();
      A = A != null ? A.isSilentAtPlayhead : !1;
      var B = d("VideoPlayerHooks").useMuted(),
        C = d("VideoPlayerHooks").useIsLive(),
        D = c("useVideoPlayerDefaultClickInteraction")({
          reactionVideoChannelType: s,
          shouldUnmute: w,
          subOrigin: x,
          videoTahoeUrl: z,
        }),
        E = c("useIsCastingEnabled")();
      E = E && !g;
      g = c("usePlayerOriginRouteTracePolicy")();
      D = c("useVideoPlayerBigPlayButtonOverlay")({
        overrideInteraction: D,
        shouldUnmute: w,
      });
      var F = D.bigPlayButtonElement;
      D = D.bigPlayButtonIsVisible;
      p = p && !D;
      var G = j(c("CometSetWatchAndScrollVideoContext")),
        H = c("gkx")("3017");
      t =
        t === !0 && a !== null
          ? i.jsx(c("VideoPlayerCometWatchInjectionControl.react"), {
              onPress: function () {
                G(null);
              },
              routeTracePolicy: g,
              subOrigin: x,
              videoWatchUrl: a,
            })
          : i.jsx(c("VideoPlayerNavigateToTahoeOrFullScreenControl.react"), {
              isAdVideo: f,
              onPressTahoeControl: function () {
                H && G(null);
              },
              onUserInteraction: r,
              reactionVideoChannelType: s,
              shouldUnmute: w,
              subOrigin: x,
              videoTahoeUrl: z,
            });
      g = l(!1);
      var I = g[0],
        J = g[1];
      a = k(
        function () {
          return {
            isVideoPlayerWatchAndScrollControlNUXVisible: I,
            setIsVideoPlayerWatchAndScrollControlNUXVisible: J,
          };
        },
        [I]
      );
      g = I || B;
      B = (g || p || A) && !D;
      g = I || (p && !D);
      A = C
        ? i.jsx(n, {
            disablePlaybackControls: e,
            expandControl: u === !0 ? null : t,
            isAdVideo: f,
            isCastVisible: E,
            isControlsVisible: p,
            isExpandControlVisible: g,
            isVolumeControlVisible: B,
            isWatchAndScrollControlVisible: g,
            isWatchAndScrollDisabled: q,
            onUserInteraction: r,
            reactionVideoChannelType: s,
            shouldHideRewindControls: v,
            subOrigin: x,
            video: y,
            videoTahoeUrl: z,
          })
        : i.jsx(o, {
            disablePlaybackControls: e,
            expandControl: u === !0 ? null : t,
            isAdVideo: f,
            isCastVisible: E,
            isControlsVisible: p,
            isExpandControlVisible: g,
            isVolumeControlVisible: B,
            isWatchAndScrollControlVisible: g,
            isWatchAndScrollDisabled: q,
            onUserInteraction: r,
            reactionVideoChannelType: s,
            shouldUnmute: w,
            subOrigin: x,
            video: y,
            videoTahoeUrl: z,
          });
      return i.jsxs(i.Fragment, {
        children: [
          F,
          i.jsx(c("CometWatchAndScrollControlNUXContext").Provider, {
            value: a,
            children: i.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: A,
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
  "useNavigateToWatch",
  ["cr:1206952"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1206952");
  },
  98
);
__d(
  "useVideoPlayerClickToWatchInteraction",
  [
    "fbt",
    "CometAdPreviewContext",
    "CometProductTagFunnelIDContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "CometWarningScreenContext",
    "VideoPlayerHooks",
    "getAggregatedStoryTrackingNodeIndex",
    "qex",
    "react",
    "useCometPreloader",
    "useFeedClickEventHandler",
    "useNavigateToWatch",
    "usePlayerOriginRouteTracePolicy",
    "useVideoPlayerPortalingPassthroughProps",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = d("react");
    var i = b.useCallback,
      j = b.useContext;
    function a(a) {
      var b = a.allowInteractionWhenVideoIsNotAlreadyPlaying,
        e = a.caller,
        f = a.channelEntryPoint,
        g = a.channelID,
        k = a.onClick,
        l = a.playerOrigin,
        m = a.playerSuborigin,
        n = a.reactionVideoChannelType,
        o = a.subOrigin;
      a = a.videoWatchUrl;
      var p = d("CometAdPreviewContext").useCometAdPreviewContext(),
        q = j(c("CometTrackingCodeContext")),
        r = j(c("CometTrackingNodesContext")),
        s = j(c("CometProductTagFunnelIDContext")),
        t = d("CometWarningScreenContext").useIsOverlayShown(),
        u = d("CometWarningScreenContext").useHasOverlay();
      r = c("getAggregatedStoryTrackingNodeIndex")(r);
      var v = d("VideoPlayerHooks").useVideoPlayerInitialTracePolicy(),
        w = c("usePlayerOriginRouteTracePolicy")(),
        x = c("useVideoPlayerPortalingPassthroughProps")(),
        y = x.portableVideoID;
      x = x.positionToViewport;
      var z = c("qex")._("1932280");
      f = c("useNavigateToWatch")({
        href: a,
        passthroughProps: {
          bypassAutoplaySettings: !0,
          caller: e,
          channelEntryPoint: f,
          channelID: g,
          index: r,
          initialTracePolicy: (e = v) != null ? e : w,
          isARLTW: z,
          origOverlayShown: t,
          overlayExists: u,
          playerOrigin: l,
          playerSubOrigin: o,
          playerSuborigin: m,
          portableVideoID: y,
          portableVideoPositionToViewport: x,
          portalingRouteTracePolicy: w,
          portalingSubOrigin: o,
          productTagFunnelID: s,
          reactionVideoChannelType: n,
          trackingCode: q,
          unmute: !0,
        },
      });
      var A = f[0];
      g = f[1];
      r = f[2];
      v = f[3];
      e = i(
        function () {
          A(), k && k();
        },
        [A, k]
      );
      z = c("useFeedClickEventHandler")(e);
      t = d("VideoPlayerHooks").usePlaying();
      u = (b === !0 || t) && a != null;
      l = c("useCometPreloader")("button", g, r, v);
      m = l[0];
      y = l[1];
      x = l[2];
      return p
        ? null
        : u
        ? {
            ariaLabel: h._("Click to expand"),
            handler: z,
            onMouseEnter: m,
            onMouseLeave: y,
            onPressStart: x,
            overlayLabel: h._("Click to expand"),
          }
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedStoryVideoAttachmentVideoPressInteraction",
  [
    "CometProductTagFunnelIDContext",
    "JSResource",
    "VideoPlayerHooks",
    "promiseDone",
    "react",
    "requireDeferred",
    "useVideoPlayerClickToPauseInteraction",
    "useVideoPlayerClickToTahoeInteraction",
    "useVideoPlayerClickToWatchInteraction",
    "useVideoPlayerDefaultClickInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResource")("CometProductTagLoggingUtils").__setRef(
      "useCometFeedStoryVideoAttachmentVideoPressInteraction"
    );
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "useCometFeedStoryVideoAttachmentVideoPressInteraction"
      );
    function a(a) {
      var b;
      a = a === void 0 ? {} : a;
      var e = a.adID,
        f = a.channelEntryPoint,
        g = a.channelID,
        h = a.hasProductTags,
        k = a.logProductTagPostClickComponent,
        m = a.logProductTagPostClickReferralCodePrefix,
        n = a.logProductTagPostClickSurface,
        o = a.playerOrigin,
        p = a.playerSuborigin,
        q = a.positionInUnit,
        r = a.reactionVideoChannelType,
        s = a.shouldClickToPause;
      s = s === void 0 ? !1 : s;
      var t = a.shouldUnmute,
        u = a.subOrigin,
        v = a.videoChainingCaller,
        w = a.videoID,
        x = a.videoTahoeUrl;
      a = a.videoWatchUrl;
      var y = c("useVideoPlayerClickToPauseInteraction")();
      t = c("useVideoPlayerDefaultClickInteraction")({
        caller: v,
        channelEntryPoint: f,
        channelID: g,
        reactionVideoChannelType: r,
        shouldUnmute: t,
        subOrigin: u,
        videoTahoeUrl: x,
      });
      var z = j(c("CometProductTagFunnelIDContext")),
        A = a != null ? "watch_feed" : "tahoe",
        B = (b = a) != null ? b : x;
      b = i(
        function () {
          l(e, z, h, k, m, n, A, q, r, w, B);
        },
        [e, A, z, h, k, m, n, q, r, w, B]
      );
      x = c("useVideoPlayerClickToTahoeInteraction")({
        caller: v,
        channelEntryPoint: f,
        channelID: g,
        onClick: b,
        playerOrigin: o,
        playerSuborigin: p,
        reactionVideoChannelType: r,
        subOrigin: u,
        videoTahoeUrl: x,
      });
      v = c("useVideoPlayerClickToWatchInteraction")({
        caller: v,
        channelEntryPoint: f,
        channelID: g,
        onClick: b,
        playerOrigin: o,
        playerSuborigin: p,
        reactionVideoChannelType: r,
        subOrigin: u,
        videoWatchUrl: a,
      });
      f = d("VideoPlayerHooks").usePlaying();
      g = null;
      f
        ? s
          ? (g = y)
          : a != null && v != null
          ? (g = v)
          : x != null && (g = x)
        : (g = t);
      return g;
    }
    function l(a, b, d, e, f, g, i, j, l, m, n) {
      k.onReady(function (a) {
        a.log({
          event: "click",
          event_target: "video",
          event_target_id: m,
          event_target_info: n,
          event_target_sub_type: i,
          position_in_unit: j,
          section_video_channel_type: l,
        });
      }),
        d &&
          c("promiseDone")(
            h.load().then(function (c) {
              c = c.logProductTagPostClick;
              c(a, e, b, g, m, f + m);
            })
          );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometRouterNavigateToVideoPlayerWithPortaling",
  [
    "JSScheduler",
    "react",
    "unrecoverableViolation",
    "useCometRouterDispatcher",
    "useVideoPlayerPortalingPassthroughProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.startTransition,
      i = b.useCallback,
      j = b.useMemo,
      k = b.useRef;
    function a(a) {
      var b = a.href,
        e = a.passthroughProps,
        f = c("useVideoPlayerPortalingPassthroughProps")(),
        g = c("useCometRouterDispatcher")(),
        l = k(null),
        m = k(null),
        n = k(null),
        o = j(
          function () {
            return { passthroughProps: babelHelpers["extends"]({}, e, f) };
          },
          [e, f]
        );
      a = i(
        function () {
          if (b == null)
            throw c("unrecoverableViolation")(
              "Missing href",
              "comet_video_player"
            );
          if (g == null)
            throw c("unrecoverableViolation")(
              "Missing CometRouterDispatcher",
              "comet_video_player"
            );
          g.go(b, o);
        },
        [g, b, o]
      );
      var p = i(
          function () {
            b != null &&
              l.current !== b &&
              d("JSScheduler").scheduleSpeculativeCallback(function () {
                g != null && ((l.current = b), g.preloadRoute(b));
              });
          },
          [g, b]
        ),
        q = i(
          function () {
            g &&
              b != null &&
              m.current !== b &&
              ((m.current = b), (n.current = g.prefetchRouteQueries(b, o)));
          },
          [g, b, o]
        ),
        r = i(function () {
          if (n.current) {
            var a = n.current.cancel;
            h(a);
            n.current = null;
          }
        }, []);
      return [a, p, q, r];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometWatchAndScrollTriggerContextProvider",
  ["CometWatchAndScrollTriggerContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useState;
    function a(a) {
      a = a.children;
      var b = j(!1),
        d = b[0],
        e = b[1];
      b = j(!1);
      var f = b[0],
        g = b[1];
      b = i(
        function () {
          return {
            isControlShown: d,
            isTriggerDisabled: f,
            setIsControlShown: e,
            setIsTriggerDisabled: g,
          };
        },
        [d, f]
      );
      return h.jsx(c("CometWatchAndScrollTriggerContext").Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XAdsEducationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ads/about/",
      Object.freeze({ page_number: 0 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
