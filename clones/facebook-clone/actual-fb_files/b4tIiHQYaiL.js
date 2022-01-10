if (self.CavalryLogger) {
  CavalryLogger.start_js(["0TfEug1"]);
}

__d(
  "ProfileCometFeaturedHighlightsStrings",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Add More");
    b = h._("Edit Featured");
    c = h._("Edit Featured Collection");
    d = h._("Featured");
    e = h._("Featured Section");
    f = h._("Find Support or Report Featured Item");
    h = h._("As people view your featured item, you'll see details here.");
    g.ADD_MORE = a;
    g.EDIT_FEATURED = b;
    g.EDIT_FEATURED_COLLECTION = c;
    g.FEATURED = d;
    g.FEATURED_SECTION = e;
    g.REPORT_ITEM = f;
    g.ZERO_VIEWER_COUNT_TEXT = h;
  },
  98
);
__d(
  "StoriesQueryArgumentsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      hideSelfBucket: !1,
      initialBucketID: null,
      initialBucketsCount: 9,
      pageBucketsCount: 9,
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "StoriesTestUtils",
  ["Banzai", "BanzaiConsts"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = !1), (this.$2 = []);
      }
      var b = a.prototype;
      b.initializeBanzaiLogging = function () {
        var a = this;
        if (this.$1) return;
        this.$1 = !0;
        this.$2 = [];
        c("Banzai").subscribe(c("BanzaiConsts").SEND, function () {
          var b = c("Banzai")._testState();
          b = b.postBuffer;
          a.$3(b);
        });
        c("Banzai").flush && c("Banzai").flush();
      };
      b.$3 = function (a) {
        var b = this;
        a = a.filter(function (a) {
          var c = a[0];
          return c === "require_cond_exposure_logging" ||
            c === "gk2_exposure" ||
            !(
              c.startsWith("logger:DirectMessagingLoggerConfig") ||
              c.includes("falco") ||
              c.startsWith("xtrackable:")
            )
            ? !1
            : b.$2.find(function (b) {
                return b[0] === a[0] && b[2] === a[2];
              }) === void 0;
        });
        this.$2 = this.$2.concat(a);
      };
      b.getLogs = function () {
        return this.$2;
      };
      b.getMockedCardID = function (a, b, c) {
        return (a * 1e3 + b * 100 + c).toString();
      };
      b.getNavListName = function (a) {
        return "friend" + a;
      };
      return a;
    })();
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "StoriesFeedbackFlowTypes",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({ STICKER: 0, GIF: 1, EMOJI: 2, NONE: 3 });
    f.StickerReplyTypes = a;
  },
  66
);
__d(
  "StoriesLoggerContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      logger: {
        clickInteractiveFeedbackReplyButtonLog: function (a) {
          return void 0;
        },
        closeStoryLog: function () {
          return void 0;
        },
        deleteLog: function () {
          return void 0;
        },
        getImpressionConfig: function () {
          return void 0;
        },
        getImpressionData: function (a) {
          return void 0;
        },
        getTimespentConfig: function () {
          return void 0;
        },
        handleLiveVideoLog: function (a) {
          return void 0;
        },
        openLinkLog: function () {
          return void 0;
        },
        openMediaLog: function (a) {
          return void 0;
        },
        openStoryLog: function () {
          return void 0;
        },
        openViewerSheetLog: function () {
          return void 0;
        },
        pauseByKeyboardLog: function (a, b) {
          return void 0;
        },
        pauseLog: function (a) {
          return void 0;
        },
        replyAttemptCompletedLog: function (a, b) {
          return void 0;
        },
        replyLog: function (a) {
          return void 0;
        },
        replySentWhenSmartReplyShownLog: function (a, b, c, d) {
          return void 0;
        },
        smartReplyImpressionLog: function (a, b, c) {
          return void 0;
        },
        storyMediaViewLog: function (a) {
          return void 0;
        },
        storyNavigationLog: function (a) {
          return void 0;
        },
        visitPageLog: function () {
          return void 0;
        },
      },
    });
    g["default"] = b;
  },
  98
);
__d(
  "StoriesLoggerSession",
  ["StoriesTestUtils", "gkx", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = null,
      j = null,
      k = null,
      l = function () {
        k = null;
      },
      m = function (a) {
        h = a;
      },
      n = function (a) {
        i = a == null ? c("uuid")() : a;
      },
      o = function (a) {
        j = a == null ? c("uuid")() : a;
      };
    function a() {
      return k;
    }
    function b() {
      return h;
    }
    function d() {
      return i;
    }
    function e() {
      return j;
    }
    function f(a, b, d) {
      c("gkx")("709647") && c("StoriesTestUtils").initializeBanzaiLogging(),
        n(a),
        o(b),
        m(d),
        l();
    }
    var p = function (a) {
      k = a;
    };
    g._initializeCloseGesture = l;
    g._initializeOpenViewerSource = m;
    g._initializeTraySessionID = n;
    g._initializeViewerSessionID = o;
    g.getCloseGesture = a;
    g.getOpenViewerSource = b;
    g.getTraySessionID = d;
    g.getViewerSessionID = e;
    g.initialize = f;
    g.setCloseGesture = p;
  },
  98
);
__d(
  "StoriesSuspensePauseContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { isPaused: !1, setPause: function (a, b) {} };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "storiesViewerSuspenseEmitter",
  ["BaseEventEmitter"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (c("BaseEventEmitter"))();
    a = {
      bucketLoaded: function () {
        h.emit("bucketLoaded");
      },
      listenToBucketLoaded: function (a) {
        var b = h.addListener("bucketLoaded", a);
        return function () {
          return b.remove();
        };
      },
      listenToNavListItemTransition: function (a) {
        var b = h.addListener("navListTransition", a);
        return function () {
          return b.remove();
        };
      },
      listenToPauseRequest: function (a) {
        var b = h.addListener("requestPause", a);
        return function () {
          return b.remove();
        };
      },
      listenToReshareRequest: function (a) {
        var b = h.addListener("reshareRequest", a);
        return function () {
          return b.remove();
        };
      },
      listenToTransitionRequest: function (a) {
        var b = h.addListener("transitionRequest", a);
        return function () {
          return b.remove();
        };
      },
      navListItemTransition: function () {
        h.emit("navListTransition");
      },
      requestBucketTransition: function (a, b) {
        b === void 0 && (b = 1), h.emit("transitionRequest", a, b);
      },
      requestPause: function (a, b) {
        h.emit("requestPause", a, b);
      },
      requestReshare: function (a) {
        h.emit("reshareRequest", a);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
