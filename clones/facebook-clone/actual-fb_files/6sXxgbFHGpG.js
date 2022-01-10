if (self.CavalryLogger) {
  CavalryLogger.start_js(["Y3TGvL3"]);
}

__d(
  "CometSinglePostRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4182469045179136",
        metadata: {},
        name: "CometSinglePostRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTimelineListViewRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4373412682764301",
        metadata: {},
        name: "ProfileCometTimelineListViewRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometHeaderQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4229655333790855",
        metadata: {},
        name: "ProfileCometHeaderQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometLoggedOutRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4303095116419786",
        metadata: {},
        name: "ProfileCometLoggedOutRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTimelineFeedQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4243930472355277",
        metadata: {},
        name: "ProfileCometTimelineFeedQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometViewAsBarQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4077637725659241",
        metadata: {},
        name: "ProfileCometViewAsBarQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4136983986396077",
        metadata: {},
        name: "CometPostsLoggedOutCTAWrapperFooterDataQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometProfileLoggedOutCTAWrapperFooterDataQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5341536295888250",
        metadata: {},
        name: "CometProfileLoggedOutCTAWrapperFooterDataQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometSinglePostRoot.entrypoint",
  [
    "CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters",
    "CometSinglePostRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var e = a.routeParams,
          f = e.comment_id;
        e = e.reply_comment_id;
        a = a.routeProps;
        var g = a.actorID;
        a = a.storyID;
        e = (e = e) != null ? e : f;
        f = {
          UFI2CommentsProvider_commentsKey: "CometSinglePostRoute",
          displayCommentsContextEnableComment: null,
          displayCommentsContextIsAdPreview: null,
          displayCommentsContextIsAggregatedShare: null,
          displayCommentsContextIsStorySet: null,
          displayCommentsFeedbackContext: null,
          feedLocation: "PERMALINK",
          feedbackSource: 2,
          focusCommentID: e != null ? String(e) : null,
          privacySelectorRenderLocation: "COMET_STREAM",
          renderLocation: "permalink",
          scale: d("WebPixelRatio").get(),
          storyID: a,
          useDefaultActor: !1,
        };
        e = {
          singlePostRootQueryReference: {
            environmentProviderOptions: { ssrBoundary: "feed" },
            parameters: b("CometSinglePostRootQuery$Parameters"),
            variables: f,
          },
        };
        if (c("gkx")("1832049"))
          return {
            queries: babelHelpers["extends"]({}, e, {
              loggedOutCTAfooterDataQueryReference: {
                parameters: b(
                  "CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters"
                ),
                variables: { profileID: g, scale: d("WebPixelRatio").get() },
              },
            }),
          };
        else return { queries: e };
      },
      root: c("JSResourceForInteraction")("CometSinglePostRoot.react").__setRef(
        "CometSinglePostRoot.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometViewAsBar.entrypoint",
  ["JSResourceForInteraction", "ProfileCometViewAsBarQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.profileID;
        return {
          queries: {
            queryReference: {
              parameters: c("ProfileCometViewAsBarQuery$Parameters"),
              variables: { id: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ProfileCometViewAsBar.react"
      ).__setRef("ProfileCometViewAsBar.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "buildCometProfileRoute.entrypoint",
  [
    "CometProfileLoggedOutCTAWrapperFooterDataQuery$Parameters",
    "JSResourceForInteraction",
    "ProfileCometHeaderQuery$Parameters",
    "ProfileCometViewAsBar.entrypoint",
    "ProfileCometViewAsConstants.entrypoint",
    "WebPixelRatio",
    "createGenericCompoundEntryPointBuilder",
    "gkx",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = c("createGenericCompoundEntryPointBuilder")(a, b);
      return function (a, b) {
        var f = { getPreloadProps: b, root: a };
        return e(function (a) {
          return a.routeProps.viewerID ===
            d("ProfileCometViewAsConstants.entrypoint").VIEW_AS_EVERYONE_USER
            ? {
                contentEntryPoint: { entryPoint: f, entryPointParams: a },
                viewAsEntryPoint: {
                  entryPoint: c("ProfileCometViewAsBar.entrypoint"),
                  entryPointParams: { profileID: a.routeProps.userID },
                },
              }
            : { contentEntryPoint: { entryPoint: f, entryPointParams: a } };
        });
      };
    }
    b = a(
      c("JSResourceForInteraction")("ProfileCometRoot.react").__setRef(
        "buildCometProfileRoute.entrypoint"
      ),
      function (a) {
        var b;
        a = a.routeProps.userID;
        b = {
          environmentProviderOptions: { ssrBoundary: "root" },
          parameters: c("ProfileCometHeaderQuery$Parameters"),
          variables: {
            scale: d("WebPixelRatio").get(),
            shouldDeferProfilePic: !c("gkx")("620"),
            useVNextHeader: (b = c("qex")._("153")) != null ? b : !1,
            userID: String(a),
          },
        };
        if (c("gkx")("1801408"))
          return {
            footerDataQueryReference: {
              parameters: c(
                "CometProfileLoggedOutCTAWrapperFooterDataQuery$Parameters"
              ),
              variables: {
                height: 500,
                scale: d("WebPixelRatio").get(),
                userID: String(a),
                width: 500,
              },
            },
            headerQueryReference: b,
          };
        else return { headerQueryReference: b };
      }
    );
    g["default"] = b;
  },
  98
);
__d(
  "ProfileCometTimelineListViewRouteRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometTimelineFeedQuery$Parameters",
    "ProfileCometTimelineListViewRootQuery$Parameters",
    "WebPixelRatio",
    "buildCometProfileRoute.entrypoint",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometProfileRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "ProfileCometTimelineListViewRoot.react"
      ).__setRef("ProfileCometTimelineListViewRouteRoot.entrypoint"),
      function (a) {
        var b = 1;
        b = {
          UFI2CommentsProvider_commentsKey: "ProfileCometTimelineRoute",
          count: b,
          feedLocation: "TIMELINE",
          feedbackSource: 0,
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
            timelineFeedQueryReference: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("ProfileCometTimelineFeedQuery$Parameters"),
              variables: b,
            },
            timelineListViewRootQueryReference: {
              environmentProviderOptions: { ssrBoundary: "root" },
              parameters: c("ProfileCometTimelineListViewRootQuery$Parameters"),
              variables: {
                scale: d("WebPixelRatio").get(),
                shouldDeferAux: !c("gkx")("620"),
                shouldDeferTimeline: !c("gkx")("620"),
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
__d(
  "ProfileCometLoggedOutRouteRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometLoggedOutRootQuery$Parameters",
    "WebPixelRatio",
    "buildCometProfileRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometProfileRoute.entrypoint")(
      c("JSResourceForInteraction")("ProfileCometLoggedOutRoot.react").__setRef(
        "ProfileCometLoggedOutRouteRoot.entrypoint"
      ),
      function (a) {
        return {
          queries: {
            loggedOutRootQueryReference: {
              parameters: c("ProfileCometLoggedOutRootQuery$Parameters"),
              variables: {
                collectionToken: a.routeProps.collectionToken || "",
                scale: d("WebPixelRatio").get(),
                userID: String(a.routeProps.userID),
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
