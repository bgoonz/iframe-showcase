if (self.CavalryLogger) {
  CavalryLogger.start_js(["f7+JNQ2"]);
}

__d(
  "InterventionDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4011660365598705",
        metadata: {},
        name: "InterventionDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometVideoHomeFeedRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5914067885332637",
        metadata: {},
        name: "CometVideoHomeFeedRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGranularTimestamp.react",
  ["fbt", "CometTimestamp.react", "formatDate", "react", "useServerTime"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 1e3 * 60 * 60,
      k = j * 24;
    function l(a, b) {
      return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
      );
    }
    function a(a) {
      var b = a.date;
      a = a.granularity;
      a = a === void 0 ? "none" : a;
      var d = c("useServerTime")();
      if (a === "none" || a === "min")
        return i.jsx(c("CometTimestamp.react"), { date: b });
      if (a === "hour") {
        var e = b.valueOf() % j;
        e = new Date(b.valueOf() - e);
        return i.jsx(c("CometTimestamp.react"), { date: e });
      }
      if (a === "year") return c("formatDate")(b, "Y");
      if (a === "month")
        return d.getFullYear() === b.getFullYear()
          ? c("formatDate")(b, "F")
          : c("formatDate")(b, "F Y");
      if (l(b, d)) return h._("Today");
      e = new Date(d.valueOf() - k);
      if (l(b, e)) return h._("Yesterday");
      a = new Date(d.valueOf() + k);
      if (l(b, a)) return h._("Tomorrow");
      return d.getFullYear() !== b.getFullYear()
        ? c("formatDate")(b, "F j, Y")
        : c("formatDate")(b, "F j");
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "InterventionDialog.entrypoint",
  [
    "InterventionDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          extraProps: a,
          queries: {
            InterventionDialogQueryReference: {
              parameters: c("InterventionDialogQuery$Parameters"),
              variables: {
                actionType: a.actionType,
                entityID: a.entityID,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("InterventionDialog.react").__setRef(
        "InterventionDialog.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeCommonEntryPointVariables",
  ["WebPixelRatio", "gkx", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      UFI2CommentsProvider_commentsKey: null,
      displayCommentsContextEnableComment: null,
      displayCommentsContextIsAdPreview: null,
      displayCommentsContextIsAggregatedShare: null,
      displayCommentsContextIsStorySet: null,
      displayCommentsFeedbackContext: null,
      feedLocation: "VIDEO_HOME_FEED",
      feedbackSource: 60,
      focusCommentID: null,
      isComet: c("gkx")("708253"),
      isCommunityViewEntryPointEnabled: !!c("qex")._("1571809"),
      privacySelectorRenderLocation: "COMET_STREAM",
      renderLocation: "video_home",
      scale: d("WebPixelRatio").get(),
      useCommentsEntryPoint: c("gkx")("1679116"),
      useDashPrefetch: !1,
      useDefaultActor: !1,
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeFeedEntryPointVariables",
  ["CometVideoHomeCommonEntryPointVariables"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = babelHelpers["extends"](
      {},
      c("CometVideoHomeCommonEntryPointVariables"),
      {
        UFI2CommentsProvider_commentsKey: "CometVideoHomeFeedRootQuery",
        triggerData: { injected_video_id: null },
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeThreeDotContextMenuWrapperContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ contextMenuEnabled: null });
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeFeedAutoAdvanceAPIContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      advance: function () {},
      register: function () {},
      unregister: function () {},
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeFeedUnitPositionContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(0);
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeFunnelLoggingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ hasPermalinkInjection: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeRootContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      autoplay: !0,
      injectedVideoID: null,
      isFacebookReferrer: !1,
      openPermalinkOnVideoClick: !1,
      qplInstanceKey: 0,
      renderedInWatchRoot: !1,
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeSectionPositionContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "VideoHomeGlobalSoundContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      muted: !0,
      setMuted: function () {},
      setVolume: function () {},
      volume: 1,
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeLiveTabExperiments",
  ["gkx", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function () {
      return c("gkx")("976093") && c("gkx")("1351276");
    };
    var h = function () {
        return !0;
      },
      i = function () {
        return c("gkx")("1663447");
      },
      j = function () {
        return !!c("qex")._("2050744");
      };
    b = function () {
      return c("gkx")("1663448");
    };
    d = function () {
      return c("gkx")("1663449");
    };
    e = function () {
      return c("gkx")("1663450");
    };
    var k = function () {
        return (i() && j()) || (c("gkx")("976093") && c("gkx")("1399700"));
      },
      l = function () {
        return !0;
      };
    f = function () {
      return !0;
    };
    var m = function () {
      return !l() && h() && k();
    };
    g.hotswapEnabled = a;
    g.injectionEnabled = h;
    g.liveInWatchGroup1Destination = i;
    g.liveInWatchGroup1DestinationQE = j;
    g.liveInWatchGroup2Watchfeed = b;
    g.liveInWatchGroup3Pathing = d;
    g.liveInWatchGroup4Overall = e;
    g.liveEnabled = k;
    g.dedupEnabled = f;
    g.thumbnailsInjectEnabled = m;
  },
  98
);
__d(
  "CometTahoeTracePolicyContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "VideoHomeLoggingExternalLogIDContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "VideoHomeLoggingPermalinkShareIDContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { permalinkShareID: null };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "VideoHomeLoggingReactionVideoChannelTypeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "VideoHomeLoggingUpstreamPlayerSourceContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerLoggingExternalLogContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ externalLogID: null, externalLogType: null });
    g["default"] = b;
  },
  98
);
__d(
  "logVideoHomeWebFunnel",
  ["CurrentUser", "WebFunnelLogger", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      if (!c("gkx")("1238150")) return;
      var f = new (c("WebFunnelLogger"))("VideoHomeWWWFunnelDefinition")
        .setAction(a)
        .setSessionKey(c("CurrentUser").getID());
      b != null &&
        Object.entries(b).forEach(function (a) {
          var b = a[0];
          a = a[1];
          f.addFunnelPayload(b, a);
        });
      d != null &&
        Object.entries(d).forEach(function (a) {
          var b = a[0];
          a = a[1];
          f.addActionPayload(b, a);
        });
      e === !0 && f.markStart();
      f.log();
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoHomeInjectionPortalingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      initialTracePolicy: null,
      injectedVideoID: null,
      portableVideoID: null,
      subOrigin: null,
    });
    g["default"] = b;
  },
  98
);
__d(
  "XCometVideoHomeLiveControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/watch/live/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
