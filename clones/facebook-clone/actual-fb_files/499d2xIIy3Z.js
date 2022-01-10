if (self.CavalryLogger) {
  CavalryLogger.start_js(["YMQKWXh"]);
}

__d(
  "useStoriesRemoveEmptyBuckets_buckets.graphql",
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
        metadata: { plural: !0 },
        name: "useStoriesRemoveEmptyBuckets_buckets",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesIsBucketEmpty_buckets",
          },
          a,
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
                selections: [a],
                type: "Node",
                abstractKey: "__isNode",
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
  "StoriesViewerBucketPrefetcherMultiBucketsQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "blur" },
        c = { defaultValue: null, kind: "LocalArgument", name: "bucketIDs" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStories",
        },
        f = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStoriesDropdown",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "showSuggestedStickerReplies",
        },
        h = [{ kind: "Variable", name: "ids", variableName: "bucketIDs" }],
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
          name: "StoriesViewerBucketPrefetcherMultiBucketsQuery",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
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
                  type: "StoryBucket",
                  abstractKey: "__isStoryBucket",
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
          argumentDefinitions: [c, d, a, g, e, f],
          kind: "Operation",
          name: "StoriesViewerBucketPrefetcherMultiBucketsQuery",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
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
          id: "4442754992411278",
          metadata: {},
          name: "StoriesViewerBucketPrefetcherMultiBucketsQuery",
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
  "StoriesSuspenseNavigationPaneRootWithEntryPointQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "bucketsCount",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "extendedViewerInitialBucketID",
        },
        c = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "includeInitialBucket",
        },
        d = { defaultValue: null, kind: "LocalArgument", name: "pinnedIDs" },
        e = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        f = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "showExtendedViewerOverlay",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "storiesTrayType",
        },
        h = [
          {
            kind: "Variable",
            name: "id",
            variableName: "extendedViewerInitialBucketID",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        j = [i],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        l = [
          { kind: "Variable", name: "first", variableName: "bucketsCount" },
          {
            kind: "Variable",
            name: "front_pin_buckets",
            variableName: "pinnedIDs",
          },
          { kind: "Literal", name: "hide_self_bucket", value: !1 },
          {
            kind: "Variable",
            name: "set_stories_tray_type",
            variableName: "storiesTrayType",
          },
        ],
        m = {
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
                      name: "expiration_time",
                      storageKey: null,
                    },
                    i,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        n = {
          kind: "InlineFragment",
          selections: j,
          type: "Node",
          abstractKey: "__isNode",
        },
        o = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "story_bucket_owner",
          plural: !1,
          selections: [
            k,
            n,
            {
              kind: "InlineFragment",
              selections: [
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
          ],
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "story_bucket_type",
          storageKey: null,
        },
        q = {
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
        r = {
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
        s = [
          { kind: "Variable", name: "scale", variableName: "scale" },
          { kind: "Literal", name: "width", value: 40 },
        ],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      n = {
        alias: "owner",
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "story_bucket_owner",
        plural: !1,
        selections: [
          k,
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: s,
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: t,
                storageKey: null,
              },
            ],
            type: "Profile",
            abstractKey: "__isProfile",
          },
          n,
        ],
        storageKey: null,
      };
      var u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_bucket_live",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        w = [v],
        x = {
          kind: "InlineFragment",
          selections: w,
          type: "User",
          abstractKey: null,
        },
        y = {
          kind: "InlineFragment",
          selections: w,
          type: "Group",
          abstractKey: null,
        },
        z = {
          kind: "InlineFragment",
          selections: w,
          type: "Page",
          abstractKey: null,
        };
      w = {
        kind: "InlineFragment",
        selections: w,
        type: "Event",
        abstractKey: null,
      };
      v = {
        kind: "InlineFragment",
        selections: [
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
                  {
                    kind: "InlineFragment",
                    selections: [
                      v,
                      {
                        alias: "placeholder_picture",
                        args: s,
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "profile_picture",
                        plural: !1,
                        selections: t,
                        storageKey: null,
                      },
                    ],
                    type: "Profile",
                    abstractKey: "__isProfile",
                  },
                  x,
                  y,
                  z,
                  w,
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
                          q,
                          r,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "creation_time",
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
              n,
              u,
            ],
            type: "StoryBucket",
            abstractKey: "__isStoryBucket",
          },
        ],
        type: "Node",
        abstractKey: "__isNode",
      };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g],
          kind: "Fragment",
          metadata: null,
          name: "StoriesSuspenseNavigationPaneRootWithEntryPointQuery",
          selections: [
            {
              condition: "includeInitialBucket",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "extendedViewerBucket",
                  args: h,
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
                          name: "StoriesSuspenseNavigationPane_bucket",
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
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "bucketsCount",
                      variableName: "bucketsCount",
                    },
                    {
                      kind: "Variable",
                      name: "pinnedIDs",
                      variableName: "pinnedIDs",
                    },
                    {
                      kind: "Variable",
                      name: "showExtendedViewerOverlay",
                      variableName: "showExtendedViewerOverlay",
                    },
                    { kind: "Literal", name: "showNavPane", value: !0 },
                    {
                      kind: "Variable",
                      name: "storiesTrayType",
                      variableName: "storiesTrayType",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "StoriesSuspenseNavigationPane_user",
                },
              ],
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: j,
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
          argumentDefinitions: [e, d, a, f, c, b, g],
          kind: "Operation",
          name: "StoriesSuspenseNavigationPaneRootWithEntryPointQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                k,
                i,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: l,
                      concreteType: "UserToUnifiedStoryBucketsConnection",
                      kind: "LinkedField",
                      name: "unified_stories_buckets",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "UserToUnifiedStoryBucketsEdge",
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
                                k,
                                {
                                  kind: "TypeDiscriminator",
                                  abstractKey: "__isStoryBucket",
                                },
                                i,
                                m,
                                o,
                                p,
                                {
                                  condition: "showExtendedViewerOverlay",
                                  kind: "Condition",
                                  passingValue: !0,
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
                                              selections: [q, r],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    n,
                                    u,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "story_bucket_owner",
                                      plural: !1,
                                      selections: [x, y, z, w],
                                      storageKey: null,
                                    },
                                  ],
                                },
                                v,
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
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: l,
                      filters: [
                        "front_pin_buckets",
                        "hide_self_bucket",
                        "set_stories_tray_type",
                      ],
                      handle: "connection",
                      key: "useStoriesViewerBuckets_unified_stories_buckets",
                      kind: "LinkedHandle",
                      name: "unified_stories_buckets",
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
                  selections: [k, i],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              condition: "includeInitialBucket",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "extendedViewerBucket",
                  args: h,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    k,
                    i,
                    {
                      kind: "InlineFragment",
                      selections: [m, o, p, v],
                      type: "StoryBucket",
                      abstractKey: "__isStoryBucket",
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "6486001464747158",
          metadata: {},
          name: "StoriesSuspenseNavigationPaneRootWithEntryPointQuery",
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
  "useStoriesSuspenseNavListSelectors_buckets.graphql",
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
        metadata: { plural: !0 },
        name: "useStoriesSuspenseNavListSelectors_buckets",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesIsBucketEmpty_buckets",
          },
          a,
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
                selections: [a],
                type: "Node",
                abstractKey: "__isNode",
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
  "StoriesCarouselViewerBucketPrefetcherMultiBucketsQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "blur" },
        c = { defaultValue: null, kind: "LocalArgument", name: "bucketIDs" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStories",
        },
        f = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStoriesDropdown",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "showSuggestedStickerReplies",
        },
        h = [{ kind: "Variable", name: "ids", variableName: "bucketIDs" }],
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
          name: "name",
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
          name: "is_viewer_friend",
          storageKey: null,
        },
        q = [n],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_status",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        t = [s],
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        v = [u],
        w = [{ kind: "Literal", name: "first", value: 5 }],
        x = {
          alias: "isActive",
          args: null,
          kind: "ScalarField",
          name: "is_currently_active",
          storageKey: null,
        },
        y = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        z = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: y,
          storageKey: null,
        },
        A = {
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
        B = [i, j],
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "total_reaction_count",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        G = {
          kind: "InlineFragment",
          selections: k,
          type: "GenericAttachmentMedia",
          abstractKey: null,
        },
        H = {
          kind: "InlineFragment",
          selections: k,
          type: "MontageImage",
          abstractKey: null,
        },
        I = {
          kind: "InlineFragment",
          selections: k,
          type: "MontageVideo",
          abstractKey: null,
        },
        J = { kind: "Variable", name: "scale", variableName: "scale" },
        K = [J],
        L = [
          { kind: "Literal", name: "framework", value: "WARNING_SCREENS" },
          { kind: "Literal", name: "location", value: "story" },
        ],
        M = [{ kind: "Literal", name: "type", value: "FRIENDS" }],
        N = [{ kind: "Literal", name: "type", value: "CONTACTS" }],
        O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        P = { kind: "Variable", name: "blur", variableName: "blur" },
        Q = [
          { kind: "Literal", name: "height", value: 1920 },
          J,
          { kind: "Literal", name: "width", value: 1080 },
        ],
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        T = {
          args: null,
          fragment: b(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
        U = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: [O, T],
          storageKey: null,
        },
        V = [
          s,
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
      T = [T];
      var W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "color",
          storageKey: null,
        },
        X = [
          j,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_verified",
            storageKey: null,
          },
          {
            alias: null,
            args: [
              { kind: "Literal", name: "height", value: 40 },
              J,
              { kind: "Literal", name: "width", value: 40 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: y,
            storageKey: null,
          },
          s,
        ];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g],
          kind: "Fragment",
          metadata: null,
          name: "StoriesCarouselViewerBucketPrefetcherMultiBucketsQuery",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
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
                      name: "StoriesSuspenseCarouselCenterPane_bucket",
                    },
                  ],
                  type: "StoryBucket",
                  abstractKey: "__isStoryBucket",
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
          argumentDefinitions: [c, d, a, g, e, f],
          kind: "Operation",
          name: "StoriesCarouselViewerBucketPrefetcherMultiBucketsQuery",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
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
                          selections: [m, n],
                          type: "Page",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [o, n, p],
                          type: "User",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: q,
                          type: "Group",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: q,
                          type: "Event",
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
                                        r,
                                        {
                                          condition:
                                            "shouldEnableLiveInStories",
                                          kind: "Condition",
                                          passingValue: !0,
                                          selections: t,
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
                                      selections: v,
                                      storageKey: null,
                                    },
                                    {
                                      alias: "viewerList_viewers",
                                      args: w,
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
                                                    n,
                                                    {
                                                      alias: "lastActiveStatus",
                                                      args: null,
                                                      concreteType:
                                                        "LastActiveMessagesStatus",
                                                      kind: "LinkedField",
                                                      name: "last_active_messages_status",
                                                      plural: !1,
                                                      selections: [
                                                        x,
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
                                                    z,
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
                                                      selections: [A, u],
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
                                                  selections: B,
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
                                      args: w,
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
                                        C,
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
                                          selections: [D, n, E, F],
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
                                          selections: [D, E, n, F],
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
                                      args: w,
                                      concreteType:
                                        "StoryCardToStoryViewersConnection",
                                      kind: "LinkedField",
                                      name: "story_viewers",
                                      plural: !1,
                                      selections: [
                                        u,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "nodes",
                                          plural: !0,
                                          selections: [i, z, j],
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
                                        G,
                                        H,
                                        I,
                                        {
                                          alias: "previewImage",
                                          args: K,
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "image",
                                          plural: !1,
                                          selections: y,
                                          storageKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: L,
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
                                      selections: v,
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
                                      args: M,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: v,
                                      storageKey: 'seen_count(type:"FRIENDS")',
                                    },
                                    {
                                      alias: "connectionViewerCount",
                                      args: N,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_count",
                                      plural: !1,
                                      selections: v,
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
                                      selections: v,
                                      storageKey:
                                        'seen_count(type:"FOLLOWERS")',
                                    },
                                    {
                                      alias: "newFriendViewerCount",
                                      args: M,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_receipt_unseen_count",
                                      plural: !1,
                                      selections: v,
                                      storageKey:
                                        'seen_receipt_unseen_count(type:"FRIENDS")',
                                    },
                                    {
                                      alias: "newConnectionViewerCount",
                                      args: N,
                                      concreteType: "ApproximateCount",
                                      kind: "LinkedField",
                                      name: "seen_receipt_unseen_count",
                                      plural: !1,
                                      selections: v,
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
                                            C,
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
                                                O,
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
                                                        n,
                                                        z,
                                                        {
                                                          alias:
                                                            "lastActiveStatus",
                                                          args: null,
                                                          concreteType:
                                                            "LastActiveMessagesStatus",
                                                          kind: "LinkedField",
                                                          name: "last_active_messages_status",
                                                          plural: !1,
                                                          selections: [x],
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
                                  selections: [i, j, n],
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
                            p,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_eligible_for_story_reply_bar",
                              storageKey: null,
                            },
                            n,
                            o,
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            n,
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
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "first_story_to_show",
                      plural: !1,
                      selections: k,
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
                                                    P,
                                                    {
                                                      kind: "Literal",
                                                      name: "height",
                                                      value: 350,
                                                    },
                                                    J,
                                                  ],
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "image",
                                                  plural: !1,
                                                  selections: y,
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: Q,
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "image",
                                                  plural: !1,
                                                  selections: [R, S],
                                                  storageKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: Q,
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: y,
                                                      storageKey: null,
                                                    },
                                                    U,
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
                                                    r,
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
                                                      selections: B,
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
                                                          selections: V,
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
                                                          selections: V,
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
                                                          selections: y,
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
                                                    R,
                                                    S,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "TextWithEntities",
                                                      kind: "LinkedField",
                                                      name: "title",
                                                      plural: !1,
                                                      selections: [O],
                                                      storageKey: null,
                                                    },
                                                    U,
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
                                                      args: L,
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
                                                                    s,
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
                                                O,
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
                                                      selections: [i, s, l],
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
                                                s,
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
                                                          selections: B,
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
                                                          selections: [u, A],
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
                                                        s,
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
                                                    O,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "TextWithEntities",
                                                      kind: "LinkedField",
                                                      name: "text_with_entities",
                                                      plural: !1,
                                                      selections: T,
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
                                          selections: t,
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
                                            W,
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
                                              args: K,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "portrait_background_image",
                                              plural: !1,
                                              selections: y,
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
                                        U,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryBackgroundInfo",
                                          kind: "LinkedField",
                                          name: "story_default_background",
                                          plural: !1,
                                          selections: [
                                            W,
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
                                              selections: y,
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
                                          selections: T,
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
                                                        J,
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
                                                      selections: y,
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
                                          selections: v,
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
                                                      args: [P, J],
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: y,
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "Photo",
                                                  abstractKey: null,
                                                },
                                                l,
                                                G,
                                                H,
                                                I,
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
                                                s,
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
                                            s,
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
                                          selections: [o],
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
                                  selections: X,
                                  type: "User",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: X,
                                  type: "Page",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: k,
                                  type: "Group",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
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
                      selections: q,
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
          id: "4803555562990398",
          metadata: {},
          name: "StoriesCarouselViewerBucketPrefetcherMultiBucketsQuery",
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
  "useStoriesRemoveEmptyBuckets",
  [
    "CometRelay",
    "StoriesActorContext",
    "react",
    "relay-runtime",
    "useStoriesBucketsConnectionArguments",
    "useStoriesIsBucketEmpty",
    "useStoriesRemoveEmptyBuckets_buckets.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useEffect,
      k =
        h !== void 0
          ? h
          : (h = b("useStoriesRemoveEmptyBuckets_buckets.graphql"));
    f = { EDGES: "edges", NODE: "node" };
    var l = f.EDGES,
      m = f.NODE;
    function a(a) {
      var b = d("CometRelay").useFragment(k, a),
        e = d("CometRelay").useRelayEnvironment();
      a = i(c("StoriesActorContext"));
      var f = a.actorID,
        g = c("useStoriesIsBucketEmpty")(b);
      a = c("useStoriesBucketsConnectionArguments")();
      var h = a.connectionArguments,
        n = a.connectionName;
      j(function () {
        var a = [];
        b != null &&
          (a = b.reduce(function (a, b) {
            var c = b == null ? void 0 : b.id;
            (b == null
              ? void 0
              : (b = b.story_bucket_owner) == null
              ? void 0
              : b.id) !== f &&
              g(c) &&
              c != null &&
              a.push(c);
            return a;
          }, []));
        a.length > 0 &&
          d("CometRelay").commitLocalUpdate(e, function (b) {
            if (f == null) return;
            var c = b.get(f),
              e = null;
            if (c != null) {
              e = d("relay-runtime").ConnectionHandler.getConnection(c, n, h);
              if (e != null) {
                c = e.getLinkedRecords(l);
                if (c != null) {
                  c = c.filter(function (b) {
                    b = b == null ? void 0 : b.getLinkedRecord(m);
                    return !a.includes(b == null ? void 0 : b.getDataID());
                  });
                  e.setLinkedRecords(c, l);
                }
              }
            }
            a.map(function (a) {
              return b["delete"](a);
            });
          });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCenterPaneErrorBoundary.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { error: null, lastBucketIndex: null }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      b.getDerivedStateFromProps = function (a, b) {
        return a.bucketIndex !== b.lastBucketIndex && a.bucketIndex !== null
          ? { error: null, lastBucketIndex: a.bucketIndex }
          : null;
      };
      var c = b.prototype;
      c.componentDidCatch = function (a) {
        this.setState({ error: a });
      };
      c.render = function () {
        var a = this.props,
          b = a.children;
        a = a.fallback;
        var c = this.state.error;
        return c ? a(c) : b;
      };
      return b;
    })(a.PureComponent);
    g["default"] = b;
  },
  98
);
__d(
  "StoriesViewerBucketPrefetcher",
  [
    "CometRelay",
    "StoriesGating",
    "StoriesViewerBucketPrefetcherMultiBucketsQuery.graphql",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("StoriesViewerBucketPrefetcherMultiBucketsQuery.graphql"));
    function a(a, b, c, e) {
      d("CometRelay")
        .fetchQuery(b, i, {
          blur: d("WebPixelRatio").get() * 10,
          bucketIDs: a,
          scale: d("WebPixelRatio").get(),
          shouldEnableLiveInStories:
            d("StoriesGating").shouldEnableLiveInStories(),
          shouldEnableLiveInStoriesDropdown:
            d("StoriesGating").shouldEnableLiveInStoriesDropdown(),
          showSuggestedStickerReplies:
            d("StoriesGating").shouldShowSuggestedStickerReplies(),
        })
        .subscribe({
          complete: function () {
            c && c();
          },
          error: function (a) {
            e && e(a);
          },
        });
    }
    g.loadBuckets = a;
  },
  98
);
__d(
  "StoriesCometLeftRailRootWithEntryPointWrapper.react",
  [
    "CometPagelet.react",
    "StoriesCometLeftRailLayout.react",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseNavigationPanePlaceholder.react",
    "react",
    "useCometWindowFitNavPaneAndViewerSheet",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.children,
        e = a.isNavbarHidden;
      a = a.leftRail;
      var f = c("useCometWindowFitNavPaneAndViewerSheet")(),
        g = i(c("StoriesSuspenseBucketDataContext"));
      g = g.bucketData;
      return h.jsx(c("StoriesCometLeftRailLayout.react"), {
        hasRightRail: g.canSeeViewerSheet,
        hideLeftRail: e || (g.bucketIndex >= 0 && !f),
        leftRail: h.jsx(d("CometPagelet.react").Placeholder, {
          fallback: h.jsx(
            c("StoriesSuspenseNavigationPanePlaceholder.react"),
            {}
          ),
          name: "StoriesNavPane",
          children: a,
        }),
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesModuleStoryViewerBucketTransitionTtiWwwQPLEvent",
  ["cr:2369"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2369");
  },
  98
);
__d(
  "useStoriesSuspenseNavListSelectors",
  [
    "CometRelay",
    "StoriesActorContext",
    "react",
    "useStoriesIsBucketEmpty",
    "useStoriesSuspenseNavListSelectors_buckets.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useMemo,
      k =
        h !== void 0
          ? h
          : (h = b("useStoriesSuspenseNavListSelectors_buckets.graphql"));
    function a(a) {
      var b = i(c("StoriesActorContext")),
        e = b.actorID,
        f = d("CometRelay").useFragment(k, a),
        g = c("useStoriesIsBucketEmpty")(f);
      return j(
        function () {
          function a() {
            return c() ? 0 : -1;
          }
          function b() {
            var b;
            return g(f == null ? void 0 : (b = f[a()]) == null ? void 0 : b.id);
          }
          function c() {
            if (f != null && f.length > 0) {
              var a;
              a =
                (a = f[0]) == null
                  ? void 0
                  : (a = a.story_bucket_owner) == null
                  ? void 0
                  : a.id;
              return a != null ? a === e : !1;
            }
            return !1;
          }
          function d() {
            return f == null ? [] : c() ? f.slice(1) : f;
          }
          function h() {
            return d().length === 0;
          }
          function i(a) {
            return f == null ? void 0 : f[a];
          }
          function j(a, b) {
            return a === n(b) - 1;
          }
          function k() {
            return c() && b() ? 1 : 0;
          }
          function l(a) {
            return a === k();
          }
          function m(a, b) {
            var c = k(),
              d = c === 0;
            c = (c = i(c)) == null ? void 0 : c.id;
            return d ? (b === c ? a === 1 : a === 2) : a === 2;
          }
          function n(a) {
            if (a) return (f == null ? void 0 : f.length) || 0;
            else return ((f == null ? void 0 : f.length) || 0) + 1;
          }
          function o(a) {
            return ((a = i(a)) == null ? void 0 : a.id) || "";
          }
          return {
            getBucketCount: n,
            getBucketID: o,
            getIsSecondBucket: m,
            isFirstBucket: l,
            isFriendListEmpty: h(),
            isLastBucket: j,
            isUserBucketEmpty: b(),
            userBucketIndex: a(),
          };
        },
        [e, f, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseNavListTransitionRequestListener",
  [
    "QuickPerformanceLogger",
    "StoriesEnums",
    "StoriesModuleStoryViewerThreadTransitionTtiWwwQPLEvent",
    "react",
    "storiesViewerSuspenseEmitter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b, e, f) {
      h(
        function () {
          function e(b, c) {
            if (a === -1) return f;
            b = b === d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET ? c : -c;
            c = a + b;
            return c;
          }
          return c("storiesViewerSuspenseEmitter").listenToTransitionRequest(
            function (a, d) {
              a = e(a, d);
              a >= 0 &&
                (c("QuickPerformanceLogger").markerAnnotate(
                  c("StoriesModuleStoryViewerThreadTransitionTtiWwwQPLEvent"),
                  { string: { TRANSITION_TYPE: "BUCKET" } }
                ),
                b(a));
            }
          );
        },
        [b, a, f, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCarouselViewerBucketPrefetcher",
  [
    "CometRelay",
    "StoriesCarouselViewerBucketPrefetcherMultiBucketsQuery.graphql",
    "StoriesGating",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "StoriesCarouselViewerBucketPrefetcherMultiBucketsQuery.graphql"
            ));
    function a(a, b, c, e) {
      d("CometRelay")
        .fetchQuery(b, i, {
          blur: d("WebPixelRatio").get() * 10,
          bucketIDs: a,
          scale: d("WebPixelRatio").get(),
          shouldEnableLiveInStories:
            d("StoriesGating").shouldEnableLiveInStories(),
          shouldEnableLiveInStoriesDropdown:
            d("StoriesGating").shouldEnableLiveInStoriesDropdown(),
          showSuggestedStickerReplies:
            d("StoriesGating").shouldShowSuggestedStickerReplies(),
        })
        .subscribe({
          complete: function () {
            c && c();
          },
          error: function (a) {
            e && e(a);
          },
        });
    }
    g.loadBucketsViewerV3 = a;
  },
  98
);
__d(
  "useStoriesViewerBucketPrefetcher",
  [
    "CometRelay",
    "StoriesCarouselViewerBucketPrefetcher",
    "StoriesGating",
    "StoriesViewerBucketPrefetcher",
    "react",
    "storiesViewerSuspenseEmitter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = new Set(),
      j = d("StoriesGating").getMinBufferedBucketsCount();
    function a(a, b) {
      var e = d("CometRelay").useRelayEnvironment();
      h(
        function () {
          return c("storiesViewerSuspenseEmitter").listenToBucketLoaded(
            function () {
              i.add(b);
              var c = k(a, b);
              c.length > 0 &&
                (d("StoriesGating").shouldSeparateQueryViewerV3()
                  ? d(
                      "StoriesCarouselViewerBucketPrefetcher"
                    ).loadBucketsViewerV3(c, e)
                  : d("StoriesViewerBucketPrefetcher").loadBuckets(c, e));
            }
          );
        },
        [a, b, e]
      );
    }
    function k(a, b) {
      var c = d("StoriesGating").getInViewerPrefetchCount(),
        e = b + 1;
      while (e < a.length && e <= b + j) {
        if (!i.has(e)) break;
        e++;
      }
      if (e > b + j || e >= a.length) return [];
      b = [];
      while (e < a.length && b.length < c)
        i.has(e) || (i.add(e), b.push(a[e])), e++;
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseNavigationPaneRootWithEntryPoint.react",
  [
    "CometRelay",
    "StoriesActorProvider.react",
    "StoriesSuspenseNavigationPane.react",
    "StoriesSuspenseNavigationPanePauseContainer",
    "StoriesSuspenseNavigationPaneRootWithEntryPointQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.hideNavbar,
        g = a.initialBucketID;
      a = a.queryReference;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b(
              "StoriesSuspenseNavigationPaneRootWithEntryPointQuery.graphql"
            )),
        a
      );
      e =
        a == null
          ? void 0
          : (e = a.viewer) == null
          ? void 0
          : (e = e.actor) == null
          ? void 0
          : e.id;
      return i.jsx(c("StoriesSuspenseNavigationPanePauseContainer"), {
        children: i.jsx(c("StoriesActorProvider.react"), {
          actorID: e,
          children: i.jsx(c("StoriesSuspenseNavigationPane.react"), {
            extendedViewerBucket: a.extendedViewerBucket,
            hideNavbar: f,
            initialBucketID: g,
            user: a.me,
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
  "StoriesCometLeftRailRootWithEntryPoint.react",
  [
    "CometRouteRenderType",
    "StoriesCometLeftRailRootWithEntryPointWrapper.react",
    "StoriesGating",
    "StoriesNavListHideButton.react",
    "StoriesSuspenseNavigationPaneRootWithEntryPoint.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.children,
        e = a.initialBucketID,
        f = a.queryReference;
      a = a.viewerSessionID;
      var g = e === "";
      g = g ? !1 : d("StoriesGating").shouldNavigationBeHiddenByDefault();
      g = i(g);
      var j = g[0],
        k = g[1];
      g = function () {
        return k(!0);
      };
      var l = function () {
          return k(!1);
        },
        m = d("CometRouteRenderType").useIsPushView();
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("StoriesCometLeftRailRootWithEntryPointWrapper.react"), {
            isNavbarHidden: j,
            leftRail: h.jsx(
              c("StoriesSuspenseNavigationPaneRootWithEntryPoint.react"),
              {
                hideNavbar: g,
                initialBucketID: e,
                queryReference: f,
                viewerSessionID: a,
              }
            ),
            children: b,
          }),
          j &&
            h.jsx("div", {
              className: c("stylex").dedupe(
                {
                  "position-1": "pmk7jnqg",
                  "start-1": "od3u22a7",
                  "top-1": "plgsh5y4",
                },
                m ? { "top-1": "ajtsl5w5" } : null
              ),
              children: h.jsx(c("StoriesNavListHideButton.react"), {
                isOpen: !1,
                onClick: l,
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
  "StoriesViewerSuspenseWithEntryPoint.react",
  [
    "CometErrorBoundary.react",
    "CometPagelet.react",
    "CometStyleXSheet",
    "QPLUserFlow",
    "StoriesBucketError.react",
    "StoriesCenterPaneErrorBoundary.react",
    "StoriesCometLeftRailRootWithEntryPoint.react",
    "StoriesEnums",
    "StoriesLoggerSession",
    "StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent",
    "StoriesQueryArgumentsContext",
    "StoriesRootError.react",
    "StoriesSetBucketHelper",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseBucketTransitioningContext",
    "StoriesSuspenseContentPanePlaceholder.react",
    "StoriesSuspenseContentPaneRootWithEntryPoint.react",
    "StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters",
    "StoriesSuspenseNavigationPaneHelpers",
    "StoriesSuspenseViewerKeyboardListener.react",
    "react",
    "useRefetchablePreloadedQuery",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useState;
    d("CometStyleXSheet").rootStyleSheet.injectTheme();
    function a(a) {
      var b = a.bucketID,
        e = a.cardID,
        f = a.openSource,
        g = a.traySessionID,
        l = a.viewerSessionID,
        m = a.viewSingle,
        n = k(!1),
        o = n[0],
        p = n[1];
      n = k(d("StoriesSetBucketHelper").defaultBucketData(b));
      var q = n[0],
        r = n[1];
      n = k(d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET);
      var s = n[0],
        t = n[1];
      i(
        function () {
          c("QPLUserFlow").addPoint(
            c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent"),
            "viewer mounted"
          ),
            d("StoriesLoggerSession").initialize(g, l, f);
        },
        [f, g, l]
      );
      n = k("store-or-network");
      var u = n[0];
      n = n[1];
      u = c("useRefetchablePreloadedQuery")(
        c("StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"),
        a.queries.storiesSuspenseContentPaneRootReference,
        u
      );
      var v = u[0];
      u = u[1];
      var w = q.bucketID,
        x = q.bucketIndex,
        y = w === "",
        z = j(
          function () {
            function a(a) {
              d("StoriesSetBucketHelper").updateBucketData(r, p, q, a, v);
            }
            return {
              bucketData: q,
              bucketNavDirection: s,
              setBucketData: a,
              setNavigationDirection: t,
            };
          },
          [q, s, v]
        ),
        A = j(
          function () {
            return {
              isBucketTransitionInProgress: o,
              setIsBucketTransitionInProgress: p,
            };
          },
          [o, p]
        ),
        B = j(
          function () {
            return {
              hideSelfBucket: !1,
              initialBucketID: b,
              initialBucketsCount: d(
                "StoriesSuspenseNavigationPaneHelpers"
              ).getInitialBucketsCount(),
              pageBucketsCount: d(
                "StoriesSuspenseNavigationPaneHelpers"
              ).getPageBucketsCount(),
            };
          },
          [b]
        );
      return h.jsx(c("CometErrorBoundary.react"), {
        fallback: function (a) {
          return h.jsx(c("StoriesRootError.react"), { error: a });
        },
        children: h.jsx(c("StoriesQueryArgumentsContext").Provider, {
          value: B,
          children: h.jsx(
            c("StoriesSuspenseBucketTransitioningContext").Provider,
            {
              value: A,
              children: h.jsx(c("StoriesSuspenseBucketDataContext").Provider, {
                value: z,
                children: h.jsx("div", {
                  className: "k4urcfbm j83agx80",
                  "data-testid": void 0,
                  id: "viewer_dialog",
                  children: h.jsx(
                    c("StoriesSuspenseViewerKeyboardListener.react"),
                    {
                      children: h.jsx(
                        c("StoriesCometLeftRailRootWithEntryPoint.react"),
                        {
                          initialBucketID: b,
                          queryReference:
                            a.queries
                              .storiesSuspenseNavigationPaneRootReference,
                          viewerSessionID: l,
                          children: h.jsx(d("CometPagelet.react").Placeholder, {
                            fallback: h.jsx(
                              c("StoriesSuspenseContentPanePlaceholder.react"),
                              { isNullState: y }
                            ),
                            name: "StoriesContentPane",
                            children: h.jsx(
                              c("StoriesCenterPaneErrorBoundary.react"),
                              {
                                bucketIndex: x,
                                fallback: function (a) {
                                  return h.jsx(c("StoriesBucketError.react"), {
                                    bucketID: w,
                                    cardID: "",
                                    error: a,
                                  });
                                },
                                children: h.jsx(
                                  c(
                                    "StoriesSuspenseContentPaneRootWithEntryPoint.react"
                                  ),
                                  {
                                    bucketID: w,
                                    initialBucketID: b,
                                    initialCardID: e,
                                    queryReference: u,
                                    updateFetchPolicy: n,
                                    viewSingle: m,
                                    viewerSessionID: l,
                                  }
                                ),
                              }
                            ),
                          }),
                        }
                      ),
                    }
                  ),
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
__d(
  "StoriesModuleStoryViewerBucketTransitionTtiWwwQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(13238354);
    g["default"] = a;
  },
  98
);
