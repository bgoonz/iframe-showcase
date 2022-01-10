if (self.CavalryLogger) {
  CavalryLogger.start_js(["8kGpSMK"]);
}

__d(
  "SearchCometResultsInitialResultsQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: "SearchCometResultsInitialResultsQuery",
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "allow_streaming",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "args" },
        d = { defaultValue: null, kind: "LocalArgument", name: "count" },
        e = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        f = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        g = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        h = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        i = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        j = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        k = {
          defaultValue: "SEARCH",
          kind: "LocalArgument",
          name: "feedLocation",
        },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "fetch_filters",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        o = { defaultValue: null, kind: "LocalArgument", name: "locale" },
        p = {
          defaultValue: "COMET_STREAM",
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        q = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "stream_initial_count",
        },
        t = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        u = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
        ],
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_unit_id",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [
            a,
            b,
            c,
            d,
            e,
            f,
            g,
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
          ],
          kind: "Fragment",
          metadata: null,
          name: "SearchCometResultsInitialResultsQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "SearchCometResultsPaginatedResults_searchQuery",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            b,
            c,
            d,
            e,
            m,
            r,
            s,
            t,
            j,
            k,
            l,
            i,
            p,
            a,
            g,
            h,
            f,
            n,
            q,
            o,
          ],
          kind: "Operation",
          name: "SearchCometResultsInitialResultsQuery",
          selections: [
            {
              alias: "serpResponse",
              args: [{ kind: "Variable", name: "args", variableName: "args" }],
              concreteType: "SearchSerpResponse",
              kind: "LinkedField",
              name: "search_serp_relay",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: u,
                  concreteType: "SearchSerpResponseResultsConnection",
                  kind: "LinkedField",
                  name: "results",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_iem_triggered",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_hcm",
                      storageKey: null,
                    },
                    v,
                    {
                      if: "allow_streaming",
                      kind: "Stream",
                      label:
                        "SearchCometResultsPaginatedResults_searchQuery$stream$SearchCometResults_combined_results",
                      metadata: null,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "SearchSerpResponseResultsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "SearchRenderable",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "role",
                                  storageKey: null,
                                },
                                w,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "relay_rendering_strategy",
                              plural: !1,
                              selections: [
                                w,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "view_model",
                                      plural: !1,
                                      selections: [
                                        w,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "PlaceViewModel",
                                              kind: "LinkedField",
                                              name: "place_view_model",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "rank_in_module",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "LocalSearchPlaceSnippetViewModel",
                                                  kind: "LinkedField",
                                                  name: "places_snippet_model",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "LocalSearchPlaceLocationViewModel",
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
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          type: "SearchPlaceViewModel",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsStandalonePlace_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPlaceRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPlaceMapModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPlaceMapModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsListModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchListModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHScrollListModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHScrollListModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsSupportModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchSupportModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsApolloGridModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchApolloGridModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsGridModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchGridModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPhotoEmptyModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPhotoEmptyModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHeroModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHeroModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsRelatedSearchesModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchRelatedSearchesModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsStandalonePost_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPostRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsStandalonePostAndComment_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPostAndCommentRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsRichPost_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchRichPostRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsProfile_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchProfileRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsVideo_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchVideoRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsStandalonePhoto_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPhotoRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsSpellerModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchSpellerModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsArticle_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchArticleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPrivacyAwarenessModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPrivacyAwarenessModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsUnimplementedResult_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchUnimplementedResultRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsFloatingSeeMoreModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchFloatingSeeMoreModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsEndOfResultsModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchEndOfResultsModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsMergeableListModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchMergeableListModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsBSGModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchBSGModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsSafetyCheckModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchSafetyCheckModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsCoronavirusSupportModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchCoronavirusSupportModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsEntityUserBootstrapSeeMoreModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchEntityUserBootstrapSeeMoreModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsAd_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchResultsAdRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsSkewerModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchSkewerModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsAssistantModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchAssistantQnAModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsReferenceArticle_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchReferenceArticleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsNewsArticle_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchNewsArticleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsEventsDashboardEvent_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchEventsDashboardEventRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMStreamerGamesPlayed_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMStreamerGamesPlayedRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsInfoHeaderModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchInfoHeaderModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsVideoPost_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchVideoPostRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsInterceptModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchInterceptModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMHeaderModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMHeaderModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMSnippets_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMSnippetsRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMHeroVideo_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMHeroVideoRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMPhotoModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMPhotoModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMPostsModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMPostsModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMSportsGameGrid_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMSportsGameGridRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMSportsEntityGroups_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMSportsEntityGroupsModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMPageDescription_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMPageDescriptionRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMMovieTrailer_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMMovieTrailerRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMMovieCTA_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMMovieCTARenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMVideoHScroll_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMVideoAttachmentHScrollRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMVideoPageModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMVideoPageRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMSearchBox_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMSearchBoxRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMButtonCTAs_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMButtonCTAsRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPMVTrackHCM_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPMVTrackHCMRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPMVArtistHCM_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPMVArtistHCMRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMGameHub_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMGameHubIndependentModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMGameCTA_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMGameCTARenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMGameSnippets_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMGameSnippetsRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsBTGEmptyResultsModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchBTGEmptyResultsModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsWorkTeam_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchWorkTeamRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchGeminiResultsStandaloneFile_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchFileRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchGeminiResultsKnowledgeArticle_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchWorkKnowledgeArticleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchGeminiResultsKnowledgeNote_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchKnowledgeNoteRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchGeminiResultsWorkChatThread_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchWorkChatThreadsRenderingStrategy",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "SearchDebugOverlayInfo",
                              kind: "LinkedField",
                              name: "debug_overlay_info",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "field",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "values",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "color",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            v,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "has_relay_child_rendering_strategy",
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
                      ],
                      useCustomizedBatch: null,
                    },
                    {
                      condition: "fetch_filters",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "GraphSearchQueryFilterTypeSet",
                          kind: "LinkedField",
                          name: "filters",
                          plural: !0,
                          selections: [
                            x,
                            {
                              alias: null,
                              args: null,
                              concreteType: "GraphSearchQueryFilterGroup",
                              kind: "LinkedField",
                              name: "filters",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "GraphSearchQueryFilter",
                                  kind: "LinkedField",
                                  name: "main_filter",
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
                                      kind: "ScalarField",
                                      name: "filter_set_key",
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
                                      name: "pill_button_type",
                                      storageKey: null,
                                    },
                                    x,
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "first",
                                          value: 50,
                                        },
                                      ],
                                      concreteType:
                                        "GraphSearchQueryFilterValuesConnection",
                                      kind: "LinkedField",
                                      name: "filter_values",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "GraphSearchQueryFilterValuesEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "GraphSearchQueryFilterValue",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [
                                                x,
                                                y,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "value_type",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: "filter_values(first:50)",
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "search_place_holder",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "custom_value_template",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "GraphSearchQueryFilterValue",
                                      kind: "LinkedField",
                                      name: "current_value",
                                      plural: !1,
                                      selections: [x, y],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "default_option_text",
                                      storageKey: null,
                                    },
                                    {
                                      alias: "filtersCount",
                                      args: null,
                                      concreteType:
                                        "GraphSearchQueryFilterValuesConnection",
                                      kind: "LinkedField",
                                      name: "filter_values",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "count",
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
                          storageKey: null,
                        },
                      ],
                    },
                    {
                      if: "allow_streaming",
                      kind: "Defer",
                      label:
                        "SearchCometResultsPaginatedResults_searchQuery$defer$SearchCometResults_combined_results$page_info",
                      selections: [
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
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: u,
                  filters: null,
                  handle: "connection",
                  key: "SearchCometResults_combined_results",
                  kind: "LinkedHandle",
                  name: "results",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4808606569154020",
          metadata: {},
          name: "SearchCometResultsInitialResultsQuery",
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
  "SearchCometResultsPaginatedResultsQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "UFI2CommentsProvider_commentsKey",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "allow_streaming",
          },
          { defaultValue: null, kind: "LocalArgument", name: "args" },
          { defaultValue: null, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsContextEnableComment",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsContextIsAdPreview",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsContextIsAggregatedShare",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsContextIsStorySet",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsFeedbackContext",
          },
          { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
          { defaultValue: null, kind: "LocalArgument", name: "feedbackSource" },
          { defaultValue: null, kind: "LocalArgument", name: "fetch_filters" },
          { defaultValue: null, kind: "LocalArgument", name: "focusCommentID" },
          { defaultValue: null, kind: "LocalArgument", name: "locale" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "privacySelectorRenderLocation",
          },
          { defaultValue: null, kind: "LocalArgument", name: "renderLocation" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "stream_initial_count",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "useDefaultActor",
          },
        ],
        b = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_unit_id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "SearchCometResultsPaginatedResultsQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "SearchCometResultsPaginatedResults_searchQuery",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "SearchCometResultsPaginatedResultsQuery",
          selections: [
            {
              alias: "serpResponse",
              args: [{ kind: "Variable", name: "args", variableName: "args" }],
              concreteType: "SearchSerpResponse",
              kind: "LinkedField",
              name: "search_serp_relay",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: b,
                  concreteType: "SearchSerpResponseResultsConnection",
                  kind: "LinkedField",
                  name: "results",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_iem_triggered",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_hcm",
                      storageKey: null,
                    },
                    c,
                    {
                      if: "allow_streaming",
                      kind: "Stream",
                      label:
                        "SearchCometResultsPaginatedResults_searchQuery$stream$SearchCometResults_combined_results",
                      metadata: null,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "SearchSerpResponseResultsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "SearchRenderable",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "role",
                                  storageKey: null,
                                },
                                d,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "relay_rendering_strategy",
                              plural: !1,
                              selections: [
                                d,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "view_model",
                                      plural: !1,
                                      selections: [
                                        d,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "PlaceViewModel",
                                              kind: "LinkedField",
                                              name: "place_view_model",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "rank_in_module",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "LocalSearchPlaceSnippetViewModel",
                                                  kind: "LinkedField",
                                                  name: "places_snippet_model",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "LocalSearchPlaceLocationViewModel",
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
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          type: "SearchPlaceViewModel",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsStandalonePlace_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPlaceRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPlaceMapModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPlaceMapModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsListModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchListModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHScrollListModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHScrollListModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsSupportModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchSupportModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsApolloGridModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchApolloGridModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsGridModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchGridModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPhotoEmptyModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPhotoEmptyModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHeroModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHeroModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsRelatedSearchesModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchRelatedSearchesModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsStandalonePost_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPostRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsStandalonePostAndComment_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPostAndCommentRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsRichPost_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchRichPostRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsProfile_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchProfileRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsVideo_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchVideoRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsStandalonePhoto_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPhotoRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsSpellerModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchSpellerModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsArticle_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchArticleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPrivacyAwarenessModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPrivacyAwarenessModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsUnimplementedResult_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchUnimplementedResultRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsFloatingSeeMoreModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchFloatingSeeMoreModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsEndOfResultsModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchEndOfResultsModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsMergeableListModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchMergeableListModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsBSGModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchBSGModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsSafetyCheckModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchSafetyCheckModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsCoronavirusSupportModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchCoronavirusSupportModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsEntityUserBootstrapSeeMoreModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchEntityUserBootstrapSeeMoreModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsAd_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchResultsAdRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsSkewerModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchSkewerModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsAssistantModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchAssistantQnAModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsReferenceArticle_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchReferenceArticleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsNewsArticle_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchNewsArticleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsEventsDashboardEvent_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchEventsDashboardEventRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMStreamerGamesPlayed_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMStreamerGamesPlayedRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsInfoHeaderModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchInfoHeaderModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsVideoPost_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchVideoPostRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsInterceptModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchInterceptModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMHeaderModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMHeaderModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMSnippets_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMSnippetsRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMHeroVideo_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMHeroVideoRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMPhotoModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMPhotoModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMPostsModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMPostsModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMSportsGameGrid_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMSportsGameGridRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMSportsEntityGroups_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMSportsEntityGroupsModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMPageDescription_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMPageDescriptionRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMMovieTrailer_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMMovieTrailerRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMMovieCTA_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMMovieCTARenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMVideoHScroll_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMVideoAttachmentHScrollRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMVideoPageModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMVideoPageRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMSearchBox_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMSearchBoxRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMButtonCTAs_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMButtonCTAsRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPMVTrackHCM_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPMVTrackHCMRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsPMVArtistHCM_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchPMVArtistHCMRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMGameHub_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMGameHubIndependentModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMGameCTA_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMGameCTARenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsHCMGameSnippets_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchHCMGameSnippetsRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsBTGEmptyResultsModule_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchBTGEmptyResultsModuleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchCometResultsWorkTeam_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchWorkTeamRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchGeminiResultsStandaloneFile_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchFileRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchGeminiResultsKnowledgeArticle_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchWorkKnowledgeArticleRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchGeminiResultsKnowledgeNote_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchKnowledgeNoteRenderingStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "SearchCometResultsPaginatedResults_searchQuery",
                                      fragmentName:
                                        "SearchGeminiResultsWorkChatThread_renderingStrategy",
                                      fragmentPropName: "renderingStrategy",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SearchWorkChatThreadsRenderingStrategy",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "SearchDebugOverlayInfo",
                              kind: "LinkedField",
                              name: "debug_overlay_info",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "field",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "values",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "color",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            c,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "has_relay_child_rendering_strategy",
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
                      ],
                      useCustomizedBatch: null,
                    },
                    {
                      condition: "fetch_filters",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "GraphSearchQueryFilterTypeSet",
                          kind: "LinkedField",
                          name: "filters",
                          plural: !0,
                          selections: [
                            e,
                            {
                              alias: null,
                              args: null,
                              concreteType: "GraphSearchQueryFilterGroup",
                              kind: "LinkedField",
                              name: "filters",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "GraphSearchQueryFilter",
                                  kind: "LinkedField",
                                  name: "main_filter",
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
                                      kind: "ScalarField",
                                      name: "filter_set_key",
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
                                      name: "pill_button_type",
                                      storageKey: null,
                                    },
                                    e,
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "first",
                                          value: 50,
                                        },
                                      ],
                                      concreteType:
                                        "GraphSearchQueryFilterValuesConnection",
                                      kind: "LinkedField",
                                      name: "filter_values",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "GraphSearchQueryFilterValuesEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "GraphSearchQueryFilterValue",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [
                                                e,
                                                f,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "value_type",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: "filter_values(first:50)",
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "search_place_holder",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "custom_value_template",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "GraphSearchQueryFilterValue",
                                      kind: "LinkedField",
                                      name: "current_value",
                                      plural: !1,
                                      selections: [e, f],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "default_option_text",
                                      storageKey: null,
                                    },
                                    {
                                      alias: "filtersCount",
                                      args: null,
                                      concreteType:
                                        "GraphSearchQueryFilterValuesConnection",
                                      kind: "LinkedField",
                                      name: "filter_values",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "count",
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
                          storageKey: null,
                        },
                      ],
                    },
                    {
                      if: "allow_streaming",
                      kind: "Defer",
                      label:
                        "SearchCometResultsPaginatedResults_searchQuery$defer$SearchCometResults_combined_results$page_info",
                      selections: [
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
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: b,
                  filters: null,
                  handle: "connection",
                  key: "SearchCometResults_combined_results",
                  kind: "LinkedHandle",
                  name: "results",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4166882146752284",
          metadata: {},
          name: "SearchCometResultsPaginatedResultsQuery",
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
  "SearchCometResultsPaginatedResults_searchQuery.graphql",
  ["SearchCometResultsPaginatedResultsQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["serpResponse", "results"],
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
          name: "logging_unit_id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "UFI2CommentsProvider_commentsKey" },
          { kind: "RootArgument", name: "allow_streaming" },
          { kind: "RootArgument", name: "args" },
          { kind: "RootArgument", name: "count" },
          { kind: "RootArgument", name: "cursor" },
          { kind: "RootArgument", name: "displayCommentsContextEnableComment" },
          { kind: "RootArgument", name: "displayCommentsContextIsAdPreview" },
          {
            kind: "RootArgument",
            name: "displayCommentsContextIsAggregatedShare",
          },
          { kind: "RootArgument", name: "displayCommentsContextIsStorySet" },
          { kind: "RootArgument", name: "displayCommentsFeedbackContext" },
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "feedbackSource" },
          { kind: "RootArgument", name: "fetch_filters" },
          { kind: "RootArgument", name: "focusCommentID" },
          { kind: "RootArgument", name: "locale" },
          { kind: "RootArgument", name: "privacySelectorRenderLocation" },
          { kind: "RootArgument", name: "renderLocation" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "stream_initial_count" },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            {
              count: "count",
              cursor: "cursor",
              direction: "forward",
              path: a,
              stream: !0,
            },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: [],
            operation: b("SearchCometResultsPaginatedResultsQuery.graphql"),
          },
        },
        name: "SearchCometResultsPaginatedResults_searchQuery",
        selections: [
          {
            alias: "serpResponse",
            args: [{ kind: "Variable", name: "args", variableName: "args" }],
            concreteType: "SearchSerpResponse",
            kind: "LinkedField",
            name: "search_serp_relay",
            plural: !1,
            selections: [
              {
                alias: "results",
                args: null,
                concreteType: "SearchSerpResponseResultsConnection",
                kind: "LinkedField",
                name: "__SearchCometResults_combined_results_connection",
                plural: !1,
                selections: [
                  {
                    kind: "Stream",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "SearchSerpResponseResultsEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "SearchRenderable",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "role",
                                storageKey: null,
                              },
                              c,
                            ],
                            storageKey: null,
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "SearchCometResultsPlaceMap_results",
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "SearchCometResultsDebugOverlay_result",
                          },
                          d,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "has_relay_child_rendering_strategy",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "relay_rendering_strategy",
                            plural: !1,
                            selections: [
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsPlaceMapModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPlaceMapModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsListModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchListModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHScrollListModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHScrollListModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsSupportModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchSupportModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsApolloGridModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchApolloGridModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsGridModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchGridModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsPhotoEmptyModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPhotoEmptyModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHeroModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHeroModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsRelatedSearchesModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchRelatedSearchesModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsStandalonePlace_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPlaceRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsStandalonePost_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPostRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsStandalonePostAndComment_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPostAndCommentRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsRichPost_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchRichPostRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsProfile_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchProfileRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsVideo_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchVideoRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsStandalonePhoto_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPhotoRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsSpellerModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchSpellerModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsArticle_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchArticleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsPrivacyAwarenessModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPrivacyAwarenessModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsUnimplementedResult_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchUnimplementedResultRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsFloatingSeeMoreModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchFloatingSeeMoreModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsEndOfResultsModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchEndOfResultsModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsMergeableListModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                  c,
                                ],
                                type: "SearchMergeableListModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsBSGModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchBSGModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsSafetyCheckModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchSafetyCheckModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsCoronavirusSupportModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchCoronavirusSupportModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsEntityUserBootstrapSeeMoreModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                  c,
                                ],
                                type: "SearchEntityUserBootstrapSeeMoreModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsAd_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchResultsAdRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsSkewerModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchSkewerModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsAssistantModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchAssistantQnAModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsReferenceArticle_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchReferenceArticleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsNewsArticle_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchNewsArticleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsEventsDashboardEvent_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchEventsDashboardEventRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMStreamerGamesPlayed_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMStreamerGamesPlayedRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsInfoHeaderModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchInfoHeaderModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsVideoPost_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchVideoPostRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsInterceptModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchInterceptModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMHeaderModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMHeaderModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMSnippets_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMSnippetsRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMHeroVideo_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMHeroVideoRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMPhotoModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMPhotoModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMPostsModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMPostsModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMSportsGameGrid_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMSportsGameGridRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMSportsEntityGroups_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMSportsEntityGroupsModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMPageDescription_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMPageDescriptionRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMMovieTrailer_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMMovieTrailerRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMMovieCTA_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMMovieCTARenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMVideoHScroll_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMVideoAttachmentHScrollRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMVideoPageModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMVideoPageRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMSearchBox_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMSearchBoxRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMButtonCTAs_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMButtonCTAsRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsPMVTrackHCM_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPMVTrackHCMRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsPMVArtistHCM_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchPMVArtistHCMRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMGameHub_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMGameHubIndependentModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMGameCTA_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMGameCTARenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsHCMGameSnippets_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchHCMGameSnippetsRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsBTGEmptyResultsModule_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchBTGEmptyResultsModuleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchCometResultsWorkTeam_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchWorkTeamRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchGeminiResultsStandaloneFile_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchFileRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchGeminiResultsKnowledgeArticle_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchWorkKnowledgeArticleRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchGeminiResultsKnowledgeNote_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchKnowledgeNoteRenderingStrategy",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "SearchCometResultsPaginatedResults_searchQuery",
                                    fragmentName:
                                      "SearchGeminiResultsWorkChatThread_renderingStrategy",
                                    fragmentPropName: "renderingStrategy",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "SearchWorkChatThreadsRenderingStrategy",
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
                    ],
                  },
                  {
                    condition: "fetch_filters",
                    kind: "Condition",
                    passingValue: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "GraphSearchQueryFilterTypeSet",
                        kind: "LinkedField",
                        name: "filters",
                        plural: !0,
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "SearchCometFilters_filterTypeSets",
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
                    name: "has_iem_triggered",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_hcm",
                    storageKey: null,
                  },
                  d,
                  {
                    kind: "Defer",
                    selections: [
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
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsMergeableBootstrapEntityModuleRenderingStrategies",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = new Set([
      "SearchMergeableListModuleRenderingStrategy",
      "SearchEntityUserBootstrapSeeMoreModuleRenderingStrategy",
    ]);
    f["default"] = a;
  },
  66
);
__d(
  "useSearchCometSerpResultsMetadata",
  ["SearchCometResultsResultContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useMemo;
    function a() {
      var a = d(
          "SearchCometResultsResultContext"
        ).useSearchResultsResultState(),
        b = h(function (a) {
          var b = null;
          if (a.ref != null && a.ref.current != null) {
            a = a.ref.current.getBoundingClientRect();
            var c = a.height,
              d = a.left,
              e = a.top;
            a = a.width;
            d = window.scrollX + d;
            e = window.scrollY + e;
            b = { height: c, left: d, top: e, width: a };
          }
          return b;
        }, []),
        c = h(
          function (c) {
            var d = b(c);
            return {
              display: d,
              isChildResult:
                a.childResults.indexOf(c == null ? void 0 : c.loggingUnitID) >
                -1,
              loggingUnitID: c == null ? void 0 : c.loggingUnitID,
              role: c == null ? void 0 : c.role,
            };
          },
          [b, a.childResults]
        ),
        e = i(
          function () {
            return a == null ? void 0 : a.hasIemTriggered;
          },
          [a == null ? void 0 : a.hasIemTriggered]
        );
      return i(
        function () {
          var b = a.results,
            d = a.resultRefsByIndex,
            f = [];
          b != null &&
            b.forEach(function (b, e) {
              var g, h;
              g =
                d == null
                  ? void 0
                  : (g = d.current) == null
                  ? void 0
                  : g.get(e);
              if (g != null) (e = g.ref), (h = g.loggingUnitID), (g = g.role);
              else {
                var i;
                e = (i = a.resultRefs) == null ? void 0 : i.current.get(b);
                h = b.logging_unit_id;
                g = (i = b.node) == null ? void 0 : i.role;
              }
              f.push(c({ loggingUnitID: h, ref: e, role: g }));
            });
          return { hasIemTriggered: e, results: f };
        },
        [c, e, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsPaginatedResultsItem.react",
  [
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "cr:1895690",
    "react",
    "useSearchCometSerpResultsMetadata",
    "useSearchCometSerpTtbrTracker",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, e) {
      var f = a.childResults,
        g = a.index,
        i = a.result;
      a = a.sessionID;
      var j = c("useSearchCometSerpTtbrTracker")("IEM", a),
        k = c("useSearchCometSerpResultsMetadata")();
      k = g === 0 && k.hasIemTriggered;
      e = h.jsx("div", {
        ref: e,
        children: h.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: h.jsxs(c("CometErrorBoundary.react"), {
            children: [
              b("cr:1895690") != null
                ? h.jsx(b("cr:1895690"), { result: i })
                : null,
              h.jsx(d("CometRelay").MatchContainer, {
                match: i.relay_rendering_strategy,
                props: {
                  childResults: f != null && f.length > 0 ? f : null,
                  index: g,
                  sessionID: a,
                },
              }),
            ],
          }),
        }),
      });
      return k ? h.jsx("div", { ref: j, children: e }) : e;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "ISearchCometSerpPerfTtbrStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
  },
  null
);
__d(
  "SearchCometSerpPerfTtbrBaseStrategy",
  [],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.isReadyToLogTTBR = function (a) {
        return !0;
      };
      b.prepareFinalDataForLogging = function (a, b) {
        b = b.results;
        b.forEach(function (b, c) {
          if (b.display != null) {
            var d = (b == null ? void 0 : b.role) || "UNKNOWN";
            c = c + " " + d;
            a[c] = b.display.height;
          }
        });
        var c;
        for (var d = b.length - 1; d >= 0; d--)
          if (b[d] != null && b[d].display != null) {
            c = b[d];
            break;
          }
        this.addTtbrViewportFilledData(c, a);
      };
      b.addTtbrViewportFilledData = function (a, b) {
        if (a != null && a.display != null) {
          a = a.display.height + a.display.top;
          a = Math.floor(Math.min(1, a / window.innerHeight) * 100);
          b.ttbr_viewport_filled = a;
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometSerpPerfTtbrEndOfResultsStrategy",
  ["SearchCometSerpPerfTtbrBaseStrategy"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.isReadyToLogTTBR = function (a) {
        a = a.results;
        for (var b = 0; b < a.length; b++)
          if (a[b] == null || a[b].display == null || a[b].display.height === 0)
            return !1;
        return !0;
      };
      c.prepareFinalDataForLogging = function (a, b) {
        b = b.results;
        for (var c = 0; c < b.length; c++) {
          var d,
            e = b[c].display;
          if (e == null) return;
          d = ((d = b[c]) == null ? void 0 : d.role) || "UNKNOWN";
          d = c + " " + d;
          a[d] = e.height;
        }
        d = b[b.length - 1];
        this.addTtbrViewportFilledData(d, a);
      };
      return b;
    })(c("SearchCometSerpPerfTtbrBaseStrategy"));
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometSerpPerfTtbrGe75Strategy",
  ["SearchCometSerpPerfTtbrBaseStrategy"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.isReadyToLogTTBR = function (a) {
        a = a.results;
        for (var b = 0; b < a.length; b++) {
          var c = a[b].display;
          if (c == null || c.height === 0) return !1;
          if (c.height + c.top > window.innerHeight * 0.75) return !0;
        }
        return !1;
      };
      c.prepareFinalDataForLogging = function (a, b) {
        b = b.results;
        var c;
        for (var d = 0; d < b.length; d++) {
          var e,
            f = b[d].display;
          if (f == null) return;
          e = ((e = b[d]) == null ? void 0 : e.role) || "UNKNOWN";
          e = d + " " + e;
          a[e] = f.height;
          if (f.height + f.top > window.innerHeight * 0.75) {
            c = b[d];
            break;
          }
        }
        this.addTtbrViewportFilledData(c, a);
      };
      return b;
    })(c("SearchCometSerpPerfTtbrBaseStrategy"));
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometSerpPerfTtbrHcmStrategy",
  ["SearchCometSerpPerfTtbrBaseStrategy"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.isReadyToLogTTBR = function (a) {
        a = a.results;
        if (a.length < 5) return !1;
        var b = !1;
        for (var c = 0; c < 5; c++) {
          if (a[c] == null || a[c].display == null || a[c].display.height === 0)
            return b;
          a[c].isChildResult && (b = !0);
          if (b && !a[c].isChildResult) return !0;
        }
        return !1;
      };
      c.prepareFinalDataForLogging = function (a, b) {
        b = b.results;
        var c = 0,
          d = !1;
        for (var e = 0; e < 5; e++) {
          if (b[e] == null || b[e].display == null || b[e].display.height === 0)
            break;
          b[e].isChildResult && (d = !0);
          if (d && !b[e].isChildResult) {
            c = e;
            break;
          }
        }
        d || (c = 1);
        for (var e = 0; e < c; e++) {
          var f;
          d = b[e].display;
          if (d == null) return;
          f = ((f = b[e]) == null ? void 0 : f.role) || "UNKNOWN";
          f = e + " " + f;
          a[f] = d.height;
        }
        f = b[c - 1];
        this.addTtbrViewportFilledData(f, a);
      };
      return b;
    })(c("SearchCometSerpPerfTtbrBaseStrategy"));
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometSerpPerfTtbrIemStrategy",
  ["SearchCometSerpPerfTtbrBaseStrategy"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.isReadyToLogTTBR = function (a) {
        a = a.results;
        if (a.length < 2) return !1;
        for (var b = 0; b < 2; b++)
          if (a[b] == null || a[b].display == null || a[b].display.height === 0)
            return !1;
        return !0;
      };
      c.prepareFinalDataForLogging = function (a, b) {
        b = b.results;
        var c = 0;
        for (var d = 0; d < b.length; d++) {
          if (b[d] == null || b[d].display == null || b[d].display.height === 0)
            break;
          c++;
        }
        for (var d = 0; d < c; d++) {
          var e,
            f = b[d].display;
          if (f == null) break;
          e = ((e = b[d]) == null ? void 0 : e.role) || "UNKNOWN";
          e = d + " " + e;
          a[e] = f.height;
        }
        e = b[c - 1];
        this.addTtbrViewportFilledData(e, a);
      };
      return b;
    })(c("SearchCometSerpPerfTtbrBaseStrategy"));
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "useSearchCometSerpPerfAPI",
  [
    "InteractionTracingMetrics",
    "SearchCometSerpPerfContext",
    "SearchCometSerpPerfTtbrBaseStrategy",
    "SearchCometSerpPerfTtbrEndOfResultsStrategy",
    "SearchCometSerpPerfTtbrGe75Strategy",
    "SearchCometSerpPerfTtbrHcmStrategy",
    "SearchCometSerpPerfTtbrIemStrategy",
    "SearchCometSerpSetPerfContext",
    "gkx",
    "react",
    "recoverableViolation",
    "useSearchCometSerpResultsMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = b.useMemo,
      l = c("gkx")("1658354"),
      m = new Set(),
      n = new Set();
    function a(a) {
      var b = i(c("SearchCometSerpSetPerfContext")),
        d = i(c("SearchCometSerpPerfContext")),
        e = h(function (a) {
          l;
          a = Object.entries(a);
          for (var b = 0; b < a.length; b++) {
            var d = a[b],
              e = d[0];
            d = d[1];
            (typeof d === "string" || typeof d === "number") &&
              c("InteractionTracingMetrics")
                .currentInteractionLogger()
                .addMetadata(e, d);
          }
        }, []),
        f = h(
          function (c) {
            if (a != null && (!d[a] || d[a].context == null)) {
              var e;
              b(
                ((e = {}),
                (e[a] = babelHelpers["extends"]({}, d[a], { context: c })),
                e)
              );
            }
          },
          [a, d, b]
        ),
        g = c("useSearchCometSerpResultsMetadata")(),
        o = function (a) {
          switch (a) {
            case "ge_75":
              return c("SearchCometSerpPerfTtbrGe75Strategy");
            case "HCM":
              return c("SearchCometSerpPerfTtbrHcmStrategy");
            case "IEM":
              return c("SearchCometSerpPerfTtbrIemStrategy");
            case "end_of_results":
              return c("SearchCometSerpPerfTtbrEndOfResultsStrategy");
          }
          return new (c("SearchCometSerpPerfTtbrBaseStrategy"))();
        },
        p = h(
          function (a) {
            if (a != null) {
              a = o(a);
              if (a != null) return a.isReadyToLogTTBR(g);
            }
            return !1;
          },
          [g]
        ),
        q = h(
          function (a, b) {
            var c = window.innerHeight;
            a.viewport_height = c;
            c = o(b);
            c != null && c.prepareFinalDataForLogging(a, g);
          },
          [g]
        ),
        r = h(
          function () {
            var b = d[a].ttbrEndReason;
            if (b == null) {
              c("recoverableViolation")(
                "Assumptions were wrong, did not have an end reason when logging TTBR",
                "search"
              );
              return;
            }
            var f = {};
            q(f, b);
            e(
              babelHelpers["extends"]({}, d[a].context, f, {
                ttbr_end_reason: d[a].ttbrEndReason,
              })
            );
          },
          [d, a, q, e]
        );
      j(
        function () {
          if (d[a] != null) {
            var b = n.has(a),
              c = d[a].ttbrEndReason != null,
              e = d[a].context != null;
            if (c && e && !b) {
              c = p(d[a].ttbrEndReason);
              c && (r(), n.add(a));
            }
          }
        },
        [d, p, a, r]
      );
      var s = h(
        function (c) {
          if (a != null && !m.has(a)) {
            var e;
            m.add(a);
            l;
            b(
              ((e = {}),
              (e[a] = babelHelpers["extends"]({}, d[a], { ttbrEndReason: c })),
              e)
            );
          }
        },
        [a, d, b]
      );
      return k(
        function () {
          return { endTtbr: s, setContext: f };
        },
        [s, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometResultsResultsLoadedPerfLogger",
  [
    "CometRouteParams",
    "extractEntrypointData",
    "react",
    "useSearchCometSerpPerfAPI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useMemo,
      j = new Set();
    function a(a) {
      var b = a.entryPointScope,
        e = a.filterType,
        f = a.loggingUnitID,
        g = a.query,
        k = a.sessionID,
        l = a.typeaheadSessionID;
      a = d("CometRouteParams").useRouteParams();
      a = c("extractEntrypointData")(g, a);
      var m = a.entryPointAction,
        n = a.entryPointSurface,
        o = c("useSearchCometSerpPerfAPI")(k),
        p = i(
          function () {
            return {
              entry_point_action: m,
              entry_point_scope: b,
              entry_point_surface: n,
              session_id: k,
              typeahead_sid: l,
            };
          },
          [m, b, n, k, l]
        );
      h(
        function () {
          o.setContext(p);
        },
        [o, p]
      );
      h(
        function () {
          if (f == null || j.has(k)) return;
          j.add(k);
        },
        [m, b, n, e, f, o, g, k, l]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsPaginatedResults.react",
  [
    "CometHeroHoldTrigger.react",
    "CometInfiniteScrollTrigger.react",
    "CometRelay",
    "InteractionTracingMetrics",
    "SearchCometFiltersContext",
    "SearchCometResultsDefaultQueryVariables",
    "SearchCometResultsMergeableBootstrapEntityModuleRenderingStrategies",
    "SearchCometResultsPaginatedResultsItem.react",
    "SearchCometResultsPaginatedResults_searchQuery.graphql",
    "SearchCometResultsQueryContext",
    "SearchCometResultsResultContext",
    "SearchCometSerpPerfContext",
    "VisualCompletionUtil",
    "cr:1919446",
    "filterNulls",
    "gkx",
    "orEmptyArray",
    "react",
    "useCometDisplayTimingTracker",
    "useSearchCometResultsResultsLoadedLogger",
    "useSearchCometResultsResultsLoadedPerfLogger",
    "useSearchCometSerpResultsMetadata",
    "useSearchCometSerpTtbrTracker",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useRef,
      o = e.useState,
      p = 750,
      q =
        h !== void 0
          ? h
          : (h = b("SearchCometResultsPaginatedResults_searchQuery.graphql"));
    function a(a) {
      var e = a.resultsLayoutStrategy,
        f = a.routeProps.logging_meta_data,
        g = a.searchQuery,
        h = a.sessionID,
        r = a.typeaheadSessionID;
      a = d("CometRelay").usePaginationFragment(q, g);
      var s = a.data,
        t = a.hasNext,
        u = a.isLoadingNext,
        v = a.loadNext,
        w = d("SearchCometFiltersContext").useSearchFiltersDispatcher();
      a = d("CometRelay").useIsParentQueryActive(q, g);
      var x = u || a;
      g = s || {};
      var y = g.serpResponse;
      a = d(
        "SearchCometResultsQueryContext"
      ).useSearchCometResultsQueryContext();
      var z = a.query;
      g = m(
        function () {
          var a;
          return {
            entryPointScope: f.entry_point_scope,
            filterType: f.filter_type,
            loggingUnitID:
              y == null
                ? void 0
                : (a = y.results) == null
                ? void 0
                : a.logging_unit_id,
            query: z,
            sessionID: h,
            typeaheadSessionID: r,
          };
        },
        [
          f.filter_type,
          f.entry_point_scope,
          z,
          y == null
            ? void 0
            : (s = y.results) == null
            ? void 0
            : s.logging_unit_id,
          h,
          r,
        ]
      );
      c("useSearchCometResultsResultsLoadedLogger")(g);
      c("useSearchCometResultsResultsLoadedPerfLogger")(g);
      var A = n(new Map()),
        B = m(
          function () {
            var a;
            a = c("filterNulls")(
              c("orEmptyArray")(
                y == null ? void 0 : (a = y.results) == null ? void 0 : a.edges
              )
            );
            return c("filterNulls")(
              a.map(function (a) {
                var b = a.logging_unit_id,
                  c = a.relay_rendering_strategy;
                if (b == null || c == null) return null;
                A.current.has(b) || A.current.set(b, a);
                return A.current.get(b);
              })
            );
          },
          [y == null ? void 0 : (a = y.results) == null ? void 0 : a.edges]
        );
      s = o(B.length > 0);
      var C = s[0],
        D = s[1],
        E = n(new Map()),
        F = d(
          "SearchCometResultsResultContext"
        ).useSearchResultsResultDispatcher(),
        G = n(null);
      g = c("useCometDisplayTimingTracker")("SearchBackendResults");
      a = (y == null ? void 0 : y.results) || {};
      var H = a.has_hcm,
        I = a.has_iem_triggered,
        J = n(new Map());
      l(
        function () {
          Boolean(I) &&
            c("InteractionTracingMetrics")
              .currentInteractionLogger()
              .addMetadata("comet_search_results_has_iem_triggered", 1);
        },
        [I]
      );
      l(
        function () {
          Boolean(H) &&
            c("InteractionTracingMetrics")
              .currentInteractionLogger()
              .addMetadata("comet_search_results_has_hcm", 1);
        },
        [H]
      );
      l(
        function () {
          var a;
          F({
            childResults: [],
            hasIemTriggered: Boolean(
              y == null
                ? void 0
                : (a = y.results) == null
                ? void 0
                : a.has_iem_triggered
            ),
            hasNoResults: !t && !C,
            isLoading: x,
            results: B,
            sessionID: h,
            type: "UPDATE_RESULT_STATE",
          });
          F({
            isChildResults: !1,
            resultRefs: J,
            sessionID: h,
            type: "UPDATE_RESULT_REFS",
          });
        },
        [
          C,
          t,
          x,
          F,
          B,
          y == null
            ? void 0
            : (s = y.results) == null
            ? void 0
            : s.has_iem_triggered,
          h,
        ]
      );
      l(
        function () {
          var a;
          a = y == null ? void 0 : (a = y.results) == null ? void 0 : a.filters;
          a != null && w({ filterTypeSets: a, type: "SEARCH_QUERY_LOADED" });
        },
        [w, y]
      );
      a =
        y == null
          ? void 0
          : (a = y.results) == null
          ? void 0
          : (s = a.page_info) == null
          ? void 0
          : s.end_cursor;
      s = j(
        function () {
          if (!t || u) return;
          if (
            G.current != null &&
            d("VisualCompletionUtil").isInAboveTheFold(G.current)
          ) {
            var a,
              b = E.current;
            a = (a = b.get(h)) != null ? a : 0;
            b.set(h, ++a);
            c("InteractionTracingMetrics")
              .currentInteractionLogger()
              .addMetadata("comet_search_results_tail_loads", a);
          }
          v(c("SearchCometResultsDefaultQueryVariables").count);
        },
        [t, u, v, h]
      );
      l(
        function () {
          D(B.length > 0);
        },
        [B.length]
      );
      var K = n([]),
        L = c("useSearchCometSerpResultsMetadata")(),
        M = c("useSearchCometSerpTtbrTracker")("end_of_results", h),
        N = b("cr:1919446") != null ? b("cr:1919446")(h) : null;
      l(
        function () {
          if (N != null && h != null && L.results.length > 0) {
            var a = L.results[L.results.length - 1].display;
            if (a != null) {
              a = a.top + a.height;
              a > window.innerHeight * 0.75 && N.endTtbr("ge_75");
            }
          }
        },
        [L.results, N, h]
      );
      var O = [];
      for (var P = B.length - 1; P >= 0 && K.current[P] == null; P--) {
        var Q = B[P],
          R = Q.has_relay_child_rendering_strategy,
          S = Q.logging_unit_id,
          T = Q.relay_rendering_strategy;
        T = (T = T) != null ? T : {};
        T = T.__typename;
        if (Boolean(R)) O.unshift(Q);
        else if (
          T == null ||
          !c(
            "SearchCometResultsMergeableBootstrapEntityModuleRenderingStrategies"
          ).has(T)
        ) {
          R = i.createRef();
          J.current.set(Q, R);
          K.current[P] = i.jsx(
            c("SearchCometResultsPaginatedResultsItem.react"),
            { childResults: O, index: P, ref: R, result: Q, sessionID: h },
            (T = S) != null ? T : P
          );
          O = [];
        }
      }
      R = k(c("SearchCometSerpPerfContext"));
      S = c("gkx")("1987520")
        ? R[h] == null ||
          R[h].ttbrEndReason == null ||
          Object.keys(((Q = R[h]) == null ? void 0 : Q.context) || {})
            .length === 0
        : null;
      return i.jsxs("div", {
        ref: g,
        children: [
          S != null
            ? i.jsx(c("CometHeroHoldTrigger.react"), { hold: S })
            : null,
          i.jsx(e, { children: K.current }),
          t && !u
            ? i.jsx(
                c("CometInfiniteScrollTrigger.react"),
                {
                  hasMore: t,
                  isLoading: x,
                  onLoadMore: s,
                  rootMargin: p,
                  children: i.jsx("div", {
                    className: "rfua0xdk ay7djpcl",
                    ref: G,
                  }),
                },
                "load-more-" + ((T = a) != null ? T : "")
              )
            : null,
          !x && !t && !u ? i.jsx("div", { ref: M }) : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsInitialResults.react",
  [
    "CometRelay",
    "SearchCometResultsInitialResultsQuery.graphql",
    "SearchCometResultsPaginatedResults.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.resultsLayoutStrategy,
        f = a.routeProps,
        g = a.searchQueryReference;
      a = a.sessionID;
      var j = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("SearchCometResultsInitialResultsQuery.graphql")),
        g
      );
      return i.jsx(c("SearchCometResultsPaginatedResults.react"), {
        resultsLayoutStrategy: e,
        routeProps: f,
        searchQuery: j,
        sessionID: a,
        typeaheadSessionID:
          (e = g.variables.args.context) == null ? void 0 : e.tsid,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
