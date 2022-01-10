if (self.CavalryLogger) {
  CavalryLogger.start_js(["Cq8QVS/"]);
}

__d(
  "DiscoveryHubCometContentQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4633997253279352",
        metadata: {},
        name: "DiscoveryHubCometContentQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "DiscoveryHubCometFooterQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4325950320760716",
        metadata: {},
        name: "DiscoveryHubCometFooterQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "DiscoveryHubCometHeaderQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4544353672255923",
        metadata: {},
        name: "DiscoveryHubCometHeaderQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "DiscoveryHubCometStickyHeaderQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4366406643398790",
        metadata: {},
        name: "DiscoveryHubCometStickyHeaderQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometDashboardRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5871990329540500",
        metadata: {},
        name: "EventCometDashboardRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "BirthdayCometRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6541689389189809",
        metadata: {},
        name: "BirthdayCometRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometHomeRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4019755044818870",
        metadata: {},
        name: "EventCometHomeRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "FriendingCometRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3940174346069454",
        metadata: {},
        name: "FriendingCometRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometBirthdayMegaphoneRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4191400017602717",
        metadata: {},
        name: "EventCometBirthdayMegaphoneRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "DiscoveryHubCometFeed.variables",
  ["WebPixelRatio"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      UFI2CommentsProvider_commentsKey: "DiscoveryHubCometRootQuery",
      displayCommentsContextEnableComment: !0,
      displayCommentsContextIsAdPreview: !1,
      displayCommentsContextIsAggregatedShare: !1,
      displayCommentsContextIsStorySet: !1,
      displayCommentsFeedbackContext: null,
      feedLocation: "COMET_RACIAL_JUSTICE_HUB_FEED",
      feedbackSource: 93,
      focusCommentID: null,
      privacySelectorRenderLocation: "COMET_RACIAL_JUSTICE_HUB",
      renderLocation: "discovery_hub_feed",
      scale: d("WebPixelRatio").get(),
      useDefaultActor: !1,
    };
    function a(a, b) {
      return babelHelpers["extends"]({}, h, {
        feedLocation: b,
        renderLocation: a,
      });
    }
    g.variables = h;
    g.getFeedVariables = a;
  },
  98
);
__d(
  "DiscoveryHubCometRoot.entrypoint",
  [
    "DiscoveryHubCometContentQuery$Parameters",
    "DiscoveryHubCometFeed.variables",
    "DiscoveryHubCometFooterQuery$Parameters",
    "DiscoveryHubCometHeaderQuery$Parameters",
    "DiscoveryHubCometStickyHeaderQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.routeProps;
        var b = a.feed_location,
          e = a.hoisted_content_ids,
          f = a.hoisted_fav,
          g = a.hoisted_unit_ids,
          h = a.hub,
          i = a.state,
          j = a.state_override;
        a = a.story_render_location;
        var k = d("WebPixelRatio").get();
        a = d("DiscoveryHubCometFeed.variables").getFeedVariables(a, b);
        return {
          queries: {
            contentQuery: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("DiscoveryHubCometContentQuery$Parameters"),
              variables: babelHelpers["extends"]({}, a, {
                hoisted_content_ids: e,
                hoisted_fav: f,
                hoisted_unit_ids: g,
                hub: h,
                scale: k,
                state: i,
                stateOverride: j,
              }),
            },
            footerQuery: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("DiscoveryHubCometFooterQuery$Parameters"),
              variables: { hub: h, scale: k },
            },
            headerQuery: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("DiscoveryHubCometHeaderQuery$Parameters"),
              variables: { hub: h, scale: k },
            },
            stickyHeaderQuery: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("DiscoveryHubCometStickyHeaderQuery$Parameters"),
              variables: { hub: h, scale: k },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "DiscoveryHubCometRoot.react"
      ).__setRef("DiscoveryHubCometRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "buildCometEventDashboardRoute.entrypoint",
  [
    "EventCometDashboardRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("EventCometDashboardRoot.react").__setRef(
        "buildCometEventDashboardRoute.entrypoint"
      ),
      function () {
        return {
          query$key: {
            parameters: b("EventCometDashboardRootQuery$Parameters"),
            variables: { scale: d("WebPixelRatio").get() },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "BirthdayCometRoot.entrypoint",
  [
    "BirthdayCometRootQuery$Parameters",
    "EventCometBirthdayMegaphoneRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometEventDashboardRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometEventDashboardRoute.entrypoint")(
      c("JSResourceForInteraction")("BirthdayCometRoot.react").__setRef(
        "BirthdayCometRoot.entrypoint"
      ),
      function (a) {
        a = a.routeProps;
        return {
          extraProps: a,
          queries: {
            birthdays$key: {
              parameters: b("BirthdayCometRootQuery$Parameters"),
              variables: { offset_month: 0, scale: d("WebPixelRatio").get() },
            },
            megaphone$key: {
              parameters: b("EventCometBirthdayMegaphoneRootQuery$Parameters"),
              variables: { scale: d("WebPixelRatio").get() },
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
  "EventCometHomeRoot.entrypoint",
  [
    "EventCometHomeRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "buildCometEventDashboardRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometEventDashboardRoute.entrypoint")(
      c("JSResourceForInteraction")("EventCometHomeRoot.react").__setRef(
        "EventCometHomeRoot.entrypoint"
      ),
      function (a) {
        a = a.routeProps;
        return {
          queries: {
            homeEvents$key: {
              parameters: b("EventCometHomeRootQuery$Parameters"),
              variables: {
                isLoggedOut: a.is_logged_out,
                scale: d("WebPixelRatio").get(),
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
  "FriendingCometRoot.entrypoint",
  [
    "BirthdayCometRoot.entrypoint",
    "FriendingCometRootQuery$Parameters",
    "JSResourceForInteraction",
    "ProfileCometTimelineListViewRouteRoot.entrypoint",
    "WebPixelRatio",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var e;
        e = {
          requests_initial: 20,
          scale: d("WebPixelRatio").get(),
          should_show_hscroll: (e = c("qex")._("1907930")) != null ? e : !1,
        };
        var f = a.routeProps,
          g = f.profileID;
        f = f.viewerID;
        var h = {
          entryPoint: c("BirthdayCometRoot.entrypoint"),
          entryPointParams: { routeProps: { hideLeftRail: !0 } },
        };
        g =
          g != null && f != null
            ? {
                entryPoint: c(
                  "ProfileCometTimelineListViewRouteRoot.entrypoint"
                ),
                entryPointParams: {
                  routeProps: {
                    userID: a.routeProps.profileID,
                    viewerID: a.routeProps.viewerID,
                  },
                },
              }
            : void 0;
        return {
          entryPoints: { birthdaysEntryPoint: h, profileEntryPoint: g },
          queries: {
            friendingCometRootQueryReference: {
              parameters: b("FriendingCometRootQuery$Parameters"),
              variables: e,
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("FriendingCometRoot.react").__setRef(
        "FriendingCometRoot.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
