if (self.CavalryLogger) {
  CavalryLogger.start_js(["m+Lyimk"]);
}

__d(
  "PrivacyCheckupCometRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4518173848207093",
        metadata: {},
        name: "PrivacyCheckupCometRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PrivacyCheckupCometRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "PrivacyCheckupCometRootQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.routeProps;
        a = a.topicsCollectionID;
        return {
          queries: {
            topicsCollectionQueryReference: {
              parameters: b("PrivacyCheckupCometRootQuery$Parameters"),
              variables: {
                scale: d("WebPixelRatio").get(),
                topicsCollectionID: a,
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PrivacyCheckupCometRoot.react"
      ).__setRef("PrivacyCheckupCometRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
