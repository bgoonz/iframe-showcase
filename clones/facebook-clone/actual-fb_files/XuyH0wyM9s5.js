if (self.CavalryLogger) {
  CavalryLogger.start_js(["+VbHw3v"]);
}

__d(
  "CometGroupRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4220556521355414",
        metadata: {},
        name: "CometGroupRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGroupDiscussionRootSuccessQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3738850639549015",
        metadata: {},
        name: "CometGroupDiscussionRootSuccessQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGroupPermalinkRootFeedQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4462423693822066",
        metadata: {},
        name: "CometGroupPermalinkRootFeedQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometContextualProfileRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5996471787090899",
        metadata: {},
        name: "ProfileCometContextualProfileRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometContextualProfileLandingDialogEntrypointQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4836054443077290",
        metadata: {},
        name: "ProfileCometContextualProfileLandingDialogEntrypointQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometImageMediaType",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function () {
      return c("gkx")("1793884") ? "image/webp" : "image/x-auto";
    };
    b = { get: a };
    g["default"] = b;
  },
  98
);
__d(
  "buildGroupCometRootRoute.entrypoint",
  [
    "CometGroupRootQuery$Parameters",
    "CometImageMediaType",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("CometGroupRoot.react").__setRef(
        "buildGroupCometRootRoute.entrypoint"
      ),
      function (a) {
        var e = a.routeParams;
        a = a.routeProps;
        var f = a.groupID;
        a = a.section;
        return {
          rootQueryReference: {
            parameters: b("CometGroupRootQuery$Parameters"),
            variables: {
              currentSection: a,
              groupID: f,
              imageMediaType: c("CometImageMediaType").get(),
              inviteShortLinkKey: e == null ? void 0 : e.invite_short_link_key,
              isChainingRecommendationUnit:
                (e == null ? void 0 : e.action_source) ===
                "group_mall_recommendation_affordance",
              scale: d("WebPixelRatio").get(),
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
  "GroupFeedType.facebook",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum").Mirrored([
      "BUY_AND_SELL",
      "BUY_AND_SELL_DISCUSSION",
      "BUY_AND_SELL_MANAGE_LISTINGS",
      "DISCUSSION",
      "QUESTIONS",
      "SUBGROUP",
      "WORK_GARDEN",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "createCometGroupDiscussionRootQueries.entrypointutils",
  ["CometGroupDiscussionRootSuccessQuery$Parameters", "WebPixelRatio", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "DISCUSSION",
      i = new Map([
        [0, "DISCUSSION"],
        [1, "BUY_AND_SELL_DISCUSSION"],
        [2, "BUY_AND_SELL"],
      ]);
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.params,
        e = a.regularStoriesCount;
      e = e === void 0 ? (c("gkx")("1484535") ? 2 : 3) : e;
      var f = a.regularStoriesStreamInitialCount;
      f = f === void 0 ? 2 : f;
      a = a.shouldDeferMainFeed;
      var g = b.routeProps,
        j = g.creative_provider_id,
        k = g.feedType,
        l = g.focusCommentID,
        m = g.groupID,
        n = g.hoistStories;
      g = g.renderLocation;
      g = g === void 0 ? "group" : g;
      b = b.routeParams;
      var o = b.hoisted_section_header_type;
      b = b.sorting_setting;
      return {
        queries: {
          queryReference: {
            parameters: c("CometGroupDiscussionRootSuccessQuery$Parameters"),
            variables: {
              UFI2CommentsProvider_commentsKey:
                "CometGroupDiscussionRootSuccessQuery",
              creative_provider_id: j,
              feedLocation: "GROUP",
              feedType: (j = i.get(k)) != null ? j : h,
              feedbackSource: 0,
              focusCommentID: l,
              groupID: m,
              hasHoistStories: n != null && n.length > 0,
              hoistStories: n,
              hoistStoriesCount: Math.min(
                (k = n == null ? void 0 : n.length) != null ? k : 0,
                6
              ),
              hoistedSectionHeaderType: o,
              prefetchRecentMediaPhotos: c("gkx")("1996812"),
              privacySelectorRenderLocation: "COMET_STREAM",
              regular_stories_count: e,
              regular_stories_stream_initial_count: f,
              renderLocation: g,
              scale: d("WebPixelRatio").get(),
              shouldDeferMainFeed:
                (j = a) != null
                  ? j
                  : c("gkx")("1645546") && n != null && n.length > 0,
              sortingSetting: b,
              useCometPhotoViewerPlaceholderFrag: c("gkx")("686"),
              useDefaultActor: !1,
            },
          },
        },
      };
    }
    g.createCometGroupDiscussionRootQueries = a;
  },
  98
);
__d(
  "createCometGroupDiscussionRoot.entrypoint",
  [
    "buildGroupCometRootRoute.entrypoint",
    "createCometGroupDiscussionRootQueries.entrypointutils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.regularStoriesCount,
        e = a.regularStoriesStreamInitialCount,
        f = a.resource,
        g = a.shouldDeferMainFeed;
      return c("buildGroupCometRootRoute.entrypoint")(f, function (a) {
        return d(
          "createCometGroupDiscussionRootQueries.entrypointutils"
        ).createCometGroupDiscussionRootQueries({
          params: a,
          regularStoriesCount: b,
          regularStoriesStreamInitialCount: e,
          shouldDeferMainFeed: g,
        });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometGroupDiscussionRoot.entrypoint",
  ["JSResourceForInteraction", "createCometGroupDiscussionRoot.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createCometGroupDiscussionRoot.entrypoint")({
      resource: c("JSResourceForInteraction")(
        "CometGroupDiscussionRoot.react"
      ).__setRef("CometGroupDiscussionRoot.entrypoint"),
    });
    g["default"] = a;
  },
  98
);
__d(
  "createCometGroupPermalinkRootQueries.entrypointutils",
  ["CometGroupPermalinkRootFeedQuery$Parameters", "WebPixelRatio"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = a === void 0 ? {} : a;
      a = a.params;
      var b = a.routeParams,
        e = b.comment_id;
      b = b.reply_comment_id;
      a = a.routeProps;
      var f = a.focusCommentID,
        g = a.groupID,
        h = a.renderLocation;
      a = a.storyID;
      return {
        queries: {
          queryReference: {
            parameters: c("CometGroupPermalinkRootFeedQuery$Parameters"),
            variables: {
              UFI2CommentsProvider_commentsKey:
                "CometGroupPermalinkRootFeedQuery",
              displayCommentsContextEnableComment: null,
              displayCommentsContextIsAdPreview: null,
              displayCommentsContextIsAggregatedShare: null,
              displayCommentsContextIsStorySet: null,
              displayCommentsFeedbackContext: null,
              feedLocation: "GROUP_PERMALINK",
              feedbackSource: 2,
              focusCommentID: (f = (f = f) != null ? f : b) != null ? f : e,
              groupID: g,
              privacySelectorRenderLocation: "COMET_STREAM",
              renderLocation: (b = h) != null ? b : "group_permalink",
              scale: d("WebPixelRatio").get(),
              storyID: a,
              useDefaultActor: !1,
            },
          },
        },
      };
    }
    g.createCometGroupPermalinkRootQueries = a;
  },
  98
);
__d(
  "CometGroupPermalinkRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "buildGroupCometRootRoute.entrypoint",
    "createCometGroupPermalinkRootQueries.entrypointutils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildGroupCometRootRoute.entrypoint")(
      c("JSResourceForInteraction")("CometGroupPermalinkRoot.react").__setRef(
        "CometGroupPermalinkRoot.entrypoint"
      ),
      function (a) {
        return d(
          "createCometGroupPermalinkRootQueries.entrypointutils"
        ).createCometGroupPermalinkRootQueries({ params: a });
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometContextualProfileLandingDialogEntrypoint.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometContextualProfileLandingDialogEntrypointQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.groupID,
          e = a.landingAssociatedID,
          f = a.landingType;
        a = a.userID;
        return {
          queries: {
            ref: {
              parameters: b(
                "ProfileCometContextualProfileLandingDialogEntrypointQuery$Parameters"
              ),
              variables: {
                groupID: c,
                landingAssociatedID: e,
                landingType: f,
                scale: d("WebPixelRatio").get(),
                userID: a,
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ProfileCometContextualProfileLandingDialogEntrypoint.react"
      ).__setRef(
        "ProfileCometContextualProfileLandingDialogEntrypoint.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometContextualProfileRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometContextualProfileLandingDialogEntrypoint.entrypoint",
    "ProfileCometContextualProfileRootQuery$Parameters",
    "WebPixelRatio",
    "gkx",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b;
        b =
          ((b = a.routeProps) == null ? void 0 : b.landingType) != null
            ? {
                entryPoint: c(
                  "ProfileCometContextualProfileLandingDialogEntrypoint.entrypoint"
                ),
                entryPointParams: {
                  groupID: a.routeProps.groupID,
                  landingAssociatedID: a.routeProps.landingAssociatedID,
                  landingType: a.routeProps.landingType,
                  userID: a.routeProps.userID,
                },
              }
            : null;
        return {
          entryPoints: {
            ProfileCometContextualProfileLandingDialogEntrypoint: b,
          },
          queries: {
            contextualProfileQueryReference: {
              parameters: c(
                "ProfileCometContextualProfileRootQuery$Parameters"
              ),
              variables: {
                contextualProfileContext: {
                  associated_context_id: a.routeProps.groupID,
                  render_location: "GROUP",
                },
                feedLocation: "GROUP_MEMBER_BIO_FEED",
                groupID: a.routeProps.groupID,
                postsToLoad: 1,
                privacySelectorRenderLocation: "COMET_STREAM",
                profileID: a.routeProps.userID,
                renderLocation: "group_bio",
                scale: d("WebPixelRatio").get(),
                shouldDeferProfilePic: !c("gkx")("620"),
                useDefaultActor: !1,
                useVNextHeader: (b = c("qex")._("153")) != null ? b : !1,
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ProfileCometContextualProfileRoot.react"
      ).__setRef("ProfileCometContextualProfileRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
