if (self.CavalryLogger) {
  CavalryLogger.start_js(["RVLPAYT"]);
}

__d(
  "CometActivityLogConstants",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = "ALL";
    b = "NONE";
    c = "ALL";
    d = "PROFILE_SHORTCUT";
    e = {
      category: "ALL",
      month: null,
      privacy: "NONE",
      visibility: "ALL",
      year: null,
    };
    f = 25;
    var i = { bottom: 2e3 },
      j = {
        activity_history: !1,
        category: "ACTIVITY_LOG",
        category_key: "ALL",
        count: 25,
        cursor: null,
        feedLocation: "ACTIVITY_LOG",
        manage_mode: !1,
        month: null,
        person_id: null,
        privacy: "NONE",
        timeline_visibility: "ALL",
        year: null,
      },
      k = 3e3,
      l = 604800,
      m = "https://www.facebook.com/help/504765303045427",
      n = h._("Hide from profile"),
      o = h._("Hide from Page"),
      p = h._("Add to Profile");
    h = h._("Add to Page");
    g.DEFAULT_CATEGORY = a;
    g.DEFAULT_PRIVACY = b;
    g.DEFAULT_VISIBILITY = c;
    g.ENTRY_POINT = d;
    g.FILTER_MENU_TEST_VARIABLES = e;
    g.PAGINATION_FETCH_COUNT = f;
    g.PAGINATION_ROOT_MARGIN = i;
    g.TEST_VARIABLES = j;
    g.TOAST_DEFAULT_DISPLAY_TIME = k;
    g.TRASH_TTL_WARNING_TIMEFRAME = l;
    g.VIEW_ONLY_LINK = m;
    g.VISIBILITY_HIDE_FROM_PROFILE_TEXT = n;
    g.VISIBILITY_HIDE_FROM_PAGE_TEXT = o;
    g.VISIBILITY_SHOW_ON_PROFILE_TEXT = p;
    g.VISIBILITY_SHOW_ON_PAGE_TEXT = h;
  },
  98
);
__d(
  "CometActivityLogContextActions",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return { type: "clear_store_for_routing" };
    }
    function b(a) {
      return { type: "clear_selected_items", value: a };
    }
    function c(a) {
      return { type: "add_selected_item", value: a };
    }
    function d(a) {
      return { type: "add_selected_items", value: a };
    }
    function e(a) {
      return { type: "remove_selected_item", value: a };
    }
    function g(a) {
      return { type: "set_filters", value: a };
    }
    function h(a) {
      return { type: "set_category", value: a };
    }
    function i(a) {
      return { type: "set_year", value: a };
    }
    function j(a) {
      return { type: "set_month", value: a };
    }
    function k(a) {
      return { type: "set_category_label", value: a };
    }
    function l(a) {
      return { type: "set_parent_category", value: a };
    }
    function m(a) {
      return { type: "set_manage_mode", value: a };
    }
    function n(a) {
      return { type: "set_selected_person_id", value: a };
    }
    function o(a) {
      return { type: "set_selected_person_name", value: a };
    }
    function p(a) {
      return { type: "set_selected_parent_category_key", value: a };
    }
    function q(a) {
      return { type: "set_has_new_items", value: a };
    }
    function r(a) {
      return { type: "set_is_bulk_action_in_progress", value: a };
    }
    function s(a) {
      return { type: "set_is_navigation_in_progress", value: a };
    }
    function t(a) {
      return { type: "set_are_new_list_items_loading", value: a };
    }
    function u(a) {
      return { type: "set_should_load_landing_page", value: a };
    }
    function v(a) {
      return { type: "set_manageable_categories_list", value: a };
    }
    function w(a) {
      return { type: "set_activity_history", value: a };
    }
    function x(a) {
      return { type: "set_accordion_is_open", value: a };
    }
    function y() {
      return { type: "clear_accordion_state" };
    }
    f.clearStoreForRouting = a;
    f.clearSelectedItems = b;
    f.addSelectedItem = c;
    f.addSelectedItems = d;
    f.removeSelectedItem = e;
    f.setFilters = g;
    f.setCategory = h;
    f.setYear = i;
    f.setMonth = j;
    f.setCategoryLabel = k;
    f.setParentCategory = l;
    f.setManageMode = m;
    f.setSelectedPersonId = n;
    f.setSelectedPersonName = o;
    f.setSelectedParentCategoryKey = p;
    f.setHasNewItems = q;
    f.setIsBulkActionInProgress = r;
    f.setIsNavigationInProgress = s;
    f.setAreNewListItemsLoading = t;
    f.setShouldLoadLandingPage = u;
    f.setManageableCategoriesList = v;
    f.setActivityHistory = w;
    f.setAccordionIsOpen = x;
    f.clearAccordionState = y;
  },
  66
);
__d(
  "useCometActivityLogRouter",
  [
    "CometActivityLogContextActions",
    "CometActivityLogUtils",
    "XCometActivityLogControllerRouteBuilder",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        b = c("useCometRouterDispatcher")(),
        e = d("CometActivityLogUtils").useCometActivityLogStore(),
        f = e.userId,
        g = function (g) {
          var h,
            i = g.clearStores;
          if (b == null || f == null) return;
          i === !0 &&
            a(d("CometActivityLogContextActions").clearStoreForRouting());
          a(
            d("CometActivityLogContextActions").setShouldLoadLandingPage(
              g.shouldLoadLandingPage
            )
          );
          a(d("CometActivityLogContextActions").setIsNavigationInProgress(!0));
          b.go(
            c("XCometActivityLogControllerRouteBuilder").buildURL({
              activity_history: (h = g.activity_history) != null ? h : !1,
              category_key: (h = g.category) != null ? h : void 0,
              manage_mode: d("CometActivityLogUtils").isOnManageMode(
                (h = g.category) != null ? h : e.category
              ),
              month: i ? void 0 : (h = g.month) != null ? h : void 0,
              person_id: i ? void 0 : (h = g.personID) != null ? h : void 0,
              person_name: i ? void 0 : (h = g.personName) != null ? h : void 0,
              vanity: f,
              year: i ? void 0 : (h = g.year) != null ? h : void 0,
            }),
            {
              onNavigate: function () {
                a(
                  d("CometActivityLogContextActions").setIsNavigationInProgress(
                    !1
                  )
                ),
                  a(
                    d(
                      "CometActivityLogContextActions"
                    ).setIsBulkActionInProgress(!1)
                  );
              },
            }
          );
        },
        h = function (a) {
          var b;
          if (f == null) return null;
          var g = typeof a.category === "string" ? e.category : a.category;
          return c("XCometActivityLogControllerRouteBuilder").buildURL({
            category_key: (b = a.category) != null ? b : void 0,
            entry_point: (b = a.entryPoint) != null ? b : void 0,
            log_filter: (b = a.logFilter) != null ? b : void 0,
            manage_mode: d("CometActivityLogUtils").isOnManageMode(g),
            month: (b = a.month) != null ? b : void 0,
            person_id: (g = a.personID) != null ? g : void 0,
            person_name: (b = a.personName) != null ? b : void 0,
            vanity: f,
            year: (g = a.year) != null ? g : void 0,
          });
        };
      return { getURL: h, go: g };
    }
    g["default"] = a;
  },
  98
);
__d(
  "FacebookAssistantPrivacyActionsEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1875805");
    c = b("FalcoLoggerInternal").create(
      "facebook_assistant_privacy_actions_event",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ManageActivityFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1886148");
    c = b("FalcoLoggerInternal").create("manage_activity", a);
    e.exports = c;
  },
  null
);
__d(
  "PhotoReviewUserEngagementEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744181");
    c = b("FalcoLoggerInternal").create(
      "photo_review_user_engagement_event",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ActivityLogMenuOption",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ARCHIVE: "archive",
      AUTO_ACTIVITY_TIME_WINDOW: "auto_activity_time_window",
      AUTO_ACTIVITY_OPT_IN: "auto_activity_opt_in",
      AUTO_ACTIVITY_OPT_OUT: "auto_activity_opt_out",
      BAN_USER_FROM_PAGE: "ban_user_from_page",
      BLOCK_APP: "block_app",
      DELETE: "delete",
      DELETE_GROUP_CONTENT: "delete_group_content",
      DELETE_NEIGHBORHOOD_CONTENT: "delete_neighborhood_content",
      DELETE_HISTORICAL_RELATIONSHIP: "delete_historical_relationship",
      DELETE_POA_SURVEY: "delete_poa_survey",
      DELETE_PREVIOUS_CONTACTPOINT: "delete_previous_contactpoint",
      DELETE_SAVE: "delete_save",
      DELETE_USER_EVENT_CONNECTION: "delete_user_event_connection",
      CLEAR_SEARCH_HISTORY: "clear_search_history",
      EDIT_EDUCATION_WORK: "edit_education_work",
      EDIT_RATING_AND_REVIEW: "edit_rating_and_review",
      EDIT_PRIVACY: "edit_privacy",
      FEEDBACK_ASSISTANT_HISTORY: "feedback_assistant_history",
      FORGET_RECOGNIZED_DEVICE: "forget_regognized_device",
      HIDE_FROM_TIMELINE: "hide_from_timeline",
      LOG_OUT: "log_out",
      MOVE_TO_TRASH: "move_to_trash",
      REMOVE_APP: "remove_app",
      REMOVE_ASSISTANT_HISTORY: "remove_assistant_history",
      REMOVE_VISUAL_SEARCH_HISTORY: "remove_visual_search_history",
      REMOVE_BLOCK_APP: "remove_block_app",
      REMOVE_COMMENT: "remove_comment",
      REMOVE_COMMENT_VOTE: "remove_comment_vote",
      REMOVE_LIFE_EVENT_TAG: "remove_life_event_tag",
      REMOVE_LIGHTWEIGHT_REACTION: "remove_lightweight_reaction",
      REMOVE_LIVE_GAMING_EVENT_CONNECTION:
        "remove_live_gaming_event_connection",
      REMOVE_PRAYER_RESPONSE: "remove_prayer_response",
      REMOVE_PRAYER_RESPONSE_THANKS: "remove_prayer_response_thanks",
      REMOVE_REACTION: "remove_reaction",
      REMOVE_REPORT_TAG: "remove_and_report_tag",
      REMOVE_SAVE: "remove_save",
      REMOVE_TAG: "remove_tag",
      REPORT_TAG: "report_tag",
      REMOVE_VIDEO_WATCH: "remove_video_watch",
      REPORT_MARK_SPAM: "report_mark_spam",
      RESTORE_FROM_ARCHIVE: "restore_from_archive",
      RESTORE_FROM_TRASH: "restore_from_trash",
      SHOW_ON_PROFILE: "show_on_profile",
      UNDO_MARK_SPAM: "undo_mark_spam",
      UNFAN_FBPAGE: "unfan_fbpage",
      UNFRIEND: "unfriend",
      UNLIKE: "unlike",
      UNREGISTER_ARENA: "unregister_arena",
      UNSUBSCRIBE_CALENDAR: "unsubscribe_calendar",
      UNVOTE: "unvote",
      VIEW_GROUP: "view_group",
      VIEW_ITEM: "view_item",
      VOLUNTEERING_OPT_OUT: "volunteering_opt_out",
    });
    f["default"] = a;
  },
  66
);
