if (self.CavalryLogger) {
  CavalryLogger.start_js(["dBLqo7R"]);
}

__d(
  "CometResharesDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3624225174346703",
        metadata: {},
        name: "CometResharesDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometIdentityBadges_identityBadge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometIdentityBadges_identityBadge",
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
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text_gradient",
          storageKey: null,
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
  "CometUFICommentActorLink_comment.graphql",
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
        name: "CometUFICommentActorLink_comment",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "author",
            plural: !1,
            selections: [
              a,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "url",
                    storageKey: null,
                  },
                ],
                type: "Entity",
                abstractKey: "__isEntity",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIGroupCommentActorLink_actor",
              },
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
                args: null,
                documentName: "CometUFICommentActorLink_comment",
                fragmentName: "CometUFIGroupCommentActorLink_groupCommentInfo",
                fragmentPropName: "groupCommentInfo",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
        ],
        type: "Comment",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentTopReactions_feedback.graphql",
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
      };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentTopReactions_feedback",
        selections: [
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
                name: "count_reduced",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
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
            selections: [a],
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
                      a,
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
            storageKey: 'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
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
  "CometUFICommentsCountRenderer_data$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFICommentsCountRenderer_data$normalization",
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
              alias: "comment_count",
              args: null,
              concreteType: "TopLevelCommentsConnection",
              kind: "LinkedField",
              name: "top_level_comments",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "total_count",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: "i18n_comment_count",
              args: null,
              kind: "ScalarField",
              name: "comment_count_reduced",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentsCountRenderer_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentsCountRenderer_data",
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
              name: "CometUFICommentsCount_feedback",
            },
          ],
          storageKey: null,
        },
      ],
      type: "TotalCommentsCountSummaryRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentsCount_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentsCount_feedback",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: "comment_count",
          args: null,
          concreteType: "TopLevelCommentsConnection",
          kind: "LinkedField",
          name: "top_level_comments",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "total_count",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: "i18n_comment_count",
          args: null,
          kind: "ScalarField",
          name: "comment_count_reduced",
          storageKey: null,
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
  "CometUFIReactionLink_feedback.graphql",
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
        b = [
          {
            kind: "Variable",
            name: "use_default_actor",
            variableName: "useDefaultActor",
          },
        ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFIReactionLink_feedback",
        selections: [
          a,
          {
            alias: null,
            args: b,
            concreteType: "FeedbackReactionInfo",
            kind: "LinkedField",
            name: "viewer_feedback_reaction_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "key",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: b,
            concreteType: null,
            kind: "LinkedField",
            name: "viewer_actor",
            plural: !1,
            selections: [a],
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
            name: "CometUFIFeedbackReactMutation_feedback",
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
  "CometUFIReactionsDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3783547041750558",
        metadata: {},
        name: "CometUFIReactionsDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFISeenByCountText_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFISeenByCountText_feedback",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "SeenByConnection",
            kind: "LinkedField",
            name: "seen_by",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "count",
                  storageKey: null,
                },
                action: "THROW",
                path: "seen_by.count",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: "i18n_seen_by_count",
                  args: null,
                  kind: "ScalarField",
                  name: "seen_by_count_reduced",
                  storageKey: null,
                },
                action: "THROW",
                path: "seen_by.i18n_seen_by_count",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "seen_by_everyone",
                  storageKey: null,
                },
                action: "THROW",
                path: "seen_by.seen_by_everyone",
              },
            ],
            storageKey: null,
          },
          action: "LOG",
          path: "seen_by",
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
  "CometUFISeenByCount_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFISeenByCount_feedback",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_show_seen_by",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "if_viewer_can_see_seen_by_member_list",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "CometUFISeenByCount_feedback__if_viewer_can_see_seen_by_member_list",
              fragmentName: "CometUFISeenByCountButton_feedback",
              fragmentPropName: "feedback",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "if_viewer_cannot_see_seen_by_member_list",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "CometUFISeenByCount_feedback__if_viewer_cannot_see_seen_by_member_list",
              fragmentName: "CometUFISeenByCountText_feedback",
              fragmentPropName: "feedback",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
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
  "CometUFISharesCount_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFISharesCount_feedback",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: "i18n_share_count",
          args: null,
          kind: "ScalarField",
          name: "share_count_reduced",
          storageKey: null,
        },
        {
          alias: "share_count",
          args: null,
          concreteType: "ResharesOfContentConnection",
          kind: "LinkedField",
          name: "reshares",
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
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFISummaryBase_feedback.graphql",
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
        ],
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_empty",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "canShowSeenState",
          },
          { kind: "RootArgument", name: "feedLocation" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFISummaryBase_feedback",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIReactionsCount_feedback",
          },
          {
            condition: "canShowSeenState",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFISeenByCount_feedback",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_show_seen_by",
                storageKey: null,
              },
              {
                kind: "ClientExtension",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_unseen",
                    storageKey: null,
                  },
                ],
              },
            ],
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFISharesCount_feedback",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFITopReactions_feedback",
          },
          {
            alias: null,
            args: a,
            concreteType: null,
            kind: "LinkedField",
            name: "comments_count_summary_renderer",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName: "GeminiWorkAMAQuestionsCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkAMAQuestionsCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName:
                      "GeminiUFIQAAnswersCommentsCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "QAAnswersCommentsCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName: "CometUFICommentsCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "TotalCommentsCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName: "CometUFIAMAAnswersCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AMATotalAnswersCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName:
                      "CometUFICommunityQAAnswersCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommunityQAAnswersCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName: "GeminiUFIQASocialAnswersCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "QASocialAnswersCountSummaryRenderer",
                abstractKey: null,
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
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_is_ama_enabled",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: "comment_count",
            args: null,
            concreteType: "TopLevelCommentsConnection",
            kind: "LinkedField",
            name: "top_level_comments",
            plural: !1,
            selections: b,
            storageKey: null,
          },
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
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: "reaction_count",
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            alias: "share_count",
            args: null,
            concreteType: "ResharesOfContentConnection",
            kind: "LinkedField",
            name: "reshares",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_view_count",
            storageKey: null,
          },
          {
            alias: null,
            args: a,
            concreteType: null,
            kind: "LinkedField",
            name: "video_view_count_renderer",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISummaryBase_feedback__video_view_count",
                    fragmentName: "UFI2ViewCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "UFI2ViewCountRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISummaryBase_feedback__video_view_count",
                    fragmentName: "CometUFIViewerCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometUFIViewerCountRenderer",
                abstractKey: null,
              },
            ],
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
  "CometUFISummary_feedback$normalization.graphql",
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
          alias: "i18n_reaction_count",
          args: null,
          kind: "ScalarField",
          name: "reaction_count_reduced",
          storageKey: null,
        },
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
          name: "name",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_empty",
          storageKey: null,
        },
        g = [e, f],
        h = [
          {
            kind: "Variable",
            name: "use_default_actor",
            variableName: "useDefaultActor",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        j = [
          {
            kind: "Variable",
            name: "feed_location",
            variableName: "feedLocation",
          },
        ];
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "CometUFISummary_feedback$canShowSeenState",
          },
        ],
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFISummary_feedback$normalization",
        selections: [
          a,
          b,
          {
            alias: null,
            args: [{ kind: "Literal", name: "first", value: 2 }],
            concreteType: "ImportantReactorsConnection",
            kind: "LinkedField",
            name: "important_reactors",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [c, d, a],
                storageKey: null,
              },
            ],
            storageKey: "important_reactors(first:2)",
          },
          {
            alias: "reaction_count",
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
            plural: !1,
            selections: g,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ReactionDisplayConfig",
            kind: "LinkedField",
            name: "reaction_display_config",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reaction_display_strategy",
                storageKey: null,
              },
              {
                args: null,
                documentName: "CometUFIReactionsCount_feedback",
                fragmentName: "CometUFIReactionSentence_reactionDisplayConfig",
                fragmentPropName: "reactionDisplayConfig",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: h,
            concreteType: null,
            kind: "LinkedField",
            name: "viewer_actor",
            plural: !1,
            selections: [c, a, d],
            storageKey: null,
          },
          {
            alias: null,
            args: h,
            concreteType: "FeedbackReactionInfo",
            kind: "LinkedField",
            name: "viewer_feedback_reaction_info",
            plural: !1,
            selections: [c, a, i],
            storageKey: null,
          },
          {
            condition: "CometUFISummary_feedback$canShowSeenState",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_show_seen_by",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "if_viewer_can_see_seen_by_member_list",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISeenByCount_feedback__if_viewer_can_see_seen_by_member_list",
                    fragmentName: "CometUFISeenByCountButton_feedback",
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
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "if_viewer_cannot_see_seen_by_member_list",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISeenByCount_feedback__if_viewer_cannot_see_seen_by_member_list",
                    fragmentName: "CometUFISeenByCountText_feedback",
                    fragmentPropName: "feedback",
                    kind: "ModuleImport",
                  },
                  a,
                ],
                storageKey: null,
              },
              {
                kind: "ClientExtension",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_unseen",
                    storageKey: null,
                  },
                ],
              },
            ],
          },
          {
            alias: "i18n_share_count",
            args: null,
            kind: "ScalarField",
            name: "share_count_reduced",
            storageKey: null,
          },
          {
            alias: "share_count",
            args: null,
            concreteType: "ResharesOfContentConnection",
            kind: "LinkedField",
            name: "reshares",
            plural: !1,
            selections: g,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
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
                      i,
                      a,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "localized_name",
                        storageKey: null,
                      },
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
                  b,
                ],
                storageKey: null,
              },
            ],
            storageKey: 'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
          },
          {
            alias: null,
            args: j,
            concreteType: null,
            kind: "LinkedField",
            name: "comments_count_summary_renderer",
            plural: !1,
            selections: [
              c,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName: "GeminiWorkAMAQuestionsCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkAMAQuestionsCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName:
                      "GeminiUFIQAAnswersCommentsCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "QAAnswersCommentsCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName: "CometUFICommentsCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "TotalCommentsCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName: "CometUFIAMAAnswersCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AMATotalAnswersCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName:
                      "CometUFICommunityQAAnswersCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommunityQAAnswersCountSummaryRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFISummaryBase_feedback",
                    fragmentName: "GeminiUFIQASocialAnswersCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "QASocialAnswersCountSummaryRenderer",
                abstractKey: null,
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
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_is_ama_enabled",
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
          {
            alias: "comment_count",
            args: null,
            concreteType: "TopLevelCommentsConnection",
            kind: "LinkedField",
            name: "top_level_comments",
            plural: !1,
            selections: [f],
            storageKey: null,
          },
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
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_view_count",
            storageKey: null,
          },
          {
            alias: null,
            args: j,
            concreteType: null,
            kind: "LinkedField",
            name: "video_view_count_renderer",
            plural: !1,
            selections: [
              c,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISummaryBase_feedback__video_view_count",
                    fragmentName: "UFI2ViewCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "UFI2ViewCountRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISummaryBase_feedback__video_view_count",
                    fragmentName: "CometUFIViewerCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometUFIViewerCountRenderer",
                abstractKey: null,
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
  "CometUFISummary_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "canShowSeenState" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometUFISummary_feedback",
      selections: [
        {
          args: [
            {
              kind: "Variable",
              name: "canShowSeenState",
              variableName: "canShowSeenState",
            },
          ],
          kind: "FragmentSpread",
          name: "CometUFISummaryBase_feedback",
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
  "CometGenericCommentDisableNotice_commentDisableNotice$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometGenericCommentDisableNotice_commentDisableNotice$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "notice_message",
          plural: !1,
          selections: [
            {
              args: null,
              fragment: b(
                "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
              ),
              kind: "FragmentSpread",
            },
          ],
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGenericCommentDisableNotice_commentDisableNotice.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometGenericCommentDisableNotice_commentDisableNotice",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "notice_message",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometTextWithEntitiesRelay_textWithEntities",
            },
          ],
          storageKey: null,
        },
      ],
      type: "GeneralCommentDisableNotice",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerAssociateReplyWithParentPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerAssociateReplyWithParentPlugin_plugin$normalization",
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
  "cometUFIComposerAssociateReplyWithParentPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerAssociateReplyWithParentPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerAssociateReplyWithParentPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerDelightsPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerDelightsPlugin_plugin$normalization",
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
  "cometUFIComposerDelightsPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerDelightsPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerDelightsPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerEmojiPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerEmojiPlugin_plugin$normalization",
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
  "cometUFIComposerEmojiPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerEmojiPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerEmojiPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerEmojiPlugin_pluginData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "cometUFIComposerEmojiPlugin_pluginData",
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerEmoticonPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerEmoticonPlugin_plugin$normalization",
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
  "cometUFIComposerEmoticonPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerEmoticonPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerEmoticonPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerEmoticonPlugin_pluginData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "cometUFIComposerEmoticonPlugin_pluginData",
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerHashtagPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerHashtagPlugin_plugin$normalization",
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
  "cometUFIComposerHashtagPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerHashtagPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerHashtagPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerMentionsPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerMentionsPlugin_plugin$normalization",
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
  "cometUFIComposerMentionsPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerMentionsPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerMentionsPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerMentionsPlugin_pluginData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "cometUFIComposerMentionsPlugin_pluginData",
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerPrefillMentionPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerPrefillMentionPlugin_plugin$normalization",
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
  "cometUFIComposerPrefillMentionPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerPrefillMentionPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerPrefillMentionPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerSetReplyClickedPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerSetReplyClickedPlugin_plugin$normalization",
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
  "cometUFIComposerSetReplyClickedPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerSetReplyClickedPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerSetReplyClickedPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerStateSnapshotPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerStateSnapshotPlugin_plugin$normalization",
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
  "cometUFIComposerStateSnapshotPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerStateSnapshotPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerStateSnapshotPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIReactionSentence_reactionDisplayConfig$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFIReactionSentence_reactionDisplayConfig$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_display_strategy",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_string_with_viewer",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_string_without_viewer",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIReactionSentence_reactionDisplayConfig.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIReactionSentence_reactionDisplayConfig",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_display_strategy",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_string_with_viewer",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_string_without_viewer",
          storageKey: null,
        },
      ],
      type: "ReactionDisplayConfig",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIReactionsCount_feedback.graphql",
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
          name: "name",
          storageKey: null,
        },
        c = [
          {
            kind: "Variable",
            name: "use_default_actor",
            variableName: "useDefaultActor",
          },
        ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFIReactionsCount_feedback",
        selections: [
          a,
          {
            alias: "i18n_reaction_count",
            args: null,
            kind: "ScalarField",
            name: "reaction_count_reduced",
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "first", value: 2 }],
            concreteType: "ImportantReactorsConnection",
            kind: "LinkedField",
            name: "important_reactors",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [b],
                storageKey: null,
              },
            ],
            storageKey: "important_reactors(first:2)",
          },
          {
            alias: "reaction_count",
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
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ReactionDisplayConfig",
            kind: "LinkedField",
            name: "reaction_display_config",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reaction_display_strategy",
                storageKey: null,
              },
              {
                args: null,
                documentName: "CometUFIReactionsCount_feedback",
                fragmentName: "CometUFIReactionSentence_reactionDisplayConfig",
                fragmentPropName: "reactionDisplayConfig",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: c,
            concreteType: null,
            kind: "LinkedField",
            name: "viewer_actor",
            plural: !1,
            selections: [a, b],
            storageKey: null,
          },
          {
            alias: null,
            args: c,
            concreteType: "FeedbackReactionInfo",
            kind: "LinkedField",
            name: "viewer_feedback_reaction_info",
            plural: !1,
            selections: [
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
  "CometUFITopReactions_feedback.graphql",
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
      };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFITopReactions_feedback",
        selections: [
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
            ],
            storageKey: null,
          },
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
            selections: [a],
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
                      a,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "localized_name",
                        storageKey: null,
                      },
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
                  {
                    alias: "i18n_reaction_count",
                    args: null,
                    kind: "ScalarField",
                    name: "reaction_count_reduced",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: 'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
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
  "isNotOutlierReaction_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "useDefaultActor" }],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "isNotOutlierReaction_feedback",
      selections: [
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
          ],
          storageKey: null,
        },
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
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "key",
              storageKey: null,
            },
          ],
          storageKey: null,
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
  "isNotOutlierReaction_topReactionsEdge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "isNotOutlierReaction_topReactionsEdge",
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "key",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "TopReactionsEdge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "Keyframes.react",
  [
    "FBLogger",
    "Keyframes",
    "createCancelableFunction",
    "promiseDone",
    "react",
    "testID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      var b = a.width;
      a = a.height;
      b = { width: b || 0, height: a || 0 };
      return h.jsx("div", { style: b });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function j(a) {
      var b = a.width;
      a = a.height;
      return h.jsx(i, { width: b, height: a });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { error: !1, renderer: null }),
          (c.$6 = function (a) {
            c.setState({ renderer: a, error: !1 }),
              c.props.onLoad && c.props.onLoad(a);
          }),
          (c.$7 = function (a) {
            c.setState({ renderer: null, error: !0 });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.seekToProgress = function (a) {
        this.state.renderer && this.state.renderer.seekToProgress(a);
      };
      e.componentDidMount = function () {
        this.$4(this.props.source);
      };
      e.componentWillUnmount = function () {
        this.state.renderer && this.state.renderer.pause(),
          this.$2 && this.$2.cancel(),
          this.$3 && this.$3.cancel();
      };
      e.componentDidUpdate = function (a, b) {
        if (
          this.props.source !== a.source ||
          this.props.projectName !== a.projectName ||
          (this.props.assetName != null &&
            a.assetName != null &&
            this.props.assetName !== a.assetName) ||
          (a.assetID != null &&
            this.props.assetID != null &&
            this.props.assetID !== a.assetID)
        )
          this.$4(this.props.source);
        else {
          var c = this.state.renderer;
          c !== b.renderer
            ? this.$5(b.renderer, c)
            : c &&
              ((a.width !== this.props.width ||
                a.height !== this.props.height) &&
                (c.resetDimensions(),
                this.props.width && c.setWidth(this.props.width),
                this.props.height && c.setHeight(this.props.height)),
              a.muted !== this.props.muted &&
                (this.props.muted ? c.mute() : c.unMute()),
              a.startAt !== this.props.startAt &&
                a.endAt !== this.props.endAt &&
                c.setStartAndEndAt(this.props.startAt, this.props.endAt),
              a.startAt !== this.props.startAt &&
                c.setStartAt(this.props.startAt),
              a.endAt !== this.props.endAt && c.setEndAt(this.props.endAt),
              a.repeatCount !== this.props.repeatCount &&
                c.repeatCount(this.props.repeatCount),
              a.onError !== this.props.onError && c.onError(this.props.onError),
              a.onRepeatEnd !== this.props.onRepeatEnd &&
                c.onRepeatEnd(this.props.onRepeatEnd),
              a.onProgress !== this.props.onProgress &&
                c.onProgress(this.props.onProgress),
              a.initialProgress !== this.props.initialProgress &&
                c.seekToProgress(this.props.initialProgress),
              a.playing !== this.props.playing &&
                (this.props.playing
                  ? c.play()
                  : (c.pause(),
                    this.props.resetOnPause &&
                      c
                        .repeatCount(this.props.repeatCount)
                        .seekToProgress(this.props.initialProgress))),
              c.redrawIfNeeded());
        }
      };
      e.$5 = function (a, b) {
        if (!this.$1) return;
        b &&
          (b
            .onError(this.props.onError)
            .onRepeatEnd(this.props.onRepeatEnd)
            .onProgress(this.props.onProgress)
            .setStartAt(this.props.startAt)
            .setEndAt(this.props.endAt)
            .repeatCount(this.props.repeatCount),
          this.props.width && b.setWidth(this.props.width),
          this.props.height && b.setHeight(this.props.height),
          this.props.initialProgress &&
            b.seekToProgress(this.props.initialProgress),
          this.props.muted ? b.mute() : b.unMute(),
          this.props.playing ? b.play() : b.pause(),
          b.redrawIfNeeded());
        a && b
          ? this.$1.replaceChild(b.getElement(), a.getElement())
          : (a && this.$1.removeChild(a.getElement()),
            b && this.$1.appendChild(b.getElement()));
        a = this.props.canvasRef;
        if (a) {
          b = (b = b == null ? void 0 : b.getElement()) != null ? b : null;
          typeof a === "function" ? a(b) : (a.current = b);
        }
      };
      e.$8 = function (a) {
        return a instanceof ArrayBuffer
          ? d("Keyframes").requestRendererFromBytes(a, this.$9())
          : d("Keyframes").requestRenderer(a, this.$9());
      };
      e.$4 = function (a) {
        this.$2 && this.$2.cancel(),
          this.$3 && this.$3.cancel(),
          !a
            ? this.$7()
            : ((this.$2 = c("createCancelableFunction")(this.$6)),
              (this.$3 = c("createCancelableFunction")(this.$7)),
              c("promiseDone")(this.$8(a), this.$2, this.$3));
      };
      e.$9 = function () {
        return this.props.assetID
          ? { projectName: this.props.projectName, assetID: this.props.assetID }
          : {
              projectName: this.props.projectName,
              assetName:
                this.props.assetName || "__FIXME__missing_react_asset_name",
            };
      };
      e.render = function () {
        var a = this,
          b = this.props,
          d = b.className,
          e = b.height,
          f = b.style;
        b = b.width;
        b = this.state.renderer
          ? null
          : this.state.error
          ? this.props.errorPlaceholder || h.jsx(j, { width: b, height: e })
          : this.props.placeholder || h.jsx(i, { width: b, height: e });
        e =
          this.props.mutator &&
          this.state.renderer &&
          h.cloneElement(this.props.mutator, {
            __renderer: this.state.renderer,
          });
        return h.jsxs(
          "div",
          babelHelpers["extends"](
            { className: d },
            c("testID")(this.props.testid),
            {
              ref: function (b) {
                return (a.$1 = b);
              },
              style: babelHelpers["extends"](
                { display: "inline-block", lineHeight: 0, fontSize: 0 },
                f
              ),
              children: [b, e],
            }
          )
        );
      };
      return b;
    })(h.Component);
    a.defaultProps = {
      initialProgress: 0,
      resetOnPause: !1,
      playing: !0,
      repeatCount: Infinity,
      startAt: 0,
      endAt: 1,
    };
    g["default"] = a;
  },
  98
);
__d(
  "ViewportAwareKeyframes.react",
  [
    "Keyframes.react",
    "clearTimeout",
    "react",
    "setTimeout",
    "stylex",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useVisibilityObserver",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useRef,
      k = b.useState,
      l = { root: { display: "pq6dq46d" } };
    function a(a) {
      var b = a.className,
        d = a.delay,
        e = d === void 0 ? 0 : d;
      d = a.height;
      var f = a.onAnimationCancel,
        g = a.onAnimationStart_SAFE_FOR_SSR,
        m = a.onDelayEnd,
        n = a.onDelayStart,
        o = a.onRepeatEnd,
        p = a.playing,
        q = p === void 0 ? "onvisible" : p;
      p = a.style;
      var r = a.width,
        s = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "className",
        "delay",
        "height",
        "onAnimationCancel",
        "onAnimationStart_SAFE_FOR_SSR",
        "onDelayEnd",
        "onDelayStart",
        "onRepeatEnd",
        "playing",
        "style",
        "width",
        "xstyle",
      ]);
      var t = k(q),
        u = t[0],
        v = t[1],
        w = j(!1);
      t = k(!1);
      var x = t[0],
        y = t[1],
        z = j(null),
        A = j(!1);
      t = k(!1);
      var B = t[0],
        C = t[1],
        D = j(0);
      function E(a) {
        o && o(a), a === 0 && ((w.current = !0), (A.current = !1), y(!1));
      }
      function F() {
        z.current !== null &&
          (c("clearTimeout")(z.current), (z.current = null));
      }
      function G() {
        f && f(), (D.current += 1), F();
      }
      t = c("useVisibilityObserver")({
        onHidden: function (a) {
          a = a.hiddenReason;
          a !== "COMPONENT_UNMOUNTED" &&
            (C(!1),
            (A.current = !1),
            w.current || G(),
            (w.current = !1),
            y(!1));
        },
        onVisible: function () {
          C(!0);
        },
      });
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          if (B) {
            if (x || w.current || A.current) return;
            e <= 0
              ? ["always", "onvisible"].includes(u) && (g && g(), y(!0))
              : (v("never"),
                n && n(),
                (z.current = c("setTimeout")(function () {
                  m && m(), g && g(), y(!0), v(q), (A.current = !0);
                }, e)));
          } else F();
        },
        [e, x, B, g, m, n, u, q]
      );
      var H = i(function () {
        return c("uuid")();
      }, []);
      return h.jsx("div", {
        className: c("stylex")([l.root, s]),
        ref: t,
        children: h.jsx(
          c("Keyframes.react"),
          babelHelpers["extends"](
            {
              className: b,
              height: d,
              onRepeatEnd: E,
              playing: (u === "onvisible" || u === "always") && x,
              style: p,
              width: r,
            },
            a
          ),
          H + "-" + D.current
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAngerReaction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='67.194%25'%3e%3cstop offset='0%25' stop-color='%23E04300'/%3e%3cstop offset='100%25' stop-color='%23FFA320'/%3e%3c/linearGradient%3e%3clinearGradient id='f' x1='50%25' x2='50%25' y1='13.511%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%233D0D00'/%3e%3cstop offset='100%25' stop-color='%23661C04'/%3e%3c/linearGradient%3e%3clinearGradient id='g' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='l' x1='82.871%25' x2='82.871%25' y1='109.337%25' y2='0%25'%3e%3cstop offset='0%25' stop-color='%239A2F00'/%3e%3cstop offset='100%25' stop-color='%23D44800'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.731459466 0 0 0 0 0.0510349878 0 0 0 0 0.0184398032 0 0 0 0.353638549 0'/%3e%3c/filter%3e%3cfilter id='d' width='169.5%25' height='366.7%25' x='-33.8%25' y='-66.7%25' filterUnits='objectBoundingBox'%3e%3cfeOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='.5'/%3e%3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 1 0 0 0 0 0.509680707 0 0 0 0 0 0 0 0 0.371206975 0'/%3e%3c/filter%3e%3cfilter id='i' width='111.4%25' height='138.5%25' x='-5.7%25' y='-19.2%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0387427847 0 0 0 0 0.0406182666 0 0 0 0 0.0875053146 0 0 0 1 0'/%3e%3c/filter%3e%3cfilter id='j' width='106.4%25' height='165.6%25' x='-3.2%25' y='-16.4%25' filterUnits='objectBoundingBox'%3e%3cfeOffset dy='.6' in='SourceAlpha' result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='.05'/%3e%3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.565874787 0 0 0 0 0.151271555 0 0 0 0 0 0 0 0 0.150240385 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='e' d='M5.2 13.551c0 .528 1.253.444 2.8.444 1.546 0 2.8.084 2.8-.444 0-.636-1.254-1.051-2.8-1.051-1.547 0-2.8.415-2.8 1.051'/%3e%3cpath id='h' d='M3.6 9.831c0-.791.538-1.431 1.2-1.431.663 0 1.2.64 1.2 1.431 0 .329-.093.633-.252.874a.527.527 0 01-.318.22c-.15.036-.373.075-.63.075s-.481-.039-.63-.075a.524.524 0 01-.318-.22 1.588 1.588 0 01-.252-.874zm6.4 0c0-.791.537-1.431 1.2-1.431.662 0 1.2.64 1.2 1.431 0 .329-.094.633-.252.874a.524.524 0 01-.318.22 2.734 2.734 0 01-.63.075c-.257 0-.48-.039-.63-.075a.53.53 0 01-.319-.22A1.596 1.596 0 0110 9.831z'/%3e%3cpath id='k' d='M9 7.6c0-.446.163-.6.445-.6.28 0 .414.276.506 1.066 1.128 0 3.038-.534 3.222-.534.178 0 .277.085.317.267.035.158-.023.308-.221.4-.621.287-2.443.935-3.984.935-.168 0-.285-.086-.285-.301V7.6zm-2.951.466C6.141 7.276 6.275 7 6.555 7c.282 0 .445.154.445.6v1.233c0 .215-.117.301-.285.301-1.541 0-3.363-.648-3.984-.935-.198-.092-.256-.242-.221-.4.041-.182.14-.267.317-.267.184 0 2.094.534 3.222.534z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23d)' xlink:href='%23e'/%3e%3cuse fill='url(%23f)' xlink:href='%23e'/%3e%3cuse fill='url(%23g)' xlink:href='%23h'/%3e%3cuse fill='black' filter='url(%23i)' xlink:href='%23h'/%3e%3cpath fill='%234F4F67' d='M4.968 9.333a.329.329 0 01.007.071c0 .201-.176.366-.394.366-.217 0-.393-.165-.393-.366 0-.083.03-.16.08-.221.224.053.459.104.7.15zm5.926.437c-.211 0-.383-.153-.393-.348.259-.038.516-.085.766-.136a.333.333 0 01.02.119c0 .2-.175.365-.393.365z'/%3e%3cuse fill='black' filter='url(%23j)' xlink:href='%23k'/%3e%3cuse fill='url(%23l)' xlink:href='%23k'/%3e%3c/g%3e%3c/svg%3e";
    f["default"] = a;
  },
  66
);
__d(
  "CometAnimatedReactionIcon.react",
  [
    "UFIReactionTypes",
    "UFIReactionsKeyframesAssets",
    "ViewportAwareKeyframes.react",
    "react",
    "recoverableViolation",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.animationURI,
        e = a.disableAnimationPlayback,
        f = a.reactionType,
        g = a.size,
        i = a.testid;
      i = a.xstyle;
      a = c("UFIReactionTypes").reactions[f];
      d = (d = d) != null ? d : c("UFIReactionsKeyframesAssets").reactions[f];
      if (a == null) {
        c("recoverableViolation")(
          "Could not render unsupported reaction type " +
            f +
            ":\n        reaction icon asset not found",
          "ufi2"
        );
        return null;
      }
      if (d == null) {
        c("recoverableViolation")(
          "Could not render unsupported reaction type " +
            f +
            ":\n        reaction animation uri not found",
          "ufi2"
        );
        return null;
      }
      f = c("UFIReactionsKeyframesAssets").initialProgress[f] || 0;
      return h.jsx("div", {
        style: { height: g, width: g },
        children: h.jsx(c("ViewportAwareKeyframes.react"), {
          assetName: a.name,
          canvasRef: b,
          className: c("stylex")(i),
          height: g,
          initialProgress: f,
          playing: e === !0 ? "never" : "onvisible",
          projectName: "feedback_reactions",
          resetOnPause: !0,
          source: d,
          testid: void 0,
          width: g,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b;
  },
  98
);
__d(
  "CometHahaReaction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e";
    f["default"] = a;
  },
  66
);
__d(
  "CometLoveReaction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e";
    f["default"] = a;
  },
  66
);
__d(
  "CometSorryReaction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='h' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23E78E0D'/%3e%3cstop offset='100%25' stop-color='%23CB6000'/%3e%3c/linearGradient%3e%3clinearGradient id='i' x1='50%25' x2='50%25' y1='81.899%25' y2='17.94%25'%3e%3cstop offset='0%25' stop-color='%2335CAFC'/%3e%3cstop offset='100%25' stop-color='%23007EDB'/%3e%3c/linearGradient%3e%3clinearGradient id='j' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%236AE1FF' stop-opacity='.287'/%3e%3cstop offset='100%25' stop-color='%23A8E3FF' stop-opacity='.799'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cfilter id='g' width='111.4%25' height='137.5%25' x='-5.7%25' y='-18.8%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0411226772 0 0 0 0 0.0430885485 0 0 0 0 0.0922353316 0 0 0 0.819684222 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='f' d='M3.599 8.8c0-.81.509-1.466 1.134-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.492.492 0 01-.301.225c-.14.037-.353.077-.595.077-.243 0-.453-.04-.595-.077a.49.49 0 01-.3-.225 1.741 1.741 0 01-.239-.898zm6.534 0c0-.81.508-1.466 1.133-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.49.49 0 01-.301.225 2.371 2.371 0 01-1.189 0 .49.49 0 01-.301-.225 1.74 1.74 0 01-.238-.898z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M5.333 12.765c0 .137.094.235.25.235.351 0 .836-.625 2.417-.625s2.067.625 2.417.625c.156 0 .25-.098.25-.235C10.667 12.368 9.828 11 8 11c-1.828 0-2.667 1.368-2.667 1.765'/%3e%3cuse fill='url(%23e)' xlink:href='%23f'/%3e%3cuse fill='black' filter='url(%23g)' xlink:href='%23f'/%3e%3cpath fill='%234E506A' d='M4.616 7.986c.128.125.136.372.017.551-.12.178-.32.222-.448.096-.128-.125-.135-.372-.017-.55.12-.179.32-.222.448-.097zm6.489 0c.128.125.136.372.018.551-.12.178-.32.222-.45.096-.127-.125-.134-.372-.015-.55.119-.179.319-.222.447-.097z'/%3e%3cpath fill='url(%23h)' d='M4.157 5.153c.332-.153.596-.219.801-.219.277 0 .451.119.55.306.175.329.096.401-.198.459-1.106.224-2.217.942-2.699 1.39-.301.28-.589-.03-.436-.274.154-.244.774-1.105 1.982-1.662zm6.335.087c.099-.187.273-.306.55-.306.206 0 .469.066.801.219 1.208.557 1.828 1.418 1.981 1.662.153.244-.134.554-.435.274-.483-.448-1.593-1.166-2.7-1.39-.294-.058-.371-.13-.197-.459z'/%3e%3cpath fill='url(%23i)' d='M13.5 16c-.828 0-1.5-.748-1.5-1.671 0-.922.356-1.545.643-2.147.598-1.258.716-1.432.857-1.432.141 0 .259.174.857 1.432.287.602.643 1.225.643 2.147 0 .923-.672 1.671-1.5 1.671'/%3e%3cpath fill='url(%23j)' d='M13.5 13.606c-.328 0-.594-.296-.594-.66 0-.366.141-.613.255-.852.236-.498.283-.566.339-.566.056 0 .103.068.339.566.114.24.255.486.255.851s-.266.661-.594.661'/%3e%3c/g%3e%3c/svg%3e";
    f["default"] = a;
  },
  66
);
__d(
  "CometSupportReaction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 180 180' %3e %3cdefs%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='50%25' id='c'%3e %3cstop stop-color='%23F08423' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23F08423' stop-opacity='.34' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='44.086%25' fx='50%25' fy='44.086%25' r='57.412%25' gradientTransform='matrix(-1 0 0 -.83877 1 .81)' id='d'%3e %3cstop stop-color='%23FFE874' offset='0%25'/%3e %3cstop stop-color='%23FFE368' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='10.82%25' cy='52.019%25' fx='10.82%25' fy='52.019%25' r='10.077%25' gradientTransform='matrix(.91249 .4091 -.31644 .7058 .174 .109)' id='e'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.131%25' cy='76.545%25' fx='74.131%25' fy='76.545%25' r='28.284%25' gradientTransform='rotate(-38.243 1.4 .537) scale(1 .40312)' id='f'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='31.849%25' cy='12.675%25' fx='31.849%25' fy='12.675%25' r='10.743%25' gradientTransform='matrix(.98371 -.17976 .03575 .19562 0 .16)' id='g'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='68.023%25' cy='12.637%25' fx='68.023%25' fy='12.637%25' r='12.093%25' gradientTransform='rotate(11.848 .192 .076) scale(1 .19886)' id='h'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.709%25' cy='66.964%25' fx='50.709%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.163 1.117)' id='j'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='49.239%25' cy='66.964%25' fx='49.239%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.177 1.104)' id='k'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='48.317%25' cy='42.726%25' fx='48.317%25' fy='42.726%25' r='29.766%25' gradientTransform='matrix(-.09519 -.96847 1.71516 -1.15488 -.204 1.389)' id='l'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='29.807%25' fx='50%25' fy='29.807%25' r='31.377%25' gradientTransform='matrix(.07236 -.9819 2.22613 1.12405 -.2 .454)' id='m'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='73.646%25' cy='44.274%25' fx='73.646%25' fy='44.274%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .764 .598)' id='p'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='26.749%25' cy='29.688%25' fx='26.749%25' fy='29.688%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .278 .353)' id='q'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='23.798%25' cy='53.35%25' fx='23.798%25' fy='53.35%25' r='24.89%25' gradientTransform='matrix(-.18738 .97947 -1.25372 -.27758 .951 .449)' id='r'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.94' offset='26.692%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='97.063%25' cy='54.555%25' fx='97.063%25' fy='54.555%25' r='15.021%25' gradientTransform='matrix(.8002 .50886 -.59365 1.08039 .518 -.538)' id='s'%3e %3cstop stop-color='%23C71C08' stop-opacity='.75' offset='0%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='.704' offset='53.056%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='4.056%25' cy='24.23%25' fx='4.056%25' fy='24.23%25' r='13.05%25' gradientTransform='matrix(.8728 -.3441 .41218 1.20997 -.095 -.037)' id='t'%3e %3cstop stop-color='%239C0600' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.473' offset='31.614%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.586%25' cy='77.013%25' fx='74.586%25' fy='77.013%25' r='17.563%25' gradientTransform='matrix(.77041 .55955 -.56333 .89765 .605 -.339)' id='u'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.934' offset='45.7%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.803' offset='59.211%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='51.087%25' gradientTransform='matrix(-.3809 .91219 -.97139 -.46943 1.176 .279)' id='v'%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23C71C08' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='2.243%25' cy='4.089%25' fx='2.243%25' fy='4.089%25' r='122.873%25' gradientTransform='scale(.78523 1) rotate(36.406 .025 .05)' id='x'%3e %3cstop stop-color='%23EDA83A' offset='0%25'/%3e %3cstop stop-color='%23FFDC5E' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='100%25' cy='7.011%25' fx='100%25' fy='7.011%25' r='105.039%25' gradientTransform='scale(-.90713 -1) rotate(-45.799 -.217 2.489)' id='z'%3e %3cstop stop-color='%23F4B248' offset='0%25'/%3e %3cstop stop-color='%23FFDD5F' offset='100%25'/%3e %3c/radialGradient%3e %3clinearGradient x1='50%25' y1='95.035%25' x2='50%25' y2='7.417%25' id='b'%3e %3cstop stop-color='%23F28A2D' offset='0%25'/%3e %3cstop stop-color='%23FDE86F' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='49.985%25' y1='-40.061%25' x2='49.985%25' y2='111.909%25' id='i'%3e %3cstop stop-color='%23482314' offset='0%25'/%3e %3cstop stop-color='%239A4111' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='52.727%25' y1='31.334%25' x2='28.964%25' y2='102.251%25' id='o'%3e %3cstop stop-color='%23F34462' offset='0%25'/%3e %3cstop stop-color='%23CC0820' offset='100%25'/%3e %3c/linearGradient%3e %3cpath d='M180 90c0 49.71-40.29 90-90 90S0 139.71 0 90 40.29 0 90 0s90 40.29 90 90z' id='a'/%3e %3cpath d='M108.947 95.828c-23.47-7.285-31.71 8.844-31.71 8.844s2.376-17.954-21.095-25.24c-22.57-7.004-36.253 13.757-37.307 26.812-2.264 28.103 22.134 59.996 31.26 70.86a8.062 8.062 0 008.34 2.584c13.697-3.777 51.904-16.242 66.009-40.667 6.54-11.328 7.06-36.188-15.497-43.193z' id='n'/%3e %3cpath d='M180.642 90c0 49.71-40.289 90-90 90-49.71 0-90-40.29-90-90s40.29-90 90-90c49.711 0 90 40.29 90 90z' id='w'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg fill-rule='nonzero'%3e %3cg transform='translate(.005 -.004)'%3e %3cuse fill='url(%23b)' xlink:href='%23a'/%3e %3cuse fill='url(%23c)' xlink:href='%23a'/%3e %3cuse fill='url(%23d)' xlink:href='%23a'/%3e %3cuse fill='url(%23e)' xlink:href='%23a'/%3e %3cuse fill='url(%23f)' xlink:href='%23a'/%3e %3cuse fill='url(%23g)' xlink:href='%23a'/%3e %3cuse fill='url(%23h)' xlink:href='%23a'/%3e %3c/g%3e %3cpath d='M109.013 66.234c-1.14-3.051-36.872-3.051-38.011 0-1.322 3.558 6.806 8.396 19.012 8.255 12.192.14 20.306-4.71 18.999-8.255z' fill='url(%23i)' transform='translate(.005 -.004)'/%3e %3cpath d='M68.006 46.125c.014 7.566-4.823 9.788-11.995 10.702-7.102 1.068-11.883-2.068-11.995-10.702-.099-7.256 3.81-16.116 11.995-16.284 8.17.168 11.981 9.028 11.995 16.284z' fill='url(%23j)' transform='translate(.005 -.004)'/%3e %3cpath d='M54.807 35.054c1.18 1.378.97 3.769-.479 5.358-1.448 1.575-3.571 1.744-4.753.366-1.181-1.378-.97-3.77.478-5.344 1.449-1.59 3.572-1.744 4.754-.38z' fill='%234E506A'/%3e %3cpath d='M112.022 46.125c-.014 7.566 4.823 9.788 11.995 10.702 7.102 1.068 11.883-2.068 11.995-10.702.099-7.256-3.81-16.116-11.995-16.284-8.184.168-11.995 9.028-11.995 16.284z' fill='url(%23k)' transform='translate(.005 -.004)'/%3e %3cpath d='M124.078 34.52c.957 1.547.38 3.881-1.293 5.217-1.674 1.336-3.797 1.181-4.753-.366-.957-1.546-.38-3.88 1.293-5.217 1.66-1.336 3.797-1.181 4.753.366z' fill='%234E506A'/%3e %3cpath d='M37.969 23.344c-2.349 1.983-.45 6.047 3.515 4.19 6.328-2.967 19.899-6.623 31.824-5.287 3.164.351 4.19-.113 3.487-4.022-.689-3.853-4.33-6.37-13.387-5.26-14.035 1.716-23.09 8.396-25.44 10.379z' fill='url(%23l)' transform='translate(.005 -.004)'/%3e %3cpath d='M116.592 12.952c-9.056-1.111-12.698 1.42-13.387 5.259-.703 3.91.323 4.373 3.487 4.022 11.925-1.336 25.481 2.32 31.824 5.287 3.965 1.857 5.864-2.207 3.515-4.19-2.348-1.97-11.404-8.649-25.439-10.378z' fill='url(%23m)' transform='translate(.005 -.004)'/%3e %3c/g%3e %3cg fill-rule='nonzero'%3e %3cuse fill='url(%23o)' xlink:href='%23n'/%3e %3cuse fill='url(%23p)' xlink:href='%23n'/%3e %3cuse fill='url(%23q)' xlink:href='%23n'/%3e %3cuse fill='url(%23r)' xlink:href='%23n'/%3e %3cuse fill='url(%23s)' xlink:href='%23n'/%3e %3cuse fill='url(%23t)' xlink:href='%23n'/%3e %3cuse fill='url(%23u)' xlink:href='%23n'/%3e %3cuse fill-opacity='.5' fill='url(%23v)' xlink:href='%23n'/%3e %3c/g%3e %3cg transform='translate(-.637 -.004)'%3e %3cmask id='y' fill='white'%3e %3cuse xlink:href='%23w'/%3e %3c/mask%3e %3cpath d='M15.52 86.231C9.642 80.508-.708 77.892-1.89 91.153c-.927 10.364 3.93 27.694 16.234 37.763C45.282 154.23 74.742 139.667 75.628 122c.699-13.932-15.502-12.327-20.648-12.045-.352.014-.507-.45-.197-.647a48.147 48.147 0 004.725-3.488c4.036-3.403 1.968-9.31-3.67-7.607-.858.253-14.583 4.359-23.288 1.068-9.872-3.726-11.053-7.214-17.03-13.05z' fill='url(%23x)' fill-rule='nonzero' mask='url(%23y)'/%3e %3cpath d='M161.081 88.2c3.502-6.778 9.066-4.401 12.194-3.359 4.61 1.537 7.353 4.4 7.353 11.572 0 17.001-2.812 32.765-17.002 48.6-25.987 28.982-69.935 25.143-73.675 6.862-3.094-15.16 13.066-16.678 18.34-17.381.365-.042.421-.605.098-.746a46.169 46.169 0 01-5.4-2.896c-5.444-3.403-3.989-10.051 2.405-9.07 6.806 1.012 15.23 2.924 22.486 2.207 21.009-2.11 24.975-19.87 33.201-35.789z' fill='url(%23z)' fill-rule='nonzero' mask='url(%23y)'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
    f["default"] = a;
  },
  66
);
__d(
  "CometWowReaction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='j' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23E78E0D'/%3e%3cstop offset='100%25' stop-color='%23CB6000'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cfilter id='g' width='111.1%25' height='133.3%25' x='-5.6%25' y='-16.7%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0980392157 0 0 0 0 0.101960784 0 0 0 0 0.2 0 0 0 0.819684222 0'/%3e%3c/filter%3e%3cfilter id='h' width='204%25' height='927.2%25' x='-52.1%25' y='-333.3%25' filterUnits='objectBoundingBox'%3e%3cfeOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'/%3e%3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.803921569 0 0 0 0 0.388235294 0 0 0 0 0.00392156863 0 0 0 0.14567854 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='f' d='M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5z'/%3e%3cpath id='i' d='M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 01.022.51.344.344 0 01-.496.024c-.275-.259-.656-.4-.992-.369a.8.8 0 00-.59.331.346.346 0 01-.491.068.368.368 0 01-.067-.507 1.49 1.49 0 011.085-.612zm-7.665.555a2.042 2.042 0 011.372-.562 1.491 1.491 0 011.242.619.369.369 0 01-.066.507.347.347 0 01-.492-.068.801.801 0 00-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 01-.496-.024.368.368 0 01.022-.51z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M5.643 10.888C5.485 12.733 6.369 14 8 14c1.63 0 2.515-1.267 2.357-3.112C10.2 9.042 9.242 8 8 8c-1.242 0-2.2 1.042-2.357 2.888'/%3e%3cuse fill='url(%23e)' xlink:href='%23f'/%3e%3cuse fill='black' filter='url(%23g)' xlink:href='%23f'/%3e%3cpath fill='%234E506A' d='M4.481 4.567c.186.042.29.252.232.469-.057.218-.254.36-.44.318-.186-.042-.29-.252-.232-.47.057-.216.254-.36.44-.317zm6.658.063c.206.047.322.28.258.52-.064.243-.282.4-.489.354-.206-.046-.322-.28-.258-.521.063-.242.282-.4.49-.353z'/%3e%3cuse fill='black' filter='url(%23h)' xlink:href='%23i'/%3e%3cuse fill='url(%23j)' xlink:href='%23i'/%3e%3c/g%3e%3c/svg%3e";
    f["default"] = a;
  },
  66
);
__d(
  "getReactionSVGSource",
  [
    "CometAngerReaction",
    "CometHahaReaction",
    "CometLoveReaction",
    "CometSorryReaction",
    "CometSupportReaction",
    "CometWowReaction",
    "cr:61",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d = 1;
    e = 2;
    f = 3;
    var i = 4,
      j = 7,
      k = 8,
      l = 11,
      m = 12,
      n = 16,
      o = {
        ANGER: c("CometAngerReaction"),
        DOROTHY: "/images/ufi/reactions/svg/thankful.svg",
        HAHA: c("CometHahaReaction"),
        LIKE: b("cr:61"),
        LOVE: c("CometLoveReaction"),
        SORRY: c("CometSorryReaction"),
        SUPPORT: c("CometSupportReaction"),
        TOTO: "/images/ufi/reactions/svg/pride.svg",
        WOW: c("CometWowReaction"),
      },
      p =
        ((h = {}),
        (h[k] = c("CometAngerReaction")),
        (h[l] = "/images/ufi/reactions/svg/thankful.svg"),
        (h[i] = c("CometHahaReaction")),
        (h[d] = b("cr:61")),
        (h[e] = c("CometLoveReaction")),
        (h[j] = c("CometSorryReaction")),
        (h[n] = c("CometSupportReaction")),
        (h[m] = "/images/ufi/reactions/svg/pride.svg"),
        (h[f] = c("CometWowReaction")),
        h);
    function a(a) {
      var b;
      typeof a === "string" && (b = o[a]);
      typeof a === "number" && (b = p[a.toString()]);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometReactionIcon.react",
  ["getReactionSVGSource", "react", "recoverableViolation", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.alt,
        e = a.reactionType,
        f = a.role,
        g = c("getReactionSVGSource")(e);
      if (g == null) {
        c("recoverableViolation")(
          "Could not render unsupported reaction type " + e,
          "comet_ui"
        );
        return null;
      }
      return h.jsx("img", {
        alt: d,
        className: c("stylex")(a.xstyle),
        "data-testid": void 0,
        height: a.size,
        ref: b,
        role: f,
        src: g,
        width: a.size,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b;
  },
  98
);
__d(
  "CometResharesDialog.entrypoint",
  [
    "CometResharesDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.feedbackID;
        return {
          queries: {
            resharesQueryReference: {
              parameters: b("CometResharesDialogQuery$Parameters"),
              variables: {
                UFI2CommentsProvider_commentsKey: "CometResharesDialogQuery",
                feedLocation: "SHARE_OVERLAY",
                feedbackID: a,
                feedbackSource: 1,
                privacySelectorRenderLocation: "COMET_STREAM",
                renderLocation: "reshares_dialog",
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("CometResharesDialog.react").__setRef(
        "CometResharesDialog.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometIdentityBadges.react",
  [
    "fbt",
    "CometIdentityBadges_identityBadge.graphql",
    "CometImage.react",
    "CometRelay",
    "UserAgent",
    "react",
    "stylex",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = 12,
      l = {
        commentBadgeText: {
          color: "m9osqain",
          fontSize: "j1meafb1",
          fontWeight: "lrazzd5p",
          lineHeight: "b2s5l15y",
          verticalAlign: "j1lvzwm4",
        },
        invert: { filter: "cogppd1a" },
        plusMargin: { marginEnd: "kady6ibp" },
        rightMargin: { marginEnd: "cgat1ltu" },
      };
    function a(a) {
      var c = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometIdentityBadges_identityBadge.graphql")),
          a.identityBadge
        ),
        e = c.badge_asset,
        f = c.multiple_badge_asset,
        g = c.text;
      c = c.text_gradient;
      if (e == null || g == null || f == null) return null;
      var h = a.canShowMultipleBadges,
        k = a.extraCount;
      a = a.shouldAppendText;
      return a
        ? j.jsx(m, { badgeAsset: f, extraCount: k, text: g, textGradient: c })
        : j.jsx(n, { badgeAsset: h ? f : e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.badgeAsset,
        d = a.extraCount,
        e = a.text;
      a = a.textGradient;
      a =
        a.length === 2 && !c("UserAgent").isBrowser("IE")
          ? {
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage:
                "linear-gradient(180deg, " + a[0] + " 0%, " + a[1] + " 100%)",
              display: "block",
              fontSize: "12px",
            }
          : {};
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(n, { badgeAsset: b }),
          j.jsx("span", {
            className: c("stylex")(l.commentBadgeText, l.plusMargin),
            style: a,
            children: e,
          }),
          d > 0 &&
            j.jsx("span", {
              className: c("stylex")(l.commentBadgeText),
              children: h._("+{badge_count}", [h._param("badge_count", d)]),
            }),
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      a = a.badgeAsset;
      var b = c("useCurrentDisplayMode")();
      b = b === "dark";
      return j.jsx(c("CometImage.react"), {
        height: k,
        src: a,
        testid: void 0,
        xstyle: [l.rightMargin, b && l.invert],
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentActorLink.react",
  [
    "CometRelay",
    "CometUFICommentActorLink_comment.graphql",
    "CometUFIProfileLink.react",
    "ConstUriUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.children,
        g = a.comment$key,
        j = a.kind;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "comment$key",
        "kind",
      ]);
      g = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometUFICommentActorLink_comment.graphql")),
        g
      );
      e =
        (g == null ? void 0 : (e = g.author) == null ? void 0 : e.url) != null
          ? d("ConstUriUtils").getUri(
              g == null ? void 0 : (e = g.author) == null ? void 0 : e.url
            )
          : null;
      e != null &&
        (g == null ? void 0 : g.id) != null &&
        (e = e.addQueryParam("comment_id", g.id));
      var k = g == null ? void 0 : g.author;
      if (k == null) return null;
      k = k.id;
      return k == null
        ? null
        : i.jsx(d("CometRelay").MatchContainer, {
            fallback:
              e != null
                ? i.jsx(
                    c("CometUFIProfileLink.react"),
                    babelHelpers["extends"]({}, a, {
                      href: e.toString(),
                      kind: j,
                      uid: k,
                      children: f,
                    })
                  )
                : f,
            match: g == null ? void 0 : g.group_comment_info,
            props: babelHelpers["extends"]({}, a, {
              author: g == null ? void 0 : g.author,
              children: f,
              kind: j,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModuleUfiReactionsDialogOpenQPLEvent",
  ["cr:8996"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8996");
  },
  98
);
__d(
  "CometUFIReactionsDialog.entrypoint",
  [
    "CometUFIReactionsDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.feedbackTargetID;
        a = a.reactionType;
        return {
          queries: {
            cometUFIReactionsQueryReference: {
              options: { fetchPolicy: "store-and-network" },
              parameters: b("CometUFIReactionsDialogQuery$Parameters"),
              variables: {
                feedbackTargetID: c,
                reactionType: (c = a) != null ? c : "NONE",
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometUFIReactionsDialog.react"
      ).__setRef("CometUFIReactionsDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "isNotOutlierReaction",
  [
    "isNotOutlierReaction_feedback.graphql",
    "isNotOutlierReaction_topReactionsEdge.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = 0.05;
    h !== void 0 ? h : (h = b("isNotOutlierReaction_feedback.graphql"));
    i !== void 0 ? i : (i = b("isNotOutlierReaction_topReactionsEdge.graphql"));
    function a(a) {
      var b;
      b =
        (b =
          a == null ? void 0 : (b = a.reactors) == null ? void 0 : b.count) !=
        null
          ? b
          : 0;
      var c = Math.ceil(b * j);
      return function (b) {
        var d;
        if (
          ((d = a.viewer_feedback_reaction_info) == null ? void 0 : d.key) !==
          ((d = b.node) == null ? void 0 : d.key)
        ) {
          return ((d = b.reaction_count) != null ? d : 0) >= c;
        } else return !0;
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentTopReactions.react",
  [
    "fbt",
    "CometInteractionTracingModuleUfiReactionsDialogOpenQPLEvent",
    "CometLoggedOutCTAStrings",
    "CometPressable.react",
    "CometRelay",
    "CometUFICommentTopReactions_feedback.graphql",
    "CometUFIReactionsDialog.entrypoint",
    "CometUFITooltip.react",
    "JSResourceForInteraction",
    "cr:932",
    "cr:933",
    "gkx",
    "isNotOutlierReaction",
    "react",
    "recoverableViolation",
    "unrecoverableViolation",
    "useCometEntryPointDialog",
    "useCometInteractionTracing",
    "useCometLoggedOutPopupCTA",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = c("gkx")("976093"),
      m = c("JSResourceForInteraction")(
        "CometUFICommentReactionIconTooltipContent.react"
      ).__setRef("CometUFICommentTopReactions.react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometUFICommentTopReactions_feedback.graphql")),
          a.feedback
        ),
        f = c("useCometLoggedOutPopupCTA")({
          title: c("CometLoggedOutCTAStrings").popupTitle,
        }),
        g = e.id;
      if (g == null)
        throw c("unrecoverableViolation")(
          "CometUFICommentTopReactions: Expected feedback id",
          "ufi2"
        );
      var n = c("useCometEntryPointDialog")(
          c("CometUFIReactionsDialog.entrypoint"),
          { feedbackTargetID: g },
          "button"
        ),
        o = n[0],
        p = n[1],
        q = n[2],
        r = n[3];
      n = n[4];
      var s = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleUfiReactionsDialogOpenQPLEvent"),
          "fluid",
          "INTERACTION"
        ),
        t = k(
          function () {
            s(function () {
              o({});
            });
          },
          [o, s]
        ),
        u = e.reactors,
        v = e.top_reactions;
      u = u == null ? void 0 : u.count_reduced;
      v = v == null ? void 0 : v.edges;
      if (v == null)
        return c("recoverableViolation")(
          "CometUFICommentTopReactions: Expected reaction edges",
          "ufi2"
        );
      if (v.length === 0) return null;
      if (u == null) {
        var w;
        return c("recoverableViolation")(
          "CometUFICommentTopReactions: Expected a reaction count, targetID: " +
            ((w = e == null ? void 0 : e.id) != null ? w : "UNKNOWN"),
          "ufi2"
        );
      }
      w = v.filter(c("isNotOutlierReaction")(e)).slice(0, 3);
      v = j.jsxs("div", {
        className:
          "hyh9befq r8blr3vg n8tt0mok jwdofwj8 gl3lb2sf r9r71o1u j83agx80 ns4ygwem fykbt5ly hgaippwi fni8adji bp9cbjyn" +
          (a.hideBackground !== !0 ? " jkio9rs9 hn33210v" : ""),
        children: [
          j.jsx("div", {
            className: "b3onmgus rl25f0pe j83agx80 bp9cbjyn",
            children: w.reverse().map(function (a) {
              var d;
              d =
                (d = a.node) == null
                  ? void 0
                  : (d = d.svg_image) == null
                  ? void 0
                  : d.uri;
              a = (a = a.node) == null ? void 0 : a.reaction_type;
              if (a == null)
                return c("recoverableViolation")(
                  "CometUFICommentTopReactions: Expected reaction_type on reaction",
                  "ufi2"
                );
              var e = "UFIReactionIcon:" + a,
                f;
              b("cr:933") != null
                ? (f = j.jsx(b("cr:933"), {
                    reactionType: a,
                    role: "presentation",
                    size: 16,
                  }))
                : b("cr:932") != null &&
                  d != null &&
                  (f = j.jsx(b("cr:932"), { size: 16, uri: d }));
              return f != null
                ? j.jsx(
                    "span",
                    {
                      className:
                        "l9j0dhe7 lzcic4wl rl04r1d5 j83agx80 ns4ygwem fykbt5ly hgaippwi fni8adji nl6bj373",
                      children: f,
                    },
                    e
                  )
                : null;
            }),
          }),
          j.jsx(
            "span",
            {
              className:
                "g0qnabr5 hyh9befq qt6c0cv9 n8tt0mok jb3vyjys j5wam9gi knj5qynh e9vueds3 m9osqain",
              children: u,
            },
            "count_reduced"
          ),
        ],
      });
      if (l && c("gkx")("2820"))
        return j.jsx("div", { ref: a.rootRef, children: v });
      e = l ? [void 0, void 0, f, void 0] : [q, r, t, n];
      w = e[0];
      f = e[1];
      q = e[2];
      r = e[3];
      return j.jsx("div", {
        ref: a.rootRef,
        children: j.jsx(c("CometUFITooltip.react"), {
          tooltipContentComponent: m,
          tooltipContentProps: { feedbackTargetID: g },
          children: j.jsx(c("CometPressable.react"), {
            "aria-label": h._(
              {
                "*": "{number} reactions; see who reacted to this",
                _1: "1 reaction; see who reacted to this",
              },
              [h._plural(parseInt(u, 10), "number")]
            ),
            display: "inline",
            onHoverIn: w,
            onHoverOut: f,
            onPress: q,
            onPressIn: r,
            ref: p,
            children: v,
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
  "CometUFICommentsCount.react",
  [
    "fbt",
    "CometFeedARIAProperties.react",
    "CometPressable.react",
    "CometRelay",
    "CometUFICommentsCount_feedback.graphql",
    "CometUFITooltip.react",
    "JSResourceForInteraction",
    "TetraText.react",
    "killswitch",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = c("JSResourceForInteraction")(
        "CometUFICommentsCountTooltipContent.react"
      ).__setRef("CometUFICommentsCount.react"),
      n = {
        link: {
          appearance: "dwo3fsh8",
          backgroundColor: "g5ia77u1",
          borderStyle: "ow4ym5g4",
          borderWidth: "auili1gw",
          boxSizing: "rq0escxv",
          cursor: "nhd2j8a9",
          marginBottom: "oygrvhab",
          marginEnd: "cxmmr5t8",
          marginStart: "hcukyx3x",
          marginTop: "kvgmc6g5",
          paddingBottom: "qt6c0cv9",
          paddingEnd: "rz4wbd8a",
          paddingStart: "a8nywdso",
          paddingTop: "jb3vyjys",
          position: "l9j0dhe7",
          textAlign: "i1ao9s8h",
          zIndex: "du4w35lb",
          color: "gmql0nx0",
          ":hover": { textDecoration: "gpro0wi8" },
        },
      };
    function a(a) {
      var e = a.feedback,
        f = a.onClick;
      a = a.textType;
      a = a === void 0 ? "body3" : a;
      var g = k(
        function () {
          f && f();
        },
        [f]
      );
      e = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFICommentsCount_feedback.graphql")),
        e
      );
      var o = e.comment_count,
        p = e.i18n_comment_count;
      e = e.id;
      var q = l(c("CometFeedARIAProperties.react"));
      o = o == null ? void 0 : o.total_count;
      if (o == null)
        throw c("unrecoverableViolation")(
          "CometUFICommentsCount: Expected a comments count",
          "ufi2"
        );
      else if (o === 0) return null;
      if (e == null)
        throw c("unrecoverableViolation")(
          "CometUFICommentsCount: Expected feedback target to have an id",
          "ufi2"
        );
      g = j.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"]({}, q.commentCountTargetProps, {
          onPress: g,
          overlayDisabled: !0,
          ref: q.commentCountTargetRef,
          testid: void 0,
          xstyle: n.link,
          children: j.jsx(c("TetraText.react"), {
            color: "secondary",
            type: a,
            children: h._({ "*": "{number} Comments", _1: "1 Comment" }, [
              h._plural(o, "number", p),
            ]),
          }),
        })
      );
      return !c("killswitch")("DISABLE_S204826_MITIGATION")
        ? g
        : j.jsx(c("CometUFITooltip.react"), {
            tooltipContentComponent: m,
            tooltipContentProps: { queryVariables: { feedbackTargetID: e } },
            children: g,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentsCountRenderer.react",
  [
    "CometRelay",
    "CometUFICommentsCount.react",
    "CometUFICommentsCountRenderer_data.graphql",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.data;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["data"]);
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometUFICommentsCountRenderer_data.graphql")),
        e
      );
      e = e.feedback;
      if (e == null)
        throw c("unrecoverableViolation")(
          "CometUFICommentsCountRenderer: Expected feedback to exist",
          "ufi2"
        );
      return i.jsx(
        c("CometUFICommentsCount.react"),
        babelHelpers["extends"]({ feedback: e }, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentsListPlaceholder.react",
  ["CometProgressRingIndeterminate.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className: "f9o22wc5 sjgh65i0 ad2k81qe tr9rh885 taijpn5t j83agx80",
        children: h.jsx(c("CometProgressRingIndeterminate.react"), {
          color: "disabled",
          size: 24,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UFI2ReactionUtils",
  ["UFIReactionTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a && !c("UFIReactionTypes").reactions[a] ? 0 : a || 0;
    }
    function a(a) {
      a = h(a);
      if (a === 0) return "none";
      else return c("UFIReactionTypes").reactions[a].name;
    }
    g.checkReactionKey = h;
    g.getReactionNameFromKey = a;
  },
  98
);
__d(
  "UFICommonInteractionEvents",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      UFI_OPTIMISTIC_COMMENT: "UFIOptimisticComment",
      UFI_PERSISTED_COMMENT: "UFIPersistedComment",
      UFI2_OPTIMISTIC_COMMENT: "UFI2OptimisticComment",
      UFI2_PERSISTED_COMMENT: "UFI2PersistedComment",
      COMET_UFI_OPTIMISTIC_COMMENT: "CometUFIOptimisticComment",
      COMET_UFI_PERSISTED_COMMENT: "CometUFIPersistedComment",
      UFI2_OPTIMISTIC_COMMENT_EDIT: "UFI2OptimisticCommentEdit",
      UFI2_PERSISTED_COMMENT_EDIT: "UFI2PersistedCommentEdit",
      COMET_UFI_OPTIMISTIC_COMMENT_EDIT: "CometUFIOptimisticCommentEdit",
      COMET_UFI_PERSISTED_COMMENT_EDIT: "CometUFIPersistedCommentEdit",
      UFI_TOP_LEVEL_COMMENTS_PAGINATION: "UFITopLevelCommentsPagination",
      UFI2_TOP_LEVEL_COMMENTS_PAGINATION: "UFI2TopLevelCommentsPagination",
      COMET_UFI_TOP_LEVEL_COMMENTS_PAGINATION:
        "CometUFITopLevelCommentsPagination",
      UFI2_REPLY_COMMENTS_PAGINATION: "UFI2ReplyCommentsPagination",
      COMET_UFI_REPLY_COMMENTS_PAGINATION: "CometUFIReplyCommentsPagination",
      UFI_SHARE_DIALOG_OPENS: "UFIShareDialogOpens",
      UFI2_SHARE_DIALOG_OPENS: "UFI2ShareDialogOpens",
      UFI_COMPOSER_INPUT_FOCUS: "UFIComposerInputFocus",
      UFI_STORY_REACTION: "UFIStoryReaction",
      UFI_COMMENT_REACTION: "UFICommentReaction",
      UFI2_STORY_REACTION: "UFI2StoryReaction",
      UFI2_COMMENT_REACTION: "UFI2CommentReaction",
      COMET_UFI_STORY_REACTION: "CometUFIStoryReaction",
      COMET_UFI_COMMENT_REACTION: "CometUFICommentReaction",
      UFI_COMPOSER_KEYPRESS_LATENCY: "UFIComposerKeypressLatency",
      UFI2_COMPOSER_KEYPRESS_LATENCY: "UFI2ComposerKeypressLatency",
      COMET_UFI_COMPOSER_KEYPRESS_LATENCY: "CometUFIComposerKeypressLatency",
    });
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "UfiModuleCometUfiCommentReactionQPLEvent",
  ["cr:1778"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1778");
  },
  98
);
__d(
  "UfiModuleCometUfiComposerKeypressLatencyQPLEvent",
  ["cr:8702"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8702");
  },
  98
);
__d(
  "UfiModuleCometUfiOptimisticCommentEditQPLEvent",
  ["cr:6922"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:6922");
  },
  98
);
__d(
  "UfiModuleCometUfiOptimisticCommentQPLEvent",
  ["cr:8051"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8051");
  },
  98
);
__d(
  "UfiModuleCometUfiPersistedCommentEditQPLEvent",
  ["cr:7665"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7665");
  },
  98
);
__d(
  "UfiModuleCometUfiPersistedCommentQPLEvent",
  ["cr:7962"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7962");
  },
  98
);
__d(
  "UfiModuleCometUfiReplyCommentsPaginationQPLEvent",
  ["cr:2940"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2940");
  },
  98
);
__d(
  "UfiModuleCometUfiStoryReactionQPLEvent",
  ["cr:1157"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1157");
  },
  98
);
__d(
  "UfiModuleCometUfiTopLevelCommentsPaginationQPLEvent",
  ["cr:1330"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1330");
  },
  98
);
__d(
  "UfiModuleUfi2CommentReactionQPLEvent",
  ["cr:7806"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7806");
  },
  98
);
__d(
  "UfiModuleUfi2ComposerKeypressLatencyQPLEvent",
  ["cr:6010"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:6010");
  },
  98
);
__d(
  "UfiModuleUfi2OptimisticCommentEditQPLEvent",
  ["cr:8388"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8388");
  },
  98
);
__d(
  "UfiModuleUfi2OptimisticCommentQPLEvent",
  ["cr:6972"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:6972");
  },
  98
);
__d(
  "UfiModuleUfi2PersistedCommentEditQPLEvent",
  ["cr:2171"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2171");
  },
  98
);
__d(
  "UfiModuleUfi2PersistedCommentQPLEvent",
  ["cr:3979"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:3979");
  },
  98
);
__d(
  "UfiModuleUfi2ReplyCommentsPaginationQPLEvent",
  ["cr:2641"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2641");
  },
  98
);
__d(
  "UfiModuleUfi2ShareDialogOpensQPLEvent",
  ["cr:2332"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2332");
  },
  98
);
__d(
  "UfiModuleUfi2StoryReactionQPLEvent",
  ["cr:5659"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:5659");
  },
  98
);
__d(
  "UfiModuleUfi2TopLevelCommentsPaginationQPLEvent",
  ["cr:4291"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:4291");
  },
  98
);
__d(
  "UfiModuleUfiCommentReactionQPLEvent",
  ["cr:7104"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7104");
  },
  98
);
__d(
  "UfiModuleUfiComposerInputFocusQPLEvent",
  ["cr:7081"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7081");
  },
  98
);
__d(
  "UfiModuleUfiComposerKeypressLatencyQPLEvent",
  ["cr:1703"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1703");
  },
  98
);
__d(
  "UfiModuleUfiOptimisticCommentQPLEvent",
  ["cr:2862"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2862");
  },
  98
);
__d(
  "UfiModuleUfiPersistedCommentQPLEvent",
  ["cr:6670"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:6670");
  },
  98
);
__d(
  "UfiModuleUfiShareDialogOpensQPLEvent",
  ["cr:8013"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8013");
  },
  98
);
__d(
  "UfiModuleUfiStoryReactionQPLEvent",
  ["cr:4452"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:4452");
  },
  98
);
__d(
  "UfiModuleUfiTopLevelCommentsPaginationQPLEvent",
  ["cr:5655"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:5655");
  },
  98
);
__d(
  "UFICommonInteractionLogger",
  [
    "Bootloader",
    "UFICommonInteractionEvents",
    "UfiModuleCometUfiCommentReactionQPLEvent",
    "UfiModuleCometUfiComposerKeypressLatencyQPLEvent",
    "UfiModuleCometUfiOptimisticCommentEditQPLEvent",
    "UfiModuleCometUfiOptimisticCommentQPLEvent",
    "UfiModuleCometUfiPersistedCommentEditQPLEvent",
    "UfiModuleCometUfiPersistedCommentQPLEvent",
    "UfiModuleCometUfiReplyCommentsPaginationQPLEvent",
    "UfiModuleCometUfiStoryReactionQPLEvent",
    "UfiModuleCometUfiTopLevelCommentsPaginationQPLEvent",
    "UfiModuleUfi2CommentReactionQPLEvent",
    "UfiModuleUfi2ComposerKeypressLatencyQPLEvent",
    "UfiModuleUfi2OptimisticCommentEditQPLEvent",
    "UfiModuleUfi2OptimisticCommentQPLEvent",
    "UfiModuleUfi2PersistedCommentEditQPLEvent",
    "UfiModuleUfi2PersistedCommentQPLEvent",
    "UfiModuleUfi2ReplyCommentsPaginationQPLEvent",
    "UfiModuleUfi2ShareDialogOpensQPLEvent",
    "UfiModuleUfi2StoryReactionQPLEvent",
    "UfiModuleUfi2TopLevelCommentsPaginationQPLEvent",
    "UfiModuleUfiCommentReactionQPLEvent",
    "UfiModuleUfiComposerInputFocusQPLEvent",
    "UfiModuleUfiComposerKeypressLatencyQPLEvent",
    "UfiModuleUfiOptimisticCommentQPLEvent",
    "UfiModuleUfiPersistedCommentQPLEvent",
    "UfiModuleUfiShareDialogOpensQPLEvent",
    "UfiModuleUfiStoryReactionQPLEvent",
    "UfiModuleUfiTopLevelCommentsPaginationQPLEvent",
    "performanceAbsoluteNow",
    "requestAnimationFrameAcrossTransitions",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = 0;
    function j() {
      return c("uuid")();
    }
    function a(a, b) {
      var d = c("performanceAbsoluteNow")();
      b = b || j();
      var e = l(a),
        f;
      if (e) {
        var g = i++;
        f = { event: e, markerKey: g };
        c("Bootloader").loadModules(
          ["QuickPerformanceLogger"],
          function (a) {
            a.markerStart(e, g, d);
          },
          "UFICommonInteractionLogger"
        );
      }
      h.set(b, { startTimestamp: d, qplInfo: f });
      return b;
    }
    function b(a) {
      c("requestAnimationFrameAcrossTransitions")(function () {
        k(a);
      });
    }
    function k(a, b) {
      var d = h.get(a);
      if (d) {
        var e = d.qplInfo;
        h["delete"](a);
        if (e) {
          var f = c("performanceAbsoluteNow")();
          c("Bootloader").loadModules(
            ["QuickPerformanceLogger", "QuickLogActionType"],
            function (a, c) {
              a.markerEnd(e.event, b ? c.FAIL : c.SUCCESS, e.markerKey, f);
            },
            "UFICommonInteractionLogger"
          );
        }
      }
    }
    function l(a) {
      switch (a) {
        case c("UFICommonInteractionEvents").UFI_OPTIMISTIC_COMMENT:
          return c("UfiModuleUfiOptimisticCommentQPLEvent");
        case c("UFICommonInteractionEvents").UFI_PERSISTED_COMMENT:
          return c("UfiModuleUfiPersistedCommentQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_OPTIMISTIC_COMMENT:
          return c("UfiModuleUfi2OptimisticCommentQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_PERSISTED_COMMENT:
          return c("UfiModuleUfi2PersistedCommentQPLEvent");
        case c("UFICommonInteractionEvents").COMET_UFI_OPTIMISTIC_COMMENT:
          return c("UfiModuleCometUfiOptimisticCommentQPLEvent");
        case c("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT:
          return c("UfiModuleCometUfiPersistedCommentQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_OPTIMISTIC_COMMENT_EDIT:
          return c("UfiModuleUfi2OptimisticCommentEditQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_PERSISTED_COMMENT_EDIT:
          return c("UfiModuleUfi2PersistedCommentEditQPLEvent");
        case c("UFICommonInteractionEvents").COMET_UFI_OPTIMISTIC_COMMENT_EDIT:
          return c("UfiModuleCometUfiOptimisticCommentEditQPLEvent");
        case c("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT_EDIT:
          return c("UfiModuleCometUfiPersistedCommentEditQPLEvent");
        case c("UFICommonInteractionEvents").UFI_TOP_LEVEL_COMMENTS_PAGINATION:
          return c("UfiModuleUfiTopLevelCommentsPaginationQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_TOP_LEVEL_COMMENTS_PAGINATION:
          return c("UfiModuleUfi2TopLevelCommentsPaginationQPLEvent");
        case c("UFICommonInteractionEvents")
          .COMET_UFI_TOP_LEVEL_COMMENTS_PAGINATION:
          return c("UfiModuleCometUfiTopLevelCommentsPaginationQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_REPLY_COMMENTS_PAGINATION:
          return c("UfiModuleUfi2ReplyCommentsPaginationQPLEvent");
        case c("UFICommonInteractionEvents")
          .COMET_UFI_REPLY_COMMENTS_PAGINATION:
          return c("UfiModuleCometUfiReplyCommentsPaginationQPLEvent");
        case c("UFICommonInteractionEvents").UFI_SHARE_DIALOG_OPENS:
          return c("UfiModuleUfiShareDialogOpensQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_SHARE_DIALOG_OPENS:
          return c("UfiModuleUfi2ShareDialogOpensQPLEvent");
        case c("UFICommonInteractionEvents").UFI_COMPOSER_INPUT_FOCUS:
          return c("UfiModuleUfiComposerInputFocusQPLEvent");
        case c("UFICommonInteractionEvents").UFI_STORY_REACTION:
          return c("UfiModuleUfiStoryReactionQPLEvent");
        case c("UFICommonInteractionEvents").UFI_COMMENT_REACTION:
          return c("UfiModuleUfiCommentReactionQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_STORY_REACTION:
          return c("UfiModuleUfi2StoryReactionQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_COMMENT_REACTION:
          return c("UfiModuleUfi2CommentReactionQPLEvent");
        case c("UFICommonInteractionEvents").COMET_UFI_STORY_REACTION:
          return c("UfiModuleCometUfiStoryReactionQPLEvent");
        case c("UFICommonInteractionEvents").COMET_UFI_COMMENT_REACTION:
          return c("UfiModuleCometUfiCommentReactionQPLEvent");
        case c("UFICommonInteractionEvents").UFI_COMPOSER_KEYPRESS_LATENCY:
          return c("UfiModuleUfiComposerKeypressLatencyQPLEvent");
        case c("UFICommonInteractionEvents").UFI2_COMPOSER_KEYPRESS_LATENCY:
          return c("UfiModuleUfi2ComposerKeypressLatencyQPLEvent");
        case c("UFICommonInteractionEvents")
          .COMET_UFI_COMPOSER_KEYPRESS_LATENCY:
          return c("UfiModuleCometUfiComposerKeypressLatencyQPLEvent");
        default:
          return null;
      }
    }
    g.makeTrackingID = j;
    g.startInteraction = a;
    g.endInteractionAtEndOfFrame = b;
    g.endInteraction = k;
  },
  98
);
__d(
  "getContextualParent",
  ["ge"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      b === void 0 && (b = !1);
      var d = !1;
      a = a;
      do {
        if (a instanceof Element) {
          var e = a.getAttribute("data-ownerid");
          if (e) {
            a = c("ge")(e);
            d = !0;
            continue;
          }
        }
        a = a.parentNode;
      } while (b && a && !d);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "collectDataAttributes",
  ["DataAttributeUtils", "getContextualParent"],
  function (a, b, c, d, e, f) {
    var g = "normal";
    function a(a, c, d) {
      var e = {},
        f = [],
        h = c.length,
        i;
      for (i = 0; i < h; ++i) (e[c[i]] = {}), f.push("data-" + c[i]);
      if (d) {
        e[g] = {};
        for (i = 0; i < (d || []).length; ++i) f.push(d[i]);
      }
      d = { tn: "", "tn-debug": "," };
      a = a;
      while (a) {
        if (a.getAttribute)
          for (i = 0; i < f.length; ++i) {
            var j = f[i],
              k = b("DataAttributeUtils").getDataAttribute(a, j);
            if (k) {
              if (i >= h) {
                e[g][j] === void 0 && (e[g][j] = k);
                continue;
              }
              j = JSON.parse(k);
              for (var l in j)
                d[l] !== void 0
                  ? (e[c[i]][l] === void 0 && (e[c[i]][l] = []),
                    e[c[i]][l].push(j[l]))
                  : e[c[i]][l] === void 0 && (e[c[i]][l] = j[l]);
            }
          }
        a = b("getContextualParent")(a);
      }
      for (var m in e)
        for (var n in d) e[m][n] !== void 0 && (e[m][n] = e[m][n].join(d[n]));
      return e;
    }
    e.exports = a;
  },
  null
);
__d(
  "CometUFIReactionLink.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometRelay",
    "CometTintedIcon.react",
    "CometTrackingNodeProvider.react",
    "CometUFIReactionLink_feedback.graphql",
    "CometUFIReactionsMenu.react",
    "FocusWithinHandler.react",
    "ODS",
    "UFI2ReactionUtils",
    "UFICommonInteractionEvents",
    "UFICommonInteractionLogger",
    "UFIReactionTypes",
    "clearTimeout",
    "collectDataAttributes",
    "cometGetKeyCommandConfig",
    "fbicon",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "setTimeout",
    "stylex",
    "useKeyCommands",
    "useTrackingCodeFnForComet",
    "useTriggeredStoryCTAHandler",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useEffect,
      n = e.useRef,
      o = e.useState,
      p = c("requireDeferred")("CometUFIFeedbackReactMutation").__setRef(
        "CometUFIReactionLink.react"
      ),
      q = {
        accessible_elem: {
          clip: "q45zohi1",
          clipPath: "g0aa4cga",
          position: "pmk7jnqg",
        },
        circularButton: {
          borderTopColor: "est2fu8x",
          borderEndColor: "i2z0utgf",
          borderBottomColor: "nalm63nx",
          borderStartColor: "rbyq7rg5",
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          borderTopStyle: "goun2846",
          borderEndStyle: "ccm00jje",
          borderBottomStyle: "s44p3ltw",
          borderStartStyle: "mk2mc5f4",
          borderTopWidth: "frvqaej8",
          borderEndWidth: "ed0hlay0",
          borderBottomWidth: "afxsp9o4",
          borderStartWidth: "jcgfde61",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        hasNotReactedFilter: { filter: "bdca9zbp" },
        hasReacted: { fontWeight: "n3ffmt46" },
        iconWrapper: { display: "q9uorilb", verticalAlign: "sf5mxxl7" },
        inlineReactButton: { marginStart: "kkf49tns" },
        menu: { marginBottom: "qzhwtbm6", marginStart: "je412x5n" },
        overlayReactButton: {
          end: "n7fi1qx3",
          paddingTop: "b4ylihy8",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "b40mr0ww",
          paddingStart: "a8nywdso",
          position: "pmk7jnqg",
          top: "maw0qe7g",
        },
        reactButtonSpacing: {
          paddingEnd: "gvs12r03",
          paddingStart: "up7ckamt",
        },
        reactWithA11yButton: { alignItems: "bp9cbjyn", display: "j83agx80" },
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexGrow: "buofh1pr",
          flexShrink: "pfnyh3mw",
          justifyContent: "taijpn5t",
          touchAction: "gokke00a",
        },
        wrapper: { position: "l9j0dhe7" },
        wrapperInlineBlock: { display: "q9uorilb" },
      };
    function r(a) {
      return a === c("UFICommonInteractionEvents").COMET_UFI_STORY_REACTION;
    }
    function s(a) {
      a = a.onClickKeyboard;
      c("useKeyCommands")(
        [
          d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig(
            "newsfeed",
            "likeStory",
            a
          ),
        ],
        !0
      );
      return null;
    }
    var t = 500;
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("CometUFIReactionLink_feedback.graphql")),
          a.feedback
        ),
        g = d("CometRelay").useRelayEnvironment(),
        u = n(null),
        v = n(null),
        w = n(null),
        x = n(null),
        y = n(null),
        z = n(null),
        A = n(null),
        B = n(null),
        C = o({
          hasPreviouslyShownMenu: !1,
          isLongPressing: !1,
          isTouchDown: !1,
          showMenu: !1,
        }),
        D = C[0],
        E = C[1];
      C = c("useTriggeredStoryCTAHandler")();
      var F = C[0],
        G = l(function (a, b) {
          var d = z.current;
          return d ? c("collectDataAttributes")(d, a, b) : null;
        }, []),
        H = c("useTrackingCodeFnForComet")(),
        I = function (b) {
          var e,
            h = f.id;
          e = (e = f.viewer_actor) == null ? void 0 : e.id;
          var i = a.feedbackSource;
          u.current && u.current.dispose();
          v.current && v.current.remove();
          if (h == null || e == null) {
            c("recoverableViolation")(
              "Error feedbackID or actorID is undefined so a user cannot react",
              "ufi2"
            );
            return;
          }
          var j = babelHelpers["extends"](
            { feedback_id: h, feedback_reaction: b, feedback_source: i },
            H(G)
          );
          v.current = p.onReadyImmediately(function (b) {
            u.current = b.commit({
              environment: g,
              input: j,
              onError: a.onReactionError || function () {},
              useDefaultActor: !1,
            });
          });
          U.current &&
            (z.current != null && z.current.focus(), (U.current = !1));
          E(function (a) {
            return babelHelpers["extends"]({}, a, { showMenu: !1 });
          });
          b === c("UFIReactionTypes").LIKE && F("LIKE");
          b === 2 && F("LOVE");
          b !== c("UFIReactionTypes").NONE && F("REACT");
          d("ODS").bumpFraction(
            2507,
            "ufi_reaction_mutation",
            "deferred_mutation_code_not_yet_loaded",
            p.getModuleIfRequireable() ? 0 : 1,
            1
          );
        };
      function J(b) {
        if (a.interactionEvent == null) return;
        var c = d("UFICommonInteractionLogger").startInteraction(
          a.interactionEvent
        );
        x.current = { newReactionKey: b, trackingID: c };
      }
      function K(a) {
        if (a === V) {
          E(function (a) {
            return babelHelpers["extends"]({}, a, { showMenu: !1 });
          });
          return;
        }
        J(a);
        I(a);
      }
      var L = function () {
          var a;
          a = (a = f.viewer_feedback_reaction_info) == null ? void 0 : a.key;
          a = d("UFI2ReactionUtils").checkReactionKey(a);
          a = a ? c("UFIReactionTypes").NONE : c("UFIReactionTypes").LIKE;
          J(a);
          I(a);
        },
        M = l(
          function (a) {
            D.isTouchDown && a.preventDefault();
          },
          [D]
        );
      C = l(function () {
        c("clearTimeout")(w.current);
      }, []);
      var N = function () {
          c("clearTimeout")(w.current),
            (y.current = c("setTimeout")(function () {
              E(function (a) {
                return babelHelpers["extends"]({}, a, {
                  hasPreviouslyShownMenu: !0,
                  isLongPressing: !0,
                  showMenu: !0,
                });
              });
            }, t)),
            E(function (a) {
              return babelHelpers["extends"]({}, a, { isLongPressing: !1 });
            });
        },
        O = l(function () {
          c("clearTimeout")(y.current);
        }, []),
        P = l(function () {
          E(function (a) {
            return babelHelpers["extends"]({}, a, {
              hasPreviouslyShownMenu: !0,
              showMenu: !0,
            });
          });
        }, []),
        Q = l(function () {
          U.current &&
            (A.current != null && A.current.focus(), (U.current = !1)),
            E(function (a) {
              return babelHelpers["extends"]({}, a, { showMenu: !1 });
            });
        }, []),
        R = l(
          function () {
            (U.current = !0), P();
          },
          [P]
        ),
        S = l(
          function () {
            c("clearTimeout")(w.current),
              D.showMenu || (w.current = c("setTimeout")(P, a.showDelay));
          },
          [D.showMenu, P, a.showDelay]
        ),
        T = l(
          function () {
            if (U.current) return;
            c("clearTimeout")(w.current);
            D.showMenu && (w.current = c("setTimeout")(Q, a.hideDelay));
          },
          [Q, a.hideDelay, D.showMenu]
        );
      m(function () {
        return function () {
          c("clearTimeout")(w.current);
        };
      }, []);
      m(function () {
        var a = x.current;
        if (a) {
          var b;
          b =
            f == null
              ? void 0
              : (b = f.viewer_feedback_reaction_info) == null
              ? void 0
              : b.key;
          b = d("UFI2ReactionUtils").checkReactionKey(b);
          b === a.newReactionKey &&
            (d("UFICommonInteractionLogger").endInteraction(a.trackingID),
            (x.current = null));
        }
      });
      var U = n(!1);
      e = (e = f.viewer_feedback_reaction_info) == null ? void 0 : e.key;
      var V = d("UFI2ReactionUtils").checkReactionKey(e),
        W,
        X;
      a.textColorOverride != null && (X = a.textColorOverride);
      if (!V)
        W =
          c("UFIReactionTypes").reactions[c("UFIReactionTypes").LIKE]
            .display_name;
      else {
        e = c("UFIReactionTypes").reactions[V];
        var Y = e.color;
        e = e.display_name;
        W = e;
        X = Y;
      }
      e = h._("Change {selected reaction} reaction", [
        h._param("selected reaction", W),
      ]);
      var Z = V
          ? h._("Remove {selected reaction}", [
              h._param("selected reaction", W),
            ])
          : W,
        $ = V ? e : h._("React"),
        aa =
          a.displayInlineBlock === !0
            ? d("fbicon")._(i("481880"), 12)
            : d("fbicon")._(i("481882"), 16);
      return k.jsxs(c("CometTrackingNodeProvider.react"), {
        trackingNode: V === c("UFIReactionTypes").NONE ? 5 : 6,
        children: [
          r(a.interactionEvent) && k.jsx(s, { onClickKeyboard: R }),
          k.jsx("div", {
            className: c("stylex")(
              q.wrapper,
              a.displayInlineBlock === !0 ? q.wrapperInlineBlock : void 0
            ),
            ref: B,
            children: k.jsx(c("FocusWithinHandler.react"), {
              children: function (b, d) {
                b = b && d;
                d = b || U.current;
                return k.jsxs("span", {
                  className:
                    a.displayInlineBlock === !0 && d
                      ? c("stylex")(q.reactWithA11yButton)
                      : null,
                  children: [
                    k.jsx(c("CometPressable.react"), {
                      focusable: !0,
                      label: Z,
                      onContextMenu: M,
                      onHoverIn: S,
                      onHoverOut: T,
                      onPress: L,
                      onPressIn: N,
                      onPressOut: O,
                      overlayDisabled: !0,
                      ref: z,
                      testid: void 0,
                      xstyle: [
                        q.root,
                        !!V && q.hasReacted,
                        d &&
                          a.displayInlineBlock !== !0 &&
                          q.reactButtonSpacing,
                        a.buttonVariant === "CIRCULAR" && q.circularButton,
                      ],
                      children: k.jsxs("div", {
                        className: a.className,
                        "data-testid": void 0,
                        style: { color: X },
                        children: [
                          k.jsx("span", {
                            className: c("stylex")(
                              q.iconWrapper,
                              !V &&
                                ((b = a.filterXStyle) != null
                                  ? b
                                  : q.hasNotReactedFilter)
                            ),
                            children: a.children,
                          }),
                          a.hideLabel !== !0 && W,
                        ],
                      }),
                    }),
                    k.jsx(c("CometPressable.react"), {
                      focusable: !0,
                      label: $,
                      onPress: R,
                      ref: A,
                      xstyle: [
                        a.displayInlineBlock === !0
                          ? q.inlineReactButton
                          : q.overlayReactButton,
                        !d && q.accessible_elem,
                      ],
                      children: k.jsx(c("CometTintedIcon.react"), {
                        color: "fds-gray-70",
                        icon: aa,
                      }),
                    }),
                  ],
                });
              },
            }),
          }),
          k.jsx(c("CometUFIReactionsMenu.react"), {
            contextRef: B,
            feedback: f,
            initialReaction: V,
            onClose: Q,
            onHoverIn: C,
            onHoverOut: T,
            onReactionSelect: K,
            scrubbingMode: D.isLongPressing,
            shouldFocusOnShow: function () {
              return U.current;
            },
            visible: D.showMenu,
            xstyle: q.menu,
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
  "CometUFISeenByCount.react",
  ["CometRelay", "CometUFISeenByCount_feedback.graphql", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.feedback;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometUFISeenByCount_feedback.graphql")),
        a
      );
      if (a.can_show_seen_by !== !0) return null;
      return a.if_viewer_can_see_seen_by_member_list == null
        ? i.jsx(d("CometRelay").MatchContainer, {
            match: a.if_viewer_cannot_see_seen_by_member_list,
            props: {},
          })
        : i.jsx(d("CometRelay").MatchContainer, {
            match: a.if_viewer_can_see_seen_by_member_list,
            props: {},
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFISeenByCountText.react",
  [
    "fbt",
    "CometRelay",
    "CometUFISeenByCountText_feedback.graphql",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e;
      a = a.feedback;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFISeenByCountText_feedback.graphql")),
        a
      );
      if (a == null) return null;
      return a.seen_by.count < 1
        ? null
        : j.jsx(c("TetraText.react"), {
            color: "secondary",
            type: "body3",
            children:
              a.seen_by.seen_by_everyone === !0
                ? h._("Seen by everyone")
                : h._({ "*": "Seen by {seenByCount}" }, [
                    h._param(
                      "seenByCount",
                      (e = a.seen_by) == null ? void 0 : e.i18n_seen_by_count,
                      [0, a.seen_by.count]
                    ),
                  ]),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFISharesCount.react",
  [
    "fbt",
    "CometPressable.react",
    "CometRelay",
    "CometResharesDialog.entrypoint",
    "CometUFISharesCount_feedback.graphql",
    "CometUFITooltip.react",
    "JSResourceForInteraction",
    "TetraText.react",
    "react",
    "recoverableViolation",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = {
        link: {
          appearance: "dwo3fsh8",
          backgroundColor: "g5ia77u1",
          borderStyle: "ow4ym5g4",
          borderWidth: "auili1gw",
          boxSizing: "rq0escxv",
          cursor: "nhd2j8a9",
          marginBottom: "oygrvhab",
          marginEnd: "cxmmr5t8",
          marginStart: "hcukyx3x",
          marginTop: "kvgmc6g5",
          paddingBottom: "qt6c0cv9",
          paddingEnd: "rz4wbd8a",
          paddingStart: "a8nywdso",
          paddingTop: "jb3vyjys",
          position: "l9j0dhe7",
          textAlign: "i1ao9s8h",
          zIndex: "du4w35lb",
          color: "gmql0nx0",
          ":hover": { textDecoration: "gpro0wi8" },
        },
      },
      m = c("JSResourceForInteraction")(
        "CometUFISharesCountTooltipContent.react"
      ).__setRef("CometUFISharesCount.react");
    function a(a) {
      var e = a.feedback,
        f = a.textColor;
      f = f === void 0 ? "secondary" : f;
      a = a.textType;
      a = a === void 0 ? "body3" : a;
      e = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFISharesCount_feedback.graphql")),
        e
      );
      var g = e.i18n_share_count,
        n = e.id;
      e = e.share_count;
      e = e == null ? void 0 : e.count;
      var o = n;
      n = c("useCometEntryPointDialog")(
        c("CometResharesDialog.entrypoint"),
        o != null ? { feedbackID: o } : null,
        "button"
      );
      var p = n[0],
        q = n[1],
        r = n[2],
        s = n[3];
      n = n[4];
      var t = k(
        function () {
          if (o == null) {
            c("recoverableViolation")(
              "Unable to present resharer feed for null ID",
              "comet_feed"
            );
            return;
          }
          p({});
        },
        [p, o]
      );
      if (o == null) {
        c("recoverableViolation")(
          "CometUFISharesCount: Expected a feedbackID",
          "ufi2"
        );
        return null;
      }
      if (e == null) {
        c("recoverableViolation")(
          "CometUFISharesCount: Expected a shares count",
          "ufi2"
        );
        return null;
      }
      if (e === 0) return null;
      r = j.jsx(c("CometPressable.react"), {
        onHoverIn: r,
        onHoverOut: s,
        onPress: t,
        onPressIn: n,
        overlayDisabled: !0,
        ref: q,
        testid: void 0,
        xstyle: l.link,
        children: j.jsx(c("TetraText.react"), {
          color: f,
          type: a,
          children: h._({ "*": "{number} Shares", _1: "1 Share" }, [
            h._plural(e, "number", g),
          ]),
        }),
      });
      return j.jsx(c("CometUFITooltip.react"), {
        delayContentMs: 500,
        tooltipContentComponent: m,
        tooltipContentProps: { queryVariables: { feedbackTargetID: o } },
        children: r,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "NumberFormat",
  ["NumberFormatConfig", "intlNumUtils"],
  function (a, b, c, d, e, f, g) {
    var h = /(\d{3})(?=\d)/g;
    function i(a) {
      return ("" + a).split("").reverse().join("");
    }
    function a(a, b) {
      if (
        Math.abs(a).toString().length <
        c("NumberFormatConfig").minDigitsForThousandsSeparator
      )
        return a.toString();
      a = i("" + a);
      return i(a.replace(h, "$1" + b));
    }
    function b(a) {
      return d("intlNumUtils").formatNumberWithThousandDelimiters(a);
    }
    g.formatIntegerWithDelimiter = a;
    g.formatInteger = b;
  },
  98
);
__d(
  "CometUFIReactionsCount.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometInteractionTracingModuleUfiReactionsDialogOpenQPLEvent",
    "CometPressable.react",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "CometUFIReactionsCount_feedback.graphql",
    "CometUFIReactionsDialog.entrypoint",
    "CometUFITooltip.react",
    "JSResourceForInteraction",
    "NumberFormat",
    "gkx",
    "intlList",
    "orEmptyArray",
    "react",
    "stylex",
    "unrecoverableViolation",
    "useCometEntryPointDialog",
    "useCometInteractionTracing",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = c("JSResourceForInteraction")(
        "CometUFIReactionsCountTooltipContent.react"
      ).__setRef("CometUFIReactionsCount.react"),
      m = {
        countOnlySentence: {
          float: "bzsjyuwj",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          textOverflow: "ltmttdrg",
          width: "gjzvkazv",
        },
        hideCounts: { display: "j83agx80" },
        privateFeedbackOverflow: {
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        root: {
          color: "gmql0nx0",
          maxHeight: "ce9h75a5",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        sentence: { ":hover": { textDecoration: "gpro0wi8" } },
        sentenceWithSocialContext: {
          backgroundColor: "cwj9ozl2",
          float: "bzsjyuwj",
          marginStart: "ja2t1vim",
        },
        sentenceWrapper: { paddingStart: "pcp91wgn" },
        showCounts: { display: "a8c37x1j" },
        truncatedSentence: {
          marginStart: "hcukyx3x",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          textOverflow: "ltmttdrg",
          whiteSpace: "g0qnabr5",
        },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("CometUFIReactionsCount_feedback.graphql")),
          a.feedback
        ),
        f = e.i18n_reaction_count,
        g = e.id,
        h = e.important_reactors,
        o = e.reaction_count,
        p = e.reaction_display_config,
        q = e.viewer_actor,
        r = e.viewer_feedback_reaction_info;
      e = (e = e.viewer_actor) == null ? void 0 : e.id;
      o = o == null ? void 0 : o.count;
      if (g == null)
        throw c("unrecoverableViolation")(
          "CometUFIReactionsCount: expected feedback.id",
          "ufi2"
        );
      if (o == null)
        throw c("unrecoverableViolation")(
          "CometUFIReactionsCount: Expected a reaction count",
          "ufi2"
        );
      if (f == null)
        throw c("unrecoverableViolation")(
          "CometUFIReactionsCount: Expected an i18n_reaction_count",
          "ufi2"
        );
      var s = c("useCometEntryPointDialog")(
          c("CometUFIReactionsDialog.entrypoint"),
          { feedbackTargetID: g },
          "button"
        ),
        t = s[0],
        u = s[1],
        v = s[2],
        w = s[3];
      s = s[4];
      var x = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleUfiReactionsDialogOpenQPLEvent"),
          "fluid",
          "INTERACTION"
        ),
        y = k(
          function () {
            x(function () {
              t({});
            });
          },
          [t, x]
        );
      if (o === 0) return null;
      if (e == null) {
        if (c("gkx")("976093"))
          return j.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 119,
            children: j.jsx(
              "span",
              {
                "aria-hidden": !0,
                className: c("stylex")(m.countOnlySentence),
                children: j.jsx("span", {
                  children: j.jsx("span", {
                    className: c("stylex")(m.sentenceWrapper),
                    children: f,
                  }),
                }),
              },
              "count-sentence"
            ),
          });
        throw c("unrecoverableViolation")(
          "CometUFIReactionsCount: expected feedback.viewer_actor.id",
          "ufi2"
        );
      }
      e = q == null ? void 0 : q.name;
      q = c("orEmptyArray")(h == null ? void 0 : h.nodes);
      h = r != null;
      r = h ? q.length + 1 : q.length;
      r = r < o;
      var z =
        (p == null ? void 0 : p.reaction_display_strategy) === "HIDE_COUNTS";
      v = j.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 137,
        children: j.jsx(c("CometTrackingNodeProvider.react"), {
          trackingNode: z ? void 0 : 119,
          children: j.jsxs(c("CometPressable.react"), {
            display: "inline",
            onHoverIn: v,
            onHoverOut: w,
            onPress: y,
            onPressIn: s,
            overlayDisabled: !0,
            ref: u,
            suppressHydrationWarning: !0,
            xstyle: [m.root, z ? m.hideCounts : m.showCounts],
            children: [
              !z &&
                j.jsx(
                  "span",
                  {
                    "aria-hidden": !0,
                    className: c("stylex")(m.countOnlySentence),
                    children: j.jsx("span", {
                      children: j.jsx("span", {
                        className: c("stylex")([m.sentence, m.sentenceWrapper]),
                        children: f,
                      }),
                    }),
                  },
                  "count-sentence"
                ),
              " ",
              j.jsx(
                "span",
                {
                  className: c("stylex")([
                    m.sentence,
                    m.sentenceWithSocialContext,
                    z && m.truncatedSentence,
                    a.sentenceBackgroundXStyle != null &&
                      a.sentenceBackgroundXStyle,
                  ]),
                  "data-testid": void 0,
                  children: j.jsx("span", {
                    children: j.jsx("span", {
                      className: c("stylex")(m.sentenceWrapper),
                      children: z
                        ? j.jsx(c("CometErrorBoundary.react"), {
                            children: j.jsx(d("CometRelay").MatchContainer, {
                              match: p,
                              props: { viewerReacted: h },
                            }),
                          })
                        : j.jsx(n, {
                            actorName: e,
                            i18nReactionCount: f,
                            importantReactors: q,
                            reactionCount: o,
                            viewerReacted: h,
                          }),
                    }),
                  }),
                },
                "social-sentence"
              ),
            ],
          }),
        }),
      });
      return r
        ? j.jsx("div", {
            className: c("stylex")([z && m.privateFeedbackOverflow]),
            children: j.jsx(c("CometUFITooltip.react"), {
              tooltipContentComponent: l,
              tooltipContentProps: {
                queryVariables: { feedbackTargetID: g },
                reactionCount: o,
              },
              children: v,
            }),
          })
        : j.jsx("span", { children: v });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a) {
      var b = a.actorName,
        d = a.i18nReactionCount,
        e = a.importantReactors,
        f = a.reactionCount;
      a = a.viewerReacted;
      if (a && f === 1) return b;
      if (!a && e.length === 0) return o(d, f);
      b = [a ? h._("You") : null]
        .concat(
          e.map(function (a) {
            return a == null ? void 0 : a.name;
          })
        )
        .filter(Boolean);
      a = f - b.length;
      a > 0 &&
        b.push(
          h._({ "*": "{number} others", _1: "1 other" }, [
            h._plural(a, "number", o(d, a)),
          ])
        );
      return c("intlList")(b);
    }
    function o(a, b) {
      var c = Math.floor(Math.log10(b));
      return c < 3 ? d("NumberFormat").formatInteger(b) : a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFITopReactions.react",
  [
    "fbt",
    "CometFeedARIAProperties.react",
    "CometInteractionTracingModuleUfiReactionsDialogOpenQPLEvent",
    "CometLoggedOutCTAStrings",
    "CometPressable.react",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "CometUFIReactionsDialog.entrypoint",
    "CometUFITooltip.react",
    "CometUFITopReactions_feedback.graphql",
    "JSResourceForInteraction",
    "cr:932",
    "cr:933",
    "emptyFunction",
    "gkx",
    "isNotOutlierReaction",
    "react",
    "recoverableViolation",
    "stylex",
    "unrecoverableViolation",
    "useCometEntryPointDialog",
    "useCometInteractionTracing",
    "useCometLoggedOutPopupCTA",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = c("gkx")("976093"),
      n = c("JSResourceForInteraction")(
        "CometUFIReactionIconTooltipContent.react"
      ).__setRef("CometUFITopReactions.react"),
      o = {
        firstReaction: { zIndex: "kavbgo14" },
        icon: { verticalAlign: "j1lvzwm4" },
        noBorder: {
          borderTopWidth: "rt8b4zig",
          borderEndWidth: "n8ej3o3l",
          borderBottomWidth: "agehan2d",
          borderStartWidth: "sk4xxmp2",
        },
        reaction: {
          borderTopStartRadius: "t0qjyqq4",
          borderTopEndRadius: "jos75b7i",
          borderBottomEndRadius: "j6sty90h",
          borderBottomStartRadius: "kv0toi1t",
          display: "q9uorilb",
          height: "hm271qws",
          width: "ov9facns",
        },
        reactionContainer: {
          borderTopColor: "np69z8it",
          borderEndColor: "et4y5ytx",
          borderBottomColor: "j7g94pet",
          borderStartColor: "b74d5cxt",
          borderTopStartRadius: "qw6c0r16",
          borderTopEndRadius: "kb8x4rkr",
          borderBottomEndRadius: "ed597pkb",
          borderBottomStartRadius: "omcyoz59",
          borderTopStyle: "goun2846",
          borderEndStyle: "ccm00jje",
          borderBottomStyle: "s44p3ltw",
          borderStartStyle: "mk2mc5f4",
          borderTopWidth: "qxh1up0x",
          borderEndWidth: "qtyiw8t4",
          borderBottomWidth: "tpcyxxvw",
          borderStartWidth: "k0bpgpbk",
          height: "hm271qws",
          marginStart: "rl04r1d5",
          position: "l9j0dhe7",
          width: "ov9facns",
        },
        reactionIconWrapper: { zIndex: "du4w35lb" },
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          paddingStart: "b3onmgus",
        },
        secondReaction: { zIndex: "tkr6xdv7" },
        thirdReaction: { zIndex: "du4w35lb" },
      };
    function p(a) {
      var d = a.feedbackTargetID,
        e = a.i18nReactionCount,
        f = a.localizedName,
        g = a.noBorder,
        i = a.reactionCount,
        l = a.reactionType,
        p = a.shouldNotOpenTopReactorsDialogOnClick,
        q = a.uri;
      a = a.xstyle;
      f = f;
      if (d == null)
        throw c("unrecoverableViolation")(
          "CometUFITopReactions: Expected feedback.id",
          "ufi2"
        );
      var r = c("useCometEntryPointDialog")(
          c("CometUFIReactionsDialog.entrypoint"),
          { feedbackTargetID: d, reactionType: l },
          "button"
        ),
        s = r[0],
        t = r[1],
        u = r[2],
        v = r[3];
      r = r[4];
      var w = c("useCometLoggedOutPopupCTA")({
          title: c("CometLoggedOutCTAStrings").popupTitle,
        }),
        x = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleUfiReactionsDialogOpenQPLEvent"),
          "fluid",
          "INTERACTION"
        ),
        y = k(
          function () {
            x(function () {
              s({});
            });
          },
          [s, x]
        );
      w = m ? w : y;
      y = m || p ? [void 0, void 0, void 0] : [u, v, r];
      u = y[0];
      v = y[1];
      r = y[2];
      var z;
      b("cr:933") != null
        ? (z = j.jsx(b("cr:933"), {
            reactionType: l,
            role: "presentation",
            size: 18,
            xstyle: o.icon,
          }))
        : b("cr:932") != null &&
          q != null &&
          (z = j.jsx(b("cr:932"), { size: 18, uri: q, xstyle: o.icon }));
      return j.jsx("span", {
        className: c("stylex")(o.reactionContainer, g === !0 && o.noBorder, a),
        children: j.jsx("span", {
          className: c("stylex")(o.reaction),
          children: j.jsx(c("CometUFITooltip.react"), {
            headline: (y = f) != null ? y : void 0,
            tooltipContentComponent: n,
            tooltipContentProps: {
              queryVariables: { feedbackTargetID: d, reactionType: l },
              reactionType: l,
            },
            children: j.jsx(c("CometTrackingNodeProvider.react"), {
              trackingNode: 137,
              children: j.jsx(c("CometPressable.react"), {
                label: h._(
                  {
                    "*": "{i18nReactionName}: {number} people",
                    _1: "{i18nReactionName}: 1 person",
                  },
                  [
                    h._param("i18nReactionName", f),
                    h._plural((q = i) != null ? q : 0, "number", e),
                  ]
                ),
                onHoverIn: u,
                onHoverOut: v,
                onPress: p ? c("emptyFunction") : w,
                onPressIn: r,
                overlayDisabled: !0,
                ref: t,
                children: z,
              }),
            }),
          }),
        }),
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.noBorder,
        f = a.shouldNotOpenTopReactorsDialogOnClick,
        g = f === void 0 ? !1 : f;
      f = babelHelpers.objectWithoutPropertiesLoose(a, [
        "noBorder",
        "shouldNotOpenTopReactorsDialogOnClick",
      ]);
      var k = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFITopReactions_feedback.graphql")),
        f.feedback
      );
      a = k.top_reactions;
      f = a == null ? void 0 : a.edges;
      a = l(c("CometFeedARIAProperties.react"));
      if (!f)
        throw c("unrecoverableViolation")(
          "CometUFITopReactions: Expected top reactions",
          "ufi2"
        );
      if (f.length === 0) return null;
      f = f
        .filter(function (a) {
          return ((a = a.node) == null ? void 0 : a.reaction_type) != null;
        })
        .filter(c("isNotOutlierReaction")(k))
        .slice(0, 3);
      return j.jsx("span", {
        "aria-label": h._("See who reacted to this"),
        className: c("stylex")(o.reactionIconWrapper),
        role: "toolbar",
        children: j.jsx(
          "span",
          babelHelpers["extends"]({}, a.reactionTargetProps, {
            className: c("stylex")(o.root),
            ref: a.reactionTargetRef,
            children: f.map(function (a, b) {
              var d = a.node;
              if (d == null) return null;
              var f = d.localized_name,
                h = d.reaction_type;
              d = d.svg_image;
              if (h == null)
                throw c("unrecoverableViolation")(
                  "CometUFITopReactions: Expected reaction_type on reaction",
                  "ufi2"
                );
              var i;
              switch (b) {
                case 0:
                  i = o.firstReaction;
                  break;
                case 1:
                  i = o.secondReaction;
                  break;
                case 2:
                  i = o.thirdReaction;
                  break;
                default:
                  c("recoverableViolation")(
                    "There seem to be more than three reactions in this top reactions pile. You need to update this z-index code now.",
                    "ufi2"
                  );
              }
              return j.jsx(
                p,
                {
                  feedbackTargetID: k == null ? void 0 : k.id,
                  i18nReactionCount: a == null ? void 0 : a.i18n_reaction_count,
                  localizedName: f,
                  noBorder: e,
                  reactionCount: a == null ? void 0 : a.reaction_count,
                  reactionType: h,
                  shouldNotOpenTopReactorsDialogOnClick: g,
                  uri: d == null ? void 0 : d.uri,
                  xstyle: i,
                },
                f
              );
            }),
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UFI2PrivateReplyIndicator.react",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      return i.jsx("span", {
        className: a.className,
        children: h._("Page responded privately"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.shouldRender = function (a) {
      return a === "ALREADY_REPLIED";
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometUFISummaryBase.react",
  [
    "CometErrorBoundary.react",
    "CometFeedUnitQueryVariablesContext",
    "CometRelay",
    "CometTooltipGroup.react",
    "CometTrackingNodeProvider.react",
    "CometUFIReactionsCount.react",
    "CometUFISeenByCount.react",
    "CometUFISharesCount.react",
    "CometUFISummaryBase_feedback.graphql",
    "CometUFITopReactions.react",
    "UFI2PrivateReplyIndicator.react",
    "gkx",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k = {
        count: { marginStart: "gtad4xkn" },
        countsSummary: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexShrink: "pfnyh3mw",
          height: "p1ueia1e",
        },
        feedbackSummary: {
          alignItems: "bp9cbjyn",
          color: "m9osqain",
          display: "j83agx80",
          fontSize: "jq4qci2q",
          justifyContent: "bkfpd7mw",
          lineHeight: "a3bd9o3v",
        },
        feedbackSummaryContainer: { position: "l9j0dhe7" },
        feedbackSummaryFresh: {
          backgroundColor: "is6700om",
          bottom: "i09qtzwb",
          content: "rm7oo3ik",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          width: "dsl5tyj5",
        },
        privateReplyIndicator: {
          marginStart: "gtad4xkn",
          textAlign: "ftzlm3b6",
          whiteSpace: "g0qnabr5",
        },
        reactionsSummary: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexGrow: "buofh1pr",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        summarySpacer: {
          flexGrow: "kb5gq1qc",
          flexShrink: "pfnyh3mw",
          width: "c0wkt4kp",
        },
      };
    function a(a) {
      var e,
        f = a.hideCommentCounts,
        g = a.hideSeenBy,
        l = a.hideShareCounts,
        m = a.hideViewCounts,
        n = a.onClickCommentsCount,
        o = a.renderLocation,
        p = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("CometUFISummaryBase_feedback.graphql")),
          a.feedback
        ),
        q = p.can_show_seen_by,
        r = p.comment_count,
        s = p.is_unseen,
        t = p.page_private_reply,
        u = p.reaction_count,
        v = p.share_count,
        w = p.video_view_count;
      t = t == null ? void 0 : t.status;
      var x = o === "comet_tahoe" || (o === "newsstand" && c("gkx")("1924364"));
      o = o === "workplace_qa";
      e =
        (p == null
          ? void 0
          : (e = p.associated_video) == null
          ? void 0
          : e.broadcast_is_ama_enabled) === !0 &&
        c("gkx")("557") &&
        c("gkx")("1605");
      w = x && Boolean(w) && !Boolean(m);
      q = q === !0 && !Boolean(g) && !(x && w) && !o;
      g = (r == null ? void 0 : r.is_empty) === !1;
      x = (u == null ? void 0 : u.is_empty) === !1;
      o = (v == null ? void 0 : v.is_empty) === !1;
      r = c("UFI2PrivateReplyIndicator.react").shouldRender(t);
      v =
        (u = j(c("CometFeedUnitQueryVariablesContext"))) == null
          ? void 0
          : u.feedLocation;
      if (!w && !q && (!g || e) && !x && !o && !r) return null;
      t = !!c("qex")._("1629322") && v === "GROUP_COMMUNITY_VIEW";
      u = g && !Boolean(f);
      return i.jsx("div", {
        className: c("stylex")(k.feedbackSummaryContainer),
        "data-testid": void 0,
        children: i.jsx(c("CometTrackingNodeProvider.react"), {
          trackingNode: 22,
          children: i.jsxs(c("CometTooltipGroup.react"), {
            children: [
              i.jsxs("div", {
                className: c("stylex")(k.feedbackSummary, a.xstyle),
                children: [
                  i.jsx("div", {
                    className: c("stylex")(k.reactionsSummary),
                    children: x
                      ? i.jsxs(i.Fragment, {
                          children: [
                            i.jsx(c("CometErrorBoundary.react"), {
                              context: { project: "ufi2" },
                              children: i.jsx(c("CometUFITopReactions.react"), {
                                feedback: p,
                              }),
                            }),
                            i.jsx(c("CometErrorBoundary.react"), {
                              context: { project: "ufi2" },
                              children: i.jsx(
                                c("CometUFIReactionsCount.react"),
                                { feedback: p }
                              ),
                            }),
                          ],
                        })
                      : null,
                  }),
                  u
                    ? null
                    : i.jsx("div", { className: c("stylex")(k.summarySpacer) }),
                  i.jsxs("div", {
                    className: c("stylex")(k.countsSummary),
                    children: [
                      u
                        ? i.jsx(c("CometErrorBoundary.react"), {
                            context: { project: "ufi2" },
                            children: i.jsx("div", {
                              className: c("stylex")(k.count),
                              children: i.jsx(d("CometRelay").MatchContainer, {
                                match: p.comments_count_summary_renderer,
                                props: { onClick: n },
                              }),
                            }),
                          })
                        : null,
                      [
                        o && !Boolean(l) && !t
                          ? c("CometUFISharesCount.react")
                          : null,
                        q ? c("CometUFISeenByCount.react") : null,
                      ]
                        .filter(Boolean)
                        .map(function (a, b) {
                          return i.jsx(
                            c("CometErrorBoundary.react"),
                            {
                              context: { project: "ufi2" },
                              children: i.jsx("div", {
                                className: c("stylex")(k.count),
                                children: i.jsx(a, { feedback: p }),
                              }),
                            },
                            b
                          );
                        }),
                      !Boolean(m) &&
                        p.video_view_count_renderer != null &&
                        i.jsx(c("CometErrorBoundary.react"), {
                          context: { project: "ufi2" },
                          children: i.jsx("div", {
                            className: c("stylex")(k.count),
                            children: i.jsx(d("CometRelay").MatchContainer, {
                              match: p.video_view_count_renderer,
                            }),
                          }),
                        }),
                    ],
                  }),
                  r
                    ? i.jsx(c("UFI2PrivateReplyIndicator.react"), {
                        className: c("stylex")(k.privateReplyIndicator),
                      })
                    : null,
                ],
              }),
              s === !0
                ? i.jsx("div", {
                    className: c("stylex")(k.feedbackSummaryFresh),
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
  "CometUFISummary.react",
  [
    "CometRelay",
    "CometUFISummaryBase.react",
    "CometUFISummary_feedback.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        divider: { borderBottom: "s1tcr66n" },
        summary: {
          marginTop: "kvgmc6g5",
          marginEnd: "wkznzc2l",
          marginBottom: "oygrvhab",
          marginStart: "dhix69tm",
          paddingTop: "jktsbyx5",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "osnr6wyh",
          paddingStart: "a8nywdso",
        },
      };
    function a(a) {
      var e = a.hideCommentCounts,
        f = a.hideDivider,
        g = a.hideSeenBy,
        k = a.hideShareCounts,
        l = a.hideViewCounts,
        m = a.onClickCommentsCount,
        n = a.renderLocation;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometUFISummary_feedback.graphql")),
        a.feedback
      );
      return i.jsx(c("CometUFISummaryBase.react"), {
        feedback: a,
        hideCommentCounts: e,
        hideSeenBy: g,
        hideShareCounts: k,
        hideViewCounts: l,
        onClickCommentsCount: m,
        renderLocation: n,
        xstyle: [j.summary, !Boolean(f) && j.divider],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometGenericCommentDisableNotice.react",
  [
    "CometGenericCommentDisableNotice_commentDisableNotice.graphql",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.commentDisableNotice,
        f = a.renderers;
      a = a.transforms;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometGenericCommentDisableNotice_commentDisableNotice.graphql"
            )),
        e
      );
      e = e.notice_message;
      return e == null
        ? null
        : i.jsx(c("CometTextWithEntitiesRelay.react"), {
            renderers: f,
            textWithEntities: e,
            transforms: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIComposerActionButton.react",
  ["CometTooltip.react", "TetraIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.color;
      d = d === void 0 ? "secondary" : d;
      var e = a.disabled;
      e = e === void 0 ? !1 : e;
      var f = a.icon,
        g = a.label;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "color",
        "disabled",
        "icon",
        "label",
      ]);
      return h.jsx(c("CometTooltip.react"), {
        position: "above",
        tooltip: g,
        children: h.jsx(
          c("TetraIcon.react"),
          babelHelpers["extends"]({}, a, {
            "aria-label": g,
            color: d,
            disabled: e,
            icon: f,
            ref: b,
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometUFILazyPopoverComposerAction.react",
  [
    "CometLazyPopoverTrigger.react",
    "CometUFIComposerActionButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.fallback,
        d = a.icon,
        e = a.label,
        f = a.popoverProps,
        g = a.popoverResource;
      a = a.tracePolicy;
      var j = i(!1),
        k = j[0];
      j = j[1];
      return h.jsx(c("CometLazyPopoverTrigger.react"), {
        align: "end",
        fallback: b,
        onVisibilityChange: j,
        popoverProps: f,
        popoverResource: g,
        position: "above",
        preloadTrigger: "button",
        tracePolicy: a,
        children: function (a, b, f, g, i, j) {
          return h.jsx(c("CometUFIComposerActionButton.react"), {
            color: k ? "highlight" : void 0,
            icon: d,
            label: e,
            onHoverIn: g,
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
  "cometUFIComposerAssociateReplyWithParentPlugin",
  [
    "cometUFIComposerAssociateReplyWithParentPlugin_plugin.graphql",
    "cr:2054832",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0
      ? h
      : (h = b(
          "cometUFIComposerAssociateReplyWithParentPlugin_plugin.graphql"
        ));
    function a(a) {
      return b("cr:2054832")();
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerDelightsPlugin",
  ["cometUFIComposerDelightsPlugin_plugin.graphql", "cr:29"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0 ? h : (h = b("cometUFIComposerDelightsPlugin_plugin.graphql"));
    function a(a) {
      return b("cr:29")();
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerEmojiPlugin",
  [
    "CometRelay",
    "cometUFIComposerEmojiPlugin_plugin.graphql",
    "cometUFIComposerEmojiPlugin_pluginData.graphql",
    "cr:28",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0 ? h : (h = b("cometUFIComposerEmojiPlugin_plugin.graphql"));
    function a(a) {
      a = a.fragmentKey;
      a = d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b("cometUFIComposerEmojiPlugin_pluginData.graphql")),
        a
      );
      return b("cr:28")({ size: (a = a.emoji_size) != null ? a : 16 });
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerEmoticonPlugin",
  [
    "CometRelay",
    "cometUFIComposerEmoticonPlugin_plugin.graphql",
    "cometUFIComposerEmoticonPlugin_pluginData.graphql",
    "cr:30",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0 ? h : (h = b("cometUFIComposerEmoticonPlugin_plugin.graphql"));
    function a(a) {
      a = a.fragmentKey;
      a = d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b("cometUFIComposerEmoticonPlugin_pluginData.graphql")),
        a
      );
      return b("cr:30")({ size: (a = a.emoji_size) != null ? a : 16 });
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerHashtagPlugin",
  ["cometUFIComposerHashtagPlugin_plugin.graphql", "cr:32"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0 ? h : (h = b("cometUFIComposerHashtagPlugin_plugin.graphql"));
    function a(a) {
      return b("cr:32")();
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerMentionsPlugin",
  [
    "CometRelay",
    "cometUFIComposerMentionsPlugin_plugin.graphql",
    "cometUFIComposerMentionsPlugin_pluginData.graphql",
    "cr:2050604",
    "cr:2050634",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0 ? h : (h = b("cometUFIComposerMentionsPlugin_plugin.graphql"));
    function a(a) {
      a = a.fragmentKey;
      d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b("cometUFIComposerMentionsPlugin_pluginData.graphql")),
        a
      );
      return b("cr:2050634")({
        upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE: b("cr:2050604"),
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerPrefillMentionPlugin",
  ["cometUFIComposerPrefillMentionPlugin_plugin.graphql", "cr:45"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0
      ? h
      : (h = b("cometUFIComposerPrefillMentionPlugin_plugin.graphql"));
    function a(a) {
      return b("cr:45")();
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerSetReplyClickedPlugin",
  ["cometUFIComposerSetReplyClickedPlugin_plugin.graphql", "cr:27"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0
      ? h
      : (h = b("cometUFIComposerSetReplyClickedPlugin_plugin.graphql"));
    function a(a) {
      return b("cr:27")();
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIComposerStateSnapshotPlugin",
  ["cometUFIComposerStateSnapshotPlugin_plugin.graphql", "cr:47"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0
      ? h
      : (h = b("cometUFIComposerStateSnapshotPlugin_plugin.graphql"));
    function a(a) {
      return b("cr:47")();
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIReactionSentence.react",
  [
    "CometUFIReactionSentence_reactionDisplayConfig.graphql",
    "RelayHooks",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("RelayHooks").useFragment(
          h !== void 0
            ? h
            : (h = b("CometUFIReactionSentence_reactionDisplayConfig.graphql")),
          a.reactionDisplayConfig
        ),
        f = e.reaction_display_strategy,
        g = e.reaction_string_with_viewer;
      e = e.reaction_string_without_viewer;
      if (f == null)
        throw c("unrecoverableViolation")(
          "CometUFIReactionSentence: Reaction display strategy was unexpectedly null",
          "ufi2"
        );
      if (g == null || e == null)
        throw c("unrecoverableViolation")(
          "CometUFIReactionSentence: Reaction string was unexpectedly null",
          "ufi2"
        );
      return i.jsx(i.Fragment, { children: a.viewerReacted ? g : e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "IdentityBadgeUtils",
  ["cx", "gkx"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = function (a) {
      switch (a) {
        case "tipper":
        case "birthday_week_tipper":
        case "streamer_appreciation_week_tipper":
          return c("gkx")("709988");
        case "follower":
          return c("gkx")("833805");
        case "woodhenge_submageddon":
          return !1;
        case "original":
          return c("gkx")("1144561");
        case "sharer":
        case "authoritative_expert":
        case "top_fan":
        case "frequent_watcher":
        case "woodhenge":
        case "author":
        case "fan_funding_supporter":
        case "moderator":
        case "staff":
        case "chatbot":
        case "live_video_assigned_role":
          return !0;
        default:
          return !1;
      }
    };
    a = function (a) {
      if (a == null || a.length === 0) return null;
      a = a.filter(function (a) {
        a = JSON.parse(a.serialized);
        a = a.type;
        return i(a);
      });
      return a.length === 0
        ? null
        : a.map(function (a) {
            var b = JSON.parse(a.serialized);
            b = b.type;
            return {
              type: b,
              badge_asset: a.badge_asset,
              badge_color: a.badge_color,
              multiple_badge_asset: a.multiple_badge_asset,
              multiple_badge_asset_colored: a.multiple_badge_asset_colored,
              text: a.text,
              serialized: a.serialized,
            };
          });
    };
    var j =
        ((b = {}),
        (b.frequent_watcher = "_7wxe"),
        (b.woodhenge = "_7wxf"),
        (b.top_fan = "_7wxg"),
        b),
      k = function (a, b) {
        return !1;
      };
    d = function (a, b, c, d) {
      if (
        !a ||
        !Array.isArray(a.identityBadges) ||
        a.identityBadges.length === 0 ||
        !a.isunseen ||
        d === !0 ||
        !k(b, c)
      )
        return null;
      d = a.identityBadges
        .map(function (a) {
          return a.type;
        })
        .filter(function (a) {
          return a.toString() in j;
        });
      return d.length === 0 ? null : j[d[0]];
    };
    g.isBadgeTypeEligible = i;
    g.fromLiveVideoCommentCreateSubscription = a;
    g.isEligibleForColorComments = k;
    g.commentColorAnimationClass = d;
  },
  98
);
__d(
  "injectSubscriptionsHandler.react",
  ["SubscriptionsHandler", "getReactComponentDisplayName", "react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    function a(a) {
      var b,
        d,
        e = c("getReactComponentDisplayName")(a);
      return (
        (d = b =
          (function (b) {
            babelHelpers.inheritsLoose(d, b);
            function d() {
              var a, d;
              for (
                var e = arguments.length, f = new Array(e), g = 0;
                g < e;
                g++
              )
                f[g] = arguments[g];
              return (
                ((a = d = b.call.apply(b, [this].concat(f)) || this),
                (d.state = {
                  subscriptionsHandler: new (c("SubscriptionsHandler"))(),
                }),
                a) || babelHelpers.assertThisInitialized(d)
              );
            }
            var e = d.prototype;
            e.componentWillUnmount = function () {
              this.state.subscriptionsHandler.release();
            };
            e.render = function () {
              return h.jsx(
                a,
                babelHelpers["extends"]({}, this.props, {
                  subscriptionsHandler: this.state.subscriptionsHandler,
                })
              );
            };
            return d;
          })(h.Component)),
        (b.displayName = "injectSubscriptionsHandler(" + e + ")"),
        d
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "lastx",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = null;
      if (Array.isArray(a)) a.length && (b = { value: a[a.length - 1] });
      else
        for (
          var a = a,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          b = b || {};
          b.value = e;
        }
      if (b) return b.value;
      h(0, 1145);
    }
    g["default"] = a;
  },
  98
);
__d(
  "MultiKeyMap",
  ["invariant", "lastx"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = typeof WeakMap === "function";
    a = (function () {
      function a() {
        (this.$1 = this.$2()), (this.$3 = null);
      }
      var b = a.prototype;
      b.set = function (a, b) {
        this.$4(a);
        var c = this.$1;
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d],
            f = this.$5(c, e).get(e);
          f == null && ((f = this.$2()), this.$5(c, e).set(e, f));
          f.type === "map" || h(0, 1732);
          c = f;
        }
        e = a[a.length - 1];
        this.$5(c, e).set(e, { type: "value", value: b });
      };
      b.get = function (a) {
        this.$4(a);
        var b = this.$6(a);
        b = b && b.get(c("lastx")(a));
        return b == null || b.type !== "value" ? void 0 : b.value;
      };
      b["delete"] = function (a) {
        this.$4(a);
        var b = this.$6(a);
        return b ? b["delete"](c("lastx")(a)) : !1;
      };
      b.$5 = function (a, b) {
        return j(b) ? a.cache : a.weakCache;
      };
      b.$6 = function (a) {
        var b = this.$1;
        for (var d = 0; d < a.length - 1; d++) {
          var e,
            f = a[d];
          if (((e = b) == null ? void 0 : e.type) === "map")
            b = this.$5(b, f).get(f);
          else return void 0;
        }
        e = c("lastx")(a);
        f = b && this.$5(b, e);
        return f;
      };
      b.$2 = function () {
        return {
          type: "map",
          cache: new Map(),
          weakCache: i ? new WeakMap() : new Map(),
        };
      };
      b.$4 = function (a) {
        this.$3 == null && (this.$3 = a.length);
        if (this.$3 !== a.length)
          throw new Error("MultiKeyMap called with different number of keys");
        if (a.length < 1)
          throw new Error("MultiKeyMap called with empty array of keys");
      };
      return a;
    })();
    function j(a) {
      var b = typeof a;
      return b === "number" || b === "string" || b === "boolean" || a == null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "memoizeWithArgsWeak",
  ["MemoizationInstrumentation", "MultiKeyMap"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      b === void 0 && (b = "");
      var e = new (c("MultiKeyMap"))(),
        f = b || a.name || "unknown";
      b = function () {
        var b = d("MemoizationInstrumentation").onFunctionCall(
          "memoizeWithArgsWeak",
          f
        );
        for (var c = arguments.length, g = new Array(c), h = 0; h < c; h++)
          g[h] = arguments[h];
        var i = e.get(g);
        if (i !== void 0) {
          b && b(!0);
          return i;
        }
        var j = a.apply(void 0, g);
        e.set(g, j);
        b && b(!1);
        return j;
      };
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiStoryReactionQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735623);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiTopLevelCommentsPaginationQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735620);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfiComposerKeypressLatencyQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735605);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiCommentReactionQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735624);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2PersistedCommentEditQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735594);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2ShareDialogOpensQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735599);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2ReplyCommentsPaginationQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735597);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfiOptimisticCommentQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735589);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiReplyCommentsPaginationQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735622);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2PersistedCommentQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735592);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2TopLevelCommentsPaginationQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735596);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfiStoryReactionQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735601);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfiTopLevelCommentsPaginationQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735595);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2StoryReactionQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735602);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2ComposerKeypressLatencyQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735606);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfiPersistedCommentQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735591);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiOptimisticCommentEditQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735626);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2OptimisticCommentQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735590);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfiComposerInputFocusQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735600);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfiCommentReactionQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735604);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiPersistedCommentEditQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735627);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2CommentReactionQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735603);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiPersistedCommentQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735619);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfiShareDialogOpensQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735598);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiOptimisticCommentQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735618);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleUfi2OptimisticCommentEditQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735593);
    g["default"] = a;
  },
  98
);
__d(
  "UfiModuleCometUfiComposerKeypressLatencyQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3735625);
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModuleUfiReactionsDialogOpenQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(30605374);
    g["default"] = a;
  },
  98
);
__d(
  "queryThenMutateDOM",
  [
    "ErrorUtils",
    "Run",
    "TimeSlice",
    "emptyFunction",
    "gkx",
    "requestAnimationFrame",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h,
      i,
      j = [],
      k = {};
    function l(a, c, d) {
      if (!a && !c) return { cancel: b("emptyFunction") };
      if (d && Object.prototype.hasOwnProperty.call(k, d))
        return { cancel: b("emptyFunction") };
      else d && (k[d] = 1);
      c = b("TimeSlice").guard(
        c || b("emptyFunction"),
        "queryThenMutateDOM mutation callback",
        {
          propagationType: b("TimeSlice").PropagationType.CONTINUATION,
          registerCallStack: !0,
        }
      );
      a = b("TimeSlice").guard(
        a || b("emptyFunction"),
        "queryThenMutateDOM query callback",
        {
          propagationType: b("TimeSlice").PropagationType.CONTINUATION,
          registerCallStack: !0,
        }
      );
      var e = {
        queryFunction: a,
        mutateFunction: c,
        output: null,
        deleted: !1,
      };
      j.push(e);
      n();
      h ||
        ((h = !0),
        b("gkx")("708253") ||
          b("Run").onLeave(function () {
            (h = !1), (i = !1), (k = {}), (j.length = 0);
          }));
      return {
        cancel: function () {
          (e.deleted = !0), d && delete k[d];
        },
      };
    }
    l.prepare = function (a, b, c) {
      return function () {
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        e.unshift(this);
        var g = Function.prototype.bind.apply(a, e),
          h = b.bind(this);
        l(g, h, c);
      };
    };
    var m = b("TimeSlice").guard(
      function () {
        while (j.length) {
          k = {};
          var a = [];
          window.document.body.getClientRects();
          while (j.length) {
            var b = j.shift();
            b.deleted || ((b.output = o(b.queryFunction)), a.push(b));
          }
          while (a.length) {
            b = a.shift();
            b.deleted || o(b.mutateFunction, null, [b.output]);
          }
        }
        i = !1;
      },
      "queryThenMutateDOM runScheduledQueriesAndMutations",
      { propagationType: b("TimeSlice").PropagationType.ORPHAN }
    );
    function n() {
      !i && j.length && ((i = !0), b("requestAnimationFrame")(m));
    }
    function o(a, c, d, e, f) {
      return (g || (g = b("ErrorUtils"))).applyWithGuard(a, c, d, e, f);
    }
    e.exports = l;
  },
  null
);
