if (self.CavalryLogger) {
  CavalryLogger.start_js(["pI/14oo"]);
}

__d(
  "ProfileCometHeaderQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldDeferProfilePic",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useVNextHeader",
        },
        d = { defaultValue: null, kind: "LocalArgument", name: "userID" },
        e = [{ kind: "Variable", name: "id", variableName: "userID" }],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_friend",
          storageKey: null,
        },
        i = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "render_location",
              value: "PROFILE_PICTURE",
            },
          ],
          concreteType: "ProfileActiveMessengerRoom",
          kind: "LinkedField",
          name: "profile_active_messenger_room",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "ProfileCometProfilePictureContainer_user",
              fragmentName:
                "ProfileCometProfilePictureMessengerRoomPill_profile_active_messenger_room",
              fragmentPropName: "profile_active_messenger_room",
              kind: "ModuleImport",
            },
          ],
          storageKey:
            'profile_active_messenger_room(render_location:"PROFILE_PICTURE")',
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        k = {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 1 }],
          concreteType: "DirectInboxBroadcastBucketConnection",
          kind: "LinkedField",
          name: "story_bucket",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "DirectMessageThreadBucket",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                j,
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "first_story_to_show",
                  plural: !1,
                  selections: [
                    j,
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
          storageKey: "story_bucket(first:1)",
        },
        l = [
          {
            kind: "Literal",
            name: "supported",
            value: ["ProfileDefaultTabs", "ProfileLoggedOutTabsWithJoinCTA"],
          },
        ],
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        n = { kind: "Variable", name: "scale", variableName: "scale" },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        p = [o],
        q = {
          alias: "profile_image",
          args: [
            { kind: "Literal", name: "height", value: 36 },
            n,
            { kind: "Literal", name: "width", value: 36 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: p,
          storageKey: null,
        },
        r = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 32 },
            n,
            { kind: "Literal", name: "width", value: 32 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: p,
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          concreteType: "XFBProfilePlusContinuityModeInfo",
          kind: "LinkedField",
          name: "profile_plus_continuity_mode_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_acting_as_profile_plus",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "alternate_name",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "username_for_profile",
          storageKey: null,
        },
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
          name: "is_visibly_memorialized",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          concreteType: "ProfileSocialContext",
          kind: "LinkedField",
          name: "profile_social_context",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "ProfileCometInfo_user__profileSocialContext",
              fragmentName:
                "ProfileCometInfoSocialContext_profileSocialContext",
              fragmentPropName: "profileSocialContext",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        y = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: ["XFBCometProfilePodcastDialogTriggerRenderer"],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_profile_dialog_trigger",
          plural: !0,
          selections: [
            m,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometInfo_user__dialogTrigger",
                  fragmentName:
                    "ProfilePlusManagePodcastDialogRenderer_dialogTrigger",
                  fragmentPropName: "dialogTrigger",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBCometProfilePodcastDialogTriggerRenderer",
              abstractKey: null,
            },
          ],
          storageKey:
            'comet_profile_dialog_trigger(supported:["XFBCometProfilePodcastDialogTriggerRenderer"])',
        },
        z = {
          alias: null,
          args: null,
          concreteType: "WEMPrivateSharingBundle",
          kind: "LinkedField",
          name: "wem_private_sharing_bundle",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "WemPrivateSharingControlModel",
              kind: "LinkedField",
              name: "private_sharing_control_model_for_user",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "private_sharing_enabled",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        A = {
          alias: "top_banner",
          args: [
            {
              kind: "Literal",
              name: "render_location",
              value: "PROFILE_HEADER",
            },
            {
              kind: "Literal",
              name: "supported",
              value: [
                "ProfilePendingFriendBanner",
                "ProfilePlusDelegateCommunityPendingParticipantBanner",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_profile_banner",
          plural: !1,
          selections: [
            m,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometProfileHeaderBanner_user",
                  fragmentName:
                    "ProfileCometPendingFriendBanner_cometProfileBanner",
                  fragmentPropName: "cometProfileBanner",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfilePendingFriendBanner",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "ProfileCometProfileHeaderBanner_user",
                  fragmentName:
                    "ProfileCometPendingParticipationBanner_cometProfileBanner",
                  fragmentPropName: "cometProfileBanner",
                  kind: "ModuleImport",
                },
              ],
              type: "ProfilePlusDelegateCommunityPendingParticipantBanner",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [j],
              type: "Node",
              abstractKey: "__isNode",
            },
          ],
          storageKey:
            'comet_profile_banner(render_location:"PROFILE_HEADER",supported:["ProfilePendingFriendBanner","ProfilePlusDelegateCommunityPendingParticipantBanner"])',
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_picture_expiration_time",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        D = { kind: "TypeDiscriminator", abstractKey: "__isProfile" },
        E = {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "www" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"www")',
        },
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        H = {
          alias: "viewer_image",
          args: [
            { kind: "Literal", name: "context", value: "comet_media_viewer" },
            { kind: "Literal", name: "height", value: 1e6 },
            n,
            { kind: "Literal", name: "width", value: 1e6 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: [F, G],
          storageKey: null,
        },
        I = {
          alias: null,
          args: null,
          concreteType: "Video",
          kind: "LinkedField",
          name: "associated_video",
          plural: !1,
          selections: [E, j],
          storageKey: null,
        },
        J = {
          alias: null,
          args: null,
          concreteType: "Photo",
          kind: "LinkedField",
          name: "profile_photo",
          plural: !1,
          selections: [j, C, H],
          storageKey: null,
        },
        K = {
          alias: "profilePic160",
          args: [
            { kind: "Literal", name: "height", value: 160 },
            n,
            { kind: "Literal", name: "width", value: 160 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: p,
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          concreteType: "ProfileVideo",
          kind: "LinkedField",
          name: "profile_video",
          plural: !1,
          selections: [I, j],
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          concreteType: "Photo",
          kind: "LinkedField",
          name: "profile_photo",
          plural: !1,
          selections: [C, H, j],
          storageKey: null,
        },
        N = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_picture_is_silhouette",
          storageKey: null,
        };
      E = {
        kind: "InlineFragment",
        selections: [
          {
            alias: "profile_picture_for_sticky_bar",
            args: [
              { kind: "Literal", name: "height", value: 40 },
              n,
              { kind: "Literal", name: "width", value: 40 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: p,
            storageKey: null,
          },
          B,
          {
            kind: "InlineFragment",
            selections: [m, C],
            type: "Entity",
            abstractKey: "__isEntity",
          },
          {
            if: "shouldDeferProfilePic",
            kind: "Defer",
            label:
              "ProfileCometProfilePicture_profile$defer$ProfileCometProfilePictureContainer_profile",
            selections: [
              D,
              f,
              {
                alias: "profilePhoto",
                args: null,
                concreteType: "Photo",
                kind: "LinkedField",
                name: "profile_photo",
                plural: !1,
                selections: [E, H, j],
                storageKey: null,
              },
              {
                alias: "profilePicLarge",
                args: [
                  { kind: "Literal", name: "height", value: 168 },
                  n,
                  { kind: "Literal", name: "width", value: 168 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: p,
                storageKey: null,
              },
              {
                alias: "profilePicMedium",
                args: [
                  { kind: "Literal", name: "height", value: 132 },
                  n,
                  { kind: "Literal", name: "width", value: 132 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: p,
                storageKey: null,
              },
              {
                alias: "profilePicSmall",
                args: [
                  { kind: "Literal", name: "height", value: 100 },
                  n,
                  { kind: "Literal", name: "width", value: 100 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: p,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "ProfileVideo",
                kind: "LinkedField",
                name: "profile_video",
                plural: !1,
                selections: [
                  I,
                  {
                    if: "shouldDeferProfilePic",
                    kind: "Defer",
                    label:
                      "ProfileCometProfilePictureContainer_profile$defer$CometProfileVideoSection_profileVideo",
                    selections: [
                      {
                        args: null,
                        documentName: "CometProfileVideoSection_profileVideo",
                        fragmentName: "CometProfileVideo_profileVideo",
                        fragmentPropName: "profileVideo",
                        kind: "ModuleImport",
                      },
                    ],
                  },
                  j,
                ],
                storageKey: null,
              },
              {
                if: "shouldDeferProfilePic",
                kind: "Defer",
                label:
                  "ProfileCometProfilePictureContainer_profile$defer$ProfileCometProfilePictureEditButton_profile",
                selections: [D, B, J, K, L],
              },
            ],
          },
          {
            if: null,
            kind: "Defer",
            label:
              "ProfileCometProfilePicture_profile$defer$ProfileCometProfilePictureEditMenu_profile",
            selections: [
              D,
              M,
              K,
              {
                alias: null,
                args: null,
                concreteType: "ProfileVideo",
                kind: "LinkedField",
                name: "profile_video",
                plural: !1,
                selections: [I, j, m],
                storageKey: null,
              },
              N,
            ],
          },
          {
            if: null,
            kind: "Defer",
            label:
              "ProfileCometProfilePicture_profile$defer$ProfileCometProfilePictureTemporaryEditMenu_profile",
            selections: [D, J, B, K, L],
          },
          {
            if: null,
            kind: "Defer",
            label:
              "ProfileCometProfilePicture_profile$defer$ProfileCometProfilePictureViewMenu_profile",
            selections: [D, M, K, L, N],
          },
        ],
        type: "Profile",
        abstractKey: "__isProfile",
      };
      p = {
        kind: "Literal",
        name: "render_location",
        value: "WWW_COMET_PROFILE",
      };
      I = [
        p,
        { kind: "Literal", name: "subsurface_type", value: "PRIMARY_SURFACE" },
      ];
      J = { kind: "TypeDiscriminator", abstractKey: "__isProfileAction" };
      B = {
        alias: null,
        args: null,
        concreteType: "TextWithEntities",
        kind: "LinkedField",
        name: "title",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      D = { kind: "Literal", name: "icon_color", value: "fds-black" };
      M = { kind: "Literal", name: "icon_variant", value: "filled" };
      K = [
        F,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "scale",
          storageKey: null,
        },
        o,
        G,
      ];
      L = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "profile_action_type",
        storageKey: null,
      };
      N = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_active",
        storageKey: null,
      };
      var O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "nux_id",
          storageKey: null,
        },
        P = {
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
            m,
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
        Q = {
          alias: "primaryActions",
          args: I,
          concreteType: null,
          kind: "LinkedField",
          name: "profile_actions",
          plural: !0,
          selections: [
            m,
            J,
            B,
            {
              alias: "primary_icon",
              args: [
                D,
                { kind: "Literal", name: "icon_size", value: "16" },
                M,
                n,
              ],
              concreteType: "Image",
              kind: "LinkedField",
              name: "icon_image",
              plural: !1,
              selections: K,
              storageKey: null,
            },
            L,
            N,
            {
              alias: null,
              args: null,
              concreteType: "ProfileActionNux",
              kind: "LinkedField",
              name: "nux",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "nux_caption",
                  storageKey: null,
                },
                O,
              ],
              storageKey: null,
            },
            P,
            j,
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_optimistic_update",
                  storageKey: null,
                },
              ],
            },
          ],
          storageKey:
            'profile_actions(render_location:"WWW_COMET_PROFILE",subsurface_type:"PRIMARY_SURFACE")',
        },
        R = { kind: "Literal", name: "icon_size", value: "20" };
      p = {
        alias: "secondaryActions",
        args: [
          p,
          {
            kind: "Literal",
            name: "subsurface_type",
            value: "SECONDARY_SURFACE",
          },
        ],
        concreteType: null,
        kind: "LinkedField",
        name: "profile_actions",
        plural: !0,
        selections: [
          m,
          j,
          J,
          L,
          {
            alias: "secondary_icon",
            args: [
              D,
              R,
              { kind: "Literal", name: "icon_variant", value: "outline" },
              n,
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
            plural: !1,
            selections: K,
            storageKey: null,
          },
          {
            alias: "active_secondary_icon",
            args: [D, R, M, n],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
            plural: !1,
            selections: K,
            storageKey: null,
          },
          B,
          N,
          P,
        ],
        storageKey:
          'profile_actions(render_location:"WWW_COMET_PROFILE",subsurface_type:"SECONDARY_SURFACE")',
      };
      J = [o, G, F];
      L = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "FocusedPhoto",
            kind: "LinkedField",
            name: "cover_photo",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Vect2",
                kind: "LinkedField",
                name: "focus",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "x",
                    storageKey: null,
                  },
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
              {
                alias: null,
                args: null,
                concreteType: "Photo",
                kind: "LinkedField",
                name: "photo",
                plural: !1,
                selections: [
                  j,
                  {
                    alias: null,
                    args: [n],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "image",
                    plural: !1,
                    selections: J,
                    storageKey: null,
                  },
                  H,
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Literal",
                        name: "supported",
                        value: ["XFBCometImmersive360PhotoRenderer"],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "comet_photo_renderer",
                    plural: !1,
                    selections: [
                      m,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "ProfileCometCoverPhoto_renderedProfile_photo_renderer",
                            fragmentName:
                              "CometRemote360PhotoViewerRenderer_renderer",
                            fragmentPropName: "renderer",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "XFBCometImmersive360PhotoRenderer",
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'comet_photo_renderer(supported:["XFBCometImmersive360PhotoRenderer"])',
                  },
                  {
                    alias: "blurred_image",
                    args: [
                      { kind: "Literal", name: "blur", value: 50 },
                      { kind: "Literal", name: "width", value: 320 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "image",
                    plural: !1,
                    selections: J,
                    storageKey: "image(blur:50,width:320)",
                  },
                  C,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "RenderedProfile",
        abstractKey: "__isRenderedProfile",
      };
      D = [k];
      R = {
        if: "shouldDeferProfilePic",
        kind: "Defer",
        label:
          "ProfileCometProfilePictureContainer_user$defer$ProfileCometProfilePictureEditButton_user",
        selections: D,
      };
      M = {
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
      };
      K = {
        if: null,
        kind: "Defer",
        label:
          "ProfileCometProfilePicture_user$defer$ProfileCometLockedProfilePopover_user",
        selections: [f, g],
      };
      B = {
        if: null,
        kind: "Defer",
        label:
          "ProfileCometProfilePicture_user$defer$ProfileCometProfilePictureViewMenu_user",
        selections: D,
      };
      N = {
        if: null,
        kind: "Defer",
        label:
          "ProfileCometProfilePicture_user$defer$ProfileCometProfilePictureEditMenu_user",
        selections: D,
      };
      P = {
        if: null,
        kind: "Defer",
        label:
          "ProfileCometProfilePicture_user$defer$ProfileCometProfilePictureTemporaryEditMenu_user",
        selections: D,
      };
      o = {
        condition: "useVNextHeader",
        kind: "Condition",
        passingValue: !1,
        selections: [
          {
            args: null,
            documentName: "ProfileCometInfo_user",
            fragmentName: "ProfileCometInfoBio_user",
            fragmentPropName: "user",
            kind: "ModuleImport",
          },
        ],
      };
      G = {
        alias: null,
        args: null,
        concreteType: "AvailableActorsConnection",
        kind: "LinkedField",
        name: "available_actors",
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
      };
      F = { kind: "TypeDiscriminator", abstractKey: "__isNode" };
      n = {
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
            kind: "ScalarField",
            name: "is_wem_private_sharing_enabled",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      H = {
        alias: null,
        args: [{ kind: "Literal", name: "nux_id", value: 8362 }],
        concreteType: null,
        kind: "LinkedField",
        name: "nux",
        plural: !1,
        selections: [
          m,
          j,
          {
            kind: "InlineFragment",
            selections: [
              O,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_show",
                storageKey: null,
              },
            ],
            type: "DefaultNUX",
            abstractKey: null,
          },
        ],
        storageKey: "nux(nux_id:8362)",
      };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d],
          kind: "Fragment",
          metadata: null,
          name: "ProfileCometHeaderQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "ProfileCometEntityHeaderChooser_query",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [a, d, b, c],
          kind: "Operation",
          name: "ProfileCometHeaderQuery",
          selections: [
            {
              condition: "useVNextHeader",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: e,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "user",
                  plural: !1,
                  selections: [
                    f,
                    g,
                    h,
                    i,
                    k,
                    {
                      alias: null,
                      args: l,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_tabs",
                      plural: !1,
                      selections: [
                        m,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometEntityConvergenceHeader_query",
                              fragmentName: "ProfileCometTabs_cometProfileTabs",
                              fragmentPropName: "cometProfileTabs",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileDefaultTabs",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometEntityConvergenceHeader_query",
                              fragmentName:
                                "ProfileCometLoggedOutTabsWithJoinCTA_cometProfileTabs",
                              fragmentPropName: "cometProfileTabs",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileLoggedOutTabsWithJoinCTA",
                          abstractKey: null,
                        },
                      ],
                      storageKey:
                        'profile_tabs(supported:["ProfileDefaultTabs","ProfileLoggedOutTabsWithJoinCTA"])',
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
                          selections: [
                            m,
                            j,
                            f,
                            q,
                            {
                              kind: "InlineFragment",
                              selections: [r, s],
                              type: "User",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    t,
                    u,
                    j,
                    v,
                    w,
                    x,
                    y,
                    z,
                    A,
                    E,
                    {
                      if: null,
                      kind: "Defer",
                      label:
                        "ProfileCometEntityConvergenceHeader_query$defer$ProfileCometHeaderPrimaryActionBar_actor",
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [Q],
                          type: "ActorWithActionBar",
                          abstractKey: "__isActorWithActionBar",
                        },
                      ],
                    },
                    {
                      if: null,
                      kind: "Defer",
                      label:
                        "ProfileCometEntityConvergenceHeader_query$defer$ProfileCometHeaderMoreActionButton_actor",
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: "primaryActions",
                              args: I,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "profile_actions",
                              plural: !0,
                              selections: [m, j],
                              storageKey:
                                'profile_actions(render_location:"WWW_COMET_PROFILE",subsurface_type:"PRIMARY_SURFACE")',
                            },
                            p,
                          ],
                          type: "ActorWithActionBar",
                          abstractKey: "__isActorWithActionBar",
                        },
                      ],
                    },
                    L,
                    R,
                    M,
                    K,
                    B,
                    N,
                    P,
                    o,
                    {
                      kind: "InlineFragment",
                      selections: [G, F],
                      type: "SupportsScopedActors",
                      abstractKey: "__isSupportsScopedActors",
                    },
                  ],
                  storageKey: null,
                },
                n,
                H,
              ],
            },
            {
              condition: "useVNextHeader",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: e,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "user",
                  plural: !1,
                  selections: [
                    f,
                    g,
                    h,
                    i,
                    k,
                    {
                      alias: null,
                      args: l,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_tabs",
                      plural: !1,
                      selections: [
                        m,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "ProfileCometEntityHeader_query",
                              fragmentName: "ProfileCometTabs_cometProfileTabs",
                              fragmentPropName: "cometProfileTabs",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileDefaultTabs",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "ProfileCometEntityHeader_query",
                              fragmentName:
                                "ProfileCometLoggedOutTabsWithJoinCTA_cometProfileTabs",
                              fragmentPropName: "cometProfileTabs",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileLoggedOutTabsWithJoinCTA",
                          abstractKey: null,
                        },
                      ],
                      storageKey:
                        'profile_tabs(supported:["ProfileDefaultTabs","ProfileLoggedOutTabsWithJoinCTA"])',
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
                          selections: [
                            m,
                            {
                              kind: "InlineFragment",
                              selections: [f, r],
                              type: "User",
                              abstractKey: null,
                            },
                            j,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    t,
                    u,
                    j,
                    v,
                    w,
                    x,
                    y,
                    z,
                    A,
                    E,
                    {
                      if: null,
                      kind: "Defer",
                      label:
                        "ProfileCometEntityHeader_query$defer$ProfileCometHeaderActionBar_actor",
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
                            Q,
                            p,
                            {
                              kind: "InlineFragment",
                              selections: [
                                G,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "has_vnext_action_bar",
                                  storageKey: null,
                                },
                                j,
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
                                      selections: [
                                        m,
                                        j,
                                        f,
                                        q,
                                        {
                                          kind: "InlineFragment",
                                          selections: [s],
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
                                  kind: "InlineFragment",
                                  selections: [F],
                                  type: "SupportsScopedActors",
                                  abstractKey: "__isSupportsScopedActors",
                                },
                              ],
                              type: "User",
                              abstractKey: null,
                            },
                          ],
                          type: "ActorWithActionBar",
                          abstractKey: "__isActorWithActionBar",
                        },
                      ],
                    },
                    L,
                    R,
                    M,
                    K,
                    B,
                    N,
                    P,
                    o,
                  ],
                  storageKey: null,
                },
                n,
                H,
              ],
            },
          ],
        },
        params: {
          id: "4229655333790855",
          metadata: {},
          name: "ProfileCometHeaderQuery",
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
  "ProfileCometLoggedOutRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "collectionToken",
          },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "userID" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "userID" }],
        c = [{ kind: "Variable", name: "id", variableName: "collectionToken" }],
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
        f = { kind: "Literal", name: "first", value: 2 },
        g = [
          f,
          {
            kind: "Literal",
            name: "render_location",
            value: "COMET_PROFILE_LOGGED_OUT",
          },
        ],
        h = [{ kind: "Literal", name: "site", value: "comet" }],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        j = [i];
      j = [
        {
          alias: null,
          args: null,
          concreteType: "ProfileTileSectionsEdge",
          kind: "LinkedField",
          name: "edges",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ProfileTileSection",
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_tile_section_type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "ProfileTileViewsConnection",
                  kind: "LinkedField",
                  name: "profile_tile_views",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "ProfileTileView",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        e,
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "ProfileTileViewIntroBioRenderer",
                                "ProfileTileViewContextListRenderer",
                                "ProfileTileViewHobbiesRenderer",
                                "ProfileTileViewPhotoGridRenderer",
                                "ProfileTileViewFriendGridRenderer",
                                "ProfileTileViewFundraisersRenderer",
                                "ProfileTileViewLifeEventsRenderer",
                                "ProfileTileViewFunFactsRenderer",
                                "ProfileTileViewMediaCollageRenderer",
                                "ProfileTileViewFeaturedHighlightsRenderer",
                                "ProfileTileViewFallbackRenderer",
                                "ProfileTileViewShopCardRenderer",
                                "ProfileTileViewMenuGridRenderer",
                                "ProfileTileViewSameNameListRenderer",
                                "ProfileTileViewCellListRenderer",
                                "ProfileTileViewEventsListRenderer",
                                "ProfileTileViewVideoRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "view_style_renderer",
                          plural: !1,
                          selections: [
                            d,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileIntroBioView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewIntroBioRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileContextListView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewContextListRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileHobbiesView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewHobbiesRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTilePhotoGridView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewPhotoGridRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileFriendGridView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewFriendGridRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileFundraisersView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewFundraisersRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileLifeEventsView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewLifeEventsRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileFunFactsView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewFunFactsRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileMediaCollageView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewMediaCollageRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileFeaturedHighlightsView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewFeaturedHighlightsRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileFallbackView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewFallbackRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileShopCardView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewShopCardRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileMenuGridView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewMenuGridRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileSameNameListView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewSameNameListRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileCellListView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewCellListRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileEventsListView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewEventsListRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView",
                                  fragmentName:
                                    "ProfileCometTileVideoView_viewStyleRenderer",
                                  fragmentPropName: "viewStyleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileViewVideoRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'view_style_renderer(supported:["ProfileTileViewIntroBioRenderer","ProfileTileViewContextListRenderer","ProfileTileViewHobbiesRenderer","ProfileTileViewPhotoGridRenderer","ProfileTileViewFriendGridRenderer","ProfileTileViewFundraisersRenderer","ProfileTileViewLifeEventsRenderer","ProfileTileViewFunFactsRenderer","ProfileTileViewMediaCollageRenderer","ProfileTileViewFeaturedHighlightsRenderer","ProfileTileViewFallbackRenderer","ProfileTileViewShopCardRenderer","ProfileTileViewMenuGridRenderer","ProfileTileViewSameNameListRenderer","ProfileTileViewCellListRenderer","ProfileTileViewEventsListRenderer","ProfileTileViewVideoRenderer"])',
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "ProfileTileEditIntroBioRenderer",
                                "ProfileTileEditAboutContextListRenderer",
                                "ProfileTileEditHobbiesRenderer",
                                "ProfileTileEditFeaturedHighlightsRenderer",
                                "ProfileTileEditMediaCollageRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "view_style_edit_renderer",
                          plural: !1,
                          selections: [
                            d,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView__view_style_edit_renderer",
                                  fragmentName:
                                    "ProfileCometIntroBioAddButton_viewStyleEditRenderer",
                                  fragmentPropName: "viewStyleEditRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileEditIntroBioRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView__view_style_edit_renderer",
                                  fragmentName:
                                    "ProfileCometIntroDetailsEditButton_viewStyleEditRenderer",
                                  fragmentPropName: "viewStyleEditRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileEditAboutContextListRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView__view_style_edit_renderer",
                                  fragmentName:
                                    "ProfileCometHobbiesEditButton_viewStyleEditRenderer",
                                  fragmentPropName: "viewStyleEditRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileEditHobbiesRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView__view_style_edit_renderer",
                                  fragmentName:
                                    "ProfileCometFeaturedHighlightsEditButton_viewStyleEditRenderer",
                                  fragmentPropName: "viewStyleEditRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileEditFeaturedHighlightsRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometTileView_profileTileView__view_style_edit_renderer",
                                  fragmentName:
                                    "ProfileCometFeaturedMediaEditButton_viewStyleEditRenderer",
                                  fragmentPropName: "viewStyleEditRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfileTileEditMediaCollageRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'view_style_edit_renderer(supported:["ProfileTileEditIntroBioRenderer","ProfileTileEditAboutContextListRenderer","ProfileTileEditHobbiesRenderer","ProfileTileEditFeaturedHighlightsRenderer","ProfileTileEditMediaCollageRenderer"])',
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
                  name: "action_link",
                  plural: !1,
                  selections: [
                    d,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "title",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: h,
                      kind: "ScalarField",
                      name: "url",
                      storageKey: 'url(site:"comet")',
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_pinned_profile_feature",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "title",
                  plural: !1,
                  selections: j,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "subtitle",
                  plural: !1,
                  selections: j,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "ProfileCardNuxTooltip",
                  kind: "LinkedField",
                  name: "nux_tooltip",
                  plural: !1,
                  selections: [
                    i,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "nux_id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [{ kind: "Literal", name: "site", value: "www" }],
                  kind: "ScalarField",
                  name: "url",
                  storageKey: 'url(site:"www")',
                },
                {
                  alias: null,
                  args: h,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "action_menu",
                  plural: !1,
                  selections: [
                    d,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isProfileTileActionMenu",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "ProfileCometTile_actionMenu",
                          fragmentName:
                            "ProfileCometTileShopActionMenuPopoverTrigger_actionMenu",
                          fragmentPropName: "actionMenu",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "ShopProfileTileActionMenu",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "ProfileCometTile_actionMenu",
                          fragmentName:
                            "ProfileCometTileAdminedGroupsActionMenuPopoverTrigger_actionMenu",
                          fragmentPropName: "actionMenu",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "AdminedGroupsProfileTileActionMenu",
                      abstractKey: null,
                    },
                  ],
                  storageKey: 'action_menu(site:"comet")',
                },
                d,
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
              name: "has_next_page",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "end_cursor",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      i = ["render_location"];
      h = [
        f,
        {
          kind: "Literal",
          name: "render_location",
          value: "COMET_PROFILE_LOGGED_OUT_MAIN_COL",
        },
      ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "ProfileCometLoggedOutRootQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  kind: "Defer",
                  selections: [
                    {
                      args: [
                        {
                          kind: "Literal",
                          name: "renderLocation",
                          value: "COMET_PROFILE_LOGGED_OUT",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "ProfileCometTilesFeed_user",
                    },
                  ],
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "ProfileCometTimelineTabFeedBanner_user",
                },
              ],
              storageKey: null,
            },
            {
              alias: "mainColumnTiles",
              args: b,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  kind: "Defer",
                  selections: [
                    {
                      args: [
                        {
                          kind: "Literal",
                          name: "renderLocation",
                          value: "COMET_PROFILE_LOGGED_OUT_MAIN_COL",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "ProfileCometTilesFeed_user",
                    },
                  ],
                },
              ],
              storageKey: null,
            },
            {
              alias: "about_collection",
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "Defer",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "ProfileCometLoggedOutAboutContent_timelineCollection",
                    },
                  ],
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "ProfileCometLoggedOutRootQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  alias: "feed_banner",
                  args: [
                    {
                      kind: "Literal",
                      name: "render_location",
                      value: "TIMELINE_TAB_FEED_COLUMN",
                    },
                    {
                      kind: "Literal",
                      name: "supported",
                      value: [
                        "LockedProfileTryItBanner",
                        "ProfilePlusAdminComposer",
                      ],
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_profile_banner",
                  plural: !1,
                  selections: [
                    d,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "ProfileCometTimelineTabFeedBanner_user",
                          fragmentName:
                            "ProfileCometLockedProfileTryItBanner_cometProfileBanner",
                          fragmentPropName: "cometProfileBanner",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "LockedProfileTryItBanner",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "ProfileCometTimelineTabFeedBanner_user",
                          fragmentName:
                            "ProfileCometProfilePlusAdminComposer_cometProfileBanner",
                          fragmentPropName: "cometProfileBanner",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "ProfilePlusAdminComposer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [e],
                      type: "Node",
                      abstractKey: "__isNode",
                    },
                  ],
                  storageKey:
                    'comet_profile_banner(render_location:"TIMELINE_TAB_FEED_COLUMN",supported:["LockedProfileTryItBanner","ProfilePlusAdminComposer"])',
                },
                e,
                {
                  if: null,
                  kind: "Defer",
                  label:
                    "ProfileCometLoggedOutRootQuery$defer$ProfileCometTilesFeed_user_3QybkC",
                  selections: [
                    {
                      alias: null,
                      args: g,
                      concreteType: "ProfileTileSectionsConnection",
                      kind: "LinkedField",
                      name: "profile_tile_sections",
                      plural: !1,
                      selections: j,
                      storageKey:
                        'profile_tile_sections(first:2,render_location:"COMET_PROFILE_LOGGED_OUT")',
                    },
                    {
                      alias: null,
                      args: g,
                      filters: i,
                      handle: "connection",
                      key: "ProfileCometTilesFeed_profile_tile_sections",
                      kind: "LinkedHandle",
                      name: "profile_tile_sections",
                    },
                    e,
                  ],
                },
              ],
              storageKey: null,
            },
            {
              alias: "mainColumnTiles",
              args: b,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                e,
                {
                  if: null,
                  kind: "Defer",
                  label:
                    "ProfileCometLoggedOutRootQuery$defer$ProfileCometTilesFeed_user_2OIZ4h",
                  selections: [
                    {
                      alias: null,
                      args: h,
                      concreteType: "ProfileTileSectionsConnection",
                      kind: "LinkedField",
                      name: "profile_tile_sections",
                      plural: !1,
                      selections: j,
                      storageKey:
                        'profile_tile_sections(first:2,render_location:"COMET_PROFILE_LOGGED_OUT_MAIN_COL")',
                    },
                    {
                      alias: null,
                      args: h,
                      filters: i,
                      handle: "connection",
                      key: "ProfileCometTilesFeed_profile_tile_sections",
                      kind: "LinkedHandle",
                      name: "profile_tile_sections",
                    },
                    e,
                  ],
                },
              ],
              storageKey: null,
            },
            {
              alias: "about_collection",
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                d,
                e,
                {
                  if: null,
                  kind: "Defer",
                  label:
                    "ProfileCometLoggedOutRootQuery$defer$ProfileCometLoggedOutAboutContent_timelineCollection",
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "TimelineAppCollectionAboutProfileFieldSectionsRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "style_renderer",
                          plural: !1,
                          selections: [
                            d,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometLoggedOutAboutContent_timelineCollection",
                                  fragmentName:
                                    "ProfileCometAboutProfileFieldSectionsRenderer_styleRenderer",
                                  fragmentPropName: "styleRenderer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "TimelineAppCollectionAboutProfileFieldSectionsRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'style_renderer(supported:["TimelineAppCollectionAboutProfileFieldSectionsRenderer"])',
                        },
                      ],
                      type: "TimelineAppCollection",
                      abstractKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4303095116419786",
          metadata: {},
          name: "ProfileCometLoggedOutRootQuery",
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
  "CometProfileHeaderTopRow.react",
  [
    "CometEntityHeaderScrollToContext",
    "CometRow.react",
    "CometRowItem.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef;
    function a(a) {
      var b = a.actor,
        d = a.align;
      d = d === void 0 ? "center" : d;
      var e = a.banner;
      a = a.titleBlock;
      var f = k(null),
        g = i(c("CometEntityHeaderScrollToContext"));
      j(
        function () {
          g.scrollToTop(f, -32);
        },
        [g]
      );
      return h.jsxs("div", {
        className: "cbu4d94t j83agx80" + (d === "start" ? " nqmvxvec" : ""),
        children: [
          h.jsx("div", {
            className: c("stylex").dedupe(
              {
                "align-items-1": "aovydwv3",
                "align-self-1": "o8rfisnq",
                "display-1": "j83agx80",
                "height-1": "do00u71z",
                "margin-top-1": "tr9rh885",
              },
              d === "start" ? { "align-self-1": "nqmvxvec" } : null
            ),
            children: h.jsx(c("CometRow.react"), {
              paddingHorizontal: 0,
              paddingVertical: 0,
              spacing: 0,
              children: h.jsx(c("CometRowItem.react"), { ref: f, children: b }),
            }),
          }),
          h.jsx(c("CometRow.react"), {
            align: d,
            children: h.jsx(c("CometRowItem.react"), { children: a }),
          }),
          e,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseLinkEndpointModifierProvider.react",
  ["BaseLinkEndpointModifierContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.modifier,
        e = i(c("BaseLinkEndpointModifierContext"));
      a = j(
        function () {
          return [].concat(e, [d]);
        },
        [e, d]
      );
      return h.jsx(c("BaseLinkEndpointModifierContext").Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometPassiveScrollPosition",
  [
    "BaseScrollableAreaContext",
    "HiddenSubtreePassiveContext",
    "react",
    "useLayoutEffect_SAFE_FOR_SSR",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useRef;
    function a() {
      var a = h(c("HiddenSubtreePassiveContext")),
        b = h(c("BaseScrollableAreaContext")),
        d = i(null),
        e = b[b.length - 1];
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var b,
            c = (b = e == null ? void 0 : e.getDOMNode()) != null ? b : window;
          if (c == null) return;
          var f = function () {
              if (a.getCurrentState().hiddenOrBackgrounded) return;
              d.current =
                c instanceof HTMLElement
                  ? { left: c.scrollLeft, top: c.scrollTop }
                  : { left: c.scrollX, top: c.scrollY };
            },
            g = a.subscribeToChanges(function (a) {
              a.hiddenOrBackgrounded || f();
            });
          c.addEventListener("scroll", f, { passive: !0 });
          f();
          return function () {
            c.removeEventListener("scroll", f, { passive: !0 }), g.remove();
          };
        },
        [e, a]
      );
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometDirectionalDockingView.fixed.react",
  [
    "BaseViewportMarginsContext",
    "react",
    "stylex",
    "useCometPassiveScrollPosition",
    "useMergeRefs",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = {
        outerContainer: { position: "l9j0dhe7" },
        static: { position: "hwddc3l5" },
      };
    function a(a) {
      var b = a.top,
        d = b === void 0 ? 16 : b;
      b = a.bottom;
      var e = b === void 0 ? d : b;
      b = a.children;
      var f = a.mode,
        g = f === void 0 ? "directional" : f;
      f = a.tagName;
      f = f === void 0 ? "div" : f;
      a = a.xstyle;
      var n = j(c("BaseViewportMarginsContext")),
        o = c("useCometPassiveScrollPosition")(),
        p = l({
          innerHeight: null,
          innerWidth: null,
          outerHeight: null,
          outerOffsetLeft: null,
          outerOffsetTop: null,
          outerWidth: null,
          parentHeight: null,
          parentOffsetTop: null,
          windowHeight: null,
        }),
        q = l(null),
        r = l(null),
        s = i(function (a) {
          var b = a.height;
          a = a.width;
          p.current.innerHeight = b;
          p.current.innerWidth = a;
        }, []);
      s = c("useResizeObserver")(s);
      var t = i(
          function (a, b) {
            var c = a.height;
            a = a.width;
            b = b.getBoundingClientRect();
            p.current.outerHeight = c;
            p.current.outerWidth = a;
            p.current.outerOffsetLeft = b.left;
            p.current.outerOffsetTop =
              b.top +
              ((a = (c = o.current) == null ? void 0 : c.top) != null
                ? a
                : window.scrollY);
          },
          [o]
        ),
        u = c("useResizeObserver")(t);
      t = i(
        function (a, b) {
          a = a.height;
          p.current.parentHeight = a;
          p.current.parentOffsetTop =
            b.getBoundingClientRect().top +
            ((b = (a = o.current) == null ? void 0 : a.top) != null
              ? b
              : window.scrollY);
        },
        [o]
      );
      var v = c("useResizeObserver")(t);
      t = i(
        function (a) {
          q.current = a;
          u(a);
          v((a = a == null ? void 0 : a.parentElement) != null ? a : null);
        },
        [u, v]
      );
      s = c("useMergeRefs")(s, r);
      k(
        function () {
          var a = q.current,
            b = a == null ? void 0 : a.parentElement;
          if (a == null || b == null) return;
          var c = function () {
            var c,
              d = a.getBoundingClientRect(),
              e = b.getBoundingClientRect();
            p.current.outerOffsetTop =
              d.top +
              ((c = (c = o.current) == null ? void 0 : c.top) != null
                ? c
                : window.scrollY);
            p.current.parentOffsetTop =
              e.top +
              ((e = (c = o.current) == null ? void 0 : c.top) != null
                ? e
                : window.scrollY);
            p.current.outerOffsetLeft = d.left;
            p.current.windowHeight = window.innerHeight;
          };
          window.addEventListener("resize", c);
          return function () {
            window.removeEventListener("resize", c);
          };
        },
        [o]
      );
      k(
        function () {
          var a = q.current,
            b = r.current,
            c = a == null ? void 0 : a.parentElement,
            f = d + n.top,
            h = e + n.bottom;
          if (a == null || b == null || c == null) return;
          var i = b.getBoundingClientRect();
          a.style.height = i.height + "px";
          b.style.width = i.width + "px";
          b.style.position = "absolute";
          b.style.top = "0";
          b.style.left = "0";
          var j = a.getBoundingClientRect();
          c = c.getBoundingClientRect();
          var k = {
            innerHeight: i.height,
            innerWidth: i.width,
            outerHeight: j.height,
            outerOffsetLeft: j.left,
            outerOffsetTop:
              j.top +
              ((i = (i = o.current) == null ? void 0 : i.top) != null
                ? i
                : window.scrollY),
            outerWidth: j.width,
            parentHeight: c.height,
            parentOffsetTop:
              c.top +
              ((j = (i = o.current) == null ? void 0 : i.top) != null
                ? j
                : window.scrollY),
            windowHeight: window.innerHeight,
          };
          p.current = k;
          var l = function (a) {
              var b;
              return (b = p.current[a]) != null ? b : k[a];
            },
            m,
            s = { left: 0, position: "absolute", top: 0 },
            t = function (a) {
              (a.position !== s.position ||
                a.left !== s.left ||
                a.top !== s.top) &&
                ((s = a),
                (b.style.left = s.left + "px"),
                (b.style.position = s.position),
                (b.style.top = s.top + "px"));
            },
            u =
              (i = (c = o.current) == null ? void 0 : c.top) != null
                ? i
                : window.scrollY,
            v = 0;
          j = function c() {
            var d,
              i = {
                innerHeight: l("innerHeight"),
                innerWidth: l("innerWidth"),
                outerHeight: l("outerHeight"),
                outerOffsetLeft: l("outerOffsetLeft"),
                outerOffsetTop: l("outerOffsetTop"),
                outerWidth: l("outerWidth"),
                parentHeight: l("parentHeight"),
                parentOffsetTop: l("parentOffsetTop"),
                windowHeight: l("windowHeight"),
              },
              j = {
                maxAbsoluteTop: l("parentHeight") - l("innerHeight"),
                maxFixedTop: f,
                minAbsoluteTop: l("outerOffsetTop") - l("parentOffsetTop"),
                minFixedTop: i.windowHeight - l("innerHeight") - h,
              };
            i.outerWidth !== i.innerWidth &&
              ((b.style.width = i.outerWidth + "px"),
              (i.innerWidth = i.outerWidth));
            i.outerHeight !== i.innerHeight &&
              ((a.style.height = i.innerHeight + "px"),
              (i.outerHeight = i.innerHeight));
            d = (d = o.current) == null ? void 0 : d.top;
            if (d != null && d !== u && i.innerHeight) {
              var k = i.outerOffsetTop;
              if (g === "sticky" || i.innerHeight < i.windowHeight)
                d > k - f
                  ? d > k - f + j.maxAbsoluteTop
                    ? t({
                        left: 0,
                        position: "absolute",
                        top: j.maxAbsoluteTop,
                      })
                    : t({ left: i.outerOffsetLeft, position: "fixed", top: f })
                  : t({ left: 0, position: "absolute", top: 0 });
              else {
                k =
                  s.position === "absolute"
                    ? i.outerOffsetTop + s.top - d
                    : s.top;
                var n = k + i.innerHeight;
                d < i.parentOffsetTop + f && (v = j.minAbsoluteTop);
                d > u
                  ? n <= i.windowHeight - h &&
                    d > i.outerOffsetTop + i.innerHeight - i.windowHeight - h &&
                    d < i.parentOffsetTop + i.parentHeight - i.windowHeight - e
                    ? (t({
                        left: i.outerOffsetLeft,
                        position: "fixed",
                        top: j.minFixedTop,
                      }),
                      (v = d - i.outerOffsetTop + k))
                    : t({ left: 0, position: "absolute", top: Math.max(v, 0) })
                  : k >= f && d >= i.outerOffsetTop - f
                  ? (t({
                      left: i.outerOffsetLeft,
                      position: "fixed",
                      top: j.maxFixedTop,
                    }),
                    (v = d - i.outerOffsetTop + k))
                  : t({ left: 0, position: "absolute", top: Math.max(v, 0) });
              }
              u = d;
            } else
              s.position === "fixed" &&
                s.left !== i.outerOffsetLeft &&
                ((s.left = i.outerOffsetLeft),
                (b.style.left = i.outerOffsetLeft + "px"));
            m = window.requestAnimationFrame(c);
          };
          m = window.requestAnimationFrame(j);
          return function () {
            window.cancelAnimationFrame(m);
          };
        },
        [e, g, o, d, n.bottom, n.top]
      );
      var w = c("stylex").compose(a).position;
      w = w === m["static"].position || w === void 0;
      return h.jsx(f, {
        className: c("stylex")(a, w && m.outerContainer),
        ref: t,
        children: h.jsx("div", { ref: s, children: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometHeader.react",
  [
    "CometRelay",
    "ProfileCometHeaderQuery.graphql",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "ProfileCometEntityHeaderChooser.react"
        ).__setRef("ProfileCometHeader.react")
      );
    function a(a) {
      a = a.headerQueryReference;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0 ? h : (h = b("ProfileCometHeaderQuery.graphql")),
        a
      );
      return i.jsx(j, { query: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometSessionCleaner",
  [
    "ProfileCometSessionConfig",
    "ProfileCometSessionUtil",
    "WebStorage",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a === void 0 && (a = !0);
      var b = c("WebStorage").getLocalStorage();
      if (!b) return;
      var e = d("ProfileCometSessionUtil").getStorageKeys(b);
      if (a) {
        var f = Date.now();
        e = e.filter(function (a) {
          a = b.getItem(a);
          if (a == null) return !0;
          a = a.split(":");
          a[0];
          a = a[1];
          a = parseInt(a, 10);
          return f - a >= d("ProfileCometSessionConfig").TIMEOUT_MS;
        });
      }
      e.map(function (a) {
        return b.removeItem(a);
      });
    }
    function a() {
      h(), c("setTimeout")(h, d("ProfileCometSessionConfig").TIMEOUT_MS);
    }
    function b() {
      h(!1);
    }
    g.cleanup = a;
    g.wipe = b;
  },
  98
);
__d(
  "useProfileCometSession",
  [
    "CometRouteMatch",
    "ProfileCometSession",
    "ProfileCometSessionCleaner",
    "getTopMostRoute",
    "react",
    "useCometRouterState",
    "useOnBeforeUnload",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      c("useOnBeforeUnload")(function () {
        return d("ProfileCometSessionCleaner").cleanup();
      });
      var b = c("useCometRouterState")(),
        e = b != null ? c("getTopMostRoute")(b) : null,
        f = d("CometRouteMatch").useCurrentRouteMatcher(
          d("CometRouteMatch").MatchFunctions.routeMatchFunction
        );
      return h(
        function () {
          if (!d("ProfileCometSession")) return;
          if (e) {
            var b = f(e);
            b && d("ProfileCometSession").extend(a, e);
          }
        },
        [a, f, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometSessionExtender.react",
  ["useGlobalEventListener", "useProfileCometSession"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = a.userID;
      a = c("useProfileCometSession")(a);
      c("useGlobalEventListener")("focus", a);
      c("useGlobalEventListener")("keydown", a);
      c("useGlobalEventListener")("mousedown", a);
      c("useGlobalEventListener")("scroll", a);
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometViewAsEndpointModifier.react",
  [
    "BaseLinkEndpointModifierProvider.react",
    "ConstUriUtils",
    "ProfileCometContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext;
    function a(a) {
      a = a.children;
      var b = j(c("ProfileCometContext")),
        e = b.isInViewAs,
        f = b.profileID,
        g = b.profileVanity,
        k = b.viewerID;
      b = i(
        function (a) {
          if (!e) return a;
          var b = d("ConstUriUtils").getUri(a);
          if (b == null) return a;
          if (b.getQueryParam("viewas") === "") return a;
          var c = b.getPath().startsWith("/me/") || b.getPath() === "/me",
            h =
              g != null &&
              (b.getPath().startsWith("/" + g + "/") ||
                b.getPath() === "/" + g),
            i = b.getPath() === "/profile.php" && b.getQueryParam("id") === f;
          if (c || h || i) {
            return (h =
              (c = b.addQueryParam("viewas", k)) == null
                ? void 0
                : c.toString()) != null
              ? h
              : a;
          }
          return a;
        },
        [e, f, g, k]
      );
      return h.jsx(c("BaseLinkEndpointModifierProvider.react"), {
        modifier: b,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useProfileCometViewAsExitHandler",
  ["fbt", "ProfileCometRoutingUtils", "useOnBeforeUnload"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      c("useOnBeforeUnload")(function (b) {
        if (!b) return;
        if (
          a &&
          !(
            d("ProfileCometRoutingUtils").isProfilePolicy(
              b == null ? void 0 : b.tracePolicy
            ) &&
            (b == null ? void 0 : (b = b.params) == null ? void 0 : b.viewas) !=
              null
          )
        )
          return { warnMessage: h._("Do you want to exit View As mode?") };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometRoot.react",
  [
    "Actor",
    "CometErrorBoundary.react",
    "CometErrorRoot.react",
    "CometLayout.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometStickyHeaderContentArea.react",
    "CometTransientDialogProvider.react",
    "InteractionTracingMetrics",
    "ProfileCometContext",
    "ProfileCometHeader.react",
    "ProfileCometSessionExtender.react",
    "ProfileCometUtils",
    "ProfileCometViewAsEndpointModifier.react",
    "ProfilePlusFollowChainingContext.react",
    "cr:1801407",
    "cr:529",
    "emptyFunction",
    "nux:47",
    "react",
    "useOnRefreshScrollToTop",
    "useProfileCometIsViewAs",
    "useProfileCometViewAsExitHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j =
        (e =
          b("nux:47") == null
            ? void 0
            : b("nux:47")("profile_pinned_feature_nux")) != null
          ? e
          : c("emptyFunction");
    function a(a) {
      var e = a.entryPoints,
        f = a.props;
      a = a.queries;
      f = f.routeProps;
      var g = f.userID,
        k = f.userVanity;
      f = d("Actor").useActor();
      var l = f[0],
        m = c("useProfileCometIsViewAs")();
      f = i(
        function () {
          return { isInViewAs: m, profileID: g, profileVanity: k, viewerID: l };
        },
        [m, g, k, l]
      );
      c("useOnRefreshScrollToTop")();
      c("useProfileCometViewAsExitHandler")(m);
      var n = j(d("ProfileCometUtils").isViewingSelfProfile(g, l));
      c("InteractionTracingMetrics")
        .currentInteractionLogger()
        .addMetadata("profile_id", g);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("ProfileCometSessionExtender.react"), { userID: g }),
          h.jsxs(c("ProfileCometContext").Provider, {
            value: f,
            children: [
              h.jsx(c("ProfileCometViewAsEndpointModifier.react"), {
                children: h.jsx(
                  c("CometTransientDialogProvider.react"),
                  {
                    children: h.jsx(
                      d("ProfilePlusFollowChainingContext.react")
                        .ProfilePlusFollowChainingContextProvider,
                      {
                        children: h.jsx(c("CometLayout.react"), {
                          children: h.jsx(
                            c("CometStickyHeaderContentArea.react"),
                            {
                              header: h.jsxs(h.Fragment, {
                                children: [
                                  m &&
                                    e.viewAsEntryPoint &&
                                    h.jsx(d("CometRelay").EntryPointContainer, {
                                      entryPointReference: e.viewAsEntryPoint,
                                      props: {},
                                    }),
                                  h.jsxs(c("CometPlaceholder.react"), {
                                    fallback: h.jsx(b("cr:529"), {}),
                                    children: [
                                      h.jsx(c("ProfileCometHeader.react"), {
                                        headerQueryReference:
                                          a.headerQueryReference,
                                      }),
                                      n,
                                    ],
                                  }),
                                ],
                              }),
                              scrollKey: g,
                              useDeprecatedStyles: !0,
                              children: h.jsx(c("CometErrorBoundary.react"), {
                                fallback: function () {
                                  return h.jsx(c("CometErrorRoot.react"), {});
                                },
                                children: h.jsx(c("CometPlaceholder.react"), {
                                  fallback: h.jsx("div", {}),
                                  children: h.jsx(
                                    d("CometRelay").EntryPointContainer,
                                    {
                                      entryPointReference: e.contentEntryPoint,
                                      props: {},
                                    }
                                  ),
                                }),
                              }),
                            }
                          ),
                        }),
                      }
                    ),
                  },
                  l + "_" + g
                ),
              }),
              b("cr:1801407") &&
                a.footerDataQueryReference != null &&
                h.jsx(b("cr:1801407"), {
                  footerDataQueryReference: a.footerDataQueryReference,
                }),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "ProfileCometTimelineTwoColumnLayout.react",
  ["CometResponsiveColumns.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        overflowAnchor: { overflowAnchor: "rek2kq2y" },
        timelineContainer: { marginTop: "tr9rh885" },
      };
    function a(a) {
      var b = a.aboveContent,
        c = a.auxColumn,
        e = a.contentColumn;
      a = a.reversed;
      a = a === void 0 ? !1 : a;
      c = h.jsx(d("CometResponsiveColumns.react").Column, {
        columnType: "SECONDARY",
        xstyle: i.overflowAnchor,
        children: c,
      });
      e = h.jsx(d("CometResponsiveColumns.react").Column, {
        columnType: "FEED",
        children: e,
      });
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(d("CometResponsiveColumns.react").Container, {
            containerWidth: "DEFAULT",
            children: h.jsx(d("CometResponsiveColumns.react").Column, {
              columnType: "FULL",
              children: b,
            }),
          }),
          h.jsxs(d("CometResponsiveColumns.react").Container, {
            containerWidth: "DEFAULT",
            xstyle: i.timelineContainer,
            children: [a ? e : c, a ? c : e],
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
  "ProfileCometAboutAppSectionContentGlimmer.react",
  [
    "BaseGlimmer.react",
    "BaseLoadingStateElement.react",
    "CometRow.react",
    "CometRowItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx(c("BaseLoadingStateElement.react"), {
        children: h.jsxs("div", {
          className: "tu1s4ah4",
          children: [
            h.jsx(c("CometRow.react"), {
              children: h.jsx(c("CometRowItem.react"), {
                children: h.jsx(c("BaseGlimmer.react"), {
                  className:
                    "k5ud4834 jnigpg78 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                  index: 0,
                }),
              }),
            }),
            h.jsx(c("CometRow.react"), {
              children: h.jsx(c("CometRowItem.react"), {
                children: h.jsxs("div", {
                  className: "j83agx80",
                  children: [
                    h.jsx(c("BaseGlimmer.react"), {
                      className:
                        "q676j6op tvfksri0 qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",
                      index: 0,
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "tvmbv18p jnigpg78 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 ajzd4i4n",
                          index: 1,
                        }),
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "hy61f1kz gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                          index: 1,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            h.jsx(c("CometRow.react"), {
              children: h.jsx(c("CometRowItem.react"), {
                children: h.jsxs("div", {
                  className: "j83agx80",
                  children: [
                    h.jsx(c("BaseGlimmer.react"), {
                      className:
                        "q676j6op tvfksri0 qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",
                      index: 0,
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "tvmbv18p jnigpg78 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 k6hq67h2",
                          index: 1,
                        }),
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "hy61f1kz gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                          index: 1,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            h.jsx(c("CometRow.react"), {
              children: h.jsx(c("CometRowItem.react"), {
                children: h.jsxs("div", {
                  className: "j83agx80",
                  children: [
                    h.jsx(c("BaseGlimmer.react"), {
                      className:
                        "q676j6op tvfksri0 qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",
                      index: 0,
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "tvmbv18p jnigpg78 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 aerw5wb0",
                          index: 1,
                        }),
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "hy61f1kz gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                          index: 1,
                        }),
                      ],
                    }),
                  ],
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
  "ProfileCometHeaderGlimmer.react",
  [
    "BaseGlimmer.react",
    "CometAspectRatioContainer.react",
    "CometEntityHeaderBottomRow.react",
    "CometEntityHeaderCoverPhotoRow.react",
    "CometEntityPageHeader.react",
    "CometFeedWidthStyles",
    "CometProfileHeaderTopRow.react",
    "ProfileCometProfilePictureGlimmer.react",
    "ProfileCometTabsGlimmer.react",
    "react",
    "stylex",
    "useIsCometOnMobile.hybrid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        coverPhoto: {
          borderBottomEndRadius: "hqlzco19",
          borderBottomStartRadius: "lsl2245n",
          marginTop: "kvgmc6g5",
          marginEnd: "ad2k81qe",
          marginBottom: "oygrvhab",
          marginStart: "f9o22wc5",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
        coverPhotoGlimmer: { height: "datstx6m", width: "k4urcfbm" },
        name: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "rgmg9uty",
          marginBottom: "sjgh65i0",
          width: "qrv0bcbf",
        },
      },
      j = d("CometFeedWidthStyles").getEntityHeaderWidthStyles();
    function a() {
      var a = c("useIsCometOnMobile.hybrid")();
      a = h.jsx(c("CometProfileHeaderTopRow.react"), {
        actor: h.jsx(c("ProfileCometProfilePictureGlimmer.react"), {
          size: a ? 100 : 168,
        }),
        titleBlock: h.jsx(c("BaseGlimmer.react"), {
          className: c("stylex")(i.name),
          index: 3,
        }),
      });
      var b = h.jsx(c("CometEntityHeaderBottomRow.react"), {
        buttonGroup: null,
        tabs: h.jsx(c("ProfileCometTabsGlimmer.react"), {}),
      });
      return h.jsx(c("CometEntityPageHeader.react"), {
        bottomRow: b,
        coverPhotoRow: h.jsx(c("CometEntityHeaderCoverPhotoRow.react"), {
          coverPhoto: h.jsx("div", {
            className: c("stylex")(i.coverPhoto, j.coverMediaContainer),
            children: h.jsx(c("CometAspectRatioContainer.react"), {
              aspectRatio: 940 / 348,
              children: h.jsx(c("BaseGlimmer.react"), {
                className: c("stylex")(i.coverPhotoGlimmer),
                index: 1,
              }),
            }),
          }),
        }),
        topRow: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometTileSectionGlimmer.react",
  [
    "BaseGlimmer.react",
    "BaseLoadingStateElement.react",
    "CometAspectRatioContainer.react",
    "CometCard.react",
    "CometFixedGrid.react",
    "getRoundedCorners",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 9,
      j = 3;
    function a(a, b) {
      var d = c("getRoundedCorners")(i, j);
      return h.jsx(c("BaseLoadingStateElement.react"), {
        ref: b,
        children: h.jsx("div", {
          className: "sjgh65i0",
          "data-testid": void 0,
          children: h.jsx(c("CometCard.react"), {
            background: "white",
            dropShadow: 1,
            children: h.jsxs("div", {
              className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
              children: [
                h.jsx(c("BaseGlimmer.react"), {
                  className:
                    "k5ud4834 sjgh65i0 hm271qws lsl2245n hqlzco19 o3c63hce lit7pgxp",
                  index: 0,
                }),
                h.jsx("div", {
                  className: "abpf7j7b exrn9cbp",
                  children: h.jsx(c("CometFixedGrid.react"), {
                    columns: 3,
                    gap: 4,
                    children: Array.from(new Array(i), function (a, b) {
                      return h.jsx(
                        c("CometAspectRatioContainer.react"),
                        {
                          aspectRatio: 1,
                          children: h.jsx(
                            c("BaseGlimmer.react"),
                            {
                              className:
                                "datstx6m" +
                                (c("getRoundedCorners").hasCorner(
                                  (a = d[b]) != null ? a : 0,
                                  c("getRoundedCorners").CORNERS.TOP_START
                                )
                                  ? " ue3kfks5"
                                  : "") +
                                (c("getRoundedCorners").hasCorner(
                                  (a = d[b]) != null ? a : 0,
                                  c("getRoundedCorners").CORNERS.TOP_END
                                )
                                  ? " pw54ja7n"
                                  : "") +
                                (c("getRoundedCorners").hasCorner(
                                  (a = d[b]) != null ? a : 0,
                                  c("getRoundedCorners").CORNERS.BOTTOM_START
                                )
                                  ? " l82x9zwi"
                                  : "") +
                                (c("getRoundedCorners").hasCorner(
                                  (a = d[b]) != null ? a : 0,
                                  c("getRoundedCorners").CORNERS.BOTTOM_END
                                )
                                  ? " uo3d90p7"
                                  : ""),
                              index: b % j,
                            },
                            b
                          ),
                        },
                        b
                      );
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "ProfileCometLoggedOutRoot.react",
  [
    "fbt",
    "CometCard.react",
    "CometDirectionalDockingView.react",
    "CometErrorRoot.react",
    "CometPlaceholder.react",
    "CometRelay",
    "ProfileCometAboutAppSectionContentGlimmer.react",
    "ProfileCometLoggedOutRootQuery.graphql",
    "ProfileCometTileSectionGlimmer.react",
    "ProfileCometTimelineTwoColumnLayout.react",
    "TetraText.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("ProfileCometTilesFeed.react").__setRef(
          "ProfileCometLoggedOutRoot.react"
        )
      ),
      l = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "ProfileCometLoggedOutAboutContent.react"
        ).__setRef("ProfileCometLoggedOutRoot.react")
      ),
      m = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "ProfileCometTimelineTabFeedBanner.react"
        ).__setRef("ProfileCometLoggedOutRoot.react")
      );
    function a(a) {
      a = a.queries;
      var e = d("CometRelay").usePreloadedQuery(
        i !== void 0 ? i : (i = b("ProfileCometLoggedOutRootQuery.graphql")),
        a.loggedOutRootQueryReference
      );
      if (!e.user) return j.jsx(c("CometErrorRoot.react"), {});
      var f = e.about_collection;
      return !f
        ? j.jsx(c("CometErrorRoot.react"), {})
        : j.jsx(c("ProfileCometTimelineTwoColumnLayout.react"), {
            auxColumn: j.jsx(c("CometDirectionalDockingView.react"), {
              bottom: 16,
              top: 16,
              children: j.jsx(c("CometPlaceholder.react"), {
                fallback: j.jsx(c("ProfileCometTileSectionGlimmer.react"), {}),
                children: j.jsx(k, { user: e.user }),
              }),
            }),
            contentColumn: j.jsxs("div", {
              children: [
                j.jsx("div", {
                  className: "sjgh65i0",
                  children: j.jsxs(c("CometCard.react"), {
                    background: "white",
                    dropShadow: 1,
                    children: [
                      j.jsx("div", {
                        className: "jei6r52m dhix69tm",
                        children: j.jsx(c("TetraText.react"), {
                          isSemanticHeading: !0,
                          type: "headlineEmphasized2",
                          children: h._("About"),
                        }),
                      }),
                      j.jsx(c("CometPlaceholder.react"), {
                        fallback: j.jsx(
                          c("ProfileCometAboutAppSectionContentGlimmer.react"),
                          {}
                        ),
                        children: j.jsx(l, {
                          collection: f,
                          variables: a.loggedOutRootQueryReference.variables,
                        }),
                      }),
                    ],
                  }),
                }),
                j.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: j.jsx(m, { user: e.user }),
                }),
                j.jsx(c("CometPlaceholder.react"), {
                  fallback: j.jsx(
                    c("ProfileCometTileSectionGlimmer.react"),
                    {}
                  ),
                  children: j.jsx(k, {
                    shouldShowFooter: !1,
                    user: e.mainColumnTiles,
                  }),
                }),
              ],
            }),
            reversed: !0,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.memo(a);
    g["default"] = e;
  },
  98
);
