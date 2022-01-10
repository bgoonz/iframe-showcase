if (self.CavalryLogger) {
  CavalryLogger.start_js(["yTXoAV+"]);
}

__d(
  "ProfileCometTimelineGridViewRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5022419151108689",
        metadata: {},
        name: "ProfileCometTimelineGridViewRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTimelineGridViewFeedQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4444652835602677",
        metadata: {},
        name: "ProfileCometTimelineGridViewFeedQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometSettingsItemsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = { currentExpandedItem: null, setCurrentExpandedItem: function () {} };
    c = a(b);
    g["default"] = c;
  },
  98
);
__d(
  "ProfileCometTimelineGridViewRouteRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometTimelineGridViewFeedQuery$Parameters",
    "ProfileCometTimelineGridViewRootQuery$Parameters",
    "WebPixelRatio",
    "buildCometProfileRoute.entrypoint",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometProfileRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "ProfileCometTimelineGridViewRoot.react"
      ).__setRef("ProfileCometTimelineGridViewRouteRoot.entrypoint"),
      function (a) {
        var b = {
          gridMediaWidth: 230,
          omitPinnedPost: !0,
          privacySelectorRenderLocation: "COMET_STREAM",
          renderLocation: "timeline",
          scale: d("WebPixelRatio").get(),
          userID: String(a.routeProps.userID) || "",
        };
        a.routeProps.hasMentionsTab === !0 &&
          (b = babelHelpers["extends"]({}, b, {
            postedBy: { group: "OWNER" },
          }));
        return {
          queries: {
            timelineGridViewFeedQueryReference: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("ProfileCometTimelineGridViewFeedQuery$Parameters"),
              variables: b,
            },
            timelineGridViewRootQueryReference: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("ProfileCometTimelineGridViewRootQuery$Parameters"),
              variables: {
                scale: d("WebPixelRatio").get(),
                shouldDeferAux: !c("gkx")("620"),
                shouldDeferGrid: !c("gkx")("620"),
                userID: String(a.routeProps.userID) || "",
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
