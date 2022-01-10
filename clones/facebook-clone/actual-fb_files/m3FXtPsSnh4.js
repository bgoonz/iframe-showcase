if (self.CavalryLogger) {
  CavalryLogger.start_js(["ueiZgD3"]);
}

__d(
  "ProfileCometActionTrigger_action.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionTrigger_action",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "ProfileActionBlockHandler",
                "ProfileGroupActionBlockUserFromGroupHandler",
                "ProfileActionCallHandler",
                "ProfileActionCreateDetailedReportHandler",
                "ProfileActionDefaultHandler",
                "ProfileActionEditFriendListHandler",
                "ProfileActionEditProfileHandler",
                "ProfileActionFollowHandler",
                "ProfileActionFollowingStatusHandler",
                "ProfileActionFriendRequestHandler",
                "ProfileActionContextualProfileFriendRequestHandler",
                "ProfileActionInsightsHandler",
                "ProfileActionProfilePlusRollbackHandler",
                "ProfileActionAdditionalProfileRollbackUnavailableHandler",
                "ProfileActionProfilePlusOnboardingHandler",
                "ProfileActionMessageHandler",
                "ProfileActionContextualProfileMessageHandler",
                "ProfileActionMessengerContactHandler",
                "ProfileActionMessengerAudioCallHandler",
                "ProfileActionMessengerVideoCallHandler",
                "ProfileActionPreferredInteractionHandler",
                "ProfileActionReportHandler",
                "ProfileActionReportMarketplaceHandler",
                "ProfileActionSeeFirstHandler",
                "ProfileActionViewProfileTransparencyHandler",
                "ProfileGroupActionRemoveMemberHandler",
                "ProfileActionSearchProfileHandler",
                "ProfileGroupActionSetContentControlsHandler",
                "ProfileGroupActionMuteMemberHandler",
                "ProfileGroupActionTurnOnPostApprovalForMemberHandler",
                "ProfileGroupActionInviteAdminHandler",
                "ProfileGroupActionInviteModeratorHandler",
                "ProfileGroupActionInviteExpertHandler",
                "ProfileGroupActionLeaveGroupHandler",
                "ProfileActionRemoveGroupAdminHandler",
                "ProfileGroupActionRemoveExpertHandler",
                "ProfileActionAdditionalProfileRollbackHandler",
                "ProfileActionEditCampusProfileHandler",
                "ProfileActionEditContextualProfileHandler",
                "ProfileActionContextualProfileReportBioHandler",
                "ProfileActionContextualProfileReportMemberNameHandler",
                "ProfileActionPromoteHandler",
                "ProfileActionAdminToolsHandler",
                "ProfileActionManageFollowerHandler",
                "ProfileActionInviteToFollowHandler",
                "ProfileActionSuggestEditsHandler",
                "ProfileActionBookNowHandler",
                "ProfileActionLockProfileHandler",
                "ProfileActionDonateNowHandler",
                "ProfileActionEditPinnedFeatureHandler",
                "ProfileActionJoinCommunityHandler",
                "ProfileActionTopFanBadgeSettingHandler",
                "ProfileActionFavoriteCommunityHandler",
                "ProfileGroupActionGroupMemberModerationsHandler",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "client_handler",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionBlockHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionBlockHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionBlockUserFromGroupHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionBlockUserFromGroupHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionCallHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionCallHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionCreateDetailedReportHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionCreateDetailedReportHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionDefaultHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionDefaultHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionEditFriendListHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionEditFriendListHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionEditProfileHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionEditProfileHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionFollowHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionFollowHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionFollowingStatusHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionFollowingStatusHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionFriendRequestHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionFriendRequestHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionContextualProfileFriendRequestHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionContextualProfileFriendRequestHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionInsightsHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionInsightsHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionProfilePlusRollbackHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionProfilePlusRollbackHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionAdditionalProfileRollbackUnavailableHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionAdditionalProfileRollbackUnavailableHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionProfilePlusOnboardingHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionProfilePlusOnboardingHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionMessageHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionMessageHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionContextualProfileMessageHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionContextualProfileMessageHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionMessengerContactHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionMessengerContactHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionMessengerAudioCallHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionMessengerAudioCallHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionMessengerVideoCallHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionMessengerVideoCallHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionPreferredInteractionHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionPreferredInteractionHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionReportHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionReportHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionReportMarketplaceUserHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionReportMarketplaceHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionSeeFirstHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionSeeFirstHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionViewProfileTransparencyHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionViewProfileTransparencyHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionRemoveMemberHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionRemoveMemberHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionSearchProfileHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionSearchProfileHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionSetContentControlsHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionSetContentControlsHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionMuteMemberHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionMuteMemberHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionTurnOnPostApprovalForMemberHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionTurnOnPostApprovalForMemberHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionInviteAdminHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionInviteAdminHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionInviteModeratorHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionInviteModeratorHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionInviteExpertHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionInviteExpertHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionLeaveGroupHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionLeaveGroupHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionRemoveGroupAdminHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionRemoveGroupAdminHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionRemoveExpertHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionRemoveExpertHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionAdditionalProfileRollbackHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionAdditionalProfileRollbackHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionEditCampusProfileHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionEditCampusProfileHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionEditContextualProfileHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionEditContextualProfileHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionContextualProfileReportBioHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionContextualProfileReportBioHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionContextualProfileReportMemberNameHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionContextualProfileReportMemberNameHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionPromoteHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionPromoteHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionAdminToolsHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionAdminToolsHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionManageFollowerHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionManageFollowerHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionInviteToFollowHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionInviteToFollowHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionSuggestEditsHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionSuggestEditsHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionBookNowHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionBookNowHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionLockProfileHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionLockProfileHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName: "ProfileCometActionDonateNowHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionDonateNowHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionEditPinnedFeatureHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionEditPinnedFeatureHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionJoinCommunityHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionJoinCommunityHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionTopFanBadgeSettingHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionTopFanBadgeSettingHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometActionFavoriteCommunityHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileActionFavoriteCommunityHandler",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometActionTrigger_action",
                  fragmentName:
                    "ProfileCometGroupActionGroupMemberModerationsHandler_handler",
                  fragmentPropName: "handler",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfileGroupActionGroupMemberModerationsHandler",
              abstractKey: null,
            },
          ],
          storageKey:
            'client_handler(supported:["ProfileActionBlockHandler","ProfileGroupActionBlockUserFromGroupHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFollowingStatusHandler","ProfileActionFriendRequestHandler","ProfileActionContextualProfileFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionAdditionalProfileRollbackUnavailableHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionContextualProfileMessageHandler","ProfileActionMessengerContactHandler","ProfileActionMessengerAudioCallHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionSetContentControlsHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionInviteExpertHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileGroupActionRemoveExpertHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditCampusProfileHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionContextualProfileReportMemberNameHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler","ProfileActionManageFollowerHandler","ProfileActionInviteToFollowHandler","ProfileActionSuggestEditsHandler","ProfileActionBookNowHandler","ProfileActionLockProfileHandler","ProfileActionDonateNowHandler","ProfileActionEditPinnedFeatureHandler","ProfileActionJoinCommunityHandler","ProfileActionTopFanBadgeSettingHandler","ProfileActionFavoriteCommunityHandler","ProfileGroupActionGroupMemberModerationsHandler"])',
        },
      ],
      type: "ProfileAction",
      abstractKey: "__isProfileAction",
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometActionTrigger.react",
  [
    "CometRelay",
    "ProfileCometActionTrigger_action.graphql",
    "ProfileCometContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext;
    function a(a) {
      var e = a.action,
        f = a.children,
        g = a.popoverPosition;
      a = a.source;
      e = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("ProfileCometActionTrigger_action.graphql")),
        e
      );
      var k = j(c("ProfileCometContext"));
      k = k.isInViewAs;
      return k
        ? f({ disabled: !0 })
        : i.jsx(d("CometRelay").MatchContainer, {
            fallback: f({ disabled: !0 }),
            match: e.client_handler,
            props: { children: f, popoverPosition: g, source: a },
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometContextualProfileContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      groupID: "",
      isContextualProfileView: !1,
      renderLocation: null,
      userID: "",
    });
    g["default"] = b;
  },
  98
);
__d(
  "ProfileEngagementEventsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1962347");
    c = b("FalcoLoggerInternal").create("profile_engagement_events", a);
    e.exports = c;
  },
  null
);
__d(
  "useProfileCometEngagementEventsClickCallback",
  [
    "ProfileCometContext",
    "ProfileEngagementEventsFalcoEvent",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a(a) {
      var b = i(c("ProfileCometContext")),
        d = b.profileID;
      d == null &&
        c("recoverableViolation")(
          "viewer id is a required field for profile engagement events logging",
          "profile_comet"
        );
      b = h(
        function () {
          c("ProfileEngagementEventsFalcoEvent").log(function () {
            return babelHelpers["extends"]({}, a, {
              event_type: "click",
              viewee_userid: d,
            });
          });
        },
        [a, d]
      );
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useProfileCometEngagementEventsImpression",
  [
    "ProfileCometContext",
    "ProfileEngagementEventsFalcoEvent",
    "react",
    "recoverableViolation",
    "useSinglePartialViewImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a(a) {
      var b = i(c("ProfileCometContext")),
        d = b.profileID;
      d == null &&
        c("recoverableViolation")(
          "profile id is a required field for profile engagement events logging",
          "profile_comet"
        );
      var e = "impression";
      (a == null ? void 0 : a.event_type) != null && (e = a.event_type);
      b = h(
        function () {
          c("ProfileEngagementEventsFalcoEvent").log(function () {
            return babelHelpers["extends"]({}, a, {
              event_type: e,
              viewee_userid: d,
            });
          });
        },
        [a, d, e]
      );
      return c("useSinglePartialViewImpression")({ onImpressionStart: b });
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometEngagementLoggingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({});
    g["default"] = b;
  },
  98
);
__d(
  "useProfileEngagementData",
  [
    "ProfileCometContext",
    "ProfileCometEngagementLoggingContext",
    "ProfileCometSession",
    "react",
    "recoverableViolation",
    "useCurrentRoute",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext,
      i = "2220391788200892";
    function a(a) {
      var b = h(c("ProfileCometContext")),
        e = h(c("ProfileCometEngagementLoggingContext")),
        f = c("useCurrentRoute")();
      if (b.profileID === "") {
        c("recoverableViolation")(
          "Tried to use Profile Engagement Logger without passing a profile ID via a ProfileCometContext provider.",
          "profile_comet"
        );
        return null;
      }
      return babelHelpers["extends"](
        {
          appid: i,
          profile_id_dummy: b.profileID,
          profile_session_id: d("ProfileCometSession").get(b.profileID, f),
        },
        e,
        a
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useProfileEngagementClickCallback",
  [
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useProfileEngagementData",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("requireDeferred")("ProfileEngagementTypedLoggerLite").__setRef(
        "useProfileEngagementClickCallback"
      );
    function a(a, b) {
      var d = c("useProfileEngagementData")(a);
      d != null &&
        d.product_bucket == null &&
        (c("recoverableViolation")(
          "product_bucket is a required field for profile engagement logging",
          "profile_comet"
        ),
        (d = babelHelpers["extends"]({}, d, { product_bucket: "unknown" })));
      a = h(
        function (a) {
          d != null &&
            i.onReady(function (a) {
              a = a.log;
              a(babelHelpers["extends"]({ engagement_type: "click" }, d));
            }),
            b && b(a);
        },
        [b, d]
      );
      return a;
    }
    g["default"] = a;
  },
  98
);
