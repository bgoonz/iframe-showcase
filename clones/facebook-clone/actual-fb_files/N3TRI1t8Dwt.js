if (self.CavalryLogger) {
  CavalryLogger.start_js(["MvKSL+m"]);
}

__d(
  "CometGamingCoplayRejoinRoomModalContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3964182193665550",
        metadata: {},
        name: "CometGamingCoplayRejoinRoomModalContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGamingForYouRootHeroBannerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4149262068484866",
        metadata: {},
        name: "CometGamingForYouRootHeroBannerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGamingForYouRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5881142185294201",
        metadata: {},
        name: "CometGamingForYouRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGamingLeftRailContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4234005666666194",
        metadata: {},
        name: "CometGamingLeftRailContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGamingVideoGameHubHeaderQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3866730166752555",
        metadata: {},
        name: "CometGamingVideoGameHubHeaderQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGamingVideoGameHubRootContentQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4110007832367746",
        metadata: {},
        name: "CometGamingVideoGameHubRootContentQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "buildCometGamingRoute.entrypoint",
  [
    "CometGamingCoplayRejoinRoomModalContainerQuery$Parameters",
    "CometGamingLeftRailContainerQuery$Parameters",
    "JSResourceForInteraction",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("CometGamingRoot.react").__setRef(
        "buildCometGamingRoute.entrypoint"
      ),
      function (a) {
        return {
          coplayRejoinRoomModalQueryReference: {
            parameters: b(
              "CometGamingCoplayRejoinRoomModalContainerQuery$Parameters"
            ),
            variables: {},
          },
          leftRailQueryReference: {
            parameters: b("CometGamingLeftRailContainerQuery$Parameters"),
            variables: {},
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometGamingForYouRoot.entrypoint",
  [
    "CometGamingForYouRootHeroBannerQuery$Parameters",
    "CometGamingForYouRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometGamingRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometGamingRoute.entrypoint")(
      c("JSResourceForInteraction")("CometGamingForYouRoot.react").__setRef(
        "CometGamingForYouRoot.entrypoint"
      ),
      function (a) {
        a = d("WebPixelRatio").get();
        a = {
          UFI2CommentsProvider_commentsKey: "CometGamingForYouRootQuery",
          entrypoint: "COMET",
          feedLocation: "GAMING_FEED",
          feedbackSource: 1,
          privacySelectorRenderLocation: "COMET_GAMING_FEED",
          renderLocation: "gaming_feed",
          scale: a,
        };
        return {
          extraProps: { variables: a },
          queries: {
            cometGamingForYouRootQueryReference: {
              parameters: b("CometGamingForYouRootQuery$Parameters"),
              variables: babelHelpers["extends"]({}, a),
            },
            heroBannerQueryReference: {
              parameters: b("CometGamingForYouRootHeroBannerQuery$Parameters"),
              variables: {},
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
  "CometGamingWebGamesFullPageCompatRoot.entrypoint",
  ["JSResourceForInteraction", "buildCometGamingRoute.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometGamingRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometFullPageEntryPointCompatRoot.react"
      ).__setRef("CometGamingWebGamesFullPageCompatRoot.entrypoint"),
      function (a) {
        a = a.routeProps.maintainKey;
        return { extraProps: { routeProps: { maintainKey: a } } };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometGamingVideoGameHubRoot.entrypoint",
  [
    "CometGamingVideoGameHubHeaderQuery$Parameters",
    "CometGamingVideoGameHubRootContentQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometGamingRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("WebPixelRatio").get();
    a = c("buildCometGamingRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometGamingVideoGameHubRoot.react"
      ).__setRef("CometGamingVideoGameHubRoot.entrypoint"),
      function (a) {
        return {
          queries: {
            contentQueryReference: {
              parameters: b(
                "CometGamingVideoGameHubRootContentQuery$Parameters"
              ),
              variables: { game_id: a.routeProps.game_id, scale: h },
            },
            headerQueryReference: {
              parameters: b("CometGamingVideoGameHubHeaderQuery$Parameters"),
              variables: { params: { game_id: a.routeProps.game_id } },
            },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
