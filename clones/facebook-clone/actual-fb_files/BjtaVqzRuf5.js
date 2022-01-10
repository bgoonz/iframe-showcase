if (self.CavalryLogger) {
  CavalryLogger.start_js(["ahwStnQ"]);
}

__d(
  "GroupsCometEndOfFeedQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3920125298078764",
        metadata: {},
        name: "GroupsCometEndOfFeedQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometEndOfFeedLoader.react",
  [
    "CometDOMOnlyBoundary.react",
    "CometErrorBoundary.react",
    "react",
    "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react",
    "recoverableViolation",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      c("recoverableViolation")(
        "CometEndOfFeedLoader level component did not catch own error",
        "comet_feed",
        { error: a }
      );
    }
    function a(a) {
      var b = a.entryPoint,
        d = a.entryPointParams,
        e = a.entryPointProps;
      a = a.glimmer;
      var f = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      return b == null
        ? a
        : h.jsx(c("CometDOMOnlyBoundary.react"), {
            fallback: a,
            children: h.jsx(c("CometErrorBoundary.react"), {
              onError: i,
              children: h.jsx(
                c(
                  "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"
                ),
                {
                  entryPoint: b,
                  entryPointParams: d,
                  environmentProvider: f,
                  props: e,
                }
              ),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "addLocalGroupFeedInlineMessage",
  ["CometRelay", "cometUniqueID", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, d) {
      a = a.get(b);
      if (a == null) {
        c("recoverableViolation")(
          "Group Feed Inline Message Updater: Could not find group edge in store",
          "groups_comet"
        );
        return;
      }
      b = a.getLinkedRecords("local_feed_inline_messages") || [];
      a.setLinkedRecords([].concat(b, [d]), "local_feed_inline_messages");
    }
    function a(a, b, e) {
      d("CometRelay").commitLocalUpdate(a, function (a) {
        var d =
            "client:LocalGroupFeedVideoInlineMessage:" + c("cometUniqueID")(),
          f = a.create(d, "LocalGroupFeedVideoInlineMessage");
        f.setValue(String(d), "id");
        f.setValue(String(b), "group_id");
        f.setValue(String(e), "message");
        h(a, b, f);
      });
    }
    function b(a, b, e) {
      d("CometRelay").commitLocalUpdate(a, function (a) {
        var d = a.get(b);
        if (d == null) {
          c("recoverableViolation")(
            "Group Feed Inline Message Updater: Could not find group edge in store",
            "groups_comet"
          );
          return;
        }
        var f = d.getLinkedRecords("local_feed_inline_messages") || [];
        f = f.filter(function (a) {
          return (a == null ? void 0 : a.getDataID()) !== e;
        });
        a["delete"](e);
        d.setLinkedRecords(f, "local_feed_inline_messages");
      });
    }
    g.addLocalVideoFeedMessage = a;
    g.removeLocalFeedMessage = b;
  },
  98
);
__d(
  "useIdorvanity",
  ["CometRouteParams"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("CometRouteParams").useRouteParams(),
        b = a.id;
      a = a.idorvanity;
      if (typeof a === "string") return a;
      else if (b != null && String(b) !== "") return String(b);
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometFeedRegularStoriesGlimmer.react",
  ["BaseGlimmer.react", "CometFeedStoryGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.hasSortingSetting;
      a = a === void 0 ? !1 : a;
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            className: "aodizinl dati1w0a ihqw7lf3",
            children: h.jsx(c("BaseGlimmer.react"), {
              className:
                "hxxdkrkm km676qkl bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
              index: 0,
            }),
          }),
          h.jsx(c("CometFeedStoryGlimmer.react"), {}),
          h.jsx(c("CometFeedStoryGlimmer.react"), {}),
          a &&
            h.jsxs(h.Fragment, {
              children: [
                h.jsx(c("CometFeedStoryGlimmer.react"), {}),
                h.jsx(c("CometFeedStoryGlimmer.react"), {}),
              ],
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometEndOfFeed.entrypoint",
  ["GroupsCometEndOfFeedQuery$Parameters", "JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.id;
        return {
          queries: {
            endOfFeedQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: c("GroupsCometEndOfFeedQuery$Parameters"),
              variables: { id: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "GroupsCometEndOfFeed.react"
      ).__setRef("GroupsCometEndOfFeed.entrypoint"),
    };
    b = a;
    g["default"] = b;
  },
  98
);
