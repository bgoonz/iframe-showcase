if (self.CavalryLogger) {
  CavalryLogger.start_js(["ZuoUzK3"]);
}

__d(
  "ProfileCometAboutAppSectionQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6377660832306223",
        metadata: {},
        name: "ProfileCometAboutAppSectionQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTopAppSectionQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4045028702276648",
        metadata: {},
        name: "ProfileCometTopAppSectionQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometAboutTabRouteRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometAboutAppSectionQuery$Parameters",
    "WebPixelRatio",
    "buildCometProfileRoute.entrypoint",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometProfileRoute.entrypoint")(
      c("JSResourceForInteraction")("ProfileCometAboutTabRoot.react").__setRef(
        "ProfileCometAboutTabRouteRoot.entrypoint"
      ),
      function (a) {
        a = a.routeProps;
        var b = a.collectionToken,
          e = a.rawSectionToken,
          f = a.sectionToken;
        a = a.userID;
        return {
          queries: {
            aboutAppSectionQueryReference: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("ProfileCometAboutAppSectionQuery$Parameters"),
              variables: {
                appSectionFeedKey:
                  "ProfileCometAppSectionFeed_timeline_nav_app_sections__" + e,
                collectionToken: b,
                pageID: String(a),
                rawSectionToken: e,
                scale: d("WebPixelRatio").get(),
                sectionToken: f,
                shouldDeferTopAppSection: !c("gkx")("620"),
                showReactions: !0,
                userID: String(a),
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
  "ProfileCometCollectionRouteRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometTopAppSectionQuery$Parameters",
    "WebPixelRatio",
    "buildCometProfileRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometProfileRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "ProfileCometCollectionRoot.react"
      ).__setRef("ProfileCometCollectionRouteRoot.entrypoint"),
      function (a) {
        a = a.routeProps;
        var b = a.collectionToken,
          e = a.sectionToken;
        a = a.userID;
        return {
          extraProps: { collectionToken: b },
          queries: {
            topAppSectionQueryReference: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("ProfileCometTopAppSectionQuery$Parameters"),
              variables: {
                collectionToken: b,
                scale: d("WebPixelRatio").get(),
                sectionToken: e,
                userID: String(a),
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
