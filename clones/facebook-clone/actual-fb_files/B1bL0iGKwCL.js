if (self.CavalryLogger) {
  CavalryLogger.start_js(["CWORekR"]);
}

__d(
  "PageBookmarkLaunchpointLoggerUtils",
  ["react", "requireDeferred", "useSinglePartialViewImpression"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("requireDeferred")(
        "PagesPageBookmarkLaunchpointImpressionFalcoEvent"
      ).__setRef("PageBookmarkLaunchpointLoggerUtils");
    function a(a) {
      var b = h(
        function () {
          i.onReady(function (b) {
            return b.log(function () {
              return {
                event_data: { tab: a },
                event_location: "launchpoint_content",
              };
            });
          });
        },
        [a]
      );
      return c("useSinglePartialViewImpression")({ onImpressionStart: b });
    }
    g.usePageBookmarkLaunchpointImpressionLogger = a;
  },
  98
);
__d(
  "XBizSuiteControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/latest/{?*rest}", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometPageVanityNotificationsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/notifications/",
      Object.freeze({ ref: "" }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
