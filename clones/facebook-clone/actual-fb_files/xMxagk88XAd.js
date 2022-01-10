if (self.CavalryLogger) {
  CavalryLogger.start_js(["dbtNQu5"]);
}

__d(
  "GroupsCometCrossGroupFeedRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4175045495936024",
        metadata: {},
        name: "GroupsCometCrossGroupFeedRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometLeftRailContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3884641628300421",
        metadata: {},
        name: "GroupsCometLeftRailContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceHashtagFollowButtonContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3370143536356746",
        metadata: {},
        name: "CometMarketplaceHashtagFollowButtonContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplaceBannerContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4325710054135063",
        metadata: {},
        name: "MarketplaceBannerContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplaceCometBrowseFeedLightContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4559221914124554",
        metadata: {},
        name: "MarketplaceCometBrowseFeedLightContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceNotificationsListContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4642939632407492",
        metadata: {},
        name: "CometMarketplaceNotificationsListContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceHashtagFeedPageHeaderQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4086688864735848",
        metadata: {},
        name: "CometMarketplaceHashtagFeedPageHeaderQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceLeftRailNavigationContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4260515074011583",
        metadata: {},
        name: "CometMarketplaceLeftRailNavigationContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometBookmarksRoot.entrypoint",
  [
    "CometClassicHomeLeftRailContainerQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "getCometLHCShortcutsBookmarks.entrypointutils",
    "gkx",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("qex")._("51") !== !0,
      i = c("getCometLHCShortcutsBookmarks.entrypointutils")(h);
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            menuContainerQueryReference: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c(
                "CometClassicHomeLeftRailContainerQuery$Parameters"
              ),
              variables: {
                numExploreBookmarks: c("gkx")("2029639") ? 10 : 9,
                scale: d("WebPixelRatio").get(),
                shortcutBookmarksSections: i,
                shouldNotRenderCommunitiesSection: h,
                skipFetchingUnreadCount: c("gkx")("2252"),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("CometBookmarksRoot.react").__setRef(
        "CometBookmarksRoot.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometTabRootBEOneAhead",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("JSResourceForInteraction")("GroupsCometTabRoot.react").__setRef(
      "GroupsCometTabRootBEOneAhead"
    );
    a = null;
    g["default"] = a;
  },
  98
);
__d(
  "buildCometGroupsTabRoute.entrypoint",
  [
    "JSResourceForInteraction",
    "WebPixelRatio",
    "cr:1714511",
    "cr:80",
    "cr:86",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1714511");
    a = {
      adminGroupsCount: 3,
      memberGroupsCount: 10,
      scale: d("WebPixelRatio").get(),
    };
    var h =
      b("cr:80") != null
        ? {
            leftRailResponsiveQueryReference: {
              parameters: b("cr:80"),
              variables: a,
            },
          }
        : b("cr:86") != null
        ? { leftRailQueryReference: { parameters: b("cr:86"), variables: a } }
        : Object.freeze({});
    e = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("GroupsCometTabRoot.react").__setRef(
        "buildCometGroupsTabRoute.entrypoint"
      ),
      function (a) {
        return h;
      }
    );
    g.buildCometGroupsTabRouteEntrypoint = e;
    g.cometGroupsTabRouteEntrypointQueries = h;
  },
  98
);
__d(
  "GroupsCometCrossGroupFeedRoot.entrypoint",
  [
    "GroupsCometCrossGroupFeedRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometGroupsTabRoute.entrypoint",
    "cr:1714512",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1714512");
    a = d(
      "buildCometGroupsTabRoute.entrypoint"
    ).buildCometGroupsTabRouteEntrypoint(
      c("JSResourceForInteraction")(
        "GroupsCometCrossGroupFeedRoot.react"
      ).__setRef("GroupsCometCrossGroupFeedRoot.entrypoint"),
      function (a) {
        var c,
          e = a.routeProps,
          f = e.groupID,
          g = e.hoistStories;
        e = e.hoistStoryTokens;
        var h = e == null && f != null && g != null && g.length > 0;
        return {
          queries: {
            feedQueryReference: {
              parameters: b("GroupsCometCrossGroupFeedRootQuery$Parameters"),
              variables: {
                UFI2CommentsProvider_commentsKey:
                  "GroupsCometCrossGroupFeedRootQuery",
                displayCommentsContextEnableComment: null,
                displayCommentsContextIsAdPreview: null,
                displayCommentsContextIsAggregatedShare: null,
                displayCommentsContextIsStorySet: null,
                displayCommentsFeedbackContext: null,
                feedLocation: "GROUP",
                feedbackSource: 69,
                firstLoadCount:
                  (c = a.routeProps.firstLoadCount) != null ? c : 2,
                focusCommentID: null,
                groupID: (c = f) != null ? c : "0",
                hasHoistStories: h,
                hasHoistStoryTokens: !!e,
                hoistStories: g,
                hoistStoriesCount: Math.min(
                  (c =
                    (f = e == null ? void 0 : e.length) != null
                      ? f
                      : g == null
                      ? void 0
                      : g.length) != null
                    ? c
                    : 0,
                  6
                ),
                hoistStoryTokens: e,
                privacySelectorRenderLocation: "COMET_STREAM",
                renderLocation: "groups_tab",
                scale: d("WebPixelRatio").get(),
                streamInitialCount:
                  (h = a.routeProps.streamInitialCount) != null ? h : 1,
                useDefaultActor: !1,
              },
            },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometCrossGroupFeedRootBEOneAhead",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("JSResourceForInteraction")(
      "GroupsCometCrossGroupFeedRoot.react"
    ).__setRef("GroupsCometCrossGroupFeedRootBEOneAhead");
    a = null;
    g["default"] = a;
  },
  98
);
__d(
  "CometMarketplaceRootBEOneAhead",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("JSResourceForInteraction")("CometMarketplaceRoot.react").__setRef(
      "CometMarketplaceRootBEOneAhead"
    );
    a = null;
    g["default"] = a;
  },
  98
);
__d(
  "buildMarketplaceRoute.entrypoint",
  [
    "CometMarketplaceHashtagFeedPageHeaderQuery$Parameters",
    "CometMarketplaceHashtagFollowButtonContainerQuery$Parameters",
    "CometMarketplaceLeftRailNavigationContainerQuery$Parameters",
    "JSResourceForInteraction",
    "cr:1714514",
    "createContentAreaCompoundEntryPointBuilder",
    "gkx",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1714514");
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("CometMarketplaceRoot.react").__setRef(
        "buildMarketplaceRoute.entrypoint"
      ),
      function (a) {
        var d = a.routeProps.location;
        a = a.routeParams.hashtag_id;
        d = {
          leftRailQueryReference: {
            environmentProviderOptions: { ssrBoundary: "left_rail" },
            parameters: b(
              "CometMarketplaceLeftRailNavigationContainerQuery$Parameters"
            ),
            variables: {
              buyLocation: { latitude: d.latitude, longitude: d.longitude },
              canViewCustomizedProfile:
                c("gkx")("1781610") ||
                ((d = c("qex")._("1874488")) != null ? d : !1),
              category_ranking_enabled: !1,
              hide_l2_cats: !0,
            },
          },
        };
        Boolean(a) &&
          (d = babelHelpers["extends"]({}, d, {
            hashtagFollowButtonQueryReference: {
              environmentProviderOptions: { ssrBoundary: "left_rail" },
              parameters: b(
                "CometMarketplaceHashtagFollowButtonContainerQuery$Parameters"
              ),
              variables: { hashtagID: a },
            },
            hashtagPageHeaderQueryReference: {
              environmentProviderOptions: { ssrBoundary: "left_rail" },
              parameters: b(
                "CometMarketplaceHashtagFeedPageHeaderQuery$Parameters"
              ),
              variables: { hashtagID: a },
            },
          }));
        return d;
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "MarketplaceHomeRootSharedPreloaders.entrypoint",
  [
    "CometMarketplaceNotificationsListContainerQuery$Parameters",
    "MarketplaceBannerContainerQuery$Parameters",
    "MarketplaceCometBrowseFeedLightContainerQuery$Parameters",
    "WebPixelRatio",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e3;
    function i(a) {
      a = a.routeProps.location;
      return {
        feedQueryReferenceLight: {
          environmentProviderOptions: { ssrBoundary: "feed" },
          parameters: b(
            "MarketplaceCometBrowseFeedLightContainerQuery$Parameters"
          ),
          variables: {
            buyLocation: { latitude: a.latitude, longitude: a.longitude },
            count: 1,
            cursor: null,
            imageWidth: 256,
            mediaType: "image/jpeg",
            radius: a.radius * h,
            scale: d("WebPixelRatio").get(),
            sizing: "cover-fill-cropped",
            useSDFPath: !0,
          },
        },
      };
    }
    function j() {
      return {
        notificationsQueryReference: {
          environmentProviderOptions: { ssrBoundary: "feed" },
          parameters: b(
            "CometMarketplaceNotificationsListContainerQuery$Parameters"
          ),
          variables: {
            isCOBMOB: c("gkx")("1489406"),
            scale: d("WebPixelRatio").get(),
          },
        },
      };
    }
    function a(a) {
      a = i(a);
      c("gkx")("1250838") && (a = babelHelpers["extends"]({}, a, j()));
      a = babelHelpers["extends"]({}, a, {
        bannerV2QueryReference: {
          environmentProviderOptions: { ssrBoundary: "feed" },
          parameters: b("MarketplaceBannerContainerQuery$Parameters"),
          variables: {
            params: { render_location: "HOME_FEED" },
            scale: d("WebPixelRatio").get(),
          },
        },
      });
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometMarketplaceHomeRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "MarketplaceHomeRootSharedPreloaders.entrypoint",
    "buildMarketplaceRoute.entrypoint",
    "cr:1745778",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1745778");
    a = c("buildMarketplaceRoute.entrypoint")(
      c("JSResourceForInteraction")("CometMarketplaceHomeRoot.react").__setRef(
        "CometMarketplaceHomeRoot.entrypoint"
      ),
      function (a) {
        a = c("MarketplaceHomeRootSharedPreloaders.entrypoint")(a);
        return { queries: a };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometMarketplaceHomeRootBEOneAhead",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("JSResourceForInteraction")("CometMarketplaceHomeRoot.react").__setRef(
      "CometMarketplaceHomeRootBEOneAhead"
    );
    a = null;
    g["default"] = a;
  },
  98
);
