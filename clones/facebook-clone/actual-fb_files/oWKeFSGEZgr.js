if (self.CavalryLogger) {
  CavalryLogger.start_js(["OSE04Lx"]);
}

__d(
  "PagesCometAdminLiveTabContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      isLeftNavNuxVisible: !1,
      pageID: "",
      setIsLeftNavNuxVisible: function () {},
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "QPLE2ESessionMarkers",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({ NONE: "none", START: "start", END: "end" });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "QPLE2E",
  ["QuickPerformanceLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.logPoint = function (a, b, d, e) {
        var f, g;
        e === void 0 && (e = {});
        f =
          (f = e.timestamp) != null
            ? f
            : c("QuickPerformanceLogger").currentTimestamp();
        var h = babelHelpers["extends"]({}, e.pointData);
        g = (g = e.action) != null ? g : 12524;
        e.secondaryOrder != void 0 &&
          (h.string || (h.string = {}),
          (h.string.qpl_e2e__secondary_order = e.secondaryOrder));
        if (e.sessionMarker && e.sessionMarker !== "none") {
          var i;
          h.bool || (h.bool = {});
          h.bool = babelHelpers["extends"](
            {},
            h.bool,
            ((i = {}),
            (i.qpl_e2e__session_marker_start_point =
              e.sessionMarker === "start"),
            (i.qpl_e2e__session_marker_end_point = e.sessionMarker === "end"),
            i)
          );
        }
        c("QuickPerformanceLogger").markerStart(a, void 0, f, {
          samplingBasis: d,
        });
        c("QuickPerformanceLogger").markerPoint(a, b, {
          data: h,
          timestamp: f * 2,
        });
        e.annotations &&
          c("QuickPerformanceLogger").markerAnnotate(a, e.annotations);
        c("QuickPerformanceLogger").markerAnnotate(a, {
          string: ((i = {}), (i.join_id = d), (i.source = "client"), i),
          bool: ((b = {}), (b.qpl_e2e__align_points = !0), b),
        });
        c("QuickPerformanceLogger").markerEnd(a, g, void 0, f);
      };
      return a;
    })();
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "WebFunnelLogger",
  ["invariant", "Banzai", "FBLogger", "QPLE2E", "gkx", "isStringNullOrEmpty"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {
      ROOMS_JOIN_E2E_WITH_INTERFACES_FUNNEL: 141502565,
      ROOMS_PSTN_MENU_FUNNEL: 667166687,
      TEST_IG_ANDROID_VIDEO_UPLOAD_2_FUNNEL: 688924705,
      FOS_MON_PURCHASE_FLOW_FUNNEL: 725614593,
      COPLAY_FUNNEL: 640496395,
      ADS_EXPERIMENTS_WEB_FUNNEL: 183762945,
      GROUPS_APP_FUNNEL: 1010107390,
      AR_HUB_INSIGHTS_FUNNEL: 445977908,
      AR_HUB_SETTINGS_NOTIFICATIONS_FUNNEL: 445976360,
      AR_HUB_SETTINGS_PERMISSIONS_FUNNEL: 445987822,
      AR_HUB_3_FUNNEL: 445975837,
      WAYFINDER_USER_INTERACTION_FUNNEL: 668283633,
      WORK_FILES_SEARCH_FUNNEL: 12457892,
      WORK_FILES_APP_FUNNEL: 12458187,
      VCPANEL_ONGOING_MEETING_FUNNEL: 668272330,
      GIZMO_VCPANEL_CALL_START_FUNNEL: 668282222,
      WORK_GROUP_FILES_TAB_FUNNEL: 12462244,
      WORK_FILE_PDF_VIEWER_FUNNEL: 12454789,
      FBLITE_ADS_END_OF_VIDEO_CTA_FUNNEL: 144452084,
      FBLITE_ADS_LEAD_ADS_FUNNEL: 144452614,
      FBLITE_ADS_WATCH_AND_BROWSE_FUNNEL: 144456097,
      NT_FBLITE_IX_ADS_FUNNEL: 144456247,
      FBLITE_ADS_WATCH_AND_INSTALL_FUNNEL: 144445421,
      FBLITE_ADS_SPONSORED_VIDEOS_V2_FUNNEL: 144444239,
      FBLITE_ADS_INLINE_EOV_CTA_FUNNEL: 144450614,
      IG_BC_CREATION_FUNNEL: 183834837,
      RIDE_ON_DEMAND_FEEDBACK_INTERACTION_FUNNEL: 731650369,
      FACE_CRUNCH_PLACE_ORDER_PAGE_FUNNEL: 725158695,
      EVENT_CREATE_WEB_FUNNEL: 396252,
      EVENT_CREATE_DIALOG_FUNNEL: 397979,
      FBLITE_NT_EVENT_CREATE_FUNNEL: 396152,
      INTERN_EVENT_TIME_CREATE_FLOW_FUNNEL: 81735603,
      INTERN_EVENT_UI_STEPPER_FLOW_FUNNEL: 81725894,
      INTERN_EVENT_TIME_EDIT_FLOW_WEB_FUNNEL: 81739010,
      PLATFORM_SHARE_DIALOG_FUNNEL: 51452317,
      PLATFORM_LOGIN_WHATSAPP_ONBOARDING_FUNNEL: 777338387,
      WHATSAPP_BIZ_API_HSM_CREATION_FUNNEL: 141363848,
      WHATSAPP_BIZ_API_GENERAL_FUNNEL: 141372740,
      CULINARY_FOODCARD_FUNNEL: 725159829,
      FACE_CRUNCH_PLACE_ORDER_FUNNEL: 725170528,
      FACE_CRUNCH_RECEIVING_FUNNEL: 725166821,
      FACE_CRUNCH_INVOICE_SUBMISSION_FUNNEL: 725157683,
      FACE_CRUNCH_CREATE_NEW_RECIPE_FUNNEL: 725158389,
      FACE_CRUNCH_CREATE_TEMPLATE_ADHOC_ORDER_FUNNEL: 725157923,
      FACE_CRUNCH_CREATE_ADHOC_ORDER_FUNNEL: 725156869,
      FACE_CRUNCH_CREATE_RECIPE_FROM_EXISTING_FUNNEL: 725163651,
      FACECRUNCH_RECONCILIATION_FUNNEL: 725157581,
      FACE_CRUNCH_SAVE_ORDER_GUIDE_FUNNEL: 725165351,
      CLEAR_HISTORY_WEB_FUNNEL: 42411149,
      PLACE_PICKER_WEB_FUNNEL: 841627612,
    };
    a = (function () {
      function a(a) {
        (this.$2 = {}),
          (this.$3 = {}),
          (this.$4 = "web_funnel_logging"),
          this.$5(),
          (this.$1.funnel_definition = a);
      }
      var b = a.prototype;
      b.log = function () {
        if (this.$6()) {
          this.$5();
          return;
        }
        this.$1.funnel_payload = JSON.stringify(this.$2);
        this.$1.action_payload = JSON.stringify(this.$3);
        c("Banzai").post(this.$4, this.$1, c("Banzai").BASIC);
        this.$5();
      };
      b.logWithEventTime = function (a) {
        this.$1.event_time = a / 1e3;
        if (this.$6()) {
          this.$5();
          return;
        }
        this.$7();
        c("Banzai").post(this.$4, this.$1, c("Banzai").BASIC);
        this.$5();
      };
      b.logVital = function () {
        if (this.$6()) {
          this.$5();
          return;
        }
        this.$7();
        c("Banzai").post(this.$4, this.$1, c("Banzai").VITAL);
        this.$5();
      };
      b.logVitalWithEventTime = function (a) {
        this.$1.event_time = a / 1e3;
        if (this.$6()) {
          this.$5();
          return;
        }
        this.$7();
        c("Banzai").post(this.$4, this.$1, c("Banzai").VITAL);
        this.$5();
      };
      b.$6 = function () {
        if (!c("gkx")("1923684")) return !1;
        var a = this.$1.funnel_definition;
        if (c("isStringNullOrEmpty")(a)) return !1;
        a = i[a];
        if (a == null) return !1;
        if (
          !c("isStringNullOrEmpty")(this.$1.action) &&
          !c("isStringNullOrEmpty")(this.$1.session_key)
        ) {
          var b;
          c("QPLE2E").logPoint(a, this.$1.action, this.$1.session_key, {
            timestamp: this.$1.event_time,
            annotations: this.$8(this.$2),
            pointData: this.$8(this.$3),
            secondaryOrder:
              (b = this.$1.secondary_order_value) != null ? b : void 0,
            sessionMarker:
              this.$1.session_marker === "end"
                ? "end"
                : this.$1.session_marker === "start"
                ? "start"
                : void 0,
          });
          return !0;
        } else
          c("FBLogger")("qpl")
            .event("web_funnel_to_e2e")
            .mustfix(
              "WebFunnelLogger: action and session key must not be null, undefined or empty, in marker id %d",
              a
            );
        return !1;
      };
      b.$7 = function () {
        (this.$1.funnel_payload = JSON.stringify(this.$2)),
          (this.$1.action_payload = JSON.stringify(this.$3)),
          this.$1.action !== null || h(0, 5829),
          this.$1.session_key !== null || h(0, 5830);
      };
      b.$5 = function () {
        this.$1 = {};
        this.$2 = {};
        this.$3 = {};
        return this;
      };
      b.setAction = function (a) {
        this.$1.action = a;
        return this;
      };
      b.addActionPayload = function (a, b) {
        this.$3[a] = b;
        return this;
      };
      b.setActionTag = function (a) {
        this.$1.action_tag = a;
        return this;
      };
      b.addFunnelPayload = function (a, b) {
        this.$2[a] = b;
        return this;
      };
      b.setFunnelTags = function (a) {
        this.$1.funnel_tags = a;
        return this;
      };
      b.setSecondaryOrder = function (a) {
        this.$1.secondary_order_value = a;
        return this;
      };
      b.setSessionKey = function (a) {
        this.$1.session_key = a;
        return this;
      };
      b.markStart = function () {
        this.$1.session_marker = "start";
        return this;
      };
      b.markEnd = function () {
        this.$1.session_marker = "end";
        return this;
      };
      b.setUserId = function (a) {
        this.$1.user_id = a;
        return this;
      };
      b.setIsEmployee = function (a) {
        this.$1.is_employee = a;
        return this;
      };
      b.$8 = function (a) {
        var b = this,
          c = {
            string: {},
            int: {},
            double: {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {},
          };
        Object.entries(a).forEach(function (a) {
          var d = a[0];
          a = a[1];
          if (!Array.isArray(a)) {
            var e = typeof a;
            switch (e) {
              case "number":
                Number.isInteger(a) ? (c["int"][d] = a) : (c["double"][d] = a);
                break;
              case "boolean":
                c.bool[d] = a;
                break;
              case "string":
                c.string[d] = a;
                break;
              default:
                c.string[d] = JSON.stringify(a);
            }
          } else {
            e = [];
            if (
              b.$9(
                e,
                function (a) {
                  return typeof a === "number" && Number.isInteger(a)
                    ? a
                    : null;
                },
                a
              )
            ) {
              c.int_array[d] = e;
              return;
            }
            e = [];
            if (
              b.$9(
                e,
                function (a) {
                  return typeof a === "number" ? a : null;
                },
                a
              )
            ) {
              c.double_array[d] = e;
              return;
            }
            e = [];
            if (
              b.$9(
                e,
                function (a) {
                  return typeof a === "boolean" ? a : null;
                },
                a
              )
            ) {
              c.bool_array[d] = e;
              return;
            }
            e = [];
            if (
              b.$9(
                e,
                function (a) {
                  return typeof a === "string" ? a : JSON.stringify(a);
                },
                a
              )
            ) {
              c.string_array[d] = e;
              return;
            }
          }
        });
        return c;
      };
      b.$9 = function (a, b, c) {
        for (
          var c = c,
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          f = b(f);
          if (f != null) a.push(f);
          else return !1;
        }
        return !0;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
