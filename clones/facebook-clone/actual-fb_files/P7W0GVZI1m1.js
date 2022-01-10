if (self.CavalryLogger) {
  CavalryLogger.start_js(["7fuSXY0"]);
}

__d(
  "NewsCompassFeedRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4321352921246960",
        metadata: {},
        name: "NewsCompassFeedRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "NewsCompassRHCRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4413252075399481",
        metadata: {},
        name: "NewsCompassRHCRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "NewsCompassTOYSRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4302523886507868",
        metadata: {},
        name: "NewsCompassTOYSRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "NewsCompassLeftRailQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "2890524727716620",
        metadata: {},
        name: "NewsCompassLeftRailQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "buildNewsCompassRoute.entrypoint",
  [
    "JSResourceForInteraction",
    "NewsCompassLeftRailQuery$Parameters",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("NewsCompassRoot.react").__setRef(
        "buildNewsCompassRoute.entrypoint"
      ),
      function (a) {
        return {
          leftRailQueryReference: {
            parameters: c("NewsCompassLeftRailQuery$Parameters"),
            variables: {
              params: {
                entry_point: "COMET",
                session_id:
                  (a = a.timeSpentMetaData) == null
                    ? void 0
                    : (a = a.session_ids) == null
                    ? void 0
                    : a.news_tab_session_id,
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
  "NewsCompassFeedRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "NewsCompassFeedRootQuery$Parameters",
    "NewsCompassRHCRootQuery$Parameters",
    "NewsCompassTOYSRootQuery$Parameters",
    "WebPixelRatio",
    "buildNewsCompassRoute.entrypoint",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")("NewsCompassFeedRoot.react").__setRef(
      "NewsCompassFeedRoot.entrypoint"
    );
    e = c("buildNewsCompassRoute.entrypoint")(a, function (a) {
      var e, f, g;
      e = decodeURIComponent((e = a.routeParams.intent_data) != null ? e : "");
      f = (f = c("qex")._("377")) != null ? f : !1;
      return {
        extraProps: {
          category: a.routeProps.category,
          timeSpentMetaData: a.timeSpentMetaData,
        },
        queries: {
          feedRootQueryReference: {
            parameters: b("NewsCompassFeedRootQuery$Parameters"),
            variables: {
              category: a.routeProps.category,
              client_data: {
                entry_point: "COMET",
                is_hosted_in_tab: !1,
                session_id:
                  (g =
                    (g = a.timeSpentMetaData) == null
                      ? void 0
                      : (g = g.session_ids) == null
                      ? void 0
                      : g.news_tab_session_id) != null
                    ? g
                    : "unknown_comet_session_id",
                should_hide_title: !0,
              },
              intent_data: e,
              scale: d("WebPixelRatio").get(),
              uri_token: a.routeProps.vanity_uri,
            },
          },
          rhcQueryReference: {
            parameters: b("NewsCompassRHCRootQuery$Parameters"),
            variables: {
              category: a.routeProps.category,
              client_data: {
                entry_point: "COMET",
                is_hosted_in_tab: !1,
                session_id:
                  (g =
                    (g = a.timeSpentMetaData) == null
                      ? void 0
                      : g.news_tab_session_id) != null
                    ? g
                    : "unknown_comet_session_id",
                should_hide_title: !0,
                should_split_toys_rhc: f,
              },
              intent_data: e,
              scale: d("WebPixelRatio").get(),
              uri_token: a.routeProps.vanity_uri,
            },
          },
          toysQueryReference: {
            parameters: b("NewsCompassTOYSRootQuery$Parameters"),
            variables: {
              category: a.routeProps.category,
              client_data: {
                entry_point: "COMET",
                is_hosted_in_tab: !1,
                session_id:
                  (g =
                    (g = a.timeSpentMetaData) == null
                      ? void 0
                      : (g = g.session_ids) == null
                      ? void 0
                      : g.news_tab_session_id) != null
                    ? g
                    : "unknown_comet_session_id",
                should_hide_title: !0,
                should_split_toys_rhc: f,
              },
              intent_data: e,
              scale: d("WebPixelRatio").get(),
              uri_token: a.routeProps.vanity_uri,
            },
          },
        },
      };
    });
    g["default"] = e;
  },
  98
);
