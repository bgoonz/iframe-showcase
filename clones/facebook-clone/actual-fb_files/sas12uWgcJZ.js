if (self.CavalryLogger) {
  CavalryLogger.start_js(["sl+l8iI"]);
}

__d(
  "CometDefaultCommentListComposer_renderer$normalization.graphql",
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
        b = { kind: "Variable", name: "scale", variableName: "scale" },
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometDefaultCommentListComposer_renderer$normalization",
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
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                  { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: "profile_picture_depth_0",
                    args: [
                      { kind: "Literal", name: "height", value: 32 },
                      b,
                      { kind: "Literal", name: "width", value: 32 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: c,
                    storageKey: null,
                  },
                  {
                    alias: "profile_picture_depth_1",
                    args: [
                      { kind: "Literal", name: "height", value: 24 },
                      b,
                      { kind: "Literal", name: "width", value: 24 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: c,
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "gender",
                        storageKey: null,
                      },
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
                ],
                storageKey: null,
              },
              a,
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
  "CometDefaultCommentListComposer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "useDefaultActor" }],
      kind: "Fragment",
      metadata: null,
      name: "CometDefaultCommentListComposer_renderer",
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
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometUFIComposer_actor",
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometUFIComposer_feedback",
            },
          ],
          storageKey: null,
        },
      ],
      type: "DefaultContentBasedCommentListRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIBanActorLink_comment.graphql",
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
        name: "CometUFIBanActorLink_comment",
        selections: [
          a,
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
            concreteType: null,
            kind: "LinkedField",
            name: "author",
            plural: !1,
            selections: [
              a,
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
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "parent_feedback",
            plural: !1,
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
                concreteType: "Page",
                kind: "LinkedField",
                name: "viewer_acts_as_page",
                plural: !1,
                selections: [a],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIBanActorMutation_comment",
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
  "CometUFICommentActorAMAQuestionAnswerBadge_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentActorAMAQuestionAnswerBadge_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "question_and_answer_type",
          storageKey: null,
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
  "CometUFICommentActorLinkBadges_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "feedLocation" }],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentActorLinkBadges_comment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "author",
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
                kind: "InlineFragment",
                selections: a,
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Page",
                abstractKey: null,
              },
            ],
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
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentActorConstituentBadge_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentActorAMAQuestionAnswerBadge_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentWorkActorLinkBadges_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentInlineFollowCTA_comment",
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "feed_location",
                variableName: "feedLocation",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "author_user_signals_renderer",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometUFICommentActorLinkBadges_comment",
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
  "CometUFICommentActorName_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentActorName_comment",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentActorLink_comment",
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "author",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
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
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
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
  "CometUFICommentBodyStandaloneEmoji_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "translationType" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentBodyStandaloneEmoji_comment",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "translation_type",
              variableName: "translationType",
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "preferred_body",
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
      type: "Comment",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentBody_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            kind: "Variable",
            name: "translation_type",
            variableName: "translationType",
          },
        ],
        b = [
          {
            kind: "Variable",
            name: "feedLocation",
            variableName: "feedLocation",
          },
        ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "feedLocation" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "translationType",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentBody_comment",
        selections: [
          {
            alias: null,
            args: a,
            concreteType: null,
            kind: "LinkedField",
            name: "preferred_body",
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
                args: null,
                kind: "FragmentSpread",
                name: "CometUFICommentBodyTextWithEntities_textWithEntities",
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text",
                    storageKey: null,
                  },
                ],
                type: "TextWithEntities",
                abstractKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "translation_type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: "body_renderer",
            args: a,
            concreteType: null,
            kind: "LinkedField",
            name: "preferred_body",
            plural: !1,
            selections: [
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
            storageKey: null,
          },
          {
            args: [
              {
                kind: "Variable",
                name: "translationType",
                variableName: "translationType",
              },
            ],
            kind: "FragmentSpread",
            name: "CometUFICommentBodyStandaloneEmoji_comment",
          },
          {
            alias: null,
            args: null,
            concreteType: "Comment",
            kind: "LinkedField",
            name: "comment_parent",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "author",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
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
                storageKey: null,
              },
            ],
            storageKey: null,
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
            name: "is_author_weak_reference",
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
            concreteType: "PostTranslatability",
            kind: "LinkedField",
            name: "translatability_for_viewer",
            plural: !1,
            selections: [
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
            name: "written_while_video_was_live",
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentActorName_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentActorLinkBadges_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometUFICommentActorLinkBadges_comment",
          },
          {
            args: b,
            kind: "FragmentSpread",
            name: "CometUFICommentIdentityBadges_comment",
          },
          {
            args: b,
            kind: "FragmentSpread",
            name: "CometUFICommentInlineIdentityBadges_comment",
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
            concreteType: "WorkKnowledgeInlineAnnotationCommentBadgeRenderer",
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
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "optimistic_error",
                storageKey: null,
              },
            ],
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
  "CometUFICommentDisabledNotice_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentDisabledNotice_feedback",
      selections: [
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
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometUFICommentDisabledNotice_feedback",
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
                  documentName: "CometUFICommentDisabledNotice_feedback",
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
                  documentName: "CometUFICommentDisabledNotice_feedback",
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
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentEditHistoryDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4555310654520994",
        metadata: {},
        name: "CometUFICommentEditHistoryDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentGroup_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentGroup_feedback",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentInGroup_feedback",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hide_transparency_enabled_for_actor",
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
  "CometUFICommentIdentityBadges_comment.graphql",
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
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentIdentityBadges_comment",
        selections: [
          {
            alias: null,
            args: a,
            concreteType: "IdentityBadge",
            kind: "LinkedField",
            name: "identity_badges_web",
            plural: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometIdentityBadges_identityBadge",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometIdentityBadgeInformationDialog_identityBadge",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "identity_badge_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: a,
            kind: "ScalarField",
            name: "can_show_multiple_identity_badges",
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometIdentityBadgeInformationDialog_comment",
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "author",
            plural: !1,
            selections: [b],
            storageKey: null,
          },
          b,
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
  "CometUFICommentInGroup_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentInGroup_feedback",
      selections: [
        {
          alias: "threading_config_type",
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "threading_config",
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
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "threading_config",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometUFICommentInGroup_feedback",
                  fragmentName:
                    "CometUFIFullThreadedTopLevelCommentContainer_config",
                  fragmentPropName: "config",
                  kind: "ModuleImport",
                },
              ],
              type: "FullThreadingFeedbackConfig",
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
              value: [
                "DefaultRepliesListRenderer",
                "FullThreadedRepliesListRenderer",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "replies_list_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometUFICommentInGroup_feedback__replies_list_renderer",
                  fragmentName: "CometUFIDefaultRepliesListRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "DefaultRepliesListRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometUFICommentInGroup_feedback__replies_list_renderer",
                  fragmentName:
                    "CometUFIFullThreadedRepliesListRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "FullThreadedRepliesListRenderer",
              abstractKey: null,
            },
          ],
          storageKey:
            'replies_list_renderer(supported:["DefaultRepliesListRenderer","FullThreadedRepliesListRenderer"])',
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
  "CometUFICommentMenuButton_comment.graphql",
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
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "feedLocation" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "translationType",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentMenuButton_comment",
        selections: [
          {
            alias: null,
            args: a,
            kind: "ScalarField",
            name: "comment_menu_tooltip",
            storageKey: null,
          },
          {
            alias: null,
            args: a,
            kind: "ScalarField",
            name: "should_show_comment_menu",
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
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "optimistic_action",
                storageKey: null,
              },
            ],
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
  "CometUFICommentMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4340712812686008",
        metadata: {},
        name: "CometUFICommentMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentRefetchQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "id" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = {
          defaultValue: "ORIGINAL",
          kind: "LocalArgument",
          name: "translationType",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        g = [{ kind: "Variable", name: "id", variableName: "id" }],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        j = {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        k = [j],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        n = [m],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        r = { kind: "Variable", name: "scale", variableName: "scale" },
        s = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        t = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        u = [t],
        v = [h, i],
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        x = [i],
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        };
      t = {
        alias: null,
        args: [
          { kind: "Variable", name: "location", variableName: "feedLocation" },
          t,
        ],
        kind: "ScalarField",
        name: "can_viewer_comment",
        storageKey: null,
      };
      var z = [
          {
            kind: "Variable",
            name: "translation_type",
            variableName: "translationType",
          },
        ],
        A = {
          args: null,
          fragment: b(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_title",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_v2",
          storageKey: null,
        },
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_dark_mode_v2",
          storageKey: null,
        },
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_description",
          storageKey: null,
        },
        H = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_enabled",
          storageKey: null,
        },
        I = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_manageable",
          storageKey: null,
        },
        J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "serialized",
          storageKey: null,
        },
        K = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "identity_badge_type",
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_enabled",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_uri",
          storageKey: null,
        },
        N = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_text",
          storageKey: null,
        },
        O = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "tier_info",
          plural: !1,
          selections: [
            h,
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
          argumentDefinitions: [a, c, d, e, f],
          kind: "Fragment",
          metadata: null,
          name: "CometUFICommentRefetchQuery",
          selections: [
            {
              alias: null,
              args: g,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "translationType",
                      variableName: "translationType",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "CometUFIComment_comment",
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
          argumentDefinitions: [a, d, e, f, c],
          kind: "Operation",
          name: "CometUFICommentRefetchQuery",
          selections: [
            {
              alias: null,
              args: g,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                h,
                i,
                {
                  kind: "InlineFragment",
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
                            h,
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
                    {
                      alias: null,
                      args: k,
                      kind: "ScalarField",
                      name: "comment_menu_tooltip",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: k,
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
                        h,
                        i,
                        l,
                        {
                          kind: "InlineFragment",
                          selections: n,
                          type: "Event",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: n,
                          type: "Group",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [m, o],
                          type: "Page",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            m,
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
                            o,
                            p,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "subscribe_status",
                              storageKey: null,
                            },
                            q,
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
                          selections: n,
                          type: "Entity",
                          abstractKey: "__isEntity",
                        },
                        { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                        {
                          alias: "profile_picture_depth_0",
                          args: [
                            { kind: "Literal", name: "height", value: 32 },
                            r,
                            { kind: "Literal", name: "width", value: 32 },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "profile_picture",
                          plural: !1,
                          selections: s,
                          storageKey: null,
                        },
                        {
                          alias: "profile_picture_depth_1",
                          args: [
                            { kind: "Literal", name: "height", value: 24 },
                            r,
                            { kind: "Literal", name: "width", value: 24 },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "profile_picture",
                          plural: !1,
                          selections: s,
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
                        i,
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
                                h,
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
                          args: u,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "viewer_actor",
                          plural: !1,
                          selections: v,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: u,
                          concreteType: "FeedbackReactionInfo",
                          kind: "LinkedField",
                          name: "viewer_feedback_reaction_info",
                          plural: !1,
                          selections: [w, i],
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
                            w,
                            i,
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
                          selections: x,
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
                                    w,
                                    i,
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
                                      selections: s,
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
                            y,
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
                        t,
                        {
                          alias: null,
                          args: u,
                          kind: "ScalarField",
                          name: "can_viewer_react",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: u,
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
                        i,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback",
                          plural: !1,
                          selections: [t, i],
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
                            h,
                            l,
                            {
                              kind: "InlineFragment",
                              selections: [p, q],
                              type: "User",
                              abstractKey: null,
                            },
                            i,
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
                      selections: [y],
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
                          args: u,
                          concreteType: "Page",
                          kind: "LinkedField",
                          name: "viewer_acts_as_page",
                          plural: !1,
                          selections: x,
                          storageKey: null,
                        },
                        i,
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
                            l,
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
                                i,
                              ],
                              storageKey: null,
                            },
                            i,
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
                      args: z,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "preferred_body",
                      plural: !1,
                      selections: [
                        h,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "translation_type",
                          storageKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [A, B],
                          type: "TextWithEntities",
                          abstractKey: null,
                        },
                        A,
                      ],
                      storageKey: null,
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
                    m,
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
                        i,
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
                        i,
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
                        i,
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
                        i,
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
                        i,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "body_renderer",
                      args: z,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "preferred_body",
                      plural: !1,
                      selections: [
                        h,
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
                      storageKey: null,
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
                      args: k,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "author_user_signals_renderer",
                      plural: !1,
                      selections: [
                        h,
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
                        j,
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
                        h,
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
                      args: k,
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
                        B,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "text_gradient",
                          storageKey: null,
                        },
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
                      args: k,
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
                      selections: [C, D, E, F, G, H, I, J, K, L, M, N, O],
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
                      selections: v,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "if_viewer_can_see_member_page_tooltip",
                      plural: !1,
                      selections: v,
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
                        h,
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
                        h,
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
                  type: "Comment",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5929839403754278",
          metadata: {},
          name: "CometUFICommentRefetchQuery",
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
  "CometUFICommentRow_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "scale", variableName: "scale" },
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentRow_actor",
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
            alias: "profile_picture_depth_0",
            args: [
              { kind: "Literal", name: "height", value: 32 },
              a,
              { kind: "Literal", name: "width", value: 32 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            alias: "profile_picture_depth_1",
            args: [
              { kind: "Literal", name: "height", value: 24 },
              a,
              { kind: "Literal", name: "width", value: 24 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "gender",
                storageKey: null,
              },
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
        ],
        type: "Actor",
        abstractKey: "__isActor",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentRow_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentRow_comment",
      selections: [
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
          concreteType: "Comment",
          kind: "LinkedField",
          name: "comment_parent",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "author",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "gender",
                      storageKey: null,
                    },
                  ],
                  type: "User",
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
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "if_viewer_can_see_member_page_tooltip",
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentActorLink_comment",
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
  "CometUFICommentTopReactionsWrapper_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentTopReactionsWrapper_feedback",
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
          kind: "ScalarField",
          name: "should_show_top_reactions",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentTopReactions_feedback",
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
  "CometUFIComment_comment.graphql",
  ["CometUFICommentRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            kind: "Variable",
            name: "translationType",
            variableName: "translationType",
          },
        ],
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
        argumentDefinitions: [
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "scale" },
          {
            defaultValue: "ORIGINAL",
            kind: "LocalArgument",
            name: "translationType",
          },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: {
          refetch: {
            connection: null,
            fragmentPathInResult: ["node"],
            operation: b("CometUFICommentRefetchQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "CometUFIComment_comment",
        selections: [
          {
            args: a,
            kind: "FragmentSpread",
            name: "CometFeedStoryUFICommentAttachments_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentMenuButton_comment",
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "author",
            plural: !1,
            selections: [
              c,
              d,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFICommentRow_actor",
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
            args: a,
            kind: "FragmentSpread",
            name: "CometUFICommentActionLinks_comment",
          },
          {
            args: a,
            kind: "FragmentSpread",
            name: "CometUFICommentBody_comment",
          },
          {
            kind: "InlineDataFragmentSpread",
            name: "isCommentNewSinceLastGroupVisit_comment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "created_time",
                storageKey: null,
              },
            ],
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
            kind: "ScalarField",
            name: "translation_available_for_viewer",
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
                fragmentName: "CometUFICommentQualitySurvey_inlineSurveyConfig",
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
            kind: "ScalarField",
            name: "spam_display_mode",
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
                kind: "ScalarField",
                name: "style_list",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "attached_story",
            plural: !1,
            selections: [c],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentRow_comment",
          },
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
                name: "CometUFICommentTopReactionsWrapper_feedback",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_disabled",
            storageKey: null,
          },
          d,
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "translation_type",
                variableName: "translationType",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "preferred_body",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "translation_type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "WorkAMAUFIAnsweredEventCommentModuleRenderer",
            kind: "LinkedField",
            name: "work_answered_event_comment_renderer",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "CometUFIComment_comment_work_answered_event_comment_renderer",
                fragmentName: "CometUFIAMABroadcastAnswerEventRow_data",
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
                name: "client_id",
                storageKey: null,
              },
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
                name: "optimistic_error",
                storageKey: null,
              },
            ],
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
  "CometUFIComment_feedback.graphql",
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
        name: "CometUFIComment_feedback",
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
            name: "CometUFICommentActionLinks_feedback",
          },
          a,
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
  "CometUFIComposerWrapperUseComposerPluginProps_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIComposerWrapperUseComposerPluginProps_feedback",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometUFIComposerPlugins_feedback",
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
  "CometUFIComposerWrapper_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIComposerWrapper_feedback",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ConstituentBadgeBannerRenderer",
          kind: "LinkedField",
          name: "constituent_badge_banner_renderer",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "CometUFIComposerWrapper_feedback_constituentBadgeBanner",
              fragmentName:
                "CometUFICommentingAsConstituentHeader_constituentBadgeBannerRenderer",
              fragmentPropName: "constituentBadgeBannerRenderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: "composer_renderer",
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "content_based_comment_list_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometUFIComposerWrapper_feedback_commentList",
                  fragmentName: "CometDefaultCommentListComposer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "DefaultContentBasedCommentListRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometUFIComposerWrapper_feedback_commentList",
                  fragmentName: "CometLiveCommentListComposer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "LiveContentBasedCommentListRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometUFIComposerWrapper_feedback_commentList",
                  fragmentName: "CometLiveVODCommentListComposer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "LiveVODContentBasedCommentListRenderer",
              abstractKey: null,
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
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIComposer_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: !1, kind: "LocalArgument", name: "__false" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIComposer_actor",
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
          name: "CometUFICommentRow_actor",
        },
      ],
      type: "Actor",
      abstractKey: "__isActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIComposer_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIComposer_feedback",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
  "CometUFIDefaultRepliesListRenderer_renderer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFIDefaultRepliesListRenderer_renderer$normalization",
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
  "CometUFIDefaultRepliesListRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIDefaultRepliesListRenderer_renderer",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "DefaultRepliesListRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIEditHistoryCommentActionLink_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIEditHistoryCommentActionLink_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
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
  "CometUFIPinActionLink_feedback.graphql",
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
        name: "CometUFIPinActionLink_feedback",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_viewer_pin_live_comments",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "BroadcastPinnedCommentEvent",
            kind: "LinkedField",
            name: "latest_pinned_comment_event",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Comment",
                kind: "LinkedField",
                name: "pinned_comment",
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
            concreteType: "Video",
            kind: "LinkedField",
            name: "associated_video",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_is_ama_enabled",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_gaming_video",
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
  "CometUFIRemovePreviewMutation.graphql",
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
          name: "__typename",
          storageKey: null,
        },
        d = [c],
        e = {
          alias: null,
          args: null,
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachments",
          plural: !0,
          selections: d,
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_disable_preview",
          storageKey: null,
        },
        g = {
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
          name: "CometUFIRemovePreviewMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "CommentDeleteAttachmentResponsePayload",
              kind: "LinkedField",
              name: "comment_delete_attachment",
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
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "attached_story",
                      plural: !1,
                      selections: d,
                      storageKey: null,
                    },
                    e,
                    f,
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
          name: "CometUFIRemovePreviewMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "CommentDeleteAttachmentResponsePayload",
              kind: "LinkedField",
              name: "comment_delete_attachment",
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
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "attached_story",
                      plural: !1,
                      selections: [c, g],
                      storageKey: null,
                    },
                    e,
                    f,
                    g,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3949836591728545",
          metadata: {},
          name: "CometUFIRemovePreviewMutation",
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
  "CometUFIRepliesExpander_highlightedComments.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "CometUFIRepliesExpander_highlightedComments",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "author",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
            {
              alias: "profilePictureForReplyExpander",
              args: [
                { kind: "Literal", name: "height", value: 24 },
                { kind: "Variable", name: "scale", variableName: "scale" },
                { kind: "Literal", name: "width", value: 24 },
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
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "gender",
                  storageKey: null,
                },
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "created_time",
          storageKey: null,
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
  "CometUFISeenByCountText_feedback$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFISeenByCountText_feedback$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "SeenByConnection",
          kind: "LinkedField",
          name: "seen_by",
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
              alias: "i18n_seen_by_count",
              args: null,
              kind: "ScalarField",
              name: "seen_by_count_reduced",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "seen_by_everyone",
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
  "CometUFITypingIndicator_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "feedbackSource" }],
      kind: "Fragment",
      metadata: null,
      name: "CometUFITypingIndicator_feedback",
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
          args: [
            {
              kind: "Variable",
              name: "feedback_source_integer",
              variableName: "feedbackSource",
            },
          ],
          kind: "ScalarField",
          name: "is_eligible_for_real_time_updates",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "FeedbackTypersConnection",
          kind: "LinkedField",
          name: "feedback_typers",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "other_count",
              storageKey: null,
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
      ],
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIUnpinActionLink_feedback.graphql",
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
        name: "CometUFIUnpinActionLink_feedback",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_viewer_pin_live_comments",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "BroadcastPinnedCommentEvent",
            kind: "LinkedField",
            name: "latest_pinned_comment_event",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Comment",
                kind: "LinkedField",
                name: "pinned_comment",
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
            concreteType: "Video",
            kind: "LinkedField",
            name: "associated_video",
            plural: !1,
            selections: [
              a,
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
  "CometUFIViewOptionsSelector_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIViewOptionsSelector_feedback",
      selections: [
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
          kind: "ScalarField",
          name: "default_comment_ordering",
          storageKey: null,
        },
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
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
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
          concreteType: "CommentOrderOption",
          kind: "LinkedField",
          name: "localized_comment_orderings",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
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
              kind: "ScalarField",
              name: "value",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hide_transparency_enabled_for_actor",
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
  "CometUFICommentActionLinks_comment.graphql",
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
          name: "url",
          storageKey: null,
        },
        c = [b],
        d = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        e = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "feedLocation",
            },
            d,
          ],
          kind: "ScalarField",
          name: "can_viewer_comment",
          storageKey: null,
        };
      d = [d];
      var f = [a];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "feedLocation" },
          {
            defaultValue: "ORIGINAL",
            kind: "LocalArgument",
            name: "translationType",
          },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentActionLinks_comment",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIPageAdminPrivateReplyContext_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentErrorFooter_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIEditHistoryCommentActionLink_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIPageAdminActorInfo_comment",
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
            concreteType: null,
            kind: "LinkedField",
            name: "author",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: c,
                type: "Event",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: c,
                type: "Group",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: c,
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: c,
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
            name: "is_author_weak_reference",
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
              a,
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [e],
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
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIReactionLink_feedback",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIReactionLinkNext_feedback",
              },
              e,
              {
                alias: null,
                args: d,
                kind: "ScalarField",
                name: "can_viewer_react",
                storageKey: null,
              },
              {
                alias: null,
                args: d,
                kind: "ScalarField",
                name: "comment_composer_placeholder",
                storageKey: null,
              },
              {
                alias: null,
                args: d,
                concreteType: null,
                kind: "LinkedField",
                name: "viewer_actor",
                plural: !1,
                selections: f,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          a,
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
                args: d,
                concreteType: "Page",
                kind: "LinkedField",
                name: "viewer_acts_as_page",
                plural: !1,
                selections: f,
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
            args: [
              {
                kind: "Variable",
                name: "translation_type",
                variableName: "translationType",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "preferred_body",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "translation_type",
                storageKey: null,
              },
            ],
            storageKey: null,
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
          b,
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIBanActorLink_comment",
          },
          {
            alias: null,
            args: null,
            concreteType: "Comment",
            kind: "LinkedField",
            name: "if_viewer_can_share",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "CometUFICommentActionLinks_comment__if_viewer_can_share",
                fragmentName: "CometUFICommentShareActionLink_comment",
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
                fragmentName: "CometUFICommentAwardActionLink_comment",
                fragmentPropName: "comment",
                kind: "ModuleImport",
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
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_viewer_see_privacy_status",
                storageKey: null,
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
                name: "optimistic_action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "optimistic_error",
                storageKey: null,
              },
            ],
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
  "CometUFICommentActionLinks_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "useDefaultActor" }],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentActionLinks_feedback",
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
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
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
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIPinActionLink_feedback",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIUnpinActionLink_feedback",
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
              name: "broadcast_is_ama_enabled_with_comments",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "WorkAMAUFIAnswerEventActionLinksCommentModuleRenderer",
          kind: "LinkedField",
          name: "work_answer_event_action_links_comment_renderer",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "CometUFICommentActionLinks_feedback_work_answer_event_action_links_comment_renderer",
              fragmentName: "GeminiUFIAMABroadcastAnswerActionLinks_feedback",
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
          name: "is_hide_transparency_enabled_for_actor",
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
  "CometUFIPageAdminActorInfo_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIPageAdminActorInfo_comment",
      selections: [
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
      ],
      type: "Comment",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIPageAdminPrivateReplyContext_comment.graphql",
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
        name: "CometUFIPageAdminPrivateReplyContext_comment",
        selections: [
          a,
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
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFICommentPrivateReplyLink_feedback",
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
                concreteType: null,
                kind: "LinkedField",
                name: "viewer_actor",
                plural: !1,
                selections: [a],
                storageKey: null,
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
  "CometFeedStoryUFICommentAttachment_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryUFICommentAttachment_attachment",
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
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
                  documentName: "CometFeedStoryUFICommentAttachment_attachment",
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
      ],
      type: "StoryAttachment",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryUFICommentAttachments_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryUFICommentAttachments_comment",
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
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryUFICommentAttachment_attachment",
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
      type: "Comment",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentPrivateReplyLink_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentPrivateReplyLink_feedback",
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
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometUFICommentPrivateReplyLink_feedback",
                      fragmentName:
                        "CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer",
                      fragmentPropName: "privateReplyCometRenderer",
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
                      documentName: "CometUFICommentPrivateReplyLink_feedback",
                      fragmentName:
                        "BizInboxCommentPrivateReplyLinkRenderer_privateReplyBizRenderer",
                      fragmentPropName: "privateReplyBizRenderer",
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
      ],
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometUFIComposerPlugins_feedback.graphql",
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
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "emoji_size",
            storageKey: null,
          },
        ],
        e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "group_id",
            storageKey: null,
          },
        ],
        f = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: b,
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "feedback_id",
          storageKey: null,
        },
        h = [g];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "useCometUFIComposerPlugins_feedback",
        selections: [
          {
            alias: "plugins",
            args: [
              {
                kind: "Variable",
                name: "feed_location",
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
            name: "comment_composer_plugins",
            plural: !0,
            selections: [
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerParticipateQuestionPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Group",
                        kind: "LinkedField",
                        name: "group",
                        plural: !1,
                        selections: b,
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerParticipationQuestionPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName:
                      "cometUFIComposerParticipateQuestionPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerParticipationQuestionPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerPrivacyInterstitialPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Group",
                        kind: "LinkedField",
                        name: "group",
                        plural: !1,
                        selections: [
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "can_viewer_see_sharing_privacy_interstitial",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: [
                              {
                                kind: "Literal",
                                name: "source",
                                value: "GROUP_COMMENT",
                              },
                            ],
                            kind: "ScalarField",
                            name: "sharing_privacy_interstitial_title",
                            storageKey:
                              'sharing_privacy_interstitial_title(source:"GROUP_COMMENT")',
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "TextWithEntities",
                            kind: "LinkedField",
                            name: "sharing_privacy_interstitial_description",
                            plural: !1,
                            selections: c,
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerPrivacyInterstitialPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName:
                      "cometUFIComposerPrivacyInterstitialPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerPrivacyInterstitialPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName:
                      "cometUFIComposerCommentCharacterLimitPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerCommentCharacterLimitPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerTipPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "composer_tip",
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerTipPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerTipPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerTipPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerProfilePlusTipPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "platform_tool",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "viewer_name",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "additional_profile_name",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "viewer_admin_type",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "post_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "delegate_page_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "feed_object_identifier",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "additional_profile_id",
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerProfilePlusTipPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerProfilePlusTipPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerProfilePlusTipPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerDelightsPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerDelightsPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerEmojiPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: d,
                    type: "CommentComposerEmojiPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerEmojiPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerEmojiPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerGroupMentionsPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: e,
                    type: "CommentComposerGroupMentionsPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerGroupMentionsPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerGroupMentionsPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerGroupRulesMentionsPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: e,
                    type: "CommentComposerGroupRulesMentionsPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName:
                      "cometUFIComposerGroupRulesMentionsPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerGroupRulesMentionsPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerMentionsPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "mentions_datasource_js_constructor_args_json",
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerMentionsPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerMentionsPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerMentionsPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerHashtagPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerHashtagPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerMediaUploadPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [f],
                    type: "CommentComposerMediaUploadPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerMediaUploadPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerMediaUploadPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerEmoticonPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: d,
                    type: "CommentComposerEmoticonPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerEmoticonPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerEmoticonPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerGIFPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: h,
                    type: "CommentComposerGIFPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerGIFPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerGIFPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerStarsPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: h,
                    type: "CommentComposerStarsPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerStarsPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerStarsPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerBotsComposerPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Group",
                        kind: "LinkedField",
                        name: "associated_group",
                        plural: !1,
                        selections: b,
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerBotsComposerPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerBotsComposerPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerBotsComposerPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerStickersPlugin_next_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      g,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "owning_profile_id",
                        storageKey: null,
                      },
                    ],
                    type: "CometComposerCometizedStickersPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerStickersPlugin_next_plugin",
                    fragmentPropName: "next_plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometComposerCometizedStickersPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerPrefillMentionPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerPrefillMentionPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName:
                      "cometUFIComposerAssociateReplyWithParentPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerAssociateReplyWithParentPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName:
                      "cometUFIComposerSetReplyClickedPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerSetReplyClickedPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerAvatarPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "has_avatar",
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerAvatarPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerAvatarPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerAvatarPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerStateSnapshotPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerStateSnapshotPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerLiveTypingBroadcastPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [g, f],
                    type: "CommentComposerLiveTypingBroadcastPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName:
                      "cometUFIComposerLiveTypingBroadcastPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerLiveTypingBroadcastPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerMarkdownPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: h,
                    type: "CommentComposerMarkdownPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerMarkdownPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerMarkdownPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerFileUploadPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      f,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_viewer_comment_with_file",
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerFileUploadPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerFileUploadPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerFileUploadPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerSmartComposePlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: h,
                    type: "CommentComposerSmartComposePlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerSmartComposePlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerSmartComposePlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerUnifiedInputPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
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
                            name: "can_viewer_comment_with_gif",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "can_viewer_comment_with_sticker",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "owning_profile",
                            plural: !1,
                            selections: b,
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerUnifiedInputPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerUnifiedInputPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerUnifiedInputPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerSubmitPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommetComposerSubmitPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerGroupRulesPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: e,
                    type: "CommentComposerGroupRulesPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerGroupRulesPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerGroupRulesPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerQPNUXPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "QuickPromotion",
                        kind: "LinkedField",
                        name: "promotion",
                        plural: !1,
                        selections: [
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "encrypted_logging_data",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "QuickPromotionCreative",
                            kind: "LinkedField",
                            name: "creatives",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "TextWithEntities",
                                kind: "LinkedField",
                                name: "title",
                                plural: !1,
                                selections: c,
                                storageKey: null,
                              },
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
                                name: "last_seen_client",
                                storageKey: null,
                              },
                            ],
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "trigger",
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerQPNUXPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerQPNUXPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerQPNUXPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerFactPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      g,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "fact_type",
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerFactPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName: "cometUFIComposerFactPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerFactPlugin",
                abstractKey: null,
              },
              {
                kind: "InlineDataFragmentSpread",
                name: "cometUFIComposerReputationSystemPlugin_pluginData",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_inline_vote_enabled",
                        storageKey: null,
                      },
                    ],
                    type: "CommentComposerReputationSystemPlugin",
                    abstractKey: null,
                  },
                ],
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useCometUFIComposerPlugins_feedback",
                    fragmentName:
                      "cometUFIComposerReputationSystemPlugin_plugin",
                    fragmentPropName: "plugin",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentComposerReputationSystemPlugin",
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
  "isCommentNewSinceLastGroupVisit_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "isCommentNewSinceLastGroupVisit_comment",
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometUFIDisabledNotice_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometUFIDisabledNotice_feedback",
      selections: [
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
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentDisabledNotice_feedback",
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
  "CometUFIViewOptions_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIViewOptions_feedback",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIViewOptionsSelector_feedback",
        },
        {
          alias: "unfiltered_comment_count",
          args: [
            { kind: "Literal", name: "orderby", value: "ranked_unfiltered" },
          ],
          concreteType: "TopLevelCommentsConnection",
          kind: "LinkedField",
          name: "top_level_comments",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_empty",
              storageKey: null,
            },
          ],
          storageKey: 'top_level_comments(orderby:"ranked_unfiltered")',
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
  "isCommentTokenOrFBID_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "isCommentTokenOrFBID_comment",
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
          name: "legacy_fbid",
          storageKey: null,
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
  "UFIStopWatch",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "COUNTING",
      h = "PAUSED";
    a = (function () {
      function a() {
        (this.$1 = h), (this.$2 = 0), (this.$3 = 0);
      }
      var b = a.prototype;
      b.start = function () {
        if (this.$1 === g) return this;
        this.$1 = g;
        this.$3 = Date.now();
        return this;
      };
      b.pause = function () {
        if (this.$1 === h) return this;
        this.$1 = h;
        this.$2 += Date.now() - this.$3;
        return this;
      };
      b.reset = function () {
        this.$2 = 0;
        this.$3 = 0;
        this.$1 == g && (this.$3 = Date.now());
        return this;
      };
      b.state = function () {
        return this.$1;
      };
      b.milliseconds = function () {
        var a = 0;
        this.$1 === g && (a = Date.now() - this.$3);
        return this.$2 + a;
      };
      b.getStartTime = function () {
        return this.$3;
      };
      return a;
    })();
    a.COUNTING = g;
    a.PAUSED = h;
    f["default"] = a;
  },
  66
);
__d(
  "CometUFIComposerInner.react",
  ["cr:11236", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react"), (g["default"] = b("cr:11236"));
  },
  98
);
__d(
  "CometUFIComposer.react",
  [
    "BaseScrollableAreaContext",
    "CometRelay",
    "CometUFIComposerInner.react",
    "CometUFIComposer_actor.graphql",
    "CometUFIComposer_feedback.graphql",
    "react",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useContext;
    function a(a, e) {
      var f = a.actor,
        g = a.componentRef,
        l = a.feedback;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "actor",
        "componentRef",
        "feedback",
      ]);
      f = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometUFIComposer_actor.graphql")),
        f
      );
      l = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFIComposer_feedback.graphql")),
        l
      );
      var m = d("CometRelay").useRelayEnvironment(),
        n = k(c("BaseScrollableAreaContext"));
      n = n.length === 0 ? void 0 : n[n.length - 1];
      return j.jsx(
        c("CometUFIComposerInner.react"),
        babelHelpers["extends"]({}, a, {
          actor: f,
          environment: m,
          feedback: l,
          nearestScrollableArea: n,
          ref: c("useMergeRefs")(e, g),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometDefaultCommentListComposer.react",
  [
    "CometDefaultCommentListComposer_renderer.graphql",
    "CometRelay",
    "CometUFIComposer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.composerPluginProps,
        f = a.getComposerProps,
        g = a.renderer,
        j = a.viewOption;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "composerPluginProps",
        "getComposerProps",
        "renderer",
        "viewOption",
      ]);
      g = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometDefaultCommentListComposer_renderer.graphql")),
        g
      );
      g = g.feedback;
      g = g == null ? void 0 : g.viewer_actor;
      return g == null || j === "ADMIN_HIDDEN"
        ? null
        : i.jsx(
            c("CometUFIComposer.react"),
            babelHelpers["extends"]({ actor: g }, e, f(), a)
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIBanActorLink.react",
  [
    "fbt",
    "CometLink.react",
    "CometRelay",
    "CometUFIBanActorLink_comment.graphql",
    "RelayHooks",
    "UFI2CommentActionLinks.react",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = c("requireDeferred")("CometUFIBanActorMutation").__setRef(
        "CometUFIBanActorLink.react"
      );
    function a(a) {
      var e = a.comment;
      a = a.xstyle;
      var f = d("RelayHooks").useFragment(
          i !== void 0 ? i : (i = b("CometUFIBanActorLink_comment.graphql")),
          e
        ),
        g = d("CometRelay").useRelayEnvironment(),
        l =
          f == null ? void 0 : (e = f.parent_feedback) == null ? void 0 : e.id,
        m =
          f == null
            ? void 0
            : (e = f.parent_feedback) == null
            ? void 0
            : (e = e.viewer_acts_as_page) == null
            ? void 0
            : e.id,
        n = f == null ? void 0 : (e = f.author) == null ? void 0 : e.id;
      return m == null || n == null
        ? null
        : j.jsx(d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem, {
            children: j.jsx(c("CometLink.react"), {
              href: "#",
              onClick: function () {
                k.onReadyImmediately(function (a) {
                  a.commit(g, {
                    feedbackId: l,
                    pageId: m,
                    targetUserId: n,
                    undoBan: Boolean(f.is_author_banned_by_content_owner),
                  });
                });
              },
              role: "button",
              xstyle: a,
              children:
                (f == null ? void 0 : f.is_author_banned_by_content_owner) ===
                !0
                  ? h._("Unban {name}", [
                      h._param(
                        "name",
                        (e = f.author) == null ? void 0 : e.name
                      ),
                    ])
                  : h._("Ban {name}", [
                      h._param(
                        "name",
                        (a = f.author) == null ? void 0 : a.name
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
  "CometFeedStoryUFICommentAttachment.react",
  [
    "CometFeedStoryUFICommentAttachment_attachment.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var c = a.actorID,
        e = a.attachment,
        f = a.commentId_FOR_DEBUGGING_ONLY;
      a = a.storyRenderLocation;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryUFICommentAttachment_attachment.graphql")),
        e
      );
      e = e.style_type_renderer;
      return e != null
        ? i.jsx(d("CometRelay").MatchContainer, {
            match: e,
            props: {
              actorID: c,
              commentId_FOR_DEBUGGING_ONLY: f,
              storyRenderLocation: a,
            },
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryUFICommentAttachments.react",
  [
    "CometFeedStoryUFICommentAttachment.react",
    "CometFeedStoryUFICommentAttachments_comment.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.comment;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["comment"]);
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryUFICommentAttachments_comment.graphql")),
        e
      );
      var f = e.attachments[0];
      return f == null
        ? null
        : i.jsx(
            c("CometFeedStoryUFICommentAttachment.react"),
            babelHelpers["extends"](
              {
                attachment: f,
                commentId_FOR_DEBUGGING_ONLY: (f = e.id) != null ? f : void 0,
              },
              a
            )
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentEditHistoryDialog.entrypoint",
  [
    "CometUFICommentEditHistoryDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.commentID;
        return {
          queries: {
            root: {
              options: { fetchPolicy: "network-only" },
              parameters: b("CometUFICommentEditHistoryDialogQuery$Parameters"),
              variables: { commentID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometUFICommentEditHistoryDialog.react"
      ).__setRef("CometUFICommentEditHistoryDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIEditHistoryCommentActionLink.react",
  [
    "fbt",
    "CometLink.react",
    "CometRelay",
    "CometTooltip.react",
    "CometUFICommentEditHistoryDialog.entrypoint",
    "CometUFIEditHistoryCommentActionLink_comment.graphql",
    "react",
    "recoverableViolation",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = { link: { color: "m9osqain" } };
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometUFIEditHistoryCommentActionLink_comment.graphql")),
        a.comment
      );
      var e = a.id;
      a = c("useCometEntryPointDialog")(
        c("CometUFICommentEditHistoryDialog.entrypoint"),
        e != null ? { commentID: e } : null,
        "button"
      );
      var f = a[0],
        g = a[1],
        m = a[2],
        n = a[3];
      a = a[4];
      var o = k(
        function () {
          if (e == null) {
            c("recoverableViolation")(
              "Cannot open dialog for comment without an ID",
              "ufi2"
            );
            return;
          }
          f({});
        },
        [e, f]
      );
      o = j.jsx(c("CometTooltip.react"), {
        tooltip: h._("Show edit history"),
        children: j.jsx(c("CometLink.react"), {
          onClick: o,
          onHoverEnd: n,
          onHoverStart: m,
          onPressStart: a,
          ref: g,
          testid: void 0,
          xstyle: l.link,
          children: h._("Edited"),
        }),
      });
      return o;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIPageAdminActorInfo.react",
  [
    "CometPlaceholder.react",
    "CometProgressIndicator.react",
    "CometRelay",
    "CometUFIPageAdminActorInfo_comment.graphql",
    "UFI2CommentActionLinks.react",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = c("deferredLoadComponent")(
        c("requireDeferred")("CometUFICreatorInfo.react").__setRef(
          "CometUFIPageAdminActorInfo.react"
        )
      );
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometUFIPageAdminActorInfo_comment.graphql")),
        a.comment
      );
      a = a.page_admin_actor_info;
      return a == null ||
        a.creator_id == null ||
        a.creator_name == null ||
        a.creator_type == null ||
        a.label_type == null ||
        a.page_id == null ||
        a.profile_uri == null
        ? null
        : i.jsx(
            d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
            {
              children: i.jsx(c("CometPlaceholder.react"), {
                fallback: i.jsx(c("CometProgressIndicator.react"), {
                  size: "small",
                }),
                children: i.jsx(j, {
                  creatorID: a.creator_id,
                  creatorName: a.creator_name,
                  creatorType: a.creator_type,
                  labelType: a.label_type,
                  pageID: a.page_id,
                  profileURI: a.profile_uri,
                }),
              }),
            },
            "pageAdminActorInfo"
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentPrivateReplyLink.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "CometUFICommentPrivateReplyLink_feedback.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("CometUFICommentPrivateReplyLink_feedback.graphql"));
    function a(a) {
      var b = a.commentID,
        e = a.feedback,
        f = a.feedbackSource;
      a = a.xstyle;
      e = d("CometRelay").useFragment(j, e);
      var g = e == null ? void 0 : e.id;
      return b == null || g == null
        ? null
        : i.jsx(c("CometErrorBoundary.react"), {
            children: i.jsx(d("CometRelay").MatchContainer, {
              match:
                e == null
                  ? void 0
                  : (e = e.page_private_reply) == null
                  ? void 0
                  : e.private_reply_render,
              props: {
                commentID: b,
                feedbackID: g,
                feedbackSource: f,
                xstyle: a,
              },
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIPageAdminPrivateReplyContext.react",
  [
    "CometRelay",
    "CometUFICommentPrivateReplyLink.react",
    "CometUFIPageAdminPrivateReplyContext_comment.graphql",
    "UFI2CommentActionLinks.react",
    "UFI2PrivateReplyIndicator.react",
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
            : (h = b("CometUFIPageAdminPrivateReplyContext_comment.graphql")),
          a.comment
        ),
        g = f == null ? void 0 : f.id,
        j = f == null ? void 0 : f.feedback;
      e = j == null ? void 0 : (e = j.viewer_actor) == null ? void 0 : e.id;
      e =
        e != null &&
        (f == null
          ? void 0
          : (e = f.private_reply_context) == null
          ? void 0
          : e.has_reply_permission) === !0;
      return !e &&
        c("UFI2PrivateReplyIndicator.react").shouldRender(
          f == null
            ? void 0
            : (f = f.private_reply_context) == null
            ? void 0
            : f.status
        )
        ? i.jsx(
            d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
            { children: i.jsx(c("UFI2PrivateReplyIndicator.react"), {}) },
            "pageAdminPrivateReplyContext"
          )
        : j != null && e
        ? i.jsx(
            d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
            {
              children: i.jsx(c("CometUFICommentPrivateReplyLink.react"), {
                commentID: g,
                feedback: j,
                feedbackSource: a.feedbackSource,
                xstyle: a.xstyle,
              }),
            },
            "pageAdminPrivateReply"
          )
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIPinActionLink.react",
  [
    "fbt",
    "CometLink.react",
    "CometRelay",
    "CometUFIPinActionLink_feedback.graphql",
    "UFI2CommentActionLinks.react",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = c("requireDeferred")("CometUFIPinCommentMutation").__setRef(
        "CometUFIPinActionLink.react"
      ),
      m = function (a) {
        return a === "LIVE_PRODUCER" || a === "LIVE_EVENT" || a === "TAHOE"
          ? !0
          : !1;
      };
    function a(a) {
      var e,
        f,
        g = a.commentID,
        n = a.disabled,
        o = a.feedback$key,
        p = a.feedLocation;
      a = a.xstyle;
      o = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFIPinActionLink_feedback.graphql")),
        o
      );
      var q = o == null ? void 0 : o.id,
        r =
          o == null ? void 0 : (e = o.associated_video) == null ? void 0 : e.id;
      e =
        (e =
          o == null
            ? void 0
            : (e = o.associated_video) == null
            ? void 0
            : e.is_gaming_video) != null
          ? e
          : !1;
      var s = d("CometRelay").useRelayEnvironment(),
        t = k(
          function () {
            if (q == null || r == null) return;
            l.onReady(function (a) {
              a.commit(s, { commentID: g, feedbackID: q, videoID: r });
            });
          },
          [g, q, s, r]
        );
      if (
        (o == null ? void 0 : o.can_viewer_pin_live_comments) !== !0 ||
        (o == null
          ? void 0
          : (f = o.latest_pinned_comment_event) == null
          ? void 0
          : (f = f.pinned_comment) == null
          ? void 0
          : f.id) === g ||
        r == null ||
        (o == null
          ? void 0
          : (f = o.associated_video) == null
          ? void 0
          : f.broadcast_is_ama_enabled) === !0 ||
        (o == null
          ? void 0
          : (f = o.associated_video) == null
          ? void 0
          : f.broadcast_status) !== "LIVE" ||
        (e && p === "TAHOE")
      )
        return null;
      return !m(p)
        ? null
        : j.jsx(d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem, {
            children: j.jsx(c("CometLink.react"), {
              disabled: n,
              href: "#",
              onClick: t,
              role: "button",
              testid: void 0,
              xstyle: a,
              children: h._("Pin"),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIRemovePreviewMutation",
  ["CometRelay", "CometUFIRemovePreviewMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUFIRemovePreviewMutation.graphql"));
    function a(a, b) {
      var c = { comment_id: b.commentID };
      c = { input: babelHelpers["extends"]({}, c) };
      b = {
        comment_delete_attachment: {
          comment: {
            attached_story: null,
            attachments: [],
            can_viewer_disable_preview: !1,
            id: b.commentID,
          },
        },
      };
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        optimisticResponse: b,
        variables: c,
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometUFIUnhideCommentLink.react",
  [
    "fbt",
    "CometPressable.react",
    "react",
    "requireDeferred",
    "useCometUnhideToastMessage",
    "useCometUnhideToastMessageNoop",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("requireDeferred")("CometUFIHideCommentMutation").__setRef(
        "CometUFIUnhideCommentLink.react"
      ),
      k = c("requireDeferred")("CometUFIUnhideCommentMutation").__setRef(
        "CometUFIUnhideCommentLink.react"
      );
    function a(a) {
      var b = a.commentId,
        d = a.environment,
        e = a.feedbackSource,
        f = a.feedLocation,
        g = a.isHiddenCommentsTransparencyEnabled;
      a = a.xstyle;
      g = g
        ? c("useCometUnhideToastMessage")
        : c("useCometUnhideToastMessageNoop");
      var l = function () {
          j.onReadyImmediately(function (a) {
            a.commit(d, {
              commentId: b,
              feedLocation: f,
              feedbackSource: e,
              onError: function () {},
            });
          });
        },
        m = g(l);
      return i.jsx(c("CometPressable.react"), {
        display: "inline",
        onPress: function () {
          k.onReadyImmediately(function (a) {
            a.commit(d, {
              commentId: b,
              feedLocation: f,
              feedbackSource: e,
              isComet: !0,
              onCompleted: m,
            });
          });
        },
        role: "button",
        testid: void 0,
        xstyle: a,
        children: h._("Unhide"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIUnpinActionLink.react",
  [
    "fbt",
    "CometLink.react",
    "CometRelay",
    "CometUFIUnpinActionLink_feedback.graphql",
    "UFI2CommentActionLinks.react",
    "react",
    "requireDeferred",
    "useCometUFIVideoPlayerStateAndController",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = c("requireDeferred")("CometUFIUnpinCommentMutation").__setRef(
        "CometUFIUnpinActionLink.react"
      ),
      m = function (a) {
        return a === "LIVE_PRODUCER" || a === "LIVE_EVENT" || a === "TAHOE"
          ? !0
          : !1;
      };
    function a(a) {
      var e,
        f,
        g = a.commentID,
        n = a.disabled,
        o = a.feedback$key,
        p = a.feedLocation;
      a = a.xstyle;
      o = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFIUnpinActionLink_feedback.graphql")),
        o
      );
      var q = o == null ? void 0 : o.id,
        r =
          o == null ? void 0 : (e = o.associated_video) == null ? void 0 : e.id,
        s = d("CometRelay").useRelayEnvironment(),
        t =
          (e = c("useCometUFIVideoPlayerStateAndController")()) == null
            ? void 0
            : e.controller;
      e = k(
        function () {
          if (q == null || r == null) return;
          l.onReady(function (a) {
            a.commit(s, {
              feedbackID: q,
              video_time_offset: t == null ? void 0 : t.getPlayheadPosition(),
              videoID: r,
            });
          });
        },
        [q, s, t, r]
      );
      if (
        (o == null ? void 0 : o.can_viewer_pin_live_comments) !== !0 ||
        (o == null
          ? void 0
          : (f = o.latest_pinned_comment_event) == null
          ? void 0
          : (f = f.pinned_comment) == null
          ? void 0
          : f.id) !== g ||
        r == null ||
        (o == null
          ? void 0
          : (f = o.associated_video) == null
          ? void 0
          : f.broadcast_is_ama_enabled) === !0
      )
        return null;
      return !m(p)
        ? null
        : j.jsx(d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem, {
            children: j.jsx(c("CometLink.react"), {
              disabled: n,
              href: "#",
              onClick: e,
              role: "button",
              testid: void 0,
              xstyle: a,
              children: h._("Unpin"),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentActionLinks.react",
  [
    "fbt",
    "BaseButton.react",
    "CometLink.react",
    "CometPlaceholder.react",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "CometTimestamp.react",
    "CometTooltip.react",
    "CometTrackingNodeProvider.react",
    "CometUFIBanActorLink.react",
    "CometUFICommentActionLinks_comment.graphql",
    "CometUFICommentActionLinks_feedback.graphql",
    "CometUFIEditHistoryCommentActionLink.react",
    "CometUFIPageAdminActorInfo.react",
    "CometUFIPageAdminPrivateReplyContext.react",
    "CometUFIPinActionLink.react",
    "CometUFIRemovePreviewMutation",
    "CometUFIUnhideCommentLink.react",
    "CometUFIUnpinActionLink.react",
    "FBLogger",
    "UFI2CommentActionLinks.react",
    "UFICommonInteractionEvents",
    "UFIReactionTypes",
    "cr:1593999",
    "cr:1594000",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react"),
      l = c("deferredLoadComponent")(
        c("requireDeferred")("CometUFICommentErrorFooter.react").__setRef(
          "CometUFICommentActionLinks.react"
        )
      ),
      m = 700,
      n = 850,
      o = {
        actionLinks: {
          marginBottom: "oygrvhab",
          marginStart: "ozuftl9m",
          minHeight: "l66bhrea",
          paddingTop: "linoseic",
        },
        actionRoot: {
          color: "m9osqain",
          cursor: "nhd2j8a9",
          display: "q9uorilb",
          fontWeight: "n3ffmt46",
          position: "l9j0dhe7",
          ":hover": { textDecoration: "gpro0wi8" },
        },
        actionRootDisabled: {
          color: "erlsw9ld",
          cursor: "tf0xghai",
          ":hover": { textDecoration: "p8dawk7l" },
        },
        reactionLinkWrapper: { display: "q9uorilb" },
        timestamp: { color: "m9osqain", fontWeight: "knj5qynh" },
      };
    function a(a) {
      return k.jsx(d("UFI2CommentActionLinks.react").UFI2CommentActionLinks, {
        className: c("stylex")(o.actionLinks),
        listRef: a.actionLinksListRef,
        children: k.jsx(p, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function p(a) {
      var e,
        f,
        g,
        p,
        q = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometUFICommentActionLinks_comment.graphql")),
          a.comment
        ),
        r = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("CometUFICommentActionLinks_feedback.graphql")),
          a.feedback
        ),
        s = a.environment,
        t = a.feedbackSource,
        u = a.feedLocation,
        v = a.handleOnReply,
        w = a.handleTranslationClick,
        x = a.hasRemovableAttachment,
        y = a.hideReplyActionLink,
        z = a.isFetchingTranslation,
        A = q.author,
        B = q.created_time,
        C = q.feedback,
        D = q.id;
      function E() {
        if (v == null) return;
        var a = q.id,
          b = q.is_author_weak_reference;
        if (
          (A == null ? void 0 : A.__typename) != null &&
          (A == null ? void 0 : A.id) != null &&
          (A == null ? void 0 : A.name) != null &&
          a != null
        ) {
          v({
            authorId: A.id,
            authorIsWeakReference: !!b,
            authorName: A.name,
            authorType: A.__typename,
            authorUrl: (b = A == null ? void 0 : A.url) != null ? b : "",
            commentComposerPlaceholderText:
              (b = q.feedback) == null
                ? void 0
                : b.comment_composer_placeholder,
            commentId: a,
          });
        }
      }
      if (A == null) {
        var F;
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "COMMENT_ID", (F = D) != null ? F : "UNKNOWN")
          .mustfix("UFI2Comment: Cant render comment without author");
        return null;
      }
      if (D == null) {
        c("FBLogger")("ufi2").mustfix(
          "UFI2Comment: Cant render action links without a comment id"
        );
        return null;
      }
      F = (F = r.viewer_actor) == null ? void 0 : F.id;
      var G = q.spam_display_mode != null && q.spam_display_mode !== "none",
        H =
          (r == null ? void 0 : r.is_hide_transparency_enabled_for_actor) ===
          !0;
      e = (e = q.preferred_body) == null ? void 0 : e.translation_type;
      f =
        (f = q.translatability_for_viewer) == null
          ? void 0
          : f.source_dialect_name;
      var I = q.comment_privacy_value === "PENDING_APPROVAL",
        J = q.if_declined_by_group_admin_assistant != null,
        K =
          a.topLevelViewOption === "ADMIN_HIDDEN" ||
          a.viewOption === "ADMIN_HIDDEN";
      B =
        B != null
          ? k.jsx(c("CometTooltip.react"), {
              tooltip: c("CometTimestamp.react").getAbsoluteTimestamp(
                new Date(B * 1e3)
              ),
              children: k.jsx(c("CometRelativeTimestamp.react"), {
                date: new Date(B * 1e3),
                format: "minimized",
              }),
            })
          : null;
      var L = Boolean(q == null ? void 0 : q.optimistic_action);
      if (q.optimistic_error != null)
        return k.jsx(
          c("CometPlaceholder.react"),
          {
            fallback: null,
            children: k.jsx(l, { comment: q, onEdit: a.onEdit }),
          },
          "optimisticAction"
        );
      var M = null;
      !G &&
        C != null &&
        (q == null ? void 0 : q.if_viewer_can_upvote_downvote) != null &&
        (M = k.jsx(d("CometRelay").MatchContainer, {
          match: q == null ? void 0 : q.if_viewer_can_upvote_downvote,
          props: {
            feedLocation: u,
            isOptimistic: L,
            wrapperRenderStrategy: function (a) {
              return a != null
                ? k.jsx(
                    d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                    { children: a },
                    "voteButtons"
                  )
                : null;
            },
          },
        }));
      var N = [o.actionRoot, L && o.actionRootDisabled],
        O = null;
      !G &&
        C != null &&
        (q == null ? void 0 : q.if_viewer_can_award) != null &&
        (O = k.jsx(d("CometRelay").MatchContainer, {
          match: q == null ? void 0 : q.if_viewer_can_award,
          props: { xstyle: N },
        }));
      g =
        ((g = r.associated_video) == null
          ? void 0
          : g.broadcast_is_ama_enabled_with_comments) === !0 &&
        !q.is_ama_question;
      return k.jsxs(k.Fragment, {
        children: [
          (q == null
            ? void 0
            : (p = q.group_comment_info) == null
            ? void 0
            : p.can_viewer_see_privacy_status) === !0 && I
            ? k.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                { children: h._("Pending") },
                "pendingStatusText"
              )
            : null,
          k.jsx(d("CometRelay").MatchContainer, {
            match: q.if_viewer_can_learn_more_about_pending_comment,
            props: { feedLocation: u, xstyle: N },
          }),
          k.jsx(d("CometRelay").MatchContainer, {
            match: q.if_declined_by_group_admin_assistant,
            props: { feedLocation: u, xstyle: N },
          }),
          (q == null
            ? void 0
            : (p = q.parent_feedback) == null
            ? void 0
            : p.can_viewer_ban_user) === !0 &&
          (q == null
            ? void 0
            : (p = q.parent_feedback) == null
            ? void 0
            : (p = p.viewer_acts_as_page) == null
            ? void 0
            : p.id) != null &&
          (q == null ? void 0 : q.ban_action) !== "BLOCK" &&
          G
            ? k.jsx(
                c("CometUFIBanActorLink.react"),
                { comment: q, xstyle: o.actionRoot },
                "banLink"
              )
            : null,
          G &&
          F != null &&
          (q == null ? void 0 : q.is_author_banned_by_content_owner) === !1
            ? k.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                {
                  children: k.jsx(
                    c("CometUFIUnhideCommentLink.react"),
                    {
                      commentId: D,
                      environment: s,
                      feedLocation: u,
                      feedbackSource: t,
                      isHiddenCommentsTransparencyEnabled: H,
                      xstyle: o.actionRoot,
                    },
                    "unhideLink"
                  ),
                },
                "unhideLink"
              )
            : null,
          M,
          !G &&
          C != null &&
          !J &&
          ((p = q.feedback) == null ? void 0 : p.can_viewer_react) === !0 &&
          !K
            ? k.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                {
                  children: k.jsx("span", {
                    className: c("stylex")(o.reactionLinkWrapper),
                    "data-testid": void 0,
                    children: L
                      ? k.jsx("span", {
                          className: c("stylex")(
                            o.actionRoot,
                            o.actionRootDisabled
                          ),
                          children:
                            c("UFIReactionTypes").reactions[
                              c("UFIReactionTypes").LIKE
                            ].display_name,
                        })
                      : k.jsxs(k.Fragment, {
                          children: [
                            b("cr:1594000") &&
                              k.jsx(b("cr:1594000"), {
                                className: c("stylex")(o.actionRoot),
                                displayInlineBlock: !0,
                                feedback: C,
                                feedbackSource: t,
                                hideDelay: n,
                                interactionEvent: c(
                                  "UFICommonInteractionEvents"
                                ).COMET_UFI_COMMENT_REACTION,
                                showDelay: m,
                              }),
                            b("cr:1593999") &&
                              k.jsx(b("cr:1593999"), {
                                feedback: C,
                                feedbackSource: t,
                                hideDelay: n,
                                interactionEvent: c(
                                  "UFICommonInteractionEvents"
                                ).COMET_UFI_COMMENT_REACTION,
                                showDelay: m,
                              }),
                          ],
                        }),
                  }),
                },
                "reactLink"
              )
            : null,
          (v != null &&
            y !== !0 &&
            !G &&
            !J &&
            !K &&
            (((H = q.comment_parent) == null ? void 0 : H.id) == null
              ? ((M = q.feedback) == null ? void 0 : M.can_viewer_comment) ===
                !0
              : ((p = q.comment_parent) == null
                  ? void 0
                  : (C = p.feedback) == null
                  ? void 0
                  : C.can_viewer_comment) === !0)) ||
          q.optimistic_action === "ADD" ||
          q.optimistic_action === "EDIT"
            ? k.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                {
                  children: k.jsx(c("CometTrackingNodeProvider.react"), {
                    trackingNode: 339,
                    children: k.jsx(c("CometLink.react"), {
                      disabled: L,
                      href: "#",
                      onClick: E,
                      role: "button",
                      testid: void 0,
                      xstyle: N,
                      children:
                        a.viewOption === "LIVE_STREAMING" &&
                        ((y = q.comment_parent) == null ? void 0 : y.id) != null
                          ? h._("See Thread")
                          : h._("Reply"),
                    }),
                  }),
                },
                "replyLink"
              )
            : null,
          O,
          !G &&
            k.jsx(d("CometRelay").MatchContainer, {
              match: q.if_viewer_can_share,
              props: { feedLocation: u, xstyle: N },
            }),
          k.jsx(
            c("CometUFIPinActionLink.react"),
            {
              commentID: D,
              disabled: L,
              feedLocation: u,
              feedback$key: r,
              xstyle: N,
            },
            "pinLink"
          ),
          k.jsx(
            c("CometUFIUnpinActionLink.react"),
            {
              commentID: D,
              disabled: L,
              feedLocation: u,
              feedback$key: r,
              xstyle: N,
            },
            "unpinLink"
          ),
          k.jsx(d("CometRelay").MatchContainer, {
            match: q.qa_action_links_comment_renderer,
            props: { comment: q, feedLocation: u, xstyle: N },
          }),
          g === !1 &&
            k.jsx(d("CometRelay").MatchContainer, {
              match: r.work_answer_event_action_links_comment_renderer,
              props: {
                commentID: D,
                disabled: L,
                feedLocation: u,
                feedback: r,
                xstyle: N,
              },
            }),
          k.jsx(c("CometUFIPageAdminActorInfo.react"), { comment: q }),
          K && !G
            ? null
            : k.jsx(c("CometUFIPageAdminPrivateReplyContext.react"), {
                comment: q,
                feedbackSource: t,
                xstyle: o.actionRoot,
              }),
          q.translation_available_for_viewer === !0
            ? k.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                {
                  children: k.jsx(c("BaseButton.react"), {
                    disabled: z,
                    onClick: w,
                    xstyle: [o.actionRoot, Boolean(z) && o.actionRootDisabled],
                    children:
                      e === "MACHINE_TRANSLATION"
                        ? f != null
                          ? h._("See Original ({language})", [
                              h._param("language", f),
                            ])
                          : h._("See Original")
                        : h._("See Translation"),
                  }),
                },
                "translationLink"
              )
            : null,
          x && F != null
            ? k.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                {
                  children: k.jsx(c("CometLink.react"), {
                    href: "#",
                    onClick: function () {
                      d("CometUFIRemovePreviewMutation").commit(s, {
                        commentID: D,
                      });
                    },
                    role: "button",
                    testid: void 0,
                    xstyle: o.actionRoot,
                    children: h._("Remove Preview"),
                  }),
                },
                "removePreviewLink"
              )
            : null,
          !I &&
            k.jsx(
              d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
              {
                children: k.jsx(c("CometLink.react"), {
                  disabled: L,
                  href: q.url,
                  testid: void 0,
                  xstyle: [o.timestamp, L ? o.actionRootDisabled : null],
                  children: B,
                }),
              },
              "timestampLink"
            ),
          ((H = (J = q.edit_history) == null ? void 0 : J.count) != null
            ? H
            : 0) > 0
            ? k.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                {
                  children: k.jsx(
                    c("CometUFIEditHistoryCommentActionLink.react"),
                    { comment: q }
                  ),
                },
                "editHistoryLink"
              )
            : null,
        ],
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentActorName.react",
  [
    "CometRelay",
    "CometUFICommentActorLink.react",
    "CometUFICommentActorName_comment.graphql",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometUFICommentActorName_comment.graphql")),
        a.comment
      );
      var e = a.author;
      return e == null || a == null
        ? null
        : i.jsx(c("CometUFICommentActorLink.react"), {
            comment$key: a,
            kind: "link",
            children: i.jsx("span", {
              className: "pq6dq46d",
              children: i.jsx(c("TetraText.react"), {
                color:
                  (e == null
                    ? void 0
                    : (a = e.work_info) == null
                    ? void 0
                    : a.is_active_account) === !1
                    ? "secondary"
                    : void 0,
                type: "bodyLink4",
                children: e.name,
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
  "CometUFICommentBodyStandaloneEmoji.react",
  [
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometLineBreakTransform",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "CometUFICommentBodyStandaloneEmoji_comment.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = [
        c("CometEmoticonTransform")({ size: 32 }),
        c("CometEmojiTransform")({ size: 32 }),
        c("CometLineBreakTransform"),
      ];
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometUFICommentBodyStandaloneEmoji_comment.graphql")),
        a.comment
      );
      return i.jsx("span", {
        className: "aahdfvyu q9uorilb",
        "data-testid": void 0,
        children:
          a.preferred_body != null
            ? i.jsx(c("CometTextWithEntitiesRelay.react"), {
                maxLength: 420,
                maxLines: 3,
                textWithEntities: a.preferred_body,
                transforms: j,
                truncationStyle: "see-more",
                withLineBreaks: !0,
                withParagraphs: !0,
              })
            : null,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "AuthoritativeExpertBadgeClickedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("2051541");
    c = b("FalcoLoggerInternal").create(
      "authoritative_expert_badge_clicked",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "AuthoritativeExpertBadgeHoveredFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("2051542");
    c = b("FalcoLoggerInternal").create(
      "authoritative_expert_badge_hovered",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "CometUFICommentIdentityBadges.react",
  [
    "AuthoritativeExpertBadgeClickedFalcoEvent",
    "AuthoritativeExpertBadgeHoveredFalcoEvent",
    "CometIdentityBadges.react",
    "CometLazyDialogTrigger.react",
    "CometLink.react",
    "CometRelay",
    "CometUFICommentIdentityBadges_comment.graphql",
    "IdentityBadgeUtils",
    "JSResourceForInteraction",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = c("JSResourceForInteraction")(
        "CometIdentityBadgeInformationDialog.react"
      ).__setRef("CometUFICommentIdentityBadges.react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometUFICommentIdentityBadges_comment.graphql")),
          a.comment
        ),
        f = e == null ? void 0 : e.can_show_multiple_identity_badges;
      a = e == null ? void 0 : e.identity_badges_web;
      if (a == null || f == null) return null;
      var g = a.filter(function (a) {
        a = a.identity_badge_type;
        return a == null ? !1 : d("IdentityBadgeUtils").isBadgeTypeEligible(a);
      });
      if (g.length === 0) return null;
      var k = g.length === 1 || !(f === !0 && c("gkx")("890475")),
        l = function (a) {
          a.identity_badge_type === "authoritative_expert" &&
            c("AuthoritativeExpertBadgeClickedFalcoEvent").log(function () {
              var b;
              return {
                badge_text: a.text,
                comment_id: e == null ? void 0 : e.id,
                commenter_id:
                  e == null ? void 0 : (b = e.author) == null ? void 0 : b.id,
              };
            });
        },
        m = function (a) {
          a.identity_badge_type === "authoritative_expert" &&
            c("AuthoritativeExpertBadgeHoveredFalcoEvent").log(function () {
              var b;
              return {
                badge_text: a.text,
                comment_id: e == null ? void 0 : e.id,
                commenter_id:
                  e == null ? void 0 : (b = e.author) == null ? void 0 : b.id,
              };
            });
        };
      return i.jsx(c("CometLazyDialogTrigger.react"), {
        dialogProps: { badges: g, comment: e, useNewBadgeAssets: !1 },
        dialogResource: j,
        children: function (a, b) {
          return i.jsx(c("CometLink.react"), {
            "aria-label": "Identity Badges",
            onClick: function () {
              a(), k && l(g[0]);
            },
            onHoverEnd: function () {
              k && m(g[0]);
            },
            ref: b,
            children: i.jsx("div", {
              className: "tvmbv18p j83agx80 bp9cbjyn",
              children: k
                ? i.jsx(c("CometIdentityBadges.react"), {
                    canShowMultipleBadges: f,
                    extraCount: g.length - 1,
                    identityBadge: g[0],
                    shouldAppendText: !0,
                  })
                : g.map(function (a) {
                    return i.jsx(
                      c("CometIdentityBadges.react"),
                      {
                        canShowMultipleBadges: f,
                        extraCount: 0,
                        identityBadge: a,
                        shouldAppendText: !1,
                      },
                      a.identity_badge_type
                    );
                  }),
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
  "CometUFITimestampedCommentsContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "formatLanguageCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a != null ? a.replace("_", "-").replace("-XX", "") : void 0;
    }
    f["default"] = a;
  },
  66
);
__d(
  "isStandaloneEmoji",
  ["EmojiRenderer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 14,
      i = 3;
    function a(a) {
      if (!a || a.length > h * i) return !1;
      var b = d("EmojiRenderer").parse(a);
      if (!b) return !1;
      var c = 0;
      b.forEach(function (a) {
        c += a.length;
      });
      return a.length == c && b.length <= i;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentBody.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometTextLangContext",
    "CometUFICommentActorName.react",
    "CometUFICommentBodyStandaloneEmoji.react",
    "CometUFICommentBodyTextWithEntities.react",
    "CometUFICommentBody_comment.graphql",
    "CometUFICommentIdentityBadges.react",
    "CometUFITimestampedCommentsContext.react",
    "QE2Logger",
    "TetraText.react",
    "cr:1798299",
    "cr:1798300",
    "cr:1986326",
    "formatLanguageCode",
    "gkx",
    "isStandaloneEmoji",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useMemo,
      m = i !== void 0 ? i : (i = b("CometUFICommentBody_comment.graphql"));
    function a(a) {
      var e,
        f,
        g = a.comment,
        i = a.feedbackSource,
        n = a.hasHighlightApplied,
        o = a.isConstantHighlightEnabled,
        p = a.isHighlightable,
        q = a.shouldAlwaysHaveCommentBackground;
      q = q === void 0 ? !1 : q;
      var r = a.shouldTruncate,
        s = a.showReplyingToHeader;
      a = a.storyRenderLocation;
      g = d("CometRelay").useFragment(m, g);
      e = c("isStandaloneEmoji")(
        g == null ? void 0 : (e = g.preferred_body) == null ? void 0 : e.text
      );
      var t = g.preferred_body;
      t = e
        ? j.jsx("div", {
            children: j.jsx(c("CometUFICommentBodyStandaloneEmoji.react"), {
              comment: g,
            }),
          })
        : (t == null ? void 0 : t.__typename) === "TextWithEntities"
        ? j.jsx(c("CometUFICommentBodyTextWithEntities.react"), {
            shouldTruncate: r,
            textWithEntities: t,
          })
        : j.jsx(d("CometRelay").MatchContainer, {
            fallback: null,
            match: g.body_renderer,
            props: { shouldTruncate: r },
          });
      r =
        (r =
          g == null
            ? void 0
            : (r = g.comment_parent) == null
            ? void 0
            : (r = r.author) == null
            ? void 0
            : r.short_name) != null
          ? r
          : g == null
          ? void 0
          : (r = g.comment_parent) == null
          ? void 0
          : (r = r.author) == null
          ? void 0
          : r.name;
      var u = k(c("CometUFITimestampedCommentsContext.react"));
      u =
        u == null
          ? null
          : j.jsx(u, {
              timestamp: g.timestamp_in_video,
              writtenWhileLive: !!g.written_while_video_was_live,
            });
      var v = Boolean(g.body_renderer),
        w = g.work_ama_answer_status === "ANSWERED";
      q = !q && (!v || e);
      v = b("cr:1798300")(g, q);
      e = g.is_declined_by_group_admin_assistant === !0;
      var x = !1;
      o === !0 && (x = c("qex")._("1830112"));
      o = j.jsx(c("CometUFICommentActorName.react"), {
        className:
          "lrazzd5p" + (g.is_author_weak_reference === !0 ? " shfzb974" : ""),
        comment: g,
      });
      var y = !1;
      (g == null ? void 0 : g.is_gaming_video_comment) === !0 &&
        (d("QE2Logger").logExposureForUser("gvx_badge_ui_revamp"),
        b("cr:1986326") != null && (y = !0));
      var z = (f = g.preferred_body) == null ? void 0 : f.translation_type,
        A =
          (f = g.translatability_for_viewer) == null
            ? void 0
            : f.source_dialect;
      f = l(
        function () {
          return z !== "ORIGINAL" ? void 0 : c("formatLanguageCode")(A);
        },
        [A, z]
      );
      var B = c("gkx")("1962870");
      B = B && (a === "homepage_stream" || a === "group");
      return j.jsxs("div", {
        className: c("stylex").dedupe(
          {
            "background-color-1": "b3i9ofy5",
            "border-top-start-radius-1": "e72ty7fz",
            "border-top-end-radius-1": "qlfml3jp",
            "border-bottom-end-radius-1": "inkptoze",
            "border-bottom-start-radius-1": "qmr60zad",
            "box-sizing-1": "rq0escxv",
            "color-1": "oo9gr5id",
            "display-1": "q9uorilb",
            "margin-top-1": "kvgmc6g5",
            "margin-end-1": "cxmmr5t8",
            "margin-bottom-1": "oygrvhab",
            "margin-start-1": "hcukyx3x",
            "max-width-1": "d2edcug0",
            "overflow-wrap-1": "jm1wdb64",
            "position-1": "l9j0dhe7",
            "white-space-1": "l3itjdph",
            "word-break-1": "qv66sw1b",
          },
          q ? { "background-color-1": "g5ia77u1" } : null,
          x === !0 ? { "background-color-1": "b8zhkkm9" } : null,
          p === !0
            ? {
                "transition-duration-1": "mi9thwiq",
                "transition-property-1": "pnx7fd3z",
                "transition-timing-function-1": "heur4gxb",
              }
            : null,
          n === !0
            ? {
                "background-color-1": "b8zhkkm9",
                "transition-delay-1": "lxbcnve3",
                "transition-duration-1": "akwz6i9j",
              }
            : null,
          g.work_ama_answer_status === "ANSWERING_NOW" && !B
            ? {
                "background-color-1": "b8zhkkm9",
                "border-top-0.3": "al5e1bck",
                "border-end-0.3": "dnrdovi6",
                "border-bottom-0.3": "i7lnijfl",
                "border-start-0.3": "c31yq5mp",
              }
            : null
        ),
        "data-testid": void 0,
        children: [
          j.jsxs("div", {
            className: "tw6a2znq sj5x9vvc d1544ag0 cxgpxx05",
            children: [
              y
                ? null
                : j.jsx(c("CometUFICommentIdentityBadges.react"), {
                    comment: g,
                  }),
              s !== !0 || r == null
                ? null
                : j.jsx("div", {
                    className: "ecm0bbzt e5nlhep0",
                    children: j.jsx(c("TetraText.react"), {
                      numberOfLines: 1,
                      type: "meta1",
                      children: h._("Replying to {name}", [
                        h._param("name", r),
                      ]),
                    }),
                  }),
              i === 97 &&
                j.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: j.jsx(d("CometRelay").MatchContainer, {
                    match:
                      g.work_knowledge_inline_annotation_comment_badge_renderer,
                    props: {
                      renderer:
                        g.work_knowledge_inline_annotation_comment_badge_renderer,
                    },
                  }),
                }),
              y && b("cr:1986326")
                ? j.jsxs("div", {
                    className: "btwxx1t3 nc684nl6 bp9cbjyn",
                    children: [o, j.jsx(b("cr:1986326"), { comment: g })],
                  })
                : o,
              b("cr:1798299") != null && !e
                ? j.jsx(b("cr:1798299"), {
                    comment: g,
                    isBackgroundTransparent: q,
                  })
                : null,
              v != null
                ? v.map(function (a, b) {
                    return j.jsx(
                      c("CometErrorBoundary.react"),
                      { children: a },
                      b
                    );
                  })
                : null,
              u,
              g.body_renderer != null
                ? j.jsx("div", {
                    className: "ecm0bbzt e5nlhep0 a8c37x1j",
                    children: j.jsx(c("CometTextLangContext").Provider, {
                      value: f,
                      children: j.jsx(c("TetraText.react"), {
                        color: w ? "disabled" : null,
                        type: "body3",
                        children: t,
                      }),
                    }),
                  })
                : null,
            ],
          }),
          Boolean(g.optimistic_error)
            ? j.jsx("span", {
                className:
                  "kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 a8c37x1j rm7oo3ik i09qtzwb qmr60zad inkptoze qlfml3jp e72ty7fz czm2i3kx hxpkjkow m2wu88kb pmg7q2s5",
                children: "\xa0",
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "CometUFICommentBody";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentMenu.entrypoint",
  ["CometUFICommentMenuQuery$Parameters", "JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.feedLocation;
        a = a.id;
        return {
          queries: {
            menuQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: b("CometUFICommentMenuQuery$Parameters"),
              variables: { feedLocation: c, id: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("CometUFICommentMenu.react").__setRef(
        "CometUFICommentMenu.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentMenuButton.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometRelay",
    "CometTooltip.react",
    "CometUFICommentMenu.entrypoint",
    "CometUFICommentMenuButton_comment.graphql",
    "TetraIcon.react",
    "fbicon",
    "react",
    "stylex",
    "useMatchMedia",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useState;
    function a(a) {
      var e = a.color,
        f = e === void 0 ? "secondary" : e;
      e = a.comment;
      var g = a.feedbackSource,
        n = a.feedLocation,
        o = a.onEdit,
        p = a.onOptimisticDeletion,
        q = a.popoverPosition,
        r = a.showMenuIcons,
        s = a.topLevelFeedbackId;
      a = a.visible;
      e = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("CometUFICommentMenuButton_comment.graphql")),
        e
      );
      var t = e.comment_menu_tooltip,
        u = e.id,
        v = e.optimistic_action;
      e = e.should_show_comment_menu;
      var w = m(!1),
        x = w[0],
        y = w[1],
        z = l(function () {
          y(!0);
        }, []),
        A = l(function () {
          y(!1);
        }, []);
      w = c("useMatchMedia")("(any-pointer: coarse)");
      var B = t != null ? t : h._("More");
      if (v != null)
        return k.jsx("div", {
          className: "b5wmifdl no6464jc tf0xghai",
          children: k.jsx(c("TetraIcon.react"), {
            "aria-label": B,
            color: f,
            disabled: !0,
            icon: d("fbicon")._(i("484386"), 16),
          }),
        });
      if (e !== !0 || u == null) return null;
      v = q != null ? { position: q } : {};
      e = a === !0 || x === !0 || w;
      return k.jsx("div", {
        className: c("stylex").dedupe(
          { "margin-start-1": "no6464jc", "opacity-1": "b5wmifdl" },
          e ? { "opacity-1": "pedkr2u6" } : null
        ),
        children: k.jsx(
          c("CometEntryPointPopoverTrigger.react"),
          babelHelpers["extends"](
            {
              align: "middle",
              entryPointParams: { feedLocation: n, id: u },
              otherProps: {
                feedLocation: n,
                feedbackSource: g,
                onEdit: o,
                onOptimisticDeletion: p,
                showMenuIcons: r,
                topLevelFeedbackId: s,
              },
              popoverEntryPoint: c("CometUFICommentMenu.entrypoint"),
              popoverType: "menu",
            },
            v,
            {
              children: function (a, b, e, g, h, j) {
                e = k.jsx(c("TetraIcon.react"), {
                  "aria-label": B,
                  color: f,
                  icon: d("fbicon")._(i("484386"), 16),
                  onFocusIn: z,
                  onFocusOut: A,
                  onHoverIn: g,
                  onHoverOut: h,
                  onPress: b,
                  onPressIn: j,
                  ref: a,
                  testid: void 0,
                });
                return t != null
                  ? k.jsx(c("CometTooltip.react"), {
                      position: "above",
                      tooltip: B,
                      children: e,
                    })
                  : e;
              },
            }
          )
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIComposerRowContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ actorRenderer: null, addOn: null });
    g["default"] = b;
  },
  98
);
__d(
  "CometUFICommentRow.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "CometUFICommentActorLink.react",
    "CometUFICommentRow_actor.graphql",
    "CometUFICommentRow_comment.graphql",
    "CometUFIComposerRowContext",
    "GraphQLGender",
    "TetraIcon.react",
    "TetraProfilePhoto.react",
    "UFI2SilhouetteConfig",
    "emptyFunction",
    "fbicon",
    "nux:55",
    "react",
    "stylex",
    "useServerTime",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react"),
      m = d("react"),
      n = m.useContext,
      o = m.useMemo,
      p = {
        aero: { opacity: "qwwmc0zo" },
        avatarWrapper: {
          alignSelf: "nqmvxvec",
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          display: "a8c37x1j",
          marginEnd: "fv0vnmcu",
          marginTop: "rs0gx3tq",
          position: "l9j0dhe7",
        },
        avatarWrapperDepth1: { marginTop: "qjjbsfad" },
        composerExpandedContent: { paddingEnd: "rz4wbd8a" },
        expandedContent: {
          flexBasis: "rj1gh0hx",
          flexGrow: "buofh1pr",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          paddingEnd: "hv4rvrfc",
        },
        nux: { maxWidth: "nqmqzb3c" },
        root: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          outline: "lzcic4wl",
        },
      },
      q =
        (m =
          b("nux:55") == null
            ? void 0
            : b("nux:55")("comet_group_ca_adoption")) != null
          ? m
          : c("emptyFunction");
    function a(a) {
      var b,
        e = a.actor,
        f = a.comment,
        g = a.depth,
        j = a.forceLargeAvatar,
        k = a.isComposer;
      k = k === void 0 ? !1 : k;
      var m = a.isDisabled,
        r = a.onAvatarClick,
        s = a.showWarning;
      a = n(c("CometUFIComposerRowContext"));
      a = a.actorRenderer;
      var t = o(
          function () {
            var a;
            s
              ? (a = {
                  icon: l.jsx(c("TetraIcon.react"), {
                    color: "negative",
                    icon: d("fbicon")._(i("681770"), 16),
                  }),
                  size: 16,
                  type: "activityBadge",
                })
              : e.availability === "ACTIVE" &&
                (a = { type: "availabilityBadge" });
            return a;
          },
          [e.availability, s]
        ),
        u =
          (f == null ? void 0 : f.if_viewer_can_see_member_page_tooltip) !=
          null;
      u = q(
        {
          align: "start",
          arrowStyle: "inset",
          hasCloseButton: !1,
          label: h._("Visit your member profile."),
          position: "below",
          type: "accent",
          xstyle: p.nux,
        },
        u
      );
      b =
        g === 0 || j
          ? l.jsx(c("TetraProfilePhoto.react"), {
              addOn: t,
              size: 32,
              source: {
                uri:
                  (b =
                    (b = e.profile_picture_depth_0) == null ? void 0 : b.uri) !=
                  null
                    ? b
                    : c("UFI2SilhouetteConfig").neutralSilhouette32,
              },
            })
          : l.jsx(c("TetraProfilePhoto.react"), {
              addOn: t,
              size: 24,
              source: {
                uri:
                  (t =
                    (b = e.profile_picture_depth_1) == null ? void 0 : b.uri) !=
                  null
                    ? t
                    : c("UFI2SilhouetteConfig").neutralSilhouette24,
              },
            });
      if (k) {
        t = a != null ? a(b) : null;
        b =
          t == null
            ? l.jsx(c("CometPressable.react"), {
                "aria-hidden": !0,
                onPress: r,
                overlayRadius: "50%",
                children: b,
              })
            : t;
      } else
        e.id != null &&
          (b = l.jsx(c("CometUFICommentActorLink.react"), {
            "aria-hidden": !0,
            comment$key: f,
            kind: "profilePhoto",
            children: b,
          }));
      b = l.jsx("div", {
        className: c("stylex")(
          p.avatarWrapper,
          g === 1 && !j && p.avatarWrapperDepth1,
          m && p.aero
        ),
        ref: u,
        children: b,
      });
      return b;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var r = l.memo(a);
    function e(a) {
      var e = a.actor,
        f = a.children,
        g = a.comment,
        i = a.depth,
        m = a.forceLargeAvatar;
      m = m === void 0 ? !1 : m;
      var o = a.isComposer;
      o = o === void 0 ? !1 : o;
      var q = a.isDisabled;
      q = q === void 0 ? !1 : q;
      var s = a.onAvatarClick,
        t = a.root,
        u = a.showWarning;
      u = u === void 0 ? !1 : u;
      var v = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "actor",
        "children",
        "comment",
        "depth",
        "forceLargeAvatar",
        "isComposer",
        "isDisabled",
        "onAvatarClick",
        "root",
        "showWarning",
        "xstyle",
      ]);
      e = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("CometUFICommentRow_actor.graphql")),
        e
      );
      g = d("CometRelay").useFragment(
        k !== void 0 ? k : (k = b("CometUFICommentRow_comment.graphql")),
        g
      );
      m = l.jsx(r, {
        actor: e,
        comment: g,
        depth: i,
        forceLargeAvatar: m,
        isComposer: o,
        isDisabled: q,
        onAvatarClick: s,
        showWarning: u,
      });
      q = new (c("GraphQLGender"))(e.gender).toIntlVariationsEnum();
      u =
        g == null ? void 0 : (s = g.comment_parent) == null ? void 0 : s.author;
      s = c("useServerTime")();
      s =
        (g == null ? void 0 : g.created_time) != null
          ? c("CometRelativeTimestamp.react").getRelativeTimestamp(
              s,
              new Date(g.created_time * 1e3)
            )
          : "";
      g = o
        ? {}
        : {
            "aria-label":
              i === 0
                ? h._(
                    { "*": "Comment by {commenterName} {relativeTimestamp}" },
                    [
                      h._param("commenterName", e.name, [1, q]),
                      h._param("relativeTimestamp", s),
                    ]
                  )
                : h._(
                    {
                      "*": {
                        "*": "Reply by {commenterName} to {parentCommenterName}'s comment {relativeTimestamp}",
                      },
                    },
                    [
                      h._param("commenterName", e.name, [1, q]),
                      h._param(
                        "parentCommenterName",
                        u == null ? void 0 : u.name,
                        [
                          1,
                          new (c("GraphQLGender"))(
                            u == null ? void 0 : u.gender
                          ).toIntlVariationsEnum(),
                        ]
                      ),
                      h._param("relativeTimestamp", s),
                    ]
                  ),
            role: "article",
            tabIndex: "-1",
          };
      i = n(c("CometUFIComposerRowContext"));
      e = i.addOn;
      return l.jsxs(
        "div",
        babelHelpers["extends"]({}, a, g, {
          className: c("stylex")(v, p.root),
          ref: t,
          children: [
            m,
            l.jsx("div", {
              className: c("stylex")(
                p.expandedContent,
                o === !0 && p.composerExpandedContent
              ),
              children: f,
            }),
            o && e,
          ],
        })
      );
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g["default"] = e;
  },
  98
);
__d(
  "DOMIntersection",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a = a.getBoundingClientRect();
      b = b.getBoundingClientRect();
      return !(
        a.right < b.left ||
        a.left > b.right ||
        a.bottom < b.top ||
        a.top > b.bottom
      );
    }
    f.isIntersecting = a;
  },
  66
);
__d(
  "CometUFICommentTopReactionsWrapper.react",
  [
    "cx",
    "CSS",
    "CometUFICommentTopReactionsWrapper_feedback.graphql",
    "DOMIntersection",
    "UFI2CometRelayCreateFragmentContainer",
    "cr:1725688",
    "injectSubscriptionsHandler.react",
    "intersectionObserverEntryIsIntersecting",
    "observeIntersection",
    "queryThenMutateDOM",
    "react",
    "useLayoutEffect_SAFE_FOR_SSR",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useRef;
    function a(a) {
      var e,
        f = a.avoidableElementBorderingBottom,
        g = a.children,
        h = a.feedback,
        i = a.subscriptionsHandler,
        m = l(null),
        n = l(null),
        o = l(!1),
        p = l(null),
        q = l(null),
        r = k(
          function () {
            var a = q.current,
              b = f.current,
              e = m.current,
              g = p.current,
              j = o.current;
            if (a !== null || !b || !e || !g || !j) return;
            var k = !1;
            i.addSubscriptions(
              c("queryThenMutateDOM")(
                function () {
                  k = d("DOMIntersection").isIntersecting(b, g);
                },
                function () {
                  k !== a &&
                    (k === !0 && d("CSS").addClass(e, "_680_"),
                    d("CSS").removeClass(e, "invisible_elem"),
                    (q.current = k),
                    n.current != null &&
                      (n.current.remove(), (n.current = null)));
                },
                "CometUFICommentTopReactionsWrapper_" +
                  ((j = h.id) != null ? j : "UNKNOWN")
              )
            );
          },
          [f, h.id, i]
        );
      a = k(
        function (a) {
          (m.current = a), a == null && (q.current = null), r();
        },
        [r]
      );
      var s = k(
        function (a) {
          p.current !== a &&
            ((p.current = a),
            n.current != null && (n.current.remove(), (n.current = null)),
            p.current &&
              ((n.current = c("observeIntersection")(
                p.current,
                function (a) {
                  (o.current = c("intersectionObserverEntryIsIntersecting")(a)),
                    r();
                },
                { rootMargin: "1000px" }
              )),
              i.addSubscriptions(n.current)));
        },
        [r, i]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          r();
        },
        [r]
      );
      e =
        h.should_show_top_reactions != null
          ? h.should_show_top_reactions
          : Boolean((e = h.reactors) == null ? void 0 : e.count);
      return j.jsxs("div", {
        className: "_680y",
        children: [
          j.jsx("div", { className: "_6cuy", children: g }),
          e
            ? j.jsx("div", {
                className: "_6cuq invisible_elem",
                ref: a,
                children: j.jsx(b("cr:1725688"), { feedback: h, rootRef: s }),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    h = c("UFI2CometRelayCreateFragmentContainer").createFragmentContainer(
      c("injectSubscriptionsHandler.react")(a),
      {
        feedback:
          i !== void 0
            ? i
            : (i = b("CometUFICommentTopReactionsWrapper_feedback.graphql")),
      }
    );
    g["default"] = h;
  },
  98
);
__d(
  "UFI2ActiveLayerMonitor",
  [
    "ErrorUtils",
    "Parent",
    "SubscriptionsHandler",
    "UserActivity",
    "getDocumentScrollElement",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
      i = !1,
      j = c("getDocumentScrollElement")(),
      k = [],
      l;
    function m(a) {
      i = !0;
      k.push.apply(k, h);
      while (k.length) {
        var b = k.shift();
        c("ErrorUtils").applyWithGuard(
          b,
          null,
          [a],
          null,
          "UFI2ActiveLayerMonitor"
        );
      }
      i = !1;
    }
    function n(a) {
      j !== a && ((j = a), m(a));
    }
    function a() {
      return j;
    }
    function b(a) {
      h.push(a);
      i && k.push(a);
      l == null &&
        ((l = new (c("SubscriptionsHandler"))()),
        l.addSubscriptions(
          c("UserActivity").subscribe(function (a, b) {
            a = b.event;
            n(
              d("Parent").byClass(a.target, "uiLayer") ||
                c("getDocumentScrollElement")()
            );
          })
        ));
      var b = !1;
      return {
        remove: function () {
          if (b) return;
          var c = h.indexOf(a);
          c !== -1 && h.splice(c, 1);
          if (i) {
            c = k.indexOf(a);
            c !== -1 && k.splice(c, 1);
          }
          h.length === 0 && l && (l.release(), (l = null));
          b = !0;
        },
      };
    }
    g.getLastActiveLayer = a;
    g.subscribe = b;
  },
  98
);
__d(
  "UFI2UserActivityMonitor",
  [
    "ErrorUtils",
    "Event",
    "ExecutionEnvironment",
    "SubscriptionsHandler",
    "UFI2UserActivityIdleTimeout",
    "UserActivity",
    "Visibility",
    "clearTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
      i,
      j = !1,
      k =
        d("ExecutionEnvironment").canUseDOM &&
        c("UserActivity").isOnTab() &&
        c("UserActivity").isActive(c("UFI2UserActivityIdleTimeout"))
          ? "ACTIVE"
          : "INACTIVE",
      l = [],
      m;
    function n(a) {
      j = !0;
      l.push.apply(l, h);
      var b = function () {
        var b = l.shift();
        c("ErrorUtils").applyWithGuard(
          function () {
            return b(a);
          },
          null,
          null,
          null,
          "UFI2UserActivityMonitor"
        );
      };
      while (l.length) b();
      j = !1;
    }
    function o(a) {
      c("clearTimeout")(i),
        a > 0 &&
          (i = c("setTimeoutAcrossTransitions")(function () {
            p("INACTIVE");
          }, a));
    }
    function p(a) {
      var b = k;
      k = a;
      b !== a && n(a);
    }
    function a() {
      return k;
    }
    e = function () {
      m == null &&
        (o(
          Math.max(
            0,
            c("UFI2UserActivityIdleTimeout") -
              (Date.now() - c("UserActivity").getLastActive())
          )
        ),
        (m = new (c("SubscriptionsHandler"))()),
        m.addSubscriptions(
          c("UserActivity").subscribe(function (a, b) {
            a = b.event;
            if (
              /^mouse(enter|leave|move|over|out)$/.test(a.type) &&
              c("UserActivity").isOnTab() === !1
            )
              return;
            p("ACTIVE");
            o(
              Math.max(
                0,
                c("UFI2UserActivityIdleTimeout") -
                  (Date.now() - c("UserActivity").getLastActive())
              )
            );
          }),
          c("Event").listen(window, "blur", function () {
            p("INACTIVE"), c("clearTimeout")(i);
          }),
          c("Visibility").addListener(c("Visibility").HIDDEN, function () {
            p("INACTIVE"), c("clearTimeout")(i);
          })
        ));
    };
    function b(a) {
      h.push(a);
      j && l.push(a);
      var b = !1;
      return {
        remove: function () {
          if (b) return;
          var d = h.indexOf(a);
          d !== -1 && h.splice(d, 1);
          if (j) {
            d = l.indexOf(a);
            d !== -1 && l.splice(d, 1);
          }
          h.length === 0 && c("clearTimeout")(i);
          b = !0;
        },
      };
    }
    d("ExecutionEnvironment").canUseDOM && e();
    g.getActivityState = a;
    g.init = e;
    g.subscribe = b;
  },
  98
);
__d(
  "getFBAlphaConsoleSize",
  ["ge"],
  function (a, b, c, d, e, f, g) {
    function a() {
      var a = c("ge")("alpha_console_container");
      if (a) return { height: a.offsetHeight, width: a.offsetWidth };
      else return { height: 0, width: 0 };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getSharedStopwatch",
  ["invariant", "UFIStopWatch", "uuid"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {};
    function a(a) {
      var b = c("uuid")();
      if (i[a] == null) {
        var d = new (c("UFIStopWatch"))();
        i[a] = { runningClientMap: {}, stopwatch: d, totalClients: 0 };
      }
      i[a].totalClients += 1;
      var e = !1;
      function f() {
        e === !1 || h(0, 6067);
      }
      var g = {
        dispose: function () {
          if (e) return;
          g.pause();
          i[a].totalClients -= 1;
          i[a].totalClients === 0 && delete i[a];
          e = !0;
        },
        getMilliseconds: function () {
          f();
          return i[a].stopwatch.milliseconds();
        },
        getStartTime: function () {
          f();
          return i[a].stopwatch.getStartTime();
        },
        isRunning: function () {
          f();
          return i[a].stopwatch.state() === c("UFIStopWatch").COUNTING;
        },
        isSharedWithOtherClients: function () {
          f();
          return i[a].totalClients > 1;
        },
        pause: function () {
          f(),
            delete i[a].runningClientMap[b],
            Object.keys(i[a].runningClientMap).length === 0 &&
              i[a].stopwatch.pause();
        },
        start: function () {
          f(), (i[a].runningClientMap[b] = !0), i[a].stopwatch.start();
        },
      };
      return g;
    }
    g["default"] = a;
  },
  98
);
__d(
  "onAttachedToDOM",
  ["ErrorUtils", "containsNode", "killswitch"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function c() {
      var a = new Map(),
        c = new MutationObserver(d);
      function d(c) {
        c.some(function (c) {
          return Array.from(c.addedNodes).some(function (c) {
            a.forEach(function (a, d) {
              b("containsNode")(c, d) &&
                a.forEach(function (a) {
                  h(d, a), (g || (g = b("ErrorUtils"))).applyWithGuard(a);
                });
            });
            return a.size === 0;
          });
        });
      }
      function e(a) {
        return b("containsNode")(document.documentElement, a);
      }
      function f(b, d) {
        a.size === 0 && c.observe(document, { childList: !0, subtree: !0 });
        var e = a.get(b);
        e == null && ((e = []), a.set(b, e));
        e.push(d);
      }
      function h(b, d) {
        var e = a.get(b);
        if (e) {
          d = e.indexOf(d);
          d !== -1 && e.splice(d, 1);
          e.length === 0 && a["delete"](b);
          a.size === 0 && c.disconnect();
        }
      }
      return function (a, b) {
        if (e(a)) {
          b();
          return { remove: function () {} };
        }
        f(a, b);
        var c = !1;
        return {
          remove: function () {
            if (c) return;
            c = !0;
            h(a, b);
          },
        };
      };
    }
    b("killswitch")("ON_ATTACHED_TO_DOM_HELPER") || a.MutationObserver == null
      ? (d = null)
      : (d = c());
    e.exports = d;
  },
  null
);
__d(
  "UFI2VPVDLoggedComponent.react",
  [
    "cx",
    "invariant",
    "Banzai",
    "Parent",
    "UFI2ActiveLayerMonitor",
    "UFI2UserActivityMonitor",
    "clearInterval",
    "collectDataAttributes",
    "containsNode",
    "getFBAlphaConsoleSize",
    "getSharedStopwatch",
    "gkx",
    "injectSubscriptionsHandler.react",
    "isIntersectionObserverEntryVPVDVisible",
    "observeIntersection",
    "onAttachedToDOM",
    "react",
    "setIntervalAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = [
        0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
        0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
      ];
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.$1 = "HIDDEN"),
          (e.$4 = !1),
          (e.$7 = d("UFI2UserActivityMonitor").getActivityState()),
          (e.$8 = "div"),
          (e.$11 = function (a, b) {
            return e.$5 ? c("collectDataAttributes")(e.$5, a, b) : null;
          }),
          (e.$12 = function (a) {
            (e.$4 = c("containsNode")(a, e.$5)), e.$13();
          }),
          (e.$14 = function (a) {
            (e.$1 = c("isIntersectionObserverEntryVPVDVisible")(a)
              ? "VISIBLE"
              : "HIDDEN"),
              e.$13();
          }),
          (e.$15 = function (a) {
            a == null || a instanceof HTMLDivElement || i(0, 5279),
              e.$5 !== a &&
                (e.$2 != null && (e.$2.remove(), delete e.$2),
                e.$3 != null && (e.$3.remove(), delete e.$3)),
              a &&
                (c("onAttachedToDOM")
                  ? (e.$2 = c("onAttachedToDOM")(a, function () {
                      e.$3 && e.$3.remove(), e.$16(a);
                    }))
                  : e.$16(a)),
              (e.$5 = a);
          }),
          (e.$17 = function (a) {
            (e.$7 = a), e.$13();
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.$13 = function () {
        var a = this.$6;
        if (this.$1 === "HIDDEN" || this.$4 === !1 || this.$7 === "INACTIVE") {
          if (a == null) return;
          if (!a.isSharedWithOtherClients()) {
            var b = a.getMilliseconds(),
              d = a.getStartTime();
            this.props.onLogDuration(d, b, this.$11);
          }
          a.dispose();
          this.$6 = null;
        } else
          a == null &&
            (this.$6 = a =
              c("getSharedStopwatch")(this.props.contentIdentifier)),
            a.start();
      };
      e.$16 = function (a) {
        this.$4 = c("containsNode")(
          d("UFI2ActiveLayerMonitor").getLastActiveLayer(),
          a
        );
        var b = d("Parent").byClass(a, "uiScrollableAreaWrap"),
          e =
            b == null
              ? "-44px 0px -" + c("getFBAlphaConsoleSize")().height + "px 0px"
              : "0px";
        this.$3 = c("observeIntersection")(a, this.$14, {
          root: b instanceof HTMLElement ? b : null,
          rootMargin: e,
          threshold: k,
        });
      };
      e.componentDidMount = function () {
        var a = this;
        this.props.subscriptionsHandler.addSubscriptions(
          c("Banzai").subscribe(c("Banzai").SHUTDOWN, function () {
            (a.$1 = "HIDDEN"), a.$13();
          }),
          d("UFI2UserActivityMonitor").subscribe(this.$17),
          d("UFI2ActiveLayerMonitor").subscribe(this.$12)
        );
        var b = this.props.domAttachmentEventEmitter;
        b &&
          this.props.subscriptionsHandler.addSubscriptions(
            b.addListener("inserted", function () {
              var b = a.$5;
              if (b == null) return;
              a.$2 && (a.$2.remove(), delete a.$2);
              a.$3 && a.$3.remove();
              a.$16(b);
            })
          );
      };
      e.componentWillUnmount = function () {
        (this.$1 = "HIDDEN"),
          this.$2 && (this.$2.remove(), delete this.$2),
          this.$3 && (this.$3.remove(), delete this.$3),
          this.$13();
      };
      e.render = function () {
        var a = this.$8;
        return j.jsx(a, { ref: this.$15, children: this.props.children });
      };
      return b;
    })(j.Component);
    b = c("injectSubscriptionsHandler.react")(a);
    g["default"] = b;
  },
  98
);
__d(
  "isCommentNewSinceLastGroupVisit",
  ["CometRelay", "isCommentNewSinceLastGroupVisit_comment.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, c) {
      a = d("CometRelay").readInlineData(
        h !== void 0
          ? h
          : (h = b("isCommentNewSinceLastGroupVisit_comment.graphql")),
        a
      );
      return (
        c != null &&
        (a == null ? void 0 : a.created_time) != null &&
        (a == null ? void 0 : a.created_time) > c
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometHighlightOnVisible",
  [
    "BaseScrollableAreaContext",
    "CometEventListener",
    "react",
    "useDebounced",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.maxTime;
      a = a.scrollDebounce;
      var d = l(!1),
        e = d[0],
        f = d[1];
      d = l(!0);
      var g = d[0],
        m = d[1],
        n = k(!1),
        o = k(null),
        p = h(
          function () {
            e || (f(!0), m(!1));
          },
          [e]
        ),
        q = c("useDebounced")(function () {
          p();
        }, a);
      d = h(
        function () {
          o.current != null && (o.current = null), q.reset();
        },
        [q]
      );
      var r = h(
        function () {
          n.current = !0;
          var a = o.current;
          if (a != null) {
            var c = Date.now();
            a + b < c ? (q.reset(), p()) : q();
          }
        },
        [p, b, q]
      );
      a = h(
        function () {
          o.current == null && ((o.current = Date.now()), n.current || r());
        },
        [r]
      );
      var s = i(c("BaseScrollableAreaContext"));
      j(
        function () {
          if (e) return;
          var a = s[s.length - 1];
          a = a == null ? void 0 : a.getDOMNode();
          var b = c("CometEventListener").bubbleWithPassiveFlag(
            (a = a) != null ? a : window,
            "scroll",
            r,
            !0
          );
          return function () {
            b.remove();
          };
        },
        [e, r, s]
      );
      d = c("useVisibilityObserver")({
        onHidden: e ? void 0 : d,
        onVisible: e ? void 0 : a,
      });
      return [d, g];
    }
    g["default"] = a;
  },
  98
);
__d(
  "makeCometUFIHighlightedComment",
  ["react", "useCometHighlightOnVisible"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 5e3,
      j = 400;
    function a(a) {
      return function (b) {
        var d = c("useCometHighlightOnVisible")({
            maxTime: i,
            scrollDebounce: j,
          }),
          e = d[0];
        d = d[1];
        return h.jsx("div", {
          ref: e,
          children: h.jsx(
            a,
            babelHelpers["extends"]({}, b, { hasHighlightApplied: d })
          ),
        });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIComment.react",
  [
    "BaseScrollableAreaContext",
    "CometBackupPlaceholder.react",
    "CometErrorBoundary.react",
    "CometFeedStoryUFICommentAttachments.react",
    "CometFeedVisitationContext",
    "CometPlaceholder.react",
    "CometProgressIndicator.react",
    "CometRelay",
    "CometScrollAnchorContext",
    "CometTrackingNodeProvider.react",
    "CometUFICommentActionLinks.react",
    "CometUFICommentBody.react",
    "CometUFICommentMenuButton.react",
    "CometUFICommentRow.react",
    "CometUFICommentTopReactionsWrapper.react",
    "CometUFIComment_comment.graphql",
    "CometUFIComment_feedback.graphql",
    "FBLogger",
    "UFI2Config",
    "UFI2VPVDLoggedComponent.react",
    "UFICommonInteractionEvents",
    "UFICommonInteractionLogger",
    "UFIODSLogger",
    "WebPixelRatio",
    "cr:1829844",
    "emptyFunction",
    "isCommentNewSinceLastGroupVisit",
    "makeCometUFIHighlightedComment",
    "orEmptyArray",
    "react",
    "recoverableViolation",
    "scrollIntoView",
    "stylex",
    "useCometScrollAnchor",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useRef,
      aa = e.useState,
      ba = e.useTransition,
      ca = { behavior: "smooth", verticalAlign: "center" },
      da = c("makeCometUFIHighlightedComment")(c("CometUFICommentBody.react")),
      ea = c("makeCometUFIHighlightedComment")(c("CometUFICommentRow.react"));
    function fa(a) {
      var b = a.attached_story,
        d = a.attachments;
      a = a.id;
      if (b != null) return !c("UFI2Config").shouldUseSimplifiedAttachments;
      if (d == null || d.length === 0) return !1;
      b = d[0].style_list;
      if (b == null) {
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "COMMENT_ID", (d = a) != null ? d : "UNKNOWN")
          .mustfix(
            "Encountered a null `style_list` property while trying to determine if a comment attachment is renderable. Investigate why."
          );
        return !1;
      }
      if (b.includes("COMMENT_MESSAGE_INFO")) return !1;
      if (c("UFI2Config").shouldUseSimplifiedAttachments)
        for (
          var a = b,
            d = Array.isArray(a),
            b = 0,
            a = d
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (d) {
            if (b >= a.length) break;
            e = a[b++];
          } else {
            b = a.next();
            if (b.done) break;
            e = b.value;
          }
          e = e;
          if (c("UFI2Config").attachmentStylesToSimplify.includes(e)) return !1;
        }
      return !0;
    }
    var o = {
      aero: { opacity: "qwwmc0zo" },
      content: {
        display: "j83agx80",
        maxWidth: "bvz0fpym",
        wordWrap: "c1et5uql",
      },
      contentWithMenu: { display: "q9uorilb", verticalAlign: "sf5mxxl7" },
      fresh: {
        backgroundColor: "is6700om",
        bottom: "i09qtzwb",
        position: "pmk7jnqg",
        start: "j9ispegn",
        top: "kr520xx4",
        width: "dsl5tyj5",
      },
      freshDepth1: { start: "ghkatn0t" },
      freshDepth2: { start: "rn3csqz5" },
      menu: {
        display: "q9uorilb",
        verticalAlign: "sf5mxxl7",
        width: "pgctjfs5",
      },
      root: { position: "l9j0dhe7" },
    };
    function p(a) {
      var e = a.showMenuIcons,
        f = a.addConstantHighlightCallbacks,
        g = a.comment,
        p = a.depth,
        ga = a.disableFreshIndicator,
        ha = a.domAttachmentEventEmitter,
        q = a.feedback,
        r = a.feedbackSource,
        s = a.feedLocation,
        t = a.isHighlighted,
        ia = a.isLocallyComposed,
        ja = a.isRealtime,
        ka = a.logCommentViewportViewDuration,
        u = a.onEdit,
        v = a.onOptimisticDeletion,
        w = a.onReplyToComment,
        x = a.onTranslated,
        la = x === void 0 ? c("emptyFunction") : x;
      x = a.onUntranslated;
      var ma = x === void 0 ? c("emptyFunction") : x;
      x = a.popoverPosition;
      var y = a.removeConstantHighlightCallback,
        z = a.showMenu,
        A = a.hideReplyActionLink,
        B = a.showReplyingToHeader,
        C = a.storyRenderLocation,
        D = a.shouldAlwaysHaveCommentBackground;
      D = D === void 0 ? !1 : D;
      var na = a.topLevelFeedbackID,
        oa = a.translationRequested,
        E = a.unpinTriggerRef,
        F = a.viewOption,
        G = a.topLevelViewOption;
      a = a.xstyle;
      g = d("CometRelay").useRefetchableFragment(
        h !== void 0 ? h : (h = b("CometUFIComment_comment.graphql")),
        g
      );
      var H = g[0],
        pa = g[1];
      g = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFIComment_feedback.graphql")),
        q
      );
      q = k(
        function (a) {
          a = j.Children.toArray(a);
          var b = H == null ? void 0 : H.feedback;
          if (
            b == null ||
            (H == null ? void 0 : H.optimistic_action) != null ||
            (H == null ? void 0 : H.optimistic_error) != null
          )
            return a;
          var d = a.slice(0, -1);
          a = a.slice(-1);
          b = j.jsx(c("CometUFICommentTopReactionsWrapper.react"), {
            avoidableElementBorderingBottom: ra,
            feedback: b,
            children: a,
          });
          return j.Children.toArray([].concat(d, [b]));
        },
        [H]
      );
      var I = ba(),
        J = I[0],
        qa = I[1],
        K = n(!1),
        L = k(
          function (a) {
            if (
              (H == null ? void 0 : H.translation_available_for_viewer) !== !0
            ) {
              c("recoverableViolation")(
                "Unable to translate a comment that has no available translation",
                "ufi2"
              );
              return;
            }
            var b = H == null ? void 0 : H.id;
            if (b == null) return;
            qa(function () {
              pa(
                { id: b, scale: d("WebPixelRatio").get(), translationType: a },
                {
                  onComplete: function () {
                    a === "MACHINE_TRANSLATION"
                      ? la()
                      : ((K.current = !0), ma());
                  },
                }
              );
            });
          },
          [H, la, ma, pa, qa]
        );
      m(
        function () {
          var a;
          if (
            oa !== !0 ||
            (H == null
              ? void 0
              : (a = H.preferred_body) == null
              ? void 0
              : a.translation_type) === "MACHINE_TRANSLATION" ||
            J === !0 ||
            K.current ||
            (H == null ? void 0 : H.translation_available_for_viewer) !== !0
          )
            return;
          L("MACHINE_TRANSLATION");
        },
        [oa, L, H, J, K]
      );
      I = k(
        function () {
          var a;
          a =
            H == null
              ? void 0
              : (a = H.preferred_body) == null
              ? void 0
              : a.translation_type;
          a = a === "MACHINE_TRANSLATION" ? "ORIGINAL" : "MACHINE_TRANSLATION";
          L(a);
        },
        [H == null ? void 0 : H.preferred_body, L]
      );
      var ra = n(null),
        M = d("CometFeedVisitationContext").useCometFeedVisitationContext();
      M = M.feedLastVisitTime;
      var N = d("CometRelay").useRelayEnvironment(),
        sa =
          (H == null ? void 0 : H.id) != null
            ? "`CometUFIComment` experienced a fatal error rendering a comment with ID " +
              (H == null ? void 0 : H.id) +
              "."
            : "`CometUFIComment` experienced a fatal error rendering a comment without ID.",
        O = aa(!1),
        P = O[0],
        Q = O[1];
      O = k(function (a) {
        Q(!0);
      }, []);
      var ta = k(function (a) {
          Q(!1);
        }, []),
        ua = k(
          function (a) {
            P || Q(!0);
          },
          [P]
        ),
        R = c("usePrevious")(H == null ? void 0 : H.optimistic_action);
      m(
        function () {
          if (
            (H == null ? void 0 : H.client_id) != null &&
            (H == null ? void 0 : H.optimistic_action) == null &&
            (H == null ? void 0 : H.optimistic_error) == null &&
            (R === "ADD" || R === "EDIT")
          ) {
            var a =
              (H == null ? void 0 : H.client_id) +
              (R === "ADD"
                ? c("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT
                : c("UFICommonInteractionEvents")
                    .COMET_UFI_PERSISTED_COMMENT_EDIT);
            d("UFICommonInteractionLogger").endInteraction(a);
          }
        },
        [
          H == null ? void 0 : H.client_id,
          H == null ? void 0 : H.optimistic_action,
          H == null ? void 0 : H.optimistic_error,
          R,
        ]
      );
      m(function () {
        r === 1 &&
          (p === 0
            ? d("UFIODSLogger").bump(
                "comment.newsfeed.toplevel.componentDidMount",
                "comet"
              )
            : d("UFIODSLogger").bump(
                "comment.newsfeed.replies.componentDidMount",
                "comet"
              ));
      }, []);
      m(function () {
        if (
          (H == null ? void 0 : H.client_id) != null &&
          ((H == null ? void 0 : H.optimistic_action) === "ADD" ||
            (H == null ? void 0 : H.optimistic_action) === "EDIT")
        ) {
          var a = H == null ? void 0 : H.client_id;
          d("UFICommonInteractionLogger").endInteraction(
            a +
              ((H == null ? void 0 : H.optimistic_action) === "ADD"
                ? c("UFICommonInteractionEvents").COMET_UFI_OPTIMISTIC_COMMENT
                : c("UFICommonInteractionEvents")
                    .COMET_UFI_OPTIMISTIC_COMMENT_EDIT)
          );
          (H == null ? void 0 : H.optimistic_error) != null &&
            d("UFICommonInteractionLogger").endInteraction(
              a +
                ((H == null ? void 0 : H.optimistic_action) === "ADD"
                  ? c("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT
                  : c("UFICommonInteractionEvents")
                      .COMET_UFI_PERSISTED_COMMENT_EDIT),
              !0
            );
        }
      }, []);
      var S = l(c("BaseScrollableAreaContext")),
        T = S.length > 0,
        U = d("useCometScrollAnchor").useCometScrollAnchor(
          "ufi-comment",
          T ? "FIXME_T68750863" : H == null ? void 0 : H.legacy_fbid,
          ca
        ),
        va = n(!1),
        V = l(c("CometScrollAnchorContext"));
      m(
        function () {
          if (
            T &&
            va.current === !1 &&
            ((V == null ? void 0 : V.key) === "ufi-comment" ||
              (V == null ? void 0 : V.key) === "ufi-reply") &&
            (V == null ? void 0 : V.value) != null &&
            (V == null ? void 0 : V.value) ===
              (H == null ? void 0 : H.legacy_fbid)
          ) {
            var a = U.current;
            a != null &&
              ((va.current = !0),
              c("scrollIntoView")(
                a,
                babelHelpers["extends"]({}, ca, { verticalAlign: "center" })
              ));
          }
        },
        [H == null ? void 0 : H.legacy_fbid, T, U, V]
      );
      var W = H == null ? void 0 : H.id;
      S = aa(!1);
      var X = S[0],
        wa = S[1];
      m(
        function () {
          if (W != null && f && y) {
            f(W, wa);
            return function () {
              return y(W);
            };
          }
        },
        [f, W, y]
      );
      if (H == null) return null;
      S = H.author;
      if (S == null) {
        var Y;
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "COMMENT_ID", (Y = W) != null ? Y : "UNKNOWN")
          .warn("CometUFIComment: Cant render comment without author");
        return null;
      }
      if (W == null) {
        c("FBLogger")("ufi2").mustfix(
          "CometUFIComment: Cant render comment without an id"
        );
        return null;
      }
      Y = (Y = g.viewer_actor) == null ? void 0 : Y.id;
      var Z = t && !H.preferred_body,
        $ = t ? da : c("CometUFICommentBody.react");
      Z = Z ? ea : c("CometUFICommentRow.react");
      $ = j.jsx(
        $,
        {
          comment: H,
          feedbackSource: r,
          isConstantHighlightEnabled: X,
          shouldAlwaysHaveCommentBackground: D,
          shouldTruncate: !t && !ia,
          showReplyingToHeader: B,
          storyRenderLocation: C,
        },
        W
      );
      X = H.elevated_comment_data != null;
      D =
        fa(H) &&
        j.jsx(
          c("CometPlaceholder.react"),
          {
            fallback:
              c("CometProgressIndicator.react") != null
                ? j.jsx("div", {
                    style: { paddingLeft: 10 },
                    children: j.jsx(c("CometProgressIndicator.react"), {}),
                  })
                : null,
            children: j.jsx(c("CometFeedStoryUFICommentAttachments.react"), {
              actorID: Y,
              comment: H,
              feedbackSource: r,
              storyRenderLocation: C,
            }),
          },
          W + "_attachment_placeholder"
        );
      t = j.jsx(c("CometUFICommentActionLinks.react"), {
        actionLinksListRef: ra,
        comment: H,
        depth: p,
        environment: N,
        feedLocation: s,
        feedback: g,
        feedbackSource: r,
        handleOnReply: w,
        handleTranslationClick: I,
        hasRemovableAttachment: fa(H) && H.can_viewer_disable_preview === !0,
        hideReplyActionLink: A,
        isFetchingTranslation: J,
        onEdit: u,
        topLevelViewOption: G,
        unpinTriggerRef: E,
        viewOption: F,
      });
      C = Boolean((B = z) != null ? B : !0)
        ? j.jsx(c("CometUFICommentMenuButton.react"), {
            comment: H,
            feedLocation: s,
            feedbackSource: r,
            onEdit: u,
            onOptimisticDeletion: v,
            popoverPosition: x,
            showMenuIcons: e,
            topLevelFeedbackId: (Y = na) != null ? Y : null,
            visible: P && !H.optimistic_error,
          })
        : null;
      g =
        ga !== !0 &&
        (ia ||
          ja ||
          c("isCommentNewSinceLastGroupVisit")(
            H,
            (N = M) != null ? N : void 0
          ));
      A = c("orEmptyArray")(
        (w = H.attachments) == null
          ? void 0
          : (I = w[0]) == null
          ? void 0
          : I.style_list
      );
      G = !A.some(function (a) {
        return ["chat_command_result", "TIP_JAR_PAYMENT"].includes(a);
      });
      E = G || !H.preferred_body ? q([$, D]) : [].concat(q([$]), [D]);
      F = E[0];
      z = E.slice(1);
      B = j.jsx(d("CometRelay").MatchContainer, {
        fallback: F,
        match: H.comment_upper_badge_renderer,
        props: { firstContentElement: F },
      });
      v = j.jsxs(j.Fragment, {
        children: [
          j.jsxs(Z, {
            actor: S,
            comment: H,
            "data-testid": void 0,
            depth: p,
            isDisabled: (u = H.is_disabled) != null ? u : !1,
            onMouseEnter: O,
            onMouseLeave: ta,
            onMouseMove: ua,
            root: U,
            showWarning: Boolean(H.optimistic_error),
            xstyle: [o.root, H.spam_display_mode !== "none" && o.aero, a],
            children: [
              g
                ? j.jsx("div", {
                    className: c("stylex")(
                      o.fresh,
                      p === 1 && o.freshDepth1,
                      p === 2 && o.freshDepth2
                    ),
                  })
                : null,
              j.jsxs("div", {
                children: [
                  j.jsx("div", {
                    className: c("stylex")(
                      o.content,
                      o.contentWithMenu,
                      H.is_disabled === !0 && o.aero
                    ),
                    children: j.jsx(c("CometPlaceholder.react"), {
                      fallback: null,
                      children: j.jsx(d("CometRelay").MatchContainer, {
                        fallback: B,
                        match: H.elevated_comment_data,
                        props: { feedLocation: s },
                      }),
                    }),
                  }),
                  C != null &&
                    j.jsx("div", {
                      className: c("stylex")(o.menu),
                      children: C,
                    }),
                ],
              }),
              z.length > 0 &&
                !X &&
                j.jsx("div", {
                  className: c("stylex")(o.content),
                  children: z,
                }),
              t,
              j.jsx(c("CometPlaceholder.react"), {
                fallback: null,
                children: j.jsx(d("CometRelay").MatchContainer, {
                  match: H.work_answered_event_comment_renderer,
                  props: { data: H },
                }),
              }),
            ],
          }),
          j.jsx(c("CometBackupPlaceholder.react"), {
            fallback: j.jsx("div", { "aria-busy": "true" }),
            children: j.jsx(d("CometRelay").MatchContainer, {
              match: H.inline_survey_config,
              props: { inlineSurveyConfig: H.inline_survey_config },
            }),
          }),
        ],
      });
      ka != null &&
        (v = j.jsx(c("UFI2VPVDLoggedComponent.react"), {
          contentIdentifier: W,
          domAttachmentEventEmitter: ha,
          onLogDuration: ka,
          children: v,
        }));
      b("cr:1829844") != null &&
        (v = j.jsx(b("cr:1829844"), { name: "feed_comment", children: v }));
      return j.jsx(c("CometErrorBoundary.react"), {
        context: { project: "ufi2" },
        description: sa,
        children: j.jsx(c("CometTrackingNodeProvider.react"), {
          trackingNode: 25,
          children: v,
        }),
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function a(a) {
      return j.jsx(c("CometBackupPlaceholder.react"), {
        fallback: null,
        children: j.jsx(p, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentActorAMAQuestionAnswerBadge.react",
  [
    "fbt",
    "CometRelay",
    "CometUFICommentActorAMAQuestionAnswerBadge_comment.graphql",
    "TetraText.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = a.comment$key;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometUFICommentActorAMAQuestionAnswerBadge_comment.graphql"
            )),
        a
      );
      a = a == null ? void 0 : a.question_and_answer_type;
      if (a == null) return null;
      return a !== "AUTHOR" && a !== "ANSWER" && a !== "QUESTION"
        ? c("recoverableViolation")(
            "AMA comment badge received an invalid value of " +
              a +
              " rather than 'AUTHOR', 'ANSWER', or 'QUESTION'",
            "covid19_ama"
          )
        : j.jsx("div", {
            className:
              "b3onmgus e5nlhep0 ph5uu5jm ecm0bbzt kkf49tns q9uorilb bnpdmtie qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj cwj9ozl2",
            children: j.jsx(c("TetraText.react"), {
              color: "secondary",
              type: "bodyLink4",
              children:
                a === "AUTHOR"
                  ? h._("Author")
                  : a === "ANSWER"
                  ? h._("Answer")
                  : a === "QUESTION"
                  ? h._("Question")
                  : null,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentActorLinkBadges.react",
  [
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometUFICommentActorAMAQuestionAnswerBadge.react",
    "CometUFICommentActorLinkBadges_comment.graphql",
    "cr:1798298",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = c("deferredLoadComponent")(
        c("requireDeferred")(
          "CometUFICommentActorVerifiedBadge.react"
        ).__setRef("CometUFICommentActorLinkBadges.react")
      ),
      j = c("deferredLoadComponent")(
        c("requireDeferred")(
          "CometUFICommentActorConstituentBadge.react"
        ).__setRef("CometUFICommentActorLinkBadges.react")
      ),
      k = c("deferredLoadComponent")(
        c("requireDeferred")("CometUFICommentInlineFollowCTA.react").__setRef(
          "CometUFICommentActorLinkBadges.react"
        )
      ),
      l = d("react");
    function a(a) {
      var e,
        f,
        g = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometUFICommentActorLinkBadges_comment.graphql")),
          a.comment
        );
      e =
        (g == null
          ? void 0
          : (e = g.author) == null
          ? void 0
          : e.is_verified) === !0;
      f = g == null ? void 0 : (f = g.author) == null ? void 0 : f.id;
      var m = (g == null ? void 0 : g.has_constituent_badge) === !0,
        n = (g == null ? void 0 : g.can_viewer_see_subsribe_button) === !0;
      return l.jsxs(l.Fragment, {
        children: [
          m &&
            l.jsx(
              c("CometPlaceholder.react"),
              {
                fallback: l.jsx("span", {}),
                children: l.jsx(j, { comment: g }),
              },
              "constituentBadge"
            ),
          e &&
            f != null &&
            l.jsx(
              c("CometPlaceholder.react"),
              {
                fallback: l.jsx("span", {}),
                children: l.jsx(i, { profileID: f }),
              },
              "verifiedBadge"
            ),
          (g == null ? void 0 : g.author_user_signals_renderer) != null &&
            l.jsx(
              c("CometPlaceholder.react"),
              {
                fallback: l.jsx("span", {}),
                children: l.jsx(c("CometErrorBoundary.react"), {
                  children: l.jsx(d("CometRelay").MatchContainer, {
                    match: g.author_user_signals_renderer,
                    props: {
                      isBackgroundTransparent: a.isBackgroundTransparent,
                    },
                  }),
                }),
              },
              "userSignal"
            ),
          n &&
            l.jsx(
              c("CometPlaceholder.react"),
              {
                fallback: l.jsx("span", {}),
                children: l.jsx(k, { comment$key: g }),
              },
              "inlineFollowCTA"
            ),
          l.jsx(
            c("CometPlaceholder.react"),
            {
              fallback: l.jsx("span", {}),
              children: l.jsx(
                c("CometUFICommentActorAMAQuestionAnswerBadge.react"),
                { comment$key: g }
              ),
            },
            "amaAnswerBadge"
          ),
          b("cr:1798298") != null
            ? l.jsx(b("cr:1798298"), { comment: g })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentDisabledNotice.react",
  [
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometLineBreakTransform",
    "CometLinkedEntityRenderer",
    "CometRelay",
    "CometShortenedExternalUrlEntityRenderer",
    "CometUFICommentDisabledNotice_feedback.graphql",
    "TetraText.react",
    "UFI2ViewOption",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        "*": [c("CometLinkedEntityRenderer")],
        ExternalUrl: [c("CometShortenedExternalUrlEntityRenderer")],
      },
      k = [
        c("CometEmoticonTransform")(),
        c("CometEmojiTransform")(),
        c("CometLineBreakTransform"),
      ];
    function a(a) {
      var e = a.feedback;
      a = a.viewOption;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometUFICommentDisabledNotice_feedback.graphql")),
        e
      );
      var f = e.comments_disabled_notice_renderer;
      if (f == null) return null;
      a = d("UFI2ViewOption").shouldDisplayInReverse(a);
      f = i.jsx(c("TetraText.react"), {
        align: "center",
        type: "meta1",
        children: i.jsx(d("CometRelay").MatchContainer, {
          match: f,
          props: { disabledNotice: f, renderers: j, transforms: k },
        }),
      });
      e =
        e.display_comments_count != null &&
        e.display_comments_count.count != null &&
        e.display_comments_count.count > 0;
      return i.jsx("div", {
        className: c("stylex").dedupe(
          {
            "align-items-1": "bp9cbjyn",
            "background-color-1": "b3i9ofy5",
            "border-top-0.3": "l6v480f0",
            "display-1": "j83agx80",
            "justify-content-1": "taijpn5t",
            "padding-top-1": "discj3wi",
            "padding-bottom-1": "ihqw7lf3",
            "word-wrap-1": "c1et5uql",
          },
          e
            ? { "margin-top-1": "aov4n071", "margin-bottom-1": "bi6gxh9e" }
            : { "margin-bottom-1": "enqfppq2" },
          a
            ? {
                "border-bottom-end-radius-1": "ihh4hy1g",
                "border-bottom-start-radius-1": "qttc61fc",
                "margin-bottom-1": "enqfppq2",
              }
            : null
        ),
        children: f,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentTranslateAllButton.react",
  ["fbt", "CometLink.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        root: {
          borderBottomWidth: "afxsp9o4",
          borderTopColor: "qbxu24ho",
          borderEndColor: "bxzzcbxg",
          borderBottomColor: "lxuwth05",
          borderStartColor: "h2mp5456",
          borderTopStyle: "goun2846",
          borderEndStyle: "ccm00jje",
          borderBottomStyle: "s44p3ltw",
          borderStartStyle: "mk2mc5f4",
          borderTopWidth: "frvqaej8",
          display: "a8c37x1j",
          marginTop: "aahdfvyu",
          marginEnd: "cxmmr5t8",
          marginBottom: "tvmbv18p",
          marginStart: "hcukyx3x",
          paddingTop: "cxgpxx05",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "sj5x9vvc",
          paddingStart: "a8nywdso",
          textAlign: "oqcyycmt",
        },
      };
    function a(a) {
      return i.jsx(c("CometLink.react"), {
        onClick: a.onClick,
        xstyle: j.root,
        children: i.jsx(c("TetraText.react"), {
          type: "body4",
          children: h._("Translate All Comments"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getViewportViewDurationPropertiesFromTrackingData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b;
      a = a(["ft"], ["data-referrer"]);
      return {
        isPageComment:
          (a == null ? void 0 : (b = a.ft) == null ? void 0 : b.page_id) !=
          null,
        isSponsored: !!(a == null
          ? void 0
          : (b = a.ft) == null
          ? void 0
          : b.is_sponsored),
        mfStoryKey:
          (a == null ? void 0 : (b = a.ft) == null ? void 0 : b.mf_story_key) ||
          void 0,
        pageInsights:
          (a == null
            ? void 0
            : (b = a.ft) == null
            ? void 0
            : b.page_insights) || void 0,
        qid:
          (a == null ? void 0 : (b = a.ft) == null ? void 0 : b.qid) || void 0,
        referrerSource:
          (a == null
            ? void 0
            : (b = a.normal) == null
            ? void 0
            : b["data-referrer"]) || void 0,
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "isCommentTokenOrFBID",
  ["isCommentTokenOrFBID_comment.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0 ? h : (h = b("isCommentTokenOrFBID_comment.graphql"));
    function a(a, b) {
      return a != null && (a === b.id || a === b.legacy_fbid);
    }
    g["default"] = a;
  },
  98
);
__d(
  "WebCommentVpvDurationFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1842512");
    c = b("FalcoLoggerInternal").create("web_comment_vpv_duration", a);
    e.exports = c;
  },
  null
);
__d(
  "logCommentViewportViewDuration",
  ["WebCommentVpvDurationFalcoEvent", "WebSession", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.commentID,
        e = a.endpoint,
        f = a.isLivePinnedComment,
        g = a.isPageComment,
        h = a.isReply,
        i = a.isSponsored,
        j = a.milliseconds,
        k = a.storyRenderLocation,
        l = a.visibleStartTime;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "commentID",
        "endpoint",
        "isLivePinnedComment",
        "isPageComment",
        "isReply",
        "isSponsored",
        "milliseconds",
        "storyRenderLocation",
        "visibleStartTime",
      ]);
      if (j < 100) return;
      var m =
          a.referrerSource != null
            ? { referrer_source: a.referrerSource }
            : null,
        n = a.pageInsights != null ? { page_insights: a.pageInsights } : null,
        o = a.qid != null ? a.qid : null,
        p = a.xt != null && a.xt !== "" ? a.xt : null;
      a = a.mfStoryKey != null ? { mf_story_key: a.mfStoryKey } : null;
      var q = {
        container_module: k,
        duration_ms: j,
        endpoint: e,
        is_live_pinned_comment: f,
        is_on_sponsored_story: i,
        is_page_comment: g,
        is_reply: h,
        mfStoryKey: a,
        node_token: b,
        pageInsights: n,
        qid: o,
        referrerSource: m,
        sid_raw: d("WebSession").getId(),
        visible_start_time_ms: l,
        xt: p,
      };
      c("WebCommentVpvDurationFalcoEvent").log(function () {
        return { json_data: JSON.stringify(q) };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometUFIVPVDEndpoint",
  ["useCurrentRoute"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a;
      return (a = c("useCurrentRoute")()) == null ? void 0 : a.tracePolicy;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentInGroup.react",
  [
    "CometFeedStoryEncryptedTrackingContext",
    "CometPlaceholder.react",
    "CometRelay",
    "CometUFIComment.react",
    "CometUFICommentInGroup_feedback.graphql",
    "CometUFICommentList.react",
    "CometUFICommentTranslateAllButton.react",
    "JSResourceForInteraction",
    "getViewportViewDurationPropertiesFromTrackingData",
    "isCommentTokenOrFBID",
    "lazyLoadComponent",
    "logCommentViewportViewDuration",
    "react",
    "unrecoverableViolation",
    "useCometUFIVPVDEndpoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("CometUFICommentEditor.react").__setRef(
          "CometUFICommentInGroup.react"
        )
      ),
      m = {
        commentRow: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "dati1w0a",
        },
        commentRowNested: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "scb9dxdr",
        },
        firstCommentRow: { paddingTop: "ecm0bbzt" },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("CometUFICommentInGroup_feedback.graphql")),
          a.feedback
        ),
        f = a.actor,
        g = a.comment,
        n = a.commentsListRenderProps,
        o = a.composerPluginProps,
        p = a.editingCommentID,
        q = a.feedbackSource,
        r = a.feedLocation,
        s = a.focusCommentID,
        t = a.isFirstRow,
        u = a.locallyComposedCommentIds,
        v = a.onCommitCommentCreate,
        w = a.onEditCommentError,
        x = a.onTranslateAllClick,
        y = a.realtimeCommentIds,
        z = a.renderedTranslationCommentID,
        A = a.setEditingCommentID,
        B = a.setRenderedTranslationCommentID,
        C = a.shouldRequestTranslationForAllComments,
        D = a.storyRenderLocation,
        E = a.topLevelViewOption,
        F = a.viewOption,
        G = n.addRepliesListRenderedCallback;
      a = n.depth;
      var H = n.getCommentEditorProps,
        I = n.getCommentProps,
        J = n.getTotalRepliesCountForComment,
        K = n.isReplyComposerVisibleForComment,
        L = g.id,
        M = g.optimistic_action == null && g.optimistic_error == null;
      I = I(g);
      var N = g.spam_display_mode != null && g.spam_display_mode !== "none";
      I.key;
      I = babelHelpers.objectWithoutPropertiesLoose(I, ["key"]);
      var O = k(c("CometFeedStoryEncryptedTrackingContext")),
        P = c("useCometUFIVPVDEndpoint")(),
        Q = j(
          function (a, b, d) {
            if (!M) return;
            c("logCommentViewportViewDuration")(
              babelHelpers["extends"](
                {
                  commentID: L,
                  endpoint: P,
                  isLivePinnedComment: !1,
                  isReply: !1,
                  milliseconds: b,
                  storyRenderLocation: D,
                },
                c("getViewportViewDurationPropertiesFromTrackingData")(d),
                { visibleStartTime: a, xt: O }
              )
            );
          },
          [L, M, D, P, O]
        ),
        R = j(
          function () {
            return A(L);
          },
          [L, A]
        ),
        S = j(
          function () {
            return B(L);
          },
          [L, B]
        ),
        T = j(
          function () {
            z === L && B(null);
          },
          [L, z, B]
        );
      I = i.jsx(
        c("CometUFIComment.react"),
        babelHelpers["extends"]({}, I, {
          feedLocation: r,
          feedbackSource: q,
          isHighlighted: c("isCommentTokenOrFBID")(s, g),
          isLocallyComposed:
            g.client_id != null && u != null && u.has(g.client_id),
          isRealtime: g.id != null && y != null && y.has(g.id),
          logCommentViewportViewDuration: Q,
          onEdit: R,
          onTranslated: S,
          onUntranslated: T,
          storyRenderLocation: D,
          topLevelViewOption: E,
          translationRequested: C,
          viewOption: F,
          xstyle: [
            a === 0 && m.commentRow,
            a > 0 && m.commentRowNested,
            t && m.firstCommentRow,
          ],
        })
      );
      Q = null;
      if (n.depth === 0 && !N) {
        if (
          (e == null ? void 0 : e.threading_config) != null &&
          (e == null
            ? void 0
            : (R = e.threading_config_type) == null
            ? void 0
            : R.__typename) === "FullThreadingFeedbackConfig"
        ) {
          S = {
            children: I,
            comment: g,
            config: e.threading_config,
            getTotalRepliesCountForComment: J,
            isReplyComposerVisibleForComment: K,
            onRepliesListRendered: function (a) {
              return G(g.id, a);
            },
            replyComposerVisible: K(g),
            totalRepliesCount: J(g),
          };
          I = i.jsx(d("CometRelay").MatchContainer, {
            fallback: I,
            match: e.threading_config,
            props: S,
          });
        }
        var U = e == null ? void 0 : e.replies_list_renderer;
        if (U == null)
          throw c("unrecoverableViolation")(
            "CometUFICommentGroup: Tried to render nested comment list without a valid renderer!",
            "multithreading"
          );
        T = n.getNestedCommentsListProps;
        Q = i.jsx(
          c("CometUFICommentList.react"),
          babelHelpers["extends"]({}, T(L), {
            children: function (a) {
              var b = {
                actor: f,
                composerPluginProps: o,
                editingCommentID: p,
                feedLocation: r,
                feedbackSource: q,
                focusCommentID: s,
                locallyComposedCommentIds: u,
                onCommitCommentCreate: v,
                onEditCommentError: w,
                onTranslateAllClick: x,
                realtimeCommentIds: y,
                renderedTranslationCommentID: z,
                repliesListRenderProps: a,
                setEditingCommentID: A,
                setRenderedTranslationCommentID: B,
                shouldRequestTranslationForAllComments: C,
                storyRenderLocation: D,
                viewOption: F,
              };
              return i.jsx("div", {
                "data-testid": void 0,
                onMouseEnter: a.onCommentsListMouseEnter,
                onMouseLeave: a.onCommentsListMouseLeave,
                children: i.jsx(c("CometPlaceholder.react"), {
                  fallback: i.jsx("div", {}),
                  children: i.jsx(d("CometRelay").MatchContainer, {
                    match: U,
                    props: b,
                  }),
                }),
              });
            },
          })
        );
      }
      return i.jsxs(i.Fragment, {
        children: [
          L === p
            ? i.jsx(c("CometPlaceholder.react"), {
                fallback: i.jsx("div", {
                  "aria-busy": "true",
                  className: "aero",
                  children: I,
                }),
                children: i.jsx(
                  l,
                  babelHelpers["extends"]({}, o, H(), {
                    comment: g,
                    depth: a,
                    feedbackSource: q,
                    onError: w,
                    onFinishEdit: function () {
                      return A(null);
                    },
                    storyRenderLocation: D,
                  })
                ),
              })
            : I,
          L === z && !C
            ? i.jsx(c("CometUFICommentTranslateAllButton.react"), {
                onClick: x,
              })
            : null,
          Q,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIHiddenCommentsPlaceholder.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometTooltip.react",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback;
    function a(a) {
      var b = a.commentIDs,
        e = a.expandHiddenComments;
      return j.jsx(c("CometTooltip.react"), {
        tooltip: h._({ "*": "{count} hidden" }, [
          h._param("count", b.length),
          h._plural(b.length),
        ]),
        children: j.jsx(c("CometPressable.react"), {
          "aria-label": h._("Show comments marked as spam"),
          display: "inline",
          onPress: k(
            function () {
              return e(b);
            },
            [b, e]
          ),
          role: "button",
          children: j.jsx(c("TetraIcon.react"), {
            color: "secondary",
            icon: d("fbicon")._(i("484388"), 24),
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
  "CometUFICommentGroup.react",
  [
    "CometRelay",
    "CometUFICommentGroup_feedback.graphql",
    "CometUFICommentInGroup.react",
    "CometUFIHiddenCommentsPlaceholder.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.commentsListRenderProps,
        f = a.feedback,
        g = a.groupedComments,
        j = a.locallyComposedCommentIds,
        k = a.realtimeCommentIds,
        l = a.viewOption,
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          "commentsListRenderProps",
          "feedback",
          "groupedComments",
          "locallyComposedCommentIds",
          "realtimeCommentIds",
          "viewOption",
        ]),
        n = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("CometUFICommentGroup_feedback.graphql")),
          f
        );
      a =
        (n == null ? void 0 : n.is_hide_transparency_enabled_for_actor) === !0;
      var o = e.depth;
      f = e.getHiddenCommentsPlaceholderProps;
      if (g.state === "COLLAPSED" && l !== "ADMIN_HIDDEN")
        return a
          ? null
          : i.jsx("li", {
              className:
                "dati1w0a qt6c0cv9 hv4rvrfc ecm0bbzt taijpn5t j83agx80 bp9cbjyn",
              children: i.jsx(
                c("CometUFIHiddenCommentsPlaceholder.react"),
                babelHelpers["extends"]({}, f(), {
                  commentIDs: g.comments.map(function (a) {
                    return a.id;
                  }),
                })
              ),
            });
      return g.state !== "VISIBLE" && l !== "ADMIN_HIDDEN"
        ? null
        : g.comments.map(function (a, b) {
            return i.jsx(
              "li",
              {
                "data-testid": void 0,
                children: i.jsx(
                  c("CometUFICommentInGroup.react"),
                  babelHelpers["extends"]({}, m, {
                    comment: a,
                    commentsListRenderProps: e,
                    feedback: n,
                    isFirstRow: o === 0 && b === 0,
                    locallyComposedCommentIds: j,
                    realtimeCommentIds: k,
                    viewOption: l,
                  })
                ),
              },
              a.client_id != null && a.client_id !== "" ? a.client_id : a.id
            );
          });
    }
    e = i.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometUFICommentsFilterFallbackWarning.react",
  ["fbt", "TetraText.react", "react", "stylex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.Selectors,
        d = a.depth,
        e = a.direction,
        f = a.isPageOrProfilePlus,
        g = a.listState,
        j = a.totalCount,
        k = a.unfilteredTotalCount,
        l = a.viewOption;
      a = a.xstyle;
      var m = b.isPagerLoading({ depth: d, direction: e, state: g });
      if (m) return null;
      m = b.hasMoreInDirection({
        depth: d,
        direction: e,
        state: g,
        totalCount: j,
      });
      if (m) return null;
      j = b.getVisibleCommentsCount({ depth: d, state: g });
      m = k === j;
      if (m) return null;
      if (j === 0 && e === "backward") return null;
      var n;
      switch (l) {
        case "RANKED_THREADED":
          n =
            d > 0
              ? h._(
                  "Most Relevant is selected, so some replies may have been filtered out."
                )
              : h._(
                  "Most Relevant is selected, so some comments may have been filtered out."
                );
          break;
        case "ADMIN_HIDDEN":
          n =
            f === !0
              ? h._(
                  "Hidden by This Page is selected, so other comments have been filtered out except related comments that provide context. To reply to a comment you've unhidden, change your filter selection."
                )
              : h._(
                  "Hidden by You is selected, so other comments have been filtered out except related comments that provide context. To reply to a comment you've unhidden, change your filter selection."
                );
          break;
        default:
          n =
            d > 0
              ? h._(
                  "Some replies may have been filtered out by the selected ordering mode"
                )
              : h._(
                  "Some comments may have been filtered out by the selected ordering mode"
                );
      }
      return i.jsx("div", {
        className: c("stylex")(a),
        children: i.jsx(c("TetraText.react"), { type: "meta4", children: n }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentsPagerErrorIcon.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometTooltip.react",
    "react",
    "useCometUFICodedErrorDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useEffect;
    function l(a) {
      return (
        Object.prototype.hasOwnProperty.call(a, "code") &&
        Object.prototype.hasOwnProperty.call(a, "description") &&
        Object.prototype.hasOwnProperty.call(a, "summary")
      );
    }
    var m = "Couldn't load comments. Try again in a few moments.";
    function a(a) {
      var b = a.error,
        d = l(b);
      a = m;
      var e = c("useCometUFICodedErrorDialog")(),
        f = e.errorDialog,
        g = e.setError;
      k(
        function () {
          d && g(b);
        },
        [b, d, g]
      );
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(c("CometTooltip.react"), {
            tooltip: h._("{comment pagination error icon tooltip message}", [
              h._param(
                "comment pagination error icon tooltip message",
                j.jsx("span", { children: a })
              ),
            ]),
            children: j.jsx(c("CometImage.react"), { src: i("1334173") }),
          }),
          f,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentsPagerBase.react",
  [
    "CometPressable.react",
    "CometProgressRingIndeterminate.react",
    "CometTrackingNodeProvider.react",
    "CometUFICommentsPagerErrorIcon.react",
    "TetraIcon.react",
    "TetraText.react",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        fresh: {
          backgroundColor: "is6700om",
          bottom: "i09qtzwb",
          opacity: "b5wmifdl",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          transitionDuration: "ms05siws",
          transitionProperty: "art1omkt",
          transitionTimingFunction: "heur4gxb",
          width: "dsl5tyj5",
        },
        freshDepth0: { start: "dknv9fml" },
        freshDepth1: { start: "ghkatn0t" },
        freshDepth2: { start: "rn3csqz5" },
        freshVisible: { opacity: "pedkr2u6" },
        icon: {
          display: "j83agx80",
          filter: "a5y0qf1c",
          marginEnd: "fv0vnmcu",
          marginStart: "ozuftl9m",
        },
        item: {
          display: "j83agx80",
          marginEnd: "fv0vnmcu",
          minWidth: "hpfvmrgz",
        },
        pagerBasePressable: {
          alignItems: "bp9cbjyn",
          color: "m9osqain",
          flexGrow: "buofh1pr",
          flexShrink: "g5gj957u",
          paddingEnd: "p8fzw8mz",
          ":hover": { textDecoration: "gpro0wi8" },
        },
        pagerWhileLoading: { cursor: "e3zaq2ox" },
        root: {
          display: "j83agx80",
          flexGrow: "buofh1pr",
          minHeight: "jklb3kyz",
          position: "l9j0dhe7",
        },
      };
    function a(a) {
      var b = a.children,
        d = a.depth,
        e = a.error,
        f = a.freshIndicatorVisible,
        g = a.icon,
        j = a.isFreshIndicatorAlignedAtStart;
      j = j === void 0 ? !0 : j;
      var k = a.isLoading,
        l = a.onMouseEnter;
      a = a.onPress;
      return h.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 24,
        children: h.jsxs("div", {
          className: c("stylex")(i.root),
          children: [
            h.jsx("div", {
              className: c("stylex")(
                i.fresh,
                d === 0 && i.freshDepth0,
                d === 1 && j && i.freshDepth1,
                d === 2 && j && i.freshDepth2,
                f && i.freshVisible
              ),
            }),
            h.jsxs(c("CometPressable.react"), {
              disabled: k,
              onHoverIn: l,
              onPress: a,
              overlayDisabled: !0,
              testid: void 0,
              xstyle: [i.pagerBasePressable, k && i.pagerWhileLoading],
              children: [
                g
                  ? h.jsx(
                      "span",
                      {
                        className: c("stylex")(i.icon),
                        children: h.jsx(c("TetraIcon.react"), {
                          color: "secondary",
                          icon: g,
                        }),
                      },
                      "icon"
                    )
                  : null,
                h.jsx(
                  "span",
                  {
                    className: c("stylex")(i.item),
                    children: h.jsx(c("TetraText.react"), {
                      color: "secondary",
                      type: "bodyLink3",
                      children: b,
                    }),
                  },
                  "text"
                ),
                k &&
                  h.jsx("div", {
                    className: c("stylex")(i.item),
                    children: h.jsx(c("CometProgressRingIndeterminate.react"), {
                      color: "disabled",
                      size: 16,
                    }),
                  }),
                e != null && c("gkx")("1585174")
                  ? h.jsx("div", {
                      className: c("stylex")(i.item),
                      children: h.jsx(
                        c("CometUFICommentsPagerErrorIcon.react"),
                        { error: e }
                      ),
                    })
                  : null,
              ],
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
  "getUFI2CommentsPagerLabel",
  ["fbt", "intlNumUtils"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = a.isCommunityQA,
        c = a.labelType;
      a = a.numCommentsToShow;
      switch (c) {
        case "view_one":
          return h._({ answer: "View 1 answer", comment: "View 1 comment" }, [
            h._enum(b === !0 ? "answer" : "comment", {
              answer: "answer",
              comment: "comment",
            }),
          ]);
        case "view_more":
          return h._(
            { answers: "View more answers", comments: "View more comments" },
            [
              h._enum(b === !0 ? "answers" : "comments", {
                answers: "answers",
                comments: "comments",
              }),
            ]
          );
        case "view_one_more":
          return h._(
            { answer: "View 1 more answer", comment: "View 1 more comment" },
            [
              h._enum(b === !0 ? "answer" : "comment", {
                answer: "answer",
                comment: "comment",
              }),
            ]
          );
        case "view_more_explicit":
          return h._(
            {
              "*": {
                answer: "View {count} more answer",
                answers: "View {count} more answers",
                comment: "View {count} more comment",
                comments: "View {count} more comments",
              },
            },
            [
              h._param(
                "count",
                d("intlNumUtils").formatNumberWithThousandDelimiters(a),
                [0, a]
              ),
              h._enum(
                b === !0
                  ? a === 1
                    ? "answer"
                    : "answers"
                  : a === 1
                  ? "comment"
                  : "comments",
                {
                  answer: "answer",
                  answers: "answers",
                  comment: "comment",
                  comments: "comments",
                }
              ),
            ]
          );
        case "view_previous":
          return h._(
            {
              answers: "View previous answers",
              comments: "View previous comments",
            },
            [
              h._enum(b === !0 ? "answers" : "comments", {
                answers: "answers",
                comments: "comments",
              }),
            ]
          );
        case "view_previous_explicit":
          return h._(
            {
              "*": {
                answer: "View {count} previous answer",
                answers: "View {count} previous answers",
                comment: "View {count} previous comment",
                comments: "View {count} previous comments",
              },
            },
            [
              h._param(
                "count",
                d("intlNumUtils").formatNumberWithThousandDelimiters(a),
                [0, a]
              ),
              h._enum(
                b === !0
                  ? a === 1
                    ? "answer"
                    : "answers"
                  : a === 1
                  ? "comment"
                  : "comments",
                {
                  answer: "answer",
                  answers: "answers",
                  comment: "comment",
                  comments: "comments",
                }
              ),
            ]
          );
        default:
          c;
          return h._({ answers: "View answers", comments: "View comments" }, [
            h._enum(b === !0 ? "answers" : "comments", {
              answers: "answers",
              comments: "comments",
            }),
          ]);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "getUFI2RepliesPagerLabel",
  ["fbt", "intlNumUtils"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = a.labelType,
        c = a.numCommentsToShow;
      a = a.numCommentsTotal;
      switch (b) {
        case "view_one":
          return h._("View 1 reply");
        case "view_more":
          return h._("View more replies");
        case "view_one_more":
          return h._("View 1 more reply");
        case "view_more_explicit":
          return h._(
            {
              "*": {
                "*": "View {count} more replies",
                _1: "View {count} more reply",
              },
            },
            [
              h._param(
                "count",
                d("intlNumUtils").formatNumberWithThousandDelimiters(c),
                [0, c]
              ),
              h._plural(c),
            ]
          );
        case "view_previous":
          return h._("View previous replies");
        case "view_previous_explicit":
          return h._(
            {
              "*": {
                "*": "View {count} previous replies",
                _1: "View {count} previous reply",
              },
            },
            [
              h._param(
                "count",
                d("intlNumUtils").formatNumberWithThousandDelimiters(c),
                [0, c]
              ),
              h._plural(c),
            ]
          );
        case "view_comments_indeterminate":
          return h._("View replies");
        case "view_all":
        default:
          return h._({ "*": "View all {count} replies" }, [
            h._param(
              "count",
              d("intlNumUtils").formatNumberWithThousandDelimiters(a),
              [0, a]
            ),
          ]);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "getCometUFIPagerLabel",
  [
    "ErrorGuard",
    "FBLogger",
    "UFI2ViewOption",
    "getUFI2CommentsPagerLabel",
    "getUFI2RepliesPagerLabel",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function h(a) {
      var b = a.Selectors,
        c = a.depth,
        e = a.direction,
        f = a.listState,
        g = a.pagerCount,
        h = a.pageSize,
        i = a.summaryTotalNumComments,
        j = a.totalCount;
      a = a.viewOption;
      var k = b.getVisibleCommentsCount({ depth: c, state: f });
      b = b.hasLastPageLeftInDirection({
        depth: c,
        direction: e,
        pageSize: h,
        state: f,
        totalCount: j,
      });
      f = d("UFI2ViewOption").shouldDisplayInReverse(a);
      j = (f && e === "backward") || (!f && e === "forward");
      if (k === 0) {
        if (g === 1 && i === 1) return "view_one";
        if (c > 0) return "view_all";
        else return "view_comments_indeterminate";
      } else if (b && g <= h)
        if (g === 1) return "view_one_more";
        else return "view_more_explicit";
      if (j) return "view_more";
      else return "view_previous";
    }
    function a(a) {
      var b = a.Selectors,
        d = a.depth,
        e = a.direction,
        f = a.isCommunityQA,
        g = a.listState,
        i = a.totalCount,
        j = b.isPagerVisible({ depth: d, direction: e, state: g });
      if (!j) return null;
      j = b.getPagerCount({ depth: d, direction: e, state: g });
      if (j == null) {
        c("FBLogger")("ufi2")
          .addMetadata(
            "UFI",
            "RAW_DATA",
            (b = c("ErrorGuard").applyWithGuard(JSON.stringify, JSON, [g])) !=
              null
              ? b
              : "FAILED_TO_SERIALIZE_COMPOSERSTATE"
          )
          .mustfix(
            "CometUFICommentsPager: Expected to have a pager count if pager was rendered"
          );
        return null;
      }
      e = h(babelHelpers["extends"]({}, a, { pagerCount: j }));
      g = d > 0;
      return g
        ? c("getUFI2RepliesPagerLabel")({
            labelType: e,
            numCommentsToShow: j,
            numCommentsTotal: i,
          })
        : c("getUFI2CommentsPagerLabel")({
            isCommunityQA: f,
            labelType: e,
            numCommentsToShow: j,
          });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentsPager.react",
  [
    "ix",
    "CometUFICommentsPagerBase.react",
    "UFICommonInteractionEvents",
    "UFICommonInteractionLogger",
    "clearTimeout",
    "fbicon",
    "getCometUFIPagerLabel",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b,
        e = a.Selectors,
        f = a.depth,
        g = a.direction,
        n = a.isCommunityQA,
        o = a.listState,
        p = a.loadMoreComments,
        q = a.onMouseEnter,
        r = m(!1),
        s = r[0],
        t = r[1];
      r = e.isPagerLoading({ depth: f, direction: g, state: o });
      var u = e.getPagerError({ depth: f, direction: g, state: o }),
        v = j(
          function () {
            var a = d("UFICommonInteractionLogger").startInteraction(
              f === 0
                ? c("UFICommonInteractionEvents")
                    .COMET_UFI_TOP_LEVEL_COMMENTS_PAGINATION
                : c("UFICommonInteractionEvents")
                    .COMET_UFI_REPLY_COMMENTS_PAGINATION
            );
            p({
              onCommentsRendered: function () {
                d("UFICommonInteractionLogger").endInteraction(a);
              },
            });
          },
          [f, p]
        );
      b =
        (b = e.getPagerCount({ depth: f, direction: g, state: o })) != null
          ? b
          : 0;
      var w = l(!1),
        x = l(b),
        y =
          b > x.current ||
          e.pagerHasRealtimeComments({ direction: g, state: o });
      k(
        function () {
          if (y === !1) {
            t(!1);
            return;
          }
          if (!w.current) {
            w.current = !0;
            t(!0);
            return;
          }
          t(!1);
          var a = c("setTimeout")(function () {
            t(!0);
          }, 200);
          return function () {
            return c("clearTimeout")(a);
          };
        },
        [y, b]
      );
      x = c("getCometUFIPagerLabel")(
        babelHelpers["extends"]({}, a, { isCommunityQA: n })
      );
      return x == null
        ? null
        : i.jsx(c("CometUFICommentsPagerBase.react"), {
            depth: f,
            error: u,
            freshIndicatorVisible: s,
            icon: f !== 0 ? d("fbicon")._(h("1602003"), 16) : void 0,
            isLoading: r,
            onMouseEnter: q,
            onPress: v,
            children: x,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometUFIComposerPlugins",
  [
    "CometRelay",
    "ErrorGuard",
    "useCometUFIComposerPlugins_feedback.graphql",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useCometUFIComposerPlugins_feedback.graphql")),
        a
      );
      var e = a == null ? void 0 : a.plugins,
        f = d("CometRelay").useRelayEnvironment();
      return c("useStable")(function () {
        if (e == null) return { draftjsPlugins: [], outlinePlugins: [] };
        var a = [];
        for (var b = 0; b < e.length; b++) {
          var g = e[b],
            h = d("CometRelay").ModuleResource.read(g);
          h && a.push([g, h]);
        }
        g = a
          .flatMap(function (b) {
            var a = b[0];
            b = b[1];
            return c("ErrorGuard").applyWithGuard(
              b,
              null,
              [{ environment: f, fragmentKey: a }],
              {
                name:
                  "Failed to initialize plugin " +
                  ((b = d("CometRelay").ModuleResource.getModuleId(a)) != null
                    ? b
                    : "UNKNOWN"),
                project: "ufi2",
              }
            );
          })
          .filter(Boolean);
        var i = [],
          j = [];
        g.forEach(function (a) {
          typeof a === "function" ? i.push(a) : j.push(a);
        });
        return { draftjsPlugins: i, outlinePlugins: j };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometUFIDisabledNotice",
  [
    "CometUFICommentDisabledNotice.react",
    "RelayHooks",
    "gkx",
    "react",
    "useCometUFIDisabledNotice_feedback.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a, e) {
      a = d("RelayHooks").useFragment(
        h !== void 0
          ? h
          : (h = b("useCometUFIDisabledNotice_feedback.graphql")),
        a
      );
      var f = a.are_live_video_comments_disabled,
        g = a.have_comments_been_disabled,
        j = a.is_viewer_muted,
        k = c("gkx")("976093");
      g = g === !0 || j === !0 || f === !0;
      j = k
        ? null
        : i.jsx(c("CometUFICommentDisabledNotice.react"), {
            feedback: a,
            viewOption: e,
          });
      return { areCommentsDisabled: g, commentsDisabledComponent: j };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIComposerWrapper.react",
  [
    "CometRelay",
    "CometUFIComposerWrapperUseComposerPluginProps_feedback.graphql",
    "CometUFIComposerWrapper_feedback.graphql",
    "react",
    "useCometUFIComposerPlugins",
    "useCometUFIDisabledNotice",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useMemo;
    function a(a, e) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometUFIComposerWrapperUseComposerPluginProps_feedback.graphql"
            )),
        e
      );
      e = c("useCometUFIComposerPlugins")(a);
      var f = e.draftjsPlugins,
        g = e.outlinePlugins;
      return k(
        function () {
          return { initialOutlinePlugins: g, initialPlugins: f };
        },
        [f, g]
      );
    }
    function e(a) {
      var e = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometUFIComposerWrapper_feedback.graphql")),
          a.feedback
        ),
        f = a.commentsListRenderProps,
        g = a.composerPluginProps,
        h = a.onCommitCommentCreate;
      a = a.xstyle;
      var k = e.composer_renderer,
        l = e.constituent_badge_banner_renderer,
        m = f.Selectors,
        n = f.depth,
        o = f.getComposerProps,
        p = f.listState;
      f = f.viewOption;
      m = m.isComposerVisible({ depth: n, state: p });
      p = {
        commentAction: "ADD",
        composerPluginProps: g,
        depth: n,
        getComposerProps: o,
        onCommit: h,
        viewOption: f,
        xstyle: a,
      };
      g = c("useCometUFIDisabledNotice")(e, f);
      n = g.areCommentsDisabled;
      o = g.commentsDisabledComponent;
      return n
        ? o
        : m && k != null
        ? j.jsxs(j.Fragment, {
            children: [
              j.jsx(d("CometRelay").MatchContainer, { match: l }),
              j.jsx(d("CometRelay").MatchContainer, { match: k, props: p }),
            ],
          })
        : null;
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.useComposerPluginProps = a;
    g.CometUFIComposerWrapper = e;
  },
  98
);
__d(
  "CometInteractionTracingModuleUfiLoadMoreCommentsQPLEvent",
  ["cr:2149"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2149");
  },
  98
);
__d(
  "CometUFIRepliesCollapser.react",
  [
    "fbt",
    "ix",
    "CometUFICommentsPagerBase.react",
    "NumberFormat",
    "fbicon",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.Selectors,
        e = a.collapseList,
        f = a.depth;
      a = a.listState;
      if (f !== 1) {
        c("recoverableViolation")(
          "CometUFIRepliesExpander: Can only render replies expander at depth 1",
          "ufi2"
        );
        return null;
      }
      if (!b.isRepliesCollapserVisible({ depth: f, state: a })) return null;
      b = b.getVisibleCommentsCount({ depth: f, state: a });
      a = h._(
        { "*": { "*": "Hide {count} Replies", _1: "Hide {count} Reply" } },
        [
          h._param("count", d("NumberFormat").formatInteger(b), [0, b]),
          h._plural(b),
        ]
      );
      return j.jsx(c("CometUFICommentsPagerBase.react"), {
        depth: f,
        freshIndicatorVisible: !1,
        icon: d("fbicon")._(i("505579"), 16),
        isFreshIndicatorAlignedAtStart: !1,
        isLoading: !1,
        onPress: e,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIRepliesExpander.react",
  [
    "fbt",
    "ix",
    "CometMiddot.react",
    "CometRelativeTimestamp.react",
    "CometRow.react",
    "CometRowItem.react",
    "CometUFICommentsPagerBase.react",
    "CometUFIRepliesExpander_highlightedComments.graphql",
    "DateConsts",
    "GraphQLGender",
    "NumberFormat",
    "RelayHooks",
    "TetraProfilePhoto.react",
    "TetraText.react",
    "UFI2SilhouetteConfig",
    "clearTimeout",
    "fbicon",
    "qex",
    "react",
    "recoverableViolation",
    "setTimeout",
    "useServerTime",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useEffect,
      m = e.useMemo,
      n = e.useRef,
      o = e.useState,
      p = {
        ellipsisText: {
          display: "q9uorilb",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          textOverflow: "ltmttdrg",
        },
        item: { whiteSpace: "g0qnabr5" },
      };
    function q(a) {
      var b = a.timestamp;
      a = m(
        function () {
          return new Date(b * d("DateConsts").MS_PER_SEC);
        },
        [b]
      );
      return k.jsx(c("TetraText.react"), {
        numberOfLines: 1,
        type: "meta3",
        children: k.jsx(c("CometRelativeTimestamp.react"), {
          date: a,
          format: "minimized",
        }),
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function a(a) {
      var e = d("RelayHooks").useFragment(
          j !== void 0
            ? j
            : (j = b("CometUFIRepliesExpander_highlightedComments.graphql")),
          a.highlightedComments
        ),
        f = c("useServerTime")(),
        g = a.Selectors,
        m = a.depth,
        r = a.expandList,
        s = a.listState,
        t = a.onMouseEnter;
      a = a.viewOption;
      var u = g.getRepliesExpanderCount({ depth: m, state: s }),
        v = o(!1),
        w = v[0],
        x = v[1],
        y = n(!1);
      v = n(u != null ? u : 0);
      var z = u != null && u > v.current && c("qex")._("209") === !0;
      l(
        function () {
          if (z === !1) {
            x(!1);
            return;
          }
          if (!y.current) {
            y.current = !0;
            x(!0);
            return;
          }
          x(!1);
          var a = c("setTimeout")(function () {
            x(!0);
          }, 200);
          return function () {
            return c("clearTimeout")(a);
          };
        },
        [u, z]
      );
      if (m !== 1) {
        c("recoverableViolation")(
          "CometUFIRepliesExpander: Can only render replies expander at depth 1",
          "ufi2"
        );
        return null;
      }
      if (!g.isRepliesExpanderVisible({ depth: m, state: s })) return null;
      if (u == null) {
        c("recoverableViolation")(
          "CometUFIRepliesExpander: Tried rendering a visible replies expander without a count",
          "ufi2"
        );
        return null;
      }
      v = g.isRepliesExpanderLoading({ depth: m, state: s });
      e = e || [];
      e = e[0];
      g = g.getRepliesExpanderError({ depth: m, state: s });
      s = h._({ "*": { "*": "{count} Replies", _1: "{count} Reply" } }, [
        h._param("count", d("NumberFormat").formatInteger(u), [0, u]),
        h._plural(u),
      ]);
      u = s;
      if (e && e.author) {
        var A,
          B = e.author,
          C = B.name;
        e = e.created_time;
        A = (A = B.profilePictureForReplyExpander) == null ? void 0 : A.uri;
        var D = new (c("GraphQLGender"))(B.gender);
        if (C != null && A != null && e != null) {
          f = f.getTime();
          f = f / 1e3 - e < 43200 || a === "RECENT_ACTIVITY";
          u = k.jsxs(c("CometRow.react"), {
            paddingHorizontal: 0,
            paddingVertical: 0,
            spacing: 4,
            verticalAlign: "center",
            children: [
              k.jsx(c("CometRowItem.react"), {
                children: k.jsx(c("TetraProfilePhoto.react"), {
                  addOn:
                    B.availability === "ACTIVE"
                      ? { type: "availabilityBadge" }
                      : void 0,
                  size: 24,
                  source: {
                    uri:
                      (a = A) != null
                        ? a
                        : c("UFI2SilhouetteConfig").neutralSilhouette24,
                  },
                }),
              }),
              k.jsx(c("CometRowItem.react"), {
                expanding: !0,
                xstyle: [p.item, p.ellipsisText],
                children: h._({ "*": "{actor} replied" }, [
                  h._name("actor", C, D.toIntlVariationsEnum()),
                ]),
              }),
              k.jsx(c("CometRowItem.react"), {
                children: k.jsx(c("CometMiddot.react"), {}),
              }),
              k.jsx(c("CometRowItem.react"), { xstyle: p.item, children: s }),
              f
                ? k.jsx(c("CometRowItem.react"), {
                    xstyle: p.item,
                    children: k.jsx(q, { timestamp: e }),
                  })
                : null,
            ],
          });
        }
      }
      return k.jsx(c("CometUFICommentsPagerBase.react"), {
        depth: m,
        error: g,
        freshIndicatorVisible: w,
        icon: d("fbicon")._(i("1602003"), 16),
        isLoading: v,
        onMouseEnter: t,
        onPress: function () {
          return r({ focusComposer: !0 });
        },
        children: u,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIDefaultRepliesListRenderer.react",
  [
    "CometInteractionTracingModuleUfiLoadMoreCommentsQPLEvent",
    "CometRelay",
    "CometUFICommentGroup.react",
    "CometUFICommentsFilterFallbackWarning.react",
    "CometUFICommentsPager.react",
    "CometUFIComposer.react",
    "CometUFIDefaultRepliesListRenderer_renderer.graphql",
    "CometUFIRepliesCollapser.react",
    "CometUFIRepliesExpander.react",
    "UFI2ViewOption",
    "react",
    "stylex",
    "unrecoverableViolation",
    "useCometInteractionTracing",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useRef,
      k = {
        commentRowNested: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "e5nlhep0",
          paddingStart: "scb9dxdr",
        },
        composerNested: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
        },
        pagerWrapper: { position: "l9j0dhe7" },
        root: {
          marginTop: "kvgmc6g5",
          paddingTop: "jb3vyjys",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "d0szoon8",
        },
      };
    function a(a) {
      var e = a.actor,
        f = a.composerPluginProps,
        g = a.editingCommentID,
        l = a.feedbackSource,
        m = a.feedLocation,
        n = a.focusCommentID,
        o = a.locallyComposedCommentIds,
        p = a.onCommitCommentCreate,
        q = a.onEditCommentError,
        r = a.onTranslateAllClick,
        s = a.realtimeCommentIds,
        t = a.renderedTranslationCommentID,
        u = a.renderer,
        v = a.repliesListRenderProps,
        w = a.setEditingCommentID,
        x = a.setRenderedTranslationCommentID,
        y = a.shouldRequestTranslationForAllComments,
        z = a.storyRenderLocation,
        A = a.viewOption;
      if (v.depth !== 1)
        throw c("unrecoverableViolation")(
          "CometUFIDefaultRepliesListRenderer: Must be rendered at depth 1",
          "ufi2"
        );
      d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometUFIDefaultRepliesListRenderer_renderer.graphql")),
        u
      );
      a = v.Selectors;
      u = v.depth;
      var B = v.getComposerProps,
        C = v.getFilterWarningPropsForNewerComments,
        D = v.getFilterWarningPropsForOlderComments,
        E = v.getPagerPropsForNewerComments,
        F = v.getPagerPropsForOlderComments,
        G = v.getRepliesCollapserProps,
        H = v.getRepliesExpanderProps,
        I = v.listState,
        J = d("UFI2ViewOption").shouldDisplayInReverse(v.viewOption),
        K = a.getVisibleCommentsWithHiddenCommentsCollapsed({
          depth: u,
          reverse: J,
          state: I,
        }),
        L = a.isComposerVisible({ depth: u, state: I }),
        M = a.isListExpanded({ depth: u, state: I }),
        N = a.isRepliesExpanderLoading({ depth: u, state: I });
      a = a.getVisibleCommentsCount({ depth: u, state: I });
      var O = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleUfiLoadMoreCommentsQPLEvent"),
          "fluid",
          "INTERACTION",
          "comet.ufi.load_more_comments"
        ),
        P = F(),
        Q = E(),
        R = j(null);
      I = babelHelpers["extends"]({}, J ? P : Q, {
        loadMoreComments: function () {
          for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
          O(function (a) {
            var c = R.current;
            c && a.observeMutation(c);
            (J ? P.loadMoreComments : Q.loadMoreComments).apply(void 0, b);
          });
        },
      });
      F = babelHelpers["extends"]({}, J ? Q : P, {
        loadMoreComments: function () {
          for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
          O(function (a) {
            var c = R.current;
            c && a.observeMutation(c);
            (J ? Q.loadMoreComments : P.loadMoreComments).apply(void 0, b);
          });
        },
      });
      E = (function (a) {
        return J ? a.reverse() : a;
      })(
        [C(), D()].map(function (a) {
          return (
            A === "RANKED_THREADED" &&
            i.jsx(
              c("CometUFICommentsFilterFallbackWarning.react"),
              babelHelpers["extends"]({}, a, {
                viewOption: A,
                xstyle: k.commentRowNested,
              })
            )
          );
        })
      );
      C = E[0];
      D = E[1];
      return !M || N
        ? i.jsx("div", {
            className: c("stylex")(k.root),
            children: i.jsx(
              c("CometUFIRepliesExpander.react"),
              babelHelpers["extends"]({}, H())
            ),
          })
        : i.jsxs("div", {
            className: c("stylex")(k.root),
            ref: R,
            children: [
              i.jsx(
                c("CometUFIRepliesCollapser.react"),
                babelHelpers["extends"]({}, G())
              ),
              i.jsx(
                c("CometUFICommentsPager.react"),
                babelHelpers["extends"]({}, I)
              ),
              C,
              a > 0
                ? i.jsx("ul", {
                    children: K.map(function (a, b) {
                      return i.jsx(
                        c("CometUFICommentGroup.react"),
                        {
                          actor: e,
                          commentsListRenderProps: v,
                          composerPluginProps: f,
                          editingCommentID: g,
                          feedLocation: m,
                          feedbackSource: l,
                          focusCommentID: n,
                          groupedComments: a,
                          locallyComposedCommentIds: o,
                          onCommitCommentCreate: p,
                          onEditCommentError: q,
                          onTranslateAllClick: r,
                          realtimeCommentIds: s,
                          renderedTranslationCommentID: t,
                          setEditingCommentID: w,
                          setRenderedTranslationCommentID: x,
                          shouldRequestTranslationForAllComments: y,
                          storyRenderLocation: z,
                          viewOption: A,
                        },
                        b
                      );
                    }),
                  })
                : null,
              D,
              i.jsx("div", {
                className: c("stylex")(k.pagerWrapper),
                children: i.jsx(
                  c("CometUFICommentsPager.react"),
                  babelHelpers["extends"]({}, F)
                ),
              }),
              L && e != null
                ? i.jsx(
                    c("CometUFIComposer.react"),
                    babelHelpers["extends"]({}, f, B(), {
                      actor: e,
                      commentAction: "ADD",
                      commentID: null,
                      depth: u,
                      onCommit: p,
                      xstyle: k.composerNested,
                    })
                  )
                : null,
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIPaginationProgressIndicator.react",
  ["fbt", "TetraText.react", "formatNumber", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.Selectors,
        d = a.depth,
        e = a.listState,
        f = a.pageSize;
      a = a.totalCount;
      var g = b.hasMoreInDirection({
        depth: d,
        direction: "forward",
        state: e,
        totalCount: a,
      });
      b = b.getVisibleCommentsCount({ depth: d, state: e });
      return a >= f && g
        ? i.jsx("div", {
            className: "j83agx80 bp9cbjyn",
            children: i.jsx(c("TetraText.react"), {
              align: "center",
              color: "secondary",
              type: "body3",
              children: h._(
                "{number of comments displayed} of {total number of comments}",
                [
                  h._param(
                    "number of comments displayed",
                    c("formatNumber").withThousandDelimiters(b)
                  ),
                  h._param(
                    "total number of comments",
                    c("formatNumber").withThousandDelimiters(a)
                  ),
                ]
              ),
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
  "CometUFITypingIndicator.react",
  [
    "fbt",
    "CometProgressIndicator.react",
    "CometRelay",
    "CometUFITypingIndicator_feedback.graphql",
    "FBLogger",
    "TetraText.react",
    "UFI2RealtimeContainer.react",
    "clearTimeout",
    "debounce",
    "emptyFunction",
    "gkx",
    "react",
    "requireDeferred",
    "setTimeout",
    "stylex",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useState,
      o = c("requireDeferred")("CometUFITypingSubscription").__setRef(
        "CometUFITypingIndicator.react"
      ),
      p = 15 * 1e3;
    function a(a) {
      var e = d("CometRelay").useRelayEnvironment(),
        f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometUFITypingIndicator_feedback.graphql")),
          a.feedback
        );
      a = n({ isTyping: !1, isVisible: !1 });
      var g = a[0],
        q = g.isTyping;
      g = g.isVisible;
      var r = a[1];
      a = n(!0);
      var s = a[0],
        t = a[1];
      l(
        function () {
          r(function (a) {
            return babelHelpers["extends"]({}, a, {
              isTyping: Boolean(
                ((a =
                  f == null
                    ? void 0
                    : (a = f.feedback_typers) == null
                    ? void 0
                    : a.other_count) != null
                  ? a
                  : 0) > 0
              ),
            });
          });
        },
        [f]
      );
      var u = m(function () {
        return c("debounce")(function () {
          return r(function (a) {
            return babelHelpers["extends"]({}, a, { isTyping: !1 });
          });
        }, p);
      }, []);
      l(
        function () {
          return function () {
            u.reset();
          };
        },
        [u]
      );
      var v = f.id,
        w = f.subscription_target_id;
      a = k(
        function () {
          if (v == null || w == null) return null;
          var a = !1,
            b = c("emptyFunction"),
            d = {
              dispose: function () {
                (a = !0), b(), u.reset();
              },
            };
          o.onReady(function (d) {
            if (a) return;
            d = d.subscribe(e, v, {
              onNext: function () {
                return u();
              },
            });
            a
              ? (d.dispose(),
                c("FBLogger")("ufi2").debug(
                  "CometUFITypingSubscription in CometUFITypingIndicator subscription was cancelled as it started"
                ))
              : (b = d.dispose);
          });
          return d;
        },
        [u, e, v, w]
      );
      var x = k(function (a) {
          a = a.hiddenReason;
          a !== "COMPONENT_UNMOUNTED" &&
            r(function (a) {
              return babelHelpers["extends"]({}, a, { isVisible: !1 });
            });
        }, []),
        y = k(function () {
          r(function (a) {
            return babelHelpers["extends"]({}, a, { isVisible: !0 });
          });
        }, []);
      x = c("useVisibilityObserver")({ onHidden: x, onVisible: y });
      var z = g && q;
      z && s && t(!1);
      l(
        function () {
          if (!z) {
            var a = c("setTimeout")(function () {
              t(!0);
            }, 500);
            return function () {
              return c("clearTimeout")(a);
            };
          }
        },
        [z]
      );
      return f.is_eligible_for_real_time_updates !== !0 || c("gkx")("1352841")
        ? null
        : j.jsx(c("UFI2RealtimeContainer.react"), {
            subscribe: a,
            children: j.jsx("div", {
              className: "stjgntxs ni8dbmo4",
              children: j.jsxs("div", {
                className: c("stylex").dedupe(
                  {
                    "align-items-1": "bp9cbjyn",
                    "display-1": "j83agx80",
                    "height-1": "k7cz35w2",
                    "justify-content-1": "jifvfom9",
                    "padding-end-1": "hv4rvrfc",
                    "padding-start-1": "dati1w0a",
                    "transition-0.1": "qvze9t23",
                  },
                  z ? null : { "margin-top-1": "tpo14512" },
                  z ? { "margin-top-1": "kvgmc6g5" } : null
                ),
                ref: x,
                children: [
                  j.jsx("div", {
                    className: "ggphbty4 wkznzc2l taijpn5t j83agx80",
                    children: s
                      ? null
                      : j.jsx(c("CometProgressIndicator.react"), {
                          disableLoadingStateTracker: !0,
                          size: "small",
                        }),
                  }),
                  z
                    ? j.jsx(c("TetraText.react"), {
                        type: "meta1",
                        children: h._("Someone is typing a comment..."),
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
  "CommentOrderingMode",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ADMIN_FIRST: "admin_first",
      ADMIN_HIDDEN: "admin_hidden",
      ADMIN_HIDDEN_SUB_REPLIES: "admin_hidden_sub_replies",
      ANSWERED: "answered",
      CHRONO_SUB_REPLIES: "chrono_sub_replies",
      CHRONOLOGICAL: "chronological",
      FEATURED: "featured",
      FILTERED_REPLIES: "filtered_replies",
      FISHBOWL_GUESTS: "fishbowl_guests",
      FISHBOWL_NORMIES: "fishbowl_normies",
      FRIENDS_COMMENTS: "friends_comments",
      GROUP_POST_DYNAMIC: "group_post_dynamic",
      LIVE_STREAMING: "live_streaming",
      MODERATION_RELEVANT: "moderation_relevant",
      MOST_ENGAGEMENT: "most_engagement",
      MOST_REACCS: "most_reaccs",
      MOST_STARS_SENT: "most_stars_sent",
      MOST_VOTED: "most_voted",
      OLDEST: "oldest",
      RANKED_REPLIES: "ranked_replies",
      RANKED_SUB_REPLIES: "ranked_sub_replies",
      RANKED_THREADED: "ranked_threaded",
      RANKED_UNFILTERED: "ranked_unfiltered",
      RECENT_ACTIVITY: "recent_activity",
      STAR_COMMENTS: "star_comments",
      SUB_REPLIES: "sub_replies",
      SUPPORTERS_COMMENTS: "supporters_comments",
      SURVEY_GALLERY: "survey_gallery",
      TOP_FAN: "top_fan",
      TOPLEVEL: "toplevel",
      UNANSWERED: "unanswered",
      UNSEEN_COMMENTS: "unseen_comments",
    });
    f["default"] = a;
  },
  66
);
__d(
  "CommentOrderingModeFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743400");
    c = b("FalcoLoggerInternal").create("comment_ordering_mode", a);
    e.exports = c;
  },
  null
);
__d(
  "CometUFIViewOptionsSelector.react",
  [
    "fbt",
    "ix",
    "CometDeferredPopoverTrigger.react",
    "CometPressable.react",
    "CometRelay",
    "CometTextWithIcon.react",
    "CometUFIViewOptionsSelector_feedback.graphql",
    "CommentOrderingMode",
    "CommentOrderingModeFalcoEvent",
    "JSResourceForInteraction",
    "TetraIcon.react",
    "TetraText.react",
    "emptyFunction",
    "fbicon",
    "mergeRefs",
    "nux:11",
    "promiseDone",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "stylex",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = c("requireDeferred")(
        "CometUFIViewOptionsSelectorMenu.react"
      ).__setRef("CometUFIViewOptionsSelector.react"),
      m = {
        tooltipWithMaxWidth: { maxWidth: "nqmqzb3c" },
        viewOptionsSelectorWrapper: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          marginTop: "kvgmc6g5",
          marginEnd: "cxmmr5t8",
          marginBottom: "oygrvhab",
          marginStart: "hcukyx3x",
          minHeight: "h3fqq6jp",
        },
      },
      n = c("JSResourceForInteraction")(
        "CometGroupsCommentSortSwitcherTypedLogger.react"
      ).__setRef("CometUFIViewOptionsSelector.react");
    function a(a) {
      var e,
        f = a.feedback,
        g = a.onChange,
        o = a.selectedViewOption,
        p = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("CometUFIViewOptionsSelector_feedback.graphql")),
          f
        );
      a = (p == null ? void 0 : p.localized_comment_orderings) || [];
      f = c("useVisibilityObserver")({
        onVisible: function () {
          var a = p.share_fbid;
          if (o != null && o !== "%future added value" && a != null) {
            var b =
              c("CommentOrderingMode")[o] === p.default_comment_ordering
                ? "default"
                : "changed";
            c("CommentOrderingModeFalcoEvent").log(function () {
              return {
                comment_ordering_mode: c("CommentOrderingMode")[o],
                event_type: b,
                feedback_id: a,
              };
            });
          }
        },
      });
      var q = function () {
          var a;
          (p == null
            ? void 0
            : (a = p.associated_group) == null
            ? void 0
            : a.id) != null &&
            c("promiseDone")(n.load(), function (a) {
              a.onSortingSwitchClick(o);
            });
        },
        r = function (a) {
          var b;
          (p == null
            ? void 0
            : (b = p.associated_group) == null
            ? void 0
            : b.id) != null &&
            c("promiseDone")(n.load(), function (b) {
              b.onOptionChange(o, a);
            });
          g(a);
        },
        s = p.is_hide_transparency_enabled_for_actor;
      e =
        s !== !0
          ? c("emptyFunction")
          : (e =
              b("nux:11") == null
                ? void 0
                : b("nux:11")("hidden_comments_transparency_tooltip_nux")) !=
            null
          ? e
          : c("emptyFunction");
      var t = e(
        {
          align: "end",
          arrowStyle: "edge",
          hasCloseButton: !1,
          label: h._(
            "To see hidden comments or unhide them, change this filter."
          ),
          position: "below",
          type: "accent",
          xstyle: m.tooltipWithMaxWidth,
        },
        s === !0
      );
      if (a.length <= 1) return null;
      e = a.find(function (a) {
        return a.value === o;
      });
      var u = e == null ? void 0 : e.title;
      if (u == null) {
        c("recoverableViolation")(
          "Selected Label not found for CometUFIViewOptionsSelector",
          "ufi2"
        );
        return null;
      }
      return k.jsx("div", {
        className: c("stylex")(m.viewOptionsSelectorWrapper),
        ref: f,
        children: k.jsx(c("CometDeferredPopoverTrigger.react"), {
          align: "end",
          popoverProps: { onChange: r, viewOptions: a },
          popoverResource: l,
          position: "below",
          children: function (a, b) {
            return k.jsx(c("CometPressable.react"), {
              display: "inline",
              onPress: b,
              onPressIn: q,
              overlayDisabled: !0,
              ref: c("mergeRefs")(t, a),
              children: k.jsx(c("TetraText.react"), {
                color: "secondary",
                type: "bodyLink3",
                children: k.jsx(c("CometTextWithIcon.react"), {
                  iconAfter: k.jsx(c("TetraIcon.react"), {
                    color: "secondary",
                    icon: d("fbicon")._(i("481882"), 16),
                    size: 16,
                  }),
                  children: u,
                }),
              }),
            });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIReactionLinkWithError.react",
  ["CometUFIReactionLink.react", "react", "useCometUFICodedErrorDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = c("useCometUFICodedErrorDialog")(),
        d = b.errorDialog;
      b = b.setError;
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(
            c("CometUFIReactionLink.react"),
            babelHelpers["extends"]({}, a, { onReactionError: b })
          ),
          d,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIAccessibleCommentsHeading.react",
  ["fbt", "CometScreenReaderHeading.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.commentCount;
      a = a.i18nCommentCount;
      return i.jsx(c("CometScreenReaderHeading.react"), {
        children:
          b != null && a != null
            ? h._({ "*": "{number} Comments", _1: "1 Comment" }, [
                h._plural(b, "number", a),
              ])
            : h._("Comments"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentPager.react",
  ["CometUFICommentsPager.react", "UFI2ViewOption", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      var b = a.commentsListRenderProps,
        e = a.isCommunityQA;
      a = a.isTop;
      var f = b.getPagerPropsForNewerComments,
        g = b.getPagerPropsForOlderComments;
      b = b.viewOption;
      if (b === "LIVE_STREAMING") return null;
      b = d("UFI2ViewOption").shouldDisplayInReverse(b);
      return b === a
        ? h.jsx(
            c("CometUFICommentsPager.react"),
            babelHelpers["extends"]({}, g(), { isCommunityQA: e })
          )
        : h.jsx(
            c("CometUFICommentsPager.react"),
            babelHelpers["extends"]({}, f(), { isCommunityQA: e })
          );
    }
    a = function (a) {
      return h.jsx(i, babelHelpers["extends"]({}, a, { isTop: !1 }));
    };
    b = function (a) {
      return h.jsx(i, babelHelpers["extends"]({}, a, { isTop: !0 }));
    };
    g.Bottom = a;
    g.Top = b;
  },
  98
);
__d(
  "CometUFICommentPaginationProgressElement.react",
  ["CometUFIPaginationProgressIndicator.react", "UFI2ViewOption", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.commentsListRenderProps;
      var b = a.Selectors,
        e = a.depth,
        f = a.getPaginationProgressProps,
        g = a.listState;
      a = a.viewOption;
      if (a === "LIVE_STREAMING") return null;
      a = d("UFI2ViewOption").shouldDisplayInReverse(a);
      b =
        b.isPagerVisible({ depth: e, direction: "forward", state: g }) &&
        b.getVisibleCommentsCount({ depth: e, state: g }) > 0
          ? h.jsx(
              c("CometUFIPaginationProgressIndicator.react"),
              babelHelpers["extends"]({}, f())
            )
          : null;
      return a === !1 ? b : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIViewOptions.react",
  [
    "CometRelay",
    "CometUFIViewOptionsSelector.react",
    "CometUFIViewOptions_feedback.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback;
    function a(a) {
      var e,
        f = a.commentsListRenderProps,
        g = a.feedback,
        k = a.onChangeComplete;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometUFIViewOptions_feedback.graphql")),
        g
      );
      var l = f.Actions.setViewOption;
      g = f.totalCount;
      f = f.viewOption;
      e =
        ((e = a.unfiltered_comment_count) == null ? void 0 : e.is_empty) == null
          ? g > 0
          : !a.unfiltered_comment_count.is_empty;
      g = j(
        function (a) {
          return l({ onComplete: k, viewOption: a });
        },
        [k, l]
      );
      return f != null && e
        ? i.jsx(c("CometUFIViewOptionsSelector.react"), {
            feedback: a,
            onChange: g,
            selectedViewOption: f,
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModuleUfiLoadMoreCommentsQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(30605393);
    g["default"] = a;
  },
  98
);
