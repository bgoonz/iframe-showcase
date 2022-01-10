if (self.CavalryLogger) {
  CavalryLogger.start_js(["ujI2XVT"]);
}

__d(
  "CometSinglePageChannelTabRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4187368328006612",
        metadata: {},
        name: "CometSinglePageChannelTabRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometVideoHomePlaylistRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4523894721020282",
        metadata: {},
        name: "CometVideoHomePlaylistRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometVideoHomeRootProviderQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "2939812456104778",
        metadata: {},
        name: "CometVideoHomeRootProviderQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3707683145972691",
        metadata: {},
        name: "CometVideoHomeStickyHeaderWatchlistMenuRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometVideoHomeLeftRailWatchlistQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5956495877755568",
        metadata: {},
        name: "CometVideoHomeLeftRailWatchlistQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometSinglePageChannelTabRoot.entrypoint",
  [
    "CometSinglePageChannelTabRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometSinglePageRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometSinglePageRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometSinglePageChannelTabRoot.react"
      ).__setRef("CometSinglePageChannelTabRoot.entrypoint"),
      function (a) {
        a = a.routeProps.pageID;
        return {
          queries: {
            singlePageChannelTabRootQueryReference: {
              parameters: b("CometSinglePageChannelTabRootQuery$Parameters"),
              variables: {
                UFI2CommentsProvider_commentsKey:
                  "CometSinglePageChannelTabRoot",
                displayCommentsContextEnableComment: null,
                displayCommentsContextIsAdPreview: null,
                displayCommentsContextIsAggregatedShare: null,
                displayCommentsContextIsStorySet: null,
                displayCommentsFeedbackContext: null,
                feedLocation: "PAGE_TIMELINE",
                feedbackSource: 72,
                focusCommentID: null,
                pageID: a,
                scale: d("WebPixelRatio").get() * 4,
                showReactions: !0,
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
  "buildCometVideoHomeRouteForResource.entrypoint",
  [
    "CometVideoHomeLeftRailWatchlistQuery$Parameters",
    "CometVideoHomeRootProviderQuery$Parameters",
    "CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters",
    "WebPixelRatio",
    "cr:1714517",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1714517");
    function a(a) {
      return c("createContentAreaCompoundEntryPointBuilder")(a, function (a) {
        return {
          rootProviderQueryReference: {
            parameters: b("CometVideoHomeRootProviderQuery$Parameters"),
            variables: {},
          },
          stickyHeaderWatchlistQueryReference: {
            parameters: b(
              "CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters"
            ),
            variables: { scale: d("WebPixelRatio").get() },
          },
          watchlistSettingsQueryReference: {
            parameters: b("CometVideoHomeLeftRailWatchlistQuery$Parameters"),
            variables: { scale: d("WebPixelRatio").get() },
          },
        };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "buildCometVideoHomeRoute.entrypoint",
  [
    "JSResourceForInteraction",
    "buildCometVideoHomeRouteForResource.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometVideoHomeRouteForResource.entrypoint")(
      c("JSResourceForInteraction")("CometVideoHomeRoot.react").__setRef(
        "buildCometVideoHomeRoute.entrypoint"
      )
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeFeedRoot.entrypoint",
  [
    "CometVideoHomeFeedEntryPointVariables",
    "CometVideoHomeFeedRootQuery$Parameters",
    "JSResourceForInteraction",
    "buildCometVideoHomeRoute.entrypoint",
    "cr:1714516",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1714516");
    a = c("buildCometVideoHomeRoute.entrypoint")(
      c("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef(
        "CometVideoHomeFeedRoot.entrypoint"
      ),
      function (a) {
        return {
          queries: {
            feedRootQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: b("CometVideoHomeFeedRootQuery$Parameters"),
              variables: c("CometVideoHomeFeedEntryPointVariables"),
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
  "CometVideoHomeFeedRootBEOneAhead",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef(
      "CometVideoHomeFeedRootBEOneAhead"
    );
    a = null;
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomePlaylistRoot.entrypoint",
  [
    "CometVideoHomePlaylistRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometVideoHomeRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometVideoHomeRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometVideoHomePlaylistRoot.react"
      ).__setRef("CometVideoHomePlaylistRoot.entrypoint"),
      function (a) {
        a = { id: a.routeProps.id };
        return {
          queries: {
            playlistRootQueryReference: {
              parameters: b("CometVideoHomePlaylistRootQuery$Parameters"),
              variables: { scale: d("WebPixelRatio").get(), trigger_data: a },
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
  "CometVideoHomeRootBEOneAhead",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("JSResourceForInteraction")("CometVideoHomeRoot.react").__setRef(
      "CometVideoHomeRootBEOneAhead"
    );
    a = null;
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeLanceletRoot.entrypoint",
  [
    "CometSinglePageChannelTabRoot.entrypoint",
    "JSResourceForInteraction",
    "buildCometVideoHomeRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometVideoHomeRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometVideoHomeLanceletRoot.react"
      ).__setRef("CometVideoHomeLanceletRoot.entrypoint"),
      function (a) {
        return {
          entryPoints: {
            pageEntryPoint: {
              entryPoint: b("CometSinglePageChannelTabRoot.entrypoint"),
              entryPointParams: a,
            },
          },
          extraProps: a,
        };
      }
    );
    g["default"] = a;
  },
  98
);
