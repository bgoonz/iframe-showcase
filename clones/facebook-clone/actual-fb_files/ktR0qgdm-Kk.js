if (self.CavalryLogger) {
  CavalryLogger.start_js(["6gAW/1x"]);
}

__d(
  "SearchCometResultsLoggedResult_loggingModel.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometResultsLoggedResult_loggingModel",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "session_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_unit_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tapped_result_id",
          storageKey: null,
        },
      ],
      type: "SearchResultLoggingViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsLoggedModuleContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      logModuleClick: null,
      logModuleInlineAction: null,
      logSeeMoreClick: null,
      sessionID: null,
      vpvdLoggerRef: null,
    });
    g["default"] = b;
  },
  98
);
__d(
  "SearchResultPageLoggingInlineActionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744351");
    c = b("FalcoLoggerInternal").create(
      "search_result_page_logging_inline_action",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "SearchResultPageLoggingItemClickedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744352");
    c = b("FalcoLoggerInternal").create(
      "search_result_page_logging_item_clicked",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "SearchCometResultsLoggerUtil",
  [
    "SearchResultPageLoggingInlineActionFalcoEvent",
    "SearchResultPageLoggingItemClickedFalcoEvent",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b) {
      c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(
        function () {
          var c = {
            click_type: "graph_search_results_module_tapped",
            common: {
              logging_unit_id: a,
              session_id: b,
              timestamp: Date.now().toString(),
            },
          };
          return c;
        }
      );
    };
    b = function (a, b, d) {
      c("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(
        function () {
          var c = {
            common: {
              logging_unit_id: a,
              session_id: b,
              timestamp: Date.now().toString(),
            },
            inline_action_name: d,
          };
          return c;
        }
      );
    };
    d = function (a, b, d) {
      c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(
        function () {
          var c = {
            click_type: "graph_search_results_item_in_module_tapped",
            common: {
              logging_unit_id: a,
              session_id: b,
              timestamp: Date.now().toString(),
            },
            unit_id_result_id: d,
          };
          return c;
        }
      );
    };
    e = function (a, b, d) {
      c("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(
        function () {
          var c = {
            common: {
              logging_unit_id: a,
              session_id: b,
              timestamp: Date.now().toString(),
            },
            inline_action_name: d,
          };
          return c;
        }
      );
    };
    f = function (a, b) {
      c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(
        function () {
          var c = {
            click_type: "graph_search_results_see_more_on_module_tapped",
            common: {
              logging_unit_id: a,
              session_id: b,
              timestamp: Date.now().toString(),
            },
          };
          return c;
        }
      );
    };
    g.logModuleClick = a;
    g.logModuleInlineAction = b;
    g.logResultClick = d;
    g.logResultInlineAction = e;
    g.logSeeMoreClick = f;
  },
  98
);
__d(
  "SearchResultPageLoggingViewportViewFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744354");
    c = b("FalcoLoggerInternal").create(
      "search_result_page_logging_viewport_view",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "useSearchCometResultsVPVdLogger",
  [
    "SearchResultPageLoggingViewportViewFalcoEvent",
    "gkx",
    "react",
    "useVPVDImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.loggingUnitID,
        d = a.sessionID,
        e = a.tappedResultID,
        f = h(
          function (a, f) {
            c("SearchResultPageLoggingViewportViewFalcoEvent").logImmediately(
              function () {
                var c = {
                  common: {
                    logging_unit_id: b,
                    session_id: d,
                    timestamp: Date.now().toString(),
                  },
                  is_bootstrap_entity_module: !1,
                  unit_id_result_id: e,
                  vpv_duration: String(f),
                  vpv_start_time: String(a),
                };
                return c;
              }
            );
          },
          [b, d, e]
        );
      a = h(
        function (a) {
          var b = a.visibleDuration;
          a = a.visibleTime;
          f(a, b);
        },
        [f]
      );
      return c("useVPVDImpression")({
        isLite: !0,
        minVisibleTimeMs: 1,
        onVPVDEnd: a,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsLoggedModuleProvider.react",
  [
    "SearchCometResultsLoggedModuleContext",
    "SearchCometResultsLoggerUtil",
    "react",
    "useSearchCometResultsVPVdLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.children,
        e = a.loggingUnitID,
        f = a.sessionID;
      a = a.shouldUseCustomVPVdRef;
      var g = c("useSearchCometResultsVPVdLogger")({
          loggingUnitID: e,
          sessionID: f,
        }),
        j = g[0];
      g = i(
        function () {
          return {
            logModuleClick: function () {
              d("SearchCometResultsLoggerUtil").logModuleClick(e, f);
            },
            logModuleInlineAction: function (a) {
              d("SearchCometResultsLoggerUtil").logModuleInlineAction(e, f, a);
            },
            logSeeMoreClick: function () {
              d("SearchCometResultsLoggerUtil").logSeeMoreClick(e, f);
            },
            sessionID: f,
            vpvdLoggerRef: j,
          };
        },
        [e, f, j]
      );
      return h.jsx(c("SearchCometResultsLoggedModuleContext").Provider, {
        value: g,
        children: Boolean(a) ? b : h.jsx("div", { ref: j, children: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsLoggedProfileContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ addEntityToRecentSearches: null });
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometResultsLoggedResultContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      logResultClick: null,
      logResultInlineAction: null,
      vpvdLoggerRef: null,
    });
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometResultsLoggedResultProvider.react",
  [
    "SearchCometResultsLoggedResultContext",
    "SearchCometResultsLoggerUtil",
    "mergeRefs",
    "react",
    "useSearchCometResultsVPVdLogger",
    "useStoryVPVDLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.children,
        e = a.loggingUnitID,
        f = a.sessionID,
        g = a.shouldUseCustomVPVdRef;
      g = g === void 0 ? !1 : g;
      var j = a.tappedResultID;
      a = c("useSearchCometResultsVPVdLogger")({
        loggingUnitID: e,
        sessionID: f,
        tappedResultID: j,
      });
      var k = a[0];
      a = c("useStoryVPVDLogger")({
        interactionSourceOverride: 78,
        position: 0,
        trackable: e,
      });
      var l = a[0];
      a[1];
      var m = i(
        function () {
          return c("mergeRefs")(k, l);
        },
        [k, l]
      );
      a = i(
        function () {
          return {
            logResultClick: function () {
              d("SearchCometResultsLoggerUtil").logResultClick(e, f, j);
            },
            logResultInlineAction: function (a) {
              d("SearchCometResultsLoggerUtil").logResultInlineAction(e, f, a);
            },
            vpvdLoggerRef: m,
          };
        },
        [e, f, j, m]
      );
      return h.jsx(c("SearchCometResultsLoggedResultContext").Provider, {
        value: a,
        children: g ? b : h.jsx("div", { ref: m, children: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsLoggedResult.react",
  [
    "CometRelay",
    "SearchCometResultsLoggedResultProvider.react",
    "SearchCometResultsLoggedResult_loggingModel.graphql",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.children,
        f = a.loggingModel;
      a = a.shouldUseCustomVPVdRef;
      if (f == null)
        throw c("unrecoverableViolation")(
          "Undefined result logging model",
          "search"
        );
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometResultsLoggedResult_loggingModel.graphql")),
        f
      );
      var g = f.logging_unit_id,
        j = f.session_id;
      f = f.tapped_result_id;
      return i.jsx(c("SearchCometResultsLoggedResultProvider.react"), {
        loggingUnitID: g,
        sessionID: j,
        shouldUseCustomVPVdRef: a,
        tappedResultID: f,
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometResultsLogger",
  [
    "SearchCometResultsLoggedModuleContext",
    "SearchCometResultsLoggedProfileContext",
    "SearchCometResultsLoggedResultContext",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useContext,
      i = b.useMemo;
    function a() {
      var a;
      a = (a = h(c("SearchCometResultsLoggedModuleContext"))) != null ? a : {};
      var b = a.logModuleClick,
        d = a.logModuleInlineAction,
        e = a.logSeeMoreClick,
        f = a.sessionID,
        g = a.vpvdLoggerRef;
      a = (a = h(c("SearchCometResultsLoggedResultContext"))) != null ? a : {};
      var j = a.logResultClick,
        k = a.logResultInlineAction,
        l = a.vpvdLoggerRef;
      a = (a = h(c("SearchCometResultsLoggedProfileContext"))) != null ? a : {};
      var m = a.addEntityToRecentSearches;
      return i(
        function () {
          var a;
          return {
            logInlineAction: function (a) {
              k != null
                ? k(a)
                : d != null
                ? d(a)
                : c("recoverableViolation")(
                    "No module or result logging context found for inline action",
                    "search"
                  );
            },
            logResultClick: function () {
              j != null
                ? j()
                : b != null
                ? b()
                : c("recoverableViolation")(
                    "No module or result logging context found for click",
                    "search"
                  ),
                m != null && m();
            },
            logSeeMoreClick: function () {
              if (e == null) {
                c("recoverableViolation")(
                  "No module logging context found for see more click",
                  "search"
                );
                return;
              }
              e();
            },
            sessionID: f,
            vpvdLoggerRef: (a = l) != null ? a : g,
          };
        },
        [m, b, d, j, k, e, g, l, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsLogger",
  ["react", "useSearchCometResultsLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      a = a.children;
      return a(c("useSearchCometResultsLogger")());
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BrowseEntryPointAction",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BACKGROUND: "BACKGROUND",
      CAMPUS_DIRECTORY_SEARCH_TILE: "CAMPUS_DIRECTORY_SEARCH_TILE",
      CELEBRITY_HCM: "CELEBRITY_HCM",
      CHALLENGE_POST_CTA: "CHALLENGE_POST_CTA",
      CORRECTION: "CORRECTION",
      CREATION_IDEAS_FOR_PUBLIC_FIGURES: "CREATION_IDEAS_FOR_PUBLIC_FIGURES",
      DEADEND_SEARCHES: "DEADEND_SEARCHES",
      DEEP_LINK: "DEEP_LINK",
      DEEP_LINK_VOYAGER: "DEEP_LINK_VOYAGER",
      ENTITY_ACTION_BAR: "ENTITY_ACTION_BAR",
      EXPLORE: "EXPLORE",
      FEED_INTEREST_BUMPER: "FEED_INTEREST_BUMPER",
      FEED_INTEREST_IFR: "FEED_INTEREST_IFR",
      FEED_INTEREST_QP: "FEED_INTEREST_QP",
      FILTER_LINK: "FILTER_LINK",
      FILTERS: "FILTERS",
      FOLLOW_UP_FEED_PIVOT: "FOLLOW_UP_FEED_PIVOT",
      GROUP_MALL_ANNOUNCEMENT_HASHTAG_CARD:
        "GROUP_MALL_ANNOUNCEMENT_HASHTAG_CARD",
      GROUP_MALL_EXTERNALLY_POPULAR_RELATED_HASHTAGS:
        "GROUP_MALL_EXTERNALLY_POPULAR_RELATED_HASHTAGS",
      GROUP_MALL_HASHTAG_CREATE_POST_CTA: "GROUP_MALL_HASHTAG_CREATE_POST_CTA",
      GROUP_MALL_UNIT_POPULAR_TOPIC_HASHTAG:
        "GROUP_MALL_UNIT_POPULAR_TOPIC_HASHTAG",
      GROUP_POST_HASHTAG_FOOTER: "GROUP_POST_HASHTAG_FOOTER",
      GROUP_TOPIC_TAB_HASHTAG: "GROUP_TOPIC_TAB_HASHTAG",
      GROUPS_HSCROLL_SUGGESTION_CARD: "GROUPS_HSCROLL_SUGGESTION_CARD",
      GROUPS_INTEREST: "GROUPS_INTEREST",
      HASHTAG: "HASHTAG",
      HASHTAG_CTA: "HASHTAG_CTA",
      LOCAL_SEARCH_LOCATION_UPSELL_REFRESH:
        "LOCAL_SEARCH_LOCATION_UPSELL_REFRESH",
      LOCATION_PIVOT: "LOCATION_PIVOT",
      MAP: "MAP",
      NULLSTATE_ALERT: "NULLSTATE_ALERT",
      PAGE_CATEGORY: "PAGE_CATEGORY",
      PHOTO_STREAM: "PHOTO_STREAM",
      PHOTOS_MODULE_PIVOT: "PHOTOS_MODULE_PIVOT",
      PLACES_HCM_TO_NEEDLE_SEARCH_PIVOT: "PLACES_HCM_TO_NEEDLE_SEARCH_PIVOT",
      PLACES_HCM_TO_SET_SEARCH_PIVOT: "PLACES_HCM_TO_SET_SEARCH_PIVOT",
      PLACES_MODULE_PIVOT: "PLACES_MODULE_PIVOT",
      POST_CHAINING: "POST_CHAINING",
      QUERYLESS_CONTAINER: "QUERYLESS_CONTAINER",
      QUICK_PROMOTION: "QUICK_PROMOTION",
      REFERRAL_GROUP_POST_MALL_DD_CTA: "referral_group_post_mall_dd_cta",
      RELATED_HASHTAGS: "RELATED_HASHTAGS",
      RELATED_PUBLISHER_CUE: "RELATED_PUBLISHER_CUE",
      RELATED_SEARCHES: "RELATED_SEARCHES",
      RELATED_SEARCHES_EXPLORE: "RELATED_SEARCHES_EXPLORE",
      SEARCH_BOX: "SEARCH_BOX",
      SEARCH_INTERCEPT: "SEARCH_INTERCEPT",
      SEE_MORE: "SEE_MORE",
      SERP_NULL_STATE_CLEAR_FILTERS: "SERP_NULL_STATE_CLEAR_FILTERS",
      SERP_NULL_STATE_SEARCH_GLOBAL: "SERP_NULL_STATE_SEARCH_GLOBAL",
      SERP_TAB: "SERP_TAB",
      SPORTS_MODULE: "SPORTS_MODULE",
      SUBTOPIC_PIVOTS: "SUBTOPIC_PIVOTS",
      SUGGESTED_SEARCH_CUE: "SUGGESTED_SEARCH_CUE",
      SWIPE_LEFT: "SWIPE_LEFT",
      SWIPE_RIGHT: "SWIPE_RIGHT",
      SYMT_PAGES: "SYMT_PAGES",
      TOPIC_DEEP_DIVE_API: "TOPIC_DEEP_DIVE_API",
      TRENDING: "TRENDING",
      UNKNOWN__DO_NOT_USE: "UNKNOWN__DO_NOT_USE",
      VIDEO_APP: "VIDEO_APP",
      VOICE: "VOICE",
      WATCH_NULLSTATE_TOPICS: "WATCH_NULLSTATE_TOPICS",
      WEBVIEW_SUGGESTION_CARD: "WEBVIEW_SUGGESTION_CARD",
      WORK_KNOWLEDGE_SERP: "WORK_KNOWLEDGE_SERP",
      WORKPLACE_GROUP_POPULAR_HASHTAGS: "WORKPLACE_GROUP_POPULAR_HASHTAGS",
      WORKPLACE_GROUP_SCOPED_HASHTAG_PAGE_SEE_MORE:
        "WORKPLACE_GROUP_SCOPED_HASHTAG_PAGE_SEE_MORE",
      WORKPLACE_TRENDING_HASHTAGS: "WORKPLACE_TRENDING_HASHTAGS",
      WORKPLACE_WATCH: "WORKPLACE_WATCH",
    });
    f["default"] = a;
  },
  66
);
__d(
  "extractEntrypointData",
  ["BrowseEntryPointAction", "SearchCometInterestsDeepDiveUtil"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = b.__epa__;
      b = b.__eps__;
      e = typeof e === "string" ? c("BrowseEntryPointAction")[e] : null;
      a =
        a != null
          ? d("SearchCometInterestsDeepDiveUtil").getHashtagTag(a)
          : null;
      e == null && a != null && (e = "HASHTAG");
      a = typeof b === "string" ? b : null;
      return { entryPointAction: e, entryPointSurface: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "searchCometResultsSpellerLogEvent",
  ["requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("ODS").__setRef(
      "searchCometResultsSpellerLogEvent"
    );
    function a(a) {
      h.onReady(function (b) {
        b.bumpEntityKey(4154, "search_browse_logging", a, 1);
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometResultsClientSERPUnitIDForSessionID",
  ["uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    function a(a) {
      var b = h.get(a);
      if (b != null) return b;
      b = "www_serp:" + c("uuid")();
      h.set(a, b);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchResultPageLoggingResultsLoadedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744353");
    c = b("FalcoLoggerInternal").create(
      "search_result_page_logging_results_loaded",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "useSearchCometResultsResultsLoadedLogger",
  [
    "CometRouteParams",
    "InteractionTracingMetrics",
    "SearchResultPageLoggingResultsLoadedFalcoEvent",
    "extractEntrypointData",
    "gkx",
    "react",
    "searchCometResultsSpellerLogEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = new Set();
    function a(a) {
      var b = a.entryPointScope,
        e = a.filterType,
        f = a.loggingUnitID,
        g = a.query,
        j = a.sessionID,
        k = a.typeaheadSessionID;
      a = d("CometRouteParams").useRouteParams();
      var l = a.__epa__;
      a = c("extractEntrypointData")(g, a);
      var m = a.entryPointAction,
        n = a.entryPointSurface;
      h(
        function () {
          if (f == null || i.has(j)) return;
          l === "CORRECTION" &&
            c("searchCometResultsSpellerLogEvent")("alert_ref_dym_link");
          i.add(j);
          c("InteractionTracingMetrics")
            .currentInteractionLogger()
            .addMetadata("comet_search_results_session_id", j);
          var a = {
            common: {
              logging_unit_id: f,
              session_id: j,
              timestamp: Date.now().toString(),
              typeahead_sid: k,
            },
            entry_point_action: m,
            entry_point_scope: b,
            entry_point_surface: n,
            filter_type: e,
            query: g,
          };
          c("SearchResultPageLoggingResultsLoadedFalcoEvent").logImmediately(
            function () {
              return a;
            }
          );
        },
        [l, m, b, n, e, f, g, j, k]
      );
    }
    g["default"] = a;
  },
  98
);
