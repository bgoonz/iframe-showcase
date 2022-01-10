if (self.CavalryLogger) {
  CavalryLogger.start_js(["yNO+Faj"]);
}

__d(
  "ManageConstituentBadgeDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3826595287445497",
        metadata: {},
        name: "ManageConstituentBadgeDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIBanActorMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "FeedbackPageBanResponsePayload",
            kind: "LinkedField",
            name: "feedback_page_ban",
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFIBanActorMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFIBanActorMutation",
          selections: b,
        },
        params: {
          id: "5348059221933855",
          metadata: {},
          name: "CometUFIBanActorMutation",
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
  "CometUFIBanActorMutation_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIBanActorMutation_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_content_owner",
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
  "CometUFICommentActorConstituentBadge_comment.graphql",
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
        name: "CometUFICommentActorConstituentBadge_comment",
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
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "parent_feedback",
            plural: !1,
            selections: [
              a,
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
        type: "Comment",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentErrorFooter_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentErrorFooter_comment",
      selections: [
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "optimistic_error_code",
              storageKey: null,
            },
          ],
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
  "CometUFICommentInlineFollowCTA_comment.graphql",
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
        name: "CometUFICommentInlineFollowCTA_comment",
        selections: [
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
                    name: "subscribe_status",
                    storageKey: null,
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
        type: "Comment",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIHideCommentMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "input" },
        c = [{ kind: "Variable", name: "data", variableName: "input" }],
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
          name: "is_hidden_by_viewer",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_content_owner",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "spam_display_mode",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometUFIHideCommentMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "CommentHideResponsePayload",
              kind: "LinkedField",
              name: "comment_hide",
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
                    d,
                    e,
                    f,
                    g,
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometUFICommentMenu_comment",
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
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometUFIHideCommentMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "CommentHideResponsePayload",
              kind: "LinkedField",
              name: "comment_hide",
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
                    d,
                    e,
                    f,
                    g,
                    {
                      alias: "items",
                      args: [
                        {
                          kind: "Variable",
                          name: "feed_location",
                          variableName: "feedLocation",
                        },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comment_menu_items",
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
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemRemoveTag_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemRemoveTag",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemDelete_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemDelete",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemDeleteAndRemoveMember_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemDeleteAndRemoveMember",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemSetMemberContentControls_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemSetMemberContentControls",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemDivider_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemDivider",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemEdit_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemEdit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemReportToAdmins_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemReportToAdmins",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemGiveFeedbackOrReport_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemGiveFeedbackOrReport",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemCreateDetailedReport_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemCreateDetailedReport",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemHide_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemHide",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemUnhide_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemUnhide",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBanCommenter_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenter",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemMuteMember_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteMember",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemRemoveWithFeedback_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemRemoveWithFeedback",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemPublishVidwallaOverlay_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemPublishVidwallaOverlay",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemVidwallaSaveGraphic_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemVidwallaSaveGraphic",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBanCommenterFromLiveVideoStream_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromLiveVideoStream",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBanCommenterFromPage_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromPage",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemMuteCommenterForFifteenMinutes_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteCommenterForFifteenMinutes",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemMuteCommenterForThirtyMinutes_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteCommenterForThirtyMinutes",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemMuteCommenterForSixtyMinutes_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteCommenterForSixtyMinutes",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemBanFromPage_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromPageWithCommunityRules",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemBanCommenterFromAllLiveVideoStreams_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromAllLiveStreamsWithCommunityRules",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemDelete_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemGFIDelete",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemBanCommenterFromLiveVideoStream_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromLiveVideoStreamWithCommunityRules",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemMuteCommenter_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteCommenterWithCommunityRules",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemReportToModerator_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemReportToModerator",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemAddAsModerator_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemAddAsModerator",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemPinComment_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemPinComment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemAdminPinComment_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemAdminPinComment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemAdminUnpinComment_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemAdminUnpinComment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBlockCommenter_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBlockCommenter",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBulletinBlockCommenter_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBulletinBlockCommenter",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemResolveInlineAnnotation_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemResolveInlineAnnotation",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemCreateDebugConflictAlert_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemCreateDebugConflictAlert",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemCopyLink_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemCopyLink",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "LiveVideoEngageQuestionMenuItemDelete_questionMenuItem",
                              fragmentPropName: "questionMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "LiveVideoEngageQuestionMenuItemDelete",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemOpenDebugger_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemOpenDebugger",
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
          id: "3991917627603877",
          metadata: {},
          name: "CometUFIHideCommentMutation",
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
  "CometUFIUnhideCommentMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "input" },
        c = [{ kind: "Variable", name: "data", variableName: "input" }],
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
          name: "spam_display_mode",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_viewer",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_content_owner",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometUFIUnhideCommentMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "CommentUnhideResponsePayload",
              kind: "LinkedField",
              name: "comment_unhide",
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
                    d,
                    e,
                    f,
                    g,
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometUFICommentMenu_comment",
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
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometUFIUnhideCommentMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "CommentUnhideResponsePayload",
              kind: "LinkedField",
              name: "comment_unhide",
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
                    d,
                    e,
                    f,
                    g,
                    {
                      alias: "items",
                      args: [
                        {
                          kind: "Variable",
                          name: "feed_location",
                          variableName: "feedLocation",
                        },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comment_menu_items",
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
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemRemoveTag_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemRemoveTag",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemDelete_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemDelete",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemDeleteAndRemoveMember_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemDeleteAndRemoveMember",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemSetMemberContentControls_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemSetMemberContentControls",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemDivider_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemDivider",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemEdit_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemEdit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemReportToAdmins_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemReportToAdmins",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemGiveFeedbackOrReport_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemGiveFeedbackOrReport",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemCreateDetailedReport_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemCreateDetailedReport",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemHide_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemHide",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemUnhide_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemUnhide",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBanCommenter_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenter",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemMuteMember_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteMember",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemRemoveWithFeedback_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemRemoveWithFeedback",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemPublishVidwallaOverlay_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemPublishVidwallaOverlay",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemVidwallaSaveGraphic_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemVidwallaSaveGraphic",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBanCommenterFromLiveVideoStream_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromLiveVideoStream",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBanCommenterFromPage_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromPage",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemMuteCommenterForFifteenMinutes_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteCommenterForFifteenMinutes",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemMuteCommenterForThirtyMinutes_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteCommenterForThirtyMinutes",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemMuteCommenterForSixtyMinutes_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteCommenterForSixtyMinutes",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemBanFromPage_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromPageWithCommunityRules",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemBanCommenterFromAllLiveVideoStreams_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromAllLiveStreamsWithCommunityRules",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemDelete_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemGFIDelete",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemBanCommenterFromLiveVideoStream_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBanCommenterFromLiveVideoStreamWithCommunityRules",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemMuteCommenter_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemMuteCommenterWithCommunityRules",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemReportToModerator_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemReportToModerator",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemAddAsModerator_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemAddAsModerator",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "GFICommentMenuItemPinComment_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemPinComment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemAdminPinComment_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemAdminPinComment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemAdminUnpinComment_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemAdminUnpinComment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBlockCommenter_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBlockCommenter",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemBulletinBlockCommenter_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemBulletinBlockCommenter",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemResolveInlineAnnotation_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemResolveInlineAnnotation",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemCreateDebugConflictAlert_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemCreateDebugConflictAlert",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemCopyLink_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemCopyLink",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "LiveVideoEngageQuestionMenuItemDelete_questionMenuItem",
                              fragmentPropName: "questionMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "LiveVideoEngageQuestionMenuItemDelete",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometUFICommentMenu_comment",
                              fragmentName:
                                "CometUFICommentMenuItemOpenDebugger_commentMenuItem",
                              fragmentPropName: "commentMenuItem",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CommentMenuItemOpenDebugger",
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
          id: "4505099822891239",
          metadata: {},
          name: "CometUFIUnhideCommentMutation",
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
  "CometUFICommentSeeDeclinedCommentFeedbackActionLink_comment$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFICommentSeeDeclinedCommentFeedbackActionLink_comment$normalization",
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
          concreteType: "GroupCommentInfo",
          kind: "LinkedField",
          name: "group_comment_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "declined_feedback_text",
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
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentSeeDeclinedCommentFeedbackActionLink_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentSeeDeclinedCommentFeedbackActionLink_comment",
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
          action: "THROW",
          path: "id",
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
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "declined_feedback_text",
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
  "CometUFICommentSeeDeclinedCommentFeedbackDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4181509055275165",
        metadata: {},
        name: "CometUFICommentSeeDeclinedCommentFeedbackDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICreateCommentMutation.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, aa, ba, ca, b, da) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        ba = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        ca = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        da = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        ea = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        fa = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        ga = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        ha = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        ia = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "includeNestedComments",
        },
        ja = { defaultValue: null, kind: "LocalArgument", name: "input" },
        ka = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        la = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        ma = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = [d],
        na = {
          alias: null,
          args: null,
          concreteType: "LivingRoomContentItem",
          kind: "LinkedField",
          name: "living_room_content_item",
          plural: !1,
          selections: e,
          storageKey: null,
        },
        f = {
          alias: "threading_depth",
          args: null,
          kind: "ScalarField",
          name: "depth",
          storageKey: null,
        },
        oa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "detection_analytics_enabled",
          storageKey: null,
        },
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
          name: "text",
          storageKey: null,
        },
        i = [h],
        pa = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title",
          plural: !1,
          selections: i,
          storageKey: null,
        },
        j = [g, d],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        l = [k],
        m = { kind: "Variable", name: "scale", variableName: "scale" },
        qa = [m],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        ra = [n, o, p],
        sa = {
          kind: "InlineFragment",
          selections: e,
          type: "Node",
          abstractKey: "__isNode",
        },
        ta = {
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
        q = {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        r = [q],
        ua = {
          alias: null,
          args: r,
          kind: "ScalarField",
          name: "comment_menu_tooltip",
          storageKey: null,
        },
        va = {
          alias: null,
          args: r,
          kind: "ScalarField",
          name: "should_show_comment_menu",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        u = [t],
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        y = {
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
        wa = { kind: "TypeDiscriminator", abstractKey: "__isActor" },
        z = [n],
        xa = {
          alias: "profile_picture_depth_0",
          args: [
            { kind: "Literal", name: "height", value: 32 },
            m,
            { kind: "Literal", name: "width", value: 32 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: z,
          storageKey: null,
        };
      m = [
        { kind: "Literal", name: "height", value: 24 },
        m,
        { kind: "Literal", name: "width", value: 24 },
      ];
      var ya = {
        alias: "profile_picture_depth_1",
        args: m,
        concreteType: "Image",
        kind: "LinkedField",
        name: "profile_picture",
        plural: !1,
        selections: z,
        storageKey: null,
      };
      v = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "author",
        plural: !1,
        selections: [
          g,
          d,
          s,
          {
            kind: "InlineFragment",
            selections: u,
            type: "Event",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: u,
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [t, v],
            type: "Page",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              t,
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
              v,
              w,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subscribe_status",
                storageKey: null,
              },
              x,
              y,
            ],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: u,
            type: "Entity",
            abstractKey: "__isEntity",
          },
          wa,
          xa,
          ya,
        ],
        storageKey: null,
      };
      u = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_author_weak_reference",
        storageKey: null,
      };
      var za = {
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
        Aa = {
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
        A = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        B = [A];
      y = {
        kind: "InlineFragment",
        selections: [x, y],
        type: "User",
        abstractKey: null,
      };
      var C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        Ba = {
          alias: null,
          args: B,
          concreteType: "FeedbackReactionInfo",
          kind: "LinkedField",
          name: "viewer_feedback_reaction_info",
          plural: !1,
          selections: [C, d],
          storageKey: null,
        },
        Ca = {
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
            C,
            d,
          ],
          storageKey: null,
        },
        Da = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_is_ama_enabled",
          storageKey: null,
        },
        Ea = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_status",
          storageKey: null,
        },
        Fa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video",
          storageKey: null,
        },
        Ga = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_is_ama_enabled_with_comments",
          storageKey: null,
        };
      C = {
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
                  C,
                  d,
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
                    selections: z,
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
      };
      var Ha = {
        alias: null,
        args: null,
        concreteType: "ReactorsOfContentConnection",
        kind: "LinkedField",
        name: "reactors",
        plural: !1,
        selections: [
          k,
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
      };
      A = {
        alias: null,
        args: [
          { kind: "Variable", name: "location", variableName: "feedLocation" },
          A,
        ],
        kind: "ScalarField",
        name: "can_viewer_comment",
        storageKey: null,
      };
      var Ia = {
          alias: null,
          args: B,
          kind: "ScalarField",
          name: "can_viewer_react",
          storageKey: null,
        },
        Ja = {
          alias: null,
          args: B,
          kind: "ScalarField",
          name: "comment_composer_placeholder",
          storageKey: null,
        },
        Ka = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_top_reactions",
          storageKey: null,
        },
        La = {
          alias: null,
          args: null,
          concreteType: "AskMeAnythingFeedbackMetadata",
          kind: "LinkedField",
          name: "ask_me_anything_feedback_metadata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_viewer_host",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Ma = {
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
        Na = {
          alias: "toplevel_comment_count",
          args: [{ kind: "Literal", name: "orderby", value: "toplevel" }],
          concreteType: "TopLevelCommentsConnection",
          kind: "LinkedField",
          name: "top_level_comments",
          plural: !1,
          selections: l,
          storageKey: 'top_level_comments(orderby:"toplevel")',
        },
        Oa = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "threading_config",
          plural: !1,
          selections: [g],
          storageKey: null,
        },
        Pa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_vc_acting_as_page_or_profile_plus",
          storageKey: null,
        },
        Qa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_pin_live_comments",
          storageKey: null,
        },
        Ra = {
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
              selections: e,
              storageKey: null,
            },
            d,
          ],
          storageKey: null,
        },
        Sa = {
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
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hide_transparency_enabled_for_actor",
          storageKey: null,
        },
        Ta = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscription_target_id",
          storageKey: null,
        },
        E = {
          kind: "Variable",
          name: "feed_context_enable_comment",
          variableName: "displayCommentsContextEnableComment",
        },
        F = {
          kind: "Variable",
          name: "feed_context_fb_feed_location",
          variableName: "feedLocation",
        },
        G = {
          kind: "Variable",
          name: "feed_context_is_ad_preview",
          variableName: "displayCommentsContextIsAdPreview",
        },
        H = {
          kind: "Variable",
          name: "feed_context_is_aggregated_share",
          variableName: "displayCommentsContextIsAggregatedShare",
        },
        I = {
          kind: "Variable",
          name: "feed_context_is_story_set",
          variableName: "displayCommentsContextIsStorySet",
        },
        J = {
          kind: "Variable",
          name: "feedback_context",
          variableName: "displayCommentsFeedbackContext",
        },
        K = {
          kind: "Variable",
          name: "feedback_source",
          variableName: "feedbackSource",
        },
        L = {
          kind: "Variable",
          name: "focus_comment_id",
          variableName: "focusCommentID",
        },
        M = { kind: "Literal", name: "is_initial_fetch", value: !0 },
        Ua = [
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M,
          {
            kind: "Variable",
            name: "is_top_level",
            variableName: "includeNestedComments",
          },
        ],
        Va = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_order",
          storageKey: null,
        },
        Wa = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "expanded_sub_reply_parents",
          plural: !0,
          selections: e,
          storageKey: null,
        },
        Xa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_initially_expanded",
          storageKey: null,
        },
        Ya = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_size",
          storageKey: null,
        },
        Za = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reply_comment_order",
          storageKey: null,
        },
        $a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_render_composer_preemptively",
          storageKey: null,
        },
        ab = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "after_count",
          storageKey: null,
        },
        bb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "before_count",
          storageKey: null,
        },
        cb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_fbid",
          storageKey: null,
        },
        db = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "created_time",
          storageKey: null,
        },
        eb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "spam_display_mode",
          storageKey: null,
        },
        fb = {
          alias: null,
          args: B,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: j,
          storageKey: null,
        },
        gb = {
          alias: null,
          args: null,
          concreteType: "Video",
          kind: "LinkedField",
          name: "associated_video",
          plural: !1,
          selections: e,
          storageKey: null,
        };
      E = [
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        { kind: "Literal", name: "is_top_level", value: !1 },
      ];
      F = {
        alias: "sub_replies_count",
        args: [
          { kind: "Literal", name: "comment_order", value: "SUB_REPLIES" },
          {
            kind: "Literal",
            name: "top_level_comment_order",
            value: "TOPLEVEL",
          },
        ],
        concreteType: "DisplayCommentsConnection",
        kind: "LinkedField",
        name: "display_comments",
        plural: !1,
        selections: l,
        storageKey:
          'display_comments(comment_order:"SUB_REPLIES",top_level_comment_order:"TOPLEVEL")',
      };
      G = {
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
      };
      H = {
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
      };
      I = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_author_banned_by_content_owner",
        storageKey: null,
      };
      J = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_ama_question",
        storageKey: null,
      };
      K = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "comment_parent",
        plural: !1,
        selections: [
          d,
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [A, d],
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
              s,
              {
                kind: "InlineFragment",
                selections: [w, x],
                type: "User",
                abstractKey: null,
              },
              d,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      L = {
        alias: null,
        args: null,
        concreteType: "EditHistoryConnection",
        kind: "LinkedField",
        name: "edit_history",
        plural: !1,
        selections: l,
        storageKey: null,
      };
      M = {
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
            args: B,
            concreteType: "Page",
            kind: "LinkedField",
            name: "viewer_acts_as_page",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          d,
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
              s,
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
                  d,
                ],
                storageKey: null,
              },
              d,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      w = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "ban_action",
        storageKey: null,
      };
      x = [{ kind: "Literal", name: "translation_type", value: "ORIGINAL" }];
      var N = {
        args: null,
        fragment: aa(
          "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
        ),
        kind: "FragmentSpread",
      };
      N = {
        alias: null,
        args: x,
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
            selections: [N, h],
            type: "TextWithEntities",
            abstractKey: null,
          },
          N,
        ],
        storageKey: 'preferred_body(translation_type:"ORIGINAL")',
      };
      var hb = {
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
        ib = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "translation_available_for_viewer",
          storageKey: null,
        },
        jb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_content_owner",
          storageKey: null,
        },
        kb = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "if_viewer_can_share",
          plural: !1,
          selections: [
            d,
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
        lb = {
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
            d,
          ],
          storageKey: null,
        },
        mb = {
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
            d,
          ],
          storageKey: null,
        },
        nb = {
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
              fragmentName: "CometUFIGroupCommentActorLink_groupCommentInfo",
              fragmentPropName: "groupCommentInfo",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        ob = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_privacy_value",
          storageKey: null,
        },
        pb = {
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
            d,
          ],
          storageKey: null,
        },
        qb = {
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
            d,
          ],
          storageKey: null,
        };
      x = {
        alias: "body_renderer",
        args: x,
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
      };
      var rb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_declined_by_group_admin_assistant",
          storageKey: null,
        },
        sb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video_comment",
          storageKey: null,
        },
        tb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp_in_video",
          storageKey: null,
        },
        ub = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "written_while_video_was_live",
          storageKey: null,
        },
        vb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_constituent_badge",
          storageKey: null,
        },
        wb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_see_subsribe_button",
          storageKey: null,
        },
        xb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_see_constituent_badge_upsell",
          storageKey: null,
        },
        yb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_token",
          storageKey: null,
        },
        zb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "question_and_answer_type",
          storageKey: null,
        },
        Ab = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_original_poster",
          storageKey: null,
        },
        Bb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_comment_poster",
          storageKey: null,
        },
        Cb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_bot",
          storageKey: null,
        },
        Db = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_non_coworker",
          storageKey: null,
        },
        Eb = {
          alias: null,
          args: r,
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
        };
      q = {
        alias: null,
        args: [
          q,
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "CometUFICommentInlineFollowCTARenderer_renderer",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentActorBotBadge3DWrapper_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "CometUFICommentPostAuthorBadge3DWrapper_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentQAAnswerBadge_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentQASocialAnswerBadge_badge",
                fragmentPropName: "badge",
                kind: "ModuleImport",
              },
            ],
            type: "GeminiUFICommentQASocialAnswerBadge",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      var O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_title",
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset",
          storageKey: null,
        },
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_v2",
          storageKey: null,
        },
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_dark_mode_v2",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_description",
          storageKey: null,
        },
        T = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_enabled",
          storageKey: null,
        },
        U = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_manageable",
          storageKey: null,
        },
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "serialized",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "identity_badge_type",
          storageKey: null,
        },
        X = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_enabled",
          storageKey: null,
        },
        Y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_uri",
          storageKey: null,
        },
        Z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_text",
          storageKey: null,
        },
        $ = {
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
        },
        Fb = {
          alias: null,
          args: r,
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
            h,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text_gradient",
              storageKey: null,
            },
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
            $,
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
        };
      r = {
        alias: null,
        args: r,
        kind: "ScalarField",
        name: "can_show_multiple_identity_badges",
        storageKey: null,
      };
      O = {
        alias: null,
        args: null,
        concreteType: "IdentityBadge",
        kind: "LinkedField",
        name: "earned_identity_badges_web",
        plural: !0,
        selections: [O, P, Q, R, S, T, U, V, W, X, Y, Z, $],
        storageKey: null,
      };
      P = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "work_ama_answer_status",
        storageKey: null,
      };
      Q = {
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
      };
      R = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "can_viewer_disable_preview",
        storageKey: null,
      };
      S = {
        args: null,
        documentName: "CometUFIComment_comment",
        fragmentName: "CometUFICommentQualitySurvey_inlineSurveyConfig",
        fragmentPropName: "inlineSurveyConfig",
        kind: "ModuleImport",
      };
      T = {
        alias: null,
        args: null,
        concreteType: "InlineSurveyStoryActionLink",
        kind: "LinkedField",
        name: "inline_survey_config",
        plural: !1,
        selections: [
          S,
          {
            alias: null,
            args: qa,
            concreteType: "Image",
            kind: "LinkedField",
            name: "favicon",
            plural: !1,
            selections: [
              p,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "scale",
                storageKey: null,
              },
              n,
              o,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "followup_choices",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "followup_question",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "main_choices",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "main_question",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "privacy_text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "session_blob",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "thankyou_text",
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
            name: "tessa_survey_config_id",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      U = {
        alias: null,
        args: null,
        concreteType: "Story",
        kind: "LinkedField",
        name: "attached_story",
        plural: !1,
        selections: j,
        storageKey: null,
      };
      V = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "if_viewer_can_see_member_page_tooltip",
        plural: !1,
        selections: j,
        storageKey: null,
      };
      W = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_disabled",
        storageKey: null,
      };
      X = {
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
      };
      Y = {
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
                documentName: "CometUFIComment_comment_upper_badge_renderer",
                fragmentName: "GroupsCometCommentPinnedBadgeRenderer_renderer",
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
                documentName: "CometUFIComment_comment_upper_badge_renderer",
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
      };
      Z = {
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
                documentName: "CometUFIComment_comment_elevated_comment_data",
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
      };
      $ = {
        alias: null,
        args: null,
        concreteType: "TextWithEntities",
        kind: "LinkedField",
        name: "body",
        plural: !1,
        selections: [
          h,
          {
            alias: null,
            args: null,
            concreteType: "EntityAtRange",
            kind: "LinkedField",
            name: "ranges",
            plural: !0,
            selections: [
              g,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "entity",
                plural: !1,
                selections: [g, sa],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "entity_is_weak_reference",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "length",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "offset",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      p = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_markdown_enabled",
        storageKey: null,
      };
      n = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_subreply_parent_deleted",
        storageKey: null,
      };
      o = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "reply_parent_comment",
        plural: !1,
        selections: e,
        storageKey: null,
      };
      h = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "optimistic_action",
        storageKey: null,
      };
      var Gb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "optimistic_error_code",
          storageKey: null,
        },
        Hb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "optimistic_error",
          storageKey: null,
        },
        Ib = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_id",
          storageKey: null,
        },
        Jb = {
          kind: "ClientExtension",
          selections: [
            h,
            Gb,
            Hb,
            Ib,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reply_comment_parent_fbid",
              storageKey: null,
            },
          ],
        },
        Kb = {
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_previous_page",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "start_cursor",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Lb = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ufi2_connection_generation",
              storageKey: null,
            },
          ],
        },
        Mb = ["feedback_source", "focus_comment_id", "comment_order"],
        Nb = {
          kind: "Variable",
          name: "__dynamicKey",
          variableName: "UFI2CommentsProvider_commentsKey",
        },
        Ob = {
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
              name: "visibility",
              storageKey: null,
            },
            d,
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [
            a,
            ba,
            ca,
            b,
            da,
            ea,
            fa,
            ga,
            ha,
            ia,
            ja,
            ka,
            la,
          ],
          kind: "Fragment",
          metadata: null,
          name: "CometUFICreateCommentMutation",
          selections: [
            {
              alias: null,
              args: ma,
              concreteType: "CommentCreateResponsePayload",
              kind: "LinkedField",
              name: "comment_create",
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
                          name: "GroupsCometOnboardingRHCCard_group",
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
                {
                  alias: null,
                  args: null,
                  concreteType: "CommentsEdge",
                  kind: "LinkedField",
                  name: "feedback_comment_edge",
                  plural: !1,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        d,
                        na,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "swipable_media",
                          plural: !0,
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "QuiltsCometCard_media",
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometUFIComment_comment",
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometUFICommentEditor_comment",
                        },
                        f,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback",
                          plural: !1,
                          selections: [
                            {
                              args: [
                                {
                                  kind: "Variable",
                                  name: "includeNestedComments",
                                  variableName: "includeNestedComments",
                                },
                              ],
                              kind: "FragmentSpread",
                              name: "CometUFICommentList_feedback",
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
                oa,
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            ea,
            ba,
            ca,
            b,
            da,
            fa,
            ga,
            ha,
            ia,
            ja,
            ka,
            la,
            a,
          ],
          kind: "Operation",
          name: "CometUFICreateCommentMutation",
          selections: [
            {
              alias: null,
              args: ma,
              concreteType: "CommentCreateResponsePayload",
              kind: "LinkedField",
              name: "comment_create",
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
                    {
                      alias: null,
                      args: null,
                      concreteType: "Group",
                      kind: "LinkedField",
                      name: "associated_group",
                      plural: !1,
                      selections: [
                        d,
                        {
                          alias: null,
                          args: null,
                          concreteType: "GroupOnboardingWizard",
                          kind: "LinkedField",
                          name: "onboarding_wizard",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "status_type",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "dismiss_card",
                              plural: !1,
                              selections: [
                                g,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "description",
                                  plural: !1,
                                  selections: i,
                                  storageKey: null,
                                },
                                pa,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "completed_card",
                              plural: !1,
                              selections: [g, pa],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "TextWithEntities",
                              kind: "LinkedField",
                              name: "wizard_title",
                              plural: !1,
                              selections: i,
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "TextWithEntities",
                              kind: "LinkedField",
                              name: "wizard_subtitle",
                              plural: !1,
                              selections: i,
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "wizard_steps",
                              plural: !0,
                              selections: [
                                g,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_completed",
                                  storageKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometOnboardingRHCCard_group",
                                      fragmentName:
                                        "GroupsCometOnboardingInviteMemberRHCItem_wizardStep",
                                      fragmentPropName: "wizardStep",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupOnboardingWizardStepInviteMember",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometOnboardingRHCCard_group",
                                      fragmentName:
                                        "GroupsCometOnboardingChooseCoverPhotoRHCItem_wizardStep",
                                      fragmentPropName: "wizardStep",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupOnboardingWizardStepChooseCoverPhoto",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometOnboardingRHCCard_group",
                                      fragmentName:
                                        "GroupsCometOnboardingWriteGroupDescriptionRHCItem_wizardStep",
                                      fragmentPropName: "wizardStep",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupOnboardingWizardStepWriteGroupDescription",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometOnboardingRHCCard_group",
                                      fragmentName:
                                        "GroupsCometOnboardingWriteFirstPostRHCItem_wizardStep",
                                      fragmentPropName: "wizardStep",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupOnboardingWizardStepWriteFirstPost",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometOnboardingRHCCard_group",
                                      fragmentName:
                                        "GroupsCometOnboardingCustomizeGroupProfileRHCItem_wizardStep",
                                      fragmentPropName: "wizardStep",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupOnboardingWizardStepCustomizeGroupProfile",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometOnboardingRHCCard_group",
                                      fragmentName:
                                        "GroupsCometOnboardingWriteAskMeAnythingPostRHCItem_wizardStep",
                                      fragmentPropName: "wizardStep",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupOnboardingWizardStepWriteAskMeAnythingPost",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometOnboardingRHCCard_group",
                                      fragmentName:
                                        "GroupsCometOnboardingAnswerMemberQuestionsRHCItem_wizardStep",
                                      fragmentPropName: "wizardStep",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupOnboardingWizardStepAnswerMemberQuestions",
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
                          concreteType: "Group",
                          kind: "LinkedField",
                          name: "if_viewer_can_change_cover_video",
                          plural: !1,
                          selections: j,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "default_actor",
                          plural: !1,
                          selections: j,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [{ kind: "Literal", name: "first", value: 1 }],
                          concreteType: "GroupToPurposesConnection",
                          kind: "LinkedField",
                          name: "group_purposes",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "GroupToPurposesEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "GroupPurpose",
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "purpose_enum",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: "group_purposes(first:1)",
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Group",
                          kind: "LinkedField",
                          name: "if_viewer_can_see_admin_left_hand_rail",
                          plural: !1,
                          selections: j,
                          storageKey: null,
                        },
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
                      selections: l,
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
                        g,
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
                    d,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "CommentsEdge",
                  kind: "LinkedField",
                  name: "feedback_comment_edge",
                  plural: !1,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        d,
                        na,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "swipable_media",
                          plural: !0,
                          selections: [
                            g,
                            {
                              kind: "TypeDiscriminator",
                              abstractKey: "__isMedia",
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComputerVisionInfo",
                              kind: "LinkedField",
                              name: "computer_vision_info",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Photo",
                                  kind: "LinkedField",
                                  name: "photo",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "accessibility_caption",
                                      storageKey: null,
                                    },
                                    d,
                                  ],
                                  storageKey: null,
                                },
                                d,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: "backgroundImage",
                              args: qa,
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "image",
                              plural: !1,
                              selections: ra,
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
                                      name: "color_choice_algorithm",
                                      value: "PLACEHOLDER_V1",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "accent_color",
                                  storageKey:
                                    'accent_color(color_choice_algorithm:"PLACEHOLDER_V1")',
                                },
                              ],
                              type: "Photo",
                              abstractKey: null,
                            },
                            {
                              alias: null,
                              args: qa,
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "animated_image",
                              plural: !1,
                              selections: ra,
                              storageKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_playable",
                                  storageKey: null,
                                },
                                {
                                  args: null,
                                  documentName: "QuiltsCometCard_media",
                                  fragmentName:
                                    "CometFeedStoryQuiltsPlayableMediaRenderer_media",
                                  fragmentPropName: "media",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "Video",
                              abstractKey: null,
                            },
                            sa,
                            {
                              kind: "InlineFragment",
                              selections: e,
                              type: "GenericAttachmentMedia",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: e,
                              type: "MontageImage",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: e,
                              type: "MontageVideo",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        ta,
                        ua,
                        va,
                        v,
                        u,
                        za,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback",
                          plural: !1,
                          selections: [
                            d,
                            Aa,
                            {
                              alias: null,
                              args: B,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "viewer_actor",
                              plural: !1,
                              selections: [g, d, wa, s, xa, ya, y],
                              storageKey: null,
                            },
                            Ba,
                            Ca,
                            {
                              alias: null,
                              args: null,
                              concreteType: "Video",
                              kind: "LinkedField",
                              name: "associated_video",
                              plural: !1,
                              selections: [d, Da, Ea, Fa, Ga],
                              storageKey: null,
                            },
                            C,
                            Ha,
                            A,
                            Ia,
                            Ja,
                            Ka,
                            La,
                            Ma,
                            Na,
                            Oa,
                            Pa,
                            Qa,
                            Ra,
                            Sa,
                            D,
                            Ta,
                            {
                              alias: null,
                              args: Ua,
                              concreteType: "DisplayCommentsConnection",
                              kind: "LinkedField",
                              name: "display_comments",
                              plural: !1,
                              selections: [
                                Va,
                                Wa,
                                Xa,
                                Ya,
                                Za,
                                $a,
                                ab,
                                bb,
                                k,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "DisplayCommentsEdge",
                                  kind: "LinkedField",
                                  name: "edges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Comment",
                                      kind: "LinkedField",
                                      name: "node",
                                      plural: !1,
                                      selections: [
                                        d,
                                        cb,
                                        v,
                                        u,
                                        db,
                                        eb,
                                        ta,
                                        ua,
                                        va,
                                        za,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Feedback",
                                          kind: "LinkedField",
                                          name: "feedback",
                                          plural: !1,
                                          selections: [
                                            d,
                                            Aa,
                                            fb,
                                            Ba,
                                            Ca,
                                            gb,
                                            C,
                                            Ha,
                                            A,
                                            Ia,
                                            Ja,
                                            Ka,
                                            {
                                              condition:
                                                "includeNestedComments",
                                              kind: "Condition",
                                              passingValue: !0,
                                              selections: [
                                                La,
                                                Ma,
                                                Na,
                                                Oa,
                                                {
                                                  alias: null,
                                                  args: B,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "viewer_actor",
                                                  plural: !1,
                                                  selections: [
                                                    wa,
                                                    s,
                                                    xa,
                                                    ya,
                                                    y,
                                                  ],
                                                  storageKey: null,
                                                },
                                                Pa,
                                                Qa,
                                                Ra,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "Video",
                                                  kind: "LinkedField",
                                                  name: "associated_video",
                                                  plural: !1,
                                                  selections: [Da, Ea, Fa, Ga],
                                                  storageKey: null,
                                                },
                                                Sa,
                                                D,
                                                Ta,
                                                {
                                                  alias: null,
                                                  args: E,
                                                  concreteType:
                                                    "DisplayCommentsConnection",
                                                  kind: "LinkedField",
                                                  name: "display_comments",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "Comment",
                                                      kind: "LinkedField",
                                                      name: "highlighted_comments",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "author",
                                                          plural: !1,
                                                          selections: [
                                                            g,
                                                            s,
                                                            {
                                                              alias:
                                                                "profilePictureForReplyExpander",
                                                              args: m,
                                                              concreteType:
                                                                "Image",
                                                              kind: "LinkedField",
                                                              name: "profile_picture",
                                                              plural: !1,
                                                              selections: z,
                                                              storageKey: null,
                                                            },
                                                            y,
                                                            d,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        db,
                                                        d,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    Va,
                                                    Wa,
                                                    Xa,
                                                    Ya,
                                                    Za,
                                                    $a,
                                                    ab,
                                                    bb,
                                                    k,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "DisplayCommentsEdge",
                                                      kind: "LinkedField",
                                                      name: "edges",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "Comment",
                                                          kind: "LinkedField",
                                                          name: "node",
                                                          plural: !1,
                                                          selections: [
                                                            d,
                                                            cb,
                                                            v,
                                                            u,
                                                            db,
                                                            eb,
                                                            ta,
                                                            ua,
                                                            va,
                                                            za,
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                "Feedback",
                                                              kind: "LinkedField",
                                                              name: "feedback",
                                                              plural: !1,
                                                              selections: [
                                                                d,
                                                                Aa,
                                                                fb,
                                                                Ba,
                                                                Ca,
                                                                gb,
                                                                C,
                                                                Ha,
                                                                A,
                                                                Ia,
                                                                Ja,
                                                                Ka,
                                                                F,
                                                                D,
                                                              ],
                                                              storageKey: null,
                                                            },
                                                            G,
                                                            H,
                                                            I,
                                                            J,
                                                            K,
                                                            L,
                                                            M,
                                                            w,
                                                            N,
                                                            hb,
                                                            ib,
                                                            t,
                                                            jb,
                                                            kb,
                                                            lb,
                                                            mb,
                                                            nb,
                                                            ob,
                                                            pb,
                                                            qb,
                                                            x,
                                                            rb,
                                                            sb,
                                                            tb,
                                                            ub,
                                                            vb,
                                                            wb,
                                                            xb,
                                                            yb,
                                                            zb,
                                                            Ab,
                                                            Bb,
                                                            Cb,
                                                            Db,
                                                            Eb,
                                                            q,
                                                            Fb,
                                                            r,
                                                            O,
                                                            P,
                                                            Q,
                                                            R,
                                                            T,
                                                            U,
                                                            V,
                                                            W,
                                                            X,
                                                            Y,
                                                            Z,
                                                            $,
                                                            p,
                                                            n,
                                                            o,
                                                            f,
                                                            g,
                                                            Jb,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        c,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    Kb,
                                                    Lb,
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: E,
                                                  filters: Mb,
                                                  handle: "ufi2_comments",
                                                  key: "UFI2CommentsProvider_feedback_display_comments",
                                                  kind: "LinkedHandle",
                                                  name: "display_comments",
                                                  dynamicKey: Nb,
                                                },
                                                Ob,
                                              ],
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        G,
                                        H,
                                        I,
                                        J,
                                        K,
                                        L,
                                        M,
                                        w,
                                        N,
                                        hb,
                                        ib,
                                        t,
                                        jb,
                                        kb,
                                        lb,
                                        mb,
                                        nb,
                                        ob,
                                        pb,
                                        qb,
                                        x,
                                        rb,
                                        sb,
                                        tb,
                                        ub,
                                        vb,
                                        wb,
                                        xb,
                                        yb,
                                        zb,
                                        Ab,
                                        Bb,
                                        Cb,
                                        Db,
                                        Eb,
                                        q,
                                        Fb,
                                        r,
                                        O,
                                        P,
                                        Q,
                                        R,
                                        T,
                                        U,
                                        V,
                                        W,
                                        X,
                                        Y,
                                        Z,
                                        $,
                                        p,
                                        o,
                                        f,
                                        g,
                                        Jb,
                                        {
                                          condition: "includeNestedComments",
                                          kind: "Condition",
                                          passingValue: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Feedback",
                                              kind: "LinkedField",
                                              name: "feedback",
                                              plural: !1,
                                              selections: [F, D],
                                              storageKey: null,
                                            },
                                            n,
                                          ],
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    c,
                                  ],
                                  storageKey: null,
                                },
                                Kb,
                                Lb,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: Ua,
                              filters: Mb,
                              handle: "ufi2_comments",
                              key: "UFI2CommentsProvider_feedback_display_comments",
                              kind: "LinkedHandle",
                              name: "display_comments",
                              dynamicKey: Nb,
                            },
                            Ob,
                          ],
                          storageKey: null,
                        },
                        G,
                        H,
                        eb,
                        I,
                        db,
                        J,
                        K,
                        L,
                        M,
                        w,
                        N,
                        hb,
                        ib,
                        t,
                        jb,
                        kb,
                        lb,
                        mb,
                        nb,
                        ob,
                        pb,
                        qb,
                        x,
                        rb,
                        sb,
                        tb,
                        ub,
                        vb,
                        wb,
                        xb,
                        yb,
                        zb,
                        Ab,
                        Bb,
                        Cb,
                        Db,
                        Eb,
                        q,
                        Fb,
                        r,
                        O,
                        P,
                        Q,
                        R,
                        {
                          alias: null,
                          args: null,
                          concreteType: "InlineSurveyStoryActionLink",
                          kind: "LinkedField",
                          name: "inline_survey_config",
                          plural: !1,
                          selections: [S],
                          storageKey: null,
                        },
                        cb,
                        U,
                        V,
                        W,
                        X,
                        Y,
                        Z,
                        $,
                        p,
                        f,
                        {
                          kind: "ClientExtension",
                          selections: [h, Gb, Hb, Ib],
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                oa,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4891743404190166",
          metadata: {},
          name: "CometUFICreateCommentMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    b.exports = a;
  },
  null
);
__d(
  "CometUFIPinCommentMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "PinnedCommentEventCreateResponsePayload",
            kind: "LinkedField",
            name: "pinned_comment_event_create",
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFIPinCommentMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFIPinCommentMutation",
          selections: b,
        },
        params: {
          id: "4205261076203417",
          metadata: {},
          name: "CometUFIPinCommentMutation",
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
  "CometUFIUnpinCommentMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "UnpinnedCommentEventCreateResponsePayload",
            kind: "LinkedField",
            name: "unpinned_comment_event_create",
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFIUnpinCommentMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFIUnpinCommentMutation",
          selections: b,
        },
        params: {
          id: "4577052922309890",
          metadata: {},
          name: "CometUFIUnpinCommentMutation",
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
  "CometUFICreateCommentSubscription.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, aa, b, c, d, e) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        ba = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        ca = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        da = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        ea = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        fa = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "includeNestedComments",
        },
        ga = { defaultValue: null, kind: "LocalArgument", name: "input" },
        ha = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ia = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        ja = [{ kind: "Variable", name: "data", variableName: "input" }],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        h = [g],
        ka = {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "feedback",
          plural: !1,
          selections: [
            f,
            {
              alias: null,
              args: null,
              concreteType: "DisplayCommentsConnection",
              kind: "LinkedField",
              name: "display_comments",
              plural: !1,
              selections: h,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        j = {
          alias: "threading_depth",
          args: null,
          kind: "ScalarField",
          name: "depth",
          storageKey: null,
        },
        k = [f],
        la = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "reply_parent_comment",
          plural: !1,
          selections: [
            f,
            {
              alias: null,
              args: null,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: k,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        ma = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "depth",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        m = {
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
                l,
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
        n = {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        o = [n],
        na = {
          alias: null,
          args: o,
          kind: "ScalarField",
          name: "comment_menu_tooltip",
          storageKey: null,
        },
        oa = {
          alias: null,
          args: o,
          kind: "ScalarField",
          name: "should_show_comment_menu",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        r = [q],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        v = {
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
        pa = { kind: "TypeDiscriminator", abstractKey: "__isActor" },
        w = { kind: "Variable", name: "scale", variableName: "scale" },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        y = [x],
        qa = {
          alias: "profile_picture_depth_0",
          args: [
            { kind: "Literal", name: "height", value: 32 },
            w,
            { kind: "Literal", name: "width", value: 32 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: y,
          storageKey: null,
        },
        ra = [
          { kind: "Literal", name: "height", value: 24 },
          w,
          { kind: "Literal", name: "width", value: 24 },
        ],
        sa = {
          alias: "profile_picture_depth_1",
          args: ra,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: y,
          storageKey: null,
        };
      s = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "author",
        plural: !1,
        selections: [
          l,
          f,
          p,
          {
            kind: "InlineFragment",
            selections: r,
            type: "Event",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: r,
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [q, s],
            type: "Page",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              q,
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
              s,
              t,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subscribe_status",
                storageKey: null,
              },
              u,
              v,
            ],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: r,
            type: "Entity",
            abstractKey: "__isEntity",
          },
          pa,
          qa,
          sa,
        ],
        storageKey: null,
      };
      r = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_author_weak_reference",
        storageKey: null,
      };
      var ta = {
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
        ua = {
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
                l,
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
        z = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        A = [z];
      v = {
        kind: "InlineFragment",
        selections: [u, v],
        type: "User",
        abstractKey: null,
      };
      var B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        va = {
          alias: null,
          args: A,
          concreteType: "FeedbackReactionInfo",
          kind: "LinkedField",
          name: "viewer_feedback_reaction_info",
          plural: !1,
          selections: [B, f],
          storageKey: null,
        },
        wa = {
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
            B,
            f,
          ],
          storageKey: null,
        },
        xa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_is_ama_enabled",
          storageKey: null,
        },
        ya = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_status",
          storageKey: null,
        },
        za = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video",
          storageKey: null,
        },
        Aa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_is_ama_enabled_with_comments",
          storageKey: null,
        };
      B = {
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
                  B,
                  f,
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
                    selections: y,
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
      };
      var Ba = {
        alias: null,
        args: null,
        concreteType: "ReactorsOfContentConnection",
        kind: "LinkedField",
        name: "reactors",
        plural: !1,
        selections: [
          g,
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
      };
      z = {
        alias: null,
        args: [
          { kind: "Variable", name: "location", variableName: "feedLocation" },
          z,
        ],
        kind: "ScalarField",
        name: "can_viewer_comment",
        storageKey: null,
      };
      var Ca = {
          alias: null,
          args: A,
          kind: "ScalarField",
          name: "can_viewer_react",
          storageKey: null,
        },
        Da = {
          alias: null,
          args: A,
          kind: "ScalarField",
          name: "comment_composer_placeholder",
          storageKey: null,
        },
        Ea = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_top_reactions",
          storageKey: null,
        },
        Fa = {
          alias: "sub_replies_count",
          args: [
            { kind: "Literal", name: "comment_order", value: "SUB_REPLIES" },
            {
              kind: "Literal",
              name: "top_level_comment_order",
              value: "TOPLEVEL",
            },
          ],
          concreteType: "DisplayCommentsConnection",
          kind: "LinkedField",
          name: "display_comments",
          plural: !1,
          selections: h,
          storageKey:
            'display_comments(comment_order:"SUB_REPLIES",top_level_comment_order:"TOPLEVEL")',
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hide_transparency_enabled_for_actor",
          storageKey: null,
        },
        Ga = [l],
        Ha = {
          alias: null,
          args: null,
          concreteType: "AskMeAnythingFeedbackMetadata",
          kind: "LinkedField",
          name: "ask_me_anything_feedback_metadata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_viewer_host",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Ia = {
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
        Ja = {
          alias: "toplevel_comment_count",
          args: [{ kind: "Literal", name: "orderby", value: "toplevel" }],
          concreteType: "TopLevelCommentsConnection",
          kind: "LinkedField",
          name: "top_level_comments",
          plural: !1,
          selections: h,
          storageKey: 'top_level_comments(orderby:"toplevel")',
        },
        Ka = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_vc_acting_as_page_or_profile_plus",
          storageKey: null,
        },
        La = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_pin_live_comments",
          storageKey: null,
        },
        Ma = {
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
              selections: k,
              storageKey: null,
            },
            f,
          ],
          storageKey: null,
        },
        Na = {
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
        Oa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscription_target_id",
          storageKey: null,
        },
        D = {
          kind: "Variable",
          name: "feed_context_enable_comment",
          variableName: "displayCommentsContextEnableComment",
        },
        E = {
          kind: "Variable",
          name: "feed_context_fb_feed_location",
          variableName: "feedLocation",
        },
        F = {
          kind: "Variable",
          name: "feed_context_is_ad_preview",
          variableName: "displayCommentsContextIsAdPreview",
        },
        G = {
          kind: "Variable",
          name: "feed_context_is_aggregated_share",
          variableName: "displayCommentsContextIsAggregatedShare",
        },
        H = {
          kind: "Variable",
          name: "feed_context_is_story_set",
          variableName: "displayCommentsContextIsStorySet",
        },
        I = {
          kind: "Variable",
          name: "feedback_context",
          variableName: "displayCommentsFeedbackContext",
        },
        J = {
          kind: "Variable",
          name: "feedback_source",
          variableName: "feedbackSource",
        },
        K = {
          kind: "Variable",
          name: "focus_comment_id",
          variableName: "focusCommentID",
        },
        L = { kind: "Literal", name: "is_initial_fetch", value: !0 },
        Pa = [
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          {
            kind: "Variable",
            name: "is_top_level",
            variableName: "includeNestedComments",
          },
        ],
        Qa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_order",
          storageKey: null,
        },
        Ra = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "expanded_sub_reply_parents",
          plural: !0,
          selections: k,
          storageKey: null,
        },
        Sa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_initially_expanded",
          storageKey: null,
        },
        Ta = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_size",
          storageKey: null,
        },
        Ua = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reply_comment_order",
          storageKey: null,
        },
        Va = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_render_composer_preemptively",
          storageKey: null,
        },
        Wa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "after_count",
          storageKey: null,
        },
        Xa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "before_count",
          storageKey: null,
        },
        Ya = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_fbid",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "created_time",
          storageKey: null,
        },
        Za = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "spam_display_mode",
          storageKey: null,
        },
        N = [l, f],
        $a = {
          alias: null,
          args: A,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: N,
          storageKey: null,
        },
        ab = {
          alias: null,
          args: null,
          concreteType: "Video",
          kind: "LinkedField",
          name: "associated_video",
          plural: !1,
          selections: k,
          storageKey: null,
        };
      D = [
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        { kind: "Literal", name: "is_top_level", value: !1 },
      ];
      E = {
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
      };
      F = {
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
      };
      G = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_author_banned_by_content_owner",
        storageKey: null,
      };
      H = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_ama_question",
        storageKey: null,
      };
      I = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "comment_parent",
        plural: !1,
        selections: [
          f,
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [z, f],
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
              l,
              p,
              {
                kind: "InlineFragment",
                selections: [t, u],
                type: "User",
                abstractKey: null,
              },
              f,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      J = {
        alias: null,
        args: null,
        concreteType: "EditHistoryConnection",
        kind: "LinkedField",
        name: "edit_history",
        plural: !1,
        selections: h,
        storageKey: null,
      };
      K = {
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
            args: A,
            concreteType: "Page",
            kind: "LinkedField",
            name: "viewer_acts_as_page",
            plural: !1,
            selections: k,
            storageKey: null,
          },
          f,
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
              p,
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
                  f,
                ],
                storageKey: null,
              },
              f,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      L = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "ban_action",
        storageKey: null,
      };
      t = [{ kind: "Literal", name: "translation_type", value: "ORIGINAL" }];
      u = {
        args: null,
        fragment: aa(
          "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
        ),
        kind: "FragmentSpread",
      };
      h = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "text",
        storageKey: null,
      };
      u = {
        alias: null,
        args: t,
        concreteType: null,
        kind: "LinkedField",
        name: "preferred_body",
        plural: !1,
        selections: [
          l,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "translation_type",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [u, h],
            type: "TextWithEntities",
            abstractKey: null,
          },
          u,
        ],
        storageKey: 'preferred_body(translation_type:"ORIGINAL")',
      };
      var bb = {
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
        cb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "translation_available_for_viewer",
          storageKey: null,
        },
        db = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_content_owner",
          storageKey: null,
        },
        eb = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "if_viewer_can_share",
          plural: !1,
          selections: [
            f,
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
        fb = {
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
            f,
          ],
          storageKey: null,
        },
        gb = {
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
            f,
          ],
          storageKey: null,
        },
        hb = {
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
              fragmentName: "CometUFIGroupCommentActorLink_groupCommentInfo",
              fragmentPropName: "groupCommentInfo",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        ib = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_privacy_value",
          storageKey: null,
        },
        jb = {
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
            f,
          ],
          storageKey: null,
        },
        kb = {
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
            f,
          ],
          storageKey: null,
        };
      t = {
        alias: "body_renderer",
        args: t,
        concreteType: null,
        kind: "LinkedField",
        name: "preferred_body",
        plural: !1,
        selections: [
          l,
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
      };
      var lb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_declined_by_group_admin_assistant",
          storageKey: null,
        },
        mb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video_comment",
          storageKey: null,
        },
        nb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp_in_video",
          storageKey: null,
        },
        ob = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "written_while_video_was_live",
          storageKey: null,
        },
        pb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_constituent_badge",
          storageKey: null,
        },
        qb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_see_subsribe_button",
          storageKey: null,
        },
        rb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_see_constituent_badge_upsell",
          storageKey: null,
        },
        sb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_token",
          storageKey: null,
        },
        tb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "question_and_answer_type",
          storageKey: null,
        },
        ub = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_original_poster",
          storageKey: null,
        },
        vb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_comment_poster",
          storageKey: null,
        },
        wb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_bot",
          storageKey: null,
        },
        xb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_non_coworker",
          storageKey: null,
        },
        yb = {
          alias: null,
          args: o,
          concreteType: null,
          kind: "LinkedField",
          name: "author_user_signals_renderer",
          plural: !1,
          selections: [
            l,
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
        };
      n = {
        alias: null,
        args: [
          n,
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
          l,
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "CometUFICommentInlineFollowCTARenderer_renderer",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentActorBotBadge3DWrapper_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "CometUFICommentPostAuthorBadge3DWrapper_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentQAAnswerBadge_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentQASocialAnswerBadge_badge",
                fragmentPropName: "badge",
                kind: "ModuleImport",
              },
            ],
            type: "GeminiUFICommentQASocialAnswerBadge",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      var O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_title",
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset",
          storageKey: null,
        },
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_v2",
          storageKey: null,
        },
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_dark_mode_v2",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_description",
          storageKey: null,
        },
        T = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_enabled",
          storageKey: null,
        },
        U = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_manageable",
          storageKey: null,
        },
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "serialized",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "identity_badge_type",
          storageKey: null,
        },
        X = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_enabled",
          storageKey: null,
        },
        Y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_uri",
          storageKey: null,
        },
        Z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_text",
          storageKey: null,
        },
        $ = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "tier_info",
          plural: !1,
          selections: [
            l,
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
        },
        zb = {
          alias: null,
          args: o,
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
            h,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text_gradient",
              storageKey: null,
            },
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
            $,
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
        };
      o = {
        alias: null,
        args: o,
        kind: "ScalarField",
        name: "can_show_multiple_identity_badges",
        storageKey: null,
      };
      O = {
        alias: null,
        args: null,
        concreteType: "IdentityBadge",
        kind: "LinkedField",
        name: "earned_identity_badges_web",
        plural: !0,
        selections: [O, P, Q, R, S, T, U, V, W, X, Y, Z, $],
        storageKey: null,
      };
      P = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "work_ama_answer_status",
        storageKey: null,
      };
      Q = {
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
      };
      R = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "can_viewer_disable_preview",
        storageKey: null,
      };
      S = {
        args: null,
        documentName: "CometUFIComment_comment",
        fragmentName: "CometUFICommentQualitySurvey_inlineSurveyConfig",
        fragmentPropName: "inlineSurveyConfig",
        kind: "ModuleImport",
      };
      T = {
        alias: null,
        args: null,
        concreteType: "InlineSurveyStoryActionLink",
        kind: "LinkedField",
        name: "inline_survey_config",
        plural: !1,
        selections: [
          S,
          {
            alias: null,
            args: [w],
            concreteType: "Image",
            kind: "LinkedField",
            name: "favicon",
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
              x,
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
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "followup_choices",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "followup_question",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "main_choices",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "main_question",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "privacy_text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "session_blob",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "thankyou_text",
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
            name: "tessa_survey_config_id",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      U = {
        alias: null,
        args: null,
        concreteType: "Story",
        kind: "LinkedField",
        name: "attached_story",
        plural: !1,
        selections: N,
        storageKey: null,
      };
      V = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "if_viewer_can_see_member_page_tooltip",
        plural: !1,
        selections: N,
        storageKey: null,
      };
      W = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_disabled",
        storageKey: null,
      };
      X = {
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
      };
      Y = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "comment_upper_badge_renderer",
        plural: !1,
        selections: [
          l,
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometUFIComment_comment_upper_badge_renderer",
                fragmentName: "GroupsCometCommentPinnedBadgeRenderer_renderer",
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
                documentName: "CometUFIComment_comment_upper_badge_renderer",
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
      };
      Z = {
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
          l,
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometUFIComment_comment_elevated_comment_data",
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
      };
      $ = {
        alias: null,
        args: null,
        concreteType: "TextWithEntities",
        kind: "LinkedField",
        name: "body",
        plural: !1,
        selections: [
          h,
          {
            alias: null,
            args: null,
            concreteType: "EntityAtRange",
            kind: "LinkedField",
            name: "ranges",
            plural: !0,
            selections: [
              l,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "entity",
                plural: !1,
                selections: [
                  l,
                  {
                    kind: "InlineFragment",
                    selections: k,
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "entity_is_weak_reference",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "length",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "offset",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      w = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_markdown_enabled",
        storageKey: null,
      };
      x = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_subreply_parent_deleted",
        storageKey: null,
      };
      N = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "reply_parent_comment",
        plural: !1,
        selections: k,
        storageKey: null,
      };
      h = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "optimistic_action",
        storageKey: null,
      };
      k = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "optimistic_error_code",
        storageKey: null,
      };
      var Ab = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "optimistic_error",
          storageKey: null,
        },
        Bb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_id",
          storageKey: null,
        },
        Cb = {
          kind: "ClientExtension",
          selections: [
            h,
            k,
            Ab,
            Bb,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reply_comment_parent_fbid",
              storageKey: null,
            },
          ],
        },
        Db = {
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_previous_page",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "start_cursor",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Eb = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ufi2_connection_generation",
              storageKey: null,
            },
          ],
        },
        Fb = ["feedback_source", "focus_comment_id", "comment_order"],
        Gb = {
          kind: "Variable",
          name: "__dynamicKey",
          variableName: "UFI2CommentsProvider_commentsKey",
        },
        Hb = {
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
              name: "visibility",
              storageKey: null,
            },
            f,
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, ba, ca, da, ea, fa, ga, ha, ia],
          kind: "Fragment",
          metadata: null,
          name: "CometUFICreateCommentSubscription",
          selections: [
            {
              alias: null,
              args: ja,
              concreteType: "CommentCreateResponsePayload",
              kind: "LinkedField",
              name: "comment_create_subscribe",
              plural: !1,
              selections: [
                ka,
                {
                  alias: null,
                  args: null,
                  concreteType: "CommentsEdge",
                  kind: "LinkedField",
                  name: "feedback_comment_edge",
                  plural: !1,
                  selections: [
                    i,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometUFIComment_comment",
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometUFIFullThreadedReplyContainer_comment",
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometUFICommentEditor_comment",
                        },
                        f,
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
                              name: "CometUFICommentInGroup_feedback",
                            },
                            {
                              args: [
                                {
                                  kind: "Variable",
                                  name: "includeNestedComments",
                                  variableName: "includeNestedComments",
                                },
                              ],
                              kind: "FragmentSpread",
                              name: "CometUFICommentList_feedback",
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Story",
                          kind: "LinkedField",
                          name: "parent_post_story",
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
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "CometUFICommentsCount_feedback",
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        j,
                        la,
                        ma,
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
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [ba, b, c, d, e, ca, da, ea, fa, ga, ha, ia, a],
          kind: "Operation",
          name: "CometUFICreateCommentSubscription",
          selections: [
            {
              alias: null,
              args: ja,
              concreteType: "CommentCreateResponsePayload",
              kind: "LinkedField",
              name: "comment_create_subscribe",
              plural: !1,
              selections: [
                ka,
                {
                  alias: null,
                  args: null,
                  concreteType: "CommentsEdge",
                  kind: "LinkedField",
                  name: "feedback_comment_edge",
                  plural: !1,
                  selections: [
                    i,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        m,
                        f,
                        na,
                        oa,
                        s,
                        r,
                        ta,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback",
                          plural: !1,
                          selections: [
                            f,
                            ua,
                            {
                              alias: null,
                              args: A,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "viewer_actor",
                              plural: !1,
                              selections: [l, f, pa, p, qa, sa, v],
                              storageKey: null,
                            },
                            va,
                            wa,
                            {
                              alias: null,
                              args: null,
                              concreteType: "Video",
                              kind: "LinkedField",
                              name: "associated_video",
                              plural: !1,
                              selections: [f, xa, ya, za, Aa],
                              storageKey: null,
                            },
                            B,
                            Ba,
                            z,
                            Ca,
                            Da,
                            Ea,
                            Fa,
                            C,
                            {
                              alias: "threading_config_type",
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "threading_config",
                              plural: !1,
                              selections: Ga,
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
                                l,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "CometUFICommentInGroup_feedback",
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
                                l,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "CometUFICommentInGroup_feedback__replies_list_renderer",
                                      fragmentName:
                                        "CometUFIDefaultRepliesListRenderer_renderer",
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
                            Ha,
                            Ia,
                            Ja,
                            Ka,
                            La,
                            Ma,
                            Na,
                            Oa,
                            {
                              alias: null,
                              args: Pa,
                              concreteType: "DisplayCommentsConnection",
                              kind: "LinkedField",
                              name: "display_comments",
                              plural: !1,
                              selections: [
                                Qa,
                                Ra,
                                Sa,
                                Ta,
                                Ua,
                                Va,
                                Wa,
                                Xa,
                                g,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "DisplayCommentsEdge",
                                  kind: "LinkedField",
                                  name: "edges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Comment",
                                      kind: "LinkedField",
                                      name: "node",
                                      plural: !1,
                                      selections: [
                                        f,
                                        Ya,
                                        s,
                                        r,
                                        M,
                                        Za,
                                        m,
                                        na,
                                        oa,
                                        ta,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Feedback",
                                          kind: "LinkedField",
                                          name: "feedback",
                                          plural: !1,
                                          selections: [
                                            f,
                                            ua,
                                            $a,
                                            va,
                                            wa,
                                            ab,
                                            B,
                                            Ba,
                                            z,
                                            Ca,
                                            Da,
                                            Ea,
                                            {
                                              condition:
                                                "includeNestedComments",
                                              kind: "Condition",
                                              passingValue: !0,
                                              selections: [
                                                Ha,
                                                Ia,
                                                Ja,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "threading_config",
                                                  plural: !1,
                                                  selections: Ga,
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: A,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "viewer_actor",
                                                  plural: !1,
                                                  selections: [
                                                    pa,
                                                    p,
                                                    qa,
                                                    sa,
                                                    v,
                                                  ],
                                                  storageKey: null,
                                                },
                                                Ka,
                                                La,
                                                Ma,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "Video",
                                                  kind: "LinkedField",
                                                  name: "associated_video",
                                                  plural: !1,
                                                  selections: [xa, ya, za, Aa],
                                                  storageKey: null,
                                                },
                                                Na,
                                                C,
                                                Oa,
                                                {
                                                  alias: null,
                                                  args: D,
                                                  concreteType:
                                                    "DisplayCommentsConnection",
                                                  kind: "LinkedField",
                                                  name: "display_comments",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "Comment",
                                                      kind: "LinkedField",
                                                      name: "highlighted_comments",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "author",
                                                          plural: !1,
                                                          selections: [
                                                            l,
                                                            p,
                                                            {
                                                              alias:
                                                                "profilePictureForReplyExpander",
                                                              args: ra,
                                                              concreteType:
                                                                "Image",
                                                              kind: "LinkedField",
                                                              name: "profile_picture",
                                                              plural: !1,
                                                              selections: y,
                                                              storageKey: null,
                                                            },
                                                            v,
                                                            f,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        M,
                                                        f,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    Qa,
                                                    Ra,
                                                    Sa,
                                                    Ta,
                                                    Ua,
                                                    Va,
                                                    Wa,
                                                    Xa,
                                                    g,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "DisplayCommentsEdge",
                                                      kind: "LinkedField",
                                                      name: "edges",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "Comment",
                                                          kind: "LinkedField",
                                                          name: "node",
                                                          plural: !1,
                                                          selections: [
                                                            f,
                                                            Ya,
                                                            s,
                                                            r,
                                                            M,
                                                            Za,
                                                            m,
                                                            na,
                                                            oa,
                                                            ta,
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                "Feedback",
                                                              kind: "LinkedField",
                                                              name: "feedback",
                                                              plural: !1,
                                                              selections: [
                                                                f,
                                                                ua,
                                                                $a,
                                                                va,
                                                                wa,
                                                                ab,
                                                                B,
                                                                Ba,
                                                                z,
                                                                Ca,
                                                                Da,
                                                                Ea,
                                                                Fa,
                                                                C,
                                                              ],
                                                              storageKey: null,
                                                            },
                                                            E,
                                                            F,
                                                            G,
                                                            H,
                                                            I,
                                                            J,
                                                            K,
                                                            L,
                                                            u,
                                                            bb,
                                                            cb,
                                                            q,
                                                            db,
                                                            eb,
                                                            fb,
                                                            gb,
                                                            hb,
                                                            ib,
                                                            jb,
                                                            kb,
                                                            t,
                                                            lb,
                                                            mb,
                                                            nb,
                                                            ob,
                                                            pb,
                                                            qb,
                                                            rb,
                                                            sb,
                                                            tb,
                                                            ub,
                                                            vb,
                                                            wb,
                                                            xb,
                                                            yb,
                                                            n,
                                                            zb,
                                                            o,
                                                            O,
                                                            P,
                                                            Q,
                                                            R,
                                                            T,
                                                            U,
                                                            V,
                                                            W,
                                                            X,
                                                            Y,
                                                            Z,
                                                            $,
                                                            w,
                                                            x,
                                                            N,
                                                            j,
                                                            l,
                                                            Cb,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        i,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    Db,
                                                    Eb,
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: D,
                                                  filters: Fb,
                                                  handle: "ufi2_comments",
                                                  key: "UFI2CommentsProvider_feedback_display_comments",
                                                  kind: "LinkedHandle",
                                                  name: "display_comments",
                                                  dynamicKey: Gb,
                                                },
                                                Hb,
                                              ],
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        E,
                                        F,
                                        G,
                                        H,
                                        I,
                                        J,
                                        K,
                                        L,
                                        u,
                                        bb,
                                        cb,
                                        q,
                                        db,
                                        eb,
                                        fb,
                                        gb,
                                        hb,
                                        ib,
                                        jb,
                                        kb,
                                        t,
                                        lb,
                                        mb,
                                        nb,
                                        ob,
                                        pb,
                                        qb,
                                        rb,
                                        sb,
                                        tb,
                                        ub,
                                        vb,
                                        wb,
                                        xb,
                                        yb,
                                        n,
                                        zb,
                                        o,
                                        O,
                                        P,
                                        Q,
                                        R,
                                        T,
                                        U,
                                        V,
                                        W,
                                        X,
                                        Y,
                                        Z,
                                        $,
                                        w,
                                        N,
                                        j,
                                        l,
                                        Cb,
                                        {
                                          condition: "includeNestedComments",
                                          kind: "Condition",
                                          passingValue: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Feedback",
                                              kind: "LinkedField",
                                              name: "feedback",
                                              plural: !1,
                                              selections: [Fa, C],
                                              storageKey: null,
                                            },
                                            x,
                                          ],
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    i,
                                  ],
                                  storageKey: null,
                                },
                                Db,
                                Eb,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: Pa,
                              filters: Fb,
                              handle: "ufi2_comments",
                              key: "UFI2CommentsProvider_feedback_display_comments",
                              kind: "LinkedHandle",
                              name: "display_comments",
                              dynamicKey: Gb,
                            },
                            Hb,
                          ],
                          storageKey: null,
                        },
                        E,
                        F,
                        Za,
                        G,
                        M,
                        H,
                        I,
                        J,
                        K,
                        L,
                        u,
                        bb,
                        cb,
                        q,
                        db,
                        eb,
                        fb,
                        gb,
                        hb,
                        ib,
                        jb,
                        kb,
                        t,
                        lb,
                        mb,
                        nb,
                        ob,
                        pb,
                        qb,
                        rb,
                        sb,
                        tb,
                        ub,
                        vb,
                        wb,
                        xb,
                        yb,
                        n,
                        zb,
                        o,
                        O,
                        P,
                        Q,
                        R,
                        {
                          alias: null,
                          args: null,
                          concreteType: "InlineSurveyStoryActionLink",
                          kind: "LinkedField",
                          name: "inline_survey_config",
                          plural: !1,
                          selections: [S],
                          storageKey: null,
                        },
                        Ya,
                        U,
                        V,
                        W,
                        X,
                        Y,
                        Z,
                        x,
                        $,
                        w,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Story",
                          kind: "LinkedField",
                          name: "parent_post_story",
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
                                f,
                                Ia,
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
                            f,
                          ],
                          storageKey: null,
                        },
                        j,
                        la,
                        ma,
                        { kind: "ClientExtension", selections: [h, k, Ab, Bb] },
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
          id: "4334072886635469",
          metadata: { subscriptionName: "comment_create_subscribe" },
          name: "CometUFICreateCommentSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    d.exports = a;
  },
  null
);
__d(
  "CometUFIPegasusCreateCommentSubscription.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, aa, b, c, d, ba) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        ba = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        ca = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        da = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        ea = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        fa = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        ga = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "includeNestedComments",
        },
        ha = { defaultValue: null, kind: "LocalArgument", name: "input" },
        ia = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ja = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        ka = [{ kind: "Variable", name: "data", variableName: "input" }],
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
          name: "count",
          storageKey: null,
        },
        g = [f],
        la = {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "feedback",
          plural: !1,
          selections: [
            e,
            {
              alias: null,
              args: null,
              concreteType: "DisplayCommentsConnection",
              kind: "LinkedField",
              name: "display_comments",
              plural: !1,
              selections: g,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        i = {
          alias: "threading_depth",
          args: null,
          kind: "ScalarField",
          name: "depth",
          storageKey: null,
        },
        j = [e],
        k = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "reply_parent_comment",
          plural: !1,
          selections: j,
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        ma = {
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
                l,
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
        m = {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        n = [m],
        na = {
          alias: null,
          args: n,
          kind: "ScalarField",
          name: "comment_menu_tooltip",
          storageKey: null,
        },
        oa = {
          alias: null,
          args: n,
          kind: "ScalarField",
          name: "should_show_comment_menu",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
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
          name: "is_verified",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        u = {
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
        pa = { kind: "TypeDiscriminator", abstractKey: "__isActor" },
        v = { kind: "Variable", name: "scale", variableName: "scale" },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        x = [w],
        qa = {
          alias: "profile_picture_depth_0",
          args: [
            { kind: "Literal", name: "height", value: 32 },
            v,
            { kind: "Literal", name: "width", value: 32 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: x,
          storageKey: null,
        },
        ra = [
          { kind: "Literal", name: "height", value: 24 },
          v,
          { kind: "Literal", name: "width", value: 24 },
        ],
        sa = {
          alias: "profile_picture_depth_1",
          args: ra,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: x,
          storageKey: null,
        };
      r = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "author",
        plural: !1,
        selections: [
          l,
          e,
          o,
          {
            kind: "InlineFragment",
            selections: q,
            type: "Event",
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
            selections: [p, r],
            type: "Page",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              p,
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
              r,
              s,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subscribe_status",
                storageKey: null,
              },
              t,
              u,
            ],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: q,
            type: "Entity",
            abstractKey: "__isEntity",
          },
          pa,
          qa,
          sa,
        ],
        storageKey: null,
      };
      q = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_author_weak_reference",
        storageKey: null,
      };
      var ta = {
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
        ua = {
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
                l,
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
        y = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        z = [y];
      u = {
        kind: "InlineFragment",
        selections: [t, u],
        type: "User",
        abstractKey: null,
      };
      var A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        va = {
          alias: null,
          args: z,
          concreteType: "FeedbackReactionInfo",
          kind: "LinkedField",
          name: "viewer_feedback_reaction_info",
          plural: !1,
          selections: [A, e],
          storageKey: null,
        },
        wa = {
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
            A,
            e,
          ],
          storageKey: null,
        },
        xa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_is_ama_enabled",
          storageKey: null,
        },
        ya = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_status",
          storageKey: null,
        },
        za = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video",
          storageKey: null,
        },
        Aa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_is_ama_enabled_with_comments",
          storageKey: null,
        };
      A = {
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
                  A,
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
                    selections: x,
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
      };
      var Ba = {
        alias: null,
        args: null,
        concreteType: "ReactorsOfContentConnection",
        kind: "LinkedField",
        name: "reactors",
        plural: !1,
        selections: [
          f,
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
      };
      y = {
        alias: null,
        args: [
          { kind: "Variable", name: "location", variableName: "feedLocation" },
          y,
        ],
        kind: "ScalarField",
        name: "can_viewer_comment",
        storageKey: null,
      };
      var Ca = {
          alias: null,
          args: z,
          kind: "ScalarField",
          name: "can_viewer_react",
          storageKey: null,
        },
        Da = {
          alias: null,
          args: z,
          kind: "ScalarField",
          name: "comment_composer_placeholder",
          storageKey: null,
        },
        Ea = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_top_reactions",
          storageKey: null,
        },
        Fa = {
          alias: null,
          args: null,
          concreteType: "AskMeAnythingFeedbackMetadata",
          kind: "LinkedField",
          name: "ask_me_anything_feedback_metadata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_viewer_host",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Ga = {
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
        Ha = {
          alias: "toplevel_comment_count",
          args: [{ kind: "Literal", name: "orderby", value: "toplevel" }],
          concreteType: "TopLevelCommentsConnection",
          kind: "LinkedField",
          name: "top_level_comments",
          plural: !1,
          selections: g,
          storageKey: 'top_level_comments(orderby:"toplevel")',
        },
        Ia = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "threading_config",
          plural: !1,
          selections: [l],
          storageKey: null,
        },
        Ja = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_vc_acting_as_page_or_profile_plus",
          storageKey: null,
        },
        Ka = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_pin_live_comments",
          storageKey: null,
        },
        La = {
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
              selections: j,
              storageKey: null,
            },
            e,
          ],
          storageKey: null,
        },
        Ma = {
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
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hide_transparency_enabled_for_actor",
          storageKey: null,
        },
        Na = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscription_target_id",
          storageKey: null,
        },
        C = {
          kind: "Variable",
          name: "feed_context_enable_comment",
          variableName: "displayCommentsContextEnableComment",
        },
        D = {
          kind: "Variable",
          name: "feed_context_fb_feed_location",
          variableName: "feedLocation",
        },
        E = {
          kind: "Variable",
          name: "feed_context_is_ad_preview",
          variableName: "displayCommentsContextIsAdPreview",
        },
        F = {
          kind: "Variable",
          name: "feed_context_is_aggregated_share",
          variableName: "displayCommentsContextIsAggregatedShare",
        },
        G = {
          kind: "Variable",
          name: "feed_context_is_story_set",
          variableName: "displayCommentsContextIsStorySet",
        },
        H = {
          kind: "Variable",
          name: "feedback_context",
          variableName: "displayCommentsFeedbackContext",
        },
        I = {
          kind: "Variable",
          name: "feedback_source",
          variableName: "feedbackSource",
        },
        J = {
          kind: "Variable",
          name: "focus_comment_id",
          variableName: "focusCommentID",
        },
        K = { kind: "Literal", name: "is_initial_fetch", value: !0 },
        Oa = [
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          {
            kind: "Variable",
            name: "is_top_level",
            variableName: "includeNestedComments",
          },
        ],
        Pa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_order",
          storageKey: null,
        },
        Qa = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "expanded_sub_reply_parents",
          plural: !0,
          selections: j,
          storageKey: null,
        },
        Ra = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_initially_expanded",
          storageKey: null,
        },
        Sa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_size",
          storageKey: null,
        },
        Ta = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reply_comment_order",
          storageKey: null,
        },
        Ua = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_render_composer_preemptively",
          storageKey: null,
        },
        Va = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "after_count",
          storageKey: null,
        },
        Wa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "before_count",
          storageKey: null,
        },
        Xa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_fbid",
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "created_time",
          storageKey: null,
        },
        Ya = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "spam_display_mode",
          storageKey: null,
        },
        M = [l, e],
        Za = {
          alias: null,
          args: z,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: M,
          storageKey: null,
        },
        $a = {
          alias: null,
          args: null,
          concreteType: "Video",
          kind: "LinkedField",
          name: "associated_video",
          plural: !1,
          selections: j,
          storageKey: null,
        };
      C = [
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        { kind: "Literal", name: "is_top_level", value: !1 },
      ];
      D = {
        alias: "sub_replies_count",
        args: [
          { kind: "Literal", name: "comment_order", value: "SUB_REPLIES" },
          {
            kind: "Literal",
            name: "top_level_comment_order",
            value: "TOPLEVEL",
          },
        ],
        concreteType: "DisplayCommentsConnection",
        kind: "LinkedField",
        name: "display_comments",
        plural: !1,
        selections: g,
        storageKey:
          'display_comments(comment_order:"SUB_REPLIES",top_level_comment_order:"TOPLEVEL")',
      };
      E = {
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
      };
      F = {
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
      };
      G = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_author_banned_by_content_owner",
        storageKey: null,
      };
      H = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_ama_question",
        storageKey: null,
      };
      I = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "comment_parent",
        plural: !1,
        selections: [
          e,
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [y, e],
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
              l,
              o,
              {
                kind: "InlineFragment",
                selections: [s, t],
                type: "User",
                abstractKey: null,
              },
              e,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      J = {
        alias: null,
        args: null,
        concreteType: "EditHistoryConnection",
        kind: "LinkedField",
        name: "edit_history",
        plural: !1,
        selections: g,
        storageKey: null,
      };
      K = {
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
            args: z,
            concreteType: "Page",
            kind: "LinkedField",
            name: "viewer_acts_as_page",
            plural: !1,
            selections: j,
            storageKey: null,
          },
          e,
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
              o,
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
                  e,
                ],
                storageKey: null,
              },
              e,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      s = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "ban_action",
        storageKey: null,
      };
      t = [{ kind: "Literal", name: "translation_type", value: "ORIGINAL" }];
      g = {
        args: null,
        fragment: aa(
          "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
        ),
        kind: "FragmentSpread",
      };
      var N = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "text",
        storageKey: null,
      };
      g = {
        alias: null,
        args: t,
        concreteType: null,
        kind: "LinkedField",
        name: "preferred_body",
        plural: !1,
        selections: [
          l,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "translation_type",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [g, N],
            type: "TextWithEntities",
            abstractKey: null,
          },
          g,
        ],
        storageKey: 'preferred_body(translation_type:"ORIGINAL")',
      };
      var ab = {
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
        bb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "translation_available_for_viewer",
          storageKey: null,
        },
        cb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_content_owner",
          storageKey: null,
        },
        db = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "if_viewer_can_share",
          plural: !1,
          selections: [
            e,
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
        eb = {
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
            e,
          ],
          storageKey: null,
        },
        fb = {
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
            e,
          ],
          storageKey: null,
        },
        gb = {
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
              fragmentName: "CometUFIGroupCommentActorLink_groupCommentInfo",
              fragmentPropName: "groupCommentInfo",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        hb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_privacy_value",
          storageKey: null,
        },
        ib = {
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
            e,
          ],
          storageKey: null,
        },
        jb = {
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
            e,
          ],
          storageKey: null,
        };
      t = {
        alias: "body_renderer",
        args: t,
        concreteType: null,
        kind: "LinkedField",
        name: "preferred_body",
        plural: !1,
        selections: [
          l,
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
      };
      var kb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_declined_by_group_admin_assistant",
          storageKey: null,
        },
        lb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video_comment",
          storageKey: null,
        },
        mb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp_in_video",
          storageKey: null,
        },
        nb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "written_while_video_was_live",
          storageKey: null,
        },
        ob = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_constituent_badge",
          storageKey: null,
        },
        pb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_see_subsribe_button",
          storageKey: null,
        },
        qb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_see_constituent_badge_upsell",
          storageKey: null,
        },
        rb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_token",
          storageKey: null,
        },
        sb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "question_and_answer_type",
          storageKey: null,
        },
        tb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_original_poster",
          storageKey: null,
        },
        ub = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_comment_poster",
          storageKey: null,
        },
        vb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_bot",
          storageKey: null,
        },
        wb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_non_coworker",
          storageKey: null,
        },
        xb = {
          alias: null,
          args: n,
          concreteType: null,
          kind: "LinkedField",
          name: "author_user_signals_renderer",
          plural: !1,
          selections: [
            l,
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
        };
      m = {
        alias: null,
        args: [
          m,
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
          l,
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "CometUFICommentInlineFollowCTARenderer_renderer",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentActorBotBadge3DWrapper_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "CometUFICommentPostAuthorBadge3DWrapper_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentQAAnswerBadge_badge",
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
                documentName: "useCometUFICommentActorLinkBadges_comment",
                fragmentName: "GeminiUFICommentQASocialAnswerBadge_badge",
                fragmentPropName: "badge",
                kind: "ModuleImport",
              },
            ],
            type: "GeminiUFICommentQASocialAnswerBadge",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      var O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_title",
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset",
          storageKey: null,
        },
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_v2",
          storageKey: null,
        },
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_dark_mode_v2",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_description",
          storageKey: null,
        },
        T = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_enabled",
          storageKey: null,
        },
        U = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_manageable",
          storageKey: null,
        },
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "serialized",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "identity_badge_type",
          storageKey: null,
        },
        X = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_enabled",
          storageKey: null,
        },
        Y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_uri",
          storageKey: null,
        },
        Z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_text",
          storageKey: null,
        },
        $ = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "tier_info",
          plural: !1,
          selections: [
            l,
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
        },
        yb = {
          alias: null,
          args: n,
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
            N,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text_gradient",
              storageKey: null,
            },
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
            $,
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
        };
      n = {
        alias: null,
        args: n,
        kind: "ScalarField",
        name: "can_show_multiple_identity_badges",
        storageKey: null,
      };
      O = {
        alias: null,
        args: null,
        concreteType: "IdentityBadge",
        kind: "LinkedField",
        name: "earned_identity_badges_web",
        plural: !0,
        selections: [O, P, Q, R, S, T, U, V, W, X, Y, Z, $],
        storageKey: null,
      };
      P = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "work_ama_answer_status",
        storageKey: null,
      };
      Q = {
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
      };
      R = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "can_viewer_disable_preview",
        storageKey: null,
      };
      S = {
        args: null,
        documentName: "CometUFIComment_comment",
        fragmentName: "CometUFICommentQualitySurvey_inlineSurveyConfig",
        fragmentPropName: "inlineSurveyConfig",
        kind: "ModuleImport",
      };
      T = {
        alias: null,
        args: null,
        concreteType: "InlineSurveyStoryActionLink",
        kind: "LinkedField",
        name: "inline_survey_config",
        plural: !1,
        selections: [
          S,
          {
            alias: null,
            args: [v],
            concreteType: "Image",
            kind: "LinkedField",
            name: "favicon",
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
              w,
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
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "followup_choices",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "followup_question",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "main_choices",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "main_question",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "privacy_text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "session_blob",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "thankyou_text",
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
            name: "tessa_survey_config_id",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      U = {
        alias: null,
        args: null,
        concreteType: "Story",
        kind: "LinkedField",
        name: "attached_story",
        plural: !1,
        selections: M,
        storageKey: null,
      };
      V = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "if_viewer_can_see_member_page_tooltip",
        plural: !1,
        selections: M,
        storageKey: null,
      };
      W = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_disabled",
        storageKey: null,
      };
      X = {
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
      };
      Y = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "comment_upper_badge_renderer",
        plural: !1,
        selections: [
          l,
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometUFIComment_comment_upper_badge_renderer",
                fragmentName: "GroupsCometCommentPinnedBadgeRenderer_renderer",
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
                documentName: "CometUFIComment_comment_upper_badge_renderer",
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
      };
      Z = {
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
          l,
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometUFIComment_comment_elevated_comment_data",
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
      };
      $ = {
        alias: null,
        args: null,
        concreteType: "TextWithEntities",
        kind: "LinkedField",
        name: "body",
        plural: !1,
        selections: [
          N,
          {
            alias: null,
            args: null,
            concreteType: "EntityAtRange",
            kind: "LinkedField",
            name: "ranges",
            plural: !0,
            selections: [
              l,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "entity",
                plural: !1,
                selections: [
                  l,
                  {
                    kind: "InlineFragment",
                    selections: j,
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "entity_is_weak_reference",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "length",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "offset",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      v = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_markdown_enabled",
        storageKey: null,
      };
      w = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_subreply_parent_deleted",
        storageKey: null,
      };
      M = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "optimistic_action",
        storageKey: null,
      };
      N = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "optimistic_error_code",
        storageKey: null,
      };
      j = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "optimistic_error",
        storageKey: null,
      };
      var zb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_id",
          storageKey: null,
        },
        Ab = {
          kind: "ClientExtension",
          selections: [
            M,
            N,
            j,
            zb,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reply_comment_parent_fbid",
              storageKey: null,
            },
          ],
        },
        Bb = {
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_previous_page",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "start_cursor",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Cb = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ufi2_connection_generation",
              storageKey: null,
            },
          ],
        },
        Db = ["feedback_source", "focus_comment_id", "comment_order"],
        Eb = {
          kind: "Variable",
          name: "__dynamicKey",
          variableName: "UFI2CommentsProvider_commentsKey",
        },
        Fb = {
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
              name: "visibility",
              storageKey: null,
            },
            e,
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, ba, ca, da, ea, fa, ga, ha, ia, ja],
          kind: "Fragment",
          metadata: null,
          name: "CometUFIPegasusCreateCommentSubscription",
          selections: [
            {
              alias: null,
              args: ka,
              concreteType: "CommentCreateResponsePayload",
              kind: "LinkedField",
              name: "pegasus_comment_create_subscribe",
              plural: !1,
              selections: [
                la,
                {
                  alias: null,
                  args: null,
                  concreteType: "CommentsEdge",
                  kind: "LinkedField",
                  name: "feedback_comment_edge",
                  plural: !1,
                  selections: [
                    h,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometUFIComment_comment",
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometUFICommentEditor_comment",
                        },
                        e,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback",
                          plural: !1,
                          selections: [
                            {
                              args: [
                                {
                                  kind: "Variable",
                                  name: "includeNestedComments",
                                  variableName: "includeNestedComments",
                                },
                              ],
                              kind: "FragmentSpread",
                              name: "CometUFICommentList_feedback",
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Story",
                          kind: "LinkedField",
                          name: "parent_post_story",
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
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "CometUFICommentsCount_feedback",
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        i,
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
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [ca, b, c, d, ba, da, ea, fa, ga, ha, ia, ja, a],
          kind: "Operation",
          name: "CometUFIPegasusCreateCommentSubscription",
          selections: [
            {
              alias: null,
              args: ka,
              concreteType: "CommentCreateResponsePayload",
              kind: "LinkedField",
              name: "pegasus_comment_create_subscribe",
              plural: !1,
              selections: [
                la,
                {
                  alias: null,
                  args: null,
                  concreteType: "CommentsEdge",
                  kind: "LinkedField",
                  name: "feedback_comment_edge",
                  plural: !1,
                  selections: [
                    h,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Comment",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        ma,
                        e,
                        na,
                        oa,
                        r,
                        q,
                        ta,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback",
                          plural: !1,
                          selections: [
                            e,
                            ua,
                            {
                              alias: null,
                              args: z,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "viewer_actor",
                              plural: !1,
                              selections: [l, e, pa, o, qa, sa, u],
                              storageKey: null,
                            },
                            va,
                            wa,
                            {
                              alias: null,
                              args: null,
                              concreteType: "Video",
                              kind: "LinkedField",
                              name: "associated_video",
                              plural: !1,
                              selections: [e, xa, ya, za, Aa],
                              storageKey: null,
                            },
                            A,
                            Ba,
                            y,
                            Ca,
                            Da,
                            Ea,
                            Fa,
                            Ga,
                            Ha,
                            Ia,
                            Ja,
                            Ka,
                            La,
                            Ma,
                            B,
                            Na,
                            {
                              alias: null,
                              args: Oa,
                              concreteType: "DisplayCommentsConnection",
                              kind: "LinkedField",
                              name: "display_comments",
                              plural: !1,
                              selections: [
                                Pa,
                                Qa,
                                Ra,
                                Sa,
                                Ta,
                                Ua,
                                Va,
                                Wa,
                                f,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "DisplayCommentsEdge",
                                  kind: "LinkedField",
                                  name: "edges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Comment",
                                      kind: "LinkedField",
                                      name: "node",
                                      plural: !1,
                                      selections: [
                                        e,
                                        Xa,
                                        r,
                                        q,
                                        L,
                                        Ya,
                                        ma,
                                        na,
                                        oa,
                                        ta,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Feedback",
                                          kind: "LinkedField",
                                          name: "feedback",
                                          plural: !1,
                                          selections: [
                                            e,
                                            ua,
                                            Za,
                                            va,
                                            wa,
                                            $a,
                                            A,
                                            Ba,
                                            y,
                                            Ca,
                                            Da,
                                            Ea,
                                            {
                                              condition:
                                                "includeNestedComments",
                                              kind: "Condition",
                                              passingValue: !0,
                                              selections: [
                                                Fa,
                                                Ga,
                                                Ha,
                                                Ia,
                                                {
                                                  alias: null,
                                                  args: z,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "viewer_actor",
                                                  plural: !1,
                                                  selections: [
                                                    pa,
                                                    o,
                                                    qa,
                                                    sa,
                                                    u,
                                                  ],
                                                  storageKey: null,
                                                },
                                                Ja,
                                                Ka,
                                                La,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "Video",
                                                  kind: "LinkedField",
                                                  name: "associated_video",
                                                  plural: !1,
                                                  selections: [xa, ya, za, Aa],
                                                  storageKey: null,
                                                },
                                                Ma,
                                                B,
                                                Na,
                                                {
                                                  alias: null,
                                                  args: C,
                                                  concreteType:
                                                    "DisplayCommentsConnection",
                                                  kind: "LinkedField",
                                                  name: "display_comments",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "Comment",
                                                      kind: "LinkedField",
                                                      name: "highlighted_comments",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "author",
                                                          plural: !1,
                                                          selections: [
                                                            l,
                                                            o,
                                                            {
                                                              alias:
                                                                "profilePictureForReplyExpander",
                                                              args: ra,
                                                              concreteType:
                                                                "Image",
                                                              kind: "LinkedField",
                                                              name: "profile_picture",
                                                              plural: !1,
                                                              selections: x,
                                                              storageKey: null,
                                                            },
                                                            u,
                                                            e,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        L,
                                                        e,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    Pa,
                                                    Qa,
                                                    Ra,
                                                    Sa,
                                                    Ta,
                                                    Ua,
                                                    Va,
                                                    Wa,
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "DisplayCommentsEdge",
                                                      kind: "LinkedField",
                                                      name: "edges",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "Comment",
                                                          kind: "LinkedField",
                                                          name: "node",
                                                          plural: !1,
                                                          selections: [
                                                            e,
                                                            Xa,
                                                            r,
                                                            q,
                                                            L,
                                                            Ya,
                                                            ma,
                                                            na,
                                                            oa,
                                                            ta,
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                "Feedback",
                                                              kind: "LinkedField",
                                                              name: "feedback",
                                                              plural: !1,
                                                              selections: [
                                                                e,
                                                                ua,
                                                                Za,
                                                                va,
                                                                wa,
                                                                $a,
                                                                A,
                                                                Ba,
                                                                y,
                                                                Ca,
                                                                Da,
                                                                Ea,
                                                                D,
                                                                B,
                                                              ],
                                                              storageKey: null,
                                                            },
                                                            E,
                                                            F,
                                                            G,
                                                            H,
                                                            I,
                                                            J,
                                                            K,
                                                            s,
                                                            g,
                                                            ab,
                                                            bb,
                                                            p,
                                                            cb,
                                                            db,
                                                            eb,
                                                            fb,
                                                            gb,
                                                            hb,
                                                            ib,
                                                            jb,
                                                            t,
                                                            kb,
                                                            lb,
                                                            mb,
                                                            nb,
                                                            ob,
                                                            pb,
                                                            qb,
                                                            rb,
                                                            sb,
                                                            tb,
                                                            ub,
                                                            vb,
                                                            wb,
                                                            xb,
                                                            m,
                                                            yb,
                                                            n,
                                                            O,
                                                            P,
                                                            Q,
                                                            R,
                                                            T,
                                                            U,
                                                            V,
                                                            W,
                                                            X,
                                                            Y,
                                                            Z,
                                                            $,
                                                            v,
                                                            w,
                                                            k,
                                                            i,
                                                            l,
                                                            Ab,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        h,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    Bb,
                                                    Cb,
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: C,
                                                  filters: Db,
                                                  handle: "ufi2_comments",
                                                  key: "UFI2CommentsProvider_feedback_display_comments",
                                                  kind: "LinkedHandle",
                                                  name: "display_comments",
                                                  dynamicKey: Eb,
                                                },
                                                Fb,
                                              ],
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        E,
                                        F,
                                        G,
                                        H,
                                        I,
                                        J,
                                        K,
                                        s,
                                        g,
                                        ab,
                                        bb,
                                        p,
                                        cb,
                                        db,
                                        eb,
                                        fb,
                                        gb,
                                        hb,
                                        ib,
                                        jb,
                                        t,
                                        kb,
                                        lb,
                                        mb,
                                        nb,
                                        ob,
                                        pb,
                                        qb,
                                        rb,
                                        sb,
                                        tb,
                                        ub,
                                        vb,
                                        wb,
                                        xb,
                                        m,
                                        yb,
                                        n,
                                        O,
                                        P,
                                        Q,
                                        R,
                                        T,
                                        U,
                                        V,
                                        W,
                                        X,
                                        Y,
                                        Z,
                                        $,
                                        v,
                                        k,
                                        i,
                                        l,
                                        Ab,
                                        {
                                          condition: "includeNestedComments",
                                          kind: "Condition",
                                          passingValue: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Feedback",
                                              kind: "LinkedField",
                                              name: "feedback",
                                              plural: !1,
                                              selections: [D, B],
                                              storageKey: null,
                                            },
                                            w,
                                          ],
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    h,
                                  ],
                                  storageKey: null,
                                },
                                Bb,
                                Cb,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: Oa,
                              filters: Db,
                              handle: "ufi2_comments",
                              key: "UFI2CommentsProvider_feedback_display_comments",
                              kind: "LinkedHandle",
                              name: "display_comments",
                              dynamicKey: Eb,
                            },
                            Fb,
                          ],
                          storageKey: null,
                        },
                        E,
                        F,
                        Ya,
                        G,
                        L,
                        H,
                        I,
                        J,
                        K,
                        s,
                        g,
                        ab,
                        bb,
                        p,
                        cb,
                        db,
                        eb,
                        fb,
                        gb,
                        hb,
                        ib,
                        jb,
                        t,
                        kb,
                        lb,
                        mb,
                        nb,
                        ob,
                        pb,
                        qb,
                        rb,
                        sb,
                        tb,
                        ub,
                        vb,
                        wb,
                        xb,
                        m,
                        yb,
                        n,
                        O,
                        P,
                        Q,
                        R,
                        {
                          alias: null,
                          args: null,
                          concreteType: "InlineSurveyStoryActionLink",
                          kind: "LinkedField",
                          name: "inline_survey_config",
                          plural: !1,
                          selections: [S],
                          storageKey: null,
                        },
                        Xa,
                        U,
                        V,
                        W,
                        X,
                        Y,
                        Z,
                        $,
                        v,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Story",
                          kind: "LinkedField",
                          name: "parent_post_story",
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
                                e,
                                Ga,
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
                            e,
                          ],
                          storageKey: null,
                        },
                        i,
                        k,
                        { kind: "ClientExtension", selections: [M, N, j, zb] },
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
          id: "4510328865646314",
          metadata: { subscriptionName: "pegasus_comment_create_subscribe" },
          name: "CometUFIPegasusCreateCommentSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    d.exports = a;
  },
  null
);
__d(
  "ManageConstituentBadgeDialog.entrypoint",
  ["JSResourceForInteraction", "ManageConstituentBadgeDialogQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.commentID;
        a = a.feedbackID;
        return {
          queries: {
            queryReference: {
              parameters: b("ManageConstituentBadgeDialogQuery$Parameters"),
              variables: { commentID: c, feedbackID: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ManageConstituentBadgeDialog.react"
      ).__setRef("ManageConstituentBadgeDialog.entrypoint"),
    };
    d = a;
    g["default"] = d;
  },
  98
);
__d(
  "ManageConstituentBadgeDialogTrigger.react",
  [
    "fbt",
    "ix",
    "CometEntryPointDialogTrigger.react",
    "ManageConstituentBadgeDialog.entrypoint",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.onPress;
      return j.jsx(c("CometEntryPointDialogTrigger.react"), {
        dialogEntryPoint: c("ManageConstituentBadgeDialog.entrypoint"),
        otherProps: {},
        preloadParams: { commentID: a.commentID, feedbackID: a.feedbackID },
        children: function (a) {
          return j.jsx(c("TetraIcon.react"), {
            alt: h._("Constituent badge"),
            color: "secondary",
            icon: d("fbicon")._(i("506962"), 12),
            onPress: function () {
              a(), b();
            },
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
  "forEachUFI2DisplayCommentsConnection",
  ["UFI2CommentsConnectionHandler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
      var e = !1;
      a = d("UFI2CommentsConnectionHandler").unstable_getAllConnectionsWithKey(
        a,
        b,
        "UFI2CommentsProvider_feedback_display_comments"
      );
      a != null && a.length > 0 && (a.forEach(c), (e = !0));
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIBanActorMutation",
  [
    "CometRelay",
    "CometUFIBanActorMutation.graphql",
    "CometUFIBanActorMutation_comment.graphql",
    "forEachUFI2DisplayCommentsConnection",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h !== void 0 ? h : (h = b("CometUFIBanActorMutation.graphql"));
    i !== void 0 ? i : (i = b("CometUFIBanActorMutation_comment.graphql"));
    a = function (a, b) {
      var e = b.feedbackId,
        f = b.pageId,
        g = b.targetUserId,
        h = b.undoBan;
      b = function (a) {
        if (e == null) return;
        var b = a.get(e);
        if (!b) return;
        c("forEachUFI2DisplayCommentsConnection")(a, b, function (a) {
          a = a.getLinkedRecords("edges");
          if (!a) return;
          a.forEach(function (a) {
            if (!a) return;
            a = a.getLinkedRecord("node");
            if (!a) return;
            var b = a.getLinkedRecord("author");
            if (!b) return;
            if (b.getValue("id") === g) {
              b = a.getValue("is_hidden_by_content_owner");
              a.setValue(h && b !== !0 ? "none" : "spam", "spam_display_mode");
              a.setValue(!h, "is_author_banned_by_content_owner");
            }
          });
        });
      };
      return d("CometRelay").commitMutation(a, {
        mutation: j,
        optimisticResponse: {
          feedback_page_ban: { __typename: "FeedbackPageBanResponsePayload" },
        },
        optimisticUpdater: b,
        updater: b,
        variables: {
          input: {
            ban_action: h ? "UNDO_BAN" : "BAN",
            page_id: f,
            target_user_id: g,
          },
        },
      });
    };
    g.commit = a;
  },
  98
);
__d(
  "ConstituentTitleTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:ConstituentTitleLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:ConstituentTitleLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:ConstituentTitleLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setAddress = function (a) {
        this.$1.address = a;
        return this;
      };
      c.setAppID = function (a) {
        this.$1.appid = a;
        return this;
      };
      c.setBadgeUpsellType = function (a) {
        this.$1.badge_upsell_type = a;
        return this;
      };
      c.setCancelStep = function (a) {
        this.$1.cancel_step = a;
        return this;
      };
      c.setCommentID = function (a) {
        this.$1.comment_id = a;
        return this;
      };
      c.setCommentRankingQeIdentifier = function (a) {
        this.$1.comment_ranking_qe_identifier = a;
        return this;
      };
      c.setDialogSource = function (a) {
        this.$1.dialog_source = a;
        return this;
      };
      c.setDialogType = function (a) {
        this.$1.dialog_type = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setHasCivicEngagementAddress = function (a) {
        this.$1.has_civic_engagement_address = a;
        return this;
      };
      c.setPostID = function (a) {
        this.$1.post_id = a;
        return this;
      };
      c.setProfileIds = function (a) {
        this.$1.profile_ids = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.setSessionid = function (a) {
        this.$1.sessionid = a;
        return this;
      };
      return a;
    })();
    c = {
      address: !0,
      appid: !0,
      badge_upsell_type: !0,
      cancel_step: !0,
      comment_id: !0,
      comment_ranking_qe_identifier: !0,
      dialog_source: !0,
      dialog_type: !0,
      event: !0,
      has_civic_engagement_address: !0,
      post_id: !0,
      profile_ids: !0,
      sessionid: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "XConstituentBadgeDialogController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/constituent_badge/dialog/", {
      __asyncDialog: { type: "Int" },
      comment_id: { type: "String" },
      ft_id: { type: "FBID" },
    });
  },
  null
);
__d(
  "CometUFICommentActorConstituentBadge.react",
  [
    "fbt",
    "ix",
    "Actor",
    "CometCompatModalDialogResource",
    "CometLazyDialogTrigger.react",
    "CometRelay",
    "CometTooltip.react",
    "CometUFICommentActorConstituentBadge_comment.graphql",
    "ConstituentTitleTypedLogger",
    "ManageConstituentBadgeDialogTrigger.react",
    "TetraIcon.react",
    "XConstituentBadgeDialogController",
    "fbicon",
    "gkx",
    "react",
    "recoverableViolation",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useMemo,
      m = e.useRef;
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometUFICommentActorConstituentBadge_comment.graphql")),
        a.comment
      );
      var g = a.legacy_token,
        n = a.parent_feedback,
        o = m(!1),
        p = c("useVisibilityObserver")({
          onVisible: function () {
            if (o.current) return;
            o.current = !0;
            new (c("ConstituentTitleTypedLogger"))()
              .setEvent("comment_vpv")
              .setPostID(t)
              .setCommentID(g)
              .log();
          },
        }),
        q = d("Actor").useActor();
      q = q[0];
      var r = l(
        function () {
          return c("XConstituentBadgeDialogController")
            .getURIBuilder()
            .setString("comment_id", g)
            .getURI()
            .toString();
        },
        [g]
      );
      if (!a.author || ((e = a.author) == null ? void 0 : e.id) == null)
        return c("recoverableViolation")(
          "missing politician",
          "civic_integrity"
        );
      var s = a.author.short_name,
        t = n == null ? void 0 : n.share_fbid,
        u = q === a.author.id,
        v =
          n == null
            ? void 0
            : (e = n.political_figure_data) == null
            ? void 0
            : (e = e.political_office) == null
            ? void 0
            : e.generic_title,
        w =
          n == null
            ? void 0
            : (e = n.political_figure_data) == null
            ? void 0
            : e.name;
      e = a.can_see_constituent_badge_upsell;
      function x() {
        if (!s || !v || !w) return null;
        return u
          ? h._(
              "Your constituent badge is on. {representative_name} is your {office_title}.",
              [h._param("representative_name", w), h._param("office_title", v)]
            )
          : h._(
              "{representative_name} is {comment_author_name}'s {politician_office_title}.",
              [
                h._param("representative_name", w),
                h._param("comment_author_name", s),
                h._param("politician_office_title", v),
              ]
            );
      }
      x.displayName = x.name + " [from " + f.id + "]";
      function y() {
        return h._(
          "{comment_author_name} has a badge showing that they are a constituent of {representative_name}",
          [
            h._param("comment_author_name", s),
            h._param("representative_name", w),
          ]
        );
      }
      y.displayName = y.name + " [from " + f.id + "]";
      function z(a) {
        return k.jsx(c("TetraIcon.react"), {
          alt: y(),
          color: "secondary",
          icon: d("fbicon")._(i("506962"), 12),
          onPress: a,
        });
      }
      z.displayName = z.name + " [from " + f.id + "]";
      var A = c("gkx")("2465");
      e =
        e === !0
          ? A
            ? k.jsx(c("ManageConstituentBadgeDialogTrigger.react"), {
                commentID: a.id,
                feedbackID: n == null ? void 0 : n.id,
                onPress: function () {
                  new (c("ConstituentTitleTypedLogger"))()
                    .setEvent("constituent_badge_click")
                    .setPostID(t)
                    .setCommentID(g)
                    .log();
                },
              })
            : k.jsx(c("CometLazyDialogTrigger.react"), {
                dialogProps: { params: { rel: "dialog-post", uri: r } },
                dialogResource: c("CometCompatModalDialogResource"),
                children: function (a) {
                  return z(function () {
                    a(),
                      new (c("ConstituentTitleTypedLogger"))()
                        .setEvent("constituent_badge_click")
                        .setPostID(t)
                        .setCommentID(g)
                        .log();
                  });
                },
              })
          : z();
      return k.jsx(d("Actor").ActorProvider, {
        initialActorID: q,
        children: k.jsx("span", {
          className: "l59n7fsa l9j0dhe7 kkf49tns",
          ref: p,
          children: k.jsx(c("CometTooltip.react"), {
            tooltip: x(),
            children: k.jsx("span", {
              className: "pcp91wgn iuny7tx3 p8fzw8mz ipjc6fyt",
              children: e,
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
  "CometUFICommentActorVerifiedBadge.react",
  ["CometProfileVerificationBadge.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = babelHelpers["extends"]({}, a);
      return h.jsxs("span", {
        className: "e9o6kcyi pq6dq46d bp9cbjyn",
        children: [
          h.jsx(
            c("CometProfileVerificationBadge.react"),
            babelHelpers["extends"]({}, a, { size: "small" })
          ),
          " ",
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getBodyRendererFromCommentMessage",
  ["JSResource", "RelayRuntime", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResource")(
        "CometUFICommentBodyTextWithEntities.react"
      ).__setRef("getBodyRendererFromCommentMessage"),
      i = c("JSResource")(
        "CometUFICommentBodyTextWithEntities_textWithEntities$normalization.graphql"
      ).__setRef("getBodyRendererFromCommentMessage");
    function a(a, b) {
      if (a == null) return a;
      a = j(a, b);
      return c("RelayRuntime").createPayloadFor3DField(
        "CometUFICommentBody_comment",
        i,
        h,
        babelHelpers["extends"]({ __typename: "TextWithEntities" }, a)
      );
    }
    function j(a, b) {
      var d = a.ranges == null ? [] : a.ranges.filter(Boolean);
      return {
        aggregated_ranges: [],
        color_ranges: [],
        delight_ranges: [],
        image_ranges: [],
        inline_style_ranges: [],
        ranges: d
          .map(function (a) {
            var d = b[a.entity.id];
            if (d == null) return null;
            var e;
            if (d.__UFI__ === !0) (e = d.type), (d = d.uri);
            else {
              throw new (c("recoverableViolation"))(
                "CometUFIComposerEntity expected, got DraftEntityInstance instead.",
                "ufi2"
              );
              var f;
              d.getData();
              e = f.type;
              uri = d.uri;
            }
            return e == null
              ? null
              : {
                  entity: {
                    __isActor: !1,
                    __isEntity: !0,
                    __isNode: !0,
                    __isWebLinkable: !0,
                    __typename: e,
                    id: a.entity.id,
                    mobileUrl: d,
                    profile_url: d,
                    url: d,
                    web_link: null,
                  },
                  entity_is_weak_reference: !1,
                  length: a.length,
                  offset: a.offset,
                };
          })
          .filter(Boolean),
        text: a.text,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getCometUFICommentRenderableBodyFromCommentMessage",
  ["recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (a == null) return a;
      var d = a.ranges == null ? [] : a.ranges.filter(Boolean);
      return {
        __typename: "TextWithEntities",
        aggregated_ranges: [],
        color_ranges: [],
        delight_ranges: [],
        image_ranges: [],
        inline_style_ranges: [],
        ranges: d
          .map(function (a) {
            var d = b[a.entity.id];
            if (d) {
              var e, f;
              if (d.__UFI__ === !0) (e = d.type), (f = d.uri), (d = d.isWeak);
              else {
                throw new (c("recoverableViolation"))(
                  "CometUFIComposerEntity expected, got DraftEntityInstance instead.",
                  "ufi2"
                );
                var g;
                d.getData();
                e = g.type;
                f = d.uri;
                isWeak = d.isWeak;
              }
              return {
                entity: babelHelpers["extends"]({}, a.entity, {
                  __typename:
                    e == null
                      ? "Actor"
                      : e
                          .replace(/([A-Z])/g, " $1")
                          .replace(/(\s+\w)/g, function (a, b) {
                            return b.toUpperCase();
                          })
                          .replace(/^./, function (a) {
                            return a.toUpperCase();
                          }),
                  mobileUrl: f,
                  profile_url: f,
                  url: f,
                  web_link: null,
                }),
                entity_is_weak_reference: !!d,
                length: a.length,
                offset: a.offset,
              };
            }
            return null;
          })
          .filter(Boolean),
        text: a.text,
        translation_type: null,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFIOptimisticCommentResponse",
  [
    "getBodyRendererFromCommentMessage",
    "getCometUFICommentRenderableBodyFromCommentMessage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.createdTime,
        d = a.entitiesByID,
        e = a.id,
        f = a.optimisticAction,
        g = a.shouldDisableReactionsOnOptimisticComment,
        h = a.textWithEntities;
      a = a.timestampInVideo;
      return {
        attached_story: null,
        attachments: [],
        author: null,
        author_badge_renderers: [],
        author_user_signals_renderer: null,
        ban_action: null,
        body: { ranges: [], text: h == null ? void 0 : h.text },
        body_renderer: c("getBodyRendererFromCommentMessage")(h, d),
        can_see_constituent_badge_upsell: null,
        can_show_multiple_identity_badges: !1,
        can_viewer_disable_preview: null,
        can_viewer_see_subsribe_button: null,
        client_id: null,
        comment_menu_tooltip: null,
        comment_parent: null,
        comment_privacy_value: null,
        comment_upper_badge_renderer: null,
        created_time: b,
        earned_identity_badges_web: [],
        edit_history: null,
        elevated_comment_data: null,
        feedback: {
          associated_video: null,
          can_viewer_comment: null,
          can_viewer_react: g !== !0,
          comment_composer_placeholder: null,
          id: null,
          page_private_reply: null,
          reactors: null,
          should_show_top_reactions: null,
          supported_reactions: [],
          top_reactions: null,
          viewer_actor: null,
          viewer_feedback_reaction_info: null,
        },
        group_comment_info: null,
        has_constituent_badge: null,
        id: e,
        identity_badges_web: [],
        if_viewer_can_award: null,
        if_viewer_can_learn_more_about_pending_comment: null,
        if_viewer_can_share: null,
        if_viewer_can_upvote_downvote: null,
        inline_survey_config: null,
        is_ama_question: null,
        is_author_banned_by_content_owner: null,
        is_author_bot: null,
        is_author_non_coworker: null,
        is_author_original_poster: null,
        is_author_weak_reference: null,
        is_declined_by_group_admin_assistant: null,
        is_disabled: !1,
        is_gaming_video_comment: null,
        is_hidden_by_content_owner: null,
        is_markdown_enabled: null,
        is_viewer_comment_poster: null,
        legacy_fbid: null,
        legacy_token: null,
        optimistic_action: f,
        optimistic_error: null,
        optimistic_error_code: null,
        page_admin_actor_info: null,
        parent_feedback: null,
        preferred_body: c("getCometUFICommentRenderableBodyFromCommentMessage")(
          h,
          d
        ),
        private_reply_context: null,
        qa_action_links_comment_renderer: null,
        question_and_answer_type: null,
        should_show_comment_menu: !1,
        spam_display_mode: "none",
        timestamp_in_video: a,
        translatability_for_viewer: null,
        translation_available_for_viewer: null,
        url: null,
        work_ama_answer_status: null,
        work_answered_event_comment_renderer: null,
        work_knowledge_inline_annotation_comment_badge_renderer: null,
        written_while_video_was_live: null,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "displayCommentsConnectionCountUpdater",
  ["FBLogger", "forEachUFI2DisplayCommentsConnection"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.feedbackId,
        d = a.modifier,
        e = a.store,
        f = a.topLevelFeedbackId;
      a = a.totalCommentCountModifier;
      var g = b;
      f != null && f !== "" && (g = f);
      var h = d;
      a != null && a !== 0 && (h = a);
      function j(a) {
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "FEEDBACK_TARGET_ID", g || "UNKNOWN")
          .addMetadata(
            "UFI",
            "RAW_DATA",
            "comment_feedback_id;" +
              (b || "UNKNOWN") +
              ", comments_count_modifier;" +
              h +
              ", conn_count_modifier;" +
              d
          )
          .warn(a);
      }
      a = e.get(b);
      if (a == null) {
        j("could not find feedback record");
        return;
      }
      c("forEachUFI2DisplayCommentsConnection")(e, a, function (a) {
        var b = Math.max(0, Number(a.getValue("count")) + d);
        a.setValue(b, "count");
        a.setValue(b === 0, "is_empty");
      });
      a = e.get(g);
      if (a == null) {
        j("could not find top level feedback record");
        return;
      }
      e = a.getLinkedRecord("top_level_comments");
      if (e == null) {
        j("could not find top level comments");
        return;
      }
      j = e.getValue("total_count");
      j = Math.max(0, Number(j) + h);
      e.setValue(j, "total_count");
      var k = a.getValue("comment_count_reduced");
      Number(k).toString() === k &&
        a.setValue(j.toString(), "comment_count_reduced");
      e.setValue(j === 0, "is_empty");
      f == null && i(e, h);
    }
    function i(a, b) {
      var c = a.getValue("count");
      if (c == null) return;
      c = Math.max(0, Number(c) + b);
      a.setValue(c, "count");
      b = a.getValue("display_count");
      Number(b).toString() === b && a.setValue(c.toString(), "display_count");
    }
    h.decrement = function (a) {
      return h(babelHelpers["extends"]({}, a, { modifier: -1 }));
    };
    h.increment = function (a) {
      return h(babelHelpers["extends"]({}, a, { modifier: 1 }));
    };
    a = h;
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICreateCommentMutation",
  [
    "fbt",
    "ChannelClientID",
    "CometRelay",
    "CometUFICreateCommentMutation.graphql",
    "FBLogger",
    "FeedbackSourceType",
    "JSEnumValueToGraphQLKey",
    "RelayRuntime",
    "ServerTime",
    "SiteData",
    "cometUFIOptimisticCommentResponse",
    "displayCommentsConnectionCountUpdater",
    "forEachUFI2DisplayCommentsConnection",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i !== void 0 ? i : (i = b("CometUFICreateCommentMutation.graphql")),
      k = {};
    function l(a) {
      var b,
        e = a.UFI2CommentsProvider_commentsKey,
        f = a.actorID,
        g = a.clientID,
        i = a.entitiesByID,
        n = a.environment,
        o = a.feedbackSource,
        p = a.feedLocation,
        q = a.focusCommentID,
        r = a.input,
        s = a.onCompleted,
        t = a.onError,
        u = a.topLevelFeedbackId,
        v = a.triggerAccessibilityAlert,
        w = a.updater,
        x = a.useDefaultActor,
        y = a.usedWritingHelpToCompose,
        z = a.viewOption,
        A = (b = a == null ? void 0 : a.retryID) != null ? b : g;
      b = {
        UFI2CommentsProvider_commentsKey: e,
        feedLocation: p,
        feedbackSource: o,
        focusCommentID: q,
        input: babelHelpers["extends"]({}, r, {
          feedback_source: c("JSEnumValueToGraphQLKey")(
            c("FeedbackSourceType"),
            o
          ),
          idempotence_token: A,
          session_id: d("ChannelClientID").getID(),
        }),
        scale: c("SiteData").pr,
        useDefaultActor: x,
      };
      var B = function (a) {
          return function (b) {
            var d = b.getRootField("comment_create");
            if (d) {
              var e = d.getLinkedRecord("feedback_comment_edge");
              if (e) {
                d = b.get(r.feedback_id);
                if (d != null) {
                  z !== "LIVE_STREAMING" &&
                    c("forEachUFI2DisplayCommentsConnection")(
                      b,
                      d,
                      function (a) {
                        c("RelayRuntime").ConnectionHandler.insertEdgeBefore(
                          a,
                          e
                        );
                      }
                    );
                  if (w) {
                    var h = u == null || u === d.getDataID() ? null : b.get(u);
                    w(d, e, h);
                  }
                }
              }
            }
            d = b.get(f);
            if (d == null)
              throw c("unrecoverableViolation")(
                "UFI2CreateCommentMutation: Could not find actor with ID " + f,
                "ufi2"
              );
            h = b.get(A);
            if (h == null)
              throw c("unrecoverableViolation")(
                "CometUFICreateCommentMutation: Could not find comment with ID " +
                  A,
                "ufi2"
              );
            h.setLinkedRecord(d, "author");
            if (a && a.toString) {
              h.setValue(a.toString(), "optimistic_error");
              d = a.code;
              typeof d === "number" && h.setValue(d, "optimistic_error_code");
            } else h.setValue(!0, "is_locally_composed");
            h.setValue(g, "client_id");
            h.setValue(
              r.reply_comment_parent_fbid,
              "reply_comment_parent_fbid"
            );
            d =
              r.reply_comment_parent_fbid != null
                ? b.get(r.reply_comment_parent_fbid)
                : null;
            d = d != null ? d.getValue("depth") : null;
            typeof d === "number" && h.setValue(d + 1, "depth");
            c("displayCommentsConnectionCountUpdater").increment({
              feedbackId: r.feedback_id,
              store: b,
              topLevelFeedbackId: u,
            });
          };
        },
        C = {
          mutation: j,
          optimisticResponse: m(r, A, i),
          optimisticUpdater: B(),
          variables: b,
        },
        D = null,
        E = d("CometRelay").commitMutation(
          n,
          babelHelpers["extends"]({}, C, {
            onCompleted: function (a) {
              s && s(a), v && v(h._("Your comment was submitted"));
            },
            onError: function (b) {
              (k[A] = function (b) {
                if (!k[A]) {
                  c("FBLogger")("ufi2")
                    .addMetadata("UFI", "COMMENT_ID", A)
                    .warn(
                      "Tried to call a create comment mutation retry handle that was already removed."
                    );
                  return;
                }
                E && E.dispose();
                E = null;
                l(
                  babelHelpers["extends"]({}, a, {
                    input: b || a.input,
                    retryID: A,
                  })
                );
                delete k[A];
              }),
                (E = c("RelayRuntime").applyOptimisticMutation(
                  n,
                  babelHelpers["extends"]({}, C, {
                    optimisticResponse: m(r, A, i),
                    optimisticUpdater: B(b),
                  })
                )),
                t && t(b);
            },
            updater: function (a) {
              var b = a.getRootField("comment_create");
              if (b == null)
                throw c("unrecoverableViolation")(
                  "could not find comment create payload",
                  "ufi2"
                );
              var d = b.getLinkedRecord("feedback_comment_edge");
              if (d == null)
                throw c("unrecoverableViolation")(
                  "could not find comment edge",
                  "ufi2"
                );
              b = d.getLinkedRecord("node");
              if (b == null)
                throw c("unrecoverableViolation")(
                  "could not find comment node",
                  "ufi2"
                );
              b.setValue(!0, "is_locally_composed");
              b.setValue(g, "client_id");
              b.setValue(y === !0, "used_writing_help_to_compose");
              c("displayCommentsConnectionCountUpdater").increment({
                feedbackId: r.feedback_id,
                store: a,
                topLevelFeedbackId: u,
              });
              b = a.get(r.feedback_id);
              if (b != null) {
                z !== "LIVE_STREAMING" &&
                  c("forEachUFI2DisplayCommentsConnection")(a, b, function (a) {
                    c("RelayRuntime").ConnectionHandler.insertEdgeBefore(a, d);
                  });
                if (w) {
                  a = u == null || u === b.getDataID() ? null : a.get(u);
                  w(b, d, a);
                }
              }
            },
          })
        );
      return {
        dispose: function () {
          D && D.remove(),
            (D = null),
            E && E.dispose(),
            (E = null),
            delete k[A];
        },
      };
    }
    function m(a, b, e) {
      var f = a.living_room_content_item_id;
      e = c("cometUFIOptimisticCommentResponse")({
        createdTime: Math.round(d("ServerTime").getMillis() / 1e3),
        entitiesByID: e,
        id: b,
        optimisticAction: "ADD",
        shouldDisableReactionsOnOptimisticComment:
          a.is_inline_vote_enabled_for_qna,
        textWithEntities: a.message,
        timestampInVideo: a.vod_video_timestamp,
      });
      return {
        comment_create: {
          detection_analytics_enabled: null,
          feedback: {
            are_live_video_comments_disabled: null,
            associated_group: null,
            comments_disabled_notice_renderer: null,
            display_comments_count: null,
            have_comments_been_disabled: null,
            id: null,
            is_viewer_muted: null,
          },
          feedback_comment_edge: {
            cursor: null,
            node: babelHelpers["extends"]({}, e, {
              if_declined_by_group_admin_assistant: null,
              if_viewer_can_see_member_page_tooltip: null,
              feedback: babelHelpers["extends"]({}, e.feedback, {
                ask_me_anything_feedback_metadata: null,
                associated_group: null,
                can_viewer_pin_live_comments: !1,
                comment_count: null,
                display_comments: null,
                is_hide_transparency_enabled_for_actor: null,
                is_vc_acting_as_page_or_profile_plus: null,
                latest_pinned_comment_event: null,
                subscription_target_id: null,
                threading_config: null,
                toplevel_comment_count: null,
                work_answer_event_action_links_comment_renderer: null,
              }),
              living_room_content_item: f != null ? { id: f } : null,
              swipable_media: [],
              threading_depth: null,
            }),
          },
        },
      };
    }
    function a(a) {
      var b = k[a];
      if (!b) {
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "COMMENT_ID", a)
          .warn("No comment create mutation retry handler found.");
        return null;
      }
      return b;
    }
    g.commit = l;
    g.getRetryFn = a;
  },
  98
);
__d(
  "CometUFICommentErrorFooter.react",
  [
    "errorCode",
    "fbt",
    "CometLink.react",
    "CometRelay",
    "CometUFICommentErrorFooter_comment.graphql",
    "CometUFICreateCommentMutation",
    "FBLogger",
    "UFI2CommentActionLinks.react",
    "gkx",
    "ifRequired",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function l(a) {
      return a === 1446013 || (a === 1446011 && c("gkx")("3137")) ? !1 : !0;
    }
    function a(a) {
      var e = a.comment;
      a = a.onEdit;
      e = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometUFICommentErrorFooter_comment.graphql")),
        e
      );
      var f = e.id;
      if (f == null) {
        c("recoverableViolation")(
          "CometUFICommentErrorFooter tried to render without a comment ID",
          "ufi2"
        );
        return null;
      }
      var g = i._("Unable to post comment."),
        h = null;
      switch (e.optimistic_action) {
        case "ADD":
          h = d("CometUFICreateCommentMutation").getRetryFn(f);
          break;
        case "EDIT":
          g = i._("Unable to edit comment.");
          c("ifRequired")(
            "CometUFIEditCommentMutation",
            function (a) {
              h = a.getRetryFn(f);
            },
            function () {
              c("FBLogger")("ufi2")
                .addMetadata("UFI", "COMMENT_ID", f || "UNKNOWN")
                .mustfix("Edit mutation not present on edit error");
            }
          );
          break;
        case "DELETE":
          g = i._("Unable to delete comment.");
          break;
        default:
          (g = i._("Something went wrong.")),
            c("FBLogger")("ufi2")
              .addMetadata("UFI", "COMMENT_ID", f || "UNKNOWN")
              .warn(
                "CometUFICommentErrorFooter no specified behavior for action `%s`.",
                e.optimistic_action
              );
      }
      h ||
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "COMMENT_ID", f || "UNKNOWN")
          .warn(
            "No mutation retry handler for action `%s`.",
            e.optimistic_action
          );
      var m = h != null,
        n = e.optimistic_action === "ADD" && m && c("gkx")("3137");
      return k.jsxs("div", {
        className: "btwxx1t3 j83agx80 m9osqain",
        "data-testid": void 0,
        children: [
          k.jsx(d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem, {
            children:
              m && l(e.optimistic_error_code)
                ? i._("{errorMessage} {retryLink}", [
                    i._param("errorMessage", g),
                    i._param(
                      "retryLink",
                      k.jsx(c("CometLink.react"), {
                        color: "highlight",
                        onClick: function () {
                          h == null ? void 0 : h();
                        },
                        children: i._("Try again"),
                      })
                    ),
                  ])
                : g,
          }),
          n &&
            k.jsx(d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem, {
              children: k.jsx(c("CometLink.react"), {
                color: "highlight",
                onClick: a,
                testid: void 0,
                children: i._("Edit"),
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
  "CometUFICommentInlineFollowCTA.react",
  [
    "fbt",
    "CometFeedUnitQueryVariablesContext",
    "CometMiddot.react",
    "CometPressable.react",
    "CometRelay",
    "CometUFICommentInlineFollowCTA_comment.graphql",
    "CometUserFollowMutation",
    "CometUserUnfollowMutation",
    "TetraText.react",
    "react",
    "requireDeferred",
    "useNullthrowsViolation",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = e.useState,
      n = c("requireDeferred")("InlineFollowCtaEventFalcoEvent").__setRef(
        "CometUFICommentInlineFollowCTA.react"
      ),
      o = "following_clicked",
      p = "unfollowing_clicked",
      q = "follow_cta_impression";
    function a(a) {
      var e;
      a = a.comment$key;
      var f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometUFICommentInlineFollowCTA_comment.graphql")),
          a
        ),
        g =
          (f == null
            ? void 0
            : (a = f.author) == null
            ? void 0
            : a.subscribe_status) === "IS_SUBSCRIBED",
        r = c("useNullthrowsViolation")(
          f == null ? void 0 : (a = f.author) == null ? void 0 : a.id
        ),
        s = d("CometRelay").useRelayEnvironment();
      a = m(!1);
      var t = a[0],
        u = a[1],
        v =
          (a =
            (a = l(c("CometFeedUnitQueryVariablesContext"))) == null
              ? void 0
              : a.feedLocation) != null
            ? a
            : "",
        w = k(
          function (a) {
            n.onReady(function (b) {
              b.log(function () {
                var b;
                return {
                  comment_author_id: r,
                  comment_id: (b = f.id) != null ? b : "",
                  comment_surface: v,
                  event: a,
                };
              });
            });
          },
          [r, f.id, v]
        );
      a = k(
        function () {
          var a = {
            actionRenderLocation: "WWW_COMET_HOVERCARD",
            onError: function () {
              u(!1);
            },
            onSuccess: function () {
              u(!1);
            },
            subscribeLocation:
              v === "NEWSFEED" ? "INLINE_COMMENT_HEADER" : "COMMENT_HEADER",
            userID: r,
          };
          u(!0);
          g
            ? (d("CometUserUnfollowMutation").commit(s, a), w(p))
            : (d("CometUserFollowMutation").commit(s, a), w(o));
        },
        [g, s, u, r, w, v]
      );
      var x = k(
        function () {
          w(q);
        },
        [w]
      );
      x = c("useVisibilityObserver")({ onVisible: x });
      if (
        (f == null
          ? void 0
          : (e = f.author) == null
          ? void 0
          : e.subscribe_status) !== "CAN_SUBSCRIBE" &&
        (f == null
          ? void 0
          : (e = f.author) == null
          ? void 0
          : e.subscribe_status) !== "IS_SUBSCRIBED"
      )
        return null;
      e = g
        ? j.jsx(c("TetraText.react"), {
            color: "secondary",
            type: "bodyLink4",
            children: h._("Following"),
          })
        : j.jsx(c("TetraText.react"), {
            color: "highlight",
            type: "bodyLink4",
            children: h._("Follow"),
          });
      return j.jsxs("span", {
        ref: x,
        children: [
          j.jsx(c("CometMiddot.react"), { className: "m9osqain" }),
          j.jsx(c("CometPressable.react"), {
            disabled: t,
            onPress: a,
            children: e,
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
  "CometUFIHideCommentMutation",
  ["CometRelay", "CometUFIHideCommentMutation.graphql", "FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUFIHideCommentMutation.graphql"));
    function a(a, b) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: b.onCompleted,
        onError: b.onError,
        optimisticUpdater: function (a) {
          a = a.get(b.commentId);
          if (a == null) {
            c("FBLogger")("ufi2").mustfix(
              "When trying to hide a comment, the comment could not be found."
            );
            return;
          }
          a.setValue(!1, "is_hidden_by_content_owner");
          a.setValue(!0, "is_hidden_by_viewer");
          a.setValue("spam", "spam_display_mode");
          var d = { feed_location: b.feedLocation },
            e = a.getLinkedRecords("comment_menu_items", d);
          e &&
            e.some(function (a) {
              return (
                (a == null ? void 0 : a.getValue("__typename")) ===
                "CommentMenuItemHide"
              );
            }) &&
            a.setLinkedRecords(
              e.filter(function (a) {
                return (
                  (a == null ? void 0 : a.getValue("__typename")) !==
                  "CommentMenuItemHide"
                );
              }),
              "comment_menu_items",
              d
            );
        },
        variables: {
          feedLocation: b.feedLocation,
          input: {
            comment_id: b.commentId,
            feedback_source: b.feedbackSource,
            site: "comet",
          },
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometUFIUnhideCommentMutation",
  ["CometRelay", "CometUFIUnhideCommentMutation.graphql", "FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUFIUnhideCommentMutation.graphql"));
    function a(a, b) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: b.onCompleted,
        optimisticUpdater: function (a) {
          a = a.get(b.commentId);
          if (a == null) {
            c("FBLogger")("ufi2").mustfix(
              "When trying to unhide a comment, the comment could not be found."
            );
            return;
          }
          a.setValue(!1, "is_hidden_by_content_owner");
          a.setValue(!1, "is_hidden_by_viewer");
          a.setValue("none", "spam_display_mode");
        },
        variables: {
          feedLocation: b.feedLocation,
          input: {
            comment_id: b.commentId,
            feedback_source: b.feedbackSource,
            site: "comet",
          },
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometUFICommentSeeDeclinedCommentFeedbackDialog.entrypoint",
  [
    "CometUFICommentSeeDeclinedCommentFeedbackDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometUFICommentSeeDeclinedCommentFeedbackDialog.react"
    ).__setRef("CometUFICommentSeeDeclinedCommentFeedbackDialog.entrypoint");
    b = {
      getPreloadProps: function (a) {
        a = a.commentID;
        return {
          queries: {
            queryReference: {
              parameters: c(
                "CometUFICommentSeeDeclinedCommentFeedbackDialogQuery$Parameters"
              ),
              variables: { commentID: a, scale: d("WebPixelRatio").get() },
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
  "CometUFICommentSeeDeclinedCommentFeedbackActionLink.react",
  [
    "fbt",
    "CometLink.react",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "CometUFICommentSeeDeclinedCommentFeedbackActionLink_comment.graphql",
    "CometUFICommentSeeDeclinedCommentFeedbackDialog.entrypoint",
    "UFI2CommentActionLinks.react",
    "react",
    "recoverableViolation",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.comment;
      a = a.xstyle;
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometUFICommentSeeDeclinedCommentFeedbackActionLink_comment.graphql"
            )),
        e
      );
      var f = c("useCometEntryPointDialog")(
          c("CometUFICommentSeeDeclinedCommentFeedbackDialog.entrypoint"),
          { commentID: e.id }
        ),
        g = f[0];
      e =
        (f = e.group_comment_info) == null ? void 0 : f.declined_feedback_text;
      return e == null
        ? c("recoverableViolation")("Feedback text missing", "groups_comet")
        : j.jsxs(j.Fragment, {
            children: [
              j.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                { children: h._("Declined") }
              ),
              j.jsx(
                d("UFI2CommentActionLinks.react").UFI2CommentActionLinkItem,
                {
                  children: j.jsx(c("CometLink.react"), {
                    href: "#",
                    onClick: function () {
                      return g({});
                    },
                    role: "button",
                    xstyle: a,
                    children: j.jsx(c("CometTextWithEntitiesRelay.react"), {
                      textWithEntities: e,
                    }),
                  }),
                }
              ),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICreatorInfo.react",
  [
    "fbt",
    "ix",
    "CometTooltip.react",
    "CometUFIProfileLink.react",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b,
        e = g();
      switch (a.labelType) {
        case "commented":
          b = h._("Commented on by {creator}", [h._param("creator", e)]);
          break;
        case "edited_comment":
          b = h._("Edited by {creator}", [h._param("creator", e)]);
          break;
        case "sent_message":
          b = h._("Sent by {creator}", [h._param("creator", e)]);
          break;
        case "page_admin_note":
          b = h._("Noted by {creator}", [h._param("creator", e)]);
          break;
        default:
          return j.jsx("span", {});
      }
      e = j.jsxs(j.Fragment, {
        children: [
          b,
          j.jsx("span", {
            className: "ormqv51v l9j0dhe7 kkf49tns",
            children: j.jsx(c("CometTooltip.react"), {
              tooltip: p(),
              children: j.jsx(c("TetraIcon.react"), {
                color: "tertiary",
                icon: d("fbicon")._(i("479175"), 12),
              }),
            }),
          }),
        ],
      });
      function g() {
        switch (a.creatorType) {
          case "application":
          case "gray_account":
          case "indirect_admin":
            return j.jsx(c("CometTooltip.react"), {
              tooltip: k(),
              children: j.jsx("b", { children: a.creatorName }),
            });
          case "business_admin":
            return j.jsx(c("CometUFIProfileLink.react"), {
              kind: "link",
              uid: a.creatorID,
              children: a.creatorName,
            });
          case "direct_admin":
            return l();
          case "former_admin":
            return j.jsxs(j.Fragment, {
              children: [
                j.jsx("span", {
                  className: "ormqv51v l9j0dhe7 cgat1ltu",
                  children: j.jsx(c("TetraIcon.react"), {
                    color: "tertiary",
                    icon: d("fbicon")._(i("648667"), 12),
                  }),
                }),
                l(),
              ],
            });
          default:
            return j.jsx("span", { children: a.creatorName });
        }
      }
      g.displayName = g.name + " [from " + f.id + "]";
      function k() {
        switch (a.creatorType) {
          case "application":
            return m();
          case "gray_account":
            return o();
          case "indirect_admin":
            return n();
        }
        return null;
      }
      function l() {
        return a.profileURI == null || a.profileURI === ""
          ? j.jsx("span", { children: a.creatorName })
          : j.jsx(c("CometUFIProfileLink.react"), {
              href: a.profileURI,
              kind: "link",
              uid: a.creatorID,
              children: a.creatorName,
            });
      }
      l.displayName = l.name + " [from " + f.id + "]";
      function m() {
        switch (a.labelType) {
          case "commented":
            return h._(
              "This was commented on by someone using {application}.",
              [h._param("application", a.creatorName)]
            );
          case "edited_comment":
            return h._("This was edited by someone using {application}.", [
              h._param("application", a.creatorName),
            ]);
          case "sent_message":
            return h._("This was sent by someone using {application}.", [
              h._param("application", a.creatorName),
            ]);
          case "page_admin_note":
            return h._("This was noted by someone using {application}.", [
              h._param("application", a.creatorName),
            ]);
        }
        return null;
      }
      function n() {
        switch (a.labelType) {
          case "commented":
            return h._("This was commented on by someone from {page}.", [
              h._param("page", a.creatorName),
            ]);
          case "edited_comment":
            return h._("This was edited by someone from {page}.", [
              h._param("page", a.creatorName),
            ]);
          case "sent_message":
            return h._("This was sent by someone from {page}.", [
              h._param("page", a.creatorName),
            ]);
          case "page_admin_note":
            return h._("This was noted by someone from {page}.", [
              h._param("page", a.creatorName),
            ]);
        }
        return null;
      }
      function o() {
        switch (a.labelType) {
          case "commented":
            return h._(
              "This was commented on by someone who doesn't have a personal Facebook account."
            );
          case "edited_comment":
            return h._(
              "This was edited by someone who doesn't have a personal Facebook account."
            );
          case "sent_message":
            return h._(
              "This was sent by someone who doesn't have a personal Facebook account."
            );
          case "page_admin_note":
            return h._(
              "This was noted by someone who doesn't have a personal Facebook account."
            );
        }
        return null;
      }
      function p() {
        switch (a.labelType) {
          case "commented":
            return h._(
              "Only people who manage this Page can see who posted a comment."
            );
          case "edited_comment":
            return h._(
              "Only people who manage this Page can see who edited a comment"
            );
          case "sent_message":
            return h._(
              "Only people who manage this Page can see who sent a message."
            );
          case "page_admin_note":
            return h._(
              "Only people who manage this Page can see who created a note"
            );
        }
        return null;
      }
      return e;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIPinCommentMutation",
  ["CometRelay", "CometUFIPinCommentMutation.graphql", "Promise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUFIPinCommentMutation.graphql"));
    function j(a, b, c) {
      c = b.get(c);
      if (c == null) return;
      b = b.get(a);
      if (b == null) return;
      a = c.getOrCreateLinkedRecord(
        "latest_pinned_comment_event",
        "BroadcastPinnedCommentEvent"
      );
      a.setLinkedRecord(b, "pinned_comment");
    }
    function a(a, c) {
      return new (b("Promise"))(function (b, e) {
        d("CometRelay").commitMutation(a, {
          mutation: i,
          onCompleted: function (a, c) {
            if (c != null) {
              e(c);
              return;
            }
            b(a);
          },
          onError: e,
          optimisticUpdater: function (a) {
            return j(c.commentID, a, c.feedbackID);
          },
          updater: function (a) {
            return j(c.commentID, a, c.feedbackID);
          },
          variables: {
            input: {
              comment_id: c.commentID,
              video_id: c.videoID,
              video_time_offset: 0,
            },
          },
        });
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometUFIUnpinCommentMutation",
  ["CometRelay", "CometUFIUnpinCommentMutation.graphql", "Promise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUFIUnpinCommentMutation.graphql"));
    function j(a, b) {
      a = a.get(b);
      if (a == null) return;
      a.setValue(null, "latest_pinned_comment_event");
    }
    function a(a, c) {
      return new (b("Promise"))(function (b, e) {
        var f;
        d("CometRelay").commitMutation(a, {
          mutation: i,
          onCompleted: function (a, c) {
            if (c != null) {
              e(c);
              return;
            }
            b(a);
          },
          onError: e,
          optimisticUpdater: function (a) {
            return j(a, c.feedbackID);
          },
          updater: function (a) {
            return j(a, c.feedbackID);
          },
          variables: {
            input: {
              video_id: c.videoID,
              video_time_offset:
                (f = c == null ? void 0 : c.video_time_offset) != null ? f : 0,
            },
          },
        });
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "nodeIsInConnection",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      a = a.getLinkedRecords("edges");
      if (a == null) {
        c && c("Connection contains no edges field.");
        return !1;
      }
      var d = !1;
      b = b.getDataID();
      if (b == null) {
        c && c("Search node has no ID.");
        return !1;
      }
      for (
        var e = a,
          f = Array.isArray(e),
          g = 0,
          e = f
            ? e
            : e[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= e.length) break;
          h = e[g++];
        } else {
          g = e.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        var i = h && h.getLinkedRecord("node");
        if (i == null) {
          c && c("Edge at index " + a.indexOf(h) + " has no node.");
          continue;
        }
        if (i.getDataID() === b) {
          d = !0;
          break;
        }
      }
      return d;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometUFICreateCommentSubscription",
  [
    "CometRelay",
    "CometUFICreateCommentSubscription.graphql",
    "FBLogger",
    "WebPixelRatio",
    "forEachUFI2DisplayCommentsConnection",
    "nodeIsInConnection",
    "qex",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0 ? h : (h = b("CometUFICreateCommentSubscription.graphql"));
    function a(a) {
      var b = a.commentsKey,
        e = a.environment,
        f = a.feedbackSource,
        g = a.feedLocation,
        h = a.focusCommentID,
        j = a.isComet,
        k = a.onCompleted,
        l = a.onNext,
        m = a.replyCommentOrdering,
        n = a.topLevelFeedbackTargetID;
      a = a.useDefaultActor;
      function o(a) {
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "FEEDBACK_TARGET_ID", n || "UNKNOWN")
          .warn(a);
      }
      return d("CometRelay").requestSubscription(e, {
        onCompleted: k,
        onNext: l,
        subscription: i,
        updater: function (a) {
          var b = a.getRootField("comment_create_subscribe");
          if (b == null) {
            o("could not find comment create subscription payload");
            return;
          }
          var e = b.getLinkedRecord("feedback");
          if (e == null) {
            o("could not find feedback target in payload");
            return;
          }
          var f = e.getDataID();
          if (f == null) {
            o("could not get feedback target id");
            return;
          }
          f = a.get(f);
          if (f == null) {
            o("could not find feedback record");
            return;
          }
          var g = b.getLinkedRecord("feedback_comment_edge");
          if (g == null) {
            o("could not find comment edge");
            return;
          }
          var h = g.getLinkedRecord("node");
          if (h == null) {
            o("could not find comment node");
            return;
          }
          var i = [f];
          b = h.getValue("depth");
          if (
            (m === "SUB_REPLIES" ||
              m === "RANKED_SUB_REPLIES" ||
              m === "CHRONO_SUB_REPLIES") &&
            c("qex")._("209") === !0
          ) {
            if (typeof b === "number" && b > 1) {
              f = h.getLinkedRecord("reply_parent_comment");
              b = f != null ? f.getLinkedRecord("feedback") : null;
              if (b != null) {
                i.unshift(b);
                f = b.getLinkedRecord(
                  'display_comments(comment_order:"SUB_REPLIES",top_level_comment_order:"TOPLEVEL")'
                );
                if (f != null) {
                  b = f.getValue("count");
                  f.setValue(typeof b === "number" ? b + 1 : 1, "count");
                }
              }
            }
            f = h.getLinkedRecord("feedback");
            m != null &&
              f != null &&
              c("forEachUFI2DisplayCommentsConnection")(a, f, function (a) {
                a.setValue(m, "comment_order"),
                  a.setValue(m, "reply_comment_order");
              });
          }
          i.forEach(function (b, f) {
            c("forEachUFI2DisplayCommentsConnection")(a, b, function (b) {
              if (c("nodeIsInConnection")(b, h, o)) return;
              var j = b.getValue("before_count") || 0;
              if (typeof j !== "number") {
                o("expected `before_count` to be a number");
                return;
              }
              j = d("relay-runtime").ConnectionHandler.createEdge(
                a,
                b,
                h,
                g.getType()
              );
              if (j == null) {
                o("could not build comment edge");
                return;
              }
              d("relay-runtime").ConnectionHandler.insertEdgeBefore(b, j);
              j = b.getValue("count") || 0;
              if (typeof j !== "number") {
                o("expected `count` to be a number");
                return;
              }
              if (i.length > 1 && f === 0) b.setValue(j + 1, "count");
              else {
                j = e.getLinkedRecord("display_comments");
                if (j == null) {
                  o("could not get display_comments from payload");
                  return;
                }
                j = j.getValue("count");
                if (typeof j !== "number") {
                  o("could not get display_comments count from payload");
                  return;
                }
                b.setValue(j, "count");
              }
            });
          });
        },
        variables: {
          UFI2CommentsProvider_commentsKey: b,
          feedLocation: g,
          feedbackSource: f,
          focusCommentID: h,
          input: { top_level_feedback_id: n },
          isComet: j,
          scale: d("WebPixelRatio").get(),
          useDefaultActor: a,
        },
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "CometUFIPegasusCreateCommentSubscription",
  [
    "CometRelay",
    "CometUFIPegasusCreateCommentSubscription.graphql",
    "FBLogger",
    "WebPixelRatio",
    "forEachUFI2DisplayCommentsConnection",
    "nodeIsInConnection",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometUFIPegasusCreateCommentSubscription.graphql"));
    function a(a) {
      var b = a.commentsKey,
        e = a.environment,
        f = a.feedbackSource,
        g = a.feedLocation,
        h = a.focusCommentID,
        j = a.isComet,
        k = a.onCompleted,
        l = a.onNext,
        m = a.topLevelFeedbackTargetID;
      a = a.useDefaultActor;
      function n(a) {
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "FEEDBACK_TARGET_ID", m || "UNKNOWN")
          .warn(a);
      }
      return d("CometRelay").requestSubscription(e, {
        onCompleted: k,
        onNext: l,
        subscription: i,
        updater: function (a) {
          var b = a.getRootField("pegasus_comment_create_subscribe");
          if (b == null) {
            n("could not find comment create subscription payload");
            return;
          }
          var e = b.getLinkedRecord("feedback");
          if (e == null) {
            n("could not find feedback target in payload");
            return;
          }
          var f = e.getDataID();
          if (f == null) {
            n("could not get feedback target id");
            return;
          }
          f = a.get(f);
          if (f == null) {
            n("could not find feedback record");
            return;
          }
          c("forEachUFI2DisplayCommentsConnection")(a, f, function (f) {
            var g = b.getLinkedRecord("feedback_comment_edge");
            if (g == null) {
              n("could not find comment edge");
              return;
            }
            var h = g.getLinkedRecord("node");
            if (h == null) {
              n("could not find comment node");
              return;
            }
            if (c("nodeIsInConnection")(f, h, n)) return;
            var i = f.getValue("before_count") || 0;
            if (typeof i !== "number") {
              n("expected `before_count` to be a number");
              return;
            }
            i = d("relay-runtime").ConnectionHandler.createEdge(
              a,
              f,
              h,
              g.getType()
            );
            if (i == null) {
              n("could not build comment edge");
              return;
            }
            d("relay-runtime").ConnectionHandler.insertEdgeBefore(f, i);
            h = e.getLinkedRecord("display_comments");
            if (h == null) {
              n("could not get display_comments from payload");
              return;
            }
            g = h.getValue("count");
            if (g == null) {
              n("could not get display_comments count from payload");
              return;
            }
            f.setValue(g, "count");
          });
        },
        variables: {
          UFI2CommentsProvider_commentsKey: b,
          feedLocation: g,
          feedbackSource: f,
          focusCommentID: h,
          input: { top_level_feedback_id: m },
          isComet: j,
          scale: d("WebPixelRatio").get(),
          useDefaultActor: a,
        },
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "InlineFollowCtaEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1985969");
    c = b("FalcoLoggerInternal").create("inline_follow_cta_event", a);
    e.exports = c;
  },
  null
);
