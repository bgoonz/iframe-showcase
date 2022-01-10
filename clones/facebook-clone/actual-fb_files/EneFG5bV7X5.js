if (self.CavalryLogger) {
  CavalryLogger.start_js(["YQppd2c"]);
}

__d(
  "CometModernHomeFeedQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4922609094421619",
        metadata: {},
        name: "CometModernHomeFeedQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometClassicHomeLeftRailContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4149972511789743",
        metadata: {},
        name: "CometClassicHomeLeftRailContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometHomeContactGroupsContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4724975894185258",
        metadata: {},
        name: "CometHomeContactGroupsContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometHomeContactsContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6598200156921223",
        metadata: {},
        name: "CometHomeContactsContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometRightSideHeaderCardsQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4320910721298523",
        metadata: {},
        name: "CometRightSideHeaderCardsQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedInlineComposerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4050599581690002",
        metadata: {},
        name: "CometFeedInlineComposerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoChatHomeContainerCometNoDDDQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5502606159810775",
        metadata: {},
        name: "VideoChatHomeContainerCometNoDDDQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMegaphoneRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5850065008400734",
        metadata: {},
        name: "CometMegaphoneRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayRectangularRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4326423664082820",
        metadata: {},
        name: "StoriesTrayRectangularRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "getCometFeedVariablesForSk",
  ["WebConnectionClassServerGuess", "WebPixelRatio", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e, f) {
      f === void 0 && (f = []);
      var g = c("gkx")("869481"),
        h = b === "favorites" && c("gkx")("1386487");
      a = a === 10;
      return {
        RELAY_INCREMENTAL_DELIVERY: g,
        UFI2CommentsProvider_commentsKey: "CometModernHomeFeedQuery",
        connectionClass: c("WebConnectionClassServerGuess").connectionClass,
        feedLocation: "NEWSFEED",
        feedStyle: a ? "SEEN_FEED" : h ? "FAVORITES_FEED" : "DEFAULT",
        feedbackSource: 1,
        orderby: h ? [] : b === "h_chr" ? ["MOST_RECENT"] : ["TOP_STORIES"],
        privacySelectorRenderLocation: "COMET_STREAM",
        recentVPVs: f,
        refreshMode: e ? "MANUAL" : null,
        renderLocation: "homepage_stream",
        scale: d("WebPixelRatio").get(),
        useDefaultActor: !1,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "BookmarkSectionInput.facebook",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum").Mirrored([
      "APP",
      "APP_TOOL",
      "BUSINESS",
      "BUSINESS_PAGE",
      "COMBINED_APP_AND_TOOLS",
      "COMPANY",
      "COMPANY_TOOL",
      "DEVELOPER",
      "DEVELOPER_TOOL",
      "EVENT",
      "EVENT_TOOL",
      "FACEBOOK_APP",
      "FOLDER",
      "FRIEND_LIST",
      "FUNDRAISER",
      "FUNDRAISER_TOOL",
      "GAMETIME_LIVE_EVENTS",
      "GAME_TOOL",
      "GROUP",
      "GROUP_TOOL",
      "INTEREST_AND_CURATED_LIST",
      "INTEREST_LIST",
      "LIST_TOOL",
      "NEO_USER",
      "NEWS_FEED",
      "NEWS_FEED_TOOL",
      "NON_COMPANY_GROUP",
      "NON_COMPANY_GROUP_TOOL",
      "PAGE",
      "PAGE_TOOL",
      "PAYMENT",
      "PAYMENT_TOOL",
      "PINNABLE_PAGE_TOOL",
      "PLATFORM_APP",
      "RED_ENVELOPE",
      "SCRAPBOOK",
      "SUBSCRIBED_SEARCHES",
      "SUBSCRIPTIONS",
      "TOPIC_FEEDS",
      "UNKNOWN",
      "USER",
      "USER_TOOL",
      "WORK_GROUPS_ANNOUNCEMENT",
      "WORK_GROUPS_CROSS_COMPANY",
      "WORK_GROUPS_FEEDBACK",
      "WORK_GROUPS_MULTI_COMPANY",
      "WORK_GROUPS_SOCIAL",
      "WORK_GROUPS_TEAM",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "getCometLHCShortcutsBookmarks.entrypointutils",
  [],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return [
        a ? "GROUP" : null,
        "GROUP_TOOL",
        "FOLDER",
        "USER",
        "USER_TOOL",
        "GAME_TOOL",
        "FACEBOOK_APP",
        "APP_TOOL",
        "PLATFORM_APP",
        "EVENT",
        "WORK_GROUPS_TEAM",
        "WORK_GROUPS_SOCIAL",
        "WORK_GROUPS_FEEDBACK",
        "WORK_GROUPS_ANNOUNCEMENT",
        "WORK_GROUPS_MULTI_COMPANY",
        "PAGE",
        "PAGE_TOOL",
        "LIST_TOOL",
        "FRIEND_LIST",
        "INTEREST_LIST",
        "NEO_USER",
      ].filter(Boolean);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeRoot.entrypoint",
  [
    "CometClassicHomeLeftRailContainerQuery$Parameters",
    "CometFeedInlineComposerQuery$Parameters",
    "CometHomeContactGroupsContainerQuery$Parameters",
    "CometHomeContactsConfig",
    "CometHomeContactsContainerQuery$Parameters",
    "CometMegaphoneRootQuery$Parameters",
    "CometModernHomeFeedQuery$Parameters",
    "CometRightSideHeaderCardsQuery$Parameters",
    "JSResourceForInteraction",
    "StoriesTrayRectangularRootQuery$Parameters",
    "WebPixelRatio",
    "cr:1714513",
    "cr:1917816",
    "getCometFeedVariablesForSk",
    "getCometLHCShortcutsBookmarks.entrypointutils",
    "gkx",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1714513");
    a = {
      getPreloadProps: function (a) {
        var e = a.routeParams.sk;
        a = a.routeProps.feedStyle;
        a = c("getCometFeedVariablesForSk")(a, e, !1);
        e = e === "favorites" && c("gkx")("1386487") && !c("gkx")("523");
        var f = c("qex")._("51") !== !0,
          g = c("getCometLHCShortcutsBookmarks.entrypointutils")(f);
        a = {
          feedInlineComposerQueryReference: {
            environmentProviderOptions: { ssrBoundary: "composer" },
            parameters: c("CometFeedInlineComposerQuery$Parameters"),
            variables: { scale: d("WebPixelRatio").get() },
          },
          feedQueryReference: {
            environmentProviderOptions: { ssrBoundary: "feed" },
            parameters: c("CometModernHomeFeedQuery$Parameters"),
            variables: a,
          },
          homeContactGroupsQueryReference: {
            environmentProviderOptions: { ssrBoundary: "rhc" },
            parameters: c("CometHomeContactGroupsContainerQuery$Parameters"),
            variables: { scale: d("WebPixelRatio").get() },
          },
          homeContactsQueryReference: {
            environmentProviderOptions: { ssrBoundary: "rhc" },
            parameters: c("CometHomeContactsContainerQuery$Parameters"),
            variables: {
              numContactsToFetch: c("CometHomeContactsConfig")
                .numContactsToFetch,
              scale: d("WebPixelRatio").get(),
              shouldEnableMWStoriesEntrypoint: c("gkx")("1148"),
            },
          },
          leftRailContainerQueryReference: {
            environmentProviderOptions: { ssrBoundary: "left_rail" },
            parameters: c("CometClassicHomeLeftRailContainerQuery$Parameters"),
            variables: {
              numExploreBookmarks: c("gkx")("2029639") ? 10 : 9,
              scale: d("WebPixelRatio").get(),
              shortcutBookmarksSections: g,
              shouldNotRenderCommunitiesSection: f,
              skipFetchingUnreadCount: c("gkx")("2252"),
            },
          },
          megaphoneQueryReference: {
            environmentProviderOptions: { ssrBoundary: "composer" },
            parameters: c("CometMegaphoneRootQuery$Parameters"),
            variables: { first: 1, scale: d("WebPixelRatio").get() },
          },
          rightSideHeaderCardsQueryReference: {
            environmentProviderOptions: { ssrBoundary: "rhc" },
            options: { fetchPolicy: "network-only" },
            parameters: c("CometRightSideHeaderCardsQuery$Parameters"),
            variables: { refresh_num: 0, scale: d("WebPixelRatio").get() },
          },
        };
        if (!e) {
          g = 7;
          e = (f = c("qex")._("793")) != null ? f : !1;
          f = (f = c("qex")._("131")) != null ? f : !1;
          if (c("qex")._("2005420")) f ? (g = e ? 5 : 6) : (g = e ? 10 : 12);
          else {
            g =
              c("qex")._("60") || e
                ? 6
                : (f = c("qex")._("796")) != null
                ? f
                : 7;
          }
          a = babelHelpers["extends"]({}, a, {
            storiesTrayQueryReference: {
              environmentProviderOptions: { ssrBoundary: "stories" },
              parameters: c("StoriesTrayRectangularRootQuery$Parameters"),
              variables: {
                blur: d("WebPixelRatio").get() * 10,
                bucketsToFetch: g,
                deferTrayFragment: !c("gkx")("1228"),
                scale: d("WebPixelRatio").get(),
                shouldEnableLiveInStoriesDropdown:
                  (e = c("qex")._("545")) != null ? e : !1,
                shouldEnableVideoAutoplay:
                  c("gkx")("2501") ||
                  ((f = c("qex")._("373")) != null ? f : !1),
                shouldPrefetchProfilePic: c("gkx")("2029255"),
              },
            },
          });
        }
        c("gkx")("1363069") &&
          (a = babelHelpers["extends"]({}, a, {
            joinableVideoChatsQueryReference: {
              environmentProviderOptions: { ssrBoundary: "composer" },
              parameters: b("cr:1917816"),
              variables: { scale: d("WebPixelRatio").get() },
            },
          }));
        return { queries: a };
      },
      root: c("JSResourceForInteraction")("CometHomeRoot.react").__setRef(
        "CometHomeRoot.entrypoint"
      ),
    };
    e = a;
    g["default"] = e;
  },
  98
);
__d(
  "CometHomeRootBEOneAhead",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("JSResourceForInteraction")("CometHomeRoot.react").__setRef(
      "CometHomeRootBEOneAhead"
    );
    a = null;
    g["default"] = a;
  },
  98
);
