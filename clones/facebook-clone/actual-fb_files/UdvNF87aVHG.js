if (self.CavalryLogger) {
  CavalryLogger.start_js(["DHBa90O"]);
}

__d(
  "PagesCometAdminCTAEditDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4488670147864200",
        metadata: {},
        name: "PagesCometAdminCTAEditDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometAdminCTAEditDropdownQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3830287750342135",
        metadata: {},
        name: "PagesCometAdminCTAEditDropdownQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometActorSelector_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PagesCometActorSelector_page",
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
              args: null,
              kind: "FragmentSpread",
              name: "CometEntityHeaderActorSelector_viewer",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometEntityHeaderActorSelector_entity",
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
  "PagesCometProfilePictureEditButton_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PagesCometProfilePictureEditButton_page",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometPageProfilePictureEditMenu_page",
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
  "CometPageActionControls_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        b = [a],
        c = { kind: "Literal", name: "bool_default", value: !1 };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometPageActionControls_page",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "PageCallToAction",
            kind: "LinkedField",
            name: "page_call_to_action",
            plural: !1,
            selections: b,
            storageKey: null,
          },
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
                concreteType: "User",
                kind: "LinkedField",
                name: "account_user",
                plural: !1,
                selections: b,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          a,
          {
            alias: "cometPageCTA",
            args: [
              {
                kind: "Literal",
                name: "supported",
                value: ["CometPageCTAMessageRenderer"],
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "comet_page_cta_renderer",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                ],
                type: "CometPageCTAMessageRenderer",
                abstractKey: null,
              },
            ],
            storageKey:
              'comet_page_cta_renderer(supported:["CometPageCTAMessageRenderer"])',
          },
          {
            alias: "header_message_button_highlight",
            args: [
              {
                kind: "Literal",
                name: "disable_auto_log_exposures",
                value: !0,
              },
              {
                kind: "Literal",
                name: "qe_universe",
                value: "bmpg_www_secondary_message_button_highlight",
              },
            ],
            concreteType: "QECheck",
            kind: "LinkedField",
            name: "qe_check",
            plural: !1,
            selections: [
              {
                alias: "always_highlight",
                args: [
                  c,
                  {
                    kind: "Literal",
                    name: "param_name",
                    value: "always_highlight",
                  },
                ],
                kind: "ScalarField",
                name: "bool",
                storageKey:
                  'bool(bool_default:false,param_name:"always_highlight")',
              },
              {
                alias: "highlight_on_like",
                args: [
                  c,
                  {
                    kind: "Literal",
                    name: "param_name",
                    value: "highlight_on_like",
                  },
                ],
                kind: "ScalarField",
                name: "bool",
                storageKey:
                  'bool(bool_default:false,param_name:"highlight_on_like")',
              },
              {
                alias: "use_highlighted_liked",
                args: [
                  c,
                  {
                    kind: "Literal",
                    name: "param_name",
                    value: "use_highlighted_liked",
                  },
                ],
                kind: "ScalarField",
                name: "bool",
                storageKey:
                  'bool(bool_default:false,param_name:"use_highlighted_liked")',
              },
            ],
            storageKey:
              'qe_check(disable_auto_log_exposures:true,qe_universe:"bmpg_www_secondary_message_button_highlight")',
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometPageLikeButton_page",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PagesCometMessageButton_page",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PagesCometActorSelector_page",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "LWICometPromoteButtonWrapper_page",
          },
        ],
        type: "Page",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometPageCTARendererRefetchQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        b = [{ kind: "Variable", name: "id", variableName: "id" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = {
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
          name: "CometPageCTARendererRefetchQuery",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometPageCTARenderer_page",
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
          name: "CometPageCTARendererRefetchQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                c,
                d,
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
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_edit_profile",
                      storageKey: null,
                    },
                    {
                      alias: "use_add_button_text_variant",
                      args: [
                        {
                          kind: "Literal",
                          name: "qe_universe",
                          value: "comet_page_add_button_cta_content",
                        },
                      ],
                      concreteType: "QECheck",
                      kind: "LinkedField",
                      name: "admin_qe_check",
                      plural: !1,
                      selections: [
                        {
                          alias: "show_content_variant",
                          args: [
                            {
                              kind: "Literal",
                              name: "bool_default",
                              value: !1,
                            },
                            {
                              kind: "Literal",
                              name: "param_name",
                              value: "show_content_variant",
                            },
                          ],
                          kind: "ScalarField",
                          name: "bool",
                          storageKey:
                            'bool(bool_default:false,param_name:"show_content_variant")',
                        },
                      ],
                      storageKey:
                        'admin_qe_check(qe_universe:"comet_page_add_button_cta_content")',
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "supported",
                          value: [
                            "CometPageCTAPlayNowRenderer",
                            "CometPageCTACallNowRenderer",
                            "CometPageCTAContactUsRenderer",
                            "CometPageCTAEmailRenderer",
                            "CometPageCTALearnMoreRenderer",
                            "CometPageCTAOpenAppRenderer",
                            "CometPageCTAOrderNowRenderer",
                            "CometPageCTASeeOffersRenderer",
                            "CometPageCTAShopNowRenderer",
                            "CometPageCTAViewShopRenderer",
                            "CometPageCTASignUpRenderer",
                            "CometPageCTAWatchNowRenderer",
                            "CometPageCTABuyTicketsRenderer",
                            "CometPageCTAInterestedRenderer",
                            "CometPageCTABookNowRenderer",
                            "CometPageCTAGetQuoteRenderer",
                            "CometPageCTAMessageRenderer",
                            "CometPageCTAVisitGroupRenderer",
                            "CometPageCTADonateRenderer",
                            "CometPageCTAGetEventTicketsRenderer",
                            "CometPageCTAPlayMusicRenderer",
                            "CometPageCTALocalDevPlatformRenderer",
                            "CometPageCTAWoodhengeSupportRenderer",
                            "CometPageCTAWhatsAppRenderer",
                            "CometPageCTAFollowRenderer",
                            "CometPageCTAPurchaseGiftCardRenderer",
                            "CometPageCTAOrderFoodRenderer",
                            "CometPageCTAViewInventoryRenderer",
                            "CometPageCTAMobileCenterRenderer",
                          ],
                        },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comet_page_cta_renderer",
                      plural: !1,
                      selections: [
                        c,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAPlayNowRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAPlayNowRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTACallNowRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTACallNowRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAContactUsRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAContactUsRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAEmailRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAEmailRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTALearnMoreRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTALearnMoreRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAOpenAppRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAOpenAppRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAOrderNowRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAOrderNowRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTASeeOffersRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTASeeOffersRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAShopNowRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAShopNowRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAViewShopRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAViewShopRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTASignUpRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTASignUpRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAWatchNowRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAWatchNowRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTABuyTicketsRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTABuyTicketsRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAInterestedRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAInterestedRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTABookNowRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTABookNowRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAGetQuoteRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAGetQuoteRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAMessageRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAMessageRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAVisitGroupRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAVisitGroupRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTADonateRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTADonateRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAGetEventTicketsRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAGetEventTicketsRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAPlayMusicRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAPlayMusicRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTALocalDevPlatformRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTALocalDevPlatformRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAWoodhengeSupportRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAWoodhengeSupportRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAWhatsAppRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAWhatsAppRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAFollowRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAFollowRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAPurchaseGiftCardRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAPurchaseGiftCardRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAOrderFoodRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAOrderFoodRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAViewInventoryRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAViewInventoryRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageCTARenderer_page",
                              fragmentName:
                                "CometPageCTAMobileCenterRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometPageCTAMobileCenterRenderer",
                          abstractKey: null,
                        },
                      ],
                      storageKey:
                        'comet_page_cta_renderer(supported:["CometPageCTAPlayNowRenderer","CometPageCTACallNowRenderer","CometPageCTAContactUsRenderer","CometPageCTAEmailRenderer","CometPageCTALearnMoreRenderer","CometPageCTAOpenAppRenderer","CometPageCTAOrderNowRenderer","CometPageCTASeeOffersRenderer","CometPageCTAShopNowRenderer","CometPageCTAViewShopRenderer","CometPageCTASignUpRenderer","CometPageCTAWatchNowRenderer","CometPageCTABuyTicketsRenderer","CometPageCTAInterestedRenderer","CometPageCTABookNowRenderer","CometPageCTAGetQuoteRenderer","CometPageCTAMessageRenderer","CometPageCTAVisitGroupRenderer","CometPageCTADonateRenderer","CometPageCTAGetEventTicketsRenderer","CometPageCTAPlayMusicRenderer","CometPageCTALocalDevPlatformRenderer","CometPageCTAWoodhengeSupportRenderer","CometPageCTAWhatsAppRenderer","CometPageCTAFollowRenderer","CometPageCTAPurchaseGiftCardRenderer","CometPageCTAOrderFoodRenderer","CometPageCTAViewInventoryRenderer","CometPageCTAMobileCenterRenderer"])',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PageCallToAction",
                      kind: "LinkedField",
                      name: "page_call_to_action",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "cta_type",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "cta_tooltip_text",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "upsell_interstitial_cta_type",
                          storageKey: null,
                        },
                        d,
                      ],
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
        },
        params: {
          id: "4545621392116911",
          metadata: {},
          name: "CometPageCTARendererRefetchQuery",
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
  "CometPageCTARenderer_page.graphql",
  ["CometPageCTARendererRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["node"],
          operation: b("CometPageCTARendererRefetchQuery.graphql"),
          identifierField: "id",
        },
      },
      name: "CometPageCTARenderer_page",
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
          args: null,
          kind: "ScalarField",
          name: "can_viewer_edit_profile",
          storageKey: null,
        },
        {
          alias: "use_add_button_text_variant",
          args: [
            {
              kind: "Literal",
              name: "qe_universe",
              value: "comet_page_add_button_cta_content",
            },
          ],
          concreteType: "QECheck",
          kind: "LinkedField",
          name: "admin_qe_check",
          plural: !1,
          selections: [
            {
              alias: "show_content_variant",
              args: [
                { kind: "Literal", name: "bool_default", value: !1 },
                {
                  kind: "Literal",
                  name: "param_name",
                  value: "show_content_variant",
                },
              ],
              kind: "ScalarField",
              name: "bool",
              storageKey:
                'bool(bool_default:false,param_name:"show_content_variant")',
            },
          ],
          storageKey:
            'admin_qe_check(qe_universe:"comet_page_add_button_cta_content")',
        },
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometPageCTAPlayNowRenderer",
                "CometPageCTACallNowRenderer",
                "CometPageCTAContactUsRenderer",
                "CometPageCTAEmailRenderer",
                "CometPageCTALearnMoreRenderer",
                "CometPageCTAOpenAppRenderer",
                "CometPageCTAOrderNowRenderer",
                "CometPageCTASeeOffersRenderer",
                "CometPageCTAShopNowRenderer",
                "CometPageCTAViewShopRenderer",
                "CometPageCTASignUpRenderer",
                "CometPageCTAWatchNowRenderer",
                "CometPageCTABuyTicketsRenderer",
                "CometPageCTAInterestedRenderer",
                "CometPageCTABookNowRenderer",
                "CometPageCTAGetQuoteRenderer",
                "CometPageCTAMessageRenderer",
                "CometPageCTAVisitGroupRenderer",
                "CometPageCTADonateRenderer",
                "CometPageCTAGetEventTicketsRenderer",
                "CometPageCTAPlayMusicRenderer",
                "CometPageCTALocalDevPlatformRenderer",
                "CometPageCTAWoodhengeSupportRenderer",
                "CometPageCTAWhatsAppRenderer",
                "CometPageCTAFollowRenderer",
                "CometPageCTAPurchaseGiftCardRenderer",
                "CometPageCTAOrderFoodRenderer",
                "CometPageCTAViewInventoryRenderer",
                "CometPageCTAMobileCenterRenderer",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_page_cta_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAPlayNowRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAPlayNowRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTACallNowRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTACallNowRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAContactUsRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAContactUsRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAEmailRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAEmailRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTALearnMoreRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTALearnMoreRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAOpenAppRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAOpenAppRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAOrderNowRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAOrderNowRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTASeeOffersRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTASeeOffersRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAShopNowRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAShopNowRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAViewShopRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAViewShopRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTASignUpRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTASignUpRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAWatchNowRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAWatchNowRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTABuyTicketsRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTABuyTicketsRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAInterestedRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAInterestedRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTABookNowRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTABookNowRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAGetQuoteRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAGetQuoteRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAMessageRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAMessageRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAVisitGroupRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAVisitGroupRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTADonateRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTADonateRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAGetEventTicketsRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAGetEventTicketsRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAPlayMusicRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAPlayMusicRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTALocalDevPlatformRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTALocalDevPlatformRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAWoodhengeSupportRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAWoodhengeSupportRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAWhatsAppRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAWhatsAppRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAFollowRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAFollowRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAPurchaseGiftCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAPurchaseGiftCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAOrderFoodRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAOrderFoodRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAViewInventoryRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAViewInventoryRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageCTARenderer_page",
                  fragmentName: "CometPageCTAMobileCenterRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometPageCTAMobileCenterRenderer",
              abstractKey: null,
            },
          ],
          storageKey:
            'comet_page_cta_renderer(supported:["CometPageCTAPlayNowRenderer","CometPageCTACallNowRenderer","CometPageCTAContactUsRenderer","CometPageCTAEmailRenderer","CometPageCTALearnMoreRenderer","CometPageCTAOpenAppRenderer","CometPageCTAOrderNowRenderer","CometPageCTASeeOffersRenderer","CometPageCTAShopNowRenderer","CometPageCTAViewShopRenderer","CometPageCTASignUpRenderer","CometPageCTAWatchNowRenderer","CometPageCTABuyTicketsRenderer","CometPageCTAInterestedRenderer","CometPageCTABookNowRenderer","CometPageCTAGetQuoteRenderer","CometPageCTAMessageRenderer","CometPageCTAVisitGroupRenderer","CometPageCTADonateRenderer","CometPageCTAGetEventTicketsRenderer","CometPageCTAPlayMusicRenderer","CometPageCTALocalDevPlatformRenderer","CometPageCTAWoodhengeSupportRenderer","CometPageCTAWhatsAppRenderer","CometPageCTAFollowRenderer","CometPageCTAPurchaseGiftCardRenderer","CometPageCTAOrderFoodRenderer","CometPageCTAViewInventoryRenderer","CometPageCTAMobileCenterRenderer"])',
        },
        {
          alias: null,
          args: null,
          concreteType: "PageCallToAction",
          kind: "LinkedField",
          name: "page_call_to_action",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cta_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cta_tooltip_text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "upsell_interstitial_cta_type",
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
  "CometPageEntityScopedTypeaheadDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3957696950981067",
        metadata: {},
        name: "CometPageEntityScopedTypeaheadDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometAdminCTAEditDialog.entrypoint",
  ["JSResourceForInteraction", "PagesCometAdminCTAEditDialogQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.pageID;
        return {
          queries: {
            queryReference: {
              parameters: c("PagesCometAdminCTAEditDialogQuery$Parameters"),
              variables: { pageID: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometAdminCTAEditDialog.react"
      ).__setRef("PagesCometAdminCTAEditDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometAdminCTAEditDropdown.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometAdminCTAEditDropdownQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = a.ctaID;
        a = a.pageID;
        return {
          queries: {
            promoteInfo: {
              parameters: c("PagesCometAdminCTAEditDropdownQuery$Parameters"),
              variables: { ctaID: b, pageID: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometAdminCTAEditDropdown.react"
      ).__setRef("PagesCometAdminCTAEditDropdown.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometActorSelector.react",
  [
    "Actor",
    "CometEntityHeaderActorSelector.react",
    "CometRelay",
    "PagesCometActorSelector_page.graphql",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.page$key;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("PagesCometActorSelector_page.graphql")),
        a
      );
      var e = d("Actor").useActor();
      e = e[1];
      var f = a.viewer;
      return f == null
        ? c("recoverableViolation")(
            "Page viewer cannot be null",
            "pages_consumer_experience_www"
          )
        : i.jsx(c("CometEntityHeaderActorSelector.react"), {
            entity$key: a,
            onChangeActor: e,
            viewer$key: f,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometProfilePictureEditButton.react",
  [
    "fbt",
    "ix",
    "CometLazyPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "CometRelay",
    "CometRouteParams",
    "JSResourceForInteraction",
    "PagesCometProfilePictureEditButton_page.graphql",
    "TetraCircleButton.react",
    "fbicon",
    "react",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.startTransition,
      m = e.useEffect,
      n = e.useRef,
      o = c("JSResourceForInteraction")(
        "CometPageProfilePictureEditMenu.react"
      ).__setRef("PagesCometProfilePictureEditButton.react"),
      p = c("JSResourceForInteraction")(
        "CometPageProfilePictureEditDialog.react"
      ).__setRef("PagesCometProfilePictureEditButton.react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("PagesCometProfilePictureEditButton_page.graphql")),
          a.page
        ),
        f = h._("Update Profile Picture"),
        g = d("CometRouteParams").useRouteParams(),
        q = String(g == null ? void 0 : g.modal),
        r = n(null);
      g = c("useCometLazyDialog")(p);
      var s = g[0];
      m(
        function () {
          if (q !== "profile_pic_update" || r.current === e.id) return;
          r.current = e.id;
          l(function () {
            return s({ pageID: e.id });
          });
        },
        [e.id, q, s]
      );
      return k.jsx(c("CometLazyPopoverTrigger.react"), {
        fallback: k.jsx(c("CometPopoverLoadingState.react"), {}),
        popoverProps: { page: e, photoURL: a.photoURL, storyURL: a.storyURL },
        popoverResource: o,
        visibleOnLoad: q === "profile_pic_menu",
        children: function (a, b) {
          return k.jsx(c("TetraCircleButton.react"), {
            color: "primary",
            icon: d("fbicon")._(i("550096"), 20),
            label: f,
            onPress: b,
            ref: a,
            size: 36,
            testid: void 0,
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
  "CometPageEntityScopedTypeaheadDialog.entrypoint",
  [
    "CometPageEntityScopedTypeaheadDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.entityID;
        return {
          queries: {
            CometPageEntityScopedTypeaheadDialogQueryRef: {
              parameters: b(
                "CometPageEntityScopedTypeaheadDialogQuery$Parameters"
              ),
              variables: { entityID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometPageEntityScopedTypeaheadDialog.react"
      ).__setRef("CometPageEntityScopedTypeaheadDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometPageActionControls.react",
  [
    "ix",
    "Actor",
    "CometErrorBoundary.react",
    "CometPageActionControls_page.graphql",
    "CometPageEntityScopedTypeaheadDialog.entrypoint",
    "CometPageLikeButton.react",
    "CometRelay",
    "LWICometPromoteButtonWrapper.react",
    "PagesCometActorSelector.react",
    "PagesCometMessageButton.react",
    "PagesCometMoreActionsButton.react",
    "QE2Logger",
    "cr:1080996",
    "fbicon",
    "gkx",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e, f, g;
      a = a.page$key;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometPageActionControls_page.graphql")),
        a
      );
      var k = a.id;
      e =
        (e = a.viewer) == null
          ? void 0
          : (e = e.account_user) == null
          ? void 0
          : e.id;
      f = (f = a.page_call_to_action) == null ? void 0 : f.id;
      var l = d("Actor").useActor();
      l = l[0];
      if (k == null)
        return c("recoverableViolation")(
          "pageID cannot be null",
          "pages_consumer_experience_www"
        );
      l = l === k;
      var m =
          b("cr:1080996") != null
            ? j.jsx(c("CometErrorBoundary.react"), {
                children: j.jsx("div", {
                  className: "h676nmdw",
                  children: j.jsx(b("cr:1080996"), {
                    buttonProps: { size: "medium" },
                    dialogEntryPoint: c(
                      "CometPageEntityScopedTypeaheadDialog.entrypoint"
                    ),
                    entityID: k,
                    entityType: "page",
                  }),
                }),
              })
            : null,
        n = j.jsx(c("CometErrorBoundary.react"), {
          children: j.jsx(c("PagesCometMoreActionsButton.react"), {
            isAdminView: l,
            pageID: k,
          }),
        });
      if (l) {
        if (e == null) {
          c("recoverableViolation")(
            "viewerAccountID cannot be null",
            "pages_consumer_experience_www"
          );
          return null;
        }
        return j.jsxs("div", {
          className: "j83agx80 bp9cbjyn",
          children: [
            j.jsx(c("CometErrorBoundary.react"), {
              children: j.jsx(c("LWICometPromoteButtonWrapper.react"), {
                entryPoint: "www_consolidated_promote_button",
                icon: d("fbicon")._(h("534261"), 16),
                page$key: a,
                pageID: k,
                testid: void 0,
                type: f != null && f !== "" ? "primary" : "secondary",
                usePromoteLabel: !0,
              }),
            }),
            m,
            j.jsx(d("Actor").ActorProvider, { initialActorID: e, children: n }),
            j.jsx(c("PagesCometActorSelector.react"), { page$key: a }),
          ],
        });
      }
      f =
        ((l = a.cometPageCTA) == null ? void 0 : l.__typename) !==
        "CometPageCTAMessageRenderer";
      l =
        a == null
          ? void 0
          : (e = a.header_message_button_highlight) == null
          ? void 0
          : e.always_highlight;
      e =
        a == null
          ? void 0
          : (e = a.header_message_button_highlight) == null
          ? void 0
          : e.highlight_on_like;
      g =
        f &&
        (a == null
          ? void 0
          : (g = a.header_message_button_highlight) == null
          ? void 0
          : g.use_highlighted_liked);
      f &&
        d("QE2Logger").logExposureForPage(
          "bmpg_www_secondary_message_button_highlight",
          k
        );
      return j.jsxs("div", {
        className: "j83agx80 bp9cbjyn",
        children: [
          j.jsx(c("CometErrorBoundary.react"), {
            children: j.jsx(c("CometPageLikeButton.react"), {
              defaultType: c("gkx")("691") ? "deemphasized" : "normal",
              highlightLikedButton: (k = g) != null ? k : !1,
              location: "page__header",
              padding: "wide",
              page$key: a,
              size: "medium",
            }),
          }),
          j.jsx(c("CometErrorBoundary.react"), {
            children:
              f &&
              j.jsx(c("PagesCometMessageButton.react"), {
                alwaysHighlightMessageButton: (g = l) != null ? g : !1,
                hideLabel: !1,
                highlightMessageButtonOnLike: (k = e) != null ? k : !1,
                location: "page__header",
                messengerEntryPoint: "pages_header",
                messengerLsEntryPoint: "pageHeader",
                page$key: a,
              }),
          }),
          m,
          n,
          j.jsx(c("PagesCometActorSelector.react"), { page$key: a }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPageCTARenderer.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometErrorBoundary.react",
    "CometPageCTARenderer_page.graphql",
    "CometRelay",
    "CometRouteParams",
    "CometTooltip.react",
    "PagesCometAdminCTAEditDialog.entrypoint",
    "PagesCometAdminCTAEditDropdown.entrypoint",
    "PagesCometPageContext.react",
    "PagesLogger",
    "PagesLoggerEventEnum",
    "PagesPageActionClickFalcoEvent",
    "PagesPageActionImpressionFalcoEvent",
    "TetraButton.react",
    "fbicon",
    "react",
    "unrecoverableViolation",
    "useCometDefaultLoggedOutDialog",
    "useCometEntryPointDialog",
    "useOnUpdateEffect",
    "useSinglePartialViewImpression",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.startTransition,
      m = e.useCallback,
      n = e.useContext,
      o = e.useEffect,
      p = e.useRef,
      q = new Set(["legacy_cta_request_quote", "legacy_cta_message"]);
    function a(a) {
      var e,
        f = j !== void 0 ? j : (j = b("CometPageCTARenderer_page.graphql")),
        g = n(d("PagesCometPageContext.react").PagesCometPageContext);
      g = g.isAdminView;
      var r = c("useCometDefaultLoggedOutDialog")();
      f = d("CometRelay").useRefetchableFragment(f, a.page);
      var s = f[0],
        t = f[1];
      c("useOnUpdateEffect")(
        function () {
          l(function () {
            t({}, { fetchPolicy: "store-and-network" });
          });
        },
        [(f = s.page_call_to_action) == null ? void 0 : f.cta_type, t]
      );
      f = d("CometRouteParams").useRouteParams();
      var u = p(null),
        v = s.comet_page_cta_renderer,
        w = s.id;
      if (w == null || w === "")
        throw c("unrecoverableViolation")(
          "Page ID cannot be empty for a CTA button on that Page.",
          "pages_consumer_experience_www"
        );
      var x = c("useCometEntryPointDialog")(
          c("PagesCometAdminCTAEditDialog.entrypoint"),
          { pageID: w }
        ),
        y = x[0],
        z = m(
          function (a) {
            y({ autoOpenCtaType: a, pageID: w });
          },
          [w, y]
        );
      x = c("useSinglePartialViewImpression")({
        onImpressionStart: function () {
          c("PagesPageActionImpressionFalcoEvent").log(function () {
            return {
              event_data: {
                action_id: null,
                action_type: "legacy_cta_add_button",
                is_primary: !0,
              },
              event_location: "page__add_legacy_cta_button",
              page_id: w,
              referrer: null,
            };
          });
        },
      });
      var A = k.jsx(c("CometTooltip.react"), {
          tooltip: h._(
            "Add a button to get people to take an action from your Page such as shop or sign up"
          ),
          children: k.jsx(c("TetraButton.react"), {
            icon: d("fbicon")._(i("483768"), 16),
            label:
              ((e = s.use_add_button_text_variant) == null
                ? void 0
                : e.show_content_variant) === !0
                ? h._("Add Action Button")
                : h._("Add a Button"),
            onPress: function () {
              c("PagesPageActionClickFalcoEvent").log(function () {
                return {
                  event_data: {
                    action_id: null,
                    action_type: "legacy_cta_add_button",
                    is_primary: !0,
                  },
                  event_location: "page__add_legacy_cta_button",
                  page_id: w,
                  referrer: null,
                };
              }),
                z();
            },
            ref: x,
          }),
        }),
        B = String(f == null ? void 0 : f.modal),
        C =
          (f == null ? void 0 : f.modal_param) != null
            ? String(f == null ? void 0 : f.modal_param)
            : null;
      o(function () {
        if (u.current === w) return;
        B === "call_to_action_button" &&
          ((u.current = w),
          l(function () {
            return z(C);
          }));
      });
      var D = s.can_viewer_edit_profile === !0 && g;
      if (D === !1 && v == null) return null;
      D && v == null
        ? (e = A)
        : (e = k.jsx(d("CometRelay").MatchContainer, {
            match: v,
            props: {
              pageID: w,
              renderCometPageCTAButton: function (b) {
                var e = b.actionType,
                  f = b.ctaID,
                  g = b.href,
                  i = b.label,
                  j = b.onClick,
                  l = function (a) {
                    q.has(e) && r != null ? r() : j != null && j(a);
                    if (e == null)
                      throw c("unrecoverableViolation")(
                        "actionType is null, logging failed.",
                        "pages_consumer_experience_www"
                      );
                    if (w == null || w === "")
                      throw c("unrecoverableViolation")(
                        "pageID is null, logging failed.",
                        "pages_consumer_experience_www"
                      );
                    c("PagesPageActionClickFalcoEvent").log(function () {
                      return {
                        event_data: {
                          action_id: f,
                          action_type: e,
                          is_primary: !0,
                        },
                        event_location:
                          D === !0
                            ? "page__edit_legacy_cta_dropdown_test_button"
                            : "page__legacy_cta_button",
                        page_id: w,
                        referrer: null,
                      };
                    });
                    d("PagesLogger").log(
                      w,
                      c("PagesLoggerEventEnum").CLICK,
                      "pages_primary_cta_button",
                      "pages_actions_unit",
                      [],
                      {
                        cta_id: f,
                        cta_target_url: null,
                        cta_type: e,
                        cta_web_destination_type: null,
                      }
                    );
                  },
                  m = a.children,
                  n = h._("Edit {CTA label}", [h._param("CTA label", i)]);
                if (m != null && w != null) {
                  if (D !== !0) {
                    var o;
                    return m(
                      babelHelpers["extends"]({}, b, {
                        ctaTooltipText:
                          (o = s.page_call_to_action) == null
                            ? void 0
                            : o.cta_tooltip_text,
                        enableEditing: D,
                        onClick: l,
                        pageName: s.name,
                        upsellInterstitialCtaType:
                          (o = s.page_call_to_action) == null
                            ? void 0
                            : o.upsell_interstitial_cta_type,
                      })
                    );
                  }
                  if (f != null)
                    return k.jsx(c("CometEntryPointPopoverTrigger.react"), {
                      entryPointParams: { ctaID: f, pageID: w },
                      otherProps: {
                        ctaID: f,
                        ctaLabel: i,
                        href: g,
                        onEditCTAClick: function () {
                          c("PagesPageActionClickFalcoEvent").log(function () {
                            return {
                              event_data: {
                                action_id: f,
                                action_type: e,
                                is_primary: !0,
                              },
                              event_location:
                                "page__edit_legacy_cta_dropdown_edit_button",
                              page_id: w,
                              referrer: null,
                            };
                          }),
                            z();
                        },
                        pageActionType: e,
                        pageID: w,
                        testButton: l,
                      },
                      popoverEntryPoint: c(
                        "PagesCometAdminCTAEditDropdown.entrypoint"
                      ),
                      position: "below",
                      children: function (a, d) {
                        return k.jsx("span", {
                          ref: a,
                          children: m(
                            babelHelpers["extends"]({}, b, {
                              enableEditing: D,
                              label: D ? n : i,
                              onClick: function () {
                                c("PagesPageActionClickFalcoEvent").log(
                                  function () {
                                    return {
                                      event_data: {
                                        action_id: f,
                                        action_type: e,
                                        is_primary: !0,
                                      },
                                      event_location:
                                        "page__edit_legacy_cta_button",
                                      page_id: w,
                                      referrer: null,
                                    };
                                  }
                                ),
                                  d();
                              },
                            })
                          ),
                        });
                      },
                    });
                }
                return A;
              },
            },
          }));
      return k.jsx(c("CometErrorBoundary.react"), {
        fallback: function () {
          return D ? A : null;
        },
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
