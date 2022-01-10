if (self.CavalryLogger) {
  CavalryLogger.start_js(["71WvPJW"]);
}

__d(
  "CometFeedStoryCallToActionTriggerContextProvider_bumperData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryCallToActionTriggerContextProvider_bumperData",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "triggered_bumpers",
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
              concreteType: null,
              kind: "LinkedField",
              name: "triggers",
              plural: !0,
              selections: [
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
      type: "StoryBumperData",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryClickLoggerContainer_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryClickLoggerContainer_story",
      selections: [
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryAYMTFooterSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAYMTFooterSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
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
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAYMTFooterSection_story",
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
                      documentName: "CometFeedStoryAYMTFooterSection_story",
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
                      documentName: "CometFeedStoryAYMTFooterSection_story",
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
                      documentName: "CometFeedStoryAYMTFooterSection_story",
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryCallToActionSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryCallToActionSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
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
                  value: ["CometStoryDefaultCallToActionStrategy"],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "call_to_action",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCallToActionSection_story",
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryContextSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        { kind: "Variable", name: "location", variableName: "renderLocation" },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryContextSection_story",
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
            args: a,
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
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null,
          },
          {
            alias: null,
            args: a,
            kind: "ScalarField",
            name: "should_host_actor_link_in_watch",
            storageKey: null,
          },
        ],
        type: "Story",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryCopyrightViolationHeaderSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryCopyrightViolationHeaderSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
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
                  value: ["CometFeedStoryCopyrightViolationHeaderStrategy"],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "copyright_violation_header",
              plural: !1,
              selections: [
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryFeedbackSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryFeedbackSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
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
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
                      documentName: "CometFeedStoryFeedbackSection_story",
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
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
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryFooterSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryFooterSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
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
                      fragmentName:
                        "CometFeedStoryInsightsFooterStrategy_insights",
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
                      fragmentName:
                        "CometFeedStoryStonehengeFooterStrategy_story",
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
                      fragmentName:
                        "CometFeedStoryWoodhengeFooterStrategy_story",
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryHeaderSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryHeaderSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
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
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName: "CometFeedStoryAlbumHeaderStrategy_header",
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
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName: "CometStoryPostUpsellHeaderStrategy_header",
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
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName: "CometFeedStoryStoryHeaderStrategy_header",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
                      documentName: "CometFeedStoryHeaderSection_story",
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryOuterFooterSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryOuterFooterSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
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
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryOuterFooterSection_story",
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
                      documentName: "CometFeedStoryOuterFooterSection_story",
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
                      documentName: "CometFeedStoryOuterFooterSection_story",
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
                      documentName: "CometFeedStoryOuterFooterSection_story",
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
                      documentName: "CometFeedStoryOuterFooterSection_story",
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
                      documentName: "CometFeedStoryOuterFooterSection_story",
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
                      documentName: "CometFeedStoryOuterFooterSection_story",
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
                      documentName: "CometFeedStoryOuterFooterSection_story",
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryPostInformTreatmentSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryPostInformTreatmentSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
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
                  value: ["CometStoryInformTreatmentPostCoverStrategy"],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "post_inform_treatment",
              plural: !1,
              selections: [
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
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedUnitStoryStrategy_feedUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUnitStoryStrategy_feedUnit",
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "matched_terms",
          storageKey: null,
        },
        { args: null, kind: "FragmentSpread", name: "CometFeedStory_story" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryClickLoggerContainer_story",
        },
        {
          kind: "ClientExtension",
          selections: [
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
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "type",
                  storageKey: null,
                },
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
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStory_story.graphql",
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
        b = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryContextSection_story",
        },
        c = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryFooterSection_story",
        },
        d = {
          kind: "ClientExtension",
          selections: [
            {
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
                  ],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedTombstoneFactory_tombstoneFeedUnit",
                },
              ],
              storageKey: null,
            },
          ],
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStory_story",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "attached_story",
            plural: !1,
            selections: [b, c, d],
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
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryCallToActionTriggerContextProvider_bumperData",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "location",
                variableName: "renderLocation",
              },
            ],
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
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryCopyrightViolationHeaderSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryHeaderSection_story",
          },
          b,
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryAYMTFooterSection_story",
          },
          c,
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryFeedbackSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryOuterFooterSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryCallToActionSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryPostInformTreatmentSection_story",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null,
          },
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
              a,
              {
                alias: null,
                args: null,
                concreteType: "Group",
                kind: "LinkedField",
                name: "associated_group",
                plural: !1,
                selections: [a],
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "context",
                storageKey: null,
              },
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
          d,
        ],
        type: "Story",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryCallToActionTriggerContextProvider.react",
  [
    "CometFeedStoryCallToActionTriggerContext",
    "CometFeedStoryCallToActionTriggerContextProvider_bumperData.graphql",
    "CometRelay",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useMemo,
      k = e.useState;
    function a(a) {
      var e = a.children;
      a = a.cta;
      var f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryCallToActionTriggerContextProvider_bumperData.graphql"
            )),
        a
      );
      a = k();
      var g = a[0],
        l = a[1];
      a = j(
        function () {
          var a = c("orEmptyArray")(f == null ? void 0 : f.triggered_bumpers),
            b = {};
          for (var d = 0; d < a.length; d++) {
            var e = a[d],
              h = e.__typename;
            e = e.triggers
              .map(function (a) {
                return a.trigger_event;
              })
              .filter(Boolean);
            for (var i = 0; i < e.length; i++) {
              var j = e[i];
              Object.prototype.hasOwnProperty.call(b, j) || (b[j] = h);
            }
          }
          return {
            setTriggeredEvent: l,
            triggeredBumperRegistry: b,
            triggeredEvent: g,
          };
        },
        [f, g, l]
      );
      return i.jsx(c("CometFeedStoryCallToActionTriggerContext").Provider, {
        value: a,
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPostInformTreatmentContext",
  ["react", "useStatesInMap"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    d = d("react");
    var i = d.createContext,
      j = d.useCallback,
      k = d.useContext,
      l = d.useMemo,
      m = i({
        postCoverSettings: { contentHidden: !1, hasPostCover: !1 },
        setHasPostCover: function () {},
        setIsContentHidden: function () {},
      });
    function a(a) {
      var b = a.children;
      a = a.identifier;
      a = c("useStatesInMap")(a, { contentHidden: !0, hasPostCover: !1 });
      var d = a[0],
        e = a[1],
        f = j(
          function (a) {
            e(function (b) {
              return babelHelpers["extends"]({}, b, { contentHidden: a });
            });
          },
          [e]
        ),
        g = j(
          function (a) {
            e(function (b) {
              return babelHelpers["extends"]({}, b, { hasPostCover: a });
            });
          },
          [e]
        );
      a = l(
        function () {
          return {
            postCoverSettings: d,
            setHasPostCover: g,
            setIsContentHidden: f,
          };
        },
        [d, f, g]
      );
      return h.jsx(m.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      var a = k(m);
      a = a.postCoverSettings;
      return !a.hasPostCover ? !1 : a.contentHidden;
    }
    function e() {
      var a = k(m);
      a = a.setIsContentHidden;
      return a;
    }
    function n() {
      var a = k(m);
      a = a.setHasPostCover;
      return a;
    }
    function o(a) {
      a = a.children;
      var b = k(m);
      b = b.postCoverSettings;
      return !b.hasPostCover
        ? h.jsx(h.Fragment, { children: a })
        : b.contentHidden
        ? null
        : h.jsx(h.Fragment, { children: a });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    g.CometPostInformTreatmentContextProvider = a;
    g.useIsContentHidden = b;
    g.useSetIsContentHidden = e;
    g.useSetHasPostCover = n;
    g.CometPostInformTreatmentConditionalRenderer = o;
  },
  98
);
__d(
  "CometFeedStoryClickLoggerContainer.react",
  [
    "CometFeedStoryClickLoggerContainer_story.graphql",
    "CometFeedStoryClickLoggerImpl.react",
    "CometRelay",
    "CometTrackingCodeProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("CometFeedStoryClickLoggerContainer_story.graphql"));
    function a(a) {
      var b,
        e = a.children;
      a = d("CometRelay").useFragment(j, a.story);
      a = {
        click_tracking_linkshim_cb:
          (b = a == null ? void 0 : a.click_tracking_linkshim_cb) != null
            ? b
            : "",
        encrypted_click_tracking:
          (b = a == null ? void 0 : a.encrypted_click_tracking) != null
            ? b
            : "",
        encrypted_tracking:
          (b = a == null ? void 0 : a.encrypted_tracking) != null ? b : "",
      };
      return i.jsx(c("CometTrackingCodeProvider.react"), {
        trackingCode: a,
        children: i.jsx(c("CometFeedStoryClickLoggerImpl.react"), {
          children: e,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryAYMTFooterSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAYMTFooterSection_story.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.story;
      a = a.variables;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryAYMTFooterSection_story.graphql")),
        f
      );
      return i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 99,
        children: i.jsx(c("CometFeedMatchRenderer.react"), {
          match:
            f == null
              ? void 0
              : (e = f.comet_sections) == null
              ? void 0
              : e.aymt_footer,
          preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION: !0,
          props: { variables: a },
          section: "aymt_footer",
          trackingData: f == null ? void 0 : f.encrypted_tracking,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryCallToActionSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryCallToActionSection_story.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.story;
      a = a.variables;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryCallToActionSection_story.graphql")),
        f
      );
      return i.jsx(c("CometFeedMatchRenderer.react"), {
        match: (e = f.comet_sections) == null ? void 0 : e.call_to_action,
        props: { variables: a },
        section: "call_to_action",
        trackingData: f.encrypted_tracking,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryContextSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryContextSection_story.graphql",
    "CometFeedStoryRenderLocationContext",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "PagesCometLinkContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var e,
        f,
        g = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometFeedStoryContextSection_story.graphql")),
          a.story
        ),
        k = (e = a.variables) == null ? void 0 : e.renderLocation;
      e = j(
        function () {
          return { storyRenderLocation: k };
        },
        [k]
      );
      var l = !!g.should_host_actor_link_in_watch,
        m = j(
          function () {
            return { shouldHostInWatch: l };
          },
          [l]
        );
      return i.jsx("div", {
        "data-testid": void 0,
        children: i.jsx(c("CometTrackingNodeProvider.react"), {
          trackingNode: 230,
          children: i.jsx(c("CometFeedStoryRenderLocationContext").Provider, {
            displayName: "CometFeedStoryRenderLocationContext",
            value: e,
            children: i.jsx(c("PagesCometLinkContext").Provider, {
              displayName: "PagesCometLinkContext",
              value: m,
              children: i.jsx(c("CometFeedMatchRenderer.react"), {
                match:
                  g == null
                    ? void 0
                    : (e = g.comet_sections) == null
                    ? void 0
                    : e.context_layout,
                matchRequired: !0,
                props: {
                  feedLocation: a.feedLocation,
                  storyDebugInfo: a.storyDebugInfo,
                  variables: a.variables,
                },
                section: "context_layout",
                trackingData: g == null ? void 0 : g.encrypted_tracking,
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
__d(
  "CometFeedStoryCopyrightViolationHeaderSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryCopyrightViolationHeaderSection_story.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var b,
        e = d("CometRelay").useFragment(j, a.story);
      b =
        e == null
          ? void 0
          : (b = e.comet_sections) == null
          ? void 0
          : b.copyright_violation_header;
      a = a.variables;
      return i.jsx(c("CometFeedMatchRenderer.react"), {
        match: b,
        preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION: !0,
        props: { variables: a },
        section: "header",
        trackingData: e == null ? void 0 : e.encrypted_tracking,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var j =
      h !== void 0
        ? h
        : (h = b(
            "CometFeedStoryCopyrightViolationHeaderSection_story.graphql"
          ));
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryFeedbackSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryFeedbackSection_story.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
    "usePageletMatchMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var e,
        f,
        g = a.story,
        k = a.variables;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryFeedbackSection_story.graphql")),
        g
      );
      g = j(
        function () {
          return { variables: k };
        },
        [k]
      );
      c("usePageletMatchMetadata")(
        "feedback",
        a == null
          ? void 0
          : (e = a.comet_sections) == null
          ? void 0
          : e.feedback
      );
      return i.jsx("div", {
        "data-testid": void 0,
        children: i.jsx(c("CometTrackingNodeProvider.react"), {
          trackingNode: 36,
          children: i.jsx(c("CometFeedMatchRenderer.react"), {
            match:
              a == null
                ? void 0
                : (e = a.comet_sections) == null
                ? void 0
                : e.feedback,
            props: g,
            section: "feedback",
            trackingData: a == null ? void 0 : a.encrypted_tracking,
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
  "CometFeedStoryFooterSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryFooterSection_story.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.story;
      a = a.variables;
      f = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometFeedStoryFooterSection_story.graphql")),
        f
      );
      return i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 99,
        children: i.jsx(c("CometFeedMatchRenderer.react"), {
          match:
            f == null
              ? void 0
              : (e = f.comet_sections) == null
              ? void 0
              : e.footer,
          props: { variables: a },
          section: "footer",
          trackingData: f == null ? void 0 : f.encrypted_tracking,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryHeaderSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryHeaderSection_story.graphql",
    "CometRelay",
    "react",
    "usePageletMatchMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var b,
        e = d("CometRelay").useFragment(j, a.story);
      b =
        e == null ? void 0 : (b = e.comet_sections) == null ? void 0 : b.header;
      a = a.variables;
      c("usePageletMatchMetadata")("header", b);
      return i.jsx("div", {
        "data-testid": void 0,
        children: i.jsx(c("CometFeedMatchRenderer.react"), {
          match: b,
          props: { variables: a },
          section: "header",
          trackingData: e == null ? void 0 : e.encrypted_tracking,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var j =
      h !== void 0 ? h : (h = b("CometFeedStoryHeaderSection_story.graphql"));
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryOuterFooterSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryOuterFooterSection_story.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometFeedStoryOuterFooterSection_story.graphql")),
          a.story
        );
      return i.jsx(c("CometFeedMatchRenderer.react"), {
        match:
          f == null
            ? void 0
            : (e = f.comet_sections) == null
            ? void 0
            : e.outer_footer,
        preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION: !0,
        props: { variables: a.variables },
        section: "outer_footer",
        trackingData: f == null ? void 0 : f.encrypted_tracking,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryPostInformTreatmentSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryPostInformTreatmentSection_story.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState;
    function a(a) {
      var e,
        f = j(!1),
        g = f[0],
        k = f[1];
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryPostInformTreatmentSection_story.graphql")),
        a.story
      );
      return (f == null
        ? void 0
        : (e = f.comet_sections) == null
        ? void 0
        : e.post_inform_treatment) == null || g
        ? i.jsx(i.Fragment, { children: a.children })
        : i.jsx(c("CometFeedMatchRenderer.react"), {
            match:
              f == null
                ? void 0
                : (e = f.comet_sections) == null
                ? void 0
                : e.post_inform_treatment,
            matchRequired: !0,
            onUnsupported: function () {
              return k(!0);
            },
            props: { children: a.children, story: a.story },
            section: "post_inform_treatment",
            trackingData: f == null ? void 0 : f.encrypted_tracking,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryOptimisticWithStory.react",
  ["OptimisticLoadingTypeEnum", "cometComposerLogger", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.children,
        d = a.creationSessionID,
        e = a.optimisticLoadingType,
        f = j(!1),
        g = j(!1);
      i(
        function () {
          d != null &&
            !f.current &&
            e === c("OptimisticLoadingTypeEnum").SHOW_POST_PREVIEW &&
            ((f.current = !0),
            c("cometComposerLogger")(
              {
                fields: {
                  publishFlowOptimisticStep: "INSERT_OPTIMISTIC_POST",
                  typeOfOptimisticPost: "OPTIMISTIC_POST_WITH_STORY",
                },
                type: "COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS",
              },
              d
            )),
            d != null &&
              !g.current &&
              e === c("OptimisticLoadingTypeEnum").SHOW_ANIMATION &&
              ((g.current = !0),
              c("cometComposerLogger")(
                {
                  fields: { publishFlowOptimisticStep: "INSERT_REAL_POST" },
                  type: "COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS",
                },
                d
              ));
        },
        [d, e]
      );
      a =
        e === c("OptimisticLoadingTypeEnum").SHOW_POST_PREVIEW
          ? "FeedCometOptimisticPostPreview"
          : null;
      return h.jsx("div", {
        className:
          (e === c("OptimisticLoadingTypeEnum").SHOW_ANIMATION
            ? "kt14r9nc qhdpjftm"
            : "") +
          (e === c("OptimisticLoadingTypeEnum").SHOW_POST_PREVIEW
            ? " hoa2di3t kgtf8isp"
            : ""),
        "data-testid": void 0,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometJSONLDWrapperConfig.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.content;
      return typeof a !== "string"
        ? null
        : h.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: '<script type="application/ld+json">' + a + "</script>",
            },
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStory.react",
  [
    "BaseHeadingContextWrapper.react",
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAYMTFooterSection.react",
    "CometFeedStoryCallToActionSection.react",
    "CometFeedStoryCallToActionTriggerContextProvider.react",
    "CometFeedStoryContext",
    "CometFeedStoryContextSection.react",
    "CometFeedStoryCopyrightViolationHeaderSection.react",
    "CometFeedStoryEncryptedTrackingContext",
    "CometFeedStoryFeedbackSection.react",
    "CometFeedStoryFooterSection.react",
    "CometFeedStoryHeaderSection.react",
    "CometFeedStoryOuterFooterSection.react",
    "CometFeedStoryPostInformTreatmentSection.react",
    "CometFeedStory_story.graphql",
    "CometJSONLDWrapperConfig.react",
    "CometPlaceholder.react",
    "CometPostInformTreatmentContext",
    "CometRelay",
    "CometStoryRenderLocationContext.react",
    "CometTrackingNodeProvider.react",
    "CometUFIActionsContext",
    "CometUFICommentListenersContext",
    "CometUFIVideoPlayerUtils",
    "JSResourceForInteraction",
    "ProfileCometLinkContext",
    "lazyLoadComponent",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo,
      k = c("requireDeferred")("groupsCometFetchStory").__setRef(
        "CometFeedStory.react"
      ),
      l = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometFeedTombstoneFactory.react"
        ).__setRef("CometFeedStory.react")
      ),
      m = function (a, b) {
        if (a === "APPROVE_PENDING_POST")
          return b === "GROUP_PENDING" || b === "GROUP_MEMBER_BIO_FEED";
        return b === "GROUP_ADMIN_TO_MEMBER_FEEDBACK" ? !1 : !0;
      };
    function a(a) {
      var b,
        e,
        f = a.variables;
      a = d("CometRelay").useFragment(n, a.story);
      var g = c("useNullthrowsViolation")(
          a,
          "story cannot be null in CometFeedStory"
        ),
        h = c("useNullthrowsViolation")(
          g.id,
          "story.id cannot be null in CometFeedStory"
        ),
        o = j(
          function () {
            var a;
            return {
              source_url:
                g == null
                  ? void 0
                  : (a = g.whatsapp_ad_context) == null
                  ? void 0
                  : a.source_url,
              storyID: h,
              whatsapp_ad_context:
                g == null
                  ? void 0
                  : (a = g.whatsapp_ad_context) == null
                  ? void 0
                  : a.context,
            };
          },
          [g, h]
        );
      b = g == null ? void 0 : (b = g.feedback) == null ? void 0 : b.id;
      var p = g == null ? void 0 : g.attached_story,
        q = g == null ? void 0 : g.encrypted_tracking,
        r = g == null ? void 0 : g.debug_info,
        s = g == null ? void 0 : g.schema_context;
      b = c("useNullthrowsViolation")(
        p != null && b == null ? p : g,
        "storyToRender cannot be null in CometFeedStory"
      );
      e =
        (e = g == null ? void 0 : g.tombstone_feedunit) != null
          ? e
          : p == null
          ? void 0
          : p.tombstone_feedunit;
      p = e == null ? void 0 : e.is_hidden_from_client;
      var t = f == null ? void 0 : f.feedLocation,
        u = f == null ? void 0 : f.renderLocation,
        v = j(
          function () {
            var a;
            return {
              groupID:
                g == null
                  ? void 0
                  : (a = g.feedback) == null
                  ? void 0
                  : (a = a.associated_group) == null
                  ? void 0
                  : a.id,
            };
          },
          [g]
        ),
        w = d("CometRelay").useRelayEnvironment();
      d("CometRelay").useSubscribeToInvalidationState([h], function () {
        k.onReady(function (a) {
          a(babelHelpers["extends"]({}, f, { id: h }), w);
        });
      });
      if (
        p === !0 &&
        e != null &&
        m((p = e.tombstone) == null ? void 0 : p.action, t)
      )
        return i.jsx("div", {
          children: i.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: i.jsx(l, { tombstoneFeedUnit: e }),
          }),
        });
      (g == null ? void 0 : g.comet_sections) == null &&
        c("recoverableViolation")(
          "Story.comet_sections is null for story " + h,
          "comet_feed"
        );
      return i.jsx(d("CometFeedStoryContext").CometFeedStoryContext.Provider, {
        value: o,
        children: i.jsx(c("ProfileCometLinkContext").Provider, {
          value: v,
          children: i.jsx(c("BaseHeadingContextWrapper.react"), {
            children: i.jsx(
              c("CometFeedStoryEncryptedTrackingContext").Provider,
              {
                value: (p = q) != null ? p : "",
                children: i.jsx(c("CometTrackingNodeProvider.react"), {
                  trackingNode: 301,
                  children: i.jsx(
                    d("CometUFIVideoPlayerUtils")
                      .CometUFIVideoPlayerStateAndControllerContextProvider,
                    {
                      children: i.jsxs(
                        c("CometStoryRenderLocationContext.react").Provider,
                        {
                          value: u,
                          children: [
                            i.jsx(c("CometJSONLDWrapperConfig.react"), {
                              content: s,
                            }),
                            i.jsx(
                              d("CometUFICommentListenersContext")
                                .CometUFICommentListenersContextProvider,
                              {
                                children: i.jsx(
                                  d("CometUFIActionsContext")
                                    .CometUFIActionsContextProvider,
                                  {
                                    feedLocation: t,
                                    children: i.jsx(
                                      d("CometPostInformTreatmentContext")
                                        .CometPostInformTreatmentContextProvider,
                                      {
                                        children: i.jsx(
                                          c(
                                            "CometFeedStoryCallToActionTriggerContextProvider.react"
                                          ),
                                          {
                                            cta: a == null ? void 0 : a.bumpers,
                                            children: i.jsx(
                                              c("CometFeedMatchRenderer.react"),
                                              {
                                                match:
                                                  g == null
                                                    ? void 0
                                                    : (e = g.comet_sections) ==
                                                      null
                                                    ? void 0
                                                    : e.layout,
                                                props: {
                                                  aymt_footer: i.jsx(
                                                    c(
                                                      "CometFeedStoryAYMTFooterSection.react"
                                                    ),
                                                    { story: g, variables: f }
                                                  ),
                                                  call_to_action: i.jsx(
                                                    c(
                                                      "CometFeedStoryCallToActionSection.react"
                                                    ),
                                                    { story: g, variables: f }
                                                  ),
                                                  content: i.jsx(
                                                    c(
                                                      "CometFeedStoryPostInformTreatmentSection.react"
                                                    ),
                                                    {
                                                      story: g,
                                                      children: i.jsx(
                                                        c(
                                                          "CometFeedMatchRenderer.react"
                                                        ),
                                                        {
                                                          match:
                                                            g == null
                                                              ? void 0
                                                              : (o =
                                                                  g.comet_sections) ==
                                                                null
                                                              ? void 0
                                                              : o.content,
                                                          props: {
                                                            variables: f,
                                                          },
                                                          section: "content",
                                                          trackingData: q,
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                  context: i.jsx(
                                                    c(
                                                      "CometFeedStoryContextSection.react"
                                                    ),
                                                    {
                                                      feedLocation: t,
                                                      story: b,
                                                      storyDebugInfo: r,
                                                      variables: f,
                                                    }
                                                  ),
                                                  copyright_violation_header:
                                                    i.jsx(
                                                      c(
                                                        "CometFeedStoryCopyrightViolationHeaderSection.react"
                                                      ),
                                                      { story: g, variables: f }
                                                    ),
                                                  feedback: i.jsx(
                                                    c(
                                                      "CometFeedStoryFeedbackSection.react"
                                                    ),
                                                    { story: g, variables: f }
                                                  ),
                                                  footer: i.jsx(
                                                    d(
                                                      "CometPostInformTreatmentContext"
                                                    )
                                                      .CometPostInformTreatmentConditionalRenderer,
                                                    {
                                                      children: i.jsx(
                                                        c(
                                                          "CometFeedStoryFooterSection.react"
                                                        ),
                                                        {
                                                          story: b,
                                                          variables: f,
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                  header: i.jsx(
                                                    c(
                                                      "CometFeedStoryHeaderSection.react"
                                                    ),
                                                    { story: g, variables: f }
                                                  ),
                                                  outer_footer: i.jsx(
                                                    c(
                                                      "CometFeedStoryOuterFooterSection.react"
                                                    ),
                                                    { story: g, variables: f }
                                                  ),
                                                },
                                                section: "layout",
                                                trackingData: q,
                                              }
                                            ),
                                          }
                                        ),
                                      }
                                    ),
                                  }
                                ),
                              }
                            ),
                          ],
                        }
                      ),
                    }
                  ),
                }),
              }
            ),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var n = h !== void 0 ? h : (h = b("CometFeedStory_story.graphql"));
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedUnitStoryStrategy.react",
  [
    "CometFeedStory.react",
    "CometFeedStoryClickLoggerContainer.react",
    "CometFeedUnitStoryStrategy_feedUnit.graphql",
    "CometRelay",
    "CometSearchMatchedTermsContext",
    "OptimisticLoadingTypeEnum",
    "cr:1207300",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo,
      k = c("deferredLoadComponent")(
        c("requireDeferred")(
          "CometFeedStoryOptimisticWithStory.react"
        ).__setRef("CometFeedUnitStoryStrategy.react")
      ),
      l =
        h !== void 0
          ? h
          : (h = b("CometFeedUnitStoryStrategy_feedUnit.graphql"));
    function a(a) {
      var e = a.position,
        f = a.variables;
      a = d("CometRelay").useFragment(l, a.feedUnit);
      var g = a.creation_session_id,
        h = a.matched_terms,
        m = a.optimistic_loading_type,
        n = j(
          function () {
            return { matches: h };
          },
          [h]
        );
      e = i.jsx(c("CometFeedStoryClickLoggerContainer.react"), {
        story: a,
        children: i.jsx("div", {
          children: i.jsx(c("CometFeedStory.react"), {
            position: e,
            story: a,
            variables: f,
          }),
        }),
      });
      b("cr:1207300") != null && (e = i.jsx(b("cr:1207300"), { children: e }));
      e = i.jsx(c("CometSearchMatchedTermsContext").Provider, {
        value: n,
        children: e,
      });
      return k != null &&
        m != null &&
        m === c("OptimisticLoadingTypeEnum").SHOW_POST_PREVIEW
        ? i.jsx(k, {
            creationSessionID: g,
            optimisticLoadingType: m,
            children: e,
          })
        : e;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoryRenderLocation",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ACCOUNT_STATUS: "account_status",
      ACELA: "acela",
      ACTION_EXPERIENCE: "action_experience",
      ACTIVITY_AND_FEEDBACK_TEST: "activity_and_feedback_test",
      ACTIVITY_LOG: "activity_log",
      ACTOR_EXPERIENCE_APPEALS: "actor_experience_appeals",
      ACTOR_GATEWAY: "actor_gateway",
      ADMIN_FEED: "admin_feed",
      ADS_PREVIEW: "ads_preview",
      ADS_TRANSPARENCY_SHOW_ADS: "ads_transparency_show_ads",
      AGGREGATED_NOTIFICATIONS_PERMALINK: "aggregated_notifications_permalink",
      AGORA_BREAKING_NEWS: "agora_breaking_news",
      AGORA_DEEP_DIVE: "agora_deep_dive",
      AGORA_FEED: "agora_feed",
      AGORA_FUNDRAISERS_FEED: "agora_fundraisers_feed",
      AGORA_NEIGHBORHOOD_HELP_MY_POSTS_FEED:
        "agora_neighborhood_help_my_posts_feed",
      AGORA_NEIGHRBORHOOD_HELP_FEED: "agora_neighrborhood_help_feed",
      AGORA_PAGES_FEED: "agora_pages_feed",
      AGORA_SCHOOL_FEED: "agora_school_feed",
      AGORA_WEATHER_FEED: "agora_weather_feed",
      AGORA_YOUTH_HIGH_SCHOOL_DIGEST: "agora_youth_high_school_digest",
      ALBUM_FEED: "album_feed",
      APP_FEED: "app_feed",
      APPENDABLE_PROMPT: "appendable_prompt",
      ARTICLE_CONTEXT: "article_context",
      ASSET3D_PHOTO_FULLSCREEN: "asset3d_photo_fullscreen",
      ATHENS_FEED: "athens_feed",
      B2C_BOOKMARK: "b2c_bookmark",
      BIZ_DISCO_FEED: "biz_disco_feed",
      BIZWEB_HOME_AD_PREVIEW: "bizweb_home_ad_preview",
      BIZWEB_HOME_CARDS: "bizweb_home_cards",
      BLENDED_SEARCH_RESULTS: "blended_search",
      BREAKING_NEWS_COMPOSER: "breaking_news_composer",
      BREAKING_NEWS_COMPOSER_REMOVE: "breaking_news_composer_remove",
      BREAKUP_VIEW_POSTS_FEED: "breakup_view_posts_feed",
      BRIEF_ACTIVITY_LOG: "brief_activity_log",
      BULLETIN: "bulletin",
      BUSINESS_COMMENT_INBOX_TAB: "business_comment_inbox_tab",
      BUSINESS_FEED: "business_feed",
      BUY_AND_SELL: "buy_and_sell",
      CANDIDATE_PACKET_REVIEW: "candidate_packet_review",
      CENTRA_INVESTIGATION_FEED: "centra_investigation_feed",
      CM_FEED_VIEW: "cm_feed_view",
      CM_ORGANIC_CONTENT_PREVIEW_UFI: "cm_organic_content_preview_ufi",
      COLLEGE_HOMEPAGE: "college_community_homepage",
      COMET_MEDIA_VIEWER: "comet_media_viewer",
      COMET_RHC: "comet_rhc",
      COMET_SURVEY_GALLERY: "comet_survey_gallery",
      COMET_TAHOE: "comet_tahoe",
      COMMENT_INSIGHTS_FEED: "comment_insights_feed",
      COMMERCE_BOOKMARK: "commerce_bookmark",
      COMMUNITY_HELP_DRIVE: "community_help_drive",
      COMMUNITY_VIEW: "community_view",
      COMMUNITY_VIEW_DIRECT_MATCH: "community_view_direct_match",
      COMPOSER_PREVIEW: "composer_preview",
      COMPOUNDEYE_PII_STRIPPED: "compoundeye_pii_stripped",
      CONTEXTUAL_PROFILE_FEED: "contextual_profile_feed",
      CONTINUOUS_CLOSE: "continuous_close",
      CONVERSATION_NUB: "conversation_nub",
      CORE_APP_POST_INSIGHTS: "core_app_post_insights",
      CORONAVIRUS_COMMUNITY_HELP_FEED: "coronavirus_community_help_feed",
      CORONAVIRUS_HUB_FEED: "coronavirus_hub_feed",
      COVER_FEED: "cover_feed",
      COVER_IMMERSIVE: "cover_immersive",
      CREATOR_APP_INSPIRATION_FEED: "inspiration_feed",
      CRISIS_FEED: "crisis_feed",
      CROWDSOURCING_CARD: "crowdsourcing_card",
      CRS_FEED: "crs_feed",
      CURATED_COLLECTION_PAGE: "curated_collection_page",
      CUSTOM_FEED_TEST: "custom_feed_test",
      DISABLE_WARNING_SCREEN_CHECK: "disable_warning_screen_check",
      DISCOVERY_HUB_CLIMATE_SCIENCE_FEED: "discovery_hub_climate_science_feed",
      DISCOVERY_HUB_FEED: "discovery_hub_feed",
      EDIT_HISTORY: "edit_history",
      END_OF_FEED_UNIT_OVERLAY: "end_of_feed_unit_overlay",
      EVENT: "event",
      EVENT_PENDING_QUEUE: "event_pending_queue",
      EVENT_SCHEDULED_QUEUE: "event_scheduled_queue",
      EXPLORE_FEED: "explore_feed",
      EXPLORE_FEED_DEEP_DIVE: "explore_feed_deep_dive",
      FACEBOOK_360: "facebook_360",
      FACEBOOK_PLUGIN: "facebook_plugin",
      FAN_SUBMISSION_TOPIC: "fan_submission_topic",
      FB_SHOPPING_MALL: "fb_shopping_mall",
      FB_SHORTS_BOOKMARK: "fb_shorts_bookmark",
      FB_SHORTS_DISCOVER_HUB_DEEP_DIVE: "fb_shorts_discover_hub_deep_dive",
      FB_SHORTS_NOTIFICATION: "fb_shorts_notification",
      FB_SHORTS_PROFILE: "fb_shorts_profile",
      FB_SHORTS_PROFILE_VIDEO_DEEP_DIVE: "fb_shorts_profile_video_deep_dive",
      FB_SHORTS_TAB: "fb_shorts_tab",
      FB_SHORTS_VIDEO_DEEP_DIVE: "fb_shorts_video_deep_dive",
      FB_STORIES: "fb_stories",
      FBR: "fbr",
      FEED_IMMERSIVE: "feed_immersive",
      FEED_MOBILE: "feed_mobile",
      FILE_VIEWER: "file_viewer",
      FOX_FEED: "fox_feed",
      FOX_PERMALINK: "fox_permalink",
      FOX_RECOMMENDATIONS_FEED: "fox_recommendation_feed",
      FUNDRAISER_FOR_STORY_MORE_INFO_PAGE:
        "fundraiser_for_story_more_info_page",
      FUNDRAISER_HUB: "fundraiser_hub",
      FUNDRAISER_PAGE: "fundraiser_page",
      GAME_HUB_FEED: "game_hub_feed",
      GAMEROOM_FEED: "gameroom_feed",
      GAMES_FEED: "games_feed",
      GAMETIME_HIGHLIGHTS: "gametime_highlights",
      GAMING_FEED: "gaming_feed",
      GAMING_NEWS_FEED: "gaming_news_feed",
      GAMING_STATIC_UNIT: "gaming_static_unit",
      GAMING_VIDEO_CLIPS_LIBRARY: "gaming_video_clips_library",
      GAMING_VIDEO_STREAMER_HUB: "gaming_video_streamer_hub",
      GOV_DIGEST: "gov_digest",
      GRAMMAR_SEARCH: "grammar_search",
      GRATITUDE_LIBRARY: "gratitude_library",
      GROUP: "group",
      GROUP_ACTIVITY_LOG: "group_activity_log",
      GROUP_ADMIN_AUTONOMY_QUEUE: "group_admin_autonomy_queue",
      GROUP_ADMIN_HOME: "group_admin_home",
      GROUP_ADMIN_TO_MEMBER_FEEDBACK: "group_admin_to_member_feedback",
      GROUP_ALERTED_QUEUE: "group_alerted_queue",
      GROUP_BIO: "group_bio",
      GROUP_BUY_AND_SELL_DISCUSSION: "group_buy_and_sell_discussion",
      GROUP_COMMUNITY_HELP_FEED: "group_community_help_feed",
      GROUP_CONFLICTS: "group_conflicts",
      GROUP_DRAFT_QUEUE: "group_draft_queue",
      GROUP_FLAGGED_QUEUE: "group_flagged_queue",
      GROUP_GRID_ISLAND: "group_grid_island",
      GROUP_HOISTED: "group_hoisted",
      GROUP_IMMERSIVE: "group_immersive",
      GROUP_MALL: "group_mall",
      GROUP_MODERATION_ALERT_QUEUE: "group_moderation_alert_queue",
      GROUP_PENDING_QUEUE: "group_pending_queue",
      GROUP_PERMALINK: "group_permalink",
      GROUP_QUALITY: "group_quality",
      GROUP_QUESTIONS: "group_questions",
      GROUP_REPORT_QUEUE: "group_report_queue",
      GROUP_SCHEDULED_PENDING_QUEUE: "group_scheduled_pending_queue",
      GROUP_SCHEDULED_QUEUE: "group_scheduled_queue",
      GROUP_SERP: "group_serp",
      GROUP_SUBFEED: "group_subfeed",
      GROUP_UNITS: "group_units",
      GROUP_UNITS_PREVIEW: "group_units_preview",
      GROUP_VOICE: "group_voice",
      GROUPS_GSYM_SEE_MORE: "groups_gsym_see_more",
      GROUPS_LANDING: "groups_landing",
      GROUPS_MODMIN_REVIEW_FOLDER: "groups_modmin_review_folder",
      GROUPS_MY_POSTS: "groups_my_posts",
      GROUPS_SAVED_POSTS: "groups_saved_posts",
      GROUPS_TAB: "groups_tab",
      GROUPS_VIEWER_CONTENT_DELETED_POSTS:
        "groups_viewer_content_deleted_posts",
      GROUPS_VIEWER_CONTENT_FLAGGED: "groups_viewer_content_flagged",
      GROUPS_VIEWER_CONTENT_PENDING_POSTS:
        "groups_viewer_content_pending_posts",
      GROUPS_VIEWER_CONTENT_PUBLISHED_POSTS:
        "groups_viewer_content_published_posts",
      GROUPS_VIEWER_CONTENT_SCHEDULED_POSTS:
        "groups_viewer_content_scheduled_posts",
      HIGHLIGHTS_UNIT: "highlights_unit",
      HIRING_METRICS_DASHBOARD: "hiring_metrics_dashboard",
      HOME_BUBBLE: "home_bubble",
      HOMEPAGE_STREAM: "homepage_stream",
      IFR_DEEP_DIVE: "ifr_deep_dive",
      INSANT_ARTICLE: "instant_article",
      INSTANT_ARTICLE_RECIRCULATION: "instant_article_recirculation",
      INSTREAM_VIDEO_HOME: "instream_video_home",
      INSTREAM_VIDEO_MOBILE: "instream_video_mobile",
      INTEGRITY_CONTEXT: "integrity_context",
      JOBS_CAREER_HOME: "jobs_career_home",
      JOBS_CAREER_TRACK: "jobs_career_track",
      JOBS_MULTI_GROUP_BROWSER: "jobs_multi_group_browser",
      JOBS_NETWORK_TAB: "jobs_network_tab",
      JOBS_SINGLE_GROUP_BROWSER: "jobs_single_group_browser",
      JOBS_TAB: "jobs_tab",
      LINEAR_CHANNEL: "linear_channel",
      LIVE_COMPOSER_MOBILE: "live_composer_mobile",
      LIVE_EVENT: "live_event",
      LIVE_PRODUCER: "live_producer",
      LIVING_ROOM_REPLAY: "living_room_replay",
      LOCAL_ALERTS_DIGEST: "local_alerts_digest",
      LOCAL_COMMUNITY_FEED: "local_community_feed",
      LOCAL_COMMUNITY_FEED_HOISTED_SECTION:
        "local_community_feed_hoisted_section",
      LOCAL_COMMUNITY_PLACE_PREVIEW: "local_community_place_preview",
      LOCAL_COMMUNITY_PLACES_FEED: "local_community_places_feed",
      LOCAL_COMMUNITY_POPULAR_TOPICS_FEED:
        "local_community_popular_topics_feed",
      LOCAL_COMMUNITY_PROFILE: "local_community_profile",
      LOCAL_COMMUNITY_PROMPTS_FEED: "local_community_prompts_feed",
      LOCAL_COMMUNITY_REX_FEED: "local_community_rex_feed",
      LOCAL_COMMUNITY_REX_HUB: "local_community_rex_hub",
      LOCAL_SEARCH_RESULTS_PAGE: "local_search_results_page",
      LOCAL_SERP: "local_serp",
      LOCAL_SURFACE: "local_surface",
      LOGGED_OUT_FEED: "logged_out_feed",
      LUMOS: "lumos",
      MARKETPLACE: "marketplace",
      MARKETPLACE_B2C_REVIEW: "marketplace_b2c_review",
      MARKETPLACE_B2C_REVIEW_RESPONSE: "marketplace_b2c_review_response",
      MARKETPLACE_BSG_PROFILE: "marketplace_bsg_profile",
      MARKETPLACE_DISCUSSIONS: "marketplace_discussions",
      MARKETPLACE_LOCAL_SHOP_PAGE_POSTS: "marketplace_local_shop_page_posts",
      MARKETPLACE_MEGAMALL: "marketplace_megamall",
      MARKETPLACE_MESSENGER_REPORT_BUYER: "marketplace_messenger_report_buyer",
      MARKETPLACE_MESSENGER_REPORT_SELLER:
        "marketplace_messenger_report_seller",
      MARKETPLACE_PDP: "marketplace_pdp",
      MARKETPLACE_PDP_SELLER: "marketplace_pdp_seller",
      MARKETPLACE_PROFILE: "marketplace_profile",
      MARKETPLACE_PROFILE_BUYER: "marketplace_profile_buyer",
      MARKETPLACE_PROFILE_SELLER: "marketplace_profile_seller",
      MARKETPLACE_PROFILE_SELLER_CROSS_POST:
        "marketplace_profile_seller_cross_post",
      MARKETPLACE_RATING_CONFIRMATION: "marketplace_rating_confirmation",
      MARKETPLACE_RATING_CONFIRMATION_BUYER:
        "marketplace_rating_confirmation_buyer",
      MARKETPLACE_RATING_CONFIRMATION_SELLER:
        "marketplace_rating_confirmation_seller",
      MARKETPLACE_RATING_FLOW: "marketplace_rating_flow",
      MARKETPLACE_RATING_FLOW_BUYER: "marketplace_rating_flow_buyer",
      MARKETPLACE_RATING_FLOW_SELLER: "marketplace_rating_flow_seller",
      MARKETPLACE_SHOP_PDP: "marketplace_shop_pdp",
      MARKETPLACE_SHOP_PDP_SELLER: "marketplace_shop_pdp_seller",
      MARKETPLACE_SOCIAL_DISCUSSIONS_FEED:
        "marketplace_social_discussions_feed",
      MARKETPLACE_THREAD: "marketplace_thread",
      MARKETPLACE_THREAD_BUYER: "marketplace_thread_buyer",
      MARKETPLACE_THREAD_SELLER: "marketplace_thread_seller",
      MARKETPLACE_VEHICLE_ENTITY_PAGE_QUESTION_AND_ANSWER:
        "marketplace_vehicle_entity_page_question_and_answer",
      MARKETPLACE_VEHICLE_ENTITY_PAGE_REVIEW:
        "marketplace_vehicle_entity_page_review",
      MARKETPLACE_YOU_FEED: "marketplace_you_feed",
      MEDIA_MANAGER_HOME: "media_manager_home",
      MEDIA_MANAGER_INSIGHTS_BENCHMARKING_TRENDING_POSTS:
        "media_manager_insights_benchmarking_trending_posts",
      MEDIA_MANAGER_POST_INSIGHTS: "media_manager_post_insights",
      MEDIA_MANAGER_POSTS_TIMELINE: "media_manager_posts_timeline",
      MESSAGE_THREAD: "message_thread",
      MESSENGER_AD: "messenger_ad",
      MINI_FEED: "mini_feed",
      MISINFORMATION_FACT_CHECKER_APP: "misinformation_fact_checker_app",
      MONTHLY_ACTIVITY_DIGEST_FEED: "monthly_activity_digest_feed",
      MSITE_EMBEDDED_VIDEO_SPLASH: "msite_embedded_video_splash",
      MUSIC_HOME: "music_home",
      NATIVE_TEMPLATES: "native_templates",
      NBA_HUB_FEED: "nba_hub_feed",
      NEWS_FEED_DEEP_DIVE: "news_feed_deep_dive",
      NEWS_OCT_DRAFT_POST_PREVIEW: "news_oct_draft_post_preview",
      NEWS_STORYLINE_FEED: "news_storyline_feed",
      NEWS_STORYLINE_NEWSFEED_QP: "news_storyline_newsfeed_qp",
      NEWS_TAB: "news_tab",
      NEWSSTAND: "newsstand",
      NEWSSTAND_PERMALINK: "newsstand_permalink",
      NEXT_TOOL: "next_tool",
      NOTIF_CLOSE_FRIEND_FEED: "notif_close_friend_feed",
      NOTIF_DISTANT_FRIEND_FEED: "notif_distant_friend_feed",
      NOTIF_PUBLIC_FIGURE_FEED: "notif_public_figure_feed",
      NOTIF_PUBLIC_FIGURE_HIGHLIGHTS: "notif_public_figure_highlights",
      OCULUS_HUB_FEED: "oculus_hub_feed",
      OFFERS_TAB: "offers_tab",
      OPENGRAPH_DIALOG: "opengraph_dialog",
      ORGANIC_CONTENT_PREVIEW: "organic_content_preview",
      ORION_VIDEO_PLAYER: "orion_video_player",
      PAGE_BUSINESS_MEMORIES_FEED: "page_business_memories_feed",
      PAGE_CARDS: "page_cards",
      PAGE_INBOX: "page_inbox",
      PAGE_INBOX_POST_VIEW: "page_inbox_post_view",
      PAGE_LIVE_VIDEO_MODULE: "page_live_video_module",
      PAGE_QUALITY: "page_quality",
      PAGE_RECOMMENDATIONS_TAB_FEED: "page_recommendation_tab_feed",
      PAGE_RECOMMENDATIONS_TOOL: "page_recommendations_tool",
      PAGE_SURFACE_RECOMMENDATIONS: "page_surface_recommendations",
      PAGES_COMMUNITY_TAB: "pages_community_tab",
      PAGES_FEED: "pages_feed",
      PAGES_LIVE_TAB: "pages_live_tab",
      PARTNER_ASSESSMENT: "partner_assessment",
      PAYCHECK_PROTECTION_PROGRAM: "paycheck_protection_program",
      PERMALINK: "permalink",
      PERMALINK_CHAINING: "permalink_chaining",
      PERMALINK_IMMERSIVE: "permalink_immersive",
      PERSON_DRIVEN_ADS: "person_driven_ads",
      PFTF_DISCOVERY_HUB: "pftf_discovery_hub",
      PHOTO_REVIEW: "photo_review",
      PLACE_FEED: "place_feed",
      POLITICAL_POST_FEED: "political_post_feed",
      PRESENCE_FEED: "presence_feed",
      PROCUREMENT_REQUEST: "procurement_request",
      PRODUCT_DETAILS: "product_details",
      PRODUCT_QUESTION: "product_question",
      PROFESSIONAL_BUYER_PROGRAM: "professional_buyer_program",
      PROFILE_COMMUNITY: "profile_community",
      PROFILE_COMMUNITY_PERMALINK: "profile_community_permalink",
      PROFILE_FEATURED: "profile_featured",
      PROFILE_FRAME_DISCOVERY: "profile_frame_discovery",
      PROFILE_PLUS_TIMELINE: "profile_plus_timeline",
      PROJECT_NEO: "project_neo",
      PUBLIC_CONVERSATION_PROFILE: "public_conversation_profile",
      PUBLIC_FIGURE_POSTS_MINI_FEED: "public_figure_posts_mini_feed",
      PYI: "pyi",
      RACIAL_JUSTICE_HUB_FEED: "racial_justice_hub_feed",
      RAINBOW_EXPLORE: "rainbow_explore",
      REACTION_OVERLAY: "reaction_overlay",
      RECOMMENDATIONS_DASHBOARD: "recommendations_dashboard",
      RESHARES_DIALOG: "reshares_dialog",
      REVIEWS_FEED: "reviews_feed",
      SAVE_DISCOVERY_COLLECTIONS_EMBEDDED_VIEW:
        "save_discovery_collections_embedded_view",
      SAVE_DISCOVERY_IN_COLLECTIONS: "save_discovery_in_collections",
      SAVE_DISCOVERY_INTEREST_BASED: "save_discovery_interest_based",
      SAVE_DISCOVERY_PIVOTS: "save_discovery_pivot",
      SAVE_DISCOVERY_TAB: "save_discovery_tab",
      SEARCH: "search",
      SEARCH_RESULTS_PAGE: "search_results_page",
      SEARCH_TOPIC_DEEP_DIVE: "search_topic_deep_dive",
      SEARCH_TOPIC_DEEP_DIVE_GENERAL_GROUP_SCOPE:
        "search_topic_deep_dive_general_group_scope",
      SEARCH_TOPIC_DEEP_DIVE_SPECIFIC_GROUP_SCOPE:
        "search_topic_deep_dive_specific_group_scope",
      SEARCH_TOPIC_DEEP_DIVE_WATCH_SCOPE: "search_topic_deep_dive_watch_scope",
      SEARCH_VOYAGER: "search_voyager",
      SEEN_CONTENT: "seen_content",
      SERVICES_LOCAL_BUSINESS_DISCOVERY: "services_local_business_discovery",
      SHARING_SPACES: "sharing_spaces",
      SHOP_AND_DISCOVER_SURFACE: "shop_and_discover_surface",
      SHOP_TAB_MAIN_FEED: "shop_tab_main_feed",
      SHORT_FORM_VIDEO_CHAINING: "short_form_video_chaining",
      SIDE_FEED: "side_feed",
      SIGNAL_APP: "signal_app",
      SNAPTU_FEED: "snaptu_feed",
      SNAPTU_GROUPS_FEED: "snaptu_groups_feed",
      SNAPTU_TIMELINE: "snaptu_timeline",
      SNAPTU_VIDEO_HOME: "snaptu_video_home",
      SOCIAL_BALLOT: "social_ballot",
      SONG_OBJECT: "song_object",
      SRT: "srt",
      SRT_PROCUREMENT: "srt_procurement",
      STONEHENGE_CONSUMPTION: "stonehenge_consumption",
      SUMMARY: "summary",
      SUPPLIER_CONNECT: "supplier_connect",
      SUPPORT_INBOX: "support_inbox",
      SURVEY_GALLERY: "survey_gallery",
      THROWBACK_COMPOSER: "throwback_composer",
      TIMELINE: "timeline",
      TIMELINE_CONTEXT: "timeline_context",
      TIMELINE_ENTSTREAM: "timeline_entstream",
      TIMELINE_IMMERSIVE: "timeline_immersive",
      TOP_GROUP_POSTS_TOOL: "top_group_posts_tool",
      TOP_LIVE_VIDEOS: "top_live_videos",
      TOPIC_ENTITY_PAGE: "topic_entity_page",
      TOPIC_FEED: "topic_feed",
      TOWN_HALL: "town_hall",
      TRENDING_HOVERCARD: "trending_hovercard",
      TRENDING_ISSUES: "trending_issues",
      UNSPECIFIED: "unspecified",
      UX_RESEARCH_FEEDS_TOOL: "ux_research_feeds_tool",
      VIDEO_CHANNEL: "video_channel",
      VIDEO_HOME: "video_home",
      VIDEO_HOME_CHANNEL: "video_home_channel",
      VIDEO_HOME_FEED: "video_home_feed",
      VIDEO_INSTREAM: "video_instream",
      WOODHENGE_EXCLUSIVE_FEED: "woodhenge_exclusive_feed",
      WORK_CHAT_STORY_PREVIEW: "work_chat_story_preview",
      WORKPLACE_ADMIN_REPORTED_CONTENT: "workplace_admin_reported_content",
      WORKPLACE_APPROVALS: "workplace_approvals",
      WORKPLACE_COMMUNITY_NOTES: "workplace_community_notes",
      WORKPLACE_DISCOVERY_FEED: "workplace_discovery_feed",
      WORKPLACE_DRAFTED_FOR_OTHERS: "workplace_drafted_for_others",
      WORKPLACE_DRAFTED_FOR_YOU: "workplace_drafted_for_you",
      WORKPLACE_EMAIL_CAMPAIGN: "workplace_email_campaign",
      WORKPLACE_EMAIL_LANDING: "workplace_email_landing",
      WORKPLACE_ESM: "workplace_esm",
      WORKPLACE_FOLLOWEES_FEED: "workplace_followees_feed",
      WORKPLACE_HELPDESK: "workplace_helpdesk",
      WORKPLACE_HOVERCARD: "workplace_hovercard",
      WORKPLACE_KNOWLEDGE: "workplace_knowledge",
      WORKPLACE_LEARNING_UNIT: "workplace_learning_unit",
      WORKPLACE_NEWSFEED_PROMOTED_POST: "workplace_newsfeed_promoted_post",
      WORKPLACE_PLUGIN: "workplace_plugin",
      WORKPLACE_QA: "workplace_qa",
      WORKPLACE_QA_SEARCH: "workplace_qa_search",
      WORKPLACE_SHORTCUTS_FEED: "workplace_shortcuts_feed",
      WORKPLACE_TEAM_FEED: "workplace_team_feed",
      WORKSTREAM_STEP_FEED: "workstream_step_feed",
    });
    f["default"] = a;
  },
  66
);
