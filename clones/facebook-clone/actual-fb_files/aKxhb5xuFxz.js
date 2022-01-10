if (self.CavalryLogger) {
  CavalryLogger.start_js(["GjIqIeL"]);
}

__d(
  "PagesCometAdminMegaphoneContainerQuery.graphql",
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
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "PagesCometAdminMegaphoneContainerQuery",
              fragmentName: "PagesCometAdminMegaphoneRenderer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminMegaphoneRenderer",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesCometAdminMegaphoneContainerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_aymt_page_admin_megaphone_renderer",
                  plural: !1,
                  selections: [c],
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
          name: "PagesCometAdminMegaphoneContainerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_aymt_page_admin_megaphone_renderer",
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
                  ],
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
          id: "5937363616337324",
          metadata: {},
          name: "PagesCometAdminMegaphoneContainerQuery",
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
  "PagesCometRedirectMegaphoneContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "hasID" },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "redirectedPageID",
        },
        c = [
          {
            condition: "hasID",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "id",
                    variableName: "redirectedPageID",
                  },
                ],
                concreteType: "Page",
                kind: "LinkedField",
                name: "page",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_viewer_admin",
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
                    name: "id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "url",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "PagesCometRedirectMegaphoneContainerQuery",
          selections: c,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "PagesCometRedirectMegaphoneContainerQuery",
          selections: c,
        },
        params: {
          id: "4142811072425375",
          metadata: {},
          name: "PagesCometRedirectMegaphoneContainerQuery",
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
  "PagesCometBusinessManagerEntryCardContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "pageID" }],
        b = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        c = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "PagesCometBusinessManagerEntryCardContainerQuery",
              fragmentName:
                "PagesCometBusinessManagerEntryCardRenderer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminToBusinessManagerCardRenderer",
          abstractKey: null,
        },
        d = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "PagesCometBusinessManagerEntryCardContainerQuery",
              fragmentName: "PagesCometBizWebEntryCardRenderer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminToBizWebCardRenderer",
          abstractKey: null,
        },
        e = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "PagesCometBusinessManagerEntryCardContainerQuery",
              fragmentName: "PagesCometCreatorStudioEntryCardRenderer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminToCreatorStudioCardRenderer",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesCometBusinessManagerEntryCardContainerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_page_admin_banner_renderer",
                  plural: !1,
                  selections: [c, d, e],
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
          name: "PagesCometBusinessManagerEntryCardContainerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_page_admin_banner_renderer",
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
                    d,
                    e,
                  ],
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
          id: "4039987259403440",
          metadata: {},
          name: "PagesCometBusinessManagerEntryCardContainerQuery",
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
  "PagesCometRedirectMegaphonePopoverQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "2911412075627422",
        metadata: {},
        name: "PagesCometRedirectMegaphonePopoverQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometPageCardsContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: "COMET_PAGE_CARDS",
          kind: "LocalArgument",
          name: "feedLocation",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "location" },
        c = { defaultValue: null, kind: "LocalArgument", name: "pageID" },
        d = {
          defaultValue: "page_cards",
          kind: "LocalArgument",
          name: "renderLocation",
        },
        e = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        f = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        g = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        h = [
          { kind: "Variable", name: "card_location", variableName: "location" },
        ],
        i = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometIcebreakersCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageIcebreakersCardRenderer",
          abstractKey: null,
        },
        j = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometAboutCardWithMapRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAboutCardWithMapRenderer",
          abstractKey: null,
        },
        k = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAboutCardWithoutMapRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAboutCardWithoutMapRenderer",
          abstractKey: null,
        },
        l = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometOffersCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageOfferCardRenderer",
          abstractKey: null,
        },
        m = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometPhotosCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPagePhotoCardRenderer",
          abstractKey: null,
        },
        n = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometVideosCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageVideoCardRenderer",
          abstractKey: null,
        },
        o = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometPageTransparencyCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPagePageTransparencyCardRenderer",
          abstractKey: null,
        },
        p = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometRelatedPagesCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageRelatedPageCardRenderer",
          abstractKey: null,
        },
        q = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminUpcomingAppointmentsCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminUpcomingAppointmentsCardRenderer",
          abstractKey: null,
        },
        r = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometServicesAvailabilityCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageServicesAvailabilityCardRenderer",
          abstractKey: null,
        },
        s = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometSeriesCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageSeriesCardRenderer",
          abstractKey: null,
        },
        t = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometPlaylistsCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPagePlaylistCardRenderer",
          abstractKey: null,
        },
        u = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometPMVFeaturingArtistVideosCardRendererContainer_cardRendererContainer",
              fragmentPropName: "cardRendererContainer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPagePMVFeaturingArtistVideosCardRenderer",
          abstractKey: null,
        },
        v = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "CometPageBDPPageCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageBDPPageCardRenderer",
          abstractKey: null,
        },
        w = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "CometKnowledgePageImagesCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometKnowledgePageImagesCardRenderer",
          abstractKey: null,
        },
        x = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "CometKnowledgePageFeedbackCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometKnowledgePageFeedbackCardRenderer",
          abstractKey: null,
        },
        y = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "CometKnowledgePageContentAttributionCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometKnowledgePageContentAttributionCardRenderer",
          abstractKey: null,
        },
        z = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "CometKnowledgePageAboutCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometKnowledgePageAboutCardRenderer",
          abstractKey: null,
        },
        A = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "CometKnowledgePageTransparencyCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometKnowledgePageTransparencyCardRenderer",
          abstractKey: null,
        },
        B = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "CometKnowledgePageRelatedEntitiesCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometKnowledgePageRelatedEntitiesCardRenderer",
          abstractKey: null,
        },
        C = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminLWIProductPickerCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminLWIProductPickerCardRenderer",
          abstractKey: null,
        },
        D = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminLWIQuestionnaireRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminLWIQuestionnaireRenderer",
          abstractKey: null,
        },
        E = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminCommerceInsightsCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "XFBCometPageAdminCommerceInsightsCardRenderer",
          abstractKey: null,
        },
        F = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminInsightsRHCCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminInsightsRHCCardRenderer",
          abstractKey: null,
        },
        G = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometAdminGoalCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminGoalCardRenderer",
          abstractKey: null,
        },
        H = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometAdminJourneyCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminJourneyCardRenderer",
          abstractKey: null,
        },
        I = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometFundraisersCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageFundraisersCardRenderer",
          abstractKey: null,
        },
        J = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminFriendInviterCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminFriendInviterCardRenderer",
          abstractKey: null,
        },
        K = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "CometPageAdminAdditionalProfileTransitionCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminAdditionalProfileTransitionCardRenderer",
          abstractKey: null,
        },
        L = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "CometPageAdminGPANoticeCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminGPANoticeCardRenderer",
          abstractKey: null,
        },
        M = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometCreatePageCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "PagesCometCreatePageCardRenderer",
          abstractKey: null,
        },
        N = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometUpcomingEventsCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageUpcomingEventsCardRenderer",
          abstractKey: null,
        },
        O = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometLiveVideoCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageLiveVideoCardRenderer",
          abstractKey: null,
        },
        P = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometScheduledLiveVideoCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageScheduledLiveVideoCardRenderer",
          abstractKey: null,
        },
        Q = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometShopCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageShopCardRenderer",
          abstractKey: null,
        },
        R = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminLiveTabPromoCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminLiveTabPromoCardRenderer",
          abstractKey: null,
        },
        S = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometSuggestEditsCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageSuggestEditsCardRenderer",
          abstractKey: null,
        },
        T = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminCompletionMeterCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminCompletionMeterCardRenderer",
          abstractKey: null,
        },
        U = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminThingsYouShouldDoCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "PagesCometAdminThingsYouShouldDoCardRenderer",
          abstractKey: null,
        },
        V = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName: "PagesCometAdminGYPSJCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminGYPSJCardRenderer",
          abstractKey: null,
        },
        W = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometSimilarPagesTrendingPostsUnitRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminSimilarPagesTrendingPostsUnitRenderer",
          abstractKey: null,
        },
        X = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminFreeBizToolsCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminFreeBizToolsCardRenderer",
          abstractKey: null,
        },
        Y = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "PagesCometAdminOnboardingCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageAdminOnboardingCardRenderer",
          abstractKey: null,
        },
        Z = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometPageCardsContainerQuery",
              fragmentName:
                "CometPageFbsAymtLarDiodeVariantCardRenderer_cardRenderer",
              fragmentPropName: "cardRenderer",
              kind: "ModuleImport",
            },
          ],
          type: "CometPageFbsAymtLarDiodeVariantCardRenderer",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f],
          kind: "Fragment",
          metadata: null,
          name: "CometPageCardsContainerQuery",
          selections: [
            {
              alias: null,
              args: g,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: h,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_page_cards",
                  plural: !0,
                  selections: [
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
                    P,
                    Q,
                    R,
                    S,
                    T,
                    U,
                    V,
                    W,
                    X,
                    Y,
                    Z,
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
          argumentDefinitions: [c, b, e, f, a, d],
          kind: "Operation",
          name: "CometPageCardsContainerQuery",
          selections: [
            {
              alias: null,
              args: g,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: h,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_page_cards",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
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
                    P,
                    Q,
                    R,
                    S,
                    T,
                    U,
                    V,
                    W,
                    X,
                    Y,
                    Z,
                  ],
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
          id: "4231436460258723",
          metadata: {},
          name: "CometPageCardsContainerQuery",
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
  "PagesCometHealthGeneralInfoTreatmentDismissMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            kind: "ScalarField",
            name: "page_health_general_info_treatment_dismiss",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesCometHealthGeneralInfoTreatmentDismissMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PagesCometHealthGeneralInfoTreatmentDismissMutation",
          selections: b,
        },
        params: {
          id: "4295427093800971",
          metadata: {},
          name: "PagesCometHealthGeneralInfoTreatmentDismissMutation",
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
  "PagesCometHealthInformCardContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "pageID" }],
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ];
      b = [
        {
          alias: null,
          args: [{ kind: "Variable", name: "id", variableName: "pageID" }],
          concreteType: "Page",
          kind: "LinkedField",
          name: "page",
          plural: !1,
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
              concreteType: "PagesHealthInformModuleData",
              kind: "LinkedField",
              name: "health_inform_card_data",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "health_inform_treatment",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "treatment_sub_type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "title_fbt",
                  plural: !1,
                  selections: b,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "content_fbt",
                  plural: !1,
                  selections: b,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "button_fbt",
                  plural: !1,
                  selections: b,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "url",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesCometHealthInformCardContainerQuery",
          selections: b,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PagesCometHealthInformCardContainerQuery",
          selections: b,
        },
        params: {
          id: "3860466870736445",
          metadata: {},
          name: "PagesCometHealthInformCardContainerQuery",
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
  "PagesCometBusinessFYICardContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "pageID" }],
        b = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "header",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "subtitle",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cta",
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
              name: "message_type",
              storageKey: null,
            },
          ],
          type: "CometPageBusinessFYICardRenderer",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesCometBusinessFYICardContainerQuery",
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
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_page_business_fyi_card",
                  plural: !1,
                  selections: [d],
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
          name: "PagesCometBusinessFYICardContainerQuery",
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
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_page_business_fyi_card",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    d,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3987618131322877",
          metadata: {},
          name: "PagesCometBusinessFYICardContainerQuery",
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
  "CometPageSpotlightCardQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "id" },
        b = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        d = [{ kind: "Variable", name: "id", variableName: "id" }],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "CometPageSpotlightCardQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometPageSpotlightCard_page",
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
          argumentDefinitions: [b, c, a],
          kind: "Operation",
          name: "CometPageSpotlightCardQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                e,
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
                      args: [
                        {
                          kind: "Literal",
                          name: "supported",
                          value: ["SpotlightCardRendererForVPT"],
                        },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "spotlight_card_renderer",
                      plural: !1,
                      selections: [
                        e,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometPageSpotlightCard_page",
                              fragmentName:
                                "CometPageSpotlightCardHScroll_spotlightcardrendererforvpt",
                              fragmentPropName: "spotlightcardrendererforvpt",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "SpotlightCardRendererForVPT",
                          abstractKey: null,
                        },
                      ],
                      storageKey:
                        'spotlight_card_renderer(supported:["SpotlightCardRendererForVPT"])',
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
          id: "4109716699151009",
          metadata: {},
          name: "CometPageSpotlightCardQuery",
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
  "CometPageSpotlightCard_page.graphql",
  ["CometPageSpotlightCardQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "scale" },
        { kind: "RootArgument", name: "useDefaultActor" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["node"],
          operation: b("CometPageSpotlightCardQuery.graphql"),
          identifierField: "id",
        },
      },
      name: "CometPageSpotlightCard_page",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: ["SpotlightCardRendererForVPT"],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "spotlight_card_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometPageSpotlightCard_page",
                  fragmentName:
                    "CometPageSpotlightCardHScroll_spotlightcardrendererforvpt",
                  fragmentPropName: "spotlightcardrendererforvpt",
                  kind: "ModuleImport",
                },
              ],
              type: "SpotlightCardRendererForVPT",
              abstractKey: null,
            },
          ],
          storageKey:
            'spotlight_card_renderer(supported:["SpotlightCardRendererForVPT"])',
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
  "PagesCometSpotlightCardContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "pageID" },
        b = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        c = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        d = [{ kind: "Variable", name: "id", variableName: "pageID" }];
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "PagesCometSpotlightCardContainerQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometPageSpotlightCard_page",
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
          argumentDefinitions: [a, c, b],
          kind: "Operation",
          name: "PagesCometSpotlightCardContainerQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "supported",
                      value: ["SpotlightCardRendererForVPT"],
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "spotlight_card_renderer",
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
                          args: null,
                          documentName: "CometPageSpotlightCard_page",
                          fragmentName:
                            "CometPageSpotlightCardHScroll_spotlightcardrendererforvpt",
                          fragmentPropName: "spotlightcardrendererforvpt",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "SpotlightCardRendererForVPT",
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'spotlight_card_renderer(supported:["SpotlightCardRendererForVPT"])',
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
          id: "2848944838562471",
          metadata: {},
          name: "PagesCometSpotlightCardContainerQuery",
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
  "CometSinglePageContentContainerFeedQuery.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql", "relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        h = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        j = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        k = { defaultValue: null, kind: "LocalArgument", name: "pageID" },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        o = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        p = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          args: null,
          fragment: b("CometFeedUnit_feedUnit$normalization.graphql"),
          kind: "FragmentSpread",
        },
        s = [{ kind: "Literal", name: "first", value: 5 }],
        t = [q];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i, j, k, l, m, n, o],
          kind: "Fragment",
          metadata: null,
          name: "CometSinglePageContentContainerFeedQuery",
          selections: [
            {
              alias: null,
              args: p,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometModernPageFeed_page",
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
          argumentDefinitions: [g, c, d, e, f, h, i, j, l, n, o, k, m, a],
          kind: "Operation",
          name: "CometSinglePageContentContainerFeedQuery",
          selections: [
            {
              alias: null,
              args: p,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                q,
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "timeline_pinned_unit",
                  plural: !1,
                  selections: [
                    q,
                    {
                      kind: "InlineFragment",
                      selections: [r],
                      type: "FeedUnit",
                      abstractKey: "__isFeedUnit",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: s,
                  concreteType: "TimelineFeedUnitsConnection",
                  kind: "LinkedField",
                  name: "timeline_feed_units",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "TimelineFeedUnitsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
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
                              kind: "TypeDiscriminator",
                              abstractKey: "__isFeedUnit",
                            },
                            r,
                            {
                              kind: "InlineFragment",
                              selections: t,
                              type: "Story",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: t,
                              type: "Node",
                              abstractKey: "__isNode",
                            },
                            {
                              kind: "InlineFragment",
                              selections: t,
                              type: "CommunityChatFeedObject",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: t,
                              type: "CommunityTabNewJoinFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: t,
                              type: "CommunityTabTrendingPOGFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: t,
                              type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: t,
                              type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "cursor",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PageInfo",
                      kind: "LinkedField",
                      name: "page_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_next_page",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "end_cursor",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: "timeline_feed_units(first:5)",
                },
                {
                  alias: null,
                  args: s,
                  filters: null,
                  handle: "connection",
                  key: "CometModernPageFeed_page_timeline_feed_units",
                  kind: "LinkedHandle",
                  name: "timeline_feed_units",
                },
                {
                  kind: "ClientExtension",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "page_pinned_post",
                      storageKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4690560237643883",
          metadata: {},
          name: "CometSinglePageContentContainerFeedQuery",
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
  "PagesCometAdminMegaphoneContainer.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "PagesCometAdminMegaphoneContainerQuery.graphql",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PagesCometAdminMegaphoneContainerQuery.graphql"));
    function a(a) {
      a = a.adminMegaphoneContainerQueryReference;
      var b = a.variables;
      a = d("CometRelay").usePreloadedQuery(j, a);
      a = a.page;
      if (a == null) {
        c("recoverableViolation")(
          "Cannot render cards without ent page",
          "pages_consumer_experience_www"
        );
        return null;
      }
      a = a.comet_aymt_page_admin_megaphone_renderer;
      return i.jsx("div", {
        children: i.jsx(c("CometErrorBoundary.react"), {
          children: i.jsx(d("CometRelay").MatchContainer, {
            match: a,
            props: { pageID: b.pageID },
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
  "PagesCometRedirectMegaphonePopover.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometRedirectMegaphonePopoverQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          extraProps: a,
          queries: {
            queryReference: {
              parameters: b(
                "PagesCometRedirectMegaphonePopoverQuery$Parameters"
              ),
              variables: { profileID: a.routeProps.currentPageID },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometRedirectMegaphonePopover.react"
      ).__setRef("PagesCometRedirectMegaphonePopover.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometRedirectMegaphoneContainer.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "CometHovercardTrigger.react",
    "CometImageIcon_DEPRECATED.react",
    "CometLink.react",
    "CometRelay",
    "PagesCometRedirectMegaphoneContainerQuery.graphql",
    "PagesCometRedirectMegaphonePopover.entrypoint",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useState,
      m =
        j !== void 0
          ? j
          : (j = b("PagesCometRedirectMegaphoneContainerQuery.graphql"));
    function a(a) {
      var b = a.pageID;
      a = a.pagesCometRedirectMegaphoneContainerQueryReference;
      a = d("CometRelay").usePreloadedQuery(m, a);
      var e = l(!0),
        f = e[0],
        g = e[1];
      e = a.page;
      if (e == null) return null;
      a = e.id;
      if (a == null) return null;
      var j = e.is_viewer_admin;
      if (j === !0) return null;
      j = e.name;
      e = (e = e.url) != null ? e : "";
      var n = function () {
        g(!1);
      };
      n = {
        color: "secondary",
        icon: d("fbicon")._(i("478233"), 20),
        onPress: n,
        size: 24,
      };
      n = k.jsx(
        c("TetraIcon.react"),
        babelHelpers["extends"]({ "aria-label": h._("Close") }, n)
      );
      a = k.jsx(c("CometHovercardTrigger.react"), {
        align: "start",
        display: "inline",
        popoverEntryPoint: c("PagesCometRedirectMegaphonePopover.entrypoint"),
        popoverProps: { routeProps: { currentPageID: a, redirectedPageID: b } },
        position: "below",
        children: function (a) {
          return k.jsx("div", {
            className: "nc684nl6",
            ref: a,
            children: "[?]",
          });
        },
      });
      b = k.jsxs("div", {
        className: "f10w8fjw pybr56ya buofh1pr btwxx1t3 j83agx80",
        children: [
          k.jsx("div", {
            className:
              "tw6a2znq d1544ag0 taijpn5t cbu4d94t j83agx80 bp9cbjyn n5ue3fu6",
            children: k.jsx(c("CometImageIcon_DEPRECATED.react"), {
              size: 20,
              src: i("1337392"),
            }),
          }),
          k.jsx("div", {
            className: "taijpn5t buofh1pr cbu4d94t j83agx80",
            children: k.jsxs(c("TetraText.react"), {
              color: "secondary",
              numberOfLines: 4,
              type: "body3",
              children: [
                h._("You were redirected here from the unofficial Page:"),
                " ",
                k.jsx(c("CometLink.react"), { href: e + "?nr", children: j }),
                " ",
                a,
              ],
            }),
          }),
        ],
      });
      return f
        ? k.jsx("div", {
            className: "a8nywdso sj5x9vvc rz4wbd8a cxgpxx05",
            children: k.jsx(c("CometCard.react"), {
              background: "white",
              dropShadow: 1,
              children: k.jsxs("div", {
                className: "btwxx1t3 j83agx80",
                children: [
                  k.jsx("div", {
                    className: "buofh1pr btwxx1t3 j83agx80",
                    children: b,
                  }),
                  k.jsx("div", {
                    className:
                      "tw6a2znq d1544ag0 taijpn5t cbu4d94t j83agx80 bp9cbjyn n5ue3fu6",
                    children: n,
                  }),
                ],
              }),
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometBusinessManagerEntryCardContainer.react",
  [
    "CometCreatorToolsGrowthLoggingUtils",
    "CometErrorBoundary.react",
    "CometRelay",
    "FBLogger",
    "PagesCometBusinessManagerEntryCardContainerQuery.graphql",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l =
        h !== void 0
          ? h
          : (h = b("PagesCometBusinessManagerEntryCardContainerQuery.graphql"));
    function m(a) {
      a = a.pagesCometBusinessManagerEntryCardContainerQueryReference;
      a = d("CometRelay").usePreloadedQuery(l, a);
      a = a.page;
      var b = (a == null ? void 0 : a.comet_page_admin_banner_renderer) != null;
      k(
        function () {
          b &&
            d(
              "CometCreatorToolsGrowthLoggingUtils"
            ).logCreatorToolsGrowthEventComet(
              "PAGES_ADMIN_ENTRY_CARD",
              "BANNER_IMPRESSION"
            );
        },
        [b]
      );
      if (a == null) {
        c("recoverableViolation")(
          "Cannot render the BM entry point without ent page",
          "core_business_interface_www"
        );
        return null;
      }
      return i.jsx(d("CometRelay").MatchContainer, {
        match: a.comet_page_admin_banner_renderer,
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      k(function () {
        d(
          "CometCreatorToolsGrowthLoggingUtils"
        ).logCreatorToolsGrowthEventComet(
          "PAGES_ADMIN_ENTRY_CARD",
          "BANNER_MOUNT"
        );
      }, []);
      var b = j(function (a) {
        c("FBLogger")("core_business_interface_www")
          .catching(a)
          .warn(
            "Failed to render Pages Comet Busines Manager entry card container"
          );
      }, []);
      return i.jsx(c("CometErrorBoundary.react"), {
        onError: b,
        children: i.jsx(m, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPageHomeAboutCardGlimmer.react",
  ["BaseGlimmer.react", "CometPageHomeCardGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i() {
      return h.jsxs("div", {
        className: "dhix69tm oygrvhab wkznzc2l tr9rh885 btwxx1t3 j83agx80",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className:
              "hhz5lgdu oi9244e8 gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            index: 0,
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "k6hq67h2 gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            index: 0,
          }),
        ],
      });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function a() {
      return h.jsxs(c("CometPageHomeCardGlimmer.react"), {
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className:
              "amlvvma6 dhix69tm gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            index: 0,
          }),
          h.jsx(i, {}),
          h.jsx(i, {}),
          h.jsx(i, {}),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPageCardsContainer.react",
  [
    "CometErrorBoundary.react",
    "CometPageCardsContainerQuery.graphql",
    "CometPageHomeAboutCardGlimmer.react",
    "CometPlaceholder.react",
    "CometRelay",
    "PagesCometCardsColumnGlimmer.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = h !== void 0 ? h : (h = b("CometPageCardsContainerQuery.graphql"));
    function a(a) {
      a = a.cardsContainerQueryReference;
      var b = a.variables,
        e = null;
      b.location === "MAIN_COLUMN"
        ? (e = i.jsx("div", {
            children: i.jsx(c("CometPageHomeAboutCardGlimmer.react"), {}),
          }))
        : b.location === "SECONDARY_COLUMN"
        ? (e = i.jsx(c("PagesCometCardsColumnGlimmer.react"), {}))
        : c("recoverableViolation")(
            "Invalid location specified for the cards on Page Home tab.",
            "pages_consumer_experience_www"
          );
      a = d("CometRelay").usePreloadedQuery(j, a);
      a = a.page;
      if (a == null) {
        c("recoverableViolation")(
          "Cannot render cards without ent page",
          "pages_consumer_experience_www"
        );
        return null;
      }
      a = a.comet_page_cards;
      return a.length === 0
        ? null
        : i.jsx(c("CometPlaceholder.react"), {
            fallback: e,
            children: a.map(function (a, e) {
              return i.jsx(
                c("CometErrorBoundary.react"),
                {
                  children: i.jsx(d("CometRelay").MatchContainer, {
                    match: a,
                    props: { pageID: b.pageID },
                  }),
                },
                e
              );
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometHealthGeneralInfoTreatmentDismissMutation",
  ["CometRelay", "PagesCometHealthGeneralInfoTreatmentDismissMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "PagesCometHealthGeneralInfoTreatmentDismissMutation.graphql"
            ));
    function a(a, b, c, e, f) {
      d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: e,
        onError: f,
        variables: { input: { health_inform_treatment: c, page_id: b } },
      });
    }
    g.dismissHealthGeneralInfoTreatment = a;
  },
  98
);
__d(
  "HealthInformTreatment",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      COVID_INFORM: "COVID_INFORM",
      VACCINE_INFORM: "VACCINE_INFORM",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PagesCometHealthInformCard.react",
  [
    "ix",
    "CometColumnItem.react",
    "CometContextualMessage.react",
    "CometRelay",
    "PagesCometHealthGeneralInfoTreatmentDismissMutation",
    "PagesIntegrityEventTypedLoggerLite",
    "TetraButtonGroup.react",
    "TetraIcon.react",
    "fbicon",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useState;
    function a(a) {
      var b = a.body,
        e = a.header,
        f = a.healthInformTreatment,
        g = a.link,
        m = a.pageID,
        n = a.treatment;
      a = a.url;
      var o = l(!0),
        p = o[0],
        q = o[1],
        r = d("CometRelay").useRelayEnvironment(),
        s = null;
      switch (f) {
        case "COVID_INFORM":
          s = "page_covid_warning_card";
          break;
        case "VACCINE_INFORM":
          s = "page_vaccine_warning_card";
          break;
      }
      var t = j(
        function (a) {
          c("PagesIntegrityEventTypedLoggerLite").log({
            event: a,
            event_callsite: "page",
            event_target: s,
            extra_data: { treatment: n },
            page_id: m,
          });
        },
        [s, n, m]
      );
      o = function () {
        d(
          "PagesCometHealthGeneralInfoTreatmentDismissMutation"
        ).dismissHealthGeneralInfoTreatment(r, m, f),
          q(!1),
          t("xout");
      };
      k(
        function () {
          t("view");
        },
        [t, m]
      );
      var u = c("gkx")("1969571");
      u =
        u && f === "COVID_INFORM"
          ? i.jsx(c("TetraIcon.react"), {
              color: "secondary",
              icon: d("fbicon")._(h("550429"), 32),
            })
          : i.jsx(c("TetraIcon.react"), {
              color: "highlight",
              icon: d("fbicon")._(h("869053"), 32),
            });
      return p
        ? i.jsx(c("CometColumnItem.react"), {
            paddingTop: 0,
            paddingVertical: 20,
            children: i.jsx(c("CometContextualMessage.react"), {
              addOnPrimary: i.jsx(c("TetraButtonGroup.react"), {
                primary: {
                  label: g,
                  linkProps: { url: a },
                  onPress: function () {
                    t("click");
                  },
                  reduceEmphasis: !0,
                },
              }),
              body: b,
              headline: e,
              icon: u,
              onClose: o,
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometHealthInformCardContainer.react",
  [
    "CometRelay",
    "PagesCometHealthInformCard.react",
    "PagesCometHealthInformCardContainerQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e, f;
      a = a.pagesCometHealthInformCardContainerQueryReference;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("PagesCometHealthInformCardContainerQuery.graphql")),
        a
      );
      e = (e = a.page) == null ? void 0 : e.health_inform_card_data;
      return ((f = a.page) == null ? void 0 : f.id) == null ||
        (e == null ? void 0 : e.health_inform_treatment) == null ||
        (e == null ? void 0 : (f = e.title_fbt) == null ? void 0 : f.text) ==
          null ||
        (e == null ? void 0 : (f = e.content_fbt) == null ? void 0 : f.text) ==
          null ||
        (e == null ? void 0 : (f = e.button_fbt) == null ? void 0 : f.text) ==
          null ||
        (e == null ? void 0 : e.url) == null
        ? null
        : i.jsx(c("PagesCometHealthInformCard.react"), {
            body: e.content_fbt.text,
            header: e.title_fbt.text,
            healthInformTreatment: e.health_inform_treatment,
            link: e.button_fbt.text,
            pageID: a.page.id,
            treatment: (f = e.treatment_sub_type) != null ? f : "",
            url: e.url,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometBusinessFYICard.react",
  [
    "ix",
    "CometCard.react",
    "CometImage.react",
    "CometUnitHeader.react",
    "PagesLogger",
    "PagesLoggerEventEnum",
    "PagesLoggerEventTargetEnum",
    "TetraButton.react",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useState;
    function a(a) {
      var b = a.cta,
        e = a.messageType,
        f = a.pageID,
        g = a.subtitle,
        k = a.title,
        l = a.uri;
      a = j(!0);
      var m = a[0],
        n = a[1];
      m &&
        d("PagesLogger").log(
          f,
          c("PagesLoggerEventEnum").IMPRESSION,
          c("PagesLoggerEventTargetEnum").BUSINESS_FYI,
          null,
          ["page_header"]
        );
      a = function () {
        var a;
        d("PagesLogger").log(
          f,
          c("PagesLoggerEventEnum").CLICK,
          c("PagesLoggerEventTargetEnum").BUSINESS_FYI,
          null,
          ["page_header"],
          { action: "close", message_type: e, url: (a = l) != null ? a : "" }
        );
        n(!1);
      };
      var o = function () {
        d("PagesLogger").log(
          f,
          c("PagesLoggerEventEnum").CLICK,
          c("PagesLoggerEventTargetEnum").BUSINESS_FYI,
          null,
          ["page_header"],
          { action: "redirect", message_type: e, url: l }
        );
      };
      return m
        ? i.jsx("div", {
            className: "aov4n071 bi6gxh9e",
            children: i.jsxs(c("CometCard.react"), {
              background: "white",
              dropShadow: 1,
              children: [
                i.jsxs("div", {
                  className: "nc684nl6",
                  children: [
                    i.jsx("span", {
                      className:
                        "stjgntxs ni8dbmo4 swg4t2nn aoep172s bzsjyuwj pq6dq46d be9qi1ea alrr0afh kip1xq3a p0p8w163",
                      children: i.jsx(c("CometImage.react"), {
                        height: 40,
                        src: h("1386435"),
                        width: 40,
                      }),
                    }),
                    i.jsx("div", {
                      className: "rqr5e5pd",
                      children: i.jsx(c("CometUnitHeader.react"), {
                        body: g,
                        headline: k,
                        level: 3,
                      }),
                    }),
                    i.jsx("div", {
                      className:
                        "odw8uiq3 kr520xx4 pmk7jnqg p6qk8glf oj5qckz4 jnigpg78 tpga1rol n7fi1qx3",
                      children: i.jsx(c("TetraIcon.react"), {
                        "aria-label": "test",
                        color: "secondary",
                        icon: d("fbicon")._(h("478232"), 16),
                        onPress: a,
                        size: 24,
                      }),
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "dbpd2lw6 jktsbyx5 cahb80nu ofv0k9yr bzsjyuwj",
                  children:
                    b != null && l != null
                      ? i.jsx(c("TetraButton.react"), {
                          label: b,
                          linkProps: { target: "_blank", url: l },
                          onPress: o,
                          reduceEmphasis: !0,
                          size: "medium",
                        })
                      : null,
                }),
              ],
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometBusinessFYICardContainer.react",
  [
    "CometRelay",
    "PagesCometBusinessFYICard.react",
    "PagesCometBusinessFYICardContainerQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.PagesCometBusinessFYICardContainerQueryReference;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("PagesCometBusinessFYICardContainerQuery.graphql")),
        a
      );
      if (
        a == null ||
        a.page == null ||
        a.page.id == null ||
        a.page.comet_page_business_fyi_card == null ||
        a.page.comet_page_business_fyi_card.header == null ||
        a.page.comet_page_business_fyi_card.subtitle == null
      )
        return null;
      var e = a.page.comet_page_business_fyi_card;
      return i.jsx(c("PagesCometBusinessFYICard.react"), {
        cta: e.cta,
        messageType: e.message_type,
        pageID: a.page.id,
        subtitle: e.subtitle,
        title: e.header,
        uri: e.uri,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPageSpotlightCard.react",
  [
    "CometPageSpotlightCardItemGlimmer",
    "CometPageSpotlightCard_page.graphql",
    "CometPlaceholder.react",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.startTransition,
      k = e.useCallback;
    function a(a) {
      var e = d("CometRelay").useRefetchableFragment(
          h !== void 0 ? h : (h = b("CometPageSpotlightCard_page.graphql")),
          a.page
        ),
        f = e[0],
        g = e[1];
      e = k(
        function () {
          j(function () {
            g({}, { fetchPolicy: "network-only" });
          });
        },
        [g, j]
      );
      return f.spotlight_card_renderer == null
        ? null
        : i.jsx("div", {
            className:
              a.inHomeTab === !0
                ? "ar4r1fdm ggxiycxj hihg3u9x ocgrx2df oygrvhab cxmmr5t8 n1l5q3vz"
                : "ggxiycxj hihg3u9x kb7jmfru sjgh65i0 cxmmr5t8 kvgmc6g5",
            children: i.jsx(c("CometPlaceholder.react"), {
              fallback: i.jsx(c("CometPageSpotlightCardItemGlimmer"), {}),
              children: i.jsx(d("CometRelay").MatchContainer, {
                match: f.spotlight_card_renderer,
                props: { onVideosUpdated: e },
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
  "PagesCometSpotlightCardContainer.react",
  [
    "CometPageSpotlightCard.react",
    "CometRelay",
    "PagesCometSpotlightCardContainerQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("PagesCometSpotlightCardContainerQuery.graphql")),
        a.PagesCometSpotlightCardContainerQueryReference
      );
      if (a == null || a.page == null) return null;
      a = a.page;
      return i.jsx(c("CometPageSpotlightCard.react"), {
        inHomeTab: !0,
        page: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometSpotlightCardContainerDeferred.react",
  ["deferredLoadComponent", "react", "requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferredForDisplay")(
        "PagesCometSpotlightCardContainer.react"
      ).__setRef("PagesCometSpotlightCardContainerDeferred.react")
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometSinglePageContentContainer.react",
  [
    "CometContentArea.react",
    "CometFeedStoryGlimmer.react",
    "CometModernPageFeed.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometSinglePageContentContainerFeedQuery.graphql",
    "RelayUFI2CommentsKeyContext",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("CometSinglePageContentContainerFeedQuery.graphql"));
    function a(a) {
      a = a.contentContainerRendererQueryReference;
      var b = d("CometRelay").usePreloadedQuery(j, a);
      b = b.page;
      if (b == null) {
        c("recoverableViolation")(
          "Cannot render page feeds without page prop",
          "pages_consumer_experience_www"
        );
        return null;
      }
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: i.jsx(c("CometContentArea.react"), {
          children: i.jsx("div", {
            className: "k4urcfbm",
            children: i.jsx(c("CometFeedStoryGlimmer.react"), {}),
          }),
        }),
        children: i.jsx(c("CometContentArea.react"), {
          children: i.jsx(c("RelayUFI2CommentsKeyContext").Provider, {
            value: a.variables.UFI2CommentsProvider_commentsKey,
            children: i.jsx("div", {
              className: "k4urcfbm",
              children: i.jsx(c("CometModernPageFeed.react"), {
                page: b,
                variables: a.variables,
              }),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
