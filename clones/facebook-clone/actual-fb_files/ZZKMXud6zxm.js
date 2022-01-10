if (self.CavalryLogger) {
  CavalryLogger.start_js(["Z1xqODG"]);
}

__d(
  "CubicBezier",
  [],
  function (a, b, c, d, e, f) {
    var g = 0.005;
    a = (function () {
      function a(a, b) {
        (this.cx = 3 * a[0]),
          (this.bx = 3 * (b[0] - a[0]) - this.cx),
          (this.ax = 1 - this.cx - this.bx),
          (this.cy = 3 * a[1]),
          (this.by = 3 * (b[1] - a[1]) - this.cy),
          (this.ay = 1 - this.cy - this.by);
      }
      var b = a.prototype;
      b.sampleCurveX = function (a) {
        return ((this.ax * a + this.bx) * a + this.cx) * a;
      };
      b.solve = function (a) {
        a = this.solveCurveX(a);
        return ((this.ay * a + this.by) * a + this.cy) * a;
      };
      b.solveCurveX = function (a) {
        var b, c, d, e;
        for (d = a, c = 0; c < 8; c++) {
          e = this.sampleCurveX(d) - a;
          if (Math.abs(e) < g) return d;
          b = (3 * this.ax * d + 2 * this.bx) * d + this.cx;
          if (Math.abs(b) < 1e-6) break;
          d -= e / b;
        }
        b = 0;
        c = 1;
        d = a;
        if (d < b) return b;
        if (d > c) return c;
        while (b < c) {
          e = this.sampleCurveX(d);
          if (Math.abs(e - a) < g) return d;
          a > e ? (b = d) : (c = d);
          d = (c - b) / 2 + b;
        }
        return d;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "BinarySearch",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = {
      GREATEST_LOWER_BOUND: "GREATEST_LOWER_BOUND",
      GREATEST_STRICT_LOWER_BOUND: "GREATEST_STRICT_LOWER_BOUND",
      LEAST_STRICT_UPPER_BOUND: "LEAST_STRICT_UPPER_BOUND",
      LEAST_UPPER_BOUND: "LEAST_UPPER_BOUND",
      NEAREST: "NEAREST",
    };
    var h = function (a, b) {
        if (typeof a !== "number" || typeof b !== "number")
          throw c("unrecoverableViolation")(
            "The default comparator can only be used with sequences of numbers.",
            "comet_infra"
          );
        return a - b;
      },
      i = e.GREATEST_LOWER_BOUND,
      j = e.GREATEST_STRICT_LOWER_BOUND,
      k = e.LEAST_STRICT_UPPER_BOUND,
      l = e.LEAST_UPPER_BOUND,
      m = e.NEAREST;
    function n(a, b, c, d, e) {
      e === void 0 && (e = h);
      var f = l;
      f = p(a, b, c, d, e, f);
      if (c <= f && f < d) {
        c = a(f);
        return e(c, b) === 0 ? c : void 0;
      } else return void 0;
    }
    function o(a, b, c, d, e) {
      e === void 0 && (e = h);
      var f = l;
      f = p(a, b, c, d, e, f);
      if (c <= f && f < d) return e(a(f), b) === 0 ? f : -1;
      else return -1;
    }
    function p(a, b, d, e, f, g) {
      switch (g) {
        case l:
          return q(a, b, d, e, f);
        case i:
          return r(a, b, d, e, f);
        case k:
          return s(a, b, d, e, f);
        case j:
          return t(a, b, d, e, f);
        case m:
          return u(a, b, d, e, f);
        default:
          throw c("unrecoverableViolation")("Invalid mode " + g, "comet_infra");
      }
    }
    function q(a, b, c, d, e) {
      c = c;
      d = d;
      while (c + 1 < d) {
        var f = c + Math.floor((d - c) / 2);
        e(a(f), b) >= 0 ? (d = f) : (c = f);
      }
      return c < d && e(a(c), b) >= 0 ? c : d;
    }
    function r(a, b, c, d, e) {
      return s(a, b, c, d, e) - 1;
    }
    function s(a, b, c, d, e) {
      c = c;
      d = d;
      while (c + 1 < d) {
        var f = c + Math.floor((d - c) / 2);
        e(a(f), b) > 0 ? (d = f) : (c = f);
      }
      return c < d && e(a(c), b) > 0 ? c : d;
    }
    function t(a, b, c, d, e) {
      return q(a, b, c, d, e) - 1;
    }
    function u(a, b, c, d, e) {
      var f = r(a, b, c, d, e),
        g = Math.abs(e(a(f), b));
      e = Math.abs(e(a(f + 1), b));
      return g < e ? Math.max(f, c) : Math.min(f + 1, d - 1);
    }
    function a(a, b, c) {
      return n(
        function (b) {
          return a[b];
        },
        b,
        0,
        a.length,
        c
      );
    }
    function b(a, b, c) {
      return o(
        function (b) {
          return a[b];
        },
        b,
        0,
        a.length,
        c
      );
    }
    function d(a, b, c, d) {
      return p(
        function (b) {
          return a[b];
        },
        b,
        0,
        a.length,
        c,
        d
      );
    }
    g.GREATEST_LOWER_BOUND = i;
    g.GREATEST_STRICT_LOWER_BOUND = j;
    g.LEAST_STRICT_UPPER_BOUND = k;
    g.LEAST_UPPER_BOUND = l;
    g.NEAREST = m;
    g.find = n;
    g.findIndex = o;
    g.findBound = p;
    g.leastUpperBound = q;
    g.greatestLowerBound = r;
    g.leastStrictUpperBound = s;
    g.greatestStrictLowerBound = t;
    g.nearest = u;
    g.findInArray = a;
    g.findIndexInArray = b;
    g.findBoundInArray = d;
  },
  98
);
__d(
  "FunnelAction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "name",
      h = "payload",
      i = "relative_time",
      j = "tag";
    a = (function () {
      function a(a, b, c, d) {
        (this.$1 = {}),
          (this.$1[g] = a),
          (this.$1[i] = b),
          c !== void 0 && (this.$1[j] = c),
          d !== void 0 && (this.$1[h] = JSON.stringify(d));
      }
      var b = a.prototype;
      b.getData = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "FunnelRegistry",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      WWW_EXAMPLE_FUNNEL: !0,
      MSITE_EXAMPLE_FUNNEL: !0,
      WWW_FEED_SHARE_DIALOG_FUNNEL: !0,
      MSITE_FEED_SHARE_DIALOG_FUNNEL: !0,
      WWW_CHAT_QUICKCAM_FUNNEL: !0,
      PLATFORM_SHARE_DIALOG_FUNNEL: !0,
      WWW_CANVAS_EDITOR_FUNNEL: !0,
      MSITE_COMMENT_TYPING_FUNNEL: !0,
      MSITE_NOTE_READING_FUNNEL: !0,
      WWW_LISTS_COMPOSER_FUNNEL: !0,
      WWW_REACTIONS_LIKE_BUTTON_HOVER_FUNNEL: !0,
      WWW_REACTIONS_NUX_FUNNEL: !0,
      WWW_COMMENT_REACTIONS_NUX_FUNNEL: !0,
      MSITE_INLINE_REPLY_COMPOSER_FUNNEL: !0,
      WWW_LEAD_GEN_DESKTOP_AD_UNIT_FUNNEL: !0,
      WWW_LEAD_GEN_MSITE_AD_UNIT_FUNNEL: !0,
      WWW_LINK_PICKER_DIALOG_FUNNEL: !0,
      WWW_MEME_PICKER_DIALOG_FUNNEL: !0,
      WWW_SHOP_BUY_FUNNEL: !0,
      WWW_SNOWLIFT_ACTIONS_FUNNEL: !0,
      WWW_CANVAS_AD_CREATION_FUNNEL: !0,
      WWW_SEARCH_AWARENESS_LEARNING_NUX_FUNNEL: !0,
      WWW_CONSTITUENT_TITLE_UPSELL_FUNNEL: !0,
      WWW_PAGE_CREATION_FUNNEL: !0,
      WWW_RECRUITING_PRODUCTS_FUNNEL: !0,
      WWW_RECRUITING_SEARCH_FUNNEL: !0,
      WWW_RECRUITING_BULK_EMAIL_FUNNEL: !0,
      WWW_RECRUITING_LEAVE_HANDLER_FUNNEL: !0,
      WWW_PMT_FUNNEL: !0,
      WWW_PULSE_FUNNEL: !0,
      WWW_ORGTOOL_FUNNEL: !0,
      WWW_VIDEOS_CASTING_FUNNEL: !0,
      MSITE_PPD_FUNNEL: !0,
      WWW_CMS_SEARCH_FUNNEL: !0,
      SOCIAL_SEARCH_CONVERSION_WWW_FUNNEL: !0,
      SOCIAL_SEARCH_DASHBOARD_WWW_FUNNEL: !0,
      GAMES_QUICKSILVER_FUNNEL: !0,
      SRT_USER_FLOW_FUNNEL: !0,
      WWW_MEME_PIVOT_FUNNEL: !0,
      WWW_NOTIFICATION_FUNNEL: !0,
      MSITE_FEED_ALBUM_CTA_FUNNEL: !0,
      MTOUCH_COMMENT_STORIES_FUNNEL: !0,
      WWW_MESSENGER_SHARE_TO_FB_FUNNEL: !0,
      MISINFORMATION_RESHARE_ALERT_FUNNEL: !0,
      FACECAST_BROADCASTER_FUNNEL: !0,
      FACECAST_SCHEDULED_LIVE_FUNNEL: !0,
      SCHEDULED_WATCH_PARTY_VIEWER_FUNNEL: !0,
      COLLEGE_COMMUNITY_NUX_ONBOARDING_FUNNEL: !0,
      WWW_MESSENGER_SEARCH_SESSION_FUNNEL: !0,
      WWW_MESSENGER_CONTENT_SEARCH_FUNNEL: !0,
      WWW_LIVE_PRODUCER_FUNNEL: !0,
      WWW_AD_BREAKS_ONBOARDING_FUNNEL: !0,
      WWW_LAUNCHPAD_ONBOARDING_FUNNEL: !0,
      WWW_LEAD_GEN_FORM_EDITOR_FUNNEL: !0,
      WWW_AD_BREAK_HOME_ONBOARDING_FUNNEL: !0,
      WEB_MESSENGER_RTC_FUNNEL: !0,
      WEB_RTC_SCREEN_SHARING_FUNNEL: !0,
      MTOUCH_NUX_PROFILE_PIC_FUNNEL: !0,
      ADS_VIDEO_CAPTION_FUNNEL: !0,
      WWW_BUSINESS_ALERT_FUNNEL: !0,
      SOCIAL_VR_INTERACTIVE_THREE_SIXTY_FUNNEL: !0,
      WWW_ALT_TEXT_COMPOSER_FUNNEL: !0,
      WWW_DIVEBAR_RECENTS_FUNNEL: !0,
      UNIDASH_EDIT_WIDGET_FUNNEL: !0,
      MESSENGER_UNIVERSAL_SEARCH_FUNNEL: !0,
      WWW_BUSINESS_CREATION_FUNNEL: !0,
      WWW_BUSINESS_VERIFICATION_FUNNEL: !0,
      WWW_APP_REVIEW_BUSINESS_VERIFICATION_FUNNEL: !0,
      AEC_APPLICATION_FUNNEL: !0,
      WWW_MESSENGER_POLL_GROUP_CREATE_FUNNEL: !0,
      ADS_USER_REPORTING_FUNNEL: !0,
      MAP_WEB_FUNNEL: !0,
      INTERN_OOPS_FUNNEL: !0,
      WWW_ACCESSIBILITY_NOTIFICATIONS_JEWEL_TABBING_FUNNEL: !0,
      MTOUCH_FEED_MISSED_STORIES_FUNNEL: !0,
      WWW_STORYSET_FUNNEL: !0,
      POLYGLOT_MAIN_FUNNEL: !0,
      CREATIVE_STUDIO_CREATION_FUNNEL: !0,
      CREATIVE_STUDIO_HUB_FUNNEL: !0,
      CREATIVE_STUDIO_INVITE_JOIN_FUNNEL: !0,
      FX_PLATFORM_INVITE_JOIN_FUNNEL: !0,
      FX_PLATFORM_INVITE_SEND_FUNNEL: !0,
      WWW_LIVE_VIEWER_TIPJAR_FUNNEL: !0,
      WWW_FUNDRAISER_CREATION_FUNNEL: !0,
      WWW_FUNDRAISER_EDIT_FUNNEL: !0,
      WWW_FBL_FUNNEL: !0,
      WWW_CLUE_FUNNEL: !0,
      WWW_OFFERS_SIMPLE_COMPOSE_FUNNEL: !0,
      WWW_OFFERS_SIMPLE_COMPOSE_POST_LIKE_FUNNEL: !0,
      WWW_SEE_OFFERS_CTA_NUX_FUNNEL: !0,
      WWW_CHEVRON_FUNNEL: !0,
      MSITE_AD_BREAKS_ONBOARDING_FLOW_FUNNEL: !0,
      CASUAL_GROUP_PICKER_FUNNEL: !0,
      TOPICS_TO_FOLLOW_FUNNEL: !0,
      WWW_SPATIAL_REACTION_PRODUCTION_FUNNEL: !0,
      WWW_ADS_TARGETING_AUDIENCE_MANAGER_FUNNEL: !0,
      WWW_NEWSFEED_TAILLOAD_FUNNEL: !0,
      SEARCH_ADS_WWW_FUNNEL: !0,
      KEYFRAMES_FUNNEL: !0,
      WWW_NOTIFS_UP_NEXT_FUNNEL: !0,
      MSITE_PROFILE_PICTURE_EDIT_FUNNEL: !0,
      WWW_PROFILE_INTRO_CARD_EDIT_MEDIA_FUNNEL: !0,
      BUSINESS_PAYMENTS_MERCHANT_ONBOARDING_FUNNEL: !0,
      SELLER_EXPERIENCE_SHOP_INSIGHTS_NEW_FUNNEL: !0,
      SELLER_EXPERIENCE_ONBOARDING_NEW_FUNNEL: !0,
      SELLER_EXPERIENCE_PAYOUT_SETUP_NEW_FUNNEL: !0,
      SELLER_EXPERIENCE_SHOP_MANAGEMENT_FUNNEL: !0,
      CHANNEL_EDIT_FUNNEL: !0,
      PAYOUT_ONBOARDING_FUNNEL: !0,
      SERVICES_INSTANT_BOOKING_SETTINGS_FUNNEL: !0,
      SERVICES_FB_APPOINTMENTS_CTA_CREATION_FUNNEL: !0,
      SERVICES_FB_APPOINTMENTS_CTA_FULL_SETUP_FUNNEL: !0,
      MATCHED_MARKET_LIFT_INTERNAL_FUNNEL: !0,
      FB_NEO_ONBOARDING_FUNNEL: !0,
      FB_NEO_FRIENDING_FUNNEL: !0,
      SEARCH_FUNNEL: !0,
      SHADOW_SEARCH_FUNNEL: !0,
      SHADOW_EARLY_END_SEARCH_FUNNEL: !0,
      TEXT_DELIGHTS_OPT_OUT_NUX_FUNNEL: !0,
      TEXT_DELIGHTS_COMPOSER_FUNNEL: !0,
      PRIVATE_COMMENT_COMPOSER_FUNNEL: !0,
      CHECKOUT_EXPERIENCES_FUNNEL: !0,
      CHECKOUT_EXPERIENCES_SELLER_FUNNEL: !0,
      MESSENGER_SECONDARY_SEARCH_FUNNEL: !0,
      WWW_SERVICES_INSTANT_BOOKING_CONSUMER_FUNNEL: !0,
      WWW_PRESENCE_FUNNEL: !0,
      WWW_SERVICES_BOOK_APPOINTMENT_CONSUMER_FUNNEL: !0,
      WWW_SPHERICAL_DIRECTOR_FUNNEL: !0,
      SELLER_EXPERIENCE_MIGRATION_FUNNEL: !0,
      SELLER_EXPERIENCE_PAYOUT_SETUP_FUNNEL: !0,
      NATIVE_SUPPORT_FUNNEL: !0,
      PRIVACY_SHORTCUTS_FUNNEL: !0,
      PRIVACY_ACCESS_HUB_FUNNEL: !0,
      WWW_POLITICIAN_OFFICE_SETTING_FUNNEL: !0,
      WWW_CIVIC_ACTION_POST_INVITE_FUNNEL: !0,
      WWW_CIVIC_ACTION_POST_CREATION_FUNNEL: !0,
      NT_NFAS_EXAMPLE_FUNNEL: !0,
      WWW_ONCALL_VIEW_FUNNEL: !0,
      WWW_ESCALATION_TOOLS_NOTIFICATIONS_PAGE_FUNNEL: !0,
      ALL_VOICES_FUNNEL: !0,
      WWW_MESSENGER_SHARE_FILE_PREVIEW_FUNNEL: !0,
      POST_TRANSACTION_FUNNEL: !0,
      INSTANT_EXPERIENCES_MINDBODY_FUNNEL: !0,
      WWW_CTW_WHATSAPP_VERIFICATION_FLOW_FUNNEL: !0,
      PIE_MANAGER_HIRING_HUB_FUNNEL: !0,
      PIE_RECRUITING_MANAGER_HIRING_OUTREACH_FUNNEL: !0,
      PIE_RECRUITING_MANAGER_HIRING_REVIEW_FUNNEL: !0,
      IG_WEB_STORY_CREATION_FUNNEL: !0,
      IG_WEB_IGTV_CREATION_FUNNEL: !0,
      IG_WEB_ONE_TAP_REGISTRATION_FUNNEL: !0,
      IG_WEB_SHARE_FUNNEL: !0,
      IG_WEB_NUX_FUNNEL: !0,
      IG_WEB_OBA_FUNNEL: !0,
      WWW_FB_CHAT_NEW_SETTINGS_MENU_FUNNEL: !0,
      FLEXIBLE_STARS_WWW_FUNNEL: !0,
      PAYMENT_APP_FUNNEL: !0,
      WWW_MESSENGER_VIDEO_CHAT_LINKS_FUNNEL: !0,
      KAIOS_REG_CONTACT_IMPORTER_FUNNEL: !0,
      ONEVC_CALL_ROUTING_FUNNEL: !0,
      AR_HUB_UPLOAD_FUNNEL: !0,
      FHT_FUNNEL: !0,
      WWW_PCR_FUNNEL: !0,
      MARKETPLACE_GIFT_CARD_FUNNEL: !0,
      WORK_CHAT_SEARCH_FUNNEL: !0,
      DISCOVER_MIGRATION_FUNNEL: !0,
      ZERO_PLACEHOLDER_FUNNEL: !0,
      FOS_MON_PURCHASE_FLOW_FUNNEL: !0,
    });
  },
  null
);
__d(
  "Funnel",
  [
    "BinarySearch",
    "FunnelAction",
    "FunnelRegistry",
    "sprintf",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "name",
      i = "instance_id",
      j = "start_time",
      k = "tags",
      l = "actions",
      m = "sampling_rate",
      n = "timeout_sec",
      o = "beacon_id",
      p = "beacon_session_id",
      q = "funnel_level_beacon_id",
      r = "funnel_level_beacon_session_id",
      s = "is_web";
    a = {
      EXPLICIT: "explicit",
      TIMEOUT: "timeout",
      SESSION_END: "session_end",
      RESTART: "restart",
      ACTIONS_FULL: "actions_full",
    };
    b = {
      ACTION_END: "funnel_end",
      ACTION_WINDOW_BLUR: "window_blur",
      ACTION_WINDOW_FOCUS: "window_focus",
    };
    var t = 600;
    e = (function () {
      function a(a, b, d, e, f) {
        if (c("FunnelRegistry")[a] !== !0)
          throw c("unrecoverableViolation")(
            "Funnel name not registered.",
            "comet_infra"
          );
        this.$1 = a;
        this.$2 = b;
        this.$3 = [];
        this.$4 = {};
        this.$5 = d;
        this.$6 = f;
        this.timeout_sec = t;
        this.shouldTrackFocus = !1;
        this.$7 = e;
        this.$9 = -1;
        this.$10 = -1;
        this.$11 = -1;
        this.$12 = -1;
        this.$8 = null;
        this.devModeLogger("Started funnel");
      }
      var b = a.prototype;
      b.addTag = function (a) {
        if (typeof a !== "string")
          throw c("unrecoverableViolation")(
            "Funnel tag should be a String.",
            "comet_infra"
          );
        this.$4[a] = !0;
        this.devModeLogger("Added funnel tag %s", a);
        return this;
      };
      b.appendAction = function (a, b, e, f) {
        var g = this;
        f === void 0 && (f = Date.now());
        f = new (c("FunnelAction"))(a, f - this.$6, b, e);
        e = d("BinarySearch").leastStrictUpperBound(
          function (a) {
            return g.$3[a].getData();
          },
          f.getData(),
          0,
          this.$3.length,
          function (a, b) {
            if (a.name === "funnel_end") return 1;
            return b.name === "funnel_end"
              ? -1
              : a.relative_time - b.relative_time;
          }
        );
        this.$3.splice(e, 0, f);
        b
          ? this.devModeLogger("Appended action %s with tag %s", a, b)
          : this.devModeLogger("Appended action %s", a);
        this.$8 = a;
        return this;
      };
      b.appendActionIfNew = function (a, b, c) {
        a !== this.$8 && this.appendAction(a, b, c);
        return this;
      };
      b.getLogData = function () {
        var a = {};
        a[h] = this.$1;
        this.$2 !== void 0
          ? (a[i] = this.$2)
          : (a[i] = Math.floor(Math.random() * 65536));
        a[j] = this.$6;
        a[m] = this.$5;
        a[n] = this.timeout_sec;
        a[k] = [];
        for (var b in this.$4) this.$4[b] === !0 && a[k].push(b);
        if (this.$3.length > 0) {
          a[l] = [];
          for (var c = 0; c < this.$3.length; c++)
            a[l].push(this.$3[c].getData());
        }
        this.$10 !== -1 &&
          this.$9 !== -1 &&
          ((a[p] = this.$10), (a[o] = this.$9));
        this.$12 !== -1 &&
          this.$11 !== -1 &&
          ((a[r] = this.$12), (a[q] = this.$11));
        a[s] = 1;
        return a;
      };
      b.devModeLogger = function () {};
      b.getTags = function () {
        return this.$4;
      };
      b.getFunnelName = function () {
        return this.$1;
      };
      b.addReliabilityStats = function (a, b) {
        if (typeof a !== "number")
          throw c("unrecoverableViolation")(
            "SessionID of current funnel lib reliability stats should be a number.",
            "comet_infra"
          );
        if (typeof b !== "number")
          throw c("unrecoverableViolation")(
            "Counter of current funnel lib reliability stats should be a number.",
            "comet_infra"
          );
        this.$10 = a;
        this.$9 = b;
        this.devModeLogger("Added funnel sessionID %d and counter %d.", a, b);
        return this;
      };
      b.addReliabilityStatsForCurFunnel = function (a, b) {
        if (typeof a !== "number")
          throw c("unrecoverableViolation")(
            "SessionID of current funnel lib reliability stats should be a number.",
            "comet_infra"
          );
        if (typeof b !== "number")
          throw c("unrecoverableViolation")(
            "Counter of current funnel lib reliability stats should be a number.",
            "comet_infra"
          );
        this.$12 = a;
        this.$11 = b;
        this.devModeLogger("Added funnel sessionID %d and counter %d.", a, b);
        return this;
      };
      return a;
    })();
    g.EndType = a;
    g.ActionType = b;
    g.Funnel = e;
  },
  98
);
__d(
  "FunnelLoggerSampler",
  ["FunnelLoggerConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = g(a);
      return a === 0 ? !1 : Math.random() * a < 1;
    }
    function g(a) {
      a = b("FunnelLoggerConfig").freq[a];
      a === void 0 && (a = b("FunnelLoggerConfig").freq["default"]);
      return a;
    }
    e.exports = { shouldLog: a, getSamplingRate: g };
  },
  null
);
__d(
  "FunnelReliabilityWhitelist",
  [],
  function (a, b, c, d, e, f) {
    a = ["SEARCH_FUNNEL"];
    f["default"] = a;
  },
  66
);
__d(
  "FunnelReliabilityStatsCollector",
  ["FunnelReliabilityWhitelist", "MarauderLogger", "WebStorage", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
      i,
      j = "fas_reliability_lib_stats_overall",
      k = "fas_reliability_funnel_stats_overall",
      l = 1800,
      m = "funnel_analytics_data_loss",
      n = "fas_reliability_lib_stats_wl",
      o = "fas_reliability_funnel_stats_wl",
      p = 0,
      q = {};
    function a() {
      return c("gkx")("676890") ? !0 : !1;
    }
    function r() {
      h || ((h = !0), (i = c("WebStorage").getLocalStorage()));
      return i;
    }
    function s() {
      var a = r();
      if (!a) return null;
      a = a.getItem(k);
      if (a) return JSON.parse(a);
      else {
        a = Math.floor(Date.now() / 1e3);
        return {
          startCount: 0,
          endCount: 0,
          cancelCount: 0,
          prevCount: 0,
          lastFlushTimestamp: a,
        };
      }
    }
    function t(a) {
      var b = r();
      if (!b) return null;
      b = b.getItem(o);
      if (b) return JSON.parse(b);
      else {
        b = {};
        b[a] = { startCount: 0, endCount: 0, cancelCount: 0, prevCount: 0 };
        return b;
      }
    }
    function u() {
      var a = r();
      if (!a) return null;
      a = a.getItem(o);
      return a ? JSON.parse(a) : null;
    }
    function b(a) {
      var b = s();
      if (!b) return;
      p += 1;
      b.startCount
        ? (b.startCount = parseInt(b.startCount, 10) + 1)
        : (b.startCount = 1);
      c("WebStorage").setItemGuarded(localStorage, k, JSON.stringify(b));
      v(a);
    }
    function v(a) {
      var b = t(a);
      if (!b || !c("FunnelReliabilityWhitelist").includes(a)) return;
      var d = q[a] ? q[a] + 1 : 1;
      q[a] = d;
      d = b[a];
      d
        ? d.startCount
          ? (d.startCount = parseInt(d.startCount, 10) + 1)
          : (d.startCount = 1)
        : ((d = {}),
          (d.startCount = 1),
          (d.prevCount = 0),
          (d.cancelCount = 0),
          (d.endCount = 0));
      b[a] = d;
      c("WebStorage").setItemGuarded(localStorage, o, JSON.stringify(b));
    }
    function e(a) {
      var b = s();
      if (!b) return;
      p -= 1;
      b.cancelCount
        ? (b.cancelCount = parseInt(b.cancelCount, 10) + 1)
        : (b.cancelCount = 1);
      c("WebStorage").setItemGuarded(localStorage, k, JSON.stringify(b));
      w(a);
    }
    function w(a) {
      var b = t(a);
      if (!b || !c("FunnelReliabilityWhitelist").includes(a)) return;
      var d = q[a] ? q[a] - 1 : 0;
      q[a] = d;
      d = b[a];
      d
        ? d.cancelCount
          ? (d.cancelCount = parseInt(d.cancelCount, 10) + 1)
          : (d.cancelCount = 1)
        : ((d = {}),
          (d.startCount = 0),
          (d.prevCount = 0),
          (d.cancelCount = 1),
          (d.endCount = 0));
      b[a] = d;
      c("WebStorage").setItemGuarded(localStorage, o, JSON.stringify(b));
    }
    function f(a) {
      var b = s();
      if (!b) return;
      p -= 1;
      b.endCount
        ? (b.endCount = parseInt(b.endCount, 10) + 1)
        : (b.endCount = 1);
      c("WebStorage").setItemGuarded(localStorage, k, JSON.stringify(b));
      x(a);
    }
    function x(a) {
      var b = t(a);
      if (!b || !c("FunnelReliabilityWhitelist").includes(a)) return;
      var d = q[a] ? q[a] - 1 : 0;
      q[a] = d;
      d = b[a];
      d
        ? d.endCount
          ? (d.endCount = parseInt(d.endCount, 10) + 1)
          : (d.endCount = 1)
        : ((d = {}),
          (d.startCount = 0),
          (d.prevCount = 0),
          (d.cancelCount = 0),
          (d.endCount = 1));
      b[a] = d;
      c("WebStorage").setItemGuarded(localStorage, o, JSON.stringify(b));
    }
    function y() {
      var a = s();
      if (!a) return !1;
      if (a.lastFlushTimestamp) {
        var b = Math.floor(Date.now() / 1e3);
        return b - parseInt(a.lastFlushTimestamp, 10) >= l;
      }
      return !1;
    }
    function z(a, b) {
      a = r();
      if (!a) return;
      var d = Math.floor(Date.now() / 1e3);
      b = {
        startCount: 0,
        endCount: 0,
        cancelCount: 0,
        prevCount: b,
        lastFlushTimestamp: d,
      };
      c("WebStorage").setItemGuarded(a, k, JSON.stringify(b));
    }
    function A(a, b) {
      var d = r();
      if (!d || !a || Object.keys(a).length == 0) return;
      var e = {};
      for (var f in a) {
        a = b[f];
        a = {
          startCount: 0,
          endCount: 0,
          cancelCount: 0,
          prevCount: a ? a : 0,
        };
        e[f] = a;
      }
      c("WebStorage").setItemGuarded(d, o, JSON.stringify(e));
    }
    function B(a, b, c, e) {
      var f = a.prevCount,
        g = a.startCount,
        h = a.endCount;
      a = a.cancelCount;
      var i = f + g - h - a - b,
        j = {};
      j.start = g;
      j.end = h;
      j.cancel = a;
      j.prev = f;
      j.ongoing = b;
      j.loss = i;
      g = {};
      g.overall = j;
      if (c) {
        h = {};
        for (var k in c) {
          a = c[k];
          f = a.prevCount;
          b = a.startCount;
          i = a.endCount;
          j = a.cancelCount;
          a = e[k] ? e[k] : 0;
          var l = f + b - i - j - a,
            n = {};
          n.start = b;
          n.end = i;
          n.cancel = j;
          n.prev = f;
          n.ongoing = a;
          n.loss = l;
          h[k] = n;
        }
        g.funnel_level_data_loss = h;
      }
      d("MarauderLogger").log(m, null, g);
    }
    function C() {
      if (!y()) return;
      var a = s();
      if (!a) return;
      z(a, p);
      var b = u();
      b && A(b, q);
      B(a, p, b, q);
    }
    function D() {
      var a = r();
      if (!a) return null;
      var b = a.getItem(j);
      b = b ? JSON.parse(b) : {};
      var d = b.counter,
        e = b.session;
      d
        ? ((d = parseInt(d, 10) + 1), (e = parseInt(b.session, 10)))
        : ((d = 1), (e = Math.floor(Math.random() * 65536)));
      c("WebStorage").setItemGuarded(
        a,
        j,
        JSON.stringify({ counter: d, session: e })
      );
      return [e, d];
    }
    function E(a) {
      if (!c("FunnelReliabilityWhitelist").includes(a)) return null;
      var b = r();
      if (!b) return null;
      var d = b.getItem(n),
        e = void 0,
        f = {};
      d && ((f = JSON.parse(d)), (e = f[a]));
      var g = e ? e.counter : void 0;
      e = e ? e.session : void 0;
      g
        ? ((g = parseInt(g, 10) + 1), (e = parseInt(e, 10)))
        : ((g = 1), (e = Math.floor(Math.random() * 65536)));
      var h = {};
      d
        ? ((f[a] = { counter: g, session: e }), (h = f))
        : (h[a] = { counter: g, session: e });
      c("WebStorage").setItemGuarded(b, n, JSON.stringify(h));
      return [e, g];
    }
    g.passFunnelLevelStatsRolloutGK = a;
    g.onFunnelStart = b;
    g.onFunnelCancel = e;
    g.onFunnelEnd = f;
    g.maybeFlushFunnelLevelStats = C;
    g.increaseAndGetLibLevelStats = D;
    g.maybeIncreaseAndGetLibLevelStatsForCurFunnel = E;
  },
  98
);
__d(
  "FunnelLogger",
  [
    "Banzai",
    "Funnel",
    "FunnelLoggerSampler",
    "FunnelRegistry",
    "FunnelReliabilityStatsCollector",
    "MarauderLogger",
    "clearTimeout",
    "gkx",
    "setTimeout",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {},
      h = !1,
      i = !0;
    function a(a, b) {
      B(a, b);
    }
    function c(a, b, c) {
      B(a, c, b);
    }
    function d(a, b) {
      a = D(a, b);
      return !E(a) ? null : g[a];
    }
    function f(a, b) {}
    function j(a, b, c) {
      c === void 0 ? F(a, void 0, b) : c && F(a, b, c);
    }
    function k(a, c) {
      c = D(a, c);
      E(c) &&
        (g[c].devModeLogger("Cancelled funnel"),
        H(c),
        (g[c] = void 0),
        b("FunnelReliabilityStatsCollector").passFunnelLevelStatsRolloutGK() &&
          (b("FunnelReliabilityStatsCollector").onFunnelCancel(a),
          b("FunnelReliabilityStatsCollector").maybeFlushFunnelLevelStats()));
    }
    function l(a, b) {
      C(a, b);
    }
    function m(a, b, c) {
      C(a, c, b);
    }
    function n(a, b, c) {
      c === void 0 ? I(a, void 0, String(b)) : I(a, Number(b), c);
    }
    function o(a, b, c) {
      c === void 0 ? J(a, void 0, Boolean(b)) : J(a, Number(b), c);
    }
    function p(a, b, c) {
      c === void 0
        ? K(a, void 0, String(b), void 0)
        : K(a, Number(b), c, void 0);
    }
    function q(a, b, c) {
      c === void 0
        ? L(a, void 0, String(b), void 0)
        : L(a, Number(b), c, void 0);
    }
    function r(a, b, c, d) {
      d === void 0
        ? K(a, void 0, String(c), void 0, void 0, b)
        : K(a, Number(c), d, void 0, void 0, b);
    }
    function s(a, b, c, d) {
      d === void 0 ? K(a, void 0, String(b), c) : K(a, Number(b), c, d);
    }
    function t(a, b, c, d, e) {
      e === void 0
        ? K(a, void 0, String(c), d, void 0, b)
        : K(a, Number(c), d, e, void 0, b);
    }
    function u(a, b, c, d) {
      d === void 0 ? L(a, void 0, String(b), c) : L(a, Number(b), c, d);
    }
    function v(a, b, c, d) {
      d === void 0
        ? K(a, void 0, String(b), void 0, c)
        : K(a, Number(b), String(c), void 0, d);
    }
    function w(a, b, c, d, e) {
      e === void 0
        ? K(a, void 0, String(c), void 0, d, b)
        : K(a, Number(c), String(d), void 0, e, b);
    }
    function x(a, b, c, d) {
      d === void 0
        ? L(a, void 0, String(b), void 0, c)
        : L(a, Number(b), String(c), void 0, d);
    }
    function y(a, b, c, d, e) {
      e === void 0
        ? K(a, void 0, String(b), c, d)
        : K(a, Number(b), String(c), String(d), e);
    }
    function z(a, b, c, d, e, f) {
      f === void 0
        ? K(a, void 0, String(c), d, e, b)
        : K(a, Number(c), String(d), String(e), f, b);
    }
    function A(a, b, c, d, e) {
      e === void 0
        ? L(a, void 0, String(b), c, d)
        : L(a, Number(b), String(c), String(d), e);
    }
    function B(a, c, d) {
      var e = D(a, c);
      R();
      M(e);
      b("FunnelLoggerSampler").shouldLog(a) &&
        ((g[e] = new (b("Funnel").Funnel)(
          a,
          c,
          b("FunnelLoggerSampler").getSamplingRate(a),
          !1,
          d != null ? d : Date.now()
        )),
        G(e),
        b("FunnelReliabilityStatsCollector").passFunnelLevelStatsRolloutGK() &&
          (b("FunnelReliabilityStatsCollector").onFunnelStart(a),
          b("FunnelReliabilityStatsCollector").maybeFlushFunnelLevelStats()));
    }
    function C(a, c, d) {
      a = D(a, c);
      E(a) &&
        (g[a].appendAction(
          b("Funnel").ActionType.ACTION_END,
          b("Funnel").EndType.EXPLICIT,
          void 0,
          d
        ),
        N(a));
    }
    function D(a, c) {
      if (b("FunnelRegistry")[a] !== !0)
        throw b("unrecoverableViolation")(
          "Funnel name not registered.",
          "comet_infra"
        );
      if (c === void 0 || c === null) return a;
      else return a + c.toString();
    }
    function E(a) {
      return g[a] !== void 0;
    }
    function F(a, b, c) {
      a = D(a, b);
      E(a) &&
        ((g[a].timeout_sec = c),
        g[a].devModeLogger("Timeout set to %s sec", c),
        G(a));
    }
    function G(a) {
      H(a),
        (g[a].timeout_handle = b("setTimeout")(function () {
          g[a].appendAction(
            b("Funnel").ActionType.ACTION_END,
            b("Funnel").EndType.TIMEOUT
          ),
            N(a);
        }, 1e3 * g[a].timeout_sec));
    }
    function H(a) {
      g[a].timeout_handle && b("clearTimeout")(g[a].timeout_handle);
    }
    function I(a, b, c) {
      a = D(a, b);
      E(a) && (g[a].addTag(c), G(a));
    }
    function J(a, b, c) {
      a = D(a, b);
      E(a) &&
        ((g[a].shouldTrackFocus = c),
        g[a].devModeLogger("Focus tracking %s", c ? "on" : "off"));
    }
    function K(a, b, c, d, e, f) {
      a = D(a, b);
      E(a) && (g[a].appendAction(c, d, e, f), G(a));
    }
    function L(a, b, c, d, e) {
      a = D(a, b);
      E(a) && g[a].appendActionIfNew(c, d, e);
    }
    function M(a) {
      E(a) &&
        (g[a].appendAction(
          b("Funnel").ActionType.ACTION_END,
          b("Funnel").EndType.RESTART
        ),
        N(a));
    }
    function N(a) {
      if (E(a)) {
        if (b("gkx")("676888")) {
          var c = b(
            "FunnelReliabilityStatsCollector"
          ).increaseAndGetLibLevelStats();
          if (c) {
            var d = c[0];
            c = c[1];
            g[a].addReliabilityStats(d, c);
          }
        }
        d = g[a].getFunnelName();
        c = g[a].getLogData();
        b("MarauderLogger").log("funnel_analytics", null, c);
        g[a].devModeLogger("Logged: %s", JSON.stringify(c));
        H(a);
        g[a] = void 0;
        b("FunnelReliabilityStatsCollector").passFunnelLevelStatsRolloutGK() &&
          (b("FunnelReliabilityStatsCollector").onFunnelEnd(d),
          b("FunnelReliabilityStatsCollector").maybeFlushFunnelLevelStats());
      }
    }
    function O() {
      for (var a in g)
        Object.prototype.hasOwnProperty.call(g, a) &&
          E(a) &&
          (g[a].appendAction(
            b("Funnel").ActionType.ACTION_END,
            b("Funnel").EndType.SESSION_END
          ),
          N(a));
    }
    function P() {
      if (i) {
        i = !1;
        for (var a in g)
          Object.prototype.hasOwnProperty.call(g, a) &&
            E(a) &&
            g[a].shouldTrackFocus &&
            (g[a].appendAction(b("Funnel").ActionType.ACTION_WINDOW_BLUR),
            H(a));
      }
    }
    function Q() {
      if (!i) {
        i = !0;
        for (var a in g)
          Object.prototype.hasOwnProperty.call(g, a) &&
            E(a) &&
            g[a].shouldTrackFocus &&
            (g[a].appendAction(b("Funnel").ActionType.ACTION_WINDOW_FOCUS),
            H(a));
      }
    }
    function R() {
      h ||
        ((h = !0),
        window.addEventListener &&
          (b("Banzai").subscribe(b("Banzai").SHUTDOWN, O),
          window.addEventListener("blur", P),
          window.addEventListener("focus", Q)));
    }
    e.exports = {
      addFunnelTag: n,
      appendAction: p,
      appendActionAtTime: r,
      appendActionAtTimeWithPayload: w,
      appendActionAtTimeWithTag: t,
      appendActionAtTimeWithTagAndPayload: z,
      appendActionIfNew: q,
      appendActionWithPayload: v,
      appendActionWithPayloadIfNew: x,
      appendActionWithTag: s,
      appendActionWithTagAndPayload: y,
      appendActionWithTagAndPayloadIfNew: A,
      appendActionWithTagIfNew: u,
      cancelFunnel: k,
      endFunnel: l,
      endFunnelAtTime: m,
      getFunnelInstance: d,
      setFunnelTimeout: j,
      setFunnelTrackFocus: o,
      startFunnel: a,
      startFunnel_DEV_MODE: f,
      startFunnelAtTime: c,
    };
  },
  null
);
__d(
  "KeyframesPerformanceLog",
  ["performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 60;
    a = (function () {
      function a(a, b) {
        (this.$1 = 0),
          (this.$2 = -1),
          (this.$3 = -1),
          (this.$6 = a),
          (this.$5 = b),
          (this.$6 = a),
          this.reset();
      }
      var b = a.prototype;
      b.onNextFrame = function (a) {
        this.$7 = a;
      };
      b.start = function () {
        if (this.$2 < 0 || this.$3 >= 0) {
          var a = c("performanceNow")();
          this.$2 < 0
            ? (this.$2 = a)
            : this.$3 >= 0 && ((this.$2 += a - this.$3), (this.$3 = -1));
          this.$5 && this.$5("start");
        }
      };
      b.pause = function () {
        this.$3 < 0 &&
          this.$2 >= 0 &&
          ((this.$3 = c("performanceNow")()), this.$5 && this.$5("pause"));
      };
      b.reset = function () {
        (this.$1 = 0),
          (this.$4 = { one: 0, two: 0, four: 0, eight: 0 }),
          (this.$3 = -1),
          (this.$2 = -1);
      };
      b.addFrame = function () {
        (this.$1 += 1), this.$7 && (this.$7(), (this.$7 = null));
      };
      b.addFrameDrop = function (a) {
        a >= 8
          ? (this.$4.eight += 1)
          : a >= 4
          ? (this.$4.four += 1)
          : a >= 2
          ? (this.$4.two += 1)
          : a >= 1 && (this.$4.one += 1);
      };
      b.finish = function () {
        if (this.$2 >= 0) {
          var a = c("performanceNow")(),
            b = this.$3 >= 0 ? a - this.$3 : 0;
          a = Math.max(Math.floor(a - this.$2 - b), 1);
          b = this.$1 ? (this.$1 / a) * 1e3 : h;
          this.$6({
            animation_duration: a,
            display_refresh_rate: h,
            eight_frame_drop_count: this.$4.eight,
            four_frame_drop_count: this.$4.four,
            frame_rate: b,
            one_frame_drop_count: this.$4.one,
            two_frame_drop_count: this.$4.two,
          });
          this.reset();
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "KeyframesPluginsLoader",
  ["Bootloader", "Promise", "flatbuffers"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      DynamicProperties: function (a) {
        return c("Bootloader").loadModules(
          [
            "KeyframesPluginDynamicProperties",
            "KeyframesPluginDynamicPropertiesSchema",
          ],
          a,
          "KeyframesPluginsLoader"
        );
      },
      LayerName: function (a) {
        return c("Bootloader").loadModules(
          ["KeyframesPluginLayerName", "KeyframesPluginLayerNameSchema"],
          a,
          "KeyframesPluginsLoader"
        );
      },
      LayerTags: function (a) {
        return c("Bootloader").loadModules(
          ["KeyframesPluginLayerTags", "KeyframesPluginLayerTagsSchema"],
          a,
          "KeyframesPluginsLoader"
        );
      },
      RandomSubdocument: function (a) {
        return c("Bootloader").loadModules(
          [
            "KeyframesPluginRandomSubdocument",
            "KeyframesPluginRandomSubdocumentSchema",
          ],
          a,
          "KeyframesPluginsLoader"
        );
      },
      Sound: function (a) {
        return c("Bootloader").loadModules(
          ["KeyframesPluginSound", "KeyframesPluginSoundSchema"],
          a,
          "KeyframesPluginsLoader"
        );
      },
      SubdocumentSwap: function (a) {
        return c("Bootloader").loadModules(
          [
            "KeyframesPluginSubdocumentSwap",
            "KeyframesPluginSubdocumentSwapSchema",
          ],
          a,
          "KeyframesPluginsLoader"
        );
      },
      TrimPath: function (a) {
        return c("Bootloader").loadModules(
          ["KeyframesPluginTrimPath", "KeyframesPluginTrimPathSchema"],
          a,
          "KeyframesPluginsLoader"
        );
      },
    };
    function i(a, b) {
      return h[a] ? h[a](b) : null;
    }
    function j(a) {
      a = a.map(function (a) {
        return new (b("Promise"))(function (b, c) {
          var d = i(a, function () {
            for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
              c[d] = arguments[d];
            b(c);
          });
          d || c("Unknown plugin " + a);
        });
      });
      return b("Promise").all(a);
    }
    a = (function () {
      a.fromPluginTable = function (b) {
        return j(b).then(function (c) {
          return new a(b, c);
        });
      };
      a.getSupportedPlugins = function () {
        return h;
      };
      function a(a, b) {
        (this.instances = []),
          (this.$1 = {}),
          (this.$2 = {}),
          (this.$4 = a),
          (this.$3 = b);
      }
      var b = a.prototype;
      b.getPluginTable = function () {
        return this.$4;
      };
      b.getPluginsForLayer = function (a) {
        return this.$1[a];
      };
      b.maybeInstantiatePluginsForLayer = function (a) {
        var b = a.id();
        if (!this.$2[b]) {
          var c = a.pluginsLength();
          if (c)
            for (var e = 0; e < c; e++) {
              var f = a.plugins(e),
                g = new (d("flatbuffers").ByteBuffer)(f.contentArray());
              f = f.index();
              if (this.$3[f]) {
                var h = this.$3[f],
                  i = h[0];
                h = h[1];
                f = "getRootAsPlugin" + this.$4[f];
                h = h[f](g);
                f = new i(h, a);
                this.$1[b] || (this.$1[b] = []);
                this.$1[b].push(f);
                this.instances.push(f);
                f.animationDidLoad();
              }
            }
          this.$2[b] = !0;
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "KeyframesVersion",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "2.0.0";
    function a() {
      return g;
    }
    f.getCurrentVersion = a;
  },
  66
);
__d(
  "FBKeyframesLoggedSession",
  [
    "BanzaiLogger",
    "CurrentUser",
    "FacebookAppIDs",
    "FunnelLogger",
    "KeyframesPerformanceLog",
    "KeyframesPluginsLoader",
    "KeyframesVersion",
    "gkx",
    "once",
    "performanceNow",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = !1;
    var h = c("gkx")("1136485"),
      i = "KEYFRAMES_FUNNEL",
      j = "KeyframesFramePerfLoggerConfig",
      k = 2,
      l = 9e18,
      m = {
        appid: c("FacebookAppIDs").WWW,
        appversion: null,
        connection_class: null,
        country: null,
        deviceid: null,
        extras: null,
        isemployee: c("CurrentUser").isEmployee() ? 1 : 0,
        name: "keyframes_frame_perf_report",
        vc: null,
        year_class: null,
      };
    function n(a) {
      return parseInt(a.match(/[a-f0-9]+$/gi), 16);
    }
    function o() {
      var a = c("performanceNow")();
      return function () {
        return Math.floor(c("performanceNow")() - a);
      };
    }
    function p() {
      return { value: Date.now() };
    }
    b = (function () {
      function a(b, e) {
        var f = this;
        this.$2 = !1;
        this.$3 = 0;
        this.$5 = 1;
        this.$11 = d("KeyframesVersion").getCurrentVersion();
        this.$15 = function (b) {
          f.$13("play_ended");
          f.$3++;
          if (f.$3 === f.$5) {
            b = Object.assign({}, b, m, {
              animation_duration: String(b.animation_duration),
              asset_id: f.$6.assetID || null,
              asset_name: f.$6.assetID ? null : f.$6.assetName,
              display_refresh_rate: String(b.display_refresh_rate),
              keyframes_version: f.$11,
              project_name: f.$6.projectName,
              session_id: f.$9,
            });
            a.performanceLoggingMethod(b);
            f.$5 < l && (f.$5 *= k);
          }
        };
        this.$16 = function (a) {
          switch (a) {
            case "start":
              f.$13("play_started");
              return;
            case "pause":
              f.$13("play_ended");
              return;
          }
        };
        this.$10 = e || p();
        this.$6 = b;
        this.$9 = c("uuid")();
        this.$4 = n(this.$9);
      }
      a.performanceLoggingMethod = function (a) {
        c("BanzaiLogger").log(j, a);
      };
      var b = a.prototype;
      b.startDecode = function (a) {
        var b = this;
        if (!this.$1) {
          this.$12();
          this.$13("asset_decode_started", a);
          var d = o();
          this.$1 = c("once")(function (a, c) {
            b.$13("asset_decode_ended", a, {
              "time_since:asset_decode_started": d(),
              plugins_decoded: c || [],
            });
          });
        }
        return this.$1;
      };
      b.error = function (a) {
        this.$12(),
          this.$1
            ? this.$14("asset_decode_failed", a)
            : this.$14("asset_request_failed", a);
      };
      b.getUUID = function () {
        return this.$9;
      };
      b.getInstanceID = function () {
        return this.$4;
      };
      b.getPerformanceLogIfEnabled = function () {
        var a = this;
        if (h) {
          if (!this.$7) {
            var b = this.$12(),
              d = new (c("KeyframesPerformanceLog"))(this.$15, this.$16);
            d.onNextFrame(function () {
              return a.$13("first_frame_rendered", p(), {
                "time_since:session_started": b(),
              });
            });
            this.$7 = d;
          }
          return this.$7;
        }
        return null;
      };
      b.$12 = function () {
        this.$8 ||
          (h &&
            (d("FunnelLogger").startFunnelAtTime(i, this.$10.value, this.$4),
            this.$13("session_started", this.$10, {
              supported_plugins: Object.keys(
                c("KeyframesPluginsLoader").getSupportedPlugins()
              ),
            })),
          (this.$8 = o()));
        return this.$8;
      };
      b.$13 = function (a, b, c) {
        (b = b || p()),
          h &&
            (this.$2 ||
              d("FunnelLogger").appendActionAtTimeWithPayload(
                i,
                b.value,
                this.$4,
                a,
                Object.assign({}, this.$17(), c)
              ));
      };
      b.$14 = function (a, b) {
        (b = b || p()),
          h &&
            (this.$2 ||
              (this.$13("session_failed", b, { fail_reason: a }),
              d("FunnelLogger").endFunnelAtTime(i, b.value, this.$4),
              (this.$2 = !0)));
      };
      b.$17 = function () {
        return {
          asset_id: this.$6.assetID || null,
          asset_name: this.$6.assetID ? null : this.$6.assetName,
          asset_source: "network",
          keyframes_version: this.$11,
          project_name: this.$6.projectName,
          session_id: this.$9,
        };
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "KeyframesSchema",
  [],
  function (a, b, c, d, e, f) {
    var g = g || {};
    g.keyframes = g.keyframes || {};
    g.keyframes.CommandType = { MoveTo: 0, LineTo: 1, QuadTo: 2, CubicTo: 3 };
    g.keyframes.CommandTypeName = {
      0: "MoveTo",
      1: "LineTo",
      2: "QuadTo",
      3: "CubicTo",
    };
    g.keyframes.TweenType = { Bezier: 0, Linear: 1, Hold: 2 };
    g.keyframes.TweenTypeName = { 0: "Bezier", 1: "Linear", 2: "Hold" };
    g.keyframes.VectorCompositeOrder = { FillStroke: 0, StrokeFill: 1 };
    g.keyframes.VectorCompositeOrderName = { 0: "FillStroke", 1: "StrokeFill" };
    g.keyframes.StrokeLineCap = { Butt: 0, Round: 1, Square: 2 };
    g.keyframes.StrokeLineCapName = { 0: "Butt", 1: "Round", 2: "Square" };
    g.keyframes.StrokeLineJoin = { Miter: 0, Round: 1, Bevel: 2 };
    g.keyframes.StrokeLineJoinName = { 0: "Miter", 1: "Round", 2: "Bevel" };
    g.keyframes.TrackMatteType = { None: 0, Alpha: 1, Alpha_Inverted: 2 };
    g.keyframes.TrackMatteTypeName = {
      0: "None",
      1: "Alpha",
      2: "Alpha_Inverted",
    };
    g.keyframes.GradientType = { Linear: 0, Radial: 1 };
    g.keyframes.GradientTypeName = { 0: "Linear", 1: "Radial" };
    g.keyframes.TextWeight = {
      Thin: 0,
      UltraLight: 1,
      Light: 2,
      Book: 3,
      Medium: 4,
      SemiBold: 5,
      Bold: 6,
      UltraBold: 7,
      Heavy: 8,
      UltraHeavy: 9,
    };
    g.keyframes.TextWeightName = {
      0: "Thin",
      1: "UltraLight",
      2: "Light",
      3: "Book",
      4: "Medium",
      5: "SemiBold",
      6: "Bold",
      7: "UltraBold",
      8: "Heavy",
      9: "UltraHeavy",
    };
    g.keyframes.Size = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Size.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Size.prototype.width = function () {
      return this.bb.readFloat32(this.bb_pos);
    };
    g.keyframes.Size.prototype.mutate_width = function (a) {
      var b = this.bb.__offset(this.bb_pos, 0);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Size.prototype.height = function () {
      return this.bb.readFloat32(this.bb_pos + 4);
    };
    g.keyframes.Size.prototype.mutate_height = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Size.createSize = function (a, b, c) {
      a.prep(4, 8);
      a.writeFloat32(c);
      a.writeFloat32(b);
      return a.offset();
    };
    g.keyframes.Point = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Point.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Point.getRootAsPoint = function (a, b) {
      return (b || new g.keyframes.Point()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Point.prototype.x = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Point.prototype.mutate_x = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Point.prototype.y = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Point.prototype.mutate_y = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Point.startPoint = function (a) {
      a.startObject(2);
    };
    g.keyframes.Point.addX = function (a, b) {
      a.addFieldFloat32(0, b, 0);
    };
    g.keyframes.Point.addY = function (a, b) {
      a.addFieldFloat32(1, b, 0);
    };
    g.keyframes.Point.endPoint = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Point.createPoint = function (a, b, c) {
      g.keyframes.Point.startPoint(a);
      g.keyframes.Point.addX(a, b);
      g.keyframes.Point.addY(a, c);
      return g.keyframes.Point.endPoint(a);
    };
    g.keyframes.Color = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Color.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Color.getRootAsColor = function (a, b) {
      return (b || new g.keyframes.Color()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Color.prototype.red = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a ? this.bb.readUint8(this.bb_pos + a) : 0;
    };
    g.keyframes.Color.prototype.mutate_red = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      if (b === 0) return !1;
      this.bb.writeUint8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Color.prototype.green = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.readUint8(this.bb_pos + a) : 0;
    };
    g.keyframes.Color.prototype.mutate_green = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      if (b === 0) return !1;
      this.bb.writeUint8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Color.prototype.blue = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.readUint8(this.bb_pos + a) : 0;
    };
    g.keyframes.Color.prototype.mutate_blue = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      if (b === 0) return !1;
      this.bb.writeUint8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Color.prototype.alpha = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.readUint8(this.bb_pos + a) : 255;
    };
    g.keyframes.Color.prototype.mutate_alpha = function (a) {
      var b = this.bb.__offset(this.bb_pos, 10);
      if (b === 0) return !1;
      this.bb.writeUint8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Color.startColor = function (a) {
      a.startObject(4);
    };
    g.keyframes.Color.addRed = function (a, b) {
      a.addFieldInt8(0, b, 0);
    };
    g.keyframes.Color.addGreen = function (a, b) {
      a.addFieldInt8(1, b, 0);
    };
    g.keyframes.Color.addBlue = function (a, b) {
      a.addFieldInt8(2, b, 0);
    };
    g.keyframes.Color.addAlpha = function (a, b) {
      a.addFieldInt8(3, b, 255);
    };
    g.keyframes.Color.endColor = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Color.createColor = function (a, b, c, d, e) {
      g.keyframes.Color.startColor(a);
      g.keyframes.Color.addRed(a, b);
      g.keyframes.Color.addGreen(a, c);
      g.keyframes.Color.addBlue(a, d);
      g.keyframes.Color.addAlpha(a, e);
      return g.keyframes.Color.endColor(a);
    };
    g.keyframes.ColorArray = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.ColorArray.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.ColorArray.getRootAsColorArray = function (a, b) {
      return (b || new g.keyframes.ColorArray()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.ColorArray.prototype.colors = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 4);
      return c
        ? (b || new g.keyframes.Color()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.ColorArray.prototype.colorsLength = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ColorArray.startColorArray = function (a) {
      a.startObject(1);
    };
    g.keyframes.ColorArray.addColors = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.ColorArray.createColorsVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.ColorArray.startColorsVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ColorArray.endColorArray = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.ColorArray.createColorArray = function (a, b) {
      g.keyframes.ColorArray.startColorArray(a);
      g.keyframes.ColorArray.addColors(a, b);
      return g.keyframes.ColorArray.endColorArray(a);
    };
    g.keyframes.Command = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Command.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Command.getRootAsCommand = function (a, b) {
      return (b || new g.keyframes.Command()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Command.prototype.type = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a
        ? this.bb.readInt8(this.bb_pos + a)
        : g.keyframes.CommandType.MoveTo;
    };
    g.keyframes.Command.prototype.mutate_type = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Command.prototype.point = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      return b
        ? (a || new g.keyframes.Point()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Command.prototype.control1 = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? (a || new g.keyframes.Point()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Command.prototype.control2 = function (a) {
      var b = this.bb.__offset(this.bb_pos, 10);
      return b
        ? (a || new g.keyframes.Point()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Command.startCommand = function (a) {
      a.startObject(4);
    };
    g.keyframes.Command.addType = function (a, b) {
      a.addFieldInt8(0, b, g.keyframes.CommandType.MoveTo);
    };
    g.keyframes.Command.addPoint = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.Command.addControl1 = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.Command.addControl2 = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.Command.endCommand = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Command.createCommand = function (a, b, c, d, e) {
      g.keyframes.Command.startCommand(a);
      g.keyframes.Command.addType(a, b);
      g.keyframes.Command.addPoint(a, c);
      g.keyframes.Command.addControl1(a, d);
      g.keyframes.Command.addControl2(a, e);
      return g.keyframes.Command.endCommand(a);
    };
    g.keyframes.Path = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Path.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Path.getRootAsPath = function (a, b) {
      return (b || new g.keyframes.Path()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Path.prototype.commands = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 4);
      return c
        ? (b || new g.keyframes.Command()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.Path.prototype.commandsLength = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Path.startPath = function (a) {
      a.startObject(1);
    };
    g.keyframes.Path.addCommands = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.Path.createCommandsVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Path.startCommandsVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Path.endPath = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Path.createPath = function (a, b) {
      g.keyframes.Path.startPath(a);
      g.keyframes.Path.addCommands(a, b);
      return g.keyframes.Path.endPath(a);
    };
    g.keyframes.Tween = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Tween.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Tween.getRootAsTween = function (a, b) {
      return (b || new g.keyframes.Tween()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Tween.prototype.type = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a
        ? this.bb.readInt8(this.bb_pos + a)
        : g.keyframes.TweenType.Bezier;
    };
    g.keyframes.Tween.prototype.mutate_type = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Tween.prototype.control1 = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      return b
        ? (a || new g.keyframes.Point()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Tween.prototype.control2 = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? (a || new g.keyframes.Point()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Tween.startTween = function (a) {
      a.startObject(3);
    };
    g.keyframes.Tween.addType = function (a, b) {
      a.addFieldInt8(0, b, g.keyframes.TweenType.Bezier);
    };
    g.keyframes.Tween.addControl1 = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.Tween.addControl2 = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.Tween.endTween = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Tween.createTween = function (a, b, c, d) {
      g.keyframes.Tween.startTween(a);
      g.keyframes.Tween.addType(a, b);
      g.keyframes.Tween.addControl1(a, c);
      g.keyframes.Tween.addControl2(a, d);
      return g.keyframes.Tween.endTween(a);
    };
    g.keyframes.ScalarAnimation = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.ScalarAnimation.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.ScalarAnimation.getRootAsScalarAnimation = function (a, b) {
      return (b || new g.keyframes.ScalarAnimation()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.ScalarAnimation.prototype.value = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.ScalarAnimation.prototype.mutate_value = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.ScalarAnimation.prototype.values = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      return b
        ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4)
        : 0;
    };
    g.keyframes.ScalarAnimation.prototype.valuesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ScalarAnimation.prototype.valuesArray = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a
        ? new Float32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.ScalarAnimation.prototype.keyframes = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4)
        : 0;
    };
    g.keyframes.ScalarAnimation.prototype.keyframesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ScalarAnimation.prototype.keyframesArray = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a
        ? new Float32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.ScalarAnimation.prototype.tweens = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 10);
      return c
        ? (b || new g.keyframes.Tween()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.ScalarAnimation.prototype.tweensLength = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ScalarAnimation.startScalarAnimation = function (a) {
      a.startObject(4);
    };
    g.keyframes.ScalarAnimation.addValue = function (a, b) {
      a.addFieldFloat32(0, b, 0);
    };
    g.keyframes.ScalarAnimation.addValues = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.ScalarAnimation.createValuesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
      return a.endVector();
    };
    g.keyframes.ScalarAnimation.startValuesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ScalarAnimation.addKeyframes = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.ScalarAnimation.createKeyframesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
      return a.endVector();
    };
    g.keyframes.ScalarAnimation.startKeyframesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ScalarAnimation.addTweens = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.ScalarAnimation.createTweensVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.ScalarAnimation.startTweensVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ScalarAnimation.endScalarAnimation = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.ScalarAnimation.createScalarAnimation = function (
      a,
      b,
      c,
      d,
      e
    ) {
      g.keyframes.ScalarAnimation.startScalarAnimation(a);
      g.keyframes.ScalarAnimation.addValue(a, b);
      g.keyframes.ScalarAnimation.addValues(a, c);
      g.keyframes.ScalarAnimation.addKeyframes(a, d);
      g.keyframes.ScalarAnimation.addTweens(a, e);
      return g.keyframes.ScalarAnimation.endScalarAnimation(a);
    };
    g.keyframes.ScalarArray = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.ScalarArray.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.ScalarArray.getRootAsScalarArray = function (a, b) {
      return (b || new g.keyframes.ScalarArray()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.ScalarArray.prototype.values = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4)
        : 0;
    };
    g.keyframes.ScalarArray.prototype.valuesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ScalarArray.prototype.valuesArray = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a
        ? new Float32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.ScalarArray.startScalarArray = function (a) {
      a.startObject(1);
    };
    g.keyframes.ScalarArray.addValues = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.ScalarArray.createValuesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
      return a.endVector();
    };
    g.keyframes.ScalarArray.startValuesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ScalarArray.endScalarArray = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.ScalarArray.createScalarArray = function (a, b) {
      g.keyframes.ScalarArray.startScalarArray(a);
      g.keyframes.ScalarArray.addValues(a, b);
      return g.keyframes.ScalarArray.endScalarArray(a);
    };
    g.keyframes.ScalarArrayAnimation = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.ScalarArrayAnimation.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.ScalarArrayAnimation.getRootAsScalarArrayAnimation = function (
      a,
      b
    ) {
      return (b || new g.keyframes.ScalarArrayAnimation()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.ScalarArrayAnimation.prototype.value = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.ScalarArray()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.ScalarArrayAnimation.prototype.values = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 6);
      return c
        ? (b || new g.keyframes.ScalarArray()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.ScalarArrayAnimation.prototype.valuesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ScalarArrayAnimation.prototype.keyframes = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4)
        : 0;
    };
    g.keyframes.ScalarArrayAnimation.prototype.keyframesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ScalarArrayAnimation.prototype.keyframesArray = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a
        ? new Float32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.ScalarArrayAnimation.prototype.tweens = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 10);
      return c
        ? (b || new g.keyframes.Tween()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.ScalarArrayAnimation.prototype.tweensLength = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ScalarArrayAnimation.startScalarArrayAnimation = function (a) {
      a.startObject(4);
    };
    g.keyframes.ScalarArrayAnimation.addValue = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.ScalarArrayAnimation.addValues = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.ScalarArrayAnimation.createValuesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.ScalarArrayAnimation.startValuesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ScalarArrayAnimation.addKeyframes = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.ScalarArrayAnimation.createKeyframesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
      return a.endVector();
    };
    g.keyframes.ScalarArrayAnimation.startKeyframesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ScalarArrayAnimation.addTweens = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.ScalarArrayAnimation.createTweensVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.ScalarArrayAnimation.startTweensVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ScalarArrayAnimation.endScalarArrayAnimation = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.ScalarArrayAnimation.createScalarArrayAnimation = function (
      a,
      b,
      c,
      d,
      e
    ) {
      g.keyframes.ScalarArrayAnimation.startScalarArrayAnimation(a);
      g.keyframes.ScalarArrayAnimation.addValue(a, b);
      g.keyframes.ScalarArrayAnimation.addValues(a, c);
      g.keyframes.ScalarArrayAnimation.addKeyframes(a, d);
      g.keyframes.ScalarArrayAnimation.addTweens(a, e);
      return g.keyframes.ScalarArrayAnimation.endScalarArrayAnimation(a);
    };
    g.keyframes.PointAnimation = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.PointAnimation.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.PointAnimation.getRootAsPointAnimation = function (a, b) {
      return (b || new g.keyframes.PointAnimation()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.PointAnimation.prototype.value = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.Point()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.PointAnimation.prototype.values = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 6);
      return c
        ? (b || new g.keyframes.Point()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.PointAnimation.prototype.valuesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.PointAnimation.prototype.keyframes = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4)
        : 0;
    };
    g.keyframes.PointAnimation.prototype.keyframesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.PointAnimation.prototype.keyframesArray = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a
        ? new Float32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.PointAnimation.prototype.tweens = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 10);
      return c
        ? (b || new g.keyframes.Tween()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.PointAnimation.prototype.tweensLength = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.PointAnimation.startPointAnimation = function (a) {
      a.startObject(4);
    };
    g.keyframes.PointAnimation.addValue = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.PointAnimation.addValues = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.PointAnimation.createValuesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.PointAnimation.startValuesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.PointAnimation.addKeyframes = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.PointAnimation.createKeyframesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
      return a.endVector();
    };
    g.keyframes.PointAnimation.startKeyframesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.PointAnimation.addTweens = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.PointAnimation.createTweensVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.PointAnimation.startTweensVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.PointAnimation.endPointAnimation = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.PointAnimation.createPointAnimation = function (a, b, c, d, e) {
      g.keyframes.PointAnimation.startPointAnimation(a);
      g.keyframes.PointAnimation.addValue(a, b);
      g.keyframes.PointAnimation.addValues(a, c);
      g.keyframes.PointAnimation.addKeyframes(a, d);
      g.keyframes.PointAnimation.addTweens(a, e);
      return g.keyframes.PointAnimation.endPointAnimation(a);
    };
    g.keyframes.ColorAnimation = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.ColorAnimation.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.ColorAnimation.getRootAsColorAnimation = function (a, b) {
      return (b || new g.keyframes.ColorAnimation()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.ColorAnimation.prototype.value = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.Color()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.ColorAnimation.prototype.values = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 6);
      return c
        ? (b || new g.keyframes.Color()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.ColorAnimation.prototype.valuesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ColorAnimation.prototype.keyframes = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4)
        : 0;
    };
    g.keyframes.ColorAnimation.prototype.keyframesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ColorAnimation.prototype.keyframesArray = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a
        ? new Float32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.ColorAnimation.prototype.tweens = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 10);
      return c
        ? (b || new g.keyframes.Tween()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.ColorAnimation.prototype.tweensLength = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ColorAnimation.startColorAnimation = function (a) {
      a.startObject(4);
    };
    g.keyframes.ColorAnimation.addValue = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.ColorAnimation.addValues = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.ColorAnimation.createValuesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.ColorAnimation.startValuesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ColorAnimation.addKeyframes = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.ColorAnimation.createKeyframesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
      return a.endVector();
    };
    g.keyframes.ColorAnimation.startKeyframesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ColorAnimation.addTweens = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.ColorAnimation.createTweensVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.ColorAnimation.startTweensVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ColorAnimation.endColorAnimation = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.ColorAnimation.createColorAnimation = function (a, b, c, d, e) {
      g.keyframes.ColorAnimation.startColorAnimation(a);
      g.keyframes.ColorAnimation.addValue(a, b);
      g.keyframes.ColorAnimation.addValues(a, c);
      g.keyframes.ColorAnimation.addKeyframes(a, d);
      g.keyframes.ColorAnimation.addTweens(a, e);
      return g.keyframes.ColorAnimation.endColorAnimation(a);
    };
    g.keyframes.ColorArrayAnimation = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.ColorArrayAnimation.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.ColorArrayAnimation.getRootAsColorArrayAnimation = function (
      a,
      b
    ) {
      return (b || new g.keyframes.ColorArrayAnimation()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.ColorArrayAnimation.prototype.value = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.ColorArray()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.ColorArrayAnimation.prototype.values = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 6);
      return c
        ? (b || new g.keyframes.ColorArray()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.ColorArrayAnimation.prototype.valuesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ColorArrayAnimation.prototype.keyframes = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4)
        : 0;
    };
    g.keyframes.ColorArrayAnimation.prototype.keyframesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ColorArrayAnimation.prototype.keyframesArray = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a
        ? new Float32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.ColorArrayAnimation.prototype.tweens = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 10);
      return c
        ? (b || new g.keyframes.Tween()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.ColorArrayAnimation.prototype.tweensLength = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.ColorArrayAnimation.startColorArrayAnimation = function (a) {
      a.startObject(4);
    };
    g.keyframes.ColorArrayAnimation.addValue = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.ColorArrayAnimation.addValues = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.ColorArrayAnimation.createValuesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.ColorArrayAnimation.startValuesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ColorArrayAnimation.addKeyframes = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.ColorArrayAnimation.createKeyframesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
      return a.endVector();
    };
    g.keyframes.ColorArrayAnimation.startKeyframesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ColorArrayAnimation.addTweens = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.ColorArrayAnimation.createTweensVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.ColorArrayAnimation.startTweensVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.ColorArrayAnimation.endColorArrayAnimation = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.ColorArrayAnimation.createColorArrayAnimation = function (
      a,
      b,
      c,
      d,
      e
    ) {
      g.keyframes.ColorArrayAnimation.startColorArrayAnimation(a);
      g.keyframes.ColorArrayAnimation.addValue(a, b);
      g.keyframes.ColorArrayAnimation.addValues(a, c);
      g.keyframes.ColorArrayAnimation.addKeyframes(a, d);
      g.keyframes.ColorArrayAnimation.addTweens(a, e);
      return g.keyframes.ColorArrayAnimation.endColorArrayAnimation(a);
    };
    g.keyframes.PathAnimation = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.PathAnimation.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.PathAnimation.getRootAsPathAnimation = function (a, b) {
      return (b || new g.keyframes.PathAnimation()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.PathAnimation.prototype.value = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.Path()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.PathAnimation.prototype.values = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 6);
      return c
        ? (b || new g.keyframes.Path()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.PathAnimation.prototype.valuesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.PathAnimation.prototype.keyframes = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4)
        : 0;
    };
    g.keyframes.PathAnimation.prototype.keyframesLength = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.PathAnimation.prototype.keyframesArray = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a
        ? new Float32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.PathAnimation.prototype.tweens = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 10);
      return c
        ? (b || new g.keyframes.Tween()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.PathAnimation.prototype.tweensLength = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.PathAnimation.startPathAnimation = function (a) {
      a.startObject(4);
    };
    g.keyframes.PathAnimation.addValue = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.PathAnimation.addValues = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.PathAnimation.createValuesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.PathAnimation.startValuesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.PathAnimation.addKeyframes = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.PathAnimation.createKeyframesVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
      return a.endVector();
    };
    g.keyframes.PathAnimation.startKeyframesVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.PathAnimation.addTweens = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.PathAnimation.createTweensVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.PathAnimation.startTweensVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.PathAnimation.endPathAnimation = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.PathAnimation.createPathAnimation = function (a, b, c, d, e) {
      g.keyframes.PathAnimation.startPathAnimation(a);
      g.keyframes.PathAnimation.addValue(a, b);
      g.keyframes.PathAnimation.addValues(a, c);
      g.keyframes.PathAnimation.addKeyframes(a, d);
      g.keyframes.PathAnimation.addTweens(a, e);
      return g.keyframes.PathAnimation.endPathAnimation(a);
    };
    g.keyframes.Gradient = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Gradient.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Gradient.getRootAsGradient = function (a, b) {
      return (b || new g.keyframes.Gradient()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Gradient.prototype.colorStart = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.ColorAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Gradient.prototype.colorEnd = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      return b
        ? (a || new g.keyframes.ColorAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Gradient.prototype.rampStart = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b
        ? (a || new g.keyframes.PointAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Gradient.prototype.rampEnd = function (a) {
      var b = this.bb.__offset(this.bb_pos, 10);
      return b
        ? (a || new g.keyframes.PointAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Gradient.prototype.type = function () {
      var a = this.bb.__offset(this.bb_pos, 12);
      return a
        ? this.bb.readInt8(this.bb_pos + a)
        : g.keyframes.GradientType.Linear;
    };
    g.keyframes.Gradient.prototype.mutate_type = function (a) {
      var b = this.bb.__offset(this.bb_pos, 12);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Gradient.prototype.colors = function (a) {
      var b = this.bb.__offset(this.bb_pos, 14);
      return b
        ? (a || new g.keyframes.ColorArrayAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Gradient.prototype.positions = function (a) {
      var b = this.bb.__offset(this.bb_pos, 16);
      return b
        ? (a || new g.keyframes.ScalarArrayAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Gradient.prototype.highlightLength = function (a) {
      var b = this.bb.__offset(this.bb_pos, 18);
      return b
        ? (a || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Gradient.prototype.highlightAngle = function (a) {
      var b = this.bb.__offset(this.bb_pos, 20);
      return b
        ? (a || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Gradient.startGradient = function (a) {
      a.startObject(9);
    };
    g.keyframes.Gradient.addColorStart = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.Gradient.addColorEnd = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.Gradient.addRampStart = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.Gradient.addRampEnd = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.Gradient.addType = function (a, b) {
      a.addFieldInt8(4, b, g.keyframes.GradientType.Linear);
    };
    g.keyframes.Gradient.addColors = function (a, b) {
      a.addFieldOffset(5, b, 0);
    };
    g.keyframes.Gradient.addPositions = function (a, b) {
      a.addFieldOffset(6, b, 0);
    };
    g.keyframes.Gradient.addHighlightLength = function (a, b) {
      a.addFieldOffset(7, b, 0);
    };
    g.keyframes.Gradient.addHighlightAngle = function (a, b) {
      a.addFieldOffset(8, b, 0);
    };
    g.keyframes.Gradient.endGradient = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Gradient.createGradient = function (
      a,
      b,
      c,
      d,
      e,
      f,
      h,
      i,
      j,
      k
    ) {
      g.keyframes.Gradient.startGradient(a);
      g.keyframes.Gradient.addColorStart(a, b);
      g.keyframes.Gradient.addColorEnd(a, c);
      g.keyframes.Gradient.addRampStart(a, d);
      g.keyframes.Gradient.addRampEnd(a, e);
      g.keyframes.Gradient.addType(a, f);
      g.keyframes.Gradient.addColors(a, h);
      g.keyframes.Gradient.addPositions(a, i);
      g.keyframes.Gradient.addHighlightLength(a, j);
      g.keyframes.Gradient.addHighlightAngle(a, k);
      return g.keyframes.Gradient.endGradient(a);
    };
    g.keyframes.Bitmap = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Bitmap.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Bitmap.getRootAsBitmap = function (a, b) {
      return (b || new g.keyframes.Bitmap()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Bitmap.prototype.size = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.Size()).__init(this.bb_pos + b, this.bb)
        : null;
    };
    g.keyframes.Bitmap.prototype.content = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      return b ? this.bb.readUint8(this.bb.__vector(this.bb_pos + b) + a) : 0;
    };
    g.keyframes.Bitmap.prototype.contentLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Bitmap.prototype.contentArray = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a
        ? new Uint8Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.Bitmap.prototype.name = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b ? this.bb.__string(this.bb_pos + b, a) : null;
    };
    g.keyframes.Bitmap.startBitmap = function (a) {
      a.startObject(3);
    };
    g.keyframes.Bitmap.addSize = function (a, b) {
      a.addFieldStruct(0, b, 0);
    };
    g.keyframes.Bitmap.addContent = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.Bitmap.createContentVector = function (a, b) {
      a.startVector(1, b.length, 1);
      for (var c = b.length - 1; c >= 0; c--) a.addInt8(b[c]);
      return a.endVector();
    };
    g.keyframes.Bitmap.startContentVector = function (a, b) {
      a.startVector(1, b, 1);
    };
    g.keyframes.Bitmap.addName = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.Bitmap.endBitmap = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Bitmap.createBitmap = function (a, b, c, d) {
      g.keyframes.Bitmap.startBitmap(a);
      g.keyframes.Bitmap.addSize(a, b);
      g.keyframes.Bitmap.addContent(a, c);
      g.keyframes.Bitmap.addName(a, d);
      return g.keyframes.Bitmap.endBitmap(a);
    };
    g.keyframes.Video = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Video.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Video.getRootAsVideo = function (a, b) {
      return (b || new g.keyframes.Video()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Video.prototype.size = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.Size()).__init(this.bb_pos + b, this.bb)
        : null;
    };
    g.keyframes.Video.prototype.length = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.readInt32(this.bb_pos + a) : 0;
    };
    g.keyframes.Video.prototype.mutate_length = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      if (b === 0) return !1;
      this.bb.writeInt32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Video.prototype.content = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      return b ? this.bb.readUint8(this.bb.__vector(this.bb_pos + b) + a) : 0;
    };
    g.keyframes.Video.prototype.contentLength = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Video.prototype.contentArray = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a
        ? new Uint8Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.Video.prototype.name = function (a) {
      var b = this.bb.__offset(this.bb_pos, 10);
      return b ? this.bb.__string(this.bb_pos + b, a) : null;
    };
    g.keyframes.Video.startVideo = function (a) {
      a.startObject(4);
    };
    g.keyframes.Video.addSize = function (a, b) {
      a.addFieldStruct(0, b, 0);
    };
    g.keyframes.Video.addLength = function (a, b) {
      a.addFieldInt32(1, b, 0);
    };
    g.keyframes.Video.addContent = function (a, b) {
      a.addFieldOffset(2, b, 0);
    };
    g.keyframes.Video.createContentVector = function (a, b) {
      a.startVector(1, b.length, 1);
      for (var c = b.length - 1; c >= 0; c--) a.addInt8(b[c]);
      return a.endVector();
    };
    g.keyframes.Video.startContentVector = function (a, b) {
      a.startVector(1, b, 1);
    };
    g.keyframes.Video.addName = function (a, b) {
      a.addFieldOffset(3, b, 0);
    };
    g.keyframes.Video.endVideo = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Video.createVideo = function (a, b, c, d, e) {
      g.keyframes.Video.startVideo(a);
      g.keyframes.Video.addSize(a, b);
      g.keyframes.Video.addLength(a, c);
      g.keyframes.Video.addContent(a, d);
      g.keyframes.Video.addName(a, e);
      return g.keyframes.Video.endVideo(a);
    };
    g.keyframes.Plugin = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Plugin.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Plugin.getRootAsPlugin = function (a, b) {
      return (b || new g.keyframes.Plugin()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Plugin.prototype.index = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a ? this.bb.readInt32(this.bb_pos + a) : 0;
    };
    g.keyframes.Plugin.prototype.mutate_index = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      if (b === 0) return !1;
      this.bb.writeInt32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Plugin.prototype.content = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      return b ? this.bb.readUint8(this.bb.__vector(this.bb_pos + b) + a) : 0;
    };
    g.keyframes.Plugin.prototype.contentLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Plugin.prototype.contentArray = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a
        ? new Uint8Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.Plugin.prototype.optional = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? !!this.bb.readInt8(this.bb_pos + a) : !1;
    };
    g.keyframes.Plugin.prototype.mutate_optional = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Plugin.startPlugin = function (a) {
      a.startObject(3);
    };
    g.keyframes.Plugin.addIndex = function (a, b) {
      a.addFieldInt32(0, b, 0);
    };
    g.keyframes.Plugin.addContent = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.Plugin.createContentVector = function (a, b) {
      a.startVector(1, b.length, 1);
      for (var c = b.length - 1; c >= 0; c--) a.addInt8(b[c]);
      return a.endVector();
    };
    g.keyframes.Plugin.startContentVector = function (a, b) {
      a.startVector(1, b, 1);
    };
    g.keyframes.Plugin.addOptional = function (a, b) {
      a.addFieldInt8(2, +b, 0);
    };
    g.keyframes.Plugin.endPlugin = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Plugin.createPlugin = function (a, b, c, d) {
      g.keyframes.Plugin.startPlugin(a);
      g.keyframes.Plugin.addIndex(a, b);
      g.keyframes.Plugin.addContent(a, c);
      g.keyframes.Plugin.addOptional(a, d);
      return g.keyframes.Plugin.endPlugin(a);
    };
    g.keyframes.ProgressMarker = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.ProgressMarker.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.ProgressMarker.getRootAsProgressMarker = function (a, b) {
      return (b || new g.keyframes.ProgressMarker()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.ProgressMarker.prototype.name = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b ? this.bb.__string(this.bb_pos + b, a) : null;
    };
    g.keyframes.ProgressMarker.prototype.startProgress = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.ProgressMarker.prototype.mutate_start_progress = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.ProgressMarker.prototype.endProgress = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.ProgressMarker.prototype.mutate_end_progress = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.ProgressMarker.startProgressMarker = function (a) {
      a.startObject(3);
    };
    g.keyframes.ProgressMarker.addName = function (a, b) {
      a.addFieldOffset(0, b, 0);
    };
    g.keyframes.ProgressMarker.addStartProgress = function (a, b) {
      a.addFieldFloat32(1, b, 0);
    };
    g.keyframes.ProgressMarker.addEndProgress = function (a, b) {
      a.addFieldFloat32(2, b, 0);
    };
    g.keyframes.ProgressMarker.endProgressMarker = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.ProgressMarker.createProgressMarker = function (a, b, c, d) {
      g.keyframes.ProgressMarker.startProgressMarker(a);
      g.keyframes.ProgressMarker.addName(a, b);
      g.keyframes.ProgressMarker.addStartProgress(a, c);
      g.keyframes.ProgressMarker.addEndProgress(a, d);
      return g.keyframes.ProgressMarker.endProgressMarker(a);
    };
    g.keyframes.Layer = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Layer.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Layer.getRootAsLayer = function (a, b) {
      return (b || new g.keyframes.Layer()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Layer.prototype.id = function () {
      var a = this.bb.__offset(this.bb_pos, 4);
      return a ? this.bb.readInt32(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.mutate_id = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      if (b === 0) return !1;
      this.bb.writeInt32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.sublayers = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 6);
      return c
        ? (b || new g.keyframes.Layer()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.sublayersLength = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.fromProgress = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.mutate_from_progress = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.toProgress = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 1;
    };
    g.keyframes.Layer.prototype.mutate_to_progress = function (a) {
      var b = this.bb.__offset(this.bb_pos, 10);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.anchorPoint = function (a) {
      var b = this.bb.__offset(this.bb_pos, 12);
      return b
        ? (a || new g.keyframes.PointAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.xPosition = function (a) {
      var b = this.bb.__offset(this.bb_pos, 14);
      return b
        ? (a || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.yPosition = function (a) {
      var b = this.bb.__offset(this.bb_pos, 16);
      return b
        ? (a || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.rotation = function (a) {
      var b = this.bb.__offset(this.bb_pos, 18);
      return b
        ? (a || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.scale = function (a) {
      var b = this.bb.__offset(this.bb_pos, 20);
      return b
        ? (a || new g.keyframes.PointAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.path = function (a) {
      var b = this.bb.__offset(this.bb_pos, 22);
      return b
        ? (a || new g.keyframes.PathAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.opacity = function (a) {
      var b = this.bb.__offset(this.bb_pos, 24);
      return b
        ? (a || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.fillColor = function (a) {
      var b = this.bb.__offset(this.bb_pos, 26);
      return b
        ? (a || new g.keyframes.ColorAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.strokeColor = function (a) {
      var b = this.bb.__offset(this.bb_pos, 28);
      return b
        ? (a || new g.keyframes.ColorAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.strokeWidth = function (a) {
      var b = this.bb.__offset(this.bb_pos, 30);
      return b
        ? (a || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.strokeLineCap = function () {
      var a = this.bb.__offset(this.bb_pos, 32);
      return a
        ? this.bb.readInt8(this.bb_pos + a)
        : g.keyframes.StrokeLineCap.Butt;
    };
    g.keyframes.Layer.prototype.mutate_stroke_line_cap = function (a) {
      var b = this.bb.__offset(this.bb_pos, 32);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.gradient = function (a) {
      var b = this.bb.__offset(this.bb_pos, 34);
      return b
        ? (a || new g.keyframes.Gradient()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.strokeLineJoin = function () {
      var a = this.bb.__offset(this.bb_pos, 36);
      return a
        ? this.bb.readInt8(this.bb_pos + a)
        : g.keyframes.StrokeLineJoin.Miter;
    };
    g.keyframes.Layer.prototype.mutate_stroke_line_join = function (a) {
      var b = this.bb.__offset(this.bb_pos, 36);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.miterLimit = function (a) {
      var b = this.bb.__offset(this.bb_pos, 38);
      return b
        ? (a || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.bitmapIndex = function () {
      var a = this.bb.__offset(this.bb_pos, 40);
      return a ? this.bb.readInt32(this.bb_pos + a) : -1;
    };
    g.keyframes.Layer.prototype.mutate_bitmap_index = function (a) {
      var b = this.bb.__offset(this.bb_pos, 40);
      if (b === 0) return !1;
      this.bb.writeInt32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.subdocumentIndex = function () {
      var a = this.bb.__offset(this.bb_pos, 42);
      return a ? this.bb.readInt32(this.bb_pos + a) : -1;
    };
    g.keyframes.Layer.prototype.mutate_subdocument_index = function (a) {
      var b = this.bb.__offset(this.bb_pos, 42);
      if (b === 0) return !1;
      this.bb.writeInt32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.plugins = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 44);
      return c
        ? (b || new g.keyframes.Plugin()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.pluginsLength = function () {
      var a = this.bb.__offset(this.bb_pos, 44);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.progressOffset = function () {
      var a = this.bb.__offset(this.bb_pos, 46);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.mutate_progress_offset = function (a) {
      var b = this.bb.__offset(this.bb_pos, 46);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.clippingPath = function (a) {
      var b = this.bb.__offset(this.bb_pos, 48);
      return b
        ? (a || new g.keyframes.PathAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.position = function (a) {
      var b = this.bb.__offset(this.bb_pos, 50);
      return b
        ? (a || new g.keyframes.PathAnimation()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.isTrackMatte = function () {
      var a = this.bb.__offset(this.bb_pos, 52);
      return a ? !!this.bb.readInt8(this.bb_pos + a) : !1;
    };
    g.keyframes.Layer.prototype.mutate_is_track_matte = function (a) {
      var b = this.bb.__offset(this.bb_pos, 52);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.trackMatteType = function () {
      var a = this.bb.__offset(this.bb_pos, 54);
      return a
        ? this.bb.readInt8(this.bb_pos + a)
        : g.keyframes.TrackMatteType.None;
    };
    g.keyframes.Layer.prototype.mutate_track_matte_type = function (a) {
      var b = this.bb.__offset(this.bb_pos, 54);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.vectorCompositeOrder = function () {
      var a = this.bb.__offset(this.bb_pos, 56);
      return a
        ? this.bb.readInt8(this.bb_pos + a)
        : g.keyframes.VectorCompositeOrder.FillStroke;
    };
    g.keyframes.Layer.prototype.mutate_vector_composite_order = function (a) {
      var b = this.bb.__offset(this.bb_pos, 56);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.text = function (a) {
      var b = this.bb.__offset(this.bb_pos, 58);
      return b ? this.bb.__string(this.bb_pos + b, a) : null;
    };
    g.keyframes.Layer.prototype.textTypeface = function (a) {
      var b = this.bb.__offset(this.bb_pos, 60);
      return b ? this.bb.__string(this.bb_pos + b, a) : null;
    };
    g.keyframes.Layer.prototype.textSize = function () {
      var a = this.bb.__offset(this.bb_pos, 62);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.mutate_textSize = function (a) {
      var b = this.bb.__offset(this.bb_pos, 62);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.textColor = function (a) {
      var b = this.bb.__offset(this.bb_pos, 64);
      return b
        ? (a || new g.keyframes.Color()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.textAlign = function () {
      var a = this.bb.__offset(this.bb_pos, 66);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.mutate_textAlign = function (a) {
      var b = this.bb.__offset(this.bb_pos, 66);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.textVAlign = function () {
      var a = this.bb.__offset(this.bb_pos, 68);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.mutate_textVAlign = function (a) {
      var b = this.bb.__offset(this.bb_pos, 68);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.textTracking = function () {
      var a = this.bb.__offset(this.bb_pos, 70);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.mutate_textTracking = function (a) {
      var b = this.bb.__offset(this.bb_pos, 70);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.textLeading = function () {
      var a = this.bb.__offset(this.bb_pos, 72);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.mutate_textLeading = function (a) {
      var b = this.bb.__offset(this.bb_pos, 72);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.textItalic = function () {
      var a = this.bb.__offset(this.bb_pos, 74);
      return a ? !!this.bb.readInt8(this.bb_pos + a) : !1;
    };
    g.keyframes.Layer.prototype.mutate_textItalic = function (a) {
      var b = this.bb.__offset(this.bb_pos, 74);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.textWeight = function () {
      var a = this.bb.__offset(this.bb_pos, 76);
      return a
        ? this.bb.readInt8(this.bb_pos + a)
        : g.keyframes.TextWeight.Thin;
    };
    g.keyframes.Layer.prototype.mutate_textWeight = function (a) {
      var b = this.bb.__offset(this.bb_pos, 76);
      if (b === 0) return !1;
      this.bb.writeInt8(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.prototype.textBoxSize = function (a) {
      var b = this.bb.__offset(this.bb_pos, 78);
      return b
        ? (a || new g.keyframes.Size()).__init(this.bb_pos + b, this.bb)
        : null;
    };
    g.keyframes.Layer.prototype.videoLevels = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 80);
      return c
        ? (b || new g.keyframes.ScalarAnimation()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.Layer.prototype.videoLevelsLength = function () {
      var a = this.bb.__offset(this.bb_pos, 80);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Layer.prototype.videoIndex = function () {
      var a = this.bb.__offset(this.bb_pos, 82);
      return a ? this.bb.readInt32(this.bb_pos + a) : -1;
    };
    g.keyframes.Layer.prototype.mutate_video_index = function (a) {
      var b = this.bb.__offset(this.bb_pos, 82);
      if (b === 0) return !1;
      this.bb.writeInt32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Layer.startLayer = function (a) {
      a.startObject(40);
    };
    g.keyframes.Layer.addId = function (a, b) {
      a.addFieldInt32(0, b, 0);
    };
    g.keyframes.Layer.addSublayers = function (a, b) {
      a.addFieldOffset(1, b, 0);
    };
    g.keyframes.Layer.createSublayersVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Layer.startSublayersVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Layer.addFromProgress = function (a, b) {
      a.addFieldFloat32(2, b, 0);
    };
    g.keyframes.Layer.addToProgress = function (a, b) {
      a.addFieldFloat32(3, b, 1);
    };
    g.keyframes.Layer.addAnchorPoint = function (a, b) {
      a.addFieldOffset(4, b, 0);
    };
    g.keyframes.Layer.addXPosition = function (a, b) {
      a.addFieldOffset(5, b, 0);
    };
    g.keyframes.Layer.addYPosition = function (a, b) {
      a.addFieldOffset(6, b, 0);
    };
    g.keyframes.Layer.addRotation = function (a, b) {
      a.addFieldOffset(7, b, 0);
    };
    g.keyframes.Layer.addScale = function (a, b) {
      a.addFieldOffset(8, b, 0);
    };
    g.keyframes.Layer.addPath = function (a, b) {
      a.addFieldOffset(9, b, 0);
    };
    g.keyframes.Layer.addOpacity = function (a, b) {
      a.addFieldOffset(10, b, 0);
    };
    g.keyframes.Layer.addFillColor = function (a, b) {
      a.addFieldOffset(11, b, 0);
    };
    g.keyframes.Layer.addStrokeColor = function (a, b) {
      a.addFieldOffset(12, b, 0);
    };
    g.keyframes.Layer.addStrokeWidth = function (a, b) {
      a.addFieldOffset(13, b, 0);
    };
    g.keyframes.Layer.addStrokeLineCap = function (a, b) {
      a.addFieldInt8(14, b, g.keyframes.StrokeLineCap.Butt);
    };
    g.keyframes.Layer.addGradient = function (a, b) {
      a.addFieldOffset(15, b, 0);
    };
    g.keyframes.Layer.addStrokeLineJoin = function (a, b) {
      a.addFieldInt8(16, b, g.keyframes.StrokeLineJoin.Miter);
    };
    g.keyframes.Layer.addMiterLimit = function (a, b) {
      a.addFieldOffset(17, b, 0);
    };
    g.keyframes.Layer.addBitmapIndex = function (a, b) {
      a.addFieldInt32(18, b, -1);
    };
    g.keyframes.Layer.addSubdocumentIndex = function (a, b) {
      a.addFieldInt32(19, b, -1);
    };
    g.keyframes.Layer.addPlugins = function (a, b) {
      a.addFieldOffset(20, b, 0);
    };
    g.keyframes.Layer.createPluginsVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Layer.startPluginsVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Layer.addProgressOffset = function (a, b) {
      a.addFieldFloat32(21, b, 0);
    };
    g.keyframes.Layer.addClippingPath = function (a, b) {
      a.addFieldOffset(22, b, 0);
    };
    g.keyframes.Layer.addPosition = function (a, b) {
      a.addFieldOffset(23, b, 0);
    };
    g.keyframes.Layer.addIsTrackMatte = function (a, b) {
      a.addFieldInt8(24, +b, 0);
    };
    g.keyframes.Layer.addTrackMatteType = function (a, b) {
      a.addFieldInt8(25, b, g.keyframes.TrackMatteType.None);
    };
    g.keyframes.Layer.addVectorCompositeOrder = function (a, b) {
      a.addFieldInt8(26, b, g.keyframes.VectorCompositeOrder.FillStroke);
    };
    g.keyframes.Layer.addText = function (a, b) {
      a.addFieldOffset(27, b, 0);
    };
    g.keyframes.Layer.addTextTypeface = function (a, b) {
      a.addFieldOffset(28, b, 0);
    };
    g.keyframes.Layer.addTextSize = function (a, b) {
      a.addFieldFloat32(29, b, 0);
    };
    g.keyframes.Layer.addTextColor = function (a, b) {
      a.addFieldOffset(30, b, 0);
    };
    g.keyframes.Layer.addTextAlign = function (a, b) {
      a.addFieldFloat32(31, b, 0);
    };
    g.keyframes.Layer.addTextVAlign = function (a, b) {
      a.addFieldFloat32(32, b, 0);
    };
    g.keyframes.Layer.addTextTracking = function (a, b) {
      a.addFieldFloat32(33, b, 0);
    };
    g.keyframes.Layer.addTextLeading = function (a, b) {
      a.addFieldFloat32(34, b, 0);
    };
    g.keyframes.Layer.addTextItalic = function (a, b) {
      a.addFieldInt8(35, +b, 0);
    };
    g.keyframes.Layer.addTextWeight = function (a, b) {
      a.addFieldInt8(36, b, g.keyframes.TextWeight.Thin);
    };
    g.keyframes.Layer.addTextBoxSize = function (a, b) {
      a.addFieldStruct(37, b, 0);
    };
    g.keyframes.Layer.addVideoLevels = function (a, b) {
      a.addFieldOffset(38, b, 0);
    };
    g.keyframes.Layer.createVideoLevelsVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Layer.startVideoLevelsVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Layer.addVideoIndex = function (a, b) {
      a.addFieldInt32(39, b, -1);
    };
    g.keyframes.Layer.endLayer = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Layer.createLayer = function (
      a,
      b,
      c,
      d,
      e,
      f,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P
    ) {
      g.keyframes.Layer.startLayer(a);
      g.keyframes.Layer.addId(a, b);
      g.keyframes.Layer.addSublayers(a, c);
      g.keyframes.Layer.addFromProgress(a, d);
      g.keyframes.Layer.addToProgress(a, e);
      g.keyframes.Layer.addAnchorPoint(a, f);
      g.keyframes.Layer.addXPosition(a, h);
      g.keyframes.Layer.addYPosition(a, i);
      g.keyframes.Layer.addRotation(a, j);
      g.keyframes.Layer.addScale(a, k);
      g.keyframes.Layer.addPath(a, l);
      g.keyframes.Layer.addOpacity(a, m);
      g.keyframes.Layer.addFillColor(a, n);
      g.keyframes.Layer.addStrokeColor(a, o);
      g.keyframes.Layer.addStrokeWidth(a, p);
      g.keyframes.Layer.addStrokeLineCap(a, q);
      g.keyframes.Layer.addGradient(a, r);
      g.keyframes.Layer.addStrokeLineJoin(a, s);
      g.keyframes.Layer.addMiterLimit(a, t);
      g.keyframes.Layer.addBitmapIndex(a, u);
      g.keyframes.Layer.addSubdocumentIndex(a, v);
      g.keyframes.Layer.addPlugins(a, w);
      g.keyframes.Layer.addProgressOffset(a, x);
      g.keyframes.Layer.addClippingPath(a, y);
      g.keyframes.Layer.addPosition(a, z);
      g.keyframes.Layer.addIsTrackMatte(a, A);
      g.keyframes.Layer.addTrackMatteType(a, B);
      g.keyframes.Layer.addVectorCompositeOrder(a, C);
      g.keyframes.Layer.addText(a, D);
      g.keyframes.Layer.addTextTypeface(a, E);
      g.keyframes.Layer.addTextSize(a, F);
      g.keyframes.Layer.addTextColor(a, G);
      g.keyframes.Layer.addTextAlign(a, H);
      g.keyframes.Layer.addTextVAlign(a, I);
      g.keyframes.Layer.addTextTracking(a, J);
      g.keyframes.Layer.addTextLeading(a, K);
      g.keyframes.Layer.addTextItalic(a, L);
      g.keyframes.Layer.addTextWeight(a, M);
      g.keyframes.Layer.addTextBoxSize(a, N);
      g.keyframes.Layer.addVideoLevels(a, O);
      g.keyframes.Layer.addVideoIndex(a, P);
      return g.keyframes.Layer.endLayer(a);
    };
    g.keyframes.Document = function () {
      (this.bb = null), (this.bb_pos = 0);
    };
    g.keyframes.Document.prototype.__init = function (a, b) {
      this.bb_pos = a;
      this.bb = b;
      return this;
    };
    g.keyframes.Document.getRootAsDocument = function (a, b) {
      return (b || new g.keyframes.Document()).__init(
        a.readInt32(a.position()) + a.position(),
        a
      );
    };
    g.keyframes.Document.bufferHasIdentifier = function (a) {
      return a.__has_identifier("KEYF");
    };
    g.keyframes.Document.prototype.size = function (a) {
      var b = this.bb.__offset(this.bb_pos, 4);
      return b
        ? (a || new g.keyframes.Size()).__init(this.bb_pos + b, this.bb)
        : null;
    };
    g.keyframes.Document.prototype.frameRate = function () {
      var a = this.bb.__offset(this.bb_pos, 6);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.mutate_frame_rate = function (a) {
      var b = this.bb.__offset(this.bb_pos, 6);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Document.prototype.duration = function () {
      var a = this.bb.__offset(this.bb_pos, 8);
      return a ? this.bb.readFloat32(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.mutate_duration = function (a) {
      var b = this.bb.__offset(this.bb_pos, 8);
      if (b === 0) return !1;
      this.bb.writeFloat32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Document.prototype.version = function () {
      var a = this.bb.__offset(this.bb_pos, 10);
      return a ? this.bb.readInt32(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.mutate_version = function (a) {
      var b = this.bb.__offset(this.bb_pos, 10);
      if (b === 0) return !1;
      this.bb.writeInt32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Document.prototype.rootLayer = function (a) {
      var b = this.bb.__offset(this.bb_pos, 12);
      return b
        ? (a || new g.keyframes.Layer()).__init(
            this.bb.__indirect(this.bb_pos + b),
            this.bb
          )
        : null;
    };
    g.keyframes.Document.prototype.bitmaps = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 14);
      return c
        ? (b || new g.keyframes.Bitmap()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.Document.prototype.bitmapsLength = function () {
      var a = this.bb.__offset(this.bb_pos, 14);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.subdocuments = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 16);
      return c
        ? (b || new g.keyframes.Document()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.Document.prototype.subdocumentsLength = function () {
      var a = this.bb.__offset(this.bb_pos, 16);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.plugins = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 18);
      return c
        ? this.bb.__string(this.bb.__vector(this.bb_pos + c) + a * 4, b)
        : null;
    };
    g.keyframes.Document.prototype.pluginsLength = function () {
      var a = this.bb.__offset(this.bb_pos, 18);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.id = function () {
      var a = this.bb.__offset(this.bb_pos, 20);
      return a ? this.bb.readInt32(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.mutate_id = function (a) {
      var b = this.bb.__offset(this.bb_pos, 20);
      if (b === 0) return !1;
      this.bb.writeInt32(this.bb_pos + b, a);
      return !0;
    };
    g.keyframes.Document.prototype.manifest = function (a) {
      var b = this.bb.__offset(this.bb_pos, 22);
      return b ? this.bb.readUint8(this.bb.__vector(this.bb_pos + b) + a) : 0;
    };
    g.keyframes.Document.prototype.manifestLength = function () {
      var a = this.bb.__offset(this.bb_pos, 22);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.manifestArray = function () {
      var a = this.bb.__offset(this.bb_pos, 22);
      return a
        ? new Uint8Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a),
            this.bb.__vector_len(this.bb_pos + a)
          )
        : null;
    };
    g.keyframes.Document.prototype.progressMarkers = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 24);
      return c
        ? (b || new g.keyframes.ProgressMarker()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.Document.prototype.progressMarkersLength = function () {
      var a = this.bb.__offset(this.bb_pos, 24);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.prototype.videos = function (a, b) {
      var c = this.bb.__offset(this.bb_pos, 26);
      return c
        ? (b || new g.keyframes.Video()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4),
            this.bb
          )
        : null;
    };
    g.keyframes.Document.prototype.videosLength = function () {
      var a = this.bb.__offset(this.bb_pos, 26);
      return a ? this.bb.__vector_len(this.bb_pos + a) : 0;
    };
    g.keyframes.Document.startDocument = function (a) {
      a.startObject(12);
    };
    g.keyframes.Document.addSize = function (a, b) {
      a.addFieldStruct(0, b, 0);
    };
    g.keyframes.Document.addFrameRate = function (a, b) {
      a.addFieldFloat32(1, b, 0);
    };
    g.keyframes.Document.addDuration = function (a, b) {
      a.addFieldFloat32(2, b, 0);
    };
    g.keyframes.Document.addVersion = function (a, b) {
      a.addFieldInt32(3, b, 0);
    };
    g.keyframes.Document.addRootLayer = function (a, b) {
      a.addFieldOffset(4, b, 0);
    };
    g.keyframes.Document.addBitmaps = function (a, b) {
      a.addFieldOffset(5, b, 0);
    };
    g.keyframes.Document.createBitmapsVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Document.startBitmapsVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Document.addSubdocuments = function (a, b) {
      a.addFieldOffset(6, b, 0);
    };
    g.keyframes.Document.createSubdocumentsVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Document.startSubdocumentsVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Document.addPlugins = function (a, b) {
      a.addFieldOffset(7, b, 0);
    };
    g.keyframes.Document.createPluginsVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Document.startPluginsVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Document.addId = function (a, b) {
      a.addFieldInt32(8, b, 0);
    };
    g.keyframes.Document.addManifest = function (a, b) {
      a.addFieldOffset(9, b, 0);
    };
    g.keyframes.Document.createManifestVector = function (a, b) {
      a.startVector(1, b.length, 1);
      for (var c = b.length - 1; c >= 0; c--) a.addInt8(b[c]);
      return a.endVector();
    };
    g.keyframes.Document.startManifestVector = function (a, b) {
      a.startVector(1, b, 1);
    };
    g.keyframes.Document.addProgressMarkers = function (a, b) {
      a.addFieldOffset(10, b, 0);
    };
    g.keyframes.Document.createProgressMarkersVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Document.startProgressMarkersVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Document.addVideos = function (a, b) {
      a.addFieldOffset(11, b, 0);
    };
    g.keyframes.Document.createVideosVector = function (a, b) {
      a.startVector(4, b.length, 4);
      for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
      return a.endVector();
    };
    g.keyframes.Document.startVideosVector = function (a, b) {
      a.startVector(4, b, 4);
    };
    g.keyframes.Document.endDocument = function (a) {
      a = a.endObject();
      return a;
    };
    g.keyframes.Document.finishDocumentBuffer = function (a, b) {
      a.finish(b, "KEYF");
    };
    g.keyframes.Document.createDocument = function (
      a,
      b,
      c,
      d,
      e,
      f,
      h,
      i,
      j,
      k,
      l,
      m,
      n
    ) {
      g.keyframes.Document.startDocument(a);
      g.keyframes.Document.addSize(a, b);
      g.keyframes.Document.addFrameRate(a, c);
      g.keyframes.Document.addDuration(a, d);
      g.keyframes.Document.addVersion(a, e);
      g.keyframes.Document.addRootLayer(a, f);
      g.keyframes.Document.addBitmaps(a, h);
      g.keyframes.Document.addSubdocuments(a, i);
      g.keyframes.Document.addPlugins(a, j);
      g.keyframes.Document.addId(a, k);
      g.keyframes.Document.addManifest(a, l);
      g.keyframes.Document.addProgressMarkers(a, m);
      g.keyframes.Document.addVideos(a, n);
      return g.keyframes.Document.endDocument(a);
    };
    e.exports = g.keyframes;
  },
  null
);
__d(
  "KeyframesVideoUtils",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = window.setTimeout,
      h = 4;
    function a(a) {
      var b = document.createElement("video");
      b.setAttribute("webkit-playsinline", "");
      b.setAttribute("playsinline", "");
      b.autoplay = !1;
      b.src = a;
      b.currentTime = 0;
      a.startsWith("blob:") || (b.crossOrigin = "anonymous");
      return b;
    }
    function c(a, c) {
      return new (b("Promise"))(function (b, d) {
        var e = function b() {
            a.pause(),
              (a.currentTime = c),
              a.removeEventListener("canplaythrough", b),
              f();
          },
          f = function c() {
            a.readyState === h ? b(a) : g(c, 10);
          },
          i = function b(c) {
            a.removeEventListener("error", b), d(c);
          };
        a.currentTime = c;
        a.addEventListener("error", i);
        a.readyState === h ? b(a) : a.addEventListener("canplaythrough", e);
      });
    }
    f.createVideo = a;
    f.loadVideo = c;
  },
  66
);
__d(
  "KeyframesAssetDecoder",
  [
    "BlobFactory",
    "KeyframesPluginsLoader",
    "KeyframesSchema",
    "KeyframesVideoUtils",
    "Promise",
    "flatbuffers",
    "promiseDone",
    "requestIdleCallback",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("KeyframesSchema").Document,
      h = "medium",
      i = a.URL || a.webkitURL || {};
    function j(a) {
      a = new (b("flatbuffers").ByteBuffer)(a);
      return g.bufferHasIdentifier(a) ? g.getRootAsDocument(a) : null;
    }
    function k(a) {
      return new (b("Promise"))(function (b, c) {
        var d = new Image();
        d.onload = function () {
          return b(d);
        };
        d.onerror = function (b) {
          return c("Decode: error requesting image uri " + a);
        };
        d.src = a;
      });
    }
    function l(a) {
      a = b("KeyframesVideoUtils").createVideo(a);
      return b("KeyframesVideoUtils").loadVideo(a, 0);
    }
    function m(b, c, d) {
      return a.createImageBitmap
        ? b.width < c || b.height < d
          ? o(b, c, d).then(function (b) {
              return a.createImageBitmap(b, 0, 0, c, d)["catch"](function (a) {
                return b;
              });
            })
          : a
              .createImageBitmap(b, 0, 0, b.width, b.height, {
                resizeWidth: c,
                resizeHeight: d,
                rezizeQuality: h,
              })
              ["catch"](function (a) {
                return o(b, c, d);
              })
        : o(b, c, d);
    }
    function n(a, c, d) {
      a.width = c;
      a.height = d;
      return b("Promise").resolve(a);
    }
    function o(a, c, d) {
      return new (b("Promise"))(function (b) {
        var e = document.createElement("canvas");
        e.width = c;
        e.height = d;
        var f = e.getContext("2d");
        f.drawImage(a, 0, 0, c, d);
        b(e);
      });
    }
    function p(a, b) {
      var c = [];
      for (var d = 0; d < a.length; d++) {
        var e = a[d],
          f = b[d].size().width(),
          g = b[d].size().height();
        if (f !== e.width || g !== e.height) {
          var h = document.createElement("canvas");
          h.width = f;
          h.height = g;
          var i = h.getContext("2d");
          i.drawImage(e, 0, 0, f, g);
          c.push(h);
        } else c.push(e);
      }
      return c;
    }
    function q(a, c, d) {
      if (!i.createObjectURL)
        return b("Promise").reject("URL API not supported");
      var e = i.createObjectURL(a);
      c = k(e);
      b("promiseDone")(c, function () {
        return b("requestIdleCallback")(function () {
          return i.revokeObjectURL(e);
        });
      });
      return c;
    }
    function r(c) {
      if (b("BlobFactory").isSupported()) {
        var d = c.contentArray();
        if (!d)
          return b("Promise").reject("Decode: tried to decode a null bitmap");
        var e = b("BlobFactory").getBlob([d]),
          f = c.size().width(),
          g = c.size().height();
        return a.createImageBitmap
          ? a.createImageBitmap(e, 0, 0, f, g)["catch"](function (a) {
              return q(e, f, g);
            })
          : q(e, f, g);
      }
      return b("Promise").reject(
        "Decode: browser does not support bitmap creation"
      );
    }
    function s(a) {
      if (b("BlobFactory").isSupported()) {
        var c = a.size();
        a = a.contentArray();
        if (!a)
          return b("Promise").reject("Decode: tried to decode a null video");
        a = b("BlobFactory").getBlob([a]);
        if (!i.createObjectURL)
          return b("Promise").reject("URL API not supported");
        var d = i.createObjectURL(a);
        a = l(d).then(function (a) {
          return n(a, c.width(), c.height());
        });
        b("promiseDone")(a, function () {
          b("requestIdleCallback")(function () {
            return i.revokeObjectURL(d);
          });
        });
        return a;
      }
      return b("Promise").reject(
        "Decode: browser does not support video creation"
      );
    }
    function t(a) {
      var b = [];
      for (var c = a.pluginsLength() - 1; c >= 0; c--) b.unshift(a.plugins(c));
      return b.length ? b : null;
    }
    function u(a) {
      var b = [];
      for (var c = a.bitmapsLength() - 1; c >= 0; c--) b.unshift(a.bitmaps(c));
      return b;
    }
    function v(a) {
      var b = [];
      for (var c = a.videosLength() - 1; c >= 0; c--) b.unshift(a.videos(c));
      return b;
    }
    function w(a) {
      var b = {};
      for (var c = 0; c < a.length; c++) {
        var d = a[c].name();
        d &&
          (b[d] = {
            index: c,
            width: a[c].size().width(),
            height: a[c].size().height(),
          });
      }
      return b;
    }
    function x(a) {
      var b = {};
      for (var c = 0; c < a.length; c++) {
        var d = a[c].name();
        d &&
          (b[d] = {
            index: c,
            width: a[c].size().width(),
            height: a[c].size().height(),
          });
      }
      return b;
    }
    function y(a) {
      var b = [];
      for (var c, d = a.subdocumentsLength() - 1; d >= 0; d--)
        (c = a.subdocuments(d)), b.unshift(c);
      return b;
    }
    function z(a) {
      a = j(a);
      return !a
        ? b("Promise").reject("Decode: could not create flatbuffer doc")
        : A(a);
    }
    function A(a) {
      var c = u(a),
        d = x(c),
        e = v(a),
        f = w(e),
        g = c
          .filter(function (a) {
            return a.contentLength() || !a.name();
          })
          .map(r);
      e = e
        .filter(function (a) {
          return a.contentLength() || !a.name();
        })
        .map(s);
      var h = y(a).map(A),
        i = t(a);
      i = i
        ? b("KeyframesPluginsLoader").fromPluginTable(i)
        : b("Promise").resolve(null);
      return b("Promise")
        .all([b("Promise").all(g), b("Promise").all(e), i, b("Promise").all(h)])
        .then(function (b) {
          var e = b[0],
            g = b[1],
            h = b[2];
          b = b[3];
          return {
            bitmaps: p(e, c),
            bitmapNames: d,
            videos: g,
            videoNames: f,
            doc: a,
            pluginsLoader: h,
            subassets: b,
          };
        });
    }
    function B(a) {
      return !Uint8Array
        ? b("Promise").reject("Decode: typed arrays not supported")
        : b("Promise").resolve(new Uint8Array(a));
    }
    function C(a, c) {
      var d = {},
        e = [],
        f = Object.entries(a);
      a = function () {
        var a = f[g],
          h = a[0];
        a = a[1];
        a = c(a, h);
        e.push(a);
        b("promiseDone")(a, function (a) {
          return (d[h] = a);
        });
      };
      for (var g = 0; g < f.length; g++) a();
      return b("Promise")
        .all(e)
        .then(function () {
          return d;
        });
    }
    function D(a, c, d) {
      if (!a.bitmapNames[c]) {
        var e = Object.keys(a.bitmapNames).join(",");
        return b("Promise").reject(
          "Decode: missing replacement bitmap name " +
            c +
            ", available names: " +
            e
        );
      }
      e = a.bitmapNames[c];
      var f = e.index;
      c = e.width;
      e = e.height;
      return m(d, c, e).then(function (b) {
        a.bitmaps[f] = b;
      });
    }
    function E(a, c, d) {
      if (!a.videoNames[c]) {
        var e = Object.keys(a.videoNames).join(",");
        return b("Promise").reject(
          "Decode: missing replacement video name " +
            c +
            ", available names: " +
            e
        );
      }
      e = a.videoNames[c];
      var f = e.index;
      c = e.width;
      e = e.height;
      return n(d, c, e).then(function (b) {
        a.videos[f] = b;
      });
    }
    function F(a) {
      var b = babelHelpers["extends"]({}, a);
      b.bitmaps = a.bitmaps.slice();
      return b;
    }
    var G = {
      fromDocumentBytes: function (a) {
        if (a instanceof ArrayBuffer) return B(a).then(z);
        else if (a instanceof Uint8Array) return z(a);
        return b("Promise").reject("Decode: unsupported byte container passed");
      },
      replaceBitmapsWithURIs: function (a, b) {
        return C(b, function (a) {
          return k(a);
        }).then(function (b) {
          return G.replaceBitmapsWithImageSources(a, b);
        });
      },
      replaceBitmapsWithImageSources: function (a, b) {
        var c = F(a);
        return C(b, function (a, b) {
          return D(c, b, a);
        }).then(function () {
          return c;
        });
      },
      replaceVideosWithURIs: function (a, b) {
        return C(b, l).then(function (b) {
          return G.replaceVideosWithVideoSources(a, b);
        });
      },
      replaceVideosWithVideoSources: function (a, b) {
        var c = F(a);
        return C(b, function (a, b) {
          return E(c, b, a);
        }).then(function () {
          return c;
        });
      },
    };
    e.exports = G;
  },
  null
);
__d(
  "KeyframesCanvasPolyfills",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a.getTransform !== void 0) return;
      else
        a.currentTransform
          ? (a.getTransform = function () {
              var b = a.currentTransform;
              return { a: b.a, b: b.b, c: b.c, d: b.d, e: b.e, f: b.f };
            })
          : a.mozCurrentTransform !== void 0
          ? (a.getTransform = function () {
              var b = a.mozCurrentTransform;
              return { a: b[0], b: b[1], c: b[2], d: b[3], e: b[4], f: b[5] };
            })
          : (a.getTransform = function () {
              return g;
            });
    }
    var g = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    f.addGetTransformPolyfill = a;
  },
  66
);
__d(
  "KeyframesCanvasPool",
  ["KeyframesCanvasPolyfills", "nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = this;
        this.$4 = function (a) {
          (a.canvas.width = b.$1.width.physical),
            (a.canvas.height = b.$1.height.physical),
            (a.canvas.style.width = b.$1.width.logical + "px"),
            (a.canvas.style.height = b.$1.height.logical + "px");
        };
        this.$1 = a;
        this.$2 = [];
        this.$3 = [];
      }
      var b = a.prototype;
      b.getCanvas = function () {
        if (this.$2.length) {
          var a = this.$2.pop();
          this.$3.push(a);
          return a;
        } else {
          a = document.createElement("canvas");
          var b = c("nullthrows")(a.getContext("2d"));
          d("KeyframesCanvasPolyfills").addGetTransformPolyfill(b);
          a = { canvas: a, ctx: b };
          this.$4(a);
          this.$3.push(a);
          return a;
        }
      };
      b.clearAllAllocated = function () {
        var a = this;
        this.$3.forEach(function (b) {
          b.ctx.clearRect(
            0,
            0,
            Math.max(a.$1.width.physical, a.$1.width.intrinsic),
            Math.max(a.$1.height.physical, a.$1.height.intrinsic)
          );
        }, this);
      };
      b.freeAll = function () {
        (this.$2 = [].concat(this.$3, this.$2)), (this.$3 = []);
      };
      b.resizeAll = function () {
        this.$2.forEach(this.$4, this), this.$3.forEach(this.$4, this);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "KeyframesDimensions",
  ["invariant", "WebPixelRatio"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("WebPixelRatio").get(),
      j = (function () {
        function a(a) {
          (this.overridden = !1), (this.intrinsic = a), this.$1(a);
        }
        var b = a.prototype;
        b.$1 = function (a) {
          (this.logical = a), (this.physical = Math.floor(this.logical * i));
        };
        b.scale = function (a, b) {
          this.overridden && h(0, 1136), this.$1(a * b);
        };
        b.override = function (a) {
          (this.overridden = !0), this.$1(a);
        };
        b.reset = function () {
          (this.overridden = !1), this.$1(this.intrinsic);
        };
        b.getPhysicalChangeRatio = function () {
          return this.physical / this.intrinsic;
        };
        return a;
      })();
    a = (function () {
      function a(a, b) {
        (this.ratio = b ? a / b : 0),
          (this.width = new j(a)),
          (this.height = new j(b));
      }
      var b = a.prototype;
      b.setWidth = function (a) {
        this.width.override(a),
          this.height.overridden ||
            this.height.scale(a, this.ratio ? 1 / this.ratio : 0);
      };
      b.setHeight = function (a) {
        this.height.override(a),
          this.width.overridden || this.width.scale(a, this.ratio);
      };
      b.reset = function () {
        this.height.reset(), this.width.reset();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "KeyframesLoop",
  [
    "Run",
    "TimeSlice",
    "emptyFunction",
    "gkx",
    "performanceNow",
    "requestAnimationFramePolyfill",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e3,
      i = new Set();
    function j(a) {
      var b = c("performanceNow")();
      a.callback(Math.min(b - (a.previousTime || b), h));
      a.previousTime = b;
      a.framesRemaining -= 1;
      a.framesRemaining <= 0 && a.cancel();
    }
    function k(a) {
      i.size > 0 && (i.forEach(j), c("requestAnimationFramePolyfill")(k));
    }
    c("gkx")("708253") ||
      d("Run").onLeave(function () {
        i.forEach(function (a) {
          return a.cancel();
        });
      });
    window.addEventListener("focus", function () {
      i.forEach(function (a) {
        return (a.previousTime = c("performanceNow")() - 16.67);
      });
    });
    a = (function () {
      function a(a) {
        (this.framesRemaining = Infinity),
          (this.callback = a),
          (this.previousTime = 0);
      }
      var b = a.prototype;
      b.start = function (a) {
        a === void 0 && (a = Infinity),
          (this.framesRemaining = a),
          this.$1 ||
            (i.size === 0 && c("requestAnimationFramePolyfill")(k),
            i.add(this),
            (this.previousTime = c("performanceNow")()),
            (this.$1 = c("TimeSlice").getGuardedContinuation("KeyframesLoop")));
      };
      b.cancel = function () {
        this.$1 &&
          (this.$1(c("emptyFunction")), (this.$1 = null), i["delete"](this));
      };
      b.isRunning = function () {
        return !!this.$1;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "KeyframesCanvasUtils",
  ["invariant", "KeyframesSchema"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("KeyframesSchema").StrokeLineCap,
      i = b("KeyframesSchema").CommandType;
    f = ["miter", "round", "bevel"];
    function a(a) {
      return (
        "rgba(" +
        Math.floor(a.red) +
        "," +
        Math.floor(a.green) +
        "," +
        Math.floor(a.blue) +
        "," +
        Math.floor(a.alpha) / 255 +
        ")"
      );
    }
    function c(a) {
      switch (a) {
        case h.Square:
          return "square";
        case h.Round:
          return "round";
        case h.Butt:
        default:
          return "butt";
      }
    }
    function d(a, b) {
      a.beginPath();
      for (
        var b = b,
          c = Array.isArray(b),
          d = 0,
          b = c
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= b.length) break;
          e = b[d++];
        } else {
          d = b.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        switch (e.type) {
          case i.MoveTo:
            a.moveTo(e.point.x, e.point.y);
            break;
          case i.CubicTo:
            (e.control1 && e.control2) || g(0, 2935);
            a.bezierCurveTo(
              e.control1.x,
              e.control1.y,
              e.control2.x,
              e.control2.y,
              e.point.x,
              e.point.y
            );
            break;
          case i.QuadTo:
            e.control1 || g(0, 2936);
            a.quadraticCurveTo(
              e.control1.x,
              e.control1.y,
              e.point.x,
              e.point.y
            );
            break;
          case i.LineTo:
            a.lineTo(e.point.x, e.point.y);
            break;
          default:
            throw new Error("Unrecognized path command " + e.type);
        }
      }
    }
    e.exports = {
      drawPath: d,
      getCanvasStyle: a,
      getCanvasLineCap: c,
      LINE_JOINS: f,
    };
  },
  null
);
__d(
  "KeyframesTrackMattes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { 1: "destination-in", 2: "destination-out" };
    f["default"] = a;
  },
  66
);
__d(
  "KeyframesPathUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      return (c - b) * a + b;
    }
    function b(a, b, c, d, e, f, g) {
      return e * d + 2 * c * a * f + b * g;
    }
    function c(a, b, c, d, e, f, g, h) {
      return e * d * c + f * 3 * d * a + g * 3 * c * b + h * b * a;
    }
    e.exports = {
      interpolateLinear: a,
      interpolateQuad: b,
      interpolateCubic: c,
      lerp: a,
    };
  },
  null
);
__d(
  "KeyframesTween",
  ["invariant", "CubicBezier", "KeyframesPathUtils", "KeyframesSchema"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("KeyframesPathUtils").interpolateCubic,
      i = b("KeyframesPathUtils").interpolateLinear,
      j = b("KeyframesPathUtils").interpolateQuad;
    (d = b("KeyframesSchema")).Color;
    d.ColorAnimation;
    d.ColorArray;
    d.ColorArrayAnimation;
    d.Command;
    var k = d.CommandType;
    d.Path;
    d.PathAnimation;
    d.Point;
    d.PointAnimation;
    d.ScalarAnimation;
    d.ScalarArray;
    d.ScalarArrayAnimation;
    var l = d.TweenType;
    function m(a) {
      return a;
    }
    function n(a) {
      return { x: a.x(), y: a.y() };
    }
    function o(a) {
      return {
        red: a.red(),
        green: a.green(),
        blue: a.blue(),
        alpha: a.alpha(),
      };
    }
    function p(a) {
      var b = a.valuesLength(),
        c = [];
      for (var d = 0; d < b; d++) c.push(a.values(d));
      return c;
    }
    function q(a) {
      var b = a.colorsLength(),
        c = [];
      for (var d = 0; d < b; d++) c.push(o(a.colors(d)));
      return c;
    }
    function r(a) {
      var b = a.control1(),
        c = a.control2();
      return {
        type: a.type(),
        point: n(a.point()),
        control1: b ? n(b) : null,
        control2: c ? n(c) : null,
      };
    }
    function s(a) {
      var b = [];
      for (var c = 0; c < a.commandsLength(); c++) b.push(r(a.commands(c)));
      return b;
    }
    function t(a, b) {
      if (a >= b.keyframes(b.keyframesLength() - 1)) return 1;
      else if (a < b.keyframes(0)) return -1;
      return 0;
    }
    function u(a, b) {
      if (t(a, b) !== 0) return null;
      var c = 0,
        d = b.keyframesLength() - 1;
      while (c + 1 < d) {
        var e = Math.floor((d - c) / 2 + c);
        b.keyframes(e) < a ? (c = e) : (d = e);
      }
      return c;
    }
    function v(a, c, d) {
      var e = c.tweens(d),
        f = e.type();
      if (f === l.Hold) return 0;
      a = (a - c.keyframes(d)) / (c.keyframes(d + 1) - c.keyframes(d));
      switch (f) {
        case l.Linear:
          return a;
        case l.Bezier:
        default:
          return new (b("CubicBezier"))(
            [e.control1().x(), e.control1().y()],
            [e.control2().x(), e.control2().y()]
          ).solve(a);
      }
    }
    var w = function (a, b, c) {
      return a * (c - b) + b;
    };
    f = function (a, b, c) {
      var d = b.valuesLength(),
        e = [];
      for (var f = 0; f < d; f++) e.push(w(a, b.values(f), c.values(f)));
      return e;
    };
    var x = function (a, b, c) {
        return { x: w(a, b.x(), c.x()), y: w(a, b.y(), c.y()) };
      },
      y = function (a, b, c) {
        return b && c ? x(a, b, c) : null;
      },
      z = function (a, b, c) {
        return {
          red: w(a, b.red(), c.red()),
          green: w(a, b.green(), c.green()),
          blue: w(a, b.blue(), c.blue()),
          alpha: w(a, b.alpha(), c.alpha()),
        };
      };
    d = function (a, b, c) {
      var d = b.colorsLength(),
        e = [];
      for (var f = 0; f < d; f++) e.push(z(a, b.colors(f), c.colors(f)));
      return e;
    };
    var A = function (a, b, c) {
      var d = [];
      for (var e = 0; e < b.commandsLength(); e++) {
        var f = b.commands(e),
          g = c.commands(e);
        d.push({
          type: f.type(),
          point: x(a, f.point(), g.point()),
          control1: y(a, f.control1(), g.control1()),
          control2: y(a, f.control2(), g.control2()),
        });
      }
      return d;
    };
    function a(a, b, c, d) {
      var e = u(c, d);
      e != null || g(0, 2829);
      c = v(c, d, e);
      switch (c) {
        case 0:
          return b(d.values(e));
        case 1:
          return b(d.values(e + 1));
        default:
          return a(c, d.values(e), d.values(e + 1));
      }
    }
    var B = a.bind(null, w, m),
      C = a.bind(null, f, p),
      D = a.bind(null, x, n),
      E = a.bind(null, z, o),
      F = a.bind(null, d, q),
      G = a.bind(null, A, s);
    function H(a, b, c, d) {
      if (b.keyframesLength())
        switch (t(a, b)) {
          case -1:
            return d(b.values(0));
          case 1:
            return d(b.values(b.valuesLength() - 1));
          case 0:
            return c(a, b);
        }
      return d(b.value());
    }
    f = function (a, b) {
      return H(a, b, B, m);
    };
    d = function (a, b) {
      return H(a, b, C, p);
    };
    a = function (a, b) {
      return H(a, b, D, n);
    };
    A = function (a, b) {
      return H(a, b, E, o);
    };
    var I = function (a, b) {
        return H(a, b, F, q);
      },
      J = function (a, b) {
        return H(a, b, G, s);
      };
    function K(a, b, c) {
      return { x: i(a, b.x, c.x), y: i(a, b.y, c.y) };
    }
    function L(a, b, c, d) {
      var e = a * a,
        f = 1 - a,
        g = f * f;
      return {
        x: j(a, e, f, g, b.x, d.x, c.x),
        y: j(a, e, f, g, b.y, d.y, c.y),
      };
    }
    function M(a, b, c, d, e) {
      var f = a * a,
        g = 1 - a,
        i = g * g;
      return {
        x: h(a, f, g, i, b.x, d.x, e.x, c.x),
        y: h(a, f, g, i, b.y, d.y, e.y, c.y),
      };
    }
    function N(a, b, c) {
      a = v(a, b, c);
      b = b.value();
      var d = n(b.commands(c).point());
      b = r(b.commands(c + 1));
      switch (b.type) {
        case k.LineTo:
          return K(a, d, b.point);
        case k.QuadTo:
          b.control1 || g(0, 2830);
          return L(a, d, b.point, b.control1);
        case k.CubicTo:
          (b.control1 && b.control2) || g(0, 2831);
          return M(a, d, b.point, b.control1, b.control2);
        default:
          throw new Error("Unrecognized segment type " + b.type);
      }
    }
    function c(a, b) {
      switch (t(a, b)) {
        case -1:
          return n(b.value().commands(0).point());
        case 1:
          var c = b.value();
          return n(c.commands(c.commandsLength() - 1).point());
        default:
          c = u(a, b);
          c != null || g(0, 2832);
          return N(a, b, c);
      }
    }
    a = {
      maybeTweenPoint2: a,
      maybeTweenColor: A,
      maybeTweenColorArray: I,
      maybeTweenScalar: f,
      maybeTweenScalarArray: d,
      maybeTweenPath: J,
      tweenPointOnPath: c,
    };
    e.exports = a;
  },
  null
);
__d(
  "KeyframesVideoManager",
  ["KeyframesVideoUtils", "Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 0.2,
      h = 100,
      i = [0.85, 1.15];
    e.exports = (function () {
      function a(a) {
        (this.$1 = a),
          (this.$3 = 1 / a.doc.frameRate()),
          (this.$2 = l(a.doc.rootLayer(), a)),
          (this.$4 = this.$5());
      }
      var c = a.prototype;
      c.getVideos = function () {
        return this.$1.videos;
      };
      c.getTimeWindows = function () {
        return this.$2;
      };
      c.forEach = function (a) {
        this.getVideos().forEach(a);
      };
      c.pause = function () {
        this.forEach(function (a) {
          a.pause();
        });
      };
      c.mute = function () {
        this.forEach(function (a) {
          a.muted = !0;
        });
      };
      c.unMute = function () {
        this.forEach(function (a) {
          a.muted = !1;
        });
      };
      c.renderProgress = function (a) {
        var b = this;
        this.$2.forEach(function (c, d) {
          var e = c.video,
            f = k(c, a),
            h = j(c, a);
          h = b.$1.doc.duration() * h;
          var l = Math.abs(h - e.currentTime);
          c = b.$1.doc.duration() * (c.toProgress - c.fromProgress);
          if (l > g && e.currentTime < c && h < c) {
            l = (c - e.currentTime) / (c - h);
            l >= i[0] && l <= i[1] && b.changeVideoPlaybackRate(d, l);
          }
          f && e.paused
            ? e.play()
            : f == !1 && e.paused == !1 && (e.pause(), (e.currentTime = 0));
        });
      };
      c.$5 = function () {
        return this.$2.map(function (a) {
          var b = a.video;
          return n(
            function (a) {
              b.playbackRate = a;
            },
            h,
            !0
          );
        });
      };
      c.changeVideoPlaybackRate = function (a, b) {
        this.$4[a](b);
      };
      c.seekToProgress = function (a) {
        var c = this,
          d;
        return b("regeneratorRuntime").async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  d = this.$2.map(function (d) {
                    var e, f, g;
                    return b("regeneratorRuntime").async(
                      function (h) {
                        while (1)
                          switch ((h.prev = h.next)) {
                            case 0:
                              e = d.video;
                              f = 0;
                              k(d, a) &&
                                ((g = j(d, a)),
                                (f = m(c.$1.doc.duration() * g)));
                              e.pause();
                              e.currentTime = f;
                              h.next = 7;
                              return b("regeneratorRuntime").awrap(
                                b("KeyframesVideoUtils").loadVideo(e, f)
                              );
                            case 7:
                            case "end":
                              return h.stop();
                          }
                      },
                      null,
                      this
                    );
                  });
                  e.next = 3;
                  return b("regeneratorRuntime").awrap(b("Promise").all(d));
                case 3:
                case "end":
                  return e.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    function j(a, b) {
      return b - a.fromProgress;
    }
    function k(a, b) {
      return b >= a.fromProgress && b <= a.toProgress;
    }
    function l(a, b) {
      var c = [],
        d = a.videoIndex();
      if (d != -1) {
        var e = b.videos[d];
        d = b.doc.videos(d);
        e != null &&
          c.push({
            fromProgress: a.fromProgress(),
            toProgress: a.toProgress(),
            name: d != null ? d.name() : null,
            video: e,
          });
      }
      for (var d = 0; d < a.sublayersLength(); d++)
        c = c.concat(l(a.sublayers(d), b));
      return c;
    }
    function m(a) {
      return Math.round(a * 100) / 100;
    }
    function n(a, b, c) {
      b === void 0 && (b = 100);
      c === void 0 && (c = !1);
      var d;
      return function () {
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        var h = function () {
            (d = null), c || a.apply(void 0, f);
          },
          i = c && !d;
        clearTimeout(d);
        d = setTimeout(h, b);
        i && a.apply(void 0, f);
      };
    }
  },
  null
);
__d(
  "KeyframesRenderer",
  [
    "invariant",
    "ErrorGuard",
    "KeyframesCanvasPolyfills",
    "KeyframesCanvasPool",
    "KeyframesCanvasUtils",
    "KeyframesDimensions",
    "KeyframesLoop",
    "KeyframesTrackMattes",
    "KeyframesTween",
    "KeyframesVideoManager",
    "Promise",
    "gkx",
    "nullthrows",
    "performanceNow",
    "promiseDone",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = b("KeyframesCanvasPolyfills").addGetTransformPolyfill,
      k = (a = b("KeyframesCanvasUtils")).LINE_JOINS,
      l = a.drawPath,
      m = a.getCanvasLineCap,
      n = a.getCanvasStyle,
      o = (c = b("KeyframesTween")).maybeTweenColor,
      p = c.maybeTweenColorArray,
      q = c.maybeTweenPath,
      r = c.maybeTweenPoint2,
      s = c.maybeTweenScalar,
      t = c.maybeTweenScalarArray,
      u = c.tweenPointOnPath,
      v = 1,
      w = { ERROR_FRAMEDROP: "ERROR_FRAMEDROP" };
    d = 60;
    var x = 1e3 / d,
      y = 1,
      z = "source-over";
    function A(a, c) {
      return b("gkx")("801076")
        ? (h || (h = b("ErrorGuard"))).guard(a, { name: c })
        : a;
    }
    var B = (function () {
      function a(a, b) {
        b === void 0 && (b = 100),
          (this.$3 = !1),
          (this.$4 = 0),
          (this.$1 = a),
          (this.$2 = b);
      }
      var c = a.prototype;
      c.callOrIgnoreThrottled = function () {
        if ((i || (i = b("performanceNow")))() >= this.$4) {
          for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
            c[d] = arguments[d];
          this.$5(c);
        } else this.$3 = !0;
      };
      c.callIfIgnored = function () {
        if (this.$3) {
          for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
          this.$5(b);
        }
      };
      c.callImmediately = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        this.$5(b);
      };
      c.resetThrottling = function () {
        this.$4 = 0;
      };
      c.$5 = function (a) {
        (this.$3 = !1),
          (this.$4 = (i || (i = b("performanceNow")))() + this.$2),
          this.$1.apply(null, a);
      };
      return a;
    })();
    function C(a, b) {
      if (a.pluginsLoader) {
        a.pluginsLoader.instances.forEach(b);
        for (var c = a.subassets.length - 1; 0 <= c; c--) C(a.subassets[c], b);
      }
    }
    function D(a, b, c, d) {
      if (a.pluginsLoader) {
        for (var e = a.pluginsLoader.instances.length - 1; 0 <= e; e--)
          a.pluginsLoader.instances[e].animationWillRenderLayer(b, c, d);
        for (var e = a.subassets.length - 1; 0 <= e; e--)
          D(a.subassets[e], b, c, d);
      }
    }
    function E(a, b, c, d) {
      a.save(),
        a.beginPath(),
        a.arc(b, c, d, 0, 2 * Math.PI, !0),
        a.closePath(),
        a.clip(),
        a.clearRect(b - d, c - d, d * 2, d * 2),
        a.restore();
    }
    function F(a, b, c, d) {
      d = r(a, b.rampStart());
      var e = r(a, b.rampEnd()),
        f = b.colors(),
        g = b.positions();
      f && g
        ? ((f = p(a, f)), (g = t(a, g)))
        : ((f = [o(a, b.colorStart()), o(a, b.colorEnd())]), (g = [0, 1]));
      if (b.type() === v) {
        var h = b.highlightLength();
        h = h !== null ? s(a, h) : 0;
        var i = b.highlightAngle();
        i = i !== null ? s(a, b.highlightAngle()) : 0;
        a = d.x;
        b = d.y;
        var j = Math.sqrt(Math.pow(d.x - e.x, 2) + Math.pow(d.y - e.y, 2)),
          k = Math.acos((e.x - a) / j),
          l = a + j * h * Math.cos(k - i);
        k = b - j * h * Math.sin(k - i);
        i = 0;
        h !== 0 &&
          (c.clip(),
          (c.fillStyle = n(f[f.length - 1])),
          c.fill(),
          E(c, a, b, j));
        h = c.createRadialGradient(l, k, i, a, b, j);
      } else h = c.createLinearGradient(d.x, d.y, e.x, e.y);
      for (var l = 0, k = f.length; l < k; l++) h.addColorStop(g[l], n(f[l]));
      return h;
    }
    function G(a, c, d, e, f, g, h, i, j) {
      j === void 0 && (j = y);
      if (h < Math.max(g.fromProgress(), 0) || h > Math.min(g.toProgress(), 1))
        return;
      try {
        i && i.maybeInstantiatePluginsForLayer(g);
      } catch (a) {}
      a = a;
      var p,
        t = g.isTrackMatte(),
        v = g.trackMatteType();
      if (t || v !== 0) {
        var w = a.getTransform();
        p = c.getCanvas();
        p.ctx.setTransform(w.a, w.b, w.c, w.d, w.e, w.f);
        p.isTrackMatte = t;
        p.trackMatteType = v;
        p.ctx.globalCompositeOperation = z;
        a = p.ctx;
      }
      a.save();
      w = g.position();
      if (w) {
        t = u(h, w);
        v = t.x;
        w = t.y;
        a.translate(v, w);
      } else {
        t = g.xPosition();
        t && a.translate(s(h, t), 0);
        v = g.yPosition();
        v && a.translate(0, s(h, v));
      }
      w = g.rotation();
      w && a.rotate(s(h, w));
      t = g.scale();
      if (t) {
        v = r(h, t);
        w = v.x;
        t = v.y;
        a.scale(w, t);
      }
      v = g.anchorPoint();
      if (v) {
        w = r(h, v);
        t = w.x;
        v = w.y;
        a.translate(-t, -v);
      }
      w = g.opacity();
      w = w != null ? s(h, w) : 1;
      a.globalAlpha = w * j;
      t = !1;
      if (i) {
        v = i.getPluginsForLayer(g.id());
        if (v)
          for (var x = 0; x < v.length; x++)
            v[x].render(a, h), (t = t || v[x].rendersLayer);
      }
      g.clippingPath() && (l(a, q(h, g.clippingPath())), a.clip());
      if (!t && g.path()) {
        l(a, q(h, g.path()));
        x = g.gradient();
        v = g.fillColor();
        t = !1;
        var A = !1;
        x
          ? ((a.fillStyle = F(h, x, a)), (t = !0))
          : v && ((a.fillStyle = n(o(h, v))), (t = !0));
        if (g.strokeWidth()) {
          x = s(h, g.strokeWidth());
          x > 0 &&
            ((a.strokeStyle = n(o(h, g.strokeColor()))),
            (a.lineJoin = k[g.strokeLineJoin()]),
            (a.lineCap = m(g.strokeLineCap())),
            (a.lineWidth = x),
            (A = !0));
        }
        g.vectorCompositeOrder() === 0
          ? (t && a.fill(), A && a.stroke())
          : (A && a.stroke(), t && a.fill());
      }
      v = g.bitmapIndex();
      x = d[v];
      x && x.width !== 0 && x.height !== 0 && a.drawImage(x, 0, 0);
      A = g.videoIndex();
      t = e[A];
      t != null && a.drawImage(t, 0, 0, t.width, t.height);
      v = g.subdocumentIndex();
      if (f[v]) {
        x = f[v].doc.size();
        a.save();
        a.beginPath();
        a.rect(0, 0, x.width(), x.height());
        a.clip();
        G(
          a,
          c,
          f[v].bitmaps,
          f[v].videos,
          f[v].subassets,
          f[v].doc.rootLayer(),
          h - g.progressOffset(),
          f[v].pluginsLoader,
          w * j
        );
        a.restore();
      }
      var B;
      for (var A = 0; A < g.sublayersLength(); A++) {
        t = G(a, c, d, e, f, g.sublayers(A), h, i, w * j);
        if (!B && t && t.trackMatteType !== void 0) B = t;
        else if (B && t && t.isTrackMatte !== void 0) {
          x = a.getTransform();
          a.setTransform(1, 0, 0, 1, 0, 0);
          B.ctx.setTransform(1, 0, 0, 1, 0, 0);
          v = t;
          B.ctx.globalCompositeOperation = b("KeyframesTrackMattes")[
            B.trackMatteType === void 0 ? 1 : B.trackMatteType
          ];
          B.ctx.drawImage(v.canvas, 0, 0);
          a.drawImage(B.canvas, 0, 0);
          a.setTransform(x.a, x.b, x.c, x.d, x.e, x.f);
          B = void 0;
          v = void 0;
        } else
          B && !t
            ? (a.drawImage(B.canvas, 0, 0), (B = void 0), (v = void 0))
            : t && t.isTrackMatte !== void 0 && ((B = void 0), (v = void 0));
      }
      a.restore();
      return p;
    }
    f = (function () {
      function a(a, c) {
        var d = this;
        this.$5 = 0;
        this.$6 = 0;
        this.$8 = !1;
        this.$9 = !1;
        this.$10 = !1;
        this.$11 = 0;
        this.$16 = !1;
        this.$17 = 0;
        this.$18 = 1;
        this.$19 = 1;
        this.$21 = 1;
        this.$22 = 0;
        this.$26 = function (a) {
          (d.$12 || d.$15) && d.$34(a),
            !d.$16
              ? d.redrawIfNeeded()
              : (d.$10 && d.$32(),
                d.$24.renderProgress(d.$11),
                d.$33(d.$11),
                (d.$11 += a / d.$5),
                d.$14 && d.$14.callOrIgnoreThrottled(d.$17),
                d.$11 >= d.$21 &&
                  ((d.$11 %= d.$21),
                  (d.$19 = Math.max(0, d.$19 - 1)),
                  d.$15 && d.$15.finish(),
                  d.$19 === 0
                    ? d.pause()
                    : (d.$24.seekToProgress(0),
                      d.$15 && d.$15.start(),
                      (d.$11 += d.$22)),
                  d.$13 && d.$13(d.$19),
                  d.$30()));
        };
        this.$33 = A(function (a) {
          (a >= 0 && a <= 1) || g(0, 750, a),
            this.$3.clearRect(
              0,
              0,
              this.$23.width.intrinsic,
              this.$23.height.intrinsic
            ),
            this.$1.pluginsLoader && D(this.$1, a, this.$16, this.$8),
            this.$4.clearAllAllocated(),
            this.$4.freeAll(),
            G(
              this.$3,
              this.$4,
              this.$1.bitmaps,
              this.$1.videos,
              this.$1.subassets,
              this.$20,
              a,
              this.$1.pluginsLoader
            ),
            (this.$17 = a),
            (this.$9 = !1),
            this.$15 && this.$15.addFrame();
        }, "KeyframesRenderer: _renderProgress()");
        this.$32 = A(function () {
          (this.$2.width = this.$23.width.physical),
            (this.$2.height = this.$23.height.physical),
            (this.$2.style.width = this.$23.width.logical + "px"),
            (this.$2.style.height = this.$23.height.logical + "px"),
            this.$3.setTransform(1, 0, 0, 1, 0, 0),
            this.$3.scale(
              this.$23.width.getPhysicalChangeRatio(),
              this.$23.height.getPhysicalChangeRatio()
            ),
            this.$4.resizeAll(),
            (this.$10 = !1),
            (this.$9 = !0);
        }, "KeyframesRenderer: _resize()");
        this.$23 = new (b("KeyframesDimensions"))(
          a.doc.size().width(),
          a.doc.size().height()
        );
        this.$4 = new (b("KeyframesCanvasPool"))(this.$23);
        this.$2 = document.createElement("canvas");
        this.$3 = b("nullthrows")(this.$2.getContext("2d"));
        j(this.$3);
        this.$7 = new (b("KeyframesLoop"))(this.$26);
        this.$15 = c;
        this.$24 = new (b("KeyframesVideoManager"))(a);
        this.setDecodedAsset(a);
        this.$27();
        this.$25 = b("Promise").resolve();
      }
      var c = a.prototype;
      c.play = function () {
        this.$16 ||
          ((this.$16 = !0),
          this.isFinished() && ((this.$19 = this.$18), (this.$11 = this.$22)),
          this.$15 && this.$15.start(),
          this.$7.start());
        return this;
      };
      c.pause = function () {
        this.$16 &&
          ((this.$16 = !1),
          this.$15 && this.$15.pause(),
          this.$9
            ? this.$28()
            : (this.$7.cancel(), this.$14 && this.$14.callIfIgnored(this.$17)));
        this.$24.pause();
        this.$29(this.$24.seekToProgress(this.$17));
        D(this.$1, this.$17, this.$16, this.$8);
        return this;
      };
      c.isPlaying = function () {
        return this.$16;
      };
      c.isFinished = function () {
        return this.$19 === 0;
      };
      c.isMuted = function () {
        return this.$8;
      };
      c.mute = function () {
        (this.$8 = !0), this.$24.mute();
      };
      c.unMute = function () {
        (this.$8 = !1), this.$24.unMute();
      };
      c.repeatCount = function (a) {
        this.$18 = this.$19 = Math.max(1, a);
        return this;
      };
      c.repeatForever = function () {
        return this.repeatCount(Infinity);
      };
      c.getRepeatsRemaining = function () {
        return this.$19;
      };
      c.seekToProgress = function (a) {
        var b = this;
        (a >= 0 && a <= 1) || g(0, 749, a);
        this.$14 && this.$14.resetThrottling();
        this.$17 = this.$11 = a;
        this.$29(
          this.$24.seekToProgress(a).then(function () {
            return b.$28();
          })
        );
        a === 0 && this.$30();
        this.$28();
        return this;
      };
      c.setStartAndEndAt = function (a, b) {
        if (a >= b)
          throw new Error("Cannot set the start time before the end time.");
        else if (b <= a)
          throw new Error("Cannot set the end time before the start time.");
        this.$22 = a;
        this.$21 = b;
        return this;
      };
      c.setStartAt = function (a) {
        if (a >= this.$21)
          throw new Error("Cannot set the start time before the end time.");
        this.$22 = a;
        return this;
      };
      c.setEndAt = function (a) {
        if (a <= this.$22)
          throw new Error("Cannot set the end time before the start time.");
        this.$21 = a;
        return this;
      };
      c.getDuration = function () {
        return this.$5;
      };
      c.getFrameRate = function () {
        return this.$6;
      };
      c.getIntrinsicSize = function () {
        return [this.$23.width.intrinsic, this.$23.height.intrinsic];
      };
      c.getWidth = function () {
        return this.$23.width.logical;
      };
      c.getHeight = function () {
        return this.$23.height.logical;
      };
      c.setWidth = function (a) {
        this.$23.setWidth(a);
        this.$27();
        return this;
      };
      c.setHeight = function (a) {
        this.$23.setHeight(a);
        this.$27();
        return this;
      };
      c.getDecodedAsset = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.setDecodedAsset = function (a) {
        this.$1 = a;
        this.$5 = a.doc.duration() * 1e3;
        this.$6 = a.doc.frameRate();
        this.$20 = a.doc.rootLayer();
        this.$24 = new (b("KeyframesVideoManager"))(a);
        this.$28();
        this.$31();
        return this;
      };
      c.resetDimensions = function () {
        this.$23.reset();
        this.$27();
        return this;
      };
      c.onError = function (a) {
        this.$12 = a;
        return this;
      };
      c.onRepeatEnd = function (a) {
        this.$13 = a;
        return this;
      };
      c.onProgress = function (a, b) {
        this.$14 = a && new B(a, b);
        return this;
      };
      c.getProgress = function () {
        return this.$17;
      };
      c.getElement = function () {
        return this.$2;
      };
      c.hasPerformanceLogging = function () {
        return !!this.$15;
      };
      c.redrawIfNeeded = function () {
        (this.$10 || this.$9) &&
          (this.$10 && this.$32(),
          this.$9 && this.$33(this.$17),
          this.$14 && this.$14.callImmediately(this.$17));
        return this;
      };
      c.waitForVideoUpdate = function () {
        return b("regeneratorRuntime").async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  a.next = 2;
                  return b("regeneratorRuntime").awrap(this.$25);
                case 2:
                case "end":
                  return a.stop();
              }
          },
          null,
          this
        );
      };
      c.$29 = function (a) {
        (this.$25 = a), b("promiseDone")(a);
      };
      c.$27 = function () {
        (this.$10 = !0), this.$28();
      };
      c.$28 = function () {
        (this.$9 = !0), this.$7.isRunning() || this.$7.start(1);
      };
      c.$31 = function () {
        C(this.$1, function (a) {
          return a.animationDidLoad();
        });
      };
      c.$30 = function () {
        var a = this;
        C(this.$1, function (b) {
          return b.animationWillRepeat(a.$11, a.$19);
        });
      };
      c.$34 = function (a) {
        a = Math.round(a / x - 1);
        a > 0 &&
          (this.$15 && this.$15.addFrameDrop(a),
          this.$12 && this.$12(w.ERROR_FRAMEDROP, a));
      };
      return a;
    })();
    e.exports = f;
  },
  null
);
