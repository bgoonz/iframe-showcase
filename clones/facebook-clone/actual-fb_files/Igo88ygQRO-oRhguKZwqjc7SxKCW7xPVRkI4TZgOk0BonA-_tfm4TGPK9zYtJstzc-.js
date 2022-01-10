if (self.CavalryLogger) {
  CavalryLogger.start_js(["8wmvxcZ"]);
}

__d(
  "CometFeedStoryMinimizedTimestampStrategy_timestamp$normalization.graphql",
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
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "val",
            storageKey: null,
          },
        ],
        b = {
          alias: null,
          args: null,
          concreteType: "GHLScramblingProperty",
          kind: "LinkedField",
          name: "attributes",
          plural: !0,
          selections: a,
          storageKey: null,
        };
      a = {
        alias: null,
        args: null,
        concreteType: "GHLScramblingProperty",
        kind: "LinkedField",
        name: "styles",
        plural: !0,
        selections: a,
        storageKey: null,
      };
      var c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tag",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryMinimizedTimestampStrategy_timestamp$normalization",
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_prod_eligible",
                storageKey: null,
              },
            ],
            type: "ICometStorySection",
            abstractKey: "__isICometStorySection",
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
            kind: "ScalarField",
            name: "override_url",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
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
                args: [{ kind: "Literal", name: "site", value: "comet" }],
                kind: "ScalarField",
                name: "url",
                storageKey: 'url(site:"comet")',
              },
              {
                alias: null,
                args: null,
                concreteType: "GHLScramblingNode",
                kind: "LinkedField",
                name: "ghl_label",
                plural: !1,
                selections: [
                  b,
                  a,
                  c,
                  d,
                  {
                    alias: null,
                    args: null,
                    concreteType: "GHLScramblingNode",
                    kind: "LinkedField",
                    name: "children",
                    plural: !0,
                    selections: [
                      b,
                      a,
                      c,
                      d,
                      {
                        alias: null,
                        args: null,
                        concreteType: "GHLScramblingNode",
                        kind: "LinkedField",
                        name: "children",
                        plural: !0,
                        selections: [b, a, c, d],
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
                name: "id",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryMinimizedTimestampStrategy_timestamp.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMinimizedTimestampStrategy_timestamp",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
          kind: "ScalarField",
          name: "override_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
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
              args: [{ kind: "Literal", name: "site", value: "comet" }],
              kind: "ScalarField",
              name: "url",
              storageKey: 'url(site:"comet")',
            },
            {
              alias: null,
              args: null,
              concreteType: "GHLScramblingNode",
              kind: "LinkedField",
              name: "ghl_label",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometGHLScrambledLabel_label",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedStoryMinimizedTimestampStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometStickerPickerCardQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5970858902931674",
        metadata: {},
        name: "CometStickerPickerCardQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometStickerPickerFlyoutTagSelectorRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4221422504558949",
        metadata: {},
        name: "CometStickerPickerFlyoutTagSelectorRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometInlineIdentityBadge_identityBadge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometInlineIdentityBadge_identityBadge",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "gaming_video_image_uri",
            storageKey: null,
          },
          action: "LOG",
          path: "gaming_video_image_uri",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "gaming_video_dark_mode_image_uri",
            storageKey: null,
          },
          action: "LOG",
          path: "gaming_video_dark_mode_image_uri",
        },
      ],
      type: "IdentityBadge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentInlineIdentityBadges_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentInlineIdentityBadges_comment",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "feed_location",
                variableName: "feedLocation",
              },
            ],
            concreteType: "IdentityBadge",
            kind: "LinkedField",
            name: "identity_badges_web",
            plural: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometInlineIdentityBadge_identityBadge",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometIdentityBadgeInformationDialog_identityBadge",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "identity_badge_type",
                  storageKey: null,
                },
                action: "LOG",
                path: "identity_badges_web.identity_badge_type",
              },
            ],
            storageKey: null,
          },
          action: "LOG",
          path: "identity_badges_web",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometIdentityBadgeInformationDialog_comment",
        },
      ],
      type: "Comment",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIDefaultSummaryAndActionsRenderer_feedback$normalization.graphql",
  ["CometUFISummary_feedback$normalization.graphql"],
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
        c = [
          {
            kind: "Variable",
            name: "feed_location",
            variableName: "feedLocation",
          },
          {
            kind: "Variable",
            name: "feedback_source",
            variableName: "feedbackSource",
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFIDefaultSummaryAndActionsRenderer_feedback$normalization",
        selections: [
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
                args: c,
                kind: "ScalarField",
                name: "viewer_has_related_count",
                storageKey: null,
              },
              {
                alias: "viewer_community_view_summary",
                args: c,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "if_viewer_can_see_community_view_related_count",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFIDefaultSummaryAndActionsRenderer_feedback__viewer_community_view_summary",
                    fragmentName: "CometCommunityViewUFISummary_feedback",
                    fragmentPropName: "feedback",
                    kind: "ModuleImport",
                  },
                  a,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subscription_target_id",
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "location",
                    variableName: "feedLocation",
                  },
                  {
                    kind: "Variable",
                    name: "use_default_actor",
                    variableName: "useDefaultActor",
                  },
                ],
                concreteType: null,
                kind: "LinkedField",
                name: "ufi_action_renderers",
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName: "CometUFIAnswerActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIAnswerActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName: "CometUFIAskActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIAskActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName: "CometUFICommentActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFICommentActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName: "CometUFIDiscussActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIDiscussActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName:
                          "CometUFINotifyAgainActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFINotifyAgainActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName:
                          "CometUFIPagesMessagingPrivateReplyActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIPagesMessagingPrivateReplyActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName: "CometUFIRespondActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIRespondActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName:
                          "CometUFIStoryLastResortUnreactActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIStoryLastResortUnreactActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName:
                          "CometUFIStoryReactActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIStoryReactActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName:
                          "CometUFIShareYoursActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIShareYoursActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName:
                          "CometUFIVoiceIndicatorActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIVoiceIndicatorActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName:
                          "CometUFIVoiceSwitcherActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFIVoiceSwitcherActionRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                        fragmentName:
                          "GeminiUFILinkToCommentsFromWorkplaceEmbedActionRenderer_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UFILinkToCommentsFromWorkplaceEmbedActionRenderer",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_show_reshare_warning",
                storageKey: null,
              },
              {
                args: [
                  {
                    kind: "Literal",
                    name: "CometUFISummary_feedback$canShowSeenState",
                    value: !0,
                  },
                ],
                fragment: b("CometUFISummary_feedback$normalization.graphql"),
                kind: "FragmentSpread",
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIDefaultSummaryAndActionsRenderer_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        {
          kind: "Variable",
          name: "feedback_source",
          variableName: "feedbackSource",
        },
      ];
      return {
        argumentDefinitions: [
          { defaultValue: !0, kind: "LocalArgument", name: "canShowSeenState" },
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "feedbackSource" },
          { defaultValue: null, kind: "LocalArgument", name: "focusCommentID" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFIDefaultSummaryAndActionsRenderer_feedback",
        selections: [
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
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                alias: null,
                args: a,
                kind: "ScalarField",
                name: "viewer_has_related_count",
                storageKey: null,
              },
              {
                alias: "viewer_community_view_summary",
                args: a,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "if_viewer_can_see_community_view_related_count",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFIDefaultSummaryAndActionsRenderer_feedback__viewer_community_view_summary",
                    fragmentName: "CometCommunityViewUFISummary_feedback",
                    fragmentPropName: "feedback",
                    kind: "ModuleImport",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subscription_target_id",
                storageKey: null,
              },
              {
                args: [
                  {
                    kind: "Variable",
                    name: "canShowSeenState",
                    variableName: "canShowSeenState",
                  },
                ],
                kind: "FragmentSpread",
                name: "CometUFISummary_feedback",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "useCometUFIPostActionBar_feedback",
              },
            ],
            storageKey: null,
          },
        ],
        type: "DefaultCometUFISummaryAndActionsRenderer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIDefaultSummaryAndActionsRenderer_shareable.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIDefaultSummaryAndActionsRenderer_shareable",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometUFIPostActionBar_shareable",
        },
      ],
      type: "Entity",
      abstractKey: "__isEntity",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIDefaultSummaryAndActionsRenderer_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIDefaultSummaryAndActionsRenderer_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometUFIPostActionBar_story",
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
  "CometUFICommentActionRenderer_renderer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFICommentActionRenderer_renderer$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentActionRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentActionRenderer_renderer",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "UFICommentActionRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIStoryReactActionRenderer_renderer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            kind: "Variable",
            name: "use_default_actor",
            variableName: "useDefaultActor",
          },
        ],
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        c = {
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
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFIStoryReactActionRenderer_renderer$normalization",
        selections: [
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
                args: a,
                concreteType: "FeedbackReactionInfo",
                kind: "LinkedField",
                name: "viewer_feedback_reaction_info",
                plural: !1,
                selections: [b, c, d],
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
                  b,
                  c,
                  d,
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
                selections: [d],
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
                        selections: [b, d],
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
                ],
                storageKey: null,
              },
              d,
              {
                alias: null,
                args: a,
                concreteType: null,
                kind: "LinkedField",
                name: "viewer_actor",
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
          {
            alias: "hideLabel",
            args: null,
            kind: "ScalarField",
            name: "hide_label",
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIStoryReactActionRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIStoryReactActionRenderer_renderer",
      selections: [
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
              name: "CometUFIReactButtonBase_feedback",
            },
          ],
          storageKey: null,
        },
        {
          alias: "hideLabel",
          args: null,
          kind: "ScalarField",
          name: "hide_label",
          storageKey: null,
        },
      ],
      type: "UFIStoryReactActionRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIReactButtonBase_feedback.graphql",
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
        b = [
          a,
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
        ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFIReactButtonBase_feedback",
        selections: [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "use_default_actor",
                variableName: "useDefaultActor",
              },
            ],
            concreteType: "FeedbackReactionInfo",
            kind: "LinkedField",
            name: "viewer_feedback_reaction_info",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "FeedbackReaction",
            kind: "LinkedField",
            name: "supported_reactions",
            plural: !0,
            selections: b,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "associated_video",
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
                    selections: [a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: 'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
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
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIReactionsMenu_feedback",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometUFIReactMutation_feedback",
          },
        ],
        type: "Feedback",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useCometUFIReactMutation_feedback.graphql",
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
        argumentDefinitions: [
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "useCometUFIReactMutation_feedback",
        selections: [
          a,
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "use_default_actor",
                variableName: "useDefaultActor",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "viewer_actor",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
        ],
        type: "Feedback",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerGIFPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerGIFPlugin_plugin$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerGIFPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerGIFPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerGIFPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerGIFPlugin_pluginData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "cometUFIComposerGIFPlugin_pluginData",
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerLiveTypingBroadcastPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerLiveTypingBroadcastPlugin_plugin$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerLiveTypingBroadcastPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerLiveTypingBroadcastPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerLiveTypingBroadcastPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerLiveTypingBroadcastPlugin_pluginData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "cometUFIComposerLiveTypingBroadcastPlugin_pluginData",
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerMediaUploadPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerMediaUploadPlugin_plugin$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerMediaUploadPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerMediaUploadPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerMediaUploadPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerMediaUploadPlugin_pluginData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "cometUFIComposerMediaUploadPlugin_pluginData",
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerStickersPlugin_next_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerStickersPlugin_next_plugin$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerStickersPlugin_next_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerStickersPlugin_next_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CometComposerCometizedStickersPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerStickersPlugin_next_pluginData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "cometUFIComposerStickersPlugin_next_pluginData",
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometUFIPostActionBar_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "feedLocation" },
        { kind: "RootArgument", name: "useDefaultActor" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "useCometUFIPostActionBar_feedback",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "feedLocation",
            },
            {
              kind: "Variable",
              name: "use_default_actor",
              variableName: "useDefaultActor",
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "ufi_action_renderers",
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
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFIAnswerActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIAnswerActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFIAskActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIAskActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFICommentActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFICommentActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFIDiscussActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIDiscussActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFINotifyAgainActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFINotifyAgainActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName:
                    "CometUFIPagesMessagingPrivateReplyActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIPagesMessagingPrivateReplyActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFIRespondActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIRespondActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName:
                    "CometUFIStoryLastResortUnreactActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIStoryLastResortUnreactActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFIStoryReactActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIStoryReactActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFIShareYoursActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIShareYoursActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFIVoiceIndicatorActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIVoiceIndicatorActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName: "CometUFIVoiceSwitcherActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFIVoiceSwitcherActionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useCometUFIPostActionBar_feedback__ufi_action_renderers",
                  fragmentName:
                    "GeminiUFILinkToCommentsFromWorkplaceEmbedActionRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "UFILinkToCommentsFromWorkplaceEmbedActionRenderer",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIShareActionRenderer_feedback",
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
  "useCometUFIPostActionBar_shareable.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometUFIPostActionBar_shareable",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIShareActionRenderer_shareable",
        },
      ],
      type: "Entity",
      abstractKey: "__isEntity",
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometUFIPostActionBar_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometUFIPostActionBar_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIPagesMessagingPrivateReplyActionRenderer_story",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIShareActionRenderer_story",
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
  "CometWithReactionBounceAnimation.react",
  ["react", "useOnUpdateEffect", "usePrevious"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.children,
        d = a.reaction;
      a = i(0);
      var e = a[0],
        f = a[1],
        g = c("usePrevious")(d);
      c("useOnUpdateEffect")(
        function () {
          if (!d) return;
          g != null &&
            g !== d &&
            f(function (a) {
              return a + 1;
            });
        },
        [g, d]
      );
      return h.jsx(
        "span",
        {
          className: (e > 0 ? "a2odkss1 elqgv22k" : "") + " pq6dq46d",
          children: b,
        },
        e
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMinimizedTimestampStrategy.react",
  [
    "CometFeedStoryMetaSectionMiddot.react",
    "CometFeedStoryMinimizedTimestampStrategy_timestamp.graphql",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "CometTimestamp.react",
    "CometTooltip.react",
    "CometTrackingNodeProvider.react",
    "GHLLink.react",
    "cr:1008801",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
    "useServerTime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useMemo,
      k = e.useState,
      l =
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryMinimizedTimestampStrategy_timestamp.graphql"
            ));
    e = 1e3 * 60 * 60 * 24;
    var m = e * 7;
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(l, a.timestamp);
      c("useCometFeedStoryMatchDebugger")(f);
      var g = c("useServerTime")(),
        h = (e = f.story) == null ? void 0 : e.creation_time;
      e =
        (e = f.override_url) != null
          ? e
          : (e = f.story) == null
          ? void 0
          : e.url;
      f = (f = f.story) == null ? void 0 : f.ghl_label;
      var m = k(n(g, h == null ? 0 : h).toString()),
        o = m[0];
      m[1];
      m = j(
        function () {
          return h != null
            ? c("CometTimestamp.react").getAbsoluteTimestamp(new Date(h * 1e3))
            : "";
        },
        [h]
      );
      if (h == null)
        throw c("unrecoverableViolation")(
          "time cannot be null in CometFeedStoryMinimizedTimestampStrategy",
          "comet_feed"
        );
      g = n(g, h).toString();
      o = i.jsx("span", {
        suppressHydrationWarning: !0,
        children:
          f != null && b("cr:1008801") && o === g
            ? i.jsx(b("cr:1008801"), { label: f, text: g })
            : g,
      });
      return i.jsxs(c("CometTrackingNodeProvider.react"), {
        trackingNode: 229,
        children: [
          i.jsx(c("CometFeedStoryMetaSectionMiddot.react"), {}),
          i.jsx("span", {
            "data-testid": void 0,
            children:
              e != null
                ? i.jsx(c("CometTooltip.react"), {
                    tooltip: m,
                    children: i.jsx(c("GHLLink.react"), {
                      href: e,
                      label: g,
                      onClick: a.onClick,
                      children: o,
                    }),
                  })
                : o,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a, b) {
      b = new Date(b * 1e3);
      var d = a.valueOf() - b.valueOf(),
        e = b.valueOf() > a.valueOf();
      d = d < m;
      e = !e && d;
      return e
        ? c("CometRelativeTimestamp.react").getRelativeTimestamp(
            a,
            b,
            "minimized"
          )
        : c("CometTimestamp.react").getTimestamp(a, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometStickerPickerFlyoutTagSelectorRoot.entrypoint",
  [
    "CometStickerPickerFlyoutTagSelectorRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = a.count;
        a = a.cursor;
        return {
          queries: {
            flyoutTagsQueryReference: {
              parameters: c(
                "CometStickerPickerFlyoutTagSelectorRootQuery$Parameters"
              ),
              variables: {
                count: b,
                cursor: a,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometStickerPickerFlyoutTagSelectorRoot.react"
      ).__setRef("CometStickerPickerFlyoutTagSelectorRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometStickerPickerStickerSearchCard.entrypoint",
  [
    "CometStickerPickerFlyoutTagSelectorRoot.entrypoint",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometStickerPickerStickerSearchCard.react"
    ).__setRef("CometStickerPickerStickerSearchCard.entrypoint");
    b = {
      getPreloadProps: function (a) {
        var b = a.flyoutTagsCount,
          d = a.flyoutTagsCursor;
        a = a.stickerInterface;
        b = { count: b, cursor: d };
        return {
          entryPoints: {
            flyoutTagSelectorEntrypointReference: {
              entryPoint: c(
                "CometStickerPickerFlyoutTagSelectorRoot.entrypoint"
              ),
              entryPointParams: b,
            },
          },
          extraProps: { stickerInterface: a },
        };
      },
      root: a,
    };
    g["default"] = b;
  },
  98
);
__d(
  "CometStickerPickerCard.entrypoint",
  [
    "CometStickerPickerCardQuery$Parameters",
    "CometStickerPickerStickerSearchCard.entrypoint",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")("CometStickerPickerCard.react").__setRef(
      "CometStickerPickerCard.entrypoint"
    );
    b = {
      getPreloadProps: function (a) {
        var b = a.feedbackID,
          e = a.stickerInterface;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "feedbackID",
          "stickerInterface",
        ]);
        a = babelHelpers["extends"]({}, a, { stickerInterface: e });
        a;
        return {
          entryPoints: {
            stickerSearchEntrypointReference: {
              entryPoint: c("CometStickerPickerStickerSearchCard.entrypoint"),
              entryPointParams: a,
            },
          },
          extraProps: { feedbackTargetID: b, stickerInterface: e },
          queries: {
            stickerPickerQueryReference: {
              parameters: c("CometStickerPickerCardQuery$Parameters"),
              variables: {
                feedbackID: b,
                scale: d("WebPixelRatio").get(),
                stickerInterface: e,
              },
            },
          },
        };
      },
      root: a,
    };
    g["default"] = b;
  },
  98
);
__d(
  "CometStickerPickerPopoverRoot.entrypoint",
  ["CometStickerPickerCard.entrypoint", "JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometStickerPickerPopoverRoot.react"
    ).__setRef("CometStickerPickerPopoverRoot.entrypoint");
    b = {
      getPreloadProps: function (a) {
        a = babelHelpers["extends"]({}, a);
        a;
        return {
          entryPoints: {
            stickerPickerCardEntrypointReference: {
              entryPoint: c("CometStickerPickerCard.entrypoint"),
              entryPointParams: a,
            },
          },
        };
      },
      root: a,
    };
    g["default"] = b;
  },
  98
);
__d(
  "CometStickerPickerCardPopoverRootWithPresetProps",
  [
    "CometStickerPickerPopoverRoot.entrypoint",
    "JSResourceForInteraction",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
      "logStickersFlyoutHasOpened"
    ).__setRef("CometStickerPickerCardPopoverRootWithPresetProps");
    a = {
      props: {
        onVisibilityChange: function (a) {
          a === !0 &&
            c("promiseDone")(
              h.load().then(function (a) {
                a();
              })
            );
        },
      },
      resource: c("CometStickerPickerPopoverRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometInlineIdentityBadge.react",
  [
    "CometImage.react",
    "CometInlineIdentityBadge_identityBadge.graphql",
    "CometRelay",
    "react",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 12,
      k = {
        padding: {
          paddingTop: "ggysqto6",
          paddingEnd: "n8tt0mok",
          paddingBottom: "ojkyduve",
          paddingStart: "hyh9befq",
        },
      },
      l =
        h !== void 0
          ? h
          : (h = b("CometInlineIdentityBadge_identityBadge.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(l, a.identityBadge);
      var b = c("useCurrentDisplayMode")();
      b = b === "dark";
      return a == null
        ? null
        : i.jsx(c("CometImage.react"), {
            height: j,
            src: b
              ? a.gaming_video_dark_mode_image_uri
              : a.gaming_video_image_uri,
            testid: void 0,
            xstyle: k.padding,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentInlineIdentityBadges.react",
  [
    "fbt",
    "CometInlineIdentityBadge.react",
    "CometLazyDialogTrigger.react",
    "CometLink.react",
    "CometRelay",
    "CometUFICommentInlineIdentityBadges_comment.graphql",
    "IdentityBadgeUtils",
    "JSResourceForInteraction",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = c("JSResourceForInteraction")(
        "CometIdentityBadgeInformationDialog.react"
      ).__setRef("CometUFICommentInlineIdentityBadges.react"),
      l = {
        additionalBadgeCount: {
          ":hover": { textDecoration: "p8dawk7l" },
          ":active": { textDecoration: "izd1hwj0" },
        },
        root: {
          alignItems: "bp9cbjyn",
          backgroundColor: "tdjehn4e",
          borderTopStartRadius: "jk6sbkaj",
          borderTopEndRadius: "kdgqqoy6",
          borderBottomEndRadius: "ihh4hy1g",
          borderBottomStartRadius: "qttc61fc",
          display: "pq6dq46d",
          marginTop: "kvgmc6g5",
          marginEnd: "cgat1ltu",
          marginBottom: "oygrvhab",
          marginStart: "kkf49tns",
          paddingTop: "jwdofwj8",
          paddingEnd: "n8tt0mok",
          paddingBottom: "r8blr3vg",
          paddingStart: "hyh9befq",
          ":hover": { textDecoration: "p8dawk7l" },
          ":active": { textDecoration: "izd1hwj0" },
        },
      },
      m = 4,
      n =
        i !== void 0
          ? i
          : (i = b("CometUFICommentInlineIdentityBadges_comment.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(n, a.comment);
      if (a == null) return null;
      var b =
        a == null
          ? void 0
          : a.identity_badges_web.filter(function (a) {
              return d("IdentityBadgeUtils").isBadgeTypeEligible(
                a.identity_badge_type
              );
            });
      if (b.length === 0) return null;
      var e = b.slice(0, m),
        f = Math.max(0, b.length - e.length);
      return j.jsx(c("CometLazyDialogTrigger.react"), {
        dialogProps: { badges: b, comment: a, useNewBadgeAssets: !0 },
        dialogResource: k,
        children: function (a, b) {
          return j.jsxs(c("CometLink.react"), {
            "aria-label": h._("Identity Badges"),
            onClick: a,
            ref: b,
            xstyle: l.root,
            children: [
              e.map(function (a) {
                return j.jsx(
                  c("CometInlineIdentityBadge.react"),
                  { identityBadge: a },
                  a.identity_badge_type
                );
              }),
              f > 0
                ? j.jsx("div", {
                    className: c("stylex")(l.additionalBadgeCount),
                    children: h._("+ {num_additional_badges}", [
                      h._param("num_additional_badges", f.toString()),
                    ]),
                  })
                : null,
            ],
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
  "CometUFITextOnlyStoryWithNoActionsSpacer.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", { className: "olo4ujb6" });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "cometUFISummaryCurrentLocaleRequiresExtraSpace",
  ["CurrentLocale"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("CurrentLocale").get();
      switch (a) {
        case "ru_RU":
          return !0;
        default:
          return !1;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometUFIPostActionBar",
  [
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometUFIShareActionRenderer.react",
    "CometUFITextOnlyStoryWithNoActionsSpacer.react",
    "cometUFISummaryCurrentLocaleRequiresExtraSpace",
    "react",
    "stylex",
    "useCometUFIPostActionBar_feedback.graphql",
    "useCometUFIPostActionBar_shareable.graphql",
    "useCometUFIPostActionBar_story.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = d("react").useMemo,
      m = {
        actionBar: { marginEnd: "tvfksri0", marginStart: "ozuftl9m" },
        actionBarAdjacentToTextOnlyStory: {
          ":first-child": { borderTop: "jmbispl3", marginTop: "olo4ujb6" },
        },
        condensedBar: { flexBasis: "mg4g778l" },
      };
    function a(a) {
      var e = a.feedback,
        f = a.feedbackSource,
        g = a.feedLocation,
        n = a.isTextOnlyStory,
        o = a.onActorSelected,
        p = a.onCommentClick,
        q = a.reduceSpacing;
      q = q === void 0 ? !1 : q;
      var r = a.shareable;
      a = a.story;
      e = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useCometUFIPostActionBar_feedback.graphql")),
        e
      );
      r = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("useCometUFIPostActionBar_shareable.graphql")),
        r
      );
      var s = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("useCometUFIPostActionBar_story.graphql")),
          a
        ),
        t = l(
          function () {
            return {
              feedbackSource: f,
              onActorSelected: o,
              onCommentClick: p,
              story: s,
            };
          },
          [f, o, p, s]
        );
      a = null;
      var u = e.ufi_action_renderers,
        v = [],
        w =
          c("cometUFISummaryCurrentLocaleRequiresExtraSpace")() &&
          u.some(function (a) {
            return (
              a.__typename === "UFIVoiceIndicatorActionRenderer" ||
              a.__typename === "UFIVoiceSwitcherActionRenderer"
            );
          }),
        x =
          r != null && r.url != null
            ? k.jsx(
                c("CometRowItem.react"),
                {
                  expanding: !0,
                  xstyle: w && m.condensedBar,
                  children: k.jsx(c("CometUFIShareActionRenderer.react"), {
                    feedLocation: g,
                    feedback: e,
                    parentStory: s,
                    shareable: r,
                  }),
                },
                "UFIShareActionRenderer"
              )
            : null;
      if (u && u.length !== 0) {
        var y = !1;
        u.forEach(function (a, b) {
          var e = k.jsx(
            c("CometRowItem.react"),
            {
              expanding:
                a.__typename !== "UFIVoiceIndicatorActionRenderer" &&
                a.__typename !== "UFIVoiceSwitcherActionRenderer",
              xstyle: w && m.condensedBar,
              children: k.jsx(d("CometRelay").MatchContainer, {
                match: a,
                props: t,
              }),
            },
            a.__typename
          );
          x == null || y
            ? v.push(e)
            : a.__typename === "UFIPagesMessagingPrivateReplyActionRenderer" ||
              a.__typename === "UFIVoiceIndicatorActionRenderer" ||
              a.__typename === "UFIVoiceSwitcherActionRenderer"
            ? (v.push(x, e), (y = !0))
            : b === u.length - 1
            ? (v.push(e, x), (y = !0))
            : v.push(e);
        });
      } else x != null && v.push(x);
      v.length > 0 &&
        (a = k.jsx("div", {
          className: c("stylex")(
            !q && !w && m.actionBar,
            n && m.actionBarAdjacentToTextOnlyStory
          ),
          children: k.jsx(c("CometRow.react"), {
            paddingHorizontal: q ? 0 : 4,
            paddingVertical: q ? 0 : 4,
            spacingHorizontal: q ? 0 : 4,
            testid: void 0,
            children: v,
          }),
        }));
      a == null &&
        n &&
        (a = k.jsx(c("CometUFITextOnlyStoryWithNoActionsSpacer.react"), {}));
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIDefaultSummaryAndActionsRenderer.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "CometUFIDefaultSummaryAndActionsRenderer_feedback.graphql",
    "CometUFIDefaultSummaryAndActionsRenderer_shareable.graphql",
    "CometUFIDefaultSummaryAndActionsRenderer_story.graphql",
    "CometUFISummary.react",
    "UFI2RealtimeContainer.react",
    "react",
    "requireDeferred",
    "unrecoverableViolation",
    "useCometUFIPostActionBar",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = d("react").useCallback,
      m = c("requireDeferred")("CometUFIFeedbackReactSubscription").__setRef(
        "CometUFIDefaultSummaryAndActionsRenderer.react"
      );
    function a(a, e) {
      var f = a.feedback,
        g = a.feedbackSource,
        n = a.feedLocation,
        o = a.hideShareCountsSummary,
        p = a.hideViewCountsSummary,
        q = a.isTextOnlyStory,
        r = a.onActorSelected,
        s = a.onClickCommentsCount,
        t = a.onCommentClick,
        u = a.renderLocation,
        v = a.shareable;
      a = a.story;
      var w = d("CometRelay").useRelayEnvironment();
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometUFIDefaultSummaryAndActionsRenderer_feedback.graphql"
            )),
        f
      );
      v = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometUFIDefaultSummaryAndActionsRenderer_shareable.graphql"
            )),
        v
      );
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometUFIDefaultSummaryAndActionsRenderer_story.graphql")),
        a
      );
      f = f.feedback;
      if (f == null)
        throw c("unrecoverableViolation")(
          "Feedback in CometUFISummaryAndActionsRenderer is null",
          "ufi2"
        );
      var x = f.id,
        y = f.subscription_target_id,
        z = l(
          function () {
            if (x == null || y == null) return null;
            var a = !1,
              b = function () {},
              c = {
                dispose: function () {
                  (a = !0), b();
                },
              };
            m.onReady(function (c) {
              if (!a) {
                c = c.subscribe(w, { feedback_id: x }, !1);
                b = c.dispose;
              }
            });
            return c;
          },
          [w, x, y]
        ),
        A = n === "COMET_MEDIA_VIEWER";
      n = c("useCometUFIPostActionBar")({
        feedLocation: n,
        feedback: f,
        feedbackSource: g,
        isTextOnlyStory: q,
        onActorSelected: r,
        onCommentClick: t,
        reduceSpacing: A,
        shareable: v,
        story: a,
      });
      return k.jsx("div", {
        ref: e,
        children: k.jsxs(c("UFI2RealtimeContainer.react"), {
          subscribe: z,
          children: [
            (f == null ? void 0 : f.viewer_has_related_count) === !0
              ? k.jsx(c("CometErrorBoundary.react"), {
                  context: { project: "community_view" },
                  children: k.jsx("div", {
                    children: k.jsx(d("CometRelay").MatchContainer, {
                      match: f.viewer_community_view_summary,
                      props: {
                        feedback: f,
                        hideViewCounts: p,
                        onClickCommentsCount: s,
                      },
                    }),
                  }),
                })
              : k.jsx(c("CometUFISummary.react"), {
                  feedback: f,
                  hideDivider: n == null,
                  hideShareCounts: o,
                  hideViewCounts: p,
                  onClickCommentsCount: s,
                  renderLocation: u,
                }),
            n,
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = k.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometUFICommentActionRenderer.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometRow.react",
    "CometRowItem.react",
    "CometTrackingNodeProvider.react",
    "CometUFICommentActionRenderer_renderer.graphql",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = { labelContainer: { height: "qu8okrzs", whiteSpace: "g0qnabr5" } };
    j !== void 0
      ? j
      : (j = b("CometUFICommentActionRenderer_renderer.graphql"));
    function a(a) {
      a = a.onCommentClick;
      return k.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 26,
        children: k.jsx(c("CometPressable.react"), {
          label: h._("Leave a comment"),
          onPress: a,
          overlayRadius: 4,
          preventContextMenu: !0,
          testid: void 0,
          children: k.jsxs(c("CometRow.react"), {
            align: "center",
            expanding: !0,
            paddingTop: 0,
            spacingHorizontal: 8,
            verticalAlign: "center",
            xstyle: l.labelContainer,
            children: [
              k.jsx(c("CometRowItem.react"), {
                children: k.jsx(c("TetraIcon.react"), {
                  color: "secondary",
                  icon: d("fbicon")._(i("508558"), 18),
                }),
              }),
              k.jsx(c("CometRowItem.react"), {
                children: k.jsx(c("TetraText.react"), {
                  color: "secondary",
                  type: "bodyLink3",
                  children: h._("Comment"),
                }),
              }),
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
  "useCometUFIReactMutation",
  [
    "CometRelay",
    "ODS",
    "collectDataAttributes",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "unrecoverableViolation",
    "useCometUFIReactMutation_feedback.graphql",
    "useTrackingCodeFnForComet",
    "useTriggeredStoryCTAHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useCallback,
      j = e.useRef,
      k = c("requireDeferred")("CometUFIFeedbackReactMutation").__setRef(
        "useCometUFIReactMutation"
      ),
      l =
        h !== void 0 ? h : (h = b("useCometUFIReactMutation_feedback.graphql"));
    function a(a) {
      var b = a.feedback,
        e = a.feedbackSource,
        f = a.onAfterMutation,
        g = a.onBeforeMutation,
        h = a.onError,
        m = a.triggerElementRef,
        n = d("CometRelay").useFragment(l, b);
      if (n == null)
        throw c("unrecoverableViolation")(
          "Failed to load `feedback` with which to render the reaction button.",
          "ufi2"
        );
      var o = d("CometRelay").useRelayEnvironment(),
        p = j(),
        q = j(),
        r = c("useTrackingCodeFnForComet")();
      a = c("useTriggeredStoryCTAHandler")();
      var s = a[0];
      return i(
        function (a) {
          var b, i;
          g && g(a);
          var j = n.id;
          b = (b = n.viewer_actor) == null ? void 0 : b.id;
          (i = q.current) == null ? void 0 : i.dispose();
          (i = p.current) == null ? void 0 : i.remove();
          if (j == null || b == null) {
            c("recoverableViolation")(
              "Error feedbackID or actorID is undefined so a user cannot react",
              "ufi2"
            );
            return;
          }
          function l(a, b) {
            var d = m.current;
            return d ? c("collectDataAttributes")(d, a, b) : null;
          }
          var t = babelHelpers["extends"](
            { feedback_id: j, feedback_reaction: a, feedback_source: e },
            r(l)
          );
          p.current = k.onReadyImmediately(function (a) {
            q.current = a.commit({
              environment: o,
              input: t,
              onError: h,
              useDefaultActor: !1,
            });
          });
          f && f(a);
          switch (a) {
            case 1:
              s("LIKE");
              break;
            case 2:
              s("LOVE");
              break;
            case 0:
              break;
            default:
              s("REACT");
          }
          d("ODS").bumpFraction(
            2507,
            "ufi_reaction_mutation",
            "deferred_mutation_code_not_yet_loaded",
            k.getModuleIfRequireable() ? 0 : 1,
            1
          );
        },
        [
          g,
          n.id,
          (b = n.viewer_actor) == null ? void 0 : b.id,
          e,
          r,
          f,
          m,
          o,
          h,
          s,
        ]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useHoverState",
  ["react", "useBoolean"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b) {
      var d = c("useBoolean")(!1),
        e = d.value,
        f = d.set,
        g = d.setTrue,
        i = d.setFalse;
      d = h(
        function (b) {
          g(), a != null && a(b);
        },
        [g, a]
      );
      var j = h(
        function (a) {
          i(), b != null && b(a);
        },
        [i, b]
      );
      return {
        isHovered: e,
        onMouseEnter: d,
        onMouseLeave: j,
        setIsHovered: f,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useTimeout",
  ["clearTimeout", "react", "setTimeout", "useEffectOnce"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useRef,
      j = b.useState;
    function a(a, b) {
      b === void 0 && (b = !0);
      var d = i(null),
        e = j(b),
        f = e[0],
        g = e[1],
        k = h(function () {
          g(!1), c("clearTimeout")(d.current);
        }, []),
        l = h(
          function () {
            g(!0),
              (d.current = c("setTimeout")(function () {
                g(!1);
              }, a));
          },
          [a]
        );
      e = h(
        function () {
          c("clearTimeout")(d.current), l();
        },
        [l]
      );
      c("useEffectOnce")(function () {
        b && l();
        return k;
      });
      return { pending: f, clear: k, restart: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIReactButtonBase.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "CometUFIReactButtonBase_feedback.graphql",
    "FocusWithinHandler.react",
    "UFI2ReactionUtils",
    "UFICommonInteractionLogger",
    "UFIReactionTypes",
    "deferredLoadComponent",
    "emptyFunction",
    "gkx",
    "orEmptyArray",
    "react",
    "requireDeferred",
    "unrecoverableViolation",
    "useCometUFICodedErrorDialog",
    "useCometUFIReactMutation",
    "useGlobalEventListener",
    "useHoverState",
    "usePrevious",
    "useTimeout",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useEffect,
      m = e.useRef,
      n = e.useState,
      o = c("deferredLoadComponent")(
        c("requireDeferred")("CometUFIReactionsMenu.react").__setRef(
          "CometUFIReactButtonBase.react"
        )
      );
    function a(a) {
      var e,
        f = a.children,
        g = a.feedback,
        p = a.feedbackSource,
        q = a.interactionEvent;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFIReactButtonBase_feedback.graphql")),
        g
      );
      if (a == null)
        throw c("unrecoverableViolation")(
          "Failed to load `feedback` with which to render the reaction button.",
          "ufi2"
        );
      var r = d("UFI2ReactionUtils").checkReactionKey(
          (g = a.viewer_feedback_reaction_info) == null ? void 0 : g.key
        ),
        s,
        t;
      if (!r)
        t =
          c("UFIReactionTypes").reactions[c("UFIReactionTypes").LIKE]
            .display_name;
      else {
        g = c("UFIReactionTypes").reactions[r];
        var u = g.color;
        g = g.display_name;
        t = g;
        s = u;
      }
      var v = r
          ? h._("Remove {selected reaction}", [
              h._param("selected reaction", t),
            ])
          : t,
        w =
          r == null
            ? null
            : (g =
                (g = a.viewer_feedback_reaction_info) == null
                  ? void 0
                  : (u = g.svg_image) == null
                  ? void 0
                  : u.uri) != null
            ? g
            : (u = c("orEmptyArray")(a.supported_reactions).find(function (a) {
                return a.key === r;
              })) == null
            ? void 0
            : (g = u.svg_image) == null
            ? void 0
            : g.uri;
      u = n(!1);
      var x = u[0],
        y = u[1];
      g = c("useTimeout")(500, !1);
      var z = g.clear,
        A = g.pending,
        B = g.restart,
        C = c("usePrevious")(A),
        D = m(c("emptyFunction"));
      c("useGlobalEventListener")("pointerup", function () {
        return D.current();
      });
      var E = m(!1),
        F = function () {
          (E.current = !0),
            x === !1 && B(),
            (D.current = function () {
              y(!1), (E.current = !1), (D.current = c("emptyFunction"));
            });
        },
        G = function () {
          x === !1 && z();
        };
      l(
        function () {
          C === !0 && A === !1 && E.current && y(!0);
        },
        [A, C]
      );
      u = c("useTimeout")(750, !1);
      var H = u.pending,
        I = u.restart;
      g = c("useTimeout")(525, !1);
      var J = g.pending,
        K = g.restart;
      u = c("useHoverState")();
      var L = u.isHovered,
        M = u.onMouseEnter,
        N = u.onMouseLeave,
        O = u.setIsHovered;
      g = c("useHoverState")();
      var P = g.isHovered;
      u = g.onMouseEnter;
      var Q = g.onMouseLeave,
        aa = g.setIsHovered,
        R = c("usePrevious")(L),
        S = c("usePrevious")(P);
      g = n(L);
      var T = g[0],
        U = g[1],
        V = c("gkx")("1444");
      l(
        function () {
          if ($.current) return;
          L !== R || P !== S
            ? L && !V && !T
              ? K()
              : !L && !P && T && I()
            : ((L && !V) || x || P) && !J && !T
            ? U(!0)
            : !L && !x && !P && !H && T && (U(!1), ($.current = !1));
        },
        [H, L, x, P, T, R, S, I, K, J]
      );
      g = k(function () {
        U(!1), ($.current = !1);
      }, []);
      var W = m(null),
        X = k(
          function (a) {
            if (q == null) return;
            var b = d("UFICommonInteractionLogger").startInteraction(q);
            W.current = { nextReactionKey: a, trackingID: b };
          },
          [q]
        );
      l(
        function () {
          var a = W.current;
          a &&
            r === a.nextReactionKey &&
            (d("UFICommonInteractionLogger").endInteraction(a.trackingID),
            (W.current = null));
        },
        [
          a == null
            ? void 0
            : (e = a.viewer_feedback_reaction_info) == null
            ? void 0
            : e.key,
          r,
        ]
      );
      e = c("useCometUFICodedErrorDialog")();
      var ba = e.errorDialog;
      e = e.setError;
      var Y = m(null),
        Z = c("useCometUFIReactMutation")({
          feedback: a,
          feedbackSource: p,
          onBeforeMutation: function () {
            U(!1), O(!1), aa(!1);
          },
          onError: e,
          triggerElementRef: Y,
        }),
        ca = k(
          function () {
            var a = r ? c("UFIReactionTypes").NONE : c("UFIReactionTypes").LIKE;
            X(a);
            Z(a);
          },
          [Z, r, X]
        );
      p = k(
        function (a) {
          X(a), Z(a);
        },
        [Z, X]
      );
      var da = r
          ? h._("Change {selected reaction} reaction", [
              h._param("selected reaction", t),
            ])
          : h._("React"),
        $ = m(!1);
      function ea() {
        ($.current = !0), U(!0);
      }
      return j.jsxs(c("CometTrackingNodeProvider.react"), {
        trackingNode: r === 0 ? 5 : 6,
        children: [
          j.jsx(c("FocusWithinHandler.react"), {
            children: function (a, b) {
              a = (a && b) || $.current || V;
              return f({
                a11yMenuTriggerLabel: da,
                handleA11yMenuActivate: ea,
                handleHoverIn: M,
                handleHoverOut: N,
                handlePress: ca,
                handlePressIn: F,
                handlePressOut: G,
                label: v,
                reaction: r,
                reactionColor: s,
                reactionDisplayName: t,
                reactionIconURI: w,
                shouldShowReactA11yMenuTrigger: a,
                triggerRef: Y,
              });
            },
          }),
          j.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: j.jsx(o, {
              contextRef: Y,
              feedback: a,
              initialReaction: r,
              onClose: g,
              onHoverIn: u,
              onHoverOut: Q,
              onReactionSelect: p,
              scrubbingMode: x,
              shouldFocusOnShow: function () {
                return $.current;
              },
              visible: T,
            }),
          }),
          ba,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIStoryReactActionRenderer.react",
  [
    "ix",
    "CometPressable.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometTintedIcon.react",
    "CometUFIReactButtonBase.react",
    "CometUFIStoryReactActionRenderer_renderer.graphql",
    "CometWithReactionBounceAnimation.react",
    "TetraIcon.react",
    "TetraText.react",
    "cometGetKeyCommandConfig",
    "cr:932",
    "cr:933",
    "fbicon",
    "qex",
    "react",
    "recoverableViolation",
    "unrecoverableViolation",
    "useKeyCommands",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useMemo,
      l = {
        hiddenElement: {
          clip: "q45zohi1",
          clipPath: "g0aa4cga",
          position: "pmk7jnqg",
        },
        labelContainer: { height: "qu8okrzs", whiteSpace: "g0qnabr5" },
        reactA11yMenuWithOverlay: {
          end: "pphx12oy",
          paddingTop: "b4ylihy8",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "b40mr0ww",
          paddingStart: "a8nywdso",
          position: "pmk7jnqg",
          top: "hmalg0qr",
        },
        reactionButtonWithA11yMenuSibling: {
          paddingEnd: "gvs12r03",
          paddingStart: "up7ckamt",
        },
      };
    function m(a) {
      var b = a.onKeyboardLike;
      a = k(
        function () {
          return [
            d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig(
              "newsfeed",
              "likeStory",
              b
            ),
          ];
        },
        [b]
      );
      c("useKeyCommands")(a, !0);
      return null;
    }
    function a(a) {
      var e = a.feedbackSource;
      a = a.renderer;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometUFIStoryReactActionRenderer_renderer.graphql")),
        a
      );
      var f = a.feedback,
        g = a.hideLabel;
      if (f == null)
        throw c("unrecoverableViolation")(
          "Failed to load `feedback` with which to render the story reaction button.",
          "ufi2"
        );
      return j.jsx(c("CometUFIReactButtonBase.react"), {
        feedback: f,
        feedbackSource: e,
        interactionEvent: "CometUFIStoryReaction",
        children: function (a) {
          var e = a.a11yMenuTriggerLabel,
            f = a.handleA11yMenuActivate,
            i = a.handleHoverIn,
            k = a.handleHoverOut,
            n = a.handlePress,
            o = a.handlePressIn,
            p = a.handlePressOut,
            q = a.label,
            r = a.reaction,
            s = a.reactionColor,
            t = a.reactionDisplayName,
            u = a.reactionIconURI,
            v = a.shouldShowReactA11yMenuTrigger,
            w = a.triggerRef,
            x;
          a = "CometUFIReactionActionLinkReactionIcon-" + t.toLowerCase();
          !r
            ? (x = j.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(h("509926"), 18),
                testid: void 0,
              }))
            : (r !== 1 || (c("qex")._("215") && c("qex")._("217"))) &&
              (b("cr:933") != null
                ? (x = j.jsx(b("cr:933"), {
                    alt: t,
                    reactionType: r,
                    size: 18,
                    testid: void 0,
                  }))
                : b("cr:932") != null &&
                  (u != null
                    ? (x = j.jsx(b("cr:932"), {
                        alt: t,
                        size: 18,
                        testid: void 0,
                        uri: u,
                      }))
                    : c("recoverableViolation")(
                        "Failed to fetch reaction icon URI from server",
                        "ufi2"
                      )));
          x == null &&
            (x = j.jsx(c("TetraIcon.react"), {
              color: "highlight",
              icon: d("fbicon")._(h("509922"), 18),
              testid: void 0,
            }));
          return j.jsxs(j.Fragment, {
            children: [
              j.jsx(c("CometPressable.react"), {
                label: q,
                onHoverIn: i,
                onHoverOut: k,
                onPress: n,
                onPressIn: function (a) {
                  if (w.current != null) {
                    var b = w.current;
                    b.style.transform =
                      "scale(" +
                      Math.max(0.96, (b.offsetWidth - 10) / b.offsetWidth) +
                      ")";
                  }
                  o(a);
                },
                onPressOut: function (a) {
                  var b = w.current;
                  b != null && (b.style.transform = "none");
                  p(a);
                },
                overlayRadius: 4,
                preventContextMenu: !0,
                ref: w,
                testid: void 0,
                children: j.jsxs(c("CometRow.react"), {
                  align: "center",
                  expanding: !0,
                  paddingTop: 0,
                  spacingHorizontal: 8,
                  verticalAlign: "center",
                  xstyle: [
                    l.labelContainer,
                    v && l.reactionButtonWithA11yMenuSibling,
                  ],
                  children: [
                    j.jsx(c("CometRowItem.react"), {
                      children: j.jsx(
                        c("CometWithReactionBounceAnimation.react"),
                        { reaction: r, children: x }
                      ),
                    }),
                    j.jsx(c("CometRowItem.react"), {
                      children: j.jsx(c("TetraText.react"), {
                        color: "secondary",
                        type: "bodyLink3",
                        children: j.jsx("span", {
                          style: { color: s },
                          children: g !== !0 && t,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              j.jsx(c("CometPressable.react"), {
                focusable: !0,
                label: e,
                onPress: f,
                preventContextMenu: !0,
                xstyle: [l.reactA11yMenuWithOverlay, !v && l.hiddenElement],
                children: j.jsx(c("CometTintedIcon.react"), {
                  color: "fds-gray-70",
                  icon: d("fbicon")._(h("481882"), 16),
                }),
              }),
              j.jsx(m, { onKeyboardLike: f }),
            ],
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
  "CometUFIComposerPreviewArea.react",
  ["ix", "TetraCircleButton.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children,
        e = a.label,
        f = a.onRemove;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "label",
        "onRemove",
      ]);
      return i.jsxs(
        "div",
        babelHelpers["extends"]({}, a, {
          className:
            "sj5x9vvc cxgpxx05 m0hv1tm6 aov4n071 btwxx1t3 hybvsw6c du4w35lb l9j0dhe7 a8nywdso rz4wbd8a hpfvmrgz hcukyx3x cxmmr5t8 oygrvhab i1fnvgqd g5gj957u buofh1pr j83agx80 rq0escxv auili1gw ow4ym5g4 gs1a9yip",
          children: [
            i.jsx("div", {
              className: "k4urcfbm scb9dxdr dflh9lhu buofh1pr",
              children: b,
            }),
            i.jsx("div", {
              className: "dflh9lhu",
              children: i.jsx(c("TetraCircleButton.react"), {
                icon: d("fbicon")._(h("478231"), 12),
                label: e,
                onPress: f,
                size: 24,
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
  "CometUFIEntryPointPopoverComposerAction.react",
  [
    "CometEntryPointPopoverTrigger.react",
    "CometUFIComposerActionButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useState;
    function a(a) {
      var b = a.entryPointParams,
        d = a.fallback,
        e = a.icon,
        f = a.imperativeRef,
        g = a.label,
        k = a.onVisibilityChange,
        l = a.otherProps,
        m = a.popoverEntryPoint;
      a = a.tracePolicy;
      var n = j(!1),
        o = n[0],
        p = n[1];
      n = i(
        function (a) {
          p(a), k && k(a);
        },
        [k]
      );
      return h.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "end",
        entryPointParams: b,
        fallback: d,
        imperativeRef: f,
        onVisibilityChange: n,
        otherProps: l,
        popoverEntryPoint: m,
        position: "above",
        preloadTrigger: "button",
        tracePolicy: a,
        children: function (a, b, d, f, i, j) {
          return h.jsx(c("CometUFIComposerActionButton.react"), {
            color: o ? "highlight" : void 0,
            icon: e,
            label: g,
            onHoverIn: f,
            onHoverOut: i,
            onPress: b,
            onPressIn: j,
            ref: a,
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
  "cometUFIComposerGIFPlugin",
  [
    "CometRelay",
    "cometUFIComposerGIFPlugin_plugin.graphql",
    "cometUFIComposerGIFPlugin_pluginData.graphql",
    "cr:239",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0 ? h : (h = b("cometUFIComposerGIFPlugin_plugin.graphql"));
    function a(a) {
      a = a.fragmentKey;
      a = d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b("cometUFIComposerGIFPlugin_pluginData.graphql")),
        a
      );
      return b("cr:239")({ ftentidentifier: a.feedback_id });
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerLiveTypingBroadcastPlugin",
  [
    "CometRelay",
    "cometUFIComposerLiveTypingBroadcastPlugin_plugin.graphql",
    "cometUFIComposerLiveTypingBroadcastPlugin_pluginData.graphql",
    "cr:240",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0
      ? h
      : (h = b("cometUFIComposerLiveTypingBroadcastPlugin_plugin.graphql"));
    function a(a) {
      var c = a.environment;
      a = a.fragmentKey;
      a = d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b(
              "cometUFIComposerLiveTypingBroadcastPlugin_pluginData.graphql"
            )),
        a
      );
      return b("cr:240")({
        feedback: { id: a.feedback_id, viewer_actor: a.viewer_actor },
        relayEnvironment: c,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerMediaUploadPlugin",
  [
    "CometRelay",
    "cometUFIComposerMediaUploadPlugin_plugin.graphql",
    "cometUFIComposerMediaUploadPlugin_pluginData.graphql",
    "cr:34",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0
      ? h
      : (h = b("cometUFIComposerMediaUploadPlugin_plugin.graphql"));
    function a(a) {
      a = a.fragmentKey;
      a = d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b("cometUFIComposerMediaUploadPlugin_pluginData.graphql")),
        a
      );
      return b("cr:34")({ feedback: { viewer_actor: a.viewer_actor } });
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerStickersPlugin.next",
  [
    "CometRelay",
    "cometUFIComposerStickersPlugin_next_plugin.graphql",
    "cometUFIComposerStickersPlugin_next_pluginData.graphql",
    "cr:50",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0
      ? h
      : (h = b("cometUFIComposerStickersPlugin_next_plugin.graphql"));
    function a(a) {
      var c = a.environment;
      a = a.fragmentKey;
      a = d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b("cometUFIComposerStickersPlugin_next_pluginData.graphql")),
        a
      );
      return b("cr:50")({
        environment: c,
        feedbackID: a.feedback_id,
        targetID: a.owning_profile_id,
      });
    }
    g["default"] = a;
  },
  98
);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 * @generated
 * @preserve-whitespace
 * @fullSyntaxTransform
 */ __d(
  "OutlineHashtagNode.prod",
  ["Outline"],
  function $module_OutlineHashtagNode_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    "use strict";
    var d = (function (_c$TextNode) {
      babelHelpers.inheritsLoose(d, _c$TextNode);
      d.deserialize = function deserialize(a) {
        return new d(a.__text);
      };
      function d(a, b) {
        var _this;
        _this = _c$TextNode.call(this, a, b) || this;
        _this.__type = "hashtag";
        return _this;
      }
      var _proto = d.prototype;
      _proto.clone = function clone() {
        return new d(this.__text, this.__key);
      };
      _proto.createDOM = function createDOM(a) {
        var b = _c$TextNode.prototype.createDOM.call(this, a);
        a.hashtag && (b.className = a.hashtag);
        return b;
      };
      _proto.setTextContent = function setTextContent(a) {
        _c$TextNode.prototype.setTextContent.call(this, a);
        if (e(this) && null !== this.getParent() && !this.isComposing()) {
          var _this$splitText, _a$splitText;
          var b = a.indexOf("#");
          a = this;
          -1 === b || "#" === a.getTextContent()
            ? f(a)
            : 0 < b &&
              (((_this$splitText = this.splitText(b)),
              (a = _this$splitText[0]),
              _this$splitText),
              f(a));
          b = a
            .getTextContent()
            .slice(1)
            .search(/[\s.,\\\/#!$%\^&\*;:{}=\-`~()@]/);
          0 === b
            ? f(a)
            : 0 < b &&
              (((_a$splitText = a.splitText(b + 1)),
              (a = _a$splitText[0]),
              _a$splitText),
              f(a));
        }
      };
      return d;
    })(require("Outline").TextNode);
    function f(a) {
      var b = a.getTextContent();
      b = e(a) ? require("Outline").createTextNode(b) : g(b);
      a.replace(b, !0);
    }
    function g(a) {
      if (a === void 0) {
        a = "";
      }
      return new d(a);
    }
    function e(a) {
      return a instanceof d;
    }
    exports.HashtagNode = d;
    exports.createHashtagNode = g;
    exports.isHashtagNode = e;
    exports.toggleHashtag = f;
  },
  null
);
__d(
  "OutlineHistoryHelpers",
  ["cr:9991"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:9991");
  },
  null
);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 * @generated
 * @preserve-whitespace
 * @fullSyntaxTransform
 */ __d(
  "OutlineHistoryHelpers.prod",
  [],
  function $module_OutlineHistoryHelpers_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    "use strict";
    var c = new Set();
    exports.updateWithoutHistory = function (a, b) {
      b = a.update(b, "updateWithoutHistory");
      a = a._pendingViewModel;
      null !== a && c.add(a);
      return b;
    };
    exports.viewModelsWithoutHistory = c;
  },
  null
);
__d(
  "CometMarketplaceChangeAvailabilityButton_target.graphql",
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
        name: "CometMarketplaceChangeAvailabilityButton_target",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useShouldShowArchiveMessageDialog",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_children",
                storageKey: null,
              },
            ],
            type: "MarketplaceListingWithChildListings",
            abstractKey: "__isMarketplaceListingWithChildListings",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_seller_change_availability",
                storageKey: null,
              },
            ],
            type: "MarketplaceListingWithIntegrityStatus",
            abstractKey: "__isMarketplaceListingWithIntegrityStatus",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "marketplace_listing_category_id",
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_sold",
            storageKey: null,
          },
          {
            alias: "should_show_txn_survey_on_mas",
            args: [{ kind: "Literal", name: "action", value: "MARK_AS_SOLD" }],
            kind: "ScalarField",
            name: "should_show_txn_survey",
            storageKey: 'should_show_txn_survey(action:"MARK_AS_SOLD")',
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "listing_inventory_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
        ],
        type: "MarketplaceListingRenderable",
        abstractKey: "__isMarketplaceListingRenderable",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceEditDraftButton_target.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometMarketplaceEditDraftButton_target",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useMarketplaceListingEditURL_listing",
        },
      ],
      type: "MarketplaceListingRenderable",
      abstractKey: "__isMarketplaceListingRenderable",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceYouFeedCardMoreMenuButton_target.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometMarketplaceYouFeedCardMoreMenuButton_target",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "LOG",
          path: "id",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useMarketplaceListingEditURL_listing",
        },
      ],
      type: "Node",
      abstractKey: "__isNode",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceYouFeedCardMoreMenuTargetQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3320527541384194",
        metadata: {},
        name: "CometMarketplaceYouFeedCardMoreMenuTargetQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceYouFeedCardMoreMenuViewerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4373360059349765",
        metadata: {},
        name: "CometMarketplaceYouFeedCardMoreMenuViewerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplaceListingViews_views.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MarketplaceListingViews_views",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "CommerceListingInsights",
          kind: "LinkedField",
          name: "listing_insights",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                { kind: "Literal", name: "metric", value: "VIEW" },
                { kind: "Literal", name: "timeframe", value: "TWO_WEEKS" },
              ],
              concreteType: "CommerceInsightsDatapoint",
              kind: "LinkedField",
              name: "insights",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "count",
                  storageKey: null,
                },
              ],
              storageKey: 'insights(metric:"VIEW",timeframe:"TWO_WEEKS")',
            },
          ],
          storageKey: null,
        },
      ],
      type: "MarketplaceListingWithInsights",
      abstractKey: "__isMarketplaceListingWithInsights",
    };
    e.exports = a;
  },
  null
);
__d(
  "useMarketplaceCanRelistAndDeleteListing_listing.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useMarketplaceCanRelistAndDeleteListing_listing",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_copy_and_delete",
              storageKey: null,
            },
          ],
          type: "MarketplaceListingWithCopyAndDelete",
          abstractKey: "__isMarketplaceListingWithCopyAndDelete",
        },
      ],
      type: "MarketplaceListingRenderable",
      abstractKey: "__isMarketplaceListingRenderable",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMarketplaceChangeAvailabilityButton.react",
  [
    "fbt",
    "ix",
    "CometMarketplaceAvailabilityConstants",
    "CometMarketplaceChangeAvailabilityButton_target.graphql",
    "CometMarketplaceLogger",
    "CometMarketplaceSellerListingTransactionReportingDialog.entrypoint",
    "CometMarketplaceUtils",
    "CometProductItemChangeAvailabilityMutation",
    "CometProgressButtonIndeterminate.react",
    "CometRelay",
    "JSResourceForInteraction",
    "MarketplaceMarkAsButtonContext",
    "TetraButton.react",
    "fbicon",
    "getMarketplaceAvailabilityButtonTitle",
    "react",
    "useCometEntryPointDialog",
    "useCometLazyDialog",
    "useCometMarketplaceArchiveMessageDialog",
    "useCometMarketplaceUpdateQuantityMutation",
    "useCurrentMarketplaceSurface",
    "useNullthrowsViolation",
    "useShouldShowArchiveMessageDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = c("JSResourceForInteraction")(
        "MarketplaceMultipleItemMarkAsDialog.react"
      ).__setRef("CometMarketplaceChangeAvailabilityButton.react");
    function a(a) {
      var e,
        f = a.reduceEmphasis;
      f = f === void 0 ? !0 : f;
      var g = a.tetraButtonType;
      g = g === void 0 ? "primary" : g;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "reduceEmphasis",
        "tetraButtonType",
      ]);
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometMarketplaceChangeAvailabilityButton_target.graphql")),
        a.target
      );
      var p = a.id,
        q = c("useNullthrowsViolation")(p),
        r = a.is_sold === !0,
        s = (e = a.story) == null ? void 0 : e.id,
        t = a.should_show_txn_survey_on_mas;
      e = m(c("MarketplaceMarkAsButtonContext"));
      var u = e.isBusy,
        v = e.setIsBusy;
      e = c("useCometLazyDialog")(o);
      var w = e[0];
      e = c("useCometEntryPointDialog")(
        c("CometMarketplaceSellerListingTransactionReportingDialog.entrypoint"),
        { listingId: (e = p) != null ? e : "" }
      );
      var x = e[0],
        y = c("useShouldShowArchiveMessageDialog")(a),
        z = c("useCometMarketplaceArchiveMessageDialog")(p);
      e = l(
        function () {
          p != null && w({ listingId: p });
        },
        [p, w]
      );
      var A = d(
          "CometProductItemChangeAvailabilityMutation"
        ).useChangeAvailabilityMutation(),
        B = A[0],
        C = A[1];
      A = c("useCometMarketplaceUpdateQuantityMutation")();
      var D = A[0],
        E = A[1];
      n(
        function () {
          v(C || E);
        },
        [C, E, v]
      );
      A = c("useCurrentMarketplaceSurface")();
      var F = A.referralSurface,
        G = A.surface,
        H = r ? "IN_STOCK" : "OUT_OF_STOCK";
      A = function () {
        s != null &&
          (B({ product_availability: H, story_id: s }),
          D({ listingId: q, quantity: 0 }),
          H === "OUT_OF_STOCK" &&
            d("CometMarketplaceLogger").logClick("mark_as_sold", G, F)),
          p != null &&
            H === "OUT_OF_STOCK" &&
            (t === !0
              ? x({
                  action: "MARK_AS_SOLD",
                  listingId: p,
                  shouldShowArchiveMessageDialog: y,
                })
              : y && z());
      };
      if (a.has_children === !0)
        return k.jsx(c("TetraButton.react"), {
          icon: d("fbicon")._(i("477813"), 16),
          label: h._("Mark As\u2026"),
          onPress: e,
          type: g,
        });
      else if (a.can_seller_change_availability === !0) {
        r = a.marketplace_listing_category_id;
        e = a.listing_inventory_type;
        a = d("CometMarketplaceUtils").isMultiQuantityListing(e);
        e = d("CometMarketplaceUtils").isFiniteMultiQuantityListing(e);
        r = c("getMarketplaceAvailabilityButtonTitle")(H, r, a);
        return r ===
          d("CometMarketplaceAvailabilityConstants").MARK_AS_IN_STOCK_LABEL &&
          Boolean(e)
          ? null
          : u
          ? k.jsx(c("CometProgressButtonIndeterminate.react"), { label: r })
          : r ===
            d("CometMarketplaceAvailabilityConstants").MARK_AS_AVAILABLE_LABEL
          ? k.jsx(c("TetraButton.react"), {
              disabled: p == null,
              icon: d("fbicon")._(i("656358"), 16),
              label: r,
              onPress: A,
              reduceEmphasis: f,
              type: g,
            })
          : r ===
            d("CometMarketplaceAvailabilityConstants").MARK_AS_PENDING_LABEL
          ? k.jsx(c("TetraButton.react"), {
              disabled: p == null,
              icon: d("fbicon")._(i("616584"), 16),
              label: r,
              onPress: A,
              reduceEmphasis: f,
              type: g,
            })
          : k.jsx(c("TetraButton.react"), {
              disabled: p == null,
              icon: d("fbicon")._(i("477813"), 16),
              label: r,
              onPress: A,
              reduceEmphasis: f,
              type: g,
            });
      }
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMarketplaceEditDraftButton.react",
  [
    "fbt",
    "ix",
    "CometMarketplaceEditDraftButton_target.graphql",
    "CometRelay",
    "TetraButton.react",
    "fbicon",
    "react",
    "useLogMarketplaceClick",
    "useMarketplaceListingEditURL.hybrid",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a) {
      var e = a.reduceEmphasis;
      e = e === void 0 ? !0 : e;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["reduceEmphasis"]);
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometMarketplaceEditDraftButton_target.graphql")),
        a.target
      );
      var f = c("useLogMarketplaceClick")("edit_draft");
      a = c("useMarketplaceListingEditURL.hybrid")(a);
      return k.jsx(c("TetraButton.react"), {
        icon: d("fbicon")._(i("477825"), 16),
        label: h._("Continue"),
        linkProps: { url: a },
        onPress: function () {
          f({ composerEntrypoint: "marketplace", composerMode: "edit_draft" });
        },
        reduceEmphasis: e,
        type: "primary",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMarketplaceYouFeedCardMoreMenu.entrypoint",
  [
    "CometMarketplaceYouFeedCardMoreMenuTargetQuery$Parameters",
    "CometMarketplaceYouFeedCardMoreMenuViewerQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            targetQueryRef: {
              parameters: b(
                "CometMarketplaceYouFeedCardMoreMenuTargetQuery$Parameters"
              ),
              variables: { id: a.id },
            },
            viewerQueryRef: {
              parameters: b(
                "CometMarketplaceYouFeedCardMoreMenuViewerQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometMarketplaceYouFeedCardMoreMenu.react"
      ).__setRef("CometMarketplaceYouFeedCardMoreMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometMarketplaceYouFeedCardMoreMenuButton.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometMarketplaceYouFeedCardMoreMenu.entrypoint",
    "CometMarketplaceYouFeedCardMoreMenuButton_target.graphql",
    "CometRelay",
    "TetraButton.react",
    "fbicon",
    "react",
    "useMarketplaceListingEditURL.hybrid",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b(
                "CometMarketplaceYouFeedCardMoreMenuButton_target.graphql"
              )),
          a.target
        ),
        f = c("useMarketplaceListingEditURL.hybrid")(e, {
          ref: a.referralSurface,
        });
      if (e == null) return null;
      e = e.id;
      var g = a.windowWidth;
      return k.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "middle",
        entryPointParams: { id: e },
        otherProps: {
          boostEntryPoint: a.boostEntryPoint,
          editRoute: f,
          hide_boost_listing: Boolean(a.hideBoostListing),
          hide_delete: Boolean(a.hideDelete),
          hide_edit_listing: Boolean(a.hideEditListing),
          hide_list_in_more_places: Boolean(a.hideListInMorePlaces),
          hide_mark_as_available: Boolean(a.hideMarkAsAvailable),
          hide_renew: Boolean(a.hideRenew),
          hide_view_insight: Boolean(a.hideViewInsight),
          hide_view_listing: a.hideViewListing,
          isBoostButtonDemoted:
            ((e = a.buttonsToDemoteToMoreMenu) == null ? void 0 : e.boost) ===
            !0,
          isLiveShoppingLink: a.isLiveShoppingLink,
          isShareButtonDemoted:
            ((f = a.buttonsToDemoteToMoreMenu) == null ? void 0 : f.share) ===
            !0,
          live_shopping_video_id:
            (e = a.liveShoppingVideoID) != null ? e : null,
          onDelete: a.onDelete,
          productSetName: a.productSetName,
          show_availability_options: Boolean(a.show_availability_options),
          show_live_shopping_delete_link: Boolean(a.isLiveShoppingLink),
          show_live_shopping_edit_listing: Boolean(
            a.showLiveShoppingEditListing
          ),
          show_live_shopping_view_details: Boolean(
            a.showLiveShoppingViewDetails
          ),
          windowWidth: g,
        },
        popoverEntryPoint: c("CometMarketplaceYouFeedCardMoreMenu.entrypoint"),
        position: (f = a.popoverPosition) != null ? f : "below",
        preloadTrigger: "button",
        children: function (b, e, f, g, j, l) {
          return k.jsx("div", {
            style: { display: "inline-flex" },
            children: k.jsx(c("TetraButton.react"), {
              disabled: Boolean(a.isButtonDisabled),
              icon: d("fbicon")._(i("484389"), 16),
              label: h._("More"),
              labelIsHidden: !0,
              onHoverIn: g,
              onHoverOut: j,
              onPress: e,
              onPressIn: l,
              ref: b,
              type: (f = a.buttonType) != null ? f : "secondary",
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
  "MarketplaceListingViews.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometTooltip.react",
    "MarketplaceListingViews_views.graphql",
    "TetraIcon.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = {
        container: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          height: "df2bnetk",
        },
        icon: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          marginStart: "h676nmdw",
        },
        maxWidth: { maxWidth: "rs7kolck" },
      };
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("MarketplaceListingViews_views.graphql")),
          a.views
        );
      if (
        ((e = f.listing_insights) == null
          ? void 0
          : (e = e.insights) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : e.count) == null
      )
        return null;
      e = a.hasMaxWidth === !0 ? l.maxWidth : null;
      a = h._(
        "The number of times people viewed the details page of your Marketplace listing in the last 14 days."
      );
      f = h._({ "*": "{number} listing views", _1: "1 listing view" }, [
        h._plural(
          (f = f.listing_insights) == null
            ? void 0
            : (f = f.insights) == null
            ? void 0
            : (f = f[0]) == null
            ? void 0
            : f.count,
          "number"
        ),
      ]);
      return k.jsxs("div", {
        className: c("stylex")(l.container, e),
        children: [
          f,
          k.jsx("div", {
            className: c("stylex")(l.icon),
            children: k.jsx(c("CometTooltip.react"), {
              tooltip: a,
              children: k.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(i("1087709"), 12),
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
  "useMarketplaceCanRelistAndDeleteListing",
  [
    "RelayFlight.hybrid",
    "useMarketplaceCanRelistAndDeleteListing_listing.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = d("RelayFlight.hybrid").useFragment(
        h !== void 0
          ? h
          : (h = b("useMarketplaceCanRelistAndDeleteListing_listing.graphql")),
        a
      );
      return (a == null ? void 0 : a.can_copy_and_delete) === !0;
    }
    g["default"] = a;
  },
  98
);
__d(
  "MarketplaceMessageSellerDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4633016100058744",
        metadata: {},
        name: "MarketplaceMessageSellerDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplaceInboxSingleThreadDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3692377874153145",
        metadata: {},
        name: "MarketplaceInboxSingleThreadDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplaceInboxSingleThreadDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "MarketplaceInboxSingleThreadDialogQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            queryReference: {
              parameters: c(
                "MarketplaceInboxSingleThreadDialogQuery$Parameters"
              ),
              variables: { threadID: a.threadID },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "MarketplaceInboxSingleThreadDialog.react"
      ).__setRef("MarketplaceInboxSingleThreadDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "MarketplaceMessageSellerDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "MarketplaceMessageSellerDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
      a = a.id;
      return {
        queries: {
          queryReference: {
            parameters: c("MarketplaceMessageSellerDialogQuery$Parameters"),
            variables: { id: a, scale: d("WebPixelRatio").get() },
          },
        },
      };
    };
    b = {
      getPreloadProps: a,
      root: c("JSResourceForInteraction")(
        "MarketplaceMessageSellerDialog.react"
      ).__setRef("MarketplaceMessageSellerDialog.entrypoint"),
    };
    e = b;
    g.MarketplaceMessageSellerDialogEntrypoint = b;
    g.MarketplaceMessageSellerDialogForProfileEntrypoint = e;
  },
  98
);
__d(
  "MessengerBlurpleLogoSvg.bs",
  ["react", "useCometUniqueID"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = a.width;
      a = a.height;
      c = c !== void 0 ? c : "80";
      a = a !== void 0 ? a : "80";
      var d = b("useCometUniqueID")(),
        e = h.useMemo(
          function () {
            return h.cloneElement(h.jsx("path", {}), {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M40 .914C17.995.914.937 17.033.937 38.804c0 11.389 4.668 21.23 12.268 28.026a3.12 3.12 0 011.05 2.227l.212 6.95c.068 2.215 2.358 3.658 4.386 2.763l7.753-3.423a3.115 3.115 0 012.087-.153A42.602 42.602 0 0040 76.695c22.005 0 39.063-16.118 39.063-37.89C79.063 17.033 62.005.915 40 .915z",
              fill: "url(#" + (d + ")"),
              suppressHydrationWarning: !0,
            });
          },
          [d]
        ),
        f = h.useMemo(
          function () {
            return h.cloneElement(h.jsx("radialGradient", {}), {
              id: d,
              cx: "0",
              cy: "0",
              r: "1",
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "rotate(-57.092 80.25 24.628) scale(85.1246)",
              suppressHydrationWarning: !0,
              children: h.jsxs(h.Fragment, {
                children: [
                  h.jsx("stop", { stopColor: "#09F" }),
                  h.jsx("stop", { offset: "0.61", stopColor: "#A033FF" }),
                  h.jsx("stop", { offset: "0.935", stopColor: "#FF5280" }),
                  h.jsx("stop", { offset: "1", stopColor: "#FF7061" }),
                ],
              }),
            });
          },
          [d]
        );
      return h.jsxs("svg", {
        width: c,
        height: a,
        viewBox: " 0 0 80 80",
        fill: "none",
        children: [
          e,
          h.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.543 49.886L28.018 31.68a5.86 5.86 0 018.472-1.563l9.127 6.844a2.343 2.343 0 002.823-.008L60.765 27.6c1.645-1.248 3.793.72 2.692 2.467L51.982 48.272a5.86 5.86 0 01-8.472 1.563l-9.127-6.845a2.344 2.344 0 00-2.823.01l-12.325 9.354c-1.646 1.248-3.793-.72-2.692-2.467z",
            fill: "#fff",
          }),
          h.jsx("defs", { children: f }),
        ],
      });
    }
    c = a;
    f.make = c;
  },
  null
);
__d(
  "MessengerBlurpleLogoSvg.re",
  ["MessengerBlurpleLogoSvg.bs"],
  function (a, b, c, d, e, f) {
    a = b("MessengerBlurpleLogoSvg.bs").make;
    f.make = a;
  },
  null
);
__d(
  "CometMediaViewerFilmstrip.react",
  [
    "fbt",
    "ix",
    "CometBackgroundImage.react",
    "CometImage.react",
    "CometPressable.react",
    "CometThrottle",
    "Locale",
    "TetraIcon.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
      l = b.useRef,
      m = b.useState,
      n = {
        imageInner: {
          height: "datstx6m",
          objectFit: "r0294ipz",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          paddingTop: "cxgpxx05",
          paddingBottom: "sj5x9vvc",
          transitionDuration: "pc15xi3s",
          transitionProperty: "flx89l3n",
          transitionTimingFunction: "eloblzlw",
          whiteSpace: "g0qnabr5",
        },
        thumbnail: { cursor: "nhd2j8a9" },
        thumbnailContainer: {
          borderTopStartRadius: "beltcj47",
          borderTopEndRadius: "p86d2i9g",
          borderBottomEndRadius: "aot14ch1",
          borderBottomStartRadius: "kzx2olss",
          display: "q9uorilb",
          flexShrink: "pfnyh3mw",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        thumbnailNonActive: {
          opacity: "ggwglk7f",
          ":hover": { opacity: "oecfc0l4" },
        },
        videoIcon: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "bipmatt0",
          justifyContent: "taijpn5t",
          position: "pmk7jnqg",
          width: "iyyx5f41",
        },
      },
      o = {
        2: { marginEnd: "kady6ibp", marginStart: "dwxx2s2f" },
        6: { marginEnd: "fv0vnmcu", marginStart: "ggphbty4" },
      },
      p = { 36: { width: "thwo4zme" }, 40: { width: "q676j6op" } },
      q = { 36: { height: "tv7at329" }, 40: { height: "qypqp5cg" } };
    function r(a) {
      var b =
          a.image.mediaType !== "video" && Boolean(a.image.isUseImageResizing)
            ? { backgroundColor: a.image.backgroundColor }
            : {},
        e = a.image.mediaType !== "video" ? a.image.uri : a.image.thumbnailUri,
        f = a.thumbnailMargin,
        g = a.thumbnailSize;
      return j.jsx("div", {
        className: c("stylex")([n.thumbnailContainer, q[g], p[g], o[f]]),
        children: j.jsx(c("CometPressable.react"), {
          display: "inline",
          label: h._("Thumbnail {index}", [h._param("index", a.index)]),
          onPress: a.onClick,
          overlayDisabled: !0,
          children: j.jsxs("div", {
            className: c("stylex")(
              n.thumbnail,
              q[g],
              p[g],
              a.active !== !0 && n.thumbnailNonActive
            ),
            style: b,
            children: [
              a.image.mediaType === "video"
                ? j.jsx("div", {
                    className: c("stylex")(n.videoIcon),
                    children: j.jsx(c("TetraIcon.react"), {
                      color: "white",
                      icon: d("fbicon")._(i("507224"), 12),
                    }),
                  })
                : null,
              a.image.mediaType !== "video" &&
              Boolean(a.image.isUseImageResizing)
                ? j.jsx(c("CometImage.react"), { src: e, xstyle: n.imageInner })
                : j.jsx(c("CometBackgroundImage.react"), { src: e }),
            ],
          }),
        }),
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function a(a) {
      var b = m(0),
        e = b[0],
        f = b[1],
        g = l(null),
        h = l(null),
        i = l(null);
      b = a.thumbnailMargin;
      var o = b === void 0 ? 6 : b;
      b = a.thumbnailSize;
      var p = b === void 0 ? 36 : b,
        s = p + o * 2;
      k(
        function () {
          function b() {
            if (g.current != null) {
              var b = g.current,
                c = b.offsetWidth;
              b = b.scrollWidth;
              var d = i.current;
              if (b === c) return;
              b = -e / s;
              var h = Math.floor((c + -e) / s),
                j = b + Math.floor((h - b) / 2);
              if (d != null) {
                if (
                  a.activeIndex > d &&
                  (a.activeIndex < j || h === a.images.length)
                ) {
                  i.current = a.activeIndex;
                  return;
                }
                if (a.activeIndex < d && (a.activeIndex > j || b === 0)) {
                  i.current = a.activeIndex;
                  return;
                }
              }
              j = e - (a.activeIndex - ((h = d) != null ? h : 0)) * s;
              j = Math.min(0, j);
              j = Math.max(Math.floor(c - a.images.length * s), j);
              i.current = a.activeIndex;
              f(j);
            }
          }
          b();
          h.current != null && window.removeEventListener("resize", h.current);
          b = c("CometThrottle")(b, 100);
          h.current = b;
          window.addEventListener("resize", b);
          return function () {
            h.current != null &&
              window.removeEventListener("resize", h.current);
          };
        },
        [a.images, a.activeIndex, e, s]
      );
      return a.images.length < 2
        ? null
        : j.jsx("div", {
            className: c("stylex")([n.root, q[p]]),
            ref: g,
            style: {
              transform:
                "translate3d(" + (d("Locale").isRTL() ? -e : e) + "px, 0, 0)",
            },
            children: a.images.map(function (b, c) {
              return j.jsx(
                r,
                {
                  active: a.activeIndex === c,
                  image: b,
                  index: c,
                  onClick: function (b) {
                    a.onSetImage(c);
                  },
                  thumbnailMargin: o,
                  thumbnailSize: p,
                },
                "thumbnail_" + c
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
  "VideoPlayerQualitiesArray",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 720,
      h = 2160;
    function a(a) {
      return a;
    }
    function i(a) {
      a = a.length > 0 ? a[a.length - 1] : void 0;
      return a;
    }
    function j(a) {
      a = a.length > 0 ? a[0] : void 0;
      return a;
    }
    function b(a) {
      return a.length > 1;
    }
    function k(a, b) {
      a = i(a);
      return a != null && b != null && b === a;
    }
    function c(a) {
      return a != null && (a === "HD" || parseInt(a, 10) >= g);
    }
    function d(a) {
      return a != null && parseInt(a, 10) >= h;
    }
    function e(a, b) {
      var c = j(a),
        d = i(a);
      if (k(a, b)) {
        if (c != null) return c;
      } else if (d != null) return d;
      return void 0;
    }
    f.ensureVideoPlayerQualitiesArray = a;
    f.getHighestVideoQuality = i;
    f.getLowestVideoQuality = j;
    f.hasHDVideoQuality = b;
    f.isHDSelectedVideoQuality = k;
    f.isVideoQualityTypicallyConsideredHD = c;
    f.isVideoQualityTypicallyConsideredHD4K = d;
    f.getPreferredVideoQualityForToggleHD = e;
  },
  66
);
__d(
  "MarketplaceCrossPostDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4280588065350876",
        metadata: {},
        name: "MarketplaceCrossPostDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometMarketplaceUpdateQuantityMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "input", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "inventory_count",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useCometMarketplaceUpdateQuantityMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "MarketplaceListingUpdateQuantityResponsePayload",
              kind: "LinkedField",
              name: "marketplace_listing_update_quantity",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "listing",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometMarketplaceUnifiedInventoryItemQuantityUpdater_listing",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometMarketplaceUnifiedInventoryItemQuantityUpdater_listingConnection",
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
          name: "useCometMarketplaceUpdateQuantityMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "MarketplaceListingUpdateQuantityResponsePayload",
              kind: "LinkedField",
              name: "marketplace_listing_update_quantity",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "listing",
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
                      abstractKey: "__isMarketplaceListingRenderable",
                    },
                    {
                      alias: "should_show_txn_survey_on_mas",
                      args: [
                        {
                          kind: "Literal",
                          name: "action",
                          value: "MARK_AS_SOLD",
                        },
                      ],
                      kind: "ScalarField",
                      name: "should_show_txn_survey",
                      storageKey:
                        'should_show_txn_survey(action:"MARK_AS_SOLD")',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "listing_inventory_type",
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "ProductGroup",
                          kind: "LinkedField",
                          name: "variant_group",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "variant_labels",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "ProductItemsConnection",
                              kind: "LinkedField",
                              name: "product_items_edge",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "ProductItem",
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "variant_values",
                                      storageKey: null,
                                    },
                                    c,
                                    d,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "GroupCommerceProductItem",
                                      kind: "LinkedField",
                                      name: "for_sale_item",
                                      plural: !1,
                                      selections: [c],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "variant_name",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            c,
                          ],
                          storageKey: null,
                        },
                      ],
                      type: "MarketplaceListingWithVariants",
                      abstractKey: "__isMarketplaceListingWithVariants",
                    },
                    c,
                    d,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_sold",
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
          id: "4094128260630872",
          metadata: {},
          name: "useCometMarketplaceUpdateQuantityMutation",
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
  "useMarketplaceRelistMutation.graphql",
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
          name: "id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
        },
        e = [
          {
            kind: "Literal",
            name: "if_style",
            value: "group_sell_product_item",
          },
        ],
        f = {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "origin_group",
          plural: !1,
          selections: [c],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useMarketplaceRelistMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "MarketplaceRelistResponsePayload",
              kind: "LinkedField",
              name: "marketplace_relist",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "GroupCommerceProductItem",
                  kind: "LinkedField",
                  name: "listing",
                  plural: !1,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "story",
                      plural: !1,
                      selections: [
                        c,
                        d,
                        {
                          alias: null,
                          args: e,
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
                              name: "target",
                              plural: !1,
                              selections: [
                                {
                                  kind: "InlineFragment",
                                  selections: [c, f],
                                  type: "MarketplaceListingRenderable",
                                  abstractKey:
                                    "__isMarketplaceListingRenderable",
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey:
                            'attachments(if_style:"group_sell_product_item")',
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
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useMarketplaceRelistMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "MarketplaceRelistResponsePayload",
              kind: "LinkedField",
              name: "marketplace_relist",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "GroupCommerceProductItem",
                  kind: "LinkedField",
                  name: "listing",
                  plural: !1,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "story",
                      plural: !1,
                      selections: [
                        c,
                        d,
                        {
                          alias: null,
                          args: e,
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
                              name: "target",
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
                                  kind: "InlineFragment",
                                  selections: [f],
                                  type: "MarketplaceListingRenderable",
                                  abstractKey:
                                    "__isMarketplaceListingRenderable",
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey:
                            'attachments(if_style:"group_sell_product_item")',
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
          id: "3758908367486646",
          metadata: {},
          name: "useMarketplaceRelistMutation",
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
  "MarketplaceCrossPostDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "MarketplaceCrossPostDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            crossPostDialogQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: b("MarketplaceCrossPostDialogQuery$Parameters"),
              variables: {
                listing_id: (a = a.listingId) != null ? a : "0",
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "MarketplaceCrossPostDialog.react"
      ).__setRef("MarketplaceCrossPostDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometMarketplaceYouFeedCardGlimmer.react",
  ["BaseGlimmer.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.showWide;
      a = a === void 0 ? !0 : a;
      return h.jsxs("div", {
        className: c("stylex").dedupe(
          a
            ? {
                "background-color-1": "cwj9ozl2",
                "border-top-start-radius-1": "ue3kfks5",
                "border-top-end-radius-1": "pw54ja7n",
                "border-bottom-end-radius-1": "uo3d90p7",
                "border-bottom-start-radius-1": "l82x9zwi",
                "box-shadow-1": "o16s864r",
                "margin-end-1": "ad2k81qe",
                "margin-start-1": "f9o22wc5",
                "margin-bottom-1": "sej5wr8e",
                "margin-top-1": "jei6r52m",
                "width-1": "gmr06ekw",
                "width-2-(max-width: 899px)": "ldhj9swq",
              }
            : {
                "background-color-1": "cwj9ozl2",
                "border-top-start-radius-1": "ue3kfks5",
                "border-top-end-radius-1": "pw54ja7n",
                "border-bottom-end-radius-1": "uo3d90p7",
                "border-bottom-start-radius-1": "l82x9zwi",
                "box-shadow-1": "o16s864r",
                "margin-end-1": "ad2k81qe",
                "margin-start-1": "f9o22wc5",
                "margin-bottom-1": "sej5wr8e",
                "margin-top-1": "jei6r52m",
                "width-1": "oh7imozk",
                "width-2-(max-width: 899px)": "ldhj9swq",
              }
        ),
        children: [
          h.jsxs("div", {
            className: "dati1w0a ofv0k9yr hv4rvrfc discj3wi j83agx80 bp9cbjyn",
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "gjzvkazv qzj7cv8z pfnyh3mw kb5gq1qc mg4g778l l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: 1,
              }),
              h.jsxs("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 h676nmdw",
                children: [
                  h.jsx(c("BaseGlimmer.react"), {
                    className: "fwkrndq2 jnigpg78",
                    index: 2,
                  }),
                  h.jsx(c("BaseGlimmer.react"), {
                    className: "cp6p5cpd aov4n071 jnigpg78",
                    index: 2,
                  }),
                ],
              }),
            ],
          }),
          h.jsxs("div", {
            className: "dati1w0a ofv0k9yr hv4rvrfc jb3vyjys j83agx80",
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "oi9244e8 orb7ywq3 buofh1pr qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",
                index: 3,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "oi9244e8 orb7ywq3 buofh1pr qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",
                index: 4,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "oi9244e8 orb7ywq3 buofh1pr qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",
                index: 5,
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
  "MarketplaceYouSellingBulkManagementContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    function a() {
      return { bulkManagementIsActive: !1, listings: {} };
    }
    c = b.createContext(a());
    g.marketplaceYouSellingBulkManagementInitializer = a;
    g.MarketplaceYouSellingBulkManagementContext = c;
  },
  98
);
__d(
  "MarketplaceYouSellingBulkManagementDispatchContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      dispatch: function (a) {
        return void 0;
      },
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useMarketplaceYouSellingBulkManagementDispatcher",
  ["MarketplaceYouSellingBulkManagementDispatchContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("MarketplaceYouSellingBulkManagementDispatchContext"));
      return a.dispatch;
    }
    g["default"] = a;
  },
  98
);
__d(
  "marketplaceYouSellingBulkManagementActions",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return { type: "clear_listings" };
    }
    function b(a) {
      return { type: "add_listing", value: a };
    }
    function c() {
      return { type: "set_bulk_management_is_active" };
    }
    function d(a, b) {
      return { listingId: a, selected: b, type: "set_listing_selected" };
    }
    function e(a) {
      return { type: "select_all_listings", value: a };
    }
    function g() {
      return { type: "renew_selected_listings" };
    }
    f.clearListings = a;
    f.addListing = b;
    f.setBulkManagementIsActive = c;
    f.setListingSelected = d;
    f.selectAllListings = e;
    f.renewSelectedListings = g;
  },
  66
);
__d(
  "MarketplaceMarkAsButtonContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { isBusy: !1, setIsBusy: function () {} };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useCometMarketplaceUpdateQuantityMutation",
  ["CometRelay", "react", "useCometMarketplaceUpdateQuantityMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j =
        h !== void 0
          ? h
          : (h = b("useCometMarketplaceUpdateQuantityMutation.graphql"));
    function a() {
      var a = d("CometRelay").useMutation(j, "enqueue"),
        b = a[0];
      a = a[1];
      var c = i(
        function (a) {
          var c = a.listingId,
            d = a.onComplete,
            e = a.onError,
            f = a.quantity;
          function g(a) {
            (a = a.get(c)) == null
              ? void 0
              : (a = a.setValue(f, "inventory_count")) == null
              ? void 0
              : a.setValue(f === 0, "is_sold");
          }
          return b({
            onCompleted: function (a) {
              var b;
              b =
                a == null
                  ? void 0
                  : (b = a.marketplace_listing_update_quantity) == null
                  ? void 0
                  : b.listing;
              b != null && (d == null ? void 0 : d(a));
            },
            onError: e,
            optimisticUpdater: g,
            variables: { input: { listing_id: c, quantity: f } },
          });
        },
        [b]
      );
      return [c, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMarketplaceRelistMutation",
  ["CometRelay", "react", "useMarketplaceRelistMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = d("react");
    var i = c.useCallback,
      j = c.useMemo,
      k = h !== void 0 ? h : (h = b("useMarketplaceRelistMutation.graphql"));
    function a() {
      var a = d("CometRelay").useMutation(k),
        b = a[0],
        c = a[1],
        e = i(
          function (a) {
            var c = a.callbacks,
              d = a.listing_id;
            a = a.updater;
            c = {
              onCompleted: c == null ? void 0 : c.onSuccess,
              onError: c == null ? void 0 : c.onError,
              updater: a,
              uploadables: {},
              variables: { input: { listing_id: d } },
            };
            b(c);
          },
          [b]
        );
      return j(
        function () {
          return [e, c];
        },
        [e, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "MarketplaceComposerSellerInfoField_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "MarketplaceComposerSellerInfoField_viewer",
    };
    e.exports = a;
  },
  null
);
__d(
  "useLogMarketplaceModify",
  ["CometMarketplaceLogger", "react", "useCurrentMarketplaceSurface"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useRef;
    function a(a, b) {
      var e = i(!1),
        f = c("useCurrentMarketplaceSurface")(),
        g = f.referralSurface,
        j = f.surface;
      return h(
        function (c) {
          (!e.current || (b == null ? void 0 : b.logMultiple)) &&
            ((e.current = !0),
            d("CometMarketplaceLogger").logModify(a, j, g, c));
        },
        [a, j, g, b == null ? void 0 : b.logMultiple]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useIsEnableCreationFlowV2",
  ["qex", "useCurrentMarketplaceSurface"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("useCurrentMarketplaceSurface")();
      a = a.referralSurface;
      var b = [
        "marketplace_vendoo",
        "marketplace_list_perfectly",
        "marketplace_list_perfectly_primary",
        "marketplace_list_perfectly_trial",
        "marketplace_list_perfectly_marketing",
        "marketplace_list_perfectly_thanksgiving",
      ];
      return (
        !b.includes(a == null ? void 0 : a.toString()) &&
        ((b = c("qex")._("141")) != null ? b : !1)
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "MarketplaceComposerSellerInfoField",
  [
    "CometRelay",
    "MarketplaceComposerSellerInfoField_viewer.graphql",
    "MarketplaceSellerSuccessGating",
    "cometMarketplaceComposerUtils.hybrid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      return { type: "set_seller_info", value: a };
    }
    c = function (a) {
      var c;
      a = d("CometRelay").readInlineData(
        h !== void 0
          ? h
          : (h = b("MarketplaceComposerSellerInfoField_viewer.graphql")),
        a
      );
      a =
        d("MarketplaceSellerSuccessGating").isBusinessOnMarketplaceEnabled() &&
        (a == null
          ? void 0
          : (c = a.actor) == null
          ? void 0
          : (c = c.human_readable_type) == null
          ? void 0
          : c.text) !== "Profile"
          ? {
              sellerInfoId:
                a == null ? void 0 : (c = a.actor) == null ? void 0 : c.id,
              sellerInfoName:
                a == null ? void 0 : (c = a.actor) == null ? void 0 : c.name,
              sellerInfoPageCanViewerLike:
                (c =
                  a == null
                    ? void 0
                    : (c = a.actor) == null
                    ? void 0
                    : c.can_viewer_like) != null
                  ? c
                  : !1,
              sellerInfoPageIsViewerFan:
                (c =
                  a == null
                    ? void 0
                    : (c = a.actor) == null
                    ? void 0
                    : c.is_viewer_fan) != null
                  ? c
                  : !1,
              sellerInfoPageLikersCount:
                (c =
                  a == null
                    ? void 0
                    : (c = a.actor) == null
                    ? void 0
                    : (c = c.page_likers) == null
                    ? void 0
                    : c.count) != null
                  ? c
                  : 0,
              sellerInfoProfilePictureURI:
                a == null
                  ? void 0
                  : (c = a.actor) == null
                  ? void 0
                  : (c = c.normalProfPic) == null
                  ? void 0
                  : c.uri,
              sellerInfoTypeName:
                (a == null
                  ? void 0
                  : (c = a.actor) == null
                  ? void 0
                  : (c = c.human_readable_type) == null
                  ? void 0
                  : c.text) === "Profile"
                  ? "User"
                  : "Page",
              sellerInfoUrl:
                a == null ? void 0 : (c = a.actor) == null ? void 0 : c.url,
              sellerInfoWebsites: [],
            }
          : null;
      return d("cometMarketplaceComposerUtils.hybrid").buildViewStateField(
        a,
        []
      );
    };
    g.setSellerInfo = a;
    g.initialize = c;
  },
  98
);
__d(
  "MarketplaceComposerPageSelectorPopover.react",
  [
    "fbt",
    "ix",
    "Actor",
    "CometMenu.react",
    "CometMenuItemSelectable.react",
    "MarketplaceComposerSellerInfoField",
    "TetraIcon.react",
    "fbicon",
    "marketplaceComposerDispatchers.hybrid",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = function (a) {
        return a
          ? j.jsx(c("TetraIcon.react"), {
              color: "highlight",
              icon: d("fbicon")._(i("621399"), 20),
            })
          : j.jsx(c("TetraIcon.react"), {
              color: "secondary",
              icon: d("fbicon")._(i("545511"), 20),
            });
      };
    function a(a) {
      var b = d("Actor").useActor(),
        e = b[0],
        f = b[1];
      b = a.dropdownOptions;
      var g = d(
          "marketplaceComposerDispatchers.hybrid"
        ).useMarketplaceComposerDispatcher(),
        i = g.dispatch,
        l = [];
      b.forEach(function (b) {
        var g;
        l.push(
          j.jsx(
            c("CometMenuItemSelectable.react"),
            {
              aux: k,
              icon: {
                src: (g = b.profilePictureURI) != null ? g : "",
                style: "circle",
              },
              iconStyle: "contained",
              isSelected: b.id === e,
              onClick: function () {
                var c;
                f((c = b.id) != null ? c : a.currentUserID);
                c = {
                  sellerInfoId: b.id,
                  sellerInfoName: b.name,
                  sellerInfoPageCanViewerLike: b.canViewerLike,
                  sellerInfoPageIsViewerFan: b.isViewerFan,
                  sellerInfoPageLikersCount: b.pageLikersCount,
                  sellerInfoProfilePictureURI: b.profilePictureURI,
                  sellerInfoTypeName: b.typeName,
                  sellerInfoUrl: b.url,
                  sellerInfoWebsites: b.websites,
                };
                i(d("MarketplaceComposerSellerInfoField").setSellerInfo(c));
              },
              primaryText: (g = b.name) != null ? g : "",
              role: "menuitemradio",
              secondaryText:
                b.id !== a.currentUserID ? h._("Business Page") : null,
            },
            b.id
          )
        );
      });
      return j.jsx("div", {
        className: c("stylex")(a.xstyle),
        children: j.jsx(c("CometMenu.react"), { size: "full", children: l }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "timeString",
  ["fbt", "DateConsts"],
  function (a, b, c, d, e, f, g, h) {
    function i(a) {
      var b, c;
      a < 10
        ? (b = h._("just now"))
        : a < d("DateConsts").SEC_PER_MIN
        ? (b = h._("a few seconds ago"))
        : a < d("DateConsts").SEC_PER_MIN * 2
        ? (b = h._("about a minute ago"))
        : a < d("DateConsts").SEC_PER_HOUR
        ? ((c = Math.floor(a / d("DateConsts").SEC_PER_MIN)),
          (b = h._("{number} minutes ago", [h._param("number", c)])))
        : a < d("DateConsts").SEC_PER_HOUR * 2
        ? (b = h._("about an hour ago"))
        : a < d("DateConsts").SEC_PER_DAY
        ? ((c = Math.floor(a / d("DateConsts").SEC_PER_HOUR)),
          (b = h._("{number} hours ago", [h._param("number", c)])))
        : a < d("DateConsts").SEC_PER_DAY * 2
        ? (b = h._("about a day ago"))
        : a < d("DateConsts").SEC_PER_DAY * 30
        ? ((c = Math.floor(a / d("DateConsts").SEC_PER_DAY)),
          (b = h._("{number} days ago", [h._param("number", c)])))
        : a < d("DateConsts").SEC_PER_DAY * 30 * 2
        ? (b = h._("about a month ago"))
        : a < d("DateConsts").SEC_PER_YEAR
        ? ((c = Math.floor(a / d("DateConsts").SEC_PER_DAY / 30)),
          (b = h._("{number} months ago", [h._param("number", c)])))
        : a < d("DateConsts").SEC_PER_YEAR * 2
        ? (b = h._("over a year ago"))
        : ((c = Math.floor(a / d("DateConsts").SEC_PER_YEAR)),
          (b = h._("{number} years ago", [h._param("number", c)])));
      return b;
    }
    function j(a) {
      var b, c;
      a = Math.abs(a);
      a < 10
        ? (b = h._("just now"))
        : a < d("DateConsts").SEC_PER_MIN
        ? (b = h._("in a few seconds"))
        : a < d("DateConsts").SEC_PER_MIN * 2
        ? (b = h._("in about a minute"))
        : a < d("DateConsts").SEC_PER_HOUR
        ? ((c = Math.floor(a / d("DateConsts").SEC_PER_MIN)),
          (b = h._("in {number} minutes", [h._param("number", c)])))
        : a < d("DateConsts").SEC_PER_HOUR * 2
        ? (b = h._("in about an hour"))
        : a < d("DateConsts").SEC_PER_DAY
        ? ((c = Math.floor(a / d("DateConsts").SEC_PER_HOUR)),
          (b = h._("in {number} hours", [h._param("number", c)])))
        : a < d("DateConsts").SEC_PER_DAY * 2
        ? (b = h._("in about a day"))
        : a < d("DateConsts").SEC_PER_DAY * 30
        ? ((c = Math.floor(a / d("DateConsts").SEC_PER_DAY)),
          (b = h._("in {number} days", [h._param("number", c)])))
        : a < d("DateConsts").SEC_PER_DAY * 30 * 2
        ? (b = h._("in about a month"))
        : a < d("DateConsts").SEC_PER_YEAR
        ? ((c = Math.floor(a / d("DateConsts").SEC_PER_DAY / 30)),
          (b = h._("in {number} months", [h._param("number", c)])))
        : a < d("DateConsts").SEC_PER_YEAR * 2
        ? (b = h._("in over a year"))
        : ((c = Math.floor(a / d("DateConsts").SEC_PER_YEAR)),
          (b = h._("in {number} years", [h._param("number", c)])));
      return b;
    }
    function a(a, b) {
      b = b == null || b === 0 ? Date.now() : b;
      b = Math.floor((b - a) / d("DateConsts").MS_PER_SEC);
      if (b >= 0) return i(b);
      else return j(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "TimestampUtils",
  ["fbt", "formatDate", "timeString"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 1e3,
      j = 7 * 24 * 60 * 60 * 1e3;
    function a(a) {
      a = new Date(a);
      return h._("Joined Facebook in {year, like 2011'}", [
        h._param("year, like 2011'", a.getFullYear()),
      ]);
    }
    function b(a) {
      a = a * i;
      return Date.now() - a >= j ? h._("over a week ago") : c("timeString")(a);
    }
    function d(a) {
      a = new Date(a * 1e3);
      var b = new Date();
      if (b.getFullYear() > a.getFullYear()) return c("formatDate")(a, "m/d/y");
      if (
        b.getDate() === a.getDate() &&
        b.getMonth() === a.getMonth() &&
        b.getFullYear() === a.getFullYear()
      )
        return c("formatDate")(a, "g:ia");
      b = b - a;
      if (b <= j) return c("formatDate")(a, "D");
      else return c("formatDate")(a, "M d");
    }
    function e(a) {
      a = new Date(a * 1e3);
      return c("formatDate")(a, "m/d/Y g:ia");
    }
    g.timestampToFBTenure = a;
    g.timestampToFriendlyTime = b;
    g.timestampToFormattedTime = d;
    g.timestampToFormattedDateTime = e;
  },
  98
);
