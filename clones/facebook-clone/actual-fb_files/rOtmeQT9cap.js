if (self.CavalryLogger) {
  CavalryLogger.start_js(["D+ZONpv"]);
}

__d(
  "LWICometProductPickerRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4180602435360222",
        metadata: {},
        name: "LWICometProductPickerRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometAdminRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4049106641810998",
        metadata: {},
        name: "PagesCometAdminRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PageCometAdminNotificationsRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6712279245464680",
        metadata: {},
        name: "PageCometAdminNotificationsRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometAboutRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5798992440174634",
        metadata: {},
        name: "PagesCometAboutRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometSinglePagePhotosRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6174791379212930",
        metadata: {},
        name: "CometSinglePagePhotosRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "LWICometProductPickerRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "LWICometProductPickerRootQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5,
      i = [
        "BOOSTED_POST",
        "BOOSTED_FB_INSTAGRAM_MEDIA",
        "BOOSTED_EVENT",
        "BOOSTED_AUTOMATED_ADS",
      ];
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            productPickerRootQueryReference: {
              parameters: c("LWICometProductPickerRootQuery$Parameters"),
              variables: {
                count: h,
                excluded_products:
                  a.routeParams.use_template_post === !0 ? i : null,
                filtered_products: null,
                pageID: String(a.routeParams.page_id),
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "LWICometProductPickerRoot.react"
      ).__setRef("LWICometProductPickerRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "buildCometPageAdminRoute.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometAdminRootQuery$Parameters",
    "WebPixelRatio",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("PagesCometAdminRoot.react").__setRef(
        "buildCometPageAdminRoute.entrypoint"
      ),
      function (a) {
        a = a.routeProps.pageID;
        return {
          pagesCometAdminRootQueryReference: {
            parameters: b("PagesCometAdminRootQuery$Parameters"),
            variables: { pageID: String(a), scale: d("WebPixelRatio").get() },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometAdminSelfViewRoot.entrypoint",
  [
    "CometSinglePageHomeRoot.entrypoint",
    "JSResourceForInteraction",
    "buildCometPageAdminRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometPageAdminRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "PagesCometAdminSelfViewRoot.react"
      ).__setRef("PagesCometAdminSelfViewRoot.entrypoint"),
      function (a) {
        return {
          entryPoints: {
            pageSelfViewEntryPoint: {
              entryPoint: b("CometSinglePageHomeRoot.entrypoint"),
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
__d(
  "PageCometAdminNotificationRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "PageCometAdminNotificationsRootQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.routeProps.pageID;
        return {
          queries: {
            pageNotifRootQueryReference: {
              parameters: b("PageCometAdminNotificationsRootQuery$Parameters"),
              variables: {
                count: 18,
                environment: "MAIN_SURFACE",
                pageID: String(a),
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PageCometAdminNotificationsRoot.react"
      ).__setRef("PageCometAdminNotificationRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometSinglePagePhotosRoot.entrypoint",
  [
    "CometSinglePagePhotosRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometSinglePageRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometSinglePageRoute.entrypoint")(
      c("JSResourceForInteraction")("CometSinglePagePhotosRoot.react").__setRef(
        "CometSinglePagePhotosRoot.entrypoint"
      ),
      function (a) {
        a = a.routeProps.pageID;
        return {
          queries: {
            singlePagePhotosRootQueryReference: {
              parameters: b("CometSinglePagePhotosRootQuery$Parameters"),
              variables: { pageID: a, scale: d("WebPixelRatio").get() * 4 },
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
  "PagesCometAdminSelfViewPhotosContainerRoot.entrypoint",
  [
    "CometSinglePagePhotosRoot.entrypoint",
    "JSResourceForInteraction",
    "buildCometPageAdminRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometPageAdminRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "PagesCometAdminSelfViewRoot.react"
      ).__setRef("PagesCometAdminSelfViewPhotosContainerRoot.entrypoint"),
      function (a) {
        return {
          entryPoints: {
            pageSelfViewEntryPoint: {
              entryPoint: b("CometSinglePagePhotosRoot.entrypoint"),
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
__d(
  "PagesCometAdminChannelTabRoot.entrypoint",
  [
    "CometSinglePageChannelTabRoot.entrypoint",
    "JSResourceForInteraction",
    "buildCometPageAdminRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometPageAdminRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "PagesCometAdminSelfViewRoot.react"
      ).__setRef("PagesCometAdminChannelTabRoot.entrypoint"),
      function (a) {
        return {
          entryPoints: {
            pageSelfViewEntryPoint: {
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
