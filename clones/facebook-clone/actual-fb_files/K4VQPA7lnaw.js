if (self.CavalryLogger) {
  CavalryLogger.start_js(["IYNymQm"]);
}

__d(
  "MWChatStateActions.bs",
  ["bs_caml_obj"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return [
        {
          TAG: 0,
          _0: function (c) {
            var d = c.tabs.get(a);
            if (!(d == null) && !b("bs_caml_obj").caml_equal(c.focusedTabId, a))
              return {
                tabs: c.tabs,
                mediaViewerLastOpen: c.mediaViewerLastOpen,
                focusedTabId: a,
                nextTabId: c.nextTabId,
              };
            else return c;
          },
        },
      ];
    }
    function c(a) {
      return [
        {
          TAG: 0,
          _0: function (a) {
            var b = a.focusedTabId;
            if (b !== void 0)
              return {
                tabs: a.tabs,
                mediaViewerLastOpen: a.mediaViewerLastOpen,
                focusedTabId: void 0,
                nextTabId: a.nextTabId,
              };
            else return a;
          },
        },
      ];
    }
    function d(a, b) {
      return [
        {
          TAG: 1,
          _0: b,
          _1: function (b) {
            if (a <= b.closeWatermark) return b;
            else
              return {
                tabId: b.tabId,
                tabType: b.tabType,
                openWatermark: b.openWatermark,
                minimiseWatermark: b.minimiseWatermark,
                clientForcedMinimiseWatermark: b.clientForcedMinimiseWatermark,
                closeWatermark: a,
              };
          },
        },
      ];
    }
    function e(a, b) {
      return [
        {
          TAG: 3,
          _0: b,
          _1: function (c) {
            if (a <= c.openWatermark) return c;
            else
              return {
                tabId: c.tabId,
                tabType: b,
                openWatermark: a,
                minimiseWatermark: c.minimiseWatermark,
                clientForcedMinimiseWatermark: c.clientForcedMinimiseWatermark,
                closeWatermark: c.closeWatermark,
              };
          },
        },
      ];
    }
    function g(a, b) {
      return [
        {
          TAG: 1,
          _0: b,
          _1: function (b) {
            if (a <= b.openWatermark) return b;
            else
              return {
                tabId: b.tabId,
                tabType: b.tabType,
                openWatermark: a,
                minimiseWatermark: b.minimiseWatermark,
                clientForcedMinimiseWatermark: b.clientForcedMinimiseWatermark,
                closeWatermark: b.closeWatermark,
              };
          },
        },
      ];
    }
    function h(a, b) {
      return [
        {
          TAG: 1,
          _0: b,
          _1: function (b) {
            if (a <= b.minimiseWatermark) return b;
            else
              return {
                tabId: b.tabId,
                tabType: b.tabType,
                openWatermark: b.openWatermark,
                minimiseWatermark: a,
                clientForcedMinimiseWatermark: b.clientForcedMinimiseWatermark,
                closeWatermark: b.closeWatermark,
              };
          },
        },
      ];
    }
    function i(a, b) {
      return [
        {
          TAG: 1,
          _0: b,
          _1: function (b) {
            if (a <= b.clientForcedMinimiseWatermark) return b;
            else
              return {
                tabId: b.tabId,
                tabType: b.tabType,
                openWatermark: b.openWatermark,
                minimiseWatermark: b.minimiseWatermark,
                clientForcedMinimiseWatermark: a,
                closeWatermark: b.closeWatermark,
              };
          },
        },
      ];
    }
    function j(a, b) {
      return [
        {
          TAG: 2,
          _0: b,
          _1: function (b) {
            if (a <= b.minimiseWatermark) return b;
            else
              return {
                tabId: b.tabId,
                tabType: b.tabType,
                openWatermark: b.openWatermark,
                minimiseWatermark: a,
                clientForcedMinimiseWatermark: b.clientForcedMinimiseWatermark,
                closeWatermark: b.closeWatermark,
              };
          },
        },
      ];
    }
    function k(a, b, c) {
      return [
        {
          TAG: 1,
          _0: b,
          _1: function (a) {
            return {
              tabId: a.tabId,
              tabType: { TAG: 1, _0: c },
              openWatermark: a.openWatermark,
              minimiseWatermark: a.minimiseWatermark,
              clientForcedMinimiseWatermark: a.clientForcedMinimiseWatermark,
              closeWatermark: a.closeWatermark,
            };
          },
        },
      ];
    }
    function l(a, b, c) {
      return [
        {
          TAG: 1,
          _0: a,
          _1: function (a) {
            var d = a.tabType;
            if (d.TAG === 0) return a;
            else
              return {
                tabId: a.tabId,
                tabType: {
                  TAG: 1,
                  _0: {
                    threadKey: b,
                    clientThreadKey: c,
                    threadType: d._0.threadType,
                  },
                },
                openWatermark: a.openWatermark,
                minimiseWatermark: a.minimiseWatermark,
                clientForcedMinimiseWatermark: a.clientForcedMinimiseWatermark,
                closeWatermark: a.closeWatermark,
              };
          },
        },
      ];
    }
    f.focusTab = a;
    f.blurTab = c;
    f.closeTab = d;
    f.openTab = e;
    f.maximizeTab = g;
    f.minimizeTab = h;
    f.forceMinimizeTab = i;
    f.notificationBringHeadToTop = j;
    f.lockInTab = k;
    f.updateThreadKeyDescriptor = l;
  },
  null
);
__d(
  "MWChatOpenNewTab.bs",
  [
    "LSThreadAttributionStore.bs",
    "MWChatMultitabContext.bs",
    "MWChatMultitabDispatcher.bs",
    "MWChatStateActions.bs",
    "MessengerWebEvent",
    "MessengerWebEventsFalcoEvent.bs",
    "ODS",
    "bs_curry",
    "cr:9838",
    "react",
    "useCometFeedNoRoutingNavigationEventLogger",
    "useMWChatOpenTabTraceProvider",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function i(a) {
      if (!(b("cr:9838") == null))
        return b("bs_curry")._1(b("cr:9838").useDispatch, void 0);
    }
    function a(a, c) {
      var d = b("useMWChatOpenTabTraceProvider")(),
        e = b("useCometFeedNoRoutingNavigationEventLogger")(),
        f = h.useContext(b("MWChatMultitabContext.bs").context),
        g = i(void 0);
      if (g !== void 0)
        return function (a) {
          return b("bs_curry")._1(
            g,
            b("MWChatStateActions.bs").openTab(Date.now(), { TAG: 0, _0: [] })
          );
        };
      else
        return h.useCallback(
          function (g) {
            e(Date.now(), "", "messenger");
            b("ODS").bumpEntityKey(3185, "mwchat_tab", "open_new");
            b("MessengerWebEventsFalcoEvent.bs").log(function () {
              return {
                entry_point: a,
                event_name: b("MessengerWebEvent").OPEN_CHAT_TAB,
              };
            });
            b("LSThreadAttributionStore.bs").setSourceForNewThread(c);
            return d(
              function (a) {
                if (f !== void 0)
                  return b("MWChatMultitabDispatcher.bs").dispatch(void 0, f, {
                    TAG: 0,
                    _0: g,
                  });
              },
              "new_message",
              a
            );
          },
          [a, f, e, d]
        );
    }
    c = b("cr:9838");
    f.$MWChatStateV2$requireCond = b("cr:9838");
    f.mwChatStateV2 = c;
    f.useDispatch = i;
    f.useHook = a;
  },
  null
);
__d(
  "MWChatMultitabHiddenChatHeads.bs",
  [
    "MWChatDeduplicateThreadIds.bs",
    "MWChatMultitabStateHook.bs",
    "MWChatVisibleChatHeads.bs",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function i(a) {
      return b("MWChatVisibleChatHeads.bs").get(
        a.chatHeads,
        a.openTabsState
      )[1];
    }
    function a(a) {
      var c = b("MWChatMultitabStateHook.bs").useHook_DEPRECATED(void 0);
      return h.useMemo(
        function () {
          return b("MWChatDeduplicateThreadIds.bs").get(i(c));
        },
        [c]
      );
    }
    f.get = i;
    f.useHook = a;
  },
  null
);
__d(
  "MWChatMultitabVisibleChatHeads.bs",
  [
    "MWChatDeduplicateThreadIds.bs",
    "MWChatMultitabStateHook.bs",
    "MWChatVisibleChatHeads.bs",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function i(a) {
      a = b("MWChatVisibleChatHeads.bs").get(a.chatHeads, a.openTabsState);
      return a[0].reverse();
    }
    function a(a) {
      var c = b("MWChatMultitabStateHook.bs").useHook_DEPRECATED(void 0);
      return h.useMemo(
        function () {
          return b("MWChatDeduplicateThreadIds.bs").get(i(c));
        },
        [c]
      );
    }
    f.get = i;
    f.useHook = a;
  },
  null
);
__d(
  "MWChatHeadConstants.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 58;
    f.pixels_between_chat_heads = a;
  },
  null
);
__d(
  "MWChatHeadsShared.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      chatHead: {
        display: "j83agx80",
        listStyle: "p7hjln8o",
        marginBottom: "oud54xpy",
        opacity: "pedkr2u6",
        position: "pmk7jnqg",
        transitionDuration: "ebpj63zs",
        transitionProperty: "flx89l3n",
        transitionTimingFunction: "msbwk0y7",
      },
      chatHeadTarget: {
        alignItems: "bp9cbjyn",
        backgroundColor: "g5ia77u1",
        display: "j83agx80",
        height: "j0lfo8lj",
        justifyContent: "taijpn5t",
        marginStart: "ocgrx2df",
        marginTop: "irj2b8pg",
        width: "etr7akla",
      },
    };
    f.styles = a;
  },
  null
);
__d(
  "MWChatTabContainerShared.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      chatTabContainer: {
        position: "pmk7jnqg",
        bottom: "lfi1tu6t",
        end: "esma6hys",
        display: "j83agx80",
      },
      chatTabContainerBottom: { bottom: "i09qtzwb", position: "l9j0dhe7" },
      chatTab: {
        backgroundColor: "nred35xi",
        borderTopStartRadius: "ue3kfks5",
        borderTopEndRadius: "pw54ja7n",
        borderBottomEndRadius: "uo3d90p7",
        borderBottomStartRadius: "l82x9zwi",
        boxShadow: "eu4i7hue",
        fontSize: "jq4qci2q",
        lineHeight: "a3bd9o3v",
        overflowX: "ni8dbmo4",
        overflowY: "stjgntxs",
        marginStart: "gu00c43d",
        width: "jbcpqwzg",
        transform: "fh5enmmv",
        height: "kwja4m9d",
        maxHeight: "la0exbxb",
        "@media (min-height: 1280px)": { height: "l8e2pc74" },
      },
      chatTabThin: { width: "elm1n26q" },
      chatTabNoBottomRadius: {
        borderBottomStartRadius: "mrjvor2e",
        borderBottomEndRadius: "jinzq4gt",
      },
      header: {
        width: "k4urcfbm",
        height: "m7zwrmfr",
        backgroundColor: "nred35xi",
        boxShadow: "rlauoc8d",
        transitionDuration: "tn0ko95a",
        transitionProperty: "cmqm4kv0",
        transitionTimingFunction: "b7h9ocf4",
      },
      workChatTab: { width: "iyyx5f41", height: "bipmatt0" },
      sidebarChatOverrides: {
        borderStart: "aypy0576",
        borderTopStartRadius: "monazrh9",
        borderTopEndRadius: "h905i5nu",
        borderBottomEndRadius: "jinzq4gt",
        borderBottomStartRadius: "mrjvor2e",
        boxShadow: "mvk8q8v6",
        marginStart: "hcukyx3x",
        "@media (max-height: 539px)": { height: "d7ti7np3" },
      },
    };
    f.styles = a;
  },
  null
);
__d(
  "useMWNewChatTabContainerPreload",
  ["JSResourceForInteraction", "JSScheduler", "react", "useCometPreloader"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("JSResourceForInteraction")("MWNewChatTabContainer.bs").__setRef(
        "useMWNewChatTabContainerPreload"
      );
    function a() {
      var a = h(function () {
        d("JSScheduler").scheduleSpeculativeCallback(function () {
          return i.preload();
        });
      }, []);
      a = c("useCometPreloader")("button", a, a);
      var b = a[0];
      a = a[1];
      return [b, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "LSMessagingThreadTypeUtil.bs",
  ["MessagingThreadType.bs", "bs_caml"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (
        b("bs_caml").i64_eq(a, b("MessagingThreadType.bs").group) ||
        b("bs_caml").i64_eq(
          a,
          b("MessagingThreadType.bs").tincanGroupDisappearing
        ) ||
        b("bs_caml").i64_eq(
          a,
          b("MessagingThreadType.bs").secureMessageOverWaGroup
        ) ||
        b("bs_caml").i64_eq(a, b("MessagingThreadType.bs").communityGroup) ||
        b("bs_caml").i64_eq(
          a,
          b("MessagingThreadType.bs").communityGroupUnjoined
        )
      )
        return !0;
      else return !1;
    }
    function c(a) {
      if (
        b("bs_caml").i64_eq(a, b("MessagingThreadType.bs").oneToOne) ||
        b("bs_caml").i64_eq(a, b("MessagingThreadType.bs").tincanOneToOne) ||
        b("bs_caml").i64_eq(
          a,
          b("MessagingThreadType.bs").carrierMessagingOneToOne
        ) ||
        b("bs_caml").i64_eq(
          a,
          b("MessagingThreadType.bs").tincanOneToOneDisappearing
        ) ||
        b("bs_caml").i64_eq(
          a,
          b("MessagingThreadType.bs").secureMessageOverWaOneToOne
        )
      )
        return !0;
      else return !1;
    }
    function d(a) {
      if (
        b("bs_caml").i64_eq(
          a,
          b("MessagingThreadType.bs").secureMessageOverWaOneToOne
        ) ||
        b("bs_caml").i64_eq(
          a,
          b("MessagingThreadType.bs").secureMessageOverWaGroup
        )
      )
        return !0;
      else return !1;
    }
    function e(a) {
      a = a.NAME;
      if (a === "Group") return b("MessagingThreadType.bs").group;
      else if (a === "User" || a === "Page")
        return b("MessagingThreadType.bs").oneToOne;
      else return b("MessagingThreadType.bs").tincanOneToOne;
    }
    f.isGroup = a;
    f.isOneToOne = c;
    f.isSecure = d;
    f.ofThreadId = e;
  },
  null
);
__d(
  "MAWGating.bs",
  ["qex"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return b("qex")._("499") === !0;
    }
    function c(a) {
      return b("qex")._("106") === !0;
    }
    function d(a) {
      return b("qex")._("110") === !0;
    }
    function e(a) {
      return b("qex")._("366") === !0;
    }
    function g(a) {
      return b("qex")._("391") === !0;
    }
    function h(a) {
      return b("qex")._("475") === !0;
    }
    f.isArmadillo = a;
    f.changeGroupNameEnabled = c;
    f.isArchiveThreadEnabled = d;
    f.isGifEnabled = e;
    f.isStickerEnabled = g;
    f.wellBeingFeaturesEnabled = h;
  },
  null
);
__d(
  "MAWGating.re",
  ["MAWGating.bs"],
  function (a, b, c, d, e, f) {
    c = (a = b("MAWGating.bs")).isArmadillo;
    f.isArmadillo = c;
    d = a.changeGroupNameEnabled;
    f.changeGroupNameEnabled = d;
    e = a.isArchiveThreadEnabled;
    f.isArchiveThreadEnabled = e;
    b = a.isGifEnabled;
    f.isGifEnabled = b;
    c = a.isStickerEnabled;
    f.isStickerEnabled = c;
    d = a.wellBeingFeaturesEnabled;
    f.wellBeingFeaturesEnabled = d;
  },
  null
);
__d(
  "bs_int64",
  ["bs_caml", "bs_caml_format", "bs_caml_int64", "bs_caml_js_exceptions"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a) {
      return b("bs_caml_int64").sub(a, b("bs_caml_int64").one);
    }
    function c(a) {
      if (b("bs_caml").i64_ge(a, b("bs_caml_int64").zero)) return a;
      else return b("bs_caml_int64").neg(a);
    }
    function d(a) {
      return b("bs_caml_int64").xor(a, b("bs_caml_int64").neg_one);
    }
    function e(a) {
      try {
        return b("bs_caml_format").caml_int64_of_string(a);
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Failure") return;
        throw a;
      }
    }
    var h = (g = b("bs_caml_int64")).compare;
    function i(a, c) {
      return b("bs_caml_int64").compare(a, c) === 0;
    }
    var j = g.zero,
      k = g.one,
      l = g.neg_one,
      m = g.succ,
      n = g.max_int,
      o = g.min_int;
    g = g.to_string;
    f.zero = j;
    f.one = k;
    f.minus_one = l;
    f.succ = m;
    f.pred = a;
    f.abs = c;
    f.max_int = n;
    f.min_int = o;
    f.lognot = d;
    f.of_string_opt = e;
    f.to_string = g;
    f.compare = h;
    f.equal = i;
  },
  null
);
__d(
  "MWThreadKey.bs",
  ["bs_int64", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.createContext(void 0);
    function a(a) {
      var c = a.id;
      a = a.children;
      var d = b("bs_int64").to_string(c),
        e = h.useMemo(
          function () {
            return c;
          },
          [d]
        ),
        f = h.useContext(i);
      if (f !== void 0)
        return b("unrecoverableViolation")(
          "You can't nest MWThreadKey in another MWThreadKey. This will cause SEVs as things might think they're in the wrong thread",
          "messenger_web_product"
        );
      else return h.jsx(i.Provider, { value: e, children: a }, d);
    }
    function c(a) {
      return h.useContext(i);
    }
    function d(a) {
      a = h.useContext(i);
      if (a !== void 0) return a;
      else
        return b("unrecoverableViolation")(
          "Tried to get a thread key when there was none",
          "messenger_web_product"
        );
    }
    e = a;
    f.make = e;
    f.useIdMemoized = c;
    f.useIdMemoizedExn = d;
  },
  null
);
__d(
  "MWThread_DEPRECATED.bs",
  ["bs_caml_format", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.createContext(void 0);
    function a(a) {
      return h.useContext(i);
    }
    function j(a) {
      a = h.useContext(i);
      if (a !== void 0) return a;
      else
        return b("unrecoverableViolation")(
          "This hook can only be used in a component wrapped with a MWThread provider",
          "messenger_privacy_web"
        );
    }
    function c(a) {
      return b("bs_caml_format").caml_int64_of_string(a.VAL);
    }
    function d(a) {
      return j(void 0).VAL;
    }
    function e(a) {
      return a.VAL;
    }
    function k(a) {
      var c = a.id;
      a = a.children;
      var d = h.useContext(i);
      if (d !== void 0)
        return b("unrecoverableViolation")(
          "You can't nest MWThread in another MWThread_DEPRECATED. This will cause SEVs as things might think they're in the wrong thread",
          "messenger_web_product"
        );
      else return h.createElement(i.Provider, { value: c, children: a });
    }
    k = k;
    f.context = i;
    f.useId = a;
    f.useIdExn = j;
    f.toThreadKey = c;
    f.useFBID = d;
    f.key = e;
    f.make = k;
  },
  null
);
__d(
  "MWUIChatTabState.bs",
  ["Promise", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.createContext(void 0);
    function a(a) {
      return { _0: a };
    }
    function c(a) {
      var c = a.tab,
        d = a.tokenProvider;
      a = a.children;
      var e = h.useContext(i);
      if (e !== void 0)
        return b("unrecoverableViolation")(
          "You can't nest MWUIChatTabState in another MWUIChatTabState.",
          "messenger_web_product"
        );
      else return h.createElement(i.Provider, { value: [c, d], children: a });
    }
    c = { make: c };
    function d(a) {
      return function (a) {
        return b("Promise").resolve(void 0);
      };
    }
    function e(a) {
      a = h.useContext(i);
      if (a !== void 0) return a[0];
      else
        return b("unrecoverableViolation")(
          "This hook can only be used in a component wrapped with a MWUIChatTabState provider",
          "messenger_privacy_web"
        );
    }
    function j(a) {
      a = h.useContext(i);
      if (a === void 0)
        return b("unrecoverableViolation")(
          "This hook can only be used in a component wrapped with a MWUIChatTabState provider",
          "messenger_privacy_web"
        );
      a = a[1];
      if (a !== void 0) return a;
      else
        return function (a) {
          return [];
        };
    }
    f.context = i;
    f.createActual = a;
    f.Provider = c;
    f.useLookupThreadHook = d;
    f.useTab = e;
    f.useTokenProvider = j;
  },
  null
);
__d(
  "MWLSThreadDisplayContext.bs",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.createContext(void 0);
    function a(a) {
      var b = a.children;
      a = a.value;
      return h.createElement(i.Provider, { value: a, children: b });
    }
    d = { make: a };
    function c(a) {
      return h.useContext(i);
    }
    f.context = i;
    f.Provider = d;
    f.useHook = c;
  },
  null
);
__d(
  "LSDict",
  ["nativePromiseRegeneratorRuntime", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a.tag = "ls-array";
      return a;
    }
    function i(a) {
      var b = this,
        d = new Map(
          [].concat(a || []).map(function (a) {
            var b = a[0];
            a = a[1];
            return [JSON.stringify(b), a];
          })
        );
      this.get = function (a) {
        return d.get(JSON.stringify(a));
      };
      this.set = function (a, c) {
        d.set(JSON.stringify(a), c);
        return b;
      };
      this["delete"] = function (a) {
        return d["delete"](JSON.stringify(a));
      };
      this.clear = function () {
        return d.clear();
      };
      this.forEach = function (a, c) {
        return d.forEach(function (c, d) {
          return a(c, JSON.parse(d), b);
        }, c);
      };
      this._getSize = function () {
        return d.size;
      };
      Object.defineProperties(this, {
        size: {
          get: function () {
            return d.size;
          },
        },
      });
      this.has = function (a) {
        return d.has(JSON.stringify(a));
      };
      this.entries = c("nativePromiseRegeneratorRuntime").mark(function a() {
        var b, e, f, g, h, i, j;
        return c("nativePromiseRegeneratorRuntime").wrap(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  (b = d.entries()),
                    (e = Array.isArray(b)),
                    (f = 0),
                    (b = e
                      ? b
                      : b[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]());
                case 1:
                  if (!e) {
                    a.next = 7;
                    break;
                  }
                  if (!(f >= b.length)) {
                    a.next = 4;
                    break;
                  }
                  return a.abrupt("break", 18);
                case 4:
                  g = b[f++];
                  a.next = 11;
                  break;
                case 7:
                  f = b.next();
                  if (!f.done) {
                    a.next = 10;
                    break;
                  }
                  return a.abrupt("break", 18);
                case 10:
                  g = f.value;
                case 11:
                  h = g;
                  i = h[0];
                  j = h[1];
                  a.next = 16;
                  return [JSON.parse(i), j];
                case 16:
                  a.next = 1;
                  break;
                case 18:
                case "end":
                  return a.stop();
              }
          },
          a,
          this
        );
      });
      this[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        this.entries;
      this.keys = function () {
        return h(
          Array.from(d.keys()).map(function (a) {
            return JSON.parse(a);
          })
        );
      };
      this.values = d.values.bind(d);
    }
    i.fromObject = function (a) {
      return new i(Object.entries(a));
    };
    i.shapeToRecord = function (a) {
      return Array.from(a).reduce(function (a, b) {
        var d = b[0];
        b = b[1];
        if (typeof d !== "string")
          throw c("unrecoverableViolation")(
            "Cannot convert dicts with mixed keys to records",
            "messenger_web_product"
          );
        return babelHelpers["extends"]({}, a, ((a = {}), (a[d] = b), a));
      }, {});
    };
    g["default"] = i;
  },
  98
);
__d(
  "LSInt64.bs",
  ["bs_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_int64").compare;
    c = b("bs_int64").equal;
    d = b("bs_int64").to_string;
    f.compare = a;
    f.equal = c;
    f.string = d;
  },
  null
);
__d(
  "LSJson",
  ["LSDict", "bs_caml_int64", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 512;
    function i(a, b) {
      b === void 0 && (b = 0);
      if (b > h)
        throw c("unrecoverableViolation")(
          "recursion limit exceeded",
          "messenger_comet"
        );
      if (
        typeof a === "string" ||
        typeof a === "number" ||
        typeof a === "boolean"
      )
        return JSON.stringify(a);
      else if (a === void 0) return "null";
      else if (typeof a === "object")
        if (Array.isArray(a))
          return a.tag === "ls-array"
            ? "[" +
                a
                  .map(function (a) {
                    return i(a, b + 1);
                  })
                  .join(",") +
                "]"
            : d("bs_caml_int64").to_string(a);
        else if (a instanceof c("LSDict"))
          return (
            "{" +
            Array.from(a.entries())
              .map(function (a) {
                var d = a[0];
                a = a[1];
                if (typeof d === "string")
                  return JSON.stringify(d) + ":" + i(a, b + 1);
                else
                  throw c("unrecoverableViolation")(
                    "key must be a string",
                    "messenger_comet"
                  );
              })
              .join(",") +
            "}"
          );
      throw c("unrecoverableViolation")(
        "type not supported: %s" + typeof a,
        "messenger_comet"
      );
    }
    g.stringify = i;
  },
  98
);
__d(
  "Actor.re",
  ["Actor"],
  function (a, b, c, d, e, f) {
    a = b("Actor").useActor;
    f.useActorTypeChecked = a;
    c = a;
    f.useActor = c;
  },
  null
);
__d(
  "MWLSActor.bs",
  ["Actor.re", "bs_caml_format", "react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      a = b("Actor.re").useActor();
      var c = a[0];
      return h.useMemo(
        function () {
          return b("bs_caml_format").caml_int64_of_string(c);
        },
        [c]
      );
    }
    f.useActor = a;
  },
  null
);
__d(
  "GetLSDataScriptDirectForComet.bs",
  ["requireDeferred"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("requireDeferred")("LSDataScriptDirect.bs").__setRef(
      "GetLSDataScriptDirectForComet.bs"
    );
    function a(a) {
      return g.load();
    }
    f.$LSDataScriptDirect$Deferred = g;
    f.get = a;
  },
  null
);
__d(
  "LSTransaction.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      return a.runInTransaction(
        b,
        (function () {
          switch (c) {
            case "readOnly":
              return "readonly";
            case "readWrite":
              return "readwrite";
          }
        })()
      );
    }
    f.run = a;
  },
  null
);
__d(
  "LSMailboxVerifyThreadRowExistsStoredProcedure",
  [],
  function (a, b, c, d, e, f) {
    a = function () {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [];
      return b.seq([
        function (c) {
          return b.sp(
            "128",
            a[0],
            a[1] == null ? [0, 1] : a[1],
            "inbox",
            [0, 0],
            [0, 40]
          );
        },
        function (a) {
          return b.resolve(c);
        },
      ]);
    };
    e.exports = a;
  },
  null
);
__d(
  "LSStoredProcedures",
  [
    "LSContactDeleteThenInsertContactStoredProcedure",
    "LSContactVerifyContactRowExistsStoredProcedure",
    "LSCoreBeginHandlingPendingTasksForQueueStoredProcedure",
    "LSCoreBeginHandlingSyncForSyncGroupStoredProcedure",
    "LSCoreExecuteFinallyBlockForSyncTransactionStoredProcedure",
    "LSCoreExecuteFirstBlockForSyncTransactionStoredProcedure",
    "LSCoreGetCursorStoredProcedure",
    "LSCoreGetViewerFBIDStoredProcedure",
    "LSCoreHandleFailedTaskStoredProcedure",
    "LSCoreIssueNewTaskAndGetTaskIDStoredProcedure",
    "LSCoreIssueNewTaskStoredProcedure",
    "LSCoreRemoveTaskStoredProcedure",
    "LSCoreSetRegionHintStoredProcedure",
    "LSCoreTaskExistsStoredProcedure",
    "LSEncryptedBackupsInitializeRestoreStoredProcedure",
    "LSMailboxAddParticipantIdToGroupThreadStoredProcedure",
    "LSMailboxApplyAdminMessageCTAStoredProcedure",
    "LSMailboxClearMessagePlaceholderRangeStoredProcedure",
    "LSMailboxComputeParticipantCapabilitiesStoredProcedure",
    "LSMailboxDeletePollAttachmentStoredProcedure",
    "LSMailboxDeleteThenInsertMessageRequestStoredProcedure",
    "LSMailboxDeleteThenInsertThreadStoredProcedure",
    "LSMailboxFilteredThreadsRangesQueryStoredProcedure",
    "LSMailboxGetFirstAvailableAdminMessageCTAIDStoredProcedure",
    "LSMailboxGetFirstAvailableAttachmentCTAIDStoredProcedure",
    "LSMailboxGetFirstAvailableQuickReplyCTAIDStoredProcedure",
    "LSMailboxHandlePlaceholderPollDataStoredProcedure",
    "LSMailboxInsertAttachmentItemStoredProcedure",
    "LSMailboxInsertAttachmentStoredProcedure",
    "LSMailboxInsertNewMessageRangeStoredProcedure",
    "LSMailboxMarkThreadReadStoredProcedure",
    "LSMailboxOptimisticUpsertReactionStoredProcedure",
    "LSMailboxSetMessageDisplayedContentTypesStoredProcedure",
    "LSMailboxSetMessageTextHasLinksStoredProcedure",
    "LSMailboxSetThreadImageURLStoredProcedure",
    "LSMailboxThreadsRangesQueryStoredProcedure",
    "LSMailboxUpdateExtraAttachmentColumnsStoredProcedure",
    "LSMailboxUpdateReadReceiptStoredProcedure",
    "LSMailboxUpdateThreadsRangesV2StoredProcedure",
    "LSMailboxUpsertAttachmentRangeStoredProcedure",
    "LSMailboxUpsertMessageStoredProcedure",
    "LSMailboxUpsertSequenceIdStoredProcedure",
    "LSMailboxVerifyPollExistsStoredProcedure",
    "LSMailboxVerifyThreadExistsStoredProcedure",
    "LSMailboxVerifyThreadRowExistsStoredProcedure",
    "LSMailboxWriteThreadCapabilitiesStoredProcedure",
    "LSOmnistoreSettingsIssueInsertPersistentMenuItemsForThreadTaskStoredProcedure",
    "LSRankingDeleteThenInsertRankingRequestStoredProcedure",
    "LSRankingDeleteThenInsertRankingScoreStoredProcedure",
    "LSStickerUpsertStickerPackStoredProcedure",
    "LSStickerUpsertStickerStoredProcedure",
    "LSThreadThemeUpsertGradientColorStoredProcedure",
    "LSThreadThemeUpsertThemeStoredProcedure",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f) {
    c = {
      1: b("LSCoreIssueNewTaskStoredProcedure"),
      2: b("LSCoreIssueNewTaskAndGetTaskIDStoredProcedure"),
      3: (a = b("requireDeferred"))(
        "LSCoreCancelTaskByQueueNameStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      4: b("LSCoreGetViewerFBIDStoredProcedure"),
      5: b("LSCoreHandleFailedTaskStoredProcedure"),
      395: b("LSCoreExecuteFinallyBlockForSyncTransactionStoredProcedure"),
      6: a("LSCoreIssueNewFireAndForgetTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      396: b("LSCoreExecuteFirstBlockForSyncTransactionStoredProcedure"),
      8: b("LSCoreRemoveTaskStoredProcedure"),
      9: a("LSCoreHandleSyncFailureStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      10: a("LSCoreForceImmediateSyncStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      11: a("LSCoreIssueNewErrorStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      12: a("LSCoreRemoveErrorStoredProcedure").__setRef("LSStoredProcedures"),
      13: b("LSCoreTaskExistsStoredProcedure"),
      14: a("LSCoreUpdateTaskQueueNameStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      15: a("LSCoreUpdateTaskValueStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      16: b("LSCoreGetCursorStoredProcedure"),
      17: a("LSCoreUpdateOptimisticContextThreadKeysStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      397: a(
        "LSCoreUpdateLastSyncCompletedTimestampMsToNowStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      18: b("LSCoreSetRegionHintStoredProcedure"),
      19: a("LSCoreSetBackgroundModeStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      20: a("LSCoreBeginHandlingPendingTasksStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      21: b("LSCoreBeginHandlingPendingTasksForQueueStoredProcedure"),
      22: a("LSCoreHandleTaskSendSuccessForQueueStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      23: a("LSCoreHandleTaskSendFailureForQueueStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      534: b("LSCoreBeginHandlingSyncForSyncGroupStoredProcedure"),
      535: a("LSCoreBeginHandlingSyncStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      533: b("LSContactVerifyContactRowExistsStoredProcedure"),
      25: b("LSContactDeleteThenInsertContactStoredProcedure"),
      26: a("LSContactInsertContactStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      27: a("LSContactOptimisticSetBlockStatusStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      28: a("LSContactContactUploadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      29: a("LSContactSetContactCapabilitiesStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      30: a("LSContactOptimisticPseudoUnblockStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      583: a("LSContactSetMessengerRestrictStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      31: a("LSContactResetOptimisticBlockStateStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      584: a("LSContactAddMessengerContactStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      603: a("LSContactSetUserBlockStatusStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      32: a("LSMailboxLocalApplyOptimisticMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      398: a(
        "LSMailboxLocalApplyOptimisticMessageWithAttachmentsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      33: a("LSMailboxInsertOptimisticAttachmentStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      399: a(
        "LSMailboxUpdateOptimisticAttachmentPreviewStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      34: a("LSMailboxOptimisticSendMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      35: a("LSMailboxIssueSendAttachmentMessageTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      36: a("LSMailboxOptimisticSendURLShareStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      37: a("LSMailboxOptimisticSendMessageForwardStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      38: a("LSMailboxOptimisticSendAttachmentForwardStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      400: a(
        "LSMailboxOptimisticSendAttachmentShareForwardStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      401: a(
        "LSMailboxCleanupOptimisticOrderingOfSentMessagesStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      39: a("LSMailboxAddParticipantToGroupThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      40: b("LSMailboxAddParticipantIdToGroupThreadStoredProcedure"),
      402: a(
        "LSMailboxOptimisticRemoveParticipantsFromGroupThreadStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      41: b("LSMailboxInsertNewMessageRangeStoredProcedure"),
      42: a("LSMailboxUpdateExistingMessageRangeStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      43: a("LSMailboxUpdateMessageRangeV1StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      44: b("LSMailboxUpsertAttachmentRangeStoredProcedure"),
      45: a("LSMailboxIssueAttachmentsRangeQueryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      46: a("LSMailboxMessagePointQueryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      47: b("LSMailboxClearMessagePlaceholderRangeStoredProcedure"),
      48: b("LSMailboxMarkThreadReadStoredProcedure"),
      49: a("LSMailboxMarkAllThreadsReadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      570: a(
        "LSMailboxUpdateThreadSnippetFromLastMessageV2StoredProcedure"
      ).__setRef("LSStoredProcedures"),
      404: a(
        "LSMailboxUpdateThreadSnippetAfterMessageDeletedStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      53: a("LSMailboxDeleteMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      54: a("LSMailboxOptimisticUnsendMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      55: a("LSMailboxDeleteThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      56: a("LSMailboxDeleteMessageRequestStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      57: a("LSMailboxOptimisticDeleteThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      58: a("LSMailboxOptimisticRemoveThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      569: a("LSMailboxOptimisticUnarchiveThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      606: a("LSMailboxOptimisticUnignoreMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      59: a("LSMailboxTaskSerializerRemoveThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      60: a("LSMailboxSendMessageV2FailureCleanupStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      61: a("LSMailboxUpdateDeliveryReceiptStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      62: a("LSMailboxSyncUpdateThreadNameStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      597: a("LSMailboxOptimisticUpdateThreadNameV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      64: a("LSMailboxUpdateThreadImageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      65: a("LSMailboxOptimisticUpdateThreadThemeStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      405: a(
        "LSMailboxOptimisticUpdateThreadCustomEmojiStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      406: a(
        "LSMailboxOptimisticUpdateThreadDisappearingModeStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      66: b("LSMailboxSetThreadImageURLStoredProcedure"),
      67: a("LSMailboxIssueSetThreadImageTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      68: a("LSMailboxOptimisticRemoveThreadImageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      407: a(
        "LSMailboxUpdateThreadParticipantAdminStatusStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      408: a(
        "LSMailboxOverwriteAllThreadParticipantsAdminStatusStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      409: a(
        "LSMailboxUpdateThreadParticipantNicknameV2StoredProcedure"
      ).__setRef("LSStoredProcedures"),
      410: a(
        "LSMailboxOptimisticUpdateThreadParticipantNicknameStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      70: a("LSMailboxOptimisticExitFocusModeStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      71: b("LSMailboxVerifyThreadRowExistsStoredProcedure"),
      411: a(
        "LSMailboxOptimisticUpdateThreadParticipantAdminStatusStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      72: b("LSMailboxOptimisticUpsertReactionStoredProcedure"),
      412: a(
        "LSMailboxOptimisticRespondToAdminApprovalRequestStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      73: a("LSMailboxUpdateDraftMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      74: a("LSMailboxLocalMarkThreadReadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      413: b("LSMailboxGetFirstAvailableQuickReplyCTAIDStoredProcedure"),
      414: b("LSMailboxGetFirstAvailableAttachmentCTAIDStoredProcedure"),
      415: a(
        "LSMailboxGetFirstAvailableThreadNullstateCTAIDStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      76: a("LSMailboxGetFirstAvailableFocusModeCTAIDStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      77: a("LSMailboxUpdateThreadNullstateCTAIDStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      78: a("LSMailboxGetThreadAttributionInfoStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      416: a(
        "LSMailboxSetNeedsAdminApprovalForNewParticipantStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      417: a(
        "LSMailboxOptimisticSetNeedsAdminApprovalForNewParticipantStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      79: a("LSMailboxUpdateThreadApprovalModeStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      80: a("LSMailboxInsertIntoAdminApprovalQueueStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      81: a("LSMailboxRemoveFromAdminApprovalQueueStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      418: a(
        "LSMailboxRemoveAllRequestsFromAdminApprovalQueueStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      419: a(
        "LSMailboxUpdateParticipantSubscribeSourceTextStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      82: a("LSMailboxInsertRtcSignalStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      83: a("LSMailboxRtcP2PEndCallStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      420: a(
        "LSMailboxUpdateOrInsertRtcOngoingCallDataStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      84: a("LSMailboxDeleteRtcOngoingCallDataStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      421: a(
        "LSMailboxUpsertRtcMultiwayCallInitiationConferenceNameStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      422: a(
        "LSMailboxDeleteRtcMultiwayCallInitiationConferenceNameStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      85: a("LSMailboxFetchMultiwayConferenceNameStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      423: b("LSMailboxGetFirstAvailableAdminMessageCTAIDStoredProcedure"),
      86: b("LSMailboxApplyAdminMessageCTAStoredProcedure"),
      87: b("LSMailboxUpsertSequenceIdStoredProcedure"),
      88: b("LSMailboxSetMessageTextHasLinksStoredProcedure"),
      89: a("LSMailboxSetMessageViewFlagsStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      90: b("LSMailboxSetMessageDisplayedContentTypesStoredProcedure"),
      91: a("LSMailboxUpdateThreadThemeColorStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      92: a("LSMailboxMarkThreadUnreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      93: a("LSMailboxOptimisticMarkThreadUnreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      95: b("LSMailboxThreadsRangesQueryStoredProcedure"),
      96: a("LSMailboxHandleRepliesOnUnsendStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      97: a("LSMailboxUpdateRepliesOnUnsendStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      98: a("LSMailboxSetThreadCannotUnsendReasonStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      99: a("LSMailboxRemoveParticipantFromThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      100: a(
        "LSMailboxUpdateParentFolderReadWatermarkStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      424: a(
        "LSMailboxOptimisticDeleteSponsoredMessageAdStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      101: a("LSMailboxSendCTMWelcomeMessageFromAppStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      102: a("LSMailboxChangeViewerStatusStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      103: a("LSMailboxSetMessagesViewedPluginStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      104: a("LSMailboxUpdateThreadMuteSettingStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      105: a("LSMailboxGetParentThreadKeyStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      106: a("LSMailboxUpdateSenderIDToPersonaIDStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      107: a("LSMailboxUpdateAdditionalThreadContextStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      108: a("LSMailboxOptimisticIgnoreMessageRequestStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      109: a("LSMailboxOptimisticAcceptMessageRequestStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      110: a("LSMailboxUpsertReactionStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      111: a("LSMailboxDeleteReactionStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      112: a("LSMailboxDeleteAllReactionsStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      114: a("LSMailboxWriteCtaAccountLinkEncodedUrlStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      115: a("LSMailboxSetThreadCapabilitiesStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      116: a("LSMailboxProcessAccountUnlinkStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      117: a("LSMailboxDeleteExpiredMSuggestionsStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      118: a("LSMailboxUpdateThreadOngoingCallStateStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      119: a(
        "LSMailboxUpdateOngoingCallServerInfoDataStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      120: a("LSMailboxUpsertMSuggestionsStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      425: a(
        "LSMailboxCreateCtaAccountLinkEncodedUrlV2StoredProcedure"
      ).__setRef("LSStoredProcedures"),
      121: b("LSMailboxWriteThreadCapabilitiesStoredProcedure"),
      122: a("LSMailboxProcessCTAAccountUnlinkStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      123: b("LSMailboxUpsertMessageStoredProcedure"),
      124: a("LSMailboxInsertMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      125: a("LSMailboxDeleteThenInsertMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      126: a("LSMailboxUpsertFolderStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      127: a("LSMailboxUpdateShouldRoundThreadPictureStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      128: b("LSMailboxVerifyThreadExistsStoredProcedure"),
      129: a("LSMailboxTaskSerializerSendMessageV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      130: b("LSMailboxDeleteThenInsertThreadStoredProcedure"),
      131: b("LSMailboxDeleteThenInsertMessageRequestStoredProcedure"),
      426: a(
        "LSMailboxDeleteThenInsertAdminApprovalRequestStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      132: a("LSMailboxUpdateFolderThreadSnippetStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      133: a("LSMailboxResetPageMessagingWindowStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      134: a("LSMailboxSendPlatformReferralEventStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      135: b("LSMailboxUpdateThreadsRangesV2StoredProcedure"),
      136: a("LSMailboxUpdateThreadCustomEmojiStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      137: a("LSMailboxApplyNewGroupThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      138: b("LSMailboxInsertAttachmentStoredProcedure"),
      139: b("LSMailboxInsertAttachmentItemStoredProcedure"),
      140: a("LSMailboxDeleteThenInsertAttachmentStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      141: a("LSMailboxInsertCtaStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      142: a("LSMailboxDeleteThenInsertFocusModeCtaStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      143: a("LSMailboxDeleteFocusModeCtaStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      144: b("LSMailboxUpdateReadReceiptStoredProcedure"),
      145: a("LSMailboxIssueParticipantPointQueryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      146: a("LSMailboxUpdateThreadThemeStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      147: a("LSMailboxMarkOptimisticMessageFailedStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      148: a("LSMailboxBumpThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      427: a(
        "LSMailboxMoveThreadToInboxAndUpdateParentStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      149: a("LSMailboxRemoveOptimisticReactionStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      150: a("LSMailboxRemoveOptimisticGroupThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      151: a("LSMailboxRemoveOptimisticParticipantStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      152: a("LSMailboxUpdateHasMenuAndComposerStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      428: a(
        "LSMailboxLocalCreateOptimisticGroupThreadStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      153: a("LSMailboxOptimisticIgnoreMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      154: a("LSMailboxCreateOfflineThreadingIDStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      155: a("LSMailboxUpsertMessagesStatusInTableStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      156: a("LSMailboxReplaceOptimsiticMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      157: a("LSMailboxReplaceOptimisticThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      158: a("LSMailboxReplaceOptimisticReactionStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      159: a("LSMailboxRemoveAllParticipantsForThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      160: a("LSMailboxRetryMessageRangeQueryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      161: a("LSMailboxOptimisticMarkThreadReadV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      162: b("LSMailboxComputeParticipantCapabilitiesStoredProcedure"),
      163: a("LSMailboxUpdateExistingThreadV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      164: a("LSMailboxTaskSerializerMuteThreadV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      165: a("LSMailboxOptimisticMuteThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      166: a("LSMailboxMarkFolderSeenStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      167: a("LSMailboxClearLocalThreadPictureUrlStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      168: a(
        "LSMailboxLocalApplyOptimisticGroupThreadStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      169: a("LSMailboxCreateGroupThreadWithAdminTextStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      429: a(
        "LSMailboxComputeOptimisticThreadCapabilitiesStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      170: a(
        "LSMailboxCheckAuthoritativeMessageExistsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      430: a(
        "LSMailboxMarkMessageSendFailedAfterDeserializationErrorStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      173: a("LSMailboxIssuePollCreationForThreadTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      431: a(
        "LSMailboxGetAttachmentFbidWithOriginalFileHashStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      175: a("LSMailboxIssuePollUpdateForThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      176: b("LSMailboxDeletePollAttachmentStoredProcedure"),
      432: a(
        "LSMailboxOptimisticUpdateThreadDescriptionStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      177: a("LSMailboxUpdateThreadDescriptionStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      178: a("LSMailboxUpdateParticipantCapabilitiesStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      179: a("LSMailboxAddPollForThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      180: a("LSMailboxDeletePollDataStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      181: b("LSMailboxHandlePlaceholderPollDataStoredProcedure"),
      182: b("LSMailboxVerifyPollExistsStoredProcedure"),
      183: a("LSMailboxAddPollOptionV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      184: a("LSMailboxAddPollVoteV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      185: a("LSMailboxRemovePollVoteV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      186: a("LSMailboxUpdatePollAdminMessageSummaryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      187: a("LSMailboxSetPollsThreadCapabilityStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      188: a("LSMailboxDeleteCTAsStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      434: a(
        "LSMailboxOptimisticProcessMarketplaceCallFunctionCTAStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      189: a("LSMailboxCreateMeetingPlanStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      190: a("LSMailboxSecureTemplateStatusUpdateStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      191: b("LSMailboxUpdateExtraAttachmentColumnsStoredProcedure"),
      435: a(
        "LSMailboxRefreshMediaSendThreadCapabilitiesStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      436: a(
        "LSMailboxDeleteThenInsertLinkedAccountBadgeStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      192: a("LSMailboxUpdateEphemeralMediaStateStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      437: a(
        "LSMailboxUpdateOptimisticEphemeralMediaStateStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      193: a("LSMailboxUpdateSubscriptErrorMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      438: a(
        "LSMailboxInsertOrUpdateInThreadBannerOnUnsendStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      439: a(
        "LSMailboxSendPlatformReferralFireForgetEventStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      547: a("LSMailboxIssueMessagesRangeQueryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      580: a(
        "LSMailboxOptimisticUpdateMessagePinStatusStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      581: b("LSMailboxFilteredThreadsRangesQueryStoredProcedure"),
      586: a("LSMailboxClearCommunityMembersAndRangeStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      587: a("LSMailboxPopulateCommunityFolderDataStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      607: a("LSMailboxIssueCommunityMemberListFetchStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      608: a("LSMailboxInsertCommunityMemberStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      609: a("LSMailboxUpsertCommunityMemberRangesStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      588: a("LSMailboxDeleteCommunityFolderStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      590: a("LSMailboxJoinCommunityChannelStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      591: a("LSMailboxInsertBlobAttachmentStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      594: a("LSMailboxInsertXmaAttachmentStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      595: a("LSMailboxUpdateThreadSnippetStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      596: a(
        "LSMailboxDeleteThenInsertAttachmentConversionStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      599: a("LSMailboxMuteCallsFromThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      600: a("LSMailboxGetAttachmentForMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      601: a("LSMailboxUpdatePreviewUrlStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      605: a(
        "LSMailboxLocalOptimisticCreateCommunityChannelStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      228: a("LSMediaSendInsertNewMediaSendStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      229: a("LSMediaSendRemoveMediaSendJobsStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      231: a("LSMediaSendMarkSubJobCompletedV2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      232: a("LSMediaSendSendPhase1MultiPhotoMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      233: a("LSMediaSendSendPhase2UpdateMessageStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      234: a("LSMediaSendResumeMediaSendJobStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      235: a("LSMediaSendInsertPhase2PendingTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      236: a("LSMediaSendGetUploadParamsForPhase2StoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      237: a("LSMediaSendResetUseDoublePhaseConfigStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      462: a(
        "LSMediaSendResetSendByServerConfigIfNotDoublePhaseStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      238: a("LSMediaSendNextPendingJobIdToScheduleStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      239: a("LSMediaSendGetMessageAttributionParamsStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      240: a("LSMediaSendGetIsFinalUploadingStateStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      241: a("LSMediaSendGetMediaSendConfigStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      242: a("LSTypingUpdateTypingIndicatorStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      243: a("LSTypingSendTypingIndicatorStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      303: a("LSSearchIssueSearchQueryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      304: a("LSSearchUpdateSearchQueryStatusStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      305: a("LSSearchInsertSearchResultStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      306: a("LSSearchIssueMessageSearchQueryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      307: a("LSSearchUpdateMessageSearchQueryStatusStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      308: a("LSSearchInsertMessageSearchResultStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      309: a("LSSearchClearMessageSearchTableStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      310: a("LSSearchInsertSearchSectionStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      311: a("LSSearchInsertRecentSearchStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      312: a("LSSearchInsertRecentSearchResultStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      313: a("LSSearchDeleteRecentSearchStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      314: a("LSSearchDeleteAllRecentSearchesStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      315: a("LSSearchClearTablesStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      465: a(
        "LSOmnistoreSettingsContactUploadUpdateSettingsSuccessStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      466: a(
        "LSOmnistoreSettingsContactUploadUpdateSettingsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      468: a(
        "LSOmnistoreSettingsStoryAudienceModeUpdateStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      469: a(
        "LSOmnistoreSettingsStoryArchiveModeUpdateStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      316: a(
        "LSOmnistoreSettingsUpdateGlobalMuteUntilStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      472: a(
        "LSOmnistoreSettingsOptimisticallyUpdateGlobalMuteUntilStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      473: a(
        "LSOmnistoreSettingsUpdateShowMessagePreviewStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      474: a(
        "LSOmnistoreSettingsOptimisticallyUpdateShowMessagePreviewStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      479: a(
        "LSOmnistoreSettingsUpdateReplyReminderSettingStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      480: a(
        "LSOmnistoreSettingsOptimisticallyUpdateReplyReminderSettingStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      317: a("LSOmnistoreSettingsUpdateIsSoundOnStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      481: a(
        "LSOmnistoreSettingsOptimisticallyUpdateIsSoundOnStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      318: a("LSOmnistoreSettingsGdprConsentUpsertStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      482: a(
        "LSOmnistoreSettingsGetFirstAvailablePersistentMenuItemsCTAIDStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      483: a(
        "LSOmnistoreSettingsInsertPersistentMenuItemsForThreadStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      487: a(
        "LSOmnistoreSettingsRemoveExistingPersistentMenuItemsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      488: b(
        "LSOmnistoreSettingsIssueInsertPersistentMenuItemsForThreadTaskStoredProcedure"
      ),
      489: a(
        "LSOmnistoreSettingsOptimisticSetLockStatusStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      319: a("LSOmnistoreSettingsInsertLockStatusStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      320: a("LSOmnistoreSettingsCreateVideoChatLinkStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      490: a(
        "LSOmnistoreSettingsInsertCreatedVideoChatLinkStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      321: a("LSOmnistoreSettingsResolveVideoChatLinkStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      491: a(
        "LSOmnistoreSettingsInsertResolvedVideoChatLinkStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      492: a(
        "LSOmnistoreSettingsNotifyVideoChatLinkJoinAttemptStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      493: a(
        "LSOmnistoreSettingsRequestRankedRoomParticipantsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      322: a(
        "LSOmnistoreSettingsInsertAttemptedJoinerStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      323: a(
        "LSOmnistoreSettingsClearAttemptedJoinersStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      494: a(
        "LSOmnistoreSettingsUpdateRoomsUserRingabilityStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      495: a(
        "LSOmnistoreSettingsEnterMessengerCallRoomStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      496: a(
        "LSOmnistoreSettingsInsertEnterMessengerCallRoomStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      324: a("LSOmnistoreSettingsRemoveVideoChatLinkStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      325: a("LSOmnistoreSettingsRevokeVideoChatLinkStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      497: a(
        "LSOmnistoreSettingsInviteParticipantToVideoChatLinkStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      498: a(
        "LSOmnistoreSettingsInsertOrUpdateCowatchSessionStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      326: a("LSOmnistoreSettingsRemoveCowatchSessionStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      499: a(
        "LSOmnistoreSettingsInsertOrUpdatePinnedThreadStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      327: a("LSOmnistoreSettingsRemovePinnedThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      500: a(
        "LSOmnistoreSettingsOptimisticallyInsertOrUpdatePinnedThreadStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      501: a(
        "LSOmnistoreSettingsOptimisticallyRemovePinnedThreadStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      567: a("LSOmnistoreSettingsFetchPinnedThreadsStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      568: a(
        "LSOmnistoreSettingsTruncatePinnedThreadsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      502: a(
        "LSOmnistoreSettingsInsertOrUpdateSelfProfileStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      503: a(
        "LSOmnistoreSettingsDeleteThenInsertMessagingSettingsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      504: a(
        "LSOmnistoreSettingsOptimisticallyUpdateMessagingSettingsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      505: a(
        "LSOmnistoreSettingsUpdateMessagingSettingsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      506: a(
        "LSOmnistoreSettingsUpsertLiveStreamMetadataStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      507: a(
        "LSOmnistoreSettingsInsertOrUpdateFeatureLimitStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      328: a("LSOmnistoreSettingsRemoveFeatureLimitStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      576: a(
        "LSOmnistoreSettingsOptimisticRemoveAllOfTypeThenInsertEmojiSetsStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      598: a(
        "LSOmnistoreSettingsEpdCookieSettingsClientUpsertStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      602: a(
        "LSOmnistoreSettingsDeleteThenInsertCmCommunityListStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      363: a("LSPaymentsQueryPaymentActivityViewStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      530: a(
        "LSConnectivityDeleteAllAndInsertConnectivityStatusStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      531: a(
        "LSConnectivityTruncateTableAndSetShowErrorStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      386: b("LSThreadThemeUpsertThemeStoredProcedure"),
      387: b("LSThreadThemeUpsertGradientColorStoredProcedure"),
      388: a("LSInThreadBannerFetchBannersStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      532: a(
        "LSInThreadBannerClearInThreadBannerTablesStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      389: a("LSInThreadBannerInsertNewBannerStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      390: a("LSInThreadBannerUpsertOverflowMenuStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      391: a("LSInThreadBannerUpsertCTAStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      392: a("LSInThreadBannerExecuteCTAStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      393: a("LSInThreadBannerDeleteBannerStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      394: a("LSInThreadBannerDeleteBannersStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      536: b("LSStickerUpsertStickerPackStoredProcedure"),
      537: b("LSStickerUpsertStickerStoredProcedure"),
      538: a("LSStickerIssueNewStickerSearchQueryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      539: a("LSStickerIssueNewStickerPackDetailFetchStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      540: a("LSStickerDownloadStickerPackStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      541: a("LSStickerQueryStickerStoreStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      542: a("LSStickerIssueRemoveStickerPackStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      543: a("LSStickerIssueRemoveStickerPacksStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      544: a("LSStickerIssueReorderStickerPacksStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      546: a(
        "LSForwardContentsGenerateOrRefreshForwardContentStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      545: a(
        "LSForwardContentsPersistGeneratedForwardContentStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      548: a("LSLinkedGroupsFetchLinkedGroupForThreadStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      549: a(
        "LSLinkedGroupsDeleteThenInsertLinkedGroupStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      552: a("LSRankingGetScoreTypeRankingScoreStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      553: a("LSRankingUserHasStoryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      554: a("LSRankingUserHasUnreadStoryStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      555: a("LSRankingGetInboxActiveNowScoreStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      556: a("LSRankingGetIsActiveStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      557: b("LSRankingDeleteThenInsertRankingScoreStoredProcedure"),
      558: b("LSRankingDeleteThenInsertRankingRequestStoredProcedure"),
      559: a("LSRankingDeleteThenInsertValueModelRuleStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      560: a(
        "LSRankingDeleteThenInsertValueModelFeatureStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      561: a(
        "LSRankingDeleteThenInsertValueModelOutputStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      287: a("LSStoriesRoomsOptimisticCreateIssueTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      288: a("LSStoriesRoomCreateSuccessStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      289: a("LSStoriesRoomCreateFailureStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      290: a("LSStoriesRoomUpsertStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      291: a("LSStoriesRoomParticipantUpsertStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      292: a("LSStoriesRoomDeleteStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      293: a("LSStoriesRoomParticipantDeleteStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      294: a("LSStoriesRoomTruncateStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      295: a("LSStoriesRoomRevokeStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      296: a("LSStoriesRoomRevokeFailureStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      297: a("LSStoriesRoomUpdateInterestedIssueTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      298: a("LSStoriesRoomUpdateIssueTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      299: a("LSStoriesRoomUpdateSuccessStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      300: a("LSStoriesRoomInviteeUpdateIssueTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      301: a("LSStoriesRoomUpdateInterestedSuccessStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      302: a("LSStoriesRoomInviteeTypeUpdateSuccessStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      464: a(
        "LSStoriesRoomUpdateInterestedAttacmentCTAStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      572: a("LSLocationUpsertLiveLocationSharerStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      573: a("LSLocationDeleteLiveLocationSharerStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      574: a("LSLocationPingLiveLocationSharersStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      577: a("LSDataTracePredefineTraceForTaskStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      578: a("LSDataTraceFlushDataTraceStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      579: a("LSDataTraceAppendDataTraceAddonStoredProcedure").__setRef(
        "LSStoredProcedures"
      ),
      582: a(
        "LSMessagingAdsRequestAdContextFromThreadKeyStoredProcedure"
      ).__setRef("LSStoredProcedures"),
      604: b("LSEncryptedBackupsInitializeRestoreStoredProcedure"),
    };
    e.exports = c;
  },
  null
);
__d(
  "LSContactOptimisticPseudoUnblockStoredProcedure",
  [],
  function (a, b, c, d, e, f) {
    a = function () {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [];
      return b.seq([
        function (d) {
          return b.seq([
            function (d) {
              return b.db
                .table(7)
                .fetch([[[a[0]]]])
                .next()
                .then(function (a, b) {
                  var d = a.done;
                  a = a.value;
                  return d ? (c[0] = [0, 0]) : ((b = a.item), (c[0] = b.G));
                });
            },
            function (c) {
              return b.db
                .table(7)
                .fetch([[[a[0]]]])
                .next()
                .then(function (c, d) {
                  var e = c.done;
                  c = c.value;
                  return e
                    ? 0
                    : ((d = c.item),
                      b.fe(
                        b.ftr(b.db.table(7).fetch([[[a[0]]]]), function (c) {
                          return (
                            b.i64.eq(c.a, a[0]) && b.i64.eq([0, 1], [0, 1])
                          );
                        }),
                        function (a) {
                          var c = a.update;
                          a.item;
                          return c({
                            G: b.i64.and_(
                              d.G == null ? [0, 0] : d.G,
                              [-1, 4227858431]
                            ),
                          });
                        }
                      ));
                });
            },
            function (d) {
              return (
                (c[2] = new b.Map()),
                c[2].set("blockee_id", a[0]),
                c[2].set("request_id", a[1]),
                c[2].set("capabilities", c[0] == null ? [0, 0] : c[0]),
                (c[3] = b.toJSON(c[2])),
                b.sp(
                  "1",
                  "pseudo_unblock",
                  [0, 194],
                  c[3],
                  void 0,
                  void 0,
                  [0, 0],
                  void 0
                )
              );
            },
          ]);
        },
        function (a) {
          return b.resolve(d);
        },
      ]);
    };
    e.exports = a;
  },
  null
);
__d(
  "LSCoreIssueNewFireAndForgetTaskStoredProcedure",
  [],
  function (a, b, c, d, e, f) {
    a = function () {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [];
      return b.seq([
        function (c) {
          return b.db.table(5).add({
            a: void 0,
            b: a[0],
            d: b.i64.to_string(a[1]),
            c: a[2],
            e: b.i64.of_float(Date.now()),
          });
        },
        function (a) {
          return b.resolve(c);
        },
      ]);
    };
    e.exports = a;
  },
  null
);
__d(
  "LSDataTraceAppendDataTraceAddonStoredProcedure",
  [],
  function (a, b, c, d, e, f) {
    a = function () {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [];
      return b.seq([
        function (c) {
          return b.db.table(154).add({
            a: void 0,
            b: a[0],
            c: b.i64.of_float(Date.now()),
            d: a[1],
            e: a[2],
            f: a[3],
            g: a[4],
          });
        },
        function (a) {
          return b.resolve(c);
        },
      ]);
    };
    e.exports = a;
  },
  null
);
__d(
  "LSMailboxIssueMessagesRangeQueryStoredProcedure",
  [],
  function (a, b, c, d, e, f) {
    a = function () {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [];
      return b.seq([
        function (d) {
          return b
            .islc(
              b.ftr(b.db.table(13).fetchDesc([[[a[0]]]]), function (c) {
                return (
                  b.i64.eq(c.a, a[0]) &&
                  (b.i64.eq(c.b, void 0) || b.i64.le(c.b, a[1]))
                );
              }),
              0,
              b.i64.to_float([0, 1])
            )
            .next()
            .then(function (d, e) {
              var f = d.done;
              d = d.value;
              return f
                ? 0
                : ((e = d.item),
                  (c[4] = e.a),
                  (c[5] = [0, 0]),
                  (c[2] = e.b),
                  (c[3] = e.c),
                  b.i64.eq(a[2], [0, 0])
                    ? (c[1] = e.h && !e.f)
                    : (c[1] = e.i && !e.g),
                  c[1]
                    ? b.seq([
                        function (d) {
                          return b.i64.eq(a[2], [0, 0])
                            ? b.seq([
                                function (a) {
                                  return b.fe(
                                    b.ftr(b.db.table(13).fetch(), function (a) {
                                      return (
                                        b.i64.eq(a.a, c[4]) &&
                                        b.i64.eq([0, 0], c[5]) &&
                                        b.i64.eq(a.b, c[2]) &&
                                        a.c === c[3]
                                      );
                                    }),
                                    function (a) {
                                      var b = a.update;
                                      a.item;
                                      return b({ f: !0 });
                                    }
                                  );
                                },
                                function (a) {
                                  return (
                                    (a = [c[2], c[3]]),
                                    (c[7] = a[0]),
                                    (c[8] = a[1]),
                                    a
                                  );
                                },
                              ])
                            : b.seq([
                                function (a) {
                                  return b.fe(
                                    b.ftr(b.db.table(13).fetch(), function (a) {
                                      return (
                                        b.i64.eq(a.a, c[4]) &&
                                        b.i64.eq([0, 0], c[5]) &&
                                        b.i64.eq(a.b, c[2]) &&
                                        a.c === c[3]
                                      );
                                    }),
                                    function (a) {
                                      var b = a.update;
                                      a.item;
                                      return b({ g: !0 });
                                    }
                                  );
                                },
                                function (a) {
                                  return (
                                    (a = [e.d, e.e]),
                                    (c[7] = a[0]),
                                    (c[8] = a[1]),
                                    a
                                  );
                                },
                              ]);
                        },
                        function (d) {
                          return (
                            (c[9] = new b.Map()),
                            c[9].set("thread_key", a[0]),
                            c[9].set("direction", a[2]),
                            c[9].set("reference_timestamp_ms", c[7]),
                            c[9].set("reference_message_id", c[8]),
                            (c[10] = c[9].get("thread_key")),
                            c[9],
                            (c[11] = b.toJSON(c[9])),
                            b.sp(
                              "1",
                              "mrq.{}".split("{}").join(b.i64.to_string(c[10])),
                              [0, 228],
                              c[11],
                              void 0,
                              void 0,
                              [0, 0],
                              void 0
                            )
                          );
                        },
                      ])
                    : b.resolve());
            });
        },
        function (a) {
          return b.resolve(d);
        },
      ]);
    };
    e.exports = a;
  },
  null
);
__d(
  "LSMailboxOptimisticRemoveParticipantsFromGroupThreadStoredProcedure",
  [],
  function (a, b, c, d, e, f) {
    a = function () {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [];
      return b.seq([
        function (d) {
          return (
            (c[0] = b.i64.of_int32(a[1].length)),
            b.i64.gt(c[0], [0, 0])
              ? b.loopAsync(c[0], function (d) {
                  return (
                    (c[1] = d),
                    b.seq([
                      function (d) {
                        return b
                          .ntop("Array", 3, a[1], c[1])
                          .then(function (a) {
                            return (a = a), (c[2] = a[0]), a;
                          });
                      },
                      function (d) {
                        return b.sp("99", a[0], c[2]);
                      },
                      function (a) {
                        return b
                          .sb(b.db.table(115).fetch(), [["b", "DESC"]])
                          .next()
                          .then(function (a, b) {
                            var d = a.done;
                            a = a.value;
                            return d
                              ? (c[3] = !1)
                              : ((b = a.item), (c[3] = b.c));
                          });
                      },
                      function (a) {
                        return c[3] === !0
                          ? ((c[7] = b.localizeV2([0, 2285622730], void 0)),
                            (c[8] = b.localizeV2([0, 1919524925], void 0)),
                            b.sp("11", void 0, [0, 1545093], c[7], c[8]))
                          : b.resolve();
                      },
                      function (d) {
                        return (
                          (c[5] = new b.Map()),
                          c[5].set("thread_id", a[0]),
                          c[5].set("contact_id", c[2]),
                          (c[6] = b.toJSON(c[5])),
                          b.sp(
                            "1",
                            "remove_participant_v2",
                            [0, 140],
                            c[6],
                            void 0,
                            void 0,
                            [0, 0],
                            void 0
                          )
                        );
                      },
                    ])
                  );
                })
              : b.resolve()
          );
        },
        function (a) {
          return b.resolve(d);
        },
      ]);
    };
    e.exports = a;
  },
  null
);
__d(
  "LSDbForeignKeys.bs",
  ["bs_js_dict", "unrecoverableViolation"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var c = function (a, c, d, e, f) {
        f = b("bs_js_dict").get(a.tableNames, d);
        if (f !== void 0) {
          f.cascadeUpdates.push({ tableName: c, indexName: e });
          return;
        } else
          return b("unrecoverableViolation")(
            "Failed to add foreign key",
            "messenger_comet"
          );
      };
      c(a, "attachments", "messages", "fk_messages", void 0);
      c(a, "attachment_items", "attachments", "fk_attachments", void 0);
      c(a, "attachment_ctas", "attachments", "fk_attachments", void 0);
      c(a, "messages", "threads", void 0, void 0);
      c(a, "thread_nullstate", "threads", void 0, void 0);
      c(a, "messages_ranges_v2__generated", "threads", void 0, void 0);
      return c(a, "participants", "threads", void 0, void 0);
    }
    f.configure = a;
  },
  null
);
__d(
  "LSStoredProcedures.bs",
  ["LSStoredProcedures"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("LSStoredProcedures");
    f.storedProcedures = a;
  },
  null
);
__d(
  "MPWLSDBCreateSchema.bs",
  ["LSDbForeignKeys.bs", "LSMetadata", "LSTableSchemas"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("LSMetadata").buildMetadata(b("LSTableSchemas"));
    b("LSDbForeignKeys.bs").configure(a);
    f.metadata = a;
  },
  null
);
__d(
  "LSSyncChannel.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").one;
    c = [0, 2];
    d = [0, 3];
    f.mqtt = a;
    f.http = c;
    f.dgw = d;
  },
  null
);
__d(
  "LSMailboxInitialSyncCursor.bs",
  ["CurrentLocale", "LSSyncChannel.bs"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("CurrentLocale").get();
    c = {
      scale: 1,
      preview_height: 200,
      preview_width: 150,
      preview_height_large: 400,
      preview_width_large: 300,
      full_height: 200,
      snapshot_num_threads_per_page: 15,
      locale: a,
    };
    d = { contents: b("LSSyncChannel.bs").mqtt };
    e = { contents: 0 };
    a = { contents: c };
    f.defaultSyncParams = c;
    f.syncChannel = d;
    f.lastSyncTimestampMs = e;
    f.syncParams = a;
  },
  null
);
__d(
  "ClearInterval.re",
  ["clearInterval"],
  function (a, b, c, d, e, f) {
    a = b("clearInterval");
    f.clearIntervalTypeChecked = a;
    c = a;
    f.clearInterval = c;
  },
  null
);
__d(
  "CometErrorBoundary.re",
  ["CometErrorBoundary.react", "react"],
  function (a, b, c, d, e, f) {
    var g,
      h = g || b("react"),
      i = b("CometErrorBoundary.react");
    f.makeTypeChecked = i;
    a = function (a) {
      var b = {
        fallback: a.fallback,
        description: a.description,
        children: a.children,
        onError:
          a.onError == null
            ? a.onError
            : function (b) {
                b = a.onError(b == null ? void 0 : b);
                return b;
              },
      };
      b = h.createElement(i, b);
      return b;
    };
    f.make = a;
  },
  null
);
__d(
  "MqttState.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "Connected";
    b = "Disconnected";
    c = "Connecting";
    f.connected = a;
    f.disconnected = b;
    f.connecting = c;
  },
  null
);
__d(
  "LSContactBlockedByViewerStatus.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 2];
    f.unblocked = a;
    f.messageBlocked = c;
    f.fullyBlocked = d;
  },
  null
);
__d(
  "LSContactType.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 2];
    e = [0, 3];
    f.unknown = a;
    f.user = c;
    f.page = d;
    f.pagePersona = e;
  },
  null
);
__d(
  "LSDatabaseType.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 2];
    e = [0, 3];
    b = [0, 4];
    var g = [0, 5],
      h = [0, 6],
      i = [0, 7],
      j = [0, 8],
      k = [0, 9],
      l = [0, 10],
      m = [0, 11],
      n = [0, 12],
      o = [0, 13],
      p = [0, 14],
      q = [0, 15],
      r = [0, 16],
      s = [0, 17],
      t = [0, 18],
      u = [0, 19],
      v = [0, 20],
      w = [0, 21],
      x = [0, 22],
      y = [0, 23],
      z = [0, 24],
      A = [0, 25],
      B = [0, 26],
      C = [0, 27],
      D = [0, 28],
      E = [0, 29],
      F = [0, 30],
      G = [0, 31],
      H = [0, 32],
      I = [0, 33],
      J = [0, 34],
      K = [0, 35],
      L = [0, 36],
      M = [0, 37],
      N = [0, 38],
      O = [0, 39],
      P = [0, 40],
      Q = [0, 41],
      R = [0, 42],
      S = [0, 43],
      T = [0, 44],
      U = [0, 45],
      V = [0, 46],
      W = [0, 47],
      X = [0, 48],
      Y = [0, 49],
      Z = [0, 50],
      $ = [0, 51],
      aa = [0, 52],
      ba = [0, 53],
      ca = [0, 54],
      da = [0, 55],
      ea = [0, 56],
      fa = [0, 57],
      ga = [0, 59],
      ha = [0, 60],
      ia = [0, 61],
      ja = [0, 62],
      ka = [0, 63],
      la = [0, 64],
      ma = [0, 65],
      na = [0, 66],
      oa = [0, 67],
      pa = [0, 68],
      qa = [0, 69],
      ra = [0, 70],
      sa = [0, 71],
      ta = [0, 72],
      ua = [0, 73],
      va = [0, 74],
      wa = [0, 75],
      xa = [0, 76],
      ya = [0, 77],
      za = [0, 78],
      Aa = [0, 79],
      Ba = [0, 80],
      Ca = [0, 81],
      Da = [0, 82],
      Ea = [0, 84],
      Fa = [0, 85],
      Ga = [0, 86],
      Ha = [0, 87],
      Ia = [0, 88],
      Ja = [0, 89],
      Ka = [0, 90],
      La = [0, 91],
      Ma = [0, 92],
      Na = [0, 93],
      Oa = [0, 94],
      Pa = [0, 95],
      Qa = [0, 96],
      Ra = [0, 97],
      Sa = [0, 98],
      Ta = [0, 99],
      Ua = [0, 100],
      Va = [0, 101];
    f.test = a;
    f.mailbox = c;
    f.contact = d;
    f.appAlerts = e;
    f.core = b;
    f.stories = g;
    f.presence = h;
    f.ranking = i;
    f.experiment = j;
    f.search = k;
    f.securemailbox = l;
    f.inboxAds = m;
    f.sticker = n;
    f.omnistoreRevisionTest = o;
    f.frx = p;
    f.payments = q;
    f.settings = r;
    f.gif = s;
    f.arEffects = t;
    f.platformExtensionSdk = u;
    f.businessTab = v;
    f.composerMenus = w;
    f.experimentalContactPhoneNumber = x;
    f.forwardContents = y;
    f.typing = z;
    f.qp = A;
    f.inthreadbanner = B;
    f.logSampling = C;
    f.threadTheme = D;
    f.mediaSend = E;
    f.contactUpload = F;
    f.aloha = G;
    f.omnistoreSimpleTest = H;
    f.booking = I;
    f.oneTimeSyncTest = J;
    f.threadEmoji = K;
    f.universalLinks = L;
    f.counters = M;
    f.emptyTest = N;
    f.accountSettings = O;
    f.videoChatLink = P;
    f.zeroRating = Q;
    f.connectivity = R;
    f.switchAccountBadging = S;
    f.emergencyPoll = T;
    f.cowatch = U;
    f.switchAccountProfiles = V;
    f.$$location = W;
    f.syncWatchdog = X;
    f.bloks = Y;
    f.mediaEditing = Z;
    f.pushNotifications = $;
    f.switchAccountBadgingRealtime = aa;
    f.dasmDebug = ba;
    f.testTwo = ca;
    f.dataTrace = da;
    f.mediaSharing = ea;
    f.pluginExtensions = fa;
    f.localUserSettings = ga;
    f.groups = ha;
    f.dabl = ia;
    f.linkedGroups = ja;
    f.fxcal = ka;
    f.rooms = la;
    f.proactiveWarnings = ma;
    f.messagingAds = na;
    f.supportInbox = oa;
    f.coreClient = pa;
    f.threadCoPresence = qa;
    f.marketplace = ra;
    f.carrierMessaging = sa;
    f.notificationsClient = ta;
    f.cat = ua;
    f.composerSettings = va;
    f.groupThreadImage = wa;
    f.coplayMetadata = xa;
    f.searchUserGroups = ya;
    f.tutorial = za;
    f.paidAds = Aa;
    f.avatarsCoPresence = Ba;
    f.graphql = Ca;
    f.transcribe = Da;
    f.ixtServerTrigger = Ea;
    f.novi = Fa;
    f.testFramework = Ga;
    f.broker = Ha;
    f.openMessenger = Ia;
    f.anonymousCredentials = Ja;
    f.mlModel = Ka;
    f.localAuth = La;
    f.soundBite = Ma;
    f.encryptedBackups = Na;
    f.businessOrderManagement = Oa;
    f.e2eeMessagingMetadataMailbox = Pa;
    f.communitiesMailbox = Qa;
    f.mostLikelyToPollQuestions = Ra;
    f.breakoutSessions = Sa;
    f.messagingNotificationConfigs = Ta;
    f.sandboxSelector = Ua;
    f.gamesBotThread = Va;
  },
  null
);
__d(
  "LSMailboxMessagesRangeQueryDirection.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    f.before = a;
    f.after = c;
  },
  null
);
__d(
  "LSMailboxType.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 1024];
    e = [0, 1536];
    b = [0, 2048];
    var g = [0, 2049],
      h = [0, 4096];
    f.messenger = a;
    f.communities = c;
    f.tincan = d;
    f.carrier = e;
    f.whatsappPhone = b;
    f.whatsappInterop = g;
    f.tam = h;
  },
  null
);
__d(
  "XCometActivityLogControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/allactivity/",
      Object.freeze({
        manage_mode: !1,
        should_load_landing_page: !1,
        activity_history: !1,
      }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "JsDictReadOnly.bs",
  ["bs_js_dict"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return Object.keys(a);
    }
    function c(a) {
      return a;
    }
    d = b("bs_js_dict").get;
    e = b("bs_js_dict").entries;
    b = b("bs_js_dict").values;
    f.from = c;
    f.get = d;
    f.keys = a;
    f.entries = e;
    f.values = b;
  },
  null
);
