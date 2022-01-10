if (self.CavalryLogger) {
  CavalryLogger.start_js(["CtGDmGP"]);
}

__d(
  "LWICometPromoteButtonWrapper_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "LWICometPromoteButtonWrapper_page",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "AccountBanhammerInfo",
          kind: "LinkedField",
          name: "account_banhammer_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_banhammered",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_published",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "AdsLWIInfo",
          kind: "LinkedField",
          name: "lwi_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_render_promote_button",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Page",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometHeaderActionsMenuWrapperQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4094409240680029",
        metadata: {},
        name: "PagesCometHeaderActionsMenuWrapperQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometMessageButton_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PagesCometMessageButton_page",
      selections: [
        { args: null, kind: "FragmentSpread", name: "useCometPageLike_page" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePagesCometMessage_page",
        },
      ],
      type: "Page",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "usePagesCometMessage_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "usePagesCometMessage_page",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_message",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_hide_page_messaging_entrypoint",
          storageKey: null,
        },
      ],
      type: "Page",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "BoostedComponentGenericEventsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:BoostedComponentGenericEventsLoggerConfig"
    );
  },
  null
);
__d(
  "LWICometLogger",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$2 = new Set([])), (this.$1 = a);
      }
      var b = a.prototype;
      b.subscribe = function (a) {
        this.$2.add(a);
      };
      b.unsubscribe = function (a) {
        this.$2["delete"](a);
      };
      b.$4 = function (a) {
        this.$2.forEach(function (b) {
          b(a);
        });
      };
      b.log = function (a) {
        (this.$3 = a), this.$4(a), this.$1(a);
      };
      b.getLastLoggedData = function () {
        return this.$3;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "USIDFlag",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({
      HTTP_HEADER_SESSION: "HH",
      LOCAL_STORAGE_FAILURE: "LSF",
      SERVER_GENERATED_SESSION: "SGS",
      SERVER_PARSE_FAILURE: "SPF",
      SESSION_STORAGE_FAILURE: "SSF",
      UNKNOWN_VERSION_FAILURE: "UVF",
      UNKOWN_DATA_FAILURE: "UDF",
    });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "USIDUtils",
  ["Cookie", "Random", "WebStorage"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 4294967295,
      i = 36,
      j = "usidt",
      k = "usida",
      l = 1,
      m = 6;
    function a() {
      var a = [];
      c("WebStorage").isLocalStorageQuotaExceeded() && a.push("LSF");
      c("WebStorage").isSessionStorageQuotaExceeded() && a.push("SSF");
      return a;
    }
    function n(a) {
      var b = Math.floor(Date.now() / 1e3),
        c = Math.floor(d("Random").random() * h);
      a = a + Number(b & h).toString(i) + c.toString(i);
      return a;
    }
    function o(a, b, c) {
      if (a == null) return { ver: l, id: n(c) };
      a = a.getItem(b);
      if (a == null) return { ver: l, id: n(c) };
      b = JSON.parse(a);
      return b.ver !== l ? { ver: l, id: n(c) } : b;
    }
    function p(a, b, d) {
      if (a == null) return;
      c("WebStorage").setItemGuarded(a, b, JSON.stringify(d));
    }
    function q(a, b) {
      if (c("Cookie") == null) return { ver: l, id: n(b) };
      a = c("Cookie").get(a);
      if (a == null || a == "") return { ver: l, id: n(b) };
      a = JSON.parse(a);
      return a.ver !== l ? { ver: l, id: n(b) } : a;
    }
    function r(a, b) {
      if (c("Cookie") == null) return;
      c("Cookie").set(a, JSON.stringify(b));
    }
    function b() {
      var a = o(c("WebStorage").getSessionStorageForRead(), j, "T");
      return a.id;
    }
    function e(a) {
      p(c("WebStorage").getSessionStorage(), j, { ver: l, id: a });
    }
    function s() {
      var a,
        b = q(k, "A");
      return {
        id: b.id,
        time: (a = b.time) != null ? a : 0,
        startTime: (a = b.startTime) != null ? a : 0,
      };
    }
    function f(a) {
      r(k, { ver: l, id: a.id, time: a.time });
      var b = s();
      return b.id === a.id && b.time === a.time;
    }
    g.VERSION = m;
    g.getFlags = a;
    g.generateId = n;
    g.getExistingTabId = b;
    g.writeTabId = e;
    g.getExistingActivityInfo = s;
    g.writeActivityInfo = f;
  },
  98
);
__d(
  "USIDCore",
  ["DateConsts", "USIDUtils", "asyncParams"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 30,
      i = d("DateConsts").MIN_PER_HOUR * 5,
      j = 2,
      k = "__usid";
    function l() {
      return Math.floor(Date.now() / d("DateConsts").MS_PER_SEC);
    }
    a = (function () {
      function a(a, b, c, e, f, g) {
        this.$1 = a;
        this.$2 = b;
        this.$3 = c;
        this.$8 = e;
        this.$9 = f;
        this.$4 = g.activityTrigger;
        this.$5 = ((b = g.activityTimeoutInMin) != null ? b : h) * 60;
        this.$6 = ((c = g.activityMaxTimeInMin) != null ? c : i) * 60;
        this.$7 = ((e = g.activityCacheTimeoutInMin) != null ? e : j) * 60;
        this.$10 = 0;
        d("USIDUtils").writeTabId(a);
        this.triggerActivity();
      }
      var b = a.prototype;
      b.getFlags = function () {
        return this.$9;
      };
      b.getRequestVersion = function () {
        return this.$8;
      };
      b.getSessionVersion = function () {
        return d("USIDUtils").VERSION;
      };
      b.getTabId = function () {
        return this.$1;
      };
      b.getPageId = function () {
        return this.$2;
      };
      b.getTransitionId = function () {
        return this.$3;
      };
      b.getActivityId = function () {
        var a = this.$11();
        return a.id;
      };
      b.getActivityTimeOut = function () {
        var a = d("USIDUtils").getExistingActivityInfo(),
          b = l();
        return this.$5 - (b - a.time);
      };
      b.getActivityMaxTime = function () {
        var a = d("USIDUtils").getExistingActivityInfo(),
          b = l();
        return this.$6 - (b - a.startTime);
      };
      b.getSessionID = function () {
        return (
          this.getTabId() +
          ":" +
          this.getPageId() +
          ":" +
          this.getTransitionId() +
          "-" +
          this.getActivityId()
        );
      };
      b.serializeForRequest = function () {
        this.$4 === "request" && this.triggerActivity();
        return this.$12();
      };
      b.$12 = function () {
        var a = this.getSessionVersion(),
          b = this.getSessionID(),
          c = this.getRequestVersion(),
          d = this.getFlags().join(",");
        return a + "-" + b + "-RV=" + c + ":F=" + d;
      };
      b.contextData = function () {
        return { usid_override: this.serializeForRequest() };
      };
      b.$11 = function () {
        var a = d("USIDUtils").getExistingActivityInfo(),
          b = this.$13(a);
        b && this.$14(a);
        return a;
      };
      b.$14 = function (a) {
        a = d("USIDUtils").writeActivityInfo(a);
        a && d("asyncParams").add(k, this.$12());
      };
      b.$13 = function (a) {
        var b = l();
        if (b - a.time > this.$5) {
          a.id = d("USIDUtils").generateId("A");
          a.time = b;
          a.startTime = b;
          return !0;
        }
        return !1;
      };
      b.triggerActivity = function () {
        var a = l();
        if (a - this.$10 > this.$7) {
          var b = this.$11();
          b.time = a;
          this.$14(b);
          this.$10 = a;
        }
      };
      b.nextTransition = function () {
        this.triggerActivity(), this.$3++;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "USID",
  ["USIDCore", "USIDMetadata", "USIDUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = function (a) {
        if (h != null) return h;
        var b = d("USIDUtils").getExistingTabId(),
          e = c("USIDMetadata").page_id,
          f = c("USIDMetadata").transition_id,
          g = c("USIDMetadata").version,
          i = d("USIDUtils").getFlags();
        h = new (c("USIDCore"))(b, e, f, g, i, a);
        return h;
      };
    a = function () {
      return i({ activityTrigger: "request" });
    };
    b = { init: i, get: a };
    g["default"] = b;
  },
  98
);
__d(
  "LWICometGenericEventsLoggerLite",
  ["BoostedComponentGenericEventsTypedLoggerLite", "LWICometLogger", "USID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i() {
      h == null &&
        (h = new (c("LWICometLogger"))(
          c("BoostedComponentGenericEventsTypedLoggerLite").log
        ));
      return h;
    }
    function a(a) {
      i().log(
        babelHelpers["extends"]({}, a, {
          usid_override: c("USID").get().serializeForRequest(),
        })
      );
    }
    g.getLogger = i;
    g.log = a;
  },
  98
);
__d(
  "LWICometPromoteUnavailableButton.react",
  [
    "fbt",
    "CometLazyPopoverTrigger.react",
    "JSResourceForInteraction",
    "LWICometGenericEventsLoggerLite",
    "LWIOmniButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useEffect,
      k = c("JSResourceForInteraction")(
        "LWICometPromoteUnavailablePopover.react"
      ).__setRef("LWICometPromoteUnavailableButton.react");
    function a(a) {
      var b = a.entryPoint,
        e = a.icon,
        f = a.pageID,
        g = a.size,
        l = g === void 0 ? "medium" : g;
      g = a.usePromoteLabel;
      var m = g === void 0 ? !1 : g;
      j(
        function () {
          d("LWICometGenericEventsLoggerLite").log({
            entry_point: b,
            event: "render_promote_unavailable_button",
            page_id: f,
          });
        },
        [b, f]
      );
      return i.jsx(c("CometLazyPopoverTrigger.react"), {
        align: "end",
        popoverProps: { entryPoint: b, pageID: f },
        popoverResource: k,
        position: "above",
        children: function (a, b) {
          return i.jsx(c("LWIOmniButton.react"), {
            icon: e,
            label: m
              ? h._(["Promote", "0578fbc14a9418cef7a59debc5e5cf1b", 1])
              : h._("Create Ad"),
            onPress: b,
            ref: a,
            size: l,
            type: "secondary",
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "LWIOmniAdCenterButton.react",
  ["cr:1032", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = h.forwardRef(function (a, c) {
      return h.jsx(b("cr:1032"), babelHelpers["extends"]({}, a, { ref: c }));
    });
    g["default"] = a;
  },
  98
);
__d(
  "AdsLWIEntryPoint",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      AD4AD_BOOST_AUTOMATED_ADS: "ad4ad_boost_automated_ads",
      AD4AD_BOOST_FB_INSTAGRAM_MEDIA: "ad4ad_boost_fb_instagram_media",
      AD4AD_BOOST_LEAD_GEN: "ad4ad_boost_lead_gen",
      AD4AD_BOOST_MARKETPLACE_PRODUCT_TIP:
        "ad4ad_boost_marketplace_product_tip",
      AD4AD_BOOST_PAGE_CTA: "ad4ad_boost_page_cta",
      AD4AD_BOOST_PAGE_MESSENGER_CTA: "ad4ad_boost_page_messenger_cta",
      AD4AD_BOOST_PAGE_MESSENGER_CTA_USE_STOCK_IMAGE:
        "ad4ad_boost_page_messenger_cta_use_stock_image",
      AD4AD_BOOST_PAGE_WHATSAPP_CTA: "ad4ad_boost_page_whatsapp_cta",
      AD4AD_TIPS_MORE_BUTTON: "ad4ad_tips_more_button",
      AD4AD_WEBSITE_PURCHASE: "ad4ad_website_purchase",
      AD4AD_WEBSITE_PURCHASE_BOOST_POST: "ad4ad_website_purchase_boost_post",
      AD_CENTER_AD_PREVIEW_CARD: "ad_center_ad_preview_card",
      AD_CENTER_AUTO_BOOST_MOBILE: "ad_center_auto_boost_mobile",
      AD_CENTER_LINK_CLICKS_MODAL: "ad_center_link_clicks_modal",
      AD_CENTER_METRICS_MODAL: "ad_center_metrics_modal",
      AD_CENTER_POST_ENGAGEMENT_MODAL: "ad_center_post_engagement_modal",
      AD_CENTER_REACH_MODAL: "ad_center_reach_modal",
      AIA_FEED_SCHEDULE_SUCCESS_EMAIL: "aia_feed_schedule_success_email",
      AIA_LWI_BETA_TIP: "aia_lwi_beta_tip",
      AIA_LWI_CPAS_TIP: "aia_lwi_cpas_tip",
      AM_ONBOARDING_DECISION_MODAL: "am_onboarding_decision_modal",
      AUTO_BOOST_APPROVAL_MOBILE: "auto_boost_approval_mobile",
      AUTO_BOOST_SUBSCRIPTION_MOBILE: "auto_boost_subscription_mobile",
      AUTO_OPEN_UNKNOWN_SOURCE: "auto_open_unknown_source",
      AYMT_AD4AD_BOOSTED_POST_CTM_AD_DRAFT_TIP:
        "aymt_ad4ad_boosted_post_ctm_ad_draft_tip",
      AYMT_AFC_INDIA_PREPAY_ACQUISITION_HERES_X_COUPON_TIP:
        "aymt_afc_india_prepay_acquisition_heres_x_coupon_tip",
      AYMT_BOOSTED_AUTOMATED_ADS_AUTO_BOOST_UPSELL_TIP:
        "aymt_boosted_automated_ads_auto_boost_upsell_tip",
      AYMT_BOOSTED_AUTOMATED_ADS_BEST_PERFORMING_AD_TIP:
        "aymt_boosted_automated_ads_best_performing_ad_tip",
      AYMT_BOOSTED_AUTOMATED_ADS_CREATIVE_REFRESH_TIP:
        "aymt_boosted_automated_ads_creative_refresh_tip",
      AYMT_BOOSTED_AUTOMATED_ADS_GENERAL_DROP_OFF_TIP:
        "aymt_boosted_automated_ads_general_drop_off_tip",
      AYMT_BOOSTED_AUTOMATED_ADS_WEEKLY_RECAP_TIP:
        "aymt_boosted_automated_ads_weekly_recap_tip",
      AYMT_BOOSTED_AUTOMATED_ADS_WELCOME_TIP:
        "aymt_boosted_automated_ads_welcome_tip",
      AYMT_BOOSTED_CTA_MESSAGE_DRAFT_TIP: "aymt_boosted_cta_message_draft_tip",
      AYMT_BOOSTED_WEBSITE_ABANDONMENT_TIP:
        "aymt_boosted_website_abandonment_tip",
      AYMT_BOOST_MARKETPLACE_PRODUCT: "aymt_boost_marketplace_product",
      AYMT_BOOST_MARKETPLACE_PRODUCT_ABANDONMENT:
        "aymt_boost_marketplace_product_abandonment",
      AYMT_BOOST_MARKETPLACE_PRODUCT_EMAIL:
        "aymt_boost_marketplace_product_email",
      AYMT_BOOST_PAGE_WITH_MESSENGER_CTA_TIP:
        "aymt_boost_page_with_messenger_cta_tip",
      AYMT_BOOST_PAGE_WITH_WHATSAPP_CTA_EXISTING_ADVERTISER_TIP:
        "aymt_boost_page_with_whatsapp_cta_existing_advertiser_tip",
      AYMT_BOOST_PAGE_WITH_WHATSAPP_CTA_NON_ADVERTISER_TIP:
        "aymt_boost_page_with_whatsapp_cta_non_advertiser_tip",
      AYMT_BOOST_POST_CALL_NOW_CTA_TIP: "aymt_boost_post_call_now_cta_tip",
      AYMT_BOOST_POST_WITH_ADS_INTENT_TIP:
        "aymt_boost_post_with_ads_intent_tip",
      AYMT_BOOST_POST_WITH_MESSENGER_CTA_TIP:
        "aymt_boost_post_with_messenger_cta_tip",
      AYMT_BOOST_POST_WITH_WHATSAPP_CTA_TIP:
        "aymt_boost_post_with_whatsapp_cta_tip",
      AYMT_CAMPAIGN_OPTIMIZATIONS_INITIAL_EMAIL:
        "aymt_campaign_optimizations_initial_email",
      AYMT_CAMPAIGN_OPTIMIZATIONS_REMINDER_EMAIL:
        "aymt_campaign_optimizations_reminder_email",
      AYMT_COUPON_OFFER_PROFILE_PLUS_BALANCE_REMINDER_TIP:
        "aymt_coupon_offer_profile_plus_balance_reminder_tip",
      AYMT_FB_STORY_AD4AD_BOOST_POST_TIP: "aymt_fb_story_ad4ad_boost_post_tip",
      AYMT_LAX_QUESTIONNAIRE: "aymt_lax_questionnaire",
      AYMT_LAX_QUESTIONNAIRE_RESUME: "aymt_lax_questionnaire_resume",
      AYMT_LAX_RECOMMENDATION: "aymt_lax_recommendation",
      AYMT_LEARN_ABOUT_BOOSTED_CTA_TIP: "aymt_learn_about_boosted_cta_tip",
      AYMT_LWI_BOOST_MENU_ADS_UPSELL_TIP: "aymt_lwi_boost_menu_ads_upsell_tip",
      AYMT_LWI_RECOMMENDATION_TIP: "aymt_lwi_recommendation_tip",
      AYMT_MARKETPLACE_AD4AD_IN_NF: "aymt_marketplace_ad4ad_in_nf",
      AYMT_ONGOING_OPTIMIZATIONS_VIEW_RESULTS_JEWEL:
        "aymt_ongoing_optimizations_view_results_jewel",
      AYMT_PAGE_AD_DURATION_HINT_TIP: "aymt_page_ad_duration_hint_tip",
      AYMT_PAGE_AD_ESSENTIAL_HINT_TIP: "aymt_page_ad_essential_hint_tip",
      AYMT_PAGE_BOOST_INSTAGRAM_POST_TIP: "aymt_page_boost_instagram_post_tip",
      AYMT_PAGE_DIFFERENT_AD_PLACEMENTS_TIP:
        "aymt_page_different_ad_placements_tip",
      AYMT_PAGE_KEEP_AUDIENCE_UPDATED_TIP:
        "aymt_page_keep_audience_updated_tip",
      AYMT_PAGE_RUN_ADS_REGULARLY_TIP: "aymt_page_run_ads_regularly_tip",
      AYMT_PAGE_SET_RIGHT_AD_BUDGET_TIP: "aymt_page_set_right_ad_budget_tip",
      AYMT_PAGE_SET_RIGHT_AD_OBJECTIVE_TIP:
        "aymt_page_set_right_ad_objective_tip",
      AYMT_PAGE_TRY_DIFFERENT_AD_OBJECTIVE_TIP:
        "aymt_page_try_different_ad_objective_tip",
      AYMT_POST_FOOTER_UPSELL_WITH_MESSENGER_CTA:
        "aymt_post_footer_upsell_with_messenger_cta",
      AYMT_POST_FOOTER_UPSELL_WITH_WHATSAPP_CTA:
        "aymt_post_footer_upsell_with_whatsapp_cta",
      AYMT_POST_RUN_AD_WITH_CTA_TIP: "aymt_post_run_ad_with_cta_tip",
      AYMT_PROMOTE_EVENT_POST_TIP: "aymt_promote_event_post_tip",
      AYMT_PROMOTE_PAGE_LIKE_TIP: "aymt_promote_page_like_tip",
      AYMT_PROMOTE_POST_CLICK_TO_CALL_AD4AD_TIP:
        "aymt_promote_post_click_to_call_ad4ad_tip",
      AYMT_PROMOTE_POST_CLICK_TO_MESSENGER_AD4AD_TIP:
        "aymt_promote_post_click_to_messenger_ad4ad_tip",
      AYMT_PROMOTE_POST_CLICK_TO_WHATSAPP_AD4AD_TIP:
        "aymt_promote_post_click_to_whatsapp_ad4ad_tip",
      AYMT_PROMOTE_POST_WHATSAPP_CTA_NEWS_FEED_TIP:
        "aymt_promote_post_whatsapp_cta_news_feed_tip",
      AYMT_PYMA_BOOSTED_EVENT_TIP: "aymt_pyma_boosted_event_tip",
      AYMT_PYMA_BOOSTED_POST_CLICK_TO_MESSENGER_AD4AD_TIP:
        "aymt_pyma_boosted_post_click_to_messenger_ad4ad_tip",
      AYMT_PYMA_BOOSTED_POST_CLICK_TO_WHATSAPP_AD4AD_TIP:
        "aymt_pyma_boosted_post_click_to_whatsapp_ad4ad_tip",
      AYMT_PYMA_BOOSTED_POST_TIP_NO_IPC_WITH_CAP:
        "aymt_pyma_boosted_post_tip_no_ipc_with_cap",
      AYMT_PYMA_LOCAL_AWARENESS_TIP: "aymt_pyma_local_awareness_tip",
      AYMT_PYMA_PROMOTE_CTA_TIP: "aymt_pyma_promote_cta_tip",
      AYMT_PYMA_PROMOTE_PAGE_LIKE_TIP: "aymt_pyma_promote_page_like_tip",
      AYMT_PYMA_WEBSITE_CLICK_TIP: "aymt_pyma_website_click_tip",
      AYMT_RECENTLY_ENDED_CAMPAIGN_TIP: "aymt_recently_ended_campaign_tip",
      AYMT_SIGNAL_LOSS_ADS_TURNED_OFF_TIP:
        "aymt_signal_loss_ads_turned_off_tip",
      AYMT_UPG_ECHO_TIP_AD_DRAFT_JEWEL: "aymt_upg_echo_tip_ad_draft_jewel",
      AYMT_YOUR_WEBSITE_IS_HOT_TIP: "aymt_your_website_is_hot_tip",
      BIZAPP_ADS_TAB: "bizapp_ads_tab",
      BIZAPP_CALENDAR_BOTTOM_SHEET: "bizapp_calendar_bottom_sheet",
      BIZAPP_COMPOSER: "bizapp_composer",
      BIZAPP_CUSTOM_STORY_VIEWER: "bizapp_custom_story_viewer",
      BIZAPP_CUSTOM_STORY_VIEW_MORE_MENU: "bizapp_custom_story_view_more_menu",
      BIZAPP_INBOX_UPSELL_BANNER: "bizapp_inbox_upsell_banner",
      BIZAPP_INSIGHTS_AUDIENCE_TAB: "bizapp_insights_audience_tab",
      BIZAPP_INSIGHTS_TAB_PROMOTE_BUTTON: "bizapp_insights_tab_promote_button",
      BIZAPP_INSIGHTS_TAB_UPSELL_PILL: "bizapp_insights_tab_upsell_pill",
      BIZAPP_ISOLATED_QUESTIONNAIRE_AD_CENTER:
        "bizapp_isolated_questionnaire_ad_center",
      BIZAPP_LWI_COMPOSER: "bizapp_lwi_composer",
      BIZAPP_POST_DETAIL: "bizapp_post_detail",
      BIZAPP_POST_LIST: "bizapp_post_list",
      BIZAPP_POST_TAB: "bizapp_post_tab",
      BIZAPP_RECENT_ADS_CARD: "bizapp_recent_ads_card",
      BIZAPP_RECENT_POSTS_CARD: "bizapp_recent_posts_card",
      BIZAPP_STORY_LIST: "bizapp_story_list",
      BIZAPP_UNIVERSAL_CREATION: "bizapp_universal_creation",
      BIZWEB_AD_CENTER_ISOLATED_QUESTIONNAIRE_TAB:
        "bizweb_ad_center_isolated_questionnaire_tab",
      BIZWEB_AD_CENTER_OVERVIEW: "bizweb_ad_center_overview",
      BIZWEB_AD_CENTER_WELCOME_CARD: "bizweb_ad_center_welcome_card",
      BIZWEB_CRM_DESTINATION_SEGMENT_PROMOTION:
        "bizweb_crm_destination_segment_promotion",
      BIZWEB_HOME: "bizweb_home",
      BIZWEB_HOME_HEADER: "bizweb_home_header",
      BIZWEB_HOME_ISOLATED_QUESTIONNAIRE_CARD:
        "bizweb_home_isolated_questionnaire_card",
      BIZWEB_HOME_POST_ACTIVITY_CARD: "bizweb_home_post_activity_card",
      BIZWEB_INBOX_CREATE_AD: "bizweb_inbox_create_ad",
      BIZWEB_INBOX_UPSELL_BANNER: "bizweb_inbox_upsell_banner",
      BIZWEB_INSIGHTS_AUDIENCE_TAB: "bizweb_insights_audience_tab",
      BIZWEB_INVENTORY_TOOL: "bizweb_inventory_tool",
      BIZWEB_OBJECT_TEMPLATE: "bizweb_object_template",
      BIZWEB_POST_TAB_FEED_CONTEXTUAL: "bizweb_post_tab_feed_contextual",
      BIZWEB_POST_TAB_LIST_CONTEXTUAL: "bizweb_post_tab_list_contextual",
      BIZWEB_POST_TAB_MEGAPHONE: "bizweb_post_tab_megaphone",
      BIZWEB_RECENT_ADS_CARD: "bizweb_recent_ads_card",
      BIZWEB_RECENT_POSTS_CARD: "bizweb_recent_posts_card",
      BIZ_INFO_CENTER: "biz_info_center",
      BIZ_INFO_CENTER_ADS_BUNDLING: "biz_info_center_ads_bundling",
      BIZ_INFO_CENTER_AD_PREVIEW: "biz_info_center_ad_preview",
      BIZ_INSIGHTS_BOOST_LEAD_GEN_GUIDANCE_TIP:
        "biz_insights_boost_lead_gen_guidance_tip",
      BIZ_INSIGHTS_BOOST_POST_GUIDANCE_TIP:
        "biz_insights_boost_post_guidance_tip",
      BIZ_INSIGHTS_BOOST_WEBSITE_GUIDANCE_TIP:
        "biz_insights_boost_website_guidance_tip",
      BIZ_INSIGHTS_PROMOTE_PAGE_GUIDANCE_TIP:
        "biz_insights_promote_page_guidance_tip",
      BIZ_INSIGHTS_SELECT_BOOST_POST_GUIDANCE_TIP:
        "biz_insights_select_boost_post_guidance_tip",
      BIZ_WEB_APP_SCHEDULED_BOOST: "biz_web_app_scheduled_boost",
      BIZ_WEB_UNIVERSAL_CREATION: "biz_web_universal_creation",
      BLUE_SL_REDIRECT_NOTICE: "blue_sl_redirect_notice",
      BOOST_JOB_MESSENGER_BOT: "boost_job_messenger_bot",
      BRANDED_GLOBAL_CONFIG_DETAILS: "branded_global_config_details",
      BSG_ITEM_CARD: "bsg_item_card",
      BUSINESS_CONTENT_MANAGER_CALENDAR_VIEW:
        "business_content_manager_calendar_view",
      BUSINESS_CONTENT_MANAGER_CALENDAR_VIEW_DETAIL_MODAL:
        "business_content_manager_calendar_view_detail_modal",
      BUSINESS_CONTENT_MANAGER_DETAIL_VIEW:
        "business_content_manager_detail_view",
      BUSINESS_CONTENT_MANAGER_DETAIL_VIEW_MODAL:
        "business_content_manager_detail_view_modal",
      BUSINESS_CONTENT_MANAGER_DETAIL_VIEW_MODAL_IG_FEED_VIEW:
        "business_content_manager_detail_view_modal_ig_feed_view",
      BUSINESS_CONTENT_MANAGER_DETAIL_VIEW_MODAL_IG_GRID_VIEW:
        "business_content_manager_detail_view_modal_ig_grid_view",
      BUSINESS_CONTENT_MANAGER_DETAIL_VIEW_MODAL_POST_ACTIVITY_CARD:
        "business_content_manager_detail_view_modal_post_activity_card",
      BUSINESS_CONTENT_MANAGER_DETAIL_VIEW_PPT:
        "business_content_manager_detail_view_ppt",
      BUSINESS_CONTENT_MANAGER_FB_FEED_VIEW:
        "business_content_manager_fb_feed_view",
      BUSINESS_CONTENT_MANAGER_IG_FEED_VIEW:
        "business_content_manager_ig_feed_view",
      BUSINESS_CONTENT_MANAGER_LIST_VIEW: "business_content_manager_list_view",
      BUSINESS_CONTENT_MANAGER_LIST_VIEW_PPT:
        "business_content_manager_list_view_ppt",
      BUSINESS_CONTENT_MANAGER_LIST_VIEW_SCHEDULED:
        "business_content_manager_list_view_scheduled",
      C2C_PDP: "c2c_pdp",
      C2C_POST_PUBLISH_UPSELL: "c2c_post_publish_upsell",
      CATALOG_MANAGER_ADVERTISE_SET_BUTTON:
        "catalog_manager_advertise_set_button",
      CCTA_MENU: "ccta_menu",
      CHINA_SOE_POST_LANDING: "china_soe_post_landing",
      COMET_BOOSTED_JOB_LWI_CREATE_VIEW_UPSELL:
        "comet_boosted_job_lwi_create_view_upsell",
      COMET_BOOSTED_JOB_POST_CREATION_UPSELL:
        "comet_boosted_job_post_creation_upsell",
      COMET_EDIT_MENU_CONFIRMATION_DIALOG:
        "comet_edit_menu_confirmation_dialog",
      COMET_JEST_E2E_TEST: "comet_jest_e2e_test",
      COMET_JOBS_BULK_BOOSTING: "comet_jobs_bulk_boosting",
      COMET_JOB_BOOKMARKS_HIRING_HUB: "comet_job_bookmarks_hiring_hub",
      COMET_MENU_TAB: "comet_menu_tab",
      COMET_MENU_TAB_UPSELL_BOOST_MENU_BANNER_NUX:
        "comet_menu_tab_upsell_boost_menu_banner_nux",
      COMET_MENU_TAB_UPSELL_BOOST_MENU_DIALOG_NUX:
        "comet_menu_tab_upsell_boost_menu_dialog_nux",
      COMPOSER: "composer",
      COUPON_BUNDLE_INTERSTITIAL: "coupon_bundle_interstitial",
      COUPON_DXGY_INTERSTITIAL: "coupon_dxgy_interstitial",
      COUPON_INTERSTITIAL_FLOW: "coupon_interstitial_flow",
      CREATOR_STUDIO_APP_CONTENT_DETAILS: "creator_studio_app_content_details",
      CREATOR_STUDIO_APP_CONTENT_LIBRARY: "creator_studio_app_content_library",
      EVENTS_ADMIN_TOOL_POE_TAB: "events_admin_tool_poe_tab",
      EVENTS_MANAGE_HUB: "events_manage_hub",
      EVENT_PERMALINK_ADS_SECTION: "event_permalink_ads_section",
      FB4B_CREATE_AD_CTA: "fb4b_create_ad_cta",
      FB4B_SB_HOME_OPTIMIZATIONS: "fb4b_sb_home_optimizations",
      FBLITE_MANAGEMENT_FTAE: "fblite_management_ftae",
      FOOD_ORDERS_LWI_BETA_TIP: "food_orders_lwi_beta_tip",
      FRANCHISE_PROGRAM_LOCAL_ONBOARDING_FLOW:
        "franchise_program_local_onboarding_flow",
      FRANCHISE_PROGRAM_LOCAL_PAGE_DETAILS_ADS_FOR_PROGRAM:
        "franchise_program_local_page_details_ads_for_program",
      FRANCHISE_PROGRAM_LOCAL_PAGE_PROGRAMS_DETAIL:
        "franchise_program_local_page_programs_detail",
      GROUPS_CONTEXTUAL_LWI_ENTRY_CARD_QP:
        "groups_contextual_lwi_entry_card_qp",
      GROUP_EVENTS_TAB_EVENTS: "group_events_tab_events",
      INDIA_OE_POST_LANDING_CARD: "india_oe_post_landing_card",
      INVENTORY_MANAGER_CREATE_AIA_TIP: "inventory_manager_create_aia_tip",
      INVENTORY_MANAGER_CREATE_CATALOG_CTA:
        "inventory_manager_create_catalog_cta",
      ITEM_CARD: "item_card",
      JOB_ADMIN_DETAILS_BOOST_BUTTON: "job_admin_details_boost_button",
      JOB_ATS_APPLICATION_MANAGER: "job_ats_application_manager",
      JOB_ATS_POST_MANAGER: "job_ats_post_manager",
      JOB_COMPOSER_DEFAULT_ON: "job_composer_default_on",
      JOB_COMPOSER_PAGE: "job_composer_page",
      JOB_GROUP_COMPOSER: "job_group_composer",
      JOB_GROUP_TIMELINE: "job_group_timeline",
      LIVE_PRODUCER_LIVE_ADS_TAB: "live_producer_live_ads_tab",
      LWI_EVERYWHERE_3P_IFRAME: "lwi_everywhere_3p_iframe",
      LWI_EVERYWHERE_BM: "lwi_everywhere_bm",
      MANAGE_JOB_MODULE: "manage_job_module",
      MARKETPLACE_ADMIN_SURFACE_AD_PREVIEW:
        "marketplace_admin_surface_ad_preview",
      MARKETPLACE_INCREASE_LISTING_REACH_NOTIF:
        "marketplace_increase_listing_reach_notif",
      MEDIA_MANAGER: "media_manager",
      MESSENGER_QP: "messenger_qp",
      MINI_SHOP_COMMERCE_MANAGER_HOME_PAGE:
        "mini_shop_commerce_manager_home_page",
      MINI_SHOP_COMMERCE_MANAGER_SHOP_TAB:
        "mini_shop_commerce_manager_shop_tab",
      MINI_SHOP_COMMERCE_MANAGER_SHOP_TAB_EDITOR:
        "mini_shop_commerce_manager_shop_tab_editor",
      MOBILE_ADS_BOOKMARK: "mobile_ads_bookmark",
      MOBILE_AD_CENTER_ACTIVITY_SECTION_RECOMMENDATIONS:
        "mobile_ad_center_activity_section_recommendations",
      MOBILE_AD_CENTER_BOOST_SUGGESTED_POST:
        "mobile_ad_center_boost_suggested_post",
      MOBILE_AD_CENTER_STRUCTURE_AD: "mobile_ad_center_structure_ad",
      MOBILE_AD_CENTER_TOOL_SECTION_QUESTIONNAIRE:
        "mobile_ad_center_tool_section_questionnaire",
      MOBILE_AD_CENTER_WELCOME_CARD_FTAE: "mobile_ad_center_welcome_card_ftae",
      MOBILE_AD_CREDIT_SURFACE: "mobile_ad_credit_surface",
      MOBILE_BOOSTED_JOB_POST_CREATION_UPSELL:
        "mobile_boosted_job_post_creation_upsell",
      MOBILE_JOB_COMPOSER: "mobile_job_composer",
      MOBILE_JOB_GROUP_COMPOSER: "mobile_job_group_composer",
      MOBILE_MANAGEMENT_RECOMMENDATIONS_SECTION:
        "mobile_management_recommendations_section",
      MOBILE_POST_AD_CREATION_SURFACE: "mobile_post_ad_creation_surface",
      MOBILE_PRODUCT_PICKER_FTAE: "mobile_product_picker_ftae",
      MULTIPLE_BOOSTING_UIM: "multiple_boosting_uim",
      NEW_TIMELINE: "new_timeline",
      OE_NEWBIE_TASK_DEMO_ACCOUNT_TEST: "oe_newbie_task_demo_account_test",
      OE_POST_AAC_ENTRYPOINT_TEST: "oe_post_aac_entrypoint_test",
      PAGES_ADS_TAB: "pages_ads_tab",
      PAGES_MANAGER_BAR: "pages_manager_bar",
      PAGES_NEWS_FEED: "pages_news_feed",
      PAGE_BOOKMARK_SHORTCUT: "page_bookmark_shortcut",
      PAGE_BUSINESS_MEMORIES_FEED: "page_business_memories_feed",
      PAGE_COMPLETION_METER: "page_completion_meter",
      PAGE_HOME_AD_UNIT_BOOST_POST_TIP: "page_home_ad_unit_boost_post_tip",
      PAGE_INSIGHTS_POST_SCREEN: "page_insights_post_screen",
      PAGE_INSIGHTS_POST_SECTION: "page_insights_post_section",
      PERMALINK: "permalink",
      PERSONALIZED_MARKETING_PLAN: "personalized_marketing_plan",
      PLAY_GROUND: "play_ground",
      PROFILE_PLUS_CAA_CAE_MOBILE_POST_TIMELINE:
        "profile_plus_caa_cae_mobile_post_timeline",
      PROFILE_PLUS_COMET_BRANDED_TEMPLATE:
        "profile_plus_comet_branded_template",
      PROFILE_PLUS_COMET_POST_INSIGHTS: "profile_plus_comet_post_insights",
      PROFILE_PLUS_COMET_PROFILE_INSIGHTS:
        "profile_plus_comet_profile_insights",
      PROFILE_PLUS_FBLITE_POST_INSIGHTS: "profile_plus_fblite_post_insights",
      PROFILE_PLUS_FBLITE_POST_TIMELINE: "profile_plus_fblite_post_timeline",
      PROFILE_PLUS_LAR_MOBILE_POST_TIMELINE:
        "profile_plus_lar_mobile_post_timeline",
      PROFILE_PLUS_MOBILE_POST_INSIGHTS: "profile_plus_mobile_post_insights",
      PROFILE_PLUS_MOBILE_POST_TIMELINE: "profile_plus_mobile_post_timeline",
      PROMOTE_ACTION_BUTTON: "promote_action_button",
      SEARCH_SHORTCUT: "search_shortcut",
      SHOP_COMMERCE_MANAGER_ADS_TAB: "shop_commerce_manager_ads_tab",
      UIIM_UPSELL: "uiim_upsell",
      UNIFIED_LANDING_URI: "unified_landing_uri",
      UNKNOWN: "unknown",
      WHATSAPP_SMB_CATALOG_PRODUCT: "whatsapp_smb_catalog_product",
      WWW_ADS_MANAGER: "www_ads_manager",
      WWW_ADS_MANAGER_ADS_SEGMENTATION_ROUTING_EXP:
        "www_ads_manager_ads_segmentation_routing_exp",
      WWW_AD_CENTER_ALL_ADS_RECOMMENDED_OBJECTIVE:
        "www_ad_center_all_ads_recommended_objective",
      WWW_AD_CENTER_BACS_AD_CREDIT: "www_ad_center_bacs_ad_credit",
      WWW_AD_CENTER_CHOOSE_ANOTHER_POST: "www_ad_center_choose_another_post",
      WWW_AD_CENTER_FTAE_WITH_AD_CREDIT: "www_ad_center_ftae_with_ad_credit",
      WWW_AD_CENTER_IQ_RECOMMENDATION: "www_ad_center_iq_recommendation",
      WWW_AD_CENTER_OFFER_WALLET: "www_ad_center_offer_wallet",
      WWW_AD_CENTER_OVERVIEW_AD_CARDS: "www_ad_center_overview_ad_cards",
      WWW_AD_CENTER_TOOL_CARD_IQ: "www_ad_center_tool_card_iq",
      WWW_AD_CENTER_UPDATES_CARD_RECOMMENDATIONS:
        "www_ad_center_updates_card_recommendations",
      WWW_AD_CENTER_VIEW_RESULTS: "www_ad_center_view_results",
      WWW_AD_CENTER_WELCOME_CARD_FTAE: "www_ad_center_welcome_card_ftae",
      WWW_AUTO_BOOST_AD_CENTER_EDIT: "www_auto_boost_ad_center_edit",
      WWW_AUTO_BOOST_POST_APPROVAL_ROW_VIEW_POST_AND_APPROVE:
        "www_auto_boost_post_approval_row_view_post_and_approve",
      WWW_AYMT_UNKNOWN: "www_aymt_unknown",
      WWW_BIZ_COMPOSER: "www_biz_composer",
      WWW_BOOSTED_EVENT_PICKER: "www_boosted_event_picker",
      WWW_BOOSTED_IG_POST_PICKER: "www_boosted_ig_post_picker",
      WWW_BOOSTED_POST_PICKER: "www_boosted_post_picker",
      WWW_BOOSTED_UNAVAILABLE_BUTTON: "www_boosted_unavailable_button",
      WWW_BOOST_POST_MANAGEMENT_AUTO_BOOST_ENTRY:
        "www_boost_post_management_auto_boost_entry",
      WWW_BOOST_POST_PICKER_AUTO_BOOST_ENTRY_POINT_CARD:
        "www_boost_post_picker_auto_boost_entry_point_card",
      WWW_COMET_ADS_BOOKMARK: "www_comet_ads_bookmark",
      WWW_COMET_HOME_CREATE_MENU: "www_comet_home_create_menu",
      WWW_COMET_HOME_RHC_PAGE_PANEL: "www_comet_home_rhc_page_panel",
      WWW_COMET_POST_AD_CREATION: "www_comet_post_ad_creation",
      WWW_CONSOLIDATED_PROMOTE_BUTTON: "www_consolidated_promote_button",
      WWW_CRM_AUDIENCE_CENTER_REMARKETING_AUDIENCE:
        "www_crm_audience_center_remarketing_audience",
      WWW_EVENTS_CREATION_FLOW_UPSELL_DIALOG:
        "www_events_creation_flow_upsell_dialog",
      WWW_EVENT_PERMALINK_AD_COUPON_CARD: "www_event_permalink_ad_coupon_card",
      WWW_EVENT_PERMALINK_DISCUSSION: "www_event_permalink_discussion",
      WWW_EVENT_PERMALINK_HEADER: "www_event_permalink_header",
      WWW_EVENT_PERMALINK_HOST_TOOLS: "www_event_permalink_host_tools",
      WWW_HOMEPAGE_PANEL: "www_homepage_panel",
      WWW_HOMEPAGE_PANEL_PROMOTE_FOOTER: "www_homepage_panel_promote_footer",
      WWW_JOB_DETAIL_VIEW_BOOST_BUTTON: "www_job_detail_view_boost_button",
      WWW_JOB_POST_AFTER_SHARESHEET: "www_job_post_after_sharesheet",
      WWW_JOB_POST_MANAGE_JOBS_TAB: "www_job_post_manage_jobs_tab",
      WWW_LEFT_NAV_PROMOTE_BUTTON: "www_left_nav_promote_button",
      WWW_MEDIA_VIEWER: "www_media_viewer",
      WWW_PAGES_EVENTS_TAB_RECURRING: "www_pages_events_tab_recurring",
      WWW_PAGES_EVENTS_TAB_TOUR: "www_pages_events_tab_tour",
      WWW_PAGES_EVENTS_TAB_UPCOMING: "www_pages_events_tab_upcoming",
      WWW_PAGES_LAUNCHPOINT: "www_pages_launchpoint",
      WWW_PAGES_PRODUCT_PICKER: "www_pages_product_picker",
      WWW_PAGES_PRODUCT_PICKER_SETUP: "www_pages_product_picker_setup",
      WWW_PAGES_TIMELINE_ABOUT_SECTION: "www_pages_timeline_about_section",
      WWW_PAGES_TIMELINE_UPCOMING_EVENTS_SECTION:
        "www_pages_timeline_upcoming_events_section",
      WWW_PAGE_CREATE_CTWA_MODAL: "www_page_create_ctwa_modal",
      WWW_PAGE_CREATE_CTWA_WITH_PREVIEW_MODAL:
        "www_page_create_ctwa_with_preview_modal",
      WWW_PAGE_INBOX_MESSAGE_ADS_UPSELL: "www_page_inbox_message_ads_upsell",
      WWW_PAGE_MESSAGE_ADS_PREVIEW_MODAL: "www_page_message_ads_preview_modal",
      WWW_PAGE_SETTINGS_WHATSAPP_RESOURCES_HUB:
        "www_page_settings_whatsapp_resources_hub",
      WWW_PAGE_SURFACE_QUESTIONNAIRE_CARD:
        "www_page_surface_questionnaire_card",
      WWW_PRODUCT_PICKER_FTAE: "www_product_picker_ftae",
      WWW_PROFILE_PLUS_FEED_COMPOSER: "www_profile_plus_feed_composer",
      WWW_PROFILE_PLUS_LAR_ADMIN_COMPOSER:
        "www_profile_plus_lar_admin_composer",
      WWW_PROFILE_PLUS_LAR_FOOTER: "www_profile_plus_lar_footer",
      WWW_PROFILE_PLUS_PROFILE_COMPOSER: "www_profile_plus_profile_composer",
      WWW_PROFILE_PLUS_PROMOTE_ACTION: "www_profile_plus_promote_action",
      WWW_PROFILE_PLUS_PROMOTE_AS_PRIMARY_ACTION:
        "www_profile_plus_promote_as_primary_action",
      WWW_PROFILE_PLUS_TIMELINE: "www_profile_plus_timeline",
      WWW_PROFILE_PLUS_TIMELINE_CAA_CAE_VOICE:
        "www_profile_plus_timeline_caa_cae_voice",
      WWW_PROFILE_PLUS_TIMELINE_LAR_VOICE:
        "www_profile_plus_timeline_lar_voice",
      WWW_PROMOTIONS_HUB_ALL_PROMOTIONS: "www_promotions_hub_all_promotions",
      WWW_PROMOTIONS_HUB_BOOST_POST_PICKER:
        "www_promotions_hub_boost_post_picker",
      WWW_PROMOTIONS_HUB_OVERVIEW: "www_promotions_hub_overview",
      WWW_PROMOTIONS_HUB_WELCOME_CARD: "www_promotions_hub_welcome_card",
      WWW_RECOMMENDATIONS_HUB: "www_recommendations_hub",
      WWW_VIEW_RESULTS_RECOMMENDATIONS_SECTION:
        "www_view_results_recommendations_section",
      YOUR_LISTING_CARD: "your_listing_card",
    });
    f["default"] = a;
  },
  66
);
__d(
  "LWICometEntryPointUtils",
  [
    "AdsLWIEntryPoint",
    "FBLogger",
    "firstKeyWithValue",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = c("firstKeyWithValue")(c("AdsLWIEntryPoint"), a);
      if (a == null)
        throw c("unrecoverableViolation")(
          "entryPoint should be a valid AdsLWIEntryPoint",
          "pages_lwi"
        );
      return a;
    }
    function b(a, b) {
      var d = String(a);
      a = Object.values(c("AdsLWIEntryPoint"))
        .concat(Object.keys(c("AdsLWIEntryPoint")))
        .find(function (a) {
          return a === d;
        });
      if (a == null) {
        c("FBLogger")("pages_lwi").info(
          "unknown entry point " + d + ", fallback to " + b
        );
        return b;
      }
      a = d;
      return a;
    }
    g.jsEnumToGraphQLEnum = a;
    g.convertEntryPointParamToJSEnumWithFallback = b;
  },
  98
);
__d(
  "XCometLWIAppInstallCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/appinstall/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIAutomatedAdsCreationControllerRouteBuilder",
  ["jsExtraRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsExtraRouteBuilder")(
      "/ad_center/create/automatedads/",
      Object.freeze({}),
      ["/chinabusinesses/starter_package/"],
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIAutomotiveInventoryControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/automotiveinventoryad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIBoostedItemPickerControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/ad_center/boost/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWICTACreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/buttonad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWICallNowCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/call_now_ad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWICatalogSalesCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/catalog_sales/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIConsolidatedProductCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/consolidatedad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIEventCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/eventad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIFBInstagramMediaCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/boostinstagrampost/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIFoodOrdersCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/food_orders_ad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIIntegratedBusinessCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/integratedad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIJobPostCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/boostjobpost/",
      Object.freeze({ is_ch_volunteering: !1, is_from_composer: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWILeadGenObjectiveSelectorControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/leadgenad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWILocalAwarenessCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/localad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIMenuCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/boost_menu_ad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIMessageCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/messagead/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIPagelikeCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/pagead/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIPurchaseCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/purchasead/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIUserPostCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/userad/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometLWIWebsiteCreationControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ad_center/create/websitead/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometPageVanityManageJobsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/manage_jobs/",
      Object.freeze({ ref: "", show_unread_only: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "LWICometProductPickerUtils",
  [
    "fbt",
    "ix",
    "FBLogger",
    "LWICometEntryPointUtils",
    "XCometLWIAppInstallCreationControllerRouteBuilder",
    "XCometLWIAutomatedAdsCreationControllerRouteBuilder",
    "XCometLWIAutomotiveInventoryControllerRouteBuilder",
    "XCometLWIBoostedItemPickerControllerRouteBuilder",
    "XCometLWICTACreationControllerRouteBuilder",
    "XCometLWICallNowCreationControllerRouteBuilder",
    "XCometLWICatalogSalesCreationControllerRouteBuilder",
    "XCometLWIConsolidatedProductCreationControllerRouteBuilder",
    "XCometLWIEventCreationControllerRouteBuilder",
    "XCometLWIFBInstagramMediaCreationControllerRouteBuilder",
    "XCometLWIFoodOrdersCreationControllerRouteBuilder",
    "XCometLWIIntegratedBusinessCreationControllerRouteBuilder",
    "XCometLWIJobPostCreationControllerRouteBuilder",
    "XCometLWILeadGenObjectiveSelectorControllerRouteBuilder",
    "XCometLWILocalAwarenessCreationControllerRouteBuilder",
    "XCometLWIMenuCreationControllerRouteBuilder",
    "XCometLWIMessageCreationControllerRouteBuilder",
    "XCometLWIPagelikeCreationControllerRouteBuilder",
    "XCometLWIPostCreationControllerRouteBuilder",
    "XCometLWIPurchaseCreationControllerRouteBuilder",
    "XCometLWIUserPostCreationControllerRouteBuilder",
    "XCometLWIWebsiteCreationControllerRouteBuilder",
    "XCometPageVanityManageJobsControllerRouteBuilder",
    "fbicon",
    "recoverableViolation",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    function a(a, b) {
      switch (b) {
        case "BOOSTED_APP_INSTALL":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIAppInstallCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("489715"), 24),
          };
        case "BOOSTED_AUTOMATED_ADS":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIAutomatedAdsCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("688906"), 24),
          };
        case "BOOSTED_AUTOMOTIVE_INVENTORY":
          return {
            getURI: function (a, b, e, f) {
              return c(
                "XCometLWIAutomotiveInventoryControllerRouteBuilder"
              ).buildURL({
                entry_point: d(
                  "LWICometEntryPointUtils"
                ).convertEntryPointParamToJSEnumWithFallback(b, "unknown"),
                page_id: a,
                so: f,
              });
            },
            icon: d("fbicon")._(i("485029"), 24),
          };
        case "BOOSTED_CTA":
          return a === "MESSAGES"
            ? {
                getURI: function (a, b, d, e) {
                  if (d == null)
                    throw c("unrecoverableViolation")(
                      "targetID should not be null for CTA with Messages objective",
                      "pages_lwi"
                    );
                  return c(
                    "XCometLWICTACreationControllerRouteBuilder"
                  ).buildURL({
                    entry_point: b,
                    page_id: a,
                    so: e,
                    target_id: d,
                  });
                },
                icon: d("fbicon")._(i("542884"), 24),
              }
            : {
                getURI: function (a, b, d, e) {
                  if (d == null)
                    throw c("unrecoverableViolation")(
                      "targetID should not be null for CTA",
                      "pages_lwi"
                    );
                  return c(
                    "XCometLWICTACreationControllerRouteBuilder"
                  ).buildURL({
                    entry_point: b,
                    page_id: a,
                    so: e,
                    target_id: d,
                  });
                },
                icon: d("fbicon")._(i("481754"), 24),
              };
        case "BOOSTED_CONSOLIDATED_PRODUCT":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIConsolidatedProductCreationControllerRouteBuilder"
              ).buildURL({
                entry_point: b,
                page_id: a,
                so: e != null ? e : void 0,
              });
            },
            icon: d("fbicon")._(i("507173"), 24),
          };
        case "BOOSTED_EVENT":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIBoostedItemPickerControllerRouteBuilder"
              ).buildURL({
                entry_point: b,
                item_picker: "boosted_event_picker",
                page_id: a,
                so: e,
              });
            },
            icon: d("fbicon")._(i("481121"), 24),
          };
        case "BOOSTED_FB_INSTAGRAM_MEDIA":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIBoostedItemPickerControllerRouteBuilder"
              ).buildURL({
                entry_point: b,
                item_picker: "boosted_fb_instagram_media_picker",
                page_id: a,
                so: e,
              });
            },
            icon: d("fbicon")._(i("671882"), 24),
          };
        case "BOOSTED_LEAD_GEN":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWILeadGenObjectiveSelectorControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("616700"), 24),
          };
        case "BOOSTED_LOCAL_AWARENESS":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWILocalAwarenessCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("481943"), 24),
          };
        case "BOOSTED_PAGELIKE":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIPagelikeCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("490495"), 24),
          };
        case "BOOSTED_POST":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIBoostedItemPickerControllerRouteBuilder"
              ).buildURL({
                entry_point: b,
                item_picker: "boosted_post_picker",
                page_id: a,
                so: e,
              });
            },
            icon: d("fbicon")._(i("509924"), 24),
          };
        case "BOOSTED_WEBSITE":
          return a === "WEBSITE_CONVERSIONS"
            ? {
                getURI: function (a, b, d, e) {
                  return c(
                    "XCometLWIPurchaseCreationControllerRouteBuilder"
                  ).buildURL({ entry_point: b, page_id: a, so: e });
                },
                icon: d("fbicon")._(i("549496"), 24),
              }
            : {
                getURI: function (a, b, d, e) {
                  return c(
                    "XCometLWIWebsiteCreationControllerRouteBuilder"
                  ).buildURL({ entry_point: b, page_id: a, so: e });
                },
                icon: d("fbicon")._(i("598094"), 24),
              };
        case "BOOSTED_PURCHASE":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIPurchaseCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("549496"), 24),
          };
        case "BOOSTED_INTEGRATED_BUSINESS":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIIntegratedBusinessCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("481121"), 24),
          };
        case "BOOSTED_CATALOG_SALES":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWICatalogSalesCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("509117"), 20),
            landingViewItem: "BOOST_CATALOG_SALES",
          };
        case "BOOSTED_MINI_SHOP":
          c("FBLogger")("shops_ads_smb", "boosted_mini_shop_deprecation").warn(
            "Trying to render BOOSTED_MINI_SHOP on LWICometProductPickerUtils"
          );
          return null;
        case "BOOSTED_FOOD_ORDERS":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWIFoodOrdersCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("788689"), 24),
          };
        case "BOOSTED_CALL_NOW":
          return {
            getURI: function (a, b, d, e) {
              return c(
                "XCometLWICallNowCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a, so: e });
            },
            icon: d("fbicon")._(i("558162"), 24),
          };
        case "BOOSTED_MULTI_MESSAGE":
          return {
            getURI: function (a, b, d) {
              return c(
                "XCometLWIMessageCreationControllerRouteBuilder"
              ).buildURL({ entry_point: b, page_id: a });
            },
            icon: d("fbicon")._(i("542884"), 24),
          };
        case "BOOSTED_JOB_POST":
          return {
            getURI: function (a, b) {
              return c(
                "XCometPageVanityManageJobsControllerRouteBuilder"
              ).buildURL({
                source: "page_boosted_product_picker",
                tab: "job_posts",
                vanity: a,
              });
            },
            icon: d("fbicon")._(i("966012"), 24),
          };
        case "BOOSTED_MENU":
          return {
            getURI: function (a, b) {
              return c("XCometLWIMenuCreationControllerRouteBuilder").buildURL({
                entry_point: b,
                page_id: a,
              });
            },
            icon: d("fbicon")._(i("788689"), 24),
          };
      }
      c("recoverableViolation")(
        "Unsupported Product: " +
          b +
          " or Objective: " +
          ((b = a) != null ? b : "empty") +
          " for getProductConfig",
        "pages_lwi"
      );
      return null;
    }
    function b(a, b, d, e, f, g) {
      switch (f) {
        case "BOOSTED_APP_INSTALL":
          return c(
            "XCometLWIAppInstallCreationControllerRouteBuilder"
          ).buildURL({ boost_id: a, entry_point: b, page_id: e });
        case "BOOSTED_AUTOMATED_ADS":
          return null;
        case "BOOSTED_AUTOMOTIVE_INVENTORY":
          return c(
            "XCometLWIAutomotiveInventoryControllerRouteBuilder"
          ).buildURL({ boost_id: a, entry_point: b, page_id: e });
        case "BOOSTED_CALL_NOW":
          return c("XCometLWICallNowCreationControllerRouteBuilder").buildURL({
            boost_id: a,
            entry_point: b,
            page_id: e,
          });
        case "BOOSTED_CATALOG_SALES":
          return c(
            "XCometLWICatalogSalesCreationControllerRouteBuilder"
          ).buildURL({ boost_id: a, entry_point: b, page_id: e });
        case "BOOSTED_CONSOLIDATED_PRODUCT":
          return c(
            "XCometLWIConsolidatedProductCreationControllerRouteBuilder"
          ).buildURL({ boost_id: a, entry_point: b, page_id: e });
        case "BOOSTED_FOOD_ORDERS":
          return c(
            "XCometLWIFoodOrdersCreationControllerRouteBuilder"
          ).buildURL({ boost_id: a, entry_point: b, page_id: e });
        case "BOOSTED_INTEGRATED_BUSINESS":
          return c(
            "XCometLWIIntegratedBusinessCreationControllerRouteBuilder"
          ).buildURL({ boost_id: a, entry_point: b, page_id: e });
        case "BOOSTED_LEAD_GEN":
          return c(
            "XCometLWILeadGenObjectiveSelectorControllerRouteBuilder"
          ).buildURL({ boost_id: a, entry_point: b, page_id: e });
        case "BOOSTED_LOCAL_AWARENESS":
          return c(
            "XCometLWILocalAwarenessCreationControllerRouteBuilder"
          ).buildURL({ boost_id: a, entry_point: b, page_id: e });
        case "BOOSTED_MULTI_MESSAGE":
        case "BOOSTED_MESSAGE":
          return c("XCometLWIMessageCreationControllerRouteBuilder").buildURL({
            boost_id: a,
            entry_point: b,
            page_id: e,
          });
        case "BOOSTED_MINI_SHOP":
          return null;
        case "BOOSTED_PAGELIKE":
          return c("XCometLWIPagelikeCreationControllerRouteBuilder").buildURL({
            boost_id: a,
            entry_point: b,
            page_id: e,
          });
        case "BOOSTED_PURCHASE":
          return c("XCometLWIPurchaseCreationControllerRouteBuilder").buildURL({
            boost_id: a,
            entry_point: b,
            page_id: e,
          });
        case "BOOSTED_WEBSITE":
          return d === "WEBSITE_CONVERSIONS"
            ? c("XCometLWIPurchaseCreationControllerRouteBuilder").buildURL({
                boost_id: a,
                entry_point: b,
                page_id: e,
              })
            : c("XCometLWIWebsiteCreationControllerRouteBuilder").buildURL({
                boost_id: a,
                entry_point: b,
                page_id: e,
              });
        case "BOOSTED_MENU":
          return c("XCometLWIMenuCreationControllerRouteBuilder").buildURL({
            boost_id: a,
            entry_point: b,
            page_id: e,
          });
        case "BOOSTED_MARKETPLACE_LISTING":
          return null;
        case "BOOSTED_EVENT":
        case "BOOSTED_CTA":
        case "BOOSTED_FB_INSTAGRAM_MEDIA":
        case "BOOSTED_JOB_POST":
        case "BOOSTED_POST":
        case "BOOSTED_USER_POST":
          if (g != null)
            switch (f) {
              case "BOOSTED_EVENT":
                return c(
                  "XCometLWIEventCreationControllerRouteBuilder"
                ).buildURL({
                  boost_id: a,
                  entry_point: b,
                  page_id: e,
                  target_id: g,
                });
              case "BOOSTED_CTA":
                return c("XCometLWICTACreationControllerRouteBuilder").buildURL(
                  { boost_id: a, entry_point: b, page_id: e, target_id: g }
                );
              case "BOOSTED_FB_INSTAGRAM_MEDIA":
                return c(
                  "XCometLWIFBInstagramMediaCreationControllerRouteBuilder"
                ).buildURL({
                  boost_id: a,
                  entry_point: b,
                  page_id: e,
                  target_id: g,
                });
              case "BOOSTED_JOB_POST":
                return c(
                  "XCometLWIJobPostCreationControllerRouteBuilder"
                ).buildURL({
                  boost_id: a,
                  entry_point: b,
                  page_id: e,
                  target_id: g,
                });
              case "BOOSTED_POST":
                return c(
                  "XCometLWIPostCreationControllerRouteBuilder"
                ).buildURL({
                  boost_id: a,
                  entry_point: b,
                  page_id: e,
                  target_id: g,
                });
              case "BOOSTED_USER_POST":
                return c(
                  "XCometLWIUserPostCreationControllerRouteBuilder"
                ).buildURL({
                  boost_id: a,
                  entry_point: b,
                  page_id: e,
                  target_id: g,
                });
            }
          return null;
      }
      c("recoverableViolation")(
        "Unsupported Product: " +
          f +
          " or Objective: " +
          ((a = d) != null ? a : "empty") +
          " for getDuplicateAdRoute",
        "pages_lwi"
      );
      return null;
    }
    var j = new Set([
      "BOOSTED_POST",
      "BOOSTED_EVENT",
      "BOOSTED_FB_INSTAGRAM_MEDIA",
    ]);
    function e(a) {
      return a != null && j.has(a);
    }
    function f(a, b) {
      b = {
        boostedProduct: a,
        commonLoggingFields: {},
        onClose: function () {},
        pageID: b,
      };
      switch (a) {
        case "BOOSTED_INTEGRATED_BUSINESS":
          return babelHelpers["extends"]({}, b, {
            fbeVertical: "APPOINTMENTS",
            headline: h._("Get More Bookings"),
            nonFBERouteBuilder: c(
              "XCometLWIIntegratedBusinessCreationControllerRouteBuilder"
            ),
            pixelEventType: "SCHEDULE",
          });
        case "BOOSTED_PURCHASE":
          return babelHelpers["extends"]({}, b, {
            fbeVertical: "ECOMMERCE",
            headline: h._("Get More Website Purchases"),
            nonFBERouteBuilder: c(
              "XCometLWIPurchaseCreationControllerRouteBuilder"
            ),
            pixelEventType: "PURCHASE",
          });
        default:
          return null;
      }
    }
    g.getProductPickerConfig = a;
    g.getDuplicateAdRoute = b;
    g.isExistingContentProduct = e;
    g.getPixelSetupDialogConfig = f;
  },
  98
);
__d(
  "useGetLWIPromoteButtonClickProps",
  [
    "JSResourceForInteraction",
    "LWICometButtonActionContext",
    "LWICometGenericEventsLoggerLite",
    "LWICometProductPickerUtils",
    "XCometLWIProductPickerControllerRouteBuilder",
    "react",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useContext,
      i = c("JSResourceForInteraction")(
        "CometPagePromoteDialog.react"
      ).__setRef("useGetLWIPromoteButtonClickProps");
    function a(a) {
      var b = a.entryPoint,
        e = a.excludedProducts,
        f = a.isPublished,
        g = a.pageID,
        j = a.phase;
      a = a.product;
      var k = c("XCometLWIProductPickerControllerRouteBuilder").buildURL({
          entry_point: b,
          page_id: g,
        }),
        l = h(c("LWICometButtonActionContext"));
      l = l.getOpenDialogWithPhase;
      var m = c("useCometLazyDialog")(i),
        n = m[0];
      if (!f)
        m = {
          onPress: function () {
            d("LWICometGenericEventsLoggerLite").log({
              entry_point: b,
              event: "page_publish_click",
              page_id: g,
            }),
              n({
                entryPoint: b,
                isPublished: f,
                pageID: g,
                productPickerURI: k,
              });
          },
        };
      else if (l != null) {
        var o = l(b);
        m = {
          onPress: function () {
            var a;
            o(g, (a = j) != null ? a : "PRODUCT_SELECTOR", null, e);
          },
        };
      } else if (a != null) {
        l = d("LWICometProductPickerUtils").getProductPickerConfig(null, a);
        l != null
          ? (m = { linkProps: { url: l.getURI(g, b) } })
          : (m = { linkProps: { url: k } });
      } else m = { linkProps: { url: k } };
      return m;
    }
    g["default"] = a;
  },
  98
);
__d(
  "LWIPromoteButton.react",
  [
    "fbt",
    "LWIOmniAdCenterButton.react",
    "react",
    "useGetLWIPromoteButtonClickProps",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.entryPoint,
        d = a.excludedProducts,
        e = a.icon,
        f = a.isPublished;
      f = f === void 0 ? !0 : f;
      var g = a.padding;
      g = g === void 0 ? "wide" : g;
      var j = a.pageID,
        k = a.phase,
        l = a.product,
        m = a.reduceEmphasis;
      m = m === void 0 ? !1 : m;
      var n = a.size;
      n = n === void 0 ? "medium" : n;
      var o = a.testid;
      o = a.type;
      o = o === void 0 ? "primary" : o;
      a = a.usePromoteLabel;
      a = a === void 0 ? !1 : a;
      b = c("useGetLWIPromoteButtonClickProps")({
        entryPoint: b,
        excludedProducts: d,
        isPublished: f,
        pageID: j,
        phase: k,
        product: l,
      });
      return i.jsx(
        c("LWIOmniAdCenterButton.react"),
        babelHelpers["extends"](
          {
            icon: e,
            label: a
              ? h._(["Promote", "0578fbc14a9418cef7a59debc5e5cf1b", 1])
              : h._("Create Ad"),
            padding: g,
            reduceEmphasis: m,
            size: n,
            testid: void 0,
            type: o,
          },
          b
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "LWICometPromoteButtonWrapper.react",
  [
    "CometRelay",
    "LWICometPromoteButtonWrapper_page.graphql",
    "LWICometPromoteUnavailableButton.react",
    "LWIPromoteButton.react",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f,
        g = a.entryPoint,
        j = a.icon,
        k = a.page$key,
        l = a.pageID,
        m = a.reduceEmphasis,
        n = a.size,
        o = a.testid;
      o = a.type;
      a = a.usePromoteLabel;
      a = a === void 0 ? !1 : a;
      k = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("LWICometPromoteButtonWrapper_page.graphql")),
        k
      );
      e =
        k == null
          ? void 0
          : (e = k.lwi_info) == null
          ? void 0
          : e.should_render_promote_button;
      f =
        k == null
          ? void 0
          : (f = k.account_banhammer_info) == null
          ? void 0
          : f.is_banhammered;
      return f === !0 || (e === !1 && c("qex")._("1951653") === !0)
        ? i.jsx(c("LWICometPromoteUnavailableButton.react"), {
            entryPoint: g,
            icon: j,
            pageID: l,
            size: n,
            usePromoteLabel: a,
          })
        : i.jsx(c("LWIPromoteButton.react"), {
            entryPoint: g,
            icon: j,
            isPublished: (k == null ? void 0 : k.is_published) === !0,
            pageID: l,
            reduceEmphasis: m,
            size: n,
            testid: void 0,
            type: o,
            usePromoteLabel: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometHeaderActionsMenuWrapper.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometHeaderActionsMenuWrapperQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.isAdminView;
        a = a.pageID;
        return {
          queries: {
            pageHeaderActionsQueryReference: {
              parameters: b(
                "PagesCometHeaderActionsMenuWrapperQuery$Parameters"
              ),
              variables: { pageID: a, showAdminActions: c === !0 },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometHeaderActionsMenuWrapper.react"
      ).__setRef("PagesCometHeaderActionsMenuWrapper.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "usePagesCometMessage",
  [
    "CometRelay",
    "PagesLogger",
    "PagesLoggerEventEnum",
    "PagesPageMessageClickFalcoEvent",
    "react",
    "useMWChatOpenTabForPage",
    "usePagesCometMessage_page.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback;
    function a(a, e, f, g) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("usePagesCometMessage_page.graphql")),
        a
      );
      var j =
          (a == null ? void 0 : a.can_viewer_message) === !0 &&
          (a == null ? void 0 : a.should_hide_page_messaging_entrypoint) === !1,
        k = c("useMWChatOpenTabForPage")(f, g),
        l = a == null ? void 0 : a.id;
      f = i(
        function () {
          l != null &&
            j === !0 &&
            (k(l),
            c("PagesPageMessageClickFalcoEvent").log(function () {
              return { event_data: {}, event_location: e, page_id: l };
            }),
            d("PagesLogger").log(
              l,
              c("PagesLoggerEventEnum").CLICK,
              "page_message",
              e,
              ["page_consumer_experience"],
              {}
            ));
        },
        [j, e, k, l]
      );
      return [j, f];
    }
    g.usePagesCometMessage = a;
  },
  98
);
__d(
  "PagesCometMessageButton.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "PagesCometMessageButton_page.graphql",
    "TetraButton.react",
    "fbicon",
    "react",
    "useCometPageLike",
    "usePagesCometMessage",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a) {
      var e = a.alwaysHighlightMessageButton,
        f = a.hideLabel;
      f = f === void 0 ? !0 : f;
      var g = a.highlightMessageButtonOnLike,
        l = a.location,
        m = a.messengerEntryPoint,
        n = a.messengerLsEntryPoint;
      a = a.page$key;
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("PagesCometMessageButton_page.graphql")),
        a
      );
      m = d("usePagesCometMessage").usePagesCometMessage(a, l, m, n);
      n = m[0];
      m = m[1];
      a = d("useCometPageLike").useCometPageLike(a, l);
      a[0];
      l = a[1];
      a[2];
      a = e === !0 || (l && g === !0);
      return n
        ? k.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 199,
            children: k.jsx(
              "div",
              {
                className: "h676nmdw j83agx80 bp9cbjyn",
                "data-testid": void 0,
                children: k.jsx(
                  c("TetraButton.react"),
                  {
                    icon: d("fbicon")._(i("505616"), 16),
                    label: h._("Message"),
                    labelIsHidden: f,
                    onPress: m,
                    reduceEmphasis: a,
                    size: "medium",
                    type: a ? "primary" : "secondary",
                  },
                  "message"
                ),
              },
              "message"
            ),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometMoreActionsButton.react",
  [
    "fbt",
    "CometEntryPointPopoverTrigger.react",
    "CometTrackingNodeProvider.react",
    "Dots3HorizontalFilled24.svg.react",
    "PagesCometHeaderActionsMenuWrapper.entrypoint",
    "SVGIcon",
    "TetraButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.isAdminView;
      a = a.pageID;
      return i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 55,
        children: i.jsx(
          "div",
          {
            className: "h676nmdw j83agx80 bp9cbjyn",
            children: i.jsx(c("CometEntryPointPopoverTrigger.react"), {
              align: "middle",
              entryPointParams: { isAdminView: b, pageID: a },
              otherProps: { isAdminView: b },
              popoverEntryPoint: c(
                "PagesCometHeaderActionsMenuWrapper.entrypoint"
              ),
              preloadTrigger: "button",
              children: function (a, b, e, f, g, j) {
                return i.jsx(c("TetraButton.react"), {
                  icon: d("SVGIcon").svgIcon(
                    c("Dots3HorizontalFilled24.svg.react")
                  ),
                  label: h._("More Actions"),
                  labelIsHidden: !0,
                  onHoverIn: f,
                  onHoverOut: g,
                  onPress: b,
                  onPressIn: j,
                  ref: a,
                  size: "medium",
                  testid: void 0,
                  type: "secondary",
                });
              },
            }),
          },
          "more"
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
