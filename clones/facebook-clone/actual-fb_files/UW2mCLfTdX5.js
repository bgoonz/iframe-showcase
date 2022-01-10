if (self.CavalryLogger) {
  CavalryLogger.start_js(["jFKQbeT"]);
}

__d(
  "LWICometEditingRootContentQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4361155020612413",
        metadata: {},
        name: "LWICometEditingRootContentQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "LWICometManagementRootContentQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4292268994184000",
        metadata: {},
        name: "LWICometManagementRootContentQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometAdminRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "pageID" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "show_whatsapp_upsell_on_comet",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "show_page_onboarding_on_comet",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          concreteType: "PagesCometAdminMenuRenderer",
          kind: "LinkedField",
          name: "comet_page_admin_menu",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "PagesCometAdminRootQuery",
              fragmentName: "PagesCometAdminLeftNavContainer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesCometAdminRootQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: b,
                concreteType: "Page",
                kind: "LinkedField",
                name: "page",
                plural: !1,
                selections: [
                  c,
                  d,
                  e,
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "usePagesCometProfilePlusTransition_page",
                  },
                ],
                storageKey: null,
              },
              action: "LOG",
              path: "page",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PagesCometAdminRootQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                c,
                d,
                e,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_show_additional_profile_transition_interstitial",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_page_eligible_for_transition_entrypoint",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "page_transition_cohort",
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
        },
        params: {
          id: "4049106641810998",
          metadata: {},
          name: "PagesCometAdminRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "PagesCometAdminOnboardingMultiStepDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4608797689194373",
        metadata: {},
        name: "PagesCometAdminOnboardingMultiStepDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometAdminWhatsappUpsellDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3766115290161758",
        metadata: {},
        name: "PagesCometAdminWhatsappUpsellDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometProfilePlusPFCTransitionDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4749774095051792",
        metadata: {},
        name: "CometProfilePlusPFCTransitionDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometPageTransitionUpsellDialogImpressionMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_admin_eligible_for_interstitial",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "num_days_remaining_for_forced_rollout_ap_transition",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_transition_cohort",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometPageTransitionUpsellDialogImpressionMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "profile_plus_page_transition_dialog_impression_mutation",
              plural: !1,
              selections: [c, d, e],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometPageTransitionUpsellDialogImpressionMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "profile_plus_page_transition_dialog_impression_mutation",
              plural: !1,
              selections: [
                c,
                d,
                e,
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
          id: "5537156659689499",
          metadata: {},
          name: "CometPageTransitionUpsellDialogImpressionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "usePagesCometProfilePlusTransition_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "usePagesCometProfilePlusTransition_page",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          action: "THROW",
          path: "name",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_additional_profile_transition_interstitial",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_page_eligible_for_transition_entrypoint",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_transition_cohort",
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
  "AdsLWICoBEditingDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "LWICometEditingRootContentQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            editingRootQueryRef: {
              parameters: b("LWICometEditingRootContentQuery$Parameters"),
              variables: {
                boostID: a.boostID,
                scale: d("WebPixelRatio").get(),
                shouldFetchBrandedTemplate: !1,
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "AdsLWICoBEditingDialog.react"
      ).__setRef("AdsLWICoBEditingDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "AdsLWICoBManagementDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "LWICometManagementRootContentQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            managementRootQueryRef: {
              parameters: b("LWICometManagementRootContentQuery$Parameters"),
              variables: {
                boostID: a.boostID,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "AdsLWICoBManagementDialog.react"
      ).__setRef("AdsLWICoBManagementDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "LWICometManagementRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "LWICometManagementRootContentQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = String(a.routeParams.boost_id);
        return {
          queries: {
            managementRootQueryReference: {
              parameters: b("LWICometManagementRootContentQuery$Parameters"),
              variables: { boostID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "LWICometManagementRoot.react"
      ).__setRef("LWICometManagementRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "LWIAdCenterLoggerContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ mapping: null });
    g["default"] = b;
  },
  98
);
__d(
  "LWICometButtonActionContextProvider.react",
  [
    "AdsLWICoBEditingDialog.entrypoint",
    "AdsLWICoBManagementDialog.entrypoint",
    "CometRelay",
    "JSResourceForInteraction",
    "LWIAdCenterLoggerContext",
    "LWICometButtonActionContext",
    "cr:1296341",
    "emptyFunction",
    "react",
    "useCometLazyDialog",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
        "AdsLWICoBEntryPointDialogContainer.react"
      ).__setRef("LWICometButtonActionContextProvider.react"),
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo;
    function a(a) {
      a = a.children;
      var e = j(c("LWIAdCenterLoggerContext")),
        f = e.mapping,
        g = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      e = c("useCometLazyDialog")(h);
      var l = e[0];
      e = k(
        function () {
          if (b("cr:1296341") == null)
            return {
              getOpenAutoBoostDialog: null,
              getOpenDialogWithPhase: null,
              getOpenDialogWithTargetID: null,
              getOpenDraftDialog: null,
              getOpenIsolatedQuestionnaireDialog: null,
              getOpenViewResults: null,
            };
          var a = function (a) {
              var c = f ? f(a) : a;
              return function (a, d) {
                b("cr:1296341").loadModules(
                  ["AdsLWIDialogUtils"],
                  function (b) {
                    b.openLWIDialogWithPhase(a, d, c);
                  },
                  "LWICometButtonActionContextProvider.react"
                );
              };
            },
            e = function (a) {
              var c = f ? f(a) : a;
              return function (a, d) {
                b("cr:1296341").loadModules(
                  ["AdsLWIDialogUtils"],
                  function (b) {
                    b.openLWIDialogWithPhase(a, d, c);
                  },
                  "LWICometButtonActionContextProvider.react"
                );
              };
            },
            h = function (a) {
              var c = f ? f(a) : a;
              return function (a, d, e) {
                b("cr:1296341").loadModules(
                  ["AdsLWIDialogUtils", "AdsLWIInstanceType"],
                  function (b, f) {
                    b.openLWIDialog(
                      f.createRandomInstanceID(),
                      a,
                      c,
                      d,
                      "",
                      e,
                      !0
                    );
                  },
                  "LWICometButtonActionContextProvider.react"
                );
              };
            },
            i = function (a) {
              var e = f ? f(a) : a;
              return function (f, h, i) {
                var j =
                  (i == null ? void 0 : i.product) === "boosted_mini_shop";
                if (j) {
                  var k = d("CometRelay").loadEntryPoint(
                    g,
                    (i == null ? void 0 : i.tab) === "edit_promotion"
                      ? c("AdsLWICoBEditingDialog.entrypoint")
                      : c("AdsLWICoBManagementDialog.entrypoint"),
                    { boostID: h }
                  );
                  l(
                    {
                      boostishID: h,
                      entryPoint: a,
                      initialEntryPoint: k,
                      pageID: f,
                      routeType:
                        (i == null ? void 0 : i.tab) === "edit_promotion"
                          ? "editing"
                          : "management",
                    },
                    function () {
                      var a = k.dispose;
                      a && a();
                    }
                  );
                } else
                  b("cr:1296341").loadModules(
                    [
                      "AdsLWIDialogUtils",
                      "AdsLWIInstanceType",
                      "AdCenterDialogTabUtils",
                    ],
                    function (a, b, c) {
                      a.openLWIDialogWithBoostID(
                        b.createRandomInstanceID(),
                        f,
                        e,
                        h,
                        function () {
                          i != null && c.setTab(h, i.product, i.tab);
                        }
                      );
                    },
                    "LWICometButtonActionContextProvider.react"
                  );
              };
            },
            j = function (a) {
              var c = f ? f(a) : a;
              return function (a, d) {
                b("cr:1296341").loadModules(
                  ["AdsLWIAutoBoostDialogUtils"],
                  function (b) {
                    b.openAutoBoostManagementDialog(a, d, c);
                  },
                  "LWICometButtonActionContextProvider.react"
                );
              };
            },
            k = function (a) {
              var d = f ? f(a) : a;
              return function (a, e, f, g) {
                b("cr:1296341").loadModules(
                  ["AdsLWIDialogUtils", "AdsLWIInstanceType"],
                  function (b, h) {
                    b.openLWIDialog(
                      h.createRandomInstanceID(),
                      e,
                      d,
                      f,
                      "",
                      g,
                      !0,
                      !1,
                      c("emptyFunction"),
                      a
                    );
                  },
                  "LWICometButtonActionContextProvider.react"
                );
              };
            };
          return {
            getOpenAutoBoostDialog: j,
            getOpenDialogWithPhase: a,
            getOpenDialogWithTargetID: h,
            getOpenDraftDialog: k,
            getOpenIsolatedQuestionnaireDialog: e,
            getOpenViewResults: i,
          };
        },
        [g, f, l]
      );
      return i.jsx(c("LWICometButtonActionContext").Provider, {
        value: e,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometAdminLeftNavGlimmer.react",
  [
    "fbt",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometLeftRailListItemSeparator.react",
    "CometListCellGlimmer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx(c("CometLeftRailComponent.react"), {
        header: i.jsx(c("CometLeftRailHeader.react"), {
          title: h._("Manage Page"),
        }),
        primaryNav: i.jsxs(i.Fragment, {
          children: [
            i.jsx(c("CometListCellGlimmer.react"), {
              imageSize: 48,
              imageStyle: "circle",
              numberOfItems: 1,
            }),
            i.jsx(c("CometLeftRailListItemSeparator.react"), {
              marginHorizontal: 16,
              marginVertical: 8,
            }),
            i.jsx(c("CometListCellGlimmer.react"), {
              imageSize: 36,
              imageStyle: "circle",
              numberOfItems: 3,
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometAdminOnboardingMultiStepDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometAdminOnboardingMultiStepDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            dialogQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: c(
                "PagesCometAdminOnboardingMultiStepDialogQuery$Parameters"
              ),
              variables: { pageID: a.pageID, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometAdminOnboardingMultiStepDialog.react"
      ).__setRef("PagesCometAdminOnboardingMultiStepDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometAdminWhatsappUpsellDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometAdminWhatsappUpsellDialogQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            dialogQueryReference: {
              parameters: c(
                "PagesCometAdminWhatsappUpsellDialogQuery$Parameters"
              ),
              variables: { pageID: a.pageID },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometAdminWhatsappUpsellDialog.react"
      ).__setRef("PagesCometAdminWhatsappUpsellDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometPageTransitionUpsellDialogImpressionMutation",
  ["CometPageTransitionUpsellDialogImpressionMutation.graphql", "RelayHooks"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a() {
      return d("RelayHooks").useMutation(
        h !== void 0
          ? h
          : (h = b("CometPageTransitionUpsellDialogImpressionMutation.graphql"))
      );
    }
    g.useCometPageTransitionUpsellDialogImpressionMutation = a;
  },
  98
);
__d(
  "CometProfilePlusPFCTransitionDialog.entrypoint",
  [
    "CometProfilePlusPFCTransitionDialogQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.isAutoShowingInterstitial;
        a = a.pageID;
        return {
          extraProps: { isAutoShowingInterstitial: c },
          queries: {
            cometProfilePlusAPTransitionQueryReference: {
              parameters: b(
                "CometProfilePlusPFCTransitionDialogQuery$Parameters"
              ),
              variables: { pageID: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometProfilePlusPFCTransitionDialog.react"
      ).__setRef("CometProfilePlusPFCTransitionDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfilePlusTransitionFlowsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1913005");
    c = b("FalcoLoggerInternal").create("profile_plus_transition_flows", a);
    e.exports = c;
  },
  null
);
__d(
  "usePagesCometProfilePlusTransition",
  [
    "CometPageTransitionUpsellDialogImpressionMutation",
    "CometProfilePlusPFCTransitionDialog.entrypoint",
    "CometRouteParams",
    "PageTransitionCohort",
    "ProfilePlusTransitionFlowsFalcoEvent",
    "RelayHooks",
    "emptyFunction",
    "getJSEnumSafe",
    "react",
    "recoverableViolation",
    "useCometEntryPointDialog",
    "usePagesCometProfilePlusTransition_page.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useEffect,
      j = e.useRef;
    function a(a) {
      var e = a.page$key,
        f = a.pageID,
        g = d("RelayHooks").useFragment(
          h !== void 0
            ? h
            : (h = b("usePagesCometProfilePlusTransition_page.graphql")),
          e
        ),
        k =
          (a =
            g == null
              ? void 0
              : g.should_show_additional_profile_transition_interstitial) !=
          null
            ? a
            : !1,
        l =
          (e =
            g == null
              ? void 0
              : g.is_page_eligible_for_transition_entrypoint) != null
            ? e
            : !1;
      a = d(
        "CometPageTransitionUpsellDialogImpressionMutation"
      ).useCometPageTransitionUpsellDialogImpressionMutation();
      var m = a[0];
      e = d("CometRouteParams").useRouteParams();
      a = String(e == null ? void 0 : e.modal);
      var n = a === "page_transition_flow";
      e = c("CometProfilePlusPFCTransitionDialog.entrypoint");
      var o =
        (a = c("getJSEnumSafe")(
          c("PageTransitionCohort"),
          g == null ? void 0 : g.page_transition_cohort
        )) != null
          ? a
          : "other";
      a = c("useCometEntryPointDialog")(e, {
        isAutoShowingInterstitial: !0,
        pageID: f,
      });
      var p = a[0],
        q = j(null);
      i(
        function () {
          (k || (n && l)) &&
            q.current !== f &&
            ((q.current = f),
            p({}),
            m({
              onCompleted: c("emptyFunction"),
              onError: function () {
                c("recoverableViolation")(
                  "Page transition upsell dialog impression mutation failed in page admin additional profile transition interstitial",
                  "profile_plus"
                );
              },
              variables: {
                input: { is_auto_showing_interstitial: k, page_id: f },
              },
            }),
            c("ProfilePlusTransitionFlowsFalcoEvent").log(function () {
              var a;
              return {
                event: "view",
                event_target: "comet_transition_flow",
                is_auto_showing_interstitial: k,
                page_cohort: o,
                page_id: f,
                page_name: (a = g == null ? void 0 : g.name) != null ? a : "",
                referrer: "COMET",
                referrer_surface: n ? "aymt_notif" : "interstitial",
                surface: "pages_home_tab",
              };
            }));
        },
        [k, p, f, n, m, l, o, g == null ? void 0 : g.name]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometAdminRoot.react",
  [
    "fbt",
    "CometLeftRailAndMainContentContainer.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometRouteRenderType",
    "CometTransientDialogProvider.react",
    "LWICometButtonActionContextProvider.react",
    "PagesCometAdminLeftNavGlimmer.react",
    "PagesCometAdminLiveTabContext",
    "PagesCometAdminOnboardingMultiStepDialog.entrypoint",
    "PagesCometAdminRootQuery.graphql",
    "PagesCometAdminWhatsappUpsellDialog.entrypoint",
    "PagesCometPageContext.react",
    "PagesLogger",
    "PagesLoggerEventEnum",
    "PagesPageSurfaceImpressionFalcoEvent",
    "react",
    "useCometEntryPointDialog",
    "usePagesCometProfilePlusTransition",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useMemo,
      m = e.useRef,
      n = e.useState,
      o = i !== void 0 ? i : (i = b("PagesCometAdminRootQuery.graphql"));
    function a(a) {
      var b = a.entryPoints,
        e = a.props;
      a = a.queries;
      a = d("CometRelay").usePreloadedQuery(
        o,
        a.pagesCometAdminRootQueryReference
      );
      var f = e.routeProps,
        g = f.pageID;
      a = a == null ? void 0 : a.page;
      var i = (a == null ? void 0 : a.show_whatsapp_upsell_on_comet) === !0,
        p = (a == null ? void 0 : a.show_page_onboarding_on_comet) === !0,
        q = c("useCometEntryPointDialog")(
          c("PagesCometAdminOnboardingMultiStepDialog.entrypoint"),
          { pageID: g }
        ),
        r = q[0];
      q = c("useCometEntryPointDialog")(
        c("PagesCometAdminWhatsappUpsellDialog.entrypoint"),
        { pageID: g }
      );
      var s = q[0],
        t = m(!1);
      k(
        function () {
          t.current === !1 &&
            ((t.current = !0),
            f.tabName === "tab_home" &&
              (p
                ? r({ pageID: g })
                : i &&
                  s({ pageID: g, referrer: "page_wa_interstitial_modal" })));
        },
        [i, g, f.tabName, s, p, r]
      );
      k(
        function () {
          var a;
          c("PagesPageSurfaceImpressionFalcoEvent").log(function () {
            return {
              event_data: { tab: f.tabName },
              event_location: "page__surface",
              page_id: g,
              referrer: f.ref,
            };
          });
          d("PagesLogger").log(
            g,
            c("PagesLoggerEventEnum").IMPRESSION,
            "page_profile",
            null,
            ["pages_consumer_experience_www"],
            { ref: (a = f.ref) != null ? a : "", tab: f.tabName }
          );
        },
        [g, f.tabName, f.ref]
      );
      c("usePagesCometProfilePlusTransition")({ page$key: a, pageID: g });
      q = n(!1);
      var u = q[0],
        v = q[1];
      q = l(
        function () {
          return {
            isLeftNavNuxVisible: u,
            pageID: g,
            setIsLeftNavNuxVisible: v,
          };
        },
        [u, g, v]
      );
      a = a == null ? void 0 : a.comet_page_admin_menu;
      var w = d("CometRouteRenderType").useIsHosted();
      w = a == null || w;
      return j.jsx(
        d("PagesCometPageContext.react").PagesCometPageContextProvider,
        {
          pageID: g,
          children: j.jsx(c("PagesCometAdminLiveTabContext").Provider, {
            value: q,
            children: j.jsx(c("LWICometButtonActionContextProvider.react"), {
              children: j.jsx(c("CometTransientDialogProvider.react"), {
                children: j.jsx(
                  c("CometLeftRailAndMainContentContainer.react"),
                  {
                    hideLeftRail: w,
                    leftRailContent: w
                      ? null
                      : j.jsx(c("CometPlaceholder.react"), {
                          fallback: j.jsx(
                            c("PagesCometAdminLeftNavGlimmer.react"),
                            {}
                          ),
                          children: j.jsx(d("CometRelay").MatchContainer, {
                            match: a,
                          }),
                        }),
                    leftRailHeading: h._("Page Header and Tools Navigation"),
                    mainContent: j.jsx(c("CometPlaceholder.react"), {
                      fallback: null,
                      children: j.jsx(d("CometRelay").EntryPointContainer, {
                        entryPointReference: b.contentEntryPoint,
                        props: e,
                      }),
                    }),
                    mainContentHeading: h._("Page Admin Content"),
                  }
                ),
              }),
            }),
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
