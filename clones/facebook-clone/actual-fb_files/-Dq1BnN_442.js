if (self.CavalryLogger) {
  CavalryLogger.start_js(["BvgJqAz"]);
}

__d(
  "CometPageLikeCommitMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "isAdminView" },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_fan",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscribe_status",
          storageKey: null,
        },
        e = {
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
          name: "CometPageLikeCommitMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "PageLikeResponsePayload",
              kind: "LinkedField",
              name: "page_like",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [
                    {
                      args: [
                        {
                          kind: "Variable",
                          name: "showAdminActions",
                          variableName: "isAdminView",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "PagesCometHeaderActionsMenuContainer_page",
                    },
                    c,
                    d,
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
          name: "CometPageLikeCommitMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "PageLikeResponsePayload",
              kind: "LinkedField",
              name: "page_like",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "show_admin_actions",
                          variableName: "isAdminView",
                        },
                      ],
                      concreteType: "CometPageHeaderActionRenderer",
                      kind: "LinkedField",
                      name: "comet_page_header_actions",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometPageHeaderActionLikeRenderer",
                                "CometPageHeaderActionFollowRenderer",
                                "CometPageHeaderActionSaveRenderer",
                                "CometPageHeaderActionShareRenderer",
                                "CometPageHeaderActionSuggestEditsRenderer",
                                "CometPageHeaderActionReportRenderer",
                                "CometPageHeaderActionBlockPageRenderer",
                                "CometPageHeaderActionEditPageRenderer",
                                "CometPageHeaderActionLikeAsYourPageRenderer",
                                "CometPageHeaderActionUnlikeAsYourPageRenderer",
                                "CometPageHeaderActionCreateAdRenderer",
                                "CometPageHeaderActionFavouritesRenderer",
                                "CometPageHeaderActionSwitchRegionRenderer",
                                "CometPageHeaderActionPublicViewRenderer",
                                "CometPageHeaderActionInviteFriendsRenderer",
                                "CometPageHeaderActionCreatePageRenderer",
                                "CometPageHeaderActionPlaceClaimRenderer",
                                "CometPageHeaderActionFanSubscriptionSettingsRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "comet_page_header_action_renderer",
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
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionLikeButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionLikeRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionFollowButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionFollowRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionSaveButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionSaveRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionShareButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionShareRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionSuggestEditsButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionSuggestEditsRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionReportButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionReportRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionBlockPageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionBlockPageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionEditPageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionEditPageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionLikeAsYourPageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionLikeAsYourPageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionUnlikeAsYourPageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionUnlikeAsYourPageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionCreateAdButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionCreateAdRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionFavouritesButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionFavouritesRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionSwitchRegionButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionSwitchRegionRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionPublicViewButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionPublicViewRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionInviteFriendsButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionInviteFriendsRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "PagesCometHeaderActionCreatePageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionCreatePageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "PagesCometUnownedHeaderActionClaimPlaceButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionPlaceClaimRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionFanSubscriptionSettingsButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionFanSubscriptionSettingsRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'comet_page_header_action_renderer(supported:["CometPageHeaderActionLikeRenderer","CometPageHeaderActionFollowRenderer","CometPageHeaderActionSaveRenderer","CometPageHeaderActionShareRenderer","CometPageHeaderActionSuggestEditsRenderer","CometPageHeaderActionReportRenderer","CometPageHeaderActionBlockPageRenderer","CometPageHeaderActionEditPageRenderer","CometPageHeaderActionLikeAsYourPageRenderer","CometPageHeaderActionUnlikeAsYourPageRenderer","CometPageHeaderActionCreateAdRenderer","CometPageHeaderActionFavouritesRenderer","CometPageHeaderActionSwitchRegionRenderer","CometPageHeaderActionPublicViewRenderer","CometPageHeaderActionInviteFriendsRenderer","CometPageHeaderActionCreatePageRenderer","CometPageHeaderActionPlaceClaimRenderer","CometPageHeaderActionFanSubscriptionSettingsRenderer"])',
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PageAdminInfo",
                      kind: "LinkedField",
                      name: "admin_info",
                      plural: !1,
                      selections: [
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
                              concreteType: "User",
                              kind: "LinkedField",
                              name: "account_user",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "name",
                                  storageKey: null,
                                },
                                e,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    c,
                    d,
                    e,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5895506560522297",
          metadata: {},
          name: "CometPageLikeCommitMutation",
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
  "CometPageUnlikeCommitMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "isAdminView" },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_fan",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscribe_status",
          storageKey: null,
        },
        e = {
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
          name: "CometPageUnlikeCommitMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "PageUnlikeResponsePayload",
              kind: "LinkedField",
              name: "page_unlike",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [
                    {
                      args: [
                        {
                          kind: "Variable",
                          name: "showAdminActions",
                          variableName: "isAdminView",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "PagesCometHeaderActionsMenuContainer_page",
                    },
                    c,
                    d,
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
          name: "CometPageUnlikeCommitMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "PageUnlikeResponsePayload",
              kind: "LinkedField",
              name: "page_unlike",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "show_admin_actions",
                          variableName: "isAdminView",
                        },
                      ],
                      concreteType: "CometPageHeaderActionRenderer",
                      kind: "LinkedField",
                      name: "comet_page_header_actions",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometPageHeaderActionLikeRenderer",
                                "CometPageHeaderActionFollowRenderer",
                                "CometPageHeaderActionSaveRenderer",
                                "CometPageHeaderActionShareRenderer",
                                "CometPageHeaderActionSuggestEditsRenderer",
                                "CometPageHeaderActionReportRenderer",
                                "CometPageHeaderActionBlockPageRenderer",
                                "CometPageHeaderActionEditPageRenderer",
                                "CometPageHeaderActionLikeAsYourPageRenderer",
                                "CometPageHeaderActionUnlikeAsYourPageRenderer",
                                "CometPageHeaderActionCreateAdRenderer",
                                "CometPageHeaderActionFavouritesRenderer",
                                "CometPageHeaderActionSwitchRegionRenderer",
                                "CometPageHeaderActionPublicViewRenderer",
                                "CometPageHeaderActionInviteFriendsRenderer",
                                "CometPageHeaderActionCreatePageRenderer",
                                "CometPageHeaderActionPlaceClaimRenderer",
                                "CometPageHeaderActionFanSubscriptionSettingsRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "comet_page_header_action_renderer",
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
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionLikeButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionLikeRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionFollowButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionFollowRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionSaveButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionSaveRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionShareButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionShareRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionSuggestEditsButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionSuggestEditsRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionReportButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionReportRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionBlockPageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionBlockPageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionEditPageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionEditPageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionLikeAsYourPageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionLikeAsYourPageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionUnlikeAsYourPageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionUnlikeAsYourPageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionCreateAdButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionCreateAdRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionFavouritesButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionFavouritesRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionSwitchRegionButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionSwitchRegionRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionPublicViewButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionPublicViewRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionInviteFriendsButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionInviteFriendsRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "PagesCometHeaderActionCreatePageButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionCreatePageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "PagesCometUnownedHeaderActionClaimPlaceButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionPlaceClaimRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "PagesCometHeaderActionsMenuContainer_page",
                                  fragmentName:
                                    "CometPageHeaderActionFanSubscriptionSettingsButton_actionRenderer",
                                  fragmentPropName: "actionRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometPageHeaderActionFanSubscriptionSettingsRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'comet_page_header_action_renderer(supported:["CometPageHeaderActionLikeRenderer","CometPageHeaderActionFollowRenderer","CometPageHeaderActionSaveRenderer","CometPageHeaderActionShareRenderer","CometPageHeaderActionSuggestEditsRenderer","CometPageHeaderActionReportRenderer","CometPageHeaderActionBlockPageRenderer","CometPageHeaderActionEditPageRenderer","CometPageHeaderActionLikeAsYourPageRenderer","CometPageHeaderActionUnlikeAsYourPageRenderer","CometPageHeaderActionCreateAdRenderer","CometPageHeaderActionFavouritesRenderer","CometPageHeaderActionSwitchRegionRenderer","CometPageHeaderActionPublicViewRenderer","CometPageHeaderActionInviteFriendsRenderer","CometPageHeaderActionCreatePageRenderer","CometPageHeaderActionPlaceClaimRenderer","CometPageHeaderActionFanSubscriptionSettingsRenderer"])',
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PageAdminInfo",
                      kind: "LinkedField",
                      name: "admin_info",
                      plural: !1,
                      selections: [
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
                              concreteType: "User",
                              kind: "LinkedField",
                              name: "account_user",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "name",
                                  storageKey: null,
                                },
                                e,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    c,
                    d,
                    e,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4056654231097894",
          metadata: {},
          name: "CometPageUnlikeCommitMutation",
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
  "CometPageLikeButton_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometPageLikeButton_page",
      selections: [
        { args: null, kind: "FragmentSpread", name: "useCometPageLike_page" },
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
          name: "should_show_page_like_warning",
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
  "CometSuspiciousPageLikeWarningDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4030175850430740",
        metadata: {},
        name: "CometSuspiciousPageLikeWarningDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometPageLike_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometPageLike_page",
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
          name: "is_viewer_fan",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_like",
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
  "GraphQLFanFBPageActionOriginValueHackEnum",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ads: "ads",
      collections_feed_megaphone: "collections_feed_megaphone",
      page_suggestions_on_liking: "page_suggestions_on_liking",
      page_suggestions_on_liking_refresh: "page_suggestions_on_liking_refresh",
      mobile_page_suggestions_on_liking: "mobile_page_suggestions_on_liking",
      page_suggestion: "page_suggestion",
      timeline_collection: "timeline_collection",
      timeline_lhc: "timeline_lhc",
      profile_edit: "profile_edit",
      profile_view: "profile_view",
      mobile_spyml: "mobile_spyml",
      registration: "registration",
      external_connect: "external_connect",
      mobile_ads: "mobile_ads",
      events: "events",
      profile_questions: "profile_questions",
      contextual_pyml: "contextual_pyml",
      topic_pyml: "topic_pyml",
      JEWEL_NOTIFICATION: "JEWEL_NOTIFICATION",
      locations_aggregation: "locations_aggregation",
      feed_share_link: "feed_share_link",
      api: "api",
      sms: "sms",
      favorites: "favorites",
      page_browser: "page_browser",
      mobile_page_browser: "mobile_page_browser",
      page_browser_chaining: "page_browser_chaining",
      page_browser_invite: "page_browser_invite",
      mobile_page_browser_invite: "mobile_page_browser_invite",
      reminder_box_invite: "reminder_box_invite",
      reminder_box_recommendation: "reminder_box_recommendation",
      page_creation: "page_creation",
      post_checkin: "post_checkin",
      from_get_offer_dialog: "from_get_offer_dialog",
      from_coupon_email: "from_coupon_email",
      hovercard: "hovercard",
      search: "search",
      web_search: "web_search",
      keyword_search: "keyword_search",
      qr_: "qr_",
      page_nax: "page_nax",
      page_profile: "page_profile",
      page_timeline: "page_timeline",
      page_invite_escape_hatch: "page_invite_escape_hatch",
      page_timeline_liked_pages: "page_timeline_liked_pages",
      page_finch_liked_pages: "page_finch_liked_pages",
      page_finch_related_pages: "page_finch_related_pages",
      page_similar_nearby_place: "page_similar_nearby_place",
      pending_page_invite_netego: "pending_page_invite_netego",
      like_story: "like_story",
      story_with_page: "story_with_page",
      liked_menu: "liked_menu",
      fan_context_story: "fan_context_story",
      social_graph: "social_graph",
      vertex_page: "vertex_page",
      sponsored_story: "sponsored_story",
      newsstand_suggestion: "newsstand_suggestion",
      app_center: "app_center",
      share_story: "share_story",
      share_page_story: "share_page_story",
      page_invite: "page_invite",
      discover_feed: "discover_feed",
      discover_tab: "discover_tab",
      recently_visited: "recently_visited",
      pages_your_friends_like: "pages_your_friends_like",
      saved_dashboard: "saved_dashboard",
      page_permalink: "page_permalink",
      guided_cleanup: "guided_cleanup",
      social_wifi: "social_wifi",
      country_page_like: "country_page_like",
      embed: "embed",
      gametime: "gametime",
      unknown: "unknown",
      unit_test: "unit_test",
      page_post_like_story: "page_post_like_story",
      mbasic_feed_post_like_chaining: "mbasic_feed_post_like_chaining",
      mbasic_feed_share_like_chaining: "mbasic_feed_share_like_chaining",
      mtouch_feed_post_like_chaining: "mtouch_feed_post_like_chaining",
      commerce_checkout_conf: "commerce_checkout_conf",
      feed_awesomizer_pyml: "feed_awesomizer_pyml",
      page_connection_questions: "page_connection_questions",
      awesomizer_discovery: "awesomizer_discovery",
      pages_liked_feed: "pages_liked_feed",
      banhammer: "banhammer",
      og_music: "og_music",
      soundcloud_share: "soundcloud_share",
      twitter_share: "twitter_share",
      internetorg_new_users: "internetorg_new_users",
      share_detected_topic: "share_detected_topic",
      feed_story: "feed_story",
      feed_connections_pyml: "feed_connections_pyml",
      timeline_like_chaining: "timeline_like_chaining",
      marketplace: "marketplace",
      local_serp: "local_serp",
      politicians_feed: "politicians_feed",
      feed_story_search: "feed_story_search",
      feed_pyml: "feed_pyml",
      network_ego: "network_ego",
      all_category_pyml: "all_category_pyml",
      content_based_pyml: "content_based_pyml",
      engagement_pyml: "engagement_pyml",
      games_pyml: "games_pyml",
      links_pyml: "links_pyml",
      music_pyml: "music_pyml",
      videos_pyml: "videos_pyml",
      page_pyml: "page_pyml",
      feed_all_category_pyml: "feed_all_category_pyml",
      rhc_all_category_pyml: "rhc_all_category_pyml",
      side_feed_all_category_pyml: "side_feed_all_category_pyml",
      other_all_category_pyml: "other_all_category_pyml",
      feed_chaining_related_pages: "feed_chaining_related_pages",
      feed_engagement_pyml: "feed_engagement_pyml",
      page_subscriptions: "page_subscriptions",
      feed_chaining: "feed_chaining",
      event_based_pyml: "event_based_pyml",
      comment_chaining: "comment_chaining",
      outbound_click_chaining: "outbound_click_chaining",
      share_chaining: "share_chaining",
      politician_pyml: "politician_pyml",
      politician_page_chaining_pyml: "politician_page_chaining_pyml",
      politician_page_chaining_pivot: "politician_page_chaining_pivot",
      mobile: "mobile",
      wap: "wap",
      silent_link: "silent_link",
      none: "none",
      page_migration: "page_migration",
      parent_child_migration: "parent_child_migration",
      fix_inconsistent_like: "fix_inconsistent_like",
      global_brand_v2_migration: "global_brand_v2_migration",
      global_brand_v2_child_switch: "global_brand_v2_child_switch",
      pagelike_adder_for_reactivated_users:
        "pagelike_adder_for_reactivated_users",
      pagelike_deleter_for_deactivated_users:
        "pagelike_deleter_for_deactivated_users",
      youtube_share_top: "youtube_share_top",
      youtube_share_tail: "youtube_share_tail",
      normal_unfan: "normal_unfan",
      si_system: "si_system",
      underage_fan_removal: "underage_fan_removal",
      deactivated_fan_removal: "deactivated_fan_removal",
      reactivated_fan_add: "reactivated_fan_add",
      launch_point_friend_invites: "launch_point_friend_invites",
      launch_point_liked_pages: "launch_point_liked_pages",
      launch_point_home_pyml: "launch_point_home_pyml",
      launch_point_discover_pyml: "launch_point_discover_pyml",
      launch_point_pending_page_invite: "launch_point_pending_page_invite",
      user_fundraiser_page: "user_fundraiser_page",
      page_suggestion_megaphone: "page_suggestion_megaphone",
      needy_page_suggestion_megaphone: "needy_page_suggestion_megaphone",
      wizard_suggestion: "wizard_suggestion",
      mobile_platform_native_like_button: "mobile_platform_native_like_button",
      end_of_feed: "end_of_feed",
      page_browser_tiled: "page_browser_tiled",
      nearby_dash: "nearby_dash",
      from_coupon: "from_coupon",
      video_flyout: "video_flyout",
      photo_snowlift: "photo_snowlift",
      finch_page_like_toast: "finch_page_like_toast",
      page_invite_escape_hatch_finch: "page_invite_escape_hatch_finch",
      ticker: "ticker",
      like_place: "like_place",
      external_page_like: "external_page_like",
      unconnected_story: "unconnected_story",
      pyml_story: "pyml_story",
      subscribe_story: "subscribe_story",
      profile_connect: "profile_connect",
      gifts_commerce_details_page: "gifts_commerce_details_page",
      contact_card: "contact_card",
      email: "email",
      global_brand_v2_unlinked_child_fan_restoration:
        "global_brand_v2_unlinked_child_fan_restoration",
      deactivated_fan_assoc_deleter: "deactivated_fan_assoc_deleter",
      report_afro: "report_afro",
      spam_account_removal: "spam_account_removal",
      welcome_dash: "welcome_dash",
      organic_pagepost_following_button: "organic_pagepost_following_button",
      retail_new_users: "retail_new_users",
      audience_alert: "audience_alert",
      counter_hate_speech_hub: "counter_hate_speech_hub",
      mobile_sponsored_page_you_may_like: "mobile_sponsored_page_you_may_like",
      recommended_pages: "recommended_pages",
      timeline: "timeline",
      nearby_search: "nearby_search",
      source_recommendation: "source_recommendation",
      invitations: "invitations",
      others: "others",
      medley: "medley",
      mobile_page_suggestion_megaphone: "mobile_page_suggestion_megaphone",
      PSYM: "PSYM",
      instant_articles: "instant_articles",
      local_news: "local_news",
      live_video: "live_video",
      feed_page_attachment: "feed_page_attachment",
      page_liked_by_teens: "page_liked_by_teens",
      feed_chaining_contextual_recommendations:
        "feed_chaining_contextual_recommendations",
      page_entity_lockup: "page_entity_lockup",
      jp_dap_pymf: "jp_dap_pymf",
      page_qr_code: "page_qr_code",
      japan_dap_interest_picker: "japan_dap_interest_picker",
      page_launchpad: "page_launchpad",
      instant_games_in_game_menu: "instant_games_in_game_menu",
      page_profile_like_as_page: "page_profile_like_as_page",
      page_surface_chevron_like_as_page: "page_surface_chevron_like_as_page",
      newsfeed_like_as_page: "newsfeed_like_as_page",
      serp_like_as_page: "serp_like_as_page",
      local_business_discovery: "local_business_discovery",
      watch_logged_out_msite: "watch_logged_out_msite",
      page_fan_upsell_bottomsheet: "page_fan_upsell_bottomsheet",
      pending_page_invite_upsell: "pending_page_invite_upsell",
      page_surface_iab_bar: "page_surface_iab_bar",
      page_admin_zero_fan_upsell: "page_admin_zero_fan_upsell",
      community_explore: "community_explore",
    });
    f["default"] = a;
  },
  66
);
__d(
  "CometPageLikeCommitMutation",
  [
    "CometPageLikeCommitMutation.graphql",
    "CometRelay",
    "GraphQLFanFBPageActionOriginValueHackEnum",
    "getJSEnumSafe",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometPageLikeCommitMutation.graphql"));
    function a(a, b, e, f, g, h) {
      e = c("getJSEnumSafe")(c("GraphQLFanFBPageActionOriginValueHackEnum"), e);
      d("CometRelay").commitMutation(a, {
        mutation: i,
        optimisticResponse: {
          page_like: {
            page: {
              id: b,
              is_viewer_fan: !0,
              subscribe_status: "IS_SUBSCRIBED",
            },
          },
        },
        variables: {
          input: {
            is_tracking_encrypted: g,
            page_id: b,
            source: e,
            tracking: f,
          },
          isAdminView: h === !0,
        },
      });
    }
    g.pageLikeCommitMutationAction = a;
  },
  98
);
__d(
  "CometPageUnlikeCommitMutation",
  ["CometPageUnlikeCommitMutation.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometPageUnlikeCommitMutation.graphql"));
    function a(a, b, c, e, f) {
      d("CometRelay").commitMutation(a, {
        mutation: i,
        optimisticResponse: {
          page_unlike: {
            page: {
              id: b,
              is_viewer_fan: !1,
              subscribe_status: "CAN_SUBSCRIBE",
            },
          },
        },
        variables: {
          input: { is_tracking_encrypted: e, page_id: b, tracking: c },
          isAdminView: f === !0,
        },
      });
    }
    g.pageUnlikeCommitMutationAction = a;
  },
  98
);
__d(
  "CometSuspiciousPageLikeWarningDialog.entrypoint",
  [
    "CometSuspiciousPageLikeWarningDialogQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          extraProps: a,
          queries: {
            CometSuspiciousPageLikeWarningDialogQueryReference: {
              parameters: c(
                "CometSuspiciousPageLikeWarningDialogQuery$Parameters"
              ),
              variables: { entityID: a.entityID },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometSuspiciousPageLikeWarningDialog.react"
      ).__setRef("CometSuspiciousPageLikeWarningDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModulePageLikeQPLEvent",
  ["cr:5795"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:5795");
  },
  98
);
__d(
  "PagesPageActionClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744141");
    c = b("FalcoLoggerInternal").create("pages_page_action_click", a);
    e.exports = c;
  },
  null
);
__d(
  "useCometPageLike",
  [
    "CometInteractionTracingModulePageLikeQPLEvent",
    "CometPageLikeCommitMutation",
    "CometPageUnlikeCommitMutation",
    "CometRelay",
    "CometTrackingCodeContext",
    "PagesLogger",
    "PagesLoggerEventEnum",
    "PagesPageActionClickFalcoEvent",
    "react",
    "recoverableViolation",
    "useCometInteractionTracing",
    "useCometPageLike_page.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useCallback,
      j = e.useContext;
    function a(a, e, f) {
      var g = d("CometRelay").useRelayEnvironment();
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useCometPageLike_page.graphql")),
        a
      );
      var k = a == null ? void 0 : a.id,
        l = j(c("CometTrackingCodeContext")),
        m = l.encrypted_tracking,
        n = !0,
        o = (a == null ? void 0 : a.is_viewer_fan) === !0;
      l = (a == null ? void 0 : a.can_viewer_like) === !0;
      var p = c("useCometInteractionTracing")(
        c("CometInteractionTracingModulePageLikeQPLEvent"),
        "fast",
        "INTERACTION"
      );
      a = i(
        function () {
          p(function (a) {
            e != null &&
              a.onComplete(function () {
                a.addMetadata("location", e);
              });
            if (k != null)
              c("PagesPageActionClickFalcoEvent").log(function () {
                return {
                  event_data: {
                    action_id: null,
                    action_type: "like",
                    is_primary: !1,
                  },
                  event_location: e,
                  page_id: k,
                  referrer: null,
                };
              }),
                d("PagesLogger").log(
                  k,
                  c("PagesLoggerEventEnum").CLICK,
                  "page_like",
                  e,
                  ["page_consumer_experience"],
                  {}
                );
            else {
              c("recoverableViolation")(
                "Page ID should not be null when liking a page from " + e,
                "pages_consumer_experience_www"
              );
              return;
            }
            o
              ? d(
                  "CometPageUnlikeCommitMutation"
                ).pageUnlikeCommitMutationAction(g, k, m, n, f === !0)
              : d("CometPageLikeCommitMutation").pageLikeCommitMutationAction(
                  g,
                  k,
                  "unknown",
                  m,
                  n,
                  f === !0
                );
          });
        },
        [p, e, k, o, g, m, n, f]
      );
      return [l, o, a];
    }
    g.useCometPageLike = a;
  },
  98
);
__d(
  "CometPageLikeButton.react",
  [
    "fbt",
    "ix",
    "CometPageLikeButton_page.graphql",
    "CometRelay",
    "CometSuspiciousPageLikeWarningDialog.entrypoint",
    "CometTrackingNodeProvider.react",
    "InterventionDialog.entrypoint",
    "PagesCometLikeChainingContext.react",
    "TetraButton.react",
    "fbicon",
    "gkx",
    "qex",
    "react",
    "useCometEntryPointDialog",
    "useCometPageLike",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useContext,
      m = "CometPageLikeButton/";
    function a(a) {
      var e = a.defaultType;
      e = e === void 0 ? "normal" : e;
      var f = a.highlightLikedButton,
        g = a.labelIsHidden;
      g = g === void 0 ? !1 : g;
      var n = a.location,
        o = a.logAction,
        p = a.onPress,
        q = a.padding,
        r = a.page$key;
      a = a.size;
      a = a === void 0 ? "large" : a;
      r = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("CometPageLikeButton_page.graphql")),
        r
      );
      var s = d("useCometPageLike").useCometPageLike(r, n),
        t = s[0],
        u = s[1],
        v = s[2];
      s = (e === "normal") !== u || e === "secondary" ? "secondary" : "primary";
      s = u && f === !0 ? "primary" : s;
      e = m + s;
      f = l(
        d("PagesCometLikeChainingContext.react").PagesCometLikeChainingContext
      );
      var w = f.setShouldShowLikeChaining;
      f = c("useCometEntryPointDialog")(
        c("gkx")("1757248")
          ? c("InterventionDialog.entrypoint")
          : c("CometSuspiciousPageLikeWarningDialog.entrypoint"),
        {
          actionType: "LIKE",
          entityID: (e = r == null ? void 0 : r.id) != null ? e : "",
        }
      );
      var x = f[0];
      e = !u && (r == null ? void 0 : r.should_show_page_like_warning) === !0;
      if (t === !1) return null;
      var y = function () {
        v(),
          n === "page__header" && u === !1 && w(!0),
          o != null && o(n, u),
          p != null && p();
      };
      f = function () {
        x({ onConfirmLike: y, showSuspiciousLikeDialog: n === "page__header" });
      };
      return k.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: u ? 43 : 42,
        children: k.jsx(
          c("TetraButton.react"),
          {
            icon: d("fbicon")._(i("509921"), 16),
            label: u ? h._("Liked") : h._("Like"),
            labelIsHidden: g,
            onPress:
              e && ((r = c("qex")._("1755408")) != null ? r : !0) ? f : y,
            padding: q,
            reduceEmphasis: s === "primary",
            size: a,
            testid: void 0,
            type: s,
          },
          "fanning"
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModulePageLikeQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(30605317);
    g["default"] = a;
  },
  98
);
