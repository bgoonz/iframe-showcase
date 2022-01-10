if (self.CavalryLogger) {
  CavalryLogger.start_js(["BaAs/9R"]);
}

__d(
  "StoriesCometLWRStrip_animations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCometLWRStrip_animations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesLWR_animations",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesFeedback_LWRAnimations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesFeedback_LWRAnimations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCometLWRStrip_animations",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesFeedback_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "name",
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "shouldEnableLiveInStories" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "StoriesFeedback_bucket",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "story_bucket_type",
            storageKey: null,
          },
          {
            alias: "owner",
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
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
                ],
                type: "Node",
                abstractKey: "__isNode",
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_viewer_friend",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_eligible_for_story_reply_bar",
                    storageKey: null,
                  },
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "short_name",
                    storageKey: null,
                  },
                ],
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_eligible_for_story_reply",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "viewer_profile_permissions",
                    storageKey: null,
                  },
                ],
                type: "Page",
                abstractKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Story",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "StoryCardStoryInfo",
                        kind: "LinkedField",
                        name: "story_card_info",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "can_viewer_text_reply",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "can_viewer_reply",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "Video",
                            kind: "LinkedField",
                            name: "story_video_thumbnail",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "broadcast_status",
                                storageKey: null,
                              },
                              {
                                condition: "shouldEnableLiveInStories",
                                kind: "Condition",
                                passingValue: !0,
                                selections: [
                                  {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "StoriesLivePageUFI_video",
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
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesFeedbackConsolidatedStickerPickerRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4034755856590124",
        metadata: {},
        name: "StoriesFeedbackConsolidatedStickerPickerRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesNavListItemPog_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "StoriesNavListItemPog_bucket",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
          kind: "LinkedField",
          name: "unified_stories",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "StoryCardStoryInfo",
                      kind: "LinkedField",
                      name: "story_card_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "story_card_type",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "StoryCardSeenState",
                      kind: "LinkedField",
                      name: "story_card_seen_state",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_seen_by_viewer",
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
        {
          alias: "owner",
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "story_bucket_owner",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: [
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Literal", name: "width", value: 40 },
                  ],
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "profile_picture",
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
              type: "Profile",
              abstractKey: "__isProfile",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_bucket_live",
          storageKey: null,
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesLogger_bucketNode.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { kind: "InlineDataFragment", name: "StoriesLogger_bucketNode" };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesLogger_bucketNode.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { kind: "InlineDataFragment", name: "useStoriesLogger_bucketNode" };
    e.exports = a;
  },
  null
);
__d(
  "storiesUpdateSeenStateMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "shouldEnableVideoAutoplay",
          },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
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
        },
        e = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "first_story_to_show",
          plural: !1,
          selections: [d],
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_bucket_seen_by_viewer",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
          selections: [
            d,
            {
              alias: null,
              args: null,
              concreteType: "StoryCardSeenState",
              kind: "LinkedField",
              name: "story_card_seen_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_seen_by_viewer",
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
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "storiesUpdateSeenStateMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "DirectMessageThreadUpdateSeenStateResponsePayload",
              kind: "LinkedField",
              name: "direct_message_thread_update_seen_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "bucket",
                  plural: !1,
                  selections: [
                    c,
                    d,
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "useStoriesRectangularStoryThumbnail_bucket",
                    },
                    e,
                    f,
                  ],
                  storageKey: null,
                },
                g,
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
          name: "storiesUpdateSeenStateMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "DirectMessageThreadUpdateSeenStateResponsePayload",
              kind: "LinkedField",
              name: "direct_message_thread_update_seen_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "bucket",
                  plural: !1,
                  selections: [
                    c,
                    d,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isStoryBucket",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "thumbnail_story_to_show",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "StoryCardStoryInfo",
                          kind: "LinkedField",
                          name: "story_card_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "height", value: 277 },
                                {
                                  kind: "Variable",
                                  name: "scale",
                                  variableName: "scale",
                                },
                                { kind: "Literal", name: "width", value: 156 },
                              ],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "story_thumbnail",
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
                              condition: "shouldEnableVideoAutoplay",
                              kind: "Condition",
                              passingValue: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Video",
                                  kind: "LinkedField",
                                  name: "story_video_thumbnail",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "url",
                                      storageKey: null,
                                    },
                                    d,
                                  ],
                                  storageKey: null,
                                },
                              ],
                            },
                          ],
                          storageKey: null,
                        },
                        d,
                      ],
                      storageKey: null,
                    },
                    e,
                    f,
                  ],
                  storageKey: null,
                },
                g,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3599525023480968",
          metadata: {},
          name: "storiesUpdateSeenStateMutation",
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
  "StoriesViewerSheetAttributionInfo_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetAttributionInfo_card",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "via",
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
              name: "name",
              storageKey: null,
            },
          ],
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
  "StoriesViewerSheetInsightsMetric_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetInsightsMetric_data",
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
          name: "value",
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
      type: "PageInsightsMetricData",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerSheetInsightsReactionSummaryMetric_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetInsightsReactionSummaryMetric_card",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryCardStoryInfo",
          kind: "LinkedField",
          name: "story_card_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "StoryCardFeedbackSummary",
              kind: "LinkedField",
              name: "feedback_summary",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "StoryCardReactionItemSummary",
                  kind: "LinkedField",
                  name: "reaction_summary",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "reaction_unicode",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "total_reaction_count",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
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
  "StoriesViewerSheetInsights_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        b = {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerSheetInsightsMetric_data",
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "StoriesViewerSheetInsights_card",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesViewerSheetInsightsReactionSummaryMetric_card",
          },
          {
            alias: null,
            args: null,
            concreteType: "StoryCardStoryInfo",
            kind: "LinkedField",
            name: "story_card_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "StoryCardInsightsData",
                kind: "LinkedField",
                name: "page_insights_data",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "PageInsightsMetricData",
                    kind: "LinkedField",
                    name: "navigation_metrics",
                    plural: !0,
                    selections: [a, b],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "PageInsightsMetricData",
                    kind: "LinkedField",
                    name: "engagement_metrics",
                    plural: !0,
                    selections: [
                      a,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value",
                        storageKey: null,
                      },
                      b,
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
            args: null,
            concreteType: "StoryCardSeenState",
            kind: "LinkedField",
            name: "story_card_seen_state",
            plural: !1,
            selections: [
              {
                alias: "totalSeenCount",
                args: [{ kind: "Literal", name: "type", value: "TOTAL" }],
                concreteType: "ApproximateCount",
                kind: "LinkedField",
                name: "seen_count",
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
                storageKey: 'seen_count(type:"TOTAL")',
              },
            ],
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
  "StoriesExtendedViewerOverlay_buckets.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "StoriesExtendedViewerOverlay_buckets",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesNavListItemPog_bucket",
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: a,
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Group",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Event",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseBucketContainer_animations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseBucketContainer_animations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseBucket_animations",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseBucketContainer_bucket.graphql",
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        c = [a];
      return {
        argumentDefinitions: [
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "showSuggestedStickerReplies",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "StoriesSuspenseBucketContainer_bucket",
        selections: [
          a,
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "useStoriesSuspensePermalinkUpdater_bucket",
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "useStoriesLogger_bucketNode",
                selections: [
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "StoriesLogger_bucketNode",
                    selections: [
                      a,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "story_bucket_owner",
                        plural: !1,
                        selections: [
                          b,
                          {
                            kind: "InlineFragment",
                            selections: c,
                            type: "Node",
                            abstractKey: "__isNode",
                          },
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_viewer_friend",
                                storageKey: null,
                              },
                            ],
                            type: "User",
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "story_bucket_type",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType:
                          "UnifiedStoryBucketToUnifiedStoriesConnection",
                        kind: "LinkedField",
                        name: "unified_stories",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType:
                              "UnifiedStoryBucketToUnifiedStoriesEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "Story",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [
                                  a,
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "organic_tracking",
                                    storageKey: null,
                                  },
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
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "media",
                                        plural: !1,
                                        selections: [
                                          {
                                            kind: "InlineFragment",
                                            selections: c,
                                            type: "Photo",
                                            abstractKey: null,
                                          },
                                          {
                                            kind: "InlineFragment",
                                            selections: c,
                                            type: "Video",
                                            abstractKey: null,
                                          },
                                          b,
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: "StoryCardStoryInfo",
                                    kind: "LinkedField",
                                    name: "story_card_info",
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType:
                                          "StoryCardToStoryViewersConnection",
                                        kind: "LinkedField",
                                        name: "story_viewers",
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
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: "StoryCardSeenState",
                                    kind: "LinkedField",
                                    name: "story_card_seen_state",
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_seen_by_viewer",
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
                ],
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_bucket_seen_by_viewer",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
                kind: "LinkedField",
                name: "unified_stories",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Story",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          a,
                          {
                            args: [
                              {
                                kind: "Variable",
                                name: "showSuggestedStickerReplies",
                                variableName: "showSuggestedStickerReplies",
                              },
                            ],
                            kind: "FragmentSpread",
                            name: "StoriesSuspenseBucket_card",
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
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "story_bucket_owner",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      a,
                      {
                        condition: "showSuggestedStickerReplies",
                        kind: "Condition",
                        passingValue: !0,
                        selections: [
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "short_name",
                                storageKey: null,
                              },
                            ],
                            type: "User",
                            abstractKey: null,
                          },
                        ],
                      },
                    ],
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "StoriesSuspenseBucketPlaceholder_owner",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "StoriesSuspenseBucket_owner",
                  },
                ],
                storageKey: null,
              },
            ],
            type: "StoryBucket",
            abstractKey: "__isStoryBucket",
          },
        ],
        type: "Node",
        abstractKey: "__isNode",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseBucketContainer_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseBucketContainer_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesProductionEndCard_user",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseBucketPlaceholder_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseBucketPlaceholder_owner",
      selections: [
        { args: null, kind: "FragmentSpread", name: "StoriesCardHeader_owner" },
      ],
      type: "CameraPostBucketOwnerUnion",
      abstractKey: "__isCameraPostBucketOwnerUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseBucketTransitionView_LWRAnimations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseBucketTransitionView_LWRAnimations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseBucketContainer_animations",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseBucketTransitionView_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "showSuggestedStickerReplies",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseBucketTransitionView_bucket",
      selections: [
        {
          args: [
            {
              kind: "Variable",
              name: "showSuggestedStickerReplies",
              variableName: "showSuggestedStickerReplies",
            },
          ],
          kind: "FragmentSpread",
          name: "StoriesSuspenseBucketContainer_bucket",
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseBucketTransitionView_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseBucketTransitionView_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseBucketContainer_user",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseContentPaneRefetchQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "blur" },
        c = { defaultValue: null, kind: "LocalArgument", name: "id" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStories",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStoriesDropdown",
        },
        g = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "showSuggestedStickerReplies",
        },
        h = [{ kind: "Variable", name: "id", variableName: "id" }],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        k = [j],
        l = {
          kind: "InlineFragment",
          selections: k,
          type: "Node",
          abstractKey: "__isNode",
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_profile_permissions",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_friend",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_status",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        q = [p],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        s = [r],
        t = [{ kind: "Literal", name: "first", value: 5 }],
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        v = {
          alias: "isActive",
          args: null,
          kind: "ScalarField",
          name: "is_currently_active",
          storageKey: null,
        },
        w = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        x = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: w,
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          concreteType: "MessengerMontageMessageActionsOfReactionEdge",
          kind: "LinkedField",
          name: "edges",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessengerMontageMessageAction",
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "reaction",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        z = [i, j],
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "total_reaction_count",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        E = {
          kind: "InlineFragment",
          selections: k,
          type: "GenericAttachmentMedia",
          abstractKey: null,
        },
        F = {
          kind: "InlineFragment",
          selections: k,
          type: "MontageImage",
          abstractKey: null,
        },
        G = {
          kind: "InlineFragment",
          selections: k,
          type: "MontageVideo",
          abstractKey: null,
        },
        H = { kind: "Variable", name: "scale", variableName: "scale" },
        I = [H],
        J = [
          { kind: "Literal", name: "framework", value: "WARNING_SCREENS" },
          { kind: "Literal", name: "location", value: "story" },
        ],
        K = [{ kind: "Literal", name: "type", value: "FRIENDS" }],
        L = [{ kind: "Literal", name: "type", value: "CONTACTS" }],
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        N = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        O = { kind: "Variable", name: "blur", variableName: "blur" },
        P = [
          { kind: "Literal", name: "height", value: 1920 },
          H,
          { kind: "Literal", name: "width", value: 1080 },
        ],
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        S = {
          args: null,
          fragment: b(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
        T = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: [M, S],
          storageKey: null,
        },
        U = [
          p,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "start",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "representation_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mime_codec",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "segment_type",
            storageKey: null,
          },
        ];
      S = [S];
      var V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "color",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        X = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 40 },
            H,
            { kind: "Literal", name: "width", value: 40 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: w,
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g],
          kind: "Fragment",
          metadata: null,
          name: "StoriesSuspenseContentPaneRefetchQuery",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "showSuggestedStickerReplies",
                      variableName: "showSuggestedStickerReplies",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "StoriesSuspenseContentPane_bucket",
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
          argumentDefinitions: [a, d, e, f, g, c],
          kind: "Operation",
          name: "StoriesSuspenseContentPaneRefetchQuery",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                i,
                j,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "story_bucket_owner",
                      plural: !1,
                      selections: [
                        i,
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isCameraPostBucketOwnerUnion",
                        },
                        l,
                        {
                          kind: "InlineFragment",
                          selections: [m],
                          type: "Page",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [n],
                          type: "User",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "UnifiedStoryBucketToUnifiedStoriesConnection",
                      kind: "LinkedField",
                      name: "unified_stories",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "UnifiedStoryBucketToUnifiedStoriesEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Story",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                j,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "StoryCardStoryInfo",
                                  kind: "LinkedField",
                                  name: "story_card_info",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_text_reply",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_reply",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Video",
                                      kind: "LinkedField",
                                      name: "story_video_thumbnail",
                                      plural: !1,
                                      selections: [
                                        o,
                                        {
                                          condition:
                                            "shouldEnableLiveInStories",
                                          kind: "Condition",
                                          passingValue: !0,
                                          selections: q,
                                        },
                                        j,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "StoryCardToStoryViewersConnection",
                                      kind: "LinkedField",
                                      name: "story_viewers",
                                      plural: !1,
                                      selections: s,
                                      storageKey: null,
                                    },
                                    {
                                      alias: "viewerList_viewers",
                                      args: t,
                                      concreteType:
                                        "StoryCardToStoryViewersConnection",
                                      kind: "LinkedField",
                                      name: "story_viewers",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "StoryCardToStoryViewersEdge",
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
                                                i,
                                                j,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    u,
                                                    {
                                                      alias: "lastActiveStatus",
                                                      args: null,
                                                      concreteType:
                                                        "LastActiveMessagesStatus",
                                                      kind: "LinkedField",
                                                      name: "last_active_messages_status",
                                                      plural: !1,
                                                      selections: [
                                                        v,
                                                        {
                                                          alias:
                                                            "lastActiveTime",
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "time",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    x,
                                                  ],
                                                  type: "User",
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "StoryCardFeedback",
                                              kind: "LinkedField",
                                              name: "feedback",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryCardFeedbackReactionStickerReaction",
                                                  kind: "LinkedField",
                                                  name: "reaction_sticker_reactions",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "reaction_sticker_id",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "MessengerMontageMessageReaction",
                                                  kind: "LinkedField",
                                                  name: "lightweight_reactions",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "MessengerMontageMessageActionsOfReactionConnection",
                                                      kind: "LinkedField",
                                                      name: "messaging_actions",
                                                      plural: !1,
                                                      selections: [y, r],
                                                      storageKey: null,
                                                    },
                                                    j,
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "UnifiedStoryReply",
                                                  kind: "LinkedField",
                                                  name: "story_replies",
                                                  plural: !0,
                                                  selections: z,
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "seen_time",
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
                                              name: "end_cursor",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "has_next_page",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: "story_viewers(first:5)",
                                    },
                                    {
                                      alias: "viewerList_viewers",
                                      args: t,
                                      filters: null,
                                      handle: "connection",
                                      key: "StoriesViewerSheetViewerListContent_viewerList_viewers",
                                      kind: "LinkedHandle",
                                      name: "story_viewers",
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryCardFeedbackSummary",
                                      kind: "LinkedField",
                                      name: "feedback_summary",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "StoryCardReactionItemSummary",
                                          kind: "LinkedField",
                                          name: "reaction_summary",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "reaction_unicode",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        A,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryCardInsightsData",
                                      kind: "LinkedField",
                                      name: "page_insights_data",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "PageInsightsMetricData",
                                          kind: "LinkedField",
                                          name: "navigation_metrics",
                                          plural: !0,
                                          selections: [B, u, C, D],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "PageInsightsMetricData",
                                          kind: "LinkedField",
                                          name: "engagement_metrics",
                                          plural: !0,
                                          selections: [B, C, u, D],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "viewer_sheet_style",
                                      storageKey: null,
                                    },
                                    {
                                      alias: "viewers",
                                      args: t,
                                      concreteType:
                                        "StoryCardToStoryViewersConnection",
                                      kind: "LinkedField",
                                      name: "story_viewers",
                                      plural: !1,
                                      selections: [
                                        r,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "nodes",
                                          plural: !0,
                                          selections: [i, x, j],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: "story_viewers(first:5)",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "organic_tracking",
                                  storageKey: null,
                                },
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
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "media",
                                      plural: !1,
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            j,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "accessibility_caption",
                                              storageKey: null,
                                            },
                                          ],
                                          type: "Photo",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: k,
                                          type: "Video",
                                          abstractKey: null,
                                        },
                                        i,
                                        l,
                                        E,
                                        F,
                                        G,
                                        {
                                          alias: "previewImage",
                                          args: I,
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "image",
                                          plural: !1,
                                          selections: w,
                                          storageKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: J,
                                              concreteType: "CIXScreen",
                                              kind: "LinkedField",
                                              name: "cix_screen",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "view_model",
                                                  plural: !1,
                                                  selections: [
                                                    i,
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "useViewerSheetPreviewImageURIList_previewURIs",
                                                          fragmentName:
                                                            "CometWarningScreenOverlay_data",
                                                          fragmentPropName:
                                                            "data",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      type: "OverlayWarningScreenViewModel",
                                                      abstractKey: null,
                                                    },
                                                    l,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey:
                                                'cix_screen(framework:"WARNING_SCREENS",location:"story")',
                                            },
                                          ],
                                          type: "CanRenderCIXScreen",
                                          abstractKey: "__isCanRenderCIXScreen",
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
                                  concreteType: "StoryCardSeenState",
                                  kind: "LinkedField",
                                  name: "story_card_seen_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_seen_by_viewer",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "seen_receipts_last_seen_time",
                                      storageKey: null,
                                    },
                                    {
                                      alias: "totalSeenCount",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value: "TOTAL",
                                        },
                                      ],
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: s,
                                      storageKey: 'seen_count(type:"TOTAL")',
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: "viewerCount",
                                  args: null,
                                  concreteType: "StoryCardSeenState",
                                  kind: "LinkedField",
                                  name: "story_card_seen_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: "friendViewerCount",
                                      args: K,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: s,
                                      storageKey: 'seen_count(type:"FRIENDS")',
                                    },
                                    {
                                      alias: "connectionViewerCount",
                                      args: L,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: s,
                                      storageKey: 'seen_count(type:"CONTACTS")',
                                    },
                                    {
                                      alias: "followerViewerCount",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value: "FOLLOWERS",
                                        },
                                      ],
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: s,
                                      storageKey:
                                        'seen_count(type:"FOLLOWERS")',
                                    },
                                    {
                                      alias: "newFriendViewerCount",
                                      args: K,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_receipt_unseen_count",
                                      plural: !1,
                                      selections: s,
                                      storageKey:
                                        'seen_receipt_unseen_count(type:"FRIENDS")',
                                    },
                                    {
                                      alias: "newConnectionViewerCount",
                                      args: L,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_receipt_unseen_count",
                                      plural: !1,
                                      selections: s,
                                      storageKey:
                                        'seen_receipt_unseen_count(type:"CONTACTS")',
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "story_overlays",
                                  plural: !0,
                                  selections: [
                                    i,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "StoryCardReactionSticker",
                                          kind: "LinkedField",
                                          name: "reaction_sticker",
                                          plural: !1,
                                          selections: [
                                            j,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "InspirationsStickerImageAsset",
                                              kind: "LinkedField",
                                              name: "sticker_asset",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "image_asset_url",
                                                  storageKey: null,
                                                },
                                                j,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "accessibility_label",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            A,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "StoryOverlayReactionSticker",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryCardPoll",
                                          kind: "LinkedField",
                                          name: "poll",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "StoryCardPollOption",
                                              kind: "LinkedField",
                                              name: "poll_options",
                                              plural: !0,
                                              selections: [
                                                M,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "vote_count",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "reshare_vote_count",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryCardPollOptionToVotersConnection",
                                                  kind: "LinkedField",
                                                  name: "voters",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "User",
                                                      kind: "LinkedField",
                                                      name: "nodes",
                                                      plural: !0,
                                                      selections: [
                                                        u,
                                                        x,
                                                        {
                                                          alias:
                                                            "lastActiveStatus",
                                                          args: null,
                                                          concreteType:
                                                            "LastActiveMessagesStatus",
                                                          kind: "LinkedField",
                                                          name: "last_active_messages_status",
                                                          plural: !1,
                                                          selections: [v],
                                                          storageKey: null,
                                                        },
                                                        j,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            j,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "style",
                                          storageKey: null,
                                        },
                                      ],
                                      type: "StoryOverlayPollSticker",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "creation_time",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "via",
                                  plural: !1,
                                  selections: [i, j, u],
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
                      args: null,
                      kind: "ScalarField",
                      name: "story_bucket_type",
                      storageKey: null,
                    },
                    {
                      alias: "owner",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "story_bucket_owner",
                      plural: !1,
                      selections: [
                        l,
                        {
                          kind: "InlineFragment",
                          selections: [
                            n,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_eligible_for_story_reply_bar",
                              storageKey: null,
                            },
                            u,
                            N,
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            u,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_eligible_for_story_reply",
                              storageKey: null,
                            },
                            m,
                            j,
                            {
                              alias: "lonitudinal_insights_qe_check",
                              args: [
                                {
                                  kind: "Literal",
                                  name: "qe_universe",
                                  value:
                                    "fame_stories_logitudinal_insights_mobile",
                                },
                              ],
                              concreteType: "QECheck",
                              kind: "LinkedField",
                              name: "qe_check",
                              plural: !1,
                              selections: [
                                {
                                  alias: "stories_insights_surface_enabled",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "bool_default",
                                      value: !1,
                                    },
                                    {
                                      kind: "Literal",
                                      name: "param_name",
                                      value: "stories_insights_surface_enabled",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "bool",
                                  storageKey:
                                    'bool(bool_default:false,param_name:"stories_insights_surface_enabled")',
                                },
                              ],
                              storageKey:
                                'qe_check(qe_universe:"fame_stories_logitudinal_insights_mobile")',
                            },
                          ],
                          type: "Page",
                          abstractKey: null,
                        },
                        i,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_bucket_seen_by_viewer",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "first_story_to_show",
                      plural: !1,
                      selections: k,
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "UnifiedStoryBucketToUnifiedStoriesConnection",
                              kind: "LinkedField",
                              name: "unified_stories",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "UnifiedStoryBucketToUnifiedStoriesEdge",
                                  kind: "LinkedField",
                                  name: "edges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Story",
                                      kind: "LinkedField",
                                      name: "node",
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
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "media",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: "blurredImage",
                                                  args: [
                                                    O,
                                                    {
                                                      kind: "Literal",
                                                      name: "height",
                                                      value: 350,
                                                    },
                                                    H,
                                                  ],
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "image",
                                                  plural: !1,
                                                  selections: w,
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: P,
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "image",
                                                  plural: !1,
                                                  selections: [Q, R],
                                                  storageKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: P,
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: w,
                                                      storageKey: null,
                                                    },
                                                    T,
                                                  ],
                                                  type: "Photo",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "animated_image_caption",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "original_width",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "original_height",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "broadcaster_origin",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "broadcast_id",
                                                      storageKey: null,
                                                    },
                                                    o,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_live_streaming",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_live_trace_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_looping",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_video_broadcast",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "loop_count",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_spherical",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_spherical_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "unsupported_browser_message",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "MusicVideoMetadata",
                                                      kind: "LinkedField",
                                                      name: "pmv_metadata",
                                                      plural: !1,
                                                      selections: z,
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_ncsr",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "permalink_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "captions_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "dash_prefetch_experimental",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoCaptionLocale",
                                                      kind: "LinkedField",
                                                      name: "video_available_captions_locales",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "localized_creation_method",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "InstreamExtraConfig",
                                                      kind: "LinkedField",
                                                      name: "instream_extra_config",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "instream_halo_delay_time_seconds",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPrefetchResources",
                                                      kind: "LinkedField",
                                                      name: "dash_prefetch_resources",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoPrefetchResource",
                                                          kind: "LinkedField",
                                                          name: "audio",
                                                          plural: !0,
                                                          selections: U,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoPrefetchResource",
                                                          kind: "LinkedField",
                                                          name: "video",
                                                          plural: !0,
                                                          selections: U,
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "context",
                                                          value: "DEFAULT",
                                                        },
                                                        {
                                                          kind: "Literal",
                                                          name: "supported",
                                                          value: [
                                                            "CometVideoPlayerOzImplementation",
                                                            "CometVideoPlayerShakaImplementation",
                                                            "CometVideoPlayerProgressiveImplementation",
                                                          ],
                                                        },
                                                      ],
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "comet_video_player_implementations",
                                                      plural: !0,
                                                      selections: [
                                                        i,
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DOzImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerOzImplementation",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DShakaImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerShakaImplementation",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DProgressiveImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerProgressiveImplementation",
                                                          abstractKey: null,
                                                        },
                                                      ],
                                                      storageKey:
                                                        'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_use_oz",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias:
                                                        "playable_url_dash",
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "scrubbing_preference",
                                                          value: "MPEG_DASH",
                                                        },
                                                      ],
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey:
                                                        'playable_url(scrubbing_preference:"MPEG_DASH")',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "dash_manifest",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "min_quality_preference",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_rss_podcast_video",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPlayerShakaLiveP2PInit",
                                                      kind: "LinkedField",
                                                      name: "video_player_shaka_live_p2p_init",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "json_encoded_video_data",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias:
                                                        "playable_url_quality_hd",
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "quality",
                                                          value: "HD",
                                                        },
                                                      ],
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey:
                                                        'playable_url(quality:"HD")',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "SphericalVideoFallbackUrls",
                                                      kind: "LinkedField",
                                                      name: "spherical_video_fallback_urls",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "hd",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "sd",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_gaming_video",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_latency_menu_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "fbls_tier",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_latency_sensitive_broadcast",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "comet_video_player_static_config",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "comet_video_player_context_sensitive_config",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPlayerShakaPerformanceLoggerInit",
                                                      kind: "LinkedField",
                                                      name: "video_player_shaka_performance_logger_init",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
                                                          fragmentName:
                                                            "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
                                                          fragmentPropName:
                                                            "init",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "video_player_shaka_performance_logger_should_sample",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "autoplay_gating_result",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "viewer_autoplay_setting",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_autoplay",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "drm_info",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoP2PSettings",
                                                      kind: "LinkedField",
                                                      name: "p2p_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ticket",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoP2PSettingsConfig",
                                                          kind: "LinkedField",
                                                          name: "config",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "delay_p2p_until_play",
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "disable_hivejava_for_livevc",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoHiveInitializationOptions",
                                                          kind: "LinkedField",
                                                          name: "hive_initialization_options",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                "VideoHiveInitializationOptionHiveJava",
                                                              kind: "LinkedField",
                                                              name: "hive_java",
                                                              plural: !1,
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "min_version",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                              ],
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "hive_tech_order",
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "debug_level",
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
                                                      concreteType:
                                                        "AudioSettings",
                                                      kind: "LinkedField",
                                                      name: "audio_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "video_volume_setting",
                                                          storageKey: null,
                                                        },
                                                        j,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "CaptionsSettings",
                                                      kind: "LinkedField",
                                                      name: "captions_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "always_show_captions",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_background_color",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_background_opacity",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_text_color",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_text_size",
                                                          storageKey: null,
                                                        },
                                                        j,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoBroadcastLowLatencyConfig",
                                                      kind: "LinkedField",
                                                      name: "broadcast_low_latency_config",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ll_desired_latency_ms",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ll_latency_tolerance_ms",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "audio_availability",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoMutedSegment",
                                                      kind: "LinkedField",
                                                      name: "muted_segments",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "mute_start_time_in_sec",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "mute_end_time_in_sec",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "SphericalVideoRenderer",
                                                      kind: "LinkedField",
                                                      name: "spherical_video_renderer",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "VideoPlayerRelay_video_spherical_video_renderer",
                                                          fragmentName:
                                                            "VideoPlayerSphericalRelay_sphericalVideoRenderer",
                                                          fragmentPropName:
                                                            "sphericalVideoRenderer",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "InstreamVideoAdBreaks",
                                                      kind: "LinkedField",
                                                      name: "instream_video_ad_breaks_comet",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "VideoPlayerRelay_video_instream_video_ad_breaks_comet",
                                                          fragmentName:
                                                            "InstreamVideoAdBreaksPlayer_adBreaks",
                                                          fragmentPropName:
                                                            "adBreaks",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoThumbnail",
                                                      kind: "LinkedField",
                                                      name: "preferred_thumbnail",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: "Image",
                                                          kind: "LinkedField",
                                                          name: "image",
                                                          plural: !1,
                                                          selections: w,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "image_preview_payload",
                                                          storageKey: null,
                                                        },
                                                        j,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "breakingStatus",
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "breaking_status",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "videoId",
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "id",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "isPremiere",
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_premiere",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "liveViewerCount",
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "live_viewer_count_read_only",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "rehearsalInfo",
                                                      args: null,
                                                      concreteType:
                                                        "LiveVideoRehearsalInfo",
                                                      kind: "LinkedField",
                                                      name: "rehearsal_info",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: "typeName",
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "__typename",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "publish_time",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "original_rotation",
                                                      storageKey: null,
                                                    },
                                                    Q,
                                                    R,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "TextWithEntities",
                                                      kind: "LinkedField",
                                                      name: "title",
                                                      plural: !1,
                                                      selections: [M],
                                                      storageKey: null,
                                                    },
                                                    T,
                                                    {
                                                      kind: "ClientExtension",
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "selected_latency_setting",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                  type: "Video",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: J,
                                                      concreteType: "CIXScreen",
                                                      kind: "LinkedField",
                                                      name: "cix_screen",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "view_model",
                                                          plural: !1,
                                                          selections: [
                                                            i,
                                                            {
                                                              kind: "InlineFragment",
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "content_id",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "render_type",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "top_objectionable_category",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "inform_session_id",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                              ],
                                                              type: "OverlayWarningScreenViewModel",
                                                              abstractKey: null,
                                                            },
                                                            l,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "view_model",
                                                          plural: !1,
                                                          selections: [
                                                            i,
                                                            {
                                                              kind: "InlineFragment",
                                                              selections: [
                                                                {
                                                                  args: null,
                                                                  documentName:
                                                                    "StoriesSuspenseCardMediaWarningScreen_data",
                                                                  fragmentName:
                                                                    "CometWarningScreenOverlay_data",
                                                                  fragmentPropName:
                                                                    "data",
                                                                  kind: "ModuleImport",
                                                                },
                                                              ],
                                                              type: "OverlayWarningScreenViewModel",
                                                              abstractKey: null,
                                                            },
                                                            l,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey:
                                                        'cix_screen(framework:"WARNING_SCREENS",location:"story")',
                                                    },
                                                  ],
                                                  type: "CanRenderCIXScreen",
                                                  abstractKey:
                                                    "__isCanRenderCIXScreen",
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
                                          concreteType: "StoryCardStoryInfo",
                                          kind: "LinkedField",
                                          name: "story_card_info",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "story_play_duration",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "FBStoryPortalInfo",
                                              kind: "LinkedField",
                                              name: "background_color_info",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "FBStoryColorInfo",
                                                  kind: "LinkedField",
                                                  name: "color_info",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "dominant_color",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                j,
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "DirectMessageThreadBucket",
                                              kind: "LinkedField",
                                              name: "bucket",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "camera_post_type",
                                                  storageKey: null,
                                                },
                                                {
                                                  condition:
                                                    "shouldEnableLiveInStories",
                                                  kind: "Condition",
                                                  passingValue: !0,
                                                  selections: [
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "is_bucket_live",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          condition:
                                                            "shouldEnableLiveInStoriesDropdown",
                                                          kind: "Condition",
                                                          passingValue: !0,
                                                          selections: [
                                                            {
                                                              kind: "InlineFragment",
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType:
                                                                    "Video",
                                                                  kind: "LinkedField",
                                                                  name: "live_video",
                                                                  plural: !1,
                                                                  selections: [
                                                                    p,
                                                                    j,
                                                                  ],
                                                                  storageKey:
                                                                    null,
                                                                },
                                                              ],
                                                              type: "DirectMessageThreadBucket",
                                                              abstractKey: null,
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      type: "StoryBucket",
                                                      abstractKey:
                                                        "__isStoryBucket",
                                                    },
                                                  ],
                                                },
                                                j,
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "TextWithEntities",
                                              kind: "LinkedField",
                                              name: "shareable_attribution",
                                              plural: !1,
                                              selections: [
                                                M,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "EntityAtRange",
                                                  kind: "LinkedField",
                                                  name: "ranges",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "entity",
                                                      plural: !1,
                                                      selections: [i, p, l],
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
                                              concreteType: "Video",
                                              kind: "LinkedField",
                                              name: "story_video_thumbnail",
                                              plural: !1,
                                              selections: [
                                                p,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "owner_has_professional_features",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: [
                                                {
                                                  kind: "Literal",
                                                  name: "first",
                                                  value: 10,
                                                },
                                              ],
                                              concreteType:
                                                "StoryCardReactionsConnection",
                                              kind: "LinkedField",
                                              name: "story_card_reactions",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryCardReactionsEdge",
                                                  kind: "LinkedField",
                                                  name: "edges",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "MessengerMontageMessageReaction",
                                                      kind: "LinkedField",
                                                      name: "node",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "messaging_actor",
                                                          plural: !1,
                                                          selections: z,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "MessengerMontageMessageActionsOfReactionConnection",
                                                          kind: "LinkedField",
                                                          name: "messaging_actions",
                                                          plural: !1,
                                                          selections: [r, y],
                                                          storageKey: null,
                                                        },
                                                        j,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey:
                                                "story_card_reactions(first:10)",
                                            },
                                            {
                                              alias: null,
                                              args: [
                                                {
                                                  kind: "Literal",
                                                  name: "caller_id",
                                                  value: "web_stories",
                                                },
                                              ],
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "guide_suggestions",
                                              plural: !0,
                                              selections: [
                                                i,
                                                {
                                                  kind: "TypeDiscriminator",
                                                  abstractKey:
                                                    "__isConversationGuideSuggestion",
                                                },
                                                {
                                                  condition:
                                                    "showSuggestedStickerReplies",
                                                  kind: "Condition",
                                                  passingValue: !0,
                                                  selections: [
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        j,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "label",
                                                          storageKey: null,
                                                        },
                                                        p,
                                                      ],
                                                      type: "Sticker",
                                                      abstractKey: null,
                                                    },
                                                  ],
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    j,
                                                    M,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "TextWithEntities",
                                                      kind: "LinkedField",
                                                      name: "text_with_entities",
                                                      plural: !1,
                                                      selections: S,
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "TextSuggestion",
                                                  abstractKey: null,
                                                },
                                                l,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: k,
                                                  type: "EmojiSuggestion",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: k,
                                                  type: "GiphySticker",
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey:
                                                'guide_suggestions(caller_id:"web_stories")',
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "story_card_type",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "organic_tracking_linkshim_cb",
                                          storageKey: null,
                                        },
                                        {
                                          alias: "link_attachment",
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "if_style",
                                              value: "share",
                                            },
                                          ],
                                          concreteType: "StoryAttachment",
                                          kind: "LinkedField",
                                          name: "attachments",
                                          plural: !0,
                                          selections: q,
                                          storageKey:
                                            'attachments(if_style:"share")',
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextFormatMetadata",
                                          kind: "LinkedField",
                                          name: "text_format_metadata",
                                          plural: !1,
                                          selections: [
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
                                              kind: "ScalarField",
                                              name: "font_style",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "font_weight",
                                              storageKey: null,
                                            },
                                            V,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "InspirationsCustomFont",
                                              kind: "LinkedField",
                                              name: "inspirations_custom_font_object",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "font_postscript_name",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "font_url",
                                                  storageKey: null,
                                                },
                                                j,
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: I,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "portrait_background_image",
                                              plural: !1,
                                              selections: w,
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
                                          ],
                                          storageKey: null,
                                        },
                                        T,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryBackgroundInfo",
                                          kind: "LinkedField",
                                          name: "story_default_background",
                                          plural: !1,
                                          selections: [
                                            V,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "GradientData",
                                              kind: "LinkedField",
                                              name: "gradient",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "css",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "portrait_image",
                                              plural: !1,
                                              selections: w,
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextWithEntities",
                                          kind: "LinkedField",
                                          name: "activity_description",
                                          plural: !1,
                                          selections: S,
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "first",
                                              value: 1,
                                            },
                                          ],
                                          concreteType:
                                            "InlineActivitiesConnection",
                                          kind: "LinkedField",
                                          name: "inline_activities",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "InlineActivity",
                                              kind: "LinkedField",
                                              name: "nodes",
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "TaggableActivityIcon",
                                                  kind: "LinkedField",
                                                  name: "taggable_activity_icon",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "height",
                                                          value: 16,
                                                        },
                                                        H,
                                                        {
                                                          kind: "Literal",
                                                          name: "width",
                                                          value: 16,
                                                        },
                                                      ],
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: w,
                                                      storageKey: null,
                                                    },
                                                    j,
                                                  ],
                                                  storageKey: null,
                                                },
                                                j,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey:
                                            "inline_activities(first:1)",
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "WithTagsConnection",
                                          kind: "LinkedField",
                                          name: "with_tags",
                                          plural: !1,
                                          selections: s,
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "explicit_place",
                                          plural: !1,
                                          selections: [
                                            i,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "entity_id",
                                              storageKey: null,
                                            },
                                            l,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryBackdrop",
                                          kind: "LinkedField",
                                          name: "backdrop",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "media",
                                              plural: !1,
                                              selections: [
                                                i,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: "imageBlurred",
                                                      args: [O, H],
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: w,
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "Photo",
                                                  abstractKey: null,
                                                },
                                                l,
                                                E,
                                                F,
                                                G,
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
                                          name: "story_overlays",
                                          plural: !0,
                                          selections: [
                                            {
                                              kind: "TypeDiscriminator",
                                              abstractKey: "__isStoryOverlay",
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesCardOverlayResharedPost_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayResharedPost",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesCardOverlayResharedContent_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayResharedContent",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesReactionSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayReactionSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesPollSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayPollSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesLinkSticker_link",
                                                  fragmentPropName: "link",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayLinkSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesTagSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayTagSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesLiveSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayLiveVideo",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesProductSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayProductSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                p,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryOverlayRectangle",
                                                  kind: "LinkedField",
                                                  name: "link_bounds",
                                                  plural: !1,
                                                  selections: [
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
                                              type: "StoryOverlayExternalSong",
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "action_links",
                                          plural: !0,
                                          selections: [
                                            i,
                                            p,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "title",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "CopyrightBannerInfo",
                                          kind: "LinkedField",
                                          name: "copyright_banner_info",
                                          plural: !1,
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "StoriesSuspenseCard_card",
                                              fragmentName:
                                                "CometCopyrightStoriesBanner_copyrightBannerInfo",
                                              fragmentPropName:
                                                "copyrightBannerInfo",
                                              kind: "ModuleImport",
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
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "story_bucket_owner",
                              plural: !1,
                              selections: [
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      condition: "showSuggestedStickerReplies",
                                      kind: "Condition",
                                      passingValue: !0,
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          selections: [N],
                                          type: "User",
                                          abstractKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                  type: "Node",
                                  abstractKey: "__isNode",
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [j, W, u, X, p, N],
                                  type: "User",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [j, W, u, X, p],
                                  type: "Page",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [u, j],
                                  type: "Group",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    u,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_viewer_host",
                                      storageKey: null,
                                    },
                                  ],
                                  type: "Event",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          type: "StoryBucket",
                          abstractKey: "__isStoryBucket",
                        },
                      ],
                      type: "Node",
                      abstractKey: "__isNode",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [u],
                      type: "StoryHighlightContainer",
                      abstractKey: null,
                    },
                  ],
                  type: "StoryBucket",
                  abstractKey: "__isStoryBucket",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4143638459082368",
          metadata: {},
          name: "StoriesSuspenseContentPaneRefetchQuery",
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
  "StoriesSuspenseContentPane_LWRAnimations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseContentPane_LWRAnimations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseFeedback_LWRAnimations",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseBucketTransitionView_LWRAnimations",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseContentPane_bucket.graphql",
  ["StoriesSuspenseContentPaneRefetchQuery.graphql"],
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
        c = [a],
        d = {
          kind: "InlineFragment",
          selections: c,
          type: "Node",
          abstractKey: "__isNode",
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "blur" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "shouldEnableLiveInStories" },
          { kind: "RootArgument", name: "shouldEnableLiveInStoriesDropdown" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "showSuggestedStickerReplies",
          },
        ],
        kind: "Fragment",
        metadata: {
          refetch: {
            connection: null,
            fragmentPathInResult: ["node"],
            operation: b("StoriesSuspenseContentPaneRefetchQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "StoriesSuspenseContentPane_bucket",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "StoriesBehaviorHelpContextProvider_owner",
              },
              d,
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesSuspenseFeedback_bucket",
          },
          {
            kind: "InlineDataFragmentSpread",
            name: "useStoriesLogger_bucketNode",
            selections: [
              {
                kind: "InlineDataFragmentSpread",
                name: "StoriesLogger_bucketNode",
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "story_bucket_owner",
                    plural: !1,
                    selections: [
                      e,
                      d,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_viewer_friend",
                            storageKey: null,
                          },
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "story_bucket_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "UnifiedStoryBucketToUnifiedStoriesConnection",
                    kind: "LinkedField",
                    name: "unified_stories",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "Story",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [
                              a,
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "organic_tracking",
                                storageKey: null,
                              },
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
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "media",
                                    plural: !1,
                                    selections: [
                                      {
                                        kind: "InlineFragment",
                                        selections: c,
                                        type: "Photo",
                                        abstractKey: null,
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: c,
                                        type: "Video",
                                        abstractKey: null,
                                      },
                                      e,
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: "StoryCardStoryInfo",
                                kind: "LinkedField",
                                name: "story_card_info",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType:
                                      "StoryCardToStoryViewersConnection",
                                    kind: "LinkedField",
                                    name: "story_viewers",
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
                              {
                                alias: null,
                                args: null,
                                concreteType: "StoryCardSeenState",
                                kind: "LinkedField",
                                name: "story_card_seen_state",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_seen_by_viewer",
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
            ],
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesSuspenseBucketChangeHandler_bucket",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesSuspenseIsLastCardHandler_bucket",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesSuspenseContentDataSelectors_bucket",
          },
          {
            args: [
              {
                kind: "Variable",
                name: "showSuggestedStickerReplies",
                variableName: "showSuggestedStickerReplies",
              },
            ],
            kind: "FragmentSpread",
            name: "StoriesSuspenseBucketTransitionView_bucket",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesSuspenseCardIndexInitializer_bucket",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesSuspenseViewerSheet_bucket",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesViewerSheetOverlay_bucket",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesBehaviorHelpContextProvider_bucket",
          },
          a,
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseContentPane_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseContentPane_user",
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
          name: "StoriesSuspenseBucketTransitionView_user",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseFeedback_LWRAnimations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseFeedback_LWRAnimations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesFeedback_LWRAnimations",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseFeedback_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseFeedback_bucket",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesSuspenseBucketSelectors_bucket",
        },
        { args: null, kind: "FragmentSpread", name: "StoriesFeedback_bucket" },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesSuspenseBucketChangeHandler_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesSuspenseBucketChangeHandler_bucket",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesSuspenseBucketSelectors_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesSuspenseBucketSelectors_bucket",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
          kind: "LinkedField",
          name: "unified_stories",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
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
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesSuspenseCardIndexInitializer_bucket.graphql",
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
        b = [a];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useStoriesSuspenseCardIndexInitializer_bucket",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_bucket_seen_by_viewer",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "first_story_to_show",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Story",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: b,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useStoriesSuspenseContentDataSelectors_bucket.graphql",
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
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useStoriesSuspenseContentDataSelectors_bucket",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Story",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useStoriesSuspenseIsLastCardHandler_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesSuspenseIsLastCardHandler_bucket",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesSuspenseContentDataSelectors_bucket",
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesSuspensePermalinkUpdater_bucket.graphql",
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
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useStoriesSuspensePermalinkUpdater_bucket",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Story",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesProductionEndCard_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesProductionEndCard_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesTrayCreateTile_imageUris",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseContentPaneRootWithEntryPointQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "blur" },
        c = { defaultValue: null, kind: "LocalArgument", name: "bucketID" },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "initialBucketID",
        },
        e = { defaultValue: !0, kind: "LocalArgument", name: "initialLoad" },
        f = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        g = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStories",
        },
        h = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStoriesDropdown",
        },
        i = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "showSuggestedStickerReplies",
        },
        j = [{ kind: "Variable", name: "id", variableName: "bucketID" }],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = [k],
        m = {
          kind: "InlineFragment",
          selections: l,
          type: "Node",
          abstractKey: "__isNode",
        },
        n = [{ kind: "Variable", name: "id", variableName: "initialBucketID" }],
        o = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "first_story_to_show",
          plural: !1,
          selections: l,
          storageKey: null,
        },
        p = {
          kind: "InlineFragment",
          selections: [
            o,
            {
              alias: null,
              args: null,
              concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
              kind: "LinkedField",
              name: "unified_stories",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: l,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "StoryBucket",
          abstractKey: "__isStoryBucket",
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_profile_permissions",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_friend",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_status",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        v = [u],
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        x = [w],
        y = [{ kind: "Literal", name: "first", value: 5 }],
        z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        A = {
          alias: "isActive",
          args: null,
          kind: "ScalarField",
          name: "is_currently_active",
          storageKey: null,
        },
        B = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        C = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: B,
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          concreteType: "MessengerMontageMessageActionsOfReactionEdge",
          kind: "LinkedField",
          name: "edges",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessengerMontageMessageAction",
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "reaction",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        E = [q, k],
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "total_reaction_count",
          storageKey: null,
        },
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        H = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
        I = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        J = {
          kind: "InlineFragment",
          selections: l,
          type: "GenericAttachmentMedia",
          abstractKey: null,
        },
        K = {
          kind: "InlineFragment",
          selections: l,
          type: "MontageImage",
          abstractKey: null,
        },
        L = {
          kind: "InlineFragment",
          selections: l,
          type: "MontageVideo",
          abstractKey: null,
        },
        M = { kind: "Variable", name: "scale", variableName: "scale" },
        N = [M],
        O = [
          { kind: "Literal", name: "framework", value: "WARNING_SCREENS" },
          { kind: "Literal", name: "location", value: "story" },
        ],
        P = [{ kind: "Literal", name: "type", value: "FRIENDS" }],
        Q = [{ kind: "Literal", name: "type", value: "CONTACTS" }],
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        T = { kind: "Variable", name: "blur", variableName: "blur" },
        U = [
          { kind: "Literal", name: "height", value: 1920 },
          M,
          { kind: "Literal", name: "width", value: 1080 },
        ],
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        X = {
          args: null,
          fragment: b(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
        Y = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: [R, X],
          storageKey: null,
        },
        Z = [
          u,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "start",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "representation_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mime_codec",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "segment_type",
            storageKey: null,
          },
        ];
      X = [X];
      var $ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "color",
          storageKey: null,
        },
        aa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        ba = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 40 },
            M,
            { kind: "Literal", name: "width", value: 40 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: B,
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i],
          kind: "Fragment",
          metadata: null,
          name: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
          selections: [
            {
              alias: "bucket",
              args: j,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    k,
                    {
                      args: [
                        {
                          kind: "Variable",
                          name: "showSuggestedStickerReplies",
                          variableName: "showSuggestedStickerReplies",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "StoriesSuspenseContentPane_bucket",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "story_bucket_owner",
                      plural: !1,
                      selections: [m],
                      storageKey: null,
                    },
                  ],
                  type: "StoryBucket",
                  abstractKey: "__isStoryBucket",
                },
              ],
              storageKey: null,
            },
            {
              condition: "initialLoad",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "initialBucket",
                  args: n,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [p],
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesSuspenseContentPane_LWRAnimations",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: l,
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
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesSuspenseContentPane_user",
                    },
                  ],
                  type: "User",
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
          argumentDefinitions: [a, c, d, e, f, i, g, h],
          kind: "Operation",
          name: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
          selections: [
            {
              alias: "bucket",
              args: j,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                q,
                k,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "story_bucket_owner",
                      plural: !1,
                      selections: [
                        q,
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isCameraPostBucketOwnerUnion",
                        },
                        m,
                        {
                          kind: "InlineFragment",
                          selections: [r],
                          type: "Page",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [s],
                          type: "User",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "UnifiedStoryBucketToUnifiedStoriesConnection",
                      kind: "LinkedField",
                      name: "unified_stories",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "UnifiedStoryBucketToUnifiedStoriesEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Story",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                k,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "StoryCardStoryInfo",
                                  kind: "LinkedField",
                                  name: "story_card_info",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_text_reply",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_reply",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Video",
                                      kind: "LinkedField",
                                      name: "story_video_thumbnail",
                                      plural: !1,
                                      selections: [
                                        t,
                                        {
                                          condition:
                                            "shouldEnableLiveInStories",
                                          kind: "Condition",
                                          passingValue: !0,
                                          selections: v,
                                        },
                                        k,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "StoryCardToStoryViewersConnection",
                                      kind: "LinkedField",
                                      name: "story_viewers",
                                      plural: !1,
                                      selections: x,
                                      storageKey: null,
                                    },
                                    {
                                      alias: "viewerList_viewers",
                                      args: y,
                                      concreteType:
                                        "StoryCardToStoryViewersConnection",
                                      kind: "LinkedField",
                                      name: "story_viewers",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "StoryCardToStoryViewersEdge",
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
                                                q,
                                                k,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    z,
                                                    {
                                                      alias: "lastActiveStatus",
                                                      args: null,
                                                      concreteType:
                                                        "LastActiveMessagesStatus",
                                                      kind: "LinkedField",
                                                      name: "last_active_messages_status",
                                                      plural: !1,
                                                      selections: [
                                                        A,
                                                        {
                                                          alias:
                                                            "lastActiveTime",
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "time",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    C,
                                                  ],
                                                  type: "User",
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "StoryCardFeedback",
                                              kind: "LinkedField",
                                              name: "feedback",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryCardFeedbackReactionStickerReaction",
                                                  kind: "LinkedField",
                                                  name: "reaction_sticker_reactions",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "reaction_sticker_id",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "MessengerMontageMessageReaction",
                                                  kind: "LinkedField",
                                                  name: "lightweight_reactions",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "MessengerMontageMessageActionsOfReactionConnection",
                                                      kind: "LinkedField",
                                                      name: "messaging_actions",
                                                      plural: !1,
                                                      selections: [D, w],
                                                      storageKey: null,
                                                    },
                                                    k,
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "UnifiedStoryReply",
                                                  kind: "LinkedField",
                                                  name: "story_replies",
                                                  plural: !0,
                                                  selections: E,
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "seen_time",
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
                                              name: "end_cursor",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "has_next_page",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: "story_viewers(first:5)",
                                    },
                                    {
                                      alias: "viewerList_viewers",
                                      args: y,
                                      filters: null,
                                      handle: "connection",
                                      key: "StoriesViewerSheetViewerListContent_viewerList_viewers",
                                      kind: "LinkedHandle",
                                      name: "story_viewers",
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryCardFeedbackSummary",
                                      kind: "LinkedField",
                                      name: "feedback_summary",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "StoryCardReactionItemSummary",
                                          kind: "LinkedField",
                                          name: "reaction_summary",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "reaction_unicode",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        F,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryCardInsightsData",
                                      kind: "LinkedField",
                                      name: "page_insights_data",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "PageInsightsMetricData",
                                          kind: "LinkedField",
                                          name: "navigation_metrics",
                                          plural: !0,
                                          selections: [G, z, H, I],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "PageInsightsMetricData",
                                          kind: "LinkedField",
                                          name: "engagement_metrics",
                                          plural: !0,
                                          selections: [G, H, z, I],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "viewer_sheet_style",
                                      storageKey: null,
                                    },
                                    {
                                      alias: "viewers",
                                      args: y,
                                      concreteType:
                                        "StoryCardToStoryViewersConnection",
                                      kind: "LinkedField",
                                      name: "story_viewers",
                                      plural: !1,
                                      selections: [
                                        w,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "nodes",
                                          plural: !0,
                                          selections: [q, C, k],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: "story_viewers(first:5)",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "organic_tracking",
                                  storageKey: null,
                                },
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
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "media",
                                      plural: !1,
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            k,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "accessibility_caption",
                                              storageKey: null,
                                            },
                                          ],
                                          type: "Photo",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: l,
                                          type: "Video",
                                          abstractKey: null,
                                        },
                                        q,
                                        m,
                                        J,
                                        K,
                                        L,
                                        {
                                          alias: "previewImage",
                                          args: N,
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "image",
                                          plural: !1,
                                          selections: B,
                                          storageKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: O,
                                              concreteType: "CIXScreen",
                                              kind: "LinkedField",
                                              name: "cix_screen",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "view_model",
                                                  plural: !1,
                                                  selections: [
                                                    q,
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "useViewerSheetPreviewImageURIList_previewURIs",
                                                          fragmentName:
                                                            "CometWarningScreenOverlay_data",
                                                          fragmentPropName:
                                                            "data",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      type: "OverlayWarningScreenViewModel",
                                                      abstractKey: null,
                                                    },
                                                    m,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey:
                                                'cix_screen(framework:"WARNING_SCREENS",location:"story")',
                                            },
                                          ],
                                          type: "CanRenderCIXScreen",
                                          abstractKey: "__isCanRenderCIXScreen",
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
                                  concreteType: "StoryCardSeenState",
                                  kind: "LinkedField",
                                  name: "story_card_seen_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_seen_by_viewer",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "seen_receipts_last_seen_time",
                                      storageKey: null,
                                    },
                                    {
                                      alias: "totalSeenCount",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value: "TOTAL",
                                        },
                                      ],
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: x,
                                      storageKey: 'seen_count(type:"TOTAL")',
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: "viewerCount",
                                  args: null,
                                  concreteType: "StoryCardSeenState",
                                  kind: "LinkedField",
                                  name: "story_card_seen_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: "friendViewerCount",
                                      args: P,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: x,
                                      storageKey: 'seen_count(type:"FRIENDS")',
                                    },
                                    {
                                      alias: "connectionViewerCount",
                                      args: Q,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: x,
                                      storageKey: 'seen_count(type:"CONTACTS")',
                                    },
                                    {
                                      alias: "followerViewerCount",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value: "FOLLOWERS",
                                        },
                                      ],
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'seen_count(type:"FOLLOWERS")',
                                    },
                                    {
                                      alias: "newFriendViewerCount",
                                      args: P,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_receipt_unseen_count",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'seen_receipt_unseen_count(type:"FRIENDS")',
                                    },
                                    {
                                      alias: "newConnectionViewerCount",
                                      args: Q,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_receipt_unseen_count",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'seen_receipt_unseen_count(type:"CONTACTS")',
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "story_overlays",
                                  plural: !0,
                                  selections: [
                                    q,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "StoryCardReactionSticker",
                                          kind: "LinkedField",
                                          name: "reaction_sticker",
                                          plural: !1,
                                          selections: [
                                            k,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "InspirationsStickerImageAsset",
                                              kind: "LinkedField",
                                              name: "sticker_asset",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "image_asset_url",
                                                  storageKey: null,
                                                },
                                                k,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "accessibility_label",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            F,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "StoryOverlayReactionSticker",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryCardPoll",
                                          kind: "LinkedField",
                                          name: "poll",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "StoryCardPollOption",
                                              kind: "LinkedField",
                                              name: "poll_options",
                                              plural: !0,
                                              selections: [
                                                R,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "vote_count",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "reshare_vote_count",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryCardPollOptionToVotersConnection",
                                                  kind: "LinkedField",
                                                  name: "voters",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "User",
                                                      kind: "LinkedField",
                                                      name: "nodes",
                                                      plural: !0,
                                                      selections: [
                                                        z,
                                                        C,
                                                        {
                                                          alias:
                                                            "lastActiveStatus",
                                                          args: null,
                                                          concreteType:
                                                            "LastActiveMessagesStatus",
                                                          kind: "LinkedField",
                                                          name: "last_active_messages_status",
                                                          plural: !1,
                                                          selections: [A],
                                                          storageKey: null,
                                                        },
                                                        k,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            k,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "style",
                                          storageKey: null,
                                        },
                                      ],
                                      type: "StoryOverlayPollSticker",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "creation_time",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "via",
                                  plural: !1,
                                  selections: [q, k, z],
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
                      args: null,
                      kind: "ScalarField",
                      name: "story_bucket_type",
                      storageKey: null,
                    },
                    {
                      alias: "owner",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "story_bucket_owner",
                      plural: !1,
                      selections: [
                        m,
                        {
                          kind: "InlineFragment",
                          selections: [
                            s,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_eligible_for_story_reply_bar",
                              storageKey: null,
                            },
                            z,
                            S,
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            z,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_eligible_for_story_reply",
                              storageKey: null,
                            },
                            r,
                            k,
                            {
                              alias: "lonitudinal_insights_qe_check",
                              args: [
                                {
                                  kind: "Literal",
                                  name: "qe_universe",
                                  value:
                                    "fame_stories_logitudinal_insights_mobile",
                                },
                              ],
                              concreteType: "QECheck",
                              kind: "LinkedField",
                              name: "qe_check",
                              plural: !1,
                              selections: [
                                {
                                  alias: "stories_insights_surface_enabled",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "bool_default",
                                      value: !1,
                                    },
                                    {
                                      kind: "Literal",
                                      name: "param_name",
                                      value: "stories_insights_surface_enabled",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "bool",
                                  storageKey:
                                    'bool(bool_default:false,param_name:"stories_insights_surface_enabled")',
                                },
                              ],
                              storageKey:
                                'qe_check(qe_universe:"fame_stories_logitudinal_insights_mobile")',
                            },
                          ],
                          type: "Page",
                          abstractKey: null,
                        },
                        q,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_bucket_seen_by_viewer",
                      storageKey: null,
                    },
                    o,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "UnifiedStoryBucketToUnifiedStoriesConnection",
                              kind: "LinkedField",
                              name: "unified_stories",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "UnifiedStoryBucketToUnifiedStoriesEdge",
                                  kind: "LinkedField",
                                  name: "edges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Story",
                                      kind: "LinkedField",
                                      name: "node",
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
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "media",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: "blurredImage",
                                                  args: [
                                                    T,
                                                    {
                                                      kind: "Literal",
                                                      name: "height",
                                                      value: 350,
                                                    },
                                                    M,
                                                  ],
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "image",
                                                  plural: !1,
                                                  selections: B,
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: U,
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "image",
                                                  plural: !1,
                                                  selections: [V, W],
                                                  storageKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: U,
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: B,
                                                      storageKey: null,
                                                    },
                                                    Y,
                                                  ],
                                                  type: "Photo",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "animated_image_caption",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "original_width",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "original_height",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "broadcaster_origin",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "broadcast_id",
                                                      storageKey: null,
                                                    },
                                                    t,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_live_streaming",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_live_trace_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_looping",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_video_broadcast",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "loop_count",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_spherical",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_spherical_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "unsupported_browser_message",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "MusicVideoMetadata",
                                                      kind: "LinkedField",
                                                      name: "pmv_metadata",
                                                      plural: !1,
                                                      selections: E,
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_ncsr",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "permalink_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "captions_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "dash_prefetch_experimental",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoCaptionLocale",
                                                      kind: "LinkedField",
                                                      name: "video_available_captions_locales",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "localized_creation_method",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "InstreamExtraConfig",
                                                      kind: "LinkedField",
                                                      name: "instream_extra_config",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "instream_halo_delay_time_seconds",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPrefetchResources",
                                                      kind: "LinkedField",
                                                      name: "dash_prefetch_resources",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoPrefetchResource",
                                                          kind: "LinkedField",
                                                          name: "audio",
                                                          plural: !0,
                                                          selections: Z,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoPrefetchResource",
                                                          kind: "LinkedField",
                                                          name: "video",
                                                          plural: !0,
                                                          selections: Z,
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "context",
                                                          value: "DEFAULT",
                                                        },
                                                        {
                                                          kind: "Literal",
                                                          name: "supported",
                                                          value: [
                                                            "CometVideoPlayerOzImplementation",
                                                            "CometVideoPlayerShakaImplementation",
                                                            "CometVideoPlayerProgressiveImplementation",
                                                          ],
                                                        },
                                                      ],
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "comet_video_player_implementations",
                                                      plural: !0,
                                                      selections: [
                                                        q,
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DOzImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerOzImplementation",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DShakaImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerShakaImplementation",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DProgressiveImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerProgressiveImplementation",
                                                          abstractKey: null,
                                                        },
                                                      ],
                                                      storageKey:
                                                        'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_use_oz",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias:
                                                        "playable_url_dash",
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "scrubbing_preference",
                                                          value: "MPEG_DASH",
                                                        },
                                                      ],
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey:
                                                        'playable_url(scrubbing_preference:"MPEG_DASH")',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "dash_manifest",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "min_quality_preference",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_rss_podcast_video",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPlayerShakaLiveP2PInit",
                                                      kind: "LinkedField",
                                                      name: "video_player_shaka_live_p2p_init",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "json_encoded_video_data",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias:
                                                        "playable_url_quality_hd",
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "quality",
                                                          value: "HD",
                                                        },
                                                      ],
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey:
                                                        'playable_url(quality:"HD")',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "SphericalVideoFallbackUrls",
                                                      kind: "LinkedField",
                                                      name: "spherical_video_fallback_urls",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "hd",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "sd",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_gaming_video",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_latency_menu_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "fbls_tier",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_latency_sensitive_broadcast",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "comet_video_player_static_config",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "comet_video_player_context_sensitive_config",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPlayerShakaPerformanceLoggerInit",
                                                      kind: "LinkedField",
                                                      name: "video_player_shaka_performance_logger_init",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
                                                          fragmentName:
                                                            "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
                                                          fragmentPropName:
                                                            "init",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "video_player_shaka_performance_logger_should_sample",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "autoplay_gating_result",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "viewer_autoplay_setting",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_autoplay",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "drm_info",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoP2PSettings",
                                                      kind: "LinkedField",
                                                      name: "p2p_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ticket",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoP2PSettingsConfig",
                                                          kind: "LinkedField",
                                                          name: "config",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "delay_p2p_until_play",
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "disable_hivejava_for_livevc",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoHiveInitializationOptions",
                                                          kind: "LinkedField",
                                                          name: "hive_initialization_options",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                "VideoHiveInitializationOptionHiveJava",
                                                              kind: "LinkedField",
                                                              name: "hive_java",
                                                              plural: !1,
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "min_version",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                              ],
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "hive_tech_order",
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "debug_level",
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
                                                      concreteType:
                                                        "AudioSettings",
                                                      kind: "LinkedField",
                                                      name: "audio_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "video_volume_setting",
                                                          storageKey: null,
                                                        },
                                                        k,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "CaptionsSettings",
                                                      kind: "LinkedField",
                                                      name: "captions_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "always_show_captions",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_background_color",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_background_opacity",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_text_color",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_text_size",
                                                          storageKey: null,
                                                        },
                                                        k,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoBroadcastLowLatencyConfig",
                                                      kind: "LinkedField",
                                                      name: "broadcast_low_latency_config",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ll_desired_latency_ms",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ll_latency_tolerance_ms",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "audio_availability",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoMutedSegment",
                                                      kind: "LinkedField",
                                                      name: "muted_segments",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "mute_start_time_in_sec",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "mute_end_time_in_sec",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "SphericalVideoRenderer",
                                                      kind: "LinkedField",
                                                      name: "spherical_video_renderer",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "VideoPlayerRelay_video_spherical_video_renderer",
                                                          fragmentName:
                                                            "VideoPlayerSphericalRelay_sphericalVideoRenderer",
                                                          fragmentPropName:
                                                            "sphericalVideoRenderer",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "InstreamVideoAdBreaks",
                                                      kind: "LinkedField",
                                                      name: "instream_video_ad_breaks_comet",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "VideoPlayerRelay_video_instream_video_ad_breaks_comet",
                                                          fragmentName:
                                                            "InstreamVideoAdBreaksPlayer_adBreaks",
                                                          fragmentPropName:
                                                            "adBreaks",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoThumbnail",
                                                      kind: "LinkedField",
                                                      name: "preferred_thumbnail",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: "Image",
                                                          kind: "LinkedField",
                                                          name: "image",
                                                          plural: !1,
                                                          selections: B,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "image_preview_payload",
                                                          storageKey: null,
                                                        },
                                                        k,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "breakingStatus",
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "breaking_status",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "videoId",
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "id",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "isPremiere",
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_premiere",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "liveViewerCount",
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "live_viewer_count_read_only",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: "rehearsalInfo",
                                                      args: null,
                                                      concreteType:
                                                        "LiveVideoRehearsalInfo",
                                                      kind: "LinkedField",
                                                      name: "rehearsal_info",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: "typeName",
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "__typename",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "publish_time",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "original_rotation",
                                                      storageKey: null,
                                                    },
                                                    V,
                                                    W,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "TextWithEntities",
                                                      kind: "LinkedField",
                                                      name: "title",
                                                      plural: !1,
                                                      selections: [R],
                                                      storageKey: null,
                                                    },
                                                    Y,
                                                    {
                                                      kind: "ClientExtension",
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "selected_latency_setting",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                  type: "Video",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: O,
                                                      concreteType: "CIXScreen",
                                                      kind: "LinkedField",
                                                      name: "cix_screen",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "view_model",
                                                          plural: !1,
                                                          selections: [
                                                            q,
                                                            {
                                                              kind: "InlineFragment",
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "content_id",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "render_type",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "top_objectionable_category",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "inform_session_id",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                              ],
                                                              type: "OverlayWarningScreenViewModel",
                                                              abstractKey: null,
                                                            },
                                                            m,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "view_model",
                                                          plural: !1,
                                                          selections: [
                                                            q,
                                                            {
                                                              kind: "InlineFragment",
                                                              selections: [
                                                                {
                                                                  args: null,
                                                                  documentName:
                                                                    "StoriesSuspenseCardMediaWarningScreen_data",
                                                                  fragmentName:
                                                                    "CometWarningScreenOverlay_data",
                                                                  fragmentPropName:
                                                                    "data",
                                                                  kind: "ModuleImport",
                                                                },
                                                              ],
                                                              type: "OverlayWarningScreenViewModel",
                                                              abstractKey: null,
                                                            },
                                                            m,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey:
                                                        'cix_screen(framework:"WARNING_SCREENS",location:"story")',
                                                    },
                                                  ],
                                                  type: "CanRenderCIXScreen",
                                                  abstractKey:
                                                    "__isCanRenderCIXScreen",
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
                                          concreteType: "StoryCardStoryInfo",
                                          kind: "LinkedField",
                                          name: "story_card_info",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "story_play_duration",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "FBStoryPortalInfo",
                                              kind: "LinkedField",
                                              name: "background_color_info",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "FBStoryColorInfo",
                                                  kind: "LinkedField",
                                                  name: "color_info",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "dominant_color",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                k,
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "DirectMessageThreadBucket",
                                              kind: "LinkedField",
                                              name: "bucket",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "camera_post_type",
                                                  storageKey: null,
                                                },
                                                {
                                                  condition:
                                                    "shouldEnableLiveInStories",
                                                  kind: "Condition",
                                                  passingValue: !0,
                                                  selections: [
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "is_bucket_live",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          condition:
                                                            "shouldEnableLiveInStoriesDropdown",
                                                          kind: "Condition",
                                                          passingValue: !0,
                                                          selections: [
                                                            {
                                                              kind: "InlineFragment",
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType:
                                                                    "Video",
                                                                  kind: "LinkedField",
                                                                  name: "live_video",
                                                                  plural: !1,
                                                                  selections: [
                                                                    u,
                                                                    k,
                                                                  ],
                                                                  storageKey:
                                                                    null,
                                                                },
                                                              ],
                                                              type: "DirectMessageThreadBucket",
                                                              abstractKey: null,
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      type: "StoryBucket",
                                                      abstractKey:
                                                        "__isStoryBucket",
                                                    },
                                                  ],
                                                },
                                                k,
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "TextWithEntities",
                                              kind: "LinkedField",
                                              name: "shareable_attribution",
                                              plural: !1,
                                              selections: [
                                                R,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "EntityAtRange",
                                                  kind: "LinkedField",
                                                  name: "ranges",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "entity",
                                                      plural: !1,
                                                      selections: [q, u, m],
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
                                              concreteType: "Video",
                                              kind: "LinkedField",
                                              name: "story_video_thumbnail",
                                              plural: !1,
                                              selections: [
                                                u,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "owner_has_professional_features",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: [
                                                {
                                                  kind: "Literal",
                                                  name: "first",
                                                  value: 10,
                                                },
                                              ],
                                              concreteType:
                                                "StoryCardReactionsConnection",
                                              kind: "LinkedField",
                                              name: "story_card_reactions",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryCardReactionsEdge",
                                                  kind: "LinkedField",
                                                  name: "edges",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "MessengerMontageMessageReaction",
                                                      kind: "LinkedField",
                                                      name: "node",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "messaging_actor",
                                                          plural: !1,
                                                          selections: E,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "MessengerMontageMessageActionsOfReactionConnection",
                                                          kind: "LinkedField",
                                                          name: "messaging_actions",
                                                          plural: !1,
                                                          selections: [w, D],
                                                          storageKey: null,
                                                        },
                                                        k,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey:
                                                "story_card_reactions(first:10)",
                                            },
                                            {
                                              alias: null,
                                              args: [
                                                {
                                                  kind: "Literal",
                                                  name: "caller_id",
                                                  value: "web_stories",
                                                },
                                              ],
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "guide_suggestions",
                                              plural: !0,
                                              selections: [
                                                q,
                                                {
                                                  kind: "TypeDiscriminator",
                                                  abstractKey:
                                                    "__isConversationGuideSuggestion",
                                                },
                                                {
                                                  condition:
                                                    "showSuggestedStickerReplies",
                                                  kind: "Condition",
                                                  passingValue: !0,
                                                  selections: [
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        k,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "label",
                                                          storageKey: null,
                                                        },
                                                        u,
                                                      ],
                                                      type: "Sticker",
                                                      abstractKey: null,
                                                    },
                                                  ],
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    k,
                                                    R,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "TextWithEntities",
                                                      kind: "LinkedField",
                                                      name: "text_with_entities",
                                                      plural: !1,
                                                      selections: X,
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "TextSuggestion",
                                                  abstractKey: null,
                                                },
                                                m,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: l,
                                                  type: "EmojiSuggestion",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: l,
                                                  type: "GiphySticker",
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey:
                                                'guide_suggestions(caller_id:"web_stories")',
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "story_card_type",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "organic_tracking_linkshim_cb",
                                          storageKey: null,
                                        },
                                        {
                                          alias: "link_attachment",
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "if_style",
                                              value: "share",
                                            },
                                          ],
                                          concreteType: "StoryAttachment",
                                          kind: "LinkedField",
                                          name: "attachments",
                                          plural: !0,
                                          selections: v,
                                          storageKey:
                                            'attachments(if_style:"share")',
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextFormatMetadata",
                                          kind: "LinkedField",
                                          name: "text_format_metadata",
                                          plural: !1,
                                          selections: [
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
                                              kind: "ScalarField",
                                              name: "font_style",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "font_weight",
                                              storageKey: null,
                                            },
                                            $,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "InspirationsCustomFont",
                                              kind: "LinkedField",
                                              name: "inspirations_custom_font_object",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "font_postscript_name",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "font_url",
                                                  storageKey: null,
                                                },
                                                k,
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: N,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "portrait_background_image",
                                              plural: !1,
                                              selections: B,
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
                                          ],
                                          storageKey: null,
                                        },
                                        Y,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryBackgroundInfo",
                                          kind: "LinkedField",
                                          name: "story_default_background",
                                          plural: !1,
                                          selections: [
                                            $,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "GradientData",
                                              kind: "LinkedField",
                                              name: "gradient",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "css",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "portrait_image",
                                              plural: !1,
                                              selections: B,
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextWithEntities",
                                          kind: "LinkedField",
                                          name: "activity_description",
                                          plural: !1,
                                          selections: X,
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "first",
                                              value: 1,
                                            },
                                          ],
                                          concreteType:
                                            "InlineActivitiesConnection",
                                          kind: "LinkedField",
                                          name: "inline_activities",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "InlineActivity",
                                              kind: "LinkedField",
                                              name: "nodes",
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "TaggableActivityIcon",
                                                  kind: "LinkedField",
                                                  name: "taggable_activity_icon",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "height",
                                                          value: 16,
                                                        },
                                                        M,
                                                        {
                                                          kind: "Literal",
                                                          name: "width",
                                                          value: 16,
                                                        },
                                                      ],
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: B,
                                                      storageKey: null,
                                                    },
                                                    k,
                                                  ],
                                                  storageKey: null,
                                                },
                                                k,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey:
                                            "inline_activities(first:1)",
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "WithTagsConnection",
                                          kind: "LinkedField",
                                          name: "with_tags",
                                          plural: !1,
                                          selections: x,
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "explicit_place",
                                          plural: !1,
                                          selections: [
                                            q,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "entity_id",
                                              storageKey: null,
                                            },
                                            m,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryBackdrop",
                                          kind: "LinkedField",
                                          name: "backdrop",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "media",
                                              plural: !1,
                                              selections: [
                                                q,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: "imageBlurred",
                                                      args: [T, M],
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: B,
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "Photo",
                                                  abstractKey: null,
                                                },
                                                m,
                                                J,
                                                K,
                                                L,
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
                                          name: "story_overlays",
                                          plural: !0,
                                          selections: [
                                            {
                                              kind: "TypeDiscriminator",
                                              abstractKey: "__isStoryOverlay",
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesCardOverlayResharedPost_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayResharedPost",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesCardOverlayResharedContent_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayResharedContent",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesReactionSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayReactionSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesPollSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayPollSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesLinkSticker_link",
                                                  fragmentPropName: "link",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayLinkSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesTagSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayTagSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesLiveSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayLiveVideo",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "StoriesSuspenseCardOverlays_card",
                                                  fragmentName:
                                                    "StoriesProductSticker_overlay",
                                                  fragmentPropName: "overlay",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "StoryOverlayProductSticker",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                u,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryOverlayRectangle",
                                                  kind: "LinkedField",
                                                  name: "link_bounds",
                                                  plural: !1,
                                                  selections: [
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
                                              type: "StoryOverlayExternalSong",
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "action_links",
                                          plural: !0,
                                          selections: [
                                            q,
                                            u,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "title",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "CopyrightBannerInfo",
                                          kind: "LinkedField",
                                          name: "copyright_banner_info",
                                          plural: !1,
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "StoriesSuspenseCard_card",
                                              fragmentName:
                                                "CometCopyrightStoriesBanner_copyrightBannerInfo",
                                              fragmentPropName:
                                                "copyrightBannerInfo",
                                              kind: "ModuleImport",
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
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "story_bucket_owner",
                              plural: !1,
                              selections: [
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      condition: "showSuggestedStickerReplies",
                                      kind: "Condition",
                                      passingValue: !0,
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          selections: [S],
                                          type: "User",
                                          abstractKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                  type: "Node",
                                  abstractKey: "__isNode",
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [k, aa, z, ba, u, S],
                                  type: "User",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [k, aa, z, ba, u],
                                  type: "Page",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [z, k],
                                  type: "Group",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    z,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_viewer_host",
                                      storageKey: null,
                                    },
                                  ],
                                  type: "Event",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          type: "StoryBucket",
                          abstractKey: "__isStoryBucket",
                        },
                      ],
                      type: "Node",
                      abstractKey: "__isNode",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [z],
                      type: "StoryHighlightContainer",
                      abstractKey: null,
                    },
                  ],
                  type: "StoryBucket",
                  abstractKey: "__isStoryBucket",
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                q,
                k,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: "profilePicture",
                      args: [
                        { kind: "Literal", name: "height", value: 150 },
                        M,
                        { kind: "Literal", name: "width", value: 150 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "profile_picture",
                      plural: !1,
                      selections: B,
                      storageKey: null,
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              condition: "initialLoad",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "initialBucket",
                  args: n,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [q, p, k],
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
                      args: [
                        { kind: "Literal", name: "variant", value: "www" },
                      ],
                      concreteType: "ViewerToStoriesLWRAnimationsConnection",
                      kind: "LinkedField",
                      name: "stories_lwr_animations",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "ViewerToStoriesLWRAnimationsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "StoryCardLWRAnimationConfig",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "feedback_reaction_identifier",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "InspirationsStickerAnimationAsset",
                                  kind: "LinkedField",
                                  name: "tap_animation_asset",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "keyframe_uri",
                                      storageKey: null,
                                    },
                                    k,
                                  ],
                                  storageKey: null,
                                },
                                k,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: 'stories_lwr_animations(variant:"www")',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: E,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "4339748059446297",
          metadata: {},
          name: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
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
  "StoriesSuspenseViewerSheetPageStoryContent_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseViewerSheetPageStoryContent_bucket",
      selections: [
        {
          alias: "owner",
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "story_bucket_owner",
          plural: !1,
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
                  alias: "lonitudinal_insights_qe_check",
                  args: [
                    {
                      kind: "Literal",
                      name: "qe_universe",
                      value: "fame_stories_logitudinal_insights_mobile",
                    },
                  ],
                  concreteType: "QECheck",
                  kind: "LinkedField",
                  name: "qe_check",
                  plural: !1,
                  selections: [
                    {
                      alias: "stories_insights_surface_enabled",
                      args: [
                        { kind: "Literal", name: "bool_default", value: !1 },
                        {
                          kind: "Literal",
                          name: "param_name",
                          value: "stories_insights_surface_enabled",
                        },
                      ],
                      kind: "ScalarField",
                      name: "bool",
                      storageKey:
                        'bool(bool_default:false,param_name:"stories_insights_surface_enabled")',
                    },
                  ],
                  storageKey:
                    'qe_check(qe_universe:"fame_stories_logitudinal_insights_mobile")',
                },
              ],
              type: "Page",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseViewerSheetPageStoryContent_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseViewerSheetPageStoryContent_card",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerSheetInsights_card",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerSheetAttributionInfo_card",
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "story_overlays",
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
              args: null,
              kind: "FragmentSpread",
              name: "StoriesViewerSheetPollResult_overlayPoll",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesViewerSheetStickerInteractionInfo_reactionStickers",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "StoryCardStoryInfo",
          kind: "LinkedField",
          name: "story_card_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "viewer_sheet_style",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "StoryCardSeenState",
          kind: "LinkedField",
          name: "story_card_seen_state",
          plural: !1,
          selections: [
            {
              alias: "totalSeenCount",
              args: [{ kind: "Literal", name: "type", value: "TOTAL" }],
              concreteType: "ApproximateCount",
              kind: "LinkedField",
              name: "seen_count",
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
              storageKey: 'seen_count(type:"TOTAL")',
            },
          ],
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
  "StoriesSuspenseViewerSheet_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseViewerSheet_bucket",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseViewerSheetSelfStoryContent_bucket",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseViewerSheetPageStoryContent_bucket",
        },
        {
          alias: null,
          args: null,
          concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
          kind: "LinkedField",
          name: "unified_stories",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "node",
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "useViewerSheetPreviewImageURIList_previewURIs",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesSuspenseViewerSheetSelfStoryContent_card",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesSuspenseViewerSheetPageStoryContent_card",
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
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerSheetOverlayFooter_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetOverlayFooter_card",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerSheetViewerListHeader_cardSeenState",
        },
        {
          alias: null,
          args: null,
          concreteType: "StoryCardStoryInfo",
          kind: "LinkedField",
          name: "story_card_info",
          plural: !1,
          selections: [
            {
              alias: "viewers",
              args: [{ kind: "Literal", name: "first", value: 5 }],
              concreteType: "StoryCardToStoryViewersConnection",
              kind: "LinkedField",
              name: "story_viewers",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "profile_picture",
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
              storageKey: "story_viewers(first:5)",
            },
          ],
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
  "StoriesViewerSheetOverlay_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetOverlay_bucket",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
          kind: "LinkedField",
          name: "unified_stories",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesViewerSheetOverlayFooter_card",
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
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerSheetStickerInteractionInfo_reactionStickers.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "StoriesViewerSheetStickerInteractionInfo_reactionStickers",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryCardReactionSticker",
          kind: "LinkedField",
          name: "reaction_sticker",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "total_reaction_count",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "InspirationsStickerImageAsset",
              kind: "LinkedField",
              name: "sticker_asset",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "image_asset_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "accessibility_label",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryOverlayReactionSticker",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerFooter.react",
  ["CometPagelet.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        className: "pcmqbax4 l9j0dhe7 nnctdnn4 n851cfcs",
        children: h.jsx(d("CometPagelet.react").Placeholder, {
          fallback: h.jsx(i, {}),
          name: "StoriesFooter",
          children: a.children,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var i = function () {
      return null;
    };
    g["default"] = a;
  },
  98
);
__d(
  "StorieslwrPlaybackContextProvider.react",
  ["StorieslwrPlaybackContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef;
    function a(a) {
      a = a.children;
      var b = i(null);
      return h.jsxs(c("StorieslwrPlaybackContext").Provider, {
        value: b,
        children: [
          a,
          h.jsx("div", {
            className: "kr520xx4 pmk7jnqg j83agx80 bp9cbjyn",
            ref: b,
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
  "StoriesLegacyProfilePhoto.react",
  [
    "BaseImage_DEPRECATED.react",
    "CometLoadingAnimation.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.auxiliary,
        d = a.loading,
        e = a.overlay,
        f = a.ringColor;
      f = f === void 0 ? "blue" : f;
      var g = a.size;
      g = g === void 0 ? 36 : g;
      a = a.src;
      return h.jsxs("div", {
        className: c("stylex").dedupe(
          {
            "border-top-start-radius-1": "s45kfl79",
            "border-top-end-radius-1": "emlxlaya",
            "border-bottom-end-radius-1": "bkmhp75w",
            "border-bottom-start-radius-1": "spb7xbtv",
            "border-top-style-0.4": "goun2846",
            "border-end-style-0.4": "ccm00jje",
            "border-bottom-style-0.4": "s44p3ltw",
            "border-start-style-0.4": "mk2mc5f4",
            "box-sizing-1": "rq0escxv",
            "display-1": "a8c37x1j",
            "position-1": "l9j0dhe7",
          },
          f === "blue"
            ? {
                "border-top-color-0.4": "ng4oes9w",
                "border-end-color-0.4": "epui8hbc",
                "border-bottom-color-0.4": "nxp5a7ae",
                "border-start-color-0.4": "og13rbbo",
              }
            : null,
          f === "gray"
            ? {
                "border-top-color-0.4": "qbxu24ho",
                "border-end-color-0.4": "bxzzcbxg",
                "border-bottom-color-0.4": "lxuwth05",
                "border-start-color-0.4": "h2mp5456",
              }
            : null,
          g === 36
            ? {
                "border-top-width-0.4": "qxh1up0x",
                "border-end-width-0.4": "qtyiw8t4",
                "border-bottom-width-0.4": "tpcyxxvw",
                "border-start-width-0.4": "k0bpgpbk",
                "height-1": "tv7at329",
                "padding-top-1": "jwdofwj8",
                "padding-end-1": "n8tt0mok",
                "padding-bottom-1": "r8blr3vg",
                "padding-start-1": "hyh9befq",
                "width-1": "thwo4zme",
              }
            : null,
          g === 48
            ? {
                "border-top-width-0.4": "r9khgwfr",
                "border-end-width-0.4": "fo76crq4",
                "border-bottom-width-0.4": "gpowb52r",
                "border-start-width-0.4": "npe0x507",
                "height-1": "m7zwrmfr",
                "padding-top-1": "mxxv4le4",
                "padding-end-1": "nhwee35o",
                "padding-bottom-1": "bvsi1cm3",
                "padding-start-1": "p4z1gpdk",
                "width-1": "tmrshh9y",
              }
            : null,
          g === 60
            ? {
                "border-top-width-0.4": "d0xz27nh",
                "border-end-width-0.4": "m269brjn",
                "border-bottom-width-0.4": "b2mspmbn",
                "border-start-width-0.4": "rt0cn7cn",
                "height-1": "cb02d2ww",
                "padding-top-1": "linoseic",
                "padding-end-1": "ihtri3yf",
                "padding-bottom-1": "pby63qed",
                "padding-start-1": "e9o6kcyi",
                "width-1": "ljni7pan",
              }
            : null,
          f === "blue-spinning"
            ? {
                "border-top-color-0.4": "jgf7e1nu",
                "border-end-color-0.4": "r7dfy6xl",
                "border-bottom-color-0.4": "d06cv69u",
                "border-start-color-0.4": "cdcbzqsl",
              }
            : null
        ),
        children: [
          h.jsx(
            c("BaseImage_DEPRECATED.react"),
            babelHelpers["extends"](
              {
                className:
                  "k4urcfbm datstx6m a8c37x1j spb7xbtv bkmhp75w emlxlaya s45kfl79",
                src: a,
              },
              d ? { loading: d } : {}
            )
          ),
          h.jsx("div", {
            className:
              "gwewmpg2 c2j1kjv0 pmk7jnqg jaqpu5ht oaz4zybt tghqpdut spb7xbtv bkmhp75w emlxlaya s45kfl79",
          }),
          b != null
            ? h.jsx("div", {
                className: "pmk7jnqg s95d9cuy eh5mwn1z",
                children: b,
              })
            : null,
          e != null
            ? h.jsx("div", {
                className:
                  "gwewmpg2 c2j1kjv0 pmk7jnqg taijpn5t jaqpu5ht j83agx80 tghqpdut spb7xbtv bkmhp75w emlxlaya s45kfl79 iz2mbcqi bp9cbjyn",
                children: e,
              })
            : null,
          f === "blue-spinning" &&
            (g === 36 || g === 60) &&
            h.jsx(c("CometLoadingAnimation.react"), { size: g }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCometLWRStrip.react",
  [
    "CometComponentWithKeyCommands.react",
    "CometRelay",
    "CometUFIReactionsMenuImpl.react",
    "StoriesCometLWRStrip_animations.graphql",
    "StoriesLWRKeyframe.react",
    "StoriesPauseReasons",
    "UFIReactionTypes",
    "emptyFunction",
    "react",
    "useStoriesLWR.react",
    "useThrottled",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useMemo,
      k = e.useState,
      l = c("UFIReactionTypes").ordering.map(function (a) {
        return { key: a };
      }),
      m = 100,
      n = l.length * 48;
    function a(a) {
      var e = a.animations,
        f = a.cardID,
        g = a.reactionTypes,
        o = a.setPause;
      a = !0;
      var p = k(!1),
        q = p[0],
        r = p[1];
      p = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesCometLWRStrip_animations.graphql")),
        e
      );
      e = c("useStoriesLWR.react")({
        animations: p,
        cardID: f,
        isClicked: a,
        setPause: o,
      });
      p = e[0];
      f = e[1];
      a = c("useThrottled")(f, m);
      e = j(
        function () {
          return g == null
            ? void 0
            : g.map(function (a) {
                return { key: a };
              });
        },
        [g]
      );
      f = ((f = e == null ? void 0 : e.length) != null ? f : 0) * 48;
      return i.jsx("div", {
        className: "gu00c43d taijpn5t j83agx80",
        style: { width: f || String(n) + "px" },
        children: i.jsxs(c("CometComponentWithKeyCommands.react"), {
          commandConfigs: [],
          children: [
            p.map(function (a) {
              return i.jsx(c("StoriesLWRKeyframe.react"), { kf: a }, a.key);
            }),
            i.jsx(c("CometUFIReactionsMenuImpl.react"), {
              disableAnimationPlayback: !q,
              enableVCTracking: !0,
              hideBackground: !0,
              initialReaction: 0,
              onClose: c("emptyFunction"),
              onHoverIn: function () {
                o(!0, d("StoriesPauseReasons").HOVER_ON_REACTION_ICON), r(!0);
              },
              onHoverOut: function () {
                o(!1, d("StoriesPauseReasons").HOVER_ON_REACTION_ICON), r(!1);
              },
              onReactionSelect: a,
              scrubbingMode: !1,
              shouldFocusOnShow: function () {
                return !1;
              },
              supportedReactions: e || l,
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
  "StoriesFeedbackConsolidatedStickerPickerRoot.entrypoint",
  [
    "CometStickerPickerFlyoutTagSelectorRoot.entrypoint",
    "JSResourceForInteraction",
    "StoriesFeedbackConsolidatedStickerPickerRootQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "StoriesFeedbackConsolidatedStickerPickerRoot.react"
    ).__setRef("StoriesFeedbackConsolidatedStickerPickerRoot.entrypoint");
    b = {
      getPreloadProps: function (a) {
        var b = a.flyoutTagsCount;
        a = a.flyoutTagsCursor;
        b = { count: b, cursor: a };
        return {
          entryPoints: {
            flyoutTagSelectorEntrypointReference: {
              entryPoint: c(
                "CometStickerPickerFlyoutTagSelectorRoot.entrypoint"
              ),
              entryPointParams: b,
            },
          },
          queries: {
            storiesFeedbackStickerQueryRef: {
              parameters: c(
                "StoriesFeedbackConsolidatedStickerPickerRootQuery$Parameters"
              ),
              variables: {
                mediaWidth: 98,
                queryType: "TRENDING",
                resultTypes: ["ANIMATION"],
                scale: d("WebPixelRatio").get(),
                stickerHeight: 80,
                stickerWidth: 80,
              },
            },
          },
        };
      },
      root: a,
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "StoriesFeedbackConsolidatedStickerPicker.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometPressable.react",
    "StoriesFeedbackConsolidatedStickerPickerRoot.entrypoint",
    "StoriesFeedbackFlowTypes",
    "StoriesLoggerContext",
    "StoriesPauseReasons",
    "StoriesSuspensePauseContext",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useContext,
      l = b.useState,
      m = 10;
    function a(a) {
      var b = a.onEmojiSelect,
        e = a.onGifSelect,
        f = a.onStickerSelect,
        g = a.onVisibilityChange;
      a = k(c("StoriesLoggerContext"));
      var n = a.logger;
      a = k(c("StoriesSuspensePauseContext"));
      var o = a.setPause;
      a = l(!1);
      var p = a[0],
        q = a[1];
      return j.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "end",
        entryPointParams: { flyoutTagsCount: m },
        onVisibilityChange: function (a) {
          a || (o(!1, d("StoriesPauseReasons").CLICK_STICKER_SELECTOR), q(!1)),
            g && g(a);
        },
        otherProps: {
          onEmojiSelect: b,
          onGifSelect: e,
          onStickerSelect: f,
          withArrow: !0,
        },
        popoverEntryPoint: c(
          "StoriesFeedbackConsolidatedStickerPickerRoot.entrypoint"
        ),
        position: "above",
        preloadTrigger: "button",
        children: function (a, b, e, f, g, k) {
          return j.jsx(c("CometPressable.react"), {
            "aria-label": h._("Stories Sticker Button"),
            onHoverIn: f,
            onHoverOut: g,
            onPress: function () {
              n.clickInteractiveFeedbackReplyButtonLog(
                d("StoriesFeedbackFlowTypes").StickerReplyTypes.STICKER
              ),
                o(!p, d("StoriesPauseReasons").CLICK_STICKER_SELECTOR),
                p ? e() : b(),
                q(!p);
            },
            onPressIn: k,
            ref: a,
            children: j.jsx(c("TetraIcon.react"), {
              color: "white",
              icon: p
                ? d("fbicon")._(i("710884"), 20)
                : d("fbicon")._(i("687988"), 20),
            }),
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
  "StoriesFeedbackStickerRepliesWrapper.react",
  ["StoriesFeedbackConsolidatedStickerPicker.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onEmojiSelect,
        d = a.onGifSelect,
        e = a.onStickerSelect;
      a = a.onVisibilityChange;
      return h.jsx("div", {
        className: "jwdofwj8 b3onmgus ph5uu5jm",
        children: h.jsx(c("StoriesFeedbackConsolidatedStickerPicker.react"), {
          onEmojiSelect: b,
          onGifSelect: d,
          onStickerSelect: e,
          onVisibilityChange: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesFeedbackKeyboardCommandsConfig",
  ["fbt", "CometKeys", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useMemo;
    function a(a) {
      var b = a.onEnter,
        d = a.onEscape;
      a = i(
        function () {
          return [
            {
              command: { key: c("CometKeys").ENTER },
              description: h._("Send story reply"),
              handler: b,
              triggerFromInputs: !0,
            },
            {
              command: { key: c("CometKeys").ESCAPE },
              description: h._("Stop reply editing"),
              handler: d,
              triggerFromInputs: !0,
            },
          ];
        },
        [b, d]
      );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesFeedbackDraftEditor.react",
  [
    "fbt",
    "ix",
    "CometComponentWithKeyCommands.react",
    "CometPressable.react",
    "DeferredDraftEditor.react",
    "StoriesFeedbackEditorStateContext",
    "StoriesFeedbackStickerRepliesWrapper.react",
    "StoriesLoggerContext",
    "StoriesLoggingConstants",
    "TetraIcon.react",
    "fbicon",
    "getPlainTextFromDeferredDraftEditorState",
    "react",
    "stylex",
    "useGlobalEventListener",
    "useStoriesFeedbackKeyboardCommandsConfig",
    "useStoriesSendReply",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = b.useEffect,
      n = b.useRef,
      o = b.useState,
      p = {
        accessibleElement: {
          clip: "svngc6pa",
          height: "ay7djpcl",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "pmk7jnqg",
          whiteSpace: "g0qnabr5",
          width: "rfua0xdk",
        },
        actionButtons: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          marginEnd: "l71ywycl",
        },
        feedbackDraftEditor: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          width: "k4urcfbm",
        },
        input: {
          height: "p1ueia1e",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
        sendButton: { marginStart: "kkf49tns" },
      };
    function a(a) {
      var b = a.cardID,
        e = a.onBlur,
        f = a.onFocus,
        g = a.onSend,
        q = a.ownerName;
      a = a.placeholder;
      var r = o(!1),
        s = r[0],
        t = r[1];
      r = o(!1);
      var u = r[0],
        v = r[1];
      r = l(c("StoriesFeedbackEditorStateContext"));
      var w = r.contextualReplyRef,
        x = r.contextualReplyShown,
        y = r.contextualReplyTapped,
        z = r.editorState,
        A = r.inputFocused,
        B = r.mostRecentTappedID,
        C = r.onEmojiSelect,
        D = r.resetEditorState,
        E = r.setContextualReplyTapped,
        F = r.setEditorState,
        G = r.setMostRecentTappedID;
      r = c("useStoriesSendReply")(q);
      var H = r.sendGif,
        I = r.sendSticker;
      q = l(c("StoriesLoggerContext"));
      var J = q.logger,
        K = n(null),
        L = n(null),
        M = n(!1),
        N = n(!1),
        O = n(null);
      m(
        function () {
          E(!1), v(!1), G(null);
        },
        [b, E, v, G]
      );
      c("useGlobalEventListener")("keydown", function (a) {
        var b = O.current;
        if (b && !a.target.contains(b)) return;
        b = String.fromCharCode(a.keyCode);
        b.match(/\w/) && (O.current && O.current.focus(), y && v(!0));
      });
      var P = k(
          function (a) {
            a === void 0 && (a = !0);
            if (M.current || N.current) return;
            window.clearTimeout(K.current);
            K.current = window.setTimeout(function () {
              t(!1), e(), a && O.current && O.current.blur();
            });
          },
          [e]
        ),
        Q = k(
          function (a) {
            a === void 0 && (a = !0),
              window.clearTimeout(K.current),
              a && (t(!0), f());
          },
          [t, f]
        );
      c("useGlobalEventListener")(
        "click",
        k(
          function (a) {
            if (!s) return;
            var b = L.current;
            if (a.target === b || b.contains(a.target)) return;
            P();
          },
          [s, P]
        )
      );
      var R = c("getPlainTextFromDeferredDraftEditorState")(z).trim(),
        S = R === "";
      r = k(
        function () {
          if (S) return;
          g(R);
          x &&
            J.replySentWhenSmartReplyShownLog(
              u,
              B,
              y,
              c("StoriesLoggingConstants").STORY_REPLY_TYPE.TEXT_SUGGESTION
            );
          D();
          P();
        },
        [x, y, u, P, J, B, S, g, D, R]
      );
      q = k(
        function (a) {
          a = a.stickerID;
          a != null && a !== "" && (I({ stickerID: a, storyID: b }, J), P());
        },
        [I, b, J, P]
      );
      var T = k(
          function (a) {
            H({ gifUrl: a.source.url, storyID: b }, J), P();
          },
          [H, b, J, P]
        ),
        U = c("useStoriesFeedbackKeyboardCommandsConfig")({
          onEnter: r,
          onEscape: P,
        });
      return j.jsxs("div", {
        className: c("stylex")(p.feedbackDraftEditor),
        onBlurCapture: function (a) {
          if (w.current != null && w.current.contains(a.relatedTarget)) return;
          P(a.target === O.current);
        },
        onFocusCapture: function (a) {
          Q(a.target === O.current);
        },
        ref: L,
        children: [
          j.jsx(c("CometComponentWithKeyCommands.react"), {
            commandConfigs: U,
            xstyle: p.input,
            children: j.jsx(c("DeferredDraftEditor.react"), {
              customStyleFn: function () {
                return {
                  caretColor: "white",
                  whiteSpace: "pre",
                  wordWrap: "normal",
                };
              },
              editorState: z,
              handleReturn: function (a) {
                a.preventDefault();
                return "handled";
              },
              onInputRefUpdate: function (a) {
                O.current = a;
              },
              onStateChange: function (a) {
                F(a);
              },
              placeholder: a,
            }),
          }),
          j.jsxs("div", {
            className: c("stylex")(
              p.actionButtons,
              !s && !A && p.accessibleElement
            ),
            children: [
              j.jsx(c("StoriesFeedbackStickerRepliesWrapper.react"), {
                onEmojiSelect: C,
                onGifSelect: T,
                onStickerSelect: q,
                onVisibilityChange: function (a) {
                  N.current = a;
                },
              }),
              j.jsx(c("CometPressable.react"), {
                "aria-label": h._("Send button for story text reply"),
                disabled: S,
                hideHoverOverlay: !0,
                onPress: r,
                testid: void 0,
                xstyle: p.sendButton,
                children: j.jsx(c("TetraIcon.react"), {
                  color: S ? "disabled" : "white",
                  icon: d("fbicon")._(i("579031"), 20),
                  size: 20,
                }),
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
  "storiesTestDisplay",
  ["StoriesGating", "cr:1014646"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (b("cr:1014646") === null || !d("StoriesGating").isTest()) return;
      a = b("cr:1014646").create(
        "div",
        { "data-testid": "test_display", style: "position:fixed" },
        a
      );
      var c = document.body;
      c != null && c.appendChild(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTextReplyBar.react",
  [
    "fbt",
    "StoriesFeedbackDraftEditor.react",
    "StoriesFeedbackEditorStateContext",
    "StoriesFeedbackStickerRepliesWrapper.react",
    "StoriesGating",
    "StoriesLoggerContext",
    "StoriesPauseReasons",
    "react",
    "storiesTestDisplay",
    "stylex",
    "useStoriesSendReply",
    "useStoriesShowEpdBlockToast",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useContext,
      l = b.useEffect,
      m = null;
    function a(a) {
      var b = c("useStoriesSendReply")(a.ownerName, a.isPage),
        e = b.sendGif,
        f = b.sendSticker,
        g = b.sendText,
        n = c("useStoriesShowEpdBlockToast")(),
        o = function () {
          m != null && (window.clearTimeout(m), (m = null));
        };
      l(o, []);
      b = k(c("StoriesLoggerContext"));
      var p = b.logger,
        q = function () {
          o(),
            a.onTransitionEnd != null &&
              (m = window.setTimeout(a.onTransitionEnd, 110));
        };
      b = k(c("StoriesFeedbackEditorStateContext"));
      var r = b.contextualReplyTapped,
        s = b.inputFocused,
        t = b.onEmojiSelect,
        u = b.onFocus,
        v = b.setInputFocused;
      b = j(
        function (b) {
          b = b.stickerID;
          b != null && b !== "" && f({ stickerID: b, storyID: a.cardID }, p);
        },
        [f, a.cardID, p]
      );
      var w = j(
          function (b) {
            e({ gifUrl: b.source.url, storyID: a.cardID }, p);
          },
          [e, a.cardID, p]
        ),
        x = function () {
          a.setPause(!1, d("StoriesPauseReasons").FOCUSE_ON_INPUT),
            v(!1),
            q(),
            a.onInputFocused(!1);
        },
        y = function () {
          o(), a.onTransitionEnd && a.onTransitionEnd();
        },
        z = function (b) {
          if (!d("StoriesGating").allowedByEPDClientFeatureBlock()) {
            n();
            return;
          }
          g({ message: b, storyID: a.cardID }, r, p, function (a) {
            (a == null || a.length === 0) &&
              c("storiesTestDisplay")("text reply mutation successful");
          });
        },
        A = s
          ? h._("Reply to {Story's owner's name}\u2026", [
              h._param("Story's owner's name", a.ownerName),
            ])
          : h._("Reply\u2026");
      return i.jsxs("div", {
        className: c("stylex").dedupe(
          {
            "align-items-1": "bp9cbjyn",
            "background-color-1": "cwj9ozl2",
            "border-top-start-radius-1": "sibfvsnu",
            "border-top-end-radius-1": "px9q9ucb",
            "border-bottom-end-radius-1": "j2ut9x2k",
            "border-bottom-start-radius-1": "p4hiznlx",
            "box-shadow-1": "dt9zfp0i",
            "display-1": "j83agx80",
            "flex-basis-1": "hyth8hjv",
            "height-1": "datstx6m",
            "overflow-x-1": "ni8dbmo4",
            "overflow-y-1": "stjgntxs",
            "position-1": "l9j0dhe7",
            "transition-duration-1": "mb8dcdod",
            "transition-property-1": "dnh7q1ot",
            "transition-timing-function-1": "nw2je8n7",
          },
          s ? { "flex-basis-1": "d8ncny3e" } : null,
          {
            "background-color-1": "g5ia77u1",
            "border-top-0.3": "r8h1u4ht",
            "border-end-0.3": "kzr5vqap",
            "border-bottom-0.3": "q2g104n7",
            "border-start-0.3": "ffmj59eh",
            "box-shadow-1": "ri5l3prv",
          }
        ),
        "data-testid": void 0,
        onTransitionEnd: y,
        children: [
          i.jsx("div", {
            className: c("stylex").dedupe(
              {
                "align-items-1": "bp9cbjyn",
                "color-1": "oo9gr5id",
                "display-1": "j83agx80",
                "font-size-1": "jagab5yi",
                "margin-start-1": "h676nmdw",
                "overflow-x-1": "ni8dbmo4",
                "overflow-y-1": "stjgntxs",
                "position-1": "l9j0dhe7",
                "width-1": "jh9azo0p",
              },
              {
                "color-1": "ljqsnud1",
                "margin-start-1": "mww98ynv",
                "width-1": "r62gjns8",
              },
              s ? { "width-1": "k4urcfbm" } : null
            ),
            children: i.jsx(c("StoriesFeedbackDraftEditor.react"), {
              cardID: a.cardID,
              hidden: a.hidden,
              onBlur: x,
              onFocus: u,
              onSend: z,
              ownerName: a.ownerName,
              placeholder: A.toString(),
            }),
          }),
          i.jsx("div", {
            className: (s ? "mkhogb32" : "") + " n722owx4",
            children: i.jsx(c("StoriesFeedbackStickerRepliesWrapper.react"), {
              onEmojiSelect: function (a) {
                u(), t(a);
              },
              onGifSelect: w,
              onStickerSelect: b,
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
  "StoriesFeedback.react",
  [
    "CometRelay",
    "Locale",
    "StoriesActorContext",
    "StoriesBehaviorHelpContext",
    "StoriesCometLWRStrip.react",
    "StoriesEnums",
    "StoriesFeedbackEditorStateContext",
    "StoriesFeedback_LWRAnimations.graphql",
    "StoriesFeedback_bucket.graphql",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseContuxContext",
    "StoriesTextReplyBar.react",
    "UFIReactionTypes",
    "cr:10199",
    "orEmptyArray",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useMemo;
    function a(a) {
      var e,
        f,
        g = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("StoriesFeedback_LWRAnimations.graphql")),
          a.LWRAnimations
        ),
        m = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("StoriesFeedback_bucket.graphql")),
          a.bucket
        ),
        n = k(c("StoriesActorContext")),
        o = n.actorID;
      n = k(c("StoriesSuspenseContuxContext"));
      var p = n.cardIndex;
      n = n.isLastCard;
      var q = k(c("StoriesBehaviorHelpContext")).getBucketType(),
        r = k(c("StoriesSuspenseBucketDataContext"));
      r = r.bucketData;
      r = r.isEndOfTray;
      var s = k(c("StoriesFeedbackEditorStateContext")),
        t = s.onTextInputFocused,
        u = s.setShowLWR,
        v = s.showLWR,
        w = s.textInputFocused,
        x =
          (m == null ? void 0 : m.story_bucket_type) ===
            d("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY ||
          (m == null ? void 0 : m.story_bucket_type) ===
            d("StoriesEnums").STORY_CARD_TYPES
              .ADMINED_ADDITIONAL_PROFILE_STORY ||
          (m == null ? void 0 : m.story_bucket_type) ===
            d("StoriesEnums").STORY_CARD_TYPES.PROFILE_PLUS_STORY ||
          (m == null ? void 0 : m.story_bucket_type) ===
            d("StoriesEnums").STORY_CARD_TYPES.SHARED_PAGE_STORY;
      s = l(
        function () {
          var a = m == null ? void 0 : m.owner;
          if (x) {
            var b = a == null ? void 0 : a.viewer_profile_permissions;
            b = b != null && b.includes("CREATE_CONTENT");
            b =
              b ||
              o ===
                (m == null ? void 0 : (b = m.owner) == null ? void 0 : b.id);
            var c =
                (a == null ? void 0 : a.is_eligible_for_story_reply) === !0 ||
                (a == null ? void 0 : a.is_eligible_for_story_reply_bar) === !0,
              e = a == null ? void 0 : a.name;
            return {
              isPage: !0,
              ownerName: e,
              repliesEnabled: c,
              repliesHidden: b,
            };
          } else {
            e =
              !a ||
              o === (a == null ? void 0 : a.id) ||
              (a == null ? void 0 : a.__typename) !== "User" ||
              (a == null ? void 0 : a.is_viewer_friend) !== !0 ||
              q === d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY;
            return {
              isPage: !1,
              ownerName:
                (a == null ? void 0 : a.short_name) != null
                  ? a == null
                    ? void 0
                    : a.short_name
                  : a == null
                  ? void 0
                  : a.name,
              repliesEnabled: !0,
              repliesHidden: e,
            };
          }
        },
        [o, q, x, m == null ? void 0 : m.owner]
      );
      e = c("orEmptyArray")(
        m == null ? void 0 : (e = m.unified_stories) == null ? void 0 : e.edges
      );
      e = e.map(function (a) {
        return a.node;
      });
      p = (e = e[p]) == null ? void 0 : e.story_card_info;
      e = (p == null ? void 0 : p.can_viewer_text_reply) || !1;
      var y = (p == null ? void 0 : p.can_viewer_reply) || !1;
      f =
        p == null
          ? void 0
          : (f = p.story_video_thumbnail) == null
          ? void 0
          : f.broadcast_status;
      var z = f === "LIVE" || f === "VOD_READY";
      z = z && x;
      var A = function () {
        w.current || u(!0);
      };
      n = s.repliesHidden || (n && r);
      r = d("Locale").isRTL();
      return j.jsxs("div", {
        className: c("stylex").dedupe(
          r ? {} : { "transform-0.1": "py2didcb" },
          {
            "display-1": "j83agx80",
            "flex-direction-1": "btwxx1t3",
            "height-1": "iwfcevqm",
            "position-1": "pmk7jnqg",
            "start-1": "kfkz5moi",
            "top-1": "rk01pc8j",
          },
          z
            ? { "justify-content-1": "i1fnvgqd", "width-1": "tjj5qdt7" }
            : { "justify-content-1": "taijpn5t", "width-1": "lqlvxoni" },
          r ? { "transform-0.1": "aaqftg4p" } : null,
          n ? { "display-1": "mkhogb32" } : null
        ),
        children: [
          z &&
            b("cr:10199") &&
            j.jsx(b("cr:10199"), {
              isLive: f === "LIVE",
              setPause: a.setPause,
              video: p == null ? void 0 : p.story_video_thumbnail,
            }),
          s.repliesEnabled &&
            e &&
            !z &&
            j.jsx(c("StoriesTextReplyBar.react"), {
              cardID: a.cardID,
              hidden: n,
              isPage: s.isPage,
              onInputFocused: t,
              onTransitionEnd: A,
              ownerName: s.ownerName,
              setPause: a.setPause,
            }),
          v &&
            y &&
            j.jsx(c("StoriesCometLWRStrip.react"), {
              animations: g,
              cardID: a.cardID,
              reactionTypes: z ? [c("UFIReactionTypes").LIKE] : null,
              setPause: a.setPause,
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
  "useStoriesFeedbackEditorState",
  [
    "DeferredDraftEditor.react",
    "EditorState",
    "EmojiInputDecorator",
    "EmojiSpan.react",
    "react",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState,
      l = function () {
        var a = c("DeferredDraftEditor.react").createEmptyComposerState();
        if (a.__type === "editor-state-based") {
          var b = a.draftEditorState.getDecorator();
          (b == null || b.getComponentForKey("EmojiInputDecorator")) &&
            (a = babelHelpers["extends"]({}, a, {
              draftEditorState: c("EditorState").set(a.draftEditorState, {
                decorator: new (c("EmojiInputDecorator"))(
                  c("EmojiSpan.react"),
                  b,
                  { size: 16 }
                ),
              }),
            }));
        }
        return a;
      };
    function a(a) {
      var b = k(function () {
          return l();
        }),
        d = b[0],
        e = b[1],
        f = j(((b = {}), (b[a] = d), b)),
        g = c("usePrevious")(a);
      i(
        function () {
          a !== g &&
            (f.current[a] == null && (f.current[a] = l()),
            g != null && (f.current[g] = d),
            e(f.current[a]));
        },
        [a, d, g]
      );
      b = h(
        function () {
          (f.current[a] = l()), e(f.current[a]);
        },
        [a]
      );
      return { editorState: d, resetEditorState: b, setEditorState: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesFeedbackEditorStateContextProvider.react",
  [
    "DraftModifier",
    "EditorState",
    "StoriesFeedbackEditorStateContext",
    "StoriesGating",
    "StoriesPauseReasons",
    "react",
    "useStoriesFeedbackEditorState",
    "useStoriesShowEpdBlockToast",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.cardID,
        e = a.children,
        f = a.setPause;
      a = c("useStoriesFeedbackEditorState")(b);
      var g = a.editorState,
        m = a.resetEditorState,
        n = a.setEditorState;
      b = l(!1);
      var o = b[0],
        p = b[1],
        q = k(!1),
        r = k(null);
      a = l(!0);
      var s = a[0],
        t = a[1];
      b = l(!1);
      var u = b[0],
        v = b[1];
      a = l(!1);
      var w = a[0],
        x = a[1];
      b = l(null);
      var y = b[0],
        z = b[1],
        A = c("useStoriesShowEpdBlockToast")(),
        B = i(
          function (a) {
            a &&
              (d("StoriesGating").allowedByEPDClientFeatureBlock() || A(),
              t(!1)),
              (q.current = a);
          },
          [t, A, q]
        ),
        C = i(
          function () {
            f(!0, d("StoriesPauseReasons").FOCUSE_ON_INPUT), p(!0), B(!0);
          },
          [B, p, f]
        ),
        D = i(
          function (a) {
            a = String.fromCodePoint(a[0]);
            g;
            if ((g == null ? void 0 : g.__type) === "editor-state-based") {
              var b = c("DraftModifier").replaceText(
                g.draftEditorState.getCurrentContent(),
                g.draftEditorState.getSelection(),
                a
              );
              b = babelHelpers["extends"]({}, g, {
                draftEditorState: c("EditorState").push(
                  g.draftEditorState,
                  b,
                  "insert-characters"
                ),
              });
            } else b = babelHelpers["extends"]({}, g, { text: a });
            n(b);
          },
          [g, n]
        );
      a = j(
        function () {
          return {
            contextualReplyRef: r,
            contextualReplyShown: w,
            contextualReplyTapped: u,
            editorState: g,
            inputFocused: o,
            mostRecentTappedID: y,
            onEmojiSelect: D,
            onFocus: C,
            onTextInputFocused: B,
            resetEditorState: m,
            setContextualReplyShown: x,
            setContextualReplyTapped: v,
            setEditorState: n,
            setInputFocused: p,
            setMostRecentTappedID: z,
            setShowLWR: t,
            showLWR: s,
            textInputFocused: q,
          };
        },
        [r, w, u, g, o, y, D, C, B, m, x, v, n, p, z, t, s, q]
      );
      return h.jsx(c("StoriesFeedbackEditorStateContext").Provider, {
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
  "StoriesNavListItemPog.react",
  [
    "ix",
    "CometRelay",
    "StoriesEnums",
    "StoriesLegacyProfilePhoto.react",
    "StoriesNavListItemPog_bucket.graphql",
    "TetraIcon.react",
    "cr:10631",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e,
        g,
        k = a.bucket,
        l = a.iconSize;
      a = a.isUploading;
      a = a === void 0 ? !1 : a;
      function m(a) {
        var b = a === d("StoriesEnums").STORY_CARD_TYPES.EVENT_STORY;
        a = a === d("StoriesEnums").STORY_CARD_TYPES.GROUP_STORY;
        if (a)
          return j.jsx(c("TetraIcon.react"), {
            color: "white",
            icon: d("fbicon")._(h("485091"), 20),
          });
        if (b)
          return j.jsx(c("TetraIcon.react"), {
            color: "white",
            icon: d("fbicon")._(h("875292"), 20),
          });
      }
      m.displayName = m.name + " [from " + f.id + "]";
      function n(a) {
        if (a == null) return !1;
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
          if (
            (d == null
              ? void 0
              : (d = d.story_card_seen_state) == null
              ? void 0
              : d.is_seen_by_viewer) === !1
          )
            return !0;
        }
        return !1;
      }
      function o(a) {
        if (a == null) return null;
        var b = null;
        a.forEach(function (a) {
          b =
            a == null
              ? void 0
              : (a = a.story_card_info) == null
              ? void 0
              : a.story_card_type;
        });
        return b;
      }
      k = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesNavListItemPog_bucket.graphql")),
        k
      );
      e =
        k == null
          ? void 0
          : (e = k.owner) == null
          ? void 0
          : (e = e.profile_picture) == null
          ? void 0
          : e.uri;
      g =
        k == null ? void 0 : (g = k.unified_stories) == null ? void 0 : g.edges;
      g =
        g == null
          ? []
          : g.map(function (a) {
              return a.node;
            });
      o = o(g);
      n = n(g);
      g = (a === !0 && "blue-spinning") || (n ? "blue" : "gray");
      n = (a = k == null ? void 0 : k.is_bucket_live) != null ? a : !1;
      k = m(o);
      if (e == null) return null;
      return n && b("cr:10631")
        ? j.jsx(b("cr:10631"), {
            bucket: null,
            profilePicUri: e,
            size: "medium",
          })
        : j.jsx(c("StoriesLegacyProfilePhoto.react"), {
            overlay: k,
            ringColor: g,
            size: (a = l) != null ? a : 60,
            src: e,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "AttemptToSendReplyFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743085");
    c = b("FalcoLoggerInternal").create("attempt_to_send_reply", a);
    e.exports = c;
  },
  null
);
__d(
  "CloseStoryFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743371");
    c = b("FalcoLoggerInternal").create("close_story", a);
    e.exports = c;
  },
  null
);
__d(
  "FbStoriesVisitPageFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1857077");
    c = b("FalcoLoggerInternal").create("fb_stories_visit_page", a);
    e.exports = c;
  },
  null
);
__d(
  "OpenStoryFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744084");
    c = b("FalcoLoggerInternal").create("open_story", a);
    e.exports = c;
  },
  null
);
__d(
  "StoriesInteractiveFeedbackFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744405");
    c = b("FalcoLoggerInternal").create("stories_interactive_feedback", a);
    e.exports = c;
  },
  null
);
__d(
  "StoryMediaViewFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744410");
    c = b("FalcoLoggerInternal").create("story_media_view", a);
    e.exports = c;
  },
  null
);
__d(
  "StoryNavigationFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744411");
    c = b("FalcoLoggerInternal").create("story_navigation", a);
    e.exports = c;
  },
  null
);
__d(
  "StoriesLogger",
  [
    "AttemptToSendReplyFalcoEvent",
    "Banzai",
    "CloseStoryFalcoEvent",
    "CometRelay",
    "DeleteMediaAttemptedFalcoEvent",
    "DirectMessagingTypedLogger",
    "FBLogger",
    "FBStoriesBanzaiConstants",
    "FbStoriesVisitPageFalcoEvent",
    "OpenMediaFalcoEvent",
    "OpenSeenSummaryFalcoEvent",
    "OpenStoryFalcoEvent",
    "StoriesFeedbackFlowTypes",
    "StoriesGating",
    "StoriesInteractiveFeedbackFalcoEvent",
    "StoriesLoggerHelper",
    "StoriesLoggerSession",
    "StoriesLogger_bucketNode.graphql",
    "StoriesLoggingConstants",
    "StoriesPauseReasons",
    "StoriesTestUtils",
    "StoriesUtils",
    "StoryMediaViewFalcoEvent",
    "StoryNavigationFalcoEvent",
    "WebSession",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("StoriesLogger_bucketNode.graphql"));
    a = (function () {
      function a(a) {
        var b = a.actorID,
          c = a.bucketIndex,
          e = a.cardIndex,
          f = a.data;
        a = a.trackingStrings;
        this.$1 = null;
        this.$2 = 0;
        this.$3 = 0;
        this.$4 = null;
        this.$1 = b;
        this.$4 = a;
        this.$2 = c;
        this.$3 = e;
        this.$5 = d("CometRelay").readInlineData(i, f);
      }
      var b = a.prototype;
      b.$6 = function () {
        var a = this.$5;
        a == null &&
          this.$2 >= 0 &&
          this.$3 >= 0 &&
          c("FBLogger")("fbstories").warn(
            "Logger does not have valid card data"
          );
        return a != null;
      };
      b.storyNavigationLog = function (a) {
        var b = this;
        if (!this.$6()) return;
        var d = c("StoriesLoggingConstants").ACTION_TYPE.STORY_NAVIGATION;
        this.$7(d).setGesture(a);
        c("StoryNavigationFalcoEvent").log(function () {
          var c = babelHelpers["extends"]({}, b.$8(), { gesture: a });
          return c;
        });
      };
      b.replyLog = function (a) {
        if (!this.$6()) return;
        if (a === c("StoriesLoggingConstants").ACTION_TYPE.SEND_REPLY_ATTEMPT) {
          var b = this.$8();
          c("AttemptToSendReplyFalcoEvent").log(function () {
            return {
              camera_post_type: b.camera_post_type,
              media_id: b.media_id,
              media_index: b.media_index,
              media_type: b.media_type,
              number_media: b.number_media,
              number_viewers: b.number_viewers,
              source: b.source,
              story_index: b.story_index,
              story_owner: b.story_owner,
              story_owner_type: b.story_owner_type,
              story_size: b.story_size,
              thread_id: b.thread_id,
              tracking_string: b.tracking_string,
              tray_session_id: b.tray_session_id,
              viewer_session_id: b.viewer_session_id,
            };
          });
        } else return this.$7(a).log();
      };
      b.replyAttemptCompletedLog = function (a, b) {
        var d = this;
        if (!this.$6()) return;
        var e = b == null;
        c("StoriesInteractiveFeedbackFalcoEvent").log(function () {
          var b = babelHelpers["extends"]({}, d.$8(), {
            action: c("StoriesLoggingConstants").ACTION_TYPE
              .REPLY_ATTEMPT_COMPLETED,
            story_reply_type: a,
            success: e,
          });
          return b;
        });
      };
      b.replySentWhenSmartReplyShownLog = function (a, b, d, e) {
        var f = this;
        if (!this.$6()) return;
        c("StoriesInteractiveFeedbackFalcoEvent").log(function () {
          var g = babelHelpers["extends"]({}, f.$8(), {
            action: c("StoriesLoggingConstants").ACTION_TYPE
              .REPLY_SENT_WHEN_SMART_REPLY_SHOWN,
            edit_after_smart_reply_tap: a,
            smart_reply_id: b,
            smart_reply_suggestion_type: e,
            smart_reply_tap_before_sent: d,
          });
          return g;
        });
      };
      b.pauseLog = function (a, b) {
        if (!this.$6()) return;
        if (b !== d("StoriesPauseReasons").BUCKET_TRANSITION)
          return this.$7(
            a
              ? c("StoriesLoggingConstants").ACTION_TYPE.PAUSE_STORY
              : c("StoriesLoggingConstants").ACTION_TYPE.UNPAUSE_STORY
          )
            .setGesture(b.toLowerCase())
            .log();
      };
      b.openLinkLog = function () {
        if (!this.$6()) return;
        return this.$7(
          c("StoriesLoggingConstants").ACTION_TYPE.OPEN_LINK
        ).log();
      };
      b.openViewerSheetLog = function () {
        var a = this;
        if (!this.$6()) return;
        c("OpenSeenSummaryFalcoEvent").log(function () {
          var b = a.$8();
          return b;
        });
      };
      b.openMediaLog = function (a) {
        var b = this;
        a != null &&
          a !== this.$9() &&
          c("FBLogger")("fbstories").warn(
            "Logger card id [%s] does not match media card id [%s]",
            this.$9(),
            a
          );
        if (!this.$6()) return;
        c("OpenMediaFalcoEvent").log(function () {
          var a = babelHelpers["extends"]({}, b.$8(), {
            sid: d("WebSession").getId(),
          });
          return a;
        });
      };
      b.storyMediaViewLog = function (a) {
        var b = this;
        if (d("StoriesGating").shouldLogStoryMediaView() !== !0) return;
        a != null &&
          a !== this.$9() &&
          c("FBLogger")("fbstories").warn(
            "Logger card id [%s] does not match media card id [%s]",
            this.$9(),
            a
          );
        if (!this.$6()) return;
        c("StoryMediaViewFalcoEvent").log(function () {
          var a,
            c = b.$8();
          a = {
            bucket_id: ((a = b.$5) == null ? void 0 : a.id) || "",
            media_id: c.media_id,
            media_index: c.media_index,
            media_type: c.media_type,
            number_media: c.number_media,
            number_viewers: c.number_viewers,
            source: c.source,
            story_index: c.story_index,
            story_owner: c.story_owner,
            story_owner_type: c.story_owner_type,
            story_size: c.story_size,
            thread_id: c.thread_id,
            tracking_string: c.tracking_string,
            tray_session_id: c.tray_session_id,
            viewer_session_id: c.viewer_session_id,
          };
          return a;
        });
      };
      b.openStoryLog = function (a, b) {
        var e = this,
          f;
        b === void 0 && (b = !1);
        if (b) {
          c("OpenStoryFalcoEvent").log(function () {
            var a = {
              story_owner_type: e.$10(b),
              tray_session_id: d("StoriesLoggerSession").getTraySessionID(),
              viewer_session_id: d("StoriesLoggerSession").getViewerSessionID(),
            };
            return a;
          });
          return;
        }
        if (!this.$6()) return;
        f =
          (f = this.$5) == null
            ? void 0
            : (f = f.unified_stories) == null
            ? void 0
            : f.edges;
        var g = (f == null ? void 0 : f.length) || 0,
          h = !1;
        if (f == null) return;
        for (var i = 0; i < g; i++) {
          var j;
          j = (j = f[i]) == null ? void 0 : j.node;
          if (
            (j == null
              ? void 0
              : (j = j.story_card_seen_state) == null
              ? void 0
              : j.is_seen_by_viewer) === !1
          ) {
            h = !0;
            break;
          }
        }
        c("OpenStoryFalcoEvent").log(function () {
          var b = babelHelpers["extends"]({}, e.$8(), {
            has_new_content: h,
            source: a,
          });
          return b;
        });
      };
      b.closeStoryLog = function () {
        var a,
          b = this;
        if (!this.$6()) return;
        var e =
          (a = d("StoriesLoggerSession").getCloseGesture()) != null
            ? a
            : c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.BACK_BUTTON_EXIT;
        c("CloseStoryFalcoEvent").log(function () {
          var a = babelHelpers["extends"]({}, b.$8(), { gesture: e });
          return a;
        });
        c("Banzai").post("stories_interaction_poseidon_logging_banzai", {
          name: c("StoriesLoggingConstants").ACTION_TYPE.CLOSE_STORY,
          number_media: this.$11(),
          story_owner: this.$12(),
        });
      };
      b.clickInteractiveFeedbackReplyButtonLog = function (a) {
        var b = this;
        if (!this.$6()) return;
        var e;
        a === d("StoriesFeedbackFlowTypes").StickerReplyTypes.EMOJI
          ? (e = c("StoriesLoggingConstants").ACTION_TYPE
              .CLICK_EMOJI_REPLY_BUTTON)
          : a === d("StoriesFeedbackFlowTypes").StickerReplyTypes.GIF
          ? (e = c("StoriesLoggingConstants").ACTION_TYPE
              .CLICK_GIF_REPLY_BUTTON)
          : a === d("StoriesFeedbackFlowTypes").StickerReplyTypes.STICKER &&
            (e = c("StoriesLoggingConstants").ACTION_TYPE
              .CLICK_STICKER_REPLY_BUTTON);
        e != null &&
          c("StoriesInteractiveFeedbackFalcoEvent").log(function () {
            var a = babelHelpers["extends"]({}, b.$8(), { action: e });
            return a;
          });
      };
      b.smartReplyImpressionLog = function (a, b, d) {
        var e = this;
        if (!this.$6()) return;
        c("StoriesInteractiveFeedbackFalcoEvent").log(function () {
          var f = babelHelpers["extends"]({}, e.$8(), {
            action: c("StoriesLoggingConstants").ACTION_TYPE
              .SMART_REPLY_IMPRESSION,
            smart_reply_id_list: a,
            smart_reply_list: b,
            smart_reply_suggestion_type: d,
          });
          return f;
        });
      };
      b.visitPageLog = function () {
        var a = this;
        if (!this.$6()) return;
        var b = this.$7(c("StoriesLoggingConstants").ACTION_TYPE.VISIT_PAGE);
        b.log();
        c("FbStoriesVisitPageFalcoEvent").log(function () {
          var b = babelHelpers["extends"]({}, a.$8());
          return b;
        });
      };
      b.deleteLog = function () {
        if (!this.$6()) return;
        var a = this.$8();
        a.story_owner == null &&
          c("FBLogger")("fbstories").mustfix("Expecting non-null story_owner");
        c("DeleteMediaAttemptedFalcoEvent").log(function () {
          var b;
          return {
            media_id: a.media_id,
            media_index: a.media_index,
            media_type: a.media_type,
            source: a.source,
            story_owner: (b = a.story_owner) != null ? b : "",
            story_owner_type: a.story_owner_type,
            thread_id: a.thread_id,
            tray_session_id: a.tray_session_id,
            viewer_session_id: a.viewer_session_id,
          };
        });
      };
      b.handleLiveVideoLog = function (a) {
        var b = this;
        if (!this.$6()) return;
        c("StoriesInteractiveFeedbackFalcoEvent").log(function () {
          var c = babelHelpers["extends"]({}, b.$8(), { action: a });
          return c;
        });
      };
      b.$13 = function (a) {
        if (d("StoriesGating").shouldMockLogging()) {
          var b = this.$2;
          b === -1 && (b = this.$12() === this.$1 ? 0 : 1);
          return c("StoriesTestUtils").getMockedCardID(b, this.$11(), this.$3);
        } else return a == null ? void 0 : a.id;
      };
      b.$14 = function () {
        var a;
        return (a = this.$5) == null
          ? void 0
          : (a = a.unified_stories) == null
          ? void 0
          : (a = a.edges[this.$3]) == null
          ? void 0
          : a.node;
      };
      b.$9 = function () {
        return this.$13(this.$14());
      };
      b.$11 = function () {
        var a;
        return (a =
          (a = this.$5) == null
            ? void 0
            : (a = a.unified_stories) == null
            ? void 0
            : (a = a.edges) == null
            ? void 0
            : a.length) != null
          ? a
          : 0;
      };
      b.$15 = function () {
        var a,
          b = this.$14();
        a = b == null ? void 0 : (a = b.attachments) == null ? void 0 : a[0];
        if ((b == null ? void 0 : b.attachments) == null) {
          var d;
          c("FBLogger")("fbstories").warn(
            "Story Card with id [%s] doesnt have attachments, index: [%s], count: [%s], bucket id: [%s]",
            b == null ? void 0 : b.id,
            this.$3,
            this.$11(),
            (d = this.$5) == null ? void 0 : d.id
          );
        } else if (a == null) {
          c("FBLogger")("fbstories").warn(
            "Story Card with id [%s] doesnt have an attachment, index: [%s], count: [%s], bucket id: [%s]",
            b == null ? void 0 : b.id,
            this.$3,
            this.$11(),
            (d = this.$5) == null ? void 0 : d.id
          );
        }
        return a == null ? void 0 : a.media;
      };
      b.$16 = function () {
        var a = this.$15();
        return a == null ? null : a.id != null ? a.id : null;
      };
      b.$17 = function () {
        var a;
        return d("StoriesLoggerHelper").getLoggingMediaType(
          (a = this.$15()) == null ? void 0 : a.__typename
        );
      };
      b.$18 = function () {
        var a;
        return (a = this.$14()) == null
          ? void 0
          : (a = a.story_card_info) == null
          ? void 0
          : (a = a.story_viewers) == null
          ? void 0
          : a.count;
      };
      b.$10 = function (a) {
        var b, c;
        a === void 0 && (a = !1);
        b =
          (b = this.$5) == null
            ? void 0
            : (b = b.story_bucket_owner) == null
            ? void 0
            : b.__typename;
        var e = this.$12();
        c =
          ((c = this.$5) == null
            ? void 0
            : (c = c.story_bucket_owner) == null
            ? void 0
            : c.is_viewer_friend) || !1;
        return d("StoriesLoggerHelper").getOwnerType(this.$1, b, e, c, a);
      };
      b.$19 = function () {
        var a;
        return d("StoriesLoggerHelper").getCameraPostType(
          (a = this.$5) == null ? void 0 : a.story_bucket_type
        );
      };
      b.$12 = function () {
        var a;
        return (a = this.$5) == null
          ? void 0
          : (a = a.story_bucket_owner) == null
          ? void 0
          : a.id;
      };
      b.$20 = function () {
        var a;
        return this.$4 == null
          ? null
          : this.$4.get(((a = this.$5) == null ? void 0 : a.id) || "");
      };
      b.$7 = function (a) {
        var b = this.$8(),
          d = new (c("DirectMessagingTypedLogger"))();
        return d
          .setName(a)
          .setCameraPostType(b.camera_post_type)
          .setStoryOwner(b.story_owner)
          .setStoryOwnerType(b.story_owner_type)
          .setClientViewerSessionID(b.viewer_session_id)
          .setTraySessionID(b.tray_session_id)
          .setSource(b.source)
          .setMediaType(b.media_type)
          .setClientMediaID(b.media_id)
          .setCardID(b.thread_id)
          .setNumberViewers(b.number_viewers)
          .setStoryIndex(b.story_index)
          .setMediaIndex(b.media_index)
          .setNumberMedia(b.number_media)
          .setExtraClientData(JSON.stringify({ story_size: b.story_size }));
      };
      b.$8 = function () {
        return {
          camera_post_type: this.$19(),
          media_id: this.$16(),
          media_index: this.$3,
          media_type: this.$17(),
          number_media: this.$11(),
          number_viewers: this.$18(),
          source: d("StoriesLoggerSession").getOpenViewerSource(),
          story_index: this.$2,
          story_owner: this.$12(),
          story_owner_type: this.$10(),
          story_size: this.$11(),
          thread_id: this.$9(),
          tracking_string: this.$20(),
          tray_session_id: d("StoriesLoggerSession").getTraySessionID(),
          viewer_session_id: d("StoriesLoggerSession").getViewerSessionID(),
        };
      };
      b.getImpressionData = function (a) {
        var b = this.$9();
        if (b == null) return null;
        var c = this.$14(),
          e = d("StoriesGating").isTest(),
          f = d("StoriesGating").shouldMockLogging();
        f = b != null && !f ? d("StoriesUtils").cardID2ThreadID(b) : null;
        var g = this.$10();
        return {
          card_id: b,
          media_id: this.$16(),
          media_index: this.$3,
          media_type: this.$17(),
          organic_tracking: c == null ? void 0 : c.organic_tracking,
          source: d("StoriesLoggerSession").getOpenViewerSource(),
          story_owner: this.$12(),
          story_owner_type: g != null ? g.toLowerCase() : "",
          thread_id: f,
          tray_session_id: e ? a : d("StoriesLoggerSession").getTraySessionID(),
          viewer_session_id: d("StoriesLoggerSession").getViewerSessionID(),
        };
      };
      b.getImpressionConfig = function () {
        if (d("StoriesGating").isComet()) return null;
        var a = d("StoriesGating").isTest(),
          b = this.$9();
        if (b == null) return null;
        b = {
          client_track_subsequent_impression: !0,
          duration_in_ms: 0,
          enabled: !0,
          log_initial_nonviewable: !1,
          log_visibility_hidden_when_browser_inactive: !0,
          pixel_in_percentage: 0,
          require_horizontally_onscreen: !1,
          should_batch: !0,
          should_not_delay_impression: !0,
          subsequent_gap_in_ms: a
            ? 0
            : c("StoriesLoggingConstants").IMPRESSION_DEDUPLICATION_TIME,
        };
        a = this.getImpressionData(
          c("FBStoriesBanzaiConstants") == null
            ? void 0
            : c("FBStoriesBanzaiConstants").IMPRESSION
        );
        a =
          c("StoriesLoggingConstants").FB_STORIES_IMPRESSION +
          "." +
          (a == null ? "" : JSON.stringify(a));
        return { "data-xt": a, "data-xt-vimp": JSON.stringify(b) };
      };
      b.getTimespentConfig = function () {
        if (d("StoriesGating").isComet()) return null;
        var a = this.$9();
        if (a == null) return null;
        a = {
          duration_in_ms: c("StoriesLoggingConstants").TIMESPENT_MINIMUM_TIME,
          enabled: !0,
          log_impression_duration: !0,
          log_initial_nonviewable: !1,
          log_visibility_hidden_when_browser_inactive: !0,
          pixel_in_percentage: 0,
          require_horizontally_onscreen: !1,
          should_batch: !1,
          should_not_delay_impression: !0,
          subsequent_gap_in_ms: 0,
        };
        var b = this.getImpressionData(
          c("FBStoriesBanzaiConstants") == null
            ? void 0
            : c("FBStoriesBanzaiConstants").TIMESPENT
        );
        b =
          c("StoriesLoggingConstants").FB_STORIES_TIMESPENT +
          "." +
          (b == null ? "" : JSON.stringify(b));
        return { "data-xt": b, "data-xt-vimp": JSON.stringify(a) };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesLogger",
  [
    "CometRelay",
    "StoriesLogger",
    "StoriesTrayLoggerSessionContext",
    "react",
    "useStoriesLogger_bucketNode.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useMemo;
    function a(a, e, f) {
      var g = i(c("StoriesTrayLoggerSessionContext")),
        k = g.trackingStrings,
        l = e.bucketIndex,
        m = e.cardIndex,
        n = d("CometRelay").readInlineData(
          h !== void 0 ? h : (h = b("useStoriesLogger_bucketNode.graphql")),
          f
        );
      return j(
        function () {
          return new (c("StoriesLogger"))({
            actorID: a,
            bucketIndex: l,
            cardIndex: m,
            data: n,
            trackingStrings: k,
          });
        },
        [a, l, m, n, k]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "storiesUpdateSeenStateMutation",
  [
    "CometRelay",
    "WebPixelRatio",
    "cr:1231509",
    "storiesUpdateSeenStateMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("storiesUpdateSeenStateMutation.graphql"));
    function a(a, c, e, f, g) {
      b("cr:1231509") != null && b("cr:1231509").updateThreadSeenOptimistic(e);
      var h = function (a) {
        var b = a.get(c);
        if (b != null) {
          if (f != null) {
            var d = a.get(f);
            d != null && b.setLinkedRecord(d, "first_story_to_show");
          }
          b.setValue(g, "is_bucket_seen_by_viewer");
        }
        d = a.get(e);
        if (d != null) {
          b = d.getLinkedRecord("story_card_seen_state");
          b != null && b.setValue(!0, "is_seen_by_viewer");
        }
      };
      d("CometRelay").commitMutation(a, {
        mutation: i,
        optimisticUpdater: h,
        variables: {
          input: { bucket_id: c, story_id: e },
          scale: d("WebPixelRatio").get(),
          shouldEnableVideoAutoplay: !1,
        },
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetUtils",
  ["formatNumber", "intlSummarizeNumber"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a != null
        ? a < 1e5
          ? c("formatNumber").withThousandDelimiters(a)
          : c("intlSummarizeNumber")(a, 1)
        : "";
    }
    g.viewersheetIntlSummarizeNumber = a;
  },
  98
);
__d(
  "StoriesViewerSheetAttributionInfo.react",
  [
    "fbt",
    "CometLink.react",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "StoriesViewerSheetAttributionInfo_card.graphql",
    "StoriesViewerSheetSection.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesViewerSheetAttributionInfo_card.graphql")),
        a.card
      );
      var e = a == null ? void 0 : a.creation_time;
      a = a == null ? void 0 : a.via;
      if (
        a == null ||
        (a == null ? void 0 : a.id) == null ||
        (a == null ? void 0 : a.name) == null ||
        e == null
      )
        return null;
      var f = (a == null ? void 0 : a.id) || "";
      return j.jsx(c("StoriesViewerSheetSection.react"), {
        children: j.jsx("p", {
          className: "ozuftl9m n851cfcs tvfksri0 n1l5q3vz jq4qci2q m9osqain",
          children: h._("Added {time elapsed} by {author name}", [
            h._param(
              "time elapsed",
              e == null
                ? null
                : j.jsx(c("CometRelativeTimestamp.react"), {
                    date: new Date(e * 1e3),
                  })
            ),
            h._param(
              "author name",
              j.jsx(c("CometLink.react"), {
                href: "/" + f,
                children: a == null ? void 0 : a.name,
              })
            ),
          ]),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PageStoryInsightsMetricKey",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      EXITS: "exits",
      FORWARD_TAPS: "forward_taps",
      BACKWARD_TAPS: "backward_taps",
      FORWARD_SWIPES: "forward_swipes",
      REACTIONS: "reactions",
      SWIPE_UP_ACTIONS: "swipe_up_actions",
      PAGE_VISITS: "page_visits",
      SHARES: "shares",
      REPLIES: "replies",
      NEW_FOLLOWERS: "new_followers",
      STICKER_INTERACTIONS: "sticker_interactions",
      ENGAGEMENT: "engagement",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PageStoryInsightsMetricType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      NUMBER: "number",
      REACTIONS_DETAILED: "reactions_detailed",
    });
    f["default"] = a;
  },
  66
);
__d(
  "StoriesViewerSheetInsightsMetric.react",
  [
    "CometRelay",
    "PageStoryInsightsMetricType",
    "StoriesViewerSheetInsightsMetric_data.graphql",
    "StoriesViewerSheetUtils",
    "getJSEnumSafe",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesViewerSheetInsightsMetric_data.graphql")),
        a.data
      );
      if (!a) return null;
      var e = a.name,
        f = a.type;
      a = a.value;
      switch (c("getJSEnumSafe")(c("PageStoryInsightsMetricType"), f)) {
        case "number":
          return a != null && a > 0
            ? i.jsxs("div", {
                className:
                  "hcukyx3x qzhwtbm6 cxmmr5t8 knvmm38d jq4qci2q m9osqain aovydwv3",
                children: [
                  i.jsx("span", { children: e }),
                  i.jsx("span", {
                    className: "n3ffmt46 tpga1rol",
                    children: d(
                      "StoriesViewerSheetUtils"
                    ).viewersheetIntlSummarizeNumber(a),
                  }),
                ],
              })
            : null;
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
  "StoriesViewerSheetInsightsReactionSummaryMetric.react",
  [
    "fbt",
    "CometRelay",
    "StoriesLightweightReactionIcon.react",
    "StoriesViewerSheetInsightsReactionSummaryMetric_card.graphql",
    "StoriesViewerSheetUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "StoriesViewerSheetInsightsReactionSummaryMetric_card.graphql"
            )),
        a.card
      );
      a =
        a == null
          ? void 0
          : (a = a.story_card_info) == null
          ? void 0
          : a.feedback_summary;
      var e = (a == null ? void 0 : a.reaction_summary) || [];
      return !(a == null ? void 0 : a.total_reaction_count)
        ? null
        : j.jsxs("div", {
            className:
              "hcukyx3x qzhwtbm6 cxmmr5t8 knvmm38d jq4qci2q m9osqain aovydwv3",
            children: [
              h._("Reactions"),
              j.jsxs("div", {
                className: "n3ffmt46 tpga1rol j83agx80",
                children: [
                  e.map(function (a) {
                    return (
                      a.reaction_unicode != null &&
                      j.jsx(
                        "span",
                        {
                          className: "gu6mgdjm",
                          children: j.jsx(
                            c("StoriesLightweightReactionIcon.react"),
                            { emojiUnicode: a.reaction_unicode }
                          ),
                        },
                        a.reaction_unicode
                      )
                    );
                  }),
                  j.jsx("span", {
                    className: "lubqegs9",
                    children: d(
                      "StoriesViewerSheetUtils"
                    ).viewersheetIntlSummarizeNumber(
                      (e = a == null ? void 0 : a.total_reaction_count) != null
                        ? e
                        : 0
                    ),
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
  "StoriesViewerSheetInsights.react",
  [
    "fbt",
    "CometRelay",
    "PageStoryInsightsMetricKey",
    "StoriesViewerSheetBigNumbers.react",
    "StoriesViewerSheetBigNumbersItem.react",
    "StoriesViewerSheetInsightsMetric.react",
    "StoriesViewerSheetInsightsReactionSummaryMetric.react",
    "StoriesViewerSheetInsights_card.graphql",
    "StoriesViewerSheetSection.react",
    "getJSEnumSafe",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e, f, g;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesViewerSheetInsights_card.graphql")),
        a.card
      );
      var k = a == null ? void 0 : a.story_card_info;
      e =
        (k == null
          ? void 0
          : (e = k.page_insights_data) == null
          ? void 0
          : e.navigation_metrics) || [];
      k =
        (k == null
          ? void 0
          : (k = k.page_insights_data) == null
          ? void 0
          : k.engagement_metrics) || [];
      var l = k.filter(function (a) {
        return (
          c("getJSEnumSafe")(c("PageStoryInsightsMetricKey"), a.key) !==
          "engagement"
        );
      });
      k =
        ((k = k.find(function (a) {
          return (
            c("getJSEnumSafe")(c("PageStoryInsightsMetricKey"), a.key) ===
            "engagement"
          );
        })) == null
          ? void 0
          : k.value) || 0;
      var m = k > 0;
      f =
        (a == null
          ? void 0
          : (f = a.story_card_seen_state) == null
          ? void 0
          : (f = f.totalSeenCount) == null
          ? void 0
          : f.count) || 0;
      return j.jsxs("div", {
        children: [
          j.jsx(c("StoriesViewerSheetSection.react"), {
            children: j.jsxs("div", {
              className: "ozuftl9m sjgh65i0 tvfksri0 tr9rh885",
              children: [
                j.jsx("div", {
                  className:
                    "hcukyx3x n851cfcs cxmmr5t8 j0t1dd8h g1cxx5fr n3ffmt46 a5q79mjw j83agx80 m9hp224e aovydwv3",
                  children: h._("Seen By"),
                }),
                (a == null
                  ? void 0
                  : (g = a.story_card_seen_state) == null
                  ? void 0
                  : (g = g.totalSeenCount) == null
                  ? void 0
                  : g.count) &&
                  j.jsx(c("StoriesViewerSheetBigNumbers.react"), {
                    children: j.jsx(
                      c("StoriesViewerSheetBigNumbersItem.react"),
                      {
                        label: h._(
                          { "*": "Unique Accounts", _1: "Unique Account" },
                          [h._plural(f || 0)]
                        ),
                        value: f,
                      }
                    ),
                  }),
                e.map(function (a) {
                  return j.jsx(
                    c("StoriesViewerSheetInsightsMetric.react"),
                    { data: a },
                    a.key
                  );
                }),
              ],
            }),
          }),
          m &&
            j.jsx(c("StoriesViewerSheetSection.react"), {
              children: j.jsxs("div", {
                className: "ozuftl9m sjgh65i0 tvfksri0 tr9rh885",
                children: [
                  j.jsx("div", {
                    className:
                      "hcukyx3x n851cfcs cxmmr5t8 j0t1dd8h g1cxx5fr n3ffmt46 a5q79mjw j83agx80 m9hp224e aovydwv3",
                    children: h._("Engagement"),
                  }),
                  j.jsx(c("StoriesViewerSheetBigNumbers.react"), {
                    children: j.jsx(
                      c("StoriesViewerSheetBigNumbersItem.react"),
                      {
                        label: h._(
                          {
                            "*": "Actions taken from this story",
                            _1: "Action taken from this story",
                          },
                          [h._plural(k)]
                        ),
                        value: k,
                      }
                    ),
                  }),
                  j.jsx(
                    c("StoriesViewerSheetInsightsReactionSummaryMetric.react"),
                    { card: a }
                  ),
                  l.map(function (a) {
                    return j.jsx(
                      c("StoriesViewerSheetInsightsMetric.react"),
                      { data: a },
                      a.key
                    );
                  }),
                ],
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
  "StoriesViewerSheetInsightsNullState.react",
  [
    "fbt",
    "ix",
    "StoriesViewerSheetHeader.react",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      return j.jsxs("div", {
        className: "cbu4d94t j83agx80 ll8tlv6m",
        children: [
          j.jsxs(c("StoriesViewerSheetHeader.react"), {
            children: [
              j.jsx("i", {
                className: "oi9244e8 a3bd9o3v",
                children: j.jsx(c("TetraIcon.react"), {
                  icon: d("fbicon")._(i("491228"), 20),
                }),
              }),
              h._("No Views Yet"),
            ],
          }),
          j.jsx("p", {
            className:
              "hzawbc8m d2edcug0 ozuftl9m oygrvhab tvfksri0 n1l5q3vz a3bd9o3v jq4qci2q m9osqain",
            children: h._(
              "As people view your story, you'll see insights here."
            ),
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
  "PageInsightsMonitoringTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:PageInsightsMonitoringLoggerConfig"
    );
  },
  null
);
__d(
  "StoriesViewerSheetInsightsStickyFooter.react",
  [
    "fbt",
    "PageInsightsMonitoringTypedLoggerLite",
    "TetraButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback;
    function a(a) {
      var b = a.pageID;
      a = j(
        function () {
          c("PageInsightsMonitoringTypedLoggerLite").log({
            component: "pi_stories_insights_open_surface_from_viewersheet",
            event: "page_insights_click",
            page_id: b,
          });
        },
        [b]
      );
      return i.jsx("div", {
        className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
        children: i.jsx(c("TetraButton.react"), {
          label: h._("See Story Insights"),
          linkProps: {
            url: b != null ? "/" + b + "/insights/?section=navStories" : null,
          },
          onPress: a,
          reduceEmphasis: !0,
          size: "large",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetInsightsTransitionState.react",
  ["fbt", "ix", "CometImage.react", "StoriesViewerSheetHeader.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      return j.jsxs("div", {
        className: "gme6tn0m cbu4d94t j83agx80 bp9cbjyn",
        children: [
          j.jsx(c("CometImage.react"), { src: i("1350233") }),
          j.jsx(c("StoriesViewerSheetHeader.react"), {
            children: h._("Story Insights Not Available"),
          }),
          j.jsx("p", {
            className:
              "oqcyycmt d2edcug0 ozuftl9m oygrvhab tvfksri0 n1l5q3vz a3bd9o3v jq4qci2q m9osqain",
            children: h._(
              "You can't view this story's insights if you've switched to a professional profile in the last 24 hours."
            ),
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
  "StoriesExtendedViewerOverlay.react",
  [
    "fbt",
    "ix",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometPressable.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "StoriesEnums",
    "StoriesExtendedViewerOverlay_buckets.graphql",
    "StoriesNavListItemPog.react",
    "StoriesSuspenseContuxActionsContext",
    "TetraButton.react",
    "TetraText.react",
    "fbicon",
    "intlList",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useContext,
      m = {
        button: { width: "dbpd2lw6" },
        column: { height: "datstx6m", width: "k4urcfbm" },
        root: {
          backgroundColor: "iuug3ofb",
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
      };
    function a(a) {
      var e = a.nextBuckets,
        f = a.nextBucketsCount,
        g = a.onDismiss,
        n = a.setOverlayClicked;
      a = l(c("StoriesSuspenseContuxActionsContext"));
      var o = a.performBucketNavigation;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("StoriesExtendedViewerOverlay_buckets.graphql")),
        e
      );
      if (a == null || a.length === 0 || f == null) return null;
      e = a.map(function (a) {
        return a == null
          ? void 0
          : (a = a.story_bucket_owner) == null
          ? void 0
          : a.name;
      });
      return k.jsx("div", {
        className: c("stylex")(m.root),
        children: k.jsxs(c("CometColumn.react"), {
          align: "center",
          verticalAlign: "center",
          xstyle: m.column,
          children: [
            k.jsx(c("CometColumnItem.react"), {
              paddingVertical: 12,
              children: k.jsx(c("CometRow.react"), {
                children:
                  a &&
                  a.map(function (a, b) {
                    var e;
                    return k.jsx(
                      c("CometRowItem.react"),
                      {
                        children: k.jsx(c("CometPressable.react"), {
                          display: "inline",
                          label:
                            (e =
                              (e = a.story_bucket_owner) == null
                                ? void 0
                                : e.name) != null
                              ? e
                              : h._("author"),
                          onPress: function (a) {
                            if (b === 0) return g(a);
                            n && n(!0);
                            o(
                              d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET,
                              !1,
                              b
                            );
                          },
                          overlayDisabled: !0,
                          children: k.jsx(c("StoriesNavListItemPog.react"), {
                            bucket: a,
                          }),
                        }),
                      },
                      b
                    );
                  }),
              }),
            }),
            k.jsx(c("CometColumnItem.react"), {
              paddingVertical: 12,
              children: k.jsx(c("TetraText.react"), {
                color: "white",
                type: "headlineEmphasized1",
                children: h._("Up Next"),
              }),
            }),
            k.jsx(c("CometColumnItem.react"), {
              paddingHorizontal: 12,
              paddingVertical: 12,
              children: k.jsx(c("TetraText.react"), {
                align: "center",
                color: "white",
                type: "body2",
                children: k.jsxs(k.Fragment, {
                  children: [
                    f === 0 &&
                      h._("Stories from {names}", [
                        h._param(
                          "names",
                          c("intlList")(e, c("intlList").CONJUNCTIONS.NONE)
                        ),
                      ]),
                    f > 0 &&
                      h._(
                        {
                          "*": "Stories from {names} and {count} others",
                          _1: "Stories from {names} and {count} other",
                        },
                        [
                          h._param(
                            "names",
                            c("intlList")(e, c("intlList").CONJUNCTIONS.NONE)
                          ),
                          h._param("count", f),
                          h._plural(e.length),
                        ]
                      ),
                  ],
                }),
              }),
            }),
            k.jsx(c("CometColumnItem.react"), {
              paddingVertical: 12,
              children: k.jsx("div", {
                className: c("stylex")(m.button),
                children: k.jsx(c("TetraButton.react"), {
                  "aria-label": "Continue",
                  icon: d("fbicon")._(i("484862"), 16),
                  label: h._("View Now"),
                  onPress: g,
                  type: "overlay",
                }),
              }),
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
  "StoriesProductionEndCard.react",
  [
    "fbt",
    "ix",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometImage.react",
    "CometRelay",
    "CometTheme.react",
    "StoriesCardTimerSourceAutoProgression",
    "StoriesConstants",
    "StoriesPauseButton.react",
    "StoriesPauseReasons",
    "StoriesProductionEndCard_user.graphql",
    "StoriesProgressBar.react",
    "StoriesSuspensePauseContext",
    "StoriesSuspensePauseOnHoverContainer.react",
    "StoriesTrayCreateTile.react",
    "StoriesViewerMenu.react",
    "TetraButton.react",
    "TetraText.react",
    "XCometStoriesCreateControllerRouteBuilder",
    "react",
    "stylex",
    "useStoriesViewerDimensions",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useContext,
      m = e.useRef,
      n = {
        atsTile: { marginBottom: "ama3r5zh", width: "mwd26vqw" },
        cardContainer: {
          alignItems: "bp9cbjyn",
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          justifyContent: "taijpn5t",
          marginBottom: "oqk3gwch",
          width: "k4urcfbm",
        },
        columnLayout: {
          maxWidth: "j30p9oib",
          textAlign: "oqcyycmt",
          width: "dmwoc352",
        },
        linkIcon: {
          position: "pmk7jnqg",
          start: "e9ggjtsh",
          top: "htftu7yx",
          transform: "lo7qbyfk",
        },
        photosIcon: {
          end: "q346qzrl",
          position: "pmk7jnqg",
          top: "ewnmkx9y",
          transform: "cl885m5q",
        },
        shapesIcon: {
          end: "rkwpkyys",
          position: "pmk7jnqg",
          top: "jejevqzb",
          transform: "t41jdizh",
        },
        text: { width: "eq70wtua" },
        textIcon: {
          end: "q346qzrl",
          position: "pmk7jnqg",
          top: "t6snl0w5",
          transform: "pe61uq6d",
        },
      },
      o = function (a) {
        var b = h._("Continue the Story"),
          c = h._(
            "Your friends want to hear from you. Share a recent moment to take them behind the scenes."
          ),
          d = h._("Share everyday moments with friends"),
          e = h._(
            "Stories are photos and videos that are visible for 24 hours. When someone adds to a story, it'll show up here."
          );
        if (a) return { body: e, title: d };
        else return { body: c, title: b };
      };
    function a(a) {
      var e = a.nullState,
        f = a.onProgressDone;
      a = a.userData;
      var g = c("useStoriesViewerDimensions")(),
        p = c("XCometStoriesCreateControllerRouteBuilder").buildURL({}),
        q = m(!1),
        r = m(null),
        s = l(c("StoriesSuspensePauseContext")),
        t = s.isPaused;
      s = s.setPause;
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("StoriesProductionEndCard_user.graphql")),
        a
      );
      q.current &&
        r.current == null &&
        (r.current = new (c("StoriesCardTimerSourceAutoProgression"))());
      q.current ||
        ((q.current = !0), s(!1, d("StoriesPauseReasons").CARD_CHANGE));
      q = {
        entryPoint: "add_to_story_end_card",
        sourceSurface: "stories_viewer",
      };
      e = e === d("StoriesConstants").VIEWER_V3_NULL_STATE.CREATION_END_CARD;
      var u = o(e),
        v = u.body;
      u = u.title;
      return k.jsxs(c("CometTheme.react"), {
        theme: "dark",
        children: [
          k.jsx("div", {
            className: c("stylex")(n.cardContainer),
            style: g,
            children: k.jsxs(c("CometColumn.react"), {
              spacing: 8,
              xstyle: n.columnLayout,
              children: [
                k.jsxs(c("CometColumnItem.react"), {
                  align: "center",
                  children: [
                    k.jsx("div", {
                      className: c("stylex")(n.textIcon),
                      children: k.jsx(c("CometImage.react"), {
                        src: i("1585802"),
                      }),
                    }),
                    k.jsx(c("CometTheme.react"), {
                      theme: "light",
                      xstyle: n.atsTile,
                      children: k.jsx(
                        c("StoriesSuspensePauseOnHoverContainer.react"),
                        {
                          children: k.jsx(c("StoriesTrayCreateTile.react"), {
                            fragmentProp: a,
                            isFromTray: !1,
                            passthroughProps: q,
                          }),
                        }
                      ),
                    }),
                    k.jsx("div", {
                      className: c("stylex")(n.shapesIcon),
                      children: k.jsx(c("CometImage.react"), {
                        src: i("1585801"),
                      }),
                    }),
                    k.jsx("div", {
                      className: c("stylex")(n.photosIcon),
                      children: k.jsx(c("CometImage.react"), {
                        src: i("1585800"),
                      }),
                    }),
                    k.jsx("div", {
                      className: c("stylex")(n.linkIcon),
                      children: k.jsx(c("CometImage.react"), {
                        src: i("1585799"),
                      }),
                    }),
                  ],
                }),
                k.jsx(c("CometColumnItem.react"), {
                  children: k.jsx(c("TetraText.react"), {
                    align: "center",
                    color: "white",
                    type: "headlineEmphasized2",
                    children: u,
                  }),
                }),
                k.jsx(c("CometColumnItem.react"), {
                  align: "center",
                  paddingTop: 8,
                  children: k.jsx("div", {
                    className: c("stylex")(n.text),
                    children: k.jsx(c("TetraText.react"), {
                      color: "white",
                      type: "body2",
                      children: v,
                    }),
                  }),
                }),
                k.jsx(c("CometColumnItem.react"), {
                  paddingTop: 16,
                  children: k.jsx(
                    c("StoriesSuspensePauseOnHoverContainer.react"),
                    {
                      children: k.jsx(c("TetraButton.react"), {
                        label: h._("Create Story"),
                        linkProps: { url: p },
                      }),
                    }
                  ),
                }),
              ],
            }),
          }),
          !e &&
            f != null &&
            k.jsxs("div", {
              children: [
                k.jsx(c("StoriesViewerMenu.react"), {
                  children: k.jsx(c("StoriesPauseButton.react"), {
                    isPaused: t,
                    setPause: s,
                  }),
                }),
                k.jsx(c("StoriesProgressBar.react"), {
                  cardCount: 1,
                  cardTimerSource: r.current,
                  currentCardIndex: 0,
                  isPaused: t,
                  onDone: f,
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
  "StoriesSuspenseBucketPlaceholder.react",
  [
    "CometLoadingAnimation.react",
    "CometRelay",
    "StoriesCardHeader.react",
    "StoriesPauseReasons",
    "StoriesSuspenseBucketPlaceholder_owner.graphql",
    "StoriesSuspensePauseContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect;
    function a(a) {
      a = a.owner;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesSuspenseBucketPlaceholder_owner.graphql")),
        a
      );
      var e = j(c("StoriesSuspensePauseContext")),
        f = e.setPause;
      k(
        function () {
          f(!0, d("StoriesPauseReasons").CARD_TRANSITION_INITIATED);
          return function () {
            f(!1, d("StoriesPauseReasons").CARD_CHANGE);
          };
        },
        [f]
      );
      return i.jsxs("div", {
        className:
          "k4urcfbm kr520xx4 j9ispegn pmk7jnqg taijpn5t datstx6m j83agx80 bp9cbjyn",
        children: [
          i.jsx(c("StoriesCardHeader.react"), { card: null, owner: a }),
          i.jsx("div", {
            className: "pmk7jnqg",
            children: i.jsx(c("CometLoadingAnimation.react"), { size: 36 }),
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
  "useStoriesSuspenseNavListItemTransitionListener",
  [
    "StoriesLoggerContext",
    "StoriesLoggingConstants",
    "react",
    "storiesViewerSuspenseEmitter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect;
    function a() {
      var a = h(c("StoriesLoggerContext")),
        b = a.logger;
      i(
        function () {
          return c(
            "storiesViewerSuspenseEmitter"
          ).listenToNavListItemTransition(function () {
            b.storyNavigationLog(
              c("StoriesLoggingConstants").NAVIGATION_GESTURE.NAVIGATE_AWAY
            );
          });
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspensePermalinkUpdater",
  [
    "CometRelay",
    "cr:899180",
    "orEmptyArray",
    "react",
    "useStoriesSuspensePermalinkUpdater_bucket.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useEffect;
    function a(a, e) {
      var f;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useStoriesSuspensePermalinkUpdater_bucket.graphql")),
        a
      );
      f = c("orEmptyArray")(
        a == null ? void 0 : (f = a.unified_stories) == null ? void 0 : f.edges
      );
      f = f.map(function (a) {
        return a.node;
      });
      f = f[e];
      var g = f == null ? void 0 : f.id,
        j = a == null ? void 0 : a.id;
      i(
        function () {
          b("cr:899180") && b("cr:899180").updateURL(j, g);
        },
        [j, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseBucketContainer.react",
  [
    "CometPagelet.react",
    "CometRelay",
    "FBLogger",
    "StoriesActorContext",
    "StoriesBehaviorHelpContext",
    "StoriesBucketLoadingView.react",
    "StoriesEnums",
    "StoriesLoggerContext",
    "StoriesLoggingConstants",
    "StoriesProductionEndCard.react",
    "StoriesProgressBar.react",
    "StoriesSuspenseBucket.react",
    "StoriesSuspenseBucketContainer_animations.graphql",
    "StoriesSuspenseBucketContainer_bucket.graphql",
    "StoriesSuspenseBucketContainer_user.graphql",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseBucketPlaceholder.react",
    "StoriesSuspenseContuxActionsContext",
    "StoriesSuspenseContuxContext",
    "StoriesSuspensePauseContext",
    "orEmptyArray",
    "react",
    "storiesUpdateSeenStateMutation",
    "useStoriesLogger",
    "useStoriesSuspenseCards",
    "useStoriesSuspenseNavListItemTransitionListener",
    "useStoriesSuspensePermalinkUpdater",
    "useStoriesViewerClose",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useMemo,
      o = e.useState,
      p =
        h !== void 0
          ? h
          : (h = b("StoriesSuspenseBucketContainer_bucket.graphql"));
    function a(a) {
      var e,
        f,
        g = d("CometRelay").useFragment(p, a.bucket),
        h = c("useStoriesViewerClose")(),
        q = d("CometRelay").useRelayEnvironment(),
        r = m(c("StoriesBehaviorHelpContext"));
      r = r.isSelfStory;
      var s = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesSuspenseBucketContainer_animations.graphql")),
          a.animations
        ),
        t = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("StoriesSuspenseBucketContainer_user.graphql")),
          a.userData
        ),
        u = o(null),
        v = u[0];
      u = u[1];
      var w = m(c("StoriesSuspensePauseContext"));
      w = w.isPaused;
      var x = m(c("StoriesSuspenseContuxActionsContext")),
        y = x.performCardNavigation;
      x = m(c("StoriesSuspenseContuxContext"));
      var z = x.cardIndex,
        A = x.isLastCard;
      x = m(c("StoriesSuspenseBucketDataContext"));
      x = x.bucketData;
      var B = x.bucketID,
        C = x.bucketIndex,
        D = x.isEndOfTray,
        E = x.isLastBucket;
      x = m(c("StoriesActorContext"));
      x = x.actorID;
      var F = c("useStoriesLogger")(x, { bucketIndex: C, cardIndex: z }, g);
      x = l(
        function () {
          A && E
            ? h(c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.AUTO_EXIT)
            : y(
                d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD,
                c("StoriesLoggingConstants").NAVIGATION_GESTURE.AUTO_JUMP
              );
        },
        [E, A, y, h]
      );
      C = g == null ? void 0 : g.story_bucket_owner;
      e =
        g == null
          ? void 0
          : (e = g.story_bucket_owner) == null
          ? void 0
          : e.short_name;
      var G =
        (f = g == null ? void 0 : g.is_bucket_seen_by_viewer) != null ? f : A;
      f = c("orEmptyArray")(
        g == null ? void 0 : (f = g.unified_stories) == null ? void 0 : f.edges
      ).map(function (a) {
        return a == null ? void 0 : a.node;
      });
      f = c("useStoriesSuspenseCards")(f, z);
      var H = f.getCardAtCurrentIndex,
        I = f.getCount,
        J = f.getFirstCard,
        K = f.getNextCard;
      f = H();
      var L = D ? "end_card" : f == null ? void 0 : f.id;
      H = l(
        function () {
          if (B != null && B !== "" && L != null) {
            var a;
            c("storiesUpdateSeenStateMutation")(
              q,
              B,
              L,
              G
                ? (a = J()) == null
                  ? void 0
                  : a.id
                : (a = K()) == null
                ? void 0
                : a.id,
              G
            );
          }
        },
        [B, L, q, J, K, G]
      );
      c("useStoriesSuspenseNavListItemTransitionListener")();
      c("useStoriesSuspensePermalinkUpdater")(g, z);
      g = n(
        function () {
          return { logger: F };
        },
        [F]
      );
      if (D)
        return k.jsx(c("StoriesProductionEndCard.react"), {
          onProgressDone: x,
          userData: t,
        });
      if (f == null) {
        r ||
          c("FBLogger")("fbstories").warn(
            "Empty card at index: [%s] for bucket id: [%s]",
            z,
            B
          );
        return k.jsx(
          "div",
          {
            className: "k4urcfbm l9j0dhe7 datstx6m",
            children: k.jsx(c("StoriesBucketLoadingView.react"), {}),
          },
          B
        );
      }
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(
            d("CometPagelet.react").Placeholder,
            {
              className: "k4urcfbm l9j0dhe7 datstx6m",
              fallback: k.jsx(c("StoriesSuspenseBucketPlaceholder.react"), {
                owner: C,
              }),
              name: "Stories",
              pageletType: "media",
              children: k.jsx(c("StoriesLoggerContext").Provider, {
                value: g,
                children: k.jsx(c("StoriesSuspenseBucket.react"), {
                  animations: s,
                  card: f,
                  isSelfStory: r(),
                  onCardSeen: H,
                  onProgressDone: x,
                  onTimerSourceUpdate: u,
                  owner: C,
                  ownerName: e,
                  refetchNodes: a.refetchNodes,
                }),
              }),
            },
            B
          ),
          k.jsx(c("StoriesProgressBar.react"), {
            cardCount: I(),
            cardTimerSource: v,
            currentCardIndex: z,
            isPaused: w,
            onDone: x,
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
  "StoriesSuspenseBucketTransitionView.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "StoriesBucketLoadingView.react",
    "StoriesConstants",
    "StoriesEnums",
    "StoriesPauseReasons",
    "StoriesSuspenseBucketContainer.react",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseBucketTransitionView_LWRAnimations.graphql",
    "StoriesSuspenseBucketTransitionView_bucket.graphql",
    "StoriesSuspenseBucketTransitionView_user.graphql",
    "StoriesSuspenseCardSwap.react",
    "StoriesSuspensePauseContext",
    "react",
    "useStoriesViewerDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useContext,
      m = e.useMemo,
      n =
        h !== void 0
          ? h
          : (h = b("StoriesSuspenseBucketTransitionView_bucket.graphql"));
    function a(a) {
      var e = a.animations,
        f = a.bucket,
        g = a.bucketID;
      a = a.userData;
      var h = d("CometRelay").useFragment(n, f),
        o = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b(
                "StoriesSuspenseBucketTransitionView_LWRAnimations.graphql"
              )),
          e
        ),
        p = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("StoriesSuspenseBucketTransitionView_user.graphql")),
          a
        );
      f = c("useStoriesViewerDimensions")();
      e = l(c("StoriesSuspensePauseContext"));
      var q = e.setPause;
      a = l(c("StoriesSuspenseBucketDataContext"));
      var r = a.bucketNavDirection,
        s = m(
          function () {
            return k.jsx(c("CometPlaceholder.react"), {
              fallback: k.jsx(c("StoriesBucketLoadingView.react"), {}),
              children: k.jsx(c("StoriesSuspenseBucketContainer.react"), {
                animations: o,
                bucket: h,
                userData: p,
              }),
            });
          },
          [o, h, p]
        );
      e = m(
        function () {
          return k.jsx(c("StoriesSuspenseCardSwap.react"), {
            bucketID: g,
            direction:
              r === d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET
                ? "next"
                : "prev",
            duration: d("StoriesConstants").TRANSITION_DURATION_MS,
            onTransitionBegin: function () {
              return q(!0, d("StoriesPauseReasons").BUCKET_TRANSITION);
            },
            onTransitionEnd: function () {
              q(!1, d("StoriesPauseReasons").BUCKET_TRANSITION);
            },
            slide: s,
          });
        },
        [s, g, r, q]
      );
      a = e;
      return k.jsx("div", {
        className:
          "dzlist6r msbwk0y7 pnx7fd3z ms05siws l9j0dhe7 stjgntxs ni8dbmo4 puxov6c6 r893ighp n1l5q3vz n851cfcs btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 g5ia77u1",
        style: f,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = k.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesSuspenseEmptyBucketError.react",
  [
    "fbt",
    "ix",
    "NullStateMedia",
    "QPLUserFlow",
    "StoriesCloseButton.react",
    "StoriesEnums",
    "StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseContuxActionsContext",
    "TetraButton.react",
    "TetraNullState.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useContext,
      l = b.useEffect,
      m = b.useRef,
      n = function (a) {
        var b = a.hasNext;
        a = k(c("StoriesSuspenseContuxActionsContext"));
        var e = a.performBucketNavigation;
        a = function () {
          b
            ? e(d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET)
            : e(d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET);
        };
        var f = h._("See Next Story");
        f = j.jsx(c("TetraText.react"), {
          color: "white",
          type: "headline4",
          children: f,
        });
        return j.jsx(c("TetraButton.react"), {
          icon: d("fbicon")._(i("533909"), 16),
          label: f,
          onPress: a,
        });
      };
    function a() {
      var a = h._("This story is no longer available"),
        b = m(null),
        d = k(c("StoriesSuspenseBucketDataContext"));
      d = d.bucketData;
      var e = d.isFriendListEmpty,
        f = d.isLastBucket;
      l(
        function () {
          b.current == null &&
            ((b.current = f),
            c("QPLUserFlow").endFailure(
              c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent"),
              "empty bucket"
            ));
        },
        [f]
      );
      d = e == null || e === !0 ? void 0 : j.jsx(n, { hasNext: !b.current });
      return j.jsxs("div", {
        className:
          "k4urcfbm ni8dbmo4 q10oee1b taijpn5t datstx6m cbu4d94t j83agx80 g6srhlxm bp9cbjyn",
        children: [
          j.jsx(c("StoriesCloseButton.react"), { dark: !0 }),
          j.jsx("div", {
            className: "oh7imozk",
            children: j.jsx(c("TetraNullState.react"), {
              action: d,
              "data-testid": void 0,
              headline: a,
              icon: c("NullStateMedia"),
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
  "useStoriesSuspenseBucketSelectors",
  ["CometRelay", "useStoriesSuspenseBucketSelectors_bucket.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("useStoriesSuspenseBucketSelectors_bucket.graphql")),
          a
        ),
        e = function () {
          var a;
          return (
            (c == null
              ? void 0
              : (a = c.unified_stories) == null
              ? void 0
              : a.edges) || []
          );
        },
        f = function () {
          return e().length;
        };
      a = function () {
        return f() > 0;
      };
      var g = function (a) {
        if (a < 0) return null;
        return a > f() - 1 ? null : (a = e()[a]) == null ? void 0 : a.node;
      };
      return {
        getCardID: function (a) {
          return ((a = g(a)) == null ? void 0 : a.id) || "";
        },
        getCount: f,
        hasCards: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseFeedback.react",
  [
    "CometRelay",
    "StoriesFeedback.react",
    "StoriesSuspenseContuxContext",
    "StoriesSuspenseFeedback_LWRAnimations.graphql",
    "StoriesSuspenseFeedback_bucket.graphql",
    "StoriesSuspensePauseContext",
    "react",
    "useStoriesSuspenseBucketSelectors",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useContext;
    function a(a) {
      var e = a.LWRAnimations;
      a = a.bucket;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesSuspenseFeedback_bucket.graphql")),
        a
      );
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesSuspenseFeedback_LWRAnimations.graphql")),
        e
      );
      var f = k(c("StoriesSuspenseContuxContext"));
      f = f.cardIndex;
      var g = k(c("StoriesSuspensePauseContext"));
      g = g.setPause;
      var l = c("useStoriesSuspenseBucketSelectors")(a);
      l = l.getCardID(f);
      return j.jsx(c("StoriesFeedback.react"), {
        LWRAnimations: e,
        bucket: a,
        cardID: l,
        setPause: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetStickerInteraction.react",
  ["StoriesViewerSheetBigNumbersItem.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.stickerImageLabel,
        d = a.stickerImageURL;
      a = a.stickerInteractionCount;
      return h.jsxs("div", {
        className:
          "h26nb1kn m911lk4a ljras71g irwj8wxs oz2k7rp0 by26rmbw g5gj957u buofh1pr cbu4d94t l9mutfcf j83agx80 bp9cbjyn",
        children: [
          h.jsx(c("StoriesViewerSheetBigNumbersItem.react"), {
            label: "",
            value: a,
          }),
          h.jsx("img", { alt: b, className: "r1eg49ei", src: d }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetStickerInteractionInfo.react",
  [
    "fbt",
    "CometRelay",
    "StoriesViewerSheetSection.react",
    "StoriesViewerSheetStickerInteraction.react",
    "StoriesViewerSheetStickerInteractionInfo_reactionStickers.graphql",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "StoriesViewerSheetStickerInteractionInfo_reactionStickers.graphql"
            )),
        a.reactionStickers
      );
      a = c("orEmptyArray")(a);
      a = a.filter(function (a) {
        a =
          a == null
            ? void 0
            : (a = a.reaction_sticker) == null
            ? void 0
            : a.total_reaction_count;
        return a != null ? a > 0 : !1;
      });
      return a.length === 0
        ? null
        : j.jsx(c("StoriesViewerSheetSection.react"), {
            children: j.jsxs("div", {
              className: "ozuftl9m sjgh65i0 tvfksri0 tr9rh885",
              children: [
                j.jsx("div", {
                  className:
                    "hcukyx3x n851cfcs cxmmr5t8 j0t1dd8h g1cxx5fr n3ffmt46 a5q79mjw j83agx80 m9hp224e aovydwv3",
                  children: h._("Stickers"),
                }),
                j.jsx("div", {
                  className: "taijpn5t j83agx80",
                  children: a.map(function (a, b) {
                    var d;
                    return j.jsx(
                      c("StoriesViewerSheetStickerInteraction.react"),
                      {
                        stickerImageLabel:
                          (d = a.reaction_sticker) == null
                            ? void 0
                            : (d = d.sticker_asset) == null
                            ? void 0
                            : d.accessibility_label,
                        stickerImageURL:
                          (d = a.reaction_sticker) == null
                            ? void 0
                            : (d = d.sticker_asset) == null
                            ? void 0
                            : d.image_asset_url,
                        stickerInteractionCount:
                          (d = a.reaction_sticker) == null
                            ? void 0
                            : d.total_reaction_count,
                      },
                      b
                    );
                  }),
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
  "StoriesSuspenseViewerSheetPageStoryContent.react",
  [
    "fbt",
    "CometRelay",
    "StoriesEnums",
    "StoriesSuspenseViewerSheetPageStoryContent_bucket.graphql",
    "StoriesSuspenseViewerSheetPageStoryContent_card.graphql",
    "StoriesSuspenseViewerSheetPreviewTray.react",
    "StoriesViewerSheetAttributionInfo.react",
    "StoriesViewerSheetHeader.react",
    "StoriesViewerSheetInsights.react",
    "StoriesViewerSheetInsightsNullState.react",
    "StoriesViewerSheetInsightsStickyFooter.react",
    "StoriesViewerSheetInsightsTransitionState.react",
    "StoriesViewerSheetPollResult.react",
    "StoriesViewerSheetStickerInteractionInfo.react",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    function a(a) {
      var e,
        f,
        g,
        l = a.bucket;
      a = a.card;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesSuspenseViewerSheetPageStoryContent_card.graphql")),
        a
      );
      l = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "StoriesSuspenseViewerSheetPageStoryContent_bucket.graphql"
            )),
        l
      );
      e =
        a == null
          ? void 0
          : (e = a.story_card_seen_state) == null
          ? void 0
          : (e = e.totalSeenCount) == null
          ? void 0
          : e.count;
      var m = c("orEmptyArray")(a == null ? void 0 : a.story_overlays);
      f =
        (f =
          a == null
            ? void 0
            : (f = a.story_card_info) == null
            ? void 0
            : f.viewer_sheet_style) != null
          ? f
          : "";
      var n = m.find(function (a) {
        return (
          a.__typename === d("StoriesEnums").STORY_OVERLAY_TYPES.POLL_STICKER
        );
      });
      m = m.filter(function (a) {
        return (
          a.__typename ===
          d("StoriesEnums").STORY_OVERLAY_TYPES.INTERACTIVE_STICKER
        );
      });
      g = l == null ? void 0 : (g = l.owner) == null ? void 0 : g.id;
      l =
        l == null
          ? void 0
          : (l = l.owner) == null
          ? void 0
          : (l = l.lonitudinal_insights_qe_check) == null
          ? void 0
          : l.stories_insights_surface_enabled;
      var o = k.jsx(c("StoriesViewerSheetHeader.react"), {
        children: h._("Insights"),
      });
      if (
        f === d("StoriesEnums").VIEWERSHEET_STYLE.USER_TRANSITION ||
        f === d("StoriesEnums").VIEWERSHEET_STYLE.PAGE_TRANSITION
      )
        return k.jsxs("div", {
          className: "k4urcfbm e9vueds3",
          children: [
            o,
            k.jsx(c("StoriesSuspenseViewerSheetPreviewTray.react"), {}),
            k.jsx(c("StoriesViewerSheetInsightsTransitionState.react"), {}),
          ],
        });
      else if (e == null || e === 0)
        return k.jsxs("div", {
          className: "k4urcfbm e9vueds3",
          children: [
            o,
            k.jsx(c("StoriesSuspenseViewerSheetPreviewTray.react"), {}),
            k.jsx(c("StoriesViewerSheetAttributionInfo.react"), { card: a }),
            k.jsx(c("StoriesViewerSheetInsightsNullState.react"), {}),
          ],
        });
      return k.jsxs("div", {
        className: "k4urcfbm e9vueds3",
        children: [
          o,
          k.jsx(c("StoriesSuspenseViewerSheetPreviewTray.react"), {}),
          k.jsx(c("StoriesViewerSheetAttributionInfo.react"), { card: a }),
          k.jsx(c("StoriesViewerSheetInsights.react"), { card: a }),
          k.jsx(c("StoriesViewerSheetPollResult.react"), {
            overlayPoll: n,
            showVoterList: !1,
          }),
          k.jsx(c("StoriesViewerSheetStickerInteractionInfo.react"), {
            reactionStickers: m,
          }),
          l === !0 &&
            k.jsx(c("StoriesViewerSheetInsightsStickyFooter.react"), {
              pageID: g,
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
  "StoriesSuspenseViewerSheet.react",
  [
    "CometRelay",
    "CometRouteRenderType",
    "CometScrollableArea.react",
    "StoriesBehaviorHelpContext",
    "StoriesLoggerContext",
    "StoriesSuspenseBucketTransitioningContext",
    "StoriesSuspenseContuxContext",
    "StoriesSuspensePauseOnHoverContainer.react",
    "StoriesSuspenseViewerSheetPageStoryContent.react",
    "StoriesSuspenseViewerSheetSelfStoryContent.react",
    "StoriesSuspenseViewerSheet_bucket.graphql",
    "StoriesViewerSheetContext",
    "StoriesViewerSheetTypes",
    "react",
    "stylex",
    "useCometWindowFitNavPaneAndViewerSheet",
    "useViewerSheetPreviewImageURIList",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useLayoutEffect,
      l = e.useMemo,
      m = e.useRef,
      n = {
        container: { height: "datstx6m", width: "k4urcfbm" },
        root: {
          backgroundColor: "cwj9ozl2",
          display: "j83agx80",
          height: "datstx6m",
          width: "k4urcfbm",
        },
        spaceForCometAppNavigation: {
          height: "ay7djpcl",
          marginBottom: "oygrvhab",
        },
      };
    function a(a) {
      var e,
        f = a.bucket,
        g = a.toggleViewerSheet,
        o = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("StoriesSuspenseViewerSheet_bucket.graphql")),
          f
        );
      a = j(c("StoriesSuspenseContuxContext"));
      var p = a.cardIndex;
      f = j(c("StoriesLoggerContext"));
      var q = f.logger;
      a = j(c("StoriesSuspenseBucketTransitioningContext"));
      var r = a.isBucketTransitionInProgress;
      f = j(c("StoriesBehaviorHelpContext"));
      a = f.canAddToStory;
      var s = f.canSeeViewerSheet;
      f = f.whichViewerSheet;
      var t = function () {
          return v().length;
        },
        u = function () {
          return t() > 0;
        },
        v = function () {
          var a;
          return (
            (o == null
              ? void 0
              : (a = o.unified_stories) == null
              ? void 0
              : a.edges) || []
          );
        },
        w = function () {
          if (p < 0) return null;
          var a = v();
          return p > a.length - 1 ? null : (a = a[p]) == null ? void 0 : a.node;
        };
      e =
        (o == null
          ? void 0
          : (e = o.unified_stories) == null
          ? void 0
          : e.edges) || [];
      e = e
        .map(function (a) {
          return a.node;
        })
        .filter(Boolean);
      var x = c("useViewerSheetPreviewImageURIList")(e);
      e = c("useCometWindowFitNavPaneAndViewerSheet")();
      var y = s() && u() && e;
      s = w();
      var z = s == null ? void 0 : s.id,
        A = m(null),
        B = m(null),
        C = m(null);
      u = d("CometRouteRenderType").useIsPushView();
      k(
        function () {
          g(y);
          var a = A.current !== z && z !== "" && z != null;
          if (!r && a) {
            y && q.openViewerSheetLog();
            if (B.current && y) {
              a = (a = B.current.children) == null ? void 0 : a[0];
              a && (C.current = a.cloneNode(!0));
            }
            A.current = z;
          }
        },
        [y, g, z, q, r, p]
      );
      e = null;
      switch (f()) {
        case c("StoriesViewerSheetTypes").PAGE_STORY_VIEWERSHEET:
          e = i.jsx(c("StoriesSuspenseViewerSheetPageStoryContent.react"), {
            bucket: o,
            card: s,
          });
          break;
        case c("StoriesViewerSheetTypes").SELF_STORY_VIEWERSHEET:
          e = i.jsx(c("StoriesSuspenseViewerSheetSelfStoryContent.react"), {
            bucket: o,
            card: s,
          });
          break;
        default:
          e = i.jsx("div", {
            dangerouslySetInnerHTML: {
              __html:
                (f = (w = C.current) == null ? void 0 : w.outerHTML) != null
                  ? f
                  : "",
            },
            "data-testid": void 0,
          });
      }
      var D = a();
      s = l(
        function () {
          return { canAddToStory: D, storiesPreviewUriList: x };
        },
        [D, x]
      );
      return i.jsx(c("StoriesSuspensePauseOnHoverContainer.react"), {
        children: i.jsx(c("StoriesViewerSheetContext").Provider, {
          value: s,
          children: i.jsx("div", {
            className: c("stylex")(n.root),
            "data-testid": void 0,
            children: i.jsxs(c("CometScrollableArea.react"), {
              horizontal: !1,
              vertical: !0,
              xstyle: n.container,
              children: [
                u
                  ? i.jsx("div", {
                      className: c("stylex")(n.spaceForCometAppNavigation),
                    })
                  : null,
                i.jsx("span", {
                  ref: function (a) {
                    return (B.current = a);
                  },
                  children: e,
                }),
              ],
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
  "StoriesTapStoryOverlay.react",
  [
    "fbt",
    "CometPressable.react",
    "CometTheme.react",
    "TetraText.react",
    "react",
    "stylex",
    "useStoriesViewerDimensions",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        card: {
          backgroundColor: "hybvsw6c",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
        },
        pressable: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          justifyContent: "taijpn5t",
          width: "k4urcfbm",
        },
        root: { height: "datstx6m", position: "pmk7jnqg", top: "fcg2cn6m" },
      };
    function a(a) {
      a = a.onTap;
      var b = c("useStoriesViewerDimensions")();
      return i.jsx("div", {
        className: c("stylex")(j.root),
        style: b,
        children: i.jsx(c("CometTheme.react"), {
          theme: "dark",
          children: i.jsx("div", {
            className: c("stylex")(j.card),
            style: b,
            children: i.jsx(c("CometPressable.react"), {
              onPress: a,
              xstyle: j.pressable,
              children: i.jsx(c("TetraText.react"), {
                type: "body3",
                children: h._("Click to view story"),
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
  "StoriesViewerSheetOverlayFooter.react",
  [
    "fbt",
    "ix",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometPressable.react",
    "CometRelay",
    "StoriesGating",
    "StoriesViewerSheetOverlayFooter_card.graphql",
    "StoriesViewerSheetViewerListHeader.react",
    "TetraIcon.react",
    "TetraOverlappingFacepile.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = {
        chevron: { marginStart: "kkf49tns" },
        column: { height: "datstx6m", width: "k4urcfbm" },
        gradientOverlay: {
          backgroundImage: "auggtxa1",
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          height: "d23ldmr1",
          position: "pmk7jnqg",
          start: "j9ispegn",
        },
        pressable: { height: "datstx6m", width: "k4urcfbm" },
        sectionLine: {
          backgroundColor: "cubx1xtm",
          height: "ay7djpcl",
          marginStart: "h676nmdw",
          marginTop: "aahdfvyu",
          width: "gjzvkazv",
        },
        viewerInfo: {
          bottom: "gubt14e3",
          end: "n7fi1qx3",
          height: "gfu8pxt1",
          position: "pmk7jnqg",
          start: "j9ispegn",
          zIndex: "tkr6xdv7",
        },
        viewerInfoV3: { bottom: "eud3zkil" },
        viewers: {
          color: "qrtewk5h",
          marginTop: "kvgmc6g5",
          marginEnd: "cxmmr5t8",
          marginBottom: "oygrvhab",
          marginStart: "hcukyx3x",
        },
      };
    function a(a) {
      var e,
        f = a.card,
        g = a.showOverlay;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("StoriesViewerSheetOverlayFooter_card.graphql")),
        f
      );
      f =
        (a == null
          ? void 0
          : (f = a.story_card_info) == null
          ? void 0
          : (f = f.viewers) == null
          ? void 0
          : f.nodes) || [];
      f = f.map(function (a) {
        return {
          onPress: function () {
            return g();
          },
          source: {
            uri:
              (a == null
                ? void 0
                : (a = a.profile_picture) == null
                ? void 0
                : a.uri) || "",
          },
        };
      });
      e =
        (a == null
          ? void 0
          : (e = a.story_card_info) == null
          ? void 0
          : (e = e.viewers) == null
          ? void 0
          : e.count) || 0;
      var m = d("StoriesGating").shouldShowViewerV3();
      return k.jsxs("div", {
        children: [
          k.jsx("div", { className: c("stylex")(l.gradientOverlay) }),
          k.jsx("div", {
            className: c("stylex")(l.viewerInfo, m && l.viewerInfoV3),
            children: k.jsx(c("CometPressable.react"), {
              onPress: function () {
                g();
              },
              overlayDisabled: !0,
              xstyle: l.pressable,
              children: k.jsxs(c("CometColumn.react"), {
                align: "start",
                verticalAlign: "top",
                xstyle: l.column,
                children: [
                  k.jsx(c("CometColumnItem.react"), {
                    paddingHorizontal: 16,
                    children: k.jsx("div", {
                      className: c("stylex")(l.chevron),
                      children: k.jsx(c("TetraIcon.react"), {
                        alt: h._("Show more"),
                        color: "white",
                        icon: d("fbicon")._(i("505581"), 24),
                      }),
                    }),
                  }),
                  k.jsxs(c("CometColumnItem.react"), {
                    paddingHorizontal: 16,
                    children: [
                      k.jsx(c("StoriesViewerSheetViewerListHeader.react"), {
                        cardSeenState: a,
                        showIcon: !1,
                        showNewCount: !1,
                        xstyle: l.viewers,
                      }),
                      !d("StoriesGating").shouldEnableAnonymousViews() &&
                        k.jsx("div", { className: c("stylex")(l.sectionLine) }),
                    ],
                  }),
                  !d("StoriesGating").shouldEnableAnonymousViews() &&
                    k.jsx(c("CometColumnItem.react"), {
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      children: k.jsx(c("TetraOverlappingFacepile.react"), {
                        count: e,
                        items: f,
                        size: 24,
                      }),
                    }),
                ],
              }),
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
  "StoriesViewerSheetOverlay.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometRelay",
    "StoriesBehaviorHelpContext",
    "StoriesGating",
    "StoriesPauseReasons",
    "StoriesSuspenseBucketTransitioningContext",
    "StoriesSuspenseContuxContext",
    "StoriesSuspensePauseContext",
    "StoriesViewerSheetOverlayFooter.react",
    "StoriesViewerSheetOverlay_bucket.graphql",
    "TetraIcon.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useContext,
      m = e.useState,
      n = {
        closeButton: { end: "swmj3c3o", position: "pmk7jnqg", top: "fcg2cn6m" },
        overlay: {
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          bottom: "labbqbtg",
          end: "n7fi1qx3",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          paddingEnd: "ph5uu5jm",
          paddingBottom: "e5nlhep0",
          paddingStart: "b3onmgus",
          paddingTop: "gme6tn0m",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "o60ks4k0",
          zIndex: "kavbgo14",
        },
        overlayHeader: {
          backgroundColor: "d6rk862h",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          end: "n7fi1qx3",
          height: "lc891dc2",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "fcg2cn6m",
          transitionDuration: "c5ndavph",
          transitionProperty: "art1omkt",
          transitionTimingFunction: "ot9fgl3s",
          zIndex: "tkr6xdv7",
        },
        overlayHeaderHovered: { backgroundColor: "g5ia77u1" },
        overlayHeaderV3: { top: "kr520xx4" },
        overlayV3: { bottom: "eh5mwn1z", top: "ake02033" },
      };
    function a(a) {
      var e = a.bucket,
        f = a.children,
        g = a.isEndOfTray,
        o = a.showOverlay,
        p = a.toggleOverlay;
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("StoriesViewerSheetOverlay_bucket.graphql")),
        e
      );
      e = m(!1);
      var q = e[0],
        r = e[1];
      e = l(c("StoriesSuspenseContuxContext"));
      e = e.cardIndex;
      var s = l(c("StoriesBehaviorHelpContext"));
      s = s.canSeeViewerSheet;
      var t = l(c("StoriesSuspensePauseContext")),
        u = t.setPause;
      t = l(c("StoriesSuspenseBucketTransitioningContext"));
      t = t.isBucketTransitionInProgress;
      a =
        a == null ? void 0 : (a = a.unified_stories) == null ? void 0 : a.edges;
      var v = (a == null ? void 0 : a.length) || 0;
      v = a != null && v > 0;
      var w = (a == null ? void 0 : a[e]) != null;
      if (!s() || a == null || !v || !w || t || g) return null;
      v = (s = a[e]) == null ? void 0 : s.node;
      if (!o)
        return k.jsx(c("StoriesViewerSheetOverlayFooter.react"), {
          card: v,
          showOverlay: function () {
            u(!0, d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY), p(!0);
          },
        });
      w = function () {
        u(!1, d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY), p(!1), r(!1);
      };
      t = d("StoriesGating").shouldShowViewerV3();
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(c("CometPressable.react"), {
            hideHoverOverlay: !0,
            label: h._("Close"),
            onHoverChange: function () {
              return r(!q);
            },
            onPress: w,
            testid: void 0,
            xstyle: [
              n.overlayHeader,
              t && n.overlayHeaderV3,
              q && n.overlayHeaderHovered,
            ],
          }),
          k.jsxs("div", {
            className: c("stylex")(n.overlay, t && n.overlayV3),
            children: [
              f,
              k.jsx("div", {
                className: c("stylex")(n.closeButton),
                children: k.jsx(c("TetraIcon.react"), {
                  alt: h._("Close"),
                  color: "primary",
                  icon: d("fbicon")._(i("478233"), 20),
                  onPress: w,
                }),
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
  "useStoriesShowTapStoryOverlay",
  [
    "CometRouteRenderType",
    "StoriesGating",
    "StoriesQueryArgumentsContext",
    "cr:808374",
    "react",
    "useRouteReferrer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useContext,
      j = e.useEffect,
      k = e.useState;
    function a(a) {
      var e = k(!1),
        f = e[0],
        g = e[1];
      e = i(c("StoriesQueryArgumentsContext"));
      var l = e.initialBucketID;
      e = d("CometRouteRenderType").useIsPushView();
      var m = d("StoriesGating").isComet(),
        n = c("useRouteReferrer")(),
        o = h(function () {
          g(!0);
        }, []);
      j(
        function () {
          if (f) return;
          a !== l && g(!0);
        },
        [a, f, l]
      );
      if (d("StoriesGating").isTest())
        return { onPressTapOverlay: o, shouldShowTapOverlay: !1 };
      var p = !1;
      if (m) {
        n =
          n == null
            ? void 0
            : (m = n.tracePolicy) == null
            ? void 0
            : m.startsWith("comet.page.admin");
        p = !e || !!n;
      } else if (b("cr:808374")) {
        m = b("cr:808374").getReferrerURI();
        e = m == null ? null : m.getRegisteredDomain();
        n = m == null ? null : m.getPath();
        m = m == null ? void 0 : m.getSubdomain();
        p =
          e == null || n == null
            ? !0
            : (!n.startsWith("/") && !e.includes("facebook")) ||
              m === "business";
      }
      return {
        onPressTapOverlay: o,
        shouldShowTapOverlay: l !== "" && l === a && p && !f,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseBucketChangeHandler",
  [
    "CometRelay",
    "StoriesLoggerSession",
    "StoriesLoggingConstants",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseBucketTransitioningContext",
    "react",
    "useBucketChanged",
    "useStoriesSuspenseBucketChangeHandler_bucket.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useEffect;
    function a(a, e) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useStoriesSuspenseBucketChangeHandler_bucket.graphql")),
        a
      );
      a = a == null ? void 0 : a.id;
      var f = i(c("StoriesSuspenseBucketTransitioningContext")),
        g = f.setIsBucketTransitionInProgress;
      f = i(c("StoriesSuspenseBucketDataContext"));
      f = f.bucketData;
      var k = f.isEndOfTray;
      f = c("useBucketChanged")(a);
      var l = f.bucketChanged,
        m = f.bucketChangedFromAnotherBucket;
      j(
        function () {
          k && e.openStoryLog(null, !0),
            l &&
              (g(!1),
              m
                ? e.openStoryLog(
                    c("StoriesLoggingConstants").ACTION_SOURCE.VIEWER
                  )
                : e.openStoryLog(
                    d("StoriesLoggerSession").getOpenViewerSource()
                  ));
        },
        [l, m, e, k, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseCardIndexInitializer",
  [
    "CometRelay",
    "StoriesConstants",
    "react",
    "useBucketChanged",
    "useStoriesSuspenseCardIndexInitializer_bucket.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useEffect;
    function j(b, a) {
      var c;
      c =
        b == null ? void 0 : (c = b.unified_stories) == null ? void 0 : c.edges;
      c =
        c == null
          ? []
          : c.map(function (a) {
              return a.node;
            });
      var d = !!(b == null ? void 0 : b.is_bucket_seen_by_viewer),
        e =
          b == null
            ? void 0
            : (b = b.first_story_to_show) == null
            ? void 0
            : b.id;
      b = e === null || e === void 0;
      if (d || b) return a == null ? 0 : Math.min(a, c.length - 1);
      else
        return Math.max(
          0,
          c.findIndex(function (a) {
            return (a == null ? void 0 : a.id) === e;
          })
        );
    }
    var k = {};
    function a(a, e, f) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useStoriesSuspenseCardIndexInitializer_bucket.graphql")),
        a
      );
      var g = a == null ? void 0 : a.id,
        l = e,
        m = c("useBucketChanged")(g),
        n = m.bucketChanged;
      m = m.bucketChangedFromAnotherBucket;
      if (
        n &&
        (m || e === d("StoriesConstants").CARD.DEFAULT_SUSPENSE_CARD_INDEX)
      ) {
        n = j(a, g == null ? g : k[g]);
        l = n;
      }
      i(
        function () {
          l !== e && f(l);
        },
        [g, e, l, f]
      );
      g != null
        ? (k[g] = l)
        : e !== d("StoriesConstants").CARD.DEFAULT_SUSPENSE_CARD_INDEX &&
          f(d("StoriesConstants").CARD.DEFAULT_SUSPENSE_CARD_INDEX);
      return l;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseContentDataSelectors",
  [
    "CometRelay",
    "StoriesSuspenseBucketDataContext",
    "react",
    "useStoriesSuspenseContentDataSelectors_bucket.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useContext;
    function a(a, e) {
      var f = i(c("StoriesSuspenseBucketDataContext"));
      f = f.bucketData;
      var g = f.isEndOfTray,
        j = f.isFirstBucket,
        k = f.isLastBucket;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useStoriesSuspenseContentDataSelectors_bucket.graphql")),
        a
      );
      var l = f == null ? void 0 : f.unified_stories,
        m =
          (l == null ? void 0 : (a = l.edges) == null ? void 0 : a.length) || 0;
      return {
        getCardCount: function () {
          return m;
        },
        getCardID: function (a) {
          return a >= m || a < 0
            ? null
            : (a =
                l == null
                  ? void 0
                  : (a = l.edges[a]) == null
                  ? void 0
                  : (a = a.node) == null
                  ? void 0
                  : a.id) != null
            ? a
            : null;
        },
        getCurrentCardID: function () {
          var a;
          return l != null
            ? (a = l.edges[e]) == null
              ? void 0
              : (a = a.node) == null
              ? void 0
              : a.id
            : null;
        },
        isAfterLastCard: function (a) {
          return a >= m;
        },
        isBeforeFirstCard: function (a) {
          return a < 0;
        },
        isCurrentLastCard: function () {
          return g ? !0 : e === m - 1;
        },
        isFirstCardInFirstBucket: function (a) {
          return a <= 0 && j;
        },
        isLastCardInLastBucket: function (a) {
          return !k ? !1 : a >= m - 1;
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseContuxActions",
  [
    "QuickPerformanceLogger",
    "StoriesEnums",
    "StoriesLoggingConstants",
    "StoriesModuleStoryViewerThreadTransitionTtiWwwQPLEvent",
    "StoriesPauseReasons",
    "StoriesSuspenseBucketDataContext",
    "react",
    "storiesViewerSuspenseEmitter",
    "useStoriesViewerClose",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a(a) {
      var b = a.canUseExtendedViewer,
        e = a.cardIndex,
        f = a.isFirstBucket,
        g = a.isLastBucket,
        j = a.isLastCard,
        k = a.isSingleBucketViewer,
        l = a.logger,
        m = a.setCardIndex,
        n = a.setPause,
        o = a.shouldShowEndCard;
      a = i(c("StoriesSuspenseBucketDataContext"));
      var p = a.setNavigationDirection,
        q = e === 0 && f,
        r = j && g,
        s = h(
          function (a, b) {
            b != null && l.storyNavigationLog(b),
              n(!0, d("StoriesPauseReasons").CARD_TRANSITION_INITIATED),
              window.requestAnimationFrame(function () {
                m(a);
              });
          },
          [l, m, n]
        ),
        t = c("useStoriesViewerClose")(),
        u = h(
          function (a, e, h) {
            e === void 0 && (e = !1);
            h === void 0 && (h = 1);
            if (k && !b) {
              t(c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.AUTO_EXIT);
              return;
            }
            e &&
              l.storyNavigationLog(
                a === d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET
                  ? c("StoriesLoggingConstants").NAVIGATION_GESTURE.SWIPE_RIGHT
                  : c("StoriesLoggingConstants").NAVIGATION_GESTURE.SWIPE_LEFT
              );
            if (a === d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET && g) return;
            if (a === d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET && f) return;
            c("QuickPerformanceLogger").markerAnnotate(
              c("StoriesModuleStoryViewerThreadTransitionTtiWwwQPLEvent"),
              { string: { TRANSITION_TYPE: "BUCKET" } }
            );
            n(!0, d("StoriesPauseReasons").BUCKET_TRANSITION);
            p(a);
            c("storiesViewerSuspenseEmitter").requestBucketTransition(a, h);
          },
          [f, g, k, l, p, n, t, b]
        );
      a = h(
        function (a, b) {
          var f = r && a === d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD,
            g = q && a === d("StoriesEnums").NAV_DIRECTIONS.PREV_CARD;
          if (f || g) return;
          if (a === d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD && j)
            l.storyNavigationLog(b),
              u(d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET);
          else if (
            a === d("StoriesEnums").NAV_DIRECTIONS.PREV_CARD &&
            (e === 0 || o)
          )
            l.storyNavigationLog(b),
              u(d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET);
          else {
            f =
              a === d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD ? e + 1 : e - 1;
            c("QuickPerformanceLogger").markerEnd(
              c("StoriesModuleStoryViewerThreadTransitionTtiWwwQPLEvent"),
              4
            );
            c("QuickPerformanceLogger").markerStart(
              c("StoriesModuleStoryViewerThreadTransitionTtiWwwQPLEvent")
            );
            s(f, b);
          }
        },
        [e, s, q, j, r, l, u, o]
      );
      var v = h(
        function () {
          j && u(d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET);
        },
        [j, u]
      );
      return {
        cardIndexChanged: s,
        handleCardDeletion: v,
        performBucketNavigation: u,
        performCardNavigation: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseIsLastCardHandler",
  [
    "CometRelay",
    "useStoriesSuspenseContentDataSelectors",
    "useStoriesSuspenseIsLastCardHandler_bucket.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, e) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useStoriesSuspenseIsLastCardHandler_bucket.graphql")),
        a
      );
      a = c("useStoriesSuspenseContentDataSelectors")(a, e);
      return a.isCurrentLastCard();
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspensePendingRefetchBucketIDsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { setShouldRefetchSelfBucket: function () {} };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useStoriesSuspenseRefetchOnPost",
  [
    "FBLogger",
    "StoriesConstants",
    "StoriesSuspensePendingRefetchBucketIDsContext",
    "WebPixelRatio",
    "cr:809609",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useContext,
      i = e.useEffect,
      j = e.useRef,
      k = e.useState;
    function a(a, e, f) {
      f === void 0 && (f = !0);
      var g = k(!1),
        l = g[0],
        m = g[1];
      g = h(c("StoriesSuspensePendingRefetchBucketIDsContext"));
      var n = g.setShouldRefetchSelfBucket,
        o = j({ isOwnBucket: f, refetchID: a });
      i(
        function () {
          f && n(!1);
        },
        [f, n]
      );
      i(
        function () {
          o.current = { isOwnBucket: f, refetchID: a };
        },
        [a, f]
      );
      i(
        function () {
          var f = null;
          b("cr:809609") != null &&
            (f = b("cr:809609")({
              onPostStarted: function () {
                m(!0);
              },
              onPostSucceeded: function (b) {
                b &&
                  c("FBLogger")("fbstories").warn(
                    "User bucket fetch failed: %s",
                    b.toString()
                  ),
                  a != null &&
                    c("setTimeout")(function () {
                      var a = o.current.refetchID,
                        b = o.current.isOwnBucket;
                      b
                        ? e(
                            { id: a, scale: d("WebPixelRatio").get() },
                            { fetchPolicy: "network-only" }
                          )
                        : n(!0);
                      m(!1);
                    }, d("StoriesConstants").TIMEOUT_FOR_SERVER_TO_FINISH_WORK);
              },
            }));
          return function () {
            f != null && f();
          };
        },
        [a, f, e, n]
      );
      return l;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseContentPane.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "CometToastBridge.react",
    "FBLogger",
    "HiddenSubtreePassiveContext",
    "StoriesActorContext",
    "StoriesBehaviorHelpContextProvider.react",
    "StoriesBucketError.react",
    "StoriesCloseButton.react",
    "StoriesConstants",
    "StoriesFeedbackEditorStateContextProvider.react",
    "StoriesGating",
    "StoriesLoggerContext",
    "StoriesPauseReasons",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseBucketTransitionView.react",
    "StoriesSuspenseContentPane_LWRAnimations.graphql",
    "StoriesSuspenseContentPane_bucket.graphql",
    "StoriesSuspenseContentPane_user.graphql",
    "StoriesSuspenseContentSlidingTransition.react",
    "StoriesSuspenseContuxActionsContext",
    "StoriesSuspenseContuxContext",
    "StoriesSuspenseEmptyBucketError.react",
    "StoriesSuspenseFeedback.react",
    "StoriesSuspenseNavigationButtons.react",
    "StoriesSuspensePauseContext",
    "StoriesSuspenseViewerSheet.react",
    "StoriesTapStoryOverlay.react",
    "StoriesUnselected.react",
    "StoriesViewerFooter.react",
    "StoriesViewerSheetOverlay.react",
    "StorieslwrPlaybackContextProvider.react",
    "WebPixelRatio",
    "cr:121",
    "react",
    "useBucketChanged",
    "useStoriesIsUploading",
    "useStoriesLogger",
    "useStoriesShowTapStoryOverlay",
    "useStoriesSuspenseBucketChangeHandler",
    "useStoriesSuspenseCardIndexInitializer",
    "useStoriesSuspenseContentDataSelectors",
    "useStoriesSuspenseContuxActions",
    "useStoriesSuspenseIsLastCardHandler",
    "useStoriesSuspenseRefetchOnPost",
    "useStoriesTransitionPageListener",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useMemo,
      p = e.useRef,
      q = e.useState,
      r =
        h !== void 0 ? h : (h = b("StoriesSuspenseContentPane_bucket.graphql"));
    function a(a) {
      var e = a.LWRAnimations,
        f = a.bucket,
        g = a.initialBucketID,
        h = a.initialCardIndex,
        s = a.isSingleBucketViewer;
      a = a.user;
      var t = m(c("StoriesSuspenseBucketDataContext"));
      t = t.bucketData;
      var u = t.bucketID,
        v = t.bucketIndex,
        w = t.canShowStoryOverlay,
        x = t.isEndOfTray,
        y = t.isFirstBucket,
        z = t.isLastBucket,
        A = t.isSecondBucket,
        B = t.nextBuckets;
      t = t.nextBucketsCount;
      var C = c("useBucketChanged")(u),
        D = C.bucketChanged;
      C = c("useStoriesShowTapStoryOverlay")(u);
      var E = C.onPressTapOverlay;
      C = C.shouldShowTapOverlay;
      var F = q(function () {
          return u === g
            ? h
            : d("StoriesConstants").CARD.DEFAULT_SUSPENSE_CARD_INDEX;
        }),
        G = F[0];
      F = F[1];
      var H = m(c("StoriesSuspensePauseContext")),
        I = H.setPause;
      H = m(c("StoriesActorContext"));
      var J = H.actorID;
      H = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesSuspenseContentPane_LWRAnimations.graphql")),
        e
      );
      e = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("StoriesSuspenseContentPane_user.graphql")),
        a
      );
      a = d("CometRelay").useRefetchableFragment(r, f);
      f = a[0];
      var K = a[1],
        L =
          f == null
            ? void 0
            : (a = f.story_bucket_owner) == null
            ? void 0
            : a.id,
        M = c("useStoriesSuspenseCardIndexInitializer")(f, G, F);
      a = c("useStoriesSuspenseContentDataSelectors")(f, M);
      G = a.getCardCount;
      a = a.getCurrentCardID;
      var N = a(),
        O = G();
      a = q(O);
      G = a[0];
      var P = a[1],
        Q = c("useStoriesSuspenseIsLastCardHandler")(f, M),
        R = c("useStoriesLogger")(J, { bucketIndex: v, cardIndex: M }, f);
      c("useStoriesSuspenseBucketChangeHandler")(f, R);
      var S = s && d("StoriesGating").shouldUseExtendedViewer();
      a = q(!1);
      v = a[0];
      var T = a[1];
      a = c("useStoriesSuspenseContuxActions")({
        canUseExtendedViewer: S,
        cardIndex: M,
        isFirstBucket: y,
        isLastBucket: z,
        isLastCard: Q,
        isSingleBucketViewer: s,
        logger: R,
        setCardIndex: F,
        setPause: I,
        shouldShowEndCard: x,
      });
      y = q(!1);
      var U = y[0],
        V = y[1],
        W = p(!1);
      n(
        function () {
          var a = A && S && w;
          !W.current && a && ((W.current = !0), V(!0));
        },
        [A, S, w, W]
      );
      U && (!w || !A) && V(!1);
      U && I(!0, d("StoriesPauseReasons").EXTENDED_VIEWER);
      z = function () {
        I(!1, d("StoriesPauseReasons").EXTENDED_VIEWER), V(!1);
      };
      c("useStoriesSuspenseRefetchOnPost")(u, K, L === J);
      s = l(
        function () {
          L === J &&
            K(
              {
                id: u,
                scale: d("WebPixelRatio").get(),
                shouldEnableLiveInStories:
                  d("StoriesGating").shouldEnableLiveInStories(),
                shouldEnableLiveInStoriesDropdown:
                  d("StoriesGating").shouldEnableLiveInStoriesDropdown(),
                showSuggestedStickerReplies:
                  d("StoriesGating").shouldShowSuggestedStickerReplies(),
              },
              { fetchPolicy: "network-only" }
            );
        },
        [J, u, K, L]
      );
      c("useStoriesIsUploading")(s);
      F = o(
        function () {
          return {
            cardIndex: M,
            isFirstCard: M === 0,
            isLastCard: Q,
            isStoryOverlayActive: U,
          };
        },
        [M, Q, U]
      );
      var X = m(c("HiddenSubtreePassiveContext"));
      n(
        function () {
          var a = X.subscribeToChanges(function (a) {
            I(
              a.hiddenOrBackgrounded,
              d("StoriesPauseReasons").VISIBILITY_CHANGE
            );
          });
          return function () {
            return a.remove();
          };
        },
        [X, I]
      );
      c("useStoriesTransitionPageListener")(function () {
        R.closeStoryLog();
      });
      n(
        function () {
          D && (P(O), T(!1));
        },
        [D, O]
      );
      y = o(
        function () {
          return { logger: R };
        },
        [R]
      );
      if (C)
        return k.jsxs("div", {
          className:
            "k4urcfbm kr520xx4 j9ispegn pmk7jnqg taijpn5t datstx6m cbu4d94t j83agx80 bp9cbjyn",
          children: [
            k.jsx(c("StoriesTapStoryOverlay.react"), { onTap: E }),
            k.jsx(c("StoriesCloseButton.react"), {}),
          ],
        });
      if (!x && (L == null || G === 0) && !S)
        L == null &&
          u !== "" &&
          u != null &&
          c("FBLogger")("fbstories").warn(
            "Empty story bucket owner id, but bucket id [%s] is not null, initial bucket id is [%s]",
            u,
            g
          ),
          g === ""
            ? (s = k.jsx(c("StoriesUnselected.react"), {}))
            : (s = k.jsx(c("StoriesSuspenseEmptyBucketError.react"), {}));
      else {
        s = k.jsx(c("StoriesSuspenseContentSlidingTransition.react"), {
          viewerSheet: function () {
            return null;
          },
          children: k.jsx("div", {
            className:
              "k4urcfbm kr520xx4 j9ispegn pmk7jnqg taijpn5t datstx6m cbu4d94t j83agx80 bp9cbjyn",
            "data-testid": void 0,
            children: k.jsx(c("StorieslwrPlaybackContextProvider.react"), {
              children: k.jsxs(
                c("StoriesFeedbackEditorStateContextProvider.react"),
                {
                  cardID: (C = N) != null ? C : "",
                  setPause: I,
                  children: [
                    k.jsx(c("StoriesSuspenseNavigationButtons.react"), {
                      children: k.jsxs("div", {
                        className:
                          "l9j0dhe7 taijpn5t datstx6m cbu4d94t j83agx80 bp9cbjyn",
                        children: [
                          k.jsx(
                            c("StoriesSuspenseBucketTransitionView.react"),
                            {
                              animations: H,
                              bucket: f,
                              bucketID: u,
                              userData: e,
                            }
                          ),
                          !d("StoriesGating").isComet() &&
                            k.jsx("div", {
                              className:
                                "k4urcfbm pmk7jnqg dati1w0a ihqw7lf3 hv4rvrfc jb3vyjys taijpn5t j83agx80 rq0escxv hrjtxlhn bp9cbjyn",
                              children: k.jsx("div", {
                                className: "stjgntxs ni8dbmo4 teirxh3b",
                                children: k.jsx(
                                  c("CometToastBridge.react"),
                                  {}
                                ),
                              }),
                            }),
                          U &&
                            b("cr:121") != null &&
                            k.jsx(b("cr:121"), {
                              nextBuckets: B,
                              nextBucketsCount: t,
                              onDismiss: z,
                            }),
                          k.jsx(c("StoriesViewerSheetOverlay.react"), {
                            bucket: f,
                            isEndOfTray: x,
                            showOverlay: v,
                            toggleOverlay: T,
                            children: k.jsx(
                              c("StoriesSuspenseViewerSheet.react"),
                              { bucket: f, toggleViewerSheet: function () {} }
                            ),
                          }),
                        ],
                      }),
                    }),
                    !U &&
                      k.jsx(c("StoriesViewerFooter.react"), {
                        children: k.jsx(c("StoriesSuspenseFeedback.react"), {
                          LWRAnimations: H,
                          bucket: f,
                        }),
                      }),
                  ],
                }
              ),
            }),
          }),
        });
      }
      return k.jsx(c("StoriesLoggerContext").Provider, {
        value: y,
        children: k.jsx(c("StoriesSuspenseContuxContext").Provider, {
          value: F,
          children: k.jsx(c("StoriesSuspenseContuxActionsContext").Provider, {
            value: a,
            children: k.jsx(c("CometErrorBoundary.react"), {
              fallback: function (a) {
                var b;
                return k.jsx(c("StoriesBucketError.react"), {
                  bucketID: u,
                  cardID: (b = N) != null ? b : "",
                  error: a,
                });
              },
              children: k.jsx(c("StoriesBehaviorHelpContextProvider.react"), {
                bucketRef: f,
                ownerRef: f == null ? void 0 : f.story_bucket_owner,
                children: s,
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
  "StoriesSuspenseContentPaneRootWithEntryPoint.react",
  [
    "CometRelay",
    "QPLUserFlow",
    "StoriesActorProvider.react",
    "StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent",
    "StoriesSuspenseContentPane.react",
    "StoriesSuspenseContentPaneRootWithEntryPointQuery.graphql",
    "StoriesSuspensePauseContextProvider.react",
    "StoriesSuspensePendingRefetchBucketIDsContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useMemo,
      l = e.useRef;
    function m(a, b) {
      var c;
      c =
        a == null ? void 0 : (c = a.unified_stories) == null ? void 0 : c.edges;
      a =
        a == null
          ? void 0
          : (a = a.first_story_to_show) == null
          ? void 0
          : a.id;
      var d = b != null && b !== "" ? b : a;
      b =
        c && d != null
          ? c.findIndex(function (a) {
              return ((a = a.node) == null ? void 0 : a.id) === d;
            })
          : -1;
      return Math.max(b, 0);
    }
    function a(a) {
      var e = a.bucketID,
        f = a.initialBucketID,
        g = a.initialCardID,
        n = a.queryReference,
        o = a.updateFetchPolicy,
        p = a.viewerSessionID;
      a = a.viewSingle;
      var q = l(null),
        r = l(null);
      n = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b(
              "StoriesSuspenseContentPaneRootWithEntryPointQuery.graphql"
            )),
        n
      );
      j(
        function () {
          c("QPLUserFlow").addPoint(
            c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent"),
            "viewer loaded"
          );
        },
        [p]
      );
      var s =
          (p = m(n == null ? void 0 : n.initialBucket, g)) != null
            ? p
            : (g = q.current) == null
            ? void 0
            : g.initialCardIndex,
        t =
          (p = n == null ? void 0 : n.viewer) != null
            ? p
            : (g = q.current) == null
            ? void 0
            : g.viewer;
      g = t == null ? void 0 : (p = t.actor) == null ? void 0 : p.id;
      j(
        function () {
          q.current === null &&
            (q.current = { initialCardIndex: s, viewer: t });
        },
        [s, t]
      );
      if (
        g ===
        (n == null
          ? void 0
          : (p = n.bucket) == null
          ? void 0
          : (p = p.story_bucket_owner) == null
          ? void 0
          : p.id)
      ) {
        r.current = n == null ? void 0 : (p = n.bucket) == null ? void 0 : p.id;
      }
      p = k(
        function () {
          return {
            setShouldRefetchSelfBucket: function (a) {
              a = a && r.current === e ? "network-only" : "store-or-network";
              o(a);
            },
          };
        },
        [e, o]
      );
      return i.jsx("div", {
        className:
          "kr520xx4 j9ispegn pmk7jnqg stjgntxs ni8dbmo4 taijpn5t n7fi1qx3 j83agx80 i09qtzwb tqsryivl bp9cbjyn",
        children: i.jsx(c("StoriesActorProvider.react"), {
          actorID: g,
          children: i.jsx(
            c("StoriesSuspensePendingRefetchBucketIDsContext").Provider,
            {
              value: p,
              children: i.jsx(c("StoriesSuspensePauseContextProvider.react"), {
                children: i.jsx(c("StoriesSuspenseContentPane.react"), {
                  LWRAnimations: t,
                  bucket: n == null ? void 0 : n.bucket,
                  initialBucketID: f,
                  initialCardIndex: s,
                  isSingleBucketViewer: a,
                  user: n == null ? void 0 : n.me,
                }),
              }),
            }
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
