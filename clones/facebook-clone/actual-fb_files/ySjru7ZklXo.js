if (self.CavalryLogger) {
  CavalryLogger.start_js(["9dZ+TGj"]);
}

__d(
  "CrisisCometLogging",
  ["react", "requireDeferred", "useSinglePartialViewImpression"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    e = b.createContext;
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      l = c("requireDeferred")("CrisisClickUnitFalcoEvent").__setRef(
        "CrisisCometLogging"
      ),
      m = c("requireDeferred")("CrisisToolViewPageFalcoEvent").__setRef(
        "CrisisCometLogging"
      ),
      n = c("requireDeferred")("CrisisViewModuleFalcoEvent").__setRef(
        "CrisisCometLogging"
      ),
      o = c("requireDeferred")("CrisisViewUnitFalcoEvent").__setRef(
        "CrisisCometLogging"
      ),
      p = e();
    function q() {
      var a = j(p),
        b = function (b) {
          l.onReady(function (c) {
            c.log(function () {
              return {
                crisis_id: a == null ? void 0 : a.crisis_id,
                extra_data: babelHelpers["extends"]({}, a, b),
              };
            });
          });
        },
        d = i(
          function (b) {
            m.onReady(function (c) {
              c.log(function () {
                return {
                  crisis_id: a == null ? void 0 : a.crisis_id,
                  extra_data: babelHelpers["extends"]({}, a, b),
                };
              });
            });
          },
          [a]
        ),
        e = function (b) {
          b === void 0 && (b = {});
          var d = q(),
            a = d.logViewedUnit;
          d = i(
            function () {
              return a(b);
            },
            [a, b]
          );
          return c("useSinglePartialViewImpression")({ onImpressionStart: d });
        },
        f = function (b) {
          b === void 0 && (b = {});
          var d = q(),
            a = d.logViewedModule;
          d = i(
            function () {
              return a(b);
            },
            [a, b]
          );
          return c("useSinglePartialViewImpression")({ onImpressionStart: d });
        },
        g = i(
          function (b) {
            o.onReady(function (c) {
              c.log(function () {
                return {
                  crisis_id: a == null ? void 0 : a.crisis_id,
                  extra_data: babelHelpers["extends"]({}, a, b),
                };
              });
            });
          },
          [a]
        ),
        h = i(
          function (b) {
            n.onReady(function (c) {
              c.log(function () {
                return {
                  crisis_id: a == null ? void 0 : a.crisis_id,
                  extra_data: babelHelpers["extends"]({}, a, b),
                };
              });
            });
          },
          [a]
        );
      return {
        logClick: b,
        logViewedModule: h,
        logViewedPage: d,
        logViewedUnit: g,
        loggingContextData: a,
        useCrisisViewedModuleLogging: f,
        useCrisisViewedUnitLogging: e,
      };
    }
    function a(a, b) {
      return function (c) {
        var d = j(p),
          e = b && b(c),
          f = k(
            function () {
              return babelHelpers["extends"]({}, d, e);
            },
            [d, e]
          );
        return h.jsx(p.Provider, {
          value: f,
          children: h.jsx(a, babelHelpers["extends"]({}, c)),
        });
      };
    }
    g.useCrisisLogging = q;
    g.withCrisisLoggingProvider = a;
  },
  98
);
__d(
  "GroupsCometTabFalcoEventLog",
  ["WebSession", "react", "requireDeferred", "useCometRouteTracePolicy"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = c("requireDeferred")("GroupsTabCometEventFalcoEvent").__setRef(
        "GroupsCometTabFalcoEventLog"
      ),
      j = d("WebSession").getId(),
      k = 0,
      l = function (a) {
        var b = String(k++);
        i.onReady(function (c) {
          c = c.log;
          return c(function () {
            return babelHelpers["extends"]({}, a, {
              sequence: b,
              session_id: j,
            });
          });
        });
      };
    a = function (a, b, d) {
      var e = c("useCometRouteTracePolicy")();
      h(function () {
        return l({
          component: a,
          event_type: "impression",
          metadata: b,
          position: d,
          trace_name: e,
        });
      }, []);
    };
    g.logGroupsTabFalcoEventDeferred = l;
    g.useLogGroupsTabImpressionDeferred = a;
  },
  98
);
__d(
  "GroupsCometDiscussionCrawlerRoot.entrypoint",
  ["JSResourceForInteraction", "createCometGroupDiscussionRoot.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createCometGroupDiscussionRoot.entrypoint")({
      regularStoriesCount: 20,
      regularStoriesStreamInitialCount: 20,
      resource: c("JSResourceForInteraction")(
        "GroupsCometDiscussionCrawlerRoot.react"
      ).__setRef("GroupsCometDiscussionCrawlerRoot.entrypoint"),
      shouldDeferMainFeed: !1,
    });
    g["default"] = a;
  },
  98
);
__d(
  "mapMapToArray",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = [],
        d = 0;
      for (
        var e = a,
          f = Array.isArray(e),
          g = 0,
          e = f
            ? e
            : e[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= e.length) break;
          h = e[g++];
        } else {
          g = e.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        var i = h[0];
        h = h[1];
        c.push(b(h, i, d, a));
        d++;
      }
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "XCometGroupDiscussionControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/groups/{idorvanity}/{?view}/{?post_id}/",
      Object.freeze({
        modal: !1,
        should_open_composer: !1,
        hoisted_section_header_type: "notifications",
        show_migration_preparation_dialog: !1,
        show_migration_onboarding_dialog: !1,
      }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometGroupAboutControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/groups/{idorvanity}/about/",
      Object.freeze({ accept_recruiting_group_rules: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "GroupsCometDiscussionCrawlerRoot.react",
  [
    "CometGroupDiscussionRoot.Success.react",
    "CometInteractionSourceContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.queries;
      return h.jsx(c("CometInteractionSourceContext").Provider, {
        value: 4,
        children: h.jsx(c("CometGroupDiscussionRoot.Success.react"), {
          queryReference: a.queryReference,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometGroupsTabDiscoverControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/groups/discover/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
