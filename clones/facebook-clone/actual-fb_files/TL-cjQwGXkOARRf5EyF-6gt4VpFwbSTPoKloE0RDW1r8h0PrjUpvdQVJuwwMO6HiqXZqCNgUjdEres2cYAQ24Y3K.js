if (self.CavalryLogger) {
  CavalryLogger.start_js(["WNl3G6Z"]);
}

__d(
  "CometVideoHomeHeroUnitLeftBottomSection_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          args: null,
          kind: "FragmentSpread",
          name: "CometTextWithEntitiesRelay_textWithEntities",
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometVideoHomeHeroUnitLeftBottomSection_video",
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
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: [a, b],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometVideoHomeFeedUnitUFISummaryAndActions_feedback",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "creation_story",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "debug_info",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "shareable",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometVideoHomeFeedUnitUFISummaryAndActions_shareable",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "message",
                plural: !1,
                selections: [b, a],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_status",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "owner_as_page",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "VideoOwner",
                abstractKey: "__isVideoOwner",
              },
            ],
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometVideoHomeHeroUnitPlayerSurface_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometVideoHomeHeroUnitPlayerSurface_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",
            },
          ],
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerCometFeedStoryControls_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerWithLiveVideoIndicator_video",
        },
        {
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "VideoPlayerWithVideoCardsOverlay_video",
            },
          ],
        },
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: ["CometProductTagFeedOverlayRenderer"],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_product_tag_feed_overlay_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometVideoHomeHeroUnitPlayerSurface_video",
                  fragmentName: "CometProductTagFeedOverlayRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometProductTagFeedOverlayRenderer",
              abstractKey: null,
            },
          ],
          storageKey:
            'comet_product_tag_feed_overlay_renderer(supported:["CometProductTagFeedOverlayRenderer"])',
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
  "CometVideoHomeHeroUnitPlayer_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometVideoHomeHeroUnitPlayer_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoBlurBackgroundContainer_video",
        },
        { args: null, kind: "FragmentSpread", name: "VideoPlayerRelay_video" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometVideoHomeHeroUnitPlayerSurface_video",
        },
        {
          alias: null,
          args: null,
          concreteType: "Video",
          kind: "LinkedField",
          name: "if_viewer_can_see_pay_to_access_paywall",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "CometVideoHomeHeroUnitPlayer_video",
              fragmentName: "CometPayToAccessPaywallConditionalLoader_video",
              fragmentPropName: "video",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
  "CometVideoHomeHeroUnitSidePane_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "skipFetchingChaining" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometVideoHomeHeroUnitSidePane_story",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "media",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometTahoeVideoContextSectionBody_video",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometTahoeVideoContextSectionHeader_video",
                    },
                    {
                      kind: "Defer",
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometTahoeUFIChainingSection_video",
                        },
                      ],
                    },
                    {
                      condition: "skipFetchingChaining",
                      kind: "Condition",
                      passingValue: !1,
                      selections: [
                        {
                          kind: "Defer",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "CometTahoeChainingTailLoadSection_video",
                            },
                          ],
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometTahoeChainingTailLoadSection_videoOwner",
                        },
                      ],
                    },
                  ],
                  type: "Video",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometVideoHomeHeroUnit_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometVideoHomeHeroUnit_story",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "media",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometVideoHomeHeroUnitPlayer_video",
                    },
                    {
                      kind: "Defer",
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometVideoHomeHeroUnitLeftBottomSection_video",
                        },
                      ],
                    },
                  ],
                  type: "Video",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometVideoHomeHeroUnitSidePane_story",
            },
          ],
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "XCometWatchSearchControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/watch/search/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useCometWatchSearchRouteUrlBuilder",
  [
    "Base64",
    "XCometWatchSearchControllerRouteBuilder",
    "react",
    "useSearchCometResultsCommonRouteParamBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.watchSerpType;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["watchSerpType"]);
      var d = c("useSearchCometResultsCommonRouteParamBuilder")(a);
      return h(
        function (a) {
          a = babelHelpers["extends"]({}, d.build(a));
          b != null &&
            (a.watch_config = c("Base64").encode(
              JSON.stringify({ watch_serp_type: b })
            ));
          return c("XCometWatchSearchControllerRouteBuilder").buildURL(a);
        },
        [d, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometWatchScopedTypeaheadDialogTrigger.react",
  [
    "fbt",
    "ix",
    "TetraCircleButton.react",
    "cometSearchEntityScopedTypeaheadDialogFallback",
    "fbicon",
    "react",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback;
    function a(a) {
      a = a.dialogEntryPoint;
      a = c("useCometEntryPointDialog")(
        a,
        Object.freeze({}),
        "button",
        c("cometSearchEntityScopedTypeaheadDialogFallback")
      );
      var b = a[0],
        e = a[1],
        f = a[2],
        g = a[3];
      a = a[4];
      var l = k(
        function () {
          b({});
        },
        [b]
      );
      return j.jsx(c("TetraCircleButton.react"), {
        icon: d("fbicon")._(i("491283"), 20),
        label: h._("Search"),
        onHoverIn: f,
        onHoverOut: g,
        onPress: l,
        onPressIn: a,
        ref: e,
        size: 36,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "cometWatchScopedTypeahead.config",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      dataSources: {
        keywordDataSourceParams: {
          queryVariables: {
            fetch_count: 8,
            fetch_mode: "video_home_search_keyword_only",
          },
        },
      },
      logging: { sessionContext: "WATCH_SCOPED" },
      view: { renderLimit: 8 },
    };
    f["default"] = a;
  },
  66
);
__d(
  "CometWatchScopedTypeahead.react",
  [
    "fbt",
    "BaseTypeahead.react",
    "CometErrorBoundary.react",
    "CometSearchScopedTypeaheadInputStrategy.react",
    "CometSearchScopedTypeaheadStyles",
    "CometSearchTypeaheadBaseViewRecentEmptyState.react",
    "CometTypeaheadErrorFallback.react",
    "CometTypeaheadLayoutContextualStrategy.react",
    "CometWatchScopedTypeaheadViewItem.react",
    "cometWatchScopedTypeahead.config",
    "react",
    "useCometSearchRecentDataSourceContextDecorator",
    "useCometSearchRoutingQueryString",
    "useCometSearchScopedTypeaheadDataSource",
    "useCometSearchScopedTypeaheadPressEntryHandler",
    "useCometSearchScopedTypeaheadSelectFreeformQueryHandler",
    "useCometSearchTypeaheadLoggingProvider",
    "useCometTypeaheadStateQueryString",
    "useCometTypeaheadViewListStrategy",
    "useCometWatchSearchRouteUrlBuilder",
    "useSearchCometRecentSearchDataSource",
    "useStable",
    "withSearchCometTypeaheadBaseNavigationDecorator",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo,
      k = {
        inputBackground: { backgroundColor: "tdjehn4e" },
        paddingHorizontal: { paddingEnd: "hv4rvrfc", paddingStart: "dati1w0a" },
        typeaheadViewAllRoundedCorner: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
        },
      },
      l = h._("Search videos");
    function a(a) {
      var b = a.isInWebwashBackground;
      b = b === void 0 ? !1 : b;
      var e = a.placeholder;
      e = e === void 0 ? l : e;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "isInWebwashBackground",
        "placeholder",
      ]);
      var f = c("useCometWatchSearchRouteUrlBuilder")({
          entryPointSurface: a.entryPointSurface,
          watchSerpType: 1,
        }),
        g = c("useCometSearchTypeaheadLoggingProvider")({
          context: "watch_scoped",
        }),
        m = c("useCometTypeaheadStateQueryString")(
          c("useCometSearchRoutingQueryString")()
        ),
        n = m[0];
      m = m[1];
      var o = c("useCometSearchScopedTypeaheadDataSource")({
          config: c("cometWatchScopedTypeahead.config"),
          recentDataSource: c("useSearchCometRecentSearchDataSource")({
            filter: "video_search",
          }),
        }),
        p = c("useCometSearchRecentDataSourceContextDecorator")(o),
        q = j(
          function () {
            return [p];
          },
          [p]
        ),
        r = c("useCometSearchScopedTypeaheadPressEntryHandler")({
          loggingProvider: g,
          urlBuilder: f,
        });
      f = c("useCometSearchScopedTypeaheadSelectFreeformQueryHandler")({
        loggingProvider: g,
        urlBuilder: f,
      });
      var s = c("useCometTypeaheadViewListStrategy")({
          emptyStateContent: i.jsx(
            c("CometSearchTypeaheadBaseViewRecentEmptyState.react"),
            {}
          ),
          viewItemStrategyRenderer: c(
            "CometWatchScopedTypeaheadViewItem.react"
          ),
          viewXStyle: [
            d("CometSearchScopedTypeaheadStyles").typeaheadView,
            b && k.typeaheadViewAllRoundedCorner,
          ],
        }),
        t = {
          inputXStyle: [
            d("CometSearchScopedTypeaheadStyles").typeaheadInput,
            k.paddingHorizontal,
          ],
        },
        u = c("useStable")(function () {
          return c("withSearchCometTypeaheadBaseNavigationDecorator")(
            c("BaseTypeahead.react")
          );
        });
      return i.jsx(c("CometErrorBoundary.react"), {
        fallback: function () {
          return i.jsx(c("CometTypeaheadErrorFallback.react"), {});
        },
        children: i.jsx(u, {
          dataSource: o,
          decorators: q,
          inputExtraProps: b ? { xstyle: k.inputBackground } : {},
          inputStrategyRenderer: c(
            "CometSearchScopedTypeaheadInputStrategy.react"
          ),
          label: h._("Search videos"),
          layoutStrategyRenderer: c(
            "CometTypeaheadLayoutContextualStrategy.react"
          ),
          loggingProvider: g,
          onChange: m,
          onPressEntry:
            (u = a == null ? void 0 : a.onPressEntry) != null ? u : r,
          onSelectFreeformQuery:
            (o = a == null ? void 0 : a.onSelectFreeformQuery) != null ? o : f,
          placeholder: e,
          queryString: n,
          testid: void 0,
          viewStrategyRenderer: s,
          xstyles: t,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWithVideoHomeWatchAndScrollTrigger.react",
  [
    "CometVideoHomeWatchAndScrollTriggerContext",
    "VideoPlayerHooks",
    "VideoPlayerLoggingSuboriginContext",
    "react",
    "usePlayerOriginRouteTracePolicy",
    "useVideoPlayerControllerSubscription",
    "useVideoPlayerPortalingPassthroughProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useContext,
      i = b.useEffect;
    function a() {
      var a = h(c("CometVideoHomeWatchAndScrollTriggerContext")),
        b = a.setIsTriggerVideoEligible,
        e = a.setWatchAndScrollTriggerVideo,
        f = d("VideoPlayerHooks").usePaused(),
        g = d("VideoPlayerHooks").useController();
      a = c("useVideoPlayerPortalingPassthroughProps")();
      var j = a.portableVideoID,
        k = a.portalingPlaceID,
        l = c("usePlayerOriginRouteTracePolicy")(),
        m = h(c("VideoPlayerLoggingSuboriginContext")),
        n = d("VideoPlayerHooks").useVideoFbid();
      i(
        function () {
          f === !1 &&
            j != null &&
            k != null &&
            m != null &&
            e({
              controller: g,
              portableVideoID: j,
              portalingPlaceID: k,
              routeTracePolicy: l,
              subOrigin: m,
              videoID: n,
            });
        },
        [g, f, j, k, l, e, m, n]
      );
      a = c("useVideoPlayerControllerSubscription")(function (a, b) {
        var c = a.getPlayheadPosition();
        a = a.getCurrentState();
        var d = a.muted;
        a = a.playing;
        a = a && (c > 5 || !d);
        return b != null && b.isEligible === a ? b : { isEligible: a };
      });
      var o = a.isEligible;
      i(
        function () {
          j != null && b(j, o);
        },
        [o, j, b]
      );
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeHeroUnitPlayer.react",
  [
    "CometRelay",
    "CometSetWatchAndScrollVideoContext",
    "CometVideoHomeHeroUnitPlayer_video.graphql",
    "CometVideoHomePortalingPlaceholder.react",
    "CometWatchAndScrollTriggerContextProvider",
    "CometWatchAndScrollVideoContext",
    "VideoBlurBackgroundContainer.react",
    "VideoHomeLoggingExternalLogIDContext",
    "VideoPlayerLoggingSuboriginContext",
    "VideoPlayerRelay.react",
    "deferredLoadComponent",
    "gkx",
    "react",
    "requireDeferredForDisplay",
    "unrecoverableViolation",
    "useFeedUnitAutoplayOverride",
    "useInjectionPortalingFromVideoIDCloseWatchAndScroll",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometVideoHomeHeroUnitPlayerSurface.react"
        ).__setRef("CometVideoHomeHeroUnitPlayer.react")
      );
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometVideoHomeHeroUnitPlayer_video.graphql")),
          a.video
        ),
        f = j(c("VideoHomeLoggingExternalLogIDContext")),
        g = j(c("VideoPlayerLoggingSuboriginContext")),
        l = c("useInjectionPortalingFromVideoIDCloseWatchAndScroll")(),
        m = j(c("CometSetWatchAndScrollVideoContext")),
        n = j(c("CometWatchAndScrollVideoContext")),
        o = c("useFeedUnitAutoplayOverride")(e.id);
      o =
        c("gkx")("2889") && o
          ? "do_not_autoplay"
          : "dangerously_always_autoplay";
      if (e == null) return null;
      if (g == null)
        throw c("unrecoverableViolation")(
          "Missing or empty subOrigin. Did you forget the VideoHomeLoggingSuboriginContext provider or the value in it?",
          "watch_www_bug_rotation"
        );
      var p = e == null ? void 0 : e.if_viewer_can_see_pay_to_access_paywall;
      o = i.jsx(c("VideoPlayerRelay.react"), {
        canAutoplay: o,
        externalLogID: f,
        initialForceHD: !0,
        portalingEnabled: !0,
        portalingFromVideoID: l,
        portalingPlaceMetaData: { placeDescription: "watch_feed" },
        portalingRenderPlaceholder: function () {
          return i.jsx(c("CometVideoHomePortalingPlaceholder.react"), {
            onPressWatchAndScrollPlaceholder: function () {
              m(null);
            },
            watchAndScrollVideo: n,
          });
        },
        startTimestamp: a.startTimestamp,
        subOrigin: g,
        video: e,
        children: i.jsx(k, { positionInUnit: -1, subOrigin: g, video: e }),
      });
      return i.jsx("div", {
        className: "k4urcfbm l9j0dhe7 datstx6m tqsryivl",
        children:
          p != null
            ? i.jsx(d("CometRelay").MatchContainer, { match: p })
            : i.jsx(c("CometWatchAndScrollTriggerContextProvider"), {
                children: i.jsx(c("VideoBlurBackgroundContainer.react"), {
                  lightBackgroundInLightMode: !0,
                  video: e,
                  children: o,
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
  "CometVideoHomeHeroUnit.react",
  [
    "CometErrorBoundary.react",
    "CometPagelet.react",
    "CometRelay",
    "CometSetWatchAndScrollVideoContext",
    "CometTahoeUFIContext",
    "CometVideoHomeHeroUnitPlayer.react",
    "CometVideoHomeHeroUnit_story.graphql",
    "CometVideoHomeNewPermalinkConstans",
    "deferredLoadComponent",
    "gkx",
    "qex",
    "react",
    "requireDeferredForDisplay",
    "stylex",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useRef,
      m = e.useState,
      n = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometVideoHomeHeroUnitLeftBottomSection.react"
        ).__setRef("CometVideoHomeHeroUnit.react")
      ),
      o = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometVideoHomeHeroUnitSidePane.react"
        ).__setRef("CometVideoHomeHeroUnit.react")
      ),
      p = {
        content: { display: "j83agx80", width: "k4urcfbm" },
        contentInNewGrid: {
          marginEnd: "ad2k81qe",
          marginStart: "f9o22wc5",
          width: "iq01arzp",
        },
        left: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
        player: {
          flexGrow: "buofh1pr",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        root: {
          backgroundColor: "cwj9ozl2",
          display: "j83agx80",
          height: "datstx6m",
        },
      };
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("CometVideoHomeHeroUnit_story.graphql")),
          a.story
        );
      e =
        f == null
          ? void 0
          : (e = f.attachments) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : e.media;
      var g = k(c("CometSetWatchAndScrollVideoContext")),
        q = j(
          function () {
            g(null);
          },
          [g]
        );
      q = c("useVisibilityObserver")({ onVisible: q });
      var r = c("gkx")("976093"),
        s =
          (c("gkx")("1250838") && !!c("qex")._("267")) ||
          (c("gkx")("976093") && !r),
        t = m(
          s || r
            ? d("CometTahoeUFIContext").TahoeCommentComposerConfigEnum
                .COMPOSER_AND_ALL_COMMENTS
            : d("CometTahoeUFIContext").TahoeCommentComposerConfigEnum
                .COMPOSER_ONLY
        ),
        u = t[0],
        v = t[1],
        w = l(null);
      t = j(function (a) {
        v(
          d("CometTahoeUFIContext").TahoeCommentComposerConfigEnum
            .COMPOSER_AND_ALL_COMMENTS
        );
        var b = w.current;
        b != null &&
          (b.Actions.expandList({ focusComposer: !0, scrollToComposer: !0 }),
          a.type !== "press" && a.preventDefault());
      }, []);
      function x() {
        u ===
        d("CometTahoeUFIContext").TahoeCommentComposerConfigEnum
          .COMPOSER_AND_ALL_COMMENTS
          ? v(
              d("CometTahoeUFIContext").TahoeCommentComposerConfigEnum
                .COMPOSER_ONLY
            )
          : v(
              d("CometTahoeUFIContext").TahoeCommentComposerConfigEnum
                .COMPOSER_AND_ALL_COMMENTS
            );
      }
      if (e == null) return null;
      var y = 46,
        z = 49,
        A =
          d("CometVideoHomeNewPermalinkConstans").MAX_UNIT_HEIGHT_IN_NEW_GRID -
          y -
          z;
      y =
        d("CometVideoHomeNewPermalinkConstans").FB_TOP_NAV_HEIGHT +
        d("CometVideoHomeNewPermalinkConstans").WATCH_TOP_NAV_HEIGHT +
        y +
        z +
        d("CometVideoHomeNewPermalinkConstans").BOTTOM_GAP_HEIGHT;
      z = {
        maxWidth: "calc(100vw - 400px)",
        width:
          "calc(min((100vh - " + y + "px) / 9 * 16, " + A + "px / 9 * 16))",
      };
      return i.jsx(c("CometErrorBoundary.react"), {
        children: i.jsx("div", {
          className: c("stylex")(p.root),
          ref: q,
          children: i.jsxs("div", {
            className: c("stylex")(p.content, p.contentInNewGrid),
            children: [
              i.jsxs("div", {
                className: c("stylex")(
                  p.left,
                  d("CometVideoHomeNewPermalinkConstans").leftPaneInNewGrid
                ),
                style: z,
                children: [
                  i.jsx(d("CometPagelet.react").Placeholder, {
                    className: c("stylex")(p.player),
                    fallback: null,
                    name: "WatchPermalinkVideo",
                    pageletType: "media",
                    children: i.jsx(c("CometVideoHomeHeroUnitPlayer.react"), {
                      startTimestamp: a.startTimestamp,
                      video: e,
                    }),
                  }),
                  i.jsx(n, {
                    onCommentClick: !s && !r ? t : function () {},
                    toggleCommentComposerConfiguration:
                      !s && !r ? x : function () {},
                    video: e,
                  }),
                ],
              }),
              i.jsx(o, {
                commentComposerConfig: u,
                commentListRef: w,
                hideUpNextVideos: s,
                onCommentClick: !s && !r ? t : function () {},
                story: f,
                toggleCommentComposerConfiguration:
                  !s && !r ? x : function () {},
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
  "CometVideoHomeHeroUnitLeftBottomSection.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "CometVideoHomeFeedUnitUFISummaryAndActions.react",
    "CometVideoHomeHeroUnitLeftBottomSection_video.graphql",
    "CometVideoHomeVideoContextMenu.react",
    "TetraButton.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a) {
      var e,
        f,
        g,
        l,
        m = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("CometVideoHomeHeroUnitLeftBottomSection_video.graphql")),
          a.video
        ),
        n = m == null ? void 0 : m.creation_story,
        o = m == null ? void 0 : m.feedback;
      e = (e = n == null ? void 0 : n.shareable) != null ? e : null;
      var p = m.id,
        q = m.title,
        r = q == null ? void 0 : q.text;
      f = (f = m.creation_story) == null ? void 0 : f.message;
      g =
        (g = m.creation_story) == null
          ? void 0
          : (g = g.message) == null
          ? void 0
          : g.text;
      l =
        (l = m.owner) == null
          ? void 0
          : (l = l.owner_as_page) == null
          ? void 0
          : l.name;
      m = m.live_status;
      r = q != null && r != null && r !== "";
      g = f != null && g != null && g !== "";
      m =
        m === "IS_LIVE"
          ? h._("{owner name} is live", [h._param("owner name", l)])
          : m === "WAS_LIVE"
          ? h._("{owner name} was live", [h._param("owner name", l)])
          : null;
      return k.jsxs("div", {
        className: "k4urcfbm mt3fbsrg cbu4d94t j83agx80 cwj9ozl2 o8rfisnq",
        children: [
          k.jsxs("div", {
            className: "i1fnvgqd j83agx80",
            children: [
              k.jsx("div", {
                className:
                  "ihqw7lf3 discj3wi tw6a2znq d1544ag0 stjgntxs ni8dbmo4 cwj9ozl2",
                children: k.jsx(c("TetraTextPairing.react"), {
                  headline:
                    q && r
                      ? k.jsx(c("CometTextWithEntitiesRelay.react"), {
                          textWithEntities: q,
                        })
                      : f && g
                      ? k.jsx(c("CometTextWithEntitiesRelay.react"), {
                          textWithEntities: f,
                        })
                      : m,
                  headlineLineLimit: !r && g ? 2 : 1,
                  level: 2,
                }),
              }),
              k.jsx("div", {
                className: "tw6a2znq d1544ag0 j83agx80 bp9cbjyn",
                children: k.jsx(c("CometVideoHomeVideoContextMenu.react"), {
                  button: function (a, b) {
                    return k.jsx(c("TetraButton.react"), {
                      icon: d("fbicon")._(i("484389"), 16),
                      label: h._("More"),
                      labelIsHidden: !0,
                      onPress: b,
                      ref: a,
                      type: "secondary",
                    });
                  },
                  storyDebugInfo: n == null ? void 0 : n.debug_info,
                  videoChannelType: "video_home_feed_www",
                  videoID: p,
                  videoMenuLocation: "VIDEO_HOME_VIDEO_STORY",
                }),
              }),
            ],
          }),
          o != null
            ? k.jsx("div", {
                className: "sj5x9vvc cxgpxx05 ozuftl9m tvfksri0 l6v480f0",
                children: k.jsx(
                  c("CometVideoHomeFeedUnitUFISummaryAndActions.react"),
                  {
                    feedLocation: "VIDEO_PERMALINK",
                    feedback: o,
                    feedbackSource: 60,
                    onClickCommentsCount: a.toggleCommentComposerConfiguration,
                    onCommentClick: a.onCommentClick,
                    shareable: (l = e) != null ? l : null,
                  }
                ),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeHeroUnitPlayerSurface.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometUFIVideoPlayerUtils",
    "CometVideoHomeFeedUnitPositionContext",
    "CometVideoHomeHeroUnitPlayerSurface_video.graphql",
    "TahoeTypedLogger",
    "VideoHomeLoggingReactionVideoChannelTypeContext",
    "VideoPlayerCometFeedStoryControls.react",
    "VideoPlayerHooks",
    "VideoPlayerInteractionHintOverlay.react",
    "VideoPlayerInteractionOverlay.react",
    "VideoPlayerSurface.react",
    "VideoPlayerWithAutoCenterOnUserInitiatedPlay.react",
    "VideoPlayerWithLiveVideoIndicator.react",
    "VideoPlayerWithPermalinkShareID.react",
    "VideoPlayerWithVideoHomeAutoAdvance.react",
    "VideoPlayerWithVideoHomeFunnelLogging.react",
    "VideoPlayerWithVideoHomeLogging.react",
    "VideoPlayerWithVideoHomeWatchAndScrollTrigger.react",
    "cr:1613918",
    "deferredLoadComponent",
    "gkx",
    "qex",
    "react",
    "requireDeferred",
    "unrecoverableViolation",
    "useCometFeedStoryVideoAttachmentVideoPressInteraction",
    "usePlayerOriginRouteTracePolicy",
    "useVideoPlayerCometTahoeMouseInteractions",
    "useVideoPlayerDefaultControlsVisibility",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect,
      l = e.useMemo,
      m = c("deferredLoadComponent")(
        c("requireDeferred")(
          "CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader.react"
        ).__setRef("CometVideoHomeHeroUnitPlayerSurface.react")
      ),
      n = c("deferredLoadComponent")(
        c("requireDeferred")("VideoPlayerWithVideoCardsOverlay.react").__setRef(
          "CometVideoHomeHeroUnitPlayerSurface.react"
        )
      );
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometVideoHomeHeroUnitPlayerSurface_video.graphql")),
          a.video
        ),
        f = a.positionInUnit,
        g = a.subOrigin;
      a = j(c("VideoHomeLoggingReactionVideoChannelTypeContext"));
      var o = e.id;
      if (o == null)
        throw c("unrecoverableViolation")(
          "Video ID cannot be null",
          "watch_www_bug_rotation"
        );
      var p = null,
        q = e.comet_product_tag_feed_overlay_renderer != null;
      q = c("useCometFeedStoryVideoAttachmentVideoPressInteraction")({
        adID: null,
        hasProductTags: q,
        logProductTagPostClickComponent: "CometVideoHomeHeroUnit",
        logProductTagPostClickReferralCodePrefix: "product_tag_on_video_home_",
        logProductTagPostClickSurface: "video_home",
        positionInUnit: f,
        reactionVideoChannelType: a,
        shouldClickToPause: !0,
        subOrigin: g,
        videoChainingCaller: "CHANNEL_VIEW_FROM_VIDEO_HOME",
        videoID: o,
        videoTahoeUrl: p,
      });
      var r = c("useVideoPlayerDefaultControlsVisibility")(),
        s = r.isControlsVisible;
      r = r.onUserInteraction;
      var t = l(
          function () {
            return { subOrigin: g, videoTahoeUrl: p };
          },
          [g, p]
        ),
        u = d("VideoPlayerHooks").useController(),
        v = j(c("CometVideoHomeFeedUnitPositionContext"));
      k(
        function () {
          u.setAdditionalLogData("feed_position", v);
        },
        [v, u]
      );
      var w = c("usePlayerOriginRouteTracePolicy")(),
        x = c("useVideoPlayerCometTahoeMouseInteractions")(),
        y = function (a) {
          new (c("TahoeTypedLogger"))().setEvent(a).setMediaID(o).log();
        },
        z =
          (c("gkx")("1250838") && !!c("qex")._("1860135")) ||
          c("gkx")("976093");
      return i.jsxs(c("VideoPlayerSurface.react"), {
        children: [
          i.jsx(c("VideoPlayerCometFeedStoryControls.react"), {
            isAdVideo: !1,
            isVisible: s,
            onUserInteraction: r,
            reactionVideoChannelType: a,
            subOrigin: g,
            video: e,
            videoTahoeUrl: p,
          }),
          i.jsx(
            d("CometUFIVideoPlayerUtils")
              .CometUFIVideoPlayerStateAndControllerExtractor,
            { data: t }
          ),
          i.jsx(c("VideoPlayerInteractionHintOverlay.react"), {
            interaction: q,
            isVisible: s,
          }),
          i.jsx(
            d("VideoPlayerInteractionOverlay.react")
              .VideoPlayerInteractionOverlay,
            { pressInteraction: q }
          ),
          i.jsx(c("VideoPlayerWithAutoCenterOnUserInitiatedPlay.react"), {}),
          i.jsx(c("VideoPlayerWithLiveVideoIndicator.react"), {
            hasCometNavOverlay: !1,
            video: e,
          }),
          i.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: i.jsx(n, { surface: "COMET_HERO", video: e }),
          }),
          z ? null : i.jsx(c("VideoPlayerWithVideoHomeAutoAdvance.react"), {}),
          i.jsx(c("VideoPlayerWithVideoHomeFunnelLogging.react"), {
            positionInFeed: f,
          }),
          b("cr:1613918") ? i.jsx(b("cr:1613918"), {}) : null,
          i.jsx(c("VideoPlayerWithVideoHomeLogging.react"), {
            reactionVideoChannelType: a,
          }),
          !!c("qex")._("1785180") &&
            i.jsx(c("VideoPlayerWithVideoHomeWatchAndScrollTrigger.react"), {}),
          i.jsx(c("VideoPlayerWithPermalinkShareID.react"), {}),
          i.jsx(d("CometRelay").MatchContainer, {
            match: e.comet_product_tag_feed_overlay_renderer,
            props: { areControlsVisible: s, referralSurface: "video_home" },
          }),
          z
            ? i.jsx(c("CometPlaceholder.react"), {
                fallback: null,
                children: i.jsx(
                  m,
                  {
                    initialTracePolicy: w,
                    logTahoeEvent: y,
                    openNextVideoInPermalink: !0,
                    pressInteraction: x,
                    reactionVideoChannelType: a,
                    subOrigin: g,
                    video$key: e,
                    videoID: o,
                  },
                  o
                ),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeHeroUnitSidePane.react",
  [
    "fbt",
    "Actor",
    "CometPlaceholder.react",
    "CometRelay",
    "CometTahoeSidePaneGlimmer.react",
    "CometTahoeUFIChainingSection.react",
    "CometTahoeVideoContextSectionBody.react",
    "CometTahoeVideoContextSectionHeader.react",
    "CometVideoHomeHeroUnitSidePane_story.graphql",
    "CometVideoHomeNewPermalinkConstans",
    "cr:11413",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").startTransition,
      l = {
        contextSection: {
          paddingEnd: "hv4rvrfc",
          paddingStart: "dati1w0a",
          paddingTop: "discj3wi",
        },
        root: {
          backgroundColor: "cwj9ozl2",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexShrink: "pfnyh3mw",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        rootScrollable: { overflowX: "d76ob5m9", overflowY: "eg9m0zos" },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometVideoHomeHeroUnitSidePane_story.graphql")),
          a.story
        ),
        f = d("Actor").useActor(),
        g = f[1];
      f = function (a) {
        k(function () {
          return g(a);
        });
      };
      e =
        (e = e.attachments) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : e.media;
      if (e == null) return null;
      var m = 46,
        n = 49,
        o =
          d("CometVideoHomeNewPermalinkConstans").MAX_UNIT_HEIGHT_IN_NEW_GRID -
          m -
          n;
      m =
        d("CometVideoHomeNewPermalinkConstans").FB_TOP_NAV_HEIGHT +
        d("CometVideoHomeNewPermalinkConstans").WATCH_TOP_NAV_HEIGHT +
        m +
        n +
        d("CometVideoHomeNewPermalinkConstans").BOTTOM_GAP_HEIGHT;
      n = {
        width:
          "calc(100vw - min((100vh - " +
          m +
          "px) / 9 * 16, " +
          o +
          "px / 9 * 16))",
      };
      return j.jsx("div", {
        className: c("stylex")(
          l.root,
          d("CometVideoHomeNewPermalinkConstans").rightPaneAdjustableWidth,
          l.rootScrollable,
          d("CometVideoHomeNewPermalinkConstans").rightPaneInNewGrid
        ),
        style: n,
        children: j.jsxs(c("CometPlaceholder.react"), {
          fallback: j.jsx(c("CometTahoeSidePaneGlimmer.react"), {}),
          children: [
            j.jsxs("div", {
              className: c("stylex")(l.contextSection),
              children: [
                j.jsx(c("CometTahoeVideoContextSectionHeader.react"), {
                  expandFollowButton: !0,
                  hideThreeDot: !0,
                  video: e,
                }),
                j.jsx(c("CometTahoeVideoContextSectionBody.react"), {
                  hideTitle: !0,
                  video: e,
                }),
              ],
            }),
            j.jsx(c("CometTahoeUFIChainingSection.react"), {
              chainingVideosComponent: j.jsx("div", {
                children:
                  b("cr:11413") != null
                    ? j.jsx(b("cr:11413"), {
                        chainingItemOpenInTahoe: !1,
                        headerTextOverride: h._("Suggested"),
                        video: e,
                        videoOwner: e,
                      })
                    : null,
              }),
              commentComposerConfig: a.commentComposerConfig,
              commentListRef: a.commentListRef,
              hideCommentsRowWhenNotExpanded: !0,
              hideUFI: !0,
              hideUpNextVideos: a.hideUpNextVideos === !0,
              onActorSelected: f,
              onCommentClick: a.onCommentClick,
              setShowCommentsSpeakers: function () {},
              toggleCommentComposerConfiguration:
                a.toggleCommentComposerConfiguration,
              video: e,
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
  "LeftRight.react",
  ["cx", "invariant", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.getChildrenArr = function () {
        var a = [];
        j.Children.forEach(this.props.children, function (b) {
          return a.push(b);
        });
        return a;
      };
      d.render = function () {
        var a = this.getChildrenArr();
        a.length === 1 || a.length === 2 || i(0, 5615);
        var d = this.props.direction || b.DIRECTION.both,
          e = d === b.DIRECTION.both,
          f = e || d === b.DIRECTION.left ? "_ohe lfloat" : "";
        e = e || d === b.DIRECTION.right ? "_ohf rfloat" : "";
        f = j.jsx("div", { className: f, children: a[0] }, "left");
        e =
          a.length < 2
            ? null
            : j.jsx("div", { className: e, children: a[1] }, "right");
        a = d === b.DIRECTION.right && e ? [e, f] : [f, e];
        d = this.props;
        f = d.root;
        e = babelHelpers.objectWithoutPropertiesLoose(d, ["root"]);
        return j.jsx(
          "div",
          babelHelpers["extends"]({}, e, {
            ref: f,
            className: c("joinClasses")(this.props.className, "clearfix"),
            children: a,
          })
        );
      };
      return b;
    })(j.Component);
    a.DIRECTION = { left: "left", right: "right", both: "both" };
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialogTitle.react",
  [
    "cx",
    "fbt",
    "LeftRight.react",
    "XUICloseButton.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = null,
          b = this.props,
          d = b.closeButtonText,
          e = b.showCloseButton,
          f = b.closeButtonSize,
          g = b.closeButtonClassName;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "closeButtonText",
          "showCloseButton",
          "closeButtonSize",
          "closeButtonClassName",
        ]);
        e &&
          (a = j.jsx(c("XUICloseButton.react"), {
            size: f,
            "data-testid": void 0,
            label: d,
            className: c("joinClasses")(g, "layerCancel _51-t _9l15"),
            onClick: this.props.onCloseClick,
          }));
        f = j.Children.toArray(this.props.children);
        return j.jsx(
          "div",
          babelHelpers["extends"]({}, b, {
            className: c("joinClasses")(
              this.props.className,
              "_4-i0 _9l16" + (e ? " _2gb3" : "")
            ),
            children: j.jsxs(c("LeftRight.react"), {
              children: [
                j.jsx("h3", {
                  className: "_52c9 _9l17",
                  "data-hover": "tooltip",
                  "data-tooltip-display": "overflow",
                  children: f[0],
                }),
                j.jsxs("div", {
                  className: "_51-u",
                  children: [f.slice(1), a],
                }),
              ],
            }),
          })
        );
      };
      return b;
    })(j.Component);
    a.defaultProps = {
      closeButtonText: i._("Close"),
      showCloseButton: !0,
      closeButtonSize: "medium",
    };
    g["default"] = a;
  },
  98
);
__d(
  "ScrollAwareDOM",
  [
    "ArbiterMixin",
    "CSS",
    "DOM",
    "DOMDimensions",
    "HTML",
    "Vector",
    "ViewportBounds",
    "getDocumentScrollElement",
    "getElementPosition",
    "getViewportDimensions",
    "isAsyncScrollQuery",
    "isNode",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      return function () {
        var c = arguments;
        k.monitor(arguments[a], function () {
          b.apply(null, c);
        });
      };
    }
    function h(a) {
      a instanceof Array || (a = [a]);
      for (var b = 0; b < a.length; b++) {
        var d = c("HTML").replaceJSONWrapper(a[b]);
        if (d instanceof c("HTML")) return d.getRootNode();
        else if (c("isNode")(d)) return d;
      }
      return null;
    }
    function i(a) {
      return c("getElementPosition")(a).y > c("ViewportBounds").getTop();
    }
    function j(a) {
      a =
        c("getElementPosition")(a).y +
        d("DOMDimensions").getElementDimensions(a).height;
      var b =
        c("getViewportDimensions")().height - c("ViewportBounds").getBottom();
      return a >= b;
    }
    var k = babelHelpers["extends"](
      {
        monitor: function (a, b) {
          if (c("isAsyncScrollQuery")()) return b();
          a = h(a);
          if (a) {
            var d = !!a.offsetParent;
            if (d && (i(a) || j(a))) return b();
            var e = c("Vector").getDocumentDimensions(),
              f = b();
            if (d || (a.offsetParent && !i(a))) {
              d = c("Vector").getDocumentDimensions().sub(e);
              e = { delta: d, target: a };
              k.inform("scroll", e) !== !1 &&
                d.scrollElementBy(c("getDocumentScrollElement")());
            }
            return f;
          } else return b();
        },
        replace: function (a, b) {
          var e = h(b);
          (!e || d("CSS").hasClass(e, "hidden_elem")) && (e = a);
          return k.monitor(e, function () {
            c("DOM").replace(a, b);
          });
        },
        prependContent: a(1, c("DOM").prependContent),
        insertAfter: a(1, c("DOM").insertAfter),
        insertBefore: a(1, c("DOM").insertBefore),
        setContent: a(0, c("DOM").setContent),
        appendContent: a(1, c("DOM").appendContent),
        remove: a(0, c("DOM").remove),
        empty: a(0, c("DOM").empty),
      },
      d("ArbiterMixin")
    );
    b = k;
    g["default"] = b;
  },
  98
);
__d(
  "Toggler",
  [
    "csx",
    "invariant",
    "$",
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "Focus",
    "Keys",
    "Parent",
    "TabbableElements",
    "TimeSlice",
    "createArrayFromMixed",
    "emptyFunction",
    "ge",
    "getContextualParent",
    "getObjectValues",
    "killswitch",
    "mixin",
    "queryThenMutateDOM",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = [],
      k,
      l = !1;
    function m() {
      l ||
        ((l = !0),
        c("setImmediate")(function () {
          l = !1;
        }));
    }
    var n = function () {
        (n = c("emptyFunction")),
          c("Event").listen(
            document.documentElement,
            "click",
            function (a) {
              if (l) return;
              var b = a.getTarget();
              j.forEach(function (a) {
                (a.clickedTarget = b),
                  a.active &&
                    !a.sticky &&
                    !d("ContextualThing").containsIncludingLayers(
                      a.getActive(),
                      b
                    ) &&
                    !a.inTargetFlyout(b) &&
                    a.inActiveDialog() &&
                    !a.isIgnoredByModalLayer(b) &&
                    a.hide();
              });
            },
            c("Event").Priority.URGENT
          );
      },
      o = (function (e) {
        babelHelpers.inheritsLoose(b, e);
        function b() {
          var a;
          a = e.call(this) || this;
          a.active = null;
          a.togglers = {};
          a.setSticky(!1);
          j.push(babelHelpers.assertThisInitialized(a));
          a.subscribe(["show", "hide"], b.inform.bind(b));
          return n() || babelHelpers.assertThisInitialized(a);
        }
        var f = b.prototype;
        f.focusFirstTabbableDescendant = function (a, b) {
          if (!c("killswitch")("TOGGLER_FAST_SHOW")) {
            b.$Toggler2 && b.$Toggler2.cancel();
            var e = null;
            b.$Toggler2 = c("queryThenMutateDOM")(
              function () {
                var b = a.querySelector(".uiToggleFlyout");
                b && (e = d("TabbableElements").findFirst(b) || b);
              },
              function () {
                delete b.$Toggler2,
                  e &&
                    (e.tabIndex == null && (e.tabIndex = -1),
                    d("Focus").setWithoutOutline(e));
              }
            );
          } else {
            var f = a.querySelector(".uiToggleFlyout");
            if (f) {
              f = d("TabbableElements").find(f)[0] || f;
              f.tabIndex == null && (f.tabIndex = -1);
              d("Focus").setWithoutOutline(f);
            }
          }
        };
        f.show = function (a) {
          var b = p(this, a),
            e = b.active;
          if (a !== e) {
            e && b.hide();
            b.active = a;
            d("CSS").addClass(a, "openToggler");
            e = c("DOM").scry(a, 'a[rel="toggle"]');
            e.length > 0 &&
              e[0].getAttribute("data-target") &&
              d("CSS").removeClass(
                c("$")(e[0].getAttribute("data-target")),
                "toggleTargetClosed"
              );
            this.focusFirstTabbableDescendant(a, b);
            e.length > 0 &&
              (c("DOM").appendContent(a, b.getToggler("next")),
              c("DOM").prependContent(a, b.getToggler("prev")));
            c("Event").listen(a, "keydown", function (d) {
              if (c("Event").getKeyCode(d) === c("Keys").ESC && b.isShown()) {
                var e = c("DOM").scry(a, 'a[rel="toggle"]')[0];
                e && e.focus();
                b.hide();
                d.kill();
              }
            });
            a.getAttribute("data-toggle-wc") &&
              (b.__continuation = c("TimeSlice").getGuardedContinuation(
                "Toggler.show inform"
              ));
            b.inform("show", b, "state");
          }
        };
        f.hide = function (a) {
          var b = p(this, a);
          b.$Toggler2 && b.$Toggler2.cancel();
          var e = b.active;
          if (e && (!a || a === e)) {
            d("CSS").removeClass(e, "openToggler");
            a = c("DOM").scry(e, 'a[rel="toggle"]');
            a.length > 0 &&
              a[0].getAttribute("data-target") &&
              d("CSS").addClass(
                c("$")(a[0].getAttribute("data-target")),
                "toggleTargetClosed"
              );
            c("getObjectValues")(b.togglers).forEach(c("DOM").remove);
            e.getAttribute("data-toggle-wc") &&
              (b.__continuation = c("TimeSlice").getGuardedContinuation(
                "Toggler.hide inform"
              ));
            b.inform("hide", b, "state");
            b.active = null;
          }
        };
        f.toggle = function (a) {
          var b = p(this, a);
          b.active === a ? b.hide() : b.show(a);
          m();
        };
        f.getActive = function () {
          return p(this).active;
        };
        f.isShown = function () {
          return (
            p(this).active && d("CSS").hasClass(p(this).active, "openToggler")
          );
        };
        b.isNodeShown = function (a) {
          return d("CSS").hasClass(a, "openToggler");
        };
        f.inTargetFlyout = function (a) {
          var b = q(this.getActive());
          return Boolean(
            b && d("ContextualThing").containsIncludingLayers(b, a)
          );
        };
        f.inActiveDialog = function () {
          var b = a.Dialog && a.Dialog.getCurrent();
          return !b || c("DOM").contains(b.getRoot(), this.getActive());
        };
        f.isIgnoredByModalLayer = function (a) {
          a = !!d("Parent").bySelector(a, "._3qw");
          var b = !!d("Parent").bySelector(this.getActive(), "._3qw");
          return a && !b;
        };
        f.getToggler = function (a) {
          var b = p(this);
          b.togglers[a] ||
            ((b.togglers[a] = c("DOM").create("button", {
              className: "hideToggler",
              onfocus: function () {
                var a = c("DOM").scry(b.active, 'a[rel="toggle"]')[0];
                a && a.focus();
                b.hide();
              },
              style: { right: a === "next" ? "0" : "" },
            })),
            b.togglers[a].setAttribute("type", "button"));
          return this.togglers[a];
        };
        f.setSticky = function (a) {
          var b = p(this);
          a = a !== !1;
          a !== b.sticky &&
            ((b.sticky = a),
            a
              ? b.$Toggler1 && b.$Toggler1.unsubscribe()
              : (b.$Toggler1 = c("Arbiter").subscribe(
                  "pre_page_transition",
                  b.hide.bind(b, null)
                )));
          return b;
        };
        f.setPrePageTransitionCallback = function (a) {
          var b = p(this);
          b.$Toggler1 && b.$Toggler1.unsubscribe();
          b.$Toggler1 = c("Arbiter").subscribe("pre_page_transition", a);
        };
        b.bootstrap = function (a) {
          a = a.parentNode;
          a != null || i(0, 3354);
          var c = b.getInstance(a);
          c != null || i(0, 3355);
          c.toggle(a);
        };
        b.createInstance = function (a) {
          var c = new b().setSticky(!0);
          d("DataStore").set(a, "toggler", c);
          return c;
        };
        b.destroyInstance = function (a) {
          var b = d("DataStore").get(a, "toggler");
          b && b.$Toggler2 && b.$Toggler2.cancel();
          d("DataStore").remove(a, "toggler");
        };
        b.getInstance = function (a) {
          a = a;
          while (a) {
            var e = d("DataStore").get(a, "toggler");
            if (e) return e;
            if (a instanceof Element)
              if (d("CSS").hasClass(a, "uiToggleContext"))
                return b.createInstance(a);
              else if (
                !c("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES") &&
                d("CSS").hasClass(a, "uiToggleFlyout")
              )
                return b.createInstance(a).setSticky(!1);
            a = c("getContextualParent")(a);
          }
          return (k = k || new b());
        };
        b.listen = function (a, d, e) {
          return b.subscribe(c("createArrayFromMixed")(a), function (a, b) {
            if (b.getActive() === d) {
              if (b.__continuation) {
                var c = b.__continuation;
                delete b.__continuation;
                return c(function () {
                  return e(a, b);
                });
              }
              return e(a, b);
            }
          });
        };
        return b;
      })(c("mixin")(d("ArbiterMixin")));
    Object.assign(o, o.prototype, d("ArbiterMixin"));
    Object.assign(o, {
      subscribe: (function (a) {
        return function (b, d) {
          b = c("createArrayFromMixed")(b);
          b.includes("show") &&
            j.forEach(function (a) {
              a.getActive() && setTimeout(d.bind(null, "show", a), 0);
            });
          return a(b, d);
        };
      })(o.subscribe.bind(o)),
    });
    function p(a, b) {
      return a instanceof o ? a : o.getInstance(b);
    }
    function q(a) {
      a = c("DOM").scry(a, 'a[rel="toggle"]');
      return a.length > 0 && a[0].getAttribute("data-target")
        ? c("ge")(a[0].getAttribute("data-target"))
        : null;
    }
    g["default"] = o;
  },
  98
);
__d(
  "LayerTogglerContext",
  ["Toggler"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        (this._root = this._layer.getRoot()),
          b("Toggler").createInstance(this._root).setSticky(!1);
      };
      c.disable = function () {
        b("Toggler").destroyInstance(this._root), (this._root = null);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "ModalLayer",
  [
    "csx",
    "cx",
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "CometVisualCompletionConstants",
    "DOM",
    "DOMDimensions",
    "DOMQuery",
    "DataStore",
    "Event",
    "Scroll",
    "ScrollAwareDOM",
    "Style",
    "UserAgent",
    "Vector",
    "debounceAcrossTransitions",
    "ge",
    "getDocumentScrollElement",
    "isAsyncScrollQuery",
    "removeFromArray",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = [],
      k = null,
      l = null,
      m = null;
    function n() {
      m ||
        (m =
          d("DOMQuery").scry(document.body, "._li")[0] ||
          c("ge")("FB4BResponsiveMain"));
      return m;
    }
    function o(a) {
      var b = { position: c("Vector").getScrollPosition(), listener: void 0 },
        e = a.offsetTop - b.position.y;
      d("CSS").addClass(a, "_31e");
      n().id !== "FB4BResponsiveMain" && c("Style").set(a, "top", e + "px");
      c("Arbiter").inform("reflow");
      b.listener = c("ScrollAwareDOM").subscribe("scroll", function (e, f) {
        if (d("DOMQuery").contains(a, f.target)) {
          e = a.offsetTop - f.delta.y;
          c("Style").set(a, "top", e + "px");
          b.position = b.position.add(f.delta);
          return !1;
        }
        return !0;
      });
      d("DataStore").set(a, "ModalLayerData", b);
    }
    function p(a, b) {
      var e = d("DataStore").get(a, "ModalLayerData");
      if (e) {
        var f = function () {
          d("CSS").removeClass(a, "_31e");
          c("Style").set(a, "top", "");
          if (b) {
            var f = c("getDocumentScrollElement")();
            d("Scroll").setTop(f, e.position.y);
            d("Scroll").getTop(f) !== e.position.y &&
              (d("Scroll").setTop(f, e.position.y + 1),
              d("Scroll").setTop(f, e.position.y));
          }
          c("Arbiter").inform("reflow");
          e.listener.unsubscribe();
          e.listener = null;
          d("DataStore").remove(a, "ModalLayerData");
        };
        if (b && c("isAsyncScrollQuery")()) {
          var g = c("DOM").create("div", { className: "_42w" });
          c("Style").set(g, "height", a.offsetHeight + "px");
          c("DOM").appendContent(document.body, g);
          var h = c("getDocumentScrollElement")();
          d("Scroll").setTop(h, e.position.y);
          b = !1;
          c("setTimeout")(function () {
            f(), c("DOM").remove(g);
          }, 0);
        } else f();
      }
    }
    function q() {
      var a = n();
      a != null && !d("CSS").matchesSelector(a, "._31e") && o(a);
    }
    function r() {
      j.length || p(n(), !0);
    }
    function s() {
      var a = j.length;
      while (a--) {
        var b = j[a],
          c = b.getLayerRoot();
        if (c) {
          t(c, 0);
          b = b.getLayerContentRoot();
          if (b) {
            b =
              b.offsetWidth +
              d("DOMDimensions").measureElementBox(b, "width", !1, !1, !0);
            t(c, b);
          }
        }
      }
    }
    function t(a, b) {
      c("Style").set(a, "min-width", b + (b ? "px" : ""));
    }
    a = (function () {
      function a(a) {
        (this._layer = a), (this._enabled = !1);
      }
      var b = a.prototype;
      b.enable = function () {
        if (!n()) return;
        this._subscription = this._layer.subscribe(
          ["show", "hide"],
          function (a) {
            a == "show" ? this._addModal() : this._removeModal();
          }.bind(this)
        );
        this._layer.isShown() && this._addModal();
        this._enabled = !0;
      };
      b.disable = function () {
        if (!n()) return;
        this._subscription && this._subscription.unsubscribe();
        this._layer.isShown() && this._removeModal();
        this._enabled = !1;
      };
      b._addModal = function () {
        var b = this.getLayerRoot();
        d("CSS").addClass(b, "_3qw");
        this._wash = c("DOM").create("div", { className: "_3ixn" });
        c("DOM").prependContent(b, this._wash);
        b &&
          this._layer._config.ignoreVC &&
          b.setAttribute(
            d("CometVisualCompletionConstants").ATTRIBUTE_NAME,
            d("CometVisualCompletionConstants").IGNORE
          );
        b = j[j.length - 1];
        b ? o(b.getLayerRoot()) : q();
        b = c("getDocumentScrollElement")();
        d("Scroll").setTop(b, 0);
        if (!j.length) {
          b = c("debounceAcrossTransitions")(s, 100);
          k = c("Event").listen(window, "resize", b);
          l = c("Arbiter").subscribe("reflow", b);
        }
        j.push(this);
        a.inform("show", this);
        c("setTimeout")(s, 0);
      };
      b._removeModal = function () {
        var b = this,
          e = this.getLayerRoot();
        d("CSS").removeClass(e, "_3qw");
        c("DOM").remove(this._wash);
        this._wash = null;
        t(e, 0);
        var f = this === j[j.length - 1];
        c("removeFromArray")(j, this);
        j.length ||
          (k && k.remove(), (k = null), l && l.unsubscribe(), (l = null));
        var g;
        c("UserAgent").isBrowser("Safari") &&
          ((e = c("Event").listen(
            document.documentElement,
            "mousewheel",
            c("Event").prevent
          )),
          (g = e.remove.bind(e)));
        c("setTimeoutAcrossTransitions")(function () {
          var d = j[j.length - 1];
          d
            ? (p(d.getLayerRoot(), f), a.inform("show", d))
            : (r(), a.inform("hide", b));
          j.length && c("setTimeout")(s, 0);
          c("UserAgent").isBrowser("Safari") &&
            c("setTimeout")(function () {
              g();
            }, 0);
        }, 200);
      };
      b.getLayerRoot = function () {
        return this._enabled ? this._layer.getRoot() : null;
      };
      b.getLayerContentRoot = function () {
        return this._enabled ? this._layer.getContentRoot() : null;
      };
      a.getTopmostModalLayer = function () {
        return j[j.length - 1];
      };
      return a;
    })();
    Object.assign(a, d("ArbiterMixin"));
    g["default"] = a;
  },
  98
);
__d(
  "DialogPosition",
  ["Vector"],
  function (a, b, c, d, e, f, g) {
    var h = 40,
      i;
    function a(a, b, d, e, f) {
      d === void 0 && (d = null);
      e === void 0 && (e = !1);
      f === void 0 && (f = !1);
      var g = c("Vector").getViewportDimensions(),
        j = !1;
      e && d && (j = d + b > g.y);
      if (d != null && !j) return d;
      if (i) return i;
      e = f
        ? Math.floor((g.y - b) / 2)
        : Math.floor(((g.x + a) * (g.y - b)) / (4 * g.x));
      return Math.max(e, h);
    }
    function b(a) {
      i = a;
    }
    g.calculateTopMargin = a;
    g.setFixedTopMargin = b;
  },
  98
);
__d(
  "DialogX",
  [
    "cx",
    "fbt",
    "Arbiter",
    "CSS",
    "DOMQuery",
    "DialogPosition",
    "Event",
    "JSXDOM",
    "Layer",
    "LayerAutoFocus",
    "LayerButtons",
    "LayerFormHooks",
    "LayerRefocusOnHide",
    "LayerTabIsolation",
    "LayerTogglerContext",
    "ModalLayer",
    "Style",
    "Vector",
    "debounce",
    "getOrCreateDOMID",
    "goURI",
    "isTruthy",
    "shield",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e._configure = function (b, e) {
        a.prototype._configure.call(this, b, e);
        e = this.getRoot();
        e != null && d("CSS").addClass(e, "_4-hy");
        if (b.autohide)
          var f = this.subscribe(
            "show",
            function () {
              f.unsubscribe(),
                window.setTimeout(c("shield")(this.hide, this), b.autohide);
            }.bind(this)
          );
        if (b.redirectURI)
          var g = this.subscribe("hide", function () {
            g.unsubscribe();
            var a = b.redirectURI;
            a != null && c("goURI")(a);
          });
        this._fixedTopPosition = b.fixedTopPosition;
        this._ignoreFixedTopInShortViewport = b.ignoreFixedTopInShortViewport;
        this._isVerticallyCentered = b.isVerticallyCentered;
      };
      e._getDefaultBehaviors = function () {
        return a.prototype._getDefaultBehaviors
          .call(this)
          .concat(
            [
              j,
              c("ModalLayer"),
              this._config.autofocus === !1 ? void 0 : c("LayerAutoFocus"),
              c("LayerButtons"),
              c("LayerFormHooks"),
              c("LayerTabIsolation"),
              c("LayerTogglerContext"),
              c("LayerRefocusOnHide"),
            ].filter(c("isTruthy"))
          );
      };
      e._buildWrapper = function (a, b) {
        var e = a.xui ? "_4t2a" : "_t _9l18",
          f = a.xui ? "_59s7 _9l2g" : "_1yv";
        this._innerContent = c("JSXDOM").div(null, b);
        b = { className: f, role: "dialog" };
        if (a.labelledBy) b["aria-labelledby"] = a.labelledBy;
        else if (a.label) b["aria-label"] = a.label;
        else if (a.titleID) b["aria-labelledby"] = a.titleID;
        else if (a.titleClass) {
          f = d("DOMQuery").scry(this._innerContent, a.titleClass);
          if (f.length) {
            f = c("getOrCreateDOMID")(f[0]);
            b["aria-labelledby"] = f;
          } else b["aria-label"] = this._getDefaultLabel();
        } else b["aria-label"] = this._getDefaultLabel();
        f = { className: e };
        a["data-testid"] && (f["data-testid"] = a["data-testid"]);
        this._wrapper = c("JSXDOM").div(
          b,
          c("JSXDOM").div(f, this._innerContent)
        );
        a.width != null && this.setWidth(a.width);
        a.height != null && this.setHeight(a.height);
        return c("JSXDOM").div({ className: "_10" }, this._wrapper);
      };
      e._getDefaultLabel = function () {
        return i._("Dialog content");
      };
      e.getContentRoot = function () {
        return this._wrapper;
      };
      e.getInnerContent = function () {
        return this._innerContent;
      };
      e.updatePosition = function () {
        var a = c("Vector").getElementDimensions(this._wrapper);
        a = d("DialogPosition").calculateTopMargin(
          a.x,
          a.y,
          this._fixedTopPosition,
          (a = this._ignoreFixedTopInShortViewport) != null ? a : !1,
          (a = this._isVerticallyCentered) != null ? a : !1
        );
        c("Style").set(this._wrapper, "margin-top", a + "px");
        this.inform("update_position", { type: "DialogX", top: a });
        return !0;
      };
      e.setWidth = function (a) {
        if (a === "100%")
          (this._width = void 0), c("Style").set(this._wrapper, "width", "");
        else {
          a = Math.floor(a);
          if (a === this._width) return;
          this._width = a;
          c("Style").set(this._wrapper, "width", a + "px");
        }
      };
      e.getWidth = function () {
        return this._width;
      };
      e.setHeight = function (a) {
        a = Math.floor(a);
        if (a === this._height) return;
        this._height = a;
        c("Style").set(this._wrapper, "height", a + "px");
      };
      e.getFixedTopPosition = function () {
        return this._fixedTopPosition;
      };
      e.shouldIgnoreFixedTopInShortViewport = function () {
        return this._ignoreFixedTopInShortViewport;
      };
      return b;
    })(c("Layer"));
    var j = (function () {
      function a(a) {
        (this._subscription = null), (this._resize = null), (this._layer = a);
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscription = this._layer.subscribe(
          ["show", "hide"],
          function (a) {
            a === "show"
              ? (this._attach(),
                c("Arbiter").inform("layer_shown", { type: "DialogX" }))
              : (this._detach(),
                c("Arbiter").inform("layer_hidden", { type: "DialogX" }));
          }.bind(this)
        );
      };
      b.disable = function () {
        var a;
        (a = this._subscription) == null ? void 0 : a.unsubscribe();
        this._subscription = null;
        this._resize && this._detach();
      };
      b._attach = function () {
        this._layer.updatePosition(),
          (this._resize = c("Event").listen(
            window,
            "resize",
            c("debounce")(this._layer.updatePosition.bind(this._layer))
          ));
      };
      b._detach = function () {
        var a;
        (a = this._resize) == null ? void 0 : a.remove();
        this._resize = null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "LoadingDialogDimensions",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ HEIGHT: 96, WIDTH: 300 });
    f["default"] = a;
  },
  66
);
__d(
  "AsyncDialog",
  [
    "cx",
    "AsyncRequest",
    "CSS",
    "DOM",
    "DialogX",
    "Keys",
    "LayerFadeOnShow",
    "LoadingDialogDimensions",
    "Parent",
    "ReactDOM",
    "URI",
    "XUIDialogTitle.react",
    "XUISpinner.react",
    "emptyFunction",
    "forEachObject",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j = h || b("react"),
      k,
      l;
    function m(a) {
      var c = b("LoadingDialogDimensions").WIDTH,
        d;
      a &&
        ((c = parseInt(a.getAttribute("data-dialog-width"), 10) || c),
        (d = a.getAttribute("data-dialog-title") || d));
      if (!k) {
        var e = (a = b("DOM")).create("div", { className: "_57-x" });
        k = new (b("DialogX"))(
          { width: c, addedBehaviors: [b("LayerFadeOnShow")], xui: !0 },
          a.create("div", null, e)
        );
        l = a.create("div");
        a.insertBefore(e, l);
        b("ReactDOM").render(
          j.jsx(b("XUISpinner.react"), { size: "large" }),
          e
        );
        k.subscribe(["key", "blur"], function (a, c) {
          if (a == "blur" || (a == "key" && c.keyCode == b("Keys").ESC)) {
            q();
            return !1;
          }
        });
      }
      d
        ? b("ReactDOM").render(
            j.jsx(b("XUIDialogTitle.react"), {
              showCloseButton: !1,
              children: d,
            }),
            l
          )
        : b("DOM").empty(l);
      k.setWidth(c);
      return k;
    }
    var n = {},
      o = 1,
      p = [];
    function q() {
      b("forEachObject")(n, function (a, b) {
        a.abandon(), r(b);
      });
    }
    function r(a) {
      delete n[a], Object.keys(n).length || m().hide();
    }
    function s(a, c) {
      var d = o++;
      p[d] = c;
      n[d] = a;
      var e = r.bind(null, "" + d);
      Object.assign(a.getData(), { __asyncDialog: d });
      c = a.getRelativeTo();
      c != null && c instanceof HTMLElement && m(c).setCausalElement(c).show();
      var f = a.finallyHandler;
      a.setFinallyHandler(function (a) {
        var c = a.getPayload();
        c && c.asyncURL && t.send(new (b("AsyncRequest"))(c.asyncURL));
        e();
        f && f(a);
      });
      var g = a.abortHandler || b("emptyFunction"),
        h = a.interceptHandler || b("emptyFunction");
      a.setInterceptHandler(function () {
        try {
          h();
        } finally {
          e();
        }
      }).setAbortHandler(function () {
        try {
          g();
        } finally {
          e();
        }
      });
      a.send();
    }
    var t = {
      send: function (a, c) {
        s(a, c || b("emptyFunction"));
      },
      bootstrap: function (a, c, d, e) {
        if (!a) return;
        var f = b("Parent").byClass(c, "stat_elem") || c;
        if (f && b("CSS").hasClass(f, "async_saving")) return !1;
        var g = new (i || (i = b("URI")))(a).getQueryData();
        d = d === "dialog";
        a = new (b("AsyncRequest"))()
          .setURI(a)
          .setData(g)
          .setMethod(d ? "GET" : "POST")
          .setReadOnly(d)
          .setStatusElement(f);
        c && (a.setRelativeTo(c), a.setNectarModuleDataSafe(c));
        t.send(a, e);
      },
      respond: function (a, b) {
        var c = p[a];
        c && (c(b), delete p[a]);
      },
      getLoadingDialog: function () {
        return m();
      },
    };
    e.exports = t;
  },
  null
);
__d(
  "CometVideoHomeVideoLink_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometVideoHomeVideoLink_video",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "VideoHomeVideoLink_video",
          },
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_live_streaming",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "goURIOnWindow",
  ["ConstUriUtils", "FBLogger", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = typeof b === "string" ? d("ConstUriUtils").getUri(b) : b;
      if (e) a.location = e.toString();
      else {
        a = "Invalid URI " + b.toString() + " provided to goURIOnWindow";
        c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(a);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CatalogCtaClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1846168");
    c = b("FalcoLoggerInternal").create("catalog_cta_click", a);
    e.exports = c;
  },
  null
);
__d(
  "CatalogCtaImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1846169");
    c = b("FalcoLoggerInternal").create("catalog_cta_impression", a);
    e.exports = c;
  },
  null
);
__d(
  "ShowSurfacesContentThumbnailClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1846172");
    c = b("FalcoLoggerInternal").create(
      "show_surfaces_content_thumbnail_click",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ShowSurfacesContentThumbnailImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1846173");
    c = b("FalcoLoggerInternal").create(
      "show_surfaces_content_thumbnail_impression",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ShowSurfacesEpisodeSaveFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1846174");
    c = b("FalcoLoggerInternal").create("show_surfaces_episode_save", a);
    e.exports = c;
  },
  null
);
__d(
  "ShowSurfacesEpisodeUnsaveFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1846175");
    c = b("FalcoLoggerInternal").create("show_surfaces_episode_unsave", a);
    e.exports = c;
  },
  null
);
__d(
  "ShowSurfacesShowSeasonPickedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1846176");
    c = b("FalcoLoggerInternal").create("show_surfaces_show_season_picked", a);
    e.exports = c;
  },
  null
);
__d(
  "ShowSurfacesSocialContextImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1846177");
    c = b("FalcoLoggerInternal").create(
      "show_surfaces_social_context_impression",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ShowSurfacesLoggingUtil",
  [
    "CatalogCtaClickFalcoEvent",
    "CatalogCtaImpressionFalcoEvent",
    "ShowSurfacesContentThumbnailClickFalcoEvent",
    "ShowSurfacesContentThumbnailImpressionFalcoEvent",
    "ShowSurfacesEpisodeSaveFalcoEvent",
    "ShowSurfacesEpisodeUnsaveFalcoEvent",
    "ShowSurfacesShowSeasonPickedFalcoEvent",
    "ShowSurfacesSocialContextImpressionFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e, f, g, h, i, j) {
      var k = {
        entrypoint_surface: b,
        event_data: f,
        network_page_id: a,
        player_origin: i,
        player_suborigin: j,
        surface: d,
        video_id: g,
        video_list_id: h,
      };
      switch (e) {
        case "catalog_cta_click":
          c("CatalogCtaClickFalcoEvent").log(function () {
            return k;
          });
          break;
        case "catalog_cta_impression":
          c("CatalogCtaImpressionFalcoEvent").log(function () {
            return k;
          });
          break;
        case "show_surfaces_content_thumbnail_click":
          c("ShowSurfacesContentThumbnailClickFalcoEvent").log(function () {
            return k;
          });
          break;
        case "show_surfaces_content_thumbnail_impression":
          c("ShowSurfacesContentThumbnailImpressionFalcoEvent").log(
            function () {
              return k;
            }
          );
          break;
        case "show_surfaces_episode_save":
          c("ShowSurfacesEpisodeSaveFalcoEvent").log(function () {
            return k;
          });
          break;
        case "show_surfaces_episode_unsave":
          c("ShowSurfacesEpisodeUnsaveFalcoEvent").log(function () {
            return k;
          });
          break;
        case "show_surfaces_show_season_picked":
          c("ShowSurfacesShowSeasonPickedFalcoEvent").log(function () {
            return k;
          });
          break;
        case "show_surfaces_social_context_impression":
          c("ShowSurfacesSocialContextImpressionFalcoEvent").log(function () {
            return k;
          });
          break;
        default:
          return;
      }
    }
    g.log = a;
  },
  98
);
__d(
  "CometCompatPrimerDialog.react",
  [
    "CometCompatModalDialogResource",
    "CometLazyDialogTrigger.react",
    "FBLogger",
    "mergeRefs",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.Component;
      a = a.props;
      var e = a.ajaxify,
        f = a.href,
        g = a.onClick,
        i = a.rel,
        j = babelHelpers.objectWithoutPropertiesLoose(a, [
          "ajaxify",
          "href",
          "onClick",
          "rel",
        ]);
      e = (e = e) != null ? e : f;
      if (i == null || e == null) {
        c("FBLogger")("ufi2").mustfix(
          "CometPrimer called with null props for rel or ajaxify, this is an issue only present on Comet and should be investigated"
        );
        return h.jsx(d, babelHelpers["extends"]({}, a));
      }
      return h.jsx(c("CometLazyDialogTrigger.react"), {
        dialogProps: { params: { rel: String(i), uri: String(e) } },
        dialogResource: c("CometCompatModalDialogResource"),
        children: function (a, e) {
          return h.jsx(
            d,
            babelHelpers["extends"]({}, j, {
              href: f != null ? "#" : void 0,
              onClick: function (b) {
                g && g(b), a();
              },
              ref: c("mergeRefs")(b, e),
            })
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeGetLiveInjectionURI",
  ["XCometVideoHomeLiveControllerRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = {};
      a != null && (d.v = a);
      b != null && (d.ref = b);
      return c("XCometVideoHomeLiveControllerRouteBuilder").buildURL(d);
    }
    g.getCometInjectionURI = a;
  },
  98
);
__d(
  "CometVideoHomeLiveContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    function a() {}
    c = b.createContext({
      hasInjectedVideo: !1,
      heroVideoID: null,
      hiddenVideoIDs: [],
      hotswapVideoID: null,
      setHeroVideoID: a,
      setHiddenVideoIDs: a,
      setHotswapVideoID: a,
      setVideoMuted: a,
      updateVisibleVideoIDs: a,
      videoMuted: !0,
      visibleVideoIDs: {},
    });
    g["default"] = c;
  },
  98
);
__d(
  "CometVideoHomePositionInUnitContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(0);
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeShowSurfacesLoggingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      entrypoint: "",
      pageID: null,
      sectionTypeName: "",
      surface: "",
    });
    g["default"] = b;
  },
  98
);
__d(
  "VideoChainingCaller",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      INTERNAL: "internal",
      WWW_FEED_PIVOTS: "www_feed_pivots",
      WWW_FEED_SNOWLIFT: "www_feed_snowlift",
      MISC_PHOTO_SET: "misc_photo_set",
      MOBILE: "mobile",
      SEARCH: "search",
      WWW_FEED_RHC: "www_feed_rhc",
      WWW_NOTIFICATION: "www_notification",
      WWW_PERMALINK: "www_permalink",
      WWW_PERMALINK_RHC: "www_permalink_rhc",
      WWW_PERMALINK_RHC_FROM_NOTIFICATION:
        "www_permalink_rhc_from_notification",
      MY_VIDEO_CHANNELS_ENT_QUERY: "my_video_channels_ent_query",
      TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:
        "top_followed_video_channels_ent_query",
      BADGE: "badge",
      PAGINATION: "pagination",
      SUBTITLE: "subtitle",
      CHANNEL_VIEW_FROM_UNKNOWN: "channel_view_from_unknown",
      CHANNEL_VIEW_FROM_NEWSFEED: "channel_view_from_newsfeed",
      CHANNEL_VIEW_FROM_EXPLOREFEED: "channel_view_from_explorefeed",
      LIVE_INDEXER_FROM_EXPLOREFEED: "live_indexer_from_explorefeed",
      LIVE_INDEXER_FROM_NEWSFEED: "live_indexer_from_newsfeed",
      NN_INDEXER_FROM_NEWSFEED: "nn_indexer_from_newsfeed",
      CHANNEL_VIEW_FROM_SEARCH: "channel_view_from_search",
      CHANNEL_VIEW_FROM_NEWSFEED_PIVOT: "channel_view_from_newsfeed_pivot",
      NEWSFEED_PIVOT_INLINE: "newsfeed_pivot_inline",
      MOBILE_NEWSFEED_PIVOT_INLINE: "mobile_newsfeed_pivot_inline",
      CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:
        "channel_view_from_page_call_to_action",
      CHANNEL_VIEW_FROM_PAGE_TIMELINE: "channel_view_from_page_timeline",
      CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:
        "channel_view_from_page_timeline_featured",
      CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB: "channel_view_from_page_video_tab",
      CHANNEL_VIEW_FROM_PAGE_HOME_HERO: "channel_view_from_page_home_hero",
      CHANNEL_VIEW_FROM_USER_TIMELINE: "channel_view_from_user_timeline",
      CHANNEL_VIEW_FROM_USER_VIDEO_TAB: "channel_view_from_user_video_tab",
      CHANNEL_VIEW_FROM_GROUP_TIMELINE: "channel_view_from_group_timeline",
      CHANNEL_VIEW_FROM_GROUP_TAB: "channel_view_from_group_tab",
      CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB: "channel_view_from_group_video_tab",
      CHANNEL_VIEW_FROM_VIDEO_PAGE_SPOTLIGHT:
        "channel_view_from_video_page_spotlight",
      CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_LIST:
        "channel_view_from_video_page_video_list",
      CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_TAB:
        "channel_view_from_video_page_video_tab",
      CHANNEL_VIEW_FROM_CHANNEL_TAB: "channel_view_from_channel_tab",
      CHANNEL_VIEW_FROM_PMV_UNIT: "channel_view_from_pmv_unit",
      CHANNEL_VIEW_FROM_SAVED_STORY: "channel_view_from_saved_story",
      SAVED_STORY_INLINE: "saved_story_inline",
      CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:
        "channel_view_from_shared_with_you_story",
      SHARED_WITH_YOU_STORY_INLINE: "shared_with_you_story_inline",
      CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:
        "channel_view_from_latest_from_your_channels_story",
      LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:
        "latest_from_your_channels_story_inline",
      CHANNEL_VIEW_FROM_CHANNEL_PIVOT: "channel_view_from_channel_pivot",
      CHANNEL_PIVOT_INLINE: "channel_pivot_inine",
      CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:
        "channel_view_from_recommended_channel_story",
      RECOMMENDED_CHANNEL_STORY_INLINE: "recommended_channel_story_inline",
      CHANNEL_VIEW_FROM_VIDEO_HOME: "channel_view_from_video_home",
      VIDEO_HOME_INLINE: "video_home_inline",
      VIDEO_HOME_CHANNEL_SEE_ALL: "video_home_channel_see_all",
      SOCIAL_PLAYER_UP_NEXT: "social_player_up_next",
      CHANNEL_VIEW_FROM_CASTING: "channel_view_from_casting",
      CHANNEL_VIEW_FROM_TV_CANDY_SHELF: "channel_view_from_tv_candy_shelf",
      CHANNEL_VIEW_FROM_END_CARD: "channel_view_from_end_card",
      CHANNEL_VIEW_FROM_MOBILE_WHALES_QP: "channel_view_from_mobile_whales_qp",
      CONNECTED_TV: "connected_tv",
      CONNECTED_TV_DISCOVERY: "connected_tv_discovery",
      CONNECTED_TV_PLAYER: "connected_tv_player",
      CONNECTED_TV_PROFILE: "connected_tv_profile",
      CONNECTED_TV_MINI_PLAYER_FEED: "connected_tv_mini_player_feed",
      VIDEO_HOME_FEED: "video_home_feed",
      VIDEO_HOME_HERO: "video_home_hero",
      FEED_SURVEY_SWIPE: "feed_survey_swipe",
      FEED_PIVOTS_INLINE: "feed_pivots_inline",
      CHANNEL_VIEW_FROM_FEED_PIVOTS: "channel_view_from_feed_pivots",
      VIDEO_SETS_CACHE_REFRESH: "video_sets_cache_refresh",
      VIDEO_SETS_CACHE_CHECK: "video_sets_cache_check",
      DUMMY_STORY_RECOMMENDED_VIDEOS: "dummy_story_recommended_videos",
      DUMMY_STORY_FRIENDS_ENJOYING: "dummy_story_friends_enjoying",
      LIVE_EVENT_VIDEO_SET: "live_event_video_set",
      LIVE_VIDEOS_SET: "live_videos_set",
      SINGLE_CREATOR_VIDEO_SET: "single_creator_video_set",
      FRT_TOOL: "frt_tool",
      DUMMY_STORY_FRIENDS_ENJOYING_NOW: "dummy_story_friends_enjoying_now",
      DUMMY_STORY_DUMMY_ACTION: "dummy_story_dummy_action",
      OCULUS_VIDEO: "oculus_video",
      TRENDING_DEMOGRAPHICS_LIVE: "trending_demographics_live",
      LIVE_MAP: "live_map",
      UNCONNECTED_LIVE_VIDEO: "unconnected_live_video",
      PROFILE_VIDEO_GALLERY: "profile_video_gallery",
      CHANNEL_VIEW_FROM_PLAYLIST: "channel_view_from_playlist",
      OCULUS_SOCIAL_HUB: "oculus_social_hub",
      AKIRA: "akira",
      IS_LIVE_VIDEO_CHAINING: "is_live_video_chaining",
      IS_LIVE_VIDEO_CHAINING_OTHERS: "is_live_video_chaining_others",
      VIDEO_CREATOR_CHAINING: "video_creator_chaining",
      TAHOE: "tahoe",
      LIVING_ROOM: "living_room",
      SHOWS_COVER_TRAILER: "shows_cover_trailer",
      SHOWS_EPISODES_TAB: "shows_episodes_tab",
      SHOWS_PLAYLISTS_TAB: "shows_playlists_tab",
      SHOWS_HOME_TAB: "shows_home_tab",
      SHOWS_MORE_VIDEOS_TAB: "shows_more_videos_tab",
      SHOW_EPISODE_FEED_RECOMMENDATIONS: "show_episode_feed_recommendations",
      PARENT_PAGE_TIMELINE: "parent_page_timeline",
      WATCH_WATCHLIST_TAB: "watch_watchlist_tab",
      WATCH_FEED_TAB: "watch_feed_tab",
      WATCH_INJECTION: "watch_injection",
      WATCH_TOPIC_FEED: "watch_topic_feed",
      WATCH_TOPIC_CHANNEL_FEED: "watch_topic_channel_feed",
      WATCH_SUBTOPIC_CHANNEL_FEED: "watch_subtopic_channel_feed",
      WATCH_SUBTOPIC_AGGREGATION: "watch_subtopic_aggregation",
      WATCH_SUBTOPIC_LIVE_FEED: "watch_subtopic_live_feed",
      LIVE_CATEGORY_QUERY: "live_category_query",
      WATCH_SECTION_SEE_ALL: "watch_section_see_all",
      SOCIAL_PLAYER_FROM_VIDEO_HOME: "social_player_from_video_home",
      WATCH_CUSTOM_ADS: "watch_custom_ads",
      WATCH_EMBEDDED_ENDSCREEN: "watch_embedded_endscreen",
      WNS: "wns",
      EXPLORE_FEED_DEEP_DIVE: "explore_feed_deep_dive",
      VOYAGER: "voyager",
      FULLSCREEN_CHAINING_FROM_LIVE: "fullscreen_chaining_from_live",
      FULLSCREEN_CHAINING_FROM_VOD: "fullscreen_chaining_from_vod",
      FULLSCREEN_CHAINING_FROM_GAMING: "fullscreen_chaining_from_gaming",
      FULLSCREEN_CHAINING_FROM_PMV: "fullscreen_chaining_from_pmv",
      WARION_CHAINING_FROM_NEWSFEED_RELATED_VOD:
        "warion_chaining_from_newsfeed_related_vod",
      GAMES_VIDEO_CHANNEL: "games_video_channel",
      GAMES_TAB_CHAINING_CHANNEL: "games_tab_chaining_channel",
      GAMES_TAB_PATHING_ONLY_LIVE: "games_tab_pathing_only_live",
      GAMES_COMET_CHAINING: "games_comet_chaining",
      LOL_VIDEO_FEED: "lol_video_feed",
      AVD_VIDEO: "avd",
      LIVE_CHAINING: "live_chaining",
      LIVE_TAB: "live_tab",
      LIVING_ROOM_CHAINING: "living_room_chaining",
      FBLITE_TRENDING_VIDEO: "fblite_trending_video",
      PORTAL: "portal",
      LASSO: "lasso",
      WATCH_SOCIAL: "watch_social",
      MESSENGER: "messenger",
      CHAINING_GAMING_PROMOTION: "chaining_gaming_promotion",
      CHAINING_GAMING_ONLY: "chaining_gaming_only",
      CRICKET_VIDEOS: "cricket_videos",
      PREMIUM_MUSIC_VIDEO: "premium_music_video",
      MUSIC_CHANNEL_VIEW_FROM_MUSIC_HOME: "music_channel_view_from_music_home",
      MUSIC_CHANNEL_VIEW_FROM_VIDEO_HOME: "music_channel_view_from_video_home",
      MUSIC_CHANNEL_VIEW_FROM_VIDEO_HOME_EVALUATION:
        "music_channel_view_from_video_home_evaluation",
      MUSIC_CHANNEL_VIEW_FROM_NEWSFEED: "music_channel_view_from_newsfeed",
      MUSIC_CHANNEL_VIEW_FROM_NEWSFEED_EVALUATION:
        "music_channel_view_from_newsfeed_evaluation",
      MUSIC_CHANNEL_VIEW_FROM_SEARCH: "music_channel_view_from_search",
      MUSIC_CHANNEL_VIEW_FROM_SEARCH_EVALUATION:
        "music_channel_view_from_search_evaluation",
      MUSIC_CHANNEL_VIEW_FROM_PAGE: "music_channel_view_from_page",
      MUSIC_CHANNEL_VIEW_FROM_CASTING: "music_channel_view_from_casting",
      CHANNEL_VIEW_FROM_VIDEO_PAGE_PMV_MUSIC_FEATURING_ARTIST_LIST:
        "channel_view_from_video_page_pmv_music_featuring_artist_list",
      WATCH_LAIDBACK_CONSUMPTION: "watch_laidback_consumption",
      WATCH_NF_LAIDBACK_CONSUMPTION: "watch_nf_laidback_consumption",
      CHANNEL_VIEW_FROM_NEWSFEED_RELATED: "channel_view_from_newsfeed_related",
      CHANNEL_VIEW_FROM_VIDEO_HOME_RELATED:
        "channel_view_from_video_home_related",
      SEARCH_RELATED: "search_related",
      MUSIC_CHANNEL_VIEW_FROM_MUSIC_HOME_RELATED:
        "music_channel_view_from_music_home_related",
      MUSIC_CHANNEL_VIEW_FROM_VIDEO_HOME_RELATED:
        "music_channel_view_from_video_home_related",
      FEED_SHORT_VIDEO: "feed_short_video",
      PHOTO_CHAINING: "photo_chaining",
      YOUTUBE_SHARE: "youtube_share",
      WATCH_RAINBOW_QP: "watch_rainbow_qp",
      PLAZA_WATCH_RICH_BOOKMARK_TILE: "plaza_watch_rich_bookmark_tile",
      INTEREST_DESTINATION: "interest_destination",
      CO_WATCH: "co_watch",
      LIVE_NOW: "live_now",
      LIVE_TAB_PREFETCH: "live_tab_prefetch",
      LIVE_LOGOUT_USER: "live_logout_user",
      FB_LITE: "fb_lite",
      LIVE_DESTINATION_WWW: "live_destination_www",
      VH_SEARCH_RELATED_VIDEOS_FEED: "vh_search_related_videos_feed",
      VH_TV_MOVIE_FEED: "vh_tv_movie_feed",
      FULLSCREEN_CHAINING_FROM_PODCAST: "fullscreen_chaining_from_podcast",
      SOUNDBITES_FEED: "soundbites_feed",
      AUDIO_HUB_FEED: "audio_hub_feed",
      TEST: "test",
      UNKNOWN: "unknown",
    });
    f["default"] = a;
  },
  66
);
__d(
  "VideoHomeLoggingFeedAggregationTypeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "VideoHomeLoggingSectionSubtypeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeVideoLink.react",
  [
    "CometRelay",
    "CometTahoeTracePolicyContext",
    "CometVideoHomeGetLiveInjectionURI",
    "CometVideoHomeLiveContext",
    "CometVideoHomePositionInUnitContext",
    "CometVideoHomeSectionPositionContext",
    "CometVideoHomeShowSurfacesLoggingContext",
    "CometVideoHomeVideoLink_video.graphql",
    "ShowSurfacesLoggingUtil",
    "TetraButton.react",
    "VideoHomeLoggingFeedAggregationTypeContext",
    "VideoHomeLoggingReactionVideoChannelTypeContext",
    "VideoHomeLoggingSectionSubtypeContext",
    "VideoHomeLoggingUpstreamPlayerSourceContext",
    "VideoHomeTypedLoggerLite",
    "VideoPlayerLoggingExternalLogContext",
    "VideoPlayerLoggingSuboriginContext",
    "XCometVideoControllerRouteBuilder",
    "cr:1187630",
    "cr:1586838",
    "cr:1586839",
    "cr:850484",
    "cr:928284",
    "react",
    "unrecoverableViolation",
    "useCometTahoeChainingDepth",
    "useInnerMostTrackingCode",
    "usePlayerOriginRouteTracePolicy",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext;
    function a(a) {
      var e = a.buttonProps,
        f = a.caller,
        g = a.chainingCursor,
        l = a.chainingSeedVideoId,
        m = a.channelEntryPoint,
        n = a.channelIDOverride,
        o = a.children,
        p = a.clickPoint,
        q = a.display,
        r = a.extraData,
        s = a.isFromInterestDestinationPage,
        t = a.onClick,
        u = a.openInTahoe;
      u = u === void 0 ? !0 : u;
      var v = a.playerOrigin,
        w = a.preventLocalNavigation,
        x = a.scrollToTopWithEmptyURL,
        y = x === void 0 ? !1 : x;
      x = a.searchKeyword;
      var z = a.sectionTypeName,
        A = a.shouldPrefetch;
      A = A === void 0 ? !1 : A;
      var B = a.tabTypeName,
        C = a.trackingData,
        D = a.useTrackingCode;
      D = D === void 0 ? !1 : D;
      var E = a.video;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "buttonProps",
        "caller",
        "chainingCursor",
        "chainingSeedVideoId",
        "channelEntryPoint",
        "channelIDOverride",
        "children",
        "clickPoint",
        "display",
        "extraData",
        "isFromInterestDestinationPage",
        "onClick",
        "openInTahoe",
        "playerOrigin",
        "preventLocalNavigation",
        "scrollToTopWithEmptyURL",
        "searchKeyword",
        "sectionTypeName",
        "shouldPrefetch",
        "tabTypeName",
        "trackingData",
        "useTrackingCode",
        "video",
      ]);
      E = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometVideoHomeVideoLink_video.graphql")),
        E
      );
      var F = (v = v) != null ? v : "video_home",
        G = k(c("VideoPlayerLoggingSuboriginContext")),
        H = k(c("VideoHomeLoggingUpstreamPlayerSourceContext")),
        I = k(c("CometVideoHomeSectionPositionContext")),
        J = k(c("CometVideoHomePositionInUnitContext"));
      v = k(c("CometVideoHomeLiveContext"));
      v = v.heroVideoID;
      var K = c("usePlayerOriginRouteTracePolicy")(),
        L = k(c("CometTahoeTracePolicyContext")),
        M = k(c("VideoHomeLoggingReactionVideoChannelTypeContext")),
        N = k(c("VideoHomeLoggingFeedAggregationTypeContext")),
        O = k(c("VideoPlayerLoggingExternalLogContext")),
        P = O.externalLogID;
      O = O.externalLogType;
      var Q = k(c("VideoHomeLoggingSectionSubtypeContext")),
        R = r == null ? void 0 : r.view_type;
      R != null && typeof R === "string" && (Q = R);
      var S = k(c("CometVideoHomeShowSurfacesLoggingContext"));
      R = d("useCometTahoeChainingDepth").useChainingDepthContext();
      var T = R.chainingDepthDispatch;
      R = c("useInnerMostTrackingCode")();
      g = {
        bypassAutoplaySettings: !0,
        caller: f,
        chainingCursor: g,
        chainingSeedVideoId: l,
        channelEntryPoint: m,
        channelID: n,
        externalLogID: P,
        externalLogType: O,
        feedAggregationType: N,
        heroVideoID: v,
        initialTracePolicy: (f = L) != null ? f : K,
        playerSubOrigin: G,
        reactionVideoChannelType: M,
        searchKeyword: x,
      };
      D && (g.trackingCode = R);
      m = (l = E.owner) == null ? void 0 : l.id;
      var U = E.id,
        V = j(
          function (a) {
            T && T({ type: "INCREMENT" }),
              c("VideoHomeTypedLoggerLite").log({
                click_point: p,
                event: "click",
                event_target: "video",
                event_target_id: U,
                event_target_info: z,
                extra_data: r,
                player_origin: F,
                player_suborigin: G,
                position_in_unit: J,
                section_subtype: Q,
                section_video_channel_type: M,
                tab_type: B,
                unit_position: I,
                upstream_player_source: H,
              }),
              d("ShowSurfacesLoggingUtil").log(
                S.pageID,
                S.entrypoint,
                S.surface,
                "show_surfaces_content_thumbnail_click",
                { content_id: U || "" },
                U,
                null,
                null,
                G
              ),
              s !== null &&
                s === !0 &&
                c("VideoHomeTypedLoggerLite").log({
                  event: "click",
                  event_target: "subtopic_aggregation_video",
                  event_target_info: z,
                  section_subtype: Q,
                  tab_type: B,
                }),
              t && t(a);
          },
          [
            T,
            p,
            r,
            t,
            J,
            M,
            Q,
            S.entrypoint,
            S.pageID,
            S.surface,
            G,
            I,
            H,
            U,
            F,
            B,
            z,
            s,
          ]
        );
      if (m == null || U == null) return i.jsx(i.Fragment, { children: o });
      P = !!E.is_live_streaming;
      O = null;
      u ||
        (P
          ? (O = d("CometVideoHomeGetLiveInjectionURI").getCometInjectionURI(U))
          : b("cr:1187630") != null
          ? (O = b("cr:1187630")
              .getURIBuilder()
              .setString("vanity", m)
              .setInt("video_id", U)
              .setEnum("__so__", G)
              .setEnum("__rv__", M)
              .getURI()
              .toString())
          : b("cr:1586839") != null
          ? (O = b("cr:1586839")
              .getURIBuilder()
              .setString("v", U)
              .getURI()
              .toString())
          : (O =
              b("cr:1586838") == null
                ? void 0
                : b("cr:1586838").buildURL({ v: U })));
      if (b("cr:850484") != null)
        return i.jsx(b("cr:850484"), {
          channelCaller: "channel_view_from_video_home",
          channelID: n,
          explicitHref: O,
          extraData: r,
          onClick: function (a) {
            d("ShowSurfacesLoggingUtil").log(
              S.pageID,
              S.entrypoint,
              S.surface,
              "show_surfaces_content_thumbnail_click",
              { content_id: U || "" },
              U,
              null,
              null,
              G
            ),
              y && scrollTo({ behavior: "smooth", top: 0 }),
              t && t(a);
          },
          openInTahoe: u,
          playerOrigin: F,
          playerSuborigin: G,
          positionInUnit: J,
          scrollToTopWithEmptyURL: y,
          targetID: U,
          trackingData: C,
          unitPosition: I,
          upstreamPlayerSource: H,
          video: E,
          videoChannelSubtype: Q,
          videoChannelType: M,
          videoClickPoint: p,
          children: o,
        });
      else if (b("cr:928284") != null) {
        v =
          (N = O) != null
            ? N
            : c("XCometVideoControllerRouteBuilder").buildURL({
                page_token: m,
                story_token: U,
              });
        return e != null
          ? i.jsx(
              c("TetraButton.react"),
              babelHelpers["extends"]({}, e, {
                linkProps: {
                  passthroughProps: g,
                  preventLocalNavigation: Boolean(w),
                  url: v,
                },
                onPress: function (a) {
                  e.onPress != null && e.onPress(a), V(a);
                },
              })
            )
          : i.jsx(
              b("cr:928284"),
              babelHelpers["extends"]({}, a, {
                display: q || "block",
                href: v,
                onClick: V,
                passthroughProps: g,
                prefetchQueries: A,
                preventLocalNavigation: !!w,
                children: o,
              })
            );
      } else
        throw c("unrecoverableViolation")(
          "Neither VideoHomeVideoLink nor CometVideoHomeLink exist",
          "watch_oncall"
        );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UFIReactionsAnimatedKeyframesIcon.react",
  [
    "Keyframes.react",
    "UFIReactionTypes",
    "UFIReactionsKeyframesAssets",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      b.supportsReaction = function (a) {
        return !!c("UFIReactionsKeyframesAssets").reactions[a];
      };
      var d = b.prototype;
      d.render = function () {
        var a = this.props,
          b = a.animate,
          d = a.className,
          e = a.maxSize;
        a = a.reactionID;
        var f = c("UFIReactionsKeyframesAssets").initialProgress[a] || 0,
          g = c("UFIReactionsKeyframesAssets").reactions[a];
        return g
          ? h.jsx(c("Keyframes.react"), {
              projectName: "feedback_reactions",
              assetName: c("UFIReactionTypes").reactions[a].name,
              className: d,
              source: g,
              width: e,
              height: e,
              playing: b,
              initialProgress: f,
              resetOnPause: !0,
            })
          : h.jsx("div", { style: { width: e, height: e } });
      };
      return b;
    })(h.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "UFI2ActionLink.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children,
        d = a.linkClassName,
        e = a.enabled;
      e = e === void 0 ? !0 : e;
      var f = a.floating;
      f = f === void 0 ? !1 : f;
      a = a.showIcon;
      a = a === void 0 ? !0 : a;
      return i.jsx("span", {
        className: (f === !0 ? "_8y72" : "") + " _18vi",
        children: b({
          className: c("joinClasses")(
            (e ? "" : "_6dc1") + " _18vj" + (a ? " _18vk" : ""),
            d
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "isKeyActivation",
  ["Keys"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = 0,
        d = a.charCode;
      a = a.keyCode;
      d != null && d !== 0 ? (b = d) : a != null && a !== 0 && (b = a);
      return [c("Keys").RETURN, c("Keys").SPACE].includes(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "KeyActivationToClickHOC.react",
  ["isKeyActivation", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b, d;
      return (
        (d = b =
          (function (b) {
            babelHelpers.inheritsLoose(d, b);
            function d() {
              var a;
              for (
                var d = arguments.length, e = new Array(d), f = 0;
                f < d;
                f++
              )
                e[f] = arguments[f];
              a = b.call.apply(b, [this].concat(e)) || this;
              a.$2 = function (b) {
                c("isKeyActivation")(b) &&
                  (b.preventDefault(),
                  b.stopPropagation(),
                  a.$1 && a.$1.click());
              };
              a.$3 = function (b) {
                a.$1 = b;
              };
              a.$1 = null;
              return a;
            }
            var e = d.prototype;
            e.render = function () {
              return h.jsx(
                a,
                babelHelpers["extends"](
                  {
                    keyActivationToClickEvent: this.$2,
                    keyActivationToClickRef: this.$3,
                  },
                  this.props
                )
              );
            };
            return d;
          })(h.Component)),
        (b.displayName = "KeyActivationToClickHOC"),
        d
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "RTLKeys",
  ["Keys", "Locale"],
  function (a, b, c, d, e, f, g) {
    var h = null;
    function i() {
      h === null && (h = d("Locale").isRTL());
      return h;
    }
    a = babelHelpers.objectWithoutPropertiesLoose(c("Keys"), ["RIGHT", "LEFT"]);
    var j = babelHelpers["extends"]({}, a, {
      REAL_RIGHT: c("Keys").RIGHT,
      REAL_LEFT: c("Keys").LEFT,
      getLeft: function () {
        return i() ? j.REAL_RIGHT : j.REAL_LEFT;
      },
      getRight: function () {
        return i() ? j.REAL_LEFT : j.REAL_RIGHT;
      },
    });
    b = j;
    g["default"] = b;
  },
  98
);
__d(
  "ShimButton.react",
  [
    "KeyActivationToClickHOC.react",
    "emptyFunction",
    "killswitch",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = g || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = function (a) {
            c.props.keyActivationToClickRef(a), c.props.onRef(a);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = c.prototype;
      d.render = function () {
        var a = this.props,
          c = a.children,
          d = a.form,
          e = a.inline,
          f = a.keyActivationToClickEvent;
        a.keyActivationToClickRef;
        a.onRef;
        var g = a.pressed;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "form",
          "inline",
          "keyActivationToClickEvent",
          "keyActivationToClickRef",
          "onRef",
          "pressed",
        ]);
        e = e ? "span" : "div";
        d === "link" && (e = "a");
        f =
          ((d = {}),
          (d[
            b("killswitch")("SHIM_BUTTON_USE_ONKEYDOWN_INSTEAD_OF_ONKEYPRESS")
              ? "onKeyPress"
              : "onKeyDown"
          ] = f),
          d);
        return h.jsx(
          e,
          babelHelpers["extends"](
            {},
            a,
            { "aria-pressed": g, ref: this.$1, role: "button" },
            f,
            { children: c }
          )
        );
      };
      return c;
    })(h.Component);
    a.defaultProps = {
      form: "none",
      inline: !1,
      keyActivationToClickEvent: b("emptyFunction"),
      keyActivationToClickRef: b("emptyFunction"),
      onClick: b("emptyFunction"),
      onRef: b("emptyFunction"),
      tabIndex: "0",
    };
    a.propTypes = {
      children: b("prop-types").any,
      form: b("prop-types").oneOf(["none", "link"]),
      inline: b("prop-types").bool,
      tabIndex: b("prop-types").oneOf(["-1", "0", -1, 0]),
      onClick: b("prop-types").func,
      onRef: b("prop-types").func,
    };
    e.exports = b("KeyActivationToClickHOC.react")(a);
  },
  null
);
__d(
  "TabbableElements",
  ["Style"],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      if (a.tabIndex < 0) return !1;
      if (
        a.tabIndex > 0 ||
        (a.tabIndex === 0 && a.getAttribute("tabIndex") !== null)
      )
        return !0;
      var b = a;
      switch (a.tagName) {
        case "A":
          a = b;
          return !!a.href && a.rel != "ignore";
        case "INPUT":
          a = b;
          return a.type != "hidden" && a.type != "file" && !a.disabled;
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
          a = b;
          return !a.disabled;
      }
      return !1;
    }
    function i(a) {
      a = a;
      while (
        a &&
        a !== document &&
        c("Style").get(a, "visibility") != "hidden" &&
        c("Style").get(a, "display") != "none"
      )
        a = a.parentNode;
      return a === document;
    }
    function a(a) {
      return Array.from(a.getElementsByTagName("*")).filter(j);
    }
    function b(a) {
      return Array.from(a.getElementsByTagName("*")).find(j);
    }
    function d(a) {
      a = Array.from(a.getElementsByTagName("*"));
      for (var b = a.length - 1; b >= 0; b--) if (j(a[b])) return a[b];
      return null;
    }
    function j(a) {
      return h(a) && i(a);
    }
    function e(a) {
      return i(a);
    }
    g.find = a;
    g.findFirst = b;
    g.findLast = d;
    g.isTabbable = j;
    g.isVisible = e;
  },
  98
);
__d(
  "fbjs/lib/shallowEqual",
  ["shallowEqual"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("shallowEqual");
  },
  null
);
__d(
  "ReactDOMLegacy_DEPRECATED",
  ["cr:1108857", "cr:1294246"],
  function (a, b, c, d, e, f, g) {
    (g.createPortal = b("cr:1294246").createPortal),
      (g.findDOMNode = b("cr:1294246").findDOMNode),
      (g.flushSync = b("cr:1294246").flushSync),
      (g.hydrate = b("cr:1294246").hydrate),
      (g.render = b("cr:1294246").render),
      (g.unmountComponentAtNode = b("cr:1294246").unmountComponentAtNode),
      (g.unstable_batchedUpdates = b("cr:1294246").unstable_batchedUpdates),
      (g.unstable_renderSubtreeIntoContainer =
        b("cr:1294246").unstable_renderSubtreeIntoContainer),
      (g.version = b("cr:1294246").version),
      (g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
        b("cr:1294246").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
  },
  98
);
__d(
  "ReactDOM",
  ["ReactDOMLegacy_DEPRECATED"],
  function (a, b, c, d, e, f) {
    Object.keys(importNamespace("ReactDOMLegacy_DEPRECATED")).forEach(function (
      a
    ) {
      if (a === "default" || a === "__esModule") return;
      f[a] = importNamespace("ReactDOMLegacy_DEPRECATED")[a];
    });
  },
  null
);
__d(
  "getVendorPrefixedEventName",
  ["fbjs/lib/ExecutionEnvironment"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      c["ms" + a] = "MS" + b;
      c["O" + a] = "o" + b.toLowerCase();
      return c;
    }
    var g = {
        animationend: a("Animation", "AnimationEnd"),
        animationiteration: a("Animation", "AnimationIteration"),
        animationstart: a("Animation", "AnimationStart"),
        transitionend: a("Transition", "TransitionEnd"),
      },
      h = {},
      i = {};
    b("fbjs/lib/ExecutionEnvironment").canUseDOM &&
      ((i = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete g.animationend.animation,
        delete g.animationiteration.animation,
        delete g.animationstart.animation),
      "TransitionEvent" in window || delete g.transitionend.transition);
    function c(a) {
      if (h[a]) return h[a];
      else if (!g[a]) return a;
      var b = g[a];
      for (var c in b)
        if (Object.prototype.hasOwnProperty.call(b, c) && c in i)
          return (h[a] = b[c]);
      return "";
    }
    e.exports = c;
  },
  null
);
__d(
  "shallowCompare",
  ["fbjs/lib/shallowEqual"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
      return (
        !b("fbjs/lib/shallowEqual")(a.props, c) ||
        !b("fbjs/lib/shallowEqual")(a.state, d)
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "ReactTransitionEvents",
  ["fbjs/lib/ExecutionEnvironment", "getVendorPrefixedEventName"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [];
    function a() {
      var a = b("getVendorPrefixedEventName")("animationend"),
        c = b("getVendorPrefixedEventName")("transitionend");
      a && g.push(a);
      c && g.push(c);
    }
    b("fbjs/lib/ExecutionEnvironment").canUseDOM && a();
    function h(a, b, c) {
      a.addEventListener(b, c, !1);
    }
    function i(a, b, c) {
      a.removeEventListener(b, c, !1);
    }
    c = {
      addEndEventListener: function (a, b) {
        if (g.length === 0) {
          window.setTimeout(b, 0);
          return;
        }
        g.forEach(function (c) {
          h(a, c, b);
        });
      },
      removeEndEventListener: function (a, b) {
        if (g.length === 0) return;
        g.forEach(function (c) {
          i(a, c, b);
        });
      },
    };
    e.exports = c;
  },
  null
);
__d(
  "MarketplacePDPCommercePostComponent_page$normalization.graphql",
  [
    "MarketplacePDPC2CDescriptionTranslationText_target$normalization.graphql",
    "MarketplacePDPMoreButton_target$normalization.graphql",
    "CometMarketplacePDPShareButton_target$normalization.graphql",
    "MarketplacePDPSaveButton_target$normalization.graphql",
    "CometMarketplaceRelistAndDeleteButton_target$normalization.graphql",
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "MarketplacePDPUserSellerComponent_user$normalization.graphql",
    "MarketplacePDPPageSellerComponent_page$normalization.graphql",
    "MarketplacePDPC2CChangeAvailabilityButton_target$normalization.graphql",
    "CometMarketplaceOfferShippingButton_target$normalization.graphql",
    "CometMarketplaceBoostListingButtonCond_target$normalization.graphql",
    "CometMarketplacePDPC2CInterestedButton_target$normalization.graphql",
    "CometMarketplacePDPShareButton_viewer$normalization.graphql",
    "MarketplacePDPSaveButton_viewer$normalization.graphql",
    "CometMarketplaceBoostListingButtonCond_viewer$normalization.graphql",
    "CometMarketplacePDPC2CInterestedButton_viewer$normalization.graphql",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        e = {
          alias: null,
          args: null,
          concreteType: "MessageThread",
          kind: "LinkedField",
          name: "seller_message_thread",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessageThreadKey",
              kind: "LinkedField",
              name: "thread_key",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "thread_fbid",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            c,
          ],
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        g = [c],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null,
        },
        i = { kind: "Variable", name: "scale", variableName: "scale" },
        j = [
          { kind: "Literal", name: "height", value: 50 },
          i,
          { kind: "Literal", name: "width", value: 50 },
        ],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        l = [k],
        m = [
          { kind: "Literal", name: "height", value: 160 },
          i,
          { kind: "Literal", name: "width", value: 160 },
        ],
        n = [
          { kind: "Literal", name: "height", value: 112 },
          i,
          { kind: "Literal", name: "width", value: 112 },
        ],
        o = [
          { kind: "Literal", name: "height", value: 64 },
          i,
          { kind: "Literal", name: "width", value: 64 },
        ];
      i = [
        { kind: "Literal", name: "height", value: 60 },
        i,
        { kind: "Literal", name: "width", value: 60 },
      ];
      var p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "MarketplacePDPCommercePostComponent_page$normalization",
        selections: [
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: "target",
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "marketplace_listing_renderable_target",
                plural: !1,
                selections: [
                  a,
                  c,
                  {
                    kind: "TypeDiscriminator",
                    abstractKey: "__isMarketplaceListingRenderable",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "redacted_description",
                    plural: !1,
                    selections: d,
                    storageKey: null,
                  },
                  {
                    fragment: b(
                      "MarketplacePDPC2CDescriptionTranslationText_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "inventory_count",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_sold",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_pending",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_viewer_seller",
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "messaging_enabled",
                        storageKey: null,
                      },
                      e,
                      {
                        alias: "messagingEnabled",
                        args: null,
                        kind: "ScalarField",
                        name: "messaging_enabled",
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceMessageable",
                    abstractKey: "__isMarketplaceMessageable",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "listing_is_rejected",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_seller_edit",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_seller_change_availability",
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceListingWithIntegrityStatus",
                    abstractKey: "__isMarketplaceListingWithIntegrityStatus",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Story",
                    kind: "LinkedField",
                    name: "story",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actors",
                        plural: !0,
                        selections: [
                          a,
                          f,
                          c,
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "category_type",
                                storageKey: null,
                              },
                            ],
                            type: "Page",
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      c,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "post_id",
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
                        name: "is_draft",
                        storageKey: null,
                      },
                      e,
                      {
                        alias: null,
                        args: null,
                        concreteType: "ProductItem",
                        kind: "LinkedField",
                        name: "product_item",
                        plural: !1,
                        selections: [
                          c,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "viewer_purchase_limit",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "MarketplacePromotedListingInfo",
                            kind: "LinkedField",
                            name: "promoted_listing",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "Page",
                                kind: "LinkedField",
                                name: "page_posted_from",
                                plural: !1,
                                selections: g,
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: "ProductItem",
                                kind: "LinkedField",
                                name: "product_item_override",
                                plural: !1,
                                selections: g,
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "BoostedComponent",
                            kind: "LinkedField",
                            name: "boosted_marketplace_listing",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "boost_id",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "boosting_status",
                                storageKey: null,
                              },
                              c,
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_checkout_enabled",
                        storageKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_buy_now_enabled",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_purchase_protected",
                            storageKey: null,
                          },
                        ],
                        type: "MarketplaceListingWithDeliveryOptions",
                        abstractKey:
                          "__isMarketplaceListingWithDeliveryOptions",
                      },
                    ],
                    type: "GroupCommerceProductItem",
                    abstractKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Group",
                    kind: "LinkedField",
                    name: "origin_group",
                    plural: !1,
                    selections: [c, f],
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "default_variant_listing",
                        plural: !1,
                        selections: [a, c],
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceListingWithVariants",
                    abstractKey: "__isMarketplaceListingWithVariants",
                  },
                  {
                    fragment: b(
                      "MarketplacePDPMoreButton_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  {
                    fragment: b(
                      "CometMarketplacePDPShareButton_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  {
                    fragment: b(
                      "MarketplacePDPSaveButton_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  h,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "marketplace_listing_title",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "formatted_price",
                    plural: !1,
                    selections: d,
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_copy_and_delete",
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceListingWithCopyAndDelete",
                    abstractKey: "__isMarketplaceListingWithCopyAndDelete",
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_live",
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "has_children",
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceListingWithChildListings",
                    abstractKey: "__isMarketplaceListingWithChildListings",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: "active_order",
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "most_recent_active_order_as_buyer",
                        plural: !1,
                        selections: [
                          a,
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: "order_id",
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: "NegotiablePriceOffer",
                                kind: "LinkedField",
                                name: "negotiable_price_checkout_offer",
                                plural: !1,
                                selections: g,
                                storageKey: null,
                              },
                            ],
                            type: "CHEXPaymentInvoice",
                            abstractKey: null,
                          },
                          c,
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "rebuy_order_receipt",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "c2c_shipping_eligible",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_shipping_offered",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "most_recent_active_order_as_buyer",
                        plural: !1,
                        selections: [a, c, h],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "MarketplaceShippableListingOrderSummary",
                        kind: "LinkedField",
                        name: "order_summaries",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "CHEXPaymentInvoice",
                            kind: "LinkedField",
                            name: "order",
                            plural: !1,
                            selections: [
                              c,
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "order_cancelation_state",
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "delivery_types",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "should_hide_pdp_shipping_content",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_cart_enabled",
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceListingWithDeliveryOptions",
                    abstractKey: "__isMarketplaceListingWithDeliveryOptions",
                  },
                  {
                    fragment: b(
                      "CometMarketplaceRelistAndDeleteButton_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "CurrencyAmount",
                    kind: "LinkedField",
                    name: "listing_price",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "amount",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "currency",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "marketplace_listing_seller",
                    plural: !1,
                    selections: [
                      a,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: "user_id",
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType:
                              "MarketplaceRatingsStatsByRoleSummary",
                            kind: "LinkedField",
                            name: "marketplace_ratings_stats_by_role",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "seller_ratings_are_private",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: "MarketplaceRatingsStatsByRole",
                                kind: "LinkedField",
                                name: "seller_stats",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "five_star_ratings_average",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "five_star_total_rating_count_by_role",
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            condition: "canViewCustomizedProfile",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "customized_profile",
                                plural: !1,
                                selections: [
                                  a,
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_customized",
                                    storageKey: null,
                                  },
                                  c,
                                ],
                                storageKey: null,
                              },
                            ],
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "join_time",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: [
                              { kind: "Literal", name: "first", value: 20 },
                            ],
                            concreteType: "MarketplaceRatingsStatsConnection",
                            kind: "LinkedField",
                            name: "marketplace_ratings_stats",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "MarketplaceRatingsStatsEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: "MarketplaceRatingsStat",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "count",
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "stat_type",
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: "marketplace_ratings_stats(first:20)",
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "MarketplaceMessageResponsiveness",
                            kind: "LinkedField",
                            name: "marketplace_message_responsiveness",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "TextWithEntities",
                                kind: "LinkedField",
                                name: "responsiveness_text",
                                plural: !1,
                                selections: [
                                  {
                                    args: null,
                                    fragment: b(
                                      "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                                    ),
                                    kind: "FragmentSpread",
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            fragment: b(
                              "MarketplacePDPUserSellerComponent_user$normalization.graphql"
                            ),
                            kind: "ClientComponent",
                          },
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: "page_id",
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "url",
                            storageKey: null,
                          },
                          {
                            fragment: b(
                              "MarketplacePDPPageSellerComponent_page$normalization.graphql"
                            ),
                            kind: "ClientComponent",
                          },
                        ],
                        type: "Page",
                        abstractKey: null,
                      },
                      c,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "MarketplaceUserProfile",
                                kind: "LinkedField",
                                name: "marketplace_user_profile",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: [
                                      {
                                        kind: "Literal",
                                        name: "cap",
                                        value: 501,
                                      },
                                    ],
                                    kind: "ScalarField",
                                    name: "c2c_orders_shipped",
                                    storageKey: "c2c_orders_shipped(cap:501)",
                                  },
                                  c,
                                ],
                                storageKey: null,
                              },
                            ],
                            type: "User",
                            abstractKey: null,
                          },
                        ],
                        type: "Profile",
                        abstractKey: "__isProfile",
                      },
                      f,
                      {
                        alias: null,
                        args: j,
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "profile_picture",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                      { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            condition: "canViewCustomizedProfile",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "customized_profile",
                                plural: !1,
                                selections: [
                                  a,
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "customized_commerce_name",
                                    storageKey: null,
                                  },
                                  c,
                                ],
                                storageKey: null,
                              },
                              {
                                alias:
                                  "commerce_profile_picture_with_fallback_160",
                                args: m,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "commerce_profile_picture_with_fallback",
                                plural: !1,
                                selections: l,
                                storageKey: null,
                              },
                              {
                                alias:
                                  "commerce_profile_picture_with_fallback_112",
                                args: n,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "commerce_profile_picture_with_fallback",
                                plural: !1,
                                selections: l,
                                storageKey: null,
                              },
                              {
                                alias:
                                  "commerce_profile_picture_with_fallback_64",
                                args: o,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "commerce_profile_picture_with_fallback",
                                plural: !1,
                                selections: l,
                                storageKey: null,
                              },
                              {
                                alias:
                                  "commerce_profile_picture_with_fallback_60",
                                args: i,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "commerce_profile_picture_with_fallback",
                                plural: !1,
                                selections: l,
                                storageKey: null,
                              },
                              {
                                alias:
                                  "commerce_profile_picture_with_fallback_50",
                                args: j,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "commerce_profile_picture_with_fallback",
                                plural: !1,
                                selections: l,
                                storageKey: null,
                              },
                            ],
                          },
                        ],
                        type: "ActorWithCustomizableCommerceProfile",
                        abstractKey: "__isActorWithCustomizableCommerceProfile",
                      },
                      {
                        alias: "profile_picture_160",
                        args: m,
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "profile_picture",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                      {
                        alias: "profile_picture_112",
                        args: n,
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "profile_picture",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                      {
                        alias: "profile_picture_64",
                        args: o,
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "profile_picture",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                      {
                        alias: "profile_picture_60",
                        args: i,
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "profile_picture",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                      {
                        alias: "profile_picture_50",
                        args: j,
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "profile_picture",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "primary_listing_photo",
                    plural: !1,
                    selections: [
                      a,
                      {
                        alias: "listing_image",
                        args: [
                          { kind: "Literal", name: "height", value: 132 },
                          {
                            kind: "Literal",
                            name: "sizing",
                            value: "cover-fill-cropped",
                          },
                          { kind: "Literal", name: "width", value: 132 },
                        ],
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "image",
                        plural: !1,
                        selections: l,
                        storageKey:
                          'image(height:132,sizing:"cover-fill-cropped",width:132)',
                      },
                      c,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_seller_business_onboarded",
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_buyer_make_checkout_offer",
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceListingWithCheckoutOffers",
                    abstractKey: "__isMarketplaceListingWithCheckoutOffers",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: [
                          {
                            kind: "Literal",
                            name: "callsite",
                            value: "COMET_PDP",
                          },
                        ],
                        concreteType: "CommerceIntegrityBuyerStatus",
                        kind: "LinkedField",
                        name: "commerce_integrity_buyer_status",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "checkout_disabled",
                            storageKey: null,
                          },
                        ],
                        storageKey:
                          'commerce_integrity_buyer_status(callsite:"COMET_PDP")',
                      },
                    ],
                    type: "MarketplaceListingWithBuyerIntegrityStatus",
                    abstractKey:
                      "__isMarketplaceListingWithBuyerIntegrityStatus",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "MarketplaceVacationMode",
                        kind: "LinkedField",
                        name: "vacation_mode",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "enabled",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "custom_vacation_mode_message",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceListingWithVacationMode",
                    abstractKey: "__isMarketplaceListingWithVacationMode",
                  },
                  {
                    fragment: b(
                      "MarketplacePDPC2CChangeAvailabilityButton_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  {
                    fragment: b(
                      "CometMarketplaceOfferShippingButton_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  {
                    fragment: b(
                      "CometMarketplaceBoostListingButtonCond_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  {
                    fragment: b(
                      "CometMarketplacePDPC2CInterestedButton_target$normalization.graphql"
                    ),
                    kind: "ClientComponent",
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "shipping_offered",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "legal_disclosure_impressum_url",
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "vehicle_seller_type",
                        storageKey: null,
                      },
                    ],
                    type: "MarketplaceVehicleListing",
                    abstractKey: "__isMarketplaceVehicleListing",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: [
                          {
                            kind: "Literal",
                            name: "surface",
                            value: "MARKETPLACE_PRODUCT_DETAILS",
                          },
                        ],
                        concreteType: "CommerceBadgesInformation",
                        kind: "LinkedField",
                        name: "commerce_badges_info",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "source_summary",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "other_source_summary",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: [
                              { kind: "Literal", name: "limit", value: 1 },
                            ],
                            concreteType: null,
                            kind: "LinkedField",
                            name: "badges",
                            plural: !0,
                            selections: [
                              a,
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "image_grayscale_uri",
                                storageKey: null,
                              },
                            ],
                            storageKey: "badges(limit:1)",
                          },
                        ],
                        storageKey:
                          'commerce_badges_info(surface:"MARKETPLACE_PRODUCT_DETAILS")',
                      },
                    ],
                    type: "MarketplaceListingWithBadges",
                    abstractKey: "__isMarketplaceListingWithBadges",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "listing_photos",
                    plural: !0,
                    selections: [
                      a,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "accessibility_caption",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: [
                          {
                            kind: "Literal",
                            name: "sizing",
                            value: "contain-fit",
                          },
                        ],
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "image",
                        plural: !1,
                        selections: [p, q, k],
                        storageKey: 'image(sizing:"contain-fit")',
                      },
                      c,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Video",
                    kind: "LinkedField",
                    name: "pre_recorded_videos",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "image",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                      q,
                      p,
                      {
                        alias: null,
                        args: [
                          { kind: "Literal", name: "quality", value: "HD" },
                        ],
                        kind: "ScalarField",
                        name: "playable_url",
                        storageKey: 'playable_url(quality:"HD")',
                      },
                      c,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_hidden",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "MarketplaceProductDetailsPage",
            abstractKey: "__isMarketplaceProductDetailsPage",
          },
          {
            alias: null,
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [
              {
                fragment: b(
                  "CometMarketplacePDPShareButton_viewer$normalization.graphql"
                ),
                kind: "ClientComponent",
              },
              {
                fragment: b(
                  "MarketplacePDPSaveButton_viewer$normalization.graphql"
                ),
                kind: "ClientComponent",
              },
              {
                fragment: b(
                  "CometMarketplaceBoostListingButtonCond_viewer$normalization.graphql"
                ),
                kind: "ClientComponent",
              },
              {
                fragment: b(
                  "CometMarketplacePDPC2CInterestedButton_viewer$normalization.graphql"
                ),
                kind: "ClientComponent",
              },
              {
                alias: null,
                args: null,
                concreteType: "MarketplaceNuxStates",
                kind: "LinkedField",
                name: "marketplace_nux_states",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "mbl_www_selling_view_nux_state",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "mbl_www_post_publish_nux_state",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "MarketplacePDPCommercePostComponent_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MarketplacePDPCommercePostComponent_page",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPProfileCommercePostRightColumn_page",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPC2CMediaViewer_page",
        },
        {
          alias: null,
          args: null,
          concreteType: "Viewer",
          kind: "LinkedField",
          name: "viewer",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "MarketplacePDPProfileCommercePostRightColumn_viewer",
            },
          ],
          storageKey: null,
        },
      ],
      type: "MarketplaceCommercePostProductDetailsPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplacePDPProfileCommercePostRightColumn_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MarketplacePDPProfileCommercePostRightColumn_page",
      selections: [
        {
          alias: "target",
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "marketplace_listing_renderable_target",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "MarketplacePDPProfileCommercePostDetails_target",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "MarketplacePDPC2CRightColumnFixed_target",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "MarketplacePDPC2CSellerInfo_detail",
            },
          ],
          storageKey: null,
        },
      ],
      type: "MarketplaceProductDetailsPage",
      abstractKey: "__isMarketplaceProductDetailsPage",
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplacePDPProfileCommercePostRightColumn_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MarketplacePDPProfileCommercePostRightColumn_viewer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPProfileCommercePostDetails_viewer",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPC2CRightColumnFixed_viewer",
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
  "MarketplacePDPProfileCommercePostCreationInfo_target.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MarketplacePDPProfileCommercePostCreationInfo_target",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null,
        },
      ],
      type: "MarketplaceListingRenderable",
      abstractKey: "__isMarketplaceListingRenderable",
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplacePDPProfileCommercePostDetails_target.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MarketplacePDPProfileCommercePostDetails_target",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "redacted_description",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPDescriptionComponent_target",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPC2CActionButtons_target",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPProfileCommercePostHeader_target",
        },
      ],
      type: "MarketplaceListingRenderable",
      abstractKey: "__isMarketplaceListingRenderable",
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplacePDPProfileCommercePostDetails_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MarketplacePDPProfileCommercePostDetails_viewer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPC2CActionButtons_viewer",
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
  "MarketplacePDPProfileCommercePostHeader_target.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MarketplacePDPProfileCommercePostHeader_target",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "MarketplacePDPProfileCommercePostCreationInfo_target",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "marketplace_listing_title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "formatted_price",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_seller",
          storageKey: null,
        },
      ],
      type: "MarketplaceListingRenderable",
      abstractKey: "__isMarketplaceListingRenderable",
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplacePDPProfileCommercePostCreationInfo.react",
  [
    "fbt",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "MarketplacePDPProfileCommercePostCreationInfo_target.graphql",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "MarketplacePDPProfileCommercePostCreationInfo_target.graphql"
            )),
        a.target
      );
      a = a == null ? void 0 : a.creation_time;
      if (a == null) return null;
      a = h._("Listed {relative timestamp}", [
        h._param(
          "relative timestamp",
          j.jsx(c("CometRelativeTimestamp.react"), { date: new Date(a * 1e3) })
        ),
      ]);
      return j.jsx("div", {
        className: "n1l5q3vz bi6gxh9e",
        children: j.jsx(c("TetraText.react"), { type: "meta1", children: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MarketplacePDPProfileCommercePostHeader.react",
  [
    "CometRelay",
    "MarketplacePDPProfileCommercePostCreationInfo.react",
    "MarketplacePDPProfileCommercePostHeader_target.graphql",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("MarketplacePDPProfileCommercePostHeader_target.graphql")),
        a.target
      );
      var f = a == null ? void 0 : a.marketplace_listing_title;
      e =
        a == null ? void 0 : (e = a.formatted_price) == null ? void 0 : e.text;
      var g = (a == null ? void 0 : a.is_viewer_seller) === !0;
      return i.jsxs("div", {
        className: "dati1w0a qt6c0cv9 hv4rvrfc discj3wi",
        "data-testid": void 0,
        children: [
          i.jsx(c("TetraText.react"), {
            type: "headlineEmphasized1",
            children: f,
          }),
          g
            ? null
            : i.jsx("div", {
                className: "n1l5q3vz",
                children: i.jsx(c("TetraText.react"), {
                  type: "headline3",
                  children: e,
                }),
              }),
          i.jsx(c("MarketplacePDPProfileCommercePostCreationInfo.react"), {
            target: a,
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
  "MarketplacePDPProfileCommercePostDetails.react",
  [
    "fbt",
    "CometRelay",
    "CometUnitHeader.react",
    "MarketplacePDPC2CActionButtons.hybrid",
    "MarketplacePDPDescriptionComponent.hybrid",
    "MarketplacePDPProfileCommercePostDetails_target.graphql",
    "MarketplacePDPProfileCommercePostDetails_viewer.graphql",
    "MarketplacePDPProfileCommercePostHeader.react",
    "MarketplacePDPRHCUnit.hybrid",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b(
                "MarketplacePDPProfileCommercePostDetails_viewer.graphql"
              )),
          a.viewer
        );
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("MarketplacePDPProfileCommercePostDetails_target.graphql")),
        a.target
      );
      f = k.jsx(c("MarketplacePDPC2CActionButtons.hybrid"), {
        target: a,
        viewer: f,
      });
      var g =
        a != null
          ? k.jsx(c("MarketplacePDPProfileCommercePostHeader.react"), {
              target: a,
            })
          : null;
      e =
        (a == null
          ? void 0
          : (e = a.redacted_description) == null
          ? void 0
          : e.text) || "";
      e =
        e !== ""
          ? k.jsx(c("MarketplacePDPDescriptionComponent.hybrid"), {
              description: e,
              target: a,
            })
          : null;
      a = h._("Details");
      return k.jsxs("div", {
        "data-testid": void 0,
        children: [
          g,
          f,
          k.jsx(c("MarketplacePDPRHCUnit.hybrid"), {
            content: k.jsx("div", {
              className: "dati1w0a qt6c0cv9 hv4rvrfc jb3vyjys",
              children: e,
            }),
            title: k.jsx(c("CometUnitHeader.react"), { headline: a, level: 3 }),
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
  "MarketplacePDPProfileCommercePostRightColumn.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometScrollView.react",
    "JSResourceForInteraction",
    "MarketplaceMediaQueryWrapper.hybrid",
    "MarketplacePDPC2CRightColumnFixed.hybrid",
    "MarketplacePDPC2CSellerInfo.hybrid",
    "MarketplacePDPProfileCommercePostDetails.react",
    "MarketplacePDPProfileCommercePostRightColumn_page.graphql",
    "MarketplacePDPProfileCommercePostRightColumn_viewer.graphql",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("MarketplacePDPUFI.react").__setRef(
          "MarketplacePDPProfileCommercePostRightColumn.react"
        )
      ),
      l = { rhcScroll: { width: "k4urcfbm" } };
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "MarketplacePDPProfileCommercePostRightColumn_viewer.graphql"
            )),
        a.viewer
      );
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "MarketplacePDPProfileCommercePostRightColumn_page.graphql"
            )),
        a.page
      );
      var f = a.target;
      return f == null
        ? null
        : j.jsxs(j.Fragment, {
            children: [
              j.jsxs(c("CometScrollView.react"), {
                "data-testid": void 0,
                showsHorizontalScrollIndicator: !1,
                xstyle: l.rhcScroll,
                children: [
                  j.jsx(c("MarketplacePDPProfileCommercePostDetails.react"), {
                    target: f,
                    viewer: e,
                  }),
                  j.jsx(c("MarketplacePDPC2CSellerInfo.hybrid"), { detail: f }),
                  f.id != null
                    ? j.jsx(c("CometPlaceholder.react"), {
                        fallback: j.jsx("span", {}),
                        children: j.jsx(k, { listingId: f.id }),
                      })
                    : null,
                ],
              }),
              j.jsx(c("MarketplaceMediaQueryWrapper.hybrid"), {
                only: "desktop",
                children: function (a) {
                  return j.jsx(c("MarketplacePDPC2CRightColumnFixed.hybrid"), {
                    target: f,
                    viewer: e,
                  });
                },
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
  "MarketplacePDPCommercePostComponent.react",
  [
    "CometRelay",
    "MarketplacePDPC2CMediaViewer.hybrid",
    "MarketplacePDPCommercePostComponent_page.graphql",
    "MarketplacePDPComponent.react",
    "MarketplacePDPProfileCommercePostRightColumn.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("MarketplacePDPCommercePostComponent_page.graphql"));
    function a(a) {
      a = a.page;
      a = d("CometRelay").useFragment(j, a);
      var b = a.viewer;
      return i.jsx(c("MarketplacePDPComponent.react"), {
        mediaViewer: i.jsx(c("MarketplacePDPC2CMediaViewer.hybrid"), {
          page: a,
        }),
        rightColumn: i.jsx(
          c("MarketplacePDPProfileCommercePostRightColumn.react"),
          { page: a, viewer: b }
        ),
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XUIOverlayFooter.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(
          "div",
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(
              this.props.className,
              "_5lnf uiOverlayFooter"
            ),
            children: this.props.children,
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "InstantGamesGameState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "initial";
    b = "loading";
    c = "ready";
    d = "playing";
    e = "gameover";
    f.INITIAL = a;
    f.LOADING = b;
    f.READY = c;
    f.PLAYING = d;
    f.GAMEOVER = e;
  },
  66
);
__d(
  "CSSFade",
  [
    "cx",
    "invariant",
    "CSS",
    "DataStore",
    "Event",
    "Style",
    "requestAnimationFrameAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "css-fade-animation",
      j = "css-show-animation",
      k = "CSSFade_hide",
      l = "CSSFade_show";
    a = document.createElement("div").animate !== void 0;
    var m = { cancel: function () {} };
    function n(a, c) {
      a != null || h(0, 5875);
      a = b("DataStore").get(a, c);
      a && a.cancel();
      return a;
    }
    function o(a, b, c) {
      a =
        ((a = a) != null ? ((a = a.style) != null ? a.animation : a) : a) || "";
      b = b + "s " + c;
      a.length > 5 && (b = a.slice(0, -1) + (", " + b));
      return b;
    }
    function p(a, b) {
      a =
        ((a = a) != null ? ((a = a.style) != null ? a.animation : a) : a) || "";
      a = a.split(",");
      var c = a.findIndex(function (a) {
        return a.indexOf(b) > -1;
      });
      c !== -1 && a.splice(c, 1);
      return a.join(",");
    }
    c = {
      show: function (a, c) {
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration / 1e3 : 0.3;
        n(a, i);
        n(a, j);
        b("CSS").removeClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
        b("requestAnimationFrameAcrossTransitions")(function () {
          a.style.animation = o(a, d, l);
        });
        var e = b("Event").listen(a, "animationend", function () {
            c.callback && c.callback(), (a.style.animation = p(a, l));
          }),
          f = {
            cancel: function () {
              (a.style.animation = p(a, l)),
                e.remove(),
                (f.cancel = function () {});
            },
          };
        b("DataStore").set(a, j, f);
        return f;
      },
      hide: function (a, c) {
        c === void 0 && (c = {});
        var d = function () {
          b("CSS").addClass(a, c.invisible ? "invisible_elem" : "hidden_elem"),
            c.callback && c.callback(),
            (a.style.animation = p(a, k));
        };
        if (c.simple) {
          d();
          return m;
        }
        var e = c.duration != null ? c.duration / 1e3 : 0.3;
        n(a, j);
        n(a, i);
        b("requestAnimationFrameAcrossTransitions")(function () {
          a.style.animation = o(a, e, k);
        });
        var f = b("Event").listen(a, "animationend", d),
          g = {
            cancel: function () {
              (a.style.animation = p(a, k)),
                f.remove(),
                (g.cancel = function () {});
            },
          };
        b("DataStore").set(a, i, g);
        return g;
      },
    };
    d = {
      show: function (a, c) {
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration : 300;
        n(a, i);
        n(a, j);
        b("CSS").removeClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
        b("Style").set(a, "opacity", "1");
        var e = c.peekStateFade ? "0.6" : "0";
        e = a.animate([{ opacity: e }, { opacity: "1.0" }], { duration: d });
        c.callback && (e.onfinish = c.callback);
        b("DataStore").set(a, j, e);
        return e;
      },
      hide: function (a, c) {
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration : 300;
        n(a, j);
        if (c.simple === !0) {
          b("CSS").addClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
          return m;
        } else {
          n(a, i);
          b("Style").set(a, "opacity", "0");
          var e = c.peekStateFade ? "0.4" : "0";
          e = a.animate([{ opacity: "1.0" }, { opacity: e }], { duration: d });
          e.onfinish = function () {
            b("CSS").addClass(
              a,
              c.invisible ? "invisible_elem" : "hidden_elem"
            ),
              c.callback && c.callback();
          };
          b("DataStore").set(a, i, e);
          return e;
        }
      },
    };
    e.exports = a ? d : c;
  },
  null
);
__d(
  "LayerFadeOnHide",
  [
    "invariant",
    "CSSFade",
    "Layer",
    "SubscriptionsHandler",
    "UserAgent_DEPRECATED",
    "clearTimeout",
    "emptyFunction",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        (this._layer = a),
          (this._subscriptionsHandler = new (c("SubscriptionsHandler"))());
      }
      var b = a.prototype;
      b.enable = function () {
        if (d("UserAgent_DEPRECATED").ie() < 9) return;
        this._subscription = this._layer.subscribe(
          "starthide",
          this._handleStartHide.bind(this)
        );
      };
      b.disable = function () {
        this._subscription &&
          (this._subscription.unsubscribe(), (this._subscription = null)),
          this._subscriptionsHandler.release();
      };
      b._getDuration = function () {
        return 150;
      };
      b._handleStartHide = function () {
        var a = !0,
          b = c("Layer").subscribe("show", function () {
            b.unsubscribe(), (a = !1);
          }),
          d = c("setTimeoutAcrossTransitions")(
            function () {
              var c = this;
              b.unsubscribe();
              b = null;
              var d = function () {
                c._layer.finishHide();
              };
              a ? this._animate(d) : d();
            }.bind(this),
            0
          );
        this._subscriptionsHandler.addSubscriptions({
          remove: function () {
            c("clearTimeout")(d);
          },
        });
        return !1;
      };
      b._animate = function (a) {
        var b = this._layer.getRoot();
        b != null || h(0, 70);
        c("CSSFade").hide(b, {
          callback: function () {
            a();
          },
          duration: this._getDuration(),
        });
      };
      a.forDuration = function (b) {
        var d = (function (b) {
          babelHelpers.inheritsLoose(a, b);
          function a() {
            return b.apply(this, arguments) || this;
          }
          return a;
        })(a);
        d.prototype._getDuration = c("emptyFunction").thatReturns(b);
        return d;
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    g["default"] = a;
  },
  98
);
__d(
  "LayerHideOnBlur",
  ["LayerHideSources", "requestAnimationFrame"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        (this._subscriptions = [
          this._layer.subscribe("show", this._attach.bind(this)),
          this._layer.subscribe("hide", this._detach.bind(this)),
        ]),
          this._layer.isShown() && this._attach();
      };
      b.disable = function () {
        this._detach();
        while (this._subscriptions && this._subscriptions.length)
          this._subscriptions.pop().unsubscribe();
        this._subscriptions = null;
      };
      b._detach = function () {
        this._onBlur && this._onBlur.unsubscribe(), (this._onBlur = null);
      };
      b._attach = function () {
        var a = this;
        this._onBlur = this._layer.subscribe("blur", function () {
          c("requestAnimationFrame")(function () {
            a._layer.hide(c("LayerHideSources").BLUR);
          });
          return !1;
        });
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: null, _onBlur: null });
    g["default"] = a;
  },
  98
);
__d(
  "LayerHideOnEscape",
  ["Event", "Keys", "LayerHideSources"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscription = this._layer.subscribe(
          "key",
          this.handle.bind(this)
        );
      };
      b.disable = function () {
        this._subscription != null && this._subscription.unsubscribe(),
          (this._subscription = null);
      };
      b.handle = function (a, b) {
        if (c("Event").getKeyCode(b) === c("Keys").ESC) {
          this._layer.hide(c("LayerHideSources").ESCAPE);
          return !1;
        }
        return void 0;
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    g["default"] = a;
  },
  98
);
__d(
  "CloudGamingLoadingEventRecorder",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [
      "CLIENT_GAME_START_QS_PLAYER",
      "CLIENT_GAME_START_PRELOAD",
      "TOS_SCREEN_INIT",
      "TOS_SCREEN_APPEAR",
      "TOS_ACCEPT_CLICK",
      "TOS_ACCEPT_COMPLETE",
      "CLIENT_GAME_START_LOAD",
    ];
    a = [
      "CLIENT_GAME_START_WEBRTC",
      "PEER_CONNECTION_CREATED",
      "CLIENT_SEND_SDP_OFFER",
      "CLIENT_RECEIVE_SDP_ANSWER",
      "PEER_CONNECTION_CONNECTED",
      "DATA_CHANNEL_OPENED",
      "GAME_READY",
    ];
    var i = h.concat(a);
    b = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.getEventTimeLogging = function () {
        var a = {};
        for (
          var b = this.$1.entries(),
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          a[f] = e.toString();
        }
        return a;
      };
      b.recordEventFromLoggingData = function (a) {
        if (a)
          for (var b = 0; b < h.length; b++) {
            var c = h[b],
              d = a.has(c) ? Number(a.get(c)) : null;
            d !== null && j.recordEvent(c, d);
          }
      };
      b.recordEvent = function (a, b) {
        i.includes(a) &&
          (a === i[0] && this.$1.clear(), this.$1.has(a) || this.$1.set(a, b));
      };
      b.getStartTime = function () {
        var a = i[0];
        a = this.$1.get(a);
        return a !== void 0 ? a : 0;
      };
      b.getEventTimestamp = function (b) {
        var d = this.$1.get(b);
        if (d !== void 0) return d;
        c("FBLogger")(a.name).mustfix("Event %s has not happened", b);
        return 0;
      };
      b.getEventLatency = function (a) {
        var b = new Map();
        if (i.includes(a)) {
          var c = this.$1.get(a);
          if (c === void 0) return b;
          for (
            var d = this.$1.keys(),
              e = Array.isArray(d),
              f = 0,
              d = e
                ? d
                : d[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var g;
            if (e) {
              if (f >= d.length) break;
              g = d[f++];
            } else {
              f = d.next();
              if (f.done) break;
              g = f.value;
            }
            g = g;
            if (g !== a) {
              var h = this.$1.get(g);
              if (h === void 0) continue;
              h = c - h;
              b.set("since_" + g, h.toString());
            }
          }
        }
        return b;
      };
      b.getLoadingEventSummary = function () {
        var a = new Map(),
          b = this.getStartTime();
        for (
          var c = this.$1.entries(),
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          var g = f[0];
          f = f[1];
          f = f - b;
          a.set("ts_" + g, f.toString());
        }
        return a;
      };
      return a;
    })();
    var j = new b();
    d = j;
    g["default"] = d;
  },
  98
);
__d(
  "CloudGamingEventsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743372");
    c = b("FalcoLoggerInternal").create("cloud_gaming_events", a);
    e.exports = c;
  },
  null
);
__d(
  "CloudGamingSessionEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743373");
    c = b("FalcoLoggerInternal").create("cloud_gaming_session_event", a);
    e.exports = c;
  },
  null
);
__d(
  "CloudGamingLogUtils",
  [
    "CloudGamingEventsFalcoEvent",
    "CloudGamingLoadingEventRecorder",
    "CloudGamingSessionEventFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e, f, g) {
      if (a == null) return;
      var h = {
        native_player: "false",
        untrusted_client_timestamp_ms: Date.now().toString(),
      };
      if (g !== null && g !== void 0)
        for (
          var g = g,
            i = Array.isArray(g),
            j = 0,
            g = i
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var k;
          if (i) {
            if (j >= g.length) break;
            k = g[j++];
          } else {
            j = g.next();
            if (j.done) break;
            k = j.value;
          }
          k = k;
          var l = k[0];
          k = k[1];
          h[l] = k;
        }
      c("CloudGamingSessionEventFalcoEvent").log(function () {
        var c;
        return {
          app_id: (c = b) != null ? c : null,
          client_app_id: (c = e) != null ? c : null,
          cloud_game_id_override: d,
          event: a,
          extra_data: h,
          session_id: (c = f) != null ? c : "",
          source: "JS",
        };
      });
    }
    function b(a, b, d, e, f) {
      var g = c("CloudGamingLoadingEventRecorder").getEventTimestamp(a),
        h = c("CloudGamingLoadingEventRecorder").getEventLatency(a),
        i = { native_player: "false" };
      for (
        var h = h.entries(),
          j = Array.isArray(h),
          k = 0,
          h = j
            ? h
            : h[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var l;
        if (j) {
          if (k >= h.length) break;
          l = h[k++];
        } else {
          k = h.next();
          if (k.done) break;
          l = k.value;
        }
        l = l;
        var m = l[0];
        l = l[1];
        i[m] = l;
      }
      c("CloudGamingEventsFalcoEvent").log(function () {
        return {
          app_id: b,
          cloud_game_id_override: d,
          entry_point: e,
          event: a,
          event_occur_time_ms: g.toString(),
          extra_data: i,
          session_id: f,
          source: "JS",
        };
      });
    }
    g.logEvent = a;
    g.logEventWithBreakdownLatency = b;
  },
  98
);
__d(
  "InstantGamesPWAUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g() {
      return window.navigator.standalone;
    }
    function a() {
      return g() ? "PWA" : "MSITE";
    }
    f.isInPWA = g;
    f.getGamingPWASurface = a;
  },
  66
);
__d(
  "XUIText.react",
  ["cx", "joinClasses", "prop-types", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.getAriaLevel = function (a, b) {
        if (a === "header1") return 1;
        else if (a === "header2") return 2;
        else if (a === "header3") return 3;
        else if (a === "header4") return 4;
        return b;
      };
      d.render = function () {
        var a = this.props,
          c = a.color,
          d = a.palette,
          e = a.type,
          f = a.size,
          g = a.weight,
          h = a.display,
          j = a.headingLevel,
          k = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "color",
          "palette",
          "type",
          "size",
          "weight",
          "display",
          "headingLevel",
          "children",
        ]);
        e =
          (e === "serif" ? "_5s6c" : "") +
          (f === "small" ? " _50f3" : "") +
          (f === "medium" ? " _50f4" : "") +
          (f === "large" ? " _50f5" : "") +
          (f === "xlarge" || f === "xlarge_DEPRECATED" ? " _50f6" : "") +
          (g === "bold" ? " _50f7" : "") +
          (g === "normal" ? " _5kx5" : "") +
          (f === "display" ? " _2iei" : "") +
          (f === "header1" ? " _2iej" : "") +
          (f === "header2" ? " _2iek" : "") +
          (f === "header3" ? " _2iel" : "") +
          (f === "header4" ? " _2iem" : "") +
          (f === "body1" ? " _2ien" : "") +
          (f === "body2" ? " _2ieo" : "") +
          (f === "body3" ? " _2iep" : "") +
          (f === "meta1" ? " _2ieq" : "") +
          (c === "blueLink" ? " _rzx" : "") +
          (c === "white" ? " _2ier" : "") +
          (c === "highlight" ? " _1hk0" : "") +
          (c === "positive" ? " _2iet" : "") +
          (c === "negative" ? " _2ieu" : "") +
          (d !== "dark" && c === "placeholder" ? " _rzy" : "") +
          (d !== "dark" && c === "primary" ? " _2iev" : "") +
          (d !== "dark" && c === "secondary" ? " _2iex" : "") +
          (d !== "dark" && c === "disabled" ? " _2iey" : "") +
          (d === "dark" && c === "primary" ? " _2iez" : "") +
          (d === "dark" && c === "secondary" ? " _2ie-" : "") +
          (d === "dark" && c === "disabled" ? " _2ie_" : "");
        g = this.getAriaLevel(f, j);
        g !== void 0 &&
          g !== null &&
          (a = babelHelpers["extends"]({}, a, {
            role: "heading",
            "aria-level": "" + g,
          }));
        return h === "block"
          ? i.jsx(
              "div",
              babelHelpers["extends"]({}, a, {
                className: b("joinClasses")(this.props.className, e),
                children: k,
              })
            )
          : i.jsx(
              "span",
              babelHelpers["extends"]({}, a, {
                className: b("joinClasses")(this.props.className, e),
                children: k,
              })
            );
      };
      return c;
    })(i.Component);
    a.propTypes = {
      color: b("prop-types").oneOf([
        "primary",
        "secondary",
        "blueLink",
        "placeholder",
        "disabled",
        "white",
        "highlight",
        "positive",
        "negative",
      ]),
      display: b("prop-types").oneOf(["inline", "block"]),
      headingLevel: b("prop-types").oneOf([1, 2, 3, 4, 5, 6]),
      palette: b("prop-types").oneOf(["light", "dark"]),
      size: b("prop-types").oneOf([
        "small",
        "medium",
        "large",
        "xlarge",
        "xlarge_DEPRECATED",
        "inherit",
        "display",
        "header1",
        "header2",
        "header3",
        "header4",
        "body1",
        "body2",
        "body3",
        "meta1",
      ]),
      type: b("prop-types").oneOf(["serif", "inherit"]),
      weight: b("prop-types").oneOf(["bold", "inherit", "normal"]),
    };
    a.defaultProps = {
      type: "inherit",
      size: "inherit",
      weight: "inherit",
      display: "inline",
    };
    e.exports = a;
  },
  null
);
__d(
  "isFalsey",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a == null || !Boolean(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "firstx",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        return d;
      }
      h(0, 1145);
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometAboutAppSectionYearOverviewItem_yearOverviewItem.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometAboutAppSectionYearOverviewItem_yearOverviewItem",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Literal", name: "color", value: "fds-tertiary-icon" },
              { kind: "Variable", name: "scale", variableName: "scale" },
              { kind: "Literal", name: "size", value: "24" },
              { kind: "Literal", name: "variant", value: "filled" },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon",
            plural: !1,
            selections: [
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
                name: "scale",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "width",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "title",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "ProfileCometTextWithEntities_textWithEntities",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "title",
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "node",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "can_viewer_delete",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "default_actor",
                    plural: !1,
                    selections: [a],
                    storageKey: null,
                  },
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      concreteType: "StoryAttachment",
                      kind: "LinkedField",
                      name: "attachments",
                      plural: !0,
                      selections: [
                        {
                          kind: "RequiredField",
                          field: {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "style_infos",
                            plural: !0,
                            selections: [
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    kind: "RequiredField",
                                    field: {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "icon_id",
                                      storageKey: null,
                                    },
                                    action: "LOG",
                                    path: "node.attachments.style_infos.icon_id",
                                  },
                                ],
                                type: "LifeEventAttachmentStyleInfo",
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          action: "LOG",
                          path: "node.attachments.style_infos",
                        },
                      ],
                      storageKey: null,
                    },
                    action: "LOG",
                    path: "node.attachments",
                  },
                ],
                type: "Story",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "site", value: "www" }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"www")',
          },
        ],
        type: "TimelineYearOverviewItem",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometAboutAppSectionLifeEventsRendererRefetchQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "id" },
        c = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        d = [{ kind: "Variable", name: "id", variableName: "id" }],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: "Fragment",
          metadata: null,
          name: "ProfileCometAboutAppSectionLifeEventsRendererRefetchQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "ProfileCometAboutAppSectionLifeEventsRenderer_user",
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
          argumentDefinitions: [c, a],
          kind: "Operation",
          name: "ProfileCometAboutAppSectionLifeEventsRendererRefetchQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                e,
                f,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "with_units",
                          value: "highlights",
                        },
                      ],
                      concreteType: "TimelineSectionsConnection",
                      kind: "LinkedField",
                      name: "timeline_sections",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "TimelineSection",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            f,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "year",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Literal",
                                  name: "with_life_events",
                                  value: !0,
                                },
                              ],
                              concreteType: "TimelineYearOverview",
                              kind: "LinkedField",
                              name: "year_overview",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "TimelineYearOverviewItemsConnection",
                                  kind: "LinkedField",
                                  name: "items",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TimelineYearOverviewItem",
                                      kind: "LinkedField",
                                      name: "nodes",
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
                                            e,
                                            f,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "can_viewer_delete",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "default_actor",
                                                  plural: !1,
                                                  selections: [e, f],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryAttachment",
                                                  kind: "LinkedField",
                                                  name: "attachments",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "style_infos",
                                                      plural: !0,
                                                      selections: [
                                                        e,
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "icon_id",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          type: "LifeEventAttachmentStyleInfo",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [f],
                                                          type: "Node",
                                                          abstractKey:
                                                            "__isNode",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "Story",
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "color",
                                              value: "fds-tertiary-icon",
                                            },
                                            {
                                              kind: "Variable",
                                              name: "scale",
                                              variableName: "scale",
                                            },
                                            {
                                              kind: "Literal",
                                              name: "size",
                                              value: "24",
                                            },
                                            {
                                              kind: "Literal",
                                              name: "variant",
                                              value: "filled",
                                            },
                                          ],
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "icon",
                                          plural: !1,
                                          selections: [
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
                                              name: "scale",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "uri",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "width",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextWithEntities",
                                          kind: "LinkedField",
                                          name: "title",
                                          plural: !1,
                                          selections: [
                                            {
                                              args: null,
                                              fragment: b(
                                                "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                                              ),
                                              kind: "FragmentSpread",
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "site",
                                              value: "www",
                                            },
                                          ],
                                          kind: "ScalarField",
                                          name: "url",
                                          storageKey: 'url(site:"www")',
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey:
                                "year_overview(with_life_events:true)",
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: 'timeline_sections(with_units:"highlights")',
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4439122166154204",
          metadata: {},
          name: "ProfileCometAboutAppSectionLifeEventsRendererRefetchQuery",
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
  "ProfileCometAboutAppSectionLifeEventsRenderer_styleRenderer$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometAboutAppSectionLifeEventsRenderer_styleRenderer$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "with_units", value: "highlights" },
                ],
                concreteType: "TimelineSectionsConnection",
                kind: "LinkedField",
                name: "timeline_sections",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "TimelineSection",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [
                      a,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "year",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: [
                          {
                            kind: "Literal",
                            name: "with_life_events",
                            value: !0,
                          },
                        ],
                        concreteType: "TimelineYearOverview",
                        kind: "LinkedField",
                        name: "year_overview",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "TimelineYearOverviewItemsConnection",
                            kind: "LinkedField",
                            name: "items",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "TimelineYearOverviewItem",
                                kind: "LinkedField",
                                name: "nodes",
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
                                      a,
                                      {
                                        kind: "InlineFragment",
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "can_viewer_delete",
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "default_actor",
                                            plural: !1,
                                            selections: [c, a],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: "StoryAttachment",
                                            kind: "LinkedField",
                                            name: "attachments",
                                            plural: !0,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "style_infos",
                                                plural: !0,
                                                selections: [
                                                  c,
                                                  {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "icon_id",
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    type: "LifeEventAttachmentStyleInfo",
                                                    abstractKey: null,
                                                  },
                                                  {
                                                    kind: "InlineFragment",
                                                    selections: [a],
                                                    type: "Node",
                                                    abstractKey: "__isNode",
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        type: "Story",
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: [
                                      {
                                        kind: "Literal",
                                        name: "color",
                                        value: "fds-tertiary-icon",
                                      },
                                      {
                                        kind: "Variable",
                                        name: "scale",
                                        variableName: "scale",
                                      },
                                      {
                                        kind: "Literal",
                                        name: "size",
                                        value: "24",
                                      },
                                      {
                                        kind: "Literal",
                                        name: "variant",
                                        value: "filled",
                                      },
                                    ],
                                    concreteType: "Image",
                                    kind: "LinkedField",
                                    name: "icon",
                                    plural: !1,
                                    selections: [
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
                                        name: "scale",
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "uri",
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "width",
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: "TextWithEntities",
                                    kind: "LinkedField",
                                    name: "title",
                                    plural: !1,
                                    selections: [
                                      {
                                        args: null,
                                        fragment: b(
                                          "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                                        ),
                                        kind: "FragmentSpread",
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: [
                                      {
                                        kind: "Literal",
                                        name: "site",
                                        value: "www",
                                      },
                                    ],
                                    kind: "ScalarField",
                                    name: "url",
                                    storageKey: 'url(site:"www")',
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: "year_overview(with_life_events:true)",
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'timeline_sections(with_units:"highlights")',
              },
              a,
            ],
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometAboutAppSectionLifeEventsRenderer_styleRenderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometAboutAppSectionLifeEventsRenderer_styleRenderer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "ProfileCometAboutAppSectionLifeEventsRenderer_user",
            },
          ],
          storageKey: null,
        },
      ],
      type: "TimelineAppCollectionAboutLifeEventsRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometAboutAppSectionLifeEventsRenderer_user.graphql",
  ["ProfileCometAboutAppSectionLifeEventsRendererRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: {
          refetch: {
            connection: null,
            fragmentPathInResult: ["node"],
            operation: b(
              "ProfileCometAboutAppSectionLifeEventsRendererRefetchQuery.graphql"
            ),
            identifierField: "id",
          },
        },
        name: "ProfileCometAboutAppSectionLifeEventsRenderer_user",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Literal", name: "with_units", value: "highlights" },
            ],
            concreteType: "TimelineSectionsConnection",
            kind: "LinkedField",
            name: "timeline_sections",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TimelineSection",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "year",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "with_life_events", value: !0 },
                    ],
                    concreteType: "TimelineYearOverview",
                    kind: "LinkedField",
                    name: "year_overview",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "TimelineYearOverviewItemsConnection",
                        kind: "LinkedField",
                        name: "items",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "TimelineYearOverviewItem",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [a],
                                storageKey: null,
                              },
                              {
                                args: null,
                                kind: "FragmentSpread",
                                name: "ProfileCometAboutAppSectionYearOverviewItem_yearOverviewItem",
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: "year_overview(with_life_events:true)",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: 'timeline_sections(with_units:"highlights")',
          },
          a,
        ],
        type: "User",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometAboutAppSectionYearOverviewItem.react",
  [
    "fbt",
    "ix",
    "Actor",
    "CometLink.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "ImageIconSource",
    "ProfileCometAboutAppSectionYearOverviewItem_yearOverviewItem.graphql",
    "ProfileCometAboutExperienceWrapper.react",
    "ProfileCometTextWithEntities.react",
    "TetraIcon.react",
    "TetraTextPairing.react",
    "TintableIconSource",
    "coerceRelayImage",
    "cometPushToast",
    "fbicon",
    "orEmptyArray",
    "react",
    "useCometFeedStoryDeleteMutation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useCallback;
    function a(a) {
      var e,
        f = a.refetch;
      a = a.yearOverviewItem;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "ProfileCometAboutAppSectionYearOverviewItem_yearOverviewItem.graphql"
            )),
        a
      );
      var g = d("Actor").useActor();
      g = g[0];
      var m = a == null ? void 0 : (e = a.node) == null ? void 0 : e.id,
        n =
          (a == null
            ? void 0
            : (e = a.node) == null
            ? void 0
            : e.can_viewer_delete) === !0,
        o =
          (e =
            a == null
              ? void 0
              : (e = a.node) == null
              ? void 0
              : (e = e.default_actor) == null
              ? void 0
              : e.id) != null
            ? e
            : g;
      e = a == null ? void 0 : a.icon;
      g = a == null ? void 0 : a.title;
      var p = a == null ? void 0 : a.url;
      a = a == null ? void 0 : a.node;
      var q = c("useCometFeedStoryDeleteMutation")(),
        r = l(
          function () {
            if (m == null || o == null || !n) return;
            q(
              { story_id: m, story_location: "PROFILE_TILE" },
              { groupID: null, moduleID: null, ownerID: o, unitID: null },
              function () {
                f(),
                  d("cometPushToast").cometPushSimpleToast(
                    h._("Your post has been deleted.")
                  );
              },
              function () {
                d("cometPushToast").cometPushErrorToast({
                  message: h._(
                    "There was an error deleting your post. Try again."
                  ),
                });
              }
            );
          },
          [n, q, o, f, m]
        );
      if (g == null) return null;
      a = c("orEmptyArray")(a == null ? void 0 : a.attachments);
      a = c("orEmptyArray")((a = a[0]) == null ? void 0 : a.style_infos);
      a = (a = a[0]) == null ? void 0 : a.icon_id;
      if (a === "68") {
        a = new (c("ImageIconSource"))(
          (a = e == null ? void 0 : e.uri) != null ? a : "",
          24,
          24
        );
      } else
        e != null
          ? (a = new (c("TintableIconSource"))(
              "FB",
              c("coerceRelayImage")(e),
              24
            ))
          : (a = d("fbicon")._(i("481241"), 24));
      e = k.jsx(c("CometLink.react"), {
        href: p,
        children: k.jsx(c("TetraTextPairing.react"), {
          body: k.jsx(c("ProfileCometTextWithEntities.react"), {
            textWithEntities: g,
          }),
          level: 3,
        }),
      });
      n &&
        (e = k.jsx(c("ProfileCometAboutExperienceWrapper.react"), {
          deleteLabel: null,
          editLabel: null,
          fieldType: "ABOUT_ME",
          inline: !1,
          lifeEventURL: p,
          onDelete: r,
          children: e,
        }));
      return k.jsxs(c("CometRow.react"), {
        align: "start",
        paddingHorizontal: 0,
        paddingTop: 0,
        children: [
          k.jsx(c("CometRowItem.react"), {
            children: k.jsx(c("TetraIcon.react"), {
              color: "tertiary",
              icon: a,
            }),
          }),
          k.jsx(c("CometRowItem.react"), {
            expanding: !0,
            verticalAlign: "center",
            children: e,
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
  "ProfileCometLifeEventsUpsellRow.react",
  [
    "fbt",
    "ix",
    "BaseButton.react",
    "CometRow.react",
    "CometRowItem.react",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
    "useLifeEventsComposerDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = { button: { ":hover": { textDecoration: "gpro0wi8" } } };
    function a() {
      var a = j.jsxs(c("CometRow.react"), {
          align: "start",
          paddingHorizontal: 0,
          paddingTop: 0,
          children: [
            j.jsx(c("CometRowItem.react"), {
              children: j.jsx(c("TetraIcon.react"), {
                color: "highlight",
                icon: d("fbicon")._(i("487091"), 24),
              }),
            }),
            j.jsx(c("CometRowItem.react"), {
              expanding: !0,
              verticalAlign: "center",
              children: j.jsx(c("TetraText.react"), {
                color: "highlight",
                type: "headline4",
                children: h._("Add a life event"),
              }),
            }),
          ],
        }),
        b = c("useLifeEventsComposerDialog")("ABOUT_LIFE_EVENTS"),
        e = b[0],
        f = b[1],
        g = b[2],
        l = b[3];
      b = b[4];
      return j.jsx(c("BaseButton.react"), {
        onClick: e,
        onHoverEnd: l,
        onHoverStart: g,
        onPressStart: b,
        ref: f,
        xstyle: k.button,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometAboutAppSectionLifeEventsRenderer.react",
  [
    "fbt",
    "ix",
    "CometErrorBoundary.react",
    "CometRelay",
    "ProfileCometAboutAppSectionLifeEventsRenderer_styleRenderer.graphql",
    "ProfileCometAboutAppSectionLifeEventsRenderer_user.graphql",
    "ProfileCometAboutAppSectionYearOverviewItem.react",
    "ProfileCometAboutCollectionSection.react",
    "ProfileCometAboutCollectionSectionList.react",
    "ProfileCometContext",
    "ProfileCometLifeEventsUpsellRow.react",
    "ProfileCometNullStateProfileField.react",
    "TetraText.react",
    "fbicon",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react");
    e = d("react");
    var m = e.startTransition,
      n = e.useCallback,
      o = e.useContext;
    function a(a) {
      a = a.styleRenderer;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "ProfileCometAboutAppSectionLifeEventsRenderer_styleRenderer.graphql"
            )),
        a
      );
      a = d("CometRelay").useRefetchableFragment(
        k !== void 0
          ? k
          : (k = b(
              "ProfileCometAboutAppSectionLifeEventsRenderer_user.graphql"
            )),
        a.user
      );
      var e = a[0],
        f = a[1],
        g = n(
          function () {
            m(function () {
              (e == null ? void 0 : e.id) != null &&
                f(
                  { id: e == null ? void 0 : e.id },
                  { fetchPolicy: "network-only" }
                );
            });
          },
          [f, m, e == null ? void 0 : e.id]
        );
      a = o(c("ProfileCometContext"));
      var p = a.profileID;
      a = a.viewerID;
      p = p === a;
      a =
        e == null
          ? void 0
          : (a = e.timeline_sections) == null
          ? void 0
          : a.nodes;
      a &&
        (a = a.filter(function (a) {
          return (
            c("orEmptyArray")(
              (a = a.year_overview) == null
                ? void 0
                : (a = a.items) == null
                ? void 0
                : a.nodes
            ).length > 0
          );
        }));
      a && a.length > 0
        ? (a = l.jsx(c("ProfileCometAboutCollectionSectionList.react"), {
            children: a
              .map(function (a) {
                var b = a.year,
                  d = a.year_overview;
                d =
                  d == null ? void 0 : (d = d.items) == null ? void 0 : d.nodes;
                return b == null || d == null
                  ? null
                  : l.jsx(
                      c("ProfileCometAboutCollectionSection.react"),
                      {
                        isSubheading: !0,
                        spacing: 16,
                        title: b.toString(),
                        children: d.map(function (a, b) {
                          return l.jsx(
                            c("CometErrorBoundary.react"),
                            {
                              fallback: function () {},
                              children: l.jsx(
                                c(
                                  "ProfileCometAboutAppSectionYearOverviewItem.react"
                                ),
                                { refetch: g, yearOverviewItem: a }
                              ),
                            },
                            ((a = a.node) == null ? void 0 : a.id) || b
                          );
                        }),
                      },
                      a.id
                    );
              })
              .filter(Boolean),
          }))
        : (a = l.jsx("div", {
            className: "dati1w0a tu1s4ah4 f7vcsfb0 discj3wi",
            children: l.jsx(c("ProfileCometNullStateProfileField.react"), {
              icon: d("fbicon")._(i("481245"), 24),
              children: h._("No life events to show"),
            }),
          }));
      return l.jsxs(l.Fragment, {
        children: [
          l.jsx("div", {
            className: "aodizinl dati1w0a hv4rvrfc",
            "data-testid": void 0,
            children: l.jsx(c("TetraText.react"), {
              type: "headlineEmphasized3",
              children: h._("Life Events"),
            }),
          }),
          p &&
            l.jsx("div", {
              className: "dati1w0a hv4rvrfc jei6r52m bi6gxh9e",
              children: l.jsx(c("ProfileCometLifeEventsUpsellRow.react"), {}),
            }),
          a,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialogButton.react",
  ["cx", "XUIButton.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props.action,
          b =
            (a === "confirm" ? "layerConfirm" : "") +
            (a === "cancel" ? " layerCancel" : "") +
            (a === "button" ? " layerButton" : ""),
          d = this.props.href;
        a === "cancel"
          ? (d = "#")
          : a === "button" && (d == null || d === "") && (d = "#");
        return i.jsx(
          c("XUIButton.react"),
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(this.props.className, b),
            href: d,
            role: "button",
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialogFooter.react",
  [
    "cx",
    "LeftRight.react",
    "XUIOverlayFooter.react",
    "XUIText.react",
    "joinClasses",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = "_5a8u" + (this.props.fullBleedBorder ? " _27qq" : ""),
          b = this.props,
          d = b.children,
          e = b.leftContent;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "children",
          "leftContent",
        ]);
        return i.jsx(
          c("XUIOverlayFooter.react"),
          babelHelpers["extends"]({}, b, {
            className: c("joinClasses")(this.props.className, a),
            children: i.jsx(c("XUIText.react"), {
              display: "block",
              fontSize: this.props.fontSize,
              children: i.jsxs(c("LeftRight.react"), {
                children: [
                  i.jsx("div", { children: e }),
                  i.jsx("div", { children: d }),
                ],
              }),
            }),
          })
        );
      };
      return b;
    })(i.Component);
    a.propTypes = {
      fontSize: c("prop-types").oneOf(["medium", "inherit"]),
      fullBleedBorder: c("prop-types").bool,
      leftContent: c("prop-types").object,
    };
    a.defaultProps = { fontSize: "medium" };
    g["default"] = a;
  },
  98
);
__d(
  "ConfirmationDialog",
  ["Event", "Form", "Keys", "Parent"],
  function (a, b, c, d, e, f) {
    var g = {},
      h = {};
    a = {
      register: function (a, b, c) {
        (g[a] = b), (h[a] = c || "confirmed");
      },
      setupConfirmation: function (a, c, d) {
        d === void 0 && (d = !1);
        var e = a.getPayload().__dialogID,
          f = g[e],
          i = !1,
          j = f.subscribe(["confirm", "cancel", "hide"], function (d) {
            if (d == "confirm") {
              var k = {};
              k[h[e]] = 1;
              Object.assign(c.data, b("Form").serialize(f.getRoot()), k);
              c.send();
              f.hide();
              i = !0;
              return;
            }
            if (d == "cancel" || (d == "hide" && !i)) {
              k = c.getServerDialogCancelHandler();
              try {
                k && k(a);
              } catch (a) {
                throw a;
              } finally {
                c.finallyHandler(a);
              }
              i = !0;
              if (d == "cancel") return;
            }
            delete g[e];
            delete h[e];
            j.unsubscribe();
          });
        b("Event").listen(f.getContentRoot(), "keydown", function (a) {
          a.keyCode === b("Keys").RETURN &&
            b("Parent").byTag(a.getTarget(), "input") &&
            f.inform("confirm");
        });
        f.show();
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "MessagingTag",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      ACTION_ARCHIVED: "action:archived",
      INBOX: "inbox",
      MARKETPLACE_FOLDER: "marketplace_folder",
      PENDING: "pending",
      MONTAGE: "montage",
      OTHER: "other",
      EVENT: "event",
      SENT: "sent",
      SPAM: "spam",
      UPDATES: "broadcasts_inbox",
      BCC: "header:bcc",
      FILTERED_CONTENT: "filtered_content",
      FILTERED_CONTENT_BH: "filtered_content_bh",
      FILTERED_CONTENT_ACCOUNT: "filtered_content_account",
      FILTERED_CONTENT_QUASAR: "filtered_content_quasar",
      FILTERED_CONTENT_INVALID_APP: "filtered_content_invalid_app",
      UNAVAILABLE_ATTACHMENT: "unavailable_attachment",
      UNREAD: "unread",
      FLAGGED: "flagged",
      GROUPS: "groups",
      TRANSITIONAL_MAILBOX: "transitional_mailbox",
      ARCHIVED: "archived",
      EMAIL: "email",
      VOICEMAIL: "voicemail",
      SPAM_SPOOFING: "spam:spoofing",
      SPOOF_WARNING: "MTA:spoof_warning",
      SMS_TAG_ROOT: "SMSShortcode:",
      APP_ID_ROOT: "app_id:",
      DOMAIN_AUTH_PASS: "MTA:dmarc:pass",
      DOMAIN_AUTH_FAIL: "MTA:dmarc:fail",
      MTA_SYSTEM_MESSAGE: "MTA:system_message",
      EMAIL_MESSAGE: "source:email",
      MARKETPLACE: "marketplace",
      ROOM: "room",
      PAGES: "pages",
      PAGE_BACKGROUND: "page_background",
      PAGE_FOLLOWUP: "page_followup",
      ONE_CLICK_MESSAGE: "page_one_click_message",
      MESSAGE_REQUEST_AGGREGATION_UNIT: "message_request_aggregation_unit",
      ONE_WAY_MESSAGE: "one_way_message",
      ACTION_COPIED_MESSAGE: "action:copy_message",
      ACTION_COPIED_SELF_MESSAGE: "copy_self_message",
      ACTION_COPIED_ATTACHMENT: "action:copy_attachment",
      ACTION_COPIED_SELF_ATTACHMENT: "copy_self_attachment",
      IRIS_MAPPING: {
        FOLDER_INVALID: null,
        FOLDER_INBOX: "inbox",
        FOLDER_OTHER: "other",
        FOLDER_SPAM: "spam",
        FOLDER_PENDING: "pending",
        FOLDER_MONTAGE: "montage",
        FOLDER_HIDDEN: "hidden",
        FOLDER_DISABLED: "disabled",
        FOLDER_PAGE_BACKGROUND: "page_background",
        FOLDER_PAGE_DONE: "page_done",
        FOLDER_BLOCKED: "blocked",
        FOLDER_COMMUNITY: "community",
        FOLDER_RESTRICTED: "restricted",
        FOLDER_BC_PARTNERSHIP: "bc_partnership",
      },
    };
  },
  null
);
__d(
  "GamesQuicksilverError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = "UNKNOWN"), (this.$2 = a);
      }
      var b = a.prototype;
      b.setCode = function (a) {
        this.$1 = a;
        return this;
      };
      b.getCode = function () {
        return this.$1;
      };
      b.getMessage = function () {
        return this.$2;
      };
      b.setMessage = function (a) {
        this.$2 = a;
        return this;
      };
      b.serialize = function () {
        return { code: this.$1, message: this.$2 || "" };
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "InstantGamesGSSocialFeatureToastUtils",
  ["fbt", "$InternalEnum"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("$InternalEnum").Mirrored([
      "MediaShared",
      "AddFavorite",
      "RemoveFavorite",
      "SubscribeToBot",
      "UnsubscribeFromBot",
      "PostUserAchievement",
    ]);
    function a(a, b) {
      switch (a) {
        case i.MediaShared:
          return h._("You shared this game capture.");
        case i.AddFavorite:
          return h._("{name} added to pinned games", [h._param("name", b)]);
        case i.RemoveFavorite:
          return h._("{name} removed from pinned games", [h._param("name", b)]);
        case i.SubscribeToBot:
          return h._("Messages from {name} turned on", [h._param("name", b)]);
        case i.UnsubscribeFromBot:
          return h._("Messages from {name} turned off", [h._param("name", b)]);
        case i.PostUserAchievement:
          return h._("Achievement unlocked: {achievement_name}", [
            h._param("achievement_name", b),
          ]);
      }
    }
    g.InstantGamesGSSocialFeatureToastMessageEnum = i;
    g.getInstantGamesGSSocialFeatureToastMessageFBT = a;
  },
  98
);
__d(
  "TimeUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      DAY_IN_SECONDS: 86400,
      now: function () {
        return Math.floor(Date.now() / 1e3);
      },
      since: function (a) {
        return g.now() - a;
      },
    };
    a = g;
    f["default"] = a;
  },
  66
);
__d(
  "InstantGamesEventHandler.react",
  ["Arbiter"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("Arbiter").inform([a]);
    }
    function b(a, b) {
      return c("Arbiter").subscribe([a], b);
    }
    function d(a, b) {
      return c("Arbiter").subscribeOnce([a], b);
    }
    function e(a) {
      c("Arbiter").unsubscribe(a);
    }
    g.inform = a;
    g.subscribe = b;
    g.subscribeOnce = d;
    g.unsubscribe = e;
  },
  98
);
__d(
  "XUIButton.react",
  [
    "cx",
    "AbstractButton.react",
    "XUISpinner.react",
    "joinClasses",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = "medium";
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.buttonRef = i.createRef()),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.focus = function () {
        this.buttonRef.current != null && this.buttonRef.current.focus();
      };
      d.render = function () {
        var a = this.props,
          b = a.borderShade,
          d = a.loading,
          e = a.size,
          f = a.suppressed,
          g = a.use;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "borderShade",
          "loading",
          "size",
          "suppressed",
          "use",
        ]);
        e =
          "_4jy0" +
          (e === "small" ? " _517i" : "") +
          (e === "medium" ? " _4jy3" : "") +
          (e === "large" ? " _4jy4" : "") +
          (e === "xlarge" ? " _4jy5" : "") +
          (e === "xxlarge" ? " _4jy6" : "") +
          (g === "default" ? " _517h" : "") +
          (g === "confirm" ? " _4jy1" : "") +
          (g === "special" ? " _4jy2" : "") +
          (g === "caution" ? " _9w8q" : "") +
          (b === "light" ? " _51sy" : "") +
          (b === "dark" ? " _9c6" : "") +
          (f ? " _59pe" : "") +
          (g === "confirm" || g === "special" || g === "caution"
            ? " selected"
            : "");
        return i.jsx(
          c("AbstractButton.react"),
          babelHelpers["extends"]({}, a, {
            label: d ? i.jsx(c("XUISpinner.react"), {}) : this.props.label,
            className: c("joinClasses")(this.props.className, e),
            ref: this.buttonRef,
            disabled: !!this.props.disabled,
          })
        );
      };
      return b;
    })(i.Component);
    b.defaultProps = {
      use: "default",
      size: a,
      borderShade: "light",
      suppressed: !1,
    };
    b.propTypes = {
      use: c("prop-types").oneOf(["default", "special", "confirm", "caution"]),
      size: c("prop-types").oneOf([
        "small",
        "medium",
        "large",
        "xlarge",
        "xxlarge",
      ]),
      borderShade: c("prop-types").oneOf(["light", "dark"]),
      suppressed: c("prop-types").bool,
      disabled: c("prop-types").bool,
    };
    g["default"] = b;
  },
  98
);
__d(
  "XUIGrayText.react",
  ["cx", "XUIText.react", "joinClasses", "prop-types", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.render = function () {
        var a = this.props,
          c = a.shade;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["shade"]);
        c =
          (c === "light" ? "_50f8" : "") +
          (c === "medium" ? " _c24" : "") +
          (c === "dark" ? " _50f9" : "");
        return i.jsx(
          b("XUIText.react"),
          babelHelpers["extends"]({}, a, {
            className: b("joinClasses")(this.props.className, c),
            children: this.props.children,
          })
        );
      };
      return c;
    })(i.Component);
    a.propTypes = { shade: b("prop-types").oneOf(["light", "medium", "dark"]) };
    a.defaultProps = { shade: "light" };
    e.exports = a;
  },
  null
);
__d(
  "InstantGameContextType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      THREAD: "THREAD",
      GROUP: "GROUP",
      STORY: "STORY",
      SOLO: "SOLO",
      LINK: "LINK",
      MATCH: "MATCH",
      GENERIC: "GENERIC",
    });
    f["default"] = a;
  },
  66
);
__d(
  "InstantGamesErrorCode",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ACHIEVEMENT_NOT_FOUND: "ACHIEVEMENT_NOT_FOUND",
      ADS_EXPIRED: "ADS_EXPIRED",
      ADS_FREQUENT_LOAD: "ADS_FREQUENT_LOAD",
      ADS_NO_FILL: "ADS_NO_FILL",
      ADS_NOT_LOADED: "ADS_NOT_LOADED",
      ADS_TOO_MANY_INSTANCES: "ADS_TOO_MANY_INSTANCES",
      ANALYTICS_POST_EXCEPTION: "ANALYTICS_POST_EXCEPTION",
      ARENAS_NOT_FOUND: "ARENAS_NOT_FOUND",
      CLIENT_REQUIRES_UPDATE: "CLIENT_REQUIRES_UPDATE",
      CLIENT_UNSUPPORTED_OPERATION: "CLIENT_UNSUPPORTED_OPERATION",
      DUPLICATE_POST: "DUPLICATE_POST",
      GAMING_SQUAD_NOT_FOUND: "GAMING_SQUAD_NOT_FOUND",
      GROUP_NOT_LINKED: "GROUP_NOT_LINKED",
      INVALID_OPERATION: "INVALID_OPERATION",
      INVALID_PARAM: "INVALID_PARAM",
      LEADERBOARD_NOT_FOUND: "LEADERBOARD_NOT_FOUND",
      LEADERBOARD_WRONG_CONTEXT: "LEADERBOARD_WRONG_CONTEXT",
      LIVE_MATCH_NOT_FOUND: "LIVE_MATCH_NOT_FOUND",
      LIVE_STREAMS_NOT_FOUND: "LIVE_STREAMS_NOT_FOUND",
      NETWORK_FAILURE: "NETWORK_FAILURE",
      PAGE_NOT_LINKED: "PAGE_NOT_LINKED",
      PAYMENTS_INVALID: "PAYMENTS_INVALID",
      PAYMENTS_NOT_ALLOWED: "PAYMENTS_NOT_ALLOWED",
      PAYMENTS_NOT_INITIALIZED: "PAYMENTS_NOT_INITIALIZED",
      PAYMENTS_PURCHASE_CREATION_FAILED: "PAYMENTS_PURCHASE_CREATION_FAILED",
      PAYMENTS_PURCHASE_POST_PROCESSING_FAILED:
        "PAYMENTS_PURCHASE_POST_PROCESSING_FAILED",
      PAYMENTS_USER_CANCELLED: "PAYMENTS_USER_CANCELLED",
      PENDING_REQUEST: "PENDING_REQUEST",
      RATE_LIMITED: "RATE_LIMITED",
      ROOM_AR_DENIED_USER_EFFECT_IN_PLACE:
        "ROOM_AR_DENIED_USER_EFFECT_IN_PLACE",
      ROOM_AR_EFFECT_ALREADY_LOADED: "ROOM_AR_EFFECT_ALREADY_LOADED",
      ROOM_AR_EFFECT_NOT_FOUND: "ROOM_AR_EFFECT_NOT_FOUND",
      SAME_CONTEXT: "SAME_CONTEXT",
      TOURNAMENT_NOT_FOUND: "TOURNAMENT_NOT_FOUND",
      UNKNOWN: "UNKNOWN",
      USER_INPUT: "USER_INPUT",
      VIDEO_NOT_FOUND: "VIDEO_NOT_FOUND",
    });
    f["default"] = a;
  },
  66
);
__d(
  "XCometPaymentsTransactionHubControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/facebook_pay/",
      Object.freeze({ should_initially_show_p2p_friend_picker_dialog: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometPlayWithFriendsShareAttachmentControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/instantgames/playwithfriends/play/{game_id}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "GamesServiceSharingTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:GamesServiceSharingLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:GamesServiceSharingLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:GamesServiceSharingLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setAppID = function (a) {
        this.$1.app_id = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setIsCloud = function (a) {
        this.$1.is_cloud = a;
        return this;
      };
      c.setMediaAssetID = function (a) {
        this.$1.media_asset_id = a;
        return this;
      };
      c.setSharingSource = function (a) {
        this.$1.sharing_source = a;
        return this;
      };
      c.setUIComponents = function (a) {
        this.$1.ui_components = a;
        return this;
      };
      c.updateExtraData = function (a) {
        a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
        b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.addToExtraData = function (a, b) {
        var c = {};
        c[a] = b;
        return this.updateExtraData(c);
      };
      return a;
    })();
    var g = {
      app_id: !0,
      event: !0,
      is_cloud: !0,
      media_asset_id: !0,
      sharing_source: !0,
      ui_components: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "StickersTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:StickersLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:StickersLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:StickersLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setNumsearchresults = function (a) {
        this.$1.numsearchresults = a;
        return this;
      };
      c.setPackid = function (a) {
        this.$1.packid = a;
        return this;
      };
      c.setPackids = function (a) {
        this.$1.packids = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.setSearchtoken = function (a) {
        this.$1.searchtoken = a;
        return this;
      };
      c.setStickerid = function (a) {
        this.$1.stickerid = a;
        return this;
      };
      c.setTagid = function (a) {
        this.$1.tagid = a;
        return this;
      };
      c.setTriggeredword = function (a) {
        this.$1.triggeredword = a;
        return this;
      };
      c.setTriggerused = function (a) {
        this.$1.triggerused = a;
        return this;
      };
      return a;
    })();
    c = {
      event: !0,
      numsearchresults: !0,
      packid: !0,
      packids: !0,
      searchtoken: !0,
      stickerid: !0,
      tagid: !0,
      triggeredword: !0,
      triggerused: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "XUIDialogBody.react",
  ["cx", "XUIText.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = "_4-i2" + (this.props.useCustomPadding ? "" : " _pig");
        return i.jsx(
          c("XUIText.react"),
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(this.props.className, a),
            display: "block",
            size: this.props.fontSize,
            children: this.props.children,
          })
        );
      };
      return b;
    })(i.Component);
    a.defaultProps = { fontSize: "medium" };
    g["default"] = a;
  },
  98
);
__d(
  "StickersDispatcher",
  ["ExplicitRegistrationDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (c("ExplicitRegistrationDispatcher"))({ strict: !1 });
    g["default"] = a;
  },
  98
);
__d(
  "StickersActions",
  ["StickersDispatcher", "keyMirror"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("keyMirror")({
      ADD_RECENT_STICKER: null,
      HIDE_FLYOUT: null,
      LOAD_CUSTOM_STICKER_PACK: null,
      LOAD_RECENT_STICKERS: null,
      SELECT_STORE_PACK: null,
      SELECT_TRAY_PACK: null,
      SHOW_FLYOUT: null,
      TRAY_LOADED: null,
    });
    a = {
      Types: g,
      addRecentSticker: function (a) {
        b("StickersDispatcher").dispatch({
          type: g.ADD_RECENT_STICKER,
          sticker: a,
        });
      },
      hideStickerFlyout: function () {
        b("StickersDispatcher").dispatch({ type: g.HIDE_FLYOUT });
      },
      loadCustomStickerPack: function (a, c) {
        b("StickersDispatcher").dispatch({
          type: g.LOAD_CUSTOM_STICKER_PACK,
          pack: a,
          nuxContent: c,
        });
      },
      loadRecentStickers: function (a) {
        b("StickersDispatcher").dispatch({
          type: g.LOAD_RECENT_STICKERS,
          stickers: a,
        });
      },
      selectStorePack: function (a) {
        b("StickersDispatcher").dispatch({
          type: g.SELECT_STORE_PACK,
          packID: a,
        });
      },
      selectTrayPack: function (a) {
        b("StickersDispatcher").dispatch({
          type: g.SELECT_TRAY_PACK,
          packID: a,
        });
      },
      showStickerFlyout: function (a) {
        b("StickersDispatcher").dispatch({ type: g.SHOW_FLYOUT, threadID: a });
      },
      trayLoaded: function () {
        b("StickersDispatcher").dispatch({ type: g.TRAY_LOADED });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "StickersStateStore",
  [
    "FluxReduceStore",
    "StickersActions",
    "StickersConfig",
    "StickersDispatcher",
    "immutable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.reduce = function (a, b) {
            var e = b;
            b = d("StickersActions").Types;
            switch (e.type) {
              case b.ADD_RECENT_STICKER:
                var f = [e.sticker];
                a.get("recentStickers").forEach(function (a) {
                  if (a.id === e.sticker.id) return;
                  f.push(a);
                });
                return a.set(
                  "recentStickers",
                  f.splice(0, c("StickersConfig").max_mru_stickers)
                );
              case b.HIDE_FLYOUT:
                return a.set("showFlyout", !1);
              case b.LOAD_CUSTOM_STICKER_PACK:
                return a
                  .set("customPack", e.pack)
                  .set("customPackLoaded", !0)
                  .set("customPackNuxContent", e.nuxContent);
              case b.LOAD_RECENT_STICKERS:
                return a
                  .set("recentStickersLoaded", !0)
                  .set("recentStickers", e.stickers);
              case b.SELECT_STORE_PACK:
                return a.set("storePackID", e.packID);
              case b.SELECT_TRAY_PACK:
                return a.set("trayPackID", e.packID).set("trayLoaded", !0);
              case b.SHOW_FLYOUT:
                return a.set("showFlyout", !0).set("threadID", e.threadID);
              case b.TRAY_LOADED:
                return a.set("trayLoaded", !0);
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.getInitialState = function () {
        return c("immutable").Map({
          customPack: null,
          customPackLoaded: !1,
          customPackNuxContent: null,
          recentStickers: [],
          recentStickersLoaded: !1,
          showFlyout: !1,
          storePackID: null,
          threadID: null,
          trayLoaded: !1,
          trayPackID: null,
        });
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("StickersDispatcher"));
    g["default"] = b;
  },
  98
);
__d(
  "FluxMixinLegacyInstrumentation",
  ["FluxContainerInstrumentation", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function h(a) {
      return (
        a.constructor.displayName ||
        a.constructor.name ||
        "FluxMixinLegacy(unknown)"
      );
    }
    var i = {
      _callCalculateState: function () {
        var a = d("FluxContainerInstrumentation").onCalculateStateStart(
            h(this)
          ),
          b = this._FluxMixinLegacyInstrumentationCalculateStateCaller.apply(
            this,
            arguments
          );
        a && a();
        return b;
      },
      UNSAFE_componentWillMount: function () {
        this.constructor._FluxMixinLegacyInstrumentationOnInitCalled ||
          (d("FluxContainerInstrumentation").onInit(this.constructor),
          (this.constructor._FluxMixinLegacyInstrumentationOnInitCalled = !0));
      },
      _FluxMixinLegacyInstrumentationEmittedChangeStores: null,
      _getCurrentDispatchForInstrumentation: function () {
        return (
          d("FluxContainerInstrumentation").updateTracking &&
          d("FluxContainerInstrumentation").updateTracking.getCurrentDispatch()
        );
      },
      _onInitialStateForInstrumentation: function () {
        d("FluxContainerInstrumentation").updateTracking &&
          d("FluxContainerInstrumentation").updateTracking.initialState(
            this,
            h(this)
          );
      },
      _onReceivePropsForInstrumentation: function (a) {
        d("FluxContainerInstrumentation").updateTracking &&
          d("FluxContainerInstrumentation").updateTracking.receiveProps(
            this,
            h(this),
            a
          );
      },
      _addStoreEmitForInstrumentation: function (a) {
        d("FluxContainerInstrumentation").updateTracking &&
          d("FluxContainerInstrumentation").updateTracking.shouldRecord() &&
          ((this._FluxMixinLegacyInstrumentationEmittedChangeStores =
            this._FluxMixinLegacyInstrumentationEmittedChangeStores || []),
          d("FluxContainerInstrumentation").addStoreDependencies(
            this._FluxMixinLegacyInstrumentationEmittedChangeStores,
            a
          ));
      },
      _collectStoreEmitsForInstrumentation: function () {
        var a = this._FluxMixinLegacyInstrumentationEmittedChangeStores;
        this._FluxMixinLegacyInstrumentationEmittedChangeStores = null;
        return a;
      },
      _logStoreEmitsForInstrumentation: function (a, b) {
        d("FluxContainerInstrumentation").updateTracking &&
          d("FluxContainerInstrumentation").updateTracking.storeEmitChange(
            this,
            h(this),
            a || [],
            b
          );
      },
      componentDidUpdate: function (a, b) {
        d("FluxContainerInstrumentation").onDidUpdate(
          this,
          h(this),
          a,
          this.props,
          b,
          this.state
        );
      },
    };
    function a(a) {
      d("FluxContainerInstrumentation").hasInstrumentation() &&
        ((a.mixins = a.mixins || []),
        a.mixins.push(i),
        (a._FluxMixinLegacyInstrumentationCalculateStateCaller =
          a._callCalculateState),
        delete a._callCalculateState);
      return a;
    }
    g.addInstrumentation = a;
  },
  98
);
__d(
  "StoreBasedStateMixinHelper",
  ["invariant", "SubscriptionsHandler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = a), (this.$2 = new (b("SubscriptionsHandler"))());
      }
      var c = a.prototype;
      c.subscribeCallback = function (a, b) {
        var c = this.$1.map(function (c) {
          var d =
            b != null
              ? function (d) {
                  b && b(c);
                  return a(d);
                }
              : a;
          if (c.hasChanged && c.getDispatchToken && c.addListener)
            return c.addListener(d);
          else if (c.subscribe) return c.subscribe("change", d);
          else if (c.addListener) return c.addListener("change", d);
          else g(0, 574);
        });
        this.$1.length > 0 && this.$2.addSubscriptions.apply(this.$2, c);
      };
      c.release = function () {
        this.$2.release();
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PureStoreBasedStateMixin",
  [
    "invariant",
    "FluxMixinLegacyInstrumentation",
    "StoreBasedStateMixinHelper",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function () {
      for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
        c[d] = arguments[d];
      return b("FluxMixinLegacyInstrumentation").addInstrumentation({
        _callCalculateState: function () {
          return this.constructor.calculateState();
        },
        getInitialState: function () {
          this._onInitialStateForInstrumentation &&
            this._onInitialStateForInstrumentation();
          return this._callCalculateState();
        },
        UNSAFE_componentWillMount: function () {
          var a = this;
          this.constructor.calculateState || g(0, 2396);
          this._recalculateStateID = null;
          var d = function () {
            if (a.isMounted()) {
              var b = a._collectStoreEmitsForInstrumentation
                  ? a._collectStoreEmitsForInstrumentation()
                  : null,
                c = a._callCalculateState();
              a.setState(
                a._logStoreEmitsForInstrumentation != null
                  ? function () {
                      b != null &&
                        a._logStoreEmitsForInstrumentation &&
                        a._logStoreEmitsForInstrumentation(b);
                      return c;
                    }
                  : c
              );
            }
            a._recalculateStateID = null;
          };
          this._mixin = new (b("StoreBasedStateMixinHelper"))(c);
          this._mixin.subscribeCallback(function () {
            a._recalculateStateID === null &&
              (a._recalculateStateID = b("setImmediate")(d));
          }, this._addStoreEmitForInstrumentation);
        },
        componentWillUnmount: function () {
          this._mixin.release(), (this._mixin = null);
        },
      });
    };
    e.exports = a;
  },
  null
);
__d(
  "XUIDialogCloseButton.react",
  ["fbt", "XUIDialogButton.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(
          c("XUIDialogButton.react"),
          babelHelpers["extends"]({}, this.props, {
            action: "cancel",
            label: h._("Close"),
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "ExceptionDialog",
  [
    "cx",
    "fbt",
    "invariant",
    "DialogX",
    "FbtResultBase",
    "LayerDestroyOnHide",
    "LayerHideOnEscape",
    "ServerHTML.react",
    "XUIDialogBody.react",
    "XUIDialogCloseButton.react",
    "XUIDialogFooter.react",
    "XUIDialogTitle.react",
    "XUIGrayText.react",
    "getViewportDimensions",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react"),
      l = 900,
      m = 40,
      n = {};
    function o(a) {
      a instanceof c("FbtResultBase") && (a = { __html: a });
      return a;
    }
    var p = {
      showAsyncError: function (a, b) {
        b === void 0 && (b = "dev");
        try {
          var c = a.getErrorSummary(),
            d = a.getErrorDescription();
          a.silentError &&
            d === "" &&
            (d = i._(
              "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again."
            ));
          if (a.error) {
            this.errorCode = a.error;
            if (n[this.errorCode]) return;
            n[this.errorCode] = !0;
          }
          var e = ["always"],
            f = null;
          if (
            e.includes(b) &&
            a.payload instanceof XMLHttpRequest &&
            a.payload.responseText
          ) {
            e = { width: "100%", height: window.innerHeight * 0.7 + "px" };
            f = k.jsx("iframe", { style: e, srcDoc: a.payload.responseText });
            d = null;
          }
          return p.show(c, d, f);
        } catch (b) {
          alert(JSON.stringify(a));
        }
      },
      show: function (a, b, d) {
        b = o(b);
        !b || !d || j(0, 3624);
        var e = c("getViewportDimensions").withoutScrollbars().width;
        e = e > 0 ? Math.min(e - m, l) : l;
        e = new (c("DialogX"))(
          {
            width: e,
            addedBehaviors: [c("LayerDestroyOnHide"), c("LayerHideOnEscape")],
          },
          k.jsxs("div", {
            "data-testid": void 0,
            style: { maxHeight: "80vh", overflow: "auto" },
            className: "_9l19",
            children: [
              k.jsx(c("XUIDialogTitle.react"), {
                showCloseButton: !0,
                children: a,
              }),
              k.jsx(c("XUIDialogBody.react"), {
                children: k.jsxs(c("XUIGrayText.react"), {
                  shade: "medium",
                  size: "body1",
                  className: "_9l1a",
                  children: [
                    b != null && k.jsx(c("ServerHTML.react"), { blob: b }),
                    d,
                  ],
                }),
              }),
              k.jsx(c("XUIDialogFooter.react"), {
                children: k.jsx(c("XUIDialogCloseButton.react"), {
                  use: "confirm",
                  className: c("joinClasses")("autofocus", "_9l2h"),
                }),
              }),
            ],
          })
        );
        e.subscribe(
          ["hide"],
          function (a) {
            this.errorCode && delete n[this.errorCode];
          }.bind(this)
        );
        e.show();
        return e;
      },
    };
    f.exports = p;
  },
  34
);
