if (self.CavalryLogger) {
  CavalryLogger.start_js(["vKCl5/e"]);
}

__d(
  "CometActivityLogMainContentRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4651355348209553",
        metadata: {},
        name: "CometActivityLogMainContentRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogViewViewerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4315317995247245",
        metadata: {},
        name: "CometActivityLogViewViewerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "buildCometActivityLogRoute.entrypoint",
  [
    "CometActivityLogViewViewerQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("CometActivityLogRoot.react").__setRef(
        "buildCometActivityLogRoute.entrypoint"
      ),
      function (a) {
        var c, e, f, g, h, i;
        a = a.routeParams;
        c = (c = a.category_key) != null ? c : "ALL";
        e = (e = a.last_refresh_time) != null ? e : null;
        f = (f = a.filter_hidden) != null ? f : "ALL";
        g = (g = a.filter_privacy) != null ? g : "NONE";
        var j = a.month,
          k = a.year;
        h = (h = a.person_id) != null ? h : null;
        i = (i = a.manage_mode) != null ? i : !1;
        a = (a = a.activity_history) != null ? a : !1;
        return {
          CometActivityLogViewQueryReference: {
            parameters: b("CometActivityLogViewViewerQuery$Parameters"),
            variables: {
              activity_history: a,
              category: c,
              category_key: c,
              count: 25,
              cursor: null,
              lastRefreshTime: e,
              manage_mode: i,
              month: j,
              person_id: h,
              privacy: g,
              scale: d("WebPixelRatio").get(),
              timeline_visibility: f,
              year: k,
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
  "CometActivityLogMainContentRoot.entrypoint",
  [
    "CometActivityLogMainContentRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometActivityLogRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 25;
    a = c("buildCometActivityLogRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometActivityLogMainContentRoot.react"
      ).__setRef("CometActivityLogMainContentRoot.entrypoint"),
      function (a) {
        var c, e, f, g, i;
        a = a.routeParams;
        c = (c = a.category_key) != null ? c : "ALL";
        e = (e = a.filter_hidden) != null ? e : "ALL";
        f = (f = a.filter_privacy) != null ? f : "NONE";
        var j = a.month,
          k = a.year;
        g = (g = a.person_id) != null ? g : null;
        i = (i = a.activity_history) != null ? i : !1;
        a = (a = a.manage_mode) != null ? a : !1;
        return {
          queries: {
            CometActivityLogMainContentQueryReference: {
              parameters: b("CometActivityLogMainContentRootQuery$Parameters"),
              variables: {
                activity_history: i,
                category: c,
                category_key: c,
                count: h,
                cursor: null,
                manage_mode: a,
                month: j,
                person_id: g,
                privacy: f,
                scale: d("WebPixelRatio").get(),
                timeline_visibility: e,
                year: k,
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
