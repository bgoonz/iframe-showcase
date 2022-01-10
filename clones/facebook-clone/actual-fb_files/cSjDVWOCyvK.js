if (self.CavalryLogger) {
  CavalryLogger.start_js(["6nju2OV"]);
}

__d(
  "groupsCometFetchStoryQuery.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql"],
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
        k = { defaultValue: null, kind: "LocalArgument", name: "id" },
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
        p = [{ kind: "Variable", name: "id", variableName: "id" }],
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cache_id",
              storageKey: null,
            },
          ],
          type: "Cacheable",
          abstractKey: "__isCacheable",
        },
        s = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        t = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title",
          plural: !1,
          selections: s,
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        v = [u],
        w = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ],
        x = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometFeedStoryGroupConflictAlertContextLayoutStrategy",
                "CometFeedStoryGroupAdminAutonomyContextLayoutStrategy",
                "CometFeedStoryServicesLocalBusinessUpdatesContextLayoutStrategy",
                "CometFeedStoryCoronavirusHubHelpContextLayoutStrategy",
                "CometFeedStoryGroupPendingPostContextLayoutStrategy",
                "CometFeedStoryAggregatedContextLayoutStrategy",
                "GeminiFeedStoryDefaultContextLayoutStrategy",
                "GeminiFeedStoryPluginContextLayoutStrategy",
                "CometFeedStoryDefaultContextLayoutStrategy",
                "CometFeedStorySocialLearningModuleContextLayoutStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "context_layout",
          plural: !1,
          selections: [
            q,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "CometFeedStoryGroupConflictAlertContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryGroupConflictAlertContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "CometFeedStoryGroupAdminAutonomyContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryGroupAdminAutonomyContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "CometFeedStoryServicesLocalBusinessUpdatesContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryServicesLocalBusinessUpdatesContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "CometFeedStoryCoronavirusHubHelpContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryCoronavirusHubHelpContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "CometFeedStoryGroupPendingPostContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryGroupPendingPostContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "CometFeedStoryAggregatedContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAggregatedContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "GeminiFeedStoryDefaultContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryDefaultContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "GeminiFeedStoryPluginContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryPluginContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "CometFeedStoryDefaultContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryDefaultContextLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContextSection_story",
                  fragmentName:
                    "CometFeedStorySocialLearningModuleContextLayoutStrategy_contextLayout",
                  fragmentPropName: "contextLayout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStorySocialLearningModuleContextLayoutStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'context_layout(supported:["CometFeedStoryGroupConflictAlertContextLayoutStrategy","CometFeedStoryGroupAdminAutonomyContextLayoutStrategy","CometFeedStoryServicesLocalBusinessUpdatesContextLayoutStrategy","CometFeedStoryCoronavirusHubHelpContextLayoutStrategy","CometFeedStoryGroupPendingPostContextLayoutStrategy","CometFeedStoryAggregatedContextLayoutStrategy","GeminiFeedStoryDefaultContextLayoutStrategy","GeminiFeedStoryPluginContextLayoutStrategy","CometFeedStoryDefaultContextLayoutStrategy","CometFeedStorySocialLearningModuleContextLayoutStrategy"])',
        },
        y = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometFeedStoryInformTreatmentFooterStrategy",
                "CometStoryInsightsFooterStrategy",
                "CometStoryInsightsWithDistributionScoreFooterStrategy",
                "CometStoryInsightsWithRetentionCurveFooterStrategy",
                "CometFeedStoryJobsFooterStrategy",
                "CometFeedStoryGroupAdminHashtagsFooterStrategy",
                "CometFeedStoryTopicsFooterStrategy",
                "CometFeedStoryGroupTopicsFooterStrategy",
                "CometProfilePlusStoryFooterStrategy",
                "CometFeedStoryAutoAttachedUserFundingCTAFooterStrategy",
                "CometFeedStoryStonehengeFooterStrategy",
                "CometFeedStoryWoodhengeFooterStrategy",
                "CometFeedStorySocialLearningModuleFooterStrategy",
                "CometFeedStorySocialLearningMallCTAFooterStrategy",
                "CometFeedStoryGroupInsightsFooterStrategy",
                "CometFeedStoryCoronavirusCrisisMessageFooterStrategy",
                "CometFeedStoryProfileCommercePostFooterStrategy",
                "CometFeedStoryGroupSimilarAnsweredQuestionsCTAFooterStrategy",
                "GeminiFeedStoryVideoChaptersFooterStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "footer",
          plural: !1,
          selections: [
            q,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryInformTreatmentFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryInformTreatmentFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName: "CometFeedStoryInsightsFooterStrategy_insights",
                  fragmentPropName: "insights",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryInsightsFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryInsightsDistributionScoreFooterStrategy_insights",
                  fragmentPropName: "insights",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryInsightsWithDistributionScoreFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryInsightsRetentionCurveFooterStrategy_insights",
                  fragmentPropName: "insights",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryInsightsWithRetentionCurveFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName: "CometFeedStoryJobsFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryJobsFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryGroupAdminHashtagsFooterStrategy_storySection",
                  fragmentPropName: "storySection",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryGroupAdminHashtagsFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryTopicsFooterStrategy_storySection",
                  fragmentPropName: "storySection",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryTopicsFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryGroupTopicsFooterStrategy_topics",
                  fragmentPropName: "topics",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryGroupTopicsFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryProfilePlusPostFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometProfilePlusStoryFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryAutoAttachedUserFundingCTAFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAutoAttachedUserFundingCTAFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName: "CometFeedStoryStonehengeFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryStonehengeFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName: "CometFeedStoryWoodhengeFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryWoodhengeFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStorySocialLearningModuleFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStorySocialLearningModuleFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStorySocialLearningMallCTAFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStorySocialLearningMallCTAFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryGroupInsightsFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryGroupInsightsFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryCoronavirusCrisisMessageFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryCoronavirusCrisisMessageFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryProfileCommercePostFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryProfileCommercePostFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "CometFeedStoryGroupSimilarAnsweredQuestionsCTAFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryGroupSimilarAnsweredQuestionsCTAFooterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryFooterSection_story",
                  fragmentName:
                    "GeminiFeedStoryVideoChaptersFooterStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryVideoChaptersFooterStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'footer(supported:["CometFeedStoryInformTreatmentFooterStrategy","CometStoryInsightsFooterStrategy","CometStoryInsightsWithDistributionScoreFooterStrategy","CometStoryInsightsWithRetentionCurveFooterStrategy","CometFeedStoryJobsFooterStrategy","CometFeedStoryGroupAdminHashtagsFooterStrategy","CometFeedStoryTopicsFooterStrategy","CometFeedStoryGroupTopicsFooterStrategy","CometProfilePlusStoryFooterStrategy","CometFeedStoryAutoAttachedUserFundingCTAFooterStrategy","CometFeedStoryStonehengeFooterStrategy","CometFeedStoryWoodhengeFooterStrategy","CometFeedStorySocialLearningModuleFooterStrategy","CometFeedStorySocialLearningMallCTAFooterStrategy","CometFeedStoryGroupInsightsFooterStrategy","CometFeedStoryCoronavirusCrisisMessageFooterStrategy","CometFeedStoryProfileCommercePostFooterStrategy","CometFeedStoryGroupSimilarAnsweredQuestionsCTAFooterStrategy","GeminiFeedStoryVideoChaptersFooterStrategy"])',
        },
        z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
        A = {
          alias: null,
          args: w,
          kind: "ScalarField",
          name: "should_host_actor_link_in_watch",
          storageKey: null,
        },
        B = { kind: "TypeDiscriminator", abstractKey: "__isNFXAction" },
        C = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon",
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
              name: "scale",
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
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "context",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        };
      B = {
        alias: null,
        args: null,
        concreteType: "TombstoneFeedUnit",
        kind: "LinkedField",
        name: "tombstone_feedunit",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_hidden_from_client",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Tombstone",
            kind: "LinkedField",
            name: "tombstone",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "action",
                storageKey: null,
              },
              u,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "group_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "author_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "feedback_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "executed_action",
                plural: !1,
                selections: [q, B, C, D, E, u],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "canUndo",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_loading",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "negativeFeedbackActionID",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subTitle",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "DeletedPostTombstoneContent",
                kind: "LinkedField",
                name: "deleted_post_tombstone",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "member_stats_text",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "tombstone_actions",
                    plural: !0,
                    selections: [
                      q,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "action_type",
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
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "support_action",
                plural: !1,
                selections: [
                  q,
                  B,
                  t,
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "subtitle",
                    plural: !1,
                    selections: s,
                    storageKey: null,
                  },
                  D,
                  E,
                  C,
                  u,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i, j, k, l, m, n, o],
          kind: "Fragment",
          metadata: null,
          name: "groupsCometFetchStoryQuery",
          selections: [
            {
              alias: null,
              args: p,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                q,
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedUnitStoryStrategy_feedUnit",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedUnitContainerSection_feedUnit",
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    r,
                    {
                      kind: "InlineFragment",
                      selections: [
                        t,
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "GroupsCometSectionHeader_groupsSectionHeaderUnit",
                        },
                      ],
                      type: "GroupsSectionHeaderUnit",
                      abstractKey: null,
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometFeedUnit_feedUnit",
                    },
                    {
                      kind: "InlineFragment",
                      selections: v,
                      type: "Story",
                      abstractKey: null,
                    },
                  ],
                  type: "FeedUnit",
                  abstractKey: "__isFeedUnit",
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
          argumentDefinitions: [k, g, c, d, e, f, h, i, j, n, l, m, o, a],
          kind: "Operation",
          name: "groupsCometFetchStoryQuery",
          selections: [
            {
              alias: null,
              args: p,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                q,
                u,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "matched_terms",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "attached_story",
                      plural: !1,
                      selections: [
                        u,
                        {
                          alias: null,
                          args: w,
                          concreteType: "CometStorySections",
                          kind: "LinkedField",
                          name: "comet_sections",
                          plural: !1,
                          selections: [x, y],
                          storageKey: null,
                        },
                        z,
                        A,
                        { kind: "ClientExtension", selections: [B] },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "StoryBumperData",
                      kind: "LinkedField",
                      name: "bumpers",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "triggered_bumpers",
                          plural: !0,
                          selections: [
                            q,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "triggers",
                              plural: !0,
                              selections: [
                                q,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "trigger_event",
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
                    {
                      alias: null,
                      args: w,
                      concreteType: "CometStorySections",
                      kind: "LinkedField",
                      name: "comet_sections",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometFeedStoryInitiallyCollapsedContentStrategy",
                                "CometFeedStoryDefaultContentStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "content",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName: "CometFeedStory_story",
                                  fragmentName:
                                    "CometFeedStoryInitiallyCollapsedContentStrategy_content",
                                  fragmentPropName: "content",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryInitiallyCollapsedContentStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName: "CometFeedStory_story",
                                  fragmentName:
                                    "CometFeedStoryDefaultContentStrategy_content",
                                  fragmentPropName: "content",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryDefaultContentStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'content(supported:["CometFeedStoryInitiallyCollapsedContentStrategy","CometFeedStoryDefaultContentStrategy"])',
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometStorySideUFILayoutStrategy",
                                "CometStoryDefaultLayoutStrategy",
                                "CometStoryPendingParticipationPostLayoutStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "layout",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName: "CometFeedStory_story__layout",
                                  fragmentName:
                                    "CometFeedStorySideUFILayoutStrategy_layout",
                                  fragmentPropName: "layout",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStorySideUFILayoutStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName: "CometFeedStory_story__layout",
                                  fragmentName:
                                    "CometFeedStoryDefaultLayoutStrategy_layout",
                                  fragmentPropName: "layout",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryDefaultLayoutStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName: "CometFeedStory_story__layout",
                                  fragmentName:
                                    "CometFeedStoryPendingParticipationPostLayoutStrategy_layout",
                                  fragmentPropName: "layout",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryPendingParticipationPostLayoutStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'layout(supported:["CometStorySideUFILayoutStrategy","CometStoryDefaultLayoutStrategy","CometStoryPendingParticipationPostLayoutStrategy"])',
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometFeedStoryCopyrightViolationHeaderStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "copyright_violation_header",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryCopyrightViolationHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryCopyrightViolationHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryCopyrightViolationHeaderStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'copyright_violation_header(supported:["CometFeedStoryCopyrightViolationHeaderStrategy"])',
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometFeedStoryGroupAdminAutonomyHeaderStrategy",
                                "CometStoryViewerContentFlaggedHeaderStrategy",
                                "CometFeedStoryGroupConflictAlertHeaderStrategy",
                                "CometFeedStoryGroupsUnconnectedContentHeaderStrategy",
                                "CometGroupsAlertedContentHeaderStrategy",
                                "CometStoryGroupPendingQueueMemberPostApprovalHeaderStrategy",
                                "CometStoryCrisisCloseListingHeaderStrategy",
                                "CometFeedStoryAlbumHeaderStrategy",
                                "CometStoryPostUpsellHeaderStrategy",
                                "CometFeedStoryStoryHeaderStrategy",
                                "CometFeedStoryFallbackHeaderStrategy",
                                "CometFeedStoryCommerceHeaderStrategy",
                                "CometStorySocialLearningModuleHeaderStrategy",
                                "GeminiFeedEmailLandingStoryStrategy",
                                "GeminiFeedStoryImportantHeaderStrategy",
                                "CometStoryPhotoReviewCTAHeaderStrategy",
                                "CometFeedStoryQuiltsUpgradePromptHeaderStrategy",
                                "CometProfileStoryQuiltsUpgradePromptHeaderStrategy",
                                "CometFeedStoryQuiltsDowngradePromptHeaderStrategy",
                                "CometFeedStoryLookingForPlayersUpgradePromptHeaderStrategy",
                                "CometFeedStoryCommunityQADowngradePromptHeaderStrategy",
                                "CometFeedStoryCommunityQAUpgradePromptHeaderStrategy",
                                "CometFeedStoryPrayerPostGroupConversionHeaderStrategy",
                                "CometFeedStoryBusinessMemoriesHeaderStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "header",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryGroupAdminAutonomyHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryGroupAdminAutonomyHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "GroupsCometViewerContentFlaggedHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryViewerContentFlaggedHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryGroupConflictAlertHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryGroupConflictAlertHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryGroupsUnconnectedContentHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryGroupsUnconnectedContentHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometGroupsAlertedContentHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupsAlertedContentHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometStoryGroupPendingQueueMemberPostApprovalHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryGroupPendingQueueMemberPostApprovalHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometStoryCrisisCloseListingHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryCrisisCloseListingHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryAlbumHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryAlbumHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometStoryPostUpsellHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryPostUpsellHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryStoryHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryStoryHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryFallbackHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryFallbackHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryCommerceHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryCommerceHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometStorySocialLearningModuleHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStorySocialLearningModuleHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "GeminiFeedEmailLandingStoryStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GeminiFeedEmailLandingStoryStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "GeminiFeedStoryImportantHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GeminiFeedStoryImportantHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometStoryPhotoReviewCTAHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryPhotoReviewCTAHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryQuiltsUpgradePromptHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryQuiltsUpgradePromptHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometProfileStoryQuiltsUpgradePromptHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometProfileStoryQuiltsUpgradePromptHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryQuiltsDowngradePromptHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryQuiltsDowngradePromptHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryLookingForPlayersUpgradePromptHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryLookingForPlayersUpgradePromptHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryCommunityQADowngradePromptHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryCommunityQADowngradePromptHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryCommunityQAUpgradePromptHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryCommunityQAUpgradePromptHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryPrayerPostGroupConversionHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryPrayerPostGroupConversionHeaderStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
                                  fragmentName:
                                    "CometFeedStoryBusinessMemoriesHeaderStrategy_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryBusinessMemoriesHeaderStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'header(supported:["CometFeedStoryGroupAdminAutonomyHeaderStrategy","CometStoryViewerContentFlaggedHeaderStrategy","CometFeedStoryGroupConflictAlertHeaderStrategy","CometFeedStoryGroupsUnconnectedContentHeaderStrategy","CometGroupsAlertedContentHeaderStrategy","CometStoryGroupPendingQueueMemberPostApprovalHeaderStrategy","CometStoryCrisisCloseListingHeaderStrategy","CometFeedStoryAlbumHeaderStrategy","CometStoryPostUpsellHeaderStrategy","CometFeedStoryStoryHeaderStrategy","CometFeedStoryFallbackHeaderStrategy","CometFeedStoryCommerceHeaderStrategy","CometStorySocialLearningModuleHeaderStrategy","GeminiFeedEmailLandingStoryStrategy","GeminiFeedStoryImportantHeaderStrategy","CometStoryPhotoReviewCTAHeaderStrategy","CometFeedStoryQuiltsUpgradePromptHeaderStrategy","CometProfileStoryQuiltsUpgradePromptHeaderStrategy","CometFeedStoryQuiltsDowngradePromptHeaderStrategy","CometFeedStoryLookingForPlayersUpgradePromptHeaderStrategy","CometFeedStoryCommunityQADowngradePromptHeaderStrategy","CometFeedStoryCommunityQAUpgradePromptHeaderStrategy","CometFeedStoryPrayerPostGroupConversionHeaderStrategy","CometFeedStoryBusinessMemoriesHeaderStrategy"])',
                        },
                        x,
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometFeedStoryAYMTBizWebPostFooterStrategy",
                                "CometFeedStoryAYMTPagePostFooterChannelStrategy",
                                "CometFeedStoryAYMTNewsFeedPostFooterChannelStrategy",
                                "CometFeedStoryAYMTProfessionalProfilePostFooterChannelStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "aymt_footer",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryAYMTFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryAYMTBizWebPostFooterStrategy_strategy",
                                  fragmentPropName: "strategy",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryAYMTBizWebPostFooterStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryAYMTFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryAYMTPagePostFooterChannelStrategy_strategy",
                                  fragmentPropName: "strategy",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryAYMTPagePostFooterChannelStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryAYMTFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryAYMTNewsFeedPostFooterChannelStrategy_strategy",
                                  fragmentPropName: "strategy",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryAYMTNewsFeedPostFooterChannelStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryAYMTFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryAYMTProfessionalProfilePostFooterChannelStrategy_strategy",
                                  fragmentPropName: "strategy",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryAYMTProfessionalProfilePostFooterChannelStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'aymt_footer(supported:["CometFeedStoryAYMTBizWebPostFooterStrategy","CometFeedStoryAYMTPagePostFooterChannelStrategy","CometFeedStoryAYMTNewsFeedPostFooterChannelStrategy","CometFeedStoryAYMTProfessionalProfilePostFooterChannelStrategy"])',
                        },
                        y,
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometStoryFeedbackGroupViewerContentFlaggedStrategy",
                                "CometStoryFeedbackGroupConflictAlertUFIStrategy",
                                "CometStoryFeedbackMemoriesStrategy",
                                "CometStoryFeedbackGroupContentModerationQueueStrategy",
                                "CometStoryFeedbackGroupViewerContentDeletedPostStrategy",
                                "CometStoryFeedbackGroupDraftPostStrategy",
                                "GeminiStoryFeedbackPluginStrategy",
                                "GeminiStoryFeedbackGroupDraftedForOthersStrategy",
                                "CometStoryFeedbackGroupViewerContentPublishedPostStrategy",
                                "CometStoryFeedbackGroupScheduledPostStrategy",
                                "CometStoryFeedbackGroupScheduledPendingPostStrategy",
                                "CometStoryFeedbackGroupViewerContentScheduledPostStrategy",
                                "CometStoryFeedbackPendingPostStrategy",
                                "CometStoryFeedbackScheduledPostStrategy",
                                "CometStoryFeedbackGroupPendingPostStrategy",
                                "CometStoryFeedbackGroupViewerContentPendingPostStrategy",
                                "CometStoryFeedbackGroupContextualProfileUFIStrategy",
                                "CometStoryFeedbackUFIStrategy",
                                "CometStoryFeedbackPersonDrivenAdsStrategy",
                                "CometStoryFeedbackGroupAdminAutonomyQueueStrategy",
                                "CometStoryWorkLiveAMAStrategy",
                                "CometStoryFeedbackGroupModminReviewFolderPostStrategy",
                                "CometStoryFeedbackBusinessMemoriesStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "feedback",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupViewerContentFlaggedStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupViewerContentFlaggedStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupConflictAlertUFIStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupConflictAlertUFIStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackMemoriesStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackMemoriesStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupContentModerationQueueStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupContentModerationQueueStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupViewerContentDeletedPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupViewerContentDeletedPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupDraftPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupDraftPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "GeminiStoryFeedbackPluginStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GeminiStoryFeedbackPluginStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "GeminiFeedStoryFeedbackGroupDraftedForOthersStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GeminiStoryFeedbackGroupDraftedForOthersStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupViewerContentPublishedPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupViewerContentPublishedPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupScheduledPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupScheduledPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupScheduledPendingPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupScheduledPendingPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupViewerContentScheduledPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupViewerContentScheduledPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackPendingPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackPendingPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackEventScheduledPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackScheduledPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupPendingPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupPendingPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupViewerContentPendingPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupViewerContentPendingPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupContextualProfileUFIStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupContextualProfileUFIStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackUFIStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackUFIStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometStoryFeedbackPersonDrivenAdsStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackPersonDrivenAdsStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupAdminAutonomyQueueStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupAdminAutonomyQueueStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackWorkLiveAMAStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryWorkLiveAMAStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometFeedStoryFeedbackGroupModminReviewFolderPostStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackGroupModminReviewFolderPostStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
                                  fragmentName:
                                    "CometStoryFeedbackBusinessMemoriesStrategy_feedback",
                                  fragmentPropName: "feedback",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryFeedbackBusinessMemoriesStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'feedback(supported:["CometStoryFeedbackGroupViewerContentFlaggedStrategy","CometStoryFeedbackGroupConflictAlertUFIStrategy","CometStoryFeedbackMemoriesStrategy","CometStoryFeedbackGroupContentModerationQueueStrategy","CometStoryFeedbackGroupViewerContentDeletedPostStrategy","CometStoryFeedbackGroupDraftPostStrategy","GeminiStoryFeedbackPluginStrategy","GeminiStoryFeedbackGroupDraftedForOthersStrategy","CometStoryFeedbackGroupViewerContentPublishedPostStrategy","CometStoryFeedbackGroupScheduledPostStrategy","CometStoryFeedbackGroupScheduledPendingPostStrategy","CometStoryFeedbackGroupViewerContentScheduledPostStrategy","CometStoryFeedbackPendingPostStrategy","CometStoryFeedbackScheduledPostStrategy","CometStoryFeedbackGroupPendingPostStrategy","CometStoryFeedbackGroupViewerContentPendingPostStrategy","CometStoryFeedbackGroupContextualProfileUFIStrategy","CometStoryFeedbackUFIStrategy","CometStoryFeedbackPersonDrivenAdsStrategy","CometStoryFeedbackGroupAdminAutonomyQueueStrategy","CometStoryWorkLiveAMAStrategy","CometStoryFeedbackGroupModminReviewFolderPostStrategy","CometStoryFeedbackBusinessMemoriesStrategy"])',
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometStoryMisinformationRelatedArticleStrategy",
                                "GeminiStoryPromotedPostMarkAsReadOuterFooterStrategy",
                                "CometFeedStoryPendingPostOuterFooterStrategy",
                                "GeminiFeedStoryPendingPostOuterFooterStrategy",
                                "CometCommunityViewFeedStoryOuterFooterStrategy",
                                "CometFeedStoryGroupConflictAlertOuterFooterStrategy",
                                "CometFeedStoryGroupCommentRateLimitedOuterFooterStrategy",
                                "CometFeedStoryPendingParticipationPostOuterFooterStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "outer_footer",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryMisinformationRelatedArticleStrategy_misinfoRelatedArticles",
                                  fragmentPropName: "misinfoRelatedArticles",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryMisinformationRelatedArticleStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
                                  fragmentName:
                                    "GeminiStoryPromotedPostMarkAsReadOuterFooterStrategy_markAsRead",
                                  fragmentPropName: "markAsRead",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GeminiStoryPromotedPostMarkAsReadOuterFooterStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryPendingPostOuterFooterStrategy_story",
                                  fragmentPropName: "story",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryPendingPostOuterFooterStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
                                  fragmentName:
                                    "GeminiFeedStoryPendingPostOuterFooterStrategy_story",
                                  fragmentPropName: "story",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GeminiFeedStoryPendingPostOuterFooterStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
                                  fragmentName:
                                    "CometCommunityViewFeedStoryOuterFooterStrategy_story",
                                  fragmentPropName: "story",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometCommunityViewFeedStoryOuterFooterStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryGroupConflictAlertOuterFooterStrategy_story",
                                  fragmentPropName: "story",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryGroupConflictAlertOuterFooterStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryGroupCommentRateLimitedOuterFooterStrategy_story",
                                  fragmentPropName: "story",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryGroupCommentRateLimitedOuterFooterStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
                                  fragmentName:
                                    "CometFeedStoryPendingParticipationPostOuterFooterStrategy_story",
                                  fragmentPropName: "story",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometFeedStoryPendingParticipationPostOuterFooterStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'outer_footer(supported:["CometStoryMisinformationRelatedArticleStrategy","GeminiStoryPromotedPostMarkAsReadOuterFooterStrategy","CometFeedStoryPendingPostOuterFooterStrategy","GeminiFeedStoryPendingPostOuterFooterStrategy","CometCommunityViewFeedStoryOuterFooterStrategy","CometFeedStoryGroupConflictAlertOuterFooterStrategy","CometFeedStoryGroupCommentRateLimitedOuterFooterStrategy","CometFeedStoryPendingParticipationPostOuterFooterStrategy"])',
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: ["CometStoryDefaultCallToActionStrategy"],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "call_to_action",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryCallToActionSection_story",
                                  fragmentName:
                                    "CometFeedStoryDefaultCallToActionStrategy_cta",
                                  fragmentPropName: "cta",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryDefaultCallToActionStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'call_to_action(supported:["CometStoryDefaultCallToActionStrategy"])',
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometStoryInformTreatmentPostCoverStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "post_inform_treatment",
                          plural: !1,
                          selections: [
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryPostInformTreatmentSection_story",
                                  fragmentName:
                                    "CometFeedStoryPostCoverInformTreatmentStrategy_story",
                                  fragmentPropName: "story",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometStoryInformTreatmentPostCoverStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'post_inform_treatment(supported:["CometStoryInformTreatmentPostCoverStrategy"])',
                        },
                      ],
                      storageKey: null,
                    },
                    z,
                    A,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "debug_info",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Feedback",
                      kind: "LinkedField",
                      name: "feedback",
                      plural: !1,
                      selections: [
                        u,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Group",
                          kind: "LinkedField",
                          name: "associated_group",
                          plural: !1,
                          selections: v,
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "WhatsAppStoryAdContext",
                      kind: "LinkedField",
                      name: "whatsapp_ad_context",
                      plural: !1,
                      selections: [
                        D,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "source_url",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "schema_context",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "click_tracking_linkshim_cb",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "encrypted_click_tracking",
                      storageKey: null,
                    },
                    {
                      kind: "ClientExtension",
                      selections: [
                        B,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "optimistic_loading_type",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "OptimisticMediaAttachmentData",
                          kind: "LinkedField",
                          name: "optimistic_media_attachments",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "entID",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "objectURL",
                              storageKey: null,
                            },
                            E,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "useCDNPreview",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "creation_session_id",
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  type: "Story",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName: "CometFeedUnitStoryStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "Story",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "CometFeedUnitGoodwillMemoryStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "GoodwillCometStory",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName: "CometPYMKQPFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "PaginatedPeopleYouMayKnowFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "CometFriendRequestsFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "FriendRequestsFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "CometFeedUnitQuickPromotionStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "QuickPromotionNativeTemplateFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "GroupsCometGYSJFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "GroupsYouShouldJoinFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "CometGroupsSuggestionFeedUnitStrategy_unit",
                          fragmentPropName: "unit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "GroupsSuggestionUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName: "CometPYMIQPFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "PaginatedGroupsPeopleYouMayInviteFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName: "CometPYMAQPFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "PagesYouMayAdvertiseFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName: "GeminiPYSFQPFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "PeopleYouShouldFollowAtWorkFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName: "CometSPFFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "SuggestedPublicEntitiesToFollowFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "CoronavirusCommunityHelpFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CoronavirusCommunityHelpFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "CometMarketplaceShowcaseFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "ShowcaseMarketplaceFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName: "CometEndOfFeedUpsellStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "EndOfFeedUpsellFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "CometInterestBasedGYSJFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "InterestBasedGYSJFeedUnit",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometFeedUnitContainerSection_feedUnit",
                          fragmentName:
                            "CometInterestBasedIFRFeedUnitStrategy_feedUnit",
                          fragmentPropName: "feedUnit",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "InterestBasedIFRFeedUnit",
                      abstractKey: null,
                    },
                    r,
                    {
                      kind: "InlineFragment",
                      selections: [
                        t,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Group",
                          kind: "LinkedField",
                          name: "target_group",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "can_viewer_see_sorting_switcher",
                              storageKey: null,
                            },
                            u,
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "StoryHeader",
                          kind: "LinkedField",
                          name: "story_header",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "style_infos",
                              plural: !0,
                              selections: [
                                q,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "GroupFeedSortingSwitcher",
                                      kind: "LinkedField",
                                      name: "viewer_available_sorting_switchers",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "option_description",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "option_name",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "sorting_setting",
                                          storageKey: null,
                                        },
                                        q,
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "GroupsSectionHeaderStyleInfo",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: "GroupsSectionHeaderUnit",
                      abstractKey: null,
                    },
                    {
                      args: null,
                      fragment: b(
                        "CometFeedUnit_feedUnit$normalization.graphql"
                      ),
                      kind: "FragmentSpread",
                    },
                  ],
                  type: "FeedUnit",
                  abstractKey: "__isFeedUnit",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "6626663204026015",
          metadata: {},
          name: "groupsCometFetchStoryQuery",
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
  "CometUFIFeedbackCommentReactSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "useDefaultActor",
          },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = [
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIFeedbackCommentReactSubscription_feedback",
              },
            ],
            storageKey: null,
          },
        ],
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
          name: "id",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        g = [
          {
            kind: "Variable",
            name: "use_default_actor",
            variableName: "useDefaultActor",
          },
        ];
      f = [
        {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "feedback",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Video",
              kind: "LinkedField",
              name: "associated_video",
              plural: !1,
              selections: [e],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "orderby",
                  value: ["COUNT_DESC", "REACTION_TYPE"],
                },
              ],
              concreteType: "TopReactionsConnection",
              kind: "LinkedField",
              name: "top_reactions",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TopReactionsEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "reaction_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "FeedbackReactionInfo",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        f,
                        e,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "reaction_type",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "svg_image",
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
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey:
                'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
            },
            {
              alias: null,
              args: null,
              concreteType: "ReactorsOfContentConnection",
              kind: "LinkedField",
              name: "reactors",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_empty",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "count_reduced",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: g,
              concreteType: "FeedbackReactionInfo",
              kind: "LinkedField",
              name: "viewer_feedback_reaction_info",
              plural: !1,
              selections: [f, e],
              storageKey: null,
            },
            e,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_show_top_reactions",
              storageKey: null,
            },
            {
              alias: null,
              args: g,
              concreteType: null,
              kind: "LinkedField",
              name: "viewer_actor",
              plural: !1,
              selections: [d, e],
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
          name: "CometUFIFeedbackCommentReactSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "comment_like_subscribe",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: c,
                  type: "FeedbackLikeResponsePayload",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: c,
                  type: "FeedbackUnlikeResponsePayload",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFIFeedbackCommentReactSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "comment_like_subscribe",
              plural: !1,
              selections: [
                d,
                {
                  kind: "InlineFragment",
                  selections: f,
                  type: "FeedbackLikeResponsePayload",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: f,
                  type: "FeedbackUnlikeResponsePayload",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4382608201759400",
          metadata: { subscriptionName: "comment_like_subscribe" },
          name: "CometUFIFeedbackCommentReactSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIFeedbackCommentReactSubscription_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIFeedbackCommentReactSubscription_feedback",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIFeedbackReactMutation_feedback",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentTopReactions_feedback",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "UFI2CommentTopReactionsWrapper_feedback",
        },
      ],
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIToggleCommentPermissionSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "useDefaultActor",
          },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "have_comments_been_disabled",
          storageKey: null,
        },
        d = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "use_default_actor",
              variableName: "useDefaultActor",
            },
          ],
          kind: "ScalarField",
          name: "can_viewer_comment",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFIToggleCommentPermissionSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "FeedbackCommentPermissionToggleSubscribeResponsePayload",
              kind: "LinkedField",
              name: "feedback_comment_permission_toggle_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Feedback",
                  kind: "LinkedField",
                  name: "feedback",
                  plural: !1,
                  selections: [c, d],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFIToggleCommentPermissionSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "FeedbackCommentPermissionToggleSubscribeResponsePayload",
              kind: "LinkedField",
              name: "feedback_comment_permission_toggle_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Feedback",
                  kind: "LinkedField",
                  name: "feedback",
                  plural: !1,
                  selections: [
                    c,
                    d,
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
        },
        params: {
          id: "3082587898469341",
          metadata: {
            subscriptionName: "feedback_comment_permission_toggle_subscribe",
          },
          name: "CometUFIToggleCommentPermissionSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIDeleteCommentMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "inviteShortLinkKey",
          },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "deleted_comment_id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFIDeleteCommentMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "CommentDeleteResponsePayload",
              kind: "LinkedField",
              name: "comment_delete",
              plural: !1,
              selections: [
                c,
                {
                  alias: null,
                  args: null,
                  concreteType: "Feedback",
                  kind: "LinkedField",
                  name: "feedback",
                  plural: !1,
                  selections: [
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Group",
                      kind: "LinkedField",
                      name: "associated_group",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "GroupsCometPendingActions_group",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "useCometUFIDisabledNotice_feedback",
                    },
                  ],
                  storageKey: null,
                },
              ],
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
          name: "CometUFIDeleteCommentMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "CommentDeleteResponsePayload",
              kind: "LinkedField",
              name: "comment_delete",
              plural: !1,
              selections: [
                c,
                {
                  alias: null,
                  args: null,
                  concreteType: "Feedback",
                  kind: "LinkedField",
                  name: "feedback",
                  plural: !1,
                  selections: [
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Group",
                      kind: "LinkedField",
                      name: "associated_group",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Variable",
                              name: "invite_short_link_key",
                              variableName: "inviteShortLinkKey",
                            },
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometGroupHeaderPendingActionsArchivedCardRenderer",
                                "CometGroupHeaderPendingActionsPausedCardRenderer",
                                "CometGroupHeaderPendingActionsFrozenNoticeCardRenderer",
                                "CometGroupHeaderPendingActionsAdminInviteCardRenderer",
                                "CometGroupHeaderPendingActionsRequestCardRenderer",
                                "CometGroupHeaderPendingActionsInvitationCardRenderer",
                                "CometGroupHeaderPendingActionsMutedCardRenderer",
                                "CometGroupHeaderPendingActionsAdminPromotionCardRenderer",
                                "GroupsCometHeaderPendingActionsAppealCardRenderer",
                                "XFBGroupsCometHeaderPendingActionsDiscoveryExpertInviteCardRenderer",
                                "GroupsCometHeaderPendingActionsExpertInviteCardRenderer",
                                "CometGroupHeaderPendingActionsTrustedParticipantCardRenderer",
                                "CometGroupHeaderPendingActionsPostRateLimitedCardRenderer",
                                "XFBGroupsCometHeaderPendingActionsInviteLinkCardRenderer",
                                "XFBGroupsCometHeaderPendingActionsScopedPersonLoginInviteLinkCardRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "group_pending_action_card_renderer",
                          plural: !1,
                          selections: [
                            e,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "CometGroupHeaderPendingActionsArchivedCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsArchivedCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "CometGroupHeaderPendingActionsPausedCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsPausedCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "CometGroupHeaderPendingActionsFrozenNoticeCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsFrozenNoticeCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "CometGroupHeaderPendingActionsAdminInviteCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsAdminInviteCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsRequestCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsRequestCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsInvitationCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsInvitationCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "CometGroupHeaderPendingActionsMutedCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsMutedCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsAdminPromotionCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsAdminPromotionCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsAppealCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GroupsCometHeaderPendingActionsAppealCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsDiscoveryExpertInviteCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "XFBGroupsCometHeaderPendingActionsDiscoveryExpertInviteCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsExpertInviteCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GroupsCometHeaderPendingActionsExpertInviteCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsRequestCardTrustedParticipantRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsTrustedParticipantCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "CometGroupHeaderPendingActionsPostRateLimitedCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometGroupHeaderPendingActionsPostRateLimitedCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsInviteLinkCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "XFBGroupsCometHeaderPendingActionsInviteLinkCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometPendingActions_group",
                                  fragmentName:
                                    "GroupsCometHeaderPendingActionsScopedPersonLoginInviteLinkCardRenderer_renderer",
                                  fragmentPropName: "renderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "XFBGroupsCometHeaderPendingActionsScopedPersonLoginInviteLinkCardRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        d,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "have_comments_been_disabled",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "are_live_video_comments_disabled",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_viewer_muted",
                      storageKey: null,
                    },
                    {
                      alias: "display_comments_count",
                      args: null,
                      concreteType: "DisplayCommentsConnection",
                      kind: "LinkedField",
                      name: "display_comments",
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
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comments_disabled_notice_renderer",
                      plural: !1,
                      selections: [
                        e,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometUFICommentDisabledNotice_feedback",
                              fragmentName:
                                "CometGenericCommentDisableNotice_commentDisableNotice",
                              fragmentPropName: "commentDisableNotice",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GeneralCommentDisableNotice",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometUFICommentDisabledNotice_feedback",
                              fragmentName:
                                "CometGroupForumCommentDisableNotice_commentDisableNotice",
                              fragmentPropName: "commentDisableNotice",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupForumParticipantDisableNotice",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometUFICommentDisabledNotice_feedback",
                              fragmentName:
                                "CometLiveVideoCommentDisableNotice_commentDisableNotice",
                              fragmentPropName: "commentDisableNotice",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "LiveVideoCommentDisableNotice",
                          abstractKey: null,
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
          id: "3689924081107077",
          metadata: {},
          name: "CometUFIDeleteCommentMutation",
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
  "CometUFIDeleteCommentSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "CommentDeleteResponsePayload",
            kind: "LinkedField",
            name: "comment_delete_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deleted_comment_id",
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
          name: "CometUFIDeleteCommentSubscription",
          selections: b,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFIDeleteCommentSubscription",
          selections: b,
        },
        params: {
          id: "3319521654771865",
          metadata: { subscriptionName: "comment_delete_subscribe" },
          name: "CometUFIDeleteCommentSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIEditCommentSubscription.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "input" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        f = [{ kind: "Variable", name: "data", variableName: "input" }],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        j = [i],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        m = [l],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        q = { kind: "Variable", name: "scale", variableName: "scale" },
        r = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        s = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        t = [s],
        u = [g, h],
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        w = [h],
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        };
      s = {
        alias: null,
        args: [
          { kind: "Variable", name: "location", variableName: "feedLocation" },
          s,
        ],
        kind: "ScalarField",
        name: "can_viewer_comment",
        storageKey: null,
      };
      var y = [
          { kind: "Literal", name: "translation_type", value: "ORIGINAL" },
        ],
        z = {
          args: null,
          fragment: b(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_title",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_v2",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_dark_mode_v2",
          storageKey: null,
        },
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_description",
          storageKey: null,
        },
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_enabled",
          storageKey: null,
        },
        H = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_manageable",
          storageKey: null,
        },
        I = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "serialized",
          storageKey: null,
        },
        J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "identity_badge_type",
          storageKey: null,
        },
        K = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_enabled",
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_uri",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_text",
          storageKey: null,
        },
        N = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "tier_info",
          plural: !1,
          selections: [
            g,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tier_name",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "stars_sent_this_week",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "stars_threshold_for_next_tier",
                  storageKey: null,
                },
              ],
              type: "TipperBadgeTierInfo",
              abstractKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "CometUFIEditCommentSubscription",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "CommentEditResponsePayload",
              kind: "LinkedField",
              name: "comment_edit_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Comment",
                  kind: "LinkedField",
                  name: "comment",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometUFIComment_comment",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [c, a, d, e],
          kind: "Operation",
          name: "CometUFIEditCommentSubscription",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "CommentEditResponsePayload",
              kind: "LinkedField",
              name: "comment_edit_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Comment",
                  kind: "LinkedField",
                  name: "comment",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "StoryAttachment",
                      kind: "LinkedField",
                      name: "attachments",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "StoryAttachmentAnimatedImageShareStyleRenderer",
                                "StoryAttachmentDonationStyleRenderer",
                                "StoryAttachmentFallbackStyleRenderer",
                                "StoryAttachmentPhotoStyleRenderer",
                                "StoryAttachmentQuiltImageStyleRenderer",
                                "StoryAttachmentStickerStyleRenderer",
                                "StoryAttachmentStickerAvatarStyleRenderer",
                                "StoryAttachmentVideoAutoplayStyleRenderer",
                                "StoryAttachmentVideoStyleRenderer",
                                "StoryAttachmentTipJarPaymentStyleRenderer",
                                "StoryAttachmentCommentPlaceInfoStyleRenderer",
                                "StoryAttachmentChatCommandStyleRenderer",
                                "StoryAttachmentPageInCommentStyleRenderer",
                                "StoryAttachmentInstantGamesTournamentActivityStyleRenderer",
                                "StoryAttachmentInstantGamesUpdateCommentStyleRenderer",
                                "StoryAttachmentSubscriptionGiftStyleRenderer",
                                "StoryAttachmentFactsInCommentsCommentStyleRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "style_type_renderer",
                          plural: !1,
                          selections: [
                            g,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentAnimatedImageShareStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentDonationAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentDonationStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentFallbackAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentFallbackStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentImageAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentPhotoStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentQuiltImageAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentQuiltImageStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentStickerAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentStickerStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentStickerAvatarAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentStickerAvatarStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentVideoAutoplayAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentVideoAutoplayStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentVideoAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentVideoStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentTipJarPaymentAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentTipJarPaymentStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentPlaceInfoAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentCommentPlaceInfoStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentChatCommandAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentChatCommandStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentPageInCommentAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentPageInCommentStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentInstantGamesTournamentActivityAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentInstantGamesTournamentActivityStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFICommentInstantGamesUpdateCommentAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentInstantGamesUpdateCommentStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFISubscriptionGiftingAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentSubscriptionGiftStyleRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryUFICommentAttachment_attachment",
                                  fragmentName:
                                    "CometUFIFactsInCommentsAttachmentStyle_styleTypeRenderer",
                                  fragmentPropName: "styleTypeRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "StoryAttachmentFactsInCommentsCommentStyleRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'style_type_renderer(supported:["StoryAttachmentAnimatedImageShareStyleRenderer","StoryAttachmentDonationStyleRenderer","StoryAttachmentFallbackStyleRenderer","StoryAttachmentPhotoStyleRenderer","StoryAttachmentQuiltImageStyleRenderer","StoryAttachmentStickerStyleRenderer","StoryAttachmentStickerAvatarStyleRenderer","StoryAttachmentVideoAutoplayStyleRenderer","StoryAttachmentVideoStyleRenderer","StoryAttachmentTipJarPaymentStyleRenderer","StoryAttachmentCommentPlaceInfoStyleRenderer","StoryAttachmentChatCommandStyleRenderer","StoryAttachmentPageInCommentStyleRenderer","StoryAttachmentInstantGamesTournamentActivityStyleRenderer","StoryAttachmentInstantGamesUpdateCommentStyleRenderer","StoryAttachmentSubscriptionGiftStyleRenderer","StoryAttachmentFactsInCommentsCommentStyleRenderer"])',
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "style_list",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    h,
                    {
                      alias: null,
                      args: j,
                      kind: "ScalarField",
                      name: "comment_menu_tooltip",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: j,
                      kind: "ScalarField",
                      name: "should_show_comment_menu",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "author",
                      plural: !1,
                      selections: [
                        g,
                        h,
                        k,
                        {
                          kind: "InlineFragment",
                          selections: m,
                          type: "Event",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: m,
                          type: "Group",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [l, n],
                          type: "Page",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            l,
                            {
                              alias: null,
                              args: null,
                              concreteType: "WorkUserInfo",
                              kind: "LinkedField",
                              name: "work_info",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_active_account",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            n,
                            o,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "subscribe_status",
                              storageKey: null,
                            },
                            p,
                            {
                              kind: "ClientExtension",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "availability",
                                  storageKey: null,
                                },
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: m,
                          type: "Entity",
                          abstractKey: "__isEntity",
                        },
                        { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                        {
                          alias: "profile_picture_depth_0",
                          args: [
                            { kind: "Literal", name: "height", value: 32 },
                            q,
                            { kind: "Literal", name: "width", value: 32 },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "profile_picture",
                          plural: !1,
                          selections: r,
                          storageKey: null,
                        },
                        {
                          alias: "profile_picture_depth_1",
                          args: [
                            { kind: "Literal", name: "height", value: 24 },
                            q,
                            { kind: "Literal", name: "width", value: 24 },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "profile_picture",
                          plural: !1,
                          selections: r,
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_author_weak_reference",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PrivateReplyContext",
                      kind: "LinkedField",
                      name: "private_reply_context",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_reply_permission",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Feedback",
                      kind: "LinkedField",
                      name: "feedback",
                      plural: !1,
                      selections: [
                        h,
                        {
                          alias: null,
                          args: null,
                          concreteType: "PrivateReplyContext",
                          kind: "LinkedField",
                          name: "page_private_reply",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "private_reply_render",
                              plural: !1,
                              selections: [
                                g,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "CometUFICommentPrivateReplyLink_feedback",
                                      fragmentName:
                                        "CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer",
                                      fragmentPropName:
                                        "privateReplyCometRenderer",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "PagesMessagingPrivateReplyCometRenderer",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "CometUFICommentPrivateReplyLink_feedback",
                                      fragmentName:
                                        "BizInboxCommentPrivateReplyLinkRenderer_privateReplyBizRenderer",
                                      fragmentPropName:
                                        "privateReplyBizRenderer",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "BizMessagingPrivateReplyRenderer",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: t,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "viewer_actor",
                          plural: !1,
                          selections: u,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: t,
                          concreteType: "FeedbackReactionInfo",
                          kind: "LinkedField",
                          name: "viewer_feedback_reaction_info",
                          plural: !1,
                          selections: [v, h],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "FeedbackReaction",
                          kind: "LinkedField",
                          name: "supported_reactions",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "FeedbackReactionAnimation",
                              kind: "LinkedField",
                              name: "animation",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "uri_keyframes2",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            v,
                            h,
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Video",
                          kind: "LinkedField",
                          name: "associated_video",
                          plural: !1,
                          selections: w,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "orderby",
                              value: ["COUNT_DESC", "REACTION_TYPE"],
                            },
                          ],
                          concreteType: "TopReactionsConnection",
                          kind: "LinkedField",
                          name: "top_reactions",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "TopReactionsEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "reaction_count",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "FeedbackReactionInfo",
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    v,
                                    h,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "reaction_type",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Image",
                                      kind: "LinkedField",
                                      name: "svg_image",
                                      plural: !1,
                                      selections: r,
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey:
                            'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "ReactorsOfContentConnection",
                          kind: "LinkedField",
                          name: "reactors",
                          plural: !1,
                          selections: [
                            x,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_empty",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "count_reduced",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        s,
                        {
                          alias: null,
                          args: t,
                          kind: "ScalarField",
                          name: "can_viewer_react",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: t,
                          kind: "ScalarField",
                          name: "comment_composer_placeholder",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "should_show_top_reactions",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PageAdminActorInfo",
                      kind: "LinkedField",
                      name: "page_admin_actor_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "creator_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "creator_name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "creator_type",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "label_type",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "page_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "profile_uri",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "QAUFIActionLinksCommentModuleRenderer",
                      kind: "LinkedField",
                      name: "qa_action_links_comment_renderer",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometUFICommentActionLinks_comment__qa_action_links_comment_renderer",
                          fragmentName: "GeminiUFIQAActionLinks_comment",
                          fragmentPropName: "comment",
                          kind: "ModuleImport",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "spam_display_mode",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_author_banned_by_content_owner",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "created_time",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_ama_question",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "comment_parent",
                      plural: !1,
                      selections: [
                        h,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback",
                          plural: !1,
                          selections: [s, h],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "author",
                          plural: !1,
                          selections: [
                            g,
                            k,
                            {
                              kind: "InlineFragment",
                              selections: [o, p],
                              type: "User",
                              abstractKey: null,
                            },
                            h,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "EditHistoryConnection",
                      kind: "LinkedField",
                      name: "edit_history",
                      plural: !1,
                      selections: [x],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Feedback",
                      kind: "LinkedField",
                      name: "parent_feedback",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "can_viewer_ban_user",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: t,
                          concreteType: "Page",
                          kind: "LinkedField",
                          name: "viewer_acts_as_page",
                          plural: !1,
                          selections: w,
                          storageKey: null,
                        },
                        h,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "share_fbid",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "PoliticalFigureData",
                          kind: "LinkedField",
                          name: "political_figure_data",
                          plural: !1,
                          selections: [
                            k,
                            {
                              alias: null,
                              args: null,
                              concreteType: "PoliticalOffice",
                              kind: "LinkedField",
                              name: "political_office",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "generic_title",
                                  storageKey: null,
                                },
                                h,
                              ],
                              storageKey: null,
                            },
                            h,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "ban_action",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: y,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "preferred_body",
                      plural: !1,
                      selections: [
                        g,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "translation_type",
                          storageKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [z, A],
                          type: "TextWithEntities",
                          abstractKey: null,
                        },
                        z,
                      ],
                      storageKey: 'preferred_body(translation_type:"ORIGINAL")',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PostTranslatability",
                      kind: "LinkedField",
                      name: "translatability_for_viewer",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "source_dialect_name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "source_dialect",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "translation_available_for_viewer",
                      storageKey: null,
                    },
                    l,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_hidden_by_content_owner",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "if_viewer_can_share",
                      plural: !1,
                      selections: [
                        h,
                        {
                          args: null,
                          documentName:
                            "CometUFICommentActionLinks_comment__if_viewer_can_share",
                          fragmentName:
                            "CometUFICommentShareActionLink_comment",
                          fragmentPropName: "comment",
                          kind: "ModuleImport",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "if_viewer_can_upvote_downvote",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometUFICommentActionLinks_comment__if_viewer_can_upvote_downvote",
                          fragmentName: "CometUFIVoteCommentActionLink_comment",
                          fragmentPropName: "comment",
                          kind: "ModuleImport",
                        },
                        h,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "if_viewer_can_award",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometUFICommentActionLinks_comment__if_viewer_can_award",
                          fragmentName:
                            "CometUFICommentAwardActionLink_comment",
                          fragmentPropName: "comment",
                          kind: "ModuleImport",
                        },
                        h,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "GroupCommentInfo",
                      kind: "LinkedField",
                      name: "group_comment_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "can_viewer_see_privacy_status",
                          storageKey: null,
                        },
                        {
                          args: null,
                          documentName: "CometUFICommentActorLink_comment",
                          fragmentName:
                            "CometUFIGroupCommentActorLink_groupCommentInfo",
                          fragmentPropName: "groupCommentInfo",
                          kind: "ModuleImport",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "comment_privacy_value",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "if_declined_by_group_admin_assistant",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometUFICommentActionLinks_comment__if_declined_by_group_admin_assistant",
                          fragmentName:
                            "CometUFICommentSeeDeclinedCommentFeedbackActionLink_comment",
                          fragmentPropName: "comment",
                          kind: "ModuleImport",
                        },
                        h,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "if_viewer_can_learn_more_about_pending_comment",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometUFICommentActionLinks_comment__if_viewer_can_learn_more_about_pending_comment",
                          fragmentName:
                            "CometUFICommentLearnMoreAboutPendingCommentActionLink_comment",
                          fragmentPropName: "comment",
                          kind: "ModuleImport",
                        },
                        h,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "body_renderer",
                      args: y,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "preferred_body",
                      plural: !1,
                      selections: [
                        g,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentBody_comment",
                              fragmentName:
                                "CometUFICommentBodyTextWithEntities_textWithEntities",
                              fragmentPropName: "textWithEntities",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "TextWithEntities",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentBody_comment",
                              fragmentName:
                                "CometUFICommentBodyComposedTextWithEntities_composedTextWithEntities",
                              fragmentPropName: "composedTextWithEntities",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "FBMarkdownCommentBody",
                          abstractKey: null,
                        },
                      ],
                      storageKey: 'preferred_body(translation_type:"ORIGINAL")',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_declined_by_group_admin_assistant",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_gaming_video_comment",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "timestamp_in_video",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "written_while_video_was_live",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_constituent_badge",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_see_subsribe_button",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_see_constituent_badge_upsell",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "legacy_token",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "question_and_answer_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_author_original_poster",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_viewer_comment_poster",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_author_bot",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_author_non_coworker",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: j,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "author_user_signals_renderer",
                      plural: !1,
                      selections: [
                        g,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "CometUFICommentActorUserSignalsRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometUFICommentActorUserSignalsRenderer",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        i,
                        {
                          kind: "Literal",
                          name: "supported",
                          value: [
                            "CometUFICommentActorConstituentBadge",
                            "CometUFICommentActorVerifiedBadge",
                            "CometUFICommentActorUserSignalsRenderer",
                            "CometUFICommentActorAMAQuestionAnswerBadge",
                            "CometUFICommentInlineFollowCTARenderer",
                            "GeminiUFICommentActorDeactivatedAccountBadge",
                            "GeminiUFICommentActorBotBadge",
                            "GeminiUFICommentActorNonCoworkerBadge",
                            "CometUFICommentPostAuthorBadge",
                            "GeminiUFICommentQAAnswerBadge",
                            "GeminiUFICommentQASocialAnswerBadge",
                          ],
                        },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "author_badge_renderers",
                      plural: !0,
                      selections: [
                        g,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "CometUFICommentActorConstituentBadge3DWrapper_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometUFICommentActorConstituentBadge",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "CometUFICommentActorVerifiedBadge3DWrapper_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometUFICommentActorVerifiedBadge",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "CometUFICommentActorUserSignalsRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometUFICommentActorUserSignalsRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "CometUFICommentActorAMAQuestionAnswerBadge3DWrapper_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometUFICommentActorAMAQuestionAnswerBadge",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "CometUFICommentInlineFollowCTARenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometUFICommentInlineFollowCTARenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "GeminiUFICommentActorDeactivatedAccountBadge3DWrapper_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GeminiUFICommentActorDeactivatedAccountBadge",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "GeminiUFICommentActorBotBadge3DWrapper_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GeminiUFICommentActorBotBadge",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "GeminiUFICommentActorNonCoworkerBadge3DWrapper_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GeminiUFICommentActorNonCoworkerBadge",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "CometUFICommentPostAuthorBadge3DWrapper_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometUFICommentPostAuthorBadge",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "GeminiUFICommentQAAnswerBadge_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GeminiUFICommentQAAnswerBadge",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "useCometUFICommentActorLinkBadges_comment",
                              fragmentName:
                                "GeminiUFICommentQASocialAnswerBadge_badge",
                              fragmentPropName: "badge",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GeminiUFICommentQASocialAnswerBadge",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: j,
                      concreteType: "IdentityBadge",
                      kind: "LinkedField",
                      name: "identity_badges_web",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "badge_asset",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "multiple_badge_asset",
                          storageKey: null,
                        },
                        A,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "text_gradient",
                          storageKey: null,
                        },
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
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "gaming_video_image_uri",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "gaming_video_dark_mode_image_uri",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: j,
                      kind: "ScalarField",
                      name: "can_show_multiple_identity_badges",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "IdentityBadge",
                      kind: "LinkedField",
                      name: "earned_identity_badges_web",
                      plural: !0,
                      selections: [B, C, D, E, F, G, H, I, J, K, L, M, N],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "work_ama_answer_status",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WorkKnowledgeInlineAnnotationCommentBadgeRenderer",
                      kind: "LinkedField",
                      name: "work_knowledge_inline_annotation_comment_badge_renderer",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometUFICommentBody_comment_work_knowledge_inline_annotation_comment_badge_renderer",
                          fragmentName:
                            "CometUFICommentBodyInlineAnnotationBadgeWrapper_workKnowledgeInlineAnnotationCommentBadgeRenderer",
                          fragmentPropName:
                            "workKnowledgeInlineAnnotationCommentBadgeRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_disable_preview",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "InlineSurveyStoryActionLink",
                      kind: "LinkedField",
                      name: "inline_survey_config",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName: "CometUFIComment_comment",
                          fragmentName:
                            "CometUFICommentQualitySurvey_inlineSurveyConfig",
                          fragmentPropName: "inlineSurveyConfig",
                          kind: "ModuleImport",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "legacy_fbid",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "attached_story",
                      plural: !1,
                      selections: u,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "if_viewer_can_see_member_page_tooltip",
                      plural: !1,
                      selections: u,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_disabled",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WorkAMAUFIAnsweredEventCommentModuleRenderer",
                      kind: "LinkedField",
                      name: "work_answered_event_comment_renderer",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            "CometUFIComment_comment_work_answered_event_comment_renderer",
                          fragmentName:
                            "CometUFIAMABroadcastAnswerEventRow_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comment_upper_badge_renderer",
                      plural: !1,
                      selections: [
                        g,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometUFIComment_comment_upper_badge_renderer",
                              fragmentName:
                                "GroupsCometCommentPinnedBadgeRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupsCometCommentPinnedBadgeRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometUFIComment_comment_upper_badge_renderer",
                              fragmentName:
                                "GroupsCometCommentUnpinnedBadgeRenderer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupsCometCommentUnpinnedBadgeRenderer",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "supported",
                          value: ["StarsElevatedCommentData"],
                        },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "elevated_comment_data",
                      plural: !1,
                      selections: [
                        g,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometUFIComment_comment_elevated_comment_data",
                              fragmentName:
                                "GFIStarsElevatedCommentContent_starsElevatedCommentData",
                              fragmentPropName: "starsElevatedCommentData",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "StarsElevatedCommentData",
                          abstractKey: null,
                        },
                      ],
                      storageKey:
                        'elevated_comment_data(supported:["StarsElevatedCommentData"])',
                    },
                    {
                      kind: "ClientExtension",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "optimistic_action",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "optimistic_error_code",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "optimistic_error",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "client_id",
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
        },
        params: {
          id: "4029357393858123",
          metadata: { subscriptionName: "comment_edit_subscribe" },
          name: "CometUFIEditCommentSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIWorkQACommentTypeUpdateSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "QaCommentTypeUpdateSubscribeResponsePayload",
            kind: "LinkedField",
            name: "qa_comment_type_update_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Comment",
                kind: "LinkedField",
                name: "comment",
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
                    name: "qa_comment_type",
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
          name: "CometUFIWorkQACommentTypeUpdateSubscription",
          selections: b,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFIWorkQACommentTypeUpdateSubscription",
          selections: b,
        },
        params: {
          id: "3775849025860927",
          metadata: { subscriptionName: "qa_comment_type_update_subscribe" },
          name: "CometUFIWorkQACommentTypeUpdateSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "groupsCometFetchStory",
  ["CometRelay", "groupsCometFetchStoryQuery.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("groupsCometFetchStoryQuery.graphql"));
    function a(a, b) {
      return d("CometRelay").fetchQuery(b, i, a).toPromise();
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIFeedbackCommentReactSubscription",
  [
    "CometRelay",
    "CometUFIFeedbackCommentReactSubscription.graphql",
    "CometUFIFeedbackCommentReactSubscription_feedback.graphql",
    "emptyFunction",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0
      ? h
      : (h = b("CometUFIFeedbackCommentReactSubscription_feedback.graphql"));
    var j =
      i !== void 0
        ? i
        : (i = b("CometUFIFeedbackCommentReactSubscription.graphql"));
    function a(a, b, e, f) {
      return c("gkx")("1352845")
        ? { dispose: c("emptyFunction") }
        : d("CometRelay").requestSubscription(a, {
            subscription: j,
            variables: { input: b, isComet: f, useDefaultActor: e },
          });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "CometUFIReactionsAnimationPreloader",
  [
    "Keyframes",
    "Promise",
    "UFIReactionTypes",
    "UFIReactionsKeyframesAssets",
    "emptyFunction",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = !1;
    function j(a) {
      var e = [],
        f = Object.keys(c("UFIReactionsKeyframesAssets").reactions);
      for (var g = 0; g < f.length; g++) {
        var h = f[g];
        h = Number(h);
        if (a.indexOf(h) !== -1) {
          var i = c("UFIReactionsKeyframesAssets").reactions[h];
          if (typeof i === "string") {
            h = {
              assetName: c("UFIReactionTypes").reactions[h].name,
              projectName: "feedback_reactions",
            };
            e.push(d("Keyframes").load(i, h));
          }
        }
      }
      return b("Promise").all(e).then(c("emptyFunction"));
    }
    a = (function () {
      function a() {}
      var e = a.prototype;
      e.loadLikeActionIcon = function () {
        h ||
          (h = d("Keyframes").load(
            c("UFIReactionsKeyframesAssets").likeAction,
            { assetName: "like_action", projectName: "feedback_reactions" }
          ));
        return h;
      };
      e.load = function (a) {
        i ||
          ((i = !0),
          c("promiseDone")(
            this.$1(a),
            function () {},
            function () {
              i = !1;
            }
          ));
      };
      e.loadAll = function () {
        i ||
          ((i = !0),
          c("promiseDone")(
            b("Promise").all([
              this.$1(
                Object.keys(c("UFIReactionsKeyframesAssets").reactions).map(
                  function (a) {
                    return Number(a);
                  }
                )
              ),
              this.loadLikeActionIcon(),
            ]),
            function () {},
            function () {
              i = !1;
            }
          ));
      };
      e.preloadAll = function () {
        var a = Object.values(c("UFIReactionsKeyframesAssets").reactions);
        for (var b = 0; b < a.length; b++) {
          var e = a[b];
          typeof e === "string" && d("Keyframes").preload(e);
        }
        d("Keyframes").preload(c("UFIReactionsKeyframesAssets").likeAction);
      };
      e.$1 = function (a) {
        return j(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIToggleCommentPermissionSubscription",
  ["CometRelay", "CometUFIToggleCommentPermissionSubscription.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometUFIToggleCommentPermissionSubscription.graphql"));
    function a(a, b, c) {
      return d("CometRelay").requestSubscription(a, {
        subscription: i,
        variables: { input: b, useDefaultActor: c },
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "UFI2LocalUserAction",
  ["EventEmitter"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (c("EventEmitter"))();
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIDeleteCommentMutation",
  [
    "CometRelay",
    "CometUFIDeleteCommentMutation.graphql",
    "UFI2LocalUserAction",
    "WebPixelRatio",
    "displayCommentsConnectionCountUpdater",
    "forEachUFI2DisplayCommentsConnection",
    "once",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUFIDeleteCommentMutation.graphql"));
    function j(a, b) {
      var d = null;
      b = a.get(b);
      if (b) {
        b = b.getLinkedRecord("feedback");
        b &&
          c("forEachUFI2DisplayCommentsConnection")(
            a,
            b,
            c("once")(function (a) {
              d = Number(a.getValue("count"));
            })
          );
      }
      return (a = d) != null ? a : 0;
    }
    function k(a, b, e) {
      var f = a.get(b);
      b = f == null ? void 0 : f.getLinkedRecord("comment_parent");
      var g = f == null ? void 0 : f.getLinkedRecord("feedback"),
        h = b == null ? void 0 : b.getLinkedRecord("feedback");
      if (!g || !h || !f) return;
      var i = new Map();
      c("forEachUFI2DisplayCommentsConnection")(a, g, function (b) {
        b = b.getLinkedRecords("edges");
        if (!b) return;
        b.forEach(function (b) {
          var e = b == null ? void 0 : b.getLinkedRecord("node");
          if (!e || i.has(e.getDataID())) return;
          e.setValue(!0, "is_subreply_parent_deleted");
          i.set(e.getDataID(), f.getDataID());
          var g;
          c("forEachUFI2DisplayCommentsConnection")(a, h, function (b) {
            g == null && (g = l(b, f.getDataID()));
            var c = d("CometRelay").ConnectionHandler.createEdge(
              a,
              b,
              e,
              "DisplayCommentsEdge"
            );
            d("CometRelay").ConnectionHandler.insertEdgeBefore(b, c, g);
          });
        });
      });
      e(i);
    }
    function l(a, b) {
      a = a.getLinkedRecords("edges");
      a =
        a == null
          ? void 0
          : a.find(function (a) {
              a = a == null ? void 0 : a.getLinkedRecord("node");
              return a && a.getDataID() === b;
            });
      a = a == null ? void 0 : a.getValue("cursor");
      if (typeof a !== "string") return;
      return a;
    }
    function m(a) {
      return function (b) {
        var e = b.get(a.feedbackId);
        if (!e) {
          b["delete"](a.commentId);
          return;
        }
        k(b, a.commentId, a.addReparentedCommentIds);
        var f = j(b, a.commentId);
        e = c("forEachUFI2DisplayCommentsConnection")(b, e, function (b) {
          d("CometRelay").ConnectionHandler.deleteNode(b, a.commentId);
        });
        if (!e)
          throw c("unrecoverableViolation")(
            "could not find top level comment connection",
            "ufi2"
          );
        b["delete"](a.commentId);
        c("displayCommentsConnectionCountUpdater")({
          feedbackId: a.feedbackId,
          modifier: -1,
          store: b,
          topLevelFeedbackId: a.topLevelFeedbackId,
          totalCommentCountModifier: -1 - f,
        });
      };
    }
    function a(a, b) {
      var e = m(b);
      d("CometRelay").commitLocalUpdate(a, function (a) {
        a = a.get(b.commentId);
        if (a == null)
          throw c("unrecoverableViolation")(
            "'CometUFIDeleteCommentMutation: Could not find comment with ID " +
              b.commentId,
            "ufi2"
          );
        a.setValue("DELETE", "optimistic_action");
      });
      var f = d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function (a) {
          a = (a = a.comment_delete) == null ? void 0 : a.deleted_comment_id;
          a != null &&
            c("UFI2LocalUserAction").emit("delete", {
              __target: "comment",
              commentId: a,
            });
          (b == null ? void 0 : b.onCompleted) && b.onCompleted();
        },
        onError: function (e) {
          f && f.dispose(),
            d("CometRelay").commitLocalUpdate(a, function (a) {
              a = a.get(b.commentId);
              if (a == null)
                throw c("unrecoverableViolation")(
                  "CometUFIDeleteCommentMutation: Could not find comment with ID " +
                    b.commentId,
                  "ufi2"
                );
              a.setValue("DELETE", "optimistic_action");
              a.setValue(e.toString(), "optimistic_error");
              (b == null ? void 0 : b.onError) && b.onError(e);
            });
        },
        optimisticResponse: {
          comment_delete: {
            deleted_comment_id: b.commentId,
            feedback: {
              associated_group: null,
              comments_disabled_notice_renderer: null,
              id: b.feedbackId,
            },
          },
        },
        optimisticUpdater: e,
        updater: e,
        variables: {
          input: { comment_id: b.commentId },
          scale: d("WebPixelRatio").get(),
        },
      });
      return f;
    }
    g.getDeleteCommentUpdater = m;
    g.commitDeleteCommentMutation = a;
  },
  98
);
__d(
  "CometUFIDeleteCommentSubscription",
  [
    "CometRelay",
    "CometUFIDeleteCommentMutation",
    "CometUFIDeleteCommentSubscription.graphql",
    "FBLogger",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0 ? h : (h = b("CometUFIDeleteCommentSubscription.graphql"));
    function a(a) {
      var b = a.addReparentedCommentIds,
        e = a.environment,
        f = a.feedbackSource,
        g = a.topLevelFeedbackID;
      function h(a) {
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "FEEDBACK_TARGET_ID", g || "UNKNOWN")
          .warn(a);
      }
      return d("CometRelay").requestSubscription(e, {
        subscription: i,
        updater: function (a) {
          var e = a.getRootField("comment_delete_subscribe");
          if (e == null) {
            h("could not find comment create subscription payload");
            return;
          }
          e = e.getValue("deleted_comment_id");
          if (e == null || typeof e !== "string") return;
          try {
            e = d("CometUFIDeleteCommentMutation").getDeleteCommentUpdater({
              addReparentedCommentIds: b,
              commentId: e,
              feedbackId: g,
              feedbackSource: f,
              topLevelFeedbackId: g,
            });
            e(a);
          } catch (a) {
            c("recoverableViolation")(
              "CometUFIDeleteCommentSubscription: Error (" +
                a.name +
                ") when executing updater",
              "ufi2"
            );
          }
        },
        variables: { input: { top_level_feedback_id: g } },
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "CometUFIEditCommentSubscription",
  ["CometRelay", "CometUFIEditCommentSubscription.graphql", "WebPixelRatio"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUFIEditCommentSubscription.graphql"));
    function a(a) {
      var b = a.environment;
      a = a.topLevelFeedbackID;
      return d("CometRelay").requestSubscription(b, {
        subscription: i,
        variables: {
          input: { top_level_feedback_id: a },
          isComet: !0,
          scale: d("WebPixelRatio").get(),
          useDefaultActor: !1,
        },
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "CometUFIWorkQACommentTypeUpdateSubscription",
  ["CometRelay", "CometUFIWorkQACommentTypeUpdateSubscription.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometUFIWorkQACommentTypeUpdateSubscription.graphql"));
    function a(a) {
      var b = a.environment;
      a = a.feedbackID;
      return d("CometRelay").requestSubscription(b, {
        subscription: i,
        variables: { input: { top_level_feedback_id: a } },
      });
    }
    g.subscribe = a;
  },
  98
);
