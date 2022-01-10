if (self.CavalryLogger) {
  CavalryLogger.start_js(["f03X03Y"]);
}

__d(
  "useCometWindowSize",
  ["CometThrottle", "react", "useCometPassiveWindowSize"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a(a) {
      a === void 0 && (a = 500);
      var b = c("useCometPassiveWindowSize")(),
        d = b.getCurrent();
      d = i(d);
      var e = d[0],
        f = d[1];
      h(
        function () {
          var d = c("CometThrottle")(function () {
              f(b.getCurrent());
            }, a),
            e = b.subscribe(d);
          return function () {
            d.cancel(), e.remove();
          };
        },
        [b, a]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = !1;
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "StoriesCreateConstants",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      DEFAULT: {
        BODY: h._(
          "Are you sure you want to discard this story? Your story won't be saved."
        ),
        CANCEL: h._("Continue Editing"),
        CONFIRM: h._("Discard"),
        TITLE: h._("Discard Story?"),
      },
    };
    b = {
      SELECTION_TILE_HEIGHT: 330,
      SELECTION_TILE_WIDTH: 220,
      SPACE_BETWEEN_SELECTOR: 20,
    };
    c = { FOOTER_HEIGHT: 52, HEADER_HEIGHT: 16 };
    d = {
      COMET_PUSH_VIEW_HEIGHT: 28,
      CONTAINER_HORIZONTAL_PADDING: 24 * 2,
      CONTAINER_MAX_WIDTH: 940,
      CONTAINER_VERTICAL_PADDING: 32 * 2,
      CONTENT_HEADER_HEIGHT: 36,
      CONTENT_HORIZONTAL_PADDING: 16 * 2,
      CONTENT_VERTICAL_PADDING: 16 * 2,
      MAX_OVERLAY_WIDTH: 472.5,
      SIDE_PANE_WIDTH: 360,
    };
    e = h._("Start typing");
    f = { FOOTER_HEIGHT: 12, HEADER_HEIGHT: 12 };
    h = { EDITING: "editing", NONE: "none" };
    var i = { EMOJI: "emoji", LOCATION: "location", POLL: "poll", TAG: "tag" },
      j = { EDITING: "editing", NONE: "none" },
      k = { HORIZONTAL: "horizontal", NONE: "none" },
      l = 26,
      m = 3,
      n = 4,
      o = { FOOTER_HEIGHT: 92 };
    g.LEAVE_TEXT = a;
    g.NULL_STATE_DIMENSIONS = b;
    g.PHOTO_PREVIEW_DIMENSIONS = c;
    g.PREVIEW_DIMENSIONS = d;
    g.SATP_PLACEHOLDER = e;
    g.SATP_PREVIEW_DIMENSIONS = f;
    g.STICKER_EDITING_MODE = h;
    g.STICKER_TYPE = i;
    g.TEXT_OVERLAY_MODE = j;
    g.OVERLAY_ALIGNMENT_TYPE = k;
    g.VIDEO_MAX_DURATION = l;
    g.VIDEO_MIN_DURATION = m;
    g.VIDEO_MIN_DURATION_FOR_TRIM = n;
    g.VIDEO_PREVIEW_DIMENSIONS = o;
  },
  98
);
__d(
  "copiedLinkPushToast",
  ["fbt", "ix", "TetraIcon.react", "cometPushToast", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      d("cometPushToast").cometPushToast(
        {
          icon: j.jsx(c("TetraIcon.react"), {
            color: "positive",
            icon: d("fbicon")._(i("498146"), 20),
            size: 20,
          }),
          message: h._("Link copied"),
          testid: "CometCopyLinkToast",
        },
        void 0
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "Clipboard",
  ["Promise", "UserAgent"],
  function (a, b, c, d, e, f, g) {
    function a() {
      return (
        (window.document &&
          window.document.queryCommandSupported instanceof Function &&
          window.document.queryCommandSupported("copy") &&
          !(
            c("UserAgent").isBrowser("Firefox < 41") ||
            c("UserAgent").isPlatform("iOS < 10.3")
          )) ||
        c("UserAgent").isBrowser("Chrome >= 43")
      );
    }
    function h(a, b) {
      b = b || document.body;
      if (!b) return !1;
      var d = document.activeElement,
        e = !0,
        f = document.createElement("textarea");
      b.appendChild(f);
      f.value = a;
      if (c("UserAgent").isPlatform("iOS >= 10.3")) {
        a = document.createRange();
        a.selectNodeContents(f);
        var g = window.getSelection();
        g.removeAllRanges();
        g.addRange(a);
        f.setSelectionRange(0, 999999);
      } else f.select();
      try {
        e = document.execCommand("copy");
      } catch (a) {
        e = !1;
      }
      b.removeChild(f);
      d != null && d.focus();
      return e;
    }
    function d(a) {
      var c = window.navigator;
      if (c && c.clipboard && typeof c.clipboard.writeText === "function")
        return c.clipboard.writeText(a);
      return h(a) ? b("Promise").resolve() : b("Promise").reject();
    }
    g.isSupported = a;
    g.copy = h;
    g.copyAsync = d;
  },
  98
);
__d(
  "useShallowEqualMemo",
  ["shallowEqual", "useCustomEqualityMemo"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("useCustomEqualityMemo")(a, c("shallowEqual"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "XCometGamingArenaHomeControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/gaming/tournaments/",
      Object.freeze({ open_create_tournament_form: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
