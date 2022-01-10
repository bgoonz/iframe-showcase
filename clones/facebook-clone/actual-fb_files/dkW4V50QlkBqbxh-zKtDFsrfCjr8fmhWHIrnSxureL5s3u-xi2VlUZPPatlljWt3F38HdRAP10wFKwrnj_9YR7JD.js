if (self.CavalryLogger) {
  CavalryLogger.start_js(["QT/yOKR"]);
}

__d(
  "PagesComposerCometInterceptionPluginUtilsQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "param" },
        b = { defaultValue: null, kind: "LocalArgument", name: "target_id" },
        c = [{ kind: "Variable", name: "id", variableName: "target_id" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ComposerInterception",
              kind: "LinkedField",
              name: "composer_interception",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "request_param",
                      variableName: "param",
                    },
                  ],
                  concreteType: "PagesComposerInterceptionResponse",
                  kind: "LinkedField",
                  name: "decision",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "should_perform_interception",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "best_extracted_title",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "interception_product_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "interception_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "best_extracted_start_time",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "best_extracted_end_time",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "best_extracted_job_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Wage",
                      kind: "LinkedField",
                      name: "best_extracted_wage",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "max",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "min",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "type",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "best_extracted_link",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "best_extracted_links",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PagesComposerInterceptionLocation",
                      kind: "LinkedField",
                      name: "best_extracted_location",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "address",
                          storageKey: null,
                        },
                        d,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "latitude",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "longitude",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "best_extracted_description",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "dialog_title",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "dialog_subtitle",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "dialog_content",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "dialog_primary_action_title",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "entity_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "entity_fbid",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "associated_fbids",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "PagesComposerInterceptionVehicleAttributes",
                      kind: "LinkedField",
                      name: "best_extracted_vehicle_attributes",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_make",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_model",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_year",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_make_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_model_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_trim",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_body_style",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_mileage",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_is_manual_transmission",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vehicle_image_urls",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Page",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "PagesComposerCometInterceptionPluginUtilsQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [e],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "PagesComposerCometInterceptionPluginUtilsQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                e,
                d,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4096229633793159",
          metadata: {},
          name: "PagesComposerCometInterceptionPluginUtilsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PagesComposerCometInterceptionPlugin_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PagesComposerCometInterceptionPlugin_page",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_whatsapp_number",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Phone",
          kind: "LinkedField",
          name: "all_phones",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PhoneNumber",
              kind: "LinkedField",
              name: "phone_number",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "universal_number",
                  storageKey: null,
                },
              ],
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
  "PagesComposerCometInterceptionJobHandlerGKQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "gk" },
          { defaultValue: null, kind: "LocalArgument", name: "pageID" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        c = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: [{ kind: "Variable", name: "gk_name", variableName: "gk" }],
              concreteType: "EntGKCheck",
              kind: "LinkedField",
              name: "gk_check",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "passes_gk",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Page",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesComposerCometInterceptionJobHandlerGKQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [c],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PagesComposerCometInterceptionJobHandlerGKQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                c,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4042727705749406",
          metadata: {},
          name: "PagesComposerCometInterceptionJobHandlerGKQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PagesComposerCometInterceptionJobHandlerPageQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "pageID" }],
        b = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        c = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_page_eligible_for_volunteering_intercept",
              storageKey: null,
            },
          ],
          type: "Page",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesComposerCometInterceptionJobHandlerPageQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [c],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PagesComposerCometInterceptionJobHandlerPageQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                c,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3877411582379226",
          metadata: {},
          name: "PagesComposerCometInterceptionJobHandlerPageQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometComposerWhatsAppDeeplinkPlugin_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometComposerWhatsAppDeeplinkPlugin_page",
      selections: [
        {
          alias: "page_id",
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_whatsapp_number",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_whatsapp_number_country_prefix",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_whatsapp_number_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "whatsapp_display_number",
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
  "useBrandedContentEnforcementInterceptionHandler",
  [
    "BrandedContentComposerInterceptReason",
    "JSResourceForInteraction",
    "castStringToEnumValue",
    "composerBrandedContentReducer",
    "react",
    "useCometLazyDialog",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("JSResourceForInteraction")(
        "BrandedContentComposerEnforcementInterceptionDialog.react"
      ).__setRef("useBrandedContentEnforcementInterceptionHandler");
    function a(a) {
      var b = c("useCometLazyDialog")(i),
        d = b[0];
      c("useComposerViewStateReducer")(c("composerBrandedContentReducer"));
      var e = c("useComposerViewStateDispatcher")();
      return h(
        function (b, f, g, h, i) {
          var j;
          f = c("castStringToEnumValue")(
            c("BrandedContentComposerInterceptReason"),
            f
          );
          f != null &&
            e({
              reason: f,
              type: "branded_content_set_enforcement_intercept_reason",
            });
          e({
            sponsorRelationship: "PAID_RELATIONSHIP_WITH",
            type: "branded_content_set_sponsor_relationship",
          });
          var k = b == null ? void 0 : b.funnelSessionID;
          j = (j = k) != null ? j : c("uuid")();
          k == null &&
            e({
              funnelSessionID: j,
              type: "branded_content_set_funnel_session_id",
            });
          k = function () {
            e({
              event: "DISMISS",
              type: "branded_content_set_enforcement_intercept_event",
            });
          };
          var l = function () {
              h(),
                e({
                  event: "PUBLISH_WITH_TAG",
                  type: "branded_content_set_enforcement_intercept_event",
                }),
                window.setTimeout(a, 0);
            },
            m = function () {
              h(),
                e({ type: "branded_content_remove_sponsor" }),
                e({
                  event: "PUBLISH_WITHOUT_TAG",
                  type: "branded_content_set_enforcement_intercept_event",
                }),
                window.setTimeout(a, 0);
            },
            n = function (a) {
              e({
                eventLocation: "ENFORCEMENT",
                sponsorCanAddCTA: a.canAddCTA,
                sponsorCanBoost: a.canBoost,
                sponsorID: a.sponsorID,
                type: "branded_content_tag_sponsor",
              });
            },
            o = function () {
              e({ type: "branded_content_remove_sponsor" });
            };
          d(
            {
              associatedBrandIds: i,
              brandedContentData: b,
              detectedBrandID: g,
              funnelSessionID: j,
              onDismiss: k,
              onPublishOrScheduleWithTag: l,
              onPublishOrScheduleWithoutTag: m,
              onTag: n,
              onUntag: o,
              reason: f,
            },
            h()
          );
        },
        [e, d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useBrandedContentRBCInterceptionHandler",
  [
    "JSResourceForInteraction",
    "composerBrandedContentReducer",
    "react",
    "useCometLazyDialog",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("JSResourceForInteraction")(
        "BrandedContentComposerRBCInterceptionDialog.react"
      ).__setRef("useBrandedContentRBCInterceptionHandler");
    function a(a) {
      var b = c("useCometLazyDialog")(i),
        d = b[0];
      c("useComposerViewStateReducer")(c("composerBrandedContentReducer"));
      var e = c("useComposerViewStateDispatcher")(),
        f = h(
          function (b) {
            b(),
              e({ type: "branded_content_set_reviewable" }),
              window.setTimeout(a, 0);
          },
          [e, a]
        );
      return h(
        function (a, b, c, e) {
          d(
            {
              brandName: b,
              brandedContentData: a,
              onContinue: function () {
                return f(c);
              },
              sponsorID: e,
            },
            c
          );
        },
        [f, d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PagesComposerCometInterceptionJobHandler",
  [
    "CometRelay",
    "JSResourceForInteraction",
    "JobOpeningType",
    "JobSearchMechanism",
    "JobSearchSurface",
    "JobsCometComposerConstants",
    "JobsCometComposerVoiceData",
    "JobsCometInterceptionLogger",
    "PagesComposerCometInterceptionJobHandlerGKQuery.graphql",
    "PagesComposerCometInterceptionJobHandlerPageQuery.graphql",
    "UnifiedInterceptionInterceptAcceptFalcoEvent",
    "UnifiedInterceptionInterceptCreateFalcoEvent",
    "UnifiedInterceptionInterceptRejectFalcoEvent",
    "XCometJobsComposerControllerRouteBuilder",
    "firstKeyWithValue",
    "getJSEnumSafe",
    "requireDeferred",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = c("JSResourceForInteraction")(
        "JobsCometAutoConvertInfoDialog.react"
      ).__setRef("PagesComposerCometInterceptionJobHandler"),
      k = c("JSResourceForInteraction")(
        "JobsCometAutoConvertEducationDialog.react"
      ).__setRef("PagesComposerCometInterceptionJobHandler"),
      l = c("JSResourceForInteraction")(
        "JobsCometStructuredJobInfoMatrixDialog.react"
      ).__setRef("PagesComposerCometInterceptionJobHandler"),
      m = c("JSResourceForInteraction")(
        "VolunteeringCometStructuredJobInfoDialog.react"
      ).__setRef("PagesComposerCometInterceptionJobHandler"),
      n = c("JSResourceForInteraction")(
        "VolunteeringCometAutoConvertInfoDialog.react"
      ).__setRef("PagesComposerCometInterceptionJobHandler"),
      o = c("requireDeferred")("JobsCometCreateMutation").__setRef(
        "PagesComposerCometInterceptionJobHandler"
      ),
      p =
        h !== void 0
          ? h
          : (h = b("PagesComposerCometInterceptionJobHandlerGKQuery.graphql")),
      q =
        i !== void 0
          ? i
          : (i = b(
              "PagesComposerCometInterceptionJobHandlerPageQuery.graphql"
            ));
    function r(a, b, c, e) {
      a = { gk: a, pageID: c };
      d("CometRelay")
        .fetchQuery(b, p, a)
        .subscribe({
          error: function (a) {
            e(!1);
          },
          next: function (a) {
            e(
              ((a = a.node) == null
                ? void 0
                : (a = a.gk_check) == null
                ? void 0
                : a.passes_gk) === !0
            );
          },
        });
    }
    function s(a, b, c) {
      d("CometRelay")
        .fetchQuery(a, q, { pageID: b })
        .subscribe({
          error: function (a) {
            c(!1);
          },
          next: function (a) {
            c(
              ((a = a.node) == null
                ? void 0
                : a.is_page_eligible_for_volunteering_intercept) === !0
            );
          },
        });
    }
    function t(a, b, d, e, f, g, h, i, j, k) {
      if (b.title.length > 0) {
        d.logAutoconversionDialogImpression();
        var l = function () {
          window.location.reload();
        };
        s(a, h, function (m) {
          var n = m && b.job_type === "VOLUNTEER";
          if (n) {
            m = function () {
              g(
                {
                  onClose: function () {
                    l();
                  },
                },
                function () {
                  l();
                }
              );
            };
            u({
              autoConvertSuccessHandler: m,
              environment: a,
              extractedJobData: b,
              logger: d,
              pageID: h,
              postText: i,
              publishPostHandler: j,
              sessionID: k,
              shouldUseVolunteerDialog: n,
            });
          } else
            r("jobs_comet_autoconvert_v2", a, h, function (g) {
              if (g) {
                g = function () {
                  f(
                    {
                      onClose: function () {
                        l();
                      },
                      pageID: h,
                    },
                    function () {
                      l();
                    }
                  );
                };
                u({
                  autoConvertSuccessHandler: g,
                  environment: a,
                  extractedJobData: b,
                  logger: d,
                  pageID: h,
                  postText: i,
                  publishPostHandler: j,
                  sessionID: k,
                  shouldUseVolunteerDialog: n,
                });
              } else
                e(
                  {
                    onProceed: function () {
                      c("UnifiedInterceptionInterceptAcceptFalcoEvent").log(
                        function () {
                          return {
                            event_data: {},
                            event_location: "unknown",
                            interception_entry_point: "pages_feed",
                            interception_flow: "auto_convert",
                            interception_placement: "composer_post_button",
                            interception_product: "job",
                            interception_target_type: "page",
                            target_id: h,
                            waterfall_session_id: k,
                          };
                        }
                      ),
                        u({
                          autoConvertSuccessHandler: l,
                          environment: a,
                          extractedJobData: b,
                          logger: d,
                          pageID: h,
                          postText: i,
                          publishPostHandler: j,
                          sessionID: k,
                          shouldUseVolunteerDialog: n,
                        });
                    },
                  },
                  function (a) {
                    a = a.didAgree;
                    a ||
                      (c("UnifiedInterceptionInterceptRejectFalcoEvent").log(
                        function () {
                          return {
                            event_data: {},
                            event_location: "unknown",
                            interception_entry_point: "pages_feed",
                            interception_flow: "auto_convert",
                            interception_placement: "composer_post_button",
                            interception_product: "job",
                            interception_target_type: "page",
                            target_id: h,
                            waterfall_session_id: k,
                          };
                        }
                      ),
                      j());
                  }
                );
            });
        });
      } else j();
    }
    function u(a) {
      var b = a.autoConvertSuccessHandler,
        e = a.environment,
        f = a.extractedJobData,
        g = a.logger,
        h = a.pageID,
        i = a.postText,
        j = a.publishPostHandler,
        k = a.sessionID;
      a = a.shouldUseVolunteerDialog;
      var l = f.description,
        m = f.job_type,
        n = f.location,
        p = f.title;
      f = f.wage;
      l = l != null && l.length > 0 ? l : i;
      i = a ? "community_help_volunteering_auto_convert" : "page_composer";
      var q = {
        description: l,
        jobOpeningCreateSurface: "PAGE",
        jobTitle: { title: p },
        jobType:
          (a = m) != null
            ? a
            : d("JobsCometComposerConstants").DEFAULT_JOB_TYPE,
        location: {
          cityName: null,
          latitude: n == null ? void 0 : n.latitude,
          locationID: n == null ? void 0 : n.id,
          longitude: n == null ? void 0 : n.longitude,
          multiLineAddress: null,
          photo: null,
          singleLineAddress: n == null ? void 0 : n.address,
          subtitle: null,
          title: (l = n == null ? void 0 : n.address) != null ? l : "",
        },
        refererMechanism: c("firstKeyWithValue")(
          c("JobSearchMechanism"),
          "intercept_auto_convert"
        ),
        salary: {
          amount: f == null ? void 0 : f.min,
          amountMax: f == null ? void 0 : f.max,
          currency: d("JobsCometComposerConstants").DEFAULT_SALARY_CURRENCY,
          isOptional: !0,
          type:
            (p = f == null ? void 0 : f.type) != null
              ? p
              : d("JobsCometComposerConstants").DEFAULT_SALARY_TYPE,
        },
        source: c("firstKeyWithValue")(c("JobSearchSurface"), i),
        voice: {
          emails: [],
          exceededLimits: {
            exceededDailyJobPostLimit: !1,
            exceededTotalActiveJobLimit: !1,
            exceededTotalActiveJobLimitError: { error: !1 },
          },
          extraData: null,
          id: null,
          name: "",
          type: d("JobsCometComposerVoiceData").JobsComposerVoice.PAGE,
        },
        waterfallSessionID: k,
      };
      g.logAutoconversionAttempt();
      o.onReady(function (a) {
        a.commit(e, q, null, null, h, null, {
          isAutoConvert: !0,
          onFailure: function (a) {
            v(a, g, j);
          },
          onSuccess: function (a) {
            w(b, g, h, j, a, k);
          },
        });
      });
    }
    function v(a, b, c) {
      b.logAutoconversionFailure("job_create_failure_comet"), c();
    }
    function w(a, b, d, e, f, g) {
      var h,
        i =
          (h = f.job_opening_create) == null
            ? void 0
            : (h = h.job_opening) == null
            ? void 0
            : h.id;
      if (i == null) {
        e();
        return;
      }
      var j =
        (h = f.job_opening_create) == null
          ? void 0
          : (e = h.job_opening) == null
          ? void 0
          : e.container_post_id;
      b.logAutoconversionSuccess();
      c("UnifiedInterceptionInterceptCreateFalcoEvent").log(function () {
        return {
          event_data: { partner_entity_id: i, post_id: j },
          event_location: "unknown",
          interception_entry_point: "pages_feed",
          interception_flow: "auto_convert",
          interception_placement: "composer_post_button",
          interception_product: "job",
          interception_target_type: "page",
          target_id: d,
          waterfall_session_id: g,
        };
      });
      a();
    }
    function x(a, b, d, e, f, g, h, i, j, k) {
      if (b == null) {
        j();
        return;
      }
      s(a, h, function (a) {
        var l = d.job_type === "VOLUNTEER" && a;
        a = function () {
          c("UnifiedInterceptionInterceptAcceptFalcoEvent").log(function () {
            return {
              event_data: {},
              event_location: "unknown",
              interception_entry_point: "pages_feed",
              interception_flow: "dialog",
              interception_placement: "composer_post_button",
              interception_product: "job",
              interception_target_type: "page",
              target_id: h,
              waterfall_session_id: k,
            };
          }),
            y(b, d, e, h, i, k, l);
        };
        var m = function () {
          c("UnifiedInterceptionInterceptRejectFalcoEvent").log(function () {
            return {
              event_data: {},
              event_location: "unknown",
              interception_entry_point: "pages_feed",
              interception_flow: "dialog",
              interception_placement: "composer_post_button",
              interception_product: "job",
              interception_target_type: "page",
              target_id: h,
              waterfall_session_id: k,
            };
          }),
            e.logJobOpeningComposerInterceptNotUsed(i, "intercept_dialog"),
            j();
        };
        e.logInterceptDialogImpression(i, "intercept_dialog");
        l
          ? g({ loggingSourceComponent: "pages_composer", onProceed: a }, m)
          : f({ onProceed: a }, m);
      });
    }
    function y(a, b, d, e, f, g, h) {
      h === void 0 && (h = !1);
      var i = b.description,
        j = b.job_type,
        k = b.location,
        l = b.title;
      b = b.wage;
      k = {
        job_description: (i = i) != null ? i : "",
        job_location_address:
          (i = k == null ? void 0 : k.address) != null ? i : void 0,
        job_location_latitude:
          (i = k == null ? void 0 : k.latitude) != null ? i : void 0,
        job_location_longitude:
          (i = k == null ? void 0 : k.longitude) != null ? i : void 0,
        job_opening_create_surface: "PAGE",
        job_title: l,
        job_type:
          (k = c("getJSEnumSafe")(c("JobOpeningType"), j)) != null ? k : void 0,
        job_wage_max: (i = b == null ? void 0 : b.max) != null ? i : void 0,
        job_wage_min: (l = b == null ? void 0 : b.min) != null ? l : void 0,
        job_wage_type: (j = b == null ? void 0 : b.type) != null ? j : void 0,
        page_id: e,
        referer_mechanism: "intercept_dialog",
        source: h ? "community_help_volunteering_intercept" : "page_composer",
        waterfall_session_id: g,
      };
      i = c("XCometJobsComposerControllerRouteBuilder").buildURL(k);
      d.logJobOpeningComposerInterceptUsed(f, "intercept_dialog");
      a.go(i, {});
    }
    function a(a, b, c, d, e) {
      b = b.jobHandler;
      b(
        a,
        c,
        {
          description: d.bestExtractedDescription,
          job_type: d.bestExtractedJobType,
          location: d.bestExtractedLocation,
          title: d.bestExtractedTitle,
          wage: d.bestExtractedWage,
        },
        d.interceptionProductType,
        d.interceptionType,
        e
      );
      return;
    }
    function e(a, b, d) {
      var e = c("useCometLazyDialog")(j),
        f = e[0];
      e = c("useCometLazyDialog")(k);
      var g = e[0];
      e = c("useCometLazyDialog")(l);
      var h = e[0];
      e = c("useCometLazyDialog")(m);
      var i = e[0];
      e = c("useCometLazyDialog")(n);
      var o = e[0];
      return function (e, j, k, l, m, n) {
        l = new (c("JobsCometInterceptionLogger"))(a, "page_composer", b);
        switch (m) {
          case "AUTO_CONVERT":
            t(e, k, l, f, g, o, a, j, n, b);
            break;
          default:
            x(e, d, k, l, h, i, a, j, n, b);
            break;
        }
      };
    }
    g.handleJobInterceptionResponse = a;
    g.useJobsAutoConvertCometPagesComposerInterceptionHandler = e;
  },
  98
);
__d(
  "PagesComposerInterceptionFlowType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      AUTO_CONVERT: "auto_convert",
      DIALOG: "dialog",
      INLINE: "inline",
      INLINE_DIALOG: "inline_dialog",
      OPT_OUT_ACTIONABLE_NUX: "opt_out_actionable_nux",
      OPT_OUT_SIMPLE_NUX: "opt_out_simple_nux",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PagesComposerInterceptionProductType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BRANDAWARENESS: "brandawareness",
      BRANDTAGGING: "brandtagging",
      CALL_NOW: "call_now",
      EVENT: "event",
      FOODDRINK: "fooddrink",
      INSIGHTS_PHOTO_UPSELL: "insights_photo_upsell",
      JOB: "job",
      JOB_GENERIC_LINK: "job_generic_link",
      JOB_PARTNER_LINK: "job_partner_link",
      LDP: "ldp",
      MARKETPLACE_MOTORS: "marketplace_motors",
      MARKETPLACE_REAL_ESTATE: "marketplace_real_estate",
      MESSAGEPAGE: "messagepage",
      MOVIE: "movie",
      NONE: "none",
      OFFER: "offer",
      PAGES_INTEGRITY_FAKE_NEWS: "pages_integrity_fake_news",
      PAGES_INTEGRITY_UNPUBLISHED_CONTENT:
        "pages_integrity_unpublished_content",
      PRODUCT_TAGGING_NUX: "product_tagging",
      QPC: "qpc",
      SALESPROMO: "salespromo",
      SCHEDULE_POST_TIME: "schedule_post_time",
      SELL: "sell",
      SELL_MESSAGE: "sell_message",
      SERVICE: "service",
      VOLUNTEERING: "volunteering",
      WHATSAPP_PAGE: "whatsapp_page",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PagesComposerCometInterceptionPluginUtils",
  [
    "CometRelay",
    "FBLogger",
    "PagesComposerCometInterceptionJobHandler",
    "PagesComposerCometInterceptionPluginUtilsQuery.graphql",
    "PagesComposerInterceptionFlowType",
    "PagesComposerInterceptionProductType",
    "getCommerceVehicleType",
    "orEmptyArray",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = {
        associatedFBIDs: null,
        bestExtractedDescription: null,
        bestExtractedEndTime: null,
        bestExtractedJobType: null,
        bestExtractedLink: null,
        bestExtractedLinks: null,
        bestExtractedLocation: null,
        bestExtractedStartTime: null,
        bestExtractedTitle: "",
        bestExtractedVehicleAttributes: null,
        bestExtractedWage: null,
        dialogContent: null,
        dialogPrimaryActionTitle: null,
        dialogSubtitle: null,
        dialogTitle: null,
        entityFBID: null,
        entityId: null,
        interceptionProductType: "NONE",
        interceptionType: "DIALOG",
        shouldPerformInterception: !1,
      },
      j = {},
      k = "comet_pages_composer_interception_platform",
      l =
        h !== void 0
          ? h
          : (h = b("PagesComposerCometInterceptionPluginUtilsQuery.graphql"));
    function a(a, b, d, e, f, g, h, i, j, l, q) {
      var r = m(g);
      g = n(g);
      var s = function (c) {
        return o(a, b, d, c, e, r, h, j, l, q);
      };
      g = p(e, f, a == null ? void 0 : a.sponsorID, r, g, h, i, s);
      if (g == null) return;
      t(
        d,
        g,
        function (a) {
          c("FBLogger")(k).info(a.message), w(s);
        },
        function (a) {
          v(a, f, !1, s);
        }
      );
    }
    function m(a) {
      var b = "";
      if (a != null)
        switch (a.__type) {
          case "editor-state-based":
            b = a.draftEditorState.getCurrentContent().getPlainText();
            break;
          case "plain-text":
            b = a.text;
            break;
        }
      return b;
    }
    function n(a) {
      if (a == null || a.__type !== "editor-state-based") return !1;
      a = a.draftEditorState.getCurrentContent().getAllEntities();
      return a.some(function (a) {
        return (
          a.getType() === "MENTION" &&
          a.getData().entType === "PageWhatsAppNumber"
        );
      });
    }
    function o(a, b, e, f, g, h, i, j, l, m) {
      if (
        !Object.prototype.hasOwnProperty.call(
          c("PagesComposerInterceptionProductType"),
          f.interceptionProductType
        )
      ) {
        c("FBLogger")(k).mustfix(
          "Invalid interception product type returned by graphQL"
        );
        j();
        return;
      }
      if (
        !Object.prototype.hasOwnProperty.call(
          c("PagesComposerInterceptionFlowType"),
          f.interceptionType
        )
      ) {
        c("FBLogger")(k).mustfix(
          "Invalid interception type returned by graphQL"
        );
        j();
        return;
      }
      if (!f.shouldPerformInterception) {
        j();
        return;
      }
      b({ type: "set_ignore_dirty_flag", value: !0 });
      switch (f.interceptionProductType) {
        case "JOB":
          d(
            "PagesComposerCometInterceptionJobHandler"
          ).handleJobInterceptionResponse(e, m, h, f, j);
          break;
        case "BRANDAWARENESS":
          b = m.brandedContentEnforcementHandler;
          b(a, f.bestExtractedTitle, f.entityFBID, l, f.associatedFBIDs);
          break;
        case "BRANDTAGGING":
          b = m.brandedContentRBCHandler;
          b(a, f.bestExtractedTitle, l, f.entityFBID);
          break;
        case "CALL_NOW":
          b = m.callNowHandler;
          b(l, j, h);
          break;
        case "EVENT":
          a = m.eventsHandler;
          a({ publishPostHandler: j, response: f });
          break;
        case "OFFER":
          b = m.offersHandler;
          a = i != null ? q(i)[0] : null;
          b({ pageID: g, photoID: a, postText: h, publishPostHandler: j });
          break;
        case "MESSAGEPAGE":
          i = m.messagingHandler;
          i({ onClose: l, publishPostHandler: j });
          break;
        case "WHATSAPP_PAGE":
          b = m.whatsAppHandler;
          b({ onClose: l, publishPostHandler: j });
          break;
        case "MARKETPLACE_MOTORS":
          a = m.marketplaceVerticalsHandler;
          a({ pageID: g, postText: h, publishPostHandler: j, response: f });
          break;
        case "VOLUNTEERING":
          i = m.volunteeringHandler;
          i({
            environment: e,
            postText: h,
            publishPostHandler: j,
            response: f,
          });
          break;
        default:
          j();
          break;
      }
    }
    function p(a, b, c, d, e, f, g, h) {
      var i = r();
      if (!s(b, g, i)) {
        w(h);
        return null;
      }
      h = {
        composer_post_text: d,
        entry_point: "PAGES_FEED",
        has_whatsapp_deeplink: e,
        placement: g,
        run_interception_for_products: i,
        session_id: b,
        sponsor_id: c,
        uuid: b,
      };
      f != null && (h.photo_ids = q(f));
      return { param: h, target_id: a };
    }
    function q(a) {
      return a
        .filter(function (a) {
          return (
            a.fileType === "PHOTO" &&
            (a.state === "UPLOADED" || a.state === "PREEXISTING")
          );
        })
        .map(function (a) {
          return parseInt(a.data && a.data.id, 10);
        })
        .filter(function (a) {
          return !isNaN(a);
        });
    }
    function r() {
      return [
        "BRANDAWARENESS",
        "BRANDTAGGING",
        "CALL_NOW",
        "JOB",
        "EVENT",
        "OFFER",
        "MARKETPLACE_MOTORS",
        "VOLUNTEERING",
        "WHATSAPP_PAGE",
        "MESSAGEPAGE",
      ];
    }
    function s(a, b, d) {
      if (d.length === 0) {
        c("FBLogger")(k).info("No product selected for interception");
        return !1;
      }
      d = b === "pages_composer";
      if (!d && j[a]) {
        c("FBLogger")(k).info(
          "Already performed a successful interception in this session"
        );
        return !1;
      }
      return !0;
    }
    function t(a, b, c, e) {
      var f = d("relay-runtime").getRequest(l);
      f = d("relay-runtime").createOperationDescriptor(f, b);
      var g = a.retain(f),
        h = d("CometRelay")
          .fetchQuery(a, l, b)
          .subscribe({
            error: function (a) {
              u({ queryRetainDisposable: g, querySubscription: h }), c(a);
            },
            next: function (a) {
              u({ queryRetainDisposable: g, querySubscription: h }), e(a);
            },
          });
    }
    function u(a) {
      var b = a.queryRetainDisposable;
      a = a.querySubscription;
      a && a.unsubscribe();
      b && b.dispose();
    }
    function v(a, b, e, f) {
      var g;
      a =
        (a = a.node) == null
          ? void 0
          : (a = a.composer_interception) == null
          ? void 0
          : a.decision;
      if (!a) {
        c("FBLogger")(k).info(
          "Null value received from server for interception response"
        );
        w(f);
        return;
      }
      e || (j[b] = !0);
      e = {
        address: (e = a.best_extracted_location) == null ? void 0 : e.address,
        id: (b = a.best_extracted_location) == null ? void 0 : b.id,
        latitude: (e = a.best_extracted_location) == null ? void 0 : e.latitude,
        longitude:
          (b = a.best_extracted_location) == null ? void 0 : b.longitude,
      };
      b = {
        max: (b = a.best_extracted_wage) == null ? void 0 : b.max,
        min: (b = a.best_extracted_wage) == null ? void 0 : b.min,
        type: (b = a.best_extracted_wage) == null ? void 0 : b.type,
      };
      g = {
        vehicleBodyStyle: d("getCommerceVehicleType").getCommerceVehicleType(
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_body_style
        ),
        vehicleImageUrls: c("orEmptyArray")(
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_image_urls
        ),
        vehicleIsManualTransmission:
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_is_manual_transmission,
        vehicleMake:
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_make,
        vehicleMakeId:
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_make_id,
        vehicleMileage:
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_mileage,
        vehicleModel:
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_model,
        vehicleModelId:
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_model_id,
        vehicleTrim:
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_trim,
        vehicleYear:
          (g = a.best_extracted_vehicle_attributes) == null
            ? void 0
            : g.vehicle_year,
      };
      b = {
        associatedFBIDs: a.associated_fbids,
        bestExtractedDescription: a.best_extracted_description,
        bestExtractedEndTime: a.best_extracted_end_time,
        bestExtractedJobType: a.best_extracted_job_type,
        bestExtractedLink: a.best_extracted_link,
        bestExtractedLinks: a.best_extracted_links,
        bestExtractedLocation: e,
        bestExtractedStartTime: a.best_extracted_start_time,
        bestExtractedTitle: a.best_extracted_title || "",
        bestExtractedVehicleAttributes: g,
        bestExtractedWage: b,
        dialogContent: a.dialog_content,
        dialogPrimaryActionTitle: a.dialog_primary_action_title,
        dialogSubtitle: a.dialog_subtitle,
        dialogTitle: a.dialog_title,
        entityFBID: a.entity_fbid,
        entityId: a.entity_id,
        interceptionProductType:
          (e = a.interception_product_type) != null ? e : "NONE",
        interceptionType: (g = a.interception_type) != null ? g : "DIALOG",
        shouldPerformInterception: a.should_perform_interception || !1,
      };
      w(f, b);
    }
    function w(a, b) {
      b === void 0 && (b = i), a && a(b);
    }
    g.performInterception = a;
  },
  98
);
__d(
  "useCallNowPagesComposerInterceptionHandler",
  [
    "fbt",
    "CometComposerCallNowPhoneNumberForm.react",
    "JSResourceForInteraction",
    "composerAttachmentAreaReducer",
    "composerCallNowReducer",
    "react",
    "useCometComposerPushPage",
    "useCometLazyDialog",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = c("JSResourceForInteraction")(
        "CallNowCometPagesComposerInterceptionDialog.react"
      ).__setRef("useCallNowPagesComposerInterceptionHandler");
    function a(a, b) {
      c("useComposerViewStateReducer")(c("composerCallNowReducer"));
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer
      );
      var e = c("useCometComposerPushPage")(),
        f = c("useComposerViewStateDispatcher")(),
        g = j(
          function (a) {
            f({ phoneNumber: a, type: "ATTACH_CALL_NOW_CTA_IN_POST" }),
              f({
                attachmentType: "CALL_NOW",
                type: "ACTIVATE_ATTACHMENT_TYPE",
              });
          },
          [f]
        ),
        l = c("useCometLazyDialog")(k),
        m = l[0],
        n = j(
          function () {
            if (e == null) return;
            e(h._("Enter Phone Number"), function (b) {
              b = b.onReturn;
              return i.jsx(c("CometComposerCallNowPhoneNumberForm.react"), {
                defaultPhoneNumber: a,
                entryPoint: "page_composer_interception_dialog",
                onClose: b,
                onFinish: function (a) {
                  g(a);
                },
              });
            });
          },
          [g, a, e]
        );
      return j(
        function (a, c, d) {
          if (b == null ? void 0 : b.isCallNowPost) {
            c();
            return;
          }
          m({ postText: d }, function (b) {
            b ? (a(), n()) : c();
          });
        },
        [b, n, m]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useEventCometPagesComposerInterceptionHandler",
  ["JSResourceForInteraction", "emptyFunction", "useCometLazyDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
      "EventCometPagesComposerInterceptionDialog.react"
    ).__setRef("useEventCometPagesComposerInterceptionHandler");
    function a(a) {
      var b = a.pageID,
        d = a.sessionID;
      a = c("useCometLazyDialog")(h);
      var e = a[0];
      return function (a) {
        var f = a.publishPostHandler;
        a = a.response;
        e(
          { pageID: b, publishPostHandler: f, response: a, sessionID: d },
          c("emptyFunction")
        );
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMarketplaceVerticalsPagesComposerInterceptionHandler",
  ["JSResourceForInteraction", "emptyFunction", "useCometLazyDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
      "MarketplaceVerticalsCometPagesComposerInterceptionDialog.react"
    ).__setRef("useMarketplaceVerticalsPagesComposerInterceptionHandler");
    function a(a, b) {
      var d = c("useCometLazyDialog")(h),
        e = d[0];
      return function (d) {
        var f = d.publishPostHandler;
        d = d.response;
        e(
          { pageID: a, publishPostHandler: f, response: d, sessionID: b },
          c("emptyFunction")
        );
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMessagingCometPagesComposerInterceptionHandler",
  [
    "JSResourceForInteraction",
    "UnifiedInterceptionInterceptCreateFalcoEvent",
    "composerAttachmentAreaChecker",
    "composerAttachmentAreaReducer",
    "composerGetMessagesChecker",
    "composerGetMessagesReducer",
    "react",
    "useCometLazyDialog",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("JSResourceForInteraction")(
        "MessagingCometPagesComposerInterceptionDialog.react"
      ).__setRef("useMessagingCometPagesComposerInterceptionHandler");
    function a(a, b, e, f) {
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer,
        c("composerAttachmentAreaChecker")
      );
      c("useComposerViewStateReducer")(
        c("composerGetMessagesReducer"),
        c("composerGetMessagesChecker")
      );
      var g = c("useComposerViewStateDispatcher")(),
        j = c("useCometLazyDialog")(i),
        k = j[0],
        l = h(
          function (a) {
            a(),
              g({ type: "MESSAGING_ADD_GET_MESSAGES_BUTTON" }),
              g({
                attachmentType: "GET_MESSAGES",
                type: "ACTIVATE_ATTACHMENT_TYPE",
              }),
              c("UnifiedInterceptionInterceptCreateFalcoEvent").log(
                function () {
                  return {
                    event_data: {},
                    event_location: "unknown",
                    interception_entry_point: "pages_feed",
                    interception_flow: "dialog",
                    interception_placement: "composer_post_button",
                    interception_product: "messagepage",
                    interception_target_type: "page",
                    target_id: b,
                    waterfall_session_id: e,
                  };
                }
              ),
              window.setTimeout(f, 0);
          },
          [g, b, e, f]
        );
      return h(
        function (c) {
          var d = c.onClose;
          c = c.publishPostHandler;
          if (a === !0) {
            c();
            return;
          }
          k(
            {
              interceptionEntryPoint: "pages_feed",
              onClose: d,
              onContinue: function () {
                return l(d);
              },
              pageID: b,
              publishPostHandler: c,
              sessionID: e,
            },
            c
          );
        },
        [l, k, b, a, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useOffersCometPagesComposerInterceptionHandler",
  ["JSResourceForInteraction", "emptyFunction", "useCometLazyDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
      "OffersCometPagesComposerInterceptionDialog.react"
    ).__setRef("useOffersCometPagesComposerInterceptionHandler");
    function a(a) {
      var b = c("useCometLazyDialog")(h),
        d = b[0];
      return function (b) {
        var e = b.pageID,
          f = b.photoID,
          g = b.postText;
        b = b.publishPostHandler;
        d(
          {
            pageID: e,
            photoID: f,
            postText: g,
            publishPostHandler: b,
            sessionID: a,
          },
          c("emptyFunction")
        );
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVolunteeringCometPagesComposerInterceptionHandler",
  [
    "JSResourceForInteraction",
    "JobSearchMechanism",
    "JobSearchSurface",
    "JobsCometComposerVoiceData",
    "UnifiedInterceptionInterceptAcceptFalcoEvent",
    "UnifiedInterceptionInterceptCreateFalcoEvent",
    "UnifiedInterceptionInterceptRejectFalcoEvent",
    "XCometJobsComposerControllerRouteBuilder",
    "firstKeyWithValue",
    "requireDeferred",
    "unrecoverableViolation",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
        "VolunteeringCometStructuredJobInfoDialog.react"
      ).__setRef("useVolunteeringCometPagesComposerInterceptionHandler"),
      i = c("JSResourceForInteraction")(
        "VolunteeringCometAutoConvertInfoDialog.react"
      ).__setRef("useVolunteeringCometPagesComposerInterceptionHandler"),
      j = c("requireDeferred")("JobsCometCreateMutation").__setRef(
        "useVolunteeringCometPagesComposerInterceptionHandler"
      );
    function k(a) {
      var b = a.autoConvertSuccessHandler,
        e = a.environment,
        f = a.pageID,
        g = a.publishPostHandler,
        h = a.response,
        i = a.sessionID;
      a = h.bestExtractedDescription;
      var k = h.bestExtractedLocation;
      h = h.bestExtractedTitle;
      if (a == null)
        throw c("unrecoverableViolation")(
          "extracted description cannot be null",
          "volunteering"
        );
      var n = {
        description: a,
        jobOpeningCreateSurface: "PAGE",
        jobTitle: { title: h },
        jobType: "VOLUNTEER",
        location: {
          cityName: null,
          latitude: k == null ? void 0 : k.latitude,
          locationID: k == null ? void 0 : k.id,
          longitude: k == null ? void 0 : k.longitude,
          multiLineAddress: null,
          photo: null,
          singleLineAddress: k == null ? void 0 : k.address,
          subtitle: null,
          title: (a = k == null ? void 0 : k.address) != null ? a : "",
        },
        refererMechanism: c("firstKeyWithValue")(
          c("JobSearchMechanism"),
          "intercept_auto_convert"
        ),
        source: c("firstKeyWithValue")(
          c("JobSearchSurface"),
          "community_help_volunteering_auto_convert"
        ),
        voice: {
          emails: [],
          exceededLimits: {
            exceededDailyJobPostLimit: !1,
            exceededTotalActiveJobLimit: !1,
            exceededTotalActiveJobLimitError: { error: !1 },
          },
          extraData: null,
          id: null,
          name: "",
          type: d("JobsCometComposerVoiceData").JobsComposerVoice.PAGE,
        },
        waterfallSessionID: i,
      };
      j.onReady(function (a) {
        a.commit(e, n, null, null, f, null, {
          isAutoConvert: !0,
          onFailure: function (a) {
            l(a, g);
          },
          onSuccess: function (a) {
            m(b, f, g, a, i);
          },
        });
      });
    }
    function l(a, b) {
      b();
    }
    function m(a, b, d, e, f) {
      var g,
        h =
          (g = e.job_opening_create) == null
            ? void 0
            : (g = g.job_opening) == null
            ? void 0
            : g.id;
      if (h == null) {
        d();
        return;
      }
      var i =
        (g = e.job_opening_create) == null
          ? void 0
          : (d = g.job_opening) == null
          ? void 0
          : d.container_post_id;
      c("UnifiedInterceptionInterceptCreateFalcoEvent").log(function () {
        return {
          event_data: { partner_entity_id: h, post_id: i },
          event_location: "unknown",
          interception_entry_point: "pages_feed",
          interception_flow: "auto_convert",
          interception_placement: "composer_post_button",
          interception_product: "volunteering",
          interception_target_type: "page",
          target_id: b,
          waterfall_session_id: f,
        };
      });
      a();
    }
    function n(a, b, c, d, e, f) {
      if (e.bestExtractedTitle.length <= 0) {
        d();
        return;
      }
      var g = function () {
          window.location.reload();
        },
        h = function () {
          b(
            {
              onClose: function () {
                g();
              },
            },
            function () {
              g();
            }
          );
        };
      k({
        autoConvertSuccessHandler: h,
        environment: a,
        pageID: c,
        publishPostHandler: d,
        response: e,
        sessionID: f,
      });
    }
    function o(a, b, d, e, f, g) {
      f = {
        job_description: (e = e) != null ? e : "",
        job_location_address:
          (e = f == null ? void 0 : f.address) != null ? e : void 0,
        job_location_latitude:
          (e = f == null ? void 0 : f.latitude) != null ? e : void 0,
        job_location_longitude:
          (e = f == null ? void 0 : f.longitude) != null ? e : void 0,
        job_opening_create_surface: "PAGE",
        job_title: d,
        job_type: "VOLUNTEER",
        page_id: b,
        referer_mechanism: "intercept_dialog",
        source: "community_help_volunteering_intercept",
        waterfall_session_id: g,
      };
      e = c("XCometJobsComposerControllerRouteBuilder").buildURL(f);
      a.go(e, {});
    }
    function p(a, b, d, e, f, g) {
      var h = function () {
          c("UnifiedInterceptionInterceptAcceptFalcoEvent").log(function () {
            return {
              event_data: {},
              event_location: "unknown",
              interception_entry_point: "pages_feed",
              interception_flow: "dialog",
              interception_placement: "composer_post_button",
              interception_product: "volunteering",
              interception_target_type: "page",
              target_id: d,
              waterfall_session_id: g,
            };
          }),
            o(
              a,
              d,
              f.bestExtractedTitle,
              f.bestExtractedDescription,
              f.bestExtractedLocation,
              g
            );
        },
        i = function () {
          c("UnifiedInterceptionInterceptRejectFalcoEvent").log(function () {
            return {
              event_data: {},
              event_location: "unknown",
              interception_entry_point: "pages_feed",
              interception_flow: "dialog",
              interception_placement: "composer_post_button",
              interception_product: "volunteering",
              interception_target_type: "page",
              target_id: d,
              waterfall_session_id: g,
            };
          }),
            e();
        };
      b({ loggingSourceComponent: "pages_composer", onProceed: h }, i);
    }
    function a(a, b, d) {
      var e = c("useCometLazyDialog")(h),
        f = e[0];
      e = c("useCometLazyDialog")(i);
      var g = e[0];
      return function (c) {
        var e = c.environment,
          h = c.publishPostHandler;
        c = c.response;
        if (d == null) {
          h();
          return;
        }
        switch (c.interceptionType) {
          case "AUTO_CONVERT":
            n(e, g, a, h, c, b);
            break;
          default:
            p(d, f, a, h, c, b);
            break;
        }
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useWhatsAppCometPagesComposerInterceptionHandler",
  [
    "fbt",
    "ClickToWhatsAppAdsUnifiedEventsTypedLoggerLite",
    "CometComposerGetWhatsAppMessagesVerificationFlowContainer.react",
    "FacebookAppIDs",
    "JSResourceForInteraction",
    "UnifiedInterceptionInterceptCreateFalcoEvent",
    "WhatsAppNumberType",
    "castToEnum",
    "composerAttachmentAreaReducer",
    "composerGetWhatsAppMessagesReducer",
    "react",
    "useCometComposerPushPage",
    "useCometLazyDialog",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = c("JSResourceForInteraction")(
        "WhatsAppCometPagesComposerInterceptionDialog.react"
      ).__setRef("useWhatsAppCometPagesComposerInterceptionHandler");
    function a(a, b, e, f, g) {
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer
      );
      c("useComposerViewStateReducer")(c("composerGetWhatsAppMessagesReducer"));
      var l = c("useComposerViewStateDispatcher")(),
        m = c("useCometLazyDialog")(k),
        n = m[0],
        o = j(
          function () {
            l({ type: "ADD_GET_WHATSAPP_MESSAGES_BUTTON" }),
              l({
                attachmentType: "GET_WHATSAPP_MESSAGES",
                type: "ACTIVATE_ATTACHMENT_TYPE",
              });
          },
          [l]
        ),
        p = j(
          function (a) {
            c("ClickToWhatsAppAdsUnifiedEventsTypedLoggerLite").log({
              event: a,
              event_info: "INTERCEPT",
              page_id: b,
              product_flow: "page_composer",
              source_app_id: String(d("FacebookAppIDs").POSTS),
              whatsapp_number: e,
              whatsapp_number_type: c("castToEnum")(
                Number(g),
                c("WhatsAppNumberType"),
                null
              ),
            });
          },
          [b, g, e]
        ),
        q = c("useCometComposerPushPage")(),
        r = j(
          function (d) {
            d(),
              p("select_whatsapp_option"),
              c("UnifiedInterceptionInterceptCreateFalcoEvent").log(
                function () {
                  return {
                    event_data: {
                      client_extra_data: {
                        is_whatsapp_number_connected: String(e != null),
                      },
                    },
                    event_location: "unknown",
                    interception_entry_point: "pages_feed",
                    interception_flow: "dialog",
                    interception_placement: "composer_post_button",
                    interception_product: "whatsapp_page",
                    interception_target_type: "page",
                    target_id: b,
                    waterfall_session_id: a,
                  };
                }
              ),
              e != null
                ? o()
                : q != null &&
                  (p("whatsapp_account_connect_with_page_dialog_open"),
                  q(h._("Connect WhatsApp"), function (a) {
                    a = a.onReturn;
                    return i.jsx(
                      c(
                        "CometComposerGetWhatsAppMessagesVerificationFlowContainer.react"
                      ),
                      { addAttachment: o, onClose: a, pageID: b }
                    );
                  }));
          },
          [o, b, q, a, e, p]
        );
      return j(
        function (c) {
          var d = c.onClose;
          c = c.publishPostHandler;
          f === !0
            ? c()
            : n(
                {
                  hasWhatsAppNumber: !!e,
                  onClose: d,
                  onContinue: function () {
                    return r(d);
                  },
                  pageID: b,
                  publishPostHandler: c,
                  sessionID: a,
                },
                c
              );
        },
        [r, n, b, a, e, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PagesComposerCometInterceptionPlugin.react",
  [
    "CometRelay",
    "PagesComposerCometInterceptionJobHandler",
    "PagesComposerCometInterceptionPluginUtils",
    "PagesComposerCometInterceptionPlugin_page.graphql",
    "composerDirtyStateViewStateReducer",
    "react",
    "useBrandedContentEnforcementInterceptionHandler",
    "useBrandedContentRBCInterceptionHandler",
    "useCallNowPagesComposerInterceptionHandler",
    "useCometRouterDispatcher",
    "useComposerPreSubmitHook",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "useEventCometPagesComposerInterceptionHandler",
    "useMarketplaceVerticalsPagesComposerInterceptionHandler",
    "useMessagingCometPagesComposerInterceptionHandler",
    "useOffersCometPagesComposerInterceptionHandler",
    "useVolunteeringCometPagesComposerInterceptionHandler",
    "useWhatsAppCometPagesComposerInterceptionHandler",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    function a(a) {
      var e,
        f = a.brandedContentData,
        g = a.callNowMetadata,
        i = a.editorState,
        j = a.isGetMessagesPost,
        k = a.isGetWhatsAppMessagePost,
        l = a.mediaAttachments,
        m = a.page$key,
        n = a.pageID,
        o = a.sessionID;
      a = a.submitForm;
      m = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("PagesComposerCometInterceptionPlugin_page.graphql")),
        m
      );
      var p = d("CometRelay").useRelayEnvironment(),
        q = c("useCometRouterDispatcher")(),
        r = c("useBrandedContentEnforcementInterceptionHandler")(a),
        s = c("useBrandedContentRBCInterceptionHandler")(a),
        t = c("useCallNowPagesComposerInterceptionHandler")(
          m == null
            ? void 0
            : (e = m.all_phones) == null
            ? void 0
            : (e = e[0]) == null
            ? void 0
            : (e = e.phone_number) == null
            ? void 0
            : e.universal_number,
          g
        ),
        u = c("useEventCometPagesComposerInterceptionHandler")({
          pageID: n,
          sessionID: o,
        }),
        v = d(
          "PagesComposerCometInterceptionJobHandler"
        ).useJobsAutoConvertCometPagesComposerInterceptionHandler(n, o, q),
        w = c("useMessagingCometPagesComposerInterceptionHandler")(j, n, o, a),
        x = c("useWhatsAppCometPagesComposerInterceptionHandler")(
          o,
          n,
          m == null ? void 0 : m.connected_whatsapp_number,
          k
        ),
        y = c("useOffersCometPagesComposerInterceptionHandler")(o),
        z = c("useMarketplaceVerticalsPagesComposerInterceptionHandler")(n, o),
        A = c("useVolunteeringCometPagesComposerInterceptionHandler")(n, o, q);
      c("useComposerViewStateReducer")(c("composerDirtyStateViewStateReducer"));
      var B = c("useComposerViewStateDispatcher")();
      function C(a) {
        var b = a.onContinue;
        a = a.onHalt;
        d("PagesComposerCometInterceptionPluginUtils").performInterception(
          f,
          B,
          p,
          n,
          o,
          i,
          l,
          "pages_composer_post_button",
          b,
          a,
          {
            brandedContentEnforcementHandler: r,
            brandedContentRBCHandler: s,
            callNowHandler: t,
            eventsHandler: u,
            jobHandler: v,
            marketplaceVerticalsHandler: z,
            messagingHandler: w,
            offersHandler: y,
            volunteeringHandler: A,
            whatsAppHandler: x,
          }
        );
      }
      c("useComposerPreSubmitHook")(C);
      return null;
    }
    e = c("withComposerViewStatePart")(a, function (a) {
      return {
        brandedContentData: a.brandedContent,
        callNowMetadata: a.callNowMetadata,
        editorState: a.editorState,
        isGetMessagesPost: a.isGetMessagesPost,
        isGetWhatsAppMessagePost: a.isGetWhatsAppMessagePost,
        mediaAttachments: a.mediaAttachments,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "CometComposerWhatsAppDeeplinkTypeaheadListItem.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometSearchMentionsBaseViewItem.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.entry;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
      var d = b.getLabel();
      return j.jsx(
        c("CometSearchMentionsBaseViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          itemStartContent: j.jsx("div", {
            className: "chsygg5i dd2scrzq mhlwt6r5 c9yomchb",
            dir: "ltr",
            children: j.jsx(c("CometImage.react"), { src: i("2026148") }),
          }),
          children: j.jsx("div", {
            className: "ldb0hjqj a64zg8qf",
            children: j.jsx(c("TetraTextPairing.react"), {
              body: j.jsx(c("TetraText.react"), {
                numberOfLines: 1,
                type: "meta3",
                children: h._("Message on WhatsApp"),
              }),
              headline: d,
              level: 4,
            }),
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "createCometWhatsAppDeeplinkMatchStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "(+",
      h = "().\\s-",
      i = 2,
      j = 15;
    function k(a) {
      return new RegExp(
        "(^|\\s|\\()(" +
          ("(?:[" + g + "])?") +
          "(?:\\d" +
          ("[" + h + "]{0," + i + "}") +
          ("){" + a + "," + j + "}") +
          ")$"
      );
    }
    function a(a) {
      a = a.minMatchDigits;
      var b = k(a);
      a = "WhatsAppDeeplinkMatchStrategy(" + a + ")";
      return {
        findMentionableString: function (a) {
          a = b.exec(a);
          if (a !== null) {
            var c = a[1],
              d = a[2];
            return {
              leadOffset: a.index + c.length,
              matchingString: d,
              replaceableString: a[2],
            };
          }
          return null;
        },
        name: a,
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometComposerWhatsAppDeeplinkTypeaheadEntry",
  ["CometTypeaheadDataEntry"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.getPhotoURI = function () {
        return null;
      };
      c.getMentionDecorType = function () {
        return "regular";
      };
      return b;
    })(c("CometTypeaheadDataEntry"));
    g["default"] = a;
  },
  98
);
__d(
  "cometTypeaheadWhatsAppDeeplinkMatchBuilder",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      return a
        .replace(/[\u0660-\u0669]/g, function (a) {
          return (a.charCodeAt(0) - 1632).toString();
        })
        .replace(/[\u06f0-\u06f9]/g, function (a) {
          return (a.charCodeAt(0) - 1776).toString();
        })
        .replace(/\D/g, "");
    }
    function a(a) {
      a = a.query;
      var b = g(a);
      return function (a) {
        a = a.getRawData();
        var c = a.countryCode;
        a = a.fullNumber;
        var d = 0,
          e = a.slice(c.length),
          f = "" + d + e;
        c = "" + c + d + e;
        return (
          [a, f, c].some(function (a) {
            return a.startsWith(b);
          }) || e.includes(b)
        );
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometComposerWhatsAppDeeplinkTypeaheadDataSource",
  [
    "CometComposerWhatsAppDeeplinkTypeaheadEntry",
    "CometTypeaheadBaseStaticDataSource",
    "Promise",
    "cometTypeaheadWhatsAppDeeplinkMatchBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
      return typeof a === "string";
    };
    function a(a) {
      var d = a.countryCode,
        e = a.formatted,
        f = a.fullNumber;
      a = a.id;
      d =
        h(d) && h(e) && h(f) && h(a)
          ? { countryCode: d, formatted: e, fullNumber: f, id: a }
          : null;
      e = d
        ? [
            new (c("CometComposerWhatsAppDeeplinkTypeaheadEntry"))({
              key: d.id,
              label: d.formatted,
              rawData: d,
            }),
          ]
        : [];
      var g = new (c("CometTypeaheadBaseStaticDataSource"))({
        entries: e,
        matchBuilder: c("cometTypeaheadWhatsAppDeeplinkMatchBuilder"),
      });
      return {
        bootstrap: function () {},
        fetchCache: function (a) {
          return g.fetchCache(a);
        },
        fetchNetwork: function (a) {
          return b("Promise").resolve(g.fetchCache(a));
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometComposerWhatsAppDeeplinkDataSourceResolverConfig",
  [
    "createCometWhatsAppDeeplinkMatchStrategy",
    "react",
    "useCometComposerWhatsAppDeeplinkTypeaheadDataSource",
    "useCometMentionsDataSourceResolverConfig",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b = c("useCometComposerWhatsAppDeeplinkTypeaheadDataSource")(a);
      a = h(
        function () {
          return [
            {
              dataSource: b,
              matchStrategy: c("createCometWhatsAppDeeplinkMatchStrategy")({
                minMatchDigits: 3,
              }),
            },
          ];
        },
        [b]
      );
      return c("useCometMentionsDataSourceResolverConfig")(a, !0);
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerCometFontSize",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({ Regular: 24, Small: 15 });
    f.FeedComposerCometFontSize = a;
  },
  66
);
__d(
  "useCometComposerWhatsAppDeeplinkDecorator.react",
  [
    "ix",
    "FeedComposerCometFontSize",
    "FeedComposerCometTextStyleContext",
    "TetraIcon.react",
    "fbicon",
    "getEntityMatcher",
    "gkx",
    "react",
    "recoverableViolation",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
      k = b.useMemo,
      l = {
        icon: { verticalAlign: "da6bqpsd" },
        iconSmall: { verticalAlign: "tokhyhv8" },
        rootFormattedText: {
          backgroundColor: "diy96o5h",
          whiteSpace: "g0qnabr5",
        },
      },
      m = function (a) {
        switch (a) {
          case "#FFFFFFFF":
            return "white";
          case "#000000FF":
            return "black";
          case "primary-text":
            return "primary";
          default:
            c("gkx")("1985") &&
              c("recoverableViolation")(
                'Unrecognised icon colour: "' + a + '"',
                "CometComposer"
              );
            return "primary";
        }
      },
      n = function (a) {
        if (a <= d("FeedComposerCometFontSize").FeedComposerCometFontSize.Small)
          return d("fbicon")._(h("497239"), 12);
        return a <=
          d("FeedComposerCometFontSize").FeedComposerCometFontSize.Regular
          ? d("fbicon")._(h("726969"), 20)
          : d("fbicon")._(h("777209"), 24);
      };
    function o(a) {
      a.blockKey;
      var b = a.children;
      a.contentState;
      a.decoratedText;
      a.entityKey;
      a.hasFormattedText;
      var d = a.offsetKey;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "blockKey",
        "children",
        "contentState",
        "decoratedText",
        "entityKey",
        "hasFormattedText",
        "offsetKey",
      ]);
      var e = j(c("FeedComposerCometTextStyleContext")),
        f = e.color;
      e = e.fontSize;
      return i.jsxs(
        "span",
        babelHelpers["extends"]({}, a, {
          className: c("stylex")(l.rootFormattedText),
          "data-offset-key": d,
          dir: "ltr",
          spellCheck: !1,
          children: [
            i.jsx(c("TetraIcon.react"), {
              color: m(f),
              icon: n(e),
              xstyle: e < 20 ? l.iconSmall : l.icon,
            }),
            b,
          ],
        })
      );
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.hasFormattedText;
      a = a.priority;
      var d = a === void 0 ? 0 : a,
        e = c("getEntityMatcher")(function (a) {
          return (
            a.getType() === "MENTION" &&
            a.getData().entType === "PageWhatsAppNumber"
          );
        });
      return k(
        function () {
          return {
            component: i.memo(o),
            priority: d,
            props: { hasFormattedText: b },
            strategy: e,
          };
        },
        [b, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerWhatsAppDeeplinkPlugin.react",
  [
    "CometComposerWhatsAppDeeplinkPlugin_page.graphql",
    "CometComposerWhatsAppDeeplinkTypeaheadListItem.react",
    "CometRelay",
    "cometMentionDecoratorStrategy",
    "composerEditorStateViewStateReducer",
    "createCometComposerWhatsAppDeeplinkEntity",
    "getCometComposerMentionsSearch",
    "react",
    "useCometComposerDecorator",
    "useCometComposerMentionsAnchorDecorator",
    "useCometComposerWhatsAppDeeplinkDataSourceResolverConfig",
    "useCometComposerWhatsAppDeeplinkDecorator.react",
    "useCometMentionsLoggingProvider",
    "useComposerViewStateReducer",
    "useMentionsHandlerForSelectedEntry",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    function i(a) {
      return a.getLabel();
    }
    function j(a, b) {
      return c("createCometComposerWhatsAppDeeplinkEntity")(b.getKey(), !1, a);
    }
    function a(a) {
      var e = a.currentBlockKey,
        f = a.hasFormattedText;
      a = a.page$key;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometComposerWhatsAppDeeplinkPlugin_page.graphql")),
        a
      );
      var g = c("useCometComposerWhatsAppDeeplinkDataSourceResolverConfig")({
        countryCode: a.connected_whatsapp_number_country_prefix,
        formatted: a.whatsapp_display_number,
        fullNumber: a.connected_whatsapp_number,
        id: a.connected_whatsapp_number_id,
      });
      c("useComposerViewStateReducer")(
        c("composerEditorStateViewStateReducer")
      );
      c("useCometComposerDecorator")(
        c("useCometComposerWhatsAppDeeplinkDecorator.react")({
          hasFormattedText: f,
        })
      );
      f = c("useMentionsHandlerForSelectedEntry")({
        getReplacementString: i,
        getSearchText: c("getCometComposerMentionsSearch"),
        onMentionsCreateContentState: j,
      });
      a = c("useCometMentionsLoggingProvider")({
        context_id: a.page_id,
        context_type: "page",
        surface: "COMPOSER",
        typeahead_type: "WHATSAPP_DEEPLINK",
      });
      c("useCometComposerDecorator")(
        c("useCometComposerMentionsAnchorDecorator")(
          {
            currentBlockKey: e,
            dataSourceResolverConfig: g,
            getSearchText: c("getCometComposerMentionsSearch"),
            loggingProvider: a,
            mentionsHandlerForSelectedEntry: f,
            priority: 1,
            viewItemStrategyRenderer: c(
              "CometComposerWhatsAppDeeplinkTypeaheadListItem.react"
            ),
          },
          d("cometMentionDecoratorStrategy").decoratorStrategy
        )
      );
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      var b = a == null ? void 0 : a.editorState;
      b =
        b != null && b.__type === "editor-state-based"
          ? b.draftEditorState
          : null;
      return {
        currentBlockKey: b != null ? b.getSelection().getStartKey() : null,
        hasFormattedText:
          ((b = a.formattedText) == null
            ? void 0
            : b.currentFormattedTextPreset) != null,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "composerBreakingNewsTransform",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      var d, e;
      d = (d = a.breakingNews) == null ? void 0 : d.breakingNewsDuration;
      e = (e = a.breakingNews) == null ? void 0 : e.breakingNewsEditStartTime;
      a = (a = a.linkAttachment) == null ? void 0 : a.url;
      if (a == null) {
        c(b);
        return;
      }
      e != null && (d == null || d * 60 + e < Date.now() / 1e3)
        ? c(
            babelHelpers["extends"]({}, b, {
              breaking_news_data: {
                breaking_news_duration: 0,
                breaking_news_selected: !1,
                breaking_news_url: a,
              },
            })
          )
        : d != null
        ? c(
            babelHelpers["extends"]({}, b, {
              breaking_news_data: {
                breaking_news_duration: d,
                breaking_news_selected: !0,
                breaking_news_url: a,
              },
            })
          )
        : c(b);
    }
    f["default"] = a;
  },
  66
);
__d(
  "composerCallNowTransform",
  ["mediaAttachmentAreaTransform"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e;
      if (((e = a.callNowMetadata) == null ? void 0 : e.isCallNowPost) === !0) {
        e = babelHelpers["extends"]({}, b, {
          call_to_action_data: babelHelpers["extends"](
            {},
            b.call_to_action_data,
            {
              is_cta_share_post: !0,
              link: (e = a.callNowMetadata) == null ? void 0 : e.phoneNumber,
              type: "CALL_NOW",
            }
          ),
        });
        return a.mediaAttachments != null
          ? c("mediaAttachmentAreaTransform")(a, e, d)
          : d(e);
      }
      return d(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerGetShowtimesTransform",
  ["mediaAttachmentAreaTransform"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e = a.movieInfo;
      if (e == null) d(b);
      else if (a.mediaAttachments != null)
        return c("mediaAttachmentAreaTransform")(
          a,
          babelHelpers["extends"]({}, b, {
            external_movie_data: {
              external_movie_id: e.movieId,
              movie_page_id: e.pageId,
              should_remove: !1,
            },
          }),
          d
        );
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerTargetedPrivacyTransform",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      a.targetedPrivacyData != null && a.isEditingPreExistingStory !== !0
        ? c(
            babelHelpers["extends"]({}, b, {
              web_graphml_migration_params: {
                targeted_privacy_data: JSON.stringify(a.targetedPrivacyData),
              },
            })
          )
        : c(babelHelpers["extends"]({}, b));
    }
    f["default"] = a;
  },
  66
);
__d(
  "QuiltReplyFormatType.facebook",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum").Mirrored([
      "GIF",
      "PHOTO_AND_DESCRIPTION",
      "TEXT_ONLY",
      "VIDEO",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "CPICometCardStackUtils",
  ["recoverableViolation", "scrollIntoView"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (a.current == null) {
        c("recoverableViolation")(
          "Scroll ref is null in scrollToCardStack function, cannot scroll.",
          "community_collaborative"
        );
        b(!1);
        return;
      }
      c("scrollIntoView")(a.current, {
        behavior: "smooth",
        force: !0,
        onScrollComplete: function () {
          return b(!0);
        },
        verticalAlign: "center",
      });
    }
    function b(a, b) {
      return { backgroundImage: "linear-gradient(" + a + "," + b + ")" };
    }
    function d(a) {
      return a === "PHOTO";
    }
    function e(a) {
      return a === "GIF";
    }
    function f(a) {
      return a === "VIDEO";
    }
    function h() {
      return ["PHOTO_AND_DESCRIPTION"];
    }
    g.scrollToCardStack = a;
    g.getGradientBackground = b;
    g.initialContributionIsPhoto = d;
    g.initialContributionIsGIF = e;
    g.initialContributionIsVideo = f;
    g.getQuiltsFallbackReplyFormats = h;
  },
  98
);
__d(
  "composerQuiltsPostTransform",
  ["CPICometCardStackUtils", "Promise", "promiseDone", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, d, e) {
      var f = a.animatedImageAttachments,
        g = a.mediaAttachments,
        i = a.quiltsMetadata;
      if (i == null) return e(d);
      if (Object.keys(i).length === 1 && i.sharedContribution != null)
        return e(d);
      var j = [];
      for (var k in a.mediaUploadStatuses)
        j.push(a.mediaUploadStatuses[k].onFileComplete);
      c("promiseDone")(
        b("Promise")
          .all(j)
          .then(function (a) {
            var b;
            a =
              a == null ? void 0 : (a = a[0]) == null ? void 0 : a.attachmentID;
            b =
              (b = g == null ? void 0 : g[0]) != null
                ? b
                : f == null
                ? void 0
                : f.imageData;
            e(
              babelHelpers["extends"]({}, d, {
                quilt_post_metadata: h(i, b, a),
              })
            );
          })
      );
      return;
    }
    function h(a, b, e) {
      var f = null;
      if (
        b != null &&
        b.fileType === "PHOTO" &&
        (b.entID != null || e != null)
      ) {
        e = b.state === "UPLOADED" || b.state === "PREEXISTING" ? b.entID : e;
        e != null
          ? (f = [
              { attachment: { media: { id: e } }, caption: a.photoDescription },
            ])
          : c("recoverableViolation")(
              "Photo exists in Quilts post composer transform but could not determine photo ent ID to include in mutation. Defaulting to no initial contribution media.",
              "community_collaborative"
            );
      } else
        (b == null ? void 0 : b.fileType) === "GIF" &&
          (b.url != null
            ? (f = [
                {
                  attachment: { link: { external: { url: b.url } } },
                  caption: a.photoDescription,
                },
              ])
            : c("recoverableViolation")(
                "GIF exists in Quilts post composer transform but could not determine GIF url to include in mutation. Defaulting to no initial contribution media.",
                "community_collaborative"
              ));
      return {
        initial_contributions: f,
        original_quilt_id: a.originalQuiltID,
        preset_id: a.formattedTextPresetID,
        quilt_prompt_text: a.promptText,
        reply_formats:
          (e = a.replyFormats) != null
            ? e
            : d("CPICometCardStackUtils").getQuiltsFallbackReplyFormats(),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "BloodDonationPartnerClientEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743174");
    c = b("FalcoLoggerInternal").create(
      "blood_donation_partner_client_event",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "QuiltsCometCreationSentenceFragments_promptSuggestions.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "QuiltsCometCreationSentenceFragments_promptSuggestions",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "suggested_prompts_experience",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "suggested_prompt_sentences",
          storageKey: null,
        },
      ],
      type: "QuiltComposerMetadata",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "QuiltsCometPromptCreationContainerQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "category" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "targetID" },
        ],
        b = [
          {
            items: [
              {
                kind: "Variable",
                name: "categories.0",
                variableName: "category",
              },
            ],
            kind: "ListValue",
            name: "categories",
          },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "preset_id",
          storageKey: null,
        },
        d = [{ kind: "Variable", name: "id", variableName: "targetID" }],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "supported_reply_format_types",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "contributions_are_posts",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "QuiltsCometPromptCreationContainerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Collection",
              kind: "LinkedField",
              name: "visual_composer_satp_collections",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TextFormatMetadata",
                  kind: "LinkedField",
                  name: "presets",
                  plural: !0,
                  selections: [
                    c,
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "FeedComposerCometFormattedTextBackgroundRoot_data",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometComposerFormattedTextArea_formattedTextPreset",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "useCometStatusAreaTextData_formattedTextPreset",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "QuiltComposerMetadata",
                      kind: "LinkedField",
                      name: "quilt_composer_metadata",
                      plural: !1,
                      selections: [
                        e,
                        f,
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "QuiltsCometCreationSentenceFragments_promptSuggestions",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "QuiltTargetProfile",
                  abstractKey: "__isQuiltTargetProfile",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "QuiltsCometPromptCreationContainerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Collection",
              kind: "LinkedField",
              name: "visual_composer_satp_collections",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TextFormatMetadata",
                  kind: "LinkedField",
                  name: "presets",
                  plural: !0,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
                        { kind: "Literal", name: "width", value: 500 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "background_image",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "uri",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "background_color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "background_gradient_color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "background_gradient_direction",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "avatar_story_text_format_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "InspirationsCustomFont",
                      kind: "LinkedField",
                      name: "inspirations_custom_font_object",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "font_name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "preferred_font_size",
                          storageKey: null,
                        },
                        g,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "QuiltComposerMetadata",
                      kind: "LinkedField",
                      name: "quilt_composer_metadata",
                      plural: !1,
                      selections: [
                        e,
                        f,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "suggested_prompts_experience",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "suggested_prompt_sentences",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "QuiltTargetProfile",
                  abstractKey: "__isQuiltTargetProfile",
                },
                g,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4310148419049286",
          metadata: {},
          name: "QuiltsCometPromptCreationContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "QuiltsCometAttachmentPreview.react",
  [
    "CometComposerMediaAttachmentItem.react",
    "FeedComposerCometAnimatedImageAttachmentArea.react",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.attachment;
      switch (a == null ? void 0 : a.fileType) {
        case "PHOTO":
        case "VIDEO":
          return h.jsx(c("CometComposerMediaAttachmentItem.react"), {
            attachment: a,
            withRemoveButton: !1,
          });
        case "GIF":
          return h.jsx(
            c("FeedComposerCometAnimatedImageAttachmentArea.react"),
            {}
          );
        default:
          throw c("unrecoverableViolation")(
            "Unable to display an unsupported media type " +
              ((a == null ? void 0 : a.fileType)
                ? a == null
                  ? void 0
                  : a.fileType
                : "UNKNOWN"),
            "community_collaborative"
          );
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "QuiltsCometCAPPromptCreationDisclaimerPopoverTrigger.react",
  [
    "ix",
    "CometLazyPopoverTrigger.react",
    "JSResourceForInteraction",
    "QuiltsCometConstants",
    "TetraCircleButton.react",
    "fbicon",
    "react",
    "useNUX",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("JSResourceForInteraction")(
        "QuiltsCometCAPPromptCreationDisclaimerPopover.react"
      ).__setRef("QuiltsCometCAPPromptCreationDisclaimerPopoverTrigger.react");
    function a() {
      var a = c("useNUX")(
        d("QuiltsCometConstants").QUILT_CAP_COMPOSER_DISCLAIMER_NUX_ID
      );
      a = a[0];
      return i.jsx(c("CometLazyPopoverTrigger.react"), {
        align: "start",
        popoverProps: {},
        popoverResource: j,
        position: "below",
        preloadTrigger: "button",
        visibleOnLoad: a,
        children: function (a, b, e, f, g, j) {
          return i.jsx(c("TetraCircleButton.react"), {
            color: "white",
            icon: d("fbicon")._(h("479178"), 24),
            label: "Label",
            onHoverIn: f,
            onHoverOut: g,
            onPress: b,
            onPressIn: j,
            ref: a,
            size: 24,
            type: "deemphasized",
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
  "QuiltsCometContributionComposerContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ isContributionComposer: void 0 });
    g["default"] = b;
  },
  98
);
__d(
  "QuiltsCometCreationMediaOption.react",
  [
    "CometPressable.react",
    "CometSkittleIcon.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.ariaLabel,
        d = a.icon,
        e = a.onPress,
        f = a.testid;
      f = a.text;
      return h.jsxs("div", {
        className: "fp4oknrt q0rvokjs gso5pdkr en0ipb6w",
        children: [
          h.jsx(c("CometPressable.react"), {
            "aria-label": b,
            display: "block",
            onPress: e,
            overlayRadius: "50%",
            role: "button",
            testid: void 0,
            children: h.jsx(c("CometSkittleIcon.react"), {
              color: "gray",
              icon: d,
              size: 60,
            }),
          }),
          h.jsx("div", {
            className: "h676nmdw bi6gxh9e oi9244e8 aov4n071",
            children: h.jsx(c("TetraText.react"), {
              align: "center",
              color: "secondary",
              type: "headlineEmphasized4",
              children: f,
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "QuiltsGating",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("1786245");
    }
    function b(a) {
      return a.includes("GIF");
    }
    function d() {
      return c("gkx")("1984294");
    }
    function e() {
      return c("gkx")("1990076");
    }
    function f() {
      return c("gkx")("1942386");
    }
    g.isPaginationEnabled = a;
    g.canSelectGIFs = b;
    g.getCanUploadVideos = d;
    g.getCanUploadGIFs = e;
    g.getIsPastingImageContributionEnabled = f;
  },
  98
);
__d(
  "quiltsCometCardStackUtils",
  [
    "QuiltsCometConstants",
    "QuiltsGating",
    "fileInputAcceptValues",
    "recoverableViolation",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (a === 0) return "start_card";
      else if (a === b - 1) return "end_card";
      else return "contribution_card";
    }
    function b(a, b) {
      var c = -1;
      b = b + c;
      if (b < 0) return void 0;
      c = a[b];
      return c == null ? void 0 : (a = c.legacy_fbid) != null ? a : void 0;
    }
    function e(a, b, d, e) {
      var f = 2e3;
      a != null && a({ focusComposer: !0, scrollToComposer: !0 });
      b != null && b();
      b == null &&
        a != null &&
        c("setTimeout")(function () {
          var a = d();
          a != null
            ? a()
            : c("recoverableViolation")(
                "Could not access uploadMedia UFI action from Quilt post utils",
                "community_collaborative"
              );
        }, f);
      b == null &&
        a == null &&
        e != null &&
        (c("recoverableViolation")(
          "Could not connect to UFI actions to initiate a new Quilt contribution.",
          "community_collaborative"
        ),
        e());
    }
    function f(a) {
      switch (a) {
        case "VIDEO":
        case "GIF":
          return "contain";
        case "PHOTO":
        default:
          return "cover";
      }
    }
    function h() {
      var a = d("QuiltsCometConstants").IMAGE_TYPES_SUPPORTED_ON_QUILTS;
      d("QuiltsGating").getCanUploadGIFs() &&
        (a = d("fileInputAcceptValues").PHOTO);
      d("QuiltsGating").getCanUploadVideos() &&
        (a = a.concat(d("fileInputAcceptValues").VIDEO));
      return a;
    }
    function i(a) {
      return a === "%future added value" || a == null ? "unspecified" : a;
    }
    g.getCardTypeFromIndex = a;
    g.getContributionIDFromCardStack = b;
    g.attemptUFIPhotoUpload = e;
    g.getQuiltsCoverMode = f;
    g.getQuiltsSupportedUploadTypes = h;
    g.getCardStackRenderLocationForLogging = i;
  },
  98
);
__d(
  "QuiltsCometCreationImageUploader.react",
  [
    "fbt",
    "ix",
    "CometFileSelector.react",
    "CometPressable.react",
    "QuiltsCometConstants",
    "QuiltsCometContributionComposerContext",
    "QuiltsCometCreationMediaOption.react",
    "QuiltsGating",
    "TetraText.react",
    "TetraTextPairing.react",
    "cometPushToast",
    "deferredLoadComponent",
    "fbicon",
    "qex",
    "quiltsCometCardStackUtils",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "stylex",
    "useCometComposerPushPage",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = c("deferredLoadComponent")(
        c("requireDeferred")(
          "CometAnimatedImagePickerCardContainer.react"
        ).__setRef("QuiltsCometCreationImageUploader.react")
      ),
      n = {
        cardContentWrapper: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          justifyContent: "taijpn5t",
          paddingTop: "discj3wi",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "ihqw7lf3",
          paddingStart: "dati1w0a",
        },
        hiddenHandlePasteInput: {
          opacity: "b5wmifdl",
          pointerEvents: "hzruof5a",
          position: "pmk7jnqg",
        },
        linkWrapper: {
          display: "j83agx80",
          justifyContent: "taijpn5t",
          marginTop: "aov4n071",
          paddingTop: "discj3wi",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "ihqw7lf3",
          paddingStart: "dati1w0a",
        },
        optionsContainer: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          justifyContent: "taijpn5t",
        },
        pushPageGlimmer: { height: "dzxlk3l3" },
        subtitleWrapper: {
          paddingTop: "jb3vyjys",
          paddingEnd: "f7xckc39",
          paddingBottom: "qt6c0cv9",
          paddingStart: "jkruzzuk",
        },
      };
    function a(a) {
      var b = a.autoFocusHiddenPasteInput;
      b = b === void 0 ? !0 : b;
      var e = a.onFilesPasted,
        f = a.onGIFSelected,
        g = a.onImageSelected,
        o = a.onPress;
      a = a.replyFormats;
      var p = c("useCometComposerPushPage")(),
        q = k(
          function (a) {
            a = Array.from(a);
            if (a.length === 0) return;
            g(a[0]);
          },
          [g]
        ),
        r = function () {
          p != null
            ? p(
                h._("Choose a GIF"),
                function (a) {
                  a = a.onReturn;
                  return j.jsx(m, { onClose: a, onSelect: f, withPopover: !1 });
                },
                { xstyle: n.pushPageGlimmer }
              )
            : (c("recoverableViolation")(
                "Cannot display a null push page.",
                "community_collaborative"
              ),
              d("cometPushToast").cometPushErrorToast({
                message: h._("Something went wrong"),
              }));
        };
      b = j.jsx("input", {
        autoFocus: b,
        className: c("stylex")(n.hiddenHandlePasteInput),
        onPaste: e,
      });
      e = l(c("QuiltsCometContributionComposerContext"));
      var s = e.isContributionComposer;
      if (d("QuiltsGating").canSelectGIFs(a)) {
        return j.jsxs("div", {
          className: c("stylex")(n.cardContentWrapper),
          children: [
            b,
            j.jsx(c("TetraTextPairing.react"), {
              body:
                s === !1 &&
                j.jsx("div", {
                  className: c("stylex")(n.subtitleWrapper),
                  children: j.jsx(c("TetraText.react"), {
                    color: "secondary",
                    type: "body3",
                    children: c("qex")._("1917964"),
                  }),
                }),
              headline: s === !1 && c("qex")._("1917965"),
              level: 3,
              textAlign: "center",
            }),
            j.jsxs("div", {
              className: c("stylex")(n.optionsContainer),
              children: [
                j.jsx("div", {
                  children: j.jsx(c("CometFileSelector.react"), {
                    accept: d(
                      "quiltsCometCardStackUtils"
                    ).getQuiltsSupportedUploadTypes(),
                    multiple: !1,
                    onFilesSelected: q,
                    children: function (a) {
                      var b;
                      return j.jsx(c("QuiltsCometCreationMediaOption.react"), {
                        ariaLabel:
                          (b = c("qex")._("1917966")) != null
                            ? b
                            : h._("Photo"),
                        icon: d("fbicon")._(i("481801"), 24),
                        onPress: function () {
                          o("PHOTO_AND_DESCRIPTION"), a();
                        },
                        testid: void 0,
                        text: c("qex")._("1917966"),
                      });
                    },
                  }),
                }),
                j.jsx("div", {
                  children: j.jsx(c("QuiltsCometCreationMediaOption.react"), {
                    ariaLabel:
                      (e = c("qex")._("1917967")) != null ? e : h._("GIF"),
                    icon: d("fbicon")._(i("687979"), 24),
                    onPress: function () {
                      o("GIF"), r();
                    },
                    testid: void 0,
                    text: c("qex")._("1917967"),
                  }),
                }),
              ],
            }),
          ],
        });
      } else
        return j.jsxs(j.Fragment, {
          children: [
            b,
            j.jsx(c("CometFileSelector.react"), {
              accept: d("QuiltsCometConstants").IMAGE_TYPES_SUPPORTED_ON_QUILTS,
              multiple: !1,
              onFilesSelected: q,
              children: function (a) {
                return j.jsxs(c("CometPressable.react"), {
                  display: "block",
                  onPress: function () {
                    o("PHOTO_AND_DESCRIPTION"), a();
                  },
                  role: "button",
                  testid: void 0,
                  xstyle: n.cardContentWrapper,
                  children: [
                    j.jsx(c("TetraTextPairing.react"), {
                      body:
                        s === !1 &&
                        j.jsx(c("TetraText.react"), {
                          color: "secondary",
                          type: "body3",
                          children: h._(
                            "Adding your own helps get your post started and encourages others to join in."
                          ),
                        }),
                      headline: s === !1 && h._("Add Your Own Contribution"),
                      level: 3,
                      textAlign: "center",
                    }),
                    j.jsx("div", {
                      className: c("stylex")(n.linkWrapper),
                      children: j.jsx(c("TetraText.react"), {
                        color: "blueLink",
                        type: "bodyLink3",
                        children: h._("Choose a photo"),
                      }),
                    }),
                  ],
                });
              },
            }),
          ],
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "QuiltsCometCreationImageInput.react",
  ["BaseTextInput.react", "CometTextInputStyles.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        container: { color: "r3a3w3nh", flexGrow: "buofh1pr" },
        inputXStyle: {
          backgroundColor: "rt97infa",
          color: "ljqsnud1",
          fontSize: "b0k1zwb0",
          height: "fbzcu06b",
          paddingTop: "pybr56ya",
          paddingEnd: "d1544ag0",
          paddingBottom: "f10w8fjw",
          paddingStart: "tw6a2znq",
          resize: "ieid39z1",
          ":focus": {
            backgroundColor: "aoqz614o",
            borderTopColor: "bs68lrl8",
            borderEndColor: "f56r29tw",
            borderBottomColor: "e16z4an2",
            borderStartColor: "ei4baabg",
          },
        },
        label: {
          color: "gmql0nx0",
          display: "a8c37x1j",
          fontSize: "l94mrbxd",
          paddingBottom: "ae35evdt",
        },
      },
      j = 3e4;
    function a(a, b) {
      var d = a.disabled,
        e = d === void 0 ? !1 : d,
        f = a.label;
      d = a.labelIsHidden;
      var g = d === void 0 ? !1 : d,
        k = a.onValueChange,
        l = a.value,
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          "disabled",
          "label",
          "labelIsHidden",
          "onValueChange",
          "value",
        ]);
      return h.jsxs("label", {
        className: c("stylex")(i.container),
        children: [
          !g && h.jsx("div", { className: c("stylex")(i.label), children: f }),
          h.jsx(c("CometTextInputStyles.react"), {
            dimension: "single",
            disabled: e,
            children: function (a) {
              return h.jsx(
                c("BaseTextInput.react"),
                babelHelpers["extends"]({}, m, {
                  "aria-label": g ? f : void 0,
                  disabled: e,
                  maxLength: j,
                  onValueChange: k,
                  ref: b,
                  type: "textarea",
                  value: l,
                  xstyle: [a, i.inputXStyle],
                })
              );
            },
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "QuiltsCometCreationMediaPreview.react",
  [
    "fbt",
    "ix",
    "CPICometCardStackUtils",
    "CometObjectFitContainerNext.react",
    "QuiltsCometAttachmentPreview.react",
    "QuiltsCometConstants",
    "QuiltsCometCreationImageInput.react",
    "TetraCircleButton.react",
    "fbicon",
    "qex",
    "react",
    "useStoriesDominantColorPicker",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.aspectRatio,
        e = a.descriptionValue,
        f = a.media,
        g = a.onPhotoDescriptionChange;
      a = a.onRemove;
      var k, l;
      f.height != null && f.width != null && ((k = f.height), (l = f.width));
      var m = k != null && k !== 0 && l != null ? l / k : b,
        n = f.url != null ? f.url : null;
      n = c("useStoriesDominantColorPicker")({
        defaultBottomColor: d("QuiltsCometConstants").BLACK,
        defaultTopColor: d("QuiltsCometConstants").BLACK,
        imageURL: n,
      });
      n = d("CPICometCardStackUtils").getGradientBackground(
        n.topColor,
        n.bottomColor
      );
      var o = h._("Say something about this photo\u2026"),
        p =
          f.fileType === "PHOTO"
            ? c("qex")._("1948744")
            : c("qex")._("1948745");
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx("div", {
            className: "cwj9ozl2",
            style: n,
            children: j.jsx(c("CometObjectFitContainerNext.react"), {
              containerAspectRatio: b,
              contentAspectRatio: m,
              mode: d("CPICometCardStackUtils").initialContributionIsPhoto(
                f.fileType
              )
                ? "cover"
                : "contain",
              children: j.jsx(c("QuiltsCometAttachmentPreview.react"), {
                attachment: f,
              }),
            }),
          }),
          j.jsx("div", {
            className:
              "k4urcfbm pmk7jnqg dati1w0a hv4rvrfc taijpn5t j83agx80 rq0escxv lfi1tu6t",
            children: j.jsx(c("QuiltsCometCreationImageInput.react"), {
              label: (n = p) != null ? n : o,
              labelIsHidden: !0,
              onValueChange: g,
              placeholder: (b = p) != null ? b : o,
              testid: void 0,
              value: e,
            }),
          }),
          j.jsx("div", {
            className: "plgsh5y4 pmk7jnqg b5fwa0m2 j83agx80",
            children: j.jsx(c("TetraCircleButton.react"), {
              icon: d("fbicon")._(i("478233"), 20),
              label: h._("Remove image"),
              onPress: a,
              size: 32,
              testid: void 0,
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "composerQuiltsPostReducer",
  ["composerAttachmentAreaReducer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      switch (b.type) {
        case "ADD_QUILT_ATTACHMENT":
          return babelHelpers["extends"]({}, a, {
            quiltsMetadata: babelHelpers["extends"]({}, a.quiltsMetadata, {
              draftText: null,
              formattedTextPresetID: b.formattedTextPresetID,
              promptText: b.promptText,
            }),
          });
        case "REMOVE_ATTACHMENT_TYPE":
          var c = d("composerAttachmentAreaReducer").getCanAlterAttachmentData(
            b,
            "QUILT",
            a
          );
          if (c) {
            return babelHelpers["extends"]({}, a, {
              quiltsMetadata: {
                replyFormats:
                  (c = a.quiltsMetadata) == null ? void 0 : c.replyFormats,
              },
            });
          }
          return a;
        case "SAVE_QUILT_DRAFT_TEXT":
          return babelHelpers["extends"]({}, a, {
            quiltsMetadata: babelHelpers["extends"]({}, a.quiltsMetadata, {
              draftText: b.draftText,
            }),
          });
        case "ADD_QUILTS_REPLY_FORMATS":
          return babelHelpers["extends"]({}, a, {
            quiltsMetadata: babelHelpers["extends"]({}, a.quiltsMetadata, {
              replyFormats: b.replyFormats,
            }),
          });
        case "UPDATE_QUILT_PHOTO_DESCRIPTION":
          return babelHelpers["extends"]({}, a, {
            quiltsMetadata: babelHelpers["extends"]({}, a.quiltsMetadata, {
              photoDescription: b.photoDescription,
            }),
          });
        default:
          return a;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerQuiltAnimatedImageStateChecker",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c;
      return (
        (b == null
          ? void 0
          : (c = b.attachmentArea) == null
          ? void 0
          : c.activeAttachmentType) === "QUILT" &&
        (a == null
          ? void 0
          : (c = a.animatedImageAttachments) == null
          ? void 0
          : (a = c.imageData) == null
          ? void 0
          : a.url) !==
          (b == null
            ? void 0
            : (c = b.animatedImageAttachments) == null
            ? void 0
            : (a = c.imageData) == null
            ? void 0
            : a.url)
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "extractFilesFromClipboardEvent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a = a.clipboardData;
      a = a.items != null ? Array.from(a.items) : [];
      a = a
        .map(function (a) {
          return a.getAsFile();
        })
        .filter(Boolean);
      a = b
        ? a.filter(function (a) {
            return b.includes(a.type);
          })
        : a;
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "useQuiltsCreationLogger",
  ["react", "useCometComposerLoggerDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b) {
      var d = c("useCometComposerLoggerDispatcher")(),
        e = h(
          function (c, e) {
            d({
              fields: babelHelpers["extends"](
                {
                  contribution_format:
                    e == null ? void 0 : e.contribution_format,
                  edit_session_id: a,
                  source: b,
                },
                e
              ),
              type: c,
            });
          },
          [a, d, b]
        );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useQuiltsCometUploadContribution",
  [
    "QuiltsCometConstants",
    "QuiltsCometContributionComposerContext",
    "composerAnimatedImageReducers",
    "composerMediaAttachmentReducer",
    "composerMediaAttachmentStateChecker",
    "composerQuiltAnimatedImageStateChecker",
    "extractFilesFromClipboardEvent",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "useQuiltsCreationLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a(a, b, e) {
      var f = c("useComposerViewStateDispatcher")();
      c("useComposerViewStateReducer")(
        c("composerMediaAttachmentReducer"),
        c("composerMediaAttachmentStateChecker")
      );
      c("useComposerViewStateReducer")(
        c("composerAnimatedImageReducers"),
        c("composerQuiltAnimatedImageStateChecker")
      );
      var g = c("useQuiltsCreationLogger")(a, b);
      a = function () {
        g("QUILTS_REMOVE_INITIAL_CONTRIBUTION", { contribution_format: e }),
          f({ type: "REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS" });
      };
      b = h(c("QuiltsCometContributionComposerContext"));
      var i = b.isContributionComposer,
        j = function (a) {
          g("QUILTS_ADD_INITIAL_CONTRIBUTION", {
            contribution_format: "PHOTO_AND_DESCRIPTION",
            is_contribution_composer: i,
          }),
            f({ files: [a], type: "ADD_MEDIA_ATTACHMENT_ITEMS" });
        };
      b = function (a) {
        g("QUILTS_ADD_INITIAL_CONTRIBUTION", {
          contribution_format: "GIF",
          is_contribution_composer: i,
        }),
          f({
            height: a.source.height,
            metadata: {
              key: a.resultID,
              source: a.source.gifSource,
              tags: a.source.tags,
              title: a.source.title,
              url: a.source.url,
            },
            type: "SELECT_ANIMATED_IMAGE",
            url: a.source.url,
            width: a.source.width,
          });
      };
      var k = function (a) {
        var b = c("extractFilesFromClipboardEvent")(
          a,
          d("QuiltsCometConstants").IMAGE_TYPES_SUPPORTED_ON_QUILTS
        );
        b = b[0];
        b && (a.preventDefault(), j(b));
      };
      return {
        onAddContribution: j,
        onAddGIFContribution: b,
        onFilesPasted: k,
        onRemoveContribution: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "QuiltsCometContributionUploader.react",
  [
    "CPICometCardStackUtils",
    "CometCard.react",
    "CometComposerHeadlessMediaUploader.react",
    "QuiltsCometContributionComposerContext",
    "QuiltsCometCreationImageUploader.react",
    "QuiltsCometCreationMediaPreview.react",
    "QuiltsGating",
    "composerQuiltsPostReducer",
    "emptyFunction",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "useQuiltsCometUploadContribution",
    "useQuiltsCreationLogger",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = 432,
      k = 576;
    function a(a) {
      var b,
        e = a.animatedImageAttachments,
        f = a.editSessionID,
        g = a.mediaAttachments;
      a = a.quiltsMetadata;
      g =
        (g = g == null ? void 0 : g[0]) != null
          ? g
          : e == null
          ? void 0
          : e.imageData;
      var l = d("CPICometCardStackUtils").initialContributionIsGIF(
          g == null ? void 0 : g.fileType
        )
          ? "GIF"
          : "PHOTO_AND_DESCRIPTION",
        m = c("useQuiltsCreationLogger")(f, a == null ? void 0 : a.editSource);
      e = i(c("QuiltsCometContributionComposerContext"));
      var n = e.isContributionComposer;
      e = c("useQuiltsCometUploadContribution")(
        f,
        a == null ? void 0 : a.editSource,
        l
      );
      f = e.onAddContribution;
      var o = e.onAddGIFContribution,
        p = e.onFilesPasted;
      e = e.onRemoveContribution;
      p = d("QuiltsGating").getIsPastingImageContributionEnabled()
        ? p
        : c("emptyFunction");
      var q = function (a) {
        return m("QUILTS_CONTRIBUTION_PRESS_MEDIA_UPLOAD", {
          contribution_format: a,
          is_contribution_composer: n,
        });
      };
      c("useComposerViewStateReducer")(c("composerQuiltsPostReducer"));
      var r = c("useComposerViewStateDispatcher")(),
        s = (b = a == null ? void 0 : a.photoDescription) != null ? b : "";
      b = function (a) {
        s.length === 0 &&
          a.length > 0 &&
          m("QUILTS_ADD_CONTRIBUTION_CAPTION", {
            contribution_format: l,
            is_contribution_composer: n,
          }),
          r({ photoDescription: a, type: "UPDATE_QUILT_PHOTO_DESCRIPTION" });
      };
      return h.jsxs("div", {
        onPaste: p,
        children: [
          h.jsx(c("CometComposerHeadlessMediaUploader.react"), {
            mediaUploadLoggingMetadata: {
              composerEntrypoint: "comet_sprouts",
              source: "composer",
            },
          }),
          h.jsx("div", {
            className:
              "alziiujr f9o22wc5 nzypyw8j ad2k81qe bcvklqu9 qu0jweey j83agx80 rq0escxv",
            children: h.jsx(c("CometCard.react"), {
              border: "inset",
              dropShadow: 2,
              expanding: !0,
              children:
                g != null
                  ? h.jsx(c("QuiltsCometCreationMediaPreview.react"), {
                      aspectRatio: j / k,
                      descriptionValue: s,
                      media: g,
                      onPhotoDescriptionChange: b,
                      onRemove: e,
                    })
                  : h.jsx(c("QuiltsCometCreationImageUploader.react"), {
                      onFilesPasted: p,
                      onGIFSelected: o,
                      onImageSelected: f,
                      onPress: q,
                      replyFormats:
                        (g = a == null ? void 0 : a.replyFormats) != null
                          ? g
                          : d(
                              "CPICometCardStackUtils"
                            ).getQuiltsFallbackReplyFormats(),
                    }),
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return {
        animatedImageAttachments: a.animatedImageAttachments,
        mediaAttachments: a.mediaAttachments,
        quiltsMetadata: a.quiltsMetadata,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "calculateDynamicQuiltsTextStyle",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null || a.length === 0)
        return { fontSize: 40, lineHeightInPx: "45px" };
      a = a.length;
      if (a > 340) return { fontSize: 20, lineHeightInPx: "27px" };
      if (a > 150) return { fontSize: 24, lineHeightInPx: "27px" };
      return a > 80
        ? { fontSize: 32, lineHeightInPx: "37px" }
        : { fontSize: 40, lineHeightInPx: "45px" };
    }
    f["default"] = a;
  },
  66
);
__d(
  "QuiltsCometCreationSATPProvider.react",
  ["CometComposerSATPContext", "calculateDynamicQuiltsTextStyle", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    b = 35;
    e = 340;
    d = "41px";
    var j = {
      customSATPCategory: "ASPECT_RATIO_AGNOSTIC",
      emojiPickerIsHidden: !0,
      satpContainerIsResponsive: !0,
      satpExploreIsDisabled: !0,
      satpFontSize: b,
      satpLineHeightInPx: d,
      satpRemovalIsDisabled: !0,
      satpTextCharLimit: e,
      satpTextVerticalAlignment: "center",
    };
    function a(a) {
      var b = a.children;
      a = a.promptText;
      a = c("calculateDynamicQuiltsTextStyle")(a);
      var d = a.fontSize,
        e = a.lineHeightInPx;
      a = i(
        function () {
          return babelHelpers["extends"]({}, j, {
            satpFontSize: d,
            satpLineHeightInPx: e,
          });
        },
        [d, e]
      );
      return h.jsx(c("CometComposerSATPContext").Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "QuiltSuggestedPromptsExperience.facebook",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum").Mirrored([
      "FULL_SENTENCES",
      "NONE",
      "SENTENCE_FRAGMENTS",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "QuiltsCometCreationSentenceFragments.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "CometLegacyHScroll.react",
    "CometLegacyHScrollChild.react",
    "CometPressable.react",
    "CometRelay",
    "QuiltsCometCreationSentenceFragments_promptSuggestions.graphql",
    "TetraCircleButton.react",
    "TetraText.react",
    "composerEditorStateViewStateReducer",
    "createCometComposerEditorStateFromTextWithEntities",
    "emptyFunction",
    "fbicon",
    "react",
    "stylex",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "useQuiltsCreationLogger",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useEffect,
      m = e.useRef,
      n = 128,
      o = 4;
    3 / 4;
    var p = "\u2026";
    function a(a) {
      var e = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b(
                "QuiltsCometCreationSentenceFragments_promptSuggestions.graphql"
              )),
          a.suggestions$key
        ),
        f = c("useComposerViewStateDispatcher")(),
        g = c("useQuiltsCreationLogger")(a.editSessionID),
        r = m(!1);
      c("useComposerViewStateReducer")(
        c("composerEditorStateViewStateReducer")
      );
      l(
        function () {
          r.current || ((r.current = !0), g("QUILTS_VIEW_SENTENCE_FRAGMENTS"));
        },
        [g]
      );
      var s = function (b) {
          var d = c("createCometComposerEditorStateFromTextWithEntities")(
            { ranges: [], text: b },
            c("emptyFunction")
          );
          f({ editorState: d, type: "update_editor_state" });
          a.onSelect(b);
        },
        t = e == null ? void 0 : e.suggested_prompt_sentences,
        u = e == null ? void 0 : e.suggested_prompts_experience;
      if (u === "NONE" || t == null || t.length === 0) return null;
      e = t.map(function (a, b) {
        return k.jsx(
          c("CometLegacyHScrollChild.react"),
          {
            width: n + o,
            children: k.jsx(c("CometPressable.react"), {
              onPress: function () {
                return s(a);
              },
              overlayRadius: 8,
              children: k.jsx(c("CometCard.react"), {
                background: "light-wash",
                children: k.jsx("div", {
                  className: c("stylex").dedupe(
                    {
                      "align-items-1": "bp9cbjyn",
                      "box-sizing-1": "rq0escxv",
                      "display-1": "j83agx80",
                      "justify-content-1": "taijpn5t",
                      "padding-top-1": "pybr56ya",
                      "padding-end-1": "d1544ag0",
                      "padding-bottom-1": "f10w8fjw",
                      "padding-start-1": "tw6a2znq",
                      "width-1": "k5ud4834",
                    },
                    u === "SENTENCE_FRAGMENTS"
                      ? { "height-1": "rdkrh8wx" }
                      : null,
                    u === "FULL_SENTENCES"
                      ? { "height-1": "btgtmlwi", "text-align-1": "oqcyycmt" }
                      : null
                  ),
                  children: k.jsxs(c("TetraText.react"), {
                    color: "secondary",
                    type: "bodyLink3",
                    children: [a, u === "SENTENCE_FRAGMENTS" && p],
                  }),
                }),
              }),
            }),
          },
          a + b
        );
      });
      t = q((t = u) != null ? t : "NONE");
      var v = t.subtitleText;
      t = t.titleText;
      return k.jsxs("div", {
        className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
        children: [
          k.jsxs("div", {
            className: "i1fnvgqd btwxx1t3 j83agx80 bp9cbjyn",
            children: [
              t != null &&
                k.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized2",
                  children: t,
                }),
              k.jsx(c("TetraCircleButton.react"), {
                color: "secondary",
                icon: d("fbicon")._(i("478231"), 12),
                label: h._("Close"),
                onPress: a.onDismiss,
                size: 24,
                testid: void 0,
              }),
            ],
          }),
          v != null &&
            k.jsx("div", {
              className: "aov4n071",
              children: k.jsx(c("TetraText.react"), {
                type: "body3",
                children: v,
              }),
            }),
          k.jsx("div", {
            className: "tr9rh885",
            children: k.jsx(c("CometLegacyHScroll.react"), {
              accessibilityLabel: h._("Write a Prompt"),
              children: e,
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function q(a) {
      switch (a) {
        case "SENTENCE_FRAGMENTS":
          return { subtitleText: null, titleText: h._("Prompt Ideas") };
        case "FULL_SENTENCES":
          return {
            subtitleText: h._("Create your own or use one of these ideas."),
            titleText: h._("Ideas to Get Started"),
          };
        case "NONE":
        default:
          return { subtitleText: null, titleText: null };
      }
    }
    e = c("withComposerViewStatePart")(a, function (a) {
      return { editorState: a.editorState };
    });
    g["default"] = e;
  },
  98
);
__d(
  "QuiltsCometCreationViewStateBridge.react",
  [
    "CometComposerSATPContext",
    "react",
    "useCPICometTextLimitHandler",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useContext,
      i = b.useEffect;
    function a(a) {
      var b = a.editorState,
        d = a.onChange,
        e = a.onTextLimitReached,
        f = a.textPreset;
      a = h(c("CometComposerSATPContext"));
      a = a.satpTextCharLimit;
      var g = 50;
      c("useCPICometTextLimitHandler")((a = a) != null ? a : g, e);
      i(
        function () {
          b != null && d(b, f);
        },
        [d, b, f]
      );
      return null;
    }
    e = c("withComposerViewStatePart")(a, function (a) {
      return {
        editorState: a.editorState,
        textPreset:
          (a = a.formattedText) == null ? void 0 : a.currentFormattedTextPreset,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "QuiltsCometCreationViewStateProvider.react",
  [
    "CometComposerAttachmentPluginTypes",
    "CometEmptyComposerViewStateProvider.react",
    "QuiltsCometCreationSATPProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.beginningViewState,
        d = a.children;
      a = a.promptText;
      var e = Object.keys(c("CometComposerAttachmentPluginTypes"));
      e = e.filter(function (a) {
        return a !== c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT;
      });
      return h.jsx(c("QuiltsCometCreationSATPProvider.react"), {
        promptText: a,
        children: h.jsx(c("CometEmptyComposerViewStateProvider.react"), {
          beginningViewState: b,
          ineligibleAttachmentPlugins: e,
          children: d,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "QuiltsCometUploadContributionContainer.react",
  [
    "fbt",
    "QuiltsCometContributionUploader.react",
    "TetraButton.react",
    "react",
    "useQuiltsCreationLogger",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.editSessionID,
        d = a.onComplete;
      a = a.quiltsMetadata;
      var e = c("useQuiltsCreationLogger")(
        b,
        a == null ? void 0 : a.editSource
      );
      a = function () {
        e("QUILTS_CREATION_PRESS_DONE"), d();
      };
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("QuiltsCometContributionUploader.react"), {
            editSessionID: b,
          }),
          i.jsx("div", {
            className: "ozuftl9m tvfksri0 sjgh65i0",
            children: i.jsx(c("TetraButton.react"), {
              label: h._("Done"),
              onPress: a,
              testid: void 0,
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return { quiltsMetadata: a.quiltsMetadata };
    });
    g["default"] = b;
  },
  98
);
__d(
  "useCPICometComposerFocus",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function a() {
      var a = i(null),
        b = j(0),
        c = b[0],
        d = b[1];
      h(
        function () {
          var b;
          (b = a.current) == null ? void 0 : b.focusEnd();
        },
        [c]
      );
      return {
        focusComposer: function () {
          return d(c + 1);
        },
        ref: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "QuiltsCometPromptCreationContainer.react",
  [
    "fbt",
    "Actor",
    "CPICometCardStackUtils",
    "CometComposerHeader.react",
    "CometComposerPushPageContext",
    "CometComposerStatusAreaRelayWithSwatches.react",
    "CometRelay",
    "FeedComposerCometFormattedTextArea.react",
    "GroupCometComposerContext",
    "Promise",
    "QuiltsCometCAPPromptCreationDisclaimerPopoverTrigger.react",
    "QuiltsCometCreationViewStateBridge.react",
    "QuiltsCometCreationViewStateProvider.react",
    "QuiltsCometPromptCreationContainerQuery.graphql",
    "QuiltsCometUploadContributionContainer.react",
    "TetraButton.react",
    "UnicodeUtils",
    "WebPixelRatio",
    "composerAttachmentAreaReducer",
    "composerQuiltsPostReducer",
    "cr:1806770",
    "createCometComposerEditorStateFromTextWithEntities",
    "emptyFunction",
    "getPlainTextFromDeferredDraftEditorState",
    "react",
    "recoverableViolation",
    "stylex",
    "useCPICometComposerFocus",
    "useCometComposerPushPage",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "useEditSessionID",
    "useNullthrowsViolation",
    "usePrevious",
    "useQuiltsCometUploadContribution",
    "useQuiltsCreationLogger",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useRef,
      o = e.useState,
      p = "230941821523327",
      q = 1;
    function a(a) {
      var e,
        f,
        g = a.composerTarget,
        r = a.metadata,
        s = a.onCreate,
        t = a.onExit;
      a = l(c("GroupCometComposerContext"));
      a = a.groupID;
      var u = d("Actor").useActor();
      u = u[0];
      e = d("CometRelay").useLazyLoadQuery(
        i !== void 0
          ? i
          : (i = b("QuiltsCometPromptCreationContainerQuery.graphql")),
        {
          category: "ASPECT_RATIO_AGNOSTIC",
          scale: d("WebPixelRatio").get(),
          targetID:
            (e = (e = g == null ? void 0 : g.id) != null ? e : a) != null
              ? e
              : u,
        }
      );
      (g == null ? void 0 : g.id) == null &&
        a == null &&
        c("recoverableViolation")(
          "Quilt creation query was forced to use actor ID for QuiltTargetProfile check. This is sketchy.",
          "community_collaborative"
        );
      a =
        (u = e.visual_composer_satp_collections) == null
          ? void 0
          : (g = u[0]) == null
          ? void 0
          : g.presets;
      u =
        a == null
          ? void 0
          : a.find(function (a) {
              return (a == null ? void 0 : a.preset_id) === p;
            });
      u = c("useNullthrowsViolation")(
        (g = u) != null ? g : a == null ? void 0 : a[0],
        "Unable to find default preset nor first preset for Quilts SATP collection."
      );
      g = o(
        (a =
          (g = r == null ? void 0 : r.promptText) != null
            ? g
            : r == null
            ? void 0
            : r.draftText) != null
          ? a
          : ""
      );
      var v = g[0],
        w = g[1];
      a = o(u);
      var x = a[0],
        y = a[1],
        z = c("usePrevious")(v),
        A = c("usePrevious")(x);
      g = o(!1);
      a = g[0];
      var B = g[1],
        C = c("useComposerViewStateDispatcher")(),
        D = c("useCometComposerPushPage")(),
        E = c("useEditSessionID")();
      g = c("useCPICometComposerFocus")();
      var F = g.focusComposer;
      g = g.ref;
      var G = n(!1),
        H = c("useQuiltsCreationLogger")(E, r == null ? void 0 : r.editSource),
        I =
          (f =
            (f = e.node) == null
              ? void 0
              : (f = f.quilt_composer_metadata) == null
              ? void 0
              : f.supported_reply_format_types) != null
            ? f
            : d("CPICometCardStackUtils").getQuiltsFallbackReplyFormats();
      m(
        function () {
          G.current || ((G.current = !0), H("QUILTS_EDIT_ATTACHMENT"));
        },
        [H]
      );
      m(
        function () {
          (z == null ? void 0 : z.length) === 0 &&
            v.length > 0 &&
            H("QUILTS_ADD_PROMPT_TEXT");
        },
        [H, z, v]
      );
      m(
        function () {
          A != null &&
            x.preset_id !== A.preset_id &&
            H("QUILTS_CHANGE_BACKGROUND_COLOR");
        },
        [H, A, x]
      );
      c("useQuiltsCometUploadContribution")(
        E,
        r == null ? void 0 : r.editSource
      );
      c("useComposerViewStateReducer")(c("composerQuiltsPostReducer"));
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer
      );
      var J = function () {
        return new (b("Promise"))(function (a) {
          H("QUILTS_REMOVE_ATTACHMENT"),
            C({ type: "REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS" }),
            a(!0);
        });
      };
      f = function () {
        H("QUILTS_EXIT_CREATION_FLOW"), t();
      };
      r = function (a) {
        H("QUILTS_CLICK_SENTENCE_FRAGMENT", { sentence_fragment: a }), F();
      };
      var K = function () {
          var a = x.preset_id;
          if (a == null) {
            c("recoverableViolation")(
              "Tried to add an Quilt attachment with null preset ID.",
              "community_collaborative"
            );
            return;
          }
          C({
            formattedTextPresetID: a,
            promptText: v,
            type: "ADD_QUILT_ATTACHMENT",
          });
          C({
            attachmentType: "QUILT",
            onRemove: J,
            type: "ACTIVATE_ATTACHMENT_TYPE",
          });
          s();
        },
        L = function () {
          if (D == null) {
            c("recoverableViolation")(
              "Unable to get reference to pushPage to continue to Quilt photo upload in creation flow",
              "community_collaborative"
            );
            return;
          }
          C({ replyFormats: I, type: "ADD_QUILTS_REPLY_FORMATS" });
          D(h._("Write a Prompt"), function () {
            return j.jsx(c("CometComposerPushPageContext").Provider, {
              value: D,
              children: j.jsx(
                c("QuiltsCometUploadContributionContainer.react"),
                { editSessionID: E, onComplete: K }
              ),
            });
          });
          H("QUILTS_PROMPT_PRESS_NEXT");
        },
        M = k(
          function (a, b) {
            if (a != null) {
              a = c("getPlainTextFromDeferredDraftEditorState")(a);
              w(a);
              C({ draftText: a, type: "SAVE_QUILT_DRAFT_TEXT" });
              b != null && b.preset_id != null && y(b);
            }
          },
          [C, w, y]
        );
      u = {
        attachmentArea: { activeAttachmentType: "FORMATTED_TEXT" },
        editorState: c("createCometComposerEditorStateFromTextWithEntities")(
          { ranges: [], text: v },
          c("emptyFunction")
        ),
        formattedText: { currentFormattedTextPreset: u, satpBarIsExpanded: !0 },
        formattingType: "SATP",
      };
      var N = (v != null && v.length > 0) || a;
      return j.jsx(c("QuiltsCometCreationViewStateProvider.react"), {
        beginningViewState: u,
        promptText: v,
        children: j.jsxs(j.Fragment, {
          children: [
            j.jsx(c("QuiltsCometCreationViewStateBridge.react"), {
              onChange: M,
              onTextLimitReached: function () {
                return H("QUILTS_PROMPT_EXCEEDS_LIMIT");
              },
            }),
            j.jsx(c("CometComposerHeader.react"), {
              onBack: f,
              title: h._("Write a Prompt"),
              withBackButton: !0,
            }),
            j.jsx("div", {
              className:
                "alziiujr l9j0dhe7 stjgntxs ni8dbmo4 f9o22wc5 nzypyw8j ad2k81qe bcvklqu9 qu0jweey l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
              children: j.jsx(c("FeedComposerCometFormattedTextArea.react"), {
                children: j.jsxs("div", {
                  className:
                    "k4urcfbm gc9h2q4k n722owx4 datstx6m cbu4d94t j83agx80 rq0escxv",
                  "data-testid": void 0,
                  children: [
                    ((u = e.node) == null
                      ? void 0
                      : (M = u.quilt_composer_metadata) == null
                      ? void 0
                      : M.contributions_are_posts) === !0 &&
                      j.jsx("div", {
                        className: "tghn160j dn56xbwz re5koujm pmk7jnqg",
                        children: j.jsx(
                          c(
                            "QuiltsCometCAPPromptCreationDisclaimerPopoverTrigger.react"
                          ),
                          {}
                        ),
                      }),
                    j.jsx(c("CometComposerStatusAreaRelayWithSwatches.react"), {
                      autoFocus: !0,
                      isViewerFeed: !1,
                      onClose: c("emptyFunction"),
                      placeholderText: h._(
                        "Write a prompt for people to respond to\u2026"
                      ),
                      profile$key: null,
                      statusAreaRef: g,
                    }),
                  ],
                }),
              }),
            }),
            b("cr:1806770") != null
              ? j.jsx("div", {
                  className: c("stylex").dedupe(
                    {
                      "background-color-1": "cwj9ozl2",
                      "bottom-1": "k2sg9oav",
                      "box-shadow-1": "hqbw16k1",
                      "opacity-1": "pedkr2u6",
                      "position-1": "poy2od1o",
                      "transform-0.1": "agkhgkm8",
                      "transition-delay-1": "nd04uwhx",
                      "transition-duration-1": "iy22zwlh",
                      "transition-property-1": "pnx7fd3z",
                      "width-1": "k4urcfbm",
                    },
                    N
                      ? {
                          "opacity-1": "b5wmifdl",
                          "transform-0.1": "kn6avv2b",
                          "transition-delay-1": "hwaazqwg",
                          "transition-duration-1": "mi9thwiq",
                        }
                      : null,
                    a ? { "transition-delay-1": "nd04uwhx" } : null
                  ),
                  children: j.jsx(b("cr:1806770"), {
                    editSessionID: E,
                    onDismiss: function () {
                      return B(!0);
                    },
                    onSelect: r,
                    suggestions$key:
                      (f = e.node) == null ? void 0 : f.quilt_composer_metadata,
                  }),
                })
              : null,
            j.jsx("div", {
              className: "ozuftl9m tvfksri0 sjgh65i0",
              children: j.jsx(c("TetraButton.react"), {
                disabled: d("UnicodeUtils").strlen(v.trim()) < q,
                label: h._("Next"),
                onPress: L,
                testid: void 0,
                type: "secondary",
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return { composerTarget: a.target, metadata: a.quiltsMetadata };
    });
    g["default"] = e;
  },
  98
);
__d(
  "StoriesCreateCTALink.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCreateCTALink",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Viewer",
          kind: "LinkedField",
          name: "viewer",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "actor",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "StoriesCreateCTAUtils_pageAddressAndLocation",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "StreetAddress",
                          kind: "LinkedField",
                          name: "address",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "single_line_full_address",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Location",
                          kind: "LinkedField",
                          name: "location",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "latitude",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "longitude",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "StoriesCreateCTAUtils_pagePhoneNumber",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Phone",
                          kind: "LinkedField",
                          name: "all_phones",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "PhoneNumber",
                              kind: "LinkedField",
                              name: "phone_number",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "universal_number",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "websites",
                      storageKey: null,
                    },
                  ],
                  type: "Page",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCreateCTAUtils_pageAddressAndLocation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "StoriesCreateCTAUtils_pageAddressAndLocation",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCreateCTAUtils_pagePhoneNumber.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "StoriesCreateCTAUtils_pagePhoneNumber",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCreateTextOverlaysRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5914335628592591",
        metadata: {},
        name: "StoriesCreateTextOverlaysRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCTATypeEnum",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      BOOK_NOW: "BOOK_NOW",
      CALL_NOW: "CALL_NOW",
      GET_DIRECTIONS: "GET_DIRECTIONS",
      LEARN_MORE: "LEARN_MORE",
      SEE_EVENT: "SEE_EVENT",
      SEE_JOB: "SEE_JOB",
      SEE_MORE: "SEE_MORE",
      SEE_OFFER: "SEE_OFFER",
      SHOP_NOW: "SHOP_NOW",
    });
    f["default"] = a;
  },
  66
);
__d(
  "StoriesCTAButtonLabels",
  ["fbt", "StoriesCTATypeEnum"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = Object.freeze(
      ((a = {}),
      (a[c("StoriesCTATypeEnum").BOOK_NOW] = h._("Book Now")),
      (a[c("StoriesCTATypeEnum").CALL_NOW] = h._("Call Now")),
      (a[c("StoriesCTATypeEnum").GET_DIRECTIONS] = h._("Get Directions")),
      (a[c("StoriesCTATypeEnum").LEARN_MORE] = h._("Learn More")),
      (a[c("StoriesCTATypeEnum").SEE_EVENT] = h._("See Event")),
      (a[c("StoriesCTATypeEnum").SEE_JOB] = h._("See Job")),
      (a[c("StoriesCTATypeEnum").SEE_MORE] = h._("See More")),
      (a[c("StoriesCTATypeEnum").SEE_OFFER] = h._("See Offer")),
      (a[c("StoriesCTATypeEnum").SHOP_NOW] = h._("Shop Now")),
      a)
    );
    g["default"] = b;
  },
  98
);
__d(
  "StoriesCreateCTALinkPicker.react",
  [
    "fbt",
    "ix",
    "CometFormSelect.react",
    "CometFormTextInput.react",
    "StoriesCTAButtonLabels",
    "StoriesCTATypeEnum",
    "TetraButton.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
      l = b.useState,
      m = [
        c("StoriesCTATypeEnum").SEE_MORE,
        c("StoriesCTATypeEnum").LEARN_MORE,
        c("StoriesCTATypeEnum").SHOP_NOW,
        c("StoriesCTATypeEnum").BOOK_NOW,
        c("StoriesCTATypeEnum").CALL_NOW,
        c("StoriesCTATypeEnum").GET_DIRECTIONS,
      ],
      n = Object.freeze(
        ((e = {}),
        (e[c("StoriesCTATypeEnum").CALL_NOW] = h._(
          "Page must include phone number"
        )),
        (e[c("StoriesCTATypeEnum").GET_DIRECTIONS] = h._(
          "Page must include address"
        )),
        e)
      ),
      o = function (a, b, d) {
        switch (a) {
          case c("StoriesCTATypeEnum").BOOK_NOW:
          case c("StoriesCTATypeEnum").LEARN_MORE:
          case c("StoriesCTATypeEnum").SEE_MORE:
          case c("StoriesCTATypeEnum").SHOP_NOW:
            return b !== "" ? b : d.websiteLink;
          case c("StoriesCTATypeEnum").CALL_NOW:
            return d.phoneNumberLink;
          case c("StoriesCTATypeEnum").GET_DIRECTIONS:
            return d.addressLink;
          default:
            return null;
        }
      };
    function a(a) {
      var b = a.linkInputError,
        e = a.onChange,
        f = a.onDelete,
        g = a.pageLinks;
      a = l(c("StoriesCTATypeEnum").SEE_MORE);
      var p = a[0];
      a = a[1];
      var q = l(""),
        r = q[0];
      q = q[1];
      var s = l([]),
        t = s[0],
        u = s[1];
      k(
        function () {
          var a = m.map(function (a) {
            var b = !1;
            switch (a) {
              case c("StoriesCTATypeEnum").CALL_NOW:
                b = g.phoneNumberLink == null;
                break;
              case c("StoriesCTATypeEnum").GET_DIRECTIONS:
                b = g.addressLink == null;
                break;
              default:
                break;
            }
            return {
              bodyColor: "secondary",
              bodyText: b ? n[a] : void 0,
              disabled: b,
              label: c("StoriesCTAButtonLabels")[a],
              value: a,
            };
          });
          u(a);
        },
        [g]
      );
      k(
        function () {
          var a;
          e({ ctaType: p, link: (a = o(p, r, g)) != null ? a : "" });
        },
        [p, r, e, g]
      );
      s =
        p !== c("StoriesCTATypeEnum").CALL_NOW &&
        p !== c("StoriesCTATypeEnum").GET_DIRECTIONS;
      return j.jsxs("div", {
        className:
          "ihqw7lf3 discj3wi dati1w0a hv4rvrfc n1l5q3vz l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 qsy8amke",
        children: [
          j.jsx(c("TetraText.react"), {
            type: "bodyLink2",
            children: h._("Add Button"),
          }),
          j.jsx("div", {
            className: "n1l5q3vz sjgh65i0",
            children: j.jsx(c("CometFormSelect.react"), {
              label: h._("Select Button"),
              onValueChange: a,
              options: t,
              size: "full",
              value: p,
            }),
          }),
          s &&
            j.jsx("div", {
              className: "sjgh65i0",
              children: j.jsx(c("CometFormTextInput.react"), {
                icon: d("fbicon")._(i("481761"), 20),
                label: h._("Enter link"),
                onValueChange: q,
                validationState: b ? "ERROR" : void 0,
                value: r,
              }),
            }),
          j.jsx(c("TetraButton.react"), {
            icon: d("fbicon")._(i("483825"), 16),
            label: h._("Remove Button"),
            onPress: f,
            type: "secondary",
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateCTALinkReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = { ctaType: null, link: null, linkInputError: !1 };
    function a(a, b) {
      var c = a.ctaLinkData;
      c == null && (c = babelHelpers["extends"]({}, g));
      switch (b.type) {
        case "CTA_LINK_UPDATE":
          return babelHelpers["extends"]({}, a, {
            ctaLinkData: babelHelpers["extends"]({}, c, b.data),
          });
        case "CTA_LINK_DELETE":
          return babelHelpers["extends"]({}, a, {
            ctaLinkData: babelHelpers["extends"]({}, g),
          });
        case "CTA_UPDATE_LINK_INPUT_ERROR":
          return babelHelpers["extends"]({}, a, {
            ctaLinkData: babelHelpers["extends"]({}, c, {
              linkInputError: b.error,
            }),
          });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "StoriesCreateCTAUtils",
  [
    "CometRelay",
    "StoriesCreateCTAUtils_pageAddressAndLocation.graphql",
    "StoriesCreateCTAUtils_pagePhoneNumber.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
      a = d("CometRelay").readInlineData(
        h !== void 0
          ? h
          : (h = b("StoriesCreateCTAUtils_pagePhoneNumber.graphql")),
        a
      );
      a =
        a == null
          ? void 0
          : (a = a.all_phones[0]) == null
          ? void 0
          : (a = a.phone_number) == null
          ? void 0
          : a.universal_number;
      return a != null ? "tel:" + a : null;
    }
    function c(a) {
      var c, e;
      a = d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b("StoriesCreateCTAUtils_pageAddressAndLocation.graphql")),
        a
      );
      c =
        a == null
          ? void 0
          : (c = a.address) == null
          ? void 0
          : c.single_line_full_address;
      var f = null,
        g = "fbgeo://";
      e = a == null ? void 0 : (e = a.location) == null ? void 0 : e.latitude;
      a = a == null ? void 0 : (a = a.location) == null ? void 0 : a.longitude;
      e != null && a != null && (f = "" + g + e + "," + a);
      c != null && (f = f == null ? g + '"' + c + '"' : f + ',"' + c + '"');
      return f;
    }
    g.getURLFromPhoneNumber = a;
    g.getURLFromAddress = c;
  },
  98
);
__d(
  "StoriesCreateFormAddDataButton",
  ["CometPressable.react", "TetraText.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        button: {
          alignItems: "bp9cbjyn",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "e5d9fub0",
          justifyContent: "jifvfom9",
          marginTop: "aov4n071",
          width: "k4urcfbm",
        },
        icon: {
          alignItems: "bp9cbjyn",
          backgroundColor: "b3i9ofy5",
          borderTopStartRadius: "br7hx15l",
          borderTopEndRadius: "h2jyy9rg",
          borderBottomEndRadius: "n3ddgdk9",
          borderBottomStartRadius: "owxd89k7",
          display: "j83agx80",
          height: "qypqp5cg",
          justifyContent: "taijpn5t",
          marginStart: "h676nmdw",
          position: "l9j0dhe7",
          width: "q676j6op",
        },
        label: { marginStart: "ozuftl9m", position: "l9j0dhe7" },
      };
    function a(a) {
      var b = a.icon,
        d = a.label,
        e = a.onPress;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "icon",
        "label",
        "onPress",
      ]);
      return h.jsxs(
        c("CometPressable.react"),
        babelHelpers["extends"]({ onPress: e, xstyle: i.button }, a, {
          children: [
            h.jsx("div", { className: c("stylex")(i.icon), children: b }),
            h.jsx("div", {
              className: c("stylex")(i.label),
              children: h.jsx(c("TetraText.react"), {
                type: "bodyLink2",
                children: d,
              }),
            }),
          ],
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateCTALink.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "StoriesCreateCTALink.graphql",
    "StoriesCreateCTALinkPicker.react",
    "StoriesCreateCTALinkReducer",
    "StoriesCreateCTAUtils",
    "StoriesCreateFormAddDataButton",
    "StoriesCreateViewStateDispatcherContext",
    "TetraIcon.react",
    "fbicon",
    "react",
    "useCometConfirmationDialog",
    "useStoriesCreateReducer",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useState,
      p = j !== void 0 ? j : (j = b("StoriesCreateCTALink.graphql"));
    function a(a) {
      var b = a.ctaData;
      a = a.dataRef;
      var e = o(!1),
        f = e[0],
        g = e[1];
      e = o({ addressLink: null, phoneNumberLink: null, websiteLink: null });
      var j = e[0],
        q = e[1];
      e = c("useCometConfirmationDialog")();
      var r = e[0];
      c("useStoriesCreateReducer")(c("StoriesCreateCTALinkReducer"));
      var s = m(c("StoriesCreateViewStateDispatcherContext"));
      e = d("CometRelay").useFragment(p, a);
      var t = e == null ? void 0 : (a = e.viewer) == null ? void 0 : a.actor;
      n(
        function () {
          if ((t == null ? void 0 : t.__typename) === "Page") {
            var a;
            q({
              addressLink: d("StoriesCreateCTAUtils").getURLFromAddress(t),
              phoneNumberLink: d("StoriesCreateCTAUtils").getURLFromPhoneNumber(
                t
              ),
              websiteLink:
                (a = t == null ? void 0 : t.websites[0]) != null ? a : null,
            });
          }
        },
        [t]
      );
      e = l(
        function (a) {
          s({
            data: { ctaType: a.ctaType, link: a.link, linkInputError: !1 },
            type: "CTA_LINK_UPDATE",
          });
        },
        [s]
      );
      if ((t == null ? void 0 : t.__typename) !== "Page") return null;
      a = function () {
        r(
          {
            body: h._("Are you sure you want to delete the button?"),
            confirm: h._("Yes"),
            title: h._("Delete Button"),
          },
          function () {
            s({ type: "CTA_LINK_DELETE" }), g(!1);
          }
        );
      };
      return f
        ? k.jsx(c("StoriesCreateCTALinkPicker.react"), {
            linkInputError: b.linkInputError,
            onChange: e,
            onDelete: a,
            pageLinks: j,
          })
        : k.jsx(c("StoriesCreateFormAddDataButton"), {
            icon: k.jsx(c("TetraIcon.react"), {
              color: "primary",
              icon: d("fbicon")._(i("481759"), 16),
            }),
            label: h._("Add Button"),
            onPress: function () {
              g(!0);
            },
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withStoriesCreateViewStatePart")(a, function (a) {
      return { ctaData: a.ctaLinkData };
    });
    g["default"] = e;
  },
  98
);
__d(
  "StoriesCreatePhotoReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = a.photoData;
      c == null &&
        (c = {
          bounds: { height: 0, width: 0, x: 0, y: 0 },
          displayedURI: null,
          offset: { dx: 0, dy: 0 },
          rotation: 0,
          scale: 0,
          uploadingInfo: null,
        });
      switch (b.type) {
        case "photo_update_bounds":
          return babelHelpers["extends"]({}, a, {
            photoData: babelHelpers["extends"]({}, c, { bounds: b.bounds }),
          });
        case "photo_update_offset":
          return babelHelpers["extends"]({}, a, {
            photoData: babelHelpers["extends"]({}, c, {
              offset: { dx: b.dx, dy: b.dy },
            }),
          });
        case "photo_update_rotation":
          return babelHelpers["extends"]({}, a, {
            photoData: babelHelpers["extends"]({}, c, { rotation: b.value }),
          });
        case "photo_update_scale":
          return babelHelpers["extends"]({}, a, {
            photoData: babelHelpers["extends"]({}, c, { scale: b.value }),
          });
        case "photo_update_uri":
          return babelHelpers["extends"]({}, a, {
            photoData: babelHelpers["extends"]({}, c, {
              displayedURI: b.value,
            }),
          });
        case "photo_update_upload_id":
          var d = b.photoDescriptorID,
            e = b.uploadID;
          return babelHelpers["extends"]({}, a, {
            photoData: babelHelpers["extends"]({}, c, {
              uploadingInfo: { photoDescriptorID: d, uploadID: e },
            }),
          });
        case "photo_update_ent_id":
          d = c.uploadingInfo == null ? null : c.uploadingInfo;
          if (d != null)
            return babelHelpers["extends"]({}, a, {
              photoData: babelHelpers["extends"]({}, c, {
                uploadingInfo: babelHelpers["extends"]({}, d, {
                  entID: b.entID,
                }),
              }),
            });
          break;
        case "photo_clear_uploading":
          return babelHelpers["extends"]({}, a, {
            photoData: babelHelpers["extends"]({}, c, { uploadingInfo: null }),
          });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "StoriesCreateTextOverlaysReducer",
  ["uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d, e, f, g;
      d = (d = a.textOverlays) == null ? void 0 : d.alignment;
      e = (e = a.textOverlays) == null ? void 0 : e.editingID;
      f =
        (f = (f = a.textOverlays) == null ? void 0 : f.addTextEnabled) != null
          ? f
          : !1;
      g = ((g = a.textOverlays) == null ? void 0 : g.overlays) || [];
      switch (b.type) {
        case "text_overlay_create_new":
          var h = g || [];
          h = h.slice();
          var i = c("uuid")();
          !f && h.length !== 0 && h.pop();
          h.push({ id: i, text: void 0 });
          return babelHelpers["extends"]({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: d,
              editingID: i,
              overlays: h,
            },
          });
        case "text_overlay_set_editing":
          return babelHelpers["extends"]({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: d,
              editingID: b.id,
              overlays: g,
            },
          });
        case "text_overlay_update_text":
          i = g || [];
          var j = i.find(function (a) {
            return a.id === b.id;
          });
          j != null && (j.text = b.text);
          i = i.filter(function (a) {
            return (
              (j == null ? void 0 : j.id) !== a.id ||
              (a.text != null && a.text.trim().length > 0)
            );
          });
          return babelHelpers["extends"]({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: d,
              editingID: e === (j == null ? void 0 : j.id) ? null : e,
              overlays: i,
            },
          });
        case "text_overlay_delete_text":
          h = g || [];
          h = h.filter(function (a) {
            return a.id !== b.id;
          });
          return babelHelpers["extends"]({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: d,
              editingID: e,
              overlays: h,
            },
          });
        case "text_overlay_set_rotating":
          return babelHelpers["extends"]({}, a, {
            isObjectRotating: b.isRotating,
          });
        case "text_overlay_set_alignment":
          return babelHelpers["extends"]({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: b.alignment,
              editingID: e,
              overlays: g,
            },
          });
        case "text_overlay_set_add_text_enabled":
          return babelHelpers["extends"]({}, a, {
            textOverlays: {
              addTextEnabled: b.addTextEnabled,
              alignment: d,
              editingID: e,
              overlays: g,
            },
          });
      }
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateFormPhoto.react",
  [
    "fbt",
    "ix",
    "QPLUserFlow",
    "StoriesCreateCTALink.react",
    "StoriesCreateFormAddDataButton",
    "StoriesCreatePhotoReducer",
    "StoriesCreateTextOverlaysReducer",
    "StoriesCreateViewStateDispatcherContext",
    "StoriesModuleCreateStoryWwwQPLEvent",
    "TetraIcon.react",
    "cr:1592551",
    "fbicon",
    "react",
    "useStoriesCreateReducer",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a(a) {
      a = a.dataRef;
      c("useStoriesCreateReducer")(c("StoriesCreatePhotoReducer"));
      return j.jsxs("div", {
        children: [
          j.jsx(l, {}),
          b("cr:1592551") != null && j.jsx(b("cr:1592551"), {}),
          j.jsx(c("StoriesCreateCTALink.react"), { dataRef: a }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function l() {
      c("useStoriesCreateReducer")(c("StoriesCreateTextOverlaysReducer"));
      var a = k(c("StoriesCreateViewStateDispatcherContext")),
        b = function () {
          window.requestAnimationFrame(function () {
            a({ type: "text_overlay_create_new" });
          }),
            c("QPLUserFlow").addPoint(
              c("StoriesModuleCreateStoryWwwQPLEvent"),
              "Add text button pressed"
            );
        };
      return j.jsx(c("StoriesCreateFormAddDataButton"), {
        icon: j.jsx(c("TetraIcon.react"), {
          color: "primary",
          icon: d("fbicon")._(i("486061"), 16),
        }),
        label: h._("Add Text"),
        onPress: b,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateBlurredBgReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      switch (b.type) {
        case "blurredBg_update_bg":
          return babelHelpers["extends"]({}, a, {
            blurredBg: { bottomColor: b.bottomColor, topColor: b.topColor },
          });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "useStoriesDominantColorPicker",
  ["cr:675"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:675");
  },
  98
);
__d(
  "StoriesCreateDominantColorBg.react",
  [
    "StoriesCreateBlurredBgReducer",
    "StoriesCreateViewStateDispatcherContext",
    "StoriesEnums",
    "StoriesGradientBackground.react",
    "react",
    "useStoriesCreateReducer",
    "useStoriesDominantColorPicker",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = { blue: 0, clusterSize: 0, green: 0, red: 0 };
    function a(a) {
      var b = a.displayedURI,
        e = a.frameWidth;
      a = a.rounded;
      c("useStoriesCreateReducer")(c("StoriesCreateBlurredBgReducer"));
      var f = i(c("StoriesCreateViewStateDispatcherContext")),
        g = c("useStoriesDominantColorPicker")({ imageURL: b });
      if (b == null)
        return h.jsx("div", {
          className:
            "k4urcfbm pmk7jnqg stjgntxs ni8dbmo4 datstx6m" +
            (a ? " l82x9zwi uo3d90p7 pw54ja7n ue3kfks5" : ""),
          style: { width: e },
          children: h.jsx(c("StoriesGradientBackground.react"), {
            direction: d("StoriesEnums").GRADIENT_DIRECTION.TOP_BOTTOM,
            from: "rgb(" + j.red + ", " + j.green + "," + j.blue,
            to: "rgb(" + j.red + ", " + j.green + "," + j.blue,
          }),
        });
      f({
        bottomColor: g.bottomColor,
        topColor: g.topColor,
        type: "blurredBg_update_bg",
      });
      return h.jsx("div", {
        className: "k4urcfbm pmk7jnqg stjgntxs ni8dbmo4 datstx6m",
        style: { width: e },
        children: h.jsx(c("StoriesGradientBackground.react"), {
          direction: d("StoriesEnums").GRADIENT_DIRECTION.TOP_BOTTOM,
          from: g.topColor,
          to: g.bottomColor,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withStoriesCreateViewStatePart")(a, function (a) {
      return {
        displayedURI: (a = a.photoData) == null ? void 0 : a.displayedURI,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "StoriesCreatePreviewCTA.react",
  ["StoriesCTAButton.react", "StoriesCTAButtonLabels", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.ctaType;
      return a == null
        ? null
        : h.jsxs("div", {
            className: "k4urcfbm pmk7jnqg ofv0k9yr taijpn5t j83agx80 i09qtzwb",
            children: [
              h.jsx("div", {
                className:
                  "hc5seken j9ispegn pmk7jnqg n7fi1qx3 i09qtzwb dc0msv1s",
              }),
              h.jsx(
                c("StoriesCTAButton.react"),
                { title: c("StoriesCTAButtonLabels")[a] },
                a
              ),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateTextOverlaysRoot.entrypoint",
  ["JSResourceForInteraction", "StoriesCreateTextOverlaysRootQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            rootQueryReference: {
              parameters: b("StoriesCreateTextOverlaysRootQuery$Parameters"),
              variables: {},
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "StoriesCreateTextOverlaysRoot.react"
      ).__setRef("StoriesCreateTextOverlaysRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateTextOverlayEntrypointContainer.react",
  [
    "CometPlaceholder.react",
    "StoriesCreateTextOverlaysRoot.entrypoint",
    "react",
    "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {};
    function a(a) {
      a = a.textOverlays;
      var b = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      a = a != null && a.overlays.length > 0;
      if (a !== !0) return null;
      return a
        ? h.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: h.jsx(
              c(
                "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"
              ),
              {
                entryPoint: c("StoriesCreateTextOverlaysRoot.entrypoint"),
                entryPointParams: i,
                environmentProvider: b,
                props: i,
              }
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
  "StoriesCreatePhotoFooterControls.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometSlider.react",
    "StoriesCreateViewStateDispatcherContext",
    "TetraButton.react",
    "TetraIcon.react",
    "fbicon",
    "react",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useContext,
      l = b.useRef;
    function a(a) {
      var b = a.frameWidth,
        e = a.maxScale,
        f = a.minScale,
        g = a.rotation,
        m = a.scale,
        n = k(c("StoriesCreateViewStateDispatcherContext"));
      a = d("fbicon")._(i("531490"), 16);
      var o = d("fbicon")._(i("483768"), 16);
      b = Math.floor(0.8 * b);
      var p = l(null),
        q = function (a) {
          n({ type: "photo_update_scale", value: a });
        },
        r = function (a) {
          var b = function (a) {
            q(Math.min(Math.max(a, f), e));
          };
          window.clearInterval(p.current);
          var c = m + a;
          b(c);
          p.current = window.setInterval(function () {
            (c += a), b(c);
          }, 150);
        };
      return j.jsxs("div", {
        className: "j83agx80 bp9cbjyn",
        children: [
          j.jsx("div", {
            className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
            children: j.jsx(c("CometPressable.react"), {
              "aria-label": h._("scale image down"),
              disabled: m === f,
              onPressIn: function () {
                r(-0.1);
              },
              onPressOut: function () {
                window.clearInterval(p.current);
              },
              children: j.jsx(c("TetraIcon.react"), {
                color: "white",
                icon: a,
              }),
            }),
          }),
          j.jsx("div", {
            className: "k4urcfbm",
            style: { width: b + "px" },
            children: j.jsx(c("CometSlider.react"), {
              label: h._("Zoom"),
              max: e,
              min: f,
              onChange: function (a) {
                q(a);
              },
              step: 0.01,
              value: m,
            }),
          }),
          j.jsx("div", {
            className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
            children: j.jsx(c("CometPressable.react"), {
              "aria-label": h._("scale image up"),
              disabled: m === e,
              onPressIn: function () {
                r(0.1);
              },
              onPressOut: function () {
                window.clearInterval(p.current);
              },
              children: j.jsx(c("TetraIcon.react"), {
                color: "white",
                icon: o,
              }),
            }),
          }),
          j.jsx("div", {
            className: "h676nmdw",
            children: j.jsx(c("TetraButton.react"), {
              icon: d("fbicon")._(i("1295657"), 16),
              label: h._("Rotate"),
              onPressOut: function () {
                n({ type: "photo_update_rotation", value: (g + 90) % 360 });
              },
              type: "secondary",
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withStoriesCreateViewStatePart")(a, function (a) {
      var b;
      return {
        rotation:
          (b = (b = a.photoData) == null ? void 0 : b.rotation) != null ? b : 0,
        scale:
          (a = (b = a.photoData) == null ? void 0 : b.scale) != null ? a : 1,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "StoriesCreatePhotoFooterInstructions.react",
  ["fbt", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className: "j83agx80 bp9cbjyn",
        children: i.jsx(c("TetraText.react"), {
          color: "white",
          type: "body2",
          children: h._("Select photo to crop and rotate"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreatePhotoPreviewFallback.react",
  ["CollageItemFallback.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.filename,
        d = a.frameWidth;
      a = a.percentComplete;
      return h.jsx("div", {
        className: "cj5g2342 kr520xx4 kfkz5moi pmk7jnqg i09qtzwb",
        style: { width: d + "px" },
        children: h.jsx(c("CollageItemFallback.react"), {
          fileType: "PHOTO",
          filename: b,
          percentComplete: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateUploadingOrUploadedPhotoItem.react",
  ["BaseImage.react", "StoriesCreatePhotoPreviewFallback.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a, b) {
      var d = a.attachment,
        e = a.frameWidth,
        f = a.onError,
        g = a.onLoad;
      a = a.xstyle;
      var j = i(!1),
        k = j[0],
        l = j[1],
        m = d.fileObjectURL;
      if (!k && m != null)
        if (d.useCDNPreview) l(!0);
        else
          return h.jsx(c("BaseImage.react"), {
            draggable: !1,
            onError: function () {
              l(!0), f && f(m);
            },
            onLoad: function () {
              g && g(m);
            },
            ref: b,
            src: m,
            xstyle: a,
          });
      if (k && d.fileType === "PHOTO" && d.state === "UPLOADED") {
        var n = d.uploadedImageURL;
        if (n != null)
          return h.jsx(c("BaseImage.react"), {
            draggable: !1,
            onLoad: function () {
              g && g(n);
            },
            ref: b,
            src: n,
            xstyle: a,
          });
      }
      return h.jsx(c("StoriesCreatePhotoPreviewFallback.react"), {
        filename: d.file.name,
        frameWidth: e,
        percentComplete: d.state === "UPLOADING" ? d.percentComplete : void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "StoriesCreatePhotoPreviewItem.react",
  [
    "StoriesCreatePhotoPreviewFallback.react",
    "StoriesCreateUploadingOrUploadedPhotoItem.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.attachment,
        e = a.frameWidth,
        f = a.onError,
        g = a.onLoad;
      a = a.xstyle;
      switch (d.state) {
        case "NEW":
        case "CLIENT_PROCESSING":
        case "CLIENT_PROCESSING_COMPLETE":
          return h.jsx(c("StoriesCreatePhotoPreviewFallback.react"), {
            filename: d.file.name,
            frameWidth: e,
          });
        case "QUEUED":
        case "UPLOADING":
        case "UPLOADED":
          if (d.file != null)
            return h.jsx(c("StoriesCreateUploadingOrUploadedPhotoItem.react"), {
              attachment: d,
              frameWidth: e,
              onError: f,
              onLoad: g,
              ref: b,
              xstyle: a,
            });
          else return null;
        case "FAILED":
          return h.jsxs(h.Fragment, {
            children: [
              d.file.name,
              d.error != null
                ? h.jsxs(h.Fragment, {
                    children: [
                      h.jsx("br", {}),
                      h.jsx(c("TetraText.react"), {
                        color: "negative",
                        type: "body4",
                        children: d.error,
                      }),
                    ],
                  })
                : null,
            ],
          });
      }
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "useStoriesCreatePhotoPreviewBounds",
  ["StoriesCreateViewStateDispatcherContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect;
    function a(a, b, d) {
      var e = h(c("StoriesCreateViewStateDispatcherContext"));
      i(
        function () {
          if (b == null || d == null) return;
          var c = { x: 0, y: 0 };
          a % 180 === 0
            ? (a === 0
                ? (c = {
                    x: (b.left - d.left) / d.width,
                    y: (b.top - d.top) / d.height,
                  })
                : a === 180 &&
                  (c = {
                    x: (d.right - b.right) / d.width,
                    y: (d.bottom - b.bottom) / d.height,
                  }),
              e({
                bounds: {
                  height: b.height / d.height,
                  width: b.width / d.width,
                  x: c.x,
                  y: c.y,
                },
                type: "photo_update_bounds",
              }))
            : (a === 90
                ? (c = {
                    x: (b.top - d.top) / d.height,
                    y: (d.right - b.right) / d.width,
                  })
                : a === 270 &&
                  (c = {
                    x: (d.bottom - b.bottom) / d.height,
                    y: (b.left - d.left) / d.width,
                  }),
              e({
                bounds: {
                  height: b.width / d.width,
                  width: b.height / d.height,
                  x: c.x,
                  y: c.y,
                },
                type: "photo_update_bounds",
              }));
        },
        [e, b, d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCreatePhotoPreviewInput",
  ["react", "useGlobalEventListener"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function i(a, b, c, d, e) {
      if (!b) return;
      b = a.target;
      b instanceof Node &&
        d instanceof Node &&
        c instanceof Node &&
        !d.contains(b) &&
        !c.contains(b) &&
        e(!1);
    }
    function a(a, b, d, e) {
      var f = h(
          function (c) {
            i(c, a, e.current, d.current, b), c.preventDefault();
          },
          [d, e, a, b]
        ),
        g = h(
          function (c) {
            i(c, a, e.current, d.current, b), c.preventDefault();
          },
          [d, e, a, b]
        );
      c("useGlobalEventListener")("focus", f, { capture: !0 });
      c("useGlobalEventListener")("click", g, { capture: !0 });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreatePhotoPreview.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometPlaceholder.react",
    "CometPressable.react",
    "JSResourceForInteraction",
    "Locale",
    "QPLUserFlow",
    "StoriesCreateBackground.react",
    "StoriesCreateConstants",
    "StoriesCreateDominantColorBg.react",
    "StoriesCreatePhotoFooterControls.react",
    "StoriesCreatePhotoFooterInstructions.react",
    "StoriesCreatePhotoPreviewFrame.react",
    "StoriesCreatePhotoPreviewFrameContext",
    "StoriesCreatePhotoPreviewItem.react",
    "StoriesCreatePreviewCTA.react",
    "StoriesCreateTextOverlayEntrypointContainer.react",
    "StoriesCreateViewStateDispatcherContext",
    "StoriesGating",
    "StoriesModuleCreateStoryWwwQPLEvent",
    "lazyLoadComponent",
    "react",
    "stylex",
    "useMergeRefs",
    "useResizeObserver",
    "useStoriesCreateObjectMove",
    "useStoriesCreatePhotoFrame",
    "useStoriesCreatePhotoPreviewBounds",
    "useStoriesCreatePhotoPreviewInput",
    "useThrottled",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useContext,
      l = b.useEffect,
      aa = b.useMemo,
      m = b.useRef,
      n = b.useState,
      o = {
        border: {
          height: "datstx6m",
          paddingTop: "npl0935n",
          paddingEnd: "du70xcb2",
          paddingBottom: "esmgwfdi",
          paddingStart: "g17sfo2o",
          pointerEvents: "hzruof5a",
          position: "pmk7jnqg",
          start: "kfkz5moi",
          transform: "cj5g2342",
          width: "k4urcfbm",
        },
        borderRTL: { transform: "lcn5fozr" },
        footer: {
          backgroundColor: "tltl5a5h",
          bottom: "i09qtzwb",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          position: "pmk7jnqg",
          width: "k4urcfbm",
          zIndex: "kc3q97z2",
        },
        image: {
          height: "datstx6m",
          position: "pmk7jnqg",
          start: "kfkz5moi",
          transform: "cj5g2342",
        },
        imageContainer: {
          height: "datstx6m",
          position: "pmk7jnqg",
          start: "kfkz5moi",
          top: "rk01pc8j",
        },
        imageRTL: {
          height: "datstx6m",
          position: "pmk7jnqg",
          start: "kfkz5moi",
          transform: "lcn5fozr",
        },
        mediaContainer: {
          alignItems: "bp9cbjyn",
          borderTopStartRadius: "monazrh9",
          borderTopEndRadius: "h905i5nu",
          borderBottomEndRadius: "jinzq4gt",
          borderBottomStartRadius: "mrjvor2e",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          position: "pmk7jnqg",
          width: "k4urcfbm",
        },
        mediaContainerClipped: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        mediaContainerOverlays: { position: "pmk7jnqg" },
        mediaContainerOverlaysIgnoreTouch: { pointerEvents: "hzruof5a" },
        overlay: {
          height: "datstx6m",
          position: "pmk7jnqg",
          width: "k4urcfbm",
        },
        pressable: { height: "datstx6m", position: "pmk7jnqg" },
        pressableContainer: { height: "datstx6m", position: "pmk7jnqg" },
        root: {
          alignItems: "bp9cbjyn",
          backgroundColor: "tltl5a5h",
          bottom: "i09qtzwb",
          display: "j83agx80",
          end: "n7fi1qx3",
          justifyContent: "taijpn5t",
          pointerEvents: "oqq733wu",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        rotationCursor: { cursor: "o6r2urh6" },
      },
      ba = 150;
    function a(a) {
      var b = a.composerSessionID,
        e = a.ctaLinkData,
        f = a.displayedURI,
        g = a.isObjectRotating,
        p = a.mediaAttachment,
        q = a.overlayRef,
        r = a.rotation,
        s = a.scale,
        t = a.stickerData;
      a = a.textOverlays;
      var u = n(!1),
        v = u[0],
        w = u[1],
        x = m(null),
        y = m(null);
      u = n(null);
      var z = u[0],
        A = u[1];
      u = n(null);
      var B = u[0],
        C = u[1],
        D = m([]),
        E = m(null);
      u = m(null);
      var F = m(null),
        G = m(2),
        H = m(null),
        I = m(0.2),
        J = null;
      d("StoriesGating").shouldEnableStickerProduction() &&
        (t == null ? void 0 : t.stickers.length) !== 0 &&
        (J = c("lazyLoadComponent")(
          c("JSResourceForInteraction")(
            "StoriesCreateStickersRoot.react"
          ).__setRef("StoriesCreatePhotoPreview.react")
        ));
      t = j(function (a, b) {
        A(b.getBoundingClientRect());
      }, []);
      t = c("useResizeObserver")(t);
      t = c("useMergeRefs")(x, t);
      var K = j(function (a, b) {
          C(b.getBoundingClientRect());
        }, []),
        ca = aa(
          function () {
            return { overlayRect: B };
          },
          [B]
        );
      K = c("useResizeObserver")(K);
      K = c("useMergeRefs")(y, K);
      var da = f != null,
        L = k(c("StoriesCreateViewStateDispatcherContext")),
        M = (a == null ? void 0 : a.editingID) != null,
        N = d("StoriesCreateConstants").PHOTO_PREVIEW_DIMENSIONS.FOOTER_HEIGHT,
        O = d("StoriesCreateConstants").PHOTO_PREVIEW_DIMENSIONS.HEADER_HEIGHT,
        P = c("useStoriesCreatePhotoFrame")(),
        Q = P.border,
        R = P.frameWidth;
      P = j(
        function () {
          if (q == null || (q == null ? void 0 : q.current) == null) return;
          var a = q == null ? void 0 : q.current;
          a instanceof HTMLElement && C(a.getBoundingClientRect());
        },
        [q]
      );
      var S = c("useThrottled")(P, 100);
      l(
        function () {
          window.addEventListener("resize", S);
          return function () {
            window.removeEventListener("resize", S);
          };
        },
        [S]
      );
      l(
        function () {
          c("QPLUserFlow").addPoint(
            c("StoriesModuleCreateStoryWwwQPLEvent"),
            "Image story preview"
          );
        },
        [b]
      );
      c("useStoriesCreatePhotoPreviewInput")(v, w, u, F);
      P = c("useStoriesCreateObjectMove")(
        z,
        B,
        { bottom: 10, left: 10, right: 10, top: 10 },
        !0
      );
      var T = P.dx,
        U = P.dy;
      b = P.keyCommands;
      var ea = P.onBlur,
        fa = P.onPressDown;
      l(
        function () {
          L({ dx: T, dy: U, type: "photo_update_offset" });
        },
        [L, T, U]
      );
      var V = j(
        function (a) {
          L({ type: "photo_update_scale", value: a });
        },
        [L]
      );
      l(
        function () {
          var a;
          A((a = x.current) == null ? void 0 : a.getBoundingClientRect());
          C((a = y.current) == null ? void 0 : a.getBoundingClientRect());
        },
        [T, U, r, s]
      );
      c("useStoriesCreatePhotoPreviewBounds")(r, z, B);
      var W = d("Locale").isRTL();
      l(
        function () {
          var a = H.current;
          a != null && (W || (a.scrollLeft = 0), (a.scrollTop = 0));
        },
        [v, W]
      );
      P = j(
        function (a) {
          L({ type: "photo_update_uri", value: null }),
            (E.current = null),
            D.current.push(a);
        },
        [L]
      );
      z = j(
        function (a) {
          if (D.current.includes(a)) return;
          L({ type: "photo_update_uri", value: a });
        },
        [L]
      );
      l(
        function () {
          var a = x.current;
          if (
            f == null ||
            D.current.includes(f) ||
            a == null ||
            E.current != null ||
            R === 0
          )
            return;
          a = a.getBoundingClientRect();
          a.width > a.height && V(R / a.width);
          R / a.width < 0.2 &&
            ((I.current = (R / a.width) * 0.8),
            (G.current = (R / a.width) * 4));
          E.current = !0;
        },
        [f, R, V]
      );
      if (p == null || p.fileType !== "PHOTO") return null;
      var ga = W ? "50%" : "-50%",
        X = !v,
        Y = X ? "solid rgba(24,25,26, 1.0)" : "solid rgba(24,25,26, 0.5)",
        Z = { height: "calc(100% - " + (N + O) + "px", top: O + "px" },
        $ = null;
      v
        ? ($ = i.jsx(c("StoriesCreatePhotoFooterControls.react"), {
            frameWidth: R,
            maxScale: G.current,
            minScale: I.current,
          }))
        : f != null &&
          !M &&
          ($ = i.jsx(c("StoriesCreatePhotoFooterInstructions.react"), {}));
      return i.jsx("div", {
        className: c("stylex")(o.root),
        children: i.jsxs(c("StoriesCreatePhotoPreviewFrameContext").Provider, {
          value: ca,
          children: [
            i.jsxs("div", {
              className: c("stylex")(
                o.mediaContainer,
                X && o.mediaContainerClipped
              ),
              ref: H,
              style: babelHelpers["extends"]({}, Z, {
                width: X ? R + "px" : void 0,
              }),
              children: [
                i.jsx(c("StoriesCreateBackground.react"), {}),
                i.jsx(c("StoriesCreateDominantColorBg.react"), {
                  frameWidth: R,
                  rounded: X,
                }),
                i.jsx(c("CometComponentWithKeyCommands.react"), {
                  commandConfigs: b,
                  xstyle: o.imageContainer,
                  children: i.jsx("div", {
                    className: c("stylex")(o.pressableContainer),
                    onFocus: function (a) {
                      a.preventDefault(), a.target.focus({ preventScroll: !0 });
                    },
                    onMouseDown: function (a) {
                      a.preventDefault();
                    },
                    onWheel: function (a) {
                      v &&
                        V(
                          Math.min(
                            Math.max(s - a.deltaY / ba, I.current),
                            G.current
                          )
                        );
                    },
                    style: {
                      transform:
                        "translate(calc(" +
                        ga +
                        " + " +
                        T +
                        "px), calc(-50% + " +
                        U +
                        "px)) rotate(" +
                        r +
                        "deg) scale(" +
                        s +
                        ")",
                    },
                    children: i.jsx(c("CometPressable.react"), {
                      "aria-label": h._("Uploaded image drag handler"),
                      disabled: !da,
                      onFocusIn: function (a) {
                        a.target.focus({ preventScroll: !0 }), w(!0);
                      },
                      onFocusOut: function () {
                        ea();
                      },
                      onPressIn: function (a) {
                        w(!0), fa(a);
                      },
                      overlayDisabled: !0,
                      ref: F,
                      xstyle: [o.pressable, g ? o.rotationCursor : {}],
                      children: i.jsx(
                        c("StoriesCreatePhotoPreviewItem.react"),
                        {
                          attachment: p,
                          frameWidth: R,
                          onError: P,
                          onLoad: z,
                          ref: t,
                          xstyle: W ? o.imageRTL : o.image,
                        }
                      ),
                    }),
                  }),
                }),
                i.jsx(c("StoriesCreatePhotoPreviewFrame.react"), {
                  frameWidth: R,
                  ref: K,
                  rounded: X,
                }),
                i.jsx(c("StoriesCreatePreviewCTA.react"), {
                  ctaType: e.ctaType,
                }),
              ],
            }),
            i.jsx("div", {
              className: c("stylex")(o.footer),
              ref: u,
              style: { height: N + "px" },
              children: $,
            }),
            i.jsxs("div", {
              className: c("stylex")(
                o.mediaContainerOverlays,
                !M && o.mediaContainerOverlaysIgnoreTouch
              ),
              onMouseDown: function (a) {
                if (!M) return;
                a.preventDefault();
                a.stopPropagation();
              },
              style: babelHelpers["extends"]({}, Z, { width: R + "px" }),
              children: [
                q != null &&
                  i.jsxs("div", {
                    className: c("stylex")(o.overlay),
                    ref: q,
                    children: [
                      i.jsx(
                        c("StoriesCreateTextOverlayEntrypointContainer.react"),
                        { textOverlays: a }
                      ),
                      J != null &&
                        i.jsx(c("CometPlaceholder.react"), {
                          fallback: null,
                          children: i.jsx(J, {}),
                        }),
                    ],
                  }),
                i.jsx("div", {
                  className: c("stylex")(o.border, W && o.borderRTL),
                  style: {
                    borderLeft: Q + "px " + Y,
                    borderRight: Q + "px " + Y,
                    borderTop: O + "px " + Y,
                    top: "-" + O + "px",
                  },
                }),
              ],
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withStoriesCreateViewStatePart")(a, function (a) {
      var b;
      return {
        composerSessionID: a.composerSessionID,
        ctaLinkData: a.ctaLinkData,
        displayedURI: (b = a.photoData) == null ? void 0 : b.displayedURI,
        isObjectRotating: a.isObjectRotating,
        mediaAttachment: (b = a.mediaAttachments) == null ? void 0 : b[0],
        overlayRef: a == null ? void 0 : a.overlayRef,
        rotation:
          (b = (b = a.photoData) == null ? void 0 : b.rotation) != null ? b : 0,
        scale:
          (b = (b = a.photoData) == null ? void 0 : b.scale) != null ? b : 1,
        stickerData: a.stickerData,
        textOverlays: a.textOverlays,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "storiesDominantColorPicker",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 8;
    function h() {
      return { blue: 0, clusterSize: 0, green: 0, red: 0 };
    }
    function i(a, b, c, d) {
      return (
        (a.red - b) * (a.red - b) +
        (a.green - c) * (a.green - c) +
        (a.blue - d) * (a.blue - d)
      );
    }
    function j() {
      var a = 0,
        b = 255 / 4,
        c = new Array(g);
      for (var d = 0; d < 2; d++)
        for (var e = 0; e < 2; e++)
          for (var f = 0; f < 2; f++) {
            var h = {
              blue: b * f + b / 2,
              clusterSize: 0,
              green: b * e + b / 2,
              red: b * d + b / 2,
            };
            c[a] = h;
            a++;
          }
      return c;
    }
    function k(a, b, c) {
      var d = !1,
        e = a.length / 4;
      for (var f = 0, j = 0; f < e; f++, j += 4) {
        var k = a[j],
          l = a[j + 1],
          m = a[j + 2],
          n = h(),
          o = Infinity,
          p = 0;
        for (var q = 0; q < g; q++) {
          var r = i(b[q], k, l, m);
          r < o && ((o = r), (p = q), (n = b[q]));
        }
        n.clusterSize++;
        c[f] !== p && ((c[f] = p), (d = !0));
      }
      return d;
    }
    function l(a, b, c) {
      var d = new Array(g),
        e = new Array(g),
        f = new Array(g);
      d.fill(0);
      e.fill(0);
      f.fill(0);
      var h = a.length / 4;
      for (var i = 0, j = 0; i < h; i++, j += 4) {
        var k = a[j],
          l = a[j + 1],
          m = a[j + 2],
          n = c[i];
        d[n] += k;
        e[n] += l;
        f[n] += m;
      }
      for (var k = 0; k < g; k++) {
        l = b[k];
        l.clusterSize > 0 &&
          ((l.red = d[k] / l.clusterSize),
          (l.green = e[k] / l.clusterSize),
          (l.blue = f[k] / l.clusterSize),
          (l.clusterSize = 0));
      }
    }
    function a(a) {
      var b = a.length,
        c = j();
      b = new Array(b);
      b.fill(-1);
      while (k(a, c, b)) l(a, c, b);
      return c.sort(function (a, b) {
        return b.clusterSize - a.clusterSize;
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometEntityHeaderCoverDraggable.react",
  [
    "fbt",
    "ix",
    "BaseScrollableArea.react",
    "CometAspectRatioContainer.react",
    "TetraIcon.react",
    "TetraText.react",
    "UserAgent",
    "clamp",
    "fbicon",
    "react",
    "stylex",
    "useGlobalEventListener",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useEffect,
      m = b.useLayoutEffect,
      n = b.useRef,
      o = b.useState,
      p = {
        container: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        coverDraggable: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          cursor: "a7woen2v",
          touchAction: "kk8tqec8",
        },
        dragInstructions: {
          alignItems: "bp9cbjyn",
          backgroundColor: "d6rk862h",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          display: "j83agx80",
          paddingBottom: "sj5x9vvc",
          paddingEnd: "d1544ag0",
          paddingStart: "tw6a2znq",
          paddingTop: "cxgpxx05",
          position: "pmk7jnqg",
          start: "kfkz5moi",
          top: "rk01pc8j",
          transform: "py2didcb",
        },
        dragInstructionsIcon: { display: "j83agx80", marginEnd: "oi9244e8" },
      },
      q = { x: 0.5, y: 0.5 };
    function a(a) {
      var b = a.children,
        e = a.containerAspectRatio,
        f = a.contentAspectRatio,
        g = a.focus;
      g = g === void 0 ? q : g;
      var s = a.onDrag;
      a = a.xstyle;
      var t = c("UserAgent").isBrowser("Firefox < 53");
      t = t ? { minHeight: "100%" } : {};
      var u = n({ x: g.x, y: g.y });
      g = o(!0);
      var v = g[0],
        w = g[1],
        x = n(null),
        y = n(s);
      y.current = s;
      g = r(x);
      s = g[0];
      var z = g[1];
      g = k(
        function () {
          var a;
          a = (a = x.current) == null ? void 0 : a.getDOMNode();
          if (a == null) return;
          var b = a.scrollHeight,
            d = a.scrollLeft,
            g = a.scrollTop;
          a = a.scrollWidth;
          var h = u.current.x,
            i = u.current.y;
          if (f < e) {
            var j = 1 - f / e;
            i = g / b / j;
          } else if (f > e) {
            g = 1 - e / f;
            h = d / a / g;
          }
          y.current(c("clamp")(h, 0, 1), c("clamp")(i, 0, 1));
        },
        [e, f]
      );
      m(
        function () {
          var a;
          a = (a = x.current) == null ? void 0 : a.getDOMNode();
          if (a == null) return;
          var b = (a.scrollHeight - a.offsetHeight) * u.current.y;
          a.scrollTop = b;
          z.current.top = b;
          b = (a.scrollWidth - a.offsetWidth) * u.current.x;
          a.scrollLeft = b;
          z.current.left = b;
        },
        [z, g]
      );
      l(function () {
        var a,
          b = (a = x.current) == null ? void 0 : a.getDOMNode();
        if (b == null) return;
        var c = function a() {
          w(!1),
            b.removeEventListener("mousewheel", a, { passive: !0 }),
            b.removeEventListener("touchstart", a, { passive: !0 }),
            b.removeEventListener("mousedown", a, { passive: !0 });
        };
        b.addEventListener("mousewheel", c, { passive: !0 });
        b.addEventListener("touchstart", c, { passive: !0 });
        b.addEventListener("mousedown", c, { passive: !0 });
        return function () {
          b.removeEventListener("mousewheel", c, { passive: !0 }),
            b.removeEventListener("touchstart", c, { passive: !0 }),
            b.removeEventListener("mousedown", c, { passive: !0 });
        };
      }, []);
      return j.jsx(c("CometAspectRatioContainer.react"), {
        aspectRatio: e,
        xstyle: a,
        children: j.jsxs("div", {
          className: c("stylex")(p.container),
          onMouseDown: s,
          children: [
            j.jsx(c("BaseScrollableArea.react"), {
              hideScrollbar: !0,
              horizontal: !0,
              onScroll: g,
              ref: x,
              tabIndex: 0,
              vertical: !0,
              xstyle: p.coverDraggable,
              children:
                f < e
                  ? j.jsx(c("CometAspectRatioContainer.react"), {
                      aspectRatio: f,
                      style: t,
                      children: b,
                    })
                  : j.jsx("div", {
                      style: { width: (100 * f) / e + "%" },
                      children: j.jsx(c("CometAspectRatioContainer.react"), {
                        aspectRatio: f,
                        children: b,
                      }),
                    }),
            }),
            v &&
              j.jsxs("div", {
                className: c("stylex")(p.dragInstructions),
                children: [
                  j.jsx("div", {
                    className: c("stylex")(p.dragInstructionsIcon),
                    children: j.jsx(c("TetraIcon.react"), {
                      color: "white",
                      icon: d("fbicon")._(i("697185"), 20),
                    }),
                  }),
                  j.jsx(c("TetraText.react"), {
                    color: "white",
                    type: "headlineEmphasized4",
                    children: h._("Drag to Reposition"),
                  }),
                ],
              }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function r(a) {
      var b = n({ x: 0, y: 0 }),
        d = n({ left: 0, top: 0 }),
        e = o(!1),
        f = e[0],
        g = e[1];
      e = function (c) {
        var e;
        if (c.button !== 0) return;
        e = (e = a.current) == null ? void 0 : e.getDOMNode();
        if (e == null) return;
        g(!0);
        b.current = { x: c.clientX, y: c.clientY };
        d.current.top = e.scrollTop;
        d.current.left = e.scrollLeft;
        c.preventDefault();
      };
      var h = k(
          function (c) {
            var e;
            e = (e = a.current) == null ? void 0 : e.getDOMNode();
            if (e == null) return;
            if (!f) return;
            var g = c.clientX - b.current.x,
              h = c.clientY - b.current.y;
            e.scrollTop = d.current.top - h;
            e.scrollLeft = d.current.left - g;
            c.preventDefault();
          },
          [f, a]
        ),
        i = k(function (a) {
          g(!1), a.preventDefault();
        }, []);
      c("useGlobalEventListener")("mousemove", f ? h : null, { capture: !0 });
      c("useGlobalEventListener")("mouseup", f ? i : null, { capture: !0 });
      return [e, d];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometObjectFitContainerNext.react",
  ["CometAspectRatioContainer.react", "UserAgent", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        absoluteCenter: {
          left: "pzli0o6b",
          position: "pmk7jnqg",
          top: "rk01pc8j",
          transform: "py2didcb",
        },
        hideOverflow: { overflowX: "ni8dbmo4", overflowY: "stjgntxs" },
      };
    function a(a) {
      var b = a.children,
        d = a.containerAspectRatio,
        e = a.containerChildrenBefore;
      e = e === void 0 ? null : e;
      var f = a.containerChildrenAfter;
      f = f === void 0 ? null : f;
      var g = a.contentAspectRatio,
        j = a.focus;
      j = j === void 0 ? { x: 0.5, y: 0.5 } : j;
      var k = a.mode;
      k = k === void 0 ? "cover" : k;
      a = a.showOverflow;
      a = a === void 0 ? !1 : a;
      var l = c("UserAgent").isBrowser("Firefox < 53");
      l = l ? { minHeight: "100%" } : {};
      if (d > g)
        if (k === "cover")
          return h.jsxs(c("CometAspectRatioContainer.react"), {
            aspectRatio: d,
            xstyle: !a && i.hideOverflow,
            children: [
              e,
              h.jsx(c("CometAspectRatioContainer.react"), {
                aspectRatio: g,
                style: babelHelpers["extends"]({}, l, {
                  left: j.x * 100 + "%",
                  position: "absolute",
                  top: j.y * 100 + "%",
                  transform:
                    "translate(" + j.x * -100 + "%, " + j.y * -100 + "%)",
                }),
                xstyle: !a && i.hideOverflow,
                children: b,
              }),
              f,
            ],
          });
        else
          return h.jsxs(c("CometAspectRatioContainer.react"), {
            aspectRatio: d,
            xstyle: !a && i.hideOverflow,
            children: [
              e,
              h.jsx("div", {
                className: c("stylex")(i.absoluteCenter),
                style: { width: (100 * g) / d + "%" },
                children: h.jsx(c("CometAspectRatioContainer.react"), {
                  aspectRatio: g,
                  xstyle: !a && i.hideOverflow,
                  children: b,
                }),
              }),
              f,
            ],
          });
      else if (k === "cover")
        return h.jsxs(c("CometAspectRatioContainer.react"), {
          aspectRatio: d,
          xstyle: !a && i.hideOverflow,
          children: [
            e,
            h.jsx("div", {
              style: {
                left: j.x * 100 + "%",
                position: "absolute",
                top: j.y * 100 + "%",
                transform:
                  "translate(" + j.x * -100 + "%, " + j.y * -100 + "%)",
                width: (100 * g) / d + "%",
              },
              children: h.jsx(c("CometAspectRatioContainer.react"), {
                aspectRatio: g,
                xstyle: !a && i.hideOverflow,
                children: b,
              }),
            }),
            f,
          ],
        });
      else
        return h.jsxs(c("CometAspectRatioContainer.react"), {
          aspectRatio: d,
          xstyle: !a && i.hideOverflow,
          children: [
            e,
            h.jsx(c("CometAspectRatioContainer.react"), {
              aspectRatio: g,
              xstyle: [i.absoluteCenter, !a && i.hideOverflow],
              children: b,
            }),
            f,
          ],
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityHeaderCoverMedia.react",
  [
    "BaseImage.react",
    "BaseRow.react",
    "BaseRowItem.react",
    "CometAspectRatioContainer.react",
    "CometEntityHeaderScrollToContext",
    "CometFeedWidthStyles",
    "CometObjectFitContainerNext.react",
    "CometPlaceholder.react",
    "CometPressable.react",
    "CometRouteRenderType",
    "CometRow.react",
    "CometRowItem.react",
    "deferredLoadComponent",
    "emptyFunction",
    "gkx",
    "react",
    "requireDeferredForDisplay",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef,
      l = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometEntityHeaderCoverDraggable.react"
        ).__setRef("CometEntityHeaderCoverMedia.react")
      ),
      m = {
        accessory: {
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
        },
        backgroundCover: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        backgroundMask: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          backgroundImage: "jge66auo",
        },
        backgroundMaskWash: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          backgroundImage: "j6lzsp60",
        },
        coverActionBarContainer: {
          backgroundColor: "d6rk862h",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          zIndex: "tkr6xdv7",
        },
        coverActionBarContainerPushView: { top: "t4zy2t7z" },
        coverButton: { marginBottom: "sjgh65i0" },
        coverButtonRow: {
          backgroundImage: "kpb67iw4",
          paddingEnd: "gl4o1x5y",
          paddingStart: "lt9micmv",
          position: "l9j0dhe7",
        },
        coverFooterExternal: {
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
        coverHeaderRow: {
          display: "j83agx80",
          justifyContent: "taijpn5t",
          paddingTop: "immc8rqz",
          position: "l9j0dhe7",
        },
        coverMedia: {
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        coverMediaLarge: { maxWidth: "l946jzrp" },
        coverMediaPlaceholder: { backgroundColor: "qsy8amke" },
        coverMediaRoundCornersBottom: {
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          "@media (max-width: 939px)": {
            borderBottomEndRadius: "kipmrytf",
            borderBottomStartRadius: "bti8j40k",
          },
        },
        coverMediaRoundCornersTop: {
          borderTopEndRadius: "pw54ja7n",
          borderTopStartRadius: "ue3kfks5",
          "@media (max-width: 939px)": {
            borderTopEndRadius: "mhvw0uep",
            borderTopStartRadius: "rldwrbua",
          },
        },
        coverPhoto: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          justifyContent: "taijpn5t",
        },
        image: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          height: "datstx6m",
          width: "k4urcfbm",
        },
        mediaOverlayContainer: {
          backgroundColor: "d6rk862h",
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        mediaOverlayContainerNoShade: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        navBarPushViewBackground: {
          backgroundColor: "hybvsw6c",
          height: "cb02d2ww",
        },
        pressable: { display: "a8c37x1j" },
      },
      n = d("CometFeedWidthStyles").getEntityHeaderWidthStyles(),
      o = 1.9,
      p = 2.7,
      q = 9.4,
      r = 1.1;
    function a(a) {
      var b = a.backgroundMask;
      b = b === void 0 ? "card" : b;
      var e = a.backgroundMedia,
        f = a.coverActionBar,
        g = a.coverButton,
        s = a.coverFooter,
        t = a.coverHeader,
        u = a.coverMedia,
        v = a.coverOverlay,
        w = a.showCoverOverlayShade;
      w = w === void 0 ? !0 : w;
      var x = a.isDraggable;
      x = x === void 0 ? !1 : x;
      var y = a.onDrag;
      y = y === void 0 ? c("emptyFunction") : y;
      var z = a.renderCoverFooterBelow;
      z = z === void 0 ? !1 : z;
      var A = a.roundCorners,
        B = a.size;
      B = B === void 0 ? "normal" : B;
      a = a.scrollToBottom;
      var C = a === void 0 ? !1 : a;
      a = 0.5;
      var D = 0.5,
        E = 0,
        F = null,
        G = 0,
        H = null;
      if (u != null) {
        var I = u.focusX,
          J = u.focusY,
          K = u.height,
          L = u.mediaSource,
          M = u.width;
        u = babelHelpers.objectWithoutPropertiesLoose(u, [
          "focusX",
          "focusY",
          "height",
          "mediaSource",
          "width",
        ]);
        a = (I = I) != null ? I : a;
        D = (I = J) != null ? I : D;
        E = (J = K) != null ? J : E;
        F = (I = L) != null ? I : F;
        G = (K = M) != null ? K : G;
        H = (J = u) != null ? J : H;
      }
      L = { large: o, mobile: r, normal: p, short: q };
      I = L[B];
      M = d("CometRouteRenderType").useIsPushView();
      var N = i(c("CometEntityHeaderScrollToContext")),
        O = k(null);
      j(
        function () {
          C && N.scrollToTop(O, 316);
        },
        [N, C]
      );
      K = c("gkx")("708253");
      J = ((u = e == null ? void 0 : e.focusX) != null ? u : 0.5) * 100 + "%";
      L = G > 0 && E > 0 ? G / E : I;
      u =
        typeof F === "string"
          ? h.jsx(c("BaseImage.react"), {
              "data-imgperflogname": "profileCoverPhoto",
              src: F,
              xstyle: m.image,
            })
          : F;
      G =
        typeof F === "string"
          ? h.jsx(c("CometObjectFitContainerNext.react"), {
              containerAspectRatio: I,
              contentAspectRatio: L,
              focus: { x: a, y: D },
              mode: "cover",
              children: h.jsx(c("BaseImage.react"), {
                "data-imgperflogname": "profileCoverPhoto",
                src: F,
                xstyle: m.image,
              }),
            })
          : h.jsx(c("CometAspectRatioContainer.react"), {
              aspectRatio: I,
              children: F,
            });
      E = x
        ? h.jsx(c("CometAspectRatioContainer.react"), {
            aspectRatio: I,
            children: h.jsx(c("CometPlaceholder.react"), {
              fallback: G,
              children: h.jsx(l, {
                containerAspectRatio: I,
                contentAspectRatio: L,
                focus: { x: a, y: D },
                onDrag: y,
                xstyle: m.image,
                children: u,
              }),
            }),
          })
        : G;
      return h.jsxs(h.Fragment, {
        children: [
          f != null &&
            h.jsxs(h.Fragment, {
              children: [
                h.jsx("div", {
                  className: c("stylex")(M && m.navBarPushViewBackground),
                }),
                h.jsx("div", {
                  className: c("stylex")(
                    m.coverActionBarContainer,
                    M && m.coverActionBarContainerPushView
                  ),
                  children: f,
                }),
              ],
            }),
          h.jsxs(c("BaseRow.react"), {
            align: "center",
            children: [
              K &&
                e != null &&
                h.jsxs("div", {
                  className: c("stylex")(m.backgroundCover, e.xstyle),
                  children: [
                    h.jsx(c("CometAspectRatioContainer.react"), {
                      aspectRatio: L,
                      style: {
                        left: J,
                        position: "absolute",
                        top: 0,
                        transform: "translateX(-" + J + ")",
                      },
                      children: h.jsx(c("BaseImage.react"), {
                        src: e.uri,
                        xstyle: m.image,
                      }),
                    }),
                    h.jsx("div", {
                      className: c("stylex")(
                        b === "card" && m.backgroundMask,
                        b === "wash" && m.backgroundMaskWash
                      ),
                    }),
                  ],
                }),
              h.jsxs(c("BaseRowItem.react"), {
                expanding: !0,
                useDeprecatedStyles: !0,
                xstyle: [m.coverPhoto, n.coverMediaContainer],
                children: [
                  h.jsxs("div", {
                    className: c("stylex")(
                      m.coverMedia,
                      B === "large" && m.coverMediaLarge,
                      !z && A !== "none" && K && m.coverMediaRoundCornersBottom,
                      A === "all" && m.coverMediaRoundCornersTop,
                      u == null && m.coverMediaPlaceholder
                    ),
                    ref: O,
                    style: {
                      borderRadius:
                        !z && A !== "none"
                          ? "max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px"
                          : "",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                    },
                    children: [
                      t != null &&
                        h.jsx("div", {
                          className: c("stylex")(m.coverHeaderRow),
                          children: t,
                        }),
                      ((F = H) == null ? void 0 : F.linkProps) != null ||
                      ((x = H) == null ? void 0 : x.onPress) != null
                        ? h.jsx(
                            c("CometPressable.react"),
                            babelHelpers["extends"]({}, H, {
                              display: "inline",
                              overlayDisabled: !0,
                              testid: void 0,
                              xstyle: m.pressable,
                              children: E,
                            })
                          )
                        : E,
                      v != null &&
                        h.jsx("div", {
                          className: c("stylex")(
                            w
                              ? m.mediaOverlayContainer
                              : m.mediaOverlayContainerNoShade
                          ),
                          children: v,
                        }),
                      (g != null || s != null) &&
                        h.jsxs("div", {
                          className: c("stylex")(m.accessory),
                          children: [
                            g != null &&
                              h.jsx("div", {
                                className: c("stylex")(m.coverButtonRow),
                                children: h.jsx(c("CometRow.react"), {
                                  align: "end",
                                  children: h.jsx(c("CometRowItem.react"), {
                                    children: h.jsx("div", {
                                      className: c("stylex")(m.coverButton),
                                      children: g,
                                    }),
                                  }),
                                }),
                              }),
                            !z && s,
                          ],
                        }),
                    ],
                  }),
                  z &&
                    h.jsx("div", {
                      className: c("stylex")(
                        m.coverFooterExternal,
                        A !== "none" && K && m.coverMediaRoundCornersBottom
                      ),
                      children: s,
                    }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "logCometFunnelEvent",
  ["CurrentUser", "react", "requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = c("requireDeferred")("WebFunnelLogger").__setRef(
        "logCometFunnelEvent"
      );
    function j(a, b, d) {
      i.onReady(function (e) {
        var f = new e(a);
        e = (e = d) != null ? e : {};
        var g = e.actionPayload,
          h = e.funnelPayload;
        e = e.secondaryOrder;
        g != null &&
          Object.keys(g).forEach(function (a) {
            return f.addActionPayload(a, g[a]);
          });
        h != null &&
          Object.keys(h).forEach(function (a) {
            return f.addFunnelPayload(a, h[a]);
          });
        e != null && f.setSecondaryOrder(String(e));
        f.setAction(b).setSessionKey(c("CurrentUser").getID()).log();
      });
    }
    function a(a, b, c) {
      h(
        function () {
          return j(a, b, c);
        },
        [b, a, c]
      );
    }
    g.logCometFunnelEvent = j;
    g.useLogCometFunnelImpressionEvent = a;
  },
  98
);
__d(
  "usePreviousSurfaceForGroupLogging",
  ["useRoutePassthroughProps", "useRouteReferrer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("useRoutePassthroughProps")(),
        b = c("useRouteReferrer")();
      switch (a == null ? void 0 : a.ref) {
        case "feed_story":
        case "actor_hovercard":
          if ((b == null ? void 0 : b.tracePolicy) === "comet.groups.feed")
            return "groups_targeted_tab";
          else if ((b == null ? void 0 : b.tracePolicy) === "comet.home")
            return "newsfeed";
          else if (
            (b == null ? void 0 : b.tracePolicy) ===
            "comet.profile.collection.groups"
          )
            return "timeline";
          else return "unknown";
        case "your_groups":
          return "other";
        case "groups_card":
          if ((b == null ? void 0 : b.tracePolicy) === "comet.groups.discover")
            return "groups_discover_tab";
          else if ((b == null ? void 0 : b.tracePolicy) === "comet.home")
            return "gysj";
          else return "unknown";
        case "notification":
          return "notification";
        case "bookmark":
          return "bookmarks";
        default:
          return "unknown";
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometCoverPhotoEditReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return {
        canReposition: !1,
        coverPhoto: null,
        editSlideshow: !1,
        file: null,
        isUploading: !1,
        selectedSlideshowIndex: null,
        shouldShowEditMenu: !1,
        slideshowData: [],
        videoUploadState: null,
      };
    }
    function b(a, b) {
      switch (b.type) {
        case "REPOSITION":
          return babelHelpers["extends"]({}, a, {
            canReposition: !0,
            coverPhoto: b.data,
          });
        case "REPOSITION_CANCEL":
          return babelHelpers["extends"]({}, a, {
            canReposition: !1,
            coverPhoto: null,
          });
        case "EDIT_SLIDESHOW":
          return babelHelpers["extends"]({}, a, {
            coverPhoto: b.data,
            editSlideshow: !0,
            isUploading: !1,
            slideshowData: b.slideshowData,
          });
        case "EDIT_SLIDESHOW_CANCEL":
          return babelHelpers["extends"]({}, a, {
            editSlideshow: !1,
            isUploading: !1,
            selectedSlideshowIndex: null,
            slideshowData: [],
          });
        case "CHOOSE_SLIDESHOW":
          return babelHelpers["extends"]({}, a, {
            selectedSlideshowIndex: b.selectedSlideshowIndex,
          });
        case "EDIT_SLIDESHOW_STARTED":
          return babelHelpers["extends"]({}, a, { isUploading: !0 });
        case "UPLOAD_FAILED":
          return babelHelpers["extends"]({}, a, {
            file: null,
            isUploading: !1,
          });
        case "UPLOAD_STARTED":
          return babelHelpers["extends"]({}, a, {
            file: b.file,
            isUploading: !0,
          });
        case "UPLOAD_SUCCESS":
          return babelHelpers["extends"]({}, a, {
            canReposition: !0,
            coverPhoto: b.data,
            file: null,
            isUploading: !1,
          });
        case "VIDEO_UPLOAD_FAILED":
          return babelHelpers["extends"]({}, a, { videoUploadState: "FAILED" });
        case "VIDEO_UPLOAD_ATTACHED":
          return babelHelpers["extends"]({}, a, {
            videoUploadState: "ATTACHED",
          });
        case "VIDEO_UPLOAD_STARTED":
          return babelHelpers["extends"]({}, a, {
            videoUploadState: "UPLOADING",
          });
        case "VIDEO_UPLOAD_POSTPROCESSING":
          return babelHelpers["extends"]({}, a, {
            videoUploadState: "POSTPROCESSING",
          });
        case "VIDEO_UPLOAD_SUCCESS":
          return babelHelpers["extends"]({}, a, { videoUploadState: null });
        case "UPLOAD_SLIDESHOW_SUCCESS":
          return babelHelpers["extends"]({}, a, {
            canReposition: !1,
            editSlideshow: !0,
            file: null,
            isUploading: !1,
            slideshowData: b.slideshowData,
          });
        case "SHOW_EDIT_MENU":
          return babelHelpers["extends"]({}, a, { shouldShowEditMenu: !0 });
        case "DID_SHOW_EDIT_MENU":
          return babelHelpers["extends"]({}, a, { shouldShowEditMenu: !1 });
        default:
          return a;
      }
    }
    f.getInitialState = a;
    f.reducer = b;
  },
  66
);
__d(
  "ProfileCometCoverPhotoEditContext",
  ["CometCoverPhotoEditReducer", "emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      dispatch: c("emptyFunction"),
      state: d("CometCoverPhotoEditReducer").getInitialState(),
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometSSRViewportHints",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    e = {
      max: function (a, b) {
        return a <= b;
      },
      min: function (a, b) {
        return a >= b;
      },
    };
    var g = null,
      h = null,
      i = [];
    function a(a) {
      return a === "width" ? g : h;
    }
    function b(a) {
      (g = a.width_px), (h = a.height_px);
    }
    function c(a, b, c, d) {
      var e = i.findIndex(function (b) {
        return b.dimension === a && b.operation === c && b.result === d;
      });
      if (e === -1)
        i.push({ dimension: a, numPixels: b, operation: c, result: d });
      else {
        var f = (c === "min" && d === !0) || (c === "max" && d === !1),
          g = i[e].numPixels;
        i[e].numPixels = f ? Math.max(g, b) : Math.min(g, b);
      }
    }
    function d() {
      i.length = 0;
    }
    f.check = e;
    f.useMatchViewportResults = i;
    f.getDimension = a;
    f.setDimensions = b;
    f.addUseMatchViewportResult = c;
    f.clearUseMatchViewportResults = d;
  },
  66
);
__d(
  "useMatchViewport",
  [
    "CometSSRViewportHints",
    "ExecutionEnvironment",
    "gkx",
    "react",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useMatchMedia",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;
    function a(a, b, e) {
      var f = h(function () {
          if (!d("ExecutionEnvironment").canUseDOM) {
            var c = d("CometSSRViewportHints").getDimension(b);
            return c != null ? d("CometSSRViewportHints").check[a](c, e) : !1;
          }
          return !!window.matchMedia && window.matchMedia(i(a, b, e)).matches;
        }),
        g = f[0],
        j = f[1];
      d("ExecutionEnvironment").canUseDOM ||
        d("CometSSRViewportHints").addUseMatchViewportResult(b, e, a, g);
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          if (!window.matchMedia) return;
          var c = i(a, b, e),
            d = window.matchMedia(c),
            f = function (a) {
              return j(a.matches);
            };
          d.addListener(f);
          return function () {
            return d.removeListener(f);
          };
        },
        [a, b, e]
      );
      return g;
    }
    function b(a, b, d) {
      return c("useMatchMedia")(i(a, b, d));
    }
    e = c("gkx")("1457") ? a : b;
    function i(a, b, c) {
      return "(" + a + "-" + b + ": " + c + "px)";
    }
    g["default"] = e;
  },
  98
);
__d(
  "EntPhotoCollageItemContainerQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "id" },
        b = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        c = [{ kind: "Variable", name: "id", variableName: "id" }];
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "EntPhotoCollageItemContainerQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EntPhotoCollageItem_media",
                    },
                  ],
                  type: "Photo",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "EntPhotoCollageItemContainerQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "context",
                          value: "comet_media_viewer",
                        },
                        { kind: "Literal", name: "height", value: 1e6 },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
                        { kind: "Literal", name: "width", value: 1e6 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "height",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "uri",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "width",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Vect2",
                      kind: "LinkedField",
                      name: "focus",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "x",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "y",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "Photo",
                  abstractKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3825262914227511",
          metadata: {},
          name: "EntPhotoCollageItemContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "EntPhotoCollageItem_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "EntPhotoCollageItem_media",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "context", value: "comet_media_viewer" },
            { kind: "Literal", name: "height", value: 1e6 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 1e6 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "height",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "width",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Vect2",
          kind: "LinkedField",
          name: "focus",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "x",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "y",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Photo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometComposerEditMediaAttachmentItemButton.react",
  [
    "fbt",
    "ix",
    "CometMediaEditorPageResource",
    "CometVideoToolsLoggingContext",
    "MediaEditorViewStateContext",
    "TetraButton.react",
    "emptyFunction",
    "fbicon",
    "gkx",
    "lazyLoadComponent",
    "react",
    "useCometComposerPushPage",
    "useComposerPluginIneligibility",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext,
      l = c("lazyLoadComponent")(c("CometMediaEditorPageResource"));
    function a(a, b) {
      var e,
        f = a.buttonLabel;
      f = f === void 0 ? h._("Edit") : f;
      var g = a.index,
        m = a.isOnVideoLiteComposer;
      a = a.onClickLog;
      var n = a === void 0 ? c("emptyFunction") : a,
        o = c("useCometComposerPushPage")();
      a = c("useComposerPluginIneligibility")().has("MEDIA_EDIT");
      var p = k(c("CometVideoToolsLoggingContext"));
      e =
        (e = k(c("MediaEditorViewStateContext"))) == null
          ? void 0
          : e.isEditingPreExistingStory;
      e === !0 &&
        (p = babelHelpers["extends"]({}, p, { dialogMode: "video_edit" }));
      return a && !c("gkx")("1915661")
        ? null
        : j.jsx(c("TetraButton.react"), {
            icon: d("fbicon")._(i("477825"), 16),
            label: f,
            onPress: function () {
              o != null &&
                (n(),
                o(
                  h._("Photo Detail"),
                  function (a) {
                    a = a.onReturn;
                    return j.jsx(c("CometVideoToolsLoggingContext").Provider, {
                      value: p,
                      children: j.jsx(l, {
                        index: g,
                        isDialog: !0,
                        isOnVideoLiteComposer: m,
                        onBack: a,
                      }),
                    });
                  },
                  { hasCustomHeader: !0 }
                ));
            },
            ref: b,
            testid: void 0,
            type: "overlay",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometComposerRemoveMediaAttachmentItemButton.react",
  [
    "fbt",
    "ix",
    "TetraCircleButton.react",
    "cometIsMimeTypeForMedia",
    "fbicon",
    "react",
    "useComposerViewStateDispatcher",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback;
    function a(a) {
      var b = a.attachment,
        e = c("useComposerViewStateDispatcher")();
      a = k(
        function () {
          e({ attachment: b, type: "REMOVE_MEDIA_ATTACHMENT_ITEM" });
        },
        [b, e]
      );
      return j.jsx("div", {
        className: "a7x4jqbc gwewmpg2 pmk7jnqg jaqpu5ht",
        children: j.jsx(c("TetraCircleButton.react"), {
          icon: d("fbicon")._(i("478238"), 20),
          label: d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(
            b == null ? void 0 : b.fileType
          )
            ? h._("Remove photo")
            : h._("Remove video"),
          onPress: a,
          size: 36,
          type: "overlay",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoEditorUtils.react",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a) {
      if (!a || !a.length) return null;
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        switch (d.state) {
          case "UPLOADING":
            switch (d.fileType) {
              case "VIDEO":
                return d;
              default:
            }
            break;
          case "UPLOADED":
            switch (d.fileType) {
              case "VIDEO":
                return d;
              default:
            }
            break;
          case "PREEXISTING":
            switch (d.fileType) {
              case "VIDEO":
                return d;
              default:
            }
          default:
        }
      }
      return null;
    };
    a = function (a) {
      if (!a) return null;
      a = g(a.mediaAttachments);
      return (a == null ? void 0 : a.videoAttachmentMetadata) || null;
    };
    b = function (a) {
      a = h(a);
      return (a == null ? void 0 : a.videoAttachmentMetadata) || null;
    };
    c = function (a) {
      if (
        a.fileType === "VIDEO" &&
        (a.state === "UPLOADED" || a.state === "PREEXISTING")
      ) {
        return (
          (a == null
            ? void 0
            : (a = a.videoAttachmentMetadata) == null
            ? void 0
            : a.thumbnailPreviewURL) || ""
        );
      }
      return "";
    };
    function h(a) {
      if (a == null) return;
      switch (a.state) {
        case "UPLOADING":
          switch (a.fileType) {
            case "VIDEO":
              return a;
            default:
          }
          return;
        case "UPLOADED":
          switch (a.fileType) {
            case "VIDEO":
              return a;
            default:
          }
          return;
        default:
      }
    }
    f.getFirstVideoAttachment = g;
    f.getVideoAttachmentMetaDataFromForFirstVideoComposerState = a;
    f.getVideoAttachmentMetadata = b;
    f.getThumbnailURLFromVideoMetadata = c;
  },
  66
);
__d(
  "CometComposerFocusImage.react",
  ["CometFeedFocusMedia.react", "CometImage.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    b = 0.5;
    e = 0.5;
    function a(a) {
      var b = a.alt,
        d = a.focusX,
        e = a.focusY,
        f = a.imageHeight,
        g = a.imageWidth,
        j = a.onError,
        k = a.src;
      a = a.viewportAspectRatio;
      var l = i(
        function () {
          j && j();
          return void 0;
        },
        [j]
      );
      return h.jsx("div", {
        className: "stjgntxs ni8dbmo4",
        children: h.jsx(c("CometFeedFocusMedia.react"), {
          focusX: d,
          focusY: e,
          mediaHeight: f,
          mediaWidth: g,
          viewportAspectRatio: a,
          children: function (a) {
            return h.jsx(c("CometImage.react"), {
              alt: b,
              onError: l,
              src: k,
              xstyle: a,
            });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = h.memo(a);
    g.DEFAULT_FOCUS_X = b;
    g.DEFAULT_FOCUS_Y = e;
    g.CometComposerFocusImage = d;
  },
  98
);
__d(
  "CometPhotoLayoutMediaOverlay.react",
  ["fbt", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.numItemsNotShown;
      return i.jsx("div", {
        className:
          "hzruof5a taijpn5t cbu4d94t j83agx80 sx5rzos5 bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
        children: i.jsx(c("TetraText.react"), {
          align: "center",
          color: "white",
          type: "entityHeaderHeadline2",
          children: h._("+{num}", [h._param("num", a)]),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ComposerCometPhotoLayoutMediaAttachmentContext",
  ["CometComposerFocusImage.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      adID: null,
      focusX: d("CometComposerFocusImage.react").DEFAULT_FOCUS_X,
      focusY: d("CometComposerFocusImage.react").DEFAULT_FOCUS_Y,
      mediasetToken: null,
      numPhotosNotShown: 0,
      shouldRoundCorners: !0,
      shouldShowOverlay: !1,
      viewportAspectRatio: 1,
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "CometComposerPhotoLayoutItem.react",
  [
    "CometBackgroundImage.react",
    "CometComposerFocusImage.react",
    "CometPhotoLayoutMediaOverlay.react",
    "ComposerCometPhotoLayoutMediaAttachmentContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.alt,
        e = a.height,
        f = a.numPhotosNotShown,
        g = a.onError,
        j = a.shouldShowOverlay,
        k = a.src,
        l = a.viewportAspectRatio;
      a = a.width;
      var m = i(c("ComposerCometPhotoLayoutMediaAttachmentContext")),
        n = m.focusX;
      m = m.focusY;
      if (e == null || a == null)
        return h.jsx(c("CometBackgroundImage.react"), {
          draggable: !1,
          src: k,
        });
      else
        return h.jsxs(h.Fragment, {
          children: [
            h.jsx(d("CometComposerFocusImage.react").CometComposerFocusImage, {
              alt: b,
              focusX: n,
              focusY: m,
              imageHeight: e,
              imageWidth: a,
              onError: g,
              src: k,
              viewportAspectRatio: l,
            }),
            j === !0 && f != null
              ? h.jsx(c("CometPhotoLayoutMediaOverlay.react"), {
                  numItemsNotShown: f,
                })
              : null,
          ],
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ComposerCometSelectedPhotoLayoutContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { layout: "classic" };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "EntPhotoCollageItem.react",
  [
    "CometBackgroundImage.react",
    "CometComposerPhotoLayoutItem.react",
    "CometRelay",
    "ComposerCometPhotoLayoutMediaAttachmentContext",
    "ComposerCometSelectedPhotoLayoutContext",
    "EntPhotoCollageItem_media.graphql",
    "composerMediaAttachmentReducer",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect;
    function a(a) {
      var e;
      c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"));
      var f = c("useComposerViewStateDispatcher")(),
        g = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("EntPhotoCollageItem_media.graphql")),
          a.media
        );
      k(
        function () {
          var b, c;
          b = g == null ? void 0 : (b = g.image) == null ? void 0 : b.height;
          c = g == null ? void 0 : (c = g.image) == null ? void 0 : c.width;
          b != null &&
            c != null &&
            f({
              entID: a.id,
              height: b,
              type: "SET_MEDIA_ATTACHMENT_ITEM_CDN_DIMENSIONS",
              width: c,
            });
        },
        [g, f, a.id]
      );
      e = g == null ? void 0 : (e = g.image) == null ? void 0 : e.uri;
      var l = j(c("ComposerCometSelectedPhotoLayoutContext")),
        m = j(c("ComposerCometPhotoLayoutMediaAttachmentContext")),
        n = m.numPhotosNotShown,
        o = m.setFocusX,
        p = m.setFocusY,
        q = m.shouldShowOverlay;
      m = m.viewportAspectRatio;
      var r = g == null ? void 0 : g.image,
        s = r == null ? void 0 : r.height;
      r = r == null ? void 0 : r.width;
      var t = g == null ? void 0 : g.focus,
        u = t == null ? void 0 : t.x,
        v = t == null ? void 0 : t.y;
      k(
        function () {
          o && p && u != null && v != null && (o(u), p(v));
        },
        [o, p, u, v]
      );
      if (e == null) return null;
      else if (!!l.layout && l.layout !== "classic")
        return i.jsx(c("CometComposerPhotoLayoutItem.react"), {
          height: s,
          numPhotosNotShown: n,
          shouldShowOverlay: q,
          src: e,
          viewportAspectRatio: m,
          width: r,
        });
      else
        return i.jsx(c("CometBackgroundImage.react"), {
          draggable: !1,
          src: e,
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EntPhotoCollageItemContainer.react",
  [
    "CometRelay",
    "EntPhotoCollageItem.react",
    "EntPhotoCollageItemContainerQuery.graphql",
    "WebPixelRatio",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useLazyLoadQuery(
        h !== void 0 ? h : (h = b("EntPhotoCollageItemContainerQuery.graphql")),
        { id: a.id, scale: d("WebPixelRatio").get() }
      );
      return i.jsx(c("EntPhotoCollageItem.react"), {
        id: a.id,
        media: e == null ? void 0 : e.node,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CDNPreviewPhotoCollageItem.react",
  [
    "CollageItemFallback.react",
    "CometPlaceholder.react",
    "EntPhotoCollageItemContainer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entID,
        d = a.filename,
        e = a.fileType;
      a = a.percentComplete;
      e = h.jsx(c("CollageItemFallback.react"), {
        fileType: e,
        filename: d,
        percentComplete: a,
      });
      if (b != null)
        return h.jsx(c("CometPlaceholder.react"), {
          fallback: e,
          children: h.jsx(c("EntPhotoCollageItemContainer.react"), { id: b }),
        });
      else return e;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PlayableCollageItemOverlay.react",
  ["CometImage.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        className: "hyc5pup2 rr1tmaxi pmk7jnqg",
        children: h.jsx(c("CometImage.react"), {
          height: 72,
          src: "/images/video/play_72dp.png",
          width: 72,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "OptimisticallyUploadedPhotoCollageItem.react",
  [
    "CDNPreviewPhotoCollageItem.react",
    "CometBackgroundImage.react",
    "JSResourceForInteraction",
    "PlayableCollageItemOverlay.react",
    "composerMediaAttachmentReducer",
    "lazyLoadComponent",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerSphericalMediaGyroIndicator.react"
        ).__setRef("OptimisticallyUploadedPhotoCollageItem.react")
      );
    function a(a) {
      var b = a.attachment;
      c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"));
      var d = c("useComposerViewStateDispatcher")();
      a = b.sphericalEncoding ? h.jsx(i, {}) : null;
      return b.fileObjectURL != null && b.useCDNPreview !== !0
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx(c("CometBackgroundImage.react"), {
                draggable: !1,
                onError: function () {
                  d({
                    attachment: b,
                    type: "SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW",
                  });
                },
                src: b.fileObjectURL,
              }),
              b.fileType === "VIDEO"
                ? h.jsx(c("PlayableCollageItemOverlay.react"), {})
                : null,
              a,
            ],
          })
        : h.jsxs(h.Fragment, {
            children: [
              h.jsx(c("CDNPreviewPhotoCollageItem.react"), {
                entID: b.entID,
                fileType: b.fileType,
                filename: b.fileName,
                percentComplete: b.percentComplete,
              }),
              a,
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "OptimisticallyUploadedVideoCollageItem.react",
  [
    "CDNPreviewPhotoCollageItem.react",
    "CircularProgressBar.react",
    "PlayableCollageItemOverlay.react",
    "composerMediaAttachmentReducer",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.attachment;
      c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"));
      var d = c("useComposerViewStateDispatcher")();
      a = b.fileObjectURL;
      var e = b.percentComplete;
      return b.fileObjectURL != null && b.useCDNPreview !== !0
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx("video", {
                className: "k4urcfbm bixrwtb6 datstx6m",
                onLoadedMetadata: function (a) {
                  a.target.videoWidth === 0 &&
                    a.target.videoHeight === 0 &&
                    d({
                      attachment: b,
                      type: "SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW",
                    });
                },
                src: a,
              }),
              h.jsx(c("PlayableCollageItemOverlay.react"), {}),
              e != null &&
                h.jsx(c("CircularProgressBar.react"), {
                  percentComplete: e * 100,
                }),
            ],
          })
        : h.jsx(c("CDNPreviewPhotoCollageItem.react"), {
            fileType: b.fileType,
            filename: b.fileName,
            percentComplete: b.percentComplete,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "OptimisticallyUploadedCollageItem.react",
  [
    "OptimisticallyUploadedPhotoCollageItem.react",
    "OptimisticallyUploadedVideoCollageItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.attachment;
      var b =
        a.fileType === "PHOTO" ||
        a.fileType === "UNKNOWN" ||
        (a.fileType === "VIDEO" && a.fileMimeType === "image/gif");
      return b
        ? h.jsx(c("OptimisticallyUploadedPhotoCollageItem.react"), {
            attachment: a,
          })
        : h.jsx(c("OptimisticallyUploadedVideoCollageItem.react"), {
            attachment: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PreexistingPhotoLayoutItem.react",
  [
    "CDNPreviewPhotoCollageItem.react",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "composerMediaAttachmentReducer",
    "lazyLoadComponent",
    "react",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerSphericalMediaGyroIndicator.react"
        ).__setRef("PreexistingPhotoLayoutItem.react")
      );
    function a(a) {
      a = a.attachment;
      c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"));
      var b = a.sphericalEncoding
        ? h.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: h.jsx(i, {}),
          })
        : null;
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("CDNPreviewPhotoCollageItem.react"), {
            entID: a.entID,
            fileType: a.fileType,
            filename: null,
          }),
          b,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PreexistingPhotoCollageItem.react",
  ["CometBackgroundImage.react", "PreexistingPhotoLayoutItem.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.attachment;
      return a.fileType !== "UNKNOWN"
        ? h.jsx(c("PreexistingPhotoLayoutItem.react"), { attachment: a })
        : h.jsx(c("CometBackgroundImage.react"), { draggable: !1, src: a.url });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UploadingOrUploadedPhotoCollageItem.react",
  [
    "CDNPreviewPhotoCollageItem.react",
    "CometBackgroundImage.react",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "PlayableCollageItemOverlay.react",
    "composerMediaAttachmentReducer",
    "lazyLoadComponent",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerSphericalMediaGyroIndicator.react"
        ).__setRef("UploadingOrUploadedPhotoCollageItem.react")
      );
    function a(a) {
      var b = a.attachment;
      c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"));
      var d = c("useComposerViewStateDispatcher")();
      a = b.sphericalEncoding
        ? h.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: h.jsx(i, {}),
          })
        : null;
      var e = b.file;
      return b.fileObjectURL != null && b.useCDNPreview !== !0
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx(c("CometBackgroundImage.react"), {
                alt: e.name,
                draggable: !1,
                onError: function () {
                  d({
                    attachment: b,
                    type: "SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW",
                  });
                },
                src: b.fileObjectURL,
              }),
              b.fileType === "VIDEO"
                ? h.jsx(c("PlayableCollageItemOverlay.react"), {})
                : null,
              a,
            ],
          })
        : h.jsxs(h.Fragment, {
            children: [
              h.jsx(c("CDNPreviewPhotoCollageItem.react"), {
                entID: b.state === "UPLOADED" ? b.entID : void 0,
                fileType: b.fileType,
                filename: e.name,
              }),
              a,
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UploadingOrUploadedPhotoLayoutItem.react",
  [
    "CDNPreviewPhotoCollageItem.react",
    "CometComposerPhotoLayoutItem.react",
    "CometPlaceholder.react",
    "ComposerCometPhotoLayoutMediaAttachmentContext",
    "JSResourceForInteraction",
    "composerMediaAttachmentReducer",
    "lazyLoadComponent",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerSphericalMediaGyroIndicator.react"
        ).__setRef("UploadingOrUploadedPhotoLayoutItem.react")
      ),
      k = 500,
      l = 261;
    function a(a) {
      var b = a.attachment;
      c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"));
      var d = c("useComposerViewStateDispatcher")();
      a = b.sphericalEncoding
        ? h.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: h.jsx(j, {}),
          })
        : null;
      var e = function () {
          d({
            attachment: b,
            type: "SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW",
          });
        },
        f = b.width != null ? b.width : null,
        g = b.height != null ? b.height : null;
      (f == null || g == null) && ((f = k), (g = l));
      var m = i(c("ComposerCometPhotoLayoutMediaAttachmentContext")),
        n = m.numPhotosNotShown,
        o = m.shouldShowOverlay;
      m = m.viewportAspectRatio;
      var p = b.file;
      if (b.useCDNPreview !== !0 && b.fileObjectURL != null)
        return h.jsxs("div", {
          children: [
            h.jsx(c("CometComposerPhotoLayoutItem.react"), {
              alt: p.name,
              height: g,
              numPhotosNotShown: n,
              onError: e,
              shouldShowOverlay: o,
              src: b.fileObjectURL,
              viewportAspectRatio: m,
              width: f,
            }),
            a,
          ],
        });
      else
        return h.jsxs(h.Fragment, {
          children: [
            h.jsx(c("CDNPreviewPhotoCollageItem.react"), {
              entID: b.state === "UPLOADED" ? b.entID : void 0,
              fileType: b.fileType,
              filename: p.name,
            }),
            a,
          ],
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CDNPreviewVideoCollageItem.react",
  ["CollageItemFallback.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.filename;
      a = a.fileType;
      return h.jsx(c("CollageItemFallback.react"), {
        fileType: a,
        filename: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UploadingOrUploadedVideoCollageItem.react",
  [
    "CDNPreviewVideoCollageItem.react",
    "CometVideoEditorUtils.react",
    "PlayableCollageItemOverlay.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.attachment;
      if (a.fileType === "VIDEO") {
        var b = a.file,
          e = d("CometVideoEditorUtils.react").getThumbnailURLFromVideoMetadata(
            a
          );
        return a.fileObjectURL != null && a.useCDNPreview !== !0
          ? h.jsxs(h.Fragment, {
              children: [
                h.jsx("video", {
                  className: "k4urcfbm bixrwtb6 datstx6m",
                  poster: e,
                  src: a.fileObjectURL,
                }),
                h.jsx(c("PlayableCollageItemOverlay.react"), {}),
              ],
            })
          : h.jsx(c("CDNPreviewVideoCollageItem.react"), {
              entID: a.state === "UPLOADED" ? a.entID : void 0,
              fileType: a.fileType,
              filename: b.name,
            });
      } else return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UploadingOrUploadedCollageItem.react",
  [
    "ComposerCometSelectedPhotoLayoutContext",
    "UploadingOrUploadedPhotoCollageItem.react",
    "UploadingOrUploadedPhotoLayoutItem.react",
    "UploadingOrUploadedVideoCollageItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = a.attachment;
      var b =
          a.fileType === "PHOTO" ||
          (a.fileType === "VIDEO" && a.file.type === "image/gif"),
        d = i(c("ComposerCometSelectedPhotoLayoutContext"));
      d = !!d.layout && d.layout !== "classic";
      if (b)
        return d
          ? h.jsx(c("UploadingOrUploadedPhotoLayoutItem.react"), {
              attachment: a,
            })
          : h.jsx(c("UploadingOrUploadedPhotoCollageItem.react"), {
              attachment: a,
            });
      else
        return h.jsx(c("UploadingOrUploadedVideoCollageItem.react"), {
          attachment: a,
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerMediaAttachmentItem.react",
  [
    "fbt",
    "CollageItemFallback.react",
    "CometBackgroundImage.react",
    "CometComposerRemoveMediaAttachmentItemButton.react",
    "CometPlaceholder.react",
    "CometVideoEditorUtils.react",
    "JSResourceForInteraction",
    "OptimisticallyUploadedCollageItem.react",
    "PlayableCollageItemOverlay.react",
    "PreexistingPhotoCollageItem.react",
    "TetraText.react",
    "UploadingOrUploadedCollageItem.react",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerSphericalMediaGyroIndicator.react"
        ).__setRef("CometComposerMediaAttachmentItem.react")
      );
    function a(a) {
      var b = a.attachment;
      a = a.withRemoveButton;
      var e = a === void 0 ? !0 : a;
      a = b.sphericalEncoding
        ? i.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: i.jsx(j, {}),
          })
        : null;
      var f = function (a) {
        return e
          ? i.jsx(c("CometComposerRemoveMediaAttachmentItemButton.react"), {
              attachment: a,
            })
          : null;
      };
      switch (b.state) {
        case "PREEXISTING":
          var g;
          switch (b.fileType) {
            case "VIDEO":
              var k = d(
                "CometVideoEditorUtils.react"
              ).getThumbnailURLFromVideoMetadata(b);
              g = i.jsxs(i.Fragment, {
                children: [
                  i.jsx(c("CometBackgroundImage.react"), {
                    draggable: !1,
                    src: k.length > 0 ? k : b.imageURL,
                  }),
                  i.jsx(c("PlayableCollageItemOverlay.react"), {}),
                  a,
                ],
              });
              break;
            case "PHOTO":
              g = i.jsx(c("PreexistingPhotoCollageItem.react"), {
                attachment: b,
              });
              break;
            default:
              g = i.jsxs(i.Fragment, {
                children: [
                  i.jsx(c("CometBackgroundImage.react"), {
                    draggable: !1,
                    src: b.url,
                  }),
                  a,
                ],
              });
              break;
          }
          return i.jsxs(i.Fragment, { children: [g, f(b)] });
        case "NEW":
        case "CLIENT_PROCESSING":
        case "CLIENT_PROCESSING_COMPLETE":
          return i.jsxs(i.Fragment, {
            children: [
              i.jsx(c("CollageItemFallback.react"), {
                fileType: b.fileType,
                filename: b.file.name,
              }),
              a,
            ],
          });
        case "QUEUED":
        case "UPLOADING":
        case "UPLOADED":
          return b.file == null
            ? null
            : i.jsxs(i.Fragment, {
                children: [
                  i.jsx(c("UploadingOrUploadedCollageItem.react"), {
                    attachment: b,
                  }),
                  b.state === "UPLOADED"
                    ? f(b)
                    : i.jsx("div", {
                        className:
                          "g7nl5sj3 kr520xx4 pmk7jnqg datstx6m n7fi1qx3 m96f97by",
                        style: {
                          width: (1 - (b.percentComplete || 0)) * 100 + "%",
                        },
                        children: f(b),
                      }),
                ],
              });
        case "FAILED":
          k = b.error;
          if (k == null)
            switch (b.fileType) {
              case "VIDEO":
                k = h._("Unable to upload video");
                break;
              default:
                k = h._("Unable to upload image");
                break;
            }
          return i.jsxs(i.Fragment, {
            children: [
              b.file.name,
              i.jsxs(i.Fragment, {
                children: [
                  i.jsx("br", {}),
                  i.jsx(c("TetraText.react"), {
                    color: "negative",
                    type: "body4",
                    children: k,
                  }),
                ],
              }),
            ],
          });
        case "OPTIMISTIC_UPLOADED":
          return b.fileObjectURL == null
            ? null
            : i.jsx(c("OptimisticallyUploadedCollageItem.react"), {
                attachment: b,
              });
        default:
          return null;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometBloodDonationAttachmentStrings",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = function () {
      return h._("Schedule");
    };
    b = function () {
      return h._("Book Now");
    };
    c = function () {
      return h._("Book Appointment");
    };
    d = function () {
      return h._("Donate Blood");
    };
    e = function (a, b) {
      return b == null
        ? a
        : h._(
            "{Facility name (e.g. American Red Cross)} \u00b7 {Category name (e.g. Blood Bank)}",
            [
              h._param("Facility name (e.g. American Red Cross)", a),
              h._param("Category name (e.g. Blood Bank)", b),
            ]
          );
    };
    g.getScheduleCTA = a;
    g.getBookNowCTA = b;
    g.getBookAppointmentCTA = c;
    g.getAttachmentTitle = d;
    g.getFacilityNameWithCategory = e;
  },
  98
);
__d(
  "BloodDonationPartnerPrimaryBookingMethod",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ BOOKING_URL: "booking_url", PHONE: "phone" });
    f["default"] = a;
  },
  66
);
__d(
  "QuiltsCometComposerAttachmentAreaQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "presetID" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [
          {
            items: [
              {
                kind: "Variable",
                name: "text_format_preset_ids.0",
                variableName: "presetID",
              },
            ],
            kind: "ListValue",
            name: "text_format_preset_ids",
          },
        ],
        c = [
          { kind: "Variable", name: "scale", variableName: "scale" },
          { kind: "Literal", name: "width", value: 500 },
        ],
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "QuiltsCometComposerAttachmentAreaQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: b,
                  concreteType: "TextFormatMetadata",
                  kind: "LinkedField",
                  name: "composer_text_format_presets",
                  plural: !0,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "QuiltsCometComposerAttachmentStackPreview_textFormatMetadata",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "QuiltsCometComposerAttachmentAreaQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: b,
                  concreteType: "TextFormatMetadata",
                  kind: "LinkedField",
                  name: "composer_text_format_presets",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "avatar_story_text_format_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "background_color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "background_gradient_color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "background_gradient_direction",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: c,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "background_image",
                      plural: !1,
                      selections: d,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "font_weight",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "font_style",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: c,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "portrait_background_image",
                      plural: !1,
                      selections: d,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "text_align",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "InspirationsCustomFont",
                      kind: "LinkedField",
                      name: "inspirations_custom_font_object",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "font_name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "font_url",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "id",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4301004759974317",
          metadata: {},
          name: "QuiltsCometComposerAttachmentAreaQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "QuiltsCometComposerAttachmentStackPreview_textFormatMetadata.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "QuiltsCometComposerAttachmentStackPreview_textFormatMetadata",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CPICometSATPCard_textFormatMetadata",
        },
      ],
      type: "TextFormatMetadata",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CPICometSATPCard_textFormatMetadata.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CPICometSATPCard_textFormatMetadata",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedFormattedTextRenderer_metadata",
        },
        {
          alias: null,
          args: null,
          concreteType: "InspirationsCustomFont",
          kind: "LinkedField",
          name: "inspirations_custom_font_object",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useCometInspirationsCustomFont_customFont",
            },
          ],
          storageKey: null,
        },
      ],
      type: "TextFormatMetadata",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CPICometSATPCard.react",
  [
    "CPICometSATPCard_textFormatMetadata.graphql",
    "CometAspectRatioContainer.react",
    "CometCard.react",
    "CometLineBreakTransform",
    "CometRelay",
    "CometTextWithEntities.react",
    "QuiltsCometConstants",
    "react",
    "stylex",
    "useCometFeedFormattedTextRenderer",
    "useCometInspirationsCustomFont",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        backgroundOpacity: { opacity: "kgtf8isp" },
        colorBackground: {
          height: "datstx6m",
          position: "pmk7jnqg",
          top: "kr520xx4",
          width: "k4urcfbm",
        },
        contentWrapper: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          justifyContent: "taijpn5t",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          zIndex: "e710htxi",
        },
        imageContainer: {
          end: "n7fi1qx3",
          height: "datstx6m",
          position: "pmk7jnqg",
          textAlign: "ftzlm3b6",
          width: "k4urcfbm",
        },
        satpBackground: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          justifyContent: "i1fnvgqd",
          width: "k4urcfbm",
        },
        textWrapper: {
          display: "j83agx80",
          maxWidth: "ex6tb73q",
          paddingTop: "aodizinl",
          paddingEnd: "gl4o1x5y",
          paddingBottom: "ofv0k9yr",
          paddingStart: "lt9micmv",
        },
      };
    function a(a) {
      var e = a.dropShadow;
      e = e === void 0 ? 0 : e;
      var f = a.imageRenderer,
        g = a.text,
        k = a.textFormatMetadata$key,
        l = a.textStyleOverrides;
      a = a.xstyle;
      k = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CPICometSATPCard_textFormatMetadata.graphql")),
        k
      );
      var m = c("useCometFeedFormattedTextRenderer")(null, k, !0),
        n = m.backgroundStyle,
        o = m.textColor;
      m = m.textStyle;
      k = c("useCometInspirationsCustomFont")(
        k == null ? void 0 : k.inspirations_custom_font_object
      );
      k = Object.assign({}, m, {
        color: o,
        fontFamily: k,
        fontSize:
          (o = l == null ? void 0 : l.fontSize) != null
            ? o
            : m == null
            ? void 0
            : m.fontSize,
        lineHeight: l == null ? void 0 : l.lineHeightInPx,
        wordBreak: "break-word",
      });
      return i.jsx(c("CometCard.react"), {
        dropShadow: e,
        children: i.jsx(c("CometAspectRatioContainer.react"), {
          aspectRatio: d("QuiltsCometConstants").CARD_ASPECT_RATIO,
          children: i.jsxs("div", {
            className: c("stylex")(j.satpBackground),
            children: [
              i.jsx("div", {
                className: c("stylex")(j.imageContainer),
                children: f,
              }),
              i.jsx("div", {
                className: c("stylex")(
                  j.colorBackground,
                  j.satpBackground,
                  j.imageContainer,
                  f != null && j.backgroundOpacity,
                  a
                ),
                style: babelHelpers["extends"]({}, n),
              }),
              g != null
                ? i.jsx("div", {
                    className: c("stylex")(j.contentWrapper),
                    children: i.jsx("div", {
                      className: c("stylex")(j.textWrapper),
                      style: k,
                      children: i.jsx(c("CometTextWithEntities.react"), {
                        text: g,
                        transforms: [c("CometLineBreakTransform")],
                      }),
                    }),
                  })
                : null,
            ],
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "QuiltsCometComposerAttachmentStackPreview.react",
  [
    "CPICometSATPCard.react",
    "CometRelay",
    "QuiltsCometComposerAttachmentStackPreview_textFormatMetadata.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 2;
    function a(a) {
      var e = a.imageRenderer,
        f = a.text,
        g = a.textFormatMetadata$key;
      a = a.textStyleOverrides;
      g = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "QuiltsCometComposerAttachmentStackPreview_textFormatMetadata.graphql"
            )),
        g
      );
      return i.jsxs("div", {
        className: "l9j0dhe7 taijpn5t qqhoty7l j83agx80",
        children: [
          i.jsx("div", {
            className: "du4w35lb k4urcfbm kr520xx4 pmk7jnqg",
            children: i.jsx(c("CPICometSATPCard.react"), {
              dropShadow: j,
              imageRenderer: e,
              text: f,
              textFormatMetadata$key: g,
              textStyleOverrides: a,
            }),
          }),
          i.jsx("div", {
            className: "k4urcfbm kr520xx4 pmk7jnqg enjifjd9 bnqla6t0",
            children: i.jsx(c("CPICometSATPCard.react"), { imageRenderer: e }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "composerQuiltsPostStateChecker",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return (a == null
        ? void 0
        : (a = a.quiltsMetadata) == null
        ? void 0
        : a.isUpgrading) === !0
        ? !0
        : !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "QuiltsCometComposerAttachmentArea.react",
  [
    "CPICometCardStackUtils",
    "CometComposerGenericAttachmentPendingPreview.react",
    "CometComposerHeadlessMediaUploader.react",
    "CometObjectFitContainerNext.react",
    "CometPlaceholder.react",
    "CometRelay",
    "QuiltsCometAttachmentPreview.react",
    "QuiltsCometComposerAttachmentAreaQuery.graphql",
    "QuiltsCometComposerAttachmentStackPreview.react",
    "QuiltsCometConstants",
    "WebPixelRatio",
    "calculateDynamicQuiltsTextStyle",
    "composerAttachmentAreaChecker",
    "composerAttachmentAreaReducer",
    "composerMediaAttachmentReducer",
    "composerMediaAttachmentStateChecker",
    "composerQuiltsPostReducer",
    "composerQuiltsPostStateChecker",
    "makeMediaAttachmentReadyForPreview",
    "quiltsCometCardStackUtils",
    "react",
    "useComposerViewStateReducer",
    "useNullthrowsViolation",
    "useStoriesDominantColorPicker",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 1;
    function a(a) {
      var e = a.animatedImageAttachments,
        f = a.mediaAttachments,
        g = a.mediaUploadLoggingMetadata;
      a = a.quiltsMetadata;
      var k = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("QuiltsCometComposerAttachmentAreaQuery.graphql")),
        {
          presetID: a == null ? void 0 : a.formattedTextPresetID,
          scale: d("WebPixelRatio").get(),
        }
      );
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer,
        c("composerAttachmentAreaChecker")
      );
      c("useComposerViewStateReducer")(
        c("composerMediaAttachmentReducer"),
        c("composerMediaAttachmentStateChecker")
      );
      c("useComposerViewStateReducer")(
        c("composerQuiltsPostReducer"),
        c("composerQuiltsPostStateChecker")
      );
      k = c("useNullthrowsViolation")(
        (k = k.viewer) == null
          ? void 0
          : (k = k.composer_text_format_presets) == null
          ? void 0
          : k[0]
      );
      a = c("useNullthrowsViolation")(a);
      a = a.promptText;
      f =
        (f =
          f == null
            ? void 0
            : f
                .filter(function (a) {
                  return (
                    (a.file != null || a.url != null) &&
                    (d("CPICometCardStackUtils").initialContributionIsPhoto(
                      a.fileType
                    ) ||
                      d("CPICometCardStackUtils").initialContributionIsVideo(
                        a.fileType
                      ))
                  );
                })
                .map(c("makeMediaAttachmentReadyForPreview"))[0]) != null
          ? f
          : e == null
          ? void 0
          : e.imageData;
      e = c("calculateDynamicQuiltsTextStyle")(a);
      var l, m;
      ((f == null ? void 0 : f.fileType) === "PHOTO" ||
        (f == null ? void 0 : f.fileType) === "GIF" ||
        (f == null ? void 0 : f.fileType) === "VIDEO") &&
        ((l = f == null ? void 0 : f.width),
        (m = f == null ? void 0 : f.height));
      var n = l != null && m != null && m > 0 ? l / m : j,
        o = (f == null ? void 0 : f.url) != null ? f.url : null;
      o = c("useStoriesDominantColorPicker")({
        defaultBottomColor: d("QuiltsCometConstants").BLACK,
        defaultTopColor: d("QuiltsCometConstants").BLACK,
        imageURL: o,
      });
      o = d("CPICometCardStackUtils").getGradientBackground(
        o.topColor,
        o.bottomColor
      );
      o =
        f != null
          ? i.jsx("div", {
              className: "cwj9ozl2",
              style: o,
              children: i.jsx(c("CometObjectFitContainerNext.react"), {
                containerAspectRatio: d("QuiltsCometConstants")
                  .CARD_ASPECT_RATIO,
                contentAspectRatio: n,
                mode: d("quiltsCometCardStackUtils").getQuiltsCoverMode(
                  f.fileType
                ),
                children: i.jsx(c("QuiltsCometAttachmentPreview.react"), {
                  attachment: f,
                }),
              }),
            })
          : null;
      return i.jsxs("div", {
        className: "k4urcfbm fk1ry6lx",
        "data-testid": void 0,
        children: [
          i.jsx(c("CometComposerHeadlessMediaUploader.react"), {
            mediaUploadLoggingMetadata: g,
          }),
          i.jsx(c("CometPlaceholder.react"), {
            fallback: i.jsx(
              c("CometComposerGenericAttachmentPendingPreview.react"),
              {}
            ),
            children: i.jsx(
              c("QuiltsCometComposerAttachmentStackPreview.react"),
              {
                imageRenderer: o,
                text: (n = a) != null ? n : "",
                textFormatMetadata$key: k,
                textStyleOverrides: e,
              }
            ),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return {
        animatedImageAttachments: a.animatedImageAttachments,
        mediaAttachments: a.mediaAttachments,
        quiltsMetadata: a.quiltsMetadata,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "GamingCometRecentHomePromoRHCWidgetContainer_gamesPanel$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "GamingCometRecentHomePromoRHCWidgetContainer_gamesPanel$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "contents",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
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
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "height", value: 144 },
                    { kind: "Literal", name: "icon_style", value: "DESKTOP" },
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Literal", name: "width", value: 144 },
                  ],
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "bookmark_image",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "uri",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "GamesInstantPlayStyleInfo",
                  kind: "LinkedField",
                  name: "instant_game_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "social_context",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "last_played_time",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              type: "Application",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_from_dismiss_pacing",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "GamingCometRecentHomePromoRHCWidgetContainer_gamesPanel.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "GamingCometRecentHomePromoRHCWidgetContainer_gamesPanel",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "contents",
          plural: !0,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
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
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "height", value: 144 },
                    { kind: "Literal", name: "icon_style", value: "DESKTOP" },
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Literal", name: "width", value: 144 },
                  ],
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "bookmark_image",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "uri",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "GamesInstantPlayStyleInfo",
                  kind: "LinkedField",
                  name: "instant_game_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "social_context",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "last_played_time",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              type: "Application",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_from_dismiss_pacing",
          storageKey: null,
        },
      ],
      type: "CometRecentGamePromoRHCWidgetModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GamingCometRecentHomePromoRHCWidgetContainer.react",
  [
    "fbt",
    "ix",
    "CometCardUnit.react",
    "CometCardUnitFooter.react",
    "CometCardUnitHeader.react",
    "CometCardUnitListCellGrid.react",
    "CometColumnItem.react",
    "CometImageFromIXValue.react",
    "CometRHCWidgetDismissMutation",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "FBLogger",
    "GamingCometRecentHomePromoRHCWidgetContainer_gamesPanel.graphql",
    "InstantGamesTrackingData",
    "TetraAccessoryListCell.react",
    "TetraButton.react",
    "TetraIcon.react",
    "TetraText.react",
    "XCometInstantGamesHubControllerRouteBuilder",
    "XCometInstantGamesHubPlayControllerRouteBuilder",
    "fbicon",
    "react",
    "useRHCWidgetLogging",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useMemo,
      m =
        j !== void 0
          ? j
          : (j = b(
              "GamingCometRecentHomePromoRHCWidgetContainer_gamesPanel.graphql"
            ));
    function a(a) {
      a = d("CometRelay").useFragment(m, a.gamesPanel);
      var b = a.contents;
      a = a.is_hidden_from_dismiss_pacing;
      var e = l(
          function () {
            var a;
            return (a = b.map(function (a) {
              return a == null ? void 0 : a.id;
            })) == null
              ? void 0
              : a.filter(Boolean);
          },
          [b]
        ),
        f = d("CometRelay").useRelayEnvironment(),
        g = c("useRHCWidgetLogging")(
          513746992167374,
          e,
          "comet_rhc_play_retention_widget"
        ),
        j = g[0],
        n = g[1],
        o = g[2];
      g = b;
      if (a === !0 || g == null || g.length === 0) {
        c("FBLogger")("comet_rhc").mustfix(
          "GamingCometRecentHomePromoRHCWidgetContainer is missing data to render"
        );
        return null;
      }
      a = g
        .map(function (a, b) {
          var d, e;
          if (a == null) return null;
          d =
            a == null
              ? void 0
              : (d = a.bookmark_image) == null
              ? void 0
              : d.uri;
          var f = a == null ? void 0 : a.name,
            g = a == null ? void 0 : a.id;
          e =
            a == null
              ? void 0
              : (e = a.instant_game_info) == null
              ? void 0
              : e.social_context;
          a =
            a == null
              ? void 0
              : (a = a.instant_game_info) == null
              ? void 0
              : a.last_played_time;
          if (d == null || f == null || g == null) return null;
          g = c("XCometInstantGamesHubPlayControllerRouteBuilder").buildURL({
            game_or_link: g,
            source: new (c("InstantGamesTrackingData"))(
              "facebook",
              "ecosystem_main_feed",
              "rhc_recently_played_tile"
            ).serialize(),
          });
          a =
            a != null && a !== 0
              ? k.jsxs(c("TetraText.react"), {
                  align: "start",
                  color: "secondary",
                  numberOfLines: 1,
                  type: "meta4",
                  children: [
                    h._("Last played"),
                    " ",
                    k.jsx(c("CometRelativeTimestamp.react"), {
                      date: new Date(a * 1e3),
                    }),
                  ],
                })
              : null;
          return k.jsx(
            c("TetraAccessoryListCell.react"),
            {
              addOnPrimary: {
                "aria-label": "first item",
                onPress: n,
                shape: "roundedRect",
                size: 36,
                source: { uri: d },
                type: "profile-photo",
              },
              addOnSecondary: {
                label: h._("Play"),
                linkProps: { productAttribution: o, url: g },
                size: "medium",
                type: "secondary-button",
              },
              headline: k.jsx(c("TetraText.react"), {
                align: "start",
                color: "primary",
                numberOfLines: 1,
                type: "bodyLink4",
                children: f,
              }),
              linkProps: { productAttribution: o, url: g },
              meta: (d = a) != null ? d : e,
              onPress: n,
              paddingHorizontal: 0,
            },
            b
          );
        })
        .filter(Boolean);
      g = k.jsx(c("CometCardUnitListCellGrid.react"), { children: a });
      a = c("XCometInstantGamesHubControllerRouteBuilder").buildURL({
        source: new (c("InstantGamesTrackingData"))(
          "facebook",
          "ecosystem_main_feed",
          "rhc_recently_played_tile"
        ).serialize(),
        store_visit_source: "promo_rhc_recently_played",
      });
      return k.jsx(c("CometColumnItem.react"), {
        fallback: null,
        paddingHorizontal: 16,
        children: k.jsx(c("CometCardUnit.react"), {
          content: g,
          footer: k.jsx(c("CometCardUnitFooter.react"), {
            addOn: k.jsx(c("TetraButton.react"), {
              label: h._("Go to Gaming"),
              linkProps: { productAttribution: o, url: a },
              type: "secondary",
            }),
          }),
          footerPaddingTop: 8,
          header: k.jsx(c("CometCardUnitHeader.react"), {
            addOnPrimary: k.jsx(c("CometImageFromIXValue.react"), {
              source: i("1605360"),
            }),
            body: h._("Play Games"),
            headline: h._("Gaming"),
            headlineAddOn: k.jsx(c("TetraIcon.react"), {
              "aria-label": h._("More"),
              icon: d("fbicon")._(i("478232"), 16),
              onPress: function () {
                d("CometRHCWidgetDismissMutation").commit(
                  f,
                  "GAMES",
                  e,
                  "COMET_RHC_PLAY_RETENTION_WIDGET",
                  "CometRecentGamePromoRHCWidgetModel"
                );
              },
            }),
            headlineLineLimit: 1,
          }),
          ref: j,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "AttachmentRenderContext",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({
      CREATION: "creation",
      COMMENT_BUMP: "comment_bump",
      HOST_UPDATE: "host_update",
      SHARE: "share",
      SHARE_WITH_METADATA: "share_with_metadata",
    });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "QuiltsCometConstants",
  [],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = 3 / 4;
    b = 1;
    c = ["share_with_metadata", "comment_bump"];
    d = { blue: 0, clusterSize: 0, green: 0, red: 0 };
    e = [
      "image/bmp",
      "image/heif",
      "image/heic",
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/tiff",
      "image/webp",
    ];
    f = "9495";
    g.CARD_ASPECT_RATIO = a;
    g.PROMPT_CARD_INDEX_OFFSET = b;
    g.SPECIAL_RENDER_CONTEXTS = c;
    g.BLACK = d;
    g.IMAGE_TYPES_SUPPORTED_ON_QUILTS = e;
    g.QUILT_CAP_COMPOSER_DISCLAIMER_NUX_ID = f;
  },
  98
);
__d(
  "Comet360PhotoTypes",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "Cylindrical",
      "Equirectangular",
      "TiledCubemap",
    ]);
    f.Comet360PhotoProjection = a;
  },
  66
);
